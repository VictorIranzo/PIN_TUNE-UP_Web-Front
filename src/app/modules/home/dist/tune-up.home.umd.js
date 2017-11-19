!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("@angular/router"),require("@angular/common/http"),require("@tune-up/core")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/router","@angular/common/http","@tune-up/core"],t):t((e.tuneUp=e.tuneUp||{},e.tuneUp.home={}),e.tuneUp.vendor.ngCore,e.tuneUp.vendor.ngRouter,e.tuneUp.vendor.ngCommonHttp,e.tuneUp.app)}(this,function(e,t,n,i,r){"use strict";function __$styleInject(e,t){if("undefined"==typeof document)return t;e=e||"";var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");return i.type="text/css",n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),t}function _initDefineProp(e,t,n,i){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function _initDefineProp$1(e,t,n,i){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}!function(){function AwaitValue(e){this.value=e}function AsyncGenerator(e){function resume(t,n){try{var i=e[t](n),r=i.value;r instanceof AwaitValue?Promise.resolve(r.value).then(function(e){resume("next",e)},function(e){resume("throw",e)}):settle(i.done?"return":"normal",i.value)}catch(e){settle("throw",e)}}function settle(e,i){switch(e){case"return":t.resolve({value:i,done:!0});break;case"throw":t.reject(i);break;default:t.resolve({value:i,done:!1})}(t=t.next)?resume(t.key,t.arg):n=null}var t,n;this._invoke=function send(e,i){return new Promise(function(r,a){var o={key:e,arg:i,resolve:r,reject:a,next:null};n?n=n.next=o:(t=n=o,resume(e,i))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)}}();var a,o,s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(a=t.Injectable())(o=function(){function UtListService(e){s(this,UtListService),this._http=e,this._url="SeguimientosKanban"}return u(UtListService,[{key:"get",value:function get$$1(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ALL",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ALL",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ALL",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"ALL";return this._http.get(this._url+"?idActividad="+e+"&idAgente="+t+"&idProducto="+n+"&idVersion="+i+"&idProyecto="+r)}}]),UtListService}())||o;Reflect.defineMetadata("design:paramtypes",[i.HttpClient],l);var c,d,p=(c=t.Injectable())(d=function(){function AgentPicService(e){s(this,AgentPicService),this._http=e,this._url="Agentes/Imagen"}return u(AgentPicService,[{key:"get",value:function get$$1(e,t){return this._http.get(this._url+"/"+e+"/"+t,{responseType:"blob"})}}]),AgentPicService}())||d;Reflect.defineMetadata("design:paramtypes",[i.HttpClient],p);__$styleInject(".tn-home__utlist{margin:16px;z-index:0;overflow-x:overlay;text-align:center}@media (min-width:960px){.tn-home__utlist{width:65%}}.tn-home__kanbanresume{margin:16px}@media (min-width:960px){.tn-home__kanbanresume{width:35%;height:fit-content;position:sticky;top:85px}}.tn-home{display:flex;flex-direction:column}@media (min-width:960px){.tn-home{flex-direction:row}}",void 0);var f,h,m=(f=t.Component({selector:"tn-home",template:'<div class="tn-home">\r\n  <tn-kanban-resume class="tn-home__kanbanresume" [filterUts]="filterUts"></tn-kanban-resume>\r\n  <tn-ut-list class="tn-home__utlist" [uts]="utsToShow"></tn-ut-list>\r\n</div>\r\n',providers:[l]}))(h=function(){function HomeComponent(e,t){var n=this;s(this,HomeComponent),this.allUts=[],this.utsToShow=[],this.filterUts=function(e,t){n.utsToShow=n.allUts.filter(function(n){return("ALL"===e||n.IdActividad===e)&&("ALL"===t||n.Estado===t||"ACTIVE"===n.Estado&&"DOING"===t)})},this._utListService=e,this._notificationsService=t,this._getUts()}return u(HomeComponent,[{key:"_getUts",value:function _getUts(){var e=this;this._getUtsSubscription=this._utListService.get().subscribe(function(t){e.allUts=t,e.utsToShow=t},function(t){return e._notificationsService.error("No se pudieron obtener las UTs",t)})}},{key:"ngOnDestroy",value:function ngOnDestroy(){this._getUtsSubscription&&!this._getUtsSubscription.closed&&this._getUtsSubscription.unsubscribe()}}]),HomeComponent}())||h;Reflect.defineMetadata("design:paramtypes",[l,r.NotificationsService],m);var v,g,b,_,y=(v=t.NgModule({imports:[n.RouterModule.forChild([{path:"",component:m}])],exports:[n.RouterModule]}))(g=function HomeRoutingModule(){s(this,HomeRoutingModule)})||g,A=(b=t.Injectable())(_=function(){function KanbanActivitiesService(e){s(this,KanbanActivitiesService),this._http=e,this._url="ActividadesKanban2"}return u(KanbanActivitiesService,[{key:"get",value:function get$$1(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ALL",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ALL",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ALL",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"ALL";return this._http.get(this._url+"?idActividad="+e+"&idAgente="+t+"&idProducto="+n+"&idVersion="+i+"&idProyecto="+r)}}]),KanbanActivitiesService}())||_;Reflect.defineMetadata("design:paramtypes",[i.HttpClient],A);__$styleInject(".tn-home-kanban_resume--span{overflow:auto;display:block;padding:0!important;margin:0}",void 0);var S,w,L,k,U,x=(S=t.Component({selector:"tn-kanban-resume",template:'\x3c!-- TODO: Change color on click --\x3e\r\n<div class ="horizontal">\r\n    <p-dataTable [value]="kanbanActivities" [responsive]="true">\r\n        <p-column header="Actividad">            \r\n                <ng-template let-activity="rowData" let-i="rowIndex" pTemplate="body">\r\n                    <span (click)="filterKanbanActivies(activity.IdActividad, \'ALL\')" class="tn-home-kanban_resume--span">{{activity.NombreActividad}}</span>\r\n                </ng-template>\r\n            </p-column>       \r\n        <p-column header="To Do" [style]="{\'width\':\'20%\'}">            \r\n            <ng-template let-activity="rowData" let-i="rowIndex" pTemplate="body">\r\n                <span (click)="filterKanbanActivies(activity.IdActividad, \'TO DO\')" class="tn-home-kanban_resume--span">{{activity.NumSeguimientosPendiente}}</span>\r\n            </ng-template>\r\n        </p-column>   \r\n        <p-column header="Doing" [style]="{\'width\':\'20%\'}">            \r\n            <ng-template let-activity="rowData" let-i="rowIndex" pTemplate="body" >\r\n                <span (click)="filterKanbanActivies(activity.IdActividad, \'DOING\')" class="tn-home-kanban_resume--span">{{activity.NumSeguimientosProgreso}}</span>\r\n            </ng-template>\r\n        </p-column>                \r\n    </p-dataTable>\r\n</div>\r\n',providers:[A]}),w=t.Input(),S((k=function(){function KanbanResumeComponent(e,t){s(this,KanbanResumeComponent),this.kanbanActivities=[],this.selectedActivity=void 0,_initDefineProp(this,"filterUts",U,this),this._activitiesService=e,this._notificationsService=t,this._getKanbanActivities()}return u(KanbanResumeComponent,[{key:"_getKanbanActivities",value:function _getKanbanActivities(){var e=this;this._getActivitiesSubscription=this._activitiesService.get().subscribe(function(t){e.kanbanActivities=t},function(t){return e._notificationsService.error("No se pudieron obtener las actividades del Kanban Resumido",t)})}},{key:"filterKanbanActivies",value:function filterKanbanActivies(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ALL";-1==e&&(e="ALL"),this.filterUts(e,t)}},{key:"ngOnDestroy",value:function ngOnDestroy(){this._getActivitiesSubscription&&!this._getActivitiesSubscription.closed&&this._getActivitiesSubscription.unsubscribe()}}]),KanbanResumeComponent}(),U=function _applyDecoratedDescriptor(e,t,n,i,r){var a={};return Object.keys(i).forEach(function(e){a[e]=i[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,i){return i(e,t,n)||n},a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}(k.prototype,"filterUts",[w],{enumerable:!0,initializer:function initializer(){return this.filterUts}}),L=k))||L);Reflect.defineMetadata("design:paramtypes",[A,r.NotificationsService],x);__$styleInject(".tn-home__utlist__searchbar{padding:16px;border-bottom:0}.tn_home__utlist__searchbar__icon{margin-top:4px;margin-right:8px}.tn-home__utlist__searchbar__input{width:100%}.tn-home__utlist__agent__pic{width:30px;height:30px}",void 0);var I,T,P,C,z,D={1:"fa fa-star",2:"fa fa-bug",3:"fa fa-plus-circle",4:"fa fa-puzzle-piece"},O={1:"fa fa-arrow-up",2:"fa fa-repeat",3:"fa fa-cog",4:"fa fa-undo",5:"fa fa-refresh"},j={},K=(I=t.Component({selector:"tn-ut-list",template:'\x3c!-- TODO: add placeholders and make global filter work with strings in place of ids --\x3e\r\n<div class="ui-widget-header none horizontal tn-home__utlist__searchbar">\r\n  <i class="fa fa-search none tn_home__utlist__searchbar__icon"></i>\r\n  <input #gb type="text" pInputText size="50" class="tn-home__utlist__searchbar__input" placeholder="Búsqueda global">\r\n</div>\r\n<p-dataTable [value]="uts" [rows]="20" [paginator]="true" [pageLinks]="5" [sortMode]="multiple" [globalFilter]="gb"\r\n  reorderableColumns="true" [responsive]="true">\r\n  <p-column [style]="{\'width\':\'10%\'}" field="Estado" header="Estado" [sortable]="true">\r\n    <ng-template let-ut="rowData" pTemplate="body">\r\n      <span class="ui-button-icon" [ngClass]="getUtTypeIcon(ut)"></span>\r\n      <span class="ui-button-icon" [ngClass]="getStateIcon(ut)"></span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column [style]="{\'width\':\'10%\'}" field="IdAgente" header="Agente" [sortable]="true">\r\n    <ng-template let-ut="rowData" pTemplate="body">\r\n      <img *ngIf="ut.IdAgente && ut.IdAgente !== -1" class="tn-home__utlist__agent__pic" [src]="getAgentPic(ut) | safeHtml">\r\n      <i *ngIf="ut.IdAgente === -1" class="fa fa-2x fa-users"></i>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column [style]="{\'width\':\'30%\'}" field="NombreProducto" header="Producto/Servicio" [sortable]="true"></p-column>\r\n  <p-column [style]="{\'width\':\'10%\'}" field="NombreVersion" header="Sprint" [sortable]="true"></p-column>\r\n  <p-column [style]="{\'width\':\'10%\'}" field="IdUT" header="Código" [sortable]="true">\r\n    <ng-template let-ut="rowData" pTemplate="body">\r\n      <span class="ui-cell-data" [routerLink]="getUtLink(ut)">{{ut.IdUT}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column [style]="{\'width\':\'30%\'}" field="NombreUT" header="Nombre" [sortable]="true"></p-column>\r\n</p-dataTable>\r\n',providers:[p]}),T=t.Input(),I((C=function UtListComponent(e,t,n){var i=this;s(this,UtListComponent),_initDefineProp$1(this,"uts",z,this),this.getAgentPic=function(e){var t=e.IdAgente;if(t){var n=i._agentService.getSiteId();return j[t]||i._agentPicService.get(t,n).subscribe(function(e){j[t]=URL.createObjectURL(e)}),j[t]||""}return""},this.getUtTypeIcon=function(e){return D[e.IdTipoUT]},this.getStateIcon=function(e){return O[e.IdTipoSeguimiento]},this.getUtLink=function(e){return"/uts/"+e.IdUT},this._agentPicService=e,this._notificationsService=t,this._agentService=n},z=function _applyDecoratedDescriptor$1(e,t,n,i,r){var a={};return Object.keys(i).forEach(function(e){a[e]=i[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,i){return i(e,t,n)||n},a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}(C.prototype,"uts",[T],{enumerable:!0,initializer:function initializer(){return this.uts}}),P=C))||P);Reflect.defineMetadata("design:paramtypes",[p,r.NotificationsService,r.AgentService],K);var M,N,R=(M=t.NgModule({imports:[r.TuneUpCoreModule,y],declarations:[m,x,K]}))(N=function HomeModule(){s(this,HomeModule)})||N;e.HomeModule=R,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=tune-up.home.umd.js.map
