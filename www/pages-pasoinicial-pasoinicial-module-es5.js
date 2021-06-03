function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pasoinicial-pasoinicial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pasoinicial/pasoinicial.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pasoinicial/pasoinicial.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPasoinicialPasoinicialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n  <ion-toolbar class=\"ion-no-border animated fadeIn delay-1s\">\n    <ion-title class=\"ion-text-center\">Paso {{contador}} de 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header class=\"ion-no-border animated fadeIn delay-1s\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Paso {{contador}} de 3</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\"   [scrollEvents]=\"true\">\n  <ion-progress-bar value=\"{{progressbar}}\" color=\"danger\" class=\"animated slideInLeft delay-1s\"></ion-progress-bar>\n  <!-- bajar -->\n  <ng-container *ngIf=\"ocultar\">\n    <ion-fab  vertical=\"top\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"contador == 2\">\n      <ion-fab-button color='danger' (click)=\"bajar()\">\n        <ion-icon name=\"arrow-down\" ></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n  \n  <!-- subir -->\n  <ng-container *ngIf=\"!ocultar\">\n    <ion-fab  vertical=\"top\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"contador == 2\">\n      <ion-fab-button color='danger' (click)=\"arriba()\">\n        <ion-icon name=\"arrow-up\" ></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n  \n\n\n\n  <ion-slides  [ngClass]=\"condicionalCss ? 'ion-slides' : 'ion-noslides' \"  #slide>\n  <!--   <ion-slide>\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row\">\n          <app-edad (cambiarPantalla)=\"cambiar($event)\"></app-edad>\n        </ion-row>\n      </ion-grid>\n    </ion-slide> -->\n\n    <ion-slide *ngIf=\"slideshow == 2\" >\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row\">\n          <app-estatura (cambiarPantalla)=\"cambiar($event)\" (progressbar)=\"progressbar = $event\" (back)=\"back($event)\"></app-estatura>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide *ngIf=\"slideshow == 3\" class=\"animated slideInLeft delay-1s\">\n            <app-historial  (cambiarPantalla)=\"cambiar($event)\" (siguientePantalla)=\"siguiente($event)\"></app-historial>\n    </ion-slide>\n\n    <ion-slide *ngIf=\"slideshow == 4\" class=\"animated slideInLeft delay-1s\">\n      <app-antecedentefmliar (cambiarPantalla)=\"cambiar($event)\"></app-antecedentefmliar>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/pasoinicial/pasoinicial-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/pasoinicial/pasoinicial-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PasoinicialPageRoutingModule */

  /***/
  function srcAppPagesPasoinicialPasoinicialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasoinicialPageRoutingModule", function () {
      return PasoinicialPageRoutingModule;
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


    var _pasoinicial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pasoinicial.page */
    "./src/app/pages/pasoinicial/pasoinicial.page.ts");

    var routes = [{
      path: '',
      component: _pasoinicial_page__WEBPACK_IMPORTED_MODULE_3__["PasoinicialPage"]
    }];

    var PasoinicialPageRoutingModule = function PasoinicialPageRoutingModule() {
      _classCallCheck(this, PasoinicialPageRoutingModule);
    };

    PasoinicialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PasoinicialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pasoinicial/pasoinicial.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pasoinicial/pasoinicial.module.ts ***!
    \*********************************************************/

  /*! exports provided: PasoinicialPageModule */

  /***/
  function srcAppPagesPasoinicialPasoinicialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasoinicialPageModule", function () {
      return PasoinicialPageModule;
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


    var _pasoinicial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pasoinicial-routing.module */
    "./src/app/pages/pasoinicial/pasoinicial-routing.module.ts");
    /* harmony import */


    var _pasoinicial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pasoinicial.page */
    "./src/app/pages/pasoinicial/pasoinicial.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PasoinicialPageModule = function PasoinicialPageModule() {
      _classCallCheck(this, PasoinicialPageModule);
    };

    PasoinicialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pasoinicial_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasoinicialPageRoutingModule"]],
      declarations: [_pasoinicial_page__WEBPACK_IMPORTED_MODULE_6__["PasoinicialPage"]]
    })], PasoinicialPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pasoinicial/pasoinicial.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pasoinicial/pasoinicial.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPasoinicialPasoinicialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.ion-slides {\n  height: 36rem;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.my-grid h2 {\n  font-size: 30px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFzb2luaWNpYWwvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xccGFzb2luaWNpYWxcXHBhc29pbmljaWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFzb2luaWNpYWwvcGFzb2luaWNpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NOOztBRFdFO0VBQ0UsYUFBQTtBQ1JKOztBRGFDO0VBQ0csdUJBQUE7QUNWSjs7QURXSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNUUjs7QURZQTtFQUNJLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNUSjs7QURrQkE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ2ZKOztBRGtCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0lBQ0EsNEJBQUE7RUNmTjtFRGlCRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLHdCQUFBO0VDZk47QUFDRjs7QURpQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUVBLDRCQUFBO0VDZk47RURpQkU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFFQSx3QkFBQTtFQ2ZOO0FBQ0Y7O0FEaUJBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFzb2luaWNpYWwvcGFzb2luaWNpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG5cblxuXG5cblxuXG5cblxuXG4gIC5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDM2cmVtO1xuICB9XG5cblxuICBcbiAubXktZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gfVxuLnBhcmVudC1yb3cge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuIH1cblxuXG5cblxuXG5cblxuLmFuaW1hY2lvbntcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodHtcbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApXG4gICAgfVxufVxuLmZhZGVJblJpZ2h0e1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluUmlnaHQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6ZmFkZUluUmlnaHRcbn0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMzZyZW07XG59XG5cbi5teS1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubXktZ3JpZCBoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYW5pbWFjaW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuLmZhZGVJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/pasoinicial/pasoinicial.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/pasoinicial/pasoinicial.page.ts ***!
    \*******************************************************/

  /*! exports provided: PasoinicialPage */

  /***/
  function srcAppPagesPasoinicialPasoinicialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasoinicialPage", function () {
      return PasoinicialPage;
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

    var PasoinicialPage =
    /*#__PURE__*/
    function () {
      function PasoinicialPage(navctrl) {
        _classCallCheck(this, PasoinicialPage);

        this.navctrl = navctrl;
        this.contador = 1;
        this.progreso = 1;
        this.condicionalCss = true;
        this.slideshow = 2;
        this.progressbar = 0.3;
        this.ocultar = true;
      }

      _createClass(PasoinicialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.slides.lockSwipes(true);
          console.log(this.condicionalCss);
        }
      }, {
        key: "cambiar",
        value: function cambiar(valor) {
          if (valor == 0) {
            //condicional para el diseño css
            this.condicionalCss = true; //condicional para el cambio de pantallas

            this.slides.lockSwipes(false);
            this.slides.slideTo(0); //logica de la barra superior

            this.contador = 1;

            if (valor < 2) {
              this.restarprogreso(3);
            } else {
              this.progresar(3);
              this.progresoReversa = this.contador;
            } //condicional para bloquear pantalla


            this.slides.lockSwipes(true);
          }

          if (valor == 1) {
            //condicional para el diseño css
            this.condicionalCss = true; //condicional para el cambio de pantallas

            /*  document.getElementById("slide2").classList.add('animacion','fadeInRight') */

            this.slideshow = 2;
            this.progressbar = 0.3;
            this.slides.lockSwipes(false);
            this.slides.slideTo(1); //logica de la barra superior

            this.contador = 1;

            if (this.progresoReversa >= 3) {
              this.restarprogreso(3);
            } else {
              this.progresar(3);
            }

            this.progresoReversa = this.contador; //condicional para bloquear pantalla

            this.slides.lockSwipes(true);
          }

          if (valor == 2) {
            //condicional del diseño css
            this.condicionalCss = false; //condicional para el cambio de pantallas

            /*  document.getElementById("slide3").classList.add('animacion','fadeInRight') */

            this.slideshow = 3;
            this.progressbar = 0.6;
            this.slides.lockSwipes(false);
            this.slides.slideTo(2); //logica para barra superior

            this.contador = 2;
            this.progresoReversa = this.contador;

            if (this.progresoReversa == 4) {
              this.restarprogreso(3);
            } else {
              this.progresar(3);
            } //condicional para bloquear pantalla


            this.slides.lockSwipes(true);
          }

          if (valor == 3) {
            document.getElementById("slide4").classList.add('animacion', 'fadeInRight');
            this.slides.lockSwipes(false);
            this.slides.slideTo(3);
            this.contador = 4;
            this.progresoReversa = this.contador;
            this.progresar(2);
            this.contadordos = 5;
          }

          if (valor == 4) {
            this.slides.lockSwipes(false);
            this.slides.slideTo(2);
            this.contador = 3;
            this.progresoReversa = this.contador;
            this.restarprogreso(2);
          }
        }
      }, {
        key: "progresar",
        value: function progresar(valor) {
          this.progreso += valor;
        }
      }, {
        key: "restarprogreso",
        value: function restarprogreso(valor) {
          this.progreso -= valor;
        }
      }, {
        key: "back",
        value: function back(event) {
          this.navctrl.back();
        }
      }, {
        key: "siguiente",
        value: function siguiente(event) {
          this.contador++;
          this.progressbar = 1;
          this.slideshow++;
        }
      }, {
        key: "bajar",
        value: function bajar() {
          this.content.scrollToBottom(1500);
          this.ocultar = false;
        }
      }, {
        key: "arriba",
        value: function arriba() {
          this.content.scrollToTop(1500);
          this.ocultar = true;
        }
      }]);

      return PasoinicialPage;
    }();

    PasoinicialPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], PasoinicialPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slide', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], PasoinicialPage.prototype, "slides", void 0);
    PasoinicialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pasoinicial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pasoinicial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pasoinicial/pasoinicial.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pasoinicial.page.scss */
      "./src/app/pages/pasoinicial/pasoinicial.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PasoinicialPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pasoinicial-pasoinicial-module-es5.js.map