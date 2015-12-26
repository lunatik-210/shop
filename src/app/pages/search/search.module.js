import routerConfig from './search.router';
import SearchController from './search.controller';

import '../../components/rating/rating.module';
import '../../components/colorSelector/colorSelector.module';

import '../../filters/item/item.module';

import '../../services/network/item/item.module';
import '../../services/auth/auth.module';

angular.module('app.pages.search', ['ui.router',
    'app.filters.item',
    'app.services.network.item',
    'app.services.auth',
    'app.components.rating',
    'app.components.colorSelector'])

    .config(routerConfig)
    .controller('SearchController', SearchController);
