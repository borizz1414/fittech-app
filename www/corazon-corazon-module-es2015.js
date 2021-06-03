(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corazon-corazon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corazon/corazon.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corazon/corazon.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border animated fadeIn delay-1s\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" slot=\"fixed\" class=\"animated fadeIn delay-1s\">\n\n  <div class=\"contenedor\">\n\n      <h2 class=\"titulo\">¿Cómo late tu corazón?</h2>\n      \n      <div class=\"letra\">\n        Toma tu frecuencia cardíaca en reposo\n      </div>\n\n\n      <ion-grid class=\"my-grid animated fadeIn delay-2s\">\n      <ion-row class=\"parent-row\">\n        <p class=\"mensaje\" style=\"width: 100%;font-size: 18px;\">Toca para aprender cómo tomar tu frecuencia cardíaca en reposo</p>\n        <!-- <ion-col  size=\"6\">   \n          <div class=\"tarjeta\" (click)=\"abrirmodal('0')\">\n            <img src=\"assets/img/pulso-carotideo.jpg\" class=\"imagen\"/>\n          </div>   \n\n          <ion-button shape=\"round\" color=\"danger\" (click)=\"abrirmodal('0')\" style=\"--border-radius:10px;width: 90%;text-align: center;\"> <p> Pulso Carotídeo</p></ion-button>\n        </ion-col> -->\n        <ion-col  size=\"6\">   \n          <div class=\"tarjeta\" (click)=\"abrirmodal('1')\">\n            <img src=\"assets/img/pulso-radial.jpg\" class=\"imagen\"/>\n          </div>   \n       <!-- s -->\n          <ion-button shape=\"round\" color=\"danger\" (click)=\"abrirmodal('1')\" style=\"--border-radius:10px;width: 90%;text-align: center;\"> <p> Pulso Radial</p></ion-button>\n\n        </ion-col>\n\n      \n      </ion-row>\n      </ion-grid>      \n  </div>\n\n\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-corazon-info/modal-corazon-info.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-corazon-info/modal-corazon-info.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons slot=\"start\">\n  <ion-fab vertical=\"center\" style=\"margin-top:1.25rem;\"  horizontal=\"start\" slot=\"fixed\" class=\"animated fadeInUp delay-2s\" >\n   <ion-fab-button style=\"--background:#ef4044\" (click)=\"atras()\" size=\"small\">\n     <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-fab-button>\n </ion-fab>\n</ion-buttons>\n\n<ion-content>\n  <ion-card *ngIf=\"!mostrar\">\n    <img src=\"assets/img/imagenpulso2.jpg\" />\n    <ion-card-header>\n      <ion-card-title>Pulso radial</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-justify\">\n      1. Ubica los dedos índice y medio cerca de la base del pulgar.\n      <div></div>\n      2. Haz una leve presión con los dedos si es necesario para sentir las pulsaciones.\n      <div></div>\n      3. Usa un cronómetro y cuenta tus latidos por 10 segundos.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"mostrar\">\n    <img src=\"assets/img/pulso-carotideo.jpg\" />\n    <ion-card-header>\n      <ion-card-title>Pulso Carotídeo</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Colocar los dedos indices y corazón suavemente hasta sentir la arteria carotída de cualquier de los dos lados del cuello, en el espacio situado entre la tráquea y el musculo esternacleidomastoide(derecho o izquierdo), bajo\n      la mandibula.\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-padding\">\n    <b>Total de pulsaciones en 10 segundos:</b>\n    <!-- Contar los latidos por 10 segundo <b>y nosotros calculáremos tus latidos\n      por minutos.</b> -->\n  </div>\n\n  <ion-list lines=\"full\" class=\"ion-padding ion-margin-bottom\">\n    <ion-item >\n      <ion-label position=\"floating\" style=\"color: red;\" >Frecuencia cardíaca <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input type=\"number\" inputmode=\"numeric\" (ionInput)=\"valor($event)\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-col  size=\"12\">      \n    <ion-card  style=\"\n      background: #EF4044;\n      color: white;\n      width: 286px; \n      border-radius: 10px;\n      text-transform: uppercase;\n      font-family: 'Open Sans';\n      text-align: center;\n      margin: 0 auto;\n      \"\n   (click)=\"salir()\">\n    <h2 style=\"margin: 10px; text-align: center;\">\n      <b> Continuar </b>\n    </h2> \n   </ion-card>\n  </ion-col>\n\n  \n</ion-content>\n\n\n<!-- <ion-footer class=\"contenedor\">\n  <ion-toolbar >\n    <ion-buttons slot=\"end\"  (click)=\"acceder()\">\n      <ion-button id=\"changeText\" >\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" (click)=\"atras()\" >\n      <ion-button id=\"changeText\" >\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/corazon/corazon-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/corazon/corazon-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CorazonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorazonPageRoutingModule", function() { return CorazonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _corazon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corazon.page */ "./src/app/corazon/corazon.page.ts");




const routes = [
    {
        path: '',
        component: _corazon_page__WEBPACK_IMPORTED_MODULE_3__["CorazonPage"]
    }
];
let CorazonPageRoutingModule = class CorazonPageRoutingModule {
};
CorazonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CorazonPageRoutingModule);



