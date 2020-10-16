from django.http import JsonResponse
from django.utils.deprecation import MiddlewareMixin
from common import errors


class AuthMiddleware(MiddlewareMixin):
    '''登陆验证中间件'''

    # 添加路径白名单，要注意路径前面要加/
    white_list = [
        '/',
        '/api/user/vcode/fetch',
        '/api/user/vcode/submit',
        '/qiniu/callback',
    ]

    def process_request(self, request):
        # 检查当前路径是否在白名单中
        if request.path in self.white_list:
            return

        # 获取并检查 session 中的 uid
        uid = request.session.get('uid')
        if not uid:
            return JsonResponse({'code': errors.LOGIN_REQUIRED, 'data': '需要用户登录'})
