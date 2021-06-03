function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listaejercicioremplazar-listaejercicioremplazar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listaejercicioremplazar/listaejercicioremplazar.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listaejercicioremplazar/listaejercicioremplazar.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListaejercicioremplazarListaejercicioremplazarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img src=\"assets/img/logo-app.png\" class=\"imagenmodificada\">\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Lista de ejercicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <p class=\"ion-text-center\"> Selecione un ejercicio que le guste </p>\n\n\n    <ion-item *ngFor=\"let ejercicio of serie\">\n      <ion-thumbnail slot=\"start\">\n        <!-- <img src=\"assets/img/logo-app.png\"> -->\n        <img src=\"https://smartbunnypruebas.com/imagenes/{{ejercicio.cod}}/{{ejercicio.id}}.jpg\">\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\">\n        <h2> {{ejercicio.name}} </h2>\n      </ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"mostrarpop($event,ejercicio.id, ejercicio)\">\n          <ion-icon slot=\"start\" md=\"ellipsis-horizontal\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-button (click)=\"mostrarpop($event,ejercicio.id)\" color=\"danger\">\n  <ion-icon slot=\"start\" md=\"ellipsis-horizontal\"></ion-icon>   </ion-button> -->";
    /***/
  },

  /***/
  "./src/app/listaejercicioremplazar/listaejercicioremplazar-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/listaejercicioremplazar/listaejercicioremplazar-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ListaejercicioremplazarPageRoutingModule */

  /***/
  function srcAppListaejercicioremplazarListaejercicioremplazarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaejercicioremplazarPageRoutingModule", function () {
      return ListaejercicioremplazarPageRoutingModule;
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


    var _listaejercicioremplazar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listaejercicioremplazar.page */
    "./src/app/listaejercicioremplazar/listaejercicioremplazar.page.ts");

    var routes = [{
      path: '',
      component: _listaejercicioremplazar_page__WEBPACK_IMPORTED_MODULE_3__["ListaejercicioremplazarPage"]
    }];

    var ListaejercicioremplazarPageRoutingModule = function ListaejercicioremplazarPageRoutingModule() {
      _classCallCheck(this, ListaejercicioremplazarPageRoutingModule);
    };

    ListaejercicioremplazarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListaejercicioremplazarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/listaejercicioremplazar/listaejercicioremplazar.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/listaejercicioremplazar/listaejercicioremplazar.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ListaejercicioremplazarPageModule */

  /***/
  function srcAppListaejercicioremplazarListaejercicioremplazarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaejercicioremplazarPageModule", function () {
      return ListaejercicioremplazarPageModule;
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


    var _listaejercicioremplazar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listaejercicioremplazar-routing.module */
    "./src/app/listaejercicioremplazar/listaejercicioremplazar-routing.module.ts");
    /* harmony import */


    var _listaejercicioremplazar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listaejercicioremplazar.page */
    "./src/app/listaejercicioremplazar/listaejercicioremplazar.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _components_popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/popremplazar/popremplazar.component */
    "./src/app/components/popremplazar/popremplazar.component.ts");

    var ListaejercicioremplazarPageModule = function ListaejercicioremplazarPageModule() {
      _classCallCheck(this, ListaejercicioremplazarPageModule);
    };

    ListaejercicioremplazarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_components_popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_8__["PopremplazarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _listaejercicioremplazar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaejercicioremplazarPageRoutingModule"]],
      declarations: [_listaejercicioremplazar_page__WEBPACK_IMPORTED_MODULE_6__["ListaejercicioremplazarPage"]]
    })], ListaejercicioremplazarPageModule);
    /***/
  },

  /***/
  "./src/app/listaejercicioremplazar/listaejercicioremplazar.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/listaejercicioremplazar/listaejercicioremplazar.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListaejercicioremplazarListaejercicioremplazarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  margin-right: 5px;\n}\n\nion-thumbnail img {\n  width: auto !important;\n  height: auto !important;\n}\n\n.toolbar-background {\n  --background: black;\n  --color: white;\n}\n\n.imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\n.contenedor-padre {\n  overflow: hidden;\n}\n\n.float {\n  padding: 6px;\n  position: fixed;\n  width: 100px;\n  height: 29px;\n  bottom: 20px;\n  border-radius: 12px;\n  right: 35%;\n  background-color: #f32415;\n  color: #FFF;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  text-decoration: none;\n}\n\n.my-float {\n  margin-top: 22px;\n}\n\nion-item {\n  --padding-end:0px !important;\n  --padding-start:0px !important;\n}\n\nion-buttons {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFlamVyY2ljaW9yZW1wbGF6YXIvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxsaXN0YWVqZXJjaWNpb3JlbXBsYXphclxcbGlzdGFlamVyY2ljaW9yZW1wbGF6YXIucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YWVqZXJjaWNpb3JlbXBsYXphci9saXN0YWVqZXJjaWNpb3JlbXBsYXphci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FESUU7RUFDRSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNILGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNHLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDSCx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNHLDRCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNDLGdCQUFBO0FDREQ7O0FESUE7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9saXN0YWVqZXJjaWNpb3JlbXBsYXphci9saXN0YWVqZXJjaWNpb3JlbXBsYXphci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC50b29sYmFyLWJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiAgXG4uaW1hZ2VubW9kaWZpY2FkYXtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuXG4gIC5jb250ZW5lZG9yLXBhZHJle1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZmxvYXR7XG4gICAgcGFkZGluZzogNnB4O1xuXHRwb3NpdGlvbjpmaXhlZDtcblx0d2lkdGg6MTAwcHg7XG5cdGhlaWdodDoyOXB4O1xuICAgIGJvdHRvbToyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcmlnaHQ6IDM1JTtcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQzLCAzNiwgMjEpO1xuXHRjb2xvcjojRkZGO1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm15LWZsb2F0e1xuXHRtYXJnaW4tdG9wOjIycHg7XG59XG5cbmlvbi1pdGVte1xuICAtLXBhZGRpbmctZW5kOjBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b25ze1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn0iLCJpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmltYWdlbm1vZGlmaWNhZGEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29udGVuZWRvci1wYWRyZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mbG9hdCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjlweDtcbiAgYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICByaWdodDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjMyNDE1O1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDowcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/listaejercicioremplazar/listaejercicioremplazar.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/listaejercicioremplazar/listaejercicioremplazar.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ListaejercicioremplazarPage */

  /***/
  function srcAppListaejercicioremplazarListaejercicioremplazarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaejercicioremplazarPage", function () {
      return ListaejercicioremplazarPage;
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


    var _components_popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/popremplazar/popremplazar.component */
    "./src/app/components/popremplazar/popremplazar.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var ListaejercicioremplazarPage =
    /*#__PURE__*/
    function () {
      function ListaejercicioremplazarPage(popoverController, ApiService) {
        _classCallCheck(this, ListaejercicioremplazarPage);

        this.popoverController = popoverController;
        this.ApiService = ApiService;
        this.serie = {};
      }

      _createClass(ListaejercicioremplazarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.serie = this.ApiService.rutinaListadoRemplazar;
          console.log(this.serie);
        }
      }, {
        key: "mostrarpop",
        value: function mostrarpop(evento, id, exercise) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _components_popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_2__["PopremplazarComponent"],
                      showBackdrop: false,
                      event: evento,
                      componentProps: {
                        exercise: JSON.stringify(exercise)
                      }
                    });

                  case 2:
                    popover = _context.sent;
                    this.ApiService.asignarNuevoEjercicio(id);
                    _context.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ListaejercicioremplazarPage;
    }();

    ListaejercicioremplazarPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"]
      }];
    };

    ListaejercicioremplazarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-listaejercicioremplazar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listaejercicioremplazar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listaejercicioremplazar/listaejercicioremplazar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listaejercicioremplazar.page.scss */
      "./src/app/listaejercicioremplazar/listaejercicioremplazar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"]])], ListaejercicioremplazarPage);
    /***/
  }
}]);
//# sourceMappingURL=listaejercicioremplazar-listaejercicioremplazar-module-es5.js.map