import {configService} from '@tune-up/core';
import {homeRoute} from '../modules/configs';

configService.addRoutesWithAuth([homeRoute]);
