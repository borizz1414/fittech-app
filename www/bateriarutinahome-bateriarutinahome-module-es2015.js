(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateriarutinahome-bateriarutinahome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutinahome/bateriarutinahome.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutinahome/bateriarutinahome.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<!-- Logo incluido ante no estaba -->\n\n\n<!-- #F4F3F1 -->\n\n<ion-content>\n  <video #myVideo  playsinline \n  (loadedmetadata)=\"onMetadata($event, video)\"\n  width=\"100%\"\n  loop\n  poster=\"assets/img/videogif.gif\">\n    <source [src]= \"video\" *ngIf=\"video\" />\n  </video>\n\n  <div class=\"contenedor\">\n\n    <div class=\"contenedor-cuerpo\">\n      <h2 class=\"text-reloj-titulo\">SECUENCIA {{secuencia}}</h2>\n      <h3 class=\"text-reloj-titulo\">SERIE {{contador}}/{{serie}}</h3>\n      <p class=\"reloj\">{{zero}}{{timeLeft}}</p>\n      <p class=\"text-reloj\">¡De tu esfuerzo depende tu resultado,no pares!</p>\n    </div>\n  </div>\n    \n</ion-content>\n\n<!--\n<div class=\"ion-grid1\" style=\"background-color:rgb(6, 72, 255);\" >\n  <ion-row>\n    <ion-col size=\"12\">\n      <p class=\"ion-text-center titulo\">Test de capacidad</p>\n      <p class=\"ion-text-center titulo\">{{nombre.name}}</p>\n       <p class=\"ion-text-center titulo\">Ejercicio {{numero}} de {{final}}</p>\n    </ion-col>\n  </ion-row>\n</div>\n\n <div class=\"ion-grid2\" style=\"background-color:rgb(255, 14, 6);\" >\n  <p class=\"centrartiempo\">00:{{timeLeft}}</p>\n</div> -->\n\n\n\n\n<ion-fab vertical=\"bottom\"  *ngIf=\"timeLeft <=27\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\" *ngIf=\"btn\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\" *ngIf=\"timeLeft <=27\"  horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"siguiente()\" *ngIf=\"btn\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"pauseTimer()\">\n    <ion-icon name=\"pause-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\"*ngIf=\"!mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"playTimer()\">\n    <ion-icon name=\"play-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n\n\n");

/***/ }),

/***/ "./src/app/bateriarutinahome/bateriarutinahome-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bateriarutinahome/bateriarutinahome-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BateriarutinahomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriarutinahomePageRoutingModule", function() { return BateriarutinahomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateriarutinahome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateriarutinahome.page */ "./src/app/bateriarutinahome/bateriarutinahome.page.ts");




const routes = [
    {
        path: '',
        component: _bateriarutinahome_page__WEBPACK_IMPORTED_MODULE_3__["BateriarutinahomePage"]
    }
];
let BateriarutinahomePageRoutingModule = class BateriarutinahomePageRoutingModule {
};
BateriarutinahomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriarutinahomePageRoutingModule);



/***/ }),

/***/ "./src/app/bateriarutinahome/bateriarutinahome.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/bateriarutinahome/bateriarutinahome.module.ts ***!
  \***************************************************************/
/*! exports provided: BateriarutinahomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriarutinahomePageModule", function() { return BateriarutinahomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateriarutinahome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateriarutinahome-routing.module */ "./src/app/bateriarutinahome/bateriarutinahome-routing.module.ts");
/* harmony import */ var _bateriarutinahome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateriarutinahome.page */ "./src/app/bateriarutinahome/bateriarutinahome.page.ts");







let BateriarutinahomePageModule = class BateriarutinahomePageModule {
};
BateriarutinahomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateriarutinahome_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriarutinahomePageRoutingModule"]
        ],
        declarations: [_bateriarutinahome_page__WEBPACK_IMPORTED_MODULE_6__["BateriarutinahomePage"]]
    })
], BateriarutinahomePageModule);



/***/ }),

