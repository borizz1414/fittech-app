(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listadoalimento-listadoalimento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listadoalimento/listadoalimento.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listadoalimento/listadoalimento.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/bateria-alimento\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img src=\"assets/img/logo-app.png\" class=\"imagenmodificada\">    \n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{dataRecibida}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <img [src]=\"foods\" alt=\"\">\n\n  <ion-item>\n    <div class=\"ion-padding ion-text-center titulo\">\n      Menú de hoy\n    </div> \n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"contenedorMenu\">\n      <div class=\"contenedorMenuItem\"  [ngClass]=\"{'customtarjeta': activar}\"    style=\"border-bottom-left-radius: 12px;border-top-left-radius: 12px;background:black;\">\n        <p style=\"color: white; margin-top: 0;\"> <br> Carbohidratos</p>\n        <ion-progress-bar class=\"carboP\" [value]=\"progressBar(carbo, datosUsuario.carbo)\"></ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.carbo\">\n          {{carbo.toFixed()}}/{{datosUsuario.carbo.toFixed()}}gr</p>\n      </div>    \n      <div class=\"contenedorMenuItem\"  style=\"  background: #EF4044;\">\n        <p style=\"color: white;  margin-top: 0;\"> <br> Proteinas</p>\n        <ion-progress-bar  class=\"proteP\" [value]=\"progressBar(protein, datosUsuario.protein)\"></ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.protein\">\n          {{protein.toFixed()}}/{{datosUsuario.protein.toFixed()}}gr</p>\n      </div>\n      <div class=\"contenedorMenuItem\"  style=\"border-bottom-right-radius: 12px;border-top-right-radius: 12px;background: grey;\">\n        <p style=\"color: white;  margin-top: 0;\"> <br> Grasas</p>\n        <ion-progress-bar class=\"grasaP\" [value]=\"progressBar(grasa, datosUsuario.grease)\"></ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.grease\">\n          {{grasa.toFixed()}}/{{datosUsuario.grease.toFixed()}}gr</p>\n      </div>\n    </div>\n  </ion-item>\n\n  <div class=\"ion-text-center\" style=\"padding: 0 1rem; margin:1rem;\">\n    Toca \n    <span>\n       <ion-icon name=\"create-sharp\" style=\"font-size: 1.1rem;color: red;\"></ion-icon>\n    </span> para editar no solo las cantidades de este alimento, sino para agregar o modificar cualquier macronutriente\n  </div>\n\n  <ion-label class=\"ion-text-end\">\n    <ion-button  style=\"font-size: 18px; margin-bottom: 1rem;\" (click)=\"B_todo()\"  color=\"danger\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Borrar todo\n    </ion-button>\n  </ion-label>\n\n\n  <ion-grid class=\"ion-text-center\">\n    <ion-row>\n      <ion-col class=\"raya\"  size=\"6\" *ngFor=\"let alimento of alimentos2; let i=index\">\n        <!-- cabeza -->\n        <ion-label class=\"ion-text-wrap\" class=\"titlemodify\"> {{alimento.food.name}} \n        <ion-icon (click)=\"agregar()\" name=\"create-sharp\" style=\"margin-left: 1rem;font-size: 1.1rem;color: red;\"></ion-icon>\n        </ion-label>\n        <!-- input cuerpo -->\n        <ion-input placeholder=\"0\" [value]= \"alimento.quantity\" inputmode=\"numeric\" maxlength=\"3\" style=\"margin: 0 auto;text-align: center;\" readonly>\n        \n        </ion-input>\n        <!-- footer boton -->\n        <ion-segment [(ngModel)]=\"alimento.measurement\" (ionChange)=\"alimento.cantidad = 0\" mode=\"ios\" style=\"margin: 0 auto;\" value=\"unidad\">\n          <ion-segment-button *ngIf=\"alimento.measure === 0\" value=\"unidad\" [ngClass]=\"{'segment-button-checked': true}\">\n             <ion-label class=\"titulopeque\">{{alimento.food.type_measure}}</ion-label>\n           </ion-segment-button>\n           <ion-segment-button *ngIf=\"alimento.measure === 1\" value=\"casera\"\n           [ngClass]=\"{'segment-button-checked': true}\">\n            <ion-label class=\"titulopeque\">{{alimento.food.measure || alimento.food.type_measure }}</ion-label>\n          </ion-segment-button>\n         </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n<ion-footer  class=\"ion-no-border\">\n  <ion-card style=\"  \n  background: #EF4044;\n  color: white;\n  width: 286px; \n  border-radius: 10px;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-family: 'Open Sans';\" [disabled]=\"!form.valid\" (click)=\"guardarMenu()\">\n  <h2 style=\"text-align: center; margin: 10px;\">\n   <b> Actualizar </b>\n  </h2>  \n</ion-card>\n</ion-footer>");

/***/ }),

/***/ "./src/app/listadoalimento/listadoalimento-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/listadoalimento/listadoalimento-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListadoalimentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoalimentoPageRoutingModule", function() { return ListadoalimentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listadoalimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listadoalimento.page */ "./src/app/listadoalimento/listadoalimento.page.ts");




