
const USERS_STORAGE = 'users';

export class UserStorage {
    constructor(localStorageService) {
        'ngInject';
        
        this.storage = localStorageService;
    }

    add(user) {
        let users = this.getAll();
        users.push(user);

        this.storage.set(USERS_STORAGE, users);
        return user;
    }

    remove(user) {
        let users = this.getAll();
        var index = _.findIndex(users, (obj) => obj.email === user.email);

        if(index !== -1) {
            users.splice(_.findIndex(users, (obj) => obj.email === user.email), 1);
            this.storage.set(USERS_STORAGE, users);
        }
    }

    get(user) {
        return _.findWhere(this.getAll(), {email: user});
    }

    getAll() {
        const users = this.storage.get(USERS_STORAGE);
        return users ? users : [];
    }
}
