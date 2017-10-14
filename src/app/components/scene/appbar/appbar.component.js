import {Component} from '@angular/core';

import html from './appbar.component.html';

@Component({
  selector: 'tn-appbar',  
  template: html
})
export class AppbarComponent {
  show = true;

  onHideMenuBarClick() {
    this.show = false;
  }

  onShowMenuBarClick() {
    this.show = true;
  }
}
