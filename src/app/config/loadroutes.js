import {configService} from './configservice';
import {homeRoute} from '../modules/configs';

configService.addRoutesWithAuth([homeRoute]);
