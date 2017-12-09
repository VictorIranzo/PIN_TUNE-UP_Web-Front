(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('@tune-up/core'), require('@tune-up/app')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common/http', '@tune-up/core', '@tune-up/app'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.ut = {}),global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.app,global.tuneUp.app));
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

var html = "<tn-ut-search></tn-ut-search>\n";

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
}), _dec$2(_class$2 = function UtComponent() {
  classCallCheck(this, UtComponent);
}) || _class$2);

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

var html$1 = "<p-accordion [multiple]=\"true\">\n  <p-accordionTab header=\"Detalles\" [selected]=\"true\">\n    <form class=\"tn-ut__form vertical\" #frm=\"ngForm\" (ngSubmit)=\"frm.valid && onGuardar()\">\n      <div class=\"horizontal tn-ut__form__row\">\n        <div class=\"vertical one tn-ut__form__section\">\n          <label>Código</label>\n          <input id=\"disabled-input\" type=\"text\" pInputText [(ngModel)]=\"model.IdUT\" name=\"codigo\" #codigoCtrl=\"ngModel\" [disabled]=\"true\"\n          />\n        </div>\n        <div class=\"vertical seven tn-ut__form__section\">\n          <label>Nombre</label>\n          <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"model.Nombre\" name=\"nombre\" #nombreCtrl=\"ngModel\" [disabled]=\"!editingMode\">\n        </div>\n        <div class=\"horizontal none tn-ut__form__buttons\">\n          <button *ngIf=\"!editingMode\" pButton type=\"button\" class=\"tn-ut__form__detail_button\" icon=\"fa fa-pencil-square-o\" label=\"Editar\" (click)=\"onEditar()\"></button>\n          <button *ngIf=\"editingMode\" pButton type=\"submit\" class=\"tn-ut__form__detail_button\" icon=\"fa fa-floppy-o\" label=\"Guardar\"></button>\n          <button *ngIf=\"editingMode\" pButton type=\"button\" class=\"tn-ut__form__detail_button\" icon=\"fa fa-times\" label=\"Cancelar\" (click)=\"onCancelar()\"></button>\n        </div>\n      </div>\n      <div class=\"horizontal tn-ut__form__row\">\n        <div class=\"vertical two tn-ut__form__section\">\n          <label>Producto</label>\n          <p-dropdown [options]=\"productosDisponibles\" [(ngModel)]=\"model.IdProducto\" name=\"producto\" #productoCtrl=\"ngModel\"\n            [disabled]=\"!editingMode\" filter=\"true\" [style]=\"{'width':'100%'}\"></p-dropdown>\n        </div>\n        <div class=\"vertical two tn-ut__form__section\">\n          <label>Sprint</label>\n          <p-dropdown [options]=\"sprintsDisponibles\" [(ngModel)]=\"model.IdVersion\" name=\"sprint\" #sprintCtrl=\"ngModel\" [disabled]=\"!editingMode\"\n            filter=\"true\" [style]=\"{'width':'100%'}\"></p-dropdown>\n        </div>\n        <div class=\"vertical none tn-ut__form__section\">\n          <label>Orden</label>\n          <p-spinner [step]=10 [min]=0 [(ngModel)]=\"model.Orden\" name=\"orden\" #ordenCtrl=\"ngModel\" [disabled]=\"!editingMode\"></p-spinner>\n        </div>\n      </div>\n      <div class=\"horizontal tn-ut__form__row\">\n        <div class=\"vertical five tn-ut__form__section\">\n          <label>Workflow</label>\n          <p-dropdown [options]=\"workflowsDisponibles\" [(ngModel)]=\"model.IdWorkflow\" name=\"workflow\" #workflowCtrl=\"ngModel\" [disabled]=\"!editingMode\"\n            filter=\"true\" [style]=\"{'width':'100%'}\"></p-dropdown>\n        </div>\n        <div class=\"vertical three tn-ut__form__section\">\n          <label>Tipo</label>\n          <p-dropdown [options]=\"tiposDisponibles\" [(ngModel)]=\"model.IdTipoUT\" name=\"tipo\" #tipoCtrl=\"ngModel\" [disabled]=\"!editingMode\"\n            filter=\"true\" [style]=\"{'width':'100%'}\">\n            <ng-template let-tipoUT pTemplate=\"item\">\n              <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                <i [ngClass]=\"getUtTypeIcon(tipoUT.value)\"></i>\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{tipoUT.label}}</div>\n              </div>\n            </ng-template>\n          </p-dropdown>\n        </div>\n        <div class=\"vertical five tn-ut__form__section\">\n          <label>Proyecto</label>\n          <p-dropdown [options]=\"proyectosDisponibles\" [(ngModel)]=\"model.IdProyecto\" name=\"proyecto\" #proyectoCtrl=\"ngModel\" [disabled]=\"!editingMode\"\n            filter=\"true\" [style]=\"{'width':'100%'}\"></p-dropdown>\n        </div>\n      </div>\n      <div class=\"vertical tn-ut__form__section tn-ut__form__row\">\n        <label>Descripción</label>\n        <textarea rows=\"5\" pInputTextarea [(ngModel)]=\"model.Descripcion\" name=\"descripcion\" #descripcionCtrl=\"ngModel\" [disabled]=\"!editingMode\"\n          [style]=\"{'width':'100%'}\"></textarea>\n      </div>\n    </form>\n  </p-accordionTab>\n  <p-accordionTab header=\"Actividades\" [selected]=\"true\">\n    <ut-followup [utId]=\"model.IdUT\" [productoId]=\"model.IdProducto\"></ut-followup>\n  </p-accordionTab>\n</p-accordion>\n";

