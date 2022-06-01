#import os

#SUPERSET_WEBSERVER_PORT = os.environ.get('SUPERSET_PORT')

SQLALCHEMY_DATABASE_URI = 'sqlite:////app/database/superset.db'

from custom_security import MySecurityManager
CUSTOM_SECURITY_MANAGER = MySecurityManager
