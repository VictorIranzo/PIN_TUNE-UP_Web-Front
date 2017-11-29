import {Injectable} from '@angular/core';

const TOKEN_KEY = 'tnToken';

@Injectable()
export class AuthService {
  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  setToken(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
  clear() {
    sessionStorage.getItem(TOKEN_KEY) && sessionStorage.removeItem(TOKEN_KEY);
  }
}
