function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calentamiento-calentamiento-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calentamiento/calentamiento.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calentamiento/calentamiento.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCalentamientoCalentamientoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid  style=\"padding: 0px;\">\n  <ion-row style=\"background-color:#F4F3F1\">\n    <ion-col size=\"12\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/estirar.jpg\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n       <p class=\"ion-text-center titulo\"> Calentamiento </p>\n       <p class=\"ion-text-center titulopeque\"> Es recomendable antes de comenzar  aumentar tu temperatura corporal realizando de 5 a 10 minutos en un aparato cardiovascular a una intensidad moderada. </p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <h2 class=\"ion-text-center\">   ¡Prepara tu cuerpo! </h2>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"siguiente()\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";
    /***/
  },

  /***/
  "./src/app/pages/calentamiento/calentamiento-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/calentamiento/calentamiento-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CalentamientoPageRoutingModule */

  /***/
  function srcAppPagesCalentamientoCalentamientoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientoPageRoutingModule", function () {
      return CalentamientoPageRoutingModule;
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


    var _calentamiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calentamiento.page */
    "./src/app/pages/calentamiento/calentamiento.page.ts");

    var routes = [{
      path: '',
      component: _calentamiento_page__WEBPACK_IMPORTED_MODULE_3__["CalentamientoPage"]
    }];

    var CalentamientoPageRoutingModule = function CalentamientoPageRoutingModule() {
      _classCallCheck(this, CalentamientoPageRoutingModule);
    };

    CalentamientoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalentamientoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/calentamiento/calentamiento.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/calentamiento/calentamiento.module.ts ***!
    \*************************************************************/

  /*! exports provided: CalentamientoPageModule */

  /***/
  function srcAppPagesCalentamientoCalentamientoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientoPageModule", function () {
      return CalentamientoPageModule;
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


    var _calentamiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calentamiento-routing.module */
    "./src/app/pages/calentamiento/calentamiento-routing.module.ts");
    /* harmony import */


    var _calentamiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calentamiento.page */
    "./src/app/pages/calentamiento/calentamiento.page.ts");

    var CalentamientoPageModule = function CalentamientoPageModule() {
      _classCallCheck(this, CalentamientoPageModule);
    };

    CalentamientoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calentamiento_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalentamientoPageRoutingModule"]],
      declarations: [_calentamiento_page__WEBPACK_IMPORTED_MODULE_6__["CalentamientoPage"]]
    })], CalentamientoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/calentamiento/calentamiento.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/calentamiento/calentamiento.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCalentamientoCalentamientoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.titulopeque {\n  font-size: 17px;\n  font-weight: 200;\n}\n\n.ion-grid2 {\n  height: 100%;\n}\n\n.ion-row2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n.button-inner {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsZW50YW1pZW50by9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxjYWxlbnRhbWllbnRvXFxjYWxlbnRhbWllbnRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FsZW50YW1pZW50by9jYWxlbnRhbWllbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVudGFtaWVudG8vY2FsZW50YW1pZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuLnRpdHVsb3BlcXVle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogMjAwOyBcbn1cblxuLmlvbi1ncmlkMntcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW9uLXJvdzJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5idXR0b24taW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iLCIudGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmlvbi1ncmlkMiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlvbi1yb3cyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ1dHRvbi1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/calentamiento/calentamiento.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/calentamiento/calentamiento.page.ts ***!
    \***********************************************************/

  /*! exports provided: CalentamientoPage */

  /***/
  function srcAppPagesCalentamientoCalentamientoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientoPage", function () {
      return CalentamientoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CalentamientoPage =
    /*#__PURE__*/
    function () {
      function CalentamientoPage(ruta, avanzar) {
        _classCallCheck(this, CalentamientoPage);

        this.ruta = ruta;
        this.avanzar = avanzar;
      }

      _createClass(CalentamientoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "atras",
        value: function atras() {
          this.ruta.navigateByUrl("entrenamientos");
        }
      }, {
        key: "siguiente",
        value: function siguiente() {
          this.ruta.navigateByUrl("calentamientodos");
        }
      }]);

      return CalentamientoPage;
    }();

    CalentamientoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    CalentamientoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calentamiento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calentamiento.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calentamiento/calentamiento.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calentamiento.page.scss */
      "./src/app/pages/calentamiento/calentamiento.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], CalentamientoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-calentamiento-calentamiento-module-es5.js.map