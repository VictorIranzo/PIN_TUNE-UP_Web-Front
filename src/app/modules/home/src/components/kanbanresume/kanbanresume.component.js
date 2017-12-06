import {Component, Input} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {KanbanActivitiesService} from './services';
import html from './kanbanresume.component.html';
import './kanbanresume.component.css';

@Component({
  selector: 'tn-kanban-resume',
  template: html,
  providers: [KanbanActivitiesService],
})
export class KanbanResumeComponent {
  kanbanActivities = [];
  selectedActivity = undefined;
  @Input() filterUts;
  @Input() filtro;
  constructor(
    activitiesService: KanbanActivitiesService,
    notificationsService: NotificationsService
  ) {
    this._activitiesService = activitiesService;
    this._notificationsService = notificationsService;
    this._getKanbanActivities();
  }
  _getKanbanActivities() {
    this._getActivitiesSubscription = this._activitiesService.get().subscribe(
      (data) => {
        this.kanbanActivities = data;
      },
      (error) =>
        this._notificationsService.error(
          'No se pudieron obtener las actividades del Kanban Resumido',
          error
        )
    );
  }
  filterKanbanActivies(idActivity = 'ALL', status = 'ALL') {
    if (idActivity == -1) idActivity = 'ALL';
    this.filtro.IdActividad = idActivity;
    this.filterUts();
  }
  ngOnDestroy() {
    this._getActivitiesSubscription &&
    !this._getActivitiesSubscription.closed &&
    this._getActivitiesSubscription.unsubscribe();
  }
}
