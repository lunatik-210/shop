
export default class SearchController {
    constructor($scope, $state, COLOR_SELECTOR_EVENTS, items, cartItems, AuthService, CartStorage) {
        'ngInject';

        this.authService = AuthService;
        this.cartStorage = CartStorage;
        this.$state = $state;

        this.dateFrom = null;
        this.dateTo = null;
        this.maxDate = new Date();
        this.availableColors = ['red','white','black','blue','yellow','green'];
        this.cartItems = cartItems;
        this.items = items;

        this.filters = {
            dateFrom: undefined,
            dateTo: undefined,
            inStockOnly: false,
            priceFrom: undefined,
            priceTo: undefined,
            colors: undefined
        };

        $scope.$on(COLOR_SELECTOR_EVENTS.ON_COLOR_SELECTED, (e, colors) => {
            e.stopPropagation();
            if(colors.length > 0) {
                this.filters.colors = colors;
            } else {
                this.filters.colors = undefined;
            }
        });
    }

    fromMaxDate() {
        if(this.dateTo) {
            return this.dateTo;
        }
        return null;
    }

    logOut() {
        this.$state.go('login');
        this.authService.signOut();
    }

    removeItemFromCart(e, index) {
        e.preventDefault();
        e.stopPropagation();

        const email = this.authService.current().email;
        this.cartStorage.remove(this.authService.current().email, index);
        this.cartItems = this.cartStorage.getAll(email);
    }

    addItemToCart(item) {
        const email = this.authService.current().email;
        this.cartStorage.add(this.authService.current().email, item);
        this.cartItems = this.cartStorage.getAll(email);
    }
}
