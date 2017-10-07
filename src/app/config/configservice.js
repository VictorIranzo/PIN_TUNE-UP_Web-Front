import {defaultConfig} from './defaultconfig';

class ConfigService{
    constructor(){
        Object.assign(this,defaultConfig);
    }
    init(configObject){
        Object.assign(this,configObject);
    }
    get validators(){
        return this._validators;
    }
    set validators(value){
        this._validators = value;
    }
    addValidators(newValidators){
        this._validators = Object.assign(
            this._validators,
            newValidators
        );
    }
    get validations(){
        return this._validations;
    }
    set validations(value){
        this._validations = value;
    }
    addValidations(newValidations){
        this._validations = Object.assign(
            this._validations,
            newValidations
        );
    }
    get routes(){
        return this._routes;
    }
    set routes(value){
        this._routes = value;
    }
    getRouteObjects(){
        return Object.values(this._routes);
    }
    addRoutesWithAuth(childRoutes){
        this._routes.mainRoute && 
        this._routes.mainRoute.children.concat(childRoutes);
    }
    get menuItems(){
        return this._menuItems;
    }
    set menuItems(value){
        this._menuItems = value;
    }
    addMenuItems(newMenuItems){
        this._menuItems.concat(newMenuItems);
    }
}
export const configService = new ConfigService();