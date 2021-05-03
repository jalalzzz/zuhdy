module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		15: 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"77":"5fff760cb70850be9205","78":"6fb937e97ded0a012aca","79":"ac19ae678f18b25fe617"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KUXm");


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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KUXm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_account_AccountLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("u1IO");
/* harmony import */ var _components_shared_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("P5m/");
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Zlw4");
/* harmony import */ var _store_user_userHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("eJ0J");
/* harmony import */ var _services_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LuY4");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party




 // application







function Page() {
  var _errors$firstName, _errors$lastName, _errors$email, _errors$email2, _errors$phone;

  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const user = Object(_store_user_userHooks__WEBPACK_IMPORTED_MODULE_8__[/* useUser */ "a"])();
  const userEditProfile = Object(_store_user_userHooks__WEBPACK_IMPORTED_MODULE_8__[/* useUserEditProfile */ "b"])();
  const {
    register,
    handleSubmit,
    reset,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  });
  const [submit, submitInProgress] = Object(_store_hooks__WEBPACK_IMPORTED_MODULE_7__[/* useAsyncAction */ "c"])(async data => {
    await userEditProfile(data);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success(intl.formatMessage({
      id: 'TEXT_TOAST_PROFILE_SAVED'
    }));
  }, [userEditProfile, intl]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reset({
      firstName: (user === null || user === void 0 ? void 0 : user.firstName) || '',
      lastName: (user === null || user === void 0 ? void 0 : user.lastName) || '',
      email: (user === null || user === void 0 ? void 0 : user.email) || '',
      phone: (user === null || user === void 0 ? void 0 : user.phone) || ''
    });
  }, [user, reset]);
  return __jsx("div", {
    className: "card"
  }, __jsx(_components_shared_PageTitle__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, intl.formatMessage({
    id: 'HEADER_EDIT_PROFILE'
  })), __jsx("div", {
    className: "card-header"
  }, __jsx("h5", null, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "HEADER_EDIT_PROFILE"
  }))), __jsx("div", {
    className: "card-divider"
  }), __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-12 col-lg-7 col-xl-6"
  }, __jsx("form", {
    onSubmit: handleSubmit(submit)
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "profile-first-name"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "INPUT_FIRST_NAME_LABEL"
  })), __jsx("input", {
    type: "text",
    id: "profile-first-name",
    name: "firstName",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', {
      'is-invalid': errors.firstName
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_FIRST_NAME_PLACEHOLDER'
    }),
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback"
  }, ((_errors$firstName = errors.firstName) === null || _errors$firstName === void 0 ? void 0 : _errors$firstName.type) === 'required' && __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ERROR_FORM_REQUIRED"
  }))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "profile-last-name"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "INPUT_LAST_NAME_LABEL"
  })), __jsx("input", {
    type: "text",
    id: "profile-last-name",
    name: "lastName",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', {
      'is-invalid': errors.lastName
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_LAST_NAME_PLACEHOLDER'
    }),
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback"
  }, ((_errors$lastName = errors.lastName) === null || _errors$lastName === void 0 ? void 0 : _errors$lastName.type) === 'required' && __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ERROR_FORM_REQUIRED"
  }))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "profile-email"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "INPUT_EMAIL_ADDRESS_LABEL"
  })), __jsx("input", {
    type: "email",
    id: "profile-email",
    name: "email",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', {
      'is-invalid': errors.email
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER'
    }),
    ref: register({
      required: true,
      validate: {
        email: _services_validators__WEBPACK_IMPORTED_MODULE_9__[/* validateEmail */ "a"]
      }
    })
  }), __jsx("div", {
    className: "invalid-feedback"
  }, ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === 'required' && __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ERROR_FORM_REQUIRED"
  }), ((_errors$email2 = errors.email) === null || _errors$email2 === void 0 ? void 0 : _errors$email2.type) === 'email' && __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ERROR_FORM_INCORRECT_EMAIL"
  }))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "profile-phone"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "INPUT_PHONE_NUMBER_LABEL"
  })), __jsx("input", {
    type: "text",
    id: "profile-phone",
    name: "phone",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', {
      'is-invalid': errors.phone
    }),
    placeholder: intl.formatMessage({
      id: 'INPUT_PHONE_NUMBER_PLACEHOLDER'
    }),
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback"
  }, ((_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.type) === 'required' && __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "ERROR_FORM_REQUIRED"
  }))), __jsx("div", {
    className: "form-group mb-0"
  }, __jsx("button", {
    type: "submit",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn', 'btn-primary', 'mt-3', {
      'btn-loading': submitInProgress
    })
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "BUTTON_SAVE"
  }))))))));
}

