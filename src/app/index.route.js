
export function routerConfig ($urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/login');
}

export function runConfig($rootScope, $state, notifications, AuthService) {
    'ngInject';
    $rootScope.notifications = notifications;

    $rootScope.$on('$stateChangeStart', function(e, toState) {
        if (toState.module === 'private' && !AuthService.current()) {
            e.preventDefault();
            $state.go('login');
        } else if (toState.module === 'public' && AuthService.current()) {
            e.preventDefault();
            $state.go('search');
        }
    });
}
