<<<<<<< HEAD
import {Component, Input} from '@angular/core';
import {BreadcrumbService} from './services/breadcrumb.service';

import html from './appbar.component.html';

import './appbar.component.css';

@Component({
  selector: 'tn-appbar',
  template: html,
  providers: [BreadcrumbService]
})
export class AppbarComponent {
  constructor(breadcrumbService: BreadcrumbService) {
    this._breadcrumbService = breadcrumbService;
    this._getBreadcrumbItems();
  }

  @Input() menuOpen = true;
  breadcrumbItems = [];

  _getBreadcrumbItems() {
    this.breadcrumbItems = this._breadcrumbService.getItems();
  }

  onHideMenuClick() {
    this.menuOpen = false;
  }

  onShowMenuClick() {
    this.menuOpen = true;
=======
import {Component} from '@angular/core';
import {MenuService} from '../menu';
import html from './appbar.component.html';

@Component({
  template: html,
  selector: 'tn-appbar',
})
export class AppbarComponent {
  constructor(menuService: MenuService) {
    this._menuService = menuService;
  }
  clickBut() {
    // this.visibleSidebar = true;
    if (!this._menuService._sidenav.visible) this._menuService.open();
    else {
      this._menuService.close();
    }
>>>>>>> 5b0153993acdbd185cdf7a2265e2ba001c9d919c
  }
}
