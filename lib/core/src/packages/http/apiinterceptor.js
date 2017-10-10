import {Injectable} from '@angular/core';
import {configService} from '../config';
//import {BASE_URL} from './baseurl';
@Injectable()
export class APIInterceptor {
  intercept(req, next) {
    const apiReq = req.clone({url: `${configService.APIBaseUrl}/${req.url}`});
    return next.handle(apiReq);
  }
}
