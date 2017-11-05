import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailsService {

  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'FichaUT2';
  }

  getUt(id) {
    return this._http.get(`${this._url}/${id}`);
  }
}