/***/ "./src/app/bateriarutinahome/bateriarutinahome.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/bateriarutinahome/bateriarutinahome.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n/*fin logo*/\n.contenedor {\n  width: 100%;\n  height: 100%;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 60%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 0.5rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.titulo {\n  padding: 5px;\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.reloj {\n  margin: 2px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.text-reloj-titulo {\n  font-weight: 700;\n  margin: 0;\n}\n.text-reloj {\n  margin: 0;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYXJ1dGluYWhvbWUvQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxiYXRlcmlhcnV0aW5haG9tZVxcYmF0ZXJpYXJ1dGluYWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhcnV0aW5haG9tZS9iYXRlcmlhcnV0aW5haG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURFQTtFQUNBLGlCQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDQSxXQUFBO0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0M7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRkw7QURNQztFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEw7QURNQztFQUNHLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQ0hKO0FETUE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2JhdGVyaWFydXRpbmFob21lL2JhdGVyaWFydXRpbmFob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbi5jYWJlemVyYXtcbm1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4vKmZpbiBsb2dvKi9cblxuLy8gYWp1c3RhciBpbWFnZW4gZGUgY2FyZ2EgYSB2aWRlb1xuXG4vLyBjb250ZW5lZG9yXG4uY29udGVuZWRvcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTsgXG4gfVxuXG4gLmNvbnRlbmVkb3ItY3VlcnBve1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgbWF4LWhlaWdodDogNzAlO1xuICAgICBoZWlnaHQ6NjAlOyBcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gXG4gXG4gLnRpdHVsbyB7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gfVxuXG4gLnJlbG9qe1xuICAgIG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRleHQtcmVsb2otdGl0dWxve1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1yZWxvantcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iLCIvKmxvZ28qL1xuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qZmluIGxvZ28qL1xuLmNvbnRlbmVkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVuZWRvci1jdWVycG8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdHVsbyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yZWxvaiB7XG4gIG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGV4dC1yZWxvai10aXR1bG8ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LXJlbG9qIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bateriarutinahome/bateriarutinahome.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/bateriarutinahome/bateriarutinahome.page.ts ***!
  \*************************************************************/
