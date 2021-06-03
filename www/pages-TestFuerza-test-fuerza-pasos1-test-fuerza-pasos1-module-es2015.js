(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-pasos1-test-fuerza-pasos1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Tutorial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col  size=\"12\">  \n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Press banca'\">\n          <img src=\"assets/img/press-banca-1.png\"/>\n        </div>\n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Squat'\">\n          <img src=\"assets/img/squat-1.png\"/>\n        </div>\n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Leg curl'\">\n          <img src=\"assets/img/leg-curl-1.png\"/>\n        </div>\n        \n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Leg extension'\">\n          <img src=\"assets/img/gym1.jpg\"/>\n        </div>\n        \n\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <h2 class=\"ion-text-center\">{{nombre}} - Paso 1</h2> \n\n  <div  class=\"ion-padding ion-text-center\">\n    Calienta con un peso que puedas hacer 20 repeticiones <b>Realizar dos series</b>\n  </div>  \n\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card color=\"dark\" (click)=\"siguiente()\">\n            <h2 class=\"ion-text-center\">Siguiente</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: TestFuerzaPasos1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos1PageRoutingModule", function() { return TestFuerzaPasos1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_fuerza_pasos1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-fuerza-pasos1.page */ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.ts");




const routes = [
    {
        path: '',
        component: _test_fuerza_pasos1_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaPasos1Page"]
    }
];
let TestFuerzaPasos1PageRoutingModule = class TestFuerzaPasos1PageRoutingModule {
};
TestFuerzaPasos1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestFuerzaPasos1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.module.ts ***!
  \**********************************************************************************/
/*! exports provided: TestFuerzaPasos1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos1PageModule", function() { return TestFuerzaPasos1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_fuerza_pasos1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-fuerza-pasos1-routing.module */ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1-routing.module.ts");
/* harmony import */ var _test_fuerza_pasos1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-fuerza-pasos1.page */ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.ts");







let TestFuerzaPasos1PageModule = class TestFuerzaPasos1PageModule {
};
TestFuerzaPasos1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_fuerza_pasos1_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaPasos1PageRoutingModule"]
        ],
        declarations: [_test_fuerza_pasos1_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaPasos1Page"]]
    })
], TestFuerzaPasos1PageModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RGdWVyemEvdGVzdC1mdWVyemEtcGFzb3MxL3Rlc3QtZnVlcnphLXBhc29zMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.ts ***!
  \********************************************************************************/
/*! exports provided: TestFuerzaPasos1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos1Page", function() { return TestFuerzaPasos1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");




let TestFuerzaPasos1Page = class TestFuerzaPasos1Page {
    constructor(ruta, usuarioservicio) {
        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
    }
    ngOnInit() {
        if (this.usuarioservicio.selecionTestEjercicio.pressbanca) {
            this.nombre = 'Press banca';
        }
        if (this.usuarioservicio.selecionTestEjercicio.squat) {
            this.nombre = 'Squat';
        }
        if (this.usuarioservicio.selecionTestEjercicio.legcurl) {
            this.nombre = 'Leg curl';
        }
        if (this.usuarioservicio.selecionTestEjercicio.legextension) {
            this.nombre = 'Leg extension';
        }
    }
    siguiente() {
        this.ruta.navigateForward('test-fuerza-pasos2');
    }
};
TestFuerzaPasos1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
TestFuerzaPasos1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-fuerza-pasos1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-fuerza-pasos1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-fuerza-pasos1.page.scss */ "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], TestFuerzaPasos1Page);



/***/ })

}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-pasos1-test-fuerza-pasos1-module-es2015.js.map