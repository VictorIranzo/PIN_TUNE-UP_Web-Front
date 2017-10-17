import {Router, ActivatedRoute} from '@angular/router';
import {Component, ViewChild} from '@angular/core';
import {AuthService, AgentService, AboutService} from '@tune-up/app';
import {NotificationsService} from '@tune-up/core';
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
  @ViewChild('emailCtrl') emailCtrl;
  constructor(
    route: ActivatedRoute,
    router: Router,
    loginService: LoginService,
    sitesService: SitesService,
    authService: AuthService,
    agentService: AgentService,
    aboutService: AboutService,
    notificationsService: NotificationsService
  ) {
    // TODO: change to home when implemented
    this._returnUrl = '/example';
    this.sites = [];
    this._route = route;
    this._router = router;
    this._loginService = loginService;
    this._sitesService = sitesService;
    this._authService = authService;
    this._aboutService = aboutService;
    this._agentService = agentService;
    this._notificationsService = notificationsService;
  }
  _checkLogedIn() {
    if (this._authService.getToken()) {
      this._redirect();
    }
  }
  _redirect() {
    this._router.navigateByUrl(this._returnUrl);
  }
  ngOnInit() {
    const paramsReturnUrl = this._route.snapshot.queryParams.returnUrl;
    this._returnUrl =
      !paramsReturnUrl || paramsReturnUrl === '/login'
        ? this._returnUrl
        : paramsReturnUrl;

    this._checkLogedIn();
  }
  onEmailFocusLost = () => {
    this.model.email &&
      this.emailCtrl.valid &&
      this._sitesService.get(this.model.email).subscribe(
        data => {
          const {Resultado} = data;
          // TODO: refactor when backend api is refactored
          if (Resultado.length === 0) {
            this._notificationsService.error(
              'No hay sitios disponibles',
              'No existen sitios asociados con este email.'
            );
          } else {
            this._parseSites(Resultado);
          }
        },
        error => {
          this._notificationsService.error('Error', error.Message);
        }
      );
  };
  _parseSites(sites) {
    this.sites = sites.map(site => {
      return {label: `${site.Id}: ${site.Nombre} `, value: site.Id};
    });
    this.model.idsitio = sites[0] && sites[0].Id;
  }
  setIdSitio = idSitio => {
    this.model.idsitio = idSitio;
  };
  showSelector = () => {
    return this.sites.length > 1;
  };
  login = () => {
    this._loginService.login(this.model).subscribe(
      data => {
        // TODO: refactor when backend api is refactored
        if (!data.Exito) {
          this._notificationsService.error('Error de login', data.Mensaje);
          return;
        }
        let {Token, Agente, Configuracion} = data.Resultado;
        this._authService.setToken(Token);
        this._agentService.agent = Agente;
        this._aboutService.about = Configuracion;
        this._redirect();
      },
      error => {
        this._notificationsService.error('Error de login', error.Message);
      }
    );
  };
}
