function _defineProperties(n,e){for(var l=0;l<e.length;l++){var o=e[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"8wA/":function(n,e,l){"use strict";l.r(e);var o=l("8Y7J"),t=function n(){_classCallCheck(this,n)},i=l("pMnS"),a=l("MKJQ"),r=l("sZkV"),s=l("mrSG"),c=l("on2l"),u=function(){function n(e,l,o){_classCallCheck(this,n),this.usuarioservicio=e,this.ruta=l,this.alertController=o}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"experiencia",value:function(n){this.usuarioservicio.experiencia(n),this.ruta.navigateRoot(["/lugar-ejercicios"])}},{key:"atras",value:function(){this.ruta.navigateRoot(["/objetivo"])}},{key:"testear",value:function(){this.alerta()}},{key:"alerta",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"La sesi\xf3n ha sido pausada",cssClass:"customMensaje1",buttons:[{text:"Continuar",role:"cancel",cssClass:"cancelButton",handler:function(n){console.log("nop2")}},{text:"Finalizar",cssClass:"confirmButton",handler:function(){l.confirmarSalida()}}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"confirmarSalida",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Si finalizas aqu\xed no contar\xe1 la sesi\xf3n \xbfseguro quieres finalizar?",cssClass:"customMensaje1",buttons:[{text:"No",role:"cancel",cssClass:"cancelButton",handler:function(n){console.log("nop")}},{text:"Si",cssClass:"confirmButton",handler:function(){console.log("nop")}}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),n}(),d=o.ob({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}*[_ngcontent-%COMP%]{box-sizing:border-box}ion-content[_ngcontent-%COMP%]{--background:#fcfcfc}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.contenedor[_ngcontent-%COMP%]{padding-top:20px!important;text-align:center;overflow:hidden}.piepagina[_ngcontent-%COMP%]{margin:0 auto}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:25px}.color-tarjeta[_ngcontent-%COMP%]{background-color:#000}ion-card[_ngcontent-%COMP%]{color:#fff;padding:0!important;margin:0 auto!important;border-radius:64px!important;width:88%;word-wrap:break-word}ion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:17px!important;padding:2px!important}ion-card[_ngcontent-%COMP%]:hover{-webkit-transition:.1s;transition:.1s;opacity:.5}ion-col[_ngcontent-%COMP%]{margin-bottom:8px!important}.my-grid[_ngcontent-%COMP%]{height:100%!important}.parent-row[_ngcontent-%COMP%]{height:100%!important;-webkit-box-align:center!important;align-items:center!important;-webkit-box-pack:center!important;justify-content:center!important}ion-icon[_ngcontent-%COMP%]{font-size:23px!important}ion-icon[_ngcontent-%COMP%]:hover{opacity:.7}"]],data:{}});function b(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,3,"ion-header",[["class","ion-no-border"]],null,null,null,a.lb,a.t)),o.pb(1,49152,null,0,r.C,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(n()(),o.qb(2,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(n()(),o.qb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),o.qb(4,0,null,null,32,"ion-content",[["slot","fixed"]],null,null,null,a.gb,a.o)),o.pb(5,49152,null,0,r.v,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(n()(),o.qb(6,0,null,0,24,"div",[["class","contenedor animated fadeInLeft delay-1s"]],null,null,null,null,null)),(n()(),o.qb(7,0,null,null,1,"h2",[["class","titulo"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["\xbfC\xfaal es tu experiencia?"])),(n()(),o.qb(9,0,null,null,21,"ion-grid",[["class","my-grid"]],null,null,null,a.kb,a.s)),o.pb(10,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(n()(),o.qb(11,0,null,0,19,"ion-row",[["class","parent-row"]],null,null,null,a.ub,a.C)),o.pb(12,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.qb(13,0,null,0,5,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),o.pb(14,49152,null,0,r.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.qb(15,0,null,0,3,"ion-card",[["class","color-tarjeta"]],null,[[null,"click"]],(function(n,e,l){var o=!0;return"click"===e&&(o=!1!==n.component.testear()&&o),o}),a.cb,a.g)),o.pb(16,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(n()(),o.qb(17,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Sin experiencia"])),(n()(),o.qb(19,0,null,0,5,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),o.pb(20,49152,null,0,r.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.qb(21,0,null,0,3,"ion-card",[["class","color-tarjeta"]],null,[[null,"click"]],(function(n,e,l){var o=!0;return"click"===e&&(o=!1!==n.component.experiencia(1)&&o),o}),a.cb,a.g)),o.pb(22,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(n()(),o.qb(23,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["M\xe1s de 6 meses"])),(n()(),o.qb(25,0,null,0,5,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),o.pb(26,49152,null,0,r.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.qb(27,0,null,0,3,"ion-card",[["class","color-tarjeta"]],null,[[null,"click"]],(function(n,e,l){var o=!0;return"click"===e&&(o=!1!==n.component.experiencia(2)&&o),o}),a.cb,a.g)),o.pb(28,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(n()(),o.qb(29,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["M\xe1s de 2 a\xf1os"])),(n()(),o.qb(31,0,null,0,5,"ion-fab",[["class","animated fadeInUp delay-2s"],["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),o.pb(32,49152,null,0,r.x,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),o.qb(33,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(n,e,l){var o=!0;return"click"===e&&(o=!1!==n.component.atras()&&o),o}),a.hb,a.q)),o.pb(34,49152,null,0,r.y,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.qb(35,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,a.mb,a.u)),o.pb(36,49152,null,0,r.D,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,!0),n(e,5,0,!0),n(e,14,0,"12"),n(e,20,0,"12"),n(e,26,0,"12"),n(e,32,0,"center","bottom"),n(e,34,0,"danger"),n(e,36,0,"arrow-back-outline")}),null)}var p=o.mb("app-experiencia",u,(function(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-experiencia",[],null,null,null,b,d)),o.pb(1,114688,null,0,u,[c.a,r.Gb,r.b],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),h=l("SVse"),f=l("s7LF"),m=l("iInd"),g=function n(){_classCallCheck(this,n)};l.d(e,"ExperienciaPageModuleNgFactory",(function(){return v}));var v=o.nb(t,[],(function(n){return o.zb([o.Ab(512,o.j,o.Y,[[8,[i.a,p]],[3,o.j],o.v]),o.Ab(4608,h.m,h.l,[o.s,[2,h.w]]),o.Ab(4608,f.q,f.q,[]),o.Ab(4608,r.c,r.c,[o.x,o.g]),o.Ab(4608,r.Fb,r.Fb,[r.c,o.j,o.p]),o.Ab(4608,r.Lb,r.Lb,[r.c,o.j,o.p]),o.Ab(1073742336,h.b,h.b,[]),o.Ab(1073742336,f.p,f.p,[]),o.Ab(1073742336,f.e,f.e,[]),o.Ab(1073742336,r.Cb,r.Cb,[]),o.Ab(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),o.Ab(1073742336,g,g,[]),o.Ab(1073742336,t,t,[]),o.Ab(1024,m.k,(function(){return[[{path:"",component:u}]]}),[])])}))},on2l:function(n,e,l){"use strict";l.d(e,"a",(function(){return c}));var o=l("mrSG"),t=l("IheW"),i=l("Qmup"),a=l("AytR"),r=l("8Y7J"),s=a.a.url,c=function(){var n=function(){function n(e,l){_classCallCheck(this,n),this.service=e,this.http=l,this.datosPersonales={nombre:null,correo:null,genero:null,objetivo:null,nivelActividad:null,experiencia:null,lugarEntrenar:null,edad:null,estatura:null,peso:null,patologiaCardiaca:null,enfermedadPulmonar:null,hipertension:0,hipotension:0,desvanecimiento:0,diabete:0,dolorPecho:0,fatiga:0,noEnfermedad:0,insuficiencia_renal:0,password:null},this.condicionPersona={latidos:null,arritmia_corazon:null,ataque_corazon:null,operacion_corazon:null,enfermedad_corazon:null,presion_corazon:null,diabete_corazon:null,muerte_prematura:null,insuficiencia_renal:null,ninguna:null},this.selecionTestEjercicio={squat:!1,pressbanca:!1,legcurl:!1,legextension:!1}}return _createClass(n,[{key:"genero",value:function(n){this.datosPersonales.genero=n}},{key:"objetivo",value:function(n){this.datosPersonales.objetivo=n}},{key:"edad",value:function(n){this.datosPersonales.edad=n}},{key:"estatura",value:function(n){this.datosPersonales.estatura=n}},{key:"peso",value:function(n){this.datosPersonales.peso=n}},{key:"experiencia",value:function(n){this.datosPersonales.experiencia=n}},{key:"entrenar",value:function(n){this.datosPersonales.lugarEntrenar=n}},{key:"nivel",value:function(n){this.datosPersonales.nivelActividad=n}},{key:"enfermedades",value:function(n){this.datosPersonales.patologiaCardiaca=n.patologiaCardiaca,this.datosPersonales.enfermedadPulmonar=null==n.enfermedadPulmonar?0:n.enfermedadPulmonar,this.datosPersonales.hipertension=n.hipertension,this.datosPersonales.hipotension=n.hipotension,this.datosPersonales.desvanecimiento=n.desvanecimiento,this.datosPersonales.diabete=n.diabete,this.datosPersonales.dolorPecho=n.dolorPecho,this.datosPersonales.insuficiencia_renal=n.insuficiencia_renal,this.datosPersonales.noEnfermedad=n.noEnfermedad?1:0}},{key:"redesSociales",value:function(n){this.datosPersonales.nombre=n.first_name,this.datosPersonales.correo=n.email}},{key:"registrarEmail",value:function(n){this.datosPersonales.nombre=n.nombre,this.datosPersonales.password=n.contra,this.datosPersonales.correo=n.email}},{key:"latidos",value:function(n){this.condicionPersona.latidos=n}},{key:"condicionCorazon",value:function(n){this.condicionPersona.arritmia_corazon=n.arritmia_corazon?1:0,this.condicionPersona.ataque_corazon=n.ataque_corazon?1:0,this.condicionPersona.operacion_corazon=n.operacion_corazon?1:0,this.condicionPersona.enfermedad_corazon=n.enfermedad_corazon?1:0,this.condicionPersona.presion_corazon=n.presion_corazon?1:0,this.condicionPersona.diabete_corazon=n.diabete_corazon?1:0,this.condicionPersona.muerte_prematura=n.muerte_prematura?1:0,this.condicionPersona.insuficiencia_renal=n.insuficiencia_renal?1:0,this.condicionPersona.ninguna=n.ninguna?1:0}},{key:"TestSelecion",value:function(n){1===n&&(this.selecionTestEjercicio.pressbanca=!0,this.selecionTestEjercicio.legcurl=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!1),2===n&&(this.selecionTestEjercicio.pressbanca=!1,this.selecionTestEjercicio.legcurl=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!0),3===n&&(this.selecionTestEjercicio.legcurl=!0,this.selecionTestEjercicio.pressbanca=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!1),5===n&&(this.selecionTestEjercicio.legextension=!0)}},{key:"measurement_record",value:function(n){var e=this;return console.log("que datos se esta enviando ala ruta",n),new Promise((function(l,i){return o.__awaiter(e,void 0,void 0,regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.g,e.next=3,this.service.cargarToken();case 3:e.t1=e.sent,e.t2="Bearer "+e.t1,e.t3={Authorization:e.t2,"Content-Type":"application/json"},o=new e.t0(e.t3),this.http.post("".concat(s,"/auth/measurement_record"),n,{headers:o}).subscribe((function(n){console.log(n),l(!0)}),(function(n){console.log(n),i(!1)}));case 8:case"end":return e.stop()}}),e,this)})))})).catch((function(n){console.log("ERROR")}))}}]),n}();return n.ngInjectableDef=r.Pb({factory:function(){return new n(r.Qb(i.a),r.Qb(t.c))},token:n,providedIn:"root"}),n}()}}]);