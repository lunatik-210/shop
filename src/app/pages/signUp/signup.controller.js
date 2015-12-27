
export default class SignUpController {
    constructor($scope, $state, AuthService) {
        'ngInject';

        this.form = {};
        this.authService = AuthService;
        this.$state = $state;
        this.notifications = $scope.notifications;
    }

    signUp(form) {
        try {
            this.authService.signUp(form.email, form.password, form.confirmation);
            this.authService.signIn(form.email, form.password);
            this.$state.go('search');
            this.notifications.notify('Successfully registered', 'success');
        } catch(e) {
            this.notifications.notify(e.message, 'error');
        }
    }
}
