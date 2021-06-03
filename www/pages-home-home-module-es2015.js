(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <app-back-btn></app-back-btn>\n    </ion-buttons>\n    <div class=\"cabezera\">\n      <img src=\"assets/img/logo-app.png\" class=\"logo\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"animated fadeIn delay-1s\">\n\n  <div class=\"contenedor animated fadeIn delay-1s\">\n    <h2 class=\"titulo\">¿Cuál es tu género?</h2>\n      <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"auto\"  class=\"ion-text-center\">      \n        <ion-card style=\"width: 8rem; height: 7rem;\" class=\"color-tarjeta\" (click)=\"genero('1')\"  >\n          <svg height=\"40px\" viewBox=\"0 0 384 384\" width=\"40px\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m383.792969 13.9375c-.175781-1.378906-.480469-2.707031-.984375-3.953125-.015625-.03125-.015625-.074219-.023438-.113281 0-.007813-.007812-.015625-.015625-.023438-.554687-1.3125-1.3125-2.503906-2.167969-3.609375-.210937-.261719-.417968-.519531-.640624-.765625-.914063-1.03125-1.90625-1.984375-3.058594-2.761718-.03125-.023438-.070313-.03125-.101563-.054688-1.113281-.734375-2.34375-1.289062-3.632812-1.726562-.320313-.113282-.632813-.210938-.960938-.296876-1.351562-.367187-2.742187-.632812-4.207031-.632812h-112c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h73.367188l-95.496094 95.496094c-25.464844-20.367188-56.816406-31.496094-89.871094-31.496094-79.398438 0-144 64.601562-144 144s64.601562 144 144 144 144-64.601562 144-144c0-33.039062-11.121094-64.382812-31.503906-89.871094l95.503906-95.503906v73.375c0 8.832031 7.167969 16 16 16s16-7.167969 16-16v-112c0-.335938-.078125-.65625-.097656-.984375-.023438-.367187-.0625-.71875-.109375-1.078125zm-239.792969 338.0625c-61.761719 0-112-50.238281-112-112s50.238281-112 112-112c29.902344 0 58.054688 11.640625 79.222656 32.734375 21.136719 21.210937 32.777344 49.363281 32.777344 79.265625 0 61.761719-50.238281 112-112 112zm0 0\"/></svg>\n          <ion-card-content>\n            Hombre\n          </ion-card-content>\n        </ion-card>\n        </ion-col>\n        <ion-col size=\"auto\"  class=\"ion-text-center\">\n          <ion-card style=\"width: 8rem; height: 7rem;\" class=\"color-tarjeta2\" (click)=\"genero('0')\">\n            <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"40px\" width=\"40px\" \n    viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n  <g>\n  <g>\n    <path d=\"M376.264,290.173c66.314-66.293,66.314-174.16,0-240.453c-66.314-66.294-174.214-66.294-240.529,0\n      c-66.314,66.293-66.314,174.16,0,240.453c28.07,28.061,63.591,44.24,100.254,48.546v56.923h-40.018\n      c-11.051,0-20.009,8.956-20.009,20.003s8.958,20.003,20.009,20.003h40.018v56.348c0.001,11.047,8.959,20.003,20.011,20.003\n      c11.051,0,20.009-8.956,20.009-20.003v-56.348h40.019c11.051,0,20.009-8.956,20.009-20.003s-8.958-20.003-20.009-20.003h-40.019\n      V338.72C312.673,334.413,348.194,318.234,376.264,290.173z M164.033,261.884c-50.711-50.695-50.711-133.181,0-183.876\n      c50.71-50.693,133.221-50.696,183.934,0c50.711,50.695,50.711,133.181,0,183.876C297.256,312.578,214.744,312.578,164.033,261.884\n      z\"/>\n  </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n            </svg>\n            <ion-card-content>\n              Mujer\n            </ion-card-content>\n          </ion-card> \n        </ion-col>\n      </ion-row>\n      \n      </ion-grid>     \n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background:black;\n}\n\nion-content {\n  --background: #FCFCFC;\n  /*\n  background-image: url('/assets/img/imagen-genero.jpg');    \n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  */\n}\n\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n  padding: 0;\n}\n\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n\n.contenedor {\n  padding-top: 10%;\n}\n\n.contenedor h2 {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 0.7;\n  margin-bottom: 20px;\n}\n\n.color-tarjeta {\n  background-color: #ED1E24;\n}\n\n.color-tarjeta2 {\n  background-color: #000000;\n}\n\n.color-tarjeta3 {\n  background: -webkit-gradient(linear, right top, left bottom, from(red), color-stop(50%, red), color-stop(51%, black), to(black));\n  background: linear-gradient(to left bottom, red 0%, red 50%, black 51%, black 100%);\n}\n\nsvg {\n  display: block;\n  margin: auto;\n  fill: white !important;\n}\n\nion-card {\n  padding: 0px;\n  padding-top: 25px !important;\n  border-radius: 10px !important;\n  max-width: 150px;\n  max-height: 150px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n}\n\nion-card:hover {\n  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  opacity: 0.5;\n}\n\nion-card-content {\n  color: white;\n  text-align: center;\n  text-transform: capitalize;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUdHLHNCQUFBO0FDQ0g7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQTs7Ozs7R0FBQTtBQ1FGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FERkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEQUE7RUFFRSxnSUFBQTtFQUFBLG1GQUFBO0FDRUY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNERjs7QURJQTtFQUNFLDBDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNERjs7QURTQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDTkY7O0FEWUE7RUFDRSx5QkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuKntcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDpibGFjaztcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xuICAvKlxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2ltYWdlbi1nZW5lcm8uanBnJyk7ICAgIFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG4gICovXG59XG5cbi5sb2dve1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYWJlemVyYXtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVuZWRvcntcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4uY29sb3ItdGFyamV0YXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VEMUUyNDtcbn1cblxuLmNvbG9yLXRhcmpldGEye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY29sb3ItdGFyamV0YTN7XG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDAsMCwwLDEpLCByZ2JhKDI1NSwwLDAsMSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sIHJlZCAwJSwgcmVkIDUwJSwgYmxhY2sgNTElLGJsYWNrIDEwMCUpO1xuXG5cbn1cblxuXG5zdmd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGZpbGw6IHdoaXRlIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmR7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG5pb24tY2FyZDpob3ZlcntcbiAgYm94LXNoYWRvdzogMCA1cHggNHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi8vIC5jZW50cmFyLXJvd3tcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyB9XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBcbn1cblxuXG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuXG5cblxuIiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZDRkNGQztcbiAgLypcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbWFnZW4tZ2VuZXJvLmpwZycpOyAgICBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICAqL1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhYmV6ZXJhIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuLmNvbnRlbmVkb3IgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbG9yLXRhcmpldGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQxRTI0O1xufVxuXG4uY29sb3ItdGFyamV0YTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY29sb3ItdGFyamV0YTMge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sIHJlZCAwJSwgcmVkIDUwJSwgYmxhY2sgNTElLCBibGFjayAxMDAlKTtcbn1cblxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDVweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");




let HomePage = class HomePage {
    constructor(ruta, usuarioservicio) {
        this.ruta = ruta;
        this.usuarioservicio = usuarioservicio;
    }
    genero(valor) {
        console.log(valor);
        this.usuarioservicio.genero(valor);
        this.ruta.navigateForward(['/objetivo']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map