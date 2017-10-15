import {Input, Component} from '@angular/core';

import html from './appbar.component.html';

import './appbar.component.css';

@Component({
  selector: 'tn-appbar',  
  template: html
})
export class AppbarComponent {
  menuOpen = true;

  onHideMenuClick() {
    this.menuOpen = false;
  }

  onShowMenuClick() {
    this.menuOpen = true;
  }
}
