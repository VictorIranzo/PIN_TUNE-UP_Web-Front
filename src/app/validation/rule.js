import {Directive, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validators} from '@angular/forms';
import {configService} from '../config';

const NG_VALIDATORS_PROVIDER = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => Rule),
  multi: true
};
// TODO: commented code is to trigger validation of field A that depends on field
// B when field B is updated, find a mechanism so subscribers are not duplicated
// when we need to use this (not atm)

@Directive({
  selector: '[rule][ngModel]',
  providers: [NG_VALIDATORS_PROVIDER]
})
export class Rule {
  @Input('rule') path = null;
  // @Input('name') name = null;

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
    // const checkControl = function (control) {
    //   control.updateValueAndValidity();
    // };
    return control => {
      let scope = {};
      let modelValues = [];
      modelArgs.map(modelArg => {
        const formControl = control.parent.controls[modelArg];
        modelValues.push(formControl.value || '');
        // formControl.valueChanges.subscribe(checkControl(control));
      });
      let thisArgs = [control.value || ''];
      thisArgs = thisArgs.concat(args);
      thisArgs = thisArgs.concat(modelValues);
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
  _getValidatonName(validationObj) {
    return Object.keys(validationObj)[0];
  }
}
