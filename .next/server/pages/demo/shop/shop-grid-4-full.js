module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		58: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"77":"5fff760cb70850be9205","78":"6fb937e97ded0a012aca","79":"ac19ae678f18b25fe617"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "1Nz/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react


function Collapse(props) {
  const {
    toggleClass,
    render,
    open
  } = props;
  const {
    0: init,
    1: setInit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const itemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const expand = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((immediate = false) => {
    const item = itemRef.current;
    const content = contentRef.current || item;

    if (!item || !content) {
      return;
    }

    if (immediate) {
      item.classList.add(toggleClass);
      content.style.height = '';
    } else {
      const startHeight = content.getBoundingClientRect().height;
      item.classList.add(toggleClass);
      const endHeight = content.getBoundingClientRect().height;
      content.style.height = `${startHeight}px`;
      content.getBoundingClientRect(); // force reflow

      content.style.height = `${endHeight}px`;

      if (content.getBoundingClientRect().height === endHeight) {
        content.style.height = '';
      }
    }
  }, [toggleClass, itemRef, contentRef]);
  const collapse = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((immediate = false) => {
    const item = itemRef.current;
    const content = contentRef.current || item;

    if (!item || !content) {
      return;
    }

    if (immediate) {
      item.classList.remove(toggleClass);
      content.style.height = '';
    } else {
      const startHeight = content.getBoundingClientRect().height;
      content.style.height = `${startHeight}px`;
      item.classList.remove(toggleClass);
      content.getBoundingClientRect(); // force reflow

      content.style.height = '';
    }
  }, [toggleClass, itemRef, contentRef]);
  const handleToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const item = itemRef.current;

    if (!item) {
      return;
    }

    if (item.classList.contains(toggleClass)) {
      collapse();
    } else {
      expand();
    }
  }, [expand, collapse, toggleClass, itemRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (typeof open === 'boolean') {
      if (open) {
        expand(!init);
      } else {
        collapse(!init);
      }
    }

    setInit(true);
  }, [expand, collapse, open, init]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const item = itemRef.current;
    const content = contentRef.current || item;

    if (!content) {
      return () => {};
    }

    const handleTransitionEnd = event => {
      if (content && event.propertyName === 'height') {
        content.style.height = '';
      }
    };

    content.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      if (!content) {
        return;
      }

      content.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (render) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, render({
        toggle: handleToggle,
        setItemRef: itemRef,
        setContentRef: contentRef
      }));
    }

    return null;
  }, [render, handleToggle, itemRef, contentRef]);
}

/* harmony default export */ __webpack_exports__["a"] = (Collapse);

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

/***/ "4+vF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/blocks/BlockHeader.tsx + 1 modules
var BlockHeader = __webpack_require__("xBAi");

// EXTERNAL MODULE: ./src/components/blocks/BlockSpace.tsx
var BlockSpace = __webpack_require__("gOg4");

// EXTERNAL MODULE: ./src/components/shared/CurrencyFormat.tsx
var CurrencyFormat = __webpack_require__("d4Ds");

// EXTERNAL MODULE: ./src/components/shared/Pagination.tsx
var Pagination = __webpack_require__("aIPm");

// EXTERNAL MODULE: ./src/components/shared/ProductCard.tsx
var ProductCard = __webpack_require__("uWXE");

// CONCATENATED MODULE: ./src/services/sidebar.tsx
var __jsx = external_react_default.a.createElement;
// react

