import {Component, Input} from '@angular/core';
import {NotificationsService, AgentService} from '@tune-up/core';
import {AgentPicService} from './services';
import html from './utlist.component.html';
import './utlist.component.css';

// TODO: extract to a config file
const utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece',
};
const workflowIcons = {
  1: 'fa fa-arrow-up',
  2: 'fa fa-repeat',
  3: 'fa fa-cog',
  4: 'fa fa-undo',
  5: 'fa fa-refresh',
};
const agentPics = {};

@Component({
  selector: 'tn-ut-list',
  template: html,
  providers: [AgentPicService],
})
export class UtListComponent {
  @Input() uts;
  @Input() isLoadingUTs;
  constructor(
    agentPicService: AgentPicService,
    notificationService: NotificationsService,
    agentService: AgentService
  ) {
    this._agentPicService = agentPicService;
    this._notificationsService = notificationService;
    this._agentService = agentService;
  }
  getAgentPic = (ut) => {
      const idAgente = ut.IdAgente;
      if (idAgente) {
        const idSitio = this._agentService.getSiteId();
        if (!agentPics[idAgente]) {
          this._agentPicService.get(idAgente, idSitio).subscribe((data) => {
            agentPics[idAgente] = URL.createObjectURL(data);
          });
        }
        return agentPics[idAgente] || '';
      }
      return '';
  };
  getUtTypeIcon = (ut) => {
    return utTypesIcons[ut.IdTipoUT];
  };
  getStateIcon = (ut) => {
    return workflowIcons[ut.IdTipoSeguimiento];
  };
  getUtLink = (ut) => {
    return `/uts/${ut.IdUT}`;
  };
}
