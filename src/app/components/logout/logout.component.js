import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AgentService, AuthService} from '../../services';
@Component({
  selector: 'tn-logout',
  template: '',
})
export class LogoutComponent {
  constructor(router: Router, agentService: AgentService, authService: AuthService) {
    this._router = router;
    this._agentService = agentService;
    this._authService = authService;
    this._returnUrl = '/login';
  }
  ngOnInit() {
    this._clearStorage();
    this._goToLogin();
  }
  _clearStorage() {
    this._agentService.clear();
    this._authService.clear();
  }
  _goToLogin() {
    this._router.navigateByUrl(this._returnUrl);
  }
};