/*! exports provided: BateriarutinahomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriarutinahomePage", function() { return BateriarutinahomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let BateriarutinahomePage = class BateriarutinahomePage {
    constructor(capturar, ApiService, ruta, platform, alertController) {
        this.capturar = capturar;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.platform = platform;
        this.alertController = alertController;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.mostrar = true;
        this.win = window;
        this.sonido = "../../../assets/sonido/reloj.mp3";
        this.sonido2 = "../../../assets/sonido/final.mp3";
        this.btn = false;
        this.contador = 1;
        this.secuencia_ = 1;
        // SE SUBCRIBE CUANDO LA RUTINA ES PAUSADA
        this.pausarApp = this.platform.pause.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pauseTimer();
        }));
        // SE SUBCRIBE CUANDO LA RUTINA SE REANUDA
        this.ReanudarAPP = this.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alerta();
        }));
    }
    ionViewDidEnter() {
        if (this.ApiService.secuencia === this.secuencia) {
            this.ApiService.contadorRutinaSumar(1);
            this.sumatorio = this.ApiService.contadorRutina;
        }
        else {
            this.ApiService.contadorRutina = 0;
            this.ApiService.contadorRutinaSumar(1);
            this.sumatorio = this.ApiService.contadorRutina;
            this.ApiService.secuencia = this.secuencia;
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //  aca vas hacer la logica para que no se pierda la referencia de los datos
            console.log(this.ApiService.rutina);
            this.dataRecibida = this.capturar.snapshot.paramMap.get('id');
            //cantidad de ejericio faltante
            this.numero = parseInt(this.dataRecibida) + 1;
            // restara
            this.restar = parseInt(this.dataRecibida) - 1;
            //comprobar longitud de la serie de ejercicio
            this.final = this.ApiService.rutina;
            this.final = this.final.length;
            //pasar a mostrar los datos
            this.nombre = this.ApiService.rutina[this.dataRecibida];
            console.log(this.nombre);
            // secuencia del ejercicio
            this.secuencia = this.nombre.stage;
            //logica para encontrar la cantidad de ejercicio que pertenecen a dicha secuencia
            this.serie = this.ApiService.rutina;
            this.serie = this.serie.filter(value => value.stage === this.secuencia);
            this.serie = this.serie.length;
            this.capturar.queryParams.subscribe(params => {
                let data = params["count"];
                let secuence = params["secuence"];
                console.log('SECUENCIA_', this.secuencia_);
                console.log('CONTADOR_', this.contador);
                if (data)
                    this.contador = data;
                if (secuence)
                    this.secuencia_ = secuence;
            });
            if (this.secuencia_ < this.secuencia) {
                this.contador = 1;
                this.secuencia_ = this.secuencia;
            }
            if (this.contador == 0) {
                this.contador = this.serie;
            }
            if (this.contador > this.serie) {
                this.contador = 1;
            }
            console.log('SECUENCIA', this.secuencia_);
            console.log('CONTADOR', this.contador);
            // los videos
            this.video = `${this.URL}/videos/${this.nombre.cod}/${this.nombre.url}`;
            console.log(this.video);
            var b = setInterval(() => {
                console.log(this.txtVideo.nativeElement.readyState);
                if (this.txtVideo.nativeElement.readyState === 4) {
                    console.log(this.txtVideo.nativeElement.readyState);
                    //This block of code is triggered when the video is loaded
                    //your code goes here
                    this.txtVideo.nativeElement.play();
                    //cronometro
                    this.startTimer();
                    //stop checking every half second
                    clearInterval(b);
                }
            }, 500);
        });
    }
    //SE OBTIENE LA DURACION DEL VIDEO
    onMetadata(e, video) {
        console.log('metadata: ', e);
        console.log('cargado: ', e.target.readyState);
        // this.timeLeft = parseInt(e.target.duration)
        //tiempo del ejercicio
        // this.timeLeft =  this.recuperarRutina['ratio_r']
        this.timeLeft = this.ApiService.ratio;
    }
    // SE LANZA ALA PANTALLA CORRESPONDIENTE 
    redirigir() {
        if (this.numero >= this.final) {
            this.tiempo = setTimeout(() => {
                clearInterval(this.tiemposegundo);
                this.pauseSonido();
                this.ruta.navigateRoot("percepcionentrenamiento");
            }, 1000);
        }
        else {
            clearInterval(this.tiemposegundo);
            this.pauseSonido();
            let navigationExtras = {
                queryParams: {
                    count: this.contador,
                    secuence: this.secuencia_
                }
            };
            this.ruta.navigateRoot([`/bateriarutinaesperahome/${this.dataRecibida}`], navigationExtras);
        }
    }
    ionViewDidLeave() {
        clearInterval(this.tiemposegundo);
        if (this.audio) {
            this.audio.pause();
        }
    }
    ngOnDestroy() {
        clearInterval(this.tiemposegundo);
        if (this.audio) {
            this.audio.pause();
        }
    }
    //CONOMETRO
    startTimer() {
        this.btn = true;
        this.tiemposegundo = setInterval(() => {
            if (this.timeLeft <= 10) {
                console.log("activate");
                this.zero = 0;
            }
            if (this.timeLeft >= 1 && this.timeLeft < 10) {
                this.playSonido();
            }
            // if(this.timeLeft === 1) {
            //     this.playSonidoFinal()
            // }
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                this.timeLeft = 0;
                this.redirigir();
                this.txtVideo.nativeElement.pause();
            }
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.tiemposegundo);
        this.mostrar = false;
        this.txtVideo.nativeElement.pause();
    }
    playTimer() {
        this.startTimer();
        this.mostrar = true;
        this.txtVideo.nativeElement.play();
    }
    playSonido() {
        this.audio = new Audio();
        this.audio.src = this.sonido;
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
    // mensaje de reanudar
    alerta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Deseas reanudar el video?',
                message: 'el video comenzara desde cero de nuevo',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('no hacer nada, el usuario le dara en play al video');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            // reset al contador / matas el contador anterior / llamas uno nuevo
                            this.timeLeft = this.ApiService.ratio;
                            clearInterval(this.tiemposegundo);
                            this.zero = null;
                            this.playTimer();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // cierra la subcripcion
    ionViewWillLeave() {
        console.log("cerrar la supcripcion");
        clearInterval(this.tiemposegundo);
        if (this.audio) {
            this.audio.pause();
        }
        this.ReanudarAPP.unsubscribe();
        this.pausarApp.unsubscribe();
    }
    atras() {
        clearInterval(this.tiemposegundo);
        let navigationExtras = {
            queryParams: {
                count: this.contador,
                secuence: this.secuencia_,
                restar: this.restar
            }
        };
        if (this.contador != 1 && this.secuencia != 1) {
            this.contador--;
            this.ruta.navigateForward([`/bateriarutinaesperahome/${this.restar}`], navigationExtras);
        }
        else {
            this.ruta.navigateRoot([`/calentamiento-info`]);
        }
    }
    siguiente() {
        clearInterval(this.tiemposegundo);
        let navigationExtras = {
            queryParams: {
                count: this.contador,
                secuence: this.secuencia_,
                restar: this.restar
            }
        };
        this.ruta.navigateForward([`/bateriarutinaesperahome/${this.numero - 1}`], navigationExtras);
    }
};
BateriarutinahomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myVideo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BateriarutinahomePage.prototype, "txtVideo", void 0);
BateriarutinahomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateriarutinahome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateriarutinahome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutinahome/bateriarutinahome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateriarutinahome.page.scss */ "./src/app/bateriarutinahome/bateriarutinahome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], BateriarutinahomePage);



/***/ })

}]);
//# sourceMappingURL=bateriarutinahome-bateriarutinahome-module-es2015.js.map