
export class CartStorage {
    constructor(localStorageService) {
        'ngInject';
        this.storage = localStorageService;
    }

    add(key, item) {
        let items = this.getAll(key);
        items.push(item);

        this.storage.set(key, items);
        return item;
    }

    remove(key, index) {
        let items = this.getAll(key);

        if(index !== -1) {
            items.splice(index, 1);
            this.storage.set(key, items);
        }
    }

    getAll(key) {
        const items = this.storage.get(key);
        return items ? items : [];
    }
}
