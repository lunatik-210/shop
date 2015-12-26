import routerConfig from './login.router';
import LogInController from './login.controller';

import '../../services/auth/auth.module';

angular.module('app.pages.logIn', ['ui.router', 'app.services.auth'])
  .config(routerConfig)
  .controller('LogInController', LogInController);
