(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateriacalentamientohome-bateriacalentamientohome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientohome/bateriacalentamientohome.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientohome/bateriacalentamientohome.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n</ion-header>\n\n\n\n<!-- contenedor descanso -->\n<ion-content *ngIf=\"status == 'descanso'\" style=\"--background:black;\">\n  <ion-grid class=\"grid1\">\n    <ion-row>\n      <p class=\"ion-text-center titulo2\" style=\"margin-top: 0; margin-bottom: 0; padding-top: 0;\">Comienza en</p>\n      <p class=\"center\">0{{timeLeft}}</p>\n      <p class=\"center do\">Tu siguiente ejercicio es: </p>\n      <p class=\"center do\" style=\"color: red;\">{{nombre}} </p>\n      <ion-col class=\"centerdo\" size=\"12\" style=\"padding: 0px;\">\n        <video autoplay loop width=\"100%\"  poster=\"assets/img/videogif.gif\" class=\"videoReproductor\">\n          <source [src]= \"video2\" *ngIf=\"video2\" type=\"video/mp4\" />\n        </video>\n        <!-- <img *ngIf=\"imagen\" [src]=\"imagen\"> -->\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -1rem;\">\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"grid2\">\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\">\n      <ion-fab-button color=\"light\" (click)=\"atras_()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\" >\n      <ion-fab-button color=\"light\" (click)=\"siguiente_()\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <h1 class=\"titulodescanso\" style=\"margin-top: 10px !important;color: white;\">Descanso</h1>\n  </div>\n</ion-content>\n\n\n\n<!-- contenedor rutina -->\n<ng-container *ngIf=\"status == 'rutina'\">\n  <!-- Video -->\n  <ion-content>\n    <video #myVideo  playsinline class=\"videoReproductor\"\n    width=\"100%\"\n    loop\n    muted=\"muted\" \n    poster=\"assets/img/videogif.gif\">\n      <source [src]= \"video\" *ngIf=\"video\" />\n    </video>\n    \n    <div class=\"contenedor\">\n      <div class=\"contenedor-cabezera\">\n        <!-- <h2 class=\"text-reloj-titulo\">SECUENCIA {{secuencia}}</h2> -->\n        <p style=\"font-size: 1rem; text-align: center;\" class=\"text-reloj-titulo\">El calentamiento es primordial para evitar lesiones y elevar tu frecuencia cardíaca, no pares</p>\n      </div>\n      <div class=\"contenedor-cuerpo\">\n        <h3 class=\"text-reloj\">SERIE <span style=\"color: red;\">{{actual+1}}/{{total}}</span></h3>\n        <p class=\"reloj\">{{zero}}{{timeLeft}}</p>\n        <p class=\"segundos\">Segundos</p>\n      </div>\n    </div>\n      \n  </ion-content>\n\n  <ion-fab vertical=\"bottom\"   horizontal=\"start\" slot=\"fixed\" *ngIf=\"ready\" class=\"ocultarElemento\">\n    <ion-fab-button color=\"dark\" (click)=\"atras()\" *ngIf=\"btn\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-fab vertical=\"bottom\"   horizontal=\"end\" slot=\"fixed\"   *ngIf=\"ready\"  class=\"ocultarElemento\">\n    <ion-fab-button color=\"dark\" (click)=\"siguiente()\" *ngIf=\"btn\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\" >\n    <ion-fab-button color=\"danger\" (click)=\"pauseTimer()\">\n      <ion-icon name=\"pause-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"!mostrar\">\n    <ion-fab-button color=\"danger\" (click)=\"playTimer()\">\n      <ion-icon name=\"play-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </ng-container>");

/***/ }),

/***/ "./src/app/bateriacalentamientohome/bateriacalentamientohome-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/bateriacalentamientohome/bateriacalentamientohome-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BateriacalentamientohomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientohomePageRoutingModule", function() { return BateriacalentamientohomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateriacalentamientohome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateriacalentamientohome.page */ "./src/app/bateriacalentamientohome/bateriacalentamientohome.page.ts");




const routes = [
    {
        path: '',
        component: _bateriacalentamientohome_page__WEBPACK_IMPORTED_MODULE_3__["BateriacalentamientohomePage"]
    }
];
let BateriacalentamientohomePageRoutingModule = class BateriacalentamientohomePageRoutingModule {
};
BateriacalentamientohomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriacalentamientohomePageRoutingModule);



/***/ }),

