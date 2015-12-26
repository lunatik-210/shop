
export class ItemService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    getAll() {
        return this.$http.get('assets/items.json').then(function(response){
            return response.data;
        });
    }
}
