import {Component, Input} from '@angular/core';
import {AgentService} from '@tune-up/app';
import {FollowupsService, GetAgentesProductoService} from './services';
import html from './followups.component.html';
import './followups.component.css';

@Component({
  selector: 'ut-followup',
  template: html,
  providers: [FollowupsService, GetAgentesProductoService],
})
export class FollowupsComponent {
  @Input() utId;
  @Input() productoId;
  seguimientoSelected;
  assigningAgent = false;
  selectedAgent;
  seguimientos = [];

  constructor(followupsService: FollowupsService, 
              agentService: AgentService, 
              getAgentesProductoService: GetAgentesProductoService) {
    this._followupsService = followupsService;
    this._agentService = agentService;
    this._getAgentesProductoService = getAgentesProductoService;
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
  _getAgentes() {
    this._getAgentesSub = this._getAgentesProductoService.getAgentes(this.productoId)
    .subscribe(
    (data) => {
      this.agentesDisponibles = data.map((agente) => {
          return {label: agente.Nombre, value: agente.Id};
      });
      this.agentesDisponibles.shift(); // TODO: Refactor backend service.
    }, (error) => {
      // TODO
      console.error(error);
    });
  }
  get idSeguimiento() {
    return this.seguimientoSelected.IdSeguimiento;
  }
  get seguimiento() {
    return this.seguimientoSelected;
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
  puedeAsignarAgente = () => {
     return this.seguimiento && this.seguimiento.IdAgente === null
     && this.seguimiento.Estado === 'TO DO';
  }
  asignarAgente = () => {
    this.assigningAgent = true;
    this._getAgentes();
  }
  aceptarAsignar = () => {
    this.assigningAgent = false;
    this._followupsService.asignarAgente(this.seguimiento.IdSeguimiento, this.selectedAgent).subscribe(
      (data) => {
        // TODO: This can be replace to the invocation of getFollowUps
        this.seguimiento.IdAgente = this.selectedAgent;
        this.seguimiento.NombreAgente = this.agentesDisponibles.find((agente) =>{
          return agente.value === this.selectedAgent;
        }).label;
       },
      (error) => {
        console.log(error);
      }
    );
  }
  cancelarAsignar = () => {
    this.assigningAgent = false;
  }
  trabajarEnParalelo = () => {
    // TODO
  }
  ngOnDestroy() {

    this._getFollowupsSub &&
    !this._getFollowupsSub.closed &&
    this._getFollowupsSub.unsubscribe();

    this._getAgentesSub &&
    !this._getAgentesSub.closed &&
    this._getAgentesSub.unsubscribe();
  }
}
