import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app';
export * from '@tune-up/core';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
