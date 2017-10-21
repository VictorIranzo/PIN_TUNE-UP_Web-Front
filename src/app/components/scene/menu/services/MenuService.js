import {NgZone, Injectable} from '@angular/core';

const mqlGtsm = window.matchMedia('(min-width: 960px)');

@Injectable()
export class MenuService {
  constructor(ngZone: NgZone) {
    this._sidenav = null;
    this._ngZone = ngZone;
    // this.onShowMenuAppBar = new EventEmitter();
  }

  set sidenav(value) {
    this._sidenav = value;
  }
  close() {
    // this._sidenav && !this._docked && this._sidenav.close();
    if (this._sidenav && !this._docked) {
      this._sidenav.visible = false;
    }
  }
  open() {
    // this._sidenav && this._sidenav.open();
    if (this._sidenav) {
      this._sidenav.visible = true;
    }
    if (document.getElementsByClassName('ui-sidebar-mask')[0]) {
      if (this._docked) {
        document.getElementsByClassName('ui-sidebar-mask')[0].hidden = true;
      } else {
        document.getElementsByClassName('ui-sidebar-mask')[0].hidden = false;
      }
    }
  }
  initialize() {
    mqlGtsm.addListener(result =>
      this._ngZone.run(() => this.onWindowSizeChanged(result))
    );
    this.onWindowSizeChanged(mqlGtsm);
  }
  onWindowSizeChanged = ({matches}) => {
    this._docked = matches;
    // this.onShowMenuAppBar.emit(!this._docked);
    if (matches) this.open();
    else this.close();
  };
  dispose() {
    mqlGtsm.removeListener(this.onWindowSizeChanged);
    this._sidenav = null;
  }

  isVisible() {
    return this._sidenav && this._sidenav.visible;
  }

  isDocked() {
    return this._docked;
  }
}
