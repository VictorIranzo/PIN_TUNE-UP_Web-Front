import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ResponseInterceptor} from './response.interceptor';

export const ResponseInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ResponseInterceptor,
  multi: true,
};
