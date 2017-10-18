(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tune-up/core'), require('@angular/core'), require('@angular/router'), require('@tune-up/app'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@tune-up/core', '@angular/core', '@angular/router', '@tune-up/app', '@angular/common/http'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.login = {}),global.tuneUp.app,global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngRouter,global.tuneUp.app,global.tuneUp.vendor.ngCommonHttp));
}(this, (function (exports,core,core$1,router,app,http) { 'use strict';

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

var validations = {
  login: {
    email: [{
      isEmail: {
        message: 'Debe ser un email válido'
      }
    }, {
      required: {
        message: 'El email es requerido'
      }
    }],
    password: [{
      required: {
        message: 'La contraseña es requerida'
      }
    }]
  }
};

core.configService.addValidations(validations);

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

var LoginService = (_dec$3 = core$1.Injectable(), _dec$3(_class$3 = function () {
  function LoginService(http$$1) {
    classCallCheck(this, LoginService);

    this._http = http$$1;
    this._url = 'Login2';
  }

  createClass(LoginService, [{
    key: 'login',
    value: function login(model) {
      return this._http.post(this._url, model);
    }
  }]);
  return LoginService;
}()) || _class$3);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], LoginService);

var _dec$4;
var _class$4;

var SitesService = (_dec$4 = core$1.Injectable(), _dec$4(_class$4 = function () {
  function SitesService(http$$1) {
    classCallCheck(this, SitesService);

    this._http = http$$1;
    this._url = 'Sitios';
  }

  createClass(SitesService, [{
    key: 'get',
    value: function get$$1(email) {
      return this._http.get(this._url + '\\' + email);
    }
  }]);
  return SitesService;
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], SitesService);

var html = "<div class=\"tn-login-background\">\n  <form class=\"vertical tn-login-form\" #frm=\"ngForm\" (ngSubmit)=\"frm.valid && login()\">\n    <img class=\"tn-login--header\" src=\"assets/logo.png\">\n    <div class=\"tn-login-form-wrapper\">\n     \n      <div class=\"tn-login-form-inputgroup\">\n        <span class=\"ui-float-label\">\n          <input class=\"tn-login-form-inputgroup--input\" type=\"text\" [(ngModel)]=\"model.email\" rule=\"login.email\" name=\"email\" #emailCtrl=\"ngModel\" (focusout)=\"onEmailFocusLost()\"\n          pInputText>\n          <label>Email *</label>\n        </span>\n        <tn-validation-error [control]=\"emailCtrl\"></tn-validation-error>\n      </div>\n\n      <div class=\"tn-login-form-inputgroup\">\n        <span class=\"ui-float-label\">\n          <input class=\"tn-login-form-inputgroup--input\" type=\"password\" [(ngModel)]=\"model.password\" rule=\"login.password\" name=\"password\" #passwordCtrl=\"ngModel\" pInputText>\n          <label>Contraseña *</label>\n        </span>\n        <tn-validation-error [control]=\"passwordCtrl\"></tn-validation-error>\n      </div>\n\n      <div class=\"horizontal\">\n        <div class=\"one tn-login-form--siteselector\">\n          <tn-site-selector [sites]=\"sites\" *ngIf=\"showSelector()\" (onSiteSelected)=\"setIdSitio($event)\"></tn-site-selector>\n        </div>\n        <button class=\"none tn-login-form--submitbtn\" pButton type=\"submit\" label=\"Login\"></button>\n      </div>\n    </div>\n  </form>\n</div>\n";

__$styleInject(".tn-login-background{background:url(assets/bg.jpg);background-size:cover;background-color:#1976d2;background-repeat:no-repeat;color:#fff}.tn-login-background,.tn-login-form{position:absolute;top:0;right:0;width:100%;height:100%}.tn-login-form{align-items:center;padding:100px 50px;box-shadow:0 5px 7px 5px rgba(0,0,0,.1);box-sizing:border-box;background-color:#fff;overflow:auto}@media (min-width:960px){.tn-login-form{width:fit-content}}.tn-login--header{width:180px;height:180px;padding-bottom:32px}.tn-login-form-wrapper{width:270px}.tn-login-form-inputgroup{padding-bottom:32px}.tn-login-form-inputgroup--input{width:100%}.tn-login-form--siteselector{margin-right:8px}.tn-login-form--submitbtn{height:100%}", undefined);

var _dec$2;
var _dec2;
var _class$2;
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

var LoginComponent = (_dec$2 = core$1.Component({
  selector: 'tn-login',
  template: html,
  providers: [LoginService, SitesService]
}), _dec2 = core$1.ViewChild('emailCtrl'), _dec$2(_class$2 = (_class2 = function () {
  function LoginComponent(route, router$$1, loginService, sitesService, authService, agentService, aboutService, notificationsService) {
    var _this = this;

    classCallCheck(this, LoginComponent);
    this.model = {
      email: undefined,
      password: undefined,
      idsitio: undefined
    };

    _initDefineProp(this, 'emailCtrl', _descriptor, this);

    this.onEmailFocusLost = function () {
      _this.model.email && _this.emailCtrl.valid && _this._sitesService.get(_this.model.email).subscribe(function (data) {
        var Resultado = data.Resultado;
        // TODO: refactor when backend api is refactored

        if (Resultado.length === 0) {
          _this._notificationsService.error('No hay sitios disponibles', 'No existen sitios asociados con este email.');
        } else {
          _this._parseSites(Resultado);
        }
      }, function (error) {
        _this._notificationsService.error('Error', error);
      });
    };

    this.setIdSitio = function (idSitio) {
      _this.model.idsitio = idSitio;
    };

    this.showSelector = function () {
      return _this.sites.length > 1;
    };

    this.login = function () {
      _this._loginService.login(_this.model).subscribe(function (data) {
        // TODO: refactor when backend api is refactored
        if (!data.Exito) {
          _this._notificationsService.error('Error de login', data.Mensaje);
          return;
        }
        var _data$Resultado = data.Resultado,
            Token = _data$Resultado.Token,
            Agente = _data$Resultado.Agente,
            Configuracion = _data$Resultado.Configuracion;

        _this._authService.setToken(Token);
        _this._agentService.agent = Agente;
        _this._aboutService.about = Configuracion;
        _this._redirect();
      }, function (error) {
        _this._notificationsService.error('Error de login', error);
      });
    };

    this._returnUrl = '/home';
    this.sites = [];
    this._route = route;
    this._router = router$$1;
    this._loginService = loginService;
    this._sitesService = sitesService;
    this._authService = authService;
    this._aboutService = aboutService;
    this._agentService = agentService;
    this._notificationsService = notificationsService;
  }

  createClass(LoginComponent, [{
    key: '_checkLogedIn',
    value: function _checkLogedIn() {
      if (this._authService.getToken()) {
        debugger;
        this._redirect();
      }
    }
  }, {
    key: '_redirect',
    value: function _redirect() {
      this._router.navigateByUrl(this._returnUrl);
    }
  }, {
    key: 'ngOnInit',
    value: function ngOnInit() {
      var paramsReturnUrl = this._route.snapshot.queryParams.returnUrl;
      this._returnUrl = !paramsReturnUrl || paramsReturnUrl === '/login' || paramsReturnUrl === '/' ? this._returnUrl : paramsReturnUrl;
      this._checkLogedIn();
    }
  }, {
    key: '_parseSites',
    value: function _parseSites(sites) {
      this.sites = sites.map(function (site) {
        return { label: site.Id + ': ' + site.Nombre + ' ', value: site.Id };
      });
      this.model.idsitio = sites[0] && sites[0].Id;
    }
  }]);
  return LoginComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'emailCtrl', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.emailCtrl;
  }
})), _class2)) || _class$2);
Reflect.defineMetadata('design:paramtypes', [router.ActivatedRoute, router.Router, LoginService, SitesService, app.AuthService, app.AgentService, app.AboutService, core.NotificationsService], LoginComponent);

