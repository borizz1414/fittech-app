(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateria-estiramientos-bateria-estiramientos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-estiramientos/bateria-estiramientos.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-estiramientos/bateria-estiramientos.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\"  class=\"btn-top\">\n  <ion-fab  vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" *ngIf=\"status != 'descanso'\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"confirmation()\" size=\"small\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" *ngIf=\"status == 'descanso'\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"confirmation2()\" size=\"small\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-buttons>\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n\n</ion-header>\n\n<ion-content *ngIf=\"status == 'descanso'\" style=\"--background:black;\">\n  <ion-grid class=\"grid1\">\n    <ion-row>\n      <p class=\"ion-text-center titulo2\" style=\"margin-top: 0; margin-bottom: 0; padding-top: 0;\">Comienza en</p>\n      <p class=\"center\">0{{timeLeft}}</p>\n      <p class=\"center do\">Tu siguiente estiramiento es: </p>\n      <p class=\"center do\" style=\"color: red;\">{{nombre }} </p>\n      <ion-col class=\"centerdo\" size=\"12\" style=\"padding: 0px;\">\n        <img [src]= \"video2\" *ngIf=\"video2\" alt=\"\">\n       <!--  <video autoplay loop width=\"100%\" class=\"videoReproductor\" poster=\"assets/img/videogif.gif\">\n          <source [src]= \"video2\" *ngIf=\"video2\" type=\"video/mp4\" />\n        </video> -->\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -1rem;\">\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"grid2\" >\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\">\n      <ion-fab-button color=\"light\" (click)=\"atras_()\" >\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\">\n      <ion-fab-button color=\"light\" (click)=\"siguiente_()\" >\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <h1 class=\"titulodescanso\" style=\"margin-top: 10px !important;color: white;\">Descanso</h1>\n  </div>\n</ion-content>\n\n<ng-container *ngIf=\"status == 'rutina'\">\n\n  <ion-fab style=\"top: 45%;\" *ngIf=\"identificador == 'derecha'\"  horizontal=\"end\" vertical=\"center\" slot=\"fixed\">\n    <ion-badge color=\"danger\">Derecha</ion-badge>\n  </ion-fab>\n\n  <ion-fab  style=\"top: 45%;\" *ngIf=\"identificador == 'izquierda'\" horizontal=\"start\" vertical=\"center\" slot=\"fixed\">\n    <ion-badge color=\"danger\">Izquierda</ion-badge>\n  </ion-fab>\n\n  \n\n<video #myVideo  playsinline class=\"videoReproductor\"\nwidth=\"100%\"\nloop\nmuted=\"muted\" \nposter=\"assets/img/videogif.gif\">\n  <source [src]= \"video\" *ngIf=\"video\" />\n</video>\n\n<!-- #F4F3F1 -->\n\n<ion-content>\n\n  <div class=\"contenedor\">\n    <div class=\"contenedor-cabezera\">\n      <p class=\"text-reloj\">¡De tu esfuerzo depende tu resultado, no pares!</p>\n    </div>\n\n    <div class=\"contenedor-cuerpo\">\n     <!--  <h2 class=\"text-reloj-titulo\">SECUENCIA <span style=\"color: red;\">{{secuencia}}</span></h2> -->\n      <!-- <h3 class=\"text-reloj-titulo\" style=\"margin-top: 5px;\">SERIE <span style=\"color: red;\">{{actual+1}}/{{total}}</span></h3> -->\n      <p class=\"reloj\">{{zero}}{{timeLeft}}</p>\n      <p class=\"segundos\">Segundos</p>\n    </div>\n  </div>\n    \n</ion-content>\n\n<ion-fab vertical=\"bottom\"   horizontal=\"start\" slot=\"fixed\"  *ngIf=\"ready\" class=\"ocultarElemento\">\n  <ion-fab-button color=\"dark\" (click)=\"atras()\" *ngIf=\"btn\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"   horizontal=\"end\" slot=\"fixed\"    *ngIf=\"ready\"   class=\"ocultarElemento\">\n  <!-- *ngIf=\"ready\" por si lo manda a poner de nuevo -->\n  <ion-fab-button color=\"dark\" (click)=\"siguiente()\" *ngIf=\"btn\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\" >\n  <ion-fab-button color=\"danger\" (click)=\"pauseTimer()\">\n    <ion-icon name=\"pause-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"!mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"playTimer()\">\n    <ion-icon name=\"play-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ng-container>");

