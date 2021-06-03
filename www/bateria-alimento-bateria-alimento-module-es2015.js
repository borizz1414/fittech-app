(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateria-alimento-bateria-alimento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-alimento/bateria-alimento.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-alimento/bateria-alimento.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:-4.75rem;\" horizontal=\"start\" slot=\"fixed\"\n    class=\"animated fadeInUp delay-2s\">\n    <ion-fab-button style=\"--background:#ef4044\" (click)=\"devolver()\" size=\"small\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-buttons>\n\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding-bottom: 0;\" class=\"ion-padding ion-text-left titulo\">\n    Resumen Nutricional\n\n    <ion-fab (click)=\"tutorial()\" horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n      <ion-button color=\"danger\" size=\"small\" style=\"margin-bottom: 16px;\">Tutorial</ion-button>\n    </ion-fab>\n\n  </div>\n\n  <div *ngIf=\"nombre\" class=\"ion-padding ion-text-left titulo2\">\n    Hola {{nombre}}, estos son tus requerimientos nutricionales que deberías consumir cada día.\n  </div>\n\n  <div style=\"margin: 0 10px;\">\n    <div class=\"contenedorMenu\">\n      <div class=\"contenedorMenuItem\"\n        style=\"border-bottom-left-radius: 12px;border-top-left-radius: 12px;background:black;\">\n        <p style=\"color: white;\">Carbohidratos</p>\n        <ion-progress-bar class=\"carboP\" [value]=\"progressBar(carbo, totalFoods.total_carbo)\"\n          [ngClass]=\"{'complete': progressBar(carbo, totalFoods.total_carbo) == 1}\"\n          style=\"width: 90%;margin: 0 auto;\"></ion-progress-bar>\n        <ng-container>\n          <!-- *ngIf=\" carbo <= totalFoods.total_carbo \" -->\n          <p style=\"color: white;\">{{carbo?.toFixed()}}/{{totalFoods.total_carbo?.toFixed()}}gr</p>\n        </ng-container>\n        <!--        <ng-container *ngIf=\"carbo > totalFoods.total_carbo \">\n            <p style=\"color: white;\"> {{totalFoods.total_carbo.toFixed()}}/{{totalFoods.total_carbo.toFixed()}}  gr</p>\n          </ng-container> -->\n      </div>\n      <div class=\"contenedorMenuItem\" style=\"  background: #EF4044;\">\n        <p style=\"color: white;\">Proteína</p>\n        <ion-progress-bar style=\"width: 90%;margin: 0 auto;\" [value]=\"progressBar(protein, totalFoods.total_protein)\"\n          [ngClass]=\"{'complete': progressBar(protein, totalFoods.total_protein) == 1}\" class=\"proteP\">\n        </ion-progress-bar>\n        <ng-container>\n          <!-- *ngIf=\" protein <= totalFoods.total_protein \" -->\n          <p style=\"color: white;\">{{protein?.toFixed()}}/{{totalFoods.total_protein?.toFixed()}}gr</p>\n        </ng-container>\n        <!-- <ng-container *ngIf=\" protein > totalFoods.total_protein \">\n            <p style=\"color: white;\">{{totalFoods.total_protein.toFixed()}}/{{totalFoods.total_protein.toFixed()}}gr</p>\n          </ng-container> -->\n      </div>\n      <div class=\"contenedorMenuItem\"\n        style=\"border-bottom-right-radius: 12px;border-top-right-radius: 12px;background: grey;\">\n        <p style=\"color: white;\">Grasa</p>\n        <ion-progress-bar style=\"width: 90%;margin: 0 auto;\" [value]=\"progressBar(grasa, totalFoods.total_greases)\"\n          [ngClass]=\"{'complete': progressBar(grasa, totalFoods.total_greases) == 1}\" class=\"grasaP\">\n        </ion-progress-bar>\n        <ng-container>\n          <!-- *ngIf=\" grasa <= totalFoods.total_greases \" -->\n          <p style=\"color: white;\">{{grasa?.toFixed()}}/{{totalFoods.total_greases?.toFixed()}}gr</p>\n        </ng-container>\n        <!--  <ng-container *ngIf=\" grasa > totalFoods.total_greases \">\n              <p style=\"color: white;\">{{totalFoods.total_greases}}/{{totalFoods.total_greases}}gr</p>\n            </ng-container> -->\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <ion-grid style=\"padding-top: 1rem;\">\n    <ion-row>\n      <ion-col size=\"6\" *ngIf=\"validateFood(0)\">\n        <div *ngIf=\"validateFood(0)\" (click)=\"listado('Desayuno')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/desayuno.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Desayuno\n          </div>\n          <div class=\"ContenedorTarjetaIcono\" style=\"left: 80%;top: 80%;\">\n            <ion-icon name=\"create-sharp\" style=\"font-size: 24px;\n    background: white;\n    margin-top: 22px;\n    padding: 6px;\n    border-radius: 50%;\n    color: red !important;--ion-color-base: red !important;\n    text-align: center;\" color=\"dark\"></ion-icon>\n\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"!validateFood(0)\">\n        <div *ngIf=\"!validateFood(0)\" (click)=\"seleccion('Desayuno')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/desayuno.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Desayuno\n          </div>\n          <div class=\"ContenedorTarjetaIcono\">\n            <ion-icon name=\"add-circle-outline\" style=\"font-size: 35px; margin-top: 22px;\" color=\"dark\"></ion-icon>\n            <p style=\"margin: 0; \">Añadir</p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"validateFood(2)\">\n        <div *ngIf=\"validateFood(2)\" (click)=\"listado('Almuerzo')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/almuerzo.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Almuerzo\n          </div>\n          <div class=\"ContenedorTarjetaIcono\" style=\"left: 80%;top: 80%;\">\n            <ion-icon name=\"create-sharp\" style=\"font-size: 24px;\n  background: white;\n  margin-top: 22px;    padding:6px;\n  border-radius: 50%;    color: red !important;--ion-color-base: red !important;\n  text-align: center;\" color=\"dark\"></ion-icon>\n\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"!validateFood(2)\">\n        <div *ngIf=\"!validateFood(2)\" (click)=\"seleccion('Almuerzo')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/almuerzo.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Almuerzo\n          </div>\n          <div class=\"ContenedorTarjetaIcono\">\n            <ion-icon name=\"add-circle-outline\" style=\"font-size: 35px; margin-top: 22px;\" color=\"dark\"></ion-icon>\n            <p style=\"margin: 0;\">Añadir</p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"validateFood(1)\">\n        <div *ngIf=\"validateFood(1)\" (click)=\"listado('Snack')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/snack.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Snack\n          </div>\n          <div class=\"ContenedorTarjetaIcono\" style=\"left: 80%;top: 80%;\">\n            <ion-icon name=\"create-sharp\" style=\"font-size: 24px;\n    background: white;\n    margin-top: 22px;    padding:6px;\n    border-radius: 50%;    color: red !important;--ion-color-base: red !important;\n    text-align: center;\" color=\"dark\"></ion-icon>\n\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"!validateFood(1)\">\n        <div (click)=\"seleccion('Snack')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/snack.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Snack\n          </div>\n          <div class=\"ContenedorTarjetaIcono\" *ngIf=\"!validateFood(1)\">\n            <ion-icon name=\"add-circle-outline\" style=\"font-size: 35px; margin-top: 22px;\" color=\"dark\"></ion-icon>\n            <p style=\"margin: 0;\">Añadir</p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"validateFood(3)\">\n        <div *ngIf=\"validateFood(3)\" (click)=\"listado('Cena')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/cena.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Cena\n          </div>\n          <div class=\"ContenedorTarjetaIcono\" style=\"left: 80%;top: 80%;\">\n            <ion-icon name=\"create-sharp\" style=\"font-size: 24px;\n    background: white;\n    margin-top: 22px;    padding:6px;\n    border-radius: 50%;    color: red !important;--ion-color-base: red !important;\n    text-align: center;\" color=\"dark\"></ion-icon>\n\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"!validateFood(3)\">\n        <div *ngIf=\"!validateFood(3)\" (click)=\"seleccion('Cena')\" class=\"ContenedorTarjeta\"\n          style=\"background-image: url(./assets/img/cena.jpeg);\">\n          <div class=\"ContenedorTarjetaTitulo\">\n            Cena\n          </div>\n          <div class=\"ContenedorTarjetaIcono\">\n            <ion-icon name=\"add-circle-outline\" style=\"font-size: 35px; margin-top: 22px;\" color=\"dark\"></ion-icon>\n            <p style=\"margin: 0;\">Añadir</p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/bateria-alimento/bateria-alimento-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bateria-alimento/bateria-alimento-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BateriaAlimentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaAlimentoPageRoutingModule", function() { return BateriaAlimentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateria_alimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateria-alimento.page */ "./src/app/bateria-alimento/bateria-alimento.page.ts");




const routes = [
    {
        path: '',
        component: _bateria_alimento_page__WEBPACK_IMPORTED_MODULE_3__["BateriaAlimentoPage"]
    }
];
let BateriaAlimentoPageRoutingModule = class BateriaAlimentoPageRoutingModule {
};
BateriaAlimentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriaAlimentoPageRoutingModule);



