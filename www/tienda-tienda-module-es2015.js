(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tienda-tienda-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tienda/tienda.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tienda/tienda.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"dark\">\r\n\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button>\r\n      <div class=\"cabezera\">\r\n        <img src=\"assets/img/logo-app.png\" class=\"logo\">\r\n      </div>\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <ion-title>Tienda</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-text-center\" style=\"margin:1rem; color: #E6E6E6;font-size: 20px;\r\n  font-weight: bold;\">\r\n    Bienvenidos a nuestra tienda\r\n  </div>\r\n\r\n  <div class=\"ion-text-center\" style=\"margin:1rem; color: #E6E6E6;\">\r\n    Aquí encontraras los productos necesarios para tu entrenamiento a través de nuestras marcas aliadas.\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let item of tienda\">\r\n        <ion-card class=\"card\" (click)=\"go(item)\">\r\n          <img src=\"https://smartbunnypruebas.com/imagenes/aliados/{{item.id}}.png\" class=\"center-img\" />\r\n          <ion-card-header>\r\n            <ion-card-title style=\"font-size: 18px;text-align: center;\">{{item.name}}</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> \r\n\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/tienda/tienda-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tienda/tienda-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TiendaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiendaPageRoutingModule", function() { return TiendaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tienda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tienda.page */ "./src/app/tienda/tienda.page.ts");




const routes = [
    {
        path: '',
        component: _tienda_page__WEBPACK_IMPORTED_MODULE_3__["TiendaPage"]
    }
];
let TiendaPageRoutingModule = class TiendaPageRoutingModule {
};
TiendaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TiendaPageRoutingModule);



/***/ }),

/***/ "./src/app/tienda/tienda.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tienda/tienda.module.ts ***!
  \*****************************************/
/*! exports provided: TiendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiendaPageModule", function() { return TiendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tienda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tienda-routing.module */ "./src/app/tienda/tienda-routing.module.ts");
/* harmony import */ var _tienda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tienda.page */ "./src/app/tienda/tienda.page.ts");







let TiendaPageModule = class TiendaPageModule {
};
TiendaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tienda_routing_module__WEBPACK_IMPORTED_MODULE_5__["TiendaPageRoutingModule"]
        ],
        declarations: [_tienda_page__WEBPACK_IMPORTED_MODULE_6__["TiendaPage"]]
    })
], TiendaPageModule);



/***/ }),

