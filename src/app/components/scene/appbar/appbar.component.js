import {Component} from '@angular/core';
import {BreadcrumbService} from '../../../services';
import {SceneService} from '../scene.service';
import html from './appbar.component.html';
import './appbar.component.css';

@Component({
  selector: 'tn-appbar',
  template: html,
})
export class AppbarComponent {
  menuOpen = true;
  breadcrumbHome = {icon: 'fa fa-home', routerLink: '/home'}
  constructor(breadcrumbService: BreadcrumbService, sceneService: SceneService) {
    this._breadcrumbService = breadcrumbService;
    this._sceneService = sceneService;
  }
  breadcrumbItems() {
    return this._breadcrumbService.items;
  }
  onHideMenuClick() {
    this.menuOpen = false;
    this._sceneService.closeStrong();
  }
  onShowMenuClick() {
    this.menuOpen = true;
    this._sceneService.open();
  }
}
