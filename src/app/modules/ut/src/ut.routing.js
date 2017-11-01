import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {UtComponent} from './ut.component';

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: UtComponent}])],
  exports: [RouterModule]
})
export class UtRoutingModule {}
