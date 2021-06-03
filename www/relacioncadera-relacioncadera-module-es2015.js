(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relacioncadera-relacioncadera-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/relacioncadera/relacioncadera.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relacioncadera/relacioncadera.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border animated fadeIn delay-1s\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\" class=\"animated fadeIn delay-1s\">\n\n  <div class=\"contenedor\">\n\n      <h2 class=\"titulo\">Ingresa Tus Medidas</h2>\n      \n      <div class=\"letra\">\n        (Porfavor, medir con un centimetro)\n      </div>\n\n\n      <ion-grid class=\"my-grid animated fadeIn delay-2s\">\n      <ion-row class=\"parent-row\">\n        <p class=\"mensaje\"></p>\n        <ion-col  size=\"12\">   \n          <div class=\"tarjeta\">\n            <p class=\"mensaje\">¿Cual es su medida maxima de cintura?</p>\n              \n            <img src=\"./assets/img/cintura.jpg\" class=\"imagen\"/>\n            <ion-input type=\"number\" class=\"sa\" name=\"max_cintura\" placeholder=\"cm\"\n              (ionChange)=\"validar($event,1)\"  [(ngModel)]=\"medidasCorporales.max_cintura\"></ion-input>  \n\n          </div> \n         \n        </ion-col>\n        <ion-col  size=\"12\"> \n              <p class=\"mensaje\">¿Cual es su medida de cadera?</p>\n              \n          <div class=\"tarjeta\" >\n            <img src=\"./assets/img/cadera.png\" class=\"imagen\"/>\n             <ion-input  size=\"8\" type=\"number\" class=\"sa\" name=\"cadera\" placeholder=\"cm\"\n              (ionChange)=\"validar($event,2)\"   [(ngModel)]=\"medidasCorporales.cadera\"></ion-input> \n\n          </div>   \n           \n        </ion-col>\n                <ion-col size=\"12\">      \n          <ion-card class=\"color-tarjeta\" (click)=\"finalizar()\" [disabled]=\"habilitar\">\n            <h2>Finalizar</h2>\n          </ion-card>\n        </ion-col>\n\n      \n      </ion-row>\n      </ion-grid>      \n  </div>\n\n\n");

/***/ }),

/***/ "./src/app/relacioncadera/relacioncadera-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/relacioncadera/relacioncadera-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RelacioncaderaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelacioncaderaPageRoutingModule", function() { return RelacioncaderaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _relacioncadera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relacioncadera.page */ "./src/app/relacioncadera/relacioncadera.page.ts");




const routes = [
    {
        path: '',
        component: _relacioncadera_page__WEBPACK_IMPORTED_MODULE_3__["RelacioncaderaPage"]
    }
];
let RelacioncaderaPageRoutingModule = class RelacioncaderaPageRoutingModule {
};
RelacioncaderaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RelacioncaderaPageRoutingModule);



/***/ }),

/***/ "./src/app/relacioncadera/relacioncadera.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/relacioncadera/relacioncadera.module.ts ***!
  \*********************************************************/
/*! exports provided: RelacioncaderaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelacioncaderaPageModule", function() { return RelacioncaderaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _relacioncadera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relacioncadera-routing.module */ "./src/app/relacioncadera/relacioncadera-routing.module.ts");
/* harmony import */ var _relacioncadera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relacioncadera.page */ "./src/app/relacioncadera/relacioncadera.page.ts");







let RelacioncaderaPageModule = class RelacioncaderaPageModule {
};
RelacioncaderaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _relacioncadera_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelacioncaderaPageRoutingModule"]
        ],
        declarations: [_relacioncadera_page__WEBPACK_IMPORTED_MODULE_6__["RelacioncaderaPage"]]
    })
], RelacioncaderaPageModule);



/***/ }),

