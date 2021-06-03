function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seriedepreguntas-form-medico-form-medico-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/form-medico/form-medico.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/form-medico/form-medico.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeriedepreguntasFormMedicoFormMedicoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border animated fadeIn delay-1s\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Paso 3 de 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeInRight delay-1s\">\n \n  <h2>Tu historial médico</h2>\n  <div class=\"ion-text-center\">\n    <ion-button color=\"danger\">\n      <ion-icon name=\"analytics-outline\" class=\"iconSize\" ></ion-icon>\n    </ion-button>\n  </div>\n\n  <div class=\"ion-text-center\">\n    <p style=\"opacity: 0.7px;\"> Presentas alguna de estas patologias</p>\n  </div>\n\n  <ion-list lines=\"none\">\n\n    <ion-item>\n      <ion-label>No presento ninguna</ion-label>\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hipertension</ion-label>\n      <ion-toggle slot=\"start\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Hipotension</ion-label>\n      <ion-toggle slot=\"start\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Desvanecimiento</ion-label>\n      <ion-toggle slot=\"start\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Diabetes insulinodependiente</ion-label>\n      <ion-toggle slot=\"start\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dolores en el pecho</ion-label>\n      <ion-toggle slot=\"start\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Fatiga insual en actividades</ion-label>\n      <ion-toggle slot=\"start\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Patologia cardiacas</ion-label>\n      <ion-select interface=\"action-sheet\" cancel-text=\"salir\">\n        <ion-select-option [value]=\"1\">Aritmias</ion-select-option>\n        <ion-select-option [value]=\"1\">Taquicardia</ion-select-option>\n        <ion-select-option [value]=\"1\">Insuficiencia cardiaca</ion-select-option>\n        <ion-select-option [value]=\"1\">Infartos</ion-select-option>\n        <ion-select-option [value]=\"1\">Soplo en el corazon</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"margen-inferior\">\n      <ion-label>Enfermedades pulmonares</ion-label>\n      <ion-select interface=\"action-sheet\" \n      name=\"enfermedadPulmonar\"  cancel-text=\"salir\">\n        <ion-select-option [value]=\"1\">Influenza</ion-select-option>\n        <ion-select-option [value]=\"1\">Asma</ion-select-option>\n        <ion-select-option [value]=\"1\">Bronquiti</ion-select-option>\n        <ion-select-option [value]=\"1\">Hipertension pulmonar</ion-select-option>\n        <ion-select-option [value]=\"1\">Enfermedad pulmonar obstructiva cronica</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" (click)=\"atras()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button color=\"danger\" (click)=\"avanzar()\" [disabled]=\"habilitar\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/seriedepreguntas/form-medico/form-medico-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/seriedepreguntas/form-medico/form-medico-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: FormMedicoPageRoutingModule */

  /***/
  function srcAppSeriedepreguntasFormMedicoFormMedicoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormMedicoPageRoutingModule", function () {
      return FormMedicoPageRoutingModule;
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


    var _form_medico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-medico.page */
    "./src/app/seriedepreguntas/form-medico/form-medico.page.ts");

    var routes = [{
      path: '',
      component: _form_medico_page__WEBPACK_IMPORTED_MODULE_3__["FormMedicoPage"]
    }];

    var FormMedicoPageRoutingModule = function FormMedicoPageRoutingModule() {
      _classCallCheck(this, FormMedicoPageRoutingModule);
    };

    FormMedicoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormMedicoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/seriedepreguntas/form-medico/form-medico.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/seriedepreguntas/form-medico/form-medico.module.ts ***!
    \********************************************************************/

  /*! exports provided: FormMedicoPageModule */

  /***/
  function srcAppSeriedepreguntasFormMedicoFormMedicoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormMedicoPageModule", function () {
      return FormMedicoPageModule;
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


    var _form_medico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-medico-routing.module */
    "./src/app/seriedepreguntas/form-medico/form-medico-routing.module.ts");
    /* harmony import */


    var _form_medico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-medico.page */
    "./src/app/seriedepreguntas/form-medico/form-medico.page.ts");

    var FormMedicoPageModule = function FormMedicoPageModule() {
      _classCallCheck(this, FormMedicoPageModule);
    };

    FormMedicoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_medico_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormMedicoPageRoutingModule"]],
      declarations: [_form_medico_page__WEBPACK_IMPORTED_MODULE_6__["FormMedicoPage"]]
    })], FormMedicoPageModule);
    /***/
  },

  /***/
  "./src/app/seriedepreguntas/form-medico/form-medico.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/seriedepreguntas/form-medico/form-medico.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeriedepreguntasFormMedicoFormMedicoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nh2 {\n  opacity: 0.7;\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.iconSize {\n  font-size: 25px;\n}\n\nion-list {\n  padding: 0px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n}\n\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VyaWVkZXByZWd1bnRhcy9mb3JtLW1lZGljby9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHNlcmllZGVwcmVndW50YXNcXGZvcm0tbWVkaWNvXFxmb3JtLW1lZGljby5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlcmllZGVwcmVndW50YXMvZm9ybS1tZWRpY28vZm9ybS1tZWRpY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdFO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURTQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDTko7O0FEU0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUNBLDRCQUFBO0VDTk47RURRRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLHdCQUFBO0VDTk47QUFDRjs7QURRQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0lBRUEsNEJBQUE7RUNOTjtFRFFFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBRUEsd0JBQUE7RUNOTjtBQUNGOztBRFFBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvc2VyaWVkZXByZWd1bnRhcy9mb3JtLW1lZGljby9mb3JtLW1lZGljby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG5cbiBcbmgye1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmljb25TaXplIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICBpb24tbGlzdHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG5cblxuXG5cblxuXG4uYW5pbWFjaW9ue1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGhcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKVxuICAgIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KVxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgICB9XG59XG4uZmFkZUluUmlnaHR7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDtcbiAgICBhbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodFxufSIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaDIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaWNvblNpemUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmFuaW1hY2lvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbi5mYWRlSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/seriedepreguntas/form-medico/form-medico.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/seriedepreguntas/form-medico/form-medico.page.ts ***!
    \******************************************************************/

  /*! exports provided: FormMedicoPage */

  /***/
  function srcAppSeriedepreguntasFormMedicoFormMedicoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormMedicoPage", function () {
      return FormMedicoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormMedicoPage =
    /*#__PURE__*/
    function () {
      function FormMedicoPage() {
        _classCallCheck(this, FormMedicoPage);

        this.slideOpts = {
          slidesPerView: 1,
          spaceBetween: 0.2
        };
        this.habilitar = false;
      }

      _createClass(FormMedicoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "avanzar",
        value: function avanzar() {}
      }, {
        key: "atras",
        value: function atras() {}
      }]);

      return FormMedicoPage;
    }();

    FormMedicoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-medico',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-medico.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seriedepreguntas/form-medico/form-medico.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-medico.page.scss */
      "./src/app/seriedepreguntas/form-medico/form-medico.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormMedicoPage);
    /***/
  }
}]);
//# sourceMappingURL=seriedepreguntas-form-medico-form-medico-module-es5.js.map