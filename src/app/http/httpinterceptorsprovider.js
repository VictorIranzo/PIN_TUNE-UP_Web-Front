import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {APIInterceptor} from './apiinterceptor';

export const HttpInterceptorsProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: APIInterceptor,
  multi: true
};
