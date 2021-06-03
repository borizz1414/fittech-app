function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calentamientodos-calentamientodos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calentamientodos/calentamientodos.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calentamientodos/calentamientodos.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCalentamientodosCalentamientodosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid  style=\"padding: 0px;\" >\n  <ion-row style=\"background-color:#F4F3F1;\">\n    <ion-col size=\"12\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/calentamientoInicial.jpeg\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n       <p class=\"ion-text-center titulopeque\"> Realiza de <b>2 a 3 series</b> de calentamiento de <b>1 minuto </b> cada una y <b>15 segundos</b>  de descanso entre serie con un <b>peso ligero</b>  de modo que  prepares tus músculos para el trabajo a continuación. </p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <h1 class=\"ion-text-center\">   ¡Prepara tu cuerpo! </h1>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"siguiente()\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";
    /***/
  },

  /***/
  "./src/app/pages/calentamientodos/calentamientodos-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/calentamientodos/calentamientodos-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CalentamientodosPageRoutingModule */

  /***/
  function srcAppPagesCalentamientodosCalentamientodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientodosPageRoutingModule", function () {
      return CalentamientodosPageRoutingModule;
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


    var _calentamientodos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calentamientodos.page */
    "./src/app/pages/calentamientodos/calentamientodos.page.ts");

    var routes = [{
      path: '',
      component: _calentamientodos_page__WEBPACK_IMPORTED_MODULE_3__["CalentamientodosPage"]
    }];

    var CalentamientodosPageRoutingModule = function CalentamientodosPageRoutingModule() {
      _classCallCheck(this, CalentamientodosPageRoutingModule);
    };

    CalentamientodosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalentamientodosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/calentamientodos/calentamientodos.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/calentamientodos/calentamientodos.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CalentamientodosPageModule */

  /***/
  function srcAppPagesCalentamientodosCalentamientodosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientodosPageModule", function () {
      return CalentamientodosPageModule;
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


    var _calentamientodos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calentamientodos-routing.module */
    "./src/app/pages/calentamientodos/calentamientodos-routing.module.ts");
    /* harmony import */


    var _calentamientodos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calentamientodos.page */
    "./src/app/pages/calentamientodos/calentamientodos.page.ts");

    var CalentamientodosPageModule = function CalentamientodosPageModule() {
      _classCallCheck(this, CalentamientodosPageModule);
    };

    CalentamientodosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calentamientodos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalentamientodosPageRoutingModule"]],
      declarations: [_calentamientodos_page__WEBPACK_IMPORTED_MODULE_6__["CalentamientodosPage"]]
    })], CalentamientodosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/calentamientodos/calentamientodos.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/calentamientodos/calentamientodos.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCalentamientodosCalentamientodosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo {\n  font-size: 25px;\n  font-weight: 600;\n}\n\n.titulopeque {\n  font-size: 17px;\n  font-weight: 200;\n}\n\n.ion-grid2 {\n  height: 100%;\n}\n\n.ion-row2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsZW50YW1pZW50b2Rvcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxjYWxlbnRhbWllbnRvZG9zXFxjYWxlbnRhbWllbnRvZG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FsZW50YW1pZW50b2Rvcy9jYWxlbnRhbWllbnRvZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVudGFtaWVudG9kb3MvY2FsZW50YW1pZW50b2Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxve1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNjAwOyBcbn1cblxuLnRpdHVsb3BlcXVle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogMjAwOyBcbn1cblxuLmlvbi1ncmlkMntcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW9uLXJvdzJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn0iLCIudGl0dWxvIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGl0dWxvcGVxdWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5pb24tZ3JpZDIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pb24tcm93MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/calentamientodos/calentamientodos.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/calentamientodos/calentamientodos.page.ts ***!
    \*****************************************************************/

  /*! exports provided: CalentamientodosPage */

  /***/
  function srcAppPagesCalentamientodosCalentamientodosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalentamientodosPage", function () {
      return CalentamientodosPage;
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

    var CalentamientodosPage =
    /*#__PURE__*/
    function () {
      function CalentamientodosPage(ruta, avanzar) {
        _classCallCheck(this, CalentamientodosPage);

        this.ruta = ruta;
        this.avanzar = avanzar;
      }

      _createClass(CalentamientodosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "atras",
        value: function atras() {
          this.avanzar.pop();
        }
      }, {
        key: "siguiente",
        value: function siguiente() {
          // ["/bateriarutinahome/0"]
          this.avanzar.navigateForward(["/calentamiento-info"]);
        }
      }]);

      return CalentamientodosPage;
    }();

    CalentamientodosPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    CalentamientodosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calentamientodos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calentamientodos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calentamientodos/calentamientodos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calentamientodos.page.scss */
      "./src/app/pages/calentamientodos/calentamientodos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], CalentamientodosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-calentamientodos-calentamientodos-module-es5.js.map