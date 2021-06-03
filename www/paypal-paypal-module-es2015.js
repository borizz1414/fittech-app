(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paypal-paypal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Método de pago paypal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div #paypal></div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paypal/paypal-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/paypal/paypal-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PaypalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageRoutingModule", function() { return PaypalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");




const routes = [
    {
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_3__["PaypalPage"]
    }
];
let PaypalPageRoutingModule = class PaypalPageRoutingModule {
};
PaypalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaypalPageRoutingModule);



/***/ }),

/***/ "./src/app/paypal/paypal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.module.ts ***!
  \*****************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paypal-routing.module */ "./src/app/paypal/paypal-routing.module.ts");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");







let PaypalPageModule = class PaypalPageModule {
};
PaypalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaypalPageRoutingModule"]
        ],
        declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
    })
], PaypalPageModule);



/***/ }),

/***/ "./src/app/paypal/paypal.page.scss":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/paypal/paypal.page.ts":
/*!***************************************!*\
  !*** ./src/app/paypal/paypal.page.ts ***!
  \***************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_paypal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/paypal.service */ "./src/app/services/paypal.service.ts");



let PaypalPage = class PaypalPage {
    constructor(PaypalService) {
        this.PaypalService = PaypalService;
        this.product = {
            price: 55,
            description: 'plan estandar',
        };
        this.paidFor = false;
        this.id = 'AWoxBafpovhm2Dtp-MzfiXvJ84fHkYcYkT7TH8G-N2l5VRSjTu7DMAn55fWjmj-hQulJ9G4EUeAPSsNx';
    }
    ngOnInit() {
        this.PaypalService.initiate(this.id).subscribe(() => paypal.Buttons({
            // THE REST IS JUST TYPICAL PAYPAL BUTTON STUFF.
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: this.product.description,
                            amount: {
                                currency_code: 'USD',
                                value: this.product.price,
                            }
                        }
                    ]
                });
            },
            onApprove: (data, actions) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const order = yield actions.order.capture();
                this.paidFor = true;
                console.log(order);
            })
        }).render(this.paypalElement.nativeElement));
    }
    ngOnDestroy() {
        this.PaypalService.remove();
    }
};
PaypalPage.ctorParameters = () => [
    { type: _services_paypal_service__WEBPACK_IMPORTED_MODULE_2__["PaypalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PaypalPage.prototype, "paypalElement", void 0);
PaypalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paypal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal.page.scss */ "./src/app/paypal/paypal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_paypal_service__WEBPACK_IMPORTED_MODULE_2__["PaypalService"]])
], PaypalPage);



/***/ }),

/***/ "./src/app/services/paypal.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/paypal.service.ts ***!
  \********************************************/
/*! exports provided: PaypalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalService", function() { return PaypalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PaypalService = class PaypalService {
    constructor(document) {
        this.document = document;
    }
    initiate(clientId) {
        const paypalScriptElement = this.document.createElement('script');
        paypalScriptElement.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
        paypalScriptElement.id = 'paypal-script';
        this.document.head.appendChild(paypalScriptElement);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(paypalScriptElement, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
    }
    remove() {
        const paypalScriptElement = this.document.getElementById('paypal-script');
        this.document.head.removeChild(paypalScriptElement);
    }
};
PaypalService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
PaypalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document])
], PaypalService);



/***/ })

}]);
//# sourceMappingURL=paypal-paypal-module-es2015.js.map