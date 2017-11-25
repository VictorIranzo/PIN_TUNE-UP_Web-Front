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
  providers: [LoginService, SitesService],
})
export class LoginComponent {
  model = {
    email: undefined,
    password: undefined,
    idsitio: undefined,
  };
  sites = [];
  _returnUrl = '/home';
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
    this._route = route;
    this._router = router;
    this._loginService = loginService;
    this._sitesService = sitesService;
    this._authService = authService;
    this._aboutService = aboutService;
    this._agentService = agentService;
    this._notificationsService = notificationsService;
  }
  ngOnInit() {
    this._setDefaulReturnUrl();
    this._checkLogedIn();
  }
  _setDefaulReturnUrl() {
    const paramsReturnUrl = this._route.snapshot.queryParams.returnUrl;
    this._returnUrl =
      !paramsReturnUrl ||
        paramsReturnUrl === '/login' ||
        paramsReturnUrl === '/'
        ? this._returnUrl
        : paramsReturnUrl;
  }
  _checkLogedIn() {
    if (this._authService.getToken()) {
      this._redirect();
    }
  }
  _redirect() {
    this._router.navigateByUrl(this._returnUrl);
  }
  onEmailFocusLost = () => {
    if (!this.model.email || !this.emailCtrl.valid) {
      return;
    }
    this._getSitesSubscription = this._sitesService.get(this.model.email).subscribe(
      (data) => {
        this._handleNoSites(data);
        data.length > 0 && this._parseSites(data);
      },
      (error) => {
        this._notificationsService.error('No se pudieron encontrar sitios', error);
      }
    );
  };
  _handleNoSites(sites) {
    sites.length === 0 &&
      this._notificationsService.error(
        'No hay sitios disponibles',
        'No existen sitios asociados con este email.'
      );
  }
  _parseSites(sites) {
    this.sites = sites.map((site) => {
      return {label: site.Nombre, value: site.Id};
    });
    this.model.idsitio = sites[0] && sites[0].Id;
  }
  login = () => {
    this._loginSubscription = this._loginService.login(this.model).subscribe(
      (data) => {
        let {Token, Agente, Configuracion} = data;
        Agente.IdSitio = this.model.idsitio;
        this._authService.setToken(Token);
        this._agentService.agent = Agente;
        this._aboutService.about = Configuracion;
        this._redirect();
      },
      (error) => {
        this._notificationsService.error('Error de login', error);
      }
    );
  };
  setIdSitio = (idSitio) => {
    this.model.idsitio = idSitio;
  };
  showSelector = () => {
    return this.sites.length > 1;
  };
  ngOnDestroy() {
    this._getSitesSubscription &&
      !this._getSitesSubscription.closed &&
      this._getSitesSubscription.unsubscribe();
    this._loginSubscription &&
      !this._loginSubscription.closed &&
      this._loginSubscription.unsubscribe();
  }
}
