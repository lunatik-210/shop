
import {AuthService} from './auth.service';

function conf(localStorageServiceProvider) {
    'ngInject';
    localStorageServiceProvider.setPrefix('ShopAuth');
}

angular.module('app.services.auth', ['dtrw.bcrypt', 'LocalStorageModule', 'app.services.storages.user'])
    .service('AuthService', AuthService)
    .config(conf);
