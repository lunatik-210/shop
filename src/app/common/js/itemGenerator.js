
Array.prototype.chooseOne = function() {
    return this[_.random(this.length-1)];
}

const COLORS = ['Red','White','Black','Blue','Yellow','Green'];
const IN_STOCK = [true, false];

export class ItemGenerator {
    constructor() {
        this.id = 0;
    }

    next() {
        const id = this.id;
        const name = `Item${this.id}`;
        const color = COLORS.chooseOne();
        const issueDate = new Date(_.random(2010, 2015), _.random(1, 12), _.random(1, 28));
        const price = _.random(10, 1000) / 37.4;
        const raiting = _.random(1, 5);
        const isInStock = IN_STOCK.chooseOne();
        const image = "#";

        this.id++;
        return {id, name, color, issueDate, price, isInStock, raiting, image};
    }
}
