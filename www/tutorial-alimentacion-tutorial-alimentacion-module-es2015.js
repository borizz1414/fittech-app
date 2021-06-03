(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-alimentacion-tutorial-alimentacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial-alimentacion/tutorial-alimentacion.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial-alimentacion/tutorial-alimentacion.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n  <ion-slides pager=\"true\"   #slide [options]=\"slideOpts\">\n\n    <ion-slide>\n      <div style='height: 100vh; width: 100%;' > \n        <app-tutorial-alimento-paso1></app-tutorial-alimento-paso1>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div  style='height: 100vh; width: 100%;'> \n        <app-tutorial-alimento-paso2></app-tutorial-alimento-paso2>\n      </div>\n   </ion-slide>\n<!-- \n    <ion-slide>\n      <div  style='height: 100vh; width: 100%;'> \n        <app-tutorial-alimento-paso3></app-tutorial-alimento-paso3>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div  style='height: 100vh; width: 100%;'> \n        <app-tutorial-alimento-paso4></app-tutorial-alimento-paso4>\n      </div>\n    </ion-slide> -->\n\n\n  </ion-slides>\n \n</ion-content>\n\n<!-- omitir -->\n\n\n<!-- <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n  <ion-slide>\n   <app-tutorial-alimento-paso1></app-tutorial-alimento-paso1>\n  </ion-slide>\n\n    <ion-slide>\n      <app-tutorial-alimento-paso2></app-tutorial-alimento-paso2>\n   </ion-slide>\n\n   <ion-slide>\n    <app-tutorial-alimento-paso3></app-tutorial-alimento-paso3>\n   </ion-slide>\n\n   <ion-slide>\n    <app-tutorial-alimento-paso4></app-tutorial-alimento-paso4>\n   </ion-slide>\n\n</ion-slides> -->");

/***/ }),

/***/ "./src/app/tutorial-alimentacion/tutorial-alimentacion-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tutorial-alimentacion/tutorial-alimentacion-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TutorialAlimentacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialAlimentacionPageRoutingModule", function() { return TutorialAlimentacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tutorial_alimentacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial-alimentacion.page */ "./src/app/tutorial-alimentacion/tutorial-alimentacion.page.ts");




const routes = [
    {
        path: '',
        component: _tutorial_alimentacion_page__WEBPACK_IMPORTED_MODULE_3__["TutorialAlimentacionPage"]
    }
];
let TutorialAlimentacionPageRoutingModule = class TutorialAlimentacionPageRoutingModule {
};
TutorialAlimentacionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TutorialAlimentacionPageRoutingModule);



/***/ }),

/***/ "./src/app/tutorial-alimentacion/tutorial-alimentacion.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tutorial-alimentacion/tutorial-alimentacion.module.ts ***!
  \***********************************************************************/
/*! exports provided: TutorialAlimentacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialAlimentacionPageModule", function() { return TutorialAlimentacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tutorial_alimentacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-alimentacion-routing.module */ "./src/app/tutorial-alimentacion/tutorial-alimentacion-routing.module.ts");
/* harmony import */ var _tutorial_alimentacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial-alimentacion.page */ "./src/app/tutorial-alimentacion/tutorial-alimentacion.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let TutorialAlimentacionPageModule = class TutorialAlimentacionPageModule {
};
TutorialAlimentacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tutorial_alimentacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialAlimentacionPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_tutorial_alimentacion_page__WEBPACK_IMPORTED_MODULE_6__["TutorialAlimentacionPage"]]
    })
], TutorialAlimentacionPageModule);



/***/ }),

/***/ "./src/app/tutorial-alimentacion/tutorial-alimentacion.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/tutorial-alimentacion/tutorial-alimentacion.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background: red;\n  --bullet-background-active: red;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwtYWxpbWVudGFjaW9uL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcdHV0b3JpYWwtYWxpbWVudGFjaW9uXFx0dXRvcmlhbC1hbGltZW50YWNpb24ucGFnZS5zY3NzIiwic3JjL2FwcC90dXRvcmlhbC1hbGltZW50YWNpb24vdHV0b3JpYWwtYWxpbWVudGFjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FDQ0wiLCJmaWxlIjoic3JjL2FwcC90dXRvcmlhbC1hbGltZW50YWNpb24vdHV0b3JpYWwtYWxpbWVudGFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXN7XG4gICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJlZDsgXG4gICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZWQ7XG4gICAgIGhlaWdodDogYXV0bztcbn1cblxuIiwiaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJlZDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHJlZDtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tutorial-alimentacion/tutorial-alimentacion.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tutorial-alimentacion/tutorial-alimentacion.page.ts ***!
  \*********************************************************************/
/*! exports provided: TutorialAlimentacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialAlimentacionPage", function() { return TutorialAlimentacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let TutorialAlimentacionPage = class TutorialAlimentacionPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.slides.slideTo(0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slide', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], TutorialAlimentacionPage.prototype, "slides", void 0);
TutorialAlimentacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutorial-alimentacion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutorial-alimentacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial-alimentacion/tutorial-alimentacion.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tutorial-alimentacion.page.scss */ "./src/app/tutorial-alimentacion/tutorial-alimentacion.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TutorialAlimentacionPage);



/***/ })

}]);
//# sourceMappingURL=tutorial-alimentacion-tutorial-alimentacion-module-es2015.js.map