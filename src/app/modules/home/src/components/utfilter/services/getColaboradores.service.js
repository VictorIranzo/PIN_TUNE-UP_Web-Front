import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetColaboradoresService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'Agentes';
  }
  get(idAgente) {
    return this._http.get(`${this._url}/${idAgente}/Colaboradores`);
  }
}
