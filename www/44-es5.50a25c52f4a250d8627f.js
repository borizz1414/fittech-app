function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{M5Pl:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),u=t("MKJQ"),r=t("sZkV"),a=t("SVse"),c=t("Qmup"),s=t("cxbk"),b=function(){function n(l,t,e){_classCallCheck(this,n),this.capturar=l,this.ruta=t,this.ApiService=e,this.mostrar=!0,this.URL=s.a.url}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.dataRecibida=this.capturar.snapshot.paramMap.get("id"),this.nombre=this.ApiService.demostracionEjercicio.nombre,this.buscador=this.ApiService.rutina,this.encontrar=this.buscador.find((function(l){return l.name==n.nombre})),this.video="".concat(this.URL,"/videos/").concat(this.encontrar.cod,"/").concat(this.encontrar.url),this.timeLeft=this.ApiService.ratio,this.startTimer()}},{key:"atras",value:function(){this.ruta.navigateByUrl("entrenamientos"),this.pauseVideo()}},{key:"pauseVideo",value:function(){this.mostrar=!1,this.txtVideo.nativeElement.pause(),clearInterval(this.tiemposegundo)}},{key:"playVideo",value:function(){this.mostrar=!0,this.txtVideo.nativeElement.play(),this.startTimer()}},{key:"fullscreen",value:function(){this.txtVideo.nativeElement.requestFullscreen?this.txtVideo.nativeElement.requestFullscreen():this.txtVideo.nativeElement.mozRequestFullScreen?this.txtVideo.nativeElement.mozRequestFullScreen():this.txtVideo.nativeElement.webkitRequestFullscreen?this.txtVideo.nativeElement.webkitRequestFullscreen():this.txtVideo.nativeElement.msRequestFullscreen&&this.txtVideo.nativeElement.txtVideo.nativeElementm.msRequestFullscreen()}},{key:"videoEnd",value:function(){this.mostrar=!1,clearInterval(this.tiemposegundo),this.timeLeft=this.repeticion,this.zero=null}},{key:"startTimer",value:function(){var n=this;this.tiemposegundo=setInterval((function(){n.timeLeft>0?(n.timeLeft--,n.timeLeft<10&&(console.log("activate"),n.zero=0)):(n.zero=null,n.timeLeft=0,n.timeLeft=n.repeticion)}),1e3)}},{key:"onMetadata",value:function(n,l){console.log("metadata: ",n),console.log("cargado: ",n.target.readyState),this.repeticion=parseInt(n.target.duration),this.timeLeft=parseInt(n.target.duration)}},{key:"ucFirst",value:function(n){return n.substring(0,1).toUpperCase()+n.substring(1)}}]),n}(),d=t("iInd"),h=e.ob({encapsulation:0,styles:[[".logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.videoReproductor[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%}@media (max-width:375px){.videoReproductor[_ngcontent-%COMP%]{height:11em}}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%}.contenedor-cabezera[_ngcontent-%COMP%]{width:100%;max-height:30%;height:auto;background-color:#000;padding:0;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;overflow:hidden}.contenedor-cabezera[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px!important}.contenedor-cuerpo[_ngcontent-%COMP%]{width:100%;max-height:70%;height:70%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.controlar-texto[_ngcontent-%COMP%]{margin:10px}.titulo[_ngcontent-%COMP%]{color:#000;font-size:1.4rem;font-weight:800;text-align:center}.reloj[_ngcontent-%COMP%]{margin:10px!important;font-size:4em;font-weight:800}.redondear[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1;border:4px}h2[_ngcontent-%COMP%]{text-align:center;text-transform:capitalize;font-weight:700;margin-top:10px!important}.fullscrean[_ngcontent-%COMP%]{position:absolute;right:0;font-size:40px;color:#f53d3d;margin-right:4%;top:9.375rem}video[poster][_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}"]],data:{}});function p(n){return e.Lb(0,[(n()(),e.qb(0,0,[[1,0],["myVideo",1]],null,1,"video",[["autoplay",""],["class","videoReproductor"],["playsinline",""],["poster","assets/img/videogif.gif"],["width","100%"]],null,[[null,"ended"],[null,"loadedmetadata"]],(function(n,l,t){var e=!0,o=n.component;return"ended"===l&&(e=!1!==o.videoEnd()&&e),"loadedmetadata"===l&&(e=!1!==o.onMetadata(t,o.video)&&e),e}),null,null)),(n()(),e.qb(1,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,1,0,l.component.video)}))}function m(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.ib,u.p)),e.pb(1,49152,null,0,r.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.pauseVideo()&&e),e}),u.hb,u.q)),e.pb(3,49152,null,0,r.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(4,0,null,0,1,"ion-icon",[["name","pause-outline"]],null,null,null,u.mb,u.u)),e.pb(5,49152,null,0,r.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"center","bottom"),n(l,3,0,"danger"),n(l,5,0,"pause-outline")}),null)}function f(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.ib,u.p)),e.pb(1,49152,null,0,r.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.playVideo()&&e),e}),u.hb,u.q)),e.pb(3,49152,null,0,r.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(4,0,null,0,1,"ion-icon",[["name","play-outline"]],null,null,null,u.mb,u.u)),e.pb(5,49152,null,0,r.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"center","bottom"),n(l,3,0,"danger"),n(l,5,0,"play-outline")}),null)}function g(n){return e.Lb(0,[e.Hb(671088640,1,{txtVideo:0}),(n()(),e.qb(1,0,null,null,5,"ion-header",[["class","ion-no-border"]],null,null,null,u.lb,u.t)),e.pb(2,49152,null,0,r.C,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(n()(),e.qb(3,0,null,0,3,"ion-toolbar",[],null,null,null,u.Jb,u.R)),e.pb(4,49152,null,0,r.Ab,[e.h,e.k,e.x],null,null),(n()(),e.qb(5,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(n()(),e.qb(6,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),e.qb(7,0,null,null,8,"ion-content",[],null,null,null,u.gb,u.o)),e.pb(8,49152,null,0,r.v,[e.h,e.k,e.x],null,null),(n()(),e.fb(16777216,null,0,1,null,p)),e.pb(10,16384,null,0,a.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(11,0,null,0,4,"div",[["class","contenedor-cabezera"]],null,null,null,null,null)),(n()(),e.qb(12,0,null,null,1,"p",[["class","titulo"],["style","color: white;"]],null,null,null,null,null)),(n()(),e.Jb(13,null,["",""])),(n()(),e.qb(14,0,null,null,1,"p",[["style","color: white;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Demostraci\xf3n del ejercicio"])),(n()(),e.qb(16,0,null,null,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.ib,u.p)),e.pb(17,49152,null,0,r.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(18,0,null,0,3,"ion-fab-button",[["color","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.atras()&&e),e}),u.hb,u.q)),e.pb(19,49152,null,0,r.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(20,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,u.mb,u.u)),e.pb(21,49152,null,0,r.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.fb(16777216,null,null,1,null,m)),e.pb(23,16384,null,0,a.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,f)),e.pb(25,16384,null,0,a.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,!0),n(l,10,0,t.video),n(l,17,0,"start","bottom"),n(l,19,0,"light"),n(l,21,0,"arrow-back-outline"),n(l,23,0,t.mostrar),n(l,25,0,!t.mostrar)}),(function(n,l){var t=l.component;n(l,13,0,t.ucFirst(t.nombre))}))}var v=e.mb("app-bateria",b,(function(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,1,"app-bateria",[],null,null,null,g,h)),e.pb(1,114688,null,0,b,[d.a,d.m,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),x=t("s7LF"),k=function n(){_classCallCheck(this,n)},w=t("+G0P");t.d(l,"BateriaPageModuleNgFactory",(function(){return y}));var y=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,v]],[3,e.j],e.v]),e.Ab(4608,a.m,a.l,[e.s,[2,a.w]]),e.Ab(4608,x.q,x.q,[]),e.Ab(4608,r.c,r.c,[e.x,e.g]),e.Ab(4608,r.Fb,r.Fb,[r.c,e.j,e.p]),e.Ab(4608,r.Lb,r.Lb,[r.c,e.j,e.p]),e.Ab(1073742336,a.b,a.b,[]),e.Ab(1073742336,x.p,x.p,[]),e.Ab(1073742336,x.e,x.e,[]),e.Ab(1073742336,r.Cb,r.Cb,[]),e.Ab(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.Ab(1073742336,k,k,[]),e.Ab(1073742336,w.a,w.a,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);