import {Component, Input} from '@angular/core';
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
  constructor(followupsService: FollowupsService) {
    this._followupsService = followupsService;
  }
  ngOnInit() {
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
    this._followupsService.empezarSeguimiento(this.idSeguimiento);
  }
  puedeContinuar = () => {
    return this.seguimiento && this.seguimiento.Estado === 'DOING';
  }
  continuar = () => {
    this._followupsService.empezarSeguimiento(this.idSeguimiento);
  }
  puedePausar = () => {
    return this.seguimiento && this.seguimiento.Estado === 'ACTIVE';
  }
  pausar = () => {
    this._followupsService.pausarSeguimiento(this.idSeguimiento);
  }
  puedeFinalizar = () => {
    return this.seguimiento && this.seguimiento.Estado !== 'DONE';
  }
  finalizar = () => {
    this._followupsService.finalizarSeguimiento(this.idSeguimiento);
  }
  asignarAgente = () => {
    // TODO
  }
  trabajarEnParalelo = () => {
    // TODO
  }
}
