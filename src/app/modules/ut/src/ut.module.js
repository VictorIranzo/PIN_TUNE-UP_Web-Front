/**
 * If using a PrimeNg module gives you and error, register
 * it in lib/core/src/packages/primeng so it is shared among
 * all the app.
 */
import {NgModule} from '@angular/core';
import {UtRoutingModule} from './ut.routing';
import {UtComponent} from './ut.component';
import {TuneUpCoreModule} from '@tune-up/core';

@NgModule({
  imports: [TuneUpCoreModule, UtRoutingModule],
  declarations: [UtComponent]
})
export class UtModule {}
