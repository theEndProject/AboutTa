from vip.models import Permission
from user.models import User
from common.errors import PermissionErr

# 小范围的用装饰器，大范围的用中间件
'''
    普通装饰器
    def deco(func): func --> 被装饰的函数对象
        def wrapper(*args,**kwargs) *args,**kwargs ---> 被装饰的元函数参数
            result = func(*args,**kwargs)
            return result
        return wrapper
'''


def perm_required(perm_name):
    '''权限检查装饰器'''

    def deco(view_func):  # 装饰视图函数
        def wrapper(request, *args, **kwargs):
            '''检查当前用户购买的 VIP 是否具有 某权限'''
            # 获取当前用户
            user = User.objects.get_or_create(id=request.uid)
            # 进行权限检查
            if user.vip.has_perm(perm_name):
                return view_func(request, *args, **kwargs)
            else:
                raise PermissionErr

        return wrapper

    return deco
