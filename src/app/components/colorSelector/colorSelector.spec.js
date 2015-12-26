
import {ColorSelectorController} from './colorSelector.directive';

describe('app/components/colorSelector: ColorSelectorController', () => {
    ColorSelectorController.prototype.colors = ['red', 'green', 'blue'];
    let colorSelector = undefined;

    beforeEach(inject(($rootScope) => {
        let myScope = $rootScope.$new();
        colorSelector = new ColorSelectorController(myScope);
    }));

    it('should select green color', () => {
        expect(colorSelector.selected().length).toBe(0);
        
        colorSelector.select(colorSelector._colors[1]);

        expect(colorSelector.selected().length).toBe(1);
        expect(colorSelector.selected()[0]).toBe('green');
    });

    it('should deselect green color', () => {
        colorSelector.select(colorSelector._colors[1]);
        expect(colorSelector.selected().length).toBe(1);
        colorSelector.select(colorSelector._colors[1]);
        expect(colorSelector.selected().length).toBe(0);
    });

    it('should select all colors', () => {
        colorSelector.select(colorSelector._colors[0]);
        colorSelector.select(colorSelector._colors[1]);
        colorSelector.select(colorSelector._colors[2]);
        expect(colorSelector.selected().length).toBe(3);
    });
});
