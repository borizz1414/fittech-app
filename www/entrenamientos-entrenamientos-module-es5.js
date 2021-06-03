function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrenamientos-entrenamientos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entrenamientos/entrenamientos.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entrenamientos/entrenamientos.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntrenamientosEntrenamientosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <app-back-btn defaultHref=\"tabs/dashboard\"></app-back-btn>\r\n    </ion-buttons>\r\n    <div class=\"cabezera\">\r\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- cabezera -->\r\n\r\n<ion-content fullscreen>\r\n\r\n  <div *ngIf=\"ocultar\">\r\n\r\n    <!-- titulo -->\r\n    <div class=\"ion-text-center\" style=\"padding: 1rem;\">\r\n      Esta rutina tiene una duración de <span style=\"color:red; font-weight: bold;\">{{minutos}}:00</span>\r\n    </div>\r\n\r\n    <ion-list *ngIf=\"stage1.length > 0\" style=\"padding-top: 0px;\">\r\n      <p class=\"ion-text-center opci incrementar\"><b> Secuencia <span style=\"color:red\"> 1 </span> </b>\r\n        <!-- <b style=\"color: #ff0000;\"> X </b>  <b>{{stage1.totalRepeat}}</b> -->\r\n      </p>\r\n      <p class=\"ion-text-left opci\"><b>Series a completar</b> <b style=\"color:red\"> {{ calculateRepetitions(1) }} </b>\r\n        <!-- <b style=\"color: #ff0000;\"> X </b>  <b>{{stage1.totalRepeat}}</b> -->\r\n      </p>\r\n\r\n      <ion-item *ngFor=\"let ejercicio of stage1; trackBy: customTB\">\r\n\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"https://smartbunnypruebas.com/imagenes/{{ejercicio.cod}}/{{ejercicio.id}}.jpg\">\r\n        </ion-thumbnail>\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h2>{{ucFirst(ejercicio.name) }}</h2>\r\n        </ion-label>\r\n        <!--  <ion-badge color=\"danger\" style=\"position: absolute;top: 0;\">1 x {{ejercicio.repeat}}</ion-badge> -->\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"mostrarpop($event, ejercicio)\">\r\n            <ion-icon slot=\"start\" md=\"ellipsis-horizontal\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"stage2.length > 0\">\r\n      <p class=\"ion-text-center opci incrementar\"><b> Secuencia <span style=\"color:red\"> 2 </span> </b>\r\n        <!--  <b style=\"color: red;\"> X </b>  <b>{{stage2.totalRepeat}}</b> -->\r\n      </p>\r\n      <p class=\"ion-text-left opci\"><b>Series a completar</b> <b style=\"color:red\"> {{ calculateRepetitions(2) }} </b>\r\n        <!-- <b style=\"color: #ff0000;\"> X </b>  <b>{{stage1.totalRepeat}}</b> -->\r\n      </p>\r\n\r\n      <ion-item *ngFor=\"let ejercicio of stage2; trackBy: customTB\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"https://smartbunnypruebas.com/imagenes/{{ejercicio.cod}}/{{ejercicio.id}}.jpg\">\r\n        </ion-thumbnail>\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h2>{{ucFirst(ejercicio.name) }}</h2>\r\n        </ion-label>\r\n        <!--  <ion-badge color=\"danger\" style=\"position: absolute;top: 0;\">1 x {{ejercicio.repeat}}</ion-badge> -->\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"mostrarpop($event, ejercicio)\">\r\n            <ion-icon slot=\"start\" md=\"ellipsis-horizontal\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"stage3.length > 0\">\r\n      <p class=\"ion-text-center opci incrementar\"><b> Secuencia <span style=\"color:red\"> 3 </span> </b>\r\n        <!-- <b style=\"color: red;\"> X </b>  <b>{{stage3.totalRepeat}}</b> -->\r\n      </p>\r\n      <p class=\"ion-text-left opci\"><b>Series a completar</b> <b style=\"color:red\"> {{ calculateRepetitions(3) }} </b>\r\n        <!-- <b style=\"color: #ff0000;\"> X </b>  <b>{{stage1.totalRepeat}}</b> -->\r\n      </p>\r\n\r\n      <ion-item *ngFor=\"let ejercicio of stage3; trackBy: customTB\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img src=\"https://smartbunnypruebas.com/imagenes/{{ejercicio.cod}}/{{ejercicio.id}}.jpg\">\r\n        </ion-thumbnail>\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h2>{{ucFirst(ejercicio.name) }}</h2>\r\n        </ion-label>\r\n        <!--  <ion-badge color=\"danger\" style=\"position: absolute;top: 0;\">1 x {{ejercicio.repeat}}</ion-badge> -->\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"mostrarpop($event, ejercicio)\">\r\n            <ion-icon slot=\"start\" md=\"ellipsis-horizontal\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"!ocultar\">\r\n    <p class=\"ion-text-center\">Complete los test para cargar las rutinas</p>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" shape=\"round\" (click)=\"comenzar()\" class=\"float\">\r\n    <b> ¡Comenzar!</b>\r\n  </ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/entrenamientos/entrenamientos-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/entrenamientos/entrenamientos-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EntrenamientosPageRoutingModule */

  /***/
  function srcAppEntrenamientosEntrenamientosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntrenamientosPageRoutingModule", function () {
      return EntrenamientosPageRoutingModule;
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


    var _entrenamientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entrenamientos.page */
    "./src/app/entrenamientos/entrenamientos.page.ts");

    var routes = [{
      path: '',
      component: _entrenamientos_page__WEBPACK_IMPORTED_MODULE_3__["EntrenamientosPage"]
    }];

    var EntrenamientosPageRoutingModule = function EntrenamientosPageRoutingModule() {
      _classCallCheck(this, EntrenamientosPageRoutingModule);
    };

    EntrenamientosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EntrenamientosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/entrenamientos/entrenamientos.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/entrenamientos/entrenamientos.module.ts ***!
    \*********************************************************/

  /*! exports provided: EntrenamientosPageModule */

  /***/
  function srcAppEntrenamientosEntrenamientosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntrenamientosPageModule", function () {
      return EntrenamientosPageModule;
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


    var _entrenamientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entrenamientos-routing.module */
    "./src/app/entrenamientos/entrenamientos-routing.module.ts");
    /* harmony import */


    var _entrenamientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entrenamientos.page */
    "./src/app/entrenamientos/entrenamientos.page.ts");
    /* harmony import */


    var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/popinfo/popinfo.component */
    "./src/app/components/popinfo/popinfo.component.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");

    var EntrenamientosPageModule = function EntrenamientosPageModule() {
      _classCallCheck(this, EntrenamientosPageModule);
    };

    EntrenamientosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _entrenamientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntrenamientosPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]],
      declarations: [_entrenamientos_page__WEBPACK_IMPORTED_MODULE_6__["EntrenamientosPage"]]
    })], EntrenamientosPageModule);
    /***/
  },

  /***/
  "./src/app/entrenamientos/entrenamientos.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/entrenamientos/entrenamientos.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntrenamientosEntrenamientosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.footer-md::before {\n  display: none;\n}\n/*fin logo*/\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  margin-right: 5px;\n}\nion-thumbnail img {\n  width: auto !important;\n  height: auto !important;\n}\n.contenedor-padre {\n  overflow: hidden;\n}\n.float {\n  --background: rgb(243, 36, 21);\n  font-size: 1.4rem;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n  margin: 10px auto;\n  height: 3rem;\n  padding: 0 7rem;\n  --border-radius: 10px;\n}\n.my-float {\n  margin-top: 22px;\n}\nion-item {\n  --padding-end:0px !important;\n  --padding-start:0px !important;\n}\nion-buttons {\n  padding: 0px !important;\n  margin: 0px !important;\n}\np.ion-text-center.opc {\n  opacity: 0.7;\n}\n.ion-text-center.opci {\n  text-align: center;\n  opacity: 0.7;\n  padding-left: 10px;\n}\n.ion-text-left.opci {\n  text-align: left !important;\n  opacity: 0.7;\n  padding-left: 10px;\n}\n.incrementar {\n  font-size: 1.2rem;\n}\n.ion-text-wrap h2 {\n  /*  text-transform: capitalize; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmVuYW1pZW50b3MvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxlbnRyZW5hbWllbnRvc1xcZW50cmVuYW1pZW50b3MucGFnZS5zY3NzIiwic3JjL2FwcC9lbnRyZW5hbWllbnRvcy9lbnRyZW5hbWllbnRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNFLGFBQUE7QUNDRjtBREVBLFdBQUE7QUFhQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ1hGO0FEZ0JBO0VBQ0UsZ0JBQUE7QUNiRjtBRGdCQTtFQUNFLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ2RGO0FEaUJBO0VBQ0EsZ0JBQUE7QUNkQTtBRGlCQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUNkQTtBRGlCQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNkQTtBRGdCQTtFQUNFLFlBQUE7QUNiRjtBRGVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGNBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNYRjtBRGNBO0VBQ0UsaUJBQUE7QUNYRjtBRGVBO0VBQ0MsaUNBQUE7QUNaRCIsImZpbGUiOiJzcmMvYXBwL2VudHJlbmFtaWVudG9zL2VudHJlbmFtaWVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmF7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb290ZXItbWQ6OmJlZm9yZXtcbiAgZGlzcGxheTpub25lO1xufVxuXG4vKmZpbiBsb2dvKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuXG5cbi5jb250ZW5lZG9yLXBhZHJle1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmxvYXR7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMzYsIDIxKTtcbiBcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMCA3cmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5teS1mbG9hdHtcbm1hcmdpbi10b3A6MjJweDtcbn1cblxuaW9uLWl0ZW17XG4tLXBhZGRpbmctZW5kOjBweCAhaW1wb3J0YW50O1xuLS1wYWRkaW5nLXN0YXJ0OjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uc3tcbnBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xubWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbnAuaW9uLXRleHQtY2VudGVyLm9wYyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5pb24tdGV4dC1jZW50ZXIub3BjaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaW9uLXRleHQtbGVmdC5vcGNpIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmluY3JlbWVudGFye1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuXG4uaW9uLXRleHQtd3JhcCBoMiB7XG4gLyogIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyAqL1xufSIsIi8qbG9nbyovXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLypmaW4gbG9nbyovXG5pb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW5lZG9yLXBhZHJlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZsb2F0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAzNiwgMjEpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiAwIDdyZW07XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm15LWZsb2F0IHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctZW5kOjBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnAuaW9uLXRleHQtY2VudGVyLm9wYyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmlvbi10ZXh0LWNlbnRlci5vcGNpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmlvbi10ZXh0LWxlZnQub3BjaSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC43O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pbmNyZW1lbnRhciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaW9uLXRleHQtd3JhcCBoMiB7XG4gIC8qICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgKi9cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/entrenamientos/entrenamientos.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/entrenamientos/entrenamientos.page.ts ***!
    \*******************************************************/

  /*! exports provided: EntrenamientosPage */

  /***/
  function srcAppEntrenamientosEntrenamientosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntrenamientosPage", function () {
      return EntrenamientosPage;
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


    var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/popinfo/popinfo.component */
    "./src/app/components/popinfo/popinfo.component.ts");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");

    var EntrenamientosPage =
    /*#__PURE__*/
    function () {
      function EntrenamientosPage(ruta, alertController, ApiService, popoverController, notificacion) {
        _classCallCheck(this, EntrenamientosPage);

        this.ruta = ruta;
        this.alertController = alertController;
        this.ApiService = ApiService;
        this.popoverController = popoverController;
        this.notificacion = notificacion;
        this.serie = {};
        this.stage1 = [];
        this.stage2 = [];
        this.stage3 = [];
        this.ocultar = false;
      } // logica


      _createClass(EntrenamientosPage, [{
        key: "calculateRepetitions",
        value: function calculateRepetitions(stage) {
          return this.serie.filter(function (value) {
            return value.stage === stage;
          }).length;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //ratio es la duracion de cada ejercicio ratio w
          this.a = this.ApiService.ratio;
          console.log(this.a); //  obtener longitud de un objecto

          this.b = Object.keys(this.ApiService.rutina).length;
          console.log(this.b); //  obtener el tiempo de descanso

          this.c = this.ApiService.rest;
          console.log(this.c); //  total de duracion

          this.resultado = this.a * this.b;
          this.resultado2 = this.c * this.b; // conversio de segundo a minutos

          this.minutos = Math.round((this.resultado + this.resultado2) / 60);
          this.serie = this.ApiService.rutina;
          this.stage1 = this.serie.filter(function (value) {
            return value.stage === 1;
          });
          this.stage2 = this.serie.filter(function (value) {
            return value.stage === 2;
          });
          this.stage3 = this.serie.filter(function (value) {
            return value.stage === 3;
          }); //comprobar si el stage 3 es vacia

          console.log(this.stage3);

          if (Object.keys(this.serie).length === 0) {
            this.ocultar = false;
          } else {
            this.ocultar = true;
          }

          var filteredExcersice = [];
          this.stage1.forEach(function (category) {
            if (!filteredExcersice.find(function (cat) {
              return cat.name == category.name;
            })) {
              var excersice = {
                name: category.name,
                url: category.url,
                cod: category.cod,
                id: category.id,
                repeat: 0
              };
              filteredExcersice.push(excersice);
            } else {
              var index = filteredExcersice.findIndex(function (rutine) {
                return rutine.name === category.name;
              });
              filteredExcersice[index].repeat++;
            }
          });
          this.stage1 = filteredExcersice;
          filteredExcersice = [];
          this.stage2.forEach(function (category) {
            if (!filteredExcersice.find(function (cat) {
              return cat.name == category.name;
            })) {
              var excersice = {
                name: category.name,
                url: category.url,
                cod: category.cod,
                id: category.id,
                repeat: 0
              };
              filteredExcersice.push(excersice);
            } else {
              var index = filteredExcersice.findIndex(function (rutine) {
                return rutine.name === category.name;
              });
              filteredExcersice[index].repeat++;
            }
          });
          this.stage2 = filteredExcersice;
          filteredExcersice = [];
          this.stage3.forEach(function (category) {
            if (!filteredExcersice.find(function (cat) {
              return cat.name == category.name;
            })) {
              var excersice = {
                name: category.name,
                url: category.url,
                cod: category.cod,
                id: category.id,
                repeat: 0,
                repetitions: category.repetitions
              };
              filteredExcersice.push(excersice);
            } else {
              var index = filteredExcersice.findIndex(function (rutine) {
                return rutine.name === category.name;
              });
              filteredExcersice[index].repeat++;
            }
          });
          this.stage3 = filteredExcersice;
          var result = 0;

          for (var i in this.stage1) {
            result = result + this.stage1[i].repeat;
          }

          console.log(result);
          this.stage1.totalRepeat = result;
          result = 0;

          for (var _i in this.stage2) {
            result = result + this.stage2[_i].repeat;
          }

          this.stage2.totalRepeat = result;
          result = 0;

          for (var _i2 in this.stage3) {
            result = result + this.stage3[_i2].repeat;
          }

          this.stage3.totalRepeat = result;
          result = 0;
          filteredExcersice = [];
          console.log(this.stage1);
        } // actualizar

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stage1 = [];
          this.stage2 = [];
          this.stage3 = [];
          console.log(this.stage1);
          this.presentAlert();
        }
      }, {
        key: "ucFirst",
        value: function ucFirst(str) {
          /*   str = str.replace(/ /g, "."); */
          return str.substring(0, 1).toUpperCase() + str.substring(1);
        }
      }, {
        key: "comenzar",
        value: function comenzar() {
          // this.ruta.navigateForward("calentamientodos")
          this.ruta.navigateForward("calentamiento-info");
        }
      }, {
        key: "mostrarpop",
        value: function mostrarpop(evento, excersice) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_4__["PopinfoComponent"],
                      showBackdrop: false,
                      event: evento,
                      componentProps: {
                        excersice: excersice
                      }
                    });

                  case 2:
                    popover = _context.sent;
                    this.ApiService.ejerciciodemostrado(excersice.name, excersice.repetition, excersice.id);
                    _context.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "customTB",
        value: function customTB(item) {
          return item.id;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
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
                      message: "Recuerda verificar los ejercicios para saber si cuentas con el implemento requerido, sino, puedes reemplazarlo por otro tocando los °°°",
                      buttons: [{
                        text: "Continuar",
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

      return EntrenamientosPage;
    }();

    EntrenamientosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
      }];
    };

    EntrenamientosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-entrenamientos",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entrenamientos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entrenamientos/entrenamientos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entrenamientos.page.scss */
      "./src/app/entrenamientos/entrenamientos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]])], EntrenamientosPage);
    /***/
  }
}]);
//# sourceMappingURL=entrenamientos-entrenamientos-module-es5.js.map