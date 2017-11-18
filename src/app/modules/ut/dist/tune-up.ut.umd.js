(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('@tune-up/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common/http', '@tune-up/core'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.ut = {}),global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.app));
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

var html = "";

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

var html$1 = "<!--\r\nTODO \r\nhacer un form, en el submit llamas a onGuardar y el boton onGuardar le pones type = submit y le\r\nquitas el onclick. Si no hay form no hay validations.\r\nusar ng-template para poner iconos en los dropdowns, y añadirles busqueda https://www.primefaces.org/primeng/#/dropdown\r\nlos iconos los puedes ver en el onclick.\r\nsi consigues hacer el layout con flex te quedará mejor, si no puedes al menos pon el width en % no en absoluto\r\nseguramente tendría sentido agrupar los distintos elementos del form en divs para hacer agrupaciones lógicas\r\nhacer orden input de tipo numerico, ver si puedes hacer incrementos y decrementos de 10 en 10 con los tipicos botones\r\ny si cambias todos los !editingModel por algo que no tengas que negar 9 veces?\r\nY DEJA DE PONER ESPACIOS EN EL HTML PORFAVOR\r\n -->\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n    Código\r\n  </div>\r\n  <div class=\"ui-g-3 ui-md-2 ui-lg-1\">\r\n    <input id=\"disabled-input\" type=\"text\" size=\"4\" pInputText [(ngModel)]= \"codigoUT\" [disabled]=\"true\" />\r\n  </div>\r\n  <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n    Nombre\r\n  </div>\r\n  <div class=\"ui-g-20 ui-md-10 ui-lg-5\">\r\n    <input id=\"input\" type=\"text\" size=\"50\" pInputText [(ngModel)]=\"nombreUT\" [disabled]= \"!editingMode\"> \r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n      <button *ngIf=\"!editingMode\" pButton type=\"button\" label=\"Editar\" (click)=\"onEditar()\"></button>\r\n      <button *ngIf=\"editingMode\" pButton type=\"button\" label=\"Guardar\" (click)=\"onGuardar()\"></button>\r\n      <button *ngIf=\"editingMode\" pButton type=\"button\" label=\"Cancelar\" (click)=\"onCancelar()\"></button>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Producto\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"productosDisponibles\" [(ngModel)]=\"producto\" optionLabel= \"IdProducto\" [disabled]= \"!editingMode\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Sprint\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"sprintsDisponibles\" [(ngModel)]=\"sprint\" [disabled]= \"!editingMode\" [style]=\"{'width':'200px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Orden\r\n      </div>\r\n      <div class=\"ui-g-6 ui-md-4 ui-lg-2\">\r\n        <input id=\"input\" type=\"text\" size=\"4\" pInputText [(ngModel)]=\"orden\" [disabled]= \"!editingMode\"> \r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n      Workflow\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"workflowsDisponibles\" [(ngModel)]=\"workflow\" [disabled]= \"!editingMode\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Tipo\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <p-dropdown [options]=\"tiposDisponibles\" [(ngModel)]=\"tipo\" [disabled]= \"!editingMode\" [style]=\"{'width':'200px'}\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Proyecto\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n          <p-dropdown [options]=\"proyectosDisponibles\" [(ngModel)]=\"proyecto\" [disabled]= \"!editingMode\" [style]=\"{'width':'250px'}\"></p-dropdown>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-2 ui-lg-1\">\r\n        Descripción\r\n      </div>\r\n      <div class=\"ui-g-30 ui-md-20 ui-lg-10\">\r\n          <textarea rows=\"5\"  pInputTextarea  [(ngModel)]=\"descripcion\" [disabled]= \"!editingMode\" cols=\"120\"></textarea>\r\n      </div>\r\n\r\n</div>\r\n\r\n";

__$styleInject("",undefined);

var _dec$3;
var _class$3;

