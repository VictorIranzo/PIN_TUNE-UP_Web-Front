import {NgModuleFactoryLoader} from '@angular/core';
import {TnModuleLoader} from './moduleloader';

export const TnModuleLoaderProvider = {
    provide: NgModuleFactoryLoader,
    useClass: TnModuleLoader
};
