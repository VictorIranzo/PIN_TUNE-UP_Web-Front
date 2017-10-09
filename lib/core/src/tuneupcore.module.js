import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PrimengModule, Rule, ErrorComponent} from './packages';

const SHARED = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  PrimengModule
];

@NgModule({
  imports: [...SHARED],
  exports: [...SHARED, ErrorComponent, Rule],
  declarations: [ErrorComponent, Rule]
})
export class TuneUpCoreModule {}
