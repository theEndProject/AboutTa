import sys
import os
import django

'''
    在独立脚本中加载Django模块
        找到项目的绝对路径，并且添加到 sys.path
        在 os.environ 添加环境变量 'DJANGO_SETTINGS_MODULE'
        调用 django.setup(),加载 Django环境
'''

# Python中查找模块的顺序
# 标准库 -> 自定义模块 -> 第三方模块

# 系统的包会覆盖本地的包

# 本地包会优先于第三方的包

print(__file__)  # 输出当前运行的文件
print(os.path.abspath(__file__))  # 输出当前运行文件的绝对路径
print(os.path.dirname(os.path.abspath(__file__)))  # 输出当前运行文件的绝对路径的上一层路径
print(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # 输出当前运行文件的绝对路径的上一层的上一层路径

# 第一步：将项目的绝对路径加载到sys.path
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(base_dir)

# 第二步：设置变量环境 DJANGO_SETTINGS_MODULE
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aboutTa.settings')

# 第三步：Django 环境初始化
django.setup()  # 加载django基础的东西

from user.models import User
