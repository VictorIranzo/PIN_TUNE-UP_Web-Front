(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('@angular/common/http'), require('@tune-up/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common', '@angular/common/http', '@tune-up/core'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.ut = {}),global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.vendor.ngCommon,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.app));
}(this, (function (exports,core,router,common,http,core$1) { 'use strict';

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

var html = "";

__$styleInject("", undefined);

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
  }]);
  return DetailsService;
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], DetailsService);

var html$1 = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n    Código\r\n  </div>\r\n  <div class=\"ui-g-3 ui-md-2 ui-lg-1\">\r\n    <input id=\"disabled-input\" type=\"text\" size= \"4\" pInputText [(ngModel)]= \"codigoUT\" [disabled]=\"true\" />\r\n  </div>\r\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n    Nombre\r\n  </div>\r\n  <div class=\"ui-g-20 ui-md-10 ui-lg-5\">\r\n    <input id=\"input\" type=\"text\" size=\"50\" pInputText [(ngModel)]=\"nombreUT\" [disabled]= \"!editingMode\"> \r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <button *ngIf=\"!editingMode\" pButton type=\"button\" label=\"Editar\" (click)=\"onEditar()\"></button>\r\n      <button *ngIf=\"editingMode\" pButton type=\"button\" label=\"Guardar\" (click)=\"onGuardar()\"></button>\r\n      <button *ngIf=\"editingMode\" pButton type=\"button\" label=\"Cancelar\" (click)=\"onCancelar()\"></button>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Producto\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"productosDisponibles\" [(ngModel)]=\"producto\" optionLabel= \"IdProducto\" [disabled]= \"!editingMode\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Sprint\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"sprintsDisponibles\" [(ngModel)]=\"sprint\" [disabled]= \"!editingMode\" [style]=\"{'width':'200px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Orden\r\n      </div>\r\n      <div class=\"ui-g-6 ui-md-4 ui-lg-2\">\r\n        <input id=\"input\" type=\"text\" size=\"4\" pInputText [(ngModel)]=\"orden\" [disabled]= \"!editingMode\"> \r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n      Workflow\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"workflowsDisponibles\" [(ngModel)]=\"workflow\" [disabled]= \"!editingMode\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Tipo\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"tiposDisponibles\" [(ngModel)]=\"tipo\" [disabled]= \"!editingMode\" [style]=\"{'width':'200px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Proyecto\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n          <p-dropdown [options]=\"proyectosDisponibles\" [(ngModel)]=\"proyecto\" [disabled]= \"!editingMode\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Descripción\r\n      </div>\r\n      <div class=\"ui-g-30 ui-md-20 ui-lg-10\">\r\n          <textarea rows=\"5\"  pInputTextarea  [(ngModel)]=\"descripcion\" [disabled]= \"!editingMode\" cols=\"120\"></textarea>\r\n      </div>\r\n\r\n</div>\r\n\r\n";

__$styleInject("", undefined);

var _dec$3;
var _class$3;

var DetailsComponent = (_dec$3 = core.Component({
  selector: 'tn-ut-details',
  template: html$1
}), _dec$3(_class$3 = function () {
  function DetailsComponent(route, location, detailsService) {
    classCallCheck(this, DetailsComponent);
    this.codigoUT = null;
    this.editingMode = false;

    this._route = route;
    this._detailsService = detailsService;
  }

  createClass(DetailsComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.codigoUT = parseInt(this._route.params._value.id);

      this._detailsService.getUt(this.codigoUT).subscribe(function (data) {
        _this.ut = data;
        _this.nombreUT = _this.ut.UT.Nombre;
        _this.orden = _this.ut.UT.Orden;
        _this.producto = _this.ut.ProductoUT;
        _this._parseSprints(_this.ut.listaVersionesUT);
        _this._parseWorkflows(_this.ut.listaWorkflowsDisponibles);
        _this._parseTipos(_this.ut.listaTiposUT);
        _this._parseProyectos(_this.ut.listaProyectos);
        _this.descripcion = _this.ut.UT.Definicion;
        _this.sprint = 'Sprint 2';
      });

      this._detailsService.getProductosDisponibles().subscribe(function (data) {
        _this._parseProductos(data);
      });
    }
  }, {
    key: 'onEditar',
    value: function onEditar() {
      this.editingMode = true;
    }
  }, {
    key: 'onCancelar',
    value: function onCancelar() {
      this.editingMode = false;
    }
  }, {
    key: 'onGuardar',
    value: function onGuardar() {
      this.editingMode = false;
    }
  }, {
    key: '_parseSprints',
    value: function _parseSprints(sprints) {
      this.sprintsDisponibles = sprints.map(function (sprint) {
        return { label: '' + sprint.Nombre, value: sprint.IdVersion };
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
    }
  }, {
    key: '_parseProductos',
    value: function _parseProductos(productos) {
      this.productosDisponibles = productos.map(function (prod) {
        return { label: '' + prod.Nombre, value: prod.IdProducto };
      });
    }
  }]);
  return DetailsComponent;
}()) || _class$3);
Reflect.defineMetadata('design:paramtypes', [router.ActivatedRoute, common.Location, DetailsService], DetailsComponent);

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

var html$2 = "<div class=\"horizontal\">\r\n  <span class=\"ui-float-label\">\r\n    <input id=\"nombre-ut-textfield\" type=\"text\" size=\"30\" [(ngModel)]=\"ut.Nombre\" pInputText> \r\n    <label for=\"nombre-ut-textfield\">Nombre UT</label>\r\n  </span>\r\n  \r\n  <p-dropdown [options]=\"productos\" [(ngModel)]=\"ut.IdProducto\" optionLabel=\"Nombre\"></p-dropdown>\r\n  \r\n</div>\r\n";

__$styleInject("", undefined);

var _dec$5;
var _class$5;

var NuevaUTComponent = (_dec$5 = core.Component({
  selector: 'tn-ut-nuevaut',
  template: html$2,
  providers: [CreateUTService, GetProductosService]
}), _dec$5(_class$5 = function () {
  function NuevaUTComponent(createUTService, getProductosService, notificationsService) {
    classCallCheck(this, NuevaUTComponent);
    this.ut = {
      Nombre: null,
      IdVersion: null,
      IdProducto: null,
      IdWorkflow: null,
      IdTipoUT: null,
      IdProyecto: null
    };
    this.productos = [];

    this._createUTService = createUTService;
    this._getProductosService = getProductosService;
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
    key: '_crearUT',
    value: function _crearUT() {
      var _this2 = this;

      idUT = 0;
      this.createUTService.put(this.ut).subscribe(function (data) {
        _this2.idUT = data.Resultado;
      }, function (error) {
        _this2._notificationService.error('No se pudo crear la UT especficada', error);
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
Reflect.defineMetadata('design:paramtypes', [CreateUTService, GetProductosService, core$1.NotificationsService], NuevaUTComponent);

var _dec$1;
var _class$1;

var UtRoutingModule = (_dec$1 = core.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: UtComponent }, { path: ':id', component: DetailsComponent }, { path: 'add', component: NuevaUTComponent }])],
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

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.ut.umd.js.map
