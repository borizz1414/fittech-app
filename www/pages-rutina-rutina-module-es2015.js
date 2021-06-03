(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rutina-rutina-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rutina/rutina.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rutina/rutina.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Tienda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/rutina/rutina-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/rutina/rutina-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RutinaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinaPageRoutingModule", function() { return RutinaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rutina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutina.page */ "./src/app/pages/rutina/rutina.page.ts");




const routes = [
    {
        path: '',
        component: _rutina_page__WEBPACK_IMPORTED_MODULE_3__["RutinaPage"]
    }
];
let RutinaPageRoutingModule = class RutinaPageRoutingModule {
};
RutinaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RutinaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rutina/rutina.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rutina/rutina.module.ts ***!
  \***********************************************/
/*! exports provided: RutinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinaPageModule", function() { return RutinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rutina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rutina-routing.module */ "./src/app/pages/rutina/rutina-routing.module.ts");
/* harmony import */ var _rutina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rutina.page */ "./src/app/pages/rutina/rutina.page.ts");







let RutinaPageModule = class RutinaPageModule {
};
RutinaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rutina_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutinaPageRoutingModule"]
        ],
        declarations: [_rutina_page__WEBPACK_IMPORTED_MODULE_6__["RutinaPage"]]
    })
], RutinaPageModule);



/***/ }),

/***/ "./src/app/pages/rutina/rutina.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/rutina/rutina.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1dGluYS9ydXRpbmEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/rutina/rutina.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/rutina/rutina.page.ts ***!
  \*********************************************/
/*! exports provided: RutinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinaPage", function() { return RutinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RutinaPage = class RutinaPage {
    constructor() { }
    ngOnInit() {
    }
};
RutinaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rutina',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rutina.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rutina/rutina.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rutina.page.scss */ "./src/app/pages/rutina/rutina.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RutinaPage);



/***/ })

}]);
//# sourceMappingURL=pages-rutina-rutina-module-es2015.js.map