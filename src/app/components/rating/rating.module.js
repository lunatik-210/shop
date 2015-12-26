import {RatingDirective} from './rating.directive';

angular.module("app.components.rating", [])
    .directive('itemRating', () => new RatingDirective());
