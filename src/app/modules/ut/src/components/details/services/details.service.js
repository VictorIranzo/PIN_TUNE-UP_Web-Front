import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailsService {
  constructor(http: HttpClient) {
    this._http = http;
    this._urlUT = 'FichaUT2';
    this._urlProductos = 'Productos2';
  }

  getUt(id) {
    return this._http.get(`${this._urlUT}/${id}`);
  }

  getProductosDisponibles() {
    return this._http.get(`${this._urlProductos}`);
  }
}


