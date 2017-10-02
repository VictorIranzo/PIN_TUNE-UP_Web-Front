import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import easyimport from 'postcss-easy-import';
import string from 'rollup-plugin-string';
import replace from 'rollup-plugin-replace';
import modulename from '@tune-up/modulename';
const pkg = require('./package.json');

const sassPreprocesor = function (content, id) {
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

const globals = {
    '@angular/core': 'tuneUp.ngVendor',
    '@angular/forms': 'tuneUp.ngVendor',
    '@angular/platform-browser-dynamic': 'tuneUp.ngVendor',
    '@angular/platform-browser': 'tuneUp.ngVendor',
    '@angular/platform-browser/animations': 'tuneUp.ngVendor'
};

export default {
    input: pkg['jsnext:main'],
    output: {
        file: pkg['main:min'],
        format: 'umd'
    },
    sourcemap: true,
    name: modulename(pkg),
    external: Object.keys(globals),
    globals,
    plugins: [
        replace({
            exclude: 'node_modules/**',
            ENVIRONMENT: JSON.stringify('production')
        }),
        postcss({
            preprocessor: sassPreprocesor,
            plugins: [
                easyimport(),
                cssnext()
                // TODO: add cssnano
            ],
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