const SidebarContext = external_react_default.a.createContext([false, () => {}]);
function SidebarProvider({
  children
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const value = Object(external_react_["useMemo"])(() => [isOpen, setIsOpen], [isOpen, setIsOpen]);
  return __jsx(SidebarContext.Provider, {
    value: value
  }, children);
}
// EXTERNAL MODULE: ./src/svg/index.ts
var svg = __webpack_require__("P3CU");

// EXTERNAL MODULE: ./src/store/shop/shopTypes.ts
var shopTypes = __webpack_require__("+L6p");

// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// EXTERNAL MODULE: ./src/store/shop/shopActions.ts
var shopActions = __webpack_require__("yB8m");

// CONCATENATED MODULE: ./src/store/shop/shopHooks.ts
// react
 // application




function useShopSelector(selector) {
  return Object(hooks["b" /* useAppSelector */])(state => selector(state[shopTypes["a" /* SHOP_NAMESPACE */]]));
}
const useShop = () => useShopSelector(state => state);
const useShopProductsListIsLoading = () => useShopSelector(state => state.productsListIsLoading);
const useShopProductsList = () => useShopSelector(state => state.productsList);
const useShopOptions = () => useShopSelector(state => state.options);
const useShopFilters = () => useShopSelector(state => {
  var _state$productsList;

  return ((_state$productsList = state.productsList) === null || _state$productsList === void 0 ? void 0 : _state$productsList.filters) || [];
});
const useShopFilterValues = () => useShopSelector(state => state.filters);
const useShopResetFiltersThunk = () => Object(hooks["a" /* useAppAction */])(shopActions["c" /* shopResetFiltersThunk */]);
const useShopResetFilterThunk = () => Object(hooks["a" /* useAppAction */])(shopActions["b" /* shopResetFilterThunk */]);
const useShopSetOptionValueThunk = () => Object(hooks["a" /* useAppAction */])(shopActions["e" /* shopSetOptionValueThunk */]);
const useShopSetFilterValueThunk = () => Object(hooks["a" /* useAppAction */])(shopActions["d" /* shopSetFilterValueThunk */]);
function useSetOption(option, filterValueFn) {
  const callback = Object(external_react_["useCallback"])(filterValueFn, []);
  const shopSetOptionValue = useShopSetOptionValueThunk();
  return Object(external_react_["useCallback"])(data => {
    shopSetOptionValue(option, callback(data)).then();
  }, [shopSetOptionValue, option, callback]);
}
// CONCATENATED MODULE: ./src/components/shop/ProductsView.tsx
var ProductsView_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application








function ProductsView(props) {
  const {
    layout: layoutProps,
    gridLayout,
    offCanvasSidebar
  } = props;
  const intl = Object(external_react_intl_["useIntl"])();
  const isLoading = useShopProductsListIsLoading();
  const shop = useShop();
  const productsList = useShopProductsList();
  const options = useShopOptions();
  const shopResetFilters = useShopResetFiltersThunk();
  const shopResetFilter = useShopResetFilterThunk();
  const {
    1: setSidebarIsOpen
  } = Object(external_react_["useContext"])(SidebarContext);
  const {
    0: layout,
    1: setLayout
  } = Object(external_react_["useState"])(layoutProps);
  const handlePageChange = useSetOption('page', parseFloat);
  const handleSortChange = useSetOption('sort', event => event.target.value);
  const handleLimitChange = useSetOption('limit', event => parseFloat(event.target.value));
  const isEmptyList = (productsList === null || productsList === void 0 ? void 0 : productsList.total) === 0;
  const hasActiveFilters = shop.activeFilters.length > 0;
  const currentFiltersCount = shop.currentFilters.length;
  const {
    currentFilters
  } = shop;

  const handleFiltersClick = () => {
    setSidebarIsOpen(true);
  };

  const layoutButtons = Object(external_react_["useMemo"])(() => [{
    layout: 'grid',
    icon: ProductsView_jsx(svg["A" /* LayoutGrid16Svg */], null)
  }, {
    layout: 'grid-with-features',
    icon: ProductsView_jsx(svg["B" /* LayoutGridWithDetails16Svg */], null)
  }, {
    layout: 'list',
    icon: ProductsView_jsx(svg["C" /* LayoutList16Svg */], null)
  }, {
    layout: 'table',
    icon: ProductsView_jsx(svg["D" /* LayoutTable16Svg */], null)
  }], []);
  const rootClasses = external_classnames_default()('products-view', {
    'products-view--loading': isLoading
  });
  const viewOptionsClasses = external_classnames_default()('products-view__options', 'view-options', `view-options--offcanvas--${offCanvasSidebar}`);
  const productListClasses = external_classnames_default()('products-view__list', 'products-list', {
    'products-list--grid--6': gridLayout === 'grid-6-full',
    'products-list--grid--5': gridLayout === 'grid-5-full',
    'products-list--grid--4': ['grid-4-full', 'grid-4-sidebar'].includes(gridLayout),
    'products-list--grid--3': gridLayout === 'grid-3-sidebar'
  });

  if (!productsList) {
    return null;
  }

  return ProductsView_jsx("div", {
    className: rootClasses
  }, ProductsView_jsx("div", {
    className: "products-view__body"
  }, ProductsView_jsx("div", {
    className: "products-view__loader"
  }), isEmptyList && hasActiveFilters && ProductsView_jsx("div", {
    className: "products-view__empty"
  }, ProductsView_jsx("div", {
    className: "products-view__empty-title"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_NO_MATCHING_ITEMS_TITLE"
  })), ProductsView_jsx("div", {
    className: "products-view__empty-subtitle"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_NO_MATCHING_ITEMS_SUBTITLE"
  })), ProductsView_jsx("div", {
    className: "products-view__empty-actions"
  }, ProductsView_jsx("button", {
    type: "button",
    className: "btn btn-primary btn-sm",
    onClick: shopResetFilters
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_RESET_FILTERS"
  })))), isEmptyList && !hasActiveFilters && ProductsView_jsx("div", {
    className: "products-view__empty"
  }, ProductsView_jsx("div", {
    className: "products-view__empty-title"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_CATEGORY_IS_EMPTY_TITLE"
  })), ProductsView_jsx("div", {
    className: "products-view__empty-subtitle"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_CATEGORY_IS_EMPTY_SUBTITLE"
  }))), !isEmptyList && ProductsView_jsx(external_react_default.a.Fragment, null, ProductsView_jsx("div", {
    className: viewOptionsClasses
  }, ProductsView_jsx("div", {
    className: "view-options__body"
  }, ProductsView_jsx("button", {
    type: "button",
    className: "view-options__filters-button filters-button",
    onClick: handleFiltersClick
  }, ProductsView_jsx("span", {
    className: "filters-button__icon"
  }, ProductsView_jsx(svg["w" /* Filters16Svg */], null)), ProductsView_jsx("span", {
    className: "filters-button__title"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_FILTERS"
  })), ProductsView_jsx("span", {
    className: "filters-button__counter"
  }, currentFiltersCount)), ProductsView_jsx("div", {
    className: "view-options__layout layout-switcher"
  }, ProductsView_jsx("div", {
    className: "layout-switcher__list"
  }, layoutButtons.map(button => {
    const buttonClasses = external_classnames_default()('layout-switcher__button', {
      'layout-switcher__button--active': button.layout === layout
    });
    return ProductsView_jsx("button", {
      key: button.layout,
      type: "button",
      className: buttonClasses,
      onClick: () => setLayout(button.layout)
    }, button.icon);
  }))), ProductsView_jsx("div", {
    className: "view-options__legend"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_SHOWING_PRODUCTS",
    values: {
      from: productsList.from,
      to: productsList.to,
      total: productsList.total
    }
  })), ProductsView_jsx("div", {
    className: "view-options__spring"
  }), ProductsView_jsx("div", {
    className: "view-options__select"
  }, ProductsView_jsx("label", {
    htmlFor: "view-option-sort"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_SORT_LABEL"
  }), ":"), ProductsView_jsx("select", {
    id: "view-option-sort",
    className: "form-control form-control-sm",
    value: options.sort || productsList.sort,
    onChange: handleSortChange
  }, ProductsView_jsx("option", {
    value: "default"
  }, intl.formatMessage({
    id: 'INPUT_SORT_OPTION_DEFAULT'
  })), ProductsView_jsx("option", {
    value: "name_asc"
  }, intl.formatMessage({
    id: 'INPUT_SORT_OPTION_NAME_ASC'
  })), ProductsView_jsx("option", {
    value: "name_desc"
  }, intl.formatMessage({
    id: 'INPUT_SORT_OPTION_NAME_DESC'
  })))), ProductsView_jsx("div", {
    className: "view-options__select"
  }, ProductsView_jsx("label", {
    htmlFor: "view-option-limit"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_LIMIT_LABEL"
  }), ":"), ProductsView_jsx("select", {
    id: "view-option-limit",
    className: "form-control form-control-sm",
    value: options.limit || productsList.limit,
    onChange: handleLimitChange
  }, ProductsView_jsx("option", {
    value: "8"
  }, "8"), ProductsView_jsx("option", {
    value: "16"
  }, "16"), ProductsView_jsx("option", {
    value: "24"
  }, "24"), ProductsView_jsx("option", {
    value: "32"
  }, "32")))), hasActiveFilters && ProductsView_jsx("div", {
    className: "view-options__body view-options__body--filters"
  }, ProductsView_jsx("div", {
    className: "view-options__label"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_ACTIVE_FILTERS"
  })), ProductsView_jsx("div", {
    className: "view-options__applied-filters applied-filters"
  }, ProductsView_jsx("ul", {
    className: "applied-filters__list"
  }, currentFilters.map((filter, index) => ProductsView_jsx("li", {
    key: index,
    className: "applied-filters__item"
  }, ProductsView_jsx("button", {
    type: "button",
    className: "applied-filters__button applied-filters__button--filter",
    onClick: () => shopResetFilter(filter)
  }, filter.type === 'vehicle' && filter.original.vehicle && ProductsView_jsx(external_react_default.a.Fragment, null, filter.original.vehicle.year, ' ', filter.original.vehicle.make, ' ', filter.original.vehicle.model), filter.type === 'range' && ProductsView_jsx(external_react_default.a.Fragment, null, ProductsView_jsx(CurrencyFormat["a" /* default */], {
    value: filter.original.value[0]
  }), ' – ', ProductsView_jsx(CurrencyFormat["a" /* default */], {
    value: filter.original.value[1]
  })), filter.type === 'check' && filter.item.name, filter.type === 'radio' && ProductsView_jsx(external_react_default.a.Fragment, null, filter.original.name, ': ', filter.item.name), filter.type === 'rating' && ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_STARS",
    values: {
      stars: filter.item.rating
    }
  }), filter.type === 'color' && filter.item.name, ProductsView_jsx(svg["r" /* Cross9LightSvg */], null)))), ProductsView_jsx("li", {
    className: "applied-filters__item"
  }, ProductsView_jsx("button", {
    type: "button",
    className: "applied-filters__button applied-filters__button--clear",
    onClick: shopResetFilters
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_CLEAR_ALL"
  }))))))), ProductsView_jsx("div", {
    className: productListClasses,
    "data-layout": layout === 'grid-with-features' ? 'grid' : layout,
    "data-with-features": layout === 'grid-with-features' ? 'true' : 'false'
  }, ProductsView_jsx("div", {
    className: "products-list__head"
  }, ProductsView_jsx("div", {
    className: "products-list__column products-list__column--image"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_IMAGE"
  })), ProductsView_jsx("div", {
    className: "products-list__column products-list__column--meta"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_SKU"
  })), ProductsView_jsx("div", {
    className: "products-list__column products-list__column--product"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_PRODUCT"
  })), ProductsView_jsx("div", {
    className: "products-list__column products-list__column--rating"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_RATING"
  })), ProductsView_jsx("div", {
    className: "products-list__column products-list__column--price"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TABLE_PRICE"
  }))), ProductsView_jsx("div", {
    className: "products-list__content"
  }, productsList === null || productsList === void 0 ? void 0 : productsList.items.map(product => ProductsView_jsx("div", {
    key: product.id,
    className: "products-list__item"
  }, ProductsView_jsx(ProductCard["a" /* default */], {
    product: product
  }))))), ProductsView_jsx("div", {
    className: "products-view__pagination"
  }, ProductsView_jsx("nav", {
    "aria-label": "Page navigation example"
  }, ProductsView_jsx(Pagination["a" /* default */], {
    current: options.page || productsList.page,
    total: productsList.pages,
    siblings: 2,
    onPageChange: handlePageChange
  })), ProductsView_jsx("div", {
    className: " products-view__pagination-legend"
  }, ProductsView_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_SHOWING_PRODUCTS",
    values: {
      from: productsList.from,
      to: productsList.to,
      total: productsList.total
    }
  }))))));
}

/* harmony default export */ var shop_ProductsView = (ProductsView);
// EXTERNAL MODULE: ./src/components/shared/AppLink.tsx
var AppLink = __webpack_require__("+Sw2");

// EXTERNAL MODULE: ./src/services/url.ts
var url = __webpack_require__("NUuo");

// EXTERNAL MODULE: ./src/services/utils.ts
var utils = __webpack_require__("fkzy");

// CONCATENATED MODULE: ./src/components/filters/FilterCategory.tsx
var FilterCategory_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application






