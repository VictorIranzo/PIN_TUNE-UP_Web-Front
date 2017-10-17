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
  }
}
