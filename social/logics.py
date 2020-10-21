import datetime

from libs.cache import rds
from social.models import Slider, Friend
from user.models import User, Profile
from common import keys


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


def like_someone(uid, sid):
    '''喜欢（右滑）'''
    # 添加滑动记录
    Slider.objects.create(uid=uid, sid=sid, stype='like')

    # 删除优先从喜欢我的人队列里面的推荐 sid
    rds.lrem(keys.FIRST_RCMD_Q % uid, count=0, value=sid)

    # 检查对方是否喜欢（右滑或上滑）过自己
    if Slider.is_like(sid, uid):
        # 将互相喜欢的两人添加好友
        Friend.make_friends(uid, sid)
        return True
    else:
        return False


def superlike_someone(uid, sid):
    '''超级喜欢（上滑）'''
    # 添加滑动记录
    Slider.objects.create(uid=uid, sid=sid, stype='superlike')

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
    Slider.objects.create(uid=uid, sid=sid, stype='dislike')

    # 删除优先从喜欢我的人队列里面的推荐 sid
    rds.lrem(keys.FIRST_RCMD_Q % uid, count=0, value=sid)
