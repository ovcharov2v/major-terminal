/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/card-tag.js":
/*!***************************************!*\
  !*** ./src/js/components/card-tag.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var moreTagList = document.querySelectorAll('.card__tag--more');
  if (moreTagList.length) {
    moreTagList.forEach(function (moreTag) {
      moreTag.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var parent = moreTag.closest('.card__tag-list');
        parent.classList.add('card__tag-list--expanded');
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/contacts-form.js":
/*!********************************************!*\
  !*** ./src/js/components/contacts-form.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

document.addEventListener('DOMContentLoaded', function () {
  var contactsForm = document.querySelector('.section-contacts__form');
  if (!contactsForm) return;
  var nameInput = document.querySelector('.section-contacts__form-input--name');
  var phoneInput = document.querySelector('.section-contacts__form-input--tel');
  var phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_2__["default"])(phoneInput, {
    mask: '+{7}(000)000-00-00'
  });
  var emailInput = document.querySelector('.section-contacts__form-input--email');
  var emailMask = Object(imask__WEBPACK_IMPORTED_MODULE_2__["default"])(emailInput, {
    mask: /^\S*@?\S*$/
  });
  var commentInput = document.querySelector('.section-contacts__form-textarea--comment');
  var inputsArr = [nameInput, phoneInput, emailInput, commentInput];
  inputsArr.forEach(function (input) {
    input.addEventListener('input', function () {
      input.classList.remove('form-control--error');
      var hasFormError = false;
      inputsArr.forEach(function (input) {
        if (input.classList.contains('form-control--error')) {
          hasFormError = true;
        }
      });
      if (!hasFormError) contactsForm.classList.remove('section-contacts__form--error');
    });
  });
  contactsForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var formError, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            formError = false;
            inputsArr.forEach(function (input) {
              if (!input.value.trim().length) {
                input.classList.add('form-control--error');
                formError = true;
                console.log(input.value.trim());
              }
            });
            if (!formError) {
              _context.next = 6;
              break;
            }
            contactsForm.classList.add('section-contacts__form--error');
            return _context.abrupt("return", false);
          case 6:
            _context.next = 8;
            return function () {
              // Do something
              return true;
            };
          case 8:
            response = _context.sent;
            if (response) {
              contactsForm.classList.add('section-contacts__form--submitted');
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var resetBtn = document.querySelector('.section-contacts__form-reset');
  resetBtn.addEventListener('click', function () {
    contactsForm.classList.remove('section-contacts__form--submitted');
  });
});

/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var dropdownList = document.querySelectorAll('.dropdown');
  if (dropdownList.length) {
    dropdownList.forEach(function (dropdown) {
      dropdown.addEventListener('click', function (evt) {
        evt.stopPropagation();
        dropdown.classList.toggle('dropdown--active');
        dropdownList.forEach(function (el) {
          if (el !== dropdown) {
            el.classList.remove('dropdown--active');
          }
        });
      });
      // Multi select
      if (dropdown.classList.contains('dropdown--multi-select')) {
        var counter = dropdown.querySelector('.dropdown__value-counter');
        var input = dropdown.querySelector('.dropdown__multi-input');
        // Test event listener
        input.addEventListener('change', function () {
          console.log('changed');
        });
        dropdown.addEventListener('click', function (evt) {
          evt.stopPropagation();
          var valueList = [];
          var checkedOptions = dropdown.querySelectorAll(':checked');
          checkedOptions.forEach(function (opt) {
            valueList.push(opt.value);
          });
          var valueString = valueList.join(', ');
          if (valueString !== input.value) {
            input.value = valueString;
            input.dispatchEvent(new Event("change"));
          }
          counter.innerHTML = checkedOptions.length.toString();
        });
      }
      // Single select
      else {
        var _input = dropdown.querySelector('.dropdown__value');
        // Test event listener
        _input.addEventListener('change', function () {
          console.log('changed');
        });
        var optionsList = dropdown.querySelectorAll('.dropdown__option');
        optionsList.forEach(function (option) {
          option.addEventListener('click', function (e) {
            e.preventDefault();
            if (dropdown.classList.contains('dropdown--navigate')) {
              window.location.href = option.dataset.value;
            } else {
              _input.value = option.dataset.value;
              _input.dispatchEvent(new Event("change"));
              dropdown.querySelector('.dropdown__option--selected').classList.remove('dropdown__option--selected');
              option.classList.add('dropdown__option--selected');
              if (dropdown.classList.contains('dropdown--with-flag')) {
                var currentFlag = dropdown.querySelector('.dropdown__value-box .dropdown__flag');
                var nextFlag = option.querySelector('.dropdown__flag');
                currentFlag.src = nextFlag.src;
              }
            }
          });
        });
      }
    });
  }
  document.addEventListener('click', closeAllSelect);
  function closeAllSelect() {
    dropdownList.forEach(function (dropdown) {
      dropdown.classList.remove('dropdown--active');
    });
  }
});

/***/ }),

