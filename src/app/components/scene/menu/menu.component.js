import {Component, ViewChild} from '@angular/core';
import html from './menu.component.html';
import {configService} from '@tune-up/core';
import {AgentService} from '../../../services';
import {MenuService} from './services';

import './menu.component.css';

@Component({
  selector: 'tn-menu',
  template: html
})
export class MenuComponent {
  @ViewChild('sidenav') sidenav = null;
  items = configService.menuItems;

  constructor(agentService: AgentService, menuService: MenuService) {
    this._agentService = agentService;
    this._menuService = menuService;
  }

  mustPrint(item) {
    // if (item.adminOnly) {
    //   if (this._agentService.isAdmin()) return true;
    //   else return false;
    // }
    return true;
  }

  ngAfterViewInit() {
    this._menuService.sidenav = this.sidenav;
    document.getElementsByClassName('ui-sidebar-close')[0].remove();
    document.getElementsByClassName('ui-sidebar')[0].style.padding = '0px';
  }

  ngAfterViewChecked() {
    this._menuService.initialize();
  }
}
