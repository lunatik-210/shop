import routerConfig from './signup.router';
import SignUpController from './signup.controller';

import '../../services/auth/auth.module';

angular.module('app.pages.signUp', ['ui.router', 'app.services.auth'])
  .config(routerConfig)
  .controller('SignUpController', SignUpController);