/***/ "./src/js/components/free-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/free-slider.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var freeSlider;
document.addEventListener('DOMContentLoaded', initFreeSlider);
window.addEventListener('resize', initFreeSlider, true);
function initFreeSlider() {
  var slider = document.querySelector('.free-slider');
  if (!slider) return;
  var width = window.innerWidth;
  if (width > 1400) {
    if (freeSlider !== undefined) {
      freeSlider.destroy(true, true);
      freeSlider = undefined;
    }
  } else {
    if (freeSlider === undefined) {
      freeSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        slidesPerView: "auto",
        spaceBetween: 28,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
          700: {
            spaceBetween: 50
          }
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var searchFormToggle = document.querySelectorAll('.js-search-toggle');
  searchFormToggle.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (header.classList.contains('header--search-shown')) {
        header.classList.remove('header--search-shown');
        setTimeout(function () {
          header.classList.remove('header--search-show');
        }, 300);
      } else {
        header.classList.add('header--search-show');
        setTimeout(function () {
          header.classList.add('header--search-shown');
        }, 50);
      }
    });
  });
  var burger = header.querySelector('.header__burger-btn');
  burger.addEventListener('click', function () {
    if (header.classList.contains('header--menu-show')) {
      header.classList.remove('header--menu-shown');
      setTimeout(function () {
        header.classList.remove('header--menu-show');
        document.documentElement.classList.remove('overflow-hidden');
      }, 300);
    } else {
      header.classList.add('header--menu-show');
      document.documentElement.classList.add('overflow-hidden');
      setTimeout(function () {
        header.classList.add('header--menu-shown');
      });
    }
  });
  var menuElems = document.querySelectorAll('.header__mobile-menu-elem');
  menuElems.forEach(function (elem) {
    elem.addEventListener('click', function () {
      if (elem.classList.contains('header__mobile-menu-elem--active')) {
        elem.classList.remove('header__mobile-menu-elem--active');
      } else {
        var active = header.querySelector('.header__mobile-menu-elem--active');
        if (active) {
          active.classList.remove('header__mobile-menu-elem--active');
        }
        elem.classList.add('header__mobile-menu-elem--active');
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/mobile-nav.js":
/*!*****************************************!*\
  !*** ./src/js/components/mobile-nav.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var navList = document.querySelectorAll('.mobile-nav__nav-title');
  navList.forEach(function (nav) {
    nav.addEventListener('click', function (e) {
      if (nav.tagName === 'SPAN') {
        nav.parentNode.classList.toggle('mobile-nav__mobile-nav-block--active');
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/scroll-to.js":
/*!****************************************!*\
  !*** ./src/js/components/scroll-to.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var linkList = document.querySelectorAll('*[data-scroll-to]');
  if (!linkList.length) return;
  linkList.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var target = document.querySelector("#".concat(link.dataset.scrollTo));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/section-about-timeline.js":
/*!*****************************************************!*\
  !*** ./src/js/components/section-about-timeline.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.section-about-timeline');
  if (!timeline) return;
  var pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };
  var mouseMoveHandler = function mouseMoveHandler(e) {
    var dx = e.clientX - pos.x;
    timeline.scrollLeft = pos.left - dx;
  };
  var mouseDownHandler = function mouseDownHandler(e) {
    pos = {
      left: timeline.scrollLeft,
      x: e.clientX
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };
  var mouseUpHandler = function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };
  var wheelHandler = function wheelHandler(e) {
    var rect = timeline.getBoundingClientRect();
    var speedCoefficient = 0.5; // Уменьшает скорость прокрутки в 2 раза

    // Если верх элемента находится в начале окна
    if (rect.top <= 0) {
      // Проверка, достигли ли мы конца или начала прокрутки
      if (e.deltaY < 0 && timeline.scrollLeft > 0 || e.deltaY > 0 && timeline.scrollLeft < timeline.scrollWidth - timeline.clientWidth) {
        e.preventDefault();
        timeline.scrollLeft += e.deltaY * speedCoefficient;
      }
    }
  };
  document.addEventListener('mousedown', mouseDownHandler);
  timeline.addEventListener('wheel', wheelHandler);
});

/***/ }),

/***/ "./src/js/components/section-contacts-form-white.js":
/*!**********************************************************!*\
  !*** ./src/js/components/section-contacts-form-white.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

document.addEventListener('DOMContentLoaded', function () {
  var contactsForm = document.querySelector('.section-contacts-white__form');
  if (!contactsForm) return;
  var nameInput = document.querySelector('.section-contacts-white__form-input--name');
  var phoneInput = document.querySelector('.section-contacts-white__form-input--tel');
  var phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_2__["default"])(phoneInput, {
    mask: '(XXX) XXX-XX-XX',
    definitions: {
      X: {
        mask: '0',
        placeholderChar: '0'
      }
    }
  });
  var emailInput = document.querySelector('.section-contacts-white__form-input--email');
  var emailMask = Object(imask__WEBPACK_IMPORTED_MODULE_2__["default"])(emailInput, {
    mask: /^\S*@?\S*$/
  });
  var commentInput = document.querySelector('.section-contacts-white__form-textarea--comment');
  var inputsArr = [nameInput, phoneInput, emailInput, commentInput];
  inputsArr.forEach(function (input) {
    input.addEventListener('input', function () {
      input.classList.remove('section-contacts-white__error-field');
      var hasFormError = false;
      inputsArr.forEach(function (input) {
        if (input.classList.contains('section-contacts-white__error-field')) {
          hasFormError = true;
        }
      });
      if (!hasFormError) contactsForm.classList.remove('section-contacts-white__form--error');
    });
  });
  contactsForm.addEventListener('submit', /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var formError, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            formError = false;
            inputsArr.forEach(function (input) {
              if (!input.value.trim().length) {
                input.classList.add('section-contacts-white__error-field');
                formError = true;
                console.log(input.value.trim());
              }
            });
            if (!formError) {
              _context.next = 6;
              break;
            }
            contactsForm.classList.add('section-contacts-white__form--error');
            return _context.abrupt("return", false);
          case 6:
            _context.next = 8;
            return function () {
              // Do something
              return true;
            };
          case 8:
            response = _context.sent;
            if (response) {
              contactsForm.classList.add('section-contacts-white__form--submitted');
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var resetBtn = document.querySelector('.section-contacts-white__form-reset');
  resetBtn.addEventListener('click', function () {
    contactsForm.classList.remove('section-contacts-white__form--submitted');
  });
});

/***/ }),

/***/ "./src/js/components/section-description.js":
/*!**************************************************!*\
  !*** ./src/js/components/section-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var sectionDescriptionPanelSlider;
var sectionDescriptionPhotoSlider;
document.addEventListener('DOMContentLoaded', function () {
  initSectionDescriptionPanelSlider();
  initSectionDescriptionPhotoSlider();
});
window.addEventListener('resize', function () {
  initSectionDescriptionPanelSlider();
  initSectionDescriptionPhotoSlider();
}, true);
function initSectionDescriptionPanelSlider() {
  var slider = document.querySelector('.section-description__panel-slider');
  if (!slider) return;
  var width = window.innerWidth;
  if (width > 1200) {
    if (sectionDescriptionPanelSlider !== undefined) {
      sectionDescriptionPanelSlider.destroy(true, true);
      sectionDescriptionPanelSlider = undefined;
    }
  } else {
    if (sectionDescriptionPanelSlider === undefined) {
      sectionDescriptionPanelSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
        slidesPerView: "auto",
        spaceBetween: 28,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
          700: {
            spaceBetween: 50
          }
        },
        navigation: {
          nextEl: '.slider__nav--panel .slider__btn--next',
          prevEl: '.slider__nav--panel .slider__btn--prev'
        },
        pagination: {
          el: '.slider__nav--panel .slider__pagination',
          clickable: true,
          bulletActiveClass: 'slider__bullet--active',
          renderBullet: function renderBullet(index, className) {
            return "<button class=\"slider__bullet swiper-pagination-bullet\" aria-label=\"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(index, "\"></button>");
          }
        }
      });
    }
  }
}
function initSectionDescriptionPhotoSlider() {
  var slider = document.querySelector('.section-description__photo-slider');
  if (!slider) return;
  var width = window.innerWidth;
  if (width > 1200) {
    if (sectionDescriptionPhotoSlider !== undefined) {
      sectionDescriptionPhotoSlider.destroy(true, true);
      sectionDescriptionPhotoSlider = undefined;
    }
  } else {
    if (sectionDescriptionPhotoSlider === undefined) {
      sectionDescriptionPhotoSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
        slidesPerView: "auto",
        spaceBetween: 28,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
          700: {
            spaceBetween: 50
          }
        },
        navigation: {
          nextEl: '.slider__nav--photo .slider__btn--next',
          prevEl: '.slider__nav--photo .slider__btn--prev'
        },
        pagination: {
          el: '.slider__nav--photo .slider__pagination',
          clickable: true,
          bulletActiveClass: 'slider__bullet--active',
          renderBullet: function renderBullet(index, className) {
            return "<button class=\"slider__bullet swiper-pagination-bullet\" aria-label=\"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(index, "\"></button>");
          }
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/js/components/section-news.js":
/*!*******************************************!*\
  !*** ./src/js/components/section-news.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var rows = document.querySelectorAll('.news-row__height');
  rows.forEach(function (row) {
    var max_height = 0;
    var cards = row.querySelectorAll('.news-card');
    cards.forEach(function (card) {
      var current_height = card.offsetHeight;
      if (current_height > max_height) {
        max_height = current_height;
      }
    });
    cards.forEach(function (card) {
      card.style.height = max_height + 'px';
    });
  });
});

/***/ }),

