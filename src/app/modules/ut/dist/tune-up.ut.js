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

import { Component, NgModule, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuneUpCoreModule } from '@tune-up/core';

var html = "<form class=\"vertical\" #frm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n  <input class=\"tn-example-form--input one\" type=\"text\" [(ngModel)]=\"foo.email\" rule=\"foo.email\" name=\"email\" #emailCtrl=\"ngModel\" pInputText>\r\n  <tn-validation-error [control]=\"emailCtrl\"></tn-validation-error>\r\n  <input class=\"tn-example-form--input one\" type=\"password\" [(ngModel)]=\"foo.password\" rule=\"foo.password\" name=\"password\" pInputText>\r\n  <div class=\"horizontal\">\r\n    <div class=\"one\"></div>\r\n    <button class=\"none\" pButton type=\"submit\" label=\"Submit\"></button>\r\n  </div>\r\n</form>\r\n";

__$styleInject(".tn-example-form--input{margin-bottom:8px;margin-top:8px}", undefined);

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

var UtComponent = (_dec$2 = Component({
  selector: 'tn-ut',
  template: html
}), _dec2 = ViewChild('frm'), _dec$2(_class$2 = (_class2 = function UtComponent() {
  var _this = this;

  classCallCheck(this, UtComponent);

  _initDefineProp(this, 'form', _descriptor, this);

  this.onSubmit = function () {
    console.log(_this);
  };

  this.foo = {
    email: undefined,
    password: undefined
  };
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'form', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.form;
  }
})), _class2)) || _class$2);

var _dec$1;
var _class$1;

var UtRoutingModule = (_dec$1 = NgModule({
  imports: [RouterModule.forChild([{ path: '', component: UtComponent }])],
  exports: [RouterModule]
}), _dec$1(_class$1 = function UtRoutingModule() {
  classCallCheck(this, UtRoutingModule);
}) || _class$1);

var _dec;
var _class;

var UtModule = (_dec = NgModule({
  imports: [TuneUpCoreModule, UtRoutingModule],
  declarations: [UtComponent]
}), _dec(_class = function UtModule() {
  classCallCheck(this, UtModule);
}) || _class);

export { UtModule };
//# sourceMappingURL=tune-up.ut.js.map
