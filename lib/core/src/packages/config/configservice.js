import {defaultConfig} from './defaultconfig';

class ConfigService {
  constructor() {
    Object.assign(this, defaultConfig);
  }
  get validators() {
    return this._validators;
  }
  set validators(value) {
    this._validators = value;
  }
  addValidators(newValidators) {
    Object.assign(this._validators, newValidators);
  }
  get validations() {
    return this._validations;
  }
  set validations(value) {
    this._validations = value;
  }
  addValidations(newValidations) {
    Object.assign(this._validations, newValidations);
  }
  get defaultValidationError() {
    return this._defaultValidationError;
  }
  set defaultValidationError(value) {
    this._defaultValidationError = value;
  }
  get APIBaseUrl() {
    return this._APIBaseUrl;
  }
  set APIBaseUrl(value) {
    this._APIBaseUrl = value;
  }
}
export const configService = new ConfigService();
