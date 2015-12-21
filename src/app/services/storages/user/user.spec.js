
import './user.module';

describe('Users storage', () => {
    beforeEach(angular.mock.module('app.services.storages.user'));

    it('Should add user', inject((UserStorage) => {
        UserStorage.add({email: 'foo', password: 'foo'});
        
        let user = UserStorage.get('foo');
        let users = UserStorage.getAll();

        expect(user.email).toBe('foo');
        expect(users.length).toBe(1);
    }));

    it('Should remove user',  inject((UserStorage) => {
        UserStorage.remove({email: 'foo'});

        expect(UserStorage.get('foo')).toBeUndefined();
        expect(UserStorage.getAll().length).toBe(0);
    }));
});
