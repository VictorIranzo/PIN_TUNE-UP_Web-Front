import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {CreateUTService, GetProductosService} from './services';
import html from './nuevaut.component.html';
import './nuevaut.component.css';

@Component({
  selector: 'tn-ut-nuevaut',
  template: html,
  providers: [CreateUTService, GetProductosService],
})
export class NuevaUTComponent {
  ut = {
    Nombre: null,
    IdVersion: null,
    IdProducto: null,
    IdWorkflow: null,
    IdTipoUT: null,
    IdProyecto: null,
  };
  productos = [];

  constructor(
    createUTService: CreateUTService,
    getProductosService: GetProductosService,
    notificationsService: NotificationsService,
  ) {
    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._notificationService = notificationsService;
    this._getProductos();
  }

  _getProductos() {
    this._getProductosSubscription = this._getProductosService.get().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener los productos',
          error
        )
    );
  }

  _crearUT() {
    idUT = 0;
    this.createUTService.put(this.ut).subscribe(
      (data) => {
        this.idUT = data.Resultado;
      },
      (error) => {
        this._notificationService.error(
          'No se pudo crear la UT especficada',
          error
        );
      }
    );
    return idUT;
  }

  ngOnDestroy() {
    this._getProductosSubscription &&
      !this._getProductosSubscription.closed &&
      this._getProductosSubscription.unsubscribe();
  }
}
