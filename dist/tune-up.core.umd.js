(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/platform-browser-dynamic'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('primeng')) :
	typeof define === 'function' && define.amd ? define(['@angular/platform-browser-dynamic', '@angular/core', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/forms', 'primeng'], factory) :
	(factory(global.platformBrowserDynamic,global.core,global.platformBrowser,global.animations,global.forms,global.primeng));
}(this, (function (platformBrowserDynamic,core,platformBrowser,animations,forms,primeng) { 'use strict';

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

var html = "<input type=\"text\" pInputText>\n<button type=\"button\" pButton label=\"Click\"></button>";

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

var _dec$1;
var _class$1;

// import './css/index.css';

var AppComponent = (_dec$1 = core.Component({
    selector: 'tn-app',
    template: html
}), _dec$1(_class$1 = function AppComponent() {
    classCallCheck(this, AppComponent);
}) || _class$1);

var _dec;
var _class;

var AppModule = (_dec = core.NgModule({
    imports: [platformBrowser.BrowserModule, animations.BrowserAnimationsModule, forms.FormsModule, primeng.InputTextModule, primeng.ButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
}), _dec(_class = function AppModule() {
    classCallCheck(this, AppModule);
}) || _class);

platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);

})));
//# sourceMappingURL=tune-up.core.umd.js.map
