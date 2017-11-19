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

var html = "<div>Este será el módulo para la gestión global de UTs</div>\r\n";

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
      // TODO: determine when to reset breadcrumbService
      // this._breadcrumbService.removeItems(1);
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

var html$1 = "<form class=\"vertical\" #frm=\"ngForm\" (ngSubmit)=\"frm.valid && onGuardar()\">\n  <div class=\"ui-g\">\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n    Código\n  </div>\n  <div class=\"ui-g-3 ui-md-2 ui-lg-1\">\n    <input id=\"disabled-input\" type=\"text\" size= \"4\" pInputText [(ngModel)]= \"model.IdUT\" name=\"codigo\" #codigoCtrl=\"ngModel\" [disabled]=\"true\" />\n  </div>\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n    Nombre\n  </div>\n  <div class=\"ui-g-20 ui-md-10 ui-lg-5\">\n    <input id=\"input\" type=\"text\" size=\"50\" pInputText [(ngModel)]=\"model.Nombre\" name=\"nombre\" #nombreCtrl=\"ngModel\" [disabled]= \"!editingMode\"> \n  </div>\n  <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n      <button *ngIf=\"!editingMode\" pButton type=\"button\" label=\"Editar\" (click)=\"onEditar()\"></button>\n      <button *ngIf=\"editingMode\" pButton type=\"submit\" label=\"Guardar\"></button>\n      <button *ngIf=\"editingMode\" pButton type=\"button\" label=\"Cancelar\" (click)=\"onCancelar()\"></button>\n  </div>\n</div>\n<div class=\"ui-g\">\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n        Producto\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <p-dropdown [options]=\"productosDisponibles\" [(ngModel)]=\"model.IdProducto\" name=\"producto\" #productoCtrl=\"ngModel\" optionLabel= \"IdProducto\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'250px'}\"></p-dropdown>\n    </div>\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n        Sprint\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <p-dropdown [options]=\"sprintsDisponibles\" [(ngModel)]=\"model.IdVersion\" name=\"sprint\" #sprintCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'200px'}\"></p-dropdown>\n    </div>\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n        Orden\n      </div>\n      <div class=\"ui-g-6 ui-md-4 ui-lg-2\">\n        <input id=\"input\" type=\"number\" size=\"4\" pInputText [(ngModel)]=\"model.Orden\" name=\"orden\" #ordenCtrl=\"ngModel\" [disabled]= \"!editingMode\"> \n    </div>\n</div>\n<div class=\"ui-g\">\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n      Workflow\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <p-dropdown [options]=\"workflowsDisponibles\" [(ngModel)]=\"model.IdWorkflow\" name=\"workflow\" #workflowCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'250px'}\"></p-dropdown>\n    </div>\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n        Tipo\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <p-dropdown [options]=\"tiposDisponibles\" [(ngModel)]=\"model.IdTipoUT\" name=\"tipo\" #tipoCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'200px'}\">\n          <ng-template let-tipoUT pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                <i [ngClass]=\"getUtTypeIcon(tipoUT.value)\"></i>\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{tipoUT.label}}</div>\n            </div>\n          </ng-template>\n        </p-dropdown>\n      </div>\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n        Proyecto\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n          <p-dropdown [options]=\"proyectosDisponibles\" [(ngModel)]=\"model.IdProyecto\" name=\"proyecto\" #proyectoCtrl=\"ngModel\" [disabled]= \"!editingMode\" filter=\"true\" [style]=\"{'width':'250px'}\"></p-dropdown>\n    </div>\n</div>\n<div class=\"ui-g\">\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\n        Descripción\n      </div>\n      <div class=\"ui-g-30 ui-md-20 ui-lg-10\">\n          <textarea rows=\"5\"  pInputTextarea  [(ngModel)]=\"model.Descripcion\" name=\"descripcion\" #descripcionCtrl=\"ngModel\" [disabled]= \"!editingMode\" cols=\"120\"></textarea>\n      </div>\n</div>\n</form>\n<ut-followup [utId]=\"model.IdUT\"></ut-followup>\n\n";

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

        //TODO: The service must return the UT modified. Meanwhile...
        _this.ut.UT.IdUT = _this.model.IdUT;
        _this.ut.UT.Nombre = _this.model.Nombre;
        _this.ut.UT.Orden = _this.model.Orden;
        _this.ut.UT.IdProducto = _this.model.IdProducto;
        _this.ut.UT.IdVersion = _this.model.IdVersion;
        _this.ut.UT.IdWorkflow = _this.model.IdWorkflow;
        _this.ut.UT.IdTipoUT = _this.model.IdTipoUT;
        _this.ut.UT.IdProyecto = _this.model.IdProyecto;
        _this.ut.UT.Descripcion = _this.model.Descripcion;
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

