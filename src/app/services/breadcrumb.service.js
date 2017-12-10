import {Injectable} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET} from '@angular/router';

@Injectable()
export class BreadcrumbService {
  _items = [];
  params = {};
  constructor(activatedRoute: ActivatedRoute, router: Router) {
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._subscribeToRouteChanges();
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._items = value;
  }
  _subscribeToRouteChanges() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          let root = this._activatedRoute.root;
          this._items = this._getItemsFromRoute(root);
      }
    });
  }
  _getItemsFromRoute(route, url = '', breadcrumbs = []) {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    let children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        return;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this._getItemsFromRoute(child, url);
      }
      let routeURL = child.snapshot.url.map((segment) => segment.path).join('/');
      url += `/${routeURL}`;
      if(url.endsWith('/')){
        url = url.substring(0, url.length-1);
      }
      let label = child.snapshot.data[ROUTE_DATA_BREADCRUMB];
      label = label.startsWith('@') ? child.snapshot.params[label.slice(1)] : label;
      let breadcrumb = {
        label,
        routerLink: url,
      };
      if (!breadcrumbs.filter(bc => JSON.stringify(breadcrumb) === JSON.stringify(bc))[0]) {
        breadcrumbs.push(breadcrumb);
      }
      return this._getItemsFromRoute(child, url, breadcrumbs);
    }
    return breadcrumbs;
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
