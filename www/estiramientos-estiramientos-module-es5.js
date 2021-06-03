function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estiramientos-estiramientos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/estiramientos/estiramientos.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estiramientos/estiramientos.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEstiramientosEstiramientosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n   \n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n<ng-container *ngIf=\"!estiramientos\">\n\n\n  <div  class=\"ion-padding ion-text-center aumentartitulo\">\n   <H2><B> ESTIRAMIENTOS</B></H2>\n  </div> \n  <div  class=\"ion-padding ion-text-center\">\n    <h3 style=\"color: red;\"> <b> Ahora por favor realiza estos estiramientos</b></h3>\n\n  </div>   \n  <div class=\"ion-padding ion-text-center\">\n    Respira profundo, vuelve a la calma y estira todo tu cuerpo, no te tomará más de cinco minutos.\n  </div>\n\n  <ion-grid class=\"ion-padding\">\n   <ion-row >\n      <ion-col  size=\"12\">   \n        <ion-card style=\"  \n    background: #EF4044;\n    color: white;\n    width: 286px; \n    border-radius: 10px;\n    text-transform: uppercase;\n    margin: 0 auto;\n    font-family: 'Open Sans';\" (click)=\"iniciar()\">\n    <h2 style=\"text-align: center; margin: 10px; font-size: 17px;\">\n    <b> Continuar </b>\n    </h2>  \n        </ion-card>  \n      </ion-col>\n\n      <ion-col  size=\"12\">   \n        <ion-card style=\"  \n    background: #EF4044;\n    color: white;\n    width: 286px; \n    border-radius: 10px;\n    text-transform: uppercase;\n    margin: 0 auto;\n    font-family: 'Open Sans';\" (click)=\"saltar()\">\n    <h2 style=\"text-align: center; margin: 10px; font-size: 17px;\">\n    <b> Saltar Estiramientos </b>\n    </h2>  \n        </ion-card>  \n      </ion-col>\n      \n    </ion-row> \n\n  </ion-grid>   \n</ng-container>\n\n<ng-container *ngIf=\"estiramientos\">\n  <div  class=\"ion-padding ion-text-center aumentartitulo\">\n    <H1><B> ESTIRAMIENTOS</B></H1>\n   </div> \n  <ion-grid>\n    <ion-row >\n      <ion-col  size=\"12\">   \n        <div  class=\"ion-padding-horizontal\">\n          <img src=\"assets/img/casa.jpg\"/>\n        </div>   \n      </ion-col>\n    </ion-row>\n  </ion-grid> \n</ng-container>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/estiramientos/estiramientos-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/estiramientos/estiramientos-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EstiramientosPageRoutingModule */

  /***/
  function srcAppEstiramientosEstiramientosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstiramientosPageRoutingModule", function () {
      return EstiramientosPageRoutingModule;
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


    var _estiramientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./estiramientos.page */
    "./src/app/estiramientos/estiramientos.page.ts");

    var routes = [{
      path: '',
      component: _estiramientos_page__WEBPACK_IMPORTED_MODULE_3__["EstiramientosPage"]
    }];

    var EstiramientosPageRoutingModule = function EstiramientosPageRoutingModule() {
      _classCallCheck(this, EstiramientosPageRoutingModule);
    };

    EstiramientosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EstiramientosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/estiramientos/estiramientos.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/estiramientos/estiramientos.module.ts ***!
    \*******************************************************/

  /*! exports provided: EstiramientosPageModule */

  /***/
  function srcAppEstiramientosEstiramientosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstiramientosPageModule", function () {
      return EstiramientosPageModule;
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


    var _estiramientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./estiramientos-routing.module */
    "./src/app/estiramientos/estiramientos-routing.module.ts");
    /* harmony import */


    var _estiramientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./estiramientos.page */
    "./src/app/estiramientos/estiramientos.page.ts");

    var EstiramientosPageModule = function EstiramientosPageModule() {
      _classCallCheck(this, EstiramientosPageModule);
    };

    EstiramientosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _estiramientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstiramientosPageRoutingModule"]],
      declarations: [_estiramientos_page__WEBPACK_IMPORTED_MODULE_6__["EstiramientosPage"]]
    })], EstiramientosPageModule);
    /***/
  },

  /***/
  "./src/app/estiramientos/estiramientos.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/estiramientos/estiramientos.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEstiramientosEstiramientosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 16em;\n}\n@media (max-height: 640px) {\n  .videoReproductor {\n    height: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 3rem;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 60%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 0.9rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 5rem;\n  height: 4rem;\n  background-color: black;\n  color: white;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n@media (max-height: 640px) {\n  .contenedor-cabezera {\n    height: 3em;\n  }\n}\n.titulo {\n  padding: 5px;\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.reloj {\n  margin: 2px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.text-reloj-titulo {\n  font-weight: 700;\n  margin: 0;\n}\n.text-reloj {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2rem;\n}\n@media (max-height: 640px) {\n  .text-reloj {\n    font-size: 1em;\n  }\n}\n.grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n.ion-text-center.titulo {\n  font-weight: 800;\n}\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 22px;\n  padding-top: 28px;\n}\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\nimg {\n  height: auto;\n  width: auto;\n}\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.ocultarElemento {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-name: hidebutton;\n          animation-name: hidebutton;\n}\n@-webkit-keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n.segundos {\n  margin: 0;\n  font-size: 1rem;\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0aXJhbWllbnRvcy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGVzdGlyYW1pZW50b3NcXGVzdGlyYW1pZW50b3MucGFnZS5zY3NzIiwic3JjL2FwcC9lc3RpcmFtaWVudG9zL2VzdGlyYW1pZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDQSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0EsV0FBQTtBQVVBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUEY7QURIRTtFQU9GO0lBS00sWUFBQTtJQUNBLG1CQUFBO09BQUEsZ0JBQUE7RUNMSjtBQUNGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDUEY7QURVQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNQSDtBRFdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLGdCQUFBO0FDVEY7QUR2Q0U7RUFxQ0Y7SUFhTSxXQUFBO0VDUEo7QUFDRjtBRFdBO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSSDtBRFdBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNSRjtBRFdBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FDUkY7QURXQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUkY7QURuRUU7RUF3RUY7SUFLTSxjQUFBO0VDTko7QUFDRjtBRFNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ05GO0FEU0E7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ05KO0FEV0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUko7QURZQTtFQUNHLGdCQUFBO0FDVEg7QURXQTtFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUkg7QURVQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNQSDtBRFNBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDTkg7QURRQTtFQUNHLGtCQUFBO0VBQ0EsY0FBQTtBQ0xIO0FEUUE7RUFHQyxZQUFBO0VBQ0EsV0FBQTtBQ1BEO0FEVUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEVUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ1BGO0FEVUE7RUFDRTtJQUNDLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDUEQ7RURVQTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDUko7RURXQTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDVEo7QUFDRjtBRExBO0VBQ0U7SUFDQyxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1BEO0VEVUE7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1JKO0VEV0E7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ1RKO0FBQ0Y7QURjQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0lBQ0EsNEJBQUE7RUNaSjtFRGNBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBQ0Esd0JBQUE7RUNaSjtBQUNGO0FEY0E7RUFDRTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUVBLDRCQUFBO0VDWko7RURjQTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUVBLHdCQUFBO0VDWko7QUFDRjtBRGNBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtBQ1pGO0FEZUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDWkEiLCJmaWxlIjoic3JjL2FwcC9lc3RpcmFtaWVudG9zL2VzdGlyYW1pZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2dvKi9cbi5sb2dve1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYXtcbm1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4vKmZpbiBsb2dvKi9cblxuQG1peGluIHRlbGVmb25vLXJlc3BvbnNpdm8ge1xuICBAbWVkaWEgKG1heC1oZWlnaHQ6NjQwcHgpIHtcbiAgICAgIEBjb250ZW50O1xuICB9XG4gIFxufVxuXG4vLyBhanVzdGFyIGltYWdlbiBkZSBjYXJnYSBhIHZpZGVvXG4udmlkZW9SZXByb2R1Y3RvcntcbiAgb2JqZWN0LWZpdDogY292ZXI7IFxuICB3aWR0aDogMTAwJTsgXG4gIGhlaWdodDogMTZlbTtcbiAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICBvYmplY3QtZml0OiBmaWxsO1xuICB9XG59XG5cblxuLy8gY29udGVuZWRvclxuLmNvbnRlbmVkb3J7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6MTAwJTsgXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5jb250ZW5lZG9yLWN1ZXJwb3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWF4LWhlaWdodDogNzAlO1xuICAgaGVpZ2h0OjYwJTsgXG4gICBkaXNwbGF5OiBmbGV4O1xuICAgbWFyZ2luLXRvcDogLjlyZW07XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4gLy8gY29udGVuZWRvciBjYWJlemVyYVxuLmNvbnRlbmVkb3ItY2FiZXplcmF7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1cmVtO1xuICBoZWlnaHQ6NHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSB0ZWxlZm9uby1yZXNwb25zaXZvKCl7XG4gICAgICBoZWlnaHQ6IDNlbTtcbiAgfVxufVxuXG5cbi50aXR1bG8ge1xuICAgcGFkZGluZzogNXB4O1xuICAgZm9udC1zaXplOiAxLjJyZW07XG4gICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmVsb2p7XG4gIG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGV4dC1yZWxvai10aXR1bG97XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtcmVsb2p7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cblxuLmdyaWQxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEYzRjE7IFxuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sb2dve1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYXtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5cbi50aXR1bG9kZXNjYW5zb3tcbiAgICBjb2xvcjogIzk1OTU5NTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2VudGVyIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtc2l6ZTogMzhweDtcbiAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICBwYWRkaW5nLXRvcDogMHB4O1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW4tdG9wOiA1cHg7XG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uaW9uLXRleHQtY2VudGVyLnRpdHVsbzIge1xuICAgd2lkdGg6IDEwMCU7XG4gICBmb250LXNpemU6IDIycHg7XG4gICBwYWRkaW5nLXRvcDogMjhweDtcbn1cbi5jZW50ZXIuZG8ge1xuICAgbWFyZ2luLXRvcDogMHB4O1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIGZvbnQtc2l6ZTogMjJweDtcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2VudGVyZG8ge1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmltZ3tcbi8vICAgaGVpZ2h0OiAxNTBweDtcbi8vICAgd2lkdGg6IDI0MHB4O1xuIGhlaWdodDogYXV0bztcbiB3aWR0aDogYXV0bztcbn1cblxuLmFuaW1hY2lvbntcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aFxufVxuXG4ub2N1bHRhckVsZW1lbnRve1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tbmFtZTogaGlkZWJ1dHRvbjtcbn1cblxuQGtleWZyYW1lcyBoaWRlYnV0dG9uIHtcbiAgMCUge1xuICAgb3BhY2l0eTogMDtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gIH1cblxuICA5MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodHtcbiAgMCV7XG4gICAgICBvcGFjaXR5OjA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KVxuICB9XG4gIDEwMCV7XG4gICAgICBvcGFjaXR5OjE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5SaWdodHtcbiAgMCV7XG4gICAgICBvcGFjaXR5OjA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgfVxuICAxMDAle1xuICAgICAgb3BhY2l0eToxO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApXG4gIH1cbn1cbi5mYWRlSW5SaWdodHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6ZmFkZUluUmlnaHRcbn1cblxuLnNlZ3VuZG9ze1xubWFyZ2luOiAwO1xuZm9udC1zaXplOiAxcmVtO1xubWFyZ2luLXRvcDogLTFyZW07ICAgXG59IiwiLypsb2dvKi9cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKmZpbiBsb2dvKi9cbi52aWRlb1JlcHJvZHVjdG9yIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2ZW07XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC52aWRlb1JlcHJvZHVjdG9yIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgfVxufVxuXG4uY29udGVuZWRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5jb250ZW5lZG9yLWN1ZXJwbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAwLjlyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVuZWRvci1jYWJlemVyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC5jb250ZW5lZG9yLWNhYmV6ZXJhIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlbG9qIHtcbiAgbWFyZ2luOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50ZXh0LXJlbG9qLXRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtcmVsb2oge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC50ZXh0LXJlbG9qIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG4uZ3JpZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGM0YxO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvZGVzY2Fuc28ge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uY2VudGVyLmRvIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jZW50ZXJkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hbmltYWNpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLm9jdWx0YXJFbGVtZW50byB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1uYW1lOiBoaWRlYnV0dG9uO1xufVxuXG5Aa2V5ZnJhbWVzIGhpZGVidXR0b24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbi5mYWRlSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG59XG5cbi5zZWd1bmRvcyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/estiramientos/estiramientos.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/estiramientos/estiramientos.page.ts ***!
    \*****************************************************/

  /*! exports provided: EstiramientosPage */

  /***/
  function srcAppEstiramientosEstiramientosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstiramientosPage", function () {
      return EstiramientosPage;
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

    var EstiramientosPage =
    /*#__PURE__*/
    function () {
      function EstiramientosPage(navCtrl) {
        _classCallCheck(this, EstiramientosPage);

        this.navCtrl = navCtrl;
        this.estiramientos = false;
      }

      _createClass(EstiramientosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "iniciar",
        value: function iniciar() {
          this.navCtrl.navigateForward("/bateria-estiramientos");
        }
      }, {
        key: "saltar",
        value: function saltar() {
          this.navCtrl.navigateForward("/percepcionentrenamiento");
        }
      }]);

      return EstiramientosPage;
    }();

    EstiramientosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    EstiramientosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estiramientos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estiramientos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/estiramientos/estiramientos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estiramientos.page.scss */
      "./src/app/estiramientos/estiramientos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], EstiramientosPage);
    /***/
  }
}]);
//# sourceMappingURL=estiramientos-estiramientos-module-es5.js.map