__$styleInject(".tn-ut__form{padding:16px}.tn-ut__form__section{padding:8px}.tn-ut__form__buttons{padding:8px;align-items:flex-end}.tn-ut__form__detail_button{height:60%;text-align:center}.tn-ut__form__row{flex-wrap:wrap}",undefined);

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

  function DetailsComponent(route, router$$1, detailsService, notificationsService) {
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

        // TODO: The service must return the UT modified. Meanwhile...
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
    this._router = router$$1;
    this._detailsService = detailsService;
    this._notificationsService = notificationsService;

    this.model.IdUT = parseInt(this._route.params._value.id);

    this._getProductosDisponibles = this._detailsService.getProductosDisponibles().subscribe(function (data) {
      _this._parseProductos(data);
    });

    this._getUt = this._detailsService.getUt(this.model.IdUT).subscribe(function (data) {
      if (data.UT == undefined) {
        _this.showErrorAndBackHome();
      } else {
        _this.ut = data;
        _this.model.Nombre = data.UT.Nombre;
        _this.model.Orden = data.UT.Orden;
        _this._parseSprints(data.listaVersionesUT);
        _this._parseWorkflows(data.listaWorkflowsDisponibles);
        _this._parseTipos(data.listaTiposUT);
        _this._parseProyectos(data.listaProyectos);
        _this.model.Descripcion = data.UT.Definicion;
        _this._mapSelected(data, _this.model);
      }
    }, function (error) {
      _this.showErrorAndBackHome();
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
    key: 'showErrorAndBackHome',
    value: function showErrorAndBackHome() {
      this._notificationsService.error('Error al obtener la UT', 'UT no encontrada');
      this._router.navigateByUrl('/home');
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._saveDetailsSubscription && !this._saveDetailsSubscription.closed && this._saveDetailsSubscription.unsubscribe();

      this._getUtSub && !this._getUtSub.closed && this._getUtSub.unsubscribe();

      this._getProductosDisponibles && !this._getProductosDisponibles.closed && this._getProductosDisponibles.unsubscribe();

      this._getUt && !this._getUt.closed && this._getUt.unsubscribe();
    }
  }]);
  return DetailsComponent;
}()) || _class$3);
Reflect.defineMetadata('design:paramtypes', [router.ActivatedRoute, router.Router, DetailsService, core$1.NotificationsService], DetailsComponent);

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

var html$2 = "<form class=\"tn-ut__form vertical\">\n  <div class=\"horizontal\">\n    <div class=\"vertical seven tn-ut__form__section\">\n      <label>Nombre</label>\n      <input type=\"text\" size=\"30\" [(ngModel)]=\"ut.Nombre\" name=\"nombre\" pInputText>\n    </div>\n    <div class=\"vertical five tn-ut__form__section\">\n      <label>Sprint</label>\n      <p-dropdown [options]=\"sprints\" optionLabel=\"name\" [(ngModel)]=\"ut.IdVersion\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"sprint\"></p-dropdown>\n    </div>\n  </div>\n  <div class=\"horizontal\">\n    <div class=\"vertical five tn-ut__form__section\">\n      <label>Producto</label>\n      <p-dropdown [options]=\"productos\" optionLabel=\"name\" [(ngModel)]=\"ut.IdProducto\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"producto\" (onChange)=\"onProductChanged($event.value)\"></p-dropdown>\n    </div>\n    <div class=\"vertical three tn-ut__form__section\">\n      <label>Tipo</label>\n      <p-dropdown [options]=\"tiposUT\" optionLabel=\"name\" [(ngModel)]=\"ut.IdTipoUT\" [style]=\"{'width':'100%'}\" name=\"tipo\" filter=\"true\">\n          <ng-template let-tipoUT pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                <i [ngClass]=\"getUtTypeIcon(tipoUT.value)\"></i>\n                <div style=\"float:right;margin-top:4px\">{{tipoUT.label}}</div>\n            </div>\n          </ng-template>\n      </p-dropdown>\n    </div>\n  </div>\n  <div class=\"horizontal\">\n    <div class=\"vertical seven tn-ut__form__section\">\n      <label>Proyecto</label>\n      <p-dropdown [options]=\"proyectos\" optionLabel=\"name\" [(ngModel)]=\"ut.IdProyecto\" [style]=\"{'width':'100%'}\" name=\"idproyecto\" filter=\"true\"></p-dropdown>\n    </div>\n    <div class=\"vertical five tn-ut__form__section\">\n      <label>Workflow</label>\n      <p-dropdown [options]=\"workflows\" optionLabel=\"name\" [(ngModel)]=\"ut.IdWorkflow\" [style]=\"{'width':'100%'}\" name=\"idworkflow\" filter=\"true\"></p-dropdown>\n    </div>\n  </div>\n  <div class=\"horizontal tn-ut__form__section\">\n    <button pButton type=\"button\" label=\"Crear & Nueva\" icon=\"fa fa-refresh\" [disabled]=\"isNombreEmpty()\" (click)=\"onCrearNuevaUTClick()\"></button>\n    <button pButton type=\"button\" label=\"Crear & Abrir\" icon=\"fa fa-forward\" [disabled]=\"isNombreEmpty()\" (click)=\"onCrearYAbrirUTClick()\"></button>\n  </div>\n</form>\n";

