import re
import random

from django.core.cache import cache  # django自带的这个缓存是利用了当前的内存
from libs.sms import send_sms

'''
命名规范
    is：判断是否是
    hs：判断有没有
'''


def is_phonenum(phonenum):
    '''验证是否是一个正确的手机号'''
    if re.match(r'^1[3-9]\d{9}$', phonenum):  # []如果是连续的可以用-，不是连续的就全写出来
        return True
    else:
        return False


def random_code(length=6):
    '''产生指定长度短信随机码'''
    nums = [str(random.randint(0, 9)) for i in range(length)]
    return ''.join(nums)


def send_vcode(phonenum):
    '''给用户发送短信验证码'''
    # 第一步验证手机号，不然往下走没意义
    if not is_phonenum(phonenum):
        return False

    key = 'Vcode-%s' % phonenum # 'Vcode-%s'这是在一个字段前加特征的写法，防止与其他相同字段发生冲突

    # 检查缓存中是否已有验证码，防止用户频繁调用接口
    if cache.get(key):
        return True

    # 产生验证码
    vcode = random_code()
    print('随机码:', vcode)

    # 缓存保存验证码
    # cache.set(key, vcode)

    # 缓存保存验证码时间
    # 虽然说给不到10分钟，但是给10分钟，是为了防止客户网络不好，给客户良好的用户体验
    cache.set(key, vcode, 600)  # 设置了10分钟

    # 向用户手机发送验证码
    return send_sms(phonenum, vcode)