/***/ }),

/***/ "./src/app/corazon/corazon.module.ts":
/*!*******************************************!*\
  !*** ./src/app/corazon/corazon.module.ts ***!
  \*******************************************/
/*! exports provided: CorazonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorazonPageModule", function() { return CorazonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _corazon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corazon-routing.module */ "./src/app/corazon/corazon-routing.module.ts");
/* harmony import */ var _corazon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corazon.page */ "./src/app/corazon/corazon.page.ts");
/* harmony import */ var _modal_corazon_info_modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-corazon-info/modal-corazon-info.page */ "./src/app/modal-corazon-info/modal-corazon-info.page.ts");
/* harmony import */ var _modal_corazon_info_modal_corazon_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-corazon-info/modal-corazon-info.module */ "./src/app/modal-corazon-info/modal-corazon-info.module.ts");









let CorazonPageModule = class CorazonPageModule {
};
CorazonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_corazon_info_modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_7__["ModalCorazonInfoPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_corazon_info_modal_corazon_info_module__WEBPACK_IMPORTED_MODULE_8__["ModalCorazonInfoPageModule"],
            _corazon_routing_module__WEBPACK_IMPORTED_MODULE_5__["CorazonPageRoutingModule"]
        ],
        declarations: [_corazon_page__WEBPACK_IMPORTED_MODULE_6__["CorazonPage"]]
    })
], CorazonPageModule);



/***/ }),

