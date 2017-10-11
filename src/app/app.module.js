import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing';
import {AuthService} from './services';
import {
  APIInterceptorProvider,
  ModuleLoaderProvider,
  TuneUpCoreModule
} from '@tune-up/core';
import {AppComponent} from './app.component';
import {
  SceneComponent,
  AppbarComponent,
  MenuComponent,
  ContentComponent
} from './components';

@NgModule({
  imports: [
    TuneUpCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    SceneComponent,
    AppbarComponent,
    MenuComponent,
    ContentComponent
  ],
  providers: [ModuleLoaderProvider, APIInterceptorProvider, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
