(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('@tune-up/core'), require('@tune-up/app')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common/http', '@tune-up/core', '@tune-up/app'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.home = {}),global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.app,global.tuneUp.app));
}(this, (function (exports,core,router,http,core$1,app) { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _dec$3;
var _class$3;

var FilterService = (_dec$3 = core.Injectable(), _dec$3(_class$3 = function () {
  function FilterService() {
    classCallCheck(this, FilterService);
  }

  createClass(FilterService, [{
    key: 'filter',
    value: function filter(uts, filtro) {
      var filteredUts = uts.filter(function (ut) {
        var isActivity = filtro.IdActividad === 'ALL' || ut.IdActividad === filtro.IdActividad;
        var isAgente = filtro.IdAgente === 'ALL' || ut.IdAgente === filtro.IdAgente;
        var isProducto = filtro.IdProducto === 'ALL' || ut.IdProducto === filtro.IdProducto;
        var isVersion = filtro.IdVersion === 'ALL' || ut.IdVersion === filtro.IdVersion;
        var isProyecto = filtro.IdProyecto === 'ALL' || ut.IdProyecto === filtro.IdProyecto;
        return isActivity && isAgente && isProducto && isVersion && isProyecto;
      });
      return filteredUts;
    }
  }]);
  return FilterService;
}()) || _class$3);

var _dec$4;
var _class$4;

var UtListService = (_dec$4 = core.Injectable(), _dec$4(_class$4 = function () {
  function UtListService(http$$1) {
    classCallCheck(this, UtListService);

    this._http = http$$1;
    this._url = 'SeguimientosKanban';
  }

  createClass(UtListService, [{
    key: 'get',
    value: function get$$1() {
      var idActividad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';
      var idAgente = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ALL';
      var idProducto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ALL';
      var idVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ALL';
      var idProyecto = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ALL';

      return this._http.get(this._url + '?idActividad=' + idActividad + '&idAgente=' + idAgente + '&idProducto=' + idProducto + '&idVersion=' + idVersion + '&idProyecto=' + idProyecto);
    }
  }]);
  return UtListService;
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], UtListService);

var _dec$5;
var _class$5;

var AgentPicService = (_dec$5 = core.Injectable(), _dec$5(_class$5 = function () {
  function AgentPicService(http$$1) {
    classCallCheck(this, AgentPicService);

    this._http = http$$1;
    this._url = 'Agentes/Imagen';
  }

  createClass(AgentPicService, [{
    key: 'get',
    value: function get$$1(idAgente, idSitio) {
      return this._http.get(this._url + '/' + idAgente + '/' + idSitio, {
        responseType: 'blob'
      });
    }
  }]);
  return AgentPicService;
}()) || _class$5);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], AgentPicService);

var html = "<div class=\"tn-home vertical\">\n  <tn-ut-filter class=\"tn-home__utfilter\" [filtro]=\"globalFilter\" [filterUts]=\"filterUts\"></tn-ut-filter>\n  <div class=\"tn-home__kanban\">\n      <tn-kanban-resume class=\"tn-home__kanbanresume\" [filtro]=\"globalFilter\" [filterUts]=\"filterUts\"></tn-kanban-resume>\n      <tn-ut-list class=\"tn-home__utlist\" [uts]=\"utsToShow\"></tn-ut-list>\n  </div>\n</div>\n";

__$styleInject(".tn-home__utlist{margin:16px;text-align:center}@media (min-width:960px){.tn-home__utlist{width:65%}}.tn-home__kanbanresume{margin:16px}@media (min-width:960px){.tn-home__kanbanresume{width:35%}}.tn-home__utfilter{margin:16px}.tn-home{display:flex}.tn-home__kanban{display:flex;flex-direction:column}@media (min-width:960px){.tn-home__kanban{flex-direction:row}}",undefined);

var _dec$2;
var _class$2;

var HomeComponent = (_dec$2 = core.Component({
  selector: 'tn-home',
  template: html,
  providers: [UtListService, FilterService]
}), _dec$2(_class$2 = function () {
  function HomeComponent(filterService, utListService, notificationService) {
    var _this = this;

    classCallCheck(this, HomeComponent);
    this.allUts = [];
    this.utsToShow = [];
    this.globalFilter = {
      IdAgente: 'ALL',
      IdProducto: 'ALL',
      IdVersion: 'ALL',
      IdProyecto: 'ALL',
      IdActividad: 'ALL'
    };

    this.filterUts = function () {
      _this.utsToShow = _this._filterService.filter(_this.allUts, _this.globalFilter);
    };

    this._filterService = filterService;
    this._utListService = utListService;
    this._notificationsService = notificationService;
    this._getUts();
  }

  createClass(HomeComponent, [{
    key: '_getUts',
    value: function _getUts() {
      var _this2 = this;

      this._getUtsSubscription = this._utListService.get().subscribe(function (data) {
        _this2.allUts = data;
        _this2.utsToShow = data;
      }, function (error) {
        return _this2._notificationsService.error('No se pudieron obtener las UTs', error);
      });
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._getUtsSubscription && !this._getUtsSubscription.closed && this._getUtsSubscription.unsubscribe();
    }
  }]);
  return HomeComponent;
}()) || _class$2);
Reflect.defineMetadata('design:paramtypes', [FilterService, UtListService, core$1.NotificationsService], HomeComponent);

var _dec$1;
var _class$1;

var HomeRoutingModule = (_dec$1 = core.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: HomeComponent }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function HomeRoutingModule() {
  classCallCheck(this, HomeRoutingModule);
}) || _class$1);