/***/ "./src/app/corazon/corazon.page.scss":
/*!*******************************************!*\
  !*** ./src/app/corazon/corazon.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: #fcfcfc;\n  /*\n  background-image: url('/assets/img/imagen-datos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 80%;*/\n}\n\nion-input {\n  text-align: start;\n  margin: 0 auto;\n  width: 80%;\n  box-shadow: 3px 7px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.imagen {\n  max-width: 100%;\n  width: 90%;\n  height: 130px;\n  border-radius: 5px;\n  margin: 0 auto;\n}\n\n.tarjeta {\n  width: 100%;\n  height: 130px;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.letra {\n  padding-left: 35px;\n  padding-right: 35px;\n  font-size: 18px;\n  text-align: center;\n  opacity: 0.7;\n  margin-bottom: 5%;\n}\n\nion-card {\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\n.mensaje {\n  font-size: 11px;\n  text-align: center;\n}\n\n.color-tarjeta {\n  color: white;\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yYXpvbi9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXGNvcmF6b25cXGNvcmF6b24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb3Jhem9uL2NvcmF6b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBR0csc0JBQUE7QUNDTDs7QURFRTtFQUNFLHFCQUFBO0VBQ0E7Ozs7d0JBQUE7QUNLSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0NKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRE9FO0VBQ0ksNkJBQUE7QUNKTjs7QURPRTtFQUNFLHVCQUFBO0FDSko7O0FETUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDSEo7O0FETUM7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUM7RUFDRSxjQUFBO0VBQ0MsVUFBQTtBQ0hKOztBRE1DO0VBQ0Msd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNDLGVBQUE7RUFFQSxrQkFBQTtBQ0pEOztBRE9BO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0FDSkQiLCJmaWxlIjoic3JjL2FwcC9jb3Jhem9uL2NvcmF6b24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuICBcbiAgKntcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgIC8qXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tZGF0b3MuanBnJyk7ICAgIFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7Ki9cbiAgfVxuICBcbiAgaW9uLWlucHV0e1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm94LXNoYWRvdzogM3B4IDdweCAxMHB4IC01cHggcmdiYSgwLDAsMCwwLjIpO1xuICB9XG5cblxuICAubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgLmNhYmV6ZXJhe1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5jb250ZW5lZG9ye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuIFxuICAudGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuIFxuXG4uaW1hZ2Vue1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGFyamV0YXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xufVxuXG5cbiAgaW9uLWNvbHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gfVxuLnBhcmVudC1yb3cge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuIH1cblxuIC5sZXRyYXtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiB9XG5cbiBpb24tY2FyZHtcbiAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiBpb24tY2FyZDpob3ZlcntcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVuc2FqZXtcbiBmb250LXNpemU6IDExcHg7XG4vLyAgb3BhY2l0eTogMC41O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yLXRhcmpldGF7XG4gY29sb3I6IHdoaXRlO1xuIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59IiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAvKlxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2ltYWdlbi1kYXRvcy5qcGcnKTsgICAgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTsqL1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJveC1zaGFkb3c6IDNweCA3cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbWFnZW4ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50YXJqZXRhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm15LWdyaWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubGV0cmEge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1lbnNhamUge1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yLXRhcmpldGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/corazon/corazon.page.ts":
/*!*****************************************!*\
  !*** ./src/app/corazon/corazon.page.ts ***!
  \*****************************************/
/*! exports provided: CorazonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorazonPage", function() { return CorazonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_corazon_info_modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-corazon-info/modal-corazon-info.page */ "./src/app/modal-corazon-info/modal-corazon-info.page.ts");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");





//servicios


let CorazonPage = class CorazonPage {
    constructor(modalController, ruta, ApiService, UsuarioService, loadingController) {
        this.modalController = modalController;
        this.ruta = ruta;
        this.ApiService = ApiService;
        this.UsuarioService = UsuarioService;
        this.loadingController = loadingController;
        this.habilitar = true;
    }
    ngOnInit() { }
    abrirmodal(valor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (valor == 0) {
                const modal = yield this.modalController.create({
                    component: _modal_corazon_info_modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_3__["ModalCorazonInfoPage"],
                    componentProps: {
                        dato: "cuello",
                    },
                });
                yield modal.present();
                const { data } = yield modal.onDidDismiss();
                if (data.salir) {
                    // LLAMAR ESPERA
                    this.presentLoading();
                    // Registro
                    const validoRegistro = yield this.ApiService.Registrar(this.UsuarioService.datosPersonales);
                    if (validoRegistro) {
                        // Antecedente
                        const validoAntecedente = yield this.ApiService.Antecedentefamiliar(this.UsuarioService.condicionPersona);
                        if (validoAntecedente) {
                            // Corazon ULTIMO PASO
                            const valido = yield this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos);
                            if (valido) {
                                // Termina espera
                                this.loadingController.dismiss();
                                this.ruta.navigateRoot(["/mensajecorazon"]);
                            }
                        }
                    }
                    else {
                        console.log(validoRegistro);
                        this.loadingController.dismiss();
                    }
                }
                else {
                    return;
                }
            }
            if (valor == 1) {
                const modal = yield this.modalController.create({
                    component: _modal_corazon_info_modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_3__["ModalCorazonInfoPage"],
                    componentProps: {
                        dato: "pulso",
                    },
                });
                yield modal.present();
                const { data } = yield modal.onDidDismiss();
                if (data.salir) {
                    // LLAMAR ESPERA
                    this.presentLoading();
                    // Registro
                    const validoRegistro = yield this.ApiService.Registrar(this.UsuarioService.datosPersonales);
                    if (validoRegistro) {
                        // Antecedente
                        const validoAntecedente = yield this.ApiService.Antecedentefamiliar(this.UsuarioService.condicionPersona);
                        if (validoAntecedente) {
                            // Corazon ULTIMO PASO
                            const valido = yield this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos);
                            if (valido) {
                                // Termina espera
                                console.log(valido);
                                this.loadingController.dismiss();
                                this.ruta.navigateRoot(["/mensajecorazon"]);
                            }
                        }
                    }
                }
                else {
                    this.loadingController.dismiss();
                    return;
                }
            }
        });
    }
    avanzar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.ruta.navigateRoot(['/antecedentefamiliar'])
            /*
            const valido = await this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos)
            if(valido){
             this.ruta.navigateRoot(['/antecedentefamiliar'])
            }else{
              return
            }*/
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Por favor espere...",
                cssClass: "my-loading",
            });
            yield loading.present();
        });
    }
};
CorazonPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
CorazonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-corazon",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corazon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corazon/corazon.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./corazon.page.scss */ "./src/app/corazon/corazon.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_4__["ApiFitechService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], CorazonPage);



/***/ }),

