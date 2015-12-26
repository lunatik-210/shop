import routerConfig from './search.router';
import SearchController from './search.controller';

import '../../components/rating/rating.module';
import '../../components/colorSelector/colorSelector.module';

import '../../services/network/item/item.module';

angular.module('app.pages.search', ['ui.router',
	'app.services.network.item',
    'app.components.rating',
    'app.components.colorSelector'])

    .config(routerConfig)
    .controller('SearchController', SearchController);
