(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-TestCapacidad-bateriahome-bateriahome-module"],{

/***/ "./node_modules/mugan86-cronometro/dist/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/mugan86-cronometro/dist/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tiempo;
(function (Tiempo) {
    Tiempo[Tiempo["SG_MIN"] = 60] = "SG_MIN";
    Tiempo[Tiempo["SG_HORA"] = 3600] = "SG_HORA";
    Tiempo[Tiempo["HORAS_DIA"] = 24] = "HORAS_DIA";
    Tiempo[Tiempo["SG_DIA"] = 86400] = "SG_DIA";
})(Tiempo = exports.Tiempo || (exports.Tiempo = {}));


/***/ }),

/***/ "./node_modules/mugan86-cronometro/dist/contador.js":
/*!**********************************************************!*\
  !*** ./node_modules/mugan86-cronometro/dist/contador.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
const map_1 = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
const conversion_1 = __webpack_require__(/*! ./conversion */ "./node_modules/mugan86-cronometro/dist/conversion.js");
/**
 * Clase para contar numeros y mostrar el reloj de menos a más
 */
class Contador {
    /**
     * Añadir el número máximo para especifcar el limite
     * @param valor valor limite
     */
    constructor(limite) {
        /**
         * @ignore
         */
        this.valorLimite = -1;
        this.valorLimite = limite;
    }
    /**
     * Ejecuta la función de contar
     */
    start() {
        return interval_1.interval(1000).pipe(map_1.map((x) => {
            return conversion_1.convertirSGAFormatoReloj(x, 1, this.valorLimite);
        }));
    }
}
exports.Contador = Contador;


/***/ }),

/***/ "./node_modules/mugan86-cronometro/dist/conversion.js":
/*!************************************************************!*\
  !*** ./node_modules/mugan86-cronometro/dist/conversion.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/mugan86-cronometro/dist/constants.js");
/**
 * Convertir de sg a HH:MM:SS
 * @example
 * Un ejemplo a poner
 * @param tiempoSg Tiempo del momento
 * @param tipo Tipo -> 1 Contador 2 Descontador
 * @param limite Valor limite
 */
function convertirSGAFormatoReloj(tiempoSg, tipo, limite) {
    if (tipo === 1 && limite === tiempoSg || tipo === 2 && tiempoSg === 0) {
        return 'FINISH';
    }
    // SG ---> HH:MM:SS
    const horas = adaptToClockFormat(Math.floor((tiempoSg % constants_1.Tiempo.SG_DIA) / constants_1.Tiempo.SG_HORA));
    const minutos = adaptToClockFormat(Math.floor((tiempoSg % constants_1.Tiempo.SG_HORA) / constants_1.Tiempo.SG_MIN));
    const sg = adaptToClockFormat(Math.floor(tiempoSg % constants_1.Tiempo.SG_MIN));
    return `${horas}:${minutos}:${sg}`;
}
exports.convertirSGAFormatoReloj = convertirSGAFormatoReloj;
/**
 * Pasar un numero menor de 10 a formato reloj
 * @param n
 */
function adaptToClockFormat(n) {
    return (n < 10) ? '0'.concat(String(n)) : n;
}


/***/ }),

/***/ "./node_modules/mugan86-cronometro/dist/descontador.js":
/*!*************************************************************!*\
  !*** ./node_modules/mugan86-cronometro/dist/descontador.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
const map_1 = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
const conversion_1 = __webpack_require__(/*! ./conversion */ "./node_modules/mugan86-cronometro/dist/conversion.js");
/**
 * Clase para descontar numeros y mostrar el reloj de más a menos
 */
class Descontador {
    /**
     * Añadir el número máximo para especifcar donde empieza
     * @param valor valor limite
     */
    constructor(valor) {
        /**
         * @ignore
         */
        this.valorInicial = -1;
        this.valorInicial = valor;
    }
    /**
     * Ejecuta la función de descontar
     */
    start() {
        return interval_1.interval(1000).pipe(map_1.map((x) => {
            return conversion_1.convertirSGAFormatoReloj(this.valorInicial - x, 2, 1);
        }));
    }
}
exports.Descontador = Descontador;


/***/ }),

