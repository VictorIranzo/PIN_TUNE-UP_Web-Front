import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
              router: Router,
              detailsService: DetailsService,
              notificationsService: NotificationsService,
              breadcrumbService:BreadcrumbService) {
        this._route = route;
        this._router = router;
        this._detailsService = detailsService;
        this._notificationsService = notificationsService;
        this._breadcrumbService = breadcrumbService;

        this.model.IdUT= parseInt(this._route.params._value.id);

        this._getProductosDisponibles = this._detailsService.getProductosDisponibles().subscribe((data) => {
          this._parseProductos(data);
        });

        this._getUt = this._detailsService.getUt(this.model.IdUT).subscribe((data) => {
              if (data.UT == undefined) {
                this.showErrorAndBackHome();
              } else {
                this.ut = data;
                this.model.Nombre = data.UT.Nombre;
                this.model.Orden = data.UT.Orden;
                this._parseSprints(data.listaVersionesUT);
                this._parseWorkflows(data.listaWorkflowsDisponibles);
                this._parseTipos(data.listaTiposUT);
                this._parseProyectos(data.listaProyectos);
                this.model.Descripcion = data.UT.Definicion;
                this._mapSelected(data, this.model);
                this._breadcrumbService.addItems({label: `${this.model.IdUT}: ${this.model.Nombre}`, routerLink: `/uts/${this.model.IdUT}`});
              }
            },
            (error) => {
              this.showErrorAndBackHome();
            }
          );
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

        // TODO: The service must return the UT modified. Meanwhile...
        this.ut.UT.IdUT = this.model.IdUT;
        this.ut.UT.Nombre = this.model.Nombre;
        this.ut.UT.Orden = this.model.Orden;
        this.ut.UT.IdProducto = this.model.IdProducto;
        this.ut.UT.IdVersion = this.model.IdVersion;
        this.ut.UT.IdWorkflow = this.model.IdWorkflow;
        this.ut.UT.IdTipoUT = this.model.IdTipoUT;
        this.ut.UT.IdProyecto = this.model.IdProyecto;
        this.ut.UT.Descripcion = this.model.Descripcion;
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

  showErrorAndBackHome() {
    this._notificationsService.error('Error al obtener la UT', 'UT no encontrada');
    this._router.navigateByUrl('/home');
  }

  ngOnDestroy() {
    this._breadcrumbService.removeItems(1);

    this._saveDetailsSubscription &&
    !this._saveDetailsSubscription.closed &&
    this._saveDetailsSubscription.unsubscribe();

    this._getUtSub &&
    !this._getUtSub.closed &&
    this._getUtSub.unsubscribe();

    this._getProductosDisponibles &&
    !this._getProductosDisponibles.closed &&
    this._getProductosDisponibles.unsubscribe();

    this._getUt &&
    !this._getUt.closed &&
    this._getUt.unsubscribe();
  }
}
