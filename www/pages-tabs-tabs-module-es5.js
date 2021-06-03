function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <ion-tabs color=\"danger\">\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"dashboard\" >\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <ion-label>Entrenamiento</ion-label>\n        </ion-tab-button>\n    \n        \n        <ion-tab-button tab=\"nutrition\">\n          <div style=\"width: 22px; height: 22px;\">\n            <img style=\"max-width: 100%; height: 100%;\"   name=\"nutrition-fittech\" src=\"assets/img/icono-plato.png\">\n          </div>\n          <ion-label>Nutrición</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"eye\">\n          <ion-icon name=\"cart-outline\"></ion-icon>  \n          <ion-label>Tienda</ion-label>\n        </ion-tab-button>\n  \n        <ion-tab-button tab=\"about\">\n          <ion-icon name=\"person-outline\"></ion-icon>\n          <ion-label>Perfil</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n\n";
    /***/
  },

  /***/
  "./src/app/guards/nutricion.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/guards/nutricion.guard.ts ***!
    \*******************************************/

  /*! exports provided: NutricionGuard */

  /***/
  function srcAppGuardsNutricionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutricionGuard", function () {
      return NutricionGuard;
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


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var NutricionGuard =
    /*#__PURE__*/
    function () {
      function NutricionGuard(navCtrl, service) {
        _classCallCheck(this, NutricionGuard);

        this.navCtrl = navCtrl;
        this.service = service;
      }

      _createClass(NutricionGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var comprobar, nutricion, validar;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.service.obtenerUsuario();

                  case 2:
                    comprobar = _context.sent;
                    _context.next = 5;
                    return this.service.cargarnutricion();

                  case 5:
                    nutricion = _context.sent;
                    _context.next = 8;
                    return this.service.obtenerRutinaHome();

                  case 8:
                    validar = _context.sent;

                    if (!(validar == true)) {
                      _context.next = 19;
                      break;
                    }

                    if (!(nutricion === 'activado' || comprobar['food_measures'] !== null)) {
                      _context.next = 15;
                      break;
                    }

                    this.navCtrl.navigateForward('/tutorial-alimentacion');
                    return _context.abrupt("return", true);

                  case 15:
                    this.navCtrl.navigateForward('/actividad');
                    return _context.abrupt("return", true);

                  case 17:
                    _context.next = 20;
                    break;

                  case 19:
                    return _context.abrupt("return", false);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return NutricionGuard;
    }();

    NutricionGuard.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    NutricionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], NutricionGuard);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/pages/tabs/tabs.page.ts");
    /* harmony import */


    var src_app_guards_nutricion_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/guards/nutricion.guard */
    "./src/app/guards/nutricion.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'dashboard'
    }, {
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-dashboard-module */
          "dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ../dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }, {
        path: 'eye',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tienda-tienda-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tienda-tienda-module")]).then(__webpack_require__.bind(null,
          /*! ../../tienda/tienda.module */
          "./src/app/tienda/tienda.module.ts")).then(function (m) {
            return m.TiendaPageModule;
          });
        }
      }, {
        path: 'nutrition',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bateria-alimento-bateria-alimento-module */
          "bateria-alimento-bateria-alimento-module").then(__webpack_require__.bind(null,
          /*! ../../bateria-alimento/bateria-alimento.module */
          "./src/app/bateria-alimento/bateria-alimento.module.ts")).then(function (m) {
            return m.BateriaAlimentoPageModule;
          });
        },
        canActivate: [src_app_guards_nutricion_guard__WEBPACK_IMPORTED_MODULE_4__["NutricionGuard"]]
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | perfil-perfil-module */
          "perfil-perfil-module").then(__webpack_require__.bind(null,
          /*! ../perfil/perfil.module */
          "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
            return m.PerfilPageModule;
          });
        }
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tabs/tabs.module.ts ***!
    \*******************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppPagesTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/pages/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/pages/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tabs/tabs.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-bar {\n  --color-selected: white !important;\n  --background:#000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhcntcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB3aGl0ZSAhaW1wb3J0YW50OyBcbiAgICAtLWJhY2tncm91bmQ6IzAwMDtcbn0iLCJpb24tdGFiLWJhciB7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDojMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/tabs.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tabs/tabs.page.ts ***!
    \*****************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage =
    /*#__PURE__*/
    function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsPage;
    }();

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/pages/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map