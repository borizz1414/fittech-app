function _defineProperties(n,l){for(var e=0;e<l.length;e++){var o=l[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{QmYu:function(n,l,e){"use strict";e.r(l);var o=e("8Y7J"),a=function n(){_classCallCheck(this,n)},i=e("pMnS"),t=e("MKJQ"),r=e("sZkV"),u=e("s7LF"),s=e("mrSG"),c=e("on2l"),d=e("Qmup"),g=function(){function n(l,e,a,i,t){_classCallCheck(this,n),this.ruta=l,this.cdRef=e,this.usuarioservicio=a,this.ApiService=i,this.loadingController=t,this.cambiarPantalla=new o.m,this.condicionPersona={arritmia_corazon:!1,ataque_corazon:!1,operacion_corazon:!1,enfermedad_corazon:!1,presion_corazon:!1,diabete_corazon:!1,muerte_prematura:!1,renal_insufficiency:!1,ninguna:!1},this.habilitar=!0}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"avanzar",value:function(){this.condicionPersona.arritmia_corazon||this.condicionPersona.ataque_corazon||this.condicionPersona.diabete_corazon||this.condicionPersona.enfermedad_corazon||this.condicionPersona.muerte_prematura||this.condicionPersona.ninguna||this.condicionPersona.operacion_corazon||this.condicionPersona.presion_corazon?(this.usuarioservicio.condicionCorazon(this.condicionPersona),this.evaluar()):this.habilitar=!1}},{key:"historialcorazon",value:function(n){console.log(this.habilitar),"option"==n&&(this.condicionPersona.ninguna=!1,this.habilitar=!1,this.cdRef.detectChanges()),"none"==n&&(this.condicionPersona.arritmia_corazon=!1,this.condicionPersona.ataque_corazon=!1,this.condicionPersona.operacion_corazon=!1,this.condicionPersona.enfermedad_corazon=!1,this.condicionPersona.presion_corazon=!1,this.condicionPersona.diabete_corazon=!1,this.condicionPersona.muerte_prematura=!1,this.condicionPersona.renal_insufficiency=!1,this.habilitar=!this.condicionPersona.ninguna,this.cdRef.detectChanges())}},{key:"evaluar",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.presentLoading(),n.next=3,this.ApiService.Antecedentefamiliar(this.usuarioservicio.condicionPersona);case 3:if(n.t0=n.sent,!n.t0){n.next=6;break}this.loadingController.dismiss(),this.ruta.navigateRoot(["/registrar-info"]);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"presentLoading",value:function(){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Por favor espere..."});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"atras",value:function(){this.cambiarPantalla.emit(2)}}]),n}(),b=o.ob({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}*[_ngcontent-%COMP%]{box-sizing:border-box}ion-content[_ngcontent-%COMP%]{--background:#fcfcfc}ion-input[_ngcontent-%COMP%]{text-align:start;margin:0 auto;width:80%;box-shadow:3px 7px 10px -5px rgba(0,0,0,.2)}.logo[_ngcontent-%COMP%]{margin:0 auto;max-height:150px}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#000;width:100%;overflow:hidden}.contenedor[_ngcontent-%COMP%]{padding-top:20px!important;text-align:center;overflow:hidden}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:25px;opacity:.7;margin-bottom:20px}.imagen[_ngcontent-%COMP%]{width:130px;height:130px;border-radius:5px}.tarjeta[_ngcontent-%COMP%]{padding-left:10%;padding-right:10%}ion-col[_ngcontent-%COMP%]{margin-bottom:8px!important}.my-grid[_ngcontent-%COMP%]{height:100%!important}.parent-row[_ngcontent-%COMP%]{height:100%!important;-webkit-box-align:center!important;align-items:center!important;-webkit-box-pack:center!important;justify-content:center!important}.letra[_ngcontent-%COMP%]{padding-left:35px;padding-right:35px;font-size:18px;text-align:justify;opacity:.7}ion-card[_ngcontent-%COMP%]{margin:0 auto;width:80%}ion-card[_ngcontent-%COMP%]:hover{-webkit-transition:.1s;transition:.1s;opacity:.5}.mensaje[_ngcontent-%COMP%]{font-size:11px;opacity:.5;text-align:center}.color-tarjeta[_ngcontent-%COMP%]{color:#fff;background-color:#000}"]],data:{}});function h(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,3,"ion-header",[["class","ion-no-border animated fadeIn delay-1s"]],null,null,null,t.lb,t.t)),o.pb(1,49152,null,0,r.C,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(n()(),o.qb(2,0,null,0,1,"div",[["class","cabezera"]],null,null,null,null,null)),(n()(),o.qb(3,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),o.qb(4,0,null,null,111,"ion-content",[["class","animated fadeIn delay-1s"],["slot","fixed"]],null,null,null,t.gb,t.o)),o.pb(5,49152,null,0,r.v,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(n()(),o.qb(6,0,null,0,109,"div",[["class","contenedor"]],null,null,null,null,null)),(n()(),o.qb(7,0,null,null,1,"div",[["class","letra"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" \xbfAlguno de tus familiares de primer grado (Padres, hermanos o hijos) ha sufrido las enfermedades o afecciones siguientes? "])),(n()(),o.qb(9,0,null,null,106,"ion-grid",[["class","my-grid animated fadeIn delay-2s"]],null,null,null,t.kb,t.s)),o.pb(10,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(n()(),o.qb(11,0,null,0,104,"ion-row",[["class","parent-row"]],null,null,null,t.ub,t.C)),o.pb(12,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.qb(13,0,null,0,102,"ion-col",[["size","12"]],null,null,null,t.fb,t.n)),o.pb(14,49152,null,0,r.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.qb(15,0,null,0,100,"ion-list",[],null,null,null,t.sb,t.z)),o.pb(16,49152,null,0,r.P,[o.h,o.k,o.x],null,null),(n()(),o.qb(17,0,null,0,2,"ion-list-header",[],null,null,null,t.rb,t.A)),o.pb(18,49152,null,0,r.Q,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["(Marcar en caso afirmativo)"])),(n()(),o.qb(20,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(21,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(22,0,null,0,6,"ion-toggle",[["color","dark"],["name","ninguna"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,23)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,23)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("none")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.ninguna=e)&&a),a}),t.Ib,t.Q)),o.pb(23,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(25,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(27,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(28,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(29,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(30,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Ninguna de las siguientes"])),(n()(),o.qb(32,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(33,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(34,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(35,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Arritmia cardiaca"])),(n()(),o.qb(37,0,null,0,6,"ion-toggle",[["color","dark"],["name","arritmia_corazon"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,38)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,38)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.arritmia_corazon=e)&&a),a}),t.Ib,t.Q)),o.pb(38,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(40,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(42,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(43,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(44,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(45,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(46,0,null,0,6,"ion-toggle",[["color","dark"],["name","ataque_corazon"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,47)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,47)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.ataque_corazon=e)&&a),a}),t.Ib,t.Q)),o.pb(47,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(49,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(51,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(52,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(53,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(54,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Ataque al coraz\xf3n"])),(n()(),o.qb(56,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(57,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(58,0,null,0,6,"ion-toggle",[["color","dark"],["name","operacion_corazon"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,59)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,59)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.operacion_corazon=e)&&a),a}),t.Ib,t.Q)),o.pb(59,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(61,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(63,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(64,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(65,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(66,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Operacion de coraz\xf3n"])),(n()(),o.qb(68,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(69,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(70,0,null,0,6,"ion-toggle",[["color","dark"],["name","enfermedad_corazon"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,71)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,71)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.enfermedad_corazon=e)&&a),a}),t.Ib,t.Q)),o.pb(71,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(73,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(75,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(76,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(77,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(78,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Enfermedad cardiaca congenita"])),(n()(),o.qb(80,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(81,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(82,0,null,0,6,"ion-toggle",[["color","dark"],["name","presion_corazon"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,83)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,83)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.presion_corazon=e)&&a),a}),t.Ib,t.Q)),o.pb(83,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(85,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(87,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(88,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(89,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(90,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Presion arterial alta"])),(n()(),o.qb(92,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(93,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(94,0,null,0,6,"ion-toggle",[["color","dark"],["name","diabete_corazon"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,95)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,95)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.diabete_corazon=e)&&a),a}),t.Ib,t.Q)),o.pb(95,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(97,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(99,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(100,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(101,0,null,0,2,"ion-label",[],null,null,null,t.qb,t.y)),o.pb(102,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Diabetes"])),(n()(),o.qb(104,0,null,0,11,"ion-item",[],null,null,null,t.pb,t.w)),o.pb(105,49152,null,0,r.I,[o.h,o.k,o.x],null,null),(n()(),o.qb(106,0,null,0,6,"ion-toggle",[["color","dark"],["name","muerte_prematura"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var a=!0,i=n.component;return"ionBlur"===l&&(a=!1!==o.Cb(n,107)._handleBlurEvent(e.target)&&a),"ionChange"===l&&(a=!1!==o.Cb(n,107)._handleIonChange(e.target)&&a),"ionChange"===l&&(a=!1!==i.historialcorazon("option")&&a),"ngModelChange"===l&&(a=!1!==(i.condicionPersona.muerte_prematura=e)&&a),a}),t.Ib,t.Q)),o.pb(107,16384,null,0,r.d,[o.k],null,null),o.Gb(1024,null,u.h,(function(n){return[n]}),[r.d]),o.pb(109,671744,null,0,u.l,[[8,null],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,u.i,null,[u.l]),o.pb(111,16384,null,0,u.j,[[4,u.i]],null,null),o.pb(112,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),o.qb(113,0,null,0,2,"ion-label",[["style","font-size: 14px;"]],null,null,null,t.qb,t.y)),o.pb(114,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Muerte prematura antes de los 50 a\xf1os"]))],(function(n,l){var e=l.component;n(l,1,0,!0),n(l,5,0,!0),n(l,14,0,"12"),n(l,25,0,"ninguna",e.condicionPersona.ninguna),n(l,28,0,"dark","ninguna"),n(l,40,0,"arritmia_corazon",e.condicionPersona.arritmia_corazon),n(l,43,0,"dark","arritmia_corazon"),n(l,49,0,"ataque_corazon",e.condicionPersona.ataque_corazon),n(l,52,0,"dark","ataque_corazon"),n(l,61,0,"operacion_corazon",e.condicionPersona.operacion_corazon),n(l,64,0,"dark","operacion_corazon"),n(l,73,0,"enfermedad_corazon",e.condicionPersona.enfermedad_corazon),n(l,76,0,"dark","enfermedad_corazon"),n(l,85,0,"presion_corazon",e.condicionPersona.presion_corazon),n(l,88,0,"dark","presion_corazon"),n(l,97,0,"diabete_corazon",e.condicionPersona.diabete_corazon),n(l,100,0,"dark","diabete_corazon"),n(l,109,0,"muerte_prematura",e.condicionPersona.muerte_prematura),n(l,112,0,"dark","muerte_prematura")}),(function(n,l){n(l,22,0,o.Cb(l,27).ngClassUntouched,o.Cb(l,27).ngClassTouched,o.Cb(l,27).ngClassPristine,o.Cb(l,27).ngClassDirty,o.Cb(l,27).ngClassValid,o.Cb(l,27).ngClassInvalid,o.Cb(l,27).ngClassPending),n(l,37,0,o.Cb(l,42).ngClassUntouched,o.Cb(l,42).ngClassTouched,o.Cb(l,42).ngClassPristine,o.Cb(l,42).ngClassDirty,o.Cb(l,42).ngClassValid,o.Cb(l,42).ngClassInvalid,o.Cb(l,42).ngClassPending),n(l,46,0,o.Cb(l,51).ngClassUntouched,o.Cb(l,51).ngClassTouched,o.Cb(l,51).ngClassPristine,o.Cb(l,51).ngClassDirty,o.Cb(l,51).ngClassValid,o.Cb(l,51).ngClassInvalid,o.Cb(l,51).ngClassPending),n(l,58,0,o.Cb(l,63).ngClassUntouched,o.Cb(l,63).ngClassTouched,o.Cb(l,63).ngClassPristine,o.Cb(l,63).ngClassDirty,o.Cb(l,63).ngClassValid,o.Cb(l,63).ngClassInvalid,o.Cb(l,63).ngClassPending),n(l,70,0,o.Cb(l,75).ngClassUntouched,o.Cb(l,75).ngClassTouched,o.Cb(l,75).ngClassPristine,o.Cb(l,75).ngClassDirty,o.Cb(l,75).ngClassValid,o.Cb(l,75).ngClassInvalid,o.Cb(l,75).ngClassPending),n(l,82,0,o.Cb(l,87).ngClassUntouched,o.Cb(l,87).ngClassTouched,o.Cb(l,87).ngClassPristine,o.Cb(l,87).ngClassDirty,o.Cb(l,87).ngClassValid,o.Cb(l,87).ngClassInvalid,o.Cb(l,87).ngClassPending),n(l,94,0,o.Cb(l,99).ngClassUntouched,o.Cb(l,99).ngClassTouched,o.Cb(l,99).ngClassPristine,o.Cb(l,99).ngClassDirty,o.Cb(l,99).ngClassValid,o.Cb(l,99).ngClassInvalid,o.Cb(l,99).ngClassPending),n(l,106,0,o.Cb(l,111).ngClassUntouched,o.Cb(l,111).ngClassTouched,o.Cb(l,111).ngClassPristine,o.Cb(l,111).ngClassDirty,o.Cb(l,111).ngClassValid,o.Cb(l,111).ngClassInvalid,o.Cb(l,111).ngClassPending)}))}var p=o.mb("app-antecedentefamiliar",g,(function(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-antecedentefamiliar",[],null,null,null,h,b)),o.pb(1,114688,null,0,g,[r.Gb,o.h,c.a,d.a,r.Eb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{cambiarPantalla:"cambiarPantalla"},[]),C=e("SVse"),m=e("iInd"),f=function n(){_classCallCheck(this,n)};e.d(l,"AntecedentefamiliarPageModuleNgFactory",(function(){return _}));var _=o.nb(a,[],(function(n){return o.zb([o.Ab(512,o.j,o.Y,[[8,[i.a,p]],[3,o.j],o.v]),o.Ab(4608,C.m,C.l,[o.s,[2,C.w]]),o.Ab(4608,u.q,u.q,[]),o.Ab(4608,r.c,r.c,[o.x,o.g]),o.Ab(4608,r.Fb,r.Fb,[r.c,o.j,o.p]),o.Ab(4608,r.Lb,r.Lb,[r.c,o.j,o.p]),o.Ab(1073742336,C.b,C.b,[]),o.Ab(1073742336,u.p,u.p,[]),o.Ab(1073742336,u.e,u.e,[]),o.Ab(1073742336,r.Cb,r.Cb,[]),o.Ab(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),o.Ab(1073742336,f,f,[]),o.Ab(1073742336,a,a,[]),o.Ab(1024,m.k,(function(){return[[{path:"",component:g}]]}),[])])}))},on2l:function(n,l,e){"use strict";e.d(l,"a",(function(){return s}));var o=e("mrSG"),a=e("IheW"),i=e("Qmup"),t=e("AytR"),r=e("8Y7J"),u=t.a.url,s=function(){var n=function(){function n(l,e){_classCallCheck(this,n),this.service=l,this.http=e,this.datosPersonales={nombre:null,correo:null,genero:null,objetivo:null,nivelActividad:null,experiencia:null,lugarEntrenar:null,edad:null,estatura:null,peso:null,patologiaCardiaca:null,enfermedadPulmonar:null,hipertension:0,hipotension:0,desvanecimiento:0,diabete:0,dolorPecho:0,fatiga:0,noEnfermedad:0,insuficiencia_renal:0,password:null},this.condicionPersona={latidos:null,arritmia_corazon:null,ataque_corazon:null,operacion_corazon:null,enfermedad_corazon:null,presion_corazon:null,diabete_corazon:null,muerte_prematura:null,insuficiencia_renal:null,ninguna:null},this.selecionTestEjercicio={squat:!1,pressbanca:!1,legcurl:!1,legextension:!1}}return _createClass(n,[{key:"genero",value:function(n){this.datosPersonales.genero=n}},{key:"objetivo",value:function(n){this.datosPersonales.objetivo=n}},{key:"edad",value:function(n){this.datosPersonales.edad=n}},{key:"estatura",value:function(n){this.datosPersonales.estatura=n}},{key:"peso",value:function(n){this.datosPersonales.peso=n}},{key:"experiencia",value:function(n){this.datosPersonales.experiencia=n}},{key:"entrenar",value:function(n){this.datosPersonales.lugarEntrenar=n}},{key:"nivel",value:function(n){this.datosPersonales.nivelActividad=n}},{key:"enfermedades",value:function(n){this.datosPersonales.patologiaCardiaca=n.patologiaCardiaca,this.datosPersonales.enfermedadPulmonar=null==n.enfermedadPulmonar?0:n.enfermedadPulmonar,this.datosPersonales.hipertension=n.hipertension,this.datosPersonales.hipotension=n.hipotension,this.datosPersonales.desvanecimiento=n.desvanecimiento,this.datosPersonales.diabete=n.diabete,this.datosPersonales.dolorPecho=n.dolorPecho,this.datosPersonales.insuficiencia_renal=n.insuficiencia_renal,this.datosPersonales.noEnfermedad=n.noEnfermedad?1:0}},{key:"redesSociales",value:function(n){this.datosPersonales.nombre=n.first_name,this.datosPersonales.correo=n.email}},{key:"registrarEmail",value:function(n){this.datosPersonales.nombre=n.nombre,this.datosPersonales.password=n.contra,this.datosPersonales.correo=n.email}},{key:"latidos",value:function(n){this.condicionPersona.latidos=n}},{key:"condicionCorazon",value:function(n){this.condicionPersona.arritmia_corazon=n.arritmia_corazon?1:0,this.condicionPersona.ataque_corazon=n.ataque_corazon?1:0,this.condicionPersona.operacion_corazon=n.operacion_corazon?1:0,this.condicionPersona.enfermedad_corazon=n.enfermedad_corazon?1:0,this.condicionPersona.presion_corazon=n.presion_corazon?1:0,this.condicionPersona.diabete_corazon=n.diabete_corazon?1:0,this.condicionPersona.muerte_prematura=n.muerte_prematura?1:0,this.condicionPersona.insuficiencia_renal=n.insuficiencia_renal?1:0,this.condicionPersona.ninguna=n.ninguna?1:0}},{key:"TestSelecion",value:function(n){1===n&&(this.selecionTestEjercicio.pressbanca=!0,this.selecionTestEjercicio.legcurl=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!1),2===n&&(this.selecionTestEjercicio.pressbanca=!1,this.selecionTestEjercicio.legcurl=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!0),3===n&&(this.selecionTestEjercicio.legcurl=!0,this.selecionTestEjercicio.pressbanca=!1,this.selecionTestEjercicio.legextension=!1,this.selecionTestEjercicio.squat=!1),5===n&&(this.selecionTestEjercicio.legextension=!0)}},{key:"measurement_record",value:function(n){var l=this;return console.log("que datos se esta enviando ala ruta",n),new Promise((function(e,i){return o.__awaiter(l,void 0,void 0,regeneratorRuntime.mark((function l(){var o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.t0=a.g,l.next=3,this.service.cargarToken();case 3:l.t1=l.sent,l.t2="Bearer "+l.t1,l.t3={Authorization:l.t2,"Content-Type":"application/json"},o=new l.t0(l.t3),this.http.post("".concat(u,"/auth/measurement_record"),n,{headers:o}).subscribe((function(n){console.log(n),e(!0)}),(function(n){console.log(n),i(!1)}));case 8:case"end":return l.stop()}}),l,this)})))})).catch((function(n){console.log("ERROR")}))}}]),n}();return n.ngInjectableDef=r.Pb({factory:function(){return new n(r.Qb(i.a),r.Qb(a.c))},token:n,providedIn:"root"}),n}()}}]);