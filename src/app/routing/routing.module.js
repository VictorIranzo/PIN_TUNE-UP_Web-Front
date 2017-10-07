import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {configService} from '../config';
import {AuthGuard, AdminGuard} from './guards';

@NgModule({
    imports: [
        RouterModule.forRoot(
            configService.getRouteObjects(),
            {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}