import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TnModuleLoaderProvider} from './loader';
import {RoutingModule} from './routing';
import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/primeng';

const primengModules = [InputTextModule];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule
  ].concat(primengModules),
  declarations: [AppComponent],
  providers: [TnModuleLoaderProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
