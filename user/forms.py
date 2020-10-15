from django import forms

from user.models import User, Profile


# forms里面的fields字段是不能存在同名的

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['nickname', 'gender', 'birthday', 'location', ]


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'  # __all__代表所有字段

    # 自定义数据清洗，命名是固定的 ---> clean_字段名
    # 注意：数据清洗是有顺序的，所以要看好字段名的排序，之所以用max是因为已经获取到了min，可以进行比较。
    def clean_max_distance(self):
        cleaned_data = super().clean()  # super跳过自身的clean，调用父类的clean，避免无限递归
        if cleaned_data['max_distance'] < cleaned_data['min_distance']:
            raise forms.ValidationError('最大距离必须大于最小距离')
        else:
            return cleaned_data['max_distance']

    def clean_max_dating_age(self):
        cleaned_data = super().clean()  # super跳过自身的clean，调用父类的clean，避免无限递归
        if cleaned_data['max_dating_age'] < cleaned_data['min_dating_age']:
            raise forms.ValidationError('最大交友年龄必须大于最小交友')
        else:
            return cleaned_data['max_dating_age']
