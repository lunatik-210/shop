
export default function routerConfig ($stateProvider) {
    'ngInject';
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/pages/logIn/login.html',
        controller: 'LogInController',
        controllerAs: 'login'
    });
}
