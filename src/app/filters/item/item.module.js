
import {itemFilter} from './item.filters';

angular.module('app.filters.item', [])
    .filter('itemFilter', () => itemFilter);
