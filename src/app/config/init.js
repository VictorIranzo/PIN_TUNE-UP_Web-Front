import {configService} from '@tune-up/core';
import appRoutes from '../app.routes';
import * as childRoutes from '../modules/config.routing';
import * as menuItems from '../modules/config.menu';
import {validations} from '../app.validations';
import {validators} from '../app.validators';

configService.init({
  routes: appRoutes,
  menuItems: Object.values(menuItems),
  validators,
  validations
});
configService.addRoutesWithAuth(Object.values(childRoutes));
