import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {PrimengModule, Rule, ErrorComponent} from './packages';

const SHARED = [
  CommonModule,
  FormsModule,
  PrimengModule,
  MomentModule
];

@NgModule({
  imports: [...SHARED],
  exports: [...SHARED, ErrorComponent, Rule],
  declarations: [ErrorComponent, Rule]
})
export class TuneUpCoreModule {}
