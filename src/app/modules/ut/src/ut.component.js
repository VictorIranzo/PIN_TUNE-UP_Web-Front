import {Component} from '@angular/core';
import {BreadcrumbService} from '@tune-up/app';
import html from './ut.component.html';
import './ut.component.css';

@Component({
  selector: 'tn-ut',
  template: html,
})
export class UtComponent {
  constructor(breadcrumbService: BreadcrumbService) {
    this._breadcrumbService = breadcrumbService;
    this._breadcrumbService.addItems({label: 'UTs', routerLink: '/uts'});
  }
  ngOnDestroy() {
    // TODO: determine when to reset breadcrumbService
    // this._breadcrumbService.removeItems(1);
  }
}
