module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"76":"109e27e427832a5ed601","77":"5fff760cb70850be9205","78":"6fb937e97ded0a012aca","79":"ac19ae678f18b25fe617"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Agy":
/***/ (function(module, exports) {



/***/ }),

/***/ "+L6p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_NAMESPACE; });
// application
const SHOP_NAMESPACE = 'shop';

/***/ }),

/***/ "+Sw2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeLinkHref; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bzos");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_i18n_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7eUB");
/* harmony import */ var _services_i18n_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+oNx");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fkzy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party


 // application




function normalizeHref(href) {
  const result = _objectSpread({}, Object(url__WEBPACK_IMPORTED_MODULE_2__["parse"])(typeof href === 'string' ? href : Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(href), true));

  delete result.host;
  delete result.href;
  delete result.path;
  delete result.search;
  result.query = result.query || {};
  return result;
}
function normalizeLinkHref(data) {
  const result = typeof data === 'string' ? {
    href: data
  } : data;
  return _objectSpread(_objectSpread({}, result), {}, {
    href: normalizeHref(result.href),
    as: normalizeHref(result.as || result.href)
  });
}

function addLocale(url, locale) {
  return _objectSpread(_objectSpread({}, url), {}, {
    pathname: !url.pathname || locale === Object(_services_i18n_utils__WEBPACK_IMPORTED_MODULE_3__[/* getDefaultLocale */ "c"])() ? url.pathname : `/${locale}${url.pathname}`
  });
}

function AppLink(props) {
  const {
    href,
    children,
    anchor = false
  } = props,
        anchorProps = _objectWithoutProperties(props, ["href", "children", "anchor"]);

  const locale = Object(_services_i18n_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useLocale */ "c"])();
  const data = normalizeLinkHref(href || '');
  const isExternal = !!data.href.hostname;
  const hasPath = !!data.href.pathname;
  const onlyHash = Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(data.href).startsWith('#');

  if (isExternal || anchor || onlyHash) {
    let anchorHref;

    if (!isExternal && hasPath) {
      data.href = addLocale(data.href, locale);
      anchorHref = Object(_services_utils__WEBPACK_IMPORTED_MODULE_5__[/* baseUrl */ "a"])(Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(data.href));
    } else {
      anchorHref = Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(data.href);
    }

    return __jsx("a", _extends({
      href: anchorHref
    }, anchorProps), children);
  }

  data.href.query = _objectSpread(_objectSpread({}, data.href.query), {}, {
    lang: locale
  });
  data.as = addLocale(data.as, locale);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, data, __jsx("a", anchorProps, children));
}

/* harmony default export */ __webpack_exports__["a"] = (AppLink);

/***/ }),

/***/ "+lck":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("P3CU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party


 // application



function StatusBadge(props) {
  const {
    type,
    icon,
    text,
    tooltip,
    className
  } = props;
  const tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('status-badge', `status-badge--style--${type}`, {
    'status-badge--has-text': text !== undefined,
    'status-badge--has-icon': icon !== undefined
  }, className);
  return __jsx("div", {
    className: rootClasses
  }, __jsx("div", {
    className: "status-badge__body"
  }, icon !== undefined && __jsx("div", {
    className: "status-badge__icon"
  }, {
    success: __jsx(_svg__WEBPACK_IMPORTED_MODULE_3__[/* FitSvg */ "x"], null),
    failure: __jsx(_svg__WEBPACK_IMPORTED_MODULE_3__[/* NoFitSvg */ "G"], null)
  }[icon]), text !== undefined && __jsx("div", {
    className: "status-badge__text"
  }, text), tooltip !== undefined && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "status-badge__tooltip",
    tabIndex: 0,
    ref: tooltipRef
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledTooltip"], {
    target: tooltipRef,
    fade: false,
    delay: {
      show: 0,
      hide: 0
    }
  }, tooltip))));
}

/* harmony default export */ __webpack_exports__["a"] = (StatusBadge);

/***/ }),

/***/ "+oNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useSetLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_i18n_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7eUB");
/* harmony import */ var _services_i18n_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J/yf");
// react
 // application



function useLocale() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_services_i18n_context__WEBPACK_IMPORTED_MODULE_2__[/* LanguageLocaleContext */ "a"]);
}
function useSetLocale() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_services_i18n_context__WEBPACK_IMPORTED_MODULE_2__[/* LanguageSetLocaleContext */ "b"]);
}
function useLanguage() {
  const locale = useLocale();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_services_i18n_utils__WEBPACK_IMPORTED_MODULE_1__[/* getAllLanguages */ "a"])().find(language => language.locale === locale), [locale]);
}
function useDirection() {
  const {
    direction
  } = useLanguage();
  return direction;
}

/***/ }),

/***/ "+vqc":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar.json": [
		"V3Aw",
		77
	],
	"./en.json": [
		"lWpT",
		78
	],
	"./ru.json": [
		"AMPI",
		79
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "+vqc";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "03gF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useQuickview; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useQuickviewOpen; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useQuickviewClose; });

// EXTERNAL MODULE: ./src/store/quickview/quickviewReducer.ts
var quickviewReducer = __webpack_require__("AdE6");

// EXTERNAL MODULE: ./src/api/index.ts + 39 modules
var api = __webpack_require__("efbE");

// EXTERNAL MODULE: ./src/store/quickview/quickviewActionTypes.ts
var quickviewActionTypes = __webpack_require__("BqYR");

// CONCATENATED MODULE: ./src/store/quickview/quickviewActions.ts
// application



let cancelPreviousRequest = () => {};

function quickviewOpenSuccess(product) {
  return {
    type: quickviewActionTypes["b" /* QUICKVIEW_OPEN */],
    product
  };
}
function quickviewClose() {
  return {
    type: quickviewActionTypes["a" /* QUICKVIEW_CLOSE */]
  };
}
function quickviewOpen(productSlug) {
  return dispatch => {
    cancelPreviousRequest();
    return new Promise(resolve => {
      let canceled = false; // sending request to server, timeout is used as a stub

      const timer = setTimeout(() => {
        api["d" /* shopApi */].getProductBySlug(productSlug).then(product => {
          if (canceled) {
            return;
          }

          if (product) {
            dispatch(quickviewOpenSuccess(product));
          }

          resolve();
        });
      }, 250);

      cancelPreviousRequest = () => {
        canceled = true;
        clearTimeout(timer);
        resolve();
      };
    });
  };
}
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/store/quickview/quickviewHooks.ts
// application



const useQuickview = () => Object(hooks["b" /* useAppSelector */])(state => state[quickviewReducer["a" /* QUICKVIEW_NAMESPACE */]]);
const useQuickviewOpen = () => Object(hooks["a" /* useAppAction */])(quickviewOpen);
const useQuickviewClose = () => Object(hooks["a" /* useAppAction */])(quickviewClose);

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0QaZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export applyClientState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useApplyClientState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withClientState; });
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Zlw4");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// third-party
// application

const APPLY_CLIENT_STATE = 'APPLY_CLIENT_STATE';

function isApplyClientStateAction(action) {
  return action.type === APPLY_CLIENT_STATE;
}

function applyClientState(state) {
  return {
    type: APPLY_CLIENT_STATE,
    state
  };
}
const useApplyClientState = () => Object(_store_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useAppAction */ "a"])(applyClientState);
function withClientState(reducer, namespace) {
  return (state, action) => {
    const childState = reducer(state, action);

    if (isApplyClientStateAction(action)) {
      return _objectSpread(_objectSpread({}, action.state[namespace] || childState), {}, {
        stateFrom: 'client'
      });
    }

    if ('stateFrom' in childState) {
      return childState;
    }

    return _objectSpread(_objectSpread({}, childState), {}, {
      stateFrom: 'server'
    });
  };
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "1pP5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ useUserVehicles; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useGarageCurrent; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ useGarageSetCurrent; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useGarageAddItem; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useGarageRemoveItem; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ useLoadUserVehicles; });

// EXTERNAL MODULE: ./src/store/garage/garageReducer.ts
var garageReducer = __webpack_require__("srIM");

// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// EXTERNAL MODULE: ./src/api/index.ts + 39 modules
var api = __webpack_require__("efbE");

// EXTERNAL MODULE: ./src/store/garage/garageActionTypes.ts
var garageActionTypes = __webpack_require__("WQ/t");

// CONCATENATED MODULE: ./src/store/garage/garageAction.ts
// application


function garageSetItems(items) {
  return {
    type: garageActionTypes["b" /* GARAGE_SET_ITEMS */],
    payload: items
  };
}
function garageSetCurrent(vehicleId) {
  return {
    type: garageActionTypes["a" /* GARAGE_SET_CURRENT */],
    payload: vehicleId
  };
}
function loadUserVehicles() {
  return dispatch => api["e" /* vehicleApi */].getUserVehicles().then(items => {
    dispatch(garageSetItems(items));
  });
}
function garageAddItem(vehicleId) {
  return async dispatch => {
    await api["e" /* vehicleApi */].addUserVehicle(vehicleId);
    return dispatch(loadUserVehicles());
  };
}
function garageRemoveItem(vehicleId) {
  return async dispatch => {
    await api["e" /* vehicleApi */].removeUserVehicle(vehicleId);
    return dispatch(loadUserVehicles());
  };
}
// CONCATENATED MODULE: ./src/store/garage/garageHooks.ts
// application



const useUserVehicles = () => Object(hooks["b" /* useAppSelector */])(state => state[garageReducer["a" /* GARAGE_NAMESPACE */]].items);
const useGarageCurrent = () => Object(hooks["b" /* useAppSelector */])(state => state[garageReducer["a" /* GARAGE_NAMESPACE */]].current);
const useGarageSetCurrent = () => Object(hooks["a" /* useAppAction */])(garageSetCurrent);
const useGarageAddItem = () => Object(hooks["a" /* useAppAction */])(garageAddItem);
const useGarageRemoveItem = () => Object(hooks["a" /* useAppAction */])(garageRemoveItem);
const useLoadUserVehicles = () => Object(hooks["a" /* useAppAction */])(loadUserVehicles);

/***/ }),

/***/ "3KuR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCompare; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCompareAddItem; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ useCompareRemoveItem; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useCompareClear; });

// EXTERNAL MODULE: ./src/store/compare/compareReducer.ts
var compareReducer = __webpack_require__("BEkv");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./src/services/i18n/global-intl.tsx
var global_intl = __webpack_require__("UL12");

// EXTERNAL MODULE: ./src/store/compare/compareActionTypes.ts
var compareActionTypes = __webpack_require__("HCyF");

// CONCATENATED MODULE: ./src/store/compare/compareActions.ts
// third-party
 // application



function compareAddItemSuccess(product) {
  var _globalIntl;

  external_react_toastify_["toast"].success((_globalIntl = Object(global_intl["b" /* globalIntl */])()) === null || _globalIntl === void 0 ? void 0 : _globalIntl.formatMessage({
    id: 'TEXT_TOAST_PRODUCT_ADDED_TO_COMPARE'
  }, {
    productName: product.name
  }));
  return {
    type: compareActionTypes["a" /* COMPARE_ADD_ITEM */],
    product
  };
}
function compareRemoveItemSuccess(productId) {
  return {
    type: compareActionTypes["c" /* COMPARE_REMOVE_ITEM */],
    productId
  };
}
function compareClearSuccess() {
  return {
    type: compareActionTypes["b" /* COMPARE_CLEAR */]
  };
}
function compareAddItem(product) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(compareAddItemSuccess(product));
      resolve();
    }, 250);
  });
}
function compareRemoveItem(productId) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(compareRemoveItemSuccess(productId));
      resolve();
    }, 250);
  });
}
function compareClear() {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(compareClearSuccess());
      resolve();
    }, 250);
  });
}
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/store/compare/compareHooks.ts
// application



const useCompare = () => Object(hooks["b" /* useAppSelector */])(state => state[compareReducer["a" /* COMPARE_NAMESPACE */]]);
const useCompareAddItem = () => Object(hooks["a" /* useAppAction */])(compareAddItem);
const useCompareRemoveItem = () => Object(hooks["a" /* useAppAction */])(compareRemoveItem);
const useCompareClear = () => Object(hooks["a" /* useAppAction */])(compareClear);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4PPU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optionsSetAll; });
/* harmony import */ var _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AZBb");
/* eslint-disable import/prefer-default-export */
// application

function optionsSetAll(options) {
  return {
    type: _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* OPTIONS_SET_ALL */ "b"],
    options
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5at8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const theme = {
  name: 'RedParts',
  url: 'https://themeforest.net/user/kos9/portfolio',
  author: {
    name: 'Kos',
    profile_url: 'https://themeforest.net/user/kos9'
  },
  contacts: {
    address: ['715 Fake Street, New York 10021 USA'],
    email: ['red-parts@example.com'],
    phone: ['+1 (800) 060-07-30'],
    hours: ['Mon-Sat 10:00pm - 7:00pm']
  }
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "5nc1":
/***/ (function(module, exports) {



/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7MUJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "7eUB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getDefaultLocale; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getAllLanguages; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getDefaultLanguage; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getLanguageByPath; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getLanguageByLocale; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ loadMessages; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ removePrefix; });

// EXTERNAL MODULE: ./src/services/utils.ts
var utils = __webpack_require__("fkzy");

// CONCATENATED MODULE: ./src/data/shopLanguages.ts
// application
const dataShopLanguages = [{
  locale: 'en',
  code: 'en',
  name: 'English',
  icon: '/images/languages/language-1.png',
  direction: 'ltr'
},
/*  {
      locale: 'ru',
      code: 'ru',
      name: 'Russian',
      icon: '/images/languages/language-2.png',
      direction: 'ltr',
  },*/
{
  locale: 'ar',
  code: 'ar',
  name: 'العربية',
  icon: '/images/languages/language-3.png',
  direction: 'rtl'
}];
const dataShopDefaultLocale = 'en';
/* harmony default export */ var shopLanguages = (dataShopLanguages);
// CONCATENATED MODULE: ./src/services/i18n/utils.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

// data

function getDefaultLocale() {
  return dataShopDefaultLocale;
}
function getAllLanguages() {
  return shopLanguages;
}
function getDefaultLanguage() {
  const language = getAllLanguages().find(language => language.locale === getDefaultLocale());

  if (!language) {
    throw new Error('Default language not found.');
  }

  return language;
}
function getLanguageByPath(path) {
  return getAllLanguages().find(language => {
    const rg = new RegExp(`^\\/${language.locale}(\\/|$)`);
    return rg.test(path);
  }) || null;
}
function getLanguageByLocale(locale) {
  return getAllLanguages().find(language => language.locale === locale) || null;
}

async function loadTranslation(locale) {
  if (false) {}

  return (await __webpack_require__("+vqc")(`./${locale}.json`)).default;
}

async function loadMessages(locale) {
  const baseMessages = locale === getDefaultLocale() ? Promise.resolve({}) : loadTranslation(getDefaultLocale());
  const mainMessages = loadTranslation(locale);
  return _objectSpread(_objectSpread({}, await baseMessages), await mainMessages);
}
function removePrefix(path) {
  const languages = getAllLanguages();

  for (let i = 0; i < languages.length; i += 1) {
    const language = languages[i];
    const rg = new RegExp(`^\\/${language.locale}(\\/|$)`);

    if (rg.test(path)) {
      return path.substr(language.locale.length + 1);
    }
  }

  return path;
}

/***/ }),

/***/ "7qKr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useVehicleForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("efbE");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party

 // application



function makeItems(itemsDef) {
  return itemsDef.map((itemDef, index) => _objectSpread(_objectSpread({}, itemDef), {}, {
    value: 'none',
    loading: false,
    options: [],
    disabled: index !== 0
  }));
}

function getItemValue(item) {
  const {
    value: itemValue
  } = item;

  if (itemValue !== 'none' && item.deserializeOptionFn) {
    return item.deserializeOptionFn(itemValue, item);
  }

  return itemValue;
}

function getItemValues(items) {
  return items.reduce((acc, prevItem) => [...acc, getItemValue(prevItem)], []);
}

function serializeOption(option, item) {
  if (item.serializeOptionFn) {
    return item.serializeOptionFn(option, item);
  }

  return option;
}

function deserializeOption(option, item) {
  if (item.deserializeOptionFn) {
    return item.deserializeOptionFn(option, item);
  }

  return option;
}

function useVehicleForm(options = {}) {
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  const {
    onChange
  } = options;
  const cancelPrevRequestRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(makeItems([{
    key: 'year',
    label: intl.formatMessage({
      id: 'INPUT_VEHICLE_YEAR_LABEL'
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_VEHICLE_YEAR_PLACEHOLDER'
    }),
    optionsSource: _api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"].getYears.bind(_api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"]),
    serializeOptionFn: option => option.toString(),
    deserializeOptionFn: option => parseFloat(option)
  }, {
    key: 'brand',
    label: intl.formatMessage({
      id: 'INPUT_VEHICLE_BRAND_LABEL'
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_VEHICLE_BRAND_PLACEHOLDER'
    }),
    optionsSource: _api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"].getMakes.bind(_api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"])
  }, {
    key: 'model',
    label: intl.formatMessage({
      id: 'INPUT_VEHICLE_MODEL_LABEL'
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_VEHICLE_MODEL_PLACEHOLDER'
    }),
    optionsSource: _api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"].getModels.bind(_api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"])
  }, {
    key: 'engine',
    label: intl.formatMessage({
      id: 'INPUT_VEHICLE_ENGINE_LABEL'
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_VEHICLE_ENGINE_PLACEHOLDER'
    }),
    optionsSource: _api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"].getVehicles.bind(_api__WEBPACK_IMPORTED_MODULE_2__[/* vehicleApi */ "e"]),
    serializeOptionFn: option => option.engine,
    deserializeOptionFn: (option, item) => item.options.find(x => x.engine === option)
  }]));

  const load = async (items, index) => {
    cancelPrevRequestRef.current();
    let canceled = false;

    cancelPrevRequestRef.current = () => {
      canceled = true;
    };

    setItems(prevItems => [...prevItems.map((prevItem, prevItemIdx) => prevItemIdx !== index ? prevItem : _objectSpread(_objectSpread({}, prevItem), {}, {
      loading: true
    }))]);
    const item = items[index];
    const args = getItemValues(items.slice(0, index));
    let optionsSource = Promise.resolve([]);

    if (args.length === 0 || args.slice().pop() !== 'none') {
      optionsSource = item.optionsSource(...args);
    }

    const options = await optionsSource;

    if (canceled) {
      return;
    }

    setItems(prevItems => [...prevItems.map((prevItem, prevItemIdx) => prevItemIdx !== index ? prevItem : _objectSpread(_objectSpread({}, prevItem), {}, {
      options,
      loading: false
    }))]);
  };

  const onItemValueChange = (index, value) => {
    const nextItemIdx = index + 1;
    setItems(prevItems => {
      let resultItems = prevItems;
      resultItems = [...resultItems.map((prevItem, prevItemIdx) => prevItemIdx !== index ? prevItem : _objectSpread(_objectSpread({}, prevItem), {}, {
        value
      }))];
      resultItems = [...resultItems.map((prevItem, prevItemIdx) => prevItemIdx <= index ? prevItem : _objectSpread(_objectSpread({}, prevItem), {}, {
        value: 'none',
        options: [],
        disabled: true
      }))];

      if (value !== 'none' && resultItems[nextItemIdx]) {
        resultItems = [...resultItems.map((prevItem, prevItemIdx) => prevItemIdx !== nextItemIdx ? prevItem : _objectSpread(_objectSpread({}, prevItem), {}, {
          disabled: false
        }))];
      }

      return resultItems;
    });

    if (value === 'none') {
      if (onChange) {
        onChange(null);
      }
    } else if (!items[nextItemIdx] && onChange) {
      onChange(deserializeOption(value, items[index]));
    }
  }; // Load items.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let prevValue = null;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (prevValue !== 'none' && item.options.length === 0 && !item.loading) {
        load(items, i).then();
        return;
      }

      prevValue = item.value;
    }
  }, [items]);
  return {
    items,
    onItemValueChange,
    serializeOption
  };
}

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Nj4":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Rzb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataShopDefaultCurrency; });
// application
const dataShopCurrencies = [{
  code: 'EUR',
  symbol: '€',
  name: 'Euro',
  rate: 0.92
}, {
  code: 'GBP',
  symbol: '£',
  name: 'Pound Sterling',
  rate: 0.78
}, {
  code: 'USD',
  symbol: '$',
  name: 'US Dollar',
  rate: 1
}, {
  code: 'RUB',
  symbol: '₽',
  name: 'Russian Ruble',
  rate: 64
}];
const dataShopDefaultCurrencyCode = 'USD';
const dataShopDefaultCurrency = dataShopCurrencies.find(x => x.code === dataShopDefaultCurrencyCode);
/* harmony default export */ __webpack_exports__["b"] = (dataShopCurrencies);

/***/ }),

/***/ "AZBb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS_HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPTIONS_SET_ALL; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_options_optionsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ehF+");
// third-party
 // application


const OPTIONS_HYDRATE = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"];
const OPTIONS_SET_ALL = 'OPTIONS_SET_ALL';

/***/ }),

/***/ "AdE6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUICKVIEW_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return quickviewReducer; });
/* harmony import */ var _store_quickview_quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BqYR");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  open: false,
  product: null
};
const QUICKVIEW_NAMESPACE = 'quickview';
function quickviewReducer(state = initialState, action) {
  let newState = state;

  if (action.type === _store_quickview_quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* QUICKVIEW_OPEN */ "b"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: true,
      product: JSON.parse(JSON.stringify(action.product))
    });
  } else if (action.type === _store_quickview_quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* QUICKVIEW_CLOSE */ "a"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: false
    });
  }

  return newState;
}

/***/ }),

/***/ "AdQK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CART_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CART_UPDATE_QUANTITIES; });
// application
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_UPDATE_QUANTITIES = 'CART_UPDATE_QUANTITIES';

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BEkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPARE_NAMESPACE; });
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0QaZ");
/* harmony import */ var _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HCyF");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



function addItem(state, product) {
  const itemIndex = state.items.findIndex(x => x.id === product.id);

  if (itemIndex === -1) {
    return {
      items: [...state.items, JSON.parse(JSON.stringify(product))]
    };
  }

  return state;
}

function removeItem(state, productId) {
  return {
    items: state.items.filter(x => x.id !== productId)
  };
}

function clear(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    items: []
  });
}

const initialState = {
  items: []
};
const COMPARE_NAMESPACE = 'compare';

function compareBaseReducer(state = initialState, action) {
  switch (action.type) {
    case _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__[/* COMPARE_ADD_ITEM */ "a"]:
      return addItem(state, action.product);

    case _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__[/* COMPARE_REMOVE_ITEM */ "c"]:
      return removeItem(state, action.productId);

    case _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__[/* COMPARE_CLEAR */ "b"]:
      return clear(state);

    default:
      return state;
  }
}

const compareReducer = Object(_store_client__WEBPACK_IMPORTED_MODULE_0__[/* withClientState */ "b"])(compareBaseReducer, COMPARE_NAMESPACE);
/* harmony default export */ __webpack_exports__["b"] = (compareReducer);

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "BWJY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// react


function AsyncAction(props) {
  const {
    action,
    render
  } = props;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const canceledRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  const run = () => {
    if (loading || !action) {
      return;
    }

    setLoading(true);
    action().then(() => {
      if (canceledRef.current) {
        return;
      }

      setLoading(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
    canceledRef.current = true;
  }, [canceledRef]);

  if (render) {
    return render({
      run,
      loading
    });
  }

  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (AsyncAction);

/***/ }),

/***/ "Bi1y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY_CHANGE; });
// application
const CURRENCY_CHANGE = 'CURRENCY_CHANGE';

/***/ }),

/***/ "BqYR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QUICKVIEW_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUICKVIEW_CLOSE; });
// application
const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C+jY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_NAMESPACE; });
/* harmony import */ var _store_user_userActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YD2w");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  current: null
};
const USER_NAMESPACE = 'user';

function userReducer(state = initialState, action) {
  switch (action.type) {
    case _store_user_userActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* USER_SET_CURRENT */ "a"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["b"] = (userReducer);

/***/ }),

/***/ "FAni":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a920");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party



 // application



function ProductForm(props) {
  const {
    options,
    namespace,
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["options", "namespace", "className"]);

  const {
    register
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useFormContext"])();
  const ns = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => namespace ? `${namespace}.` : '', [namespace]);
  const optionsTemplate = options.map((option, optionIdx) => __jsx("div", {
    key: optionIdx,
    className: "product-form__row"
  }, __jsx("div", {
    className: "product-form__title"
  }, option.name), __jsx("div", {
    className: "product-form__control"
  }, option.type === 'default' && __jsx("div", {
    className: "input-radio-label"
  }, __jsx("div", {
    className: "input-radio-label__list"
  }, option.values.map((value, valueIdx) => __jsx("label", {
    key: valueIdx,
    className: "input-radio-label__item"
  }, __jsx("input", {
    type: "radio",
    name: `${ns}${option.slug}`,
    className: "input-radio-label__input",
    value: value.slug,
    ref: register({
      required: true
    })
  }), __jsx("span", {
    className: "input-radio-label__title"
  }, value.name))))), option.type === 'color' && __jsx("div", {
    className: "input-radio-color"
  }, __jsx("div", {
    className: "input-radio-color__list"
  }, option.values.map((value, valueIdx) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: valueIdx
  }, __jsx("label", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('input-radio-color__item', {
      'input-radio-color__item--white': Object(_services_color__WEBPACK_IMPORTED_MODULE_4__[/* colorType */ "a"])(value.color) === 'white'
    }),
    id: `product-option-${optionIdx}-${valueIdx}`,
    style: {
      color: value.color
    },
    title: value.name
  }, __jsx("input", {
    type: "radio",
    name: `${ns}${option.slug}`,
    value: value.slug,
    ref: register({
      required: true
    })
  }), __jsx("span", null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
    target: `product-option-${optionIdx}-${valueIdx}`,
    fade: false,
    delay: {
      show: 0,
      hide: 0
    }
  }, value.name))))))));
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-form', className);
  return __jsx("div", _extends({
    className: rootClasses
  }, rootProps), __jsx("div", {
    className: "product-form__body"
  }, optionsTemplate));
}

/* harmony default export */ __webpack_exports__["a"] = (ProductForm);

/***/ }),

/***/ "FEOJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY_NAMESPACE; });
/* harmony import */ var _store_currency_currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bi1y");
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0QaZ");
/* harmony import */ var _data_shopCurrencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Rzb");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

 // data


const initialState = {
  current: _data_shopCurrencies__WEBPACK_IMPORTED_MODULE_2__[/* dataShopDefaultCurrency */ "a"]
};
const CURRENCY_NAMESPACE = 'currency';

function currencyBaseReducer(state = initialState, action) {
  if (action.type === _store_currency_currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CURRENCY_CHANGE */ "a"] && state.current.code !== action.currency.code) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: JSON.parse(JSON.stringify(action.currency))
    });
  }

  return state;
}

const currencyReducer = Object(_store_client__WEBPACK_IMPORTED_MODULE_1__[/* withClientState */ "b"])(currencyBaseReducer, CURRENCY_NAMESPACE);
/* harmony default export */ __webpack_exports__["b"] = (currencyReducer);

/***/ }),

/***/ "GRQr":
/***/ (function(module, exports) {

module.exports = require("photoswipe");

/***/ }),

/***/ "HCyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPARE_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COMPARE_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPARE_CLEAR; });
// application
const COMPARE_ADD_ITEM = 'COMPARE_ADD_ITEM';
const COMPARE_REMOVE_ITEM = 'COMPARE_REMOVE_ITEM';
const COMPARE_CLEAR = 'COMPARE_CLEAR';

/***/ }),

/***/ "IKmv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_i18n_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+oNx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party


 // application



function AppSlickInner(props) {
  const {
    children,
    forwardRef,
    beforeChange
  } = props,
        otherProps = _objectWithoutProperties(props, ["children", "forwardRef", "beforeChange"]);

  const direction = Object(_services_i18n_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useDirection */ "a"])();
  const slickRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const originalSlickNextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const originalSlickPrevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const slickNextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const slickPrevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});

  const getSlidesCount = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children).length;

  const getSlidesToShow = () => {
    const {
      responsive,
      slidesToShow
    } = props;
    let result = slidesToShow || 1;

    if (false) {}

    return result;
  }; // react-slick has a bug due to which it is initialized
  // with the incorrect position if the RTL property is true
  // this function returns the correct values


  const getStartPosition = () => {
    let {
      infinite
    } = props;
    infinite = infinite === true || infinite === undefined;

    if (direction === 'ltr') {
      return 0;
    }

    const slidesToShow = getSlidesToShow();
    const slidesCount = getSlidesCount();

    if (!infinite) {
      return Math.max(0, slidesCount - slidesToShow);
    }

    return (Math.ceil(slidesCount / slidesToShow) - 1) * slidesToShow;
  }; // returns indexes of active slides by currentIndex


  const getActiveSlides = currentIndex => {
    const slidesToShow = getSlidesToShow();
    const activeSlides = [];
    const slidesCount = getSlidesCount();
    const firstSlide = Math.max(0, Math.min(slidesCount - slidesToShow, currentIndex));
    const lastSlide = Math.min(slidesCount, firstSlide + slidesToShow);

    for (let i = firstSlide; i < lastSlide; i += 1) {
      activeSlides.push(i);
    }

    return activeSlides;
  };

  const {
    0: preventClick,
    1: setPreventClick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: activeSlides,
    1: setActiveSlides
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getActiveSlides(getStartPosition()));

  const onMousedown = event => {
    const downX = event.screenX;
    const downY = event.screenY;
    let clickPrevented = false;

    const onMousemove = moveEvent => {
      if (clickPrevented) {
        return;
      } // Thank you Pythagoras.


      const distance = Math.sqrt(Math.abs(downX - moveEvent.screenX) ** 2 + Math.abs(downY - moveEvent.screenY) ** 2);

      if (moveEvent.cancelable && distance > 3) {
        moveEvent.preventDefault();
      }

      if (distance > 15) {
        clickPrevented = true;
        setPreventClick(clickPrevented);
      }
    };

    const onMouseup = () => {
      clickPrevented = false;
      setPreventClick(clickPrevented);
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
    };

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  };

  const setSlickRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ref => {
    if (forwardRef) {
      if ('current' in forwardRef) {
        forwardRef.current = ref;
      } else {
        forwardRef(ref);
      }
    }

    if (ref && ref !== slickRef.current) {
      // react-slick forgot that if the RTL parameter is true,
      // then the next and prev methods need to be swapped, so let's do it yourself
      originalSlickNextRef.current = ref.slickNext;
      originalSlickPrevRef.current = ref.slickPrev; // eslint-disable-next-line no-param-reassign

      ref.slickNext = () => slickNextRef.current && slickNextRef.current(); // eslint-disable-next-line no-param-reassign


      ref.slickPrev = () => slickPrevRef.current && slickPrevRef.current();
    }

    slickRef.current = ref;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    slickNextRef.current = () => {
      if (direction === 'rtl') {
        originalSlickNextRef.current();
      } else {
        originalSlickNextRef.current();
      }
    };

    slickPrevRef.current = () => {
      if (direction === 'rtl') {
        originalSlickNextRef.current();
      } else {
        originalSlickPrevRef.current();
      }
    };
  }, [direction]); // If the slides have changed, we also need to change the active slides.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timer = setTimeout(() => {
      setActiveSlides(getActiveSlides(getStartPosition()));
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [children]); // Resets position when changing direction.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(getStartPosition(), true);
    }
  }, [direction]);
  const beforeChangeWrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((oldIndex, newIndex) => {
    if (beforeChange) {
      beforeChange(oldIndex, newIndex);
    } // react-slick incorrectly adds the .slick-active class to slides
    // if the RTL parameter is true so we will do it ourselves


    setTimeout(() => {
      setActiveSlides(getActiveSlides(newIndex));
    }, 0);
  }, [beforeChange]);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('slick-prevent-click', {
    'slick-prevent-click--active': preventClick
  }); // we need to reverse slides if direction is RTL
  // because react-slick displays them in the wrong order

  let reversedChildren = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children);

  if (direction === 'rtl') {
    reversedChildren = reversedChildren.slice(0);
    reversedChildren.reverse();
  }

  reversedChildren = reversedChildren.map((slide, index) => {
    // react-slick incorrectly adds the .slick-active class to slides
    // if the RTL parameter is true so we will do it ourselves
    const slideClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'correct-slick-active': activeSlides.includes(index)
    });
    return __jsx("div", {
      key: index,
      dir: direction,
      className: slideClasses
    }, slide);
  });
  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    __jsx("div", {
      className: classes,
      onMouseDown: onMousedown
    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, otherProps, {
      rtl: direction === 'rtl',
      beforeChange: beforeChangeWrapper,
      ref: setSlickRef
    }), reversedChildren))
  );
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    children
  } = props;
  return __jsx(AppSlickInner, _extends({
    forwardRef: ref
  }, props), children);
}));

/***/ }),

/***/ "ISme":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fkzy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // application


const AppImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    src
  } = props,
        otherProps = _objectWithoutProperties(props, ["src"]);

  const normalizedSrc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => src ? Object(_services_utils__WEBPACK_IMPORTED_MODULE_1__[/* baseUrl */ "a"])(src) : src, [src]);
  return __jsx("img", _extends({
    alt: ""
  }, otherProps, {
    src: normalizedSrc,
    ref: ref
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (AppImage);

/***/ }),

/***/ "J/yf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageLocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LanguageSetLocaleContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// react

const LanguageLocaleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('');
const LanguageSetLocaleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(() => {});

/***/ }),

/***/ "JFti":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+lck");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party


 // application



function StockStatusBadge(props) {
  const {
    stock,
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["stock", "className"]);

  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className);
  const typesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    'in-stock': 'success',
    'out-of-stock': 'failure',
    'on-backorder': 'warning'
  }), []);
  const textMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    'in-stock': __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "TEXT_STOCK_IN_STOCK"
    }),
    'out-of-stock': __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "TEXT_STOCK_OUT_OF_STOCK"
    }),
    'on-backorder': __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "TEXT_STOCK_ON_BACKORDER"
    })
  }), []);
  return __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extends({
    type: typesMap[stock],
    text: textMap[stock],
    className: rootClasses
  }, rootProps));
}

/* harmony default export */ __webpack_exports__["a"] = (StockStatusBadge);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K5+J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_forms_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7qKr");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("efbE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party


 // application




function VehicleForm(props) {
  const {
    location,
    onVehicleChange = () => {}
  } = props;
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const internalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const cancelVinRequest = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const {
    0: vinIsLoading,
    1: setVinIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: vinError,
    1: setVinError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: vehicleByFilters,
    1: setVehicleByFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: vehicleByVin,
    1: setVehicleByVin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const updateValue = args => {
    const value = _objectSpread({
      vehicleByVin,
      vehicleByFilters
    }, args);

    const vehicle = value.vehicleByVin || value.vehicleByFilters;

    if (vehicle !== internalValue.current) {
      internalValue.current = vehicle;
      onVehicleChange(vehicle);
    }
  };

  const vehicleForm = Object(_services_forms_vehicle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    onChange: vehicle => {
      setVehicleByFilters(vehicle);
      updateValue({
        vehicleByFilters: vehicle
      });
    }
  });

  const handleVinChange = event => {
    let canceled = false;
    cancelVinRequest.current();

    cancelVinRequest.current = () => {
      canceled = true;
    };

    const value = event.currentTarget.value.trim();
    setVinIsLoading(value !== '');

    if (value === '') {
      setVehicleByVin(null);
      setVinError(null);
      updateValue({
        vehicleByVin: null
      });
    }

    setTimeout(async () => {
      if (value === '' || canceled) {
        return;
      }

      try {
        const vehicle = await _api__WEBPACK_IMPORTED_MODULE_4__[/* vehicleApi */ "e"].getVehicleByVin(value);

        if (canceled) {
          return;
        }

        setVehicleByVin(vehicle);
        setVinError(null);
        updateValue({
          vehicleByVin: vehicle
        });
      } catch (error) {
        if (canceled) {
          return;
        }

        setVehicleByVin(null);
        setVinError(error);
        updateValue({
          vehicleByVin: null
        });
      }

      setVinIsLoading(false);
    }, 350);
  };

  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('vehicle-form', `vehicle-form--layout--${location}`);
  return __jsx("div", {
    className: rootClasses
  }, vehicleForm.items.map((item, itemIdx) => {
    const options = item.options;
    return __jsx("div", {
      key: itemIdx,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vehicle-form__item', 'vehicle-form__item--select', {
        'vehicle-form__item--loading': item.loading
      })
    }, __jsx("select", {
      className: "form-control",
      "aria-label": item.label,
      name: item.key,
      value: item.value,
      disabled: item.disabled,
      onChange: e => vehicleForm.onItemValueChange(itemIdx, e.target.value)
    }, __jsx("option", {
      value: "none"
    }, item.placeholder), options.map((option, optionIdx) => __jsx("option", {
      key: optionIdx,
      value: vehicleForm.serializeOption(option, item)
    }, vehicleForm.serializeOption(option, item)))), __jsx("div", {
      className: "vehicle-form__loader"
    }));
  }), __jsx("div", {
    className: "vehicle-form__divider"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_OR"
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vehicle-form__item', {
      'vehicle-form__item--loading': vinIsLoading
    })
  }, __jsx("div", {
    className: "vehicle-form__item-input"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    name: "vin",
    "aria-label": intl.formatMessage({
      id: 'INPUT_VIN_LABEL'
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_VIN_PLACEHOLDER'
    }),
    onInput: handleVinChange
  }), __jsx("div", {
    className: "vehicle-form__loader"
  })), (vehicleByVin || vinError !== null) && __jsx("div", {
    className: "vehicle-form__item-alert"
  }, vehicleByVin && __jsx("div", {
    className: "alert alert-sm alert-primary my-0"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_ALERT_VEHICLE_FOUND",
    values: vehicleByVin
  })), vinError !== null && __jsx("div", {
    className: "alert alert-sm alert-danger my-0"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_ALERT_UNABLE_TO_FIND_VEHICLE_BY_VIN"
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (VehicleForm);

/***/ }),

/***/ "Kf4p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party



function Rating(props) {
  const {
    value,
    className
  } = props;
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('rating', className);
  return __jsx("div", {
    className: rootClasses
  }, __jsx("div", {
    className: "rating__body"
  }, [1, 2, 3, 4, 5].map(i => {
    const starClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('rating__star', {
      'rating__star--active': value >= i
    });
    return __jsx("div", {
      key: i,
      className: starClasses
    });
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),

/***/ "LuY4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateEmail; });
/* eslint-disable import/prefer-default-export */
function validateEmail(value) {
  return /^[^@]+@[^@]+$/.test(value);
}

/***/ }),

/***/ "NUuo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/no-unused-vars */
// application
const url = {
  // common
  home: () => '/',
  category: category => {
    if (category.type === 'shop') {
      return url.shopCategory(category);
    }

    return '/';
  },
  // shop pages
  shop: () => '/catalog',
  shopCategory: category => ({
    href: `/catalog/[slug]${category.layout === 'products' ? '/products' : ''}?slug=${category.slug}`,
    as: `/catalog/${category.slug}${category.layout === 'products' ? '/products' : ''}`
  }),
  products: ({
    filters
  } = {}) => ({
    href: {
      pathname: '/catalog/products',
      query: _objectSpread({}, filters)
    }
  }),
  product: product => ({
    href: `/products/[slug]?slug=${product.slug}`,
    as: `/products/${product.slug}`
  }),
  brand: brand => '/',
  cart: () => '/cart',
  checkout: () => '/cart/checkout',
  checkoutSuccess: order => ({
    href: `/cart/checkout/[token]?token=${order.token}`,
    as: `/cart/checkout/${order.token}`
  }),
  wishlist: () => '/wishlist',
  compare: () => '/compare',
  trackOrder: () => '/track-order',
  // blog pages
  blog: () => '/demo/blog/classic-right-sidebar',
  post: post => '/demo/blog/post-full-width',
  // auth pages
  signIn: () => '/account/login',
  signUp: () => '/',
  passwordRecovery: () => '/',
  // account pages
  accountDashboard: () => '/account/dashboard',
  accountGarage: () => '/account/garage',
  accountProfile: () => '/account/profile',
  accountPassword: () => '/account/password',
  accountOrders: () => '/account/orders',
  accountOrderView: order => ({
    href: `/account/orders/[id]?id=${order.id}`,
    as: `/account/orders/${order.id}`
  }),
  accountAddresses: () => '/account/addresses',
  accountAddressNew: () => ({
    href: '/account/addresses/[id]?id=new',
    as: '/account/addresses/new'
  }),
  accountAddressEdit: address => ({
    href: `/account/addresses/[id]?id=${address.id}`,
    as: `/account/addresses/${address.id}`
  }),
  // site pages
  pageAboutUs: () => '/about-us',
  pageContactUs: () => '/contact-us',
  pageStoreLocation: () => '/',
  pageTerms: () => '/terms'
};
/* harmony default export */ __webpack_exports__["a"] = (url);

/***/ }),

/***/ "Neop":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_MENU_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mobileMenuReducer; });
/* harmony import */ var _store_mobile_menu_mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Wjoj");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  open: false
};
const MOBILE_MENU_NAMESPACE = 'mobileMenu';
function mobileMenuReducer(state = initialState, action) {
  switch (action.type) {
    case _store_mobile_menu_mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* MOBILE_MENU_OPEN */ "b"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        open: true
      });

    case _store_mobile_menu_mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* MOBILE_MENU_CLOSE */ "a"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        open: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OHag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party



function RadioButton(props) {
  const {
    className,
    inputRef
  } = props,
        inputProps = _objectWithoutProperties(props, ["className", "inputRef"]);

  return __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('input-radio', className)
  }, __jsx("span", {
    className: "input-radio__body"
  }, __jsx("input", _extends({
    className: "input-radio__input",
    type: "radio",
    ref: inputRef
  }, inputProps)), __jsx("span", {
    className: "input-radio__circle"
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (RadioButton);

/***/ }),

/***/ "OKC6":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P3CU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowDown9x6Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrowDownSm7x5Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ArrowRoundedDown9x6Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ArrowRoundedDown12x7Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ArrowRoundedLeft6x9Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ArrowRoundedLeft7x11Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ArrowRoundedRight6x9Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ArrowRoundedRight7x11Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Car20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Cart20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Cart32Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Check12x9Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Check100Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Compare16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Cross9LightSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Cross10Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Cross12Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Cross20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Fi24Hours48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FiFreeDelivery48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return Filters16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return FiPaymentSecurity48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return FiTag48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return FitSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return Heart20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Heart32Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LayoutGrid16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LayoutGridWithDetails16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LayoutList16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LayoutTable16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Menu16x12Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return Menu18x14Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return NoFitSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Person20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return Person32Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return Quickview16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return RecycleBin16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return Search20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return Wishlist16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return ZoomIn24Svg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ArrowDown9x6 = function ArrowDown9x6(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.2.4c.4-.4 1-.5 1.4-.1l2.9 3 2.9-3c.4-.4 1.1-.4 1.4.1.3.4.3.9-.1 1.3L4.5 6 .3 1.6C-.1 1.3-.1.7.2.4z"
  }));
};

ArrowDown9x6.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "9",
  height: "6"
};

var ArrowDownSm7x5 = function ArrowDownSm7x5(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.28.282a.919.919 0 0 1 1.316.015L3.504 2.31 5.413.297a.92.92 0 0 1 1.333 1.268L3.504 5.007.262 1.565A.92.92 0 0 1 .28.282z"
  }));
};

ArrowDownSm7x5.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "5"
};

var ArrowRoundedDown9x6 = function ArrowRoundedDown9x6(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.2.4c.4-.4 1-.5 1.4-.1l2.9 3 2.9-3c.4-.4 1.1-.4 1.4.1.3.4.3.9-.1 1.3L4.5 6 .3 1.6C-.1 1.3-.1.7.2.4z"
  }));
};

ArrowRoundedDown9x6.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "9",
  height: "6"
};

var ArrowRoundedDown12x7 = function ArrowRoundedDown12x7(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.286.273a.92.92 0 0 0-.01 1.292l5.24 5.428 5.241-5.428a.92.92 0 0 0-.01-1.292.923.923 0 0 0-1.31.006L5.516 4.296 1.596.279A.923.923 0 0 0 .286.273z"
  }));
};

ArrowRoundedDown12x7.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "7"
};

var ArrowRoundedLeft6x9 = function ArrowRoundedLeft6x9(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M5.7 8.7c-.4.4-.9.4-1.3 0L0 4.5 4.4.3c.4-.4.9-.3 1.3 0 .4.4.4 1 0 1.3l-3 2.9 3 2.9c.4.4.4 1 0 1.3z"
  }));
};

ArrowRoundedLeft6x9.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "6",
  height: "9"
};

var ArrowRoundedLeft7x11 = function ArrowRoundedLeft7x11(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.7.3c-.4-.4-.9-.4-1.3 0L0 5.5l5.4 5.2c.4.4.9.3 1.3 0 .4-.4.4-1 0-1.3l-4-3.9 4-3.9c.4-.4.4-1 0-1.3z"
  }));
};

ArrowRoundedLeft7x11.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "11"
};

var ArrowRoundedRight6x9 = function ArrowRoundedRight6x9(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.3 7.4l3-2.9-3-2.9C-.1 1.3-.1.7.3.3c.4-.3.9-.4 1.3 0L6 4.5 1.6 8.7c-.4.4-.9.4-1.3 0-.4-.3-.4-.9 0-1.3z"
  }));
};

ArrowRoundedRight6x9.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "6",
  height: "9"
};

var ArrowRoundedRight7x11 = function ArrowRoundedRight7x11(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.3 10.7c.4.4.9.4 1.3 0L7 5.5 1.6.3C1.2-.1.7 0 .3.3c-.4.4-.4 1 0 1.3l4 3.9-4 3.9c-.4.4-.4 1 0 1.3z"
  }));
};

ArrowRoundedRight7x11.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "11"
};

var Car20 = function Car20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.6 2h6.8c1 0 2.9.8 3.6 2.2.7 1.5.9 2.8 1.4 2.8C20 7 20 8 20 8v1h-1v7.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5V16H5v.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5V9H0V8s.1-1 1.6-1c.5 0 .7-1.3 1.4-2.8C3.7 2.8 5.6 2 6.6 2zm6.7 2H6.7c-.8 0-1.4 0-2 .7-.5.6-.8 1.5-1 2-.1.4-.2 1.2 0 1.3.8.4 2.4 1 6.3 1 4 0 5.4-.6 6.3-1 .2-.1.2-.8 0-1.2-.2-.4-.5-1.5-1-2-.6-.8-1.2-.8-2-.8zM4 10c-.4-.3-1.5-.5-2 0-.4.4-.4 1.6 0 2 .5.5 4 .4 4 0 0-.8-1.5-1.7-2-2zm10 2c0 .4 3.5.5 4 0 .4-.4.4-1.6 0-2-.5-.5-1.3-.3-2 0-.5.2-2 1.3-2 2z"
  }));
};

Car20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Cart20 = function Cart20(props) {
  return __jsx("svg", props, __jsx("circle", {
    cx: "7",
    cy: "17",
    r: "2"
  }), __jsx("circle", {
    cx: "15",
    cy: "17",
    r: "2"
  }), __jsx("path", {
    d: "M20 4.4V5l-1.8 6.3c-.1.4-.5.7-1 .7H6.7c-.4 0-.8-.3-1-.7L3.3 3.9c-.2-.6-.7-.9-1.2-.9H.4C.2 3 0 2.8 0 2.6V1.4c0-.2.2-.4.4-.4h2.5c1 0 1.8.6 2.1 1.6l.1.4 2.3 6.8c0 .1.2.2.3.2h8.6c.1 0 .3-.1.3-.2l1.3-4.4c0-.2-.2-.4-.4-.4H9.4c-.2 0-.4-.2-.4-.4V3.4c0-.2.2-.4.4-.4h9.2c.8 0 1.4.6 1.4 1.4z"
  }));
};

Cart20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Cart32 = function Cart32(props) {
  return __jsx("svg", props, __jsx("circle", {
    cx: "10.5",
    cy: "27.5",
    r: "2.5"
  }), __jsx("circle", {
    cx: "23.5",
    cy: "27.5",
    r: "2.5"
  }), __jsx("path", {
    d: "M26.4 21H11.2c-1.2 0-2.2-.8-2.4-1.9L5.4 4.8c-.1-.5-.5-.8-1-.8H1c-.6 0-1-.4-1-1s.4-1 1-1h3.4C5.8 2 7 3 7.3 4.3l3.4 14.3c.1.2.3.4.5.4h15.2c.2 0 .4-.1.5-.4l3.1-10c.1-.2 0-.4-.1-.4-.1-.1-.2-.2-.4-.2H14c-.6 0-1-.4-1-1s.4-1 1-1h15.5c.8 0 1.5.4 2 1s.6 1.5.4 2.2l-3.1 10c-.3 1.1-1.3 1.8-2.4 1.8z"
  }));
};

Cart32.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32"
};

var Check12x9 = function Check12x9(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M12.002 1.396L4.461 9.002-.002 4.498l1.385-1.402 3.078 3.107 6.156-6.209 1.385 1.402z"
  }));
};

Check12x9.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "9"
};

var Check100 = function Check100(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm0-98C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm-5.8 69L22.3 49.1l1.4-1.4 21.2 21.2 34.4-34.4 1.4 1.4L45.6 71c-.4.4-1 .4-1.4 0z"
  }));
};

Check100.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100"
};

var Compare16 = function Compare16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M9 15H7c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zM1 9h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zM15 5h-2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1z"
  }));
};

Compare16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var Cross9Light = function Cross9Light(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M9 8.5l-.5.5-4-4-4 4-.5-.5 4-4-4-4L.5 0l4 4 4-4 .5.5-4 4 4 4z"
  }));
};

Cross9Light.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "9",
  height: "9"
};

var Cross10 = function Cross10(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M8.8 8.8c-.4.4-1 .4-1.4 0L5 6.4 2.6 8.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L3.6 5 1.2 2.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L5 3.6l2.4-2.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6.4 5l2.4 2.4c.4.4.4 1 0 1.4z"
  }));
};

Cross10.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
};

var Cross12 = function Cross12(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M10.8 10.8c-.4.4-1 .4-1.4 0L6 7.4l-3.4 3.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L4.6 6 1.2 2.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L6 4.6l3.4-3.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L7.4 6l3.4 3.4c.4.4.4 1 0 1.4z"
  }));
};

Cross12.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12"
};

var Cross20 = function Cross20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16.7 16.7c-.4.4-1 .4-1.4 0L10 11.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 3.3 4.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 10l5.3 5.3c.4.4.4 1 0 1.4z"
  }));
};

Cross20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Fi24Hours48 = function Fi24Hours48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M46.218 18.168h-.262v-.869c0-1.175-1.211-1.766-2.453-1.766-.521 0-.985.094-1.366.263.015-.028 2.29-4.591 2.303-4.62.968-2.263-3.041-4.024-4.372-1.449l-5.184 10.166c-.35.648-.364 1.449.033 2.081a1.443 1.443 0 0 0-.668-.166H29.37c1.555-1.597 6.638-3.535 6.638-8.011 0-1.599-.676-3.02-1.903-4.002-1.088-.87-2.52-1.35-4.033-1.35-2.802 0-5.779 1.758-5.779 5.015 0 2.195 1.426 2.522 2.275 2.522 1.653 0 2.545-1.022 2.545-1.983 0-.485.117-.981.981-.981.906 0 1.003.623 1.003.891 0 2.284-7.074 4.474-7.074 8.399v2.178c0 1.147 1.319 1.781 2.23 1.781h7.995c1.426 0 2.332-2.195 1.348-3.669.265.137.569.21.898.21h4.552v1.678c0 1.049 1.01 1.781 2.455 1.781s2.455-.733 2.455-1.781v-1.678h.262c1.02 0 1.781-1.225 1.781-2.32.001-1.344-.748-2.32-1.781-2.32zm-11.977 6.693h-7.987c-.389 0-.802-.258-.824-.375v-2.179c0-3.056 7.074-5.046 7.074-8.399 0-1.107-.754-2.298-2.41-2.298-1.473 0-2.388.915-2.388 2.388 0 .236-.405.577-1.138.577-.492 0-.869-.082-.869-1.116 0-2.344 2.253-3.609 4.373-3.609 2.251 0 4.53 1.355 4.53 3.946 0 4.526-6.94 5.826-6.94 8.511v.202c0 .389.315.703.703.703h5.882c.091.015.354.314.354.802 0 .48-.252.811-.36.847zm11.953-3.459h-.941a.703.703 0 0 0-.703.703v2.381c0 .151-.44.375-1.048.375-.608 0-1.049-.224-1.049-.375v-2.381a.703.703 0 0 0-.703-.703h-5.255c-.518 0-.545-.528-.371-.846l.009-.018 5.186-10.17c.533-1.031 1.883-.238 1.884.097-.011.087.038-.035-4.014 8.092a.704.704 0 0 0 .629 1.017h1.932a.703.703 0 0 0 .703-.703v-1.572c0-.123.409-.36 1.051-.36.618 0 1.046.223 1.046.36v1.572c0 .389.315.703.703.703h.966c.196 0 .375.435.375.914-.001.463-.27.85-.4.914zm-5.148-3.418v.184h-.092l.092-.184zm0 0M36.976 36.602a19.307 19.307 0 0 0 5.202-8.354.704.704 0 0 0-1.344-.413 17.888 17.888 0 0 1-4.823 7.744.704.704 0 0 0 .965 1.023zm0 0M35.099 7.86a.703.703 0 0 0-.164-.981C29.684 3.131 23.098 2.38 17.381 4.38a.703.703 0 1 0 .465 1.327c5.23-1.83 11.346-1.199 16.272 2.316a.703.703 0 0 0 .981-.163zm0 0M25.247 43.573a3.861 3.861 0 0 0-2.807-.416c-.525.123-1.064.207-1.602.251a.703.703 0 1 0 .115 1.402c.606-.05 1.214-.145 1.807-.284a2.46 2.46 0 0 1 1.788.267 4.976 4.976 0 0 0 5.076-.064c3.605-2.207 3.212-1.964 3.359-2.061a4.978 4.978 0 0 0 1.519-6.755l-2.538-4.145a4.98 4.98 0 0 0-6.835-1.644l-3.235 1.981a4.95 4.95 0 0 0-2.371 4.214.245.245 0 0 1-.293.237 7.263 7.263 0 0 1-3.306-1.683 26.405 26.405 0 0 1-3.656-3.984.703.703 0 1 0-1.132.834 27.801 27.801 0 0 0 3.85 4.197 8.665 8.665 0 0 0 3.947 2.01 1.652 1.652 0 0 0 1.996-1.602 3.551 3.551 0 0 1 1.699-3.025l2.742-1.679 6.261 10.224-2.742 1.679a3.564 3.564 0 0 1-3.642.046zm1.375-12.596c1.54-.495 3.282.119 4.142 1.525l2.538 4.145c.865 1.413.611 3.242-.524 4.383l-6.156-10.053zm0 0"
  }), __jsx("path", {
    d: "M.403 23.192c.998 3.783 2.422 7.199 4.232 10.155 1.81 2.956 4.206 5.777 7.121 8.386a12.246 12.246 0 0 0 5.717 2.868.704.704 0 1 0 .281-1.378 10.837 10.837 0 0 1-5.06-2.538c-2.813-2.517-5.121-5.233-6.859-8.072-1.739-2.839-3.108-6.13-4.071-9.78a10.899 10.899 0 0 1 2.228-9.803 3.863 3.863 0 0 0 .906-2.69 3.57 3.57 0 0 1 1.694-3.224l2.742-1.679 6.261 10.224-2.742 1.679a3.553 3.553 0 0 1-3.436.153 1.653 1.653 0 0 0-2.319 1.052 8.664 8.664 0 0 0-.015 4.47c.558 2.115 1.315 4.081 2.249 5.843a.704.704 0 0 0 1.243-.659c-.884-1.667-1.601-3.532-2.132-5.543a7.267 7.267 0 0 1 .012-3.744.245.245 0 0 1 .342-.156 4.954 4.954 0 0 0 4.789-.216l3.235-1.981a4.979 4.979 0 0 0 1.643-6.835l-2.538-4.145c-1.44-2.351-4.516-3.063-6.835-1.643L5.858 5.917a4.974 4.974 0 0 0-2.365 4.492 2.46 2.46 0 0 1-.575 1.714A12.305 12.305 0 0 0 .403 23.192zM14.728 6.314l2.538 4.145c.865 1.414.61 3.243-.524 4.383L10.586 4.788c1.534-.493 3.278.115 4.142 1.526zm0 0"
  }));
};

Fi24Hours48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var FiFreeDelivery48 = function FiFreeDelivery48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M44.6 26.9l-1.2-5c.3-.1.6-.4.6-.7v-.8c0-1.7-1.4-3.2-3.2-3.2h-5.7v-1.7c0-.9-.7-1.6-1.6-1.6H23.1l6.4-2.6c.4-.2.6-.6.4-1-.2-.4-.6-.6-1-.4L23.7 12c1.6-1 3.2-2.2 3.8-2.9 1.2-1.5.9-3.7-.7-4.9-1.5-1.2-3.7-.9-4.9.7-.9 1.1-2 4.3-2.7 6.5-.7-2.2-1.9-5.4-2.7-6.5-1.2-1.5-3.4-1.8-4.9-.7-1.6 1.3-1.9 3.5-.7 5 .6.8 2.2 1.9 3.8 2.9L9.5 10c-.4-.2-.8 0-1 .4-.2.4 0 .8.4 1l6.4 2.6H4.8c-.9 0-1.6.7-1.6 1.6v13.6c0 .4.3.8.8.8.4 0 .8-.3.8-.8V15.6h28.9v13.6c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.9H44c1.1 0 2 .7 2.3 1.7H44c-.4 0-.8.3-.8.8v1.6c0 1.3 1.1 2.4 2.4 2.4h.9v3.3h-2c-.6-1.9-2.4-3.2-4.5-3.2s-3.9 1.3-4.5 3.2h-.4v-5.7c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v5.7H18.1c-.6-1.9-2.4-3.2-4.5-3.2s-3.9 1.3-4.5 3.2H4.8v-1.7H8c.4 0 .8-.3.8-.8s-.4-.7-.8-.7H.8c-.4 0-.8.3-.8.8s.3.8.8.8h2.5V38c0 .9.7 1.6 1.6 1.6H9c0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8h16.9c0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8h2.5c.4 0 .8-.3.8-.8v-8c-.4-2-1.9-3.6-3.8-3.9zm-21.5-21c.7-.9 1.9-1 2.8-.4s1 1.9.4 2.8c-.3.3-1.1 1.2-4.1 3-.6.4-1.2.7-1.7 1 .7-2.2 1.9-5.4 2.6-6.4zm-11 2.4c-.7-.9-.5-2.1.4-2.8.4-.3.8-.4 1.2-.4.6 0 1.2.3 1.6.8.7 1 1.9 4.2 2.6 6.5-.5-.3-1.1-.6-1.7-1-3-1.9-3.8-2.7-4.1-3.1zm23.1 13.6h6.7l1.2 4.9h-7.9v-4.9zm5.6-3.2c.9 0 1.7.7 1.7 1.7h-7.3v-1.7h5.6zM13.6 42.9c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm26.4 0c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm5.6-9.6c-.5 0-.9-.4-.9-.9v-.9h1.7v1.7l-.8.1z"
  }), __jsx("path", {
    d: "M13.6 38.1c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.8-1.6-1.6-1.6zM40 38.1c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6zM19.2 35.6c0 .4.3.8.8.8h11.2c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H20c-.4.1-.8.4-.8.8zM2.4 33.2H12c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H2.4c-.4 0-.8.3-.8.8s.3.8.8.8zM12 21.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H8.8c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8.4 0 .8-.3.8-.8V25h1.7c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H9.5v-1.7l2.5.2zM19.1 23.2c0-1.5-1.2-2.8-2.8-2.8h-2c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8.4 0 .8-.3.8-.8V26h1.3l1.4 2.1c.1.2.4.3.6.3.1 0 .3 0 .4-.1.3-.2.4-.7.2-1l-1.1-1.7c.7-.6 1.2-1.4 1.2-2.4zm-4-1.3h1.3c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3h-1.3v-2.6zM24 21.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-3.2c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8H24c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-2.5V25h1.6c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-1.6v-1.7l2.5.2zM29.6 21.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-3.2c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8h3.2c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-2.5V25h.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-.9v-1.7l2.5.2z"
  }));
};

FiFreeDelivery48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var Filters16 = function Filters16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M7 14v-2h9v2H7zm7-7h2v2h-2V7zm-1.5-1c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h2zM7 2h9v2H7V2zM5.5 5h-2c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM0 2h2v2H0V2zm9 7H0V7h9v2zm-7 5H0v-2h2v2zm1.5-3h2c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5z"
  }));
};

Filters16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var FiPaymentSecurity48 = function FiPaymentSecurity48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M30 34.4H2.5c-.5 0-.9-.4-.9-.9V7.7c0-.5.4-.9.9-.9H42c.5 0 .9.4.9.9v11.2c0 .4.4.8.8.8s.8-.4.8-.8V7.7c0-1.4-1.1-2.5-2.5-2.5H2.5C1.1 5.2 0 6.3 0 7.7v25.8C0 34.8 1.1 36 2.5 36H30c.4 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8z"
  }), __jsx("path", {
    d: "M15.4 18v-5.2c0-.9-.7-1.7-1.7-1.7H6.8c-.9 0-1.7.7-1.7 1.7V18c0 .9.7 1.7 1.7 1.7h6.9c.9 0 1.7-.8 1.7-1.7zm-1.7-5.2V18s0 .1-.1.1h-3.5v-1.8h.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8h-.9v-1.8l3.6-.1zM6.8 18v-5.2s0-.1.1-.1h1.8V18H6.8zM32.2 11.1c-.8-.5-1.7-.8-2.6-.8-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7c1 0 1.8-.3 2.6-.8.8.5 1.7.8 2.6.8 2.6 0 4.7-2.1 4.7-4.7s-2.1-4.7-4.7-4.7c-1 0-1.9.3-2.6.8zM26.5 15c0-1.7 1.4-3.1 3.1-3.1.5 0 .9.1 1.4.3-.6.8-.9 1.8-.9 2.8 0 1 .3 1.9.9 2.7-.4.2-.9.3-1.4.3-1.7 0-3.1-1.3-3.1-3zm11.3 0c0 1.7-1.4 3.1-3.1 3.1-.5 0-.9-.1-1.4-.3.6-.8.9-1.7.9-2.7 0-.4-.4-.8-.8-.8s-.8.4-.8.8c0 .6-.2 1.2-.5 1.6-.3-.5-.5-1.1-.5-1.6 0-1.7 1.4-3.1 3.1-3.1 1.7-.1 3.1 1.3 3.1 3zM6 24.1c-.4 0-.8.4-.8.8s.4.8.8.8h6.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8H6zM30.9 29.2H6c-.4 0-.8.4-.8.8s.4.8.8.8h24.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8zM16.3 24.1c-.4 0-.8.4-.8.8s.4.8.8.8h6.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8h-6.9zM31.7 24.1h-5.2c-.4 0-.8.4-.8.8s.4.8.8.8h5.2c.4 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8zM46.3 30.2v-3.6c0-3.3-2.7-6-6-6s-6 2.7-6 6v3.6c-1 .3-1.7 1.3-1.7 2.4v7.7c0 1.4 1.1 2.5 2.5 2.5h10.3c1.4 0 2.5-1.1 2.5-2.5v-7.7c.1-1.1-.6-2.1-1.6-2.4zm-6-8c2.4 0 4.3 2 4.3 4.3V30H36v-3.5c0-2.3 1.9-4.3 4.3-4.3zm6.1 18.1c0 .5-.4.9-.9.9H35.2c-.5 0-.9-.4-.9-.9v-7.7c0-.5.4-.9.9-.9h10.3c.5 0 .9.4.9.9v7.7z"
  }), __jsx("path", {
    d: "M40.3 33.5c-1.2 0-2.1.9-2.1 2.1 0 .9.5 1.6 1.3 1.9v1.1c0 .4.4.8.8.8s.8-.4.8-.8v-1.1c.8-.3 1.3-1.1 1.3-1.9 0-1.2-.9-2.1-2.1-2.1zm0 1.6c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.3-.5.5-.5z"
  }));
};

FiPaymentSecurity48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var Fit = function Fit(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M12 4.4L5.5 11 1 6.5l1.4-1.4 3.1 3.1L10.6 3 12 4.4z"
  }));
};

Fit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "13"
};

var FiTag48 = function FiTag48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M48 3.3c0-.9-.3-1.7-1-2.3-.6-.6-1.4-1-2.3-1-.9 0-1.7.3-2.3 1-.3.3-.7.8-1 1.1-.3.3-.2.8.1 1.1.3.3.8.2 1.1-.1.4-.5.7-.9.9-1 .3-.3.8-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.8.5 1.2 0 .5-.2.9-.5 1.2-.3.3-1.3 1.1-2.7 2.1-.9-1.5-2.4-2.4-4.3-2.4H27.5c-1.5 0-3 .6-4.1 1.7L.7 28.6c-.4.4-.7 1.1-.7 1.7s.3 1.3.7 1.7L16 47.3c.5.5 1.1.7 1.7.7.7 0 1.3-.3 1.7-.7l22.8-22.8c1.1-1.1 1.7-2.5 1.7-4.1V9.1c0-.3 0-.7-.1-1C45.4 7 46.6 6 47 5.6c.7-.6 1-1.5 1-2.3zm-5.7 5.8v11.4c0 1.1-.4 2.2-1.2 3L18.3 46.2c-.3.3-.9.3-1.2 0L1.8 30.9c-.3-.3-.3-.9 0-1.2L24.6 6.9c.8-.8 1.8-1.2 3-1.2H39c1.3 0 2.4.7 3 1.8-.9.6-1.9 1.3-3 1.9l-.1-.1c-1.3-1.3-3.3-1.3-4.6 0s-1.3 3.3 0 4.6c.6.6 1.5 1 2.3 1 .8 0 1.7-.3 2.3-1 .9-.9 1.1-2.1.8-3.1.9-.6 1.8-1.2 2.6-1.7zm-6.6 2.8c.1.3.4.4.7.4.1 0 .2 0 .3-.1.5-.2.9-.5 1.4-.7 0 .4-.2.9-.5 1.2-.7.7-1.8.7-2.4 0-.7-.7-.7-1.8 0-2.4.3-.3.8-.5 1.2-.5.3 0 .7.1 1 .3-.4.2-.9.5-1.3.7-.4.3-.5.7-.4 1.1z"
  }), __jsx("path", {
    d: "M16.3 25.8c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2.4 2.4-3 3-2.4-2.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l5.9 5.9c.2.2.4.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-2.4-2.4 3-3 2.4 2.4c.2.2.4.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-5.7-5.9zM24.8 21.4c-1.4-1.4-3.8-1.4-5.2 0s-1.4 3.8 0 5.2l1.8 1.8c.7.7 1.7 1.1 2.6 1.1s1.9-.4 2.6-1.1c1.4-1.4 1.4-3.8 0-5.2l-1.8-1.8zm.7 5.9c-.8.8-2.2.8-3 0l-1.8-1.8c-.8-.8-.8-2.2 0-3 .4-.4 1-.6 1.5-.6s1.1.2 1.5.6l1.8 1.8c.8.8.8 2.2 0 3zM27.4 15.8l1.8-1.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-4.7 4.7c-.3.3-.3.8 0 1.1.2.2.4.2.5.2s.4-.1.5-.2l1.8-1.8 5.3 5.3c.2.2.4.2.5.2.2 0 .4-.1.5-.2.3-.3.3-.8 0-1.1l-5.1-5.3z"
  }));
};

FiTag48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var Heart20 = function Heart20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M14 3c2.2 0 4 1.8 4 4 0 4-5.2 10-8 10S2 11 2 7c0-2.2 1.8-4 4-4 1 0 1.9.4 2.7 1L10 5.2 11.3 4c.8-.6 1.7-1 2.7-1m0-2c-1.5 0-2.9.6-4 1.5C8.9 1.6 7.5 1 6 1 2.7 1 0 3.7 0 7c0 5 6 12 10 12s10-7 10-12c0-3.3-2.7-6-6-6z"
  }));
};

Heart20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Heart32 = function Heart32(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M23 4c3.9 0 7 3.1 7 7 0 6.3-11.4 15.9-14 16.9-2.6-1-14-10.6-14-16.9 0-3.9 3.1-7 7-7 2.1 0 4.1 1 5.4 2.6l1.6 2 1.6-2C18.9 5 20.9 4 23 4m0-2c-2.8 0-5.4 1.3-7 3.4C14.4 3.3 11.8 2 9 2c-5 0-9 4-9 9 0 8 14 19 16 19s16-11 16-19c0-5-4-9-9-9z"
  }));
};

Heart32.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32"
};

var LayoutGrid16 = function LayoutGrid16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15.2 16H9.8c-.4 0-.8-.4-.8-.8V9.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm0-9H9.8c-.4 0-.8-.4-.8-.8V.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm-9 9H.8c-.4 0-.8-.4-.8-.8V9.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm0-9H.8C.4 7 0 6.6 0 6.2V.8C0 .4.4 0 .8 0h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8z"
  }));
};

LayoutGrid16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var LayoutGridWithDetails16 = function LayoutGridWithDetails16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16 .8v14.4c0 .4-.4.8-.8.8H9.8c-.4 0-.8-.4-.8-.8V.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8zm-9 0v14.4c0 .4-.4.8-.8.8H.8c-.4 0-.8-.4-.8-.8V.8C0 .4.4 0 .8 0h5.4c.4 0 .8.4.8.8z"
  }));
};

LayoutGridWithDetails16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var LayoutList16 = function LayoutList16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15.2 16H.8c-.4 0-.8-.4-.8-.8V9.8c0-.4.4-.8.8-.8h14.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm0-9H.8C.4 7 0 6.6 0 6.2V.8C0 .4.4 0 .8 0h14.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8z"
  }));
};

LayoutList16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var LayoutTable16 = function LayoutTable16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15.2 16H.8c-.4 0-.8-.4-.8-.8v-2.4c0-.4.4-.8.8-.8h14.4c.4 0 .8.4.8.8v2.4c0 .4-.4.8-.8.8zm0-6H.8c-.4 0-.8-.4-.8-.8V6.8c0-.4.4-.8.8-.8h14.4c.4 0 .8.4.8.8v2.4c0 .4-.4.8-.8.8zm0-6H.8C.4 4 0 3.6 0 3.2V.8C0 .4.4 0 .8 0h14.4c.4 0 .8.4.8.8v2.4c0 .4-.4.8-.8.8z"
  }));
};

LayoutTable16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var Menu16x12 = function Menu16x12(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 7V5h16v2H0zm0-7h16v2H0V0zm12 12H0v-2h12v2z"
  }));
};

Menu16x12.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12"
};

var Menu18x14 = function Menu18x14(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 8V6h18v2H0zm0-8h18v2H0V0zm14 14H0v-2h14v2z"
  }));
};

Menu18x14.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "14"
};

var NoFit = function NoFit(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.5 0C2.9 0 0 2.9 0 6.5S2.9 13 6.5 13 13 10.1 13 6.5 10.1 0 6.5 0zm0 2c.9 0 1.7.3 2.4.7L2.7 8.9C2.3 8.2 2 7.4 2 6.5 2 4 4 2 6.5 2zm0 9c-.9 0-1.7-.3-2.4-.7l6.2-6.2c.4.7.7 1.5.7 2.4C11 9 9 11 6.5 11z"
  }));
};

NoFit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "13"
};

var Person20 = function Person20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M20 20h-2c0-4.4-3.6-8-8-8s-8 3.6-8 8H0c0-4.2 2.6-7.8 6.3-9.3C4.9 9.6 4 7.9 4 6c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.9-.9 3.6-2.3 4.7 3.7 1.5 6.3 5.1 6.3 9.3zM14 6c0-2.2-1.8-4-4-4S6 3.8 6 6s1.8 4 4 4 4-1.8 4-4z"
  }));
};

Person20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Person32 = function Person32(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16 18C9.4 18 4 23.4 4 30H2c0-6.2 4-11.5 9.6-13.3C9.4 15.3 8 12.8 8 10c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.8-1.5 5.3-3.6 6.7C26 18.5 30 23.8 30 30h-2c0-6.6-5.4-12-12-12zm6-8c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6z"
  }));
};

Person32.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32"
};

var Quickview16 = function Quickview16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M14 15h-4v-2h3v-3h2v4c0 .6-.4 1-1 1zM13 3h-3V1h4c.6 0 1 .4 1 1v4h-2V3zM6 3H3v3H1V2c0-.6.4-1 1-1h4v2zM3 13h3v2H2c-.6 0-1-.4-1-1v-4h2v3z"
  }));
};

Quickview16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var RecycleBin16 = function RecycleBin16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M2 4V2h3V1h6v1h3v2H2zm11 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5h10v8z"
  }));
};

RecycleBin16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var Search20 = function Search20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M19.2 17.8s-.2.5-.5.8c-.4.4-.9.6-.9.6s-.9.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9-1 .8-2.4 1.3-3.9 1.3-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7c0 1.5-.5 2.9-1.3 4 1.1.8 2.5 2 4 3.1 2.3 1.7 1.5 2.7 1.5 2.7zM8 3C5.2 3 3 5.2 3 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"
  }));
};

Search20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Wishlist16 = function Wishlist16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M13.9 8.4l-5.4 5.4c-.3.3-.7.3-1 0L2.1 8.4C.6 6.9.6 4.6 2.1 3.1 2.8 2.4 3.8 2 4.8 2s1.9.4 2.6 1.1l.6.6.6-.6c.7-.7 1.7-1.1 2.7-1.1 1 0 1.9.4 2.6 1.1 1.5 1.5 1.5 3.8 0 5.3z"
  }));
};

Wishlist16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var ZoomIn24 = function ZoomIn24(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15 18c-2 0-3.8-.6-5.2-1.7-1 1.3-2.1 2.8-3.5 4.6-2.2 2.8-3.4 1.9-3.4 1.9s-.6-.3-1.1-.7c-.4-.4-.7-1-.7-1S.2 19.9 3 17.8c1.8-1.4 3.3-2.5 4.6-3.5C6.6 12.8 6 11 6 9c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1 11h-2v-3h-3V8h3V5h2v3h3v2h-3v3z"
  }));
};

ZoomIn24.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
};
const ArrowDown9x6Svg = ArrowDown9x6;
const ArrowDownSm7x5Svg = ArrowDownSm7x5;
const ArrowRoundedDown9x6Svg = ArrowRoundedDown9x6;
const ArrowRoundedDown12x7Svg = ArrowRoundedDown12x7;
const ArrowRoundedLeft6x9Svg = ArrowRoundedLeft6x9;
const ArrowRoundedLeft7x11Svg = ArrowRoundedLeft7x11;
const ArrowRoundedRight6x9Svg = ArrowRoundedRight6x9;
const ArrowRoundedRight7x11Svg = ArrowRoundedRight7x11;
const Car20Svg = Car20;
const Cart20Svg = Cart20;
const Cart32Svg = Cart32;
const Check12x9Svg = Check12x9;
const Check100Svg = Check100;
const Compare16Svg = Compare16;
const Cross9LightSvg = Cross9Light;
const Cross10Svg = Cross10;
const Cross12Svg = Cross12;
const Cross20Svg = Cross20;
const Fi24Hours48Svg = Fi24Hours48;
const FiFreeDelivery48Svg = FiFreeDelivery48;
const Filters16Svg = Filters16;
const FiPaymentSecurity48Svg = FiPaymentSecurity48;
const FiTag48Svg = FiTag48;
const FitSvg = Fit;
const Heart20Svg = Heart20;
const Heart32Svg = Heart32;
const LayoutGrid16Svg = LayoutGrid16;
const LayoutGridWithDetails16Svg = LayoutGridWithDetails16;
const LayoutList16Svg = LayoutList16;
const LayoutTable16Svg = LayoutTable16;
const Menu16x12Svg = Menu16x12;
const Menu18x14Svg = Menu18x14;
const NoFitSvg = NoFit;
const Person20Svg = Person20;
const Person32Svg = Person32;
const Quickview16Svg = Quickview16;
const RecycleBin16Svg = RecycleBin16;
const Search20Svg = Search20;
const Wishlist16Svg = Wishlist16;
const ZoomIn24Svg = ZoomIn24;

/***/ }),

/***/ "P5m/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party



function PageTitle(props) {
  const {
    children
  } = props;
  const title = children || '';
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title, title ? ' — ' : '', "Cars parts"));
}

/* harmony default export */ __webpack_exports__["a"] = (PageTitle);

/***/ }),

/***/ "PXqZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party



function Decor(props) {
  const {
    type,
    className
  } = props;
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('decor', `decor--type--${type}`, className);
  return __jsx("div", {
    className: rootClasses
  }, __jsx("div", {
    className: "decor__body"
  }, __jsx("div", {
    className: "decor__start"
  }), __jsx("div", {
    className: "decor__end"
  }), __jsx("div", {
    className: "decor__center"
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (Decor);

/***/ }),

/***/ "Pbem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOP_HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOP_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_FETCH_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOP_FETCH_PRODUCTS_LIST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHOP_FETCH_PRODUCTS_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SHOP_SET_OPTION_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOP_SET_FILTER_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOP_RESET_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOP_RESET_FILTER; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_shop_shopTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+L6p");
// third-party
 // application


const SHOP_HYDRATE = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"];
const SHOP_INIT = 'SHOP_INIT';
const SHOP_FETCH_CATEGORY_SUCCESS = 'SHOP_FETCH_CATEGORY_SUCCESS';
const SHOP_FETCH_PRODUCTS_LIST_START = 'SHOP_FETCH_PRODUCTS_LIST_START';
const SHOP_FETCH_PRODUCTS_LIST_SUCCESS = 'SHOP_FETCH_PRODUCTS_LIST_SUCCESS';
const SHOP_SET_OPTION_VALUE = 'SHOP_SET_OPTION_VALUE';
const SHOP_SET_FILTER_VALUE = 'SHOP_SET_FILTER_VALUE';
const SHOP_RESET_FILTERS = 'SHOP_RESET_FILTERS';
const SHOP_RESET_FILTER = 'SHOP_RESET_FILTER';

/***/ }),

/***/ "QmLQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "UCyh":
/***/ (function(module, exports) {



/***/ }),

/***/ "UL12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return globalIntl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party


let intlRef = null;
function globalIntl() {
  return intlRef;
}

function GlobalIntlProvider(props) {
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  const {
    children
  } = props;
  intlRef = intl;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
}

/* harmony default export */ __webpack_exports__["a"] = (GlobalIntlProvider);

/***/ }),

/***/ "UvXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCurrency; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCurrencyChange; });

// EXTERNAL MODULE: ./src/store/currency/currencyReducer.ts
var currencyReducer = __webpack_require__("FEOJ");

// EXTERNAL MODULE: ./src/store/currency/currencyActionTypes.ts
var currencyActionTypes = __webpack_require__("Bi1y");

// CONCATENATED MODULE: ./src/store/currency/currencyActions.ts
/* eslint-disable import/prefer-default-export */
// application

function currencyChange(currency) {
  return {
    type: currencyActionTypes["a" /* CURRENCY_CHANGE */],
    currency
  };
}
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/store/currency/currencyHooks.ts
// application



const useCurrency = () => Object(hooks["b" /* useAppSelector */])(state => state[currencyReducer["a" /* CURRENCY_NAMESPACE */]].current);
const useCurrencyChange = () => Object(hooks["a" /* useAppAction */])(currencyChange);

/***/ }),

/***/ "WQ/t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GARAGE_SET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GARAGE_SET_CURRENT; });
// application
const GARAGE_SET_ITEMS = 'GARAGE_SET_ITEMS';
const GARAGE_SET_CURRENT = 'GARAGE_SET_CURRENT';

/***/ }),

/***/ "Wjoj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOBILE_MENU_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_MENU_CLOSE; });
const MOBILE_MENU_OPEN = 'MOBILE_MENU_OPEN';
const MOBILE_MENU_CLOSE = 'MOBILE_MENU_CLOSE';

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YD2w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_SET_CURRENT; });
// application
const USER_SET_CURRENT = 'USER_SET_CURRENT';

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YtuU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party



function InputNumber(props) {
  const {
    size,
    className,
    onChange,
    inputRef
  } = props,
        otherProps = _objectWithoutProperties(props, ["size", "className", "onChange", "inputRef"]);

  const {
    value = '',
    step = 1,
    min = null,
    max = null
  } = props;

  const change = (direction, prevValue = value) => {
    // noinspection SuspiciousTypeOfGuard
    let newValue = typeof prevValue === 'string' ? parseFloat(prevValue) : prevValue;
    newValue = (Number.isNaN(newValue) ? 0 : newValue) + step * direction;

    if (max !== null) {
      newValue = Math.min(max, newValue);
    }

    if (min !== null) {
      newValue = Math.max(min, newValue);
    }

    if (newValue !== prevValue && onChange) {
      onChange(newValue);
    }

    return newValue;
  };

  const changeByTimer = direction => {
    let prevValue = value;
    let interval;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        prevValue = change(direction, prevValue);
      }, 50);
    }, 300);

    const documentMouseUp = () => {
      clearTimeout(timer);
      clearInterval(interval);
      document.removeEventListener('mouseup', documentMouseUp, false);
    };

    document.addEventListener('mouseup', documentMouseUp, false);
  };

  const handleAddMouseDown = () => {
    change(1);
    changeByTimer(1);
  };

  const handleSubMouseDown = () => {
    change(-1);
    changeByTimer(-1);
  };

  const handleChange = event => {
    if (onChange) {
      if (event.target.value.trim() === '') {
        onChange('');
      } else {
        const value = parseFloat(event.target.value);
        onChange(Number.isNaN(value) ? min || 0 : value);
      }
    }
  };

  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('input-number', className);
  const formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', 'input-number__input', {
    'form-control-sm': size === 'sm',
    'form-control-lg': size === 'lg'
  });
  return __jsx("div", {
    className: classes
  }, __jsx("input", _extends({
    className: formControlClasses,
    type: "number",
    onChange: handleChange,
    ref: inputRef
  }, otherProps)), __jsx("div", {
    className: "input-number__add",
    onMouseDown: handleAddMouseDown
  }), __jsx("div", {
    className: "input-number__sub",
    onMouseDown: handleSubMouseDown
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (InputNumber);

/***/ }),

/***/ "ZHIE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WISHLIST_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WISHLIST_REMOVE_ITEM; });
// application
const WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM';
const WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM';

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "Zlw4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAppAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useIsUnmountedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
// react
 // third-party

 // application

function useAppAction(action) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...args) => dispatch(action(...args)), []);
}
function useAppSelector(selector) {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(selector);
}
function useMedia(query) {
  if (true) {
    return false;
  }

  const media = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => window.matchMedia(query), [query]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(media.matches);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onChangeMedia = () => {
      setState(media.matches);
    };

    if (media.addEventListener) {
      media.addEventListener('change', onChangeMedia);
    } else {
      // noinspection JSDeprecatedSymbols
      media.addListener(onChangeMedia);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', onChangeMedia);
      } else {
        // noinspection JSDeprecatedSymbols
        media.removeListener(onChangeMedia);
      }
    };
  }, [media]);
  return state;
}
function useAsyncAction(action, deps = []) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const run = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (...args) => {
    if (loading) {
      return;
    }

    setLoading(true);
    action(...args).then(() => {
      setLoading(false);
    });
  }, [loading, setLoading, ...deps]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [run, loading], [run, loading]);
}
function useIsUnmountedRef() {
  const isUnmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isUnmountedRef.current = false;
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);
  return isUnmountedRef;
}

/***/ }),

/***/ "Zrnz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCart; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCartAddItem; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useCartRemoveItem; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ useCartUpdateQuantities; });

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./src/services/i18n/global-intl.tsx
var global_intl = __webpack_require__("UL12");

// EXTERNAL MODULE: ./src/store/cart/cartActionTypes.ts
var cartActionTypes = __webpack_require__("AdQK");

// CONCATENATED MODULE: ./src/store/cart/cartActions.ts
// third-party
 // application



function cartAddItemSuccess(product, options = [], quantity = 1) {
  var _globalIntl;

  external_react_toastify_["toast"].success((_globalIntl = Object(global_intl["b" /* globalIntl */])()) === null || _globalIntl === void 0 ? void 0 : _globalIntl.formatMessage({
    id: 'TEXT_TOAST_PRODUCT_ADDED_TO_CART'
  }, {
    productName: product.name
  }));
  return {
    type: cartActionTypes["a" /* CART_ADD_ITEM */],
    product,
    options,
    quantity
  };
}
function cartRemoveItemSuccess(itemId) {
  return {
    type: cartActionTypes["b" /* CART_REMOVE_ITEM */],
    itemId
  };
}
function cartUpdateQuantitiesSuccess(quantities) {
  return {
    type: cartActionTypes["c" /* CART_UPDATE_QUANTITIES */],
    quantities
  };
}
function cartAddItem(product, options = [], quantity = 1) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(cartAddItemSuccess(product, options, quantity));
      resolve();
    }, 250);
  });
}
function cartRemoveItem(itemId) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(cartRemoveItemSuccess(itemId));
      resolve();
    }, 250);
  });
}
function cartUpdateQuantities(quantities) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(cartUpdateQuantitiesSuccess(quantities));
      resolve();
    }, 250);
  });
}
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/store/cart/cartHooks.ts
// application


const useCart = () => Object(hooks["b" /* useAppSelector */])(state => state.cart);
const useCartAddItem = () => Object(hooks["a" /* useAppAction */])(cartAddItem);
const useCartRemoveItem = () => Object(hooks["a" /* useAppAction */])(cartRemoveItem);
const useCartUpdateQuantities = () => Object(hooks["a" /* useAppAction */])(cartUpdateQuantities);

/***/ }),

/***/ "a61X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useWishlist; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useWishlistAddItem; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useWishlistRemoveItem; });

// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// EXTERNAL MODULE: ./src/store/wishlist/wishlistReducer.ts
var wishlistReducer = __webpack_require__("dZVx");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./src/services/i18n/global-intl.tsx
var global_intl = __webpack_require__("UL12");

// EXTERNAL MODULE: ./src/store/wishlist/wishlistActionTypes.ts
var wishlistActionTypes = __webpack_require__("ZHIE");

// CONCATENATED MODULE: ./src/store/wishlist/wishlistActions.ts
// third-party
 // application



function wishlistAddItemSuccess(product) {
  var _globalIntl;

  external_react_toastify_["toast"].success((_globalIntl = Object(global_intl["b" /* globalIntl */])()) === null || _globalIntl === void 0 ? void 0 : _globalIntl.formatMessage({
    id: 'TEXT_TOAST_PRODUCT_ADDED_TO_WISHLIST'
  }, {
    productName: product.name
  }));
  return {
    type: wishlistActionTypes["a" /* WISHLIST_ADD_ITEM */],
    product
  };
}
function wishlistRemoveItemSuccess(productId) {
  return {
    type: wishlistActionTypes["b" /* WISHLIST_REMOVE_ITEM */],
    productId
  };
}
function wishlistAddItem(product) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(wishlistAddItemSuccess(product));
      resolve();
    }, 250);
  });
}
function wishlistRemoveItem(productId) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(wishlistRemoveItemSuccess(productId));
      resolve();
    }, 250);
  });
}
// CONCATENATED MODULE: ./src/store/wishlist/wishlistHooks.ts
// application



const useWishlist = () => Object(hooks["b" /* useAppSelector */])(state => state[wishlistReducer["a" /* WISHLIST_NAMESPACE */]]);
const useWishlistAddItem = () => Object(hooks["a" /* useAppAction */])(wishlistAddItem);
const useWishlistRemoveItem = () => Object(hooks["a" /* useAppAction */])(wishlistRemoveItem);

/***/ }),

/***/ "a920":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hexToRgb */
/* unused harmony export luminance */
/* unused harmony export contrast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorType; });
/**
 * https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
function hexToRgb(hex) {
  if (!/^#(([A-Fa-f0-9]{3}){1,2})$/.test(hex)) {
    throw Error('Invalid color');
  }

  const color = hex.substr(1);
  let rgb;

  if (color.length === 3) {
    const mr = color.match(/./g);

    if (!mr) {
      throw Error('Invalid color');
    }

    rgb = mr.map(x => x + x);
  } else {
    const mr = color.match(/.{2}/g);

    if (!mr) {
      throw Error('Invalid color');
    }

    rgb = mr;
  }

  return rgb.map(x => parseInt(x, 16));
}
function luminance(color) {
  let rgb = hexToRgb(color);
  rgb = rgb.map(x => x / 255).map(x => {
    if (x <= 0.03928) {
      return x / 12.92;
    }

    return ((x + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
function contrast(color1, color2) {
  const l1 = luminance(color1);
  const l2 = luminance(color2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
const cache = {};
function colorType(color) {
  if (color in cache) {
    return cache[color];
  }

  const whiteContras = contrast(color, '#fff');
  const blackContras = contrast(color, '#000');
  let result;

  if (whiteContras === 1 && blackContras === 21) {
    result = 'white';
  } else if (whiteContras === 21 && blackContras === 1) {
    result = 'black';
  } else if (whiteContras >= 3 && blackContras < 10) {
    result = 'dark';
  } else {
    result = 'light';
  }

  cache[color] = result;
  return result;
}

/***/ }),

/***/ "aA6i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useGlobalMousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDeferredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useProductTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useProductColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDetachableForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party

function useGlobalMousedown(callback, deps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(callback, deps || []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('mousedown', memoCallback);
    return () => document.removeEventListener('mousedown', memoCallback);
  }, [memoCallback]);
}
function useDeferredData(source, defaultData, initialData, deps = []) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => ({
    isLoading: initialData === undefined,
    data: initialData || defaultData
  }));
  const memoizedSource = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(source, deps);
  const skipNextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initialData !== undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (skipNextRef.current) {
      skipNextRef.current = false;
      return () => {};
    }

    let canceled = false;
    setState(curState => {
      if (!curState.isLoading) {
        return _objectSpread(_objectSpread({}, curState), {}, {
          isLoading: true
        });
      }

      return curState;
    });
    memoizedSource().then(data => {
      if (canceled) {
        return;
      }

      setState(() => ({
        isLoading: false,
        data
      }));
    });
    return () => {
      canceled = true;
    };
  }, [memoizedSource]);
  return state;
}
function useProductTabs(tabs, productsSource, initialData) {
  const {
    0: currentTabId,
    1: setCurrentTabId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const memoizedTabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => tabs.map(tab => _objectSpread(_objectSpread({}, tab), {}, {
    current: currentTabId === tab.id
  })), [tabs, currentTabId]);
  const currentTab = memoizedTabs.find(x => x.current);
  const products = useDeferredData(() => currentTab ? productsSource(currentTab) : Promise.resolve([]), [], initialData, [currentTab]);
  const handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(tab => {
    setCurrentTabId(tab.id);
  }, [setCurrentTabId]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _objectSpread({
    tabs: memoizedTabs,
    handleTabChange
  }, products), [memoizedTabs, handleTabChange, products]);
}
function useProductColumns(columns) {
  const products = useDeferredData(() => Promise.all(columns.map(column => column.source())), [], undefined, [columns]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => columns.map((column, index) => _objectSpread(_objectSpread({}, column), {}, {
    products: products.data[index] || []
  })), [columns, products]);
}
function useDetachableForm(formMethods, detached) {
  const {
    register: originalRegister,
    unregister,
    trigger
  } = formMethods;
  const fieldNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (detached) {
      unregister(fieldNamesRef.current);
      fieldNamesRef.current = [];
      trigger([]).then();
    }
  }, [detached, unregister, trigger]);
  return (rules = {}) => ref => {
    if (!detached) {
      if (ref && !fieldNamesRef.current.includes(ref.name)) {
        fieldNamesRef.current.push(ref.name);
      }

      originalRegister(rules)(ref);
    }
  };
}

/***/ }),

/***/ "ayGW":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d4Ds":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_currency_currencyHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UvXe");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application



function CurrencyFormat(props) {
  const {
    value,
    currency: propCurrency
  } = props;
  const siteCurrency = Object(_store_currency_currencyHooks__WEBPACK_IMPORTED_MODULE_1__[/* useCurrency */ "a"])();
  const currency = propCurrency || siteCurrency;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currency.symbol, (value * currency.rate).toFixed(2));
}

/* harmony default export */ __webpack_exports__["a"] = (CurrencyFormat);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dZVx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WISHLIST_NAMESPACE; });
/* harmony import */ var _store_wishlist_wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZHIE");
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0QaZ");
// application



function addItem(state, product) {
  const itemIndex = state.items.findIndex(x => x.id === product.id);

  if (itemIndex === -1) {
    return {
      items: [...state.items, JSON.parse(JSON.stringify(product))]
    };
  }

  return state;
}

function removeItem(state, productId) {
  return {
    items: state.items.filter(x => x.id !== productId)
  };
}

const initialState = {
  items: []
};
const WISHLIST_NAMESPACE = 'wishlist';

function wishlistBaseReducer(state = initialState, action) {
  switch (action.type) {
    case _store_wishlist_wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST_ADD_ITEM */ "a"]:
      return addItem(state, action.product);

    case _store_wishlist_wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST_REMOVE_ITEM */ "b"]:
      return removeItem(state, action.productId);

    default:
      return state;
  }
}

const wishlistReducer = Object(_store_client__WEBPACK_IMPORTED_MODULE_1__[/* withClientState */ "b"])(wishlistBaseReducer, WISHLIST_NAMESPACE);
/* harmony default export */ __webpack_exports__["b"] = (wishlistReducer);

/***/ }),

/***/ "eJ0J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useUser; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useUserSignIn; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ useUserSignUp; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ useUserSignOut; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useUserEditProfile; });

// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// EXTERNAL MODULE: ./src/store/user/userReducer.ts
var userReducer = __webpack_require__("C+jY");

// EXTERNAL MODULE: ./src/api/index.ts + 39 modules
var api = __webpack_require__("efbE");

// EXTERNAL MODULE: ./src/store/user/userActionTypes.ts
var userActionTypes = __webpack_require__("YD2w");

// CONCATENATED MODULE: ./src/store/user/userAction.ts
// application


function userSetCurrent(user) {
  return {
    type: userActionTypes["a" /* USER_SET_CURRENT */],
    payload: user
  };
}
function userSignIn(email, password) {
  return dispatch => api["a" /* accountApi */].signIn(email, password).then(user => {
    dispatch(userSetCurrent(user));
  });
}
function userSignUp(email, password) {
  return dispatch => api["a" /* accountApi */].signUp(email, password).then(user => {
    dispatch(userSetCurrent(user));
  });
}
function userSignOut() {
  return dispatch => api["a" /* accountApi */].signOut().then(() => {
    dispatch(userSetCurrent(null));
  });
}
function userEditProfile(data) {
  return dispatch => api["a" /* accountApi */].editProfile(data).then(user => {
    dispatch(userSetCurrent(user));
  });
}
// CONCATENATED MODULE: ./src/store/user/userHooks.ts
// application



const useUser = () => Object(hooks["b" /* useAppSelector */])(state => state[userReducer["a" /* USER_NAMESPACE */]].current);
const useUserSignIn = () => Object(hooks["a" /* useAppAction */])(userSignIn);
const useUserSignUp = () => Object(hooks["a" /* useAppAction */])(userSignUp);
const useUserSignOut = () => Object(hooks["a" /* useAppAction */])(userSignOut);
const useUserEditProfile = () => Object(hooks["a" /* useAppAction */])(userEditProfile);

/***/ }),

/***/ "eN2N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useCurrentVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentVehicleGarageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CurrentVehicleScopeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1pP5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application


const CurrentVehicleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext([null, () => {}]);
function useCurrentVehicle() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CurrentVehicleContext);
}
function CurrentVehicleGarageProvider(props) {
  const {
    children
  } = props;
  const vehicle = Object(_store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_1__[/* useGarageCurrent */ "b"])();
  const garageSetCurrent = Object(_store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_1__[/* useGarageSetCurrent */ "d"])();
  const setVehicle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(vehicle => {
    garageSetCurrent((vehicle === null || vehicle === void 0 ? void 0 : vehicle.id) || null);
  }, [garageSetCurrent]);
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [vehicle, setVehicle], [vehicle, setVehicle]);
  return __jsx(CurrentVehicleContext.Provider, {
    value: value
  }, children);
}
function CurrentVehicleScopeProvider(props) {
  const {
    children
  } = props;
  const [initialVehicle] = useCurrentVehicle();
  const {
    0: vehicle,
    1: setVehicle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVehicle);
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [vehicle, setVehicle], [vehicle, setVehicle]);
  return __jsx(CurrentVehicleContext.Provider, {
    value: value
  }, children);
}

/***/ }),

/***/ "efbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ accountApi; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ blogApi; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ countriesApi; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ shopApi; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ vehicleApi; });

// CONCATENATED MODULE: ./src/api/base/account.api.ts
// application
class AccountApi {}
// CONCATENATED MODULE: ./src/api/base/blog.api.ts
// application
class BlogApi {}
// CONCATENATED MODULE: ./src/api/base/countries.api.ts
/* eslint-disable import/prefer-default-export */
// application
class CountriesApi {}
// CONCATENATED MODULE: ./src/api/base/shop.api.ts
// application
class ShopApi {}
// CONCATENATED MODULE: ./src/api/base/vehicle.api.ts
/* eslint-disable import/prefer-default-export */
// application
class VehicleApi {}
// CONCATENATED MODULE: ./src/api/base/index.ts





// CONCATENATED MODULE: ./src/fake-server/utils.ts
function makeIdGenerator() {
  let lastId = 0;
  return (() => () => {
    lastId += 1;
    return lastId;
  })();
}
function delayResponse(input, time = 500) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  }).then(() => input instanceof Promise ? input : input());
}
function error(message) {
  return Promise.reject(new Error(message));
}
function clone(data) {
  return JSON.parse(JSON.stringify(data));
}
function nameToSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/, '-').replace(/-+/, '-');
}
// CONCATENATED MODULE: ./src/fake-server/endpoints/account.ts
// application

function accountSignIn(email, password) {
  if (email === 'red-parts@example.com' && password === '123456') {
    const user = {
      email: 'red-parts@example.com',
      phone: '38 972 588-42-36',
      firstName: 'Ryan',
      lastName: 'Ford',
      avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88'
    };
    return delayResponse(Promise.resolve(user));
  }

  return delayResponse(() => error('AUTH_WRONG_PASSWORD'));
}
function accountSignUp(email, password) {
  if (!/^.+@.+$/.test(email)) {
    return delayResponse(() => error('AUTH_INVALID_EMAIL'));
  }

  if (email === 'red-parts@example.com') {
    return delayResponse(() => error('AUTH_EMAIL_ALREADY_IN_USE'));
  }

  if (password.length < 6) {
    return delayResponse(() => error('AUTH_WEAK_PASSWORD'));
  }

  const user = {
    email,
    phone: '38 972 588-42-36',
    firstName: 'Ryan',
    lastName: 'Ford',
    avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88'
  };
  return delayResponse(Promise.resolve(user));
}
function accountSignOut() {
  return Promise.resolve();
}
function accountEditProfile(data) {
  const user = {
    email: data.email,
    phone: data.phone,
    firstName: data.firstName,
    lastName: data.lastName,
    avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88'
  };
  return delayResponse(Promise.resolve(user));
}
function accountChangePassword(oldPassword, newPassword) {
  if (newPassword.length < 6) {
    return delayResponse(() => error('AUTH_WEAK_PASSWORD'));
  }

  return delayResponse(Promise.resolve());
}
// CONCATENATED MODULE: ./src/fake-server/database/addresses.ts
// application

const getNextAddressId = makeIdGenerator();
const addresses = [{
  id: getNextAddressId(),
  firstName: 'Ryan',
  lastName: 'Ford',
  company: 'Stroyka',
  country: 'RAND',
  address1: 'ul. Varshavskaya, 15-2-178',
  address2: '',
  city: 'Moscow',
  state: 'Moscow',
  postcode: '115302',
  email: 'stroyka@example.com',
  phone: '38 972 588-42-36',
  default: true
}, {
  id: getNextAddressId(),
  firstName: 'Jupiter',
  lastName: 'Saturnov',
  company: 'Stroyka',
  country: 'LAND',
  address1: 'Sun Orbit, 43.3241-85.239',
  address2: '',
  city: 'MarsGrad',
  state: 'MarsGrad',
  postcode: '4b4f53',
  email: 'jupiter@example.com',
  phone: 'ZX 971 972-57-26',
  default: false
}];
// CONCATENATED MODULE: ./src/fake-server/endpoints/addresses.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application


function getDefaultAddress() {
  return Promise.resolve(clone(addresses.find(x => x.default) || null));
}
function getAddress(addressId) {
  return Promise.resolve(clone(addresses.find(x => x.id === addressId) || null));
}
function getAddresses() {
  return Promise.resolve(clone(addresses));
}
function addAddress(data) {
  const address = _objectSpread({
    id: getNextAddressId(),
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postcode: '',
    email: '',
    phone: '',
    default: false
  }, data);

  if (addresses.length < 1) {
    address.default = true;
  }

  if (address.default) {
    for (let i = 0; i < addresses.length; i += 1) {
      addresses[i].default = false;
    }
  }

  addresses.push(address);
  return delayResponse(Promise.resolve(address));
} // noinspection DuplicatedCode

function editAddress(addressId, data) {
  const address = addresses.find(x => x.id === addressId);

  if (!address) {
    throw new Error('Address not found');
  }

  address.firstName = data.firstName;
  address.lastName = data.lastName;
  address.company = data.company;
  address.country = data.country;
  address.address1 = data.address1;
  address.address2 = data.address2;
  address.city = data.city;
  address.state = data.state;
  address.postcode = data.postcode;
  address.email = data.email;
  address.phone = data.phone;
  address.default = data.default;

  if (address.default) {
    for (let i = 0; i < addresses.length; i += 1) {
      addresses[i].default = addresses[i].id === addressId;
    }
  }

  return delayResponse(Promise.resolve(address));
}
function delAddress(addressId) {
  const index = addresses.findIndex(x => x.id === addressId);

  if (index !== -1) {
    const address = addresses.splice(index, 1)[0];

    if (address.default && addresses.length > 0) {
      addresses[0].default = true;
    }
  }

  return delayResponse(Promise.resolve());
}
// CONCATENATED MODULE: ./src/fake-server/database/categories.ts
// application

const getNextId = makeIdGenerator();

function makeShopCategory(def, parent) {
  return {
    id: getNextId(),
    type: 'shop',
    name: def.name,
    slug: def.slug,
    image: def.image || null,
    items: def.items,
    parent,
    children: [],
    layout: def.layout ? def.layout : 'products',
    customFields: {}
  };
}

function makeBlogCategory(def, parent) {
  return {
    id: getNextId(),
    type: 'blog',
    name: def.name,
    slug: def.slug,
    image: def.image || null,
    items: def.items,
    parent,
    children: [],
    customFields: {}
  };
}

function makeCategories(makeFn, defs, parent = null) {
  const categories = [];
  defs.forEach(def => {
    const category = makeFn(def, parent);

    if (def.children) {
      category.children = makeCategories(makeFn, def.children, category);
    }

    categories.push(category);
  });
  return categories;
}

function flatTree(categories) {
  let result = [];
  categories.forEach(category => {
    result = [...result, category, ...flatTree(category.children)];
  });
  return result;
}

const shopCategoriesDef = [{
  name: 'Headlights & Lighting',
  nameA: '',
  slug: 'headlights-lighting',
  image: '/images/categories/category-1.jpg',
  items: 131,
  children: [{
    name: 'Turn Signals',
    nameA: 'إشارات الانعطاف',
    slug: 'turn-signals'
  }, {
    name: 'Fog Lights',
    nameA: 'مصابيح الضباب',
    slug: 'fog-lights'
  }, {
    name: 'Headlights',
    nameA: 'المصباح',
    slug: 'headlights'
  }, {
    name: 'Switches & Relays',
    nameA: 'مفاتيح ومرحلات',
    slug: 'switches-relays'
  }, {
    name: 'Tail Lights',
    nameA: 'إضاءة خلفية',
    slug: 'tail-lights'
  }, {
    name: 'Corner Lights',
    nameA: 'أضواء الزاوية',
    slug: 'corner-lights'
  }, {
    name: 'Off-Road Lighting',
    nameA: 'إضاءة الطرق الوعرة',
    slug: 'off-road-lighting'
  }, {
    name: 'Lighting Accessories',
    nameA: 'ملحقات الإضاءة',
    slug: 'lighting-accessories'
  }]
}, {
  name: 'Fuel System',
  nameA: '',
  slug: 'fuel-system',
  image: '/images/categories/category-2.jpg',
  items: 356,
  children: [{
    name: 'Fuel Pumps',
    nameA: 'مضخات الوقود',
    slug: 'fuel-pumps'
  }, {
    name: 'Motor Oil',
    nameA: 'زيت المحرك',
    slug: 'motor-oil'
  }, {
    name: 'Gas Caps',
    nameA: 'أغطية الغاز',
    slug: 'gas-caps'
  }, {
    name: 'Fuel Injector',
    nameA: 'حاقن الوقود',
    slug: 'fuel-injector'
  }, {
    name: 'Control Motor',
    nameA: 'محرك تحكم',
    slug: 'control-motor'
  }]
}, {
  name: 'Body Parts',
  nameA: '',
  slug: 'body-parts',
  image: '/images/categories/category-3.jpg',
  items: 54,
  children: [{
    name: 'Bumpers',
    nameA: 'مصدات',
    slug: 'bumpers'
  }, {
    name: 'Hoods',
    nameA: 'اغطية',
    slug: 'hoods'
  }, {
    name: 'Grilles',
    nameA: 'شبكات',
    slug: 'grilles'
  }, {
    name: 'Fog Lights',
    nameA: 'مصابيح الضباب',
    slug: 'fog-lights'
  }, {
    name: 'Door Handles',
    nameA: 'مقابض الباب',
    slug: 'door-handles'
  }]
}, {
  name: 'Interior Parts',
  nameA: '',
  slug: 'interior-parts',
  image: '/images/categories/category-4.jpg',
  items: 274,
  children: [{
    name: 'Dashboards',
    nameA: 'لوحات القيادة',
    slug: 'dashboards'
  }, {
    name: 'Seat Covers',
    nameA: 'أغطية المقاعد',
    slug: 'seat-covers'
  }, {
    name: 'Floor Mats',
    nameA: 'سجاد الأرضية',
    slug: 'floor-mats'
  }, {
    name: 'Sun Shades',
    nameA: 'ظلال الشمس',
    slug: 'sun-shades'
  }, {
    name: 'Visors',
    nameA: 'أقنعة',
    slug: 'visors'
  }, {
    name: 'Car Covers',
    nameA: 'اغطية السيارات',
    slug: 'car-covers'
  }, {
    name: 'Accessories',
    nameA: 'مكملات',
    slug: 'interior-parts-accessories'
  }]
}, {
  name: 'Tires & Wheels',
  nameA: '',
  slug: 'tires-wheels',
  image: '/images/categories/category-5.jpg',
  items: 508,
  children: [{
    name: 'Wheel Covers',
    nameA: 'اغطية الاطارات',
    slug: 'wheel-covers'
  }, {
    name: 'Brake Kits',
    nameA: 'أطقم الفرامل',
    slug: 'brake-kits'
  }, {
    name: 'Tire Chains',
    nameA: 'سلاسل الاطارات',
    slug: 'tire-chains'
  }, {
    name: 'Wheel disks',
    nameA: 'أقراص العجلات',
    slug: 'wheel-disks'
  }, {
    name: 'Tires',
    nameA: 'الإطارات',
    slug: 'tires'
  }, {
    name: 'Sensors',
    nameA: 'مجسات',
    slug: 'sensors'
  }, {
    name: 'Accessories',
    nameA: 'مكملات',
    slug: 'tires-wheels-accessories'
  }]
}, {
  name: 'Engine & Drivetrain',
  nameA: '',
  slug: 'engine-drivetrain',
  image: '/images/categories/category-6.jpg',
  items: 95,
  children: [{
    name: 'Timing Belts',
    nameA: 'أحزمة التوقيت',
    slug: 'timing-belts'
  }, {
    name: 'Spark Plugs',
    nameA: 'شمعات الإشعال',
    slug: 'spark-plugs'
  }, {
    name: 'Oil Pans',
    nameA: 'أحواض الزيت',
    slug: 'oil-pans'
  }, {
    name: 'Engine Gaskets',
    nameA: 'جوانات المحرك',
    slug: 'engine-gaskets'
  }, {
    name: 'Oil Filters',
    nameA: 'فلاتر الزيت',
    slug: 'oil-filters'
  }, {
    name: 'Engine Mounts',
    nameA: 'قوة المحرك تزداد',
    slug: 'engine-mounts'
  }, {
    name: 'Accessories',
    nameA: 'مكملات',
    slug: 'engine-drivetrain-accessories'
  }]
}, {
  name: 'Oils & Lubricants',
  nameA: 'زيوت وزيوت تشحيم',
  slug: 'oils-lubricants',
  image: '/images/categories/category-7.jpg',
  items: 179
}, {
  name: 'Tools & Garage',
  nameA: 'أدوات وجراج',
  slug: 'tools-garage',
  image: '/images/categories/category-8.jpg',
  items: 106
}];
const blogCategoriesDef = [{
  name: 'Latest News',
  nameA: 'أحدث الأخبار',
  slug: 'latest-news'
}, {
  name: 'Special Offers',
  nameA: 'عروض خاصة',
  slug: 'special-offers',
  children: [{
    name: 'Spring Sales',
    nameA: 'مبيعات الربيع',
    slug: 'spring-sales'
  }, {
    name: 'Summer Sales',
    nameA: 'مبيعات الصيف',
    slug: 'summer-sales'
  }, {
    name: 'Autumn Sales',
    nameA: 'مبيعات الخريف',
    slug: 'autumn-sales'
  }, {
    name: 'Christmas Sales',
    nameA: 'مبيعات عيد الميلاد',
    slug: 'christmas-sales'
  }, {
    name: 'Other Sales',
    nameA: 'مبيعات أخرى',
    slug: 'other-sales'
  }]
}, {
  name: 'New Arrivals',
  nameA: 'القادمون الجدد',
  slug: 'new-arrivals'
}, {
  name: 'Reviews',
  nameA: 'المراجعات',
  slug: 'reviews'
}, {
  name: 'Wheels & Tires',
  nameA: 'العجلات والإطارات',
  slug: 'wheels-tires'
}, {
  name: 'Engine & Drivetrain',
  nameA: 'المحرك ونظام الدفع',
  slug: 'engine-drivetrain'
}, {
  name: 'Transmission',
  nameA: 'توصيل',
  slug: 'transmission'
}, {
  name: 'Performance',
  nameA: 'أداء',
  slug: 'performance'
}];
const shopCategoriesTree = makeCategories(makeShopCategory, shopCategoriesDef);
const shopCategoriesList = flatTree(shopCategoriesTree);
const blogCategoriesTree = makeCategories(makeBlogCategory, blogCategoriesDef);
const blogCategoriesList = flatTree(blogCategoriesTree);
// CONCATENATED MODULE: ./src/fake-server/endpoints/categories.ts
function categories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function categories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { categories_ownKeys(Object(source), true).forEach(function (key) { categories_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { categories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function categories_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application


function prepareCategory(category, depth) {
  let children;

  if (depth && depth > 0) {
    children = (category.children || []).map(x => prepareCategory(x, depth - 1));
  }

  let parent;

  if (category.parent) {
    parent = prepareCategory(category.parent);
  } else if (category.parent === null) {
    parent = null;
  }

  return JSON.parse(JSON.stringify(categories_objectSpread(categories_objectSpread({}, category), {}, {
    parent,
    children
  })));
}
function getCategoryBySlug(slug, options) {
  const optionsValue = options || {};
  const category = shopCategoriesList.find(x => x.slug === slug);

  if (!category) {
    return error('Page Not Found');
  }

  return Promise.resolve(prepareCategory(category, optionsValue.depth));
}
function getCategories(options) {
  let categories = shopCategoriesTree.slice(0);
  const depth = (options === null || options === void 0 ? void 0 : options.depth) || 0;
  const optionParent = options === null || options === void 0 ? void 0 : options.parent;
  const optionSlugs = options === null || options === void 0 ? void 0 : options.slugs;

  if (optionParent) {
    const parent = shopCategoriesList.find(x => x.slug === optionParent.slug);

    if (parent) {
      categories = parent.children || [];
    }
  } else if (optionSlugs) {
    categories = shopCategoriesList.filter(x => optionSlugs.includes(x.slug));
  }

  categories = categories.map(x => prepareCategory(x, depth));
  return Promise.resolve(clone(categories));
}
function getBlogCategories(options) {
  let categories = blogCategoriesTree.slice(0);
  const depth = options.depth || 0;
  categories = categories.map(x => prepareCategory(x, depth));
  return Promise.resolve(clone(categories));
}
// CONCATENATED MODULE: ./src/fake-server/database/brands.ts
/* eslint-disable import/prefer-default-export */
// application
const brands = [{
  slug: 'aim-parts',
  name: 'AimParts',
  country: 'DE',
  image: '/images/brands/brand-1.png'
}, {
  slug: 'wind-engine',
  name: 'WindEngine',
  country: 'DE',
  image: '/images/brands/brand-2.png'
}, {
  slug: 'turbo-electric',
  name: 'TurboElectric',
  country: 'DE',
  image: '/images/brands/brand-3.png'
}, {
  slug: 'start-one',
  name: 'StartOne',
  country: 'DE',
  image: '/images/brands/brand-4.png'
}, {
  slug: 'brandix',
  name: 'Brandix',
  country: 'DE',
  image: '/images/brands/brand-5.png'
}, {
  slug: 'abs-brand',
  name: 'ABS-Brand',
  country: 'DE',
  image: '/images/brands/brand-6.png'
}, {
  slug: 'great-circle',
  name: 'GreatCircle',
  country: 'DE',
  image: '/images/brands/brand-7.png'
}, {
  slug: 'just-romb',
  name: 'JustRomb',
  country: 'DE',
  image: '/images/brands/brand-8.png'
}, {
  slug: 'fast-wheels',
  name: 'FastWheels',
  country: 'DE',
  image: '/images/brands/brand-9.png'
}, {
  slug: 'stroyka-x',
  name: 'Stroyka-X',
  country: 'DE',
  image: '/images/brands/brand-10.png'
}, {
  slug: 'mission-51',
  name: 'Mission-51',
  country: 'DE',
  image: '/images/brands/brand-11.png'
}, {
  slug: 'fuel-corp',
  name: 'FuelCorp',
  country: 'DE',
  image: '/images/brands/brand-12.png'
}, {
  slug: 'red-gate',
  name: 'RedGate',
  country: 'DE',
  image: '/images/brands/brand-13.png'
}, {
  slug: 'blocks',
  name: 'Blocks',
  country: 'DE',
  image: '/images/brands/brand-14.png'
}, {
  slug: 'blackbox',
  name: 'BlackBox',
  country: 'DE',
  image: '/images/brands/brand-15.png'
}, {
  slug: 'square-garage',
  name: 'SquareGarage',
  country: 'DE',
  image: '/images/brands/brand-16.png'
}, {
  slug: 'sunset',
  name: 'Sunset',
  country: 'DE',
  image: '/images/brands/brand-1.png'
}, {
  slug: 'specter',
  name: 'Specter',
  country: 'CN',
  image: '/images/brands/brand-2.png'
}, {
  slug: 'no-name',
  name: 'No Name',
  country: 'CN',
  image: '/images/brands/brand-3.png'
}];
// CONCATENATED MODULE: ./src/fake-server/database/products.ts
function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export */
// application




const products_getNextId = makeIdGenerator();

function resolveProductAttributesDef(attributesDef) {
  const attributes = [];
  const keys = Object.keys(attributesDef);

  for (let i = 0; i < keys.length; i += 1) {
    const attributeName = keys[i];
    const attribute = {
      name: attributeName,
      slug: nameToSlug(attributeName),
      featured: false,
      values: []
    };
    const valuesDef = attributesDef[attributeName];
    let valueNames = [];

    if (typeof valuesDef === 'string') {
      valueNames = [valuesDef];
    } else {
      if (valuesDef[0] === true) {
        attribute.featured = true;
        valuesDef.splice(0, 1);
      }

      valueNames = valuesDef;
    }

    valueNames.forEach(valueName => {
      attribute.values.push({
        name: valueName,
        slug: nameToSlug(valueName)
      });
    });

    if (attribute.values.length > 0) {
      attributes.push(attribute);
    }
  }

  return attributes;
}

function makeProducts(defs) {
  return defs.map(def => {
    let badges = [];

    if (def.badges) {
      if (typeof def.badges === 'string') {
        badges = [def.badges];
      } else {
        badges = def.badges.slice(0);
      }
    }

    let brand = {
      slug: 'brandix',
      name: 'Brandix',
      image: '',
      country: 'JP'
    };

    if (def.brand) {
      brand = brands.find(x => x.slug === def.brand) || brand;
    }

    const categorySlugs = def.categories || ['tools-garage'];
    const categories = categorySlugs.map(categorySlug => shopCategoriesList.find(x => x.slug === categorySlug)).map(x => x ? prepareCategory(x) : null).filter(x => x !== null);
    const attributesDef = {
      Speed: [true, '750 RPM'],
      'Power Source': [true, 'Cordless-Electric'],
      'Battery Cell Type': [true, 'Lithium'],
      Voltage: [true, '20 Volts'],
      'Battery Capacity': [true, '2 Ah'],
      Material: ['Aluminium', 'Plastic'],
      'Engine Type': 'Brushless',
      Length: '99 mm',
      Width: '207 mm',
      Height: '208 mm'
    };
    return {
      id: products_getNextId(),
      name: def.name,
      excerpt: `
                Many philosophical debates that began in ancient times are still debated today. In one general sense,
                philosophy is associated with wisdom, intellectual culture and a search for knowledge.
            `,
      description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus,
                    ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed
                    fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque
                    ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie
                    urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et
                    finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget
                    lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris
                    vitae tellus.
                </p>
                <h4>Etiam lacus lacus mollis in mattis</h4>
                <p>
                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel
                    eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien
                    neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
                </p>
                <p>
                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac
                    neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.
                    Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique
                    ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,
                    sit amet fringilla odio scelerisque non.
                </p>
            `,
      slug: def.slug,
      sku: def.sku,
      partNumber: 'BDX-750Z370-S',
      stock: 'in-stock',
      price: def.price,
      compareAtPrice: def.compareAtPrice || null,
      images: def.images.slice(0),
      badges,
      rating: def.rating,
      reviews: def.reviews,
      availability: def.availability,
      compatibility: def.compatibility || 'all',
      brand,
      type: {
        slug: 'default',
        name: 'Default',
        attributeGroups: [{
          name: 'General',
          slug: 'general',
          attributes: ['speed', 'power-source', 'battery-cell-type', 'voltage', 'battery-capacity', 'material', 'engine-type']
        }, {
          name: 'Dimensions',
          slug: 'dimensions',
          attributes: ['length', 'width', 'height']
        }]
      },
      attributes: resolveProductAttributesDef(products_objectSpread(products_objectSpread({}, attributesDef), def.attributes)),
      options: [{
        type: 'default',
        slug: 'material',
        name: 'Material',
        values: [{
          slug: 'steel',
          name: 'Steel'
        }, {
          slug: 'aluminium',
          name: 'Aluminium'
        }, {
          slug: 'thorium',
          name: 'Thorium'
        }]
      }, {
        type: 'color',
        slug: 'color',
        name: 'Color',
        values: [{
          slug: 'white',
          name: 'White',
          color: '#fff'
        }, {
          slug: 'yellow',
          name: 'Yellow',
          color: '#ffd333'
        }, {
          slug: 'red',
          name: 'Red',
          color: '#ff4040'
        }, {
          slug: 'blue',
          name: 'Blue',
          color: '#4080ff'
        }]
      }],
      tags: ['Brake Kit', 'Brandix', 'Filter', 'Bumper', 'Transmission', 'Hood'],
      categories,
      customFields: {}
    };
  });
}

const productsDef = [{
  name: 'Brandix Spark Plug Kit ASR-400',
  slug: 'brandix-spark-plug-kit-asr-400',
  sku: '140-10440-B',
  price: 19,
  images: ['/images/products/product-1-1.jpg', '/images/products/product-1-2.jpg'],
  badges: ['sale', 'new', 'hot'],
  rating: 4,
  reviews: 3,
  availability: 'in-stock',
  compatibility: [1, 2],
  attributes: {
    Color: 'White'
  }
}, {
  name: 'Brandix Brake Kit BDX-750Z370-S',
  slug: 'brandix-brake-kit-bdx-750z370-s',
  sku: '573-23743-C',
  price: 224,
  images: ['/images/products/product-2-1.jpg', '/images/products/product-2-2.jpg'],
  rating: 5,
  reviews: 22,
  availability: 'in-stock',
  compatibility: [1],
  attributes: {
    Color: 'Silver'
  }
}, {
  name: 'Left Headlight Of Brandix Z54',
  slug: 'left-headlight-of-brandix-z54',
  sku: '009-50078-Z',
  price: 349,
  compareAtPrice: 415,
  images: ['/images/products/product-3-1.jpg', '/images/products/product-3-2.jpg'],
  badges: ['sale'],
  rating: 3,
  reviews: 14,
  availability: 'in-stock',
  attributes: {
    Color: 'Red'
  }
}, {
  name: 'Glossy Gray 19\' Aluminium Wheel AR-19',
  slug: 'glossy-gray-19-aluminium-wheel-ar-19',
  sku: 'A43-44328-B',
  price: 589,
  images: ['/images/products/product-4-1.jpg', '/images/products/product-4-2.jpg'],
  badges: ['hot'],
  rating: 4,
  reviews: 26,
  availability: 'in-stock',
  compatibility: 'unknown',
  attributes: {
    Color: 'Black'
  }
}, {
  name: 'Twin Exhaust Pipe From Brandix Z54',
  slug: 'twin-exhaust-pipe-from-brandix-z54',
  sku: '729-51203-B',
  price: 749,
  images: ['/images/products/product-5-1.jpg', '/images/products/product-5-2.jpg'],
  rating: 4,
  reviews: 9,
  availability: 'in-stock',
  brand: 'red-gate',
  attributes: {
    Color: 'Light Gray'
  }
}, {
  name: 'Motor Oil Level 5',
  slug: 'motor-oil-level-5',
  sku: '573-49386-C',
  price: 23,
  images: ['/images/products/product-6-1.jpg', '/images/products/product-6-2.jpg'],
  rating: 5,
  reviews: 2,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Gray'
  }
}, {
  name: 'Brandix Engine Block Z4',
  slug: 'brandix-engine-block-z4',
  sku: '753-38573-B',
  price: 452,
  compareAtPrice: 573,
  images: ['/images/products/product-7-1.jpg', '/images/products/product-7-2.jpg'],
  rating: 0,
  reviews: 0,
  availability: 'in-stock',
  brand: 'red-gate',
  attributes: {
    Color: 'Dark Gray'
  }
}, {
  name: 'Brandix Clutch Discs Z175',
  slug: 'brandix-clutch-discs-z175',
  sku: '472-67382-Z',
  price: 345,
  images: ['/images/products/product-8-1.jpg', '/images/products/product-8-2.jpg'],
  rating: 3,
  reviews: 7,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Coal'
  }
}, {
  name: 'Brandix Manual Five Speed Gearbox',
  slug: 'brandix-manual-five-speed-gearbox',
  sku: '855-78336-G',
  price: 879,
  images: ['/images/products/product-9-1.jpg', '/images/products/product-9-2.jpg'],
  rating: 4,
  reviews: 6,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Orange'
  }
}, {
  name: 'Set of Car Floor Mats Brandix Z4',
  slug: 'set-of-car-floor-mats-brandix-z4',
  sku: '473-75662-R',
  price: 78,
  compareAtPrice: 94,
  images: ['/images/products/product-10-1.jpg', '/images/products/product-10-2.jpg'],
  rating: 4,
  reviews: 16,
  availability: 'in-stock',
  brand: 'red-gate',
  attributes: {
    Color: 'Yellow'
  }
}, {
  name: 'Taillights Brandix Z54',
  slug: 'taillights-brandix-z54',
  sku: '521-57812-H',
  price: 60,
  images: ['/images/products/product-11-1.jpg', '/images/products/product-11-2.jpg'],
  rating: 2,
  reviews: 8,
  availability: 'in-stock',
  brand: 'red-gate',
  attributes: {
    Color: 'Pear Green'
  }
}, {
  name: 'Wiper Blades Brandix WL2',
  slug: 'wiper-blades-brandix-wl2',
  sku: '994-34346-B',
  price: 12,
  images: ['/images/products/product-12-1.jpg', '/images/products/product-12-2.jpg'],
  rating: 5,
  reviews: 41,
  availability: 'in-stock',
  attributes: {
    Color: 'Green'
  }
}, {
  name: 'Fantastic 12-Stroke Engine With A Power of 1991 hp',
  slug: 'fantastic-12-stroke-engine-with-a-power-of-1991-hp',
  sku: '985-00884-S',
  price: 2579,
  images: ['/images/products/product-13-1.jpg', '/images/products/product-13-2.jpg'],
  rating: 3,
  reviews: 17,
  availability: 'in-stock',
  attributes: {
    Color: 'Emerald'
  }
}, {
  name: 'Set of Four 19 Inch Spiked Tires',
  slug: 'set-of-four-19-inch-spiked-tires',
  sku: '855-56888-U',
  price: 327,
  images: ['/images/products/product-14-1.jpg', '/images/products/product-14-2.jpg'],
  rating: 4,
  reviews: 9,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Shamrock'
  }
}, {
  name: '40 Megawatt Low Beam Lamp',
  slug: '40-megawatt-low-beam-lamp',
  sku: '345-99553-E',
  price: 4,
  compareAtPrice: 8,
  images: ['/images/products/product-15-1.jpg', '/images/products/product-15-2.jpg'],
  rating: 4,
  reviews: 31,
  availability: 'in-stock',
  brand: 'no-name',
  attributes: {
    Color: 'Shakespeare'
  }
}, {
  name: 'Brandix Driver\'s seat',
  slug: 'brandix-drivers-seat',
  sku: '563-73744-Q',
  price: 78,
  images: ['/images/products/product-16-1.jpg', '/images/products/product-16-2.jpg'],
  rating: 3,
  reviews: 4,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Blue'
  }
}, {
  name: 'Air Filter From Ash\'s Chainsaw',
  slug: 'air-filter-from-ashs-chainsaw',
  sku: '999-60606-X',
  price: 666.99,
  images: ['/images/products/product-17-1.jpg', '/images/products/product-17-2.jpg'],
  rating: 5,
  reviews: 66,
  availability: 'in-stock',
  brand: 'turbo-electric',
  attributes: {
    Color: 'Dark Blue'
  }
}, {
  name: 'Side Rearview Mirror',
  slug: 'side-rearview-mirror',
  sku: '545-74573-D',
  price: 40,
  compareAtPrice: 60,
  images: ['/images/products/product-18-1.jpg', '/images/products/product-18-2.jpg'],
  rating: 4,
  reviews: 25,
  availability: 'in-stock',
  brand: 'turbo-electric',
  attributes: {
    Color: 'Violet'
  }
}, {
  name: 'Brandix Car Door Lock',
  slug: 'brandix-car-door-lock',
  sku: '965-73344-F',
  price: 21,
  compareAtPrice: 31,
  images: ['/images/products/product-19-1.jpg', '/images/products/product-19-2.jpg'],
  badges: ['sale'],
  rating: 3,
  reviews: 24,
  availability: 'in-stock',
  brand: 'turbo-electric',
  attributes: {
    Color: 'Purple'
  }
}, {
  name: 'Air Suspension For Brandix Car',
  slug: 'air-suspension-for-brandix-car',
  sku: '365-32667-P',
  price: 162,
  compareAtPrice: 174,
  images: ['/images/products/product-20-1.jpg', '/images/products/product-20-2.jpg'],
  rating: 5,
  reviews: 7,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Cerise'
  }
}, {
  name: 'Sunset Brake Kit',
  slug: 'sunset-brake-kit',
  sku: 'SSX-780B390-S',
  price: 1259,
  images: ['/images/products/product-21-1.jpg', '/images/products/product-21-2.jpg'],
  rating: 4,
  reviews: 7,
  availability: 'in-stock',
  brand: 'sunset',
  attributes: {
    Color: 'Orange'
  }
}, {
  name: 'Specter Brake Kit',
  slug: 'specter-brake-kit',
  sku: 'SCT-123A380-S',
  price: 799,
  images: ['/images/products/product-22-1.jpg', '/images/products/product-22-2.jpg'],
  rating: 5,
  reviews: 3,
  availability: 'in-stock',
  brand: 'specter',
  attributes: {
    Color: 'Green'
  }
}, {
  name: 'Brake Kit',
  slug: 'brake-kit',
  sku: 'NNO-120K643-S',
  price: 569,
  images: ['/images/products/product-23-1.jpg', '/images/products/product-23-2.jpg'],
  rating: 3,
  reviews: 9,
  availability: 'in-stock',
  brand: 'no-name',
  attributes: {
    Color: 'Shamrock'
  }
}, {
  name: 'STP Generator Platinum',
  slug: 'stp-generator-platinum',
  sku: 'STP-577843-E',
  price: 379,
  images: ['/images/products/product-24-1.jpg', '/images/products/product-24-2.jpg'],
  rating: 5,
  reviews: 22,
  availability: 'in-stock',
  brand: 'red-gate',
  attributes: {
    Color: 'Dark Blue'
  }
}];
const products_products = makeProducts(productsDef);
// CONCATENATED MODULE: ./src/fake-server/database/orders.ts



const getNextOrderId = makeIdGenerator();
function getOrderToken(orderId) {
  const token = 'b84486c31644eac99f6909a6e8c19109';
  return token.slice(0, token.length - orderId.toString().length) + orderId.toString();
}

function makeOrders(defs) {
  return defs.map(def => {
    const id = getNextOrderId();
    const items = def.items.map(orderItemDef => {
      const product = products_products.find(x => x.slug === orderItemDef.product);

      if (!product) {
        throw new Error('Product not found');
      }

      return {
        product: JSON.parse(JSON.stringify(product)),
        options: orderItemDef.options,
        price: product.price,
        quantity: orderItemDef.quantity,
        total: product.price * orderItemDef.quantity
      };
    });
    const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = items.reduce((acc, item) => acc + item.total, 0);
    const totals = [{
      title: 'SHIPPING',
      price: 25
    }, {
      title: 'TAX',
      price: Math.round(subtotal * 0.2)
    }];
    const total = subtotal + totals.reduce((acc, x) => acc + x.price, 0);
    return {
      id,
      token: getOrderToken(id),
      number: def.number,
      createdAt: def.createdAt,
      payment: def.payment,
      status: def.status,
      items,
      quantity,
      subtotal,
      totals,
      total,
      shippingAddress: JSON.parse(JSON.stringify(addresses[0])),
      billingAddress: JSON.parse(JSON.stringify(addresses[0]))
    };
  });
}

const ordersDef = [{
  number: '9478',
  createdAt: '2020-10-19',
  payment: 'PayPal',
  status: 'PENDING',
  items: [{
    product: 'brandix-spark-plug-kit-asr-400',
    options: [{
      name: 'Color',
      value: 'True Red'
    }, {
      name: 'Material',
      value: 'Aluminium'
    }],
    quantity: 2
  }, {
    product: 'brandix-brake-kit-bdx-750z370-s',
    options: [],
    quantity: 1
  }, {
    product: 'left-headlight-of-brandix-z54',
    options: [{
      name: 'Color',
      value: 'Green'
    }],
    quantity: 3
  }]
}, {
  number: '7592',
  createdAt: '2019-03-28',
  payment: 'PayPal',
  status: 'PENDING',
  items: [{
    product: 'brandix-drivers-seat',
    options: [{
      name: 'Color',
      value: 'True Red'
    }, {
      name: 'Material',
      value: 'Aluminium'
    }],
    quantity: 2
  }, {
    product: 'set-of-four-19-inch-spiked-tires',
    options: [],
    quantity: 1
  }]
}, {
  number: '7192',
  createdAt: '2019-03-15',
  payment: 'PayPal',
  status: 'SHIPPED',
  items: [{
    product: 'wiper-blades-brandix-wl2',
    options: [],
    quantity: 5
  }, {
    product: 'brandix-engine-block-z4',
    options: [],
    quantity: 1
  }]
}, {
  number: '6321',
  createdAt: '2019-02-28',
  payment: 'PayPal',
  status: 'COMPLETED',
  items: [{
    product: 'left-headlight-of-brandix-z54',
    options: [],
    quantity: 1
  }]
}, {
  number: '6001',
  createdAt: '2019-02-21',
  payment: 'PayPal',
  status: 'COMPLETED',
  items: [{
    product: 'taillights-brandix-z54',
    options: [],
    quantity: 7
  }, {
    product: 'fantastic-12-stroke-engine-with-a-power-of-1991-hp',
    options: [],
    quantity: 1
  }]
}, {
  number: '4120',
  createdAt: '2018-12-11',
  payment: 'PayPal',
  status: 'COMPLETED',
  items: [{
    product: 'air-filter-from-ashs-chainsaw',
    options: [],
    quantity: 1
  }]
}];
const orders = makeOrders(ordersDef);
function getNextOrderNumber() {
  return (orders.reduce((prev, curr) => Math.max(prev, parseFloat(curr.number)), 0) + 1).toString();
}
// CONCATENATED MODULE: ./src/fake-server/endpoints/checkout.ts
/* eslint-disable import/prefer-default-export */
// application



function checkout(data) {
  const id = getNextOrderId();
  const items = data.items.map(x => {
    const product = products_products.find(p => p.id === x.productId);

    if (!product) {
      throw new Error('Product not found');
    }

    return {
      product,
      options: x.options,
      price: product.price,
      quantity: x.quantity,
      total: product.price * x.quantity
    };
  });
  const quantity = items.reduce((acc, x) => acc + x.quantity, 0);
  const subtotal = items.reduce((acc, x) => acc + x.total, 0);
  const totals = [{
    title: 'SHIPPING',
    price: 25
  }, {
    title: 'TAX',
    price: subtotal * 0.20
  }];
  const total = subtotal + totals.reduce((acc, x) => acc + x.price, 0);
  const date = new Date();

  const pad = v => `00${v}`.substr(-2);

  const createdAt = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const order = {
    id,
    token: getOrderToken(id),
    number: getNextOrderNumber(),
    createdAt,
    payment: data.payment,
    status: 'PENDING',
    items,
    quantity,
    subtotal,
    totals,
    total,
    billingAddress: data.billingAddress,
    shippingAddress: data.shippingAddress
  };
  orders.unshift(order);
  return delayResponse(Promise.resolve(order));
}
// CONCATENATED MODULE: ./src/fake-server/endpoints/countries.ts
/* eslint-disable import/prefer-default-export */
// application

const countries = [{
  code: 'RAND',
  name: 'Random Federation'
}, {
  code: 'LAND',
  name: 'RandomLand'
}, {
  code: 'AU',
  name: 'Australia'
}, {
  code: 'DE',
  name: 'Germany'
}, {
  code: 'FR',
  name: 'France'
}, {
  code: 'IT',
  name: 'Italy'
}, {
  code: 'RU',
  name: 'Russia'
}, {
  code: 'UA',
  name: 'Ukraine'
}, {
  code: 'US',
  name: 'United States'
}];
function getCountries() {
  return Promise.resolve(clone(countries));
}
// CONCATENATED MODULE: ./src/fake-server/endpoints/orders.ts
// application


function getOrdersList(options) {
  const optionsValue = options || {};
  let items = JSON.parse(JSON.stringify(orders));
  const page = optionsValue.page || 1;
  const limit = optionsValue.limit || 16;
  const sort = optionsValue.sort || 'default';
  const total = items.length;
  const pages = Math.ceil(items.length / limit);
  const from = (page - 1) * limit + 1;
  const to = page * limit;
  items = items.slice(from - 1, to);
  return Promise.resolve({
    page,
    limit,
    sort,
    total,
    pages,
    from,
    to,
    items
  });
}
function getOrderById(id) {
  const order = orders.find(x => x.id === id);

  if (order) {
    return Promise.resolve(order);
  }

  return error('Page Not Found');
}
function getOrderByToken(token) {
  const order = orders.find(x => x.token === token);

  if (order) {
    return Promise.resolve(order);
  }

  return error('Page Not Found');
}
// CONCATENATED MODULE: ./src/fake-server/database/posts.ts
/* eslint-disable import/prefer-default-export */
// application
const posts = [{
  id: 1,
  title: 'Philosophy That Addresses Topics Such As Goodness',
  image: '/images/posts/post-1.jpg',
  categories: ['Special Offers'],
  date: '2019-10-10'
}, {
  id: 2,
  title: 'Logic Is The Study Of Reasoning And Argument Part 2',
  image: '/images/posts/post-2.jpg',
  categories: ['Latest News'],
  date: '2019-09-05'
}, {
  id: 3,
  title: 'Some Philosophers Specialize In One Or More Historical Periods',
  image: '/images/posts/post-3.jpg',
  categories: ['New Arrivals'],
  date: '2019-04-12'
}, {
  id: 4,
  title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
  image: '/images/posts/post-4.jpg',
  categories: ['Special Offers'],
  date: '2019-07-30'
}, {
  id: 5,
  title: 'Germany Was The First Country To Professionalize Philosophy',
  image: '/images/posts/post-5.jpg',
  categories: ['New Arrivals'],
  date: '2019-06-12'
}, {
  id: 6,
  title: 'Logic Is The Study Of Reasoning And Argument Part 1',
  image: '/images/posts/post-6.jpg',
  categories: ['Special Offers'],
  date: '2019-05-21'
}, {
  id: 7,
  title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
  image: '/images/posts/post-7.jpg',
  categories: ['Special Offers'],
  date: '2019-04-03'
}, {
  id: 8,
  title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
  image: '/images/posts/post-8.jpg',
  categories: ['Latest News'],
  date: 'Mart 29, 2019'
}, {
  id: 9,
  title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
  image: '/images/posts/post-9.jpg',
  categories: ['New Arrivals'],
  date: '2019-02-10'
}, {
  id: 10,
  title: 'Engineers Use Many Methods To Minimize Logic Functions',
  image: '/images/posts/post-10.jpg',
  categories: ['Special Offers'],
  date: '2019-01-01'
}];
// CONCATENATED MODULE: ./src/fake-server/endpoints/posts.ts
/* eslint-disable import/prefer-default-export */
// application


function getLatestPosts(limit) {
  return delayResponse(Promise.resolve(posts.slice(0, limit)));
}
// CONCATENATED MODULE: ./src/fake-server/filters/abstract-filter-builder.ts
/* eslint-disable import/prefer-default-export,no-useless-constructor,no-empty-function */
// application
class AbstractFilterBuilder {
  constructor(slug, name) {
    this.slug = slug;
    this.name = name;
  }

}
// CONCATENATED MODULE: ./src/fake-server/filters/category-filter-builder.ts
function category_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application



class category_filter_builder_CategoryFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    category_filter_builder_defineProperty(this, "value", null);

    category_filter_builder_defineProperty(this, "items", []);
  }

  test() {
    return true;
  }

  makeItems(products, value) {
    this.value = value === undefined ? null : value;
    const category = shopCategoriesList.find(x => x.slug === value);

    if (category) {
      this.items = [prepareCategory(category, 1)];
    } else {
      this.items = shopCategoriesTree.map(x => prepareCategory(x));
    }
  }

  calc() {}

  build() {
    return {
      type: 'category',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

}
// CONCATENATED MODULE: ./src/fake-server/filters/check-filter-builder.ts
function check_filter_builder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function check_filter_builder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { check_filter_builder_ownKeys(Object(source), true).forEach(function (key) { check_filter_builder_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { check_filter_builder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function check_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class check_filter_builder_CheckFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    check_filter_builder_defineProperty(this, "items", []);

    check_filter_builder_defineProperty(this, "value", []);
  }

  test(product) {
    if (this.value.length === 0) {
      return true;
    }

    return this.value.reduce((result, value) => result || this.extractItems(product).map(x => x.slug).includes(value), false);
  } // noinspection DuplicatedCode


  makeItems(products, value) {
    products.forEach(product => this.extractItems(product).forEach(item => {
      if (!this.items.find(x => x.slug === item.slug)) {
        this.items.push(item);
      }
    }));
    this.value = this.parseValue(value);
  } // noinspection DuplicatedCode


  calc(filters) {
    const products = products_products.filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => check_filter_builder_objectSpread(check_filter_builder_objectSpread({}, item), {}, {
      count: products.reduce((acc, product) => acc + (this.extractItems(product).map(x => x.slug).includes(item.slug) ? 1 : 0), 0)
    }));
  }

  build() {
    return {
      type: 'check',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  } // noinspection JSMethodCanBeStatic


  parseValue(value) {
    return value ? value.split(',') : [];
  }

  extractItems(product) {
    if (this.slug === 'brand') {
      return product.brand ? [{
        slug: product.brand.slug,
        name: product.brand.name,
        count: 0
      }] : [];
    }

    throw Error();
  }

}
// CONCATENATED MODULE: ./src/fake-server/filters/color-filter-builder.ts
function color_filter_builder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function color_filter_builder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { color_filter_builder_ownKeys(Object(source), true).forEach(function (key) { color_filter_builder_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { color_filter_builder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function color_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


const colors = [{
  code: 'white',
  color: '#fff'
}, {
  code: 'silver',
  color: '#d9d9d9'
}, {
  code: 'light-gray',
  color: '#b3b3b3'
}, {
  code: 'gray',
  color: '#808080'
}, {
  code: 'dark-gray',
  color: '#666'
}, {
  code: 'coal',
  color: '#4d4d4d'
}, {
  code: 'black',
  color: '#262626'
}, {
  code: 'red',
  color: '#ff4040'
}, {
  code: 'orange',
  color: '#ff8126'
}, {
  code: 'yellow',
  color: '#ffd333'
}, {
  code: 'pear-green',
  color: '#becc1f'
}, {
  code: 'green',
  color: '#8fcc14'
}, {
  code: 'emerald',
  color: '#47cc5e'
}, {
  code: 'shamrock',
  color: '#47cca0'
}, {
  code: 'shakespeare',
  color: '#47cccc'
}, {
  code: 'blue',
  color: '#40bfff'
}, {
  code: 'dark-blue',
  color: '#3d6dcc'
}, {
  code: 'violet',
  color: '#7766cc'
}, {
  code: 'purple',
  color: '#b852cc'
}, {
  code: 'cerise',
  color: '#e53981'
}];
class color_filter_builder_ColorFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    color_filter_builder_defineProperty(this, "items", []);

    color_filter_builder_defineProperty(this, "value", []);
  }

  test(product) {
    if (this.value.length === 0) {
      return true;
    }

    return this.value.reduce((result, value) => result || this.extractItems(product).map(x => x.slug).includes(value), false);
  } // noinspection DuplicatedCode


  makeItems(products, value) {
    products.forEach(product => this.extractItems(product).forEach(item => {
      if (!this.items.find(x => x.slug === item.slug)) {
        this.items.push(item);
      }
    }));
    this.value = this.parseValue(value);
  } // noinspection DuplicatedCode


  calc(filters) {
    const products = products_products.filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => color_filter_builder_objectSpread(color_filter_builder_objectSpread({}, item), {}, {
      count: products.reduce((acc, product) => acc + (this.extractItems(product).map(x => x.slug).includes(item.slug) ? 1 : 0), 0)
    }));
    this.items = this.items.sort((a, b) => colors.findIndex(x => x.code === a.slug) - colors.findIndex(x => x.code === b.slug));
  }

  build() {
    return {
      type: 'color',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  } // noinspection JSMethodCanBeStatic


  parseValue(value) {
    return value ? value.split(',') : [];
  }

  extractItems(product) {
    const attribute = product.attributes.find(x => x.slug === this.slug);

    if (!attribute) {
      return [];
    }

    return attribute.values.map(value => ({
      slug: value.slug,
      name: value.name,
      color: this.getColorCode(value.slug),
      count: 0
    }));
  }

  getColorCode(slug) {
    var _colors$find;

    return ((_colors$find = colors.find(x => x.code === slug)) === null || _colors$find === void 0 ? void 0 : _colors$find.color) || '#000';
  }

}
// CONCATENATED MODULE: ./src/fake-server/database/reviews.ts
// application

const getNextReviewId = makeIdGenerator();
const reviews = [{
  id: getNextReviewId(),
  date: '2018-05-27',
  author: 'Samantha Smith',
  avatar: '/images/avatars/avatar-1.jpg',
  rating: 4,
  content: `Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus
                  commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.`
}, {
  id: getNextReviewId(),
  date: '2018-04-12',
  author: 'Adam Taylor',
  avatar: '/images/avatars/avatar-2.jpg',
  rating: 3,
  content: `Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque
                  justo, sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam
                  maximus consectetur diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.`
}, {
  id: getNextReviewId(),
  date: '2018-01-02',
  author: 'Helena Garcia',
  avatar: '/images/avatars/avatar-3.jpg',
  rating: 5,
  content: `Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit
                  ultrices.`
}];
// CONCATENATED MODULE: ./src/fake-server/filters/radio-filter-builder.ts
function radio_filter_builder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function radio_filter_builder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { radio_filter_builder_ownKeys(Object(source), true).forEach(function (key) { radio_filter_builder_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { radio_filter_builder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function radio_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class radio_filter_builder_RadioFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    radio_filter_builder_defineProperty(this, "items", []);

    radio_filter_builder_defineProperty(this, "value", null);
  }

  test(product) {
    return this.value !== null && this.extractItems(product).map(x => x.slug).includes(this.value);
  }

  makeItems(products, value) {
    products.forEach(product => this.extractItems(product).forEach(item => {
      if (!this.items.find(x => x.slug === item.slug)) {
        this.items.push(item);
      }
    }));
    this.value = value || this.items[0].slug;
  }

  calc(filters) {
    const products = products_products.filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => radio_filter_builder_objectSpread(radio_filter_builder_objectSpread({}, item), {}, {
      count: products.reduce((acc, product) => acc + (this.extractItems(product).map(x => x.slug).includes(item.slug) ? 1 : 0), 0)
    }));
  }

  build() {
    return {
      type: 'radio',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

  extractItems(product) {
    if (this.slug === 'discount') {
      const items = [{
        slug: 'any',
        name: 'Any',
        count: 0
      }];

      if (product.compareAtPrice) {
        items.push({
          slug: 'yes',
          name: 'Yes',
          count: 0
        });
      } else {
        items.push({
          slug: 'no',
          name: 'No',
          count: 0
        });
      }

      return items;
    }

    throw Error();
  }

}
// CONCATENATED MODULE: ./src/fake-server/filters/range-filter-builder.ts
function range_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class range_filter_builder_RangeFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    range_filter_builder_defineProperty(this, "min", void 0);

    range_filter_builder_defineProperty(this, "max", void 0);

    range_filter_builder_defineProperty(this, "value", void 0);
  }

  test(product) {
    const value = this.extractValue(product);
    return value >= this.value[0] && value <= this.value[1];
  }

  parseValue(value) {
    return value.split('-').map(x => parseFloat(x));
  }

  makeItems(products, value) {
    this.max = products_products.reduce((acc, product) => Math.max(acc, this.extractValue(product)), 0);
    this.min = products_products.reduce((acc, product) => Math.min(acc, this.extractValue(product)), this.max);
    /** Calculates the number of digits for rounding. */

    let digit = Math.max(Math.ceil(this.max).toString().length - 2, 1);
    digit = 10 ** digit;
    this.max = Math.ceil(this.max / digit) * digit;
    this.min = Math.floor(this.min / digit) * digit;
    this.value = [this.min, this.max];

    if (value) {
      this.value = this.parseValue(value);
    }
  }

  calc() {}

  extractValue(product) {
    if (this.slug === 'price') {
      return product.price;
    }

    throw Error();
  }

  build() {
    return {
      type: 'range',
      slug: this.slug,
      name: this.name,
      min: this.min,
      max: this.max,
      value: this.value
    };
  }

}
// CONCATENATED MODULE: ./src/fake-server/filters/rating-filter-builder.ts
function rating_filter_builder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function rating_filter_builder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rating_filter_builder_ownKeys(Object(source), true).forEach(function (key) { rating_filter_builder_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rating_filter_builder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function rating_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class rating_filter_builder_RatingFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    rating_filter_builder_defineProperty(this, "items", []);

    rating_filter_builder_defineProperty(this, "value", []);
  }

  test(product) {
    if (this.value.length === 0) {
      return true;
    }

    return this.value.reduce((acc, value) => acc || this.extractItem(product).rating === value, false);
  }

  makeItems(products, value) {
    products.forEach(product => {
      const item = this.extractItem(product);

      if (!this.items.find(x => x.rating === item.rating)) {
        this.items.push(item);
      }
    });
    this.value = this.parseValue(value);
    this.items.sort((a, b) => b.rating - a.rating);
  }

  calc(filters) {
    const products = products_products.filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => rating_filter_builder_objectSpread(rating_filter_builder_objectSpread({}, item), {}, {
      count: products.reduce((acc, product) => acc + (item.rating === this.extractItem(product).rating ? 1 : 0), 0)
    }));
  }

  build() {
    return {
      type: 'rating',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

  parseValue(value) {
    return value ? value.split(',').map(x => parseFloat(x)) : [];
  } // noinspection JSMethodCanBeStatic


  extractItem(product) {
    return {
      rating: Math.round(product.rating || 0),
      count: 0
    };
  }

}
// CONCATENATED MODULE: ./src/fake-server/database/vehicles.ts
// application

const vehicles_getNextId = makeIdGenerator();

function makeVehicles(defs) {
  return defs.map(def => {
    const range = typeof def.year === 'number' ? [def.year, def.year] : def.year;
    const years = [];

    for (let i = range[0]; i <= range[1]; i += 1) {
      years.push(i);
    }

    return years.map(year => ({
      id: vehicles_getNextId(),
      year,
      make: def.make,
      model: def.model,
      engine: def.engine
    }));
  }).reduce((acc, v) => [...acc, ...v], []);
}

const vehiclesDef = [{
  year: 2011,
  make: 'Ford',
  model: 'Focus S',
  engine: '2.0L 1742DA L4 FI Turbo'
}, {
  year: 2019,
  make: 'Audi',
  model: 'Q7 Premium',
  engine: '3.0L 5626CC L6 QK'
}, {
  year: 2015,
  make: 'Kia',
  model: 'Rio LX',
  engine: '1.6L 8306JK L5 RL'
}, {
  year: 2008,
  make: 'BMW',
  model: 'M5',
  engine: '5.0L 8351XZ V10 DB'
}, {
  year: [2008, 2018],
  make: 'Alfa Romeo',
  model: '4C',
  engine: '1.7L 1742CC L4 FI Turbo'
}, {
  year: [2008, 2018],
  make: 'Aston Martin',
  model: 'DB11',
  engine: '5.2L 5204CC V12 FI Turbo'
}, {
  year: [2008, 2018],
  make: 'Dodge',
  model: 'Challenger GT',
  engine: '3.6L 3604CC V6 FI'
}, {
  year: [2008, 2018],
  make: 'Lexus',
  model: 'LS460',
  engine: '4.6L 4608CC V8 FI'
}, {
  year: [2008, 2018],
  make: 'Nissan',
  model: 'Juke S',
  engine: '1.6 1618CC L4 FI Turbo'
}];
const vehicles = makeVehicles(vehiclesDef);
const userVehicles = vehicles.slice(0, 3);
// CONCATENATED MODULE: ./src/fake-server/filters/vehicle-filter-builder.ts
function vehicle_filter_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class vehicle_filter_builder_VehicleFilterBuilder extends AbstractFilterBuilder {
  constructor(...args) {
    super(...args);

    vehicle_filter_builder_defineProperty(this, "value", null);

    vehicle_filter_builder_defineProperty(this, "vehicle", null);
  }

  static testCompatibility(vehicle, product) {
    if (product.compatibility === 'all') {
      return true;
    }

    if (product.compatibility === 'unknown') {
      return false;
    }

    return product.compatibility.includes(vehicle.id);
  }

  test(product) {
    if (this.value) {
      return this.vehicle !== null && vehicle_filter_builder_VehicleFilterBuilder.testCompatibility(this.vehicle, product);
    }

    return true;
  }

  makeItems(products, value) {
    this.vehicle = vehicles.find(x => x.id === parseFloat(value)) || null;
    this.value = this.vehicle ? this.vehicle.id : null;
  }

  calc() {}

  build() {
    return {
      type: 'vehicle',
      slug: this.slug,
      name: this.name,
      value: this.value,
      vehicle: this.vehicle
    };
  }

}
// CONCATENATED MODULE: ./src/fake-server/endpoints/products.ts
function endpoints_products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function endpoints_products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { endpoints_products_ownKeys(Object(source), true).forEach(function (key) { endpoints_products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { endpoints_products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function endpoints_products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application













function getProducts(shift, categorySlug = null) {
  let shiftValue = shift;

  switch (categorySlug) {
    case 'tires-wheels':
    case 'power-tools':
      shiftValue += 5;
      break;

    case 'interior-parts':
    case 'hand-tools':
      shiftValue += 10;
      break;

    case 'engine-drivetrain':
    case 'plumbing':
      shiftValue += 15;
      break;

    default:
  }

  return [...products_products.slice(shiftValue), ...products_products.slice(0, shiftValue)];
}

function getProductsList(options = {}, filterValues = {}) {
  const filters = [new category_filter_builder_CategoryFilterBuilder('category', 'Categories'), new vehicle_filter_builder_VehicleFilterBuilder('vehicle', 'Vehicle'), new range_filter_builder_RangeFilterBuilder('price', 'Price'), new check_filter_builder_CheckFilterBuilder('brand', 'Brand'), new radio_filter_builder_RadioFilterBuilder('discount', 'With Discount'), new rating_filter_builder_RatingFilterBuilder('rating', 'Rating'), new color_filter_builder_ColorFilterBuilder('color', 'Color')];
  let products = products_products.slice(0);
  filters.forEach(filter => filter.makeItems(products, filterValues[filter.slug])); // Calculate items count for filter values.

  filters.forEach(filter => filter.calc(filters)); // Apply filters to products list.

  products = products.filter(product => filters.reduce((mr, filter) => mr && filter.test(product), true));
  const page = (options === null || options === void 0 ? void 0 : options.page) || 1;
  const limit = (options === null || options === void 0 ? void 0 : options.limit) || 16;
  const sort = (options === null || options === void 0 ? void 0 : options.sort) || 'default';
  const total = products.length;
  const pages = Math.ceil(products.length / limit);
  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total); // Sort items array.

  products = products.sort((a, b) => {
    if (['name_asc', 'name_desc'].includes(sort)) {
      if (a.name === b.name) {
        return 0;
      }

      return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
    }

    return 0;
  });
  const items = products.slice(from - 1, to);
  return delayResponse(Promise.resolve({
    items,
    page,
    limit,
    sort,
    total,
    pages,
    from,
    to,
    filters: filters.map(x => x.build())
  }), 350);
}
function getProductBySlug(slug) {
  const product = products_products.find(x => x.slug === slug);

  if (!product) {
    return error('Page Not Found');
  }

  return Promise.resolve(clone(product));
}
function getProductReviews(productId, options) {
  let items = reviews.slice(0);
  items.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }

    if (a.date < b.date) {
      return 1;
    }

    return 0;
  });
  const page = (options === null || options === void 0 ? void 0 : options.page) || 1;
  const limit = (options === null || options === void 0 ? void 0 : options.limit) || 8;
  const sort = (options === null || options === void 0 ? void 0 : options.sort) || 'default';
  const total = items.length;
  const pages = Math.ceil(items.length / limit);
  const from = (page - 1) * limit + 1;
  const to = page * limit;
  items = items.slice(from - 1, to);
  return Promise.resolve({
    items,
    page,
    limit,
    sort,
    total,
    pages,
    from,
    to
  });
}
function addProductReview(productId, data) {
  const review = {
    id: getNextReviewId(),
    date: new Date().toISOString().substr(0, 10),
    author: data.author,
    avatar: '/images/avatars/avatar-2.jpg',
    rating: data.rating,
    content: data.content
  };
  reviews.push(review);
  return delayResponse(Promise.resolve(review));
} // eslint-disable-next-line @typescript-eslint/no-unused-vars

function getProductAnalogs(productId) {
  const slugs = ['sunset-brake-kit', 'specter-brake-kit', 'brake-kit'];
  const analogs = products_products.filter(x => slugs.includes(x.slug));
  return Promise.resolve(clone(analogs));
}
function getRelatedProducts(productId, limit) {
  return Promise.resolve(clone(products_products.slice(0, limit)));
}
function getFeaturedProducts(categorySlug, limit) {
  return delayResponse(Promise.resolve(clone(getProducts(0, categorySlug).slice(0, limit))), 1000);
}
function getPopularProducts(categorySlug, limit) {
  return delayResponse(Promise.resolve(clone(getProducts(6, categorySlug).slice(0, limit))), 1000);
}
function getTopRatedProducts(categorySlug, limit) {
  return delayResponse(Promise.resolve(clone(getProducts(12, categorySlug).slice(0, limit))), 1000);
}
function getSpecialOffers(limit) {
  return delayResponse(Promise.resolve(clone(getProducts(8).slice(0, limit))), 1000);
}
function getLatestProducts(limit) {
  return Promise.resolve(clone(products_products.slice(0, limit)));
}
function getSearchSuggestions(query, options) {
  const queryVal = query.toLowerCase();

  const optionsVal = endpoints_products_objectSpread({
    limitProducts: 4,
    limitCategories: 4
  }, options);

  const resultProducts = products_products.filter(x => x.name.toLowerCase().includes(queryVal));
  const resultCategories = shopCategoriesList.filter(x => x.name.toLowerCase().includes(queryVal));
  return Promise.resolve({
    products: resultProducts.slice(0, optionsVal.limitProducts),
    categories: resultCategories.slice(0, optionsVal.limitCategories).map(x => prepareCategory(x))
  });
}
// CONCATENATED MODULE: ./src/fake-server/endpoints/vehicles.ts
// application


function getYears() {
  const result = [];
  vehicles.forEach(vehicle => {
    if (result.indexOf(vehicle.year) === -1) {
      result.push(vehicle.year);
    }
  });
  return delayResponse(Promise.resolve(result.sort()), 750);
}
function getMakes(year) {
  const result = [];
  vehicles.filter(x => x.year === year).forEach(vehicle => {
    if (result.indexOf(vehicle.make) === -1) {
      result.push(vehicle.make);
    }
  });
  return delayResponse(Promise.resolve(result.sort()), 750);
}
function getModels(year, make) {
  const result = [];
  vehicles.filter(x => x.year === year && x.make === make).forEach(vehicle => {
    if (result.indexOf(vehicle.model) === -1) {
      result.push(vehicle.model);
    }
  });
  return delayResponse(Promise.resolve(result.sort()), 750);
}
function getVehicles(year, make, model) {
  const result = vehicles.filter(x => x.year === year && x.make === make && x.model === model);
  return delayResponse(Promise.resolve(result.sort()), 750);
}
function getVehicleByVin(vin) {
  const vinValue = vin.trim();
  const vehicle = vehicles.find(x => x.model === 'Focus S');

  if (vinValue === '' || vinValue === 'error' || !vehicle) {
    return error('Page Not Found');
  }

  return Promise.resolve(vehicle);
}
function getUserVehicles() {
  return Promise.resolve(clone(userVehicles));
}
function addUserVehicles(vehicleId) {
  const index = userVehicles.findIndex(x => x.id === vehicleId);
  const vehicle = vehicles.find(x => x.id === vehicleId);

  if (vehicle && index === -1) {
    userVehicles.push(vehicle);
  }

  return delayResponse(Promise.resolve());
}
function removeUserVehicles(vehicleId) {
  const index = userVehicles.findIndex(x => x.id === vehicleId);

  if (index !== -1) {
    userVehicles.splice(index, 1);
  }

  return delayResponse(Promise.resolve());
}
// CONCATENATED MODULE: ./src/fake-server/endpoints/index.ts









// CONCATENATED MODULE: ./src/api/fake-api/fake-account.api.ts
/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class fake_account_api_FakeAccountApi extends AccountApi {
  signIn(email, password) {
    return accountSignIn(email, password);
  }

  signUp(email, password) {
    return accountSignUp(email, password);
  }

  signOut() {
    return accountSignOut();
  }

  editProfile(data) {
    return accountEditProfile(data);
  }

  changePassword(oldPassword, newPassword) {
    return accountChangePassword(oldPassword, newPassword);
  }

  addAddress(data) {
    return addAddress(data);
  }

  editAddress(addressId, data) {
    return editAddress(addressId, data);
  }

  delAddress(addressId) {
    return delAddress(addressId);
  }

  getDefaultAddress() {
    return getDefaultAddress();
  }

  getAddress(addressId) {
    return getAddress(addressId);
  }

  getAddresses() {
    return getAddresses();
  }

  getOrdersList(options) {
    return getOrdersList(options);
  }

  getOrderById(id) {
    return getOrderById(id);
  }

  getOrderByToken(token) {
    return getOrderByToken(token);
  }

}
// CONCATENATED MODULE: ./src/api/fake-api/fake-blog.api.ts
/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class fake_blog_api_FakeBlogApi extends BlogApi {
  getLatestPosts(limit) {
    return getLatestPosts(limit);
  }

  getCategories(options) {
    return getBlogCategories(options);
  }

}
// CONCATENATED MODULE: ./src/api/fake-api/fake-countries.api.ts
/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class fake_countries_api_FakeCountriesApi extends CountriesApi {
  getCountries() {
    return getCountries();
  }

}
// CONCATENATED MODULE: ./src/fake-server/endpoints/brands.ts
/* eslint-disable import/prefer-default-export */
// application

function getBrands(options) {
  return Promise.resolve(brands.slice(0, options === null || options === void 0 ? void 0 : options.limit));
}
// CONCATENATED MODULE: ./src/api/fake-api/fake-shop.api.ts
/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class fake_shop_api_FakeShopApi {
  getCategoryBySlug(slug, options) {
    return getCategoryBySlug(slug, options);
  }

  getCategories(options) {
    return getCategories(options);
  }

  getBrands(options) {
    return getBrands(options);
  }

  getProductsList(options = {}, filters = {}) {
    return getProductsList(options, filters);
  }

  getProductBySlug(slug) {
    return getProductBySlug(slug);
  }

  getProductReviews(productId, options) {
    return getProductReviews(productId, options);
  }

  addProductReview(productId, data) {
    return addProductReview(productId, data);
  }

  getProductAnalogs(productId) {
    return getProductAnalogs(productId);
  }

  getRelatedProducts(productId, limit) {
    return getRelatedProducts(productId, limit);
  }

  getFeaturedProducts(categorySlug, limit) {
    return getFeaturedProducts(categorySlug, limit);
  }

  getPopularProducts(categorySlug, limit) {
    return getPopularProducts(categorySlug, limit);
  }

  getTopRatedProducts(categorySlug, limit) {
    return getTopRatedProducts(categorySlug, limit);
  }

  getSpecialOffers(limit) {
    return getSpecialOffers(limit);
  }

  getLatestProducts(limit) {
    return getLatestProducts(limit);
  }

  getSearchSuggestions(query, options) {
    return getSearchSuggestions(query, options);
  }

  checkout(data) {
    return checkout(data);
  }

}
// CONCATENATED MODULE: ./src/api/fake-api/fake-vehicle.api.ts
/* eslint-disable import/prefer-default-export,class-methods-use-this */
// application


class fake_vehicle_api_FakeVehicleApi extends VehicleApi {
  getYears() {
    return getYears();
  }

  getMakes(year) {
    return getMakes(year);
  }

  getModels(year, make) {
    return getModels(year, make);
  }

  getVehicles(year, make, model) {
    return getVehicles(year, make, model);
  }

  getVehicleByVin(vin) {
    return getVehicleByVin(vin);
  }

  getUserVehicles() {
    return getUserVehicles();
  }

  addUserVehicle(vehicleId) {
    return addUserVehicles(vehicleId);
  }

  removeUserVehicle(vehicleId) {
    return removeUserVehicles(vehicleId);
  }

}
// CONCATENATED MODULE: ./src/api/index.ts





const accountApi = new fake_account_api_FakeAccountApi();
const blogApi = new fake_blog_api_FakeBlogApi();
const countriesApi = new fake_countries_api_FakeCountriesApi();
const shopApi = new fake_shop_api_FakeShopApi();
const vehicleApi = new fake_vehicle_api_FakeVehicleApi();

/***/ }),

/***/ "ehF+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS_NAMESPACE; });
/* harmony import */ var _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AZBb");
// application


function optionsSetAll(state, options) {
  const {
    desktopHeaderVariant,
    mobileHeaderVariant
  } = options;
  const [desktopHeaderLayout, desktopHeaderScheme] = desktopHeaderVariant.split('/');
  return {
    desktopHeaderLayout,
    desktopHeaderScheme,
    mobileHeaderVariant
  };
}

const initialState = {
  desktopHeaderLayout: 'spaceship',
  desktopHeaderScheme: 'one',
  mobileHeaderVariant: 'one'
};
const OPTIONS_NAMESPACE = 'options';

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* OPTIONS_HYDRATE */ "a"]:
      return action.payload[OPTIONS_NAMESPACE];

    case _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* OPTIONS_SET_ALL */ "b"]:
      return optionsSetAll(state, action.options);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["b"] = (optionsReducer);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fkzy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCategoryPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategoryParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isArrayOfStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArrayOfNumbers; });
// application
function baseUrl(url) {
  if (/^\/([^/]|$)/.test(url)) {
    return `${""}${url}`;
  }

  return url;
}
function getCategoryPath(category) {
  return category ? [...getCategoryPath(category.parent), category] : [];
}
function getCategoryParents(category) {
  return category.parent ? [...getCategoryParents(category.parent), category.parent] : [];
}
function isArrayOfStrings(value) {
  if (!Array.isArray(value)) {
    return false;
  }

  return !value.map(x => typeof x !== 'string').includes(true);
}
function isArrayOfNumbers(value) {
  if (!Array.isArray(value)) {
    return false;
  }

  return !value.map(x => typeof x !== 'number').includes(true);
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "ggOb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_AppImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ISme");
/* harmony import */ var _components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+Sw2");
/* harmony import */ var _components_shared_AppSlick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IKmv");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fkzy");
/* harmony import */ var _services_i18n_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+oNx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P3CU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party


// application






const slickSettingsFeatured = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1
};
const slickSettingsThumbnails = {
  'product-sidebar': {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1399,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 1199,
      settings: {
        slidesToShow: 8
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 8
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 419,
      settings: {
        slidesToShow: 4
      }
    }]
  },
  'product-full': {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1399,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 1199,
      settings: {
        slidesToShow: 7
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 419,
      settings: {
        slidesToShow: 4
      }
    }]
  },
  quickview: {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 519,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 439,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 339,
      settings: {
        slidesToShow: 3
      }
    }]
  }
};

function ProductGallery(props) {
  const {
    images,
    layout,
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["images", "layout", "className"]);

  const direction = Object(_services_i18n_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useDirection */ "a"])();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currentIndex: 0,
    transition: false
  });
  const imagesRefs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const slickFeaturedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const createGalleryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const galleryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const getIndexDependOnDirRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const getIndexDependOnDir = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => {
    // we need to invert index id direction === 'rtl' due to react-slick bug
    if (direction === 'rtl') {
      return images.length - 1 - index;
    }

    return index;
  }, [direction, images]);

  const openPhotoswipe = index => {
    if (!createGalleryRef.current) {
      return;
    }

    const items = imagesRefs.current.map((tag, index) => {
      if (!tag) {
        throw Error('Image ref is null');
      }

      const width = (tag.dataset.width ? parseFloat(tag.dataset.width) : null) || tag.naturalWidth;
      const height = (tag.dataset.height ? parseFloat(tag.dataset.height) : null) || tag.naturalHeight;
      return {
        src: Object(_services_utils__WEBPACK_IMPORTED_MODULE_5__[/* baseUrl */ "a"])(images[index]),
        msrc: Object(_services_utils__WEBPACK_IMPORTED_MODULE_5__[/* baseUrl */ "a"])(images[index]),
        w: width,
        h: height
      };
    });

    if (direction === 'rtl') {
      items.reverse();
    } // noinspection JSUnusedGlobalSymbols


    const options = {
      getThumbBoundsFn: index => {
        // IMPORTANT: Inside this function, we can use variables and functions only through ref.
        if (!getIndexDependOnDirRef.current) {
          return {
            x: 0,
            y: 0,
            w: 0
          };
        }

        const dirDependentIndex = getIndexDependOnDirRef.current(index);
        const tag = imagesRefs.current[dirDependentIndex];

        if (!tag) {
          return {
            x: 0,
            y: 0,
            w: 0
          };
        }

        const width = tag.naturalWidth;
        const height = tag.naturalHeight;
        const rect = tag.getBoundingClientRect();
        const ration = Math.min(rect.width / width, rect.height / height);
        const fitWidth = width * ration;
        const fitHeight = height * ration;
        return {
          x: rect.left + (rect.width - fitWidth) / 2 + window.pageXOffset,
          y: rect.top + (rect.height - fitHeight) / 2 + window.pageYOffset,
          w: fitWidth
        };
      },
      index: getIndexDependOnDir(index),
      bgOpacity: 0.9,
      history: false
    };
    createGalleryRef.current.then(createGallery => {
      // IMPORTANT: Inside this function, we can use variables and functions only through ref.
      if (unmountedRef.current) {
        return;
      }

      galleryRef.current = createGallery(items, options);
      galleryRef.current.listen('beforeChange', () => {
        if (galleryRef.current && slickFeaturedRef.current) {
          slickFeaturedRef.current.slickGoTo(galleryRef.current.getCurrentIndex(), true);
        }
      });
      galleryRef.current.listen('destroy', () => {
        galleryRef.current = null;
      });
      galleryRef.current.init();
    });
  };

  const handleFeaturedClick = (event, index) => {
    if (!createGalleryRef.current || layout === 'quickview') {
      return;
    }

    event.preventDefault();
    openPhotoswipe(index);
  };

  const handleThumbnailClick = index => {
    if (state.transition) {
      return;
    }

    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {
      currentIndex: index
    }));

    if (slickFeaturedRef.current) {
      slickFeaturedRef.current.slickGoTo(getIndexDependOnDir(index));
    }
  };

  const handleFeaturedBeforeChange = (oldIndex, newIndex) => {
    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {
      currentIndex: getIndexDependOnDir(newIndex),
      transition: true
    }));
  };

  const handleFeaturedAfterChange = index => {
    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {
      currentIndex: getIndexDependOnDir(index),
      transition: false
    }));
  };

  const handleZoomButtonClick = () => {
    openPhotoswipe(state.currentIndex);
  }; // componentDidMount


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    createGalleryRef.current = __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, "e/zI")).then(module => module.default);
  }, []); // componentWillUnmount

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    unmountedRef.current = false;
    return () => {
      if (galleryRef.current) {
        galleryRef.current.destroy();
      }

      unmountedRef.current = true;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // this is necessary to reset the transition state,
    // because when the direction changes, the afterChange event does not fire
    const timer = setTimeout(() => {
      setState(prev => _objectSpread(_objectSpread({}, prev), {}, {
        transition: false
      }));
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [direction]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getIndexDependOnDirRef.current = getIndexDependOnDir;
  }, [getIndexDependOnDir]);
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-gallery', `product-gallery--layout--${layout}`, className);
  return __jsx("div", _extends({
    className: rootClasses,
    "data-layout": layout
  }, rootProps), __jsx("div", {
    className: "product-gallery__featured"
  }, __jsx("button", {
    type: "button",
    className: "product-gallery__zoom",
    onClick: handleZoomButtonClick
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* ZoomIn24Svg */ "N"], null)), __jsx(_components_shared_AppSlick__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _extends({
    ref: slickFeaturedRef
  }, slickSettingsFeatured, {
    beforeChange: handleFeaturedBeforeChange,
    afterChange: handleFeaturedAfterChange
  }), images.map((image, index) => __jsx("div", {
    key: index,
    className: "image image--type--product"
  }, __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: image,
    anchor: true,
    className: "image__body",
    target: "_blank",
    rel: "noreferrer",
    onClick: event => handleFeaturedClick(event, index)
  }, __jsx(_components_shared_AppImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "image__tag",
    src: image,
    ref: element => {
      imagesRefs.current[index] = element;
    },
    "data-width": "700",
    "data-height": "700"
  })))))), __jsx("div", {
    className: "product-gallery__thumbnails"
  }, __jsx(_components_shared_AppSlick__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], slickSettingsThumbnails[layout], images.map((image, index) => __jsx("button", {
    type: "button",
    key: index,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-gallery__thumbnails-item', 'image image--type--product', {
      'product-gallery__thumbnails-item--active': index === state.currentIndex
    }),
    onClick: () => handleThumbnailClick(index)
  }, __jsx("div", {
    className: "image__body"
  }, __jsx(_components_shared_AppImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "image__tag",
    src: image
  })))))));
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductGallery));

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/config.ts
const config = {
  desktopHeaderVariant: 'spaceship/one',
  mobileHeaderVariant: 'one'
};
/* harmony default export */ var src_config = (config);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/services/i18n/global-intl.tsx
var global_intl = __webpack_require__("UL12");

// EXTERNAL MODULE: ./src/services/i18n/context.ts
var i18n_context = __webpack_require__("J/yf");

// EXTERNAL MODULE: ./src/services/router.ts
var services_router = __webpack_require__("i19i");

// EXTERNAL MODULE: ./src/services/i18n/utils.ts + 1 modules
var utils = __webpack_require__("7eUB");

// CONCATENATED MODULE: ./src/services/i18n/provider.tsx
var __jsx = external_react_default.a.createElement;
// react
 // third-party

 // application





const cache = {};
async function getLanguageInitialProps(language) {
  const locale = language ? language.locale : Object(utils["c" /* getDefaultLocale */])();

  if (false) {}

  return {
    messages: await Object(utils["f" /* loadMessages */])(locale)
  };
}

function LanguageProvider(props) {
  const {
    children,
    messages
  } = props;
  const router = Object(services_router["c" /* useOriginalRouter */])();
  const language = Object(external_react_["useMemo"])(() => Object(utils["e" /* getLanguageByPath */])(router.asPath) || Object(utils["b" /* getDefaultLanguage */])(), [router.asPath]);
  const {
    locale
  } = language; // Puts the initial translation into the cache.

  Object(external_react_["useEffect"])(() => {
    if (!cache[locale]) {
      cache[locale] = Promise.resolve(messages);
    }
  }, [locale, messages]);
  const setLocale = Object(external_react_["useCallback"])(newLocale => {
    setTimeout(() => {
      const language = Object(utils["e" /* getLanguageByPath */])(router.asPath);
      let path = router.asPath;

      if (language) {
        path = `/${router.asPath.substr(language.locale.length + 2)}`;
      }

      const {
        query
      } = router;
      const newPath = newLocale === Object(utils["c" /* getDefaultLocale */])() ? path : `/${newLocale}${path}`;

      if (newLocale !== Object(utils["c" /* getDefaultLocale */])()) {
        query.lang = newLocale;
      } else {
        delete query.lang;
      }

      router.push({
        pathname: router.pathname,
        query
      }, newPath).then();
    }, 0);
  }, [router]);
  Object(external_react_["useEffect"])(() => {
    document.documentElement.lang = language.locale;
    document.documentElement.dir = language.direction;
  }, [language]);
  return __jsx(i18n_context["a" /* LanguageLocaleContext */].Provider, {
    value: locale
  }, __jsx(i18n_context["b" /* LanguageSetLocaleContext */].Provider, {
    value: setLocale
  }, __jsx(external_react_intl_["IntlProvider"], {
    locale: locale,
    messages: messages
  }, __jsx(global_intl["a" /* default */], null, children))));
}

/* harmony default export */ var provider = (LanguageProvider);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./src/components/shared/AppImage.tsx
var AppImage = __webpack_require__("ISme");

// EXTERNAL MODULE: ./src/components/shared/AppLink.tsx
var AppLink = __webpack_require__("+Sw2");

// EXTERNAL MODULE: ./src/components/shared/Decor.tsx
var Decor = __webpack_require__("PXqZ");

// EXTERNAL MODULE: ./src/data/theme.ts
var theme = __webpack_require__("5at8");

// CONCATENATED MODULE: ./src/components/footer/FooterContacts.tsx
var FooterContacts_jsx = external_react_default.a.createElement;
// react
 // third-party

 // data



const FooterContacts = () => FooterContacts_jsx("div", {
  className: "footer-contacts"
}, FooterContacts_jsx("h5", {
  className: "footer-contacts__title"
}, FooterContacts_jsx(external_react_intl_["FormattedMessage"], {
  id: "HEADER_CONTACT_US"
})), FooterContacts_jsx("div", {
  className: "footer-contacts__text"
}, FooterContacts_jsx(external_react_intl_["FormattedMessage"], {
  id: "TEXT_CONTACT_US_MESSAGE"
})), FooterContacts_jsx("address", {
  className: "footer-contacts__contacts"
}, FooterContacts_jsx("dl", null, FooterContacts_jsx("dt", null, FooterContacts_jsx(external_react_intl_["FormattedMessage"], {
  id: "TEXT_PHONE_NUMBER"
})), theme["a" /* default */].contacts.phone.map((item, index) => FooterContacts_jsx("dd", {
  key: index
}, item))), FooterContacts_jsx("dl", null, FooterContacts_jsx("dt", null, FooterContacts_jsx(external_react_intl_["FormattedMessage"], {
  id: "TEXT_EMAIL_ADDRESS"
})), theme["a" /* default */].contacts.email.map((item, index) => FooterContacts_jsx("dd", {
  key: index
}, item))), FooterContacts_jsx("dl", null, FooterContacts_jsx("dt", null, FooterContacts_jsx(external_react_intl_["FormattedMessage"], {
  id: "TEXT_OUR_LOCATION"
})), theme["a" /* default */].contacts.address.map((item, index) => FooterContacts_jsx("dd", {
  key: index
}, item))), FooterContacts_jsx("dl", null, FooterContacts_jsx("dt", null, FooterContacts_jsx(external_react_intl_["FormattedMessage"], {
  id: "TEXT_WORKING_HOURS"
})), theme["a" /* default */].contacts.hours.map((item, index) => FooterContacts_jsx("dd", {
  key: index
}, item)))));

/* harmony default export */ var footer_FooterContacts = (FooterContacts);
// CONCATENATED MODULE: ./src/components/footer/FooterLinks.tsx
var FooterLinks_jsx = external_react_default.a.createElement;
// react
 // application



function FooterLinks(props) {
  const {
    header,
    links
  } = props;
  return FooterLinks_jsx("div", {
    className: "footer-links"
  }, FooterLinks_jsx("h5", {
    className: "footer-links__title"
  }, header), FooterLinks_jsx("ul", {
    className: "footer-links__list"
  }, links.map((link, index) => FooterLinks_jsx("li", {
    key: index,
    className: "footer-links__item"
  }, FooterLinks_jsx(AppLink["a" /* default */], {
    href: link.url,
    className: "footer-links__link"
  }, link.title)))));
}

/* harmony default export */ var footer_FooterLinks = (FooterLinks);
// CONCATENATED MODULE: ./src/components/footer/FooterNewsletter.tsx
var FooterNewsletter_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application

 // data



const FooterNewsletter = () => {
  const intl = Object(external_react_intl_["useIntl"])();

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  const socialLinks = [{
    type: 'facebook',
    url: theme["a" /* default */].author.profile_url,
    icon: 'fab fa-facebook-f'
  }, {
    type: 'twitter',
    url: theme["a" /* default */].author.profile_url,
    icon: 'fab fa-twitter'
  }, {
    type: 'youtube',
    url: theme["a" /* default */].author.profile_url,
    icon: 'fab fa-youtube'
  }, {
    type: 'instagram',
    url: theme["a" /* default */].author.profile_url,
    icon: 'fab fa-instagram'
  }, {
    type: 'rss',
    url: theme["a" /* default */].author.profile_url,
    icon: 'fas fa-rss'
  }];
  return FooterNewsletter_jsx("div", {
    className: "footer-newsletter"
  }, FooterNewsletter_jsx("h5", {
    className: "footer-newsletter__title"
  }, FooterNewsletter_jsx(external_react_intl_["FormattedMessage"], {
    id: "HEADER_NEWSLETTER"
  })), FooterNewsletter_jsx("div", {
    className: "footer-newsletter__text"
  }, FooterNewsletter_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_NEWSLETTER_MESSAGE"
  })), FooterNewsletter_jsx("form", {
    className: "footer-newsletter__form",
    onSubmit: handleFormSubmit
  }, FooterNewsletter_jsx("label", {
    className: "sr-only",
    htmlFor: "footer-newsletter-address"
  }, FooterNewsletter_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_EMAIL_ADDRESS_LABEL"
  })), FooterNewsletter_jsx("input", {
    id: "footer-newsletter-address",
    type: "text",
    className: "footer-newsletter__form-input",
    placeholder: intl.formatMessage({
      id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER'
    })
  }), FooterNewsletter_jsx("button", {
    type: "submit",
    className: "footer-newsletter__form-button"
  }, FooterNewsletter_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_SUBSCRIBE"
  }))), FooterNewsletter_jsx("div", {
    className: "footer-newsletter__text footer-newsletter__text--social"
  }, FooterNewsletter_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_SOCIAL_LINKS_MESSAGE"
  })), FooterNewsletter_jsx("div", {
    className: "footer-newsletter__social-links social-links"
  }, FooterNewsletter_jsx("ul", {
    className: "social-links__list"
  }, socialLinks.map((link, index) => FooterNewsletter_jsx("li", {
    key: index,
    className: `social-links__item social-links__item--${link.type}`
  }, FooterNewsletter_jsx(AppLink["a" /* default */], {
    href: link.url,
    target: "_blank"
  }, FooterNewsletter_jsx("i", {
    className: link.icon
  })))))));
};

/* harmony default export */ var footer_FooterNewsletter = (FooterNewsletter);
// CONCATENATED MODULE: ./src/components/footer/Footer.tsx
var Footer_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application






 // data


function Footer() {
  return Footer_jsx("div", {
    className: "site-footer"
  }, Footer_jsx(Decor["a" /* default */], {
    className: "site-footer__decor",
    type: "bottom"
  }), Footer_jsx("div", {
    className: "site-footer__widgets"
  }, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx("div", {
    className: "row"
  }, Footer_jsx("div", {
    className: "col-12 col-xl-4"
  }, Footer_jsx(footer_FooterContacts, {
    className: "site-footer__widget"
  })), Footer_jsx("div", {
    className: "col-6 col-md-3 col-xl-2"
  }, Footer_jsx(footer_FooterLinks, {
    className: "site-footer__widget",
    header: Footer_jsx(external_react_intl_["FormattedMessage"], {
      id: "HEADER_INFORMATION"
    }),
    links: [{
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_ABOUT_US"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_DELIVERY_INFORMATION"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_PRIVACY_POLICY"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_BRANDS"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_CONTACT_US"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_RETURNS"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_SITE_MAP"
      })
    }]
  })), Footer_jsx("div", {
    className: "col-6 col-md-3 col-xl-2"
  }, Footer_jsx(footer_FooterLinks, {
    className: "site-footer__widget",
    header: Footer_jsx(external_react_intl_["FormattedMessage"], {
      id: "HEADER_MY_ACCOUNT"
    }),
    links: [{
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_STORE_LOCATION"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_ORDER_HISTORY"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_WISH_LIST"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_NEWSLETTER"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_SPECIAL_OFFERS"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_GIFT_CERTIFICATES"
      })
    }, {
      title: Footer_jsx(external_react_intl_["FormattedMessage"], {
        id: "LINK_AFFILIATE"
      })
    }]
  })), Footer_jsx("div", {
    className: "col-12 col-md-6 col-xl-4"
  }, Footer_jsx(footer_FooterNewsletter, {
    className: "site-footer__widget"
  }))))), Footer_jsx("div", {
    className: "site-footer__bottom"
  }, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx("div", {
    className: "site-footer__bottom-row"
  }, Footer_jsx("div", {
    className: "site-footer__copyright"
  }, 'Powered by ', Footer_jsx(AppLink["a" /* default */], {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noreferrer"
  }, "React"), ' / ', Footer_jsx(AppLink["a" /* default */], {
    href: "https://nextjs.org/",
    target: "_blank",
    rel: "noreferrer"
  }, "Next.js"), ' — Designed by ', Footer_jsx(AppLink["a" /* default */], {
    href: theme["a" /* default */].author.profile_url,
    target: "_blank",
    rel: "noreferrer"
  }, theme["a" /* default */].author.name)), Footer_jsx("div", {
    className: "site-footer__payments"
  }, Footer_jsx(AppImage["a" /* default */], {
    src: "/images/payments.png"
  }))))));
}
/* harmony default export */ var footer_Footer = (external_react_default.a.memo(Footer));
// EXTERNAL MODULE: ./src/services/url.ts
var url = __webpack_require__("NUuo");

// EXTERNAL MODULE: ./src/services/forms/sign-in.ts
var sign_in = __webpack_require__("k9hS");

// EXTERNAL MODULE: ./src/store/user/userHooks.ts + 1 modules
var userHooks = __webpack_require__("eJ0J");

// EXTERNAL MODULE: ./src/services/validators.ts
var validators = __webpack_require__("LuY4");

// CONCATENATED MODULE: ./src/components/header/AccountMenu.tsx
var AccountMenu_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application








function AccountMenu(props) {
  var _signInForm$errors$em, _signInForm$errors$em2, _signInForm$errors$pa;

  const {
    onCloseMenu
  } = props;
  const intl = Object(external_react_intl_["useIntl"])();
  const user = Object(userHooks["a" /* useUser */])();
  const userSignOut = Object(userHooks["d" /* useUserSignOut */])();
  const signInForm = Object(sign_in["a" /* useSignInForm */])({
    onSuccess: Object(external_react_["useCallback"])(() => {
      if (onCloseMenu) {
        onCloseMenu();
      }
    }, [onCloseMenu])
  });

  const onLogOutButtonClick = () => {
    userSignOut().then(() => {
      if (onCloseMenu) {
        onCloseMenu();
      }
    });
  };

  return AccountMenu_jsx("div", {
    className: "account-menu",
    onSubmit: signInForm.submit
  }, user === null && AccountMenu_jsx("form", {
    className: "account-menu__form"
  }, AccountMenu_jsx("div", {
    className: "account-menu__form-title"
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "HEADER_LOGIN_TO_YOUR_ACCOUNT"
  })), signInForm.serverError && AccountMenu_jsx("div", {
    className: "alert alert-xs alert-danger mt-n2"
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: signInForm.serverError
  })), AccountMenu_jsx("div", {
    className: "form-group"
  }, AccountMenu_jsx("label", {
    htmlFor: "header-signin-email",
    className: "sr-only"
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_EMAIL_ADDRESS_LABEL"
  })), AccountMenu_jsx("input", {
    id: "header-signin-email",
    type: "email",
    className: external_classnames_default()('form-control', 'form-control-sm', {
      'is-invalid': signInForm.errors.email
    }),
    placeholder: "customer@example.com",
    name: "email",
    ref: signInForm.register({
      required: true,
      validate: {
        email: validators["a" /* validateEmail */]
      }
    })
  }), AccountMenu_jsx("div", {
    className: "invalid-feedback"
  }, ((_signInForm$errors$em = signInForm.errors.email) === null || _signInForm$errors$em === void 0 ? void 0 : _signInForm$errors$em.type) === 'required' && AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "ERROR_FORM_REQUIRED"
  }), ((_signInForm$errors$em2 = signInForm.errors.email) === null || _signInForm$errors$em2 === void 0 ? void 0 : _signInForm$errors$em2.type) === 'email' && AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "ERROR_FORM_INCORRECT_EMAIL"
  }))), AccountMenu_jsx("div", {
    className: "form-group"
  }, AccountMenu_jsx("label", {
    htmlFor: "header-signin-password",
    className: "sr-only"
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_PASSWORD_LABEL"
  })), AccountMenu_jsx("div", {
    className: external_classnames_default()('account-menu__form-forgot', {
      'is-invalid': signInForm.errors.password
    })
  }, AccountMenu_jsx("input", {
    id: "header-signin-password",
    type: "password",
    className: external_classnames_default()('form-control', 'form-control-sm', {
      'is-invalid': signInForm.errors.password
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_PASSWORD_PLACEHOLDER'
    }),
    name: "password",
    ref: signInForm.register({
      required: true
    })
  }), AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].passwordRecovery(),
    className: "account-menu__form-forgot-link"
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_FORGOT"
  }))), AccountMenu_jsx("div", {
    className: "invalid-feedback"
  }, ((_signInForm$errors$pa = signInForm.errors.password) === null || _signInForm$errors$pa === void 0 ? void 0 : _signInForm$errors$pa.type) === 'required' && AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "ERROR_FORM_REQUIRED"
  }))), AccountMenu_jsx("div", {
    className: "form-group account-menu__form-button"
  }, AccountMenu_jsx("button", {
    type: "submit",
    className: external_classnames_default()('btn', 'btn-primary', 'btn-sm', {
      'btn-loading': signInForm.submitInProgress
    })
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_LOGIN"
  }))), AccountMenu_jsx("div", {
    className: "account-menu__form-link"
  }, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].signUp(),
    onClick: onCloseMenu
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_CREATE_ACCOUNT"
  })))), user !== null && AccountMenu_jsx(external_react_default.a.Fragment, null, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountDashboard(),
    className: "account-menu__user",
    onClick: onCloseMenu
  }, AccountMenu_jsx("div", {
    className: "account-menu__user-avatar"
  }, AccountMenu_jsx(AppImage["a" /* default */], {
    src: user.avatar
  })), AccountMenu_jsx("div", {
    className: " account-menu__user-info"
  }, AccountMenu_jsx("div", {
    className: " account-menu__user-name"
  }, `${user.firstName} ${user.lastName}`), AccountMenu_jsx("div", {
    className: " account-menu__user-email"
  }, user.email))), AccountMenu_jsx("div", {
    className: "account-menu__divider"
  }), AccountMenu_jsx("ul", {
    className: "account-menu__links"
  }, AccountMenu_jsx("li", null, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountDashboard(),
    onClick: onCloseMenu
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ACCOUNT_DASHBOARD"
  }))), AccountMenu_jsx("li", null, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountGarage(),
    onClick: onCloseMenu
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ACCOUNT_GARAGE"
  }))), AccountMenu_jsx("li", null, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountProfile(),
    onClick: onCloseMenu
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ACCOUNT_PROFILE"
  }))), AccountMenu_jsx("li", null, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountOrders(),
    onClick: onCloseMenu
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ACCOUNT_ORDERS"
  }))), AccountMenu_jsx("li", null, AccountMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountAddresses(),
    onClick: onCloseMenu
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ACCOUNT_ADDRESSES"
  })))), AccountMenu_jsx("div", {
    className: "account-menu__divider"
  }), AccountMenu_jsx("ul", {
    className: "account-menu__links"
  }, AccountMenu_jsx("li", null, AccountMenu_jsx("button", {
    type: "button",
    onClick: onLogOutButtonClick
  }, AccountMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ACCOUNT_LOGOUT"
  }))))));
}

/* harmony default export */ var header_AccountMenu = (AccountMenu);
// EXTERNAL MODULE: ./src/components/shared/CurrencyFormat.tsx
var CurrencyFormat = __webpack_require__("d4Ds");

// CONCATENATED MODULE: ./src/components/header/MegamenuLinks.tsx
var MegamenuLinks_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party

 // application



function MegamenuLinks(props) {
  const {
    links,
    level = 0,
    onItemClick,
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["links", "level", "onItemClick", "className"]);

  const rootClasses = external_classnames_default()('megamenu-links', className, {
    'megamenu-links--root': level === 0
  });
  return MegamenuLinks_jsx("ul", _extends({
    className: rootClasses
  }, rootProps), links.map((link, linkIndex) => {
    var _link$customFields;

    const subLinks = link.links || [];
    const hasSubLinks = subLinks.length > 0;
    const linkClasses = external_classnames_default()('megamenu-links__item', {
      'megamenu-links__item--has-submenu': link.links
    });
    return MegamenuLinks_jsx("li", {
      className: linkClasses,
      key: linkIndex
    }, MegamenuLinks_jsx(AppLink["a" /* default */], _extends({
      className: "megamenu-links__item-link",
      href: link.url,
      onClick: () => onItemClick && onItemClick(link)
    }, (_link$customFields = link.customFields) === null || _link$customFields === void 0 ? void 0 : _link$customFields.anchorProps), link.title), hasSubLinks && MegamenuLinks_jsx(MegamenuLinks, {
      links: subLinks,
      level: level + 1
    }));
  }));
}

/* harmony default export */ var header_MegamenuLinks = (external_react_default.a.memo(MegamenuLinks));
// CONCATENATED MODULE: ./src/components/header/Megamenu.tsx
var Megamenu_jsx = external_react_default.a.createElement;

function Megamenu_extends() { Megamenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Megamenu_extends.apply(this, arguments); }

function Megamenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Megamenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Megamenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party

 // application




function Megamenu(props) {
  const {
    menu,
    onItemClick,
    className
  } = props,
        rootProps = Megamenu_objectWithoutProperties(props, ["menu", "onItemClick", "className"]);

  const hasImage = !!menu.image;
  const rootClasses = external_classnames_default()('megamenu', className);
  return Megamenu_jsx("div", Megamenu_extends({
    className: rootClasses
  }, rootProps), hasImage && Megamenu_jsx("div", {
    className: "megamenu__image"
  }, Megamenu_jsx(AppImage["a" /* default */], {
    className: "reflect-rtl",
    src: menu.image
  })), Megamenu_jsx("div", {
    className: "row"
  }, menu.columns.map((column, columnIndex) => {
    var _column$links;

    const columnClasses = external_classnames_default()(`col-${column.size}`);
    const hasLinks = ((_column$links = column.links) === null || _column$links === void 0 ? void 0 : _column$links.length) > 0;
    return Megamenu_jsx("div", {
      className: columnClasses,
      key: columnIndex
    }, hasLinks && Megamenu_jsx(header_MegamenuLinks, {
      className: "megamenu__links",
      links: column.links,
      onItemClick: onItemClick
    }));
  })));
}

/* harmony default export */ var header_Megamenu = (Megamenu);
// EXTERNAL MODULE: ./src/svg/index.ts
var svg = __webpack_require__("P3CU");

// EXTERNAL MODULE: ./src/services/hooks.ts
var hooks = __webpack_require__("aA6i");

// CONCATENATED MODULE: ./src/data/headerDepartments.ts
// application
const dataHeaderDepartments = [{
  title: 'Headlights & Lighting',
  url: '/catalog/products',
  submenu: {
    type: 'megamenu',
    size: 'xl',
    image: '/images/departments/departments-2.jpg',
    columns: [{
      size: '1of5',
      links: [{
        title: 'Body Parts',
        url: '/catalog/products',
        links: [{
          title: 'Bumpers',
          url: '/catalog/products'
        }, {
          title: 'Hoods',
          url: '/catalog/products'
        }, {
          title: 'Grilles',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Door Handles',
          url: '/catalog/products'
        }, {
          title: 'Car Covers',
          url: '/catalog/products'
        }, {
          title: 'Tailgates',
          url: '/catalog/products'
        }]
      }, {
        title: 'Suspension',
        url: '/catalog/products'
      }, {
        title: 'Steering',
        url: '/catalog/products'
      }, {
        title: 'Fuel Systems',
        url: '/catalog/products'
      }, {
        title: 'Transmission',
        url: '/catalog/products'
      }, {
        title: 'Air Filters',
        url: '/catalog/products'
      }]
    }, {
      size: '1of5',
      links: [{
        title: 'Headlights & Lighting',
        url: '/catalog/products',
        links: [{
          title: 'Headlights',
          url: '/catalog/products'
        }, {
          title: 'Tail Lights',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Turn Signals',
          url: '/catalog/products'
        }, {
          title: 'Switches & Relays',
          url: '/catalog/products'
        }, {
          title: 'Corner Lights',
          url: '/catalog/products'
        }]
      }, {
        title: 'Brakes & Suspension',
        url: '/catalog/products',
        links: [{
          title: 'Brake Discs',
          url: '/catalog/products'
        }, {
          title: 'Wheel Hubs',
          url: '/catalog/products'
        }, {
          title: 'Air Suspension',
          url: '/catalog/products'
        }, {
          title: 'Ball Joints',
          url: '/catalog/products'
        }, {
          title: 'Brake Pad Sets',
          url: '/catalog/products'
        }]
      }]
    }, {
      size: '1of5',
      links: [{
        title: 'Interior Parts',
        url: '/catalog/products',
        links: [{
          title: 'Floor Mats',
          url: '/catalog/products'
        }, {
          title: 'Gauges',
          url: '/catalog/products'
        }, {
          title: 'Consoles & Organizers',
          url: '/catalog/products'
        }, {
          title: 'Mobile Electronics',
          url: '/catalog/products'
        }, {
          title: 'Steering Wheels',
          url: '/catalog/products'
        }, {
          title: 'Cargo Accessories',
          url: '/catalog/products'
        }]
      }, {
        title: 'Engine & Drivetrain',
        url: '/catalog/products',
        links: [{
          title: 'Air Filters',
          url: '/catalog/products'
        }, {
          title: 'Oxygen Sensors',
          url: '/catalog/products'
        }, {
          title: 'Heating',
          url: '/catalog/products'
        }, {
          title: 'Exhaust',
          url: '/catalog/products'
        }, {
          title: 'Cranks & Pistons',
          url: '/catalog/products'
        }]
      }]
    }, {
      size: '1of5',
      links: [{
        title: 'Tools & Garage',
        url: '/catalog/products',
        links: [{
          title: 'Repair Manuals',
          url: '/catalog/products'
        }, {
          title: 'Car Care',
          url: '/catalog/products'
        }, {
          title: 'Code Readers',
          url: '/catalog/products'
        }, {
          title: 'Tool Boxes',
          url: '/catalog/products'
        }]
      }]
    }]
  }
}, {
  title: 'Interior Parts',
  url: '/catalog/products',
  submenu: {
    type: 'megamenu',
    size: 'lg',
    image: '/images/departments/departments-1.jpg',
    columns: [{
      size: 3,
      links: [{
        title: 'Body Parts',
        url: '/catalog/products',
        links: [{
          title: 'Bumpers',
          url: '/catalog/products'
        }, {
          title: 'Hoods',
          url: '/catalog/products'
        }, {
          title: 'Grilles',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Door Handles',
          url: '/catalog/products'
        }, {
          title: 'Car Covers',
          url: '/catalog/products'
        }, {
          title: 'Tailgates',
          url: '/catalog/products'
        }]
      }, {
        title: 'Suspension',
        url: '/catalog/products'
      }, {
        title: 'Steering',
        url: '/catalog/products'
      }, {
        title: 'Fuel Systems',
        url: '/catalog/products'
      }, {
        title: 'Transmission',
        url: '/catalog/products'
      }, {
        title: 'Air Filters',
        url: '/catalog/products'
      }]
    }, {
      size: 3,
      links: [{
        title: 'Headlights & Lighting',
        url: '/catalog/products',
        links: [{
          title: 'Headlights',
          url: '/catalog/products'
        }, {
          title: 'Tail Lights',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Turn Signals',
          url: '/catalog/products'
        }, {
          title: 'Switches & Relays',
          url: '/catalog/products'
        }, {
          title: 'Corner Lights',
          url: '/catalog/products'
        }]
      }, {
        title: 'Brakes & Suspension',
        url: '/catalog/products',
        links: [{
          title: 'Brake Discs',
          url: '/catalog/products'
        }, {
          title: 'Wheel Hubs',
          url: '/catalog/products'
        }, {
          title: 'Air Suspension',
          url: '/catalog/products'
        }, {
          title: 'Ball Joints',
          url: '/catalog/products'
        }, {
          title: 'Brake Pad Sets',
          url: '/catalog/products'
        }]
      }]
    }, {
      size: 3,
      links: [{
        title: 'Interior Parts',
        url: '/catalog/products',
        links: [{
          title: 'Floor Mats',
          url: '/catalog/products'
        }, {
          title: 'Gauges',
          url: '/catalog/products'
        }, {
          title: 'Consoles & Organizers',
          url: '/catalog/products'
        }, {
          title: 'Mobile Electronics',
          url: '/catalog/products'
        }, {
          title: 'Steering Wheels',
          url: '/catalog/products'
        }, {
          title: 'Cargo Accessories',
          url: '/catalog/products'
        }]
      }]
    }, {
      size: 3,
      links: [{
        title: 'Tools & Garage',
        url: '/catalog/products',
        links: [{
          title: 'Repair Manuals',
          url: '/catalog/products'
        }, {
          title: 'Car Care',
          url: '/catalog/products'
        }, {
          title: 'Code Readers',
          url: '/catalog/products'
        }, {
          title: 'Tool Boxes',
          url: '/catalog/products'
        }]
      }]
    }]
  }
}, {
  title: 'Switches & Relays',
  url: '/catalog/products',
  submenu: {
    type: 'megamenu',
    size: 'md',
    image: '/images/departments/departments-3.jpg',
    columns: [{
      size: 4,
      links: [{
        title: 'Body Parts',
        url: '/catalog/products',
        links: [{
          title: 'Bumpers',
          url: '/catalog/products'
        }, {
          title: 'Hoods',
          url: '/catalog/products'
        }, {
          title: 'Grilles',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Door Handles',
          url: '/catalog/products'
        }, {
          title: 'Car Covers',
          url: '/catalog/products'
        }, {
          title: 'Tailgates',
          url: '/catalog/products'
        }]
      }, {
        title: 'Suspension',
        url: '/catalog/products'
      }, {
        title: 'Steering',
        url: '/catalog/products'
      }, {
        title: 'Fuel Systems',
        url: '/catalog/products'
      }, {
        title: 'Transmission',
        url: '/catalog/products'
      }, {
        title: 'Air Filters',
        url: '/catalog/products'
      }]
    }, {
      size: 4,
      links: [{
        title: 'Headlights & Lighting',
        url: '/catalog/products',
        links: [{
          title: 'Headlights',
          url: '/catalog/products'
        }, {
          title: 'Tail Lights',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Turn Signals',
          url: '/catalog/products'
        }, {
          title: 'Switches & Relays',
          url: '/catalog/products'
        }, {
          title: 'Corner Lights',
          url: '/catalog/products'
        }]
      }, {
        title: 'Brakes & Suspension',
        url: '/catalog/products',
        links: [{
          title: 'Brake Discs',
          url: '/catalog/products'
        }, {
          title: 'Wheel Hubs',
          url: '/catalog/products'
        }, {
          title: 'Air Suspension',
          url: '/catalog/products'
        }, {
          title: 'Ball Joints',
          url: '/catalog/products'
        }, {
          title: 'Brake Pad Sets',
          url: '/catalog/products'
        }]
      }]
    }, {
      size: 4,
      links: [{
        title: 'Interior Parts',
        url: '/catalog/products',
        links: [{
          title: 'Floor Mats',
          url: '/catalog/products'
        }, {
          title: 'Gauges',
          url: '/catalog/products'
        }, {
          title: 'Consoles & Organizers',
          url: '/catalog/products'
        }, {
          title: 'Mobile Electronics',
          url: '/catalog/products'
        }]
      }]
    }]
  }
}, {
  title: 'Tires & Wheels',
  url: '/catalog/products',
  submenu: {
    type: 'megamenu',
    size: 'nl',
    image: '/images/departments/departments-4.jpg',
    columns: [{
      size: 6,
      links: [{
        title: 'Body Parts',
        url: '/catalog/products',
        links: [{
          title: 'Bumpers',
          url: '/catalog/products'
        }, {
          title: 'Hoods',
          url: '/catalog/products'
        }, {
          title: 'Grilles',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Door Handles',
          url: '/catalog/products'
        }, {
          title: 'Car Covers',
          url: '/catalog/products'
        }, {
          title: 'Tailgates',
          url: '/catalog/products'
        }]
      }, {
        title: 'Suspension',
        url: '/catalog/products'
      }, {
        title: 'Steering',
        url: '/catalog/products'
      }, {
        title: 'Fuel Systems',
        url: '/catalog/products'
      }, {
        title: 'Transmission',
        url: '/catalog/products'
      }, {
        title: 'Air Filters',
        url: '/catalog/products'
      }]
    }, {
      size: 6,
      links: [{
        title: 'Headlights & Lighting',
        url: '/catalog/products',
        links: [{
          title: 'Headlights',
          url: '/catalog/products'
        }, {
          title: 'Tail Lights',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Turn Signals',
          url: '/catalog/products'
        }]
      }]
    }]
  }
}, {
  title: 'Tools & Garage',
  url: '/catalog/products',
  submenu: {
    type: 'megamenu',
    size: 'sm',
    columns: [{
      size: 12,
      links: [{
        title: 'Body Parts',
        url: '/catalog/products',
        links: [{
          title: 'Bumpers',
          url: '/catalog/products'
        }, {
          title: 'Hoods',
          url: '/catalog/products'
        }, {
          title: 'Grilles',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Door Handles',
          url: '/catalog/products'
        }, {
          title: 'Car Covers',
          url: '/catalog/products'
        }, {
          title: 'Tailgates',
          url: '/catalog/products'
        }]
      }, {
        title: 'Suspension',
        url: '/catalog/products'
      }, {
        title: 'Steering',
        url: '/catalog/products'
      }, {
        title: 'Fuel Systems',
        url: '/catalog/products'
      }, {
        title: 'Transmission',
        url: '/catalog/products'
      }, {
        title: 'Air Filters',
        url: '/catalog/products'
      }]
    }]
  }
}, {
  title: 'Clutches',
  url: '/catalog/products'
}, {
  title: 'Fuel Systems',
  url: '/catalog/products'
}, {
  title: 'Steering',
  url: '/catalog/products'
}, {
  title: 'Suspension',
  url: '/catalog/products'
}, {
  title: 'Body Parts',
  url: '/catalog/products'
}, {
  title: 'Transmission',
  url: '/catalog/products'
}, {
  title: 'Air Filters',
  url: '/catalog/products'
}];
/* harmony default export */ var headerDepartments = (dataHeaderDepartments);
// CONCATENATED MODULE: ./src/components/header/Departments.tsx
var Departments_jsx = external_react_default.a.createElement;

function Departments_extends() { Departments_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Departments_extends.apply(this, arguments); }

// react
 // third-party

 // application




 // data



function Departments(props) {
  const {
    label
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: currentItem,
    1: setCurrentItem
  } = Object(external_react_["useState"])(null);
  const rootRef = Object(external_react_["useRef"])(null);

  const handleButtonClick = () => {
    setIsOpen(state => !state);
  };

  const handleBodyMouseLeave = () => {
    setCurrentItem(null);
  };

  const handleListPaddingMouseEnter = () => {
    setCurrentItem(null);
  };

  const handleItemMouseEnter = item => {
    setCurrentItem(item);
  };

  const handleItemClick = Object(external_react_["useCallback"])(() => {
    setIsOpen(false);
    setCurrentItem(null);
  }, [setIsOpen, setCurrentItem]);
  Object(hooks["c" /* useGlobalMousedown */])(event => {
    if (rootRef.current && !rootRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, [setIsOpen, rootRef]);
  const classes = external_classnames_default()('departments', {
    'departments--open': isOpen
  });
  return Departments_jsx("div", {
    className: classes,
    ref: rootRef
  }, Departments_jsx("button", {
    className: "departments__button",
    type: "button",
    onClick: handleButtonClick
  }, Departments_jsx("span", {
    className: "departments__button-icon"
  }, Departments_jsx(svg["E" /* Menu16x12Svg */], null)), Departments_jsx("span", {
    className: "departments__button-title"
  }, label), Departments_jsx("span", {
    className: "departments__button-arrow"
  }, Departments_jsx(svg["d" /* ArrowRoundedDown9x6Svg */], null))), Departments_jsx("div", {
    className: "departments__menu"
  }, Departments_jsx("div", {
    className: "departments__arrow"
  }), Departments_jsx("div", {
    className: "departments__body",
    onMouseLeave: handleBodyMouseLeave
  }, Departments_jsx("ul", {
    className: "departments__list"
  }, Departments_jsx("li", {
    className: "departments__list-padding",
    role: "presentation",
    onMouseEnter: handleListPaddingMouseEnter
  }), headerDepartments.map((item, index) => {
    var _item$submenu, _item$customFields;

    const itemHasSubmenu = !!item.submenu;
    const itemClasses = external_classnames_default()('departments__item', {
      'departments__item--has-submenu': itemHasSubmenu,
      'departments__item--submenu--megamenu': ((_item$submenu = item.submenu) === null || _item$submenu === void 0 ? void 0 : _item$submenu.type) === 'megamenu',
      'departments__item--hover': item === currentItem
    });
    return Departments_jsx("li", {
      className: itemClasses,
      key: index,
      onMouseEnter: () => handleItemMouseEnter(item)
    }, Departments_jsx(AppLink["a" /* default */], Departments_extends({
      className: "departments__item-link",
      href: item.url,
      onClick: () => handleItemClick()
    }, (_item$customFields = item.customFields) === null || _item$customFields === void 0 ? void 0 : _item$customFields.anchorProps), item.title, itemHasSubmenu && Departments_jsx("span", {
      className: "departments__item-arrow"
    }, Departments_jsx(svg["h" /* ArrowRoundedRight7x11Svg */], null))));
  }), Departments_jsx("li", {
    className: "departments__list-padding",
    role: "presentation",
    onMouseEnter: handleListPaddingMouseEnter
  })), Departments_jsx("div", {
    className: "departments__menu-container"
  }, headerDepartments.map((item, index) => {
    if (!item.submenu) {
      return null;
    }

    const itemClasses = external_classnames_default()('departments__megamenu', `departments__megamenu--size--${item.submenu.size}`, {
      'departments__megamenu--open': item === currentItem
    });
    return Departments_jsx(header_Megamenu, {
      className: itemClasses,
      menu: item.submenu,
      key: index,
      onItemClick: handleItemClick
    });
  })))));
}

/* harmony default export */ var header_Departments = (external_react_default.a.memo(Departments));
// EXTERNAL MODULE: ./src/components/shared/AsyncAction.tsx
var AsyncAction = __webpack_require__("BWJY");

// EXTERNAL MODULE: ./src/store/cart/cartHooks.ts + 1 modules
var cartHooks = __webpack_require__("Zrnz");

// CONCATENATED MODULE: ./src/components/header/Dropcart.tsx
var Dropcart_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application









function Dropcart(props) {
  const {
    onCloseMenu
  } = props;
  const cart = Object(cartHooks["a" /* useCart */])();
  const cartRemoveItem = Object(cartHooks["c" /* useCartRemoveItem */])();
  return Dropcart_jsx("div", {
    className: "dropcart"
  }, cart.items.length === 0 && Dropcart_jsx("div", {
    className: "dropcart__empty"
  }, Dropcart_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_YOUR_SHOPPING_CART_IS_EMPTY"
  })), cart.items.length > 0 && Dropcart_jsx(external_react_default.a.Fragment, null, Dropcart_jsx("ul", {
    className: "dropcart__list"
  }, cart.items.map((item, index) => Dropcart_jsx(external_react_default.a.Fragment, {
    key: index
  }, Dropcart_jsx("li", {
    className: "dropcart__item"
  }, Dropcart_jsx("div", {
    className: "dropcart__item-image image image--type--product"
  }, Dropcart_jsx(AppLink["a" /* default */], {
    className: "image__body",
    href: url["a" /* default */].product(item.product),
    onClick: onCloseMenu
  }, Dropcart_jsx(AppImage["a" /* default */], {
    className: "image__tag",
    src: item.product.images && item.product.images[0]
  }))), Dropcart_jsx("div", {
    className: "dropcart__item-info"
  }, Dropcart_jsx("div", {
    className: "dropcart__item-name"
  }, Dropcart_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].product(item.product),
    onClick: onCloseMenu
  }, item.product.name)), item.options.length > 0 && Dropcart_jsx("ul", {
    className: "dropcart__item-features"
  }, item.options.map((option, optionIndex) => Dropcart_jsx("li", {
    key: optionIndex
  }, option.name, ': ', option.value))), Dropcart_jsx("div", {
    className: "dropcart__item-meta"
  }, Dropcart_jsx("div", {
    className: "dropcart__item-quantity"
  }, item.quantity), Dropcart_jsx("div", {
    className: "dropcart__item-price"
  }, Dropcart_jsx(CurrencyFormat["a" /* default */], {
    value: item.price
  })))), Dropcart_jsx(AsyncAction["a" /* default */], {
    action: () => cartRemoveItem(item.id),
    render: ({
      run,
      loading
    }) => Dropcart_jsx("button", {
      type: "button",
      className: external_classnames_default()('dropcart__item-remove', {
        'dropcart__item-remove--loading': loading
      }),
      onClick: run
    }, Dropcart_jsx(svg["o" /* Cross10Svg */], null))
  })), Dropcart_jsx("li", {
    className: "dropcart__divider",
    role: "presentation"
  })))), Dropcart_jsx("div", {
    className: "dropcart__totals"
  }, Dropcart_jsx("table", null, Dropcart_jsx("tbody", null, cart.totals.length > 0 && Dropcart_jsx("tr", null, Dropcart_jsx("th", null, Dropcart_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_SUBTOTAL"
  })), Dropcart_jsx("td", null, Dropcart_jsx(CurrencyFormat["a" /* default */], {
    value: cart.subtotal
  }))), cart.totals.map((total, index) => Dropcart_jsx("tr", {
    key: index
  }, Dropcart_jsx("th", null, Dropcart_jsx(external_react_intl_["FormattedMessage"], {
    id: `TABLE_TOTAL_${total.title}`
  })), Dropcart_jsx("td", null, Dropcart_jsx(CurrencyFormat["a" /* default */], {
    value: total.price
  })))), Dropcart_jsx("tr", null, Dropcart_jsx("th", null, Dropcart_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_TOTAL"
  })), Dropcart_jsx("td", null, Dropcart_jsx(CurrencyFormat["a" /* default */], {
    value: cart.total
  })))))), Dropcart_jsx("div", {
    className: "dropcart__actions"
  }, Dropcart_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].cart(),
    className: "btn btn-secondary",
    onClick: onCloseMenu
  }, Dropcart_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_VIEW_CART"
  })), Dropcart_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].checkout(),
    className: "btn btn-primary",
    onClick: onCloseMenu
  }, Dropcart_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_CHECKOUT"
  })))));
}

/* harmony default export */ var header_Dropcart = (Dropcart);
// CONCATENATED MODULE: ./src/components/header/Indicator.tsx
var Indicator_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application




function Indicator(props) {
  const {
    icon,
    href,
    label,
    value,
    counter,
    trigger = 'none',
    children,
    controllerRef
  } = props;
  const hasLabel = label !== undefined && label !== null;
  const hasValue = value !== undefined && value !== null;
  const buttonType = href !== undefined ? 'link' : 'button';
  const showCounter = counter !== undefined && counter !== null;
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const rootRef = Object(external_react_["useRef"])(null);
  const controller = Object(external_react_["useMemo"])(() => ({
    close: () => setIsOpen(false)
  }), [setIsOpen]);

  if (controllerRef) {
    controllerRef.current = controller;
  }

  Object(hooks["c" /* useGlobalMousedown */])(event => {
    if (rootRef.current && !rootRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, [setIsOpen, rootRef]);

  const handleButtonClick = event => {
    if (trigger === 'click') {
      event.preventDefault();
      setIsOpen(prevState => !prevState);
    }
  };

  const buttonContent = Indicator_jsx(external_react_default.a.Fragment, null, Indicator_jsx("span", {
    className: "indicator__icon"
  }, icon, showCounter && Indicator_jsx("span", {
    className: "indicator__counter"
  }, counter)), hasLabel && Indicator_jsx("span", {
    className: "indicator__title"
  }, label), hasValue && Indicator_jsx("span", {
    className: "indicator__value"
  }, value));

  const rootClasses = external_classnames_default()('indicator', `indicator--trigger--${trigger}`, {
    'indicator--open': isOpen
  });
  return Indicator_jsx("div", {
    className: rootClasses,
    ref: rootRef
  }, buttonType === 'button' && Indicator_jsx("button", {
    className: "indicator__button",
    type: "button",
    onClick: handleButtonClick
  }, buttonContent), buttonType === 'link' && Indicator_jsx(AppLink["a" /* default */], {
    href: href,
    className: "indicator__button",
    onClick: handleButtonClick
  }, buttonContent), Indicator_jsx("div", {
    className: "indicator__content"
  }, children));
}

/* harmony default export */ var header_Indicator = (Indicator);
// EXTERNAL MODULE: ./src/services/utils.ts
var services_utils = __webpack_require__("fkzy");

// CONCATENATED MODULE: ./src/components/header/Logo.tsx
var Logo_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application





function Logo(props) {
  const logoPath = Object(services_utils["a" /* baseUrl */])('/images/logo.png');
  return Logo_jsx("div", props, Logo_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].home(),
    className: "logo"
  }, Logo_jsx("div", {
    className: "logo__slogan"
  }, Logo_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_SLOGAN"
  })), Logo_jsx("div", {
    className: "logo__image"
  }, Logo_jsx("img", {
    src: logoPath,
    width: "55"
  }))));
}

/* harmony default export */ var header_Logo = (Logo);
// CONCATENATED MODULE: ./src/components/header/Menu.tsx
var Menu_jsx = external_react_default.a.createElement;

function Menu_extends() { Menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Menu_extends.apply(this, arguments); }

// react
 // third-party

 // application




function Menu(props) {
  const {
    items,
    onItemClick
  } = props;
  return Menu_jsx("div", {
    className: "menu"
  }, Menu_jsx("ul", {
    className: "menu__list"
  }, items.map((item, index) => {
    var _item$customFields;

    const submenu = item.links || [];
    const hasSubmenu = submenu.length > 0;
    const itemClasses = external_classnames_default()('menu__item', {
      'menu__item--has-submenu': hasSubmenu
    });
    return Menu_jsx("li", {
      className: itemClasses,
      key: index
    }, Menu_jsx(AppLink["a" /* default */], Menu_extends({
      className: "menu__link",
      href: item.url,
      onClick: onItemClick
    }, (_item$customFields = item.customFields) === null || _item$customFields === void 0 ? void 0 : _item$customFields.anchorProps), item.title, hasSubmenu && Menu_jsx("span", {
      className: "menu__arrow"
    }, Menu_jsx(svg["g" /* ArrowRoundedRight6x9Svg */], null))), hasSubmenu && Menu_jsx("div", {
      className: "menu__submenu"
    }, Menu_jsx(Menu, {
      items: submenu,
      onItemClick: onItemClick
    })));
  })));
}

/* harmony default export */ var header_Menu = (Menu);
// EXTERNAL MODULE: ./src/store/options/optionsReducer.ts
var optionsReducer = __webpack_require__("ehF+");

// EXTERNAL MODULE: ./src/store/hooks.ts
var store_hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/store/options/optionsHooks.ts
/* eslint-disable import/prefer-default-export */
// application


const useOptions = () => Object(store_hooks["b" /* useAppSelector */])(state => state[optionsReducer["a" /* OPTIONS_NAMESPACE */]]);
// CONCATENATED MODULE: ./src/data/headerMainMenu.ts
// application
const dataHeaderMainMenu = [{
  title: 'Home',
  url: '/',
  submenu: {
    type: 'menu',
    links: [{
      title: 'Home One',
      url: '/'
    }, {
      title: 'Home Two',
      url: '/demo/home-two'
    }, {
      title: 'Header Spaceship',
      url: '/demo/header-spaceship-variant-one',
      links: [{
        title: 'Variant One',
        url: '/demo/header-spaceship-variant-one'
      }, {
        title: 'Variant Two',
        url: '/demo/header-spaceship-variant-two'
      }, {
        title: 'Variant Three',
        url: '/demo/header-spaceship-variant-three'
      }]
    }, {
      title: 'Header Classic',
      url: '/demo/header-classic-variant-one',
      links: [{
        title: 'Variant One',
        url: '/demo/header-classic-variant-one'
      }, {
        title: 'Variant Two',
        url: '/demo/header-classic-variant-two'
      }, {
        title: 'Variant Three',
        url: '/demo/header-classic-variant-three'
      }, {
        title: 'Variant Four',
        url: '/demo/header-classic-variant-four'
      }, {
        title: 'Variant Five',
        url: '/demo/header-classic-variant-five'
      }]
    }, {
      title: 'Mobile Header',
      url: '/demo/mobile-header-variant-one',
      links: [{
        title: 'Variant One',
        url: '/demo/mobile-header-variant-one'
      }, {
        title: 'Variant Two',
        url: '/demo/mobile-header-variant-two'
      }]
    }]
  }
}, {
  title: 'Megamenu',
  url: '/catalog/products',
  submenu: {
    type: 'megamenu',
    size: 'nl',
    columns: [{
      size: 6,
      links: [{
        title: 'Headlights & Lighting',
        url: '/catalog/products',
        links: [{
          title: 'Headlights',
          url: '/catalog/products'
        }, {
          title: 'Tail Lights',
          url: '/catalog/products'
        }, {
          title: 'Fog Lights',
          url: '/catalog/products'
        }, {
          title: 'Turn Signals',
          url: '/catalog/products'
        }, {
          title: 'Switches & Relays',
          url: '/catalog/products'
        }, {
          title: 'Corner Lights',
          url: '/catalog/products'
        }]
      }, {
        title: 'Brakes & Suspension',
        url: '/catalog/products',
        links: [{
          title: 'Brake Discs',
          url: '/catalog/products'
        }, {
          title: 'Wheel Hubs',
          url: '/catalog/products'
        }, {
          title: 'Air Suspension',
          url: '/catalog/products'
        }, {
          title: 'Ball Joints',
          url: '/catalog/products'
        }]
      }]
    }, {
      size: 6,
      links: [{
        title: 'Interior Parts',
        url: '/catalog/products',
        links: [{
          title: 'Floor Mats',
          url: '/catalog/products'
        }, {
          title: 'Gauges',
          url: '/catalog/products'
        }, {
          title: 'Consoles & Organizers',
          url: '/catalog/products'
        }, {
          title: 'Mobile Electronics',
          url: '/catalog/products'
        }]
      }, {
        title: 'Engine & Drivetrain',
        url: '/catalog/products',
        links: [{
          title: 'Air Filters',
          url: '/catalog/products'
        }, {
          title: 'Oxygen Sensors',
          url: '/catalog/products'
        }, {
          title: 'Heating',
          url: '/catalog/products'
        }, {
          title: 'Exhaust',
          url: '/catalog/products'
        }, {
          title: 'Cranks & Pistons',
          url: '/catalog/products'
        }, {
          title: 'Cargo Accessories',
          url: '/catalog/products'
        }]
      }]
    }]
  },
  customFields: {
    ignoreIn: ['spaceship']
  }
}, {
  title: 'Shop',
  url: '/demo/shop/shop-grid-4-sidebar',
  submenu: {
    type: 'menu',
    links: [{
      title: 'Category',
      url: '/demo/shop/category-columns-4-sidebar',
      links: [{
        title: '3 Columns Sidebar',
        url: '/demo/shop/category-columns-3-sidebar'
      }, {
        title: '4 Columns Sidebar',
        url: '/demo/shop/category-columns-4-sidebar'
      }, {
        title: '5 Columns Sidebar',
        url: '/demo/shop/category-columns-5-sidebar'
      }, {
        title: '4 Columns Full',
        url: '/demo/shop/category-columns-4-full'
      }, {
        title: '5 Columns Full',
        url: '/demo/shop/category-columns-5-full'
      }, {
        title: '6 Columns Full',
        url: '/demo/shop/category-columns-6-full'
      }, {
        title: '7 Columns Full',
        url: '/demo/shop/category-columns-7-full'
      }, {
        title: 'Right Sidebar',
        url: '/demo/shop/category-right-sidebar'
      }]
    }, {
      title: 'Shop Grid',
      url: '/demo/shop/shop-grid-4-sidebar',
      links: [{
        title: '6 Columns Full',
        url: '/demo/shop/shop-grid-6-full'
      }, {
        title: '5 Columns Full',
        url: '/demo/shop/shop-grid-5-full'
      }, {
        title: '4 Columns Full',
        url: '/demo/shop/shop-grid-4-full'
      }, {
        title: '4 Columns Sidebar',
        url: '/demo/shop/shop-grid-4-sidebar'
      }, {
        title: '3 Columns Sidebar',
        url: '/demo/shop/shop-grid-3-sidebar'
      }]
    }, {
      title: 'Shop List',
      url: '/demo/shop/shop-list'
    }, {
      title: 'Shop Table',
      url: '/demo/shop/shop-table'
    }, {
      title: 'Shop Right Sidebar',
      url: '/demo/shop/shop-right-sidebar'
    }, {
      title: 'Product',
      url: '/demo/shop/product-full',
      links: [{
        title: 'Full Width',
        url: '/demo/shop/product-full'
      }, {
        title: 'Left Sidebar',
        url: '/demo/shop/product-sidebar'
      }]
    }, {
      title: 'Cart',
      url: '/cart'
    }, {
      title: 'Checkout',
      url: '/cart/checkout'
    }, {
      title: 'Order Success',
      url: '/demo/shop/order-success'
    }, {
      title: 'Wishlist',
      url: '/wishlist'
    }, {
      title: 'Compare',
      url: '/compare'
    }, {
      title: 'Track Order',
      url: '/track-order'
    }]
  }
}, {
  title: 'Blog',
  url: '/demo/blog/classic-right-sidebar',
  submenu: {
    type: 'menu',
    links: [{
      title: 'Blog Classic',
      url: '/demo/blog/classic-right-sidebar',
      links: [{
        title: 'Left Sidebar',
        url: '/demo/blog/classic-left-sidebar'
      }, {
        title: 'Right Sidebar',
        url: '/demo/blog/classic-right-sidebar'
      }]
    }, {
      title: 'Blog List',
      url: '/demo/blog/list-right-sidebar',
      links: [{
        title: 'Left Sidebar',
        url: '/demo/blog/list-left-sidebar'
      }, {
        title: 'Right Sidebar',
        url: '/demo/blog/list-right-sidebar'
      }]
    }, {
      title: 'Blog Grid',
      url: '/demo/blog/grid-right-sidebar',
      links: [{
        title: 'Left Sidebar',
        url: '/demo/blog/grid-left-sidebar'
      }, {
        title: 'Right Sidebar',
        url: '/demo/blog/grid-right-sidebar'
      }]
    }, {
      title: 'Post Page',
      url: '/demo/blog/post-full-width',
      links: [{
        title: 'Full Width',
        url: '/demo/blog/post-full-width'
      }, {
        title: 'Left Sidebar',
        url: '/demo/blog/post-left-sidebar'
      }, {
        title: 'Right Sidebar',
        url: '/demo/blog/post-right-sidebar'
      }]
    }, {
      title: 'Post Without Image',
      url: '/demo/blog/post-without-image'
    }]
  }
}, {
  title: 'Account',
  url: '/account/dashboard',
  submenu: {
    type: 'menu',
    links: [{
      title: 'Login & Register',
      url: '/account/login'
    }, {
      title: 'Dashboard',
      url: '/account/dashboard'
    }, {
      title: 'Garage',
      url: '/account/garage'
    }, {
      title: 'Edit Profile',
      url: '/account/profile'
    }, {
      title: 'Order History',
      url: '/account/orders'
    }, {
      title: 'Order Details',
      url: {
        href: '/account/orders/[id]?id=1',
        as: '/account/orders/1'
      }
    }, {
      title: 'Address Book',
      url: '/account/addresses'
    }, {
      title: 'Edit Address',
      url: {
        href: '/account/addresses/[id]?id=new',
        as: '/account/addresses/new'
      }
    }, {
      title: 'Change Password',
      url: '/account/password'
    }]
  }
}, {
  title: 'Pages',
  url: '/about-us',
  submenu: {
    type: 'menu',
    links: [{
      title: 'About Us',
      url: '/about-us'
    }, {
      title: 'Contact Us v1',
      url: '/demo/site/contact-us-v1'
    }, {
      title: 'Contact Us v2',
      url: '/demo/site/contact-us-v2'
    }, {
      title: '404',
      url: '/demo/site/not-found'
    }, {
      title: 'Terms And Conditions',
      url: '/terms'
    }, {
      title: 'FAQ',
      url: '/faq'
    }, {
      title: 'Components',
      url: '/demo/site/components'
    }, {
      title: 'Typography',
      url: '/demo/site/typography'
    }]
  }
}, {
  title: 'Buy Theme',
  url: 'https://themeforest.net/user/kos9/portfolio',
  customFields: {
    anchorProps: {
      target: '_blank'
    },
    ignoreIn: ['spaceship']
  }
}];
/* harmony default export */ var headerMainMenu = (dataHeaderMainMenu);
// CONCATENATED MODULE: ./src/components/header/MainMenu.tsx
var MainMenu_jsx = external_react_default.a.createElement;

function MainMenu_extends() { MainMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MainMenu_extends.apply(this, arguments); }

// react
 // third-party

 // application





 // data



function MainMenu() {
  const items = headerMainMenu;
  const {
    0: currentItem,
    1: setCurrentItem
  } = Object(external_react_["useState"])(null);
  const options = useOptions();
  const desktopLayout = options.desktopHeaderLayout;

  const handleItemMouseEnter = item => {
    setCurrentItem(item);
  };

  const handleItemMouseLeave = item => {
    if (currentItem === item) {
      setCurrentItem(null);
    }
  };

  const handleItemClick = () => {
    setCurrentItem(null);
  };

  return MainMenu_jsx("div", {
    className: "main-menu"
  }, MainMenu_jsx("ul", {
    className: "main-menu__list"
  }, items.map((item, index) => {
    var _item$customFields, _item$customFields$ig, _item$submenu, _item$submenu2, _item$customFields2, _item$submenu3, _item$submenu4;

    if ((_item$customFields = item.customFields) === null || _item$customFields === void 0 ? void 0 : (_item$customFields$ig = _item$customFields.ignoreIn) === null || _item$customFields$ig === void 0 ? void 0 : _item$customFields$ig.includes(desktopLayout)) {
      return null;
    }

    const itemHasSubmenu = !!item.submenu;
    const itemClasses = external_classnames_default()('main-menu__item', {
      'main-menu__item--has-submenu': itemHasSubmenu,
      'main-menu__item--submenu--menu': ((_item$submenu = item.submenu) === null || _item$submenu === void 0 ? void 0 : _item$submenu.type) === 'menu',
      'main-menu__item--submenu--megamenu': ((_item$submenu2 = item.submenu) === null || _item$submenu2 === void 0 ? void 0 : _item$submenu2.type) === 'megamenu',
      'main-menu__item--hover': item === currentItem
    });
    return MainMenu_jsx("li", {
      className: itemClasses,
      key: index,
      onMouseEnter: () => handleItemMouseEnter(item),
      onMouseLeave: () => handleItemMouseLeave(item)
    }, MainMenu_jsx(AppLink["a" /* default */], MainMenu_extends({
      className: "main-menu__link",
      href: item.url,
      onClick: handleItemClick
    }, (_item$customFields2 = item.customFields) === null || _item$customFields2 === void 0 ? void 0 : _item$customFields2.anchorProps), item.title, itemHasSubmenu && MainMenu_jsx(svg["b" /* ArrowDownSm7x5Svg */], null)), itemHasSubmenu && MainMenu_jsx("div", {
      className: "main-menu__submenu"
    }, ((_item$submenu3 = item.submenu) === null || _item$submenu3 === void 0 ? void 0 : _item$submenu3.type) === 'menu' && MainMenu_jsx(header_Menu, {
      items: item.submenu.links,
      onItemClick: handleItemClick
    }), ((_item$submenu4 = item.submenu) === null || _item$submenu4 === void 0 ? void 0 : _item$submenu4.type) === 'megamenu' && MainMenu_jsx("div", {
      className: external_classnames_default()('main-menu__megamenu', `main-menu__megamenu--size--${item.submenu.size}`)
    }, MainMenu_jsx(header_Megamenu, {
      menu: item.submenu,
      onItemClick: handleItemClick
    }))));
  })));
}

/* harmony default export */ var header_MainMenu = (MainMenu);
// EXTERNAL MODULE: ./src/components/shared/RadioButton.tsx
var RadioButton = __webpack_require__("OHag");

// EXTERNAL MODULE: ./src/components/shared/Rating.tsx
var Rating = __webpack_require__("Kf4p");

// EXTERNAL MODULE: ./src/components/shared/VehicleForm.tsx
var VehicleForm = __webpack_require__("K5+J");

// EXTERNAL MODULE: ./src/api/index.ts + 39 modules
var api = __webpack_require__("efbE");

// EXTERNAL MODULE: ./src/store/garage/garageHooks.ts + 1 modules
var garageHooks = __webpack_require__("1pP5");

// CONCATENATED MODULE: ./src/components/header/Search.tsx
var Search_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application













function Search() {
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    0: query,
    1: setQuery
  } = Object(external_react_["useState"])('');
  const {
    0: suggestionsIsOpen,
    1: setSuggestionsIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: hasSuggestions,
    1: setHasSuggestions
  } = Object(external_react_["useState"])(false);
  const {
    0: products,
    1: setProducts
  } = Object(external_react_["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(external_react_["useState"])([]);
  const {
    0: vehiclePickerIsOpen,
    1: setVehiclePickerIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: vehiclePanel,
    1: setVehiclePanel
  } = Object(external_react_["useState"])('list');
  const {
    0: addVehicle,
    1: setAddVehicle
  } = Object(external_react_["useState"])(null);
  const vehicles = Object(garageHooks["f" /* useUserVehicles */])();
  const garageAddItem = Object(garageHooks["a" /* useGarageAddItem */])();
  const garageRemoveItem = Object(garageHooks["c" /* useGarageRemoveItem */])();
  const hasVehicles = vehicles.length > 0;
  const selectVehicleButtonRef = Object(external_react_["useRef"])(null);
  const vehiclePickerDropdownRef = Object(external_react_["useRef"])(null);
  const currentVehicle = Object(garageHooks["b" /* useGarageCurrent */])();
  const garageSetCurrent = Object(garageHooks["d" /* useGarageSetCurrent */])();
  const searchCancelFnRef = Object(external_react_["useRef"])(() => {});
  const rootRef = Object(external_react_["useRef"])(null);

  const search = value => {
    searchCancelFnRef.current();
    let canceled = false;

    searchCancelFnRef.current = () => {
      canceled = true;
    };

    api["d" /* shopApi */].getSearchSuggestions(value, {
      limitProducts: 3,
      limitCategories: 4
    }).then(result => {
      if (canceled) {
        return;
      }

      if (result.products.length === 0 && result.categories.length === 0) {
        setHasSuggestions(false);
        return;
      }

      setHasSuggestions(true);
      setProducts(result.products);
      setCategories(result.categories);
    });
    setQuery(value);
  };

  const toggleSuggestions = force => {
    setSuggestionsIsOpen(prevState => {
      const newState = force !== undefined ? force : !prevState;

      if (newState) {
        setVehiclePickerIsOpen(false);
      }

      return newState;
    });
  };

  const toggleVehiclePicker = force => {
    setVehiclePickerIsOpen(prevState => {
      const newState = force !== undefined ? force : !prevState;

      if (newState) {
        setSuggestionsIsOpen(false);
      }

      return newState;
    });
  };

  const handleInputFocus = event => {
    const input = event.currentTarget;
    toggleSuggestions(true);
    search(input.value);
  };

  const handleInputChange = event => {
    const input = event.currentTarget;
    search(input.value);
  };

  const handleButtonClick = () => {
    toggleVehiclePicker();
  };

  const handleChangeCurrentVehicle = event => {
    const vehicleId = event.currentTarget.value === '' ? null : parseFloat(event.currentTarget.value);
    garageSetCurrent(vehicleId);
  };

  const handleVehicleChange = vehicle => {
    setAddVehicle(vehicle);
  };

  const handleRootBlur = () => {
    setTimeout(() => {
      if (document.activeElement === document.body) {
        return;
      } // Close suggestions if the focus received an external element.


      if (document.activeElement && document.activeElement.closest('.search') !== rootRef.current) {
        toggleSuggestions(false);
      }
    }, 10);
  };

  Object(hooks["c" /* useGlobalMousedown */])(event => {
    const outsideButton = selectVehicleButtonRef.current && !selectVehicleButtonRef.current.contains(event.target);
    const outsideDropdown = vehiclePickerDropdownRef.current && !vehiclePickerDropdownRef.current.contains(event.target);

    if (outsideButton && outsideDropdown) {
      setVehiclePickerIsOpen(false);
    }
  }, [setVehiclePickerIsOpen, selectVehicleButtonRef]);
  Object(hooks["c" /* useGlobalMousedown */])(event => {
    const outside = rootRef.current && !rootRef.current.contains(event.target);

    if (outside && suggestionsIsOpen) {
      setHasSuggestions(false);
    }
  }, [rootRef, suggestionsIsOpen, setHasSuggestions]);
  const searchPlaceholder = currentVehicle ? intl.formatMessage({
    id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE'
  }, currentVehicle) : intl.formatMessage({
    id: 'INPUT_SEARCH_PLACEHOLDER'
  });
  return Search_jsx("div", {
    className: "search",
    ref: rootRef,
    onBlur: handleRootBlur
  }, Search_jsx("form", {
    className: "search__body"
  }, Search_jsx("div", {
    className: "search__shadow"
  }), Search_jsx("label", {
    className: "sr-only",
    htmlFor: "site-search"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_SEARCH_LABEL"
  })), Search_jsx("input", {
    type: "text",
    className: "search__input",
    id: "site-search",
    autoCapitalize: "off",
    autoComplete: "off",
    spellCheck: "false",
    name: "search",
    value: query,
    placeholder: searchPlaceholder,
    onFocus: handleInputFocus,
    onChange: handleInputChange
  }), Search_jsx("button", {
    type: "button",
    className: external_classnames_default()('search__button search__button--start', {
      'search__button--hover': vehiclePickerIsOpen
    }),
    onClick: handleButtonClick,
    ref: selectVehicleButtonRef
  }, Search_jsx("span", {
    className: "search__button-icon"
  }, Search_jsx(svg["i" /* Car20Svg */], null)), Search_jsx("span", {
    className: "search__button-title"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_SEARCH_SELECT_VEHICLE_DESKTOP"
  }))), Search_jsx("button", {
    className: "search__button search__button--end",
    type: "submit"
  }, Search_jsx("span", {
    className: "search__button-icon"
  }, Search_jsx(svg["L" /* Search20Svg */], null))), Search_jsx("div", {
    className: "search__box"
  }), Search_jsx("div", {
    className: "search__decor"
  }, Search_jsx("div", {
    className: "search__decor-start"
  }), Search_jsx("div", {
    className: "search__decor-end"
  })), Search_jsx("div", {
    className: external_classnames_default()('search__dropdown', 'search__dropdown--suggestions', 'suggestions', {
      'search__dropdown--open': suggestionsIsOpen && hasSuggestions
    })
  }, products.length > 0 && Search_jsx("div", {
    className: "suggestions__group"
  }, Search_jsx("div", {
    className: "suggestions__group-title"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_PRODUCTS"
  })), Search_jsx("div", {
    className: "suggestions__group-content"
  }, products.map(product => Search_jsx(AppLink["a" /* default */], {
    key: product.id,
    href: url["a" /* default */].product(product),
    className: "suggestions__item suggestions__product",
    onClick: () => toggleSuggestions(false)
  }, Search_jsx("div", {
    className: "suggestions__product-image"
  }, Search_jsx(AppImage["a" /* default */], {
    src: product.images && product.images[0]
  })), Search_jsx("div", {
    className: "suggestions__product-info"
  }, Search_jsx("div", {
    className: "suggestions__product-name"
  }, product.name), Search_jsx("div", {
    className: "suggestions__product-rating"
  }, Search_jsx("div", {
    className: "suggestions__product-rating-stars"
  }, Search_jsx(Rating["a" /* default */], {
    value: product.rating || 0
  })), Search_jsx("div", {
    className: "suggestions__product-rating-label"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_RATING_LABEL",
    values: {
      rating: product.rating,
      reviews: product.reviews
    }
  })))), Search_jsx("div", {
    className: " suggestions__product-price"
  }, Search_jsx(CurrencyFormat["a" /* default */], {
    value: product.price
  })))))), categories.length > 0 && Search_jsx("div", {
    className: "suggestions__group"
  }, Search_jsx("div", {
    className: "suggestions__group-title"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_CATEGORIES"
  })), Search_jsx("div", {
    className: "suggestions__group-content"
  }, categories.map(category => Search_jsx(AppLink["a" /* default */], {
    key: category.id,
    href: url["a" /* default */].category(category),
    className: "suggestions__item suggestions__category",
    onClick: () => toggleSuggestions(false)
  }, category.name))))), Search_jsx("div", {
    className: external_classnames_default()('search__dropdown', 'search__dropdown--vehicle-picker', 'vehicle-picker', {
      'search__dropdown--open': vehiclePickerIsOpen
    }),
    ref: vehiclePickerDropdownRef
  }, Search_jsx("div", {
    className: "search__dropdown-arrow"
  }), Search_jsx("div", {
    className: external_classnames_default()('vehicle-picker__panel', {
      'vehicle-picker__panel--active': vehiclePanel === 'list' && hasVehicles
    })
  }, Search_jsx("div", {
    className: "vehicle-picker__panel-body"
  }, Search_jsx("div", {
    className: "vehicle-picker__text"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS"
  })), Search_jsx("div", {
    className: "vehicles-list"
  }, Search_jsx("div", {
    className: "vehicles-list__body"
  }, Search_jsx("label", {
    className: "vehicles-list__item"
  }, Search_jsx(RadioButton["a" /* default */], {
    className: "vehicles-list__item-radio",
    name: "header-current-vehicle",
    defaultValue: "",
    checked: currentVehicle === null,
    onChange: handleChangeCurrentVehicle
  }), Search_jsx("span", {
    className: " vehicles-list__item-info"
  }, Search_jsx("span", {
    className: " vehicles-list__item-name"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_ALL_VEHICLES"
  })))), vehicles.map((vehicle, index) => Search_jsx(external_react_default.a.Fragment, {
    key: index
  }, Search_jsx("label", {
    className: "vehicles-list__item"
  }, Search_jsx(RadioButton["a" /* default */], {
    className: "vehicles-list__item-radio",
    name: "header-current-vehicle",
    defaultValue: vehicle.id,
    checked: (currentVehicle === null || currentVehicle === void 0 ? void 0 : currentVehicle.id) === vehicle.id,
    onChange: handleChangeCurrentVehicle
  }), Search_jsx("span", {
    className: "vehicles-list__item-info"
  }, Search_jsx("span", {
    className: "vehicles-list__item-name"
  }, `${vehicle.year} ${vehicle.make} ${vehicle.model}`), Search_jsx("span", {
    className: "vehicles-list__item-details"
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_VEHICLE_ENGINE",
    values: {
      engine: vehicle.engine
    }
  }))), Search_jsx(AsyncAction["a" /* default */], {
    action: () => garageRemoveItem(vehicle.id),
    render: ({
      run,
      loading
    }) => Search_jsx("button", {
      type: "button",
      className: external_classnames_default()('vehicles-list__item-remove', {
        'vehicles-list__item-remove--loading': loading
      }),
      onClick: run
    }, Search_jsx(svg["K" /* RecycleBin16Svg */], null))
  })))))), Search_jsx("div", {
    className: "vehicle-picker__actions"
  }, Search_jsx("button", {
    type: "button",
    className: "btn btn-primary btn-sm",
    onClick: () => setVehiclePanel('form')
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_ADD_VEHICLE"
  }))))), Search_jsx("div", {
    className: external_classnames_default()('vehicle-picker__panel', {
      'vehicle-picker__panel--active': vehiclePanel === 'form' || !hasVehicles
    })
  }, Search_jsx("div", {
    className: "vehicle-picker__panel-body"
  }, Search_jsx(VehicleForm["a" /* default */], {
    location: "search",
    onVehicleChange: handleVehicleChange
  }), Search_jsx("div", {
    className: "vehicle-picker__actions"
  }, hasVehicles && Search_jsx("div", {
    className: "search__car-selector-link"
  }, Search_jsx(AppLink["a" /* default */], {
    anchor: true,
    onClick: event => {
      event.preventDefault();
      setVehiclePanel('list');
    }
  }, Search_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_BACK_TO_LIST"
  }))), Search_jsx(AsyncAction["a" /* default */], {
    action: () => addVehicle ? garageAddItem(addVehicle.id) : Promise.resolve(),
    render: ({
      run,
      loading
    }) => Search_jsx("button", {
      type: "button",
      className: external_classnames_default()('btn', 'btn-primary', 'btn-sm', {
        'btn-loading': loading
      }),
      disabled: addVehicle === null,
      onClick: run
    }, Search_jsx(external_react_intl_["FormattedMessage"], {
      id: "BUTTON_ADD_VEHICLE"
    }))
  })))))));
}
/* harmony default export */ var header_Search = (Search);
// CONCATENATED MODULE: ./src/components/header/Dropdown.tsx
var Dropdown_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application





function Dropdown(props) {
  const {
    label,
    title,
    items = [],
    onItemClick
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const rootRef = Object(external_react_["useRef"])(null);
  const hasLabel = !!label;
  const hasTitle = !!title;
  const classes = external_classnames_default()('topbar__item-button topbar__menu', {
    'topbar__menu--open': isOpen
  });

  const handleButtonClick = () => {
    setIsOpen(prev => !prev);
  };

  const handleItemClick = item => {
    setIsOpen(false);

    if (onItemClick) {
      onItemClick(item);
    }
  };

  Object(hooks["c" /* useGlobalMousedown */])(event => {
    if (rootRef.current && !rootRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, [setIsOpen, rootRef]);
  return Dropdown_jsx("div", {
    className: classes,
    ref: rootRef
  }, Dropdown_jsx("button", {
    className: "topbar__button topbar__button--has-arrow topbar__menu-button",
    type: "button",
    onClick: handleButtonClick
  }, hasLabel && Dropdown_jsx("span", {
    className: "topbar__button-label"
  }, label), hasTitle && Dropdown_jsx("span", {
    className: "topbar__button-title"
  }, title), Dropdown_jsx("span", {
    className: "topbar__button-arrow"
  }, Dropdown_jsx(svg["b" /* ArrowDownSm7x5Svg */], null))), Dropdown_jsx("div", {
    className: "topbar__menu-body"
  }, items.map((item, index) => Dropdown_jsx("button", {
    key: index,
    className: "topbar__menu-item",
    type: "button",
    onClick: () => handleItemClick(item)
  }, !!item.image && Dropdown_jsx(AppImage["a" /* default */], {
    src: item.image,
    alt: item.title
  }), Dropdown_jsx("span", null, item.title)))));
}

/* harmony default export */ var header_Dropdown = (Dropdown);
// EXTERNAL MODULE: ./src/store/currency/currencyHooks.ts + 1 modules
var currencyHooks = __webpack_require__("UvXe");

// EXTERNAL MODULE: ./src/data/shopCurrencies.ts
var shopCurrencies = __webpack_require__("9Rzb");

// CONCATENATED MODULE: ./src/components/header/DropdownCurrency.tsx
var DropdownCurrency_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application


 // data



function DropdownCurrency() {
  const currency = Object(currencyHooks["a" /* useCurrency */])();
  const currencyChange = Object(currencyHooks["b" /* useCurrencyChange */])();

  const handleItemClick = item => {
    currencyChange(item.currency);
  };

  const items = Object(external_react_["useMemo"])(() => shopCurrencies["b" /* default */].map(eachCurrency => ({
    title: `${eachCurrency.symbol} ${eachCurrency.name}`,
    currency: eachCurrency
  })), []);

  const label = DropdownCurrency_jsx(external_react_default.a.Fragment, null, DropdownCurrency_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_TOPBAR_CURRENCY"
  }), ":");

  return DropdownCurrency_jsx(header_Dropdown, {
    label: label,
    title: currency.code,
    items: items,
    onItemClick: handleItemClick
  });
}

/* harmony default export */ var header_DropdownCurrency = (DropdownCurrency);
// EXTERNAL MODULE: ./src/services/i18n/hooks.ts
var i18n_hooks = __webpack_require__("+oNx");

// CONCATENATED MODULE: ./src/components/header/DropdownLanguage.tsx
var DropdownLanguage_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application



// data


function DropdownLanguage() {
  const language = Object(i18n_hooks["b" /* useLanguage */])();
  const setLocale = Object(i18n_hooks["d" /* useSetLocale */])();

  const handleItemClick = async item => {
    setLocale(item.language.locale);
  };

  const items = Object(external_react_["useMemo"])(() => Object(utils["a" /* getAllLanguages */])().map(eachLanguage => ({
    title: eachLanguage.name,
    image: eachLanguage.icon,
    language: eachLanguage
  })), []);

  const label = DropdownLanguage_jsx(external_react_default.a.Fragment, null, DropdownLanguage_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_TOPBAR_LANGUAGE"
  }), ":");

  return DropdownLanguage_jsx(header_Dropdown, {
    label: label,
    title: language.code.toUpperCase(),
    items: items,
    onItemClick: handleItemClick
  });
}

/* harmony default export */ var header_DropdownLanguage = (DropdownLanguage);
// EXTERNAL MODULE: ./src/store/compare/compareHooks.ts + 1 modules
var compareHooks = __webpack_require__("3KuR");

// CONCATENATED MODULE: ./src/components/header/Topbar.tsx
var Topbar_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application







function Topbar(props) {
  const {
    layout
  } = props;
  const compare = Object(compareHooks["a" /* useCompare */])();
  const rootClasses = external_classnames_default()('topbar', `topbar--${layout}`);
  return Topbar_jsx("div", {
    className: rootClasses
  }, layout === 'spaceship-start' && Topbar_jsx(external_react_default.a.Fragment, null, Topbar_jsx("div", {
    className: "topbar__item-text d-none d-xxl-flex"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_TOPBAR_PHONE",
    values: {
      phone: '(800) 060-0730'
    }
  })), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageAboutUs(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ABOUT_US"
  }))), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageContactUs(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_CONTACTS"
  }))), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].trackOrder(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_TRACK_ORDER"
  })))), layout === 'classic' && Topbar_jsx(external_react_default.a.Fragment, null, Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageAboutUs(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ABOUT_US"
  }))), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageContactUs(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_CONTACTS"
  }))), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageStoreLocation(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_STORE_LOCATION"
  }))), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].trackOrder(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_TRACK_ORDER"
  }))), Topbar_jsx("div", {
    className: "topbar__item-text"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].blog(),
    className: "topbar__link"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_BLOG"
  }))), Topbar_jsx("div", {
    className: "topbar__item-spring"
  })), layout !== 'spaceship-start' && Topbar_jsx(external_react_default.a.Fragment, null, Topbar_jsx("div", {
    className: "topbar__item-button"
  }, Topbar_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].compare(),
    className: "topbar__button"
  }, Topbar_jsx("span", {
    className: "topbar__button-label"
  }, Topbar_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_TOPBAR_COMPARE"
  }), ":"), Topbar_jsx("span", {
    className: "topbar__button-title"
  }, compare.items.length))), Topbar_jsx(header_DropdownCurrency, null), Topbar_jsx(header_DropdownLanguage, null)));
}

/* harmony default export */ var header_Topbar = (Topbar);
// EXTERNAL MODULE: ./src/store/wishlist/wishlistHooks.ts + 1 modules
var wishlistHooks = __webpack_require__("a61X");

// CONCATENATED MODULE: ./src/components/header/Header.tsx
var Header_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application


















function Header() {
  const user = Object(userHooks["a" /* useUser */])();
  const wishlist = Object(wishlistHooks["a" /* useWishlist */])();
  const options = useOptions();
  const desktopLayout = options.desktopHeaderLayout;
  const departmentsLabel = Object(external_react_["useMemo"])(() => desktopLayout === 'spaceship' ? Header_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_DEPARTMENTS"
  }) : Header_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_DEPARTMENTS_LONG"
  }), [desktopLayout]);
  const accountIndicatorLabel = user ? user.email : Header_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_INDICATOR_ACCOUNT_LABEL"
  });

  const accountIndicatorValue = Header_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_INDICATOR_ACCOUNT_VALUE"
  });

  const accountIndicatorCtrl = Object(external_react_["useRef"])(null);
  const cart = Object(cartHooks["a" /* useCart */])();

  const cartIndicatorLabel = Header_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_INDICATOR_CART_LABEL"
  });

  const cartIndicatorCtrl = Object(external_react_["useRef"])(null);
  return Header_jsx("div", {
    className: "header"
  }, Header_jsx("div", {
    className: "header__megamenu-area megamenu-area"
  }), desktopLayout === 'spaceship' && Header_jsx(external_react_default.a.Fragment, null, Header_jsx("div", {
    className: "header__topbar-start-bg"
  }), Header_jsx("div", {
    className: "header__topbar-start"
  }, Header_jsx(header_Topbar, {
    layout: "spaceship-start"
  })), Header_jsx("div", {
    className: "header__topbar-end-bg"
  }), Header_jsx("div", {
    className: "header__topbar-end"
  }, Header_jsx(header_Topbar, {
    layout: "spaceship-end"
  }))), desktopLayout === 'classic' && Header_jsx(external_react_default.a.Fragment, null, Header_jsx("div", {
    className: "header__topbar-classic-bg"
  }), Header_jsx("div", {
    className: "header__topbar-classic"
  }, Header_jsx(header_Topbar, {
    layout: "classic"
  }))), Header_jsx("div", {
    className: "header__navbar"
  }, Header_jsx("div", {
    className: "header__navbar-departments"
  }, Header_jsx(header_Departments, {
    label: departmentsLabel
  })), Header_jsx("div", {
    className: " header__navbar-menu"
  }, Header_jsx(header_MainMenu, null)), desktopLayout === 'classic' && Header_jsx("div", {
    className: "header__navbar-phone phone"
  }, Header_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageContactUs(),
    className: "phone__body"
  }, Header_jsx("div", {
    className: "phone__title"
  }, Header_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_CALL_US"
  })), Header_jsx("div", {
    className: "phone__number"
  }, "800 060-0730")))), Header_jsx(header_Logo, {
    className: "header__logo"
  }), Header_jsx("div", {
    className: "header__search"
  }, Header_jsx(header_Search, null)), Header_jsx("div", {
    className: "header__indicators"
  }, Header_jsx(header_Indicator, {
    href: url["a" /* default */].wishlist(),
    icon: Header_jsx(svg["z" /* Heart32Svg */], null),
    counter: wishlist.items.length
  }), Header_jsx(header_Indicator, {
    href: url["a" /* default */].accountDashboard(),
    icon: Header_jsx(svg["I" /* Person32Svg */], null),
    label: accountIndicatorLabel,
    value: accountIndicatorValue,
    trigger: "click",
    controllerRef: accountIndicatorCtrl
  }, Header_jsx(header_AccountMenu, {
    onCloseMenu: () => {
      var _accountIndicatorCtrl;

      return (_accountIndicatorCtrl = accountIndicatorCtrl.current) === null || _accountIndicatorCtrl === void 0 ? void 0 : _accountIndicatorCtrl.close();
    }
  })), Header_jsx(header_Indicator, {
    href: url["a" /* default */].cart(),
    icon: Header_jsx(svg["k" /* Cart32Svg */], null),
    label: cartIndicatorLabel,
    value: Header_jsx(CurrencyFormat["a" /* default */], {
      value: cart.total
    }),
    counter: cart.quantity,
    trigger: "click",
    controllerRef: cartIndicatorCtrl
  }, Header_jsx(header_Dropcart, {
    onCloseMenu: () => {
      var _cartIndicatorCtrl$cu;

      return (_cartIndicatorCtrl$cu = cartIndicatorCtrl.current) === null || _cartIndicatorCtrl$cu === void 0 ? void 0 : _cartIndicatorCtrl$cu.close();
    }
  }))));
}

/* harmony default export */ var header_Header = (external_react_default.a.memo(Header));
// CONCATENATED MODULE: ./src/components/mobile/MobileLogo.tsx
var MobileLogo_jsx = external_react_default.a.createElement;
// react


function MobileLogo() {
  return MobileLogo_jsx("div", {
    className: "mobile-logo"
  }, MobileLogo_jsx("svg", {
    width: "130",
    height: "20"
  }, MobileLogo_jsx("path", {
    className: "mobile-logo__part-one",
    d: "M40,19.9c-0.3,0-0.7,0.1-1,0.1h-4.5c-0.8,0-1.5-0.7-1.5-1.5v-17C33,0.7,33.7,0,34.5,0H39c0.3,0,0.7,0,1,0.1\nc4.5,0.5,8,4.3,8,8.9v2C48,15.6,44.5,19.5,40,19.9z M44,9.5C44,6.7,41.8,4,39,4h-0.8C37.5,4,37,4.5,37,5.2v9.6\nc0,0.7,0.5,1.2,1.2,1.2H39c2.8,0,5-2.7,5-5.5V9.5z M29.5,20h-11c-0.8,0-1.5-0.7-1.5-1.5v-17C17,0.7,17.7,0,18.5,0h11\nC30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4H21v4h6.5C28.3,8,29,8.7,29,9.5v1c0,0.8-0.7,1.5-1.5,1.5H21v4h8.5\nc0.8,0,1.5,0.7,1.5,1.5v1C31,19.3,30.3,20,29.5,20z M14.8,17.8c0.6,1-0.1,2.3-1.3,2.3h-2L8,14H4v4.5C4,19.3,3.3,20,2.5,20h-1\nC0.7,20,0,19.3,0,18.5v-17C0,0.7,0.7,0,1.5,0H8c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L14.8,17.8z M9,4.2\nC8.7,4.1,8.3,4,8,4H5C4.4,4,4,4.4,4,5v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.7-0.3,0.9-0.5C10.6,8.8,11,7.9,11,7\nC11,5.7,10.2,4.6,9,4.2z"
  }), MobileLogo_jsx("path", {
    className: "mobile-logo__part-two",
    d: "M128.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7c-0.2-0.3-0.4-0.6-0.8-0.8c-0.5-0.3-1.4-0.5-2.1-0.5c-1.5,0-2.8,0.9-2.8,2\nc0,0.7,0.5,1.3,1.2,1.6c0.8,0.4,1.1,1.3,0.7,2.1l-0.4,0.9c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2c-1-1.1-1.7-2.5-1.7-4\nc0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C130.3,4.9,129.6,6,128.6,6z M113.5,4H109v14.5c0,0.8-0.7,1.5-1.5,1.5h-1\nc-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C99.7,4,99,3.3,99,2.5v-1c0-0.8,0.7-1.5,1.5-1.5h13c0.8,0,1.5,0.7,1.5,1.5v1C115,3.3,114.3,4,113.5,4\nz M97.8,17.8c0.6,1-0.1,2.3-1.3,2.3h-2L91,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17C83,0.7,83.7,0,84.5,0H91\nc0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L97.8,17.8z M92,4.2C91.7,4.1,91.3,4,91,4h-3c-0.6,0-1,0.4-1,1v4\nc0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.7-0.3,0.9-0.5C93.6,8.8,94,7.9,94,7C94,5.7,93.2,4.6,92,4.2z M79.5,20h-1.1\nc-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1L68,19c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l6.2-17c0.2-0.6,0.8-1,1.4-1h1.6\nc0.6,0,1.2,0.4,1.4,1l6.2,17C81.3,19,80.5,20,79.5,20z M72.5,6.6L70.9,11h3.2L72.5,6.6z M58,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1\nc-0.8,0-1.5-0.7-1.5-1.5v-17C50,0.7,50.7,0,51.5,0H58c3.9,0,7,3.1,7,7S61.9,14,58,14z M61,7c0-1.3-0.8-2.4-2-2.8\nC58.7,4.1,58.3,4,58,4h-3c-0.5,0-1,0.4-1,1v4c0,0.6,0.5,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.7-0.3,0.9-0.5C60.6,8.8,61,7.9,61,7z\nM118.4,14h1c0.5,0,0.9,0.3,1.2,0.7c0.2,0.3,0.4,0.6,0.8,0.8c0.5,0.3,1.4,0.5,2.1,0.5c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6\nc-0.8-0.4-1.1-1.3-0.7-2.1l0.4-0.9c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4c0,3.3-2.9,6-6.5,6\nc-2.8,0-5.5-1.7-6.4-4C116.7,15.1,117.4,14,118.4,14z"
  })));
}

/* harmony default export */ var mobile_MobileLogo = (MobileLogo);
// EXTERNAL MODULE: ./src/components/shared/VehiclePickerModal.tsx
var VehiclePickerModal = __webpack_require__("iqdC");

// EXTERNAL MODULE: ./src/store/mobile-menu/mobileMenuReducer.ts
var mobileMenuReducer = __webpack_require__("Neop");

// EXTERNAL MODULE: ./src/store/mobile-menu/mobileMenuActionTypes.ts
var mobileMenuActionTypes = __webpack_require__("Wjoj");

// CONCATENATED MODULE: ./src/store/mobile-menu/mobileMenuActions.ts
// application

function mobileMenuActions_mobileMenuOpen() {
  return {
    type: mobileMenuActionTypes["b" /* MOBILE_MENU_OPEN */]
  };
}
function mobileMenuActions_mobileMenuClose() {
  return {
    type: mobileMenuActionTypes["a" /* MOBILE_MENU_CLOSE */]
  };
}
// CONCATENATED MODULE: ./src/store/mobile-menu/mobileMenuHooks.ts
// application



const useMobileMenu = () => Object(store_hooks["b" /* useAppSelector */])(state => state[mobileMenuReducer["a" /* MOBILE_MENU_NAMESPACE */]]);
const useMobileMenuOpen = () => Object(store_hooks["a" /* useAppAction */])(mobileMenuActions_mobileMenuOpen);
const useMobileMenuClose = () => Object(store_hooks["a" /* useAppAction */])(mobileMenuActions_mobileMenuClose);
// CONCATENATED MODULE: ./src/components/mobile/MobileHeader.tsx
var MobileHeader_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application












function MobileHeader() {
  const intl = Object(external_react_intl_["useIntl"])();
  const mobileMenuOpen = useMobileMenuOpen();
  const wishlist = Object(wishlistHooks["a" /* useWishlist */])();
  const cart = Object(cartHooks["a" /* useCart */])();
  const vehicle = Object(garageHooks["b" /* useGarageCurrent */])();
  const garageSetCurrent = Object(garageHooks["d" /* useGarageSetCurrent */])();
  const searchFormRef = Object(external_react_["useRef"])(null);
  const searchInputRef = Object(external_react_["useRef"])(null);
  const searchIndicatorRef = Object(external_react_["useRef"])(null);
  const {
    0: searchIsOpen,
    1: setSearchIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: vehiclePickerIsOpen,
    1: setVehiclePickerIsOpen
  } = Object(external_react_["useState"])(false);

  const openSearch = () => {
    setSearchIsOpen(true);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const closeSearch = () => {
    setSearchIsOpen(false);
  };

  const openVehiclePicker = () => {
    setVehiclePickerIsOpen(true);
  };

  const onVehiclePickerClose = () => {
    setVehiclePickerIsOpen(false);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const onVehiclePickerSelect = selectedVehicle => {
    garageSetCurrent((selectedVehicle === null || selectedVehicle === void 0 ? void 0 : selectedVehicle.id) || null);
  };

  const onSearchSubmit = event => {
    event.preventDefault();
  };

  Object(hooks["c" /* useGlobalMousedown */])(event => {
    const outsideIndicator = searchIndicatorRef.current && !searchIndicatorRef.current.contains(event.target);
    const outsideForm = searchFormRef.current && !searchFormRef.current.contains(event.target);

    if (outsideIndicator && outsideForm) {
      if (searchIsOpen && !vehiclePickerIsOpen) {
        closeSearch();
      }
    }
  }, [searchFormRef, searchIndicatorRef, searchIsOpen, vehiclePickerIsOpen]);
  const searchPlaceholder = vehicle ? intl.formatMessage({
    id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE'
  }, vehicle) : intl.formatMessage({
    id: 'INPUT_SEARCH_PLACEHOLDER'
  });
  return MobileHeader_jsx("div", {
    className: "mobile-header"
  }, MobileHeader_jsx(VehiclePickerModal["a" /* default */], {
    value: vehicle,
    isOpen: vehiclePickerIsOpen,
    onClose: onVehiclePickerClose,
    onSelect: onVehiclePickerSelect
  }), MobileHeader_jsx("div", {
    className: "container"
  }, MobileHeader_jsx("div", {
    className: "mobile-header__body"
  }, MobileHeader_jsx("button", {
    className: "mobile-header__menu-button",
    type: "button",
    onClick: mobileMenuOpen
  }, MobileHeader_jsx(svg["F" /* Menu18x14Svg */], null)), MobileHeader_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].home(),
    className: "mobile-header__logo"
  }, MobileHeader_jsx(mobile_MobileLogo, null)), MobileHeader_jsx("div", {
    ref: searchFormRef,
    className: external_classnames_default()('mobile-header__search mobile-search', {
      'mobile-header__search--open': searchIsOpen
    })
  }, MobileHeader_jsx("form", {
    className: "mobile-search__body",
    onSubmit: onSearchSubmit
  }, MobileHeader_jsx("label", {
    className: "sr-only",
    htmlFor: "mobile-site-search"
  }, MobileHeader_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_SEARCH_LABEL"
  })), MobileHeader_jsx("input", {
    ref: searchInputRef,
    type: "text",
    id: "mobile-site-search",
    className: "mobile-search__input",
    placeholder: searchPlaceholder
  }), MobileHeader_jsx("button", {
    type: "button",
    className: "mobile-search__vehicle-picker",
    onClick: openVehiclePicker
  }, MobileHeader_jsx(svg["i" /* Car20Svg */], null), MobileHeader_jsx("span", {
    className: "mobile-search__vehicle-picker-label"
  }, MobileHeader_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_SEARCH_SELECT_VEHICLE_MOBILE"
  }))), MobileHeader_jsx("button", {
    type: "submit",
    className: "mobile-search__button mobile-search__button--search"
  }, MobileHeader_jsx(svg["L" /* Search20Svg */], null)), MobileHeader_jsx("button", {
    type: "button",
    className: "mobile-search__button mobile-search__button--close",
    onClick: closeSearch
  }, MobileHeader_jsx(svg["q" /* Cross20Svg */], null)), MobileHeader_jsx("div", {
    className: "mobile-search__field"
  }))), MobileHeader_jsx("div", {
    className: "mobile-header__indicators"
  }, MobileHeader_jsx("div", {
    className: "mobile-indicator d-md-none",
    ref: searchIndicatorRef
  }, MobileHeader_jsx("button", {
    type: "button",
    className: "mobile-indicator__button",
    onClick: openSearch
  }, MobileHeader_jsx("span", {
    className: "mobile-indicator__icon"
  }, MobileHeader_jsx(svg["L" /* Search20Svg */], null)))), MobileHeader_jsx("div", {
    className: "mobile-indicator d-none d-md-block"
  }, MobileHeader_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountDashboard(),
    className: "mobile-indicator__button"
  }, MobileHeader_jsx("span", {
    className: "mobile-indicator__icon"
  }, MobileHeader_jsx(svg["H" /* Person20Svg */], null)))), MobileHeader_jsx("div", {
    className: "mobile-indicator d-none d-md-block"
  }, MobileHeader_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].wishlist(),
    className: "mobile-indicator__button"
  }, MobileHeader_jsx("span", {
    className: "mobile-indicator__icon"
  }, MobileHeader_jsx(svg["y" /* Heart20Svg */], null), wishlist.items.length > 0 && MobileHeader_jsx("span", {
    className: "mobile-indicator__counter"
  }, wishlist.items.length)))), MobileHeader_jsx("div", {
    className: "mobile-indicator"
  }, MobileHeader_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].cart(),
    className: "mobile-indicator__button"
  }, MobileHeader_jsx("span", {
    className: "mobile-indicator__icon"
  }, MobileHeader_jsx(svg["j" /* Cart20Svg */], null), cart.quantity > 0 && MobileHeader_jsx("span", {
    className: "mobile-indicator__counter"
  }, cart.quantity))))))));
}

/* harmony default export */ var mobile_MobileHeader = (external_react_default.a.memo(MobileHeader));
// CONCATENATED MODULE: ./src/services/mobile-menu.ts
// react

const MobileMenuContext = external_react_default.a.createContext({
  lastPanelIdRef: {
    current: 0
  },
  containerRef: null,
  open: () => {},
  close: () => {},
  stack: [],
  bin: []
});
const MobileMenuLevelContext = external_react_default.a.createContext(0);
// CONCATENATED MODULE: ./src/components/mobile/MobileMenuConveyor.tsx
var MobileMenuConveyor_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // application



function MobileMenuConveyor(props) {
  const {
    controllerRef,
    children
  } = props;
  const ref = Object(external_react_["useRef"])(null);
  const lastPanelIdRef = Object(external_react_["useRef"])(0);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    stack: [],
    bin: []
  });
  const controller = Object(external_react_["useMemo"])(() => ({
    reset: () => {
      setState({
        stack: [],
        bin: []
      });
    }
  }), []);
  Object(external_react_["useEffect"])(() => {
    if (controllerRef) {
      if ('current' in controllerRef) {
        controllerRef.current = controller;
      } else {
        controllerRef(controller);
      }
    }
  }, [controller, controllerRef]);
  const open = Object(external_react_["useCallback"])(id => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      stack: [...prevState.stack, id]
    }));
  }, []);
  const close = Object(external_react_["useCallback"])(() => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      stack: [...prevState.stack.slice(0, -1)],
      bin: [...prevState.bin, ...prevState.stack.slice(-1)]
    }));
  }, []);

  const onTransitionEnd = event => {
    if (event.target === ref.current && event.propertyName === 'transform') {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        bin: []
      }));
    }
  };

  const contextData = Object(external_react_["useMemo"])(() => ({
    lastPanelIdRef,
    containerRef: ref,
    open,
    close,
    stack: state.stack,
    bin: state.bin
  }), [ref, open, close, state.stack, state.bin]);
  return MobileMenuConveyor_jsx("div", {
    ref: ref,
    className: "mobile-menu__conveyor",
    style: {
      transform: `translateX(-${state.stack.length * 100}%)`
    },
    onTransitionEnd: onTransitionEnd
  }, MobileMenuConveyor_jsx(MobileMenuContext.Provider, {
    value: contextData
  }, children));
}

/* harmony default export */ var mobile_MobileMenuConveyor = (MobileMenuConveyor);
// CONCATENATED MODULE: ./src/components/mobile/MobileMenuIndicators.tsx
var MobileMenuIndicators_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application








function MobileMenuIndicators() {
  const mobileMenuClose = useMobileMenuClose();
  const wishlist = Object(wishlistHooks["a" /* useWishlist */])();
  const cart = Object(cartHooks["a" /* useCart */])();
  return MobileMenuIndicators_jsx("div", {
    className: "mobile-menu__indicators"
  }, MobileMenuIndicators_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].wishlist(),
    className: "mobile-menu__indicator",
    onClick: mobileMenuClose
  }, MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-icon"
  }, MobileMenuIndicators_jsx(svg["y" /* Heart20Svg */], null), wishlist.items.length > 0 && MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-counter"
  }, wishlist.items.length)), MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-title"
  }, MobileMenuIndicators_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_MOBILE_INDICATOR_WISHLIST"
  }))), MobileMenuIndicators_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountDashboard(),
    className: "mobile-menu__indicator",
    onClick: mobileMenuClose
  }, MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-icon"
  }, MobileMenuIndicators_jsx(svg["H" /* Person20Svg */], null)), MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-title"
  }, MobileMenuIndicators_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_MOBILE_INDICATOR_ACCOUNT"
  }))), MobileMenuIndicators_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].cart(),
    className: "mobile-menu__indicator",
    onClick: mobileMenuClose
  }, MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-icon"
  }, MobileMenuIndicators_jsx(svg["j" /* Cart20Svg */], null), cart.items.length > 0 && MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-counter"
  }, cart.items.length)), MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-title"
  }, MobileMenuIndicators_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_MOBILE_INDICATOR_CART"
  }))), MobileMenuIndicators_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].accountGarage(),
    className: "mobile-menu__indicator",
    onClick: mobileMenuClose
  }, MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-icon"
  }, MobileMenuIndicators_jsx(svg["i" /* Car20Svg */], null)), MobileMenuIndicators_jsx("span", {
    className: "mobile-menu__indicator-title"
  }, MobileMenuIndicators_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_MOBILE_INDICATOR_GARAGE"
  }))));
}

/* harmony default export */ var mobile_MobileMenuIndicators = (MobileMenuIndicators);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./src/components/mobile/MobileMenuPanelController.tsx
var MobileMenuPanelController_jsx = external_react_default.a.createElement;
// react

 // application




function MobileMenuPanelController(props) {
  const {
    label,
    content,
    children
  } = props;
  const level = Object(external_react_["useContext"])(MobileMenuLevelContext);
  const conveyor = Object(external_react_["useContext"])(MobileMenuContext);
  const {
    0: id
  } = Object(external_react_["useState"])(() => {
    conveyor.lastPanelIdRef.current += 1;
    return conveyor.lastPanelIdRef.current;
  });
  const childrenTemplate = children(() => {
    conveyor.open(id);
  }) || null;

  const renderPanel = () => {
    if (!conveyor.containerRef || !conveyor.containerRef.current) {
      return null;
    }

    const panel = MobileMenuPanelController_jsx("div", {
      className: "mobile-menu__panel",
      style: {
        transform: `translateX(${level * 100}%)`
      }
    }, MobileMenuPanelController_jsx("div", {
      className: "mobile-menu__panel-header"
    }, level > 0 && MobileMenuPanelController_jsx("button", {
      className: "mobile-menu__panel-back",
      type: "button",
      onClick: conveyor.close
    }, MobileMenuPanelController_jsx(svg["f" /* ArrowRoundedLeft7x11Svg */], null)), MobileMenuPanelController_jsx("div", {
      className: "mobile-menu__panel-title"
    }, label)), MobileMenuPanelController_jsx("div", {
      className: "mobile-menu__panel-body"
    }, MobileMenuPanelController_jsx(MobileMenuLevelContext.Provider, {
      value: level + 1
    }, content)));

    return external_react_dom_default.a.createPortal(panel, conveyor.containerRef.current);
  };

  return MobileMenuPanelController_jsx(external_react_default.a.Fragment, null, (conveyor.stack.includes(id) || conveyor.bin.includes(id)) && renderPanel(), childrenTemplate && external_react_default.a.Children.only(childrenTemplate));
}

/* harmony default export */ var mobile_MobileMenuPanelController = (MobileMenuPanelController);
// CONCATENATED MODULE: ./src/components/mobile/MobileMenuLinks.tsx
var MobileMenuLinks_jsx = external_react_default.a.createElement;

function MobileMenuLinks_extends() { MobileMenuLinks_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MobileMenuLinks_extends.apply(this, arguments); }

// react
 // third-party

 // application






function MobileMenuLinks(props) {
  const {
    items = [],
    onItemClick
  } = props;

  const onInnerItemClick = (event, item) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    if (hasSubmenu) {
      event.preventDefault();
    }

    if (onItemClick) {
      onItemClick(item);
    }
  };

  return MobileMenuLinks_jsx("div", {
    className: "mobile-menu__links"
  }, MobileMenuLinks_jsx("ul", null, items.map((item, itemIdx) => {
    var _item$customFields;

    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const highlighted = ((_item$customFields = item.customFields) === null || _item$customFields === void 0 ? void 0 : _item$customFields.highlight) === true;

    const content = MobileMenuLinks_jsx(external_react_default.a.Fragment, null, item.image !== undefined && MobileMenuLinks_jsx("div", {
      className: "mobile-menu__links-image"
    }, MobileMenuLinks_jsx(AppImage["a" /* default */], {
      src: item.image
    })), item.title, hasSubmenu && MobileMenuLinks_jsx(svg["h" /* ArrowRoundedRight7x11Svg */], null));

    const renderLink = onItemClickInner => {
      var _item$customFields2;

      return MobileMenuLinks_jsx(external_react_default.a.Fragment, null, item.url !== undefined && MobileMenuLinks_jsx(AppLink["a" /* default */], MobileMenuLinks_extends({
        href: item.url,
        anchor: hasSubmenu,
        className: external_classnames_default()({
          highlight: highlighted
        }),
        onClick: event => onItemClickInner(event, item)
      }, (_item$customFields2 = item.customFields) === null || _item$customFields2 === void 0 ? void 0 : _item$customFields2.anchorProps), content), item.url === undefined && MobileMenuLinks_jsx("button", {
        type: "button",
        className: external_classnames_default()({
          highlight: highlighted
        }),
        onClick: event => onItemClickInner(event, item)
      }, content));
    };

    return MobileMenuLinks_jsx("li", {
      key: itemIdx
    }, hasSubmenu && MobileMenuLinks_jsx(mobile_MobileMenuPanelController, {
      label: item.title,
      content: MobileMenuLinks_jsx(MobileMenuLinks, {
        items: item.submenu,
        onItemClick: onItemClick
      })
    }, open => renderLink((event, item) => {
      open();
      onInnerItemClick(event, item);
    })), !hasSubmenu && renderLink(onInnerItemClick));
  })));
}

/* harmony default export */ var mobile_MobileMenuLinks = (MobileMenuLinks);
// CONCATENATED MODULE: ./src/components/mobile/MobileMenuPanel.tsx
var MobileMenuPanel_jsx = external_react_default.a.createElement;
// react
 // application




function MobileMenuPanel(props) {
  const {
    label,
    onCloseCurrentPanel,
    children
  } = props;
  const level = Object(external_react_["useContext"])(MobileMenuLevelContext);
  return MobileMenuPanel_jsx("div", {
    className: "mobile-menu__panel",
    style: {
      transform: `translateX(${level * 100}%)`
    }
  }, MobileMenuPanel_jsx("div", {
    className: "mobile-menu__panel-header"
  }, level > 0 && MobileMenuPanel_jsx("button", {
    className: "mobile-menu__panel-back",
    type: "button",
    onClick: onCloseCurrentPanel
  }, MobileMenuPanel_jsx(svg["f" /* ArrowRoundedLeft7x11Svg */], null)), MobileMenuPanel_jsx("div", {
    className: "mobile-menu__panel-title"
  }, label)), MobileMenuPanel_jsx("div", {
    className: "mobile-menu__panel-body"
  }, MobileMenuPanel_jsx(MobileMenuLevelContext.Provider, {
    value: level + 1
  }, children)));
}

/* harmony default export */ var mobile_MobileMenuPanel = (MobileMenuPanel);
// CONCATENATED MODULE: ./src/components/mobile/MobileMenuSettings.tsx
var MobileMenuSettings_jsx = external_react_default.a.createElement;
// react
 // application








 // data



function MobileMenuSettings() {
  const language = Object(i18n_hooks["b" /* useLanguage */])();
  const currency = Object(currencyHooks["a" /* useCurrency */])();
  const setLocale = Object(i18n_hooks["d" /* useSetLocale */])();
  const currencyChange = Object(currencyHooks["b" /* useCurrencyChange */])();
  const mobileMenuClose = useMobileMenuClose();
  const languages = Object(external_react_["useMemo"])(() => Object(utils["a" /* getAllLanguages */])().map(eachLanguage => ({
    title: eachLanguage.name,
    image: eachLanguage.icon,
    customFields: {
      locale: eachLanguage.locale
    }
  })), []);
  const currencies = Object(external_react_["useMemo"])(() => shopCurrencies["b" /* default */].map(eachCurrency => ({
    title: `${eachCurrency.symbol} ${eachCurrency.name}`,
    customFields: {
      currency: eachCurrency
    }
  })), []);
  const onLanguageItemClick = Object(external_react_["useCallback"])(item => {
    if (item.customFields && item.customFields.locale) {
      setLocale(item.customFields.locale);
    }

    mobileMenuClose();
  }, [setLocale, mobileMenuClose]);
  const onCurrencyItemClick = Object(external_react_["useCallback"])(item => {
    if (item.customFields && item.customFields.currency) {
      currencyChange(item.customFields.currency);
    }

    mobileMenuClose();
  }, [currencyChange, mobileMenuClose]);
  return MobileMenuSettings_jsx("div", {
    className: "mobile-menu__settings-list"
  }, MobileMenuSettings_jsx("div", {
    className: "mobile-menu__setting"
  }, MobileMenuSettings_jsx(mobile_MobileMenuPanelController, {
    label: "Language",
    content: MobileMenuSettings_jsx(mobile_MobileMenuLinks, {
      items: languages,
      onItemClick: onLanguageItemClick
    })
  }, open => MobileMenuSettings_jsx("button", {
    type: "button",
    className: "mobile-menu__setting-button",
    title: "Language",
    onClick: open
  }, MobileMenuSettings_jsx("span", {
    className: "mobile-menu__setting-icon"
  }, MobileMenuSettings_jsx(AppImage["a" /* default */], {
    src: language.icon
  })), MobileMenuSettings_jsx("span", {
    className: "mobile-menu__setting-title"
  }, language.name), MobileMenuSettings_jsx("span", {
    className: "mobile-menu__setting-arrow"
  }, MobileMenuSettings_jsx(svg["g" /* ArrowRoundedRight6x9Svg */], null))))), MobileMenuSettings_jsx("div", {
    className: "mobile-menu__setting"
  }, MobileMenuSettings_jsx(mobile_MobileMenuPanelController, {
    label: "Currency",
    content: MobileMenuSettings_jsx(mobile_MobileMenuLinks, {
      items: currencies,
      onItemClick: onCurrencyItemClick
    })
  }, open => MobileMenuSettings_jsx("button", {
    type: "button",
    className: "mobile-menu__setting-button",
    title: "Currency",
    onClick: open
  }, MobileMenuSettings_jsx("span", {
    className: "mobile-menu__setting-icon mobile-menu__setting-icon--currency"
  }, currency.symbol), MobileMenuSettings_jsx("span", {
    className: "mobile-menu__setting-title"
  }, currency.name), MobileMenuSettings_jsx("span", {
    className: "mobile-menu__setting-arrow"
  }, MobileMenuSettings_jsx(svg["g" /* ArrowRoundedRight6x9Svg */], null))))));
}

/* harmony default export */ var mobile_MobileMenuSettings = (MobileMenuSettings);
// CONCATENATED MODULE: ./src/data/mobileMenuLinks.ts
// application
const dataMobileMenuLinks = [{
  title: 'Home',
  url: '/',
  submenu: [{
    title: 'Home One',
    url: '/'
  }, {
    title: 'Home Two',
    url: '/demo/home-two'
  }, {
    title: 'Header Spaceship',
    url: '/demo/header-spaceship-variant-one',
    submenu: [{
      title: 'Variant One',
      url: '/demo/header-spaceship-variant-one'
    }, {
      title: 'Variant Two',
      url: '/demo/header-spaceship-variant-two'
    }, {
      title: 'Variant Three',
      url: '/demo/header-spaceship-variant-three'
    }]
  }, {
    title: 'Header Classic',
    url: '/demo/header-classic-variant-one',
    submenu: [{
      title: 'Variant One',
      url: '/demo/header-classic-variant-one'
    }, {
      title: 'Variant Two',
      url: '/demo/header-classic-variant-two'
    }, {
      title: 'Variant Three',
      url: '/demo/header-classic-variant-three'
    }, {
      title: 'Variant Four',
      url: '/demo/header-classic-variant-four'
    }, {
      title: 'Variant Five',
      url: '/demo/header-classic-variant-five'
    }]
  }, {
    title: 'Mobile Header',
    url: '/demo/mobile-header-variant-one',
    submenu: [{
      title: 'Variant One',
      url: '/demo/mobile-header-variant-one'
    }, {
      title: 'Variant Two',
      url: '/demo/mobile-header-variant-two'
    }]
  }]
}, {
  title: 'Shop',
  url: '/demo/shop/shop-grid-4-sidebar',
  submenu: [{
    title: 'Category',
    url: '/demo/shop/category-columns-4-sidebar',
    submenu: [{
      title: '3 Columns Sidebar',
      url: '/demo/shop/category-columns-3-sidebar'
    }, {
      title: '4 Columns Sidebar',
      url: '/demo/shop/category-columns-4-sidebar'
    }, {
      title: '5 Columns Sidebar',
      url: '/demo/shop/category-columns-5-sidebar'
    }, {
      title: '4 Columns Full',
      url: '/demo/shop/category-columns-4-full'
    }, {
      title: '5 Columns Full',
      url: '/demo/shop/category-columns-5-full'
    }, {
      title: '6 Columns Full',
      url: '/demo/shop/category-columns-6-full'
    }, {
      title: '7 Columns Full',
      url: '/demo/shop/category-columns-7-full'
    }, {
      title: 'Right Sidebar',
      url: '/demo/shop/category-right-sidebar'
    }]
  }, {
    title: 'Shop Grid',
    url: '/demo/shop/shop-grid-4-sidebar',
    submenu: [{
      title: '6 Columns Full',
      url: '/demo/shop/shop-grid-6-full'
    }, {
      title: '5 Columns Full',
      url: '/demo/shop/shop-grid-5-full'
    }, {
      title: '4 Columns Full',
      url: '/demo/shop/shop-grid-4-full'
    }, {
      title: '4 Columns Sidebar',
      url: '/demo/shop/shop-grid-4-sidebar'
    }, {
      title: '3 Columns Sidebar',
      url: '/demo/shop/shop-grid-3-sidebar'
    }]
  }, {
    title: 'Shop List',
    url: '/demo/shop/shop-list'
  }, {
    title: 'Shop Table',
    url: '/demo/shop/shop-table'
  }, {
    title: 'Shop Right Sidebar',
    url: '/demo/shop/shop-right-sidebar'
  }, {
    title: 'Product',
    url: '/demo/shop/product-full',
    submenu: [{
      title: 'Full Width',
      url: '/demo/shop/product-full'
    }, {
      title: 'Left Sidebar',
      url: '/demo/shop/product-sidebar'
    }]
  }, {
    title: 'Cart',
    url: '/cart'
  }, {
    title: 'Checkout',
    url: '/cart/checkout'
  }, {
    title: 'Order Success',
    url: '/demo/shop/order-success'
  }, {
    title: 'Wishlist',
    url: '/wishlist'
  }, {
    title: 'Compare',
    url: '/compare'
  }, {
    title: 'Track Order',
    url: '/track-order'
  }]
}, {
  title: 'Blog',
  url: '/demo/blog/classic-right-sidebar',
  submenu: [{
    title: 'Blog Classic',
    url: '/demo/blog/classic-right-sidebar',
    submenu: [{
      title: 'Left Sidebar',
      url: '/demo/blog/classic-left-sidebar'
    }, {
      title: 'Right Sidebar',
      url: '/demo/blog/classic-right-sidebar'
    }]
  }, {
    title: 'Blog List',
    url: '/demo/blog/list-right-sidebar',
    submenu: [{
      title: 'Left Sidebar',
      url: '/demo/blog/list-left-sidebar'
    }, {
      title: 'Right Sidebar',
      url: '/demo/blog/list-right-sidebar'
    }]
  }, {
    title: 'Blog Grid',
    url: '/demo/blog/grid-right-sidebar',
    submenu: [{
      title: 'Left Sidebar',
      url: '/demo/blog/grid-left-sidebar'
    }, {
      title: 'Right Sidebar',
      url: '/demo/blog/grid-right-sidebar'
    }]
  }, {
    title: 'Post Page',
    url: '/demo/blog/post-full-width',
    submenu: [{
      title: 'Full Width',
      url: '/demo/blog/post-full-width'
    }, {
      title: 'Left Sidebar',
      url: '/demo/blog/post-left-sidebar'
    }, {
      title: 'Right Sidebar',
      url: '/demo/blog/post-right-sidebar'
    }]
  }, {
    title: 'Post Without Image',
    url: '/demo/blog/post-without-image'
  }]
}, {
  title: 'Account',
  url: '/account/dashboard',
  submenu: [{
    title: 'Login & Register',
    url: '/account/login'
  }, {
    title: 'Dashboard',
    url: '/account/dashboard'
  }, {
    title: 'Garage',
    url: '/account/garage'
  }, {
    title: 'Edit Profile',
    url: '/account/profile'
  }, {
    title: 'Order History',
    url: '/account/orders'
  }, {
    title: 'Order Details',
    url: {
      href: '/account/orders/[id]?id=1',
      as: '/account/orders/1'
    }
  }, {
    title: 'Address Book',
    url: '/account/addresses'
  }, {
    title: 'Edit Address',
    url: {
      href: '/account/addresses/[id]?id=new',
      as: '/account/addresses/new'
    }
  }, {
    title: 'Change Password',
    url: '/account/password'
  }]
}, {
  title: 'Pages',
  url: '/about-us',
  submenu: [{
    title: 'About Us',
    url: '/about-us'
  }, {
    title: 'Contact Us v1',
    url: '/demo/site/contact-us-v1'
  }, {
    title: 'Contact Us v2',
    url: '/demo/site/contact-us-v2'
  }, {
    title: '404',
    url: '/demo/site/not-found'
  }, {
    title: 'Terms And Conditions',
    url: '/terms'
  }, {
    title: 'FAQ',
    url: '/faq'
  }, {
    title: 'Components',
    url: '/demo/site/components'
  }, {
    title: 'Typography',
    url: '/demo/site/typography'
  }]
}, {
  title: 'Buy Theme',
  url: 'https://themeforest.net/user/kos9/portfolio',
  customFields: {
    anchorProps: {
      target: '_blank'
    },
    highlight: true
  }
}];
/* harmony default export */ var mobileMenuLinks = (dataMobileMenuLinks);
// CONCATENATED MODULE: ./src/components/mobile/MobileMenu.tsx
var MobileMenu_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
// react
 // third-party


 // application









 // data



function MobileMenu() {
  const mobileMenu = useMobileMenu();
  const mobileMenuClose = useMobileMenuClose();
  const bodyRef = Object(external_react_["useRef"])(null);
  const conveyorRef = Object(external_react_["useRef"])(null);
  const rootClasses = external_classnames_default()('mobile-menu', {
    'mobile-menu--open': mobileMenu.open
  });

  const onMenuClosed = () => {
    if (conveyorRef.current) {
      conveyorRef.current.reset();
    }
  };

  const onTransitionEnd = event => {
    if (event.target === bodyRef.current && event.propertyName === 'transform' && !mobileMenu.open) {
      onMenuClosed();
    }
  };

  return MobileMenu_jsx("div", {
    className: rootClasses
  }, MobileMenu_jsx("div", {
    className: "mobile-menu__backdrop",
    onClick: mobileMenuClose
  }), MobileMenu_jsx("div", {
    className: "mobile-menu__body",
    ref: bodyRef,
    onTransitionEnd: onTransitionEnd
  }, MobileMenu_jsx("button", {
    className: "mobile-menu__close",
    type: "button",
    onClick: mobileMenuClose
  }, MobileMenu_jsx(svg["p" /* Cross12Svg */], null)), MobileMenu_jsx(mobile_MobileMenuConveyor, {
    controllerRef: conveyorRef
  }, MobileMenu_jsx(mobile_MobileMenuPanel, {
    label: "Menu"
  }, MobileMenu_jsx(mobile_MobileMenuSettings, null), MobileMenu_jsx("div", {
    className: "mobile-menu__divider"
  }), MobileMenu_jsx(mobile_MobileMenuIndicators, null), MobileMenu_jsx("div", {
    className: "mobile-menu__divider"
  }), MobileMenu_jsx(mobile_MobileMenuLinks, {
    items: mobileMenuLinks
  }), MobileMenu_jsx("div", {
    className: "mobile-menu__spring"
  }), MobileMenu_jsx("div", {
    className: "mobile-menu__divider"
  }), MobileMenu_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].pageContactUs(),
    className: "mobile-menu__contacts"
  }, MobileMenu_jsx("div", {
    className: "mobile-menu__contacts-subtitle"
  }, MobileMenu_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_MOBILE_MENU_PHONE_TITLE"
  })), MobileMenu_jsx("div", {
    className: "mobile-menu__contacts-title"
  }, "800 060-0730"))))));
}

/* harmony default export */ var mobile_MobileMenu = (external_react_default.a.memo(MobileMenu));
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./src/components/shared/InputNumber.tsx
var InputNumber = __webpack_require__("YtuU");

// EXTERNAL MODULE: ./src/components/shop/ProductForm.tsx
var ProductForm = __webpack_require__("FAni");

// EXTERNAL MODULE: ./src/components/shop/ProductGallery.tsx
var ProductGallery = __webpack_require__("ggOb");

// EXTERNAL MODULE: ./src/components/shared/StockStatusBadge.tsx
var StockStatusBadge = __webpack_require__("JFti");

// EXTERNAL MODULE: ./src/services/forms/product.ts
var forms_product = __webpack_require__("zUlF");

// EXTERNAL MODULE: ./src/store/quickview/quickviewHooks.ts + 1 modules
var quickviewHooks = __webpack_require__("03gF");

// CONCATENATED MODULE: ./src/components/shared/Quickview.tsx
var Quickview_jsx = external_react_default.a.createElement;
// react
 // third-party




 // application
















function Quickview() {
  const quickview = Object(quickviewHooks["a" /* useQuickview */])();
  const quickviewClose = Object(quickviewHooks["b" /* useQuickviewClose */])();
  const wishlistAddItem = Object(wishlistHooks["b" /* useWishlistAddItem */])();
  const compareAddItem = Object(compareHooks["b" /* useCompareAddItem */])();
  const {
    product
  } = quickview;
  const image = Object(external_react_["useMemo"])(() => (product === null || product === void 0 ? void 0 : product.images) || [], [product]);
  const productForm = Object(forms_product["a" /* useProductForm */])(product);
  const toggle = Object(external_react_["useCallback"])(() => {
    if (quickview.open) {
      quickviewClose();
    }
  }, [quickview.open, quickviewClose]);

  if (!product) {
    return null;
  }

  const productTemplate = Quickview_jsx("div", {
    className: "quickview__product"
  }, Quickview_jsx("div", {
    className: "quickview__product-name"
  }, product.name), Quickview_jsx("div", {
    className: "quickview__product-rating"
  }, Quickview_jsx("div", {
    className: "quickview__product-rating-stars"
  }, Quickview_jsx(Rating["a" /* default */], {
    value: product.rating || 0
  })), Quickview_jsx("div", {
    className: "quickview__product-rating-title"
  }, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_RATING_LABEL",
    values: {
      rating: product.rating,
      reviews: product.reviews
    }
  }))), Quickview_jsx("div", {
    className: "quickview__product-meta"
  }, Quickview_jsx("table", null, Quickview_jsx("tbody", null, Quickview_jsx("tr", null, Quickview_jsx("th", null, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_SKU"
  })), Quickview_jsx("td", null, product.sku)), product.brand && Quickview_jsx(external_react_default.a.Fragment, null, Quickview_jsx("tr", null, Quickview_jsx("th", null, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_BRAND"
  })), Quickview_jsx("td", null, Quickview_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].brand(product.brand)
  }, product.brand.name))), Quickview_jsx("tr", null, Quickview_jsx("th", null, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_COUNTRY"
  })), Quickview_jsx("td", null, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: `COUNTRY_NAME_${product.brand.country}`
  })))), Quickview_jsx("tr", null, Quickview_jsx("th", null, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_PART_NUMBER"
  })), Quickview_jsx("td", null, product.partNumber))))), product.excerpt && Quickview_jsx("div", {
    className: "quickview__product-description"
  }, product.excerpt), Quickview_jsx("div", {
    className: "quickview__product-prices-stock"
  }, Quickview_jsx("div", {
    className: "quickview__product-prices"
  }, product.compareAtPrice !== null && Quickview_jsx(external_react_default.a.Fragment, null, Quickview_jsx("div", {
    className: "quickview__product-price quickview__product-price--old"
  }, Quickview_jsx(CurrencyFormat["a" /* default */], {
    value: product.compareAtPrice
  })), Quickview_jsx("div", {
    className: "quickview__product-price quickview__product-price--new"
  }, Quickview_jsx(CurrencyFormat["a" /* default */], {
    value: product.price
  }))), product.compareAtPrice === null && Quickview_jsx("div", {
    className: "quickview__product-price quickview__product-price--current"
  }, Quickview_jsx(CurrencyFormat["a" /* default */], {
    value: product.price
  }))), Quickview_jsx(StockStatusBadge["a" /* default */], {
    className: "quickview__product-stock",
    stock: product.stock
  })), Quickview_jsx(ProductForm["a" /* default */], {
    options: product.options,
    className: "quickview__product-form",
    namespace: "options"
  }), Quickview_jsx("div", {
    className: "quickview__product-actions"
  }, Quickview_jsx("div", {
    className: "quickview__product-actions-item quickview__product-actions-item--quantity"
  }, Quickview_jsx(external_react_hook_form_["Controller"], {
    name: "quantity",
    rules: {
      required: true
    },
    render: ({
      value,
      onChange,
      onBlur
    }) => Quickview_jsx(InputNumber["a" /* default */], {
      min: 1,
      value: value,
      onChange: onChange,
      onBlur: onBlur
    })
  })), Quickview_jsx("div", {
    className: "quickview__product-actions-item quickview__product-actions-item--addtocart"
  }, Quickview_jsx("button", {
    type: "submit",
    className: external_classnames_default()('btn', 'btn-primary', 'btn-block', {
      'btn-loading': productForm.submitInProgress
    })
  }, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_ADD_TO_CART"
  }))), Quickview_jsx(AsyncAction["a" /* default */], {
    action: () => wishlistAddItem(product),
    render: ({
      run,
      loading
    }) => Quickview_jsx("div", {
      className: "quickview__product-actions-item quickview__product-actions-item--wishlist"
    }, Quickview_jsx("button", {
      type: "button",
      className: external_classnames_default()('btn btn-muted btn-icon', {
        'btn-loading': loading
      }),
      onClick: run
    }, Quickview_jsx(svg["M" /* Wishlist16Svg */], null)))
  }), Quickview_jsx(AsyncAction["a" /* default */], {
    action: () => compareAddItem(product),
    render: ({
      run,
      loading
    }) => Quickview_jsx("div", {
      className: "quickview__product-actions-item quickview__product-actions-item--compare"
    }, Quickview_jsx("button", {
      type: "button",
      className: external_classnames_default()('btn btn-muted btn-icon', {
        'btn-loading': loading
      }),
      onClick: run
    }, Quickview_jsx(svg["n" /* Compare16Svg */], null)))
  })));

  return Quickview_jsx(external_reactstrap_["Modal"], {
    isOpen: quickview.open,
    toggle: toggle,
    centered: true,
    className: "quickview"
  }, Quickview_jsx("button", {
    type: "button",
    className: "quickview__close",
    onClick: quickviewClose
  }, Quickview_jsx(svg["p" /* Cross12Svg */], null)), Quickview_jsx(external_react_hook_form_["FormProvider"], productForm.methods, Quickview_jsx("form", {
    onSubmit: productForm.submit,
    className: "quickview__body"
  }, Quickview_jsx(ProductGallery["a" /* default */], {
    className: "quickview__gallery",
    layout: "quickview",
    images: image
  }), productTemplate)), Quickview_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].product(product),
    className: "quickview__see-details"
  }, Quickview_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_SEE_FULL_DETAILS"
  })));
}

/* harmony default export */ var shared_Quickview = (Quickview);
// CONCATENATED MODULE: ./src/components/Layout.tsx
var Layout_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application








function Layout(props) {
  const {
    children
  } = props;
  const {
    desktopHeaderLayout,
    desktopHeaderScheme,
    mobileHeaderVariant
  } = useOptions();
  const desktopVariantClass = `${desktopHeaderLayout}-${desktopHeaderScheme}`;
  const mobileVariantClass = `mobile-${mobileHeaderVariant}`;
  const classes = external_classnames_default()('site', `site--desktop-header--${desktopVariantClass}`, `site--mobile-header--${mobileVariantClass}`);
  return Layout_jsx("div", {
    className: classes
  }, Layout_jsx(external_react_toastify_["ToastContainer"], {
    autoClose: 5000,
    hideProgressBar: true
  }), Layout_jsx("div", {
    className: "site__container"
  }, Layout_jsx("header", {
    className: "site__mobile-header"
  }, Layout_jsx(mobile_MobileHeader, null)), Layout_jsx("header", {
    className: "site__header"
  }, Layout_jsx(header_Header, null)), Layout_jsx("div", {
    className: "site__body"
  }, children), Layout_jsx("footer", {
    className: "site__footer"
  }, Layout_jsx(footer_Footer, null))), Layout_jsx(mobile_MobileMenu, null), Layout_jsx(shared_Quickview, null));
}

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: ./src/components/shared/PageTitle.tsx
var PageTitle = __webpack_require__("P5m/");

// EXTERNAL MODULE: ./src/services/current-vehicle.tsx
var current_vehicle = __webpack_require__("eN2N");

// EXTERNAL MODULE: ./src/store/store.ts + 4 modules
var store_store = __webpack_require__("uFCc");

// EXTERNAL MODULE: ./src/store/options/optionsActions.ts
var optionsActions = __webpack_require__("4PPU");

// EXTERNAL MODULE: ./src/store/client.ts
var client = __webpack_require__("0QaZ");

// EXTERNAL MODULE: ./src/scss/index.scss
var scss = __webpack_require__("hZTp");

// EXTERNAL MODULE: ./src/scss/style.header-spaceship-variant-one.scss
var style_header_spaceship_variant_one = __webpack_require__("9Nj4");

// EXTERNAL MODULE: ./src/scss/style.header-spaceship-variant-two.scss
var style_header_spaceship_variant_two = __webpack_require__("UCyh");

// EXTERNAL MODULE: ./src/scss/style.header-spaceship-variant-three.scss
var style_header_spaceship_variant_three = __webpack_require__("of/m");

// EXTERNAL MODULE: ./src/scss/style.header-classic-variant-one.scss
var style_header_classic_variant_one = __webpack_require__("QmLQ");

// EXTERNAL MODULE: ./src/scss/style.header-classic-variant-two.scss
var style_header_classic_variant_two = __webpack_require__("+Agy");

// EXTERNAL MODULE: ./src/scss/style.header-classic-variant-three.scss
var style_header_classic_variant_three = __webpack_require__("5nc1");

// EXTERNAL MODULE: ./src/scss/style.header-classic-variant-four.scss
var style_header_classic_variant_four = __webpack_require__("OKC6");

// EXTERNAL MODULE: ./src/scss/style.header-classic-variant-five.scss
var style_header_classic_variant_five = __webpack_require__("7MUJ");

// EXTERNAL MODULE: ./src/scss/style.mobile-header-variant-one.scss
var style_mobile_header_variant_one = __webpack_require__("ayGW");

// EXTERNAL MODULE: ./src/scss/style.mobile-header-variant-two.scss
var style_mobile_header_variant_two = __webpack_require__("u8pu");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.min.css
var all_min = __webpack_require__("vs8Z");

// CONCATENATED MODULE: ./src/pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;

function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party



 // application










 // styles














function App(props) {
  const {
    Component,
    pageProps,
    languageInitialProps
  } = props;
  const store = Object(external_react_redux_["useStore"])();
  const applyClientState = Object(client["a" /* useApplyClientState */])();
  const loadUserVehicles = Object(garageHooks["e" /* useLoadUserVehicles */])(); // Loading and saving state on the client side (cart, wishlist, etc.).

  Object(external_react_["useEffect"])(() => {
    const state = Object(store_store["a" /* load */])();
    applyClientState(state || {});

    if (false) {}
  }, [store, applyClientState]); // Load user vehicles

  Object(external_react_["useEffect"])(() => {
    loadUserVehicles().then();
  }, [loadUserVehicles]); // preloader

  Object(external_react_["useEffect"])(() => {
    const preloader = document.querySelector('.site-preloader');

    if (!preloader) {
      return;
    }

    setTimeout(() => {
      if (preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 100);
  }, []);
  const page = Object(external_react_["useMemo"])(() => {
    const PageLayout = Component.Layout || external_react_default.a.Fragment;
    return _app_jsx(components_Layout, null, _app_jsx(PageLayout, null, _app_jsx(Component, pageProps)));
  }, [Component, pageProps]); // noinspection HtmlRequiredTitleElement

  return _app_jsx(provider, languageInitialProps, _app_jsx(current_vehicle["a" /* CurrentVehicleGarageProvider */], null, _app_jsx(PageTitle["a" /* default */], null), _app_jsx(head_default.a, null, _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })), page));
}

App.getInitialProps = async context => {
  const dispatch = context.ctx.store.dispatch;
  await dispatch(Object(optionsActions["a" /* optionsSetAll */])({
    desktopHeaderVariant: src_config.desktopHeaderVariant,
    mobileHeaderVariant: src_config.mobileHeaderVariant
  }));
  let language;

  if (typeof context.ctx.query.lang === 'string') {
    language = Object(utils["d" /* getLanguageByLocale */])(context.ctx.query.lang);
  } else {
    language = Object(utils["e" /* getLanguageByPath */])(context.ctx.asPath || context.ctx.pathname);
  }

  return _app_objectSpread(_app_objectSpread({}, await app_default.a.getInitialProps(context)), {}, {
    languageInitialProps: await getLanguageInitialProps(language)
  });
};

const WrappedApp = store_store["b" /* wrapper */].withRedux(App); // noinspection JSUnusedGlobalSymbols

/* harmony default export */ var _app = __webpack_exports__["default"] = (WrappedApp);

/***/ }),

/***/ "hZTp":
/***/ (function(module, exports) {



/***/ }),

/***/ "i19i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hrefToRouterArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useOriginalRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_i18n_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7eUB");
/* harmony import */ var _components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+Sw2");
/* harmony import */ var _services_i18n_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+oNx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export */
// react
 // third-party


// application



function hrefToRouterArgs(linkHref) {
  const {
    href,
    as,
    shallow
  } = Object(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__[/* normalizeLinkHref */ "c"])(linkHref);
  return [href, as, {
    shallow
  }];
}

function normalizeRouterArgs(args, locale) {
  const [url, as, options] = args;
  const normalizedUrl = Object(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__[/* normalizeHref */ "b"])(url);
  const normalizedAs = Object(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__[/* normalizeHref */ "b"])(as || url);
  normalizedUrl.query = _objectSpread({}, normalizedUrl.query);
  normalizedAs.pathname = locale === Object(_services_i18n_utils__WEBPACK_IMPORTED_MODULE_2__[/* getDefaultLocale */ "c"])() ? normalizedAs.pathname : `/${locale}${normalizedAs.pathname}`;
  return [normalizedUrl, normalizedAs, options];
}

function useOriginalRouter() {
  return Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
}
function useAppRouter() {
  const original = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const locale = Object(_services_i18n_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useLocale */ "c"])();
  const mimic = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    push(...args) {
      return original.push(...normalizeRouterArgs(args, locale));
    },

    replace(...args) {
      return original.replace(...normalizeRouterArgs(args, locale));
    }

  }), [original, locale]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object.setPrototypeOf(mimic, original), [mimic, original]);
}

/***/ }),

/***/ "iqdC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BWJY");
/* harmony import */ var _components_shared_RadioButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OHag");
/* harmony import */ var _components_shared_VehicleForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K5+J");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P3CU");
/* harmony import */ var _store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1pP5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party



 // application







function VehiclePickerModal(props) {
  const {
    value = null,
    isOpen = false,
    onClose,
    onSelect
  } = props;
  const vehicles = Object(_store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_8__[/* useUserVehicles */ "f"])();
  const garageRemoveItem = Object(_store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_8__[/* useGarageRemoveItem */ "c"])();
  const garageAddItem = Object(_store_garage_garageHooks__WEBPACK_IMPORTED_MODULE_8__[/* useGarageAddItem */ "a"])();
  const {
    0: currentPanel,
    1: setCurrentPanel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('list');
  const {
    0: innerValue,
    1: setInnerValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: controlValue,
    1: setControlValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const onSelectClick = () => {
    if (onSelect) {
      onSelect(innerValue);
    }

    if (onClose) {
      onClose();
    }
  };

  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isOpen && onClose) {
      onClose();
    }
  }, [isOpen, onClose]);

  const onAddVehicleClick = async () => {
    if (!controlValue) {
      return;
    }

    await garageAddItem(controlValue.id);
    setCurrentPanel('list');
    setInnerValue(controlValue);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isOpen) {
      setCurrentPanel('list');
      setInnerValue(value);
    }
  }, [isOpen, value]);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: isOpen,
    toggle: toggle,
    centered: true,
    className: "vehicle-picker-modal"
  }, __jsx("button", {
    type: "button",
    className: "vehicle-picker-modal__close",
    onClick: onClose
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Cross12Svg */ "p"], null)), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vehicle-picker-modal__panel', {
      'vehicle-picker-modal__panel--active': currentPanel === 'list' && vehicles.length !== 0
    })
  }, __jsx("div", {
    className: "vehicle-picker-modal__title card-title"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "HEADER_SELECT_VEHICLE"
  })), __jsx("div", {
    className: "vehicle-picker-modal__text"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS"
  })), __jsx("div", {
    className: "vehicles-list"
  }, __jsx("div", {
    className: "vehicles-list__body"
  }, __jsx("label", {
    className: "vehicles-list__item"
  }, __jsx(_components_shared_RadioButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    className: "vehicles-list__item-radio",
    checked: innerValue === null,
    onChange: () => setInnerValue(null)
  }), __jsx("span", {
    className: "vehicles-list__item-info"
  }, __jsx("span", {
    className: "vehicles-list__item-name"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_ALL_VEHICLES"
  })))), vehicles.map((vehicle, vehicleIdx) => // eslint-disable-next-line jsx-a11y/label-has-associated-control
  __jsx("label", {
    key: vehicleIdx,
    className: "vehicles-list__item"
  }, __jsx(_components_shared_RadioButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    className: "vehicles-list__item-radio",
    checked: innerValue !== null && innerValue.id === vehicle.id,
    onChange: () => setInnerValue(vehicle)
  }), __jsx("span", {
    className: "vehicles-list__item-info"
  }, __jsx("span", {
    className: "vehicles-list__item-name"
  }, `${vehicle.year} ${vehicle.make} ${vehicle.model}`), __jsx("span", {
    className: "vehicles-list__item-details"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_VEHICLE_ENGINE",
    values: {
      engine: vehicle.engine
    }
  }))), __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    action: () => garageRemoveItem(vehicle.id),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vehicles-list__item-remove', {
        'vehicles-list__item-remove--loading': loading
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* RecycleBin16Svg */ "K"], null))
  }))))), __jsx("button", {
    type: "button",
    className: "btn btn-sm btn-secondary btn-block mt-2 vehicle-picker-modal__add-button",
    onClick: () => setCurrentPanel('form')
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "BUTTON_ADD_VEHICLE_LONG"
  })), __jsx("div", {
    className: "vehicle-picker-modal__actions"
  }, __jsx("button", {
    type: "button",
    className: "btn btn-sm btn-secondary",
    onClick: onClose
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "BUTTON_CANCEL"
  })), __jsx("button", {
    type: "button",
    className: "btn btn-sm btn-primary",
    onClick: onSelectClick
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "BUTTON_SELECT_VEHICLE"
  })))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vehicle-picker-modal__panel', {
      'vehicle-picker-modal__panel--active': currentPanel === 'form' || vehicles.length === 0
    })
  }, __jsx("div", {
    className: "vehicle-picker-modal__title card-title"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "HEADER_ADD_VEHICLE"
  })), __jsx(_components_shared_VehicleForm__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    location: "modal",
    onVehicleChange: setControlValue
  }), __jsx("div", {
    className: "vehicle-picker-modal__actions"
  }, vehicles.length !== 0 && __jsx("button", {
    type: "button",
    className: "btn btn-sm btn-secondary",
    onClick: () => setCurrentPanel('list')
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "BUTTON_BACK_TO_LIST"
  })), __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    action: onAddVehicleClick,
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn', 'btn-sm', 'btn-primary', {
        'btn-loading': loading
      }),
      disabled: controlValue === null,
      onClick: run
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "BUTTON_ADD_VEHICLE"
    }))
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (VehiclePickerModal);

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k9hS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSignInForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zlw4");
/* harmony import */ var _store_user_userHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eJ0J");
// react
 // third-party

 // application



function useSignInForm(options = {}) {
  const signIn = Object(_store_user_userHooks__WEBPACK_IMPORTED_MODULE_3__[/* useUserSignIn */ "c"])();
  const {
    onSuccess
  } = options;
  const {
    0: serverError,
    1: setServerError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    defaultValues: {
      email: 'red-parts@example.com',
      password: '123456',
      remember: false
    }
  });
  const {
    handleSubmit
  } = methods;
  const [submit, submitInProgress] = Object(_store_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useAsyncAction */ "c"])(data => {
    setServerError(null);
    return signIn(data.email, data.password).then(() => {
      if (onSuccess) {
        onSuccess();
      }
    }, error => {
      setServerError(`ERROR_API_${error.message}`);
    });
  }, [signIn, setServerError, onSuccess]);
  return {
    submit: Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => handleSubmit(submit), [handleSubmit, submit]),
    submitInProgress: submitInProgress || methods.formState.isSubmitting,
    serverError,
    errors: methods.errors,
    register: methods.register,
    watch: methods.watch
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "of/m":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "srIM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GARAGE_NAMESPACE; });
/* harmony import */ var _store_garage_garageActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WQ/t");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  items: [],
  current: null
};
const GARAGE_NAMESPACE = 'garage';

function garageReducer(state = initialState, action) {
  switch (action.type) {
    case _store_garage_garageActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GARAGE_SET_ITEMS */ "b"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.payload,
        current: action.payload.find(x => {
          var _state$current;

          return x.id === ((_state$current = state.current) === null || _state$current === void 0 ? void 0 : _state$current.id);
        }) || null
      });

    case _store_garage_garageActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GARAGE_SET_CURRENT */ "a"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: state.items.find(x => x.id === action.payload) || null
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["b"] = (garageReducer);

/***/ }),

/***/ "u8pu":
/***/ (function(module, exports) {



/***/ }),

/***/ "uFCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ load; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ wrapper; });

// UNUSED EXPORTS: save

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// CONCATENATED MODULE: ./src/store/version.ts
const version = 1;
/* harmony default export */ var store_version = (version);
// EXTERNAL MODULE: ./src/store/client.ts
var client = __webpack_require__("0QaZ");

// EXTERNAL MODULE: ./src/store/cart/cartActionTypes.ts
var cartActionTypes = __webpack_require__("AdQK");

// CONCATENATED MODULE: ./src/store/cart/cartReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



function findItemIndex(items, product, options) {
  return items.findIndex(item => {
    if (item.product.id !== product.id || item.options.length !== options.length) {
      return false;
    }

    for (let i = 0; i < options.length; i += 1) {
      const option = options[i];
      const itemOption = item.options.find(itemOption => itemOption.name === option.name && itemOption.value === option.value);

      if (!itemOption) {
        return false;
      }
    }

    return true;
  });
}

function calcSubtotal(items) {
  return items.reduce((subtotal, item) => subtotal + item.total, 0);
}

function calcQuantity(items) {
  return items.reduce((quantity, item) => quantity + item.quantity, 0);
}

function calcTotal(subtotal, totals) {
  return totals.reduce((acc, extraLine) => acc + extraLine.price, subtotal);
}

function calcTotals(items) {
  if (items.length === 0) {
    return [];
  }

  const subtotal = calcSubtotal(items);
  return [{
    type: 'shipping',
    title: 'SHIPPING',
    price: 25
  }, {
    type: 'tax',
    title: 'TAX',
    price: subtotal * 0.2
  }];
}

function addItem(state, product, options, quantity) {
  const itemIndex = findItemIndex(state.items, product, options);
  let newItems;
  let {
    lastItemId
  } = state;

  if (itemIndex === -1) {
    lastItemId += 1;
    newItems = [...state.items, {
      id: lastItemId,
      product: JSON.parse(JSON.stringify(product)),
      options: JSON.parse(JSON.stringify(options)),
      price: product.price,
      total: product.price * quantity,
      quantity
    }];
  } else {
    const item = state.items[itemIndex];
    newItems = [...state.items.slice(0, itemIndex), _objectSpread(_objectSpread({}, item), {}, {
      quantity: item.quantity + quantity,
      total: (item.quantity + quantity) * item.price
    }), ...state.items.slice(itemIndex + 1)];
  }

  const subtotal = calcSubtotal(newItems);
  const totals = calcTotals(newItems);
  const total = calcTotal(subtotal, totals);
  return _objectSpread(_objectSpread({}, state), {}, {
    lastItemId,
    subtotal,
    totals,
    total,
    items: newItems,
    quantity: calcQuantity(newItems)
  });
}

function removeItem(state, itemId) {
  const {
    items
  } = state;
  const newItems = items.filter(item => item.id !== itemId);
  const subtotal = calcSubtotal(newItems);
  const totals = calcTotals(newItems);
  const total = calcTotal(subtotal, totals);
  return _objectSpread(_objectSpread({}, state), {}, {
    items: newItems,
    quantity: calcQuantity(newItems),
    subtotal,
    totals,
    total
  });
}

function updateQuantities(state, quantities) {
  let needUpdate = false;
  const newItems = state.items.map(item => {
    const quantity = quantities.find(x => x.itemId === item.id && x.value !== item.quantity);

    if (!quantity) {
      return item;
    }

    needUpdate = true;
    return _objectSpread(_objectSpread({}, item), {}, {
      quantity: quantity.value,
      total: quantity.value * item.price
    });
  });

  if (needUpdate) {
    const subtotal = calcSubtotal(newItems);
    const totals = calcTotals(newItems);
    const total = calcTotal(subtotal, totals);
    return _objectSpread(_objectSpread({}, state), {}, {
      items: newItems,
      quantity: calcQuantity(newItems),
      subtotal,
      totals,
      total
    });
  }

  return state;
}

const initialState = {
  lastItemId: 0,
  quantity: 0,
  items: [],
  subtotal: 0,
  totals: [],
  total: 0
};
const CART_NAMESPACE = 'cart';

function cartBaseReducer(state = initialState, action) {
  switch (action.type) {
    case cartActionTypes["a" /* CART_ADD_ITEM */]:
      return addItem(state, action.product, action.options, action.quantity);

    case cartActionTypes["b" /* CART_REMOVE_ITEM */]:
      return removeItem(state, action.itemId);

    case cartActionTypes["c" /* CART_UPDATE_QUANTITIES */]:
      return updateQuantities(state, action.quantities);

    default:
      return state;
  }
}

const cartReducer = Object(client["b" /* withClientState */])(cartBaseReducer, CART_NAMESPACE);
/* harmony default export */ var cart_cartReducer = (cartReducer);
// EXTERNAL MODULE: ./src/store/compare/compareReducer.ts
var compareReducer = __webpack_require__("BEkv");

// EXTERNAL MODULE: ./src/store/currency/currencyReducer.ts
var currencyReducer = __webpack_require__("FEOJ");

// EXTERNAL MODULE: ./src/store/garage/garageReducer.ts
var garageReducer = __webpack_require__("srIM");

// EXTERNAL MODULE: ./src/store/mobile-menu/mobileMenuReducer.ts
var mobileMenuReducer = __webpack_require__("Neop");

// EXTERNAL MODULE: ./src/store/options/optionsReducer.ts
var optionsReducer = __webpack_require__("ehF+");

// EXTERNAL MODULE: ./src/store/quickview/quickviewReducer.ts
var quickviewReducer = __webpack_require__("AdE6");

// EXTERNAL MODULE: ./src/services/filters.ts
var services_filters = __webpack_require__("yuPr");

// EXTERNAL MODULE: ./src/store/shop/shopTypes.ts
var shopTypes = __webpack_require__("+L6p");

// EXTERNAL MODULE: ./src/store/shop/shopActionTypes.ts
var shopActionTypes = __webpack_require__("Pbem");

// CONCATENATED MODULE: ./src/store/shop/shopReducer.ts
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function shopReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shopReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopReducer_ownKeys(Object(source), true).forEach(function (key) { shopReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



const shopReducer_initialState = {
  init: false,
  categorySlug: null,
  categoryIsLoading: true,
  category: null,
  productsListIsLoading: true,
  productsList: null,
  options: {},
  filters: {},
  activeFilters: [],
  removedFilters: [],
  currentFilters: []
};

function shopReducerFetchProductsListSuccess(state, action) {
  const activeFilters = action.productsList.filters.filter(x => Object(services_filters["d" /* hasHandler */])(x)).reduce((acc, filter) => [...acc, ...Object(services_filters["a" /* getActiveFilters */])(filter)], []);
  return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
    productsListIsLoading: false,
    productsList: action.productsList,
    activeFilters,
    removedFilters: [],
    currentFilters: activeFilters
  });
}

function shopReducerSetFilterValue(state, action) {
  const currentFilters = shopReducer_objectSpread({}, state.filters);

  let filters;

  if (action.value !== null) {
    filters = shopReducer_objectSpread(shopReducer_objectSpread({}, currentFilters), {}, {
      [action.filter]: action.value
    });
  } else {
    delete currentFilters[action.filter];
    filters = shopReducer_objectSpread({}, currentFilters);
  }

  return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
    options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
      page: 1
    }),
    filters
  });
}

function shopReducerResetFilter(state, action) {
  if (!Object(services_filters["d" /* hasHandler */])(action.activeFilter.original)) {
    return state;
  }

  let {
    removedFilters
  } = state;

  if (!removedFilters.includes(action.activeFilter)) {
    removedFilters = [...removedFilters, action.activeFilter];
  }

  let {
    currentFilters
  } = state;

  if (currentFilters.includes(action.activeFilter)) {
    currentFilters = currentFilters.filter(x => x !== action.activeFilter);
  } // All removed filters with the same slug.


  const all = removedFilters.filter(x => x.original.slug === action.activeFilter.original.slug);
  const value = Object(services_filters["c" /* getResetValue */])(all); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const _state$filters = state.filters,
        _action$activeFilter$ = action.activeFilter.original.slug,
        {
    [_action$activeFilter$]: _
  } = _state$filters,
        filters = _objectWithoutProperties(_state$filters, [_action$activeFilter$].map(_toPropertyKey));

  if (value !== null) {
    filters[action.activeFilter.original.slug] = value;
  }

  return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
    options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
      page: 1
    }),
    filters,
    removedFilters,
    currentFilters
  });
}

function shopReducer(state = shopReducer_initialState, action) {
  switch (action.type) {
    case shopActionTypes["d" /* SHOP_HYDRATE */]:
      return action.payload[shopTypes["a" /* SHOP_NAMESPACE */]];

    case shopActionTypes["e" /* SHOP_INIT */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, shopReducer_initialState), {}, {
        categorySlug: action.categorySlug,
        options: action.options,
        filters: action.filters
      });

    case shopActionTypes["a" /* SHOP_FETCH_CATEGORY_SUCCESS */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        init: true,
        categoryIsLoading: false,
        category: action.category
      });

    case shopActionTypes["b" /* SHOP_FETCH_PRODUCTS_LIST_START */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        productsListIsLoading: true
      });

    case shopActionTypes["c" /* SHOP_FETCH_PRODUCTS_LIST_SUCCESS */]:
      return shopReducerFetchProductsListSuccess(state, action);

    case shopActionTypes["i" /* SHOP_SET_OPTION_VALUE */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
          page: 1,
          [action.option]: action.value
        })
      });

    case shopActionTypes["h" /* SHOP_SET_FILTER_VALUE */]:
      return shopReducerSetFilterValue(state, action);

    case shopActionTypes["g" /* SHOP_RESET_FILTERS */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
          page: 1
        }),
        filters: {}
      });

    case shopActionTypes["f" /* SHOP_RESET_FILTER */]:
      return shopReducerResetFilter(state, action);

    default:
      return state;
  }
}

/* harmony default export */ var shop_shopReducer = (shopReducer);
// EXTERNAL MODULE: ./src/store/user/userReducer.ts
var userReducer = __webpack_require__("C+jY");

// EXTERNAL MODULE: ./src/store/wishlist/wishlistReducer.ts
var wishlistReducer = __webpack_require__("dZVx");

// CONCATENATED MODULE: ./src/store/root/rootReducer.ts
// third-party
 // application













/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])({
  version: (state = store_version) => state,
  [CART_NAMESPACE]: cart_cartReducer,
  [compareReducer["a" /* COMPARE_NAMESPACE */]]: compareReducer["b" /* default */],
  [currencyReducer["a" /* CURRENCY_NAMESPACE */]]: currencyReducer["b" /* default */],
  [garageReducer["a" /* GARAGE_NAMESPACE */]]: garageReducer["b" /* default */],
  [mobileMenuReducer["a" /* MOBILE_MENU_NAMESPACE */]]: mobileMenuReducer["b" /* default */],
  [optionsReducer["a" /* OPTIONS_NAMESPACE */]]: optionsReducer["b" /* default */],
  [quickviewReducer["a" /* QUICKVIEW_NAMESPACE */]]: quickviewReducer["b" /* default */],
  [shopTypes["a" /* SHOP_NAMESPACE */]]: shop_shopReducer,
  [userReducer["a" /* USER_NAMESPACE */]]: userReducer["b" /* default */],
  [wishlistReducer["a" /* WISHLIST_NAMESPACE */]]: wishlistReducer["b" /* default */]
}));
// CONCATENATED MODULE: ./src/store/store.ts
// third-party


 // application



const STORAGE_KEY = 'red-parts/react';
const save = state => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
const load = () => {
  if (true) {
    return undefined;
  }

  let state;

  try {
    state = localStorage.getItem(STORAGE_KEY);

    if (typeof state === 'string') {
      state = JSON.parse(state);
    }

    if (state && state.version !== store_version) {
      state = undefined;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return state || undefined;
};

const bindMiddleware = (...middleware) => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const makeStore = () => Object(external_redux_["createStore"])(rootReducer, bindMiddleware(external_redux_thunk_default.a));

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore);

/***/ }),

/***/ "vs8Z":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yKwN":
/***/ (function(module, exports) {

module.exports = require("photoswipe/dist/photoswipe-ui-default");

/***/ }),

/***/ "yuPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hasHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isDefaultFilterValue; });
/* unused harmony export getFilterDefaultValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return serializeFilterValue; });
/* unused harmony export deserializeFilterValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActiveFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getResetValue; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fkzy");
// application


function isRangeFilterValue(value) {
  if (!Array.isArray(value) || value.length !== 2) {
    return false;
  }

  return !(typeof value[0] !== 'number' || typeof value[1] !== 'number');
}

function isCheckFilterValue(value) {
  return Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__[/* isArrayOfStrings */ "e"])(value);
}

function isRadioFilterValue(value) {
  return value === null || typeof value === 'string';
}

function isColorFilterValue(value) {
  return Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__[/* isArrayOfStrings */ "e"])(value);
}

function isRatingFilterValue(value) {
  return Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__[/* isArrayOfNumbers */ "d"])(value);
}

const CheckFilterHandler = {
  serialize: value => {
    if (!isCheckFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.join(',');
  },
  deserialize: value => value ? value.split(',') : [],
  isDefaultValue: (filter, value) => {
    if (!isCheckFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.length === 0;
  },
  getDefaultValue: () => [],
  getActiveFilters: filter => {
    if (filter.type !== 'check') {
      throw Error('Provide a "check" filter!');
    }

    if (CheckFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
      id: `${filter.slug}/${item.slug}`,
      type: filter.type,
      original: filter,
      item
    }));
  },

  getResetValue(activeFilters) {
    const itemSlugs = activeFilters.map(x => x.item.slug);
    return CheckFilterHandler.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
  }

};
const ColorFilterHandler = {
  serialize: value => {
    if (!isColorFilterValue(value)) {
      throw Error('Provide a valid "color" filter value!');
    }

    return value.join(',');
  },
  deserialize: value => value ? value.split(',') : [],
  isDefaultValue: (filter, value) => {
    if (!isColorFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.length === 0;
  },
  getDefaultValue: () => [],
  getActiveFilters: filter => {
    if (filter.type !== 'color') {
      throw Error('Provide a "color" filter!');
    }

    if (ColorFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
      id: `${filter.slug}/${item.slug}`,
      type: filter.type,
      original: filter,
      item
    }));
  },
  getResetValue: activeFilters => {
    const itemSlugs = activeFilters.map(x => x.item.slug);
    return ColorFilterHandler.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
  }
};
const RadioFilterHandler = {
  serialize: value => {
    if (!isRadioFilterValue(value)) {
      throw Error('Provide a valid "radio" filter value!');
    }

    return value === null ? '' : value;
  },
  deserialize: value => value,
  isDefaultValue: (filter, value) => {
    if (!isRadioFilterValue(value)) {
      throw Error('Provide a valid "radio" filter value!');
    }

    return RadioFilterHandler.getDefaultValue(filter) === value;
  },
  getDefaultValue: filter => {
    if (filter.type !== 'radio') {
      throw Error('Provide a "radio" filter!');
    }

    return filter.items[0].slug;
  },
  getActiveFilters: filter => {
    if (filter.type !== 'radio') {
      throw Error('Provide a "radio" filter!');
    }

    if (RadioFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return [{
      id: filter.slug,
      type: filter.type,
      original: filter,
      item: filter.items.find(x => x.slug === filter.value)
    }];
  },
  getResetValue: activeFilters => activeFilters[0].original.items[0].slug
};
const RangeFilterHandler = {
  serialize: value => {
    if (!isRangeFilterValue(value)) {
      throw Error('Provide a valid "range" filter value!');
    }

    return value.join('-');
  },
  deserialize: value => value ? value.split('-').map(parseFloat) : undefined,
  isDefaultValue: (filter, value) => {
    if (filter.type !== 'range') {
      throw Error('Provide a "range" filter!');
    }

    if (!isRangeFilterValue(value)) {
      throw Error('Provide a valid "range" filter value!');
    }

    return filter.min === value[0] && filter.max === value[1];
  },
  getDefaultValue: filter => {
    if (filter.type !== 'range') {
      throw Error('Provide a "range" filter!');
    }

    return [filter.min, filter.max];
  },
  getActiveFilters: filter => {
    if (filter.type !== 'range') {
      throw Error('Provide a "range" filter!');
    }

    if (RangeFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return [{
      id: filter.slug,
      type: filter.type,
      original: filter
    }];
  },
  getResetValue: activeFilters => RangeFilterHandler.serialize([activeFilters[0].original.min, activeFilters[0].original.max])
};
const RatingFilterHandler = {
  serialize: value => {
    if (!isRatingFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.join(',');
  },
  deserialize: value => value ? value.split(',').map(parseFloat) : [],
  isDefaultValue: (filter, value) => {
    if (!isRatingFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.length === 0;
  },
  getDefaultValue: () => [],
  getActiveFilters: filter => {
    if (filter.type !== 'rating') {
      throw Error('Provide a "rating" filter!');
    }

    if (RatingFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return filter.items.filter(x => filter.value.includes(x.rating)).map(item => ({
      id: `${filter.slug}/${item.rating}`,
      type: 'rating',
      original: filter,
      item
    }));
  },
  getResetValue: activeFilters => {
    const itemSlugs = activeFilters.map(x => x.item.rating);
    return RatingFilterHandler.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
  }
};
const VehicleFilterHandler = {
  serialize: value => value === null ? '' : value.toString(),
  deserialize: value => value === '' ? null : parseFloat(value),
  isDefaultValue: (filter, value) => value === null,
  getDefaultValue: () => null,
  getActiveFilters: filter => {
    if (filter.type !== 'vehicle') {
      throw Error('Provide a "vehicle" filter!');
    }

    return filter.value ? [{
      id: filter.slug,
      type: 'vehicle',
      original: filter
    }] : [];
  },
  getResetValue: () => null
};

function getFilterHandler(filter) {
  switch (filter.type) {
    case 'check':
      return CheckFilterHandler;

    case 'color':
      return ColorFilterHandler;

    case 'radio':
      return RadioFilterHandler;

    case 'range':
      return RangeFilterHandler;

    case 'rating':
      return RatingFilterHandler;

    case 'vehicle':
      return VehicleFilterHandler;

    default:
      return null;
  }
}

function getExistsFilterHandler(filter) {
  const handler = getFilterHandler(filter);

  if (!handler) {
    throw Error('Unhandled filter type!');
  }

  return handler;
}

function hasHandler(filter) {
  return getFilterHandler(filter) !== null;
}
function isDefaultFilterValue(filter, value) {
  return getExistsFilterHandler(filter).isDefaultValue(filter, value);
}
function getFilterDefaultValue(filter) {
  return getExistsFilterHandler(filter).getDefaultValue(filter);
}
function serializeFilterValue(filter, value) {
  return getExistsFilterHandler(filter).serialize(value);
}
function deserializeFilterValue(filter, value) {
  return getExistsFilterHandler(filter).deserialize(value);
}
function getFilterValue(filter, currentSerializedValue) {
  return deserializeFilterValue(filter, currentSerializedValue) || getFilterDefaultValue(filter);
}
function getActiveFilters(filter) {
  return getExistsFilterHandler(filter).getActiveFilters(filter);
}
function getResetValue(activeFilters) {
  return getExistsFilterHandler(activeFilters[0].original).getResetValue(activeFilters);
}

/***/ }),

/***/ "zUlF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useProductForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zlw4");
/* harmony import */ var _store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Zrnz");
/* eslint-disable no-alert */
// react
 // third-party


 // application



function useProductForm(product) {
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const cartAddItem = Object(_store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_4__[/* useCartAddItem */ "b"])();
  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    defaultValues: {
      quantity: 1
    }
  });
  const {
    handleSubmit
  } = methods;
  const {
    submitCount
  } = methods.formState;
  const prevSubmitCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (prevSubmitCount.current !== submitCount && Object.keys(methods.errors).length > 0) {
      if (methods.errors.quantity) {
        alert(intl.formatMessage({
          id: 'ERROR_ADD_TO_CART_QUANTITY'
        }));
      } else if (methods.errors.options) {
        alert(intl.formatMessage({
          id: 'ERROR_ADD_TO_CART_OPTIONS'
        }));
      }
    }

    prevSubmitCount.current = submitCount;
  }, [intl, submitCount, methods.errors]);
  const [submit, submitInProgress] = Object(_store_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useAsyncAction */ "c"])(async data => {
    if (!product) {
      return null;
    }

    const options = [];
    Object.keys(data.options).forEach(optionSlug => {
      const option = product.options.find(x => x.slug === optionSlug);

      if (!option) {
        return;
      }

      const value = option.values.find(x => x.slug === data.options[optionSlug]);

      if (!value) {
        return;
      }

      options.push({
        name: option.name,
        value: value.name
      });
    });
    return cartAddItem(product, options, typeof data.quantity === 'number' ? data.quantity : 1);
  }, [product, cartAddItem]);
  return {
    submit: Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => handleSubmit(submit), [handleSubmit, submit]),
    submitInProgress: submitInProgress || methods.formState.isSubmitting,
    errors: methods.errors,
    register: methods.register,
    watch: methods.watch,
    methods
  };
}

/***/ })

/******/ });