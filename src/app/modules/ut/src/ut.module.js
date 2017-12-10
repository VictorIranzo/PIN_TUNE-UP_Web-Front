import {NgModule} from '@angular/core';
import {UtRoutingModule} from './ut.routing';
import {UtComponent} from './ut.component';
import {TuneUpCoreModule} from '@tune-up/core';
import {DetailsComponent, DetailsService, NuevaUTComponent, FollowupsComponent, UtSearchComponent,
  GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService} from './components';

@NgModule({
  imports: [TuneUpCoreModule, UtRoutingModule],
  declarations: [
    UtComponent,
    DetailsComponent,
    NuevaUTComponent,
    FollowupsComponent,
    UtSearchComponent,
  ],
  providers: [
    DetailsService, // TODO: Move to the component if nobody uses it.
    GetProductosService,
    GetProyectosService,
    GetSprintsProductoService,
    GetTiposUTProductoService,
  ],
})
export class UtModule {}