function FilterCategory(props) {
  const {
    options
  } = props;
  return FilterCategory_jsx("div", {
    className: "filter-category"
  }, FilterCategory_jsx("ul", {
    className: "filter-category__list"
  }, options.value && FilterCategory_jsx("li", {
    className: "filter-category__item filter-category__item--parent"
  }, FilterCategory_jsx("span", {
    className: "filter-category__arrow"
  }, FilterCategory_jsx(svg["e" /* ArrowRoundedLeft6x9Svg */], null)), FilterCategory_jsx(AppLink["a" /* default */], {
    href: url["a" /* default */].products()
  }, FilterCategory_jsx(external_react_intl_["FormattedMessage"], {
    id: "LINK_ALL_PRODUCTS"
  }))), options.items.map(item => {
    var _item$children;

    return FilterCategory_jsx(external_react_default.a.Fragment, {
      key: item.id
    }, Object(utils["b" /* getCategoryParents */])(item).map(parent => FilterCategory_jsx("li", {
      key: parent.id,
      className: "filter-category__item filter-category__item--parent"
    }, FilterCategory_jsx("span", {
      className: "filter-category__arrow"
    }, FilterCategory_jsx(svg["e" /* ArrowRoundedLeft6x9Svg */], null)), FilterCategory_jsx(AppLink["a" /* default */], {
      href: url["a" /* default */].category(parent)
    }, parent.name))), FilterCategory_jsx("li", {
      className: external_classnames_default()('filter-category__item', {
        'filter-category__item--current': options.value
      })
    }, FilterCategory_jsx(AppLink["a" /* default */], {
      href: url["a" /* default */].category(item)
    }, item.name)), (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(child => FilterCategory_jsx("li", {
      key: child.id,
      className: "filter-category__item filter-category__item--child"
    }, FilterCategory_jsx(AppLink["a" /* default */], {
      href: url["a" /* default */].category(child)
    }, child.name))));
  })));
}

/* harmony default export */ var filters_FilterCategory = (FilterCategory);
// EXTERNAL MODULE: ./src/components/shared/Checkbox.tsx
var Checkbox = __webpack_require__("z9Si");

// EXTERNAL MODULE: ./src/components/shared/VehiclePickerModal.tsx
var VehiclePickerModal = __webpack_require__("iqdC");

// EXTERNAL MODULE: ./src/services/current-vehicle.tsx
var current_vehicle = __webpack_require__("eN2N");

// CONCATENATED MODULE: ./src/components/filters/FilterVehicle.tsx
var FilterVehicle_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application





function FilterVehicle(props) {
  const {
    options,
    value,
    onChangeValue
  } = props;
  const [currentVehicle, setCurrentVehicle] = Object(current_vehicle["c" /* useCurrentVehicle */])();
  const {
    0: vehiclePickerIsOpen,
    1: setVehiclePickerIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: initialVehicle
  } = Object(external_react_["useState"])(options.vehicle);

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: options,
        value: newValue
      });
    }
  };

  const handleChange = event => {
    if (event.target.checked && currentVehicle) {
      updateValue(currentVehicle.id);
    } else {
      updateValue(null);
    }
  };

  const showVehiclePicker = () => {
    setVehiclePickerIsOpen(true);
  };

  const onVehiclePickerClose = () => {
    setVehiclePickerIsOpen(false);
  };

  const onVehiclePickerSelect = selectedVehicle => {
    setCurrentVehicle(selectedVehicle || null);

    if (value !== null) {
      updateValue((selectedVehicle === null || selectedVehicle === void 0 ? void 0 : selectedVehicle.id) || null);
    }
  };

  Object(external_react_["useEffect"])(() => {
    if (initialVehicle === null) {
      return;
    }

    setTimeout(() => {
      setCurrentVehicle(initialVehicle || null);
    }, 0);
  }, [setCurrentVehicle, initialVehicle]);
  return FilterVehicle_jsx("div", {
    className: "filter-vehicle"
  }, FilterVehicle_jsx(VehiclePickerModal["a" /* default */], {
    value: currentVehicle,
    isOpen: vehiclePickerIsOpen,
    onClose: onVehiclePickerClose,
    onSelect: onVehiclePickerSelect
  }), currentVehicle !== null && FilterVehicle_jsx("ul", {
    className: "filter-vehicle__list"
  }, FilterVehicle_jsx("li", {
    className: "filter-vehicle__item"
  }, FilterVehicle_jsx("label", {
    className: "filter-vehicle__item-label"
  }, FilterVehicle_jsx(Checkbox["a" /* default */], {
    className: "filter-list__input",
    checked: value !== null,
    onChange: handleChange
  }), FilterVehicle_jsx("span", {
    className: "filter-vehicle__item-title"
  }, FilterVehicle_jsx(external_react_intl_["FormattedMessage"], {
    id: "INPUT_ONLY_EXACT_FIT_PARTS_LABEL"
  })))), FilterVehicle_jsx("li", {
    className: "filter-vehicle__vehicle"
  }, FilterVehicle_jsx("div", {
    className: "filter-vehicle__vehicle-title"
  }, `${currentVehicle.year} ${currentVehicle.make} ${currentVehicle.model}`), FilterVehicle_jsx("div", {
    className: "filter-vehicle__vehicle-subtitle"
  }, currentVehicle.engine))), currentVehicle === null && FilterVehicle_jsx("div", {
    className: "filter-vehicle__empty"
  }, FilterVehicle_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_VEHICLE_FILTER_HELP"
  })), FilterVehicle_jsx("div", {
    className: "filter-vehicle__button"
  }, FilterVehicle_jsx("button", {
    type: "button",
    className: "btn btn-xs btn-secondary",
    onClick: showVehiclePicker
  }, FilterVehicle_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_SELECT_VEHICLE"
  }))));
}

/* harmony default export */ var filters_FilterVehicle = (FilterVehicle);
// EXTERNAL MODULE: ./src/services/filters.ts
var services_filters = __webpack_require__("yuPr");

// EXTERNAL MODULE: external "react-input-range"
var external_react_input_range_ = __webpack_require__("5U/F");
var external_react_input_range_default = /*#__PURE__*/__webpack_require__.n(external_react_input_range_);

// EXTERNAL MODULE: ./src/services/i18n/hooks.ts
var i18n_hooks = __webpack_require__("+oNx");

// CONCATENATED MODULE: ./src/components/filters/FilterRange.tsx
var FilterRange_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application




function getFirstValidValue(...values) {
  return values.reduce((acc, value) => acc === null && (value || value === 0) ? value : acc, null);
}

function FilterRange(props) {
  const {
    options,
    value,
    onChangeValue
  } = props;
  const [propsFrom, propsTo] = value || [];
  const {
    0: timer,
    1: setTimer
  } = Object(external_react_["useState"])();
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])([propsFrom, propsTo]);
  const [stateFrom, stateTo] = state;
  const direction = Object(i18n_hooks["a" /* useDirection */])();
  let {
    min,
    max
  } = options;
  let from = Math.max(getFirstValidValue(stateFrom, propsFrom, min), min);
  let to = Math.min(getFirstValidValue(stateTo, propsTo, max), max);
  let fromLabel = from;
  let toLabel = to; // since react-input-range does not support RTL direction,
  // we just need to invert and swipe values

  if (direction === 'rtl') {
    [from, to] = [to * -1, from * -1];
    [min, max] = [max * -1, min * -1];
    [fromLabel, toLabel] = [from * -1, to * -1];
  } // Update state from props.


  Object(external_react_["useEffect"])(() => {
    setState([propsFrom, propsTo]);
  }, [propsFrom, propsTo]); // Clear previous timer.

  Object(external_react_["useEffect"])(() => () => {
    clearTimeout(timer);
  }, [timer]);
  const handleChange = Object(external_react_["useCallback"])(newValue => {
    let {
      min: newFrom,
      max: newTo
    } = newValue; // This is needed to fix a bug in react-input-range.

    [newFrom, newTo] = [Math.max(newFrom, min), Math.min(newTo, max)]; // since react-input-range does not support RTL direction,
    // we just need to invert and swipe values

    if (direction === 'rtl') {
      [newFrom, newTo] = [newTo * -1, newFrom * -1];
    }

    setState([newFrom, newTo]);

    if (onChangeValue) {
      setTimer(setTimeout(() => {
        onChangeValue({
          filter: options,
          value: [newFrom, newTo]
        });
      }, 250));
    }
  }, [min, max, options, onChangeValue, direction, setTimer, setState]);
  return Object(external_react_["useMemo"])(() => FilterRange_jsx("div", {
    className: "filter-range"
  }, FilterRange_jsx("div", {
    className: "filter-range__slider",
    dir: "ltr"
  }, FilterRange_jsx(external_react_input_range_default.a, {
    minValue: min,
    maxValue: max,
    value: {
      min: from,
      max: to
    },
    step: 1,
    onChange: handleChange
  })), FilterRange_jsx("div", {
    className: "filter-range__title-button"
  }, FilterRange_jsx("div", {
    className: "filter-range__title"
  }, FilterRange_jsx("span", {
    className: "filter-range__min-value"
  }, FilterRange_jsx(CurrencyFormat["a" /* default */], {
    value: fromLabel
  })), ' – ', FilterRange_jsx("span", {
    className: "filter-range__max-value"
  }, FilterRange_jsx(CurrencyFormat["a" /* default */], {
    value: toLabel
  }))))), [min, max, from, to, fromLabel, toLabel, handleChange]);
}

