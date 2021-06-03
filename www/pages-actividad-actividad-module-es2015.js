(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-actividad-actividad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actividad/actividad.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actividad/actividad.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <app-back-btn></app-back-btn>\n      </ion-buttons>\n      <div class=\"cabezera\">\n        <img src=\"assets/img/logo-app.png\" class=\"logo\">\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\" slot=\"fixed\" >\n    <div class=\"animated fadeIn delay-1s\" *ngIf=\"!actividad\">\n      <div class=\"animated fadeInLeft contenedor\" *ngIf=\"!info\">\n        <h2 class=\"titulo \" *ngIf=\"!info\">Nivel de actividad\n          <ion-icon class=\"ayudad\" name=\"alert-circle\" (click)=\"mostrar(info)\"></ion-icon>\n        </h2>\n        <ion-grid class=\"my-grid\">\n          <ion-row class=\"parent-row\">\n            <ion-col size=\"12\">\n              <ion-card  style=\"\n              width: 286px; \n              border-radius: 10px;\n              text-transform: uppercase;\n              font-family: 'Open Sans';\n              \"\n              color=\"dark\"\n            (click)=\"nivel(0)\">\n              <h2 style=\"margin: 10px;\">\n                <b>Sedentario</b>\n              </h2> \n              </ion-card> \n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-card  style=\"\n                width: 286px; \n                border-radius: 10px;\n                text-transform: uppercase;\n                font-family: 'Open Sans';\n                \"\n                color=\"dark\"\n              (click)=\"nivel(1)\">\n                <h2 style=\"margin: 10px;\">\n                  <b>Ligero</b>\n                </h2> \n                </ion-card>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-card  style=\"\n              width: 286px; \n              border-radius: 10px;\n              text-transform: uppercase;\n              font-family: 'Open Sans';\n              \"\n              color=\"dark\"\n            (click)=\"nivel(2)\">\n              <h2 style=\"margin: 10px;\">\n                <b>Moderado</b>\n              </h2> \n              </ion-card>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-card  style=\"\n                width: 286px; \n                border-radius: 10px;\n                text-transform: uppercase;\n                font-family: 'Open Sans';\n                \"\n                color=\"dark\"\n              (click)=\"nivel(3)\">\n                <h2 style=\"margin: 10px;\">\n                  <b>Activo</b>\n                </h2> \n                </ion-card>\n              </ion-col>\n\n              \n            <ion-col size=\"12\">\n                <ion-card  style=\"\n                width: 286px; \n                border-radius: 10px;\n                text-transform: uppercase;\n                font-family: 'Open Sans';\n                \"\n                color=\"dark\"\n              (click)=\"nivel(4)\">\n                <h2 style=\"margin: 10px;\">\n                  <b>Muy Activo</b>\n                </h2> \n                </ion-card>\n              </ion-col>\n\n\n\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"animated fadeInLeft\" *ngIf=\"info\">\n        <ion-grid class=\"my-grid\">\n            <ion-row class=\"parent-row animated fadeInLeft\">\n                <div class=\"container\">\n                    <h5 class=\"titulo\" style=\"text-align: center;\">Ayuda\n                        <ion-icon class=\"ayudad2\" name=\"close-outline\" (click)=\"cerrar()\"></ion-icon>\n                    </h5>\n                    <p class=\".ion-text-left\"><b>Sedentario:</b> No hago ejercicio, a veces 1 vez a la semana salgo a caminar.</p>\n                    <p class=\".ion-text-left\"><b>Ligero:</b> No hago ejercicio a veces en casa hago algunos oficios y paseo a la mascota con frecuencia.</p>\n                    <p class=\".ion-text-left\"><b>Moderado:</b> Hago ejercicio sin mucha intensidad 1 - 3 veces por semana.</p>\n                    <p class=\".ion-text-left\"><b>Activo:</b> Hago ejercicio muy activo 3 - 5 veces por semana, a veces hago algún deporte, camino mucho.</p>\n                    <p class=\".ion-text-left\"><b>Muy Activo:</b> Trabajo intensamente al menos 5 veces a la semana, incluso a veces puedo ejercitarme dos veces al dia. solo tengo un día o menos de descanso total.</p>\n                </div>\n  \n            </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n\n  \n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/actividad/actividad-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/actividad/actividad-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ActividadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageRoutingModule", function() { return ActividadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _actividad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actividad.page */ "./src/app/pages/actividad/actividad.page.ts");




const routes = [
    {
        path: '',
        component: _actividad_page__WEBPACK_IMPORTED_MODULE_3__["ActividadPage"]
    }
];
let ActividadPageRoutingModule = class ActividadPageRoutingModule {
};
ActividadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActividadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/actividad/actividad.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/actividad/actividad.module.ts ***!
  \*****************************************************/
/*! exports provided: ActividadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageModule", function() { return ActividadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _actividad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actividad-routing.module */ "./src/app/pages/actividad/actividad-routing.module.ts");
/* harmony import */ var _actividad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actividad.page */ "./src/app/pages/actividad/actividad.page.ts");
/* harmony import */ var src_app_components_popmensaje_popmensaje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/popmensaje/popmensaje.component */ "./src/app/components/popmensaje/popmensaje.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let ActividadPageModule = class ActividadPageModule {
};
ActividadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            src_app_components_popmensaje_popmensaje_component__WEBPACK_IMPORTED_MODULE_7__["PopmensajeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actividad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActividadPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_actividad_page__WEBPACK_IMPORTED_MODULE_6__["ActividadPage"]]
    })
], ActividadPageModule);



