(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateria-remplazo-bateria-remplazo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-remplazo/bateria-remplazo.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-remplazo/bateria-remplazo.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n\n\n\n\n\n<ion-content>\n  <video #myVideo playsinline width=\"100%\" class=\"videoReproductor\" (ended)=\"videoEnd()\" autoplay\n  poster=\"assets/img/videogif.gif\" (loadedmetadata)=\"onMetadata($event, video)\" *ngIf=\"video\">\n  <source [src]=\"video\" />\n</video>\n  <div class=\"contenedor-cabezera\">\n    <p class=\"titulo\" style=\"color: white;\">{{ucFirst(name)}}</p>\n    <p style=\"color: white;\">Demostración del ejercicio</p>\n  </div>\n\n\n</ion-content>\n\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"pauseVideo()\">\n    <ion-icon name=\"pause-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" *ngIf=\"!mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"playVideo()\">\n    <ion-icon name=\"play-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/bateria-remplazo/bateria-remplazo-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bateria-remplazo/bateria-remplazo-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BateriaRemplazoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaRemplazoPageRoutingModule", function() { return BateriaRemplazoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateria_remplazo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateria-remplazo.page */ "./src/app/bateria-remplazo/bateria-remplazo.page.ts");




const routes = [
    {
        path: '',
        component: _bateria_remplazo_page__WEBPACK_IMPORTED_MODULE_3__["BateriaRemplazoPage"]
    }
];
let BateriaRemplazoPageRoutingModule = class BateriaRemplazoPageRoutingModule {
};
BateriaRemplazoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriaRemplazoPageRoutingModule);



/***/ }),

/***/ "./src/app/bateria-remplazo/bateria-remplazo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/bateria-remplazo/bateria-remplazo.module.ts ***!
  \*************************************************************/
/*! exports provided: BateriaRemplazoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaRemplazoPageModule", function() { return BateriaRemplazoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateria_remplazo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateria-remplazo-routing.module */ "./src/app/bateria-remplazo/bateria-remplazo-routing.module.ts");
/* harmony import */ var _bateria_remplazo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateria-remplazo.page */ "./src/app/bateria-remplazo/bateria-remplazo.page.ts");







let BateriaRemplazoPageModule = class BateriaRemplazoPageModule {
};
BateriaRemplazoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateria_remplazo_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriaRemplazoPageRoutingModule"]
        ],
        declarations: [_bateria_remplazo_page__WEBPACK_IMPORTED_MODULE_6__["BateriaRemplazoPage"]]
    })
], BateriaRemplazoPageModule);



/***/ }),

/***/ "./src/app/bateria-remplazo/bateria-remplazo.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/bateria-remplazo/bateria-remplazo.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (orientation: landscape) {\n  .cabezera {\n    display: none !important;\n  }\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 13em;\n}\n@media (max-height: 640px) {\n  .videoReproductor {\n    height: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 35%;\n  height: auto;\n  background-color: black;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.contenedor-cabezera p {\n  margin: 5px !important;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.controlar-texto {\n  margin: 10px;\n}\n.titulo {\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 800;\n  text-align: center;\n}\n.reloj {\n  margin: 10px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.redondear {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border: 4px;\n}\nh2 {\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: bold;\n  margin-top: 10px !important;\n}\n/*Cambio de pantalla*/\n.fullscrean {\n  position: absolute;\n  right: 0;\n  font-size: 40px;\n  color: #f53d3d;\n  margin-right: 4%;\n  top: 9.375rem;\n}\nvideo[poster] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYS1yZW1wbGF6by9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGJhdGVyaWEtcmVtcGxhem9cXGJhdGVyaWEtcmVtcGxhem8ucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhLXJlbXBsYXpvL2JhdGVyaWEtcmVtcGxhem8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEUUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUEU7RUFLRjtJQVNJLHdCQUFBO0VDSEY7QUFDRjtBRFlBLFdBQUE7QUFDQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RGO0FEQUU7RUFNRjtJQUtJLFlBQUE7SUFDQSxtQkFBQTtPQUFBLGdCQUFBO0VDUEY7QUFDRjtBRGdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDYkY7QURnQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiRjtBRGdCQTtFQUNFLHNCQUFBO0FDYkY7QURnQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGO0FEZ0JBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiRjtBRGdCQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLFdBQUE7QUNiRjtBRGdCQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDYkY7QURnQkEscUJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDYkY7QURnQkE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9iYXRlcmlhLXJlbXBsYXpvL2JhdGVyaWEtcmVtcGxhem8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2dvKi9cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG5AbWl4aW4gcGFudGFsbGEtYW5jaGEge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQGluY2x1ZGUgcGFudGFsbGEtYW5jaGEoKXtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG59XG5cbkBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgQG1lZGlhIChtYXgtaGVpZ2h0OjY0MHB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKmZpbiBsb2dvKi9cbi52aWRlb1JlcHJvZHVjdG9yIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzZW07XG4gIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBvYmplY3QtZml0OiBmaWxsOyBcbiAgfVxufVxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbi8vICAgLnZpZGVvUmVwcm9kdWN0b3Ige1xuLy8gICAgIGhlaWdodDogMTFlbTtcbi8vICAgfVxuLy8gfVxuXG4uY29udGVuZWRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yLWNhYmV6ZXJhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVuZWRvci1jYWJlemVyYSBwIHtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmVkb3ItY3VlcnBvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udHJvbGFyLXRleHRvIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVsb2oge1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yZWRvbmRlYXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlcjogNHB4O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qQ2FtYmlvIGRlIHBhbnRhbGxhKi9cbi5mdWxsc2NyZWFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2Y1M2QzZDtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgdG9wOiA5LjM3NXJlbTtcbn1cblxudmlkZW9bcG9zdGVyXSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIiwiLypsb2dvKi9cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmNhYmV6ZXJhIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLypmaW4gbG9nbyovXG4udmlkZW9SZXByb2R1Y3RvciB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxM2VtO1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NDBweCkge1xuICAudmlkZW9SZXByb2R1Y3RvciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gIH1cbn1cblxuLmNvbnRlbmVkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVuZWRvci1jYWJlemVyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzNSU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3ItY2FiZXplcmEgcCB7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW5lZG9yLWN1ZXJwbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRyb2xhci10ZXh0byB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlbG9qIHtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmVkb25kZWFyIHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXI6IDRweDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKkNhbWJpbyBkZSBwYW50YWxsYSovXG4uZnVsbHNjcmVhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNmNTNkM2Q7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIHRvcDogOS4zNzVyZW07XG59XG5cbnZpZGVvW3Bvc3Rlcl0ge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bateria-remplazo/bateria-remplazo.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/bateria-remplazo/bateria-remplazo.page.ts ***!
  \***********************************************************/
