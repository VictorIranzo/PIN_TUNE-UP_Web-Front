(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser-dynamic'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/common/http'), require('@angular/router'), require('@tune-up/vendor'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser-dynamic', '@angular/core', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/common/http', '@angular/router', '@tune-up/vendor', '@angular/forms', '@angular/common'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.app = {}),global.tuneUp.vendor.ngPlatformBrowserDynamic,global.tuneUp.vendor.ngCore,global.tuneUp.vendor.ngPlatformBrowser,global.tuneUp.vendor.ngPlatformBrowserAnimations,global.tuneUp.vendor.ngCommonHttp,global.tuneUp.vendor.ngRouter,global.tuneUp.vendor,global.tuneUp.vendor.ngForms,global.tuneUp.vendor.ngCommon));
}(this, (function (exports,platformBrowserDynamic,core_1,platformBrowser,animations,http,router,vendor,forms,common) { 'use strict';

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

var core_1__default = 'default' in core_1 ? core_1['default'] : core_1;

var html = "<div class=\"vertical\">\r\n  <tn-appbar class=\"tn-scene-appbar\"></tn-appbar>\r\n  <div class=\"horizontal\">\r\n    <tn-menu class=\"tn-scene-menu\"></tn-menu>\r\n    <tn-content class=\"tn-scene-content\"></tn-content>\r\n  </div>\r\n</div>\r\n";

__$styleInject(".tn-scene-appbar{background-color:#20272a;display:block;padding:0;height:70px;box-sizing:border-box;position:fixed;top:0;left:0;width:100%;z-index:2;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.tn-scene-menu{position:fixed;left:0;top:70px;height:100%;background-color:#fff;overflow:hidden;z-index:1;text-align:center}@media (min-width:960px){.tn-scene-menu{width:270px;box-shadow:0 0 5px 0 rgba(0,0,0,.3)}}.tn-scene-content{padding-top:70px;background-color:#fff;width:100%;height:100%}@media (min-width:960px){.tn-scene-content{margin-left:270px}}",undefined);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





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

var mqlGtsm = window.matchMedia('(min-width: 960px)');

var SceneService = (_dec$3 = core_1.Injectable(), _dec$3(_class$3 = function () {
  function SceneService(ngZone) {
    var _this = this;

    classCallCheck(this, SceneService);

    this._onWindowSizeChanged = function (_ref) {
      var matches = _ref.matches;

      _this._docked = matches;
      if (matches) _this.open();else _this.close();
    };

    this._sidenav = null;
    this._ngZone = ngZone;
  }

  createClass(SceneService, [{
    key: 'close',
    value: function close() {
      if (this._sidenav && !this._docked) {
        this._sidenav.visible = false;
      }
    }
  }, {
    key: 'closeStrong',
    value: function closeStrong() {
      if (this._sidenav) {
        this._sidenav.visible = false;
      }
    }
  }, {
    key: 'open',
    value: function open() {
      if (this._sidenav) {
        this._sidenav.visible = true;
      }
    }
  }, {
    key: '_initialize',
    value: function _initialize() {
      var _this2 = this;

      mqlGtsm.addListener(function (result) {
        return _this2._ngZone.run(function () {
          return _this2._onWindowSizeChanged(result);
        });
      });
      this._onWindowSizeChanged(mqlGtsm);
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      mqlGtsm.removeListener(this.onWindowSizeChanged);
      this._sidenav = null;
    }
  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this._sidenav && this._sidenav.visible;
    }
  }, {
    key: 'isDocked',
    value: function isDocked() {
      return this._docked;
    }
  }, {
    key: 'sidenav',
    set: function set$$1(value) {
      this._sidenav = value;
      this._initialize();
    }
  }]);
  return SceneService;
}()) || _class$3);
Reflect.defineMetadata('design:paramtypes', [core_1.NgZone], SceneService);

var _dec$2;
var _class$2;

var SceneComponent = (_dec$2 = core_1.Component({
  selector: 'tn-scene',
  template: html,
  providers: [SceneService]
}), _dec$2(_class$2 = function () {
  function SceneComponent(sceneService) {
    classCallCheck(this, SceneComponent);

    this._sceneService = sceneService;
  }

  createClass(SceneComponent, [{
    key: 'ngOnDestroy',
    value: function ngOnDestroy() {
      this._sceneService.dispose();
    }
  }]);
  return SceneComponent;
}()) || _class$2);
Reflect.defineMetadata('design:paramtypes', [SceneService], SceneComponent);

var _dec$5;
var _class$5;

var TOKEN_KEY = 'tnToken';

var AuthService = (_dec$5 = core_1.Injectable(), _dec$5(_class$5 = function () {
  function AuthService() {
    classCallCheck(this, AuthService);
  }

  createClass(AuthService, [{
    key: 'getToken',
    value: function getToken() {
      return sessionStorage.getItem(TOKEN_KEY);
    }
  }, {
    key: 'setToken',
    value: function setToken(token) {
      sessionStorage.setItem(TOKEN_KEY, token);
    }
  }]);
  return AuthService;
}()) || _class$5);

var _dec$6;
var _class$6;

var AgentService = (_dec$6 = core_1.Injectable(), _dec$6(_class$6 = function () {
  function AgentService() {
    classCallCheck(this, AgentService);

    this._agent = this.getFromStorage();
  }

  createClass(AgentService, [{
    key: 'getFromStorage',
    value: function getFromStorage() {
      var agent = sessionStorage.getItem('tnAgent') ? JSON.parse(sessionStorage.getItem('tnAgent')) : undefined;
      return agent;
    }
  }, {
    key: 'saveToStorage',
    value: function saveToStorage(agent) {
      sessionStorage.setItem('tnAgent', JSON.stringify(agent));
    }
  }, {
    key: 'getSiteId',
    value: function getSiteId() {
      return this._agent.IdSitio;
    }
  }, {
    key: 'isAdmin',
    value: function isAdmin() {
      return this._agent.Administrador;
    }
  }, {
    key: 'getAgentId',
    value: function getAgentId() {
      return this._agent.IdAgente;
    }
  }, {
    key: 'agent',
    get: function get$$1() {
      return this._agent;
    },
    set: function set$$1(value) {
      this._agent = value;
      this.saveToStorage(value);
    }
  }]);
  return AgentService;
}()) || _class$6);

var _dec$7;
var _class$7;

var AboutService = (_dec$7 = core_1.Injectable(), _dec$7(_class$7 = function () {
  function AboutService() {
    classCallCheck(this, AboutService);

    this._about = null;
  }

  createClass(AboutService, [{
    key: 'about',
    get: function get$$1() {
      return this._about;
    },
    set: function set$$1(value) {
      this._about = value;
    }
  }]);
  return AboutService;
}()) || _class$7);

var _dec$8;
var _class$8;

var BreadcrumbService = (_dec$8 = core_1.Injectable(), _dec$8(_class$8 = function () {
  function BreadcrumbService() {
    classCallCheck(this, BreadcrumbService);
    this._items = [];
  }

  createClass(BreadcrumbService, [{
    key: 'addItems',
    value: function addItems(menuItems) {
      menuItems = Array.isArray(menuItems) ? menuItems : [menuItems];
      this._items = this.items.concat(menuItems);
    }
  }, {
    key: 'removeItems',
    value: function removeItems(count) {
      this._items = this._items.slice(0, this._items.length - count);
    }
  }, {
    key: 'items',
    get: function get$$1() {
      return this._items;
    },
    set: function set$$1(value) {
      this._items = value;
    }
  }]);
  return BreadcrumbService;
}()) || _class$8);

var html$1 = "<!-- TODO: make functions to manage visibility, dont call the service directly -->\r\n<div class=\"horizontal tn-scene-appbar-wrapper\">\r\n    <div *ngIf=\"this._sceneService.isDocked()\" class=\"none tn-scene-appbar--topMenu\">TUNE-UP</div>\r\n    <div class =\"horizontal ten\">\r\n      <div class=\"tn-scene-appbar--button\" *ngIf=\"!this._sceneService.isDocked()\" >\r\n        <i *ngIf=\"this._sceneService.isVisible()\" (click)=\"onHideMenuClick()\" class=\"fa fa-2x fa-caret-square-o-left\"></i>                                \r\n        <i *ngIf=\"!this._sceneService.isVisible()\" (click)=\"onShowMenuClick()\" class=\"fa fa-2x fa-caret-square-o-right\"></i>                    \r\n      </div>\r\n      <p-breadcrumb class=\"tn-scene-appbar--breadcrumb\" [model]=\"breadcrumbItems()\" [home]=\"breadcrumbHome\"></p-breadcrumb>    \r\n    </div>\r\n    <div class = \"horizontal one\">\r\n        <i class=\"tn-scene-appbar--button fa fa-2x fa-list\"></i>        \r\n    </div>\r\n</div>\r\n";

__$styleInject(".tn-scene-appbar--button{color:#fff}.tn-scene-appbar--breadcrumb,.tn-scene-appbar--button{margin-left:10px;align-self:center}.tn-scene-appbar--topMenu{width:270px;height:70px;text-align:center;font-size:-webkit-xxx-large;color:#fff;align-items:center;justify-content:center;display:flex}.tn-scene-appbar-wrapper{height:100%}",undefined);

var _dec$4;
var _class$4;

var AppbarComponent = (_dec$4 = core_1.Component({
  selector: 'tn-appbar',
  template: html$1
}), _dec$4(_class$4 = function () {
  function AppbarComponent(breadcrumbService, sceneService) {
    classCallCheck(this, AppbarComponent);
    this.menuOpen = true;
    this.breadcrumbHome = { icon: 'fa fa-home', routerLink: '/home' };

    this._breadcrumbService = breadcrumbService;
    this._sceneService = sceneService;
  }

  createClass(AppbarComponent, [{
    key: 'breadcrumbItems',
    value: function breadcrumbItems() {
      return this._breadcrumbService.items;
    }
  }, {
    key: 'onHideMenuClick',
    value: function onHideMenuClick() {
      this.menuOpen = false;
      this._sceneService.closeStrong();
    }
  }, {
    key: 'onShowMenuClick',
    value: function onShowMenuClick() {
      this.menuOpen = true;
      this._sceneService.open();
    }
  }]);
  return AppbarComponent;
}()) || _class$4);
Reflect.defineMetadata('design:paramtypes', [BreadcrumbService, SceneService], AppbarComponent);

var html$2 = "<router-outlet></router-outlet>\r\n";

var _dec$9;
var _class$9;

var ContentComponent = (_dec$9 = core_1.Component({
  selector: 'tn-content',
  template: html$2
}), _dec$9(_class$9 = function ContentComponent() {
  classCallCheck(this, ContentComponent);
}) || _class$9);

var menuItems = [{
  path: '/home',
  text: 'Inicio',
  icon: 'fa fa-home',
  adminOnly: false
}, {
  path: '/uts',
  text: 'UTs',
  icon: 'fa fa-tasks',
  adminOnly: false
}, {
  path: '/uts/add',
  text: 'Crear UT',
  icon: 'fa fa-plus-circle',
  adminOnly: false
}];

var html$3 = "<p-sidebar #sidenav [ngStyle]=\"{width:'270px'}\">\r\n  <div>\r\n    <img class=\"tn-menu-sidebar--logo\" src=\"./assets/logo.png\">\r\n  </div>\r\n  <div class=\"tn-menu-sidebar\">\r\n    <div *ngFor=\"let item of items\">\r\n      <div *ngIf=\"mustPrint(item)\">\r\n        <tn-menuitem [text]=\"item.text\" [path]=\"item.path\" [icon]=\"item.icon\" [adminOnly]=\"item.adminOnly\"></tn-menuitem>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-sidebar>\r\n";

__$styleInject(".tn-menu-sidebar--logo{width:180px;height:180px;margin-top:80px;margin-bottom:10px}.ui-sidebar-left{width:270px}.tn-menu-sidebar{background:#5e35b1;height:100%}",undefined);

var _dec$10;
var _dec2;
var _class$10;
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

var MenuComponent = (_dec$10 = core_1.Component({
  selector: 'tn-menu',
  template: html$3
}), _dec2 = core_1.ViewChild('sidenav'), _dec$10(_class$10 = (_class2 = function () {
  function MenuComponent(agentService, sceneService) {
    classCallCheck(this, MenuComponent);

    _initDefineProp(this, 'sidenav', _descriptor, this);

    this.items = menuItems;

    this._agentService = agentService;
    this._sceneService = sceneService;
  }

  createClass(MenuComponent, [{
    key: 'mustPrint',
    value: function mustPrint(item) {
      // TODO: fix when needed
      // return this._agentService.isAdmin();
      return true;
    }
  }, {
    key: 'ngAfterContentInit',
    value: function ngAfterContentInit() {
      this._sceneService.sidenav = this.sidenav;
    }
  }, {
    key: 'ngAfterViewInit',
    value: function ngAfterViewInit() {
      this._tuneSidenav();
    }
  }, {
    key: '_tuneSidenav',
    value: function _tuneSidenav() {
      document.getElementsByClassName('ui-sidebar-mask')[0].hidden = true;
      document.getElementsByClassName('ui-sidebar-close')[0].remove();
      document.getElementsByClassName('ui-sidebar')[0].style.padding = '0px';
    }
  }]);
  return MenuComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'sidenav', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class$10);
Reflect.defineMetadata('design:paramtypes', [AgentService, SceneService], MenuComponent);

var html$4 = "<button pButton type=\"button\" class=\"tn-menuitem-layout\" label= {{text}} icon= {{icon}} routerLink={{path}}></button>\r\n";

__$styleInject(".tn-menuitem-layout{width:100%;border-bottom:1px solid #fff!important}",undefined);

var _dec$11;
var _dec2$1;
var _dec3;
var _dec4;
var _dec5;
var _class$11;
var _class2$1;
var _descriptor$1;
var _descriptor2;
var _descriptor3;
var _descriptor4;

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

var MenuItemComponent = (_dec$11 = core_1.Component({
  selector: 'tn-menuitem',
  template: html$4
}), _dec2$1 = core_1.Input(), _dec3 = core_1.Input(), _dec4 = core_1.Input(), _dec5 = core_1.Input(), _dec$11(_class$11 = (_class2$1 = function MenuItemComponent() {
  classCallCheck(this, MenuItemComponent);

  _initDefineProp$1(this, 'path', _descriptor$1, this);

  _initDefineProp$1(this, 'text', _descriptor2, this);

  _initDefineProp$1(this, 'icon', _descriptor3, this);

  _initDefineProp$1(this, 'adminOnly', _descriptor4, this);
}, (_descriptor$1 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'path', [_dec2$1], {
  enumerable: true,
  initializer: function initializer() {
    return this.path;
  }
}), _descriptor2 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'text', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return this.text;
  }
}), _descriptor3 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'icon', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return this.icon;
  }
}), _descriptor4 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'adminOnly', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return this.adminOnly;
  }
})), _class2$1)) || _class$11);

var _dec$12;
var _class$12;

var AuthGuard = (_dec$12 = core_1.Injectable(), _dec$12(_class$12 = function () {
  function AuthGuard(router$$1, authService) {
    classCallCheck(this, AuthGuard);

    this._router = router$$1;
    this._authService = authService;
  }

  createClass(AuthGuard, [{
    key: '_checkAndRedirect',
    value: function _checkAndRedirect(route, state) {
      if (this._authService.getToken()) {
        return true;
      }
      var returnUrl = state && state.url;
      this._router.navigate(['/login'], { queryParams: { returnUrl: returnUrl } });
      return false;
    }
  }, {
    key: 'canActivate',
    value: function canActivate(route, state) {
      return this._checkAndRedirect(route, state);
    }
  }]);
  return AuthGuard;
}()) || _class$12);
Reflect.defineMetadata('design:paramtypes', [router.Router, AuthService], AuthGuard);

var _dec$1;
var _class$1;

var AppRoutingModule = (_dec$1 = core_1.NgModule({
  imports: [router.RouterModule.forRoot([{
    path: '',
    component: SceneComponent,
    canActivate: [AuthGuard],
    // register lazy-load routes
    children: [{
      path: 'home',
      loadChildren: 'src/app/modules/home/dist/tune-up.home.umd.js#home#HomeModule'
    }, {
      path: 'uts',
      loadChildren: 'src/app/modules/ut/dist/tune-up.ut.umd.js#ut#UtModule'
    }]
  }, {
    path: 'login',
    loadChildren: 'src/app/modules/login/dist/tune-up.login.umd.js#login#LoginModule'
  }, {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }], {
    useHash: true,
    enableTracing: "development" !== 'production'
  })],
  exports: [router.RouterModule],
  providers: [AuthGuard]
}), _dec$1(_class$1 = function AppRoutingModule() {
  classCallCheck(this, AppRoutingModule);
}) || _class$1);

var html$5 = "<tn-notifications></tn-notifications>\r\n<router-outlet></router-outlet>\r\n";

__$styleInject(".none{flex:none}.one{flex:1}.two{flex:2}.three{flex:3}.four{flex:4}.five{flex:5}.six{flex:6}.seven{flex:7}.eight{flex:8}.nine{flex:9}.ten{flex:10}.eleven{flex:11}.twelve{flex:12}.flex,.horizontal,.vertical{display:flex}.horizontal{flex-direction:row}.vertical,.vertical-fill{flex-direction:column}.vertical-fill,fill{height:100%}.wrap{flex-wrap:wrap}body{margin:0;min-height:100%;padding:0;overflow-x:hidden;overflow-y:auto;font-family:Roboto,Trebuchet MS,Arial,Helvetica,sans-serif;font-weight:400;color:#404c51;-webkit-font-smoothing:antialiased;font-size:1em}a{text-decoration-line:none!important}",undefined);

var _dec$13;
var _class$13;

var AppComponent = (_dec$13 = core_1.Component({
  selector: 'tn-app',
  template: html$5
}), _dec$13(_class$13 = function AppComponent() {
  classCallCheck(this, AppComponent);
}) || _class$13);

var _dec$14;
var _class$14;

var ResponseInterceptor = (_dec$14 = core_1.Injectable(), _dec$14(_class$14 = function () {
  function ResponseInterceptor() {
    classCallCheck(this, ResponseInterceptor);
  }

  createClass(ResponseInterceptor, [{
    key: 'intercept',
    value: function intercept(req, next) {
      var _this = this;

      return next.handle(req).map(function (event) {
        if (event instanceof http.HttpResponse) {
          if (_this._isNoContent(event) || !event.body.Resultado) {
            return event;
          }
          _this._checkInvalid(event);
          return event = _this._serializeBody(event);
        }
      });
    }
  }, {
    key: '_isNoContent',
    value: function _isNoContent(response) {
      return !response.body;
    }
  }, {
    key: '_serializeBody',
    value: function _serializeBody(response) {
      var result = response && response.body && response.body.Resultado;
      return response.clone({ body: result });
    }
  }, {
    key: '_checkInvalid',
    value: function _checkInvalid(response) {
      var success = response && response.body && response.body.Exito;
      if (!success) {
        throw new Error(response.body.Mensaje);
      }
    }
  }]);
  return ResponseInterceptor;
}()) || _class$14);

var ResponseInterceptorProvider = {
  provide: http.HTTP_INTERCEPTORS,
  useClass: ResponseInterceptor,
  multi: true
};

var _dec$15;
var _class$15;

var TokenInterceptor = (_dec$15 = core_1.Injectable(), _dec$15(_class$15 = function () {
  function TokenInterceptor(authService) {
    classCallCheck(this, TokenInterceptor);

    this._authService = authService;
  }

  createClass(TokenInterceptor, [{
    key: 'intercept',
    value: function intercept(req, next) {
      if (!this._authService.getToken()) {
        return next.handle(req);
      }
      var tokenReq = req.clone({
        setHeaders: {
          token: this._authService.getToken()
        }
      });
      return next.handle(tokenReq);
    }
  }]);
  return TokenInterceptor;
}()) || _class$15);
Reflect.defineMetadata('design:paramtypes', [AuthService], TokenInterceptor);

var TokenInterceptorProvider = {
  provide: http.HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};

function __$styleInject$1(css, returnValue) {
    if (typeof document === 'undefined') {
        return returnValue;
    }
    css = css || '';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    return returnValue;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports(x) {
    return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = assertString;
    function assertString(input) {
        var isString = typeof input === 'string' || input instanceof String;

        if (!isString) {
            throw new TypeError('This library (validator.js) validates strings only');
        }
    }
    module.exports = exports['default'];
});

unwrapExports(assertString_1);

var toDate_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = toDate;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function toDate(date) {
        (0, _assertString2.default)(date);
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
    }
    module.exports = exports['default'];
});

unwrapExports(toDate_1);

var toFloat_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = toFloat;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function toFloat(str) {
        (0, _assertString2.default)(str);
        return parseFloat(str);
    }
    module.exports = exports['default'];
});

unwrapExports(toFloat_1);

var toInt_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = toInt;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function toInt(str, radix) {
        (0, _assertString2.default)(str);
        return parseInt(str, radix || 10);
    }
    module.exports = exports['default'];
});

unwrapExports(toInt_1);

var toBoolean_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = toBoolean;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function toBoolean(str, strict) {
        (0, _assertString2.default)(str);
        if (strict) {
            return str === '1' || str === 'true';
        }
        return str !== '0' && str !== 'false' && str !== '';
    }
    module.exports = exports['default'];
});

unwrapExports(toBoolean_1);

var equals_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = equals;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function equals(str, comparison) {
        (0, _assertString2.default)(str);
        return str === comparison;
    }
    module.exports = exports['default'];
});

unwrapExports(equals_1);

var toString_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    exports.default = toString;
    function toString(input) {
        if ((typeof input === 'undefined' ? 'undefined' : _typeof$$1(input)) === 'object' && input !== null) {
            if (typeof input.toString === 'function') {
                input = input.toString();
            } else {
                input = '[object Object]';
            }
        } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
            input = '';
        }
        return String(input);
    }
    module.exports = exports['default'];
});

unwrapExports(toString_1);

var contains_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = contains;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _toString2 = _interopRequireDefault(toString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function contains(str, elem) {
        (0, _assertString2.default)(str);
        return str.indexOf((0, _toString2.default)(elem)) >= 0;
    }
    module.exports = exports['default'];
});

unwrapExports(contains_1);

var matches_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = matches;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function matches(str, pattern, modifiers) {
        (0, _assertString2.default)(str);
        if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
            pattern = new RegExp(pattern, modifiers);
        }
        return pattern.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(matches_1);