/***/ }),

/***/ "./src/app/bateria-estiramientos/bateria-estiramientos-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/bateria-estiramientos/bateria-estiramientos-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BateriaEstiramientosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaEstiramientosPageRoutingModule", function() { return BateriaEstiramientosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateria_estiramientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateria-estiramientos.page */ "./src/app/bateria-estiramientos/bateria-estiramientos.page.ts");




const routes = [
    {
        path: '',
        component: _bateria_estiramientos_page__WEBPACK_IMPORTED_MODULE_3__["BateriaEstiramientosPage"]
    }
];
let BateriaEstiramientosPageRoutingModule = class BateriaEstiramientosPageRoutingModule {
};
BateriaEstiramientosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriaEstiramientosPageRoutingModule);



/***/ }),

/***/ "./src/app/bateria-estiramientos/bateria-estiramientos.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bateria-estiramientos/bateria-estiramientos.module.ts ***!
  \***********************************************************************/
/*! exports provided: BateriaEstiramientosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaEstiramientosPageModule", function() { return BateriaEstiramientosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateria_estiramientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateria-estiramientos-routing.module */ "./src/app/bateria-estiramientos/bateria-estiramientos-routing.module.ts");
/* harmony import */ var _bateria_estiramientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateria-estiramientos.page */ "./src/app/bateria-estiramientos/bateria-estiramientos.page.ts");







let BateriaEstiramientosPageModule = class BateriaEstiramientosPageModule {
};
BateriaEstiramientosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateria_estiramientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriaEstiramientosPageRoutingModule"]
        ],
        declarations: [_bateria_estiramientos_page__WEBPACK_IMPORTED_MODULE_6__["BateriaEstiramientosPage"]]
    })
], BateriaEstiramientosPageModule);



/***/ }),

