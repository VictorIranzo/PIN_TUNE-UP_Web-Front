import {Component, ViewChild} from '@angular/core';
import html from './app.html';
import './css/app.css';

@Component({
  selector: 'tn-app',
  template: html
})
export class AppComponent {
  foo = {
    email: undefined,
    password: undefined
  };
  @ViewChild('frm') form;
  onSubmit = () => {
    console.log(this);
  };
}
