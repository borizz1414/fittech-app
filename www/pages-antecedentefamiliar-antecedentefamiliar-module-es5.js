function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-antecedentefamiliar-antecedentefamiliar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAntecedentefamiliarAntecedentefamiliarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border animated fadeIn delay-1s\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\" class=\"animated fadeIn delay-1s\">\n\n  <div class=\"contenedor\">\n     \n      <div class=\"letra\">\n        ¿Alguno de tus familiares de primer grado (Padres, hermanos o hijos) ha sufrido las enfermedades o afecciones siguientes?\n      </div>\n\n\n      <ion-grid class=\"my-grid animated fadeIn delay-2s\">\n      <ion-row class=\"parent-row\">\n        <ion-col  size=\"12\">   \n          <ion-list>\n            <ion-list-header>(Marcar en caso afirmativo)</ion-list-header>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"ninguna\" \n              (ionChange)=\"historialcorazon('none')\"  [(ngModel)]=\"condicionPersona.ninguna\"></ion-toggle>\n              <ion-label>Ninguna de las siguientes</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>Arritmia cardiaca</ion-label>\n              <ion-toggle color=\"dark\"  slot=\"start\" name=\"arritmia_corazon\" \n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.arritmia_corazon\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\"  slot=\"start\" name=\"ataque_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.ataque_corazon\"></ion-toggle>\n              <ion-label>Ataque al corazón</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"operacion_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.operacion_corazon\"></ion-toggle>\n              <ion-label>Operacion de corazón</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"enfermedad_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.enfermedad_corazon\"></ion-toggle>\n              <ion-label>Enfermedad cardiaca congenita</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"presion_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.presion_corazon\"></ion-toggle>\n              <ion-label>Presion arterial alta</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"diabete_corazon\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.diabete_corazon\"></ion-toggle>\n              <ion-label>Diabetes</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-toggle color=\"dark\" slot=\"start\" name=\"muerte_prematura\"\n              (ionChange)=\"historialcorazon('option')\" [(ngModel)]=\"condicionPersona.muerte_prematura\"></ion-toggle>\n              <ion-label style=\"font-size: 14px;\">Muerte prematura antes de los 50 años</ion-label>\n            </ion-item>\n\n          </ion-list>\n            \n          \n        </ion-col>\n \n   <!--      <ion-col size=\"12\">      \n          <ion-card class=\"color-tarjeta\"  [disabled]=\"habilitar\">\n            <h2>Continuar</h2>\n          </ion-card>\n        </ion-col> -->\n     \n      </ion-row>\n      </ion-grid>      \n  </div>\n\n\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/antecedentefamiliar/antecedentefamiliar-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/antecedentefamiliar/antecedentefamiliar-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: AntecedentefamiliarPageRoutingModule */

  /***/
  function srcAppPagesAntecedentefamiliarAntecedentefamiliarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AntecedentefamiliarPageRoutingModule", function () {
      return AntecedentefamiliarPageRoutingModule;
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


    var _antecedentefamiliar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./antecedentefamiliar.page */
    "./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.ts");

    var routes = [{
      path: '',
      component: _antecedentefamiliar_page__WEBPACK_IMPORTED_MODULE_3__["AntecedentefamiliarPage"]
    }];

    var AntecedentefamiliarPageRoutingModule = function AntecedentefamiliarPageRoutingModule() {
      _classCallCheck(this, AntecedentefamiliarPageRoutingModule);
    };

    AntecedentefamiliarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AntecedentefamiliarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/antecedentefamiliar/antecedentefamiliar.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/antecedentefamiliar/antecedentefamiliar.module.ts ***!
    \*************************************************************************/

  /*! exports provided: AntecedentefamiliarPageModule */

  /***/
  function srcAppPagesAntecedentefamiliarAntecedentefamiliarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AntecedentefamiliarPageModule", function () {
      return AntecedentefamiliarPageModule;
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


    var _antecedentefamiliar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./antecedentefamiliar-routing.module */
    "./src/app/pages/antecedentefamiliar/antecedentefamiliar-routing.module.ts");
    /* harmony import */


    var _antecedentefamiliar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./antecedentefamiliar.page */
    "./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.ts");

    var AntecedentefamiliarPageModule = function AntecedentefamiliarPageModule() {
      _classCallCheck(this, AntecedentefamiliarPageModule);
    };

    AntecedentefamiliarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _antecedentefamiliar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AntecedentefamiliarPageRoutingModule"]],
      declarations: [_antecedentefamiliar_page__WEBPACK_IMPORTED_MODULE_6__["AntecedentefamiliarPage"]]
    })], AntecedentefamiliarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAntecedentefamiliarAntecedentefamiliarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-datos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 80%;*/\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 25px;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.imagen {\n  width: 130px;\n  height: 130px;\n  border-radius: 5px;\n}\n\n.tarjeta {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.letra {\n  padding-left: 35px;\n  padding-right: 35px;\n  font-size: 18px;\n  text-align: justify;\n  opacity: 0.7;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.mensaje {\n  font-size: 11px;\n  opacity: 0.5;\n  text-align: center;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW50ZWNlZGVudGVmYW1pbGlhci9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxhbnRlY2VkZW50ZWZhbWlsaWFyXFxhbnRlY2VkZW50ZWZhbWlsaWFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW50ZWNlZGVudGVmYW1pbGlhci9hbnRlY2VkZW50ZWZhbWlsaWFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFRTtFQUdHLHNCQUFBO0FDQ0w7O0FERUU7RUFDRSxxQkFBQTtFQUNBOzs7O3dCQUFBO0FDS0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7QUNDSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FETUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0U7RUFDSSw2QkFBQTtBQ0pOOztBRE9FO0VBQ0UsdUJBQUE7QUNKSjs7QURNQTtFQUNJLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNISjs7QURNQztFQUNHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUM7RUFDRSxjQUFBO0VBQ0MsVUFBQTtBQ0hKOztBRE1DO0VBQ0Msd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRDs7QURNQTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtBQ0hEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW50ZWNlZGVudGVmYW1pbGlhci9hbnRlY2VkZW50ZWZhbWlsaWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG4gIH1cbiAgXG4gICp7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZjZmNmYztcbiAgICAvKlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlOyovXG4gIH1cbiAgXG4gIGlvbi1pbnB1dHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGJveC1zaGFkb3c6IDNweCA3cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgfVxuXG5cbiAgLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cbiAgXG4gIC5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY29udGVuZWRvcntcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiBcbiAgLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiBcblxuLmltYWdlbntcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXJqZXRhe1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuXG4gIGlvbi1jb2x7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xuICB9XG5cbiAgLm15LWdyaWQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuIH1cbi5wYXJlbnQtcm93IHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiB9XG5cbiAubGV0cmF7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgb3BhY2l0eTogMC43O1xuIH1cblxuIGlvbi1jYXJke1xuICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuIGlvbi1jYXJkOmhvdmVye1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tZW5zYWple1xuIGZvbnQtc2l6ZTogMTFweDtcbiBvcGFjaXR5OiAwLjU7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sb3ItdGFyamV0YXtcbiBjb2xvcjogd2hpdGU7XG4gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIC8qXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1hZ2VuLWRhdG9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAlOyovXG59XG5cbmlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXJqZXRhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5sZXRyYSB7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVuc2FqZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgb3BhY2l0eTogMC41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2xvci10YXJqZXRhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.ts ***!
    \***********************************************************************/

  /*! exports provided: AntecedentefamiliarPage */

  /***/
  function srcAppPagesAntecedentefamiliarAntecedentefamiliarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AntecedentefamiliarPage", function () {
      return AntecedentefamiliarPage;
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
    /* harmony import */


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AntecedentefamiliarPage =
    /*#__PURE__*/
    function () {
      function AntecedentefamiliarPage(ruta, cdRef, usuarioservicio, ApiService, loadingController) {
        _classCallCheck(this, AntecedentefamiliarPage);

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
          renal_insufficiency: false,
          ninguna: false
        };
        this.habilitar = true;
      }

      _createClass(AntecedentefamiliarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "avanzar",
        value: function avanzar() {
          if (!this.condicionPersona.arritmia_corazon && !this.condicionPersona.ataque_corazon && !this.condicionPersona.diabete_corazon && !this.condicionPersona.enfermedad_corazon && !this.condicionPersona.muerte_prematura && !this.condicionPersona.ninguna && !this.condicionPersona.operacion_corazon && !this.condicionPersona.presion_corazon) {
            this.habilitar = false;
          } else {
            this.usuarioservicio.condicionCorazon(this.condicionPersona);
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
            this.condicionPersona.renal_insufficiency = false;

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
            var valido;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //this.ruta.navigateRoot(['/relacioncadera'])
                    this.presentLoading();
                    _context.next = 3;
                    return this.ApiService.Antecedentefamiliar(this.usuarioservicio.condicionPersona);

                  case 3:
                    valido = _context.sent;

                    if (!valido) {
                      _context.next = 9;
                      break;
                    }

                    this.loadingController.dismiss();
                    /*   this.ruta.navigateRoot('tabs/dashboard') */

                    this.ruta.navigateRoot(['/registrar-info']);
                    _context.next = 10;
                    break;

                  case 9:
                    return _context.abrupt("return");

                  case 10:
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

      return AntecedentefamiliarPage;
    }();

    AntecedentefamiliarPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AntecedentefamiliarPage.prototype, "cambiarPantalla", void 0);
    AntecedentefamiliarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-antecedentefamiliar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./antecedentefamiliar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./antecedentefamiliar.page.scss */
      "./src/app/pages/antecedentefamiliar/antecedentefamiliar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], AntecedentefamiliarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-antecedentefamiliar-antecedentefamiliar-module-es5.js.map