/* harmony default export */ var filters_FilterRange = (FilterRange);
// CONCATENATED MODULE: ./src/components/filters/FilterCheck.tsx
var FilterCheck_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application



function FilterCheck(props) {
  const {
    options,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: options,
        value: newValue
      });
    }
  }; // noinspection DuplicatedCode


  const handleChange = event => {
    if (event.target.checked && !value.includes(event.target.value)) {
      updateValue([...value, event.target.value]);
    }

    if (!event.target.checked && value.includes(event.target.value)) {
      updateValue(value.filter(x => x !== event.target.value));
    }
  };

  return FilterCheck_jsx("div", {
    className: "filter-list"
  }, FilterCheck_jsx("div", {
    className: "filter-list__list"
  }, options.items.map(item => FilterCheck_jsx("label", {
    key: item.slug,
    className: external_classnames_default()('filter-list__item', {
      'filter-list__item--disabled': item.count === 0
    })
  }, FilterCheck_jsx(Checkbox["a" /* default */], {
    className: "filter-list__input",
    value: item.slug,
    checked: value.includes(item.slug),
    disabled: item.count === 0,
    onChange: handleChange
  }), FilterCheck_jsx("span", {
    className: "filter-list__title"
  }, item.name), item.count !== 0 && FilterCheck_jsx("span", {
    className: "filter-list__counter"
  }, item.count)))));
}

/* harmony default export */ var filters_FilterCheck = (FilterCheck);
// EXTERNAL MODULE: ./src/components/shared/RadioButton.tsx
var RadioButton = __webpack_require__("OHag");

// CONCATENATED MODULE: ./src/components/filters/FilterRadio.tsx
var FilterRadio_jsx = external_react_default.a.createElement;
// react
 // application



function FilterRadio(props) {
  const {
    options,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: options,
        value: newValue
      });
    }
  };

  const handleChange = event => {
    if (event.target.checked && event.target.value !== value) {
      updateValue(event.target.value);
    }
  };

  return FilterRadio_jsx("div", {
    className: "filter-list"
  }, FilterRadio_jsx("div", {
    className: "filter-list__list"
  }, options.items.map(item => FilterRadio_jsx("label", {
    key: item.slug,
    className: "filter-list__item"
  }, FilterRadio_jsx(RadioButton["a" /* default */], {
    className: "filter-list__input",
    name: options.slug,
    value: item.slug,
    checked: value === item.slug,
    disabled: item.count === 0,
    onChange: handleChange
  }), FilterRadio_jsx("span", {
    className: "filter-list__title"
  }, item.name), item.count !== 0 && FilterRadio_jsx("span", {
    className: "filter-list__counter"
  }, item.count)))));
}

/* harmony default export */ var filters_FilterRadio = (FilterRadio);
// EXTERNAL MODULE: ./src/components/shared/Rating.tsx
var Rating = __webpack_require__("Kf4p");

// CONCATENATED MODULE: ./src/components/filters/FilterRating.tsx
var FilterRating_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application




function FilterRating(props) {
  const {
    options,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: options,
        value: newValue
      });
    }
  }; // noinspection DuplicatedCode


  const handleChange = event => {
    const currentValue = parseFloat(event.target.value);

    if (event.target.checked && !value.includes(currentValue)) {
      updateValue([...value, currentValue]);
    }

    if (!event.target.checked && value.includes(currentValue)) {
      updateValue(value.filter(x => x !== currentValue));
    }
  };

  return FilterRating_jsx("div", {
    className: "filter-rating"
  }, FilterRating_jsx("ul", {
    className: "filter-rating__list"
  }, options.items.map(item => FilterRating_jsx("li", {
    key: item.rating,
    className: external_classnames_default()('filter-rating__item', {
      'filter-rating__item--disabled': item.count === 0
    })
  }, FilterRating_jsx("label", {
    className: "filter-rating__item-label"
  }, FilterRating_jsx(Checkbox["a" /* default */], {
    className: "filter-rating__item-input",
    value: item.rating,
    checked: value.includes(item.rating),
    disabled: item.count === 0,
    onChange: handleChange
  }), FilterRating_jsx("span", {
    className: "filter-rating__item-stars"
  }, FilterRating_jsx(Rating["a" /* default */], {
    value: item.rating
  })), FilterRating_jsx("span", {
    className: "filter-rating__item-title sr-only"
  }, FilterRating_jsx(external_react_intl_["FormattedMessage"], {
    id: "TEXT_STARS",
    values: {
      stars: item.rating
    }
  })), item.count !== 0 && FilterRating_jsx("span", {
    className: "filter-rating__item-counter"
  }, item.count))))));
}

/* harmony default export */ var filters_FilterRating = (FilterRating);
// EXTERNAL MODULE: ./src/services/color.ts
var color = __webpack_require__("a920");

// CONCATENATED MODULE: ./src/components/filters/FilterColor.tsx
var FilterColor_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application




function FilterColor(props) {
  const {
    options,
    value,
    onChangeValue
  } = props;

  const updateValue = newValue => {
    if (onChangeValue) {
      onChangeValue({
        filter: options,
        value: newValue
      });
    }
  }; // noinspection DuplicatedCode


  const handleChange = event => {
    if (event.target.checked && !value.includes(event.target.value)) {
      updateValue([...value, event.target.value]);
    }

    if (!event.target.checked && value.includes(event.target.value)) {
      updateValue(value.filter(x => x !== event.target.value));
    }
  };

  return FilterColor_jsx("div", {
    className: "filter-color"
  }, FilterColor_jsx("div", {
    className: "filter-color__list"
  }, options.items.map(item => FilterColor_jsx("div", {
    key: item.slug,
    className: "filter-color__item"
  }, FilterColor_jsx("span", {
    className: external_classnames_default()('filter-color__check', 'input-check-color', {
      'input-check-color--white': Object(color["a" /* colorType */])(item.color) === 'white',
      'input-check-color--light': Object(color["a" /* colorType */])(item.color) === 'light'
    }),
    style: {
      color: item.color
    }
  }, FilterColor_jsx("label", {
    className: "input-check-color__body"
  }, FilterColor_jsx("input", {
    className: "input-check-color__input",
    type: "checkbox",
    value: item.slug,
    checked: value.includes(item.slug),
    disabled: item.count === 0,
    onChange: handleChange
  }), FilterColor_jsx("span", {
    className: "input-check-color__box"
  }), FilterColor_jsx("span", {
    className: "input-check-color__icon"
  }, FilterColor_jsx(svg["m" /* Check12x9Svg */], null)), FilterColor_jsx("span", {
    className: "input-check-color__stick"
  })))))));
}

/* harmony default export */ var filters_FilterColor = (FilterColor);
// EXTERNAL MODULE: ./src/components/shared/Collapse.tsx
var Collapse = __webpack_require__("1Nz/");

// CONCATENATED MODULE: ./src/components/filters/Filter.tsx
var Filter_jsx = external_react_default.a.createElement;













function Filter(props) {
  const {
    filter,
    value
  } = props;
  const shopSetFilterValue = useShopSetFilterValueThunk();
  const handleValueChange = Object(external_react_["useCallback"])(({
    filter,
    value
  }) => {
    shopSetFilterValue(filter.slug, Object(services_filters["e" /* isDefaultFilterValue */])(filter, value) ? null : Object(services_filters["f" /* serializeFilterValue */])(filter, value)).then();
  }, [shopSetFilterValue]);

  const renderFn = ({
    toggle,
    setItemRef,
    setContentRef
  }) => Filter_jsx("div", {
    className: "filter filter--opened",
    ref: setItemRef
  }, Filter_jsx("button", {
    type: "button",
    className: "filter__title",
    onClick: toggle
  }, filter.name, Filter_jsx("span", {
    className: "filter__arrow"
  }, Filter_jsx(svg["c" /* ArrowRoundedDown12x7Svg */], null))), Filter_jsx("div", {
    className: "filter__body",
    ref: setContentRef
  }, Filter_jsx("div", {
    className: "filter__container"
  }, filter.type === 'category' && Filter_jsx(filters_FilterCategory, {
    options: filter
  }), filter.type === 'vehicle' && Filter_jsx(filters_FilterVehicle, {
    options: filter,
    value: Object(services_filters["b" /* getFilterValue */])(filter, value),
    onChangeValue: handleValueChange
  }), filter.type === 'range' && Filter_jsx(filters_FilterRange, {
    options: filter,
    value: Object(services_filters["b" /* getFilterValue */])(filter, value),
    onChangeValue: handleValueChange
  }), filter.type === 'check' && Filter_jsx(filters_FilterCheck, {
    options: filter,
    value: Object(services_filters["b" /* getFilterValue */])(filter, value),
    onChangeValue: handleValueChange
  }), filter.type === 'radio' && Filter_jsx(filters_FilterRadio, {
    options: filter,
    value: Object(services_filters["b" /* getFilterValue */])(filter, value),
    onChangeValue: handleValueChange
  }), filter.type === 'rating' && Filter_jsx(filters_FilterRating, {
    options: filter,
    value: Object(services_filters["b" /* getFilterValue */])(filter, value),
    onChangeValue: handleValueChange
  }), filter.type === 'color' && Filter_jsx(filters_FilterColor, {
    options: filter,
    value: Object(services_filters["b" /* getFilterValue */])(filter, value),
    onChangeValue: handleValueChange
  }))));

  return Filter_jsx("div", {
    className: "widget-filters__item"
  }, Filter_jsx(Collapse["a" /* default */], {
    toggleClass: "filter--opened",
    render: renderFn
  }));
}

