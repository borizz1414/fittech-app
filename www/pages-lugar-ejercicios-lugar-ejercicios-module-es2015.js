(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lugar-ejercicios-lugar-ejercicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-fab  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n        <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-buttons>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\">\n\n  <div class=\"contenedor animated fadeInLeft delay-1s\">\n      <h2 style=\" text-align: center;font-size: 28px;font-weight: bold;opacity: 0.7;\n      margin-bottom: 20px;\">¿Dónde vas a entrenar?</h2>\n      <ion-grid class=\"my-grid\">\n      <ion-row class=\"parent-row\">\n        <ion-col size=\"12\">      \n        <ion-card class=\"color-tarjeta2\"  disabled='true' (click)=\"entrenar(0)\" \n        style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\">\n          <h2 style=\"margin: 10px;\">\n            <b>Gym</b> \n          </h2>\n        </ion-card>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-card class=\"color-tarjeta2\" disabled='true' (click)=\"entrenar(1)\" style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\">\n            <h2 style=\"margin: 10px;\">\n              <b>Al aire libre</b>\n            </h2>  \n          </ion-card>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-card class=\"color-tarjeta\" (click)=\"entrenar(2)\" style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n          \">\n            <h2 style=\"margin: 10px;\">\n              <b>Casa</b>\n            </h2>  \n          </ion-card>\n        </ion-col>\n      </ion-row>\n      </ion-grid>    \n\n      <ion-col  size=\"12\">      \n        <div class=\"ion-text-center letra\" style=\"padding: 0 1rem;\">\n          Pensando en cuidarte y ser responsables con la sociedad y debido a la pandemia mundial no están habilitadas las opciones gym y outdoor; por esto queremos que entrenes desde casa con nosotros\n        </div>\n      </ion-col>\n\n\n  </div>\n\n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lugar-ejercicios/lugar-ejercicios-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/lugar-ejercicios/lugar-ejercicios-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: LugarEjerciciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LugarEjerciciosPageRoutingModule", function() { return LugarEjerciciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lugar_ejercicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lugar-ejercicios.page */ "./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.ts");




const routes = [
    {
        path: '',
        component: _lugar_ejercicios_page__WEBPACK_IMPORTED_MODULE_3__["LugarEjerciciosPage"]
    }
];
let LugarEjerciciosPageRoutingModule = class LugarEjerciciosPageRoutingModule {
};
LugarEjerciciosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LugarEjerciciosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lugar-ejercicios/lugar-ejercicios.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/lugar-ejercicios/lugar-ejercicios.module.ts ***!
  \*******************************************************************/
/*! exports provided: LugarEjerciciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LugarEjerciciosPageModule", function() { return LugarEjerciciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lugar_ejercicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lugar-ejercicios-routing.module */ "./src/app/pages/lugar-ejercicios/lugar-ejercicios-routing.module.ts");
/* harmony import */ var _lugar_ejercicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lugar-ejercicios.page */ "./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let LugarEjerciciosPageModule = class LugarEjerciciosPageModule {
};
LugarEjerciciosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _lugar_ejercicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["LugarEjerciciosPageRoutingModule"]
        ],
        declarations: [_lugar_ejercicios_page__WEBPACK_IMPORTED_MODULE_6__["LugarEjerciciosPage"]]
    })
], LugarEjerciciosPageModule);



/***/ }),

/***/ "./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background:black;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-objetivos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 90%;*/\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.piepagina {\n  text-align: left;\n  margin-left: 30px !important;\n  margin-bottom: 10%;\n  font-size: 15px;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 25px;\n}\n\n.color-tarjeta {\n  background-color: #E5141A;\n}\n\n.color-tarjeta2 {\n  background-color: #5f5253;\n}\n\nion-card {\n  color: white;\n  padding: 0px !important;\n  margin: 0px !important;\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  padding: 2px !important;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\nion-icon {\n  font-size: 23px !important;\n}\n\nion-ion-fab-button:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbHVnYXItZWplcmNpY2lvcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxsdWdhci1lamVyY2ljaW9zXFxsdWdhci1lamVyY2ljaW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbHVnYXItZWplcmNpY2lvcy9sdWdhci1lamVyY2ljaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUdHLHNCQUFBO0FDQ0g7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQTs7Ozt3QkFBQTtBQ09GOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBRERBO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNJRDs7QURGQztFQUNDLDBCQUFBO0VBQ0EsdUJBQUE7QUNJRjs7QURDQTtFQUNHLHdCQUFBO0VBQUEsZ0JBQUE7RUFDRCxZQUFBO0FDRUY7O0FEQ0E7RUFDSSw2QkFBQTtBQ0VKOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNHRjs7QURDQTtFQUNBLDBCQUFBO0FDRUE7O0FEQ0E7RUFDQSxZQUFBO0FDRUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sdWdhci1lamVyY2ljaW9zL2x1Z2FyLWVqZXJjaWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qe1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pb24tdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLW9iamV0aXZvcy5qcGcnKTsgICAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTsqL1xufVxuXG4ubG9nb3tcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmF7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5lZG9ye1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5waWVwYWdpbmF7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMzBweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdHVsb3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jb2xvci10YXJqZXRhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUxNDFBO1xufVxuLmNvbG9yLXRhcmpldGEye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1MjUzO1xufVxuXG5pb24tY2FyZHtcbiBjb2xvcjogd2hpdGU7XG4gcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuIHdpZHRoOiA4OCU7XG4gbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuIGgye1xuICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xuIH1cblxufVxuXG5pb24tY2FyZDpob3ZlcntcbiAgIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWNvbHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1pY29ue1xuZm9udC1zaXplOiAyM3B4IWltcG9ydGFudDtcbn1cblxuaW9uLWlvbi1mYWItYnV0dG9uOmhvdmVye1xub3BhY2l0eTogMC43O1xufVxuIiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZjZmNmYztcbiAgLypcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tb2JqZXRpdm9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogOTAlOyovXG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBpZXBhZ2luYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jb2xvci10YXJqZXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1MTQxQTtcbn1cblxuLmNvbG9yLXRhcmpldGEyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmNTI1Mztcbn1cblxuaW9uLWNhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5teS1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wYXJlbnQtcm93IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlvbi1mYWItYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.ts ***!
  \*****************************************************************/
/*! exports provided: LugarEjerciciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LugarEjerciciosPage", function() { return LugarEjerciciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let LugarEjerciciosPage = class LugarEjerciciosPage {
    constructor(usuarioservicio, ruta) {
        this.usuarioservicio = usuarioservicio;
        this.ruta = ruta;
    }
    ngOnInit() {
    }
    entrenar(valor) {
        console.log(valor);
        this.usuarioservicio.entrenar(valor);
        this.ruta.navigateForward(['/pasoinicial']);
    }
    atras() {
        this.ruta.pop();
    }
};
LugarEjerciciosPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
LugarEjerciciosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lugar-ejercicios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lugar-ejercicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lugar-ejercicios.page.scss */ "./src/app/pages/lugar-ejercicios/lugar-ejercicios.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], LugarEjerciciosPage);



/***/ })

}]);
//# sourceMappingURL=pages-lugar-ejercicios-lugar-ejercicios-module-es2015.js.map