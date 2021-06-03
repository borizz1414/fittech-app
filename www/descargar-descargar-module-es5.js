function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["descargar-descargar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/descargar/descargar.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/descargar/descargar.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDescargarDescargarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header> -->\n\n<!-- <video controls width=\"100%\">\n  <source [src]=\"video\" />\n</video> -->\n\n<!-- \n<ion-content>\n  <p> Aqui comienza la descarga </p>\n\n\n    <!-- <ion-button (click)=\"descarga()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Click para descargar archivo \n    </ion-button>\n\n    <ion-button (click)=\"testear()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Click para iterar\n    </ion-button> -->\n\n    <!-- <div class=\"ion-text-center\">\n      <progress [value]=\"contador\" [max]=\"maximo\"></progress>\n    </div>\n\n -->\n\n\n<!-- </ion-content> --> -->\n\n\n<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n  <ion-slides>\n\n    <ion-slide>\n      <div class=\"slide\">\n        <img src=\"assets/img/esperarfittech.gif\"/>\n        <h2>Descargando videos.</h2>\n        <p>Por favor espere a que se descargue la  rutinas de trabajo para comenzar con tus ejercicios.</p>\n      </div>\n\n      \n        <div class=\"ion-text-center\">\n          <progress [value]=\"contador\" [max]=\"maximo\"></progress>\n        </div>\n      \n    \n    </ion-slide>\n  </ion-slides>";
    /***/
  },

  /***/
  "./src/app/descargar/descargar-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/descargar/descargar-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DescargarPageRoutingModule */

  /***/
  function srcAppDescargarDescargarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescargarPageRoutingModule", function () {
      return DescargarPageRoutingModule;
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


    var _descargar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./descargar.page */
    "./src/app/descargar/descargar.page.ts");

    var routes = [{
      path: '',
      component: _descargar_page__WEBPACK_IMPORTED_MODULE_3__["DescargarPage"]
    }];

    var DescargarPageRoutingModule = function DescargarPageRoutingModule() {
      _classCallCheck(this, DescargarPageRoutingModule);
    };

    DescargarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DescargarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/descargar/descargar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/descargar/descargar.module.ts ***!
    \***********************************************/

  /*! exports provided: DescargarPageModule */

  /***/
  function srcAppDescargarDescargarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescargarPageModule", function () {
      return DescargarPageModule;
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


    var _descargar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./descargar-routing.module */
    "./src/app/descargar/descargar-routing.module.ts");
    /* harmony import */


    var _descargar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./descargar.page */
    "./src/app/descargar/descargar.page.ts");

    var DescargarPageModule = function DescargarPageModule() {
      _classCallCheck(this, DescargarPageModule);
    };

    DescargarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _descargar_routing_module__WEBPACK_IMPORTED_MODULE_5__["DescargarPageRoutingModule"]],
      declarations: [_descargar_page__WEBPACK_IMPORTED_MODULE_6__["DescargarPage"]]
    })], DescargarPageModule);
    /***/
  },

  /***/
  "./src/app/descargar/descargar.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/descargar/descargar.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDescargarDescargarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 30%;\n  max-width: 50%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzY2FyZ2FyL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcZGVzY2FyZ2FyXFxkZXNjYXJnYXIucGFnZS5zY3NzIiwic3JjL2FwcC9kZXNjYXJnYXIvZGVzY2FyZ2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQyxVQUFBO0FDQ0w7O0FERUc7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREVHO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUU7RUFDRSxxQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGVzY2FyZ2FyL2Rlc2Nhcmdhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG5cbmlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICB3aWR0aDogODAlO1xuICAgfVxuICAgXG4gICBpb24tY2FyZDpob3ZlcntcbiAgIHRyYW5zaXRpb246IDAuMXM7XG4gICBvcGFjaXR5OiAwLjU7XG4gICB9XG5cbiAgIC5jb2xvci10YXJqZXRhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIGIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBwIHtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG4gIH1cblxuICBwIGIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG4gIH0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29sb3ItdGFyamV0YSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC1oZWlnaHQ6IDMwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cblxucCBiIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/descargar/descargar.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/descargar/descargar.page.ts ***!
    \*********************************************/

  /*! exports provided: DescargarPage */

  /***/
  function srcAppDescargarDescargarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescargarPage", function () {
      return DescargarPage;
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


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DescargarPage =
    /*#__PURE__*/
    function () {
      function DescargarPage(Filetransfer, file, ApiService, ruta) {
        _classCallCheck(this, DescargarPage);

        this.Filetransfer = Filetransfer;
        this.file = file;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.items = [{
          'url': 'http://Fittech247.com/videos/home/prueba/1.mp4',
          'name': 'videobajadoIonic1'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/2.mp4',
          'name': 'videobajadoIonic2'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/3.mp4',
          'name': 'videobajadoIonic3'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/4.mp4',
          'name': 'videobajadoIonic4'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/5.mp4',
          'name': 'videobajadoIonic5'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/6.mp4',
          'name': 'videobajadoIonic6'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/7.mp4',
          'name': 'videobajadoIonic7'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/8.mp4',
          'name': 'videobajadoIonic8'
        }, {
          'url': 'http://Fittech247.com/videos/home/prueba/9.mp4',
          'name': 'videobajadoIonic9'
        }];
        this.contador = 0;
        this.comprobarDescarga = [];
      }

      _createClass(DescargarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.items = this.ApiService.rutinaDescarga
          // console.log(this.items[0].name)
          this.maximo = this.items.length;
          this.descarga();
        }
      }, {
        key: "descarga",
        value: function descarga() {
          var _this = this;

          //Si la carpeta existe
          this.file.checkDir(this.file.externalRootDirectory, 'fittech_downloads').then(function (response) {
            var _loop = function _loop(i) {
              //Aca comprubea el nombre del archivo dentro del directorio
              _this.file.checkFile(_this.file.externalRootDirectory, 'fittech_downloads/' + _this.items[i]['name'] + '.mp4').then(function (resp) {
                console.log('el archivo ya existe dentro de la carpeta no hagas nada.', resp); //sumar al array

                _this.comprobarDescarga.push(true); //sumar descargas


                _this.contador++; //si todo estan descargados entonce mandalo directamente

                if (_this.comprobarDescarga.length === _this.items.length) {
                  _this.ruta.navigateByUrl('/calentamiento');
                }
              }).catch(function (err) {
                //aqui guarda el documento
                var fileTransfer = _this.Filetransfer.create();

                fileTransfer.download(_this.items[i]['url'], _this.file.externalRootDirectory + '/fittech_downloads/' + _this.items[i]['name'] + '.mp4').then(function (entry) {
                  console.log('file download response', entry); //sumar descargas

                  _this.contador++; //sumar al array

                  _this.comprobarDescarga.push(true); //comprobar si todo va bien y mandar


                  if (_this.comprobarDescarga.length === _this.items.length) {
                    _this.ruta.navigateByUrl('/calentamiento');
                  }
                }).catch(function (err) {
                  console.log('error in file download', err);
                });
              });
            };

            //Aca debera estar el Loop  
            for (var i = 0; i < _this.items.length; i++) {
              _loop(i);
            } //fin del loop


            console.log("LA CARPETA EXISTIA , Y no SOBREESCRIBIO la carpeta"); //Si la carpeta no existe
          }).catch(function (response) {
            //aqui crea la carpeta
            _this.file.createDir(_this.file.externalRootDirectory, 'fittech_downloads', false).then(function (response) {
              console.log('Directory created', response); //Aca debera estar el Loop  

              for (var i = 0; i < _this.items.length; i++) {
                //aqui guarda el documento
                var fileTransfer = _this.Filetransfer.create();

                fileTransfer.download(_this.items[i]['url'], _this.file.externalRootDirectory + '/fittech_downloads/' + _this.items[i]['name'] + '.mp4').then(function (entry) {
                  console.log('file download response', entry); //sumar descargas

                  _this.contador++; //sumar array

                  _this.comprobarDescarga.push(true); //comprobar si se han bajado todo


                  console.log(_this.comprobarDescarga.length); //Probar si esto sirve

                  if (_this.comprobarDescarga.length === _this.items.length) {
                    _this.ruta.navigateByUrl('/calentamiento');
                  }
                }).catch(function (err) {
                  console.log('error in file download', err);
                });
              } //fin del loop
              //aqi atrapa el error

            }).catch(function (err) {
              console.log('Could not create directory "fittech_downloads" ', err);
            });
          }); //Finaliza todo el ciclo
          // recurda que al ser asincronico pueda que cuando se active este a un no haya descargado
          //comprobar que todo sea true y mandarlo ala ventana singuiente
        }
      }]);

      return DescargarPage;
    }();

    DescargarPage.ctorParameters = function () {
      return [{
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    DescargarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-descargar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./descargar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/descargar/descargar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./descargar.page.scss */
      "./src/app/descargar/descargar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], DescargarPage);
    /***/
  }
}]);
//# sourceMappingURL=descargar-descargar-module-es5.js.map