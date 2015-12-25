
import {ItemGenerator} from './itemGenerator';

describe('Item generator', () => {
    let itemGenerator = undefined;

    beforeEach(() => {
        itemGenerator = new ItemGenerator();
    });

    it("Should generate sequence of items with defined data and iterative ids", () => {
        for(let i = 0; i < 5; ++i) {
            let item = itemGenerator.next();

            expect(item.name).toBeDefined();
            expect(item.color).toBeDefined();
            expect(item.issueDate).toBeDefined();
            expect(item.price).toBeDefined();
            expect(item.raiting).toBeDefined();
            expect(item.image).toBeDefined();
            expect(item.isInStock).toBeDefined();
            expect(item.id).toBeDefined();
            expect(item.id).toBe(i);
        }
    });
});
