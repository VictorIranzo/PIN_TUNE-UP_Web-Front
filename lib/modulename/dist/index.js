'use strict';

var index = function (pkg) {
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

module.exports = index;
