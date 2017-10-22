import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {KanbanActivitiesService} from './services'

import html from './kanbanresume.component.html';
import './kanbanresume.component.css';

@Component({
  selector: 'tn-kanban-resume',
  template: html,
  providers: [KanbanActivitiesService]
})
export class KanbanResumeComponent {
  kanbanActivities = [];

  constructor(
    activitiesService : KanbanActivitiesService,
    notificationsService : NotificationsService
  ) {
    this._activitiesService = activitiesService;
    this._notificationsService = notificationsService;
    this._getKanbanActivities();
  }

  _getKanbanActivities() {
    this._activitiesService.get().subscribe(
      data => {
        if(!data.Exito) {
          this._notificationsService.error(
            'No se pudieron obtener las actividades del Kanban Resumido',
            data.Mensaje
          );
          return;
        }
        this.kanbanActivities = data.Resultado;
      }, 
      error =>
        this._notificationsService.error(
          'No se pudieron obtener las actividades del Kanban Resumido',
          error
      )
    );
  };
}