var DetailsComponent = (_dec$3 = core.Component({
  selector: 'tn-ut-details',
  template: html$1
}), _dec$3(_class$3 = function () {
  function DetailsComponent(route, detailsService) {
    classCallCheck(this, DetailsComponent);
    this.codigoUT = null;
    this.editingMode = false;
    this.ut = this.ut;

    this._route = route;
    this._detailsService = detailsService;
  }

  createClass(DetailsComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      var _this = this;

      this.codigoUT = this._route.params._value.id;
      this._getUtSub = this._detailsService.getUt(this.codigoUT).subscribe(function (data) {
        // TODO: si no vas a usar this.ut luego, no la guardes
        // TODO: utiliza destructuring para que quede más claro, ej
        // const {Nombre, Orden} = data.UT; const {listaVersiones,...} = data
        // TODO: seguramente sería mejor tener un solo objeto en el this
        // en plan ut, y en el html bindear a ut.prop y así no tener mil cosas 
        // en el scope
        _this.ut = data;
        _this.nombreUT = _this.ut.UT.Nombre;
        _this.orden = _this.ut.UT.Orden;
        _this.producto = _this.ut.ProductoUT;
        _this._parseSprints(_this.ut.listaVersionesUT);
        _this._parseWorkflows(_this.ut.listaWorkflowsDisponibles);
        _this._parseTipos(_this.ut.listaTiposUT);
        _this._parseProyectos(_this.ut.listaProyectos);
        _this.descripcion = _this.ut.UT.Definicion;
        _this.sprint = 177;
      });
      this._detailsService.getProductosDisponibles().subscribe(function (data) {
        _this._parseProductos(data);
      });
    }
  }, {
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._getUtSub && !this._getUtSub.closed && this._getUtSub.unsubscribe();
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
    // TODO: var a = 'hola', label: a === label: `${a}`
    // las template strings solo valen si vas a escribir más.
    // TODO, en vez de almacenar todo esto en this, llama a las funciones desde el html y ya esta,
    // que solo se van a llamar una vez

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
Reflect.defineMetadata('design:paramtypes', [router.ActivatedRoute, DetailsService], DetailsComponent);

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

var html$2 = "<form class=\"tn-ut__form vertical\">\n  <div class=\"horizontal\">\n    <div class=\"vertical seven tn-ut__form__section\">\n      <label>Nombre</label>\n      <input type=\"text\" size=\"30\" [(ngModel)]=\"ut.Nombre\" name=\"nombre\" pInputText>\n    </div>\n    <div class=\"vertical five tn-ut__form__section\">\n      <label>Sprint</label>\n      <p-dropdown [options]=\"sprints\" optionLabel=\"name\" [(ngModel)]=\"ut.IdVersion\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"sprint\"></p-dropdown>\n    </div>\n  </div>\n  <div class=\"horizontal\">\n    <div class=\"vertical five tn-ut__form__section\">\n      <label>Producto</label>\n      <p-dropdown [options]=\"productos\" optionLabel=\"name\" [(ngModel)]=\"ut.IdProducto\" [style]=\"{'width':'100%'}\" filter=\"true\" name=\"producto\" (onChange)=\"onProductChanged($event.value)\"></p-dropdown>\n    </div>\n    <div class=\"vertical three tn-ut__form__section\">\n      <label>Tipo</label>\n      <p-dropdown [options]=\"tiposUT\" optionLabel=\"name\" [(ngModel)]=\"ut.IdTipoUT\" [style]=\"{'width':'100%'}\" name=\"tipo\" filter=\"true\"></p-dropdown>\n    </div>\n  </div>\n  <div class=\"horizontal\">\n    <div class=\"vertical seven tn-ut__form__section\">\n      <label>Proyecto</label>\n      <p-dropdown [options]=\"proyectos\" optionLabel=\"name\" [(ngModel)]=\"ut.IdProyecto\" [style]=\"{'width':'100%'}\" name=\"idproyecto\" filter=\"true\"></p-dropdown>\n    </div>\n    <div class=\"vertical five tn-ut__form__section\">\n      <label>Workflow</label>\n      <p-dropdown [options]=\"workflows\" optionLabel=\"name\" [(ngModel)]=\"ut.IdWorkflow\" [style]=\"{'width':'100%'}\" name=\"idworkflow\" filter=\"true\"></p-dropdown>\n    </div>\n  </div>\n  <div class=\"horizontal tn-ut__form__section\">\n    <button pButton type=\"button\" label=\"Crear & Nueva\" [disabled]=\"isNombreEmpty()\" (click)=\"onCrearNuevaUTClick()\"></button>\n    <button pButton type=\"button\" label=\"Crear & Abrir\" [disabled]=\"isNombreEmpty()\" (click)=\"onCrearYAbrirUTClick()\"></button>\n  </div>\n</form>\n";

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
exports.GetProyectosService = GetProyectosService;
exports.GetSprintsProductoService = GetSprintsProductoService;
exports.GetTiposUTProductoService = GetTiposUTProductoService;
exports.GetWorkflowsService = GetWorkflowsService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.ut.umd.js.map