__$styleInject(".tn-ut__form{padding:16px}.tn-ut__form__section{padding:8px}.tn-ut__form__dropdown{width:100%}",undefined);

var _dec$5;
var _class$5;

var proyectosCache = [];
var sprintsCache = [];
var tiposUTCache = [];
var workflowsCache = [];

var utTypesIcons$1 = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece'
};

var NuevaUTComponent = (_dec$5 = core.Component({
  selector: 'tn-ut-nuevaut',
  template: html$2,
  providers: [CreateUTService, GetWorkflowsService]
}), _dec$5(_class$5 = function () {
  function NuevaUTComponent(createUTService, getProductosService, getProyectosService, getSprintsProductoService, getTiposUTService, getWorkflowsService, notificationsService, router$$1) {
    classCallCheck(this, NuevaUTComponent);
    this.ut = {
      Nombre: null,
      IdVersion: null,
      IdProducto: null,
      IdWorkflow: null,
      IdTipoUT: null,
      IdProyecto: null
    };

    this.getUtTypeIcon = function (tipo) {
      return utTypesIcons$1[tipo];
    };

    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._getWorkflowsService = getWorkflowsService;
    this._getTiposUTService = getTiposUTService;
    this._notificationService = notificationsService;
    this._router = router$$1;
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

      this._seleccionarValoresPorDefecto();
    }
  }, {
    key: '_getWorkflows',
    value: function _getWorkflows(idProducto) {
      var _this2 = this;

      if (!workflowsCache[idProducto]) {
        this._getWorkflowsSubscription = this._getWorkflowsService.get(idProducto).subscribe(function (data) {
          workflowsCache[idProducto] = _this2._parseWorkflows(data);
          _this2.workflows = workflowsCache[idProducto];
          _this2.ut.IdWorkflow = _this2.workflows[0] ? _this2.workflows[0].value : null;
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
    key: '_seleccionarValoresPorDefecto',
    value: function _seleccionarValoresPorDefecto() {
      this.ut.IdWorkflow = this.workflows && this.workflows[0] ? this.workflows[0].value : null;
      this.ut.IdProyecto = this.proyectos && this.proyectos[0] ? this.proyectos[0].value : null;
      this.ut.IdVersion = this.IdVersion && this.sprints[0] ? this.sprints[0].value : null;
      this.ut.IdTipoUT = this.tiposUT && this.tiposUT[0] ? this.tiposUT[0].value : null;
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

      this._crearUTSubscription = this._createUTService.put(this.ut).subscribe(function (data) {
        _this6._notificationService.success('La UT se ha creado con exito', 'UT: ' + _this6.ut.Nombre);
        _this6._clearFields();
      }, function (error) {
        _this6._notificationService.error('No se pudo crear la UT especficada', error);
      });
    }
  }, {
    key: '_clearFields',
    value: function _clearFields() {
      this.ut.Nombre = '';
    }
  }, {
    key: 'onCrearYAbrirUTClick',
    value: function onCrearYAbrirUTClick() {
      var _this7 = this;

      this._crearUTSubscription = this._createUTService.put(this.ut).subscribe(function (data) {
        setTimeout(function () {
          this._redirect(data);
        }, 3000);
      }, function (error) {
        _this7._notificationService.error('No se pudo crear la UT especficada', error);
      });
    }
  }, {
    key: '_redirect',
    value: function _redirect(idUT) {
      this._router.navigateByUrl('/uts/' + idUT);
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
Reflect.defineMetadata('design:paramtypes', [CreateUTService, GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService, GetWorkflowsService, core$1.NotificationsService, router.Router], NuevaUTComponent);

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

      return this._http.post('FinalizarSeguimiento?idSeguimiento=' + idSeguimiento + '&adelante=' + adelante + '&avisarEmail=false');
    }
  }, {
    key: 'asignarAgente',
    value: function asignarAgente(idSeguimiento, idAgente) {
      return this._http.post('Seguimientos/' + idSeguimiento + '/AsignarAgente/' + idAgente);
    }
  }]);
  return FollowupsService;
}()) || _class$13);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], FollowupsService);

var _dec$14;
var _class$14;

var GetAgentesProductoService = (_dec$14 = core.Injectable(), _dec$14(_class$14 = function () {
  function GetAgentesProductoService(http$$1) {
    classCallCheck(this, GetAgentesProductoService);

    this._http = http$$1;
  }

  createClass(GetAgentesProductoService, [{
    key: 'getAgentes',
    value: function getAgentes(idProducto) {
      return this._http.get('Productos/' + idProducto + '/Agentes');
    }
  }]);
  return GetAgentesProductoService;
}()) || _class$14);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], GetAgentesProductoService);

