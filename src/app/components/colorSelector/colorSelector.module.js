import {ColorSelectorDirective} from './colorSelector.directive';
import {EVENTS} from './colorSelector.const';

angular.module("app.components.colorSelector", [])
    .directive('colorSelector', () => new ColorSelectorDirective())
    .constant('COLOR_SELECTOR_EVENTS', EVENTS);
