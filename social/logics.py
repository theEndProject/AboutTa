import datetime

from aboutTa import config
from libs.cache import rds
from social.models import Slider, Friend
from user.models import User, Profile
from common import keys, errors

from django.db.transaction import atomic  # 本身是装饰器，是程序员自控的事务

'''
    不管是在滑动喜欢还是反悔之类的都是关联性的逻辑
    如果在中途发生异常情况，上面的操作判断成功了，下面的操作判断失败了，就会造成一个bug
    这种情况下需要 -----+                  begin; 开始
                     ↓                  select.....
                    事务 ---- SQL中的事务  update.....
                                 |       delete.....
                                 ↓       commit; 提交
                      隔离性,原子性，一致性，持久性            
    +------------------+     ↓
    ↓              要么全部完成，要么全部不完成
数据库允许多个并发事
务同时对其数据进行读
写和修改的能力，隔离性
可以防止多个事务并发执
行时由于交叉执行而导致
数据的不一致。  
'''
'''
    django里面是自带自动提交事务的 ---> AUTOCOMMIT
    ATOMIC_REQUESTS ---> 原子性请求 ---> 会把一整个请求包在一起
                                                ↓
                                    优点：简单，操作起来最方便，提交，回滚都不需要程序员操作
                                    缺点：并不是所有函数都需要事务，浪费储存空间，降低性能
'''


def rcmd_from_queue(uid):
    '''优先从喜欢我的人队列里面进行推荐'''
    uid_list = rds.lrange(keys.FIRST_RCMD_Q % uid, 0, 19)
    # 从优先推荐队列取出uid列表
    # lrange是redis的获取数据
    # 左避右避
    uid_list = [int(uid) for uid in uid_list]  # 将二进制uid强转成int类型
    return User.objects.filter(id__in=uid_list)


def rcmd_from_db(uid, num=20):
    '''从数据库中推荐用户'''
    profile = Profile.objects.get(id=uid)

    '''
        datetime模块
            datetime.datetime 年月日时分秒
            datetime.date 年月日 
            datetime.time 时分秒 
            datetime.timedelta 时间差值 （datetime.datetime和datetime.date支持运算，datetime.time不支持运算）
    '''
    # 计算出生日期范围
    today = datetime.date.today()

    earliest_list = today - datetime.timedelta(profile.max_dating_age * 365)  # 最早出生的日期
    latest_birth = today - datetime.timedelta(profile.min_dating_age * 365)  # 最晚出生的日期

    # 获取已经划过的用户的 ID
    # 对应的SQL语句 ---> select sid from Slider where uid=1001
    sid_list = Slider.objects.filter(uid=uid).values_list('sid', flat=True)  # values_list拿去需要的字段，flat将列表套元组，处理成列表
    '''
        客户段获取用户定位的方式
            GPS
            蜂窝网络定位
            WI-FI网络定位
            IP 地址定位
        客户端可以获取到用户的经纬度
            经度范围：-180 ~ 180
            纬度范围: -90 ~ 90
        模糊位置处理算法：GeoHash    
    '''
    users = User.objects.filter(
        location=profile.dating_location,
        gender=profile.dating_gender,
        birthday__range=[earliest_list, latest_birth]  # 年龄范围
    ).exclude(id__in=sid_list)[:num]
    # exclude ---> 排除
    # django限制 (懒加载 ---> 用到它的时候再加载)

    # SQL限制
    '''
        LIMIT 语法回顾
            select * from xxx limit 20; 取前20个
            select * from xxx limit 20,30; 跳过前20个，从21开始取30个
            select * from xxx limit 20 offset 30; 跳过前30个，从31开始取20个
    '''

    # TODO:排除已经滑过的人(TODO:的意思是待完成)

    return users


def rcmd(uid):
    '''推荐滑动用户'''
    first_users = rcmd_from_queue(uid)  # 获取第一批数据来自喜欢我的人队列
    remain = 20 - len(first_users)  # 计算需要从数据库获取的个数
    if remain:
        second_users = rcmd_from_db(uid, remain)  # 这里的remain就是rcmd_from_db方法的num
        '''
            set数组
                &交集 |并集 -差集 ^交集的补集
        '''
        # first_users和second_users都是Queryset
        return set(first_users) | set(second_users)  # 数组 ---> 顺序是不确定的
    else:
        return first_users

    '''
        redis的删除
            lpop(name)只能弹出最左边和最右边，但是set元组打乱了id的位置，所以不能用
            lrem(name,count,value)可以刚好的选择性的删除，并且有没有的情况下删除不会不错
                count>0 从头到尾删除 count<0 从尾到头删除 count=0删除所有等于value的值
                value是要删除的值
    '''


