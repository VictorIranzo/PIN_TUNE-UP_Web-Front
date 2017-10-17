import {Injectable} from '@angular/core';

@Injectable()
export class BreadcrumbService {
  _breadCrumbItems = [];

  getItems() {
    return this._breadCrumbItems;
  }

  setItems(menuItem) {
    this._breadCrumbItems = items;
  }

  addItem(menuItem) {
    this._breadCrumbItems.push(menuItem);
  }
}