var html$3 = "<div class=\"vertical tn-ut__followups\">\n  <div class=\"horizontal five tn-ut__followups__controls\">\n    <button pButton label=\"Iniciar\" icon=\"fa fa-play-circle\" [disabled]=\"true\" *ngIf=\"!puedeIniciar() && !puedeContinuar() && !puedePausar()\"></button>\n    <button pButton label=\"Iniciar\" (click)=\"iniciar()\" icon=\"fa fa-play-circle\" [disabled]=\"!isSameAgent()\" *ngIf=\"puedeIniciar()\"></button>\n    <button pButton label=\"Continuar\" (click)=\"continuar()\" icon=\"fa fa-play-circle\" [disabled]=\"!isSameAgent()\" *ngIf=\"puedeContinuar()\"></button>\n    <button pButton label=\"Pausar\" (click)=\"pausar()\" icon=\"fa fa-pause-circle\" [disabled]=\"!isSameAgent()\" *ngIf=\"puedePausar()\"></button>\n    <button pButton label=\"Finalizar\" (click)=\"finalizar()\" icon=\"fa fa-stop-circle\" [disabled]=\"!puedeFinalizar()\"></button>\n    <button pButton label=\"Asignar Agente\" (click)=\"asignarAgente()\" icon=\"fa fa-user-plus\" [disabled]=\"!puedeAsignarAgente()\"></button>\n    <button pButton label=\"Trabajar en Paralelo\" (click)=\"trabajarEnParalelo()\" icon=\"fa fa-users\" [disabled]=\"true\"></button>\n  </div>\n  <div class=\"horizontal tn-ut__followups__controls\" *ngIf=\"assigningAgent && puedeAsignarAgente()\">\n    <p-dropdown class=\"two tn-ut__followups__agentes\" [options]=\"agentesDisponibles\" [(ngModel)]=\"selectedAgent\" filter=\"true\" [style]=\"{'width':'100%'}\"></p-dropdown>        \n    <button pButton label=\"Aceptar\" (click)=\"aceptarAsignar()\"></button>\n    <button pButton label=\"Cancelar\" (click)=\"cancelarAsignar()\"></button>\n    <div class=\"five\"></div>\n  </div>\n  <p-dataTable [value]=\"seguimientos\" selectionMode=\"single\" [(selection)]=\"seguimientoSelected\">\n    <p-column field=\"Estado\" header=\"Estado\" [sortable]=\"true\" [style]=\"{'width':'15%'}\"></p-column>\n    <p-column field=\"NombreActividad\" header=\"Actividad\" [sortable]=\"true\" [style]=\"{'width':'25%'}\"></p-column>\n    <p-column field=\"NombreAgente\" header=\"Agente\" [sortable]=\"true\" [style]=\"{'width':'20%'}\" ></p-column>\n    <p-column field=\"FechaCreacion\" header=\"Generada\" [sortable]=\"true\" [style]=\"{'width':'20%'}\">\n      <ng-template let-activity=\"rowData\" pTemplate=\"body\">\n        <span class=\"ui-cell-data\">{{activity.FechaCreacion | amLocale:'es' | amDateFormat: 'DD-MM-YYYY HH:mm'}}</span>\n      </ng-template>\n    </p-column>\n    <p-column field=\"FechaFinalizacion\" header=\"Finalizada\" [sortable]=\"true\" [style]=\"{'width':'20%'}\">\n      <ng-template let-activity=\"rowData\" pTemplate=\"body\">\n        <span class=\"ui-cell-data\" *ngIf=\"activity.FechaFinalizacion\">{{activity.FechaFinalizacion | amLocale:'es' | amDateFormat: 'DD-MM-YYYY HH:mm'}}</span>\n      </ng-template>\n    </p-column>\n  </p-dataTable>\n</div>\n";

__$styleInject(".tn-ut__followups{padding:16px}.tn-ut__followups__controls{padding-bottom:8px}.tn-ut__followups__agentes{padding-right:8px}",undefined);

var _dec$12;
var _dec2;
var _dec3;
var _class$12;
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

