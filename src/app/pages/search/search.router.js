
export default function routerConfig ($stateProvider) {
    'ngInject';
    $stateProvider.state('search', {
        url: '/',
        templateUrl: 'app/pages/search/search.html',
        controller: 'SearchController',
        controllerAs: 'search',
        resolve: {
            items: [
                'ItemService',
                function(ItemService) {
                    return ItemService.getAll();
                }
            ],
            cartItems: [
                'CartStorage',
                'AuthService',
                function(CartStorage, AuthService) {
                    return CartStorage.getAll(AuthService.current().email);
                }
            ]
        },
        module: 'private'
    });
}
