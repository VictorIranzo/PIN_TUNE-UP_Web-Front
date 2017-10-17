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

import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuneUpCoreModule } from '@tune-up/core';

var html = "<div class=\"horizontal\">\n  <tn-kanban-resume class=\"none\"></tn-kanban-resume>\n  <tn-ut-list class=\"one\"></tn-ut-list>\n</div>\n";

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

var _dec$2;
var _class$2;

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

__$styleInject("", undefined);

var _dec$3;
var _class$3;

var KanbanResumeComponent = (_dec$3 = Component({
  selector: 'tn-kanban-resume',
  template: html$1
}), _dec$3(_class$3 = function KanbanResumeComponent() {
  classCallCheck(this, KanbanResumeComponent);
}) || _class$3);

var html$2 = "UTLIST\n";

__$styleInject("", undefined);

var _dec$4;
var _class$4;

var UtListComponent = (_dec$4 = Component({
  selector: 'tn-ut-list',
  template: html$2
}), _dec$4(_class$4 = function UtListComponent() {
  classCallCheck(this, UtListComponent);
}) || _class$4);

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
