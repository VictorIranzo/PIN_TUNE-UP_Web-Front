import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetAgentesProductoService {
  constructor(http: HttpClient) {
    this._http = http;
  }
  getAgentes(idProducto) { 
    return this._http.get(`Productos/${idProducto}/Agentes`);
  }
}
