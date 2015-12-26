
export class RatingDirective {
    constructor() {
        let directive = {
            restrict: 'E',
            templateUrl: 'app/components/rating/rating.html',
            scope: {
                value: '=',
                starsNumber: '='
            },
            replace: true,
            controller: RatingController,
            controllerAs: 'rating',
            bindToController: true
        };

        return directive;
    }
}

class RatingController {
    constructor() {
        this.starsNumber = this.starsNumber ? this.starsNumber : 5;
    }

    range(n) {
        return new Array(n);
    }
}