/***/ "./src/app/relacioncadera/relacioncadera.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/relacioncadera/relacioncadera.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-datos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 80%;*/\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 25px;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.imagen {\n  width: 130px;\n  height: 130px;\n  border-radius: 5px;\n}\n\n.tarjeta {\n  padding-left: 0%;\n  padding-right: 0%;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.letra {\n  padding-left: 35px;\n  padding-right: 35px;\n  font-size: 18px;\n  text-align: justify;\n  opacity: 0.7;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.mensaje {\n  font-size: 14px;\n  opacity: 0.5;\n  text-align: center;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n\nion-input {\n  opacity: 0.7;\n  text-align: center;\n}\n\n.sa {\n  border-bottom: 1px solid red;\n  max-width: 50%;\n  margin: 0 auto;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVsYWNpb25jYWRlcmEvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxyZWxhY2lvbmNhZGVyYVxccmVsYWNpb25jYWRlcmEucGFnZS5zY3NzIiwic3JjL2FwcC9yZWxhY2lvbmNhZGVyYS9yZWxhY2lvbmNhZGVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFHRyxzQkFBQTtBQ0NIOztBREVBO0VBQ0UscUJBQUE7RUFDQTs7Ozt3QkFBQTtBQ0tGOztBREtBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURTQTtFQUNJLDZCQUFBO0FDTko7O0FEU0E7RUFDRSx1QkFBQTtBQ05GOztBRFFBO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNDLGNBQUE7RUFDQyxVQUFBO0FDTEY7O0FEUUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRFFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xBOztBRFFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDTEE7O0FET0E7RUFDRSxZQUFBO0VBRUEsa0JBQUE7QUNMRjs7QURRQTtFQUVFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNORjs7QURXQTs7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDUkEiLCJmaWxlIjoic3JjL2FwcC9yZWxhY2lvbmNhZGVyYS9yZWxhY2lvbmNhZGVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbip7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAlOyovXG59XG5cblxuXG5cbi5sb2dve1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYXtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3J7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4udGl0dWxve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5cblxuLmltYWdlbntcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXJqZXRhe1xuICBwYWRkaW5nLWxlZnQ6IDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAwJTtcbn1cblxuXG5pb24tY29se1xuICAgIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XG59XG5cbi5teS1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5sZXRyYXtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuaW9uLWNhcmR7XG4gbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG59XG5cbmlvbi1jYXJkOmhvdmVye1xudHJhbnNpdGlvbjogMC4xcztcbm9wYWNpdHk6IDAuNTtcbn1cblxuLm1lbnNhamV7XG5mb250LXNpemU6IDE0cHg7XG5vcGFjaXR5OiAwLjU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2xvci10YXJqZXRhe1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbmlvbi1pbnB1dHtcbiAgb3BhY2l0eTogMC43O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNhIHtcblxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbn1cblxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLW1vei1hcHBlYXJhbmNlOiBub25lO1xuYXBwZWFyYW5jZTogbm9uZTtcbm1hcmdpbjogMDtcbn0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAlOyovXG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhcmpldGEge1xuICBwYWRkaW5nLWxlZnQ6IDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5sZXRyYSB7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVuc2FqZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3BhY2l0eTogMC41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2xvci10YXJqZXRhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24taW5wdXQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/relacioncadera/relacioncadera.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/relacioncadera/relacioncadera.page.ts ***!
  \*******************************************************/
