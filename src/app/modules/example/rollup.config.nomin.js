/**
 * copy-paste in every new module
 */
import config from './rollup.config.js';
const pkg = require('./package.json');

config.plugins.pop(); // remove uglify
config.output = [
  {file: pkg.main, format: 'umd'},
  {file: pkg.module, format: 'es'}
];
export default config;