var FollowupsComponent = (_dec$12 = core.Component({
  selector: 'ut-followup',
  template: html$3,
  providers: [FollowupsService, GetAgentesProductoService]
}), _dec2 = core.Input(), _dec3 = core.Input(), _dec$12(_class$12 = (_class2 = function () {
  function FollowupsComponent(followupsService, agentService, getAgentesProductoService) {
    var _this = this;

    classCallCheck(this, FollowupsComponent);

    _initDefineProp(this, 'utId', _descriptor, this);

    _initDefineProp(this, 'productoId', _descriptor2, this);

    this.seguimientoSelected = this.seguimientoSelected;
    this.assigningAgent = false;
    this.selectedAgent = this.selectedAgent;
    this.seguimientos = [];

    this.puedeIniciar = function () {
      return _this.seguimiento && _this.seguimiento.Estado === 'TO DO';
    };

    this.iniciar = function () {
      _this._followupsService.empezarSeguimiento(_this.idSeguimiento).subscribe(function (data) {
        _this.seguimiento.Estado = 'ACTIVE';
      }, function (error) {
        console.log(error);
      });
    };

    this.puedeContinuar = function () {
      return _this.seguimiento && _this.seguimiento.Estado === 'DOING';
    };

    this.continuar = function () {
      _this._followupsService.empezarSeguimiento(_this.idSeguimiento).subscribe(function (data) {
        _this.seguimiento.Estado = 'ACTIVE';
      }, function (error) {
        console.log(error);
      });
    };

    this.puedePausar = function () {
      return _this.seguimiento && _this.seguimiento.Estado === 'ACTIVE';
    };

    this.pausar = function () {
      _this._followupsService.pausarSeguimiento(_this.idSeguimiento).subscribe(function (data) {
        _this.seguimiento.Estado = 'DOING';
      }, function (error) {
        console.log(error);
      });
    };

    this.puedeFinalizar = function () {
      return _this.seguimiento && _this.seguimiento.Estado !== 'DONE';
    };

    this.finalizar = function () {
      _this._followupsService.finalizarSeguimiento(_this.idSeguimiento).subscribe(function (data) {
        _this._getFollowUps();
      }, function (error) {
        console.log(error);
      });
    };

    this.puedeAsignarAgente = function () {
      return _this.seguimiento && _this.seguimiento.IdAgente === null && _this.seguimiento.Estado === 'TO DO';
    };

    this.asignarAgente = function () {
      _this.assigningAgent = true;
      _this._getAgentes();
    };

    this.aceptarAsignar = function () {
      _this.assigningAgent = false;
      _this._followupsService.asignarAgente(_this.seguimiento.IdSeguimiento, _this.selectedAgent).subscribe(function (data) {
        // TODO: This can be replace to the invocation of getFollowUps
        _this.seguimiento.IdAgente = _this.selectedAgent;
        _this.seguimiento.NombreAgente = _this.agentesDisponibles.find(function (agente) {
          return agente.value === _this.selectedAgent;
        }).label;
      }, function (error) {
        console.log(error);
      });
    };

    this.cancelarAsignar = function () {
      _this.assigningAgent = false;
    };

    this.trabajarEnParalelo = function () {
      // TODO
    };

    this._followupsService = followupsService;
    this._agentService = agentService;
    this._getAgentesProductoService = getAgentesProductoService;
  }

  createClass(FollowupsComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this._getFollowUps();
    }
  }, {
    key: 'isSameAgent',
    value: function isSameAgent() {
      return this.seguimiento.IdAgente === this._agentService.getAgentId();
    }
  }, {
    key: '_getFollowUps',
    value: function _getFollowUps() {
      var _this2 = this;

      this._getFollowupsSub = this._followupsService.getSeguimientos(this.utId).subscribe(function (data) {
        _this2.seguimientos = data;
      }, function (error) {
        // TODO
        console.error(error);
      });
    }
  }, {
    key: '_getAgentes',
    value: function _getAgentes() {
      var _this3 = this;

      this._getAgentesSub = this._getAgentesProductoService.getAgentes(this.productoId).subscribe(function (data) {
        _this3.agentesDisponibles = data.map(function (agente) {
          return { label: agente.Nombre, value: agente.Id };
        });
        _this3.agentesDisponibles.shift(); // TODO: Refactor backend service.
      }, function (error) {
        // TODO
        console.error(error);
      });
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {

      this._getFollowupsSub && !this._getFollowupsSub.closed && this._getFollowupsSub.unsubscribe();

      this._getAgentesSub && !this._getAgentesSub.closed && this._getAgentesSub.unsubscribe();
    }
  }, {
    key: 'idSeguimiento',
    get: function get$$1() {
      return this.seguimientoSelected.IdSeguimiento;
    }
  }, {
    key: 'seguimiento',
    get: function get$$1() {
      return this.seguimientoSelected;
    }
  }]);
  return FollowupsComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'utId', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.utId;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'productoId', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return this.productoId;
  }
})), _class2)) || _class$12);
Reflect.defineMetadata('design:paramtypes', [FollowupsService, app.AgentService, GetAgentesProductoService], FollowupsComponent);

var _dec$16;
var _class$16;

var UtSearchService = (_dec$16 = core.Injectable(), _dec$16(_class$16 = function () {
  function UtSearchService(http$$1) {
    classCallCheck(this, UtSearchService);

    this._http = http$$1;
    this._urlSearch = '/UTs/Buscar';
  }

  createClass(UtSearchService, [{
    key: 'search',
    value: function search(model) {
      return this._http.get(this._urlSearch + '?nombreUT=' + model.NombreUT + '&idProducto=' + model.IdProducto + '&idSprint=' + model.IdSprint + '&idProyecto=' + model.IdProyecto + '&idTipo=' + model.IdTipoUT + '&estado=' + model.Estado);
    }
  }]);
  return UtSearchService;
}()) || _class$16);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], UtSearchService);

var _dec$17;
var _class$17;

