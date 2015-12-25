
import {ItemGenerator} from '../../common/js/itemGenerator';

export default class SearchController {
    constructor() {
        this.dateFrom = null;
        this.dateTo = null;

        this.maxDate = new Date();

        this.availableColors = ['Red','White','Black','Blue','Yellow','Green'];
        this.selectedColors = [];

        let itemGenerator = new ItemGenerator();

        this.items = [];

        for(let i = 0; i<20; ++i){
            this.items.push(itemGenerator.next());
        }

        itemGenerator = null;
    }

    fromMaxDate() {
        if(this.dateTo) {
            return this.dateTo;
        }
        return null;
    }
}
