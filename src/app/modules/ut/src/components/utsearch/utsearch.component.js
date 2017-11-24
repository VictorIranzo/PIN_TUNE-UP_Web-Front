import {Component} from '@angular/core';

import html from './utsearch.component.html';
import './utsearch.component.css';

const utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece',
};

@Component({
  selector: 'tn-ut-search',
  template: html,
})
export class UtSearchComponent {

}
