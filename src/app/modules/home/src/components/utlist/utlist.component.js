import {Component} from '@angular/core';
import {NotificationsService, AgentService} from '@tune-up/core';
import {UtListService, AgentPicService} from './services';
import html from './utlist.component.html';
import './utlist.component.css';

const utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece'
};
const workflowIcons = {
  1: 'fa fa-arrow-up',
  2: 'fa fa-repeat',
  3: 'fa fa-cog',
  4: 'fa fa-undo',
  5: 'fa fa-refresh'
};
const agentPics = {};

@Component({
  selector: 'tn-ut-list',
  template: html,
  providers: [UtListService, AgentPicService]
})
export class UtListComponent {
  constructor(
    utListService: UtListService,
    agentPicService: AgentPicService,
    notificationService: NotificationsService,
    agentService: AgentService
  ) {
    this._utListService = utListService;
    this._agentPicService = agentPicService;
    this._notificationsService = notificationService;
    this._agentService = agentService;
    this.uts = [];
    this._getUts();
  }
  _getUts() {
    this._utListService.get().subscribe(
      data => {
        if (!data.Exito) {
          this._notificationsService.error(
            'No se pudieron obtener las UTs',
            data.Mensaje
          );
          return;
        }
        this.uts = data.Resultado;
      },
      error =>
        this._notificationsService.error(
          'No se pudieron obtener las UTs',
          error
        )
    );
  }
  getAgentPic = ut => {
    const idAgente = ut.IdAgente;
    if (idAgente) {
      const idSitio = this._agentService.getSiteId();
      if (!agentPics[idAgente]) {
        this._agentPicService.get(idAgente, idSitio).subscribe(data => {
          agentPics[idAgente] = URL.createObjectURL(data);
        });
      }
      return agentPics[idAgente];
    }
  };
  getUtTypeIcon = ut => {
    return utTypesIcons[ut.IdTipoUT];
  };
  getStateIcon = ut => {
    return workflowIcons[ut.IdTipoSeguimiento];
  };
  setImgSrc() {
    // TODO
    [...document.getElementsByClassName('tn-home__utlist__agent__pic')].map(
      c => (c.src = c.getAttribute('data-src'))
    );
  }
}
