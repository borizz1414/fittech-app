function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{yLV2:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),u=t("MKJQ"),a=t("sZkV"),r=t("SVse"),c=t("mrSG"),s=t("Qmup"),b=t("AytR"),p=function(){function n(l,t,e){_classCallCheck(this,n),this.capturar=l,this.ApiService=t,this.ruta=e,this.URL=b.a.url,this.sonido="../../../assets/sonido/reloj.mp3",this.sonido2="../../../assets/sonido/final.mp3",this.mostrartitulo=!1}return _createClass(n,[{key:"ngOnInit",value:function(){return c.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.dataRecibida=this.capturar.snapshot.paramMap.get("id"),console.log("parametro recibido",this.dataRecibida),this.contador=parseInt(this.dataRecibida)+1,this.nombre=this.ApiService.calentamiento[this.contador],this.imagen="".concat(this.URL,"/imagenes/").concat(this.nombre.cod,"/").concat(this.nombre.id,".jpg"),this.timeLeft=5,this.startTimer();case 1:case"end":return n.stop()}}),n,this)})))}},{key:"atras",value:function(){this.ruta.pop()}},{key:"startTimer",value:function(){var n=this;this.zero=null,this.tiemposegundo=setInterval((function(){10===n.timeLeft&&(console.log("activate"),n.zero=0),1===n.timeLeft&&n.playSonido(2),n.timeLeft>1&&n.timeLeft<=5&&n.playSonido(1),n.timeLeft>0?n.timeLeft--:n.timeLeft=0}),1e3)}},{key:"redirigir",value:function(){clearInterval(this.tiemposegundo),this.ruta.navigateForward(["/bateriacalentamientohome/".concat(this.contador)]),this.pauseSonido()}},{key:"playSonido",value:function(n){this.audio=new Audio,this.audio.src=1==n?this.sonido:this.sonido2,this.audio.load(),this.audio.play()}},{key:"pauseSonido",value:function(){this.audio.pause()}},{key:"ionViewDidLeave",value:function(){clearInterval(this.tiemposegundo),this.audio&&this.audio.pause()}}]),n}(),d=t("iInd"),h=e.ob({encapsulation:0,styles:[[".grid1[_ngcontent-%COMP%]{background-color:#f4f3f1;padding:0}.grid2[_ngcontent-%COMP%]{padding:0}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}ion-content[_ngcontent-%COMP%]{--background:black}.titulodescanso[_ngcontent-%COMP%]{color:#959595;text-align:center;font-size:50px}.ion-text-center.titulo[_ngcontent-%COMP%]{font-weight:800}.center[_ngcontent-%COMP%]{text-align:center;font-size:38px;font-weight:800;padding-top:0;width:100%;margin-top:5px;margin-bottom:0}.ion-text-center.titulo2[_ngcontent-%COMP%]{width:100%;font-size:22px;padding-top:28px}.center.do[_ngcontent-%COMP%]{margin-top:0;font-weight:400;font-size:22px;margin-bottom:15px}.centerdo[_ngcontent-%COMP%]{text-align:center;margin:0 auto}img[_ngcontent-%COMP%]{height:auto;width:auto}"]],data:{}});function m(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,1,"p",[["class","ion-text-center titulo2"],["style","margin-top: 0; margin-bottom: 0; padding-top: 0;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Comienza en!"]))],null,null)}function g(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.imagen)}))}function f(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,3,"ion-header",[["class","ion-no-border"]],null,null,null,u.lb,u.t)),e.pb(1,49152,null,0,a.C,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(n()(),e.qb(2,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(n()(),e.qb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),e.qb(4,0,null,null,36,"ion-content",[],null,null,null,u.gb,u.o)),e.pb(5,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(n()(),e.qb(6,0,null,0,19,"ion-grid",[["class","grid1"]],null,null,null,u.kb,u.s)),e.pb(7,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(n()(),e.qb(8,0,null,0,13,"ion-row",[],null,null,null,u.ub,u.C)),e.pb(9,49152,null,0,a.hb,[e.h,e.k,e.x],null,null),(n()(),e.fb(16777216,null,0,1,null,m)),e.pb(11,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(12,0,null,0,1,"p",[["class","center"]],null,null,null,null,null)),(n()(),e.Jb(13,null,["0",""])),(n()(),e.qb(14,0,null,0,1,"p",[["class","center do"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Tu siguiente ejercicio es: "])),(n()(),e.qb(16,0,null,0,1,"p",[["class","center do"],["style","color: red;"]],null,null,null,null,null)),(n()(),e.Jb(17,null,[""," "])),(n()(),e.qb(18,0,null,0,3,"ion-col",[["class","centerdo"],["size","8"],["style","padding: 0px;"]],null,null,null,u.fb,u.n)),e.pb(19,49152,null,0,a.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.fb(16777216,null,0,1,null,g)),e.pb(21,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(22,0,null,0,3,"ion-row",[],null,null,null,u.ub,u.C)),e.pb(23,49152,null,0,a.hb,[e.h,e.k,e.x],null,null),(n()(),e.qb(24,0,null,0,1,"ion-col",[["size","12"]],null,null,null,u.fb,u.n)),e.pb(25,49152,null,0,a.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.qb(26,0,null,0,2,"div",[["class","grid2"]],null,null,null,null,null)),(n()(),e.qb(27,0,null,null,1,"h1",[["class","titulodescanso"],["style","margin-top: 0px !important;color: red;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Descanso"])),(n()(),e.qb(29,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.ib,u.p)),e.pb(30,49152,null,0,a.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(31,0,null,0,3,"ion-fab-button",[["color","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.redirigir()&&e),e}),u.hb,u.q)),e.pb(32,49152,null,0,a.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(33,0,null,0,1,"ion-icon",[["name","arrow-forward-outline"]],null,null,null,u.mb,u.u)),e.pb(34,49152,null,0,a.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.qb(35,0,null,0,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.ib,u.p)),e.pb(36,49152,null,0,a.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(37,0,null,0,3,"ion-fab-button",[["color","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.atras()&&e),e}),u.hb,u.q)),e.pb(38,49152,null,0,a.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(39,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,u.mb,u.u)),e.pb(40,49152,null,0,a.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,1,0,!0),n(l,11,0,t.mostrartitulo),n(l,19,0,"8"),n(l,21,0,t.imagen),n(l,25,0,"12"),n(l,30,0,"end","bottom"),n(l,32,0,"light"),n(l,34,0,"arrow-forward-outline"),n(l,36,0,"start","bottom"),n(l,38,0,"light"),n(l,40,0,"arrow-back-outline")}),(function(n,l){var t=l.component;n(l,13,0,t.timeLeft),n(l,17,0,t.nombre.name)}))}var k=e.mb("app-bateriacalentamientoesperahome",p,(function(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,1,"app-bateriacalentamientoesperahome",[],null,null,null,f,h)),e.pb(1,114688,null,0,p,[d.a,s.a,a.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),x=t("s7LF"),v=function n(){_classCallCheck(this,n)};t.d(l,"BateriacalentamientoesperahomePageModuleNgFactory",(function(){return w}));var w=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,k]],[3,e.j],e.v]),e.Ab(4608,r.m,r.l,[e.s,[2,r.w]]),e.Ab(4608,x.q,x.q,[]),e.Ab(4608,a.c,a.c,[e.x,e.g]),e.Ab(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Ab(4608,a.Lb,a.Lb,[a.c,e.j,e.p]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,x.p,x.p,[]),e.Ab(1073742336,x.e,x.e,[]),e.Ab(1073742336,a.Cb,a.Cb,[]),e.Ab(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.Ab(1073742336,v,v,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);