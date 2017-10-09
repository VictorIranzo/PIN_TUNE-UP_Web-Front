import {Directive, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validators} from '@angular/forms';
import {configService} from '../../config';

const NG_VALIDATORS_PROVIDER = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => Rule),
  multi: true
};

@Directive({
  selector: '[rule][ngModel]',
  providers: [NG_VALIDATORS_PROVIDER]
})
export class Rule {
  @Input('rule') path = null;
  constructor() {
    this._subscribersCache = [];
  }
  ngOnInit() {
    this.validationFunctions = this._getValidationFunctions();
  }
  validate(control) {
    let errors = Validators.compose(this.validationFunctions)(control);
    return errors;
  }
  _getValidationFunctions() {
    return this._getValidations().map(validationObj => {
      let {func, args, modelArgs, msg} = this._getValidationParams(
        validationObj
      );
      return this._createValidatorFunction(args, func, modelArgs, msg);
    });
  }
  _createValidatorFunction(args, func, modelArgs, msg) {
    return control => {
      let scope = {};
      let modelValues = modelArgs[0]
        ? this._handleModelValues(modelArgs, control)
        : [];
      let thisArgs = [control.value || '', ...args, ...modelValues];
      return func.apply(scope, thisArgs) ? null : {[func.name]: msg};
    };
  }
  _getValidations() {
    let keys = this.path.split('.');
    let entity = keys[0];
    let field = keys[1];
    return configService.validations[entity][field];
  }
  _getValidationParams(validationObj) {
    let validationName = this._getValidatonName(validationObj);
    let validation = validationObj[validationName];
    let allArgs = validation.arguments || [];
    let validators = configService.validators;
    return {
      func: validators[validationName],
      args: allArgs.filter(c => !Array.isArray(c)),
      modelArgs: allArgs.filter(c => Array.isArray(c)).map(c => c[0]),
      msg: validation.message || configService.defaultValidationError
    };
  }
  _getCheckControlFunction() {
    return function(control) {
      control.updateValueAndValidity();
    };
  }
  _subscribeOnValueChanges(modelArg, control) {
    if (!this._subscribersCache.includes(modelArg)) {
      const checkControl = this._getCheckControlFunction();
      const target = control.parent.controls[modelArg].valueChanges;
      this._subscribersCache.push(modelArg);
      target.subscribe(() => checkControl(control));
    }
  }
  _getValidatonName(validationObj) {
    return Object.keys(validationObj)[0];
  }
  _handleModelValues(modelArgs, control) {
    return modelArgs.map(modelArg => {
      const modelArgValue = control.parent.controls[modelArg].value || '';
      this._subscribeOnValueChanges(modelArg, control);
      return modelArgValue;
    });
  }
}
