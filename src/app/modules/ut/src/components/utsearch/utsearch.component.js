import {Component} from '@angular/core';

import {UtSearchService, ActivitiesService} from './services';
import {BreadcrumbService} from '@tune-up/app';
import {GetProductosService, GetProyectosService, GetSprintsProductoService,
        GetTiposUTProductoService} from '../nuevaut';
import {NotificationsService} from '@tune-up/core';

import html from './utsearch.component.html';
import './utsearch.component.css';

const utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece',
};

const estados = [
  {label: 'ALL', value: 0},
  {label: 'Sólo UTs terminadas', value: 1},
  {label: 'Sólo UTs NO terminadas', value: 2},
];

const proyectosCache = [];
const sprintsCache = [];
const tiposUTCache = [];
const actividades = [];

@Component({
  selector: 'tn-ut-search',
  template: html,
  providers: [UtSearchService, ActivitiesService],
})
export class UtSearchComponent {
  model = {NombreUT: '', IdProducto: undefined, IdSprint: undefined,
           IdProyecto: undefined, IdTipoUT: undefined, Estado: undefined};
  selectableFields = false;
  uts = undefined;

  constructor(breadcrumbService: BreadcrumbService,
              utSearchService: UtSearchService,
              activitiesService: ActivitiesService,
              getProductosService: GetProductosService,
              getProyectosService: GetProyectosService,
              getSprintsProductoService: GetSprintsProductoService,
              getTiposUTProductoService: GetTiposUTProductoService,
              notificationsService: NotificationsService,
            ) {
    this._utSearchService = utSearchService;
    this._activitiesService = activitiesService;
    this._breadcrumbService = breadcrumbService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._getTiposUTService = getTiposUTProductoService;
    this._notificationsService = notificationsService;
  }

  ngOnInit() {
    this._getProductos();
    this._getActividades();
    this._parseEstados();
  }

  onSearch() {
    this._utSearchSubscription = this._utSearchService.search(this.model).subscribe(
      (data) => {
        // TODO: Update table.
        this.uts = data;
      },
      (error) => {
        this._notificationsService.error('Error al buscar', error);
      }
    );
  }

  _getProductos() {
    this._getProductosSubscription = this._getProductosService.get().subscribe(
      (data) => {
        this._parseProductos(data);
        this.model.IdProducto = 'ALL';
        this.clearFieldsAndPutAll();
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener los productos',
          error)
    );
  }

  productoChange() {
    if (this.model.IdProducto == 'ALL') {
      this.selectableFields = false;
      this.clearFieldsAndPutAll();
    } else {
      this.selectableFields = true;
      this._getProyectos(this.model.IdProducto);
      this._getSprints(this.model.IdProducto);
      this._getTiposUT(this.model.IdProducto);
      this.selectDefaultValues();
    }
  }

  clearFieldsAndPutAll() {
    // TODO: This cannot works at the init.
    this.proyectosDisponibles = [];
    this.proyectosDisponibles.push({label: 'ALL', value: 'ALL'});

    this.sprintsDisponibles = [];
    this.sprintsDisponibles.push({label: 'ALL', value: 'ALL'});

    this.tiposDisponibles = [];
    this.tiposDisponibles.push({label: 'ALL', value: 'ALL'});

    this.selectDefaultValues();
  }

  selectDefaultValues() {
    this.model.IdProyecto = 'ALL';
    this.model.IdSprint = 'ALL';
    this.model.IdTipoUT = 'ALL';
  }

  _parseProductos(productos) {
    this.productosDisponibles = productos.map((prod) => {
      return {label: `${prod.Nombre}`, value: prod.IdProducto};
    });
    this.productosDisponibles.push({label: 'ALL', value: 'ALL'});
  }

  _getProyectos(idProducto) {
    if (!proyectosCache[idProducto]) {
      this._getProyectoSubscription =
      this._getProyectosService.get(idProducto).subscribe(
        (data) => {
          this._parseProyectos(data);
          proyectosCache[idProducto] = this.proyectosDisponibles;
        },
        (error) =>
          this._notificationService.error(
            'No se han podido obtener los proyectos del producto', error)
      );
    } else {
      this.proyectosDisponibles = proyectosCache[idProducto];
    }
  }

