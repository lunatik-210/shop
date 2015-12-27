
import {RestrictToNumber} from './restrictToNumber';

angular.module('app.directives.restrictToNumber', [])
    .directive('restrictToNumber', () => new RestrictToNumber());
