import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {
  PrimengModule,
  Rule,
  ValidationErrorComponent,
  NotificationsComponent,
  SafeHtmlPipe,
} from './packages';

const MODULES = [
  CommonModule,
  FormsModule,
  PrimengModule,
  MomentModule,
];
const ELEMENTS = [
  SafeHtmlPipe,
  ValidationErrorComponent,
  Rule,
  NotificationsComponent,
];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...ELEMENTS],
  declarations: [...ELEMENTS],
})
export class TuneUpCoreModule { }
