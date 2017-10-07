import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import {moduleName, ngPackages, ngGlobals} from '@tune-up/build-utils';
const pkg = require('./package.json');

export default {
    input: pkg['jsnext:main'],
    output: {
        file: pkg['main:min'],
        format: 'umd'
    },
    sourcemap: true,
    name: moduleName(pkg),
    external: ngPackages,
    globals: ngGlobals,
    plugins: [
        postcss({
            extract: 'dist/primeng.css'
        }),
        nodeResolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            exclude: [
                'node_modules/**'
            ]
        }),
        uglify({
            mangle:false
        })
    ]
};