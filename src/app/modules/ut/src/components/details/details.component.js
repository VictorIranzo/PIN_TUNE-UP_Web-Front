import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailsService} from './services';
import {NotificationsService} from '@tune-up/core';
import {BreadcrumbService} from '@tune-up/app';
import html from './details.component.html';
import './details.component.css';

const utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece',
};

@Component({
  selector: 'tn-ut-details',
  template: html,
})
export class DetailsComponent {
  editingMode = false;
  model = {IdUT: undefined, Nombre: undefined, Orden: undefined,
          IdProducto: undefined, IdVersion: undefined, IdWorkflow: undefined,
          IdTipoUT: undefined, IdProyecto: undefined, Descripcion: undefined};
  ut;

  // TODO: utiliza destructuring para que quede más claro, ej
  // const {Nombre, Orden} = data.UT; const {listaVersiones,...} = data

  constructor(route: ActivatedRoute,
              detailsService: DetailsService,
              notificationsService: NotificationsService,
               breadcrumbService:BreadcrumbService ) {
        this._route = route;
        this._detailsService = detailsService;
        this._notificationsService = notificationsService;
        this._breadcrumbService = breadcrumbService;

        this.model.IdUT= parseInt(this._route.params._value.id);
        this._breadcrumbService.addItems({label: this.model.IdUT, routerLink: `/uts/${this.model.IdUT}`});

        this._detailsService.getProductosDisponibles().subscribe((data) => {
          this._parseProductos(data);
        });

        this._detailsService.getUt(this.model.IdUT).subscribe((data) => {
              this.ut = data;
              this.model.Nombre = data.UT.Nombre;
              this.model.Orden = data.UT.Orden;
              this._parseSprints(data.listaVersionesUT);
              this._parseWorkflows(data.listaWorkflowsDisponibles);
              this._parseTipos(data.listaTiposUT);
              this._parseProyectos(data.listaProyectos);
              this.model.Descripcion = data.UT.Descripcion;
              this._mapSelected(data, this.model);
            });
  }
  ngOnDestroy() {
    // TODO: provisional
    this._breadcrumbService.removeItems(1);
    this._getUtSub &&
    !this._getUtSub.closed &&
    this._getUtSub.unsubscribe();
  }

  onEditar() {
    this.editingMode = true;
  }

  onCancelar() {
    this.editingMode = false;

    this.model.IdUT = this.ut.UT.IdUT;
    this.model.Nombre = this.ut.UT.Nombre;
    this.model.Orden = this.ut.UT.Orden;
    this.model.IdProducto = this.ut.UT.IdProducto;
    this.model.IdVersion = this.ut.UT.IdVersion;
    this.model.IdWorkflow = this.ut.UT.IdWorkflow;
    this.model.IdTipoUT = this.ut.UT.IdTipoUT;
    this.model.IdProyecto = this.ut.UT.IdProyecto;
    this.model.Descripcion = this.ut.UT.Descripcion;
  }

  onGuardar = () => {
    this._saveDetailsSubscription = this._detailsService.submitChangesDetails(this.model).subscribe(
      (data) => {
        this.editingMode = false;
      },
      (error) => {
        this._notificationsService.error('Error al guardar los cambios', error);
      }
    );
  };

  // TODO: var a = 'hola', label: a === label: `${a}`
  // las template strings solo valen si vas a escribir más.
  // TODO, en vez de almacenar todo esto en this, llama a las funciones desde el html y ya esta,
  // que solo se van a llamar una vez

  _parseSprints(sprints) {
    this.sprintsDisponibles = sprints.map((sprint) => {
      return {label: sprint.Nombre, value: sprint.IdVersion};
    });
    this.sprintsDisponibles.push({label: 'Backlog', value: null});
  }
  _parseWorkflows(wfs) {
    this.workflowsDisponibles = wfs.map((wf) => {
      return {label: `${wf.Nombre}`, value: wf.IdWorkflow};
    });
  }
  _parseTipos(tipos) {
    this.tiposDisponibles = tipos.map((tipo) => {
      return {label: `${tipo.Nombre}`, value: tipo.IdTipoUT};
    });
  }
  _parseProyectos(proyectos) {
    this.proyectosDisponibles = proyectos.map((proy) => {
      return {label: `${proy.Nombre}`, value: proy.IdProyecto};
    });
    this.proyectosDisponibles.push({label: '<Sin Proyecto>', value: null});
  }
  _parseProductos(productos) {
    this.productosDisponibles = productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
  }

  _mapSelected(ut, model) {
    this.sprintsDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdVersion) model.IdVersion = element.value;
    });
    this.workflowsDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdWorkflow) model.IdWorkflow = element.value;
    });
    this.tiposDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdTipoUT) model.IdTipoUT = element.value;
    });
    this.proyectosDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdProyecto) model.IdProyecto = element.value;
    });
    this.productosDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdProducto) model.IdProducto = element.value;
    });
  }

  getUtTypeIcon = (tipo) => {
    return utTypesIcons[tipo];
  };

  ngOnDestroy() {
    this._saveDetailsSubscription &&
    !this._saveDetailsSubscription.closed &&
    this._saveDetailsSubscription.unsubscribe();
  }
}