var merge_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = merge;
    function merge() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var defaults$$1 = arguments[1];

        for (var key in defaults$$1) {
            if (typeof obj[key] === 'undefined') {
                obj[key] = defaults$$1[key];
            }
        }
        return obj;
    }
    module.exports = exports['default'];
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    exports.default = isByteLength;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable prefer-rest-params */
    function isByteLength(str, options) {
        (0, _assertString2.default)(str);
        var min = void 0;
        var max = void 0;
        if ((typeof options === 'undefined' ? 'undefined' : _typeof$$1(options)) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else {
            // backwards compatibility: isByteLength(str, min [, max])
            min = arguments[1];
            max = arguments[2];
        }
        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === 'undefined' || len <= max);
    }
    module.exports = exports['default'];
});

unwrapExports(isByteLength_1);

var isFQDN = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isFDQN;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _merge2 = _interopRequireDefault(merge_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var default_fqdn_options = {
        require_tld: true,
        allow_underscores: false,
        allow_trailing_dot: false
    };

    function isFDQN(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_fqdn_options);

        /* Remove the optional trailing dot before checking validity */
        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
            str = str.substring(0, str.length - 1);
        }
        var parts = str.split('.');
        if (options.require_tld) {
            var tld = parts.pop();
            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
                return false;
            }
            // disallow spaces
            if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
                return false;
            }
        }
        for (var part, i = 0; i < parts.length; i++) {
            part = parts[i];
            if (options.allow_underscores) {
                part = part.replace(/_/g, '');
            }
            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
                return false;
            }
            // disallow full-width chars
            if (/[\uff01-\uff5e]/.test(part)) {
                return false;
            }
            if (part[0] === '-' || part[part.length - 1] === '-') {
                return false;
            }
        }
        return true;
    }
    module.exports = exports['default'];
});

unwrapExports(isFQDN);

var isEmail_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isEmail;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _merge2 = _interopRequireDefault(merge_1);

    var _isByteLength2 = _interopRequireDefault(isByteLength_1);

    var _isFQDN2 = _interopRequireDefault(isFQDN);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var default_email_options = {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true
    };

    /* eslint-disable max-len */
    /* eslint-disable no-control-regex */
    var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    /* eslint-enable max-len */
    /* eslint-enable no-control-regex */

    function isEmail(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_email_options);

        if (options.require_display_name || options.allow_display_name) {
            var display_email = str.match(displayName);
            if (display_email) {
                str = display_email[1];
            } else if (options.require_display_name) {
                return false;
            }
        }

        var parts = str.split('@');
        var domain = parts.pop();
        var user = parts.join('@');

        var lower_domain = domain.toLowerCase();
        if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
            user = user.replace(/\./g, '').toLowerCase();
        }

        if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
            return false;
        }

        if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
            return false;
        }

        if (user[0] === '"') {
            user = user.slice(1, user.length - 1);
            return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
        }

        var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

        var user_parts = user.split('.');
        for (var i = 0; i < user_parts.length; i++) {
            if (!pattern.test(user_parts[i])) {
                return false;
            }
        }

        return true;
    }
    module.exports = exports['default'];
});

unwrapExports(isEmail_1);

var isIP_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isIP;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var ipv6Block = /^[0-9A-F]{1,4}$/i;

    function isIP(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        (0, _assertString2.default)(str);
        version = String(version);
        if (!version) {
            return isIP(str, 4) || isIP(str, 6);
        } else if (version === '4') {
            if (!ipv4Maybe.test(str)) {
                return false;
            }
            var parts = str.split('.').sort(function (a, b) {
                return a - b;
            });
            return parts[3] <= 255;
        } else if (version === '6') {
            var blocks = str.split(':');
            var foundOmissionBlock = false; // marker to indicate ::

            // At least some OS accept the last 32 bits of an IPv6 address
            // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
            // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
            // and '::a.b.c.d' is deprecated, but also valid.
            var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
            var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

            if (blocks.length > expectedNumberOfBlocks) {
                return false;
            }
            // initial or final ::
            if (str === '::') {
                return true;
            } else if (str.substr(0, 2) === '::') {
                blocks.shift();
                blocks.shift();
                foundOmissionBlock = true;
            } else if (str.substr(str.length - 2) === '::') {
                blocks.pop();
                blocks.pop();
                foundOmissionBlock = true;
            }

            for (var i = 0; i < blocks.length; ++i) {
                // test for a :: which can not be at the string start/end
                // since those cases have been handled above
                if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
                    if (foundOmissionBlock) {
                        return false; // multiple :: in address
                    }
                    foundOmissionBlock = true;
                } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
                    // it has been checked before that the last
                    // block is a valid IPv4 address
                } else if (!ipv6Block.test(blocks[i])) {
                    return false;
                }
            }
            if (foundOmissionBlock) {
                return blocks.length >= 1;
            }
            return blocks.length === expectedNumberOfBlocks;
        }
        return false;
    }
    module.exports = exports['default'];
});

unwrapExports(isIP_1);

var isURL_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isURL;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _isFQDN2 = _interopRequireDefault(isFQDN);

    var _isIP2 = _interopRequireDefault(isIP_1);

    var _merge2 = _interopRequireDefault(merge_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var default_url_options = {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false
    };

    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

    function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    }

    function checkHost(host, matches) {
        for (var i = 0; i < matches.length; i++) {
            var match = matches[i];
            if (host === match || isRegExp(match) && match.test(host)) {
                return true;
            }
        }
        return false;
    }

    function isURL(url, options) {
        (0, _assertString2.default)(url);
        if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
            return false;
        }
        if (url.indexOf('mailto:') === 0) {
            return false;
        }
        options = (0, _merge2.default)(options, default_url_options);
        var protocol = void 0,
            auth = void 0,
            host = void 0,
            hostname = void 0,
            port = void 0,
            port_str = void 0,
            split = void 0,
            ipv6 = void 0;

        split = url.split('#');
        url = split.shift();

        split = url.split('?');
        url = split.shift();

        split = url.split('://');
        if (split.length > 1) {
            protocol = split.shift();
            if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
                return false;
            }
        } else if (options.require_protocol) {
            return false;
        } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
            split[0] = url.substr(2);
        }
        url = split.join('://');

        if (url === '') {
            return false;
        }

        split = url.split('/');
        url = split.shift();

        if (url === '' && !options.require_host) {
            return true;
        }

        split = url.split('@');
        if (split.length > 1) {
            auth = split.shift();
            if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
                return false;
            }
        }
        hostname = split.join('@');

        port_str = null;
        ipv6 = null;
        var ipv6_match = hostname.match(wrapped_ipv6);
        if (ipv6_match) {
            host = '';
            ipv6 = ipv6_match[1];
            port_str = ipv6_match[2] || null;
        } else {
            split = hostname.split(':');
            host = split.shift();
            if (split.length) {
                port_str = split.join(':');
            }
        }

        if (port_str !== null) {
            port = parseInt(port_str, 10);
            if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
                return false;
            }
        }

        if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
            return false;
        }

        host = host || ipv6;

        if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
            return false;
        }
        if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
            return false;
        }

        return true;
    }
    module.exports = exports['default'];
});

unwrapExports(isURL_1);

var isMACAddress_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isMACAddress;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

    function isMACAddress(str) {
        (0, _assertString2.default)(str);
        return macAddress.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isMACAddress_1);

var isBoolean_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isBoolean;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isBoolean(str) {
        (0, _assertString2.default)(str);
        return ['true', 'false', '1', '0'].indexOf(str) >= 0;
    }
    module.exports = exports['default'];
});

unwrapExports(isBoolean_1);

var alpha_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var alpha = exports.alpha = {
        'en-US': /^[A-Z]+$/i,
        'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        'da-DK': /^[A-ZÆØÅ]+$/i,
        'de-DE': /^[A-ZÄÖÜß]+$/i,
        'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
        'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
        'nb-NO': /^[A-ZÆØÅ]+$/i,
        'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
        'nn-NO': /^[A-ZÆØÅ]+$/i,
        'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
        'ru-RU': /^[А-ЯЁ]+$/i,
        'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
        'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
        'sv-SE': /^[A-ZÅÄÖ]+$/i,
        'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
        'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
    };

    var alphanumeric = exports.alphanumeric = {
        'en-US': /^[0-9A-Z]+$/i,
        'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        'da-DK': /^[0-9A-ZÆØÅ]+$/i,
        'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
        'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
        'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
        'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
        'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
        'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
        'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
        'ru-RU': /^[0-9А-ЯЁ]+$/i,
        'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
        'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
        'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
        'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
        'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
    };

    var decimal = exports.decimal = {
        'en-US': '.',
        ar: '٫'
    };

    var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

    for (var locale, i = 0; i < englishLocales.length; i++) {
        locale = 'en-' + englishLocales[i];
        alpha[locale] = alpha['en-US'];
        alphanumeric[locale] = alphanumeric['en-US'];
        decimal[locale] = decimal['en-US'];
    }

    // Source: http://www.localeplanet.com/java/
    var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

    for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
        _locale = 'ar-' + arabicLocales[_i];
        alpha[_locale] = alpha.ar;
        alphanumeric[_locale] = alphanumeric.ar;
        decimal[_locale] = decimal.ar;
    }

    // Source: https://en.wikipedia.org/wiki/Decimal_mark
    var dotDecimal = exports.dotDecimal = [];
    var commaDecimal = exports.commaDecimal = ['cs-CZ', 'da-DK', 'de-DE', 'es-ES', 'fr-FR', 'it-IT', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-Pl', 'pt-PT', 'ru-RU', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];

    for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
        decimal[dotDecimal[_i2]] = decimal['en-US'];
    }

    for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
        decimal[commaDecimal[_i3]] = ',';
    }

    alpha['pt-BR'] = alpha['pt-PT'];
    alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
    decimal['pt-BR'] = decimal['pt-PT'];
});

unwrapExports(alpha_1);

var isAlpha_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isAlpha;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isAlpha(str) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

        (0, _assertString2.default)(str);
        if (locale in alpha_1.alpha) {
            return alpha_1.alpha[locale].test(str);
        }
        throw new Error('Invalid locale \'' + locale + '\'');
    }
    module.exports = exports['default'];
});

unwrapExports(isAlpha_1);

var isAlphanumeric_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isAlphanumeric;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isAlphanumeric(str) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

        (0, _assertString2.default)(str);
        if (locale in alpha_1.alphanumeric) {
            return alpha_1.alphanumeric[locale].test(str);
        }
        throw new Error('Invalid locale \'' + locale + '\'');
    }
    module.exports = exports['default'];
});

unwrapExports(isAlphanumeric_1);

var isNumeric_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isNumeric;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var numeric = /^[-+]?[0-9]+$/;

    function isNumeric(str) {
        (0, _assertString2.default)(str);
        return numeric.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isNumeric_1);

var isInt_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isInt;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
    var intLeadingZeroes = /^[-+]?[0-9]+$/;

    function isInt(str, options) {
        (0, _assertString2.default)(str);
        options = options || {};

        // Get the regex to use for testing, based on whether
        // leading zeroes are allowed or not.
        var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

        // Check min/max/lt/gt
        var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
        var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
        var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
        var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

        return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
    }
    module.exports = exports['default'];
});

unwrapExports(isInt_1);

var isPort_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isPort;

    var _isInt2 = _interopRequireDefault(isInt_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isPort(str) {
        return (0, _isInt2.default)(str, { min: 0, max: 65535 });
    }
    module.exports = exports['default'];
});

unwrapExports(isPort_1);

var isLowercase_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isLowercase;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isLowercase(str) {
        (0, _assertString2.default)(str);
        return str === str.toLowerCase();
    }
    module.exports = exports['default'];
});

unwrapExports(isLowercase_1);

var isUppercase_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isUppercase;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isUppercase(str) {
        (0, _assertString2.default)(str);
        return str === str.toUpperCase();
    }
    module.exports = exports['default'];
});

unwrapExports(isUppercase_1);

var isAscii_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isAscii;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable no-control-regex */
    var ascii = /^[\x00-\x7F]+$/;
    /* eslint-enable no-control-regex */

    function isAscii(str) {
        (0, _assertString2.default)(str);
        return ascii.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isAscii_1);

var isFullWidth_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.fullWidth = undefined;
    exports.default = isFullWidth;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

    function isFullWidth(str) {
        (0, _assertString2.default)(str);
        return fullWidth.test(str);
    }
});

unwrapExports(isFullWidth_1);

var isHalfWidth_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.halfWidth = undefined;
    exports.default = isHalfWidth;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

    function isHalfWidth(str) {
        (0, _assertString2.default)(str);
        return halfWidth.test(str);
    }
});

unwrapExports(isHalfWidth_1);

var isVariableWidth_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isVariableWidth;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isVariableWidth(str) {
        (0, _assertString2.default)(str);
        return isFullWidth_1.fullWidth.test(str) && isHalfWidth_1.halfWidth.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isVariableWidth_1);

var isMultibyte_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isMultibyte;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable no-control-regex */
    var multibyte = /[^\x00-\x7F]/;
    /* eslint-enable no-control-regex */

    function isMultibyte(str) {
        (0, _assertString2.default)(str);
        return multibyte.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isMultibyte_1);

var isSurrogatePair_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isSurrogatePair;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    function isSurrogatePair(str) {
        (0, _assertString2.default)(str);
        return surrogatePair.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isSurrogatePair_1);

var isFloat_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isFloat;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isFloat(str, options) {
        (0, _assertString2.default)(str);
        options = options || {};
        var float = new RegExp('^(?:[-+])?(?:[0-9]+)?(?:\\' + (options.locale ? alpha_1.decimal[options.locale] : '.') + '[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$');
        if (str === '' || str === '.') {
            return false;
        }
        return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
    }
    module.exports = exports['default'];
});

unwrapExports(isFloat_1);

var isDecimal_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isDecimal;

    var _merge2 = _interopRequireDefault(merge_1);

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function decimalRegExp(options) {
        var regExp = new RegExp('^[-+]?([0-9]+)?(\\' + alpha_1.decimal[options.locale] + '[0-9]{' + options.decimal_digits + '})' + (options.force_decimal ? '' : '?') + '$');
        return regExp;
    }

    var default_decimal_options = {
        force_decimal: false,
        decimal_digits: '1,',
        locale: 'en-US'
    };

    var blacklist = ['', '-', '+'];

    function isDecimal(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_decimal_options);
        if (options.locale in alpha_1.decimal) {
            return !blacklist.includes(str.replace(/ /g, '')) && decimalRegExp(options).test(str);
        }
        throw new Error('Invalid locale \'' + options.locale + '\'');
    }
    module.exports = exports['default'];
});

unwrapExports(isDecimal_1);

var isHexadecimal_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isHexadecimal;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var hexadecimal = /^[0-9A-F]+$/i;

    function isHexadecimal(str) {
        (0, _assertString2.default)(str);
        return hexadecimal.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isHexadecimal_1);

var isDivisibleBy_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isDivisibleBy;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _toFloat2 = _interopRequireDefault(toFloat_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isDivisibleBy(str, num) {
        (0, _assertString2.default)(str);
        return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
    }
    module.exports = exports['default'];
});

unwrapExports(isDivisibleBy_1);

var isHexColor_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isHexColor;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

    function isHexColor(str) {
        (0, _assertString2.default)(str);
        return hexcolor.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isHexColor_1);

var isISRC_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isISRC;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    // see http://isrc.ifpi.org/en/isrc-standard/code-syntax
    var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

    function isISRC(str) {
        (0, _assertString2.default)(str);
        return isrc.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isISRC_1);

var isMD5_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isMD5;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var md5 = /^[a-f0-9]{32}$/;

    function isMD5(str) {
        (0, _assertString2.default)(str);
        return md5.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isMD5_1);

var isHash_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isHash;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var lengths = {
        md5: 32,
        md4: 32,
        sha1: 40,
        sha256: 64,
        sha384: 96,
        sha512: 128,
        ripemd128: 32,
        ripemd160: 40,
        tiger128: 32,
        tiger160: 40,
        tiger192: 48,
        crc32: 8,
        crc32b: 8
    };

    function isHash(str, algorithm) {
        (0, _assertString2.default)(str);
        var hash = new RegExp('^[a-f0-9]{' + lengths[algorithm] + '}$');
        return hash.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isHash_1);

var isJSON_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    exports.default = isJSON;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isJSON(str) {
        (0, _assertString2.default)(str);
        try {
            var obj = JSON.parse(str);
            return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof$$1(obj)) === 'object';
        } catch (e) {/* ignore */}
        return false;
    }
    module.exports = exports['default'];
});

unwrapExports(isJSON_1);

var isEmpty_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isEmpty;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isEmpty(str) {
        (0, _assertString2.default)(str);
        return str.length === 0;
    }
    module.exports = exports['default'];
});

unwrapExports(isEmpty_1);

var isLength_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    exports.default = isLength;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable prefer-rest-params */
    function isLength(str, options) {
        (0, _assertString2.default)(str);
        var min = void 0;
        var max = void 0;
        if ((typeof options === 'undefined' ? 'undefined' : _typeof$$1(options)) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else {
            // backwards compatibility: isLength(str, min [, max])
            min = arguments[1];
            max = arguments[2];
        }
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - surrogatePairs.length;
        return len >= min && (typeof max === 'undefined' || len <= max);
    }
    module.exports = exports['default'];
});

unwrapExports(isLength_1);

var isUUID_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isUUID;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var uuid = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };

    function isUUID(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

        (0, _assertString2.default)(str);
        var pattern = uuid[version];
        return pattern && pattern.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isUUID_1);

var isMongoId_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isMongoId;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _isHexadecimal2 = _interopRequireDefault(isHexadecimal_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isMongoId(str) {
        (0, _assertString2.default)(str);
        return (0, _isHexadecimal2.default)(str) && str.length === 24;
    }
    module.exports = exports['default'];
});

unwrapExports(isMongoId_1);

var isAfter_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isAfter;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _toDate2 = _interopRequireDefault(toDate_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isAfter(str) {
        var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

        (0, _assertString2.default)(str);
        var comparison = (0, _toDate2.default)(date);
        var original = (0, _toDate2.default)(str);
        return !!(original && comparison && original > comparison);
    }
    module.exports = exports['default'];
});

unwrapExports(isAfter_1);

var isBefore_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isBefore;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _toDate2 = _interopRequireDefault(toDate_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isBefore(str) {
        var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

        (0, _assertString2.default)(str);
        var comparison = (0, _toDate2.default)(date);
        var original = (0, _toDate2.default)(str);
        return !!(original && comparison && original < comparison);
    }
    module.exports = exports['default'];
});

unwrapExports(isBefore_1);

var isIn_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    exports.default = isIn;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _toString2 = _interopRequireDefault(toString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isIn(str, options) {
        (0, _assertString2.default)(str);
        var i = void 0;
        if (Object.prototype.toString.call(options) === '[object Array]') {
            var array = [];
            for (i in options) {
                if ({}.hasOwnProperty.call(options, i)) {
                    array[i] = (0, _toString2.default)(options[i]);
                }
            }
            return array.indexOf(str) >= 0;
        } else if ((typeof options === 'undefined' ? 'undefined' : _typeof$$1(options)) === 'object') {
            return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === 'function') {
            return options.indexOf(str) >= 0;
        }
        return false;
    }
    module.exports = exports['default'];
});

unwrapExports(isIn_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isCreditCard;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable max-len */
    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    /* eslint-enable max-len */

    function isCreditCard(str) {
        (0, _assertString2.default)(str);
        var sanitized = str.replace(/[- ]+/g, '');
        if (!creditCard.test(sanitized)) {
            return false;
        }
        var sum = 0;
        var digit = void 0;
        var tmpNum = void 0;
        var shouldDouble = void 0;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, i + 1);
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += tmpNum % 10 + 1;
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        return !!(sum % 10 === 0 ? sanitized : false);
    }
    module.exports = exports['default'];
});

unwrapExports(isCreditCard_1);

var isISIN_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isISIN;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

    function isISIN(str) {
        (0, _assertString2.default)(str);
        if (!isin.test(str)) {
            return false;
        }

        var checksumStr = str.replace(/[A-Z]/g, function (character) {
            return parseInt(character, 36);
        });

        var sum = 0;
        var digit = void 0;
        var tmpNum = void 0;
        var shouldDouble = true;
        for (var i = checksumStr.length - 2; i >= 0; i--) {
            digit = checksumStr.substring(i, i + 1);
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += tmpNum + 1;
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }

        return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
    }
    module.exports = exports['default'];
});

unwrapExports(isISIN_1);

var isISBN_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isISBN;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
    var isbn13Maybe = /^(?:[0-9]{13})$/;
    var factor = [1, 3];

    function isISBN(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        (0, _assertString2.default)(str);
        version = String(version);
        if (!version) {
            return isISBN(str, 10) || isISBN(str, 13);
        }
        var sanitized = str.replace(/[\s-]+/g, '');
        var checksum = 0;
        var i = void 0;
        if (version === '10') {
            if (!isbn10Maybe.test(sanitized)) {
                return false;
            }
            for (i = 0; i < 9; i++) {
                checksum += (i + 1) * sanitized.charAt(i);
            }
            if (sanitized.charAt(9) === 'X') {
                checksum += 10 * 10;
            } else {
                checksum += 10 * sanitized.charAt(9);
            }
            if (checksum % 11 === 0) {
                return !!sanitized;
            }
        } else if (version === '13') {
            if (!isbn13Maybe.test(sanitized)) {
                return false;
            }
            for (i = 0; i < 12; i++) {
                checksum += factor[i % 2] * sanitized.charAt(i);
            }
            if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
                return !!sanitized;
            }
        }
        return false;
    }
    module.exports = exports['default'];
});

unwrapExports(isISBN_1);

var isISSN_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isISSN;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var issn = '^\\d{4}-?\\d{3}[\\dX]$';

    function isISSN(str) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        (0, _assertString2.default)(str);
        var testIssn = issn;
        testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
        testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
        if (!testIssn.test(str)) {
            return false;
        }
        var issnDigits = str.replace('-', '');
        var position = 8;
        var checksum = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var digit = _step.value;

                var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
                checksum += digitValue * position;
                --position;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return checksum % 11 === 0;
    }
    module.exports = exports['default'];
});

unwrapExports(isISSN_1);