/***/ "./src/js/components/section-services.js":
/*!***********************************************!*\
  !*** ./src/js/components/section-services.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.section-services__slider');
  if (!slider) return;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
    slidesPerView: 3,
    spaceBetween: 32,
    grabCursor: true,
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev'
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      bulletActiveClass: 'slider__bullet--active',
      renderBullet: function renderBullet(index, className) {
        return "<button class=\"slider__bullet swiper-pagination-bullet\" aria-label=\"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(index, "\"></button>");
      }
    }
  });
});

/***/ }),

/***/ "./src/js/components/section-slider-terminal.js":
/*!******************************************************!*\
  !*** ./src/js/components/section-slider-terminal.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.section-slider-terminal__slider');
  if (!slider) return;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
    grabCursor: true,
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev'
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      bulletActiveClass: 'slider__bullet--active',
      renderBullet: function renderBullet(index, className) {
        return "<button class=\"slider__bullet swiper-pagination-bullet\" aria-label=\"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(index, "\"></button>");
      }
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1.7,
        spaceBetween: 25
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
});

/***/ }),

/***/ "./src/js/components/section-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/section-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.section-slider__slider');
  if (!slider) return;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
    slidesPerView: 3,
    spaceBetween: 32,
    grabCursor: true,
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev'
    }
  });
});

