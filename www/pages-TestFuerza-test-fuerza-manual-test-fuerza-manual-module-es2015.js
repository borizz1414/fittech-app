(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-manual-test-fuerza-manual-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Categorias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"empuje()\" id=\"banca\">\n          <img src=\"assets/img/empuje.png\" />\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"atraccion()\" id=\"curl\">\n          <img src=\"assets/img/atraccion.png\"/>\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"inferior()\" id=\"squat\">\n          <img src=\"assets/img/treninferior.png\"/>\n        </div>   \n      </ion-col>\n    \n    </ion-row>\n  </ion-grid> \n  \n  \n\n  <ion-row >\n    <ion-col  size=\"12\">   \n      <div>\n        <ion-card color=\"danger\" (click)=\"termina()\">\n          <h2 class=\"ion-text-center\">Finalizar</h2>  \n        </ion-card>\n      </div>   \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: TestFuerzaManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaManualPageRoutingModule", function() { return TestFuerzaManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_fuerza_manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-fuerza-manual.page */ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.ts");




const routes = [
    {
        path: '',
        component: _test_fuerza_manual_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaManualPage"]
    }
];
let TestFuerzaManualPageRoutingModule = class TestFuerzaManualPageRoutingModule {
};
TestFuerzaManualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestFuerzaManualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.module.ts ***!
  \**********************************************************************************/
/*! exports provided: TestFuerzaManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaManualPageModule", function() { return TestFuerzaManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_fuerza_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-fuerza-manual-routing.module */ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual-routing.module.ts");
/* harmony import */ var _test_fuerza_manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-fuerza-manual.page */ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.ts");







let TestFuerzaManualPageModule = class TestFuerzaManualPageModule {
};
TestFuerzaManualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_fuerza_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaManualPageRoutingModule"]
        ],
        declarations: [_test_fuerza_manual_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaManualPage"]]
    })
], TestFuerzaManualPageModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  border: solid 1px grey;\n}\n\n.padre {\n  position: absolute;\n  top: 40%;\n  width: 90%;\n}\n\n.realizado {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1tYW51YWwvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcVGVzdEZ1ZXJ6YVxcdGVzdC1mdWVyemEtbWFudWFsXFx0ZXN0LWZ1ZXJ6YS1tYW51YWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLW1hbnVhbC90ZXN0LWZ1ZXJ6YS1tYW51YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RGdWVyemEvdGVzdC1mdWVyemEtbWFudWFsL3Rlc3QtZnVlcnphLW1hbnVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiB9XG5cbi5wYWRyZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnJlYWxpemFkb3tcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4iLCJpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucGFkcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICB3aWR0aDogOTAlO1xufVxuXG4ucmVhbGl6YWRvIHtcbiAgb3BhY2l0eTogMC4yO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.ts ***!
  \********************************************************************************/
/*! exports provided: TestFuerzaManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaManualPage", function() { return TestFuerzaManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let TestFuerzaManualPage = class TestFuerzaManualPage {
    constructor(ruta, apiservice, loadingController, notificacion) {
        this.ruta = ruta;
        this.apiservice = apiservice;
        this.loadingController = loadingController;
        this.notificacion = notificacion;
    }
    ngOnInit() {
    }
    empuje() {
        if (this.apiservice.bloquearexamen.examen1) {
            document.getElementById("banca").classList.add('realizado');
            return;
        }
        else {
            this.ruta.navigateByUrl("test-fuerza-manual-pasos/1");
        }
    }
    atraccion() {
        if (this.apiservice.bloquearexamen.examen2) {
            document.getElementById("curl").classList.add('realizado');
            return;
        }
        else {
            this.ruta.navigateByUrl("test-fuerza-manual-pasos/2");
        }
    }
    inferior() {
        if (this.apiservice.bloquearexamen.examen3) {
            document.getElementById("squat").classList.add('realizado');
            return;
        }
        else {
            this.ruta.navigateByUrl("test-fuerza-manual-pasos/3");
        }
    }
    termina() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.apiservice.bloquearexamen.examen1 && this.apiservice.bloquearexamen.examen2 && this.apiservice.bloquearexamen.examen3) {
                this.presentLoading();
                const validar = yield this.apiservice.TestFuerza();
                this.loadingController.dismiss();
                if (validar) {
                    console.log(this.apiservice.evaluarTest);
                    if (this.apiservice.evaluarTest) {
                        document.getElementById("tablaexamen").classList.add('ocultar');
                    }
                    else {
                        this.apiservice.pruebaRealizada(true);
                    }
                    document.getElementById("fuerza").classList.add('ocultar');
                    this.ruta.navigateByUrl('/tabs');
                    this.notificacion.notificacionUsuario("Gracias por realizar el test!", "danger");
                }
                else {
                    this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión", "primary");
                }
            }
            else {
                this.notificacion.notificacionUsuario("Complete los test, antes de finalizar", "warning");
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Por favor espere...',
            });
            yield loading.present();
        });
    }
};
TestFuerzaManualPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"] }
];
TestFuerzaManualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-fuerza-manual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-fuerza-manual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-fuerza-manual.page.scss */ "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])
], TestFuerzaManualPage);



/***/ })

}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-manual-test-fuerza-manual-module-es2015.js.map