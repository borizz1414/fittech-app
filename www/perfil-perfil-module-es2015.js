(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"dark\">\n\n  <ion-buttons slot=\"primary\">\n    <ion-button>\n      <div class=\"cabezera\">\n        <img src=\"assets/img/logo-app.png\" class=\"logo\">\n      </div>\n    </ion-button>\n  </ion-buttons>\n\n  <ion-title>Perfil</ion-title>\n</ion-toolbar>\n\n<ion-content>\n\n    <ion-segment (ionChange)=\"segmentChanged($event)\" scrollable color=\"danger\" value=\"perfil\" mode=\"md\">\n      <ion-segment-button value=\"perfil\" [ngClass]=\"{'perfil': clase == 'perfil' ? true : false}\">\n        <ion-label style=\"color: white;\">Mi perfil</ion-label>\n        <ion-icon name=\"person-outline\" style=\"color: white;\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"indicadores\" [ngClass]=\"{'indicadores': clase == 'indicadores' ? true : false}\">\n        <ion-label style=\"color: white;\">Indicadores</ion-label>\n        <ion-icon name=\"heart-outline\" style=\"color: white;\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"medidas\" [ngClass]=\"{'medidas': clase == 'medidas' ? true : false}\">\n        <ion-label style=\"color: white;\">Medidas</ion-label>\n        <ion-icon name=\"body-outline\" style=\"color: white;\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"imagen\" [ngClass]=\"{'imagen': clase == 'imagen' ? true : false}\">\n        <ion-label style=\"color: white;\">Fotos</ion-label>\n        <ion-icon name=\"image-outline\" style=\"color: white;\"></ion-icon>\n      </ion-segment-button>\n      <!-- <ion-segment-button value=\"pago\" [ngClass]=\"{'pago': clase == 'pago' ? true : false}\">\n        <ion-label style=\"color: white;\">Premium</ion-label>\n        <ion-icon name=\"card-outline\" style=\"color: white;\"></ion-icon>\n      </ion-segment-button> -->\n    </ion-segment>\n\n\n   \n  <div *ngIf=\"comparar ==='perfil' \"> \n    <ion-grid>\n    <form [formGroup]=\"form\">\n      <ion-row>\n        <ion-col size=\"5\" offset=\"4\">\n          <ion-avatar>\n            <img [src]=\"imgSelected\" (click)=\"captureImage(1)\" onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n            <ion-fab-button size=\"small\" (click)=\"captureImage(1)\" >\n              <ion-icon name=\"camera\"></ion-icon>\n            </ion-fab-button>\n            <h1 style=\"margin: 0; text-align: center; color: white;\">{{titulo}}</h1>\n          </ion-avatar>\n          \n        </ion-col>\n      </ion-row>\n      <ion-row>         \n        <ion-col size=\"12\">\n          \n          <ion-label position=\"stacked\" >Nombre y Apellido</ion-label>\n          <ion-input formControlName=\"name\">\n            <ion-icon style=\"position: absolute;right: 1rem;color: red;font-size: 1.2rem;\" name=\"pencil-outline\"></ion-icon>\n          </ion-input>\n          <ion-label position=\"stacked\">Género</ion-label>\n          <ion-input [value]=\"genero\" readonly></ion-input>\n          <ion-label position=\"stacked\">Correo Electrónico</ion-label>\n          <ion-input formControlName=\"email\" readonly></ion-input>\n\n          <ion-label>Objetivo</ion-label>\n          <ion-item>\n            <ion-label style=\"font-size: 1rem; font-weight: 300;\" *ngIf=\"!valor\">{{objetivo}}</ion-label>\n            <ion-select interface=\"action-sheet\" (ionChange)=\"obje($event)\">\n              <ion-select-option value=\"2\" style=\"color: white;\">Adelgazar</ion-select-option>\n              <ion-select-option value=\"0\" style=\"color: white;\">Estar en forma</ion-select-option>\n              <ion-select-option value=\"1\" style=\"color: white;\"> Ganar musculatura</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n    </form>\n\n    <form [formGroup]=\"formpass\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label position=\"stacked\">Nueva Contraseña</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\">\n            <ion-icon [ngClass]=\"getClass()\" name=\"pencil-outline\" (click)=\"changepass()\">\n            </ion-icon>\n          </ion-input>\n          <ion-label position=\"stacked\">Confirmar Contraseña</ion-label>\n          <ion-input formControlName=\"repassword\" type=\"password\">\n          </ion-input>\n            <ion-card  style=\"\n            width: 254px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            --background:#EF4044;\n            color:white;\n            margin: 0 auto;\n            margin-bottom: 5px;\n            \"\n          \n          [disabled]=\"form.status == 'INVALID'\"\n          (click)=\"changeData()\">\n          <h4 style=\"margin: 10px; text-align: center;\"> \n            <b>Actualizar</b>\n          </h4> \n            </ion-card>\n            <!-- [disabled]=\"form.status == 'INVALID'\"\n            (click)=\"changeData()\"> -->\n            <!-- [disabled]=\"formpass.status == 'INVALID'\"\n            (click)=\"changepass() -->\n        </ion-col>\n      </ion-row>\n    </form>\n    </ion-grid>\n\n    <h4 style=\" color:red; text-align: center; margin: 0; text-decoration: underline;\"\n    (click)=\"desconectar()\">CERRAR SESIÓN</h4>\n\n  </div>\n\n  \n\n\n  <div *ngIf=\"comparar ==='indicadores' \">\n    <app-indicadores></app-indicadores>\n  </div>\n\n  <div *ngIf=\"comparar ==='medidas' \">\n    <app-medidas></app-medidas>\n  </div>\n    \n  <div *ngIf=\"comparar ==='pago' \">\n    <app-premium></app-premium>\n  </div>\n\n  <div *ngIf=\"comparar ==='imagen' \">\n    <app-fotos></app-fotos>\n  </div>\n\n\n \n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/pages/perfil/perfil-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/pages/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin: 0 auto;\n  max-height: 4rem;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n\nion-col {\n  display: table;\n  height: 200px;\n}\n\nion-col ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: white;\n}\n\nion-col ion-input {\n  border: 1px solid #dcdcdc;\n  color: white;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\nion-col ion-select {\n  color: white;\n  text-align: left;\n  display: contents;\n  width: 100%;\n  font-size: 17px;\n}\n\nion-col ion-select::part(icon) {\n  color: red !important;\n}\n\nion-col ion-avatar {\n  display: table-cell;\n  top: 1.5rem;\n  position: relative;\n}\n\nion-col ion-avatar ion-fab-button {\n  position: absolute;\n  right: 0;\n  bottom: 30%;\n  --background: #EF4044;\n}\n\nion-col ion-avatar img {\n  width: 120px;\n  height: 120px;\n}\n\nion-buttons {\n  position: absolute;\n  right: 0;\n}\n\n.perfil {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.indicadores {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.medidas {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.pago {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.imagen {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\nion-title {\n  text-align: center;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 23px;\n  font-weight: 800;\n  /*   opacity: 0.7; */\n  margin-bottom: 0;\n}\n\nform {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-content {\n  --ion-background-color:black;\n}\n\nion-item {\n  border: 1px solid white;\n  border-radius: 8px;\n}\n\n.pencil-grey {\n  position: absolute;\n  right: 1rem;\n  color: grey;\n  font-size: 1.2rem;\n}\n\n.pencil-red {\n  position: absolute;\n  right: 1rem;\n  color: red;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNBSjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ1I7O0FEQ0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FERUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQU47O0FESUk7RUFDQSxxQkFBQTtBQ0ZKOztBRE1JO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURLUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0haOztBREtRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNIWjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0xKOztBRFFFO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDTEo7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNMRjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDTkY7O0FEU0E7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNORjs7QURTRTtFQUNJLGtCQUFBO0FDTk47O0FEU0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNGLG9CQUFBO0VBQ0UsZ0JBQUE7QUNOSjs7QURTRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURVRTtFQUNFLDRCQUFBO0FDUEo7O0FEVUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEV0E7RUFDRSxrQkFBQTtFQUFtQixXQUFBO0VBQVksV0FBQTtFQUFZLGlCQUFBO0FDTDdDOztBRE9BO0VBQ0Usa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFVBQUE7RUFBVyxpQkFBQTtBQ0Q1QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA0cmVtO1xuICB9XG5cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG5cbiAgICAvLyByZXRvY2FyIGNvbG9yIGludGVybm8gZGUgaWNvbm9cbiAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcbiAgICB9XG5cblxuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1mYWItYnV0dG9ue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDMwJTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAucGVyZmlse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB9XG5cbi5pbmRpY2Fkb3Jlc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuXG4ubWVkaWRhc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLnBhZ297XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5pbWFnZW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbiAgaW9uLXRpdGxle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgZm9ybXtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cblxuXG4gIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbmlvbi1pdGVte1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5cbi5wZW5jaWwtZ3JleXtcbiAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxcmVtO2NvbG9yOiBncmV5O2ZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLnBlbmNpbC1yZWR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMXJlbTtjb2xvcjogcmVkO2ZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4iLCIubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0cmVtO1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jb2wge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbmlvbi1jb2wgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29sIGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuaW9uLWNvbCBpb24tc2VsZWN0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbmlvbi1jb2wgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbmlvbi1jb2wgaW9uLWF2YXRhciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRvcDogMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29sIGlvbi1hdmF0YXIgaW9uLWZhYi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDMwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjRUY0MDQ0O1xufVxuaW9uLWNvbCBpb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucGVyZmlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLmluZGljYWRvcmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLm1lZGlkYXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4ucGFnbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5pbWFnZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLyogICBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBlbmNpbC1ncmV5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucGVuY2lsLXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");








