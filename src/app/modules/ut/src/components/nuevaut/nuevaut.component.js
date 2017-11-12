import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {CreateUTService, GetProductosService, GetWorkflowsService} from './services';
import html from './nuevaut.component.html';
import './nuevaut.component.css';

const workflowsCache = [];


@Component({
  selector: 'tn-ut-nuevaut',
  template: html,
  providers: [CreateUTService, GetProductosService, GetWorkflowsService],
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
    this.productos = [];
    this.workflows = [];
  }

  ngOnInit() {
    this._getProductos();
  }

  _getProductos() {
    this._getProductosSubscription = this._getProductosService.get().subscribe(
      (data) => {
        this.productos = this._parseProductos(data);
        this._getWorkflows(this.productos[0].value);        
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener los productos',
          error
        )
    );
  }

  _parseProductos(productos) {
    return productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
  }
  onProductChanged(idNuevoProducto) {
      this.workflows = this._getWorkflows(idNuevoProducto);
  }

  _getWorkflows(idProducto) {
    if (!workflowsCache[idProducto]) {
      this._getWorkflowsService.get(idProducto).subscribe(
        (data) => {
          workflowsCache[idProducto] = this._parseWorkflows(data);
          this.workflows = workflowsCache[idProducto];
        }
      );
    }
    return workflowsCache[idProducto];
  }

  _parseWorkflows(workflows) {
    return workflows.map((wf) =>  {
      return {label: `${wf.Nombre}`, value: wf.IdWorkflow};
    });
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
