import {Component, Input} from '@angular/core';
import html from './menuitem.component.html';
import './menuitem.component.css';

@Component({
  selector: 'tn-menuitem',
  template: html,
})
export class MenuItemComponent {
  // TODO: en vez de pasar las 4 propiedades pasa el objeto entero
  @Input() path;
  @Input() text;
  @Input() icon;
  @Input() adminOnly;
}
