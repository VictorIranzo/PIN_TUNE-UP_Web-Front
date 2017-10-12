/**
 * Route to lazy load the module, path is the url, without the /
 * loadChildren is the path from wher our server is running (index.html)
 * until the module file. The format is:
 *  'src/app/modules/MODULENAME/dist/tune-up.MODULENAME.umd[.min].js#MODULENAME#MODULENAMEModule'
 * you can load the min or nomin version, MODULENAMEModule is how you should call the NgModule
 * 
 * ADD THE EXPORTS TO modules/config.routing
 */
const min = ENVIRONMENT === 'production' ? '.min' : '';

export const homeRoute = {
  path: 'example',
  loadChildren:
    `src/app/modules/example/dist/tune-up.example.umd${min}.js#example#ExampleModule`
};
