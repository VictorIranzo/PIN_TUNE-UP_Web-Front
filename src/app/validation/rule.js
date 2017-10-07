import {Directive, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validators} from '@angular/forms';
import {configService} from '../config';

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

  ngOnInit() {
    // if (!this.path) {
    //   // Prevent breack due to not yet initialized path.
    //   return;
    // }
    this.validationFunctions = this._getValidationFunctions();
  }
  validate(control) {
    // if (!this.path) {
    //   // Prevent breack due to not yet initialized path.
    //   return;
    // }
    let errors = Validators.compose(this.validationFunctions)(control);
    return errors;
  }
  _getValidationFunctions() {
    return this._getValidations().map(validationObj => {
      let {func, args, msg} = this._getValidationParams(validationObj);
      return this._createValidatorFunction(args, func, msg);
    });
  }
  _createValidatorFunction(args, func, msg) {
    return control => {
      let scope = {};
      let thisArgs = [control.value || ''].concat(args);
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
      args: allArgs.filter(c => c !== MODEL_KEYWORD),
      msg: validation.message || configService.defaultValidationError
    };
  }
  _getValidatonName(validationObj) {
    return Object.keys(validationObj)[0];
  }
}
