import validator from 'validator';
import * as customValidators from '../validation/customvalidators';

export const defaultConfig = {
  validators: Object.assign({}, validator, customValidators),
  validations: {},
  defaultValidationError: 'Campo inválido',
  APIBaseUrl: 'http://cliente.tuneupprocess.com/webapi/api',
};
