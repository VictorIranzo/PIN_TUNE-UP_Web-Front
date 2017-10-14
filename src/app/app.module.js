import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing';
import {TokenInterceptorProvider} from './http';
import {AuthService, AgentService, AboutService} from './services';
import {
  APIInterceptorProvider,
  ModuleLoaderProvider,
  TuneUpCoreModule,
  NotificationsService
} from '@tune-up/core';
import {AppComponent} from './app.component';
import {
  SceneComponent,
  AppbarComponent,
  MenuComponent,
  ContentComponent,
  MenuItemComponent
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
    ContentComponent,
    MenuItemComponent
  ],
  providers: [
    ModuleLoaderProvider,
    APIInterceptorProvider,
    TokenInterceptorProvider,
    AuthService,
    AgentService,
    AboutService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
