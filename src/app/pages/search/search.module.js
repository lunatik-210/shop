import routerConfig from './search.router';
import SearchController from './search.controller';

import '../../components/rating/rating.module';
import '../../components/colorSelector/colorSelector.module';

angular.module('app.pages.search', ['ui.router',
    'app.components.rating',
    'app.components.colorSelector'])

    .config(routerConfig)
    .controller('SearchController', SearchController);
