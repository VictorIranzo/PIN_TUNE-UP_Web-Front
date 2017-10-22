import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {UtListService, AgentPicService} from './services';
import html from './utlist.component.html';
import './utlist.component.css';

const utTypes = ['mejora', 'fallo', 'nuevo', 'otro'];
const utTypesIcons = {
  mejora: 'fa fa-star',
  fallo: 'fa fa-bug',
  nuevo: 'fa fa-plus-circle',
  otro: 'fa fa-puzzle-piece'
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
    notificationService: NotificationsService
  ) {
    this._utListService = utListService;
    this._agentPicService = agentPicService;
    this._notificationsService = notificationService;
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
    // TODO
  };
  getUtTypeIcon = ut => {
    return utTypesIcons[utTypes[ut.IdTipoUT]];
  };
  getStateIcon = utIndex => {
    return 'fa fa-close fa-open';
  };
}
