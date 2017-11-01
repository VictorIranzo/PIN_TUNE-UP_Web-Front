import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AgentPicService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'Agentes/Imagen';
  }
  get(idAgente, idSitio) {
    return this._http.get(`${this._url}/${idAgente}/${idSitio}`, {
      responseType: 'blob',
    });
  }
}
