import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app';
import './styles/themes/theme-dark-green.css';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
