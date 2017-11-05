import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {UtComponent} from './ut.component';
import {DetailsComponent} from './components';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: UtComponent},
    {path: ':id', component: DetailsComponent},
  ])],
  exports: [RouterModule],
})
export class UtRoutingModule {}


