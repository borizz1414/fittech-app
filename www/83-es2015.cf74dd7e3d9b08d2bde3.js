(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{d8Fe:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J");class i{}var t=e("pMnS"),u=e("MKJQ"),o=e("sZkV"),r=e("s7LF"),s=e("mrSG"),c=e("fz3y"),d=e("Qmup");class m{constructor(l,n,e){this.mensajeservice=l,this.ApiService=n,this.ruta=e,this.medidasCorporales={min_cintura:null,max_cintura:null,cadera:null,cuello:null,muslo_derecho:null,muslo_izquierdo:null,brazo_derecho:null,brazo_izquierdo:null,pantorrilla_derecho:null,pantorrilla_izquierda:null,pecho:null},this.habilitar=!1,this.elementoValidar={elemenUno:!1,elemenDos:!1,elemenTre:!1,elemenCua:!1,elemenCin:!1,elemenSei:!1,elemenSie:!1,elemenOch:!1,elemenNue:!1,elemenDie:!1,elemenOnc:!1}}ngOnInit(){}finalizar(){return s.__awaiter(this,void 0,void 0,(function*(){if(this.elementoValidar.elemenUno&&this.elementoValidar.elemenDos&&this.elementoValidar.elemenTre&&this.elementoValidar.elemenCua&&this.elementoValidar.elemenCin&&this.elementoValidar.elemenSei&&this.elementoValidar.elemenSie&&this.elementoValidar.elemenOch&&this.elementoValidar.elemenNue&&this.elementoValidar.elemenDie&&this.elementoValidar.elemenOnc){if(!(yield this.ApiService.cinturacadera(this.medidasCorporales)))return;this.ruta.navigateRoot(["/tabs"])}else this.mensajeservice.alertaInformatica("Todo los campos deben ser obligatorio, y su valor mayor a 0 y menor a 4 digitos")}))}validar(l,n){l.target.value<=0||l.target.value.length<=1||l.target.value.length>4?(console.log("error "),this.asignarValidacionErronea(n),console.log(this.elementoValidar)):this.asignarValidacion(n)}asignarValidacion(l){1==l&&(this.elementoValidar.elemenUno=!0),2==l&&(this.elementoValidar.elemenDos=!0),3==l&&(this.elementoValidar.elemenTre=!0),4==l&&(this.elementoValidar.elemenCua=!0),5==l&&(this.elementoValidar.elemenCin=!0),6==l&&(this.elementoValidar.elemenSei=!0),7==l&&(this.elementoValidar.elemenSie=!0),8==l&&(this.elementoValidar.elemenOch=!0),9==l&&(this.elementoValidar.elemenNue=!0),10==l&&(this.elementoValidar.elemenDie=!0),11==l&&(this.elementoValidar.elemenOnc=!0)}asignarValidacionErronea(l){1==l&&(this.elementoValidar.elemenUno=!1),2==l&&(this.elementoValidar.elemenDos=!1),3==l&&(this.elementoValidar.elemenTre=!1),4==l&&(this.elementoValidar.elemenCua=!1),5==l&&(this.elementoValidar.elemenCin=!1),6==l&&(this.elementoValidar.elemenSei=!1),7==l&&(this.elementoValidar.elemenSie=!1),8==l&&(this.elementoValidar.elemenOch=!1),9==l&&(this.elementoValidar.elemenNue=!1),10==l&&(this.elementoValidar.elemenDie=!1),11==l&&(this.elementoValidar.elemenOnc=!1)}}var b=a.ob({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}*[_ngcontent-%COMP%]{box-sizing:border-box}ion-content[_ngcontent-%COMP%]{--background:#fcfcfc}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.contenedor[_ngcontent-%COMP%]{padding-top:20px!important;text-align:center;overflow:hidden}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:25px;opacity:.7;margin-bottom:20px}.imagen[_ngcontent-%COMP%]{width:130px;height:130px;border-radius:5px}.tarjeta[_ngcontent-%COMP%]{padding-left:0;padding-right:0}ion-col[_ngcontent-%COMP%]{margin-bottom:8px!important}.my-grid[_ngcontent-%COMP%]{height:100%!important}.parent-row[_ngcontent-%COMP%]{height:100%!important;-webkit-box-align:center!important;align-items:center!important;-webkit-box-pack:center!important;justify-content:center!important}.letra[_ngcontent-%COMP%]{padding-left:35px;padding-right:35px;font-size:18px;text-align:justify;opacity:.7}ion-card[_ngcontent-%COMP%]{margin:0 auto;width:80%}ion-card[_ngcontent-%COMP%]:hover{-webkit-transition:.1s;transition:.1s;opacity:.5}.mensaje[_ngcontent-%COMP%]{font-size:14px;opacity:.5;text-align:center}.color-tarjeta[_ngcontent-%COMP%]{color:#fff;background-color:#000}ion-input[_ngcontent-%COMP%]{opacity:.7;text-align:center}.sa[_ngcontent-%COMP%]{border-bottom:1px solid red;max-width:50%;margin:0 auto}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}"]],data:{}});function g(l){return a.Lb(0,[(l()(),a.qb(0,0,null,null,3,"ion-header",[["class","ion-no-border animated fadeIn delay-1s"]],null,null,null,u.lb,u.t)),a.pb(1,49152,null,0,o.C,[a.h,a.k,a.x],{translucent:[0,"translucent"]},null),(l()(),a.qb(2,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(l()(),a.qb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(l()(),a.qb(4,0,null,null,43,"ion-content",[["class","animated fadeIn delay-1s"],["slot","fixed"]],null,null,null,u.gb,u.o)),a.pb(5,49152,null,0,o.v,[a.h,a.k,a.x],{fullscreen:[0,"fullscreen"]},null),(l()(),a.qb(6,0,null,0,41,"div",[["class","contenedor"]],null,null,null,null,null)),(l()(),a.qb(7,0,null,null,1,"h2",[["class","titulo"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Ingresa Tus Medidas"])),(l()(),a.qb(9,0,null,null,1,"div",[["class","letra"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,[" (Porfavor, medir con un centimetro) "])),(l()(),a.qb(11,0,null,null,36,"ion-grid",[["class","my-grid animated fadeIn delay-2s"]],null,null,null,u.kb,u.s)),a.pb(12,49152,null,0,o.B,[a.h,a.k,a.x],null,null),(l()(),a.qb(13,0,null,0,34,"ion-row",[["class","parent-row"]],null,null,null,u.ub,u.C)),a.pb(14,49152,null,0,o.hb,[a.h,a.k,a.x],null,null),(l()(),a.qb(15,0,null,0,0,"p",[["class","mensaje"]],null,null,null,null,null)),(l()(),a.qb(16,0,null,0,12,"ion-col",[["size","12"]],null,null,null,u.fb,u.n)),a.pb(17,49152,null,0,o.u,[a.h,a.k,a.x],{size:[0,"size"]},null),(l()(),a.qb(18,0,null,0,10,"div",[["class","tarjeta"]],null,null,null,null,null)),(l()(),a.qb(19,0,null,null,1,"p",[["class","mensaje"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["\xbfCual es su medida maxima de cintura?"])),(l()(),a.qb(21,0,null,null,0,"img",[["class","imagen"],["src","./assets/img/cintura.jpg"]],null,null,null,null,null)),(l()(),a.qb(22,0,null,null,6,"ion-input",[["class","sa"],["name","max_cintura"],["placeholder","cm"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(l,n,e){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==a.Cb(l,23)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==a.Cb(l,23)._handleIonChange(e.target)&&i),"ionChange"===n&&(i=!1!==t.validar(e,1)&&i),"ngModelChange"===n&&(i=!1!==(t.medidasCorporales.max_cintura=e)&&i),i}),u.nb,u.v)),a.pb(23,16384,null,0,o.Ib,[a.k],null,null),a.Gb(1024,null,r.h,(function(l){return[l]}),[o.Ib]),a.pb(25,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,r.i,null,[r.l]),a.pb(27,16384,null,0,r.j,[[4,r.i]],null,null),a.pb(28,49152,null,0,o.H,[a.h,a.k,a.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),a.qb(29,0,null,0,12,"ion-col",[["size","12"]],null,null,null,u.fb,u.n)),a.pb(30,49152,null,0,o.u,[a.h,a.k,a.x],{size:[0,"size"]},null),(l()(),a.qb(31,0,null,0,1,"p",[["class","mensaje"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["\xbfCual es su medida de cadera?"])),(l()(),a.qb(33,0,null,0,8,"div",[["class","tarjeta"]],null,null,null,null,null)),(l()(),a.qb(34,0,null,null,0,"img",[["class","imagen"],["src","./assets/img/cadera.png"]],null,null,null,null,null)),(l()(),a.qb(35,0,null,null,6,"ion-input",[["class","sa"],["name","cadera"],["placeholder","cm"],["size","8"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(l,n,e){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==a.Cb(l,36)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==a.Cb(l,36)._handleIonChange(e.target)&&i),"ionChange"===n&&(i=!1!==t.validar(e,2)&&i),"ngModelChange"===n&&(i=!1!==(t.medidasCorporales.cadera=e)&&i),i}),u.nb,u.v)),a.pb(36,16384,null,0,o.Ib,[a.k],null,null),a.Gb(1024,null,r.h,(function(l){return[l]}),[o.Ib]),a.pb(38,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,r.i,null,[r.l]),a.pb(40,16384,null,0,r.j,[[4,r.i]],null,null),a.pb(41,49152,null,0,o.H,[a.h,a.k,a.x],{name:[0,"name"],placeholder:[1,"placeholder"],size:[2,"size"],type:[3,"type"]},null),(l()(),a.qb(42,0,null,0,5,"ion-col",[["size","12"]],null,null,null,u.fb,u.n)),a.pb(43,49152,null,0,o.u,[a.h,a.k,a.x],{size:[0,"size"]},null),(l()(),a.qb(44,0,null,0,3,"ion-card",[["class","color-tarjeta"]],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.finalizar()&&a),a}),u.cb,u.g)),a.pb(45,49152,null,0,o.n,[a.h,a.k,a.x],{disabled:[0,"disabled"]},null),(l()(),a.qb(46,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Finalizar"]))],(function(l,n){var e=n.component;l(n,1,0,!0),l(n,5,0,!0),l(n,17,0,"12"),l(n,25,0,"max_cintura",e.medidasCorporales.max_cintura),l(n,28,0,"max_cintura","cm","number"),l(n,30,0,"12"),l(n,38,0,"cadera",e.medidasCorporales.cadera),l(n,41,0,"cadera","cm","8","number"),l(n,43,0,"12"),l(n,45,0,e.habilitar)}),(function(l,n){l(n,22,0,a.Cb(n,27).ngClassUntouched,a.Cb(n,27).ngClassTouched,a.Cb(n,27).ngClassPristine,a.Cb(n,27).ngClassDirty,a.Cb(n,27).ngClassValid,a.Cb(n,27).ngClassInvalid,a.Cb(n,27).ngClassPending),l(n,35,0,a.Cb(n,40).ngClassUntouched,a.Cb(n,40).ngClassTouched,a.Cb(n,40).ngClassPristine,a.Cb(n,40).ngClassDirty,a.Cb(n,40).ngClassValid,a.Cb(n,40).ngClassInvalid,a.Cb(n,40).ngClassPending)}))}function p(l){return a.Lb(0,[(l()(),a.qb(0,0,null,null,1,"app-relacioncadera",[],null,null,null,g,b)),a.pb(1,114688,null,0,m,[c.a,d.a,o.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var h=a.mb("app-relacioncadera",m,p,{},{},[]),C=e("SVse"),x=e("iInd");class f{}e.d(n,"RelacioncaderaPageModuleNgFactory",(function(){return v}));var v=a.nb(i,[],(function(l){return a.zb([a.Ab(512,a.j,a.Y,[[8,[t.a,h]],[3,a.j],a.v]),a.Ab(4608,C.m,C.l,[a.s,[2,C.w]]),a.Ab(4608,r.q,r.q,[]),a.Ab(4608,o.c,o.c,[a.x,a.g]),a.Ab(4608,o.Fb,o.Fb,[o.c,a.j,a.p]),a.Ab(4608,o.Lb,o.Lb,[o.c,a.j,a.p]),a.Ab(1073742336,C.b,C.b,[]),a.Ab(1073742336,r.p,r.p,[]),a.Ab(1073742336,r.e,r.e,[]),a.Ab(1073742336,o.Cb,o.Cb,[]),a.Ab(1073742336,x.n,x.n,[[2,x.s],[2,x.m]]),a.Ab(1073742336,f,f,[]),a.Ab(1073742336,i,i,[]),a.Ab(1024,x.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);