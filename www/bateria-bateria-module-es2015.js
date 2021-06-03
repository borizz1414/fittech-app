(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateria-bateria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria/bateria.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateria/bateria.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<!-- cabezera -->\n  \n\n\n\n\n\n<ion-content>\n  <video #myVideo  playsinline  width=\"100%\" class=\"videoReproductor\" (ended)=\"videoEnd()\"\n  autoplay\n  poster=\"assets/img/videogif.gif\"\n  (loadedmetadata)=\"onMetadata($event, video)\"\n   *ngIf=\"video\">\n    <source [src]=\"video\" />\n  </video>\n  <div class=\"contenedor-cabezera\">\n    <!-- <div class=\"controlar-texto\"> -->\n      <p class=\"titulo\" style=\"color: white;\">{{ucFirst(nombre)}}</p>\n      <p style=\"color: white;\">Demostración del ejercicio</p>\n    <!-- </div> -->\n  </div>\n\n  <!-- contador -->\n  <!-- <div class=\"contenedor-cuerpo\">\n    <p class=\"reloj\">00:{{zero}}{{timeLeft}}</p>\n  </div> -->\n\n</ion-content>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"pauseVideo()\">\n    <ion-icon name=\"pause-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\"*ngIf=\"!mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"playVideo()\">\n    <ion-icon name=\"play-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n\n<!-- <div class=\"ion-grid1\" style=\"background-color:#F4F3F1;\" >\n  <ion-row>\n    <ion-col size=\"12\">\n       <p class=\"ion-text-center titulo\">{{nombre}}</p>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<ion-grid class=\"ion-grid2\">\n  <p class=\"centrartiempo\">00:{{zero}}{{timeLeft}}</p>\n</ion-grid> -->\n\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/bateria/bateria-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bateria/bateria-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BateriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaPageRoutingModule", function() { return BateriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateria.page */ "./src/app/bateria/bateria.page.ts");




const routes = [
    {
        path: '',
        component: _bateria_page__WEBPACK_IMPORTED_MODULE_3__["BateriaPage"]
    }
];
let BateriaPageRoutingModule = class BateriaPageRoutingModule {
};
BateriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriaPageRoutingModule);



/***/ }),

/***/ "./src/app/bateria/bateria.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bateria/bateria.module.ts ***!
  \*******************************************/
/*! exports provided: BateriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaPageModule", function() { return BateriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateria-routing.module */ "./src/app/bateria/bateria-routing.module.ts");
/* harmony import */ var _bateria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateria.page */ "./src/app/bateria/bateria.page.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");








let BateriaPageModule = class BateriaPageModule {
};
BateriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateria_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriaPageRoutingModule"],
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_bateria_page__WEBPACK_IMPORTED_MODULE_6__["BateriaPage"]]
    })
], BateriaPageModule);



/***/ }),

