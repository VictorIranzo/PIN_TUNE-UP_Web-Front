import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'Login2';
  }
  login(model) {
    return this._http.post(this._url, model);
  }
}
