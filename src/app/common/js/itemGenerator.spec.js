
import {ItemGenerator} from './itemGenerator';

describe('app/common/js: Item generator', () => {
    let itemGenerator = undefined;

    beforeEach(() => {
        itemGenerator = new ItemGenerator();
    });

    it("should generate sequence of items with defined data and iterative ids", () => {
        for(let i = 0; i < 5; ++i) {
            let item = itemGenerator.next();

            expect(item.name).toBeDefined();
            expect(item.color).toBeDefined();
            expect(item.issueDate).toBeDefined();
            expect(item.price).toBeDefined();
            expect(item.rating).toBeDefined();
            expect(item.imageSrc).toBeDefined();
            expect(item.isInStock).toBeDefined();
            expect(item.id).toBeDefined();
            expect(item.id).toBe(i);
        }
    });
});
