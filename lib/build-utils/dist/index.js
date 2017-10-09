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
  '@angular/common': 'tuneUp.ngVendor.ngCommon',
  '@angular/common/http': 'tuneUp.ngVendor.ngCommonHttp',
  '@angular/platform-browser': 'tuneUp.ngVendor.ngPlatformBrowser',
  '@angular/platform-browser/animations': 'tuneUp.ngVendor.ngPlatformBrowserAnimations',
  '@angular/platform-browser-dynamic': 'tuneUp.ngVendor.ngPlatformBrowserDynamic',
  '@angular/router': 'tuneUp.ngVendor.ngRouter',
  '@angular/compiler': 'tuneUp.ngVendor.ngCompiler',
  '@angular/core': 'tuneUp.ngVendor.ngCore',
  '@angular/forms': 'tuneUp.ngVendor.ngForms',
  '@angular/animations': 'tuneUp.ngVendor.ngAnimations'
};
var ngPackages = Object.keys(ngGlobals);

var primengPackages = ['primeng/primeng'];
var primengGlobals = function () {
  var globals = {};
  var primengVendor = 'tuneUp.primengVendor.__moduleExports';
  primengPackages.map(function (primengPackage) {
    return globals[primengPackage] = primengVendor;
  });
  return globals;
}();

var appGlobals = Object.assign({}, ngGlobals, primengGlobals);
var appExternal = Object.keys(appGlobals);

var coreGlobals = {
  '@tune-up/core': 'tuneUp.app'
};
var coreExternal = Object.keys(coreGlobals);

var globals = Object.assign(appGlobals, coreGlobals);
var external = Object.keys(globals);

exports.moduleName = moduleName;
exports.ngGlobals = ngGlobals;
exports.ngPackages = ngPackages;
exports.primengPackages = primengPackages;
exports.primengGlobals = primengGlobals;
exports.appGlobals = appGlobals;
exports.appExternal = appExternal;
exports.coreGlobals = coreGlobals;
exports.coreExternal = coreExternal;
exports.globals = globals;
exports.external = external;
