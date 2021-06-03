(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medidas-medidas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/medidas/medidas.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medidas/medidas.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\" horizontal=\"start\" slot=\"fixed\"\n    class=\"animated fadeInUp delay-2s\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-buttons>\n<!-- <ion-buttons slot=\"end\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"end\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n    <ion-button style=\"--background:#ef4044; color: white;\" (click)=\"alerta()\" size=\"small\">\n    Saltar\n    </ion-button>\n  </ion-fab>\n</ion-buttons> -->\n\n<ion-buttons slot=\"end\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\" horizontal=\"end\" slot=\"fixed\"\n    class=\"animated fadeInUp delay-2s\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"confirmarSalida()\" size=\"small\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding ion-text-left titulo2\">\n    Medir es <b>vital</b> para registrar tu progreso, más importante que el peso, tus medidas harán más visibles los\n    <b>resultados</b> de tu esfuerzo y disciplina.\n  </div>\n  <ion-grid style=\"padding: 0;\">\n    <ion-row>\n      <ion-col size=\"12\" style=\"padding: 0;\">\n        <div>\n          <img src=\"assets/img/medidas.jpg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form [formGroup]=\"form\">\n    <!-- <form [formGroup]=\"form_\"> -->\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cintura mínima\n            <sup>\n              <ion-icon (click)=\"modal('Cintura minima')\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'min_waist')\" placeholder=\"0\" clearOnEdit=\"true\" inputmode=\"tel\"\n              maxlength=\"5\" formControlName=\"min_waist\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('min_waist')\" mode=\"ios\" value=\"Cm\" formControlName=\"min_waist_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n           <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n         </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Cintura máxima\n            <sup>\n              <ion-icon (click)=\"modal('Cintura maxima')\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'max_waist')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"max_waist\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('max_waist')\" mode=\"ios\" value=\"Cm\" formControlName=\"max_waist_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n           <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n         </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cadera\n            <sup>\n              <ion-icon (click)=\"modal('Cadera')\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'hip')\" placeholder=\"0\" clearOnEdit clearOnEdit inputmode=\"tel\"\n              maxlength=\"5\" formControlName=\"hip\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('hip')\" mode=\"ios\" value=\"Cm\" formControlName=\"hip_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n           <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n         </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Cuello\n            <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Cuello')\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'neck')\" placeholder=\"0\" clearOnEdit clearOnEdit inputmode=\"tel\"\n              maxlength=\"5\" formControlName=\"neck\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('neck')\" mode=\"ios\" value=\"Cm\" formControlName=\"neck_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n           <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n         </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Muslo derecho\n            <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Muslo derecho')\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup> </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'right_thigh')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"right_thigh\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('right_thigh')\" mode=\"ios\" value=\"Cm\" formControlName=\"right_thigh_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n           <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n         </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Muslo izquierdo <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Muslo izquierdo')\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup><br></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'left_thigh')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"left_thigh\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('left_thigh')\" mode=\"ios\" value=\"Cm\" formControlName=\"left_thigh_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--   <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo relajado derecho\n            <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Brazo relajado derecho')\"\n                style=\"font-size: 1.25rem; color: black;\"></ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'right_arm')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"right_arm\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('right_arm')\" mode=\"ios\" value=\"Cm\" formControlName=\"right_arm_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--   <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Brazo relajado izquierdo <sup>\n              <ion-icon name=\"alert-circle\" style=\"font-size: 1.25rem; color: black;\"\n                (click)=\"modal('Brazo relajado izquierdo')\"></ion-icon>\n            </sup></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'left_arm')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"left_arm\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('left_arm')\" mode=\"ios\" value=\"Cm\" formControlName=\"left_arm_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--     <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- brazo flexionado -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo flexionado derecho\n            <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Brazo flexionado derecho')\"\n                style=\"font-size: 1.25rem; color: black;\"></ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'right_arm_flexed')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"right_arm_flexed\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('right_arm_flexed')\" mode=\"ios\" value=\"Cm\"\n                formControlName=\"right_arm_flexed_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Brazo flexionado izquierdo <sup>\n              <ion-icon name=\"alert-circle\" style=\"font-size: 1.25rem; color: black;\"\n                (click)=\"modal('Brazo flexionado izquierdo')\"></ion-icon>\n            </sup></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'left_arm_flexed')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"left_arm_flexed\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('left_arm_flexed')\" mode=\"ios\" value=\"Cm\" formControlName=\"left_arm_flexed_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--   <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Pantorrilla <br> derecha <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Pantorrilla derecho')\"\n                style=\"font-size: 1.25rem; color: black;\"></ion-icon>\n\n            </sup></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'right_calf')\" placeholder=\"0\" clearOnEdit inputmode=\"tel\"\n              maxlength=\"5\" formControlName=\"right_calf\">\n            </ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('right_calf')\" mode=\"ios\" value=\"Cm\" formControlName=\"right_calf_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Pantorrilla <br> izquierda\n            <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Pantorrilla izquierda')\"\n                style=\"font-size: 1.25rem; color: black;\"></ion-icon>\n            </sup></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'left_calf')\" placeholder=\"0\" clearOnEdit clearOnEdit\n              inputmode=\"tel\" maxlength=\"5\" formControlName=\"left_calf\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('left_calf')\" mode=\"ios\" value=\"Cm\" formControlName=\"left_calf_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!--  <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <!-- <app-estatura2 (estatura_)=\"checkStature($event)\" (peso2)=\"checkPeso($event)\"></app-estatura2> -->\n\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Tórax\n            <sup>\n              <ion-icon name=\"alert-circle\" (click)=\"modal('Torax')\" style=\"font-size: 1.25rem; color: black;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input (keyup)=\"decimalFormat($event, 'torax')\" placeholder=\"0\" clearOnEdit clearOnEdit inputmode=\"tel\"\n              maxlength=\"5\" formControlName=\"torax\"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin: 0 auto;\">\n              <ion-segment (click)=\"change('torax')\" mode=\"ios\" value=\"Cm\" formControlName=\"torax_\">\n                <ion-segment-button value=\"Cm\">\n                  <ion-label class=\"titulopeque\">Cm</ion-label>\n                </ion-segment-button>\n                <!-- <ion-segment-button value=\"Pulgadas\">\n                  <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n                </ion-segment-button> -->\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <div class=\"ion-padding ion-text-center titulo2\">\n          Estamos emocionados con el cambio que vas a tener las próximas semanas, por favor registra algunas fotos, te\n          emocionará al momento de comparar. En tu galería quizá puedes perderla de vista, puedes tenerlas aquí y\n          subirlas sin que se vea tu rostro.\n        </div>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n            <img class=\"opacidad\" src=\"assets/img/fotofrente1.png\" (click)=\"captureImage(1)\" *ngIf=\"!imgSelected\">\n          <div class=\"img-size\" *ngIf=\"imgSelected\">\n            <img class=\"fluid-img\" [src]=\"imgSelected\" (click)=\"captureImage(1)\" >\n          </div>\n          <p style=\"color: red;\">Foto de frente</p>\n        </ion-col>\n        <ion-col size=\"12\">\n         \n          <img class=\"opacidad\" src=\"assets/img/fotoperfil1.png\" (click)=\"captureImage(2)\" *ngIf=\"!imgSelected2\">\n          <div class=\"img-size\" *ngIf=\"imgSelected2\">\n           <img  class=\"fluid-img\" [src]=\"imgSelected2\" (click)=\"captureImage(2)\" >\n          </div>\n          <p style=\"color: red;\">Foto de perfil</p>\n        </ion-col>\n        <ion-col size=\"12\">\n          <img class=\"opacidad\" src=\"assets/img/fotoespalda1.png\" (click)=\"captureImage(3)\" *ngIf=\"!imgSelected3\">\n          <div class=\"img-size\" *ngIf=\"imgSelected3\">\n            <img  class=\"fluid-img\" [src]=\"imgSelected3\" (click)=\"captureImage(3)\" >\n          </div>\n          <p style=\"color: red;\">Foto de espalda</p>\n        </ion-col>\n\n      </ion-row>\n\n      <div class=\"ion-padding ion-text-center titulo2\">\n        Anímate a subir una foto de frente, perfil y espalda para compararlas cada 8 semanas.\n      </div>\n\n    </ion-grid>\n    <!--  </form> -->\n  </form>\n\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n\n        <ion-card style=\"\n        width: 286px; \n        border-radius: 10px;\n        text-transform: uppercase;\n        font-family: 'Open Sans';\n        --background:#EF4044;\n        color:white;\n        \" (click)=\"measurement_record()\">\n          <h2 style=\"margin: 10px; text-align: center;\">\n            <b> SIGUIENTE</b></h2>\n        </ion-card>\n\n\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/medidas/medidas-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/medidas/medidas-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MedidasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasPageRoutingModule", function() { return MedidasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _medidas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medidas.page */ "./src/app/medidas/medidas.page.ts");




const routes = [
    {
        path: '',
        component: _medidas_page__WEBPACK_IMPORTED_MODULE_3__["MedidasPage"]
    }
];
let MedidasPageRoutingModule = class MedidasPageRoutingModule {
};
MedidasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedidasPageRoutingModule);