var isMobilePhone_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isMobilePhone;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable max-len */
    var phones = {
        'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
        'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
        'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
        'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
        'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
        'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
        'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
        'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
        'da-DK': /^(\+?45)?(\d{8})$/,
        'el-GR': /^(\+?30)?(69\d{8})$/,
        'en-AU': /^(\+?61|0)4\d{8}$/,
        'en-GB': /^(\+?44|0)7\d{9}$/,
        'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
        'en-IN': /^(\+?91|0)?[789]\d{9}$/,
        'en-KE': /^(\+?254|0)?[7]\d{8}$/,
        'en-NG': /^(\+?234|0)?[789]\d{9}$/,
        'en-NZ': /^(\+?64|0)2\d{7,9}$/,
        'en-UG': /^(\+?256|0)?[7]\d{8}$/,
        'en-RW': /^(\+?250|0)?[7]\d{8}$/,
        'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
        'en-ZA': /^(\+?27|0)\d{9}$/,
        'en-ZM': /^(\+?26)?09[567]\d{7}$/,
        'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
        'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
        'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
        'fr-FR': /^(\+?33|0)[67]\d{8}$/,
        'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
        'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
        'lt-LT': /^(\+370|8)\d{8}$/,
        'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
        'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
        'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
        'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
        'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
        'nb-NO': /^(\+?47)?[49]\d{7}$/,
        'nl-BE': /^(\+?32|0)4?\d{8}$/,
        'nn-NO': /^(\+?47)?[49]\d{7}$/,
        'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
        'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
        'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
        'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
        'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
        'ru-RU': /^(\+?7|8)?9\d{9}$/,
        'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
        'tr-TR': /^(\+?90|0)?5\d{9}$/,
        'uk-UA': /^(\+?38|8)?0\d{9}$/,
        'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
        'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
        'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
    };
    /* eslint-enable max-len */

    // aliases
    phones['en-CA'] = phones['en-US'];
    phones['fr-BE'] = phones['nl-BE'];
    phones['zh-HK'] = phones['en-HK'];

    function isMobilePhone(str, locale) {
        (0, _assertString2.default)(str);
        if (locale in phones) {
            return phones[locale].test(str);
        } else if (locale === 'any') {
            for (var key in phones) {
                if (phones.hasOwnProperty(key)) {
                    var phone = phones[key];
                    if (phone.test(str)) {
                        return true;
                    }
                }
            }
            return false;
        }
        throw new Error('Invalid locale \'' + locale + '\'');
    }
    module.exports = exports['default'];
});

unwrapExports(isMobilePhone_1);

var isCurrency_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isCurrency;

    var _merge2 = _interopRequireDefault(merge_1);

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function currencyRegex(options) {
        var decimal_digits = '\\d{' + options.digits_after_decimal[0] + '}';
        options.digits_after_decimal.forEach(function (digit, index) {
            if (index !== 0) decimal_digits = decimal_digits + '|\\d{' + digit + '}';
        });
        var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
            negative = '-?',
            whole_dollar_amount_without_sep = '[1-9]\\d*',
            whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
            valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
            whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
            decimal_amount = '(\\' + options.decimal_separator + '(' + decimal_digits + '))' + (options.require_decimal ? '' : '?');
        var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

        // default is negative sign before symbol, but there are two other options (besides parens)
        if (options.allow_negatives && !options.parens_for_negatives) {
            if (options.negative_sign_after_digits) {
                pattern += negative;
            } else if (options.negative_sign_before_digits) {
                pattern = negative + pattern;
            }
        }

        // South African Rand, for example, uses R 123 (space) and R-123 (no space)
        if (options.allow_negative_sign_placeholder) {
            pattern = '( (?!\\-))?' + pattern;
        } else if (options.allow_space_after_symbol) {
            pattern = ' ?' + pattern;
        } else if (options.allow_space_after_digits) {
            pattern += '( (?!$))?';
        }

        if (options.symbol_after_digits) {
            pattern += symbol;
        } else {
            pattern = symbol + pattern;
        }

        if (options.allow_negatives) {
            if (options.parens_for_negatives) {
                pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
            } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
                pattern = negative + pattern;
            }
        }

        // ensure there's a dollar and/or decimal amount, and that
        // it doesn't start with a space or a negative sign followed by a space
        return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
    }

    var default_currency_options = {
        symbol: '$',
        require_symbol: false,
        allow_space_after_symbol: false,
        symbol_after_digits: false,
        allow_negatives: true,
        parens_for_negatives: false,
        negative_sign_before_digits: false,
        negative_sign_after_digits: false,
        allow_negative_sign_placeholder: false,
        thousands_separator: ',',
        decimal_separator: '.',
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [2],
        allow_space_after_digits: false
    };

    function isCurrency(str, options) {
        (0, _assertString2.default)(str);
        options = (0, _merge2.default)(options, default_currency_options);
        return currencyRegex(options).test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isCurrency_1);

var isISO8601_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isISO8601;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    /* eslint-disable max-len */
    // from http://goo.gl/0ejHHW
    var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    /* eslint-enable max-len */

    function isISO8601(str) {
        (0, _assertString2.default)(str);
        return iso8601.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isISO8601_1);

var isBase64_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isBase64;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var notBase64 = /[^A-Z0-9+\/=]/i;

    function isBase64(str) {
        (0, _assertString2.default)(str);
        var len = str.length;
        if (!len || len % 4 !== 0 || notBase64.test(str)) {
            return false;
        }
        var firstPaddingChar = str.indexOf('=');
        return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
    }
    module.exports = exports['default'];
});

unwrapExports(isBase64_1);

var isDataURI_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isDataURI;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

    function isDataURI(str) {
        (0, _assertString2.default)(str);
        return dataURI.test(str);
    }
    module.exports = exports['default'];
});

unwrapExports(isDataURI_1);

var isLatLong = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function (str) {
        (0, _assertString2.default)(str);
        if (!str.includes(',')) return false;
        var pair = str.split(',');
        return lat.test(pair[0]) && long.test(pair[1]);
    };

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
    var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

    module.exports = exports['default'];
});

unwrapExports(isLatLong);

var isPostalCode = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.locales = undefined;

    exports.default = function (str, locale) {
        (0, _assertString2.default)(str);
        if (locale in patterns) {
            return patterns[locale].test(str);
        } else if (locale === 'any') {
            for (var key in patterns) {
                if (patterns.hasOwnProperty(key)) {
                    var pattern = patterns[key];
                    if (pattern.test(str)) {
                        return true;
                    }
                }
            }
            return false;
        }
        throw new Error('Invalid locale \'' + locale + '\'');
    };

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    // common patterns
    var threeDigit = /^\d{3}$/;
    var fourDigit = /^\d{4}$/;
    var fiveDigit = /^\d{5}$/;
    var sixDigit = /^\d{6}$/;

    var patterns = {
        AT: fourDigit,
        AU: sixDigit,
        BE: fourDigit,
        CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
        CH: fourDigit,
        CZ: /^\d{3}\s?\d{2}$/,
        DE: fiveDigit,
        DK: fourDigit,
        DZ: fiveDigit,
        ES: fiveDigit,
        FI: fiveDigit,
        FR: /^\d{2}\s?\d{3}$/,
        GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
        GR: /^\d{3}\s?\d{2}$/,
        IL: fiveDigit,
        IN: sixDigit,
        IS: threeDigit,
        IT: fiveDigit,
        JP: /^\d{3}\-\d{4}$/,
        KE: fiveDigit,
        LI: /^(948[5-9]|949[0-7])$/,
        MX: fiveDigit,
        NL: /^\d{4}\s?[a-z]{2}$/i,
        NO: fourDigit,
        PL: /^\d{2}\-\d{3}$/,
        PT: /^\d{4}(\-\d{3})?$/,
        RO: sixDigit,
        RU: sixDigit,
        SA: fiveDigit,
        SE: /^\d{3}\s?\d{2}$/,
        TW: /^\d{3}(\d{2})?$/,
        US: /^\d{5}(-\d{4})?$/,
        ZA: fourDigit,
        ZM: fiveDigit
    };

    var locales = exports.locales = Object.keys(patterns);
});

unwrapExports(isPostalCode);

var ltrim_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = ltrim;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function ltrim(str, chars) {
        (0, _assertString2.default)(str);
        var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
        return str.replace(pattern, '');
    }
    module.exports = exports['default'];
});

unwrapExports(ltrim_1);

var rtrim_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = rtrim;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function rtrim(str, chars) {
        (0, _assertString2.default)(str);
        var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

        var idx = str.length - 1;
        while (idx >= 0 && pattern.test(str[idx])) {
            idx--;
        }

        return idx < str.length ? str.substr(0, idx + 1) : str;
    }
    module.exports = exports['default'];
});

unwrapExports(rtrim_1);

var trim_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = trim;

    var _rtrim2 = _interopRequireDefault(rtrim_1);

    var _ltrim2 = _interopRequireDefault(ltrim_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function trim(str, chars) {
        return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
    }
    module.exports = exports['default'];
});

unwrapExports(trim_1);

var _escape = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = escape;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function escape(str) {
        (0, _assertString2.default)(str);
        return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
    }
    module.exports = exports['default'];
});

unwrapExports(_escape);

var _unescape = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = unescape;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function unescape(str) {
        (0, _assertString2.default)(str);
        return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
    }
    module.exports = exports['default'];
});

unwrapExports(_unescape);

var blacklist_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = blacklist;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function blacklist(str, chars) {
        (0, _assertString2.default)(str);
        return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
    }
    module.exports = exports['default'];
});

unwrapExports(blacklist_1);

var stripLow_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = stripLow;

    var _assertString2 = _interopRequireDefault(assertString_1);

    var _blacklist2 = _interopRequireDefault(blacklist_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function stripLow(str, keep_new_lines) {
        (0, _assertString2.default)(str);
        var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
        return (0, _blacklist2.default)(str, chars);
    }
    module.exports = exports['default'];
});

unwrapExports(stripLow_1);

var whitelist_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = whitelist;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function whitelist(str, chars) {
        (0, _assertString2.default)(str);
        return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
    }
    module.exports = exports['default'];
});

unwrapExports(whitelist_1);

var isWhitelisted_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = isWhitelisted;

    var _assertString2 = _interopRequireDefault(assertString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function isWhitelisted(str, chars) {
        (0, _assertString2.default)(str);
        for (var i = str.length - 1; i >= 0; i--) {
            if (chars.indexOf(str[i]) === -1) {
                return false;
            }
        }
        return true;
    }
    module.exports = exports['default'];
});

unwrapExports(isWhitelisted_1);

var normalizeEmail_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = normalizeEmail;

    var _merge2 = _interopRequireDefault(merge_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var default_normalize_email_options = {
        // The following options apply to all email addresses
        // Lowercases the local part of the email address.
        // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
        // The domain is always lowercased, as per RFC 1035
        all_lowercase: true,

        // The following conversions are specific to GMail
        // Lowercases the local part of the GMail address (known to be case-insensitive)
        gmail_lowercase: true,
        // Removes dots from the local part of the email address, as that's ignored by GMail
        gmail_remove_dots: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        gmail_remove_subaddress: true,
        // Conversts the googlemail.com domain to gmail.com
        gmail_convert_googlemaildotcom: true,

        // The following conversions are specific to Outlook.com / Windows Live / Hotmail
        // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
        outlookdotcom_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        outlookdotcom_remove_subaddress: true,

        // The following conversions are specific to Yahoo
        // Lowercases the local part of the Yahoo address (known to be case-insensitive)
        yahoo_lowercase: true,
        // Removes the subaddress (e.g. "-foo") from the email address
        yahoo_remove_subaddress: true,

        // The following conversions are specific to iCloud
        // Lowercases the local part of the iCloud address (known to be case-insensitive)
        icloud_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        icloud_remove_subaddress: true
    };

    // List of domains used by iCloud
    var icloud_domains = ['icloud.com', 'me.com'];

    // List of domains used by Outlook.com and its predecessors
    // This list is likely incomplete.
    // Partial reference:
    // https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
    var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

    // List of domains used by Yahoo Mail
    // This list is likely incomplete
    var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

    function normalizeEmail(email, options) {
        options = (0, _merge2.default)(options, default_normalize_email_options);

        var raw_parts = email.split('@');
        var domain = raw_parts.pop();
        var user = raw_parts.join('@');
        var parts = [user, domain];

        // The domain is always lowercased, as it's case-insensitive per RFC 1035
        parts[1] = parts[1].toLowerCase();

        if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
            // Address is GMail
            if (options.gmail_remove_subaddress) {
                parts[0] = parts[0].split('+')[0];
            }
            if (options.gmail_remove_dots) {
                parts[0] = parts[0].replace(/\./g, '');
            }
            if (!parts[0].length) {
                return false;
            }
            if (options.all_lowercase || options.gmail_lowercase) {
                parts[0] = parts[0].toLowerCase();
            }
            parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
        } else if (~icloud_domains.indexOf(parts[1])) {
            // Address is iCloud
            if (options.icloud_remove_subaddress) {
                parts[0] = parts[0].split('+')[0];
            }
            if (!parts[0].length) {
                return false;
            }
            if (options.all_lowercase || options.icloud_lowercase) {
                parts[0] = parts[0].toLowerCase();
            }
        } else if (~outlookdotcom_domains.indexOf(parts[1])) {
            // Address is Outlook.com
            if (options.outlookdotcom_remove_subaddress) {
                parts[0] = parts[0].split('+')[0];
            }
            if (!parts[0].length) {
                return false;
            }
            if (options.all_lowercase || options.outlookdotcom_lowercase) {
                parts[0] = parts[0].toLowerCase();
            }
        } else if (~yahoo_domains.indexOf(parts[1])) {
            // Address is Yahoo
            if (options.yahoo_remove_subaddress) {
                var components = parts[0].split('-');
                parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
            }
            if (!parts[0].length) {
                return false;
            }
            if (options.all_lowercase || options.yahoo_lowercase) {
                parts[0] = parts[0].toLowerCase();
            }
        } else if (options.all_lowercase) {
            // Any other address
            parts[0] = parts[0].toLowerCase();
        }
        return parts.join('@');
    }
    module.exports = exports['default'];
});

unwrapExports(normalizeEmail_1);

var validator_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _toDate2 = _interopRequireDefault(toDate_1);

    var _toFloat2 = _interopRequireDefault(toFloat_1);

    var _toInt2 = _interopRequireDefault(toInt_1);

    var _toBoolean2 = _interopRequireDefault(toBoolean_1);

    var _equals2 = _interopRequireDefault(equals_1);

    var _contains2 = _interopRequireDefault(contains_1);

    var _matches2 = _interopRequireDefault(matches_1);

    var _isEmail2 = _interopRequireDefault(isEmail_1);

    var _isURL2 = _interopRequireDefault(isURL_1);

    var _isMACAddress2 = _interopRequireDefault(isMACAddress_1);

    var _isIP2 = _interopRequireDefault(isIP_1);

    var _isFQDN2 = _interopRequireDefault(isFQDN);

    var _isBoolean2 = _interopRequireDefault(isBoolean_1);

    var _isAlpha2 = _interopRequireDefault(isAlpha_1);

    var _isAlphanumeric2 = _interopRequireDefault(isAlphanumeric_1);

    var _isNumeric2 = _interopRequireDefault(isNumeric_1);

    var _isPort2 = _interopRequireDefault(isPort_1);

    var _isLowercase2 = _interopRequireDefault(isLowercase_1);

    var _isUppercase2 = _interopRequireDefault(isUppercase_1);

    var _isAscii2 = _interopRequireDefault(isAscii_1);

    var _isFullWidth2 = _interopRequireDefault(isFullWidth_1);

    var _isHalfWidth2 = _interopRequireDefault(isHalfWidth_1);

    var _isVariableWidth2 = _interopRequireDefault(isVariableWidth_1);

    var _isMultibyte2 = _interopRequireDefault(isMultibyte_1);

    var _isSurrogatePair2 = _interopRequireDefault(isSurrogatePair_1);

    var _isInt2 = _interopRequireDefault(isInt_1);

    var _isFloat2 = _interopRequireDefault(isFloat_1);

    var _isDecimal2 = _interopRequireDefault(isDecimal_1);

    var _isHexadecimal2 = _interopRequireDefault(isHexadecimal_1);

    var _isDivisibleBy2 = _interopRequireDefault(isDivisibleBy_1);

    var _isHexColor2 = _interopRequireDefault(isHexColor_1);

    var _isISRC2 = _interopRequireDefault(isISRC_1);

    var _isMD2 = _interopRequireDefault(isMD5_1);

    var _isHash2 = _interopRequireDefault(isHash_1);

    var _isJSON2 = _interopRequireDefault(isJSON_1);

    var _isEmpty2 = _interopRequireDefault(isEmpty_1);

    var _isLength2 = _interopRequireDefault(isLength_1);

    var _isByteLength2 = _interopRequireDefault(isByteLength_1);

    var _isUUID2 = _interopRequireDefault(isUUID_1);

    var _isMongoId2 = _interopRequireDefault(isMongoId_1);

    var _isAfter2 = _interopRequireDefault(isAfter_1);

    var _isBefore2 = _interopRequireDefault(isBefore_1);

    var _isIn2 = _interopRequireDefault(isIn_1);

    var _isCreditCard2 = _interopRequireDefault(isCreditCard_1);

    var _isISIN2 = _interopRequireDefault(isISIN_1);

    var _isISBN2 = _interopRequireDefault(isISBN_1);

    var _isISSN2 = _interopRequireDefault(isISSN_1);

    var _isMobilePhone2 = _interopRequireDefault(isMobilePhone_1);

    var _isCurrency2 = _interopRequireDefault(isCurrency_1);

    var _isISO2 = _interopRequireDefault(isISO8601_1);

    var _isBase2 = _interopRequireDefault(isBase64_1);

    var _isDataURI2 = _interopRequireDefault(isDataURI_1);

    var _isLatLong2 = _interopRequireDefault(isLatLong);

    var _isPostalCode2 = _interopRequireDefault(isPostalCode);

    var _ltrim2 = _interopRequireDefault(ltrim_1);

    var _rtrim2 = _interopRequireDefault(rtrim_1);

    var _trim2 = _interopRequireDefault(trim_1);

    var _escape2 = _interopRequireDefault(_escape);

    var _unescape2 = _interopRequireDefault(_unescape);

    var _stripLow2 = _interopRequireDefault(stripLow_1);

    var _whitelist2 = _interopRequireDefault(whitelist_1);

    var _blacklist2 = _interopRequireDefault(blacklist_1);

    var _isWhitelisted2 = _interopRequireDefault(isWhitelisted_1);

    var _normalizeEmail2 = _interopRequireDefault(normalizeEmail_1);

    var _toString2 = _interopRequireDefault(toString_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var version = '9.0.0';

    var validator = {
        version: version,
        toDate: _toDate2.default,
        toFloat: _toFloat2.default,
        toInt: _toInt2.default,
        toBoolean: _toBoolean2.default,
        equals: _equals2.default,
        contains: _contains2.default,
        matches: _matches2.default,
        isEmail: _isEmail2.default,
        isURL: _isURL2.default,
        isMACAddress: _isMACAddress2.default,
        isIP: _isIP2.default,
        isFQDN: _isFQDN2.default,
        isBoolean: _isBoolean2.default,
        isAlpha: _isAlpha2.default,
        isAlphanumeric: _isAlphanumeric2.default,
        isNumeric: _isNumeric2.default,
        isPort: _isPort2.default,
        isLowercase: _isLowercase2.default,
        isUppercase: _isUppercase2.default,
        isAscii: _isAscii2.default,
        isFullWidth: _isFullWidth2.default,
        isHalfWidth: _isHalfWidth2.default,
        isVariableWidth: _isVariableWidth2.default,
        isMultibyte: _isMultibyte2.default,
        isSurrogatePair: _isSurrogatePair2.default,
        isInt: _isInt2.default,
        isFloat: _isFloat2.default,
        isDecimal: _isDecimal2.default,
        isHexadecimal: _isHexadecimal2.default,
        isDivisibleBy: _isDivisibleBy2.default,
        isHexColor: _isHexColor2.default,
        isISRC: _isISRC2.default,
        isMD5: _isMD2.default,
        isHash: _isHash2.default,
        isJSON: _isJSON2.default,
        isEmpty: _isEmpty2.default,
        isLength: _isLength2.default,
        isByteLength: _isByteLength2.default,
        isUUID: _isUUID2.default,
        isMongoId: _isMongoId2.default,
        isAfter: _isAfter2.default,
        isBefore: _isBefore2.default,
        isIn: _isIn2.default,
        isCreditCard: _isCreditCard2.default,
        isISIN: _isISIN2.default,
        isISBN: _isISBN2.default,
        isISSN: _isISSN2.default,
        isMobilePhone: _isMobilePhone2.default,
        isPostalCode: _isPostalCode2.default,
        isCurrency: _isCurrency2.default,
        isISO8601: _isISO2.default,
        isBase64: _isBase2.default,
        isDataURI: _isDataURI2.default,
        isLatLong: _isLatLong2.default,
        ltrim: _ltrim2.default,
        rtrim: _rtrim2.default,
        trim: _trim2.default,
        escape: _escape2.default,
        unescape: _unescape2.default,
        stripLow: _stripLow2.default,
        whitelist: _whitelist2.default,
        blacklist: _blacklist2.default,
        isWhitelisted: _isWhitelisted2.default,
        normalizeEmail: _normalizeEmail2.default,
        toString: _toString2.default
    };

    exports.default = validator;
    module.exports = exports['default'];
});

var validator = unwrapExports(validator_1);

var required = function required(value) {
    return !!value;
};

var customValidators = Object.freeze({
    required: required
});

var defaultConfig = {
    validators: Object.assign({}, validator, customValidators),
    validations: {},
    defaultValidationError: 'Campo inválido',
    APIBaseUrl: 'http://cliente.tuneupprocess.com/webapi/api'
};

var asyncGenerator$1 = function () {
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
        wrap: function wrap(fn) {
            return function () {
                return new AsyncGenerator(fn.apply(this, arguments));
            };
        },
        await: function _await(value) {
            return new AwaitValue(value);
        }
    };
}();

var classCallCheck$1 = function classCallCheck$$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass$1 = function () {
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

var defineProperty$1 = function defineProperty$$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
};

var slicedToArray$1 = function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

var toConsumableArray$1 = function toConsumableArray$$1(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return Array.from(arr);
    }
};

