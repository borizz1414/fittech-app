(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alimentos-editar-alimentos-editar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-editar/alimentos-editar.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-editar/alimentos-editar.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/bateria-alimento\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img src=\"assets/img/logo-app.png\" class=\"imagenmodificada\">\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{dataRecibida}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <img [src]=\"foods\" alt=\"\">\n\n  <ion-item>\n    <div class=\"ion-padding ion-text-center titulo\">\n      Total a consumir\n    </div>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"contenedorMenu\">\n      <div class=\"contenedorMenuItem\" [ngClass]=\"{'customtarjeta': activar == 0 ? true : false}\"\n        (click)=\"selecionartarjeta(1)\"\n        style=\"border-bottom-left-radius: 12px;border-top-left-radius: 12px;background:black;\">\n        <p style=\"color: white; margin-top: 0;\"> <br> Carbohidratos</p>\n        <ion-progress-bar class=\"carboP\" *ngIf=\"datosUsuario.carbo\" [value]=\"progressBar(carbo, datosUsuario.carbo)\">\n        </ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.carbo\">\n          {{carbo.toFixed()}}/{{datosUsuario.carbo.toFixed()}}gr</p>\n      </div>\n      <div class=\"contenedorMenuItem\" [ngClass]=\"{'customtarjeta': activar == 1 ? true : false}\"\n        (click)=\"selecionartarjeta(0)\" style=\"  background: #EF4044;\">\n        <p style=\"color: white;  margin-top: 0;\"> <br> Proteinas</p>\n        <ion-progress-bar class=\"proteP\" *ngIf=\"datosUsuario.protein\"\n          [value]=\"progressBar(protein, datosUsuario.protein)\"></ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.protein\">\n          {{protein.toFixed()}}/{{datosUsuario.protein.toFixed()}}gr</p>\n      </div>\n      <div class=\"contenedorMenuItem\" [ngClass]=\"{'customtarjeta': activar == 2 ? true : false}\"\n        (click)=\"selecionartarjeta(2)\"\n        style=\"border-bottom-right-radius: 12px;border-top-right-radius: 12px;background: grey;\">\n        <p style=\"color: white;  margin-top: 0;\"> <br> Grasas</p>\n        <ion-progress-bar class=\"grasaP\" *ngIf=\"datosUsuario.grease\" [value]=\"progressBar(grasa, datosUsuario.grease)\">\n        </ion-progress-bar>\n        <p style=\"color: white;\" *ngIf=\"datosUsuario.grease\">\n          {{grasa.toFixed()}}/{{datosUsuario.grease.toFixed()}}gr</p>\n      </div>\n    </div>\n  </ion-item>\n\n\n  <ion-grid class=\"ion-text-center\">\n    <ion-row *ngIf=\"!info2\">\n      <ion-col class=\"raya\" size=\"6\" *ngFor=\"let alimento of alimentos | filter:typefoods; let i=index\">\n        <!-- cabeza -->\n        <ion-label class=\"ion-text-wrap\" style=\"font-weight: 600; text-transform: uppercase; display: flex;\n        justify-content: center; font-size: 15px;\"> {{alimento.name}}\n\n          <ion-icon name=\"alert-circle\"\n            (click)=\"info(alimento.measurement,alimento.name,alimento.cant,alimento.carbo,alimento.greases,alimento.protein, alimento.cantidad,alimento.eq, alimento)\"\n            style=\"font-size: 1.25rem;\"></ion-icon>\n\n\n        </ion-label>\n        <!-- input cuerpo -->\n        <ion-input placeholder=\"0\" [(ngModel)]=\"alimento.cantidad\" (ionChange)=\"calculateStats();\" clearOnEdit\n          inputmode=\"numeric\" maxlength=\"3\" style=\"margin: 0 auto;text-align: center;\"></ion-input>\n        <!-- footer boton -->\n        <ion-segment *ngIf=\"alimento.convertion !==1\" [(ngModel)]=\"alimento.measurement\"\n          (ionChange)=\"alimento.cantidad = null\" mode=\"ios\" style=\"margin: 0 auto;\" value=\"unidad\">\n          <ion-segment-button value=\"unidad\"\n            [ngClass]=\"{'segment-button-checked': alimento.measure == null ? true : false}\">\n            <ion-label class=\"titulopeque\">{{alimento.type_measure}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"casera\" *ngIf=\"alimento.measure\">\n            <ion-label class=\"titulopeque\">{{alimento.measure}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-segment *ngIf=\"alimento.convertion === 1 \" [(ngModel)]=\"alimento.measurement\"\n          (ionChange)=\"alimento.cantidad = null\" mode=\"ios\" style=\"margin: 0 auto;\" value=\"casera\">\n          <ion-segment-button value=\"unidad\"\n            [ngClass]=\"{'segment-button-checked': alimento.measure == null ? true : false}\">\n            <ion-label class=\"titulopeque\">{{alimento.type_measure}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"casera\" *ngIf=\"alimento.measure\">\n            <ion-label class=\"titulopeque\">{{alimento.measure}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"animated fadeInLeft\" *ngIf=\"info2\">\n      <ion-grid class=\"my-grid\">\n        <ion-row class=\"parent-row animated fadeInLeft\">\n          <div class=\"container2\">\n            <h5 class=\"titulo2\">Ayuda\n              <ion-icon style=\"color: black;\" class=\"ayudad2\" name=\"close-outline\" (click)=\"cerrar()\"></ion-icon>\n            </h5>\n            <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\"><b>\n                Alimento : </b> <span style=\"text-transform:uppercase;\"> {{nombre2}} </span> </p>\n            <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\">\n              <b> Medida casera: </b>\n              <span style=\"text-transform:uppercase;\" *ngIf=\"selectedFood.measure\">{{selectedFood.measure}} =\n                {{selectedFood.eq}}\n                {{selectedFood.type_measure}} </span>\n              <span style=\"text-transform:uppercase;\" *ngIf=\"!selectedFood.measure\">{{selectedFood.measure}} =\n                {{selectedFood.eq}}\n                {{selectedFood.type_measure}} </span> </p>\n            <!-- <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\"><b> proteínas: </b>\n                    {{proteinas2}}\n                  </p>\n                  <p class=\"ion-text-left\" style=\"color: black; font-size: 1.25rem;\"><b> Grasas: </b>\n                    {{grasas2}}\n                  </p> -->\n          </div>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-grid>\n\n\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-card style=\"  \n  background: #EF4044;\n  color: white;\n  width: 286px; \n  border-radius: 10px;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-family: 'Open Sans';\" (click)=\"guardarMenu()\">\n    <h2 style=\"text-align: center; margin: 10px;\">\n      <b> Actualizar </b>\n    </h2>\n  </ion-card>\n</ion-footer>");

