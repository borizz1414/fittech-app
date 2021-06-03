function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terminos-terminos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos/terminos.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos/terminos.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTerminosTerminosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <app-back-btn></app-back-btn>\n    </ion-buttons>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\">\n\n  <div class=\"contenedor animated fadeIn delay-1s\">\n\n      <h2 class=\"titulo\">Términos y Condiciones</h2>\n\n      <ion-grid class=\"my-grid\">\n      <ion-row class=\"parent-row\">\n        <ion-col size=\"12\">      \n          <svg version=\"1.1\" id=\"Capa_1\" height=\"80px\" width=\"80px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M251.328,196.704c-6.24-6.24-16.384-6.272-22.656-0.032L176,249.376l-20.672-20.704c-6.24-6.24-16.384-6.24-22.624,0\n\t\t\ts-6.24,16.384,0,22.624l32,32c3.104,3.136,7.2,4.704,11.296,4.704s8.192-1.568,11.328-4.672l64-64\n\t\t\tC257.568,213.088,257.568,202.944,251.328,196.704z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M251.328,324.704c-6.24-6.24-16.384-6.272-22.656-0.032L176,377.376l-20.672-20.672c-6.24-6.24-16.384-6.24-22.624,0\n\t\t\ts-6.24,16.384,0,22.624l32,32c3.104,3.104,7.2,4.672,11.296,4.672s8.192-1.568,11.328-4.672l64-64\n\t\t\tC257.568,341.088,257.568,330.944,251.328,324.704z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M368,224h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16C384,231.168,376.832,224,368,224\n\t\t\tz\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M368,352h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16C384,359.168,376.832,352,368,352\n\t\t\tz\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M416,64h-64V48c0-8.832-7.168-16-16-16h-34.72C294.656,13.376,276.864,0,256,0s-38.656,13.376-45.28,32H176\n\t\t\tc-8.832,0-16,7.168-16,16v16H96c-17.632,0-32,14.368-32,32v384c0,17.632,14.368,32,32,32h320c17.632,0,32-14.368,32-32V96\n\t\t\tC448,78.368,433.632,64,416,64z M192,64h32c8.832,0,16-7.168,16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16\n\t\t\tc0,8.832,7.168,16,16,16h32v32H192V64z M416,480H96V96h64v16c0,8.832,7.168,16,16,16h160c8.832,0,16-7.168,16-16V96h64V480z\"/>\n\t</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <div class=\"ion-text-center letra\">\n            Para acabar de configurar tu cuenta de Fittech acepta lo siguiente:\n          </div>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-item lines=\"none\">\n            <div class=\"ion-text-wrap letra\" style=\"z-index: 999999;\">\n              *Acepto los <b (click)=\"VisualizarPDF('http://fittech247.com/fittech/pdf/TERMINOS-Y-CONDICIONES-FITTECH.pdf')\">términos  y las condiciones</b> y la <b (click)=\"VisualizarPDF('http://fittech247.com/fittech/pdf/POLITICA-DE-TRATAMIENTO-FITTECH.pdf')\">política  de privacidad</b> de fittech\n            </div>\n            <ion-checkbox  \n            name=\"selected\" \n            color=\"medium\" slot=\"start\"\n             (click)=\"registrar()\" ></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col  size=\"12\">      \n       <!--    <div class=\"ion-text-center letra\">\n            <p style=\"color:  #E5141A; font-weight: 600; text-decoration: underline;\"\n             >TÉRMINOS Y CONDICIONES DE USO DE LA APLICACIÓN MÓVIL FITTECH</p>\n          </div> -->\n        </ion-col>\n        <ion-col  size=\"12\">      \n         <!--  <div class=\"ion-text-center letra\">\n            <p   style=\"color:  #E5141A; font-weight: 600; text-decoration: underline;\">POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES FITTECH</p>\n          </div> -->\n        </ion-col>\n\n      </ion-row>\n      </ion-grid>      \n\n  </div>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/terminos/terminos-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/terminos/terminos-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TerminosPageRoutingModule */

  /***/
  function srcAppPagesTerminosTerminosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminosPageRoutingModule", function () {
      return TerminosPageRoutingModule;
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


    var _terminos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terminos.page */
    "./src/app/pages/terminos/terminos.page.ts");

    var routes = [{
      path: '',
      component: _terminos_page__WEBPACK_IMPORTED_MODULE_3__["TerminosPage"]
    }];

    var TerminosPageRoutingModule = function TerminosPageRoutingModule() {
      _classCallCheck(this, TerminosPageRoutingModule);
    };

    TerminosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TerminosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/terminos/terminos.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/terminos/terminos.module.ts ***!
    \***************************************************/

  /*! exports provided: TerminosPageModule */

  /***/
  function srcAppPagesTerminosTerminosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminosPageModule", function () {
      return TerminosPageModule;
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


    var _terminos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terminos-routing.module */
    "./src/app/pages/terminos/terminos-routing.module.ts");
    /* harmony import */


    var _terminos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terminos.page */
    "./src/app/pages/terminos/terminos.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var TerminosPageModule = function TerminosPageModule() {
      _classCallCheck(this, TerminosPageModule);
    };

    TerminosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terminos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TerminosPageRoutingModule"]],
      declarations: [_terminos_page__WEBPACK_IMPORTED_MODULE_6__["TerminosPage"]]
    })], TerminosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/terminos/terminos.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/terminos/terminos.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTerminosTerminosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background:black;\n}\n\nion-content {\n  --background: none;\n  /*\n  background-image: url('/assets/img/imagen-disclaimer.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  */\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 18px !important;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\nsvg {\n  fill: #E5141A !important;\n}\n\nb {\n  color: #E5141A !important;\n}\n\n.letra {\n  font-size: 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybWlub3MvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcdGVybWlub3NcXHRlcm1pbm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVybWlub3MvdGVybWlub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBR0csc0JBQUE7QUNDTDs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBOzs7OztHQUFBO0FDT0o7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRU47O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FESUU7RUFDQyx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0RIOztBREdHO0VBQ0MsMEJBQUE7QUNESjs7QURPRTtFQUNJLDZCQUFBO0FDSk47O0FET0U7RUFDRSx1QkFBQTtBQ0pKOztBRE1BO0VBQ0ksdUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtBQ0hKOztBRE1DO0VBQ0csd0JBQUE7QUNISjs7QURNRTtFQUNELHlCQUFBO0FDSEQ7O0FETUU7RUFDSSwwQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVybWlub3MvdGVybWlub3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuICBcbiAgKntcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDpibGFjaztcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAvKlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRpc2NsYWltZXIuanBnJyk7ICAgIFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG4gICAgKi9cbiAgfVxuXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY29udGVuZWRvcntcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiBcbiAgLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiBcblxuICBpb24tY2FyZHtcbiAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgIHdpZHRoOiA4OCU7XG4gICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgIGgye1xuICAgIGZvbnQtc2l6ZTogMThweCFpbXBvcnRhbnQ7XG4gICB9XG4gXG4gIH1cblxuXG4gIGlvbi1jb2x7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xuICB9XG5cbiAgLm15LWdyaWQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuIH1cbi5wYXJlbnQtcm93IHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiB9XG5cbiBzdmd7XG4gICAgZmlsbDojRTUxNDFBIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ7XG4gY29sb3I6ICNFNTE0MUEhaW1wb3J0YW50OyA7XG4gIH1cblxuICAubGV0cmF7XG4gICAgICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xuICB9IiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLypcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tZGlzY2xhaW1lci5qcGcnKTsgICAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcbiAgKi9cbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbnN2ZyB7XG4gIGZpbGw6ICNFNTE0MUEgIWltcG9ydGFudDtcbn1cblxuYiB7XG4gIGNvbG9yOiAjRTUxNDFBICFpbXBvcnRhbnQ7XG59XG5cbi5sZXRyYSB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/terminos/terminos.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/terminos/terminos.page.ts ***!
    \*************************************************/

  /*! exports provided: TerminosPage */

  /***/
  function srcAppPagesTerminosTerminosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminosPage", function () {
      return TerminosPage;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");

    var TerminosPage =
    /*#__PURE__*/
    function () {
      function TerminosPage(previewAnyFile, usuarioService, ApiService, ruta, loadingController, mensajeservice) {
        _classCallCheck(this, TerminosPage);

        this.previewAnyFile = previewAnyFile;
        this.usuarioService = usuarioService;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.loadingController = loadingController;
        this.mensajeservice = mensajeservice;
        this.datosCargados = this.usuarioService.datosPersonales;
      }

      _createClass(TerminosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registrar",
        value: function registrar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /*   this.presentLoading(); */

                    /*   const valido = await this.ApiService.Registrar(this.usuarioService.datosPersonales)
                      if(valido){ */

                    /*  this.loadingController.dismiss() */
                    this.ruta.navigateForward(['/home']);
                    /*  }else{
                       console.log("fail en el Registrado")
                     } */

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "VisualizarPDF",
        value: function VisualizarPDF(link) {
          var url = link;
          this.previewAnyFile.preview(url).then(function () {}, function (err) {
            console.log(err);
          });
        }
      }]);

      return TerminosPage;
    }();

    TerminosPage.ctorParameters = function () {
      return [{
        type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_6__["PreviewAnyFile"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
      }];
    };

    TerminosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terminos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terminos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos/terminos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terminos.page.scss */
      "./src/app/pages/terminos/terminos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_6__["PreviewAnyFile"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]])], TerminosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-terminos-terminos-module-es5.js.map