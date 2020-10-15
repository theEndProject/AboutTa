import json
import time

from qiniu import Auth
from aboutTa import config as cfg


def get_res_url(filename):
    '''获取资源的URL'''
    return f'http://{cfg.QN_DOMAIN}/{filename}'


# 七牛云接收JSON形式，需要保存成字典
def gen_token(uid, filename):
    policy = {
        'scope': cfg.QN_BUCKET,  # 指定上传的目标资源空间 Bucket
        'deadline': int(time.time() + 600),  # 上传凭证有效截止时间
        'returnBody': json.dumps({'code': 0, 'data': get_res_url}),  # 返回值
        'callbackUrl': cfg.QN_CALLBACK_URL,  # 上传成功后，七牛云向业务服务器发送 POST 请求的 URL。
        'callbackHost': cfg.QN_CALLBACK_DOMAIN,  # 上传成功后，七牛云向业务服务器发送回调通知时的 Host 值。
        # 上传成功后，七牛云向业务服务器发送 Content-Type: application/x-www-form-urlencoded 的 POST 请求。
        # 业务服务器可以通过直接读取请求的 query 来获得该字段，支持魔法变量和自定义变量。
        # callbackBody 要求是合法的 url query string。
        # 例如key=$(key)&hash=$(etag)&w=$(imageInfo.width)&h=$(imageInfo.height)。
        # 如果callbackBodyType指定为application/json，则callbackBody应为json格式，
        # 例如:{"key":"$(key)","hash":"$(etag)","w":"$(imageInfo.width)","h":"$(imageInfo.height)"}。
        'callbackBody': f'key={filename}&uid={uid}',  # 固定图片的名字加上id
        'forceSaveKey': True,  # saveKey的优先级设置。为 true 时，saveKey不能为空，会忽略客户端指定的key，强制使用saveKey进行文件命名。参数不设置时，默认值为false
        'saveKey': filename,  # 自定义资源名
        'fsizeLimit': 10485760,  # 文件大小的最大值：10MB -> 10 * (1024 ** 2)
        'mimeLimit': 'image/*',  # image/*表示只允许上传图片类型
    }

    # 构建鉴权对象
    qn_auth = Auth(cfg.QN_ACCESS_KEY, cfg.QN_SECRET_KEY)
    # 生成上传 Token，可指定过期时间
    token = qn_auth.upload_token(cfg.QN_BUCKET, filename, 600, policy=policy)
    return token
