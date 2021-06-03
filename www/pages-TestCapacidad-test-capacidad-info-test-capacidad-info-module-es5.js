function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestCapacidad-test-capacidad-info-test-capacidad-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestCapacidadTestCapacidadInfoTestCapacidadInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n\n<!-- cabezera -->\n\n<ion-content>\n\n  <ion-grid class=\"subirimagen\">\n    <ion-row style=\"padding: 0;\">\n      <ion-col  style=\"padding: 0;\">   \n          <img src=\"assets/img/capacidad-info2.jpg\"/> \n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n \n  <div  class=\"ion-padding ion-text-center titulo\">\n    Déjanos conocer en qué nivel estás\n  </div> \n  <div  class=\"ion-padding ion-text-justify\">\n    Trata de completar el siguiente test, sé muy honesto y muy consciente contigo mismo porque depende del nivel  será la intensidad de tu plan de entrenamiento.\n\n  </div>   \n  <div class=\"ion-padding ion-text-justify\">\n    Si paras antes de completarlo, toca el botón \"hasta aquí llegué\". Inmediatamente te diremos tu nivel.\n  </div>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n\n        <ion-card  style=\"\n        width: 286px; \n        border-radius: 10px;\n        text-transform: uppercase;\n        font-family: 'Open Sans';\n        --background:#EF4044;\n        color:white;\n        \"\n      \n      (click)=\"test()\">\n      <h2 style=\"margin: 10px; text-align: center;\"> \n        <b>Hacer el test</b>\n      </h2> \n     </ion-card>\n\n\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: TestCapacidadInfoPageRoutingModule */

  /***/
  function srcAppPagesTestCapacidadTestCapacidadInfoTestCapacidadInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestCapacidadInfoPageRoutingModule", function () {
      return TestCapacidadInfoPageRoutingModule;
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


    var _test_capacidad_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test-capacidad-info.page */
    "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.ts");

    var routes = [{
      path: '',
      component: _test_capacidad_info_page__WEBPACK_IMPORTED_MODULE_3__["TestCapacidadInfoPage"]
    }];

    var TestCapacidadInfoPageRoutingModule = function TestCapacidadInfoPageRoutingModule() {
      _classCallCheck(this, TestCapacidadInfoPageRoutingModule);
    };

    TestCapacidadInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestCapacidadInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: TestCapacidadInfoPageModule */

  /***/
  function srcAppPagesTestCapacidadTestCapacidadInfoTestCapacidadInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestCapacidadInfoPageModule", function () {
      return TestCapacidadInfoPageModule;
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


    var _test_capacidad_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-capacidad-info-routing.module */
    "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info-routing.module.ts");
    /* harmony import */


    var _test_capacidad_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-capacidad-info.page */
    "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.ts");

    var TestCapacidadInfoPageModule = function TestCapacidadInfoPageModule() {
      _classCallCheck(this, TestCapacidadInfoPageModule);
    };

    TestCapacidadInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_capacidad_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestCapacidadInfoPageRoutingModule"]],
      declarations: [_test_capacidad_info_page__WEBPACK_IMPORTED_MODULE_6__["TestCapacidadInfoPage"]]
    })], TestCapacidadInfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestCapacidadTestCapacidadInfoTestCapacidadInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n/*fin logo*/\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.subirimagen {\n  margin-top: -1rem;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdENhcGFjaWRhZC90ZXN0LWNhcGFjaWRhZC1pbmZvL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXFRlc3RDYXBhY2lkYWRcXHRlc3QtY2FwYWNpZGFkLWluZm9cXHRlc3QtY2FwYWNpZGFkLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0Q2FwYWNpZGFkL3Rlc3QtY2FwYWNpZGFkLWluZm8vdGVzdC1jYXBhY2lkYWQtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ047QURFRSxXQUFBO0FBR0Y7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0RKO0FER0k7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNETDtBRE1BO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDSEQ7QURLQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRko7QURLQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvVGVzdENhcGFjaWRhZC90ZXN0LWNhcGFjaWRhZC1pbmZvL3Rlc3QtY2FwYWNpZGFkLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2dvKi9cbi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLypmaW4gbG9nbyovXG5cblxuaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICAgIGgye1xuICAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICBcbiAgIH1cblxuLmF1bWVudGFydGl0dWxve1xuIGZvbnQtc2l6ZTogMThweDtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuLnN1YmlyaW1hZ2Vue1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgcGFkZGluZzogMDtcbn0iLCIvKmxvZ28qL1xuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qZmluIGxvZ28qL1xuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5hdW1lbnRhcnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnN1YmlyaW1hZ2VuIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIHBhZGRpbmc6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: TestCapacidadInfoPage */

  /***/
  function srcAppPagesTestCapacidadTestCapacidadInfoTestCapacidadInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestCapacidadInfoPage", function () {
      return TestCapacidadInfoPage;
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

    var TestCapacidadInfoPage =
    /*#__PURE__*/
    function () {
      function TestCapacidadInfoPage(ruta, apiService, navCtrl) {
        _classCallCheck(this, TestCapacidadInfoPage);

        this.ruta = ruta;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
      }

      _createClass(TestCapacidadInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valor;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.apiService.cargarNombreUsuario();

                  case 2:
                    valor = _context.sent;
                    this.apiService.asignarGenero(valor['gender']);
                    console.log(this.apiService.genero);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "test",
        value: function test() {
          this.ruta.navigateForward('bateriahome/0');
        }
      }, {
        key: "goTo",
        value: function goTo(url) {
          this.ruta.navigateForward(url);
        }
      }, {
        key: "atras",
        value: function atras() {
          this.navCtrl.pop();
        }
      }]);

      return TestCapacidadInfoPage;
    }();

    TestCapacidadInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TestCapacidadInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-capacidad-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-capacidad-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-capacidad-info.page.scss */
      "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TestCapacidadInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestCapacidad-test-capacidad-info-test-capacidad-info-module-es5.js.map