/* harmony default export */ var filters_Filter = (external_react_default.a.memo(Filter));
// CONCATENATED MODULE: ./src/components/widgets/WidgetFilters.tsx
var WidgetFilters_jsx = external_react_default.a.createElement;
// react
 // third-party


 // application




function WidgetFilters(props) {
  const {
    offcanvasSidebar
  } = props;
  const filters = useShopFilters();
  const values = useShopFilterValues();
  const shopResetFilters = useShopResetFiltersThunk();
  const rootClasses = external_classnames_default()('widget', 'widget-filters', `widget-filters--offcanvas--${offcanvasSidebar}`);
  return WidgetFilters_jsx("div", {
    className: rootClasses
  }, WidgetFilters_jsx("div", {
    className: "widget__header widget-filters__header"
  }, WidgetFilters_jsx("h4", null, WidgetFilters_jsx(external_react_intl_["FormattedMessage"], {
    id: "HEADER_FILTERS"
  }))), WidgetFilters_jsx("div", {
    className: "widget-filters__list"
  }, filters.map(filter => WidgetFilters_jsx(filters_Filter, {
    key: filter.slug,
    filter: filter,
    value: values[filter.slug]
  }))), WidgetFilters_jsx("div", {
    className: "widget-filters__actions d-flex"
  }, WidgetFilters_jsx("button", {
    type: "button",
    className: "btn btn-secondary btn-sm",
    onClick: shopResetFilters
  }, WidgetFilters_jsx(external_react_intl_["FormattedMessage"], {
    id: "BUTTON_RESET"
  }))));
}

/* harmony default export */ var widgets_WidgetFilters = (external_react_default.a.memo(WidgetFilters));
// EXTERNAL MODULE: ./src/components/widgets/WidgetProducts.tsx
var WidgetProducts = __webpack_require__("ZdEv");

// EXTERNAL MODULE: ./src/api/index.ts + 39 modules
var api = __webpack_require__("efbE");

// CONCATENATED MODULE: ./src/components/shop/ShopSidebar.tsx
var ShopSidebar_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
// react
 // third-party


 // application








function ShopSidebar(props) {
  const {
    offcanvas
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useContext"])(SidebarContext);
  const {
    0: latestProducts,
    1: setLatestProducts
  } = Object(external_react_["useState"])([]);
  const isMobile = Object(hooks["e" /* useMedia */])('(max-width: 991px)');
  const rootClasses = external_classnames_default()('sidebar', `sidebar--offcanvas--${offcanvas}`, {
    'sidebar--open': isOpen
  });

  const close = () => {
    setIsOpen(false);
  };

  Object(external_react_["useEffect"])(() => {
    if (isOpen) {
      const bodyWidth = document.body.offsetWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${document.body.offsetWidth - bodyWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isOpen]);
  Object(external_react_["useEffect"])(() => {
    if (offcanvas === 'mobile' && isOpen && !isMobile) {
      setIsOpen(false);
    }
  }, [offcanvas, isOpen, setIsOpen, isMobile]);
  Object(external_react_["useEffect"])(() => {
    let canceled = false;

    if (offcanvas === 'mobile') {
      api["d" /* shopApi */].getLatestProducts(5).then(products => {
        if (canceled) {
          return;
        }

        setLatestProducts(products);
      });
    }

    return () => {
      canceled = true;
    };
  }, [offcanvas, setLatestProducts]);
  const latestProductsTitle = Object(external_react_["useMemo"])(() => ShopSidebar_jsx(external_react_intl_["FormattedMessage"], {
    id: "HEADER_LATEST_PRODUCTS"
  }), []);
  return ShopSidebar_jsx("div", {
    className: rootClasses
  }, ShopSidebar_jsx("div", {
    className: "sidebar__backdrop",
    onClick: close
  }), ShopSidebar_jsx("div", {
    className: "sidebar__body"
  }, ShopSidebar_jsx("div", {
    className: "sidebar__header"
  }, ShopSidebar_jsx("div", {
    className: "sidebar__title"
  }, ShopSidebar_jsx(external_react_intl_["FormattedMessage"], {
    id: "HEADER_FILTERS"
  })), ShopSidebar_jsx("button", {
    className: "sidebar__close",
    type: "button",
    onClick: close
  }, ShopSidebar_jsx(svg["p" /* Cross12Svg */], null))), ShopSidebar_jsx("div", {
    className: "sidebar__content"
  }, ShopSidebar_jsx(widgets_WidgetFilters, {
    offcanvasSidebar: offcanvas
  }), offcanvas !== 'always' && ShopSidebar_jsx(WidgetProducts["a" /* default */], {
    className: "d-none d-lg-block",
    widgetTitle: latestProductsTitle,
    products: latestProducts
  }))));
}

/* harmony default export */ var shop_ShopSidebar = (external_react_default.a.memo(ShopSidebar));
// EXTERNAL MODULE: ./src/store/shop/shopHelpers.ts
var shopHelpers = __webpack_require__("WEhN");

// EXTERNAL MODULE: ./src/services/i18n/utils.ts + 1 modules
var i18n_utils = __webpack_require__("7eUB");

// EXTERNAL MODULE: ./src/services/router.ts
var services_router = __webpack_require__("i19i");

// CONCATENATED MODULE: ./src/components/shop/ShopPageShop.tsx
var ShopPageShop_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party



 // application














function ShopPageShop(props) {
  const {
    layout,
    gridLayout,
    sidebarPosition = 'start'
  } = props;
  const intl = Object(external_react_intl_["useIntl"])();
  const router = Object(services_router["b" /* useAppRouter */])();
  const shopState = useShop(); // Replace current url.

  Object(external_react_["useEffect"])(() => {
    const query = Object(shopHelpers["a" /* buildQuery */])(shopState.options, shopState.filters);
    const href = external_query_string_default.a.stringifyUrl(_objectSpread(_objectSpread({}, external_query_string_default.a.parseUrl(router.asPath)), {}, {
      query: external_query_string_default.a.parse(query)
    }), {
      encode: false
    });
    router.replace({
      pathname: router.pathname,
      query: {
        slug: router.query.slug
      }
    }, Object(i18n_utils["g" /* removePrefix */])(href), {
      shallow: true
    }).then(() => {
      // This is necessary for the "History API" to work.
      window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
        options: _objectSpread(_objectSpread({}, window.history.state.options), {}, {
          shallow: false
        })
      }), '', Object(utils["a" /* baseUrl */])(href));
    });
  }, [shopState.options, shopState.filters]);
  const hasSidebar = ['grid-3-sidebar', 'grid-4-sidebar'].includes(gridLayout);
  const offCanvasSidebar = ['grid-4-full', 'grid-5-full', 'grid-6-full'].includes(gridLayout) ? 'always' : 'mobile';
  const pageHeader = Object(external_react_["useMemo"])(() => {
    let pageTitle = intl.formatMessage({
      id: 'HEADER_SHOP'
    });
    const breadcrumb = [{
      title: intl.formatMessage({
        id: 'LINK_HOME'
      }),
      url: url["a" /* default */].home()
    }, {
      title: intl.formatMessage({
        id: 'LINK_SHOP'
      }),
      url: url["a" /* default */].shop()
    }];

    if (shopState.category) {
      Object(utils["b" /* getCategoryParents */])(shopState.category).forEach(parent => {
        breadcrumb.push({
          title: parent.name,
          url: url["a" /* default */].category(parent)
        });
      });
      breadcrumb.push({
        title: shopState.category.name,
        url: url["a" /* default */].category(shopState.category)
      });
      pageTitle = shopState.category.name;
    }

    return ShopPageShop_jsx(BlockHeader["a" /* default */], {
      pageTitle: pageTitle,
      breadcrumb: breadcrumb
    });
  }, [intl, shopState.category]);

  if (shopState.categoryIsLoading || shopState.productsListIsLoading && !shopState.productsList) {
    return null;
  }

  const sidebar = ShopPageShop_jsx(shop_ShopSidebar, {
    offcanvas: offCanvasSidebar
  });

  const blockSplitClasses = external_classnames_default()('block-split', {
    'block-split--has-sidebar': hasSidebar
  });
  return ShopPageShop_jsx(external_react_default.a.Fragment, null, ShopPageShop_jsx(SidebarProvider, null, ShopPageShop_jsx(current_vehicle["b" /* CurrentVehicleScopeProvider */], null, pageHeader, ShopPageShop_jsx("div", {
    className: blockSplitClasses
  }, offCanvasSidebar === 'always' && sidebar, ShopPageShop_jsx("div", {
    className: "container"
  }, ShopPageShop_jsx("div", {
    className: "block-split__row row no-gutters"
  }, sidebarPosition === 'start' && hasSidebar && ShopPageShop_jsx("div", {
    className: "block-split__item block-split__item-sidebar col-auto"
  }, sidebar), ShopPageShop_jsx("div", {
    className: "block-split__item block-split__item-content col-auto flex-grow-1"
  }, ShopPageShop_jsx("div", {
    className: "block"
  }, ShopPageShop_jsx(shop_ProductsView, {
    layout: layout,
    gridLayout: gridLayout,
    offCanvasSidebar: offCanvasSidebar
  }))), sidebarPosition === 'end' && hasSidebar && ShopPageShop_jsx("div", {
    className: "block-split__item block-split__item-sidebar col-auto"
  }, sidebar)))), ShopPageShop_jsx(BlockSpace["a" /* default */], {
    layout: "before-footer"
  }))));
}

