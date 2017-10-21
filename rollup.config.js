import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import easyimport from 'postcss-easy-import';
import url from 'postcss-url';
import cssnano from 'cssnano';
import string from 'rollup-plugin-string';
import replace from 'rollup-plugin-replace';
import {moduleName, vendorGlobals} from '@tune-up/build-utils';
const pkg = require('./package.json');

export default {
  input: pkg['jsnext:main'],
  output: {
    file: pkg['main:min'],
    format: 'umd'
  },
  sourcemap: true,
  name: moduleName(pkg),
  external: Object.keys(vendorGlobals),
  globals: vendorGlobals,
  plugins: [
    replace({
      exclude: 'node_modules/**',
      ENVIRONMENT: JSON.stringify('production')
    }),
    postcss({
      plugins: [
        easyimport({
          path: 'src/styles'
        }),
        url({
          url: 'inline'
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
      include: 'node_modules/**',
      exclude: 'node_modules/@tune-up/**'
    }),
    babel({
      exclude: ['node_modules/**', '**/*.css']
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
