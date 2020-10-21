import datetime

from social.models import Slider, Friend
from user.models import User, Profile


def rcmd(uid):
    '''推荐滑动对象'''
    profile = Profile.objects.get(id=uid)

    '''
        datetime模块
            datetime.datetime 年月日时分秒
            datetime.date 年月日 
            datetime.time 时分秒 
            datetime.timedelta 时间差值 （datetime.datetime和datetime.date支持运算，datetime.time不支持运算）
    '''
    today = datetime.date.today()

    earliest_list = today - datetime.timedelta(profile.max_dating_age * 365)  # 最早出生的日期
    latest_birth = today - datetime.timedelta(profile.min_dating_age * 365)  # 最晚出生的日期
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
        gender=profile.fdating_gender,
        birthday__range=[earliest_list, latest_birth]  # 年龄范围
    )[:20]  # django限制 (懒加载 ---> 用到它的时候再加载)

    # SQL限制
    '''
        LIMIT 语法回顾
            select * from xxx limit 20; 取前20个
            select * from xxx limit 20,30; 跳过前20个，从21开始取30个
            select * from xxx limit 20 offset 30; 跳过前30个，从31开始取20个
    '''

    # TODO:排除已经滑过的人(TODO:的意思是待完成)

    return users


def like_someone(uid, sid):
    '''喜欢（右滑）'''
    # 添加滑动记录
    Slider.objects.create(uid=uid, sid=sid, stype='like')
    # 检查对方是否喜欢（右滑或上滑）过自己
    is_liked = Slider.objects.filter(uid=sid, sid=uid, stype__in=['like', 'superlike']).exists()  # .exists()判断是否存在
    if is_liked:
        # 将互相喜欢的两人添加好友
        Friend.make_friends(uid, sid)
        return True
    else:
        return False