/* harmony default export */ var shop_ShopPageShop = __webpack_exports__["a"] = (ShopPageShop);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6NsH");


/***/ }),

/***/ "5U/F":
/***/ (function(module, exports) {

module.exports = require("react-input-range");

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

/***/ "6NsH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_shop_shopHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WEhN");
/* harmony import */ var _components_shop_ShopPageShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4+vF");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uFCc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application




const getServerSideProps = _store_store__WEBPACK_IMPORTED_MODULE_3__[/* wrapper */ "b"].getServerSideProps(async context => {
  await Object(_store_shop_shopHelpers__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"])(context, 'engine-drivetrain');
});

function Page() {
  return __jsx(_components_shop_ShopPageShop__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    layout: "grid",
    gridLayout: "grid-4-full"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

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

/***/ "EQta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+lck");
/* harmony import */ var _services_current_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eN2N");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application




function CompatibilityStatusBadge(props) {
  const {
    product,
    className
  } = props;
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  const [currentVehicle] = Object(_services_current_vehicle__WEBPACK_IMPORTED_MODULE_3__[/* useCurrentVehicle */ "c"])();
  const compatibility = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!currentVehicle) {
      return null;
    }

    if (product.compatibility === 'all') {
      return 'all';
    }

    if (product.compatibility === 'unknown') {
      return 'unknown';
    }

    if (product.compatibility.includes(currentVehicle.id)) {
      return 'fit';
    }

    return 'not-fit';
  }, [product, currentVehicle]);

  if (!compatibility || !currentVehicle) {
    return null;
  }

  const compatibilityToTypeMap = {
    all: 'unknown',
    fit: 'success',
    'not-fit': 'failure',
    unknown: 'warning'
  };
  const compatibilityToIconMap = {
    all: 'success',
    fit: 'success',
    'not-fit': 'failure',
    unknown: 'failure'
  };
  const compatibilityToTextMap = {
    all: intl.formatMessage({
      id: 'TEXT_COMPATIBILITY_ALL'
    }, currentVehicle),
    fit: intl.formatMessage({
      id: 'TEXT_COMPATIBILITY_FIT'
    }, currentVehicle),
    'not-fit': intl.formatMessage({
      id: 'TEXT_COMPATIBILITY_NOT_FIT'
    }, currentVehicle),
    unknown: intl.formatMessage({
      id: 'TEXT_COMPATIBILITY_UNKNOWN'
    }, currentVehicle)
  };
  return __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    type: compatibilityToTypeMap[compatibility],
    icon: compatibilityToIconMap[compatibility],
    text: compatibilityToTextMap[compatibility],
    tooltip: compatibilityToTextMap[compatibility],
    className: className
  });
}

/* harmony default export */ __webpack_exports__["a"] = (CompatibilityStatusBadge);

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

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

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

/***/ "WEhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseQueryOptions */
/* unused harmony export parseQueryFilters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShopPageData; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_shop_shopActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yB8m");
// third-party
 // application


function parseQueryOptions(query) {
  const queryObject = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(query);
  const optionValues = {};

  if (typeof queryObject.page === 'string') {
    optionValues.page = parseFloat(queryObject.page);
  }

  if (typeof queryObject.limit === 'string') {
    optionValues.limit = parseFloat(queryObject.limit);
  }

  if (typeof queryObject.sort === 'string') {
    optionValues.sort = queryObject.sort;
  }

  return optionValues;
}
function parseQueryFilters(query) {
  const queryObject = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(query);
  const filterValues = {};
  Object.keys(queryObject).forEach(param => {
    const value = queryObject[param];
    const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

    if (!mr || typeof value !== 'string') {
      return;
    }

    const filterSlug = mr[1];
    filterValues[filterSlug] = value;
  });
  return filterValues;
}
function buildQuery(options, filters) {
  const params = {};

  if (options.page !== 1) {
    params.page = options.page;
  }

  if (options.limit !== 12) {
    params.limit = options.limit;
  }

  if (options.sort !== 'default') {
    params.sort = options.sort;
  }

  Object.keys(filters).filter(x => x !== 'category' && !!filters[x]).forEach(filterSlug => {
    params[`filter_${filterSlug}`] = filters[filterSlug];
  });
  return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(params, {
    encode: false
  });
}
async function getShopPageData(context, slug) {
  var _context$params;

  const categorySlug = slug || (typeof ((_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.slug) === 'string' ? context.params.slug : null);

  if (typeof context.req.url === 'string') {
    const query = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parseUrl(context.req.url).query);
    const options = parseQueryOptions(query);
    const filters = parseQueryFilters(query);
    const dispatch = context.store.dispatch;
    await dispatch(Object(_store_shop_shopActions__WEBPACK_IMPORTED_MODULE_1__[/* shopInitThunk */ "a"])(categorySlug, options, filters));
  }
}

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

/***/ "ZdEv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+Sw2");
/* harmony import */ var _components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d4Ds");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NUuo");
/* harmony import */ var _components_shared_AppImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ISme");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party

 // application






function WidgetProducts(props) {
  const {
    widgetTitle,
    className,
    products = []
  } = props,
        rootProps = _objectWithoutProperties(props, ["widgetTitle", "className", "products"]);

  const hasTitle = !!widgetTitle;
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('card', 'widget', 'widget-products', className);
  return __jsx("div", _extends({
    className: rootClasses
  }, rootProps), hasTitle && __jsx("div", {
    className: "widget__header"
  }, __jsx("h4", null, widgetTitle)), __jsx("div", {
    className: "widget-products__list"
  }, products.map(product => __jsx("div", {
    key: product.id,
    className: "widget-products__item"
  }, __jsx("div", {
    className: "widget-products__image"
  }, __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].product(product)
  }, __jsx(_components_shared_AppImage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    src: product.images && product.images[0]
  }))), __jsx("div", {
    className: "widget-products__info"
  }, __jsx("div", {
    className: "widget-products__name"
  }, __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].product(product)
  }, product.name)), __jsx("div", {
    className: "widget-products__prices"
  }, product.compareAtPrice && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "widget-products__price widget-products__price--new"
  }, __jsx(_components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    value: product.price
  })), __jsx("div", {
    className: "widget-products__price widget-products__price--old"
  }, __jsx(_components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    value: product.compareAtPrice
  }))), !product.compareAtPrice && __jsx("div", {
    className: "widget-products__price widget-products__price--current"
  }, __jsx(_components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    value: product.price
  }))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WidgetProducts));

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

/***/ "aIPm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("P3CU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application



