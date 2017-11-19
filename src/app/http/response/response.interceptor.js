import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';

@Injectable()
export class ResponseInterceptor {
  intercept(req, next) {
    return next.handle(req).map((event) => {
      if (event instanceof HttpResponse) {
        if ( !event.body || !event.body.Resultado) {
          return event;
        }
        this._checkInvalid(event);
        return (event = this._serializeBody(event));
      }
    });
  }
  _serializeBody(response) {
    const result = response && response.body &&
      response.body.Resultado;
    return response.clone({body: result});
  }
  _checkInvalid(response) {
    const success = response && response.body && response.body.Exito;
    if (!success) {
      throw new Error(response.body.Mensaje);
    }
  }
}
