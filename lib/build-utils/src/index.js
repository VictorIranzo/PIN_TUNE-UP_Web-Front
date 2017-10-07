// import sass from 'node-sass'; IF WE NEED SASS PREPROCESSOR

export const moduleName = function (pkg) {
    const pkgName = pkg.name;
    function parseName(str) {
        return str.replace('@', '')
            .replace('/', '.');
    }
    function dashToCammel(str) {
        const regexp = /-([a-z])/g;
        const capitalize = function (group) {
            return group[1].toUpperCase();
        }
        return str.replace(regexp, capitalize);
    }
    return dashToCammel(
        parseName(pkgName)
    );
}

export const ngPackages = [
    '@angular/common',
    '@angular/common/http',
    '@angular/platform-browser',
    '@angular/platform-browser/animations',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/animations'
];

export const ngGlobals = (function () {
    const globals = {};
    const ngVendor = 'tuneUp.ngVendor';
    ngPackages.map((ngPackage) => globals[ngPackage] = ngVendor);
    return globals;
})();

export const primengPackages = [
    'primeng/primeng'
];
export const primengGlobals = (function (){
    const globals = {};
    const primengVendor = 'tuneUp.primengVendor.__moduleExports';
    primengPackages.map((primengPackage) => globals[primengPackage] = primengVendor);
    return globals;
})();

export const globals = Object.assign({},
    ngGlobals,
    primengGlobals,
);
export const external = Object.keys(globals);

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