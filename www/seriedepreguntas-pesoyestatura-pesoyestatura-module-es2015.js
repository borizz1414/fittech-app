(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seriedepreguntas-pesoyestatura-pesoyestatura-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border animated fadeIn delay-1s\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Paso 2 de 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeInRight delay-1s\">\n\n  <ion-slides  #slide>\n    <ion-slide>\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row\">\n          <app-estatura></app-estatura>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/seriedepreguntas/pesoyestatura/pesoyestatura-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PesoyestaturaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoyestaturaPageRoutingModule", function() { return PesoyestaturaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pesoyestatura_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pesoyestatura.page */ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.ts");




const routes = [
    {
        path: '',
        component: _pesoyestatura_page__WEBPACK_IMPORTED_MODULE_3__["PesoyestaturaPage"]
    }
];
let PesoyestaturaPageRoutingModule = class PesoyestaturaPageRoutingModule {
};
PesoyestaturaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PesoyestaturaPageRoutingModule);



/***/ }),

/***/ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.module.ts ***!
  \************************************************************************/
/*! exports provided: PesoyestaturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoyestaturaPageModule", function() { return PesoyestaturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _pesoyestatura_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pesoyestatura-routing.module */ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura-routing.module.ts");
/* harmony import */ var _pesoyestatura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pesoyestatura.page */ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let PesoyestaturaPageModule = class PesoyestaturaPageModule {
};
PesoyestaturaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pesoyestatura_routing_module__WEBPACK_IMPORTED_MODULE_5__["PesoyestaturaPageRoutingModule"]
        ],
        declarations: [_pesoyestatura_page__WEBPACK_IMPORTED_MODULE_6__["PesoyestaturaPage"]]
    })
], PesoyestaturaPageModule);



/***/ }),

/***/ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.my-grid h2 {\n  font-size: 30px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VyaWVkZXByZWd1bnRhcy9wZXNveWVzdGF0dXJhL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcc2VyaWVkZXByZWd1bnRhc1xccGVzb3llc3RhdHVyYVxccGVzb3llc3RhdHVyYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlcmllZGVwcmVndW50YXMvcGVzb3llc3RhdHVyYS9wZXNveWVzdGF0dXJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURHRTtFQUNFLHVCQUFBO0FDQUo7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7SUFDQSw0QkFBQTtFQ0NOO0VEQ0U7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSx3QkFBQTtFQ0NOO0FBQ0Y7O0FEQ0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUVBLDRCQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUVBLHdCQUFBO0VDQ047QUFDRjs7QURDQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlcmllZGVwcmVndW50YXMvcGVzb3llc3RhdHVyYS9wZXNveWVzdGF0dXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuXG4gIC5teS1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiB9XG4ucGFyZW50LXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gfVxuXG4uYW5pbWFjaW9ue1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGhcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKVxuICAgIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KVxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgICB9XG59XG4uZmFkZUluUmlnaHR7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDtcbiAgICBhbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodFxufSIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5teS1ncmlkIGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hbmltYWNpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4uZmFkZUluUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.ts ***!
  \**********************************************************************/
/*! exports provided: PesoyestaturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoyestaturaPage", function() { return PesoyestaturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PesoyestaturaPage = class PesoyestaturaPage {
    constructor() { }
    ngOnInit() {
    }
};
PesoyestaturaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pesoyestatura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pesoyestatura.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pesoyestatura.page.scss */ "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PesoyestaturaPage);



/***/ })

}]);
//# sourceMappingURL=seriedepreguntas-pesoyestatura-pesoyestatura-module-es2015.js.map