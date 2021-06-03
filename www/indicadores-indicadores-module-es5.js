function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indicadores-indicadores-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/indicadores/indicadores.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/indicadores/indicadores.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndicadoresIndicadoresPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content >\n\n<ng-container>\n    <div style=\"margin-bottom: 0;\"  class=\"ion-padding ion-text-center titulo\">\n      Indicadores de salud\n    </div> \n    <ion-grid>\n      <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <p class=\"tituloindicador\">IMC  =</p>\n          <ion-label class=\"tamanoindicador\" *ngIf=\"dato\">{{dato.imc}}</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <p class=\"tituloindicador\">ICA  =</p>\n          <ion-label class=\"tamanoindicador\" *ngIf=\"dato\">{{dato.ica}}</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <p class=\"tituloindicador\">Perímetro de cintura =</p>\n          <ion-label class=\"tamanoindicador\" *ngIf=\"dato\">{{dato.Perimetro_Cintura}}</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <p class=\"tituloindicador\">TBM  =</p>\n          <ion-label class=\"tamanoindicador\" *ngIf=\"dato\">{{dato.tmb}}</ion-label>\n        </ion-item>\n      </ion-col>\n\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <p class=\"tituloindicador\">Estrategia nutricional  =</p>\n          <ion-label class=\"tamanoindicador\" *ngIf=\"dato\">{{dato.Estrategia_N}}</ion-label>\n        </ion-item>\n      </ion-col>\n\n      </ion-row>\n    </ion-grid>\n    <ion-grid class=\"ion-padding\">\n      <ion-row >\n        <ion-col  size=\"12\">   \n\n          <ion-card  style=\"\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          --background:#EF4044;\n          color:white;\n          \">\n        <h2 style=\"margin: 10px; text-align: center;\" (click)=\"goTo()\">\n          <b> SIGUIENTE</b></h2> \n      </ion-card>\n\n\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>   \n</ng-container >\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/indicadores/indicadores-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/indicadores/indicadores-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: IndicadoresPageRoutingModule */

  /***/
  function srcAppIndicadoresIndicadoresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicadoresPageRoutingModule", function () {
      return IndicadoresPageRoutingModule;
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


    var _indicadores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./indicadores.page */
    "./src/app/indicadores/indicadores.page.ts");

    var routes = [{
      path: '',
      component: _indicadores_page__WEBPACK_IMPORTED_MODULE_3__["IndicadoresPage"]
    }];

    var IndicadoresPageRoutingModule = function IndicadoresPageRoutingModule() {
      _classCallCheck(this, IndicadoresPageRoutingModule);
    };

    IndicadoresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndicadoresPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/indicadores/indicadores.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/indicadores/indicadores.module.ts ***!
    \***************************************************/

  /*! exports provided: IndicadoresPageModule */

  /***/
  function srcAppIndicadoresIndicadoresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicadoresPageModule", function () {
      return IndicadoresPageModule;
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


    var _indicadores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./indicadores-routing.module */
    "./src/app/indicadores/indicadores-routing.module.ts");
    /* harmony import */


    var _indicadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./indicadores.page */
    "./src/app/indicadores/indicadores.page.ts");

    var IndicadoresPageModule = function IndicadoresPageModule() {
      _classCallCheck(this, IndicadoresPageModule);
    };

    IndicadoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _indicadores_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndicadoresPageRoutingModule"]],
      declarations: [_indicadores_page__WEBPACK_IMPORTED_MODULE_6__["IndicadoresPage"]]
    })], IndicadoresPageModule);
    /***/
  },

  /***/
  "./src/app/indicadores/indicadores.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/indicadores/indicadores.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndicadoresIndicadoresPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 20px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  color: red;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: black;\n}\nion-item {\n  --background: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\n.tituloindicador {\n  font-size: 22px;\n  font-weight: 600;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.tamanoindicador {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaWNhZG9yZXMvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxpbmRpY2Fkb3Jlc1xcaW5kaWNhZG9yZXMucGFnZS5zY3NzIiwic3JjL2FwcC9pbmRpY2Fkb3Jlcy9pbmRpY2Fkb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNDTDtBRElBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDREQ7QURHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtBQ0FKO0FERUE7RUFDSSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NOO0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURBQTs7R0FBQTtBQUlBO0VBQ0ksNEJBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0FDRUo7QURBQTtFQUNJLFVBQUE7QUNHSjtBRERBO0VBQ0ksa0JBQUE7QUNJSjtBRERBO0VBQ0ksY0FBQTtBQ0lKO0FERkE7RUFDSSxtQkFBQTtBQ0tKO0FEREE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUQ7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Ysb0JBQUE7RUFDRSxtQkFBQTtBQ0lKO0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lKO0FEREU7RUFDRSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9pbmRpY2Fkb3Jlcy9pbmRpY2Fkb3Jlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gXG4gICAgaDJ7XG4gICAgIGZvbnQtc2l6ZTogMTdweCFpbXBvcnRhbnQ7XG4gICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIFxuICAgfVxuXG4uYXVtZW50YXJ0aXR1bG97XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAudGl0dWxvMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn0gKi9cblxuLnJpZ2h0Ym9yZGVye1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG9wZXF1ZSB7XG4gICAgb3BhY2l0eTogMC40O1xufSAgXG4udGl0dWxvcGVxdWUyIHtcbiAgICBjb2xvcjogcmVkO1xufSAgIFxuaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAtLWNvbG9yOiBibGFjaztcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuaW9uLXNlbGVjdHtcbiB3aWR0aDogMTAwJTtcbiBmb250LXNpemU6IDIzcHg7XG4gZm9udC13ZWlnaHQ6MjAwO1xufVxuXG4udGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAudGl0dWxvaW5kaWNhZG9ye1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuICAudGFtYW5vaW5kaWNhZG9ye1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC8vIGlvbi1pdGVtIHtcbiAgLy8gICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMTQ1M2QpO1xuICAvLyAgIC0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcbiAgLy8gfVxuICAvLyAuaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsLmlvbi1jb2xvciB7ICBcbiAgLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgLy8gfSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYXVtZW50YXJ0aXR1bG8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAtLWNvbG9yOndoaXRlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50aXR1bG8yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLyogZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufSAqL1xuLnJpZ2h0Ym9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuaW9uLWlucHV0IHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsb3BlcXVlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4udGl0dWxvcGVxdWUyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGl0dWxvaW5kaWNhZG9yIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGFtYW5vaW5kaWNhZG9yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/indicadores/indicadores.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/indicadores/indicadores.page.ts ***!
    \*************************************************/

  /*! exports provided: IndicadoresPage */

  /***/
  function srcAppIndicadoresIndicadoresPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicadoresPage", function () {
      return IndicadoresPage;
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


    var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/nutricion.service */
    "./src/app/services/nutricion.service.ts");

    var IndicadoresPage =
    /*#__PURE__*/
    function () {
      function IndicadoresPage(ruta, service, loadingController) {
        _classCallCheck(this, IndicadoresPage);

        this.ruta = ruta;
        this.service = service;
        this.loadingController = loadingController;
        this.detectar = true;
      }

      _createClass(IndicadoresPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getIndicators();
        }
      }, {
        key: "getIndicators",
        value: function getIndicators() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valor;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.presentLoading();
                    _context.next = 3;
                    return this.service.indicadores();

                  case 3:
                    valor = _context.sent;
                    this.loadingController.dismiss();

                    if (valor == false) {
                      this.detectar = false;
                    } else {
                      this.dato = valor;
                      console.log("BLAH BLAH BLAH BLAH", this.dato.tmb);
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "atras",
        value: function atras() {
          this.ruta.pop();
        }
      }, {
        key: "goTo",
        value: function goTo() {
          this.ruta.navigateForward(['/bateria-alimento']);
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
      }]);

      return IndicadoresPage;
    }();

    IndicadoresPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    IndicadoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-indicadores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./indicadores.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/indicadores/indicadores.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./indicadores.page.scss */
      "./src/app/indicadores/indicadores.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], IndicadoresPage);
    /***/
  }
}]);
//# sourceMappingURL=indicadores-indicadores-module-es5.js.map