import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import config from './rollup.config.js';

let plugins = config.plugins;
plugins.pop();
plugins[0] = replace({
  exclude: 'node_modules/**',
  ENVIRONMENT: JSON.stringify('development'),
});
// plugins.unshift(
//   serve({
//     contentBase: '',
//     port: 8080,
//   }),
//   livereload({
//     watch: ['dist', 'src/app/modules/**/dist/**'],
//   })
// );
export default config;
