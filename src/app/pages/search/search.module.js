import routerConfig from './search.router';
import SearchController from './search.controller';

angular.module('app.pages.search', ['ui.router'])
  .config(routerConfig)
  .controller('SearchController', SearchController);