/***/ }),

/***/ "./src/app/alimentos-editar/alimentos-editar-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/alimentos-editar/alimentos-editar-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AlimentosEditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentosEditarPageRoutingModule", function() { return AlimentosEditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alimentos_editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alimentos-editar.page */ "./src/app/alimentos-editar/alimentos-editar.page.ts");




const routes = [
    {
        path: '',
        component: _alimentos_editar_page__WEBPACK_IMPORTED_MODULE_3__["AlimentosEditarPage"]
    }
];
let AlimentosEditarPageRoutingModule = class AlimentosEditarPageRoutingModule {
};
AlimentosEditarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlimentosEditarPageRoutingModule);



/***/ }),

/***/ "./src/app/alimentos-editar/alimentos-editar.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/alimentos-editar/alimentos-editar.module.ts ***!
  \*************************************************************/
/*! exports provided: AlimentosEditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentosEditarPageModule", function() { return AlimentosEditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _alimentos_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alimentos-editar-routing.module */ "./src/app/alimentos-editar/alimentos-editar-routing.module.ts");
/* harmony import */ var _alimentos_editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alimentos-editar.page */ "./src/app/alimentos-editar/alimentos-editar.page.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");








let AlimentosEditarPageModule = class AlimentosEditarPageModule {
};
AlimentosEditarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alimentos_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlimentosEditarPageRoutingModule"],
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_alimentos_editar_page__WEBPACK_IMPORTED_MODULE_6__["AlimentosEditarPage"]]
    })
], AlimentosEditarPageModule);



/***/ }),

