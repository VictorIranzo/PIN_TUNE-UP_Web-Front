import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {CreateUTService, GetProductosService, GetWorkflowsService} from './services';
import html from './nuevaut.component.html';
import './nuevaut.component.css';

@Component({
  selector: 'tn-ut-nuevaut',
  template: html,
  providers: [CreateUTService, GetProductosService, GetWorkflowsService],
})
export class NuevaUTComponent {
  ut = {
    Nombre: null,
    IdVersion: null,
    Producto: null,
    Workflow: null,
    IdTipoUT: null,
    IdProyecto: null,
  };
  productos = [];
  workflows = [];
  workflowsCache = [];

  constructor(
    createUTService: CreateUTService,
    getProductosService : GetProductosService,
    getWorkflowsService : GetWorkflowsService,
    notificationsService: NotificationsService,
  ) {
    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._getWorkflowsService = getWorkflowsService;
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

  onProductChanged(nuevoProducto) {
      this.workflows = _getWorkflows(nuevoProducto.IdProducto);
  }

  _getWorkflows(idProducto) {
    if (!this.workflowsCache[idProducto]) {
      this.workflowsCache[idProducto] = _getWorkflowsService.get(idProducto).subscribe(
        (data) => {
          this.workflowsCache[idProducto] = data;
        }
      );
    }
    return this.workflowsCache[idProducto];
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
