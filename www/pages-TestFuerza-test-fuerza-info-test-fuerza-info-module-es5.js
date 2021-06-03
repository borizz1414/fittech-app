function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-info-test-fuerza-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestFuerzaTestFuerzaInfoTestFuerzaInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Test de fuerza</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding-horizontal\">\n          <img src=\"assets/img/gym1.jpg\"/>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>   \n  <div  class=\"ion-padding ion-text-justify\">\n    Saca un tiempo en tu próxima sesión de entrenamiento y realizalo, ya que es crucial saber realmente cuánta fuerza tienes en cada ejercicio para poder brindarte una personalización completa.\n  </div>   \n  <div class=\"ion-padding ion-text-justify\">\n    Recuerda que hacer esto te va a permitir evaluarte cada 6 semanas y medir tu progreso.\n  </div>\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card color=\"dark\" (click)=\"test()\" style=\"\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          \">\n            <h2 class=\"ion-text-center\">Hacer el Test</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <div >\n          <ion-card color=\"dark\" (click)=\"manual()\">\n            <h2 class=\"ion-text-center\">Ingresar manualmente</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: TestFuerzaInfoPageRoutingModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaInfoTestFuerzaInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaInfoPageRoutingModule", function () {
      return TestFuerzaInfoPageRoutingModule;
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


    var _test_fuerza_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test-fuerza-info.page */
    "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.ts");

    var routes = [{
      path: '',
      component: _test_fuerza_info_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaInfoPage"]
    }];

    var TestFuerzaInfoPageRoutingModule = function TestFuerzaInfoPageRoutingModule() {
      _classCallCheck(this, TestFuerzaInfoPageRoutingModule);
    };

    TestFuerzaInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestFuerzaInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.module.ts ***!
    \******************************************************************************/

  /*! exports provided: TestFuerzaInfoPageModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaInfoTestFuerzaInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaInfoPageModule", function () {
      return TestFuerzaInfoPageModule;
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


    var _test_fuerza_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-fuerza-info-routing.module */
    "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info-routing.module.ts");
    /* harmony import */


    var _test_fuerza_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-fuerza-info.page */
    "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.ts");

    var TestFuerzaInfoPageModule = function TestFuerzaInfoPageModule() {
      _classCallCheck(this, TestFuerzaInfoPageModule);
    };

    TestFuerzaInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_fuerza_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaInfoPageRoutingModule"]],
      declarations: [_test_fuerza_info_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaInfoPage"]]
    })], TestFuerzaInfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaInfoTestFuerzaInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1pbmZvL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXFRlc3RGdWVyemFcXHRlc3QtZnVlcnphLWluZm9cXHRlc3QtZnVlcnphLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLWluZm8vdGVzdC1mdWVyemEtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNDTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RGdWVyemEvdGVzdC1mdWVyemEtaW5mby90ZXN0LWZ1ZXJ6YS1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4OCU7XG4gICAgbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiBcbiAgICBoMntcbiAgICAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbiAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgXG4gICB9IiwiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.ts ***!
    \****************************************************************************/

  /*! exports provided: TestFuerzaInfoPage */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaInfoTestFuerzaInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaInfoPage", function () {
      return TestFuerzaInfoPage;
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

    var TestFuerzaInfoPage =
    /*#__PURE__*/
    function () {
      function TestFuerzaInfoPage(ruta) {
        _classCallCheck(this, TestFuerzaInfoPage);

        this.ruta = ruta;
      }

      _createClass(TestFuerzaInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "manual",
        value: function manual() {
          this.ruta.navigateForward('test-fuerza-manual');
        }
      }, {
        key: "test",
        value: function test() {
          this.ruta.navigateForward('test-fuerza-categoria');
        }
      }]);

      return TestFuerzaInfoPage;
    }();

    TestFuerzaInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TestFuerzaInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-fuerza-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-fuerza-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-fuerza-info.page.scss */
      "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TestFuerzaInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-info-test-fuerza-info-module-es5.js.map