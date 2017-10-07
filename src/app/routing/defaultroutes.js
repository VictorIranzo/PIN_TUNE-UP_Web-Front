import {AuthGuard} from './guards';

const mainRoute = {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoadChildren: [AuthGuard],
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