var ConfigService = function () {
    function ConfigService() {
        classCallCheck$1(this, ConfigService);

        Object.assign(this, defaultConfig);
    }

    createClass$1(ConfigService, [{
        key: 'addValidators',
        value: function addValidators(newValidators) {
            Object.assign(this._validators, newValidators);
        }
    }, {
        key: 'addValidations',
        value: function addValidations(newValidations) {
            Object.assign(this._validations, newValidations);
        }
    }, {
        key: 'validators',
        get: function get$$1() {
            return this._validators;
        },
        set: function set$$1(value) {
            this._validators = value;
        }
    }, {
        key: 'validations',
        get: function get$$1() {
            return this._validations;
        },
        set: function set$$1(value) {
            this._validations = value;
        }
    }, {
        key: 'defaultValidationError',
        get: function get$$1() {
            return this._defaultValidationError;
        },
        set: function set$$1(value) {
            this._defaultValidationError = value;
        }
    }, {
        key: 'APIBaseUrl',
        get: function get$$1() {
            return this._APIBaseUrl;
        },
        set: function set$$1(value) {
            this._APIBaseUrl = value;
        }
    }]);
    return ConfigService;
}();

var configService = new ConfigService();

var _dec$16;
var _class$16;

//import {BASE_URL} from './baseurl';

var APIInterceptor = (_dec$16 = core_1.Injectable(), _dec$16(_class$16 = function () {
    function APIInterceptor() {
        classCallCheck$1(this, APIInterceptor);
    }

    createClass$1(APIInterceptor, [{
        key: 'intercept',
        value: function intercept(req, next) {
            var apiReq = req.clone({ url: configService.APIBaseUrl + '/' + req.url });
            return next.handle(apiReq);
        }
    }]);
    return APIInterceptor;
}()) || _class$16);

var APIInterceptorProvider = {
    provide: http.HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
};

var _dec$1$1;
var _class$1$1;

var SafeHtmlPipe = (_dec$1$1 = core_1.Pipe({ name: 'safeHtml' }), _dec$1$1(_class$1$1 = function () {
    function SafeHtmlPipe(sanitizer) {
        classCallCheck$1(this, SafeHtmlPipe);

        this.sanitizer = sanitizer;
    }

    createClass$1(SafeHtmlPipe, [{
        key: 'transform',
        value: function transform(html) {
            if (html === '') {
                return '';
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(html);
        }
    }]);
    return SafeHtmlPipe;
}()) || _class$1$1);
Reflect.defineMetadata('design:paramtypes', [platformBrowser.DomSanitizer], SafeHtmlPipe);

var _dec$2$1;
var _class$2$1;

var NAMESPACE = 'tuneUp';
var SEPARATOR = '#';

var ModuleLoader = (_dec$2$1 = core_1.Injectable(), _dec$2$1(_class$2$1 = function () {
    function ModuleLoader(compiler) {
        classCallCheck$1(this, ModuleLoader);

        this.compiler = compiler;
    }

    createClass$1(ModuleLoader, [{
        key: 'load',
        value: function load(path) {
            var _this = this;

            var _splitPath = this.splitPath(path),
                modulePath = _splitPath.modulePath,
                moduleNamespace = _splitPath.moduleNamespace,
                moduleName = _splitPath.moduleName;

            return new Promise(function (resolve, reject) {
                var loadedModule = window[NAMESPACE] && window[NAMESPACE][moduleNamespace];
                if (loadedModule) {
                    resolve(loadedModule);
                }
                var script = document.createElement('script');
                script.src = modulePath;
                script.onload = function () {
                    _this.compiler.compileModuleAsync(window[NAMESPACE][moduleNamespace][moduleName]).then(function (ngModule) {
                        script.remove();
                        resolve(ngModule);
                    }).catch(function (error) {
                        reject(error);
                    });
                };
                script.onerror = function (error) {
                    reject('Could not load ' + path);
                };
                document.head.appendChild(script);
            });
        }
    }, {
        key: 'splitPath',
        value: function splitPath(path) {
            var _path$split = path.split(SEPARATOR),
                _path$split2 = slicedToArray$1(_path$split, 3),
                modulePath = _path$split2[0],
                moduleNamespace = _path$split2[1],
                moduleName = _path$split2[2];

            return { modulePath: modulePath, moduleNamespace: moduleNamespace, moduleName: moduleName };
        }
    }]);
    return ModuleLoader;
}()) || _class$2$1);
Reflect.defineMetadata('design:paramtypes', [core_1.Compiler], ModuleLoader);

var ModuleLoaderProvider = {
    provide: core_1.NgModuleFactoryLoader,
    useClass: ModuleLoader
};

var _dec$3$1;
var _class$3$1;

var primengModules = Object.values(vendor.primengExports).filter(function (func) {
    return func.name && func.name.endsWith('Module');
});

var PrimengModule = (_dec$3$1 = core_1.NgModule({
    imports: primengModules,
    exports: primengModules
}), _dec$3$1(_class$3$1 = function PrimengModule() {
    classCallCheck$1(this, PrimengModule);
}) || _class$3$1);

var html$6 = "<ng-container *ngIf=\"control.dirty && !control.valid\">\r\n  <p *ngFor=\"let error of getErrors()\" class=\"tn-validation--error\">\r\n    {{error}}\r\n  </p>\r\n</ng-container>\r\n";

__$styleInject$1(".tn-validation--error{color:red;font-size:12px;font-size:.75rem;margin-bottom:8px}", undefined);

var _dec$4$1;
var _dec2$2;
var _class$4$1;
var _class2$2;
var _descriptor$2;

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

var ValidationErrorComponent = (_dec$4$1 = core_1.Component({
    selector: 'tn-validation-error',
    template: html$6
}), _dec2$2 = core_1.Input(), _dec$4$1(_class$4$1 = (_class2$2 = function () {
    function ValidationErrorComponent() {
        classCallCheck$1(this, ValidationErrorComponent);

        _initDefineProp$2(this, 'control', _descriptor$2, this);
    }

    createClass$1(ValidationErrorComponent, [{
        key: 'getErrors',
        value: function getErrors() {
            return Object.values(this.control && this.control.errors || {});
        }
    }]);
    return ValidationErrorComponent;
}(), _descriptor$2 = _applyDecoratedDescriptor$2(_class2$2.prototype, 'control', [_dec2$2], {
    enumerable: true,
    initializer: function initializer() {
        return this.control;
    }
}), _class2$2)) || _class$4$1);

var _dec$5$1;
var _dec2$1$1;
var _class$5$1;
var _class2$1$1;
var _descriptor$1$1;

function _initDefineProp$1$1(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$1$1(target, property, decorators, descriptor, context) {
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

var NG_VALIDATORS_PROVIDER = {
    provide: forms.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () {
        return Rule;
    }),
    multi: true
};

var Rule = (_dec$5$1 = core_1.Directive({
    selector: '[rule][ngModel]',
    providers: [NG_VALIDATORS_PROVIDER]
}), _dec2$1$1 = core_1.Input('rule'), _dec$5$1(_class$5$1 = (_class2$1$1 = function () {
    function Rule() {
        classCallCheck$1(this, Rule);

        _initDefineProp$1$1(this, 'path', _descriptor$1$1, this);

        this._subscribersCache = [];
    }

    createClass$1(Rule, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            this.validationFunctions = this._getValidationFunctions();
        }
    }, {
        key: 'validate',
        value: function validate(control) {
            var errors = forms.Validators.compose(this.validationFunctions)(control);
            return errors;
        }
    }, {
        key: '_getValidationFunctions',
        value: function _getValidationFunctions() {
            var _this = this;

            return this._getValidations().map(function (validationObj) {
                var _getValidationParams2 = _this._getValidationParams(validationObj),
                    func = _getValidationParams2.func,
                    args = _getValidationParams2.args,
                    modelArgs = _getValidationParams2.modelArgs,
                    msg = _getValidationParams2.msg;

                return _this._createValidatorFunction(args, func, modelArgs, msg);
            });
        }
    }, {
        key: '_createValidatorFunction',
        value: function _createValidatorFunction(args, func, modelArgs, msg) {
            var _this2 = this;

            return function (control) {
                var scope = {};
                var modelValues = modelArgs[0] ? _this2._handleModelValues(modelArgs, control) : [];
                var thisArgs = [control.value || ''].concat(toConsumableArray$1(args), toConsumableArray$1(modelValues));
                return func.apply(scope, thisArgs) ? null : defineProperty$1({}, func.name, msg);
            };
        }
    }, {
        key: '_getValidations',
        value: function _getValidations() {
            var keys = this.path.split('.');
            var entity = keys[0];
            var field = keys[1];
            return configService.validations[entity][field];
        }
    }, {
        key: '_getValidationParams',
        value: function _getValidationParams(validationObj) {
            var validationName = this._getValidatonName(validationObj);
            var validation = validationObj[validationName];
            var allArgs = validation.arguments || [];
            var validators = configService.validators;
            return {
                func: validators[validationName],
                args: allArgs.filter(function (c) {
                    return !Array.isArray(c);
                }),
                modelArgs: allArgs.filter(function (c) {
                    return Array.isArray(c);
                }).map(function (c) {
                    return c[0];
                }),
                msg: validation.message || configService.defaultValidationError
            };
        }
    }, {
        key: '_getCheckControlFunction',
        value: function _getCheckControlFunction() {
            return function (control) {
                control.updateValueAndValidity();
            };
        }
    }, {
        key: '_subscribeOnValueChanges',
        value: function _subscribeOnValueChanges(modelArg, control) {
            if (!this._subscribersCache.includes(modelArg)) {
                var checkControl = this._getCheckControlFunction();
                var target = control.parent.controls[modelArg].valueChanges;
                this._subscribersCache.push(modelArg);
                target.subscribe(function () {
                    return checkControl(control);
                });
            }
        }
    }, {
        key: '_getValidatonName',
        value: function _getValidatonName(validationObj) {
            return Object.keys(validationObj)[0];
        }
    }, {
        key: '_handleModelValues',
        value: function _handleModelValues(modelArgs, control) {
            var _this3 = this;

            return modelArgs.map(function (modelArg) {
                var modelArgValue = control.parent.controls[modelArg].value || '';
                _this3._subscribeOnValueChanges(modelArg, control);
                return modelArgValue;
            });
        }
    }]);
    return Rule;
}(), _descriptor$1$1 = _applyDecoratedDescriptor$1$1(_class2$1$1.prototype, 'path', [_dec2$1$1], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _class2$1$1)) || _class$5$1);

"use strict";
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;
var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
var _root = __window || __global || __self;
var root_1 = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();

var root = {
    root: root_1
};

"use strict";
function isFunction(x) {
    return typeof x === 'function';
}
var isFunction_2 = isFunction;

var isFunction_1 = {
    isFunction: isFunction_2
};

"use strict";
var isArray_1 = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
};

var isArray = {
    isArray: isArray_1
};

"use strict";
function isObject(x) {
    return x != null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
}
var isObject_2 = isObject;

var isObject_1 = {
    isObject: isObject_2
};

"use strict";
// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject_1 = { e: {} };

var errorObject = {
    errorObject: errorObject_1
};

"use strict";

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    } catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;

var tryCatch_1 = {
    tryCatch: tryCatch_2
};

"use strict";
var __extends$2 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = function (_super) {
    __extends$2(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error);
var UnsubscriptionError_2 = UnsubscriptionError;

var UnsubscriptionError_1 = {
    UnsubscriptionError: UnsubscriptionError_2
};

"use strict";

/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        } else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || teardown === Subscription.EMPTY) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                } else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        } else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        } else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription());
    return Subscription;
}();
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
    }, []);
}

var Subscription_1 = {
    Subscription: Subscription_2
};

"use strict";
var empty = {
    closed: true,
    next: function next(value) {},
    error: function error(err) {
        throw err;
    },
    complete: function complete() {}
};

var Observer = {
    empty: empty
};

var rxSubscriber = createCommonjsModule(function (module, exports) {
    "use strict";

    var _Symbol = root.root.Symbol;
    exports.rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
    /**
     * @deprecated use rxSubscriber instead
     */
    exports.$$rxSubscriber = exports.rxSubscriber;
});

"use strict";
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = function (_super) {
    __extends$1(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer.empty;
                    break;
                }
                if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof(destinationOrNext)) === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    } else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () {
        return this;
    };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription);
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = function (_super) {
    __extends$1(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            } else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function wrappedComplete() {
                    return _this._complete.call(_this._context);
                };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            } else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber);

var Subscriber_1 = {
    Subscriber: Subscriber_2
};

"use strict";

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;

var toSubscriber_1 = {
    toSubscriber: toSubscriber_2
};

var observable = createCommonjsModule(function (module, exports) {
    "use strict";

    function getSymbolObservable(context) {
        var $$observable;
        var _Symbol2 = context.Symbol;
        if (typeof _Symbol2 === 'function') {
            if (_Symbol2.observable) {
                $$observable = _Symbol2.observable;
            } else {
                $$observable = _Symbol2('observable');
                _Symbol2.observable = $$observable;
            }
        } else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    exports.getSymbolObservable = getSymbolObservable;
    exports.observable = getSymbolObservable(root.root);
    /**
     * @deprecated use observable instead
     */
    exports.$$observable = exports.observable;
});

"use strict";

/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        } else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            } else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    } catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                } else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
var Observable_2 = Observable;

var Observable_1 = {
    Observable: Observable_2
};

"use strict";
var __extends$3 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = function (_super) {
    __extends$3(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error);
var ObjectUnsubscribedError_2 = ObjectUnsubscribedError;

var ObjectUnsubscribedError_1 = {
    ObjectUnsubscribedError: ObjectUnsubscribedError_2
};

"use strict";
var __extends$4 = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = function (_super) {
    __extends$4(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription);
var SubjectSubscription_2 = SubjectSubscription;

var SubjectSubscription_1 = {
    SubjectSubscription: SubjectSubscription_2
};

"use strict";
var __extends = commonjsGlobal && commonjsGlobal.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber);
/**
 * @class Subject<T>
 */
var Subject = function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        } else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        } else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable);
var Subject_2 = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        } else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject);

var _dec$7$1;
var _class$7$1;

var notificationTypes = {
    success: 'success',
    info: 'info',
    warn: 'warn',
    error: 'error'
};

var NotificationsService = (_dec$7$1 = core_1.Injectable(), _dec$7$1(_class$7$1 = function () {
    function NotificationsService() {
        classCallCheck$1(this, NotificationsService);

        this.notificationChange = new Subject_2();
    }

    createClass$1(NotificationsService, [{
        key: '_notify',
        value: function _notify(severity, summary, detail) {
            this.notificationChange.next({ severity: severity, summary: summary, detail: detail });
        }
    }, {
        key: 'success',
        value: function success(summary, detail) {
            this._notify(notificationTypes.success, summary, detail);
        }
    }, {
        key: 'info',
        value: function info(summary, detail) {
            this._notify(notificationTypes.info, summary, detail);
        }
    }, {
        key: 'warn',
        value: function warn(summary, detail) {
            this._notify(notificationTypes.warn, summary, detail);
        }
    }, {
        key: 'error',
        value: function error(summary, detail) {
            this._notify(notificationTypes.error, summary, detail);
        }
    }]);
    return NotificationsService;
}()) || _class$7$1);

var html$1$1 = "<p-growl [(value)]=\"msgs\"></p-growl>\n";

var _dec$6$1;
var _class$6$1;

var NotificationsComponent = (_dec$6$1 = core_1.Component({
    selector: 'tn-notifications',
    template: html$1$1
}), _dec$6$1(_class$6$1 = function () {
    function NotificationsComponent(notificationsService) {
        classCallCheck$1(this, NotificationsComponent);
        this.msgs = [];

        this._notificationsService = notificationsService;
        this._subscription = null;
    }

    createClass$1(NotificationsComponent, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            this._subscribeToNotifications();
        }
    }, {
        key: '_subscribeToNotifications',
        value: function _subscribeToNotifications() {
            var _this = this;

            this._notificationsService.notificationChange.subscribe(function (notification) {
                _this.msgs = [];
                _this.msgs.push(notification);
            });
        }
    }]);
    return NotificationsComponent;
}()) || _class$6$1);
Reflect.defineMetadata('design:paramtypes', [NotificationsService], NotificationsComponent);

