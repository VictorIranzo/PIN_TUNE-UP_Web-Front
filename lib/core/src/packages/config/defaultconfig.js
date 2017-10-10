import validator from 'validator';

export const defaultConfig = {
  validators: validator,
  validations: {},
  defaultValidationError: 'Campo inválido',
  routes: {},
  menuItems: [],
  APIBaseUrl: 'http://cliente.tuneupprocess.com/webapi/api'
};
