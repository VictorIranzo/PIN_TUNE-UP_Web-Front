import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FollowupsService {
  constructor(http: HttpClient) {
    this._http = http;
  }
  getSeguimientos(idUt) {
    return this._http.get(`UTs/${idUt}/Seguimientos`);
  }
  pausarSeguimiento(idSeguimiento) {
    return this._http.post(
      `FinalizarRegistroTiempo?idSeguimiento=${idSeguimiento}`
    );
  }
  empezarSeguimiento(idSeguimiento) {
    return this._http.post(
      `EmpezarRegistroTiempo?idSeguimiento=${idSeguimiento}`
    );
  }
  finalizarSeguimiento(idSeguimiento, adelante = true) {
    return this._http.post(
      `FinalizarSeguimiento?idSeguimiento=${idSeguimiento}&adelante=${adelante}`
    );
  }
}
