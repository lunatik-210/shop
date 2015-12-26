
export default class SearchController {
    constructor($scope, COLOR_SELECTOR_EVENTS, items) {
        'ngInject';

        this.dateFrom = null;
        this.dateTo = null;
        this.maxDate = new Date();
        this.availableColors = ['Red','White','Black','Blue','Yellow','Green'];
        this.items = items;

        this.filters = {
            dateFrom: undefined,
            dateTo: undefined,
            inStockOnly: false,
            priceFrom: undefined,
            priceTo: undefined,
            colors: _.difference(this.availableColors, [])
        };

        $scope.$on(COLOR_SELECTOR_EVENTS.ON_COLOR_SELECTED, (e, colors) => {
            e.stopPropagation();

            this.filters.colors = _.difference(this.availableColors, colors);
        });
    }

    fromMaxDate() {
        if(this.dateTo) {
            return this.dateTo;
        }
        return null;
    }
}
