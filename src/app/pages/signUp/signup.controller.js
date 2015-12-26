
export default class SignUpController {
    constructor($state, AuthService) {
        this.form = {};
        this.authService = AuthService;
        this.$state = $state;
    }

    signUp(form) {
        this.authService.signUp(form.email, form.password, form.confirmation);
        this.authService.signIn(form.email, form.password);
        this.$state.go('search');
    }
}
