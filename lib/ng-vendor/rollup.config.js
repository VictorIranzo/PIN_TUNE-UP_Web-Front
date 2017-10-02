import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import modulename from '@tune-up/modulename';
const pkg = require('./package.json');

export default {
    input: pkg['jsnext:main'],
    output: {
        file: pkg['main:min'],
        format: 'umd'
    },
    sourcemap: true,
    exports: 'named', // let rollup know that we are exporting several things
    name: modulename(pkg),
    onwarn: (warning) => {
        /**
         * There are several conflicting namespaces due to multiple angular modules
         * exporting the same variables, therefore we avoid loggin those warnings.
         */
        if (warning.code !== 'NAMESPACE_CONFLICT') {
            console.warn(warning.message);
        }
    },
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            exclude: [
                'node_modules/**',
            ]
        }),
        uglify()
    ]
};