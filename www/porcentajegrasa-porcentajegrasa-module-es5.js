function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["porcentajegrasa-porcentajegrasa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/porcentajegrasa/porcentajegrasa.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/porcentajegrasa/porcentajegrasa.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPorcentajegrasaPorcentajegrasaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"devolver()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n<ion-progress-bar color=\"danger\" [value]=\"progressBar()\"></ion-progress-bar>\n\n<ion-content>\n  <div  class=\"ion-padding ion-text-center titulo\">\n    Déjanos conocer un estimado de tu porcentaje graso \n  </div> \n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n\n       \n          <ion-slides (ionSlideDidChange)=\"carrusel()\"  [options]=\"slideOpts\" #slide class=\"animated fadeIn delay-1s\">\n            <ion-fab vertical=\"center\"  horizontal=\"end\" slot=\"fixed\" >\n              <ion-fab-button color=\"dark\" (click)=\"siguiente()\" size=\"small\">\n                <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n            <ion-fab vertical=\"center\"  horizontal=\"start\" slot=\"fixed\" >\n              <ion-fab-button color=\"dark\" (click)=\"atras()\" size=\"small\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n            <ng-container *ngIf=\"genero == 1\">\n                <ion-slide>\n                  <img src=\"assets/img/3-7.jpg\"  [ngClass]=\"{'border': cambiarborder == 1 }\"/>      \n                </ion-slide>\n                <ion-slide>\n                  <img src=\"assets/img/8-10.jpg\" [ngClass]=\"{'border': cambiarborder == 2}\" />\n                </ion-slide>\n                <ion-slide>\n                  <img src=\"assets/img/11-13.jpg\" [ngClass]=\"{'border': cambiarborder == 3}\" />\n                </ion-slide>\n                <ion-slide>\n              <img src=\"assets/img/14-16.jpg\"    [ngClass]=\"{'border': cambiarborder == 4}\"/>\n                </ion-slide>\n                <ion-slide>\n              <img src=\"assets/img/17-24.jpg\" [ngClass]=\"{'border': cambiarborder == 5}\"/>\n              \n                </ion-slide>\n                <ion-slide>\n              <img src=\"assets/img/25-30.jpg\" [ngClass]=\"{'border': cambiarborder == 6}\"/>\n\n                </ion-slide>\n                <ion-slide>\n              <img src=\"assets/img/31-40.jpg\" [ngClass]=\"{'border': cambiarborder == 7}\"/>\n              \n                </ion-slide>\n                <ion-slide>\n                <img src=\"assets/img/+40.jpg\" [ngClass]=\"{'border': cambiarborder == 8}\"/>\n                \n                </ion-slide>\n            </ng-container>\n            <ng-container *ngIf=\"genero == 0\">\n              <ion-slide>\n                <img src=\"assets/img/6-9w.jpg\" [ngClass]=\"{'border': cambiarborder == 1 }\"/>      \n                  </ion-slide>\n                  <ion-slide>\n                <img src=\"assets/img/9-12w.jpg\" [ngClass]=\"{'border': cambiarborder == 2 }\"/>\n                  </ion-slide>\n                  <ion-slide>\n                <img src=\"assets/img/13-15w.jpg\" [ngClass]=\"{'border': cambiarborder == 3 }\"/>\n                  </ion-slide>\n                  <ion-slide>\n                <img src=\"assets/img/16-20w.jpg\" [ngClass]=\"{'border': cambiarborder == 4 }\"/>\n\n                  </ion-slide>\n                  <ion-slide>\n                    <img src=\"assets/img/21-25w.jpg\" [ngClass]=\"{'border': cambiarborder == 5 }\"/>\n      \n                  </ion-slide>\n                  <ion-slide>\n                <img src=\"assets/img/26-30w.jpg\" [ngClass]=\"{'border': cambiarborder == 6 }\"/>\n\n                  </ion-slide>\n                  <ion-slide>\n                <img src=\"assets/img/31-35w.jpg\" [ngClass]=\"{'border': cambiarborder == 7 }\"/>\n  \n                  </ion-slide>\n                  <ion-slide>\n                <img src=\"assets/img/35-45w.jpg\" [ngClass]=\"{'border': cambiarborder == 8 }\"/>\n\n                  </ion-slide>\n                  <ion-slide>\n                  <img src=\"assets/img/+46w.jpg\" [ngClass]=\"{'border': cambiarborder == 9 }\"/>\n                  \n                  </ion-slide>\n            </ng-container>\n          </ion-slides>\n\n      <!--   </div>  -->  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style=\"margin-top:-20px\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"text-percent\">\n    <ng-container *ngIf=\"genero == 1\">\n      <ng-container *ngIf=\"contador == 1\">\n        Grasa Corporal: 3 a 7% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 2\">\n        Grasa Corporal: 8 a 10% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 3\">\n        Grasa Corporal: 11 a 13% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 4\">\n        Grasa Corporal: 14 a 16% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 5\">\n        Grasa Corporal: 17 a 24% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 6\">\n        Grasa Corporal: 25 a 30% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 7\">\n        Grasa Corporal: 31 a 40% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 8\">\n        Grasa Corporal: +40% \n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"genero == 0\">\n      <ng-container *ngIf=\"contador == 1\">\n        Grasa Corporal: 6% a 9%\n      </ng-container>\n      <ng-container *ngIf=\"contador == 2\">\n        Grasa Corporal: 9% a 12% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 3\">\n        Grasa Corporal: 13% a 15% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 4\">\n        Grasa Corporal: 16% a 20% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 5\">\n        Grasa Corporal: 21% a 25% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 6\">\n        Grasa Corporal: 26% a 30% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 7\">\n        Grasa Corporal: 31% a 35% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 8\">\n        Grasa Corporal: 35% a 45% \n      </ng-container>\n      <ng-container *ngIf=\"contador == 9\">\n        Grasa Corporal: +46% \n      </ng-container>\n    </ng-container>\n \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style=\"margin-top:60px\">\n    <ion-row>\n        <ion-col size=\"12\">   \n  \n          <ion-card  style=\"\n          width: 286px; \n          border-radius: 10px;\n          text-transform: uppercase;\n          font-family: 'Open Sans';\n          --background:#EF4044;\n          color:white;\n          \">\n        <h2 style=\"margin: 10px; text-align: center;\" (click)=\"goTo('/medidas')\"> \n         <b> \n           SIGUIENTE </b></h2> \n       </ion-card>\n  \n  \n        </ion-col>     \n      </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/porcentajegrasa/porcentajegrasa-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/porcentajegrasa/porcentajegrasa-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PorcentajegrasaPageRoutingModule */

  /***/
  function srcAppPorcentajegrasaPorcentajegrasaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PorcentajegrasaPageRoutingModule", function () {
      return PorcentajegrasaPageRoutingModule;
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


    var _porcentajegrasa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./porcentajegrasa.page */
    "./src/app/porcentajegrasa/porcentajegrasa.page.ts");

    var routes = [{
      path: '',
      component: _porcentajegrasa_page__WEBPACK_IMPORTED_MODULE_3__["PorcentajegrasaPage"]
    }];

    var PorcentajegrasaPageRoutingModule = function PorcentajegrasaPageRoutingModule() {
      _classCallCheck(this, PorcentajegrasaPageRoutingModule);
    };

    PorcentajegrasaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PorcentajegrasaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/porcentajegrasa/porcentajegrasa.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/porcentajegrasa/porcentajegrasa.module.ts ***!
    \***********************************************************/

  /*! exports provided: PorcentajegrasaPageModule */

  /***/
  function srcAppPorcentajegrasaPorcentajegrasaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PorcentajegrasaPageModule", function () {
      return PorcentajegrasaPageModule;
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


    var _porcentajegrasa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./porcentajegrasa-routing.module */
    "./src/app/porcentajegrasa/porcentajegrasa-routing.module.ts");
    /* harmony import */


    var _porcentajegrasa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./porcentajegrasa.page */
    "./src/app/porcentajegrasa/porcentajegrasa.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PorcentajegrasaPageModule = function PorcentajegrasaPageModule() {
      _classCallCheck(this, PorcentajegrasaPageModule);
    };

    PorcentajegrasaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _porcentajegrasa_routing_module__WEBPACK_IMPORTED_MODULE_5__["PorcentajegrasaPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_porcentajegrasa_page__WEBPACK_IMPORTED_MODULE_6__["PorcentajegrasaPage"]]
    })], PorcentajegrasaPageModule);
    /***/
  },

  /***/
  "./src/app/porcentajegrasa/porcentajegrasa.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/porcentajegrasa/porcentajegrasa.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPorcentajegrasaPorcentajegrasaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.text-percent {\n  text-align: center;\n  color: black;\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.border {\n  border: 2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9yY2VudGFqZWdyYXNhL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccG9yY2VudGFqZWdyYXNhXFxwb3JjZW50YWplZ3Jhc2EucGFnZS5zY3NzIiwic3JjL2FwcC9wb3JjZW50YWplZ3Jhc2EvcG9yY2VudGFqZWdyYXNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNDLDBCQUFBO0VBQ0EsWUFBQTtBQ0NMO0FER0c7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0FEO0FERUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNDSjtBRENBO0VBQ0ksaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUo7QURDQTtFQUNFLHFCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wb3JjZW50YWplZ3Jhc2EvcG9yY2VudGFqZWdyYXNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4OCU7XG4gICAgbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiBcbiAgICBoMntcbiAgICAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbiAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgXG4gICB9XG4gICAudGV4dC1wZXJjZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG5cbi5hdW1lbnRhcnRpdHVsb3tcbiBmb250LXNpemU6IDE4cHg7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudHtcbiAgICAtLWNvbG9yOiBibGFjaztcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDpibGFjaztcbiAgICAtLWNvbG9yOndoaXRlO1xufVxuXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIGlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBoMiB7XG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICB9XG4uY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4udGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbi5ib3JkZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn0iLCJpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnRleHQtcGVyY2VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdW1lbnRhcnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/porcentajegrasa/porcentajegrasa.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/porcentajegrasa/porcentajegrasa.page.ts ***!
    \*********************************************************/

  /*! exports provided: PorcentajegrasaPage */

  /***/
  function srcAppPorcentajegrasaPorcentajegrasaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PorcentajegrasaPage", function () {
      return PorcentajegrasaPage;
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
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var PorcentajegrasaPage =
    /*#__PURE__*/
    function () {
      function PorcentajegrasaPage(ruta, service, utilities, apiService, loadingController) {
        _classCallCheck(this, PorcentajegrasaPage);

        this.ruta = ruta;
        this.service = service;
        this.utilities = utilities;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.slideOpts = {
          initialSlide: 0,
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 20
        };
        this.contador = 1;
        this.cambiarborder = 1;
      }

      _createClass(PorcentajegrasaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valor;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.apiService.cargarNombreUsuario();

                  case 2:
                    valor = _context.sent;
                    this.genero = valor['gender'];
                    console.log("genero", this.genero);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "siguiente",
        value: function siguiente() {
          this.slides.slideNext();
        }
      }, {
        key: "atras",
        value: function atras() {
          this.slides.slidePrev();
        }
      }, {
        key: "goTo",
        value: function goTo(url) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // esperar
                    this.presentLoading(); // funcion para detectar grasa

                    this.nivelGrasa(); // respueta del servidor

                    _context2.next = 4;
                    return this.service.grease(this.grasa);

                  case 4:
                    this.validar = _context2.sent;
                    this.loadingController.dismiss(); //  validacion

                    if (this.validar) {
                      this.ruta.navigateForward(url);
                    } else {
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    }

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "nivelGrasa",
        value: function nivelGrasa() {
          if (this.contador === 1) {
            this.grasa = 3;
          }

          if (this.contador === 2) {
            this.grasa = 9;
          }

          if (this.contador === 3) {
            this.grasa = 13;
          }

          if (this.contador === 4) {
            this.grasa = 16;
          }

          if (this.contador === 5) {
            this.grasa = 21;
          }

          if (this.contador === 6) {
            this.grasa = 26;
          }

          if (this.contador === 7) {
            this.grasa = 31;
          }

          if (this.contador === 8) {
            this.grasa = 40;
          }

          if (this.contador === 9) {
            this.grasa = 45;
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "devolver",
        value: function devolver() {
          this.ruta.pop();
        }
      }, {
        key: "progressBar",
        value: function progressBar() {
          if (this.genero == 1) {
            console.log("que recibe el progre", this.contador);

            if (this.contador * 100 / 8 / 100 >= 1) {
              return 1;
            } else {
              return this.contador * 100 / 8 / 100;
            }
          } else {
            if (this.contador * 100 / 9 / 100 >= 1) {
              return 1;
            } else {
              return this.contador * 100 / 9 / 100;
            }
          }
        }
      }, {
        key: "carrusel",
        value: function carrusel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.slides.getActiveIndex();

                  case 2:
                    this.index = _context4.sent;
                    console.log(this.index);
                    this.cambiarborder = this.index + 1;
                    this.contador = this.cambiarborder;
                    this.progressBar();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PorcentajegrasaPage;
    }();

    PorcentajegrasaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"]
      }, {
        type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slide', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], PorcentajegrasaPage.prototype, "slides", void 0);
    PorcentajegrasaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-porcentajegrasa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./porcentajegrasa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/porcentajegrasa/porcentajegrasa.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./porcentajegrasa.page.scss */
      "./src/app/porcentajegrasa/porcentajegrasa.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], PorcentajegrasaPage);
    /***/
  }
}]);
//# sourceMappingURL=porcentajegrasa-porcentajegrasa-module-es5.js.map