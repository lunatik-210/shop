
import './cart.module';

describe('app/services/storages/cart: Cart storage', () => {
    const KEY = 'foo';

    beforeEach(angular.mock.module('app.services.storages.cart'));

    it('should add items', inject((CartStorage) => {
        expect(CartStorage.getAll(KEY).length).toBe(0);

        CartStorage.add(KEY, {id: 1, name: 'foo1'});
        expect(CartStorage.getAll(KEY).length).toBe(1);

        CartStorage.add(KEY, {id: 2, name: 'foo2'});
        expect(CartStorage.getAll(KEY).length).toBe(2);
    }));

    it('should remove item', inject((CartStorage) => {
        CartStorage.remove(KEY, 1);
        expect(CartStorage.getAll(KEY).length).toBe(1);
    }));
});
