import json

from django.http import HttpResponse
from django.conf import settings


# json接口的封装
def render_json(code=0, data=None):
    '''将结果渲染成json数据'''
    result = {'code': code, 'data': data}

    if settings.DEBUG is True:
        # ensure_ascii确保所有字符都是ASCII码
        # indent 缩进
        # sort_keys ---> key的排序，默认False不排序，True按照A-Z排序
        json_str = json.dumps(result, ensure_ascii=False, indent=4, sort_keys=True)
    else:
        # 默认,和:后面都有空白符
        # separators清空空白符
        json_str = json.dumps(result, ensure_ascii=False, separators=(',', ':'))

    response = HttpResponse(content=json_str, content_type='application/json')
    return response
