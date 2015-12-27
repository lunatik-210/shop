import {routerConfig, runConfig} from './index.route';

import './pages/search/search.module';
import './pages/signUp/signup.module';
import './pages/logIn/login.module';

import './services/storages/user/user.module';
import './services/auth/auth.module';

import {NotificationsService} from './common/js/notifications';

angular.module('shop', ['ui.router',
    'ui.bootstrap',
    'growlNotifications',
    'app.services.auth',
    'app.pages.search',
    'app.pages.logIn',
    'app.pages.signUp'])

    .service('notifications', NotificationsService)
    .config(routerConfig)
    .run(runConfig);