var _dec$7;
var _class$7;

var KanbanActivitiesService = (_dec$7 = core.Injectable(), _dec$7(_class$7 = function () {
  function KanbanActivitiesService(http$$1) {
    classCallCheck(this, KanbanActivitiesService);

    this._http = http$$1;
    this._url = 'ActividadesKanban2';
  }

  createClass(KanbanActivitiesService, [{
    key: 'get',
    value: function get$$1() {
      var idActividad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';
      var idAgente = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ALL';
      var idProducto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ALL';
      var idVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ALL';
      var idProyecto = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ALL';

      return this._http.get(this._url + '?idActividad=' + idActividad + '&idAgente=' + idAgente + '&idProducto=' + idProducto + '&idVersion=' + idVersion + '&idProyecto=' + idProyecto);
    }
  }]);
  return KanbanActivitiesService;
}()) || _class$7);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], KanbanActivitiesService);

var html$1 = "<div class =\"horizontal\">\n    <p-dataTable [value]=\"kanbanActivities\" [responsive]=\"true\" selectionMode=\"single\" (onRowSelect)=\"filterKanbanActivies($event.data.IdActividad)\">\n        <p-column header=\"Actividad\" field=\"NombreActividad\"></p-column>       \n        <p-column header=\"To Do\" field=\"NumSeguimientosPendiente\" [style]=\"{'width':'20%'}\"></p-column>   \n        <p-column header=\"Doing\" field=\"NumSeguimientosProgreso\"  [style]=\"{'width':'20%'}\"></p-column>                \n    </p-dataTable>\n</div>\n";

__$styleInject(".tn-home-kanban_resume--span{overflow:auto;display:block;padding:0!important;margin:0}",undefined);

