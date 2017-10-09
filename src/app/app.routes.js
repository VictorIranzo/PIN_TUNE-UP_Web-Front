// import {AuthGuard} from './guards';
// import {SceneComponent} from '../components';

const mainRoute = {
  path: '',
  // component: SceneComponent,
  // canActivate: [AuthGuard],
  // canActivateChild: [AuthGuard],
  // canLoadChildren: [AuthGuard],
  children: []
};
const mainRedirectRoute = {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
};
export default {
  mainRoute,
  mainRedirectRoute
};
