import routerConfig from './search.router';
import SearchController from './search.controller';

angular.module('app.pages.search', ['ui.router', 'ui.bootstrap', 'ui.select'])
  .config(routerConfig)
  .controller('SearchController', SearchController);
