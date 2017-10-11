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

import { TuneUpCoreModule, configService } from '@tune-up/core';
import { Component, EventEmitter, Injectable, Input, NgModule, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '@tune-up/app';
import { HttpClient } from '@angular/common/http';

var validations = {
  login: {
    email: [{
      isEmail: {
        message: 'Debe ser un email válido'
      }
    }]
  }
};

configService.addValidations(validations);

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

var LoginService = (_dec$3 = Injectable(), _dec$3(_class$3 = function () {
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
Reflect.defineMetadata('design:paramtypes', [HttpClient], LoginService);

var _dec$4;
var _class$4;

var SitesService = (_dec$4 = Injectable(), _dec$4(_class$4 = function () {
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
Reflect.defineMetadata('design:paramtypes', [HttpClient], SitesService);

var html = "<form class=\"vertical\" #frm=\"ngForm\" (ngSubmit)=\"login()\">\n  <input type=\"text\" [(ngModel)]=\"model.email\" rule=\"login.email\" name=\"email\" #emailCtrl=\"ngModel\" (focusout)=\"onEmailFocusLost()\" pInputText>\n  <tn-error [control]=\"emailCtrl\"></tn-error>\n  <input type=\"password\" [(ngModel)]=\"model.password\" name=\"password\" pInputText>\n  <tn-site-selector [sites]=\"sites\" *ngIf=\"showSelector()\" (onSiteSelected)=\"setIdSitio($event)\"></tn-site-selector>\n  <div class=\"horizontal\">\n    <div class=\"one\"></div>\n    <button class=\"none\" pButton type=\"submit\" label=\"Login\"></button>\n  </div>\n</form>\n";

__$styleInject("", undefined);

var _dec$2;
var _class$2;

var LoginComponent = (_dec$2 = Component({
  selector: 'tn-login',
  template: html,
  providers: [LoginService, SitesService]
}), _dec$2(_class$2 = function () {
  function LoginComponent(route, router$$1, loginService, sitesService, authService) {
    var _this = this;

    classCallCheck(this, LoginComponent);
    this.model = {
      email: undefined,
      password: undefined,
      idsitio: undefined
    };

    this.onEmailFocusLost = function () {
      _this._sitesService.get(_this.model.email).subscribe(function (data) {
        _this.sites = data.Resultado.map(function (site) {
          return { label: site.Id + ': ' + site.Nombre + ' ', value: site.Id };
        });
      }, function (error) {
        console.log(error);
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
        console.log(data);
        _this._authService.setToken(data.Resultado.Token);
        _this._router.navigateByUrl(_this._returnUrl);
      }, function (error) {
        console.log(error);
      });
    };

    this._returnUrl = '/home';
    this.sites = [];
    this._route = route;
    this._router = router$$1;
    this._loginService = loginService;
    this._sitesService = sitesService;
    this._authService = authService;
  }

  createClass(LoginComponent, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this._returnUrl = this._route.snapshot.queryParams.returnUrl || this._returnUrl;
    }
  }]);
  return LoginComponent;
}()) || _class$2);
Reflect.defineMetadata('design:paramtypes', [ActivatedRoute, Router, LoginService, SitesService, AuthService], LoginComponent);

var _dec$1;
var _class$1;

var LoginRoutingModule = (_dec$1 = NgModule({
  imports: [RouterModule.forChild([{ path: '', component: LoginComponent }])],
  exports: [RouterModule]
}), _dec$1(_class$1 = function LoginRoutingModule() {
  classCallCheck(this, LoginRoutingModule);
}) || _class$1);

var html$1 = "<p-dropdown [options]=\"sites\" [filter]=\"true\" (onChange)=\"selectSite($event)\"></p-dropdown>\n";

var _dec$5;
var _dec2;
var _dec3;
var _class$5;
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

var SiteSelectorComponent = (_dec$5 = Component({
  selector: 'tn-site-selector',
  template: html$1
}), _dec2 = Input(), _dec3 = Output(), _dec$5(_class$5 = (_class2 = function SiteSelectorComponent() {
  var _this = this;

  classCallCheck(this, SiteSelectorComponent);

  _initDefineProp(this, 'sites', _descriptor, this);

  _initDefineProp(this, 'onSiteSelected', _descriptor2, this);

  this.selectSite = function (event) {
    _this.onSiteSelected.emit(event.value);
  };
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'sites', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onSiteSelected', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return new EventEmitter();
  }
})), _class2)) || _class$5);

var _dec;
var _class;

var LoginModule = (_dec = NgModule({
  imports: [TuneUpCoreModule, LoginRoutingModule],
  declarations: [LoginComponent, SiteSelectorComponent]
}), _dec(_class = function LoginModule() {
  classCallCheck(this, LoginModule);
}) || _class);

export { LoginModule };
//# sourceMappingURL=tune-up.login.js.map
