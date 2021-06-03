(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rutina-entrenamiento-rutina-entrenamiento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rutina-entrenamiento/rutina-entrenamiento.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rutina-entrenamiento/rutina-entrenamiento.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\" class=\"btn-top\">\n  <ion-fab  vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" *ngIf=\"status != 'descanso'\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"confirmation()\" size=\"small\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab   vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" *ngIf=\"status == 'descanso'\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"confirmation2()\" size=\"small\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-buttons>\n\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  \n\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n \n</ion-header>\n\n<ion-content *ngIf=\"status == 'descanso'\" style=\"--background:black;\">\n  <ion-grid class=\"grid1\">\n    <ion-row>\n      <p class=\"ion-text-center titulo2\" style=\"margin-top: 0; margin-bottom: 0; padding-top: 0;\">Comienza en</p>\n      <p class=\"center\">{{zero}}{{timeLeft}}</p>\n      <p class=\"center do\">Tu siguiente ejercicio es: </p>\n      <p class=\"center do\" style=\"color: red;\">{{nombre }} </p>\n      <ion-col class=\"centerdo\" size=\"12\" style=\"padding: 0px;\">\n        <video autoplay loop width=\"100%\" class=\"videoReproductor\" poster=\"assets/img/videogif.gif\">\n          <source [src]= \"video2\" *ngIf=\"video2\" type=\"video/mp4\" />\n        </video>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -1rem;\">\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"grid2\" >\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\">\n      <ion-fab-button color=\"light\" (click)=\"atras_()\" >\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\">\n      <ion-fab-button color=\"light\" (click)=\"siguiente_()\" >\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <h1 class=\"titulodescanso\" style=\"margin-top: 10px !important;color: white;\">Descanso</h1>\n  </div>\n</ion-content>\n\n<ng-container *ngIf=\"status == 'rutina'\">\n\n  <ion-fab style=\"top: 45%;\" *ngIf=\"identificador == 'derecha'\"  horizontal=\"end\" vertical=\"center\" slot=\"fixed\">\n    <ion-badge color=\"danger\">Derecha</ion-badge>\n  </ion-fab>\n\n  <ion-fab  style=\"top: 45%;\" *ngIf=\"identificador == 'izquierda'\" horizontal=\"start\" vertical=\"center\" slot=\"fixed\">\n    <ion-badge color=\"danger\">Izquierda</ion-badge>\n  </ion-fab>\n\n\n\n\n<!-- #F4F3F1 -->\n\n<ion-content>\n  <video #myVideo  playsinline class=\"videoReproductor\"\n  width=\"100%\"\n  loop\n  muted=\"muted\" \n  poster=\"assets/img/videogif.gif\">\n    <source [src]= \"video\" *ngIf=\"video\" />\n  </video>\n  \n  <div class=\"contenedor\">\n    <div class=\"contenedor-cabezera\">\n      <p class=\"text-reloj\">¡De tu esfuerzo depende tu resultado, no pares!</p>\n    </div>\n\n    <div class=\"contenedor-cuerpo\">\n      <h2 class=\"text-reloj-titulo\">SECUENCIA <span style=\"color: red;\">{{secuencia}}</span></h2>\n      <h3 class=\"text-reloj-titulo\" style=\"margin-top: 5px;\">SERIE <span style=\"color: red;\">{{actual+1}}/{{total}}</span></h3>\n      <p class=\"reloj\">{{zero}}{{timeLeft}}</p>\n      <p class=\"segundos\">Segundos</p>\n    </div>\n  </div>\n    \n</ion-content>\n\n<ion-fab vertical=\"bottom\"   horizontal=\"start\" slot=\"fixed\"  *ngIf=\"ready\" class=\"ocultarElemento\">\n  <ion-fab-button color=\"dark\" (click)=\"atras()\" *ngIf=\"btn\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"   horizontal=\"end\" slot=\"fixed\"    *ngIf=\"ready\"   class=\"ocultarElemento\">\n  <!-- *ngIf=\"ready\" por si lo manda a poner de nuevo -->\n  <ion-fab-button color=\"dark\" (click)=\"siguiente()\" *ngIf=\"btn\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\" >\n  <ion-fab-button color=\"danger\" (click)=\"pauseTimer()\">\n    <ion-icon name=\"pause-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"!mostrar\">\n  <ion-fab-button color=\"danger\" (click)=\"playTimer()\">\n    <ion-icon name=\"play-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ng-container>");

/***/ }),