@atomic  # 包住整个函数，如果出错，代码回滚，如果无错，会提交
def like_someone(uid, sid):
    '''喜欢（右滑）'''
    # 添加滑动记录
    Slider.slide(uid, sid, 'like')

    # 删除优先从喜欢我的人队列里面的推荐 sid
    rds.lrem(keys.FIRST_RCMD_Q % uid, count=0, value=sid)

    # raise ValueError 事务回滚测试
    
    # 检查对方是否喜欢（右滑或上滑）过自己
    if Slider.is_like(sid, uid):
        # 将互相喜欢的两人添加好友
        Friend.make_friends(uid, sid)
        return True
    else:
        return False


@atomic
def superlike_someone(uid, sid):
    '''超级喜欢（上滑）'''
    # 添加滑动记录
    Slider.slide(uid, sid, 'superlike')

    # 删除优先从喜欢我的人队列里面的推荐 sid
    rds.lrem(keys.FIRST_RCMD_Q % uid, count=0, value=sid)

    # 检查对方是否喜欢（右滑或上滑）过自己
    liked = Slider.is_like(sid, uid)
    if liked is True:
        # 将互相喜欢的两人添加好友
        Friend.make_friends(uid, sid)
        return True
    elif liked is False:
        return False
    else:
        # 因为是临时存储，所以用redis做

        # 对方尚未滑倒过自己，将自己优先推荐给对方
        rds.rpush(keys.FIRST_RCMD_Q % sid, uid)
        return False


def dislike_someone(uid, sid):
    '''不喜欢（左滑）'''
    # 添加滑动记录
    Slider.slide(uid, sid, 'dislike')

    # 删除优先从喜欢我的人队列里面的推荐 sid
    rds.lrem(keys.FIRST_RCMD_Q % uid, count=0, value=sid)


def rewind_last_slide(uid):
    '''返回上一次滑动（每天允许返回三次，返回的记录只能是五分钟以内的）'''
    now = datetime.datetime.now()
    # 检查今天是否已经反悔3次 ---> 适合缓存
    rewind_key = keys.REWIND_LIMIT_K % (now.date(), uid)  # now.date() 是日期
    rewind_limit = rds.get(rewind_key, 0)
    '''
        每日更新三次
        # 错误方式
        1.过期时间 
        2.定时任务 ---> 人数多了，异步任务太多处理不了 
        3.建立redis库 ---> 保存key，到时间清空，在清空的时候也会出现临界点问题
        # 正确方式
        将日期拼接在用户的key上面
        
        ※时间临界点：
            23：59：59.123 使用了2次反悔，现在要准备用第三次
            当用了之后时间变成 00：00：00.321了，此时变成了3
            用户一天都不能用返回了，这就是临界点可能出现的问题
    '''
    if rewind_limit >= config.REWIND_LIMIT:
        raise errors.RewindLimit

    # 找当最后一次的滑动
    # 对应的SQL语句 select * from slider where uid=1001 order by stime desc limit 1;
    last_slide = Slider.objects.filter(uid=uid).latest('stime')  # 不分对方和方向
    # latest() ---> 最新的（按照时间最新的），这个latest强调时间

    # 检查最后一次滑动是否在5分钟以内
    # (now - last_slide.stime)两个相减的值是datetime.timedelta(天,秒,毫秒),是一个特殊的对象
    # (now - last_slide.stime).seconds 忽略了天和毫秒，单位是秒
    # (now - last_slide.stime).total_seconds() 天秒毫秒全加起来，单位是秒
    time_past = (now - last_slide.stime).total_seconds()  # 已经过去的时间
    if time_past >= config.REWIND_TIMEOUT:
        raise errors.RewindTimeout

    with atomic():    # 将多次数据修改在事务中执行
        # 衍生的功能 +
        #          ↓
        # 1.如果之前匹配成了好友，则删除好友关系
        if last_slide.stype in ['like', 'superlike']:
            Friend.breakoff(uid, last_slide.sid)

            # 2.如果之前是超级喜欢，则找到对方的优先推荐队列把我的数据删除
            if last_slide.stype == 'superlike':
                rds.lrem(keys.FIRST_RCMD_Q % last_slide.sid, 0, uid)

        # 3.删除最后一次的滑动
        last_slide.delete()

        # 4.今日返回次数加一，缓存过期时间一天(86400秒)，+ N秒 是为了避免时间临界点问题
        rds.set(rewind_key, rewind_limit + 1, 86400 + 1)