var _dec$6;
var _dec2;
var _dec3;
var _class$6;
var _class2;
var _descriptor;
var _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var KanbanResumeComponent = (_dec$6 = core.Component({
  selector: 'tn-kanban-resume',
  template: html$1,
  providers: [KanbanActivitiesService]
}), _dec2 = core.Input(), _dec3 = core.Input(), _dec$6(_class$6 = (_class2 = function () {
  function KanbanResumeComponent(activitiesService, notificationsService) {
    classCallCheck(this, KanbanResumeComponent);
    this.kanbanActivities = [];
    this.selectedActivity = undefined;

    _initDefineProp(this, 'filterUts', _descriptor, this);

    _initDefineProp(this, 'filtro', _descriptor2, this);

    this._activitiesService = activitiesService;
    this._notificationsService = notificationsService;
    this._getKanbanActivities();
  }

  createClass(KanbanResumeComponent, [{
    key: '_getKanbanActivities',
    value: function _getKanbanActivities() {
      var _this = this;

      this._getActivitiesSubscription = this._activitiesService.get().subscribe(function (data) {
        _this.kanbanActivities = data;
      }, function (error) {
        return _this._notificationsService.error('No se pudieron obtener las actividades del Kanban Resumido', error);
      });
    }
  }, {
    key: 'filterKanbanActivies',
    value: function filterKanbanActivies() {
      var idActivity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ALL';

      if (idActivity == -1) idActivity = 'ALL';
      this.filtro.IdActividad = idActivity;
      this.filterUts();
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._getActivitiesSubscription && !this._getActivitiesSubscription.closed && this._getActivitiesSubscription.unsubscribe();
    }
  }]);
  return KanbanResumeComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'filterUts', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.filterUts;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'filtro', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return this.filtro;
  }
})), _class2)) || _class$6);
Reflect.defineMetadata('design:paramtypes', [KanbanActivitiesService, core$1.NotificationsService], KanbanResumeComponent);

var html$2 = "<!-- TODO: add placeholders and make global filter work with strings in place of ids -->\n<div class=\"ui-widget-header none horizontal tn-home__utlist__searchbar\">\n  <i class=\"fa fa-search none tn_home__utlist__searchbar__icon\"></i>\n  <input #gb type=\"text\" pInputText size=\"50\" class=\"tn-home__utlist__searchbar__input\" placeholder=\"Búsqueda global\">\n</div>\n<p-dataTable [value]=\"uts\" [rows]=\"20\" [paginator]=\"true\" scrollable=\"true\" scrollHeight=\"250%\" [pageLinks]=\"5\" [sortMode]=\"multiple\" [globalFilter]=\"gb\" reorderableColumns=\"true\"\n  [responsive]=\"true\">\n  <p-column [style]=\"{'width':'10%'}\" field=\"Estado\" header=\"Estado\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <span class=\"ui-button-icon\" [ngClass]=\"getUtTypeIcon(ut)\"></span>\n      <span class=\"ui-button-icon\" [ngClass]=\"getStateIcon(ut)\"></span>\n    </ng-template>\n  </p-column>\n  <p-column [style]=\"{'width':'10%'}\" field=\"IdAgente\" header=\"Agente\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <img *ngIf=\"ut.IdAgente && ut.IdAgente !== -1\" class=\"tn-home__utlist__agent__pic\" [src]=\"getAgentPic(ut) | safeHtml\">\n      <i *ngIf=\"ut.IdAgente === -1\" class=\"fa fa-2x fa-users\"></i>\n    </ng-template>\n  </p-column>\n  <p-column [style]=\"{'width':'30%'}\" field=\"NombreProducto\" header=\"Producto/Servicio\" [sortable]=\"true\"></p-column>\n  <p-column [style]=\"{'width':'10%'}\" field=\"NombreVersion\" header=\"Sprint\" [sortable]=\"true\"></p-column>\n  <p-column [style]=\"{'width':'10%'}\" field=\"IdUT\" header=\"Código\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <a class=\"ui-cell-data\" [routerLink]=\"getUtLink(ut)\">{{ut.IdUT}}</a>\n    </ng-template>\n  </p-column>\n  <p-column [style]=\"{'width':'30%'}\" field=\"NombreUT\" header=\"Nombre\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n";

__$styleInject(".tn-home__utlist__searchbar{padding:16px;border-bottom:0}.tn_home__utlist__searchbar__icon{margin-top:4px;margin-right:8px}.tn-home__utlist__searchbar__input{width:100%}.tn-home__utlist__agent__pic{width:30px;height:30px}",undefined);

var _dec$8;
var _dec2$1;
var _class$8;
var _class2$1;
var _descriptor$1;

function _initDefineProp$1(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece'
};
var workflowIcons = {
  1: 'fa fa-arrow-up',
  2: 'fa fa-repeat',
  3: 'fa fa-cog',
  4: 'fa fa-undo',
  5: 'fa fa-refresh'
};
var agentPics = {};

