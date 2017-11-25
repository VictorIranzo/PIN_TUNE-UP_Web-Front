import {Injectable} from '@angular/core';

@Injectable()
export class BreadcrumbService {
  _items = [];
  get items() {
    return this._items;
  }
  set items(value) {
    this._items = value;
  }
  addItems(menuItems) {
    menuItems = Array.isArray(menuItems)
      ? menuItems
      : [menuItems];
    this._items = this.items.concat(menuItems);
  }
  removeItems(count) {
    this._items = this._items.slice(0, this._items.length - count);
  }
}
