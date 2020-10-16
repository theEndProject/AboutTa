import pickle

from pickle import UnpicklingError
from redis import Redis as _Redis
from aboutTa.config import REDIS


class Redis(_Redis):
    def set(self, name, value, ex=None, px=None, nx=False, xx=False):
        '''带序列化处理的 set 方法'''
        pickled_data = pickle.dumps(value, pickle.HIGHEST_PROTOCOL)  # pickle.HIGHEST_PROTOCOL最高版本，防止升级需要更改代码
        # ex:expire 过期秒数
        # px:过期毫秒
        # nx:redis是否是覆盖式
        return super().set(name, pickled_data, ex, px, nx)

    def get(self, name, default=None):
        '''带序列化处理的 get 方法'''
        pickled_data = super().get(name)
        if pickled_data is None:
            return default

        try:
            value = pickle.loads(pickled_data)
        # 报错走到except
        except (KeyError, EOFError, UnpicklingError):
            return pickled_data
        # 不报错走到else
        else:
            return value


# 全局变量的方式创建的Redis的单例
rds = Redis(**REDIS)
