import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home.routing';
import {HomeComponent} from './home.component';

@NgModule({
    imports: [
        HomeRoutingModule
    ],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule {}