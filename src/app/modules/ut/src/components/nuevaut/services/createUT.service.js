import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CreateUTService {
  constructor(http: HttpClient) {
    this._http = http;
    this._url = 'UTs/Crear';
  }
  put(
    newUT
  ) {
    return this._http.put(this._url, newUT);
  }
}