const routes = [
    {
        path: '',
        component: _listadoalimento_page__WEBPACK_IMPORTED_MODULE_3__["ListadoalimentoPage"]
    }
];
let ListadoalimentoPageRoutingModule = class ListadoalimentoPageRoutingModule {
};
ListadoalimentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListadoalimentoPageRoutingModule);



/***/ }),

/***/ "./src/app/listadoalimento/listadoalimento.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/listadoalimento/listadoalimento.module.ts ***!
  \***********************************************************/
/*! exports provided: ListadoalimentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoalimentoPageModule", function() { return ListadoalimentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _listadoalimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listadoalimento-routing.module */ "./src/app/listadoalimento/listadoalimento-routing.module.ts");
/* harmony import */ var _listadoalimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listadoalimento.page */ "./src/app/listadoalimento/listadoalimento.page.ts");







let ListadoalimentoPageModule = class ListadoalimentoPageModule {
};
ListadoalimentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listadoalimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoalimentoPageRoutingModule"]
        ],
        declarations: [_listadoalimento_page__WEBPACK_IMPORTED_MODULE_6__["ListadoalimentoPage"]]
    })
], ListadoalimentoPageModule);



/***/ }),

/***/ "./src/app/listadoalimento/listadoalimento.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/listadoalimento/listadoalimento.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\n.edit {\n  fill: red;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\n.titlemodify {\n  font-weight: 600;\n  text-transform: uppercase;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 15px;\n  height: 2.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkb2FsaW1lbnRvL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcbGlzdGFkb2FsaW1lbnRvXFxsaXN0YWRvYWxpbWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YWRvYWxpbWVudG8vbGlzdGFkb2FsaW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUU7RUFDRSxTQUFBO0FDREo7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUdBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDSkY7O0FEUUE7RUFFRSxtQkFBQTtVQUFBLE9BQUE7RUFFRCxxQkFBQTtFQUlDLGtCQUFBO0FDVkY7O0FEY0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURnQkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ2JKOztBRGdCQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUNiRjs7QURlQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUNaRjs7QURjQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURhQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURhQTtFQUNFLCtCQUFBO0FDVkY7O0FEYUE7RUFDRSxnQkFBQTtFQUNDLHlCQUFBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0Msd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVkwiLCJmaWxlIjoic3JjL2FwcC9saXN0YWRvYWxpbWVudG8vbGlzdGFkb2FsaW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlbm1vZGlmaWNhZGF7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gXG5cbiAgLmVkaXQge1xuICAgIGZpbGw6IHJlZDtcbiAgfVxuXG4vLyAgIGNvbnRlbmVkb3IgZGUgYWxpbWVudG9zXG4uY29udGVuZWRvck1lbnV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNFRjQwNDQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4wOSk7XG59XG5cbi8vIG9yaWdpbmFsXG4uY29udGVuZWRvck1lbnVJdGVte1xuICAvLyBoYWNlcmxvIHRvZG8gZGVsIG1pc21vIHRhbWHDsW9cbiAgZmxleDogMTsgXG4gIC8vIGVzcGFjaW8gZW50cmUgYW1ib3MgaXRlbXNcbiAvKiAgbWFyZ2luOiAwIDEwcHg7ICovXG4gIC8vIGNlbnRyYXJcblxuICBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbiAgXG4gIC50aXR1bG97XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuIFxuICBcblxuICBpb24tcHJvZ3Jlc3MtYmFye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuLmNhcmJvUHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucHJvdGVQe1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ncmFzYVB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNvbXBsZXRle1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnJheWE6bnRoLWNoaWxkKG9kZCl7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi50aXRsZW1vZGlmeXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgIGhlaWdodDogMi4yNXJlbTtcbn0iLCIuaW1hZ2VubW9kaWZpY2FkYSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5lZGl0IHtcbiAgZmlsbDogcmVkO1xufVxuXG4uY29udGVuZWRvck1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLmNvbnRlbmVkb3JNZW51SXRlbSB7XG4gIGZsZXg6IDE7XG4gIC8qICBtYXJnaW46IDAgMTBweDsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FyYm9QIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wcm90ZVAge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdyYXNhUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29tcGxldGUge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnJheWE6bnRoLWNoaWxkKG9kZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4udGl0bGVtb2RpZnkge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDIuMjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/listadoalimento/listadoalimento.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/listadoalimento/listadoalimento.page.ts ***!
  \*********************************************************/
