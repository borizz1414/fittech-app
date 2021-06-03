(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progreso-progreso-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/progreso/progreso.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/progreso/progreso.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"devolver()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n\n<ion-content>\n<div class=\"contenedor-segment\">\n  <ion-segment (ionChange)=\"segmentChanged($event)\" scrollable color=\"danger\" value=\"perfil\" mode=\"md\">\n    <ion-segment-button value=\"perfil\" [ngClass]=\"{'perfil': clase == 'perfil' ? true : false}\">\n      <ion-label style=\"color: white;\">Medidas</ion-label>\n      <ion-icon name=\"body-outline\" style=\"color: white;\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"indicadores\" [ngClass]=\"{'indicadores': clase == 'indicadores' ? true : false}\">\n      <ion-label style=\"color: white;\">Fotos</ion-label>\n      <ion-icon name=\"image-outline\" style=\"color: white;\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"medidas\" [ngClass]=\"{'medidas': clase == 'medidas' ? true : false}\">\n      <ion-label style=\"color: white;\">Indicadores</ion-label>\n      <ion-icon name=\"heart-outline\" style=\"color: white;\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n\n  <h2 class=\"title\">Escoge el lapso para comparar tu progreso</h2>\n\n  <div *ngIf=\"comparar ==='perfil' \"> \n    <div class=\"contenedor-fecha\">\n      <ion-item lines=\"none\" class=\"fecha-desde\">\n          <!--22-->\n      <ion-label style=\"font-size: 18px;position: absolute;\n      width: 100%;\n      margin: 0 auto;\n      text-align: center;\" *ngIf=\"!valor\">Desde</ion-label>\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\"  interface=\"action-sheet\"\n       cancel-text=\"salir\" (ionChange)=\"desde($event)\">\n      <ion-select-option *ngFor=\"let item of fechas; let i=index\" value=\"{{item.id}}\">\n      {{item.created_at | slice: 0:10 }} </ion-select-option>\n    </ion-select>\n      </ion-item>\n  \n      <ion-item lines=\"none\" class=\"fecha-hasta\">\n        <!--22-->\n    <ion-label style=\"font-size: 18px;position: absolute;\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\" *ngIf=\"!valor2\">Hasta</ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" cancel-text=\"salir\" (ionChange)=\"hasta($event)\">\n      <ion-select-option *ngFor=\"let item of fechas; let i=index\" value=\"{{item.id}}\">\n      {{item.created_at | slice: 0:10 }} </ion-select-option>\n  </ion-select>\n      </ion-item>\n    </div>\n    <ion-grid>\n      <!-- 1 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cintura mínima(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.min_waist}}</p>\n            <p class=\"input-custom\">{{medidas_despues.max_waist}}</p>\n         </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n         <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cintura máxima(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.max_waist}}</p>\n            <p class=\"input-custom\">{{medidas_despues.max_waist}}</p>\n         </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n         <ion-segment-button disabled>\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled>\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- 2 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cadera(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.hip}}</p>\n            <p class=\"input-custom\">{{medidas_despues.hip}}</p>\n         </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n         <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button  disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cuello(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.neck}}</p>\n            <p class=\"input-custom\">{{medidas_despues.neck}}</p>\n         </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n         <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- 3 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Muslo derecho(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.right_thigh}}</p>\n            <p class=\"input-custom\">{{medidas_despues.right_thigh}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Muslo izquierdo(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.left_thigh}}</p>\n            <p class=\"input-custom\">{{medidas_despues.left_thigh}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- 4 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo relajado derecho(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.right_arm}}</p>\n            <p class=\"input-custom\">{{medidas_despues.right_arm}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo relajado izquierdo(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.left_arm}}</p>\n            <p class=\"input-custom\">{{medidas_despues.left_arm}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- 5 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo flexionado derecho(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.right_arm_flexed}}</p>\n            <p class=\"input-custom\">{{medidas_despues.right_arm_flexed}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo flexionado izquierdo(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.left_arm_flexed}}</p>\n            <p class=\"input-custom\">{{medidas_despues.left_arm_flexed}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- 6 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Pantorrilla derecha(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.right_calf}}</p>\n            <p class=\"input-custom\">{{medidas_despues.right_calf}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Pantorrilla izquierda(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.left_calf}}</p>\n            <p class=\"input-custom\">{{medidas_despues.left_calf}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n      <!-- 7 -->\n      <ion-row>\n        <!-- <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">IMC</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.imc}}</p>\n            <p class=\"input-custom\">{{medidas_despues.imc}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col> -->\n        <!-- <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">ICA</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.ica}}</p>\n            <p class=\"input-custom\">{{medidas_despues.ica}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col> -->\n      </ion-row>\n      <!-- 8 -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Tórax(cm)</ion-label>\n          <div class=\"contenedor-input\">\n            <p class=\"input-custom\">{{medidas_ante.torax}}</p>\n            <p class=\"input-custom\">{{medidas_despues.torax}}</p>\n          </div>\n          \n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment  mode=\"ios\">\n          <ion-segment-button disabled value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Antes</ion-label>\n          </ion-segment-button>\n          <ion-segment-button  disabled value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Despues</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n  <div *ngIf=\"comparar ==='indicadores' \"> \n    <div class=\"contenedor-fecha\">\n      <ion-item lines=\"none\" class=\"fecha-desde\">\n          <!--22-->\n      <ion-label style=\"font-size: 18px;position: absolute;\n      width: 100%;\n      margin: 0 auto;\n      text-align: center;\" *ngIf=\"!valor\">Desde</ion-label>\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\"  cancel-text=\"salir\" (ionChange)=\"desde($event)\">\n      <ion-select-option *ngFor=\"let item of fechas; let i=index\" value=\"{{item.id}}\">\n      {{item.created_at | slice: 0:10}} </ion-select-option>\n    </ion-select>\n      </ion-item>\n  \n      <ion-item lines=\"none\" class=\"fecha-hasta\">\n        <!--22-->\n    <ion-label style=\"font-size: 18px;position: absolute;\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\" *ngIf=\"!valor2\">Hasta</ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" cancel-text=\"salir\" (ionChange)=\"hasta($event)\">\n      <ion-select-option *ngFor=\"let item of fechas; let i=index\" value=\"{{item.id}}\">\n      {{item.created_at | slice: 0:10}} </ion-select-option>\n  </ion-select>\n      </ion-item>\n    </div>\n    <ion-grid>\n      <!-- 1 -->\n      <ion-row style=\"margin-bottom: 1.5rem;\">\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">\n            <sup>\n              <ion-icon (click)=\"modal(medidas_ante.front_photo)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: tomato;\">\n              </ion-icon>\n            </sup>\n            Foto de frente\n          </ion-label>\n          <img  class=\"img-size\" [src]=\"medidas_ante.front_photo\" alt=\"\"\n          onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n        </ion-col>\n\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">\n            Foto de frente\n            <sup>\n              <ion-icon (click)=\"modal(medidas_despues.front_photo)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: tomato;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <img class=\"img-size\" [src]=\"medidas_despues.front_photo\" alt=\"\"\n          onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n        </ion-col>\n      </ion-row>\n\n      <!-- 2 -->\n      <ion-row style=\"margin-bottom: 1.5rem;\">\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">\n            <sup>\n              <ion-icon (click)=\"modal(medidas_ante.profile_photo)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: tomato;\">\n              </ion-icon>\n            </sup>\n            Foto de perfil\n          </ion-label>\n          <img class=\"img-size\" [src]=\"medidas_ante.profile_photo\" alt=\"\"\n          onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n        </ion-col>\n\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">\n            Foto de perfil\n            <sup>\n              <ion-icon (click)=\"modal(medidas_despues.profile_photo)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: tomato;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <img class=\"img-size\" [src]=\"medidas_despues.profile_photo\" alt=\"\"\n          onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n        </ion-col>\n      </ion-row>\n\n      <!-- 3 -->\n      <ion-row style=\"margin-bottom: 1.5rem;\">\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">\n            <sup>\n              <ion-icon (click)=\"modal(medidas_ante.back_photo)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: tomato;\">\n              </ion-icon>\n            </sup>\n            Foto de espalda\n          </ion-label>\n          <img class=\"img-size\" [src]=\"medidas_ante.back_photo\" alt=\"\"\n          onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n        </ion-col>\n\n        <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">\n            Foto de espalda\n            <sup>\n              <ion-icon (click)=\"modal(medidas_despues.back_photo)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: tomato;\">\n              </ion-icon>\n            </sup>\n          </ion-label>\n          <img  class=\"img-size\" [src]=\"medidas_despues.back_photo\" alt=\"\"\n          onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n  </div>\n\n\n\n  <div *ngIf=\"comparar ==='medidas' \"> \n    <app-indicadorescomparacion></app-indicadorescomparacion>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/progreso/progreso-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/progreso/progreso-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProgresoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresoPageRoutingModule", function() { return ProgresoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _progreso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progreso.page */ "./src/app/progreso/progreso.page.ts");