/***/ }),

/***/ "./src/app/bateria-alimento/bateria-alimento.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/bateria-alimento/bateria-alimento.module.ts ***!
  \*************************************************************/
/*! exports provided: BateriaAlimentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaAlimentoPageModule", function() { return BateriaAlimentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateria_alimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateria-alimento-routing.module */ "./src/app/bateria-alimento/bateria-alimento-routing.module.ts");
/* harmony import */ var _bateria_alimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateria-alimento.page */ "./src/app/bateria-alimento/bateria-alimento.page.ts");







let BateriaAlimentoPageModule = class BateriaAlimentoPageModule {
};
BateriaAlimentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateria_alimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriaAlimentoPageRoutingModule"]
        ],
        declarations: [_bateria_alimento_page__WEBPACK_IMPORTED_MODULE_6__["BateriaAlimentoPage"]]
    })
], BateriaAlimentoPageModule);



/***/ }),

/***/ "./src/app/bateria-alimento/bateria-alimento.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/bateria-alimento/bateria-alimento.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 23px;\n  font-weight: 800;\n  /*   opacity: 0.7; */\n  margin-bottom: 0;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n}\n\n.contenedorMenuItem1 {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  background-color: black;\n  border-radius: 12px 0px 0px 12px;\n}\n\n.contenedorMenuItem2 {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  background-color: #EF4044;\n}\n\n.contenedorMenuItem3 {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  background-color: #959595;\n  border-radius: 0px 12px 12px 0px;\n}\n\n.tituloMenuItem {\n  color: white;\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n\n.ContenedorTarjeta {\n  width: 95%;\n  height: 200px;\n  background-color: #f1f1f1;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 15px;\n  background-position: center;\n  /* Center the image */\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.ContenedorTarjetaTitulo {\n  position: absolute;\n  top: 10%;\n  left: 40%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  background-color: #EF4044;\n  color: white;\n  margin: 1rem;\n  float: right;\n  border-radius: 6px;\n  padding: 5px;\n  width: 72px;\n  text-align: center;\n}\n\n.ContenedorTarjetaIcono {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.progress-bar1 {\n  --progress-background: red;\n  --background: white;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.progress-bar2 {\n  width: 80%;\n  margin: 0 auto;\n  --progress-background: black;\n  --background: grey;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.titulo2 {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYS1hbGltZW50by9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGJhdGVyaWEtYWxpbWVudG9cXGJhdGVyaWEtYWxpbWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhLWFsaW1lbnRvL2JhdGVyaWEtYWxpbWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRixvQkFBQTtFQUNFLGdCQUFBO0FDQUo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDSEo7O0FET0E7RUFFSSxtQkFBQTtVQUFBLE9BQUE7RUFFRCxxQkFBQTtFQUlDLGtCQUFBO0FDVEo7O0FEY0E7RUFFRSxtQkFBQTtVQUFBLE9BQUE7RUFJQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNmRjs7QURtQkE7RUFFRSxtQkFBQTtVQUFBLE9BQUE7RUFJQSxrQkFBQTtFQUNBLHlCQUFBO0FDcEJGOztBRHVCQTtFQUVFLG1CQUFBO1VBQUEsT0FBQTtFQUlBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ3hCRjs7QURpQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQzlCSjs7QURpQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUE2QixxQkFBQTtFQUM3Qiw0QkFBQTtFQUNBLHNCQUFBO0FDN0JKOztBRDhCSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM1Qk47O0FEOEJJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQzVCUjs7QURnQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDN0JGOztBRCtCQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUM1QkY7O0FEOEJBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQzNCRjs7QUQ2QkE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FDMUJGOztBRDRCQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7QUN6QkY7O0FENEJBO0VBQ0UsZUFBQTtBQ3pCRiIsImZpbGUiOiJzcmMvYXBwL2JhdGVyaWEtYWxpbWVudG8vYmF0ZXJpYS1hbGltZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dve1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAvKiAgIG9wYWNpdHk6IDAuNzsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbi8vICAgY29udGVuZWRvciBkZSBhbGltZW50b3Ncbi5jb250ZW5lZG9yTWVudXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFRjQwNDQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4wOSk7XG59XG5cbi8vIG9yaWdpbmFsXG4uY29udGVuZWRvck1lbnVJdGVte1xuICAgIC8vIGhhY2VybG8gdG9kbyBkZWwgbWlzbW8gdGFtYcOxb1xuICAgIGZsZXg6IDE7IFxuICAgIC8vIGVzcGFjaW8gZW50cmUgYW1ib3MgaXRlbXNcbiAgIC8qICBtYXJnaW46IDAgMTBweDsgKi9cbiAgICAvLyBjZW50cmFyXG4gIFxuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vLyBsb3MgZm9uZG8gZGlmZXJlbnRlXG4uY29udGVuZWRvck1lbnVJdGVtMXtcbiAgLy8gaGFjZXJsbyB0b2RvIGRlbCBtaXNtbyB0YW1hw7FvXG4gIGZsZXg6IDE7IFxuICAvLyBlc3BhY2lvIGVudHJlIGFtYm9zIGl0ZW1zXG4gIC8vIG1hcmdpbjogMCAxMHB4O1xuICAvLyBjZW50cmFyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMHB4IDBweCAxMnB4O1xuXG59XG5cbi5jb250ZW5lZG9yTWVudUl0ZW0ye1xuICAvLyBoYWNlcmxvIHRvZG8gZGVsIG1pc21vIHRhbWHDsW9cbiAgZmxleDogMTsgXG4gIC8vIGVzcGFjaW8gZW50cmUgYW1ib3MgaXRlbXNcbiAgLy8gbWFyZ2luOiAwIDEwcHg7XG4gIC8vIGNlbnRyYXJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0MDQ0O1xufVxuXG4uY29udGVuZWRvck1lbnVJdGVtM3tcbiAgLy8gaGFjZXJsbyB0b2RvIGRlbCBtaXNtbyB0YW1hw7FvXG4gIGZsZXg6IDE7IFxuICAvLyBlc3BhY2lvIGVudHJlIGFtYm9zIGl0ZW1zXG4gIC8vIG1hcmdpbjogMCAxMHB4O1xuICAvLyBjZW50cmFyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1OTU5NTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEycHggMTJweCAwcHg7XG5cbn1cblxuXG5cblxuXG5cbi50aXR1bG9NZW51SXRlbXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG9wYWNpdHk6IC45O1xufVxuXG4uQ29udGVuZWRvclRhcmpldGF7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICZUaXR1bG97XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwJTtcbiAgICAgIGxlZnQ6IDQwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLC01MCUpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VGNDA0NDsgIFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgd2lkdGg6IDcycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICZJY29ub3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgfVxufVxuXG4ucHJvZ3Jlc3MtYmFyMXtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJvZ3Jlc3MtYmFyMntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cbi5jYXJib1B7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnByb3RlUHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZ3Jhc2FQe1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb21wbGV0ZXtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IGdyZXk7XG59XG5cbi50aXR1bG8ye1xuICBmb250LXNpemU6IDE4cHg7XG59IiwiLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLyogICBvcGFjaXR5OiAwLjc7ICovXG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb250ZW5lZG9yTWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uY29udGVuZWRvck1lbnVJdGVtIHtcbiAgZmxleDogMTtcbiAgLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yTWVudUl0ZW0xIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwcHggMHB4IDEycHg7XG59XG5cbi5jb250ZW5lZG9yTWVudUl0ZW0yIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0MDQ0O1xufVxuXG4uY29udGVuZWRvck1lbnVJdGVtMyB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1OTU5NTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEycHggMTJweCAwcHg7XG59XG5cbi50aXR1bG9NZW51SXRlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uQ29udGVuZWRvclRhcmpldGEge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5Db250ZW5lZG9yVGFyamV0YVRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0MDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDcycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5Db250ZW5lZG9yVGFyamV0YUljb25vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyMSB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2dyZXNzLWJhcjIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4uY2FyYm9QIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wcm90ZVAge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdyYXNhUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29tcGxldGUge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnRpdHVsbzIge1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/bateria-alimento/bateria-alimento.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/bateria-alimento/bateria-alimento.page.ts ***!
  \***********************************************************/
