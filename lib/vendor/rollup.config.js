import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import easyimport from 'postcss-easy-import';
import url from 'postcss-url';
import cssnano from 'cssnano';
import cssnext from 'postcss-cssnext';
import {moduleName} from '@tune-up/build-utils';
const pkg = require('./package.json');

export default {
  input: pkg['jsnext:main'],
  output: {
    file: pkg['main:min'],
    format: 'umd'
  },
  sourcemap: true,
  name: moduleName(pkg),
  plugins: [
    postcss({
      plugins: [
        easyimport(),
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
      mangle: {
        keep_fnames: true
      },
      compress: {
        keep_fnames: true
      }
    })
  ]
};
