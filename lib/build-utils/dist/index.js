'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var moduleName = function moduleName(pkg) {
  var pkgName = pkg.name;
  function parseName(str) {
    return str.replace('@', '').replace('/', '.');
  }
  function dashToCammel(str) {
    var regexp = /-([a-z])/g;
    var capitalize = function capitalize(group) {
      return group[1].toUpperCase();
    };
    return str.replace(regexp, capitalize);
  }
  return dashToCammel(parseName(pkgName));
};

var vendorGlobals = {
  '@angular/common': 'tuneUp.vendor.ngCommon',
  '@angular/common/http': 'tuneUp.vendor.ngCommonHttp',
  '@angular/platform-browser': 'tuneUp.vendor.ngPlatformBrowser',
  '@angular/platform-browser/animations': 'tuneUp.vendor.ngPlatformBrowserAnimations',
  '@angular/platform-browser-dynamic': 'tuneUp.vendor.ngPlatformBrowserDynamic',
  '@angular/router': 'tuneUp.vendor.ngRouter',
  '@angular/compiler': 'tuneUp.vendor.ngCompiler',
  '@angular/core': 'tuneUp.vendor.ngCore',
  '@angular/forms': 'tuneUp.vendor.ngForms',
  '@angular/animations': 'tuneUp.vendor.ngAnimations',
  'primeng/primeng': 'tuneUp.vendor.primengExports',
  '@tune-up/vendor': 'tuneUp.vendor'
};
var appGlobals = {
  '@tune-up/core': 'tuneUp.app',
  '@tune-up/app': 'tuneUp.app'
};
var globals = Object.assign({}, vendorGlobals, appGlobals);

exports.moduleName = moduleName;
exports.vendorGlobals = vendorGlobals;
exports.appGlobals = appGlobals;
exports.globals = globals;
