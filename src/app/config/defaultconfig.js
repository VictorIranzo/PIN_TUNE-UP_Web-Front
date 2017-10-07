import {defaultRoutes} from '../routing';
import validator from 'validator';

export const defaultConfig = {
  validators: validator,
  validations: {},
  defaultValidationError: 'Invalid field',
  routes: defaultRoutes,
  menuItems: []
};