/***/ "./src/app/bateriacalentamientohome/bateriacalentamientohome.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/bateriacalentamientohome/bateriacalentamientohome.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BateriacalentamientohomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientohomePageModule", function() { return BateriacalentamientohomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateriacalentamientohome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateriacalentamientohome-routing.module */ "./src/app/bateriacalentamientohome/bateriacalentamientohome-routing.module.ts");
/* harmony import */ var _bateriacalentamientohome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateriacalentamientohome.page */ "./src/app/bateriacalentamientohome/bateriacalentamientohome.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let BateriacalentamientohomePageModule = class BateriacalentamientohomePageModule {
};
BateriacalentamientohomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _bateriacalentamientohome_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriacalentamientohomePageRoutingModule"]
        ],
        declarations: [_bateriacalentamientohome_page__WEBPACK_IMPORTED_MODULE_6__["BateriacalentamientohomePage"]]
    })
], BateriacalentamientohomePageModule);



/***/ }),

/***/ "./src/app/bateriacalentamientohome/bateriacalentamientohome.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/bateriacalentamientohome/bateriacalentamientohome.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (orientation: landscape) {\n  .cabezera {\n    display: none !important;\n  }\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 16em;\n}\n@media (max-height: 640px) {\n  .videoReproductor {\n    height: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 4rem;\n  height: 4rem;\n  background-color: black;\n  color: white;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.contenedor-cuerpo {\n  width: 100%;\n  max-height: 70%;\n  height: 60%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 0.5rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.titulo {\n  padding: 5px;\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.reloj {\n  margin: 2px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.text-reloj-titulo {\n  font-weight: 700;\n  margin: 0;\n}\n.text-reloj {\n  margin: 0;\n  font-size: 1.5rem;\n  text-align: center;\n}\n.grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n.grid2 {\n  padding: 0px;\n}\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n.ion-text-center.titulo {\n  font-weight: 800;\n}\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.ion-text-center.titulo2 {\n  width: 100%;\n  font-size: 22px;\n  padding-top: 28px;\n}\n.center.do {\n  margin-top: 0px;\n  font-weight: 400;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n.centerdo {\n  text-align: center;\n  margin: 0 auto;\n}\nimg {\n  height: auto;\n  width: auto;\n}\n.animacion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(200px);\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n.ocultarElemento {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-name: hidebutton;\n          animation-name: hidebutton;\n}\n@-webkit-keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes hidebutton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  90% {\n    opacity: 0;\n    -webkit-transform: translateY(150px);\n            transform: translateY(150px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.segundos {\n  margin: 0;\n  font-size: 1rem;\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYWNhbGVudGFtaWVudG9ob21lL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcYmF0ZXJpYWNhbGVudGFtaWVudG9ob21lXFxiYXRlcmlhY2FsZW50YW1pZW50b2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhY2FsZW50YW1pZW50b2hvbWUvYmF0ZXJpYWNhbGVudGFtaWVudG9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRFFBO0VBQ0EsaUJBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFBJO0VBS0o7SUFTUSx3QkFBQTtFQ0hOO0FBQ0Y7QURLQSxXQUFBO0FBV0E7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNaSjtBREFJO0VBU0o7SUFLUSxZQUFBO0lBQ0EsbUJBQUE7T0FBQSxnQkFBQTtFQ1ZOO0FBQ0Y7QURlQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDWko7QURnQkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNiSjtBRGdCQztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNiTDtBRGlCQztFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDZEw7QURpQkM7RUFDRyxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEaUJBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FDZEo7QURpQkE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEaUJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDZEo7QURnQkM7RUFDSSxZQUFBO0FDYkw7QURnQkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNiSjtBRGdCRTtFQUNFLGlCQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDYk47QURpQkU7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZE47QURrQkM7RUFDSSxnQkFBQTtBQ2ZMO0FEaUJDO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNkTDtBRGdCQztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNiTDtBRGVDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDWkw7QURjQztFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ1hMO0FEY0M7RUFHRSxZQUFBO0VBQ0EsV0FBQTtBQ2JIO0FEZ0JDO0VBQ0csOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNiSjtBRGdCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0lBQ0EsNEJBQUE7RUNiTjtFRGVFO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBQ0Esd0JBQUE7RUNiTjtBQUNGO0FEZUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtJQUVBLDRCQUFBO0VDYk47RURlRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUVBLHdCQUFBO0VDYk47QUFDRjtBRGVBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNiSjtBRGdCQTtFQUNJO0lBQ0MsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNiSDtFRGdCRTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDZE47RURpQkU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ZOO0FBQ0Y7QURDQTtFQUNJO0lBQ0MsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNiSDtFRGdCRTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDZE47RURpQkU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ZOO0FBQ0Y7QURrQkU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvYmF0ZXJpYWNhbGVudGFtaWVudG9ob21lL2JhdGVyaWFjYWxlbnRhbWllbnRvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmxvZ28qL1xuLmxvZ297XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICBAbWl4aW4gcGFudGFsbGEtYW5jaGEge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiAgXG4uY2FiZXplcmF7XG5tYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBpbmNsdWRlIHBhbnRhbGxhLWFuY2hhKCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG4vKmZpbiBsb2dvKi9cbkBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6NjQwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cblxuXG5cbi8vIGFqdXN0YXIgaW1hZ2VuIGRlIGNhcmdhIGEgdmlkZW9cbi52aWRlb1JlcHJvZHVjdG9ye1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxNmVtO1xuICAgIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgIG9iamVjdC1maXQ6IGZpbGw7IFxuICAgIH1cbn1cblxuXG4vLyBjb250ZW5lZG9yXG4uY29udGVuZWRvcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTsgXG4gfVxuXG4gLy8gY29udGVuZWRvciBjYWJlemVyYVxuLmNvbnRlbmVkb3ItY2FiZXplcmF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNHJlbTtcbiAgICBoZWlnaHQ6NHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gfVxuXG4gLmNvbnRlbmVkb3ItY3VlcnBve1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgbWF4LWhlaWdodDogNzAlO1xuICAgICBoZWlnaHQ6NjAlOyBcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gXG4gXG4gLnRpdHVsbyB7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gfVxuXG4gLnJlbG9qe1xuICAgIG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRleHQtcmVsb2otdGl0dWxve1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1yZWxvantcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZDF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGM0YxOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gfVxuIC5ncmlkMntcbiAgICAgcGFkZGluZzogMHB4O1xuICB9XG4gXG4gIC5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG4gIFxuICAuY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcblxuICAudGl0dWxvZGVzY2Fuc297XG4gICAgICBjb2xvcjogIzk1OTU5NTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuIFxuIFxuIC5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiB9XG4gLmNlbnRlciB7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICBmb250LXdlaWdodDogODAwO1xuICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gfVxuIC5pb24tdGV4dC1jZW50ZXIudGl0dWxvMiB7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBmb250LXNpemU6IDIycHg7XG4gICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuIH1cbiAuY2VudGVyLmRvIHtcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBmb250LXNpemU6IDIycHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gfVxuIC5jZW50ZXJkbyB7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgbWFyZ2luOiAwIGF1dG87XG4gfVxuIFxuIGltZ3tcbiAvLyAgIGhlaWdodDogMTUwcHg7XG4gLy8gICB3aWR0aDogMjQwcHg7XG4gICBoZWlnaHQ6IGF1dG87XG4gICB3aWR0aDogYXV0bztcbiB9XG5cbiAuYW5pbWFjaW9ue1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGhcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0e1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweClcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKVxuICAgIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMHB4KVxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMClcbiAgICB9XG59XG4uZmFkZUluUmlnaHR7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDtcbiAgICBhbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodFxufVxuXG4ub2N1bHRhckVsZW1lbnRve1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGVidXR0b247XG59XG5cbkBrZXlmcmFtZXMgaGlkZWJ1dHRvbiB7XG4gICAgMCUge1xuICAgICBvcGFjaXR5OiAwO1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICAgIH1cblxuICAgIDkwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuXG4gIC5zZWd1bmRvc3tcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IC0xcmVtOyAgIFxuICAgIH0iLCIvKmxvZ28qL1xuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY2FiZXplcmEge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKmZpbiBsb2dvKi9cbi52aWRlb1JlcHJvZHVjdG9yIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2ZW07XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC52aWRlb1JlcHJvZHVjdG9yIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgfVxufVxuXG4uY29udGVuZWRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yLWNhYmV6ZXJhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3ItY3VlcnBvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXR1bG8ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmVsb2oge1xuICBtYXJnaW46IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRleHQtcmVsb2otdGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1yZWxvaiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjNGMTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZ3JpZDIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvZGVzY2Fuc28ge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIudGl0dWxvMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uY2VudGVyLmRvIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jZW50ZXJkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hbmltYWNpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4uZmFkZUluUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xufVxuXG4ub2N1bHRhckVsZW1lbnRvIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLW5hbWU6IGhpZGVidXR0b247XG59XG5cbkBrZXlmcmFtZXMgaGlkZWJ1dHRvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5zZWd1bmRvcyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bateriacalentamientohome/bateriacalentamientohome.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bateriacalentamientohome/bateriacalentamientohome.page.ts ***!
  \***************************************************************************/
