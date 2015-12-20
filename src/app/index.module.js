import routerConfig from './index.route';

import './pages/search/search.module';
import './pages/signUp/signup.module';
import './pages/logIn/login.module';

angular.module('shop', ['ui.router', 'app.pages.search', 'app.pages.logIn', 'app.pages.signUp'])
  .config(routerConfig);