var ActivitiesService = (_dec$17 = core.Injectable(), _dec$17(_class$17 = function () {
  function ActivitiesService(http$$1) {
    classCallCheck(this, ActivitiesService);

    this._http = http$$1;
    this._urlSearch = '/Actividades';
  }

  createClass(ActivitiesService, [{
    key: 'getActivities',
    value: function getActivities() {
      return this._http.get(this._urlSearch);
    }
  }]);
  return ActivitiesService;
}()) || _class$17);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], ActivitiesService);

var html$4 = "<div class=\"tn-ut__search\">\n  <div class=\"vertical six tn-ut__results\">\n    <div class=\"ui-widget-header none horizontal tn-search__utlist__searchbar\">\n      <i class=\"fa fa-search none tn_search__utlist__searchbar__icon\"></i>\n      <input #gb type=\"text\" pInputText size=\"50\" class=\"tn-search__utlist__searchbar__input\" placeholder=\"Búsqueda global\">\n    </div>\n      <p-dataTable [value]=\"uts\" [rows]=\"20\" [paginator]=\"true\"  [pageLinks]=\"5\" [sortMode]=\"multiple\" [globalFilter]=\"gb\"\n      reorderableColumns=\"true\" [responsive]=\"true\">\n        <p-column [style]=\"{'width':'5%', 'text-align':'center'}\" field=\"Tipo\" header=\"Tipo\" [sortable]=\"true\">\n          <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n            <span class=\"ui-button-icon\" [ngClass]=\"getUtTypeIcon(ut.IdTipoUT)\"></span>\n          </ng-template>\n        </p-column>\n        <p-column [style]=\"{'width':'10%', 'text-align':'center'}\" field=\"IdUT\" header=\"Código\" [sortable]=\"true\">\n          <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n            <a class=\"ui-cell-data\" [routerLink]=\"getUtLink(ut)\">{{ut.IdUT}}</a>\n          </ng-template>\n        </p-column>\n        <p-column [style]=\"{'width':'15%'}\" field=\"NombreProducto\" header=\"Producto\" [sortable]=\"true\"></p-column>\n        <p-column [style]=\"{'width':'20%'}\" field=\"NombreProyecto\" header=\"Proyecto\" [sortable]=\"true\"></p-column>\n        <p-column [style]=\"{'width':'10%'}\" field=\"NombreVersion\" header=\"Sprint\" [sortable]=\"true\"></p-column>\n        <p-column [style]=\"{'width':'25%'}\" field=\"NombreUT\" header=\"Nombre\" [sortable]=\"true\"></p-column>\n        <p-column [style]=\"{'width':'15%'}\" field=\"IdActividad\" header=\"Actividad actual\" [sortable]=\"true\">\n          <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n            <a>{{getActividad(ut.IdActividad)}}</a>\n          </ng-template>\n        </p-column>      \n      </p-dataTable>\n  </div>\n  <div class=\"vertical one tn-ut__fields\">\n    <div class=\"tn-ut__field\">\n      <label>Nombre UT</label>\n      <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"model.NombreUT\" style=\"width:100%\">\n    </div>\n    <div class=\"tn-ut__field\">\n      <label>Producto</label>\n      <p-dropdown [options]=\"productosDisponibles\" [(ngModel)]=\"model.IdProducto\" filter=\"true\" [style]=\"{'width':'100%'}\" (onChange)=\"productoChange()\"></p-dropdown>\n    </div>\n    <div class=\"tn-ut__field\">\n      <label>Proyecto</label>\n      <p-dropdown [options]=\"proyectosDisponibles\" [(ngModel)]=\"model.IdProyecto\" filter=\"true\" [disabled]=\"!selectableFields\" [style]=\"{'width':'100%'}\"></p-dropdown>\n    </div>\n    <div class=\"tn-ut__field\">  \n      <label>Sprint</label>\n      <p-dropdown [options]=\"sprintsDisponibles\" [(ngModel)]=\"model.IdSprint\" filter=\"true\" [disabled]=\"!selectableFields\" [style]=\"{'width':'100%'}\"></p-dropdown>\n    </div>\n    <div class=\"tn-ut__field\">  \n      <label>Tipo UT</label>\n      <p-dropdown [options]=\"tiposDisponibles\" [(ngModel)]=\"model.IdTipoUT\" filter=\"true\" [disabled]=\"!selectableFields\" [style]=\"{'width':'100%'}\">\n      <ng-template let-tipoUT pTemplate=\"item\">\n          <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n            <i [ngClass]=\"getUtTypeIcon(tipoUT.value)\"></i>\n            <div style=\"font-size:14px;float:right;margin-top:4px\">{{tipoUT.label}}</div>\n          </div>\n        </ng-template>\n    </p-dropdown>\n    </div>\n    <div class=\"tn-ut__field\">\n      <label>Estado</label>\n      <p-dropdown [options]=\"estadosDisponibles\" [(ngModel)]=\"model.Estado\" filter=\"true\" [style]=\"{'width':'100%'}\"></p-dropdown>\n    </div>\n    <button pButton type=\"button\" label=\"Buscar\" (click)=\"onSearch()\"></button>\n  </div>\n</div>\n";

