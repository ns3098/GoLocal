"""
Django settings for covexit project.
"""

import os

from .base import *

SECRET_KEY = 'pc23$c6=qt5t2a9v8yatrb16_rkk&f45_6smrzckvxsdt0z*85'
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ORIGIN_ALLOW_ALL = True

SITE_ID = 2

ALLOWED_HOSTS = ['localhost']
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'dxuy877@gmail.com'
EMAIL_HOST_PASSWORD = 'maltinitin'

DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication'
    ]
}
