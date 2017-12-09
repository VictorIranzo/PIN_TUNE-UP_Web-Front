import {Component} from '@angular/core';
import {FilterService} from './services';
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
    FilterService,
    UpdateKanbanResumeService,
  ],
})
export class HomeComponent {
  allUts = [];
  utsToShow = [];
  globalFilter = {
      IdAgente: 'ALL',
      IdProducto: 'ALL',
      IdVersion: 'ALL',
      IdProyecto: 'ALL',
      IdActividad: 'ALL',
  }
  constructor(
    filterService: FilterService,
    utListService: UtListService,
    updateKanbanService: UpdateKanbanResumeService,
    notificationService: NotificationsService
  ) {
    this._filterService = filterService;
    this._utListService = utListService;
    this._notificationsService = notificationService;
    this._updateKanbanService = updateKanbanService;
    this._getUts();
  }
  _getUts() {
    this._getUtsSubscription = this._utListService.get().subscribe(
      (data) => {
        this.allUts = data;
        this.utsToShow = data;
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
    this.utsToShow = this._filterService.filter(this.allUts, this.globalFilter);
  }

  ngOnDestroy() {
    this._getUtsSubscription &&
      !this._getUtsSubscription.closed &&
      this._getUtsSubscription.unsubscribe();
  }
}
