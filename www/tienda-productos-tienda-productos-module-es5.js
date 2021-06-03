function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tienda-productos-tienda-productos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tienda-productos/tienda-productos.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tienda-productos/tienda-productos.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTiendaProductosTiendaProductosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tienda\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <img src=\"assets/img/logo-app.png\" class=\"imagenmodificada\">\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar placeholder=\"Buscar\" class=\"custom-search\" (ionChange)=\"search()\" [(ngModel)]=\"searchTerm\" ></ion-searchbar>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <ion-col size=\"6\" *ngFor=\"let item of productos\">\r\n        <ion-card class=\"card\">\r\n          <img src=\"https://smartbunnypruebas.com/imagenes/productos/{{item.id}}.png\" class=\"center-img\" />\r\n          <ion-card-header>\r\n            <ion-card-subtitle class=\"sub-card\">\r\n              {{item.name}}\r\n            </ion-card-subtitle>\r\n            <ion-card-title style=\"color: #E6E6E6; font-size: 15px;text-align: left; opacity: 70%\">\r\n              ${{item.price}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-button  class=\"btn-comprar\" (click)=\"sendProduct(item.id)\">\r\n              Comprar\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid> \r\n \r\n\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/tienda-productos/tienda-productos-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/tienda-productos/tienda-productos-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TiendaProductosPageRoutingModule */

  /***/
  function srcAppTiendaProductosTiendaProductosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiendaProductosPageRoutingModule", function () {
      return TiendaProductosPageRoutingModule;
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


    var _tienda_productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tienda-productos.page */
    "./src/app/tienda-productos/tienda-productos.page.ts");

    var routes = [{
      path: '',
      component: _tienda_productos_page__WEBPACK_IMPORTED_MODULE_3__["TiendaProductosPage"]
    }];

    var TiendaProductosPageRoutingModule = function TiendaProductosPageRoutingModule() {
      _classCallCheck(this, TiendaProductosPageRoutingModule);
    };

    TiendaProductosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TiendaProductosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tienda-productos/tienda-productos.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tienda-productos/tienda-productos.module.ts ***!
    \*************************************************************/

  /*! exports provided: TiendaProductosPageModule */

  /***/
  function srcAppTiendaProductosTiendaProductosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiendaProductosPageModule", function () {
      return TiendaProductosPageModule;
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


    var _tienda_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tienda-productos-routing.module */
    "./src/app/tienda-productos/tienda-productos-routing.module.ts");
    /* harmony import */


    var _tienda_productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tienda-productos.page */
    "./src/app/tienda-productos/tienda-productos.page.ts");

    var TiendaProductosPageModule = function TiendaProductosPageModule() {
      _classCallCheck(this, TiendaProductosPageModule);
    };

    TiendaProductosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tienda_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TiendaProductosPageRoutingModule"]],
      declarations: [_tienda_productos_page__WEBPACK_IMPORTED_MODULE_6__["TiendaProductosPage"]]
    })], TiendaProductosPageModule);
    /***/
  },

  /***/
  "./src/app/tienda-productos/tienda-productos.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/tienda-productos/tienda-productos.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTiendaProductosTiendaProductosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  margin: 0 auto;\n  max-height: 4rem;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-col {\n  display: table;\n  height: 200px;\n}\n\nion-col ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: white;\n}\n\nion-col ion-input {\n  border: 1px solid #dcdcdc;\n  color: white;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\nion-col ion-select {\n  color: white;\n  text-align: left;\n  display: contents;\n  width: 100%;\n  font-size: 17px;\n}\n\nion-col ion-select::part(icon) {\n  color: red !important;\n}\n\nion-col ion-avatar {\n  display: table-cell;\n  top: 1.5rem;\n  position: relative;\n}\n\nion-col ion-avatar ion-fab-button {\n  position: absolute;\n  right: 0;\n  bottom: 30%;\n  --background: #EF4044;\n}\n\nion-col ion-avatar img {\n  width: 120px;\n  height: 120px;\n}\n\n.perfil {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.indicadores {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.medidas {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.pago {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.imagen {\n  background-color: red;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\nion-title {\n  text-align: center;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 23px;\n  font-weight: 800;\n  /*   opacity: 0.7; */\n  margin-bottom: 0;\n}\n\nform {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-content {\n  --ion-background-color:black;\n}\n\nion-item {\n  border: 1px solid white;\n  border-radius: 8px;\n}\n\n.pencil-grey {\n  position: absolute;\n  right: 1rem;\n  color: grey;\n  font-size: 1.2rem;\n}\n\n.pencil-red {\n  position: absolute;\n  right: 1rem;\n  color: red;\n  font-size: 1.2rem;\n}\n\n.custom-search {\n  border: 1px solid white;\n  border-radius: 31px;\n  width: 90%;\n  color: white;\n  margin: 0 auto;\n  margin-top: 1rem;\n}\n\n.card {\n  width: 144px;\n  height: 250px;\n  background: #232323;\n}\n\n.center-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n  width: 101px;\n  height: 80px;\n}\n\n.btn-comprar {\n  --border-radius: 10px;\n  height: 30px;\n  display: block;\n  text-align: center;\n  --background: #EF4044;\n}\n\n.sub-card {\n  color: #E6E6E6;\n  font-size: 18px;\n  text-align: left;\n  font-weight: bold;\n  width: 112px;\n  height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGllbmRhLXByb2R1Y3Rvcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHRpZW5kYS1wcm9kdWN0b3NcXHRpZW5kYS1wcm9kdWN0b3MucGFnZS5zY3NzIiwic3JjL2FwcC90aWVuZGEtcHJvZHVjdG9zL3RpZW5kYS1wcm9kdWN0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0FKOztBRENJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDUjs7QURDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBTjs7QURJSTtFQUNBLHFCQUFBO0FDRko7O0FETUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0pSOztBREtRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDSFo7O0FES1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0haOztBRGFFO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDVko7O0FEYUE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNWRjs7QURjQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1hGOztBRGNBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDWEY7O0FEY0E7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNYRjs7QURjRTtFQUNJLGtCQUFBO0FDWE47O0FEY0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNGLG9CQUFBO0VBQ0UsZ0JBQUE7QUNYSjs7QURjRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURlRTtFQUNFLDRCQUFBO0FDWko7O0FEZUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDWkY7O0FEZ0JBO0VBQ0Usa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFdBQUE7RUFBWSxpQkFBQTtBQ1Y3Qzs7QURZQTtFQUNFLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxVQUFBO0VBQVcsaUJBQUE7QUNONUM7O0FEU0E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURVQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURTQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNOSjs7QURhQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC90aWVuZGEtcHJvZHVjdG9zL3RpZW5kYS1wcm9kdWN0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA0cmVtO1xuICB9XG5cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5pbWFnZW5tb2RpZmljYWRhe1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG5cbiAgICAvLyByZXRvY2FyIGNvbG9yIGludGVybm8gZGUgaWNvbm9cbiAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcbiAgICB9XG5cblxuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1mYWItYnV0dG9ue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDMwJTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0VGNDA0NDtcbiAgICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBpb24tYnV0dG9uc3tcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgcmlnaHQ6IDA7XG4gIC8vIH1cblxuICAucGVyZmlse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB9XG5cbi5pbmRpY2Fkb3Jlc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuXG4ubWVkaWRhc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLnBhZ297XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5pbWFnZW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbiAgaW9uLXRpdGxle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgZm9ybXtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cblxuXG4gIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbmlvbi1pdGVte1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5cbi5wZW5jaWwtZ3JleXtcbiAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxcmVtO2NvbG9yOiBncmV5O2ZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLnBlbmNpbC1yZWR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMXJlbTtjb2xvcjogcmVkO2ZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY3VzdG9tLXNlYXJjaHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi8vIHRhamV0YVxuLmNhcmR7XG4gIHdpZHRoOiAxNDRweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbn1cbi5jZW50ZXItaW1ne1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5idG4tY29tcHJhcntcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtLWJhY2tncm91bmQ6ICNFRjQwNDQ7XG5cbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gYm90dG9tOiAtNTBweDtcbiAgICAvLyByaWdodDogMjVweDtcbn1cblxuLnN1Yi1jYXJke1xuICBjb2xvcjogI0U2RTZFNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDExMnB4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5cbiIsIi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDRyZW07XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlbm1vZGlmaWNhZGEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tY29sIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5pb24tY29sIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbCBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb2wgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tY29sIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5pb24tY29sIGlvbi1hdmF0YXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0b3A6IDEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbCBpb24tYXZhdGFyIGlvbi1mYWItYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAzMCU7XG4gIC0tYmFja2dyb3VuZDogI0VGNDA0NDtcbn1cbmlvbi1jb2wgaW9uLWF2YXRhciBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5wZXJmaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4uaW5kaWNhZG9yZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4ubWVkaWRhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5wYWdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuLmltYWdlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogODAwO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGVuY2lsLWdyZXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wZW5jaWwtcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jdXN0b20tc2VhcmNoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDE0NHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xufVxuXG4uY2VudGVyLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB3aWR0aDogMTAxcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmJ0bi1jb21wcmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogI0VGNDA0NDtcbn1cblxuLnN1Yi1jYXJkIHtcbiAgY29sb3I6ICNFNkU2RTY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tienda-productos/tienda-productos.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tienda-productos/tienda-productos.page.ts ***!
    \***********************************************************/

  /*! exports provided: TiendaProductosPage */

  /***/
  function srcAppTiendaProductosTiendaProductosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiendaProductosPage", function () {
      return TiendaProductosPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _services_tienda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/tienda.service */
    "./src/app/services/tienda.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var TiendaProductosPage =
    /*#__PURE__*/
    function () {
      function TiendaProductosPage(service, route, loadingController, iab, utilities) {
        var _this = this;

        _classCallCheck(this, TiendaProductosPage);

        this.service = service;
        this.route = route;
        this.loadingController = loadingController;
        this.iab = iab;
        this.utilities = utilities;
        this.productos = [];
        this.buscador = [];
        this.route.queryParams.subscribe(function (params) {
          _this.productos = JSON.parse(params["shop"]);
          _this.name = _this.productos.name;
          _this.productos = _this.productos.product;
          _this.buscador = _this.productos;
        });
      }

      _createClass(TiendaProductosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          if (!this.searchTerm) {
            this.productos = this.buscador;
          } else {
            this.productos = this.filterItems();
          }
        }
      }, {
        key: "filterItems",
        value: function filterItems() {
          var _this2 = this;

          return this.productos.filter(function (item) {
            console.log(item);
            return item.name.toLowerCase().indexOf(_this2.searchTerm.toLowerCase()) > -1;
          });
        }
      }, {
        key: "sendProduct",
        value: function sendProduct(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valor, page;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.presentLoading();
                    _context.next = 3;
                    return this.service.sendProducts(id);

                  case 3:
                    valor = _context.sent;

                    if (valor == false) {
                      this.loadingController.dismiss();
                      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger');
                    } else {
                      this.loadingController.dismiss();
                      page = "https://smartpronutrition.com/supplements-shop/";
                      this.iab.create(page, '_blank');
                    }

                  case 5:
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
                      message: 'Por favor espere...',
                      cssClass: 'my-loading'
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

      return TiendaProductosPage;
    }();

    TiendaProductosPage.ctorParameters = function () {
      return [{
        type: _services_tienda_service__WEBPACK_IMPORTED_MODULE_5__["TiendaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }, {
        type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]
      }];
    };

    TiendaProductosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tienda-productos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tienda-productos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tienda-productos/tienda-productos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tienda-productos.page.scss */
      "./src/app/tienda-productos/tienda-productos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tienda_service__WEBPACK_IMPORTED_MODULE_5__["TiendaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])], TiendaProductosPage);
    /***/
  }
}]);
//# sourceMappingURL=tienda-productos-tienda-productos-module-es5.js.map