(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateriacalentamientoesperahome-bateriacalentamientoesperahome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid1\">\n  <ion-row >\n  \t<p class=\"ion-text-center titulo2\" *ngIf=\"mostrartitulo\" style=\"margin-top: 0; margin-bottom: 0; padding-top: 0;\">Comienza en!</p>\n    <p class=\"center\">0{{timeLeft}}</p>\n  \t<p class=\"center do\">Tu siguiente ejercicio es: </p>\n  \t<p class=\"center do\" style=\"color: red;\">{{nombre.name}} </p>\n    <ion-col class=\"centerdo\" size=\"8\" style=\"padding: 0px;\" >\n      <!-- https://via.placeholder.com/150 -->\n      <!-- http://fittech247.com/fittech/imagenes/{{ejercipro.cod}}/{{ejercipro.id}}.jpg -->\n      <img *ngIf=\"imagen\" [src]= \"imagen\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <!-- {{ejercipro.name}} -->\n       <!-- <p class=\"ion-text-center titulo\"  *ngIf=\"nombre\"> {{nombre.name}}</p>    -->\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n  <div class=\"grid2\">\n    <h1 class=\"titulodescanso\" style=\"margin-top: 0px !important;color: red;\">Descanso</h1>\n  </div>\n\n  <ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"redirigir()\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"atras()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: BateriacalentamientoesperahomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientoesperahomePageRoutingModule", function() { return BateriacalentamientoesperahomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateriacalentamientoesperahome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateriacalentamientoesperahome.page */ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.ts");




const routes = [
    {
        path: '',
        component: _bateriacalentamientoesperahome_page__WEBPACK_IMPORTED_MODULE_3__["BateriacalentamientoesperahomePage"]
    }
];
let BateriacalentamientoesperahomePageRoutingModule = class BateriacalentamientoesperahomePageRoutingModule {
};
BateriacalentamientoesperahomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriacalentamientoesperahomePageRoutingModule);



/***/ }),

/***/ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: BateriacalentamientoesperahomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientoesperahomePageModule", function() { return BateriacalentamientoesperahomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateriacalentamientoesperahome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateriacalentamientoesperahome-routing.module */ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome-routing.module.ts");
/* harmony import */ var _bateriacalentamientoesperahome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateriacalentamientoesperahome.page */ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.ts");







let BateriacalentamientoesperahomePageModule = class BateriacalentamientoesperahomePageModule {
};
BateriacalentamientoesperahomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateriacalentamientoesperahome_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriacalentamientoesperahomePageRoutingModule"]
        ],
        declarations: [_bateriacalentamientoesperahome_page__WEBPACK_IMPORTED_MODULE_6__["BateriacalentamientoesperahomePage"]]
    })
], BateriacalentamientoesperahomePageModule);



/***/ }),

