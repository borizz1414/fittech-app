function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alimentos-seleccion-alimentos-seleccion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-seleccion/alimentos-seleccion.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-seleccion/alimentos-seleccion.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlimentosSeleccionAlimentosSeleccionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/bateria-alimento\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img src=\"assets/img/logo-app.png\" class=\"imagenmodificada\">    \n      <!-- Tutorial -->\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{dataRecibida}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <img [src]=\"foods\" alt=\"\">\n\n  <ion-item>\n    <div class=\"ion-padding ion-text-center titulo\">\n      Total a consumir\n    </div>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"contenedorMenu\">\n      <div class=\"contenedorMenuItem\" [ngClass]=\"{'customtarjeta': activar == 0 ? true : false}\"\n        (click)=\"selecionartarjeta(1)\"\n        style=\"border-bottom-left-radius: 12px;border-top-left-radius: 12px;background:black;\">\n        <p style=\"color: white; margin-top: 0;\"> <br> Carbohidratos</p>\n        <ion-progress-bar class=\"carboP\" *ngIf=\"datosUsuario.carbo\" [value]=\"progressBar(carbo, datosUsuario.carbo)\">\n        </ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.carbo\">\n          {{carbo.toFixed()}}/{{datosUsuario.carbo.toFixed()}}gr</p>\n      </div>\n      <div class=\"contenedorMenuItem\" [ngClass]=\"{'customtarjeta': activar == 1 ? true : false}\"\n        (click)=\"selecionartarjeta(0)\" style=\"  background: #EF4044;\">\n        <p style=\"color: white;  margin-top: 0;\"> <br> Proteinas</p>\n        <ion-progress-bar class=\"proteP\" *ngIf=\"datosUsuario.protein\"\n          [value]=\"progressBar(protein, datosUsuario.protein)\"></ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.protein\">\n          {{protein.toFixed()}}/{{datosUsuario.protein.toFixed()}}gr</p>\n      </div>\n      <div class=\"contenedorMenuItem\" [ngClass]=\"{'customtarjeta': activar == 2 ? true : false}\"\n        (click)=\"selecionartarjeta(2)\"\n        style=\"border-bottom-right-radius: 12px;border-top-right-radius: 12px;background: grey;\">\n        <p style=\"color: white;  margin-top: 0;\"> <br> Grasas</p>\n        <ion-progress-bar class=\"grasaP\" *ngIf=\"datosUsuario.grease\" [value]=\"progressBar(grasa, datosUsuario.grease)\">\n        </ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.grease\">\n          {{grasa.toFixed()}}/{{datosUsuario.grease.toFixed()}}gr</p>\n      </div>\n    </div>\n  </ion-item>\n\n\n  <ion-grid class=\"ion-text-center\">\n    <ion-row *ngIf=\"!info2\">\n      <ion-col class=\"raya\" size=\"6\" *ngFor=\"let alimento of alimentos | filter:typefoods; let i=index\">\n        <!-- cabeza -->\n        <ion-label class=\"ion-text-wrap\" style=\"font-weight: 600; text-transform: uppercase; display: flex;\n        justify-content: center; font-size: 15px;\"> {{alimento.name}}\n\n          <ion-icon name=\"alert-circle\" (click)=\"info(alimento)\" style=\"font-size: 1.25rem;\"></ion-icon>\n\n\n        </ion-label>\n        <!-- input cuerpo -->\n        <div *ngIf=\"alimento.convertion !==1\">\n          <ion-input placeholder=\"0\" [(ngModel)]=\"alimento.cantidad\" (ionChange)=\"calculateStats();\" clearOnEdit\n            inputmode=\"numeric\" maxlength=\"3\" style=\"margin: 0 auto;text-align: center;\"></ion-input>\n          <!-- footer boton UNIDAD-->\n          <ion-segment [(ngModel)]=\"alimento.measurement\" (ionChange)=\"alimento.cantidad = null\" mode=\"ios\"\n            style=\"margin: 0 auto;\" [(value)]=\"alimento.measurement\">\n            <ion-segment-button value=\"unidad\">\n              <ion-label class=\"titulopeque\">{{alimento.type_measure}}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"casera\">\n              <ion-label class=\"titulopeque\">{{alimento.measure}}</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n        <!-- footer boton CASERA-->\n        <!-- input cuerpo -->\n        <div *ngIf=\"alimento.convertion ===1\">\n          <ion-input placeholder=\"0\" [(ngModel)]=\"alimento.cantidad\" [(ngModel)]=\"alimento.measurement\"\n            (ionChange)=\"calculateStats();\" clearOnEdit inputmode=\"numeric\" maxlength=\"3\"\n            style=\"margin: 0 auto;text-align: center;\"></ion-input>\n          <!-- footer boton UNIDAD-->\n          <ion-segment *ngIf=\"alimento.convertion === 1\" (ionChange)=\"alimento.cantidad = null\" mode=\"ios\"\n            style=\"margin: 0 auto;\" value=\"unidad\">\n            <ion-segment-button value=\"unidad\">\n              <ion-label class=\"titulopeque\">{{alimento.type_measure}}</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <div class=\"animated fadeInLeft\" *ngIf=\"info2\">\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row animated fadeInLeft\">\n          <div class=\"container2\">\n            <h5 class=\"titulo2\">Ayuda\n              <ion-icon style=\"color: black;\" class=\"ayudad2\" name=\"close-outline\" (click)=\"cerrar()\"></ion-icon>\n            </h5>\n            <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\"><b>\n                Alimento : </b> <span style=\"text-transform:uppercase;\"> {{selectedFood.name}} </span> </p>\n            <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\">\n              <b> Medida casera: </b>\n              <span style=\"text-transform:uppercase;\" *ngIf=\"selectedFood.measure\">{{selectedFood.measure}} =\n                {{selectedFood.eq}}\n                {{selectedFood.type_measure}} </span>\n              <span style=\"text-transform:uppercase;\" *ngIf=\"!selectedFood.measure\">{{selectedFood.measure}} =\n                {{selectedFood.eq}}\n                {{selectedFood.type_measure}} </span> </p>\n            <!-- <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\"><b> proteínas: </b>\n                    {{proteinas2}}\n                  </p>\n                  <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\"><b> Grasas: </b>\n                    {{grasas2}}\n                  </p> -->\n          </div>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-grid>\n\n\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-card style=\"  \n  background: #EF4044;\n  color: white;\n  width: 286px; \n  border-radius: 10px;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-family: 'Open Sans';\" (click)=\"guardarMenu()\">\n    <h2 style=\"text-align: center; margin: 10px;\">\n      <b> Guardar </b>\n    </h2>\n  </ion-card>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/alimentos-seleccion/alimentos-seleccion-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/alimentos-seleccion/alimentos-seleccion-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AlimentosSeleccionPageRoutingModule */

  /***/
  function srcAppAlimentosSeleccionAlimentosSeleccionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlimentosSeleccionPageRoutingModule", function () {
      return AlimentosSeleccionPageRoutingModule;
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


    var _alimentos_seleccion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alimentos-seleccion.page */
    "./src/app/alimentos-seleccion/alimentos-seleccion.page.ts");

    var routes = [{
      path: '',
      component: _alimentos_seleccion_page__WEBPACK_IMPORTED_MODULE_3__["AlimentosSeleccionPage"]
    }];

    var AlimentosSeleccionPageRoutingModule = function AlimentosSeleccionPageRoutingModule() {
      _classCallCheck(this, AlimentosSeleccionPageRoutingModule);
    };

    AlimentosSeleccionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlimentosSeleccionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/alimentos-seleccion/alimentos-seleccion.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/alimentos-seleccion/alimentos-seleccion.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AlimentosSeleccionPageModule */

  /***/
  function srcAppAlimentosSeleccionAlimentosSeleccionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlimentosSeleccionPageModule", function () {
      return AlimentosSeleccionPageModule;
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


    var _alimentos_seleccion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alimentos-seleccion-routing.module */
    "./src/app/alimentos-seleccion/alimentos-seleccion-routing.module.ts");
    /* harmony import */


    var _alimentos_seleccion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alimentos-seleccion.page */
    "./src/app/alimentos-seleccion/alimentos-seleccion.page.ts");
    /* harmony import */


    var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");

    var AlimentosSeleccionPageModule = function AlimentosSeleccionPageModule() {
      _classCallCheck(this, AlimentosSeleccionPageModule);
    };

    AlimentosSeleccionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alimentos_seleccion_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlimentosSeleccionPageRoutingModule"], _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_alimentos_seleccion_page__WEBPACK_IMPORTED_MODULE_6__["AlimentosSeleccionPage"]]
    })], AlimentosSeleccionPageModule);
    /***/
  },

  /***/
  "./src/app/alimentos-seleccion/alimentos-seleccion.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/alimentos-seleccion/alimentos-seleccion.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlimentosSeleccionAlimentosSeleccionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  font-size: 2rem;\n  margin: 1rem;\n  text-align: center;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n  color: white;\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.customtarjeta {\n  -webkit-filter: brightness(1);\n          filter: brightness(1);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.titulo2 {\n  margin: 0;\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container2 {\n  width: 100%;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white ;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxpbWVudG9zLXNlbGVjY2lvbi9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGFsaW1lbnRvcy1zZWxlY2Npb25cXGFsaW1lbnRvcy1zZWxlY2Npb24ucGFnZS5zY3NzIiwic3JjL2FwcC9hbGltZW50b3Mtc2VsZWNjaW9uL2FsaW1lbnRvcy1zZWxlY2Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDQUY7O0FETUE7RUFFRSxtQkFBQTtVQUFBLE9BQUE7RUFFRCxxQkFBQTtFQUVDLGtCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNORjs7QURTQTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Qsb0NBQUE7VUFBQSw0QkFBQTtBQ05EOztBRDZCQTtFQUNDO0lBQ0MsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLHNDQUFBO0VDMUJBO0VENkJEO0lBQ0MsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLG9DQUFBO0VDM0JBO0VEOEJEO0lBQ0MsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLG9DQUFBO0VDNUJBO0FBQ0Y7O0FEY0E7RUFDQztJQUNDLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQ0FBQTtFQzFCQTtFRDZCRDtJQUNDLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxvQ0FBQTtFQzNCQTtFRDhCRDtJQUNDLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQ0FBQTtFQzVCQTtBQUNGOztBRGdDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQzlCSjs7QURpQ0E7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM5QkY7O0FEaUNBO0VBQ0UsV0FBQTtBQzlCRjs7QURtQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ2hDRjs7QURvQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FDakNGOztBRG1DQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUNoQ0Y7O0FEa0NBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQy9CRjs7QURpQ0E7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0FDOUJGOztBRGlDQTtFQUNFLCtCQUFBO0FDOUJGOztBRGlDQTtFQUNFLHVCQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvYWxpbWVudG9zLXNlbGVjY2lvbi9hbGltZW50b3Mtc2VsZWNjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlbm1vZGlmaWNhZGF7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tYnV0dG9ue1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbmVkb3JNZW51e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0MDQ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMDkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4vLyBvcmlnaW5hbFxuLmNvbnRlbmVkb3JNZW51SXRlbXtcbiAgLy8gaGFjZXJsbyB0b2RvIGRlbCBtaXNtbyB0YW1hw7FvXG4gIGZsZXg6IDE7IFxuICAvLyBlc3BhY2lvIGVudHJlIGFtYm9zIGl0ZW1zXG4gLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICAvLyBjZW50cmFyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC4zcztcbn1cblxuLmN1c3RvbXRhcmpldGF7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMSl7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMil7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMyl7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuXG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcblx0fVxuXG5cdDcwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcblx0fVxufVxuXG5cbi50aXR1bG97XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0dWxvMntcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbmlvbi1wcm9ncmVzcy1iYXJ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbi5jYXJib1B7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnByb3RlUHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgO1xufVxuLmdyYXNhUHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29tcGxldGV7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4ucmF5YTpudGgtY2hpbGQob2RkKXtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuaW9uLWl0ZW17XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufSIsIi5pbWFnZW5tb2RpZmljYWRhIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yTWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW5lZG9yTWVudUl0ZW0ge1xuICBmbGV4OiAxO1xuICAvKiAgbWFyZ2luOiAwIDEwcHg7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG5cbi5jdXN0b210YXJqZXRhIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxufVxuLnRpdHVsbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50aXR1bG8yIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmJvUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucHJvdGVQIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgO1xufVxuXG4uZ3Jhc2FQIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb21wbGV0ZSB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4ucmF5YTpudGgtY2hpbGQob2RkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/alimentos-seleccion/alimentos-seleccion.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/alimentos-seleccion/alimentos-seleccion.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AlimentosSeleccionPage */

  /***/
  function srcAppAlimentosSeleccionAlimentosSeleccionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlimentosSeleccionPage", function () {
      return AlimentosSeleccionPage;
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


    var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/nutricion.service */
    "./src/app/services/nutricion.service.ts");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AlimentosSeleccionPage =
    /*#__PURE__*/
    function () {
      function AlimentosSeleccionPage(capturar, service, utilities, alertController, navCtrl) {
        _classCallCheck(this, AlimentosSeleccionPage);

        this.capturar = capturar;
        this.service = service;
        this.utilities = utilities;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.alimentos = [];
        this.alimentosAyer = [];
        this.datosUsuario = [];
        this.alimentos2 = [];
        this.carbo = 0;
        this.protein = 0;
        this.grasa = 0;
        this.typefoods = 1;
        this.measurement = "gr";
        this.activar = 0;
        this.selectedFood = [];
      }

      _createClass(AlimentosSeleccionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //  parametros del id
          this.dataRecibida = this.capturar.snapshot.paramMap.get("id");

          switch (this.dataRecibida) {
            case "Desayuno":
              this.getFoods(0);
              this.comprobarMenu(0);
              this.foods = "./assets/img/desayuno-grande.jpg";
              break;

            case "Almuerzo":
              this.getFoods(2);
              this.comprobarMenu(2);
              this.foods = "./assets/img/almuerzo-grande.jpg";
              break;

            case "Snack":
              this.getFoods(1);
              this.comprobarMenu(1);
              this.foods = "./assets/img/snack-grande.jpg";
              break;

            default:
              this.getFoods(3);
              this.comprobarMenu(3);
              this.foods = "./assets/img/cena-grande.jpg";
              break;
          }
        }
      }, {
        key: "getFoods",
        value: function getFoods(comida) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valor;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
                    console.log("fecha de hoy", this.today);
                    _context.next = 4;
                    return this.service.menu(comida);

                  case 4:
                    valor = _context.sent;

                    if (valor == false) {
                      this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error", "danger");
                    } else {
                      console.log(valor);
                      this.alimentos = valor["Foods"];
                      this.alimentos.forEach(function (element) {
                        element["cantidad"] = null;

                        if (element.measure == null) {
                          element["measurement"] = "casera";
                          element["convertion"] = 1;
                        } else {
                          element["measurement"] = "unidad";
                          element["convertion"] = 0;
                        }
                      });
                      this.datosUsuario = valor["Menu"];
                      this.totalCarbo = this.datosUsuario.carbo;
                      this.totalgrease = this.datosUsuario.grease;
                      this.totalprotein = this.datosUsuario.protein;
                    }

                    console.log("valor de la comida", this.alimentos);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calculateStats",
        value: function calculateStats() {
          var _this = this;

          this.carbo = 0;
          this.grasa = 0;
          this.protein = 0;
          this.alimentos.forEach(function (element) {
            if (element.cantidad > 0) {
              if (element.measurement === "casera") {
                console.log(element);
                console.log("medida casera");
                /*               this.carbo += element.carbo*element.cantidad;
                this.grasa += element.greases*element.cantidad;
                this.protein += element.protein*element.cantidad; */

                _this.carbo += _this.convertion(element.cant, element.carbo, element.cantidad * element.eq);
                _this.grasa += _this.convertion(element.cant, element.greases, element.cantidad * element.eq);
                _this.protein += _this.convertion(element.cant, element.protein, element.cantidad * element.eq);
              } else {
                _this.carbo += _this.convertion(element.cant, element.carbo, element.cantidad);
                _this.grasa += _this.convertion(element.cant, element.greases, element.cantidad);
                _this.protein += _this.convertion(element.cant, element.protein, element.cantidad);
                console.log(element);
                console.log("Aplicar la regla de 3");
              }
            }
          });
        }
      }, {
        key: "calcularunidaIndividual",
        value: function calcularunidaIndividual(nombre, eq1, alimento) {
          this.carbo2 = 0;
          this.grasas2 = 0;
          this.proteinas2 = 0;
          this.selectedFood = alimento;

          if (eq1 == null) {
            return;
          } else {
            this.nombre2 = nombre;
            this.eq2 = eq1;
            this.info2 = !this.info2;
          } // if(unidad !== 'unidad'){
          //   console.log('medida casera')
          //   this.nombre2 = nombre
          //   this.carbo2 += this.convertion(cant1, carbo1, cantidad1*eq1)
          //   this.grasas2 += this.convertion(cant1, grasa1, cantidad1*eq1)
          //   this.proteinas2 += this.convertion(cant1, proteina1, cantidad1*eq1)
          //   console.log("total casera", this.carbo2, this.grasas2 , this.proteinas2)
          //   this.info2 = !this.info2;
          // }else{
          //   this.nombre2 = nombre
          //   this.carbo2  += this.convertion(cant1, carbo1, cantidad1)
          //   this.grasas2  += this.convertion(cant1, grasa1, cantidad1)
          //   this.proteinas2 += this.convertion(cant1, proteina1, cantidad1)
          //   console.log("total unidad", this.carbo2, this.grasas2 , this.proteinas2)
          //   this.info2 = !this.info2;
          // }

        }
      }, {
        key: "convertion",
        value: function convertion(a, b, c) {
          //A es el valor unitario
          //B es el equivalente en grasa/proteina/carbo de ese valor unitario
          //C es la incognita a encontrar
          var x;
          x = b * c / a;
          return x;
        }
      }, {
        key: "progressBar",
        value: function progressBar(data, total) {
          if (data * 100 / total / 100 >= 1) {
            return 1;
          } else {
            return data * 100 / total / 100;
          }
        }
      }, {
        key: "guardarMenu",
        value: function guardarMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var menu, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    menu = {
                      day: this.today,
                      type_food: this.datosUsuario.type_food,
                      total_proteins: this.protein,
                      total_greases: this.grasa,
                      total_carbos: this.carbo,
                      total_calories: 0,
                      foods: []
                    };
                    this.alimentos.forEach(function (element) {
                      if (element.cantidad > 0) {
                        menu.total_calories += element.calories;

                        if (element.measurement == "unidad") {
                          //Unidad en gramos, ml, kg etc.
                          var food = [element.id, element.cantidad, 0];
                          menu.foods.push(food);
                        } else {
                          //Valor unitario casero.
                          if (element.measure) {
                            var _food = [element.id, element.cantidad, 1];
                            menu.foods.push(_food);
                          } else {
                            var _food2 = [element.id, element.cantidad, 1];
                            menu.foods.push(_food2);
                          }
                        }
                      }
                    });

                    if (!(this.carbo > this.datosUsuario.carbo || this.grasa > this.datosUsuario.grease || this.protein > this.datosUsuario.protein)) {
                      _context2.next = 10;
                      break;
                    }

                    _context2.next = 5;
                    return this.alertController.create({
                      message: "<h2>Los valores seleccionados exceden los requerimientos según tus objetivos, estar muy por encima puede alejarte de ellos<br><br>¿Deseas continuar?</h2>",
                      cssClass: "customMensaje1",
                      buttons: [{
                        text: "Volver",
                        role: "cancel",
                        cssClass: "cancelButton",
                        handler: function handler(blah) {
                          return;
                        }
                      }, {
                        text: "Siguiente",
                        cssClass: "confirmButton",
                        handler: function handler() {
                          if (!menu.foods.length) {
                            _this2.utilities.alertaInformatica("Debe seleccionar un alimento");
                          } else {
                            _this2.service.storeMenu(menu).then(function (res) {
                              console.log(res);

                              _this2.utilities.notificacionUsuario(_this2.dataRecibida + " guardado", "dark");

                              _this2.navCtrl.navigateRoot("/bateria-alimento");
                            }).catch(function (err) {
                              _this2.utilities.alertaInformatica("Error al guardar " + _this2.dataRecibida);
                            });
                          }
                        }
                      }]
                    });

                  case 5:
                    alert = _context2.sent;
                    _context2.next = 8;
                    return alert.present();

                  case 8:
                    _context2.next = 11;
                    break;

                  case 10:
                    // evitar guardar vacio
                    if (!menu.foods.length) {
                      this.utilities.alertaInformatica("Debe seleccionar un alimento");
                    } else {
                      console.log(menu);
                      this.service.storeMenu(menu).then(function (res) {
                        console.log(res);

                        _this2.utilities.notificacionUsuario(_this2.dataRecibida + " guardado", "dark");

                        _this2.navCtrl.navigateRoot("/bateria-alimento");
                      }).catch(function (err) {
                        _this2.utilities.alertaInformatica("Error al guardar " + _this2.dataRecibida);
                      });
                    }

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "selecionartarjeta",
        value: function selecionartarjeta(tipo) {
          switch (tipo) {
            case 0:
              this.activar = 1;
              this.typefoods = 0;
              break;

            case 1:
              this.activar = 0;
              this.typefoods = 1;
              break;

            case 2:
              this.activar = 2;
              this.typefoods = 2;
              break;

            default:
              break;
          }
        }
      }, {
        key: "calculador",
        value: function calculador() {}
      }, {
        key: "change",
        value: function change(index) {
          this.alimentos[index].cantidad = 0;
        }
      }, {
        key: "comprobarMenu",
        value: function comprobarMenu(comida) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var yesterday, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    yesterday = new Date(Date.now() - 86400000).toJSON().slice(0, 10).replace(/-/g, "/");
                    console.log("fecha de ayer", yesterday);
                    _context3.next = 4;
                    return this.service.ListadoComida(comida, yesterday);

                  case 4:
                    data = _context3.sent;

                    if (!(data == false || data["menu"] == null)) {
                      _context3.next = 7;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 7:
                    this.alimentosAyer = data;
                    this.alerta(comida);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // mensaje de reanudar

      }, {
        key: "alerta",
        value: function alerta(mensaje) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: "Deseas cargar el men\xFA anterior",
                      cssClass: "customMensaje1",
                      buttons: [{
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "cancelButton",
                        handler: function handler(blah) {
                          return;
                        }
                      }, {
                        text: "Confirmar",
                        cssClass: "confirmButton",
                        handler: function handler() {
                          // mensaje confirmacion
                          _this3.MenuAnterior();
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // cargar menu anterior

      }, {
        key: "MenuAnterior",
        value: function MenuAnterior() {
          var _this4 = this;

          var menu = {
            day: this.today,
            type_food: this.alimentosAyer.menu.type_food,
            total_proteins: this.alimentosAyer.menu.total_proteins,
            total_greases: this.alimentosAyer.menu.total_greases,
            total_carbos: this.alimentosAyer.menu.total_carbos,
            total_calories: this.alimentosAyer.menu.total_calories,
            foods: []
          };
          this.alimentosAyer.menu.menu_food.forEach(function (element) {
            var food = [element.food_id, parseInt(element.quantity), "gr"];
            menu.foods.push(food);
          });
          this.service.storeMenu(menu).then(function (res) {
            console.log(res);

            _this4.utilities.alertaInformatica(_this4.dataRecibida + " Guardado");

            _this4.navCtrl.navigateRoot("/bateria-alimento");
          }).catch(function (err) {
            _this4.utilities.alertaInformatica("Error al guardar " + _this4.dataRecibida);
          });
        }
      }, {
        key: "info",
        value: function info(alimento) {
          this.calcularunidaIndividual(alimento.measurement, alimento.name, alimento);
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.info2 = false;
        }
      }]);

      return AlimentosSeleccionPage;
    }();

    AlimentosSeleccionPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"]
      }, {
        type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    AlimentosSeleccionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-alimentos-seleccion",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alimentos-seleccion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-seleccion/alimentos-seleccion.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alimentos-seleccion.page.scss */
      "./src/app/alimentos-seleccion/alimentos-seleccion.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], AlimentosSeleccionPage);
    /***/
  }
}]);
//# sourceMappingURL=alimentos-seleccion-alimentos-seleccion-module-es5.js.map