/***/ }),

/***/ "./src/app/medidas/medidas.module.ts":
/*!*******************************************!*\
  !*** ./src/app/medidas/medidas.module.ts ***!
  \*******************************************/
/*! exports provided: MedidasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasPageModule", function() { return MedidasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _medidas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medidas-routing.module */ "./src/app/medidas/medidas-routing.module.ts");
/* harmony import */ var _medidas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medidas.page */ "./src/app/medidas/medidas.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _modal_medidas_modal_medidas_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-medidas/modal-medidas.page */ "./src/app/modal-medidas/modal-medidas.page.ts");
/* harmony import */ var _modal_medidas_modal_medidas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-medidas/modal-medidas.module */ "./src/app/modal-medidas/modal-medidas.module.ts");










let MedidasPageModule = class MedidasPageModule {
};
MedidasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_medidas_modal_medidas_page__WEBPACK_IMPORTED_MODULE_8__["ModalMedidasPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medidas_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedidasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _modal_medidas_modal_medidas_module__WEBPACK_IMPORTED_MODULE_9__["ModalMedidasPageModule"]
        ],
        declarations: [_medidas_page__WEBPACK_IMPORTED_MODULE_6__["MedidasPage"]]
    })
], MedidasPageModule);



/***/ }),

/***/ "./src/app/medidas/medidas.page.scss":
/*!*******************************************!*\
  !*** ./src/app/medidas/medidas.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\nion-loading {\n  --spinner-color:red;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  opacity: 1;\n  color: red;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 1.1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: black;\n}\nion-item {\n  --background: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n.opacidad {\n  opacity: 0.5;\n  max-width: 170px;\n  height: 150px;\n}\n.img-size {\n  max-width: 65%;\n  margin: 0 auto;\n}\n.fluid-img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWRhcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXG1lZGlkYXNcXG1lZGlkYXMucGFnZS5zY3NzIiwic3JjL2FwcC9tZWRpZGFzL21lZGlkYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBQ0MsMEJBQUE7RUFDQSxZQUFBO0FDQ0w7QURJRztFQUNDLG1CQUFBO0FDREo7QURJQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0REO0FER0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7QUNBSjtBREVBO0VBQ0ksaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUNDSjtBRENFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRENBOztHQUFBO0FBSUE7RUFDSSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNDSjtBRENBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQkFBQTtVQUFBLHFCQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0FDR0o7QURBQTtFQUNJLGNBQUE7QUNHSjtBRERBO0VBQ0ksbUJBQUE7QUNJSjtBREFBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dEO0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNGLG9CQUFBO0VBQ0UsbUJBQUE7QUNHSjtBREFFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0dKO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbWVkaWRhcy9tZWRpZGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4OCU7XG4gICAgbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiBcbiAgICBoMntcbiAgICAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbiAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgXG4gICB9XG5cbiAgIGlvbi1sb2FkaW5ne1xuICAgIC0tc3Bpbm5lci1jb2xvclx0OnJlZDtcbiAgIH1cblxuLmF1bWVudGFydGl0dWxve1xuIGZvbnQtc2l6ZTogMThweDtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG5cbi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgLnRpdHVsbzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vKiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59ICovXG5cbi5yaWdodGJvcmRlcntcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG5pb24taW5wdXQge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvcGVxdWUge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0gIFxuLnRpdHVsb3BlcXVlMiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn0gICBcbmlvbi1jb2x7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5cbmlvbi1zZWxlY3R7XG4gd2lkdGg6IDEwMCU7XG4gZm9udC1zaXplOiAyM3B4O1xuIGZvbnQtd2VpZ2h0OjIwMDtcbn1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLm9wYWNpZGFke1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuXG4gIC5pbWctc2l6ZXtcbiAgICBtYXgtd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46ICAwIGF1dG87XG4gIH1cblxuICAuZmx1aWQtaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5pb24tbG9hZGluZyB7XG4gIC0tc3Bpbm5lci1jb2xvcjpyZWQ7XG59XG5cbi5hdW1lbnRhcnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnRpdHVsbzIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cbi5yaWdodGJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnRpdHVsb3BlcXVlMiB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG5pb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogICBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5vcGFjaWRhZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWF4LXdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmltZy1zaXplIHtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmx1aWQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/medidas/medidas.page.ts":
/*!*****************************************!*\
  !*** ./src/app/medidas/medidas.page.ts ***!
  \*****************************************/
