function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrar-info-registrar-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-email/modal-email.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-email/modal-email.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalEmailModalEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n       <ion-fab vertical=\"center\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n        <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-buttons>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\">\n\n  <div class=\"contenedor\">\n\n      <h2 class=\"titulo\">¿Listo para comenzar?</h2>\n\n      <ion-grid class=\"my-grid\">\n      <ion-row class=\"parent-row\">\n        <ion-col size=\"12\">      \n          <ion-input type=\"text\" placeholder=\"Nombre*\" \n           name=\"nombre\" [(ngModel)]=\"registrar.nombre\" required></ion-input>\n        </ion-col>\n\n        <ion-col  size=\"12\">      \n          <ion-input (ionBlur)=\"Email($event)\" type=\"email\" placeholder=\"Email*\" name=\"email\" \n          [(ngModel)]=\"registrar.email\"  ></ion-input>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-input type=\"email\" placeholder=\"Confirmar Email*\"  name=\"reemail\" \n          [(ngModel)]=\"registrar.reemail\" ></ion-input >\n        </ion-col>\n        \n        <ion-col  size=\"12\">      \n          <ion-input type=\"Password\" (ionFocus)=\"Email2()\"\tplaceholder=\"Password*\" name=\"contra\" \n          [(ngModel)]=\"registrar.contra\" required></ion-input>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-input type=\"Password\" placeholder=\"Confirmar Password*\" name=\"recontra\" \n          [(ngModel)]=\"registrar.recontra\" required></ion-input>\n        </ion-col>\n\n        <ion-col  size=\"12\">      \n          <ion-card  style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            \"\n          color=\"dark\"\n         (click)=\"acceder()\">\n          <h2 style=\"margin: 10px;\">\n            <b> Acceder </b>\n          </h2> \n         </ion-card>\n        </ion-col>\n\n\n      </ion-row>\n      </ion-grid>      \n\n  </div>\n\n\n\n  \n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registrar-info/registrar-info.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrar-info/registrar-info.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrarInfoRegistrarInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border animated fadeIn delay-1s\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<!-- <ion-content [fullscreen]=\"true\" slot=\"fixed\" class=\"animated fadeIn delay-1s\">\n\n  <div class=\"contenedor\">\n\n      <h2 class=\"titulo animated zoomIn delay-1s\">Acceder</h2>\n      \n      <div class=\"letra animated fadeIn delay-2s\">\n        Selecciona la forma en que deseas acceder a nuestro entrenamiento personalizado.\n      </div>\n\n\n      <ion-grid class=\"my-grid animated fadeIn delay-2s\">\n      <ion-row class=\"parent-row\">\n        <ion-col  size=\"12\">      \n          <ion-button shape=\"round\"  color=\"medium\" \n            (click)=\"googleLogin()\" [disabled]=\"googlehabilitar\" >\n            <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\n            Acceder con Google\n          </ion-button>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-button shape=\"round\"  color=\"medium\" \n          (click)=\"facebookLogin()\" [disabled]=\"facebookhabilitar\" >\n            <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n            Acceder con Facebook\n          </ion-button>\n        </ion-col>\n        <ion-col  size=\"12\">      \n          <ion-button shape=\"round\"  color=\"medium\"\n          (click)=\"emailLogin()\" [disabled]=\"facebookhabilitar\" >\n            <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n            Acceder con Email\n          </ion-button>\n        </ion-col>\n\n\n\n\n      </ion-row>\n      </ion-grid>      \n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" class=\"animated fadeIn delay-2s\">\n    <ion-fab-button color=\"danger\" (click)=\"navegar()\" [disabled]=\"habilitar\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content> -->\n\n\n<!--\n<ion-card color=\"danger\" (click)=\"googleLogin()\" [disabled]=\"googlehabilitar\">\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png\" class=\"logo-google\">\n  <h2>Acceder con Google</h2>  \n</ion-card> -->\n\n<!--\n<ion-card color=\"primary\" (click)=\"facebookLogin()\" [disabled]=\"facebookhabilitar\">\n  <h2>Acceder con Facebook</h2>  \n</ion-card> -->\n\n<!--\n  <ion-card color=\"secundary\" (click)=\"emailLogin()\" [disabled]=\"facebookhabilitar\">\n  <h2>Acceder con Email</h2>  \n</ion-card>\n        -->";
    /***/
  },

  /***/
  "./src/app/modal-email/modal-email-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modal-email/modal-email-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ModalEmailPageRoutingModule */

  /***/
  function srcAppModalEmailModalEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEmailPageRoutingModule", function () {
      return ModalEmailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalEmailPageRoutingModule = function ModalEmailPageRoutingModule() {
      _classCallCheck(this, ModalEmailPageRoutingModule);
    };

    ModalEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})], ModalEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal-email/modal-email.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modal-email/modal-email.module.ts ***!
    \***************************************************/

  /*! exports provided: ModalEmailPageModule */

  /***/
  function srcAppModalEmailModalEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEmailPageModule", function () {
      return ModalEmailPageModule;
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


    var _modal_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-email-routing.module */
    "./src/app/modal-email/modal-email-routing.module.ts");
    /* harmony import */


    var _modal_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-email.page */
    "./src/app/modal-email/modal-email.page.ts");

    var ModalEmailPageModule = function ModalEmailPageModule() {
      _classCallCheck(this, ModalEmailPageModule);
    };

    ModalEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalEmailPageRoutingModule"]],
      declarations: [_modal_email_page__WEBPACK_IMPORTED_MODULE_6__["ModalEmailPage"]]
    })], ModalEmailPageModule);
    /***/
  },

  /***/
  "./src/app/modal-email/modal-email.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/modal-email/modal-email.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalEmailModalEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --ion-background-color: #fcfcfc;\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\nion-toolbar {\n  --background:black;\n}\n\nion-card {\n  color: white;\n  padding: 0px !important;\n  margin: 0px !important;\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  padding: 2px !important;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZW1haWwvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxtb2RhbC1lbWFpbFxcbW9kYWwtZW1haWwucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1lbWFpbC9tb2RhbC1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUU7RUFHRyxzQkFBQTtBQ0NMOztBREVFO0VBQ0UsK0JBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0NKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURNRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDSko7O0FETUk7RUFDQywwQkFBQTtFQUNBLHVCQUFBO0FDSkw7O0FEU0c7RUFDRyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0QsWUFBQTtBQ05MOztBRFNHO0VBQ0ksNkJBQUE7QUNOUDs7QURTRTtFQUNFLHVCQUFBO0FDTko7O0FEUUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC1lbWFpbC9tb2RhbC1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG4gIFxuICAqe1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICB9XG4gIFxuICBpb24taW5wdXR7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3gtc2hhZG93OiAzcHggN3B4IDEwcHggLTVweCByZ2JhKDAsMCwwLDAuMik7XG4gIH1cblxuXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbnRlbmVkb3J7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIH1cblxuIFxuXG5cbiAgaW9uLWNhcmR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy9hbnRlcmlvciBlc3RhYmEgZW4gMTJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4OCU7XG4gICAgbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiBcbiAgICBoMntcbiAgICAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbiAgICAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgfVxuIFxuICAgaW9uLWNhcmQ6aG92ZXJ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgICBvcGFjaXR5OiAwLjU7XG4gICB9XG4gXG4gICBpb24tY29se1xuICAgICAgIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XG4gICB9XG5cbiAgLm15LWdyaWQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuIH1cbi5wYXJlbnQtcm93IHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiB9XG4iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJveC1zaGFkb3c6IDNweCA3cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuXG5pb24tY2FyZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modal-email/modal-email.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/modal-email/modal-email.page.ts ***!
    \*************************************************/

  /*! exports provided: ModalEmailPage */

  /***/
  function srcAppModalEmailModalEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEmailPage", function () {
      return ModalEmailPage;
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


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");

    var ModalEmailPage =
    /*#__PURE__*/
    function () {
      function ModalEmailPage(usuarioService, modalController, apiService, mensajeservice) {
        _classCallCheck(this, ModalEmailPage);

        this.usuarioService = usuarioService;
        this.modalController = modalController;
        this.apiService = apiService;
        this.mensajeservice = mensajeservice;
        this.registrar = {
          nombre: null,
          email: null,
          contra: null,
          reemail: null,
          recontra: null
        };
      }

      _createClass(ModalEmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "acceder",
        value: function acceder() {
          if (this.registrar.contra != null && this.registrar.contra.length > 2) {
            console.log("es igual");
          } else {
            this.mensajeservice.alertaInformatica('Por favor introduzca un password mayor a 2 digitos');
            this.registrar.contra = null;
            this.registrar.recontra = null; // break rompes la continuacion 

            return;
          }

          if (this.registrar.nombre != null && this.registrar.nombre.length > 2) {
            if (this.registrar.email != null && this.registrar.email.length > 2) {
              if (this.registrar.contra === this.registrar.recontra) {
                this.usuarioService.registrarEmail(this.registrar);
                this.modalController.dismiss({
                  salir: true
                });
              } else {
                this.mensajeservice.alertaInformatica('El password no coincide');
                this.registrar.contra = null;
                this.registrar.recontra = null;
                return;
              }
            } else {
              this.mensajeservice.alertaInformatica('Por favor introduzca el campo del correo correctamente');
              return;
            }
          } else {
            this.mensajeservice.alertaInformatica('Por favor introduzca el campo del nombre correctamente');
            return;
          }
        }
      }, {
        key: "Email",
        value: function Email(valor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valido;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.apiService.validarEmail(valor.target.value);

                  case 2:
                    valido = _context.sent;

                    if (valido) {
                      this.mensajeservice.alertaInformatica('el correo ya existe en nuestra base de datos');
                      this.registrar.email = null;
                    } else {
                      console.log("aprobado email");
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "Email2",
        value: function Email2() {
          var valor;

          if (this.registrar.email === this.registrar.reemail) {
            valor = this.validateEmail(this.registrar.email);

            if (valor) {
              console.log("todo bien");
            } else {
              this.mensajeservice.alertaInformatica('El email no tiene un formato valido ');
              this.registrar.email = null;
              this.registrar.reemail = null;
            }
          } else {
            this.mensajeservice.alertaInformatica('El email no coincide ');
            this.registrar.email = null;
            this.registrar.reemail = null;
          }
        } //funcion para validar desde el js vainilla

      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var re = /\S+@\S+\.\S+/;
          return re.test(email);
        }
      }, {
        key: "atras",
        value: function atras() {
          this.modalController.dismiss({
            salir: false
          });
        }
      }]);

      return ModalEmailPage;
    }();

    ModalEmailPage.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
      }];
    };

    ModalEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-email/modal-email.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-email.page.scss */
      "./src/app/modal-email/modal-email.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]])], ModalEmailPage);
    /***/
  },

  /***/
  "./src/app/registrar-info/registrar-info-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/registrar-info/registrar-info-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RegistrarInfoPageRoutingModule */

  /***/
  function srcAppRegistrarInfoRegistrarInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarInfoPageRoutingModule", function () {
      return RegistrarInfoPageRoutingModule;
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


    var _registrar_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registrar-info.page */
    "./src/app/registrar-info/registrar-info.page.ts");

    var routes = [{
      path: '',
      component: _registrar_info_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarInfoPage"]
    }];

    var RegistrarInfoPageRoutingModule = function RegistrarInfoPageRoutingModule() {
      _classCallCheck(this, RegistrarInfoPageRoutingModule);
    };

    RegistrarInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrarInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registrar-info/registrar-info.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/registrar-info/registrar-info.module.ts ***!
    \*********************************************************/

  /*! exports provided: RegistrarInfoPageModule */

  /***/
  function srcAppRegistrarInfoRegistrarInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarInfoPageModule", function () {
      return RegistrarInfoPageModule;
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


    var _registrar_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registrar-info-routing.module */
    "./src/app/registrar-info/registrar-info-routing.module.ts");
    /* harmony import */


    var _registrar_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registrar-info.page */
    "./src/app/registrar-info/registrar-info.page.ts");
    /* harmony import */


    var _modal_email_modal_email_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-email/modal-email.page */
    "./src/app/modal-email/modal-email.page.ts");
    /* harmony import */


    var _modal_email_modal_email_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-email/modal-email.module */
    "./src/app/modal-email/modal-email.module.ts");

    var RegistrarInfoPageModule = function RegistrarInfoPageModule() {
      _classCallCheck(this, RegistrarInfoPageModule);
    };

    RegistrarInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_modal_email_modal_email_page__WEBPACK_IMPORTED_MODULE_7__["ModalEmailPage"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registrar_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarInfoPageRoutingModule"], _modal_email_modal_email_module__WEBPACK_IMPORTED_MODULE_8__["ModalEmailPageModule"]],
      declarations: [_registrar_info_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarInfoPage"]]
    })], RegistrarInfoPageModule);
    /***/
  },

  /***/
  "./src/app/registrar-info/registrar-info.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/registrar-info/registrar-info.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrarInfoRegistrarInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: none;\n  /*\n  background-image: url('/assets/img/imagen-datos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 80%;\n  */\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  color: black;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.letra {\n  padding-left: 35px;\n  padding-right: 35px;\n  font-size: 18px;\n  text-align: center;\n  opacity: 0.7;\n  margin-bottom: 5%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-button {\n  width: 80%;\n}\n\n.letra2 {\n  font-size: 13px !important;\n}\n\nion-checkbox {\n  margin-right: 10px !important;\n  margin-left: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFyLWluZm8vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxyZWdpc3RyYXItaW5mb1xccmVnaXN0cmFyLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3RyYXItaW5mby9yZWdpc3RyYXItaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUU7RUFHRyxzQkFBQTtBQ0NMOztBREVFO0VBQ0Usa0JBQUE7RUFDQTs7Ozs7R0FBQTtBQ01KOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtBQ0NKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1FO0VBQ0MsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNISDs7QURLRztFQUNDLDBCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRFNFO0VBQ0ksNkJBQUE7QUNOTjs7QURTRTtFQUNFLHVCQUFBO0FDTko7O0FEUUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDTEo7O0FEUUM7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUM7RUFDQyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtBQ0xGOztBRFFBO0VBQ0UsMEJBQUE7QUNMRjs7QURRQTtFQUNDLDZCQUFBO0VBQ0EsNEJBQUE7QUNMRCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhci1pbmZvL3JlZ2lzdHJhci1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG4gIH1cbiAgXG4gICp7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAvKlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgICovXG4gIH1cbiAgXG4gIGlvbi1pbnB1dHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAzcHggN3B4IDEwcHggLTVweCByZ2JhKDAsMCwwLDAuMik7XG4gIH1cblxuXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbnRlbmVkb3J7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gXG5cbiAgaW9uLWNhcmR7XG4gICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICB3aWR0aDogODglO1xuICAgbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICBoMntcbiAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgIH1cbiBcbiAgfVxuXG5cbiAgaW9uLWNvbHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gfVxuLnBhcmVudC1yb3cge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuIH1cblxuIC5sZXRyYXtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiB9XG5cbiBpb24tY2FyZDpob3ZlcntcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG5pb24tYnV0dG9ue1xuICB3aWR0aDogODAlO1xufVxuXG4ubGV0cmEye1xuICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3h7XG4gbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gbWFyZ2luLWxlZnQ6ICAzMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAqL1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGV0cmEge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5sZXRyYTIge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/registrar-info/registrar-info.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/registrar-info/registrar-info.page.ts ***!
    \*******************************************************/

  /*! exports provided: RegistrarInfoPage */

  /***/
  function srcAppRegistrarInfoRegistrarInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarInfoPage", function () {
      return RegistrarInfoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _modal_email_modal_email_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../modal-email/modal-email.page */
    "./src/app/modal-email/modal-email.page.ts"); //google
    //facebook


    var RegistrarInfoPage =
    /*#__PURE__*/
    function () {
      function RegistrarInfoPage(ruta, afAuth, gplus, modalController, usuarioservicio, fb, mensajeServicio, platform) {
        _classCallCheck(this, RegistrarInfoPage);

        this.ruta = ruta;
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.modalController = modalController;
        this.usuarioservicio = usuarioservicio;
        this.fb = fb;
        this.mensajeServicio = mensajeServicio;
        this.platform = platform;
        this.habilitar = true;
        this.facebookData = null;
        this.googleData = null;
        this.googlehabilitar = false;
        this.facebookhabilitar = false;
        this.logeado = this.afAuth.authState;
      }

      _createClass(RegistrarInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.emailLogin();
        }
      }, {
        key: "navegar",
        value: function navegar() {
          this.ruta.navigateRoot(['/terminos']);
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this = this;

          if (this.platform.is('cordova')) {
            var prueba = this.nativegooglelogin();
            prueba.then(function (respuesta) {
              console.log(respuesta.user.email);
              console.log(respuesta.user.displayName);
              _this.googleData = {
                email: respuesta.user.email,
                first_name: respuesta.user.displayName
              };

              _this.registrarRedes(_this.googleData);

              _this.habilitar = false;
              _this.facebookhabilitar = true;
              _this.googlehabilitar = true;
            });
          }
        }
      }, {
        key: "nativegooglelogin",
        value: function nativegooglelogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var gplusUser;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.gplus.login({
                      'scopes': '',
                      'webClientId': '852806702714-hha82fck69qmatnl5ufm806hknfo7utf.apps.googleusercontent.com',
                      'offline': true
                    });

                  case 3:
                    gplusUser = _context2.sent;
                    _context2.t0 = this.afAuth.auth;
                    _context2.next = 7;
                    return firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(gplusUser);

                  case 7:
                    _context2.t1 = _context2.sent;
                    _context2.next = 10;
                    return _context2.t0.signInWithCredential.call(_context2.t0, _context2.t1);

                  case 10:
                    return _context2.abrupt("return", _context2.sent);

                  case 13:
                    _context2.prev = 13;
                    _context2.t2 = _context2["catch"](0);
                    //console.error(error);
                    this.mensajeServicio.alertaInformatica(_context2.t2);

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 13]]);
          }));
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this2 = this;

          try {
            this.fb.login(['public_profile', 'email']).then(function (res) {
              _this2.fb.api('me?fields=id,name,email,first_name', []).then(function (profile) {
                _this2.facebookData = {
                  email: profile['email'],
                  first_name: profile['first_name']
                };
                console.log(profile);
                _this2.habilitar = false;
                _this2.googlehabilitar = true;
                _this2.facebookhabilitar = true;

                _this2.registrarRedes(_this2.facebookData);
              });
            });
          } catch (_a) {
            this.mensajeServicio.alertaInformatica("lo sentimos no se pudo conectar a facebook");
          }
        }
      }, {
        key: "registrarRedes",
        value: function registrarRedes(valor) {
          this.usuarioservicio.redesSociales(valor);
        }
      }, {
        key: "emailLogin",
        value: function emailLogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _modal_email_modal_email_page__WEBPACK_IMPORTED_MODULE_9__["ModalEmailPage"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onDidDismiss();

                  case 7:
                    _ref = _context3.sent;
                    data = _ref.data;
                    console.log("data recibida", data.salir);

                    if (data.salir) {
                      this.ruta.navigateForward(['/terminos']);
                    } else {
                      this.ruta.navigateRoot(['/']);
                    }

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "aceptar",
        value: function aceptar() {
          return;
        }
      }]);

      return RegistrarInfoPage;
    }();

    RegistrarInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_8__["MensajesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    RegistrarInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registrar-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registrar-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registrar-info/registrar-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registrar-info.page.scss */
      "./src/app/registrar-info/registrar-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_8__["MensajesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], RegistrarInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=registrar-info-registrar-info-module-es5.js.map