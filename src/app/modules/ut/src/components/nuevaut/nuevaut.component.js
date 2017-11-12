import {Component} from '@angular/core';
import {NotificationsService} from '@tune-up/core';
import {CreateUTService, GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService, GetWorkflowsService} from './services';
import html from './nuevaut.component.html';
import './nuevaut.component.css';


const proyectosCache = [];
const sprintsCache = [];
const tiposUTCache = [];
const workflowsCache = [];

@Component({
  selector: 'tn-ut-nuevaut',
  template: html,
  providers: [
    CreateUTService,
    GetProductosService,
    GetProyectosService,
    GetSprintsProductoService,
    GetTiposUTProductoService,
    GetWorkflowsService
  ],
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
    getSprintsProductoService : GetSprintsProductoService,
    getTiposUTService : GetTiposUTProductoService,
    getWorkflowsService : GetWorkflowsService,
    notificationsService: NotificationsService,
  ) {
    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._getWorkflowsService = getWorkflowsService;
    this._getTiposUTService = getTiposUTService;
    this._notificationService = notificationsService;
    this.productos = [];
    this.proyectos = [];
    this.sprints = [];
    this.tiposUT = [];
    this.workflows = [];
  }

  ngOnInit() {
    this._getProductos();
  }

  _getProductos() {
    this._getProductosSubscription = this._getProductosService.get().subscribe(
      (data) => {
        this.productos = this._parseProductos(data);
        if(this.productos.length > 0) {
          this.ut.IdProducto = this.productos[0].value;
          this._getDatosProducto(this.productos[0].value);
        }
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

  _getDatosProducto(idProducto) {
    this._getWorkflows(idProducto);    
    this._getProyectos(idProducto);
    this._getSprints(idProducto);   
    this._getTiposUT(idProducto); 
  }

  _getWorkflows(idProducto) {
    if (!workflowsCache[idProducto]) {
      this._getWorkflowsSubscription = 
        this._getWorkflowsService.get(idProducto).subscribe(
          (data) => {
            workflowsCache[idProducto] = this._parseWorkflows(data);
            this.workflows = workflowsCache[idProducto];
            this.ut.IdVersion = this.workflows[0]? this.workflows[0].value : null;
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
      this._getProyectoSubscription =
      this._getProyectosService.get(idProducto).subscribe(
        (data) => {
          proyectosCache[idProducto] = this._parseProyectos(data);
          this.proyectos = proyectosCache[idProducto];
          this.ut.IdProyecto = this.proyectos[0]? this.proyectos[0].value : null;          
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

  _getTiposUT(idProducto) {
    if(!tiposUTCache[idProducto]) {
      this._getTiposUTSubscription =
        this._getTiposUTService.get(idProducto).subscribe(
          (data) => {
            tiposUTCache[idProducto] = this._parseTiposUT(data); 
            this.tiposUT = tiposUTCache[idProducto];
            this.ut.IdTipoUT = this.tiposUT[0]? this.tiposUT[0].value : null;
          },
          (error) => 
            this._notificationService.error(
              'No se han podido obtener los tipos de UT',
              error
        ));
    }
    return tiposUTCache[idProducto];
  }
  
  _parseTiposUT(tipos) {
    return tipos.map((t) => {
      return {label: `${t.Nombre}`, value: t.IdTipoUT}
    })
  }

  _getSprints(idProducto) {
    if(!sprintsCache[idProducto]) {
      this._getSprintsSubscription = 
       this._getSprintsService.get(idProducto).subscribe(
        (data) => {
          sprintsCache[idProducto] = this._parseSprints(data);
          this.sprints = sprintsCache[idProducto];
          this.ut.IdVersion = this.sprints[0]? this.sprints[0].value : null;
        },
        (error) => {
          this._notificationService.error(
            'No se han podido obtener los Sprints del producto',
            error
          )
        }
      )
    }
    return sprintsCache[idProducto];
  }

  _parseSprints(sprints) {
    return sprints.map((sp) => {
      return {label: `${sp.Nombre}`, value: sp.IdVersion}
    })
  }
  
  onProductChanged(idNuevoProducto) {
    this._getDatosProducto(idNuevoProducto);
  }

  onCrearNuevaUTClick() {
    this._crearUTSubscription = 
    this._createUTService.put(this.ut).subscribe(
      (data) => {
      },
      (error) => {
        this._notificationService.error(
          'No se pudo crear la UT especficada',
          error
        );
      }
    );  
  }

  onCrearYAbrirUTClick() {
    this._crearUTSubscription = 
    this._createUTService.put(this.ut).subscribe(
      (data) => {
        this.idUt = data;
        //TODO: Redirigir
      },
      (error) => {
        this._notificationService.error(
          'No se pudo crear la UT especficada',
          error
        );
      }
    );
  }

  isNombreEmpty() {
    return this.ut.Nombre == null || this.ut.Nombre.length === 0;
  }

  ngOnDestroy() {

    this._crearUTSubscription &&
      !this._crearUTSubscription.closed &&
      this._crearUTSubscription.unsubscribe();

    this._getProductosSubscription &&
      !this._getProductosSubscription.closed &&
      this._getProductosSubscription.unsubscribe();
      
    this._getProyectoSubscription &&
      !this._getProyectoSubscription.closed &&
      this._getProyectoSubscription.unsubscribe();

    this._getSprintsSubscription &&
      !this._getSprintsSubscription.closed &&
      this._getSprintsSubscription.unsubscribe();

    this._getTiposUTSubscription &&
      !this._getTiposUTSubscription.closed &&
      this._getTiposUTSubscription.unsubscribe();

    this._getWorkflowsSubscription &&
      !this._getWorkflowsSubscription.closed &&
      this._getWorkflowsSubscription.unsubscribe();      
  }
}
