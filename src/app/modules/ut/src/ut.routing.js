import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {UtComponent} from './ut.component';
import {DetailsComponent, NuevaUTComponent} from './components';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: UtComponent},
    {path: 'add', component: NuevaUTComponent, data: {breadcrumb: 'Nueva UT'}},
    {path: ':id', component: DetailsComponent, data: {breadcrumb: '@id'}},
  ])],
  exports: [RouterModule],
})
export class UtRoutingModule {}


