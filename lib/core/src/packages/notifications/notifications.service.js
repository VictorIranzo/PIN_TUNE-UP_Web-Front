import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

const notificationTypes = {
  success: 'success',
  info: 'info',
  warn: 'warn',
  error: 'error'
};

@Injectable()
export class NotificationsService {
  constructor() {
    this.notificationChange = new Subject();
  }
  _notify(severity, summary, detail) {
    this.notificationChange.next({ severity, summary, detail });
  }
  success(summary, detail) {
    this._notify(notificationTypes.success, summary, detail);
  }
  info(summary, detail) {
    this._notify(notificationTypes.info, summary, detail);
  }
  warn(summary, detail) {
    this._notify(notificationTypes.warn, summary, detail);
  }
  error(summary, detail) {
    this._notify(notificationTypes.error, summary, detail);
  }
}
