(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{SNxZ:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var i=t("pMnS"),r=t("MKJQ"),u=t("sZkV"),a=t("SVse"),c=t("Qmup"),s=t("AytR");class b{constructor(n,l,t){this.route=n,this.navCtrl=l,this.ApiService=t,this.mostrar=!0,this.URL=s.a.url}ngOnInit(){this.route.queryParams.subscribe(n=>{this.exercise=JSON.parse(n.data),this.name=this.exercise.name,this.video=`${this.URL}/videos/${this.exercise.cod}/${this.exercise.url}`,this.timeLeft=this.ApiService.ratio,this.startTimer()})}atras(){this.navCtrl.pop(),this.pauseVideo()}pauseVideo(){this.mostrar=!1,this.txtVideo.nativeElement.pause(),clearInterval(this.tiemposegundo)}playVideo(){this.mostrar=!0,this.txtVideo.nativeElement.play(),this.startTimer()}fullscreen(){this.txtVideo.nativeElement.requestFullscreen?this.txtVideo.nativeElement.requestFullscreen():this.txtVideo.nativeElement.mozRequestFullScreen?this.txtVideo.nativeElement.mozRequestFullScreen():this.txtVideo.nativeElement.webkitRequestFullscreen?this.txtVideo.nativeElement.webkitRequestFullscreen():this.txtVideo.nativeElement.msRequestFullscreen&&this.txtVideo.nativeElement.txtVideo.nativeElementm.msRequestFullscreen()}videoEnd(){this.mostrar=!1,clearInterval(this.tiemposegundo),this.timeLeft=this.repeticion,this.zero=null}startTimer(){this.tiemposegundo=setInterval(()=>{this.timeLeft>0?(this.timeLeft--,this.timeLeft<10&&(console.log("activate"),this.zero=0)):(this.zero=null,this.timeLeft=0,this.timeLeft=this.repeticion)},1e3)}onMetadata(n,l){console.log("metadata: ",n),console.log("cargado: ",n.target.readyState),this.repeticion=parseInt(n.target.duration),this.timeLeft=parseInt(n.target.duration)}ucFirst(n){return n.substring(0,1).toUpperCase()+n.substring(1)}}var d=t("iInd"),h=e.ob({encapsulation:0,styles:[[".logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}@media screen and (orientation:landscape){.cabezera[_ngcontent-%COMP%]{display:none!important}}.videoReproductor[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%;height:13em}@media (max-height:640px){.videoReproductor[_ngcontent-%COMP%]{height:auto;-o-object-fit:fill;object-fit:fill}}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%}.contenedor-cabezera[_ngcontent-%COMP%]{width:100%;max-height:35%;height:auto;background-color:#000;padding:0;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;overflow:hidden}.contenedor-cabezera[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px!important}.contenedor-cuerpo[_ngcontent-%COMP%]{width:100%;max-height:70%;height:70%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.controlar-texto[_ngcontent-%COMP%]{margin:10px}.titulo[_ngcontent-%COMP%]{color:#000;font-size:1.4rem;font-weight:800;text-align:center}.reloj[_ngcontent-%COMP%]{margin:10px!important;font-size:4em;font-weight:800}.redondear[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1;border:4px}h2[_ngcontent-%COMP%]{text-align:center;text-transform:capitalize;font-weight:700;margin-top:10px!important}.fullscrean[_ngcontent-%COMP%]{position:absolute;right:0;font-size:40px;color:#f53d3d;margin-right:4%;top:9.375rem}video[poster][_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}"]],data:{}});function p(n){return e.Lb(0,[(n()(),e.qb(0,0,[[1,0],["myVideo",1]],null,1,"video",[["autoplay",""],["class","videoReproductor"],["playsinline",""],["poster","assets/img/videogif.gif"],["width","100%"]],null,[[null,"ended"],[null,"loadedmetadata"]],(function(n,l,t){var e=!0,o=n.component;return"ended"===l&&(e=!1!==o.videoEnd()&&e),"loadedmetadata"===l&&(e=!1!==o.onMetadata(t,o.video)&&e),e}),null,null)),(n()(),e.qb(1,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,1,0,l.component.video)}))}function m(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,r.ib,r.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.pauseVideo()&&e),e}),r.hb,r.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(4,0,null,0,1,"ion-icon",[["name","pause-outline"]],null,null,null,r.mb,r.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"center","bottom"),n(l,3,0,"danger"),n(l,5,0,"pause-outline")}),null)}function g(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,r.ib,r.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.playVideo()&&e),e}),r.hb,r.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(4,0,null,0,1,"ion-icon",[["name","play-outline"]],null,null,null,r.mb,r.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"center","bottom"),n(l,3,0,"danger"),n(l,5,0,"play-outline")}),null)}function f(n){return e.Lb(0,[e.Hb(671088640,1,{txtVideo:0}),(n()(),e.qb(1,0,null,null,3,"ion-header",[["class","ion-no-border"]],null,null,null,r.lb,r.t)),e.pb(2,49152,null,0,u.C,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(n()(),e.qb(3,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(n()(),e.qb(4,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),e.fb(16777216,null,null,1,null,p)),e.pb(6,16384,null,0,a.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(7,0,null,null,6,"ion-content",[],null,null,null,r.gb,r.o)),e.pb(8,49152,null,0,u.v,[e.h,e.k,e.x],null,null),(n()(),e.qb(9,0,null,0,4,"div",[["class","contenedor-cabezera"]],null,null,null,null,null)),(n()(),e.qb(10,0,null,null,1,"p",[["class","titulo"],["style","color: white;"]],null,null,null,null,null)),(n()(),e.Jb(11,null,["",""])),(n()(),e.qb(12,0,null,null,1,"p",[["style","color: white;"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Demostraci\xf3n del ejercicio"])),(n()(),e.qb(14,0,null,null,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,r.ib,r.p)),e.pb(15,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.qb(16,0,null,0,3,"ion-fab-button",[["color","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.atras()&&e),e}),r.hb,r.q)),e.pb(17,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.qb(18,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,r.mb,r.u)),e.pb(19,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.fb(16777216,null,null,1,null,m)),e.pb(21,16384,null,0,a.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,null,1,null,g)),e.pb(23,16384,null,0,a.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,!0),n(l,6,0,t.video),n(l,15,0,"start","bottom"),n(l,17,0,"light"),n(l,19,0,"arrow-back-outline"),n(l,21,0,t.mostrar),n(l,23,0,!t.mostrar)}),(function(n,l){var t=l.component;n(l,11,0,t.ucFirst(t.name))}))}function x(n){return e.Lb(0,[(n()(),e.qb(0,0,null,null,1,"app-bateria-remplazo",[],null,null,null,f,h)),e.pb(1,114688,null,0,b,[d.a,u.Gb,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var v=e.mb("app-bateria-remplazo",b,x,{},{},[]),k=t("s7LF");class w{}t.d(l,"BateriaRemplazoPageModuleNgFactory",(function(){return q}));var q=e.nb(o,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,v]],[3,e.j],e.v]),e.Ab(4608,a.m,a.l,[e.s,[2,a.w]]),e.Ab(4608,k.q,k.q,[]),e.Ab(4608,u.c,u.c,[e.x,e.g]),e.Ab(4608,u.Fb,u.Fb,[u.c,e.j,e.p]),e.Ab(4608,u.Lb,u.Lb,[u.c,e.j,e.p]),e.Ab(1073742336,a.b,a.b,[]),e.Ab(1073742336,k.p,k.p,[]),e.Ab(1073742336,k.e,k.e,[]),e.Ab(1073742336,u.Cb,u.Cb,[]),e.Ab(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.Ab(1073742336,w,w,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);