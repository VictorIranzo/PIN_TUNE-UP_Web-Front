import {Injectable} from '@angular/core';

@Injectable()
export class AboutService {
  constructor() {
    this._about = null;
  }
  get about() {
    return this._about;
  }
  set about(value) {
    this._about = value;
  }
}
