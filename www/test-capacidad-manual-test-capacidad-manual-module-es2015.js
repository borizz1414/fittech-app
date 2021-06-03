(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-capacidad-manual-test-capacidad-manual-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-capacidad-manual/test-capacidad-manual.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-capacidad-manual/test-capacidad-manual.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar  >\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n    <ion-buttons slot=\"start\" style=\"position: absolute;\">\n      <ion-back-button defaultHref=\"/test-capacidad-info\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n \n  <div  class=\"ion-padding  ion-text-center aumentartitulo\">\n    Test de Capacidad.\n  </div> \n  <div  class=\"ion-padding ion-text-justify\">\n   <!-- <h1> <b> {{title}}</b> </h1> -->\n    Seleccione el nivel de capacidad en la cual usted se encuentre \n  </div>   \n  <!-- <div class=\"ion-padding ion-text-justify\">\n  {{content}}\n  </div> -->\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card  style=\"background:grey; color: white;\" (click)=\"test(0)\" [disabled]='option == 0'>\n            <h2 class=\"ion-text-center\">\n             <b> BASICO </b> </h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card  style=\"background:grey; color: white;\" (click)=\"test(1)\" [disabled]='option == 1'>\n            <h2 class=\"ion-text-center\">\n             <b> PRINCIPIANTE </b> </h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card  style=\"background:grey; color: white;\" (click)=\"test(2)\" [disabled]='option == 2'>\n            <h2 class=\"ion-text-center\">\n             <b> INTERMEDIO </b></h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card  style=\"background:grey; color: white;\" (click)=\"test(3)\" [disabled]='option == 3'>\n            <h2 class=\"ion-text-center\">\n             <b> AVANZADO </b> </h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card  style=\"background:grey; color: white;\" (click)=\"test(4)\" [disabled]='option == 4'>\n            <h2 class=\"ion-text-center\">\n             <b> PRO </b></h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/test-capacidad-manual/test-capacidad-manual-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/test-capacidad-manual/test-capacidad-manual-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TestCapacidadManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCapacidadManualPageRoutingModule", function() { return TestCapacidadManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_capacidad_manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-capacidad-manual.page */ "./src/app/test-capacidad-manual/test-capacidad-manual.page.ts");




const routes = [
    {
        path: '',
        component: _test_capacidad_manual_page__WEBPACK_IMPORTED_MODULE_3__["TestCapacidadManualPage"]
    }
];
let TestCapacidadManualPageRoutingModule = class TestCapacidadManualPageRoutingModule {
};
TestCapacidadManualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestCapacidadManualPageRoutingModule);



/***/ }),

/***/ "./src/app/test-capacidad-manual/test-capacidad-manual.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/test-capacidad-manual/test-capacidad-manual.module.ts ***!
  \***********************************************************************/
/*! exports provided: TestCapacidadManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCapacidadManualPageModule", function() { return TestCapacidadManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_capacidad_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-capacidad-manual-routing.module */ "./src/app/test-capacidad-manual/test-capacidad-manual-routing.module.ts");
/* harmony import */ var _test_capacidad_manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-capacidad-manual.page */ "./src/app/test-capacidad-manual/test-capacidad-manual.page.ts");







let TestCapacidadManualPageModule = class TestCapacidadManualPageModule {
};
TestCapacidadManualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_capacidad_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestCapacidadManualPageRoutingModule"]
        ],
        declarations: [_test_capacidad_manual_page__WEBPACK_IMPORTED_MODULE_6__["TestCapacidadManualPage"]]
    })
], TestCapacidadManualPageModule);



/***/ }),

