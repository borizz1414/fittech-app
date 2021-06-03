(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seriedepreguntas-rangodeedad-rangodeedad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border animated fadeIn delay-1s\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Paso 1 de 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides  #slide>\n    <ion-slide>\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row\">\n          <app-edad></app-edad>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/seriedepreguntas/rangodeedad/rangodeedad-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/seriedepreguntas/rangodeedad/rangodeedad-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: RangodeedadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangodeedadPageRoutingModule", function() { return RangodeedadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rangodeedad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rangodeedad.page */ "./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.ts");




const routes = [
    {
        path: '',
        component: _rangodeedad_page__WEBPACK_IMPORTED_MODULE_3__["RangodeedadPage"]
    }
];
let RangodeedadPageRoutingModule = class RangodeedadPageRoutingModule {
};
RangodeedadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RangodeedadPageRoutingModule);



/***/ }),

/***/ "./src/app/seriedepreguntas/rangodeedad/rangodeedad.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/seriedepreguntas/rangodeedad/rangodeedad.module.ts ***!
  \********************************************************************/
/*! exports provided: RangodeedadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangodeedadPageModule", function() { return RangodeedadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rangodeedad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rangodeedad-routing.module */ "./src/app/seriedepreguntas/rangodeedad/rangodeedad-routing.module.ts");
/* harmony import */ var _rangodeedad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rangodeedad.page */ "./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let RangodeedadPageModule = class RangodeedadPageModule {
};
RangodeedadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rangodeedad_routing_module__WEBPACK_IMPORTED_MODULE_5__["RangodeedadPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_rangodeedad_page__WEBPACK_IMPORTED_MODULE_6__["RangodeedadPage"]]
    })
], RangodeedadPageModule);



/***/ }),

/***/ "./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.my-grid h2 {\n  font-size: 30px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VyaWVkZXByZWd1bnRhcy9yYW5nb2RlZWRhZC9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHNlcmllZGVwcmVndW50YXNcXHJhbmdvZGVlZGFkXFxyYW5nb2RlZWRhZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlcmllZGVwcmVndW50YXMvcmFuZ29kZWVkYWQvcmFuZ29kZWVkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREdFO0VBQ0UsdUJBQUE7QUNBSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDUjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUNBLDRCQUFBO0VDQ047RURDRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLHdCQUFBO0VDQ047QUFDRjs7QURDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0lBRUEsNEJBQUE7RUNDTjtFRENFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBRUEsd0JBQUE7RUNDTjtBQUNGOztBRENBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VyaWVkZXByZWd1bnRhcy9yYW5nb2RlZWRhZC9yYW5nb2RlZWRhZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cblxuICAubXktZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gfVxuLnBhcmVudC1yb3cge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuIH1cblxuLmFuaW1hY2lvbntcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodHtcbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApXG4gICAgfVxufVxuLmZhZGVJblJpZ2h0e1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluUmlnaHQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6ZmFkZUluUmlnaHRcbn0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5teS1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubXktZ3JpZCBoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYW5pbWFjaW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuLmZhZGVJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.ts ***!
  \******************************************************************/
/*! exports provided: RangodeedadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangodeedadPage", function() { return RangodeedadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RangodeedadPage = class RangodeedadPage {
    constructor() { }
    ngOnInit() {
    }
};
RangodeedadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rangodeedad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rangodeedad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rangodeedad.page.scss */ "./src/app/seriedepreguntas/rangodeedad/rangodeedad.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RangodeedadPage);



/***/ })

}]);
//# sourceMappingURL=seriedepreguntas-rangodeedad-rangodeedad-module-es2015.js.map