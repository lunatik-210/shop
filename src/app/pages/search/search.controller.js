
export default class SearchController {
    constructor($scope, $state, COLOR_SELECTOR_EVENTS, items, AuthService) {
        'ngInject';

        this.authService = AuthService;
        this.$state = $state;

        this.dateFrom = null;
        this.dateTo = null;
        this.maxDate = new Date();
        this.availableColors = ['red','white','black','blue','yellow','green'];
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
        this.authService.signOut();
        this.$state.go('login');
    }
}
