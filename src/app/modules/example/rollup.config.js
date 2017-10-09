/**
 * copy-paste in every new module inside modules folder
 * if not in modules folder relative paths will break
 */
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import easyimport from 'postcss-easy-import';
import cssnano from 'cssnano';
import string from 'rollup-plugin-string';
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
    postcss({
      plugins: [
        easyimport({
          path: '../../../styles'
        }),
        cssnext({
          features: {
            autoprefixer: false
          }
        }),
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
      exclude: ['node_modules/**']
    }),
    uglify({
      mangle: {
        keep_fnames: true
      },
      compress: {
        keep_fnames: true
      }
    })
  ]
};

// FOR COPY-PASTE
