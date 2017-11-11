import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SceneComponent} from './components';
import {AuthGuard} from './routing';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: SceneComponent,
        canActivate: [AuthGuard],
        // register lazy-load routes
        children: [
          {
            path: 'home',
            loadChildren:
            `src/app/modules/home/dist/tune-up.home.umd.js#home#HomeModule`,
          }, {
            path: 'uts',
            loadChildren:
            'src/app/modules/ut/dist/tune-up.ut.umd.js#ut#UtModule',
          },
          {
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'login',
        loadChildren:
        'src/app/modules/login/dist/tune-up.login.umd.js#login#LoginModule',
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
      {
        useHash: true,
        enableTracing: ENVIRONMENT !== 'production',
      }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
