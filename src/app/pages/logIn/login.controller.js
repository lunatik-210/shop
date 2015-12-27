
export default class LogInController {
    constructor($scope, $state, AuthService) {
        'ngInject';

        this.form = {};
        this.authService = AuthService;
        this.$state = $state;
        this.notifications = $scope.notifications;
    }

    logIn(form) {
        try {
            this.authService.signIn(form.email, form.password);
            this.$state.go('search');
            this.notifications.notify('Successfully authorized', 'success');
        } catch(e) {
            this.notifications.notify(e.message, 'error');
        }
    }

    signUp() {
        this.$state.go('signup');
    }
}
