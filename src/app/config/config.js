import {configService} from '@tune-up/core';
import appRoutes from '../app.routes';
import * as childRoutes from '../modules/config.routing';
import * as menuItems from '../modules/config.menu';
import {menuItemsMock} from './menu.items.mock';
// TODO: add menuItems manually
configService.init({
  routes: appRoutes,
  menuItems: [...Object.values(menuItems), ...menuItemsMock],
});
configService.addRoutesWithAuth(Object.values(childRoutes));
