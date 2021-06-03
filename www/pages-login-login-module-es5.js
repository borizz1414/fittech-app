function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\">\n\n  <div class=\"contenedor\">\n\n      <h2 class=\"titulo\">¿Listo para comenzar?</h2>\n    \n      <ion-grid class=\"my-grid  animated fadeIn delay-2s\">\n      <ion-row class=\"parent-row\">\n        <ion-col size=\"12\">      \n          <ion-input type=\"text\" placeholder=\"Email*\" name=\"email\" [(ngModel)]=\"login.email\"></ion-input>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-input type=\"password\" placeholder=\"Password*\" name=\"password\" [(ngModel)]=\"login.password\"></ion-input>\n        </ion-col>\n        <ion-col  size=\"12\">      \n\n          <!-- <ion-card style=\"\n            --background:#92949c;\n            width: 286px; \"\n            (click)=\"acceder()\" [disabled]=\"facebookhabilitar\">\n            <ion-item style=\"--background:#92949c; color:white;\">\n              <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n              <ion-label style=\"font-size:14px;  font-family: 'Open Sans';text-transform: uppercase;\"> Acceder con Email</ion-label>\n            </ion-item>\n          </ion-card> -->\n\n          <ion-button style=\"\n            width: 286px; \n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            \"  color=\"medium\"\n          (click)=\"acceder()\" [disabled]=\"facebookhabilitar\" class=\"disminuirboton\">\n            <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n            Acceder con Email\n          </ion-button>\n\n        </ion-col>\n        <ion-col  size=\"12\">   \n\n          <!-- <ion-card  style=\"\n          --background:#eb445a;\n          width: 286px; \"\n          (click)=\"googleLogin()\" [disabled]=\"googlehabilitar\">\n          <ion-item style=\"--background:#eb445a; color:white;\">\n            <ion-icon src=\"./assets/icon/buscar.svg\" slot=\"start\"></ion-icon>\n            <ion-label style=\"font-size:14px; font-family: 'Open Sans';text-transform: uppercase;\"> Acceder con Google</ion-label>\n          </ion-item>\n        </ion-card>    -->\n\n          <ion-button style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            \"  color=\"danger\" \n            (click)=\"googleLogin()\" [disabled]=\"googlehabilitar\" class=\"disminuirboton\">\n            <ion-icon src=\"./assets/icon/buscar.svg\" slot=\"start\"></ion-icon>\n\n            Acceder con Google\n          </ion-button> \n\n        </ion-col>\n        <ion-col  size=\"12\">    \n          <!-- <ion-card  style=\"\n          --background:#3b5998;\n          width: 286px; \"\n          color=\"primary\"\n          (click)=\"facebookLogin()\" [disabled]=\"facebookhabilitar\">\n          <ion-item style=\"--background:#3b5998; color:white;\">\n            <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n            <ion-label style=\"font-size:14px;  font-family: 'Open Sans';text-transform: uppercase;\"> Acceder con Facebook </ion-label>\n          </ion-item>\n        </ion-card>   -->\n\n         <ion-button style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            \"  color=\"primary\" \n          (click)=\"facebookLogin()\" [disabled]=\"facebookhabilitar\" class=\"disminuirboton\">\n            <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n            Acceder con Facebook\n          </ion-button>\n\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <a href=\"#\" style=\"color: black;\" (click)=\"recuperar()\">Recuperar Contraseña</a>\n        </ion-col>\n      </ion-row>\n      </ion-grid>      \n  </div>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"piepagina ion-text-center\">\n      <p class=\"animated fadeIn delay-1s\">¿Aun no posee una cuenta?</p>\n      <p class=\"animated fadeInUp delay-2s\" style=\"font-weight: bold;\" (click)=\"goto('/registrar-info')\">Registrarse</p>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --ion-background-color: #fcfcfc;\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  color: black;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.fb-btn button {\n  --border-radius:5px;\n  --ion-color-base: #3b5998 !important;\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n@media (max-width: 370px) {\n  .contenedor {\n    padding-top: 0 !important;\n  }\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 370px) {\n  .titulo {\n    margin-bottom: 0px;\n    margin-top: 5px;\n    font-size: 26px;\n  }\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n@media (max-width: 370px) {\n  ion-col {\n    margin-bottom: 0 !important;\n  }\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n@media (max-width: 370px) {\n  .my-grid {\n    height: auto !important;\n  }\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n@media (max-width: 370px) {\n  .parent-row {\n    height: auto !important;\n  }\n}\n\n@media (max-width: 370px) {\n  .disminuirboton {\n    height: 32px !important;\n  }\n}\n\nion-button {\n  --border-radius:10px;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBR0csc0JBQUE7QUNDSDs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FDTEY7O0FEU0U7RUFDRSxtQkFBQTtFQUF3QixvQ0FBQTtBQ0w1Qjs7QURVQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRC9CRTtFQW1DRjtJQUtJLHlCQUFBO0VDTEY7QUFDRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTkY7O0FENUNFO0VBNkNGO0lBT0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQ0pGO0FBQ0Y7O0FEVUE7RUFDQyx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ1BEOztBRFNDO0VBQ0MsMEJBQUE7RUFDQSxZQUFBO0FDUEY7O0FEWUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRGFBO0VBQ0ksNkJBQUE7QUNWSjs7QUR6RUU7RUFrRkY7SUFHTSwyQkFBQTtFQ1JKO0FBQ0Y7O0FEV0E7RUFDRSx1QkFBQTtBQ1JGOztBRGxGRTtFQXlGRjtJQUdJLHVCQUFBO0VDTkY7QUFDRjs7QURRQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNMRjs7QUQ3RkU7RUErRkY7SUFLSSx1QkFBQTtFQ0hGO0FBQ0Y7O0FEbEdFO0VBd0dGO0lBRUksdUJBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0Usb0JBQUE7RUFDRixVQUFBO0FDSEEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbip7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5AbWl4aW4gdGVsZWZvbm8tcmVzcG9uc2l2byB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOjM3MHB4KSB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG5pb24taW5wdXR7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAzcHggN3B4IDEwcHggLTVweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5mYi1idG4gIHtcbiAgYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czo1cHg7ICAgIC0taW9uLWNvbG9yLWJhc2U6ICMzYjU5OTggIWltcG9ydGFudDtcbiAgfVxufVxuXG5cbi5sb2dve1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYXtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3J7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG4udGl0dWxve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG5cblxuXG5cbmlvbi1jYXJke1xuIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuIHdpZHRoOiA4OCU7XG4gbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuIGgye1xuICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG4gfVxuXG59XG5cbmlvbi1jYXJkOmhvdmVye1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuaW9uLWNvbHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xuICAgIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZGlzbWludWlyYm90b257XG4gIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbndpZHRoOiA4MCU7XG59XG5cbiIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAzcHggN3B4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5mYi1idG4gYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOjVweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzNiNTk5OCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC50aXR1bG8ge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIGlvbi1jb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5teS1ncmlkIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgLnBhcmVudC1yb3cge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuZGlzbWludWlyYm90b24ge1xuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts"); //facebook


    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(ApiService, ruta, mensajeservice, afAuth, gplus, fb, alertController, platform, storage, usuarioService, loadingController) {
        _classCallCheck(this, LoginPage);

        this.ApiService = ApiService;
        this.ruta = ruta;
        this.mensajeservice = mensajeservice;
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.fb = fb;
        this.alertController = alertController;
        this.platform = platform;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.googleData = null;
        this.facebookData = null;
        this.facebookhabilitar = false;
        this.googlehabilitar = false;
        this.login = {
          email: null,
          password: null,
          pushToken: null,
          pushIdToken: null
        };
        this.registrar = {
          nombre: null,
          email: null,
          contra: '123456'
        };
        this.logeado = this.afAuth.authState;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          // llamado cache
          this.ApiService.cargarFittechApp().then(function (resp) {
            console.log("si no tiene nada , llamas", resp);

            if (resp === false) {
              _this.ApiService.guardarFittechApp();
            }
          });
        }
      }, {
        key: "acceder",
        value: function acceder() {
          if (this.login.password.length > 1 && this.login.email.length > 1) {
            this.dashboard(this.login);
          } else {
            return;
          }
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this2 = this;

          this.gplus.login({}).then(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var email, name, validar;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.presentLoading();
                      email = response.email;
                      name = response.displayName;
                      _context.next = 5;
                      return this.ApiService.validarEmail(email);

                    case 5:
                      validar = _context.sent;

                      if (!validar) {
                        _context.next = 10;
                        break;
                      }

                      this.loadingController.dismiss();
                      this.mensajeservice.alertaInformatica('el correo ya existe en nuestra base de datos');
                      return _context.abrupt("return");

                    case 10:
                      this.loadingController.dismiss();
                      this.registrar.email = email;
                      this.registrar.nombre = name;
                      this.usuarioService.registrarEmail(this.registrar);
                      this.ruta.navigateForward(["/terminos"]);

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }).catch(function (e) {
            alert(JSON.stringify(e));
          });
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this3 = this;

          this.fb.login(["public_profile", "email"]).then(function (res) {
            _this3.fb.api("me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)", []).then(function (profile) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2() {
                var email, name, validar;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.presentLoading();
                        email = profile["email"];
                        name = profile["name"];
                        _context2.next = 5;
                        return this.ApiService.validarEmail(email);

                      case 5:
                        validar = _context2.sent;

                        if (!validar) {
                          _context2.next = 10;
                          break;
                        }

                        this.loadingController.dismiss();
                        this.mensajeservice.alertaInformatica('el correo ya existe en nuestra base de datos');
                        return _context2.abrupt("return");

                      case 10:
                        this.loadingController.dismiss();
                        this.registrar.email = email;
                        this.registrar.nombre = name;
                        this.usuarioService.registrarEmail(this.registrar);
                        this.ruta.navigateForward(["/terminos"]);

                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          });
        }
      }, {
        key: "dashboard",
        value: function dashboard(valor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var valido;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.login.pushToken = localStorage.getItem("pushToken");
                    this.login.pushIdToken = localStorage.getItem("pushIdToken");
                    _context3.next = 4;
                    return this.ApiService.Login(valor);

                  case 4:
                    valido = _context3.sent;

                    if (valido) {
                      this.ruta.navigateRoot(["/tabs"]);
                    } else {
                      this.mensajeservice.alertaInformatica("Correo o contraseña no son correctas");
                    }

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "goto",
        value: function goto(url) {
          this.ruta.navigateForward([url]);
        }
      }, {
        key: "recuperar",
        value: function recuperar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Por favor, introduzca su correo electrónico",
                      inputs: [{
                        name: "email",
                        type: "text",
                        placeholder: "email"
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("ignorar");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler(data) {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee4() {
                            var validar;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return this.ApiService.recuperarPassword(data);

                                  case 2:
                                    validar = _context4.sent;

                                    if (validar) {
                                      this.mensajeservice.alertaInformatica("Su clave fue enviada a su correo electrónico");
                                    } else {
                                      this.mensajeservice.alertaInformatica("El correo electrónico no existe en nuestra base de datos");
                                    }

                                  case 4:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map