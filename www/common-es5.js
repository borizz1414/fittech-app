function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3528f139.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex3528f139Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-80bde1aa.js */
    "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-1850e475-js */
      "ios-transition-1850e475-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-1850e475.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-1850e475.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-083fcf52-js */
      "md-transition-083fcf52-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-083fcf52.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-083fcf52.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(opts) {
        var animationBuilder, ani;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getAnimationBuilder(opts);

              case 2:
                animationBuilder = _context2.sent;
                ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                return _context2.abrupt("return", ani);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function runTransition(_x6) {
        return _ref2.apply(this, arguments);
      };
    }();

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(opts) {
        var getAnimation;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                if (!opts.animationBuilder) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", opts.animationBuilder);

              case 4:
                if (!(opts.mode === 'ios')) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return iosTransitionAnimation();

              case 7:
                _context3.t0 = _context3.sent.iosTransitionAnimation;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return mdTransitionAnimation();

              case 12:
                _context3.t0 = _context3.sent.mdTransitionAnimation;

              case 13:
                getAnimation = _context3.t0;
                return _context3.abrupt("return", getAnimation);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAnimationBuilder(_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    var animation =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(animationBuilder, opts) {
        var trans, didComplete;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return waitForReady(opts, true);

              case 2:
                trans = animationBuilder(opts.baseEl, opts);
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                _context4.next = 6;
                return playTransition(trans, opts);

              case 6:
                didComplete = _context4.sent;

                if (opts.progressCallback) {
                  opts.progressCallback(undefined);
                }

                if (didComplete) {
                  fireDidEvents(opts.enteringEl, opts.leavingEl);
                }

                return _context4.abrupt("return", {
                  hasCompleted: didComplete,
                  animation: trans
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function animation(_x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }();

    var noAnimation =
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(opts) {
        var enteringEl, leavingEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                _context5.next = 4;
                return waitForReady(opts, false);

              case 4:
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return _context5.abrupt("return", {
                  hasCompleted: true
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function noAnimation(_x10) {
        return _ref5.apply(this, arguments);
      };
    }();

    var waitForReady =
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(opts, defaultDeep) {
        var deep, promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                _context6.next = 4;
                return Promise.all(promises);

              case 4:
                _context6.next = 6;
                return notifyViewReady(opts.viewIsReady, opts.enteringEl);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function waitForReady(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }();

    var notifyViewReady =
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(viewIsReady, enteringEl) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!viewIsReady) {
                  _context7.next = 3;
                  break;
                }

                _context7.next = 3;
                return viewIsReady(enteringEl);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function notifyViewReady(_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }();

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback;
      var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
          return resolve(currentStep === 1);
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady =
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(el) {
        var element, stencilEl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                element = el;

                if (!element) {
                  _context8.next = 10;
                  break;
                }

                if (!(element.componentOnReady != null)) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return element.componentOnReady();

              case 5:
                stencilEl = _context8.sent;

                if (!(stencilEl != null)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return");

              case 8:
                _context8.next = 10;
                return Promise.all(Array.from(element.children).map(deepReady));

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deepReady(_x15) {
        return _ref8.apply(this, arguments);
      };
    }();

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    var getIonPageElement = function getIonPageElement(element) {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigs28520d80Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL =
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context9.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context9.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context9.abrupt("return", router.push(url, direction));

              case 5:
                return _context9.abrupt("return", false);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function openURL(_x16, _x17, _x18) {
        return _ref10.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-comparacion/modal-comparacion.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-comparacion/modal-comparacion.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalComparacionModalComparacionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-icon  style=\"font-size: 1.5rem;\" name=\"close-outline\" (click)=\"salir()\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"image\" alt=\"\" style=\"height: 100%; width: 100%;\" \n  onerror=\"this.src='https://images-na.ssl-images-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'\">\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-medidas/modal-medidas.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-medidas/modal-medidas.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalMedidasModalMedidasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-icon  style=\"font-size: 1.5rem;\" name=\"close-outline\" (click)=\"salir()\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"image\" alt=\"\">\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <!-- <h1 style=\"margin: 0; text-align: center; margin-bottom: 5px;\">{{nombre}}</h1> -->\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/modal-comparacion/modal-comparacion-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modal-comparacion/modal-comparacion-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ModalComparacionPageRoutingModule */

  /***/
  function srcAppModalComparacionModalComparacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComparacionPageRoutingModule", function () {
      return ModalComparacionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_comparacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-comparacion.page */
    "./src/app/modal-comparacion/modal-comparacion.page.ts");

    var routes = [{
      path: '',
      component: _modal_comparacion_page__WEBPACK_IMPORTED_MODULE_3__["ModalComparacionPage"]
    }];

    var ModalComparacionPageRoutingModule = function ModalComparacionPageRoutingModule() {
      _classCallCheck(this, ModalComparacionPageRoutingModule);
    };

    ModalComparacionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalComparacionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal-comparacion/modal-comparacion.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modal-comparacion/modal-comparacion.module.ts ***!
    \***************************************************************/

  /*! exports provided: ModalComparacionPageModule */

  /***/
  function srcAppModalComparacionModalComparacionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComparacionPageModule", function () {
      return ModalComparacionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_comparacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-comparacion-routing.module */
    "./src/app/modal-comparacion/modal-comparacion-routing.module.ts");
    /* harmony import */


    var _modal_comparacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-comparacion.page */
    "./src/app/modal-comparacion/modal-comparacion.page.ts");

    var ModalComparacionPageModule = function ModalComparacionPageModule() {
      _classCallCheck(this, ModalComparacionPageModule);
    };

    ModalComparacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_comparacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalComparacionPageRoutingModule"]],
      declarations: [_modal_comparacion_page__WEBPACK_IMPORTED_MODULE_6__["ModalComparacionPage"]]
    })], ModalComparacionPageModule);
    /***/
  },

  /***/
  "./src/app/modal-comparacion/modal-comparacion.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modal-comparacion/modal-comparacion.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalComparacionModalComparacionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWNvbXBhcmFjaW9uL21vZGFsLWNvbXBhcmFjaW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modal-comparacion/modal-comparacion.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modal-comparacion/modal-comparacion.page.ts ***!
    \*************************************************************/

  /*! exports provided: ModalComparacionPage */

  /***/
  function srcAppModalComparacionModalComparacionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComparacionPage", function () {
      return ModalComparacionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ModalComparacionPage =
    /*#__PURE__*/
    function () {
      function ModalComparacionPage(modalController) {
        _classCallCheck(this, ModalComparacionPage);

        this.modalController = modalController;
      }

      _createClass(ModalComparacionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.image = this.imagen;
        }
      }, {
        key: "salir",
        value: function salir() {
          this.modalController.dismiss();
        }
      }]);

      return ModalComparacionPage;
    }();

    ModalComparacionPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ModalComparacionPage.prototype, "imagen", void 0);
    ModalComparacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-comparacion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-comparacion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-comparacion/modal-comparacion.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-comparacion.page.scss */
      "./src/app/modal-comparacion/modal-comparacion.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ModalComparacionPage);
    /***/
  },

  /***/
  "./src/app/modal-medidas/modal-medidas-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modal-medidas/modal-medidas-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ModalMedidasPageRoutingModule */

  /***/
  function srcAppModalMedidasModalMedidasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalMedidasPageRoutingModule", function () {
      return ModalMedidasPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_medidas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-medidas.page */
    "./src/app/modal-medidas/modal-medidas.page.ts");

    var routes = [{
      path: '',
      component: _modal_medidas_page__WEBPACK_IMPORTED_MODULE_3__["ModalMedidasPage"]
    }];

    var ModalMedidasPageRoutingModule = function ModalMedidasPageRoutingModule() {
      _classCallCheck(this, ModalMedidasPageRoutingModule);
    };

    ModalMedidasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalMedidasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal-medidas/modal-medidas.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modal-medidas/modal-medidas.module.ts ***!
    \*******************************************************/

  /*! exports provided: ModalMedidasPageModule */

  /***/
  function srcAppModalMedidasModalMedidasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalMedidasPageModule", function () {
      return ModalMedidasPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_medidas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-medidas-routing.module */
    "./src/app/modal-medidas/modal-medidas-routing.module.ts");
    /* harmony import */


    var _modal_medidas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-medidas.page */
    "./src/app/modal-medidas/modal-medidas.page.ts");

    var ModalMedidasPageModule = function ModalMedidasPageModule() {
      _classCallCheck(this, ModalMedidasPageModule);
    };

    ModalMedidasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_medidas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalMedidasPageRoutingModule"]],
      declarations: [_modal_medidas_page__WEBPACK_IMPORTED_MODULE_6__["ModalMedidasPage"]]
    })], ModalMedidasPageModule);
    /***/
  },

  /***/
  "./src/app/modal-medidas/modal-medidas.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modal-medidas/modal-medidas.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalMedidasModalMedidasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLW1lZGlkYXMvbW9kYWwtbWVkaWRhcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modal-medidas/modal-medidas.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modal-medidas/modal-medidas.page.ts ***!
    \*****************************************************/

  /*! exports provided: ModalMedidasPage */

  /***/
  function srcAppModalMedidasModalMedidasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalMedidasPage", function () {
      return ModalMedidasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api-fitech.service */
    "./src/app/services/api-fitech.service.ts");

    var ModalMedidasPage =
    /*#__PURE__*/
    function () {
      function ModalMedidasPage(modalController, apiService) {
        _classCallCheck(this, ModalMedidasPage);

        this.modalController = modalController;
        this.apiService = apiService;
      }

      _createClass(ModalMedidasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _ref11, gender;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.apiService.cargarNombreUsuario();

                  case 2:
                    _ref11 = _context10.sent;
                    gender = _ref11.gender;
                    console.log(gender);

                    if (!(gender === 1)) {
                      _context10.next = 41;
                      break;
                    }

                    _context10.t0 = this.nombre;
                    _context10.next = _context10.t0 === 'Cintura minima' ? 9 : _context10.t0 === 'Cintura maxima' ? 12 : _context10.t0 === 'Cadera' ? 15 : _context10.t0 === 'Cuello' ? 17 : _context10.t0 === 'Muslo derecho' ? 19 : _context10.t0 === 'Muslo izquierdo' ? 21 : _context10.t0 === 'Brazo relajado derecho' ? 23 : _context10.t0 === 'Brazo relajado izquierdo' ? 25 : _context10.t0 === 'Brazo flexionado derecho' ? 27 : _context10.t0 === 'Brazo flexionado izquierdo' ? 29 : _context10.t0 === 'Pantorrilla derecho' ? 31 : _context10.t0 === 'Pantorrilla izquierda' ? 33 : _context10.t0 === 'Torax' ? 35 : 38;
                    break;

                  case 9:
                    this.nombre = 'Cintura mínima';
                    this.image = './assets/img/cintura_minima.jpg';
                    return _context10.abrupt("break", 39);

                  case 12:
                    this.nombre = 'Cintura máxima';
                    this.image = './assets/img/cintura_maxima.jpg';
                    return _context10.abrupt("break", 39);

                  case 15:
                    this.image = './assets/img/cadera.jpg';
                    return _context10.abrupt("break", 39);

                  case 17:
                    this.image = './assets/img/cuello.jpg';
                    return _context10.abrupt("break", 39);

                  case 19:
                    this.image = './assets/img/muslo_derecho.jpg';
                    return _context10.abrupt("break", 39);

                  case 21:
                    this.image = './assets/img/muslo_izquierdo.jpg';
                    return _context10.abrupt("break", 39);

                  case 23:
                    this.image = './assets/img/brazo_relajado_derecho.jpg';
                    return _context10.abrupt("break", 39);

                  case 25:
                    this.image = './assets/img/brazo_relajado_izquierdo.jpg';
                    return _context10.abrupt("break", 39);

                  case 27:
                    this.image = './assets/img/brazo_flexionado_derecho.jpg';
                    return _context10.abrupt("break", 39);

                  case 29:
                    this.image = './assets/img/brazo_flexionado_izquierdo.jpg';
                    return _context10.abrupt("break", 39);

                  case 31:
                    this.image = './assets/img/pantorrilla_derecha.jpg';
                    return _context10.abrupt("break", 39);

                  case 33:
                    this.image = './assets/img/pantorrilla_izquierda.jpg';
                    return _context10.abrupt("break", 39);

                  case 35:
                    this.nombre = 'Tórax';
                    this.image = './assets/img/pecho.jpg';
                    return _context10.abrupt("break", 39);

                  case 38:
                    return _context10.abrupt("break", 39);

                  case 39:
                    _context10.next = 74;
                    break;

                  case 41:
                    _context10.t1 = this.nombre;
                    _context10.next = _context10.t1 === 'Cintura minima' ? 44 : _context10.t1 === 'Cintura maxima' ? 47 : _context10.t1 === 'Cadera' ? 50 : _context10.t1 === 'Cuello' ? 52 : _context10.t1 === 'Muslo derecho' ? 54 : _context10.t1 === 'Muslo izquierdo' ? 56 : _context10.t1 === 'Brazo relajado derecho' ? 58 : _context10.t1 === 'Brazo relajado izquierdo' ? 60 : _context10.t1 === 'Brazo flexionado derecho' ? 62 : _context10.t1 === 'Brazo flexionado izquierdo' ? 64 : _context10.t1 === 'Pantorrilla derecho' ? 66 : _context10.t1 === 'Pantorrilla izquierda' ? 68 : _context10.t1 === 'Torax' ? 70 : 73;
                    break;

                  case 44:
                    this.nombre = 'Cintura mínima';
                    this.image = './assets/img/cintura_minima_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 47:
                    this.nombre = 'Cintura máxima';
                    this.image = './assets/img/cintura_maxima_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 50:
                    this.image = './assets/img/cadera_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 52:
                    this.image = './assets/img/cuello_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 54:
                    this.image = './assets/img/muslo_derecho_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 56:
                    this.image = './assets/img/muslo_izquierdo_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 58:
                    this.image = './assets/img/brazo_relajado_derecho_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 60:
                    this.image = './assets/img/brazo_relajado_izquierdo_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 62:
                    this.image = './assets/img/brazo_flexionado_derecho.jpg';
                    return _context10.abrupt("break", 74);

                  case 64:
                    this.image = './assets/img/brazo_flexionado_izquierdo.jpg';
                    return _context10.abrupt("break", 74);

                  case 66:
                    this.image = './assets/img/pantorrilla_derecha_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 68:
                    this.image = './assets/img/pantorrilla_izquierda_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 70:
                    this.nombre = 'Tórax';
                    this.image = './assets/img/pecho_mujer.jpg';
                    return _context10.abrupt("break", 74);

                  case 73:
                    return _context10.abrupt("break", 74);

                  case 74:
                    console.log(this.nombre);

                  case 75:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "salir",
        value: function salir() {
          this.modalController.dismiss();
        }
      }]);

      return ModalMedidasPage;
    }();

    ModalMedidasPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ModalMedidasPage.prototype, "nombre", void 0);
    ModalMedidasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-medidas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-medidas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-medidas/modal-medidas.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-medidas.page.scss */
      "./src/app/modal-medidas/modal-medidas.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], ModalMedidasPage);
    /***/
  },

  /***/
  "./src/app/pipes/capitalizado.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/capitalizado.pipe.ts ***!
    \********************************************/

  /*! exports provided: CapitalizadoPipe */

  /***/
  function srcAppPipesCapitalizadoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalizadoPipe", function () {
      return CapitalizadoPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
     * Capitalize the first letter of the string
     * Takes a string as a value.
     * Usage:
     *  value | capitalizefirst
     * Example:
     *  // value.name = daniel
     *  {{ value.name | capitalizefirst  }}
     *  fromats to: Daniel
    */


    var CapitalizadoPipe =
    /*#__PURE__*/
    function () {
      function CapitalizadoPipe() {
        _classCallCheck(this, CapitalizadoPipe);
      }

      _createClass(CapitalizadoPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (value === null || value === undefined) return 'Hubo un error con la conexion';
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
      }]);

      return CapitalizadoPipe;
    }();

    CapitalizadoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'capitalizado'
    })], CapitalizadoPipe);
    /***/
  },

  /***/
  "./src/app/pipes/filter.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/filter.pipe.ts ***!
    \**************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(values) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (values == null) {
            console.log("no ha cargado a un");
            return;
          } else {
            console.log("ya cargo");
            return values.filter(function (item) {
              return item.type == args;
            });
          }
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/pipe.module.ts ***!
    \**************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _capitalizado_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./capitalizado.pipe */
    "./src/app/pipes/capitalizado.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/pipes/filter.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [_capitalizado_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizadoPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]],
      exports: [_capitalizado_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizadoPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/rutinas.service.ts":
  /*!************************************!*\
    !*** ./src/app/rutinas.service.ts ***!
    \************************************/

  /*! exports provided: RutinasService */

  /***/
  function srcAppRutinasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RutinasService", function () {
      return RutinasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var RutinasService =
    /*#__PURE__*/
    function () {
      function RutinasService(storage, http) {
        _classCallCheck(this, RutinasService);

        this.storage = storage;
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
      }

      _createClass(RutinasService, [{
        key: "getRutina",
        value: function getRutina() {
          var _this = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee11() {
              var headers;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context11.next = 3;
                      return this.storage.get('token');

                    case 3:
                      _context11.t1 = _context11.sent;
                      _context11.t2 = 'Bearer ' + _context11.t1;
                      _context11.t3 = {
                        'Authorization': _context11.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context11.t0(_context11.t3);
                      this.http.get("".concat(this.URL, "/auth/routine-home"), {
                        headers: headers
                      }).subscribe(function (res) {
                        console.log(res);
                        resolve(res);
                      }, function (err) {
                        resolve(err);
                      });

                    case 8:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          });
        }
      }, {
        key: "getEstiramientos",
        value: function getEstiramientos() {
          var _this2 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee12() {
              var headers;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context12.next = 3;
                      return this.storage.get('token');

                    case 3:
                      _context12.t1 = _context12.sent;
                      _context12.t2 = 'Bearer ' + _context12.t1;
                      _context12.t3 = {
                        'Authorization': _context12.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context12.t0(_context12.t3);
                      this.http.post("".concat(this.URL, "/auth/stretching"), null, {
                        headers: headers
                      }).subscribe(function (res) {
                        console.log(res);
                        resolve(res);
                      }, function (err) {
                        resolve(err);
                      });

                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          });
        }
      }, {
        key: "getCalentamiento",
        value: function getCalentamiento() {
          var _this3 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee13() {
              var headers;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
                      _context13.next = 3;
                      return this.storage.get('token');

                    case 3:
                      _context13.t1 = _context13.sent;
                      _context13.t2 = 'Bearer ' + _context13.t1;
                      _context13.t3 = {
                        'Authorization': _context13.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context13.t0(_context13.t3);
                      this.http.get("".concat(this.URL, "/auth/exercise-heating"), {
                        headers: headers
                      }).subscribe(function (res) {
                        console.log(res);
                        resolve(res);
                      }, function (err) {
                        resolve(err);
                      });

                    case 8:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          });
        }
      }]);

      return RutinasService;
    }();

    RutinasService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RutinasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], RutinasService);
    /***/
  },

  /***/
  "./src/app/services/tienda.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/tienda.service.ts ***!
    \********************************************/

  /*! exports provided: TiendaService */

  /***/
  function srcAppServicesTiendaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiendaService", function () {
      return TiendaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api-fitech.service */
    "./src/app/services/api-fitech.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;

    var TiendaService =
    /*#__PURE__*/
    function () {
      function TiendaService(http, service) {
        _classCallCheck(this, TiendaService);

        this.http = http;
        this.service = service;
      } // listado de productos


      _createClass(TiendaService, [{
        key: "getProducts",
        value: function getProducts() {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee14() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
                      _context14.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context14.t1 = _context14.sent;
                      _context14.t2 = 'Bearer ' + _context14.t1;
                      _context14.t3 = {
                        'Authorization': _context14.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context14.t0(_context14.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        valor: "ignorar"
                      };
                      this.http.post("".concat(URL, "/auth/products"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp['Productos']);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          });
        } // listado de productos

      }, {
        key: "sendProducts",
        value: function sendProducts(id) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee15() {
              var headers, data;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.t0 = _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
                      _context15.next = 3;
                      return this.service.cargarToken();

                    case 3:
                      _context15.t1 = _context15.sent;
                      _context15.t2 = 'Bearer ' + _context15.t1;
                      _context15.t3 = {
                        'Authorization': _context15.t2,
                        'Content-Type': 'application/json'
                      };
                      headers = new _context15.t0(_context15.t3);
                      // si no se envia un dato no  funciona la ruta
                      data = {
                        product_id: id
                      };
                      this.http.post("".concat(URL, "/auth/pay-products"), data, {
                        headers: headers
                      }).subscribe(function (resp) {
                        resolve(resp);
                      }, function (err) {
                        reject(false);
                      });

                    case 9:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          });
        }
      }]);

      return TiendaService;
    }();

    TiendaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]
      }];
    };

    TiendaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _api_fitech_service__WEBPACK_IMPORTED_MODULE_3__["ApiFitechService"]])], TiendaService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      //url:'http://localhost:8000/api'
      //url:'http://192.168.0.103:8000/api'
      // url:'http://valdusoft.com/fittech/api'
      url: 'https://smartbunnypruebas.com'
    };
    var firebaseConfig = {
      apiKey: "AIzaSyBa-dl3epdWx8V5TWTKHABchWdLVDKxht4",
      authDomain: "fittech-92682.firebaseapp.com",
      projectId: "fittech-92682",
      storageBucket: "fittech-92682.appspot.com",
      messagingSenderId: "1049023810628",
      appId: "1:1049023810628:web:33d23e3207714668400011"
    };
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map