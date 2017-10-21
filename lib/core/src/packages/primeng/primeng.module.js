import {NgModule} from '@angular/core';
import {primengExports} from '@tune-up/vendor';

const primengModules = Object.values(primengExports).filter((func) =>
  func.name && func.name.endsWith('Module')
);
@NgModule({
  imports: primengModules,
  exports: primengModules
})
export class PrimengModule {}
