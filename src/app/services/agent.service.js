import {Injectable} from '@angular/core';

@Injectable()
export class AgentService {
  constructor() {
    this._agent = this.getFromStorage();
  }
  get agent() {
    return this._agent;
  }
  set agent(value) {
    this._agent = value;
    this.saveToStorage(value);
  }
  getFromStorage() {
    const agent = sessionStorage.getItem('tnAgent')
      ? JSON.parse(sessionStorage.getItem('tnAgent'))
      : undefined;
    return agent;
  }
  clear() {
    sessionStorage.getItem('tnAgent') && sessionStorage.removeItem('tnAgent');
  }
  saveToStorage(agent) {
    sessionStorage.setItem('tnAgent', JSON.stringify(agent));
  }
  getSiteId() {
    return this._agent.IdSitio;
  }
  isAdmin() {
    return this._agent.Administrador;
  }
  getAgentId() {
    return this._agent.IdAgente;
  }
}