var GetProyectosService = (_dec$8 = core.Injectable(), _dec$8(_class$8 = function () {
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
}()) || _class$8);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetProyectosService);

var _dec$9;
var _class$9;

var GetSprintsProductoService = (_dec$9 = core.Injectable(), _dec$9(_class$9 = function () {
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
}()) || _class$9);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetSprintsProductoService);

var _dec$10;
var _class$10;

var GetTiposUTProductoService = (_dec$10 = core.Injectable(), _dec$10(_class$10 = function () {
  function GetTiposUTProductoService(http$$1) {
    classCallCheck(this, GetTiposUTProductoService);

    this._http = http$$1;
    this._url = 'TiposUT2';
  }

  createClass(GetTiposUTProductoService, [{
    key: 'get',
    value: function get$$1(idProducto) {
      return this._http.get(this._url + '/' + idProducto);
    }
  }]);
  return GetTiposUTProductoService;
}()) || _class$10);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetTiposUTProductoService);

var _dec$11;
var _class$11;

var GetWorkflowsService = (_dec$11 = core.Injectable(), _dec$11(_class$11 = function () {
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
}()) || _class$11);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetWorkflowsService);

var html$2 = "<form class=\"tn-ut__form vertical\">\r\n  <div class=\"horizontal\">\r\n    <div class=\"vertical seven tn-ut__form__section\">\r\n      <label>Nombre</label>\r\n      <input type=\"text\" size=\"30\" [(ngModel)]=\"ut.Nombre\" name=\"nombre\" pInputText>\r\n    </div>\r\n    <div class=\"vertical five tn-ut__form__section\">\r\n      <label>Sprint</label>\r\n      <p-dropdown [options]=\"sprints\" optionLabel=\"name\" [(ngModel)]=\"ut.IdVersion\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"sprint\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"horizontal\">\r\n    <div class=\"vertical five tn-ut__form__section\">\r\n      <label>Producto</label>\r\n      <p-dropdown [options]=\"productos\" optionLabel=\"name\" [(ngModel)]=\"ut.IdProducto\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"producto\" (onChange)=\"onProductChanged($event.value)\"></p-dropdown>\r\n    </div>\r\n    <div class=\"vertical three tn-ut__form__section\">\r\n      <label>Tipo</label>\r\n      <p-dropdown [options]=\"tiposUT\" optionLabel=\"name\" [(ngModel)]=\"ut.IdTipoUT\" [style]=\"{'width':'100%'}\" name=\"tipo\" filter=\"true\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"horizontal\">\r\n    <div class=\"vertical seven tn-ut__form__section\">\r\n      <label>Proyecto</label>\r\n      <p-dropdown [options]=\"proyectos\" optionLabel=\"name\" [(ngModel)]=\"ut.IdProyecto\" [style]=\"{'width':'100%'}\" name=\"idproyecto\" filter=\"true\"></p-dropdown>\r\n    </div>\r\n    <div class=\"vertical five tn-ut__form__section\">\r\n      <label>Workflow</label>\r\n      <p-dropdown [options]=\"workflows\" optionLabel=\"name\" [(ngModel)]=\"ut.IdWorkflow\" [style]=\"{'width':'100%'}\" name=\"idworkflow\" filter=\"true\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"horizontal tn-ut__form__section\">\r\n    <button pButton type=\"button\" label=\"Crear & Nueva\" [disabled]=\"isNombreEmpty()\" (click)=\"onCrearNuevaUTClick()\"></button>\r\n    <button pButton type=\"button\" label=\"Crear & Abrir\" [disabled]=\"isNombreEmpty()\" (click)=\"onCrearYAbrirUTClick()\"></button>\r\n  </div>\r\n</form>\r\n";

__$styleInject(".tn-ut__form{padding:16px}.tn-ut__form__section{padding:8px}.tn-ut__form__dropdown{width:100%}",undefined);

