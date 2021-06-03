(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bateriarutina-bateriarutina-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutina/bateriarutina.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutina/bateriarutina.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid style=\"background-color:#F4F3F1; padding: 0px;\" >\n  <ion-row >\n    <ion-col size=\"12\" style=\"padding: 0px;\" >\n      <img src=\"assets/img/pressbanca.jpg\"/>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n       <p class=\"ion-text-center titulo\">{{nombre}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"ion-grid2\">\n\n  <ion-row class=\"ion-row2\">\n\n    <div *ngIf=\"evaluar === 0\">\n      <ion-col size=\"12\">\n        <h2 class=\"ion-text-center\"> Repeticiones x {{repeticion}}</h2>\n        <h2 class=\"ion-text-center\"> Peso : {{peso}}</h2>\n      </ion-col>\n    </div>\n\n    <div *ngIf=\"evaluar === 2\">\n      <ion-col size=\"12\">\n        <h2 class=\"ion-text-center sui\"> 00:30</h2>\n      </ion-col>\n    </div>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button color=\"light\" (click)=\"atras()\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"center\" slot=\"fixed\" *ngIf=\"mostrar\">\n  <ion-fab-button color=\"dark\" (click)=\"finalizar()\">\n    <ion-icon name=\"trophy-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\"  horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"danger\" (click)=\"siguiente()\">\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ }),

/***/ "./src/app/bateriarutina/bateriarutina-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/bateriarutina/bateriarutina-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: BateriarutinaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriarutinaPageRoutingModule", function() { return BateriarutinaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateriarutina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateriarutina.page */ "./src/app/bateriarutina/bateriarutina.page.ts");




const routes = [
    {
        path: '',
        component: _bateriarutina_page__WEBPACK_IMPORTED_MODULE_3__["BateriarutinaPage"]
    }
];
let BateriarutinaPageRoutingModule = class BateriarutinaPageRoutingModule {
};
BateriarutinaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriarutinaPageRoutingModule);



/***/ }),

/***/ "./src/app/bateriarutina/bateriarutina.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/bateriarutina/bateriarutina.module.ts ***!
  \*******************************************************/
/*! exports provided: BateriarutinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriarutinaPageModule", function() { return BateriarutinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateriarutina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateriarutina-routing.module */ "./src/app/bateriarutina/bateriarutina-routing.module.ts");
/* harmony import */ var _bateriarutina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateriarutina.page */ "./src/app/bateriarutina/bateriarutina.page.ts");







let BateriarutinaPageModule = class BateriarutinaPageModule {
};
BateriarutinaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateriarutina_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriarutinaPageRoutingModule"]
        ],
        declarations: [_bateriarutina_page__WEBPACK_IMPORTED_MODULE_6__["BateriarutinaPage"]]
    })
], BateriarutinaPageModule);



/***/ }),

/***/ "./src/app/bateriarutina/bateriarutina.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/bateriarutina/bateriarutina.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo {\n  font-size: 25px;\n  font-weight: 600;\n}\n\n.titulopeque {\n  font-size: 22px;\n  font-weight: 400;\n}\n\n.ion-grid2 {\n  height: 100%;\n}\n\n.ion-row2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n.ion-text-center.titulo {\n  text-transform: capitalize;\n}\n\n.ion-text-center.sui {\n  font-size: 42px;\n  font-weight: 600;\n}\n\nvideo {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0ZXJpYXJ1dGluYS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGJhdGVyaWFydXRpbmFcXGJhdGVyaWFydXRpbmEucGFnZS5zY3NzIiwic3JjL2FwcC9iYXRlcmlhcnV0aW5hL2JhdGVyaWFydXRpbmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksMEJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0MsZUFBQTtBQ0lEIiwiZmlsZSI6InNyYy9hcHAvYmF0ZXJpYXJ1dGluYS9iYXRlcmlhcnV0aW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG97XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxufVxuXG4udGl0dWxvcGVxdWV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxufVxuXG4uaW9uLWdyaWQye1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5pb24tcm93MntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmlvbi10ZXh0LWNlbnRlci50aXR1bG8ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmlvbi10ZXh0LWNlbnRlci5zdWkge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG52aWRlb3tcbiBtYXgtd2lkdGg6IDEwMCU7ICAgXG59IiwiLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRpdHVsb3BlcXVlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW9uLWdyaWQyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW9uLXJvdzIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW9uLXRleHQtY2VudGVyLnRpdHVsbyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaW9uLXRleHQtY2VudGVyLnN1aSB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/bateriarutina/bateriarutina.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/bateriarutina/bateriarutina.page.ts ***!
  \*****************************************************/
/*! exports provided: BateriarutinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriarutinaPage", function() { return BateriarutinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BateriarutinaPage = class BateriarutinaPage {
    constructor(ApiService, ruta) {
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.serie = {};
        this.contador = 1;
        this.mostrar = false;
    }
    ngOnInit() {
        this.evaluar = this.ApiService.verificarEntrenamiento;
        this.serie = this.ApiService.rutina;
        this.nombre = this.serie[0]['name'];
        this.repeticion = this.serie[0]['repetitions'];
        this.peso = this.serie[0]['weight'];
        console.log(this.peso);
        console.log(this.serie);
    }
    siguiente() {
        const longitud = this.serie.length;
        if (this.contador >= longitud) {
            this.mostrar = true;
            return;
        }
        this.nombre = this.serie[this.contador]['name'];
        this.repeticion = this.serie[this.contador]['repetitions'];
        this.peso = this.serie[this.contador]['weight'];
        this.contador = this.contador + 1;
    }
    atras() {
        const longitud = 0;
        if (this.contador <= longitud) {
            return;
        }
        this.contador = this.contador - 1;
        this.nombre = this.serie[this.contador]['name'];
        this.repeticion = this.serie[this.contador]['repetitions'];
        this.peso = this.serie[this.contador]['weight'];
    }
    finalizar() {
        this.ruta.navigateByUrl("/estiramientos");
    }
};
BateriarutinaPage.ctorParameters = () => [
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BateriarutinaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateriarutina',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateriarutina.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bateriarutina/bateriarutina.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateriarutina.page.scss */ "./src/app/bateriarutina/bateriarutina.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], BateriarutinaPage);



/***/ })

}]);
//# sourceMappingURL=bateriarutina-bateriarutina-module-es2015.js.map