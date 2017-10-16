import {Component, Input} from '@angular/core';
import html from './menuitem.component.html';

import './menuitem.component.css';

@Component({
  selector: 'tn-menuitem',
  template: html
})
export class MenuItemComponent {
  @Input() path;
  @Input() text;
  @Input() icon;
  @Input() adminOnly;

  constructor() {}

  onClick() {
    console.log('Click en ' + text);
  }
}
