import validator from 'validator';
import defaultRoutes from '../routing';

export const defaultConfig = {
    validators: validator,
    validations: {},
    routes: defaultRoutes,
    menuItems: [],
};