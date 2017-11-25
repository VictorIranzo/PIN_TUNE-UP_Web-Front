import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home.routing';
import {HomeComponent} from './home.component';
import {TuneUpCoreModule} from '@tune-up/core';
import {KanbanResumeComponent, UtListComponent} from './components';

@NgModule({
  imports: [TuneUpCoreModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    KanbanResumeComponent,
    UtListComponent,
  ],
})
export class HomeModule {}
