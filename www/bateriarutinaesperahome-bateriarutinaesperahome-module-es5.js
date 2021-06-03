function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateriarutinaesperahome-bateriarutinaesperahome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBateriarutinaesperahomeBateriarutinaesperahomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1\">\n    <ion-row>\n      <p class=\"ion-text-center titulo2\" style=\"margin-top: 0; margin-bottom: 0; padding-top: 0;\">Comienza en</p>\n      <p class=\"center\">{{zero}}{{timeLeft}}</p>\n      <p class=\"center do\">Tu siguiente ejercicio es: </p>\n      <p class=\"center do\" style=\"color: red;\">{{nombre}} </p>\n      <ion-col class=\"centerdo\" size=\"8\" style=\"padding: 0px;\">\n        <img *ngIf=\"imagen\" [src]=\"imagen\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"grid2\">\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"light\" (click)=\"atras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"light\" (click)=\"redirigir()\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <h1 class=\"titulodescanso\" style=\"margin-top: 0px !important;color: red;\">Descanso</h1>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/bateriarutinaesperahome/bateriarutinaesperahome-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/bateriarutinaesperahome/bateriarutinaesperahome-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BateriarutinaesperahomePageRoutingModule */

  /***/
  function srcAppBateriarutinaesperahomeBateriarutinaesperahomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BateriarutinaesperahomePageRoutingModule", function () {
      return BateriarutinaesperahomePageRoutingModule;
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


    var _bateriarutinaesperahome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bateriarutinaesperahome.page */
    "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.ts");

    var routes = [{
      path: '',
      component: _bateriarutinaesperahome_page__WEBPACK_IMPORTED_MODULE_3__["BateriarutinaesperahomePage"]
    }];

    var BateriarutinaesperahomePageRoutingModule = function BateriarutinaesperahomePageRoutingModule() {
      _classCallCheck(this, BateriarutinaesperahomePageRoutingModule);
    };

    BateriarutinaesperahomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BateriarutinaesperahomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/bateriarutinaesperahome/bateriarutinaesperahome.module.ts ***!
    \***************************************************************************/

  /*! exports provided: BateriarutinaesperahomePageModule */

  /***/
  function srcAppBateriarutinaesperahomeBateriarutinaesperahomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BateriarutinaesperahomePageModule", function () {
      return BateriarutinaesperahomePageModule;
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


    var _bateriarutinaesperahome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bateriarutinaesperahome-routing.module */
    "./src/app/bateriarutinaesperahome/bateriarutinaesperahome-routing.module.ts");
    /* harmony import */


    var _bateriarutinaesperahome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bateriarutinaesperahome.page */
    "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.ts");

    var BateriarutinaesperahomePageModule = function BateriarutinaesperahomePageModule() {
      _classCallCheck(this, BateriarutinaesperahomePageModule);
    };

    BateriarutinaesperahomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bateriarutinaesperahome_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriarutinaesperahomePageRoutingModule"]],
      declarations: [_bateriarutinaesperahome_page__WEBPACK_IMPORTED_MODULE_6__["BateriarutinaesperahomePage"]]
    })], BateriarutinaesperahomePageModule);
    /***/
  },

  /***/
  "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBateriarutinaesperahomeBateriarutinaesperahomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n\n.grid2 {\n  padding: 0px;\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\nion-content {\n  --background: black;\n}\n\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n\n.ion-text-center.titulo {\n  font-weight: 800;\n}\n\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 22px;\n  padding-top: 28px;\n}\n\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\n\nimg {\n  height: auto;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYXJ1dGluYWVzcGVyYWhvbWUvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxiYXRlcmlhcnV0aW5hZXNwZXJhaG9tZVxcYmF0ZXJpYXJ1dGluYWVzcGVyYWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhcnV0aW5hZXNwZXJhaG9tZS9iYXRlcmlhcnV0aW5hZXNwZXJhaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQztFQUNJLFlBQUE7QUNFTDs7QURDRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENFO0VBQ0UsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNFTjs7QURDRTtFQUNHLG1CQUFBO0FDRUw7O0FEQ0U7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRU47O0FERUM7RUFDSSxnQkFBQTtBQ0NMOztBRENDO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFTDs7QURBQztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHTDs7QUREQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0lMOztBREZDO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDS0w7O0FERkM7RUFHRSxZQUFBO0VBQ0EsV0FBQTtBQ0dIIiwiZmlsZSI6InNyYy9hcHAvYmF0ZXJpYXJ1dGluYWVzcGVyYWhvbWUvYmF0ZXJpYXJ1dGluYWVzcGVyYWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQxe1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y0RjNGMTsgXG4gICAgcGFkZGluZzogMHB4O1xuIH1cbiAuZ3JpZDJ7XG4gICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuIFxuICAubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50e1xuICAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyAgXG4gIH1cbiBcbiAgLnRpdHVsb2Rlc2NhbnNve1xuICAgICAgY29sb3I6ICM5NTk1OTU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiBcbiBcbiAuaW9uLXRleHQtY2VudGVyLnRpdHVsbyB7XG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gfVxuIC5jZW50ZXIge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuIH1cbiAuaW9uLXRleHQtY2VudGVyLnRpdHVsbzIge1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBwYWRkaW5nLXRvcDogMjhweDtcbiB9XG4gLmNlbnRlci5kbyB7XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuIH1cbiAuY2VudGVyZG8ge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIG1hcmdpbjogMCBhdXRvO1xuIH1cbiBcbiBpbWd7XG4gLy8gICBoZWlnaHQ6IDE1MHB4O1xuIC8vICAgd2lkdGg6IDI0MHB4O1xuICAgaGVpZ2h0OiBhdXRvO1xuICAgd2lkdGg6IGF1dG87XG4gfVxuICIsIi5ncmlkMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjE7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmdyaWQyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udGl0dWxvZGVzY2Fuc28ge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uY2VudGVyLmRvIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jZW50ZXJkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.ts ***!
    \*************************************************************************/

  /*! exports provided: BateriarutinaesperahomePage */

  /***/
  function srcAppBateriarutinaesperahomeBateriarutinaesperahomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BateriarutinaesperahomePage", function () {
      return BateriarutinaesperahomePage;
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


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;

    var BateriarutinaesperahomePage =
    /*#__PURE__*/
    function () {
      function BateriarutinaesperahomePage(capturar, ApiService, ruta) {
        _classCallCheck(this, BateriarutinaesperahomePage);

        this.capturar = capturar;
        this.ApiService = ApiService;
        this.ruta = ruta; //sonido

        this.sonido = "../../../assets/sonido/reloj.mp3";
        this.sonido2 = "../../../assets/sonido/final.mp3";
        this.mostrartitulo = false;
      }

      _createClass(BateriarutinaesperahomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //  aca vas hacer la logica para que no se pierda la referencia de los datos
                    console.log(this.ApiService.rutina); //  parametros del id

                    this.dataRecibida = this.capturar.snapshot.paramMap.get('id');
                    this.contador = parseInt(this.dataRecibida) + 1; // 

                    this.ejercipro = this.ApiService.rutina[this.contador];
                    this.nombre = this.ejercipro.name;
                    this.imagen = "".concat(URL, "/imagenes/").concat(this.ejercipro.cod, "/").concat(this.ejercipro.id, ".jpg");
                    console.log(this.imagen);
                    this.capturar.queryParams.subscribe(function (params) {
                      var data = params["count"];
                      var secuence = params["secuence"];
                      var restar = params["restar"];
                      if (data) _this.contator_ = data;
                      if (secuence) _this.secuence = secuence;
                      if (restar) _this.restar = restar;
                    });
                    this.timeLeft = this.ApiService.rest;
                    this.startTimer();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this2 = this;

          this.tiemposegundo = setInterval(function () {
            if (_this2.timeLeft === 10) {
              _this2.mostrartitulo = true;
            }

            if (_this2.timeLeft <= 10) {
              console.log("activate");
              _this2.zero = 0;
            }

            if (_this2.timeLeft >= 1 && _this2.timeLeft < 10) {
              _this2.playSonido();
            } // if(this.timeLeft === 1) {
            //     this.playSonidoFinal()
            // }


            if (_this2.timeLeft > 0) {
              _this2.timeLeft--;
            } else {
              _this2.timeLeft = 0;

              _this2.redirigir();
            }
          }, 1000);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          clearInterval(this.tiemposegundo);

          if (this.audio) {
            this.audio.pause();
          }
        }
      }, {
        key: "redirigir",
        value: function redirigir() {
          clearInterval(this.tiemposegundo);
          this.contator_++;
          var navigationExtras = {
            queryParams: {
              count: this.contator_,
              secuence: this.secuence
            }
          };
          this.ruta.navigateRoot(["/bateriarutinahome/".concat(this.contador)], navigationExtras);
          this.pauseSonido();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.tiemposegundo);

          if (this.audio) {
            this.audio.pause();
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          clearInterval(this.tiemposegundo);

          if (this.audio) {
            this.audio.pause();
          }
        }
      }, {
        key: "playSonido",
        value: function playSonido() {
          this.audio = new Audio();
          this.audio.src = this.sonido;
          this.audio.load();
          this.audio.play();
        } // playSonidoFinal(){
        // this.audio = new Audio();
        // this.audio.src = this.sonido2;
        // this.audio.load();
        // this.audio.play();
        // }

      }, {
        key: "pauseSonido",
        value: function pauseSonido() {
          if (this.audio) {
            this.audio.pause();
          }
        }
      }, {
        key: "atras",
        value: function atras() {
          clearInterval(this.tiemposegundo);

          if (this.contador != 1) {
            this.contador--;
          }

          var navigationExtras = {
            queryParams: {
              count: this.contador,
              secuence: this.secuence
            }
          };
          this.ruta.navigateForward(["/bateriarutinahome/".concat(this.contador)], navigationExtras);
        }
      }]);

      return BateriarutinaesperahomePage;
    }();

    BateriarutinaesperahomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    BateriarutinaesperahomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bateriarutinaesperahome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bateriarutinaesperahome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bateriarutinaesperahome.page.scss */
      "./src/app/bateriarutinaesperahome/bateriarutinaesperahome.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], BateriarutinaesperahomePage);
    /***/
  }
}]);
//# sourceMappingURL=bateriarutinaesperahome-bateriarutinaesperahome-module-es5.js.map