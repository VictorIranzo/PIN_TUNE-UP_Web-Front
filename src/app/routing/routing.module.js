import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './guards';
import {configService} from '@tune-up/core';

// TODO: move this to app.routing and register routes manually
@NgModule({
  imports: [
    RouterModule.forRoot(configService.getRouteObjects(), {
      useHash: true,
      enableTracing: ENVIRONMENT !== 'production',
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class RoutingModule {}