var moment = createCommonjsModule(function (module, exports) {
    //! moment.js
    //! version : 2.19.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com

    (function (global, factory) {
        module.exports = factory();
    })(commonjsGlobal, function () {
        'use strict';

        var hookCallback;

        function hooks() {
            return hookCallback.apply(null, arguments);
        }

        // This is done to register the method called with moment()
        // without creating circular dependencies.
        function setHookCallback(callback) {
            hookCallback = callback;
        }

        function isArray(input) {
            return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
        }

        function isObject(input) {
            // IE8 will treat undefined and null as object if it wasn't for
            // input != null
            return input != null && Object.prototype.toString.call(input) === '[object Object]';
        }

        function isObjectEmpty(obj) {
            if (Object.getOwnPropertyNames) {
                return Object.getOwnPropertyNames(obj).length === 0;
            } else {
                var k;
                for (k in obj) {
                    if (obj.hasOwnProperty(k)) {
                        return false;
                    }
                }
                return true;
            }
        }

        function isUndefined(input) {
            return input === void 0;
        }

        function isNumber(input) {
            return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
        }

        function isDate(input) {
            return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
        }

        function map(arr, fn) {
            var res = [],
                i;
            for (i = 0; i < arr.length; ++i) {
                res.push(fn(arr[i], i));
            }
            return res;
        }

        function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        }

        function extend(a, b) {
            for (var i in b) {
                if (hasOwnProp(b, i)) {
                    a[i] = b[i];
                }
            }

            if (hasOwnProp(b, 'toString')) {
                a.toString = b.toString;
            }

            if (hasOwnProp(b, 'valueOf')) {
                a.valueOf = b.valueOf;
            }

            return a;
        }

        function createUTC(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, true).utc();
        }

        function defaultParsingFlags() {
            // We need to deep clone this object.
            return {
                empty: false,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: false,
                invalidMonth: null,
                invalidFormat: false,
                userInvalidated: false,
                iso: false,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: false,
                weekdayMismatch: false
            };
        }

        function getParsingFlags(m) {
            if (m._pf == null) {
                m._pf = defaultParsingFlags();
            }
            return m._pf;
        }

        var some;
        if (Array.prototype.some) {
            some = Array.prototype.some;
        } else {
            some = function some(fun) {
                var t = Object(this);
                var len = t.length >>> 0;

                for (var i = 0; i < len; i++) {
                    if (i in t && fun.call(this, t[i], i, t)) {
                        return true;
                    }
                }

                return false;
            };
        }

        function isValid(m) {
            if (m._isValid == null) {
                var flags = getParsingFlags(m);
                var parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                });
                var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

                if (m._strict) {
                    isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
                }

                if (Object.isFrozen == null || !Object.isFrozen(m)) {
                    m._isValid = isNowValid;
                } else {
                    return isNowValid;
                }
            }
            return m._isValid;
        }

        function createInvalid(flags) {
            var m = createUTC(NaN);
            if (flags != null) {
                extend(getParsingFlags(m), flags);
            } else {
                getParsingFlags(m).userInvalidated = true;
            }

            return m;
        }

        // Plugins that add properties should also add the key here (null value),
        // so we can properly clone ourselves.
        var momentProperties = hooks.momentProperties = [];

        function copyConfig(to, from) {
            var i, prop, val;

            if (!isUndefined(from._isAMomentObject)) {
                to._isAMomentObject = from._isAMomentObject;
            }
            if (!isUndefined(from._i)) {
                to._i = from._i;
            }
            if (!isUndefined(from._f)) {
                to._f = from._f;
            }
            if (!isUndefined(from._l)) {
                to._l = from._l;
            }
            if (!isUndefined(from._strict)) {
                to._strict = from._strict;
            }
            if (!isUndefined(from._tzm)) {
                to._tzm = from._tzm;
            }
            if (!isUndefined(from._isUTC)) {
                to._isUTC = from._isUTC;
            }
            if (!isUndefined(from._offset)) {
                to._offset = from._offset;
            }
            if (!isUndefined(from._pf)) {
                to._pf = getParsingFlags(from);
            }
            if (!isUndefined(from._locale)) {
                to._locale = from._locale;
            }

            if (momentProperties.length > 0) {
                for (i = 0; i < momentProperties.length; i++) {
                    prop = momentProperties[i];
                    val = from[prop];
                    if (!isUndefined(val)) {
                        to[prop] = val;
                    }
                }
            }

            return to;
        }

        var updateInProgress = false;

        // Moment prototype object
        function Moment(config) {
            copyConfig(this, config);
            this._d = new Date(config._d != null ? config._d.getTime() : NaN);
            if (!this.isValid()) {
                this._d = new Date(NaN);
            }
            // Prevent infinite loop in case updateOffset creates new moment
            // objects.
            if (updateInProgress === false) {
                updateInProgress = true;
                hooks.updateOffset(this);
                updateInProgress = false;
            }
        }

        function isMoment(obj) {
            return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }

        function absFloor(number) {
            if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
            } else {
                return Math.floor(number);
            }
        }

        function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion,
                value = 0;

            if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                value = absFloor(coercedNumber);
            }

            return value;
        }

        // compare two arrays, return the number of differences
        function compareArrays(array1, array2, dontConvert) {
            var len = Math.min(array1.length, array2.length),
                lengthDiff = Math.abs(array1.length - array2.length),
                diffs = 0,
                i;
            for (i = 0; i < len; i++) {
                if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                    diffs++;
                }
            }
            return diffs + lengthDiff;
        }

        function warn(msg) {
            if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
                console.warn('Deprecation warning: ' + msg);
            }
        }

        function deprecate(msg, fn) {
            var firstTime = true;

            return extend(function () {
                if (hooks.deprecationHandler != null) {
                    hooks.deprecationHandler(null, msg);
                }
                if (firstTime) {
                    var args = [];
                    var arg;
                    for (var i = 0; i < arguments.length; i++) {
                        arg = '';
                        if (_typeof(arguments[i]) === 'object') {
                            arg += '\n[' + i + '] ';
                            for (var key in arguments[0]) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                            arg = arg.slice(0, -2); // Remove trailing comma and space
                        } else {
                            arg = arguments[i];
                        }
                        args.push(arg);
                    }
                    warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                    firstTime = false;
                }
                return fn.apply(this, arguments);
            }, fn);
        }

        var deprecations = {};

        function deprecateSimple(name, msg) {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(name, msg);
            }
            if (!deprecations[name]) {
                warn(msg);
                deprecations[name] = true;
            }
        }

        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;

        function isFunction(input) {
            return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
        }

        function set$$1(config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            this._config = config;
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
            // TODO: Remove "ordinalParse" fallback in next major release.
            this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
        }

        function mergeConfigs(parentConfig, childConfig) {
            var res = extend({}, parentConfig),
                prop;
            for (prop in childConfig) {
                if (hasOwnProp(childConfig, prop)) {
                    if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                        res[prop] = {};
                        extend(res[prop], parentConfig[prop]);
                        extend(res[prop], childConfig[prop]);
                    } else if (childConfig[prop] != null) {
                        res[prop] = childConfig[prop];
                    } else {
                        delete res[prop];
                    }
                }
            }
            for (prop in parentConfig) {
                if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                    // make sure changes to properties don't modify parent config
                    res[prop] = extend({}, res[prop]);
                }
            }
            return res;
        }

        function Locale(config) {
            if (config != null) {
                this.set(config);
            }
        }

        var keys;

        if (Object.keys) {
            keys = Object.keys;
        } else {
            keys = function keys(obj) {
                var i,
                    res = [];
                for (i in obj) {
                    if (hasOwnProp(obj, i)) {
                        res.push(i);
                    }
                }
                return res;
            };
        }

        var defaultCalendar = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        };

        function calendar(key, mom, now) {
            var output = this._calendar[key] || this._calendar['sameElse'];
            return isFunction(output) ? output.call(mom, now) : output;
        }

        var defaultLongDateFormat = {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A'
        };

        function longDateFormat(key) {
            var format = this._longDateFormat[key],
                formatUpper = this._longDateFormat[key.toUpperCase()];

            if (format || !formatUpper) {
                return format;
            }

            this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                return val.slice(1);
            });

            return this._longDateFormat[key];
        }

        var defaultInvalidDate = 'Invalid date';

        function invalidDate() {
            return this._invalidDate;
        }

        var defaultOrdinal = '%d';
        var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

        function ordinal(number) {
            return this._ordinal.replace('%d', number);
        }

        var defaultRelativeTime = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        };

        function relativeTime(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }

        function pastFuture(diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return isFunction(format) ? format(output) : format.replace(/%s/i, output);
        }

        var aliases = {};

        function addUnitAlias(unit, shorthand) {
            var lowerCase = unit.toLowerCase();
            aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
        }

        function normalizeUnits(units) {
            return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
        }

        function normalizeObjectUnits(inputObject) {
            var normalizedInput = {},
                normalizedProp,
                prop;

            for (prop in inputObject) {
                if (hasOwnProp(inputObject, prop)) {
                    normalizedProp = normalizeUnits(prop);
                    if (normalizedProp) {
                        normalizedInput[normalizedProp] = inputObject[prop];
                    }
                }
            }

            return normalizedInput;
        }

        var priorities = {};

        function addUnitPriority(unit, priority) {
            priorities[unit] = priority;
        }

        function getPrioritizedUnits(unitsObj) {
            var units = [];
            for (var u in unitsObj) {
                units.push({ unit: u, priority: priorities[u] });
            }
            units.sort(function (a, b) {
                return a.priority - b.priority;
            });
            return units;
        }

        function zeroFill(number, targetLength, forceSign) {
            var absNumber = '' + Math.abs(number),
                zerosToFill = targetLength - absNumber.length,
                sign = number >= 0;
            return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }

        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

        var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

        var formatFunctions = {};

        var formatTokenFunctions = {};

        // token:    'M'
        // padded:   ['MM', 2]
        // ordinal:  'Mo'
        // callback: function () { this.month() + 1 }
        function addFormatToken(token, padded, ordinal, callback) {
            var func = callback;
            if (typeof callback === 'string') {
                func = function func() {
                    return this[callback]();
                };
            }
            if (token) {
                formatTokenFunctions[token] = func;
            }
            if (padded) {
                formatTokenFunctions[padded[0]] = function () {
                    return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
                };
            }
            if (ordinal) {
                formatTokenFunctions[ordinal] = function () {
                    return this.localeData().ordinal(func.apply(this, arguments), token);
                };
            }
        }

        function removeFormattingTokens(input) {
            if (input.match(/\[[\s\S]/)) {
                return input.replace(/^\[|\]$/g, '');
            }
            return input.replace(/\\/g, '');
        }

        function makeFormatFunction(format) {
            var array = format.match(formattingTokens),
                i,
                length;

            for (i = 0, length = array.length; i < length; i++) {
                if (formatTokenFunctions[array[i]]) {
                    array[i] = formatTokenFunctions[array[i]];
                } else {
                    array[i] = removeFormattingTokens(array[i]);
                }
            }

            return function (mom) {
                var output = '',
                    i;
                for (i = 0; i < length; i++) {
                    output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
                }
                return output;
            };
        }

        // format date using native date object
        function formatMoment(m, format) {
            if (!m.isValid()) {
                return m.localeData().invalidDate();
            }

            format = expandFormat(format, m.localeData());
            formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

            return formatFunctions[format](m);
        }

        function expandFormat(format, locale) {
            var i = 5;

            function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input;
            }

            localFormattingTokens.lastIndex = 0;
            while (i >= 0 && localFormattingTokens.test(format)) {
                format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
                localFormattingTokens.lastIndex = 0;
                i -= 1;
            }

            return format;
        }

        var match1 = /\d/; //       0 - 9
        var match2 = /\d\d/; //      00 - 99
        var match3 = /\d{3}/; //     000 - 999
        var match4 = /\d{4}/; //    0000 - 9999
        var match6 = /[+-]?\d{6}/; // -999999 - 999999
        var match1to2 = /\d\d?/; //       0 - 99
        var match3to4 = /\d\d\d\d?/; //     999 - 9999
        var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
        var match1to3 = /\d{1,3}/; //       0 - 999
        var match1to4 = /\d{1,4}/; //       0 - 9999
        var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

        var matchUnsigned = /\d+/; //       0 - inf
        var matchSigned = /[+-]?\d+/; //    -inf - inf

        var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
        var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

        var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

        var regexes = {};

        function addRegexToken(token, regex, strictRegex) {
            regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
                return isStrict && strictRegex ? strictRegex : regex;
            };
        }

        function getParseRegexForToken(token, config) {
            if (!hasOwnProp(regexes, token)) {
                return new RegExp(unescapeFormat(token));
            }

            return regexes[token](config._strict, config._locale);
        }

        // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
        function unescapeFormat(s) {
            return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
            }));
        }

        function regexEscape(s) {
            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }

        var tokens = {};

        function addParseToken(token, callback) {
            var i,
                func = callback;
            if (typeof token === 'string') {
                token = [token];
            }
            if (isNumber(callback)) {
                func = function func(input, array) {
                    array[callback] = toInt(input);
                };
            }
            for (i = 0; i < token.length; i++) {
                tokens[token[i]] = func;
            }
        }

        function addWeekParseToken(token, callback) {
            addParseToken(token, function (input, array, config, token) {
                config._w = config._w || {};
                callback(input, config._w, config, token);
            });
        }

        function addTimeToArrayFromToken(token, input, config) {
            if (input != null && hasOwnProp(tokens, token)) {
                tokens[token](input, config._a, config, token);
            }
        }

        var YEAR = 0;
        var MONTH = 1;
        var DATE = 2;
        var HOUR = 3;
        var MINUTE = 4;
        var SECOND = 5;
        var MILLISECOND = 6;
        var WEEK = 7;
        var WEEKDAY = 8;

        // FORMATTING

        addFormatToken('Y', 0, 0, function () {
            var y = this.year();
            return y <= 9999 ? '' + y : '+' + y;
        });

        addFormatToken(0, ['YY', 2], 0, function () {
            return this.year() % 100;
        });

        addFormatToken(0, ['YYYY', 4], 0, 'year');
        addFormatToken(0, ['YYYYY', 5], 0, 'year');
        addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

        // ALIASES

        addUnitAlias('year', 'y');

        // PRIORITIES

        addUnitPriority('year', 1);

        // PARSING

        addRegexToken('Y', matchSigned);
        addRegexToken('YY', match1to2, match2);
        addRegexToken('YYYY', match1to4, match4);
        addRegexToken('YYYYY', match1to6, match6);
        addRegexToken('YYYYYY', match1to6, match6);

        addParseToken(['YYYYY', 'YYYYYY'], YEAR);
        addParseToken('YYYY', function (input, array) {
            array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken('YY', function (input, array) {
            array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken('Y', function (input, array) {
            array[YEAR] = parseInt(input, 10);
        });

        // HELPERS

        function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365;
        }

        function isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }

        // HOOKS

        hooks.parseTwoDigitYear = function (input) {
            return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
        };

        // MOMENTS

        var getSetYear = makeGetSet('FullYear', true);

        function getIsLeapYear() {
            return isLeapYear(this.year());
        }

        function makeGetSet(unit, keepTime) {
            return function (value) {
                if (value != null) {
                    set$1(this, unit, value);
                    hooks.updateOffset(this, keepTime);
                    return this;
                } else {
                    return get$$1(this, unit);
                }
            };
        }

        function get$$1(mom, unit) {
            return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
        }

        function set$1(mom, unit, value) {
            if (mom.isValid() && !isNaN(value)) {
                if (unit === 'FullYear' && isLeapYear(mom.year())) {
                    mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
                } else {
                    mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
                }
            }
        }

        // MOMENTS

        function stringGet(units) {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units]();
            }
            return this;
        }

        function stringSet(units, value) {
            if ((typeof units === 'undefined' ? 'undefined' : _typeof(units)) === 'object') {
                units = normalizeObjectUnits(units);
                var prioritized = getPrioritizedUnits(units);
                for (var i = 0; i < prioritized.length; i++) {
                    this[prioritized[i].unit](units[prioritized[i].unit]);
                }
            } else {
                units = normalizeUnits(units);
                if (isFunction(this[units])) {
                    return this[units](value);
                }
            }
            return this;
        }

        function mod(n, x) {
            return (n % x + x) % x;
        }

        var indexOf;

        if (Array.prototype.indexOf) {
            indexOf = Array.prototype.indexOf;
        } else {
            indexOf = function indexOf(o) {
                // I know
                var i;
                for (i = 0; i < this.length; ++i) {
                    if (this[i] === o) {
                        return i;
                    }
                }
                return -1;
            };
        }

        function daysInMonth(year, month) {
            if (isNaN(year) || isNaN(month)) {
                return NaN;
            }
            var modMonth = mod(month, 12);
            year += (month - modMonth) / 12;
            return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }

        // FORMATTING

        addFormatToken('M', ['MM', 2], 'Mo', function () {
            return this.month() + 1;
        });

        addFormatToken('MMM', 0, 0, function (format) {
            return this.localeData().monthsShort(this, format);
        });

        addFormatToken('MMMM', 0, 0, function (format) {
            return this.localeData().months(this, format);
        });

        // ALIASES

        addUnitAlias('month', 'M');

        // PRIORITY

        addUnitPriority('month', 8);

        // PARSING

        addRegexToken('M', match1to2);
        addRegexToken('MM', match1to2, match2);
        addRegexToken('MMM', function (isStrict, locale) {
            return locale.monthsShortRegex(isStrict);
        });
        addRegexToken('MMMM', function (isStrict, locale) {
            return locale.monthsRegex(isStrict);
        });

        addParseToken(['M', 'MM'], function (input, array) {
            array[MONTH] = toInt(input) - 1;
        });

        addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
            var month = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (month != null) {
                array[MONTH] = month;
            } else {
                getParsingFlags(config).invalidMonth = input;
            }
        });

        // LOCALES

        var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
        var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
        function localeMonths(m, format) {
            if (!m) {
                return isArray(this._months) ? this._months : this._months['standalone'];
            }
            return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
        }

        var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
        function localeMonthsShort(m, format) {
            if (!m) {
                return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
            }
            return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
        }

        function handleStrictParse(monthName, format, strict) {
            var i,
                ii,
                mom,
                llc = monthName.toLocaleLowerCase();
            if (!this._monthsParse) {
                // this is not used
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
                for (i = 0; i < 12; ++i) {
                    mom = createUTC([2000, i]);
                    this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                    this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
                }
            }

            if (strict) {
                if (format === 'MMM') {
                    ii = indexOf.call(this._shortMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._longMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                }
            } else {
                if (format === 'MMM') {
                    ii = indexOf.call(this._shortMonthsParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._longMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._longMonthsParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._shortMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                }
            }
        }

        function localeMonthsParse(monthName, format, strict) {
            var i, mom, regex;

            if (this._monthsParseExact) {
                return handleStrictParse.call(this, monthName, format, strict);
            }

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            // TODO: add sorting
            // Sorting makes sure if one month (or abbr) is a prefix of another
            // see sorting in computeMonthsParse
            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        }

        // MOMENTS

        function setMonth(mom, value) {
            var dayOfMonth;

            if (!mom.isValid()) {
                // No op
                return mom;
            }

            if (typeof value === 'string') {
                if (/^\d+$/.test(value)) {
                    value = toInt(value);
                } else {
                    value = mom.localeData().monthsParse(value);
                    // TODO: Another silent failure?
                    if (!isNumber(value)) {
                        return mom;
                    }
                }
            }

            dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
            return mom;
        }

        function getSetMonth(value) {
            if (value != null) {
                setMonth(this, value);
                hooks.updateOffset(this, true);
                return this;
            } else {
                return get$$1(this, 'Month');
            }
        }

        function getDaysInMonth() {
            return daysInMonth(this.year(), this.month());
        }

        var defaultMonthsShortRegex = matchWord;
        function monthsShortRegex(isStrict) {
            if (this._monthsParseExact) {
                if (!hasOwnProp(this, '_monthsRegex')) {
                    computeMonthsParse.call(this);
                }
                if (isStrict) {
                    return this._monthsShortStrictRegex;
                } else {
                    return this._monthsShortRegex;
                }
            } else {
                if (!hasOwnProp(this, '_monthsShortRegex')) {
                    this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
            }
        }

        var defaultMonthsRegex = matchWord;
        function monthsRegex(isStrict) {
            if (this._monthsParseExact) {
                if (!hasOwnProp(this, '_monthsRegex')) {
                    computeMonthsParse.call(this);
                }
                if (isStrict) {
                    return this._monthsStrictRegex;
                } else {
                    return this._monthsRegex;
                }
            } else {
                if (!hasOwnProp(this, '_monthsRegex')) {
                    this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
            }
        }

        function computeMonthsParse() {
            function cmpLenRev(a, b) {
                return b.length - a.length;
            }

            var shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i,
                mom;
            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, i]);
                shortPieces.push(this.monthsShort(mom, ''));
                longPieces.push(this.months(mom, ''));
                mixedPieces.push(this.months(mom, ''));
                mixedPieces.push(this.monthsShort(mom, ''));
            }
            // Sorting makes sure if one month (or abbr) is a prefix of another it
            // will match the longer piece.
            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);
            for (i = 0; i < 12; i++) {
                shortPieces[i] = regexEscape(shortPieces[i]);
                longPieces[i] = regexEscape(longPieces[i]);
            }
            for (i = 0; i < 24; i++) {
                mixedPieces[i] = regexEscape(mixedPieces[i]);
            }

            this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
            this._monthsShortRegex = this._monthsRegex;
            this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
            this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        }

        function createDate(y, m, d, h, M, s, ms) {
            // can't just apply() to create a date:
            // https://stackoverflow.com/q/181348
            var date = new Date(y, m, d, h, M, s, ms);

            // the date constructor remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
            return date;
        }

        function createUTCDate(y) {
            var date = new Date(Date.UTC.apply(null, arguments));

            // the Date.UTC function remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
            return date;
        }

        // start-of-first-week - start-of-year
        function firstWeekOffset(year, dow, doy) {
            var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,

            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

            return -fwdlw + fwd - 1;
        }

        // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
            var localWeekday = (7 + weekday - dow) % 7,
                weekOffset = firstWeekOffset(year, dow, doy),
                dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
                resYear,
                resDayOfYear;

            if (dayOfYear <= 0) {
                resYear = year - 1;
                resDayOfYear = daysInYear(resYear) + dayOfYear;
            } else if (dayOfYear > daysInYear(year)) {
                resYear = year + 1;
                resDayOfYear = dayOfYear - daysInYear(year);
            } else {
                resYear = year;
                resDayOfYear = dayOfYear;
            }

            return {
                year: resYear,
                dayOfYear: resDayOfYear
            };
        }

        function weekOfYear(mom, dow, doy) {
            var weekOffset = firstWeekOffset(mom.year(), dow, doy),
                week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
                resWeek,
                resYear;

            if (week < 1) {
                resYear = mom.year() - 1;
                resWeek = week + weeksInYear(resYear, dow, doy);
            } else if (week > weeksInYear(mom.year(), dow, doy)) {
                resWeek = week - weeksInYear(mom.year(), dow, doy);
                resYear = mom.year() + 1;
            } else {
                resYear = mom.year();
                resWeek = week;
            }

            return {
                week: resWeek,
                year: resYear
            };
        }

        function weeksInYear(year, dow, doy) {
            var weekOffset = firstWeekOffset(year, dow, doy),
                weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
            return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }

        // FORMATTING

        addFormatToken('w', ['ww', 2], 'wo', 'week');
        addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

        // ALIASES

        addUnitAlias('week', 'w');
        addUnitAlias('isoWeek', 'W');

        // PRIORITIES

        addUnitPriority('week', 5);
        addUnitPriority('isoWeek', 5);

        // PARSING

        addRegexToken('w', match1to2);
        addRegexToken('ww', match1to2, match2);
        addRegexToken('W', match1to2);
        addRegexToken('WW', match1to2, match2);

        addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        });

        // HELPERS

        // LOCALES

        function localeWeek(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }

        var defaultLocaleWeek = {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        };

        function localeFirstDayOfWeek() {
            return this._week.dow;
        }

        function localeFirstDayOfYear() {
            return this._week.doy;
        }

        // MOMENTS

        function getSetWeek(input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        }

        function getSetISOWeek(input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        }

        // FORMATTING

        addFormatToken('d', 0, 'do', 'day');

        addFormatToken('dd', 0, 0, function (format) {
            return this.localeData().weekdaysMin(this, format);
        });

        addFormatToken('ddd', 0, 0, function (format) {
            return this.localeData().weekdaysShort(this, format);
        });

        addFormatToken('dddd', 0, 0, function (format) {
            return this.localeData().weekdays(this, format);
        });

        addFormatToken('e', 0, 0, 'weekday');
        addFormatToken('E', 0, 0, 'isoWeekday');

        // ALIASES

        addUnitAlias('day', 'd');
        addUnitAlias('weekday', 'e');
        addUnitAlias('isoWeekday', 'E');

        // PRIORITY
        addUnitPriority('day', 11);
        addUnitPriority('weekday', 11);
        addUnitPriority('isoWeekday', 11);

        // PARSING

        addRegexToken('d', match1to2);
        addRegexToken('e', match1to2);
        addRegexToken('E', match1to2);
        addRegexToken('dd', function (isStrict, locale) {
            return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken('ddd', function (isStrict, locale) {
            return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken('dddd', function (isStrict, locale) {
            return locale.weekdaysRegex(isStrict);
        });

        addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
            var weekday = config._locale.weekdaysParse(input, token, config._strict);
            // if we didn't get a weekday name, mark the date as invalid
            if (weekday != null) {
                week.d = weekday;
            } else {
                getParsingFlags(config).invalidWeekday = input;
            }
        });

        addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
            week[token] = toInt(input);
        });

        // HELPERS

        function parseWeekday(input, locale) {
            if (typeof input !== 'string') {
                return input;
            }

            if (!isNaN(input)) {
                return parseInt(input, 10);
            }

            input = locale.weekdaysParse(input);
            if (typeof input === 'number') {
                return input;
            }

            return null;
        }

        function parseIsoWeekday(input, locale) {
            if (typeof input === 'string') {
                return locale.weekdaysParse(input) % 7 || 7;
            }
            return isNaN(input) ? null : input;
        }

        // LOCALES

        var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
        function localeWeekdays(m, format) {
            if (!m) {
                return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
            }
            return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
        }

        var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
        function localeWeekdaysShort(m) {
            return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }

        var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
        function localeWeekdaysMin(m) {
            return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }

        function handleStrictParse$1(weekdayName, format, strict) {
            var i,
                ii,
                mom,
                llc = weekdayName.toLocaleLowerCase();
            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._minWeekdaysParse = [];

                for (i = 0; i < 7; ++i) {
                    mom = createUTC([2000, 1]).day(i);
                    this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                    this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                    this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
                }
            }

            if (strict) {
                if (format === 'dddd') {
                    ii = indexOf.call(this._weekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else if (format === 'ddd') {
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                }
            } else {
                if (format === 'dddd') {
                    ii = indexOf.call(this._weekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else if (format === 'ddd') {
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._weekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._weekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                }
            }
        }

        function localeWeekdaysParse(weekdayName, format, strict) {
            var i, mom, regex;

            if (this._weekdaysParseExact) {
                return handleStrictParse$1.call(this, weekdayName, format, strict);
            }

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._minWeekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._fullWeekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already

                mom = createUTC([2000, 1]).day(i);
                if (strict && !this._fullWeekdaysParse[i]) {
                    this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                    this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                    this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
                }
                if (!this._weekdaysParse[i]) {
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                    return i;
                } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                    return i;
                } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                    return i;
                } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        }

        // MOMENTS

        function getSetDayOfWeek(input) {
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        }

        function getSetLocaleDayOfWeek(input) {
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        }

        function getSetISODayOfWeek(input) {
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }

            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.

            if (input != null) {
                var weekday = parseIsoWeekday(input, this.localeData());
                return this.day(this.day() % 7 ? weekday : weekday - 7);
            } else {
                return this.day() || 7;
            }
        }

        var defaultWeekdaysRegex = matchWord;
        function weekdaysRegex(isStrict) {
            if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                    computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                    return this._weekdaysStrictRegex;
                } else {
                    return this._weekdaysRegex;
                }
            } else {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                    this._weekdaysRegex = defaultWeekdaysRegex;
                }
                return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
            }
        }

        var defaultWeekdaysShortRegex = matchWord;
        function weekdaysShortRegex(isStrict) {
            if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                    computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                    return this._weekdaysShortStrictRegex;
                } else {
                    return this._weekdaysShortRegex;
                }
            } else {
                if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                    this._weekdaysShortRegex = defaultWeekdaysShortRegex;
                }
                return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
            }
        }

        var defaultWeekdaysMinRegex = matchWord;
        function weekdaysMinRegex(isStrict) {
            if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                    computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                    return this._weekdaysMinStrictRegex;
                } else {
                    return this._weekdaysMinRegex;
                }
            } else {
                if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                    this._weekdaysMinRegex = defaultWeekdaysMinRegex;
                }
                return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
            }
        }

        function computeWeekdaysParse() {
            function cmpLenRev(a, b) {
                return b.length - a.length;
            }

            var minPieces = [],
                shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i,
                mom,
                minp,
                shortp,
                longp;
            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, 1]).day(i);
                minp = this.weekdaysMin(mom, '');
                shortp = this.weekdaysShort(mom, '');
                longp = this.weekdays(mom, '');
                minPieces.push(minp);
                shortPieces.push(shortp);
                longPieces.push(longp);
                mixedPieces.push(minp);
                mixedPieces.push(shortp);
                mixedPieces.push(longp);
            }
            // Sorting makes sure if one weekday (or abbr) is a prefix of another it
            // will match the longer piece.
            minPieces.sort(cmpLenRev);
            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);
            for (i = 0; i < 7; i++) {
                shortPieces[i] = regexEscape(shortPieces[i]);
                longPieces[i] = regexEscape(longPieces[i]);
                mixedPieces[i] = regexEscape(mixedPieces[i]);
            }

            this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
            this._weekdaysShortRegex = this._weekdaysRegex;
            this._weekdaysMinRegex = this._weekdaysRegex;

            this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
            this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
            this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
        }

        // FORMATTING

        function hFormat() {
            return this.hours() % 12 || 12;
        }

        function kFormat() {
            return this.hours() || 24;
        }

        addFormatToken('H', ['HH', 2], 0, 'hour');
        addFormatToken('h', ['hh', 2], 0, hFormat);
        addFormatToken('k', ['kk', 2], 0, kFormat);

        addFormatToken('hmm', 0, 0, function () {
            return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });

        addFormatToken('hmmss', 0, 0, function () {
            return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });

        addFormatToken('Hmm', 0, 0, function () {
            return '' + this.hours() + zeroFill(this.minutes(), 2);
        });

        addFormatToken('Hmmss', 0, 0, function () {
            return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });

        function meridiem(token, lowercase) {
            addFormatToken(token, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
            });
        }

        meridiem('a', true);
        meridiem('A', false);

        // ALIASES

        addUnitAlias('hour', 'h');

        // PRIORITY
        addUnitPriority('hour', 13);

        // PARSING

        function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse;
        }

        addRegexToken('a', matchMeridiem);
        addRegexToken('A', matchMeridiem);
        addRegexToken('H', match1to2);
        addRegexToken('h', match1to2);
        addRegexToken('k', match1to2);
        addRegexToken('HH', match1to2, match2);
        addRegexToken('hh', match1to2, match2);
        addRegexToken('kk', match1to2, match2);

        addRegexToken('hmm', match3to4);
        addRegexToken('hmmss', match5to6);
        addRegexToken('Hmm', match3to4);
        addRegexToken('Hmmss', match5to6);

        addParseToken(['H', 'HH'], HOUR);
        addParseToken(['k', 'kk'], function (input, array, config) {
            var kInput = toInt(input);
            array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(['a', 'A'], function (input, array, config) {
            config._isPm = config._locale.isPM(input);
            config._meridiem = input;
        });
        addParseToken(['h', 'hh'], function (input, array, config) {
            array[HOUR] = toInt(input);
            getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmm', function (input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmmss', function (input, array, config) {
            var pos1 = input.length - 4;
            var pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            getParsingFlags(config).bigHour = true;
        });
        addParseToken('Hmm', function (input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken('Hmmss', function (input, array, config) {
            var pos1 = input.length - 4;
            var pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
        });

        // LOCALES

        function localeIsPM(input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return (input + '').toLowerCase().charAt(0) === 'p';
        }

        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
        function localeMeridiem(hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        }

        // MOMENTS

        // Setting the hour should keep the time, because the user explicitly
        // specified which hour he wants. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        var getSetHour = makeGetSet('Hours', true);

        // months
        // week
        // weekdays
        // meridiem
        var baseConfig = {
            calendar: defaultCalendar,
            longDateFormat: defaultLongDateFormat,
            invalidDate: defaultInvalidDate,
            ordinal: defaultOrdinal,
            dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
            relativeTime: defaultRelativeTime,

            months: defaultLocaleMonths,
            monthsShort: defaultLocaleMonthsShort,

            week: defaultLocaleWeek,

            weekdays: defaultLocaleWeekdays,
            weekdaysMin: defaultLocaleWeekdaysMin,
            weekdaysShort: defaultLocaleWeekdaysShort,

            meridiemParse: defaultLocaleMeridiemParse
        };

        // internal storage for locale config files
        var locales = {};
        var localeFamilies = {};
        var globalLocale;

        function normalizeLocale(key) {
            return key ? key.toLowerCase().replace('_', '-') : key;
        }

        // pick the locale from the array
        // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        function chooseLocale(names) {
            var i = 0,
                j,
                next,
                locale,
                split;

            while (i < names.length) {
                split = normalizeLocale(names[i]).split('-');
                j = split.length;
                next = normalizeLocale(names[i + 1]);
                next = next ? next.split('-') : null;
                while (j > 0) {
                    locale = loadLocale(split.slice(0, j).join('-'));
                    if (locale) {
                        return locale;
                    }
                    if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                        //the next array item is better than a shallower substring of this one
                        break;
                    }
                    j--;
                }
                i++;
            }
            return null;
        }

        function loadLocale(name) {
            var oldLocale = null;
            // TODO: Find a better way to register and load all the locales in Node
            if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
                try {
                    oldLocale = globalLocale._abbr;
                    var aliasedRequire = commonjsRequire;
                    aliasedRequire('./locale/' + name);
                    getSetGlobalLocale(oldLocale);
                } catch (e) {}
            }
            return locales[name];
        }

        // This function will load locale and then set the global locale.  If
        // no arguments are passed in, it will simply return the current global
        // locale key.
        function getSetGlobalLocale(key, values) {
            var data;
            if (key) {
                if (isUndefined(values)) {
                    data = getLocale(key);
                } else {
                    data = defineLocale(key, values);
                }

                if (data) {
                    // moment.duration._locale = moment._locale = data;
                    globalLocale = data;
                }
            }

            return globalLocale._abbr;
        }

        function defineLocale(name, config) {
            if (config !== null) {
                var parentConfig = baseConfig;
                config.abbr = name;
                if (locales[name] != null) {
                    deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                    parentConfig = locales[name]._config;
                } else if (config.parentLocale != null) {
                    if (locales[config.parentLocale] != null) {
                        parentConfig = locales[config.parentLocale]._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
                locales[name] = new Locale(mergeConfigs(parentConfig, config));

                if (localeFamilies[name]) {
                    localeFamilies[name].forEach(function (x) {
                        defineLocale(x.name, x.config);
                    });
                }

                // backwards compat for now: also set the locale
                // make sure we set the locale AFTER all child locales have been
                // created, so we won't end up with the child locale set.
                getSetGlobalLocale(name);

                return locales[name];
            } else {
                // useful for testing
                delete locales[name];
                return null;
            }
        }

        function updateLocale(name, config) {
            if (config != null) {
                var locale,
                    parentConfig = baseConfig;
                // MERGE
                if (locales[name] != null) {
                    parentConfig = locales[name]._config;
                }
                config = mergeConfigs(parentConfig, config);
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;

                // backwards compat for now: also set the locale
                getSetGlobalLocale(name);
            } else {
                // pass null for config to unupdate, useful for tests
                if (locales[name] != null) {
                    if (locales[name].parentLocale != null) {
                        locales[name] = locales[name].parentLocale;
                    } else if (locales[name] != null) {
                        delete locales[name];
                    }
                }
            }
            return locales[name];
        }

        // returns locale data
        function getLocale(key) {
            var locale;

            if (key && key._locale && key._locale._abbr) {
                key = key._locale._abbr;
            }

            if (!key) {
                return globalLocale;
            }

            if (!isArray(key)) {
                //short-circuit everything else
                locale = loadLocale(key);
                if (locale) {
                    return locale;
                }
                key = [key];
            }

            return chooseLocale(key);
        }

        function listLocales() {
            return keys(locales);
        }

        function checkOverflow(m) {
            var overflow;
            var a = m._a;

            if (a && getParsingFlags(m).overflow === -2) {
                overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

                if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                    overflow = DATE;
                }
                if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                    overflow = WEEK;
                }
                if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                    overflow = WEEKDAY;
                }

                getParsingFlags(m).overflow = overflow;
            }

            return m;
        }

        // Pick the first defined of two or three arguments.
        function defaults$$1(a, b, c) {
            if (a != null) {
                return a;
            }
            if (b != null) {
                return b;
            }
            return c;
        }

        function currentDateArray(config) {
            // hooks is actually the exported moment object
            var nowValue = new Date(hooks.now());
            if (config._useUTC) {
                return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
            }
            return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }

        // convert an array to a date.
        // the array should mirror the parameters below
        // note: all values past the year are optional and will default to the lowest possible value.
        // [year, month, day , hour, minute, second, millisecond]
        function configFromArray(config) {
            var i,
                date,
                input = [],
                currentDate,
                yearToUse;

            if (config._d) {
                return;
            }

            currentDate = currentDateArray(config);

            //compute day of the year from weeks and weekdays
            if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
                dayOfYearFromWeekInfo(config);
            }

            //if the day of the year is set, figure out what it is
            if (config._dayOfYear != null) {
                yearToUse = defaults$$1(config._a[YEAR], currentDate[YEAR]);

                if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                    getParsingFlags(config)._overflowDayOfYear = true;
                }

                date = createUTCDate(yearToUse, 0, config._dayOfYear);
                config._a[MONTH] = date.getUTCMonth();
                config._a[DATE] = date.getUTCDate();
            }

            // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything
            for (i = 0; i < 3 && config._a[i] == null; ++i) {
                config._a[i] = input[i] = currentDate[i];
            }

            // Zero out whatever was not defaulted, including time
            for (; i < 7; i++) {
                config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
            }

            // Check for 24:00:00.000
            if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
                config._nextDay = true;
                config._a[HOUR] = 0;
            }

            config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
            // Apply timezone offset from input. The actual utcOffset can be changed
            // with parseZone.
            if (config._tzm != null) {
                config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            }

            if (config._nextDay) {
                config._a[HOUR] = 24;
            }

            // check for mismatching day of week
            if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== config._d.getDay()) {
                getParsingFlags(config).weekdayMismatch = true;
            }
        }

        function dayOfYearFromWeekInfo(config) {
            var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
                dow = 1;
                doy = 4;

                // TODO: We need to take the current isoWeekYear, but that depends on
                // how we interpret now (local, utc, fixed offset). So create
                // a now version of current config (take local/utc/offset flags, and
                // create now).
                weekYear = defaults$$1(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
                week = defaults$$1(w.W, 1);
                weekday = defaults$$1(w.E, 1);
                if (weekday < 1 || weekday > 7) {
                    weekdayOverflow = true;
                }
            } else {
                dow = config._locale._week.dow;
                doy = config._locale._week.doy;

                var curWeek = weekOfYear(createLocal(), dow, doy);

                weekYear = defaults$$1(w.gg, config._a[YEAR], curWeek.year);

                // Default to current week.
                week = defaults$$1(w.w, curWeek.week);

                if (w.d != null) {
                    // weekday -- low day numbers are considered next week
                    weekday = w.d;
                    if (weekday < 0 || weekday > 6) {
                        weekdayOverflow = true;
                    }
                } else if (w.e != null) {
                    // local weekday -- counting starts from begining of week
                    weekday = w.e + dow;
                    if (w.e < 0 || w.e > 6) {
                        weekdayOverflow = true;
                    }
                } else {
                    // default to begining of week
                    weekday = dow;
                }
            }
            if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
                getParsingFlags(config)._overflowWeeks = true;
            } else if (weekdayOverflow != null) {
                getParsingFlags(config)._overflowWeekday = true;
            } else {
                temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
                config._a[YEAR] = temp.year;
                config._dayOfYear = temp.dayOfYear;
            }
        }

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
        var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

        var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

        var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];

        // iso time formats and regexes
        var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];

        var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

        // date from iso format
        function configFromISO(config) {
            var i,
                l,
                string = config._i,
                match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
                allowTime,
                dateFormat,
                timeFormat,
                tzFormat;

            if (match) {
                getParsingFlags(config).iso = true;

                for (i = 0, l = isoDates.length; i < l; i++) {
                    if (isoDates[i][1].exec(match[1])) {
                        dateFormat = isoDates[i][0];
                        allowTime = isoDates[i][2] !== false;
                        break;
                    }
                }
                if (dateFormat == null) {
                    config._isValid = false;
                    return;
                }
                if (match[3]) {
                    for (i = 0, l = isoTimes.length; i < l; i++) {
                        if (isoTimes[i][1].exec(match[3])) {
                            // match[2] should be 'T' or space
                            timeFormat = (match[2] || ' ') + isoTimes[i][0];
                            break;
                        }
                    }
                    if (timeFormat == null) {
                        config._isValid = false;
                        return;
                    }
                }
                if (!allowTime && timeFormat != null) {
                    config._isValid = false;
                    return;
                }
                if (match[4]) {
                    if (tzRegex.exec(match[4])) {
                        tzFormat = 'Z';
                    } else {
                        config._isValid = false;
                        return;
                    }
                }
                config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
                configFromStringAndFormat(config);
            } else {
                config._isValid = false;
            }
        }

        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
            var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

            if (secondStr) {
                result.push(parseInt(secondStr, 10));
            }

            return result;
        }

        function untruncateYear(yearStr) {
            var year = parseInt(yearStr, 10);
            if (year <= 49) {
                return 2000 + year;
            } else if (year <= 999) {
                return 1900 + year;
            }
            return year;
        }

        function preprocessRFC2822(s) {
            // Remove comments and folding whitespace and replace multiple-spaces with a single space
            return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
        }

        function checkWeekday(weekdayStr, parsedInput, config) {
            if (weekdayStr) {
                // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
                var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                    weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
                if (weekdayProvided !== weekdayActual) {
                    getParsingFlags(config).weekdayMismatch = true;
                    config._isValid = false;
                    return false;
                }
            }
            return true;
        }

        var obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60
        };

        function calculateOffset(obsOffset, militaryOffset, numOffset) {
            if (obsOffset) {
                return obsOffsets[obsOffset];
            } else if (militaryOffset) {
                // the only allowed military tz is Z
                return 0;
            } else {
                var hm = parseInt(numOffset, 10);
                var m = hm % 100,
                    h = (hm - m) / 100;
                return h * 60 + m;
            }
        }

        // date and time from ref 2822 format
        function configFromRFC2822(config) {
            var match = rfc2822.exec(preprocessRFC2822(config._i));
            if (match) {
                var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
                if (!checkWeekday(match[1], parsedArray, config)) {
                    return;
                }

                config._a = parsedArray;
                config._tzm = calculateOffset(match[8], match[9], match[10]);

                config._d = createUTCDate.apply(null, config._a);
                config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

                getParsingFlags(config).rfc2822 = true;
            } else {
                config._isValid = false;
            }
        }

        // date from iso format or fallback
        function configFromString(config) {
            var matched = aspNetJsonRegex.exec(config._i);

            if (matched !== null) {
                config._d = new Date(+matched[1]);
                return;
            }

            configFromISO(config);
            if (config._isValid === false) {
                delete config._isValid;
            } else {
                return;
            }

            configFromRFC2822(config);
            if (config._isValid === false) {
                delete config._isValid;
            } else {
                return;
            }

            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }

        hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        });

        // constant that refers to the ISO standard
        hooks.ISO_8601 = function () {};

        // constant that refers to the RFC 2822 form
        hooks.RFC_2822 = function () {};

        // date from string and format string
        function configFromStringAndFormat(config) {
            // TODO: Move this to another part of the creation flow to prevent circular deps
            if (config._f === hooks.ISO_8601) {
                configFromISO(config);
                return;
            }
            if (config._f === hooks.RFC_2822) {
                configFromRFC2822(config);
                return;
            }
            config._a = [];
            getParsingFlags(config).empty = true;

            // This array is used to make a Date, either with `new Date` or `Date.UTC`
            var string = '' + config._i,
                i,
                parsedInput,
                tokens,
                token,
                skipped,
                stringLength = string.length,
                totalParsedInputLength = 0;

            tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
                // console.log('token', token, 'parsedInput', parsedInput,
                //         'regex', getParseRegexForToken(token, config));
                if (parsedInput) {
                    skipped = string.substr(0, string.indexOf(parsedInput));
                    if (skipped.length > 0) {
                        getParsingFlags(config).unusedInput.push(skipped);
                    }
                    string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                    totalParsedInputLength += parsedInput.length;
                }
                // don't parse if it's not a known token
                if (formatTokenFunctions[token]) {
                    if (parsedInput) {
                        getParsingFlags(config).empty = false;
                    } else {
                        getParsingFlags(config).unusedTokens.push(token);
                    }
                    addTimeToArrayFromToken(token, parsedInput, config);
                } else if (config._strict && !parsedInput) {
                    getParsingFlags(config).unusedTokens.push(token);
                }
            }

            // add remaining unparsed input length to the string
            getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
            if (string.length > 0) {
                getParsingFlags(config).unusedInput.push(string);
            }

            // clear _12h flag if hour is <= 12
            if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
                getParsingFlags(config).bigHour = undefined;
            }

            getParsingFlags(config).parsedDateParts = config._a.slice(0);
            getParsingFlags(config).meridiem = config._meridiem;
            // handle meridiem
            config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

            configFromArray(config);
            checkOverflow(config);
        }

        function meridiemFixWrap(locale, hour, meridiem) {
            var isPm;

            if (meridiem == null) {
                // nothing to do
                return hour;
            }
            if (locale.meridiemHour != null) {
                return locale.meridiemHour(hour, meridiem);
            } else if (locale.isPM != null) {
                // Fallback
                isPm = locale.isPM(meridiem);
                if (isPm && hour < 12) {
                    hour += 12;
                }
                if (!isPm && hour === 12) {
                    hour = 0;
                }
                return hour;
            } else {
                // this is not supposed to happen
                return hour;
            }
        }

        // date from string and array of format strings
        function configFromStringAndArray(config) {
            var tempConfig, bestMoment, scoreToBeat, i, currentScore;

            if (config._f.length === 0) {
                getParsingFlags(config).invalidFormat = true;
                config._d = new Date(NaN);
                return;
            }

            for (i = 0; i < config._f.length; i++) {
                currentScore = 0;
                tempConfig = copyConfig({}, config);
                if (config._useUTC != null) {
                    tempConfig._useUTC = config._useUTC;
                }
                tempConfig._f = config._f[i];
                configFromStringAndFormat(tempConfig);

                if (!isValid(tempConfig)) {
                    continue;
                }

                // if there is any input that was not parsed add a penalty for that format
                currentScore += getParsingFlags(tempConfig).charsLeftOver;

                //or tokens
                currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

                getParsingFlags(tempConfig).score = currentScore;

                if (scoreToBeat == null || currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }

            extend(config, bestMoment || tempConfig);
        }

        function configFromObject(config) {
            if (config._d) {
                return;
            }

            var i = normalizeObjectUnits(config._i);
            config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
                return obj && parseInt(obj, 10);
            });

            configFromArray(config);
        }

        function createFromConfig(config) {
            var res = new Moment(checkOverflow(prepareConfig(config)));
            if (res._nextDay) {
                // Adding is smart enough around DST
                res.add(1, 'd');
                res._nextDay = undefined;
            }

            return res;
        }

        function prepareConfig(config) {
            var input = config._i,
                format = config._f;

            config._locale = config._locale || getLocale(config._l);

            if (input === null || format === undefined && input === '') {
                return createInvalid({ nullInput: true });
            }

            if (typeof input === 'string') {
                config._i = input = config._locale.preparse(input);
            }

            if (isMoment(input)) {
                return new Moment(checkOverflow(input));
            } else if (isDate(input)) {
                config._d = input;
            } else if (isArray(format)) {
                configFromStringAndArray(config);
            } else if (format) {
                configFromStringAndFormat(config);
            } else {
                configFromInput(config);
            }

            if (!isValid(config)) {
                config._d = null;
            }

            return config;
        }

        function configFromInput(config) {
            var input = config._i;
            if (isUndefined(input)) {
                config._d = new Date(hooks.now());
            } else if (isDate(input)) {
                config._d = new Date(input.valueOf());
            } else if (typeof input === 'string') {
                configFromString(config);
            } else if (isArray(input)) {
                config._a = map(input.slice(0), function (obj) {
                    return parseInt(obj, 10);
                });
                configFromArray(config);
            } else if (isObject(input)) {
                configFromObject(config);
            } else if (isNumber(input)) {
                // from milliseconds
                config._d = new Date(input);
            } else {
                hooks.createFromInputFallback(config);
            }
        }

        function createLocalOrUTC(input, format, locale, strict, isUTC) {
            var c = {};

            if (locale === true || locale === false) {
                strict = locale;
                locale = undefined;
            }

            if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
                input = undefined;
            }
            // object construction must be done this way.
            // https://github.com/moment/moment/issues/1423
            c._isAMomentObject = true;
            c._useUTC = c._isUTC = isUTC;
            c._l = locale;
            c._i = input;
            c._f = format;
            c._strict = strict;

            return createFromConfig(c);
        }

        function createLocal(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, false);
        }

        var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        });

        var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        });

        // Pick a moment m from moments so that m[fn](other) is true for all
        // other. This relies on the function fn to be transitive.
        //
        // moments should either be an array of moment objects or an array, whose
        // first element is an array of moment objects.
        function pickBy(fn, moments) {
            var res, i;
            if (moments.length === 1 && isArray(moments[0])) {
                moments = moments[0];
            }
            if (!moments.length) {
                return createLocal();
            }
            res = moments[0];
            for (i = 1; i < moments.length; ++i) {
                if (!moments[i].isValid() || moments[i][fn](res)) {
                    res = moments[i];
                }
            }
            return res;
        }

        // TODO: Use [].sort instead?
        function min() {
            var args = [].slice.call(arguments, 0);

            return pickBy('isBefore', args);
        }

        function max() {
            var args = [].slice.call(arguments, 0);

            return pickBy('isAfter', args);
        }

        var now = function now() {
            return Date.now ? Date.now() : +new Date();
        };

        var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

        function isDurationValid(m) {
            for (var key in m) {
                if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                    return false;
                }
            }

            var unitHasDecimal = false;
            for (var i = 0; i < ordering.length; ++i) {
                if (m[ordering[i]]) {
                    if (unitHasDecimal) {
                        return false; // only allow non-integers for smallest unit
                    }
                    if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                        unitHasDecimal = true;
                    }
                }
            }

            return true;
        }

        function isValid$1() {
            return this._isValid;
        }

        function createInvalid$1() {
            return createDuration(NaN);
        }

        function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration),
                years = normalizedInput.year || 0,
                quarters = normalizedInput.quarter || 0,
                months = normalizedInput.month || 0,
                weeks = normalizedInput.week || 0,
                days = normalizedInput.day || 0,
                hours = normalizedInput.hour || 0,
                minutes = normalizedInput.minute || 0,
                seconds = normalizedInput.second || 0,
                milliseconds = normalizedInput.millisecond || 0;

            this._isValid = isDurationValid(normalizedInput);

            // representation for dateAddRemove
            this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            this._days = +days + weeks * 7;
            // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            this._months = +months + quarters * 3 + years * 12;

            this._data = {};

            this._locale = getLocale();

            this._bubble();
        }

        function isDuration(obj) {
            return obj instanceof Duration;
        }

        function absRound(number) {
            if (number < 0) {
                return Math.round(-1 * number) * -1;
            } else {
                return Math.round(number);
            }
        }

        // FORMATTING

        function offset(token, separator) {
            addFormatToken(token, 0, 0, function () {
                var offset = this.utcOffset();
                var sign = '+';
                if (offset < 0) {
                    offset = -offset;
                    sign = '-';
                }
                return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
            });
        }

        offset('Z', ':');
        offset('ZZ', '');

        // PARSING

        addRegexToken('Z', matchShortOffset);
        addRegexToken('ZZ', matchShortOffset);
        addParseToken(['Z', 'ZZ'], function (input, array, config) {
            config._useUTC = true;
            config._tzm = offsetFromString(matchShortOffset, input);
        });

        // HELPERS

        // timezone chunker
        // '+10:00' > ['10',  '00']
        // '-1530'  > ['-15', '30']
        var chunkOffset = /([\+\-]|\d\d)/gi;

        function offsetFromString(matcher, string) {
            var matches = (string || '').match(matcher);

            if (matches === null) {
                return null;
            }

            var chunk = matches[matches.length - 1] || [];
            var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
            var minutes = +(parts[1] * 60) + toInt(parts[2]);

            return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
        }

        // Return a moment from input, that is local/utc/zone equivalent to model.
        function cloneWithOffset(input, model) {
            var res, diff;
            if (model._isUTC) {
                res = model.clone();
                diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
                // Use low-level api, because this fn is low-level api.
                res._d.setTime(res._d.valueOf() + diff);
                hooks.updateOffset(res, false);
                return res;
            } else {
                return createLocal(input).local();
            }
        }

        function getDateOffset(m) {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
        }

        // HOOKS

        // This function will be called whenever a moment is mutated.
        // It is intended to keep the offset in sync with the timezone.
        hooks.updateOffset = function () {};

        // MOMENTS

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        function getSetOffset(input, keepLocalTime, keepMinutes) {
            var offset = this._offset || 0,
                localAdjust;
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            if (input != null) {
                if (typeof input === 'string') {
                    input = offsetFromString(matchShortOffset, input);
                    if (input === null) {
                        return this;
                    }
                } else if (Math.abs(input) < 16 && !keepMinutes) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = getDateOffset(this);
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        hooks.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
                return this;
            } else {
                return this._isUTC ? offset : getDateOffset(this);
            }
        }

        function getSetZone(input, keepLocalTime) {
            if (input != null) {
                if (typeof input !== 'string') {
                    input = -input;
                }

                this.utcOffset(input, keepLocalTime);

                return this;
            } else {
                return -this.utcOffset();
            }
        }

        function setOffsetToUTC(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        }

        function setOffsetToLocal(keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.subtract(getDateOffset(this), 'm');
                }
            }
            return this;
        }

        function setOffsetToParsedOffset() {
            if (this._tzm != null) {
                this.utcOffset(this._tzm, false, true);
            } else if (typeof this._i === 'string') {
                var tZone = offsetFromString(matchOffset, this._i);
                if (tZone != null) {
                    this.utcOffset(tZone);
                } else {
                    this.utcOffset(0, true);
                }
            }
            return this;
        }

        function hasAlignedHourOffset(input) {
            if (!this.isValid()) {
                return false;
            }
            input = input ? createLocal(input).utcOffset() : 0;

            return (this.utcOffset() - input) % 60 === 0;
        }

        function isDaylightSavingTime() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }

        function isDaylightSavingTimeShifted() {
            if (!isUndefined(this._isDSTShifted)) {
                return this._isDSTShifted;
            }

            var c = {};

            copyConfig(c, this);
            c = prepareConfig(c);

            if (c._a) {
                var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
                this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
            } else {
                this._isDSTShifted = false;
            }

            return this._isDSTShifted;
        }

        function isLocal() {
            return this.isValid() ? !this._isUTC : false;
        }

        function isUtcOffset() {
            return this.isValid() ? this._isUTC : false;
        }

        function isUtc() {
            return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }

        // ASP.NET json date format regex
        var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function createDuration(input, key) {
            var duration = input,

            // matching against regexp is expensive, do it on demand
            match = null,
                sign,
                ret,
                diffRes;

            if (isDuration(input)) {
                duration = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                };
            } else if (isNumber(input)) {
                duration = {};
                if (key) {
                    duration[key] = input;
                } else {
                    duration.milliseconds = input;
                }
            } else if (!!(match = aspNetRegex.exec(input))) {
                sign = match[1] === '-' ? -1 : 1;
                duration = {
                    y: 0,
                    d: toInt(match[DATE]) * sign,
                    h: toInt(match[HOUR]) * sign,
                    m: toInt(match[MINUTE]) * sign,
                    s: toInt(match[SECOND]) * sign,
                    ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
                };
            } else if (!!(match = isoRegex.exec(input))) {
                sign = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;
                duration = {
                    y: parseIso(match[2], sign),
                    M: parseIso(match[3], sign),
                    w: parseIso(match[4], sign),
                    d: parseIso(match[5], sign),
                    h: parseIso(match[6], sign),
                    m: parseIso(match[7], sign),
                    s: parseIso(match[8], sign)
                };
            } else if (duration == null) {
                // checks for null or undefined
                duration = {};
            } else if ((typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
                diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

                duration = {};
                duration.ms = diffRes.milliseconds;
                duration.M = diffRes.months;
            }

            ret = new Duration(duration);

            if (isDuration(input) && hasOwnProp(input, '_locale')) {
                ret._locale = input._locale;
            }

            return ret;
        }

        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;

        function parseIso(inp, sign) {
            // We'd normally use ~~inp for this, but unfortunately it also
            // converts floats to ints.
            // inp may be undefined, so careful calling replace on it.
            var res = inp && parseFloat(inp.replace(',', '.'));
            // apply sign while we're at it
            return (isNaN(res) ? 0 : res) * sign;
        }

        function positiveMomentsDifference(base, other) {
            var res = { milliseconds: 0, months: 0 };

            res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
            if (base.clone().add(res.months, 'M').isAfter(other)) {
                --res.months;
            }

            res.milliseconds = +other - +base.clone().add(res.months, 'M');

            return res;
        }

        function momentsDifference(base, other) {
            var res;
            if (!(base.isValid() && other.isValid())) {
                return { milliseconds: 0, months: 0 };
            }

            other = cloneWithOffset(other, base);
            if (base.isBefore(other)) {
                res = positiveMomentsDifference(base, other);
            } else {
                res = positiveMomentsDifference(other, base);
                res.milliseconds = -res.milliseconds;
                res.months = -res.months;
            }

            return res;
        }

        // TODO: remove 'name' arg after deprecation is removed
        function createAdder(direction, name) {
            return function (val, period) {
                var dur, tmp;
                //invert the arguments, but complain about it
                if (period !== null && !isNaN(+period)) {
                    deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                    tmp = val;val = period;period = tmp;
                }

                val = typeof val === 'string' ? +val : val;
                dur = createDuration(val, period);
                addSubtract(this, dur, direction);
                return this;
            };
        }

        function addSubtract(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds,
                days = absRound(duration._days),
                months = absRound(duration._months);

            if (!mom.isValid()) {
                // No op
                return;
            }

            updateOffset = updateOffset == null ? true : updateOffset;

            if (months) {
                setMonth(mom, get$$1(mom, 'Month') + months * isAdding);
            }
            if (days) {
                set$1(mom, 'Date', get$$1(mom, 'Date') + days * isAdding);
            }
            if (milliseconds) {
                mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
            }
            if (updateOffset) {
                hooks.updateOffset(mom, days || months);
            }
        }

        var add = createAdder(1, 'add');
        var subtract = createAdder(-1, 'subtract');

        function getCalendarFormat(myMoment, now) {
            var diff = myMoment.diff(now, 'days', true);
            return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
        }

        function calendar$1(time, formats) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're local/utc/offset or not.
            var now = time || createLocal(),
                sod = cloneWithOffset(now, this).startOf('day'),
                format = hooks.calendarFormat(this, sod) || 'sameElse';

            var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

            return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
        }

        function clone() {
            return new Moment(this);
        }

        function isAfter(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);
            if (!(this.isValid() && localInput.isValid())) {
                return false;
            }
            units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
            if (units === 'millisecond') {
                return this.valueOf() > localInput.valueOf();
            } else {
                return localInput.valueOf() < this.clone().startOf(units).valueOf();
            }
        }

        function isBefore(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);
            if (!(this.isValid() && localInput.isValid())) {
                return false;
            }
            units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
            if (units === 'millisecond') {
                return this.valueOf() < localInput.valueOf();
            } else {
                return this.clone().endOf(units).valueOf() < localInput.valueOf();
            }
        }

        function isBetween(from, to, units, inclusivity) {
            inclusivity = inclusivity || '()';
            return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
        }

        function isSame(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input),
                inputMs;
            if (!(this.isValid() && localInput.isValid())) {
                return false;
            }
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                return this.valueOf() === localInput.valueOf();
            } else {
                inputMs = localInput.valueOf();
                return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
            }
        }

        function isSameOrAfter(input, units) {
            return this.isSame(input, units) || this.isAfter(input, units);
        }

        function isSameOrBefore(input, units) {
            return this.isSame(input, units) || this.isBefore(input, units);
        }

        function diff(input, units, asFloat) {
            var that, zoneDelta, delta, output;

            if (!this.isValid()) {
                return NaN;
            }

            that = cloneWithOffset(input, this);

            if (!that.isValid()) {
                return NaN;
            }

            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

            units = normalizeUnits(units);

            switch (units) {
                case 'year':
                    output = monthDiff(this, that) / 12;break;
                case 'month':
                    output = monthDiff(this, that);break;
                case 'quarter':
                    output = monthDiff(this, that) / 3;break;
                case 'second':
                    output = (this - that) / 1e3;break; // 1000
                case 'minute':
                    output = (this - that) / 6e4;break; // 1000 * 60
                case 'hour':
                    output = (this - that) / 36e5;break; // 1000 * 60 * 60
                case 'day':
                    output = (this - that - zoneDelta) / 864e5;break; // 1000 * 60 * 60 * 24, negate dst
                case 'week':
                    output = (this - that - zoneDelta) / 6048e5;break; // 1000 * 60 * 60 * 24 * 7, negate dst
                default:
                    output = this - that;
            }

            return asFloat ? output : absFloor(output);
        }

        function monthDiff(a, b) {
            // difference in months
            var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),

            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
                anchor2,
                adjust;

            if (b - anchor < 0) {
                anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
                // linear across the month
                adjust = (b - anchor) / (anchor - anchor2);
            } else {
                anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
                // linear across the month
                adjust = (b - anchor) / (anchor2 - anchor);
            }

            //check for negative zero, return zero if negative zero
            return -(wholeMonthDiff + adjust) || 0;
        }

        hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
        hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

        function toString() {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }

        function toISOString() {
            if (!this.isValid()) {
                return null;
            }
            var m = this.clone().utc();
            if (m.year() < 0 || m.year() > 9999) {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            }
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }

        /**
         * Return a human readable representation of a moment that can
         * also be evaluated to get a new moment which is the same
         *
         * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
         */
        function inspect() {
            if (!this.isValid()) {
                return 'moment.invalid(/* ' + this._i + ' */)';
            }
            var func = 'moment';
            var zone = '';
            if (!this.isLocal()) {
                func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
                zone = 'Z';
            }
            var prefix = '[' + func + '("]';
            var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
            var datetime = '-MM-DD[T]HH:mm:ss.SSS';
            var suffix = zone + '[")]';

            return this.format(prefix + year + datetime + suffix);
        }

        function format(inputString) {
            if (!inputString) {
                inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
            }
            var output = formatMoment(this, inputString);
            return this.localeData().postformat(output);
        }

        function from(time, withoutSuffix) {
            if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
                return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
            } else {
                return this.localeData().invalidDate();
            }
        }

        function fromNow(withoutSuffix) {
            return this.from(createLocal(), withoutSuffix);
        }

        function to(time, withoutSuffix) {
            if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
                return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
            } else {
                return this.localeData().invalidDate();
            }
        }

        function toNow(withoutSuffix) {
            return this.to(createLocal(), withoutSuffix);
        }

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        function locale(key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = getLocale(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        }

        var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        });

        function localeData() {
            return this._locale;
        }

        function startOf(units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
                case 'year':
                    this.month(0);
                /* falls through */
                case 'quarter':
                case 'month':
                    this.date(1);
                /* falls through */
                case 'week':
                case 'isoWeek':
                case 'day':
                case 'date':
                    this.hours(0);
                /* falls through */
                case 'hour':
                    this.minutes(0);
                /* falls through */
                case 'minute':
                    this.seconds(0);
                /* falls through */
                case 'second':
                    this.milliseconds(0);
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            }
            if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        }

        function endOf(units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }

            // 'date' is an alias for 'day', so it should be considered as such.
            if (units === 'date') {
                units = 'day';
            }

            return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
        }

        function valueOf() {
            return this._d.valueOf() - (this._offset || 0) * 60000;
        }

        function unix() {
            return Math.floor(this.valueOf() / 1000);
        }

        function toDate() {
            return new Date(this.valueOf());
        }

        function toArray$$1() {
            var m = this;
            return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
        }

        function toObject() {
            var m = this;
            return {
                years: m.year(),
                months: m.month(),
                date: m.date(),
                hours: m.hours(),
                minutes: m.minutes(),
                seconds: m.seconds(),
                milliseconds: m.milliseconds()
            };
        }

        function toJSON() {
            // new Date(NaN).toJSON() === null
            return this.isValid() ? this.toISOString() : null;
        }

        function isValid$2() {
            return isValid(this);
        }

        function parsingFlags() {
            return extend({}, getParsingFlags(this));
        }

        function invalidAt() {
            return getParsingFlags(this).overflow;
        }

        function creationData() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            };
        }

        // FORMATTING

        addFormatToken(0, ['gg', 2], 0, function () {
            return this.weekYear() % 100;
        });

        addFormatToken(0, ['GG', 2], 0, function () {
            return this.isoWeekYear() % 100;
        });

        function addWeekYearFormatToken(token, getter) {
            addFormatToken(0, [token, token.length], 0, getter);
        }

        addWeekYearFormatToken('gggg', 'weekYear');
        addWeekYearFormatToken('ggggg', 'weekYear');
        addWeekYearFormatToken('GGGG', 'isoWeekYear');
        addWeekYearFormatToken('GGGGG', 'isoWeekYear');

        // ALIASES

        addUnitAlias('weekYear', 'gg');
        addUnitAlias('isoWeekYear', 'GG');

        // PRIORITY

        addUnitPriority('weekYear', 1);
        addUnitPriority('isoWeekYear', 1);

        // PARSING

        addRegexToken('G', matchSigned);
        addRegexToken('g', matchSigned);
        addRegexToken('GG', match1to2, match2);
        addRegexToken('gg', match1to2, match2);
        addRegexToken('GGGG', match1to4, match4);
        addRegexToken('gggg', match1to4, match4);
        addRegexToken('GGGGG', match1to6, match6);
        addRegexToken('ggggg', match1to6, match6);

        addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        });

        addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
            week[token] = hooks.parseTwoDigitYear(input);
        });

        // MOMENTS

        function getSetWeekYear(input) {
            return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }

        function getSetISOWeekYear(input) {
            return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
        }

        function getISOWeeksInYear() {
            return weeksInYear(this.year(), 1, 4);
        }

        function getWeeksInYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }

        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
            var weeksTarget;
            if (input == null) {
                return weekOfYear(this, dow, doy).year;
            } else {
                weeksTarget = weeksInYear(input, dow, doy);
                if (week > weeksTarget) {
                    week = weeksTarget;
                }
                return setWeekAll.call(this, input, week, weekday, dow, doy);
            }
        }

        function setWeekAll(weekYear, week, weekday, dow, doy) {
            var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
                date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

            this.year(date.getUTCFullYear());
            this.month(date.getUTCMonth());
            this.date(date.getUTCDate());
            return this;
        }

        // FORMATTING

        addFormatToken('Q', 0, 'Qo', 'quarter');

        // ALIASES

        addUnitAlias('quarter', 'Q');

        // PRIORITY

        addUnitPriority('quarter', 7);

        // PARSING

        addRegexToken('Q', match1);
        addParseToken('Q', function (input, array) {
            array[MONTH] = (toInt(input) - 1) * 3;
        });

        // MOMENTS

        function getSetQuarter(input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }

        // FORMATTING

        addFormatToken('D', ['DD', 2], 'Do', 'date');

        // ALIASES

        addUnitAlias('date', 'D');

        // PRIOROITY
        addUnitPriority('date', 9);

        // PARSING

        addRegexToken('D', match1to2);
        addRegexToken('DD', match1to2, match2);
        addRegexToken('Do', function (isStrict, locale) {
            // TODO: Remove "ordinalParse" fallback in next major release.
            return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
        });

        addParseToken(['D', 'DD'], DATE);
        addParseToken('Do', function (input, array) {
            array[DATE] = toInt(input.match(match1to2)[0], 10);
        });

        // MOMENTS

        var getSetDayOfMonth = makeGetSet('Date', true);

        // FORMATTING

        addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

        // ALIASES

        addUnitAlias('dayOfYear', 'DDD');

        // PRIORITY
        addUnitPriority('dayOfYear', 4);

        // PARSING

        addRegexToken('DDD', match1to3);
        addRegexToken('DDDD', match3);
        addParseToken(['DDD', 'DDDD'], function (input, array, config) {
            config._dayOfYear = toInt(input);
        });

        // HELPERS

        // MOMENTS

        function getSetDayOfYear(input) {
            var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
        }

        // FORMATTING

        addFormatToken('m', ['mm', 2], 0, 'minute');

        // ALIASES

        addUnitAlias('minute', 'm');

        // PRIORITY

        addUnitPriority('minute', 14);

        // PARSING

        addRegexToken('m', match1to2);
        addRegexToken('mm', match1to2, match2);
        addParseToken(['m', 'mm'], MINUTE);

        // MOMENTS

        var getSetMinute = makeGetSet('Minutes', false);

        // FORMATTING

        addFormatToken('s', ['ss', 2], 0, 'second');

        // ALIASES

        addUnitAlias('second', 's');

        // PRIORITY

        addUnitPriority('second', 15);

        // PARSING

        addRegexToken('s', match1to2);
        addRegexToken('ss', match1to2, match2);
        addParseToken(['s', 'ss'], SECOND);

        // MOMENTS

        var getSetSecond = makeGetSet('Seconds', false);

        // FORMATTING

        addFormatToken('S', 0, 0, function () {
            return ~~(this.millisecond() / 100);
        });

        addFormatToken(0, ['SS', 2], 0, function () {
            return ~~(this.millisecond() / 10);
        });

        addFormatToken(0, ['SSS', 3], 0, 'millisecond');
        addFormatToken(0, ['SSSS', 4], 0, function () {
            return this.millisecond() * 10;
        });
        addFormatToken(0, ['SSSSS', 5], 0, function () {
            return this.millisecond() * 100;
        });
        addFormatToken(0, ['SSSSSS', 6], 0, function () {
            return this.millisecond() * 1000;
        });
        addFormatToken(0, ['SSSSSSS', 7], 0, function () {
            return this.millisecond() * 10000;
        });
        addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
            return this.millisecond() * 100000;
        });
        addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
            return this.millisecond() * 1000000;
        });

        // ALIASES

        addUnitAlias('millisecond', 'ms');

        // PRIORITY

        addUnitPriority('millisecond', 16);

        // PARSING

        addRegexToken('S', match1to3, match1);
        addRegexToken('SS', match1to3, match2);
        addRegexToken('SSS', match1to3, match3);

        var token;
        for (token = 'SSSS'; token.length <= 9; token += 'S') {
            addRegexToken(token, matchUnsigned);
        }

        function parseMs(input, array) {
            array[MILLISECOND] = toInt(('0.' + input) * 1000);
        }

        for (token = 'S'; token.length <= 9; token += 'S') {
            addParseToken(token, parseMs);
        }
        // MOMENTS

        var getSetMillisecond = makeGetSet('Milliseconds', false);

        // FORMATTING

        addFormatToken('z', 0, 0, 'zoneAbbr');
        addFormatToken('zz', 0, 0, 'zoneName');

        // MOMENTS

        function getZoneAbbr() {
            return this._isUTC ? 'UTC' : '';
        }

        function getZoneName() {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        }

        var proto = Moment.prototype;

        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray$$1;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;

        // Year
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;

        // Week Year
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;

        // Quarter
        proto.quarter = proto.quarters = getSetQuarter;

        // Month
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;

        // Week
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.isoWeeksInYear = getISOWeeksInYear;

        // Day
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;

        // Hour
        proto.hour = proto.hours = getSetHour;

        // Minute
        proto.minute = proto.minutes = getSetMinute;

        // Second
        proto.second = proto.seconds = getSetSecond;

        // Millisecond
        proto.millisecond = proto.milliseconds = getSetMillisecond;

        // Offset
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;

        // Timezone
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;

        // Deprecations
        proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
        proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
        proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
        proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
        proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

        function createUnix(input) {
            return createLocal(input * 1000);
        }

        function createInZone() {
            return createLocal.apply(null, arguments).parseZone();
        }

        function preParsePostFormat(string) {
            return string;
        }

        var proto$1 = Locale.prototype;

        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set$$1;

        // Month
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;

        // Week
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;

        // Day of Week
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;

        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;

        // Hours
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;

        function get$1(format, index, field, setter) {
            var locale = getLocale();
            var utc = createUTC().set(setter, index);
            return locale[field](utc, format);
        }

        function listMonthsImpl(format, index, field) {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';

            if (index != null) {
                return get$1(format, index, field, 'month');
            }

            var i;
            var out = [];
            for (i = 0; i < 12; i++) {
                out[i] = get$1(format, i, field, 'month');
            }
            return out;
        }

        // ()
        // (5)
        // (fmt, 5)
        // (fmt)
        // (true)
        // (true, 5)
        // (true, fmt, 5)
        // (true, fmt)
        function listWeekdaysImpl(localeSorted, format, index, field) {
            if (typeof localeSorted === 'boolean') {
                if (isNumber(format)) {
                    index = format;
                    format = undefined;
                }

                format = format || '';
            } else {
                format = localeSorted;
                index = format;
                localeSorted = false;

                if (isNumber(format)) {
                    index = format;
                    format = undefined;
                }

                format = format || '';
            }

            var locale = getLocale(),
                shift = localeSorted ? locale._week.dow : 0;

            if (index != null) {
                return get$1(format, (index + shift) % 7, field, 'day');
            }

            var i;
            var out = [];
            for (i = 0; i < 7; i++) {
                out[i] = get$1(format, (i + shift) % 7, field, 'day');
            }
            return out;
        }

        function listMonths(format, index) {
            return listMonthsImpl(format, index, 'months');
        }

        function listMonthsShort(format, index) {
            return listMonthsImpl(format, index, 'monthsShort');
        }

        function listWeekdays(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
        }

        function listWeekdaysShort(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
        }

        function listWeekdaysMin(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
        }

        getSetGlobalLocale('en', {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function ordinal(number) {
                var b = number % 10,
                    output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                return number + output;
            }
        });

        // Side effect imports
        hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
        hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

        var mathAbs = Math.abs;

        function abs() {
            var data = this._data;

            this._milliseconds = mathAbs(this._milliseconds);
            this._days = mathAbs(this._days);
            this._months = mathAbs(this._months);

            data.milliseconds = mathAbs(data.milliseconds);
            data.seconds = mathAbs(data.seconds);
            data.minutes = mathAbs(data.minutes);
            data.hours = mathAbs(data.hours);
            data.months = mathAbs(data.months);
            data.years = mathAbs(data.years);

            return this;
        }

        function addSubtract$1(duration, input, value, direction) {
            var other = createDuration(input, value);

            duration._milliseconds += direction * other._milliseconds;
            duration._days += direction * other._days;
            duration._months += direction * other._months;

            return duration._bubble();
        }

        // supports only 2.0-style add(1, 's') or add(duration)
        function add$1(input, value) {
            return addSubtract$1(this, input, value, 1);
        }

        // supports only 2.0-style subtract(1, 's') or subtract(duration)
        function subtract$1(input, value) {
            return addSubtract$1(this, input, value, -1);
        }

        function absCeil(number) {
            if (number < 0) {
                return Math.floor(number);
            } else {
                return Math.ceil(number);
            }
        }

        function bubble() {
            var milliseconds = this._milliseconds;
            var days = this._days;
            var months = this._months;
            var data = this._data;
            var seconds, minutes, hours, years, monthsFromDays;

            // if we have a mix of positive and negative values, bubble down first
            // check: https://github.com/moment/moment/issues/2166
            if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
                milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
                days = 0;
                months = 0;
            }

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absFloor(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absFloor(seconds / 60);
            data.minutes = minutes % 60;

            hours = absFloor(minutes / 60);
            data.hours = hours % 24;

            days += absFloor(hours / 24);

            // convert days to months
            monthsFromDays = absFloor(daysToMonths(days));
            months += monthsFromDays;
            days -= absCeil(monthsToDays(monthsFromDays));

            // 12 months -> 1 year
            years = absFloor(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;

            return this;
        }

        function daysToMonths(days) {
            // 400 years have 146097 days (taking into account leap year rules)
            // 400 years have 12 months === 4800
            return days * 4800 / 146097;
        }

        function monthsToDays(months) {
            // the reverse of daysToMonths
            return months * 146097 / 4800;
        }

        function as(units) {
            if (!this.isValid()) {
                return NaN;
            }
            var days;
            var months;
            var milliseconds = this._milliseconds;

            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + milliseconds / 864e5;
                months = this._months + daysToMonths(days);
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                    case 'week':
                        return days / 7 + milliseconds / 6048e5;
                    case 'day':
                        return days + milliseconds / 864e5;
                    case 'hour':
                        return days * 24 + milliseconds / 36e5;
                    case 'minute':
                        return days * 1440 + milliseconds / 6e4;
                    case 'second':
                        return days * 86400 + milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond':
                        return Math.floor(days * 864e5) + milliseconds;
                    default:
                        throw new Error('Unknown unit ' + units);
                }
            }
        }

        // TODO: Use this.as('ms')?
        function valueOf$1() {
            if (!this.isValid()) {
                return NaN;
            }
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }

        function makeAs(alias) {
            return function () {
                return this.as(alias);
            };
        }

        var asMilliseconds = makeAs('ms');
        var asSeconds = makeAs('s');
        var asMinutes = makeAs('m');
        var asHours = makeAs('h');
        var asDays = makeAs('d');
        var asWeeks = makeAs('w');
        var asMonths = makeAs('M');
        var asYears = makeAs('y');

        function clone$1() {
            return createDuration(this);
        }

        function get$2(units) {
            units = normalizeUnits(units);
            return this.isValid() ? this[units + 's']() : NaN;
        }

        function makeGetter(name) {
            return function () {
                return this.isValid() ? this._data[name] : NaN;
            };
        }

        var milliseconds = makeGetter('milliseconds');
        var seconds = makeGetter('seconds');
        var minutes = makeGetter('minutes');
        var hours = makeGetter('hours');
        var days = makeGetter('days');
        var months = makeGetter('months');
        var years = makeGetter('years');

        function weeks() {
            return absFloor(this.days() / 7);
        }

        var round = Math.round;
        var thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month
            M: 11 // months to year
        };

        // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }

        function relativeTime$1(posNegDuration, withoutSuffix, locale) {
            var duration = createDuration(posNegDuration).abs();
            var seconds = round(duration.as('s'));
            var minutes = round(duration.as('m'));
            var hours = round(duration.as('h'));
            var days = round(duration.as('d'));
            var months = round(duration.as('M'));
            var years = round(duration.as('y'));

            var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];

            a[2] = withoutSuffix;
            a[3] = +posNegDuration > 0;
            a[4] = locale;
            return substituteTimeAgo.apply(null, a);
        }

        // This function allows you to set the rounding function for relative time strings
        function getSetRelativeTimeRounding(roundingFunction) {
            if (roundingFunction === undefined) {
                return round;
            }
            if (typeof roundingFunction === 'function') {
                round = roundingFunction;
                return true;
            }
            return false;
        }

        // This function allows you to set a threshold for relative time strings
        function getSetRelativeTimeThreshold(threshold, limit) {
            if (thresholds[threshold] === undefined) {
                return false;
            }
            if (limit === undefined) {
                return thresholds[threshold];
            }
            thresholds[threshold] = limit;
            if (threshold === 's') {
                thresholds.ss = limit - 1;
            }
            return true;
        }

        function humanize(withSuffix) {
            if (!this.isValid()) {
                return this.localeData().invalidDate();
            }

            var locale = this.localeData();
            var output = relativeTime$1(this, !withSuffix, locale);

            if (withSuffix) {
                output = locale.pastFuture(+this, output);
            }

            return locale.postformat(output);
        }

        var abs$1 = Math.abs;

        function sign(x) {
            return (x > 0) - (x < 0) || +x;
        }

        function toISOString$1() {
            // for ISO strings we do not use the normal bubbling rules:
            //  * milliseconds bubble up until they become hours
            //  * days do not bubble at all
            //  * months bubble up until they become years
            // This is because there is no context-free conversion between hours and days
            // (think of clock changes)
            // and also not between days and months (28-31 days per month)
            if (!this.isValid()) {
                return this.localeData().invalidDate();
            }

            var seconds = abs$1(this._milliseconds) / 1000;
            var days = abs$1(this._days);
            var months = abs$1(this._months);
            var minutes, hours, years;

            // 3600 seconds -> 60 minutes -> 1 hour
            minutes = absFloor(seconds / 60);
            hours = absFloor(minutes / 60);
            seconds %= 60;
            minutes %= 60;

            // 12 months -> 1 year
            years = absFloor(months / 12);
            months %= 12;

            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var Y = years;
            var M = months;
            var D = days;
            var h = hours;
            var m = minutes;
            var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
            var total = this.asSeconds();

            if (!total) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            var totalSign = total < 0 ? '-' : '';
            var ymSign = sign(this._months) !== sign(total) ? '-' : '';
            var daysSign = sign(this._days) !== sign(total) ? '-' : '';
            var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

            return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
        }

        var proto$2 = Duration.prototype;

        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;

        // Deprecations
        proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
        proto$2.lang = lang;

        // Side effect imports

        // FORMATTING

        addFormatToken('X', 0, 0, 'unix');
        addFormatToken('x', 0, 0, 'valueOf');

        // PARSING

        addRegexToken('x', matchSigned);
        addRegexToken('X', matchTimestamp);
        addParseToken('X', function (input, array, config) {
            config._d = new Date(parseFloat(input, 10) * 1000);
        });
        addParseToken('x', function (input, array, config) {
            config._d = new Date(toInt(input));
        });

        // Side effect imports


        hooks.version = '2.19.1';

        setHookCallback(createLocal);

        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;

        return hooks;
    });
});

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddPipe$1 = function () {
    function AddPipe() {}
    AddPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
            throw new Error('AddPipe: missing required arguments');
        }
        return moment(value).add(amount, unit);
    };
    return AddPipe;
}();
AddPipe$1 = __decorate([core_1__default.Pipe({ name: 'amAdd' })], AddPipe$1);
var AddPipe_1 = AddPipe$1;