  _parseProyectos(proyectos) {
    this.proyectosDisponibles = proyectos.map((proy) => {
      return {label: `${proy.Nombre}`, value: proy.IdProyecto};
    });
    this.proyectosDisponibles.push({label: '<Sin Proyecto>', value: 0});
    this.proyectosDisponibles.push({label: 'ALL', value: 'ALL'});
  }

  _getSprints(idProducto) {
    if (!sprintsCache[idProducto]) {
      this._getSprintsSubscription =
       this._getSprintsService.get(idProducto).subscribe(
        (data) => {
          this._parseSprints(data);
          sprintsCache[idProducto] = this.sprintsDisponibles;
        },
        (error) => {
          this._notificationService.error(
            'No se han podido obtener los Sprints del producto',
            error
          );
        }
      );
    } else {
      this.sprintsDisponibles = sprintsCache[idProducto];
    }
  }

  _parseSprints(sprints) {
    this.sprintsDisponibles = sprints.map((sprint) => {
      if (sprint.IdVersion === -1) {
        return {label: 'Backlog', value: 0}; // TODO: Refactor backend service.
      } else {
        return {label: sprint.Nombre, value: sprint.IdVersion};
      }
    });
    this.sprintsDisponibles.push({label: 'ALL', value: 'ALL'});
  }

  _getTiposUT(idProducto) {
    if (!tiposUTCache[idProducto]) {
      this._getTiposUTSubscription =
        this._getTiposUTService.get(idProducto).subscribe(
          (data) => {
            this._parseTiposUT(data);
            tiposUTCache[idProducto] = this.tiposDisponibles;
          },
          (error) =>
            this._notificationService.error(
              'No se han podido obtener los tipos de UT',
              error
        ));
    } else {
      this.tiposDisponibles = tiposUTCache[idProducto];
    }
  }

  _parseTiposUT(tipos) {
    this.tiposDisponibles = tipos.map((tipo) => {
      return {label: `${tipo.Nombre}`, value: tipo.IdTipoUT};
    });
    this.tiposDisponibles.push({label: 'ALL', value: 'ALL'});
  }

  _parseEstados() {
    this.estadosDisponibles = estados;
    this.model.Estado = 'ALL';
  }

  getUtTypeIcon = (tipo) => {
    return utTypesIcons[tipo];
  };

  getUtLink = (ut) => {
    return `/uts/${ut.IdUT}`;
  };

  _getActividades() {
    this._getActividadesSubscription = this._activitiesService.getActivities().subscribe(
      (data) => {
        data.map((actividad)=>{
            actividades[actividad.IdActividad] = actividad.Nombre;
        });
      },
      (error) =>
        this._notificationService.error(
          'No se han podido obtener las actividades',
          error)
    );
    actividades[0]='Terminar';
  }

  getActividad = (IdActividad) => {
    return actividades[IdActividad];
  };

  ngOnDestroy() {
    this._breadcrumbService.removeItems(1);

    this._utSearchSubscription &&
    !this._utSearchSubscription.closed &&
    this._utSearchSubscription.unsubscribe();

    this._getActividadesSubscription &&
    !this._getActividadesSubscription.closed &&
    this._getActividadesSubscription.unsubscribe();

    this._getProductosSubscription &&
      !this._getProductosSubscription.closed &&
      this._getProductosSubscription.unsubscribe();

    this._getProyectoSubscription &&
      !this._getProyectoSubscription.closed &&
      this._getProyectoSubscription.unsubscribe();

    this._getSprintsSubscription &&
      !this._getSprintsSubscription.closed &&
      this._getSprintsSubscription.unsubscribe();

    this._getTiposUTSubscription &&
      !this._getTiposUTSubscription.closed &&
      this._getTiposUTSubscription.unsubscribe();
  }
}
