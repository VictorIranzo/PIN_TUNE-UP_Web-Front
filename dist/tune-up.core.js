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

import { platformBrowserDynamic as platformBrowserDynamic$1 } from '@angular/platform-browser-dynamic';
import { Compiler, Component, Directive, Injectable, Input, NgModule, NgModuleFactoryLoader, ViewChild, enableProdMode, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NG_VALIDATORS, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputTextModule } from 'primeng/primeng';

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





var defineProperty = function (obj, key, value) {
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





















var slicedToArray = function () {
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













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _dec$1;
var _class$1;

var NAMESPACE = 'tuneUp';
var SEPARATOR = '#';

var ModuleLoader = (_dec$1 = Injectable(), _dec$1(_class$1 = function () {
  function ModuleLoader(compiler) {
    classCallCheck(this, ModuleLoader);

    this.compiler = compiler;
  }

  createClass(ModuleLoader, [{
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
          _path$split2 = slicedToArray(_path$split, 3),
          modulePath = _path$split2[0],
          moduleNamespace = _path$split2[1],
          moduleName = _path$split2[2];

      return { modulePath: modulePath, moduleNamespace: moduleNamespace, moduleName: moduleName };
    }
  }]);
  return ModuleLoader;
}()) || _class$1);
Reflect.defineMetadata('design:paramtypes', [Compiler], ModuleLoader);

var ModuleLoaderProvider = {
  provide: NgModuleFactoryLoader,
  useClass: ModuleLoader
};

var _dec$2;
var _class$2;

var AuthGuard = (_dec$2 = Injectable(), _dec$2(_class$2 = function () {
    function AuthGuard() {
        classCallCheck(this, AuthGuard);
    }

    createClass(AuthGuard, [{
        key: 'canActivate',
        value: function canActivate() {
            return true;
        }
    }, {
        key: 'canLoad',
        value: function canLoad() {
            return true;
        }
    }, {
        key: 'canActivateChild',
        value: function canActivateChild() {
            return true;
        }
    }]);
    return AuthGuard;
}()) || _class$2);

// export * from './adminguard';

// import {SceneComponent} from '../components';

var mainRoute = {
  path: '',
  // component: SceneComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  canLoadChildren: [AuthGuard],
  children: []
};
var mainRedirectRoute = {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
};
var defaultRoutes = {
  mainRoute: mainRoute,
  mainRedirectRoute: mainRedirectRoute
};

function unwrapExports (x) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;



var _assertString2 = _interopRequireDefault(assertString_1);



var _toString2 = _interopRequireDefault(toString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var defaultConfig = {
  validators: validator,
  validations: {},
  defaultValidationError: 'Invalid field',
  routes: defaultRoutes,
  menuItems: []
};

var ConfigService = function () {
  function ConfigService() {
    classCallCheck(this, ConfigService);

    Object.assign(this, defaultConfig);
  }

  createClass(ConfigService, [{
    key: 'init',
    value: function init(configObject) {
      Object.assign(this, configObject);
    }
  }, {
    key: 'addValidators',
    value: function addValidators(newValidators) {
      this._validators = Object.assign(this._validators, newValidators);
    }
  }, {
    key: 'addValidations',
    value: function addValidations(newValidations) {
      this._validations = Object.assign(this._validations, newValidations);
    }
  }, {
    key: 'getRouteObjects',
    value: function getRouteObjects() {
      return Object.values(this._routes);
    }
  }, {
    key: 'addRoutesWithAuth',
    value: function addRoutesWithAuth(childRoutes) {
      var mainRoute = this._routes.mainRoute;
      mainRoute && mainRoute.children && childRoutes.map(function (route) {
        route.canLoad = route.canLoad || [];
        route.canLoad = [].concat(toConsumableArray(route.canLoad), toConsumableArray(mainRoute.canLoadChildren));
        mainRoute.children.push(route);
      });
    }
  }, {
    key: 'addMenuItems',
    value: function addMenuItems(newMenuItems) {
      this._menuItems = this._menuItems.concat(newMenuItems);
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
    key: 'routes',
    get: function get$$1() {
      return this._routes;
    },
    set: function set$$1(value) {
      this._routes = value;
    }
  }, {
    key: 'menuItems',
    get: function get$$1() {
      return this._menuItems;
    },
    set: function set$$1(value) {
      this._menuItems = value;
    }
  }]);
  return ConfigService;
}();

var configService = new ConfigService();

var homeRoute = {
    path: 'home',
    loadChildren: 'src/app/modules/home/dist/tune-up.home.umd.min.js#home#HomeModule'
};
var homeMenuItem = {
    path: 'home',
    text: 'Inicio',
    icon: 'TODO',
    adminOnly: false
};

configService.addMenuItems([homeMenuItem]);

configService.addRoutesWithAuth([homeRoute]);

var customValidators = {
  startsWithHello: function startsWithHello(value) {
    return value.indexOf('hello') === 0;
  },
  passwordDifferentFromEmail: function passwordDifferentFromEmail(value, email) {
    return value !== email;
  }
};
var myValidations = {
  foo: {
    email: [{
      isEmail: {
        message: 'must be a valid email'
      }
    }, {
      contains: {
        message: 'must contain .es',
        arguments: ['.es']
      }
    }, {
      startsWithHello: {
        message: 'email must start with "hello"'
      }
    }],
    password: [{
      passwordDifferentFromEmail: {
        message: 'password must be different from email',
        arguments: [['email']]
      }
    }]
  }
};

/*
  <form>
    <input type="text" rule="foo.email" [(ngModel)]="person.profile.email" mame="email">
  </form>
*/

configService.addValidations(myValidations);

configService.addValidators(customValidators);

var _dec$3;
var _class$3;

var RoutingModule = (_dec$3 = NgModule({
  imports: [RouterModule.forRoot(configService.getRouteObjects(), {
    useHash: true,
    enableTracing: "production" !== 'production'
  })],
  exports: [RouterModule],
  providers: [AuthGuard]
}), _dec$3(_class$3 = function RoutingModule() {
  classCallCheck(this, RoutingModule);
}) || _class$3);

var BASE_URL = 'http://cliente.tuneupprocess.com/webapi';

var _dec$4;
var _class$4;

var APIInterceptor = (_dec$4 = Injectable(), _dec$4(_class$4 = function () {
  function APIInterceptor() {
    classCallCheck(this, APIInterceptor);
  }

  createClass(APIInterceptor, [{
    key: 'intercept',
    value: function intercept(req, next) {
      var apiReq = req.clone({ url: BASE_URL + '/' + req.url });
      return next.handle(apiReq);
    }
  }]);
  return APIInterceptor;
}()) || _class$4);

var HttpInterceptorsProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: APIInterceptor,
  multi: true
};

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

var NG_VALIDATORS_PROVIDER = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(function () {
    return Rule;
  }),
  multi: true
};

var Rule = (_dec$5 = Directive({
  selector: '[rule][ngModel]',
  providers: [NG_VALIDATORS_PROVIDER]
}), _dec2 = Input('rule'), _dec$5(_class$5 = (_class2 = function () {
  function Rule() {
    classCallCheck(this, Rule);

    _initDefineProp(this, 'path', _descriptor, this);

    this._subscribersCache = [];
  }

  createClass(Rule, [{
    key: 'ngOnInit',
    value: function ngOnInit() {
      this.validationFunctions = this._getValidationFunctions();
    }
  }, {
    key: 'validate',
    value: function validate(control) {
      var errors = Validators.compose(this.validationFunctions)(control);
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
        var thisArgs = [control.value || ''].concat(toConsumableArray(args), toConsumableArray(modelValues));
        return func.apply(scope, thisArgs) ? null : defineProperty({}, func.name, msg);
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
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'path', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class$5);

var html = "<form #frm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" [(ngModel)]=\"foo.email\" rule=\"foo.email\" name=\"email\" pInputText>    \n    <input type=\"password\" [(ngModel)]=\"foo.password\" rule=\"foo.password\" name=\"password\" pInputText>        \n    <button type=\"submit\">Submit</button>    \n</form>\n\n<p>CURRENT ROUTE</p>\n<router-outlet></router-outlet>";

var _dec$6;
var _dec2$1;
var _class$6;
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

// import './css/index.css';

var AppComponent = (_dec$6 = Component({
  selector: 'tn-app',
  template: html
}), _dec2$1 = ViewChild('frm'), _dec$6(_class$6 = (_class2$1 = function AppComponent() {
  var _this = this;

  classCallCheck(this, AppComponent);
  this.foo = {
    email: undefined
  };

  _initDefineProp$1(this, 'form', _descriptor$1, this);

  this.onSubmit = function () {
    console.log(_this);
  };
}, (_descriptor$1 = _applyDecoratedDescriptor$1(_class2$1.prototype, 'form', [_dec2$1], {
  enumerable: true,
  initializer: function initializer() {
    return this.form;
  }
})), _class2$1)) || _class$6);

var _dec;
var _class;

var primengModules = [InputTextModule];

var AppModule = (_dec = NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, RoutingModule].concat(primengModules),
  declarations: [AppComponent, Rule],
  providers: [ModuleLoaderProvider, HttpInterceptorsProvider],
  bootstrap: [AppComponent]
}), _dec(_class = function AppModule() {
  classCallCheck(this, AppModule);
}) || _class);

__$styleInject("@charset \"UTF-8\";.fa-sort:before{content:\"sort\"}.fa-sort-asc:before{content:\"keyboard_arrow_up\"}.fa-sort-desc:before{content:\"keyboard_arrow_down\"}.fa-angle-up{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.fa-angle-up:before{content:\"play_arrow\"}.fa-angle-double-up{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.fa-angle-double-up:before{content:\"skip_next\"}.fa-angle-down{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-angle-down:before{content:\"play_arrow\"}.fa-angle-double-down{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.fa-angle-double-down:before{content:\"skip_previous\"}.fa-angle-right:before{content:\"play_arrow\"}.fa-angle-double-right:before{content:\"fast_forward\"}.fa-angle-left{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-angle-left:before{content:\"play_arrow\"}.fa-angle-double-left:before{content:\"fast_rewind\"}.fa-caret-up:before{content:\"keyboard_arrow_up\"}.fa-caret-down:before{content:\"keyboard_arrow_down\"}.fa-caret-right:before{content:\"keyboard_arrow_right\"}.fa-caret-left:before{content:\"keyboard_arrow_left\"}.fa-search:before{content:\"search\"}.fa-close:before{content:\"close\"}.fa-minus:before{content:\"remove\"}.fa-plus:before{content:\"add\"}.fa-check:before{content:\"check\"}.fa-info-circle:before{content:\"info\"}.fa-upload:before{content:\"file_upload\"}.fa-chevron-circle-left:before{content:\"keyboard_arrow_left\"}.fa-chevron-circle-right:before{content:\"keyboard_arrow_right\"}.fa-chevron-circle-down:before{content:\"keyboard_arrow_down\"}.fa-chevron-circle-up:before{content:\"keyboard_arrow_up\"}.fa-home:before{content:\"home\"}.fa-chevron-right:before{content:\"chevron_right\"}.fa-chevron-left:before{content:\"chevron_left\"}.fa-circle-o:before{content:\"radio_button_unchecked\"}.fa-dot-circle-o:before{content:\"radio_button_checked\"}.fa-arrow-circle-right:before{content:\"play_circle_outline\"}.fa-arrow-circle-left{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-arrow-circle-left:before{content:\"play_circle_outline\"}.fa-calendar:before{content:\"date_range\"}.fa-arrow-down:before{content:\"arrow_downward\"}.fa-arrow-up:before{content:\"arrow_upward\"}.ui-icon-3d-rotation:before{content:\"3d_rotation\"}.ui-icon-ac-unit:before{content:\"ac_unit\"}.ui-icon-access-alarm:before{content:\"access_alarm\"}.ui-icon-access-alarms:before{content:\"access_alarms\"}.ui-icon-access-time:before{content:\"access_time\"}.ui-icon-accessibility:before{content:\"accessibility\"}.ui-icon-accessible:before{content:\"accessible\"}.ui-icon-account-balance:before{content:\"account_balance\"}.ui-icon-account-balance-wallet:before{content:\"account_balance_wallet\"}.ui-icon-account-box:before{content:\"account_box\"}.ui-icon-account-circle:before{content:\"account_circle\"}.ui-icon-add:before{content:\"add\"}.ui-icon-add-a-photo:before{content:\"add_a_photo\"}.ui-icon-add-alarm:before{content:\"add_alarm\"}.ui-icon-add-alert:before{content:\"add_alert\"}.ui-icon-add-box:before{content:\"add_box\"}.ui-icon-add-circle:before{content:\"add_circle\"}.ui-icon-add-circle-outline:before{content:\"add_circle_outline\"}.ui-icon-add-location:before{content:\"add_location\"}.ui-icon-add-shopping-cart:before{content:\"add_shopping_cart\"}.ui-icon-add-to-photos:before{content:\"add_to_photos\"}.ui-icon-add-to-queue:before{content:\"add_to_queue\"}.ui-icon-adjust:before{content:\"adjust\"}.ui-icon-airline-seat-flat:before{content:\"airline_seat_flat\"}.ui-icon-airline-seat-flat-angled:before{content:\"airline_seat_flat_angled\"}.ui-icon-airline-seat-individual-suite:before{content:\"airline_seat_individual_suite\"}.ui-icon-airline-seat-legroom-extra:before{content:\"airline_seat_legroom_extra\"}.ui-icon-airline-seat-legroom-normal:before{content:\"airline_seat_legroom_normal\"}.ui-icon-airline-seat-legroom-reduced:before{content:\"airline_seat_legroom_reduced\"}.ui-icon-airline-seat-recline-extra:before{content:\"airline_seat_recline_extra\"}.ui-icon-airline-seat-recline-normal:before{content:\"airline_seat_recline_normal\"}.ui-icon-airplanemode-active:before{content:\"airplanemode_active\"}.ui-icon-airplanemode-inactive:before{content:\"airplanemode_inactive\"}.ui-icon-airplay:before{content:\"airplay\"}.ui-icon-airport-shuttle:before{content:\"airport_shuttle\"}.ui-icon-alarm:before{content:\"alarm\"}.ui-icon-alarm-add:before{content:\"alarm_add\"}.ui-icon-alarm-off:before{content:\"alarm_off\"}.ui-icon-alarm-on:before{content:\"alarm_on\"}.ui-icon-album:before{content:\"album\"}.ui-icon-all-inclusive:before{content:\"all_inclusive\"}.ui-icon-all-out:before{content:\"all_out\"}.ui-icon-android:before{content:\"android\"}.ui-icon-announcement:before{content:\"announcement\"}.ui-icon-apps:before{content:\"apps\"}.ui-icon-archive:before{content:\"archive\"}.ui-icon-arrow-back:before{content:\"arrow_back\"}.ui-icon-arrow-downward:before{content:\"arrow_downward\"}.ui-icon-arrow-drop-down:before{content:\"arrow_drop_down\"}.ui-icon-arrow-drop-down-circle:before{content:\"arrow_drop_down_circle\"}.ui-icon-arrow-drop-up:before{content:\"arrow_drop_up\"}.ui-icon-arrow-forward:before{content:\"arrow_forward\"}.ui-icon-arrow-upward:before{content:\"arrow_upward\"}.ui-icon-art-track:before{content:\"art_track\"}.ui-icon-aspect-ratio:before{content:\"aspect_ratio\"}.ui-icon-assessment:before{content:\"assessment\"}.ui-icon-assignment:before{content:\"assignment\"}.ui-icon-assignment-ind:before{content:\"assignment_ind\"}.ui-icon-assignment-late:before{content:\"assignment_late\"}.ui-icon-assignment-return:before{content:\"assignment_return\"}.ui-icon-assignment-returned:before{content:\"assignment_returned\"}.ui-icon-assignment-turned-in:before{content:\"assignment_turned_in\"}.ui-icon-assistant:before{content:\"assistant\"}.ui-icon-assistant-photo:before{content:\"assistant_photo\"}.ui-icon-attach-file:before{content:\"attach_file\"}.ui-icon-attach-money:before{content:\"attach_money\"}.ui-icon-attachment:before{content:\"attachment\"}.ui-icon-audiotrack:before{content:\"audiotrack\"}.ui-icon-autorenew:before{content:\"autorenew\"}.ui-icon-av-timer:before{content:\"av_timer\"}.ui-icon-backspace:before{content:\"backspace\"}.ui-icon-backup:before{content:\"backup\"}.ui-icon-battery-alert:before{content:\"battery_alert\"}.ui-icon-battery-charging-full:before{content:\"battery_charging_full\"}.ui-icon-battery-full:before{content:\"battery_full\"}.ui-icon-battery-std:before{content:\"battery_std\"}.ui-icon-battery-unknown:before{content:\"battery_unknown\"}.ui-icon-beach-access:before{content:\"beach_access\"}.ui-icon-beenhere:before{content:\"beenhere\"}.ui-icon-block:before{content:\"block\"}.ui-icon-bluetooth:before{content:\"bluetooth\"}.ui-icon-bluetooth-audio:before{content:\"bluetooth_audio\"}.ui-icon-bluetooth-connected:before{content:\"bluetooth_connected\"}.ui-icon-bluetooth-disabled:before{content:\"bluetooth_disabled\"}.ui-icon-bluetooth-searching:before{content:\"bluetooth_searching\"}.ui-icon-blur-circular:before{content:\"blur_circular\"}.ui-icon-blur-linear:before{content:\"blur_linear\"}.ui-icon-blur-off:before{content:\"blur_off\"}.ui-icon-blur-on:before{content:\"blur_on\"}.ui-icon-book:before{content:\"book\"}.ui-icon-bookmark:before{content:\"bookmark\"}.ui-icon-bookmark-border:before{content:\"bookmark_border\"}.ui-icon-border-all:before{content:\"border_all\"}.ui-icon-border-bottom:before{content:\"border_bottom\"}.ui-icon-border-clear:before{content:\"border_clear\"}.ui-icon-border-color:before{content:\"border_color\"}.ui-icon-border-horizontal:before{content:\"border_horizontal\"}.ui-icon-border-inner:before{content:\"border_inner\"}.ui-icon-border-left:before{content:\"border_left\"}.ui-icon-border-outer:before{content:\"border_outer\"}.ui-icon-border-right:before{content:\"border_right\"}.ui-icon-border-style:before{content:\"border_style\"}.ui-icon-border-top:before{content:\"border_top\"}.ui-icon-border-vertical:before{content:\"border_vertical\"}.ui-icon-branding-watermark:before{content:\"branding_watermark\"}.ui-icon-brightness-1:before{content:\"brightness_1\"}.ui-icon-brightness-2:before{content:\"brightness_2\"}.ui-icon-brightness-3:before{content:\"brightness_3\"}.ui-icon-brightness-4:before{content:\"brightness_4\"}.ui-icon-brightness-5:before{content:\"brightness_5\"}.ui-icon-brightness-6:before{content:\"brightness_6\"}.ui-icon-brightness-7:before{content:\"brightness_7\"}.ui-icon-brightness-auto:before{content:\"brightness_auto\"}.ui-icon-brightness-high:before{content:\"brightness_high\"}.ui-icon-brightness-low:before{content:\"brightness_low\"}.ui-icon-brightness-medium:before{content:\"brightness_medium\"}.ui-icon-broken-image:before{content:\"broken_image\"}.ui-icon-brush:before{content:\"brush\"}.ui-icon-bubble-chart:before{content:\"bubble_chart\"}.ui-icon-bug-report:before{content:\"bug_report\"}.ui-icon-build:before{content:\"build\"}.ui-icon-burst-mode:before{content:\"burst_mode\"}.ui-icon-business:before{content:\"business\"}.ui-icon-business-center:before{content:\"business_center\"}.ui-icon-cached:before{content:\"cached\"}.ui-icon-cake:before{content:\"cake\"}.ui-icon-call:before{content:\"call\"}.ui-icon-call-end:before{content:\"call_end\"}.ui-icon-call-made:before{content:\"call_made\"}.ui-icon-call-merge:before{content:\"call_merge\"}.ui-icon-call-missed:before{content:\"call_missed\"}.ui-icon-call-missed-outgoing:before{content:\"call_missed_outgoing\"}.ui-icon-call-received:before{content:\"call_received\"}.ui-icon-call-split:before{content:\"call_split\"}.ui-icon-call-to-action:before{content:\"call_to_action\"}.ui-icon-camera:before{content:\"camera\"}.ui-icon-camera-alt:before{content:\"camera_alt\"}.ui-icon-camera-enhance:before{content:\"camera_enhance\"}.ui-icon-camera-front:before{content:\"camera_front\"}.ui-icon-camera-rear:before{content:\"camera_rear\"}.ui-icon-camera-roll:before{content:\"camera_roll\"}.ui-icon-cancel:before{content:\"cancel\"}.ui-icon-card-giftcard:before{content:\"card_giftcard\"}.ui-icon-card-membership:before{content:\"card_membership\"}.ui-icon-card-travel:before{content:\"card_travel\"}.ui-icon-casino:before{content:\"casino\"}.ui-icon-cast:before{content:\"cast\"}.ui-icon-cast-connected:before{content:\"cast_connected\"}.ui-icon-center-focus-strong:before{content:\"center_focus_strong\"}.ui-icon-center-focus-weak:before{content:\"center_focus_weak\"}.ui-icon-change-history:before{content:\"change_history\"}.ui-icon-chat:before{content:\"chat\"}.ui-icon-chat-bubble:before{content:\"chat_bubble\"}.ui-icon-chat-bubble-outline:before{content:\"chat_bubble_outline\"}.ui-icon-check:before{content:\"check\"}.ui-icon-check-box:before{content:\"check_box\"}.ui-icon-check-box-outline-blank:before{content:\"check_box_outline_blank\"}.ui-icon-check-circle:before{content:\"check_circle\"}.ui-icon-chevron-left:before{content:\"chevron_left\"}.ui-icon-chevron-right:before{content:\"chevron_right\"}.ui-icon-child-care:before{content:\"child_care\"}.ui-icon-child-friendly:before{content:\"child_friendly\"}.ui-icon-chrome-reader-mode:before{content:\"chrome_reader_mode\"}.ui-icon-class:before{content:\"class\"}.ui-icon-clear:before{content:\"clear\"}.ui-icon-clear-all:before{content:\"clear_all\"}.ui-icon-close:before{content:\"close\"}.ui-icon-closed-caption:before{content:\"closed_caption\"}.ui-icon-cloud:before{content:\"cloud\"}.ui-icon-cloud-circle:before{content:\"cloud_circle\"}.ui-icon-cloud-done:before{content:\"cloud_done\"}.ui-icon-cloud-download:before{content:\"cloud_download\"}.ui-icon-cloud-off:before{content:\"cloud_off\"}.ui-icon-cloud-queue:before{content:\"cloud_queue\"}.ui-icon-cloud-upload:before{content:\"cloud_upload\"}.ui-icon-code:before{content:\"code\"}.ui-icon-collections:before{content:\"collections\"}.ui-icon-collections-bookmark:before{content:\"collections_bookmark\"}.ui-icon-color-lens:before{content:\"color_lens\"}.ui-icon-colorize:before{content:\"colorize\"}.ui-icon-comment:before{content:\"comment\"}.ui-icon-compare:before{content:\"compare\"}.ui-icon-compare-arrows:before{content:\"compare_arrows\"}.ui-icon-computer:before{content:\"computer\"}.ui-icon-confirmation-number:before{content:\"confirmation_number\"}.ui-icon-contact-mail:before{content:\"contact_mail\"}.ui-icon-contact-phone:before{content:\"contact_phone\"}.ui-icon-contacts:before{content:\"contacts\"}.ui-icon-content-copy:before{content:\"content_copy\"}.ui-icon-content-cut:before{content:\"content_cut\"}.ui-icon-content-paste:before{content:\"content_paste\"}.ui-icon-control-point:before{content:\"control_point\"}.ui-icon-control-point-duplicate:before{content:\"control_point_duplicate\"}.ui-icon-copyright:before{content:\"copyright\"}.ui-icon-create:before{content:\"create\"}.ui-icon-create-new-folder:before{content:\"create_new_folder\"}.ui-icon-credit-card:before{content:\"credit_card\"}.ui-icon-crop:before{content:\"crop\"}.ui-icon-crop-16-9:before{content:\"crop_16_9\"}.ui-icon-crop-3-2:before{content:\"crop_3_2\"}.ui-icon-crop-5-4:before{content:\"crop_5_4\"}.ui-icon-crop-7-5:before{content:\"crop_7_5\"}.ui-icon-crop-din:before{content:\"crop_din\"}.ui-icon-crop-free:before{content:\"crop_free\"}.ui-icon-crop-landscape:before{content:\"crop_landscape\"}.ui-icon-crop-original:before{content:\"crop_original\"}.ui-icon-crop-portrait:before{content:\"crop_portrait\"}.ui-icon-crop-rotate:before{content:\"crop_rotate\"}.ui-icon-crop-square:before{content:\"crop_square\"}.ui-icon-dashboard:before{content:\"dashboard\"}.ui-icon-data-usage:before{content:\"data_usage\"}.ui-icon-date-range:before{content:\"date_range\"}.ui-icon-dehaze:before{content:\"dehaze\"}.ui-icon-delete:before{content:\"delete\"}.ui-icon-delete-forever:before{content:\"delete_forever\"}.ui-icon-delete-sweep:before{content:\"delete_sweep\"}.ui-icon-description:before{content:\"description\"}.ui-icon-desktop-mac:before{content:\"desktop_mac\"}.ui-icon-desktop-windows:before{content:\"desktop_windows\"}.ui-icon-details:before{content:\"details\"}.ui-icon-developer-board:before{content:\"developer_board\"}.ui-icon-developer-mode:before{content:\"developer_mode\"}.ui-icon-device-hub:before{content:\"device_hub\"}.ui-icon-devices:before{content:\"devices\"}.ui-icon-devices-other:before{content:\"devices_other\"}.ui-icon-dialer-sip:before{content:\"dialer_sip\"}.ui-icon-dialpad:before{content:\"dialpad\"}.ui-icon-directions:before{content:\"directions\"}.ui-icon-directions-bike:before{content:\"directions_bike\"}.ui-icon-directions-boat:before{content:\"directions_boat\"}.ui-icon-directions-bus:before{content:\"directions_bus\"}.ui-icon-directions-car:before{content:\"directions_car\"}.ui-icon-directions-railway:before{content:\"directions_railway\"}.ui-icon-directions-run:before{content:\"directions_run\"}.ui-icon-directions-subway:before{content:\"directions_subway\"}.ui-icon-directions-transit:before{content:\"directions_transit\"}.ui-icon-directions-walk:before{content:\"directions_walk\"}.ui-icon-disc-full:before{content:\"disc_full\"}.ui-icon-dns:before{content:\"dns\"}.ui-icon-do-not-disturb:before{content:\"do_not_disturb\"}.ui-icon-do-not-disturb-alt:before{content:\"do_not_disturb_alt\"}.ui-icon-do-not-disturb-off:before{content:\"do_not_disturb_off\"}.ui-icon-do-not-disturb-on:before{content:\"do_not_disturb_on\"}.ui-icon-dock:before{content:\"dock\"}.ui-icon-domain:before{content:\"domain\"}.ui-icon-done:before{content:\"done\"}.ui-icon-done-all:before{content:\"done_all\"}.ui-icon-donut-large:before{content:\"donut_large\"}.ui-icon-donut-small:before{content:\"donut_small\"}.ui-icon-drafts:before{content:\"drafts\"}.ui-icon-drag-handle:before{content:\"drag_handle\"}.ui-icon-drive-eta:before{content:\"drive_eta\"}.ui-icon-dvr:before{content:\"dvr\"}.ui-icon-edit:before{content:\"edit\"}.ui-icon-edit-location:before{content:\"edit_location\"}.ui-icon-eject:before{content:\"eject\"}.ui-icon-email:before{content:\"email\"}.ui-icon-enhanced-encryption:before{content:\"enhanced_encryption\"}.ui-icon-equalizer:before{content:\"equalizer\"}.ui-icon-error:before{content:\"error\"}.ui-icon-error-outline:before{content:\"error_outline\"}.ui-icon-euro-symbol:before{content:\"euro_symbol\"}.ui-icon-ev-station:before{content:\"ev_station\"}.ui-icon-event:before{content:\"event\"}.ui-icon-event-available:before{content:\"event_available\"}.ui-icon-event-busy:before{content:\"event_busy\"}.ui-icon-event-note:before{content:\"event_note\"}.ui-icon-event-seat:before{content:\"event_seat\"}.ui-icon-exit-to-app:before{content:\"exit_to_app\"}.ui-icon-expand-less:before{content:\"expand_less\"}.ui-icon-expand-more:before{content:\"expand_more\"}.ui-icon-explicit:before{content:\"explicit\"}.ui-icon-explore:before{content:\"explore\"}.ui-icon-exposure:before{content:\"exposure\"}.ui-icon-exposure-neg-1:before{content:\"exposure_neg_1\"}.ui-icon-exposure-neg-2:before{content:\"exposure_neg_2\"}.ui-icon-exposure-plus-1:before{content:\"exposure_plus_1\"}.ui-icon-exposure-plus-2:before{content:\"exposure_plus_2\"}.ui-icon-exposure-zero:before{content:\"exposure_zero\"}.ui-icon-extension:before{content:\"extension\"}.ui-icon-face:before{content:\"face\"}.ui-icon-fast-forward:before{content:\"fast_forward\"}.ui-icon-fast-rewind:before{content:\"fast_rewind\"}.ui-icon-favorite:before{content:\"favorite\"}.ui-icon-favorite-border:before{content:\"favorite_border\"}.ui-icon-featured-play-list:before{content:\"featured_play_list\"}.ui-icon-featured-video:before{content:\"featured_video\"}.ui-icon-feedback:before{content:\"feedback\"}.ui-icon-fiber-dvr:before{content:\"fiber_dvr\"}.ui-icon-fiber-manual-record:before{content:\"fiber_manual_record\"}.ui-icon-fiber-new:before{content:\"fiber_new\"}.ui-icon-fiber-pin:before{content:\"fiber_pin\"}.ui-icon-fiber-smart-record:before{content:\"fiber_smart_record\"}.ui-icon-file-download:before{content:\"file_download\"}.ui-icon-file-upload:before{content:\"file_upload\"}.ui-icon-filter:before{content:\"filter\"}.ui-icon-filter-1:before{content:\"filter_1\"}.ui-icon-filter-2:before{content:\"filter_2\"}.ui-icon-filter-3:before{content:\"filter_3\"}.ui-icon-filter-4:before{content:\"filter_4\"}.ui-icon-filter-5:before{content:\"filter_5\"}.ui-icon-filter-6:before{content:\"filter_6\"}.ui-icon-filter-7:before{content:\"filter_7\"}.ui-icon-filter-8:before{content:\"filter_8\"}.ui-icon-filter-9:before{content:\"filter_9\"}.ui-icon-filter-9-plus:before{content:\"filter_9_plus\"}.ui-icon-filter-b-and-w:before{content:\"filter_b_and_w\"}.ui-icon-filter-center-focus:before{content:\"filter_center_focus\"}.ui-icon-filter-drama:before{content:\"filter_drama\"}.ui-icon-filter-frames:before{content:\"filter_frames\"}.ui-icon-filter-hdr:before{content:\"filter_hdr\"}.ui-icon-filter-list:before{content:\"filter_list\"}.ui-icon-filter-none:before{content:\"filter_none\"}.ui-icon-filter-tilt-shift:before{content:\"filter_tilt_shift\"}.ui-icon-filter-vintage:before{content:\"filter_vintage\"}.ui-icon-find-in-page:before{content:\"find_in_page\"}.ui-icon-find-replace:before{content:\"find_replace\"}.ui-icon-fingerprint:before{content:\"fingerprint\"}.ui-icon-first-page:before{content:\"first_page\"}.ui-icon-fitness-center:before{content:\"fitness_center\"}.ui-icon-flag:before{content:\"flag\"}.ui-icon-flare:before{content:\"flare\"}.ui-icon-flash-auto:before{content:\"flash_auto\"}.ui-icon-flash-off:before{content:\"flash_off\"}.ui-icon-flash-on:before{content:\"flash_on\"}.ui-icon-flight:before{content:\"flight\"}.ui-icon-flight-land:before{content:\"flight_land\"}.ui-icon-flight-takeoff:before{content:\"flight_takeoff\"}.ui-icon-flip:before{content:\"flip\"}.ui-icon-flip-to-back:before{content:\"flip_to_back\"}.ui-icon-flip-to-front:before{content:\"flip_to_front\"}.ui-icon-folder:before{content:\"folder\"}.ui-icon-folder-open:before{content:\"folder_open\"}.ui-icon-folder-shared:before{content:\"folder_shared\"}.ui-icon-folder-special:before{content:\"folder_special\"}.ui-icon-font-download:before{content:\"font_download\"}.ui-icon-format-align-center:before{content:\"format_align_center\"}.ui-icon-format-align-justify:before{content:\"format_align_justify\"}.ui-icon-format-align-left:before{content:\"format_align_left\"}.ui-icon-format-align-right:before{content:\"format_align_right\"}.ui-icon-format-bold:before{content:\"format_bold\"}.ui-icon-format-clear:before{content:\"format_clear\"}.ui-icon-format-color-fill:before{content:\"format_color_fill\"}.ui-icon-format-color-reset:before{content:\"format_color_reset\"}.ui-icon-format-color-text:before{content:\"format_color_text\"}.ui-icon-format-indent-decrease:before{content:\"format_indent_decrease\"}.ui-icon-format-indent-increase:before{content:\"format_indent_increase\"}.ui-icon-format-italic:before{content:\"format_italic\"}.ui-icon-format-line-spacing:before{content:\"format_line_spacing\"}.ui-icon-format-list-bulleted:before{content:\"format_list_bulleted\"}.ui-icon-format-list-numbered:before{content:\"format_list_numbered\"}.ui-icon-format-paint:before{content:\"format_paint\"}.ui-icon-format-quote:before{content:\"format_quote\"}.ui-icon-format-shapes:before{content:\"format_shapes\"}.ui-icon-format-size:before{content:\"format_size\"}.ui-icon-format-strikethrough:before{content:\"format_strikethrough\"}.ui-icon-format-textdirection-l-to-r:before{content:\"format_textdirection_l_to_r\"}.ui-icon-format-textdirection-r-to-l:before{content:\"format_textdirection_r_to_l\"}.ui-icon-format-underlined:before{content:\"format_underlined\"}.ui-icon-forum:before{content:\"forum\"}.ui-icon-forward:before{content:\"forward\"}.ui-icon-forward-10:before{content:\"forward_10\"}.ui-icon-forward-30:before{content:\"forward_30\"}.ui-icon-forward-5:before{content:\"forward_5\"}.ui-icon-free-breakfast:before{content:\"free_breakfast\"}.ui-icon-fullscreen:before{content:\"fullscreen\"}.ui-icon-fullscreen-exit:before{content:\"fullscreen_exit\"}.ui-icon-functions:before{content:\"functions\"}.ui-icon-g-translate:before{content:\"g_translate\"}.ui-icon-gamepad:before{content:\"gamepad\"}.ui-icon-games:before{content:\"games\"}.ui-icon-gavel:before{content:\"gavel\"}.ui-icon-gesture:before{content:\"gesture\"}.ui-icon-get-app:before{content:\"get_app\"}.ui-icon-gif:before{content:\"gif\"}.ui-icon-golf-course:before{content:\"golf_course\"}.ui-icon-gps-fixed:before{content:\"gps_fixed\"}.ui-icon-gps-not-fixed:before{content:\"gps_not_fixed\"}.ui-icon-gps-off:before{content:\"gps_off\"}.ui-icon-grade:before{content:\"grade\"}.ui-icon-gradient:before{content:\"gradient\"}.ui-icon-grain:before{content:\"grain\"}.ui-icon-graphic-eq:before{content:\"graphic_eq\"}.ui-icon-grid-off:before{content:\"grid_off\"}.ui-icon-grid-on:before{content:\"grid_on\"}.ui-icon-group:before{content:\"group\"}.ui-icon-group-add:before{content:\"group_add\"}.ui-icon-group-work:before{content:\"group_work\"}.ui-icon-hd:before{content:\"hd\"}.ui-icon-hdr-off:before{content:\"hdr_off\"}.ui-icon-hdr-on:before{content:\"hdr_on\"}.ui-icon-hdr-strong:before{content:\"hdr_strong\"}.ui-icon-hdr-weak:before{content:\"hdr_weak\"}.ui-icon-headset:before{content:\"headset\"}.ui-icon-headset-mic:before{content:\"headset_mic\"}.ui-icon-healing:before{content:\"healing\"}.ui-icon-hearing:before{content:\"hearing\"}.ui-icon-help:before{content:\"help\"}.ui-icon-help-outline:before{content:\"help_outline\"}.ui-icon-high-quality:before{content:\"high_quality\"}.ui-icon-highlight:before{content:\"highlight\"}.ui-icon-highlight-off:before{content:\"highlight_off\"}.ui-icon-history:before{content:\"history\"}.ui-icon-home:before{content:\"home\"}.ui-icon-hot-tub:before{content:\"hot_tub\"}.ui-icon-hotel:before{content:\"hotel\"}.ui-icon-hourglass-empty:before{content:\"hourglass_empty\"}.ui-icon-hourglass-full:before{content:\"hourglass_full\"}.ui-icon-http:before{content:\"http\"}.ui-icon-https:before{content:\"https\"}.ui-icon-image:before{content:\"image\"}.ui-icon-image-aspect-ratio:before{content:\"image_aspect_ratio\"}.ui-icon-import-contacts:before{content:\"import_contacts\"}.ui-icon-import-export:before{content:\"import_export\"}.ui-icon-important-devices:before{content:\"important_devices\"}.ui-icon-inbox:before{content:\"inbox\"}.ui-icon-indeterminate-check-box:before{content:\"indeterminate_check_box\"}.ui-icon-info:before{content:\"info\"}.ui-icon-info-outline:before{content:\"info_outline\"}.ui-icon-input:before{content:\"input\"}.ui-icon-insert-chart:before{content:\"insert_chart\"}.ui-icon-insert-comment:before{content:\"insert_comment\"}.ui-icon-insert-drive-file:before{content:\"insert_drive_file\"}.ui-icon-insert-emoticon:before{content:\"insert_emoticon\"}.ui-icon-insert-invitation:before{content:\"insert_invitation\"}.ui-icon-insert-link:before{content:\"insert_link\"}.ui-icon-insert-photo:before{content:\"insert_photo\"}.ui-icon-invert-colors:before{content:\"invert_colors\"}.ui-icon-invert-colors-off:before{content:\"invert_colors_off\"}.ui-icon-iso:before{content:\"iso\"}.ui-icon-keyboard:before{content:\"keyboard\"}.ui-icon-keyboard-arrow-down:before{content:\"keyboard_arrow_down\"}.ui-icon-keyboard-arrow-left:before{content:\"keyboard_arrow_left\"}.ui-icon-keyboard-arrow-right:before{content:\"keyboard_arrow_right\"}.ui-icon-keyboard-arrow-up:before{content:\"keyboard_arrow_up\"}.ui-icon-keyboard-backspace:before{content:\"keyboard_backspace\"}.ui-icon-keyboard-capslock:before{content:\"keyboard_capslock\"}.ui-icon-keyboard-hide:before{content:\"keyboard_hide\"}.ui-icon-keyboard-return:before{content:\"keyboard_return\"}.ui-icon-keyboard-tab:before{content:\"keyboard_tab\"}.ui-icon-keyboard-voice:before{content:\"keyboard_voice\"}.ui-icon-kitchen:before{content:\"kitchen\"}.ui-icon-label:before{content:\"label\"}.ui-icon-label-outline:before{content:\"label_outline\"}.ui-icon-landscape:before{content:\"landscape\"}.ui-icon-language:before{content:\"language\"}.ui-icon-laptop:before{content:\"laptop\"}.ui-icon-laptop-chromebook:before{content:\"laptop_chromebook\"}.ui-icon-laptop-mac:before{content:\"laptop_mac\"}.ui-icon-laptop-windows:before{content:\"laptop_windows\"}.ui-icon-last-page:before{content:\"last_page\"}.ui-icon-launch:before{content:\"launch\"}.ui-icon-layers:before{content:\"layers\"}.ui-icon-layers-clear:before{content:\"layers_clear\"}.ui-icon-leak-add:before{content:\"leak_add\"}.ui-icon-leak-remove:before{content:\"leak_remove\"}.ui-icon-lens:before{content:\"lens\"}.ui-icon-library-add:before{content:\"library_add\"}.ui-icon-library-books:before{content:\"library_books\"}.ui-icon-library-music:before{content:\"library_music\"}.ui-icon-lightbulb-outline:before{content:\"lightbulb_outline\"}.ui-icon-line-style:before{content:\"line_style\"}.ui-icon-line-weight:before{content:\"line_weight\"}.ui-icon-linear-scale:before{content:\"linear_scale\"}.ui-icon-link:before{content:\"link\"}.ui-icon-linked-camera:before{content:\"linked_camera\"}.ui-icon-list:before{content:\"list\"}.ui-icon-live-help:before{content:\"live_help\"}.ui-icon-live-tv:before{content:\"live_tv\"}.ui-icon-local-activity:before{content:\"local_activity\"}.ui-icon-local-airport:before{content:\"local_airport\"}.ui-icon-local-atm:before{content:\"local_atm\"}.ui-icon-local-bar:before{content:\"local_bar\"}.ui-icon-local-cafe:before{content:\"local_cafe\"}.ui-icon-local-car-wash:before{content:\"local_car_wash\"}.ui-icon-local-convenience-store:before{content:\"local_convenience_store\"}.ui-icon-local-dining:before{content:\"local_dining\"}.ui-icon-local-drink:before{content:\"local_drink\"}.ui-icon-local-florist:before{content:\"local_florist\"}.ui-icon-local-gas-station:before{content:\"local_gas_station\"}.ui-icon-local-grocery-store:before{content:\"local_grocery_store\"}.ui-icon-local-hospital:before{content:\"local_hospital\"}.ui-icon-local-hotel:before{content:\"local_hotel\"}.ui-icon-local-laundry-service:before{content:\"local_laundry_service\"}.ui-icon-local-library:before{content:\"local_library\"}.ui-icon-local-mall:before{content:\"local_mall\"}.ui-icon-local-movies:before{content:\"local_movies\"}.ui-icon-local-offer:before{content:\"local_offer\"}.ui-icon-local-parking:before{content:\"local_parking\"}.ui-icon-local-pharmacy:before{content:\"local_pharmacy\"}.ui-icon-local-phone:before{content:\"local_phone\"}.ui-icon-local-pizza:before{content:\"local_pizza\"}.ui-icon-local-play:before{content:\"local_play\"}.ui-icon-local-post-office:before{content:\"local_post_office\"}.ui-icon-local-printshop:before{content:\"local_printshop\"}.ui-icon-local-see:before{content:\"local_see\"}.ui-icon-local-shipping:before{content:\"local_shipping\"}.ui-icon-local-taxi:before{content:\"local_taxi\"}.ui-icon-location-city:before{content:\"location_city\"}.ui-icon-location-disabled:before{content:\"location_disabled\"}.ui-icon-location-off:before{content:\"location_off\"}.ui-icon-location-on:before{content:\"location_on\"}.ui-icon-location-searching:before{content:\"location_searching\"}.ui-icon-lock:before{content:\"lock\"}.ui-icon-lock-open:before{content:\"lock_open\"}.ui-icon-lock-outline:before{content:\"lock_outline\"}.ui-icon-looks:before{content:\"looks\"}.ui-icon-looks-3:before{content:\"looks_3\"}.ui-icon-looks-4:before{content:\"looks_4\"}.ui-icon-looks-5:before{content:\"looks_5\"}.ui-icon-looks-6:before{content:\"looks_6\"}.ui-icon-looks-one:before{content:\"looks_one\"}.ui-icon-looks-two:before{content:\"looks_two\"}.ui-icon-loop:before{content:\"loop\"}.ui-icon-loupe:before{content:\"loupe\"}.ui-icon-low-priority:before{content:\"low_priority\"}.ui-icon-loyalty:before{content:\"loyalty\"}.ui-icon-mail:before{content:\"mail\"}.ui-icon-mail-outline:before{content:\"mail_outline\"}.ui-icon-map:before{content:\"map\"}.ui-icon-markunread:before{content:\"markunread\"}.ui-icon-markunread-mailbox:before{content:\"markunread_mailbox\"}.ui-icon-memory:before{content:\"memory\"}.ui-icon-menu:before{content:\"menu\"}.ui-icon-merge-type:before{content:\"merge_type\"}.ui-icon-message:before{content:\"message\"}.ui-icon-mic:before{content:\"mic\"}.ui-icon-mic-none:before{content:\"mic_none\"}.ui-icon-mic-off:before{content:\"mic_off\"}.ui-icon-mms:before{content:\"mms\"}.ui-icon-mode-comment:before{content:\"mode_comment\"}.ui-icon-mode-edit:before{content:\"mode_edit\"}.ui-icon-monetization-on:before{content:\"monetization_on\"}.ui-icon-money-off:before{content:\"money_off\"}.ui-icon-monochrome-photos:before{content:\"monochrome_photos\"}.ui-icon-mood:before{content:\"mood\"}.ui-icon-mood-bad:before{content:\"mood_bad\"}.ui-icon-more:before{content:\"more\"}.ui-icon-more-horiz:before{content:\"more_horiz\"}.ui-icon-more-vert:before{content:\"more_vert\"}.ui-icon-motorcycle:before{content:\"motorcycle\"}.ui-icon-mouse:before{content:\"mouse\"}.ui-icon-move-to-inbox:before{content:\"move_to_inbox\"}.ui-icon-movie:before{content:\"movie\"}.ui-icon-movie-creation:before{content:\"movie_creation\"}.ui-icon-movie-filter:before{content:\"movie_filter\"}.ui-icon-multiline-chart:before{content:\"multiline_chart\"}.ui-icon-music-note:before{content:\"music_note\"}.ui-icon-music-video:before{content:\"music_video\"}.ui-icon-my-location:before{content:\"my_location\"}.ui-icon-nature:before{content:\"nature\"}.ui-icon-nature-people:before{content:\"nature_people\"}.ui-icon-navigate-before:before{content:\"navigate_before\"}.ui-icon-navigate-next:before{content:\"navigate_next\"}.ui-icon-navigation:before{content:\"navigation\"}.ui-icon-near-me:before{content:\"near_me\"}.ui-icon-network-cell:before{content:\"network_cell\"}.ui-icon-network-check:before{content:\"network_check\"}.ui-icon-network-locked:before{content:\"network_locked\"}.ui-icon-network-wifi:before{content:\"network_wifi\"}.ui-icon-new-releases:before{content:\"new_releases\"}.ui-icon-next-week:before{content:\"next_week\"}.ui-icon-nfc:before{content:\"nfc\"}.ui-icon-no-encryption:before{content:\"no_encryption\"}.ui-icon-no-sim:before{content:\"no_sim\"}.ui-icon-not-interested:before{content:\"not_interested\"}.ui-icon-note:before{content:\"note\"}.ui-icon-note-add:before{content:\"note_add\"}.ui-icon-notifications:before{content:\"notifications\"}.ui-icon-notifications-active:before{content:\"notifications_active\"}.ui-icon-notifications-none:before{content:\"notifications_none\"}.ui-icon-notifications-off:before{content:\"notifications_off\"}.ui-icon-notifications-paused:before{content:\"notifications_paused\"}.ui-icon-offline-pin:before{content:\"offline_pin\"}.ui-icon-ondemand-video:before{content:\"ondemand_video\"}.ui-icon-opacity:before{content:\"opacity\"}.ui-icon-open-in-browser:before{content:\"open_in_browser\"}.ui-icon-open-in-new:before{content:\"open_in_new\"}.ui-icon-open-with:before{content:\"open_with\"}.ui-icon-pages:before{content:\"pages\"}.ui-icon-pageview:before{content:\"pageview\"}.ui-icon-palette:before{content:\"palette\"}.ui-icon-pan-tool:before{content:\"pan_tool\"}.ui-icon-panorama:before{content:\"panorama\"}.ui-icon-panorama-fish-eye:before{content:\"panorama_fish_eye\"}.ui-icon-panorama-horizontal:before{content:\"panorama_horizontal\"}.ui-icon-panorama-vertical:before{content:\"panorama_vertical\"}.ui-icon-panorama-wide-angle:before{content:\"panorama_wide_angle\"}.ui-icon-party-mode:before{content:\"party_mode\"}.ui-icon-pause:before{content:\"pause\"}.ui-icon-pause-circle-filled:before{content:\"pause_circle_filled\"}.ui-icon-pause-circle-outline:before{content:\"pause_circle_outline\"}.ui-icon-payment:before{content:\"payment\"}.ui-icon-people:before{content:\"people\"}.ui-icon-people-outline:before{content:\"people_outline\"}.ui-icon-perm-camera-mic:before{content:\"perm_camera_mic\"}.ui-icon-perm-contact-calendar:before{content:\"perm_contact_calendar\"}.ui-icon-perm-data-setting:before{content:\"perm_data_setting\"}.ui-icon-perm-device-information:before{content:\"perm_device_information\"}.ui-icon-perm-identity:before{content:\"perm_identity\"}.ui-icon-perm-media:before{content:\"perm_media\"}.ui-icon-perm-phone-msg:before{content:\"perm_phone_msg\"}.ui-icon-perm-scan-wifi:before{content:\"perm_scan_wifi\"}.ui-icon-person:before{content:\"person\"}.ui-icon-person-add:before{content:\"person_add\"}.ui-icon-person-outline:before{content:\"person_outline\"}.ui-icon-person-pin:before{content:\"person_pin\"}.ui-icon-person-pin-circle:before{content:\"person_pin_circle\"}.ui-icon-personal-video:before{content:\"personal_video\"}.ui-icon-pets:before{content:\"pets\"}.ui-icon-phone:before{content:\"phone\"}.ui-icon-phone-android:before{content:\"phone_android\"}.ui-icon-phone-bluetooth-speaker:before{content:\"phone_bluetooth_speaker\"}.ui-icon-phone-forwarded:before{content:\"phone_forwarded\"}.ui-icon-phone-in-talk:before{content:\"phone_in_talk\"}.ui-icon-phone-iphone:before{content:\"phone_iphone\"}.ui-icon-phone-locked:before{content:\"phone_locked\"}.ui-icon-phone-missed:before{content:\"phone_missed\"}.ui-icon-phone-paused:before{content:\"phone_paused\"}.ui-icon-phonelink:before{content:\"phonelink\"}.ui-icon-phonelink-erase:before{content:\"phonelink_erase\"}.ui-icon-phonelink-lock:before{content:\"phonelink_lock\"}.ui-icon-phonelink-off:before{content:\"phonelink_off\"}.ui-icon-phonelink-ring:before{content:\"phonelink_ring\"}.ui-icon-phonelink-setup:before{content:\"phonelink_setup\"}.ui-icon-photo:before{content:\"photo\"}.ui-icon-photo-album:before{content:\"photo_album\"}.ui-icon-photo-camera:before{content:\"photo_camera\"}.ui-icon-photo-filter:before{content:\"photo_filter\"}.ui-icon-photo-library:before{content:\"photo_library\"}.ui-icon-photo-size-select-actual:before{content:\"photo_size_select_actual\"}.ui-icon-photo-size-select-large:before{content:\"photo_size_select_large\"}.ui-icon-photo-size-select-small:before{content:\"photo_size_select_small\"}.ui-icon-picture-as-pdf:before{content:\"picture_as_pdf\"}.ui-icon-picture-in-picture:before{content:\"picture_in_picture\"}.ui-icon-picture-in-picture-alt:before{content:\"picture_in_picture_alt\"}.ui-icon-pie-chart:before{content:\"pie_chart\"}.ui-icon-pie-chart-outlined:before{content:\"pie_chart_outlined\"}.ui-icon-pin-drop:before{content:\"pin_drop\"}.ui-icon-place:before{content:\"place\"}.ui-icon-play-arrow:before{content:\"play_arrow\"}.ui-icon-play-circle-filled:before{content:\"play_circle_filled\"}.ui-icon-play-circle-outline:before{content:\"play_circle_outline\"}.ui-icon-play-for-work:before{content:\"play_for_work\"}.ui-icon-playlist-add:before{content:\"playlist_add\"}.ui-icon-playlist-add-check:before{content:\"playlist_add_check\"}.ui-icon-playlist-play:before{content:\"playlist_play\"}.ui-icon-plus-one:before{content:\"plus_one\"}.ui-icon-poll:before{content:\"poll\"}.ui-icon-polymer:before{content:\"polymer\"}.ui-icon-pool:before{content:\"pool\"}.ui-icon-portable-wifi-off:before{content:\"portable_wifi_off\"}.ui-icon-portrait:before{content:\"portrait\"}.ui-icon-power:before{content:\"power\"}.ui-icon-power-input:before{content:\"power_input\"}.ui-icon-power-settings-new:before{content:\"power_settings_new\"}.ui-icon-pregnant-woman:before{content:\"pregnant_woman\"}.ui-icon-present-to-all:before{content:\"present_to_all\"}.ui-icon-print:before{content:\"print\"}.ui-icon-priority-high:before{content:\"priority_high\"}.ui-icon-public:before{content:\"public\"}.ui-icon-publish:before{content:\"publish\"}.ui-icon-query-builder:before{content:\"query_builder\"}.ui-icon-question-answer:before{content:\"question_answer\"}.ui-icon-queue:before{content:\"queue\"}.ui-icon-queue-music:before{content:\"queue_music\"}.ui-icon-queue-play-next:before{content:\"queue_play_next\"}.ui-icon-radio:before{content:\"radio\"}.ui-icon-radio-button-checked:before{content:\"radio_button_checked\"}.ui-icon-radio-button-unchecked:before{content:\"radio_button_unchecked\"}.ui-icon-rate-review:before{content:\"rate_review\"}.ui-icon-receipt:before{content:\"receipt\"}.ui-icon-recent-actors:before{content:\"recent_actors\"}.ui-icon-record-voice-over:before{content:\"record_voice_over\"}.ui-icon-redeem:before{content:\"redeem\"}.ui-icon-redo:before{content:\"redo\"}.ui-icon-refresh:before{content:\"refresh\"}.ui-icon-remove:before{content:\"remove\"}.ui-icon-remove-circle:before{content:\"remove_circle\"}.ui-icon-remove-circle-outline:before{content:\"remove_circle_outline\"}.ui-icon-remove-from-queue:before{content:\"remove_from_queue\"}.ui-icon-remove-red-eye:before{content:\"remove_red_eye\"}.ui-icon-remove-shopping-cart:before{content:\"remove_shopping_cart\"}.ui-icon-reorder:before{content:\"reorder\"}.ui-icon-repeat:before{content:\"repeat\"}.ui-icon-repeat-one:before{content:\"repeat_one\"}.ui-icon-replay:before{content:\"replay\"}.ui-icon-replay-10:before{content:\"replay_10\"}.ui-icon-replay-30:before{content:\"replay_30\"}.ui-icon-replay-5:before{content:\"replay_5\"}.ui-icon-reply:before{content:\"reply\"}.ui-icon-reply-all:before{content:\"reply_all\"}.ui-icon-report:before{content:\"report\"}.ui-icon-report-problem:before{content:\"report_problem\"}.ui-icon-restaurant:before{content:\"restaurant\"}.ui-icon-restaurant-menu:before{content:\"restaurant_menu\"}.ui-icon-restore:before{content:\"restore\"}.ui-icon-restore-page:before{content:\"restore_page\"}.ui-icon-ring-volume:before{content:\"ring_volume\"}.ui-icon-room:before{content:\"room\"}.ui-icon-room-service:before{content:\"room_service\"}.ui-icon-rotate-90-degrees-ccw:before{content:\"rotate_90_degrees_ccw\"}.ui-icon-rotate-left:before{content:\"rotate_left\"}.ui-icon-rotate-right:before{content:\"rotate_right\"}.ui-icon-rounded-corner:before{content:\"rounded_corner\"}.ui-icon-router:before{content:\"router\"}.ui-icon-rowing:before{content:\"rowing\"}.ui-icon-rss-feed:before{content:\"rss_feed\"}.ui-icon-rv-hookup:before{content:\"rv_hookup\"}.ui-icon-satellite:before{content:\"satellite\"}.ui-icon-save:before{content:\"save\"}.ui-icon-scanner:before{content:\"scanner\"}.ui-icon-schedule:before{content:\"schedule\"}.ui-icon-school:before{content:\"school\"}.ui-icon-screen-lock-landscape:before{content:\"screen_lock_landscape\"}.ui-icon-screen-lock-portrait:before{content:\"screen_lock_portrait\"}.ui-icon-screen-lock-rotation:before{content:\"screen_lock_rotation\"}.ui-icon-screen-rotation:before{content:\"screen_rotation\"}.ui-icon-screen-share:before{content:\"screen_share\"}.ui-icon-sd-card:before{content:\"sd_card\"}.ui-icon-sd-storage:before{content:\"sd_storage\"}.ui-icon-search:before{content:\"search\"}.ui-icon-security:before{content:\"security\"}.ui-icon-select-all:before{content:\"select_all\"}.ui-icon-send:before{content:\"send\"}.ui-icon-sentiment-dissatisfied:before{content:\"sentiment_dissatisfied\"}.ui-icon-sentiment-neutral:before{content:\"sentiment_neutral\"}.ui-icon-sentiment-satisfied:before{content:\"sentiment_satisfied\"}.ui-icon-sentiment-very-dissatisfied:before{content:\"sentiment_very_dissatisfied\"}.ui-icon-sentiment-very-satisfied:before{content:\"sentiment_very_satisfied\"}.ui-icon-settings:before{content:\"settings\"}.ui-icon-settings-applications:before{content:\"settings_applications\"}.ui-icon-settings-backup-restore:before{content:\"settings_backup_restore\"}.ui-icon-settings-bluetooth:before{content:\"settings_bluetooth\"}.ui-icon-settings-brightness:before{content:\"settings_brightness\"}.ui-icon-settings-cell:before{content:\"settings_cell\"}.ui-icon-settings-ethernet:before{content:\"settings_ethernet\"}.ui-icon-settings-input-antenna:before{content:\"settings_input_antenna\"}.ui-icon-settings-input-component:before{content:\"settings_input_component\"}.ui-icon-settings-input-composite:before{content:\"settings_input_composite\"}.ui-icon-settings-input-hdmi:before{content:\"settings_input_hdmi\"}.ui-icon-settings-input-svideo:before{content:\"settings_input_svideo\"}.ui-icon-settings-overscan:before{content:\"settings_overscan\"}.ui-icon-settings-phone:before{content:\"settings_phone\"}.ui-icon-settings-power:before{content:\"settings_power\"}.ui-icon-settings-remote:before{content:\"settings_remote\"}.ui-icon-settings-system-daydream:before{content:\"settings_system_daydream\"}.ui-icon-settings-voice:before{content:\"settings_voice\"}.ui-icon-share:before{content:\"share\"}.ui-icon-shop:before{content:\"shop\"}.ui-icon-shop-two:before{content:\"shop_two\"}.ui-icon-shopping-basket:before{content:\"shopping_basket\"}.ui-icon-shopping-cart:before{content:\"shopping_cart\"}.ui-icon-short-text:before{content:\"short_text\"}.ui-icon-show-chart:before{content:\"show_chart\"}.ui-icon-shuffle:before{content:\"shuffle\"}.ui-icon-signal-cellular-4-bar:before{content:\"signal_cellular_4_bar\"}.ui-icon-signal-cellular-connected-no-internet-4-bar:before{content:\"signal_cellular_connected_no_internet_4_bar\"}.ui-icon-signal-cellular-no-sim:before{content:\"signal_cellular_no_sim\"}.ui-icon-signal-cellular-null:before{content:\"signal_cellular_null\"}.ui-icon-signal-cellular-off:before{content:\"signal_cellular_off\"}.ui-icon-signal-wifi-4-bar:before{content:\"signal_wifi_4_bar\"}.ui-icon-signal-wifi-4-bar-lock:before{content:\"signal_wifi_4_bar_lock\"}.ui-icon-signal-wifi-off:before{content:\"signal_wifi_off\"}.ui-icon-sim-card:before{content:\"sim_card\"}.ui-icon-sim-card-alert:before{content:\"sim_card_alert\"}.ui-icon-skip-next:before{content:\"skip_next\"}.ui-icon-skip-previous:before{content:\"skip_previous\"}.ui-icon-slideshow:before{content:\"slideshow\"}.ui-icon-slow-motion-video:before{content:\"slow_motion_video\"}.ui-icon-smartphone:before{content:\"smartphone\"}.ui-icon-smoke-free:before{content:\"smoke_free\"}.ui-icon-smoking-rooms:before{content:\"smoking_rooms\"}.ui-icon-sms:before{content:\"sms\"}.ui-icon-sms-failed:before{content:\"sms_failed\"}.ui-icon-snooze:before{content:\"snooze\"}.ui-icon-sort:before{content:\"sort\"}.ui-icon-sort-by-alpha:before{content:\"sort_by_alpha\"}.ui-icon-spa:before{content:\"spa\"}.ui-icon-space-bar:before{content:\"space_bar\"}.ui-icon-speaker:before{content:\"speaker\"}.ui-icon-speaker-group:before{content:\"speaker_group\"}.ui-icon-speaker-notes:before{content:\"speaker_notes\"}.ui-icon-speaker-notes-off:before{content:\"speaker_notes_off\"}.ui-icon-speaker-phone:before{content:\"speaker_phone\"}.ui-icon-spellcheck:before{content:\"spellcheck\"}.ui-icon-star:before{content:\"star\"}.ui-icon-star-border:before{content:\"star_border\"}.ui-icon-star-half:before{content:\"star_half\"}.ui-icon-stars:before{content:\"stars\"}.ui-icon-stay-current-landscape:before{content:\"stay_current_landscape\"}.ui-icon-stay-current-portrait:before{content:\"stay_current_portrait\"}.ui-icon-stay-primary-landscape:before{content:\"stay_primary_landscape\"}.ui-icon-stay-primary-portrait:before{content:\"stay_primary_portrait\"}.ui-icon-stop:before{content:\"stop\"}.ui-icon-stop-screen-share:before{content:\"stop_screen_share\"}.ui-icon-storage:before{content:\"storage\"}.ui-icon-store:before{content:\"store\"}.ui-icon-store-mall-directory:before{content:\"store_mall_directory\"}.ui-icon-straighten:before{content:\"straighten\"}.ui-icon-streetview:before{content:\"streetview\"}.ui-icon-strikethrough-s:before{content:\"strikethrough_s\"}.ui-icon-style:before{content:\"style\"}.ui-icon-subdirectory-arrow-left:before{content:\"subdirectory_arrow_left\"}.ui-icon-subdirectory-arrow-right:before{content:\"subdirectory_arrow_right\"}.ui-icon-subject:before{content:\"subject\"}.ui-icon-subscriptions:before{content:\"subscriptions\"}.ui-icon-subtitles:before{content:\"subtitles\"}.ui-icon-subway:before{content:\"subway\"}.ui-icon-supervisor-account:before{content:\"supervisor_account\"}.ui-icon-surround-sound:before{content:\"surround_sound\"}.ui-icon-swap-calls:before{content:\"swap_calls\"}.ui-icon-swap-horiz:before{content:\"swap_horiz\"}.ui-icon-swap-vert:before{content:\"swap_vert\"}.ui-icon-swap-vertical-circle:before{content:\"swap_vertical_circle\"}.ui-icon-switch-camera:before{content:\"switch_camera\"}.ui-icon-switch-video:before{content:\"switch_video\"}.ui-icon-sync:before{content:\"sync\"}.ui-icon-sync-disabled:before{content:\"sync_disabled\"}.ui-icon-sync-problem:before{content:\"sync_problem\"}.ui-icon-system-update:before{content:\"system_update\"}.ui-icon-system-update-alt:before{content:\"system_update_alt\"}.ui-icon-tab:before{content:\"tab\"}.ui-icon-tab-unselected:before{content:\"tab_unselected\"}.ui-icon-tablet:before{content:\"tablet\"}.ui-icon-tablet-android:before{content:\"tablet_android\"}.ui-icon-tablet-mac:before{content:\"tablet_mac\"}.ui-icon-tag-faces:before{content:\"tag_faces\"}.ui-icon-tap-and-play:before{content:\"tap_and_play\"}.ui-icon-terrain:before{content:\"terrain\"}.ui-icon-text-fields:before{content:\"text_fields\"}.ui-icon-text-format:before{content:\"text_format\"}.ui-icon-textsms:before{content:\"textsms\"}.ui-icon-texture:before{content:\"texture\"}.ui-icon-theaters:before{content:\"theaters\"}.ui-icon-thumb-down:before{content:\"thumb_down\"}.ui-icon-thumb-up:before{content:\"thumb_up\"}.ui-icon-thumbs-up-down:before{content:\"thumbs_up_down\"}.ui-icon-time-to-leave:before{content:\"time_to_leave\"}.ui-icon-timelapse:before{content:\"timelapse\"}.ui-icon-timeline:before{content:\"timeline\"}.ui-icon-timer:before{content:\"timer\"}.ui-icon-timer-10:before{content:\"timer_10\"}.ui-icon-timer-3:before{content:\"timer_3\"}.ui-icon-timer-off:before{content:\"timer_off\"}.ui-icon-title:before{content:\"title\"}.ui-icon-toc:before{content:\"toc\"}.ui-icon-today:before{content:\"today\"}.ui-icon-toll:before{content:\"toll\"}.ui-icon-tonality:before{content:\"tonality\"}.ui-icon-touch-app:before{content:\"touch_app\"}.ui-icon-toys:before{content:\"toys\"}.ui-icon-track-changes:before{content:\"track_changes\"}.ui-icon-traffic:before{content:\"traffic\"}.ui-icon-train:before{content:\"train\"}.ui-icon-tram:before{content:\"tram\"}.ui-icon-transfer-within-a-station:before{content:\"transfer_within_a_station\"}.ui-icon-transform:before{content:\"transform\"}.ui-icon-translate:before{content:\"translate\"}.ui-icon-trending-down:before{content:\"trending_down\"}.ui-icon-trending-flat:before{content:\"trending_flat\"}.ui-icon-trending-up:before{content:\"trending_up\"}.ui-icon-tune:before{content:\"tune\"}.ui-icon-turned-in:before{content:\"turned_in\"}.ui-icon-turned-in-not:before{content:\"turned_in_not\"}.ui-icon-tv:before{content:\"tv\"}.ui-icon-unarchive:before{content:\"unarchive\"}.ui-icon-undo:before{content:\"undo\"}.ui-icon-unfold-less:before{content:\"unfold_less\"}.ui-icon-unfold-more:before{content:\"unfold_more\"}.ui-icon-update:before{content:\"update\"}.ui-icon-usb:before{content:\"usb\"}.ui-icon-verified-user:before{content:\"verified_user\"}.ui-icon-vertical-align-bottom:before{content:\"vertical_align_bottom\"}.ui-icon-vertical-align-center:before{content:\"vertical_align_center\"}.ui-icon-vertical-align-top:before{content:\"vertical_align_top\"}.ui-icon-vibration:before{content:\"vibration\"}.ui-icon-video-call:before{content:\"video_call\"}.ui-icon-video-label:before{content:\"video_label\"}.ui-icon-video-library:before{content:\"video_library\"}.ui-icon-videocam:before{content:\"videocam\"}.ui-icon-videocam-off:before{content:\"videocam_off\"}.ui-icon-videogame-asset:before{content:\"videogame_asset\"}.ui-icon-view-agenda:before{content:\"view_agenda\"}.ui-icon-view-array:before{content:\"view_array\"}.ui-icon-view-carousel:before{content:\"view_carousel\"}.ui-icon-view-column:before{content:\"view_column\"}.ui-icon-view-comfy:before{content:\"view_comfy\"}.ui-icon-view-compact:before{content:\"view_compact\"}.ui-icon-view-day:before{content:\"view_day\"}.ui-icon-view-headline:before{content:\"view_headline\"}.ui-icon-view-list:before{content:\"view_list\"}.ui-icon-view-module:before{content:\"view_module\"}.ui-icon-view-quilt:before{content:\"view_quilt\"}.ui-icon-view-stream:before{content:\"view_stream\"}.ui-icon-view-week:before{content:\"view_week\"}.ui-icon-vignette:before{content:\"vignette\"}.ui-icon-visibility:before{content:\"visibility\"}.ui-icon-visibility-off:before{content:\"visibility_off\"}.ui-icon-voice-chat:before{content:\"voice_chat\"}.ui-icon-voicemail:before{content:\"voicemail\"}.ui-icon-volume-down:before{content:\"volume_down\"}.ui-icon-volume-mute:before{content:\"volume_mute\"}.ui-icon-volume-off:before{content:\"volume_off\"}.ui-icon-volume-up:before{content:\"volume_up\"}.ui-icon-vpn-key:before{content:\"vpn_key\"}.ui-icon-vpn-lock:before{content:\"vpn_lock\"}.ui-icon-wallpaper:before{content:\"wallpaper\"}.ui-icon-warning:before{content:\"warning\"}.ui-icon-watch:before{content:\"watch\"}.ui-icon-watch-later:before{content:\"watch_later\"}.ui-icon-wb-auto:before{content:\"wb_auto\"}.ui-icon-wb-cloudy:before{content:\"wb_cloudy\"}.ui-icon-wb-incandescent:before{content:\"wb_incandescent\"}.ui-icon-wb-iridescent:before{content:\"wb_iridescent\"}.ui-icon-wb-sunny:before{content:\"wb_sunny\"}.ui-icon-wc:before{content:\"wc\"}.ui-icon-web:before{content:\"web\"}.ui-icon-web-asset:before{content:\"web_asset\"}.ui-icon-weekend:before{content:\"weekend\"}.ui-icon-whatshot:before{content:\"whatshot\"}.ui-icon-widgets:before{content:\"widgets\"}.ui-icon-wifi:before{content:\"wifi\"}.ui-icon-wifi-lock:before{content:\"wifi_lock\"}.ui-icon-wifi-tethering:before{content:\"wifi_tethering\"}.ui-icon-work:before{content:\"work\"}.ui-icon-wrap-text:before{content:\"wrap_text\"}.ui-icon-youtube-searched-for:before{content:\"youtube_searched_for\"}.ui-icon-zoom-in:before{content:\"zoom_in\"}.ui-icon-zoom-out:before{content:\"zoom_out\"}.ui-icon-zoom-out-map:before{content:\"zoom_out_map\"}.fa,.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:1.5em;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-widget,body .ui-widget .ui-widget{font-family:Roboto,Helvetica Neue,sans-serif;text-decoration:none}body .ui-widget-content{background-color:#fff;border:1px solid #d8d8d8}body .ui-widget-content .fa{color:#757575}body .ui-widget-header{background-color:#2f4050;color:#fff;border:1px solid #2f4050}body .ui-widget-header .fa{color:#fff}body .ui-state-active,body .ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-state-active .fa,body .ui-state-highlight .fa{color:#fff}body .ui-state-disabled,body .ui-widget:disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none;cursor:auto!important}body .ui-corner-all{border-radius:3px}body .ui-corner-top{border-top-left-radius:3px;border-top-right-radius:3px}body .ui-corner-bottom{border-bottom-left-radius:3px;border-bottom-right-radius:3px}body .ui-corner-left{border-top-left-radius:3px;border-bottom-left-radius:3px}body .ui-corner-right{border-top-right-radius:3px;border-bottom-right-radius:3px}body .ui-widget-overlay{background-color:#58575c;opacity:.8}body a{color:#2f4050}body .ui-inputtext{background:transparent;border-width:0 0 1px;padding:2px 2px 1px;font-size:1em;border-color:#bdbdbd;border-style:solid;-webkit-transition:border-color .3s;transition:border-color .3s;border-radius:0}body .ui-inputtext.ui-state-focus,body .ui-inputtext:focus{border-width:0 0 2px;border-color:#2f4050;padding-bottom:0}body .ui-inputtext:disabled{border-bottom:1px dotted}body .ui-inputtext.ui-widget-content{border-width:1px}body .ui-inputtext.ui-state-error{border-color:#e62a10}body .md-inputfield{display:block;position:relative}body .md-inputfield label{color:#999;font-weight:400;position:absolute;pointer-events:none;left:5px;top:1px;transition:all .3s ease;-moz-transition:.3s ease all;-webkit-transition:all .3s ease}body .md-inputfield .ui-inputwrapper-filled~label,body .md-inputfield .ui-inputwrapper-focus~label,body .md-inputfield input.ui-state-filled~label,body .md-inputfield input:focus~label{top:-20px;font-size:12px;color:#2f4050}body .md-inputfield .input:-webkit-autofill~label{top:-20px;font-size:12px;color:#2f4050}body .md-inputfield input.ng-dirty.ng-invalid~label{color:#e62a10}body .md-inputfield .ui-message.ui-messages-error,body .ui-material-message.ui-message.ui-messages-error{background-color:transparent;border:0 none;margin:0;color:#e62a10;font-size:.75em}body .ui-listbox{min-width:12.5em;background-color:#fff;border-radius:3px}body .ui-listbox.ui-inputtext,body .ui-listbox .ui-listbox-list{padding:0}body .ui-listbox .ui-listbox-item{font-size:1em;padding:.625em 1em;margin:0;color:#424242;position:relative;overflow:hidden;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:0}body .ui-listbox .ui-listbox-item.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-listbox:not(.ui-state-disabled) .ui-listbox-item:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-listbox .ui-listbox-header{border-radius:0;padding:.625em 1em}body .ui-listbox .ui-listbox-header .ui-chkbox .ui-chkbox-box{border-color:#fff}body .ui-listbox .ui-listbox-header .ui-listbox-filter-container .ui-inputtext{color:#fff;padding:2px 2px 1px;padding-left:1.5em}body .ui-listbox .ui-listbox-header .ui-listbox-filter-container .ui-inputtext:focus{padding-bottom:0;border-bottom-color:#fff}body .ui-listbox .ui-listbox-header .ui-listbox-filter-container .fa{top:0;left:0}body .ui-button,body .ui-datepicker-buttonpane>button{overflow:hidden;background-color:#2f4050;color:#fff;font-size:1em;height:2.25em;padding:0 1em;border:0 none;-webkit-box-shadow:0 1px 2.5px 0 rgba(0,0,0,.26),0 1px 5px 0 rgba(0,0,0,.16);box-shadow:0 1px 2.5px 0 rgba(0,0,0,.26),0 1px 5px 0 rgba(0,0,0,.16);-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-button:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button:enabled:not(:focus):hover{background-color:#0e2031}body .ui-button:focus,body .ui-datepicker-buttonpane>button:focus{outline:0 none;background-color:#425a70}body .ui-button .ui-button-text,body .ui-datepicker-buttonpane>button .ui-button-text{padding:0;line-height:2.25em}body .ui-button .fa,body .ui-datepicker-buttonpane>button .fa{color:#fff}body .ui-button.ui-button-icon-only,body .ui-datepicker-buttonpane>button.ui-button-icon-only{border-radius:50%;width:2.5em;height:2.5em}body .ui-button.ui-button-icon-only .fa,body .ui-datepicker-buttonpane>button.ui-button-icon-only .fa{margin-left:-.5em}body .ui-button.ui-button-text-icon-left,body .ui-datepicker-buttonpane>button.ui-button-text-icon-left{padding-left:2.5em}body .ui-button.ui-button-text-icon-right,body .ui-datepicker-buttonpane>button.ui-button-text-icon-right{padding-right:2.5em}body .ui-button.secondary,body .ui-datepicker-buttonpane>button.secondary{background-color:#1ab394;color:#fff}body .ui-button.secondary:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.secondary:enabled:not(:focus):hover{background-color:#197865}body .ui-button.secondary:focus,body .ui-datepicker-buttonpane>button.secondary:focus{outline:0 none;background-color:#21dfb8}body .ui-button.blue-grey-btn,body .ui-datepicker-buttonpane>button.blue-grey-btn{background-color:#607d8b}body .ui-button.blue-grey-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.blue-grey-btn:enabled:not(:focus):hover{background-color:#37474f}body .ui-button.blue-grey-btn:focus,body .ui-datepicker-buttonpane>button.blue-grey-btn:focus{outline:0 none;background-color:#7b96a3}body .ui-button.cyan-btn,body .ui-datepicker-buttonpane>button.cyan-btn{background-color:#00bcd4}body .ui-button.cyan-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.cyan-btn:enabled:not(:focus):hover{background-color:#00838f}body .ui-button.cyan-btn:focus,body .ui-datepicker-buttonpane>button.cyan-btn:focus{outline:0 none;background-color:#08e3ff}body .ui-button.teal-btn,body .ui-datepicker-buttonpane>button.teal-btn{background-color:#009688}body .ui-button.teal-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.teal-btn:enabled:not(:focus):hover{background-color:#00695c}body .ui-button.teal-btn:focus,body .ui-datepicker-buttonpane>button.teal-btn:focus{outline:0 none;background-color:#00c9b6}body .ui-button.red-btn,body .ui-datepicker-buttonpane>button.red-btn{background-color:#f44336}body .ui-button.red-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.red-btn:enabled:not(:focus):hover{background-color:#c62828}body .ui-button.red-btn:focus,body .ui-datepicker-buttonpane>button.red-btn:focus{outline:0 none;background-color:#f77066}body .ui-button.green-btn,body .ui-datepicker-buttonpane>button.green-btn{background-color:#4caf50}body .ui-button.green-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.green-btn:enabled:not(:focus):hover{background-color:#2e7d32}body .ui-button.green-btn:focus,body .ui-datepicker-buttonpane>button.green-btn:focus{outline:0 none;background-color:#6ec071}body .ui-button.deep-orange-btn,body .ui-datepicker-buttonpane>button.deep-orange-btn{background-color:#ff5722}body .ui-button.deep-orange-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.deep-orange-btn:enabled:not(:focus):hover{background-color:#d84315}body .ui-button.deep-orange-btn:focus,body .ui-datepicker-buttonpane>button.deep-orange-btn:focus{outline:0 none;background-color:#ff7e55}body .ui-button.purple-btn,body .ui-datepicker-buttonpane>button.purple-btn{background-color:#673ab7}body .ui-button.purple-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.purple-btn:enabled:not(:focus):hover{background-color:#4527a0}body .ui-button.purple-btn:focus,body .ui-datepicker-buttonpane>button.purple-btn:focus{outline:0 none;background-color:#8259cb}body .ui-button.pink-btn,body .ui-datepicker-buttonpane>button.pink-btn{background-color:#e91e63}body .ui-button.pink-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.pink-btn:enabled:not(:focus):hover{background-color:#ad1457}body .ui-button.pink-btn:focus,body .ui-datepicker-buttonpane>button.pink-btn:focus{outline:0 none;background-color:#ee4c83}body .ui-button.amber-btn,body .ui-datepicker-buttonpane>button.amber-btn{background-color:#ffc107;color:#212121}body .ui-button.amber-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.amber-btn:enabled:not(:focus):hover{background-color:#ff8f00}body .ui-button.amber-btn:focus,body .ui-datepicker-buttonpane>button.amber-btn:focus{outline:0 none;background-color:#ffce3a}body .ui-button.orange-btn,body .ui-datepicker-buttonpane>button.orange-btn{background-color:#ff9800}body .ui-button.orange-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.orange-btn:enabled:not(:focus):hover{background-color:#ef6c00}body .ui-button.orange-btn:focus,body .ui-datepicker-buttonpane>button.orange-btn:focus{outline:0 none;background-color:#ffad33}body .ui-button.brown-btn,body .ui-datepicker-buttonpane>button.brown-btn{background-color:#795548}body .ui-button.brown-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.brown-btn:enabled:not(:focus):hover{background-color:#4e342e}body .ui-button.brown-btn:focus,body .ui-datepicker-buttonpane>button.brown-btn:focus{outline:0 none;background-color:#996b5b}body .ui-button.indigo-btn,body .ui-datepicker-buttonpane>button.indigo-btn{background-color:#3f51b5}body .ui-button.indigo-btn:enabled:not(:focus):hover,body .ui-datepicker-buttonpane>button.indigo-btn:enabled:not(:focus):hover{background-color:#283593}body .ui-button.indigo-btn:focus,body .ui-datepicker-buttonpane>button.indigo-btn:focus{outline:0 none;background-color:#606fc7}body .ui-button.flat,body .ui-datepicker-buttonpane>button.flat{box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none}body .ui-buttonset .ui-button:not(.ui-state-disabled):not(.ui-state-active):hover{background-color:#0e2031}body .ui-buttonset .ui-button.ui-state-active{background-color:#1ab394;color:#fff}body .ui-togglebutton:not(.ui-state-active):not(.ui-state-disabled):hover{background-color:#0e2031}body .ui-togglebutton.ui-state-active{background-color:#1ab394;color:#fff}body .ui-splitbutton{border-radius:4px}body .ui-splitbutton>.ui-button{box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;vertical-align:top}body .ui-splitbutton>.ui-button:active{background-color:#425a70}body .ui-splitbutton .ui-splitbutton-menubutton{height:2.25em;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:3px;border-bottom-right-radius:3px}body .ui-fluid .ui-splitbutton .ui-button:first-child{width:calc(100% - 2em)}body .ui-chkbox{display:inline-block;vertical-align:middle;line-height:1.25em;width:1.25em;height:1.25em;cursor:default}body .ui-chkbox .ui-chkbox-box{border:2px solid #757575;width:1.25em;height:1.25em;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-chkbox .ui-chkbox-box .ui-chkbox-icon{font-size:1.25em;margin-left:-2px;margin-top:-1px}body .ui-chkbox .ui-chkbox-box.ui-state-active{border-color:#2f4050;background-color:#2f4050}body .ui-chkbox .ui-chkbox-box.ui-state-active .fa{color:#fff}body .ui-chkbox .ui-chkbox-box.ui-state-focus{border-color:#2f4050;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-transition:box-shadow .3s,background-color .3s;-webkit-transition:background-color .3s,-webkit-box-shadow .3s;transition:background-color .3s,-webkit-box-shadow .3s;transition:box-shadow .3s,background-color .3s;transition:box-shadow .3s,background-color .3s,-webkit-box-shadow .3s}body .ui-radiobutton{position:relative;margin:0 .25em 0 0;vertical-align:middle}body .ui-radiobutton .ui-radiobutton-box{border:2px solid #757575;width:1.286em;height:1.286em;-webkit-transition:box-shadow .3s;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s,-webkit-box-shadow .3s;border-radius:50%}body .ui-radiobutton .ui-radiobutton-box.ui-state-focus{border-color:#2f4050;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-transition:box-shadow .3s,background-color .3s;-webkit-transition:background-color .3s,-webkit-box-shadow .3s;transition:background-color .3s,-webkit-box-shadow .3s;transition:box-shadow .3s,background-color .3s;transition:box-shadow .3s,background-color .3s,-webkit-box-shadow .3s}body .ui-radiobutton .ui-radiobutton-box.ui-state-active{border-color:#2f4050;background-color:transparent}body .ui-radiobutton .ui-radiobutton-box .ui-radiobutton-icon{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;font-size:1em;transition:-webkit-transform .28s ease;-webkit-transition:-webkit-transform .28s ease;transition:transform .28s ease;transition:transform .28s ease,-webkit-transform .28s ease;-webkit-transform:scale(0);transform:scale(0);margin:0}body .ui-radiobutton .ui-radiobutton-box .fa-circle{background-color:#2f4050;-webkit-transform:scale(.5);transform:scale(.5)}body .ui-autocomplete-panel{border-radius:0}body .ui-autocomplete-panel.ui-shadow{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}body .ui-autocomplete-panel .ui-autocomplete-list{padding:0}body .ui-autocomplete-panel .ui-autocomplete-list .ui-autocomplete-list-item{-webkit-transition:background-color .3s;transition:background-color .3s;font-size:1em;padding:.625em 1em;border-radius:0;color:#424242}body .ui-autocomplete-panel .ui-autocomplete-list .ui-autocomplete-list-item .ui-autocomplete-query{font-weight:700}body .ui-autocomplete-panel .ui-autocomplete-list .ui-autocomplete-list-item.ui-state-highlight{color:#fff}body .ui-autocomplete-panel .ui-autocomplete-list .ui-autocomplete-group{padding:.625em 1em}body .ui-autocomplete .ui-autocomplete-dropdown.ui-button.ui-button-icon-only{background-color:transparent;box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;height:1.5em;width:1.5em;padding:0;right:0;bottom:0;margin-right:0;position:absolute}body .ui-autocomplete .ui-autocomplete-dropdown.ui-button.ui-button-icon-only .ui-button-text{display:none}body .ui-autocomplete .ui-autocomplete-dropdown.ui-button.ui-button-icon-only .fa{color:#757575}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container.ui-inputtext{-webkit-box-sizing:border-box;box-sizing:border-box;padding:2px 2px 1px}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container.ui-state-focus{padding-bottom:0}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container.ui-state-disabled{border-bottom:1px dotted}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-input-token{float:none;display:inline-block;margin:0 1px;vertical-align:middle}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-input-token>input{padding:0;font-size:14px;margin:0;vertical-align:bottom}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-token{display:inline-block;float:none;vertical-align:middle;font-size:1em}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-token .ui-autocomplete-token-label{display:inline-block;vertical-align:middle}body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-dropdown.ui-button.ui-button-icon-only{bottom:3px}body .ui-fluid .ui-autocomplete.ui-autocomplete-dd>.ui-inputtext{width:100%}body .ui-dropdown{border-bottom:1px solid #bdbdbd;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;-webkit-transition:border-color .3s;transition:border-color .3s}body .ui-dropdown .ui-dropdown-trigger{height:1.5em;width:1.5em;margin-top:-1px;padding:0;top:0;margin-right:0}body .ui-dropdown .ui-dropdown-trigger .fa{color:#757575;margin-top:0;margin-left:0}body .ui-dropdown .ui-dropdown-label.ui-inputtext{font:1em Roboto,Helvetica Neue,sans-serif}body .ui-dropdown.ui-state-focus{border-bottom:2px solid #2f4050}body .ui-dropdown.ui-state-focus .ui-dropdown-label{padding-bottom:0}body .ui-dropdown-panel{border-radius:0}body .ui-dropdown-panel .ui-dropdown-list{padding:0}body .ui-dropdown-panel .ui-dropdown-item{margin:0;font-size:1em;padding:.625em 1em;color:#424242;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:0}body .ui-dropdown-panel .ui-dropdown-item:hover{background-color:#e8e8e8;color:#000}body .ui-dropdown-panel .ui-dropdown-item.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-dropdown-panel.ui-shadow{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}body .ui-dropdown-panel .ui-dropdown-filter-container{display:block;border-bottom:1px solid #bdbdbd;background-color:#2f4050;padding:.625em 1em}body .ui-dropdown-panel .ui-dropdown-filter-container input{color:#fff}body .ui-dropdown-panel .ui-dropdown-filter-container input:focus{border-bottom-color:#fff}body .ui-dropdown-panel .ui-dropdown-filter-container .fa{top:.325em;right:.75em;color:#fff}body .ui-multiselect{border-bottom:1px solid #bdbdbd;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;-webkit-transition:border-color .3s;transition:border-color .3s}body .ui-multiselect .ui-multiselect-label-container{padding-right:1.5em}body .ui-multiselect .ui-multiselect-label-container .ui-multiselect-label{padding:0 2px}body .ui-multiselect .ui-multiselect-trigger{height:1.5em;width:1.5em;margin-top:0;padding:0;bottom:0;top:auto}body .ui-multiselect .ui-multiselect-trigger .fa{color:#757575;margin-top:auto;margin-left:auto}body .ui-multiselect.ui-state-focus{border-bottom:2px solid #2f4050}body .ui-multiselect-panel.ui-widget{padding:0;border-radius:0;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);min-width:12.5em}body .ui-multiselect-panel.ui-widget .ui-multiselect-header{border-radius:0;padding:.625em 1em;position:relative}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-chkbox{float:none;margin:0 .5em 0 -.125em;position:static}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-chkbox .ui-chkbox-box,body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-chkbox .ui-chkbox-box .ui-chkbox-icon,body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-chkbox .ui-chkbox-box.ui-state-active .ui-chkbox-icon{border-color:#fff}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-chkbox .ui-chkbox-box.ui-state-focus{background-color:#5b6976;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-filter-container{width:70%;display:inline-block;vertical-align:middle;float:none;margin-left:0}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-filter-container .fa{top:0;left:0;color:#fff}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-filter-container .ui-inputtext{color:#fff;padding-left:1.5em;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-filter-container .ui-inputtext:focus{border-bottom-color:#fff}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-close{position:absolute;right:.5em;top:.625em;height:1.5em;width:1.5em}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-close span{color:#fff}body .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-close:hover{background-color:#5b6976;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-multiselect-panel.ui-widget .ui-multiselect-item{font-size:1em;padding:.625em 1em;color:#424242;border-radius:0}body .ui-multiselect-panel.ui-widget .ui-multiselect-item:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-multiselect-panel.ui-widget .ui-multiselect-item.ui-state-highlight{color:#fff}body .ui-spinner .ui-spinner-button{width:1em;height:.75em;padding:0;margin-right:.25em;background-color:transparent;color:#424242;z-index:auto;box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none}body .ui-spinner .ui-spinner-button .fa-triangle-1-n,body .ui-spinner .ui-spinner-button .fa-triangle-1-s{color:#424242}body .ui-spinner .ui-spinner-button .fa{top:0;height:.5em;color:#757575}body .ui-spinner .ui-spinner-button:active,body .ui-spinner .ui-spinner-button:enabled:hover{background-color:transparent}body .ui-spinner .ui-spinner-up .fa{top:.25em}body .ui-spinner .ui-spinner-down .fa{top:.167em}body .ui-spinner .ui-spinner-input{padding-right:30px}body .ui-fluid .ui-spinner .ui-spinner-button{width:1em;height:.75em}body .ui-fluid .ui-spinner .ui-spinner-button .fa{left:auto}body .ui-inputswitch{height:14px;width:34px!important;overflow:visible;background-color:#9e9e9e;border-color:#9e9e9e;border-radius:8px}body .ui-inputswitch .ui-inputswitch-handle{top:-4px;background-color:#fff;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;width:20px!important;height:20px!important;-webkit-box-shadow:rgba(0,0,0,.2) 0 1px 3px 0,rgba(0,0,0,.13725) 0 1px 1px 0,rgba(0,0,0,.11765) 0 2px 1px -1px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.13725),0 2px 1px -1px rgba(0,0,0,.11765)}body .ui-inputswitch .ui-inputswitch-off span,body .ui-inputswitch .ui-inputswitch-on,body .ui-inputswitch .ui-inputswitch-on span{visibility:hidden}body .ui-inputswitch.ui-inputswitch-checked{background-color:#6be7ce;border-color:#6be7ce}body .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-handle,body .ui-slider .ui-slider-handle{background-color:#1ab394;color:#fff}body .ui-slider .ui-slider-handle{border-radius:50%;width:1.25em;height:1.25em;-webkit-transform:scale(.7);transform:scale(.7);-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}body .ui-slider .ui-slider-handle.ui-state-focus{-webkit-transform:scale(1);transform:scale(1)}body .ui-slider .ui-slider-handle:focus{outline:0 none}body .ui-slider.ui-slider-horizontal{height:2px;border:0 none;background-color:#bdbdbd}body .ui-slider.ui-slider-horizontal .ui-slider-handle{top:-.55em}body .ui-slider.ui-slider-vertical{width:2px;border:0 none;background-color:#bdbdbd}body .ui-slider.ui-slider-vertical .ui-slider-handle{left:-.55em}body .ui-slider .ui-slider-range{background-color:#1ab394;color:#fff}body .ui-slider:not(.ui-state-disabled) .ui-slider-handle:hover{-webkit-transform:scale(1);transform:scale(1)}body .ui-calendar .ui-datepicker-trigger{bottom:2px;right:0;background-color:transparent;color:#424242;height:1.5em;width:1.5em;box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;border-radius:0}body .ui-calendar .ui-datepicker-trigger .fa{color:#757575}body .ui-calendar .ui-datepicker-trigger:enabled:hover{background-color:transparent}body .ui-fluid .ui-calendar.ui-calendar-w-btn .ui-inputtext{width:100%}body .ui-datepicker{padding:0;width:17.5em}body .ui-datepicker.ui-shadow{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}body .ui-datepicker .ui-datepicker-header{padding:.625em 1em;font-size:1em;background:#0e2031;border-color:#0e2031;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-left-radius:0;border-bottom-right-radius:0}body .ui-datepicker .ui-datepicker-header .ui-datepicker-prev{cursor:pointer;top:.4em;left:.2em;border-radius:50%;font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-webkit-transition:background-color .3s;transition:background-color .3s;color:#fff}body .ui-datepicker .ui-datepicker-header .ui-datepicker-prev:before{content:\"keyboard_arrow_left\"}body .ui-datepicker .ui-datepicker-header .ui-datepicker-prev .fa{display:none}body .ui-datepicker .ui-datepicker-header .ui-datepicker-prev:hover{background-color:#5b6976}body .ui-datepicker .ui-datepicker-header .ui-datepicker-next{cursor:pointer;top:.4em;right:.2em;font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;color:#fff}body .ui-datepicker .ui-datepicker-header .ui-datepicker-next:before{content:\"keyboard_arrow_right\"}body .ui-datepicker .ui-datepicker-header .ui-datepicker-next .fa{display:none}body .ui-datepicker .ui-datepicker-header .ui-datepicker-next:hover{background-color:#5b6976}body .ui-datepicker .ui-datepicker-header select.ui-datepicker-month,body .ui-datepicker .ui-datepicker-header select.ui-datepicker-year{font-size:12px}body .ui-datepicker table{table-layout:fixed;border-spacing:0;border-collapse:collapse;font-size:12px}body .ui-datepicker thead tr{color:#fff;background:#2f4050}body .ui-datepicker tbody td{padding:.25em .125em;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-datepicker tbody td.ui-datepicker-today a,body .ui-datepicker tbody td.ui-datepicker-today span{color:#fff;background:#557390}body .ui-datepicker tbody td.ui-datepicker-today a.ui-state-active,body .ui-datepicker tbody td.ui-datepicker-today span.ui-state-active{background-color:#1ab394;color:#fff}body .ui-datepicker tbody td a,body .ui-datepicker tbody td span{padding:.25em;margin:0;text-align:center;color:#424242;display:inline-block;height:2.25em;width:2.25em;line-height:1.7em;border-radius:50%}body .ui-datepicker tbody td a.ui-state-active,body .ui-datepicker tbody td span.ui-state-active{background-color:#1ab394;color:#fff}body .ui-datepicker tbody td a:not(.ui-state-active):not(.ui-state-highlight):hover,body .ui-datepicker tbody td span:not(.ui-state-active):not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-datepicker .ui-timepicker{border-radius:0}body .ui-datepicker .ui-timepicker>div a{height:1.5em}body .ui-datepicker .ui-timepicker>div a>span{display:inline-block;margin-bottom:.25em}body .ui-datepicker .ui-timepicker>div a .fa.fa-angle-up{-webkit-transform:rotate(0);transform:rotate(0);font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-datepicker .ui-timepicker>div a .fa.fa-angle-up:before{content:\"keyboard_arrow_up\"}body .ui-datepicker .ui-timepicker>div a .fa.fa-angle-down{-webkit-transform:rotate(0);transform:rotate(0);font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-datepicker .ui-timepicker>div a .fa.fa-angle-down:before{content:\"keyboard_arrow_down\"}body #ui-datepicker-div{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}body .ui-rating{min-height:1.5em}body .ui-rating .fa-ban{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";color:#757575}body .ui-rating .fa-ban:before{content:\"cancel\"}body .ui-rating .fa-star{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";color:#757575}body .ui-rating .fa-star:before{content:\"star\"}body .ui-rating .fa-star-o{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";color:#757575}body .ui-rating .fa-star-o:before{content:\"star_border\"}body .ui-chips>ul.ui-inputtext{padding:2px 2px 1px}body .ui-chips>ul.ui-inputtext.ui-state-focus{padding-bottom:0}body .ui-chips>ul.ui-inputtext .ui-chips-input-token{padding-bottom:2px}body .ui-chips>ul.ui-inputtext .ui-chips-input-token>input{padding:0;font-size:14px;margin:0;vertical-align:bottom}body .ui-chips>ul.ui-inputtext .ui-chips-input-token input.ui-state-disabled{width:0}body .ui-chips>ul.ui-inputtext .ui-chips-token{display:inline-block;float:none;vertical-align:middle;font-size:1em}body .ui-chips>ul.ui-inputtext .ui-chips-token .ui-chips-token-label{display:inline-block;vertical-align:middle}body .ui-chips>ul.ui-inputtext.ui-state-disabled{border-bottom:1px dotted}body .ui-password-panel.ui-shadow{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}body .ui-fileupload .ui-fileupload-buttonbar{padding:.625em 1em}body .ui-fileupload .ui-fileupload-buttonbar .fa-arrowreturnthick-1-n:before{content:\"file_upload\"}body .ui-fileupload .ui-fileupload-buttonbar .ui-button{background-color:#1ab394}body .ui-fileupload .ui-fileupload-buttonbar .ui-button:enabled:hover{background-color:#197865}body .ui-fileupload .ui-fileupload-content .ui-messages-error .fa{color:#fff}body .ui-fileupload-choose.ui-state-focus.ui-button,body .ui-fileupload-choose:not(.ui-state-disabled):hover.ui-button{background-color:#179d82}body .ui-fileupload-choose:not(.ui-state-disabled):active.ui-button{background-color:#14866f}body .ui-editor-container .ui-editor-toolbar{background-color:#e8e8e8}body .ui-editor-container .ql-picker.ql-expanded .ql-picker-label{color:#444}body .ui-inputtext.ng-dirty.ng-invalid,body p-autocomplete.ng-dirty.ng-invalid>.ui-autocomplete>.ui-inputtext,body p-calendar.ng-dirty.ng-invalid>.ui-inputtext,body p-checkbox.ng-dirty.ng-invalid .ui-chkbox-box,body p-dropdown.ng-dirty.ng-invalid>.ui-dropdown,body p-inputmask.ng-dirty.ng-invalid>.ui-inputtext,body p-inputswitch.ng-dirty.ng-invalid .ui-inputswitch,body p-listbox.ng-dirty.ng-invalid .ui-inputtext,body p-multiselect.ng-dirty.ng-invalid>.ui-multiselect,body p-radiobutton.ng-dirty.ng-invalid .ui-radiobutton-box,body p-selectbutton.ng-dirty.ng-invalid .ui-button,body p-spinner.ng-dirty.ng-invalid>.ui-inputtext,body p-togglebutton.ng-dirty.ng-invalid .ui-button{border-bottom-color:#e62a10}@media (max-width:640px){body .ui-buttonset>.ui-button{display:block;border-radius:0}body .ui-buttonset>.ui-button:first-child{border-top-left-radius:3px;border-top-right-radius:3px}body .ui-buttonset>.ui-button:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}body .ui-splitbutton>.ui-button{display:inline-block}body .ui-splitbutton>.ui-button:first-child{border-top-left-radius:0;border-top-right-radius:0}body .ui-splitbutton>.ui-button:last-child{border-bottom-left-radius:0;border-bottom-right-radius:0}}body .ui-panel{padding:0}body .ui-panel .ui-panel-titlebar{border:0 none;border-bottom:1px solid #2f4050;padding:.625em 1em;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-left-radius:0;border-bottom-right-radius:0}body .ui-panel .ui-panel-titlebar .ui-panel-title{line-height:1.5em}body .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon{position:relative;width:1.5em;height:1.5em;color:#fff;margin:0;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}body .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover{background-color:#5b6976}body .ui-panel .ui-panel-content{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:.625em 1em}body .ui-panel .ui-panel-footer{padding:.625em 1em;border:0 none;border-top:1px solid #eaeaea;margin:0}body .ui-fieldset{padding:.625em 1em}body .ui-fieldset .ui-fieldset-legend{padding:.625em 1em;padding-left:.125em;padding-right:.5em;color:#2f4050}body .ui-fieldset .ui-fieldset-legend .ui-fieldset-toggler{padding:.5em;height:2em;width:2em;background-color:#2f4050;color:#fff;font-size:1.5em;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;margin-right:.5em;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}body .ui-fieldset .ui-fieldset-legend .ui-fieldset-toggler:hover{background-color:#0e2031}body .ui-fieldset .ui-fieldset-legend.ui-state-focus{background-color:transparent}body .ui-accordion .ui-accordion-header{background-color:#2f4050;padding:0;color:#fff;font-size:1em;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-accordion .ui-accordion-header>a{padding:.625em 1em;padding-left:2.5em;color:#fff}body .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover{background-color:#0e2031}body .ui-accordion .ui-accordion-header.ui-state-active{background-color:#1ab394;color:#fff;border-bottom-left-radius:0;border-bottom-right-radius:0}body .ui-accordion .ui-accordion-header.ui-state-active>a{color:#fff}body .ui-accordion .ui-accordion-header .fa-caret-down,body .ui-accordion .ui-accordion-header .fa-caret-right{margin-top:-.5em;font-size:1.5em}body .ui-accordion .ui-accordion-content{padding:.625em 1em;line-height:1.5em}body .ui-toolbar{background-color:#0e2031;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);padding:.625em}body .ui-tabview{padding:0}body .ui-tabview .ui-tabview-nav{background-color:#fff;border:0 none;border-radius:0}body .ui-tabview .ui-tabview-nav>li{padding:0;-webkit-transition:border-color .3s;transition:border-color .3s}body .ui-tabview .ui-tabview-nav>li>a{padding:.625em 1em}body .ui-tabview .ui-tabview-nav>li>a:focus{outline:0 none}body .ui-tabview .ui-tabview-nav>li>.fa-close{margin:.325em 0 0;-webkit-transition:color .3s;transition:color .3s;color:#757575}body .ui-tabview .ui-tabview-nav>li .ui-tabview-left-icon,body .ui-tabview .ui-tabview-nav>li .ui-tabview-right-icon{color:#757575;display:inline-block;vertical-align:middle}body .ui-tabview .ui-tabview-nav>li .ui-tabview-title{line-height:1.5em;vertical-align:middle}body .ui-tabview .ui-tabview-nav>li.ui-state-default a{color:#757575}body .ui-tabview .ui-tabview-nav>li:not(.ui-state-active):not(.ui-state-disabled):hover{background-color:#fff}body .ui-tabview .ui-tabview-nav>li.ui-state-active{background-color:#fff;border-color:#1ab394;border-style:solid}body .ui-tabview .ui-tabview-nav>li.ui-state-active a{color:#2f4050}body .ui-tabview .ui-tabview-nav>li.ui-state-active>.fa-close{color:#1ab394}body .ui-tabview .ui-tabview-nav>li.ui-tabview-outline{outline:0 none;border-color:#6be7ce}body .ui-tabview .ui-tabview-panel{padding:.625em 1em}body .ui-tabview.ui-tabview-top>.ui-tabview-nav{padding:0;margin:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:1px solid #eaeaea}body .ui-tabview.ui-tabview-top>.ui-tabview-nav>li{border-style:solid;border-width:0 0 2px}body .ui-tabview.ui-tabview-bottom>.ui-tabview-nav{padding:0;margin:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top:1px solid #eaeaea}body .ui-tabview.ui-tabview-bottom>.ui-tabview-nav>li{border-width:2px 0 0}body .ui-tabview.ui-tabview-left>.ui-tabview-nav{padding:0;margin:0;border-top-left-radius:4px;border-bottom-left-radius:4px;border-right:1px solid #eaeaea}body .ui-tabview.ui-tabview-left>.ui-tabview-nav>li{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0 2px 0 0}body .ui-tabview.ui-tabview-left>.ui-tabview-nav>li>a{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-tabview.ui-tabview-right>.ui-tabview-nav{padding:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-left:1px solid #eaeaea}body .ui-tabview.ui-tabview-right>.ui-tabview-nav>li{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0 0 0 2px}body .ui-tabview.ui-tabview-right>.ui-tabview-nav>li>a{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-tabview.ui-tabview-right>.ui-tabview-nav>li.ui-state-active>a{padding-left:.875em}@media (max-width:640px){body .ui-toolbar .ui-toolbar-group-right{margin-top:1em}}body .ui-picklist .ui-picklist-caption{font-size:1em;padding:.625em 1em}body .ui-picklist .ui-picklist-list{padding:0}body .ui-picklist li.ui-picklist-item{font-size:1em;padding:.625em 1em;margin:0;border-radius:0;color:#424242}body .ui-picklist li.ui-picklist-item:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-picklist li.ui-picklist-item.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-picklist .ui-picklist-buttons{width:3em}body .ui-picklist .ui-picklist-buttons .ui-button.ui-button-icon-only{width:2.5em;margin-right:0;display:inline-block;margin-bottom:.5em}body .ui-picklist .ui-picklist-buttons-cell{text-align:center}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .ui-button.ui-button-icon-only{margin:0 auto;display:block;margin-bottom:.5em}body .ui-picklist.ui-picklist-responsive .ui-picklist-list .ui-picklist-item .ui-chkbox{margin-right:.5em;vertical-align:top}body .ui-picklist.ui-picklist-responsive .ui-picklist-list .ui-picklist-item .ui-chkbox,body .ui-picklist.ui-picklist-responsive .ui-picklist-list .ui-picklist-item .ui-chkbox *{-webkit-box-sizing:content-box;box-sizing:content-box}body .ui-orderlist .ui-orderlist-caption{font-size:1em;padding:.625em 1em;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-orderlist .ui-orderlist-list{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-orderlist .ui-orderlist-list li.ui-orderlist-item{font-size:1em;padding:.625em 1em;margin:0;border-radius:0;color:#424242}body .ui-orderlist .ui-orderlist-list li.ui-orderlist-item:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-orderlist .ui-orderlist-list li.ui-orderlist-item.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-orderlist.ui-orderlist-responsive .ui-orderlist-controls{width:3.75em}body .ui-orderlist .ui-orderlist-controls{width:3.75em;text-align:center}body .ui-orderlist .ui-orderlist-controls .ui-button.ui-button-icon-only{width:2.5em;margin-bottom:.5em;margin-right:0}body .ui-organizationchart .ui-organizationchart-node-content.ui-organizationchart-selectable-node:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-organizationchart .ui-organizationchart-node-content.ui-state-highlight .ui-node-toggler i{color:#0a4438}body .ui-organizationchart .ui-organizationchart-line-down{background-color:#bfbfbf}body .ui-organizationchart .ui-organizationchart-line-left{border-right:1px solid #bfbfbf}body .ui-organizationchart .ui-organizationchart-line-top{border-top:1px solid #bfbfbf}body .ui-organizationchart .ui-organizationchart-node-content{border-color:#bfbfbf}body .ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler{bottom:-1.143em;margin-left:-.825em;color:#bfbfbf}body .ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler .fa-chevron-down{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler .fa-chevron-down:before{content:\"keyboard_arrow_down\"}body .ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler .fa-chevron-up{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler .fa-chevron-up:before{content:\"keyboard_arrow_up\"}body .ui-paginator{background-color:#0e2031;padding:.625em 1em}body .ui-paginator>a{-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff}body .ui-paginator>a .fa{display:none}body .ui-paginator>a:not(.ui-state-disabled):not(.ui-state-active):hover{background-color:#5b6976;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-paginator .ui-paginator-next{padding:0;vertical-align:middle;font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-paginator .ui-paginator-next:before{content:\"navigate_next\"}body .ui-paginator .ui-paginator-last{padding:0;vertical-align:middle;font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-paginator .ui-paginator-last:before{content:\"last_page\"}body .ui-paginator .ui-paginator-prev{padding:0;vertical-align:middle;font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-paginator .ui-paginator-prev:before{content:\"navigate_before\"}body .ui-paginator .ui-paginator-first{padding:0;vertical-align:middle;font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\"}body .ui-paginator .ui-paginator-first:before{content:\"first_page\"}body .ui-paginator .ui-paginator-pages{vertical-align:middle;margin:0 .375em}body .ui-paginator .ui-paginator-pages a{padding:0;color:#fff;min-width:1.714em;min-height:1.714em;line-height:1.714em;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-paginator .ui-paginator-pages a:not(.ui-state-active):hover{background-color:#5b6976}body .ui-paginator .ui-paginator-pages a.ui-state-active{background-color:#1ab394;color:#fff}body .ui-datagrid .ui-datagrid-header{padding:.625em 1em}body .ui-datagrid .ui-panel .ui-panel-titlebar{background-color:#fff;color:#424242;border-color:#eaeaea}body .ui-datalist .ui-datalist-header,body .ui-datatable .ui-datatable-footer,body .ui-datatable .ui-datatable-header{padding:.625em 1em}body .ui-datatable .ui-datatable-footer .ui-inputtext,body .ui-datatable .ui-datatable-header .ui-inputtext{color:#fff}body .ui-datatable .ui-datatable-footer .ui-inputtext:focus,body .ui-datatable .ui-datatable-header .ui-inputtext:focus{border-color:#fff}body .ui-datatable .ui-paginator{padding:.625em 1em}body .ui-datatable .ui-datatable-thead>tr{border-color:#cacaca}body .ui-datatable .ui-datatable-thead>tr>th{padding:.625em .875em;background-color:#fff}body .ui-datatable .ui-datatable-thead>tr>th.ui-sortable-column:not(.ui-state-active):hover{background-color:#e8e8e8;color:#000}body .ui-datatable .ui-datatable-thead>tr>th .ui-column-title{display:inline-block;vertical-align:middle}body .ui-datatable .ui-datatable-thead>tr>th .ui-sortable-column-icon{vertical-align:middle;color:#757575}body .ui-datatable .ui-datatable-thead>tr>th.ui-state-active,body .ui-datatable .ui-datatable-thead>tr>th.ui-state-highlight{background-color:#1ab394;color:#fff;border-top-color:#1ab394}body .ui-datatable .ui-datatable-thead>tr>th.ui-state-active .fa,body .ui-datatable .ui-datatable-thead>tr>th.ui-state-active .ui-inputtext,body .ui-datatable .ui-datatable-thead>tr>th.ui-state-highlight .fa,body .ui-datatable .ui-datatable-thead>tr>th.ui-state-highlight .ui-inputtext{color:#fff}body .ui-datatable .ui-datatable-thead>tr>th.ui-state-active .ui-inputtext.ui-state-focus,body .ui-datatable .ui-datatable-thead>tr>th.ui-state-highlight .ui-inputtext.ui-state-focus{border-color:#fff}body .ui-datatable .ui-datatable-thead>tr>th.ui-selection-column .ui-chkbox-box{-webkit-box-sizing:content-box;box-sizing:content-box}body .ui-datatable .ui-datatable-tfoot>tr>td{padding:.625em .875em;border:1px solid #bdbdbd;background-color:#fff}body .ui-datatable .ui-datatable-data tr.ui-datatable-even{background-color:#f4f4f4}body .ui-datatable .ui-datatable-data tr.ui-datatable-even.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-datatable .ui-datatable-data tr{border:1px solid #cacaca}body .ui-datatable .ui-datatable-data tr td{padding:.625em .875em}body .ui-datatable .ui-datatable-data tr td .ui-row-toggler{display:inherit}body .ui-datatable .ui-datatable-data tr td.ui-state-highlight .ui-inputtext{color:#fff;border-color:#fff}body .ui-datatable .ui-datatable-data tr td.ui-state-highlight .ui-inputtext:focus{border-color:#fff}body .ui-datatable .ui-datatable-data tr td.ui-state-error{background-color:#e62a10;border-color:#e62a10;color:#fff}body .ui-datatable .ui-datatable-data tr td input.ui-cell-editor{padding:2px 2px 1px;font-size:1em}body .ui-datatable .ui-datatable-data tr td.ui-selection-column .ui-chkbox-box,body .ui-datatable .ui-datatable-data tr td.ui-selection-column .ui-radiobutton-box{-webkit-box-sizing:content-box;box-sizing:content-box}body .ui-datatable .ui-datatable-data tr.ui-state-highlight{background-color:#1ab394;border-color: #1ab394;color:#fff}body .ui-datatable .ui-datatable-data tr .ui-cell-editor-input input{color:#fff}body .ui-datatable .ui-datatable-data tr.ui-state-error{background-color:#e62a10;border-color:#e62a10;color:#fff}body .ui-datatable .ui-datatable-data tr.ui-state-error .ui-inputtext,body .ui-datatable .ui-datatable-data tr.ui-state-error .ui-inputtext.ui-state-error,body .ui-datatable .ui-datatable-data tr.ui-state-highlight td.ui-selection-column .ui-radiobutton-box{border-color:#fff}body .ui-datatable .ui-datatable-data tr.ui-state-highlight td.ui-selection-column .ui-radiobutton-box .ui-radiobutton-icon{background-color:#fff}body .ui-datatable .ui-datatable-data tr.ui-state-highlight td.ui-selection-column .ui-chkbox-box{border-color:#fff;background-color:#fff}body .ui-datatable .ui-datatable-data tr.ui-state-highlight td.ui-selection-column .ui-chkbox-box .ui-chkbox-icon{color:#757575}body .ui-datatable .ui-datatable-data tr.ui-state-highlight .ui-inputtext{color:#fff;border-color:#fff}body .ui-datatable .ui-datatable-data tr.ui-state-highlight .ui-inputtext:focus{border-color:#fff}body .ui-datatable .ui-datatable-data tr.ui-rowgroup-header td a{height:1.5em}body .ui-datatable .ui-datatable-data.ui-datatable-hoverable-rows>tr.ui-widget-content:not(.ui-state-highlight):hover{cursor:pointer;background-color:#e8e8e8;color:#000}body .ui-datatable.ui-datatable-scrollable .ui-datatable-scrollable-footer,body .ui-datatable.ui-datatable-scrollable .ui-datatable-scrollable-header{border:0 none;background-color:transparent}body .ui-datatable.ui-datatable-scrollable .ui-datatable-scrollable-footer .ui-datatable-data td,body .ui-datatable.ui-datatable-scrollable .ui-datatable-scrollable-header .ui-datatable-data td{color:#424242}body .ui-datatable.ui-datatable-scrollable tfoot tr td,body .ui-datatable.ui-datatable-scrollable thead tr th{color:#424242;font-size:14px}body .ui-datatable .ui-datatable-loading-content{top:30%}body .ui-datatable .ui-datatable-loading-content .fa{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:2em;-webkit-animation-delay:0;-webkit-animation-duration:1s;-webkit-animation-name:spin;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-delay:0;-moz-animation-duration:1s;-moz-animation-name:spin;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;animation-delay:0;animation-duration:1s;animation-name:spin;animation-iteration-count:infinite;animation-timing-function:linear}body .ui-datatable .ui-datatable-loading-content .fa:before{content:\"refresh\"}body .ui-carousel{padding:0}body .ui-carousel .ui-carousel-header{padding:.625em 1em;font-size:1em;overflow:visible}body .ui-carousel .ui-carousel-header .ui-carousel-header-title{overflow:visible}body .ui-carousel .ui-carousel-header .fa{color:#fff}body .ui-carousel .ui-carousel-header .ui-carousel-button,body .ui-carousel .ui-carousel-header .ui-carousel-page-links{margin:-.143em 0 0}body .ui-tree{padding:.625em 1em/2}body .ui-tree .ui-treenode-children{padding-left:1.75em}body .ui-tree .ui-treenode-content .ui-chkbox{margin-right:.5em}body .ui-tree .ui-treenode-content .ui-chkbox .fa{color:#757575}body .ui-tree .ui-treenode-content .ui-tree-toggler{vertical-align:middle;margin:0 0 0 .25em}body .ui-tree .ui-treenode-content .ui-treenode-icon{vertical-align:middle;margin:0 .25em}body .ui-tree .ui-treenode-content .ui-chkbox{margin:0 .25em}body .ui-tree .ui-treenode-content .ui-treenode-label{margin:0;vertical-align:middle}body .ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-tree .ui-treenode-content.ui-treenode-dragover{background:#5b6976}body .ui-tree .ui-treenode-content.ui-treenode-dragover>span{color:#fff}body .ui-tree.ui-tree-horizontal{padding-left:0;padding-right:0}body .ui-tree.ui-tree-horizontal .ui-treenode-content{background-color:#fff;border:1px solid #eaeaea}body .ui-tree.ui-tree-horizontal .ui-treenode-content .ui-tree-toggler{vertical-align:top}body .ui-tree.ui-tree-horizontal .ui-treenode-content .ui-treenode-icon{vertical-align:top;margin-right:.25em}body .ui-tree.ui-tree-horizontal .ui-treenode-content.ui-treenode-selectable:hover{background-color:#e8e8e8;color:#000}body .ui-tree.ui-tree-horizontal .ui-treenode-content.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-tree-draghelper{border:1px solid #2f4050}body .fc .fc-button-group .ui-icon-circle-triangle-e{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";text-indent:0;position:relative;top:2px}body .fc .fc-button-group .ui-icon-circle-triangle-e:before{content:\"play_circle_outline\"}body .fc .fc-button-group .ui-icon-circle-triangle-w{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-webkit-transform:rotate(180deg);transform:rotate(180deg);text-indent:0;position:relative;top:2px}body .fc .fc-button-group .ui-icon-circle-triangle-w:before{content:\"play_circle_outline\"}body .fc .fc-button-group .ui-state-active{background-color:#1ab394}body .fc .fc-event{background-color:#5b6976;color:#fff}body .fc table{-webkit-box-sizing:border-box;box-sizing:border-box}body .fc table th{padding:.625em 1em}body .ui-treetable .ui-treetable-header{padding:.625em 1em;font-size:1em}body .ui-treetable thead tr{border-bottom:1px solid #eaeaea}body .ui-treetable thead tr th{background-color:#fff;padding:.625em .875em;border:0 none}body .ui-treetable thead tr th .fa{color:#757575}body .ui-treetable thead tr th:first-child{border-left:1px solid #eaeaea}body .ui-treetable thead tr th:last-child{border-right:1px solid #eaeaea}body .ui-treetable thead tr th .ui-sortable-column-icon{vertical-align:middle;margin:-.25em 0 0}body .ui-treetable thead tr th.ui-state-active{background-color:#1ab394;color:#fff}body .ui-treetable thead tr th.ui-state-active .fa{color:#fff}body .ui-treetable thead tr th .ui-column-resizer{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1em;color:#757575}body .ui-treetable thead tr th .ui-column-resizer:before{content:\"code\"}body .ui-treetable tfoot td{border:0 none;padding:.625em .875em}body .ui-treetable tbody .ui-treetable-row{background-color:#fff}body .ui-treetable tbody .ui-treetable-row td{border:0 none;padding:.625em .875em}body .ui-treetable tbody .ui-treetable-row td .ui-treetable-toggler{display:inline-block;vertical-align:middle;margin:0 .167em;float:none}body .ui-treetable tbody .ui-treetable-row td .ui-chkbox{margin-right:.5em}body .ui-treetable tbody .ui-treetable-row td.ui-treetable-child-table-container{padding:0}body .ui-treetable tbody .ui-treetable-row.ui-treetable-row-selectable:not(.ui-state-highlight):hover{background-color:#e8e8e8;color:#000}body .ui-treetable tbody .ui-treetable-row.ui-state-highlight{background-color:#1ab394;color:#fff}body .ui-treetable tbody .ui-treetable-row.ui-state-highlight .ui-chkbox .ui-chkbox-box{border-color:#fff}body .ui-treetable.ui-treetable-scrollable .ui-treetable-scrollable-footer,body .ui-treetable.ui-treetable-scrollable .ui-treetable-scrollable-header{background-color:transparent;border:0 none}body .ui-treetable.ui-treetable-scrollable thead th{background-color:#fff;color:#424242}@media (max-width:40em){body .ui-orderlist.ui-orderlist-responsive .ui-orderlist-controls{width:100%}}@media (max-width:640px){body .ui-picklist.ui-picklist-responsive .ui-picklist-list-wrapper{margin-bottom:.5em}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons{padding:.5em 0}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .ui-button.ui-button-icon-only{display:inline-block;margin-right:.25em;margin-bottom:0}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-right:before{content:\"play_arrow\"}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-double-right{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-double-right:before{content:\"skip_previous\"}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-left{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-left:before{content:\"play_arrow\"}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-double-left{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-double-left:before{content:\"skip_next\"}body .ui-orderlist.ui-grid-responsive .ui-orderlist-controls{text-align:center;width:auto}body .ui-orderlist.ui-grid-responsive .ui-orderlist-controls .ui-button{margin-right:.25em}}body .ui-breadcrumb{padding:.625em 1em}body .ui-breadcrumb ul li a{color:#fff;font-size:1em}body .ui-steps{position:relative}body .ui-steps .ui-steps-item{background-color:transparent}body .ui-steps .ui-steps-item.ui-state-disabled{opacity:1;filter:alpha(opacity=100)}body .ui-steps .ui-steps-item .ui-menuitem-link{display:inline-block;text-align:left;background-color:#fff;overflow:hidden}body .ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-number{display:inline-block;background-color:#757575;border-radius:50%;font-size:1em;color:#fff;vertical-align:middle;text-align:center;width:2em;height:2em;padding:0;line-height:2em}body .ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-title{display:inline;margin-left:.625em;color:#757575}body .ui-steps .ui-steps-item.ui-state-highlight .ui-steps-number{background-color:#1ab394;color:#fff}body .ui-steps .ui-steps-item.ui-state-highlight .ui-steps-title{font-weight:700;color:#424242}body .ui-steps .ui-steps-item:last-child .ui-menuitem-link{display:block}body .ui-steps:before{content:\" \";border:1px solid #eaeaea;width:90%;top:45%;left:0;display:block;position:absolute}body .ui-menu{padding:.5em 0}body .ui-menu.ui-shadow,body .ui-menu .ui-shadow{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}body .ui-menu .ui-menu-list{padding:0;margin:0}body .ui-menu .ui-menu-list li.ui-widget-header{margin:0 0 1px;border-radius:0;border:0 none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:.625em 1em}body .ui-menu .ui-menu-list li.ui-widget-header h3{display:block;float:none;font-size:14px;padding:0;font-weight:400}body .ui-menu .ui-menu-list li.ui-menuitem{margin:0;border-radius:0}body .ui-menu .ui-menu-list li.ui-menuitem .ui-menuitem-link{border:0 none;padding:.625em 1em;width:100%;min-height:2.75em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#424242;line-height:1.5em;border-radius:0;position:relative}body .ui-menu .ui-menu-list li.ui-menuitem .ui-menuitem-link:hover{background-color:#e8e8e8;color:#000}body .ui-menu .ui-menu-list li.ui-menuitem .ui-menuitem-link .ui-menuitem-icon{margin-right:.417em;display:inline-block;vertical-align:middle;float:none;color:#757575}body .ui-menu .ui-menu-list li.ui-menuitem .ui-menuitem-link .ui-menuitem-text{display:inline-block;vertical-align:middle;float:none}body .ui-menu .ui-menu-list li.ui-menuitem.ui-menuitem-active>.ui-menuitem-link{background-color:#e8e8e8;color:#000}body .ui-menu .ui-menu-list .ui-separator{height:1px;background-color:#eaeaea;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}body .ui-menu.ui-menu-toggleable .ui-menu-list li.ui-widget-header{padding-left:2.25em}body .ui-menu.ui-menu-toggleable .ui-menu-list li.ui-widget-header .fa{color:#fff}body .ui-menu.ui-menu-toggleable .ui-menu-list li.ui-widget-header .fa.fa-triangle-1-e,body .ui-menu.ui-menu-toggleable .ui-menu-list li.ui-widget-header .fa.fa-triangle-1-s{margin-top:-.75em}body .ui-menu.ui-tieredmenu .ui-menu-child{padding:.5em 0}body .ui-menu.ui-menubar{padding:0}body .ui-menu.ui-menubar .ui-menubar-root-list>.ui-menuitem>.ui-menuitem-link .ui-menuitem-icon{margin-right:0}body .ui-menu.ui-menubar .ui-menubar-root-list>.ui-menuitem>.ui-menuitem-link>span{display:inline-block;vertical-align:middle}body .ui-menu.ui-menubar .ui-menu-child{padding:.5em 0}body .ui-menu.ui-menubar .ui-menubar-options{padding:.625em 1em}body .ui-menu.ui-slidemenu .ui-menu-parent .ui-menu-child{padding:0;box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none}body .ui-menu.ui-slidemenu .ui-slidemenu-backward{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0}body .ui-tabmenu{padding:0}body .ui-tabmenu .ui-tabmenu-nav{padding:0;background-color:#fff;border:0 none;border-radius:0}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem{top:auto;margin:0 .25em 0 0;padding:0;border-style:solid;border-width:0 0 2px;-webkit-transition:border-color .3s;transition:border-color .3s}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem>a{padding:.625em 1em}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem>a:focus{outline:0 none}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem>a .ui-menuitem-icon,body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem>a .ui-menuitem-text{float:none;display:inline-block;vertical-align:middle}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem>a .ui-menuitem-icon{font-weight:1em;margin-right:.5em}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem.ui-state-default a,body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem.ui-state-default a .fa{color:#757575}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem:not(.ui-state-active):hover{background-color:#fff}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem.ui-state-active{background-color:#fff;border-color:#1ab394;border-style:solid}body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem.ui-state-active a,body .ui-tabmenu .ui-tabmenu-nav>.ui-tabmenuitem.ui-state-active a .fa{color:#2f4050}body .ui-panelmenu .ui-panelmenu-header{background-color:#2f4050;margin-bottom:1px}body .ui-panelmenu .ui-panelmenu-header a{padding:.625em 1em;color:#fff;font-size:14px}body .ui-panelmenu .ui-panelmenu-header .fa{color:#fff}body .ui-panelmenu .ui-panelmenu-header.ui-state-active{background-color:#1ab394;border-bottom-left-radius:0;border-bottom-right-radius:0}body .ui-panelmenu .ui-panelmenu-header.ui-state-active .fa,body .ui-panelmenu .ui-panelmenu-header.ui-state-active a{color:#fff}body .ui-panelmenu .ui-panelmenu-panel{margin-bottom:1px}body .ui-panelmenu .ui-panelmenu-content{padding:0}body .ui-panelmenu .ui-panelmenu-content .ui-menuitem{margin:0}body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link{border:0 none;padding:.625em 1em;width:100%;min-height:2.75em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#424242;line-height:1.5em;border-radius:0;position:relative}body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link:hover{background-color:#e8e8e8;color:#000}body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link .ui-menuitem-text{display:inline-block;vertical-align:middle;float:none}body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link .fa{position:static;display:inline-block;vertical-align:middle}body .ui-panelmenu .ui-menu-parent .ui-menu-list{margin-left:28px}@media (max-width:640px){body .ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-title{display:none}}body .ui-messages{padding:.625em 1em}body .ui-messages ul{display:inline-block;margin-left:0}body .ui-messages.ui-messages-info{background-color:#2196f3;border-color:#2196f3;color:#fff}body .ui-messages.ui-messages-warn{background-color:#ffc107;border-color:#ffc107;color:#fff}body .ui-messages.ui-messages-error{background-color:#e62a10;border-color:#e62a10;color:#fff}body .ui-messages.ui-messages-fatal{background-color:#212121;border-color:#212121;color:#fff}body .ui-messages.ui-messages-success{background-color:#8bc34a;border-color:#8bc34a;color:#fff}body .ui-messages .ui-messages-close{text-decoration:none;color:#fff;right:.25em}body .ui-messages .ui-messages-icon{background:none;color:#fff;margin-top:-2px}body .ui-messages .ui-messages-icon.fa-info-circle{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-messages .ui-messages-icon.fa-info-circle:before{content:\"info\"}body .ui-messages .ui-messages-icon.fa-warning{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-messages .ui-messages-icon.fa-warning:before{content:\"warning\"}body .ui-messages .ui-messages-icon.fa-close{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-messages .ui-messages-icon.fa-close:before{content:\"error_outline\"}body .ui-messages .ui-messages-icon.fa-check{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-messages .ui-messages-icon.fa-check:before{content:\"check_circle\"}body .ui-growl{top:90px}body .ui-growl>.ui-growl-item-container{opacity:1}body .ui-growl>.ui-growl-item-container.ui-growl-message-info{background-color:#2196f3}body .ui-growl>.ui-growl-item-container.ui-growl-message-warn{background-color:#ffc107}body .ui-growl>.ui-growl-item-container.ui-growl-message-error{background-color:#e62a10}body .ui-growl>.ui-growl-item-container.ui-growl-message-fatal{background-color:#212121}body .ui-growl>.ui-growl-item-container.ui-growl-message-success{background-color:#8bc34a}body .ui-growl>.ui-growl-item-container.ui-shadow{-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}body .ui-growl .ui-growl-item .ui-growl-image{background:none;color:#fff;font-size:36px}body .ui-growl .ui-growl-item .ui-growl-image.fa-info-circle{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-growl .ui-growl-item .ui-growl-image.fa-info-circle:before{content:\"info\"}body .ui-growl .ui-growl-item .ui-growl-image.fa-exclamation-circle{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-growl .ui-growl-item .ui-growl-image.fa-exclamation-circle:before{content:\"warning\"}body .ui-growl .ui-growl-item .ui-growl-image.fa-close{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-growl .ui-growl-item .ui-growl-image.fa-close:before{content:\"error_outline\"}body .ui-growl .ui-growl-item .ui-growl-image.fa-check{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:1.75em}body .ui-growl .ui-growl-item .ui-growl-image.fa-check:before{content:\"check_circle\"}body .ui-growl .ui-growl-item .ui-growl-message{color:#fff}body .ui-growl .ui-growl-item .ui-growl-icon-close{font-family:Material Icons;font-weight:400;font-style:normal;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:24px;color:#fff}body .ui-growl .ui-growl-item .ui-growl-icon-close:before{content:\"close\"}body .ui-dialog.ui-shadow{-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}body .ui-dialog .ui-dialog-titlebar{background-color:#fff;color:#424242;padding:.625em 1em}body .ui-dialog .ui-dialog-titlebar .ui-dialog-title{font-size:1.25em;letter-spacing:.005em;margin-top:.25em;line-height:2em}body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon{border:0 none;padding:0;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;height:1.5em;width:1.5em;text-align:center;margin-top:.5em}body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon:focus,body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon:hover{background-color:#e8e8e8;color:#000}body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon .fa{color:#757575;display:inline-block}body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon .fa-extlink:before{content:\"fullscreen\"}body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon .fa-newwin:before{content:\"fullscreen_exit\"}body .ui-dialog .ui-dialog-content{padding:.625em 1em}body .ui-dialog .ui-dialog-footer{text-align:right;border:0 none;border-top:1px solid #d8d8d8}body .ui-dialog .ui-dialog-footer .ui-button{background-color:#fff;color:#424242;box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;width:auto}body .ui-dialog .ui-dialog-footer .ui-button .fa{color:#757575}body .ui-dialog .ui-dialog-footer .ui-button:hover{background-color:#e8e8e8;color:#000}body .ui-dialog .ui-confirm-dialog-severity{margin:0 .75em}body .ui-lightbox.ui-shadow{-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}body .ui-lightbox .ui-lightbox-caption{padding:.625em 1em}body .ui-lightbox .ui-lightbox-caption .ui-lightbox-caption-text{margin:0}body .ui-lightbox .ui-lightbox-caption .ui-lightbox-close{border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;padding:0;margin:0;width:1.5em;height:1.5em}body .ui-lightbox .ui-lightbox-caption .ui-lightbox-close:hover{background-color:#5b6976;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s}body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-left,body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-right{top:40%}body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-left .fa,body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-right .fa{-webkit-transition:color .3s;transition:color .3s;font-size:3em;color:#5b6976}body .ui-overlaypanel.ui-shadow{-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}body .ui-overlaypanel .ui-overlaypanel-close{background-color:#1ab394;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;right:-16px;top:-16px;width:2em;height:2em;line-height:2em;text-align:center;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}body .ui-overlaypanel .ui-overlaypanel-close span{color:#fff;line-height:inherit}body .ui-overlaypanel .ui-overlaypanel-close:hover{background-color:#197865}body .ui-tooltip{opacity:.9;filter:alpha(opacity=90)}body .ui-tooltip .ui-tooltip-text{background-color:#323232}body .ui-tooltip.ui-tooltip-top .ui-tooltip-arrow{bottom:1px;border-top-color:#323232}body .ui-tooltip.ui-tooltip-bottom .ui-tooltip-arrow{top:1px;border-bottom-color:#323232}body .ui-tooltip.ui-tooltip-left .ui-tooltip-arrow{border-left-color:#323232}body .ui-tooltip.ui-tooltip-right .ui-tooltip-arrow{left:1px;border-right-color:#323232}body .ui-draggable-dragging.ui-state-default{padding:.625em 1em!important;background-color:#2f4050}body .jqplot-target{font-family:Roboto,Helvetica Neue,sans-serif}body .ui-progressbar{height:.5em;background-color:#5b6976;overflow:hidden;border:0 none}body .ui-progressbar .ui-progressbar-value{height:.5em}body .ui-progressbar .ui-progressbar-label{color:#fff;display:none!important}body .ui-galleria .ui-galleria-nav-prev{left:0;margin-bottom:-.4em}body .ui-galleria .ui-galleria-nav-next{right:0;margin-bottom:-.4em}body .ui-inplace .ui-inplace-display{-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:3px}body .ui-inplace .ui-inplace-display:hover{background-color:#e8e8e8}body .ui-terminal .ui-terminal-input{font-size:14px}", undefined);

{
  enableProdMode();
}
platformBrowserDynamic$1().bootstrapModule(AppModule);
//# sourceMappingURL=tune-up.core.js.map
