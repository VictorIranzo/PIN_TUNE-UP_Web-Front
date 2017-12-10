import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UtSearchService {
  constructor(http: HttpClient) {
    this._http = http;
    this._urlSearch = '/UTs/Buscar';
  }

  search(model) {
    return this._http.get(`${this._urlSearch}?nombreUT=${model.NombreUT}&idProducto=${model.IdProducto}&idSprint=${model.IdSprint}&idProyecto=${model.IdProyecto}&idTipo=${model.IdTipoUT}&estado=${model.Estado}`);
  }
}

