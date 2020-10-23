from libs.http import render_json
from social import logics


def rcmd_users(request):
    '''获取推荐用户'''
    users = logics.rcmd(request.uid)  # 获取推荐用户的id
    users_data = [user.to_dict() for user in users]  # 遍历推荐用户的信息列表
    return render_json(users_data)


def like(request):
    '''喜欢（右滑）'''
    sid = int(request.POST.get('sid'))
    matched = logics.like_someone(request.uid, sid)
    return render_json(data={'is_matched': matched})


def superlike(request):
    '''超级喜欢（上滑）'''
    sid = int(request.POST.get('sid'))
    matched = logics.superlike_someone(request.uid, sid)
    return render_json(data={'is_matched': matched})


def dislike(request):
    '''不喜欢（左滑）'''
    sid = int(request.POST.get('sid'))
    logics.dislike_someone(request.uid, sid)
    return render_json()


def rewind(request):
    '''反悔'''
    # 服务器在进行接口设计的时候，本着一个参数返回值越少越好
    '''
        接口设计的一些原则
            1.接口的参数越少越好
            2.客户端传来的所有参数，服务器都需要验证
            3.服务器的返回值越少越好
    '''
    logics.rewind_last_slide(request.uid)
    return render_json()


def show_fans(request):
    '''查看过喜欢我的人'''
    fans = logics.find_my_fans(request.uid)
    user_data = [u.to_dict() for u in fans]
    return render_json(user_data)


def show_friends(request):
    '''查看好友'''
    return render_json()

