'''缓存中出现的所有 Key'''

VCODE_K = 'Vcode-%s'  # 验证码缓存，拼接用户的手机号
FIRST_RCMD_Q = 'FirstRcmdQ-%s'  # 优先推荐队列，拼接用户uid
REWIND_LIMIT_K = 'RewindLimit-%s-%s' # 每日用户的反悔次数，拼接日期和uid