/***/ "./src/app/bateria-estiramientos/bateria-estiramientos.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/bateria-estiramientos/bateria-estiramientos.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.btn-top {\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  top: 65px;\n  left: 4px;\n}\n@media screen and (orientation: landscape) {\n  .btn-top {\n    top: 0px !important;\n  }\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (orientation: landscape) {\n  .cabezera {\n    display: none !important;\n  }\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 16em;\n}\n@media (max-height: 640px) {\n  .videoReproductor {\n    height: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 3rem;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 60%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 0.9rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 5rem;\n  height: 4rem;\n  background-color: black;\n  color: white;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n@media (max-height: 640px) {\n  .contenedor-cabezera {\n    height: 3em;\n  }\n}\n.titulo {\n  padding: 5px;\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.reloj {\n  margin: 2px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.text-reloj-titulo {\n  font-weight: 700;\n  margin: 0;\n}\n.text-reloj {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2rem;\n}\n@media (max-height: 640px) {\n  .text-reloj {\n    font-size: 1em;\n  }\n}\n.grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n.ion-text-center.titulo {\n  font-weight: 800;\n}\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 22px;\n  padding-top: 28px;\n}\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\nimg {\n  height: auto;\n  width: auto;\n}\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.ocultarElemento {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-name: hidebutton;\n          animation-name: hidebutton;\n}\n@-webkit-keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n.segundos {\n  margin: 0;\n  font-size: 1rem;\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYS1lc3RpcmFtaWVudG9zL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcYmF0ZXJpYS1lc3RpcmFtaWVudG9zXFxiYXRlcmlhLWVzdGlyYW1pZW50b3MucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhLWVzdGlyYW1pZW50b3MvYmF0ZXJpYS1lc3RpcmFtaWVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDTEo7QURMSTtFQUtKO0lBT08sbUJBQUE7RUNITDtBQUNGO0FETUE7RUFDQSxpQkFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hKO0FEcEJJO0VBZ0JKO0lBU1Esd0JBQUE7RUNETjtBQUNGO0FER0EsV0FBQTtBQVVBO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURESTtFQU9KO0lBS1EsWUFBQTtJQUNBLG1CQUFBO09BQUEsZ0JBQUE7RUNQTjtBQUNGO0FEWUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVEo7QURZQztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNUTDtBRGFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLGdCQUFBO0FDWEo7QURyQ0k7RUFxQ0o7SUFhUSxXQUFBO0VDVE47QUFDRjtBRGFDO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWTDtBRGFDO0VBQ0csc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNWSjtBRGFBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FDVko7QURhQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7QURqRUk7RUF3RUo7SUFLUSxjQUFBO0VDUk47QUFDRjtBRFdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDUko7QURXRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1JOO0FEYUU7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVk47QURjQztFQUNJLGdCQUFBO0FDWEw7QURhQztFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVkw7QURZQztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNUTDtBRFdDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUkw7QURVQztFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ1BMO0FEVUM7RUFHRSxZQUFBO0VBQ0EsV0FBQTtBQ1RIO0FEWUM7RUFDRyw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RKO0FEWUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ1RKO0FEWUE7RUFDSTtJQUNDLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDVEg7RURZRTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDVk47RURhRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDWE47QUFDRjtBREhBO0VBQ0k7SUFDQyxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1RIO0VEWUU7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1ZOO0VEYUU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ1hOO0FBQ0Y7QURnQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUNBLDRCQUFBO0VDZE47RURnQkU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSx3QkFBQTtFQ2ROO0FBQ0Y7QURnQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUVBLDRCQUFBO0VDZE47RURnQkU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFFQSx3QkFBQTtFQ2ROO0FBQ0Y7QURnQkE7RUFDSSxtQ0FBQTtFQUNBLDJCQUFBO0FDZEo7QURpQkE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZEEiLCJmaWxlIjoic3JjL2FwcC9iYXRlcmlhLWVzdGlyYW1pZW50b3MvYmF0ZXJpYS1lc3RpcmFtaWVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIEBtaXhpbiBwYW50YWxsYS1hbmNoYSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG4uYnRuLXRvcHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjVweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgQGluY2x1ZGUgcGFudGFsbGEtYW5jaGEoKXtcbiAgICAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiAgXG4uY2FiZXplcmF7XG5tYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBpbmNsdWRlIHBhbnRhbGxhLWFuY2hhKCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG4vKmZpbiBsb2dvKi9cblxuQG1peGluIHRlbGVmb25vLXJlc3BvbnNpdm8ge1xuICAgIEBtZWRpYSAobWF4LWhlaWdodDo2NDBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgXG4gIH1cblxuLy8gYWp1c3RhciBpbWFnZW4gZGUgY2FyZ2EgYSB2aWRlb1xuLnZpZGVvUmVwcm9kdWN0b3J7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDE2ZW07XG4gICAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgICAgICBoZWlnaHQ6YXV0bztcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICB9XG59XG5cblxuLy8gY29udGVuZWRvclxuLmNvbnRlbmVkb3J7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7IFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gfVxuXG4gLmNvbnRlbmVkb3ItY3VlcnBve1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgbWF4LWhlaWdodDogNzAlO1xuICAgICBoZWlnaHQ6NjAlOyBcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgbWFyZ2luLXRvcDogLjlyZW07XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgIC8vIGNvbnRlbmVkb3IgY2FiZXplcmFcbi5jb250ZW5lZG9yLWNhYmV6ZXJhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDVyZW07XG4gICAgaGVpZ2h0OjRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICB9XG4gfVxuIFxuIFxuIC50aXR1bG8ge1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICBmb250LXdlaWdodDogODAwO1xuIH1cblxuIC5yZWxvantcbiAgICBtYXJnaW46IDJweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50ZXh0LXJlbG9qLXRpdHVsb3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRleHQtcmVsb2p7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBAaW5jbHVkZSB0ZWxlZm9uby1yZXNwb25zaXZvKCl7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuLmdyaWQxe1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y0RjNGMTsgXG4gICAgcGFkZGluZzogMHB4O1xuIH1cblxuICAubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG5cbiBcbiAgLnRpdHVsb2Rlc2NhbnNve1xuICAgICAgY29sb3I6ICM5NTk1OTU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiBcbiBcbiAuaW9uLXRleHQtY2VudGVyLnRpdHVsbyB7XG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gfVxuIC5jZW50ZXIge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuIH1cbiAuaW9uLXRleHQtY2VudGVyLnRpdHVsbzIge1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBwYWRkaW5nLXRvcDogMjhweDtcbiB9XG4gLmNlbnRlci5kbyB7XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuIH1cbiAuY2VudGVyZG8ge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIG1hcmdpbjogMCBhdXRvO1xuIH1cbiBcbiBpbWd7XG4gLy8gICBoZWlnaHQ6IDE1MHB4O1xuIC8vICAgd2lkdGg6IDI0MHB4O1xuICAgaGVpZ2h0OiBhdXRvO1xuICAgd2lkdGg6IGF1dG87XG4gfVxuXG4gLmFuaW1hY2lvbntcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoXG59XG5cbi5vY3VsdGFyRWxlbWVudG97XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tbmFtZTogaGlkZWJ1dHRvbjtcbn1cblxuQGtleWZyYW1lcyBoaWRlYnV0dG9uIHtcbiAgICAwJSB7XG4gICAgIG9wYWNpdHk6IDA7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gICAgfVxuXG4gICAgOTAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1MHB4KTtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5cblxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KVxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApXG4gICAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5SaWdodHtcbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKVxuICAgIH1cbn1cbi5mYWRlSW5SaWdodHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJblJpZ2h0O1xuICAgIGFuaW1hdGlvbi1uYW1lOmZhZGVJblJpZ2h0XG59XG5cbi5zZWd1bmRvc3tcbm1hcmdpbjogMDtcbmZvbnQtc2l6ZTogMXJlbTtcbm1hcmdpbi10b3A6IC0xcmVtOyAgIFxufSIsIi8qbG9nbyovXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmJ0bi10b3Age1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjVweDtcbiAgbGVmdDogNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmJ0bi10b3Age1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jYWJlemVyYSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qZmluIGxvZ28qL1xuLnZpZGVvUmVwcm9kdWN0b3Ige1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTZlbTtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNjQwcHgpIHtcbiAgLnZpZGVvUmVwcm9kdWN0b3Ige1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvYmplY3QtZml0OiBmaWxsO1xuICB9XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmNvbnRlbmVkb3ItY3VlcnBvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDAuOXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250ZW5lZG9yLWNhYmV6ZXJhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDVyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNjQwcHgpIHtcbiAgLmNvbnRlbmVkb3ItY2FiZXplcmEge1xuICAgIGhlaWdodDogM2VtO1xuICB9XG59XG5cbi50aXR1bG8ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmVsb2oge1xuICBtYXJnaW46IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRleHQtcmVsb2otdGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1yZWxvaiB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNjQwcHgpIHtcbiAgLnRleHQtcmVsb2oge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5cbi5ncmlkMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjE7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG9kZXNjYW5zbyB7XG4gIGNvbG9yOiAjOTU5NTk1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlci50aXR1bG8ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlci50aXR1bG8yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDI4cHg7XG59XG5cbi5jZW50ZXIuZG8ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNlbnRlcmRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmFuaW1hY2lvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4ub2N1bHRhckVsZW1lbnRvIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLW5hbWU6IGhpZGVidXR0b247XG59XG5cbkBrZXlmcmFtZXMgaGlkZWJ1dHRvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuLmZhZGVJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbn1cblxuLnNlZ3VuZG9zIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/bateria-estiramientos/bateria-estiramientos.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bateria-estiramientos/bateria-estiramientos.page.ts ***!
  \*********************************************************************/
