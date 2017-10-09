import {Component, Input} from '@angular/core';
import html from './error.html';

@Component({
  selector: 'tn-error',
  template: html
})
export class ErrorComponent {
  @Input() control;
  getErrors() {
    return Object.values((this.control && this.control.errors) || {});
  }
}
