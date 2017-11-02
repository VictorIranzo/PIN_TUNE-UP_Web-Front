import {Injectable} from '@angular/core';

@Injectable()
export class BreadcrumbService {
  _breadCrumbItems = [];

  get items() {
    return this._breadCrumbItems;
  }
  set items(value) {
    this._breadCrumbItems = value;
  }
  addItem(menuItem) {
    this._breadCrumbItems.push(menuItem);
  }
}
