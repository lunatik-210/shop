import {CartStorage} from './cart.service';

function conf(localStorageServiceProvider) {
    'ngInject';
    localStorageServiceProvider.setPrefix('ShopCartStorage');
}

angular.module('app.services.storages.cart', ['LocalStorageModule'])
    .service('CartStorage', CartStorage)
    .config(conf);
