function _defineProperties(n,l){for(var u=0;u<l.length;u++){var t=l[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{RZXW:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),e=function n(){_classCallCheck(this,n)},o=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),r=u("SVse"),c=u("mrSG"),s=u("JEwB"),b=function(){function n(l,u,t){_classCallCheck(this,n),this.ruta=l,this.service=u,this.loadingController=t,this.detectar=!0}return _createClass(n,[{key:"ngOnInit",value:function(){this.getIndicators()}},{key:"getIndicators",value:function(){return c.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.presentLoading(),n.next=3,this.service.indicadores();case 3:l=n.sent,this.loadingController.dismiss(),0==l?this.detectar=!1:(this.dato=l,console.log("BLAH BLAH BLAH BLAH",this.dato.tmb));case 5:case"end":return n.stop()}}),n,this)})))}},{key:"atras",value:function(){this.ruta.pop()}},{key:"goTo",value:function(){this.ruta.navigateForward(["/bateria-alimento"])}},{key:"presentLoading",value:function(){return c.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Por favor espere..."});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),n}(),p=t.ob({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{padding:0!important;margin:0 auto!important;width:88%;word-wrap:break-word}ion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:17px!important;opacity:.9}.aumentartitulo[_ngcontent-%COMP%]{font-size:18px;font-weight:700}ion-content[_ngcontent-%COMP%]{--color:black;--background:white}.toolbar-background[_ngcontent-%COMP%]{--background:black;--color:white}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}ion-slides[_ngcontent-%COMP%]{height:100%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.titulo[_ngcontent-%COMP%]{opacity:.7}.titulo2[_ngcontent-%COMP%]{text-align:center;font-size:18px;font-weight:700;opacity:.7}h2[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin-top:50px}.rightborder[_ngcontent-%COMP%]{border-right:1px solid grey}ion-input[_ngcontent-%COMP%]{opacity:.7;font-size:20px;text-align:center;--color:black}.titulopeque[_ngcontent-%COMP%]{opacity:.4}.titulopeque2[_ngcontent-%COMP%]{color:red}ion-col[_ngcontent-%COMP%]{text-align:center}ion-item[_ngcontent-%COMP%]{--background:white}ion-select[_ngcontent-%COMP%]{width:100%;font-size:23px;font-weight:200}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:28px;font-weight:700;margin-bottom:20px}.tituloindicador[_ngcontent-%COMP%]{font-size:22px;font-weight:600;margin:15px 20px}.tamanoindicador[_ngcontent-%COMP%]{font-size:20px}"]],data:{}});function d(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"ion-label",[["class","tamanoindicador"]],null,null,null,i.qb,i.y)),t.pb(1,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(n()(),t.Jb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.dato.imc)}))}function g(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"ion-label",[["class","tamanoindicador"]],null,null,null,i.qb,i.y)),t.pb(1,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(n()(),t.Jb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.dato.ica)}))}function f(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"ion-label",[["class","tamanoindicador"]],null,null,null,i.qb,i.y)),t.pb(1,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(n()(),t.Jb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.dato.Perimetro_Cintura)}))}function h(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"ion-label",[["class","tamanoindicador"]],null,null,null,i.qb,i.y)),t.pb(1,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(n()(),t.Jb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.dato.tmb)}))}function m(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"ion-label",[["class","tamanoindicador"]],null,null,null,i.qb,i.y)),t.pb(1,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(n()(),t.Jb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.dato.Estrategia_N)}))}function k(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,7,"ion-buttons",[["slot","start"]],null,null,null,i.X,i.f)),t.pb(1,49152,null,0,a.m,[t.h,t.k,t.x],null,null),(n()(),t.qb(2,0,null,0,5,"ion-fab",[["class","animated fadeInUp delay-2s"],["horizontal","start"],["slot","fixed"],["style","margin-top:-4.75rem;"],["vertical","center"]],null,null,null,i.ib,i.p)),t.pb(3,49152,null,0,a.x,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.qb(4,0,null,0,3,"ion-fab-button",[["size","small"],["style","--background:#ef4044"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.atras()&&t),t}),i.hb,i.q)),t.pb(5,49152,null,0,a.y,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(6,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,i.mb,i.u)),t.pb(7,49152,null,0,a.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.qb(8,0,null,null,3,"ion-header",[["class","ion-no-border"]],null,null,null,i.lb,i.t)),t.pb(9,49152,null,0,a.C,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(n()(),t.qb(10,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(n()(),t.qb(11,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),t.qb(12,0,null,null,59,"ion-content",[],null,null,null,i.gb,i.o)),t.pb(13,49152,null,0,a.v,[t.h,t.k,t.x],null,null),(n()(),t.qb(14,0,null,0,57,null,null,null,null,null,null,null)),(n()(),t.qb(15,0,null,null,1,"div",[["class","ion-padding ion-text-center titulo"],["style","margin-bottom: 0;"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Indicadores de salud "])),(n()(),t.qb(17,0,null,null,43,"ion-grid",[],null,null,null,i.kb,i.s)),t.pb(18,49152,null,0,a.B,[t.h,t.k,t.x],null,null),(n()(),t.qb(19,0,null,0,41,"ion-row",[],null,null,null,i.ub,i.C)),t.pb(20,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(n()(),t.qb(21,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.fb,i.n)),t.pb(22,49152,null,0,a.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(23,0,null,0,5,"ion-item",[["lines","none"]],null,null,null,i.pb,i.w)),t.pb(24,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(25,0,null,0,1,"p",[["class","tituloindicador"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["IMC ="])),(n()(),t.fb(16777216,null,0,1,null,d)),t.pb(28,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(29,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.fb,i.n)),t.pb(30,49152,null,0,a.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(31,0,null,0,5,"ion-item",[["lines","none"]],null,null,null,i.pb,i.w)),t.pb(32,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(33,0,null,0,1,"p",[["class","tituloindicador"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["ICA ="])),(n()(),t.fb(16777216,null,0,1,null,g)),t.pb(36,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(37,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.fb,i.n)),t.pb(38,49152,null,0,a.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(39,0,null,0,5,"ion-item",[["lines","none"]],null,null,null,i.pb,i.w)),t.pb(40,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(41,0,null,0,1,"p",[["class","tituloindicador"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Per\xedmetro de cintura ="])),(n()(),t.fb(16777216,null,0,1,null,f)),t.pb(44,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(45,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.fb,i.n)),t.pb(46,49152,null,0,a.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(47,0,null,0,5,"ion-item",[["lines","none"]],null,null,null,i.pb,i.w)),t.pb(48,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(49,0,null,0,1,"p",[["class","tituloindicador"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["TBM ="])),(n()(),t.fb(16777216,null,0,1,null,h)),t.pb(52,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(53,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.fb,i.n)),t.pb(54,49152,null,0,a.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(55,0,null,0,5,"ion-item",[["lines","none"]],null,null,null,i.pb,i.w)),t.pb(56,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(57,0,null,0,1,"p",[["class","tituloindicador"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Estrategia nutricional ="])),(n()(),t.fb(16777216,null,0,1,null,m)),t.pb(60,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(61,0,null,null,10,"ion-grid",[["class","ion-padding"]],null,null,null,i.kb,i.s)),t.pb(62,49152,null,0,a.B,[t.h,t.k,t.x],null,null),(n()(),t.qb(63,0,null,0,8,"ion-row",[],null,null,null,i.ub,i.C)),t.pb(64,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(n()(),t.qb(65,0,null,0,6,"ion-col",[["size","12"]],null,null,null,i.fb,i.n)),t.pb(66,49152,null,0,a.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.qb(67,0,null,0,4,"ion-card",[["style","\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          --background:#EF4044;\n          color:white;\n          "]],null,null,null,i.cb,i.g)),t.pb(68,49152,null,0,a.n,[t.h,t.k,t.x],null,null),(n()(),t.qb(69,0,null,0,2,"h2",[["style","margin: 10px; text-align: center;"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.goTo()&&t),t}),null,null)),(n()(),t.qb(70,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" SIGUIENTE"]))],(function(n,l){var u=l.component;n(l,3,0,"start","center"),n(l,5,0,"small"),n(l,7,0,"arrow-back-outline"),n(l,9,0,!0),n(l,22,0,"12"),n(l,24,0,"none"),n(l,28,0,u.dato),n(l,30,0,"12"),n(l,32,0,"none"),n(l,36,0,u.dato),n(l,38,0,"12"),n(l,40,0,"none"),n(l,44,0,u.dato),n(l,46,0,"12"),n(l,48,0,"none"),n(l,52,0,u.dato),n(l,54,0,"12"),n(l,56,0,"none"),n(l,60,0,u.dato),n(l,66,0,"12")}),null)}var x=t.mb("app-indicadores",b,(function(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-indicadores",[],null,null,null,k,p)),t.pb(1,114688,null,0,b,[a.Gb,s.a,a.Eb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),w=u("s7LF"),q=u("iInd"),C=function n(){_classCallCheck(this,n)};u.d(l,"IndicadoresPageModuleNgFactory",(function(){return _}));var _=t.nb(e,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,x]],[3,t.j],t.v]),t.Ab(4608,r.m,r.l,[t.s,[2,r.w]]),t.Ab(4608,w.q,w.q,[]),t.Ab(4608,a.c,a.c,[t.x,t.g]),t.Ab(4608,a.Fb,a.Fb,[a.c,t.j,t.p]),t.Ab(4608,a.Lb,a.Lb,[a.c,t.j,t.p]),t.Ab(1073742336,r.b,r.b,[]),t.Ab(1073742336,w.p,w.p,[]),t.Ab(1073742336,w.e,w.e,[]),t.Ab(1073742336,a.Cb,a.Cb,[]),t.Ab(1073742336,q.n,q.n,[[2,q.s],[2,q.m]]),t.Ab(1073742336,C,C,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,q.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);