const routes = [
    {
        path: '',
        component: _progreso_page__WEBPACK_IMPORTED_MODULE_3__["ProgresoPage"]
    }
];
let ProgresoPageRoutingModule = class ProgresoPageRoutingModule {
};
ProgresoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgresoPageRoutingModule);



/***/ }),

/***/ "./src/app/progreso/progreso.module.ts":
/*!*********************************************!*\
  !*** ./src/app/progreso/progreso.module.ts ***!
  \*********************************************/
/*! exports provided: ProgresoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresoPageModule", function() { return ProgresoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _progreso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progreso-routing.module */ "./src/app/progreso/progreso-routing.module.ts");
/* harmony import */ var _progreso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progreso.page */ "./src/app/progreso/progreso.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _modal_comparacion_modal_comparacion_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-comparacion/modal-comparacion.page */ "./src/app/modal-comparacion/modal-comparacion.page.ts");
/* harmony import */ var _modal_comparacion_modal_comparacion_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-comparacion/modal-comparacion.module */ "./src/app/modal-comparacion/modal-comparacion.module.ts");










let ProgresoPageModule = class ProgresoPageModule {
};
ProgresoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_comparacion_modal_comparacion_page__WEBPACK_IMPORTED_MODULE_8__["ModalComparacionPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _progreso_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgresoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _modal_comparacion_modal_comparacion_module__WEBPACK_IMPORTED_MODULE_9__["ModalComparacionPageModule"]
        ],
        declarations: [_progreso_page__WEBPACK_IMPORTED_MODULE_6__["ProgresoPage"]]
    })
], ProgresoPageModule);



