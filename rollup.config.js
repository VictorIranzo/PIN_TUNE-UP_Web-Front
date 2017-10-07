import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import easyimport from 'postcss-easy-import';
import cssnano from 'cssnano';
import string from 'rollup-plugin-string';
import replace from 'rollup-plugin-replace';
import {moduleName, external, globals} from '@tune-up/build-utils';
const pkg = require('./package.json');

export default {
    input: pkg['jsnext:main'],
    output: {
        file: pkg['main:min'],
        format: 'umd'
    },
    sourcemap: true,
    name: moduleName(pkg),
    external,
    globals,
    plugins: [
        replace({
            exclude: 'node_modules/**',
            ENVIRONMENT: JSON.stringify('production')
        }),
        postcss({
            // preprocessor: sassPreprocesor, dont need for the moment
            plugins: [
                easyimport({
                    from: 'src/styles/styleguide'
                }),
                cssnext(),
                cssnano()
            ]
        }),
        string({
            include: '**/*.html'
        }),
        nodeResolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            exclude: [
                'node_modules/**'
            ]
        }),
        uglify()
    ]
};