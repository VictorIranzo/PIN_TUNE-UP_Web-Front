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

export const vendorGlobals = {
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
export const appGlobals = {
  '@tune-up/core': 'tuneUp.app',
  '@tune-up/app': 'tuneUp.app'
}
export const globals = Object.assign(
  {},
  vendorGlobals,
  appGlobals
);
