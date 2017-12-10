import {Component} from '@angular/core';
import {UtListService} from './components/utlist/services';
import {UpdateKanbanResumeService} from './components/kanbanresume/services';
import {NotificationsService} from '@tune-up/core';
import html from './home.component.html';
import './home.component.css';

@Component({
  selector: 'tn-home',
  template: html,
  providers: [
    UtListService,
    UpdateKanbanResumeService,
  ],
})
export class HomeComponent {
  utsToShow = [];
  globalFilter = {
      IdAgente: 'ALL',
      IdProducto: 'ALL',
      IdVersion: 'ALL',
      IdProyecto: 'ALL',
      IdActividad: 'ALL',
  }
  isLoadingUTs = false;
  constructor(
    utListService: UtListService,
    updateKanbanService: UpdateKanbanResumeService,
    notificationService: NotificationsService
  ) {
    this._utListService = utListService;
    this._notificationsService = notificationService;
    this._updateKanbanService = updateKanbanService;
    this._getUts();
  }
  _getUts(IdActividad = 'ALL', IdAgente = 'ALL', IdProducto = 'ALL', IdVersion = 'ALL', IdProyecto = 'ALL') {
    this.isLoadingUTs = true;
    this._getUtsSubscription = this._utListService.get(
      IdActividad,
      IdAgente,
      IdProducto,
      IdVersion,
      IdProyecto
    ).subscribe(
      (data) => {
        this.utsToShow = data;
        this.isLoadingUTs = false;
      },
      (error) =>
        this._notificationsService.error(
          'No se pudieron obtener las UTs',
          error
        )
    );
  }

  filterUts = (isActivityFilter = false) => {
    if (!isActivityFilter) {
      this.globalFilter.IdActividad = 'ALL';
      this._updateKanbanService.update();
    }
    this._getUts(
      this.globalFilter.IdActividad,
      this.globalFilter.IdAgente,
      this.globalFilter.IdProducto,
      this.globalFilter.IdVersion,
      this.IdProyecto
    );
  }

  ngOnDestroy() {
    this._getUtsSubscription &&
      !this._getUtsSubscription.closed &&
      this._getUtsSubscription.unsubscribe();
  }
}
