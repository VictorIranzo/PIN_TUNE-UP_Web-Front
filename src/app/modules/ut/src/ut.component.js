import {Component, ViewChild} from '@angular/core';
import html from './ut.component.html';
import './ut.component.css';

@Component({
  selector: 'tn-ut',
  template: html
})
export class UtComponent {
  @ViewChild('frm') form;
  constructor() {
    this.foo = {
      email: undefined,
      password: undefined
    };
  }
  onSubmit = () => {
    console.log(this);
  };
}