/***/ "./src/app/alimentos-editar/alimentos-editar.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/alimentos-editar/alimentos-editar.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenmodificada {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  font-size: 2rem;\n  margin: 1rem;\n  text-align: center;\n}\n\n.contenedorMenu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.09);\n  color: white;\n}\n\n.contenedorMenuItem {\n  -webkit-box-flex: 1;\n          flex: 1;\n  /*  margin: 0 10px; */\n  text-align: center;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.customtarjeta {\n  -webkit-filter: brightness(1);\n          filter: brightness(1);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  100% {\n    -webkit-transform: scale(0.97);\n            transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n.titulo {\n  margin: 0 auto;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.titulo2 {\n  margin: 0;\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.container2 {\n  width: 100%;\n}\n\nion-progress-bar {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.carboP {\n  --progress-background: red;\n  --background: white;\n}\n\n.proteP {\n  --progress-background: red;\n  --background: white ;\n}\n\n.grasaP {\n  --progress-background: red;\n  --background: white;\n}\n\n.complete {\n  --progress-background: black !important;\n  --background: grey;\n}\n\n.raya:nth-child(odd) {\n  border-right: 1px solid #cecece;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxpbWVudG9zLWVkaXRhci9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGFsaW1lbnRvcy1lZGl0YXJcXGFsaW1lbnRvcy1lZGl0YXIucGFnZS5zY3NzIiwic3JjL2FwcC9hbGltZW50b3MtZWRpdGFyL2FsaW1lbnRvcy1lZGl0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBR0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDQUY7O0FETUE7RUFFRSxtQkFBQTtVQUFBLE9BQUE7RUFFRCxxQkFBQTtFQUVDLGtCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNORjs7QURTQTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Qsb0NBQUE7VUFBQSw0QkFBQTtBQ05EOztBRDZCQTtFQUNDO0lBQ0MsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLHNDQUFBO0VDMUJBO0VENkJEO0lBQ0MsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLG9DQUFBO0VDM0JBO0VEOEJEO0lBQ0MsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLG9DQUFBO0VDNUJBO0FBQ0Y7O0FEY0E7RUFDQztJQUNDLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQ0FBQTtFQzFCQTtFRDZCRDtJQUNDLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxvQ0FBQTtFQzNCQTtFRDhCRDtJQUNDLDhCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQ0FBQTtFQzVCQTtBQUNGOztBRGdDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQzlCSjs7QURpQ0E7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM5QkY7O0FEaUNBO0VBQ0UsV0FBQTtBQzlCRjs7QURrQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQy9CRjs7QURtQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FDaENGOztBRGtDQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUMvQkY7O0FEaUNBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQzlCRjs7QURnQ0E7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0FDN0JGOztBRGdDQTtFQUNFLCtCQUFBO0FDN0JGOztBRGdDQTtFQUNFLHVCQUFBO0FDN0JGIiwiZmlsZSI6InNyYy9hcHAvYWxpbWVudG9zLWVkaXRhci9hbGltZW50b3MtZWRpdGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlbm1vZGlmaWNhZGF7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tYnV0dG9ue1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbmVkb3JNZW51e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0MDQ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMDkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4vLyBvcmlnaW5hbFxuLmNvbnRlbmVkb3JNZW51SXRlbXtcbiAgLy8gaGFjZXJsbyB0b2RvIGRlbCBtaXNtbyB0YW1hw7FvXG4gIGZsZXg6IDE7IFxuICAvLyBlc3BhY2lvIGVudHJlIGFtYm9zIGl0ZW1zXG4gLyogIG1hcmdpbjogMCAxMHB4OyAqL1xuICAvLyBjZW50cmFyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC4zcztcbn1cblxuLmN1c3RvbXRhcmpldGF7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMSl7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMil7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbmVkb3JNZW51SXRlbTpudGgtY2hpbGQoMyl7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vIFx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbi8vIH1cblxuXG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcblx0fVxuXG5cdDcwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcblx0fVxufVxuXG5cbi50aXR1bG97XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0dWxvMntcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5pb24tcHJvZ3Jlc3MtYmFye1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4uY2FyYm9Qe1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wcm90ZVB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlIDtcbn1cbi5ncmFzYVB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNvbXBsZXRle1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLnJheWE6bnRoLWNoaWxkKG9kZCl7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbmlvbi1pdGVte1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cbiIsIi5pbWFnZW5tb2RpZmljYWRhIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW5lZG9yTWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW5lZG9yTWVudUl0ZW0ge1xuICBmbGV4OiAxO1xuICAvKiAgbWFyZ2luOiAwIDEwcHg7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG5cbi5jdXN0b210YXJqZXRhIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxufVxuLnRpdHVsbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50aXR1bG8yIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmJvUCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucHJvdGVQIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgO1xufVxuXG4uZ3Jhc2FQIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb21wbGV0ZSB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4ucmF5YTpudGgtY2hpbGQob2RkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/alimentos-editar/alimentos-editar.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/alimentos-editar/alimentos-editar.page.ts ***!
  \***********************************************************/