/***/ "./src/app/tienda/tienda.page.scss":
/*!*****************************************!*\
  !*** ./src/app/tienda/tienda.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin: 0 auto;\n  max-height: 4rem;\n}\n\nion-card-title {\n  color: black;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n\nion-col {\n  display: table;\n  height: 200px;\n}\n\nion-col ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: white;\n}\n\nion-col ion-input {\n  border: 1px solid #dcdcdc;\n  color: white;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\nion-col ion-select {\n  color: white;\n  text-align: left;\n  display: contents;\n  width: 100%;\n  font-size: 17px;\n}\n\nion-col ion-select::part(icon) {\n  color: red !important;\n}\n\nion-col ion-avatar {\n  display: table-cell;\n  top: 1.5rem;\n  position: relative;\n}\n\nion-col ion-avatar ion-fab-button {\n  position: absolute;\n  right: 0;\n  bottom: 30%;\n  --background: #EF4044;\n}\n\nion-col ion-avatar img {\n  width: 120px;\n  height: 120px;\n}\n\nion-buttons {\n  position: absolute;\n  right: 0;\n}\n\n.perfil {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.indicadores {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.medidas {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.pago {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.imagen {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\nion-title {\n  text-align: center;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 23px;\n  font-weight: 800;\n  /*   opacity: 0.7; */\n  margin-bottom: 0;\n}\n\nform {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-content {\n  --ion-background-color:black;\n}\n\nion-item {\n  border: 1px solid white;\n  border-radius: 8px;\n}\n\n.pencil-grey {\n  position: absolute;\n  right: 1rem;\n  color: grey;\n  font-size: 1.2rem;\n}\n\n.pencil-red {\n  position: absolute;\n  right: 1rem;\n  color: red;\n  font-size: 1.2rem;\n}\n\n.card {\n  width: 150px;\n  height: 160px;\n  background: #e6e6e6;\n}\n\n.center-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n  width: 101px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGllbmRhL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcdGllbmRhXFx0aWVuZGEucGFnZS5zY3NzIiwic3JjL2FwcC90aWVuZGEvdGllbmRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0ksaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRU47O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNHUjs7QURESTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURBSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFTjs7QURFSTtFQUNBLHFCQUFBO0FDQUo7O0FESUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREdRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDRFo7O0FER1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0RaOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNISjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDSkY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNKRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0pGOztBRE9FO0VBQ0ksa0JBQUE7QUNKTjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Ysb0JBQUE7RUFDRSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRFFFO0VBQ0UsNEJBQUE7QUNMSjs7QURRQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURTQTtFQUNFLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxXQUFBO0VBQVksaUJBQUE7QUNIN0M7O0FES0E7RUFDRSxrQkFBQTtFQUFtQixXQUFBO0VBQVksVUFBQTtFQUFXLGlCQUFBO0FDQzVDOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90aWVuZGEvdGllbmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogNHJlbTtcbiAgfVxuaW9uLWNhcmQtdGl0bGV7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG5cbiAgICAvLyByZXRvY2FyIGNvbG9yIGludGVybm8gZGUgaWNvbm9cbiAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcbiAgICB9XG5cblxuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1mYWItYnV0dG9ue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDMwJTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAucGVyZmlse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB9XG5cbi5pbmRpY2Fkb3Jlc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuXG4ubWVkaWRhc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLnBhZ297XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5pbWFnZW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbiAgaW9uLXRpdGxle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgZm9ybXtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cblxuXG4gIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbmlvbi1pdGVte1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5cbi5wZW5jaWwtZ3JleXtcbiAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxcmVtO2NvbG9yOiBncmV5O2ZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLnBlbmNpbC1yZWR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMXJlbTtjb2xvcjogcmVkO2ZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY2FyZHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuLmNlbnRlci1pbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgd2lkdGg6IDEwMXB4O1xuICAgIGhlaWdodDogODBweDtcbn0iLCIubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0cmVtO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tY29sIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5pb24tY29sIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbCBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb2wgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tY29sIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5pb24tY29sIGlvbi1hdmF0YXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0b3A6IDEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbCBpb24tYXZhdGFyIGlvbi1mYWItYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAzMCU7XG4gIC0tYmFja2dyb3VuZDogI0VGNDA0NDtcbn1cbmlvbi1jb2wgaW9uLWF2YXRhciBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLnBlcmZpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5pbmRpY2Fkb3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5tZWRpZGFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLnBhZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5mb3JtIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5wZW5jaWwtZ3JleSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnBlbmNpbC1yZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbi5jZW50ZXItaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tienda/tienda.page.ts":
/*!***************************************!*\
  !*** ./src/app/tienda/tienda.page.ts ***!
  \***************************************/
/*! exports provided: TiendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiendaPage", function() { return TiendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _services_tienda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tienda.service */ "./src/app/services/tienda.service.ts");





let TiendaPage = class TiendaPage {
    constructor(service, loadingController, navCtrl, utilities) {
        this.service = service;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.utilities = utilities;
        this.tienda = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            const valor = yield this.service.getProducts();
            if (valor == false) {
                this.loadingController.dismiss();
                this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
            }
            else {
                console.log(valor);
                this.loadingController.dismiss();
                this.tienda = valor;
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Por favor espere...',
                cssClass: 'my-loading',
            });
            yield loading.present();
        });
    }
    go(item) {
        let navigationExtras = {
            queryParams: {
                shop: JSON.stringify(item),
            },
        };
        this.navCtrl.navigateForward(["tienda-productos"], navigationExtras);
    }
};
TiendaPage.ctorParameters = () => [
    { type: _services_tienda_service__WEBPACK_IMPORTED_MODULE_4__["TiendaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"] }
];
TiendaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tienda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tienda.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tienda/tienda.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tienda.page.scss */ "./src/app/tienda/tienda.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tienda_service__WEBPACK_IMPORTED_MODULE_4__["TiendaService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])
], TiendaPage);



/***/ })

}]);
//# sourceMappingURL=tienda-tienda-module-es2015.js.map