var add_pipe = {
    AddPipe: AddPipe_1
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$1 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = commonjsGlobal && commonjsGlobal.__metadata || function (k, v) {
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var CalendarPipe$1 = CalendarPipe_1 = function () {
    function CalendarPipe(cdRef, ngZone) {
        var _this = this;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe_1.initTimer(ngZone);
        CalendarPipe_1.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe_1.midnight.subscribe(function () {
            _this.ngZone.run(function () {
                return _this.cdRef.markForCheck();
            });
        });
    }
    CalendarPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var formats = null;
        var referenceTime = null;
        for (var i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (_typeof(args[i]) === 'object' && !moment.isMoment(args[i])) {
                    formats = args[i];
                } else {
                    referenceTime = momentConstructor(args[i]);
                }
            }
        }
        return momentConstructor(value).calendar(referenceTime, formats);
    };
    CalendarPipe.prototype.ngOnDestroy = function () {
        if (CalendarPipe_1.refs > 0) {
            CalendarPipe_1.refs--;
        }
        if (CalendarPipe_1.refs === 0) {
            CalendarPipe_1.removeTimer();
        }
        this.midnightSub.unsubscribe();
    };
    CalendarPipe.initTimer = function (ngZone) {
        // initialize the timer
        if (!CalendarPipe_1.midnight) {
            CalendarPipe_1.midnight = new core_1__default.EventEmitter();
            if (typeof window !== 'undefined') {
                var timeToUpdate_1 = CalendarPipe_1._getMillisecondsUntilUpdate();
                CalendarPipe_1.timer = ngZone.runOutsideAngular(function () {
                    return window.setTimeout(function () {
                        // emit the current date
                        CalendarPipe_1.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe_1.removeTimer();
                        CalendarPipe_1.initTimer(ngZone);
                    }, timeToUpdate_1);
                });
            }
        }
    };
    CalendarPipe.removeTimer = function () {
        if (CalendarPipe_1.timer) {
            window.clearTimeout(CalendarPipe_1.timer);
            CalendarPipe_1.timer = null;
            CalendarPipe_1.midnight = null;
        }
    };
    CalendarPipe._getMillisecondsUntilUpdate = function () {
        var now = momentConstructor();
        var tomorrow = momentConstructor().startOf('day').add(1, 'days');
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    };
    return CalendarPipe;
}();
/**
 * @private Internal reference counter, so we can clean up when no instances are in use
 * @type {number}
 */
