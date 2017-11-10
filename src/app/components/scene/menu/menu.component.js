import {Component, ViewChild} from '@angular/core';
import {AgentService} from '../../../services';
import {SceneService} from '../scene.service';
import {menuItems} from './menuitems';
import html from './menu.component.html';
import './menu.component.css';

@Component({
  selector: 'tn-menu',
  template: html,
})
export class MenuComponent {
  @ViewChild('sidenav') sidenav = null;
  items = menuItems;
  constructor(agentService: AgentService, sceneService: SceneService) {
    this._agentService = agentService;
    this._sceneService = sceneService;
  }
  mustPrint(item) {
    // TODO: fix when needed
    // return this._agentService.isAdmin();
    return true;
  }
  ngAfterContentInit() {
    this._sceneService.sidenav = this.sidenav;
  }
  ngAfterViewInit() {
    this._tuneSidenav();
  }
  _tuneSidenav() {
    document.getElementsByClassName('ui-sidebar-mask')[0].hidden = true;
    document.getElementsByClassName('ui-sidebar-close')[0].remove();
    document.getElementsByClassName('ui-sidebar')[0].style.padding = '0px';
  }
}