__$styleInject(".tn-ut__search{display:flex;flex-direction:column-reverse}@media (min-width:960px){.tn-ut__search{flex-direction:row}}.tn-ut__fields{margin:16px}@media (min-width:960px){.tn-ut__fields{height:100%}}.tn-ut__field{padding:0 0 10px}@media (min-width:960px){.tn-ut__field{padding:0 0 20px}}.tn-ut__results{margin:16px}.tn-search__utlist__searchbar{padding:16px;border-bottom:0}.tn_search__utlist__searchbar__icon{margin-top:4px;margin-right:8px}.tn-search__utlist__searchbar__input{width:100%}",undefined);

var _dec$15;
var _class$15;

var utTypesIcons$2 = {
  1: 'fa fa-star',
  2: 'fa fa-bug',
  3: 'fa fa-plus-circle',
  4: 'fa fa-puzzle-piece'
};

var estados = [{ label: 'ALL', value: 0 }, { label: 'Sólo UTs terminadas', value: 1 }, { label: 'Sólo UTs NO terminadas', value: 2 }];

var proyectosCache$1 = [];
var sprintsCache$1 = [];
var tiposUTCache$1 = [];
var actividades = [];

var UtSearchComponent = (_dec$15 = core.Component({
  selector: 'tn-ut-search',
  template: html$4,
  providers: [UtSearchService, ActivitiesService]
}), _dec$15(_class$15 = function () {
  function UtSearchComponent(breadcrumbService, utSearchService, activitiesService, getProductosService, getProyectosService, getSprintsProductoService, getTiposUTProductoService, notificationsService) {
    classCallCheck(this, UtSearchComponent);
    this.model = { NombreUT: '', IdProducto: undefined, IdSprint: undefined,
      IdProyecto: undefined, IdTipoUT: undefined, Estado: undefined };
    this.selectableFields = false;
    this.uts = undefined;

    this.getUtTypeIcon = function (tipo) {
      return utTypesIcons$2[tipo];
    };

    this.getUtLink = function (ut) {
      return '/uts/' + ut.IdUT;
    };

    this.getActividad = function (IdActividad) {
      return actividades[IdActividad];
    };

    this._utSearchService = utSearchService;
    this._activitiesService = activitiesService;
    this._breadcrumbService = breadcrumbService;
    this._getProductosService = getProductosService;
    this._getProyectosService = getProyectosService;
    this._getSprintsService = getSprintsProductoService;
    this._getTiposUTService = getTiposUTProductoService;
    this._notificationsService = notificationsService;
  }

  createClass(UtSearchComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this._getProductos();
      this._getActividades();
      this._parseEstados();
    }
  }, {
    key: 'onSearch',
    value: function onSearch() {
      var _this = this;

      this._utSearchSubscription = this._utSearchService.search(this.model).subscribe(function (data) {
        // TODO: Update table.
        _this.uts = data;
      }, function (error) {
        _this._notificationsService.error('Error al buscar', error);
      });
    }
  }, {
    key: '_getProductos',
    value: function _getProductos() {
      var _this2 = this;

      this._getProductosSubscription = this._getProductosService.get().subscribe(function (data) {
        _this2._parseProductos(data);
        _this2.model.IdProducto = 'ALL';
        _this2.clearFieldsAndPutAll();
      }, function (error) {
        return _this2._notificationService.error('No se han podido obtener los productos', error);
      });
    }
  }, {
    key: 'productoChange',
    value: function productoChange() {
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
  }, {
    key: 'clearFieldsAndPutAll',
    value: function clearFieldsAndPutAll() {
      // TODO: This cannot works at the init.
      this.proyectosDisponibles = [];
      this.proyectosDisponibles.push({ label: 'ALL', value: 'ALL' });

      this.sprintsDisponibles = [];
      this.sprintsDisponibles.push({ label: 'ALL', value: 'ALL' });

      this.tiposDisponibles = [];
      this.tiposDisponibles.push({ label: 'ALL', value: 'ALL' });

      this.selectDefaultValues();
    }
  }, {
    key: 'selectDefaultValues',
    value: function selectDefaultValues() {
      this.model.IdProyecto = 'ALL';
      this.model.IdSprint = 'ALL';
      this.model.IdTipoUT = 'ALL';
    }
  }, {
    key: '_parseProductos',
    value: function _parseProductos(productos) {
      this.productosDisponibles = productos.map(function (prod) {
        return { label: '' + prod.Nombre, value: prod.IdProducto };
      });
      this.productosDisponibles.push({ label: 'ALL', value: 'ALL' });
    }
  }, {
    key: '_getProyectos',
    value: function _getProyectos(idProducto) {
      var _this3 = this;

      if (!proyectosCache$1[idProducto]) {
        this._getProyectoSubscription = this._getProyectosService.get(idProducto).subscribe(function (data) {
          _this3._parseProyectos(data);
          proyectosCache$1[idProducto] = _this3.proyectosDisponibles;
        }, function (error) {
          return _this3._notificationService.error('No se han podido obtener los proyectos del producto', error);
        });
      } else {
        this.proyectosDisponibles = proyectosCache$1[idProducto];
      }
    }
  }, {
    key: '_parseProyectos',
    value: function _parseProyectos(proyectos) {
      this.proyectosDisponibles = proyectos.map(function (proy) {
        return { label: '' + proy.Nombre, value: proy.IdProyecto };
      });
      this.proyectosDisponibles.push({ label: '<Sin Proyecto>', value: 0 });
      this.proyectosDisponibles.push({ label: 'ALL', value: 'ALL' });
    }
  }, {
    key: '_getSprints',
    value: function _getSprints(idProducto) {
      var _this4 = this;

      if (!sprintsCache$1[idProducto]) {
        this._getSprintsSubscription = this._getSprintsService.get(idProducto).subscribe(function (data) {
          _this4._parseSprints(data);
          sprintsCache$1[idProducto] = _this4.sprintsDisponibles;
        }, function (error) {
          _this4._notificationService.error('No se han podido obtener los Sprints del producto', error);
        });
      } else {
        this.sprintsDisponibles = sprintsCache$1[idProducto];
      }
    }
  }, {
    key: '_parseSprints',
    value: function _parseSprints(sprints) {
      this.sprintsDisponibles = sprints.map(function (sprint) {
        if (sprint.IdVersion === -1) {
          return { label: 'Backlog', value: 0 }; // TODO: Refactor backend service.
        } else {
          return { label: sprint.Nombre, value: sprint.IdVersion };
        }
      });
      this.sprintsDisponibles.push({ label: 'ALL', value: 'ALL' });
    }
  }, {
    key: '_getTiposUT',
    value: function _getTiposUT(idProducto) {
      var _this5 = this;

      if (!tiposUTCache$1[idProducto]) {
        this._getTiposUTSubscription = this._getTiposUTService.get(idProducto).subscribe(function (data) {
          _this5._parseTiposUT(data);
          tiposUTCache$1[idProducto] = _this5.tiposDisponibles;
        }, function (error) {
          return _this5._notificationService.error('No se han podido obtener los tipos de UT', error);
        });
      } else {
        this.tiposDisponibles = tiposUTCache$1[idProducto];
      }
    }
  }, {
    key: '_parseTiposUT',
    value: function _parseTiposUT(tipos) {
      this.tiposDisponibles = tipos.map(function (tipo) {
        return { label: '' + tipo.Nombre, value: tipo.IdTipoUT };
      });
      this.tiposDisponibles.push({ label: 'ALL', value: 'ALL' });
    }
  }, {
    key: '_parseEstados',
    value: function _parseEstados() {
      this.estadosDisponibles = estados;
      this.model.Estado = 'ALL';
    }
  }, {
    key: '_getActividades',
    value: function _getActividades() {
      var _this6 = this;

      this._getActividadesSubscription = this._activitiesService.getActivities().subscribe(function (data) {
        data.map(function (actividad) {
          actividades[actividad.IdActividad] = actividad.Nombre;
        });
      }, function (error) {
        return _this6._notificationService.error('No se han podido obtener las actividades', error);
      });
      actividades[0] = 'Terminar';
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._breadcrumbService.removeItems(1);

      this._utSearchSubscription && !this._utSearchSubscription.closed && this._utSearchSubscription.unsubscribe();

      this._getActividadesSubscription && !this._getActividadesSubscription.closed && this._getActividadesSubscription.unsubscribe();

      this._getProductosSubscription && !this._getProductosSubscription.closed && this._getProductosSubscription.unsubscribe();

      this._getProyectoSubscription && !this._getProyectoSubscription.closed && this._getProyectoSubscription.unsubscribe();

      this._getSprintsSubscription && !this._getSprintsSubscription.closed && this._getSprintsSubscription.unsubscribe();

      this._getTiposUTSubscription && !this._getTiposUTSubscription.closed && this._getTiposUTSubscription.unsubscribe();
    }
  }]);
  return UtSearchComponent;
}()) || _class$15);
Reflect.defineMetadata('design:paramtypes', [app.BreadcrumbService, UtSearchService, ActivitiesService, GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService, core$1.NotificationsService], UtSearchComponent);

var _dec$1;
var _class$1;

var UtRoutingModule = (_dec$1 = core.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: UtComponent }, { path: 'add', component: NuevaUTComponent, data: { breadcrumb: 'Nueva UT' } }, { path: ':id', component: DetailsComponent, data: { breadcrumb: '@id' } }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function UtRoutingModule() {
  classCallCheck(this, UtRoutingModule);
}) || _class$1);

var _dec;
var _class;

var UtModule = (_dec = core.NgModule({
  imports: [core$1.TuneUpCoreModule, UtRoutingModule],
  declarations: [UtComponent, DetailsComponent, NuevaUTComponent, FollowupsComponent, UtSearchComponent],
  providers: [DetailsService, // TODO: Move to the component if nobody uses it.
  GetProductosService, GetProyectosService, GetSprintsProductoService, GetTiposUTProductoService]
}), _dec(_class = function UtModule() {
  classCallCheck(this, UtModule);
}) || _class);

exports.UtModule = UtModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.ut.umd.js.map
