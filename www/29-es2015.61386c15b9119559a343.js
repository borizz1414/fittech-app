(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{klWc:function(l,n,e){"use strict";e.r(n);var o=e("8Y7J");class i{}var u=e("pMnS"),s=e("MKJQ"),t=e("sZkV"),a=e("SVse"),r=e("s7LF"),c=e("mrSG"),d=e("on2l"),b=e("Qmup");class h{constructor(l,n,e,o){this.apiService=l,this.usuarioservicio=n,this.route=e,this.picker=o,this.power={valor:null}}ionViewWillEnter(){this.usuarioservicio.selecionTestEjercicio.pressbanca&&(this.nombre="Press banca",this.id="banca",this.identificador=1,document.getElementById("banca").classList.add("realizado")),this.usuarioservicio.selecionTestEjercicio.squat&&(this.nombre="Squat",this.id="squat",this.identificador=3,document.getElementById("squat").classList.add("realizado")),this.usuarioservicio.selecionTestEjercicio.legcurl&&(this.nombre="Leg curl",this.id="curl",this.identificador=2,document.getElementById("curl").classList.add("realizado")),this.usuarioservicio.selecionTestEjercicio.legextension&&(this.nombre="Leg extension",this.id="extension",this.identificador=4,document.getElementById("squat").classList.add("realizado"))}ngOnInit(){}peso(l){console.log(l.detail.value)}siguiente(){return c.__awaiter(this,void 0,void 0,(function*(){null!=this.power.valor&&0!=this.power.valor&&(1==this.identificador&&(this.apiService.recolectarTestFuerza(this.power.valor,this.identificador),this.route.navigateByUrl("/test-fuerza-categoria")),2==this.identificador&&(this.apiService.recolectarTestFuerza(this.power.valor,this.identificador),this.route.navigateByUrl("/test-fuerza-categoria")),3==this.identificador&&(this.apiService.recolectarTestFuerza(this.power.valor,this.identificador),this.route.navigateByUrl("/test-fuerza-categoria")),4==this.identificador&&(this.apiService.recolectarTestFuerza(this.power.valor,this.identificador),this.route.navigateByUrl("/test-fuerza-categoria")))}))}}var p=e("iInd"),g=o.ob({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%]{border:1px solid grey;border-radius:8px;width:80%;margin:0 auto}.centered2[_ngcontent-%COMP%]{opacity:.7;text-align:center;color:#fff;position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ion-segment-button[_ngcontent-%COMP%]{border-radius:12px}"]],data:{}});function f(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,0,"img",[["src","assets/img/pressbanca.jpg"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,2,"ion-button",[["class","centered2"],["color","dark"],["shape","round"]],null,null,null,s.W,s.e)),o.pb(3,49152,null,0,t.l,[o.h,o.k,o.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),o.Jb(-1,0,["Ver video"]))],(function(l,n){l(n,3,0,"dark","round")}),null)}function m(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,0,"img",[["src","assets/img/squat.jpg"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,2,"ion-button",[["class","centered2"],["color","dark"],["shape","round"]],null,null,null,s.W,s.e)),o.pb(3,49152,null,0,t.l,[o.h,o.k,o.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),o.Jb(-1,0,["Ver video"]))],(function(l,n){l(n,3,0,"dark","round")}),null)}function v(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,0,"img",[["src","assets/img/legcurl.jpg"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,2,"ion-button",[["class","centered2"],["color","dark"],["shape","round"]],null,null,null,s.W,s.e)),o.pb(3,49152,null,0,t.l,[o.h,o.k,o.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),o.Jb(-1,0,["Ver video"]))],(function(l,n){l(n,3,0,"dark","round")}),null)}function k(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,0,"img",[["src","assets/img/legextension.jpg"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,2,"ion-button",[["class","centered2"],["color","dark"],["shape","round"]],null,null,null,s.W,s.e)),o.pb(3,49152,null,0,t.l,[o.h,o.k,o.x],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),o.Jb(-1,0,["Ver video"]))],(function(l,n){l(n,3,0,"dark","round")}),null)}function q(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,11,"ion-header",[["class","ion-no-border"]],null,null,null,s.lb,s.t)),o.pb(1,49152,null,0,t.C,[o.h,o.k,o.x],null,null),(l()(),o.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,s.Jb,s.R)),o.pb(3,49152,null,0,t.Ab,[o.h,o.k,o.x],null,null),(l()(),o.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.X,s.f)),o.pb(5,49152,null,0,t.m,[o.h,o.k,o.x],null,null),(l()(),o.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","/test-fuerza-menu"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==o.Cb(l,8).onClick(e)&&i),i}),s.U,s.c)),o.pb(7,49152,null,0,t.h,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"]},null),o.pb(8,16384,null,0,t.i,[[2,t.gb],t.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.qb(9,0,null,0,2,"ion-title",[["mode","ios"]],null,null,null,s.Hb,s.P)),o.pb(10,49152,null,0,t.yb,[o.h,o.k,o.x],null,null),(l()(),o.Jb(11,0,[" "," "])),(l()(),o.qb(12,0,null,null,60,"ion-content",[],null,null,null,s.gb,s.o)),o.pb(13,49152,null,0,t.v,[o.h,o.k,o.x],null,null),(l()(),o.qb(14,0,null,0,13,"ion-grid",[],null,null,null,s.kb,s.s)),o.pb(15,49152,null,0,t.B,[o.h,o.k,o.x],null,null),(l()(),o.qb(16,0,null,0,11,"ion-row",[],null,null,null,s.ub,s.C)),o.pb(17,49152,null,0,t.hb,[o.h,o.k,o.x],null,null),(l()(),o.qb(18,0,null,0,9,"ion-col",[["size","12"]],null,null,null,s.fb,s.n)),o.pb(19,49152,null,0,t.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.fb(16777216,null,0,1,null,f)),o.pb(21,16384,null,0,a.k,[o.N,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,0,1,null,m)),o.pb(23,16384,null,0,a.k,[o.N,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,0,1,null,v)),o.pb(25,16384,null,0,a.k,[o.N,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.fb(16777216,null,0,1,null,k)),o.pb(27,16384,null,0,a.k,[o.N,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(28,0,null,0,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),o.Jb(29,null,["",""])),(l()(),o.qb(30,0,null,0,1,"div",[["class","ion-padding ion-text-center"]],null,null,null,null,null)),(l()(),o.Jb(-1,null,[" Por favor introduce, cuanto fue el peso que usaste y confirme su unidad. "])),(l()(),o.qb(32,0,null,0,29,"ion-grid",[["class","ion-padding"]],null,null,null,s.kb,s.s)),o.pb(33,49152,null,0,t.B,[o.h,o.k,o.x],null,null),(l()(),o.qb(34,0,null,0,27,"ion-row",[["class","ion-justify-content-center"]],null,null,null,s.ub,s.C)),o.pb(35,49152,null,0,t.hb,[o.h,o.k,o.x],null,null),(l()(),o.qb(36,0,null,0,9,"ion-col",[["class","ion-margin-bottom"],["size","12"]],null,null,null,s.fb,s.n)),o.pb(37,49152,null,0,t.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.qb(38,0,null,0,7,"div",[],null,null,null,null,null)),(l()(),o.qb(39,0,null,null,6,"ion-input",[["name","valor"],["placeholder","Kg/Lb"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0,u=l.component;return"ionBlur"===n&&(i=!1!==o.Cb(l,40)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==o.Cb(l,40)._handleInputEvent(e.target)&&i),"ngModelChange"===n&&(i=!1!==(u.power.valor=e)&&i),i}),s.nb,s.v)),o.pb(40,16384,null,0,t.Nb,[o.k],null,null),o.Gb(1024,null,r.h,(function(l){return[l]}),[t.Nb]),o.pb(42,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,r.i,null,[r.l]),o.pb(44,16384,null,0,r.j,[[4,r.i]],null,null),o.pb(45,49152,null,0,t.H,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),o.qb(46,0,null,0,15,"ion-col",[["size","8"]],null,null,null,s.fb,s.n)),o.pb(47,49152,null,0,t.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.qb(48,0,null,0,13,"ion-segment",[["mode","ios"],["value","kilos"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var i=!0,u=l.component;return"ionBlur"===n&&(i=!1!==o.Cb(l,51)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==o.Cb(l,51)._handleChangeEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.peso(e)&&i),i}),s.xb,s.E)),o.Gb(5120,null,r.h,(function(l){return[l]}),[t.Mb]),o.pb(50,49152,null,0,t.jb,[o.h,o.k,o.x],{mode:[0,"mode"],value:[1,"value"]},null),o.pb(51,16384,null,0,t.Mb,[o.k],null,null),(l()(),o.qb(52,0,null,0,4,"ion-segment-button",[["value","kilos"]],null,null,null,s.wb,s.F)),o.pb(53,49152,null,0,t.kb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.qb(54,0,null,0,2,"ion-label",[],null,null,null,s.qb,s.y)),o.pb(55,49152,null,0,t.O,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Kg"])),(l()(),o.qb(57,0,null,0,4,"ion-segment-button",[["value","libras"]],null,null,null,s.wb,s.F)),o.pb(58,49152,null,0,t.kb,[o.h,o.k,o.x],{value:[0,"value"]},null),(l()(),o.qb(59,0,null,0,2,"ion-label",[],null,null,null,s.qb,s.y)),o.pb(60,49152,null,0,t.O,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Libras"])),(l()(),o.qb(62,0,null,0,10,"ion-grid",[["class","ion-padding"]],null,null,null,s.kb,s.s)),o.pb(63,49152,null,0,t.B,[o.h,o.k,o.x],null,null),(l()(),o.qb(64,0,null,0,8,"ion-row",[],null,null,null,s.ub,s.C)),o.pb(65,49152,null,0,t.hb,[o.h,o.k,o.x],null,null),(l()(),o.qb(66,0,null,0,6,"ion-col",[["size","12"]],null,null,null,s.fb,s.n)),o.pb(67,49152,null,0,t.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.qb(68,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),o.qb(69,0,null,null,3,"ion-card",[["color","dark"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.siguiente()&&o),o}),s.cb,s.g)),o.pb(70,49152,null,0,t.n,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.qb(71,0,null,0,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Confirmar"]))],(function(l,n){var e=n.component;l(n,7,0,"/test-fuerza-menu"),l(n,8,0,"/test-fuerza-menu"),l(n,19,0,"12"),l(n,21,0,"banca"==e.id),l(n,23,0,"squat"==e.id),l(n,25,0,"curl"==e.id),l(n,27,0,"extension"==e.id),l(n,37,0,"12"),l(n,42,0,"valor",e.power.valor),l(n,45,0,"valor","Kg/Lb","text"),l(n,47,0,"8"),l(n,50,0,"ios","kilos"),l(n,53,0,"kilos"),l(n,58,0,"libras"),l(n,67,0,"12"),l(n,70,0,"dark")}),(function(l,n){var e=n.component;l(n,11,0,e.nombre),l(n,29,0,e.nombre),l(n,39,0,o.Cb(n,44).ngClassUntouched,o.Cb(n,44).ngClassTouched,o.Cb(n,44).ngClassPristine,o.Cb(n,44).ngClassDirty,o.Cb(n,44).ngClassValid,o.Cb(n,44).ngClassInvalid,o.Cb(n,44).ngClassPending)}))}function P(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,1,"app-test-fuerza-pasos4",[],null,null,null,q,g)),o.pb(1,114688,null,0,h,[b.a,d.a,p.m,t.Jb],null,null)],(function(l,n){l(n,1,0)}),null)}var x=o.mb("app-test-fuerza-pasos4",h,P,{},{},[]);class z{}e.d(n,"TestFuerzaPasos4PageModuleNgFactory",(function(){return C}));var C=o.nb(i,[],(function(l){return o.zb([o.Ab(512,o.j,o.Y,[[8,[u.a,x]],[3,o.j],o.v]),o.Ab(4608,a.m,a.l,[o.s,[2,a.w]]),o.Ab(4608,r.q,r.q,[]),o.Ab(4608,t.c,t.c,[o.x,o.g]),o.Ab(4608,t.Fb,t.Fb,[t.c,o.j,o.p]),o.Ab(4608,t.Lb,t.Lb,[t.c,o.j,o.p]),o.Ab(1073742336,a.b,a.b,[]),o.Ab(1073742336,r.p,r.p,[]),o.Ab(1073742336,r.e,r.e,[]),o.Ab(1073742336,t.Cb,t.Cb,[]),o.Ab(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),o.Ab(1073742336,z,z,[]),o.Ab(1073742336,i,i,[]),o.Ab(1024,p.k,(function(){return[[{path:"",component:h}]]}),[])])}))},on2l:function(l,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("mrSG"),i=e("IheW"),u=e("Qmup"),s=e("AytR"),t=e("8Y7J");const a=s.a.url;let r=(()=>{class l{constructor(l,n){this.service=l,this.http=n,this.datosPersonales={nombre:null,correo:null,genero:null,objetivo:null,nivelActividad:null,experiencia:null,lugarEntrenar:null,edad:null,estatura:null,peso:null,patologiaCardiaca:null,enfermedadPulmonar:null,hipertension:0,hipotension:0,desvanecimiento:0,diabete:0,dolorPecho:0,fatiga:0,noEnfermedad:0,insuficiencia_renal:0,password:null},this.condicionPersona={latidos:null,arritmia_corazon:null,ataque_corazon:null,operacion_corazon:null,enfermedad_corazon:null,presion_corazon:null,diabete_corazon:null,muerte_prematura:null,insuficiencia_renal:null,ninguna:null},this.selecionTestEjercicio={squat:!1,pressbanca:!1,legcurl:!1,legextension:!1}}genero(l){this.datosPersonales.genero=l}objetivo(l){this.datosPersonales.objetivo=l}edad(l){this.datosPersonales.edad=l}estatura(l){this.datosPersonales.estatura=l}peso(l){this.datosPersonales.peso=l}experiencia(l){this.datosPersonales.experiencia=l}entrenar(l){this.datosPersonales.lugarEntrenar=l}nivel(l){this.datosPersonales.nivelActividad=l}enfermedades(l){this.datosPersonales.patologiaCardiaca=l.patologiaCardiaca,this.datosPersonales.enfermedadPulmonar=null==l.enfermedadPulmonar?0:l.enfermedadPulmonar,this.datosPersonales.hipertension=l.hipertension,this.datosPersonales.hipotension=l.hipotension,this.datosPersonales.desvanecimiento=l.desvanecimiento,this.datosPersonales.diabete=l.diabete,this.datosPersonales.dolorPecho=l.dolorPecho,this.datosPersonales.insuficiencia_renal=l.insuficiencia_renal,this.datosPersonales.noEnfermedad=l.noEnfermedad?1:0}redesSociales(l){this.datosPersonales.nombre=l.first_name,this.datosPersonales.correo=l.email}registrarEmail(l){this.datosPersonales.nombre=l.nombre,this.datosPersonales.password=l.contra,this.datosPersonales.correo=l.email}latidos(l){this.condicionPersona.latidos=l}condicionCorazon(l){this.condicionPersona.arritmia_corazon=l.arritmia_corazon?1:0,this.condicionPersona.ataque_corazon=l.ataque_corazon?1:0,this.condicionPersona.operacion_corazon=l.operacion_corazon?1:0,this.condicionPersona.enfermedad_corazon=l.enfermedad_corazon?1:0,this.condicionPersona.presion_corazon=l.presion_corazon?1:0,this.condicionPersona.diabete_corazon=l.diabete_corazon?1:0,this.condicionPersona.muerte_prematura=l.muerte_prematura?1:0,this.condicionPersona.insuficiencia_renal=l.insuficiencia_renal?1:0,this.condicionPersona.ninguna=l.ninguna?1:0}TestSelecion(l){1===l&&(this.selecionTestEjercicio.pressbanca=!0,this.selecionTestEjercicio.legcurl=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!1),2===l&&(this.selecionTestEjercicio.pressbanca=!1,this.selecionTestEjercicio.legcurl=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!0),3===l&&(this.selecionTestEjercicio.legcurl=!0,this.selecionTestEjercicio.pressbanca=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!1),5===l&&(this.selecionTestEjercicio.legextension=!0)}measurement_record(l){return console.log("que datos se esta enviando ala ruta",l),new Promise((n,e)=>o.__awaiter(this,void 0,void 0,(function*(){const o=new i.g({Authorization:"Bearer "+(yield this.service.cargarToken()),"Content-Type":"application/json"});this.http.post(`${a}/auth/measurement_record`,l,{headers:o}).subscribe(l=>{console.log(l),n(!0)},l=>{console.log(l),e(!1)})}))).catch(l=>{console.log("ERROR")})}}return l.ngInjectableDef=t.Pb({factory:function(){return new l(t.Qb(u.a),t.Qb(i.c))},token:l,providedIn:"root"}),l})()}}]);