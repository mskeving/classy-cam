import os


class Config(object):
    CSRF_ENABLED = True
    SECRET_KEY = 'hello'


class Development(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost:5432/NAME_OF_DB'


class Production(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', '')
