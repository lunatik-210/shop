
export default function routerConfig ($stateProvider) {
    'ngInject';
    $stateProvider.state('search', {
        url: '/',
        templateUrl: 'app/pages/search/search.html',
        controller: 'SearchController',
        controllerAs: 'search'
    });
}