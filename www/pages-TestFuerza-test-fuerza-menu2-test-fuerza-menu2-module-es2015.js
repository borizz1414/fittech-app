(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-menu2-test-fuerza-menu2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Test de fuerza</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2 class=\"ion-padding-horizontal ion-text-center\">Complete el ejercicio.</h2>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"legcurl()\" id=\"curl\">\n          <img src=\"assets/img/legcurl.jpg\"/>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid> \n  \n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TestFuerzaMenu2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaMenu2PageRoutingModule", function() { return TestFuerzaMenu2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_fuerza_menu2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-fuerza-menu2.page */ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.ts");




const routes = [
    {
        path: '',
        component: _test_fuerza_menu2_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaMenu2Page"]
    }
];
let TestFuerzaMenu2PageRoutingModule = class TestFuerzaMenu2PageRoutingModule {
};
TestFuerzaMenu2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestFuerzaMenu2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.module.ts ***!
  \********************************************************************************/
/*! exports provided: TestFuerzaMenu2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaMenu2PageModule", function() { return TestFuerzaMenu2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_fuerza_menu2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-fuerza-menu2-routing.module */ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2-routing.module.ts");
/* harmony import */ var _test_fuerza_menu2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-fuerza-menu2.page */ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.ts");







let TestFuerzaMenu2PageModule = class TestFuerzaMenu2PageModule {
};
TestFuerzaMenu2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_fuerza_menu2_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaMenu2PageRoutingModule"]
        ],
        declarations: [_test_fuerza_menu2_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaMenu2Page"]]
    })
], TestFuerzaMenu2PageModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RGdWVyemEvdGVzdC1mdWVyemEtbWVudTIvdGVzdC1mdWVyemEtbWVudTIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.ts ***!
  \******************************************************************************/
/*! exports provided: TestFuerzaMenu2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaMenu2Page", function() { return TestFuerzaMenu2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");




let TestFuerzaMenu2Page = class TestFuerzaMenu2Page {
    constructor(ruta, usuarioservicio) {
        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
    }
    ngOnInit() {
    }
    pressbanca() {
        console.log("pres banca");
        //this.ruta.navigateByUrl('/test-fuerza-pasos4/banca');
        this.ruta.navigateByUrl('/test-fuerza-pasos1');
        this.usuarioservicio.TestSelecion(1);
    }
    squat() {
        console.log("squat");
        //this.ruta.navigateByUrl('/test-fuerza-pasos4/squat');
        this.ruta.navigateByUrl('/test-fuerza-pasos1');
        this.usuarioservicio.TestSelecion(2);
    }
    legcurl() {
        console.log("leg curl");
        //this.ruta.navigateByUrl('/test-fuerza-pasos4/curl');
        this.ruta.navigateByUrl('/test-fuerza-pasos1');
        this.usuarioservicio.TestSelecion(3);
    }
    legextension() {
        console.log("leg extension");
        //this.ruta.navigateByUrl('/test-fuerza-pasos4/extension');
        this.ruta.navigateByUrl('/test-fuerza-pasos1');
        this.usuarioservicio.TestSelecion(4);
    }
    termina() {
        this.ruta.navigateByUrl('/test-fuerza-categoria');
    }
};
TestFuerzaMenu2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
TestFuerzaMenu2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-fuerza-menu2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-fuerza-menu2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-fuerza-menu2.page.scss */ "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], TestFuerzaMenu2Page);



/***/ })

}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-menu2-test-fuerza-menu2-module-es2015.js.map