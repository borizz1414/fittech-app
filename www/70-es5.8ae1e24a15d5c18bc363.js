function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{UhBk:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("pMnS"),a=u("MKJQ"),i=u("sZkV"),r=u("SVse"),c=u("QOVW"),s=u("tj3v"),b=u("mrSG"),p=u("Qmup"),d=function(){function l(n,u){_classCallCheck(this,l),this.apiService=n,this.ruta=u}return _createClass(l,[{key:"ngOnInit",value:function(){return b.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:console.log(this.actividad),this.info=!1;case 1:case"end":return l.stop()}}),l,this)})))}},{key:"nivel",value:function(l){console.log(l),this.ruta.navigateForward(["/porcentajegrasa"])}},{key:"mostrar",value:function(l){this.info=!l}},{key:"cerrar",value:function(){this.info=!1}}]),l}(),f=e.ob({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}*[_ngcontent-%COMP%]{box-sizing:border-box}ion-content[_ngcontent-%COMP%]{--background:none}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.contenedor[_ngcontent-%COMP%]{padding-top:20px!important;text-align:center;overflow:hidden}.piepagina[_ngcontent-%COMP%]{margin-bottom:10%;font-size:15px}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:28px;font-weight:700;opacity:.7;margin-bottom:20px}p[_ngcontent-%COMP%]{text-align:left;margin-left:1rem;font-size:1.2rem}ion-toolbar[_ngcontent-%COMP%]{--background:black}.color-tarjeta[_ngcontent-%COMP%]{background-color:#000}ion-card[_ngcontent-%COMP%]{color:#fff;padding:0!important;margin:0 auto!important;border-radius:10px!important;width:88%;word-wrap:break-word}ion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:17px!important;padding:2px!important}ion-card[_ngcontent-%COMP%]:hover{-webkit-transition:.1s;transition:.1s;opacity:.5}ion-col[_ngcontent-%COMP%]{margin-bottom:8px!important}.my-grid[_ngcontent-%COMP%]{height:100%!important}.parent-row[_ngcontent-%COMP%]{height:100%!important;-webkit-box-align:center!important;align-items:center!important;-webkit-box-pack:center!important;justify-content:center!important}.ayudad[_ngcontent-%COMP%]{fill:#e5141a;font-size:29px!important}.ayudad2[_ngcontent-%COMP%]{color:#e5141a;font-size:29px!important;position:absolute;right:1rem}"]],data:{}});function m(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,3,"h2",[["class","titulo "]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Nivel de actividad "])),(l()(),e.qb(2,0,null,null,1,"ion-icon",[["class","ayudad"],["name","alert-circle"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.mostrar(t.info)&&e),e}),a.mb,a.u)),e.pb(3,49152,null,0,i.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"alert-circle")}),null)}function g(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,41,"div",[["class","animated fadeInLeft contenedor"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,m)),e.pb(2,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(3,0,null,null,38,"ion-grid",[["class","my-grid"]],null,null,null,a.kb,a.s)),e.pb(4,49152,null,0,i.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(5,0,null,0,36,"ion-row",[["class","parent-row"]],null,null,null,a.ub,a.C)),e.pb(6,49152,null,0,i.hb,[e.h,e.k,e.x],null,null),(l()(),e.qb(7,0,null,0,6,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),e.pb(8,49152,null,0,i.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(9,0,null,0,4,"ion-card",[["color","dark"],["style","\n              width: 286px; \n              border-radius: 10px;\n              text-transform: uppercase;\n              font-family: 'Open Sans';\n              "]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.nivel(0)&&e),e}),a.cb,a.g)),e.pb(10,49152,null,0,i.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(11,0,null,0,2,"h2",[["style","margin: 10px;"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sedentario"])),(l()(),e.qb(14,0,null,0,6,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),e.pb(15,49152,null,0,i.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(16,0,null,0,4,"ion-card",[["color","dark"],["style","\n                width: 286px; \n                border-radius: 10px;\n                text-transform: uppercase;\n                font-family: 'Open Sans';\n                "]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.nivel(1)&&e),e}),a.cb,a.g)),e.pb(17,49152,null,0,i.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(18,0,null,0,2,"h2",[["style","margin: 10px;"]],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Ligero"])),(l()(),e.qb(21,0,null,0,6,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),e.pb(22,49152,null,0,i.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(23,0,null,0,4,"ion-card",[["color","dark"],["style","\n              width: 286px; \n              border-radius: 10px;\n              text-transform: uppercase;\n              font-family: 'Open Sans';\n              "]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.nivel(2)&&e),e}),a.cb,a.g)),e.pb(24,49152,null,0,i.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(25,0,null,0,2,"h2",[["style","margin: 10px;"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Moderado"])),(l()(),e.qb(28,0,null,0,6,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),e.pb(29,49152,null,0,i.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(30,0,null,0,4,"ion-card",[["color","dark"],["style","\n                width: 286px; \n                border-radius: 10px;\n                text-transform: uppercase;\n                font-family: 'Open Sans';\n                "]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.nivel(3)&&e),e}),a.cb,a.g)),e.pb(31,49152,null,0,i.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(32,0,null,0,2,"h2",[["style","margin: 10px;"]],null,null,null,null,null)),(l()(),e.qb(33,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Activo"])),(l()(),e.qb(35,0,null,0,6,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),e.pb(36,49152,null,0,i.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(37,0,null,0,4,"ion-card",[["color","dark"],["style","\n                width: 286px; \n                border-radius: 10px;\n                text-transform: uppercase;\n                font-family: 'Open Sans';\n                "]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.nivel(4)&&e),e}),a.cb,a.g)),e.pb(38,49152,null,0,i.n,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(39,0,null,0,2,"h2",[["style","margin: 10px;"]],null,null,null,null,null)),(l()(),e.qb(40,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Muy Activo"]))],(function(l,n){l(n,2,0,!n.component.info),l(n,8,0,"12"),l(n,10,0,"dark"),l(n,15,0,"12"),l(n,17,0,"dark"),l(n,22,0,"12"),l(n,24,0,"dark"),l(n,29,0,"12"),l(n,31,0,"dark"),l(n,36,0,"12"),l(n,38,0,"dark")}),null)}function h(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,29,"div",[["class","animated fadeInLeft"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,28,"ion-grid",[["class","my-grid"]],null,null,null,a.kb,a.s)),e.pb(2,49152,null,0,i.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(3,0,null,0,26,"ion-row",[["class","parent-row animated fadeInLeft"]],null,null,null,a.ub,a.C)),e.pb(4,49152,null,0,i.hb,[e.h,e.k,e.x],null,null),(l()(),e.qb(5,0,null,0,24,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,3,"h5",[["class","titulo"],["style","text-align: center;"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Ayuda "])),(l()(),e.qb(8,0,null,null,1,"ion-icon",[["class","ayudad2"],["name","close-outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cerrar()&&e),e}),a.mb,a.u)),e.pb(9,49152,null,0,i.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(10,0,null,null,3,"p",[["class",".ion-text-left"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sedentario:"])),(l()(),e.Jb(-1,null,[" No hago ejercicio, a veces 1 vez a la semana salgo a caminar."])),(l()(),e.qb(14,0,null,null,3,"p",[["class",".ion-text-left"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Ligero:"])),(l()(),e.Jb(-1,null,[" No hago ejercicio a veces en casa hago algunos oficios y paseo a la mascota con frecuencia."])),(l()(),e.qb(18,0,null,null,3,"p",[["class",".ion-text-left"]],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Moderado:"])),(l()(),e.Jb(-1,null,[" Hago ejercicio sin mucha intensidad 1 - 3 veces por semana."])),(l()(),e.qb(22,0,null,null,3,"p",[["class",".ion-text-left"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Activo:"])),(l()(),e.Jb(-1,null,[" Hago ejercicio muy activo 3 - 5 veces por semana, a veces hago alg\xfan deporte, camino mucho."])),(l()(),e.qb(26,0,null,null,3,"p",[["class",".ion-text-left"]],null,null,null,null,null)),(l()(),e.qb(27,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Muy Activo:"])),(l()(),e.Jb(-1,null,[" Trabajo intensamente al menos 5 veces a la semana, incluso a veces puedo ejercitarme dos veces al dia. solo tengo un d\xeda o menos de descanso total."]))],(function(l,n){l(n,9,0,"close-outline")}),null)}function k(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,4,"div",[["class","animated fadeIn delay-1s"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,g)),e.pb(2,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,h)),e.pb(4,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,!u.info),l(n,4,0,u.info)}),null)}function v(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,9,"ion-header",[["class","ion-no-border"]],null,null,null,a.lb,a.t)),e.pb(1,49152,null,0,i.C,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.qb(2,0,null,0,7,"ion-toolbar",[],null,null,null,a.Jb,a.R)),e.pb(3,49152,null,0,i.Ab,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.X,a.f)),e.pb(5,49152,null,0,i.m,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"app-back-btn",[],null,null,null,c.b,c.a)),e.pb(7,114688,null,0,s.a,[i.Gb],null,null),(l()(),e.qb(8,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,3,"ion-content",[["slot","fixed"]],null,null,null,a.gb,a.o)),e.pb(11,49152,null,0,i.v,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.fb(16777216,null,0,1,null,k)),e.pb(13,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,7,0),l(n,11,0,!0),l(n,13,0,!u.actividad)}),null)}var x=e.mb("app-actividad",d,(function(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,1,"app-actividad",[],null,null,null,v,f)),e.pb(1,114688,null,0,d,[p.a,i.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),q=u("jIZK"),y=function(){function l(n){_classCallCheck(this,l),this.popoverController=n}return _createClass(l,[{key:"ngOnInit",value:function(){"sedentario"==this.value&&(this.mensaje="No hago ejercicios"),"ligero"==this.value&&(this.mensaje="Hago paseos frecuentemente"),"moderado"==this.value&&(this.mensaje="Hago ejercicios sin mucha intensidad"),"activo"==this.value&&(this.mensaje="Hago ejercicios de 3 a 5 veces por semanas"),"muyactivo"==this.value&&(this.mensaje="Hago ejercicios 5 veces ala semana.")}},{key:"Cerrar",value:function(){this.popoverController.dismiss()}}]),l}(),C=e.ob({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{margin:10px!important}"]],data:{}});function w(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,1,"p",[["class","ion-text-center"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Cerrar()&&e),e}),null,null)),(l()(),e.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.mensaje)}))}var _=e.mb("app-popmensaje",y,(function(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,1,"app-popmensaje",[],null,null,null,w,C)),e.pb(1,114688,null,0,y,[i.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}),{value:"value"},{},[]),O=u("s7LF"),j=u("iInd"),M=function l(){_classCallCheck(this,l)},J=u("vJls"),z=u("MWgy"),A=u("j1ZV");u.d(n,"ActividadPageModuleNgFactory",(function(){return P}));var P=e.nb(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[o.a,x,q.a,_]],[3,e.j],e.v]),e.Ab(4608,r.m,r.l,[e.s,[2,r.w]]),e.Ab(4608,O.q,O.q,[]),e.Ab(4608,i.c,i.c,[e.x,e.g]),e.Ab(4608,i.Fb,i.Fb,[i.c,e.j,e.p]),e.Ab(4608,i.Lb,i.Lb,[i.c,e.j,e.p]),e.Ab(4608,O.b,O.b,[]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,O.p,O.p,[]),e.Ab(1073742336,O.e,O.e,[]),e.Ab(1073742336,i.Cb,i.Cb,[]),e.Ab(1073742336,j.n,j.n,[[2,j.s],[2,j.m]]),e.Ab(1073742336,M,M,[]),e.Ab(1073742336,O.m,O.m,[]),e.Ab(1073742336,J.a,J.a,[]),e.Ab(1073742336,z.a,z.a,[]),e.Ab(1073742336,A.a,A.a,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,j.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);