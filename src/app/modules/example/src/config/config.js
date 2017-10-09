import {configService} from '@tune-up/core';
import {validations} from './validations';
import {validators} from './validators';

// add what you need to the configService
configService.addValidations(validations);
configService.addValidators(validators);
