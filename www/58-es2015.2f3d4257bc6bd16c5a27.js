(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{oM9O:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),a=u("MKJQ"),i=u("SVse"),r=u("sZkV"),s=u("s7LF"),c=u("mrSG"),b=u("JEwB"),d=u("fz3y");class p{constructor(l,n,u,t,e,o){this.capturar=l,this.service=n,this.utilities=u,this.fb=t,this.alertController=e,this.ruta=o,this.alimentos=[],this.alimentosAyer=[],this.datosUsuario=[],this.alimentos2=[],this.carbo=0,this.protein=0,this.grasa=0,this.typefoods=1,this.measurement="gr",this.activar=!0,this.form=this.fb.group({borrar:[null,s.o.required]})}ngOnInit(){}getFoods(l){return c.__awaiter(this,void 0,void 0,(function*(){this.today=(new Date).toJSON().slice(0,10).replace(/-/g,"/");const n=yield this.service.ListadoComida(l,this.today);0==n?this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error","danger"):(this.alimentos2=n.menu.menu_food,this.id=n.menu.id);const u=yield this.service.menu(l);0==u?this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error","danger"):(this.alimentos=u.Foods,this.alimentos2.forEach(l=>{this.alimentos.forEach(n=>{n.measurement=null==n.measure?"unidad":"gr",n.id==l.food_id&&(n.cantidad=parseInt(l.quantity)),n.id==l.food_id&&(n.convertion=l.measure)})}),console.log("LISTA DE MENU",this.alimentos),console.log("MENU DE HOY",this.alimentos2),this.datosUsuario=u.Menu,this.totalCarbo=this.datosUsuario.carbo,this.totalgrease=this.datosUsuario.grease,this.totalprotein=this.datosUsuario.protein),this.calculateStats()}))}ucFirst(l){return l.substring(0,1).toUpperCase()+l.substring(1)}ionViewWillEnter(){switch(this.dataRecibida=this.capturar.snapshot.paramMap.get("id"),this.dataRecibida){case"Desayuno":this.typefood=0,this.getFoods(0),this.foods="./assets/img/desayuno-grande.jpg";break;case"Almuerzo":this.typefood=2,this.getFoods(2),this.foods="./assets/img/almuerzo-grande.jpg";break;case"Snack":this.getFoods(1),this.typefood=1,this.foods="./assets/img/snack-grande.jpg";break;default:this.getFoods(3),this.typefood=3,this.foods="./assets/img/cena-grande.jpg"}}calculateStats(){this.carbo=0,this.grasa=0,this.protein=0,this.alimentos.forEach(l=>{console.log(l.cantidad),l.cantidad>0&&(console.log(l),1===l.convertion&&null!=l.eq?(console.log(l),console.log("cantidad",l.cantidad),console.log("eq",l.eq),console.log("medida casera"),console.log("Convirtiendo con regla de 3"),this.carbo+=this.convertion(l.cant,l.carbo,l.cantidad*l.eq),this.grasa+=this.convertion(l.cant,l.greases,l.cantidad*l.eq),this.protein+=this.convertion(l.cant,l.protein,l.cantidad*l.eq)):(console.log("Convirtiendo con regla de 3 en el else"),this.carbo+=this.convertion(l.cant,l.carbo,l.cantidad),this.grasa+=this.convertion(l.cant,l.greases,l.cantidad),this.protein+=this.convertion(l.cant,l.protein,l.cantidad),console.log(l),console.log("Aplicar la regla de 3")))})}convertion(l,n,u){let t;return t=n*u/l,t}progressBar(l,n){return 100*l/n/100>=1?1:100*l/n/100}guardarMenu(){this.service.BorrarMenu(this.id).then(l=>{this.utilities.notificacionUsuario(this.dataRecibida+" actualizado","dark"),this.ruta.navigateRoot("/bateria-alimento")}).catch(l=>{this.utilities.notificacionUsuario("Error al guardar "+this.dataRecibida,"danger")})}change(l){this.alimentos[l].cantidad=0}B_todo(){this.alimentos2=[],this.form.controls.borrar.setValue("borra")}agregar(){this.ruta.navigateForward([`/alimentos-editar/${this.dataRecibida}`])}}var g=u("iInd"),h=t.ob({encapsulation:0,styles:[[".imagenmodificada[_ngcontent-%COMP%]{width:50px;height:50px}.edit[_ngcontent-%COMP%]{fill:red}.contenedorMenu[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;justify-content:space-around;width:100%;border-radius:12px;box-shadow:0 10px 5px 0 rgba(0,0,0,.09)}.contenedorMenuItem[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;text-align:center}.titulo[_ngcontent-%COMP%]{margin:0 auto;font-weight:600;font-size:18px;text-transform:uppercase}ion-progress-bar[_ngcontent-%COMP%]{width:80%;margin:0 auto}.carboP[_ngcontent-%COMP%], .grasaP[_ngcontent-%COMP%], .proteP[_ngcontent-%COMP%]{--progress-background:red;--background:white}.complete[_ngcontent-%COMP%]{--progress-background:black!important;--background:grey}.raya[_ngcontent-%COMP%]:nth-child(odd){border-right:1px solid #cecece}.titlemodify[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;font-size:15px;height:2.25rem}"]],data:{}});function m(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"p",[["style","color: white;"]],null,null,null,null,null)),(l()(),t.Jb(1,null,[" ","/","gr"]))],null,(function(l,n){var u=n.component;l(n,1,0,u.carbo.toFixed(),u.datosUsuario.carbo.toFixed())}))}function f(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"p",[["style","color: white;"]],null,null,null,null,null)),(l()(),t.Jb(1,null,[" ","/","gr"]))],null,(function(l,n){var u=n.component;l(n,1,0,u.protein.toFixed(),u.datosUsuario.protein.toFixed())}))}function x(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"p",[["style","color: white;"]],null,null,null,null,null)),(l()(),t.Jb(1,null,[" ","/","gr"]))],null,(function(l,n){var u=n.component;l(n,1,0,u.grasa.toFixed(),u.datosUsuario.grease.toFixed())}))}function k(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,7,"ion-segment-button",[["value","unidad"]],null,null,null,a.wb,a.F)),t.Gb(512,null,i.t,i.u,[t.q,t.r,t.k,t.B]),t.pb(2,278528,null,0,i.i,[i.t],{ngClass:[0,"ngClass"]},null),t.Eb(3,{"segment-button-checked":0}),t.pb(4,49152,null,0,r.kb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.qb(5,0,null,0,2,"ion-label",[["class","titulopeque"]],null,null,null,a.qb,a.y)),t.pb(6,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.Jb(7,0,["",""]))],(function(l,n){var u=l(n,3,0,!0);l(n,2,0,u),l(n,4,0,"unidad")}),(function(l,n){l(n,7,0,n.parent.context.$implicit.food.type_measure)}))}function v(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,7,"ion-segment-button",[["value","casera"]],null,null,null,a.wb,a.F)),t.Gb(512,null,i.t,i.u,[t.q,t.r,t.k,t.B]),t.pb(2,278528,null,0,i.i,[i.t],{ngClass:[0,"ngClass"]},null),t.Eb(3,{"segment-button-checked":0}),t.pb(4,49152,null,0,r.kb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.qb(5,0,null,0,2,"ion-label",[["class","titulopeque"]],null,null,null,a.qb,a.y)),t.pb(6,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.Jb(7,0,["",""]))],(function(l,n){var u=l(n,3,0,!0);l(n,2,0,u),l(n,4,0,"casera")}),(function(l,n){l(n,7,0,n.parent.context.$implicit.food.measure||n.parent.context.$implicit.food.type_measure)}))}function q(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,21,"ion-col",[["class","raya"],["size","6"]],null,null,null,a.fb,a.n)),t.pb(1,49152,null,0,r.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.qb(2,0,null,0,4,"ion-label",[["class","titlemodify"]],null,null,null,a.qb,a.y)),t.pb(3,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.Jb(4,0,[" "," "])),(l()(),t.qb(5,0,null,0,1,"ion-icon",[["name","create-sharp"],["style","margin-left: 1rem;font-size: 1.1rem;color: red;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.agregar()&&t),t}),a.mb,a.u)),t.pb(6,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(7,0,null,0,3,"ion-input",[["inputmode","numeric"],["maxlength","3"],["placeholder","0"],["readonly",""],["style","margin: 0 auto;text-align: center;"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Cb(l,10)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Cb(l,10)._handleInputEvent(u.target)&&e),e}),a.nb,a.v)),t.Gb(5120,null,s.h,(function(l){return[l]}),[r.Nb]),t.pb(9,49152,null,0,r.H,[t.h,t.k,t.x],{inputmode:[0,"inputmode"],maxlength:[1,"maxlength"],placeholder:[2,"placeholder"],readonly:[3,"readonly"],value:[4,"value"]},null),t.pb(10,16384,null,0,r.Nb,[t.k],null,null),(l()(),t.qb(11,0,null,0,10,"ion-segment",[["mode","ios"],["style","margin: 0 auto;"],["value","unidad"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Cb(l,12)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Cb(l,12)._handleChangeEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(l.context.$implicit.measurement=u)&&e),"ionChange"===n&&(e=!1!==(l.context.$implicit.cantidad=0)&&e),e}),a.xb,a.E)),t.pb(12,16384,null,0,r.Mb,[t.k],null,null),t.Gb(1024,null,s.h,(function(l){return[l]}),[r.Mb]),t.pb(14,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,s.i,null,[s.l]),t.pb(16,16384,null,0,s.j,[[4,s.i]],null,null),t.pb(17,49152,null,0,r.jb,[t.h,t.k,t.x],{mode:[0,"mode"],value:[1,"value"]},null),(l()(),t.fb(16777216,null,0,1,null,k)),t.pb(19,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,v)),t.pb(21,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"6"),l(n,6,0,"create-sharp"),l(n,9,0,"numeric","3","0","",n.context.$implicit.quantity),l(n,14,0,n.context.$implicit.measurement),l(n,17,0,"ios","unidad"),l(n,19,0,0===n.context.$implicit.measure),l(n,21,0,1===n.context.$implicit.measure)}),(function(l,n){l(n,4,0,n.context.$implicit.food.name),l(n,11,0,t.Cb(n,16).ngClassUntouched,t.Cb(n,16).ngClassTouched,t.Cb(n,16).ngClassPristine,t.Cb(n,16).ngClassDirty,t.Cb(n,16).ngClassValid,t.Cb(n,16).ngClassInvalid,t.Cb(n,16).ngClassPending)}))}function y(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,14,"ion-header",[],null,null,null,a.lb,a.t)),t.pb(1,49152,null,0,r.C,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,12,"ion-toolbar",[["color","dark"]],null,null,null,a.Jb,a.R)),t.pb(3,49152,null,0,r.Ab,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.X,a.f)),t.pb(5,49152,null,0,r.m,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","/bateria-alimento"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,8).onClick(u)&&e),e}),a.U,a.c)),t.pb(7,49152,null,0,r.h,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.pb(8,16384,null,0,r.i,[[2,r.gb],r.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.qb(9,0,null,0,2,"ion-buttons",[["slot","end"]],null,null,null,a.X,a.f)),t.pb(10,49152,null,0,r.m,[t.h,t.k,t.x],null,null),(l()(),t.qb(11,0,null,0,0,"img",[["class","imagenmodificada"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,0,2,"ion-title",[["class","ion-text-center"],["mode","ios"]],null,null,null,a.Hb,a.P)),t.pb(13,49152,null,0,r.yb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(14,0,["",""])),(l()(),t.qb(15,0,null,null,53,"ion-content",[["fullscreen",""]],null,null,null,a.gb,a.o)),t.pb(16,49152,null,0,r.v,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.qb(17,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(18,0,null,0,3,"ion-item",[],null,null,null,a.pb,a.w)),t.pb(19,49152,null,0,r.I,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,1,"div",[["class","ion-padding ion-text-center titulo"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Men\xfa de hoy "])),(l()(),t.qb(22,0,null,0,29,"ion-item",[["lines","none"]],null,null,null,a.pb,a.w)),t.pb(23,49152,null,0,r.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.qb(24,0,null,0,27,"div",[["class","contenedorMenu"]],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,10,"div",[["class","contenedorMenuItem"],["style","border-bottom-left-radius: 12px;border-top-left-radius: 12px;background:black;"]],null,null,null,null,null)),t.Gb(512,null,i.t,i.u,[t.q,t.r,t.k,t.B]),t.pb(27,278528,null,0,i.i,[i.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(28,{customtarjeta:0}),(l()(),t.qb(29,0,null,null,2,"p",[["style","color: white; margin-top: 0;"]],null,null,null,null,null)),(l()(),t.qb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Carbohidratos"])),(l()(),t.qb(32,0,null,null,1,"ion-progress-bar",[["class","carboP"]],null,null,null,a.tb,a.B)),t.pb(33,49152,null,0,r.X,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(35,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(36,0,null,null,7,"div",[["class","contenedorMenuItem"],["style","  background: #EF4044;"]],null,null,null,null,null)),(l()(),t.qb(37,0,null,null,2,"p",[["style","color: white;  margin-top: 0;"]],null,null,null,null,null)),(l()(),t.qb(38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Proteinas"])),(l()(),t.qb(40,0,null,null,1,"ion-progress-bar",[["class","proteP"]],null,null,null,a.tb,a.B)),t.pb(41,49152,null,0,r.X,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.fb(16777216,null,null,1,null,f)),t.pb(43,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(44,0,null,null,7,"div",[["class","contenedorMenuItem"],["style","border-bottom-right-radius: 12px;border-top-right-radius: 12px;background: grey;"]],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,2,"p",[["style","color: white;  margin-top: 0;"]],null,null,null,null,null)),(l()(),t.qb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Grasas"])),(l()(),t.qb(48,0,null,null,1,"ion-progress-bar",[["class","grasaP"]],null,null,null,a.tb,a.B)),t.pb(49,49152,null,0,r.X,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.fb(16777216,null,null,1,null,x)),t.pb(51,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(52,0,null,0,5,"div",[["class","ion-text-center"],["style","padding: 0 1rem; margin:1rem;"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Toca "])),(l()(),t.qb(54,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.qb(55,0,null,null,1,"ion-icon",[["name","create-sharp"],["style","font-size: 1.1rem;color: red;"]],null,null,null,a.mb,a.u)),t.pb(56,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Jb(-1,null,[" para editar no solo las cantidades de este alimento, sino para agregar o modificar cualquier macronutriente "])),(l()(),t.qb(58,0,null,0,4,"ion-label",[["class","ion-text-end"]],null,null,null,a.qb,a.y)),t.pb(59,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.qb(60,0,null,0,2,"ion-button",[["color","danger"],["expand","block"],["fill","clear"],["shape","round"],["style","font-size: 18px; margin-bottom: 1rem;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.B_todo()&&t),t}),a.W,a.e)),t.pb(61,49152,null,0,r.l,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"]},null),(l()(),t.Jb(-1,0,[" Borrar todo "])),(l()(),t.qb(63,0,null,0,5,"ion-grid",[["class","ion-text-center"]],null,null,null,a.kb,a.s)),t.pb(64,49152,null,0,r.B,[t.h,t.k,t.x],null,null),(l()(),t.qb(65,0,null,0,3,"ion-row",[],null,null,null,a.ub,a.C)),t.pb(66,49152,null,0,r.hb,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,q)),t.pb(68,278528,null,0,i.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(69,0,null,null,6,"ion-footer",[["class","ion-no-border"]],null,null,null,a.jb,a.r)),t.pb(70,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.qb(71,0,null,0,4,"ion-card",[["style","  \n  background: #EF4044;\n  color: white;\n  width: 286px; \n  border-radius: 10px;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-family: 'Open Sans';"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.guardarMenu()&&t),t}),a.cb,a.g)),t.pb(72,49152,null,0,r.n,[t.h,t.k,t.x],{disabled:[0,"disabled"]},null),(l()(),t.qb(73,0,null,0,2,"h2",[["style","text-align: center; margin: 10px;"]],null,null,null,null,null)),(l()(),t.qb(74,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Actualizar "]))],(function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,7,0,"/bateria-alimento"),l(n,8,0,"/bateria-alimento"),l(n,16,0,""),l(n,23,0,"none");var t=l(n,28,0,u.activar);l(n,27,0,"contenedorMenuItem",t),l(n,33,0,u.progressBar(u.carbo,u.datosUsuario.carbo)),l(n,35,0,u.datosUsuario.carbo),l(n,41,0,u.progressBar(u.protein,u.datosUsuario.protein)),l(n,43,0,u.datosUsuario.protein),l(n,49,0,u.progressBar(u.grasa,u.datosUsuario.grease)),l(n,51,0,u.datosUsuario.grease),l(n,56,0,"create-sharp"),l(n,61,0,"danger","block","clear","round"),l(n,68,0,u.alimentos2),l(n,72,0,!u.form.valid)}),(function(l,n){var u=n.component;l(n,14,0,u.dataRecibida),l(n,17,0,u.foods)}))}function C(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-listadoalimento",[],null,null,null,y,h)),t.pb(1,114688,null,0,p,[g.a,b.a,d.a,s.b,r.b,r.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.mb("app-listadoalimento",p,C,{},{},[]);class M{}u.d(n,"ListadoalimentoPageModuleNgFactory",(function(){return J}));var J=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,w]],[3,t.j],t.v]),t.Ab(4608,i.m,i.l,[t.s,[2,i.w]]),t.Ab(4608,s.q,s.q,[]),t.Ab(4608,r.c,r.c,[t.x,t.g]),t.Ab(4608,r.Fb,r.Fb,[r.c,t.j,t.p]),t.Ab(4608,r.Lb,r.Lb,[r.c,t.j,t.p]),t.Ab(1073742336,i.b,i.b,[]),t.Ab(1073742336,s.p,s.p,[]),t.Ab(1073742336,s.e,s.e,[]),t.Ab(1073742336,r.Cb,r.Cb,[]),t.Ab(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),t.Ab(1073742336,M,M,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);