import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Injectable()
export class TokenInterceptor {
  constructor(authService: AuthService) {
    this._authService = authService;
  }
  intercept(req, next) {
    if (!this._authService.getToken()) {
      return next.handle(req);
    }
    const tokenReq = req.clone({
      setHeaders: {
        token: this._authService.getToken(),
      },
    });
    return next.handle(tokenReq);
  }
}