/***/ "./src/app/test-capacidad-manual/test-capacidad-manual.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/test-capacidad-manual/test-capacidad-manual.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n* {\n  box-sizing: border-box;\n}\nion-content {\n  --ion-background-color: #fcfcfc;\n}\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  color: black;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.fb-btn button {\n  --border-radius:5px;\n  --ion-color-base: #3b5998 !important;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1jYXBhY2lkYWQtbWFudWFsL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcdGVzdC1jYXBhY2lkYWQtbWFudWFsXFx0ZXN0LWNhcGFjaWRhZC1tYW51YWwucGFnZS5zY3NzIiwic3JjL2FwcC90ZXN0LWNhcGFjaWRhZC1tYW51YWwvdGVzdC1jYXBhY2lkYWQtbWFudWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNDLDBCQUFBO0VBQ0EsWUFBQTtBQ0NMO0FESUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNERDtBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7QURFRTtFQUdHLHNCQUFBO0FDQ0w7QURFRTtFQUNFLCtCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBREdJO0VBQ0UsbUJBQUE7RUFBd0Isb0NBQUE7QUNDOUI7QURJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY2FwYWNpZGFkLW1hbnVhbC90ZXN0LWNhcGFjaWRhZC1tYW51YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICAgIGgye1xuICAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICBcbiAgIH1cblxuLmF1bWVudGFydGl0dWxve1xuIGZvbnQtc2l6ZTogMThweDtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG46cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG4gIFxuICAqe1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICB9XG4gIFxuICBpb24taW5wdXR7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIFxuICAuZmItYnRuICB7XG4gICAgYnV0dG9ue1xuICAgICAgLS1ib3JkZXItcmFkaXVzOjVweDsgICAgLS1pb24tY29sb3ItYmFzZTogIzNiNTk5OCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbnRlbmVkb3J7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYXVtZW50YXJ0aXR1bG8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAtLWNvbG9yOndoaXRlO1xufVxuXG46cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZmItYnRuIGJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czo1cHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMzYjU5OTggIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/test-capacidad-manual/test-capacidad-manual.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/test-capacidad-manual/test-capacidad-manual.page.ts ***!
  \*********************************************************************/
/*! exports provided: TestCapacidadManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCapacidadManualPage", function() { return TestCapacidadManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TestCapacidadManualPage = class TestCapacidadManualPage {
    constructor(ruta) {
        this.ruta = ruta;
    }
    ngOnInit() {
    }
    test(option) {
        this.option = option;
        switch (option) {
            case 0:
                {
                    this.title = 'Tu nivel es BÁSICO';
                    this.content = 'Felicidades por empezar un nuevo estilo de vida con hábitos saludables, mucho esfuerzo para alcanzar el siguiente nivel.';
                    this.ruta.navigateByUrl(`mensajecapacidad/0`);
                }
                break;
            case 1:
                {
                    this.title = 'Tu nivel es PRINCIPIANTE';
                    this.content = 'Sigue esforzándote y continua esta carrera con mucha disciplina en tu plan, estás a un nivel de tener grandes cambios';
                    this.ruta.navigateByUrl(`mensajecapacidad/4`);
                }
                break;
            case 2:
                {
                    this.title = 'Tu nivel es INTERMEDIO';
                    this.content = 'Excelente estás a mitad de la carrera, un poco más de esfuerzo y dedicación para llegar a un nivel envidiable.';
                    this.ruta.navigateByUrl(`mensajecapacidad/1`);
                }
                break;
            case 3:
                {
                    this.title = 'Tu nivel es AVANZADO';
                    this.content = 'No estás aquí por casualidad, muchas sesiones de entreno duro has pasado, ahora enfocate en dar tu máximo, solo así llegarás al siguiente nivel.';
                    this.ruta.navigateByUrl(`mensajecapacidad/2`);
                }
                break;
            case 4:
                {
                    this.title = 'Tu nivel es PRO';
                    this.content = 'Estás en una minoría privilegiada, que llevan el fitness cómo estilo de vida, admiración, aplausos y solo yendo al límite podrás alcanzar un nivel insuperable.';
                    this.ruta.navigateByUrl(`mensajecapacidad/3`);
                }
                break;
            default:
                break;
        }
    }
};
TestCapacidadManualPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TestCapacidadManualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-capacidad-manual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-capacidad-manual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-capacidad-manual/test-capacidad-manual.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-capacidad-manual.page.scss */ "./src/app/test-capacidad-manual/test-capacidad-manual.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TestCapacidadManualPage);

// this.ruta.navigateByUrl(`mensajecapacidad/${this.nivel}`)


/***/ })

}]);
//# sourceMappingURL=test-capacidad-manual-test-capacidad-manual-module-es2015.js.map