CalendarPipe$1.refs = 0;
CalendarPipe$1 = CalendarPipe_1 = __decorate$1([core_1__default.Pipe({ name: 'amCalendar', pure: false }), __metadata("design:paramtypes", [core_1__default.ChangeDetectorRef, core_1__default.NgZone])], CalendarPipe$1);
var CalendarPipe_2 = CalendarPipe$1;
var CalendarPipe_1;

var calendar_pipe = {
    CalendarPipe: CalendarPipe_2
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$2 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor$1 = moment.default || moment;
var DateFormatPipe$1 = function () {
    function DateFormatPipe() {}
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) return '';
        return momentConstructor$1(value).format(args[0]);
    };
    return DateFormatPipe;
}();
DateFormatPipe$1 = __decorate$2([core_1__default.Pipe({ name: 'amDateFormat' })], DateFormatPipe$1);
var DateFormatPipe_1 = DateFormatPipe$1;

var dateFormat_pipe = {
    DateFormatPipe: DateFormatPipe_1
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$3 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor$2 = moment.default || moment;
var DifferencePipe$1 = function () {
    function DifferencePipe() {}
    DifferencePipe.prototype.transform = function (value, otherValue, unit, precision) {
        var date = momentConstructor$2(value);
        var date2 = otherValue !== null ? momentConstructor$2(otherValue) : momentConstructor$2();
        return date.diff(date2, unit, precision);
    };
    return DifferencePipe;
}();
DifferencePipe$1 = __decorate$3([core_1__default.Pipe({ name: 'amDifference' })], DifferencePipe$1);
var DifferencePipe_1 = DifferencePipe$1;

var difference_pipe = {
    DifferencePipe: DifferencePipe_1
};

"use strict";
var __decorate$4 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe$1 = function () {
    function DurationPipe() {}
    DurationPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return moment.duration(value, args[0]).humanize();
    };
    return DurationPipe;
}();
DurationPipe$1 = __decorate$4([core_1__default.Pipe({ name: 'amDuration' })], DurationPipe$1);
var DurationPipe_1 = DurationPipe$1;

