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

import { Component, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsService, TuneUpCoreModule } from '@tune-up/core';
import { HttpClient } from '@angular/common/http';

var html = "<div class=\"horizontal\">\n  <tn-kanban-resume class=\"none\"></tn-kanban-resume>\n  <tn-ut-list class=\"one\"></tn-ut-list>\n</div>\n";

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

// import './home.component.css';

var HomeComponent = (_dec$2 = Component({
  selector: 'tn-home',
  template: html
}), _dec$2(_class$2 = function HomeComponent() {
  classCallCheck(this, HomeComponent);
}) || _class$2);

var _dec$1;
var _class$1;

var HomeRoutingModule = (_dec$1 = NgModule({
  imports: [RouterModule.forChild([{ path: '', component: HomeComponent }])],
  exports: [RouterModule]
}), _dec$1(_class$1 = function HomeRoutingModule() {
  classCallCheck(this, HomeRoutingModule);
}) || _class$1);

var html$1 = "KANBAN RESUMIDO\n";

var _dec$3;
var _class$3;

// import './kanbanresume.component.css';

var KanbanResumeComponent = (_dec$3 = Component({
  selector: 'tn-kanban-resume',
  template: html$1
}), _dec$3(_class$3 = function KanbanResumeComponent() {
  classCallCheck(this, KanbanResumeComponent);
}) || _class$3);

var _dec$5;
var _class$5;

var UtListService = (_dec$5 = Injectable(), _dec$5(_class$5 = function () {
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
}()) || _class$5);
Reflect.defineMetadata('design:paramtypes', [HttpClient], UtListService);

var _dec$6;
var _class$6;

var AgentPicService = (_dec$6 = Injectable(), _dec$6(_class$6 = function () {
  function AgentPicService(http$$1) {
    classCallCheck(this, AgentPicService);

    this._http = http$$1;
    this._url = 'Agentes/Imagen';
  }

  createClass(AgentPicService, [{
    key: 'get',
    value: function get$$1(idAgente, idSitio) {
      return this._http.get(this._url + '?idAgente=' + idAgente + '&idSitio=' + idSitio);
    }
  }]);
  return AgentPicService;
}()) || _class$6);
Reflect.defineMetadata('design:paramtypes', [HttpClient], AgentPicService);

var html$2 = "<p-dataTable [value]=\"uts\" [rows]=\"20\" [paginator]=\"true\" [pageLinks]=\"5\"  [sortMode]=\"multiple\">\n  <p-column field=\"IdWorkflow\" header=\"Tipo/Estado\" [sortable]=\"true\">\n    <ng-template let-ut=\"rowData\" pTemplate=\"body\">\n      <span class=\"ui-button-icon\" [ngClass]=\"getUtTypeIcon(ut)\"></span>\n      <span class=\"ui-button-icon\" [ngClass]=\"getStateIcon(ut)\"></span>\n    </ng-template>\n  </p-column>\n  <p-column field=\"IdAgente\" header=\"Agente\" [sortable]=\"true\"></p-column>\n  <!-- <p-column header=\"Agente\">\n    <ng-template let-utIndex=\"rowIndex\" pTemplate=\"body\">\n      <img src=\"getAgentPic(utIndex)\"></img>\n    </ng-template>\n  </p-column> -->\n  <p-column field=\"NombreProyecto\" header=\"Producto/Servicio\" [sortable]=\"true\"></p-column>\n  <p-column field=\"NombreVersion\" header=\"Sprint\" [sortable]=\"true\"></p-column>\n  <p-column field=\"IdUT\" header=\"Código\" [sortable]=\"true\"></p-column>\n  <p-column field=\"NombreUT\" header=\"Nombre\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n";

__$styleInject("", undefined);

var _dec$4;
var _class$4;

var utTypes = ['mejora', 'fallo', 'nuevo', 'otro'];
var utTypesIcons = {
  mejora: 'fa fa-star',
  fallo: 'fa fa-bug',
  nuevo: 'fa fa-plus-circle',
  otro: 'fa fa-puzzle-piece'
};
var UtListComponent = (_dec$4 = Component({
  selector: 'tn-ut-list',
  template: html$2,
  providers: [UtListService, AgentPicService]
}), _dec$4(_class$4 = function () {
  function UtListComponent(utListService, agentPicService, notificationService) {
    classCallCheck(this, UtListComponent);

    this.getAgentPic = function (ut) {
      // TODO
    };

    this.getUtTypeIcon = function (ut) {
      return utTypesIcons[utTypes[ut.IdTipoUT]];
    };

    this.getStateIcon = function (utIndex) {
      return 'fa fa-close fa-open';
    };

    this._utListService = utListService;
    this._agentPicService = agentPicService;
    this._notificationsService = notificationService;
    this.uts = [];
    this._getUts();
  }

  createClass(UtListComponent, [{
    key: '_getUts',
    value: function _getUts() {
      var _this = this;

      this._utListService.get().subscribe(function (data) {
        if (!data.Exito) {
          _this._notificationsService.error('No se pudieron obtener las UTs', data.Mensaje);
          return;
        }
        _this.uts = data.Resultado;
      }, function (error) {
        return _this._notificationsService.error('No se pudieron obtener las UTs', error);
      });
    }
  }]);
  return UtListComponent;
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [UtListService, AgentPicService, NotificationsService], UtListComponent);

var _dec;
var _class;

var HomeModule = (_dec = NgModule({
  imports: [TuneUpCoreModule, HomeRoutingModule],
  declarations: [HomeComponent, KanbanResumeComponent, UtListComponent]
}), _dec(_class = function HomeModule() {
  classCallCheck(this, HomeModule);
}) || _class);

export { HomeModule };
//# sourceMappingURL=tune-up.home.js.map
