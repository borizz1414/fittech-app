(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-categoria-test-fuerza-categoria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Categorias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"empuje()\" id=\"banca\"  >\n          <img src=\"assets/img/empuje.png\"  />\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"atraccion()\" id=\"curl\">\n          <img src=\"assets/img/atraccion.png\"/>\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"inferior()\" id=\"squat\">\n          <img src=\"assets/img/treninferior.png\"/>\n        </div>   \n      </ion-col>\n    \n    </ion-row>\n  </ion-grid> \n  \n  \n\n  <ion-row >\n    <ion-col  size=\"12\">   \n      <div>\n        <ion-card color=\"danger\" (click)=\"termina()\">\n          <h2 class=\"ion-text-center\">Finalizar</h2>  \n        </ion-card>\n      </div>   \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: TestFuerzaCategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaCategoriaPageRoutingModule", function() { return TestFuerzaCategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_fuerza_categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-fuerza-categoria.page */ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.ts");




const routes = [
    {
        path: '',
        component: _test_fuerza_categoria_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaCategoriaPage"]
    }
];
let TestFuerzaCategoriaPageRoutingModule = class TestFuerzaCategoriaPageRoutingModule {
};
TestFuerzaCategoriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestFuerzaCategoriaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TestFuerzaCategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaCategoriaPageModule", function() { return TestFuerzaCategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_fuerza_categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-fuerza-categoria-routing.module */ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria-routing.module.ts");
/* harmony import */ var _test_fuerza_categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-fuerza-categoria.page */ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.ts");







let TestFuerzaCategoriaPageModule = class TestFuerzaCategoriaPageModule {
};
TestFuerzaCategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_fuerza_categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaCategoriaPageRoutingModule"]
        ],
        declarations: [_test_fuerza_categoria_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaCategoriaPage"]]
    })
], TestFuerzaCategoriaPageModule);



/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".realizado {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1jYXRlZ29yaWEvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcVGVzdEZ1ZXJ6YVxcdGVzdC1mdWVyemEtY2F0ZWdvcmlhXFx0ZXN0LWZ1ZXJ6YS1jYXRlZ29yaWEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLWNhdGVnb3JpYS90ZXN0LWZ1ZXJ6YS1jYXRlZ29yaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1jYXRlZ29yaWEvdGVzdC1mdWVyemEtY2F0ZWdvcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFsaXphZG97XG4gICAgb3BhY2l0eTogMC4yO1xufSIsIi5yZWFsaXphZG8ge1xuICBvcGFjaXR5OiAwLjI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.ts ***!
  \**************************************************************************************/
/*! exports provided: TestFuerzaCategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFuerzaCategoriaPage", function() { return TestFuerzaCategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let TestFuerzaCategoriaPage = class TestFuerzaCategoriaPage {
    constructor(apiservice, notificacion, route, usuarioservicio, loadingController, cdr) {
        this.apiservice = apiservice;
        this.notificacion = notificacion;
        this.route = route;
        this.usuarioservicio = usuarioservicio;
        this.loadingController = loadingController;
        this.cdr = cdr;
    }
    ngOnInit() {
        console.log(this.apiservice.bloquearexamen);
    }
    empuje() {
        if (this.apiservice.bloquearexamen.examen1) {
            document.getElementById("banca").classList.add('realizado');
            return;
        }
        else {
            this.usuarioservicio.TestSelecion(1);
            this.route.navigateByUrl('/test-fuerza-pasos1');
        }
    }
    atraccion() {
        if (this.apiservice.bloquearexamen.examen2) {
            document.getElementById("curl").classList.add('realizado');
            return;
        }
        else {
            this.usuarioservicio.TestSelecion(3);
            this.route.navigateByUrl('/test-fuerza-pasos1');
        }
    }
    inferior() {
        if (this.apiservice.bloquearexamen.examen3) {
            document.getElementById("squat").classList.add('realizado');
            return;
        }
        else {
            this.route.navigateByUrl('/test-fuerza-menu3');
            this.usuarioservicio.TestSelecion(2);
            this.usuarioservicio.TestSelecion(4);
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
                    this.route.navigateByUrl('/tabs');
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
TestFuerzaCategoriaPage.ctorParameters = () => [
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"] },
    { type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
TestFuerzaCategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-fuerza-categoria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-fuerza-categoria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-fuerza-categoria.page.scss */ "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"],
        src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TestFuerzaCategoriaPage);



/***/ })

}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-categoria-test-fuerza-categoria-module-es2015.js.map