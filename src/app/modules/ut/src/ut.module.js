import {NgModule} from '@angular/core';
import {UtRoutingModule} from './ut.routing';
import {UtComponent} from './ut.component';
import {TuneUpCoreModule} from '@tune-up/core';

@NgModule({
  imports: [TuneUpCoreModule, UtRoutingModule],
  declarations: [UtComponent]
})
export class UtModule {}
