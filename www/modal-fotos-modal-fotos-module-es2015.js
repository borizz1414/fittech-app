(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-fotos-modal-fotos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-fotos/modal-fotos.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-fotos/modal-fotos.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-icon  style=\"font-size: 1.5rem;\" name=\"close-outline\" (click)=\"salir()\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"image\" alt=\"\" style=\"height: 90%;\" \n  onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <!-- <h1 style=\"margin: 0; text-align: center; margin-bottom: 5px;\">{{nombre}}</h1> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/modal-fotos/modal-fotos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modal-fotos/modal-fotos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ModalFotosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFotosPageRoutingModule", function() { return ModalFotosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_fotos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-fotos.page */ "./src/app/modal-fotos/modal-fotos.page.ts");




const routes = [
    {
        path: '',
        component: _modal_fotos_page__WEBPACK_IMPORTED_MODULE_3__["ModalFotosPage"]
    }
];
let ModalFotosPageRoutingModule = class ModalFotosPageRoutingModule {
};
ModalFotosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalFotosPageRoutingModule);



/***/ }),

/***/ "./src/app/modal-fotos/modal-fotos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modal-fotos/modal-fotos.module.ts ***!
  \***************************************************/
/*! exports provided: ModalFotosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFotosPageModule", function() { return ModalFotosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_fotos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-fotos-routing.module */ "./src/app/modal-fotos/modal-fotos-routing.module.ts");
/* harmony import */ var _modal_fotos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-fotos.page */ "./src/app/modal-fotos/modal-fotos.page.ts");







let ModalFotosPageModule = class ModalFotosPageModule {
};
ModalFotosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_fotos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalFotosPageRoutingModule"]
        ],
        declarations: [_modal_fotos_page__WEBPACK_IMPORTED_MODULE_6__["ModalFotosPage"]]
    })
], ModalFotosPageModule);



/***/ }),

/***/ "./src/app/modal-fotos/modal-fotos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/modal-fotos/modal-fotos.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWZvdG9zL21vZGFsLWZvdG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modal-fotos/modal-fotos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/modal-fotos/modal-fotos.page.ts ***!
  \*************************************************/
/*! exports provided: ModalFotosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFotosPage", function() { return ModalFotosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ModalFotosPage = class ModalFotosPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        this.image = this.imagen;
    }
    salir() {
        this.modalController.dismiss();
    }
};
ModalFotosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalFotosPage.prototype, "imagen", void 0);
ModalFotosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-fotos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-fotos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-fotos/modal-fotos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-fotos.page.scss */ "./src/app/modal-fotos/modal-fotos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ModalFotosPage);



/***/ })

}]);
//# sourceMappingURL=modal-fotos-modal-fotos-module-es2015.js.map