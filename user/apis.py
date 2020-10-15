from django.http import JsonResponse
from django.core.cache import cache
from user.logics import send_vcode
from user.models import User, Profile
from user.forms import UserForm, ProfileForm


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
    uid = request.session['uid']
    profile, _ = Profile.objects.get_or_create(id=uid)
    return JsonResponse({'code': 0, 'data': profile.to_dict()})


def update_profile(request):
    '''更新个人资料'''
    # nickname = request.POST.get('nickname')
    # gender = request.POST.get('gender')
    # birthday = request.POST.get('birthday')
    # location = request.POST.get('location')

    # dating_location = request.POST.get('dating_location')
    # dating_gender = request.POST.get('dating_gender')
    # min_distance = request.POST.get('min_distance')
    # max_distance = request.POST.get('max_distance')
    # min_dating_age = request.POST.get('min_dating_age')
    # max_dating_age = request.POST.get('max_dating_age')
    # vibration = request.POST.get('vibration')
    # only_matched = request.POST.get('only_matched')
    # auto_play = request.POST.get('auto_play')

    # 利用forms代替上面的一堆字段
    # 定义form对象
    user_from = UserForm(request.POST)
    profile_from = ProfileForm(request.POST)

    '''
    POSTMAN测试写错数据的报错情况
        if user_from.is_valid() and profile_from.is_valid():
            data = {}
            # 调用过is_valid()才能.cleaned_data 进行数据清洗 ---> 类型，空格
            data.update(user_from.cleaned_data)
            data.update(profile_from.cleaned_data)
            return JsonResponse({'code':0,'data':data})
    
        else:
            err = {}
            err.update(user_from.errors)
            err.update(profile_from.errors)
            return JsonResponse({'code':1003,'data':err})
    '''

    # 检查验证数据
    if user_from.is_valid() and profile_from.is_valid():
        uid = request.session['uid']
        # user = User.objects.get(id=uid) 下面的filter已经在取了，这行没有意义了。

        # 对应的SQL语句：update user set ... where id=uid
        User.objects.filter(id=uid).update(**user_from.cleaned_data)
        Profile.objects.update_or_create(id=uid, defaults=profile_from.cleaned_data) # defaults接收的就是一个字典类型的值
        return JsonResponse({'code': 0, 'data': None})
    else:
        err = {}
        err.update(user_from.errors)
        err.update(profile_from.errors)
        return JsonResponse({'code': 1003, 'data': err})


def qn_token(request):
    '''获取七牛云的token'''
    return JsonResponse()


def qn_callback(request):
    '''七牛云回调接口'''
    return JsonResponse()
