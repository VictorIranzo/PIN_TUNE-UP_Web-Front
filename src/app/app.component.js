import {Component, ViewChild} from '@angular/core';
import html from './app.html';
// import './css/index.css';

@Component({
  selector: 'tn-app',
  template: html
})
export class AppComponent {
  foo = {
    email: undefined
  };
  @ViewChild('frm') form;
  onSubmit = () => {
    console.log(this);
  }
}
