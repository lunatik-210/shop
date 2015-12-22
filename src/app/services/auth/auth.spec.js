
import './auth.module';

import {
    AUTH_USER_EXISTS, 
    AUTH_PASSWORD_IS_NOT_MATCHED, 
    AUTH_WRONG_EMAIL, 
    AUTH_USER_IS_NOT_FOUND
} from './auth.service';

describe('Auth Service', () => {
    beforeEach(angular.mock.module('app.services.auth'));

    it('Should not sign up user because of wrong email', inject((AuthService) => {
        expect(() => AuthService.signUp('foo', 'foo', 'foo')).toThrowError(AUTH_WRONG_EMAIL);
    }));

    it('Should not sign up user because of wrong confirmation password', inject((AuthService) => {
        expect(() => AuthService.signUp('foo@foo.ru', 'foo', 'foo1')).toThrowError(AUTH_PASSWORD_IS_NOT_MATCHED);
    }));

    it('Should not sign in user because user is not registered', inject((AuthService) => {
        expect(() => AuthService.signIn('foo@foo.ru', 'foo')).toThrowError(AUTH_USER_IS_NOT_FOUND);
    }));

    it('Should sign up user', inject((AuthService) => {
        expect(() => AuthService.signUp('foo@foo.ru', 'foo', 'foo')).not.toThrow();
    }));

    it('Should not sign in user because of wrong password', inject((AuthService) => {
        expect(() => AuthService.signIn('foo@foo.ru', 'foo1')).toThrowError(AUTH_PASSWORD_IS_NOT_MATCHED);
    }));

    it('Should not sign up user because user already exists', inject((AuthService) => {
        expect(() => AuthService.signUp('foo@foo.ru', 'foo', 'foo')).toThrowError(AUTH_USER_EXISTS);
    }));

    it('Should sign in user', inject((AuthService) => {
        expect(() => AuthService.signIn('foo@foo.ru', 'foo')).not.toThrow();
        expect(AuthService.current().email).toBe('foo@foo.ru');
    }));

    it('Should sign out user', inject((AuthService) => {
        AuthService.signOut();
        expect(AuthService.current()).toBeUndefined();
    }));
});
