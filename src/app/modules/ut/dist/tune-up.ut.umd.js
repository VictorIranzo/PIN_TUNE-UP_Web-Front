(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@tune-up/app'), require('@angular/common/http'), require('@tune-up/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@tune-up/app', '@angular/common/http', '@tune-up/core'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.ut = {}),global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.app,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.app));
}(this, (function (exports,core,router,app,http,core$1) { 'use strict';

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

var html = "<div>Este será el módulo para la gestión global de UTs</div>\n";

__$styleInject("",undefined);

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

var _dec$2;
var _class$2;

var UtComponent = (_dec$2 = core.Component({
  selector: 'tn-ut',
  template: html
}), _dec$2(_class$2 = function () {
  function UtComponent(breadcrumbService) {
    classCallCheck(this, UtComponent);

    this._breadcrumbService = breadcrumbService;
    this._breadcrumbService.addItems({ label: 'UTs', routerLink: '/uts' });
  }

  createClass(UtComponent, [{
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      // guarrada para que funcione ahora, hay que cambiar la estrategia del breadcrum
      if (window.location.hash.indexOf('home') === -1) {
        this._breadcrumbService.removeItems(1);
      }
    }
  }]);
  return UtComponent;
}()) || _class$2);
Reflect.defineMetadata('design:paramtypes', [app.BreadcrumbService], UtComponent);

var _dec$4;
var _class$4;

var DetailsService = (_dec$4 = core.Injectable(), _dec$4(_class$4 = function () {
  function DetailsService(http$$1) {
    classCallCheck(this, DetailsService);

    this._http = http$$1;
    this._urlUT = 'FichaUT2';
    this._urlProductos = 'Productos2';
    this._urlUTs = 'UTs2';
  }

  createClass(DetailsService, [{
    key: 'getUt',
    value: function getUt(id) {
      return this._http.get(this._urlUT + '/' + id);
    }
  }, {
    key: 'getProductosDisponibles',
    value: function getProductosDisponibles() {
      return this._http.get('' + this._urlProductos);
    }
  }, {
    key: 'submitChangesDetails',
    value: function submitChangesDetails(model) {
      return this._http.post(this._urlUTs, model);
    }
  }]);
  return DetailsService;
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], DetailsService);

var html$1 = "<form class=\"vertical\" #frm=\"ngForm\" (ngSubmit)=\"frm.valid && onGuardar()\">\r\n  <div class=\"ui-g\">\r\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n    Código\r\n  </div>\r\n  <div class=\"ui-g-3 ui-md-2 ui-lg-1\">\r\n    <input id=\"disabled-input\" type=\"text\" size= \"4\" pInputText [(ngModel)]= \"model.IdUT\" name=\"codigo\" #codigoCtrl=\"ngModel\" [disabled]=\"true\" />\r\n  </div>\r\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n    Nombre\r\n  </div>\r\n  <div class=\"ui-g-20 ui-md-10 ui-lg-5\">\r\n    <input id=\"input\" type=\"text\" size=\"50\" pInputText [(ngModel)]=\"model.Nombre\" name=\"nombre\" #nombreCtrl=\"ngModel\" [disabled]= \"!editingMode\"> \r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <button *ngIf=\"!editingMode\" pButton type=\"button\" label=\"Editar\" (click)=\"onEditar()\"></button>\r\n      <button *ngIf=\"editingMode\" pButton type=\"submit\" label=\"Guardar\"></button>\r\n      <button *ngIf=\"editingMode\" pButton type=\"button\" label=\"Cancelar\" (click)=\"onCancelar()\"></button>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Producto\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"productosDisponibles\" [(ngModel)]=\"model.IdProducto\" name=\"producto\" #productoCtrl=\"ngModel\" optionLabel= \"IdProducto\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Sprint\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"sprintsDisponibles\" [(ngModel)]=\"model.IdVersion\" name=\"sprint\" #sprintCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'200px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Orden\r\n      </div>\r\n      <div class=\"ui-g-6 ui-md-4 ui-lg-2\">\r\n        <input id=\"input\" type=\"text\" size=\"4\" pInputText [(ngModel)]=\"model.Orden\" name=\"orden\" #ordenCtrl=\"ngModel\" [disabled]= \"!editingMode\"> \r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n      Workflow\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"workflowsDisponibles\" [(ngModel)]=\"model.IdWorkflow\" name=\"workflow\" #workflowCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Tipo\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"tiposDisponibles\" [(ngModel)]=\"model.IdTipoUT\" name=\"tipo\" #tipoCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'200px'}\">\r\n          <ng-template let-tipoUT pTemplate=\"item\">\r\n            <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\r\n                <i [ngClass]=\"getUtTypeIcon(tipoUT.value)\"></i>\r\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{tipoUT.label}}</div>\r\n            </div>\r\n          </ng-template>\r\n        </p-dropdown>\r\n      </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Proyecto\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n          <p-dropdown [options]=\"proyectosDisponibles\" [(ngModel)]=\"model.IdProyecto\" name=\"proyecto\" #proyectoCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Descripción\r\n      </div>\r\n      <div class=\"ui-g-30 ui-md-20 ui-lg-10\">\r\n          <textarea rows=\"5\"  pInputTextarea  [(ngModel)]=\"model.Descripcion\" name=\"descripcion\" #descripcionCtrl=\"ngModel\" [disabled]= \"!editingMode\" cols=\"120\"></textarea>\r\n      </div>\r\n</div>\r\n</form>\r\n\r\n";

__$styleInject("",undefined);

var _dec$3;
var _class$3;

var utTypesIcons = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece'
};

var DetailsComponent = (_dec$3 = core.Component({
  selector: 'tn-ut-details',
  template: html$1
}), _dec$3(_class$3 = function () {

  // TODO: utiliza destructuring para que quede más claro, ej
  // const {Nombre, Orden} = data.UT; const {listaVersiones,...} = data

  function DetailsComponent(route, detailsService, notificationsService, breadcrumbService) {
    var _this = this;

    classCallCheck(this, DetailsComponent);
    this.editingMode = false;
    this.model = { IdUT: undefined, Nombre: undefined, Orden: undefined,
      IdProducto: undefined, IdVersion: undefined, IdWorkflow: undefined,
      IdTipoUT: undefined, IdProyecto: undefined, Descripcion: undefined };
    this.ut = this.ut;

    this.onGuardar = function () {
      _this._saveDetailsSubscription = _this._detailsService.submitChangesDetails(_this.model).subscribe(function (data) {
        _this.editingMode = false;
      }, function (error) {
        _this._notificationsService.error('Error al guardar los cambios', error);
      });
    };

    this.getUtTypeIcon = function (tipo) {
      return utTypesIcons[tipo];
    };

    this._route = route;
    this._detailsService = detailsService;
    this._notificationsService = notificationsService;
    this._breadcrumbService = breadcrumbService;

    this.model.IdUT = parseInt(this._route.params._value.id);
    this._breadcrumbService.addItems({ label: this.model.IdUT, routerLink: '/uts/' + this.model.IdUT });

    this._detailsService.getProductosDisponibles().subscribe(function (data) {
      _this._parseProductos(data);
    });

    this._detailsService.getUt(this.model.IdUT).subscribe(function (data) {
      _this.ut = data;
      _this.model.Nombre = data.UT.Nombre;
      _this.model.Orden = data.UT.Orden;
      _this._parseSprints(data.listaVersionesUT);
      _this._parseWorkflows(data.listaWorkflowsDisponibles);
      _this._parseTipos(data.listaTiposUT);
      _this._parseProyectos(data.listaProyectos);
      _this.model.Descripcion = data.UT.Descripcion;
      _this._mapSelected(data, _this.model);
    });
  }

  createClass(DetailsComponent, [{
    key: 'onEditar',
    value: function onEditar() {
      this.editingMode = true;
    }
  }, {
    key: 'onCancelar',
    value: function onCancelar() {
      this.editingMode = false;

      this.model.IdUT = this.ut.UT.IdUT;
      this.model.Nombre = this.ut.UT.Nombre;
      this.model.Orden = this.ut.UT.Orden;
      this.model.IdProducto = this.ut.UT.IdProducto;
      this.model.IdVersion = this.ut.UT.IdVersion;
      this.model.IdWorkflow = this.ut.UT.IdWorkflow;
      this.model.IdTipoUT = this.ut.UT.IdTipoUT;
      this.model.IdProyecto = this.ut.UT.IdProyecto;
      this.model.Descripcion = this.ut.UT.Descripcion;
    }
  }, {
    key: '_parseSprints',


    // TODO: var a = 'hola', label: a === label: `${a}`
    // las template strings solo valen si vas a escribir más.
    // TODO, en vez de almacenar todo esto en this, llama a las funciones desde el html y ya esta,
    // que solo se van a llamar una vez

    value: function _parseSprints(sprints) {
      this.sprintsDisponibles = sprints.map(function (sprint) {
        return { label: sprint.Nombre, value: sprint.IdVersion };
      });
      this.sprintsDisponibles.push({ label: 'Backlog', value: null });
    }
  }, {
    key: '_parseWorkflows',
    value: function _parseWorkflows(wfs) {
      this.workflowsDisponibles = wfs.map(function (wf) {
        return { label: '' + wf.Nombre, value: wf.IdWorkflow };
      });
    }
  }, {
    key: '_parseTipos',
    value: function _parseTipos(tipos) {
      this.tiposDisponibles = tipos.map(function (tipo) {
        return { label: '' + tipo.Nombre, value: tipo.IdTipoUT };
      });
    }
  }, {
    key: '_parseProyectos',
    value: function _parseProyectos(proyectos) {
      this.proyectosDisponibles = proyectos.map(function (proy) {
        return { label: '' + proy.Nombre, value: proy.IdProyecto };
      });
      this.proyectosDisponibles.push({ label: '<Sin Proyecto>', value: null });
    }
  }, {
    key: '_parseProductos',
    value: function _parseProductos(productos) {
      this.productosDisponibles = productos.map(function (prod) {
        return { label: '' + prod.Nombre, value: prod.IdProducto };
      });
    }
  }, {
    key: '_mapSelected',
    value: function _mapSelected(ut, model) {
      this.sprintsDisponibles.forEach(function (element) {
        if (element.value == ut.UT.IdVersion) model.IdVersion = element.value;
      });
      this.workflowsDisponibles.forEach(function (element) {
        if (element.value == ut.UT.IdWorkflow) model.IdWorkflow = element.value;
      });
      this.tiposDisponibles.forEach(function (element) {
        if (element.value == ut.UT.IdTipoUT) model.IdTipoUT = element.value;
      });
      this.proyectosDisponibles.forEach(function (element) {
        if (element.value == ut.UT.IdProyecto) model.IdProyecto = element.value;
      });
      this.productosDisponibles.forEach(function (element) {
        if (element.value == ut.UT.IdProducto) model.IdProducto = element.value;
      });
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._breadcrumbService.removeItems(1);

      this._saveDetailsSubscription && !this._saveDetailsSubscription.closed && this._saveDetailsSubscription.unsubscribe();

      this._getUtSub && !this._getUtSub.closed && this._getUtSub.unsubscribe();
    }
  }]);
  return DetailsComponent;
}()) || _class$3);
Reflect.defineMetadata('design:paramtypes', [router.ActivatedRoute, DetailsService, core$1.NotificationsService, app.BreadcrumbService], DetailsComponent);

var _dec$6;
var _class$6;

var CreateUTService = (_dec$6 = core.Injectable(), _dec$6(_class$6 = function () {
  function CreateUTService(http$$1) {
    classCallCheck(this, CreateUTService);

    this._http = http$$1;
    this._url = 'UTs/Crear';
  }

  createClass(CreateUTService, [{
    key: 'put',
    value: function put(newUT) {
      return this._http.put(this._url, newUT);
    }
  }]);
  return CreateUTService;
}()) || _class$6);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], CreateUTService);

