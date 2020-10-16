'''程序逻辑配置，及第三方平台配置'''

# Redis 配置
REDIS = {
    'host': '118.190.3.97',
    'port': 6379,
    'db': 2,
}

# 赛迪云通信配置
SD_APPID = '55636'
SD_APPKEY = 'a11554f0348052564bd868224f466b94'
SD_PROJECT = 'GInjT2'  # 短信模板的ID
SD_SIGN_TYPE = 'md5'
SD_API = 'https://api.mysubmail.com/message/xsend.json'

# 七牛云图片上传配置
QN_DOMAIN = 'qi8ftgowq.hd-bkt.clouddn.com'  # 七牛云提供的免费的域名
QN_BUCKET = 'aboutta'  # 七牛云空间名
QN_ACCESS_KEY = 'fjHLAR9HiC1v6L8wnqI-XqgMT5cmYI7HCaCMlaRk'
QN_SECRET_KEY = 'c82ZiHShzQL-iafIjvZgHVEsBFS6dElOwpCuDXlq'
QN_CALLBACK_URL = 'http://118.190.3.97:2800/qiniu/callback'
QN_CALLBACK_DOMAIN = '118.190.3.97:2800'
