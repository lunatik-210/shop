import routerConfig from './signup.router';
import SignUpController from './signup.controller';

angular.module('app.pages.signUp', ['ui.router'])
  .config(routerConfig)
  .controller('SignUpController', SignUpController);
