function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alimentos-no-like-alimentos-no-like-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-no-like/alimentos-no-like.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-no-like/alimentos-no-like.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlimentosNoLikeAlimentosNoLikePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n\n<ion-content>\n\n  <div  class=\"ion-padding ion-text-center titulo\">\n    De los siguientes alimentos elige los que NO te gustan:\n  </div> \n\n\n  <p style=\"text-align: center;\">\n    <ion-chip style=\"text-transform: uppercase;\"   outline=\"true\" mode=\"ios\" color=\"dark\"  \n    [ngClass]=\"getClass(i)\" \n    *ngFor=\"let item of alimentos; let i = index\" >\n      <ion-label style=\"font-size: 17px;\"\n        (click)=\"agrupar(item.id , i)\">{{ucFirst(item.name)}}\n      </ion-label>\n    </ion-chip>\n  </p>\n  <!-- | slice:0:totalalimentos  -->\n\n  <!-- <p style=\"color: #EF4044; text-align: center;\" (click)=\"total()\" *ngIf=\"verMas\"> Ver todos</p> -->\n\n\n\n  \n\n      <!-- <ion-list>\n          <ion-item *ngFor=\"let item of alimentos\">\n            <ion-chip outline color=\"primary\">\n              <ion-label>{{ucFirst(item.name)}}</ion-label>\n            </ion-chip>\n\n            <ion-label class=\"titulopeque2\">{{ucFirst(item.name)}}</ion-label>\n            <ion-toggle color=\"dark\" slot=\"start\" name=\"{{item.id}}\" (ionChange)=\"agrupar($event.target.checked, item.id)\"></ion-toggle> \n          </ion-item>\n        </ion-list> -->\n \n\n\n  <ion-grid class=\"ion-padding\">\n    <ion-row >\n      <ion-col  size=\"12\">   \n\n        <ion-card  style=\"\n        width: 286px; \n        border-radius: 10px;\n        text-transform: uppercase;\n        font-family: 'Open Sans';\n        --background:#EF4044;\n        color:white;\n        \"\n      \n      (click)=\"finalizar()\">\n      <h2 style=\"margin: 10px; text-align: center;\">\n        <b> SIGUIENTE</b></h2> \n     </ion-card>\n\n\n      </ion-col>     \n    </ion-row>\n  </ion-grid>   \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/alimentos-no-like/alimentos-no-like-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/alimentos-no-like/alimentos-no-like-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AlimentosNoLikePageRoutingModule */

  /***/
  function srcAppAlimentosNoLikeAlimentosNoLikeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlimentosNoLikePageRoutingModule", function () {
      return AlimentosNoLikePageRoutingModule;
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


    var _alimentos_no_like_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alimentos-no-like.page */
    "./src/app/alimentos-no-like/alimentos-no-like.page.ts");

    var routes = [{
      path: '',
      component: _alimentos_no_like_page__WEBPACK_IMPORTED_MODULE_3__["AlimentosNoLikePage"]
    }];

    var AlimentosNoLikePageRoutingModule = function AlimentosNoLikePageRoutingModule() {
      _classCallCheck(this, AlimentosNoLikePageRoutingModule);
    };

    AlimentosNoLikePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlimentosNoLikePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/alimentos-no-like/alimentos-no-like.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/alimentos-no-like/alimentos-no-like.module.ts ***!
    \***************************************************************/

  /*! exports provided: AlimentosNoLikePageModule */

  /***/
  function srcAppAlimentosNoLikeAlimentosNoLikeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlimentosNoLikePageModule", function () {
      return AlimentosNoLikePageModule;
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


    var _alimentos_no_like_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alimentos-no-like-routing.module */
    "./src/app/alimentos-no-like/alimentos-no-like-routing.module.ts");
    /* harmony import */


    var _alimentos_no_like_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alimentos-no-like.page */
    "./src/app/alimentos-no-like/alimentos-no-like.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var AlimentosNoLikePageModule = function AlimentosNoLikePageModule() {
      _classCallCheck(this, AlimentosNoLikePageModule);
    };

    AlimentosNoLikePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alimentos_no_like_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlimentosNoLikePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_alimentos_no_like_page__WEBPACK_IMPORTED_MODULE_6__["AlimentosNoLikePage"]]
    })], AlimentosNoLikePageModule);
    /***/
  },

  /***/
  "./src/app/alimentos-no-like/alimentos-no-like.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/alimentos-no-like/alimentos-no-like.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlimentosNoLikeAlimentosNoLikePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n  margin-bottom: 10px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\nion-card h2 {\n  font-size: 17px !important;\n  opacity: 0.9;\n}\n.aumentartitulo {\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content {\n  --color: black;\n  --background: white;\n}\n.toolbar-background {\n  --background:black;\n  --color:white;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n}\n.titulo2 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  opacity: 0.7;\n}\nh2 {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 50px;\n}\n/* div {\n    margin-bottom: 48px;\n} */\n.rightborder {\n  border-right: solid 1px grey;\n}\nion-input {\n  opacity: 0.7;\n  font-size: 40px;\n  text-align: center;\n}\n.titulopeque {\n  opacity: 0.4;\n}\n.titulopeque2 {\n  opacity: 1;\n  color: black;\n  text-align: justify;\n  margin: 0 auto;\n  font-size: 1.5rem;\n}\nion-col {\n  text-align: center;\n}\nion-input {\n  --color: black;\n}\nion-item {\n  --background: white;\n}\nion-select {\n  width: 100%;\n  font-size: 23px;\n  font-weight: 200;\n}\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  /*   opacity: 0.7; */\n  margin-bottom: 20px;\n}\nion-list {\n  padding: 0 !important;\n}\n.selecionado {\n  color: white;\n  background: red;\n}\nion-chip {\n  background: none;\n}\nion-chip:focus {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxpbWVudG9zLW5vLWxpa2UvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxhbGltZW50b3Mtbm8tbGlrZVxcYWxpbWVudG9zLW5vLWxpa2UucGFnZS5zY3NzIiwic3JjL2FwcC9hbGltZW50b3Mtbm8tbGlrZS9hbGltZW50b3Mtbm8tbGlrZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUNDTDtBRElBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDREQ7QURHQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtBQ0FKO0FERUE7RUFDSSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NOO0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURBQTs7R0FBQTtBQUlBO0VBQ0ksNEJBQUE7QUNFSjtBRENBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0FDRUo7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHSjtBRERBO0VBQ0ksa0JBQUE7QUNJSjtBRERBO0VBQ0ksY0FBQTtBQ0lKO0FERkE7RUFDSSxtQkFBQTtBQ0tKO0FEREE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUQ7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Ysb0JBQUE7RUFDRSxtQkFBQTtBQ0lKO0FERkU7RUFDSSxxQkFBQTtBQ0tOO0FERkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0tKO0FERkU7RUFDRSxnQkFBQTtBQ0tKO0FERkU7RUFDRSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvYWxpbWVudG9zLW5vLWxpa2UvYWxpbWVudG9zLW5vLWxpa2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICAgIGgye1xuICAgICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICBcbiAgIH1cblxuLmF1bWVudGFydGl0dWxve1xuIGZvbnQtc2l6ZTogMThweDtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG5cbi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgLnRpdHVsbzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vKiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59ICovXG5cbi5yaWdodGJvcmRlcntcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG5pb24taW5wdXQge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvcGVxdWUge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0gIFxuLnRpdHVsb3BlcXVlMiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn0gICBcbmlvbi1jb2x7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXR7XG4gICAgLS1jb2xvcjogYmxhY2s7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5cbmlvbi1zZWxlY3R7XG4gd2lkdGg6IDEwMCU7XG4gZm9udC1zaXplOiAyM3B4O1xuIGZvbnQtd2VpZ2h0OjIwMDtcbn1cblxuLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIGlvbi1saXN0e1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlbGVjaW9uYWRve1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gIH1cblxuICBpb24tY2hpcHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgaW9uLWNoaXA6Zm9jdXN7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuIiwiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODglO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5pb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5hdW1lbnRhcnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6YmxhY2s7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnRpdHVsbzIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vKiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59ICovXG4ucmlnaHRib3JkZXIge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG5pb24taW5wdXQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvcGVxdWUge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50aXR1bG9wZXF1ZTIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qICAgb3BhY2l0eTogMC43OyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjaW9uYWRvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWNoaXA6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/alimentos-no-like/alimentos-no-like.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/alimentos-no-like/alimentos-no-like.page.ts ***!
    \*************************************************************/

  /*! exports provided: AlimentosNoLikePage */

  /***/
  function srcAppAlimentosNoLikeAlimentosNoLikePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlimentosNoLikePage", function () {
      return AlimentosNoLikePage;
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


    var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/nutricion.service */
    "./src/app/services/nutricion.service.ts");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var AlimentosNoLikePage =
    /*#__PURE__*/
    function () {
      function AlimentosNoLikePage(service, ruta, loadingController, apiService, utilities) {
        _classCallCheck(this, AlimentosNoLikePage);

        this.service = service;
        this.ruta = ruta;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.utilities = utilities; // total array

        this.totalalimentos = 6; // ocultar

        this.verMas = true; // activar clase

        this.active = []; // este tipo de Datos no permite valores duplicado / es un array de tipo set

        this.grupoAlimentos = new Set(); //array comun

        this.foods = [];
      }

      _createClass(AlimentosNoLikePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFoods();
        }
      }, {
        key: "getFoods",
        value: function getFoods() {
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
                    return this.service.getFoods();

                  case 3:
                    valor = _context.sent;
                    this.loadingController.dismiss();

                    if (valor == false) {
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    } else {
                      this.alimentos = valor;
                      console.log("valor", valor);
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
        key: "agrupar",
        value: function agrupar(id, index) {
          // logica
          // si existe un registro borrar 
          if (this.grupoAlimentos.has(id)) {
            var index2 = this.active.indexOf(index); // Borrar en caso de que exista el valor

            this.active.splice(index2, 1);
            console.log(this.active);
            return this.grupoAlimentos.delete(id);
          } // Agregar si no existe


          this.active.push(index);
          this.grupoAlimentos.add(id);
          console.log(this.active);
        }
      }, {
        key: "finalizar",
        value: function finalizar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var validar, validar2;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // destructuracion del array de set a un array normal    
                    this.foods = _toConsumableArray(this.grupoAlimentos); // if(Array.isArray(this.foods)  && this.foods.length){}

                    console.log("array normal", this.foods); // esperar

                    this.presentLoading();
                    _context2.next = 5;
                    return this.service.foodNoDeseados(this.foods);

                  case 5:
                    validar = _context2.sent;
                    this.loadingController.dismiss();

                    if (!validar) {
                      _context2.next = 16;
                      break;
                    }

                    // esperar
                    this.presentLoading2();
                    _context2.next = 11;
                    return this.service.calculate_menu();

                  case 11:
                    validar2 = _context2.sent;
                    this.loadingController.dismiss();

                    if (validar2) {
                      this.apiService.guardarnutricion(); //  this.ruta.navigateForward(['/bateria-alimento'])

                      this.ruta.navigateForward(['/tutorial-alimentacion']);
                    } else {
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    }

                    _context2.next = 17;
                    break;

                  case 16:
                    this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');

                  case 17:
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
          this.ruta.pop();
        }
      }, {
        key: "ucFirst",
        value: function ucFirst(str) {
          /*   str = str.replace(/ /g, "."); */
          return str.substring(0, 1).toUpperCase() + str.substring(1);
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
        key: "presentLoading2",
        value: function presentLoading2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: 'Estamos calculando su menú',
                      cssClass: 'my-loading'
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "total",
        value: function total() {
          this.totalalimentos = 200; // ocultar

          this.verMas = false;
        }
      }, {
        key: "getClass",
        value: function getClass(index) {
          // busca si un elemento se encuentra en el array y devuelve una clase
          return this.active.includes(index) ? 'selecionado' : '';
        }
      }]);

      return AlimentosNoLikePage;
    }();

    AlimentosNoLikePage.ctorParameters = function () {
      return [{
        type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__["NutricionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"]
      }, {
        type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]
      }];
    };

    AlimentosNoLikePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alimentos-no-like',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alimentos-no-like.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-no-like/alimentos-no-like.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alimentos-no-like.page.scss */
      "./src/app/alimentos-no-like/alimentos-no-like.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__["NutricionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])], AlimentosNoLikePage);
    /***/
  }
}]);
//# sourceMappingURL=alimentos-no-like-alimentos-no-like-module-es5.js.map