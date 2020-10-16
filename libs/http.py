import json

from django.http import HttpResponse
from django.conf import settings


# json接口的封装
def render_json(code=0, data=None):
    '''将结果渲染成json数据'''
    result = {'code': code, 'data': data}

    if settings.DEBUG is True:
        json_str = json.dumps(result, ensure_ascii=False, indent=4, sort_keys=True)
    else:
        json_str = json.dumps(result, ensure_ascii=False, separators=(',', ':'))

    response = HttpResponse(content=json_str, content_type='application/json')
    return response
