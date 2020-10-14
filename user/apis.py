from django.http import JsonResponse


# Create your views here.

def fetch_vcode(request):
    '''给用户发送验证码'''
    phonenum = request.Get.get('phonenum')

    return JsonResponse()


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
