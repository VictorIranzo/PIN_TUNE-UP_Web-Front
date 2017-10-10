import * as ngCommon from '@angular/common';
import * as ngCommonHttp from '@angular/common/http';
import * as ngPlatformBrowser from '@angular/platform-browser';
import * as ngPlatformBrowserAnimations from '@angular/platform-browser/animations';
import * as ngPlatformBrowserDynamic from '@angular/platform-browser-dynamic';
import * as ngRouter from '@angular/router';
import * as ngCompiler from '@angular/compiler';
import * as ngCore from '@angular/core';
import * as ngForms from '@angular/forms';
import * as ngAnimations from '@angular/animations';

import 'reflect-metadata';
import 'zone.js/dist/zone';
/**
 * Don't need to import rxjs since angular modules
 * will require the necesary rxjs modules when bundling.
 * import 'rxjs/Rx';
 */
import {__moduleExports as primengExports} from 'primeng/primeng';
import './index.css';

export default {
  primengExports,
  ngAnimations,
  ngCommon,
  ngCommonHttp,
  ngCompiler,
  ngCore,
  ngForms,
  ngPlatformBrowser,
  ngPlatformBrowserAnimations,
  ngPlatformBrowserDynamic,
  ngRouter
};