var UtListComponent = (_dec$8 = core.Component({
  selector: 'tn-ut-list',
  template: html$2,
  providers: [AgentPicService]
}), _dec2$1 = core.Input(), _dec$8(_class$8 = (_class2$1 = function UtListComponent(agentPicService, notificationService, agentService) {
  var _this = this;

  classCallCheck(this, UtListComponent);

  _initDefineProp$1(this, 'uts', _descriptor$1, this);

  this.getAgentPic = function (ut) {
    var idAgente = ut.IdAgente;
    if (idAgente) {
      var idSitio = _this._agentService.getSiteId();
      if (!agentPics[idAgente]) {
        _this._agentPicService.get(idAgente, idSitio).subscribe(function (data) {
          agentPics[idAgente] = URL.createObjectURL(data);
        });
      }
      return agentPics[idAgente] || '';
    }
    return '';
  };

  this.getUtTypeIcon = function (ut) {
    return utTypesIcons[ut.IdTipoUT];
  };

  this.getStateIcon = function (ut) {
    return workflowIcons[ut.IdTipoSeguimiento];
  };

  this.getUtLink = function (ut) {
    return '/uts/' + ut.IdUT;
  };

  this._agentPicService = agentPicService;
  this._notificationsService = notificationService;
  this._agentService = agentService;
}, (_descriptor$1 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'uts', [_dec2$1], {
  enumerable: true,
  initializer: function initializer() {
    return this.uts;
  }
})), _class2$1)) || _class$8);
Reflect.defineMetadata('design:paramtypes', [AgentPicService, core$1.NotificationsService, core$1.AgentService], UtListComponent);

var _dec$10;
var _class$10;

var GetProductosService = (_dec$10 = core.Injectable(), _dec$10(_class$10 = function () {
  function GetProductosService(http$$1) {
    classCallCheck(this, GetProductosService);

    this._http = http$$1;
    this._url = 'Productos2';
  }

  createClass(GetProductosService, [{
    key: 'get',
    value: function get$$1() {
      return this._http.get('' + this._url);
    }
  }]);
  return GetProductosService;
}()) || _class$10);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetProductosService);

var _dec$11;
var _class$11;

var GetProyectosService = (_dec$11 = core.Injectable(), _dec$11(_class$11 = function () {
  function GetProyectosService(http$$1) {
    classCallCheck(this, GetProyectosService);

    this._http = http$$1;
    this._url = 'Productos';
  }

  createClass(GetProyectosService, [{
    key: 'get',
    value: function get$$1(idProducto) {
      return this._http.get(this._url + '/' + idProducto + '/Proyectos');
    }
  }]);
  return GetProyectosService;
}()) || _class$11);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetProyectosService);

var _dec$12;
var _class$12;

var GetSprintsProductoService = (_dec$12 = core.Injectable(), _dec$12(_class$12 = function () {
  function GetSprintsProductoService(http$$1) {
    classCallCheck(this, GetSprintsProductoService);

    this._http = http$$1;
    this._url = 'Sprints2';
  }

  createClass(GetSprintsProductoService, [{
    key: 'get',
    value: function get$$1(idProducto) {
      return this._http.get(this._url + '/' + idProducto);
    }
  }]);
  return GetSprintsProductoService;
}()) || _class$12);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetSprintsProductoService);

var _dec$13;
var _class$13;

var GetColaboradoresService = (_dec$13 = core.Injectable(), _dec$13(_class$13 = function () {
  function GetColaboradoresService(http$$1) {
    classCallCheck(this, GetColaboradoresService);

    this._http = http$$1;
    this._url = 'Agentes';
  }

  createClass(GetColaboradoresService, [{
    key: 'get',
    value: function get$$1(idAgente) {
      return this._http.get(this._url + '/' + idAgente + '/Colaboradores');
    }
  }]);
  return GetColaboradoresService;
}()) || _class$13);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetColaboradoresService);

var _dec$14;
var _class$14;

