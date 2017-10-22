import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtListService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'SeguimientosKanban';
  }
  get(
    idActividad = 'ALL',
    idAgente = 'ALL',
    idProducto = 'ALL',
    idVersion = 'ALL',
    idProyecto = 'ALL'
  ) {
    return this._http.get(
      `${this._url}?idActividad=${idActividad}&idAgente=${idAgente}&idProducto=${idProducto}&idVersion=${idVersion}&idProyecto=${idProyecto}`
    );
  }
}
