function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-pasos3-test-fuerza-pasos3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestFuerzaTestFuerzaPasos3TestFuerzaPasos3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Tutorial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col  size=\"12\">   \n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Press banca'\">\n          <img src=\"assets/img/press-banca-3.png\"/>\n        </div>\n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Squat'\">\n          <img src=\"assets/img/squat-3.png\"/>\n        </div>\n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Leg curl'\">\n          <img src=\"assets/img/leg-curl-3.png\"/>\n        </div>\n\n        <div  class=\"ion-padding\" *ngIf=\"nombre == 'Leg extension'\">\n          <img src=\"assets/img/gym1.jpg\"/>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <h2 class=\"ion-text-center\">{{nombre}} - Paso 3</h2> \n\n  <div  class=\"ion-padding ion-text-center\">\n    Realiza tres series con ese peso, asegúrate que este sea el peso adecuado, <b>no te engañes.</b> \n  </div>  \n\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card color=\"dark\" (click)=\"siguiente()\">\n            <h2 class=\"ion-text-center\">Comenzar</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: TestFuerzaPasos3PageRoutingModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos3TestFuerzaPasos3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos3PageRoutingModule", function () {
      return TestFuerzaPasos3PageRoutingModule;
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


    var _test_fuerza_pasos3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test-fuerza-pasos3.page */
    "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.ts");

    var routes = [{
      path: '',
      component: _test_fuerza_pasos3_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaPasos3Page"]
    }];

    var TestFuerzaPasos3PageRoutingModule = function TestFuerzaPasos3PageRoutingModule() {
      _classCallCheck(this, TestFuerzaPasos3PageRoutingModule);
    };

    TestFuerzaPasos3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestFuerzaPasos3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: TestFuerzaPasos3PageModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos3TestFuerzaPasos3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos3PageModule", function () {
      return TestFuerzaPasos3PageModule;
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


    var _test_fuerza_pasos3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-fuerza-pasos3-routing.module */
    "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3-routing.module.ts");
    /* harmony import */


    var _test_fuerza_pasos3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-fuerza-pasos3.page */
    "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.ts");

    var TestFuerzaPasos3PageModule = function TestFuerzaPasos3PageModule() {
      _classCallCheck(this, TestFuerzaPasos3PageModule);
    };

    TestFuerzaPasos3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_fuerza_pasos3_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaPasos3PageRoutingModule"]],
      declarations: [_test_fuerza_pasos3_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaPasos3Page"]]
    })], TestFuerzaPasos3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos3TestFuerzaPasos3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RGdWVyemEvdGVzdC1mdWVyemEtcGFzb3MzL3Rlc3QtZnVlcnphLXBhc29zMy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.ts ***!
    \********************************************************************************/

  /*! exports provided: TestFuerzaPasos3Page */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos3TestFuerzaPasos3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos3Page", function () {
      return TestFuerzaPasos3Page;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var TestFuerzaPasos3Page =
    /*#__PURE__*/
    function () {
      function TestFuerzaPasos3Page(ruta, usuarioservicio) {
        _classCallCheck(this, TestFuerzaPasos3Page);

        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
      }

      _createClass(TestFuerzaPasos3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.usuarioservicio.selecionTestEjercicio.pressbanca) {
            this.nombre = 'Press banca';
          }

          if (this.usuarioservicio.selecionTestEjercicio.squat) {
            this.nombre = 'Squat';
          }

          if (this.usuarioservicio.selecionTestEjercicio.legcurl) {
            this.nombre = 'Leg curl';
          }

          if (this.usuarioservicio.selecionTestEjercicio.legextension) {
            this.nombre = 'Leg extension';
          }
        }
      }, {
        key: "siguiente",
        value: function siguiente() {
          this.ruta.navigateForward('test-fuerza-pasos4');
        }
      }]);

      return TestFuerzaPasos3Page;
    }();

    TestFuerzaPasos3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    TestFuerzaPasos3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-fuerza-pasos3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-fuerza-pasos3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-fuerza-pasos3.page.scss */
      "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])], TestFuerzaPasos3Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-pasos3-test-fuerza-pasos3-module-es5.js.map