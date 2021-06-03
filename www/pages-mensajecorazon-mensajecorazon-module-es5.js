function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mensajecorazon-mensajecorazon-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mensajecorazon/mensajecorazon.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mensajecorazon/mensajecorazon.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMensajecorazonMensajecorazonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border animated fadeIn delay-1s\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\" class=\"animated fadeIn delay-1s\">\n\n  <div class=\"contenedor\">\n\n    <div>\n    <h1 class=\"titulo ion-margin-bottom\">{{titulo}}</h1>\n    </div>\n    \n   <ion-card color=\"danger\" class=\"ion-margin-bottom \" style=\"    --background: red;\n   font-size: 1rem;\n   margin: 0 auto;\n   width: 286px;\n   --border-radius: 10px;\">\n    <h1 class=\"ion-padding\" style=\" position: relative;\n    margin: 10px; font-size: 25px; margin: 0;\">{{mensaje}}</h1>\n   </ion-card>\n\n\n  </div>\n\n\n  <ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n    <ion-fab-button color=\"danger\" (click)=\"siguiente()\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/mensajecorazon/mensajecorazon-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/mensajecorazon/mensajecorazon-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: MensajecorazonPageRoutingModule */

  /***/
  function srcAppPagesMensajecorazonMensajecorazonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajecorazonPageRoutingModule", function () {
      return MensajecorazonPageRoutingModule;
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


    var _mensajecorazon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mensajecorazon.page */
    "./src/app/pages/mensajecorazon/mensajecorazon.page.ts");

    var routes = [{
      path: '',
      component: _mensajecorazon_page__WEBPACK_IMPORTED_MODULE_3__["MensajecorazonPage"]
    }];

    var MensajecorazonPageRoutingModule = function MensajecorazonPageRoutingModule() {
      _classCallCheck(this, MensajecorazonPageRoutingModule);
    };

    MensajecorazonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MensajecorazonPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mensajecorazon/mensajecorazon.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/mensajecorazon/mensajecorazon.module.ts ***!
    \***************************************************************/

  /*! exports provided: MensajecorazonPageModule */

  /***/
  function srcAppPagesMensajecorazonMensajecorazonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajecorazonPageModule", function () {
      return MensajecorazonPageModule;
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


    var _mensajecorazon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mensajecorazon-routing.module */
    "./src/app/pages/mensajecorazon/mensajecorazon-routing.module.ts");
    /* harmony import */


    var _mensajecorazon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mensajecorazon.page */
    "./src/app/pages/mensajecorazon/mensajecorazon.page.ts");

    var MensajecorazonPageModule = function MensajecorazonPageModule() {
      _classCallCheck(this, MensajecorazonPageModule);
    };

    MensajecorazonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mensajecorazon_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajecorazonPageRoutingModule"]],
      declarations: [_mensajecorazon_page__WEBPACK_IMPORTED_MODULE_6__["MensajecorazonPage"]]
    })], MensajecorazonPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mensajecorazon/mensajecorazon.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/mensajecorazon/mensajecorazon.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMensajecorazonMensajecorazonPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-datos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 80%;*/\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 39px;\n  opacity: 0.7;\n  margin-bottom: 20px;\n  color: #E5141A;\n  padding: 10px;\n}\n\n.imagen {\n  width: 130px;\n  height: 130px;\n  border-radius: 5px;\n}\n\n.tarjeta {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.letra {\n  padding-left: 35px;\n  padding-right: 35px;\n  font-size: 18px;\n  text-align: center;\n  opacity: 0.7;\n  margin-bottom: 5%;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.mensaje {\n  font-size: 11px;\n  opacity: 0.5;\n  text-align: center;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n\n.color-tarjeta {\n  background-color: #E5141A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVuc2FqZWNvcmF6b24vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbWVuc2FqZWNvcmF6b25cXG1lbnNhamVjb3Jhem9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVuc2FqZWNvcmF6b24vbWVuc2FqZWNvcmF6b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBR0csc0JBQUE7QUNDTDs7QURFRTtFQUNFLHFCQUFBO0VBQ0E7Ozs7d0JBQUE7QUNLSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0NKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE9FO0VBQ0ksNkJBQUE7QUNKTjs7QURPRTtFQUNFLHVCQUFBO0FDSko7O0FETUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDSEo7O0FETUM7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUM7RUFDRSxjQUFBO0VBQ0MsVUFBQTtBQ0hKOztBRE1DO0VBQ0Msd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRDs7QURNQTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtBQ0hEOztBRE1BO0VBQ0kseUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnNhamVjb3Jhem9uL21lbnNhamVjb3Jhem9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG4gIH1cbiAgXG4gICp7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZjZmNmYztcbiAgICAvKlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlOyovXG4gIH1cbiAgXG4gIGlvbi1pbnB1dHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGJveC1zaGFkb3c6IDNweCA3cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgfVxuXG5cbiAgLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cbiAgXG4gIC5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY29udGVuZWRvcntcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiBcbiAgLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzOXB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjRTUxNDFBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuIFxuXG4uaW1hZ2Vue1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhcmpldGF7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG5cbiAgaW9uLWNvbHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gfVxuLnBhcmVudC1yb3cge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuIH1cblxuIC5sZXRyYXtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiB9XG5cbiBpb24tY2FyZHtcbiAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiBpb24tY2FyZDpob3ZlcntcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVuc2FqZXtcbiBmb250LXNpemU6IDExcHg7XG4gb3BhY2l0eTogMC41O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yLXRhcmpldGF7XG4gY29sb3I6IHdoaXRlO1xuIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb2xvci10YXJqZXRhe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTE0MUE7XG4gIH0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAlOyovXG59XG5cbmlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI0U1MTQxQTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFyamV0YSB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGV0cmEge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1lbnNhamUge1xuICBmb250LXNpemU6IDExcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sb3ItdGFyamV0YSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmNvbG9yLXRhcmpldGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUxNDFBO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mensajecorazon/mensajecorazon.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/mensajecorazon/mensajecorazon.page.ts ***!
    \*************************************************************/

  /*! exports provided: MensajecorazonPage */

  /***/
  function srcAppPagesMensajecorazonMensajecorazonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajecorazonPage", function () {
      return MensajecorazonPage;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var MensajecorazonPage =
    /*#__PURE__*/
    function () {
      function MensajecorazonPage(ruta, ApiService, alertController) {
        _classCallCheck(this, MensajecorazonPage);

        this.ruta = ruta;
        this.ApiService = ApiService;
        this.alertController = alertController;
      }

      _createClass(MensajecorazonPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("mensaje latido", this.ApiService.latidocorazon);
          console.log("mensaje riesgo", this.ApiService.risk);

          if (this.ApiService.latidocorazon === 3) {
            this.titulo = "Excelente!", this.mensaje = "Felicidades, tú frecuencia cardíaca está excelente según tu edad y tú género"; // ¡Felicitaciones!
          }

          if (this.ApiService.latidocorazon === 2) {
            this.titulo = "Buena", this.mensaje = "Felicidades, tú frecuencia cardíaca en reposo es buena según tu edad y tú género."; // ¡Estupendo!
          }

          if (this.ApiService.latidocorazon === 1) {
            this.titulo = "Normal", this.mensaje = "Tú frecuencia cardíaca es promedio según tu edad y tú género."; // ¡Muy bien!,
          }

          if (this.ApiService.latidocorazon === 0) {
            this.titulo = "Mala", this.mensaje = "Tú frecuencia cardíaca está mal según tu edad y tú género."; // Con esfuerzo todo se puede, ¡A trabajar!,
          }
        }
      }, {
        key: "siguiente",
        value: function siguiente() {
          if (this.ApiService.latidocorazon === 3) {
            this.ruta.navigateRoot(["/planes-pagos"]);
          }

          if (this.ApiService.latidocorazon === 2) {
            this.ruta.navigateRoot(["/planes-pagos"]);
          }

          if (this.ApiService.latidocorazon === 1) {
            this.ruta.navigateRoot(["/planes-pagos"]);
          }

          if (this.ApiService.latidocorazon === 0) {
            //this.ApiService.desconectarUsuario();
            // this.presentAlert();
            //this.ruta.navigateRoot(["/"]);
            this.ruta.navigateRoot(["/planes-pagos"]); // return;
          }

          if (this.ApiService.risk > 1) {
            this.ApiService.desconectarUsuario();
            this.presentAlert2();
            this.ruta.navigateRoot(["/"]);
            return;
          }
        } // mensaje del corazon

      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: "Fittech",
                      cssClass: "customMensaje",
                      message: "Lo sentimos, lo más que queremos es ayudarte, pero no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.",
                      buttons: [{
                        text: "Ok",
                        cssClass: "confirmButton"
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
        }
      }, {
        key: "presentAlert2",
        value: function presentAlert2() {
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
                      header: "Fittech",
                      cssClass: "customMensaje",
                      message: "Lo sentimos, aunque tú frecuencia cardíaca este bien tienes un riesgo alto y no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.",
                      buttons: [{
                        text: "Ok",
                        cssClass: "confirmButton"
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

      return MensajecorazonPage;
    }();

    MensajecorazonPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    MensajecorazonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-mensajecorazon",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mensajecorazon.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mensajecorazon/mensajecorazon.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mensajecorazon.page.scss */
      "./src/app/pages/mensajecorazon/mensajecorazon.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], MensajecorazonPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-mensajecorazon-mensajecorazon-module-es5.js.map