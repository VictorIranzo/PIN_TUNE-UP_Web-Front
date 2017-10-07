// import {SceneComponent} from '../components';
import {AuthGuard} from './guards';

const mainRoute = {
    path: '',
    // component: SceneComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    children: []
};
const mainRedirectRoute = {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
};
export const defaultRoutes = {
    mainRoute,
    mainRedirectRoute
};

