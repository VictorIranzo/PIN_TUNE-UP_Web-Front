import {Component, Input} from '@angular/core';
import {AgentService} from '@tune-up/app';
import {FollowupsService} from './followups.service';
import html from './followups.component.html';
import './followups.component.css';

@Component({
  selector: 'ut-followup',
  template: html,
  providers: [FollowupsService],
})
export class FollowupsComponent {
  @Input() utId;
  seguimientos = [];
  constructor(followupsService: FollowupsService, agentService: AgentService) {
    this._followupsService = followupsService;
    this._agentService = agentService;
  }
  ngOnInit() {
   this._getFollowUps();
  }
  isSameAgent() {
    return this.seguimiento.IdAgente === this._agentService.getAgentId();
  }
  _getFollowUps() {
    this._getFollowupsSub = this._followupsService.getSeguimientos(this.utId)
    .subscribe(
    (data) => {
      this.seguimientos = data;
    }, (error) => {
      // TODO
      console.error(error);
    });
  }
  get idSeguimiento() {
    return this.seguimientos[0].IdSeguimiento;
  }
  get seguimiento() {
    return this.seguimientos[0];
  }
  puedeIniciar = () => {
    return this.seguimiento && this.seguimiento.Estado === 'TO DO';
  }
  iniciar = () => {
    this._followupsService.empezarSeguimiento(this.idSeguimiento).subscribe(
      (data) => {
        this.seguimiento.Estado = 'ACTIVE';
       },
      (error) => {
        console.log(error);
      }
    );
  }
  puedeContinuar = () => {
    return this.seguimiento && this.seguimiento.Estado === 'DOING';
  }
  continuar = () => {
    this._followupsService.empezarSeguimiento(this.idSeguimiento).subscribe(
      (data) => {
        this.seguimiento.Estado = 'ACTIVE';
      },
      (error) => {
        console.log(error);
      }
    );
  }
  puedePausar = () => {
    return this.seguimiento && this.seguimiento.Estado === 'ACTIVE';
  }
  pausar = () => {
    this._followupsService.pausarSeguimiento(this.idSeguimiento).subscribe(
      (data) => {
        this.seguimiento.Estado = 'DOING';
       },
      (error) => {
        console.log(error);
      }
    );
  }
  puedeFinalizar = () => {
    return this.seguimiento && this.seguimiento.Estado !== 'DONE';
  }
  finalizar = () => {
    this._followupsService.finalizarSeguimiento(this.idSeguimiento).subscribe(
      (data) => {
        this._getFollowUps();
       },
      (error) => {
        console.log(error);
      }
    );
  }
  asignarAgente = () => {
    // TODO
  }
  trabajarEnParalelo = () => {
    // TODO
  }
}