var _dec$5;
var _class$5;

var proyectosCache = [];
var sprintsCache = [];
var tiposUTCache = [];
var workflowsCache = [];

var NuevaUTComponent = (_dec$5 = core.Component({
  selector: 'tn-ut-nuevaut',
  template: html$2,
  providers: [CreateUTService, GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService, GetWorkflowsService]
}), _dec$5(_class$5 = function () {
  function NuevaUTComponent(createUTService, getProductosService, getProyectosService, getSprintsProductoService, getTiposUTService, getWorkflowsService, notificationsService) {
    classCallCheck(this, NuevaUTComponent);
    this.ut = {
      Nombre: null,
      IdVersion: null,
      IdProducto: null,
      IdWorkflow: null,
      IdTipoUT: null,
      IdProyecto: null
    };

    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._getWorkflowsService = getWorkflowsService;
    this._getTiposUTService = getTiposUTService;
    this._notificationService = notificationsService;
    this.productos = [];
    this.proyectos = [];
    this.sprints = [];
    this.tiposUT = [];
    this.workflows = [];
  }

  createClass(NuevaUTComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this._getProductos();
    }
  }, {
    key: '_getProductos',
    value: function _getProductos() {
      var _this = this;

      this._getProductosSubscription = this._getProductosService.get().subscribe(function (data) {
        _this.productos = _this._parseProductos(data);
        if (_this.productos.length > 0) {
          _this.ut.IdProducto = _this.productos[0].value;
          _this._getDatosProducto(_this.productos[0].value);
        }
      }, function (error) {
        return _this._notificationService.error('No se han podido obtener los productos', error);
      });
    }
  }, {
    key: '_parseProductos',
    value: function _parseProductos(productos) {
      return productos.map(function (prod) {
        return { label: '' + prod.Nombre, value: prod.IdProducto };
      });
    }
  }, {
    key: '_getDatosProducto',
    value: function _getDatosProducto(idProducto) {
      this.workflows = this._getWorkflows(idProducto);
      this.proyectos = this._getProyectos(idProducto);
      this.sprints = this._getSprints(idProducto);
      this.tiposUT = this._getTiposUT(idProducto);
    }
  }, {
    key: '_getWorkflows',
    value: function _getWorkflows(idProducto) {
      var _this2 = this;

      if (!workflowsCache[idProducto]) {
        this._getWorkflowsSubscription = this._getWorkflowsService.get(idProducto).subscribe(function (data) {
          workflowsCache[idProducto] = _this2._parseWorkflows(data);
          _this2.workflows = workflowsCache[idProducto];
          _this2.ut.IdVersion = _this2.workflows[0] ? _this2.workflows[0].value : null;
        });
      }
      return workflowsCache[idProducto];
    }
  }, {
    key: '_parseWorkflows',
    value: function _parseWorkflows(workflows) {
      return workflows.map(function (wf) {
        return { label: '' + wf.Nombre, value: wf.IdWorkflow };
      });
    }
  }, {
    key: '_getProyectos',
    value: function _getProyectos(idProducto) {
      var _this3 = this;

      if (!proyectosCache[idProducto]) {
        this._getProyectoSubscription = this._getProyectosService.get(idProducto).subscribe(function (data) {
          proyectosCache[idProducto] = _this3._parseProyectos(data);
          _this3.proyectos = proyectosCache[idProducto];
          _this3.ut.IdProyecto = _this3.proyectos[0] ? _this3.proyectos[0].value : null;
        }, function (error) {
          return _this3._notificationService.error('No se han podido obtener los proyectos del producto', error);
        });
      }
      return proyectosCache[idProducto];
    }
  }, {
    key: '_parseProyectos',
    value: function _parseProyectos(proyectos) {
      return proyectos.map(function (pr) {
        return { label: '' + pr.Nombre, value: pr.IdProyecto };
      });
    }
  }, {
    key: '_getTiposUT',
    value: function _getTiposUT(idProducto) {
      var _this4 = this;

      if (!tiposUTCache[idProducto]) {
        this._getTiposUTSubscription = this._getTiposUTService.get(idProducto).subscribe(function (data) {
          tiposUTCache[idProducto] = _this4._parseTiposUT(data);
          _this4.tiposUT = tiposUTCache[idProducto];
          _this4.ut.IdTipoUT = _this4.tiposUT[0] ? _this4.tiposUT[0].value : null;
        }, function (error) {
          return _this4._notificationService.error('No se han podido obtener los tipos de UT', error);
        });
      }
      return tiposUTCache[idProducto];
    }
  }, {
    key: '_parseTiposUT',
    value: function _parseTiposUT(tipos) {
      return tipos.map(function (t) {
        return { label: '' + t.Nombre, value: t.IdTipoUT };
      });
    }
  }, {
    key: '_getSprints',
    value: function _getSprints(idProducto) {
      var _this5 = this;

      if (!sprintsCache[idProducto]) {
        this._getSprintsSubscription = this._getSprintsService.get(idProducto).subscribe(function (data) {
          sprintsCache[idProducto] = _this5._parseSprints(data);
          _this5.sprints = sprintsCache[idProducto];
          _this5.ut.IdVersion = _this5.sprints[0] ? _this5.sprints[0].value : null;
        }, function (error) {
          _this5._notificationService.error('No se han podido obtener los Sprints del producto', error);
        });
      }
      return sprintsCache[idProducto];
    }
  }, {
    key: '_parseSprints',
    value: function _parseSprints(sprints) {
      return sprints.map(function (sp) {
        return { label: '' + sp.Nombre, value: sp.IdVersion };
      });
    }
  }, {
    key: 'onProductChanged',
    value: function onProductChanged(idNuevoProducto) {
      this._getDatosProducto(idNuevoProducto);
    }
  }, {
    key: 'onCrearNuevaUTClick',
    value: function onCrearNuevaUTClick() {
      var _this6 = this;

      this._crearUTSubscription = this._createUTService.put(this.ut).subscribe(function (data) {}, function (error) {
        _this6._notificationService.error('No se pudo crear la UT especficada', error);
      });
    }
  }, {
    key: 'onCrearYAbrirUTClick',
    value: function onCrearYAbrirUTClick() {
      var _this7 = this;

      this._crearUTSubscription = this._createUTService.put(this.ut).subscribe(function (data) {
        _this7.idUt = data;
        // TODO: Redirigir
      }, function (error) {
        _this7._notificationService.error('No se pudo crear la UT especficada', error);
      });
    }
  }, {
    key: 'isNombreEmpty',
    value: function isNombreEmpty() {
      return this.ut.Nombre == null || this.ut.Nombre.length === 0;
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._crearUTSubscription && !this._crearUTSubscription.closed && this._crearUTSubscription.unsubscribe();

      this._getProductosSubscription && !this._getProductosSubscription.closed && this._getProductosSubscription.unsubscribe();

      this._getProyectoSubscription && !this._getProyectoSubscription.closed && this._getProyectoSubscription.unsubscribe();

      this._getSprintsSubscription && !this._getSprintsSubscription.closed && this._getSprintsSubscription.unsubscribe();

      this._getTiposUTSubscription && !this._getTiposUTSubscription.closed && this._getTiposUTSubscription.unsubscribe();

      this._getWorkflowsSubscription && !this._getWorkflowsSubscription.closed && this._getWorkflowsSubscription.unsubscribe();
    }
  }]);
  return NuevaUTComponent;
}()) || _class$5);
Reflect.defineMetadata('design:paramtypes', [CreateUTService, GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService, GetWorkflowsService, core$1.NotificationsService], NuevaUTComponent);

