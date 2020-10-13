from django.db import models


# Create your models here.

class User(models.Model):
    '''User模型'''
    GENDERS = (
        ('male', '男性'),
        ('female', '女性'),
        # ('xxx', '保密') 交友网站非男及女，不能保密
    )
    LOCATIONS = (
        ('北京', '北京'),
        ('上海', '上海'),
        ('深圳', '深圳'),
        ('西安', '西安'),
        ('沈阳', '沈阳'),
        ('武汉', '武汉'),
        ('成都', '成都'),
    )
    phonenum = models.CharField(verbose_name='手机号', max_length=16, unique=True)
    nickname = models.CharField(verbose_name='昵称', max_length=25, db_index=True)
    gender = models.CharField(verbose_name='性别', max_length=25, choices=GENDERS)
    birthday = models.DateField(verbose_name='出生日', default='2002-01-01')
    avatar = models.CharField(verbose_name='个人形象', max_length=255)
    location = models.CharField(verbose_name='常居地', max_length=25, choices=LOCATIONS)
