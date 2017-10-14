import {Component} from '@angular/core';
import html from './menu.component.html';

@Component({
  selector: 'tn-menu',
  template: html
})
export class MenuComponent {
  visibleSidebar;
  items = [
    {
      path: 'comunicaciones',
      text: 'Comunicaciones',
      icon: 'fa fa-bandcamp',
      adminOnly: false
    },
    {
      path: 'comunicaciones',
      text: 'Comunicaciones',
      icon: 'fa fa-bandcamp',
      adminOnly: false
    },
    {
      path: 'comunicaciones',
      text: 'Comunicaciones',
      icon: 'fa fa-bandcamp',
      adminOnly: false
    },
    {
      path: 'comunicaciones',
      text: 'Comunicaciones',
      icon: 'fa fa-bandcamp',
      adminOnly: false
    }
  ];

  constructor() {}
}
