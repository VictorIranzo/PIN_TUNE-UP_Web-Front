import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetColaboradoresProductoService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'Productos';
  }
  get(idProducto) {
    return this._http.get(
      `${this._url}/${idProducto}/Agentes`
    );
  }
}