/***/ "./src/app/modal-corazon-info/modal-corazon-info-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modal-corazon-info/modal-corazon-info-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModalCorazonInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCorazonInfoPageRoutingModule", function() { return ModalCorazonInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalCorazonInfoPageRoutingModule = class ModalCorazonInfoPageRoutingModule {
};
ModalCorazonInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
], ModalCorazonInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/modal-corazon-info/modal-corazon-info.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modal-corazon-info/modal-corazon-info.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModalCorazonInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCorazonInfoPageModule", function() { return ModalCorazonInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_corazon_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-corazon-info-routing.module */ "./src/app/modal-corazon-info/modal-corazon-info-routing.module.ts");
/* harmony import */ var _modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-corazon-info.page */ "./src/app/modal-corazon-info/modal-corazon-info.page.ts");







let ModalCorazonInfoPageModule = class ModalCorazonInfoPageModule {
};
ModalCorazonInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_corazon_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCorazonInfoPageRoutingModule"]
        ],
        declarations: [_modal_corazon_info_page__WEBPACK_IMPORTED_MODULE_6__["ModalCorazonInfoPage"]]
    })
], ModalCorazonInfoPageModule);



/***/ }),

/***/ "./src/app/modal-corazon-info/modal-corazon-info.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modal-corazon-info/modal-corazon-info.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --highlight-color-focused: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtY29yYXpvbi1pbmZvL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxcbW9kYWwtY29yYXpvbi1pbmZvXFxtb2RhbC1jb3Jhem9uLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1jb3Jhem9uLWluZm8vbW9kYWwtY29yYXpvbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC1jb3Jhem9uLWluZm8vbW9kYWwtY29yYXpvbi1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJlZCAhaW1wb3J0YW50O1xufSIsImlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogcmVkICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modal-corazon-info/modal-corazon-info.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modal-corazon-info/modal-corazon-info.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalCorazonInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCorazonInfoPage", function() { return ModalCorazonInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mensajes.service */ "./src/app/services/mensajes.service.ts");





let ModalCorazonInfoPage = class ModalCorazonInfoPage {
    constructor(modalController, usuarioservicio, mensajeservice) {
        this.modalController = modalController;
        this.usuarioservicio = usuarioservicio;
        this.mensajeservice = mensajeservice;
        this.mostrar = false;
        this.escapar = false;
    }
    ngOnInit() {
        if (this.dato == 'cuello') {
            this.mostrar = true;
        }
        else {
            this.mostrar = false;
        }
    }
    valor(valor) {
        if (valor.target.value > 0 && valor.target.value <= 25) {
            this.heart_rate = valor.target.value * 10;
            this.escapar = true;
        }
        else {
            this.escapar = false;
        }
    }
    salir() {
        if (this.escapar && this.heart_rate > 0 && this.heart_rate <= 150) {
            this.usuarioservicio.latidos(this.heart_rate);
            console.log(this.usuarioservicio.condicionPersona);
            this.modalController.dismiss({
                salir: true
            });
        }
        else {
            this.mensajeservice.alertaInformatica('Por favor introduzca un valor valido');
        }
    }
    atras() {
        this.modalController.dismiss({
            salir: false
        });
    }
};
ModalCorazonInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalCorazonInfoPage.prototype, "dato", void 0);
ModalCorazonInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-corazon-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-corazon-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-corazon-info/modal-corazon-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-corazon-info.page.scss */ "./src/app/modal-corazon-info/modal-corazon-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])
], ModalCorazonInfoPage);



/***/ })

}]);
//# sourceMappingURL=corazon-corazon-module-es2015.js.map