function Pagination(props) {
  const {
    siblings = 1,
    current = 1,
    total = 1,
    onPageChange
  } = props;

  const setPage = value => {
    if (value < 1 || value > total || value === current) {
      return;
    }

    if (onPageChange) {
      onPageChange(value);
    }
  };

  const getPages = () => {
    const pages = [];
    const min = Math.max(1, current - siblings - Math.max(0, siblings - total + current));
    const max = Math.min(total, min + siblings * 2);

    for (let i = 1; i <= Math.min(min - 1, 1); i += 1) {
      pages.push(i);
    }

    if (min - 1 >= 3) {
      pages.push(0);
    } else if (min - 1 >= 2) {
      pages.push(min - 1);
    }

    for (let i = min; i <= max; i += 1) {
      pages.push(i);
    }

    if (max + 1 <= total - 2) {
      pages.push(0);
    } else if (max + 1 <= total - 1) {
      pages.push(max + 1);
    }

    for (let i = Math.max(max + 1, total); i <= total; i += 1) {
      pages.push(i);
    }

    return pages;
  };

  return __jsx("ul", {
    className: "pagination"
  }, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('page-item', {
      disabled: current <= 1
    })
  }, __jsx("button", {
    type: "button",
    className: "page-link page-link--with-arrow",
    "aria-label": "Previous",
    onClick: () => setPage(current - 1)
  }, __jsx("span", {
    className: "page-link__arrow page-link__arrow--left",
    "aria-hidden": "true"
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_2__[/* ArrowRoundedLeft7x11Svg */ "f"], null)))), getPages().map(page => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: page
  }, page !== 0 && __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('page-item', {
      active: page === current
    }),
    "aria-current": page === current ? 'page' : undefined
  }, page !== current && __jsx("button", {
    type: "button",
    className: "page-link",
    onClick: () => setPage(page)
  }, page), page === current && __jsx("span", {
    className: "page-link"
  }, page, __jsx("span", {
    className: "sr-only"
  }, "(current)"))), page === 0 && __jsx("li", {
    className: "page-item page-item--dots"
  }, __jsx("div", {
    className: "pagination__dots"
  })))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('page-item', {
      disabled: current >= total
    })
  }, __jsx("button", {
    type: "button",
    className: "page-link page-link--with-arrow",
    "aria-label": "Next",
    onClick: () => setPage(current + 1)
  }, __jsx("span", {
    className: "page-link__arrow page-link__arrow--right",
    "aria-hidden": "true"
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_2__[/* ArrowRoundedRight7x11Svg */ "h"], null)))));
}

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

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

/***/ "gOg4":
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



function BlockSpace(props) {
  const {
    layout,
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["layout", "className"]);

  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-space', `block-space--layout--${layout}`, className);
  return __jsx("div", _extends({
    className: rootClasses
  }, rootProps));
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BlockSpace));

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

/***/ "uWXE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_AppImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ISme");
/* harmony import */ var _components_shared_AppLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+Sw2");
/* harmony import */ var _components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BWJY");
/* harmony import */ var _components_shared_CompatibilityStatusBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EQta");
/* harmony import */ var _components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("d4Ds");
/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Kf4p");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("NUuo");
/* harmony import */ var _store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Zrnz");
/* harmony import */ var _store_compare_compareHooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("3KuR");
/* harmony import */ var _store_quickview_quickviewHooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("03gF");
/* harmony import */ var _store_wishlist_wishlistHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("a61X");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("P3CU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party


 // application














function ProductCard(props) {
  const {
    product,
    layout,
    exclude = [],
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["product", "layout", "exclude", "className"]);

  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const featuredAttributes = product.attributes.filter(x => x.featured);
  const cartAddItem = Object(_store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_10__[/* useCartAddItem */ "b"])();
  const quickviewOpen = Object(_store_quickview_quickviewHooks__WEBPACK_IMPORTED_MODULE_12__[/* useQuickviewOpen */ "c"])();
  const compareAddItem = Object(_store_compare_compareHooks__WEBPACK_IMPORTED_MODULE_11__[/* useCompareAddItem */ "b"])();
  const wishlistAddItem = Object(_store_wishlist_wishlistHooks__WEBPACK_IMPORTED_MODULE_13__[/* useWishlistAddItem */ "b"])();

  const showQuickview = () => quickviewOpen(product.slug);

  const addToWishlist = () => wishlistAddItem(product);

  const addToCompare = () => compareAddItem(product);

  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card', className, {
    [`product-card--layout--${layout}`]: layout
  });
  return __jsx("div", _extends({
    className: rootClasses
  }, rootProps), __jsx("div", {
    className: "product-card__actions-list"
  }, __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => showQuickview(),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__action product-card__action--quickview', {
        'product-card__action--loading': loading
      }),
      "aria-label": intl.formatMessage({
        id: 'BUTTON_QUICKVIEW'
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_14__[/* Quickview16Svg */ "J"], null))
  }), !exclude.includes('actions') && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => addToWishlist(),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__action product-card__action--wishlist', {
        'product-card__action--loading': loading
      }),
      "aria-label": intl.formatMessage({
        id: 'BUTTON_ADD_TO_WISHLIST'
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_14__[/* Wishlist16Svg */ "M"], null))
  }), __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => addToCompare(),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__action product-card__action--compare', {
        'product-card__action--loading': loading
      }),
      "aria-label": intl.formatMessage({
        id: 'BUTTON_ADD_TO_COMPARE'
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_14__[/* Compare16Svg */ "n"], null))
  }))), __jsx("div", {
    className: "product-card__image"
  }, __jsx("div", {
    className: "image image--type--product"
  }, __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].product(product),
    className: "image__body"
  }, product.images && __jsx(_components_shared_AppImage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: "image__tag",
    src: product.images[0]
  }))), !exclude.includes('status-badge') && __jsx(_components_shared_CompatibilityStatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    className: "product-card__fit",
    product: product
  })), __jsx("div", {
    className: "product-card__info"
  }, !exclude.includes('meta') && __jsx("div", {
    className: "product-card__meta"
  }, __jsx("span", {
    className: "product-card__meta-title"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_SKU"
  }), ': '), product.sku), __jsx("div", {
    className: "product-card__name"
  }, product.badges && product.badges.length > 0 && __jsx("div", {
    className: "product-card__badges"
  }, product.badges.map(badge => __jsx("div", {
    key: badge,
    className: `tag-badge tag-badge--${badge}`
  }, badge))), __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].product(product)
  }, product.name)), __jsx("div", {
    className: "product-card__rating"
  }, __jsx(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    className: "product-card__rating-stars",
    value: product.rating || 0
  }), __jsx("div", {
    className: " product-card__rating-label"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "TEXT_RATING_LABEL",
    values: {
      rating: product.rating,
      reviews: product.reviews
    }
  }))), !exclude.includes('features') && featuredAttributes.length > 0 && __jsx("div", {
    className: "product-card__features"
  }, __jsx("ul", null, featuredAttributes.map((attribute, index) => __jsx("li", {
    key: index
  }, attribute.name, ': ', attribute.values.map(x => x.name).join(', ')))))), __jsx("div", {
    className: "product-card__footer"
  }, __jsx("div", {
    className: "product-card__prices"
  }, product.compareAtPrice !== null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "product-card__price product-card__price--new"
  }, __jsx(_components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    value: product.price
  })), __jsx("div", {
    className: "product-card__price product-card__price--old"
  }, __jsx(_components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    value: product.compareAtPrice
  }))), product.compareAtPrice === null && __jsx("div", {
    className: "product-card__price product-card__price--current"
  }, __jsx(_components_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    value: product.price
  }))), !exclude.includes('buttons') && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => cartAddItem(product),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__addtocart-icon', {
        'product-card__addtocart-icon--loading': loading
      }),
      "aria-label": intl.formatMessage({
        id: 'BUTTON_ADD_TO_CART'
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_14__[/* Cart20Svg */ "j"], null))
  }), !exclude.includes('list-buttons') && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => cartAddItem(product),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__addtocart-full', {
        'product-card__addtocart-full--loading': loading
      }),
      onClick: run
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "BUTTON_ADD_TO_CART"
    }))
  }), __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => addToWishlist(),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__wishlist', {
        'product-card__wishlist--loading': loading
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_14__[/* Wishlist16Svg */ "M"], null), __jsx("span", null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "BUTTON_ADD_TO_WISHLIST"
    })))
  }), __jsx(_components_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    action: () => addToCompare(),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__compare', {
        'product-card__compare--loading': loading
      }),
      onClick: run
    }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_14__[/* Compare16Svg */ "n"], null), __jsx("span", null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "BUTTON_ADD_TO_COMPARE"
    })))
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductCard));

/***/ }),

/***/ "xBAi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/shared/AppLink.tsx
var AppLink = __webpack_require__("+Sw2");