var _dec$13;
var _class$13;

var FollowupsService = (_dec$13 = core.Injectable(), _dec$13(_class$13 = function () {
  function FollowupsService(http$$1) {
    classCallCheck(this, FollowupsService);

    this._http = http$$1;
  }

  createClass(FollowupsService, [{
    key: 'getSeguimientos',
    value: function getSeguimientos(idUt) {
      return this._http.get('UTs/' + idUt + '/Seguimientos');
    }
  }, {
    key: 'pausarSeguimiento',
    value: function pausarSeguimiento(idSeguimiento) {
      return this._http.post('FinalizarRegistroTiempo?idSeguimiento=' + idSeguimiento);
    }
  }, {
    key: 'empezarSeguimiento',
    value: function empezarSeguimiento(idSeguimiento) {
      return this._http.post('EmpezarRegistroTiempo?idSeguimiento=' + idSeguimiento);
    }
  }, {
    key: 'finalizarSeguimiento',
    value: function finalizarSeguimiento(idSeguimiento) {
      var adelante = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this._http.post('FinalizarSeguimiento?idSeguimiento=' + idSeguimiento + '&adelante=' + adelante);
    }
  }]);
  return FollowupsService;
}()) || _class$13);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], FollowupsService);

var html$3 = "<div class=\"vertical\">\n  <div class=\"horizontal tn-ut__followups__controls\">\n    <button pButton label=\"Iniciar\" (click)=\"iniciar()\" icon=\"fa fa-play-circle\" [disabled]=\"puedeFinalizar\" *ngIf=\"puedeIniciar() || !puedeFinalizar()\"></button>\n    <button pButton label=\"Continuar\" (click)=\"continuar()\" icon=\"fa fa-play-circle\" *ngIf=\"puedeContinuar()\"></button>\n    <button pButton label=\"Pausar\" (click)=\"pausar()\" icon=\"fa fa-pause-circle\" *ngIf=\"puedePausar()\"></button>    \n    <button pButton label=\"Finalizar\" (click)=\"finalizar()\" icon=\"fa fa-stop-circle\" [disabled]=\"!puedeFinalizar()\"></button>    \n    <button pButton label=\"Asignar Agente\" (click)=\"asignarAgente()\" icon=\"fa fa-user-plus\" [disabled]=\"true\"></button>        \n    <button pButton label=\"Trabajar en Paralelo\" (click)=\"trabajarEnParalelo()\" icon=\"fa fa-users\" [disabled]=\"true\"></button>            \n  </div>\n</div>\n";

