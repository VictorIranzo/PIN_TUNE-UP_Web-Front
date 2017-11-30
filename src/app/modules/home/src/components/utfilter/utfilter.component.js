import {Component, Input} from '@angular/core';
import html from './utfilter.component.html';
import './utfilter.component.css';

@Component({
  selector: 'tn-ut-list',
  template: html,
})
export class UTFilterComponent {
  @Input() filterUts;
}
