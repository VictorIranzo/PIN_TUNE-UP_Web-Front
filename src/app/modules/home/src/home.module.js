import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home.routing';
import {HomeComponent} from './home.component';
import {TuneUpCoreModule} from '@tune-up/core';

@NgModule({
  imports: [TuneUpCoreModule, HomeRoutingModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
