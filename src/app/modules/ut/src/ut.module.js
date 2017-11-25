import {NgModule} from '@angular/core';
import {UtRoutingModule} from './ut.routing';
import {UtComponent} from './ut.component';
import {TuneUpCoreModule} from '@tune-up/core';
import {DetailsComponent, DetailsService, NuevaUTComponent, FollowupsComponent} from './components';

@NgModule({
  imports: [TuneUpCoreModule, UtRoutingModule],
  declarations: [
    UtComponent,
    DetailsComponent,
    NuevaUTComponent,
    FollowupsComponent,
  ],
  providers: [
    DetailsService,
  ],
})
export class UtModule {}
