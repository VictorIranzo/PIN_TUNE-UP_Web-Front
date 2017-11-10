import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import html from './details.component.html';
import './details.component.css';

import {DetailsService} from './services';

@Component({
  selector: 'tn-ut-details',
  template: html,
})
export class DetailsComponent {
  editingMode = false;
  model = {codigoUT: null, nombreUT: null, orden: null, producto: null, sprint: null, workflow: null, 
          tipo: null, proyecto: null, descripcion: null};

  @ViewChild('combo') combo = null;

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

  onEditar() {
    this.editingMode = true;
  }

  onCancelar() {
    this.editingMode = false;
  }

  onGuardar() {
    this.editingMode = false;
  }

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
    this.productosDisponibles= productos.map((prod) => {
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
