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

    def to_dict(self):
        # 很low，很多地方用到会封装一下
        return {
            'id': self.id,
            'phonenum': self.phonenum,
            'nickname': self.nickname,
            'gender': self.gender,
            'birthday': str(self.birthday),  # DateField需要转义
            'avatar': self.avatar,
            'location': self.location,
        }


class Profile(models.Model):
    '''用户的交友资料'''
    dating_location = models.CharField(verbose_name='目标城市', max_length=25, choices=User.LOCATIONS)
    dating_gender = models.CharField(verbose_name='匹配性别', max_length=25, choices=User.GENDERS)

    min_distance = models.IntegerField(verbose_name='最小查找范围', default=1)
    max_distance = models.IntegerField(verbose_name='最大查找范围', default=50)

    min_dating_age = models.IntegerField(verbose_name='最小交友年龄', default=18)
    max_dating_age = models.IntegerField(verbose_name='最大交友年龄', default=50)

    vibration = models.BooleanField(verbose_name='开启震动', default=True)
    only_matched = models.BooleanField(verbose_name='不让陌生人看我的相册', default=True)
    auto_play = models.BooleanField(verbose_name='自动播放视频', default=True)
