(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lineanutricional-lineanutricional-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lineanutricional/lineanutricional.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lineanutricional/lineanutricional.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n\n<ion-content>\n\n  <div  class=\"ion-padding ion-text-center titulo\">\n    ¿Con que linea nutricional te identificas?\n  </div> \n\n  <ion-grid class=\"my-grid\">\n    <ion-row class=\"parent-row\">\n      <ion-col size=\"12\">\n        <ion-card  style=\"\n        width: 286px; \n        border-radius: 10px;\n        text-transform: uppercase;\n        font-family: 'Open Sans';\n        \"\n        color=\"dark\"\n        (click)=\"show(1)\">\n        <h2 style=\"margin: 10px;\">\n          <b>Vegetariano</b>\n        </h2> \n        </ion-card> \n      </ion-col>\n\n      <ion-col size=\"12\">\n          <ion-card  style=\"\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          \"\n          color=\"dark\"\n        (click)=\"show(3)\">\n          <h2 style=\"margin: 10px;\">\n            <b>Vegano</b>\n          </h2> \n          </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card  style=\"\n        width: 286px; \n        border-radius: 10px;\n        text-transform: uppercase;\n        font-family: 'Open Sans';\n        \"\n        color=\"dark\"\n      (click)=\"show(2)\">\n        <h2 style=\"margin: 10px;\">\n          <b>Pescetariano  </b>\n        </h2> \n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n          <ion-card  style=\"\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          \"\n          color=\"dark\"\n        (click)=\"show(0)\">\n          <h2 style=\"margin: 10px;\">\n            <b>Como de todo</b>\n          </h2> \n          </ion-card>\n        </ion-col>\n\n    </ion-row>\n  </ion-grid>\n \n\n\n  <!-- <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n\n        <ion-card  style=\"\n        width: 286px; \n        border-radius: 10px;\n        text-transform: uppercase;\n        font-family: 'Open Sans';\n        --background:#EF4044;\n        color:white;\n        \"\n      \n      (click)=\"updateTypeFood()\" [disabled]=\"!formNutrition.valid\">\n      <h2 style=\"margin: 10px; text-align: center;\">\n        <b> SIGUIENTE</b></h2> \n     </ion-card>\n\n\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>    -->\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/lineanutricional/lineanutricional-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/lineanutricional/lineanutricional-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LineanutricionalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineanutricionalPageRoutingModule", function() { return LineanutricionalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lineanutricional_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineanutricional.page */ "./src/app/lineanutricional/lineanutricional.page.ts");




const routes = [
    {
        path: '',
        component: _lineanutricional_page__WEBPACK_IMPORTED_MODULE_3__["LineanutricionalPage"]
    }
];
let LineanutricionalPageRoutingModule = class LineanutricionalPageRoutingModule {
};
LineanutricionalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LineanutricionalPageRoutingModule);



/***/ }),

/***/ "./src/app/lineanutricional/lineanutricional.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/lineanutricional/lineanutricional.module.ts ***!
  \*************************************************************/
/*! exports provided: LineanutricionalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineanutricionalPageModule", function() { return LineanutricionalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lineanutricional_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineanutricional-routing.module */ "./src/app/lineanutricional/lineanutricional-routing.module.ts");
/* harmony import */ var _lineanutricional_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lineanutricional.page */ "./src/app/lineanutricional/lineanutricional.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let LineanutricionalPageModule = class LineanutricionalPageModule {
};
LineanutricionalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lineanutricional_routing_module__WEBPACK_IMPORTED_MODULE_5__["LineanutricionalPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_lineanutricional_page__WEBPACK_IMPORTED_MODULE_6__["LineanutricionalPage"]]
    })
], LineanutricionalPageModule);



/***/ }),