/***/ "./src/app/rutina-entrenamiento/rutina-entrenamiento-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/rutina-entrenamiento/rutina-entrenamiento-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RutinaEntrenamientoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinaEntrenamientoPageRoutingModule", function() { return RutinaEntrenamientoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rutina_entrenamiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutina-entrenamiento.page */ "./src/app/rutina-entrenamiento/rutina-entrenamiento.page.ts");




const routes = [
    {
        path: '',
        component: _rutina_entrenamiento_page__WEBPACK_IMPORTED_MODULE_3__["RutinaEntrenamientoPage"]
    }
];
let RutinaEntrenamientoPageRoutingModule = class RutinaEntrenamientoPageRoutingModule {
};
RutinaEntrenamientoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RutinaEntrenamientoPageRoutingModule);



/***/ }),

/***/ "./src/app/rutina-entrenamiento/rutina-entrenamiento.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/rutina-entrenamiento/rutina-entrenamiento.module.ts ***!
  \*********************************************************************/
/*! exports provided: RutinaEntrenamientoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinaEntrenamientoPageModule", function() { return RutinaEntrenamientoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rutina_entrenamiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rutina-entrenamiento-routing.module */ "./src/app/rutina-entrenamiento/rutina-entrenamiento-routing.module.ts");
/* harmony import */ var _rutina_entrenamiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rutina-entrenamiento.page */ "./src/app/rutina-entrenamiento/rutina-entrenamiento.page.ts");







let RutinaEntrenamientoPageModule = class RutinaEntrenamientoPageModule {
};
RutinaEntrenamientoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rutina_entrenamiento_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutinaEntrenamientoPageRoutingModule"]
        ],
        declarations: [_rutina_entrenamiento_page__WEBPACK_IMPORTED_MODULE_6__["RutinaEntrenamientoPage"]]
    })
], RutinaEntrenamientoPageModule);



/***/ }),

