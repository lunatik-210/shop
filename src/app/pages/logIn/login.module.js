import routerConfig from './login.router';
import LogInController from './login.controller';

angular.module('app.pages.logIn', ['ui.router'])
  .config(routerConfig)
  .controller('LogInController', LogInController);
