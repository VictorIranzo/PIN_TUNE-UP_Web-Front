import {Component, Input, OnInit} from '@angular/core';
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

  constructor(route: ActivatedRoute,
              location: Location,
              detailsService: DetailsService) {
        this._route = route;
        this._detailsService = detailsService;
  }

  ngOnInit() {
    this.codigoUT= parseInt(this._route.params._value.id);

    this._detailsService.getUt(this.codigoUT).subscribe((data) => {
      this.ut = data;
      this.nombreUT = this.ut.UT.Nombre;
      this.orden = this.ut.UT.Orden;
      this.producto = this.ut.ProductoUT;
      this.sprintsDisponibles = this.ut.listaVersionesUT;
      this.workflowsDisponibles = this.ut.listaWorkflowsDisponibles;
      this.tiposDisponibles = this.ut.listaTiposUT;
      this.proyectosDisponibles = this.ut.listaProyectos;
      this.descripcion = this.ut.Descripcion;
    });

    this._detailsService.getProductosDisponibles().subscribe((data) => {
      this.productosDisponibles = data;
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
}
