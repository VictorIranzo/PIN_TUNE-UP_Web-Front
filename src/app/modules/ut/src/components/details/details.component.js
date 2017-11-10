import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailsService} from './services';
import html from './details.component.html';
import './details.component.css';

@Component({
  selector: 'tn-ut-details',
  template: html,
})
export class DetailsComponent {
  editingMode = false;
  model = {codigoUT: null, nombreUT: null, orden: null,
          producto: null, sprint: null, workflow: null,
          tipo: null, proyecto: null, descripcion: null};

  // TODO: si no vas a usar this.ut luego, no la guardes
  // TODO: utiliza destructuring para que quede más claro, ej
  // const {Nombre, Orden} = data.UT; const {listaVersiones,...} = data
  // TODO: seguramente sería mejor tener un solo objeto en el this
  // en plan ut, y en el html bindear a ut.prop y así no tener mil cosas 
  // en el scope

  constructor(route: ActivatedRoute,
              detailsService: DetailsService) {
        this._route = route;
        this._detailsService = detailsService;
        this.model.codigoUT= parseInt(this._route.params._value.id);

        this._detailsService.getUt(this.model.codigoUT).subscribe((data) => {
              this.ut = data;
              this.model.nombreUT = this.ut.UT.Nombre;
              this.model.orden = this.ut.UT.Orden;
              this._parseSprints(this.ut.listaVersionesUT);
              this._parseWorkflows(this.ut.listaWorkflowsDisponibles);
              this._parseTipos(this.ut.listaTiposUT);
              this._parseProyectos(this.ut.listaProyectos);
              this.model.descripcion = this.ut.UT.Definicion;
              this._mapSelected(data, this.model);
            });

        this._detailsService.getProductosDisponibles().subscribe((data) => {
              this._parseProductos(data);
            });
  }
  ngOnDestroy() {
    this._getUtSub &&
    !this._getUtSub.closed &&
    this._getUtSub.unsubscribe();
  }

  onEditar() {
    this.editingMode = true;
  }

  onCancelar() {
    this.editingMode = false;
  }

  onGuardar() {
    this.editingMode = false;
  }
  // TODO: var a = 'hola', label: a === label: `${a}`
  // las template strings solo valen si vas a escribir más.
  // TODO, en vez de almacenar todo esto en this, llama a las funciones desde el html y ya esta,
  // que solo se van a llamar una vez
  _parseSprints(sprints) {
    this.sprintsDisponibles = sprints.map((sprint) => {
      return {label: `${sprint.Nombre}`, value: sprint.IdVersion};
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
    this.proyectosDisponibles.push({label: '<Sin proyecto>', value: null});
  }
  _parseProductos(productos) {
    this.productosDisponibles = productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
  }

  _mapSelected(ut, model) {
    this.sprintsDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdVersion) model.sprint = element.value;
    });
    this.workflowsDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdWorkflow) model.workflow = element.value;
    });
    this.tiposDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdTipoUT) model.tipo = element.value;
    });
    this.proyectosDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdProyecto) model.proyecto = element.value;
    });
    this.productosDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdProducto) model.producto = element.value;
    });
  }
}
