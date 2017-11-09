import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import html from './details.component.html';
import './details.component.css';

import 'rxjs/add/operator/switchMap';

import {DetailsService} from './services';

@Component({
  selector: 'tn-ut-details',
  template: html,
})
export class DetailsComponent {
  codigoUT = null;
  editingMode = false;
  sprint = null;

  @ViewChild('combo') combo = null;

  constructor(route: ActivatedRoute,
              location: Location,
              detailsService: DetailsService) {
        this._route = route;
        this._detailsService = detailsService;

        this.codigoUT= parseInt(this._route.params._value.id);

        this._detailsService.getUt(this.codigoUT).subscribe((data) => {
              this.ut = data;
              this.nombreUT = this.ut.UT.Nombre;
              this.orden = this.ut.UT.Orden;
              this.producto = this.ut.ProductoUT;
              this._parseSprints(this.ut.listaVersionesUT);
              this._parseWorkflows(this.ut.listaWorkflowsDisponibles);
              this._parseTipos(this.ut.listaTiposUT);
              this._parseProyectos(this.ut.listaProyectos);
              this.descripcion = this.ut.UT.Definicion;
              this._mapSelected(data);
              this.sprint = 177;
            });

        this._detailsService.getProductosDisponibles().subscribe((data) => {
              this._parseProductos(data);
            });
  }

  ngOnInit() {

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
  }

  _parseProductos(productos) {
    this.productosDisponibles= productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
  }

  _mapSelected(ut) {
    this.sprintsDisponibles.forEach(function(element) {
      if (element.value == ut.UT.IdVersion) this.sprint = element.value;
    });
  }
}
