(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"2NBv":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var a=u("pMnS"),t=u("MKJQ"),o=u("sZkV"),r=u("mrSG"),s=u("Qmup"),c=u("fz3y");class b{constructor(l,n,u,e){this.ruta=l,this.apiservice=n,this.loadingController=u,this.notificacion=e}ngOnInit(){}empuje(){this.apiservice.bloquearexamen.examen1?document.getElementById("banca").classList.add("realizado"):this.ruta.navigateByUrl("test-fuerza-manual-pasos/1")}atraccion(){this.apiservice.bloquearexamen.examen2?document.getElementById("curl").classList.add("realizado"):this.ruta.navigateByUrl("test-fuerza-manual-pasos/2")}inferior(){this.apiservice.bloquearexamen.examen3?document.getElementById("squat").classList.add("realizado"):this.ruta.navigateByUrl("test-fuerza-manual-pasos/3")}termina(){return r.__awaiter(this,void 0,void 0,(function*(){if(this.apiservice.bloquearexamen.examen1&&this.apiservice.bloquearexamen.examen2&&this.apiservice.bloquearexamen.examen3){this.presentLoading();const l=yield this.apiservice.TestFuerza();this.loadingController.dismiss(),l?(console.log(this.apiservice.evaluarTest),this.apiservice.evaluarTest?document.getElementById("tablaexamen").classList.add("ocultar"):this.apiservice.pruebaRealizada(!0),document.getElementById("fuerza").classList.add("ocultar"),this.ruta.navigateByUrl("/tabs"),this.notificacion.notificacionUsuario("Gracias por realizar el test!","danger")):this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexi\xf3n","primary")}else this.notificacion.notificacionUsuario("Complete los test, antes de finalizar","warning")}))}presentLoading(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"Por favor espere..."});yield l.present()}))}}var d=u("iInd"),p=e.ob({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%]{border:1px solid grey}.padre[_ngcontent-%COMP%]{position:absolute;top:40%;width:90%}.realizado[_ngcontent-%COMP%]{opacity:.2}"]],data:{}});function f(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,11,"ion-header",[["class","ion-no-border"]],null,null,null,t.lb,t.t)),e.pb(1,49152,null,0,o.C,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,9,"ion-toolbar",[["color","dark"]],null,null,null,t.Jb,t.R)),e.pb(3,49152,null,0,o.Ab,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,t.X,t.f)),e.pb(5,49152,null,0,o.m,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","/test-fuerza-info"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Cb(l,8).onClick(u)&&i),i}),t.U,t.c)),e.pb(7,49152,null,0,o.h,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.pb(8,16384,null,0,o.i,[[2,o.gb],o.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(9,0,null,0,2,"ion-title",[["mode","ios"]],null,null,null,t.Hb,t.P)),e.pb(10,49152,null,0,o.yb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Categorias"])),(l()(),e.qb(12,0,null,null,26,"ion-content",[],null,null,null,t.gb,t.o)),e.pb(13,49152,null,0,o.v,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,15,"ion-grid",[],null,null,null,t.kb,t.s)),e.pb(15,49152,null,0,o.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(16,0,null,0,13,"ion-row",[],null,null,null,t.ub,t.C)),e.pb(17,49152,null,0,o.hb,[e.h,e.k,e.x],null,null),(l()(),e.qb(18,0,null,0,3,"ion-col",[["size","12"]],null,null,null,t.fb,t.n)),e.pb(19,49152,null,0,o.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(20,0,null,0,1,"div",[["class","ion-padding"],["id","banca"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.empuje()&&e),e}),null,null)),(l()(),e.qb(21,0,null,null,0,"img",[["src","assets/img/empuje.png"]],null,null,null,null,null)),(l()(),e.qb(22,0,null,0,3,"ion-col",[["size","12"]],null,null,null,t.fb,t.n)),e.pb(23,49152,null,0,o.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(24,0,null,0,1,"div",[["class","ion-padding"],["id","curl"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.atraccion()&&e),e}),null,null)),(l()(),e.qb(25,0,null,null,0,"img",[["src","assets/img/atraccion.png"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,0,3,"ion-col",[["size","12"]],null,null,null,t.fb,t.n)),e.pb(27,49152,null,0,o.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(28,0,null,0,1,"div",[["class","ion-padding"],["id","squat"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.inferior()&&e),e}),null,null)),(l()(),e.qb(29,0,null,null,0,"img",[["src","assets/img/treninferior.png"]],null,null,null,null,null)),(l()(),e.qb(30,0,null,0,8,"ion-row",[],null,null,null,t.ub,t.C)),e.pb(31,49152,null,0,o.hb,[e.h,e.k,e.x],null,null),(l()(),e.qb(32,0,null,0,6,"ion-col",[["size","12"]],null,null,null,t.fb,t.n)),e.pb(33,49152,null,0,o.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(34,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,3,"ion-card",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.termina()&&e),e}),t.cb,t.g)),e.pb(36,49152,null,0,o.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(37,0,null,0,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Finalizar"]))],(function(l,n){l(n,3,0,"dark"),l(n,7,0,"/test-fuerza-info"),l(n,8,0,"/test-fuerza-info"),l(n,19,0,"12"),l(n,23,0,"12"),l(n,27,0,"12"),l(n,33,0,"12"),l(n,36,0,"danger")}),null)}function m(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,1,"app-test-fuerza-manual",[],null,null,null,f,p)),e.pb(1,114688,null,0,b,[d.m,s.a,o.Eb,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var h=e.mb("app-test-fuerza-manual",b,m,{},{},[]),g=u("SVse"),v=u("s7LF");class k{}u.d(n,"TestFuerzaManualPageModuleNgFactory",(function(){return q}));var q=e.nb(i,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[a.a,h]],[3,e.j],e.v]),e.Ab(4608,g.m,g.l,[e.s,[2,g.w]]),e.Ab(4608,v.q,v.q,[]),e.Ab(4608,o.c,o.c,[e.x,e.g]),e.Ab(4608,o.Fb,o.Fb,[o.c,e.j,e.p]),e.Ab(4608,o.Lb,o.Lb,[o.c,e.j,e.p]),e.Ab(1073742336,g.b,g.b,[]),e.Ab(1073742336,v.p,v.p,[]),e.Ab(1073742336,v.e,v.e,[]),e.Ab(1073742336,o.Cb,o.Cb,[]),e.Ab(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.Ab(1073742336,k,k,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);