/***/ "./src/app/lineanutricional/lineanutricional.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/lineanutricional/lineanutricional.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  opacity: 1;\n  color: black;\n  text-align: justify;\n  margin: 0 auto;\n  font-size: 1.5rem;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: black;\n}\nion-item {\n  --background: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\nion-list {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZWFudXRyaWNpb25hbC9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGxpbmVhbnV0cmljaW9uYWxcXGxpbmVhbnV0cmljaW9uYWwucGFnZS5zY3NzIiwic3JjL2FwcC9saW5lYW51dHJpY2lvbmFsL2xpbmVhbnV0cmljaW9uYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBQ0MsMEJBQUE7RUFDQSxZQUFBO0FDQ0w7QURJQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0REO0FER0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7QUNBSjtBREVBO0VBQ0ksaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEQUE7O0dBQUE7QUFJQTtFQUNJLDRCQUFBO0FDRUo7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtBQ0VKO0FEQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0o7QUREQTtFQUNJLGtCQUFBO0FDSUo7QUREQTtFQUNJLGNBQUE7QUNJSjtBREZBO0VBQ0ksbUJBQUE7QUNLSjtBRERBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lEO0FEREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNGLG9CQUFBO0VBQ0UsbUJBQUE7QUNJSjtBREZFO0VBQ0kscUJBQUE7QUNLTiIsImZpbGUiOiJzcmMvYXBwL2xpbmVhbnV0cmljaW9uYWwvbGluZWFudXRyaWNpb25hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gXG4gICAgaDJ7XG4gICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIFxuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAudGl0dWxvMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cblxuLnJpZ2h0Ym9yZGVye1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gICAgb3BhY2l0eTogMC40O1xufSAgXG4udGl0dWxvcGVxdWUyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufSAgIFxuaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAtLWNvbG9yOiBibGFjaztcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuaW9uLXNlbGVjdHtcbiB3aWR0aDogMTAwJTtcbiBmb250LXNpemU6IDIzcHg7XG4gZm9udC13ZWlnaHQ6MjAwO1xufVxuXG4udGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgaW9uLWxpc3R7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH0iLCJpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmF1bWVudGFydGl0dWxvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDpibGFjaztcbiAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4udGl0dWxvMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cbi5yaWdodGJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnRpdHVsb3BlcXVlMiB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5pb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogICBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/lineanutricional/lineanutricional.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/lineanutricional/lineanutricional.page.ts ***!
  \***********************************************************/
/*! exports provided: LineanutricionalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineanutricionalPage", function() { return LineanutricionalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nutricion.service */ "./src/app/services/nutricion.service.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");






let LineanutricionalPage = class LineanutricionalPage {
    constructor(fb, ruta, service, utilities) {
        this.fb = fb;
        this.ruta = ruta;
        this.service = service;
        this.utilities = utilities;
        this.option1 = false;
        this.option2 = false;
        this.option3 = false;
        this.option4 = false;
        this.formNutrition = this.fb.group({
            feeding_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    show(id) {
        console.log(id);
        switch (id) {
            case 0:
                {
                    this.formNutrition.controls.feeding_type.setValue(0);
                    this.updateTypeFood();
                    break;
                }
            case 1:
                {
                    this.formNutrition.controls.feeding_type.setValue(1);
                    this.updateTypeFood();
                    break;
                }
            case 2:
                {
                    this.formNutrition.controls.feeding_type.setValue(2);
                    this.updateTypeFood();
                    break;
                }
            case 3:
                {
                    this.formNutrition.controls.feeding_type.setValue(3);
                    this.updateTypeFood();
                    break;
                }
        }
    }
    goTo(url) {
        this.ruta.navigateForward(url);
    }
    updateTypeFood() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.service.updateTypeFood(this.formNutrition.value).then((res) => {
                this.goTo('/alimentos-no-like');
            }, (err) => {
                this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
            });
        });
    }
    atras() {
        this.ruta.pop();
    }
};
LineanutricionalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_4__["NutricionService"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"] }
];
LineanutricionalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lineanutricional',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lineanutricional.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lineanutricional/lineanutricional.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lineanutricional.page.scss */ "./src/app/lineanutricional/lineanutricional.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_nutricion_service__WEBPACK_IMPORTED_MODULE_4__["NutricionService"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]])
], LineanutricionalPage);



/***/ })

}]);
//# sourceMappingURL=lineanutricional-lineanutricional-module-es2015.js.map