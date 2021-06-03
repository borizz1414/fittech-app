function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestCapacidad-bateriaesperahome-bateriaesperahome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestCapacidadBateriaesperahomeBateriaesperahomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content [fullscreen]=\"true\" slot=\"fixed\">\n  <ion-grid style=\"background-color:#F4F3F1; padding: 0px;\" >\n  <ion-row >\n  \t<p class=\"ion-text-center titulo2\">¡Prepárate!</p>\n  \t<p class=\"ion-text-center titulo2\">en</p>\n  \t<p class=\"center\">00:{{timeLeft}}</p>\n  \t<p class=\"center do\">Siguiente</p>\n    <ion-col class=\"centerdo\" size=\"8\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/pressbanca.jpg\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n       <p class=\"ion-text-center titulo\">{{ejercipro}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"ion-grid2\">\n  \n  \n\n\n</ion-grid>\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BateriaesperahomePageRoutingModule */

  /***/
  function srcAppPagesTestCapacidadBateriaesperahomeBateriaesperahomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BateriaesperahomePageRoutingModule", function () {
      return BateriaesperahomePageRoutingModule;
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


    var _bateriaesperahome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bateriaesperahome.page */
    "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.ts");

    var routes = [{
      path: '',
      component: _bateriaesperahome_page__WEBPACK_IMPORTED_MODULE_3__["BateriaesperahomePage"]
    }];

    var BateriaesperahomePageRoutingModule = function BateriaesperahomePageRoutingModule() {
      _classCallCheck(this, BateriaesperahomePageRoutingModule);
    };

    BateriaesperahomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BateriaesperahomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BateriaesperahomePageModule */

  /***/
  function srcAppPagesTestCapacidadBateriaesperahomeBateriaesperahomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BateriaesperahomePageModule", function () {
      return BateriaesperahomePageModule;
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


    var _bateriaesperahome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bateriaesperahome-routing.module */
    "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome-routing.module.ts");
    /* harmony import */


    var _bateriaesperahome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bateriaesperahome.page */
    "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.ts");

    var BateriaesperahomePageModule = function BateriaesperahomePageModule() {
      _classCallCheck(this, BateriaesperahomePageModule);
    };

    BateriaesperahomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bateriaesperahome_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriaesperahomePageRoutingModule"]],
      declarations: [_bateriaesperahome_page__WEBPACK_IMPORTED_MODULE_6__["BateriaesperahomePage"]]
    })], BateriaesperahomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestCapacidadBateriaesperahomeBateriaesperahomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-text-center.titulo {\n  font-weight: 800;\n}\n\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 20px;\n  padding-top: 28px;\n}\n\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdENhcGFjaWRhZC9iYXRlcmlhZXNwZXJhaG9tZS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxUZXN0Q2FwYWNpZGFkXFxiYXRlcmlhZXNwZXJhaG9tZVxcYmF0ZXJpYWVzcGVyYWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0Q2FwYWNpZGFkL2JhdGVyaWFlc3BlcmFob21lL2JhdGVyaWFlc3BlcmFob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Rlc3RDYXBhY2lkYWQvYmF0ZXJpYWVzcGVyYWhvbWUvYmF0ZXJpYWVzcGVyYWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi10ZXh0LWNlbnRlci50aXR1bG8ge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmlvbi10ZXh0LWNlbnRlci50aXR1bG8yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDI4cHg7XG59XG4uY2VudGVyLmRvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jZW50ZXJkbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSIsIi5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uY2VudGVyLmRvIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jZW50ZXJkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: BateriaesperahomePage */

  /***/
  function srcAppPagesTestCapacidadBateriaesperahomeBateriaesperahomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BateriaesperahomePage", function () {
      return BateriaesperahomePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BateriaesperahomePage =
    /*#__PURE__*/
    function () {
      function BateriaesperahomePage(capturar, ApiService, ruta) {
        _classCallCheck(this, BateriaesperahomePage);

        this.capturar = capturar;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.timeLeft = 5;
      }

      _createClass(BateriaesperahomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataRecibida = this.capturar.snapshot.paramMap.get('id');
          this.contador = parseInt(this.dataRecibida) + 1;
          this.startTimer();

          if (this.ApiService.genero == 1) {
            this.ejercipro = this.ApiService.rutinaTestCasaHombre[this.contador]['name'];
          }

          if (this.ApiService.genero == 2) {
            this.ejercipro = this.ApiService.rutinaTestCasaMujer[this.contador]['name'];
          }

          console.log(this.dataRecibida);
          this.tiempo = setTimeout(function () {
            console.log("guardando energia - redirigir");

            _this.ruta.navigateByUrl("bateriahome/".concat(_this.contador));
          }, 5000);
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this2 = this;

          setInterval(function () {
            if (_this2.timeLeft > 0) {
              _this2.timeLeft--;
            } else {
              _this2.timeLeft = 0;
            }
          }, 1000);
        }
      }]);

      return BateriaesperahomePage;
    }();

    BateriaesperahomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BateriaesperahomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bateriaesperahome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bateriaesperahome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bateriaesperahome.page.scss */
      "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], BateriaesperahomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-TestCapacidad-bateriaesperahome-bateriaesperahome-module-es5.js.map