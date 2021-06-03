(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestResistencia-test-resistencia-test-resistencia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Test de resistencia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding-horizontal\">\n          <img src=\"assets/img/runner.jpg\"/>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>   \n  <div  class=\"ion-padding ion-text-justify\">\n    Realizar el test de resistencia permitira brindarte una personalización mucho más completa.\n    Recuerda que hacer esto te va a permitir evaluarte cada 6 semanas y medir tu progreso.\n  </div>   \n\n  <div class=\"ion-padding ion-text-justify\">\n    Por favor correr por 12 minutos, mide la distancia recorrida total e introduce los datos obtenidos.\n  </div>\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <ion-input type=\"text\" name=\"correr\" [(ngModel)]=\"atleta.correr\" placeholder=\"mts\"></ion-input> \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card color=\"dark\" (click)=\"test()\">\n            <h2 class=\"ion-text-center\">Finalizar</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/TestResistencia/test-resistencia/test-resistencia-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TestResistenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResistenciaPageRoutingModule", function() { return TestResistenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_resistencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-resistencia.page */ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.ts");




const routes = [
    {
        path: '',
        component: _test_resistencia_page__WEBPACK_IMPORTED_MODULE_3__["TestResistenciaPage"]
    }
];
let TestResistenciaPageRoutingModule = class TestResistenciaPageRoutingModule {
};
TestResistenciaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestResistenciaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/TestResistencia/test-resistencia/test-resistencia.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TestResistenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResistenciaPageModule", function() { return TestResistenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_resistencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-resistencia-routing.module */ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia-routing.module.ts");
/* harmony import */ var _test_resistencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-resistencia.page */ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.ts");







let TestResistenciaPageModule = class TestResistenciaPageModule {
};
TestResistenciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_resistencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestResistenciaPageRoutingModule"]
        ],
        declarations: [_test_resistencia_page__WEBPACK_IMPORTED_MODULE_6__["TestResistenciaPage"]]
    })
], TestResistenciaPageModule);



/***/ }),

/***/ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  border: solid 1px grey;\n  border-radius: 12px;\n  width: 90%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdFJlc2lzdGVuY2lhL3Rlc3QtcmVzaXN0ZW5jaWEvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcVGVzdFJlc2lzdGVuY2lhXFx0ZXN0LXJlc2lzdGVuY2lhXFx0ZXN0LXJlc2lzdGVuY2lhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvVGVzdFJlc2lzdGVuY2lhL3Rlc3QtcmVzaXN0ZW5jaWEvdGVzdC1yZXNpc3RlbmNpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RSZXNpc3RlbmNpYS90ZXN0LXJlc2lzdGVuY2lhL3Rlc3QtcmVzaXN0ZW5jaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuIH0iLCJpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.ts ***!
  \*********************************************************************************/
/*! exports provided: TestResistenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResistenciaPage", function() { return TestResistenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let TestResistenciaPage = class TestResistenciaPage {
    constructor(route, ApiService, notificacion, loadingController) {
        this.route = route;
        this.ApiService = ApiService;
        this.notificacion = notificacion;
        this.loadingController = loadingController;
        this.atleta = {
            correr: null
        };
    }
    ngOnInit() {
    }
    test() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.atleta.correr == null || this.atleta.correr < 0) {
                return;
            }
            else {
                this.presentLoading();
                console.log(this.atleta.correr);
                const validar = yield this.ApiService.TestResistencia(this.atleta.correr);
                this.loadingController.dismiss();
                if (validar) {
                    console.log(this.ApiService.evaluarTest);
                    if (this.ApiService.evaluarTest) {
                        document.getElementById("tablaexamen").classList.add('ocultar');
                    }
                    else {
                        this.ApiService.pruebaRealizada(true);
                    }
                    document.getElementById("resistencia").classList.add('ocultar');
                    this.route.navigateByUrl('/tabs');
                    this.notificacion.notificacionUsuario("Gracias por realizar el test!", "danger");
                }
                else {
                    this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión", "primary");
                }
                //this.route.navigateByUrl('/tabs')
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
TestResistenciaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] },
    { type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
TestResistenciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-resistencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-resistencia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-resistencia.page.scss */ "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"],
        src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], TestResistenciaPage);



/***/ })

}]);
//# sourceMappingURL=pages-TestResistencia-test-resistencia-test-resistencia-module-es2015.js.map