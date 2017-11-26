!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("@angular/router"),require("@tune-up/app"),require("@angular/common/http"),require("@tune-up/core")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/router","@tune-up/app","@angular/common/http","@tune-up/core"],t):t((e.tuneUp=e.tuneUp||{},e.tuneUp.ut={}),e.tuneUp.vendor.ngCore,e.tuneUp.vendor.ngRouter,e.tuneUp.app,e.tuneUp.vendor.ngCommonHttp,e.tuneUp.app)}(this,function(e,t,i,o,n,r){"use strict";function __$styleInject(e,t){if("undefined"==typeof document)return t;e=e||"";var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");return o.type="text/css",i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),t}function _initDefineProp(e,t,i,o){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0})}__$styleInject("",void 0);!function(){function AwaitValue(e){this.value=e}function AsyncGenerator(e){function resume(t,i){try{var o=e[t](i),n=o.value;n instanceof AwaitValue?Promise.resolve(n.value).then(function(e){resume("next",e)},function(e){resume("throw",e)}):settle(o.done?"return":"normal",o.value)}catch(e){settle("throw",e)}}function settle(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?resume(t.key,t.arg):i=null}var t,i;this._invoke=function send(e,o){return new Promise(function(n,r){var s={key:e,arg:o,resolve:n,reject:r,next:null};i?i=i.next=s:(t=i=s,resume(e,o))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)}}();var s,l,a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),c=(s=t.Component({selector:"tn-ut",template:"<tn-ut-search></tn-ut-search>\n"}))(l=function(){function UtComponent(e){a(this,UtComponent),this._breadcrumbService=e,this._breadcrumbService.addItems({label:"UTs",routerLink:"/uts"})}return u(UtComponent,[{key:"ngOnDestroy",value:function ngOnDestroy(){}}]),UtComponent}())||l;Reflect.defineMetadata("design:paramtypes",[o.BreadcrumbService],c);var d,p,h=(d=t.Injectable())(p=function(){function DetailsService(e){a(this,DetailsService),this._http=e,this._urlUT="FichaUT2",this._urlProductos="Productos2",this._urlUTs="UTs2"}return u(DetailsService,[{key:"getUt",value:function getUt(e){return this._http.get(this._urlUT+"/"+e)}},{key:"getProductosDisponibles",value:function getProductosDisponibles(){return this._http.get(""+this._urlProductos)}},{key:"submitChangesDetails",value:function submitChangesDetails(e){return this._http.post(this._urlUTs,e)}}]),DetailsService}())||p;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],h);__$styleInject(".tn-ut__form{padding:16px}.tn-ut__form__section{padding:8px}.tn-ut__form__buttons{padding:8px;align-items:flex-end}.tn-ut__form__detail_button{height:60%;text-align:center}.tn-ut__form__row{flex-wrap:wrap}",void 0);var f,b,v={1:"fa fa-star",2:"fa fa-bug",3:"fa fa-plus-circle",4:"fa fa-puzzle-piece"},_=(f=t.Component({selector:"tn-ut-details",template:'<p-accordion [multiple]="true">\n  <p-accordionTab header="Detalles" [selected]="true">\n    <form class="tn-ut__form vertical" #frm="ngForm" (ngSubmit)="frm.valid && onGuardar()">\n      <div class="horizontal tn-ut__form__row">\n        <div class="vertical one tn-ut__form__section">\n          <label>Código</label>\n          <input id="disabled-input" type="text" pInputText [(ngModel)]="model.IdUT" name="codigo" #codigoCtrl="ngModel" [disabled]="true"\n          />\n        </div>\n        <div class="vertical seven tn-ut__form__section">\n          <label>Nombre</label>\n          <input id="input" type="text" pInputText [(ngModel)]="model.Nombre" name="nombre" #nombreCtrl="ngModel" [disabled]="!editingMode">\n        </div>\n        <div class="horizontal none tn-ut__form__buttons">\n          <button *ngIf="!editingMode" pButton type="button" class="tn-ut__form__detail_button" icon="fa fa-pencil-square-o" label="Editar" (click)="onEditar()"></button>\n          <button *ngIf="editingMode" pButton type="submit" class="tn-ut__form__detail_button" icon="fa fa-floppy-o" label="Guardar"></button>\n          <button *ngIf="editingMode" pButton type="button" class="tn-ut__form__detail_button" icon="fa fa-times" label="Cancelar" (click)="onCancelar()"></button>\n        </div>\n      </div>\n      <div class="horizontal tn-ut__form__row">\n        <div class="vertical two tn-ut__form__section">\n          <label>Producto</label>\n          <p-dropdown [options]="productosDisponibles" [(ngModel)]="model.IdProducto" name="producto" #productoCtrl="ngModel"\n            [disabled]="!editingMode" filter="true" [style]="{\'width\':\'100%\'}"></p-dropdown>\n        </div>\n        <div class="vertical two tn-ut__form__section">\n          <label>Sprint</label>\n          <p-dropdown [options]="sprintsDisponibles" [(ngModel)]="model.IdVersion" name="sprint" #sprintCtrl="ngModel" [disabled]="!editingMode"\n            filter="true" [style]="{\'width\':\'100%\'}"></p-dropdown>\n        </div>\n        <div class="vertical none tn-ut__form__section">\n          <label>Orden</label>\n          <p-spinner [step]=10 [min]=0 [(ngModel)]="model.Orden" name="orden" #ordenCtrl="ngModel" [disabled]="!editingMode"></p-spinner>\n        </div>\n      </div>\n      <div class="horizontal tn-ut__form__row">\n        <div class="vertical five tn-ut__form__section">\n          <label>Workflow</label>\n          <p-dropdown [options]="workflowsDisponibles" [(ngModel)]="model.IdWorkflow" name="workflow" #workflowCtrl="ngModel" [disabled]="!editingMode"\n            filter="true" [style]="{\'width\':\'100%\'}"></p-dropdown>\n        </div>\n        <div class="vertical three tn-ut__form__section">\n          <label>Tipo</label>\n          <p-dropdown [options]="tiposDisponibles" [(ngModel)]="model.IdTipoUT" name="tipo" #tipoCtrl="ngModel" [disabled]="!editingMode"\n            filter="true" [style]="{\'width\':\'100%\'}">\n            <ng-template let-tipoUT pTemplate="item">\n              <div class="ui-helper-clearfix" style="position: relative;height: 25px;">\n                <i [ngClass]="getUtTypeIcon(tipoUT.value)"></i>\n                <div style="font-size:14px;float:right;margin-top:4px">{{tipoUT.label}}</div>\n              </div>\n            </ng-template>\n          </p-dropdown>\n        </div>\n        <div class="vertical five tn-ut__form__section">\n          <label>Proyecto</label>\n          <p-dropdown [options]="proyectosDisponibles" [(ngModel)]="model.IdProyecto" name="proyecto" #proyectoCtrl="ngModel" [disabled]="!editingMode"\n            filter="true" [style]="{\'width\':\'100%\'}"></p-dropdown>\n        </div>\n      </div>\n      <div class="vertical tn-ut__form__section tn-ut__form__row">\n        <label>Descripción</label>\n        <textarea rows="5" pInputTextarea [(ngModel)]="model.Descripcion" name="descripcion" #descripcionCtrl="ngModel" [disabled]="!editingMode"\n          [style]="{\'width\':\'100%\'}"></textarea>\n      </div>\n    </form>\n  </p-accordionTab>\n  <p-accordionTab header="Actividades" [selected]="true">\n    <ut-followup [utId]="model.IdUT"></ut-followup>\n  </p-accordionTab>\n</p-accordion>\n'}))(b=function(){function DetailsComponent(e,t,i,o,n){var r=this;a(this,DetailsComponent),this.editingMode=!1,this.model={IdUT:void 0,Nombre:void 0,Orden:void 0,IdProducto:void 0,IdVersion:void 0,IdWorkflow:void 0,IdTipoUT:void 0,IdProyecto:void 0,Descripcion:void 0},this.ut=this.ut,this.onGuardar=function(){r._saveDetailsSubscription=r._detailsService.submitChangesDetails(r.model).subscribe(function(e){r.editingMode=!1,r.ut.UT.IdUT=r.model.IdUT,r.ut.UT.Nombre=r.model.Nombre,r.ut.UT.Orden=r.model.Orden,r.ut.UT.IdProducto=r.model.IdProducto,r.ut.UT.IdVersion=r.model.IdVersion,r.ut.UT.IdWorkflow=r.model.IdWorkflow,r.ut.UT.IdTipoUT=r.model.IdTipoUT,r.ut.UT.IdProyecto=r.model.IdProyecto,r.ut.UT.Descripcion=r.model.Descripcion},function(e){r._notificationsService.error("Error al guardar los cambios",e)})},this.getUtTypeIcon=function(e){return v[e]},this._route=e,this._router=t,this._detailsService=i,this._notificationsService=o,this._breadcrumbService=n,this.model.IdUT=parseInt(this._route.params._value.id),this._getProductosDisponibles=this._detailsService.getProductosDisponibles().subscribe(function(e){r._parseProductos(e)}),this._getUt=this._detailsService.getUt(this.model.IdUT).subscribe(function(e){void 0==e.UT?r.showErrorAndBackHome():(r.ut=e,r.model.Nombre=e.UT.Nombre,r.model.Orden=e.UT.Orden,r._parseSprints(e.listaVersionesUT),r._parseWorkflows(e.listaWorkflowsDisponibles),r._parseTipos(e.listaTiposUT),r._parseProyectos(e.listaProyectos),r.model.Descripcion=e.UT.Descripcion,r._mapSelected(e,r.model),r._breadcrumbService.addItems({label:r.model.IdUT+": "+r.model.Nombre,routerLink:"/uts/"+r.model.IdUT}))},function(e){r.showErrorAndBackHome()})}return u(DetailsComponent,[{key:"onEditar",value:function onEditar(){this.editingMode=!0}},{key:"onCancelar",value:function onCancelar(){this.editingMode=!1,this.model.IdUT=this.ut.UT.IdUT,this.model.Nombre=this.ut.UT.Nombre,this.model.Orden=this.ut.UT.Orden,this.model.IdProducto=this.ut.UT.IdProducto,this.model.IdVersion=this.ut.UT.IdVersion,this.model.IdWorkflow=this.ut.UT.IdWorkflow,this.model.IdTipoUT=this.ut.UT.IdTipoUT,this.model.IdProyecto=this.ut.UT.IdProyecto,this.model.Descripcion=this.ut.UT.Descripcion}},{key:"_parseSprints",value:function _parseSprints(e){this.sprintsDisponibles=e.map(function(e){return{label:e.Nombre,value:e.IdVersion}}),this.sprintsDisponibles.push({label:"Backlog",value:null})}},{key:"_parseWorkflows",value:function _parseWorkflows(e){this.workflowsDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdWorkflow}})}},{key:"_parseTipos",value:function _parseTipos(e){this.tiposDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdTipoUT}})}},{key:"_parseProyectos",value:function _parseProyectos(e){this.proyectosDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdProyecto}}),this.proyectosDisponibles.push({label:"<Sin Proyecto>",value:null})}},{key:"_parseProductos",value:function _parseProductos(e){this.productosDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdProducto}})}},{key:"_mapSelected",value:function _mapSelected(e,t){this.sprintsDisponibles.forEach(function(i){i.value==e.UT.IdVersion&&(t.IdVersion=i.value)}),this.workflowsDisponibles.forEach(function(i){i.value==e.UT.IdWorkflow&&(t.IdWorkflow=i.value)}),this.tiposDisponibles.forEach(function(i){i.value==e.UT.IdTipoUT&&(t.IdTipoUT=i.value)}),this.proyectosDisponibles.forEach(function(i){i.value==e.UT.IdProyecto&&(t.IdProyecto=i.value)}),this.productosDisponibles.forEach(function(i){i.value==e.UT.IdProducto&&(t.IdProducto=i.value)})}},{key:"showErrorAndBackHome",value:function showErrorAndBackHome(){this._notificationsService.error("Error al obtener la UT","UT no encontrada"),this._router.navigateByUrl("/home")}},{key:"ngOnDestroy",value:function ngOnDestroy(){this._breadcrumbService.removeItems(1),this._saveDetailsSubscription&&!this._saveDetailsSubscription.closed&&this._saveDetailsSubscription.unsubscribe(),this._getUtSub&&!this._getUtSub.closed&&this._getUtSub.unsubscribe(),this._getProductosDisponibles&&!this._getProductosDisponibles.closed&&this._getProductosDisponibles.unsubscribe(),this._getUt&&!this._getUt.closed&&this._getUt.unsubscribe()}}]),DetailsComponent}())||b;Reflect.defineMetadata("design:paramtypes",[i.ActivatedRoute,i.Router,h,r.NotificationsService,o.BreadcrumbService],_);var m,g,y=(m=t.Injectable())(g=function(){function CreateUTService(e){a(this,CreateUTService),this._http=e,this._url="UTs/Crear"}return u(CreateUTService,[{key:"put",value:function put(e){return this._http.put(this._url,e)}}]),CreateUTService}())||g;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],y);var S,T,U=(S=t.Injectable())(T=function(){function GetProductosService(e){a(this,GetProductosService),this._http=e,this._url="Productos2"}return u(GetProductosService,[{key:"get",value:function get$$1(){return this._http.get(""+this._url)}}]),GetProductosService}())||T;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],U);var w,I,P=(w=t.Injectable())(I=function(){function GetProyectosService(e){a(this,GetProyectosService),this._http=e,this._url="Productos"}return u(GetProyectosService,[{key:"get",value:function get$$1(e){return this._http.get(this._url+"/"+e+"/Proyectos")}}]),GetProyectosService}())||I;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],P);var k,D,C=(k=t.Injectable())(D=function(){function GetSprintsProductoService(e){a(this,GetSprintsProductoService),this._http=e,this._url="Sprints2"}return u(GetSprintsProductoService,[{key:"get",value:function get$$1(e){return this._http.get(this._url+"/"+e)}}]),GetSprintsProductoService}())||D;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],C);var A,N,M=(A=t.Injectable())(N=function(){function GetTiposUTProductoService(e){a(this,GetTiposUTProductoService),this._http=e,this._url="TiposUT2"}return u(GetTiposUTProductoService,[{key:"get",value:function get$$1(e){return this._http.get(this._url+"/"+e)}}]),GetTiposUTProductoService}())||N;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],M);var x,L,E=(x=t.Injectable())(L=function(){function GetWorkflowsService(e){a(this,GetWorkflowsService),this._http=e,this._url="Workflows"}return u(GetWorkflowsService,[{key:"get",value:function get$$1(e){return this._http.get(this._url+"/"+e)}}]),GetWorkflowsService}())||L;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],E);__$styleInject(".tn-ut__form{padding:16px}.tn-ut__form__section{padding:8px}.tn-ut__form__dropdown{width:100%}",void 0);var z,F,W=[],O=[],G=[],V=[],j={1:"fa fa-star",2:"fa fa-bug",3:"fa fa-plus-circle",4:"fa fa-puzzle-piece"},B=(z=t.Component({selector:"tn-ut-nuevaut",template:'<form class="tn-ut__form vertical">\r\n  <div class="horizontal">\r\n    <div class="vertical seven tn-ut__form__section">\r\n      <label>Nombre</label>\r\n      <input type="text" size="30" [(ngModel)]="ut.Nombre" name="nombre" pInputText>\r\n    </div>\r\n    <div class="vertical five tn-ut__form__section">\r\n      <label>Sprint</label>\r\n      <p-dropdown [options]="sprints" optionLabel="name" [(ngModel)]="ut.IdVersion" [style]="{\'width\':\'100%\'}" filter="true" name="sprint"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class="horizontal">\r\n    <div class="vertical five tn-ut__form__section">\r\n      <label>Producto</label>\r\n      <p-dropdown [options]="productos" optionLabel="name" [(ngModel)]="ut.IdProducto" [style]="{\'width\':\'100%\'}" filter="true" name="producto" (onChange)="onProductChanged($event.value)"></p-dropdown>\r\n    </div>\r\n    <div class="vertical three tn-ut__form__section">\r\n      <label>Tipo</label>\r\n      <p-dropdown [options]="tiposUT" optionLabel="name" [(ngModel)]="ut.IdTipoUT" [style]="{\'width\':\'100%\'}" name="tipo" filter="true">\r\n          <ng-template let-tipoUT pTemplate="item">\r\n            <div class="ui-helper-clearfix" style="position: relative;height: 25px;">\r\n                <i [ngClass]="getUtTypeIcon(tipoUT.value)"></i>\r\n                <div style="float:right;margin-top:4px">{{tipoUT.label}}</div>\r\n            </div>\r\n          </ng-template>\r\n      </p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class="horizontal">\r\n    <div class="vertical seven tn-ut__form__section">\r\n      <label>Proyecto</label>\r\n      <p-dropdown [options]="proyectos" optionLabel="name" [(ngModel)]="ut.IdProyecto" [style]="{\'width\':\'100%\'}" name="idproyecto" filter="true"></p-dropdown>\r\n    </div>\r\n    <div class="vertical five tn-ut__form__section">\r\n      <label>Workflow</label>\r\n      <p-dropdown [options]="workflows" optionLabel="name" [(ngModel)]="ut.IdWorkflow" [style]="{\'width\':\'100%\'}" name="idworkflow" filter="true"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class="horizontal tn-ut__form__section">\r\n    <button pButton type="button" label="Crear & Nueva" icon="fa fa-refresh" [disabled]="isNombreEmpty()" (click)="onCrearNuevaUTClick()"></button>\r\n    <button pButton type="button" label="Crear & Abrir" icon="fa fa-forward" [disabled]="isNombreEmpty()" (click)="onCrearYAbrirUTClick()"></button>\r\n  </div>\r\n</form>\r\n',providers:[y,E]}))(F=function(){function NuevaUTComponent(e,t,i,o,n,r,s,l){a(this,NuevaUTComponent),this.ut={Nombre:null,IdVersion:null,IdProducto:null,IdWorkflow:null,IdTipoUT:null,IdProyecto:null},this.getUtTypeIcon=function(e){return j[e]},this._createUTService=e,this._getProductosService=t,this._getProyectosService=i,this._getSprintsService=o,this._getWorkflowsService=r,this._getTiposUTService=n,this._notificationService=s,this._router=l,this.productos=[],this.proyectos=[],this.sprints=[],this.tiposUT=[],this.workflows=[]}return u(NuevaUTComponent,[{key:"ngOnInit",value:function ngOnInit(){this._getProductos()}},{key:"_getProductos",value:function _getProductos(){var e=this;this._getProductosSubscription=this._getProductosService.get().subscribe(function(t){e.productos=e._parseProductos(t),e.productos.length>0&&(e.ut.IdProducto=e.productos[0].value,e._getDatosProducto(e.productos[0].value))},function(t){return e._notificationService.error("No se han podido obtener los productos",t)})}},{key:"_parseProductos",value:function _parseProductos(e){return e.map(function(e){return{label:""+e.Nombre,value:e.IdProducto}})}},{key:"_getDatosProducto",value:function _getDatosProducto(e){this.workflows=this._getWorkflows(e),this.proyectos=this._getProyectos(e),this.sprints=this._getSprints(e),this.tiposUT=this._getTiposUT(e),this._seleccionarValoresPorDefecto()}},{key:"_getWorkflows",value:function _getWorkflows(e){var t=this;return V[e]||(this._getWorkflowsSubscription=this._getWorkflowsService.get(e).subscribe(function(i){V[e]=t._parseWorkflows(i),t.workflows=V[e],t.ut.IdWorkflow=t.workflows[0]?t.workflows[0].value:null})),V[e]}},{key:"_parseWorkflows",value:function _parseWorkflows(e){return e.map(function(e){return{label:""+e.Nombre,value:e.IdWorkflow}})}},{key:"_getProyectos",value:function _getProyectos(e){var t=this;return W[e]||(this._getProyectoSubscription=this._getProyectosService.get(e).subscribe(function(i){W[e]=t._parseProyectos(i),t.proyectos=W[e],t.ut.IdProyecto=t.proyectos[0]?t.proyectos[0].value:null},function(e){return t._notificationService.error("No se han podido obtener los proyectos del producto",e)})),W[e]}},{key:"_parseProyectos",value:function _parseProyectos(e){return e.map(function(e){return{label:""+e.Nombre,value:e.IdProyecto}})}},{key:"_getTiposUT",value:function _getTiposUT(e){var t=this;return G[e]||(this._getTiposUTSubscription=this._getTiposUTService.get(e).subscribe(function(i){G[e]=t._parseTiposUT(i),t.tiposUT=G[e],t.ut.IdTipoUT=t.tiposUT[0]?t.tiposUT[0].value:null},function(e){return t._notificationService.error("No se han podido obtener los tipos de UT",e)})),G[e]}},{key:"_parseTiposUT",value:function _parseTiposUT(e){return e.map(function(e){return{label:""+e.Nombre,value:e.IdTipoUT}})}},{key:"_getSprints",value:function _getSprints(e){var t=this;return O[e]||(this._getSprintsSubscription=this._getSprintsService.get(e).subscribe(function(i){O[e]=t._parseSprints(i),t.sprints=O[e],t.ut.IdVersion=t.sprints[0]?t.sprints[0].value:null},function(e){t._notificationService.error("No se han podido obtener los Sprints del producto",e)})),O[e]}},{key:"_parseSprints",value:function _parseSprints(e){return e.map(function(e){return{label:""+e.Nombre,value:e.IdVersion}})}},{key:"_seleccionarValoresPorDefecto",value:function _seleccionarValoresPorDefecto(){this.ut.IdWorkflow=this.workflows&&this.workflows[0]?this.workflows[0].value:null,this.ut.IdProyecto=this.proyectos&&this.proyectos[0]?this.proyectos[0].value:null,this.ut.IdVersion=this.IdVersion&&this.sprints[0]?this.sprints[0].value:null,this.ut.IdTipoUT=this.tiposUT&&this.tiposUT[0]?this.tiposUT[0].value:null}},{key:"onProductChanged",value:function onProductChanged(e){this._getDatosProducto(e)}},{key:"onCrearNuevaUTClick",value:function onCrearNuevaUTClick(){var e=this;this._crearUTSubscription=this._createUTService.put(this.ut).subscribe(function(t){e._notificationService.success("La UT se ha creado con exito","UT: "+e.ut.Nombre),e._clearFields()},function(t){e._notificationService.error("No se pudo crear la UT especficada",t)})}},{key:"_clearFields",value:function _clearFields(){this.ut.Nombre=""}},{key:"onCrearYAbrirUTClick",value:function onCrearYAbrirUTClick(){var e=this;this._crearUTSubscription=this._createUTService.put(this.ut).subscribe(function(t){e._redirect(t)},function(t){e._notificationService.error("No se pudo crear la UT especficada",t)})}},{key:"_redirect",value:function _redirect(e){this._router.navigateByUrl("/uts/"+e)}},{key:"isNombreEmpty",value:function isNombreEmpty(){return null==this.ut.Nombre||0===this.ut.Nombre.length}},{key:"ngOnDestroy",value:function ngOnDestroy(){this._crearUTSubscription&&!this._crearUTSubscription.closed&&this._crearUTSubscription.unsubscribe(),this._getProductosSubscription&&!this._getProductosSubscription.closed&&this._getProductosSubscription.unsubscribe(),this._getProyectoSubscription&&!this._getProyectoSubscription.closed&&this._getProyectoSubscription.unsubscribe(),this._getSprintsSubscription&&!this._getSprintsSubscription.closed&&this._getSprintsSubscription.unsubscribe(),this._getTiposUTSubscription&&!this._getTiposUTSubscription.closed&&this._getTiposUTSubscription.unsubscribe(),this._getWorkflowsSubscription&&!this._getWorkflowsSubscription.closed&&this._getWorkflowsSubscription.unsubscribe()}}]),NuevaUTComponent}())||F;Reflect.defineMetadata("design:paramtypes",[y,U,P,C,M,E,r.NotificationsService,i.Router],B);var R,$,H=(R=t.Injectable())($=function(){function FollowupsService(e){a(this,FollowupsService),this._http=e}return u(FollowupsService,[{key:"getSeguimientos",value:function getSeguimientos(e){return this._http.get("UTs/"+e+"/Seguimientos")}},{key:"pausarSeguimiento",value:function pausarSeguimiento(e){return this._http.post("FinalizarRegistroTiempo?idSeguimiento="+e)}},{key:"empezarSeguimiento",value:function empezarSeguimiento(e){return this._http.post("EmpezarRegistroTiempo?idSeguimiento="+e)}},{key:"finalizarSeguimiento",value:function finalizarSeguimiento(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this._http.post("FinalizarSeguimiento?idSeguimiento="+e+"&adelante="+t+"&avisarEmail=false")}}]),FollowupsService}())||$;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],H);__$styleInject(".tn-ut__followups{padding:16px}.tn-ut__followups__controls{padding-bottom:8px}",void 0);var Y,q,J,K,Q,X=(Y=t.Component({selector:"ut-followup",template:'<div class="vertical tn-ut__followups">\r\n  <div class="horizontal tn-ut__followups__controls">\r\n    <button pButton label="Iniciar" icon="fa fa-play-circle" [disabled]="true" *ngIf="!puedeIniciar() && !puedeContinuar() && !puedePausar()"></button>\r\n    <button pButton label="Iniciar" (click)="iniciar()" icon="fa fa-play-circle" [disabled]="!isSameAgent()" *ngIf="puedeIniciar()"></button>\r\n    <button pButton label="Continuar" (click)="continuar()" icon="fa fa-play-circle" [disabled]="!isSameAgent()" *ngIf="puedeContinuar()"></button>\r\n    <button pButton label="Pausar" (click)="pausar()" icon="fa fa-pause-circle" [disabled]="!isSameAgent()" *ngIf="puedePausar()"></button>\r\n    <button pButton label="Finalizar" (click)="finalizar()" icon="fa fa-stop-circle" [disabled]="!puedeFinalizar()"></button>\r\n    <button pButton label="Asignar Agente" (click)="asignarAgente()" icon="fa fa-user-plus" [disabled]="true"></button>\r\n    <button pButton label="Trabajar en Paralelo" (click)="trabajarEnParalelo()" icon="fa fa-users" [disabled]="true"></button>\r\n  </div>\r\n  <p-dataTable [value]="seguimientos">\r\n    <p-column field="Estado" header="Estado" [sortable]="true" [style]="{\'width\':\'15%\'}"></p-column>\r\n    <p-column field="NombreActividad" header="Actividad" [sortable]="true" [style]="{\'width\':\'25%\'}"></p-column>\r\n    <p-column field="NombreAgente" header="Agente" [sortable]="true" [style]="{\'width\':\'20%\'}" ></p-column>\r\n    <p-column field="FechaCreacion" header="Generada" [sortable]="true" [style]="{\'width\':\'20%\'}">\r\n      <ng-template let-activity="rowData" pTemplate="body">\r\n        <span class="ui-cell-data">{{activity.FechaCreacion | amLocale:\'es\' | amDateFormat: \'DD-MM-YYYY HH:mm\'}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field="FechaFinalizacion" header="Finalizada" [sortable]="true" [style]="{\'width\':\'20%\'}">\r\n      <ng-template let-activity="rowData" pTemplate="body">\r\n        <span class="ui-cell-data" *ngIf="activity.FechaFinalizacion">{{activity.FechaFinalizacion | amLocale:\'es\' | amDateFormat: \'DD-MM-YYYY HH:mm\'}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n  </p-dataTable>\r\n</div>\r\n',providers:[H]}),q=t.Input(),Y((K=function(){function FollowupsComponent(e,t){var i=this;a(this,FollowupsComponent),_initDefineProp(this,"utId",Q,this),this.seguimientos=[],this.puedeIniciar=function(){return i.seguimiento&&"TO DO"===i.seguimiento.Estado},this.iniciar=function(){i._followupsService.empezarSeguimiento(i.idSeguimiento).subscribe(function(e){i.seguimiento.Estado="ACTIVE"},function(e){console.log(e)})},this.puedeContinuar=function(){return i.seguimiento&&"DOING"===i.seguimiento.Estado},this.continuar=function(){i._followupsService.empezarSeguimiento(i.idSeguimiento).subscribe(function(e){i.seguimiento.Estado="ACTIVE"},function(e){console.log(e)})},this.puedePausar=function(){return i.seguimiento&&"ACTIVE"===i.seguimiento.Estado},this.pausar=function(){i._followupsService.pausarSeguimiento(i.idSeguimiento).subscribe(function(e){i.seguimiento.Estado="DOING"},function(e){console.log(e)})},this.puedeFinalizar=function(){return i.seguimiento&&"DONE"!==i.seguimiento.Estado},this.finalizar=function(){i._followupsService.finalizarSeguimiento(i.idSeguimiento).subscribe(function(e){i._getFollowUps()},function(e){console.log(e)})},this.asignarAgente=function(){},this.trabajarEnParalelo=function(){},this._followupsService=e,this._agentService=t}return u(FollowupsComponent,[{key:"ngOnInit",value:function ngOnInit(){this._getFollowUps()}},{key:"isSameAgent",value:function isSameAgent(){return this.seguimiento.IdAgente===this._agentService.getAgentId()}},{key:"_getFollowUps",value:function _getFollowUps(){var e=this;this._getFollowupsSub=this._followupsService.getSeguimientos(this.utId).subscribe(function(t){e.seguimientos=t},function(e){console.error(e)})}},{key:"idSeguimiento",get:function get$$1(){return this.seguimientos[0].IdSeguimiento}},{key:"seguimiento",get:function get$$1(){return this.seguimientos[0]}}]),FollowupsComponent}(),Q=function _applyDecoratedDescriptor(e,t,i,o,n){var r={};return Object.keys(o).forEach(function(e){r[e]=o[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce(function(i,o){return o(e,t,i)||i},r),n&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(n):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}(K.prototype,"utId",[q],{enumerable:!0,initializer:function initializer(){return this.utId}}),J=K))||J);Reflect.defineMetadata("design:paramtypes",[H,o.AgentService],X);var Z,ee,te=(Z=t.Injectable())(ee=function(){function UtSearchService(e){a(this,UtSearchService),this._http=e,this._urlSearch="/UTs/Buscar"}return u(UtSearchService,[{key:"search",value:function search(e){return this._http.get(this._urlSearch+"?nombreUT="+e.NombreUT+"&idProducto="+e.IdProducto+"&idSprint="+e.IdSprint+"&idProyecto="+e.IdProyecto+"&idTipo="+e.IdTipoUT+"&estado="+e.Estado)}}]),UtSearchService}())||ee;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],te);var ie,oe,ne=(ie=t.Injectable())(oe=function(){function ActivitiesService(e){a(this,ActivitiesService),this._http=e,this._urlSearch="/Actividades"}return u(ActivitiesService,[{key:"getActivities",value:function getActivities(){return this._http.get(this._urlSearch)}}]),ActivitiesService}())||oe;Reflect.defineMetadata("design:paramtypes",[n.HttpClient],ne);__$styleInject(".tn-ut__search{display:flex;flex-direction:column-reverse}@media (min-width:960px){.tn-ut__search{flex-direction:row}}.tn-ut__fields{margin:16px}@media (min-width:960px){.tn-ut__fields{height:100%}}.tn-ut__field{padding:0 0 10px}@media (min-width:960px){.tn-ut__field{padding:0 0 20px}}.tn-ut__results{margin:16px}",void 0);var re,se,le={1:"fa fa-star",2:"fa fa-bug",3:"fa fa-plus-circle",4:"fa fa-puzzle-piece"},ae=[{label:"ALL",value:0},{label:"Sólo UTs terminadas",value:1},{label:"Sólo UTs NO terminadas",value:2}],ue=[],ce=[],de=[],pe=[],he=(re=t.Component({selector:"tn-ut-search",template:'<div class="tn-ut__search">\n  <div class="six tn-ut__results">\n    <p-dataTable [value]="uts" [rows]="20" [paginator]="true"  [pageLinks]="5" [sortMode]="multiple" [globalFilter]="gb"\n    reorderableColumns="true" [responsive]="true">\n      <p-column [style]="{\'width\':\'5%\'}" field="Tipo" header="Tipo" [sortable]="true">\n        <ng-template let-ut="rowData" pTemplate="body">\n          <span class="ui-button-icon" [ngClass]="getUtTypeIcon(ut.IdTipoUT)"></span>\n        </ng-template>\n      </p-column>\n      <p-column [style]="{\'width\':\'10%\'}" field="IdUT" header="Código" [sortable]="true">\n        <ng-template let-ut="rowData" pTemplate="body">\n          <a class="ui-cell-data" [routerLink]="getUtLink(ut)">{{ut.IdUT}}</a>\n        </ng-template>\n      </p-column>\n      <p-column [style]="{\'width\':\'15%\'}" field="NombreProducto" header="Producto" [sortable]="true"></p-column>\n      <p-column [style]="{\'width\':\'20%\'}" field="NombreProyecto" header="Proyecto" [sortable]="true"></p-column>\n      <p-column [style]="{\'width\':\'10%\'}" field="NombreVersion" header="Sprint" [sortable]="true"></p-column>\n      <p-column [style]="{\'width\':\'25%\'}" field="NombreUT" header="Nombre" [sortable]="true"></p-column>\n      <p-column [style]="{\'width\':\'15%\'}" field="ActividadActual" header="Actividad actual" [sortable]="true">\n        <ng-template let-ut="rowData" pTemplate="body">\n          <span [ngClass]="getActividad(ut.IdActividad)"></span>\n        </ng-template>\n      </p-column>\n      \n    </p-dataTable>\n  </div>\n  <div class="vertical one tn-ut__fields">\n    <div class="tn-ut__field">\n      <label>Nombre UT</label>\n      <input id="input" type="text" pInputText [(ngModel)]="model.NombreUT" style="width:100%">\n    </div>\n    <div class="tn-ut__field">\n      <label>Producto</label>\n      <p-dropdown [options]="productosDisponibles" [(ngModel)]="model.IdProducto" filter="true" [style]="{\'width\':\'100%\'}" (onChange)="productoChange()"></p-dropdown>\n    </div>\n    <div class="tn-ut__field">\n      <label>Proyecto</label>\n      <p-dropdown [options]="proyectosDisponibles" [(ngModel)]="model.IdProyecto" filter="true" [disabled]="!selectableFields" [style]="{\'width\':\'100%\'}"></p-dropdown>\n    </div>\n    <div class="tn-ut__field">  \n      <label>Sprint</label>\n      <p-dropdown [options]="sprintsDisponibles" [(ngModel)]="model.IdSprint" filter="true" [disabled]="!selectableFields" [style]="{\'width\':\'100%\'}"></p-dropdown>\n    </div>\n    <div class="tn-ut__field">  \n      <label>Tipo UT</label>\n      <p-dropdown [options]="tiposDisponibles" [(ngModel)]="model.IdTipoUT" filter="true" [disabled]="!selectableFields" [style]="{\'width\':\'100%\'}">\n      <ng-template let-tipoUT pTemplate="item">\n          <div class="ui-helper-clearfix" style="position: relative;height: 25px;">\n            <i [ngClass]="getUtTypeIcon(tipoUT.value)"></i>\n            <div style="font-size:14px;float:right;margin-top:4px">{{tipoUT.label}}</div>\n          </div>\n        </ng-template>\n    </p-dropdown>\n    </div>\n    <div class="tn-ut__field">\n      <label>Estado</label>\n      <p-dropdown [options]="estadosDisponibles" [(ngModel)]="model.Estado" filter="true" [style]="{\'width\':\'100%\'}"></p-dropdown>\n    </div>\n    <button pButton type="button" label="Buscar" (click)="onSearch()"></button>\n  </div>\n</div>\n',providers:[te,ne]}))(se=function(){function UtSearchComponent(e,t,i,o,n,r,s,l){a(this,UtSearchComponent),this.model={NombreUT:"",IdProducto:void 0,IdSprint:void 0,IdProyecto:void 0,IdTipoUT:void 0,Estado:void 0},this.selectableFields=!1,this.uts=void 0,this.getUtTypeIcon=function(e){return le[e]},this.getUtLink=function(e){return"/uts/"+e.IdUT},this.getActividad=function(e){return pe[e]},this._utSearchService=t,this._activitiesService=i,this._breadcrumbService=e,this._getProductosService=o,this._getProyectosService=n,this._getSprintsService=r,this._getTiposUTService=s,this._notificationsService=l}return u(UtSearchComponent,[{key:"ngOnInit",value:function ngOnInit(){this._getProductos(),this._getActividades(),this._parseEstados()}},{key:"onSearch",value:function onSearch(){var e=this;this._utSearchSubscription=this._utSearchService.search(this.model).subscribe(function(t){e.uts=t},function(t){e._notificationsService.error("Error al buscar",t)})}},{key:"_getProductos",value:function _getProductos(){var e=this;this._getProductosSubscription=this._getProductosService.get().subscribe(function(t){e._parseProductos(t),e.model.IdProducto="ALL",e.clearFieldsAndPutAll()},function(t){return e._notificationService.error("No se han podido obtener los productos",t)})}},{key:"productoChange",value:function productoChange(){"ALL"==this.model.IdProducto?(this.selectableFields=!1,this.clearFieldsAndPutAll()):(this.selectableFields=!0,this._getProyectos(this.model.IdProducto),this._getSprints(this.model.IdProducto),this._getTiposUT(this.model.IdProducto),this.selectDefaultValues())}},{key:"clearFieldsAndPutAll",value:function clearFieldsAndPutAll(){this.proyectosDisponibles=[],this.proyectosDisponibles.push({label:"ALL",value:"ALL"}),this.sprintsDisponibles=[],this.sprintsDisponibles.push({label:"ALL",value:"ALL"}),this.tiposDisponibles=[],this.tiposDisponibles.push({label:"ALL",value:"ALL"}),this.selectDefaultValues()}},{key:"selectDefaultValues",value:function selectDefaultValues(){this.model.IdProyecto="ALL",this.model.IdSprint="ALL",this.model.IdTipoUT="ALL"}},{key:"_parseProductos",value:function _parseProductos(e){this.productosDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdProducto}}),this.productosDisponibles.push({label:"ALL",value:"ALL"})}},{key:"_getProyectos",value:function _getProyectos(e){var t=this;ue[e]?this.productosDisponibles=ue[e]:this._getProyectoSubscription=this._getProyectosService.get(e).subscribe(function(i){t._parseProyectos(i),ue[e]=t.proyectosDisponibles},function(e){return t._notificationService.error("No se han podido obtener los proyectos del producto",e)})}},{key:"_parseProyectos",value:function _parseProyectos(e){this.proyectosDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdProyecto}}),this.proyectosDisponibles.push({label:"<Sin Proyecto>",value:null}),this.proyectosDisponibles.push({label:"ALL",value:"ALL"})}},{key:"_getSprints",value:function _getSprints(e){var t=this;ce[e]?this.sprintsDisponibles=ce[e]:this._getSprintsSubscription=this._getSprintsService.get(e).subscribe(function(i){t._parseSprints(i),ce[e]=t.sprintsDisponibles},function(e){t._notificationService.error("No se han podido obtener los Sprints del producto",e)})}},{key:"_parseSprints",value:function _parseSprints(e){this.sprintsDisponibles=e.map(function(e){return{label:e.Nombre,value:e.IdVersion}}),this.sprintsDisponibles.push({label:"Backlog",value:null}),this.sprintsDisponibles.push({label:"ALL",value:"ALL"})}},{key:"_getTiposUT",value:function _getTiposUT(e){var t=this;de[e]?this.tiposDisponibles=de[e]:this._getTiposUTSubscription=this._getTiposUTService.get(e).subscribe(function(i){t._parseTiposUT(i),de[e]=t.tiposDisponibles},function(e){return t._notificationService.error("No se han podido obtener los tipos de UT",e)})}},{key:"_parseTiposUT",value:function _parseTiposUT(e){this.tiposDisponibles=e.map(function(e){return{label:""+e.Nombre,value:e.IdTipoUT}}),this.tiposDisponibles.push({label:"ALL",value:"ALL"})}},{key:"_parseEstados",value:function _parseEstados(){this.estadosDisponibles=ae,this.model.Estado="ALL"}},{key:"_getActividades",value:function _getActividades(){var e=this;this._getActividadesSubscription=this._activitiesService.getActivities().subscribe(function(e){e.map(function(e){pe[e.IdActividad]=e.Nombre})},function(t){return e._notificationService.error("No se han podido obtener las actividades",t)})}},{key:"ngOnDestroy",value:function ngOnDestroy(){this._breadcrumbService.removeItems(1),this._utSearchSubscription&&!this._utSearchSubscription.closed&&this._utSearchSubscription.unsubscribe(),this._getActividadesSubscription&&!this._getActividadesSubscription.closed&&this._getActividadesSubscription.unsubscribe(),this._getProductosSubscription&&!this._getProductosSubscription.closed&&this._getProductosSubscription.unsubscribe(),this._getProyectoSubscription&&!this._getProyectoSubscription.closed&&this._getProyectoSubscription.unsubscribe(),this._getSprintsSubscription&&!this._getSprintsSubscription.closed&&this._getSprintsSubscription.unsubscribe(),this._getTiposUTSubscription&&!this._getTiposUTSubscription.closed&&this._getTiposUTSubscription.unsubscribe()}}]),UtSearchComponent}())||se;Reflect.defineMetadata("design:paramtypes",[o.BreadcrumbService,te,ne,U,P,C,M,r.NotificationsService],he);var fe,be,ve,_e,me=(fe=t.NgModule({imports:[i.RouterModule.forChild([{path:"",component:c},{path:"add",component:B},{path:":id",component:_}])],exports:[i.RouterModule]}))(be=function UtRoutingModule(){a(this,UtRoutingModule)})||be,ge=(ve=t.NgModule({imports:[r.TuneUpCoreModule,me],declarations:[c,_,B,X,he],providers:[h,U,P,C,M]}))(_e=function UtModule(){a(this,UtModule)})||_e;e.UtModule=ge,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=tune-up.ut.umd.js.map
