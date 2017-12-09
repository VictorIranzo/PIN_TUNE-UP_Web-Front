import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationsService} from '@tune-up/core';
import {AgentService} from '@tune-up/app';
import {GetColaboradoresService, GetColaboradoresProductoService, GetProductosService, GetProyectosService, GetSprintsProductoService} from './services';
import html from './utfilter.component.html';
import './utfilter.component.css';

const proyectosCache = [];
const sprintsCache = [];
const agentesCache = [];

@Component({
  selector: 'tn-ut-filter',
  template: html,
  providers: [
    GetColaboradoresService,
    GetColaboradoresProductoService,
    GetProductosService,
    GetProyectosService,
    GetSprintsProductoService,
  ],
})
export class UTFilterComponent {
  @Input() filterUts;
  @Input() filtro;

  noProductoSelected = true;
  idUT = '';
  constructor(
    getColaboradoresService : GetColaboradoresService,
    getColaboradoresProductoService : GetColaboradoresProductoService,
    getProductosService : GetProductosService,
    getProyectosService : GetProyectosService,
    getSprintsProductoService : GetSprintsProductoService,
    agentService : AgentService,
    notificationsService: NotificationsService,
    router : Router
  ) {
    this._getColaboradoresService = getColaboradoresService;
    this._getColaboradoresProductoService = getColaboradoresProductoService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._agentService = agentService;
    this._notificationService = notificationsService;
    this._router = router;
    this.agentes = [];
    this.productos = [];
    this.proyectos = [];
    this.sprints = [];
  }

  ngOnInit() {
    this._getProductos();
    this._getColaboradores(this._agentService.getAgentId());
    this.proyectos = this.sprints = [{label: 'ALL', value: 'ALL'}];
    this._seleccionarValoresPorDefecto();
  }

  _getProductos() {
    this._getProductosSubscription = this._getProductosService.get().subscribe(
      (data) => {
        this.productos = this._parseProductos(data);
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener los productos',
          error
        )
    );
  }

  _getDatosProducto(idProducto) {
    this.proyectos = this._getProyectos(idProducto);
    this.sprints = this._getSprints(idProducto);
    this.agentes = this._getColaboradores(this._agentService.getAgentId(), idProducto);
    this._seleccionarValoresPorDefecto();
  }
  _parseProductos(productos) {
    let productosMap = productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
    productosMap.push({label: 'ALL', value: 'ALL'});
    return productosMap;
  }

  _getProyectos(idProducto) {
    if (!proyectosCache[idProducto]) {
      this._getProyectoSubscription =
      this._getProyectosService.get(idProducto).subscribe(
        (data) => {
          proyectosCache[idProducto] = this._parseProyectos(data);
          this.proyectos = proyectosCache[idProducto];
          this.filtro.IdProyecto = 'ALL';
        },
        (error) =>
          this._notificationService.error(
            'No se han podido obtener los proyectos del producto',
          error
        ));
    }
    return proyectosCache[idProducto];
  }

  _parseProyectos(proyectos) {
    let proyectosMap = proyectos.map((pr) => {
        return {label: `${pr.Nombre}`, value: pr.IdProyecto};
      });
    proyectosMap.push({label: 'ALL', value: 'ALL'});
    proyectosMap.push({label: '<Sin Proyecto>', value: 0});
    return proyectosMap;
  }

  _getSprints(idProducto) {
    if (!sprintsCache[idProducto]) {
      this._getSprintsSubscription =
       this._getSprintsService.get(idProducto).subscribe(
        (data) => {
          sprintsCache[idProducto] = this._parseSprints(data);
          this.sprints = sprintsCache[idProducto];
          this.filtro.IdVersion = 'ALL';
        },
        (error) => {
          this._notificationService.error(
            'No se han podido obtener los Sprints del producto',
            error
          );
        }
      );
    }
    return sprintsCache[idProducto];
  }

  _parseSprints(sprints) {
    let sprintsMap = sprints.map((sprint) => {
      if (sprint.IdVersion == -1) {
        return {label: 'Backlog', value: 0}; // TODO: Refactor backend service.
      } else {
        return {label: sprint.Nombre, value: sprint.IdVersion};
      }
    });
    sprintsMap.push({label: 'ALL', value: 'ALL'});
    return sprintsMap;
  }

  _getColaboradores(idAgente, idProducto = 'ALL') {
    if (!agentesCache[idProducto]) {
      if (idProducto == 'ALL') {
        this._getColaboradoresSitio(idAgente);
      } else {
        this._getColaboradoresProducto(idProducto);
      }
    } else {
      return agentesCache[idProducto];
    }
  }

  _getColaboradoresSitio(idAgente) {
    this._getColaboradoresSubscription =
    this._getColaboradoresService.get(idAgente).subscribe(
      (data) => {
        agentesCache['ALL'] = this._parseAgentes(data);
        this.agentes = agentesCache['ALL'];
        this.filtro.IdAgente = 'ALL';
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener los colaboradores del agente',
        error
      ));
  }

  _getColaboradoresProducto(idProducto) {
    this._getColaboradoresProductoSubscription =
    this._getColaboradoresProductoService.get(idProducto).subscribe(
      (data) => {
        agentesCache[idProducto] = this._parseAgentes(data);
        this.agentes = agentesCache[idProducto];
        this.filtro.IdAgente = 'ALL';
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener los colaboradores del agente',
        error
      ));
  }

  _parseAgentes(agentes) {
    let agentesMap = agentes
                      .filter((ag) => ag.Id != -1)
                      .map((ag) => {
                        return {label: `${ag.Nombre}`, value: ag.Id};
                      });
    agentesMap.push({label: 'ALL', value: 'ALL'});
    return agentesMap;
  }

  _seleccionarValoresPorDefecto() {
    this.filtro.IdAgente = 'ALL';
    this.filtro.IdProyecto = 'ALL';
    this.filtro.IdVersion = 'ALL';
  }

  onProductChanged(idNuevoProducto) {
    if (idNuevoProducto != 'ALL') {
      this.noProductoSelected = false;
      this._getDatosProducto(idNuevoProducto);
    } else {
      this.noProductoSelected = true;
    }
    this._seleccionarValoresPorDefecto();
    this.filterUts();
  }

  onFilterChange() {
    this.filterUts();
  }

  isIrAEmpty() {
    return this.idUT === null || this.IdUT <= 0;
  }

  irAUT() {
    this._router.navigateByUrl(`/uts/${this.IdUT}`);
  }

  ngOnDestroy() {
    this._getColaboradoresSubscription &&
      !this._getColaboradoresSubscription.closed &&
      this._getColaboradoresSubscription.unsubscribe();

    this._getColaboradoresProductoSubscription &&
      !this._getColaboradoresProductoSubscription.closed &&
      this._getColaboradoresProductoSubscription.unsubscribe();

    this._getProductosSubscription &&
      !this._getProductosSubscription.closed &&
      this._getProductosSubscription.unsubscribe();

    this._getProyectoSubscription &&
      !this._getProyectoSubscription.closed &&
      this._getProyectoSubscription.unsubscribe();

    this._getSprintsSubscription &&
      !this._getSprintsSubscription.closed &&
      this._getSprintsSubscription.unsubscribe();
  }
}
