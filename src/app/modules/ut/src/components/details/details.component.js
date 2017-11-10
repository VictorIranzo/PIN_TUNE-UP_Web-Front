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
  codigoUT = null;
  editingMode = false;
  ut;
  constructor(route: ActivatedRoute, detailsService: DetailsService) {
    this._route = route;
    this._detailsService = detailsService;
  }
  ngOnInit() {
    this.codigoUT = this._route.params._value.id;
    this._getUtSub = this._detailsService.getUt(this.codigoUT).subscribe((data) => {
      // TODO: si no vas a usar this.ut luego, no la guardes
      // TODO: utiliza destructuring para que quede más claro, ej
      // const {Nombre, Orden} = data.UT; const {listaVersiones,...} = data
      // TODO: seguramente sería mejor tener un solo objeto en el this
      // en plan ut, y en el html bindear a ut.prop y así no tener mil cosas 
      // en el scope
      this.ut = data;
      this.nombreUT = this.ut.UT.Nombre;
      this.orden = this.ut.UT.Orden;
      this.producto = this.ut.ProductoUT;
      this._parseSprints(this.ut.listaVersionesUT);
      this._parseWorkflows(this.ut.listaWorkflowsDisponibles);
      this._parseTipos(this.ut.listaTiposUT);
      this._parseProyectos(this.ut.listaProyectos);
      this.descripcion = this.ut.UT.Definicion;
      this.sprint = 177;
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
  }
  _parseProductos(productos) {
    this.productosDisponibles = productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
  }
}
