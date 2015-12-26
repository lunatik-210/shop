import routerConfig from './search.router';
import SearchController from './search.controller';

import '../../components/rating/rating.module';

angular.module('app.pages.search', ['ui.router', 'ui.bootstrap', 'ui.select', 'app.components.rating'])
  .config(routerConfig)
  .controller('SearchController', SearchController);
