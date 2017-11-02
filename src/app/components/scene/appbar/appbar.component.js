import {Component} from '@angular/core';
import {BreadcrumbService} from './services/breadcrumb.service';
import {SceneService} from '../scene.service';
import html from './appbar.component.html';
import './appbar.component.css';

@Component({
  selector: 'tn-appbar',
  template: html,
  providers: [BreadcrumbService],
})
export class AppbarComponent {
  menuOpen = true;
  breadcrumbItems = [];

  constructor(breadcrumbService: BreadcrumbService, sceneService: SceneService) {
    this._breadcrumbService = breadcrumbService;
    this._sceneService = sceneService;
    this._getBreadcrumbItems();
  }
  _getBreadcrumbItems() {
    this.breadcrumbItems = this._breadcrumbService.items;
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
