function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestCapacidad-mensajecapacidad-mensajecapacidad-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestCapacidadMensajecapacidadMensajecapacidadPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n\n<ion-content fullscreen  scroll-y=\"false\">\n  <ion-slides style=\"margin-top: -1rem;\">\n    <ion-slide>\n      <div class=\"slide\">\n        <img src=\"assets/img/testcapacidad2.jpg\" style=\"margin-bottom: 0px; padding-bottom: 0px; max-width: 100%;\"/>\n        <h2 class=\"titulo\">\n         <b> ¡Felicidades!</b></h2>\n\n     <!--     <ion-card  style=\"\n         width: 286px; \n         border-radius: 10px;\n         text-transform: uppercase;\n         font-family: 'Open Sans';\n         --background: red\n         \">\n       <h2 style=\"color:white; margin: 10px; text-align: center;\">{{nivel}}</h2> \n      </ion-card> -->\n      <h2 class=\"titulo\" style=\"margin-top: 1rem;    margin-bottom: -10px;\">\n        <b> Su nivel es <b style=\"color: red;\"> {{nivel}}</b></b></h2>\n         \n        <!-- <ion-button expand=\"block\" style=\"    --background: red;\n        font-size: 1rem;\n        margin: 0 auto;\n        width: 286px;\n        height: 59px;\n        --border-radius: 10px;\">\n        <b>  {{nivel}}</b>\n        </ion-button> -->\n\n\n        <p class=\"mensajepersonalizado\">{{mensaje}}</p>\n      </div>\n    \n      <ion-card  style=\"\n      width: 286px; \n      border-radius: 10px;\n      text-transform: uppercase;\n      font-family: 'Open Sans';\n      \"\n    color=\"danger\"\n   (click)=\"finalizar()\">\n    <h2 style=\"margin: 10px; text-align: center;\">\n      <b>Finalizar</b>\n    </h2> \n   </ion-card>\n\n      <!-- <ion-button  color=\"dark\" expand=\"block\"  (click)=\"finalizar()\" style=\"\n      font-size: 1rem;\n      margin: 0 auto;\n      text-transform: uppercase;\n      font-family: 'Open Sans';\n      width: 286px;\n      height: 59px;\n      --border-radius: 10px;\">\n         <b> Finalizar</b>\n        </ion-button> -->\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>  ";
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MensajecapacidadPageRoutingModule */

  /***/
  function srcAppPagesTestCapacidadMensajecapacidadMensajecapacidadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajecapacidadPageRoutingModule", function () {
      return MensajecapacidadPageRoutingModule;
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


    var _mensajecapacidad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mensajecapacidad.page */
    "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.ts");

    var routes = [{
      path: '',
      component: _mensajecapacidad_page__WEBPACK_IMPORTED_MODULE_3__["MensajecapacidadPage"]
    }];

    var MensajecapacidadPageRoutingModule = function MensajecapacidadPageRoutingModule() {
      _classCallCheck(this, MensajecapacidadPageRoutingModule);
    };

    MensajecapacidadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MensajecapacidadPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: MensajecapacidadPageModule */

  /***/
  function srcAppPagesTestCapacidadMensajecapacidadMensajecapacidadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajecapacidadPageModule", function () {
      return MensajecapacidadPageModule;
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


    var _mensajecapacidad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mensajecapacidad-routing.module */
    "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad-routing.module.ts");
    /* harmony import */


    var _mensajecapacidad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mensajecapacidad.page */
    "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.ts");

    var MensajecapacidadPageModule = function MensajecapacidadPageModule() {
      _classCallCheck(this, MensajecapacidadPageModule);
    };

    MensajecapacidadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mensajecapacidad_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajecapacidadPageRoutingModule"]],
      declarations: [_mensajecapacidad_page__WEBPACK_IMPORTED_MODULE_6__["MensajecapacidadPage"]]
    })], MensajecapacidadPageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestCapacidadMensajecapacidadMensajecapacidadPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n/*logo*/\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n/*fin logo*/\n\nion-slides {\n  height: 100%;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 1.5rem;\n}\n\n@media (max-width: 370px) {\n  .swiper-slide h2 {\n    margin-top: 0.5rem;\n  }\n}\n\n.mensajepersonalizado {\n  font-size: 18px;\n}\n\n@media (max-width: 370px) {\n  .mensajepersonalizado {\n    font-size: 0.8125rem;\n  }\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n  margin-top: 0;\n}\n\n@media (max-width: 370px) {\n  .swiper-slide img {\n    margin-top: 0;\n  }\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 20px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdENhcGFjaWRhZC9tZW5zYWplY2FwYWNpZGFkL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXFRlc3RDYXBhY2lkYWRcXG1lbnNhamVjYXBhY2lkYWRcXG1lbnNhamVjYXBhY2lkYWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0Q2FwYWNpZGFkL21lbnNhamVjYXBhY2lkYWQvbWVuc2FqZWNhcGFjaWRhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEU0UsT0FBQTs7QUFDRjtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0EsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURRQSxXQUFBOztBQUdBO0VBQ0ksWUFBQTtBQ1BKOztBRFVFO0VBQ0UsY0FBQTtFQUNDLFVBQUE7QUNQTDs7QURVRztFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDUEg7O0FEVUc7RUFDQyxZQUFBO0VBQ0EseUJBQUE7QUNQSjs7QURVRTtFQUNFLGNBQUE7QUNQSjs7QURTRTtFQUNFLGtCQUFBO0FDTko7O0FEekNJO0VBOENGO0lBR0ksa0JBQUE7RUNKSjtBQUNGOztBRE1FO0VBQ0UsZUFBQTtBQ0hKOztBRGxESTtFQW9ERjtJQUdJLG9CQUFBO0VDREo7QUFDRjs7QURJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNESjs7QUQvREk7RUEyREY7SUFPSSxhQUFBO0VDQ0o7QUFDRjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNBSjs7QURHRTtFQUNFLHFDQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvVGVzdENhcGFjaWRhZC9tZW5zYWplY2FwYWNpZGFkL21lbnNhamVjYXBhY2lkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuXG4gIEBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDozNzBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuXG4gIC8qbG9nbyovXG4ubG9nb3tcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmF7XG5tYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLypmaW4gbG9nbyovXG5cblxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgaW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgIHdpZHRoOiA4MCU7XG4gICB9XG4gICBcbiAgIGlvbi1jYXJkOmhvdmVye1xuICAgdHJhbnNpdGlvbjogMC4xcztcbiAgIG9wYWNpdHk6IDAuNTtcbiAgIH1cblxuICAgLmNvbG9yLXRhcmpldGF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBAaW5jbHVkZSB0ZWxlZm9uby1yZXNwb25zaXZvKCl7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG4gIH1cbiAgLm1lbnNhamVwZXJzb25hbGl6YWRve1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBAaW5jbHVkZSB0ZWxlZm9uby1yZXNwb25zaXZvKCl7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICB9XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTAlO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMDsgIFxuICAgIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICAgIG1hcmdpbi10b3A6MDsgIFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBwIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG4gIH1cblxuICBwIGIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG4gIH1cblxuICAudGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi8qbG9nbyovXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLypmaW4gbG9nbyovXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbG9yLXRhcmpldGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cbn1cblxuLm1lbnNhamVwZXJzb25hbGl6YWRvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5tZW5zYWplcGVyc29uYWxpemFkbyB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIH1cbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cblxucCBiIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: MensajecapacidadPage */

  /***/
  function srcAppPagesTestCapacidadMensajecapacidadMensajecapacidadPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajecapacidadPage", function () {
      return MensajecapacidadPage;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MensajecapacidadPage =
    /*#__PURE__*/
    function () {
      function MensajecapacidadPage(capturar, ruta, apiService, notificacion) {
        _classCallCheck(this, MensajecapacidadPage);

        this.capturar = capturar;
        this.ruta = ruta;
        this.apiService = apiService;
        this.notificacion = notificacion;
      }

      _createClass(MensajecapacidadPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataRecibida = this.capturar.snapshot.paramMap.get('id');
          this.contador = parseInt(this.dataRecibida);
          console.log("LO QUE HIZO EL USUARIO", this.contador);

          if (this.contador <= 3) {
            this.nivel = 'Básico';
            this.mensaje = "Felicidades por empezar un nuevo estilo de vida con hábitos saludables, mucho esfuerzo para alcanzar el siguiente nivel.";
          } // else if(this.contador >= 4 && this.contador <= 7){
          //   this.nivel = 'Principiante';
          //   this.mensaje ="Sigue esforzándote y continua esta carrera con mucha disciplina en tu plan, estás a un nivel de tener grandes cambios."
          // }
          else if (this.contador >= 4 && this.contador <= 7) {
              this.nivel = 'Intermedio';
              this.mensaje = "Excelente estás a mitad de la carrera, un poco más de esfuerzo y dedicación para llegar a un nivel envidiable.";
            } else if (this.contador >= 8 && this.contador <= 11) {
              this.nivel = 'Avanzado';
              this.mensaje = "No estás aquí por casualidad, muchas sesiones de entreno duro has pasado, ahora enfocate en dar tu máximo, solo así llegarás al siguiente nivel.";
            } else if (this.contador >= 12) {
              this.nivel = 'Pro';
              this.mensaje = "Estás en una minoría privilegiada, que llevan el fitness cómo estilo de vida, admiración, aplausos y solo yendo al límite podrás alcanzar un nivel insuperable.";
            }
        }
      }, {
        key: "finalizar",
        value: function finalizar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var validar;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.apiService.TestHome(this.contador);

                  case 2:
                    validar = _context.sent;

                    if (validar) {
                      // no es la forma pero no se me actualizaba el ngIf por la parte del tab / tuve que remover desde aca
                      // igual cuando el usuario se desconecta y regresa el ngif oculta la ventana
                      // document.getElementById("ocultar").remove()
                      this.ruta.navigateRoot(["/tabs/dashboard"]);
                      this.notificacion.notificacionUsuario("Gracias por realizar el test", "dark");
                    } else {
                      this.notificacion.notificacionUsuarioFinalizar("Ocurrio un error, revise su conexión", "primary");
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MensajecapacidadPage;
    }();

    MensajecapacidadPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }];
    };

    MensajecapacidadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mensajecapacidad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mensajecapacidad.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mensajecapacidad.page.scss */
      "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])], MensajecapacidadPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestCapacidad-mensajecapacidad-mensajecapacidad-module-es5.js.map