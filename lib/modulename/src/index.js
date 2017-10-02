export default function (pkg) {
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