/***/ "./src/app/bateria/bateria.page.scss":
/*!*******************************************!*\
  !*** ./src/app/bateria/bateria.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 13em;\n}\n@media (max-width: 375px) {\n  .videoReproductor {\n    height: 11em;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 30%;\n  height: auto;\n  background-color: black;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.contenedor-cabezera p {\n  margin: 5px !important;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.controlar-texto {\n  margin: 10px;\n}\n.titulo {\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 800;\n  text-align: center;\n}\n.reloj {\n  margin: 10px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.redondear {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border: 4px;\n}\nh2 {\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: bold;\n  margin-top: 10px !important;\n}\n/*Cambio de pantalla*/\n.fullscrean {\n  position: absolute;\n  right: 0;\n  font-size: 40px;\n  color: #f53d3d;\n  margin-right: 4%;\n  top: 9.375rem;\n}\nvideo[poster] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGJhdGVyaWFcXGJhdGVyaWEucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhL2JhdGVyaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUE7RUFDQSxpQkFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0EsV0FBQTtBQVNBO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTko7QURISTtFQU1KO0lBS1EsWUFBQTtFQ0pOO0FBQ0Y7QURTQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FDTkg7QURTQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ1BIO0FEUUc7RUFDSSxzQkFBQTtBQ05QO0FEVUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1BKO0FEc0JDO0VBQ0ksWUFBQTtBQ25CTDtBRHNCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QURzQkE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ25CSjtBRHNCQTtFQUVJLG1CQUFBO1VBQUEsWUFBQTtFQUNBLFdBQUE7QUNwQko7QUR1QkE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ3BCSjtBRDBCQSxxQkFBQTtBQUNBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUN2QkE7QUQyQkE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0FDeEJKIiwiZmlsZSI6InNyYy9hcHAvYmF0ZXJpYS9iYXRlcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbi5jYWJlemVyYXtcbm1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4vKmZpbiBsb2dvKi9cblxuQG1peGluIHRlbGVmb25vLXJlc3BvbnNpdm8ge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOjM3NXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4vLyBhanVzdGFyIGltYWdlbiBkZSBjYXJnYSBhIHZpZGVvXG4udmlkZW9SZXByb2R1Y3RvcntcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTNlbTtcbiAgICBAaW5jbHVkZSB0ZWxlZm9uby1yZXNwb25zaXZvKCl7XG4gICAgICAgIGhlaWdodDogMTFlbTtcbiAgICB9XG59XG5cblxuLy8gY29udGVuZWRvclxuLmNvbnRlbmVkb3J7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDoxMDAlOyBcbn1cbi8vIGNvbnRlbmVkb3IgY2FiZXplcmFcbi5jb250ZW5lZG9yLWNhYmV6ZXJhe1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXgtaGVpZ2h0OiAzMCU7XG4gICBoZWlnaHQ6YXV0bzsgXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuLy8gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGM0YxO1xuICAgcGFkZGluZzogMHB4O1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHB7XG4gICAgICAgbWFyZ2luOiA1cHghaW1wb3J0YW50O1xuICAgfVxufVxuLy8gY29udGVuZWRvciBjdWVycG9cbi5jb250ZW5lZG9yLWN1ZXJwb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgaGVpZ2h0OjcwJTsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuXG4gLy8gY29udGVuZWRvciBwaWVwYWdpbmFcbi8vIC5jb250ZW5lZG9yLXBpZXBhZ2luYXtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXgtaGVpZ2h0OiAzMCU7XG4vLyAgICAgaGVpZ2h0OjMwJTsgXG4vLyAgICAgLy9jZW50cmFyXG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gIH1cblxuIC5jb250cm9sYXItdGV4dG97XG4gICAgIG1hcmdpbjogMTBweDtcbiB9XG5cbi50aXR1bG8ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlbG9qe1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yZWRvbmRlYXJ7XG4gICAgLy9sbGVuYXIgZXNwYWNpb1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXI6IDRweDtcbiAgIH1cblxuaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4gICAgXG4vKkNhbWJpbyBkZSBwYW50YWxsYSovXG4uZnVsbHNjcmVhbntcbnBvc2l0aW9uOmFic29sdXRlO1xucmlnaHQ6IDA7XG5mb250LXNpemU6IDQwcHg7XG5jb2xvcjojZjUzZDNkO1xubWFyZ2luLXJpZ2h0OiA0JTtcbnRvcDogOS4zNzVyZW07XG59XG5cbi8vIGFqdXN0YXIgaW1hZ2VuIGRlIGNhcmdhIGEgdmlkZW9cbnZpZGVvW3Bvc3Rlcl17XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiIsIi8qbG9nbyovXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLypmaW4gbG9nbyovXG4udmlkZW9SZXByb2R1Y3RvciB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxM2VtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC52aWRlb1JlcHJvZHVjdG9yIHtcbiAgICBoZWlnaHQ6IDExZW07XG4gIH1cbn1cblxuLmNvbnRlbmVkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVuZWRvci1jYWJlemVyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250ZW5lZG9yLWNhYmV6ZXJhIHAge1xuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVuZWRvci1jdWVycG8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250cm9sYXItdGV4dG8ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWxvaiB7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlZG9uZGVhciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiA0cHg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLypDYW1iaW8gZGUgcGFudGFsbGEqL1xuLmZ1bGxzY3JlYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZjUzZDNkO1xuICBtYXJnaW4tcmlnaHQ6IDQlO1xuICB0b3A6IDkuMzc1cmVtO1xufVxuXG52aWRlb1twb3N0ZXJdIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/bateria/bateria.page.ts":
/*!*****************************************!*\
  !*** ./src/app/bateria/bateria.page.ts ***!
  \*****************************************/
/*! exports provided: BateriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaPage", function() { return BateriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");





let BateriaPage = class BateriaPage {
    constructor(capturar, ruta, ApiService) {
        this.capturar = capturar;
        this.ruta = ruta;
        this.ApiService = ApiService;
        this.mostrar = true;
        this.URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    ngOnInit() {
        this.dataRecibida = this.capturar.snapshot.paramMap.get("id");
        //Carga el nombre del ejercicio
        this.nombre = this.ApiService.demostracionEjercicio.nombre;
        //carga la serie de ejericios
        this.buscador = this.ApiService.rutina;
        //haya el ejercicio
        this.encontrar = this.buscador.find((value) => {
            return value.name == this.nombre;
        });
        // los videos
        this.video = `${this.URL}/videos/${this.encontrar.cod}/${this.encontrar.url}`;
        //tiempo del ejericio
        this.timeLeft = this.ApiService.ratio;
        this.startTimer();
    }
    atras() {
        this.ruta.navigateByUrl("entrenamientos");
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
        // this.txtVideo.nativeElement.currentTime = 1;
        clearInterval(this.tiemposegundo);
        this.timeLeft = this.repeticion;
        this.zero = null;
    }
    //CONOMETRO
    startTimer() {
        // if(this.timeLeft = 0){
        //   this.minuto--
        //   this.timeLeft = 60
        // }
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
        /*   str = str.replace(/ /g, "."); */
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
};
BateriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myVideo", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BateriaPage.prototype, "txtVideo", void 0);
BateriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-bateria",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria/bateria.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateria.page.scss */ "./src/app/bateria/bateria.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])
], BateriaPage);



/***/ })

}]);
//# sourceMappingURL=bateria-bateria-module-es2015.js.map