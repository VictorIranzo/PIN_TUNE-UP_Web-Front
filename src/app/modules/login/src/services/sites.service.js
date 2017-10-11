import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SitesService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'Sitios';
  }
  get(email) {
    return this._http.get(`${this._url}\\${email}`);
  }
}