/***/ }),

/***/ "./src/app/pages/actividad/actividad.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/actividad/actividad.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-content {\n  --background: none;\n  /*\n  background-image: url('/assets/img/imagen-objetivos.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  */\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 20px !important;\n  text-align: center;\n  overflow: hidden;\n}\n\n.piepagina {\n  margin-bottom: 10%;\n  font-size: 15px;\n}\n\n.titulo {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\np {\n  text-align: left;\n  margin-left: 1rem;\n  font-size: 1.2rem;\n}\n\nion-toolbar {\n  --background:black;\n}\n\n.color-tarjeta {\n  background-color: #000000;\n}\n\nion-card {\n  color: white;\n  padding: 0px !important;\n  margin: 0px !important;\n  border-radius: 10px !important;\n  margin-bottom: 20px !important;\n  width: 88%;\n  margin: 0 auto !important;\n  word-wrap: break-word;\n}\n\nion-card h2 {\n  font-size: 17px !important;\n  padding: 2px !important;\n}\n\nion-card:hover {\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-col {\n  margin-bottom: 8px !important;\n}\n\n.my-grid {\n  height: 100% !important;\n}\n\n.parent-row {\n  height: 100% !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.ayudad {\n  fill: #e5141a;\n  font-size: 29px !important;\n}\n\n.ayudad2 {\n  color: #e5141a;\n  font-size: 29px !important;\n  position: absolute;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpZGFkL0M6XFxVc2Vyc1xcZWxtZWpcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxJb25pY1xcZml0dGVjaC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGFjdGl2aWRhZFxcYWN0aXZpZGFkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWN0aXZpZGFkL2FjdGl2aWRhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFHRyxzQkFBQTtBQ0NIOztBREVBO0VBQ0Usa0JBQUE7RUFDQTs7Ozs7R0FBQTtBQ01GOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFFQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDRDs7QURDQztFQUNDLDBCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURJQTtFQUNHLHdCQUFBO0VBQUEsZ0JBQUE7RUFDRCxZQUFBO0FDREY7O0FESUE7RUFDSSw2QkFBQTtBQ0RKOztBRElBO0VBQ0UsdUJBQUE7QUNERjs7QURHQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNBRjs7QURHQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0FBOztBREdBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY3RpdmlkYWQvYWN0aXZpZGFkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuKntcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLypcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tb2JqZXRpdm9zLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICAqL1xufVxuXG4ubG9nb3tcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmF7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3J7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBpZXBhZ2luYXtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0dWxve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbnB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDpibGFjaztcbn1cblxuLmNvbG9yLXRhcmpldGF7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuaW9uLWNhcmR7XG4gY29sb3I6IHdoaXRlO1xuIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gLy9hbnRlcmlvciBlc3RhYmEgZW4gMTJcbiBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuIHdpZHRoOiA4OCU7XG4gbWFyZ2luOjAgYXV0byAhaW1wb3J0YW50O1xuIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuIGgye1xuICBmb250LXNpemU6IDE3cHghaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xuIH1cblxufVxuXG5pb24tY2FyZDpob3ZlcntcbiAgIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWNvbHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHghaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnBhcmVudC1yb3cge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYXl1ZGFke1xuZmlsbDogcmdiKDIyOSwgMjAsIDI2KTtcbmZvbnQtc2l6ZTogMjlweCFpbXBvcnRhbnQ7XG59XG5cbi5heXVkYWQye1xuY29sb3I6IHJnYigyMjksMjAsIDI2KTtcbmZvbnQtc2l6ZTogMjlweCFpbXBvcnRhbnQ7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogMXJlbTtcbn1cblxuIiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAvKlxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2ltYWdlbi1vYmpldGl2b3MuanBnJyk7ICAgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG4gICovXG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FiZXplcmEge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBpZXBhZ2luYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuXG4uY29sb3ItdGFyamV0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubXktZ3JpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFyZW50LXJvdyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5heXVkYWQge1xuICBmaWxsOiAjZTUxNDFhO1xuICBmb250LXNpemU6IDI5cHggIWltcG9ydGFudDtcbn1cblxuLmF5dWRhZDIge1xuICBjb2xvcjogI2U1MTQxYTtcbiAgZm9udC1zaXplOiAyOXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/actividad/actividad.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/actividad/actividad.page.ts ***!
  \***************************************************/
/*! exports provided: ActividadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPage", function() { return ActividadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");




let ActividadPage = class ActividadPage {
    constructor(apiService, ruta) {
        this.apiService = apiService;
        this.ruta = ruta;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.actividad = await this.apiService.cargaractividad()
            console.log(this.actividad);
            this.info = false;
        });
    }
    nivel(valor) {
        console.log(valor);
        //  this.apiService.guardaractividad(valor)
        this.ruta.navigateForward(['/porcentajegrasa']);
    }
    mostrar(valor) {
        this.info = !valor;
    }
    cerrar() {
        this.info = false;
    }
};
ActividadPage.ctorParameters = () => [
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ActividadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actividad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actividad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actividad/actividad.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actividad.page.scss */ "./src/app/pages/actividad/actividad.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ActividadPage);



/***/ })

}]);
//# sourceMappingURL=pages-actividad-actividad-module-es2015.js.map