/*! exports provided: AlimentosEditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlimentosEditarPage", function() { return AlimentosEditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/nutricion.service */ "./src/app/services/nutricion.service.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let AlimentosEditarPage = class AlimentosEditarPage {
    constructor(capturar, service, utilities, alertController, navCtrl) {
        this.capturar = capturar;
        this.service = service;
        this.utilities = utilities;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.alimentos = [];
        this.alimentosAyer = [];
        this.datosUsuario = [];
        this.alimentos2 = [];
        this.carbo = 0;
        this.protein = 0;
        this.grasa = 0;
        this.typefoods = 1;
        this.measurement = "gr";
        this.activar = 0;
        this.selectedFood = [];
    }
    ngOnInit() {
        //  parametros del id
        this.dataRecibida = this.capturar.snapshot.paramMap.get("id");
        switch (this.dataRecibida) {
            case "Desayuno":
                this.getFoods(0);
                this.comidaenviar = 0;
                this.foods = "./assets/img/desayuno-grande.jpg";
                break;
            case "Almuerzo":
                this.getFoods(2);
                this.comidaenviar = 2;
                this.foods = "./assets/img/almuerzo-grande.jpg";
                break;
            case "Snack":
                this.getFoods(1);
                this.comidaenviar = 1;
                this.foods = "./assets/img/snack-grande.jpg";
                break;
            default:
                this.getFoods(3);
                this.comidaenviar = 3;
                this.foods = "./assets/img/cena-grande.jpg";
                break;
        }
    }
    getFoods(comida) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
            console.log(this.today);
            const data = yield this.service.ListadoComida(comida, this.today);
            if (data == false) {
                this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error", "danger");
            }
            else {
                this.alimentos2 = data["menu"].menu_food;
                this.id = data["menu"].id;
            }
            const valor = yield this.service.menu(comida);
            if (valor == false) {
                this.utilities.notificacionUsuario("Disculpe, Ha ocurrido un error", "danger");
            }
            else {
                console.log(valor);
                this.alimentos = valor["Foods"];
                // Compara si existe el registro y crea un registro dentro del array para identificar
                // asigna de forma correcta si es casero o unidad
                this.alimentos2.forEach((element) => {
                    this.alimentos.forEach((e) => {
                        if (e.measure == null) {
                            e["measurement"] = "casera";
                        }
                        else {
                            e["measurement"] = "unidad";
                        }
                        if (e.id == element.food_id) {
                            e.cantidad = parseInt(element.quantity);
                            e["convertion"] = element.measure;
                        }
                        if (e.convertion == 1) {
                            e.measurement = "casera";
                        }
                        else {
                            e.measurement = "unidad";
                        }
                    });
                });
                console.log("this.alimenot", this.alimentos);
                console.log("this.alimenot2", this.alimentos2);
                this.datosUsuario = valor["Menu"];
                this.totalCarbo = this.datosUsuario.carbo;
                this.totalgrease = this.datosUsuario.grease;
                this.totalprotein = this.datosUsuario.protein;
            }
            this.calculateStats();
        });
    }
    calculateStats() {
        this.carbo = 0;
        this.grasa = 0;
        this.protein = 0;
        console.log(this.alimentos, 'b');
        this.alimentos.forEach((element) => {
            if (element.cantidad > 0) {
                if (element.measurement === "casera" && element.eq != null) {
                    // console.log(element);
                    // console.log('medida casera')
                    /*               this.carbo += element.carbo*element.cantidad;
                    this.grasa += element.greases*element.cantidad;
                    this.protein += element.protein*element.cantidad; */
                    this.carbo += this.convertion(element.cant, element.carbo, element.cantidad * element.eq);
                    this.grasa += this.convertion(element.cant, element.greases, element.cantidad * element.eq);
                    this.protein += this.convertion(element.cant, element.protein, element.cantidad * element.eq);
                }
                else {
                    this.carbo += this.convertion(element.cant, element.carbo, element.cantidad);
                    this.grasa += this.convertion(element.cant, element.greases, element.cantidad);
                    this.protein += this.convertion(element.cant, element.protein, element.cantidad);
                    console.log(element);
                    console.log("Aplicar la regla de 3");
                }
            }
        });
    }
    calcularunidaIndividual(unidad, nombre, cant1, carbo1, grasa1, proteina1, cantidad1, eq1, alimento) {
        this.carbo2 = 0;
        this.grasas2 = 0;
        this.proteinas2 = 0;
        this.selectedFood = alimento;
        if (eq1 == null) {
            return;
        }
        else {
            this.nombre2 = nombre;
            this.eq2 = eq1;
            this.info2 = !this.info2;
        }
        // if(unidad !== 'unidad'){
        //   console.log('medida casera')
        //   this.nombre2 = nombre
        //   this.carbo2 += this.convertion(cant1, carbo1, cantidad1*eq1)
        //   this.grasas2 += this.convertion(cant1, grasa1, cantidad1*eq1)
        //   this.proteinas2 += this.convertion(cant1, proteina1, cantidad1*eq1)
        //   console.log("total casera", this.carbo2, this.grasas2 , this.proteinas2)
        //   this.info2 = !this.info2;
        // }else{
        //   this.nombre2 = nombre
        //   this.carbo2  += this.convertion(cant1, carbo1, cantidad1)
        //   this.grasas2  += this.convertion(cant1, grasa1, cantidad1)
        //   this.proteinas2 += this.convertion(cant1, proteina1, cantidad1)
        //   console.log("total unidad", this.carbo2, this.grasas2 , this.proteinas2)
        //   this.info2 = !this.info2;
        // }
    }
    convertion(a, b, c) {
        //A es el valor unitario
        //B es el equivalente en grasa/proteina/carbo de ese valor unitario
        //C es la incognita a encontrar
        let x;
        x = (b * c) / a;
        console.log("vaalor de la regla de 3", x);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let menu = {
                menu_id: this.id,
                type_food: this.comidaenviar,
                total_proteins: this.protein,
                total_greases: this.grasa,
                total_carbos: this.carbo,
                total_calories: 0,
                foods: [],
            };
            this.alimentos.forEach((element) => {
                if (element.cantidad > 0) {
                    menu.total_calories += element.calories;
                    if (element.measurement == "unidad") {
                        //Unidad en gramos, ml, kg etc.
                        let food = [element.id, element.cantidad, 0];
                        menu.foods.push(food);
                    }
                    else {
                        //Valor unitario casero.
                        if (element.measure) {
                            let food = [element.id, element.cantidad, 1];
                            menu.foods.push(food);
                        }
                        else {
                            let food = [element.id, element.cantidad, 1];
                            menu.foods.push(food);
                        }
                    }
                }
            });
            if (this.carbo > this.datosUsuario.carbo ||
                this.grasa > this.datosUsuario.grease ||
                this.protein > this.datosUsuario.protein) {
                // si excen los alimentos
                const alert = yield this.alertController.create({
                    message: "<h2>Los valores seleccionados exceden los requerimientos según tus objetivos, estar muy por encima puede alejarte de ellos<br><br>¿Deseas continuar?</h2>",
                    cssClass: "customMensaje1",
                    buttons: [
                        {
                            text: "Volver",
                            role: "cancel",
                            cssClass: "cancelButton",
                            handler: (blah) => {
                                return;
                            },
                        },
                        {
                            text: "Siguiente",
                            cssClass: "confirmButton",
                            handler: () => {
                                if (!menu.foods.length) {
                                    this.utilities.alertaInformatica("Debe seleccionar un alimento");
                                }
                                else {
                                    this.service
                                        .ActualizarComida(menu)
                                        .then((res) => {
                                        console.log(res);
                                        this.utilities.notificacionUsuario(this.dataRecibida + " guardado", "dark");
                                        this.navCtrl.navigateRoot("/bateria-alimento");
                                    })
                                        .catch((err) => {
                                        this.utilities.alertaInformatica("Error al guardar " + this.dataRecibida);
                                    });
                                }
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                // evitar guardar vacio
                console.log(menu);
                if (!menu.foods.length) {
                    this.utilities.alertaInformatica("Debe seleccionar un alimento");
                }
                else {
                    this.service
                        .ActualizarComida(menu)
                        .then((res) => {
                        console.log(res);
                        this.utilities.notificacionUsuario(this.dataRecibida + " actualizado", "dark");
                        this.navCtrl.navigateRoot("/bateria-alimento");
                    })
                        .catch((err) => {
                        this.utilities.notificacionUsuario("Error al actualizar " + this.dataRecibida, "danger");
                    });
                }
            }
        });
    }
    selecionartarjeta(tipo) {
        switch (tipo) {
            case 0:
                this.activar = 1;
                this.typefoods = 0;
                break;
            case 1:
                this.activar = 0;
                this.typefoods = 1;
                break;
            case 2:
                this.activar = 2;
                this.typefoods = 2;
                break;
            default:
                break;
        }
    }
    calculador() { }
    change(index) {
        this.alimentos[index].cantidad = 0;
    }
    comprobarMenu(comida) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let yesterday = new Date(Date.now() - 86400000)
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, "/");
            console.log("fecha de ayer", yesterday);
            const data = yield this.service.ListadoComida(comida, yesterday);
            if (data == false || data["menu"] == null) {
                return;
            }
            this.alimentosAyer = data;
            this.alerta(comida);
        });
    }
    // mensaje de reanudar
    alerta(mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Deseas cargar el menú anterior`,
                cssClass: "customMensaje1",
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "cancelButton",
                        handler: (blah) => {
                            return;
                        },
                    },
                    {
                        text: "Confirmar",
                        cssClass: "confirmButton",
                        handler: () => {
                            // mensaje confirmacion
                            this.MenuAnterior();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    // cargar menu anterior
    MenuAnterior() {
        let menu = {
            day: this.today,
            type_food: this.alimentosAyer.menu.type_food,
            total_proteins: this.alimentosAyer.menu.total_proteins,
            total_greases: this.alimentosAyer.menu.total_greases,
            total_carbos: this.alimentosAyer.menu.total_carbos,
            total_calories: this.alimentosAyer.menu.total_calories,
            foods: [],
        };
        this.alimentosAyer.menu.menu_food.forEach((element) => {
            let food = [element.food_id, parseInt(element.quantity), "gr"];
            menu.foods.push(food);
        });
        this.service
            .storeMenu(menu)
            .then((res) => {
            console.log(res);
            this.utilities.alertaInformatica(this.dataRecibida + " Guardado");
            this.navCtrl.navigateRoot("/bateria-alimento");
        })
            .catch((err) => {
            this.utilities.alertaInformatica("Error al guardar " + this.dataRecibida);
        });
    }
    info(unidad, nombre, cant, carbo, grasa, proteina, cantidad, eq, alimento) {
        if (unidad == "gr") {
            unidad = "unidad";
        }
        console.log(unidad, nombre, cant, carbo, grasa, proteina, cantidad, eq);
        this.calcularunidaIndividual(unidad, nombre, cant, carbo, grasa, proteina, cantidad, eq, alimento);
    }
    cerrar() {
        this.info2 = false;
    }
};
AlimentosEditarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
AlimentosEditarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-alimentos-editar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alimentos-editar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alimentos-editar/alimentos-editar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alimentos-editar.page.scss */ "./src/app/alimentos-editar/alimentos-editar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_nutricion_service__WEBPACK_IMPORTED_MODULE_3__["NutricionService"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], AlimentosEditarPage);



/***/ })

}]);
//# sourceMappingURL=alimentos-editar-alimentos-editar-module-es2015.js.map