var _dec$7;
var _class$7;

var GetProductosService = (_dec$7 = core.Injectable(), _dec$7(_class$7 = function () {
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
}()) || _class$7);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetProductosService);

var _dec$8;
var _class$8;

var GetWorkflowsService = (_dec$8 = core.Injectable(), _dec$8(_class$8 = function () {
  function GetWorkflowsService(http$$1) {
    classCallCheck(this, GetWorkflowsService);

    this._http = http$$1;
    this._url = 'Workflows';
  }

  createClass(GetWorkflowsService, [{
    key: 'get',
    value: function get$$1(idProducto) {
      return this._http.get(this._url + '/' + idProducto);
    }
  }]);
  return GetWorkflowsService;
}()) || _class$8);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetWorkflowsService);

var html$2 = "<div class=\"horizontal\">\r\n  <span class=\"ui-float-label\">\r\n    <input id=\"nombre-ut-textfield\" type=\"text\" size=\"30\" [(ngModel)]=\"ut.Nombre\" pInputText> \r\n    <label for=\"nombre-ut-textfield\">Nombre UT</label>\r\n  </span>\r\n  \r\n  <p-dropdown [options]=\"productos\" optionLabel=\"Nombre\" onchange=\"onProductChanged($event.value)\"></p-dropdown>\r\n  <p-dropdown [options]=\"workflows\" optionLabel=\"Nombre\"></p-dropdown>\r\n  \r\n</div>\r\n";