/*! exports provided: BateriaRemplazoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaRemplazoPage", function() { return BateriaRemplazoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let BateriaRemplazoPage = class BateriaRemplazoPage {
    constructor(route, navCtrl, ApiService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.ApiService = ApiService;
        this.mostrar = true;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.exercise = JSON.parse(params["data"]);
            this.name = this.exercise.name;
            this.video = `${this.URL}/videos/${this.exercise.cod}/${this.exercise.url}`;
            this.timeLeft = this.ApiService.ratio;
            this.startTimer();
        });
    }
    atras() {
        this.navCtrl.pop();
        this.pauseVideo();
    }
    pauseVideo() {
        this.mostrar = false;
        this.txtVideo.nativeElement.pause();
        clearInterval(this.tiemposegundo);
    }
    playVideo() {
        this.mostrar = true;
        this.txtVideo.nativeElement.play();
        this.startTimer();
    }
    fullscreen() {
        if (this.txtVideo.nativeElement.requestFullscreen) {
            this.txtVideo.nativeElement.requestFullscreen();
        }
        else if (this.txtVideo.nativeElement.mozRequestFullScreen) {
            /* Firefox */
            this.txtVideo.nativeElement.mozRequestFullScreen();
        }
        else if (this.txtVideo.nativeElement.webkitRequestFullscreen) {
            /* Chrome, Safari & Opera */
            this.txtVideo.nativeElement.webkitRequestFullscreen();
        }
        else if (this.txtVideo.nativeElement.msRequestFullscreen) {
            /* IE/Edge */
            this.txtVideo.nativeElement.txtVideo.nativeElementm.msRequestFullscreen();
        }
    }
    videoEnd() {
        this.mostrar = false;
        clearInterval(this.tiemposegundo);
        this.timeLeft = this.repeticion;
        this.zero = null;
    }
    //CONOMETRO
    startTimer() {
        this.tiemposegundo = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                if (this.timeLeft < 10) {
                    console.log("activate");
                    this.zero = 0;
                }
            }
            else {
                this.zero = null;
                this.timeLeft = 0;
                this.timeLeft = this.repeticion;
            }
        }, 1000);
    }
    //SE OBTIENE LA DURACION DEL VIDEO
    onMetadata(e, video) {
        console.log("metadata: ", e);
        console.log("cargado: ", e.target.readyState);
        this.repeticion = parseInt(e.target.duration);
        this.timeLeft = parseInt(e.target.duration);
    }
    // mayuscula
    ucFirst(str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
};
BateriaRemplazoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("myVideo", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], BateriaRemplazoPage.prototype, "txtVideo", void 0);
BateriaRemplazoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-bateria-remplazo",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateria-remplazo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-remplazo/bateria-remplazo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateria-remplazo.page.scss */ "./src/app/bateria-remplazo/bateria-remplazo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"]])
], BateriaRemplazoPage);



/***/ })

}]);
//# sourceMappingURL=bateria-remplazo-bateria-remplazo-module-es2015.js.map