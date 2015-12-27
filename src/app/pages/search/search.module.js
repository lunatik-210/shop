import routerConfig from './search.router';
import SearchController from './search.controller';

import '../../services/network/item/item.module';
import '../../services/auth/auth.module';
import '../../services/storages/cart/cart.module';

import '../../components/rating/rating.module';
import '../../components/colorSelector/colorSelector.module';

import '../../filters/item/item.module';

import '../../directives/restrictToNumber.module';

angular.module('app.pages.search', ['ui.router',
    'app.directives.restrictToNumber',
    'app.filters.item',
    'app.services.network.item',
    'app.services.auth',
    'app.services.storages.cart',
    'app.components.rating',
    'app.components.colorSelector'])

    .config(routerConfig)
    .controller('SearchController', SearchController)
    .directive('onlyNum', function() {
        return function(scope, element, attrs) {
            var keyCode = [8,9,37,39,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,110];
            element.bind("keydown", function(event) {
                if($.inArray(event.which,keyCode) == -1) {
                    scope.$apply(function(){
                        scope.$eval(attrs.onlyNum);
                        event.preventDefault();
                    });
                    event.preventDefault();
                }
            });
        };
    });