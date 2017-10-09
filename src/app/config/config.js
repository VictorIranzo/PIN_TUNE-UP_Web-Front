import {configService} from '@tune-up/core';
import appRoutes from '../app.routes';
import * as childRoutes from '../modules/config.routing';
import * as menuItems from '../modules/config.menu';

configService.init({
  routes: appRoutes,
  menuItems: Object.values(menuItems)
});
configService.addRoutesWithAuth(Object.values(childRoutes));
