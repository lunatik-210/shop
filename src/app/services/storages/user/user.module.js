import {UserStorage} from './user.service';

function conf(localStorageServiceProvider) {
    'ngInject';
    localStorageServiceProvider.setPrefix('ShopUsersStorage');
}

angular.module('app.services.storages.user', ['LocalStorageModule'])
    .service('UserStorage', UserStorage)
    .config(conf);
