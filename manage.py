#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aboutTa.settings')
    # environ是一个巨大的字典，在这个字典中添加了key：DJANGO_SETTINGS_MODULE，value：aboutTa.settings
    '''
        在字典中添加键值对的方法
        d = {'a':100,'b':80,'c':60}
            1.d['d'] = 40
            2.d.update({'e':20})
            3.d.setdefault('f':0) # setdefault只能添加一个新的值，之前有的值就会返回
    '''
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)  #


if __name__ == '__main__':
    main()
