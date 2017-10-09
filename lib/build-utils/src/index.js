export const moduleName = function(pkg) {
  const pkgName = pkg.name;
  function parseName(str) {
    return str.replace('@', '')
      .replace('/', '.');
  }
  function dashToCammel(str) {
    const regexp = /-([a-z])/g;
    const capitalize = function(group) {
      return group[1].toUpperCase();
    }
    return str.replace(regexp, capitalize);
  }
  return dashToCammel(
    parseName(pkgName)
  );
}

export const ngGlobals = {
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
export const ngPackages = Object.keys(ngGlobals);

export const primengPackages = [
  'primeng/primeng'
];
export const primengGlobals = (function() {
  const globals = {};
  const primengVendor = 'tuneUp.primengVendor.__moduleExports';
  primengPackages.map((primengPackage) => globals[primengPackage] = primengVendor);
  return globals;
})();

export const appGlobals = Object.assign({},
  ngGlobals,
  primengGlobals,
);
export const appExternal = Object.keys(appGlobals);

export const coreGlobals = {
  '@tune-up/core': 'tuneUp.app'
}
export const coreExternal = Object.keys(coreGlobals);

export const globals = Object.assign(
  appGlobals,
  coreGlobals
);
export const external = Object.keys(globals);
