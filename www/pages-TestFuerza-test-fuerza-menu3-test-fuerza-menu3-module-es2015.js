(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-menu3-test-fuerza-menu3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar  color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Test de fuerza</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <h4 class=\"ion-padding-horizontal ion-text-center\">Complete un solo ejercicio.</h4>\n\n  <ion-list>\n    <!-- \n    <p style=\"font-size: medium; text-align: center;\">Vista previa de los entrenamientos</p>-->\n    <ion-item (click)=\"squat()\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"assets/img/squat-3.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Squat</h2>\n      </ion-label>\n      <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    \n    <p style=\"font-size: medium; text-align: center;\" class=\"ion-padding\"> <b>Si no puedes realizar squat , por favor realizar leg extension</b></p>\n    \n\n    <ion-item (click)=\"legextension()\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"assets/img/legextension.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Leg extension</h2>\n      </ion-label>\n      <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n\n\n<!--\n\n    <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"squat()\" id=\"squat\">\n          <img src=\"assets/img/squat-3.png\"/>\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"legextension()\" id=\"extension\">\n          <img src=\"assets/img/legextension.jpg\"/>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n  </ion-grid> \n  \n-->");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TestFuerzaMenu3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaMenu3PageRoutingModule", function() { return TestFuerzaMenu3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_fuerza_menu3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-fuerza-menu3.page */ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.ts");




const routes = [
    {
        path: '',
        component: _test_fuerza_menu3_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaMenu3Page"]
    }
];
let TestFuerzaMenu3PageRoutingModule = class TestFuerzaMenu3PageRoutingModule {
};
TestFuerzaMenu3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestFuerzaMenu3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.module.ts ***!
  \********************************************************************************/
/*! exports provided: TestFuerzaMenu3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaMenu3PageModule", function() { return TestFuerzaMenu3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_fuerza_menu3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-fuerza-menu3-routing.module */ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3-routing.module.ts");
/* harmony import */ var _test_fuerza_menu3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-fuerza-menu3.page */ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.ts");







let TestFuerzaMenu3PageModule = class TestFuerzaMenu3PageModule {
};
TestFuerzaMenu3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_fuerza_menu3_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaMenu3PageRoutingModule"]
        ],
        declarations: [_test_fuerza_menu3_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaMenu3Page"]]
    })
], TestFuerzaMenu3PageModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\nion-thumbnail img {\n  width: auto !important;\n  height: auto !important;\n}\nion-list-header {\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1tZW51My9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxUZXN0RnVlcnphXFx0ZXN0LWZ1ZXJ6YS1tZW51M1xcdGVzdC1mdWVyemEtbWVudTMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLW1lbnUzL3Rlc3QtZnVlcnphLW1lbnUzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0E7QURBSTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNFSjtBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLW1lbnUzL3Rlc3QtZnVlcnphLW1lbnUzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWx7XG53aWR0aDoxMDBweDtcbmhlaWdodDoxMDBweDtcbiAgICBpbWd7XG4gICAgd2lkdGg6YXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDphdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.ts ***!
  \******************************************************************************/
/*! exports provided: TestFuerzaMenu3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaMenu3Page", function() { return TestFuerzaMenu3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");




let TestFuerzaMenu3Page = class TestFuerzaMenu3Page {
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
        this.usuarioservicio.TestSelecion(5);
    }
    termina() {
        this.ruta.navigateByUrl('test-fuerza-categoria');
    }
};
TestFuerzaMenu3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
TestFuerzaMenu3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-fuerza-menu3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-fuerza-menu3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-fuerza-menu3.page.scss */ "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], TestFuerzaMenu3Page);



/***/ })

}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-menu3-test-fuerza-menu3-module-es2015.js.map