__$styleInject("",undefined);

var _dec$5;
var _class$5;

var NuevaUTComponent = (_dec$5 = core.Component({
  selector: 'tn-ut-nuevaut',
  template: html$2,
  providers: [CreateUTService, GetProductosService, GetWorkflowsService]
}), _dec$5(_class$5 = function () {
  function NuevaUTComponent(createUTService, getProductosService, getWorkflowsService, notificationsService) {
    classCallCheck(this, NuevaUTComponent);
    this.ut = {
      Nombre: null,
      IdVersion: null,
      Producto: null,
      Workflow: null,
      IdTipoUT: null,
      IdProyecto: null
    };
    this.productos = [];
    this.workflows = [];
    this.workflowsCache = [];

    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._getWorkflowsService = getWorkflowsService;
    this._notificationService = notificationsService;
    this._getProductos();
  }

  createClass(NuevaUTComponent, [{
    key: '_getProductos',
    value: function _getProductos() {
      var _this = this;

      this._getProductosSubscription = this._getProductosService.get().subscribe(function (data) {
        _this.productos = data;
      }, function (error) {
        return _this._notificationService.error('No se han podido obtener los productos', error);
      });
    }
  }, {
    key: 'onProductChanged',
    value: function onProductChanged(nuevoProducto) {
      this.workflows = _getWorkflows(nuevoProducto.IdProducto);
    }
  }, {
    key: '_getWorkflows',
    value: function _getWorkflows(idProducto) {
      var _this2 = this;

      if (!this.workflowsCache[idProducto]) {
        this.workflowsCache[idProducto] = _getWorkflowsService.get(idProducto).subscribe(function (data) {
          _this2.workflowsCache[idProducto] = data;
        });
      }
      return this.workflowsCache[idProducto];
    }
  }, {
    key: '_crearUT',
    value: function _crearUT() {
      var _this3 = this;

      idUT = 0;
      this.createUTService.put(this.ut).subscribe(function (data) {
        _this3.idUT = data.Resultado;
      }, function (error) {
        _this3._notificationService.error('No se pudo crear la UT especficada', error);
      });
      return idUT;
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._getProductosSubscription && !this._getProductosSubscription.closed && this._getProductosSubscription.unsubscribe();
    }
  }]);
  return NuevaUTComponent;
}()) || _class$5);
Reflect.defineMetadata('design:paramtypes', [CreateUTService, GetProductosService, GetWorkflowsService, core$1.NotificationsService], NuevaUTComponent);

var _dec$1;
var _class$1;

var UtRoutingModule = (_dec$1 = core.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: UtComponent }, { path: 'add', component: NuevaUTComponent }, { path: ':id', component: DetailsComponent }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function UtRoutingModule() {
  classCallCheck(this, UtRoutingModule);
}) || _class$1);

var _dec;
var _class;

var UtModule = (_dec = core.NgModule({
  imports: [core$1.TuneUpCoreModule, UtRoutingModule],
  declarations: [UtComponent, DetailsComponent, NuevaUTComponent],
  providers: [DetailsService]
}), _dec(_class = function UtModule() {
  classCallCheck(this, UtModule);
}) || _class);

exports.UtModule = UtModule;
exports.DetailsComponent = DetailsComponent;
exports.DetailsService = DetailsService;
exports.NuevaUTComponent = NuevaUTComponent;
exports.CreateUTService = CreateUTService;
exports.GetProductosService = GetProductosService;
exports.GetWorkflowsService = GetWorkflowsService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.ut.umd.js.map