/*! exports provided: BateriaEstiramientosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaEstiramientosPage", function() { return BateriaEstiramientosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rutinas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rutinas.service */ "./src/app/rutinas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");






const URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let BateriaEstiramientosPage = class BateriaEstiramientosPage {
    constructor(service, navCtrl, platform, alertController) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertController = alertController;
        this.rutinas = [];
        this.status = 'rutina';
        this.secuencia = 1;
        this.actual = 0;
        this.mostrar = true;
        this.sonido = "../../../assets/sonido/reloj.mp3";
        this.sonido2 = "../../../assets/sonido/campana.mp3";
        this.data = [];
        this.arraytemp = [];
        // SE SUBCRIBE CUANDO LA RUTINA ES PAUSADA
        this.pausarApp = this.platform.pause.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pauseTimer();
        }));
        // SE SUBCRIBE CUANDO LA RUTINA SE REANUDA
        this.ReanudarAPP = this.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alerta();
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.rutinas = yield this.service.getEstiramientos();
            // CODIGO QUE REPITE CICLO
            const array1 = this.rutinas['Estiramiento'];
            array1.forEach(element => {
                if (element.side < 2) {
                    const objetoClonado = Object.assign({}, element);
                    objetoClonado.mostrar = 'derecha';
                    const objetoClonado2 = Object.assign({}, element);
                    objetoClonado2.mostrar = 'izquierda';
                    this.arraytemp.push(objetoClonado);
                    this.arraytemp.push(objetoClonado2);
                }
                else {
                    this.arraytemp.push(element);
                }
            });
            console.log(this.arraytemp);
            this.setValues();
            this.startVideo();
        });
    }
    setValues() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.final = this.arraytemp.length;
            this.total = this.arraytemp.length;
            this.stages = this.data['stages'];
        });
    }
    /*   atras(){
        this.navCtrl.navigateRoot('/tabs/dashboard');
      } */
    startVideo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zero = null;
            this.ready = false;
            this.setValues();
            this.identificador = this.arraytemp[this.actual].mostrar;
            this.rutinas = this.arraytemp;
            this.video = `${URL}/videos/estiramientos/${this.rutinas[this.actual].link}`;
            console.log(this.video);
            this.mostrar = true;
            this.timeLeft = this.rutinas[this.actual].duration;
            var b = setInterval(() => {
                console.log(this.txtVideo.nativeElement.readyState);
                if (this.txtVideo.nativeElement.readyState === 4) {
                    this.txtVideo.nativeElement.play();
                    this.ready = true;
                    //cronometro
                    clearInterval(b);
                    this.startTimer();
                }
            }, 800);
        });
    }
    startTimer() {
        this.zero = null;
        this.btn = true;
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
                this.siguiente();
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
    siguiente() {
        if (this.actual == this.total) {
            this.actual = 0;
            this.secuencia++;
            clearInterval(this.tiemposegundo);
            this.timerDescanse();
            this.status = 'descanso';
        }
        else {
            this.actual++;
            console.log('Actual', this.actual);
            console.log('total', this.total);
            console.log('Rutina', this.rutinas);
            if (this.actual === this.total) {
                this.navCtrl.navigateRoot('/percepcionentrenamiento');
            }
            else if (this.actual == this.total) {
                this.secuencia++;
                this.actual = 0;
                this.setValues();
                clearInterval(this.tiemposegundo);
                this.timerDescanse();
                this.status = 'descanso';
            }
            else {
                clearInterval(this.tiemposegundo);
                this.timerDescanse();
                this.status = 'descanso';
            }
        }
    }
    atras() {
        if (this.actual < 1 && this.secuencia <= 1) {
            clearInterval(this.tiemposegundo);
            this.navCtrl.pop();
        }
        else {
            clearInterval(this.tiemposegundo);
            this.timerDescanse();
            this.status = 'descanso';
        }
    }
    timerDescanse(timerContinue = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zero = null;
            // this.imagen = `${URL}/imagenes/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].id}.jpg`;
            this.video2 = `${URL}/imagenes/estiramientos/${this.rutinas[this.actual].id}.jpg`;
            console.log(this.video2);
            if (timerContinue) {
                this.timeLeft = timerContinue;
            }
            else {
                this.timeLeft = 5;
            }
            this.tiemposegundo = setInterval(() => {
                if (this.timeLeft <= 10) {
                    console.log("activate");
                    this.zero = 0;
                }
                if (this.timeLeft >= 1 && this.timeLeft < 5) {
                    this.playSonido(1);
                }
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                }
                else {
                    this.timeLeft = 0;
                    this.siguiente_();
                }
            }, 1000);
        });
    }
    atras_() {
        clearInterval(this.tiemposegundo);
        console.log(this.actual);
        console.log(this.secuencia);
        if (this.actual == 0 && this.secuencia > 1) {
            this.secuencia--;
            this.setValues();
            this.actual = this.total - 1;
            console.log(this.secuencia, this.actual);
            clearInterval(this.tiemposegundo);
            this.status = 'rutina';
            this.startVideo();
        }
        else {
            if (this.actual != 0) {
                this.actual--;
                this.status = 'rutina';
                this.startVideo();
            }
            else if (this.secuencia > 1) {
                this.secuencia--;
                this.setValues();
                this.actual = this.total - 1;
                this.status = 'rutina';
                this.startVideo();
            }
        }
    }
    siguiente_() {
        clearInterval(this.tiemposegundo);
        this.status = 'rutina';
        this.startVideo();
    }
    confirmation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pauseTimer();
            const alert = yield this.alertController.create({
                message: '<h2>Si finalizas aquí no contará la sesión<br>¿seguro quieres finalizar?</h2>',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: (blah) => {
                            this.playTimer();
                        }
                    }, {
                        text: 'Si',
                        cssClass: 'confirmButton',
                        handler: () => {
                            clearInterval(this.tiemposegundo);
                            this.timeLeft = -1;
                            this.navCtrl.navigateRoot("tabs/dashboard");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmation2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            clearInterval(this.tiemposegundo);
            const alert = yield this.alertController.create({
                header: 'La sesión ha sido pausada',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: 'Continuar',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: (blah) => {
                            this.timerDescanse(this.timeLeft);
                        }
                    }, {
                        text: 'Finalizar',
                        cssClass: 'confirmButton',
                        handler: () => {
                            this.navCtrl.navigateRoot("tabs/dashboard");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // mensaje de reanudar
    alerta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'La sesión ha sido pausada',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: 'Continuar',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: (blah) => {
                            this.playTimer();
                        }
                    }, {
                        text: 'Finalizar',
                        cssClass: 'confirmButton',
                        handler: () => {
                            // mensaje confirmacion
                            this.confirmarSalida();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // mensaje de reanudar
    confirmarSalida() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Si finalizas aquí no contará la sesión ¿seguro quieres finalizar?',
                cssClass: 'customMensaje1',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'cancelButton',
                        handler: (blah) => {
                            if (this.status == 'descanso') {
                                this.siguiente_();
                            }
                            else {
                                this.playTimer();
                            }
                            ;
                        }
                    }, {
                        text: 'Si',
                        cssClass: 'confirmButton',
                        handler: () => {
                            clearInterval(this.tiemposegundo);
                            this.navCtrl.navigateRoot("tabs/dashboard");
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
};
BateriaEstiramientosPage.ctorParameters = () => [
    { type: _rutinas_service__WEBPACK_IMPORTED_MODULE_2__["RutinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myVideo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BateriaEstiramientosPage.prototype, "txtVideo", void 0);
BateriaEstiramientosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateria-estiramientos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateria-estiramientos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-estiramientos/bateria-estiramientos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateria-estiramientos.page.scss */ "./src/app/bateria-estiramientos/bateria-estiramientos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rutinas_service__WEBPACK_IMPORTED_MODULE_2__["RutinasService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], BateriaEstiramientosPage);



/***/ })

}]);
//# sourceMappingURL=bateria-estiramientos-bateria-estiramientos-module-es2015.js.map