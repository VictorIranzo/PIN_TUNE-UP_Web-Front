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
import {moduleName, globals} from '@tune-up/build-utils';
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'umd',
  },
  sourcemap: true,
  name: moduleName(pkg),
  external: Object.keys(globals),
  globals,
  watch: {
    chokidar: true,
  },
  plugins: [
    postcss({
      plugins: [
        easyimport({
          path: '../../../styles',
        }),
        url({
          url: 'inline',
        }),
        cssnext({
          features: {
            autoprefixer: false,
          },
        }),
        cssnano(),
      ],
    }),
    string({
      include: '**/*.html',
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: [
        'node_modules/**',
        '**/*.html',
        '**/*.css',
      ],
    }),
    uglify({
      mangle: {
        keep_fnames: true,
      },
      compress: {
        keep_fnames: true,
      },
    }),
  ],
};
