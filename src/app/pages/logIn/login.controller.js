
export default class LogInController {
    constructor($state, AuthService) {
        this.form = {};
        this.authService = AuthService;
        this.$state = $state;
    }

    logIn(form) {
        this.authService.signIn(form.email, form.password);
        this.$state.go('search');
    }

    signUp() {
        this.$state.go('signup');
    }
}
