import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetTiposUTProductoService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'TiposUT2';
  }
  get(idProducto) { 
    return this._http.get(`${this._url}/${idProducto}`);
  }
}
