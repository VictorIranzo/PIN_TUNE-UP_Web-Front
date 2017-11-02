import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login.routing';
import {LoginComponent} from './login.component';
import {SiteSelectorComponent} from './components';
import {TuneUpCoreModule} from '@tune-up/core';

@NgModule({
  imports: [TuneUpCoreModule, LoginRoutingModule],
  declarations: [LoginComponent, SiteSelectorComponent],
})
export class LoginModule {}
