import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetProductosService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'Productos2';
  }
  get() {
    return this._http.get(
      `${this._url}`
    );
  }
}