var GetColaboradoresProductoService = (_dec$14 = core.Injectable(), _dec$14(_class$14 = function () {
  function GetColaboradoresProductoService(http$$1) {
    classCallCheck(this, GetColaboradoresProductoService);

    this._http = http$$1;
    this._url = 'Productos';
  }

  createClass(GetColaboradoresProductoService, [{
    key: 'get',
    value: function get$$1(idProducto) {
      return this._http.get(this._url + '/' + idProducto + '/Agentes');
    }
  }]);
  return GetColaboradoresProductoService;
}()) || _class$14);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetColaboradoresProductoService);

var html$3 = "<form class=\"tn-home__form horizontal\">\n  <div class=\"vertical two tn-home__form__section\">\n    <label>Agente</label>\n    <p-dropdown [options]=\"agentes\" optionLabel=\"name\" [(ngModel)]=\"filtro.IdAgente\" [style]=\"{'width':'100%'}\" (onChange)=\"onFilterChange()\" filter=\"true\" name=\"agente\"></p-dropdown>\n  </div>\n  <div class=\"vertical two tn-home__form__section\">\n    <label>Producto</label>\n    <p-dropdown [options]=\"productos\" optionLabel=\"name\" [(ngModel)]=\"filtro.IdProducto\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"producto\" (onChange)=\"onProductChanged($event.value)\"></p-dropdown>\n  </div>\n  <div class=\"vertical two tn-home__form__section\">\n    <label>Sprint</label>\n    <p-dropdown [options]=\"sprints\" optionLabel=\"name\" [(ngModel)]=\"filtro.IdVersion\" [disabled]=\"noProductoSelected\" [style]=\"{'width':'100%'}\" (onChange)=\"onFilterChange()\" filter=\"true\" name=\"sprint\"></p-dropdown>\n  </div>\n  <div class=\"vertical two tn-home__form__section\">\n    <label>Proyecto</label>\n    <p-dropdown [options]=\"proyectos\" optionLabel=\"name\" [(ngModel)]=\"filtro.IdProyecto\" [disabled]=\"noProductoSelected\" [style]=\"{'width':'100%'}\" (onChange)=\"onFilterChange()\" filter=\"true\" name=\"proyecto\"></p-dropdown>\n  </div>\n  <div class=\"vertical one tn-home__form__section\">\n    <label>Ir a...</label>\n    <div class=\"horizontal\">\n      <input type=\"number\" pInputText [(ngModel)]=\"IdUT\" name=\"IdUT\"/>\n      <button pButton type=\"button\" class=\"tn-home__form__button\" label=\"Ir\" [disabled]=\"isIrAEmpty()\"  (click)=\"irAUT()\"></button>            \n    </div>\n  </div>\n</form>\n";

__$styleInject(".tn-home__form{padding:16px}.tn-home__form__section{padding:8px}.tn-home__form__dropdown{width:100%}.tn-home__form__input{width:25%}.tn-home__form__button{margin-left:8px}",undefined);

var _dec$9;
var _dec2$2;
var _dec3$1;
var _class$9;
var _class2$2;
var _descriptor$2;
var _descriptor2$1;