var _dec$1;
var _class$1;

var LoginRoutingModule = (_dec$1 = core$1.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: LoginComponent }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function LoginRoutingModule() {
  classCallCheck(this, LoginRoutingModule);
}) || _class$1);

var html$1 = "<p-dropdown [options]=\"sites\" [filter]=\"true\" (onChange)=\"selectSite($event)\"></p-dropdown>\r\n";

var _dec$5;
var _dec2$1;
var _dec3;
var _class$5;
var _class2$1;
var _descriptor$1;
var _descriptor2;

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

var SiteSelectorComponent = (_dec$5 = core$1.Component({
  selector: 'tn-site-selector',
  template: html$1
}), _dec2$1 = core$1.Input(), _dec3 = core$1.Output(), _dec$5(_class$5 = (_class2$1 = function SiteSelectorComponent() {
  var _this = this;

  classCallCheck(this, SiteSelectorComponent);

  _initDefineProp$1(this, 'sites', _descriptor$1, this);

  _initDefineProp$1(this, 'onSiteSelected', _descriptor2, this);

  this.selectSite = function (event) {
    _this.onSiteSelected.emit(event.value);
  };
}, (_descriptor$1 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'sites', [_dec2$1], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'onSiteSelected', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return new core$1.EventEmitter();
  }
})), _class2$1)) || _class$5);

var _dec;
var _class;

var LoginModule = (_dec = core$1.NgModule({
  imports: [core.TuneUpCoreModule, LoginRoutingModule],
  declarations: [LoginComponent, SiteSelectorComponent]
}), _dec(_class = function LoginModule() {
  classCallCheck(this, LoginModule);
}) || _class);

exports.LoginModule = LoginModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.login.umd.js.map
