
export default function routerConfig ($stateProvider) {
    'ngInject';
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'app/pages/signUp/signup.html',
        controller: 'SignUpController',
        controllerAs: 'signup'
    });
}
