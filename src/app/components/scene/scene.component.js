import {Component} from '@angular/core';
import html from './scene.component.html';
import './scene.component.css';
import {MenuService} from './menu';

@Component({
  selector: 'tn-scene',
  template: html,
  providers: [MenuService]
})
export class SceneComponent {
  constructor(menuService: MenuService) {
    this._menuService = menuService;
  }
}
