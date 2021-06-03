(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-tabs color=\"danger\">\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"dashboard\" >\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <ion-label>Entrenamiento</ion-label>\n        </ion-tab-button>\n    \n        \n        <ion-tab-button tab=\"nutrition\">\n          <div style=\"width: 22px; height: 22px;\">\n            <img style=\"max-width: 100%; height: 100%;\"   name=\"nutrition-fittech\" src=\"assets/img/icono-plato.png\">\n          </div>\n          <ion-label>Nutrición</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"eye\">\n          <ion-icon name=\"cart-outline\"></ion-icon>  \n          <ion-label>Tienda</ion-label>\n        </ion-tab-button>\n  \n        <ion-tab-button tab=\"about\">\n          <ion-icon name=\"person-outline\"></ion-icon>\n          <ion-label>Perfil</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n\n");

/***/ }),

/***/ "./src/app/guards/nutricion.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/nutricion.guard.ts ***!
  \*******************************************/
/*! exports provided: NutricionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutricionGuard", function() { return NutricionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");




let NutricionGuard = class NutricionGuard {
    constructor(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    canActivate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //Validamos que exista la nutricion en el usuario
            const comprobar = yield this.service.obtenerUsuario();
            //Validamos que exista la nutricion en el cache
            const nutricion = yield this.service.cargarnutricion();
            //Validamos que exista el test home
            const validar = yield this.service.obtenerRutinaHome();
            if (validar == true) {
                if (nutricion === 'activado' || comprobar['food_measures'] !== null) {
                    this.navCtrl.navigateForward('/tutorial-alimentacion');
                    return true;
                }
                else {
                    this.navCtrl.navigateForward('/actividad');
                    return true;
                }
            }
            else {
                return false;
            }
        });
    }
};
NutricionGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"] }
];
NutricionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])
], NutricionGuard);



/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var src_app_guards_nutricion_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/nutricion.guard */ "./src/app/guards/nutricion.guard.ts");





const routes = [
    {
        path: '',
        redirectTo: 'dashboard'
    },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
            },
            {
                path: 'eye',
                loadChildren: () => Promise.all(/*! import() | tienda-tienda-module */[__webpack_require__.e("common"), __webpack_require__.e("tienda-tienda-module")]).then(__webpack_require__.bind(null, /*! ../../tienda/tienda.module */ "./src/app/tienda/tienda.module.ts")).then(m => m.TiendaPageModule)
            },
            {
                path: 'nutrition',
                loadChildren: () => __webpack_require__.e(/*! import() | bateria-alimento-bateria-alimento-module */ "bateria-alimento-bateria-alimento-module").then(__webpack_require__.bind(null, /*! ../../bateria-alimento/bateria-alimento.module */ "./src/app/bateria-alimento/bateria-alimento.module.ts")).then(m => m.BateriaAlimentoPageModule),
                canActivate: [src_app_guards_nutricion_guard__WEBPACK_IMPORTED_MODULE_4__["NutricionGuard"]]
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | perfil-perfil-module */ "perfil-perfil-module").then(__webpack_require__.bind(null, /*! ../perfil/perfil.module */ "./src/app/pages/perfil/perfil.module.ts")).then(m => m.PerfilPageModule)
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  --color-selected: white !important;\n  --background:#000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhcntcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB3aGl0ZSAhaW1wb3J0YW50OyBcbiAgICAtLWJhY2tncm91bmQ6IzAwMDtcbn0iLCJpb24tdGFiLWJhciB7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDojMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map