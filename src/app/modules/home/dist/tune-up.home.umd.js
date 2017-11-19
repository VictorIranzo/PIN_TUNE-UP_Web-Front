(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('@tune-up/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common/http', '@tune-up/core'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.home = {}),global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.app));
}(this, (function (exports,core,router,http,core$1) { 'use strict';

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

// TODO: move to home

var UtListService = (_dec$3 = core.Injectable(), _dec$3(_class$3 = function () {
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
}()) || _class$3);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], UtListService);

var _dec$4;
var _class$4;

var AgentPicService = (_dec$4 = core.Injectable(), _dec$4(_class$4 = function () {
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
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], AgentPicService);

var html = "<div class=\"tn-home\">\r\n  <tn-kanban-resume class=\"tn-home__kanbanresume\" [filterUts]=\"filterUts\"></tn-kanban-resume>\r\n  <tn-ut-list class=\"tn-home__utlist\" [uts]=\"utsToShow\"></tn-ut-list>\r\n</div>\r\n";

__$styleInject(".tn-home__utlist{margin:16px;z-index:0;overflow-x:overlay;text-align:center}@media (min-width:960px){.tn-home__utlist{width:65%}}.tn-home__kanbanresume{margin:16px}@media (min-width:960px){.tn-home__kanbanresume{width:35%;height:fit-content;position:sticky;top:85px}}.tn-home{display:flex;flex-direction:column}@media (min-width:960px){.tn-home{flex-direction:row}}",undefined);

var _dec$2;
var _class$2;

var HomeComponent = (_dec$2 = core.Component({
  selector: 'tn-home',
  template: html,
  providers: [UtListService]
}), _dec$2(_class$2 = function () {
  function HomeComponent(utListService, notificationService) {
    var _this = this;

    classCallCheck(this, HomeComponent);
    this.allUts = [];
    this.utsToShow = [];

    this.filterUts = function (idActivity, status) {
      _this.utsToShow = _this.allUts.filter(function (ut) {
        return (idActivity === 'ALL' || ut.IdActividad === idActivity) && (status === 'ALL' || ut.Estado === status || ut.Estado === 'ACTIVE' && status === 'DOING');
      });
    };

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
Reflect.defineMetadata('design:paramtypes', [UtListService, core$1.NotificationsService], HomeComponent);

var _dec$1;
var _class$1;

var HomeRoutingModule = (_dec$1 = core.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: HomeComponent }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function HomeRoutingModule() {
  classCallCheck(this, HomeRoutingModule);
}) || _class$1);

var _dec$6;
var _class$6;

var KanbanActivitiesService = (_dec$6 = core.Injectable(), _dec$6(_class$6 = function () {
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
}()) || _class$6);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], KanbanActivitiesService);

var html$1 = "<!-- TODO: Change color on click -->\r\n<div class =\"horizontal\">\r\n    <p-dataTable [value]=\"kanbanActivities\" [responsive]=\"true\">\r\n        <p-column header=\"Actividad\">            \r\n                <ng-template let-activity=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"filterKanbanActivies(activity.IdActividad, 'ALL')\" class=\"tn-home-kanban_resume--span\">{{activity.NombreActividad}}</span>\r\n                </ng-template>\r\n            </p-column>       \r\n        <p-column header=\"To Do\" [style]=\"{'width':'20%'}\">            \r\n            <ng-template let-activity=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <span (click)=\"filterKanbanActivies(activity.IdActividad, 'TO DO')\" class=\"tn-home-kanban_resume--span\">{{activity.NumSeguimientosPendiente}}</span>\r\n            </ng-template>\r\n        </p-column>   \r\n        <p-column header=\"Doing\" [style]=\"{'width':'20%'}\">            \r\n            <ng-template let-activity=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\" >\r\n                <span (click)=\"filterKanbanActivies(activity.IdActividad, 'DOING')\" class=\"tn-home-kanban_resume--span\">{{activity.NumSeguimientosProgreso}}</span>\r\n            </ng-template>\r\n        </p-column>                \r\n    </p-dataTable>\r\n</div>\r\n";

__$styleInject(".tn-home-kanban_resume--span{overflow:auto;display:block;padding:0!important;margin:0}",undefined);

var _dec$5;
var _dec2;
var _class$5;
var _class2;
var _descriptor;

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

var KanbanResumeComponent = (_dec$5 = core.Component({
  selector: 'tn-kanban-resume',
  template: html$1,
  providers: [KanbanActivitiesService]
}), _dec2 = core.Input(), _dec$5(_class$5 = (_class2 = function () {
  function KanbanResumeComponent(activitiesService, notificationsService) {
    classCallCheck(this, KanbanResumeComponent);
    this.kanbanActivities = [];
    this.selectedActivity = undefined;

    _initDefineProp(this, 'filterUts', _descriptor, this);

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
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ALL';

      if (idActivity == -1) idActivity = 'ALL';
      this.filterUts(idActivity, status);
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
})), _class2)) || _class$5);
Reflect.defineMetadata('design:paramtypes', [KanbanActivitiesService, core$1.NotificationsService], KanbanResumeComponent);

var html$2 = "<!-- TODO: add placeholders and make global filter work with strings in place of ids -->\n<div class=\"ui-widget-header none horizontal tn-home__utlist__searchbar\">\n  <i class=\"fa fa-search none tn_home__utlist__searchbar__icon\"></i>\n  <input #gb type=\"text\" pInputText size=\"50\" class=\"tn-home__utlist__searchbar__input\" placeholder=\"Búsqueda global\">\n</div>\n<p-dataTable [value]=\"uts\" [rows]=\"20\" [paginator]=\"true\"  [pageLinks]=\"5\" [sortMode]=\"multiple\" [globalFilter]=\"gb\"\n  reorderableColumns=\"true\" [responsive]=\"true\">\n  <p-column [style]=\"{'width':'10%'}\" field=\"Estado\" header=\"Estado\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <span class=\"ui-button-icon\" [ngClass]=\"getUtTypeIcon(ut)\"></span>\n      <span class=\"ui-button-icon\" [ngClass]=\"getStateIcon(ut)\"></span>\n    </ng-template>\n  </p-column>\n  <p-column [style]=\"{'width':'10%'}\" field=\"IdAgente\" header=\"Agente\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <img *ngIf=\"ut.IdAgente && ut.IdAgente !== -1\" class=\"tn-home__utlist__agent__pic\" [src]=\"getAgentPic(ut) | safeHtml\">\n      <i *ngIf=\"ut.IdAgente === -1\" class=\"fa fa-2x fa-users\"></i>\n    </ng-template>\n  </p-column>\n  <p-column [style]=\"{'width':'30%'}\" field=\"NombreProducto\" header=\"Producto/Servicio\" [sortable]=\"true\"></p-column>\n  <p-column [style]=\"{'width':'10%'}\" field=\"NombreVersion\" header=\"Sprint\" [sortable]=\"true\"></p-column>\n  <p-column [style]=\"{'width':'10%'}\" field=\"IdUT\" header=\"Código\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <span class=\"ui-cell-data\" [routerLink]=\"getUtLink(ut)\">{{ut.IdUT}}</span>\n    </ng-template>\n  </p-column>\n  <p-column [style]=\"{'width':'30%'}\" field=\"NombreUT\" header=\"Nombre\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n";

__$styleInject(".tn-home__utlist__searchbar{padding:16px;border-bottom:0}.tn_home__utlist__searchbar__icon{margin-top:4px;margin-right:8px}.tn-home__utlist__searchbar__input{width:100%}.tn-home__utlist__agent__pic{width:30px;height:30px}",undefined);

var _dec$7;
var _dec2$1;
var _class$7;
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

// TODO: extract to a config file
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

var UtListComponent = (_dec$7 = core.Component({
  selector: 'tn-ut-list',
  template: html$2,
  providers: [AgentPicService]
}), _dec2$1 = core.Input(), _dec$7(_class$7 = (_class2$1 = function UtListComponent(agentPicService, notificationService, agentService) {
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
})), _class2$1)) || _class$7);
Reflect.defineMetadata('design:paramtypes', [AgentPicService, core$1.NotificationsService, core$1.AgentService], UtListComponent);

var _dec;
var _class;

var HomeModule = (_dec = core.NgModule({
  imports: [core$1.TuneUpCoreModule, HomeRoutingModule],
  declarations: [HomeComponent, KanbanResumeComponent, UtListComponent]
}), _dec(_class = function HomeModule() {
  classCallCheck(this, HomeModule);
}) || _class);

exports.HomeModule = HomeModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.home.umd.js.map
