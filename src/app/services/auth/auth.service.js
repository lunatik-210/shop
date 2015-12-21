
import '../storages/user/user.module';

const AUTH_CURRENT_USER = 'currentUser';
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const AUTH_USER_EXISTS = 'Uesr already exists with such email';
export const AUTH_PASSWORD_IS_NOT_MATCHED = 'Password is not mathced';
export const AUTH_WRONG_EMAIL = 'Wrong email';
export const AUTH_USER_IS_NOT_FOUND = 'User is not found';

export class AuthService {
    constructor(bcrypt, localStorageService, UserStorage) {
        'ngInject';

        this.bcrypt = bcrypt;
        this.storage = localStorageService;
        this.userStorage = UserStorage;
    }

    signUp(email, password, confirmation) {
        if(!EMAIL_REGEXP.test(email)) {
            throw new Error(AUTH_WRONG_EMAIL);
        }

        if(this.userStorage.get(email)) {
            throw new Error(AUTH_USER_EXISTS);
        }

        if(password !== confirmation) {
            throw new Error(AUTH_PASSWORD_IS_NOT_MATCHED);
        }

        this.userStorage.add({email, password: this.bcrypt.hashSync(password)});
    }

    signIn(email, password) {
        const user = this.userStorage.get(email);
        if(!user) {
            throw new Error(AUTH_USER_IS_NOT_FOUND);
        }

        if(!this.bcrypt.compareSync(password, user.password)) {
            throw new Error(AUTH_PASSWORD_IS_NOT_MATCHED);
        }

        this.storage.set(AUTH_CURRENT_USER, user);
    }

    signOut() {
        this.storage.remove(AUTH_CURRENT_USER);
    }

    current() {
        const user = this.storage.get(AUTH_CURRENT_USER);
        return user ? user : undefined;
    }
}
