import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ActivitiesService {
  constructor(http: HttpClient) {
    this._http = http;
    this._urlSearch = '/Actividades';
  }

  getActivities() {
    return this._http.get(this._urlSearch);
  }
}
