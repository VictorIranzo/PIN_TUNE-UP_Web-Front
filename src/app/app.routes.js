import {AuthGuard} from './routing/guards';
import {SceneComponent} from './components';

// TODO: change route system, we define them here not throug config
const mainRoute = {
  path: '',
  component: SceneComponent,
  canActivate: [AuthGuard],
  children: [],
};
const mainRedirectRoute = {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full',
};
const loginRoute = {
  path: 'login',
  loadChildren: 'src/app/modules/login/dist/tune-up.login.umd.js#login#LoginModule',
};

export default {
  mainRoute,
  loginRoute,
  mainRedirectRoute,
};
