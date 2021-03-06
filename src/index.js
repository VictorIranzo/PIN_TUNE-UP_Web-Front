import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app';
export * from '@tune-up/core';
export * from './app';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
