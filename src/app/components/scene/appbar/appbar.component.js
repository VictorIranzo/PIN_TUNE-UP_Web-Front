import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../../services/breadcrumb.service';

import html from './appbar.component.html';

import './appbar.component.css';

@Component({
  selector: 'tn-appbar',  
  template: html,
  providers: [BreadcrumbService]
})
export class AppbarComponent {
  constructor(breadcrumbService : BreadcrumbService) {
    this._breadcrumbService = breadcrumbService;
  }

  breadcrumbItems = [];  
  @Input() menuOpen = true;

  ngOnInit() {
    this._getBreadcrumbItems();
  }

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
