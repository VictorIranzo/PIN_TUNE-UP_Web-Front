import {Component, Input, Output, EventEmitter} from '@angular/core';
import html from './siteselector.component.html';

@Component({
  selector: 'tn-site-selector',
  template: html,
})
export class SiteSelectorComponent {
  @Input() sites = [];
  @Output() onSiteSelected = new EventEmitter();
  selectSite = (event) => {
    this.onSiteSelected.emit(event.value);
  };
}