function _initDefineProp$2(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var proyectosCache = [];
var sprintsCache = [];
var agentesCache = [];

var UTFilterComponent = (_dec$9 = core.Component({
  selector: 'tn-ut-filter',
  template: html$3,
  providers: [GetColaboradoresService, GetColaboradoresProductoService, GetProductosService, GetProyectosService, GetSprintsProductoService]
}), _dec2$2 = core.Input(), _dec3$1 = core.Input(), _dec$9(_class$9 = (_class2$2 = function () {
  function UTFilterComponent(getColaboradoresService, getColaboradoresProductoService, getProductosService, getProyectosService, getSprintsProductoService, agentService, notificationsService, router$$1) {
    classCallCheck(this, UTFilterComponent);

    _initDefineProp$2(this, 'filterUts', _descriptor$2, this);

    _initDefineProp$2(this, 'filtro', _descriptor2$1, this);

    this.noProductoSelected = true;
    this.idUT = '';

    this._getColaboradoresService = getColaboradoresService;
    this._getColaboradoresProductoService = getColaboradoresProductoService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._agentService = agentService;
    this._notificationService = notificationsService;
    this._router = router$$1;
    this.agentes = [];
    this.productos = [];
    this.proyectos = [];
    this.sprints = [];
  }

  createClass(UTFilterComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this._getProductos();
      this._getColaboradores(this._agentService.getAgentId());
      this.proyectos = this.sprints = [{ label: 'ALL', value: 'ALL' }];
      this._seleccionarValoresPorDefecto();
    }
  }, {
    key: '_getProductos',
    value: function _getProductos() {
      var _this = this;

      this._getProductosSubscription = this._getProductosService.get().subscribe(function (data) {
        _this.productos = _this._parseProductos(data);
      }, function (error) {
        return _this._notificationService.error('No se han podido obtener los productos', error);
      });
    }
  }, {
    key: '_getDatosProducto',
    value: function _getDatosProducto(idProducto) {
      this.proyectos = this._getProyectos(idProducto);
      this.sprints = this._getSprints(idProducto);
      this.agentes = this._getColaboradores(this._agentService.getAgentId(), idProducto);
      this._seleccionarValoresPorDefecto();
    }
  }, {
    key: '_parseProductos',
    value: function _parseProductos(productos) {
      var productosMap = productos.map(function (prod) {
        return { label: '' + prod.Nombre, value: prod.IdProducto };
      });
      productosMap.push({ label: 'ALL', value: 'ALL' });
      return productosMap;
    }
  }, {
    key: '_getProyectos',
    value: function _getProyectos(idProducto) {
      var _this2 = this;

      if (!proyectosCache[idProducto]) {
        this._getProyectoSubscription = this._getProyectosService.get(idProducto).subscribe(function (data) {
          proyectosCache[idProducto] = _this2._parseProyectos(data);
          _this2.proyectos = proyectosCache[idProducto];
          _this2.filtro.IdProyecto = 'ALL';
        }, function (error) {
          return _this2._notificationService.error('No se han podido obtener los proyectos del producto', error);
        });
      }
      return proyectosCache[idProducto];
    }
  }, {
    key: '_parseProyectos',
    value: function _parseProyectos(proyectos) {
      var proyectosMap = proyectos.map(function (pr) {
        return { label: '' + pr.Nombre, value: pr.IdProyecto };
      });
      proyectosMap.push({ label: 'ALL', value: 'ALL' });
      proyectosMap.push({ label: '<Sin Proyecto>', value: 0 });
      return proyectosMap;
    }
  }, {
    key: '_getSprints',
    value: function _getSprints(idProducto) {
      var _this3 = this;

      if (!sprintsCache[idProducto]) {
        this._getSprintsSubscription = this._getSprintsService.get(idProducto).subscribe(function (data) {
          sprintsCache[idProducto] = _this3._parseSprints(data);
          _this3.sprints = sprintsCache[idProducto];
          _this3.filtro.IdVersion = 'ALL';
        }, function (error) {
          _this3._notificationService.error('No se han podido obtener los Sprints del producto', error);
        });
      }
      return sprintsCache[idProducto];
    }
  }, {
    key: '_parseSprints',
    value: function _parseSprints(sprints) {
      var sprintsMap = sprints.map(function (sprint) {
        if (sprint.IdVersion == -1) {
          return { label: 'Backlog', value: 0 }; // TODO: Refactor backend service.
        } else {
          return { label: sprint.Nombre, value: sprint.IdVersion };
        }
      });
      sprintsMap.push({ label: 'ALL', value: 'ALL' });
      return sprintsMap;
    }
  }, {
    key: '_getColaboradores',
    value: function _getColaboradores(idAgente) {
      var idProducto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ALL';

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
  }, {
    key: '_getColaboradoresSitio',
    value: function _getColaboradoresSitio(idAgente) {
      var _this4 = this;

      this._getColaboradoresSubscription = this._getColaboradoresService.get(idAgente).subscribe(function (data) {
        agentesCache['ALL'] = _this4._parseAgentes(data);
        _this4.agentes = agentesCache['ALL'];
        _this4.filtro.IdAgente = 'ALL';
      }, function (error) {
        return _this4._notificationService.error('No se han podido obtener los colaboradores del agente', error);
      });
    }
  }, {
    key: '_getColaboradoresProducto',
    value: function _getColaboradoresProducto(idProducto) {
      var _this5 = this;

      this._getColaboradoresProductoSubscription = this._getColaboradoresProductoService.get(idProducto).subscribe(function (data) {
        agentesCache[idProducto] = _this5._parseAgentes(data);
        _this5.agentes = agentesCache[idProducto];
        _this5.filtro.IdAgente = 'ALL';
      }, function (error) {
        return _this5._notificationService.error('No se han podido obtener los colaboradores del agente', error);
      });
    }
  }, {
    key: '_parseAgentes',
    value: function _parseAgentes(agentes) {
      var agentesMap = agentes.filter(function (ag) {
        return ag.Id != -1;
      }).map(function (ag) {
        return { label: '' + ag.Nombre, value: ag.Id };
      });
      agentesMap.push({ label: 'ALL', value: 'ALL' });
      return agentesMap;
    }
  }, {
    key: '_seleccionarValoresPorDefecto',
    value: function _seleccionarValoresPorDefecto() {
      this.filtro.IdAgente = 'ALL';
      this.filtro.IdProyecto = 'ALL';
      this.filtro.IdVersion = 'ALL';
    }
  }, {
    key: 'onProductChanged',
    value: function onProductChanged(idNuevoProducto) {
      if (idNuevoProducto != 'ALL') {
        this.noProductoSelected = false;
        this._getDatosProducto(idNuevoProducto);
      } else {
        this.noProductoSelected = true;
      }
      this._seleccionarValoresPorDefecto();
      this.filterUts();
    }
  }, {
    key: 'onFilterChange',
    value: function onFilterChange() {
      this.filterUts();
    }
  }, {
    key: 'isIrAEmpty',
    value: function isIrAEmpty() {
      return this.idUT === null || this.IdUT <= 0;
    }
  }, {
    key: 'irAUT',
    value: function irAUT() {
      this._router.navigateByUrl('/uts/' + this.IdUT);
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._getColaboradoresSubscription && !this._getColaboradoresSubscription.closed && this._getColaboradoresSubscription.unsubscribe();

      this._getColaboradoresProductoSubscription && !this._getColaboradoresProductoSubscription.closed && this._getColaboradoresProductoSubscription.unsubscribe();

      this._getProductosSubscription && !this._getProductosSubscription.closed && this._getProductosSubscription.unsubscribe();

      this._getProyectoSubscription && !this._getProyectoSubscription.closed && this._getProyectoSubscription.unsubscribe();

      this._getSprintsSubscription && !this._getSprintsSubscription.closed && this._getSprintsSubscription.unsubscribe();
    }
  }]);
  return UTFilterComponent;
}(), (_descriptor$2 = _applyDecoratedDescriptor$2(_class2$2.prototype, 'filterUts', [_dec2$2], {
  enumerable: true,
  initializer: function initializer() {
    return this.filterUts;
  }
}), _descriptor2$1 = _applyDecoratedDescriptor$2(_class2$2.prototype, 'filtro', [_dec3$1], {
  enumerable: true,
  initializer: function initializer() {
    return this.filtro;
  }
})), _class2$2)) || _class$9);
Reflect.defineMetadata('design:paramtypes', [GetColaboradoresService, GetColaboradoresProductoService, GetProductosService, GetProyectosService, GetSprintsProductoService, app.AgentService, core$1.NotificationsService, router.Router], UTFilterComponent);

var _dec;
var _class;

var HomeModule = (_dec = core.NgModule({
  imports: [core$1.TuneUpCoreModule, HomeRoutingModule],
  declarations: [HomeComponent, KanbanResumeComponent, UtListComponent, UTFilterComponent]
}), _dec(_class = function HomeModule() {
  classCallCheck(this, HomeModule);
}) || _class);

exports.HomeModule = HomeModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.home.umd.js.map
