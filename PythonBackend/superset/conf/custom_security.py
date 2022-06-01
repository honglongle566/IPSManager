import json
from flask import request
from flask_login import login_user
from flask_appbuilder.security.views import AuthDBView
from flask_appbuilder.security.views import expose
from superset.security import SupersetSecurityManager

class MyCustomAuthDBView(AuthDBView):
    @expose('/login/', methods=['GET', 'POST'])
    def login(self):
        print("""
        #######################################
        #             LOGIN                   #
        #######################################
        """)
        token = request.args.get('token')
        print('~~~~~~~~found token', token , json.dumps(request.args))

        if token is not None and token.startswith('authed'):
            username = token.split('-')[1]
            user = self.appbuilder.sm.find_user(username)
            if not user:
                return super().login()
            login_user(user)
        return super().login()

class MySecurityManager(SupersetSecurityManager):
    authdbview = MyCustomAuthDBView

    def __init__(self, appbuilder):
        super(MySecurityManager, self).__init__(appbuilder)