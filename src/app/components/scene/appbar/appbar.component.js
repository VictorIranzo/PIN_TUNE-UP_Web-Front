import {Component, Input} from '@angular/core';
import {BreadcrumbService} from '../../../services/breadcrumb.service';

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
  }
}
