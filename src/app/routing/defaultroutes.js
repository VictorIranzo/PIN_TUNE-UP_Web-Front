import {AppComponent} from '../../app.component';
import {AuthGuard} from './guards';

const mainRoute = {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
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

