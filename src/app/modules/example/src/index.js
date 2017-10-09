/**
 * The config has to be initialized before the module is loaded
 * or some angular components won't detect the new configuration.
 * If there is no config dont do it.
 * Always export * from './the.module';
 */
import './config';
export * from './example.module';