// CONCATENATED MODULE: ./src/components/shared/Breadcrumb.tsx
var __jsx = external_react_default.a.createElement;
// react
 // third-party

 // application



function Breadcrumb(props) {
  const {
    className,
    items,
    withPageTitle = false,
    afterHeader = true
  } = props;
  const rootClasses = external_classnames_default()('breadcrumb', className);
  return __jsx("div", {
    className: rootClasses,
    "aria-label": "breadcrumb"
  }, __jsx("ol", {
    className: "breadcrumb__list"
  }, afterHeader && __jsx("li", {
    className: "breadcrumb__spaceship-safe-area",
    role: "presentation"
  }), items.map((item, index) => {
    const isFirst = index === 0;
    const isLast = index === items.length - 1;
    const itemClasses = external_classnames_default()('breadcrumb__item', {
      'breadcrumb__item--first': isFirst,
      'breadcrumb__item--last': isLast,
      'breadcrumb__item--parent': !isLast,
      'breadcrumb__item--current': isLast
    });
    return __jsx("li", {
      key: index,
      className: itemClasses,
      "aria-current": isLast ? 'page' : undefined
    }, isLast && __jsx("span", {
      className: "breadcrumb__item-link"
    }, item.title), !isLast && __jsx(AppLink["a" /* default */], {
      href: item.url,
      className: "breadcrumb__item-link"
    }, item.title));
  }), withPageTitle && __jsx("li", {
    className: "breadcrumb__title-safe-area",
    role: "presentation"
  })));
}

/* harmony default export */ var shared_Breadcrumb = (Breadcrumb);
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/components/blocks/BlockHeader.tsx
var BlockHeader_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application




function BlockHeader(props) {
  const {
    pageTitle,
    breadcrumb = [],
    afterHeader = true
  } = props;
  const hasPageTitle = !!pageTitle;
  const hasBreadcrumb = breadcrumb.length > 0;
  const elementRef = Object(external_react_["useRef"])(null);
  const titleElementRef = Object(external_react_["useRef"])(null);
  const titleVisible = Object(hooks["e" /* useMedia */])('(min-width: 1200px)');

  const calcTitleWidth = () => {
    // So that breadcrumbs correctly flow around the page title, we need to know its width.
    // This code simply conveys the width of the page title in CSS.
    if (!elementRef.current || !titleElementRef.current) {
      return;
    }

    const {
      width
    } = titleElementRef.current.getBoundingClientRect();
    elementRef.current.style.setProperty('--block-header-title-width', `${width}px`);
  };

  Object(external_react_["useEffect"])(() => {
    if (titleVisible) {
      calcTitleWidth();
    }
  }, [pageTitle, titleVisible]);
  const rootClasses = external_classnames_default()('block-header', {
    'block-header--has-title': hasPageTitle,
    'block-header--has-breadcrumb': hasBreadcrumb
  });
  return BlockHeader_jsx("div", {
    className: rootClasses,
    ref: elementRef
  }, BlockHeader_jsx("div", {
    className: "container"
  }, BlockHeader_jsx("div", {
    className: "block-header__body"
  }, hasBreadcrumb && BlockHeader_jsx(shared_Breadcrumb, {
    className: "block-header__breadcrumb",
    items: breadcrumb,
    withPageTitle: hasPageTitle,
    afterHeader: afterHeader
  }), hasPageTitle && BlockHeader_jsx("h1", {
    className: "block-header__title",
    ref: titleElementRef
  }, pageTitle))));
}

/* harmony default export */ var blocks_BlockHeader = __webpack_exports__["a"] = (BlockHeader);

/***/ }),

/***/ "yB8m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shopInit */
/* unused harmony export shopFetchCategorySuccess */
/* unused harmony export shopFetchProductsListStart */
/* unused harmony export shopFetchProductsListSuccess */
/* unused harmony export shopResetFilters */
/* unused harmony export shopResetFilter */
/* unused harmony export shopSetOptionValue */
/* unused harmony export shopSetFilterValue */
/* unused harmony export shopFetchCategoryThunk */
/* unused harmony export shopFetchProductsListThunk */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return shopSetOptionValueThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shopSetFilterValueThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shopResetFiltersThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shopResetFilterThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shopInitThunk; });
/* harmony import */ var _store_shop_shopTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+L6p");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("efbE");
/* harmony import */ var _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Pbem");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let cancelPreviousCategoryRequest = () => {};

let cancelPreviousProductsListRequest = () => {};

function shopInit(categorySlug, options = {}, filters = {}) {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_INIT */ "e"],
    categorySlug,
    options,
    filters
  };
}
function shopFetchCategorySuccess(category) {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_FETCH_CATEGORY_SUCCESS */ "a"],
    category
  };
}
function shopFetchProductsListStart() {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_FETCH_PRODUCTS_LIST_START */ "b"]
  };
}
function shopFetchProductsListSuccess(productsList) {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_FETCH_PRODUCTS_LIST_SUCCESS */ "c"],
    productsList
  };
}
function shopResetFilters() {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_RESET_FILTERS */ "g"]
  };
}
function shopResetFilter(activeFilter) {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_RESET_FILTER */ "f"],
    activeFilter
  };
}
function shopSetOptionValue(option, value) {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_SET_OPTION_VALUE */ "i"],
    option,
    value
  };
}
function shopSetFilterValue(filter, value) {
  return {
    type: _store_shop_shopActionTypes__WEBPACK_IMPORTED_MODULE_2__[/* SHOP_SET_FILTER_VALUE */ "h"],
    filter,
    value
  };
}
function shopFetchCategoryThunk(categorySlug) {
  return async dispatch => {
    let canceled = false;
    cancelPreviousCategoryRequest();

    cancelPreviousCategoryRequest = () => {
      canceled = true;
    };

    let request;

    if (categorySlug) {
      request = _api__WEBPACK_IMPORTED_MODULE_1__[/* shopApi */ "d"].getCategoryBySlug(categorySlug);
    } else {
      request = Promise.resolve(null);
    }

    const category = await request;

    if (canceled && false) {
      return;
    }

    dispatch(shopFetchCategorySuccess(category));
  };
}
function shopFetchProductsListThunk() {
  return async (dispatch, getState) => {
    let canceled = false;
    cancelPreviousProductsListRequest();

    cancelPreviousProductsListRequest = () => {
      canceled = true;
    };

    dispatch(shopFetchProductsListStart());
    const shopState = getState()[_store_shop_shopTypes__WEBPACK_IMPORTED_MODULE_0__[/* SHOP_NAMESPACE */ "a"]];
    let {
      filters
    } = shopState;

    if (shopState.categorySlug !== null) {
      filters = _objectSpread(_objectSpread({}, filters), {}, {
        category: shopState.categorySlug
      });
    }

    const productsList = await _api__WEBPACK_IMPORTED_MODULE_1__[/* shopApi */ "d"].getProductsList(shopState.options, filters);

    if (canceled && false) {
      return;
    }

    dispatch(shopFetchProductsListSuccess(productsList));
  };
}
function shopSetOptionValueThunk(option, value) {
  return async dispatch => {
    dispatch(shopSetOptionValue(option, value));
    await dispatch(shopFetchProductsListThunk());
  };
}
function shopSetFilterValueThunk(filter, value) {
  return async dispatch => {
    dispatch(shopSetFilterValue(filter, value));
    await dispatch(shopFetchProductsListThunk());
  };
}
function shopResetFiltersThunk() {
  return async dispatch => {
    dispatch(shopResetFilters());
    await dispatch(shopFetchProductsListThunk());
  };
}
function shopResetFilterThunk(activeFilter) {
  return async dispatch => {
    dispatch(shopResetFilter(activeFilter));
    await dispatch(shopFetchProductsListThunk());
  };
}
function shopInitThunk(categorySlug, options = {}, filters = {}) {
  return async dispatch => {
    dispatch(shopInit(categorySlug, options, filters));
    await Promise.all([dispatch(shopFetchCategoryThunk(categorySlug)), dispatch(shopFetchProductsListThunk())]);
  };
}

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

/***/ "z9Si":
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



function Checkbox(props) {
  const {
    className,
    inputRef
  } = props,
        inputProps = _objectWithoutProperties(props, ["className", "inputRef"]);

  return __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('input-check', className)
  }, __jsx("span", {
    className: "input-check__body"
  }, __jsx("input", _extends({
    className: "input-check__input",
    type: "checkbox",
    ref: inputRef
  }, inputProps)), __jsx("span", {
    className: "input-check__box"
  }), __jsx("span", {
    className: "input-check__icon"
  }, __jsx("svg", {
    width: "9px",
    height: "7px"
  }, __jsx("path", {
    d: "M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z"
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ })

/******/ });