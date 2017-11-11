import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {TokenInterceptorProvider, ResponseInterceptorProvider} from './http';
import {
  AuthService,
  AgentService,
  AboutService,
  BreadcrumbService,
} from './services';
import {
  APIInterceptorProvider,
  ModuleLoaderProvider,
  TuneUpCoreModule,
  NotificationsService,
} from '@tune-up/core';
import {
  SceneComponent,
  AppbarComponent,
  MenuComponent,
  ContentComponent,
  MenuItemComponent,
} from './components';

@NgModule({
  imports: [
    TuneUpCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SceneComponent,
    AppbarComponent,
    MenuComponent,
    ContentComponent,
    MenuItemComponent,
  ],
  providers: [
    ModuleLoaderProvider,
    APIInterceptorProvider,
    TokenInterceptorProvider,
    ResponseInterceptorProvider,
    AuthService,
    AgentService,
    AboutService,
    NotificationsService,
    BreadcrumbService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
