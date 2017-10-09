(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tune-up/core'), require('@angular/core'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@tune-up/core', '@angular/core', '@angular/router'], factory) :
	(factory((global.tuneUp = global.tuneUp || {}, global.tuneUp.example = {}),global.tuneUp.app,global.tuneUp.ngVendor.ngCore,global.tuneUp.ngVendor.ngRouter));
}(this, (function (exports,core,core$1,router) { 'use strict';

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

/**
 * Those are the validations for the entities of the module.
 * If there are many maybe write them in different files and merge them.
 */

// main object
var validations = {
  // entity
  foo: {
    // field, array of validations
    email: [
    // every validation is an object
    {
      // rule, it is the name of a function (custom or form validator.js)
      isEmail: {
        // message if incorrect
        message: 'Must be a valid email'
      }
    }, {
      contains: {
        message: 'Must contain .es',
        // hardcoded arguments
        arguments: ['.es']
      }
    }, {
      // custom validation function, we dont need arguments
      startsWithHello: {
        message: 'Email must start with "hello"'
      }
      // maybe better:
      /**
       {
         startsWith: {
           message: 'Email must start with "hello"',
           arguments: ['hello']
         }
       }
       */
    }],
    // another field
    password: [{
      passwordDifferentFromEmail: {
        message: 'Password must be different from email',
        arguments: [['email']] // argument inside an array means: take it from the model
        // it takes the one whose name in the form matches this.
      }
    }]
  }
};

/**
 * Custom validatos or validation functions, they are
 * always objects that contain one or more function
 * that return true or false.
 */
var validators = {
  startsWithHello: function startsWithHello(value) {
    return value.indexOf('hello') === 0;
  },
  passwordDifferentFromEmail: function passwordDifferentFromEmail(value, email) {
    return value !== email;
  }
};

// add what you need to the configService
core.configService.addValidations(validations);
core.configService.addValidators(validators);

// here you only need to import that file

var html = "<!--\n  \n  This is how forms are done. If you want to instantiate it in your component use #variableName\"ngForm\" and\n  then ViewChild('variableName') in your component. (ngSubmit) will trigger when a button of type=\"submit\" is pressed.\n  \n  For the inputs you define [(ngModel)] which binds a value of your component to the value of the input. you must provide a name aswell.\n  rule directive will validate this field using the information for foo.email defined in the configService, if you want to extend it go to the\n  foldr config. To print validations you first instantiate the ngModel and then pass it to the component tn-error which prints all errors.\n  You may want to group input and tn-error so they have the same size.\n  \n  DO NOT PUT ERROS ON THE SIDES, ALWAYS ON THE BOTTOM so use class vertical.\n\n\n-->\n\n<form class=\"vertical\" #frm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <input class=\"tn-example-form--input one\" type=\"text\" [(ngModel)]=\"foo.email\" rule=\"foo.email\" name=\"email\" #emailCtrl=\"ngModel\" pInputText>\n  <tn-error [control]=\"emailCtrl\"></tn-error>\n  <input class=\"tn-example-form--input one\" type=\"password\" [(ngModel)]=\"foo.password\" rule=\"foo.password\" name=\"password\" pInputText>\n  <div class=\"horizontal\">\n    <div class=\"one\"></div>\n    <button class=\"none\" pButton type=\"submit\" label=\"Submit\"></button>\n  </div>\n</form>\n";

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

/**
 * Always import html and css this way.
 * Always use the prefix tn in the selector.
 * Always initialize the models in the constructor
 *  (ngModel can't do it with nested model)
 * and always initialize them to undefined (not null)
 * Everytime you need to use a method from the html declare
 * it as an arrow function.
 */
var ExampleComponent = (_dec$2 = core$1.Component({
  selector: 'tn-example',
  template: html
}), _dec2 = core$1.ViewChild('frm'), _dec$2(_class$2 = (_class2 = function ExampleComponent() {
  var _this = this;

  classCallCheck(this, ExampleComponent);

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

/**
 * Every module has its own routes, at least the default one,
 * path: '', which loads the main component of the module
 */
var ExampleRoutingModule = (_dec$1 = core$1.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: ExampleComponent }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function ExampleRoutingModule() {
  classCallCheck(this, ExampleRoutingModule);
}) || _class$1);

var _dec;
var _class;

/**
 * This is the module, TuneUpCoreModule has all the imports
 * you may need, if not open an issue but dont include it here
 * so it is available to other modules.
 * Import TuneUpCore and the RoutingModule and declare 
 * the providers and declarations you may need.
 * 
 * If using a PrimeNg module gives you and error, register
 * it in lib/core/src/packages/primeng so it is shared among
 * all the app.
 */
var ExampleModule = (_dec = core$1.NgModule({
  imports: [core.TuneUpCoreModule, ExampleRoutingModule],
  declarations: [ExampleComponent]
}), _dec(_class = function ExampleModule() {
  classCallCheck(this, ExampleModule);
}) || _class);

/**
 * The config has to be initialized before the module is loaded
 * or some angular components won't detect the new configuration.
 * If there is no config dont do it.
 * Always export * from './the.module';
 */

exports.ExampleModule = ExampleModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tune-up.example.umd.js.map
