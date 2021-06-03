function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comida-comida-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comida/comida.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comida/comida.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComidaComidaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>comida</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/comida/comida-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/comida/comida-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ComidaPageRoutingModule */

  /***/
  function srcAppPagesComidaComidaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComidaPageRoutingModule", function () {
      return ComidaPageRoutingModule;
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


    var _comida_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comida.page */
    "./src/app/pages/comida/comida.page.ts");

    var routes = [{
      path: '',
      component: _comida_page__WEBPACK_IMPORTED_MODULE_3__["ComidaPage"]
    }];

    var ComidaPageRoutingModule = function ComidaPageRoutingModule() {
      _classCallCheck(this, ComidaPageRoutingModule);
    };

    ComidaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComidaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/comida/comida.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/comida/comida.module.ts ***!
    \***********************************************/

  /*! exports provided: ComidaPageModule */

  /***/
  function srcAppPagesComidaComidaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComidaPageModule", function () {
      return ComidaPageModule;
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


    var _comida_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comida-routing.module */
    "./src/app/pages/comida/comida-routing.module.ts");
    /* harmony import */


    var _comida_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comida.page */
    "./src/app/pages/comida/comida.page.ts");

    var ComidaPageModule = function ComidaPageModule() {
      _classCallCheck(this, ComidaPageModule);
    };

    ComidaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comida_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComidaPageRoutingModule"]],
      declarations: [_comida_page__WEBPACK_IMPORTED_MODULE_6__["ComidaPage"]]
    })], ComidaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/comida/comida.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/comida/comida.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComidaComidaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbWlkYS9jb21pZGEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/comida/comida.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/comida/comida.page.ts ***!
    \*********************************************/

  /*! exports provided: ComidaPage */

  /***/
  function srcAppPagesComidaComidaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComidaPage", function () {
      return ComidaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComidaPage =
    /*#__PURE__*/
    function () {
      function ComidaPage() {
        _classCallCheck(this, ComidaPage);
      }

      _createClass(ComidaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComidaPage;
    }();

    ComidaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comida',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comida.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comida/comida.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comida.page.scss */
      "./src/app/pages/comida/comida.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ComidaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-comida-comida-module-es5.js.map