/***/ }),

/***/ "./src/app/progreso/progreso.page.scss":
/*!*********************************************!*\
  !*** ./src/app/progreso/progreso.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.perfil {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.indicadores {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.medidas {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.contenedor-segment {\n  background: black;\n}\n\n.title {\n  text-align: center;\n}\n\nion-select {\n  width: 100%;\n  font-size: 17px;\n  font-weight: 800;\n  text-align: center;\n  display: inline-table !important;\n}\n\n.select-icon {\n  position: absolute;\n  right: 1rem;\n}\n\n.contenedor-fecha {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.fecha-desde {\n  width: 40%;\n}\n\n.fecha-hasta {\n  width: 40%;\n  margin-right: 1rem;\n}\n\n.rightborder {\n  border-right: solid 1px grey;\n}\n\n.input-custom {\n  margin: 9px;\n}\n\n.contenedor-input {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.titulopeque2 {\n  opacity: 1;\n  color: red;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 1.1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\nion-segment-button {\n  opacity: 1;\n}\n\n.img-size {\n  width: auto;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc28vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwcm9ncmVzb1xccHJvZ3Jlc28ucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9ncmVzby9wcm9ncmVzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjs7QURHQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0FBOztBRElBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDREE7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGRjs7QURNRztFQUNFLFVBQUE7QUNITDs7QURLRztFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE9BO0VBQ0UsNEJBQUE7QUNKRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURLQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDRkY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7QUNIRjs7QURPQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNDLGNBQUE7QUNOTCIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNvL3Byb2dyZXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYXtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4ucGVyZmlse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4uaW5kaWNhZG9yZXN7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cblxuLm1lZGlkYXN7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5jb250ZW5lZG9yLXNlZ21lbnR7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNlbGVjdHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6ODAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50O1xuIH1cblxuLy8gaWNvbm8gZGVsIHNlbGVjdFxuLnNlbGVjdC1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4uY29udGVuZWRvci1mZWNoYXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mZWNoYXtcbiAgICYtZGVzZGV7XG4gICAgIHdpZHRoOiA0MCU7XG4gICB9XG4gICAmLWhhc3Rhe1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5cbi5yaWdodGJvcmRlcntcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cbi5pbnB1dC1jdXN0b217XG4gIG1hcmdpbjogOXB4O1xufVxuLmNvbnRlbmVkb3ItaW5wdXR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5cbi50aXR1bG9wZXF1ZTIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn0gICBcblxuaW9uLXNlZ21lbnQtYnV0dG9ue1xuICBvcGFjaXR5OiAxO1xufVxuXG5cbi5pbWctc2l6ZXtcbiAgLy8gaGVpZ2h0OiAxNjBweDtcbiAgLy8gd2lkdGg6IDIyNXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4iLCIubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBlcmZpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5pbmRpY2Fkb3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5tZWRpZGFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLmNvbnRlbmVkb3Itc2VnbWVudCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4uY29udGVuZWRvci1mZWNoYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmVjaGEtZGVzZGUge1xuICB3aWR0aDogNDAlO1xufVxuLmZlY2hhLWhhc3RhIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ucmlnaHRib3JkZXIge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4uaW5wdXQtY3VzdG9tIHtcbiAgbWFyZ2luOiA5cHg7XG59XG5cbi5jb250ZW5lZG9yLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50aXR1bG9wZXF1ZTIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmltZy1zaXplIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/progreso/progreso.page.ts":
/*!*******************************************!*\
  !*** ./src/app/progreso/progreso.page.ts ***!
  \*******************************************/
