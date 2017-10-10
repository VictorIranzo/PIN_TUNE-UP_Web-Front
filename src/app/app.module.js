import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './routing';
import {
  APIInterceptorProvider,
  ModuleLoaderProvider,
  TuneUpCoreModule
} from '@tune-up/core';
import {AppComponent} from './app.component';
import {SceneComponent} from './components';

@NgModule({
  imports: [
    TuneUpCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  declarations: [AppComponent, SceneComponent],
  providers: [ModuleLoaderProvider, APIInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