/***/ "./src/app/rutina-entrenamiento/rutina-entrenamiento.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/rutina-entrenamiento/rutina-entrenamiento.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.btn-top {\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  top: 65px;\n  left: 4px;\n}\n@media screen and (orientation: landscape) {\n  .btn-top {\n    top: 0px !important;\n  }\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (orientation: landscape) {\n  .cabezera {\n    display: none !important;\n  }\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 16em;\n}\n@media (max-height: 640px) {\n  .videoReproductor {\n    height: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 3rem;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 60%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 0.9rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 5rem;\n  height: 4rem;\n  background-color: black;\n  color: white;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n@media (max-height: 640px) {\n  .contenedor-cabezera {\n    height: 3em;\n  }\n}\n.titulo {\n  padding: 5px;\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.reloj {\n  margin: 2px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.text-reloj-titulo {\n  font-weight: 700;\n  margin: 0;\n}\n.text-reloj {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2rem;\n}\n@media (max-height: 640px) {\n  .text-reloj {\n    font-size: 1em;\n  }\n}\n.grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n.ion-text-center.titulo {\n  font-weight: 800;\n}\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 22px;\n  padding-top: 28px;\n}\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\nimg {\n  height: auto;\n  width: auto;\n}\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.ocultarElemento {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-name: hidebutton;\n          animation-name: hidebutton;\n}\n@-webkit-keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n.segundos {\n  margin: 0;\n  font-size: 1rem;\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnV0aW5hLWVudHJlbmFtaWVudG8vQzpcXFVzZXJzXFxlbG1lalxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXElvbmljXFxmaXR0ZWNoLWZyb250L3NyY1xcYXBwXFxydXRpbmEtZW50cmVuYW1pZW50b1xccnV0aW5hLWVudHJlbmFtaWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9ydXRpbmEtZW50cmVuYW1pZW50by9ydXRpbmEtZW50cmVuYW1pZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0xKO0FETEk7RUFLSjtJQU9PLG1CQUFBO0VDSEw7QUFDRjtBRE9BO0VBQ0EsaUJBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRHBCSTtFQWlCSjtJQVNRLHdCQUFBO0VDRk47QUFDRjtBRElBLFdBQUE7QUFVQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEQUk7RUFPSjtJQUtRLFlBQUE7SUFDQSxtQkFBQTtPQUFBLGdCQUFBO0VDUk47QUFDRjtBRGFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEYUM7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDVkw7QURjQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSxnQkFBQTtBQ1pKO0FEcENJO0VBcUNKO0lBYVEsV0FBQTtFQ1ZOO0FBQ0Y7QURjQztFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEw7QURjQztFQUNHLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDWEo7QURjQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQ1hKO0FEY0E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEaEVJO0VBd0VKO0lBS1EsY0FBQTtFQ1ROO0FBQ0Y7QURZQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEWUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRFlFO0VBQ0UsaUJBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNUTjtBRGNFO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEZUM7RUFDSSxnQkFBQTtBQ1pMO0FEY0M7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1hMO0FEYUM7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVkw7QURZQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1RMO0FEV0M7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNSTDtBRFdDO0VBR0UsWUFBQTtFQUNBLFdBQUE7QUNWSDtBRGFDO0VBQ0csOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNWSjtBRGFBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNWSjtBRGFBO0VBQ0k7SUFDQyxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1ZIO0VEYUU7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1hOO0VEY0U7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ1pOO0FBQ0Y7QURGQTtFQUNJO0lBQ0MsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNWSDtFRGFFO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNYTjtFRGNFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNaTjtBQUNGO0FEaUJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7SUFDQSw0QkFBQTtFQ2ZOO0VEaUJFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBQ0Esd0JBQUE7RUNmTjtBQUNGO0FEaUJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7SUFFQSw0QkFBQTtFQ2ZOO0VEaUJFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBRUEsd0JBQUE7RUNmTjtBQUNGO0FEaUJBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtBQ2ZKO0FEa0JBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2ZBIiwiZmlsZSI6InNyYy9hcHAvcnV0aW5hLWVudHJlbmFtaWVudG8vcnV0aW5hLWVudHJlbmFtaWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2dvKi9cbi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgQG1peGluIHBhbnRhbGxhLWFuY2hhIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4gIFxuLmJ0bi10b3B7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY1cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIEBpbmNsdWRlIHBhbnRhbGxhLWFuY2hhKCl7XG4gICAgICAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuLmNhYmV6ZXJhe1xubWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBAaW5jbHVkZSBwYW50YWxsYS1hbmNoYSgpe1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLypmaW4gbG9nbyovXG5cbkBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6NjQwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIFxuICB9XG5cbi8vIGFqdXN0YXIgaW1hZ2VuIGRlIGNhcmdhIGEgdmlkZW9cbi52aWRlb1JlcHJvZHVjdG9ye1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxNmVtO1xuICAgIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgfVxufVxuXG5cbi8vIGNvbnRlbmVkb3Jcbi5jb250ZW5lZG9ye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlOyBcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuIH1cblxuIC5jb250ZW5lZG9yLWN1ZXJwb3tcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICAgaGVpZ2h0OjYwJTsgXG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIG1hcmdpbi10b3A6IC45cmVtO1xuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICAvLyBjb250ZW5lZG9yIGNhYmV6ZXJhXG4uY29udGVuZWRvci1jYWJlemVyYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1cmVtO1xuICAgIGhlaWdodDo0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgfVxuIH1cbiBcbiBcbiAudGl0dWxvIHtcbiAgICAgcGFkZGluZzogNXB4O1xuICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiB9XG5cbiAucmVsb2p7XG4gICAgbWFyZ2luOiAycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGV4dC1yZWxvai10aXR1bG97XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LXJlbG9qe1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgQGluY2x1ZGUgdGVsZWZvbm8tcmVzcG9uc2l2bygpe1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG5cbi5ncmlkMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNEYzRjE7IFxuICAgIHBhZGRpbmc6IDBweDtcbiB9XG5cbiAgLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cbiAgXG4gIC5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuXG4gXG4gIC50aXR1bG9kZXNjYW5zb3tcbiAgICAgIGNvbG9yOiAjOTU5NTk1O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gXG4gXG4gLmlvbi10ZXh0LWNlbnRlci50aXR1bG8ge1xuICAgICBmb250LXdlaWdodDogODAwO1xuIH1cbiAuY2VudGVyIHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiB9XG4gLmlvbi10ZXh0LWNlbnRlci50aXR1bG8yIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgcGFkZGluZy10b3A6IDI4cHg7XG4gfVxuIC5jZW50ZXIuZG8ge1xuICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiB9XG4gLmNlbnRlcmRvIHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBtYXJnaW46IDAgYXV0bztcbiB9XG4gXG4gaW1ne1xuIC8vICAgaGVpZ2h0OiAxNTBweDtcbiAvLyAgIHdpZHRoOiAyNDBweDtcbiAgIGhlaWdodDogYXV0bztcbiAgIHdpZHRoOiBhdXRvO1xuIH1cblxuIC5hbmltYWNpb257XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aFxufVxuXG4ub2N1bHRhckVsZW1lbnRve1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGVidXR0b247XG59XG5cbkBrZXlmcmFtZXMgaGlkZWJ1dHRvbiB7XG4gICAgMCUge1xuICAgICBvcGFjaXR5OiAwO1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICAgIH1cblxuICAgIDkwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuXG5cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKVxuICAgIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KVxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgICB9XG59XG4uZmFkZUluUmlnaHR7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDtcbiAgICBhbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodFxufVxuXG4uc2VndW5kb3N7XG5tYXJnaW46IDA7XG5mb250LXNpemU6IDFyZW07XG5tYXJnaW4tdG9wOiAtMXJlbTsgICBcbn0iLCIvKmxvZ28qL1xuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5idG4tdG9wIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1cHg7XG4gIGxlZnQ6IDRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5idG4tdG9wIHtcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY2FiZXplcmEge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKmZpbiBsb2dvKi9cbi52aWRlb1JlcHJvZHVjdG9yIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2ZW07XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC52aWRlb1JlcHJvZHVjdG9yIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgfVxufVxuXG4uY29udGVuZWRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5jb250ZW5lZG9yLWN1ZXJwbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAwLjlyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVuZWRvci1jYWJlemVyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC5jb250ZW5lZG9yLWNhYmV6ZXJhIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlbG9qIHtcbiAgbWFyZ2luOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50ZXh0LXJlbG9qLXRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtcmVsb2oge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC50ZXh0LXJlbG9qIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG4uZ3JpZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGM0YxO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvZGVzY2Fuc28ge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uY2VudGVyLmRvIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jZW50ZXJkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hbmltYWNpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLm9jdWx0YXJFbGVtZW50byB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1uYW1lOiBoaWRlYnV0dG9uO1xufVxuXG5Aa2V5ZnJhbWVzIGhpZGVidXR0b24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbi5mYWRlSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG59XG5cbi5zZWd1bmRvcyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/rutina-entrenamiento/rutina-entrenamiento.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rutina-entrenamiento/rutina-entrenamiento.page.ts ***!
  \*******************************************************************/