/*! exports provided: ListadoalimentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoalimentoPage", function() { return ListadoalimentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/nutricion.service */ "./src/app/services/nutricion.service.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ListadoalimentoPage = class ListadoalimentoPage {
    constructor(capturar, service, utilities, fb, alertController, ruta) {
        this.capturar = capturar;
        this.service = service;
        this.utilities = utilities;
        this.fb = fb;
        this.alertController = alertController;
        this.ruta = ruta;
        this.alimentos = [];
        this.alimentosAyer = [];
        this.datosUsuario = [];
        this.alimentos2 = [];
        this.carbo = 0;
        this.protein = 0;
        this.grasa = 0;
        this.typefoods = 1;
        this.measurement = "gr";
        this.activar = true;
        this.form = this.fb.group({
            borrar: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    ngOnInit() {
        //  parametros del id
    }
    getFoods(comida) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
            const data = yield this.service.ListadoComida(comida, this.today);
            if (data == false) {
                this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error", "danger");
            }
            else {
                // peticion 1
                this.alimentos2 = data["menu"].menu_food;
                this.id = data["menu"].id;
            }
            //peticion 2
            const valor = yield this.service.menu(comida);
            if (valor == false) {
                this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error", "danger");
            }
            else {
                // console.log(valor)
                this.alimentos = valor["Foods"];
                this.alimentos2.forEach((element) => {
                    this.alimentos.forEach((e) => {
                        // aca estas inyectando los valores al array
                        // aqui en donde deberias aplicar  la regla de 3 y luego meterlo
                        if (e.measure == null) {
                            e["measurement"] = "unidad";
                        }
                        else {
                            e["measurement"] = "gr";
                        }
                        if (e.id == element.food_id) {
                            e.cantidad = parseInt(element.quantity);
                        }
                        if (e.id == element.food_id) {
                            e["convertion"] = element.measure;
                        }
                    });
                });
                console.log("LISTA DE MENU", this.alimentos);
                console.log("MENU DE HOY", this.alimentos2);
                this.datosUsuario = valor["Menu"];
                this.totalCarbo = this.datosUsuario.carbo;
                this.totalgrease = this.datosUsuario.grease;
                this.totalprotein = this.datosUsuario.protein;
            }
            this.calculateStats();
        });
    }
    ucFirst(str) {
        /*   str = str.replace(/ /g, "."); */
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
    ionViewWillEnter() {
        this.dataRecibida = this.capturar.snapshot.paramMap.get("id");
        switch (this.dataRecibida) {
            case "Desayuno":
                this.typefood = 0;
                this.getFoods(0);
                this.foods = "./assets/img/desayuno-grande.jpg";
                break;
            case "Almuerzo":
                this.typefood = 2;
                this.getFoods(2);
                this.foods = "./assets/img/almuerzo-grande.jpg";
                break;
            case "Snack":
                this.getFoods(1);
                this.typefood = 1;
                this.foods = "./assets/img/snack-grande.jpg";
                break;
            default:
                this.getFoods(3);
                this.typefood = 3;
                this.foods = "./assets/img/cena-grande.jpg";
                break;
        }
    }
    calculateStats() {
        this.carbo = 0;
        this.grasa = 0;
        this.protein = 0;
        this.alimentos.forEach((element) => {
            console.log(element.cantidad);
            if (element.cantidad > 0) {
                console.log(element);
                if (element.convertion === 1 && element.eq != null) {
                    console.log(element);
                    console.log("cantidad", element.cantidad);
                    console.log("eq", element.eq);
                    console.log('medida casera');
                    console.log("Convirtiendo con regla de 3");
                    this.carbo += this.convertion(element.cant, element.carbo, element.cantidad * element.eq);
                    this.grasa += this.convertion(element.cant, element.greases, element.cantidad * element.eq);
                    this.protein += this.convertion(element.cant, element.protein, element.cantidad * element.eq);
                }
                else {
                    console.log("Convirtiendo con regla de 3 en el else");
                    this.carbo += this.convertion(element.cant, element.carbo, element.cantidad);
                    this.grasa += this.convertion(element.cant, element.greases, element.cantidad);
                    this.protein += this.convertion(element.cant, element.protein, element.cantidad);
                    console.log(element);
                    console.log('Aplicar la regla de 3');
                }
            }
            //console.log("No convirtio nada");
        });
    }
    convertion(a, b, c) {
        //A es el valor unitario
        //B es el equivalente en grasa/proteina/carbo de ese valor unitario
        //C es la incognita a encontrar
        let x;
        x = (b * c) / a;
        // console.log(x)
        return x;
    }
    progressBar(data, total) {
        if ((data * 100) / total / 100 >= 1) {
            return 1;
        }
        else {
            return (data * 100) / total / 100;
        }
    }
    guardarMenu() {
        // borrar todo
        this.service
            .BorrarMenu(this.id)
            .then((res) => {
            // console.log(res);
            this.utilities.notificacionUsuario(this.dataRecibida + " actualizado", "dark");
            this.ruta.navigateRoot("/bateria-alimento");
        })
            .catch((err) => {
            this.utilities.notificacionUsuario("Error al guardar " + this.dataRecibida, "danger");
        });
    }
    change(index) {
        this.alimentos[index].cantidad = 0;
    }
    B_todo() {
        this.alimentos2 = [];
        this.form.controls.borrar.setValue("borra");
    }
    agregar() {
        this.ruta.navigateForward([`/alimentos-editar/${this.dataRecibida}`]);
    }
};
ListadoalimentoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ListadoalimentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-listadoalimento",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listadoalimento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listadoalimento/listadoalimento.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listadoalimento.page.scss */ "./src/app/listadoalimento/listadoalimento.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], ListadoalimentoPage);



/***/ })

}]);
//# sourceMappingURL=listadoalimento-listadoalimento-module-es2015.js.map