/***/ }),

/***/ "./src/js/components/section-terminals.js":
/*!************************************************!*\
  !*** ./src/js/components/section-terminals.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

function createTerminalSlider() {
  var slider = document.querySelector('.section-terminals__slider');
  var slides = slider.querySelectorAll('.slider__slide');
  if (slides && slides.length > 1) {
    slider.classList.remove('slider--disabled');
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
      slidesPerView: 1,
      grabCursor: true,
      navigation: {
        nextEl: '.slider__btn--next',
        prevEl: '.slider__btn--prev'
      },
      pagination: {
        el: '.slider__pagination',
        clickable: true,
        bulletActiveClass: 'slider__bullet--active',
        renderBullet: function renderBullet(index, className) {
          return "<button class=\"slider__bullet swiper-pagination-bullet\" aria-label=\"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(index, "\"></button>");
        }
      }
    });
  } else {
    slider.classList.add('slider--disabled');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.section-terminals__slider');
  if (!slider) return;
  createTerminalSlider();
});
document.addEventListener('createTerminalSlider', function () {
  createTerminalSlider();
});

/***/ }),

/***/ "./src/js/components/section-text.js":
/*!*******************************************!*\
  !*** ./src/js/components/section-text.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var sectionText = document.querySelector('.section-text');
  var cutBtn = document.querySelector('.section-text__cut-button');
  if (!cutBtn) return;
  cutBtn.addEventListener('click', function () {
    sectionText.classList.toggle('section-text--active');
  });
});

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var tabsList = document.querySelectorAll('.tabs');
  if (!tabsList.length) return;
  tabsList.forEach(function (tabs) {
    var navBtnList = tabs.querySelectorAll('.tabs__nav-button');
    var content = tabs.querySelectorAll('.tabs__content');
    navBtnList.forEach(function (navBtn) {
      navBtn.addEventListener('click', function () {
        if (!navBtn.classList.contains('tabs__nav-button--active')) {
          var contentId = navBtn.dataset.content;
          var activeContent = tabs.querySelector("#".concat(contentId));
          var activeAllBtn = tabs.querySelectorAll("[data-btn-content=\"".concat(contentId, "\"]"));
          var currentActiveAllBtn = tabs.querySelectorAll('.tabs__all-btn--active');
          var activeNavBtn = tabs.querySelector('.tabs__nav-button--active');
          var currentContent = tabs.querySelector('.tabs__content--active');
          currentContent.classList.add('tabs__content--hide');
          activeContent.classList.add('tabs__content--show');
          if (activeAllBtn.length) {
            currentActiveAllBtn.forEach(function (current) {
              current.classList.remove('tabs__all-btn--active');
              current.classList.add('tabs__all-btn--hide');
            });
            activeAllBtn.forEach(function (active) {
              active.classList.add('tabs__all-btn--show');
            });
          }
          setTimeout(function () {
            currentContent.classList.remove('tabs__content--active', 'tabs__content--hide');
            activeContent.classList.remove('tabs__content--show');
            activeContent.classList.add('tabs__content--active');
            activeNavBtn.classList.remove('tabs__nav-button--active');
            navBtn.classList.add('tabs__nav-button--active');
            if (activeAllBtn.length) {
              currentActiveAllBtn.forEach(function (current) {
                current.classList.remove('tabs__all-btn--hide');
              });
              activeAllBtn.forEach(function (active) {
                active.classList.remove('tabs__all-btn--show');
                active.classList.add('tabs__all-btn--active');
              });
            }
          }, 300);
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".section-partner__link, .dropdown__option[data-tab]");
  var contentBlocks = document.querySelectorAll(".tabs2__content");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(1);
      var activeTab = this.dataset.tab;
      tabs.forEach(function (tab) {
        return tab.classList.remove("section-partner__link--active");
      });
      contentBlocks.forEach(function (contentBlock) {
        return contentBlock.classList.remove("active");
      });
      this.classList.add("section-partner__link--active");
      document.querySelector(".tabs2__content[data-tab=\"".concat(activeTab, "\"]")).classList.add("active");
    });
  });
});
var setTabs2Height = function setTabs2Height() {
  var max_height = 0;
  var elements = document.querySelectorAll('.tabs2__content-height');
  if (!elements.length) return;
  elements.forEach(function (element) {
    element.style.minHeight = '';
  });
  elements.forEach(function (element) {
    var style = window.getComputedStyle(element);
    var margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    margin = 0;
    var totalHeight = element.offsetHeight + margin;
    if (totalHeight > max_height) {
      max_height = totalHeight;
    }
  });
  elements.forEach(function (element) {
    element.style.minHeight = max_height + 'px';
  });
};
window.onload = function () {
  setTabs2Height();
};
window.addEventListener('resize', function () {
  setTabs2Height();
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_mobile_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-nav */ "./src/js/components/mobile-nav.js");
/* harmony import */ var _components_mobile_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_section_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-services */ "./src/js/components/section-services.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_section_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section-slider */ "./src/js/components/section-slider.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_section_terminals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section-terminals */ "./src/js/components/section-terminals.js");
/* harmony import */ var _components_section_slider_terminal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/section-slider-terminal */ "./src/js/components/section-slider-terminal.js");
/* harmony import */ var _components_contacts_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contacts-form */ "./src/js/components/contacts-form.js");
/* harmony import */ var _components_section_contacts_form_white__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/section-contacts-form-white */ "./src/js/components/section-contacts-form-white.js");
/* harmony import */ var _components_section_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/section-text */ "./src/js/components/section-text.js");
/* harmony import */ var _components_section_text__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_section_text__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_free_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/free-slider */ "./src/js/components/free-slider.js");
/* harmony import */ var _components_section_description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/section-description */ "./src/js/components/section-description.js");
/* harmony import */ var _components_section_about_timeline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/section-about-timeline */ "./src/js/components/section-about-timeline.js");
/* harmony import */ var _components_section_about_timeline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_section_about_timeline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_section_news__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/section-news */ "./src/js/components/section-news.js");
/* harmony import */ var _components_section_news__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_section_news__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_scroll_to__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/scroll-to */ "./src/js/components/scroll-to.js");
/* harmony import */ var _components_scroll_to__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_scroll_to__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_card_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/card-tag */ "./src/js/components/card-tag.js");
/* harmony import */ var _components_card_tag__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_card_tag__WEBPACK_IMPORTED_MODULE_17__);



















/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map