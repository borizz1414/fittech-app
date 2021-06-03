function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-experiencia-experiencia-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/experiencia/experiencia.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/experiencia/experiencia.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExperienciaExperienciaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\" >\n\n  <div class=\"contenedor animated fadeInLeft delay-1s\">\n      <h2 class=\"titulo\">¿Cúal es tu experiencia?</h2>\n      <ion-grid class=\"my-grid\">\n      <ion-row class=\"parent-row\">\n        <ion-col size=\"12\">      \n        <ion-card class=\"color-tarjeta\" (click)=\"testear()\">\n          <h2>Sin experiencia</h2>\n        </ion-card>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-card class=\"color-tarjeta\" (click)=\"experiencia(1)\">\n            <h2>Más de 6 meses</h2>  \n          </ion-card>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-card class=\"color-tarjeta\" (click)=\"experiencia(2)\">\n            <h2>Más de 2 años</h2>  \n          </ion-card>\n        </ion-col>\n      </ion-row>\n      </ion-grid> \n  </div>\n\n  <ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n    <ion-fab-button color=\"danger\" (click)=\"atras()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/experiencia/experiencia-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/experiencia/experiencia-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ExperienciaPageRoutingModule */

  /***/
  function srcAppPagesExperienciaExperienciaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienciaPageRoutingModule", function () {
      return ExperienciaPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _experiencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./experiencia.page */
    "./src/app/pages/experiencia/experiencia.page.ts");

    var routes = [{
      path: '',
      component: _experiencia_page__WEBPACK_IMPORTED_MODULE_3__["ExperienciaPage"]
    }];

    var ExperienciaPageRoutingModule = function ExperienciaPageRoutingModule() {
      _classCallCheck(this, ExperienciaPageRoutingModule);
    };

    ExperienciaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExperienciaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/experiencia/experiencia.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/experiencia/experiencia.module.ts ***!
    \*********************************************************/

  /*! exports provided: ExperienciaPageModule */

  /***/
  function srcAppPagesExperienciaExperienciaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienciaPageModule", function () {
      return ExperienciaPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _experiencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experiencia-routing.module */
    "./src/app/pages/experiencia/experiencia-routing.module.ts");
    /* harmony import */


    var _experiencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./experiencia.page */
    "./src/app/pages/experiencia/experiencia.page.ts");

    var ExperienciaPageModule = function ExperienciaPageModule() {
      _classCallCheck(this, ExperienciaPageModule);
    };

    ExperienciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _experiencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExperienciaPageRoutingModule"]],
      declarations: [_experiencia_page__WEBPACK_IMPORTED_MODULE_6__["ExperienciaPage"]]
    })], ExperienciaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/experiencia/experiencia.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/experiencia/experiencia.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExperienciaExperienciaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-objetivos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 90%;*/\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.piepagina {\n  margin: 0 auto;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 25px;\n}\n\n.color-tarjeta {\n  background-color: #000000;\n}\n\nion-card {\n  color: white;\n  padding: 0px !important;\n  margin: 0px !important;\n  border-radius: 64px !important;\n  margin-bottom: 20px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  padding: 2px !important;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\nion-icon {\n  font-size: 23px !important;\n}\n\nion-icon:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jaWEvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcZXhwZXJpZW5jaWFcXGV4cGVyaWVuY2lhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jaWEvZXhwZXJpZW5jaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBR0csc0JBQUE7QUNDTDs7QURFRTtFQUNFLHFCQUFBO0VBQ0E7Ozs7d0JBQUE7QUNLSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDSDs7QURDRztFQUNDLDBCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURJRTtFQUNHLHdCQUFBO0VBQUEsZ0JBQUE7RUFDRCxZQUFBO0FDREo7O0FESUU7RUFDSSw2QkFBQTtBQ0ROOztBRElFO0VBQ0UsdUJBQUE7QUNESjs7QURHQTtFQUNJLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNBSjs7QURHQztFQUNFLDBCQUFBO0FDQUg7O0FER0M7RUFDQyxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBlcmllbmNpYS9leHBlcmllbmNpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG4gIFxuICAqe1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gICAgLypcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2ltYWdlbi1vYmpldGl2b3MuanBnJyk7ICAgIFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCU7Ki9cbiAgfVxuICBcbiAgLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cbiAgXG4gIC5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY29udGVuZWRvcntcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBpZXBhZ2luYXtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5jb2xvci10YXJqZXRhe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICBpb24tY2FyZHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgIGJvcmRlci1yYWRpdXM6IDY0cHggIWltcG9ydGFudDtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgIHdpZHRoOiA4OCU7XG4gICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgIGgye1xuICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcbiAgIH1cbiBcbiAgfVxuXG4gIGlvbi1jYXJkOmhvdmVye1xuICAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xuICB9XG5cbiAgLm15LWdyaWQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuIH1cbi5wYXJlbnQtcm93IHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiB9XG5cbiBpb24taWNvbntcbiAgIGZvbnQtc2l6ZTogMjNweCFpbXBvcnRhbnQ7XG4gfVxuXG4gaW9uLWljb246aG92ZXJ7XG4gIG9wYWNpdHk6IDAuNztcbn0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLW9iamV0aXZvcy5qcGcnKTsgICAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTsqL1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5waWVwYWdpbmEge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY29sb3ItdGFyamV0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNjRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/experiencia/experiencia.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/experiencia/experiencia.page.ts ***!
    \*******************************************************/

  /*! exports provided: ExperienciaPage */

  /***/
  function srcAppPagesExperienciaExperienciaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienciaPage", function () {
      return ExperienciaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ExperienciaPage =
    /*#__PURE__*/
    function () {
      function ExperienciaPage(usuarioservicio, ruta, alertController) {
        _classCallCheck(this, ExperienciaPage);

        this.usuarioservicio = usuarioservicio;
        this.ruta = ruta;
        this.alertController = alertController;
      }

      _createClass(ExperienciaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "experiencia",
        value: function experiencia(valor) {
          this.usuarioservicio.experiencia(valor);
          this.ruta.navigateRoot(['/lugar-ejercicios']);
        }
      }, {
        key: "atras",
        value: function atras() {
          this.ruta.navigateRoot(['/objetivo']);
        }
      }, {
        key: "testear",
        value: function testear() {
          this.alerta();
        } // mensaje de reanudar

      }, {
        key: "alerta",
        value: function alerta() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'La sesión ha sido pausada',
                      cssClass: 'customMensaje1',
                      buttons: [{
                        text: 'Continuar',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: function handler(blah) {
                          console.log("nop2");
                        }
                      }, {
                        text: 'Finalizar',
                        cssClass: 'confirmButton',
                        handler: function handler() {
                          // mensaje confirmacion
                          _this.confirmarSalida();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // mensaje de reanudar

      }, {
        key: "confirmarSalida",
        value: function confirmarSalida() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Si finalizas aquí no contará la sesión ¿seguro quieres finalizar?',
                      cssClass: 'customMensaje1',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: function handler(blah) {
                          console.log("nop");
                        }
                      }, {
                        text: 'Si',
                        cssClass: 'confirmButton',
                        handler: function handler() {
                          // clearInterval(this.tiemposegundo) 
                          // this.navCtrl.navigateRoot("tabs/dashboard")
                          console.log("nop");
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ExperienciaPage;
    }();

    ExperienciaPage.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ExperienciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experiencia',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experiencia.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/experiencia/experiencia.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experiencia.page.scss */
      "./src/app/pages/experiencia/experiencia.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], ExperienciaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-experiencia-experiencia-module-es5.js.map