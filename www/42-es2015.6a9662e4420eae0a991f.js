(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{h1QJ:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var o=t("pMnS"),a=t("MKJQ"),u=t("sZkV"),s=t("SVse"),r=t("mrSG"),c=t("HYGi");const b=t("cxbk").a.url;class h{constructor(l,n,t,e){this.service=l,this.navCtrl=n,this.platform=t,this.alertController=e,this.rutinas=[],this.status="rutina",this.secuencia=1,this.actual=0,this.mostrar=!0,this.sonido="../../../assets/sonido/reloj.mp3",this.sonido2="../../../assets/sonido/campana.mp3",this.data=[],this.arraytemp=[],this.pausarApp=this.platform.pause.subscribe(()=>r.__awaiter(this,void 0,void 0,(function*(){this.pauseTimer()}))),this.ReanudarAPP=this.platform.resume.subscribe(()=>r.__awaiter(this,void 0,void 0,(function*(){this.alerta()})))}ngOnInit(){return r.__awaiter(this,void 0,void 0,(function*(){this.rutinas=yield this.service.getEstiramientos(),this.rutinas.Estiramiento.forEach(l=>{if(l.side<2){const n=Object.assign({},l);n.mostrar="derecha";const t=Object.assign({},l);t.mostrar="izquierda",this.arraytemp.push(n),this.arraytemp.push(t)}else this.arraytemp.push(l)}),console.log(this.arraytemp),this.setValues(),this.startVideo()}))}setValues(){return r.__awaiter(this,void 0,void 0,(function*(){this.final=this.arraytemp.length,this.total=this.arraytemp.length,this.stages=this.data.stages}))}startVideo(){return r.__awaiter(this,void 0,void 0,(function*(){this.zero=null,this.ready=!1,this.setValues(),this.identificador=this.arraytemp[this.actual].mostrar,this.rutinas=this.arraytemp,this.video=`${b}/videos/estiramientos/${this.rutinas[this.actual].link}`,console.log(this.video),this.mostrar=!0,this.timeLeft=this.rutinas[this.actual].duration;var l=setInterval(()=>{console.log(this.txtVideo.nativeElement.readyState),4===this.txtVideo.nativeElement.readyState&&(this.txtVideo.nativeElement.play(),this.ready=!0,clearInterval(l),this.startTimer())},800)}))}startTimer(){this.zero=null,this.btn=!0,this.tiemposegundo=setInterval(()=>{10===this.timeLeft&&(console.log("activate"),this.zero=0),1===this.timeLeft&&this.playSonido(2),this.timeLeft>1&&this.timeLeft<=5&&this.playSonido(1),this.timeLeft>0?this.timeLeft--:(this.timeLeft=0,this.siguiente(),this.txtVideo.nativeElement.pause())},1e3)}pauseTimer(){clearInterval(this.tiemposegundo),this.mostrar=!1,this.txtVideo.nativeElement.pause()}playTimer(){this.startTimer(),this.mostrar=!0,this.txtVideo.nativeElement.play()}playSonido(l){this.audio=new Audio,this.audio.src=1==l?this.sonido:this.sonido2,this.audio.load(),this.audio.play()}siguiente(){this.actual==this.total?(this.actual=0,this.secuencia++,clearInterval(this.tiemposegundo),this.timerDescanse(),this.status="descanso"):(this.actual++,console.log("Actual",this.actual),console.log("total",this.total),console.log("Rutina",this.rutinas),this.actual===this.total?this.navCtrl.navigateRoot("/percepcionentrenamiento"):this.actual==this.total?(this.secuencia++,this.actual=0,this.setValues(),clearInterval(this.tiemposegundo),this.timerDescanse(),this.status="descanso"):(clearInterval(this.tiemposegundo),this.timerDescanse(),this.status="descanso"))}atras(){this.actual<1&&this.secuencia<=1?(clearInterval(this.tiemposegundo),this.navCtrl.pop()):(clearInterval(this.tiemposegundo),this.timerDescanse(),this.status="descanso")}timerDescanse(l=null){return r.__awaiter(this,void 0,void 0,(function*(){this.zero=null,this.video2=`${b}/imagenes/estiramientos/${this.rutinas[this.actual].id}.jpg`,console.log(this.video2),this.timeLeft=l||5,this.tiemposegundo=setInterval(()=>{this.timeLeft<=10&&(console.log("activate"),this.zero=0),this.timeLeft>=1&&this.timeLeft<5&&this.playSonido(1),this.timeLeft>0?this.timeLeft--:(this.timeLeft=0,this.siguiente_())},1e3)}))}atras_(){clearInterval(this.tiemposegundo),console.log(this.actual),console.log(this.secuencia),0==this.actual&&this.secuencia>1?(this.secuencia--,this.setValues(),this.actual=this.total-1,console.log(this.secuencia,this.actual),clearInterval(this.tiemposegundo),this.status="rutina",this.startVideo()):0!=this.actual?(this.actual--,this.status="rutina",this.startVideo()):this.secuencia>1&&(this.secuencia--,this.setValues(),this.actual=this.total-1,this.status="rutina",this.startVideo())}siguiente_(){clearInterval(this.tiemposegundo),this.status="rutina",this.startVideo()}confirmation(){return r.__awaiter(this,void 0,void 0,(function*(){this.pauseTimer();const l=yield this.alertController.create({message:"<h2>Si finalizas aqu\xed no contar\xe1 la sesi\xf3n<br>\xbfseguro quieres finalizar?</h2>",cssClass:"customMensaje1",buttons:[{text:"No",role:"cancel",cssClass:"cancelButton",handler:l=>{this.playTimer()}},{text:"Si",cssClass:"confirmButton",handler:()=>{clearInterval(this.tiemposegundo),this.timeLeft=-1,this.navCtrl.navigateRoot("tabs/dashboard")}}]});yield l.present()}))}confirmation2(){return r.__awaiter(this,void 0,void 0,(function*(){clearInterval(this.tiemposegundo);const l=yield this.alertController.create({header:"La sesi\xf3n ha sido pausada",cssClass:"customMensaje1",buttons:[{text:"Continuar",role:"cancel",cssClass:"cancelButton",handler:l=>{this.timerDescanse(this.timeLeft)}},{text:"Finalizar",cssClass:"confirmButton",handler:()=>{this.navCtrl.navigateRoot("tabs/dashboard")}}]});yield l.present()}))}alerta(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"La sesi\xf3n ha sido pausada",cssClass:"customMensaje1",buttons:[{text:"Continuar",role:"cancel",cssClass:"cancelButton",handler:l=>{this.playTimer()}},{text:"Finalizar",cssClass:"confirmButton",handler:()=>{this.confirmarSalida()}}]});yield l.present()}))}confirmarSalida(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Si finalizas aqu\xed no contar\xe1 la sesi\xf3n \xbfseguro quieres finalizar?",cssClass:"customMensaje1",buttons:[{text:"No",role:"cancel",cssClass:"cancelButton",handler:l=>{"descanso"==this.status?this.siguiente_():this.playTimer()}},{text:"Si",cssClass:"confirmButton",handler:()=>{clearInterval(this.tiemposegundo),this.navCtrl.navigateRoot("tabs/dashboard")}}]});yield l.present()}))}ionViewWillLeave(){console.log("cerrar la supcripcion"),clearInterval(this.tiemposegundo),this.audio&&this.audio.pause(),this.ReanudarAPP.unsubscribe(),this.pausarApp.unsubscribe()}}var d=e.ob({encapsulation:0,styles:[[".btn-top[_ngcontent-%COMP%]{margin:0;padding:0;position:absolute;top:65px;left:4px}@media screen and (orientation:landscape){.btn-top[_ngcontent-%COMP%]{top:0!important}.cabezera[_ngcontent-%COMP%]{display:none!important}}.videoReproductor[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%}@media (max-height:640px){.videoReproductor[_ngcontent-%COMP%]{height:auto;-o-object-fit:fill;object-fit:fill}}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;margin-bottom:3rem}.contenedor-cuerpo[_ngcontent-%COMP%]{width:100%;max-height:70%;height:60%;display:-webkit-box;display:flex;margin-top:.9rem;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.contenedor-cabezera[_ngcontent-%COMP%]{width:100%;max-height:5rem;height:4rem;background-color:#000;color:#fff;padding:0;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;overflow:hidden}.titulo[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:800}.reloj[_ngcontent-%COMP%]{margin:2px!important;font-size:4em;font-weight:800}.text-reloj-titulo[_ngcontent-%COMP%]{font-weight:700;margin:0}.text-reloj[_ngcontent-%COMP%]{margin:0;text-align:center;font-size:1.2rem}@media (max-height:640px){.contenedor-cabezera[_ngcontent-%COMP%]{height:3em}.text-reloj[_ngcontent-%COMP%]{font-size:1em}}.grid1[_ngcontent-%COMP%]{background-color:#f4f3f1;padding:0}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.titulodescanso[_ngcontent-%COMP%]{color:#959595;text-align:center;font-size:50px}.ion-text-center.titulo[_ngcontent-%COMP%]{font-weight:800}.center[_ngcontent-%COMP%]{text-align:center;font-size:38px;font-weight:800;padding-top:0;width:100%;margin-top:5px;margin-bottom:0}.ion-text-center.titulo2[_ngcontent-%COMP%]{width:100%;font-size:22px;padding-top:28px}.center.do[_ngcontent-%COMP%]{margin-top:0;font-weight:400;font-size:22px;margin-bottom:15px}.centerdo[_ngcontent-%COMP%]{text-align:center;margin:0 auto}img[_ngcontent-%COMP%]{height:auto;width:auto}.animacion[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.ocultarElemento[_ngcontent-%COMP%]{-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:hidebutton;animation-name:hidebutton}@-webkit-keyframes hidebutton{0%,90%{opacity:0;-webkit-transform:translateY(150px);transform:translateY(150px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes hidebutton{0%,90%{opacity:0;-webkit-transform:translateY(150px);transform:translateY(150px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(200px);transform:translateX(200px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(200px);transform:translateX(200px)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.fadeInRight[_ngcontent-%COMP%]{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}.segundos[_ngcontent-%COMP%]{margin:-1rem 0 0;font-size:1rem}"]],data:{}});function m(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,5,"ion-fab",[["class","animated fadeInUp delay-2s"],["horizontal","start"],["slot","fixed"],["vertical","top"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,3,"ion-fab-button",[["size","small"],["style","--background:#ef4044"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.confirmation()&&e),e}),a.hb,a.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,a.mb,a.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"start","top"),l(n,3,0,"small"),l(n,5,0,"arrow-back-outline")}),null)}function p(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,5,"ion-fab",[["class","animated fadeInUp delay-2s"],["horizontal","start"],["slot","fixed"],["vertical","top"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,3,"ion-fab-button",[["size","small"],["style","--background:#ef4044"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.confirmation2()&&e),e}),a.hb,a.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,a.mb,a.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"start","top"),l(n,3,0,"small"),l(n,5,0,"arrow-back-outline")}),null)}function f(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.video2)}))}function g(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,5,"ion-fab",[["class","ocultarElemento"],["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","light"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.atras_()&&e),e}),a.hb,a.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,a.mb,a.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"start","bottom"),l(n,3,0,"light"),l(n,5,0,"arrow-back-outline")}),null)}function v(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,5,"ion-fab",[["class","ocultarElemento"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","light"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.siguiente_()&&e),e}),a.hb,a.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","arrow-forward-outline"]],null,null,null,a.mb,a.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,3,0,"light"),l(n,5,0,"arrow-forward-outline")}),null)}function x(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,28,"ion-content",[["style","--background:black;"]],null,null,null,a.gb,a.o)),e.pb(1,49152,null,0,u.v,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,19,"ion-grid",[["class","grid1"]],null,null,null,a.kb,a.s)),e.pb(3,49152,null,0,u.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,13,"ion-row",[],null,null,null,a.ub,a.C)),e.pb(5,49152,null,0,u.hb,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"p",[["class","ion-text-center titulo2"],["style","margin-top: 0; margin-bottom: 0; padding-top: 0;"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Comienza en"])),(l()(),e.qb(8,0,null,0,1,"p",[["class","center"]],null,null,null,null,null)),(l()(),e.Jb(9,null,["0",""])),(l()(),e.qb(10,0,null,0,1,"p",[["class","center do"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Tu siguiente estiramiento es: "])),(l()(),e.qb(12,0,null,0,1,"p",[["class","center do"],["style","color: red;"]],null,null,null,null,null)),(l()(),e.Jb(13,null,[""," "])),(l()(),e.qb(14,0,null,0,3,"ion-col",[["class","centerdo"],["size","12"],["style","padding: 0px;"]],null,null,null,a.fb,a.n)),e.pb(15,49152,null,0,u.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.fb(16777216,null,0,1,null,f)),e.pb(17,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(18,0,null,0,3,"ion-row",[["style","margin-top: -1rem;"]],null,null,null,a.ub,a.C)),e.pb(19,49152,null,0,u.hb,[e.h,e.k,e.x],null,null),(l()(),e.qb(20,0,null,0,1,"ion-col",[["size","12"]],null,null,null,a.fb,a.n)),e.pb(21,49152,null,0,u.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(22,0,null,0,6,"div",[["class","grid2"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,g)),e.pb(24,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,v)),e.pb(26,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(27,0,null,null,1,"h1",[["class","titulodescanso"],["style","margin-top: 10px !important;color: white;"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Descanso"]))],(function(l,n){var t=n.component;l(n,15,0,"12"),l(n,17,0,t.video2),l(n,21,0,"12"),l(n,24,0,t.ready),l(n,26,0,t.ready)}),(function(l,n){var t=n.component;l(n,9,0,t.timeLeft),l(n,13,0,t.nombre)}))}function k(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,4,"ion-fab",[["horizontal","end"],["slot","fixed"],["style","top: 45%;"],["vertical","center"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,2,"ion-badge",[["color","danger"]],null,null,null,a.V,a.d)),e.pb(3,49152,null,0,u.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(-1,0,["Derecha"]))],(function(l,n){l(n,1,0,"end","center"),l(n,3,0,"danger")}),null)}function y(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,4,"ion-fab",[["horizontal","start"],["slot","fixed"],["style","top: 45%;"],["vertical","center"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,2,"ion-badge",[["color","danger"]],null,null,null,a.V,a.d)),e.pb(3,49152,null,0,u.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(-1,0,["Izquierda"]))],(function(l,n){l(n,1,0,"start","center"),l(n,3,0,"danger")}),null)}function w(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.video)}))}function z(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,3,"ion-fab-button",[["color","dark"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.atras()&&e),e}),a.hb,a.q)),e.pb(1,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(2,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,a.mb,a.u)),e.pb(3,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"dark"),l(n,3,0,"arrow-back-outline")}),null)}function q(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,3,"ion-fab",[["class","ocultarElemento"],["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.fb(16777216,null,0,1,null,z)),e.pb(3,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"start","bottom"),l(n,3,0,t.btn)}),null)}function C(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,3,"ion-fab-button",[["color","dark"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.siguiente()&&e),e}),a.hb,a.q)),e.pb(1,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(2,0,null,0,1,"ion-icon",[["name","arrow-forward-outline"]],null,null,null,a.mb,a.u)),e.pb(3,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"dark"),l(n,3,0,"arrow-forward-outline")}),null)}function I(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,3,"ion-fab",[["class","ocultarElemento"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.fb(16777216,null,0,1,null,C)),e.pb(3,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"end","bottom"),l(n,3,0,t.btn)}),null)}function _(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.pauseTimer()&&e),e}),a.hb,a.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","pause-outline"]],null,null,null,a.mb,a.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"center","bottom"),l(n,3,0,"danger"),l(n,5,0,"pause-outline")}),null)}function L(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.ib,a.p)),e.pb(1,49152,null,0,u.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(2,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.playTimer()&&e),e}),a.hb,a.q)),e.pb(3,49152,null,0,u.y,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","play-outline"]],null,null,null,a.mb,a.u)),e.pb(5,49152,null,0,u.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"center","bottom"),l(n,3,0,"danger"),l(n,5,0,"play-outline")}),null)}function M(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,26,null,null,null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,k)),e.pb(2,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,y)),e.pb(4,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(5,0,[[1,0],["myVideo",1]],null,2,"video",[["class","videoReproductor"],["loop",""],["muted","muted"],["playsinline",""],["poster","assets/img/videogif.gif"],["width","100%"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,w)),e.pb(7,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(8,0,null,null,10,"ion-content",[],null,null,null,a.gb,a.o)),e.pb(9,49152,null,0,u.v,[e.h,e.k,e.x],null,null),(l()(),e.qb(10,0,null,0,8,"div",[["class","contenedor"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,2,"div",[["class","contenedor-cabezera"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"p",[["class","text-reloj"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["\xa1De tu esfuerzo depende tu resultado, no pares!"])),(l()(),e.qb(14,0,null,null,4,"div",[["class","contenedor-cuerpo"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,1,"p",[["class","reloj"]],null,null,null,null,null)),(l()(),e.Jb(16,null,["","",""])),(l()(),e.qb(17,0,null,null,1,"p",[["class","segundos"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Segundos"])),(l()(),e.fb(16777216,null,null,1,null,q)),e.pb(20,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,I)),e.pb(22,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,_)),e.pb(24,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,L)),e.pb(26,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(0,null,null,0))],(function(l,n){var t=n.component;l(n,2,0,"derecha"==t.identificador),l(n,4,0,"izquierda"==t.identificador),l(n,7,0,t.video),l(n,20,0,t.ready),l(n,22,0,t.ready),l(n,24,0,t.mostrar),l(n,26,0,!t.mostrar)}),(function(l,n){var t=n.component;l(n,16,0,t.zero,t.timeLeft)}))}function P(l){return e.Lb(0,[e.Hb(671088640,1,{txtVideo:0}),(l()(),e.qb(1,0,null,null,5,"ion-buttons",[["class","btn-top"],["slot","start"]],null,null,null,a.X,a.f)),e.pb(2,49152,null,0,u.m,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,m)),e.pb(4,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,p)),e.pb(6,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(7,0,null,null,3,"ion-header",[["class","ion-no-border"]],null,null,null,a.lb,a.t)),e.pb(8,49152,null,0,u.C,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.qb(9,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,x)),e.pb(12,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,null,1,null,M)),e.pb(14,16384,null,0,s.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,"descanso"!=t.status),l(n,6,0,"descanso"==t.status),l(n,8,0,!0),l(n,12,0,"descanso"==t.status),l(n,14,0,"rutina"==t.status)}),null)}function J(l){return e.Lb(0,[(l()(),e.qb(0,0,null,null,1,"app-bateria-estiramientos",[],null,null,null,P,d)),e.pb(1,114688,null,0,h,[c.a,u.Gb,u.Kb,u.b],null,null)],(function(l,n){l(n,1,0)}),null)}var O=e.mb("app-bateria-estiramientos",h,J,{},{},[]),V=t("s7LF"),j=t("iInd");class A{}t.d(n,"BateriaEstiramientosPageModuleNgFactory",(function(){return N}));var N=e.nb(i,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[o.a,O]],[3,e.j],e.v]),e.Ab(4608,s.m,s.l,[e.s,[2,s.w]]),e.Ab(4608,V.q,V.q,[]),e.Ab(4608,u.c,u.c,[e.x,e.g]),e.Ab(4608,u.Fb,u.Fb,[u.c,e.j,e.p]),e.Ab(4608,u.Lb,u.Lb,[u.c,e.j,e.p]),e.Ab(1073742336,s.b,s.b,[]),e.Ab(1073742336,V.p,V.p,[]),e.Ab(1073742336,V.e,V.e,[]),e.Ab(1073742336,u.Cb,u.Cb,[]),e.Ab(1073742336,j.n,j.n,[[2,j.s],[2,j.m]]),e.Ab(1073742336,A,A,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,j.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);