var duration_pipe = {
    DurationPipe: DurationPipe_1
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$5 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FromUnixPipe$1 = function () {
    function FromUnixPipe() {}
    FromUnixPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return moment.unix(value);
    };
    return FromUnixPipe;
}();
FromUnixPipe$1 = __decorate$5([core_1__default.Pipe({ name: 'amFromUnix' })], FromUnixPipe$1);
var FromUnixPipe_1 = FromUnixPipe$1;

var fromUnix_pipe = {
    FromUnixPipe: FromUnixPipe_1
};

"use strict";
var __decorate$6 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParsePipe$1 = function () {
    function ParsePipe() {}
    ParsePipe.prototype.transform = function (value, format) {
        return moment(value, format);
    };
    return ParsePipe;
}();
ParsePipe$1 = __decorate$6([core_1__default.Pipe({ name: 'amParse' })], ParsePipe$1);
var ParsePipe_1 = ParsePipe$1;

var parse_pipe = {
    ParsePipe: ParsePipe_1
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$8 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubtractPipe$1 = function () {
    function SubtractPipe() {}
    SubtractPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return moment(value).subtract(amount, unit);
    };
    return SubtractPipe;
}();
SubtractPipe$1 = __decorate$8([core_1__default.Pipe({ name: 'amSubtract' })], SubtractPipe$1);
var SubtractPipe_1 = SubtractPipe$1;

var subtract_pipe = {
    SubtractPipe: SubtractPipe_1
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$9 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = commonjsGlobal && commonjsGlobal.__metadata || function (k, v) {
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor$4 = moment.default || moment;
var TimeAgoPipe$1 = function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor$4(value).from(momentConstructor$4(), omitSuffix);
        } else {
            this.createTimer();
        }
        return this.lastText;
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.createTimer = function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        var momentInstance = momentConstructor$4(this.lastValue);
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor$4(_this.lastValue).from(momentConstructor$4(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () {
                        return _this.cdRef.markForCheck();
                    });
                }, timeToUpdate);
            }
        });
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor$4().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        } else if (howOld < 60) {
            return 30;
        } else if (howOld < 180) {
            return 300;
        } else {
            return 3600;
        }
    };
    TimeAgoPipe.prototype.hasChanged = function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime || omitSuffix !== this.lastOmitSuffix;
    };
    TimeAgoPipe.prototype.getTime = function (value) {
        if (moment.isDate(value)) {
            return value.getTime();
        } else if (moment.isMoment(value)) {
            return value.valueOf();
        } else {
            return momentConstructor$4(value).valueOf();
        }
    };
    return TimeAgoPipe;
}();
TimeAgoPipe$1 = __decorate$9([core_1__default.Pipe({ name: 'amTimeAgo', pure: false }), __metadata$1("design:paramtypes", [core_1__default.ChangeDetectorRef, core_1__default.NgZone])], TimeAgoPipe$1);
var TimeAgoPipe_1 = TimeAgoPipe$1;

var timeAgo_pipe = {
    TimeAgoPipe: TimeAgoPipe_1
};

"use strict";
var __decorate$10 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtcPipe$1 = function () {
    function UtcPipe() {}
    UtcPipe.prototype.transform = function (value) {
        return moment(value).utc();
    };
    return UtcPipe;
}();
UtcPipe$1 = __decorate$10([core_1__default.Pipe({ name: 'amUtc' })], UtcPipe$1);
var UtcPipe_1 = UtcPipe$1;

var utc_pipe = {
    UtcPipe: UtcPipe_1
};

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var __decorate$11 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FromUtcPipe = function () {
    function FromUtcPipe() {}
    FromUtcPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return moment.utc(value);
    };
    return FromUtcPipe;
}();
FromUtcPipe = __decorate$11([core_1__default.Pipe({ name: 'amFromUtc' })], FromUtcPipe);
var FromUtcPipe_1 = FromUtcPipe;

var fromUtc_pipe = {
    FromUtcPipe: FromUtcPipe_1
};

"use strict";
var __decorate$12 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalTimePipe$1 = function () {
    function LocalTimePipe() {}
    LocalTimePipe.prototype.transform = function (value) {
        return moment(value).local();
    };
    return LocalTimePipe;
}();
LocalTimePipe$1 = __decorate$12([core_1__default.Pipe({ name: 'amLocal' })], LocalTimePipe$1);
var LocalTimePipe_1 = LocalTimePipe$1;

var local_pipe = {
    LocalTimePipe: LocalTimePipe_1
};

"use strict";
var __decorate$13 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalePipe$1 = function () {
    function LocalePipe() {}
    LocalePipe.prototype.transform = function (value, locale) {
        return moment(value).locale(locale);
    };
    return LocalePipe;
}();
LocalePipe$1 = __decorate$13([core_1__default.Pipe({ name: 'amLocale' })], LocalePipe$1);
var LocalePipe_1 = LocalePipe$1;

var locale_pipe = {
    LocalePipe: LocalePipe_1
};

"use strict";
var __decorate$7 = commonjsGlobal && commonjsGlobal.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ANGULAR_MOMENT_PIPES = [add_pipe.AddPipe, calendar_pipe.CalendarPipe, dateFormat_pipe.DateFormatPipe, difference_pipe.DifferencePipe, duration_pipe.DurationPipe, fromUnix_pipe.FromUnixPipe, parse_pipe.ParsePipe, subtract_pipe.SubtractPipe, timeAgo_pipe.TimeAgoPipe, utc_pipe.UtcPipe, fromUtc_pipe.FromUtcPipe, local_pipe.LocalTimePipe, locale_pipe.LocalePipe];
var MomentModule$1 = function () {
    function MomentModule() {}
    return MomentModule;
}();
MomentModule$1 = __decorate$7([core_1__default.NgModule({
    declarations: ANGULAR_MOMENT_PIPES,
    exports: ANGULAR_MOMENT_PIPES
})], MomentModule$1);
var MomentModule_1 = MomentModule$1;

var moment_module = {
    MomentModule: MomentModule_1
};

"use strict";

var MomentModule = moment_module.MomentModule;

var _dec$8$1;
var _class$8$1;

var MODULES = [common.CommonModule, forms.FormsModule, PrimengModule, MomentModule];
var ELEMENTS = [SafeHtmlPipe, ValidationErrorComponent, Rule, NotificationsComponent];

var TuneUpCoreModule = (_dec$8$1 = core_1.NgModule({
    imports: [].concat(MODULES),
    exports: [].concat(MODULES, ELEMENTS),
    declarations: [].concat(ELEMENTS)
}), _dec$8$1(_class$8$1 = function TuneUpCoreModule() {
    classCallCheck$1(this, TuneUpCoreModule);
}) || _class$8$1);

var _dec;
var _class;

var AppModule = (_dec = core_1.NgModule({
  imports: [TuneUpCoreModule, platformBrowser.BrowserModule, animations.BrowserAnimationsModule, http.HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, SceneComponent, AppbarComponent, MenuComponent, ContentComponent, MenuItemComponent],
  providers: [ModuleLoaderProvider, APIInterceptorProvider, TokenInterceptorProvider, ResponseInterceptorProvider, AuthService, AgentService, AboutService, NotificationsService, BreadcrumbService],
  bootstrap: [AppComponent]
}), _dec(_class = function AppModule() {
  classCallCheck(this, AppModule);
}) || _class);

platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);

exports.configService = configService;
exports.APIInterceptorProvider = APIInterceptorProvider;
exports.SafeHtmlPipe = SafeHtmlPipe;
exports.ModuleLoaderProvider = ModuleLoaderProvider;
exports.PrimengModule = PrimengModule;
exports.ValidationErrorComponent = ValidationErrorComponent;
exports.Rule = Rule;
exports.NotificationsComponent = NotificationsComponent;
exports.NotificationsService = NotificationsService;
exports.TuneUpCoreModule = TuneUpCoreModule;
exports.AppModule = AppModule;
exports.AuthService = AuthService;
exports.AgentService = AgentService;
exports.AboutService = AboutService;
exports.BreadcrumbService = BreadcrumbService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.app.umd.js.map