/***/ "./node_modules/mugan86-cronometro/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mugan86-cronometro/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./constants */ "./node_modules/mugan86-cronometro/dist/constants.js"));
__export(__webpack_require__(/*! ./conversion */ "./node_modules/mugan86-cronometro/dist/conversion.js"));
__export(__webpack_require__(/*! ./contador */ "./node_modules/mugan86-cronometro/dist/contador.js"));
__export(__webpack_require__(/*! ./descontador */ "./node_modules/mugan86-cronometro/dist/descontador.js"));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <div class=\"cabezera\">\n    <img src=\"assets/img/logo-app.png\" class=\"logo\">\n  </div>\n</ion-header>\n\n\n\n<!-- contenedor descanso -->\n<ion-content *ngIf=\"status == 'descanso'\" style=\"--background:black;\">\n<ion-grid class=\"grid1\">\n  <ion-row class=\"ion-justify-content-center\">\n    <p style=\"margin-top: 0; text-align: center; margin-bottom: 0; width: 100%; font-size: 22px;\n    padding-top: 10px;\">Comienza en</p>\n    <p class=\"center\">0{{timeLeft}}</p>\n    <p style=\"font-size: 22px; margin: 0; width: 100%; text-align: center;\">Tu siguiente ejercicio es: </p>\n    <!-- <p  style=\"color: red; width: 100%; text-align: center;\" > NOMBRE DEL EJERCICIO</p> -->\n    <!-- {{nombre || capitalize}} -->\n    <ion-col class=\"ion-text-center\" size=\"12\" style=\"padding: 0px;\">\n      <video autoplay loop width=\"100%\"  class=\"videoReproductor\" poster=\"assets/img/videogif.gif\">\n        <source [src]= \"video2\" *ngIf=\"video2\" type=\"video/mp4\" />\n      </video>\n      <!-- <div>\n        <img  src=\"assets/img/videogif.gif\">\n      </div> -->\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: -1rem;\">\n    <ion-col size=\"12\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<div class=\"grid2\">\n  <h1 class=\"titulodescanso\" style=\"margin-top: 10px !important;color: white;\">Descanso</h1>\n</div>\n</ion-content>\n\n\n<!-- contenedor rutina -->\n<ng-container *ngIf=\"status == 'rutina'\">\n  \n  <ion-content>\n    <!-- Video -->\n    <video #myVideo  playsinline  class=\"videoReproductor\"\n    width=\"100%\"\n    loop\n    muted=\"muted\" \n    poster=\"assets/img/videogif.gif\">\n      <source [src]= \"video\" *ngIf=\"video\" />\n    </video>\n    \n  <div class=\"contenedor\">\n    <div class=\"contenedor-cabezera\">\n      <p>\n        Esfuérzate al máximo y la primera vez que pares toca el botón</p>\n    </div>\n    <div class=\"contenedor-cuerpo\">\n      <p class=\"reloj\">{{zero}}{{timeLeft}}</p>\n      <p class=\"segundos\">Segundos</p>\n    </div>\n    <div class=\"contenedor-piepagina\">\n      <ion-card style=\"  \n      background: #EF4044;\n      color: white;\n      width: 80%; \n      border-radius: 10px;\n      font-family: 'Open Sans';\" (click)=\"finalizar()\" *ngIf=\"ready\">\n      <h2 style=\"text-align: center;\">\n       <b> Hasta aquí llegué </b>\n      </h2>  \n    </ion-card>\n    </div>\n  </div>\n    \n</ion-content>\n\n</ng-container>");

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/pages/TestCapacidad/bateriahome/bateriahome-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/TestCapacidad/bateriahome/bateriahome-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BateriahomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriahomePageRoutingModule", function() { return BateriahomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bateriahome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bateriahome.page */ "./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.ts");




const routes = [
    {
        path: '',
        component: _bateriahome_page__WEBPACK_IMPORTED_MODULE_3__["BateriahomePage"]
    }
];
let BateriahomePageRoutingModule = class BateriahomePageRoutingModule {
};
BateriahomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BateriahomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/TestCapacidad/bateriahome/bateriahome.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/TestCapacidad/bateriahome/bateriahome.module.ts ***!
  \***********************************************************************/
