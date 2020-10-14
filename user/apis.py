from django.http import JsonResponse

from user.logics import send_vcode


# Create your views here.

def fetch_vcode(request):
    '''给用户发送验证码'''
    phonenum = request.Get.get('phonenum')
    if send_vcode(phonenum):
        return JsonResponse({'code': 0, 'data': None})
    else:
        return JsonResponse({'code': 1000, 'data': '验证码发送失败'})


def submit_vcode(request):
    '''提交验证码，执行登录注册'''
    return JsonResponse()


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
