import {defaultConfig} from './defaultconfig';

class ConfigService {
  constructor() {
    Object.assign(this, defaultConfig);
  }
  init(configObject) {
    const {
      validators,
      validations,
      defaultValidationError,
      routes,
      menuItems,
      APIBaseUrl,
      } = configObject;

    validators && this.addValidators(validators);
    validations && this.addValidations(validations);
    routes && this.addRoutes(routes);
    menuItems && this.addMenuItems(menuItems);

    this._defaultValidationError = defaultValidationError
      ? defaultValidationError
      : this._defaultValidationError;
    this._APIBaseUrl = APIBaseUrl
      ? APIBaseUrl
      : this._APIBaseUrl;
    
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
  get routes() {
    return this._routes;
  }
  set routes(value) {
    this._routes = value;
  }
  addRoutes(newRoutes){
    Object.assign(this._routes,newRoutes)
  }
  getRouteObjects() {
    return Object.values(this._routes);
  }
  addRoutesWithAuth(childRoutes) {
    const mainRoute = this._routes.mainRoute;
    mainRoute &&
      mainRoute.children &&
      childRoutes.map(route => {
        route.canLoad = route.canLoad || [];
        route.canLoad = [...route.canLoad, ...mainRoute.canLoadChildren || []];
        mainRoute.children.push(route);
      });
  }
  get menuItems() {
    return this._menuItems;
  }
  set menuItems(value) {
    this._menuItems = value;
  }
  addMenuItems(newMenuItems) {
    this._menuItems = this._menuItems.concat(newMenuItems);
  }
  get defaultValidationError(){
    return this._defaultValidationError;
  }
  set defaultValidationError(value){
    this._defaultValidationError = value;
  }
  get APIBaseUrl(){
    return this._APIBaseUrl;
  }
  set APIBaseUrl(value){
    this._APIBaseUrl = value;
  }
}
export const configService = new ConfigService();
