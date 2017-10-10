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

var ngGlobals = {
  '@angular/common': 'tuneUp.vendor.ngCommon',
  '@angular/common/http': 'tuneUp.vendor.ngCommonHttp',
  '@angular/platform-browser': 'tuneUp.vendor.ngPlatformBrowser',
  '@angular/platform-browser/animations': 'tuneUp.vendor.ngPlatformBrowserAnimations',
  '@angular/platform-browser-dynamic': 'tuneUp.vendor.ngPlatformBrowserDynamic',
  '@angular/router': 'tuneUp.vendor.ngRouter',
  '@angular/compiler': 'tuneUp.vendor.ngCompiler',
  '@angular/core': 'tuneUp.vendor.ngCore',
  '@angular/forms': 'tuneUp.vendor.ngForms',
  '@angular/animations': 'tuneUp.vendor.ngAnimations'
};
var ngPackages = Object.keys(ngGlobals);

var primengGlobals = {
  'primeng/primeng': 'tuneUp.vendor.primengExports'
};
var primengPackages = Object.keys(primengGlobals);

var vendorGlobals = {
  '@tune-up/vendor': 'tuneUp.vendor'
};
var vendorPackages = Object.keys(vendorGlobals);

var appGlobals = Object.assign({}, ngGlobals, primengGlobals, vendorGlobals);
var appExternal = Object.keys(appGlobals);

var coreGlobals = {
  '@tune-up/core': 'tuneUp.app'
};
var corePackages = Object.keys(coreGlobals);

var globals = Object.assign(appGlobals, coreGlobals);
var external = Object.keys(globals);

exports.moduleName = moduleName;
exports.ngGlobals = ngGlobals;
exports.ngPackages = ngPackages;
exports.primengGlobals = primengGlobals;
exports.primengPackages = primengPackages;
exports.vendorGlobals = vendorGlobals;
exports.vendorPackages = vendorPackages;
exports.appGlobals = appGlobals;
exports.appExternal = appExternal;
exports.coreGlobals = coreGlobals;
exports.corePackages = corePackages;
exports.globals = globals;
exports.external = external;
