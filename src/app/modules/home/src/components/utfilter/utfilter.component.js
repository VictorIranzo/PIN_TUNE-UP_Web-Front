import {Component, Input} from '@angular/core';
import html from './utfilter.component.html';
import './utfilter.component.css';

@Component({
  selector: 'tn-ut-filter',
  template: html,
})
export class UTFilterComponent {
  @Input() filterUts;
  filtro = {
      IdUt: null,
      IdAgente: null,
      IdProducto: null,
      IdProyecto: null,
  }

  sprints = [];
  productos = [];
  proyectos = [];
  sprints = [];
  
  isIrAEmpty() {
    return this.filtro.IdUt === null || this.filtro.IdUt.length === 0;
  }
}
