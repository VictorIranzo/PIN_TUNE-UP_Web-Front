'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// import sass from 'node-sass'; IF WE NEED SASS PREPROCESSOR

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

var ngPackages = ['@angular/common', '@angular/common/http', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/platform-browser-dynamic', '@angular/router', '@angular/compiler', '@angular/core', '@angular/forms', '@angular/animations'];

var ngGlobals = function () {
    var globals = {};
    var ngVendor = 'tuneUp.ngVendor';
    ngPackages.map(function (ngPackage) {
        return globals[ngPackage] = ngVendor;
    });
    return globals;
}();

var primengPackages = ['primeng/primeng'];
var primengGlobals = function () {
    var globals = {};
    var primengVendor = 'tuneUp.primengVendor.__moduleExports';
    primengPackages.map(function (primengPackage) {
        return globals[primengPackage] = primengVendor;
    });
    return globals;
}();

var globals = Object.assign({}, ngGlobals, primengGlobals);
var external = Object.keys(globals);

/*  --- UNCOMMENT IF WE NEED SASS PREPROCESSING ---
export const sassPreprocesor = function (content, id) {
    return new Promise((resolve, reject) => {
        const result = sass.render(
            {file: id},
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve({code: result.css.toString()})
            });
    });
}
*/

exports.moduleName = moduleName;
exports.ngPackages = ngPackages;
exports.ngGlobals = ngGlobals;
exports.primengPackages = primengPackages;
exports.primengGlobals = primengGlobals;
exports.globals = globals;
exports.external = external;
