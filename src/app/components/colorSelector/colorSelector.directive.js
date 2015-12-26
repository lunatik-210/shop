
import {EVENTS} from './colorSelector.const';

export class ColorSelectorDirective {
    constructor() {
        let directive = {
            restrict: 'E',
            templateUrl: 'app/components/colorSelector/colorSelector.html',
            scope: {
                colors: '='
            },
            replace: true,
            controller: ColorSelectorController,
            controllerAs: 'colorSelector',
            bindToController: true
        };

        return directive;
    }
}

export class ColorSelectorController {
    constructor($scope) {
        'ngInject';

        this._colors = [];

        for(let i = 0; i < this.colors.length; i++) {
            this._colors.push({name: this.colors[i], isSelected: false});
        }

        this.$scope = $scope;
    }

    select(color) {
        color.isSelected = !color.isSelected;
        this.$scope.$emit(EVENTS.ON_COLOR_SELECTED, this.selected());
    }

    selected() {
        return _.map(_.filter(this._colors, (color) => color.isSelected), (color) => color.name);
    }
}
