import {NgZone, Injectable} from '@angular/core';

const mqlGtsm = window.matchMedia('(min-width: 960px)');

@Injectable()
export class SceneService {
  constructor(ngZone: NgZone) {
    this._sidenav = null;
    this._ngZone = ngZone;
  }
  set sidenav(value) {
    this._sidenav = value;
    this._initialize();
  }
  close() {
    if (this._sidenav && !this._docked) {
      this._sidenav.visible = false;
    }
  }
  closeStrong() {
    if (this._sidenav) {
      this._sidenav.visible = false;
    }
  }
  open() {
    if (this._sidenav) {
      this._sidenav.visible = true;
      let mask =  document.getElementsByClassName('ui-sidebar-mask')[0];
      mask && (mask.hidden = true); 
      let sidebar = document.getElementsByClassName('ui-sidebar')[0];
      sidebar && (sidebar.style.padding = '0px');      
    }
  }
  _initialize() {
    mqlGtsm.addListener((result) =>
      this._ngZone.run(() => this._onWindowSizeChanged(result))
    );
    this._onWindowSizeChanged(mqlGtsm);
  }
  _onWindowSizeChanged = ({matches}) => {
    this._docked = matches;
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
