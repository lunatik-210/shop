import routerConfig from './index.route';

import './pages/search/search.module';
import './pages/signUp/signup.module';
import './pages/logIn/login.module';

import './services/storages/user/user.module';
import './services/auth/auth.module';

angular.module('shop', ['ui.router',
    'ui.bootstrap',
    'app.pages.search',
    'app.pages.logIn',
    'app.pages.signUp'])

    .config(routerConfig);