/*! exports provided: BateriahomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriahomePageModule", function() { return BateriahomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bateriahome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bateriahome-routing.module */ "./src/app/pages/TestCapacidad/bateriahome/bateriahome-routing.module.ts");
/* harmony import */ var _bateriahome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bateriahome.page */ "./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.ts");







let BateriahomePageModule = class BateriahomePageModule {
};
BateriahomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bateriahome_routing_module__WEBPACK_IMPORTED_MODULE_5__["BateriahomePageRoutingModule"]
        ],
        declarations: [_bateriahome_page__WEBPACK_IMPORTED_MODULE_6__["BateriahomePage"]]
    })
], BateriahomePageModule);



/***/ }),

/***/ "./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*logo*/\n.logo {\n  margin: 0 auto;\n  max-height: 150px;\n}\n.cabezera {\n  max-height: 150px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: black;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (orientation: landscape) {\n  .cabezera {\n    display: none !important;\n  }\n}\n/*fin logo*/\n.videoReproductor {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 16em;\n}\n@media (max-height: 640px) {\n  .videoReproductor {\n    height: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n}\n.contenedor {\n  width: 100%;\n  height: 100%;\n}\n.contenedor-cabezera {\n  width: 100%;\n  max-height: 4rem;\n  height: 4rem;\n  background-color: black;\n  color: white;\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.contenedor-cabezera p {\n  font-size: 1.1rem;\n  text-align: center;\n}\n@media (max-height: 640px) {\n  .contenedor-cabezera p {\n    font-size: 1rem;\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n}\n.contenedor-cuerpo {\n  width: 100%;\n  /*  max-height: 40%; */\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.contenedor-piepagina {\n  width: 100%;\n  max-height: 30%;\n  height: 30%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.controlar-texto {\n  margin: 10px;\n}\n.titulo {\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 800;\n}\n.reloj {\n  margin: 10px !important;\n  font-size: 4em;\n  font-weight: 800;\n}\n.redondear {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border-radius: 10px;\n  border: 4px;\n}\nh2 {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 10px !important;\n}\n.center {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 800;\n  padding-top: 0px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.grid1 {\n  background-color: #F4F3F1;\n  padding: 0px;\n}\n.grid2 {\n  padding: 0px;\n}\n.titulodescanso {\n  color: #959595;\n  text-align: center;\n  font-size: 50px;\n}\n.segundos {\n  margin: 0;\n  font-size: 1rem;\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVGVzdENhcGFjaWRhZC9iYXRlcmlhaG9tZS9DOlxcVXNlcnNcXGVsbWVqXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcSW9uaWNcXGZpdHRlY2gtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxUZXN0Q2FwYWNpZGFkXFxiYXRlcmlhaG9tZVxcYmF0ZXJpYWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9UZXN0Q2FwYWNpZGFkL2JhdGVyaWFob21lL2JhdGVyaWFob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRFNBO0VBQ0EsaUJBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFBJO0VBTUo7SUFTUSx3QkFBQTtFQ0pOO0FBQ0Y7QURNQSxXQUFBO0FBU0E7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYSjtBREVJO0VBTUo7SUFLUSxZQUFBO0lBQ0EsbUJBQUE7T0FBQSxnQkFBQTtFQ1ROO0FBQ0Y7QURlQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FDWkg7QURlQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEYUc7RUFDSyxpQkFBQTtFQUFtQixrQkFBQTtBQ1YzQjtBRDFCSTtFQW1DRDtJQUdTLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDUlY7QUFDRjtBRFlBO0VBQ0ksV0FBQTtFQUNELHNCQUFBO0VBQ0MsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNUSjtBRGNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNaSjtBRGVDO0VBQ0ksWUFBQTtBQ1pMO0FEZUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZUE7RUFFSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNiSjtBRGdCQTtFQUNJLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSwyQkFBQTtBQ2RKO0FEOEJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMzQko7QUQ4QkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUMzQko7QUQ2QkM7RUFDSSxZQUFBO0FDMUJMO0FENkJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzFCSjtBRDZCQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMxQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9UZXN0Q2FwYWNpZGFkL2JhdGVyaWFob21lL2JhdGVyaWFob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9nbyovXG4ubG9nb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgQG1peGluIHBhbnRhbGxhLWFuY2hhIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cblxuLmNhYmV6ZXJhe1xubWF4LWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBAaW5jbHVkZSBwYW50YWxsYS1hbmNoYSgpe1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLypmaW4gbG9nbyovXG5cbkBtaXhpbiB0ZWxlZm9uby1yZXNwb25zaXZvIHtcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6NjQwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbi8vIGFqdXN0YXIgaW1hZ2VuIGRlIGNhcmdhIGEgdmlkZW9cbi52aWRlb1JlcHJvZHVjdG9ye1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxNmVtO1xuICAgIEBpbmNsdWRlIHRlbGVmb25vLXJlc3BvbnNpdm8oKXtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBvYmplY3QtZml0OiBmaWxsOyBcbiAgICB9XG59XG5cblxuXG4vLyBjb250ZW5lZG9yXG4uY29udGVuZWRvcntcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OjEwMCU7IFxufVxuLy8gY29udGVuZWRvciBjYWJlemVyYVxuLmNvbnRlbmVkb3ItY2FiZXplcmF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNHJlbTtcbiAgICBoZWlnaHQ6NHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBwe1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBAaW5jbHVkZSB0ZWxlZm9uby1yZXNwb25zaXZvKCl7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgfVxufVxuLy8gY29udGVuZWRvciBjdWVycG9cbi5jb250ZW5lZG9yLWN1ZXJwb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgIC8qICBtYXgtaGVpZ2h0OiA0MCU7ICovXG4gICAgaGVpZ2h0OmF1dG87IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuXG4gLy8gY29udGVuZWRvciBwaWVwYWdpbmFcbi5jb250ZW5lZG9yLXBpZXBhZ2luYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG4gICAgaGVpZ2h0OjMwJTsgXG4gICAgLy9jZW50cmFyXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuIC5jb250cm9sYXItdGV4dG97XG4gICAgIG1hcmdpbjogMTBweDtcbiB9XG5cbi50aXR1bG8ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmVsb2p7XG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlZG9uZGVhcntcbiAgICAvL2xsZW5hciBlc3BhY2lvXG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiA0cHg7XG4gICB9XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5cbi8vIC5pb24tdGV4dC1jZW50ZXIudGl0dWxvIHtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vIH1cbi8vIC5pb24tZ3JpZDF7XG4vLyAgICAgaGVpZ2h0OjE5JTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cblxuLy8gLmVsaW1pbmFyLW1hcmdpbntcbi8vICBtYXJnaW4tdG9wOiA3cHghaW1wb3J0YW50O1xuLy8gfVxuXG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZ3JpZDF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGM0YxOyBcbiAgICBwYWRkaW5nOiAwcHg7XG4gfVxuIC5ncmlkMntcbiAgICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLnRpdHVsb2Rlc2NhbnNve1xuICAgIGNvbG9yOiAjOTU5NTk1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5zZWd1bmRvc3tcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IC0xcmVtOyAgIFxuICAgIH0iLCIvKmxvZ28qL1xuLmxvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWJlemVyYSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY2FiZXplcmEge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKmZpbiBsb2dvKi9cbi52aWRlb1JlcHJvZHVjdG9yIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2ZW07XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gIC52aWRlb1JlcHJvZHVjdG9yIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgfVxufVxuXG4uY29udGVuZWRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yLWNhYmV6ZXJhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250ZW5lZG9yLWNhYmV6ZXJhIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NDBweCkge1xuICAuY29udGVuZWRvci1jYWJlemVyYSBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4uY29udGVuZWRvci1jdWVycG8ge1xuICB3aWR0aDogMTAwJTtcbiAgLyogIG1heC1oZWlnaHQ6IDQwJTsgKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVuZWRvci1waWVwYWdpbmEge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250cm9sYXItdGV4dG8ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmVsb2oge1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yZWRvbmRlYXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogNHB4O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ncmlkMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjE7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmdyaWQyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGl0dWxvZGVzY2Fuc28ge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5zZWd1bmRvcyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.ts ***!
  \*********************************************************************/
