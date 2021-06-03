function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/antecedentefmliar/antecedentefmliar.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/antecedentefmliar/antecedentefmliar.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAntecedentefmliarAntecedentefmliarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n  <div class=\"contenedor animated fadeIn delay-1s\">\n     \n      <div class=\"letra\">\n        ¿Alguno de tus familiares de primer grado (Padres, hermanos o hijos) ha sufrido las enfermedades o afecciones siguientes?\n      </div>\n\n\n      <ion-grid class=\"my-grid animated fadeIn delay-2s\">\n      <ion-row class=\"parent-row\">\n        <ion-col  size=\"12\">   \n          <ion-list>\n            <ion-list-header>(Marcar en caso afirmativo)</ion-list-header>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"ninguna\" \n              (ionChange)=\"historialcorazon('none')\"  [(ngModel)]=\"condicionPersona.ninguna\"></ion-toggle>\n              <ion-label>Ninguna de las siguientes</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Arritmia cardiaca</ion-label>\n              <ion-toggle color=\"dark\"  slot=\"start\" name=\"arritmia_corazon\" \n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.arritmia_corazon\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\"  slot=\"start\" name=\"ataque_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.ataque_corazon\"></ion-toggle>\n              <ion-label>Ataque al corazón</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"operacion_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.operacion_corazon\"></ion-toggle>\n              <ion-label>Operación de corazón</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"enfermedad_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.enfermedad_corazon\"></ion-toggle>\n              <ion-label>Enfermedad cardiaca congénita</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"presion_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.presion_corazon\"></ion-toggle>\n              <ion-label>Presión arterial alta</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"diabete_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.diabete_corazon\"></ion-toggle>\n              <ion-label>Diabetes</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.muerte_prematura\"></ion-toggle>\n              <ion-label style=\"font-size: 14px;\">Muerte prematura antes de los 50 años</ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-toggle color=\"dark\"  slot=\"start\" name=\"insuficiencia_renal\"\n              (ionChange)=\"historialcorazon('option')\"\n              [(ngModel)]=\"condicionPersona.insuficiencia_renal\"></ion-toggle>\n              <ion-label>Insuficiencia renal</ion-label>\n            </ion-item>\n\n          </ion-list>\n            \n          \n        </ion-col>\n \n        <ion-col size=\"12\">      \n       <!--    <ion-card class=\"color-tarjeta\" (click)=\"avanzar()\" [disabled]=\"habilitar\" style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n          \">\n            <h2 style=\"position:relative;margin: 10px;\">Continuar</h2>\n          </ion-card> -->\n\n        \n        </ion-col>\n       \n      </ion-row>\n      </ion-grid>\n     \n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\"    >\n    <ion-fab-button color=\"danger\" (click)=\"atras()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button color=\"danger\" (click)=\"avanzar()\" [disabled]=\"habilitar\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>   \n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/back-btn/back-btn.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/back-btn/back-btn.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackBtnBackBtnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-fab  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n  <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edad/edad.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edad/edad.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEdadEdadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h2 class=\"titulo animated fadeInLeft delay-1s\">¿En que rango esta tu <ion-text color=\"danger\">edad\n  </ion-text>?</h2>\n  <ion-item lines=\"none\" class=\"animated fadeInLeft delay-1s\" >\n                      <!--22-->\n    <ion-label style=\"font-size: 18px;position: absolute;\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\" *ngIf=\"!valor\">Seleccionar</ion-label>\n    <ion-select interface=\"action-sheet\" cancel-text=\"salir\" (ionChange)=\"imc($event)\">\n      <ion-select-option value=\"0\">18-25</ion-select-option>\n      <ion-select-option value=\"1\">26-36</ion-select-option>\n      <ion-select-option value=\"2\">36-45</ion-select-option>\n      <ion-select-option value=\"3\">46-55</ion-select-option>\n      <ion-select-option value=\"4\">56-65</ion-select-option>\n      <ion-select-option value=\"5\">+65</ion-select-option>\n    </ion-select>\n  </ion-item>\n</div>\n\n<!--   <ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n    <ion-fab-button color=\"danger\" (click)=\"avanzar()\" [disabled]=\"habilitar\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estatura/estatura.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/estatura/estatura.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEstaturaEstaturaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-edad (cambiarPantalla)=\"checkEdad($event)\"></app-edad>\n<div class=\"animated fadeInLeft delay-1s\">\n  <h2 class=\"titulo\">¿Cuánto\n    <ion-text color=\"danger\">mides</ion-text>?</h2>\n  <ion-item lines=\"none\">\n    <ion-input (ionInput)=\"valor($event)\" (ionFocus)=\"limpiar()\" [(ngModel)]=\"estatura\" type=\"tel\" value=\"0\"\n      inputmode=\"numeric\" maxlength=\"3\"></ion-input>\n  </ion-item>\n  <ion-label class=\"titulopeque\">{{ mensaje }}</ion-label>\n  <ion-row>\n    <ion-col size=\"6\" style=\"margin: 0 auto;\">\n      <ion-segment (ionChange)=\"altura($event)\" mode=\"ios\" value=\"Cm\">\n        <ion-segment-button value=\"Cm\">\n          <ion-label class=\"titulopeque\">Cm</ion-label>\n        </ion-segment-button>\n        <!--  <ion-segment-button value=\"Pulgadas\">\n          <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n        </ion-segment-button> -->\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div class=\"animated fadeInLeft delay-1s\">\n  <h2 class=\"titulo\">¿Cuánto\n    <ion-text color=\"danger\">pesas</ion-text>?</h2>\n  <ion-item lines=\"none\">\n    <ion-input (ionInput)=\"valor2($event)\" (ionFocus)=\"limpiar2()\" [(ngModel)]=\"peso_\" type=\"tel\" value=\"0\"\n      inputmode=\"numeric\" maxlength=\"3\"></ion-input>\n  </ion-item>\n  <ion-label class=\"titulopeque\">{{ mensaje2 }}</ion-label>\n  <ion-row>\n    <ion-col size=\"6\" style=\"margin: 0 auto;\">\n      <ion-segment (ionChange)=\"peso($event)\" mode=\"ios\" value=\"Kg\">\n        <ion-segment-button value=\"Kg\">\n          <ion-label class=\"titulopeque\">Kg</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Libra\">\n          <ion-label class=\"titulopeque\">Lbs</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"avanzar()\" [disabled]=\"pasar || !edad\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estatura2/estatura2.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/estatura2/estatura2.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEstatura2Estatura2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-col size=\"6\">\n  <div class=\"animated fadeInLeft delay-1s\" (click)=\"valor2($event)\">\n    <h2 class=\"titulo\">¿Cuánto\n        <ion-text color=\"danger\">mides</ion-text>?</h2>\n    <ion-item lines=\"none\">\n        <ion-input (ionInput)=\"valor($event)\" (ionFocus)=\"limpiar()\" [(ngModel)]=\"estatura\" type=\"tel\" value=\"0\" inputmode=\"numeric\" maxlength=\"3\"></ion-input>\n    </ion-item>\n    <ion-label class=\"titulopeque\">{{ mensaje }}</ion-label>\n    <ion-row>\n      <ion-col size=\"6\" style=\"margin: 0 auto;\">\n        <ion-segment (ionChange)=\"altura($event)\" mode=\"ios\" value=\"Cm\">\n          <ion-segment-button value=\"Cm\" >\n            <ion-label class=\"titulopeque\">Cm</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Pulgadas\">\n            <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-col> -->\n<ion-row>\n  <ion-col size=\"6\" class=\"rightborder\">\n    <ion-label class=\"titulopeque2\">¿Cuánto mides? <sup>\n\n\n      </sup></ion-label>\n    <ion-item lines=\"none\">\n      <ion-input (ionInput)=\"valor($event)\" (ionFocus)=\"limpiar()\" [(ngModel)]=\"estatura\" type=\"tel\" value=\"0\"\n        inputmode=\"numeric\" maxlength=\"3\"></ion-input>\n    </ion-item>\n    <ion-label class=\"titulopeque\">{{ mensaje }}</ion-label>\n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment (ionChange)=\"altura($event)\" mode=\"ios\" value=\"Cm\">\n          <ion-segment-button value=\"Cm\">\n            <ion-label class=\"titulopeque\">Cm</ion-label>\n          </ion-segment-button>\n          <!-- <ion-segment-button value=\"Pulgadas\">\n        <ion-label class=\"titulopeque\">Pulgadas</ion-label>\n      </ion-segment-button> -->\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n\n  <ion-col size=\"6\">\n    <ion-label class=\"titulopeque2\">¿Cuánto pesas? <sup>\n\n\n      </sup></ion-label>\n    <ion-item lines=\"none\">\n      <ion-input (ionInput)=\"valor2($event)\" (ionFocus)=\"limpiar2()\" [(ngModel)]=\"peso_\" type=\"tel\" value=\"0\"\n        inputmode=\"numeric\" maxlength=\"3\"></ion-input>\n    </ion-item>\n    <ion-label class=\"titulopeque\">{{ mensaje2 }}</ion-label>\n    <ion-row>\n      <ion-col size=\"12\" style=\"margin: 0 auto;\">\n        <ion-segment (ionChange)=\"peso($event)\" mode=\"ios\" value=\"Kg\">\n          <ion-segment-button value=\"Kg\">\n            <ion-label class=\"titulopeque\">Kg</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Libra\">\n            <ion-label class=\"titulopeque\">Lbs</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-row>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fotos/fotos.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fotos/fotos.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFotosFotosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n<form [formGroup]=\"form\">\n  <ion-grid>\n    <!-- Fotos Frente / Perfil  -->\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 1rem;\">\n      <ion-col size=\"12\" >\n        <ion-label class=\"titulopeque2\">Foto de frente\n\n          <sup>\n            <ion-icon (click)=\"modal(frente)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: white;\">\n            </ion-icon>\n          </sup>\n\n        </ion-label>\n      <div class=\"img-size\">\n        <img  (click)=\"captureImage(1)\"  class=\"fluid-img\"  [src]=\"frente\" alt=\"\"\n        onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n      </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Perfil  -->\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 1rem;\">\n      <ion-col size=\"12\" >\n        <ion-label class=\"titulopeque2\">Foto de perfil\n\n          <sup>\n            <ion-icon (click)=\"modal(perfil)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: white;\">\n            </ion-icon>\n          </sup>\n\n        </ion-label>\n      <div class=\"img-size\">\n         <img  (click)=\"captureImage(2)\"  class=\"fluid-img\" [src]=\"perfil\" alt=\"\"\n        onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n      </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fotos espalda -->\n    <ion-row style=\"margin-bottom: 2rem;\" class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <ion-label class=\"titulopeque2\">Foto de espalda\n\n          <sup>\n            <ion-icon (click)=\"modal(espalda)\" name=\"alert-circle\" style=\"font-size: 1.25rem; color: white;\">\n            </ion-icon>\n          </sup>\n\n        </ion-label>\n      <div class=\"img-size\">\n        <img  (click)=\"captureImage(3)\"  class=\"fluid-img\" [src]=\"espalda\" alt=\"\"\n        onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n      </div>\n      </ion-col>\n    </ion-row>\n\n\n\n      <ion-card  style=\"\n      width: 254px; \n      border-radius: 10px;\n      text-transform: uppercase;\n      font-family: 'Open Sans';\n      --background:#EF4044;\n      color:white;\n      margin: 0 auto;\n      margin-bottom: 5px;\n      \"\n      (click)=\"update()\">\n    <h4   style=\"margin: 10px; text-align: center;\"> \n      <b>Actualizar</b>\n    </h4> \n      </ion-card>\n  </ion-grid>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/historial/historial.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/historial/historial.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHistorialHistorialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n  <h2 class=\"titulo\">Tu historial médico</h2>\n  <ion-button color=\"danger\" class=\"tamanobtn\">\n    <ion-icon name=\"document-text\" class=\"iconSize\" ></ion-icon>\n  </ion-button>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n\n        <ion-list lines=\"none\" class=\"itemcustom\" >\n          <ion-list-header style=\"padding-left: 0; opacity: 0.7; transform: translate(10%,0); font-size: 18px;\">\n            ¿Tienes alguna de las siguientes enfermedades?\n          </ion-list-header>\n      \n        <ion-item>\n        <ion-toggle color=\"dark\" slot=\"start\" \n        (ionChange)=\"historialmedico('enfermedad')\"\n         name=\"noEnfermedad\" [(ngModel)]=\"datoEnfermedades.noEnfermedad\"\n        ></ion-toggle>\n        <ion-label>Ninguna de las siguientes</ion-label>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Hipertensión</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" (ionChange)=\"historialmedico(datoEnfermedades.hipertension)\"\n        name=\"hipertension\" [(ngModel)]=\"datoEnfermedades.hipertension\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-toggle color=\"dark\" slot=\"start\" (ionChange)=\"historialmedico(datoEnfermedades.hipotension)\"\n         name=\"hipotension\" [(ngModel)]=\"datoEnfermedades.hipotension\"\n        ></ion-toggle>\n        <ion-label>Hipotensión</ion-label>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Desvanecimiento</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\"   (ionChange)=\"historialmedico(datoEnfermedades.desvanecimiento)\"\n        name=\"desvanecimiento\" [(ngModel)]=\"datoEnfermedades.desvanecimiento\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Diabetes insulinodependiente</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" name=\"diabete\" \n        (ionChange)=\"historialmedico(datoEnfermedades.diabete)\" [(ngModel)]=\"datoEnfermedades.diabete\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-toggle color=\"dark\" slot=\"start\" name=\"dolorPecho\"\n        (ionChange)=\"historialmedico(datoEnfermedades.dolorPecho)\"   [(ngModel)]=\"datoEnfermedades.dolorPecho\"\n        ></ion-toggle>\n        <ion-label>Dolores en el pecho</ion-label>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Fatiga inusual en actividades</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" name=\"fatiga\"\n        (ionChange)=\"historialmedico(datoEnfermedades.fatiga)\"   [(ngModel)]=\"datoEnfermedades.fatiga\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Arritmias</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" \n        (ionChange)=\"historialmedico(datoEnfermedades.aritmias)\" name=\"aritmias\" [(ngModel)]=\"datoEnfermedades.aritmias\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-toggle color=\"dark\" slot=\"start\" name=\"taquicardia\"\n        (ionChange)=\"historialmedico(datoEnfermedades.taquicardia)\" [(ngModel)]=\"datoEnfermedades.taquicardia\"\n        ></ion-toggle>\n        <ion-label>Taquicardia</ion-label>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Insuficiencia cardiaca</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" name=\"insuficiencia\"\n        (ionChange)=\"historialmedico(datoEnfermedades.insuficiencia)\"  [(ngModel)]=\"datoEnfermedades.insuficiencia\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Infartos</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" \n        (ionChange)=\"historialmedico(datoEnfermedades.infartos)\"  name=\"infartos\" [(ngModel)]=\"datoEnfermedades.infartos\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-toggle color=\"dark\" slot=\"start\"\n        (ionChange)=\"historialmedico(datoEnfermedades.soplo)\"  name=\"soplo\" [(ngModel)]=\"datoEnfermedades.soplo\" \n        ></ion-toggle>\n        <ion-label>Soplo en el corazón</ion-label>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Influenza</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" \n        (ionChange)=\"historialmedico(datoEnfermedades.influenza)\" name=\"influenza\" [(ngModel)]=\"datoEnfermedades.influenza\"></ion-toggle>\n        </ion-item>\n        \n        <ion-item>\n        <ion-label>Asma</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" name=\"asma\" \n        (ionChange)=\"historialmedico(datoEnfermedades.asma)\" [(ngModel)]=\"datoEnfermedades.asma\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n        <ion-label>Bronquitis</ion-label>\n        <ion-toggle color=\"dark\"  slot=\"start\" \n        (ionChange)=\"historialmedico(datoEnfermedades.bronquiti)\" name=\"bronquiti\" [(ngModel)]=\"datoEnfermedades.bronquiti\"></ion-toggle>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Hipertensión pulmonar</ion-label>\n          <ion-toggle color=\"dark\"  slot=\"start\" \n          (ionChange)=\"historialmedico(datoEnfermedades.hipertensionPulmonar)\" name=\"hipertensionPulmonar\" [(ngModel)]=\"datoEnfermedades.hipertensionPulmonar\"></ion-toggle>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Enfermedad pulmonar obstructiva crónica</ion-label>\n          <ion-toggle color=\"dark\"  slot=\"start\" name=\"pulmonarcronica\"\n          (ionChange)=\"historialmedico(datoEnfermedades.pulmonarcronica)\"  [(ngModel)]=\"datoEnfermedades.pulmonarcronica\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Insuficiencia renal</ion-label>\n          <ion-toggle color=\"dark\"  slot=\"start\" name=\"insuficiencia_renal\"\n          (ionChange)=\"historialmedico(datoEnfermedades.insuficiencia_renal)\"  [(ngModel)]=\"datoEnfermedades.insuficiencia_renal\"></ion-toggle>\n        </ion-item>\n        \n        </ion-list>\n\n\n        <div><br></div>\n        <div><br></div>\n        <div><br></div>\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\"    >\n    <ion-fab-button color=\"danger\" (click)=\"atras()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button color=\"danger\" (click)=\"avanzar()\" [disabled]=\"habilitar\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n \n\n\n  \n\n\n\n\n\n\n\n  <!-- <ion-grid class=\"my-grid animated fadeIn delay-2s\">\n    <ion-row class=\"parent-row\">\n      <ion-col  size=\"12\">   \n        <ion-list>\n          <ion-list-header>Presentas alguna de estas patologias</ion-list-header>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"ninguna\" \n            (ionChange)=\"historialcorazon('none')\" ></ion-toggle>\n            <ion-label>Ninguna de las siguientes</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Hipertension</ion-label>\n            <ion-toggle color=\"dark\"  slot=\"start\" name=\"arritmia_corazon\" \n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\"  slot=\"start\" name=\"ataque_corazon\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label>Hipotension</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"operacion_corazon\"\n            (ionChange)=\"historialcorazon('option')\"></ion-toggle>\n            <ion-label>Desvanecimiento</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"enfermedad_corazon\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label>Diabetes insulinodependiente</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"presion_corazon\"\n            (ionChange)=\"historialcorazon('option')\"></ion-toggle>\n            <ion-label>Dolores en el pecho</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"diabete_corazon\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label>Fatiga insual en actividades</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Aritmias</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Taquicardia</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Insuficiencia cardiaca</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Infartos</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Soplo en el corazon</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Influenza</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Asma</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Bronquiti</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Hipertension pulmonar</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n            (ionChange)=\"historialcorazon('option')\" ></ion-toggle>\n            <ion-label style=\"font-size: 14px;\">Enfermedad pulmonar obstructiva cronica</ion-label>\n          </ion-item>\n\n        </ion-list>\n          \n        \n      </ion-col>\n\n     \n    </ion-row>\n    </ion-grid>     -->\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicadores/indicadores.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicadores/indicadores.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIndicadoresIndicadoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <div style=\"margin-bottom: 0;\"  class=\"ion-padding ion-text-center titulo\">\n  Indicadores de salud\n</div>  -->\n<ng-container>\n  <ion-grid>\n    <ion-row *ngIf=\"!info\">\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alert-circle\" (click)=\"mostrar(info, 0)\" style=\"font-size: 1.25rem; color: white;\"></ion-icon>\n        <p class=\"tituloindicador\">IMC  =</p>\n        <ion-label class=\"tamanoindicador\" *ngIf=\"dato.imc !== null\">\n          {{dato.imc}}\n        </ion-label>\n        <ion-label class=\"tamanoindicador2 ion-text-wrap\" *ngIf=\"dato.imc === null\">Debe ingresar sus medida</ion-label>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alert-circle\"  (click)=\"mostrar(info, 1)\" style=\"font-size: 1.25rem; color: white;\"></ion-icon>\n        <p class=\"tituloindicador\">ICA  =</p>\n        <ion-label class=\"tamanoindicador\" *ngIf=\"dato.ica !== null\">{{dato.ica}}</ion-label>\n        <ion-label class=\"tamanoindicador2 ion-text-wrap\" *ngIf=\"dato.ica == null\">Debe ingresar sus medidas</ion-label>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alert-circle\"  (click)=\"mostrar(info,2)\" style=\"font-size: 1.25rem; color: white;\"></ion-icon>\n        <p class=\"tituloindicador\">Perímetro de cintura =</p>\n        <ion-label class=\"tamanoindicador\" *ngIf=\"dato.Perimetro_Cintura !== null\">{{dato.Perimetro_Cintura}}</ion-label>\n        <ion-label class=\"tamanoindicador2 ion-text-wrap\" *ngIf=\"dato.Perimetro_Cintura === null\">Debe ingresar sus medidas</ion-label>\n\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alert-circle\" (click)=\"mostrar(info,3)\" style=\"font-size: 1.25rem; color: white;\"></ion-icon>\n        <p class=\"tituloindicador\">TBMA  =</p>\n        <ion-label class=\"tamanoindicador\" *ngIf=\"dato.tmb !== null\">{{dato.tmb}} calorías</ion-label>\n        <ion-label class=\"tamanoindicador2 ion-text-wrap\" *ngIf=\"dato.tmb === null\">\n          Aún no ha completado información nutricional\n        </ion-label>\n\n      </ion-item>\n    </ion-col>\n\n\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alert-circle\"  (click)=\"mostrar(info,4)\" style=\"font-size: 1.25rem; color: white;\"></ion-icon>\n        <p class=\"tituloindicador\">Estrategia nutricional  =</p>\n        <ion-label class=\"tamanoindicador\" *ngIf=\"dato.Estrategia_N !== null\">{{dato.Estrategia_N}}%</ion-label>\n        <ion-label class=\"tamanoindicador2 ion-text-wrap\" *ngIf=\"dato.Estrategia_N === null\">\n          Aún no ha completado información nutricional\n        </ion-label>\n\n      </ion-item>\n    </ion-col>\n\n    </ion-row>\n    <div class=\"animated fadeInLeft\" *ngIf=\"info\">\n      <ion-grid class=\"my-grid\">\n          <ion-row class=\"parent-row animated fadeInLeft\">\n              <div class=\"container\">\n                  <h5 class=\"titulo\" style=\"text-align: center; color: white;\">Ayuda\n                      <ion-icon style=\"color: white;\" class=\"ayudad2\" name=\"close-outline\" (click)=\"cerrar()\"></ion-icon>\n                  </h5>\n                  <p *ngIf=\"indicador == 0\" class=\"ion-text-left\" style=\"color: white; font-size: 1.2rem;\"><b> IMC:</b> Es un indicador en el cual nos basamos solo para relacionar algunas enfermedades o inconvenientes relacionadas con la salud, y no para saber el estado de sobrepeso de una persona, ya que no toma en cuenta el % graso.</p>\n                  <p  *ngIf=\"indicador == 1\" class=\"ion-text-left\" style=\"color: white; font-size: 1.2rem;\"><b> ICA:</b> Indica un riesgo aproximado de enfermedades cardiovasculares, relacionando la cintura con la altura.A mayor valor mayor riesgo. A partir de 0.5 se considera en riesgo de padecer síndrome metabólico (colesterol, hipertensión, diabetes, tiroides).</p>\n                  <p *ngIf=\"indicador == 2\" class=\"ion-text-left\" style=\"color: white; font-size: 1.2rem;\"><b> Perímetro de cintura:</b> Indica el riesgo de enfermedades cardiovasculares que pueden empezar a ocurrir si se pasa de los siguientes limites. Hombres: 102 cm / Mujeres: 88 cm</p>\n                  <p *ngIf=\"indicador == 3\" class=\"ion-text-left\" style=\"color: white; font-size: 1.2rem;\"><b> TBMA:</b> Tasa Metabólica Basal Activa, no es nada más que la energía que necesita para mantener sus actividades del día a día, sin modificar su peso, por ello si se consume menor valor se pierde peso y viceversa.</p>\n                  <p *ngIf=\"indicador == 4\" class=\"ion-text-left\" style=\"color: white; font-size: 1.2rem;\"><b> Estrategia nutricional:</b> Es el déficit o superávit calórico dispuesto en su plan nutricional, para cumplir sus objetivos.</p>\n              </div>\n\n          </ion-row>\n      </ion-grid>\n    </div>\n  </ion-grid>\n</ng-container >\n\n<!-- <ng-container *ngIf=\"detectar === false\">\n  <p class=\"ion-text-center ion-padding\">\n    Debes completar el formulario en nutrición para poder ver sus indicadores\n     <span style=\"color: red;\"> * </span></p>\n</ng-container> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicadorescomparacion/indicadorescomparacion.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicadorescomparacion/indicadorescomparacion.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIndicadorescomparacionIndicadorescomparacionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor-fecha\">\n  <ion-item lines=\"none\" class=\"fecha-desde\">\n      <!--22-->\n  <ion-label style=\"font-size: 18px;position: absolute;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\" *ngIf=\"!valor\">Desde</ion-label>\n  <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\"  cancel-text=\"salir\" (ionChange)=\"desde($event)\">\n  <ion-select-option *ngFor=\"let item of fechas; let i=index\" value=\"{{item.id}}\">{{item.created_at}} </ion-select-option>\n</ion-select>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"fecha-hasta\">\n    <!--22-->\n<ion-label style=\"font-size: 18px;position: absolute;\nwidth: 100%;\nmargin: 0 auto;\ntext-align: center;\" *ngIf=\"!valor2\">Hasta</ion-label>\n<ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" cancel-text=\"salir\" (ionChange)=\"hasta($event)\">\n  <ion-select-option *ngFor=\"let item of fechas; let i=index\" value=\"{{item.id}}\">{{item.created_at}} </ion-select-option>\n</ion-select>\n  </ion-item>\n</div>\n\n\n<ion-grid>\n  <!-- 1 -->\n  <ion-row>\n    <ion-col size=\"6\" class=\"rightborder\">\n      <ion-label class=\"titulopeque2\">Estrategia nutricional</ion-label>\n      <div class=\"contenedor-input\">\n        <p class=\"input-custom\">{{indicadores_ante.estrategia_nutricional}}</p>\n        <p class=\"input-custom\">{{indicadores_despues.estrategia_nutricional}}</p>\n      </div>\n      \n<ion-row>\n  <ion-col size=\"12\" style=\"margin: 0 auto;\">\n    <ion-segment  mode=\"ios\">\n      <ion-segment-button disabled>\n        <ion-label class=\"titulopeque\">Antes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button disabled>\n        <ion-label class=\"titulopeque\">Despues</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n    </ion-col>\n    <ion-col size=\"6\" class=\"rightborder\">\n      <ion-label class=\"titulopeque2\">TBMA</ion-label>\n      <div class=\"contenedor-input\">\n        <p class=\"input-custom\">{{indicadores_ante.tmb}}</p>\n        <p class=\"input-custom\">{{indicadores_despues.tmb}}</p>\n      </div>\n      \n<ion-row>\n  <ion-col size=\"12\" style=\"margin: 0 auto;\">\n    <ion-segment  mode=\"ios\">\n      <ion-segment-button disabled value=\"Cm\" >\n        <ion-label class=\"titulopeque\">Antes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button disabled value=\"Pulgadas\">\n        <ion-label class=\"titulopeque\">Despues</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n    </ion-col>\n  </ion-row>\n  <!-- 2 -->\n  <ion-row>\n    <ion-col size=\"6\" class=\"rightborder\">\n      <ion-label class=\"titulopeque2\">IMC</ion-label>\n      <div class=\"contenedor-input\">\n        <p class=\"input-custom\">{{indicadores_ante.imc}}</p>\n        <p class=\"input-custom\">{{indicadores_despues.imc}}</p>\n      </div>\n      \n<ion-row>\n  <ion-col size=\"12\" style=\"margin: 0 auto;\">\n    <ion-segment  mode=\"ios\">\n      <ion-segment-button disabled>\n        <ion-label class=\"titulopeque\">Antes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button disabled>\n        <ion-label class=\"titulopeque\">Despues</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n    </ion-col>\n    <ion-col size=\"6\" class=\"rightborder\">\n      <ion-label class=\"titulopeque2\">ICA</ion-label>\n      <div class=\"contenedor-input\">\n        <p class=\"input-custom\">{{indicadores_ante.ica}}</p>\n        <p class=\"input-custom\">{{indicadores_despues.ica}}</p>\n      </div>\n      \n<ion-row>\n  <ion-col size=\"12\" style=\"margin: 0 auto;\">\n    <ion-segment  mode=\"ios\">\n      <ion-segment-button disabled value=\"Cm\" >\n        <ion-label class=\"titulopeque\">Antes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button disabled value=\"Pulgadas\">\n        <ion-label class=\"titulopeque\">Despues</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n    </ion-col>\n  </ion-row>\n  <!-- 3 -->\n  <ion-row>\n    <ion-col size=\"6\" class=\"rightborder\">\n      <ion-label class=\"titulopeque2\">Perímetro de cintura</ion-label>\n      <div class=\"contenedor-input\">\n        <p class=\"input-custom\">{{indicadores_ante.perimetro_cintura}}</p>\n        <p class=\"input-custom\">{{indicadores_despues.perimetro_cintura}}</p>\n      </div>\n      \n<ion-row>\n  <ion-col size=\"12\" style=\"margin: 0 auto;\">\n    <ion-segment  mode=\"ios\">\n      <ion-segment-button disabled value=\"Cm\" >\n        <ion-label class=\"titulopeque\">Antes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button disabled value=\"Pulgadas\">\n        <ion-label class=\"titulopeque\">Despues</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n    </ion-col>\n\n    <!-- <ion-col size=\"6\" class=\"rightborder\">\n      <ion-label class=\"titulopeque2\">TBMA</ion-label>\n      <div class=\"contenedor-input\">\n        <p class=\"input-custom\">{{indicadores_ante.tmba}}</p>\n        <p class=\"input-custom\">{{indicadores_despues.tmba}}</p>\n      </div>\n      \n<ion-row>\n  <ion-col size=\"12\" style=\"margin: 0 auto;\">\n    <ion-segment  mode=\"ios\">\n      <ion-segment-button disabled value=\"Cm\" >\n        <ion-label class=\"titulopeque\">Antes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button disabled value=\"Pulgadas\">\n        <ion-label class=\"titulopeque\">Despues</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-col>\n</ion-row>\n    </ion-col> -->\n  </ion-row>\n</ion-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medidas/medidas.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medidas/medidas.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMedidasMedidasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n<form [formGroup]=\"form\">\n  <ion-grid>\n\n      <ion-row>\n        <ion-col size=\"6\" class=\"rightborder\">\n            <ion-label class=\"titulopeque2\">Peso<span class=\"unidad\">(kg)</span></ion-label>\n            <ion-item lines=\"none\">\n              <ion-input type=\"number\"  placeholder=\"0\" name=\"weight\" formControlName=\"weight\" ></ion-input>\n          </ion-item>\n    <ion-row>\n    </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-label class=\"titulopeque2\">Altura<span class=\"unidad\">(cm)</span></ion-label>\n            <ion-item lines=\"none\">\n              <ion-input type=\"number\"  placeholder=\"0\" name=\"stature\" formControlName=\"stature\" ></ion-input>\n          </ion-item>\n    <ion-row>\n\n    </ion-row>\n        </ion-col>\n      </ion-row>\n\n\n\n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n        <ion-label class=\"titulopeque2\">Cintura minima <span class=\"unidad\">(cm)</span></ion-label>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\"  placeholder=\"0\" name=\"min_waist\" formControlName=\"min_waist\"  ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Cintura maxima <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\" name=\"max_waist\"  formControlName=\"max_waist\"></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Cadera <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\"   name=\"hip\" formControlName=\"hip\" ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Cuello <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\" name=\"neck\" formControlName=\"neck\" ></ion-input>\n        </ion-item>\n  <ion-row>\n\n  </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Muslo derecho <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input  type=\"number\" placeholder=\"0\" name=\"right_thigh\" formControlName=\"right_thigh\" ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Muslo izquierdo <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input  type=\"number\" placeholder=\"0\" name=\"left_thigh\" formControlName=\"left_thigh\"  ></ion-input>\n        </ion-item>\n  <ion-row>\n\n  </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo relajado derecho <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\" name=\"right_arm\" formControlName=\"right_arm\" ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Brazo relajado izquierdo <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\" name=\"left_arm\" formControlName=\"left_arm\" ></ion-input>\n        </ion-item>\n  <ion-row>\n\n  </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- brazo flexionado  -->\n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Brazo flexionado derecho <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\" name=\"right_arm_flexed\" formControlName=\"right_arm_flexed\" ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Brazo flexionado izquierdo <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input  type=\"number\" placeholder=\"0\" name=\"left_arm_flexed\" \n            formControlName=\"left_arm_flexed\"></ion-input>\n        </ion-item>\n  <ion-row>\n\n  </ion-row>\n      </ion-col>\n    </ion-row>\n\n\n    \n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Pantorrilla derecho <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\"  name=\"right_calf\" formControlName=\"right_calf\" ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-label class=\"titulopeque2\">Pantorrilla izquierda <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input  type=\"number\" placeholder=\"0\" name=\"left_calf\" formControlName=\"left_calf\" ></ion-input>\n        </ion-item>\n  <ion-row>\n\n  </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"rightborder\">\n          <ion-label class=\"titulopeque2\">Torax <span class=\"unidad\">(cm)</span></ion-label>\n          <ion-item lines=\"none\">\n            <ion-input type=\"number\"  placeholder=\"0\" name=\"torax\" formControlName=\"torax\"  ></ion-input>\n        </ion-item>\n  <ion-row>\n  </ion-row>\n      </ion-col>\n    </ion-row>\n      <ion-card  style=\"\n      width: 254px; \n      border-radius: 10px;\n      text-transform: uppercase;\n      font-family: 'Open Sans';\n      --background:#EF4044;\n      color:white;\n      margin: 0 auto;\n      margin-bottom: 5px;\n      \"\n      (click)=\"update()\"\n      [disabled]=\"!form.valid\">\n    <h4   style=\"margin: 10px; text-align: center;\"> \n      <b>Actualizar</b>\n    </h4> \n      </ion-card>\n  </ion-grid>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/peso/peso.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/peso/peso.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPesoPesoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>¿Cuánto <ion-text color=\"danger\">pesas</ion-text>?\n</h2>\n<ion-item lines=\"none\" >\n  <ion-input \n  (ionInput)=\"valor($event)\"\n  type=\"tel\" \n  value=\"0\" \n  inputmode=\"numeric\"\n  maxlength=\"3\"></ion-input>\n</ion-item>\n<ion-label class=\"titulopeque\">{{mensaje}}</ion-label>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button color=\"danger\" (click)=\"avanzar()\" [disabled]=\"habilitar\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" >\n    <ion-fab-button color=\"danger\" (click)=\"atras()\" >\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopinfoPopinfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-item lines=\"none\" (click)=\"bateria()\">\n    <ion-label>Demostración del ejercicio</ion-label>\n  </ion-item>\n\n  \n  <ion-item lines=\"none\" (click)=\"remplazar()\">\n    <ion-label>Remplazar ejercicio</ion-label>\n  </ion-item>\n  \n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popmensaje/popmensaje.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popmensaje/popmensaje.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopmensajePopmensajeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<p (click)=\"Cerrar()\" class=\"ion-text-center\">{{mensaje}}</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popremplazar/popremplazar.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popremplazar/popremplazar.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopremplazarPopremplazarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-item lines=\"none\" (click)=\"bateria()\">\n    <ion-label>Demostración del ejercicio</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" (click)=\"remplazar()\">\n    <ion-label>Seleccionar Ejercicio</ion-label>\n  </ion-item>\n\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/premium/premium.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/premium/premium.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPremiumPremiumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card *ngFor=\"let item of dato\">\n  <ion-card-content class=\"tarjeta\">\n    <ion-button class=\"btn-izquierda\"color=\"danger\" fill=\"outline\" slot=\"end\">{{item.price}}$</ion-button>\n    <p>{{item.name}}</p>\n    <p>{{item.description}}</p>\n  </ion-card-content>\n</ion-card>\n\n\n\n<ion-card  style=\"\nwidth: 254px; \nborder-radius: 10px;\ntext-transform: uppercase;\nfont-family: 'Open Sans';\n--background:#EF4044;\ncolor:white;\nmargin: 0 auto;\nmargin-bottom: 5px;\n\">\n<h4   style=\"margin: 10px; text-align: center;\"> \n<b>Continuar</b>\n</h4> \n</ion-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progreso/progreso.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progreso/progreso.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProgresoProgresoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid fixed>\n  <ion-row>\n    <ion-col size=\"6\">\n      <img src=\"https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg\" alt=\"\">\n      <h2>Antes</h2>\n    </ion-col>\n    <ion-col size=\"6\">\n      <img src=\"https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg\" alt=\"\">\n      <h2>Despues</h2>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialAlimentoPaso1TutorialAlimentoPaso1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" (click)=\"saltar()\">\n      Saltar \n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Alimentación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"box-img-container\">\n    <span class=\"identificador\"> 1 / 2 </span>\n    <img src=\"assets/img/imagen calentamiento@2x.png\">\n  </div>\n\n  <div class=\"box-text-container\">\n    <p class=\"parrafo\">\n      Bienvenido a los <b>planes de nutrición</b> personalizados y adaptados a tu objetivo de <b>Fittech</b>. <br> <br>Queremos que te familiarices y tratar de hacer de lo complejo algo <b>muy simple</b>, para que no solo cambies tus hábitos sino que puedas <b>aprender acerca de nutrición</b>. <br><br> \n      Si estás listo para comenzar <b>desliza</b>...\n    </p>\n  </div>\n\n\n\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialAlimentoPaso2TutorialAlimentoPaso2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/bateria-alimento\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\" (click)=\"saltar()\">\n      Saltar \n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Alimentación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"box-img-container\">\n    <span class=\"identificador\"> 2 / 2 </span>\n    <img src=\"assets/img/alimentacion2@2x.png\">\n  </div>\n\n  <div class=\"box-text-container\">\n    <!-- <p class=\"parrafo\">\n      Tus requerimientos nutricionales según tu objetivo son:\n    </p> -->\n    <p class=\"parrafo\">\n      Puedes ver nuestro tutorial para uso de la aplicación en nuestro canal oficial.\n    </p>\n  </div>\n\n  <!-- <img src=\"assets/img/barra.png\" alt=\"\"> -->\n\n  <iframe [src]=\"videoURL\" width=\"100%\" height=\"315\" frameborder=\"0\" allowfullscreen></iframe>\n\n  <div class=\"box-text-container\">\n    <!-- <p class=\"parrafo\">\n      Esta debería ser tu ingesta diaria de macronutrientes, según el objetivo que elegiste.\n    </p> -->\n    <!-- <p class=\"parrafo\">\n      Selecciona la imagen para redirigir al videotutorial.\n    </p> -->\n  </div>\n\n\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialAlimentoPaso3TutorialAlimentoPaso3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/bateria-alimento\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\" (click)=\"saltar()\">\n      Saltar\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Alimentación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"box-img-container\">\n    <span class=\"identificador\"> 3 / 4 </span>\n    <img src=\"assets/img/alimentacion2@2x.png\">\n  </div>\n\n  <div class=\"box-text-container\">\n    <p class=\"parrafo\">\n      Haz clic en <b>añadir</b> cada comida...\n    </p>\n  </div>\n\n  <img src=\"assets/img/alimentos3@2x.png\" alt=\"\">\n\n\n  <div class=\"box-text-container\">\n    <p class=\"parrafo\">\n      vas a ver un menú con los diferentes <b>macronutrientes</b> dónde al hacer clic \n      te aparecerá la lista de opciones:\n    </p>\n  </div>\n\n\n\n    <video width=\"100%\"  class=\"videoReproductor\" controls poster=\"assets/img/gif-logo2-video.gif\">\n      <source [src]= \"video1\" type=\"video/mp4\" />\n    </video>\n\n\n \n  <div class=\"box-text-container\">\n    <p class=\"parrafo\">\n      tranquilo que no tendrás que hacerlo siempre, cada vez será más <b>práctico y automatizado</b>.\n    </p>\n  </div>\n  <br>\n  <br>\n\n  <!-- obiar -->\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialAlimentoPaso4TutorialAlimentoPaso4ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <!-- <ion-buttons slot=\"start\" (click)=\"go()\">\n      <ion-back-button defaultHref=\"/bateria-alimento\"></ion-back-button> \n      <ion-icon name=\"checkmark-outline\" style=\"font-size: 24px; margin-left: 20px;\"   ></ion-icon>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\" (click)=\"saltar()\">\n      Saltar \n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">Alimentación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"box-img-container\">\n    <span class=\"identificador\"> 4 / 4 </span>\n    <img src=\"assets/img/alimentacion2@2x.png\">\n  </div>\n\n  <div class=\"box-text-container\">\n    <p class=\"parrafo\">\n      En la barra superior te saldrá un medidor que se irá llenando a medida que agregues comidas, éste te indicará la <b>cantidad ideal, para ese macronutriente</b> del tipo de comida que seleccionaste (desayuno, snack, almuerzo o cena)\n    </p>\n  </div>\n\n\n    <video \n      class=\"videoReproductor2\" poster=\"/\" controls >\n      <source [src]= \"video2\" type=\"video/mp4\" />\n    </video>\n\n\n\n  <div class=\"box-text-container\">\n    <p class=\"parrafo\">\n      Puedes <b>agregar alimentos</b> introduciendo los gramos totales o también usando medidas caseras mucho más fáciles de manejar si no tienes idea de cuánto agregar\n    </p>\n  </div>\n\n\n    <video width=\"100%\"  class=\"videoReproductor\" controls poster=\"assets/img/gif-logo2-video.gif\">\n      <source [src]= \"video3\" type=\"video/mp4\" />\n    </video>\n\n\n\n    <video width=\"100%\"  class=\"videoReproductor\" controls poster=\"assets/img/gif-logo2-video.gif\">\n      <source [src]= \"video4\" type=\"video/mp4\" />\n    </video>\n\n\n<div class=\"box-text-container\">\n  <p class=\"parrafo\">\n    Una vez estés seguro de tu selección haz clic en guardar y en el menú podrás entrar, \n    <b>ver y editar tu selección</b> .\n  </p>\n</div>\n\n<br>\n<br>\n\n<!-- <div class=\"box-video-container\">\n  <p>Video4</p>\n</div> -->\n\n<!-- <div class=\"box-text-container\">\n  <p class=\"parrafo\">\n    Aquí podrás visualizar el menú ideal que creaste para esa comida, y puedes <b>editarlo las veces que quieras</b> .\n  </p>\n</div> -->\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialPlanesPaso1TutorialPlanesPaso1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  \n  <p class=\"omitir\" (click)=\"omitir()\">\n    Omitir\n  </p>\n  \n  <div class=\"imagen\" >\n    <img src=\"assets/img/que_es_fittech_movil.jpg\" >\n  </div>\n  \n  <div style=\"position: absolute;top:14em;\">\n    <div class=\"titulo\">\n      <h2>¿Qué es Fittech?</h2>\n    </div>\n    \n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"box\">\n          <p style=\"margin-top: 0;\">Es un sistema inteligente de entrenamiento personal y nutrición que se adapta a los objetivos, contexto y posibilidades de cada persona, teniendo en cuenta todos los parámetros de salud de una manera integral. </p>\n          <p>Con un plan de entrenamiento y de nutrición personalizado, además de un registro de datos, fotos, e indicadores de salud, garantizamos un cambio de 180 grados a tu físico y tu salud.</p>\n          <p> Fittech cuenta con una tienda virtual donde podrás tener acceso a todo lo relacionado con fitness, suplementación e implementos deportivos a tan solo un clic de distancia.</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n \n  \n\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialPlanesPaso2TutorialPlanesPaso2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  \n  <p class=\"omitir\" (click)=\"omitir()\">\n    Omitir\n  </p>\n  \n  <div class=\"imagen\" >\n    <img src=\"assets/img/calentamientofinalizar1.jpg\" style=\"width: 100%;\">\n  </div>\n  \n  <div class=\"titulo\">\n    <h2>Personalización <br> única</h2>\n  </div>\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"box\">\n        <p style=\"margin-top: 0;\">La personalizacion minuciosa de FITTECH tiene en cuenta parametros especificos a la salud, composicion corporal, capacidades fisicas y lugar de entrenamiento a traves de test y cuestionarios inteligentes que la hacen unica en las app fitness actuales. </p>\n\n      </div>\n    </ion-col>\n  </ion-row>\n\n \n  \n\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialPlanesPaso3TutorialPlanesPaso3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  \n  <p class=\"omitir\"  (click)=\"omitir()\">\n    Omitir\n  </p>\n  \n  <div class=\"imagen\" >\n    <img src=\"assets/img/comer_nunca_fue_tan_divertido_movil.webp\" style=\"width: 100%;\">\n  </div>\n  \n  <div class=\"titulo\">\n    <h2>¡Comer nunca fue tan  <br> divertido!</h2>\n  </div>\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"box\">\n        <p style=\"margin-top: 0;\">Olvídate de las dietas super estrictas y restrictivas, queremos que aprendas acerca de nutrición. Fittech te enseña lo que nunca antes te han enseñado para lograr tus objetivos comiendo de manera sana, divertida y balanceada. </p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n \n  \n\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialPlanesPaso4TutorialPlanesPaso4ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n  \n  <p class=\"omitir\" (click)=\"omitir()\">\n    Omitir\n  </p>\n  \n  <div class=\"imagen\" >\n    <img src=\"assets/img/entrenamiento-sin-limites-sin-limites-movil.jpg\" style=\"width: 100%;\">\n  </div>\n\n  <div style=\"position: absolute; bottom: 6%;\">\n    <div class=\"titulo\">\n      <h2>Entrenamiento<br>  sin limites</h2>\n    </div>\n    \n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"box\">\n          <p style=\"margin-top: 0;\">Fittech cuenta con aproximadamente 400 ejercicios diferentes estructurados a través de planes de entrenamiento que varían diariamente de acuerdo al objetivo y posibilidades del usuario.</p>\n        </div>\n        <div>\n          <ion-card  style=\"\n          width: 88%; \n          height: 40px;\n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          --background:#EF4044;\n          color:white;\n          margin: 0 auto;\n          \"\n        (click)=\"omitir()\">\n        <h4 style=\"margin: 7px; text-align: center;\"> \n          Continuar\n        </h4> \n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n \n  \n\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-info/modal-info.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-info/modal-info.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalInfoModalInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-icon  style=\"font-size: 1.5rem;\" name=\"close-outline\" (click)=\"salir()\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"image\" alt=\"\" style=\"width:100%;\" \n  onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <!-- <h1 style=\"margin: 0; text-align: center; margin-bottom: 5px;\">{{nombre}}</h1> -->\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/antecedentefmliar/antecedentefmliar.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/antecedentefmliar/antecedentefmliar.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAntecedentefmliarAntecedentefmliarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-datos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 80%;*/\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 3rem;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 25px;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.imagen {\n  width: 130px;\n  height: 130px;\n  border-radius: 5px;\n}\n\n.tarjeta {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.letra {\n  padding-left: 35px;\n  padding-right: 35px;\n  font-size: 18px;\n  text-align: justify;\n  opacity: 0.7;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.mensaje {\n  font-size: 11px;\n  opacity: 0.5;\n  text-align: center;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW50ZWNlZGVudGVmbWxpYXIvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxhbnRlY2VkZW50ZWZtbGlhclxcYW50ZWNlZGVudGVmbWxpYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FudGVjZWRlbnRlZm1saWFyL2FudGVjZWRlbnRlZm1saWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBR0csc0JBQUE7QUNDTDs7QURFRTtFQUNFLHFCQUFBO0VBQ0E7Ozs7d0JBQUE7QUNLSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0NKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE9FO0VBQ0ksNkJBQUE7QUNKTjs7QURPRTtFQUNFLHVCQUFBO0FDSko7O0FETUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDSEo7O0FETUM7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1DO0VBQ0UsY0FBQTtFQUNDLFVBQUE7QUNISjs7QURNQztFQUNDLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDSEY7O0FETUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEQ7O0FETUE7RUFDQyxZQUFBO0VBQ0EseUJBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL2FudGVjZWRlbnRlZm1saWFyL2FudGVjZWRlbnRlZm1saWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuICBcbiAgKntcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgIC8qXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tZGF0b3MuanBnJyk7ICAgIFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7Ki9cbiAgfVxuICBcbiAgaW9uLWlucHV0e1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLDAsMCwwLjIpO1xuICB9XG5cblxuICAubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5jb250ZW5lZG9ye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuXG4gXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gXG5cbi5pbWFnZW57XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFyamV0YXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cblxuICBpb24tY29se1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4IWltcG9ydGFudDtcbiAgfVxuXG4gIC5teS1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiB9XG4ucGFyZW50LXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gfVxuXG4gLmxldHJhe1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG9wYWNpdHk6IDAuNztcbiB9XG5cbiBpb24tY2FyZHtcbiAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiBpb24tY2FyZDpob3ZlcntcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVuc2FqZXtcbiBmb250LXNpemU6IDExcHg7XG4gb3BhY2l0eTogMC41O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yLXRhcmpldGF7XG4gY29sb3I6IHdoaXRlO1xuIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59IiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAvKlxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2ltYWdlbi1kYXRvcy5qcGcnKTsgICAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTsqL1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJveC1zaGFkb3c6IDNweCA3cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmltYWdlbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFyamV0YSB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGV0cmEge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1lbnNhamUge1xuICBmb250LXNpemU6IDExcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sb3ItdGFyamV0YSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/antecedentefmliar/antecedentefmliar.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/antecedentefmliar/antecedentefmliar.component.ts ***!
    \******************************************************************/

  /*! exports provided: AntecedentefmliarComponent */

  /***/
  function srcAppAntecedentefmliarAntecedentefmliarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AntecedentefmliarComponent", function () {
      return AntecedentefmliarComponent;
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
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var AntecedentefmliarComponent =
    /*#__PURE__*/
    function () {
      function AntecedentefmliarComponent(ruta, cdRef, usuarioservicio, ApiService, loadingController) {
        _classCallCheck(this, AntecedentefmliarComponent);

        this.ruta = ruta;
        this.cdRef = cdRef;
        this.usuarioservicio = usuarioservicio;
        this.ApiService = ApiService;
        this.loadingController = loadingController;
        this.cambiarPantalla = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.condicionPersona = {
          arritmia_corazon: false,
          ataque_corazon: false,
          operacion_corazon: false,
          enfermedad_corazon: false,
          presion_corazon: false,
          diabete_corazon: false,
          muerte_prematura: false,
          insuficiencia_renal: false,
          ninguna: false
        };
        this.habilitar = true;
      }

      _createClass(AntecedentefmliarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "avanzar",
        value: function avanzar() {
          if (!this.condicionPersona.arritmia_corazon && !this.condicionPersona.ataque_corazon && !this.condicionPersona.diabete_corazon && !this.condicionPersona.enfermedad_corazon && !this.condicionPersona.muerte_prematura && !this.condicionPersona.ninguna && !this.condicionPersona.operacion_corazon && !this.condicionPersona.presion_corazon && !this.condicionPersona.insuficiencia_renal) {
            this.habilitar = false;
          } else {
            this.usuarioservicio.condicionCorazon(this.condicionPersona); //  localStorage.setItem('condicionPersona', JSON.stringify(this.condicionPersona))

            this.evaluar();
          }
        }
      }, {
        key: "historialcorazon",
        value: function historialcorazon(datos) {
          console.log(this.habilitar);

          if (datos == 'option') {
            this.condicionPersona.ninguna = false;
            this.habilitar = false;
            this.cdRef.detectChanges();
          }

          if (datos == 'none') {
            this.condicionPersona.arritmia_corazon = false;
            this.condicionPersona.ataque_corazon = false;
            this.condicionPersona.operacion_corazon = false;
            this.condicionPersona.enfermedad_corazon = false;
            this.condicionPersona.presion_corazon = false;
            this.condicionPersona.diabete_corazon = false;
            this.condicionPersona.muerte_prematura = false;
            this.condicionPersona.insuficiencia_renal = false;

            if (this.condicionPersona.ninguna) {
              this.habilitar = false;
            } else {
              this.habilitar = true;
            }

            this.cdRef.detectChanges();
          }
        }
      }, {
        key: "evaluar",
        value: function evaluar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //this.ruta.navigateRoot(['/relacioncadera'])

                    /*  this.presentLoading(); */

                    /* const valido = await this.ApiService.Antecedentefamiliar(this.usuarioservicio.condicionPersona)
                    if(valido){ */

                    /*  this.loadingController.dismiss() */
                    this.ruta.navigateRoot('corazon');
                    /* }else{
                      return
                    } */

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "atras",
        value: function atras() {
          this.cambiarPantalla.emit(2);
        }
      }]);

      return AntecedentefmliarComponent;
    }();

    AntecedentefmliarComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AntecedentefmliarComponent.prototype, "cambiarPantalla", void 0);
    AntecedentefmliarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-antecedentefmliar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./antecedentefmliar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/antecedentefmliar/antecedentefmliar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./antecedentefmliar.component.scss */
      "./src/app/antecedentefmliar/antecedentefmliar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], AntecedentefmliarComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/login.guard */
    "./src/app/guards/login.guard.ts");
    /* harmony import */


    var _guards_tutorial_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/tutorial.guard */
    "./src/app/guards/tutorial.guard.ts");

    var routes = [{
      path: "home",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "pages-home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: "objetivo",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-objetivo-objetivo-module */
        "pages-objetivo-objetivo-module").then(__webpack_require__.bind(null,
        /*! ./pages/objetivo/objetivo.module */
        "./src/app/pages/objetivo/objetivo.module.ts")).then(function (m) {
          return m.ObjetivoPageModule;
        });
      }
    }, {
      path: "pasoinicial",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pasoinicial-pasoinicial-module */
        "pages-pasoinicial-pasoinicial-module").then(__webpack_require__.bind(null,
        /*! ./pages/pasoinicial/pasoinicial.module */
        "./src/app/pages/pasoinicial/pasoinicial.module.ts")).then(function (m) {
          return m.PasoinicialPageModule;
        });
      }
    }, {
      path: "login",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      },
      canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    }, {
      path: "terminos",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terminos-terminos-module */
        "pages-terminos-terminos-module").then(__webpack_require__.bind(null,
        /*! ./pages/terminos/terminos.module */
        "./src/app/pages/terminos/terminos.module.ts")).then(function (m) {
          return m.TerminosPageModule;
        });
      }
    }, {
      path: "registrar-info",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registrar-info-registrar-info-module */
        "registrar-info-registrar-info-module").then(__webpack_require__.bind(null,
        /*! ./registrar-info/registrar-info.module */
        "./src/app/registrar-info/registrar-info.module.ts")).then(function (m) {
          return m.RegistrarInfoPageModule;
        });
      }
    }, {
      path: "experiencia",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-experiencia-experiencia-module */
        "pages-experiencia-experiencia-module").then(__webpack_require__.bind(null,
        /*! ./pages/experiencia/experiencia.module */
        "./src/app/pages/experiencia/experiencia.module.ts")).then(function (m) {
          return m.ExperienciaPageModule;
        });
      }
    }, {
      path: "lugar-ejercicios",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-lugar-ejercicios-lugar-ejercicios-module */
        "pages-lugar-ejercicios-lugar-ejercicios-module").then(__webpack_require__.bind(null,
        /*! ./pages/lugar-ejercicios/lugar-ejercicios.module */
        "./src/app/pages/lugar-ejercicios/lugar-ejercicios.module.ts")).then(function (m) {
          return m.LugarEjerciciosPageModule;
        });
      }
    }, {
      path: "actividad",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-actividad-actividad-module */
        "pages-actividad-actividad-module").then(__webpack_require__.bind(null,
        /*! ./pages/actividad/actividad.module */
        "./src/app/pages/actividad/actividad.module.ts")).then(function (m) {
          return m.ActividadPageModule;
        });
      }
    }, {
      path: "dashboard",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./pages/dashboard/dashboard.module */
        "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: "corazon",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | corazon-corazon-module */
        "corazon-corazon-module").then(__webpack_require__.bind(null,
        /*! ./corazon/corazon.module */
        "./src/app/corazon/corazon.module.ts")).then(function (m) {
          return m.CorazonPageModule;
        });
      }
    }, {
      path: "antecedentefamiliar",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-antecedentefamiliar-antecedentefamiliar-module */
        "pages-antecedentefamiliar-antecedentefamiliar-module").then(__webpack_require__.bind(null,
        /*! ./pages/antecedentefamiliar/antecedentefamiliar.module */
        "./src/app/pages/antecedentefamiliar/antecedentefamiliar.module.ts")).then(function (m) {
          return m.AntecedentefamiliarPageModule;
        });
      }
    }, {
      path: "test-fuerza-info",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-info-test-fuerza-info-module */
        "pages-TestFuerza-test-fuerza-info-test-fuerza-info-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-info/test-fuerza-info.module */
        "./src/app/pages/TestFuerza/test-fuerza-info/test-fuerza-info.module.ts")).then(function (m) {
          return m.TestFuerzaInfoPageModule;
        });
      }
    }, {
      path: "test-fuerza-manual",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-manual-test-fuerza-manual-module */
        "pages-TestFuerza-test-fuerza-manual-test-fuerza-manual-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.module */
        "./src/app/pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.module.ts")).then(function (m) {
          return m.TestFuerzaManualPageModule;
        });
      }
    }, {
      path: "test-fuerza-pasos1",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-pasos1-test-fuerza-pasos1-module */
        "pages-TestFuerza-test-fuerza-pasos1-test-fuerza-pasos1-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.module */
        "./src/app/pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.module.ts")).then(function (m) {
          return m.TestFuerzaPasos1PageModule;
        });
      }
    }, {
      path: "test-fuerza-pasos2",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-pasos2-test-fuerza-pasos2-module */
        "pages-TestFuerza-test-fuerza-pasos2-test-fuerza-pasos2-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-pasos2/test-fuerza-pasos2.module */
        "./src/app/pages/TestFuerza/test-fuerza-pasos2/test-fuerza-pasos2.module.ts")).then(function (m) {
          return m.TestFuerzaPasos2PageModule;
        });
      }
    }, {
      path: "test-fuerza-pasos3",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-pasos3-test-fuerza-pasos3-module */
        "pages-TestFuerza-test-fuerza-pasos3-test-fuerza-pasos3-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.module */
        "./src/app/pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.module.ts")).then(function (m) {
          return m.TestFuerzaPasos3PageModule;
        });
      }
    }, {
      path: "test-fuerza-pasos4",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-pasos4-test-fuerza-pasos4-module */
        "pages-TestFuerza-test-fuerza-pasos4-test-fuerza-pasos4-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.module */
        "./src/app/pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.module.ts")).then(function (m) {
          return m.TestFuerzaPasos4PageModule;
        });
      }
    }, {
      path: "test-fuerza-menu",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-menu-test-fuerza-menu-module */
        "pages-TestFuerza-test-fuerza-menu-test-fuerza-menu-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.module */
        "./src/app/pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.module.ts")).then(function (m) {
          return m.TestFuerzaMenuPageModule;
        });
      }
    }, {
      path: "calendario",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-calendario-calendario-module */
        "pages-calendario-calendario-module").then(__webpack_require__.bind(null,
        /*! ./pages/calendario/calendario.module */
        "./src/app/pages/calendario/calendario.module.ts")).then(function (m) {
          return m.CalendarioPageModule;
        });
      }
    }, {
      path: "rutina",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rutina-rutina-module */
        "pages-rutina-rutina-module").then(__webpack_require__.bind(null,
        /*! ./pages/rutina/rutina.module */
        "./src/app/pages/rutina/rutina.module.ts")).then(function (m) {
          return m.RutinaPageModule;
        });
      }
    }, {
      path: "comida",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-comida-comida-module */
        "pages-comida-comida-module").then(__webpack_require__.bind(null,
        /*! ./pages/comida/comida.module */
        "./src/app/pages/comida/comida.module.ts")).then(function (m) {
          return m.ComidaPageModule;
        });
      }
    }, {
      path: "perfil",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-perfil-perfil-module */
        "perfil-perfil-module").then(__webpack_require__.bind(null,
        /*! ./pages/perfil/perfil.module */
        "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
          return m.PerfilPageModule;
        });
      }
    }, {
      path: "tabs",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: "test-resistencia",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestResistencia-test-resistencia-test-resistencia-module */
        "pages-TestResistencia-test-resistencia-test-resistencia-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestResistencia/test-resistencia/test-resistencia.module */
        "./src/app/pages/TestResistencia/test-resistencia/test-resistencia.module.ts")).then(function (m) {
          return m.TestResistenciaPageModule;
        });
      }
    }, {
      path: "test-fuerza-categoria",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-categoria-test-fuerza-categoria-module */
        "pages-TestFuerza-test-fuerza-categoria-test-fuerza-categoria-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.module */
        "./src/app/pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.module.ts")).then(function (m) {
          return m.TestFuerzaCategoriaPageModule;
        });
      }
    }, {
      path: "test-fuerza-menu2",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-menu2-test-fuerza-menu2-module */
        "pages-TestFuerza-test-fuerza-menu2-test-fuerza-menu2-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.module */
        "./src/app/pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.module.ts")).then(function (m) {
          return m.TestFuerzaMenu2PageModule;
        });
      }
    }, {
      path: "test-fuerza-menu3",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-menu3-test-fuerza-menu3-module */
        "pages-TestFuerza-test-fuerza-menu3-test-fuerza-menu3-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.module */
        "./src/app/pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.module.ts")).then(function (m) {
          return m.TestFuerzaMenu3PageModule;
        });
      }
    }, {
      path: "mensajecorazon",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mensajecorazon-mensajecorazon-module */
        "pages-mensajecorazon-mensajecorazon-module").then(__webpack_require__.bind(null,
        /*! ./pages/mensajecorazon/mensajecorazon.module */
        "./src/app/pages/mensajecorazon/mensajecorazon.module.ts")).then(function (m) {
          return m.MensajecorazonPageModule;
        });
      }
    }, {
      path: "entrenamientos",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | entrenamientos-entrenamientos-module */
        [__webpack_require__.e("common"), __webpack_require__.e("entrenamientos-entrenamientos-module")]).then(__webpack_require__.bind(null,
        /*! ./entrenamientos/entrenamientos.module */
        "./src/app/entrenamientos/entrenamientos.module.ts")).then(function (m) {
          return m.EntrenamientosPageModule;
        });
      }
    }, {
      path: "bateria/:id",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bateria-bateria-module */
        [__webpack_require__.e("common"), __webpack_require__.e("bateria-bateria-module")]).then(__webpack_require__.bind(null,
        /*! ./bateria/bateria.module */
        "./src/app/bateria/bateria.module.ts")).then(function (m) {
          return m.BateriaPageModule;
        });
      }
    }, {
      path: "test-fuerza-manual-pasos/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestFuerza-test-fuerza-manual-pasos-test-fuerza-manual-pasos-module */
        "pages-TestFuerza-test-fuerza-manual-pasos-test-fuerza-manual-pasos-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestFuerza/test-fuerza-manual-pasos/test-fuerza-manual-pasos.module */
        "./src/app/pages/TestFuerza/test-fuerza-manual-pasos/test-fuerza-manual-pasos.module.ts")).then(function (m) {
          return m.TestFuerzaManualPasosPageModule;
        });
      }
    }, {
      path: "calentamiento",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-calentamiento-calentamiento-module */
        "pages-calentamiento-calentamiento-module").then(__webpack_require__.bind(null,
        /*! ./pages/calentamiento/calentamiento.module */
        "./src/app/pages/calentamiento/calentamiento.module.ts")).then(function (m) {
          return m.CalentamientoPageModule;
        });
      }
    }, {
      path: "cambiarejercicio",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cambiarejercicio-cambiarejercicio-module */
        "cambiarejercicio-cambiarejercicio-module").then(__webpack_require__.bind(null,
        /*! ./cambiarejercicio/cambiarejercicio.module */
        "./src/app/cambiarejercicio/cambiarejercicio.module.ts")).then(function (m) {
          return m.CambiarejercicioPageModule;
        });
      }
    }, {
      path: "listaejercicioremplazar",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | listaejercicioremplazar-listaejercicioremplazar-module */
        "listaejercicioremplazar-listaejercicioremplazar-module").then(__webpack_require__.bind(null,
        /*! ./listaejercicioremplazar/listaejercicioremplazar.module */
        "./src/app/listaejercicioremplazar/listaejercicioremplazar.module.ts")).then(function (m) {
          return m.ListaejercicioremplazarPageModule;
        });
      }
    }, {
      path: "calentamientodos",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-calentamientodos-calentamientodos-module */
        "pages-calentamientodos-calentamientodos-module").then(__webpack_require__.bind(null,
        /*! ./pages/calentamientodos/calentamientodos.module */
        "./src/app/pages/calentamientodos/calentamientodos.module.ts")).then(function (m) {
          return m.CalentamientodosPageModule;
        });
      }
    }, {
      path: "bateriarutina",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateriarutina-bateriarutina-module */
        "bateriarutina-bateriarutina-module").then(__webpack_require__.bind(null,
        /*! ./bateriarutina/bateriarutina.module */
        "./src/app/bateriarutina/bateriarutina.module.ts")).then(function (m) {
          return m.BateriarutinaPageModule;
        });
      }
    }, {
      path: "relacioncadera",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | relacioncadera-relacioncadera-module */
        "relacioncadera-relacioncadera-module").then(__webpack_require__.bind(null,
        /*! ./relacioncadera/relacioncadera.module */
        "./src/app/relacioncadera/relacioncadera.module.ts")).then(function (m) {
          return m.RelacioncaderaPageModule;
        });
      }
    }, {
      path: "test-capacidad-info",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestCapacidad-test-capacidad-info-test-capacidad-info-module */
        "pages-TestCapacidad-test-capacidad-info-test-capacidad-info-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestCapacidad/test-capacidad-info/test-capacidad-info.module */
        "./src/app/pages/TestCapacidad/test-capacidad-info/test-capacidad-info.module.ts")).then(function (m) {
          return m.TestCapacidadInfoPageModule;
        });
      }
    }, {
      path: "bateriahome/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestCapacidad-bateriahome-bateriahome-module */
        "pages-TestCapacidad-bateriahome-bateriahome-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestCapacidad/bateriahome/bateriahome.module */
        "./src/app/pages/TestCapacidad/bateriahome/bateriahome.module.ts")).then(function (m) {
          return m.BateriahomePageModule;
        });
      }
    }, {
      path: "bateriaesperahome/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestCapacidad-bateriaesperahome-bateriaesperahome-module */
        "pages-TestCapacidad-bateriaesperahome-bateriaesperahome-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestCapacidad/bateriaesperahome/bateriaesperahome.module */
        "./src/app/pages/TestCapacidad/bateriaesperahome/bateriaesperahome.module.ts")).then(function (m) {
          return m.BateriaesperahomePageModule;
        });
      }
    }, {
      path: "mensajecapacidad/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-TestCapacidad-mensajecapacidad-mensajecapacidad-module */
        "pages-TestCapacidad-mensajecapacidad-mensajecapacidad-module").then(__webpack_require__.bind(null,
        /*! ./pages/TestCapacidad/mensajecapacidad/mensajecapacidad.module */
        "./src/app/pages/TestCapacidad/mensajecapacidad/mensajecapacidad.module.ts")).then(function (m) {
          return m.MensajecapacidadPageModule;
        });
      }
    }, {
      path: "percepcionentrenamiento",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-percepcionentrenamiento-percepcionentrenamiento-module */
        "pages-percepcionentrenamiento-percepcionentrenamiento-module").then(__webpack_require__.bind(null,
        /*! ./pages/percepcionentrenamiento/percepcionentrenamiento.module */
        "./src/app/pages/percepcionentrenamiento/percepcionentrenamiento.module.ts")).then(function (m) {
          return m.PercepcionentrenamientoPageModule;
        });
      }
    }, {
      path: "bateriarutinahome/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateriarutinahome-bateriarutinahome-module */
        "bateriarutinahome-bateriarutinahome-module").then(__webpack_require__.bind(null,
        /*! ./bateriarutinahome/bateriarutinahome.module */
        "./src/app/bateriarutinahome/bateriarutinahome.module.ts")).then(function (m) {
          return m.BateriarutinahomePageModule;
        });
      }
    }, {
      path: "bateriarutinaesperahome/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateriarutinaesperahome-bateriarutinaesperahome-module */
        "bateriarutinaesperahome-bateriarutinaesperahome-module").then(__webpack_require__.bind(null,
        /*! ./bateriarutinaesperahome/bateriarutinaesperahome.module */
        "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.module.ts")).then(function (m) {
          return m.BateriarutinaesperahomePageModule;
        });
      }
    }, {
      path: "descargar",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | descargar-descargar-module */
        "descargar-descargar-module").then(__webpack_require__.bind(null,
        /*! ./descargar/descargar.module */
        "./src/app/descargar/descargar.module.ts")).then(function (m) {
          return m.DescargarPageModule;
        });
      }
    }, {
      path: "rangodeedad",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | seriedepreguntas-rangodeedad-rangodeedad-module */
        "seriedepreguntas-rangodeedad-rangodeedad-module").then(__webpack_require__.bind(null,
        /*! ./seriedepreguntas/rangodeedad/rangodeedad.module */
        "./src/app/seriedepreguntas/rangodeedad/rangodeedad.module.ts")).then(function (m) {
          return m.RangodeedadPageModule;
        });
      }
    }, {
      path: "pesoyestatura",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | seriedepreguntas-pesoyestatura-pesoyestatura-module */
        "seriedepreguntas-pesoyestatura-pesoyestatura-module").then(__webpack_require__.bind(null,
        /*! ./seriedepreguntas/pesoyestatura/pesoyestatura.module */
        "./src/app/seriedepreguntas/pesoyestatura/pesoyestatura.module.ts")).then(function (m) {
          return m.PesoyestaturaPageModule;
        });
      }
    }, {
      path: "form-medico",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | seriedepreguntas-form-medico-form-medico-module */
        "seriedepreguntas-form-medico-form-medico-module").then(__webpack_require__.bind(null,
        /*! ./seriedepreguntas/form-medico/form-medico.module */
        "./src/app/seriedepreguntas/form-medico/form-medico.module.ts")).then(function (m) {
          return m.FormMedicoPageModule;
        });
      }
    }, {
      path: "test-capacidad-manual",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | test-capacidad-manual-test-capacidad-manual-module */
        "test-capacidad-manual-test-capacidad-manual-module").then(__webpack_require__.bind(null,
        /*! ./test-capacidad-manual/test-capacidad-manual.module */
        "./src/app/test-capacidad-manual/test-capacidad-manual.module.ts")).then(function (m) {
          return m.TestCapacidadManualPageModule;
        });
      }
    }, {
      path: "calentamiento-info",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | calentamiento-info-calentamiento-info-module */
        "calentamiento-info-calentamiento-info-module").then(__webpack_require__.bind(null,
        /*! ./calentamiento-info/calentamiento-info.module */
        "./src/app/calentamiento-info/calentamiento-info.module.ts")).then(function (m) {
          return m.CalentamientoInfoPageModule;
        });
      }
    }, {
      path: "bateriacalentamientohome/:id",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bateriacalentamientohome-bateriacalentamientohome-module */
        [__webpack_require__.e("common"), __webpack_require__.e("bateriacalentamientohome-bateriacalentamientohome-module")]).then(__webpack_require__.bind(null,
        /*! ./bateriacalentamientohome/bateriacalentamientohome.module */
        "./src/app/bateriacalentamientohome/bateriacalentamientohome.module.ts")).then(function (m) {
          return m.BateriacalentamientohomePageModule;
        });
      }
    }, {
      path: "bateriacalentamientoesperahome/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateriacalentamientoesperahome-bateriacalentamientoesperahome-module */
        "bateriacalentamientoesperahome-bateriacalentamientoesperahome-module").then(__webpack_require__.bind(null,
        /*! ./bateriacalentamientoesperahome/bateriacalentamientoesperahome.module */
        "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.module.ts")).then(function (m) {
          return m.BateriacalentamientoesperahomePageModule;
        });
      }
    }, {
      path: "bateriacalentamientofinalizar",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateriacalentamientofinalizar-bateriacalentamientofinalizar-module */
        "bateriacalentamientofinalizar-bateriacalentamientofinalizar-module").then(__webpack_require__.bind(null,
        /*! ./bateriacalentamientofinalizar/bateriacalentamientofinalizar.module */
        "./src/app/bateriacalentamientofinalizar/bateriacalentamientofinalizar.module.ts")).then(function (m) {
          return m.BateriacalentamientofinalizarPageModule;
        });
      }
    }, {
      path: "estiramientos",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | estiramientos-estiramientos-module */
        "estiramientos-estiramientos-module").then(__webpack_require__.bind(null,
        /*! ./estiramientos/estiramientos.module */
        "./src/app/estiramientos/estiramientos.module.ts")).then(function (m) {
          return m.EstiramientosPageModule;
        });
      }
    }, {
      path: "rutina-entrenamiento",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | rutina-entrenamiento-rutina-entrenamiento-module */
        [__webpack_require__.e("common"), __webpack_require__.e("rutina-entrenamiento-rutina-entrenamiento-module")]).then(__webpack_require__.bind(null,
        /*! ./rutina-entrenamiento/rutina-entrenamiento.module */
        "./src/app/rutina-entrenamiento/rutina-entrenamiento.module.ts")).then(function (m) {
          return m.RutinaEntrenamientoPageModule;
        });
      }
    }, {
      path: "porcentajegrasa",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | porcentajegrasa-porcentajegrasa-module */
        "porcentajegrasa-porcentajegrasa-module").then(__webpack_require__.bind(null,
        /*! ./porcentajegrasa/porcentajegrasa.module */
        "./src/app/porcentajegrasa/porcentajegrasa.module.ts")).then(function (m) {
          return m.PorcentajegrasaPageModule;
        });
      }
    }, {
      path: "medidas",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | medidas-medidas-module */
        [__webpack_require__.e("common"), __webpack_require__.e("medidas-medidas-module")]).then(__webpack_require__.bind(null,
        /*! ./medidas/medidas.module */
        "./src/app/medidas/medidas.module.ts")).then(function (m) {
          return m.MedidasPageModule;
        });
      }
    }, {
      path: "indicadores",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | indicadores-indicadores-module */
        "indicadores-indicadores-module").then(__webpack_require__.bind(null,
        /*! ./indicadores/indicadores.module */
        "./src/app/indicadores/indicadores.module.ts")).then(function (m) {
          return m.IndicadoresPageModule;
        });
      }
    }, {
      path: "lineanutricional",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lineanutricional-lineanutricional-module */
        "lineanutricional-lineanutricional-module").then(__webpack_require__.bind(null,
        /*! ./lineanutricional/lineanutricional.module */
        "./src/app/lineanutricional/lineanutricional.module.ts")).then(function (m) {
          return m.LineanutricionalPageModule;
        });
      }
    }, {
      path: "alimentos-no-like",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | alimentos-no-like-alimentos-no-like-module */
        "alimentos-no-like-alimentos-no-like-module").then(__webpack_require__.bind(null,
        /*! ./alimentos-no-like/alimentos-no-like.module */
        "./src/app/alimentos-no-like/alimentos-no-like.module.ts")).then(function (m) {
          return m.AlimentosNoLikePageModule;
        });
      }
    }, {
      path: "bateria-alimento",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateria-alimento-bateria-alimento-module */
        "bateria-alimento-bateria-alimento-module").then(__webpack_require__.bind(null,
        /*! ./bateria-alimento/bateria-alimento.module */
        "./src/app/bateria-alimento/bateria-alimento.module.ts")).then(function (m) {
          return m.BateriaAlimentoPageModule;
        });
      }
    }, {
      path: "alimentos-seleccion/:id",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | alimentos-seleccion-alimentos-seleccion-module */
        [__webpack_require__.e("common"), __webpack_require__.e("alimentos-seleccion-alimentos-seleccion-module")]).then(__webpack_require__.bind(null,
        /*! ./alimentos-seleccion/alimentos-seleccion.module */
        "./src/app/alimentos-seleccion/alimentos-seleccion.module.ts")).then(function (m) {
          return m.AlimentosSeleccionPageModule;
        });
      }
    }, {
      path: "listadoalimento/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | listadoalimento-listadoalimento-module */
        "listadoalimento-listadoalimento-module").then(__webpack_require__.bind(null,
        /*! ./listadoalimento/listadoalimento.module */
        "./src/app/listadoalimento/listadoalimento.module.ts")).then(function (m) {
          return m.ListadoalimentoPageModule;
        });
      }
    }, {
      path: "alimentos-editar/:id",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | alimentos-editar-alimentos-editar-module */
        [__webpack_require__.e("common"), __webpack_require__.e("alimentos-editar-alimentos-editar-module")]).then(__webpack_require__.bind(null,
        /*! ./alimentos-editar/alimentos-editar.module */
        "./src/app/alimentos-editar/alimentos-editar.module.ts")).then(function (m) {
          return m.AlimentosEditarPageModule;
        });
      }
    }, {
      path: "modal-medidas",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modal-medidas-modal-medidas-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./modal-medidas/modal-medidas.module */
        "./src/app/modal-medidas/modal-medidas.module.ts")).then(function (m) {
          return m.ModalMedidasPageModule;
        });
      }
    }, {
      path: "progreso",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | progreso-progreso-module */
        [__webpack_require__.e("common"), __webpack_require__.e("progreso-progreso-module")]).then(__webpack_require__.bind(null,
        /*! ./progreso/progreso.module */
        "./src/app/progreso/progreso.module.ts")).then(function (m) {
          return m.ProgresoPageModule;
        });
      }
    }, {
      path: "bateria-estiramientos",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | bateria-estiramientos-bateria-estiramientos-module */
        [__webpack_require__.e("common"), __webpack_require__.e("bateria-estiramientos-bateria-estiramientos-module")]).then(__webpack_require__.bind(null,
        /*! ./bateria-estiramientos/bateria-estiramientos.module */
        "./src/app/bateria-estiramientos/bateria-estiramientos.module.ts")).then(function (m) {
          return m.BateriaEstiramientosPageModule;
        });
      }
    }, {
      path: "tutorial-alimentacion",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tutorial-alimentacion-tutorial-alimentacion-module */
        "tutorial-alimentacion-tutorial-alimentacion-module").then(__webpack_require__.bind(null,
        /*! ./tutorial-alimentacion/tutorial-alimentacion.module */
        "./src/app/tutorial-alimentacion/tutorial-alimentacion.module.ts")).then(function (m) {
          return m.TutorialAlimentacionPageModule;
        });
      },
      canActivate: [_guards_tutorial_guard__WEBPACK_IMPORTED_MODULE_4__["TutorialGuard"]]
    }, {
      path: "bateria-remplazo/:id",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bateria-remplazo-bateria-remplazo-module */
        "bateria-remplazo-bateria-remplazo-module").then(__webpack_require__.bind(null,
        /*! ./bateria-remplazo/bateria-remplazo.module */
        "./src/app/bateria-remplazo/bateria-remplazo.module.ts")).then(function (m) {
          return m.BateriaRemplazoPageModule;
        });
      }
    }, {
      path: 'tienda',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tienda-tienda-module */
        [__webpack_require__.e("common"), __webpack_require__.e("tienda-tienda-module")]).then(__webpack_require__.bind(null,
        /*! ./tienda/tienda.module */
        "./src/app/tienda/tienda.module.ts")).then(function (m) {
          return m.TiendaPageModule;
        });
      }
    }, {
      path: 'tienda-productos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tienda-productos-tienda-productos-module */
        [__webpack_require__.e("common"), __webpack_require__.e("tienda-productos-tienda-productos-module")]).then(__webpack_require__.bind(null,
        /*! ./tienda-productos/tienda-productos.module */
        "./src/app/tienda-productos/tienda-productos.module.ts")).then(function (m) {
          return m.TiendaProductosPageModule;
        });
      }
    }, // {
    //   path: '',
    //   loadChildren: () => import('./tutorial-planes/tutorial-planes.module').then( m => m.TutorialPlanesPageModule),
    //   canActivate: [IntroGuard]
    // },
    {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-landing-landing-module */
        "pages-landing-landing-module").then(__webpack_require__.bind(null,
        /*! ./pages/landing/landing.module */
        "./src/app/pages/landing/landing.module.ts")).then(function (m) {
          return m.LandingModule;
        });
      }
    }, {
      path: 'planes-pagos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | planes-pagos-planes-pagos-module */
        "planes-pagos-planes-pagos-module").then(__webpack_require__.bind(null,
        /*! ./planes-pagos/planes-pagos.module */
        "./src/app/planes-pagos/planes-pagos.module.ts")).then(function (m) {
          return m.PlanesPagosPageModule;
        });
      }
    }, {
      path: 'modal-fotos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modal-fotos-modal-fotos-module */
        "modal-fotos-modal-fotos-module").then(__webpack_require__.bind(null,
        /*! ./modal-fotos/modal-fotos.module */
        "./src/app/modal-fotos/modal-fotos.module.ts")).then(function (m) {
          return m.ModalFotosPageModule;
        });
      }
    }, {
      path: 'modal-comparacion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modal-comparacion-modal-comparacion-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./modal-comparacion/modal-comparacion.module */
        "./src/app/modal-comparacion/modal-comparacion.module.ts")).then(function (m) {
          return m.ModalComparacionPageModule;
        });
      }
    }, {
      path: 'paypal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | paypal-paypal-module */
        "paypal-paypal-module").then(__webpack_require__.bind(null,
        /*! ./paypal/paypal.module */
        "./src/app/paypal/paypal.module.ts")).then(function (m) {
          return m.PaypalPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, oneSignal, storage) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.showSplash = true;
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            //este codigo es para desabiitar el back button en toda la app
            document.addEventListener("backbutton", function (e) {
              console.log("disabled");
            }, false);

            _this.oneSignal.startInit("74576420-bf38-4e67-b402-a547e2bb8bd8", "190542733909").inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification).endInit();

            _this.oneSignal.getIds().then(function (identity) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log("tokens onesingal", identity);
                        this.storage.set("pushToken", identity.pushToken);
                        this.storage.set("pushIdToken", identity.userId);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });

            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeApp();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
    /* harmony import */


    var _decimals_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./decimals.directive */
    "./src/app/decimals.directive.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _decimals_directive__WEBPACK_IMPORTED_MODULE_15__["TwoDigitDecimaNumberDirective"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"].forRoot({
        hardwareBackButton: false
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["firebaseConfig"])],
      providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__["Camera"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_24__["WebView"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_14__["PreviewAnyFile"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicRouteStrategy"]
      }, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_25__["OneSignal"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/back-btn/back-btn.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/back-btn/back-btn.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackBtnBackBtnComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stYnRuL2JhY2stYnRuLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/back-btn/back-btn.component.ts":
  /*!************************************************!*\
    !*** ./src/app/back-btn/back-btn.component.ts ***!
    \************************************************/

  /*! exports provided: BackBtnComponent */

  /***/
  function srcAppBackBtnBackBtnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackBtnComponent", function () {
      return BackBtnComponent;
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

    var BackBtnComponent =
    /*#__PURE__*/
    function () {
      function BackBtnComponent(navCtrl) {
        _classCallCheck(this, BackBtnComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(BackBtnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "atras",
        value: function atras() {
          this.navCtrl.pop();
        }
      }]);

      return BackBtnComponent;
    }();

    BackBtnComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    BackBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-back-btn',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./back-btn.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/back-btn/back-btn.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./back-btn.component.scss */
      "./src/app/back-btn/back-btn.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], BackBtnComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _edad_edad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edad/edad.component */
    "./src/app/components/edad/edad.component.ts");
    /* harmony import */


    var _estatura_estatura_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./estatura/estatura.component */
    "./src/app/components/estatura/estatura.component.ts");
    /* harmony import */


    var _peso_peso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./peso/peso.component */
    "./src/app/components/peso/peso.component.ts");
    /* harmony import */


    var _historial_historial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./historial/historial.component */
    "./src/app/components/historial/historial.component.ts");
    /* harmony import */


    var _popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./popinfo/popinfo.component */
    "./src/app/components/popinfo/popinfo.component.ts");
    /* harmony import */


    var _popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./popremplazar/popremplazar.component */
    "./src/app/components/popremplazar/popremplazar.component.ts");
    /* harmony import */


    var _popmensaje_popmensaje_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./popmensaje/popmensaje.component */
    "./src/app/components/popmensaje/popmensaje.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _antecedentefmliar_antecedentefmliar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../antecedentefmliar/antecedentefmliar.component */
    "./src/app/antecedentefmliar/antecedentefmliar.component.ts");
    /* harmony import */


    var _back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../back-btn/back-btn.component */
    "./src/app/back-btn/back-btn.component.ts");
    /* harmony import */


    var _indicadores_indicadores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./indicadores/indicadores.component */
    "./src/app/components/indicadores/indicadores.component.ts");
    /* harmony import */


    var _medidas_medidas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./medidas/medidas.component */
    "./src/app/components/medidas/medidas.component.ts");
    /* harmony import */


    var _progreso_progreso_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./progreso/progreso.component */
    "./src/app/components/progreso/progreso.component.ts");
    /* harmony import */


    var _premium_premium_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./premium/premium.component */
    "./src/app/components/premium/premium.component.ts");
    /* harmony import */


    var _indicadorescomparacion_indicadorescomparacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./indicadorescomparacion/indicadorescomparacion.component */
    "./src/app/components/indicadorescomparacion/indicadorescomparacion.component.ts");
    /* harmony import */


    var _estatura2_estatura2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./estatura2/estatura2.component */
    "./src/app/components/estatura2/estatura2.component.ts");
    /* harmony import */


    var _fotos_fotos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./fotos/fotos.component */
    "./src/app/components/fotos/fotos.component.ts");
    /* harmony import */


    var _tutorial_alimento_paso1_tutorial_alimento_paso1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./tutorial-alimento-paso1/tutorial-alimento-paso1.component */
    "./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.ts");
    /* harmony import */


    var _tutorial_alimento_paso2_tutorial_alimento_paso2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./tutorial-alimento-paso2/tutorial-alimento-paso2.component */
    "./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.ts");
    /* harmony import */


    var _tutorial_alimento_paso3_tutorial_alimento_paso3_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./tutorial-alimento-paso3/tutorial-alimento-paso3.component */
    "./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.ts");
    /* harmony import */


    var _tutorial_alimento_paso4_tutorial_alimento_paso4_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./tutorial-alimento-paso4/tutorial-alimento-paso4.component */
    "./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.ts");
    /* harmony import */


    var _tutorial_planes_paso1_tutorial_planes_paso1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./tutorial-planes-paso1/tutorial-planes-paso1.component */
    "./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.ts");
    /* harmony import */


    var _tutorial_planes_paso2_tutorial_planes_paso2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./tutorial-planes-paso2/tutorial-planes-paso2.component */
    "./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.ts");
    /* harmony import */


    var _tutorial_planes_paso3_tutorial_planes_paso3_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./tutorial-planes-paso3/tutorial-planes-paso3.component */
    "./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.ts");
    /* harmony import */


    var _tutorial_planes_paso4_tutorial_planes_paso4_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./tutorial-planes-paso4/tutorial-planes-paso4.component */
    "./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.ts");
    /* harmony import */


    var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../modal-info/modal-info.page */
    "./src/app/modal-info/modal-info.page.ts");
    /* harmony import */


    var _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../modal-info/modal-info.module */
    "./src/app/modal-info/modal-info.module.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_29__["ModalInfoPage"]],
      declarations: [_edad_edad_component__WEBPACK_IMPORTED_MODULE_4__["EdadComponent"], _estatura_estatura_component__WEBPACK_IMPORTED_MODULE_5__["EstaturaComponent"], _peso_peso_component__WEBPACK_IMPORTED_MODULE_6__["PesoComponent"], _historial_historial_component__WEBPACK_IMPORTED_MODULE_7__["HistorialComponent"], _popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__["PopinfoComponent"], _popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_9__["PopremplazarComponent"], _popmensaje_popmensaje_component__WEBPACK_IMPORTED_MODULE_10__["PopmensajeComponent"], _antecedentefmliar_antecedentefmliar_component__WEBPACK_IMPORTED_MODULE_12__["AntecedentefmliarComponent"], _indicadores_indicadores_component__WEBPACK_IMPORTED_MODULE_14__["IndicadoresComponent"], _back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_13__["BackBtnComponent"], _medidas_medidas_component__WEBPACK_IMPORTED_MODULE_15__["MedidasComponent"], _progreso_progreso_component__WEBPACK_IMPORTED_MODULE_16__["ProgresoComponent"], _premium_premium_component__WEBPACK_IMPORTED_MODULE_17__["PremiumComponent"], _indicadorescomparacion_indicadorescomparacion_component__WEBPACK_IMPORTED_MODULE_18__["IndicadorescomparacionComponent"], _estatura2_estatura2_component__WEBPACK_IMPORTED_MODULE_19__["Estatura2Component"], _fotos_fotos_component__WEBPACK_IMPORTED_MODULE_20__["FotosComponent"], _tutorial_alimento_paso1_tutorial_alimento_paso1_component__WEBPACK_IMPORTED_MODULE_21__["TutorialAlimentoPaso1Component"], _tutorial_alimento_paso2_tutorial_alimento_paso2_component__WEBPACK_IMPORTED_MODULE_22__["TutorialAlimentoPaso2Component"], _tutorial_alimento_paso3_tutorial_alimento_paso3_component__WEBPACK_IMPORTED_MODULE_23__["TutorialAlimentoPaso3Component"], _tutorial_alimento_paso4_tutorial_alimento_paso4_component__WEBPACK_IMPORTED_MODULE_24__["TutorialAlimentoPaso4Component"], _tutorial_planes_paso1_tutorial_planes_paso1_component__WEBPACK_IMPORTED_MODULE_25__["TutorialPlanesPaso1Component"], _tutorial_planes_paso2_tutorial_planes_paso2_component__WEBPACK_IMPORTED_MODULE_26__["TutorialPlanesPaso2Component"], _tutorial_planes_paso3_tutorial_planes_paso3_component__WEBPACK_IMPORTED_MODULE_27__["TutorialPlanesPaso3Component"], _tutorial_planes_paso4_tutorial_planes_paso4_component__WEBPACK_IMPORTED_MODULE_28__["TutorialPlanesPaso4Component"]],
      exports: [_edad_edad_component__WEBPACK_IMPORTED_MODULE_4__["EdadComponent"], _estatura_estatura_component__WEBPACK_IMPORTED_MODULE_5__["EstaturaComponent"], _peso_peso_component__WEBPACK_IMPORTED_MODULE_6__["PesoComponent"], _historial_historial_component__WEBPACK_IMPORTED_MODULE_7__["HistorialComponent"], _popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__["PopinfoComponent"], _popremplazar_popremplazar_component__WEBPACK_IMPORTED_MODULE_9__["PopremplazarComponent"], _popmensaje_popmensaje_component__WEBPACK_IMPORTED_MODULE_10__["PopmensajeComponent"], _antecedentefmliar_antecedentefmliar_component__WEBPACK_IMPORTED_MODULE_12__["AntecedentefmliarComponent"], _back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_13__["BackBtnComponent"], _indicadores_indicadores_component__WEBPACK_IMPORTED_MODULE_14__["IndicadoresComponent"], _medidas_medidas_component__WEBPACK_IMPORTED_MODULE_15__["MedidasComponent"], _progreso_progreso_component__WEBPACK_IMPORTED_MODULE_16__["ProgresoComponent"], _fotos_fotos_component__WEBPACK_IMPORTED_MODULE_20__["FotosComponent"], _premium_premium_component__WEBPACK_IMPORTED_MODULE_17__["PremiumComponent"], _indicadorescomparacion_indicadorescomparacion_component__WEBPACK_IMPORTED_MODULE_18__["IndicadorescomparacionComponent"], _estatura2_estatura2_component__WEBPACK_IMPORTED_MODULE_19__["Estatura2Component"], _tutorial_alimento_paso1_tutorial_alimento_paso1_component__WEBPACK_IMPORTED_MODULE_21__["TutorialAlimentoPaso1Component"], _tutorial_alimento_paso2_tutorial_alimento_paso2_component__WEBPACK_IMPORTED_MODULE_22__["TutorialAlimentoPaso2Component"], _tutorial_alimento_paso3_tutorial_alimento_paso3_component__WEBPACK_IMPORTED_MODULE_23__["TutorialAlimentoPaso3Component"], _tutorial_alimento_paso4_tutorial_alimento_paso4_component__WEBPACK_IMPORTED_MODULE_24__["TutorialAlimentoPaso4Component"], _tutorial_planes_paso1_tutorial_planes_paso1_component__WEBPACK_IMPORTED_MODULE_25__["TutorialPlanesPaso1Component"], _tutorial_planes_paso2_tutorial_planes_paso2_component__WEBPACK_IMPORTED_MODULE_26__["TutorialPlanesPaso2Component"], _tutorial_planes_paso3_tutorial_planes_paso3_component__WEBPACK_IMPORTED_MODULE_27__["TutorialPlanesPaso3Component"], _tutorial_planes_paso4_tutorial_planes_paso4_component__WEBPACK_IMPORTED_MODULE_28__["TutorialPlanesPaso4Component"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_30__["ModalInfoPageModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/edad/edad.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/edad/edad.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEdadEdadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  opacity: 0.7;\n  font-size: 22px;\n  font-weight: bold;\n}\n\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n  text-align: center;\n  display: contents;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /* opacity: 0.7; */\n  margin-bottom: 20px;\n}\n\n.select-icon {\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGFkL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZWRhZFxcZWRhZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lZGFkL2VkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FEOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRhZC9lZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIC8vMzBcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWxlY3R7XG4gd2lkdGg6IDEwMCU7XG4gZm9udC1zaXplOiAyM3B4O1xuIGZvbnQtd2VpZ2h0OjIwMDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gZGlzcGxheTogY29udGVudHM7XG59XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBvcGFjaXR5OiAwLjc7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5zZWxlY3QtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxcmVtO1xufVxuIiwiaDIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/edad/edad.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/edad/edad.component.ts ***!
    \***************************************************/

  /*! exports provided: EdadComponent */

  /***/
  function srcAppComponentsEdadEdadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EdadComponent", function () {
      return EdadComponent;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var EdadComponent =
    /*#__PURE__*/
    function () {
      function EdadComponent(usuarioservicio) {
        _classCallCheck(this, EdadComponent);

        this.usuarioservicio = usuarioservicio;
        this.habilitar = true;
        this.cambiarPantalla = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EdadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "imc",
        value: function imc(valor) {
          console.log(valor.target.value);
          /*   if(valor.target.value == null){
              return
            } */

          this.valor = valor.target.value;

          if (valor.target.value) {
            this.usuarioservicio.edad(valor.target.value);
            this.cambiarPantalla.emit(valor.target.value);
            this.habilitar = false;
          }
        }
      }, {
        key: "avanzar",
        value: function avanzar() {
          this.cambiarPantalla.emit(1);
        }
      }]);

      return EdadComponent;
    }();

    EdadComponent.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EdadComponent.prototype, "cambiarPantalla", void 0);
    EdadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edad/edad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edad.component.scss */
      "./src/app/components/edad/edad.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])], EdadComponent);
    /***/
  },

  /***/
  "./src/app/components/estatura/estatura.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/estatura/estatura.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEstaturaEstaturaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n\ndiv {\n  margin-bottom: 48px;\n}\n\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n\n.titulopeque {\n  opacity: 0.4;\n}\n\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lc3RhdHVyYS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVzdGF0dXJhXFxlc3RhdHVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lc3RhdHVyYS9lc3RhdHVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREtBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZEOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDRixvQkFBQTtFQUNFLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VzdGF0dXJhL2VzdGF0dXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIFxufVxuXG5kaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG5cblxuaW9uLXNlbGVjdHtcbiB3aWR0aDogMTAwJTtcbiBmb250LXNpemU6IDIzcHg7XG4gZm9udC13ZWlnaHQ6MjAwO1xufVxuXG4udGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH0iLCJoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/estatura/estatura.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/estatura/estatura.component.ts ***!
    \***********************************************************/

  /*! exports provided: EstaturaComponent */

  /***/
  function srcAppComponentsEstaturaEstaturaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstaturaComponent", function () {
      return EstaturaComponent;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var EstaturaComponent =
    /*#__PURE__*/
    function () {
      function EstaturaComponent(usuarioservicio) {
        _classCallCheck(this, EstaturaComponent);

        this.usuarioservicio = usuarioservicio;
        this.habilitar = true;
        this.habilitar2 = true;
        this.pasar = true;
        this.mensaje = "";
        this.mensaje2 = "";
        this.estatura = 0;
        this.peso_ = 0;
        this.height = 'Cm';
        this.weight = 'Kg';
        this.cambiarPantalla = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.progressbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EstaturaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.estatura = null;
        }
      }, {
        key: "limpiar2",
        value: function limpiar2() {
          this.peso_ = null;
        }
      }, {
        key: "valor",
        value: function valor(numero) {
          console.log("valor", numero.target.value);

          if (this.height == 'Cm') {
            if (!isNaN(numero.target.value) && numero.target.value.length > 2) {
              console.log(numero.target.value);

              if (numero.target.value > 250) {
                this.habilitar = true;
                this.mensaje = "El valor maximo es 250 Cm";
              } else {
                this.numero = numero.target.value;
                this.habilitar = false;
                this.mensaje = "";
                this.habilitarboton();
              }
            } else {
              this.habilitar = true;
              this.mensaje = "introduzca un valor correcto";
            }
          } else {
            if (!isNaN(numero.target.value) && numero.target.value.length > 2) {
              console.log(numero.target.value * 2.54);

              if (numero.target.value * 2.54 > 250) {
                this.habilitar = true;
                this.mensaje = "El valor maximo es 98 Pulgadas";
              } else {
                this.numero = numero.target.value;
                this.habilitar = false;
                this.mensaje = "";
                this.habilitarboton();
              }
            } else {
              this.habilitar = true;
              this.mensaje = "introduzca un valor correcto";
            }
          }
        }
      }, {
        key: "valor2",
        value: function valor2(numero) {
          if (this.weight == 'Kg') {
            if (!isNaN(numero.target.value) && numero.target.value.length > 1) {
              console.log(numero.target.value);

              if (numero.target.value > 200) {
                this.habilitar2 = true;
                this.mensaje2 = "El valor maximo es 200 kg";
              } else {
                this.numero2 = numero.target.value;
                this.mensaje2 = "";
                this.habilitar2 = false;
                this.habilitarboton();
              }
            } else {
              this.habilitar2 = true;
              this.mensaje2 = "introduzca un valor correcto";
            }
          } else {
            if (!isNaN(numero.target.value) && numero.target.value.length > 1) {
              console.log(numero.target.value / 2.205);

              if (numero.target.value / 2.205 > 200) {
                this.habilitar2 = true;
                this.mensaje2 = "El valor maximo es 440 Libras";
              } else {
                this.numero2 = numero.target.value;
                this.mensaje2 = "";
                this.habilitar2 = false;
                this.habilitarboton();
              }
            } else {
              this.habilitar2 = true;
              this.mensaje2 = "introduzca un valor correcto";
            }
          }
        }
      }, {
        key: "habilitarboton",
        value: function habilitarboton() {
          if (this.habilitar === false && this.habilitar2 === false) {
            this.pasar = false;
          }
        }
      }, {
        key: "avanzar",
        value: function avanzar() {
          if (this.weight != 'Kg') {
            this.usuarioservicio.peso(this.numero2 / 2.205);
          } else {
            this.usuarioservicio.peso(this.numero2);
          }

          if (this.height != 'Cm') {
            this.usuarioservicio.estatura(this.numero * 2.54);
          } else {
            this.usuarioservicio.estatura(this.numero);
          }

          this.cambiarPantalla.emit(2);
        }
      }, {
        key: "atras",
        value: function atras() {
          this.cambiarPantalla.emit(0);
          this.progressbar.emit(0.5);
          this.back.emit('');
        }
      }, {
        key: "imc",
        value: function imc(valor) {
          console.log(valor.target.value);

          if (valor.target.value == null) {
            return;
          }

          this.usuarioservicio.edad(valor.target.value);
          this.habilitar = false;
        }
      }, {
        key: "checkEdad",
        value: function checkEdad(valor) {
          this.edad = valor;
        }
      }, {
        key: "altura",
        value: function altura(event) {
          this.height = event.detail.value;
          this.estatura = 0;
        }
      }, {
        key: "peso",
        value: function peso(event) {
          this.weight = event.detail.value;
          this.peso_ = 0;
        }
      }]);

      return EstaturaComponent;
    }();

    EstaturaComponent.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EstaturaComponent.prototype, "cambiarPantalla", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EstaturaComponent.prototype, "progressbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EstaturaComponent.prototype, "back", void 0);
    EstaturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estatura',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estatura.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estatura/estatura.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estatura.component.scss */
      "./src/app/components/estatura/estatura.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])], EstaturaComponent);
    /***/
  },

  /***/
  "./src/app/components/estatura2/estatura2.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/estatura2/estatura2.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEstatura2Estatura2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\nion-loading {\n  --spinner-color:red;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  opacity: 1;\n  color: red;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 1.1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: black;\n}\nion-item {\n  --background: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n.opacidad {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lc3RhdHVyYTIvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxlc3RhdHVyYTJcXGVzdGF0dXJhMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lc3RhdHVyYTIvZXN0YXR1cmEyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBQ0MsMEJBQUE7RUFDQSxZQUFBO0FDQ0w7QURJRztFQUNDLG1CQUFBO0FDREo7QURJQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0REO0FER0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7QUNBSjtBREVBO0VBQ0ksaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUNDSjtBRENFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRENBOztHQUFBO0FBSUE7RUFDSSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNDSjtBRENBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQkFBQTtVQUFBLHFCQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0FDR0o7QURBQTtFQUNJLGNBQUE7QUNHSjtBRERBO0VBQ0ksbUJBQUE7QUNJSjtBREFBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dEO0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNGLG9CQUFBO0VBQ0UsbUJBQUE7QUNHSjtBREFFO0VBQ0UsWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lc3RhdHVyYTIvZXN0YXR1cmEyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICAgIGgye1xuICAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICBcbiAgIH1cblxuICAgaW9uLWxvYWRpbmd7XG4gICAgLS1zcGlubmVyLWNvbG9yXHQ6cmVkO1xuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAudGl0dWxvMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cblxuLnJpZ2h0Ym9yZGVye1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gICAgb3BhY2l0eTogMC40O1xufSAgXG4udGl0dWxvcGVxdWUyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufSAgIFxuaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAtLWNvbG9yOiBibGFjaztcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuaW9uLXNlbGVjdHtcbiB3aWR0aDogMTAwJTtcbiBmb250LXNpemU6IDIzcHg7XG4gZm9udC13ZWlnaHQ6MjAwO1xufVxuXG4udGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAub3BhY2lkYWR7XG4gICAgb3BhY2l0eTogMC41O1xuICB9IiwiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmlvbi1sb2FkaW5nIHtcbiAgLS1zcGlubmVyLWNvbG9yOnJlZDtcbn1cblxuLmF1bWVudGFydGl0dWxvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDpibGFjaztcbiAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4udGl0dWxvMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLyogZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufSAqL1xuLnJpZ2h0Ym9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuaW9uLWlucHV0IHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsb3BlcXVlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4udGl0dWxvcGVxdWUyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbmlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm9wYWNpZGFkIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/estatura2/estatura2.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/estatura2/estatura2.component.ts ***!
    \*************************************************************/

  /*! exports provided: Estatura2Component */

  /***/
  function srcAppComponentsEstatura2Estatura2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estatura2Component", function () {
      return Estatura2Component;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var Estatura2Component =
    /*#__PURE__*/
    function () {
      function Estatura2Component(usuarioservicio) {
        _classCallCheck(this, Estatura2Component);

        this.usuarioservicio = usuarioservicio;
        this.habilitar = true;
        this.habilitar2 = true;
        this.pasar = true;
        this.mensaje = "";
        this.mensaje2 = "";
        this.estatura = 0;
        this.peso_ = 0;
        this.height = 'Cm';
        this.weight = 'Kg';
        this.progressbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.estatura_ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.peso2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(Estatura2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.estatura = null;
        }
      }, {
        key: "limpiar2",
        value: function limpiar2() {
          this.peso_ = null;
        }
      }, {
        key: "valor",
        value: function valor(numero) {
          this.estatura_.emit(null);
          console.log("valor", numero.target.value);

          if (this.height == 'Cm') {
            if (!isNaN(numero.target.value) && numero.target.value.length > 2) {
              console.log(numero.target.value);

              if (numero.target.value > 250) {
                this.habilitar = true;
                this.mensaje = "El valor maximo es 250 Cm";
              } else {
                this.numero = numero.target.value;
                this.habilitar = false;
                this.mensaje = "";
                this.habilitarboton();
                this.estatura_.emit(numero.target.value);
              }
            } else {
              this.habilitar = true;
              this.mensaje = "introduzca un valor correcto";
            }
          } else {
            if (!isNaN(numero.target.value) && numero.target.value > 22) {
              console.log(numero.target.value * 2.54);

              if (numero.target.value * 2.54 > 250) {
                this.habilitar = true;
                this.mensaje = "El valor maximo es 98 Pulgadas";
              } else {
                this.numero = numero.target.value;
                this.habilitar = false;
                this.mensaje = "";
                this.estatura_.emit(numero.target.value * 2.54);
                this.habilitarboton();
              }
            } else {
              this.habilitar = true;
              this.estatura_.emit(null);
              this.mensaje = "introduzca un valor correcto";
            }
          }
        }
      }, {
        key: "valor2",
        value: function valor2(numero) {
          this.peso2.emit(null);

          if (this.weight == 'Kg') {
            if (!isNaN(numero.target.value) && numero.target.value.length > 1) {
              console.log(numero.target.value);

              if (numero.target.value > 200) {
                this.habilitar2 = true;
                this.mensaje2 = "El valor maximo es 200 kg";
              } else {
                this.numero2 = numero.target.value;
                this.mensaje2 = "";
                this.habilitar2 = false;
                this.habilitarboton();
                this.peso2.emit(numero.target.value);
              }
            } else {
              this.habilitar2 = true;
              this.mensaje2 = "introduzca un valor correcto";
            }
          } else {
            if (!isNaN(numero.target.value) && numero.target.value.length > 1) {
              console.log(numero.target.value / 2.205);

              if (numero.target.value / 2.205 > 200) {
                this.habilitar2 = true;
                this.mensaje2 = "El valor maximo es 440 Libras";
              } else {
                this.numero2 = numero.target.value;
                this.mensaje2 = "";
                this.habilitar2 = false;
                this.peso2.emit(numero.target.value / 2.205);
                this.habilitarboton();
              }
            } else {
              this.habilitar2 = true;
              this.mensaje2 = "introduzca un valor correcto";
            }
          }
        }
      }, {
        key: "habilitarboton",
        value: function habilitarboton() {
          if (this.habilitar === false && this.habilitar2 === false) {
            this.pasar = false;
          }
        }
      }, {
        key: "avanzar",
        value: function avanzar() {
          if (this.weight != 'Kg') {
            this.usuarioservicio.peso(this.numero2 / 2.205);
          } else {
            this.usuarioservicio.peso(this.numero2);
          }

          if (this.height != 'Cm') {
            this.usuarioservicio.estatura(this.numero * 2.54);
          } else {
            this.usuarioservicio.estatura(this.numero);
          }
        }
      }, {
        key: "atras",
        value: function atras() {
          this.progressbar.emit(0.5);
          this.back.emit('');
        }
      }, {
        key: "imc",
        value: function imc(valor) {
          console.log(valor.target.value);

          if (valor.target.value == null) {
            return;
          }

          this.usuarioservicio.edad(valor.target.value);
          this.habilitar = false;
        }
      }, {
        key: "checkEdad",
        value: function checkEdad(valor) {
          this.edad = valor;
        }
      }, {
        key: "altura",
        value: function altura(event) {
          this.height = event.detail.value;
          this.estatura = 0;
        }
      }, {
        key: "peso",
        value: function peso(event) {
          this.weight = event.detail.value;
          this.peso_ = 0;
        }
      }]);

      return Estatura2Component;
    }();

    Estatura2Component.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Estatura2Component.prototype, "progressbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Estatura2Component.prototype, "back", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Estatura2Component.prototype, "estatura_", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Estatura2Component.prototype, "peso2", void 0);
    Estatura2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estatura2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estatura2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estatura2/estatura2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estatura2.component.scss */
      "./src/app/components/estatura2/estatura2.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])], Estatura2Component);
    /***/
  },

  /***/
  "./src/app/components/fotos/fotos.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/fotos/fotos.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFotosFotosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  opacity: 1;\n  color: white;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 17px;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n.unidad {\n  color: #fff;\n  font-size: 14px;\n  opacity: 0.6;\n}\n.img-size {\n  width: 60%;\n  margin: 0 auto;\n}\n.fluid-img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Rvcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvdG9zXFxmb3Rvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3Rvcy9mb3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNDLDBCQUFBO0VBQ0EsWUFBQTtBQ0NMO0FESUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNERDtBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDQUo7QURFQTtFQUNJLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ047QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBREFBOztHQUFBO0FBSUE7RUFDSSw0QkFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7QURDQTtFQUNJLFlBQUE7QUNFSjtBREFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0o7QURBQTtFQUNJLGtCQUFBO0FDR0o7QURBQTtFQUVJLGNBQUE7QUNFSjtBREtBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZEO0FES0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNGLG9CQUFBO0VBQ0UsbUJBQUE7QUNGSjtBRE1FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSEo7QURPRztFQUdDLFVBQUE7RUFDQSxjQUFBO0FDTko7QURTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvdG9zL2ZvdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICAgIGgye1xuICAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICBcbiAgIH1cblxuLmF1bWVudGFydGl0dWxve1xuIGZvbnQtc2l6ZTogMThweDtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG5cbi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgLnRpdHVsbzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vKiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59ICovXG5cbi5yaWdodGJvcmRlcntcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG5pb24taW5wdXQge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvcGVxdWUge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0gIFxuLnRpdHVsb3BlcXVlMiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAvLyBmb250LXNpemU6IDEuMXJlbTtcbn0gICBcbmlvbi1jb2x7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXR7XG4gICAgLy8gLS1jb2xvcjogYmxhY2s7XG4gICAgLS1jb2xvcjogd2hpdGU7XG59XG4vLyBpb24taXRlbXtcbi8vICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuLy8gfVxuXG5cbmlvbi1zZWxlY3R7XG4gd2lkdGg6IDEwMCU7XG4gZm9udC1zaXplOiAyM3B4O1xuIGZvbnQtd2VpZ2h0OjIwMDtcbn1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cblxuICAudW5pZGFke1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuXG4gICAuaW1nLXNpemV7XG4gICAgLy8gbWF4LXdpZHRoOiAyMjBweDtcbiAgICAvLyBoZWlnaHQ6IDIyMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZmx1aWQtaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYXVtZW50YXJ0aXR1bG8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAtLWNvbG9yOndoaXRlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50aXR1bG8yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLyogZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufSAqL1xuLnJpZ2h0Ym9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuaW9uLWlucHV0IHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsb3BlcXVlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4udGl0dWxvcGVxdWUyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogICBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51bmlkYWQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5pbWctc2l6ZSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmx1aWQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fotos/fotos.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/fotos/fotos.component.ts ***!
    \*****************************************************/

  /*! exports provided: FotosComponent */

  /***/
  function srcAppComponentsFotosFotosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotosComponent", function () {
      return FotosComponent;
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


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var src_app_modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modal-info/modal-info.page */
    "./src/app/modal-info/modal-info.page.ts");

    var FotosComponent =
    /*#__PURE__*/
    function () {
      function FotosComponent(service, utilities, usuarioService, apiService, fb, camera, alertCtrl, modalController, loadingController) {
        _classCallCheck(this, FotosComponent);

        this.service = service;
        this.utilities = utilities;
        this.usuarioService = usuarioService;
        this.apiService = apiService;
        this.fb = fb;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.form = this.fb.group({
          weight: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          stature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          min_waist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          max_waist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          hip: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          neck: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          right_thigh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          left_thigh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          right_arm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          left_arm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          right_arm_flexed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          left_arm_flexed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          right_calf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          left_calf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          torax: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          waist_hip: [null],
          profile_photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          front_photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          back_photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      }

      _createClass(FotosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var valor;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.presentLoading();
                    _context4.next = 3;
                    return this.service.obtenerUsuario();

                  case 3:
                    valor = _context4.sent;

                    if (valor == false) {
                      this.loadingController.dismiss();
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    } else {
                      console.log(valor['measurement_record'], "datos traido");
                      this.perfil = valor.measurement_record === null ? null : 'https://smartbunnypruebas.com/fotos/grasa/' + valor['measurement_record'].profile_photo;
                      this.espalda = valor.measurement_record === null ? null : 'https://smartbunnypruebas.com/fotos/grasa/' + valor['measurement_record'].back_photo;
                      this.frente = valor.measurement_record === null ? null : 'https://smartbunnypruebas.com/fotos/grasa/' + valor['measurement_record'].front_photo;
                      this.form.controls.stature.setValue(valor.measurement_record === null ? null : valor['measurement_record'].stature);
                      this.form.controls.weight.setValue(valor.measurement_record === null ? null : valor['measurement_record'].weight);
                      this.form.controls.min_waist.setValue(valor.measurement_record === null ? null : valor['measurement_record'].min_waist);
                      this.form.controls.max_waist.setValue(valor.measurement_record === null ? null : valor['measurement_record'].max_waist);
                      this.form.controls.hip.setValue(valor.measurement_record === null ? null : valor['measurement_record'].hip);
                      this.form.controls.neck.setValue(valor.measurement_record === null ? null : valor['measurement_record'].neck);
                      this.form.controls.right_thigh.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_thigh);
                      this.form.controls.left_thigh.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_thigh);
                      this.form.controls.right_arm.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_arm);
                      this.form.controls.left_arm.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_arm);
                      this.form.controls.right_arm_flexed.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_arm_flexed);
                      this.form.controls.left_arm_flexed.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_arm_flexed);
                      this.form.controls.right_calf.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_calf);
                      this.form.controls.left_calf.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_calf);
                      this.form.controls.torax.setValue(valor.measurement_record === null ? null : valor['measurement_record'].torax);
                      this.form.controls.profile_photo.setValue(null);
                      this.form.controls.front_photo.setValue(null);
                      this.form.controls.back_photo.setValue(null);
                      this.loadingController.dismiss();
                    }

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "update",
        value: function update() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var data;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.form.valid) {
                      _context6.next = 10;
                      break;
                    }

                    this.presentLoading();
                    _context6.next = 4;
                    return this.usuarioService.measurement_record(this.form.value);

                  case 4:
                    data = _context6.sent;
                    this.loadingController.dismiss();
                    console.log(data);

                    if (data) {
                      console.log(this.form.value);
                      this.utilities.notificacionUsuario('Fotos actualizado', "dark");
                      this.ngOnInit();
                    } else {
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    }

                    _context6.next = 12;
                    break;

                  case 10:
                    console.log(this.form.value);

                    if (this.form.controls.front_photo.value == null || this.form.controls.profile_photo.value == null || this.form.controls.back_photo.value == null) {
                      this.utilities.notificacionUsuario('Todas las imagenes son requeridas', 'danger');
                    } else {
                      this.utilities.notificacionUsuario('Debes completar las medidas para subir imágenes', 'danger');
                    }

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "captureImage",
        value: function captureImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this2 = this;

            var st, options;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    st = this.camera.PictureSourceType.CAMERA;
                    _context7.next = 3;
                    return this.seleccionarFuente().then(function (result) {
                      if (result) {
                        st = _this2.camera.PictureSourceType.CAMERA;
                      } else {
                        st = _this2.camera.PictureSourceType.PHOTOLIBRARY;
                      }
                    });

                  case 3:
                    options = {
                      quality: 45,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      mediaType: this.camera.MediaType.PICTURE,
                      encodingType: this.camera.EncodingType.JPEG,
                      sourceType: st,
                      allowEdit: true,
                      targetWidth: 300,
                      targetHeight: 300
                    };
                    this.camera.getPicture(options).then(function (imageData) {
                      if (index == 1) {
                        //frente
                        _this2.frente = null;
                        _this2.frente = 'data:image/jpeg;base64,' + imageData; // 'data:image/jpeg;base64'

                        _this2.form.controls.front_photo.setValue(imageData);

                        console.log("imagen", imageData);
                        console.log("image frente", _this2.form.controls.front_photo.value);

                        _this2.form.controls['fotoPerfil'].setValue(imageData);
                      }

                      if (index == 2) {
                        //perfil
                        _this2.perfil = null;
                        _this2.perfil = 'data:image/jpeg;base64,' + imageData;

                        _this2.form.controls.profile_photo.setValue(imageData);

                        console.log("imagen", imageData);
                        console.log("image perfil", _this2.form.controls.profile_photo.value);

                        _this2.form.controls['fotoPerfil'].setValue(imageData);
                      }

                      if (index == 3) {
                        //espalda
                        _this2.espalda = null;
                        _this2.espalda = 'data:image/jpeg;base64,' + imageData;

                        _this2.form.controls.back_photo.setValue(imageData);

                        console.log("imagen", imageData);
                        console.log("image espalda", _this2.form.controls.back_photo.value);
                      }

                      _this2.form.controls['fotoPerfil'].setValue(imageData);
                    }, function (err) {
                      // Handle error
                      console.log("cameraE", err);
                    });

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "seleccionarFuente",
        value: function seleccionarFuente() {
          var _this3 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertCtrl.create({
                        header: 'Seleccionar Imágen',
                        cssClass: 'uploadmessage',
                        message: '¿Qué desea hacer?',
                        buttons: [{
                          text: "Tomar Foto",
                          cssClass: 'btn_alert',
                          handler: function handler() {
                            resolve(true);
                          }
                        }, {
                          text: "Buscar en Galería",
                          cssClass: 'btn_alert',
                          handler: function handler() {
                            resolve(false);
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          });
        }
      }, {
        key: "modal",
        value: function modal(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log(event); // if(event.includes("1609976752356.jpg") || null){
                    //   return
                    // }

                    _context9.next = 3;
                    return this.modalController.create({
                      component: src_app_modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_8__["ModalInfoPage"],
                      cssClass: 'medida-modal',
                      componentProps: {
                        imagen: event
                      }
                    });

                  case 3:
                    modal = _context9.sent;
                    _context9.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return FotosComponent;
    }();

    FotosComponent.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }];
    };

    FotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fotos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fotos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fotos/fotos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fotos.component.scss */
      "./src/app/components/fotos/fotos.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])], FotosComponent);
    /***/
  },

  /***/
  "./src/app/components/historial/historial.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/historial/historial.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHistorialHistorialComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.iconSize {\n  font-size: 27px;\n}\n\n.svgSize {\n  width: 250px;\n}\n\n.margin-parrafo {\n  margin-bottom: 0px;\n}\n\n.margin-last {\n  margin-bottom: 40px;\n}\n\n.contenedor {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYWwvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoaXN0b3JpYWxcXGhpc3RvcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYWwvaGlzdG9yaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0EsYUFBQTtBQ0FBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYWwvaGlzdG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4uaWNvblNpemUge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxuXG4uc3ZnU2l6ZXtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5tYXJnaW4tcGFycmFmb3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYXJnaW4tbGFzdHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uY29udGVuZWRvcntcbnBhZGRpbmc6IDIwcHg7XG59IiwiLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaWNvblNpemUge1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5zdmdTaXplIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubWFyZ2luLXBhcnJhZm8ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYXJnaW4tbGFzdCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/historial/historial.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/historial/historial.component.ts ***!
    \*************************************************************/

  /*! exports provided: HistorialComponent */

  /***/
  function srcAppComponentsHistorialHistorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialComponent", function () {
      return HistorialComponent;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var HistorialComponent =
    /*#__PURE__*/
    function () {
      function HistorialComponent(modalController, ruta, usuarioservicio) {
        _classCallCheck(this, HistorialComponent);

        this.modalController = modalController;
        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
        this.habilitar = true;
        this.cambiarPantalla = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.siguientePantalla = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.datoEnfermedades = {
          patologiaCardiaca: 0,
          enfermedadPulmonar: 0,
          hipertensionPulmonar: 0,
          pulmonarcronica: 0,
          taquicardia: 0,
          asma: 0,
          bronquiti: 0,
          aritmias: 0,
          hipertension: 0,
          hipotension: 0,
          desvanecimiento: 0,
          diabete: 0,
          infartos: 0,
          soplo: 0,
          influenza: 0,
          dolorPecho: 0,
          fatiga: 0,
          insuficiencia: 0,
          insuficiencia_renal: 0,
          noEnfermedad: false
        };
      }

      _createClass(HistorialComponent, [{
        key: "historialmedico",
        value: function historialmedico(datos) {
          if (typeof datos == 'string') {
            if (this.datoEnfermedades.noEnfermedad) {
              console.log('Entro');
              this.habilitar = false;
              this.datoEnfermedades.patologiaCardiaca = 0;
              this.datoEnfermedades.enfermedadPulmonar = 0;
              this.datoEnfermedades.hipertension = 0;
              this.datoEnfermedades.aritmias = 0;
              this.datoEnfermedades.taquicardia = 0;
              this.datoEnfermedades.insuficiencia = 0;
              this.datoEnfermedades.infartos = 0;
              this.datoEnfermedades.soplo = 0;
              this.datoEnfermedades.influenza = 0;
              this.datoEnfermedades.asma = 0;
              this.datoEnfermedades.bronquiti = 0;
              this.datoEnfermedades.hipertensionPulmonar = 0;
              this.datoEnfermedades.pulmonarcronica = 0;
              this.datoEnfermedades.hipotension = 0;
              this.datoEnfermedades.desvanecimiento = 0;
              this.datoEnfermedades.diabete = 0;
              this.datoEnfermedades.dolorPecho = 0;
              this.datoEnfermedades.fatiga = 0;
              this.datoEnfermedades.insuficiencia_renal = 0; //habilitar boton
            } else {}
          } else {
            if (this.datoEnfermedades.hipertension) {
              this.datoEnfermedades.hipertension = 1;
              this.datoEnfermedades.noEnfermedad = false; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.hipertension = 0;
            }

            if (this.datoEnfermedades.hipotension) {
              this.datoEnfermedades.hipotension = 1;
              this.datoEnfermedades.noEnfermedad = false; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.hipotension = 0;
            }

            if (this.datoEnfermedades.desvanecimiento) {
              this.datoEnfermedades.desvanecimiento = 1;
              this.datoEnfermedades.noEnfermedad = false; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.desvanecimiento = 0;
            }

            if (this.datoEnfermedades.diabete) {
              this.datoEnfermedades.diabete = 1;
              this.datoEnfermedades.noEnfermedad = false; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.diabete = 0;
            }

            if (this.datoEnfermedades.dolorPecho) {
              this.datoEnfermedades.dolorPecho = 1;
              this.datoEnfermedades.noEnfermedad = false; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.dolorPecho = 0;
            }

            if (this.datoEnfermedades.fatiga) {
              this.datoEnfermedades.fatiga = 1;
              this.datoEnfermedades.noEnfermedad = false; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.fatiga = 0;
            }

            if (this.datoEnfermedades.asma) {
              this.datoEnfermedades.asma = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.enfermedadPulmonar = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.asma = 0;
            }

            if (this.datoEnfermedades.bronquiti) {
              this.datoEnfermedades.bronquiti = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.enfermedadPulmonar = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.bronquiti = 0;
              this.datoEnfermedades.enfermedadPulmonar = 0;
            }

            if (this.datoEnfermedades.aritmias) {
              this.datoEnfermedades.aritmias = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.patologiaCardiaca = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.aritmias = 0;
              this.datoEnfermedades.patologiaCardiaca = 0;
            }

            if (this.datoEnfermedades.soplo) {
              this.datoEnfermedades.soplo = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.patologiaCardiaca = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.soplo = 0;
              this.datoEnfermedades.patologiaCardiaca = 0;
            }

            if (this.datoEnfermedades.influenza) {
              this.datoEnfermedades.influenza = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.enfermedadPulmonar = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.influenza = 0;
              this.datoEnfermedades.enfermedadPulmonar = 0;
            }

            if (this.datoEnfermedades.infartos) {
              this.datoEnfermedades.infartos = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.patologiaCardiaca = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.infartos = 0;
              this.datoEnfermedades.patologiaCardiaca = 0;
            }

            if (this.datoEnfermedades.insuficiencia) {
              this.datoEnfermedades.insuficiencia = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.patologiaCardiaca = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.insuficiencia = 0;
              this.datoEnfermedades.patologiaCardiaca = 0;
            }

            if (this.datoEnfermedades.taquicardia) {
              this.datoEnfermedades.taquicardia = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.patologiaCardiaca = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.taquicardia = 0;
              this.datoEnfermedades.patologiaCardiaca = 0;
            }

            if (this.datoEnfermedades.pulmonarcronica) {
              this.datoEnfermedades.pulmonarcronica = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.enfermedadPulmonar = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.pulmonarcronica = 0;
              this.datoEnfermedades.enfermedadPulmonar = 0;
            }

            if (this.datoEnfermedades.hipertensionPulmonar) {
              this.datoEnfermedades.hipertensionPulmonar = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.enfermedadPulmonar = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.hipertensionPulmonar = 0;
              this.datoEnfermedades.enfermedadPulmonar = 0;
            }

            if (this.datoEnfermedades.insuficiencia_renal) {
              this.datoEnfermedades.insuficiencia_renal = 1;
              this.datoEnfermedades.noEnfermedad = false;
              this.datoEnfermedades.enfermedadPulmonar = 1; //habilitar boton

              this.habilitar = false;
            } else {
              this.datoEnfermedades.hipertensionPulmonar = 0;
              this.datoEnfermedades.enfermedadPulmonar = 0;
            }
          }

          console.log(datos);
          console.log(this.datoEnfermedades);
          console.log(this.habilitar);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "avanzar",
        value: function avanzar() {
          if (this.datoEnfermedades.noEnfermedad) {
            this.usuarioservicio.enfermedades(this.datoEnfermedades);
            this.siguientePantalla.emit(1);
          } else if (this.datoEnfermedades.aritmias === 0 && this.datoEnfermedades.asma === 0 && this.datoEnfermedades.bronquiti === 0 && this.datoEnfermedades.desvanecimiento === 0 && this.datoEnfermedades.diabete === 0 && this.datoEnfermedades.dolorPecho === 0 && this.datoEnfermedades.enfermedadPulmonar === 0 && this.datoEnfermedades.fatiga === 0 && this.datoEnfermedades.hipertension === 0 && this.datoEnfermedades.hipertensionPulmonar === 0 && this.datoEnfermedades.hipotension === 0 && this.datoEnfermedades.infartos === 0 && this.datoEnfermedades.influenza === 0 && this.datoEnfermedades.insuficiencia === 0 && this.datoEnfermedades.patologiaCardiaca === 0 && this.datoEnfermedades.pulmonarcronica === 0 && this.datoEnfermedades.soplo === 0 && this.datoEnfermedades.insuficiencia_renal === 0 && this.datoEnfermedades.taquicardia === 0) {
            this.habilitar = true;
          } else {
            this.usuarioservicio.enfermedades(this.datoEnfermedades);
            this.siguientePantalla.emit(1);
          }
          /*  this.ruta.navigateRoot(['/registrar-info']) */

        }
      }, {
        key: "atras",
        value: function atras() {
          this.cambiarPantalla.emit(1);
        }
      }]);

      return HistorialComponent;
    }();

    HistorialComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HistorialComponent.prototype, "cambiarPantalla", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HistorialComponent.prototype, "siguientePantalla", void 0);
    HistorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./historial.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/historial/historial.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./historial.component.scss */
      "./src/app/components/historial/historial.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])], HistorialComponent);
    /***/
  },

  /***/
  "./src/app/components/indicadores/indicadores.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/indicadores/indicadores.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIndicadoresIndicadoresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 20px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  color: red;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: black;\n}\nion-item {\n  color: white;\n  border: 1px solid white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n.tituloindicador {\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 6px;\n  margin-right: 11px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.tamanoindicador {\n  font-size: 20px;\n}\n.tamanoindicador2 {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRpY2Fkb3Jlcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGluZGljYWRvcmVzXFxpbmRpY2Fkb3Jlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmRpY2Fkb3Jlcy9pbmRpY2Fkb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNDLDBCQUFBO0VBQ0EsWUFBQTtBQ0NMO0FESUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNERDtBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDQUo7QURFQTtFQUNJLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ047QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBREFBOztHQUFBO0FBSUE7RUFDSSw0QkFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7QURDQTtFQUNJLFlBQUE7QUNFSjtBREFBO0VBQ0ksVUFBQTtBQ0dKO0FEREE7RUFDSSxrQkFBQTtBQ0lKO0FEREE7RUFDSSxjQUFBO0FDSUo7QURGQTtFQUVJLFlBQUE7RUFDQSx1QkFBQTtBQ0lKO0FEQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0Q7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Ysb0JBQUE7RUFDRSxtQkFBQTtBQ0dKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kaWNhZG9yZXMvaW5kaWNhZG9yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gXG4gICAgaDJ7XG4gICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIFxuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAudGl0dWxvMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cblxuLnJpZ2h0Ym9yZGVye1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gICAgb3BhY2l0eTogMC40O1xufSAgXG4udGl0dWxvcGVxdWUyIHtcbiAgICBjb2xvcjogcmVkO1xufSAgIFxuaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAtLWNvbG9yOiBibGFjaztcbn1cbmlvbi1pdGVte1xuICAgIC8vIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG5cbmlvbi1zZWxlY3R7XG4gd2lkdGg6IDEwMCU7XG4gZm9udC1zaXplOiAyM3B4O1xuIGZvbnQtd2VpZ2h0OjIwMDtcbn1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnRpdHVsb2luZGljYWRvcntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5cbiAgLnRhbWFub2luZGljYWRvcntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAudGFtYW5vaW5kaWNhZG9yMntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuXG4gIC8vIGlvbi1pdGVtIHtcbiAgLy8gICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMTQ1M2QpO1xuICAvLyAgIC0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcbiAgLy8gfVxuICAvLyAuaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsLmlvbi1jb2xvciB7ICBcbiAgLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgLy8gfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYXVtZW50YXJ0aXR1bG8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAtLWNvbG9yOndoaXRlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50aXR1bG8yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLyogZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufSAqL1xuLnJpZ2h0Ym9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuaW9uLWlucHV0IHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsb3BlcXVlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4udGl0dWxvcGVxdWUyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGl0dWxvaW5kaWNhZG9yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50YW1hbm9pbmRpY2Fkb3Ige1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50YW1hbm9pbmRpY2Fkb3IyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/indicadores/indicadores.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/indicadores/indicadores.component.ts ***!
    \*****************************************************************/

  /*! exports provided: IndicadoresComponent */

  /***/
  function srcAppComponentsIndicadoresIndicadoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicadoresComponent", function () {
      return IndicadoresComponent;
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


    var src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/nutricion.service */
    "./src/app/services/nutricion.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");

    var IndicadoresComponent =
    /*#__PURE__*/
    function () {
      function IndicadoresComponent(service, loadingController, utilities) {
        _classCallCheck(this, IndicadoresComponent);

        this.service = service;
        this.loadingController = loadingController;
        this.utilities = utilities;
      }

      _createClass(IndicadoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getIndicators();
        }
      }, {
        key: "getIndicators",
        value: function getIndicators() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var valor;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.presentLoading();
                    _context10.next = 3;
                    return this.service.indicadores();

                  case 3:
                    valor = _context10.sent;
                    this.loadingController.dismiss();

                    if (valor == false) {
                      console.log("ocuiro un error");
                    } else {
                      this.dato = valor;
                      console.log("que recibo", valor);
                    }

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var loading;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context11.sent;
                    _context11.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "mostrar",
        value: function mostrar(valor, indicador) {
          this.indicador = indicador;
          this.info = !valor;
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.info = false;
        }
      }]);

      return IndicadoresComponent;
    }();

    IndicadoresComponent.ctorParameters = function () {
      return [{
        type: src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__["NutricionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }];
    };

    IndicadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-indicadores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./indicadores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicadores/indicadores.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./indicadores.component.scss */
      "./src/app/components/indicadores/indicadores.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__["NutricionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])], IndicadoresComponent);
    /***/
  },

  /***/
  "./src/app/components/indicadorescomparacion/indicadorescomparacion.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/indicadorescomparacion/indicadorescomparacion.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIndicadorescomparacionIndicadorescomparacionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.perfil {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.indicadores {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.medidas {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.contenedor-segment {\n  background: black;\n}\n\n.title {\n  text-align: center;\n}\n\nion-select {\n  width: 100%;\n  font-size: 17px;\n  font-weight: 800;\n  text-align: center;\n  display: inline-table !important;\n}\n\n.select-icon {\n  position: absolute;\n  right: 1rem;\n}\n\n.contenedor-fecha {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.fecha-desde {\n  width: 40%;\n}\n\n.fecha-hasta {\n  width: 40%;\n  margin-right: 1rem;\n}\n\n.rightborder {\n  border-right: solid 1px grey;\n}\n\n.input-custom {\n  margin: 9px;\n}\n\n.contenedor-input {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.titulopeque2 {\n  opacity: 1;\n  color: red;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 1.1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\nion-segment-button {\n  opacity: 1;\n}\n\n.img-size {\n  height: 160px;\n  width: 225px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRpY2Fkb3Jlc2NvbXBhcmFjaW9uL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5kaWNhZG9yZXNjb21wYXJhY2lvblxcaW5kaWNhZG9yZXNjb21wYXJhY2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmRpY2Fkb3Jlc2NvbXBhcmFjaW9uL2luZGljYWRvcmVzY29tcGFyYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ047O0FER0U7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHRTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0FGOztBRElFO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDREY7O0FESUU7RUFDRSxpQkFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURLSztFQUNFLFVBQUE7QUNGUDs7QURJSztFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBRE1FO0VBQ0UsNEJBQUE7QUNISjs7QURLRTtFQUNFLFdBQUE7QUNGSjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDREo7O0FES0U7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7QUNGSjs7QURLRTtFQUNFLFVBQUE7QUNGSjs7QURNRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZGljYWRvcmVzY29tcGFyYWNpb24vaW5kaWNhZG9yZXNjb21wYXJhY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgXG4gIC5wZXJmaWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIH1cbiAgXG4gIC5pbmRpY2Fkb3Jlc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgfVxuICBcbiAgXG4gIC5tZWRpZGFze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB9XG4gIFxuICAuY29udGVuZWRvci1zZWdtZW50e1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gIFxuICAudGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBpb24tc2VsZWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDo4MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC8vIGljb25vIGRlbCBzZWxlY3RcbiAgLnNlbGVjdC1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXJlbTtcbiAgfVxuICBcbiAgLmNvbnRlbmVkb3ItZmVjaGF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZlY2hhe1xuICAgICAmLWRlc2Rle1xuICAgICAgIHdpZHRoOiA0MCU7XG4gICAgIH1cbiAgICAgJi1oYXN0YXtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG4gIFxuICAucmlnaHRib3JkZXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbiAgfVxuICAuaW5wdXQtY3VzdG9te1xuICAgIG1hcmdpbjogOXB4O1xuICB9XG4gIC5jb250ZW5lZG9yLWlucHV0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgXG4gIFxuICAudGl0dWxvcGVxdWUyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB9ICAgXG4gIFxuICBpb24tc2VnbWVudC1idXR0b257XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgXG4gIC5pbWctc2l6ZXtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHdpZHRoOiAyMjVweDtcbiAgfSIsIi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGVyZmlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLmluZGljYWRvcmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLm1lZGlkYXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4uY29udGVuZWRvci1zZWdtZW50IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbi5jb250ZW5lZG9yLWZlY2hhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mZWNoYS1kZXNkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4uZmVjaGEtaGFzdGEge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5yaWdodGJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5pbnB1dC1jdXN0b20ge1xuICBtYXJnaW46IDlweDtcbn1cblxuLmNvbnRlbmVkb3ItaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRpdHVsb3BlcXVlMiB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW1nLXNpemUge1xuICBoZWlnaHQ6IDE2MHB4O1xuICB3aWR0aDogMjI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/indicadorescomparacion/indicadorescomparacion.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/indicadorescomparacion/indicadorescomparacion.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: IndicadorescomparacionComponent */

  /***/
  function srcAppComponentsIndicadorescomparacionIndicadorescomparacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicadorescomparacionComponent", function () {
      return IndicadorescomparacionComponent;
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


    var src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/nutricion.service */
    "./src/app/services/nutricion.service.ts");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");

    var IndicadorescomparacionComponent =
    /*#__PURE__*/
    function () {
      function IndicadorescomparacionComponent(ruta, service, alertController, loadingController, utilities) {
        _classCallCheck(this, IndicadorescomparacionComponent);

        this.ruta = ruta;
        this.service = service;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.utilities = utilities;
        this.indicadores_ante = {
          ica: null,
          imc: null,
          perimetro_cintura: null,
          tmba: null,
          tmb: null,
          estrategia_nutricional: null
        };
        this.indicadores_despues = {
          ica: null,
          imc: null,
          perimetro_cintura: null,
          tmba: null,
          tmb: null,
          estrategia_nutricional: null
        };
        this.customActionSheetOptions = {
          cssClass: 'progress-class'
        };
      }

      _createClass(IndicadorescomparacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getResume();
        }
      }, {
        key: "getResume",
        value: function getResume() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var valor, fecha1, fecha2, arraytemp, i, filteredArr;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.presentLoading();
                    _context12.next = 3;
                    return this.service.historyIndicators();

                  case 3:
                    valor = _context12.sent;

                    if (valor == false) {
                      this.loadingController.dismiss();
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    } else {
                      this.loadingController.dismiss(); // this.fechas = valor

                      fecha1 = valor['Progress'];
                      fecha2 = valor['Progress_food'];
                      arraytemp = [];
                      console.log(valor['Progress_food']); // comparamos los dos array y encontramos fechas similares

                      i = 1;
                      fecha1.forEach(function (element) {
                        fecha2.forEach(function (e) {
                          if (e.created_at.slice(0, 10) === element.created_at.slice(0, 10)) {
                            // se crean objectos con las fechas similares
                            var object = {
                              "id": i++,
                              "created_at": element.created_at.slice(0, 10),
                              "ica": element.ica,
                              "imc": element.imc,
                              "perimetro_cintura": element.perimetro_cintura,
                              "estrategia_nutricional": e.strategy_n,
                              "tmb": e.tmb
                            };
                            arraytemp.push(object);
                          }
                        });
                      });
                      console.log("nuevo array", arraytemp); // se filtra los objectos repetidos producido por las iteracciones

                      filteredArr = arraytemp.reduce(function (acc, current) {
                        var x = acc.find(function (item) {
                          return item.created_at === current.created_at;
                        });

                        if (!x) {
                          return acc.concat([current]);
                        } else {
                          return acc;
                        }
                      }, []); //  se obtiene el nuevo listado

                      console.log("filtrado", filteredArr);
                      this.fechas = filteredArr;
                    }

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var loading;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context13.sent;
                    _context13.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "desde",
        value: function desde(valor) {
          console.log(valor.target.value);
          this.valor = valor.target.value;
          this.buscador(this.valor, "ante");
        }
      }, {
        key: "hasta",
        value: function hasta(valor) {
          console.log(valor.target.value);
          this.valor2 = valor.target.value;
          this.buscador(this.valor2, "despues");
        }
      }, {
        key: "buscador",
        value: function buscador(valor, filtrar) {
          var resultado = this.fechas.find(function (elemento) {
            return elemento.id === parseInt(valor);
          });
          console.log(resultado);

          if (filtrar === "ante") {
            this.indicadores_ante.ica = resultado.ica.toFixed(2), this.indicadores_ante.imc = resultado.imc.toFixed(2), this.indicadores_ante.perimetro_cintura = resultado.perimetro_cintura, this.indicadores_ante.tmba = resultado.tmba, this.indicadores_ante.tmb = resultado.tmb, this.indicadores_ante.estrategia_nutricional = resultado.estrategia_nutricional + '%';
          } else {
            this.indicadores_despues.ica = resultado.ica.toFixed(2), this.indicadores_despues.imc = resultado.imc.toFixed(2), this.indicadores_despues.perimetro_cintura = resultado.perimetro_cintura, this.indicadores_despues.tmba = resultado.tmba, this.indicadores_despues.tmb = resultado.tmb, this.indicadores_despues.estrategia_nutricional = resultado.estrategia_nutricional + '%';
          }
        }
      }]);

      return IndicadorescomparacionComponent;
    }();

    IndicadorescomparacionComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }];
    };

    IndicadorescomparacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-indicadorescomparacion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./indicadorescomparacion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/indicadorescomparacion/indicadorescomparacion.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./indicadorescomparacion.component.scss */
      "./src/app/components/indicadorescomparacion/indicadorescomparacion.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])], IndicadorescomparacionComponent);
    /***/
  },

  /***/
  "./src/app/components/medidas/medidas.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/medidas/medidas.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMedidasMedidasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  opacity: 1;\n  color: white;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 17px;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n.unidad {\n  color: #fff;\n  font-size: 14px;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWRpZGFzL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVkaWRhc1xcbWVkaWRhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZWRpZGFzL21lZGlkYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNDTDtBRElBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDREQ7QURHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtBQ0FKO0FERUE7RUFDSSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NOO0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURBQTs7R0FBQTtBQUlBO0VBQ0ksNEJBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0FDRUo7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtBQ0dKO0FEQUE7RUFFSSxjQUFBO0FDRUo7QURLQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRDtBREtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDRixvQkFBQTtFQUNFLG1CQUFBO0FDRko7QURNRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZWRpZGFzL21lZGlkYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gXG4gICAgaDJ7XG4gICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIFxuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAudGl0dWxvMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cblxuLnJpZ2h0Ym9yZGVye1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gICAgb3BhY2l0eTogMC40O1xufSAgXG4udGl0dWxvcGVxdWUyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIC8vIGZvbnQtc2l6ZTogMS4xcmVtO1xufSAgIFxuaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAvLyAtLWNvbG9yOiBibGFjaztcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cbi8vIGlvbi1pdGVte1xuLy8gICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4vLyB9XG5cblxuaW9uLXNlbGVjdHtcbiB3aWR0aDogMTAwJTtcbiBmb250LXNpemU6IDIzcHg7XG4gZm9udC13ZWlnaHQ6MjAwO1xufVxuXG4udGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuXG4gIC51bmlkYWR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYXVtZW50YXJ0aXR1bG8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAtLWNvbG9yOndoaXRlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50aXR1bG8yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLyogZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufSAqL1xuLnJpZ2h0Ym9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuaW9uLWlucHV0IHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsb3BlcXVlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4udGl0dWxvcGVxdWUyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogICBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51bmlkYWQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiAwLjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/medidas/medidas.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/medidas/medidas.component.ts ***!
    \*********************************************************/

  /*! exports provided: MedidasComponent */

  /***/
  function srcAppComponentsMedidasMedidasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedidasComponent", function () {
      return MedidasComponent;
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


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MedidasComponent =
    /*#__PURE__*/
    function () {
      function MedidasComponent(service, utilities, usuarioService, apiService, fb, loadingController) {
        _classCallCheck(this, MedidasComponent);

        this.service = service;
        this.utilities = utilities;
        this.usuarioService = usuarioService;
        this.apiService = apiService;
        this.fb = fb;
        this.loadingController = loadingController;
        this.form = this.fb.group({
          weight: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          stature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          min_waist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          max_waist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          hip: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          neck: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          right_thigh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          left_thigh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          right_arm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          left_arm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          right_arm_flexed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          left_arm_flexed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          right_calf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          left_calf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          torax: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          waist_hip: [null],
          profile_photo: [null],
          front_photo: [null],
          back_photo: [null]
        });
      }

      _createClass(MedidasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var valor;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.presentLoading();
                    _context14.next = 3;
                    return this.service.obtenerUsuario();

                  case 3:
                    valor = _context14.sent;
                    console.log(valor);
                    this.loadingController.dismiss();

                    if (valor == false) {
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    } else {
                      console.log(valor['measurement_record']);
                      console.log(valor['user'].stature);
                      this.form.controls.stature.setValue(valor.measurement_record === null ? valor['user'].stature : valor['measurement_record'].stature);
                      this.form.controls.weight.setValue(valor.measurement_record === null ? valor['user'].weight : valor['measurement_record'].weight);
                      this.form.controls.min_waist.setValue(valor.measurement_record === null ? null : valor['measurement_record'].min_waist);
                      this.form.controls.max_waist.setValue(valor.measurement_record === null ? null : valor['measurement_record'].max_waist);
                      this.form.controls.hip.setValue(valor.measurement_record === null ? null : valor['measurement_record'].hip);
                      this.form.controls.neck.setValue(valor.measurement_record === null ? null : valor['measurement_record'].neck);
                      this.form.controls.right_thigh.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_thigh);
                      this.form.controls.left_thigh.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_thigh);
                      this.form.controls.right_arm.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_arm);
                      this.form.controls.left_arm.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_arm);
                      this.form.controls.right_arm_flexed.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_arm_flexed);
                      this.form.controls.left_arm_flexed.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_arm_flexed);
                      this.form.controls.right_calf.setValue(valor.measurement_record === null ? null : valor['measurement_record'].right_calf);
                      this.form.controls.left_calf.setValue(valor.measurement_record === null ? null : valor['measurement_record'].left_calf);
                      this.form.controls.torax.setValue(valor.measurement_record === null ? null : valor['measurement_record'].torax);
                      this.form.controls.profile_photo.setValue(valor['measurement_record'].profile_photo);
                      this.form.controls.front_photo.setValue(valor['measurement_record'].front_photo);
                      this.form.controls.back_photo.setValue(valor['measurement_record'].back_photo);
                    }

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var loading;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context15.sent;
                    _context15.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "update",
        value: function update() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var data;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.presentLoading();
                    _context16.next = 3;
                    return this.usuarioService.measurement_record(this.form.value);

                  case 3:
                    data = _context16.sent;
                    this.loadingController.dismiss();
                    console.log(data);

                    if (data) {
                      this.utilities.notificacionUsuario('Medidas actualizado', "dark");
                    } else {
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    }

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }]);

      return MedidasComponent;
    }();

    MedidasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    MedidasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medidas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./medidas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medidas/medidas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./medidas.component.scss */
      "./src/app/components/medidas/medidas.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], MedidasComponent);
    /***/
  },

  /***/
  "./src/app/components/peso/peso.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/peso/peso.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPesoPesoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  opacity: 0.7;\n  font-size: 30px;\n  font-weight: bold;\n}\n\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n\n.titulopeque {\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXNvL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVzb1xccGVzby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wZXNvL3Blc28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Blc28vcGVzby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pbnB1dHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZm9udC1zaXplOjQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvcGVxdWV7XG4gICAgb3BhY2l0eTogMC40O1xufVxuIiwiaDIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/peso/peso.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/peso/peso.component.ts ***!
    \***************************************************/

  /*! exports provided: PesoComponent */

  /***/
  function srcAppComponentsPesoPesoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PesoComponent", function () {
      return PesoComponent;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var PesoComponent =
    /*#__PURE__*/
    function () {
      function PesoComponent(usuarioservicio) {
        _classCallCheck(this, PesoComponent);

        this.usuarioservicio = usuarioservicio;
        this.habilitar = true;
        this.mensaje = "Kg";
        this.cambiarPantalla = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PesoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "valor",
        value: function valor(numero) {
          if (!isNaN(numero.target.value) && numero.target.value.length > 1) {
            if (numero.target.value > 200) {
              this.habilitar = true;
              this.mensaje = "El valor maximo es 200 kg";
            } else {
              this.numero = numero.target.value;
              this.habilitar = false;
              this.mensaje = "Kg";
            }
          } else {
            this.habilitar = true;
            this.mensaje = "introduzca un valor correcto";
          }
        }
      }, {
        key: "avanzar",
        value: function avanzar() {
          this.usuarioservicio.peso(this.numero);
          this.cambiarPantalla.emit(3);
        }
      }, {
        key: "atras",
        value: function atras() {
          this.cambiarPantalla.emit(1);
        }
      }]);

      return PesoComponent;
    }();

    PesoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PesoComponent.prototype, "cambiarPantalla", void 0);
    PesoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-peso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./peso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/peso/peso.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./peso.component.scss */
      "./src/app/components/peso/peso.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])], PesoComponent);
    /***/
  },

  /***/
  "./src/app/components/popinfo/popinfo.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/popinfo/popinfo.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopinfoPopinfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9waW5mby9wb3BpbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/popinfo/popinfo.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popinfo/popinfo.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopinfoComponent */

  /***/
  function srcAppComponentsPopinfoPopinfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopinfoComponent", function () {
      return PopinfoComponent;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var PopinfoComponent =
    /*#__PURE__*/
    function () {
      function PopinfoComponent(ruta, popoverController, ApiService, navParams) {
        _classCallCheck(this, PopinfoComponent);

        this.ruta = ruta;
        this.popoverController = popoverController;
        this.ApiService = ApiService;
        this.navParams = navParams;
      }

      _createClass(PopinfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var usuario;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.ApiService.cargarNombreUsuario();

                  case 2:
                    usuario = _context17.sent;
                    this.ApiService.IDusuario = usuario["id"];
                    this.evaluar = this.ApiService.verificarEntrenamiento;

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "bateria",
        value: function bateria() {
          this.popoverController.dismiss();
          console.log(this.excersice);
          var navigationExtras = {
            queryParams: {
              data: JSON.stringify(this.excersice)
            }
          };
          this.ruta.navigateForward("bateria-remplazo/1", navigationExtras);
        }
      }, {
        key: "remplazar",
        value: function remplazar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var valor;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    this.popoverController.dismiss();
                    _context18.next = 3;
                    return this.ApiService.listadoEjercicioRemplazarHome();

                  case 3:
                    valor = _context18.sent;

                    if (valor) {
                      this.ruta.navigateForward("listaejercicioremplazar");
                    } else {
                      console.log("error de conexion");
                    }

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return PopinfoComponent;
    }();

    PopinfoComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PopinfoComponent.prototype, "excersice", void 0);
    PopinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-popinfo",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popinfo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popinfo.component.scss */
      "./src/app/components/popinfo/popinfo.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], PopinfoComponent);
    /***/
  },

  /***/
  "./src/app/components/popmensaje/popmensaje.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/popmensaje/popmensaje.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopmensajePopmensajeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  margin: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW5zYWplL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wbWVuc2FqZVxccG9wbWVuc2FqZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW5zYWplL3BvcG1lbnNhamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx1QkFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW5zYWplL3BvcG1lbnNhamUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xubWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59IiwicCB7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/popmensaje/popmensaje.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/popmensaje/popmensaje.component.ts ***!
    \***************************************************************/

  /*! exports provided: PopmensajeComponent */

  /***/
  function srcAppComponentsPopmensajePopmensajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopmensajeComponent", function () {
      return PopmensajeComponent;
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

    var PopmensajeComponent =
    /*#__PURE__*/
    function () {
      function PopmensajeComponent(popoverController) {
        _classCallCheck(this, PopmensajeComponent);

        this.popoverController = popoverController;
      }

      _createClass(PopmensajeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.value == "sedentario") {
            this.mensaje = "No hago ejercicios";
          }

          if (this.value == "ligero") {
            this.mensaje = "Hago paseos frecuentemente";
          }

          if (this.value == "moderado") {
            this.mensaje = "Hago ejercicios sin mucha intensidad";
          }

          if (this.value == "activo") {
            this.mensaje = "Hago ejercicios de 3 a 5 veces por semanas";
          }

          if (this.value == "muyactivo") {
            this.mensaje = "Hago ejercicios 5 veces ala semana.";
          }
        }
      }, {
        key: "Cerrar",
        value: function Cerrar() {
          this.popoverController.dismiss();
        }
      }]);

      return PopmensajeComponent;
    }();

    PopmensajeComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("value"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PopmensajeComponent.prototype, "value", void 0);
    PopmensajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popmensaje',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popmensaje.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popmensaje/popmensaje.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popmensaje.component.scss */
      "./src/app/components/popmensaje/popmensaje.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopmensajeComponent);
    /***/
  },

  /***/
  "./src/app/components/popremplazar/popremplazar.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/popremplazar/popremplazar.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopremplazarPopremplazarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wcmVtcGxhemFyL3BvcHJlbXBsYXphci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/popremplazar/popremplazar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/popremplazar/popremplazar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PopremplazarComponent */

  /***/
  function srcAppComponentsPopremplazarPopremplazarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopremplazarComponent", function () {
      return PopremplazarComponent;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var PopremplazarComponent =
    /*#__PURE__*/
    function () {
      function PopremplazarComponent(popoverController, ApiService, ruta) {
        _classCallCheck(this, PopremplazarComponent);

        this.popoverController = popoverController;
        this.ApiService = ApiService;
        this.ruta = ruta;
      }

      _createClass(PopremplazarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "remplazar",
        value: function remplazar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var valor, validar;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    this.popoverController.dismiss(); // AQUI REMPLAZA EL EJERCICIO SELECIONADO / por lo momento desabilite el anterior de gym
                    // const valor = await this.ApiService.cambiarListadoEjercicio()

                    _context19.next = 3;
                    return this.ApiService.cambiarListadoEjercicioHome();

                  case 3:
                    valor = _context19.sent;

                    if (!valor) {
                      _context19.next = 13;
                      break;
                    }

                    // ANTERIOR
                    // await this.ApiService.obtenerRutina()
                    // reset rutina
                    this.ApiService.rutina = [];
                    console.log(this.ApiService.rutina);
                    _context19.next = 9;
                    return this.ApiService.obtenerRutinaHome();

                  case 9:
                    validar = _context19.sent;

                    if (validar) {
                      this.ruta.navigateRoot(["/entrenamientos"]);
                    }

                    _context19.next = 14;
                    break;

                  case 13:
                    console.log("error en la conexion");

                  case 14:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "bateria",
        value: function bateria() {
          var navigationExtras = {
            queryParams: {
              data: this.exercise
            }
          };
          this.popoverController.dismiss();
          this.ruta.navigateForward("bateria-remplazo/1", navigationExtras);
        }
      }]);

      return PopremplazarComponent;
    }();

    PopremplazarComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PopremplazarComponent.prototype, "exercise", void 0);
    PopremplazarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-popremplazar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popremplazar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popremplazar/popremplazar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popremplazar.component.scss */
      "./src/app/components/popremplazar/popremplazar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PopremplazarComponent);
    /***/
  },

  /***/
  "./src/app/components/premium/premium.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/premium/premium.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPremiumPremiumComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tarjeta {\n  border: 1px solid red;\n}\n.tarjeta p:nth-child(1) {\n  color: #fff;\n  font-size: 19px;\n  font-weight: 700;\n}\n.tarjeta p:nth-child(2) {\n  color: #cdcdcd;\n  font-size: 16px;\n}\n.tarjeta:hover {\n  background: red;\n}\n.btn-izquierda {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVtaXVtL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJlbWl1bVxccHJlbWl1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmVtaXVtL3ByZW1pdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRVI7QURHQTtFQUNFLGVBQUE7QUNBRjtBREdBO0VBQ0ksWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVtaXVtL3ByZW1pdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyamV0YXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgcDpudGgtY2hpbGQoMSl7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDIpe1xuICAgICAgICBjb2xvcjogI2NkY2RjZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuXG4udGFyamV0YTpob3ZlcntcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uYnRuLWl6cXVpZXJkYXtcbiAgICBmbG9hdDogcmlnaHQ7XG59IiwiLnRhcmpldGEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4udGFyamV0YSBwOm50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGFyamV0YSBwOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiAjY2RjZGNkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50YXJqZXRhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uYnRuLWl6cXVpZXJkYSB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/premium/premium.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/premium/premium.component.ts ***!
    \*********************************************************/

  /*! exports provided: PremiumComponent */

  /***/
  function srcAppComponentsPremiumPremiumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumComponent", function () {
      return PremiumComponent;
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


    var src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/nutricion.service */
    "./src/app/services/nutricion.service.ts");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");

    var PremiumComponent =
    /*#__PURE__*/
    function () {
      function PremiumComponent(ruta, service, utilities, loadingController) {
        _classCallCheck(this, PremiumComponent);

        this.ruta = ruta;
        this.service = service;
        this.utilities = utilities;
        this.loadingController = loadingController;
      }

      _createClass(PremiumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPremium();
        }
      }, {
        key: "getPremium",
        value: function getPremium() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            var valor;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.presentLoading();
                    _context20.next = 3;
                    return this.service.GetPrice();

                  case 3:
                    valor = _context20.sent;
                    this.loadingController.dismiss();

                    if (valor == false) {
                      this.utilities.notificacionUsuario("Ocurrio un error, revise su conexión", "danger");
                    } else {
                      this.dato = valor;
                    }

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var loading;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...'
                    });

                  case 2:
                    loading = _context21.sent;
                    _context21.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }]);

      return PremiumComponent;
    }();

    PremiumComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    PremiumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premium',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./premium.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/premium/premium.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./premium.component.scss */
      "./src/app/components/premium/premium.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], PremiumComponent);
    /***/
  },

  /***/
  "./src/app/components/progreso/progreso.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/progreso/progreso.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProgresoProgresoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc28vcHJvZ3Jlc28uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/progreso/progreso.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/progreso/progreso.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProgresoComponent */

  /***/
  function srcAppComponentsProgresoProgresoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgresoComponent", function () {
      return ProgresoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgresoComponent =
    /*#__PURE__*/
    function () {
      function ProgresoComponent() {
        _classCallCheck(this, ProgresoComponent);
      }

      _createClass(ProgresoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgresoComponent;
    }();

    ProgresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progreso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progreso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progreso/progreso.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progreso.component.scss */
      "./src/app/components/progreso/progreso.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProgresoComponent);
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialAlimentoPaso1TutorialAlimentoPaso1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  font-size: 2rem;\n  margin: 1rem;\n  text-align: center;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n  color: white;\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.customtarjeta {\n  -webkit-filter: brightness(1);\n          filter: brightness(1);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.titulo2 {\n  margin: 0;\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container2 {\n  width: 100%;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white ;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.identificador {\n  position: absolute;\n  background: #EF4044;\n  border-radius: 0px 20px 20px 0px;\n  padding: 0rem 0.8rem;\n  color: white;\n  top: 0;\n}\n\n.box-img-container {\n  position: relative;\n}\n\n.box-text-container {\n  padding: 1rem;\n}\n\n.parrafo {\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvMS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHR1dG9yaWFsLWFsaW1lbnRvLXBhc28xXFx0dXRvcmlhbC1hbGltZW50by1wYXNvMS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvMS90dXRvcmlhbC1hbGltZW50by1wYXNvMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRE1FO0VBRUUsbUJBQUE7VUFBQSxPQUFBO0VBRUQscUJBQUE7RUFFQyxrQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDTko7O0FEU0U7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNOTjs7QUQ2QkU7RUFDSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQ0FBQTtFQzFCUjtFRDZCSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxvQ0FBQTtFQzNCUjtFRDhCSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQ0FBQTtFQzVCUjtBQUNGOztBRGNFO0VBQ0k7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esc0NBQUE7RUMxQlI7RUQ2Qkk7SUFDSSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0Esb0NBQUE7RUMzQlI7RUQ4Qkk7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esb0NBQUE7RUM1QlI7QUFDRjs7QURnQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUM5Qk47O0FEaUNFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDOUJKOztBRGlDRTtFQUNFLFdBQUE7QUM5Qko7O0FEbUNFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNoQ0o7O0FEb0NFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURtQ0U7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FDaENKOztBRGtDRTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSwrQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSx1QkFBQTtBQzlCSjs7QURrQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDL0JKOztBRGtDRTtFQUNJLGtCQUFBO0FDL0JOOztBRGtDRTtFQUNJLGFBQUE7QUMvQk47O0FEaUNFO0VBQ0ksZUFBQTtBQzlCTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHV0b3JpYWwtYWxpbWVudG8tcGFzbzEvdHV0b3JpYWwtYWxpbWVudG8tcGFzbzEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWFnZW5tb2RpZmljYWRhe1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250ZW5lZG9yTWVudXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFRjQwNDQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4wOSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgXG4gIC8vIG9yaWdpbmFsXG4gIC5jb250ZW5lZG9yTWVudUl0ZW17XG4gICAgLy8gaGFjZXJsbyB0b2RvIGRlbCBtaXNtbyB0YW1hw7FvXG4gICAgZmxleDogMTsgXG4gICAgLy8gZXNwYWNpbyBlbnRyZSBhbWJvcyBpdGVtc1xuICAgLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICAgIC8vIGNlbnRyYXJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjNzO1xuICB9XG4gIFxuICAuY3VzdG9tdGFyamV0YXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8vIC5jb250ZW5lZG9yTWVudUl0ZW06bnRoLWNoaWxkKDEpe1xuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvLyBcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIC8vIH1cbiAgXG4gIC8vIC5jb250ZW5lZG9yTWVudUl0ZW06bnRoLWNoaWxkKDIpe1xuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvLyBcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIC8vIH1cbiAgXG4gIC8vIC5jb250ZW5lZG9yTWVudUl0ZW06bnRoLWNoaWxkKDMpe1xuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvLyBcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIC8vIH1cbiAgXG4gIFxuICBcbiAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIH1cbiAgXG4gICAgICA3MCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLnRpdHVsb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLnRpdHVsbzJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuY29udGFpbmVyMntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICBpb24tcHJvZ3Jlc3MtYmFye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIFxuICAuY2FyYm9Qe1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnByb3RlUHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlIDtcbiAgfVxuICAuZ3Jhc2FQe1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmNvbXBsZXRle1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IGdyZXk7XG4gIH1cbiAgXG4gIC5yYXlhOm50aC1jaGlsZChvZGQpe1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG4gIH1cbiAgXG4gIGlvbi1pdGVte1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICB9XG5cblxuICAuaWRlbnRpZmljYWRvcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgICBwYWRkaW5nOiAwcmVtIDAuOHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmJveC1pbWctY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmJveC10ZXh0LWNvbnRhaW5lcntcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLnBhcnJhZm97XG4gICAgICBmb250LXNpemU6IDE5cHg7XG4gIH0iLCIuaW1hZ2VubW9kaWZpY2FkYSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVuZWRvck1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVuZWRvck1lbnVJdGVtIHtcbiAgZmxleDogMTtcbiAgLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xufVxuXG4uY3VzdG9tdGFyamV0YSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbn1cbi50aXR1bG8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0dWxvMiB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJib1Age1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnByb3RlUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlIDtcbn1cblxuLmdyYXNhUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29tcGxldGUge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnJheWE6bnRoLWNoaWxkKG9kZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uaWRlbnRpZmljYWRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG4gIHBhZGRpbmc6IDByZW0gMC44cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbn1cblxuLmJveC1pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94LXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBhcnJhZm8ge1xuICBmb250LXNpemU6IDE5cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TutorialAlimentoPaso1Component */

  /***/
  function srcAppComponentsTutorialAlimentoPaso1TutorialAlimentoPaso1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialAlimentoPaso1Component", function () {
      return TutorialAlimentoPaso1Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var TutorialAlimentoPaso1Component =
    /*#__PURE__*/
    function () {
      function TutorialAlimentoPaso1Component(apiService, ruta) {
        _classCallCheck(this, TutorialAlimentoPaso1Component);

        this.apiService = apiService;
        this.ruta = ruta;
      }

      _createClass(TutorialAlimentoPaso1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saltar",
        value: function saltar() {
          this.apiService.guardartutorial(true);
          this.ruta.navigateRoot(['/bateria-alimento']);
        }
      }]);

      return TutorialAlimentoPaso1Component;
    }();

    TutorialAlimentoPaso1Component.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TutorialAlimentoPaso1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-alimento-paso1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-alimento-paso1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-alimento-paso1.component.scss */
      "./src/app/components/tutorial-alimento-paso1/tutorial-alimento-paso1.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TutorialAlimentoPaso1Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialAlimentoPaso2TutorialAlimentoPaso2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  font-size: 2rem;\n  margin: 1rem;\n  text-align: center;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n  color: white;\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.customtarjeta {\n  -webkit-filter: brightness(1);\n          filter: brightness(1);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.titulo2 {\n  margin: 0;\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container2 {\n  width: 100%;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white ;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.identificador {\n  position: absolute;\n  background: #EF4044;\n  border-radius: 0px 20px 20px 0px;\n  padding: 0rem 0.8rem;\n  color: white;\n  top: 0;\n}\n\n.box-img-container {\n  position: relative;\n}\n\n.box-text-container {\n  padding: 1rem;\n}\n\n.parrafo {\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvMi9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHR1dG9yaWFsLWFsaW1lbnRvLXBhc28yXFx0dXRvcmlhbC1hbGltZW50by1wYXNvMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvMi90dXRvcmlhbC1hbGltZW50by1wYXNvMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRE1FO0VBRUUsbUJBQUE7VUFBQSxPQUFBO0VBRUQscUJBQUE7RUFFQyxrQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDTko7O0FEU0U7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNOTjs7QUQ2QkU7RUFDSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQ0FBQTtFQzFCUjtFRDZCSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxvQ0FBQTtFQzNCUjtFRDhCSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQ0FBQTtFQzVCUjtBQUNGOztBRGNFO0VBQ0k7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esc0NBQUE7RUMxQlI7RUQ2Qkk7SUFDSSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0Esb0NBQUE7RUMzQlI7RUQ4Qkk7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esb0NBQUE7RUM1QlI7QUFDRjs7QURnQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUM5Qk47O0FEaUNFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDOUJKOztBRGlDRTtFQUNFLFdBQUE7QUM5Qko7O0FEbUNFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNoQ0o7O0FEb0NFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURtQ0U7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FDaENKOztBRGtDRTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSwrQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSx1QkFBQTtBQzlCSjs7QURrQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDL0JKOztBRGtDRTtFQUNJLGtCQUFBO0FDL0JOOztBRGtDRTtFQUNJLGFBQUE7QUMvQk47O0FEaUNFO0VBQ0ksZUFBQTtBQzlCTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHV0b3JpYWwtYWxpbWVudG8tcGFzbzIvdHV0b3JpYWwtYWxpbWVudG8tcGFzbzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWFnZW5tb2RpZmljYWRhe1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250ZW5lZG9yTWVudXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFRjQwNDQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4wOSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgXG4gIC8vIG9yaWdpbmFsXG4gIC5jb250ZW5lZG9yTWVudUl0ZW17XG4gICAgLy8gaGFjZXJsbyB0b2RvIGRlbCBtaXNtbyB0YW1hw7FvXG4gICAgZmxleDogMTsgXG4gICAgLy8gZXNwYWNpbyBlbnRyZSBhbWJvcyBpdGVtc1xuICAgLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICAgIC8vIGNlbnRyYXJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjNzO1xuICB9XG4gIFxuICAuY3VzdG9tdGFyamV0YXtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8vIC5jb250ZW5lZG9yTWVudUl0ZW06bnRoLWNoaWxkKDEpe1xuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvLyBcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIC8vIH1cbiAgXG4gIC8vIC5jb250ZW5lZG9yTWVudUl0ZW06bnRoLWNoaWxkKDIpe1xuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvLyBcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIC8vIH1cbiAgXG4gIC8vIC5jb250ZW5lZG9yTWVudUl0ZW06bnRoLWNoaWxkKDMpe1xuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvLyBcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIC8vIH1cbiAgXG4gIFxuICBcbiAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIH1cbiAgXG4gICAgICA3MCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLnRpdHVsb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLnRpdHVsbzJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuY29udGFpbmVyMntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICBpb24tcHJvZ3Jlc3MtYmFye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIFxuICAuY2FyYm9Qe1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnByb3RlUHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlIDtcbiAgfVxuICAuZ3Jhc2FQe1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmNvbXBsZXRle1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IGdyZXk7XG4gIH1cbiAgXG4gIC5yYXlhOm50aC1jaGlsZChvZGQpe1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG4gIH1cbiAgXG4gIGlvbi1pdGVte1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICB9XG5cblxuICAuaWRlbnRpZmljYWRvcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgICBwYWRkaW5nOiAwcmVtIDAuOHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmJveC1pbWctY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmJveC10ZXh0LWNvbnRhaW5lcntcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLnBhcnJhZm97XG4gICAgICBmb250LXNpemU6IDE5cHg7XG4gIH0iLCIuaW1hZ2VubW9kaWZpY2FkYSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVuZWRvck1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVuZWRvck1lbnVJdGVtIHtcbiAgZmxleDogMTtcbiAgLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xufVxuXG4uY3VzdG9tdGFyamV0YSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbn1cbi50aXR1bG8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0dWxvMiB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJib1Age1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnByb3RlUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlIDtcbn1cblxuLmdyYXNhUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29tcGxldGUge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnJheWE6bnRoLWNoaWxkKG9kZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uaWRlbnRpZmljYWRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG4gIHBhZGRpbmc6IDByZW0gMC44cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbn1cblxuLmJveC1pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94LXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBhcnJhZm8ge1xuICBmb250LXNpemU6IDE5cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TutorialAlimentoPaso2Component */

  /***/
  function srcAppComponentsTutorialAlimentoPaso2TutorialAlimentoPaso2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialAlimentoPaso2Component", function () {
      return TutorialAlimentoPaso2Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var TutorialAlimentoPaso2Component =
    /*#__PURE__*/
    function () {
      function TutorialAlimentoPaso2Component(apiService, ruta, domsegunridad) {
        _classCallCheck(this, TutorialAlimentoPaso2Component);

        this.apiService = apiService;
        this.ruta = ruta;
        this.domsegunridad = domsegunridad;
      }

      _createClass(TutorialAlimentoPaso2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.videoURL = this.domsegunridad.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/nXPwfIF7wFI");
        }
      }, {
        key: "saltar",
        value: function saltar() {
          this.apiService.guardartutorial(true);
          this.ruta.navigateRoot(['/bateria-alimento']);
        }
      }]);

      return TutorialAlimentoPaso2Component;
    }();

    TutorialAlimentoPaso2Component.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    TutorialAlimentoPaso2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-alimento-paso2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-alimento-paso2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-alimento-paso2.component.scss */
      "./src/app/components/tutorial-alimento-paso2/tutorial-alimento-paso2.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])], TutorialAlimentoPaso2Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialAlimentoPaso3TutorialAlimentoPaso3ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  font-size: 2rem;\n  margin: 1rem;\n  text-align: center;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n  color: white;\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.customtarjeta {\n  -webkit-filter: brightness(1);\n          filter: brightness(1);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.titulo2 {\n  margin: 0;\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container2 {\n  width: 100%;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white ;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.identificador {\n  position: absolute;\n  background: #EF4044;\n  border-radius: 0px 20px 20px 0px;\n  padding: 0rem 0.8rem;\n  color: white;\n  top: 0;\n}\n\n.box-img-container {\n  position: relative;\n}\n\n.box-text-container {\n  padding: 1rem;\n}\n\n.parrafo {\n  font-size: 19px;\n}\n\n.box-video-container {\n  height: 13rem;\n  background: black;\n  color: white;\n}\n\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvMy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHR1dG9yaWFsLWFsaW1lbnRvLXBhc28zXFx0dXRvcmlhbC1hbGltZW50by1wYXNvMy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvMy90dXRvcmlhbC1hbGltZW50by1wYXNvMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRE1FO0VBRUUsbUJBQUE7VUFBQSxPQUFBO0VBRUQscUJBQUE7RUFFQyxrQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDTko7O0FEU0U7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNOTjs7QUQ2QkU7RUFDSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQ0FBQTtFQzFCUjtFRDZCSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxvQ0FBQTtFQzNCUjtFRDhCSTtJQUNJLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQ0FBQTtFQzVCUjtBQUNGOztBRGNFO0VBQ0k7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esc0NBQUE7RUMxQlI7RUQ2Qkk7SUFDSSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0Esb0NBQUE7RUMzQlI7RUQ4Qkk7SUFDSSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esb0NBQUE7RUM1QlI7QUFDRjs7QURnQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUM5Qk47O0FEaUNFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDOUJKOztBRGlDRTtFQUNFLFdBQUE7QUM5Qko7O0FEbUNFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNoQ0o7O0FEb0NFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURtQ0U7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FDaENKOztBRGtDRTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSwrQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSx1QkFBQTtBQzlCSjs7QURrQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDL0JKOztBRGtDRTtFQUNJLGtCQUFBO0FDL0JOOztBRGtDRTtFQUNJLGFBQUE7QUMvQk47O0FEaUNFO0VBQ0ksZUFBQTtBQzlCTjs7QURpQ0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDOUJKOztBRHlDQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7QUN0Q0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsLWFsaW1lbnRvLXBhc28zL3R1dG9yaWFsLWFsaW1lbnRvLXBhc28zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1hZ2VubW9kaWZpY2FkYXtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGVuZWRvck1lbnV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0MDQ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMDkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgXG4gIFxuICAvLyBvcmlnaW5hbFxuICAuY29udGVuZWRvck1lbnVJdGVte1xuICAgIC8vIGhhY2VybG8gdG9kbyBkZWwgbWlzbW8gdGFtYcOxb1xuICAgIGZsZXg6IDE7IFxuICAgIC8vIGVzcGFjaW8gZW50cmUgYW1ib3MgaXRlbXNcbiAgIC8qICBtYXJnaW46IDAgMTBweDsgKi9cbiAgICAvLyBjZW50cmFyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4zcztcbiAgfVxuICBcbiAgLmN1c3RvbXRhcmpldGF7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICB9XG4gIFxuICAvLyAuY29udGVuZWRvck1lbnVJdGVtOm50aC1jaGlsZCgxKXtcbiAgLy8gICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gIC8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLy8gXHRhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAvLyB9XG4gIFxuICAvLyAuY29udGVuZWRvck1lbnVJdGVtOm50aC1jaGlsZCgyKXtcbiAgLy8gICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gIC8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLy8gXHRhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAvLyB9XG4gIFxuICAvLyAuY29udGVuZWRvck1lbnVJdGVtOm50aC1jaGlsZCgzKXtcbiAgLy8gICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gIC8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLy8gXHRhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAvLyB9XG4gIFxuICBcbiAgXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICB9XG4gIFxuICAgICAgNzAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIH1cbiAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC50aXR1bG97XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC50aXR1bG8ye1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcjJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIFxuICBcbiAgaW9uLXByb2dyZXNzLWJhcntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICBcbiAgLmNhcmJvUHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5wcm90ZVB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSA7XG4gIH1cbiAgLmdyYXNhUHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5jb21wbGV0ZXtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiBncmV5O1xuICB9XG4gIFxuICAucmF5YTpudGgtY2hpbGQob2RkKXtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xuICB9XG4gIFxuICBpb24taXRlbXtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgfVxuXG5cbiAgLmlkZW50aWZpY2Fkb3J7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNFRjQwNDQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG4gICAgcGFkZGluZzogMHJlbSAwLjhyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gIC5ib3gtaW1nLWNvbnRhaW5lcntcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5ib3gtdGV4dC1jb250YWluZXJ7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5wYXJyYWZve1xuICAgICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5cbiAgLmJveC12aWRlby1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxM3JlbTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuXG4gIC8vIEBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgLy8gICBAbWVkaWEgKG1heC1oZWlnaHQ6NjQwcHgpIHtcbiAgLy8gICAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gYWp1c3RhciBpbWFnZW4gZGUgY2FyZ2EgYSB2aWRlb1xuLnZpZGVvUmVwcm9kdWN0b3J7XG4gIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgLy8gd2lkdGg6IDEwMCU7IFxuICAvLyBoZWlnaHQ6IDE2ZW07XG4gIC8vIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgLy8gICAgIGhlaWdodDphdXRvO1xuICAvLyAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgLy8gfVxufSIsIi5pbWFnZW5tb2RpZmljYWRhIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yTWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW5lZG9yTWVudUl0ZW0ge1xuICBmbGV4OiAxO1xuICAvKiAgbWFyZ2luOiAwIDEwcHg7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG5cbi5jdXN0b210YXJqZXRhIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxufVxuLnRpdHVsbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50aXR1bG8yIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmJvUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucHJvdGVQIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgO1xufVxuXG4uZ3Jhc2FQIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb21wbGV0ZSB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4ucmF5YTpudGgtY2hpbGQob2RkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cbi5pZGVudGlmaWNhZG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRUY0MDQ0O1xuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgcGFkZGluZzogMHJlbSAwLjhyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYm94LWltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3gtdGV4dC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucGFycmFmbyB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmJveC12aWRlby1jb250YWluZXIge1xuICBoZWlnaHQ6IDEzcmVtO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udmlkZW9SZXByb2R1Y3RvciB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TutorialAlimentoPaso3Component */

  /***/
  function srcAppComponentsTutorialAlimentoPaso3TutorialAlimentoPaso3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialAlimentoPaso3Component", function () {
      return TutorialAlimentoPaso3Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TutorialAlimentoPaso3Component =
    /*#__PURE__*/
    function () {
      function TutorialAlimentoPaso3Component(apiService, ruta) {
        _classCallCheck(this, TutorialAlimentoPaso3Component);

        this.apiService = apiService;
        this.ruta = ruta;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
      }

      _createClass(TutorialAlimentoPaso3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.video1 = "".concat(this.URL, "/videos/tutoriales/t1.mp4");
        }
      }, {
        key: "saltar",
        value: function saltar() {
          this.apiService.guardartutorial(true);
          this.ruta.navigateRoot(['/bateria-alimento']);
        }
      }]);

      return TutorialAlimentoPaso3Component;
    }();

    TutorialAlimentoPaso3Component.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TutorialAlimentoPaso3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-alimento-paso3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-alimento-paso3.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-alimento-paso3.component.scss */
      "./src/app/components/tutorial-alimento-paso3/tutorial-alimento-paso3.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TutorialAlimentoPaso3Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialAlimentoPaso4TutorialAlimentoPaso4ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  font-size: 2rem;\n  margin: 1rem;\n  text-align: center;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n  color: white;\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.customtarjeta {\n  -webkit-filter: brightness(1);\n          filter: brightness(1);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.titulo2 {\n  margin: 0;\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container2 {\n  width: 100%;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.identificador {\n  position: absolute;\n  background: #ef4044;\n  border-radius: 0px 20px 20px 0px;\n  padding: 0rem 0.8rem;\n  color: white;\n  top: 0;\n}\n\n.box-img-container {\n  position: relative;\n}\n\n.box-text-container {\n  padding: 1rem;\n}\n\n.parrafo {\n  font-size: 19px;\n}\n\n.box-video-container {\n  height: 13rem;\n  background: black;\n  color: white;\n}\n\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.videoReproductor2 {\n  background-image: url('gif-logo-video.gif');\n  background-size: 154% 100%;\n  background-position-x: center;\n  background-repeat: no-repeat;\n  width: 100% !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvNC9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHR1dG9yaWFsLWFsaW1lbnRvLXBhc280XFx0dXRvcmlhbC1hbGltZW50by1wYXNvNC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvNC90dXRvcmlhbC1hbGltZW50by1wYXNvNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBRUUsbUJBQUE7VUFBQSxPQUFBO0VBRUEscUJBQUE7RUFFQSxrQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDSEY7O0FETUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNIRjs7QUR3QkE7RUFDRTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQ0FBQTtFQ3JCRjtFRHdCQTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxvQ0FBQTtFQ3RCRjtFRHlCQTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQ0FBQTtFQ3ZCRjtBQUNGOztBRFNBO0VBQ0U7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esc0NBQUE7RUNyQkY7RUR3QkE7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0Esb0NBQUE7RUN0QkY7RUR5QkE7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0Esb0NBQUE7RUN2QkY7QUFDRjs7QUQwQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDeEJGOztBRDJCQTtFQUNFLFdBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ3hCRjs7QUQwQkE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FDdkJGOztBRHlCQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSwrQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSx1QkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDckJGOztBRHdCQTtFQUNFLGtCQUFBO0FDckJGOztBRHdCQTtFQUNFLGFBQUE7QUNyQkY7O0FEdUJBO0VBQ0UsZUFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDcEJGOztBRHVCQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7QUNwQkY7O0FEdUJBO0VBR0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDdEJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1hbGltZW50by1wYXNvNC90dXRvcmlhbC1hbGltZW50by1wYXNvNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5tb2RpZmljYWRhIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbmVkb3JNZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0VGNDA0NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyBvcmlnaW5hbFxuLmNvbnRlbmVkb3JNZW51SXRlbSB7XG4gIC8vIGhhY2VybG8gdG9kbyBkZWwgbWlzbW8gdGFtYcOxb1xuICBmbGV4OiAxO1xuICAvLyBlc3BhY2lvIGVudHJlIGFtYm9zIGl0ZW1zXG4gIC8qICBtYXJnaW46IDAgMTBweDsgKi9cbiAgLy8gY2VudHJhclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xufVxuXG4uY3VzdG9tdGFyamV0YSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMSl7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMil7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMyl7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG59XG5cbi50aXR1bG8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0dWxvMiB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJib1Age1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wcm90ZVAge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ncmFzYVAge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb21wbGV0ZSB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4ucmF5YTpudGgtY2hpbGQob2RkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cbi5pZGVudGlmaWNhZG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZWY0MDQ0O1xuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbiAgcGFkZGluZzogMHJlbSAwLjhyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYm94LWltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3gtdGV4dC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnBhcnJhZm8ge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5ib3gtdmlkZW8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxM3JlbTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnZpZGVvUmVwcm9kdWN0b3Ige1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnZpZGVvUmVwcm9kdWN0b3IyIHtcbiAgLy8gb2JqZWN0LWZpdDogaW5oZXJpdDtcbiAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2lmLWxvZ28tdmlkZW8uZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1NCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuIiwiLmltYWdlbm1vZGlmaWNhZGEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbmVkb3JNZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbmVkb3JNZW51SXRlbSB7XG4gIGZsZXg6IDE7XG4gIC8qICBtYXJnaW46IDAgMTBweDsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbn1cblxuLmN1c3RvbXRhcmpldGEge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG59XG4udGl0dWxvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpdHVsbzIge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhaW5lcjIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FyYm9QIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wcm90ZVAge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdyYXNhUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29tcGxldGUge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnJheWE6bnRoLWNoaWxkKG9kZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uaWRlbnRpZmljYWRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2VmNDA0NDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG4gIHBhZGRpbmc6IDByZW0gMC44cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbn1cblxuLmJveC1pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94LXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBhcnJhZm8ge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5ib3gtdmlkZW8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxM3JlbTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnZpZGVvUmVwcm9kdWN0b3Ige1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnZpZGVvUmVwcm9kdWN0b3IyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9naWYtbG9nby12aWRlby5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTU0JSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TutorialAlimentoPaso4Component */

  /***/
  function srcAppComponentsTutorialAlimentoPaso4TutorialAlimentoPaso4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialAlimentoPaso4Component", function () {
      return TutorialAlimentoPaso4Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var TutorialAlimentoPaso4Component =
    /*#__PURE__*/
    function () {
      function TutorialAlimentoPaso4Component(apiService, ruta) {
        _classCallCheck(this, TutorialAlimentoPaso4Component);

        this.apiService = apiService;
        this.ruta = ruta;
        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
      }

      _createClass(TutorialAlimentoPaso4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.video2 = "".concat(URL, "/videos/tutoriales/t5.mp4");
          this.video3 = "".concat(URL, "/videos/tutoriales/t3.mp4");
          this.video4 = "".concat(URL, "/videos/tutoriales/t4.mp4");
        }
      }, {
        key: "saltar",
        value: function saltar() {
          this.apiService.guardartutorial(true);
          this.ruta.navigateRoot(['/bateria-alimento']);
        }
      }]);

      return TutorialAlimentoPaso4Component;
    }();

    TutorialAlimentoPaso4Component.ctorParameters = function () {
      return [{
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TutorialAlimentoPaso4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-alimento-paso4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-alimento-paso4.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-alimento-paso4.component.scss */
      "./src/app/components/tutorial-alimento-paso4/tutorial-alimento-paso4.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TutorialAlimentoPaso4Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialPlanesPaso1TutorialPlanesPaso1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".omitir {\n  position: absolute;\n  color: #EF4044;\n  right: 2rem;\n}\n\n.imagen {\n  width: 100%;\n}\n\nh2 {\n  color: white;\n  font-size: 28px;\n  margin-bottom: 1.5rem;\n  margin-top: 0;\n}\n\n.box {\n  color: white;\n  opacity: 0.7;\n  font-size: 18px;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzEvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dXRvcmlhbC1wbGFuZXMtcGFzbzFcXHR1dG9yaWFsLXBsYW5lcy1wYXNvMS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzEvdHV0b3JpYWwtcGxhbmVzLXBhc28xLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHV0b3JpYWwtcGxhbmVzLXBhc28xL3R1dG9yaWFsLXBsYW5lcy1wYXNvMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbWl0aXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjRUY0MDQ0O1xuICAgIHJpZ2h0OiAycmVtO1xufVxuXG4uaW1hZ2Vue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5oMntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYm94e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuIiwiLm9taXRpciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNFRjQwNDQ7XG4gIHJpZ2h0OiAycmVtO1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJveCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TutorialPlanesPaso1Component */

  /***/
  function srcAppComponentsTutorialPlanesPaso1TutorialPlanesPaso1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPlanesPaso1Component", function () {
      return TutorialPlanesPaso1Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var TutorialPlanesPaso1Component =
    /*#__PURE__*/
    function () {
      function TutorialPlanesPaso1Component(ruta, service) {
        _classCallCheck(this, TutorialPlanesPaso1Component);

        this.ruta = ruta;
        this.service = service;
      }

      _createClass(TutorialPlanesPaso1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "omitir",
        value: function omitir() {
          this.service.ActualizarFittechApp();
          this.ruta.navigateRoot(['/login']);
        }
      }]);

      return TutorialPlanesPaso1Component;
    }();

    TutorialPlanesPaso1Component.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    TutorialPlanesPaso1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-planes-paso1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-planes-paso1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-planes-paso1.component.scss */
      "./src/app/components/tutorial-planes-paso1/tutorial-planes-paso1.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], TutorialPlanesPaso1Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialPlanesPaso2TutorialPlanesPaso2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".omitir {\n  position: absolute;\n  color: #EF4044;\n  right: 2rem;\n}\n\n.imagen {\n  height: 45%;\n  width: 100%;\n}\n\nh2 {\n  color: white;\n  font-size: 28px;\n  margin-bottom: 1.5rem;\n  margin-top: 0;\n}\n\n.box {\n  color: white;\n  opacity: 0.7;\n  font-size: 18px;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzIvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dXRvcmlhbC1wbGFuZXMtcGFzbzJcXHR1dG9yaWFsLXBsYW5lcy1wYXNvMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzIvdHV0b3JpYWwtcGxhbmVzLXBhc28yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBSUksV0FBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsLXBsYW5lcy1wYXNvMi90dXRvcmlhbC1wbGFuZXMtcGFzbzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub21pdGlye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI0VGNDA0NDtcbiAgICByaWdodDogMnJlbTtcbn1cblxuLmltYWdlbntcbiAgICAvLyBhbnRlcmlvclxuICAgIC8vIGhlaWdodDogNTclO1xuICAgIC8vIG51ZXZhXG4gICAgaGVpZ2h0OiA0NSU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmgye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5ib3h7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG4iLCIub21pdGlyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI0VGNDA0NDtcbiAgcmlnaHQ6IDJyZW07XG59XG5cbi5pbWFnZW4ge1xuICBoZWlnaHQ6IDQ1JTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJveCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TutorialPlanesPaso2Component */

  /***/
  function srcAppComponentsTutorialPlanesPaso2TutorialPlanesPaso2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPlanesPaso2Component", function () {
      return TutorialPlanesPaso2Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var TutorialPlanesPaso2Component =
    /*#__PURE__*/
    function () {
      function TutorialPlanesPaso2Component(ruta, service) {
        _classCallCheck(this, TutorialPlanesPaso2Component);

        this.ruta = ruta;
        this.service = service;
      }

      _createClass(TutorialPlanesPaso2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "omitir",
        value: function omitir() {
          this.service.ActualizarFittechApp();
          this.ruta.navigateRoot(['/login']);
        }
      }]);

      return TutorialPlanesPaso2Component;
    }();

    TutorialPlanesPaso2Component.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    TutorialPlanesPaso2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-planes-paso2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-planes-paso2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-planes-paso2.component.scss */
      "./src/app/components/tutorial-planes-paso2/tutorial-planes-paso2.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], TutorialPlanesPaso2Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialPlanesPaso3TutorialPlanesPaso3ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".omitir {\n  position: absolute;\n  color: #EF4044;\n  right: 2rem;\n}\n\n.imagen {\n  height: 57%;\n  width: 100%;\n}\n\nh2 {\n  color: white;\n  font-size: 28px;\n  margin-bottom: 1.5rem;\n  margin-top: 0;\n}\n\n.box {\n  color: white;\n  opacity: 0.7;\n  font-size: 18px;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzMvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dXRvcmlhbC1wbGFuZXMtcGFzbzNcXHR1dG9yaWFsLXBsYW5lcy1wYXNvMy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzMvdHV0b3JpYWwtcGxhbmVzLXBhc28zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsLXBsYW5lcy1wYXNvMy90dXRvcmlhbC1wbGFuZXMtcGFzbzMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub21pdGlye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI0VGNDA0NDtcbiAgICByaWdodDogMnJlbTtcbn1cblxuLmltYWdlbntcbiAgICBoZWlnaHQ6IDU3JTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJveHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbiIsIi5vbWl0aXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjRUY0MDQ0O1xuICByaWdodDogMnJlbTtcbn1cblxuLmltYWdlbiB7XG4gIGhlaWdodDogNTclO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TutorialPlanesPaso3Component */

  /***/
  function srcAppComponentsTutorialPlanesPaso3TutorialPlanesPaso3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPlanesPaso3Component", function () {
      return TutorialPlanesPaso3Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var TutorialPlanesPaso3Component =
    /*#__PURE__*/
    function () {
      function TutorialPlanesPaso3Component(ruta, service) {
        _classCallCheck(this, TutorialPlanesPaso3Component);

        this.ruta = ruta;
        this.service = service;
      }

      _createClass(TutorialPlanesPaso3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "omitir",
        value: function omitir() {
          this.service.ActualizarFittechApp();
          this.ruta.navigateRoot(['/login']);
        }
      }]);

      return TutorialPlanesPaso3Component;
    }();

    TutorialPlanesPaso3Component.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    TutorialPlanesPaso3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-planes-paso3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-planes-paso3.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-planes-paso3.component.scss */
      "./src/app/components/tutorial-planes-paso3/tutorial-planes-paso3.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], TutorialPlanesPaso3Component);
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialPlanesPaso4TutorialPlanesPaso4ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".omitir {\n  position: absolute;\n  color: #EF4044;\n  right: 2rem;\n}\n\n.imagen {\n  height: 57%;\n  width: 100%;\n}\n\nh2 {\n  color: white;\n  font-size: 28px;\n  margin-bottom: 1.5rem;\n  margin-top: 0;\n}\n\n.box {\n  color: white;\n  opacity: 0.7;\n  font-size: 18px;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzQvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dXRvcmlhbC1wbGFuZXMtcGFzbzRcXHR1dG9yaWFsLXBsYW5lcy1wYXNvNC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1wbGFuZXMtcGFzbzQvdHV0b3JpYWwtcGxhbmVzLXBhc280LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsLXBsYW5lcy1wYXNvNC90dXRvcmlhbC1wbGFuZXMtcGFzbzQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub21pdGlye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI0VGNDA0NDtcbiAgICByaWdodDogMnJlbTtcbn1cblxuLmltYWdlbntcbiAgICBoZWlnaHQ6IDU3JTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJveHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbiIsIi5vbWl0aXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjRUY0MDQ0O1xuICByaWdodDogMnJlbTtcbn1cblxuLmltYWdlbiB7XG4gIGhlaWdodDogNTclO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TutorialPlanesPaso4Component */

  /***/
  function srcAppComponentsTutorialPlanesPaso4TutorialPlanesPaso4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPlanesPaso4Component", function () {
      return TutorialPlanesPaso4Component;
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


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var TutorialPlanesPaso4Component =
    /*#__PURE__*/
    function () {
      function TutorialPlanesPaso4Component(ruta, service) {
        _classCallCheck(this, TutorialPlanesPaso4Component);

        this.ruta = ruta;
        this.service = service;
      }

      _createClass(TutorialPlanesPaso4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "omitir",
        value: function omitir() {
          this.service.ActualizarFittechApp();
          this.ruta.navigateRoot(['/login']);
        }
      }]);

      return TutorialPlanesPaso4Component;
    }();

    TutorialPlanesPaso4Component.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    TutorialPlanesPaso4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-planes-paso4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-planes-paso4.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-planes-paso4.component.scss */
      "./src/app/components/tutorial-planes-paso4/tutorial-planes-paso4.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], TutorialPlanesPaso4Component);
    /***/
  },

  /***/
  "./src/app/decimals.directive.ts":
  /*!***************************************!*\
    !*** ./src/app/decimals.directive.ts ***!
    \***************************************/

  /*! exports provided: TwoDigitDecimaNumberDirective */

  /***/
  function srcAppDecimalsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoDigitDecimaNumberDirective", function () {
      return TwoDigitDecimaNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TwoDigitDecimaNumberDirective =
    /*#__PURE__*/
    function () {
      function TwoDigitDecimaNumberDirective(el) {
        _classCallCheck(this, TwoDigitDecimaNumberDirective);

        this.el = el; // Allow decimal numbers and negative values

        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g); // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home

        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
      }

      _createClass(TwoDigitDecimaNumberDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(event) {
          console.log(this.el.nativeElement.value); // Allow Backspace, tab, end, and home keys

          if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
          }

          var current = this.el.nativeElement.value;
          var position = this.el.nativeElement.selectionStart;
          var next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');

          if (next && !String(next).match(this.regex)) {
            event.preventDefault();
          }
        }
      }]);

      return TwoDigitDecimaNumberDirective;
    }();

    TwoDigitDecimaNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TwoDigitDecimaNumberDirective.prototype, "ngOnChanges", null);
    TwoDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appTwoDigitDecimaNumber]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], TwoDigitDecimaNumberDirective);
    /***/
  },

  /***/
  "./src/app/guards/login.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/login.guard.ts ***!
    \***************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
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

    var LoginGuard =
    /*#__PURE__*/
    function () {
      function LoginGuard(navCtrl, service) {
        _classCallCheck(this, LoginGuard);

        this.navCtrl = navCtrl;
        this.service = service;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var token;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.service.cargarToken();

                  case 2:
                    token = _context22.sent;

                    if (!token) {
                      _context22.next = 8;
                      break;
                    }

                    this.navCtrl.navigateRoot('/tabs/dashboard');
                    return _context22.abrupt("return", false);

                  case 8:
                    return _context22.abrupt("return", true);

                  case 9:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], LoginGuard);
    /***/
  },

  /***/
  "./src/app/guards/tutorial.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/guards/tutorial.guard.ts ***!
    \******************************************/

  /*! exports provided: TutorialGuard */

  /***/
  function srcAppGuardsTutorialGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialGuard", function () {
      return TutorialGuard;
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

    var TutorialGuard =
    /*#__PURE__*/
    function () {
      function TutorialGuard(navCtrl, service) {
        _classCallCheck(this, TutorialGuard);

        this.navCtrl = navCtrl;
        this.service = service;
      }

      _createClass(TutorialGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.service.cargarTutorial();

                  case 2:
                    this.pasar = _context23.sent;

                    if (!this.pasar) {
                      _context23.next = 9;
                      break;
                    }

                    this.navCtrl.navigateRoot(['/bateria-alimento']);
                    console.log("pasar", this.pasar);
                    return _context23.abrupt("return", true);

                  case 9:
                    console.log("pasar", this.pasar);
                    return _context23.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }]);

      return TutorialGuard;
    }();

    TutorialGuard.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    TutorialGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], TutorialGuard);
    /***/
  },

  /***/
  "./src/app/modal-info/modal-info-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modal-info/modal-info-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ModalInfoPageRoutingModule */

  /***/
  function srcAppModalInfoModalInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalInfoPageRoutingModule", function () {
      return ModalInfoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalInfoPageRoutingModule = function ModalInfoPageRoutingModule() {
      _classCallCheck(this, ModalInfoPageRoutingModule);
    };

    ModalInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})], ModalInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal-info/modal-info.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modal-info/modal-info.module.ts ***!
    \*************************************************/

  /*! exports provided: ModalInfoPageModule */

  /***/
  function srcAppModalInfoModalInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalInfoPageModule", function () {
      return ModalInfoPageModule;
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


    var _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-info-routing.module */
    "./src/app/modal-info/modal-info-routing.module.ts");
    /* harmony import */


    var _modal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-info.page */
    "./src/app/modal-info/modal-info.page.ts");

    var ModalInfoPageModule = function ModalInfoPageModule() {
      _classCallCheck(this, ModalInfoPageModule);
    };

    ModalInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPageRoutingModule"]],
      declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_6__["ModalInfoPage"]]
    })], ModalInfoPageModule);
    /***/
  },

  /***/
  "./src/app/modal-info/modal-info.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/modal-info/modal-info.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalInfoModalInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-item-divider {\n  margin-top: 0px;\n  min-height: 0.1px !important;\n}\n.itemcustom {\n  font-weight: 200;\n  opacity: 0.7px;\n}\n.cambiardiseño1:hover {\n  background-color: #f53d3d;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtaW5mby9tb2RhbC1pbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWwtaW5mby9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXG1vZGFsLWluZm9cXG1vZGFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBREVKO0FDQ0U7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QURFTjtBQ0NFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FERU4iLCJmaWxlIjoic3JjL2FwcC9tb2RhbC1pbmZvL21vZGFsLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWluLWhlaWdodDogMC4xcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW1jdXN0b20ge1xuICBmb250LXdlaWdodDogMjAwO1xuICBvcGFjaXR5OiAwLjdweDtcbn1cblxuLmNhbWJpYXJkaXNlw7FvMTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTNkM2Q7XG4gIG9wYWNpdHk6IDAuNztcbn0iLCJpb24taXRlbS1kaXZpZGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAwLjFweCFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaXRlbWN1c3RvbXtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBvcGFjaXR5OiAwLjdweDtcbiAgfVxuXG4gIC5jYW1iaWFyZGlzZcOxbzE6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzZDNkO1xuICAgICAgb3BhY2l0eTogMC43O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/modal-info/modal-info.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/modal-info/modal-info.page.ts ***!
    \***********************************************/

  /*! exports provided: ModalInfoPage */

  /***/
  function srcAppModalInfoModalInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalInfoPage", function () {
      return ModalInfoPage;
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

    var ModalInfoPage =
    /*#__PURE__*/
    function () {
      function ModalInfoPage(modalController) {
        _classCallCheck(this, ModalInfoPage);

        this.modalController = modalController;
      }

      _createClass(ModalInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.image = this.imagen;
        }
      }, {
        key: "salir",
        value: function salir() {
          this.modalController.dismiss();
        }
      }]);

      return ModalInfoPage;
    }();

    ModalInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ModalInfoPage.prototype, "imagen", void 0);
    ModalInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-info/modal-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-info.page.scss */
      "./src/app/modal-info/modal-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ModalInfoPage);
    /***/
  },

  /***/
  "./src/app/services/api-fitech.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/api-fitech.service.ts ***!
    \************************************************/

  /*! exports provided: ApiFitechService */

  /***/
  function srcAppServicesApiFitechServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiFitechService", function () {
      return ApiFitechService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;

    var ApiFitechService =
    /*#__PURE__*/
    function () {
      function ApiFitechService(http, storage) {
        _classCallCheck(this, ApiFitechService);

        this.http = http;
        this.storage = storage;
        this.token = null;
        this.examenFuerza = {
          resultado: null,
          ejercicio: null,
          resultado_2: null,
          ejercicio_2: null,
          resultado_3: null,
          ejercicio_3: null
        };
        this.bloquearexamen = {
          examen1: false,
          examen2: false,
          examen3: false
        };
        this.calentamiento = {};
        this.rutina = {};
        this.Nuevarutina = {};
        this.rutinaListadoRemplazar = {};
        this.rutinaTestCasaHombre = [{
          name: "jumping jacks",
          url: "".concat(URL, "/videos/CR/510.mp4")
        }, {
          name: "sentadillas",
          url: "".concat(URL, "/videos/TI/465.mp4")
        }, {
          name: "Push up en rodillas",
          url: "".concat(URL, "/videos/TS/421.mp4")
        }, {
          name: "Superman",
          url: "".concat(URL, "/videos/TS/437.mp4")
        }, {
          name: "Skipping alto",
          url: "".concat(URL, "/videos/CR/518.mp4")
        }, {
          name: "Sentadillas con salto y brazos extendidos",
          url: "".concat(URL, "/videos/TI/500.mp4")
        }, {
          name: "Pushups cerrados",
          url: "".concat(URL, "/videos/TS/443.mp4")
        }, {
          name: "Plancha palanca larga",
          url: "".concat(URL, "/videos/CO/568.mp4")
        }, {
          name: "Burpee mas Pushups y saltos",
          url: "".concat(URL, "/videos/CR/504.mp4")
        }, {
          name: "Zancada pliometrica alternada",
          url: "".concat(URL, "/videos/TI/495.mp4")
        }, {
          name: "Pushups mas flexion de cadera lateral",
          url: "".concat(URL, "/videos/TS/441.mp4")
        }, {
          name: "Hollows",
          url: "".concat(URL, "/videos/CO/540.mp4")
        }, {
          name: "Burpees avanzados rodillas al pechos",
          url: "".concat(URL, "/videos/CR/519.mp4")
        }, {
          name: "Pistols alternados",
          url: "".concat(URL, "/videos/TI/579.mp4")
        }, {
          name: "Pushups explosivos",
          url: "".concat(URL, "/videos/TS/439.mp4")
        }, {
          name: "Plancha palanca larga en manos",
          url: "".concat(URL, "/videos/CO/573.mp4")
        }];
        this.rutinaTestCasaMujer = [{
          name: "jumping jacks",
          url: "".concat(URL, "/videos/CR/510.mp4")
        }, {
          name: "sentadillas",
          url: "".concat(URL, "/videos/TI/465.mp4")
        }, {
          name: "Push up en rodillas",
          url: "".concat(URL, "/videos/TS/421.mp4")
        }, {
          name: "Superman",
          url: "".concat(URL, "/videos/TS/437.mp4")
        }, {
          name: "Skipping alto",
          url: "".concat(URL, "/videos/CR/518.mp4")
        }, {
          name: "Sentadillas con salto y brazos extendidos",
          url: "".concat(URL, "/videos/TI/500.mp4")
        }, {
          name: "Pushups con apoyo en rodillas",
          url: "".concat(URL, "/videos/TS/440.mp4")
        }, {
          name: "Plancha palanca larga",
          url: "".concat(URL, "/videos/CO/568.mp4")
        }, {
          name: "Burpee mas Pushups y salto",
          url: "".concat(URL, "/videos/CR/504.mp4")
        }, {
          name: "Zancada pliometrica alternada",
          url: "".concat(URL, "/videos/TI/495.mp4")
        }, {
          name: "Pushups",
          url: "".concat(URL, "/videos/TS/423.mp4")
        }, {
          name: "Hollows",
          url: "".concat(URL, "/videos/CO/540.mp4")
        }, {
          name: "Burpees avanzados rodillas al pechos",
          url: "".concat(URL, "/videos/CR/519.mp4")
        }, {
          name: "Pistols alternado",
          url: "".concat(URL, "/videos/TI/579.mp4")
        }, {
          name: "Pushups mas flexion de cadera lateral",
          url: "".concat(URL, "/videos/TS/441.mp4")
        }, {
          name: "Plancha palanca larga en manos",
          url: "".concat(URL, "/videos/CO/573.mp4")
        }];
        this.secuencia = 1;
        this.contadorRutina = 0;
        this.contador = 0;
        this.demostracionEjercicio = {
          nombre: null,
          repeticion: null,
          id: null
        };
        this._refrescarDatos = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(ApiFitechService, [{
        key: "Registrar",
        value: function Registrar(persona) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var _this4 = this;

            var token1, token2;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.storage.get('pushToken');

                  case 2:
                    token1 = _context24.sent;
                    _context24.next = 5;
                    return this.storage.get('pushIdToken');

                  case 5:
                    token2 = _context24.sent;

                    if (!(persona.password.length > 1)) {
                      _context24.next = 10;
                      break;
                    }

                    return _context24.abrupt("return", new Promise(function (resolve) {
                      var data = {
                        email: persona.correo,
                        password: persona.password,
                        password_confirmation: persona.password,
                        name: persona.nombre,
                        gender: persona.genero,
                        age: persona.edad,
                        weight: persona.peso,
                        stature: persona.estatura,
                        objective: persona.objetivo,
                        // persona.nivelActividad
                        act_physical: 2,
                        // persona.experiencia
                        training_experience: 2,
                        training_place: persona.lugarEntrenar,
                        hypertension: persona.hipertension,
                        hypotension: persona.hipotension,
                        lung_diseases: persona.enfermedadPulmonar,
                        fading: persona.desvanecimiento,
                        diabetes_insulindependent: persona.diabete,
                        chest_pains: persona.dolorPecho,
                        cardiac_pathologies: persona.patologiaCardiaca,
                        unusual_fatigue: persona.fatiga,
                        none: persona.noEnfermedad,
                        pushToken: token1,
                        pushIdToken: token2
                      };
                      console.log(data);

                      _this4.http.post("".concat(URL, "/auth/register"), data).subscribe(function (resp) {
                        // this.token =  resp['access_token']
                        console.log(resp);

                        _this4.guardarToken(resp["access_token"]);

                        _this4.guardarUsuario(resp["user"]);

                        _this4.guardarexamenFuerza(resp["power_test"]);

                        _this4.guardarexamenResistencia(resp["aerobic_test"]);

                        _this4.guardarexamenCapacidad(resp["home_test"]);

                        resolve(true);
                      }, function (err) {
                        console.log(err);
                        resolve(false);
                      });
                    }));

                  case 10:
                    return _context24.abrupt("return", new Promise(function (resolve) {
                      var data = {
                        email: persona.correo,
                        password: persona.correo,
                        password_confirmation: persona.correo,
                        name: persona.nombre,
                        gender: persona.genero,
                        age: persona.edad,
                        weight: persona.peso,
                        stature: persona.estatura,
                        objective: persona.objetivo,
                        act_physical: persona.nivelActividad,
                        training_experience: persona.experiencia,
                        training_place: persona.lugarEntrenar,
                        hypertension: persona.hipertension,
                        hypotension: persona.hipotension,
                        lung_diseases: persona.enfermedadPulmonar,
                        fading: persona.desvanecimiento,
                        diabetes_insulindependent: persona.diabete,
                        chest_pains: persona.dolorPecho,
                        cardiac_pathologies: persona.patologiaCardiaca,
                        unusual_fatigue: persona.fatiga,
                        renal_insufficiency: persona.insuficiencia_renal,
                        none: persona.noEnfermedad
                      };

                      _this4.http.post("".concat(URL, "/auth/register"), data).subscribe(function (resp) {
                        _this4.token = resp['access_token'];
                        console.log(_this4.token);
                        resolve(true);
                      }, function (err) {
                        console.log(err);
                        resolve(false);
                      });
                    }));

                  case 11:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "Login",
        value: function Login(persona) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var _this5 = this;

            var token1, token2;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.storage.get('pushToken');

                  case 2:
                    token1 = _context25.sent;
                    _context25.next = 5;
                    return this.storage.get('pushIdToken');

                  case 5:
                    token2 = _context25.sent;
                    return _context25.abrupt("return", new Promise(function (resolve) {
                      var data = {
                        email: persona.email,
                        password: persona.password,
                        pushToken: token1,
                        pushIdToken: token2
                      };

                      _this5.http.post("".concat(URL, "/auth/login"), data).subscribe(function (resp) {
                        //this.token =  resp['access_token']
                        console.log(resp["access_token"]); // ACA LOS ENVIO A GUARDAR AL STORAGE

                        _this5.guardarToken(resp["access_token"]);

                        _this5.guardarUsuario(resp["user"]);

                        _this5.guardarexamenFuerza(resp["power_test"]);

                        _this5.guardarexamenResistencia(resp["aerobic_test"]);

                        _this5.guardarexamenCapacidad(resp["home_test"]);

                        resolve(true);
                      }, function (err) {
                        console.log(err);
                        _this5.token = null;

                        _this5.storage.clear();

                        resolve(false);
                      });
                    }));

                  case 7:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
        /* MEMORIA CACHE ALMECENADO */

      }, {
        key: "guardarToken",
        value: function guardarToken(token) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    this.token = token;
                    _context26.next = 3;
                    return this.storage.set("token", token);

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "guardarFittechApp",
        value: function guardarFittechApp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.storage.set("fittech", true);

                  case 2:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "guardarUsuario",
        value: function guardarUsuario(usuario) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    this.training = usuario["training_place"];
                    this.usuario = usuario["name"];
                    this.IDusuario = usuario["id"];
                    _context28.next = 5;
                    return this.storage.set("usuario", usuario);

                  case 5:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "guardarexamenFuerza",
        value: function guardarexamenFuerza(fuerza) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return this.storage.set("examenfuerza", fuerza);

                  case 2:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "guardarexamenResistencia",
        value: function guardarexamenResistencia(resistencia) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.storage.set("examenresistencia", resistencia);

                  case 2:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "guardartutorial",
        value: function guardartutorial(valor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return this.storage.set('tutorial', valor);

                  case 2:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "guardarexamenCapacidad",
        value: function guardarexamenCapacidad(capacidad) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return this.storage.set('examencapacidad', capacidad);

                  case 2:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }, {
        key: "guardarnutricion",
        value: function guardarnutricion() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return this.storage.set('nutricion', "activado");

                  case 2:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
        /*Actualziar storgae */

      }, {
        key: "ActualizarexamenCapacidad",
        value: function ActualizarexamenCapacidad() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee34() {
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return this.storage.set("examencapacidad", "activado");

                  case 2:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "ActualizarFittechApp",
        value: function ActualizarFittechApp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee35() {
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.next = 2;
                    return this.storage.set("fittech", false);

                  case 2:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "ActualizarexamenResistencia",
        value: function ActualizarexamenResistencia() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee36() {
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    _context36.next = 2;
                    return this.storage.set("examenresistencia", "activado");

                  case 2:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }, {
        key: "ActualizarexamenFuerza",
        value: function ActualizarexamenFuerza() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee37() {
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    _context37.next = 2;
                    return this.storage.set("examenfuerza", "activado");

                  case 2:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
        /*Extraer de la memoria Cache */

      }, {
        key: "cargarToken",
        value: function cargarToken() {
          return this.storage.get("token");
        }
      }, {
        key: "cargarFittechApp",
        value: function cargarFittechApp() {
          return this.storage.get("fittech");
        }
      }, {
        key: "cargarNombreUsuario",
        value: function cargarNombreUsuario() {
          return this.storage.get("usuario");
        }
      }, {
        key: "cargarExamenResistencia",
        value: function cargarExamenResistencia() {
          return this.storage.get("examenresistencia");
        }
      }, {
        key: "cargarExamenFuerza",
        value: function cargarExamenFuerza() {
          return this.storage.get("examenfuerza");
        }
      }, {
        key: "cargarTutorial",
        value: function cargarTutorial() {
          return this.storage.get('tutorial');
        }
      }, {
        key: "cargarExamenCapacidad",
        value: function cargarExamenCapacidad() {
          return this.storage.get('examencapacidad');
        }
      }, {
        key: "cargarnutricion",
        value: function cargarnutricion() {
          return this.storage.get('nutricion');
        }
      }, {
        key: "Latidos",
        value: function Latidos(persona) {
          var _this6 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this6.token,
              "Content-Type": "application/json"
            });
            var data = {
              heart_rate: persona
            };

            _this6.http.post("".concat(URL, "/auth/heart_rate"), data, {
              headers: headers
            }).subscribe(function (resp) {
              _this6.latidocorazon = resp['User'].heart_rate;
              _this6.risk = resp['User'].risk;
              console.log("LATIDO DEL CORAZON", resp);
              resolve(true);
            });
          });
        }
      }, {
        key: "Antecedentefamiliar",
        value: function Antecedentefamiliar(persona) {
          var _this7 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer ' + _this7.token,
              'Content-Type': 'application/json'
            });
            var data = {
              cardiac_arrhythmia: persona.arritmia_corazon,
              heart_attack: persona.ataque_corazon,
              heart_operation: persona.operacion_corazon,
              congenital_heart_disease: persona.enfermedad_corazon,
              early_death: persona.muerte_prematura,
              high_blood_pressure: persona.presion_corazon,
              diabetes: persona.diabete_corazon,
              renal_insufficiency: persona.insuficiencia_renal,
              none: persona.ninguna
            };

            _this7.http.post("".concat(URL, "/auth/family_medical_record"), data, {
              headers: headers
            }).subscribe(function (resp) {
              resolve(true);
              console.log(resp);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "cinturacadera",
        value: function cinturacadera(persona) {
          var _this8 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this8.token,
              "Content-Type": "application/json"
            });
            var data = {
              min_waist: persona.min_cintura,
              max_waist: persona.max_cintura,
              hip: persona.cadera,
              neck: persona.cuello,
              right_thigh: persona.muslo_derecho,
              left_thigh: persona.muslo_izquierdo,
              right_arm: persona.brazo_derecho,
              left_arm: persona.brazo_izquierdo,
              right_calf: persona.pantorrilla_derecho,
              left_calf: persona.pantorrilla_izquierda,
              torax: persona.pecho
            };

            _this8.http.post("".concat(URL, "/auth/measurement_record"), data, {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              resolve(true);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "TestResistencia",
        value: function TestResistencia(valor) {
          var _this9 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this9.token,
              "Content-Type": "application/json"
            });
            var data = {
              distance: valor
            };

            _this9.http.post("".concat(URL, "/auth/aerobic_test"), data, {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);

              _this9.ActualizarexamenResistencia();

              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "TestFuerza",
        value: function TestFuerza() {
          var _this10 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this10.token,
              "Content-Type": "application/json"
            });
            var data = {
              result_75: _this10.examenFuerza.resultado,
              exercise: _this10.examenFuerza.ejercicio,
              result_75_2: _this10.examenFuerza.resultado_2,
              exercise_2: _this10.examenFuerza.ejercicio_2,
              result_75_3: _this10.examenFuerza.resultado_3,
              exercise_3: _this10.examenFuerza.ejercicio_3
            };

            _this10.http.post("".concat(URL, "/auth/power_test"), data, {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);

              _this10.ActualizarexamenFuerza();

              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        } //Metodo para la recolecion del test - no interactua con el servidor. (metodo logico)

      }, {
        key: "recolectarTestFuerza",
        value: function recolectarTestFuerza(fuerza, ejercicio) {
          if (ejercicio === 1) {
            this.examenFuerza.resultado = fuerza;
            this.examenFuerza.ejercicio = 1;
            this.bloquearexamen.examen1 = true;
          }

          if (ejercicio === 2) {
            this.examenFuerza.resultado_2 = fuerza;
            this.examenFuerza.ejercicio_2 = 5;
            this.bloquearexamen.examen2 = true;
          }

          if (ejercicio === 3) {
            this.examenFuerza.resultado_3 = fuerza;
            this.examenFuerza.ejercicio_3 = 2;
            this.bloquearexamen.examen3 = true;
          }

          if (ejercicio === 4) {
            this.examenFuerza.resultado_3 = fuerza;
            this.examenFuerza.ejercicio_3 = 3;
            this.bloquearexamen.examen3 = true;
          }
        }
      }, {
        key: "obtenerRutina",
        value: function obtenerRutina() {
          var _this11 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this11.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            _this11.http.get("".concat(URL, "/auth/routine"), {
              headers: headers
            }).subscribe(function (resp) {
              _this11.IDRutinaUsuario = resp["routine"];
              _this11.rutina = resp["exercises"];
              console.log(resp);

              _this11._refrescarDatos.next();

              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "pruebaRealizada",
        value: function pruebaRealizada(valor) {
          this.evaluarTest = valor;
        }
      }, {
        key: "validarEmail",
        value: function validarEmail(persona) {
          var _this12 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              "Content-Type": "application/json"
            });
            var data = {
              email: persona
            };

            _this12.http.post("".concat(URL, "/auth/email-verify"), data, {
              headers: headers
            }).subscribe(function (resp) {
              if (resp["email"] == 1) {
                resolve(true);
              } else {
                resolve(false);
              }
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "ejerciciodemostrado",
        value: function ejerciciodemostrado(nombre, repeticion, id) {
          this.demostracionEjercicio.nombre = nombre;
          this.demostracionEjercicio.repeticion = repeticion;
          this.demostracionEjercicio.id = id;
        }
      }, {
        key: "asignarNuevoEjercicio",
        value: function asignarNuevoEjercicio(id) {
          this.idListadoRemplazar = id;
        }
      }, {
        key: "cambiarEjercicio",
        value: function cambiarEjercicio() {
          var _this13 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this13.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            _this13.http.get("".concat(URL, "/auth/routine-random/").concat(_this13.IDusuario, "/").concat(_this13.IDRutinaUsuario, "/").concat(_this13.demostracionEjercicio.id, "/1"), {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              _this13.Nuevarutina = resp;
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "contadorEjercicio",
        value: function contadorEjercicio(valor) {
          this.contador += valor;
        }
      }, {
        key: "listadoEjercicioRemplazar",
        value: function listadoEjercicioRemplazar() {
          var _this14 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this14.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            _this14.http.get("".concat(URL, "/auth/exercise-available/").concat(_this14.IDusuario, "/").concat(_this14.IDRutinaUsuario, "/1"), {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              _this14.rutinaListadoRemplazar = resp;
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "listadoEjercicioRemplazarHome",
        value: function listadoEjercicioRemplazarHome() {
          var _this15 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this15.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            console.log("id del ejercicio selecionado", _this15.demostracionEjercicio.id);

            _this15.http.get("".concat(URL, "/auth/exercise-home-available/").concat(_this15.IDusuario, "/").concat(_this15.demostracionEjercicio.id, "/1"), {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              _this15.rutinaListadoRemplazar = resp;
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "cambiarListadoEjercicio",
        value: function cambiarListadoEjercicio() {
          var _this16 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this16.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            _this16.http.get("".concat(URL, "/auth/update-exercise/").concat(_this16.IDRutinaUsuario, "/").concat(_this16.demostracionEjercicio.id, "/").concat(_this16.idListadoRemplazar), {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              _this16.Nuevarutina = resp;
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "cambiarListadoEjercicioHome",
        value: function cambiarListadoEjercicioHome() {
          var _this17 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this17.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            _this17.http.get("".concat(URL, "/auth/update-exercise-home/").concat(_this17.IDRutinaUsuario, "/").concat(_this17.demostracionEjercicio.id, "/").concat(_this17.idListadoRemplazar), {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              _this17.Nuevarutina = resp;
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "asignarGenero",
        value: function asignarGenero(valor) {
          this.genero = valor;
        }
      }, {
        key: "asignarToken",
        value: function asignarToken(valor) {
          this.token = valor;
        }
      }, {
        key: "TestHome",
        value: function TestHome(valor) {
          var _this18 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this18, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee38() {
              var _this19 = this;

              var headers, data;
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      _context38.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context38.next = 3;
                      return this.storage.get("token");

                    case 3:
                      _context38.t1 = _context38.sent;
                      _context38.t2 = "Bearer " + _context38.t1;
                      _context38.t3 = {
                        Authorization: _context38.t2,
                        "Content-Type": "application/json"
                      };
                      headers = new _context38.t0(_context38.t3);
                      data = {
                        result: valor
                      };
                      this.http.post("".concat(URL, "/auth/home-test"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        _this19.ActualizarexamenCapacidad();

                        resolve(true);
                      }, function (err) {
                        resolve(false);
                      });

                    case 9:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          });
        }
      }, {
        key: "obtenerRutinaHome",
        value: function obtenerRutinaHome() {
          var _this20 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this20.token,
              "Content-Type": "application/json"
            }); //      this.http.get(`${URL}/auth/routine`,{headers})

            _this20.http.get("".concat(URL, "/auth/routine-home"), {
              headers: headers
            }).subscribe(function (resp) {
              if (resp["routine"]) {
                _this20.IDRutinaUsuario = resp["routine"];
                _this20.rutina = resp["exercises"];
                _this20.rest = resp["ratio_r"];
                _this20.ratio = resp["ratio_w"];
                console.log(resp["exercises"]);

                _this20._refrescarDatos.next();

                resolve(true);
              } else {
                resolve("examen");
              }
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "recuperarRutinaHome",
        value: function recuperarRutinaHome(token) {
          var _this21 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + token,
              "Content-Type": "application/json"
            });

            _this21.http.get("".concat(URL, "/auth/routine-home"), {
              headers: headers
            }).subscribe(function (resp) {
              if (resp["routine"]) {
                // this.rutina = resp['exercises']
                // console.log(resp)
                resolve(resp);
              }
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "getRutine",
        value: function getRutine() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + this.token,
            "Content-Type": "application/json"
          });
          return this.http.get("".concat(URL, "/auth/routine-home"), {
            headers: headers
          });
        }
      }, {
        key: "verificarLugar",
        value: function verificarLugar(valor) {
          this.verificarEntrenamiento = valor;
        }
      }, {
        key: "finalizarRutinaHome",
        value: function finalizarRutinaHome(valor) {
          var _this22 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this22.token,
              "Content-Type": "application/json"
            });
            var data = {
              calf: valor
            };

            _this22.http.post("".concat(URL, "/auth/update-routine-home"), data, {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "obtenerUsuario",
        value: function obtenerUsuario() {
          var _this23 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee39() {
              var headers;
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      _context39.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context39.next = 3;
                      return this.cargarToken();

                    case 3:
                      _context39.t1 = _context39.sent;
                      _context39.t2 = "Bearer " + _context39.t1;
                      _context39.t3 = {
                        Authorization: _context39.t2,
                        "Content-Type": "application/json"
                      };
                      headers = new _context39.t0(_context39.t3);
                      //      this.http.get(`${URL}/auth/routine`,{headers})
                      this.http.get("".concat(URL, "/auth/user"), {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(resp);
                      }, function (err) {
                        resolve(false);
                      });

                    case 8:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          });
        }
      }, {
        key: "desconectarUsuario",
        value: function desconectarUsuario() {
          this.storage.remove('token');
          this.storage.remove('usuario');
          this.storage.remove('examenresistencia');
          this.storage.remove('examenfuerza');
          this.storage.remove('examencapacidad');
        }
      }, {
        key: "obtenerCalentamiento",
        value: function obtenerCalentamiento() {
          var _this24 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer " + _this24.token,
              "Content-Type": "application/json"
            });

            _this24.http.get("".concat(URL, "/auth/exercise-heating"), {
              headers: headers
            }).subscribe(function (resp) {
              console.log(resp);
              _this24.calentamiento = resp["ejercicios Calentamiento"];
              resolve(true);
            }, function (err) {
              resolve(false);
            });
          });
        }
      }, {
        key: "contadorRutinaSumar",
        value: function contadorRutinaSumar(valor) {
          this.contadorRutina += valor;
        }
      }, {
        key: "contadorRutinaRestar",
        value: function contadorRutinaRestar(valor) {
          this.contadorRutina -= valor;
        }
      }, {
        key: "recuperarPassword",
        value: function recuperarPassword(valor) {
          var _this25 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this25, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee40() {
              var headers;
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        "Content-Type": "application/json"
                      }); // si no se envia un dato no  funciona la ruta

                      console.log("valor enviado", valor);
                      this.http.post("".concat(URL, "/auth/reset-password"), valor, {
                        headers: headers
                      }).subscribe(function (resp) {
                        if (resp["message"] === "Success") {
                          resolve(true);
                        } else {
                          resolve(false);
                        }
                      }, function (err) {
                        reject(false);
                      });

                    case 3:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          });
        }
      }, {
        key: "cambiarPassword",
        value: function cambiarPassword(data) {
          var _this26 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this26, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee41() {
              var headers;
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context41.next = 3;
                      return this.cargarToken();

                    case 3:
                      _context41.t1 = _context41.sent;
                      _context41.t2 = 'Bearer ' + _context41.t1;
                      _context41.t3 = {
                        'Authorization': _context41.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context41.t0(_context41.t3);
                      this.http.post("".concat(URL, "/auth/changepassword"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log("respuesta2", resp);
                        resolve(true);
                      }, function (err) {
                        resolve(false);
                      });

                    case 8:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          });
        }
      }, {
        key: "actualizarPerfil",
        value: function actualizarPerfil(data) {
          var _this27 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this27, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee42() {
              var headers;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context42.next = 3;
                      return this.cargarToken();

                    case 3:
                      _context42.t1 = _context42.sent;
                      _context42.t2 = 'Bearer ' + _context42.t1;
                      _context42.t3 = {
                        'Authorization': _context42.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context42.t0(_context42.t3);
                      this.http.post("".concat(URL, "/auth/update-client"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log("respuesta1", resp);
                        resolve(true);
                      }, function (err) {
                        resolve(false);
                      });

                    case 8:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          });
        }
      }, {
        key: "refrescarDatos",
        get: function get() {
          return this._refrescarDatos;
        }
      }]);

      return ApiFitechService;
    }();

    ApiFitechService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    ApiFitechService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], ApiFitechService);
    /***/
  },

  /***/
  "./src/app/services/mensajes.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/mensajes.service.ts ***!
    \**********************************************/

  /*! exports provided: MensajesService */

  /***/
  function srcAppServicesMensajesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajesService", function () {
      return MensajesService;
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

    var MensajesService =
    /*#__PURE__*/
    function () {
      function MensajesService(alertController, toastController) {
        _classCallCheck(this, MensajesService);

        this.alertController = alertController;
        this.toastController = toastController;
      }

      _createClass(MensajesService, [{
        key: "alertaInformatica",
        value: function alertaInformatica(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee43() {
            var alert;
            return regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    _context43.next = 2;
                    return this.alertController.create({
                      animated: true,
                      message: message,
                      cssClass: 'customMensaje',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'confirmButton'
                      }]
                    });

                  case 2:
                    alert = _context43.sent;
                    _context43.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "notificacionUsuario",
        value: function notificacionUsuario(message, color) {
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'middle';
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee44() {
            var toast;
            return regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.next = 2;
                    return this.toastController.create({
                      position: position,
                      color: color,
                      message: message,
                      // cssClass:'customToast',
                      duration: 2000
                    });

                  case 2:
                    toast = _context44.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this);
          }));
        }
      }, {
        key: "notificacionUsuarioFinalizar",
        value: function notificacionUsuarioFinalizar(message, color) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee45() {
            var toast;
            return regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.next = 2;
                    return this.toastController.create({
                      position: 'middle',
                      color: color,
                      message: message,
                      cssClass: 'customToast1',
                      duration: 2000
                    });

                  case 2:
                    toast = _context45.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, this);
          }));
        }
      }]);

      return MensajesService;
    }();

    MensajesService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    MensajesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], MensajesService);
    /***/
  },

  /***/
  "./src/app/services/nutricion.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/nutricion.service.ts ***!
    \***********************************************/

  /*! exports provided: NutricionService */

  /***/
  function srcAppServicesNutricionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutricionService", function () {
      return NutricionService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;

    var NutricionService =
    /*#__PURE__*/
    function () {
      function NutricionService(http, service) {
        _classCallCheck(this, NutricionService);

        this.http = http;
        this.service = service;
        this.listadocomida = {
          desayuno: null,
          almuerzo: null,
          cena: null,
          snack: null
        };
      } // nivel de grasa


      _createClass(NutricionService, [{
        key: "grease",
        value: function grease(valor) {
          var _this28 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this28, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee46() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      _context46.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context46.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context46.t1 = _context46.sent;
                      _context46.t2 = 'Bearer ' + _context46.t1;
                      _context46.t3 = {
                        'Authorization': _context46.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context46.t0(_context46.t3);
                      data = {
                        grease: valor
                      };
                      this.http.post("".concat(URL, "/auth/grease_record"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(true);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          });
        } // tipo de alimento

      }, {
        key: "updateTypeFood",
        value: function updateTypeFood(valor) {
          var _this29 = this;

          console.log("que se esta enviando a la ruta typefood", valor);
          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this29, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee47() {
              var headers;
              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      _context47.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context47.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context47.t1 = _context47.sent;
                      _context47.t2 = 'Bearer ' + _context47.t1;
                      _context47.t3 = {
                        'Authorization': _context47.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context47.t0(_context47.t3);
                      //      this.http.get(`${URL}/auth/routine`,{headers})
                      this.http.post("".concat(URL, "/auth/update-type-food"), valor, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(true);
                      }, function (err) {
                        reject(false);
                      });

                    case 8:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this);
            }));
          });
        } // comida no deseada

      }, {
        key: "foodNoDeseados",
        value: function foodNoDeseados(valor) {
          var _this30 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this30, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee48() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      _context48.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context48.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context48.t1 = _context48.sent;
                      _context48.t2 = 'Bearer ' + _context48.t1;
                      _context48.t3 = {
                        'Authorization': _context48.t2,
                        'Accept': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/json'
                      };
                      headers = new _context48.t0(_context48.t3);
                      data = {
                        foods: valor
                      };
                      this.http.post("".concat(URL, "/auth/foods-not-like"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(true);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          });
        } // listado de alimentos

      }, {
        key: "getFoods",
        value: function getFoods() {
          var _this31 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this31, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee49() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      _context49.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context49.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context49.t1 = _context49.sent;
                      _context49.t2 = 'Bearer ' + _context49.t1;
                      _context49.t3 = {
                        'Authorization': _context49.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context49.t0(_context49.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/foods"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp['Alimentos']);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          });
        } // calcular el menu del usuario

      }, {
        key: "calculate_menu",
        value: function calculate_menu() {
          var _this32 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this32, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee50() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      _context50.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context50.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context50.t1 = _context50.sent;
                      _context50.t2 = 'Bearer ' + _context50.t1;
                      _context50.t3 = {
                        'Authorization': _context50.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context50.t0(_context50.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/calculate_menu"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(true);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          });
        }
      }, {
        key: "storeMenu",
        value: function storeMenu(menu) {
          var _this33 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this33, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee51() {
              var headers;
              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      _context51.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context51.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context51.t1 = _context51.sent;
                      _context51.t2 = 'Bearer ' + _context51.t1;
                      _context51.t3 = {
                        'Authorization': _context51.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context51.t0(_context51.t3);
                      this.http.post("".concat(URL, "/auth/store-menu"), menu, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp);
                      }, function (err) {
                        reject(err);
                      });

                    case 8:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));
          });
        } //Calculos de indicadores

      }, {
        key: "indicadores",
        value: function indicadores() {
          var _this34 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this34, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee52() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      _context52.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context52.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context52.t1 = _context52.sent;
                      _context52.t2 = 'Bearer ' + _context52.t1;
                      _context52.t3 = {
                        'Authorization': _context52.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context52.t0(_context52.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/indicators"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp);
                      }, function (err) {
                        resolve(false);
                      });

                    case 9:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this);
            }));
          }).catch(function (e) {
            console.log("se ejecuta el catch", e);
            return false;
          });
        } // listado de nutriente necesario  para consumir del usuario / esto va en resumen

      }, {
        key: "getResumes",
        value: function getResumes() {
          var _this35 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this35, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee53() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context53.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context53.t1 = _context53.sent;
                      _context53.t2 = 'Bearer ' + _context53.t1;
                      _context53.t3 = {
                        'Authorization': _context53.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context53.t0(_context53.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/resume-food"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          });
        } // TRAE EL MENU DEL USUARIO DESAYUNO,ALMUERZO,CENA PARA ESCOGER

      }, {
        key: "menu",
        value: function menu(comida) {
          var _this36 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this36, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee54() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      _context54.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context54.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context54.t1 = _context54.sent;
                      _context54.t2 = 'Bearer ' + _context54.t1;
                      _context54.t3 = {
                        'Authorization': _context54.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context54.t0(_context54.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        type_food: comida
                      };
                      this.http.post("".concat(URL, "/auth/menu"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this);
            }));
          });
        } // TREA EL LISTADO DE ALIMENTOS GUARDADOS 

      }, {
        key: "ListadoComida",
        value: function ListadoComida(comida, day) {
          var _this37 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this37, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee55() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee55$(_context55) {
                while (1) {
                  switch (_context55.prev = _context55.next) {
                    case 0:
                      _context55.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context55.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context55.t1 = _context55.sent;
                      _context55.t2 = 'Bearer ' + _context55.t1;
                      _context55.t3 = {
                        'Authorization': _context55.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context55.t0(_context55.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        type_food: comida,
                        day: day
                      };
                      this.http.post("".concat(URL, "/auth/ready-food"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        // console.log(resp)
                        resolve(resp);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context55.stop();
                  }
                }
              }, _callee55, this);
            }));
          });
        } // Actualizar el LISTADO DE ALIMENTOS GUARDADOS 

      }, {
        key: "ActualizarComida",
        value: function ActualizarComida(data) {
          var _this38 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this38, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee56() {
              var headers;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context56.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context56.t1 = _context56.sent;
                      _context56.t2 = 'Bearer ' + _context56.t1;
                      _context56.t3 = {
                        'Authorization': _context56.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context56.t0(_context56.t3);
                      this.http.post("".concat(URL, "/auth/update-menu"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(resp);
                      }, function (err) {
                        reject(false);
                      });

                    case 8:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));
          });
        } // borrar el menu

      }, {
        key: "BorrarMenu",
        value: function BorrarMenu(id) {
          var _this39 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this39, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee57() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      _context57.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context57.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context57.t1 = _context57.sent;
                      _context57.t2 = 'Bearer ' + _context57.t1;
                      _context57.t3 = {
                        'Authorization': _context57.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context57.t0(_context57.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        menu_id: id
                      };
                      this.http.post("".concat(URL, "/auth/delete-menu"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(resp);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this);
            }));
          });
        } // listado de medidas

      }, {
        key: "historyMeasures",
        value: function historyMeasures() {
          var _this40 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this40, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee58() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee58$(_context58) {
                while (1) {
                  switch (_context58.prev = _context58.next) {
                    case 0:
                      _context58.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context58.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context58.t1 = _context58.sent;
                      _context58.t2 = 'Bearer ' + _context58.t1;
                      _context58.t3 = {
                        'Authorization': _context58.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context58.t0(_context58.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/progress"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);

                        if (resp['Progress'].length > 0) {
                          resolve(resp['Progress']);
                        } else {
                          resolve("vacio");
                        }
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context58.stop();
                  }
                }
              }, _callee58, this);
            }));
          });
        } // listado de indicadores

      }, {
        key: "historyIndicators",
        value: function historyIndicators() {
          var _this41 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this41, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee59() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee59$(_context59) {
                while (1) {
                  switch (_context59.prev = _context59.next) {
                    case 0:
                      _context59.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context59.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context59.t1 = _context59.sent;
                      _context59.t2 = 'Bearer ' + _context59.t1;
                      _context59.t3 = {
                        'Authorization': _context59.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context59.t0(_context59.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/progress"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);

                        if (resp['Progress_food'].length > 0) {
                          resolve(resp);
                        } else {
                          resolve("vacio");
                        }
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context59.stop();
                  }
                }
              }, _callee59, this);
            }));
          });
        } // lista de pagos

      }, {
        key: "GetPrice",
        value: function GetPrice() {
          var _this42 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this42, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee60() {
              var headers;
              return regeneratorRuntime.wrap(function _callee60$(_context60) {
                while (1) {
                  switch (_context60.prev = _context60.next) {
                    case 0:
                      _context60.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context60.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context60.t1 = _context60.sent;
                      _context60.t2 = 'Bearer ' + _context60.t1;
                      _context60.t3 = {
                        'Authorization': _context60.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context60.t0(_context60.t3);
                      this.http.get("".concat(URL, "/auth/planes"), {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(resp['Planes']);
                      }, function (err) {
                        reject(false);
                      });

                    case 8:
                    case "end":
                      return _context60.stop();
                  }
                }
              }, _callee60, this);
            }));
          });
        }
      }]);

      return NutricionService;
    }();

    NutricionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    NutricionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], NutricionService);
    /***/
  },

  /***/
  "./src/app/services/usuario.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/usuario.service.ts ***!
    \*********************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;

    var UsuarioService =
    /*#__PURE__*/
    function () {
      function UsuarioService(service, http) {
        _classCallCheck(this, UsuarioService);

        this.service = service;
        this.http = http;
        this.datosPersonales = {
          nombre: null,
          correo: null,
          genero: null,
          objetivo: null,
          nivelActividad: null,
          experiencia: null,
          lugarEntrenar: null,
          edad: null,
          estatura: null,
          peso: null,
          patologiaCardiaca: null,
          enfermedadPulmonar: null,
          hipertension: 0,
          hipotension: 0,
          desvanecimiento: 0,
          diabete: 0,
          dolorPecho: 0,
          fatiga: 0,
          noEnfermedad: 0,
          insuficiencia_renal: 0,
          password: null
        };
        this.condicionPersona = {
          latidos: null,
          arritmia_corazon: null,
          ataque_corazon: null,
          operacion_corazon: null,
          enfermedad_corazon: null,
          presion_corazon: null,
          diabete_corazon: null,
          muerte_prematura: null,
          insuficiencia_renal: null,
          ninguna: null
        };
        this.selecionTestEjercicio = {
          squat: false,
          pressbanca: false,
          legcurl: false,
          legextension: false
        };
      }

      _createClass(UsuarioService, [{
        key: "genero",
        value: function genero(valor) {
          this.datosPersonales.genero = valor;
        }
      }, {
        key: "objetivo",
        value: function objetivo(valor) {
          this.datosPersonales.objetivo = valor;
        }
      }, {
        key: "edad",
        value: function edad(valor) {
          this.datosPersonales.edad = valor;
        }
      }, {
        key: "estatura",
        value: function estatura(valor) {
          this.datosPersonales.estatura = valor;
        }
      }, {
        key: "peso",
        value: function peso(valor) {
          this.datosPersonales.peso = valor;
        }
      }, {
        key: "experiencia",
        value: function experiencia(valor) {
          this.datosPersonales.experiencia = valor;
        }
      }, {
        key: "entrenar",
        value: function entrenar(valor) {
          this.datosPersonales.lugarEntrenar = valor;
        }
      }, {
        key: "nivel",
        value: function nivel(valor) {
          this.datosPersonales.nivelActividad = valor;
        }
      }, {
        key: "enfermedades",
        value: function enfermedades(valor) {
          this.datosPersonales.patologiaCardiaca = valor.patologiaCardiaca;

          if (valor.enfermedadPulmonar == null) {
            this.datosPersonales.enfermedadPulmonar = 0;
          } else {
            this.datosPersonales.enfermedadPulmonar = valor.enfermedadPulmonar;
          }

          this.datosPersonales.hipertension = valor.hipertension;
          this.datosPersonales.hipotension = valor.hipotension;
          this.datosPersonales.desvanecimiento = valor.desvanecimiento;
          this.datosPersonales.diabete = valor.diabete;
          this.datosPersonales.dolorPecho = valor.dolorPecho;
          this.datosPersonales.insuficiencia_renal = valor.insuficiencia_renal;

          if (valor.noEnfermedad) {
            this.datosPersonales.noEnfermedad = 1;
          } else {
            this.datosPersonales.noEnfermedad = 0;
          }
        }
      }, {
        key: "redesSociales",
        value: function redesSociales(valor) {
          this.datosPersonales.nombre = valor.first_name;
          this.datosPersonales.correo = valor.email;
        }
      }, {
        key: "registrarEmail",
        value: function registrarEmail(valor) {
          this.datosPersonales.nombre = valor.nombre;
          this.datosPersonales.password = valor.contra;
          this.datosPersonales.correo = valor.email;
        }
      }, {
        key: "latidos",
        value: function latidos(valor) {
          this.condicionPersona.latidos = valor;
        }
      }, {
        key: "condicionCorazon",
        value: function condicionCorazon(valor) {
          if (valor.arritmia_corazon) {
            this.condicionPersona.arritmia_corazon = 1;
          } else {
            this.condicionPersona.arritmia_corazon = 0;
          }

          if (valor.ataque_corazon) {
            this.condicionPersona.ataque_corazon = 1;
          } else {
            this.condicionPersona.ataque_corazon = 0;
          }

          if (valor.operacion_corazon) {
            this.condicionPersona.operacion_corazon = 1;
          } else {
            this.condicionPersona.operacion_corazon = 0;
          }

          if (valor.enfermedad_corazon) {
            this.condicionPersona.enfermedad_corazon = 1;
          } else {
            this.condicionPersona.enfermedad_corazon = 0;
          }

          if (valor.presion_corazon) {
            this.condicionPersona.presion_corazon = 1;
          } else {
            this.condicionPersona.presion_corazon = 0;
          }

          if (valor.diabete_corazon) {
            this.condicionPersona.diabete_corazon = 1;
          } else {
            this.condicionPersona.diabete_corazon = 0;
          }

          if (valor.muerte_prematura) {
            this.condicionPersona.muerte_prematura = 1;
          } else {
            this.condicionPersona.muerte_prematura = 0;
          }

          if (valor.insuficiencia_renal) {
            this.condicionPersona.insuficiencia_renal = 1;
          } else {
            this.condicionPersona.insuficiencia_renal = 0;
          }

          if (valor.ninguna) {
            this.condicionPersona.ninguna = 1;
          } else {
            this.condicionPersona.ninguna = 0;
          }
        }
      }, {
        key: "TestSelecion",
        value: function TestSelecion(valor) {
          if (valor === 1) {
            this.selecionTestEjercicio.pressbanca = true;
            this.selecionTestEjercicio.legcurl = false;
            this.selecionTestEjercicio.legextension = false;
            this.selecionTestEjercicio.squat = false;
          }

          if (valor === 2) {
            this.selecionTestEjercicio.pressbanca = false;
            this.selecionTestEjercicio.legcurl = false;
            this.selecionTestEjercicio.legextension = false;
            this.selecionTestEjercicio.squat = true;
          }

          if (valor === 3) {
            this.selecionTestEjercicio.legcurl = true;
            this.selecionTestEjercicio.pressbanca = false;
            this.selecionTestEjercicio.legextension = false;
            this.selecionTestEjercicio.squat = false;
          }

          if (valor === 5) {
            this.selecionTestEjercicio.legextension = true;
          }
        }
      }, {
        key: "measurement_record",
        value: function measurement_record(record) {
          var _this43 = this;

          console.log("que datos se esta enviando ala ruta", record);
          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this43, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee61() {
              var headers;
              return regeneratorRuntime.wrap(function _callee61$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                      _context61.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context61.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context61.t1 = _context61.sent;
                      _context61.t2 = 'Bearer ' + _context61.t1;
                      _context61.t3 = {
                        'Authorization': _context61.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context61.t0(_context61.t3);
                      this.http.post("".concat(URL, "/auth/measurement_record"), record, {
                        headers: headers
                      }).subscribe(function (resp) {
                        console.log(resp);
                        resolve(true);
                      }, function (err) {
                        console.log(err);
                        reject(false);
                      });

                    case 8:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee61, this);
            }));
          }).catch(function (res) {
            console.log("ERROR");
          });
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UsuarioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //url:'http://localhost:8000/api'
      //url:'http://192.168.0.103:8000/api'
      // url:'http://valdusoft.com/fittech/api'
      url: 'https://smartbunnypruebas.com'
    };
    var firebaseConfig = {
      apiKey: "AIzaSyBa-dl3epdWx8V5TWTKHABchWdLVDKxht4",
      authDomain: "fittech-92682.firebaseapp.com",
      projectId: "fittech-92682",
      storageBucket: "fittech-92682.appspot.com",
      messagingSenderId: "1049023810628",
      appId: "1:1049023810628:web:33d23e3207714668400011"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\elmej\OneDrive\Escritorio\Ionic\fittech-front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map