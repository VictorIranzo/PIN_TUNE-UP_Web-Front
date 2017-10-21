import {Component, Input} from '@angular/core';
import {BreadcrumbService} from './services/breadcrumb.service';
import {MenuService} from '../menu';

import html from './appbar.component.html';

import './appbar.component.css';

@Component({
  selector: 'tn-appbar',
  template: html,
  providers: [BreadcrumbService]
})
export class AppbarComponent {
  //showMenu = false;
  menuOpen = true;
   breadcrumbItems = [];

  constructor(breadcrumbService: BreadcrumbService, menuService: MenuService) {
    this._breadcrumbService = breadcrumbService;
    this._menuService = menuService;
    //this._menuService.onShowMenuAppBar.subscribe(result =>{ this.showMenu = result;console.log(result)});
    this._getBreadcrumbItems();
  }

  _getBreadcrumbItems() {
    this.breadcrumbItems = this._breadcrumbService.getItems();
  }

  onHideMenuClick() {
    this.menuOpen = false;
    this._menuService.close();
  }

  onShowMenuClick() {
    this.menuOpen = true;
    this._menuService.open();
  }
}
