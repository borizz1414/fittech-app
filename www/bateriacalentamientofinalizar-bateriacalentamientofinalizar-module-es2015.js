(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateriacalentamientofinalizar-bateriacalentamientofinalizar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<!-- cabezera -->\n\n<ion-grid  style=\"padding: 0px;\" >\n  <ion-row style=\"background-color:#F4F3F1;\">\n    <ion-col size=\"12\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/calentamientofinalizar1.jpg\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n       <h1  class=\"titulo\"  style=\"text-align: center;\"> Calentamiento Finalizado</h1>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <h1 class=\"ion-text-center\">   ¡Preparate para comenzar la rutina! </h1>\n    </ion-col>\n  </ion-row>\n\n    <ion-row >\n      <ion-col  size=\"12\">   \n          <ion-card style=\"  \n            background: #EF4044;\n            color: white;\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\" (click)=\"siguiente()\">\n            <h2 style=\"text-align: center; margin: 10px;\">\n             <b> Empezar </b>\n            </h2>  \n          </ion-card>\n      </ion-col>\n      \n    </ion-row>\n\n\n</ion-grid>\n\n\n<!-- <ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"siguiente()\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab> -->\n");

/***/ }),

/***/ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BateriacalentamientofinalizarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientofinalizarPageRoutingModule", function() { return BateriacalentamientofinalizarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateriacalentamientofinalizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateriacalentamientofinalizar.page */ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.ts");




const routes = [
    {
        path: '',
        component: _bateriacalentamientofinalizar_page__WEBPACK_IMPORTED_MODULE_3__["BateriacalentamientofinalizarPage"]
    }
];
let BateriacalentamientofinalizarPageRoutingModule = class BateriacalentamientofinalizarPageRoutingModule {
};
BateriacalentamientofinalizarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriacalentamientofinalizarPageRoutingModule);



/***/ }),

/***/ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BateriacalentamientofinalizarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientofinalizarPageModule", function() { return BateriacalentamientofinalizarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateriacalentamientofinalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateriacalentamientofinalizar-routing.module */ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar-routing.module.ts");
/* harmony import */ var _bateriacalentamientofinalizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateriacalentamientofinalizar.page */ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.ts");







let BateriacalentamientofinalizarPageModule = class BateriacalentamientofinalizarPageModule {
};
BateriacalentamientofinalizarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateriacalentamientofinalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriacalentamientofinalizarPageRoutingModule"]
        ],
        declarations: [_bateriacalentamientofinalizar_page__WEBPACK_IMPORTED_MODULE_6__["BateriacalentamientofinalizarPage"]]
    })
], BateriacalentamientofinalizarPageModule);



/***/ }),

/***/ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n/*fin logo*/\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYWNhbGVudGFtaWVudG9maW5hbGl6YXIvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxiYXRlcmlhY2FsZW50YW1pZW50b2ZpbmFsaXphclxcYmF0ZXJpYWNhbGVudGFtaWVudG9maW5hbGl6YXIucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhY2FsZW50YW1pZW50b2ZpbmFsaXphci9iYXRlcmlhY2FsZW50YW1pZW50b2ZpbmFsaXphci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ047QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRUo7QURDRSxXQUFBO0FBR0Y7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0FKO0FERUk7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNBTDtBREtBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDRkQ7QURNQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNISjtBRE9BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2JhdGVyaWFjYWxlbnRhbWllbnRvZmluYWxpemFyL2JhdGVyaWFjYWxlbnRhbWllbnRvZmluYWxpemFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAvKmZpbiBsb2dvKi9cblxuXG5pb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gXG4gICAgaDJ7XG4gICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIFxuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbmlvbi1jb250ZW50e1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG5cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9IiwiLypsb2dvKi9cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qZmluIGxvZ28qL1xuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5hdW1lbnRhcnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.ts ***!
  \*************************************************************************************/
/*! exports provided: BateriacalentamientofinalizarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientofinalizarPage", function() { return BateriacalentamientofinalizarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let BateriacalentamientofinalizarPage = class BateriacalentamientofinalizarPage {
    constructor(ruta) {
        this.ruta = ruta;
    }
    ngOnInit() {
    }
    siguiente() {
        this.ruta.navigateRoot(["/rutina-entrenamiento"]);
    }
};
BateriacalentamientofinalizarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
BateriacalentamientofinalizarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateriacalentamientofinalizar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateriacalentamientofinalizar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateriacalentamientofinalizar.page.scss */ "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], BateriacalentamientofinalizarPage);



/***/ })

}]);
//# sourceMappingURL=bateriacalentamientofinalizar-bateriacalentamientofinalizar-module-es2015.js.map