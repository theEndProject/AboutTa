"""
Django settings for aboutTa project.

Generated by 'django-admin startproject' using Django 2.2.16.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'xu#ljlvhino!%!%81@a&yon!urp0$!l)q2^6hpi&+@%xis-x14'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    # 'django.contrib.admin',
    # 'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    # 'django.contrib.messages',
    'django.contrib.staticfiles',

    'user',
]
'''
    django 中间件: ----->  函数一定要带动词
        process_request 处理请求
        process_view
        process_template
        process_response
        process_exception 处理错误
'''
'''
    完整的URL = ’http://example.com/foo/bar?aa=123&bb=456#top‘
    
    HTTP协议是建立在TCP基础之上的短链接协议
    
    WSGI：Web Server Gateway Interface ---> Web服务器的网关接口

    从点击一个URL开始，到最终页面显示，中间经历的全部过程
        1.域名解析：example.com ---> 11.22.33.44
        2.浏览器封装“请求报文”
        3.浏览器与服务器建立TCP连接
            三次握手
            1.client -> SYN -> server
            2.client <- ACK + SYN <- server
            3.client -> ACK -> server
        4.浏览器向服务器发送“请求报文”
        5.HTTP Server 接收 '请求报文' (HTTP Server主要是管理网络的)
        6.WSGI将“请求报文”解析成 HTTPRequest 对象 (WSGI用于转化的)
        7.路由管理模块进行 URL 匹配，得到对应的 View 函数
        8.执行 View函数
            1.提取参数
            2.进行逻辑处理
            3.进行数据处理
            4.进行模板渲染（前后端分离就不需要了）
            5.将处理结果封装成 HTTPResponse 对象
        9.WSGI将 HTTPResponse 对象封装成 “响应报文”
        10.HTTP Server 将“响应报文” 发送给浏览器
        11.服务器断开与浏览器的TCP连接
            四次挥手：
            1.server -> FIN -> client
            2.server <- ACK <- client
                数据传输等待中...
                数据传输多少服务器端不知道多少，只有客户端知道，当客户端通知服务器端传输完成，才会传FIN
            3.server <- FIN <- client
            4.server -> ACK -> client
        12.浏览器接受“响应报文”
        13.浏览器解析“响应报文”，并渲染成页面
        
'''
'''
    *中间件的作用就是在这些步骤中进行一些的操作
    
    从点击一个URL开始，到最终页面显示，中间经历的全部过程
        1.域名解析：example.com ---> 11.22.33.44
        2.浏览器封装“请求报文”
        3.浏览器与服务器建立TCP连接
            三次握手
            1.client -> SYN -> server
            2.client <- ACK + SYN <- server
            3.client -> ACK -> server
        4.浏览器向服务器发送“请求报文”
        5.HTTP Server 接收 '请求报文' (HTTP Server主要是管理网络的)
        6.WSGI将“请求报文”解析成 HTTPRequest 对象 (WSGI用于转化的)
        ----------------------------------------> process_request
        7.路由管理模块进行 URL 匹配，得到对应的 View 函数
        ----------------------------------------> process_view
        8.执行 View函数
            | - 1.提取参数
            | - 2.进行逻辑处理
            | - 3.进行数据处理
            | - 4.进行模板渲染（前后端分离就不需要了）
            | - ----------------------------------------> process_template
            | - 5.将处理结果封装成 HTTPResponse 对象
            + ----------------------------------------> process_exception
        ----------------------------------------> process_response
        9.WSGI将 HTTPResponse 对象封装成 “响应报文”
        10.HTTP Server 将“响应报文” 发送给浏览器
        11.服务器断开与浏览器的TCP连接
            四次挥手：
            1.server -> FIN -> client
            2.server <- ACK <- client
                数据传输等待中...
                数据传输多少服务器端不知道多少，只有客户端知道，当客户端通知服务器端传输完成，才会传FIN
            3.server <- FIN <- client
            4.server -> ACK -> client
        12.浏览器接受“响应报文”
        13.浏览器解析“响应报文”，并渲染成页面
'''
MIDDLEWARE = [
    # 中间件是有顺序的，自上而下
    # 先调用第一层的process_request,依次第二层第三层
    # 再调用第一层process_view，依次第二层第三层
    # 以此类推，循环调用
    # 退出是从下往上，循环调用
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware', # 调试期间关闭
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'aboutTa.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                # 'django.contrib.auth.context_processors.auth',
                # 'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'aboutTa.wsgi.application'

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'aboutTa',
        'USER': 'zhouzhou',
        'PASSWORD': 'zzmysql',
        'HOST': '118.190.3.97',
    }
}

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = False

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