/*! exports provided: BateriacalentamientohomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriacalentamientohomePage", function() { return BateriacalentamientohomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rutinas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rutinas.service */ "./src/app/rutinas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let BateriacalentamientohomePage = class BateriacalentamientohomePage {
    constructor(service, navCtrl, platform, alertController) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertController = alertController;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.rutinas = [];
        this.status = 'rutina';
        this.secuencia = 1;
        this.actual = 0;
        this.mostrar = true;
        this.sonido = "../../../assets/sonido/reloj.mp3";
        this.sonido2 = "../../../assets/sonido/campana.mp3";
        this.data = [];
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
            this.data = yield this.service.getCalentamiento();
            this.setValues();
            this.startVideo();
        });
    }
    setValues() {
        this.final = this.data['ejercicios Calentamiento'].length;
        this.total = this.data['ejercicios Calentamiento'].length;
    }
    startVideo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ready = false;
            this.setValues();
            this.video = `${this.URL}/videos/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].url}`;
            this.mostrar = true;
            this.timeLeft = 30;
            var b = setInterval(() => {
                if (this.txtVideo.nativeElement.readyState === 4) {
                    this.txtVideo.nativeElement.play();
                    this.ready = true;
                    //cronometro
                    clearInterval(b);
                    this.startTimer();
                }
            }, 1500);
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
        this.txtVideo.nativeElement.pause();
        this.mostrar = false;
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
            //mandar el timmer de 5segundo
            this.timeLeft = 5;
        }
        else {
            this.actual++;
            console.log('Actual', this.actual);
            console.log('total', this.total);
            console.log('Rutina', this.data);
            if (this.actual == 4) {
                clearInterval(this.tiemposegundo);
                this.tiemposegundo = null;
                this.navCtrl.navigateRoot('/bateriacalentamientofinalizar');
            }
            else if (this.actual == this.total) {
                this.secuencia++;
                this.actual = 0;
                this.setValues();
                clearInterval(this.tiemposegundo);
                this.timerDescanse();
                //mandar el timmer de 5segundo
                this.timeLeft = 5;
                this.status = 'descanso';
            }
            else {
                clearInterval(this.tiemposegundo);
                this.timerDescanse();
                //mandar el timmer de 5segundo
                this.timeLeft = 5;
                this.status = 'descanso';
            }
        }
    }
    atras() {
        if (this.actual < 1) {
            clearInterval(this.tiemposegundo);
            this.navCtrl.pop();
        }
        else {
            clearInterval(this.tiemposegundo);
            this.actual = this.actual - 1;
            this.timerDescanse();
            //mandar el timmer de 5segundo
            this.timeLeft = 5;
            this.status = 'descanso';
        }
    }
    timerDescanse() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zero = null;
            // this.imagen = `${this.URL}/imagenes/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].id}.jpg`;
            this.video2 = `${this.URL}/videos/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].url}`;
            this.tiemposegundo = setInterval(() => {
                if (this.timeLeft >= 1) {
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
        this.status = 'rutina';
        this.startVideo();
    }
    siguiente_() {
        clearInterval(this.tiemposegundo);
        this.status = 'rutina';
        this.startVideo();
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
                            if (this.status == 'descanso') {
                                this.timerDescanse();
                            }
                            else {
                                this.playTimer();
                            }
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
BateriacalentamientohomePage.ctorParameters = () => [
    { type: _rutinas_service__WEBPACK_IMPORTED_MODULE_2__["RutinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myVideo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BateriacalentamientohomePage.prototype, "txtVideo", void 0);
BateriacalentamientohomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateriacalentamientohome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateriacalentamientohome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriacalentamientohome/bateriacalentamientohome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateriacalentamientohome.page.scss */ "./src/app/bateriacalentamientohome/bateriacalentamientohome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rutinas_service__WEBPACK_IMPORTED_MODULE_2__["RutinasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], BateriacalentamientohomePage);



/***/ })

}]);
//# sourceMappingURL=bateriacalentamientohome-bateriacalentamientohome-module-es2015.js.map