/*! exports provided: MedidasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasPage", function() { return MedidasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _modal_medidas_modal_medidas_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-medidas/modal-medidas.page */ "./src/app/modal-medidas/modal-medidas.page.ts");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");










let MedidasPage = class MedidasPage {
    constructor(ruta, fb, service, utilities, apiservice, loadingController, camera, modalController, webView, alertCtrl) {
        this.ruta = ruta;
        this.fb = fb;
        this.service = service;
        this.utilities = utilities;
        this.apiservice = apiservice;
        this.loadingController = loadingController;
        this.camera = camera;
        this.modalController = modalController;
        this.webView = webView;
        this.alertCtrl = alertCtrl;
        this.form = this.fb.group({
            min_waist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            max_waist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hip: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            neck: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_thigh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_thigh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_arm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_arm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_arm_flexed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_arm_flexed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_calf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_calf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            torax: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            waist_hip: [null],
            profile_photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            front_photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            back_photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            min_waist_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            max_waist_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hip_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            neck_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_thigh_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_thigh_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_arm_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_arm_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_arm_flexed_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_arm_flexed_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            right_calf_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            left_calf_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            torax_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            waist_hip_: ['Cm', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // profile_photo_:[null],
            // back_photo_:[null],
            weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            const valor = yield this.apiservice.obtenerUsuario();
            console.log(valor);
            this.loadingController.dismiss();
            if (valor == false) {
                this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
            }
            else {
                console.log(valor['user']);
                this.form.controls.stature.setValue(valor['user'].stature);
                this.form.controls.weight.setValue(valor['user'].weight);
            }
        });
    }
    goTo(url) {
        this.ruta.navigateForward(url);
    }
    atras() {
        this.ruta.pop();
    }
    change(controller) {
        console.log(this.form.controls[controller + '_'].value);
        if (this.form.controls[controller + '_'].value === 'Pulgadas') {
            this.form.controls[controller].setValue(Math.round(this.form.controls[controller].value / 2.54));
            console.log(this.form.controls[controller + '_'].value);
        }
        else {
            this.form.controls[controller].setValue(Math.round(this.form.controls[controller].value * 2.54));
        }
        //this.convertToCm();
    }
    decimalFormat(e, input) {
        let telefono;
        telefono = this.form.controls[input].value;
        console.log(e.key);
        if (e.key == "Backspace" || e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == ",") {
            return;
        }
        if (e.key == "." && telefono.includes('.')) {
            this.phoneFormatView(parseFloat(telefono).toFixed(1), input);
        }
        if (e.key == ".") {
            this.phoneFormatView(parseFloat(telefono).toFixed(1), input);
        }
        if (telefono.includes('.')) {
            this.phoneFormatView(parseFloat(telefono).toFixed(1), input);
        }
    }
    phoneFormatView(num, input) {
        var multiplier = Math.pow(10, 1);
        /*     return ; */
        /*   console.log()
          ; */
        console.log((Math.round(num * multiplier) / multiplier));
        this.form.controls[input].setValue((Math.round(num * multiplier) / multiplier).toFixed(1));
        // this.telefono = format;
    }
    convertToCm() {
        let objects = Object.keys(this.form.value);
        objects.forEach((elemento, indice, array) => {
            if (indice < 14) {
                let element = String(elemento + '_');
                console.log(this.form.controls[elemento + '_'].value);
                if (this.form.controls[element].value == 'Pulgadas') {
                    this.form.controls[elemento].setValue(Math.round(this.form.controls[elemento].value * 2.54));
                }
            }
        });
        console.log(this.form.value);
    }
    measurement_record() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.forms.valid) {
                this.confirmarSalida();
            }
            else {
                // console.log(this.form.value)
                this.presentLoading();
                this.convertToCm();
                const data = yield this.service.measurement_record(this.form.value);
                console.log(data);
                if (data) {
                    this.loadingController.dismiss();
                    // this.form.reset();
                    this.goTo('/lineanutricional');
                }
                else {
                    this.loadingController.dismiss();
                    this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                }
            }
        });
    }
    captureImage(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let st = this.camera.PictureSourceType.CAMERA;
            yield this.seleccionarFuente().then((result) => {
                if (result) {
                    st = this.camera.PictureSourceType.CAMERA;
                }
                else {
                    st = this.camera.PictureSourceType.PHOTOLIBRARY;
                }
            });
            const options = {
                quality: 45,
                destinationType: this.camera.DestinationType.DATA_URL,
                mediaType: this.camera.MediaType.PICTURE,
                encodingType: this.camera.EncodingType.JPEG,
                sourceType: st,
                allowEdit: true,
                targetWidth: 300,
                targetHeight: 300
            };
            this.camera.getPicture(options).then((imageData) => {
                if (index == 1) { //frente
                    this.imgSelected = null;
                    this.imgSelected = 'data:image/jpeg;base64,' + imageData;
                    // 'data:image/jpeg;base64'
                    this.form.controls.front_photo.setValue(imageData);
                    this.imgUri = imageData;
                    console.log("imagen", imageData);
                    console.log("image frente", this.form.controls.front_photo.value);
                }
                if (index == 2) { //perfil
                    this.imgSelected2 = null;
                    this.imgSelected2 = 'data:image/jpeg;base64,' + imageData;
                    this.form.controls.profile_photo.setValue(imageData);
                    this.imgUri = imageData;
                    console.log("imagen", imageData);
                    console.log("image perfil", this.form.controls.profile_photo.value);
                }
                if (index == 3) { //espalda
                    this.imgSelected3 = null;
                    this.imgSelected3 = 'data:image/jpeg;base64,' + imageData;
                    this.form.controls.back_photo.setValue(imageData);
                    this.imgUri = imageData;
                    console.log("imagen", imageData);
                    console.log("image espalda", this.form.controls.back_photo.value);
                }
                // this.form.controls['fotoPerfil'].setValue(imageData);
            }, (err) => {
                // Handle error
                console.log("cameraE", err);
            });
        });
    }
    alerta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Si no lo haces ahora, puedes hacerlo luego en el apartado de "medidas" dentro de tu perfil.  No pierdas la posibilidad de comparar tus medidas posteriormente, cada 6 a 8 semanas te vamos a recordar para poder comparar tu progreso y cuantificarlo.',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Saltar',
                        cssClass: 'confirmButton',
                        handler: () => {
                            // mensaje confirmacion
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    seleccionarFuente() {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Seleccionar Imágen',
                cssClass: 'uploadmessage',
                message: '¿Qué desea hacer?',
                buttons: [
                    {
                        text: "Tomar Foto",
                        cssClass: 'btn_alert',
                        handler: () => {
                            resolve(true);
                        }
                    },
                    {
                        text: "Buscar en Galería",
                        cssClass: 'btn_alert',
                        handler: () => {
                            resolve(false);
                        }
                    }
                ]
            });
            yield alert.present();
        }));
    }
    get forms() {
        return this.form;
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Por favor espere...',
                cssClass: 'my-loading'
            });
            yield loading.present();
        });
    }
    modal(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(event)
            const modal = yield this.modalController.create({
                component: _modal_medidas_modal_medidas_page__WEBPACK_IMPORTED_MODULE_8__["ModalMedidasPage"],
                cssClass: 'medida-modal',
                componentProps: {
                    nombre: event
                }
            });
            yield modal.present();
        });
    }
    confirmarSalida() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Si no lo haces ahora, puedes hacerlo luego en el apartado de "medidas" dentro de tu perfil. No pierdas la posibilidad de comparar tus medidas posteriormente, cada 6 a 8 semanas te vamos a recordar para poder comparar tu progreso y cuantificarlo.',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: (blah) => {
                            console.log(blah);
                        }
                    }, {
                        text: 'Si',
                        cssClass: 'confirmButton',
                        handler: () => {
                            this.goTo('/lineanutricional');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MedidasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_9__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
MedidasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medidas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medidas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/medidas/medidas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medidas.page.scss */ "./src/app/medidas/medidas.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
        _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_9__["ApiFitechService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], MedidasPage);



/***/ })

}]);
//# sourceMappingURL=medidas-medidas-module-es2015.js.map