import { Injectable } from '@angular/core';

@Injectable()
export class AgentService {
  constructor() {
    this._agent = null;
  }
  get agent() {
    return this._agent;
  }
  set agent(value) {
    this._agent = value;
  }
}
