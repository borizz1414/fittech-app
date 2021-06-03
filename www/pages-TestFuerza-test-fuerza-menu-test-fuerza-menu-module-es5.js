function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-menu-test-fuerza-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestFuerzaTestFuerzaMenuTestFuerzaMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\">Test de fuerza</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2 class=\"ion-padding-horizontal ion-text-center\">Complete el ejercicio.</h2>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" (click)=\"pressbanca()\" id=\"banca\">\n          <img src=\"assets/img/pressbanca.jpg\" />\n        </div>   \n      </ion-col>   \n    </ion-row>\n  </ion-grid> \n  \n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: TestFuerzaMenuPageRoutingModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaMenuTestFuerzaMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaMenuPageRoutingModule", function () {
      return TestFuerzaMenuPageRoutingModule;
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


    var _test_fuerza_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test-fuerza-menu.page */
    "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.ts");

    var routes = [{
      path: '',
      component: _test_fuerza_menu_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaMenuPage"]
    }];

    var TestFuerzaMenuPageRoutingModule = function TestFuerzaMenuPageRoutingModule() {
      _classCallCheck(this, TestFuerzaMenuPageRoutingModule);
    };

    TestFuerzaMenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestFuerzaMenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.module.ts ***!
    \******************************************************************************/

  /*! exports provided: TestFuerzaMenuPageModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaMenuTestFuerzaMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaMenuPageModule", function () {
      return TestFuerzaMenuPageModule;
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


    var _test_fuerza_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-fuerza-menu-routing.module */
    "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu-routing.module.ts");
    /* harmony import */


    var _test_fuerza_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-fuerza-menu.page */
    "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.ts");

    var TestFuerzaMenuPageModule = function TestFuerzaMenuPageModule() {
      _classCallCheck(this, TestFuerzaMenuPageModule);
    };

    TestFuerzaMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_fuerza_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaMenuPageRoutingModule"]],
      declarations: [_test_fuerza_menu_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaMenuPage"]]
    })], TestFuerzaMenuPageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaMenuTestFuerzaMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".realizado {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1tZW51L0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXFRlc3RGdWVyemFcXHRlc3QtZnVlcnphLW1lbnVcXHRlc3QtZnVlcnphLW1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLW1lbnUvdGVzdC1mdWVyemEtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLW1lbnUvdGVzdC1mdWVyemEtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhbGl6YWRve1xuICAgIG9wYWNpdHk6IDAuMjtcbn0iLCIucmVhbGl6YWRvIHtcbiAgb3BhY2l0eTogMC4yO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.ts ***!
    \****************************************************************************/

  /*! exports provided: TestFuerzaMenuPage */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaMenuTestFuerzaMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaMenuPage", function () {
      return TestFuerzaMenuPage;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var TestFuerzaMenuPage =
    /*#__PURE__*/
    function () {
      function TestFuerzaMenuPage(ruta, usuarioservicio) {
        _classCallCheck(this, TestFuerzaMenuPage);

        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
      }

      _createClass(TestFuerzaMenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pressbanca",
        value: function pressbanca() {
          console.log("pres banca"); //this.ruta.navigateByUrl('/test-fuerza-pasos4/banca');

          this.ruta.navigateByUrl('/test-fuerza-pasos1');
          this.usuarioservicio.TestSelecion(1);
        }
      }, {
        key: "squat",
        value: function squat() {
          console.log("squat"); //this.ruta.navigateByUrl('/test-fuerza-pasos4/squat');

          this.ruta.navigateByUrl('/test-fuerza-pasos1');
          this.usuarioservicio.TestSelecion(2);
        }
      }, {
        key: "legcurl",
        value: function legcurl() {
          console.log("leg curl"); //this.ruta.navigateByUrl('/test-fuerza-pasos4/curl');

          this.ruta.navigateByUrl('/test-fuerza-pasos1');
          this.usuarioservicio.TestSelecion(3);
        }
      }, {
        key: "legextension",
        value: function legextension() {
          console.log("leg extension"); //this.ruta.navigateByUrl('/test-fuerza-pasos4/extension');

          this.ruta.navigateByUrl('/test-fuerza-pasos1');
          this.usuarioservicio.TestSelecion(4);
        }
      }, {
        key: "termina",
        value: function termina() {
          this.ruta.navigateByUrl('/test-fuerza-categoria');
        }
      }]);

      return TestFuerzaMenuPage;
    }();

    TestFuerzaMenuPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    TestFuerzaMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-fuerza-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-fuerza-menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-fuerza-menu.page.scss */
      "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])], TestFuerzaMenuPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-menu-test-fuerza-menu-module-es5.js.map