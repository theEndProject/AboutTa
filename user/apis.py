from django.http import JsonResponse
from django.core.cache import cache
from user.logics import send_vcode
from user.models import User


# Create your views here.

def fetch_vcode(request):
    '''给用户发送验证码'''
    phonenum = request.GET.get('phonenum')
    if send_vcode(phonenum):
        return JsonResponse({'code': 0, 'data': None})
    else:
        return JsonResponse({'code': 1000, 'data': '验证码发送失败'})


'''
一般是常用的4个：
    POST 强调创建
    GET 强调获取
    PUT 强调更新、修改
    DELETE 强调删除
但是django只是封装了GET、POST
'''


# GET 强调获取
# POST 强调创建、修改、更新
def submit_vcode(request):
    '''提交验证码，执行登录注册'''
    phonenum = request.POST.get('phonenum')
    vcode = request.POST.get('vcode')

    key = 'Vcode-%s' % phonenum
    cached_vcode = cache.get(key)

    # 如果在用户提交的时候没有上传vcode验证码，vcode就会是None值
    # 如果cached_vcode的验证码过期了，cached_vcode也会成为None值
    # 判断就恰巧一致了，通过了！！！！
    # 解决：就用and一起判断一下
    if vcode and vcode == cached_vcode:
        # objects.filter()的值是queryset的一个类型，需要再调一下
        # objects.get()会避免值的问题，但是找不到用户会报错
        try:
            user = User.objects.get(phonenum=phonenum)  # 从数据库获取数据
        except User.DoesNotExist:  # 错误捕获到精确的模型
            # 刚好因为它找不到用户会报错，能利用这个报错来完成用户的注册
            user = User.objects.create(phonenum=phonenum, nickname=phonenum)  # create底层封装了save函数
        '''
        记录用户登录的状态的方式：
            Cookie会明文出现在浏览器端
            Session依赖Cookie，但是相对于Cookie更加的安全
            JsonWebToken(JWT) 给django加插件就可以用
        '''
        # 在Session中记录用户登录的状态
        request.session['uid'] = user.id
        return JsonResponse({'code': 0, 'data': user.to_dict()})
        '''
        类字典对象： ----> 顾名思义,类似字典的对象
            |     django     |     flask    |
            | request.GET    | request.args |
            | request.POST   | request.from |
            | request.FILES  | request.files|
            | request.session| session      |
            | request.META   |              |
        '''
    else:
        return JsonResponse({'code': 1001, 'data': '验证码错误'})


def show_profile(request):
    '''查看个人资料'''
    return JsonResponse()


def update_profile(request):
    '''更新个人资料'''
    return JsonResponse()


def qn_token(request):
    '''获取七牛云的token'''
    return JsonResponse()


def qn_callback(request):
    '''七牛云回调接口'''
    return JsonResponse()
