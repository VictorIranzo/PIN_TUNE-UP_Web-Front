import {Component} from '@angular/core';
import {UtListService} from './components/utlist/services';
import {NotificationsService} from '@tune-up/core';
import html from './home.component.html';
import './home.component.css';

@Component({
  selector: 'tn-home',
  template: html,
  providers: [UtListService],
})
export class HomeComponent {
  allUts = [];
  utsToShow = [];
  constructor(
    utListService: UtListService,
    notificationService: NotificationsService
  ) {
    this._utListService = utListService;
    this._notificationsService = notificationService;
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
  filterUts = (idActivity/* , status*/) => {
    this.utsToShow = this.allUts.filter(
      (ut) =>
        idActivity === 'ALL' || ut.IdActividad === idActivity
        // &&
        // (status === 'ALL' || ut.Estado === status ||
        //   (ut.Estado === 'ACTIVE' && status === 'DOING'))
    );
  };
  filterUtsKanbanList = (IdAgente, IdProducto, IdVersion, IdProyecto) => {
    this.utsToShow = this.allUts.filter(
      (ut) => {
        let isAgente = IdAgente === 'ALL' || ut.IdAgente == IdAgente;
        let isProducto = IdProducto === 'ALL' || ut.IdProducto === IdProducto;
        let isVersion = IdVersion === 'ALL' || ut.IdVersion === IdVersion;
        let isProyecto = IdProyecto === 'ALL' || ut.IdProyecto === IdProyecto;

        return isAgente && isProducto && isVersion && isProyecto;
      }
    );
  }


  ngOnDestroy() {
    this._getUtsSubscription &&
      !this._getUtsSubscription.closed &&
      this._getUtsSubscription.unsubscribe();
  }
}
