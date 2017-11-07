import {Component} from '@angular/core';
import html from './nuevaut.component.html';
import './nuevaut.component.css';

@Component({
  selector: 'tn-nuevaut',
  template: html,
})
export class NuevaUTComponent {
  ut = {
    Nombre,
    IdVersion,
    IdProducto,
    IdWorkflow,
    IdTipoUT,
    IdProyecto,
 }
  constructor() {
  }
}