/*! exports provided: BateriahomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BateriahomePage", function() { return BateriahomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-fitech.service */ "./src/app/services/api-fitech.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





var lib = __webpack_require__(/*! mugan86-cronometro */ "./node_modules/mugan86-cronometro/dist/index.js");
let BateriahomePage = class BateriahomePage {
    constructor(capturar, ApiService, ruta, navCtrl) {
        this.capturar = capturar;
        this.ApiService = ApiService;
        this.ruta = ruta;
        this.navCtrl = navCtrl;
        this.rutinas = [];
        this.status = 'rutina';
        this.secuencia = 1;
        this.actual = 0;
        this.mostrar = true;
        this.sonido = "../../../assets/sonido/reloj.mp3";
        this.sonido2 = "../../../assets/sonido/campana.mp3";
        this.data = [];
        //codigo para videos
        if (this.ApiService.genero == 1) {
            this.data = this.ApiService.rutinaTestCasaHombre;
        }
        if (this.ApiService.genero == 0) {
            this.data = this.ApiService.rutinaTestCasaMujer;
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.capturar.snapshot.paramMap.get('id');
            this.setValues();
            this.startVideo();
        });
    }
    setValues() {
        console.log(this.data);
        this.final = this.data.length;
        this.total = this.data.length;
    }
    startVideo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ready = false;
            this.setValues();
            console.log(this.data[this.actual].url);
            this.video = this.data[this.actual].url;
            this.mostrar = true;
            this.timeLeft = 40;
            var b = setInterval(() => {
                console.log(this.txtVideo.nativeElement.readyState);
                if (this.txtVideo.nativeElement.readyState === 4) {
                    this.txtVideo.nativeElement.play();
                    this.ready = true;
                    //cronometro
                    clearInterval(b);
                    this.startTimer();
                }
            }, 500);
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
            if (this.timeLeft > 1 && this.timeLeft <= 5) {
                this.playSonido(1);
            }
            if (this.timeLeft === 1) {
                this.playSonido(2);
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
        this.mostrar = false;
        this.txtVideo.nativeElement.pause();
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
        }
        else {
            this.actual++;
            console.log('Actual', this.actual);
            console.log('total', this.total);
            console.log('Rutina', this.data);
            if (this.actual == 16) {
                clearInterval(this.tiemposegundo);
                this.navCtrl.navigateRoot('mensajecapacidad/16');
            }
            else if (this.actual == this.total) {
                this.secuencia++;
                this.actual = 0;
                this.setValues();
                clearInterval(this.tiemposegundo);
                this.timerDescanse();
                this.status = 'descanso';
            }
            else {
                clearInterval(this.tiemposegundo);
                this.timerDescanse();
                this.status = 'descanso';
            }
        }
    }
    atras() {
        if (this.actual < 1) {
            clearInterval(this.tiemposegundo);
            // this.navCtrl.pop();
        }
        else {
            clearInterval(this.tiemposegundo);
            this.actual = this.actual - 1;
            this.timerDescanse();
            this.status = 'descanso';
        }
    }
    timerDescanse() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zero = null;
            // this.imagen = `http://fittech247.com/fittech/imagenes/${this.data['ejercicios Calentamiento'][this.actual].cod}/${this.data['ejercicios Calentamiento'][this.actual].id}.jpg`;
            this.video2 = this.data[this.actual].url;
            this.timeLeft = 5;
            this.tiemposegundo = setInterval(() => {
                if (this.timeLeft >= 1 && this.timeLeft < 10) {
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
    finalizar() {
        // clearInterval(this.tiemposegundo);
        this.pauseTimer();
        this.navCtrl.navigateRoot(`mensajecapacidad/${this.actual}`);
    }
    // cierra la subcripcion
    ionViewWillLeave() {
        this.audio.pause();
    }
};
BateriahomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myVideo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BateriahomePage.prototype, "txtVideo", void 0);
BateriahomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bateriahome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bateriahome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bateriahome.page.scss */ "./src/app/pages/TestCapacidad/bateriahome/bateriahome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_api_fitech_service__WEBPACK_IMPORTED_MODULE_2__["ApiFitechService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], BateriahomePage);



/***/ })

}]);
//# sourceMappingURL=pages-TestCapacidad-bateriahome-bateriahome-module-es2015.js.map