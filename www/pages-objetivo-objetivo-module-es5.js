function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-objetivo-objetivo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objetivo/objetivo.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objetivo/objetivo.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesObjetivoObjetivoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <app-back-btn></app-back-btn>\n    </ion-buttons>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\" >\n  <div class=\"animated fadeIn delay-1s\">\n    <div class=\"animated fadeInLeft contenedor\" *ngIf=\"!info\">\n      <h2 class=\"titulo \" *ngIf=\"!info\">Enfoquémos en tus objetivos\n        <ion-icon class=\"ayudad\" name=\"alert-circle\" (click)=\"mostrar(info)\"></ion-icon>\n      </h2>\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row\">\n          <ion-col size=\"12\">\n\n            <ion-card  style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            \"\n            color=\"dark\"\n          (click)=\"objetivo(0)\">\n            <h2 style=\"margin: 10px;\">\n              <b>Estar en forma</b>\n            </h2> \n            </ion-card>\n            \n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-card  style=\"\n              width: 286px; \n              border-radius: 10px;\n              text-transform: uppercase;\n              font-family: 'Open Sans';\n              \"\n              color=\"dark\"\n            (click)=\"objetivo(1)\">\n              <h2 style=\"margin: 10px;\">\n                <b>Ganar musculatura</b>\n              </h2> \n              </ion-card>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-card  style=\"\n            width: 286px; \n            border-radius: 10px;\n            text-transform: uppercase;\n            font-family: 'Open Sans';\n            \"\n            color=\"dark\"\n          (click)=\"objetivo(2)\">\n            <h2 style=\"margin: 10px;\">\n              <b>Adelgazar</b>\n            </h2> \n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"animated fadeInLeft\" *ngIf=\"info\">\n      <ion-grid class=\"my-grid\">\n          <ion-row class=\"parent-row animated fadeInLeft\">\n              <div class=\"container\">\n                  <h5 class=\"titulo\" style=\"text-align: center;\">Ayuda\n                      <ion-icon class=\"ayudad2\" name=\"close-outline\" (click)=\"cerrar()\"></ion-icon>\n                  </h5>\n                  <p class=\".ion-text-left\"><b> Estar en forma:</b> El equilibrio perfecto entre verte bien y estar saludable</p>\n                  <p class=\".ion-text-left\"><b> Ganar musculatura:</b> La mejor opción para construir músculos magros y fuertes</p>\n                  <p class=\".ion-text-left\"><b> Adelgazar:</b> Reduce medidas, disminuye tu porcentaje graso mientras mejoras tu composición corporal</p>\n              </div>\n\n          </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/objetivo/objetivo-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/objetivo/objetivo-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ObjetivoPageRoutingModule */

  /***/
  function srcAppPagesObjetivoObjetivoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjetivoPageRoutingModule", function () {
      return ObjetivoPageRoutingModule;
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


    var _objetivo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./objetivo.page */
    "./src/app/pages/objetivo/objetivo.page.ts");

    var routes = [{
      path: '',
      component: _objetivo_page__WEBPACK_IMPORTED_MODULE_3__["ObjetivoPage"]
    }];

    var ObjetivoPageRoutingModule = function ObjetivoPageRoutingModule() {
      _classCallCheck(this, ObjetivoPageRoutingModule);
    };

    ObjetivoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ObjetivoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/objetivo/objetivo.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/objetivo/objetivo.module.ts ***!
    \***************************************************/

  /*! exports provided: ObjetivoPageModule */

  /***/
  function srcAppPagesObjetivoObjetivoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjetivoPageModule", function () {
      return ObjetivoPageModule;
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


    var _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./objetivo-routing.module */
    "./src/app/pages/objetivo/objetivo-routing.module.ts");
    /* harmony import */


    var _objetivo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./objetivo.page */
    "./src/app/pages/objetivo/objetivo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var ObjetivoPageModule = function ObjetivoPageModule() {
      _classCallCheck(this, ObjetivoPageModule);
    };

    ObjetivoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObjetivoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_objetivo_page__WEBPACK_IMPORTED_MODULE_6__["ObjetivoPage"]]
    })], ObjetivoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/objetivo/objetivo.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/objetivo/objetivo.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesObjetivoObjetivoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: none;\n  /*\n  background-image: url('/assets/img/imagen-objetivos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  */\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.piepagina {\n  margin-bottom: 10%;\n  font-size: 15px;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\np {\n  text-align: left;\n  margin-left: 1rem;\n  font-size: 1.2rem;\n}\n\nion-toolbar {\n  --background:black;\n}\n\n.color-tarjeta {\n  background-color: #000000;\n}\n\nion-card {\n  color: white;\n  padding: 0px !important;\n  margin: 0px !important;\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  padding: 2px !important;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.ayudad {\n  fill: #e5141a;\n  font-size: 29px !important;\n}\n\n.ayudad2 {\n  color: #e5141a;\n  font-size: 29px !important;\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2JqZXRpdm8vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcb2JqZXRpdm9cXG9iamV0aXZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb2JqZXRpdm8vb2JqZXRpdm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBR0csc0JBQUE7QUNDTDs7QURFRTtFQUNFLGtCQUFBO0VBQ0E7Ozs7O0dBQUE7QUNNSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ047O0FERUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURDRTtFQUNDLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0g7O0FEQ0c7RUFDQywwQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FESUU7RUFDRyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0QsWUFBQTtBQ0RKOztBRElFO0VBQ0ksNkJBQUE7QUNETjs7QURJRTtFQUNFLHVCQUFBO0FDREo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDQUo7O0FER0M7RUFDQyxhQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2JqZXRpdm8vb2JqZXRpdm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuICBcbiAgKntcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC8qXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tb2JqZXRpdm9zLmpwZycpOyAgICBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICAgICovXG4gIH1cbiAgXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY29udGVuZWRvcntcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBpZXBhZ2luYXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBwe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIH1cblxuICAuY29sb3ItdGFyamV0YXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICBpb24tY2FyZHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgIC8vYW50ZXJpb3IgZXN0YWJhIGVuIDEyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICB3aWR0aDogODglO1xuICAgbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICBoMntcbiAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDJweCFpbXBvcnRhbnQ7XG4gICB9XG4gXG4gIH1cblxuICBpb24tY2FyZDpob3ZlcntcbiAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICBpb24tY29se1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4IWltcG9ydGFudDtcbiAgfVxuXG4gIC5teS1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiB9XG4ucGFyZW50LXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gfVxuXG4gLmF5dWRhZHtcbiAgZmlsbDogcmdiKDIyOSwgMjAsIDI2KTtcbiAgZm9udC1zaXplOiAyOXB4IWltcG9ydGFudDtcbn1cblxuLmF5dWRhZDJ7XG4gIGNvbG9yOiByZ2IoMjI5LDIwLCAyNik7XG4gIGZvbnQtc2l6ZTogMjlweCFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbiIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLypcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tb2JqZXRpdm9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICAqL1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5waWVwYWdpbmEge1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDpibGFjaztcbn1cblxuLmNvbG9yLXRhcmpldGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24tY2FyZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYXl1ZGFkIHtcbiAgZmlsbDogI2U1MTQxYTtcbiAgZm9udC1zaXplOiAyOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5heXVkYWQyIHtcbiAgY29sb3I6ICNlNTE0MWE7XG4gIGZvbnQtc2l6ZTogMjlweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/objetivo/objetivo.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/objetivo/objetivo.page.ts ***!
    \*************************************************/

  /*! exports provided: ObjetivoPage */

  /***/
  function srcAppPagesObjetivoObjetivoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjetivoPage", function () {
      return ObjetivoPage;
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

    var ObjetivoPage =
    /*#__PURE__*/
    function () {
      function ObjetivoPage(ruta, usuarioservicio) {
        _classCallCheck(this, ObjetivoPage);

        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
      }

      _createClass(ObjetivoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "objetivo",
        value: function objetivo(valor) {
          this.usuarioservicio.objetivo(valor);
          this.ruta.navigateForward(['/lugar-ejercicios']);
        }
      }, {
        key: "login",
        value: function login() {
          this.ruta.navigateForward(['/login']);
        }
      }, {
        key: "mostrar",
        value: function mostrar(valor) {
          this.info = !valor;
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.info = false;
        }
      }]);

      return ObjetivoPage;
    }();

    ObjetivoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    ObjetivoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-objetivo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./objetivo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/objetivo/objetivo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./objetivo.page.scss */
      "./src/app/pages/objetivo/objetivo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])], ObjetivoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-objetivo-objetivo-module-es5.js.map