/*! exports provided: BateriaAlimentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriaAlimentoPage", function() { return BateriaAlimentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nutricion.service */ "./src/app/services/nutricion.service.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");






let BateriaAlimentoPage = class BateriaAlimentoPage {
    constructor(service, ruta, serviceUser, loadingController, utilities) {
        this.service = service;
        this.ruta = ruta;
        this.serviceUser = serviceUser;
        this.loadingController = loadingController;
        this.utilities = utilities;
        this.menu = [];
        this.carbo = 0;
        this.grasa = 0;
        this.protein = 0;
        this.totalFoods = [];
    }
    ngOnInit() {
        this.getResume();
        this.getUser();
    }
    getUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const valor = yield this.serviceUser.obtenerUsuario();
            this.nombre = valor["user"].name;
        });
    }
    ionViewDidEnter() {
        this.getResume();
        this.getUser();
    }
    getResume() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*  this.presentLoading() */
            const valor = yield this.service.getResumes();
            if (valor == false) {
                /*  this.loadingController.dismiss() */
                this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error", "danger");
            }
            else {
                this.alimentos = null;
                this.totalFoods = null;
                this.menu = [];
                this.carbo = 0;
                this.grasa = 0;
                this.protein = 0;
                this.alimentos = valor;
                this.totalFoods = valor["Calories que dederia consumir al dia"];
                this.menu = valor["calorias que ha consumido en el dia"];
                this.menu.forEach((element) => {
                    console.log("sumatoria foreach", element.total_carbos);
                    this.carbo += element.total_carbos;
                    this.grasa += element.total_greases;
                    this.protein += element.total_proteins;
                });
                /*  this.loadingController.dismiss() */
                console.log("que recibo", valor);
            }
        });
    }
    validateFood(typeFood) {
        return this.menu.find((data) => data.type_food === typeFood);
    }
    seleccion(url) {
        this.ruta.navigateForward([`/alimentos-seleccion/${url}`]);
    }
    progressBar(data, total) {
        if ((data * 100) / total / 100 >= 1) {
            return 1;
        }
        else {
            return (data * 100) / total / 100;
        }
    }
    devolver() {
        this.ruta.navigateForward([`/tabs/dashboard`]);
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Por favor espere...",
            });
            yield loading.present();
        });
    }
    listado(url) {
        this.ruta.navigateForward([`/listadoalimento/${url}`]);
    }
    tutorial() {
        this.serviceUser.guardartutorial(false);
        this.ruta.navigateForward("tutorial-alimentacion");
    }
};
BateriaAlimentoPage.ctorParameters = () => [
    { type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__["NutricionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"] }
];
BateriaAlimentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-bateria-alimento",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateria-alimento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateria-alimento/bateria-alimento.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateria-alimento.page.scss */ "./src/app/bateria-alimento/bateria-alimento.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_nutricion_service__WEBPACK_IMPORTED_MODULE_2__["NutricionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_5__["ApiFitechService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])
], BateriaAlimentoPage);



/***/ })

}]);
//# sourceMappingURL=bateria-alimento-bateria-alimento-module-es2015.js.map