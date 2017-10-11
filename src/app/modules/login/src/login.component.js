import {Router, ActivatedRoute} from '@angular/router';
import {Component} from '@angular/core';
import {AuthService} from '@tune-up/app';
import {LoginService, SitesService} from './services';
import html from './login.component.html';
import './login.component.css';

@Component({
  selector: 'tn-login',
  template: html,
  providers: [LoginService, SitesService]
})
export class LoginComponent {
  model = {
    email: undefined,
    password: undefined,
    idsitio: undefined
  };
  constructor(
    route: ActivatedRoute,
    router: Router,
    loginService: LoginService,
    sitesService: SitesService,
    authService: AuthService
  ) {
    this._returnUrl = '/home';
    this.sites = [];
    this._route = route;
    this._router = router;
    this._loginService = loginService;
    this._sitesService = sitesService;
    this._authService = authService;
  }
  ngOnInit() {
    this._returnUrl =
      this._route.snapshot.queryParams.returnUrl || this._returnUrl;
  }
  onEmailFocusLost = () => {
    this._sitesService.get(this.model.email).subscribe(
      data => {
        this.sites = data.Resultado.map(site => {
          return {label: `${site.Id}: ${site.Nombre} `, value: site.Id};
        });
      },
      error => {
        console.log(error);
      }
    );
  };
  setIdSitio = idSitio => {
    this.model.idsitio = idSitio;
  };
  showSelector = () => {
    return this.sites.length > 1;
  };
  login = () => {
    this._loginService.login(this.model).subscribe(
      data => {
        console.log(data);
        this._authService.setToken(data.Resultado.Token);
        this._router.navigateByUrl(this._returnUrl);
      },
      error => {
        console.log(error);
      }
    );
  };
}