/*! exports provided: RutinaEntrenamientoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutinaEntrenamientoPage", function() { return RutinaEntrenamientoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rutinas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rutinas.service */ "./src/app/rutinas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let RutinaEntrenamientoPage = class RutinaEntrenamientoPage {
    constructor(service, navCtrl, platform, alertController) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertController = alertController;
        this.rutinas = [];
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
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
            this.data = yield this.service.getRutina();
            const array1 = this.data['exercises'];
            array1.forEach(element => {
                if (element.side > 1) {
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
        this.rutinas = this.arraytemp.filter(value => value.stage === this.secuencia);
        this.final = this.data['exercises'].length;
        this.total = this.rutinas.length;
        this.stages = this.data['stages'];
    }
    /*   atras(){
        this.navCtrl.navigateRoot('/tabs/dashboard');
      } */
    startVideo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ready = false;
            this.setValues();
            this.identificador = this.rutinas[this.actual].mostrar;
            this.video = `${this.URL}/videos/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].url}`;
            console.log(this.video);
            this.mostrar = true;
            this.timeLeft = this.data['ratio_w'];
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
        this.btn = true;
        this.zero = null;
        this.tiemposegundo = setInterval(() => {
            if (this.timeLeft <= 10) {
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
            if (this.secuencia == this.stages && this.actual == this.total) {
                this.navCtrl.navigateRoot('/estiramientos');
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
            // this.imagen = `${this.URL}/imagenes/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].id}.jpg`;
            this.video2 = `${this.URL}/videos/${this.rutinas[this.actual].cod}/${this.rutinas[this.actual].url}`;
            console.log(this.video2);
            if (timerContinue) {
                this.timeLeft = timerContinue;
            }
            else {
                this.timeLeft = this.data['ratio_r'];
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
RutinaEntrenamientoPage.ctorParameters = () => [
    { type: _rutinas_service__WEBPACK_IMPORTED_MODULE_2__["RutinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myVideo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RutinaEntrenamientoPage.prototype, "txtVideo", void 0);
RutinaEntrenamientoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rutina-entrenamiento',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rutina-entrenamiento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rutina-entrenamiento/rutina-entrenamiento.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rutina-entrenamiento.page.scss */ "./src/app/rutina-entrenamiento/rutina-entrenamiento.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rutinas_service__WEBPACK_IMPORTED_MODULE_2__["RutinasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], RutinaEntrenamientoPage);



/***/ })

}]);
//# sourceMappingURL=rutina-entrenamiento-rutina-entrenamiento-module-es2015.js.map