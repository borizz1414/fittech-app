function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<!-- Logo incluido ante no estaba -->\n\n<ion-content class=\"animated fadeIn delay-1s\">\n  <!-- BIENVENIDO ARRIBA / ALINEADO -->\n    <h1 style=\"padding-left: 1.5rem;\"><b>Hola,  {{Bienvenido}} </b></h1>\n    <h4 style=\"padding-left: 1.5rem;\" *ngIf=\"week.routine_ready_week == 1\">Has realizado  <b style=\"color: red;\">{{week['routine_ready_week'] || 0}}</b> sesión de entrenamiento esta semana </h4>\n    <h4 style=\"padding-left: 1.5rem;\" *ngIf=\"week.routine_ready_week > 1 || week.routine_ready_week == 0\">Has realizado  <b style=\"color: red;\">{{week['routine_ready_week'] }}</b> sesiones de entrenamiento esta semana </h4>\n\n  <!-- EXAMEN -->\n  <!-- <div *ngIf=\"ExamenCliente === 0\">\n    <ion-grid id=\"tablaexamen\">\n      <ion-row >\n        <h4 class=\"ion-padding-horizontal\">Completa los <b>test ahora!</b> </h4>\n        <ion-col  size=\"6\" id=\"fuerza\">   \n          <div  class=\"ion-padding-vertical\" (click)=\"Fuerza()\" >\n            <div class=\"centered\">Test de Fuerza</div>\n            <img class=\"bor\" src=\"assets/img/test-fuerza2.png\"/>\n          </div>   \n        </ion-col>\n        <ion-col  size=\"6\"  id=\"resistencia\">   \n          <div  class=\"ion-padding-vertical\" (click)=\"Resistencia()\">\n            <div class=\"centered\">Test de Resistencia</div>\n            <img class=\"bor\" src=\"assets/img/test-resistencia2.png\" />\n          </div>   \n        </ion-col>\n      </ion-row>\n    </ion-grid>   \n  </div>  -->\n\n  <div *ngIf=\"ExamenCliente === 2\" id=\"ocultar\">\n    <!-- <h1 class=\"ion-padding ion-text-center\" id=\"capacidad\"><b>Debes realizar el test para poder empezar tu entrenamiento</b></h1> -->\n    <ion-grid *ngIf=\"!capacidad\">\n        <ion-row>        \n          <ion-col  size=\"12\">   \n            <!-- <h4 class=\"ion-padding-horizontal\" style=\"color: red;\">Empieza <b>Aqui</b> </h4>\n            <img class=\"bor\" src=\"assets/img/imagen-mujer-test1.png\"/>\n            <ion-button shape=\"round\" color=\"dark\" class=\"centered2\" (click)=\"Capacidad()\">Hacer el test</ion-button>  -->\n            <div style=\"position: relative; width: auto; height: auto;\">\n              <ion-card style=\"   \n              background: #EF4044;\n              color: white;\n              width: 170px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            margin:  0 auto;\"\n              (click)=\"Capacidad()\">\n            <h6 style=\"text-align: center; margin: 6px;\">\n              <span><b>Empieza Aqui</b> </span>\n              <span style=\"margin-left: 10px;\"><ion-icon style=\"position: absolute; top: .5rem;\"  name=\"arrow-down-outline\" color=\"dark\"></ion-icon></span>\n            </h6>  \n              </ion-card>\n              <img class=\"bor\" src=\"assets/img/imagen-mujer-test2.jpg\"/>\n              <ion-button shape=\"round\" color=\"dark\" class=\"centered3 vibrate-1\" (click)=\"Capacidad()\">Hacer el test</ion-button> \n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n  </div>\n  \n  <!-- TARJETAS -->\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">   \n\n        <h4 class=\"ion-padding-horizontal\">Tu <b>entrenamiento</b> de hoy</h4>\n          <img  src=\"assets/img/rutina2.png\"  class=\"ejercicio bor\"/>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\" (click)=\"rutinas()\">Ver  entrenamiento</ion-button>\n      </ion-col>\n\n      <ion-col size=\"12\"> \n      <hr>  \n        <h4 class=\"ion-padding-horizontal\">Tu plan <b>nutricional</b></h4>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\" (click)=\"nutricion()\">Ver plan</ion-button>\n          <img  src=\"assets/img/comidas.png\" class=\"ejercicio bor\"/>\n      </ion-col>\n\n      <ion-col size=\"12\"> \n      <hr>  \n        <h4 class=\"ion-padding-horizontal\">Tu <b>progreso</b></h4>\n          <ion-button shape=\"round\" color=\"dark\" class=\"centered2\" (click)=\"progreso()\">Ver progreso</ion-button>\n          <img  src=\"assets/img/graficas.png\" class=\"ejercicio bor\" />\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>  \n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n{\nfont-family: 'Roboto', sans-serif;  \n}\n*/\n/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.vibrate-1 {\n  -webkit-animation: jello-horizontal 1.5s infinite both;\n  animation: jello-horizontal 1.5s infinite both;\n}\n@-webkit-keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n/*fin logo*/\n.ejercicio {\n  max-width: 100%;\n  height: auto;\n}\n.evaluacion {\n  width: 100%;\n  height: auto !important;\n}\n.ocultar {\n  display: none;\n}\n.centered {\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.centered2 {\n  opacity: 0.7;\n  text-align: center;\n  color: white;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.centered3 {\n  opacity: 0.7;\n  text-align: center;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 42%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n@media screen and (max-width: 600px) {\n  .centered3 {\n    left: 29.5%;\n  }\n}\n.ion-padding-horizontal {\n  margin-top: 0px;\n}\n.ion-padding {\n  padding-bottom: 0px;\n}\n.ion-padding-vertical {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nimg.bor {\n  border-radius: 20px;\n}\nhr {\n  border-bottom: 1px solid #c2c2c2;\n  margin-top: 0px;\n  margin-bottom: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7Q0FBQTtBQVlBLE9BQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1JGO0FEV0E7RUFDRSxzREFBQTtFQUNPLDhDQUFBO0FDUlQ7QURXQztFQUNDO0lBQ0UsbUNBQUE7SUFDUSwyQkFBQTtFQ1JWO0VEVUE7SUFDRSx5Q0FBQTtJQUNRLGlDQUFBO0VDUlY7RURVQTtJQUNFLHlDQUFBO0lBQ1EsaUNBQUE7RUNSVjtFRFVBO0lBQ0UseUNBQUE7SUFDUSxpQ0FBQTtFQ1JWO0VEVUE7SUFDRSx5Q0FBQTtJQUNRLGlDQUFBO0VDUlY7RURVQTtJQUNFLHlDQUFBO0lBQ1EsaUNBQUE7RUNSVjtFRFVBO0lBQ0UsbUNBQUE7SUFDUSwyQkFBQTtFQ1JWO0FBQ0Y7QURVQTtFQUNFO0lBQ0UsbUNBQUE7SUFDUSwyQkFBQTtFQ1JWO0VEVUE7SUFDRSx5Q0FBQTtJQUNRLGlDQUFBO0VDUlY7RURVQTtJQUNFLHlDQUFBO0lBQ1EsaUNBQUE7RUNSVjtFRFVBO0lBQ0UseUNBQUE7SUFDUSxpQ0FBQTtFQ1JWO0VEVUE7SUFDRSx5Q0FBQTtJQUNRLGlDQUFBO0VDUlY7RURVQTtJQUNFLHlDQUFBO0lBQ1EsaUNBQUE7RUNSVjtFRFVBO0lBQ0UsbUNBQUE7SUFDUSwyQkFBQTtFQ1JWO0FBQ0Y7QURnQkE7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEaUJBLFdBQUE7QUFVQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDdkJGO0FEMEJBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsYUFBQTtBQ3ZCRjtBRDJCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDeEJGO0FEMkJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDeEJGO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFJQSx3Q0FBQTtVQUFBLGdDQUFBO0FDMUJGO0FEekhFO0VBeUlGO0lBUUksV0FBQTtFQ3BCRjtBQUNGO0FENEJBO0VBQ0ksZUFBQTtBQ3pCSjtBRDJCQTtFQUNJLG1CQUFBO0FDeEJKO0FEMEJBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQ3hCSjtBRDRCQTtFQUNJLG1CQUFBO0FDekJKO0FEMkJBO0VBRUksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUN6QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8qXG57XG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7ICBcbn1cbiovXG5cbkBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpICB7XG4gICAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKmxvZ28qL1xuLmxvZ297XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLnZpYnJhdGUtMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBqZWxsby1ob3Jpem9udGFsIDEuNXMgaW5maW5pdGUgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGplbGxvLWhvcml6b250YWwgMS41cyBpbmZpbml0ZSBib3RoO1xufVxuXG4gQC13ZWJraXQta2V5ZnJhbWVzIGplbGxvLWhvcml6b250YWwge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gIH1cbiAgNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgfVxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGplbGxvLWhvcml6b250YWwge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gIH1cbiAgNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgfVxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5cblxuXG5cblxuXG4uY2FiZXplcmF7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qZmluIGxvZ28qL1xuXG5cblxuXG5cblxuXG5cblxuLmVqZXJjaWNpb3tcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ldmFsdWFjaW9ue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcbn1cblxuLm9jdWx0YXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLmNlbnRlcmVkIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jZW50ZXJlZDJ7XG4gIG9wYWNpdHk6IDAuNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uY2VudGVyZWQze1xuICBvcGFjaXR5OiAwLjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA0MiU7XG4gIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICBsZWZ0OiAyOS41JTtcbiAgfVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG5cblxuXG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsIHtcblxuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxufVxuXG5pbWcuYm9yIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuaHJ7XG5cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MyYzJjMjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcblxufVxuIiwiLypcbntcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgIFxufVxuKi9cbi8qbG9nbyovXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLnZpYnJhdGUtMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBqZWxsby1ob3Jpem9udGFsIDEuNXMgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBqZWxsby1ob3Jpem9udGFsIDEuNXMgaW5maW5pdGUgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGplbGxvLWhvcml6b250YWwge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xuICB9XG4gIDY1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xuICB9XG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBqZWxsby1ob3Jpem9udGFsIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcbiAgfVxuICA2NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgfVxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbn1cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qZmluIGxvZ28qL1xuLmVqZXJjaWNpbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZXZhbHVhY2lvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm9jdWx0YXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2VudGVyZWQge1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNlbnRlcmVkMiB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jZW50ZXJlZDMge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA0MiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNlbnRlcmVkMyB7XG4gICAgbGVmdDogMjkuNSU7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmltZy5ib3Ige1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzJjMmMyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/mensajes.service */
    "./src/app/services/mensajes.service.ts");

    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(usuarioservicio, apiService, ruta, notificacion, alertController, loadingController) {
        _classCallCheck(this, DashboardPage);

        this.usuarioservicio = usuarioservicio;
        this.apiService = apiService;
        this.ruta = ruta;
        this.notificacion = notificacion;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.week = [];
      }

      _createClass(DashboardPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var token;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // esperar
                    this.presentLoading();
                    /* Este paso sere restructurado mas adelante */

                    _context.next = 3;
                    return this.apiService.cargarToken();

                  case 3:
                    token = _context.sent;
                    this.apiService.asignarToken(token);
                    /* Este paso sere restructurado mas adelante */

                    _context.next = 7;
                    return this.apiService.obtenerUsuario();

                  case 7:
                    this.week = _context.sent;
                    _context.next = 10;
                    return this.apiService.cargarExamenCapacidad();

                  case 10:
                    this.capacidad = _context.sent;
                    // fin de cargar
                    this.loadingController.dismiss();

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var valor, comprobar, comprobados;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.apiService.cargarNombreUsuario();

                  case 2:
                    valor = _context2.sent;

                    // SACAR DE LA APP NO ES VALIDO
                    // if(valor.heart_rate === 0){
                    //   this.apiService.desconectarUsuario()
                    //   this.presentAlert()
                    //   this.ruta.navigateRoot(['/'])
                    // }
                    if (valor.risk > 1) {
                      this.apiService.desconectarUsuario();
                      this.presentAlert2();
                      this.ruta.navigateRoot(['/']);
                    } // ACA LLAMAS AL METODO DESPUES QUE SE CARGA EL TOKEN


                    comprobar = this.apiService.usuario;
                    this.Bienvenido = comprobar ? this.apiService.usuario : valor['name'];
                    comprobados = this.apiService.usuario;
                    this.ExamenCliente = comprobados ? this.apiService.training : valor['training_place'];

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "Fuerza",
        value: function Fuerza() {
          this.ruta.navigateForward('test-fuerza-info');
        }
      }, {
        key: "Resistencia",
        value: function Resistencia() {
          this.ruta.navigateForward('test-resistencia');
        }
      }, {
        key: "Capacidad",
        value: function Capacidad() {
          this.ruta.navigateForward('test-capacidad-info');
        }
      }, {
        key: "rutinas",
        value: function rutinas() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var valor, comprobados, validar;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.apiService.cargarNombreUsuario();

                  case 2:
                    valor = _context3.sent;
                    comprobados = this.apiService.usuario;
                    this.ExamenCliente = comprobados ? this.apiService.training : valor['training_place'];
                    /*arreglar como la de home*/
                    // if(this.ExamenCliente === 0){
                    //   const validar = await this.apiService.obtenerRutina() 
                    //   if(validar){
                    //     this.apiService.verificarLugar(this.ExamenCliente)
                    //     this.ruta.navigateForward('entrenamientos')
                    //   }else{
                    //     this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
                    //   }
                    // }

                    if (!(this.ExamenCliente === 2)) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 8;
                    return this.apiService.obtenerRutinaHome();

                  case 8:
                    validar = _context3.sent;
                    console.log(validar);

                    if (validar == true) {
                      this.apiService.verificarLugar(this.ExamenCliente);
                      this.ruta.navigateForward('entrenamientos');
                    }

                    if (validar == false) {
                      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión", "danger");
                    }

                    if (validar === "examen") {
                      this.notificacion.notificacionUsuario("Debes realizar el test para poder empezar tu entrenamiento", "danger");
                    }

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "nutricion",
        value: function nutricion() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var validar, nutricion, comprobar;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.apiService.obtenerRutinaHome();

                  case 2:
                    validar = _context4.sent;
                    _context4.next = 5;
                    return this.apiService.cargarnutricion();

                  case 5:
                    nutricion = _context4.sent;
                    _context4.next = 8;
                    return this.apiService.obtenerUsuario();

                  case 8:
                    comprobar = _context4.sent;

                    if (!(validar == true)) {
                      _context4.next = 17;
                      break;
                    }

                    if (!(nutricion === 'activado' || comprobar['food_measures'] !== null)) {
                      _context4.next = 15;
                      break;
                    }

                    this.ruta.navigateForward('/tutorial-alimentacion');
                    return _context4.abrupt("return");

                  case 15:
                    this.ruta.navigateForward('/actividad');
                    return _context4.abrupt("return");

                  case 17:
                    if (validar == false) {
                      this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión", "danger");
                    }

                    if (validar === "examen") {
                      this.notificacion.notificacionUsuario("Debes realizar el test para poder empezar tu plan nutricional", "danger");
                    }

                  case 19:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "progreso",
        value: function progreso() {
          this.ruta.navigateForward('progreso');
        } // mensaje del corazon

      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Fittech',
                      cssClass: 'customMensaje',
                      message: 'Lo sentimos, lo más que queremos es ayudarte, pero no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'confirmButton'
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // mensaje de riesgo

      }, {
        key: "presentAlert2",
        value: function presentAlert2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Fittech',
                      cssClass: 'customMensaje',
                      message: 'Lo sentimos, aunque tú frecuencia cardíaca este bien tienes un riesgo alto y no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'confirmButton'
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // cargar

      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var loading;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.create({
                      cssClass: 'custom-loading'
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map