let PerfilPage = class PerfilPage {
    constructor(fb, apiService, loadingController, ruta, alertController, webView, camera, service, utilities) {
        this.fb = fb;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.ruta = ruta;
        this.alertController = alertController;
        this.webView = webView;
        this.camera = camera;
        this.service = service;
        this.utilities = utilities;
        this.comparar = 'perfil';
        this.clase = 'perfil';
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            objective: [null],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            avatar: [null]
        });
        this.formpass = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])],
            repassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: this.ConfirmedValidator('password', 'repassword')
        });
    }
    ngOnInit() {
        this.getData();
    }
    segmentChanged(valor) {
        this.clase = valor.target.value;
        this.comparar = valor.target.value;
    }
    desconectar() {
        // LLAMO ALA RUTA PARA DESCONECTAR Y LO FUERZO A REDIRECIONAR AL LOGIN
        this.apiService.desconectarUsuario();
        this.ruta.navigateRoot(["/login"]);
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const valor = yield this.service.obtenerUsuario();
            if (valor == false) {
                this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
            }
            else {
                if (valor['user'].gender == '1') {
                    this.genero = "Hombre";
                }
                else {
                    this.genero = "Mujer";
                }
                if (valor['user'].objective == '0') {
                    this.objetivo = "Estar en forma";
                }
                if (valor['user'].objective == '1') {
                    this.objetivo = "Ganar musculatura";
                }
                if (valor['user'].objective == '2') {
                    this.objetivo = "Adelgazar";
                }
                this.imgSelected = valor['user'].avatar;
                this.titulo = valor['user'].name;
                this.form.controls.objective.setValue(valor['user'].objective);
                this.form.controls.avatar.setValue(valor['user'].avatar);
                this.form.controls.name.setValue(valor['user'].name);
                this.form.controls.email.setValue(valor['user'].email);
            }
        });
    }
    changeData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            console.log(this.form.value);
            const data = yield this.apiService.actualizarPerfil(this.form.value);
            if (data) {
                this.loadingController.dismiss();
                // this.changepass()
                this.utilities.notificacionUsuario("Su perfil ha sido actualizado ", "dark");
                this.getData();
            }
            else {
                this.loadingController.dismiss();
                this.utilities.notificacionUsuario("Ocurrio un error, revise su conexión", "danger");
            }
        });
    }
    getClass() {
        return this.formpass.status == 'INVALID' ? 'pencil-grey' : 'pencil-red';
    }
    changepass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.formpass.status == 'INVALID') {
                return;
            }
            const data = yield this.apiService.cambiarPassword(this.formpass.value);
            if (data) {
                this.loadingController.dismiss();
                this.utilities.notificacionUsuario("Su contraseña ha sido actualizada ", "dark");
                this.desconectar();
            }
            else {
                this.loadingController.dismiss();
                this.utilities.notificacionUsuario("Ocurrio un error, revise su conexión", "danger");
            }
        });
    }
    seleccionarFuente() {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Seleccionar Imágen',
                message: '¿Qué desea hacer?',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: "Tomar Foto",
                        cssClass: 'confirmButton',
                        handler: () => {
                            resolve(true);
                        }
                    },
                    {
                        text: "Buscar en Galería",
                        cssClass: 'confirmButton',
                        handler: () => {
                            resolve(false);
                        }
                    }
                ]
            });
            yield alert.present();
        }));
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
                quality: 60,
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
                    this.form.controls.avatar.setValue(this.imgSelected);
                    console.log("imagen", this.imgSelected);
                }
                // this.form.controls['fotoPerfil'].setValue(imageData);
            }, (err) => {
                // Handle error
                console.log("cameraE", err);
            });
        });
    }
    ConfirmedValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    obje(valor) {
        this.valor = valor.target.value;
        this.form.controls.objective.setValue(this.valor);
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
};
PerfilPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"] },
    { type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"] }
];
PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil.page.scss */ "./src/app/pages/perfil/perfil.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]])
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es2015.js.map