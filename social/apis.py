from libs.http import render_json


def rcmd_users(request):
    '''获取推荐用户'''
    return render_json()


def like(request):
    '''喜欢（右滑）'''
    return render_json()


def superlike(request):
    '''超级喜欢（上滑）'''
    return render_json()


def dislike(request):
    '''不喜欢（左滑）'''
    return render_json()


def rewind(request):
    '''反悔'''
    return render_json()


def show_fans(request):
    '''查看过喜欢我的人'''
    return render_json()


def show_friends(request):
    '''查看好友'''
    return render_json()
