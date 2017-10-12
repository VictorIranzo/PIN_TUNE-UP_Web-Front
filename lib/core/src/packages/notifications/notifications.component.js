import {Component} from '@angular/core';
import {NotificationsService} from './notifications.service';
import html from './notifications.component.html';

@Component({
  selector: 'tn-notifications',
  template: html
})
export class NotificationsComponent {
  msgs = [];
  constructor(notificationsService: NotificationsService) {
    this._notificationsService = notificationsService;
    this._subscription = null;
  }
  ngOnInit() {
    this._subscribeToNotifications();
  }
  _subscribeToNotifications() {
    this._subscription = this._notificationsService.notificationChange.subscribe(
      notification => {
        this.msgs.push(notification);
      }
    );
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