/*! exports provided: ProgresoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresoPage", function() { return ProgresoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modal_comparacion_modal_comparacion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-comparacion/modal-comparacion.page */ "./src/app/modal-comparacion/modal-comparacion.page.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/nutricion.service */ "./src/app/services/nutricion.service.ts");







let ProgresoPage = class ProgresoPage {
    constructor(ruta, service, alertController, loadingController, modalController, utilities) {
        this.ruta = ruta;
        this.service = service;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.utilities = utilities;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.comparar = 'perfil';
        this.clase = 'perfil';
        this.medidas_ante = {
            imc: null,
            ica: null,
            min_waist: null,
            max_waist: null,
            hip: null,
            neck: null,
            right_thigh: null,
            left_thigh: null,
            right_arm: null,
            left_arm: null,
            right_arm_flexed: null,
            left_arm_flexed: null,
            right_calf: null,
            left_calf: null,
            torax: null,
            waist_hip: null,
            profile_photo: null,
            front_photo: null,
            back_photo: null,
        };
        this.medidas_despues = {
            imc: null,
            ica: null,
            min_waist: null,
            max_waist: null,
            hip: null,
            neck: null,
            right_thigh: null,
            left_thigh: null,
            right_arm: null,
            left_arm: null,
            right_arm_flexed: null,
            left_arm_flexed: null,
            right_calf: null,
            left_calf: null,
            torax: null,
            waist_hip: null,
            profile_photo: null,
            front_photo: null,
            back_photo: null,
        };
        this.customActionSheetOptions = {
            cssClass: 'progress-class',
        };
    }
    ngOnInit() {
        this.getResume();
    }
    devolver() {
        this.ruta.navigateForward([`/tabs/dashboard`]);
    }
    getResume() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            const valor = yield this.service.historyMeasures();
            if (valor == false) {
                this.loadingController.dismiss();
                this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
            }
            else {
                this.loadingController.dismiss();
                if (valor === "vacio") {
                    this.presentAlert2();
                }
                else {
                    this.presentAlert();
                    this.fechas = valor;
                }
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Por favor espere...',
                cssClass: 'my-loading',
            });
            yield loading.present();
        });
    }
    segmentChanged(valor) {
        this.clase = valor.target.value;
        this.comparar = valor.target.value;
        this.valor = null;
        this.valor2 = null;
        for (var key in this.medidas_ante) {
            this.medidas_ante[key] = null;
        }
        for (var key in this.medidas_despues) {
            this.medidas_despues[key] = null;
        }
    }
    desde(valor) {
        console.log(valor.target.value);
        this.valor = valor.target.value;
        this.buscador(this.valor, "ante");
    }
    hasta(valor) {
        console.log(valor.target.value);
        this.valor2 = valor.target.value;
        this.buscador(this.valor2, "despues");
    }
    buscador(valor, filtrar) {
        const resultado = this.fechas.find(elemento => elemento.id === parseInt(valor));
        console.log(resultado);
        if (filtrar === "ante") {
            this.medidas_ante.imc = resultado.imc.toFixed(2),
                this.medidas_ante.ica = resultado.ica.toFixed(2),
                this.medidas_ante.min_waist = resultado.min_waist,
                this.medidas_ante.max_waist = resultado.max_waist,
                this.medidas_ante.hip = resultado.hip,
                this.medidas_ante.neck = resultado.neck,
                this.medidas_ante.right_thigh = resultado.right_thigh,
                this.medidas_ante.left_thigh = resultado.left_thigh,
                this.medidas_ante.right_arm = resultado.right_arm,
                this.medidas_ante.left_arm = resultado.left_arm,
                this.medidas_ante.right_arm_flexed = resultado.right_arm_flexed,
                this.medidas_ante.left_arm_flexed = resultado.left_arm_flexed,
                this.medidas_ante.right_calf = resultado.right_calf,
                this.medidas_ante.left_calf = resultado.left_calf,
                this.medidas_ante.torax = resultado.torax,
                this.medidas_ante.profile_photo = `${this.URL}/fotos/grasa/` + resultado.profile_photo,
                this.medidas_ante.front_photo = `${this.URL}/fotos/grasa/` + resultado.front_photo,
                this.medidas_ante.back_photo = `${this.URL}/fotos/grasa/` + resultado.back_photo;
        }
        else {
            this.medidas_despues.imc = resultado.imc.toFixed(2),
                this.medidas_despues.ica = resultado.ica.toFixed(2),
                this.medidas_despues.min_waist = resultado.min_waist,
                this.medidas_despues.max_waist = resultado.max_waist,
                this.medidas_despues.hip = resultado.hip,
                this.medidas_despues.neck = resultado.neck,
                this.medidas_despues.right_thigh = resultado.right_thigh,
                this.medidas_despues.left_thigh = resultado.left_thigh,
                this.medidas_despues.right_arm_flexed = resultado.right_arm_flexed,
                this.medidas_despues.right_arm = resultado.right_arm,
                this.medidas_despues.left_arm = resultado.left_arm,
                this.medidas_despues.left_arm_flexed = resultado.left_arm_flexed,
                this.medidas_despues.right_calf = resultado.right_calf,
                this.medidas_despues.left_calf = resultado.left_calf,
                this.medidas_despues.torax = resultado.torax,
                this.medidas_despues.profile_photo = `${this.URL}/fotos/grasa/` + resultado.profile_photo,
                this.medidas_despues.front_photo = `${this.URL}/fotos/grasa/` + resultado.front_photo,
                this.medidas_despues.back_photo = `${this.URL}/fotos/grasa/` + resultado.back_photo;
        }
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Fittech',
                cssClass: 'customMensaje',
                message: "Esta sección es para que puedas comparar tus resultados, si no has introducido tus medidas es súper importante que lo hagas. Luego a las 8 semanas, te invitamos a tomarlas de nuevo y poder entrar en cada pestaña de esta sección para comparar tus resultados y medir tu progreso.",
                buttons: [
                    {
                        text: 'Continuar',
                        cssClass: 'confirmButton'
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Fittech',
                cssClass: 'customMensaje',
                message: "Esta sección es para que puedas comparar tus resultados, si no has introducido tus medidas es súper importante que lo hagas para visualizar las comparaciones.",
                buttons: [
                    {
                        text: 'Continuar',
                        cssClass: 'confirmButton'
                    }
                ]
            });
            yield alert.present();
        });
    }
    modal(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(event);
            // if(event.includes("1609976752356.jpg") || null){
            //   return
            // }
            const modal = yield this.modalController.create({
                component: _modal_comparacion_modal_comparacion_page__WEBPACK_IMPORTED_MODULE_4__["ModalComparacionPage"],
                cssClass: 'medida-modal',
                componentProps: {
                    imagen: event
                }
            });
            yield modal.present();
        });
    }
};
ProgresoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_6__["NutricionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"] }
];
ProgresoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progreso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progreso.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/progreso/progreso.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progreso.page.scss */ "./src/app/progreso/progreso.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_nutricion_service__WEBPACK_IMPORTED_MODULE_6__["NutricionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]])
], ProgresoPage);



/***/ })

}]);
//# sourceMappingURL=progreso-progreso-module-es2015.js.map