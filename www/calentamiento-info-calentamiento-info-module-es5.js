function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calentamiento-info-calentamiento-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calentamiento-info/calentamiento-info.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calentamiento-info/calentamiento-info.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalentamientoInfoCalentamientoInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n\n<!-- cabezera -->\n\n<ion-content fullscreen>\n\n  <ion-row>\n    <ion-col size=\"12\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/calentamientoFinal2.jpg\"/>\n    </ion-col>\n  </ion-row>\n\n  <div  class=\"ion-padding ion-text-center titulo\">\n    Calentamiento\n  </div> \n  <div  class=\"ion-padding ion-text-justify\">\n    Calentar el cuerpo es crucial para elevar tu frecuencia cardíaca de forma gradual, elevar tu temperatura corporal y que tus músculos estén listos para iniciar el entrenamiento.\n  </div>   \n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card style=\"   \n             background: #EF4044;\n             color: white;\n             width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n          \n             \" (click)=\"continuar()\">\n            <h2 style=\"text-align: center; margin: 10px;\">\n             <b> Continuar </b> </h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      \n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"12\">   \n          <ion-card style=\"  \n            background: #EF4044;\n            color: white;\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\" (click)=\"saltarCalentamiento()\">\n            <h2 style=\"text-align: center; margin: 10px;\">\n             <b> Saltar calentamiento </b>\n            </h2>  \n          </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/calentamiento-info/calentamiento-info-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/calentamiento-info/calentamiento-info-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CalentamientoInfoPageRoutingModule */

  /***/
  function srcAppCalentamientoInfoCalentamientoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientoInfoPageRoutingModule", function () {
      return CalentamientoInfoPageRoutingModule;
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


    var _calentamiento_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calentamiento-info.page */
    "./src/app/calentamiento-info/calentamiento-info.page.ts");

    var routes = [{
      path: '',
      component: _calentamiento_info_page__WEBPACK_IMPORTED_MODULE_3__["CalentamientoInfoPage"]
    }];

    var CalentamientoInfoPageRoutingModule = function CalentamientoInfoPageRoutingModule() {
      _classCallCheck(this, CalentamientoInfoPageRoutingModule);
    };

    CalentamientoInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalentamientoInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/calentamiento-info/calentamiento-info.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/calentamiento-info/calentamiento-info.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CalentamientoInfoPageModule */

  /***/
  function srcAppCalentamientoInfoCalentamientoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientoInfoPageModule", function () {
      return CalentamientoInfoPageModule;
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


    var _calentamiento_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calentamiento-info-routing.module */
    "./src/app/calentamiento-info/calentamiento-info-routing.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _calentamiento_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calentamiento-info.page */
    "./src/app/calentamiento-info/calentamiento-info.page.ts");

    var CalentamientoInfoPageModule = function CalentamientoInfoPageModule() {
      _classCallCheck(this, CalentamientoInfoPageModule);
    };

    CalentamientoInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _calentamiento_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalentamientoInfoPageRoutingModule"]],
      declarations: [_calentamiento_info_page__WEBPACK_IMPORTED_MODULE_7__["CalentamientoInfoPage"]]
    })], CalentamientoInfoPageModule);
    /***/
  },

  /***/
  "./src/app/calentamiento-info/calentamiento-info.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/calentamiento-info/calentamiento-info.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalentamientoInfoCalentamientoInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n/*fin logo*/\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 0px;\n  padding-bottom: 0;\n}\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW50YW1pZW50by1pbmZvL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY2FsZW50YW1pZW50by1pbmZvXFxjYWxlbnRhbWllbnRvLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxlbnRhbWllbnRvLWluZm8vY2FsZW50YW1pZW50by1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVBO0VBQ0UsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBLFdBQUE7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRE1BO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNISjtBREtJO0VBQ0MsMEJBQUE7RUFDQSxZQUFBO0FDSEw7QURRQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0xEO0FET0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9jYWxlbnRhbWllbnRvLWluZm8vY2FsZW50YW1pZW50by1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmF7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qZmluIGxvZ28qL1xuXG5cbiAgXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG4gIFxuXG5pb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gXG4gICAgaDJ7XG4gICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIFxuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn0iLCIvKmxvZ28qL1xuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qZmluIGxvZ28qL1xuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmF1bWVudGFydGl0dWxvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDpibGFjaztcbiAgLS1jb2xvcjp3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/calentamiento-info/calentamiento-info.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/calentamiento-info/calentamiento-info.page.ts ***!
    \***************************************************************/

  /*! exports provided: CalentamientoInfoPage */

  /***/
  function srcAppCalentamientoInfoCalentamientoInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientoInfoPage", function () {
      return CalentamientoInfoPage;
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


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var CalentamientoInfoPage =
    /*#__PURE__*/
    function () {
      function CalentamientoInfoPage(avanzar, ApiService, navCtrl) {
        _classCallCheck(this, CalentamientoInfoPage);

        this.avanzar = avanzar;
        this.ApiService = ApiService;
        this.navCtrl = navCtrl;
      }

      _createClass(CalentamientoInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "continuar",
        value: function continuar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var validar;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.ApiService.obtenerCalentamiento();

                  case 2:
                    validar = _context.sent;

                    if (validar) {
                      this.avanzar.navigateForward(["/bateriacalentamientohome/0"]);
                    } else {
                      console.log("error");
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
        key: "saltarCalentamiento",
        value: function saltarCalentamiento() {
          this.avanzar.navigateForward(["/rutina-entrenamiento"]);
        }
      }, {
        key: "atras",
        value: function atras() {
          this.avanzar.pop();
        }
      }]);

      return CalentamientoInfoPage;
    }();

    CalentamientoInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CalentamientoInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calentamiento-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calentamiento-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calentamiento-info/calentamiento-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calentamiento-info.page.scss */
      "./src/app/calentamiento-info/calentamiento-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CalentamientoInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=calentamiento-info-calentamiento-info-module-es5.js.map