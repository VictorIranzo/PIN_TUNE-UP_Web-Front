import {Component} from '@angular/core';
import {UtListService} from './components/utlist/services';
import {NotificationsService} from '@tune-up/core';
import html from './home.component.html';
import './home.component.css';

@Component({
  selector: 'tn-home',
  template: html,
  providers: [UtListService]
})
export class HomeComponent {
  constructor(
    utListService: UtListService,
    notificationService: NotificationsService
  ) {
    this._utListService = utListService;
    this._notificationsService = notificationService;
    this.allUts = [];
    this.utsToShow = [];
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
        this.allUts = data.Resultado;
        this.utsToShow = data.Resultado;
      },
      error =>
        this._notificationsService.error(
          'No se pudieron obtener las UTs',
          error
        )
    );
  }
  filterUts = (idActivity, status) => {
    this.utsToShow = this.allUts.filter(
      ut =>
        (idActivity === 'ALL' || ut.IdActividad === idActivity) &&
        (status === 'ALL' ||
          ut.Estado === status ||
          (ut.Estado === 'ACTIVE' && status === 'DOING'))
    );
  };
}
