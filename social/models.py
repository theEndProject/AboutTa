from django.db import models
from django.db import IntegrityError

from common import errors

'''
    MySQL中的联合约束
        1.联合主键 ---> django不支持
        create table xxx(
            x_id int,
            y_id int,
            primary key(x_id,y_id)
        )
        2.联合唯一
        create table xxx(
            x_id int,
            y_id int,
            unique(x_id,y_id)
        )
        
'''


class Slider(models.Model):
    '''滑动记录表'''
    STYPES = (
        ('like', '喜欢'),
        ('superlike', '超级喜欢'),
        ('dislike', '不喜欢'),
    )
    uid = models.IntegerField(verbose_name='滑动ID')
    sid = models.IntegerField(verbose_name='被滑动ID')
    stype = models.CharField(verbose_name='滑动类型', max_length=25, choices=STYPES)
    stime = models.DateTimeField(verbose_name='滑动时间', auto_now_add=True, )

    class Meta:
        unique_together = ['uid', 'sid']

    @classmethod
    def slide(cls, uid, sid, stype):
        try:
            cls.objects.create(uid=uid, sid=sid, stype=stype)
        except IntegrityError:  # 抓取重复滑动
            raise errors.RepeatSliderErr  # 抛出重复滑动异常

    @classmethod
    def is_like(cls, uid, sid):
        '''检查是否喜欢过某人'''
        slider = Slider.objects.filter(uid=uid, sid=sid).first()
        if not slider:
            return None  # uid用户尚未滑倒 sid
        elif slider.stype in ['like', 'superlike']:
            return True  # 喜欢过
        else:
            return False  # 不喜欢


'''
    MySQL数据库清空表数据
        delete from 表名 ---> 逐一删除，支持事务代码恢复，主键自增不会重置
        truncate 表名 ---> 统一删除，不支持事务，主键自增会重置
'''


class Friend(models.Model):
    '''好友关系表'''
    '''
        模型创建思路
            uid     fid
           当前id   好友id
        两者是互相好友，无所谓id谁在先后
            uid1    uid2
             id      id
        虽然数据量小了，但是查询变的复杂了
        (uid1 = 7 and uid2 = 9) or (uid1 = 9 and uid2 = 7)
        可以排序决定一下uid1，uid2的顺序
        创建一下联合唯一
        从而一次检索
    '''
    uid1 = models.IntegerField(verbose_name='当前uid1')
    uid2 = models.IntegerField(verbose_name='好友uid2')

    class Meta:
        unique_together = ['uid1', 'uid2']

    @classmethod  # 类方法
    def make_friends(cls, uid1, uid2):  # cls就是类本身
        '''创建好友关系'''
        '''
            假设 uid1=3，uid2=5
            3 > 5, 判断结果(uid1, uid2)
            输出uid1, uid2 = (3,5)
            假设 uid1=5，uid2=3
            5 > 3, 判断结果(uid2, uid1)
            输出uid1, uid2 = (3,5)
            所以代码的目的是：uid1永远小于uid2，这样找uid1唯一索引到uid2
        '''
        uid1, uid2 = (uid2, uid1) if uid1 > uid2 else (uid1, uid2)  # 三元表达式，调整两者位置
        return cls.objects.create(uid1=uid1, uid2=uid2)

    @classmethod
    def breakoff(cls, uid1, uid2):
        '''删除好友关系'''
        uid1, uid2 = (uid2, uid1) if uid1 > uid2 else (uid1, uid2)  # 三元表达式，调整两者位置
        cls.objects.filter(uid1=uid1, uid2=uid2).delete()  # 找没找到，删除都不会报错