/***/ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n\n.grid2 {\n  padding: 0px;\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\nion-content {\n  --background: black;\n}\n\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n\n.ion-text-center.titulo {\n  font-weight: 800;\n}\n\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 22px;\n  padding-top: 28px;\n}\n\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\n\nimg {\n  height: auto;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYWNhbGVudGFtaWVudG9lc3BlcmFob21lL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcYmF0ZXJpYWNhbGVudGFtaWVudG9lc3BlcmFob21lXFxiYXRlcmlhY2FsZW50YW1pZW50b2VzcGVyYWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhY2FsZW50YW1pZW50b2VzcGVyYWhvbWUvYmF0ZXJpYWNhbGVudGFtaWVudG9lc3BlcmFob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENDO0VBQ0ksWUFBQTtBQ0VMOztBRENFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VOOztBRENFO0VBQ0csbUJBQUE7QUNFTDs7QURDRTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFTjs7QURFQztFQUNJLGdCQUFBO0FDQ0w7O0FEQ0M7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VMOztBREFDO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dMOztBRERDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSUw7O0FERkM7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNLTDs7QURGQztFQUdFLFlBQUE7RUFDQSxXQUFBO0FDR0giLCJmaWxlIjoic3JjL2FwcC9iYXRlcmlhY2FsZW50YW1pZW50b2VzcGVyYWhvbWUvYmF0ZXJpYWNhbGVudGFtaWVudG9lc3BlcmFob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEYzRjE7IFxuICAgIHBhZGRpbmc6IDBweDtcbiB9XG4gLmdyaWQye1xuICAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiBcbiAgLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cbiAgXG4gIC5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBpb24tY29udGVudHtcbiAgICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgIFxuICB9XG4gXG4gIC50aXR1bG9kZXNjYW5zb3tcbiAgICAgIGNvbG9yOiAjOTU5NTk1O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gXG4gXG4gLmlvbi10ZXh0LWNlbnRlci50aXR1bG8ge1xuICAgICBmb250LXdlaWdodDogODAwO1xuIH1cbiAuY2VudGVyIHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiB9XG4gLmlvbi10ZXh0LWNlbnRlci50aXR1bG8yIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgcGFkZGluZy10b3A6IDI4cHg7XG4gfVxuIC5jZW50ZXIuZG8ge1xuICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiB9XG4gLmNlbnRlcmRvIHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBtYXJnaW46IDAgYXV0bztcbiB9XG4gXG4gaW1ne1xuIC8vICAgaGVpZ2h0OiAxNTBweDtcbiAvLyAgIHdpZHRoOiAyNDBweDtcbiAgIGhlaWdodDogYXV0bztcbiAgIHdpZHRoOiBhdXRvO1xuIH1cbiAiLCIuZ3JpZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGM0YxO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5ncmlkMiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnRpdHVsb2Rlc2NhbnNvIHtcbiAgY29sb3I6ICM5NTk1OTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uaW9uLXRleHQtY2VudGVyLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW9uLXRleHQtY2VudGVyLnRpdHVsbzIge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn1cblxuLmNlbnRlci5kbyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2VudGVyZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.ts ***!
  \***************************************************************************************/
/*! exports provided: BateriacalentamientoesperahomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientoesperahomePage", function() { return BateriacalentamientoesperahomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let BateriacalentamientoesperahomePage = class BateriacalentamientoesperahomePage {
    constructor(capturar, ApiService, ruta) {
        this.capturar = capturar;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        //sonido
        this.sonido = "../../../assets/sonido/reloj.mp3";
        this.sonido2 = "../../../assets/sonido/final.mp3";
        this.mostrartitulo = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //  parametros del id
            this.dataRecibida = this.capturar.snapshot.paramMap.get('id');
            console.log("parametro recibido", this.dataRecibida);
            this.contador = parseInt(this.dataRecibida) + 1;
            //pasar a mostrar los datos
            this.nombre = this.ApiService.calentamiento[this.contador];
            // this.nombre = this.ejercipro.name
            this.imagen = `${this.URL}/imagenes/${this.nombre.cod}/${this.nombre.id}.jpg`;
            // console.log(this.imagen)
            this.timeLeft = 5;
            this.startTimer();
        });
    }
    atras() {
        this.ruta.pop();
    }
    startTimer() {
        this.zero = null;
        this.tiemposegundo = setInterval(() => {
            if (this.timeLeft === 10) {
                console.log("activate");
                this.zero = 0;
            }
            if (this.timeLeft === 1) {
                this.playSonido(2);
            }
            if (this.timeLeft > 1 && this.timeLeft <= 5) {
                this.playSonido(1);
            }
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                this.timeLeft = 0;
            }
        }, 1000);
    }
    // startTimer() {
    //   this.tiemposegundo = setInterval(() => {
    //     // if(this.timeLeft <= 10){
    //     //   console.log("activate")
    //     //   this.zero = 0
    //     // } 
    //     this.mostrartitulo = true
    //     if(this.timeLeft > 1 && this.timeLeft < 5) {
    //         this.playSonido(1)
    //     }
    //     // if(this.timeLeft === 1) {
    //     //     this.playSonidoFinal()
    //     // }
    //     if(this.timeLeft > 0) {
    //       this.timeLeft--;
    //     } else {
    //       this.timeLeft = 0;
    //       this.redirigir()
    //     }
    //   },1000)
    // }
    redirigir() {
        clearInterval(this.tiemposegundo);
        this.ruta.navigateForward([`/bateriacalentamientohome/${this.contador}`]);
        this.pauseSonido();
    }
    playSonido(valor) {
        this.audio = new Audio();
        if (valor == 1) {
            this.audio.src = this.sonido;
        }
        else {
            this.audio.src = this.sonido2;
        }
        this.audio.load();
        this.audio.play();
    }
    // playSonidoFinal(){
    // this.audio = new Audio();
    // this.audio.src = this.sonido2;
    // this.audio.load();
    // this.audio.play();
    // }
    pauseSonido() {
        this.audio.pause();
    }
    ionViewDidLeave() {
        clearInterval(this.tiemposegundo);
        if (this.audio) {
            this.audio.pause();
        }
    }
};
BateriacalentamientoesperahomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
BateriacalentamientoesperahomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateriacalentamientoesperahome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateriacalentamientoesperahome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateriacalentamientoesperahome.page.scss */ "./src/app/bateriacalentamientoesperahome/bateriacalentamientoesperahome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], BateriacalentamientoesperahomePage);



/***/ })

}]);
//# sourceMappingURL=bateriacalentamientoesperahome-bateriacalentamientoesperahome-module-es2015.js.map