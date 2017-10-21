import {AuthGuard} from './routing/guards';
import {SceneComponent} from './components';

const min = ENVIRONMENT === 'production' ? '.min' : '';

const mainRoute = {
  path: '',
  component: SceneComponent,
  canActivate: [AuthGuard],
  children: []
};
const mainRedirectRoute = {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
};
const loginRoute = {
  path: 'login',
  loadChildren: `src/app/modules/login/dist/tune-up.login.umd${min}.js#login#LoginModule`
};

export default {
  mainRoute,
  loginRoute,
  mainRedirectRoute  
};