__$styleInject("",undefined);

var _dec$12;
var _dec2;
var _class$12;
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

var FollowupsComponent = (_dec$12 = core.Component({
  selector: 'ut-followup',
  template: html$3,
  providers: [FollowupsService]
}), _dec2 = core.Input(), _dec$12(_class$12 = (_class2 = function () {
  function FollowupsComponent(followupsService) {
    var _this = this;

    classCallCheck(this, FollowupsComponent);

    _initDefineProp(this, 'utId', _descriptor, this);

    this.seguimientos = [];

    this.puedeIniciar = function () {
      return _this.seguimiento && _this.seguimiento.Estado === 'TO DO';
    };

    this.iniciar = function () {
      _this._followupsService.empezarSeguimiento(_this.idSeguimiento);
    };

    this.puedeContinuar = function () {
      return _this.seguimiento && _this.seguimiento.Estado === 'DOING';
    };

    this.continuar = function () {
      _this._followupsService.empezarSeguimiento(_this.idSeguimiento);
    };

    this.puedePausar = function () {
      return _this.seguimiento && _this.seguimiento.Estado === 'ACTIVE';
    };

    this.pausar = function () {
      _this._followupsService.pausarSeguimiento(_this.idSeguimiento);
    };

    this.puedeFinalizar = function () {
      return _this.seguimiento && _this.seguimiento.Estado !== 'DONE';
    };

    this.finalizar = function () {
      _this._followupsService.finalizarSeguimiento(_this.idSeguimiento);
    };

    this.asignarAgente = function () {
      // TODO
    };

    this.trabajarEnParalelo = function () {
      // TODO
    };

    this._followupsService = followupsService;
  }

  createClass(FollowupsComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this2 = this;

      this._getFollowupsSub = this._followupsService.getSeguimientos(this.utId).subscribe(function (data) {
        _this2.seguimientos = data;
      }, function (error) {
        // TODO
        console.error(error);
      });
    }
  }, {
    key: 'idSeguimiento',
    get: function get$$1() {
      return this.seguimientos[0].IdSeguimiento;
    }
  }, {
    key: 'seguimiento',
    get: function get$$1() {
      return this.seguimientos[0];
    }
  }]);
  return FollowupsComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'utId', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.utId;
  }
})), _class2)) || _class$12);
Reflect.defineMetadata('design:paramtypes', [FollowupsService], FollowupsComponent);

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
  declarations: [UtComponent, DetailsComponent, NuevaUTComponent, FollowupsComponent],
  providers: [DetailsService]
}), _dec(_class = function UtModule() {
  classCallCheck(this, UtModule);
}) || _class);

exports.UtModule = UtModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.ut.umd.js.map
