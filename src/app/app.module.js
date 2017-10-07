import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ModuleLoaderProvider} from './loader';
import {RoutingModule} from './routing';
import {HttpInterceptorsProvider} from './http';
import {Rule} from './validation';
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
  declarations: [AppComponent, Rule],
  providers: [ModuleLoaderProvider, HttpInterceptorsProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
