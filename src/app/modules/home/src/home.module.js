import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InputTextModule} from 'primeng/primeng';
import {HomeComponent} from './home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: HomeComponent}
        ]),
        InputTextModule
    ],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule {}