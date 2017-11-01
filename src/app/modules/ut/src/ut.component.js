/**
 * Always import html and css this way.
 * Always use the prefix tn in the selector.
 * Always initialize the models in the constructor
 *  (ngModel can't do it with nested model)
 * and always initialize them to undefined (not null)
 * Everytime you need to use a method from the html declare
 * it as an arrow function.
 */
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
