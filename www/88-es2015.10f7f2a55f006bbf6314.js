(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{rnZY:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var i=t("pMnS"),u=t("MKJQ"),r=t("sZkV"),c=t("s7LF"),a=t("SVse"),s=t("mrSG"),b=t("fz3y"),d=t("UxUV"),p=t("9B/o");class g{constructor(n,l,t,o,e){this.service=n,this.route=l,this.loadingController=t,this.iab=o,this.utilities=e,this.productos=[],this.buscador=[],this.route.queryParams.subscribe(n=>{this.productos=JSON.parse(n.shop),this.name=this.productos.name,this.productos=this.productos.product,this.buscador=this.productos})}ngOnInit(){}search(){this.productos=this.searchTerm?this.filterItems():this.buscador}filterItems(){return this.productos.filter(n=>(console.log(n),n.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1))}sendProduct(n){return s.__awaiter(this,void 0,void 0,(function*(){this.presentLoading(),0==(yield this.service.sendProducts(n))?(this.loadingController.dismiss(),this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error","danger")):(this.loadingController.dismiss(),this.iab.create("https://smartpronutrition.com/supplements-shop/","_blank"))}))}presentLoading(){return s.__awaiter(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:"Por favor espere...",cssClass:"my-loading"});yield n.present()}))}}var h=t("iInd"),m=o.ob({encapsulation:0,styles:[[".logo[_ngcontent-%COMP%]{margin:0 auto;max-height:4rem}.cabezera[_ngcontent-%COMP%]{max-height:150px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:100%;overflow:hidden}.imagenmodificada[_ngcontent-%COMP%]{width:50px;height:50px}ion-col[_ngcontent-%COMP%]{display:table;height:200px}ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;color:#fff}ion-col[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid #dcdcdc;color:#fff;border-radius:8px;margin-bottom:1rem}ion-col[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{color:#fff;text-align:left;display:contents;width:100%;font-size:17px}ion-col[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon){color:red!important}ion-col[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{display:table-cell;top:1.5rem;position:relative}ion-col[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{position:absolute;right:0;bottom:30%;--background:#EF4044}ion-col[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px}.imagen[_ngcontent-%COMP%], .indicadores[_ngcontent-%COMP%], .medidas[_ngcontent-%COMP%], .pago[_ngcontent-%COMP%], .perfil[_ngcontent-%COMP%]{background-color:red;border-top-left-radius:12px;border-top-right-radius:12px}ion-title[_ngcontent-%COMP%]{text-align:center}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:23px;font-weight:800;margin-bottom:0}form[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}ion-content[_ngcontent-%COMP%]{--ion-background-color:black}ion-item[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:8px}.pencil-grey[_ngcontent-%COMP%]{position:absolute;right:1rem;color:grey;font-size:1.2rem}.pencil-red[_ngcontent-%COMP%]{position:absolute;right:1rem;color:red;font-size:1.2rem}.custom-search[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:31px;width:90%;color:#fff;margin:1rem auto 0}.card[_ngcontent-%COMP%]{width:144px;height:250px;background:#232323}.center-img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:1rem;width:101px;height:80px}.btn-comprar[_ngcontent-%COMP%]{--border-radius:10px;height:30px;display:block;text-align:center;--background:#EF4044}.sub-card[_ngcontent-%COMP%]{color:#e6e6e6;font-size:18px;text-align:left;font-weight:700;width:112px;height:52px}"]],data:{}});function f(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,17,"ion-col",[["size","6"]],null,null,null,u.fb,u.n)),o.pb(1,49152,null,0,r.u,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.qb(2,0,null,0,15,"ion-card",[["class","card"]],null,null,null,u.cb,u.g)),o.pb(3,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(n()(),o.qb(4,0,null,0,0,"img",[["class","center-img"]],[[8,"src",4]],null,null,null,null)),(n()(),o.qb(5,0,null,0,7,"ion-card-header",[],null,null,null,u.Z,u.i)),o.pb(6,49152,null,0,r.p,[o.h,o.k,o.x],null,null),(n()(),o.qb(7,0,null,0,2,"ion-card-subtitle",[["class","sub-card"]],null,null,null,u.ab,u.j)),o.pb(8,49152,null,0,r.q,[o.h,o.k,o.x],null,null),(n()(),o.Jb(9,0,[" "," "])),(n()(),o.qb(10,0,null,0,2,"ion-card-title",[["style","color: #E6E6E6; font-size: 15px;text-align: left; opacity: 70%"]],null,null,null,u.bb,u.k)),o.pb(11,49152,null,0,r.r,[o.h,o.k,o.x],null,null),(n()(),o.Jb(12,0,[" $",""])),(n()(),o.qb(13,0,null,0,4,"ion-card-content",[],null,null,null,u.Y,u.h)),o.pb(14,49152,null,0,r.o,[o.h,o.k,o.x],null,null),(n()(),o.qb(15,0,null,0,2,"ion-button",[["class","btn-comprar"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.sendProduct(n.context.$implicit.id)&&o),o}),u.W,u.e)),o.pb(16,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,[" Comprar "]))],(function(n,l){n(l,1,0,"6")}),(function(n,l){n(l,4,0,o.ub(1,"https://smartbunnypruebas.com/imagenes/productos/",l.context.$implicit.id,".png")),n(l,9,0,l.context.$implicit.name),n(l,12,0,l.context.$implicit.price)}))}function C(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,14,"ion-header",[],null,null,null,u.lb,u.t)),o.pb(1,49152,null,0,r.C,[o.h,o.k,o.x],null,null),(n()(),o.qb(2,0,null,0,12,"ion-toolbar",[["color","dark"]],null,null,null,u.Jb,u.R)),o.pb(3,49152,null,0,r.Ab,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,u.X,u.f)),o.pb(5,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(n()(),o.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","/tienda"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Cb(n,8).onClick(t)&&e),e}),u.U,u.c)),o.pb(7,49152,null,0,r.h,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"]},null),o.pb(8,16384,null,0,r.i,[[2,r.gb],r.Gb],{defaultHref:[0,"defaultHref"]},null),(n()(),o.qb(9,0,null,0,2,"ion-buttons",[["slot","end"]],null,null,null,u.X,u.f)),o.pb(10,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(n()(),o.qb(11,0,null,0,0,"img",[["class","imagenmodificada"],["src","assets/img/logo-app.png"]],null,null,null,null,null)),(n()(),o.qb(12,0,null,0,2,"ion-title",[["class","ion-text-center"],["mode","ios"]],null,null,null,u.Hb,u.P)),o.pb(13,49152,null,0,r.yb,[o.h,o.k,o.x],null,null),(n()(),o.Jb(14,0,["",""])),(n()(),o.qb(15,0,null,null,14,"ion-content",[],null,null,null,u.gb,u.o)),o.pb(16,49152,null,0,r.v,[o.h,o.k,o.x],null,null),(n()(),o.qb(17,0,null,0,6,"ion-searchbar",[["class","custom-search"],["placeholder","Buscar"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==o.Cb(n,18)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Cb(n,18)._handleInputEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.search()&&e),"ngModelChange"===l&&(e=!1!==(i.searchTerm=t)&&e),e}),u.vb,u.D)),o.pb(18,16384,null,0,r.Ob,[o.k],null,null),o.Gb(1024,null,c.h,(function(n){return[n]}),[r.Ob]),o.pb(20,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.h]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,c.i,null,[c.l]),o.pb(22,16384,null,0,c.j,[[4,c.i]],null,null),o.pb(23,49152,null,0,r.ib,[o.h,o.k,o.x],{placeholder:[0,"placeholder"]},null),(n()(),o.qb(24,0,null,0,5,"ion-grid",[],null,null,null,u.kb,u.s)),o.pb(25,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(n()(),o.qb(26,0,null,0,3,"ion-row",[],null,null,null,u.ub,u.C)),o.pb(27,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.fb(16777216,null,0,1,null,f)),o.pb(29,278528,null,0,a.j,[o.N,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"dark"),n(l,7,0,"/tienda"),n(l,8,0,"/tienda"),n(l,20,0,t.searchTerm),n(l,23,0,"Buscar"),n(l,29,0,t.productos)}),(function(n,l){n(l,14,0,l.component.name),n(l,17,0,o.Cb(l,22).ngClassUntouched,o.Cb(l,22).ngClassTouched,o.Cb(l,22).ngClassPristine,o.Cb(l,22).ngClassDirty,o.Cb(l,22).ngClassValid,o.Cb(l,22).ngClassInvalid,o.Cb(l,22).ngClassPending)}))}function x(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-tienda-productos",[],null,null,null,C,m)),o.pb(1,114688,null,0,g,[d.a,h.a,r.Eb,p.a,b.a],null,null)],(function(n,l){n(l,1,0)}),null)}var P=o.mb("app-tienda-productos",g,x,{},{},[]);class k{}t.d(l,"TiendaProductosPageModuleNgFactory",(function(){return O}));var O=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Y,[[8,[i.a,P]],[3,o.j],o.v]),o.Ab(4608,a.m,a.l,[o.s,[2,a.w]]),o.Ab(4608,c.q,c.q,[]),o.Ab(4608,r.c,r.c,[o.x,o.g]),o.Ab(4608,r.Fb,r.Fb,[r.c,o.j,o.p]),o.Ab(4608,r.Lb,r.Lb,[r.c,o.j,o.p]),o.Ab(1073742336,a.b,a.b,[]),o.Ab(1073742336,c.p,c.p,[]),o.Ab(1073742336,c.e,c.e,[]),o.Ab(1073742336,r.Cb,r.Cb,[]),o.Ab(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),o.Ab(1073742336,k,k,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,h.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);