/**
 * This is the module, TuneUpCoreModule has all the imports
 * you may need, if not open an issue but dont include it here
 * so it is available to other modules.
 * Import TuneUpCore and the RoutingModule and declare 
 * the providers and declarations you may need.
 * 
 * If using a PrimeNg module gives you and error, register
 * it in lib/core/src/packages/primeng so it is shared among
 * all the app.
 */
import {NgModule} from '@angular/core';
import {ExampleRoutingModule} from './example.routing';
import {ExampleComponent} from './example.component';
import {TuneUpCoreModule} from '@tune-up/core';

@NgModule({
  imports: [TuneUpCoreModule, ExampleRoutingModule],
  declarations: [ExampleComponent]
})
export class ExampleModule {}
