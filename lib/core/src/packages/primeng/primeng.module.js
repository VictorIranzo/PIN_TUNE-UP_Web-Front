import {NgModule} from '@angular/core';
import {InputTextModule, ButtonModule} from 'primeng/primeng';

const primengModules = [InputTextModule, ButtonModule];

@NgModule({
  imports: primengModules,
  exports: primengModules
})
export class PrimengModule {}
