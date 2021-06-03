function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cambiarejercicio-cambiarejercicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cambiarejercicio/cambiarejercicio.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cambiarejercicio/cambiarejercicio.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCambiarejercicioCambiarejercicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid style=\"background-color:#F4F3F1; padding: 0px;\" >\n  <ion-row >\n    <ion-col size=\"12\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/pressbanca.jpg\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n       <p class=\"ion-text-center titulo\">{{nombre}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"ion-grid2\">\n\n  <ion-row class=\"ion-row2\">\n    <ion-col size=\"12\">\n      <h2 class=\"ion-text-center\"> repeticiones x {{repeticion}}</h2>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<!--\n<ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"primary\" (click)=\"siguiente()\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n-->";
    /***/
  },

  /***/
  "./src/app/cambiarejercicio/cambiarejercicio-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/cambiarejercicio/cambiarejercicio-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CambiarejercicioPageRoutingModule */

  /***/
  function srcAppCambiarejercicioCambiarejercicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CambiarejercicioPageRoutingModule", function () {
      return CambiarejercicioPageRoutingModule;
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


    var _cambiarejercicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cambiarejercicio.page */
    "./src/app/cambiarejercicio/cambiarejercicio.page.ts");

    var routes = [{
      path: '',
      component: _cambiarejercicio_page__WEBPACK_IMPORTED_MODULE_3__["CambiarejercicioPage"]
    }];

    var CambiarejercicioPageRoutingModule = function CambiarejercicioPageRoutingModule() {
      _classCallCheck(this, CambiarejercicioPageRoutingModule);
    };

    CambiarejercicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CambiarejercicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cambiarejercicio/cambiarejercicio.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/cambiarejercicio/cambiarejercicio.module.ts ***!
    \*************************************************************/

  /*! exports provided: CambiarejercicioPageModule */

  /***/
  function srcAppCambiarejercicioCambiarejercicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CambiarejercicioPageModule", function () {
      return CambiarejercicioPageModule;
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


    var _cambiarejercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cambiarejercicio-routing.module */
    "./src/app/cambiarejercicio/cambiarejercicio-routing.module.ts");
    /* harmony import */


    var _cambiarejercicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cambiarejercicio.page */
    "./src/app/cambiarejercicio/cambiarejercicio.page.ts");

    var CambiarejercicioPageModule = function CambiarejercicioPageModule() {
      _classCallCheck(this, CambiarejercicioPageModule);
    };

    CambiarejercicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cambiarejercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["CambiarejercicioPageRoutingModule"]],
      declarations: [_cambiarejercicio_page__WEBPACK_IMPORTED_MODULE_6__["CambiarejercicioPage"]]
    })], CambiarejercicioPageModule);
    /***/
  },

  /***/
  "./src/app/cambiarejercicio/cambiarejercicio.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/cambiarejercicio/cambiarejercicio.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCambiarejercicioCambiarejercicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo {\n  font-size: 25px;\n  font-weight: 600;\n}\n\n.titulopeque {\n  font-size: 22px;\n  font-weight: 400;\n}\n\n.ion-grid2 {\n  height: 100%;\n}\n\n.ion-row2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtYmlhcmVqZXJjaWNpby9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNhbWJpYXJlamVyY2ljaW9cXGNhbWJpYXJlamVyY2ljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYW1iaWFyZWplcmNpY2lvL2NhbWJpYXJlamVyY2ljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2FtYmlhcmVqZXJjaWNpby9jYW1iaWFyZWplcmNpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG97XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxufVxuXG4udGl0dWxvcGVxdWV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxufVxuXG4uaW9uLWdyaWQye1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5pb24tcm93MntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSIsIi50aXR1bG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmlvbi1ncmlkMiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlvbi1yb3cyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cambiarejercicio/cambiarejercicio.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/cambiarejercicio/cambiarejercicio.page.ts ***!
    \***********************************************************/

  /*! exports provided: CambiarejercicioPage */

  /***/
  function srcAppCambiarejercicioCambiarejercicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CambiarejercicioPage", function () {
      return CambiarejercicioPage;
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


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CambiarejercicioPage =
    /*#__PURE__*/
    function () {
      function CambiarejercicioPage(ApiService, ruta) {
        _classCallCheck(this, CambiarejercicioPage);

        this.ApiService = ApiService;
        this.ruta = ruta;
      }

      _createClass(CambiarejercicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ApiService.contadorEjercicio(1);
          this.nombre = this.ApiService.Nuevarutina['name'];
        }
      }, {
        key: "atras",
        value: function atras() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var validar;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.ApiService.obtenerRutina();

                  case 2:
                    validar = _context.sent;

                    if (validar) {
                      this.ruta.navigateBack("entrenamientos");
                    } else {
                      console.log("ocurrio un error");
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

      return CambiarejercicioPage;
    }();

    CambiarejercicioPage.ctorParameters = function () {
      return [{
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    CambiarejercicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cambiarejercicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cambiarejercicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cambiarejercicio/cambiarejercicio.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cambiarejercicio.page.scss */
      "./src/app/cambiarejercicio/cambiarejercicio.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], CambiarejercicioPage);
    /***/
  }
}]);
//# sourceMappingURL=cambiarejercicio-cambiarejercicio-module-es5.js.map