import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {CreateUTService, GetProductosService, GetProyectosService, GetWorkflowsService} from './services';
import html from './nuevaut.component.html';
import './nuevaut.component.css';

const workflowsCache = [];
const proyectosCache = [];


@Component({
  selector: 'tn-ut-nuevaut',
  template: html,
  providers: [CreateUTService, GetProductosService, GetProyectosService, GetWorkflowsService],
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
    getProyectosService : GetProyectosService,
    getWorkflowsService : GetWorkflowsService,
    notificationsService: NotificationsService,
  ) {
    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getWorkflowsService = getWorkflowsService;
    this._notificationService = notificationsService;
    this.productos = [];
    this.workflows = [];
    this.proyectos = [];
  }

  ngOnInit() {
    this._getProductos();
  }

  _getProductos() {
    this._getProductosSubscription = this._getProductosService.get().subscribe(
      (data) => {
        this.productos = this._parseProductos(data);
        this._getWorkflows(this.productos[0].value);    
        this._getProyectos(this.productos[0].value);    
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
      this.proyectos = this._getProyectos(idNuevoProducto);
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

  _getProyectos(idProducto) {
    if(!proyectosCache[idProducto]) {
      this._getProyectosService.get(idProducto).subscribe(
        (data) => {
          proyectosCache[idProducto] = this._parseProyectos(data);
          this.proyectos = proyectosCache[idProducto];
        },
        (error) => 
          this._notificationService.error(
            'No se han podido obtener los proyectos del producto',
          error  
        ));
    }
    return proyectosCache[idProducto];
  }

  _parseProyectos(proyectos) {
    return proyectos.map((pr) => {
      return {label: `${pr.Nombre}`, value: pr.IdProyecto}
    })
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