Page.Layout = _components_account_AccountLayout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (Page);

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "u1IO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+Sw2");
/* harmony import */ var _components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gOg4");
/* harmony import */ var _components_shared_Redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wGWw");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NUuo");
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("i19i");
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Zlw4");
/* harmony import */ var _store_user_userHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("eJ0J");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party


 // application









function AccountLayout(props) {
  const {
    children
  } = props;
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const router = Object(_services_router__WEBPACK_IMPORTED_MODULE_7__[/* useAppRouter */ "b"])();
  const userSignOut = Object(_store_user_userHooks__WEBPACK_IMPORTED_MODULE_9__[/* useUserSignOut */ "d"])();
  const user = Object(_store_user_userHooks__WEBPACK_IMPORTED_MODULE_9__[/* useUser */ "a"])();
  const [onSignOutClick] = Object(_store_hooks__WEBPACK_IMPORTED_MODULE_8__[/* useAsyncAction */ "c"])(() => userSignOut(), [userSignOut]);
  const navigation = [{
    title: intl.formatMessage({
      id: 'LINK_ACCOUNT_DASHBOARD'
    }),
    url: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].accountDashboard()
  }, {
    title: intl.formatMessage({
      id: 'LINK_ACCOUNT_GARAGE'
    }),
    url: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].accountGarage()
  }, {
    title: intl.formatMessage({
      id: 'LINK_ACCOUNT_PROFILE'
    }),
    url: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].accountProfile()
  }, {
    title: intl.formatMessage({
      id: 'LINK_ACCOUNT_ORDERS'
    }),
    url: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].accountOrders()
  }, {
    title: intl.formatMessage({
      id: 'LINK_ACCOUNT_ADDRESSES'
    }),
    url: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].accountAddresses()
  }, {
    title: intl.formatMessage({
      id: 'LINK_ACCOUNT_PASSWORD'
    }),
    url: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].accountPassword()
  }];

  if (!user) {
    return __jsx(_components_shared_Redirect__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].signIn()
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    layout: "after-header"
  }), __jsx("div", {
    className: "block"
  }, __jsx("div", {
    className: "container container--max--xl"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-lg-3 d-flex"
  }, __jsx("div", {
    className: "account-nav flex-grow-1"
  }, __jsx("h4", {
    className: "account-nav__title"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "HEADER_NAVIGATION"
  })), __jsx("ul", {
    className: "account-nav__list"
  }, navigation.map((item, index) => __jsx("li", {
    key: index,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('account-nav__item', {
      'account-nav__item--active': router.pathname === item.url
    })
  }, __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: item.url
  }, item.title))), __jsx("li", {
    className: "account-nav__divider",
    role: "presentation"
  }), __jsx("li", {
    className: "account-nav__item"
  }, __jsx("button", {
    type: "button",
    onClick: onSignOutClick
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "LINK_ACCOUNT_LOGOUT"
  })))))), __jsx("div", {
    className: "col-12 col-lg-9 mt-4 mt-lg-0"
  }, children)))), __jsx(_components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    layout: "before-footer"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (AccountLayout);

/***/ }),

/***/ "wGWw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i19i");
// application


function Redirect(props) {
  const {
    href
  } = props;
  const router = Object(_services_router__WEBPACK_IMPORTED_MODULE_0__[/* useAppRouter */ "b"])();

  if (false) {}

  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });