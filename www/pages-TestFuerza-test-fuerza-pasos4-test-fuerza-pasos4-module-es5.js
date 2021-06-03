function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestFuerza-test-fuerza-pasos4-test-fuerza-pasos4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestFuerzaTestFuerzaPasos4TestFuerzaPasos4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/test-fuerza-menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  mode=\"ios\"> {{nombre}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding\" *ngIf=\"id == 'banca'\">\n          <img src=\"assets/img/pressbanca.jpg\"/>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\">Ver video</ion-button>\n        </div>\n        <div  class=\"ion-padding\" *ngIf=\"id == 'squat'\">\n          <img src=\"assets/img/squat.jpg\"/>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\">Ver video</ion-button>\n        </div>      \n        <div  class=\"ion-padding\" *ngIf=\"id == 'curl'\">\n          <img src=\"assets/img/legcurl.jpg\"/>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\">Ver video</ion-button>\n        </div>  \n        <div  class=\"ion-padding\" *ngIf=\"id == 'extension'\">\n          <img src=\"assets/img/legextension.jpg\"/>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\">Ver video</ion-button>\n        </div> \n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <h2 class=\"ion-text-center\">{{nombre}}</h2> \n\n  <div  class=\"ion-padding ion-text-center\">\n    Por favor introduce, cuanto fue el peso que usaste y confirme su unidad.\n  </div>  \n\n  <ion-grid class=\"ion-padding\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col  size=\"12\" class=\"ion-margin-bottom\">   \n        <div>\n          <ion-input type=\"text\" placeholder=\"Kg/Lb\"  name=\"valor\" [(ngModel)]=\"power.valor\"></ion-input>\n        </div>   \n      </ion-col>\n\n      <ion-col  size=\"8\" >   \n\n          <ion-segment (ionChange)=\"peso($event)\" value=\"kilos\" mode=\"ios\">\n            <ion-segment-button value=\"kilos\" >\n              <ion-label>Kg</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"libras\">\n              <ion-label>Libras</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n \n      </ion-col>\n\n\n    </ion-row>\n  </ion-grid>  \n\n\n\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card color=\"dark\" (click)=\"siguiente()\">\n            <h2 class=\"ion-text-center\">Confirmar</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>   \n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: TestFuerzaPasos4PageRoutingModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos4TestFuerzaPasos4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos4PageRoutingModule", function () {
      return TestFuerzaPasos4PageRoutingModule;
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


    var _test_fuerza_pasos4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test-fuerza-pasos4.page */
    "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.ts");

    var routes = [{
      path: '',
      component: _test_fuerza_pasos4_page__WEBPACK_IMPORTED_MODULE_3__["TestFuerzaPasos4Page"]
    }];

    var TestFuerzaPasos4PageRoutingModule = function TestFuerzaPasos4PageRoutingModule() {
      _classCallCheck(this, TestFuerzaPasos4PageRoutingModule);
    };

    TestFuerzaPasos4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestFuerzaPasos4PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: TestFuerzaPasos4PageModule */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos4TestFuerzaPasos4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos4PageModule", function () {
      return TestFuerzaPasos4PageModule;
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


    var _test_fuerza_pasos4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-fuerza-pasos4-routing.module */
    "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4-routing.module.ts");
    /* harmony import */


    var _test_fuerza_pasos4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-fuerza-pasos4.page */
    "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.ts");

    var TestFuerzaPasos4PageModule = function TestFuerzaPasos4PageModule() {
      _classCallCheck(this, TestFuerzaPasos4PageModule);
    };

    TestFuerzaPasos4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_fuerza_pasos4_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestFuerzaPasos4PageRoutingModule"]],
      declarations: [_test_fuerza_pasos4_page__WEBPACK_IMPORTED_MODULE_6__["TestFuerzaPasos4Page"]]
    })], TestFuerzaPasos4PageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos4TestFuerzaPasos4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  border: solid 1px grey;\n  border-radius: 8px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.centered2 {\n  opacity: 0.7;\n  text-align: center;\n  color: white;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nion-segment-button {\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdEZ1ZXJ6YS90ZXN0LWZ1ZXJ6YS1wYXNvczQvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcVGVzdEZ1ZXJ6YVxcdGVzdC1mdWVyemEtcGFzb3M0XFx0ZXN0LWZ1ZXJ6YS1wYXNvczQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLXBhc29zNC90ZXN0LWZ1ZXJ6YS1wYXNvczQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUM7RUFDRyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDSjs7QURFRTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9UZXN0RnVlcnphL3Rlc3QtZnVlcnphLXBhc29zNC90ZXN0LWZ1ZXJ6YS1wYXNvczQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gfVxuXG4gLmNlbnRlcmVkMntcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuIH0iLCJpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2VudGVyZWQyIHtcbiAgb3BhY2l0eTogMC43O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.ts ***!
    \********************************************************************************/

  /*! exports provided: TestFuerzaPasos4Page */

  /***/
  function srcAppPagesTestFuerzaTestFuerzaPasos4TestFuerzaPasos4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFuerzaPasos4Page", function () {
      return TestFuerzaPasos4Page;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts"); //import { ActivatedRoute } from '@angular/router';


    var TestFuerzaPasos4Page =
    /*#__PURE__*/
    function () {
      function TestFuerzaPasos4Page(apiService, usuarioservicio, route, picker) {
        _classCallCheck(this, TestFuerzaPasos4Page);

        this.apiService = apiService;
        this.usuarioservicio = usuarioservicio;
        this.route = route;
        this.picker = picker;
        this.power = {
          valor: null
        };
      }

      _createClass(TestFuerzaPasos4Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.usuarioservicio.selecionTestEjercicio.pressbanca) {
            this.nombre = 'Press banca';
            this.id = 'banca';
            this.identificador = 1;
            document.getElementById("banca").classList.add('realizado');
          }

          if (this.usuarioservicio.selecionTestEjercicio.squat) {
            this.nombre = 'Squat';
            this.id = 'squat';
            this.identificador = 3;
            document.getElementById("squat").classList.add('realizado');
          }

          if (this.usuarioservicio.selecionTestEjercicio.legcurl) {
            this.nombre = 'Leg curl';
            this.id = 'curl';
            this.identificador = 2;
            document.getElementById("curl").classList.add('realizado');
          }

          if (this.usuarioservicio.selecionTestEjercicio.legextension) {
            this.nombre = 'Leg extension';
            this.id = 'extension';
            this.identificador = 4;
            document.getElementById("squat").classList.add('realizado');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//this.id = this.ruta.snapshot.paramMap.get('id')

          /*
          if(this.id == 'banca'){
             this.nombre = 'Press banca'
          }
          if(this.id == 'squat'){
            this.nombre = 'Squat'
          }
          if(this.id == 'curl'){
          this.nombre = 'Leg curl'
          }
          if(this.id == 'extension'){
          this.nombre = 'Leg extension'
          }
          */
        }
      }, {
        key: "peso",
        value: function peso(valor) {
          console.log(valor.detail.value);
        }
      }, {
        key: "siguiente",
        value: function siguiente() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.power.valor == null || this.power.valor == 0)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    if (this.identificador == 1) {
                      this.apiService.recolectarTestFuerza(this.power.valor, this.identificador);
                      this.route.navigateByUrl('/test-fuerza-categoria');
                    }

                    if (this.identificador == 2) {
                      this.apiService.recolectarTestFuerza(this.power.valor, this.identificador);
                      this.route.navigateByUrl('/test-fuerza-categoria');
                    }

                    if (this.identificador == 3) {
                      this.apiService.recolectarTestFuerza(this.power.valor, this.identificador);
                      this.route.navigateByUrl('/test-fuerza-categoria');
                    }

                    if (this.identificador == 4) {
                      this.apiService.recolectarTestFuerza(this.power.valor, this.identificador);
                      this.route.navigateByUrl('/test-fuerza-categoria');
                    }

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return TestFuerzaPasos4Page;
    }();

    TestFuerzaPasos4Page.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
      }];
    };

    TestFuerzaPasos4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-fuerza-pasos4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-fuerza-pasos4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-fuerza-pasos4.page.scss */
      "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]])], TestFuerzaPasos4Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestFuerza-test-fuerza-pasos4-test-fuerza-pasos4-module-es5.js.map