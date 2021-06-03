function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-percepcionentrenamiento-percepcionentrenamiento-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPercepcionentrenamientoPercepcionentrenamientoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding-horizontal\">\n          <h2 class=\"titulo ion-text-center\">Gracias a lo que comentas podemos mejorar cada vez más tu experiencia</h2>\n          <p class=\"ion-text-center\">Tus comentarios nos ayudan a mejorar nuestras sesiones</p>\n        </div>   \n      </ion-col>\n      <ion-col  size=\"12\">   \n        <ion-input type=\"text\" placeholder=\"comentar...\" name=\"comentario\" [(ngModel)]=\"comentario\"></ion-input>   \n      </ion-col>\n    </ion-row>\n  </ion-grid> \n  \n  <ion-item-divider></ion-item-divider>\n\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding-horizontal\">\n          <p class=\"ion-text-center\">¿Como te sentiste tú entrenamiento?</p>\n        </div>  \n      </ion-col>\n        <ion-col  size=\"2\">   \n          <div class=\"ion-padding-horizontal\"  [ngClass]=\"{'cambiarOpacidad': evaluarColor}\"  (click)=\"puntuacion(0)\">\n            <img src=\"assets/img/muy-facil.png\"/>\n          </div>\n          <p class=\"ion-text-center\" style=\"font-weight: bold;\">Muy Fácil</p>\n        </ion-col> \n        <ion-col  size=\"2\"> \n          <div class=\"ion-padding-horizontal\"  [ngClass]=\"{'cambiarOpacidad': evaluarColor1}\" (click)=\"puntuacion(1)\">\n            <img src=\"assets/img/facil.png\"/>\n          </div>  \n          <p class=\"ion-text-center\" style=\"font-weight: bold;\">Fácil</p>\n\n        </ion-col> \n        <ion-col  size=\"2\">   \n          <div class=\"ion-padding-horizontal\"  [ngClass]=\"{'cambiarOpacidad': evaluarColor2}\" (click)=\"puntuacion(2)\">\n            <img src=\"assets/img/bueno.png\"/>\n          </div>\n          <p class=\"ion-text-center\" style=\"font-weight: bold;\">Bueno</p>\n        </ion-col> \n\n        <ion-col  size=\"2\">   \n          <div class=\"ion-padding-horizontal\"  [ngClass]=\"{'cambiarOpacidad': evaluarColor3}\" (click)=\"puntuacion(3)\">\n            <img src=\"assets/img/duro.png\"/>\n          </div>\n          <p class=\"ion-text-center\" style=\"font-weight: bold;\">Duro</p>\n        </ion-col> \n\n        <ion-col  size=\"2\">   \n          <div class=\"ion-padding-horizontal\"  [ngClass]=\"{'cambiarOpacidad': evaluarColor4}\" (click)=\"puntuacion(4)\">\n            <img src=\"assets/img/extremo.png\"/>\n          </div>\n          <p class=\"ion-text-center\" style=\"font-weight: bold;\">Extremo</p>\n        </ion-col> \n    </ion-row>\n  </ion-grid>  \n  \n\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div>\n          <ion-card color=\"danger\" (click)=\"final()\" style=\"\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          margin: 0 auto;\n        \">\n            <h2 class=\"ion-text-center\" style=\"position:relative;margin: 10px;\">Finalizar</h2>  \n          </ion-card>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/percepcionentrenamiento/percepcionentrenamiento-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PercepcionentrenamientoPageRoutingModule */

  /***/
  function srcAppPagesPercepcionentrenamientoPercepcionentrenamientoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PercepcionentrenamientoPageRoutingModule", function () {
      return PercepcionentrenamientoPageRoutingModule;
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


    var _percepcionentrenamiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./percepcionentrenamiento.page */
    "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.ts");

    var routes = [{
      path: '',
      component: _percepcionentrenamiento_page__WEBPACK_IMPORTED_MODULE_3__["PercepcionentrenamientoPage"]
    }];

    var PercepcionentrenamientoPageRoutingModule = function PercepcionentrenamientoPageRoutingModule() {
      _classCallCheck(this, PercepcionentrenamientoPageRoutingModule);
    };

    PercepcionentrenamientoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PercepcionentrenamientoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: PercepcionentrenamientoPageModule */

  /***/
  function srcAppPagesPercepcionentrenamientoPercepcionentrenamientoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PercepcionentrenamientoPageModule", function () {
      return PercepcionentrenamientoPageModule;
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


    var _percepcionentrenamiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./percepcionentrenamiento-routing.module */
    "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento-routing.module.ts");
    /* harmony import */


    var _percepcionentrenamiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./percepcionentrenamiento.page */
    "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.ts");

    var PercepcionentrenamientoPageModule = function PercepcionentrenamientoPageModule() {
      _classCallCheck(this, PercepcionentrenamientoPageModule);
    };

    PercepcionentrenamientoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _percepcionentrenamiento_routing_module__WEBPACK_IMPORTED_MODULE_5__["PercepcionentrenamientoPageRoutingModule"]],
      declarations: [_percepcionentrenamiento_page__WEBPACK_IMPORTED_MODULE_6__["PercepcionentrenamientoPage"]]
    })], PercepcionentrenamientoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPercepcionentrenamientoPercepcionentrenamientoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  border: solid 1px grey;\n  border-radius: 12px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.cambiarOpacidad {\n  opacity: 0.2;\n}\n\n.tarjeta:hover {\n  opacity: 0.7;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 25px;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.ion-text-center {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyY2VwY2lvbmVudHJlbmFtaWVudG8vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xccGVyY2VwY2lvbmVudHJlbmFtaWVudG9cXHBlcmNlcGNpb25lbnRyZW5hbWllbnRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVyY2VwY2lvbmVudHJlbmFtaWVudG8vcGVyY2VwY2lvbmVudHJlbmFtaWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUM7RUFDSSxZQUFBO0FDQ0w7O0FERUM7RUFDSSxZQUFBO0FDQ0w7O0FERUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQztFQUNHLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJjZXBjaW9uZW50cmVuYW1pZW50by9wZXJjZXBjaW9uZW50cmVuYW1pZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gfVxuXG4gLmNhbWJpYXJPcGFjaWRhZHtcbiAgICAgb3BhY2l0eTogMC4yO1xuIH1cblxuIC50YXJqZXRhOmhvdmVye1xuICAgICBvcGFjaXR5OiAwLjc7XG4gfVxuXG4gLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAuaW9uLXRleHQtY2VudGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhbWJpYXJPcGFjaWRhZCB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnRhcmpldGE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: PercepcionentrenamientoPage */

  /***/
  function srcAppPagesPercepcionentrenamientoPercepcionentrenamientoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PercepcionentrenamientoPage", function () {
      return PercepcionentrenamientoPage;
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


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var PercepcionentrenamientoPage =
    /*#__PURE__*/
    function () {
      function PercepcionentrenamientoPage(ruta, mensajeservice, apiService, notificacion) {
        _classCallCheck(this, PercepcionentrenamientoPage);

        this.ruta = ruta;
        this.mensajeservice = mensajeservice;
        this.apiService = apiService;
        this.notificacion = notificacion;
      }

      _createClass(PercepcionentrenamientoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "puntuacion",
        value: function puntuacion(valor) {
          console.log(this.comentario);
          console.log("valor de la puntuacion", valor);
          this.puntaje = valor;

          switch (valor) {
            case 0:
              {
                this.evaluarColor = false;
                this.evaluarColor1 = true;
                this.evaluarColor2 = true;
                this.evaluarColor3 = true;
                this.evaluarColor4 = true;
              }
              break;

            case 1:
              {
                this.evaluarColor = true;
                this.evaluarColor2 = true;
                this.evaluarColor3 = true;
                this.evaluarColor4 = true;
                this.evaluarColor1 = false;
              }
              break;

            case 2:
              {
                this.evaluarColor1 = true;
                this.evaluarColor = true;
                this.evaluarColor3 = true;
                this.evaluarColor4 = true;
                this.evaluarColor2 = false;
              }
              break;

            case 3:
              {
                this.evaluarColor1 = true;
                this.evaluarColor2 = true;
                this.evaluarColor = true;
                this.evaluarColor4 = true;
                this.evaluarColor3 = false;
              }
              break;

            case 4:
              {
                this.evaluarColor1 = true;
                this.evaluarColor2 = true;
                this.evaluarColor3 = true;
                this.evaluarColor = true;
                this.evaluarColor4 = false;
              }
              break;

            default:
              break;
          }
        }
      }, {
        key: "final",
        value: function final() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var validar;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.puntaje == null)) {
                      _context.next = 4;
                      break;
                    }

                    this.mensajeservice.alertaInformatica('Debes clasificar la rutina');
                    _context.next = 8;
                    break;

                  case 4:
                    _context.next = 6;
                    return this.apiService.finalizarRutinaHome(this.puntaje);

                  case 6:
                    validar = _context.sent;

                    if (validar) {
                      this.ruta.navigateByUrl("/tabs/dashboard");
                    } else {
                      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión", "primary");
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

      return PercepcionentrenamientoPage;
    }();

    PercepcionentrenamientoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]
      }];
    };

    PercepcionentrenamientoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-percepcionentrenamiento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./percepcionentrenamiento.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./percepcionentrenamiento.page.scss */
      "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])], PercepcionentrenamientoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-percepcionentrenamiento-percepcionentrenamiento-module-es5.js.map