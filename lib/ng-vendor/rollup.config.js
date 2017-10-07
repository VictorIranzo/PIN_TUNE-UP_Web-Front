import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {moduleName} from '@tune-up/build-utils';
const pkg = require('./package.json');

export default {
    input: pkg['jsnext:main'],
    output: {
        file: pkg['main:min'],
        format: 'umd'
    },
    sourcemap: true,
    exports: 'named', // let rollup know that we are exporting several things
    name: moduleName(pkg),
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
        uglify({
            mangle:false
        })
    ]
};