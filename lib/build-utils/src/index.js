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
export const ngPackages = Object.keys(ngGlobals);

export const primengGlobals = {
  'primeng/primeng': 'tuneUp.vendor.primengExports',  
}
export const primengPackages = Object.keys(primengGlobals);

export const vendorGlobals = {
  '@tune-up/vendor': 'tuneUp.vendor'
};
export const vendorPackages = Object.keys(vendorGlobals);

export const appGlobals = Object.assign({},
  ngGlobals,
  primengGlobals,
  vendorGlobals
);
export const appExternal = Object.keys(appGlobals);

export const coreGlobals = {
  '@tune-up/core': 'tuneUp.app'
};
export const corePackages = Object.keys(coreGlobals);

export const globals = Object.assign(
  appGlobals,
  coreGlobals
);
export const external = Object.keys(globals);
