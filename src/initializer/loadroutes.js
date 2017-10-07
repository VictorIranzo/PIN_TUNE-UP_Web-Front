import {configService} from '../app/config';
import {homeRoute} from '../app/modules/home';

configService.addRoutesWithAuth([
    homeRoute,
    
]);