/*! exports provided: RelacioncaderaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelacioncaderaPage", function() { return RelacioncaderaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let RelacioncaderaPage = class RelacioncaderaPage {
    constructor(mensajeservice, ApiService, ruta) {
        this.mensajeservice = mensajeservice;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.medidasCorporales = {
            min_cintura: null,
            max_cintura: null,
            cadera: null,
            cuello: null,
            muslo_derecho: null,
            muslo_izquierdo: null,
            brazo_derecho: null,
            brazo_izquierdo: null,
            pantorrilla_derecho: null,
            pantorrilla_izquierda: null,
            pecho: null
        };
        this.habilitar = false;
        this.elementoValidar = {
            elemenUno: false,
            elemenDos: false,
            elemenTre: false,
            elemenCua: false,
            elemenCin: false,
            elemenSei: false,
            elemenSie: false,
            elemenOch: false,
            elemenNue: false,
            elemenDie: false,
            elemenOnc: false,
        };
    }
    ngOnInit() {
    }
    finalizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.elementoValidar.elemenUno && this.elementoValidar.elemenDos && this.elementoValidar.elemenTre
                && this.elementoValidar.elemenCua && this.elementoValidar.elemenCin && this.elementoValidar.elemenSei
                && this.elementoValidar.elemenSie && this.elementoValidar.elemenOch && this.elementoValidar.elemenNue
                && this.elementoValidar.elemenDie && this.elementoValidar.elemenOnc) {
                const valido = yield this.ApiService.cinturacadera(this.medidasCorporales);
                if (valido) {
                    this.ruta.navigateRoot(['/tabs']);
                }
                else {
                    return;
                }
            }
            else {
                this.mensajeservice.alertaInformatica('Todo los campos deben ser obligatorio, y su valor mayor a 0 y menor a 4 digitos');
            }
        });
    }
    validar(valor, asignacion) {
        if (valor.target.value <= 0 || valor.target.value.length <= 1 || valor.target.value.length > 4) {
            console.log("error ");
            this.asignarValidacionErronea(asignacion);
            console.log(this.elementoValidar);
        }
        else {
            this.asignarValidacion(asignacion);
        }
    }
    asignarValidacion(asignacion) {
        if (asignacion == 1) {
            this.elementoValidar.elemenUno = true;
        }
        if (asignacion == 2) {
            this.elementoValidar.elemenDos = true;
        }
        if (asignacion == 3) {
            this.elementoValidar.elemenTre = true;
        }
        if (asignacion == 4) {
            this.elementoValidar.elemenCua = true;
        }
        if (asignacion == 5) {
            this.elementoValidar.elemenCin = true;
        }
        if (asignacion == 6) {
            this.elementoValidar.elemenSei = true;
        }
        if (asignacion == 7) {
            this.elementoValidar.elemenSie = true;
        }
        if (asignacion == 8) {
            this.elementoValidar.elemenOch = true;
        }
        if (asignacion == 9) {
            this.elementoValidar.elemenNue = true;
        }
        if (asignacion == 10) {
            this.elementoValidar.elemenDie = true;
        }
        if (asignacion == 11) {
            this.elementoValidar.elemenOnc = true;
        }
    }
    asignarValidacionErronea(asignacion) {
        if (asignacion == 1) {
            this.elementoValidar.elemenUno = false;
        }
        if (asignacion == 2) {
            this.elementoValidar.elemenDos = false;
        }
        if (asignacion == 3) {
            this.elementoValidar.elemenTre = false;
        }
        if (asignacion == 4) {
            this.elementoValidar.elemenCua = false;
        }
        if (asignacion == 5) {
            this.elementoValidar.elemenCin = false;
        }
        if (asignacion == 6) {
            this.elementoValidar.elemenSei = false;
        }
        if (asignacion == 7) {
            this.elementoValidar.elemenSie = false;
        }
        if (asignacion == 8) {
            this.elementoValidar.elemenOch = false;
        }
        if (asignacion == 9) {
            this.elementoValidar.elemenNue = false;
        }
        if (asignacion == 10) {
            this.elementoValidar.elemenDie = false;
        }
        if (asignacion == 11) {
            this.elementoValidar.elemenOnc = false;
        }
    }
};
RelacioncaderaPage.ctorParameters = () => [
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_2__["MensajesService"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RelacioncaderaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-relacioncadera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./relacioncadera.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/relacioncadera/relacioncadera.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./relacioncadera.page.scss */ "./src/app/relacioncadera/relacioncadera.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mensajes_service__WEBPACK_IMPORTED_MODULE_2__["MensajesService"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], RelacioncaderaPage);



/***/ })

}]);
//# sourceMappingURL=relacioncadera-relacioncadera-module-es2015.js.map