/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/restaurant_bg.jpg */ "./src/images/restaurant_bg.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/market.jpg */ "./src/images/market.jpg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/selling.jpg */ "./src/images/selling.jpg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/restaurant.jpg */ "./src/images/restaurant.jpg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/market2.jpg */ "./src/images/market2.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, ".title-header {\r\n\tposition: absolute;\r\n\twidth: 30%;\r\n\theight: 150px;\r\n\tbackground-color: rgb(63, 63, 63, 0.8);\r\n\tborder: 4px solid white;\r\n\tz-index: 1;\r\n\tleft: 50%;\r\n\ttop: 65%;\r\n\tmargin-left: -15%;\r\n\ttext-align: center;\r\n\tpadding-top: 15px;\r\n\tcolor: yellow;\r\n\t}\r\n\r\n  .main-container {\r\n\tposition: relative;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgrid-template-rows: repeat(2, 1fr);\r\n\tgrid-gap: 2px;\r\n  }\r\n\r\n  .main-cards {\r\n\tbackground-color: rgb(100, 100, 100);\r\n\theight: 800px;\r\n  }\r\n\r\n  .seriously-red {\r\n\tposition: absolute;\r\n\twidth: 100px;\r\n\theight: 50px;\r\n\tborder: 4px solid white;\r\n\tbackground-color: rgb(161, 161, 161, 0.4);\r\n\tz-index: 1;\r\n\ttop: 3.5%;\r\n\tleft: auto;\r\n\tright: 8%;\r\n\ttext-align: center;\r\n\tpadding-top: 5px;\r\n\tcolor: yellow;\r\n\t}\r\n\r\n  .title-container {\r\n\tcolor: red;\r\n\ttext-align: center;\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tmargin-bottom: 5px;\r\n  }\r\n\r\n  .centered {\r\n\tposition: absolute;\r\n\ttop: 30%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\t}\r\n\r\n  .centered h1 {\r\n\t  font-weight: 900;\r\n\t  font-size: 65px;\r\n  }\r\n\r\n  .top-left {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n  }\r\n\r\n  .top-right {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n  }\r\n\r\n  .bottom-left {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n  }\r\n\r\n  .top-left h3,\r\n  .top-right h3,\r\n  .bottom-right h3,\r\n  .bottom-left h3 {\r\n\ttext-align: center;\r\n\tpadding-top: 125px;\r\n\tcolor: white;\r\n  }\r\n\r\n  .bottom-right {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n  }\r\n\r\n  .hide {\r\n\t  display: none;\r\n  }\r\n\r\n  .backg {\r\n\t  background-color: red;\r\n  }\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/market.jpg":
/*!*******************************!*\
  !*** ./src/images/market.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3067bb902fd7fd2eecd83a5680854050.jpg");

/***/ }),

/***/ "./src/images/market2.jpg":
/*!********************************!*\
  !*** ./src/images/market2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5b7f55951b4f270f34cb5c8e41e88ed9.jpg");

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8110a3c874b6fa679850f8208ebf32d4.jpg");

/***/ }),

/***/ "./src/images/restaurant_bg.jpg":
/*!**************************************!*\
  !*** ./src/images/restaurant_bg.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b51557c1cf7653ee51e7ee1551730c4b.jpg");

/***/ }),

/***/ "./src/images/selling.jpg":
/*!********************************!*\
  !*** ./src/images/selling.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "966bc79db48afbe2be6df1deb7503dcd.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navbar.js */ "./src/js/navbar.js");
/* harmony import */ var _js_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/about.js */ "./src/js/about.js");
/* harmony import */ var _js_location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/location.js */ "./src/js/location.js");
/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/menu.js */ "./src/js/menu.js");
/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/home.js */ "./src/js/home.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_5__);







let nav = Object(_js_navbar_js__WEBPACK_IMPORTED_MODULE_0__["navbar"])();
let aboutUs = Object(_js_about_js__WEBPACK_IMPORTED_MODULE_1__["about"])();
let loc = Object(_js_location_js__WEBPACK_IMPORTED_MODULE_2__["location"])();
let eat = Object(_js_menu_js__WEBPACK_IMPORTED_MODULE_3__["menu"])();
let landing = Object(_js_home_js__WEBPACK_IMPORTED_MODULE_4__["home"])();

nav.header();
landing.render();
eat.render();
aboutUs.info();
loc.restaurants();
nav.footer();

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
const about = function () {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    main.classList.add('hide');
    
    function info() {
        const jumbo = document.createElement('div');
        const container = document.createElement('div');
        const header = document.createElement('h1');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        jumbo.classList.add('jumbotron','jumbotron-fluid');
        container.classList.add("container");
        header.classList.add("display-4");
        p1.classList.add("lead");
        p2.classList.add("lead");
        p3.classList.add("lead");

        header.innerHTML = "About Us";
        p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque rutrum, lobortis quam eget, maximus urna. Maecenas congue felis ut tincidunt finibus. Duis tempus pretium mauris at tincidunt. Nullam sit amet quam vitae orci feugiat consequat. Sed mattis consequat eros, sed vestibulum ipsum dignissim facilisis. Curabitur ex felis, dictum a commodo sed, efficitur vitae tellus. Aenean pulvinar urna a turpis vulputate dapibus. Proin imperdiet at lacus vel cursus. Etiam convallis arcu sit amet dignissim bibendum. Aliquam ligula augue, mollis vitae orci nec, tristique pharetra justo. Morbi aliquet purus velit, quis porta ex tempus vel. Praesent euismod varius posuere. Vivamus sapien diam, ornare et odio nec, fermentum commodo risus.";
        p2.innerHTML = "Aliquam at posuere mi, a fermentum urna. Aenean ac justo eget tortor venenatis luctus. Nam luctus elementum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eu tempor velit. Nulla ac volutpat orci, non condimentum sapien. Nunc in eros bibendum, posuere turpis vel, sollicitudin lacus.";
        p3.innerHTML = "Phasellus nec orci ligula. Morbi commodo diam id mi convallis eleifend. Aenean eget turpis eu lorem feugiat facilisis. Vivamus sed ipsum eget risus tristique placerat vel non eros. Etiam eget sem ullamcorper, placerat arcu et, sagittis leo. Duis consectetur purus quis ipsum molestie finibus. Pellentesque erat odio, posuere at eleifend et, dapibus sit amet orci. Maecenas mollis dui eu vehicula luctus. Maecenas porta justo vel purus eleifend, auctor lobortis libero eleifend. Etiam faucibus pharetra ultrices. Cras ac leo et augue convallis tristique.";

        container.append(header);
        container.append(p1);
        container.append(p2);
        container.append(p3);

        jumbo.append(container);
        main.append(jumbo);
        content.append(main);

    }
    function render() {
        info();
    }

    return {
        info,
        render,
    };
  };
  
  

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
const home = function () {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    
    function topHeader() {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const h1 = document.createElement('h1');

        div.classList.add('title-container');
        div2.classList.add('centered');

        h1.innerHTML = "Welcome to Viet Nha Hang";

        div2.append(h1);
        div.append(div2);
        main.append(div);
        content.append(main);
    }

    function catalog() {
        const title = document.createElement('div');
        const h1 = document.createElement('h1');
        const mainContainer = document.createElement('div');
        const topLeft = document.createElement('div');
        const h31 = document.createElement('h3');
        const topRight = document.createElement('div');
        const h32 = document.createElement('h3');
        const seriously = document.createElement('div');
        const h4 = document.createElement('h4');
        const bottomLeft = document.createElement('div');
        const h33 = document.createElement('h3');
        const bottomRight = document.createElement('div');
        const h34 = document.createElement('h3');

        title.classList.add("title-header");
        mainContainer.classList.add("main-container");
        topLeft.classList.add('main-cards','top-left');
        topRight.classList.add('main-cards','top-right');
        bottomLeft.classList.add('main-cards','bottom-left');
        bottomRight.classList.add('main-cards','bottom-right');
        seriously.classList.add('seriously-red');

        h1.innerHTML = "Best Vietnamese Food";
        h4.innerHTML = "Offers!";
        h31.innerHTML = "Best Quality";
        h32.innerHTML = "We always Smile";
        h33.innerHTML = "Try our Local Food";
        h34.innerHTML = "Food from Local Markets";

        title.append(h1);
        seriously.append(h4);

        topLeft.append(h31);
        topRight.append(h32);
        topRight.append(seriously);
        bottomLeft.append(h33);
        bottomRight.append(h34);

        
        mainContainer.append(topLeft);
        mainContainer.append(topRight);
        mainContainer.append(bottomLeft);
        mainContainer.append(bottomRight);

        main.append(title);
        main.append(mainContainer);
        content.append(main);

    }
  
    function render() {
        topHeader();
        catalog();
    }
  
    return {
      topHeader,
      catalog,
      render,

    };
  };
  
  

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/*! exports provided: location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
const location = function () {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    main.classList.add('hide');
    
    function restaurants() {
        const table = document.createElement('div');
        const thead = document.createElement('thead');
        const tr1 = document.createElement('tr');
        const header1 = document.createElement('th');
        const header2 = document.createElement('th');
        const header3 = document.createElement('th');
        const tbody = document.createElement('tbody');
        const tr2 = document.createElement('tr');
        const name1 = document.createElement('td');
        const loc1 = document.createElement('td');
        const info1 = document.createElement('td');
        const tr3 = document.createElement('tr');
        const name2 = document.createElement('td');
        const loc2 = document.createElement('td');
        const info2 = document.createElement('td');
        const tr4 = document.createElement('tr');
        const name3 = document.createElement('td');
        const loc3 = document.createElement('td');
        const info3 = document.createElement('td');
        const tr5 = document.createElement('tr');
        const name4 = document.createElement('td');
        const loc4 = document.createElement('td');
        const info4 = document.createElement('td');
        const h1 = document.createElement('h1');


        table.classList.add('w-75','m-auto','table','table-dark','table-striped','table-bordered','table-hover');
        thead.classList.add('thead-light');
        h1.classList.add('text-center');
        
        h1.innerHTML = "Our Restaurants";
        header1.innerHTML = "Name";
        header2.innerHTML = "Location";
        header3.innerHTML = "Information";
        name1.innerHTML = "Viet Nha Hang";
        name2.innerHTML = "Viet Nha Hang - NY";
        name3.innerHTML = "Viet Nha Hang - BCN";
        name4.innerHTML = "Viet Nha Hang - Tok";
        loc1.innerHTML = "Hanoi";
        loc2.innerHTML = "Barcelona";
        loc3.innerHTML = "Bangkok";
        loc4.innerHTML = "Tokio";
        info1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        info2.innerHTML = "Urna et pharetra pharetra massa massa. Aliquam sem et tortor consequat id porta. A diam maecenas sed enim ut sem viverra aliquet.";
        info3.innerHTML = "Egestas dui id ornare arcu odio ut sem. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.";
        info4.innerHTML = "Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.";
        
        tr5.append(name4);
        tr5.append(loc4);
        tr5.append(info4);

        tr4.append(name3);
        tr4.append(loc3);
        tr4.append(info3);

        tr3.append(name2);
        tr3.append(loc2);
        tr3.append(info2);

        tr2.append(name1);
        tr2.append(loc1);
        tr2.append(info1);

        tbody.append(tr2);
        tbody.append(tr3);
        tbody.append(tr4);
        tbody.append(tr5);

        tr1.append(header1);
        tr1.append(header2);
        tr1.append(header3);

        thead.append(tr1);

        table.append(thead);
        table.append(tbody);

        main.append(h1);
        main.append(table);

        content.append(main);

    }

    function render() {
        restaurants();
    }

    return {
        restaurants,
        render,
    };
  };
  
  

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
const menu = function () {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.classList.add('container','my-5','bg-dark');
  const main = document.createElement('main');
  main.classList.add('hide');

  function food() {
    const div = document.createElement('div');
    const h11 = document.createElement('h1');
    const row = document.createElement('div');
    const col41 = document.createElement('div');
    const card1 = document.createElement('div');
    const cardBody1 = document.createElement('div');
    const h51 = document.createElement('h5');
    const span1 = document.createElement('span');
    const col42 = document.createElement('div');
    const card2 = document.createElement('div');
    const cardBody2 = document.createElement('div');
    const h52 = document.createElement('h5');
    const span2 = document.createElement('span');
    const col43 = document.createElement('div');
    const card3 = document.createElement('div');
    const cardBody3 = document.createElement('div');
    const h53 = document.createElement('h5');
    const span3 = document.createElement('span');
    const col44 = document.createElement('div');
    const card4 = document.createElement('div');
    const cardBody4 = document.createElement('div');
    const h54 = document.createElement('h5');
    const span4 = document.createElement('span');
    const col45 = document.createElement('div');
    const card5 = document.createElement('div');
    const cardBody5 = document.createElement('div');
    const h55 = document.createElement('h5');
    const span5 = document.createElement('span');
    const col46 = document.createElement('div');
    const card6 = document.createElement('div');
    const cardBody6 = document.createElement('div');
    const h56 = document.createElement('h5');
    const span6 = document.createElement('span');

    h11.classList.add('text-center','mb-5','text-white-50','pt-3');
    row.classList.add('row','p-2','bg-dark');
    col41.classList.add('col-4','p-3','bg-secondary');
    card1.classList.add('card','mb-4');
    cardBody1.classList.add('card-body');
    h51.classList.add('card-text');
    col42.classList.add('col-4','p-3','bg-secondary');
    card2.classList.add('card','mb-4');
    cardBody2.classList.add('card-body');
    h52.classList.add('card-text');
    col43.classList.add('col-4','p-3','bg-secondary');
    card3.classList.add('card','mb-4');
    cardBody3.classList.add('card-body');
    h53.classList.add('card-text');
    col44.classList.add('col-4','p-3','bg-secondary');
    card4.classList.add('card','mb-4');
    cardBody4.classList.add('card-body');
    h54.classList.add('card-text');
    col45.classList.add('col-4','p-3','bg-secondary');
    card5.classList.add('card','mb-4');
    cardBody5.classList.add('card-body');
    h55.classList.add('card-text');
    col46.classList.add('col-4','p-3','bg-secondary');
    card6.classList.add('card','mb-4');
    cardBody6.classList.add('card-body');
    h56.classList.add('card-text');
    span1.classList.add('text-muted');
    span2.classList.add('text-muted');
    span3.classList.add('text-muted');
    span4.classList.add('text-muted');
    span5.classList.add('text-muted');
    span6.classList.add('text-muted');

    h11.innerHTML = 'Our Dishes';

    span1.innerHTML = '1,5$';
    span2.innerHTML = '1,5$';
    span3.innerHTML = '1,5$';
    span4.innerHTML = '1,5$';
    span5.innerHTML = '1,5$';
    span6.innerHTML = '1,5$';

    h51.innerHTML = 'Pho Bo.';
    h52.innerHTML = 'Bun Cha.';
    h53.innerHTML = 'Bun Dau.';
    h54.innerHTML = 'Dinsum.';
    h55.innerHTML = 'Meat Sticks.';
    h56.innerHTML = 'Banh Tom.';

    card1.innerHTML = '<img class="card-img-top rounded" src="../src/images/pho.jpg" alt="Card ige cap">';
    card2.innerHTML = '<img  style="height: 260px;" class="card-img-top rounded img-fluid" src="../src/images/buncha.jpg" alt="Card image cap">';
    card3.innerHTML = '<img style="height: 260px;" class="card-img-top rounded img-fluid" src="../src/images/bundau.jpg" alt="Card image cap">';
    card4.innerHTML = '<img style="height: 260px;"  class="card-img-top rounded" src="../src/images/dinsum.jpg" alt="Card image cap">';
    card5.innerHTML = '<img style="height: 260px;"  class="card-img-top rounded" src="../src/images/meat.jpg" alt="Card image cap">';
    card6.innerHTML = '<img style="height: 260px;"  class="card-img-top rounded" src="../src/images/banhtom.jpg" alt="Card image cap">';

    cardBody1.append(h51);
    cardBody1.append(span1);
    card1.append(cardBody1);
    col41.append(card1);

    cardBody2.append(h52);
    cardBody2.append(span2);
    card2.append(cardBody2);
    col42.append(card2);

    cardBody3.append(h53);
    cardBody3.append(span3);
    card3.append(cardBody3);
    col43.append(card3);

    cardBody4.append(h54);
    cardBody4.append(span4);
    card4.append(cardBody4);
    col44.append(card4);

    cardBody5.append(h55);
    cardBody5.append(span5);
    card5.append(cardBody5);
    col45.append(card5);

    cardBody6.append(h56);
    cardBody6.append(span6);
    card6.append(cardBody6);
    col46.append(card6);

    row.append(col41);
    row.append(col42);
    row.append(col43);
    row.append(col44);
    row.append(col45);
    row.append(col46);

    div.append(h11);
    div.append(row);

    main.append(div);
    main.append(container);

    content.append(main);
  }

  function drinks() {
    const div = document.createElement('div');
    const h12 = document.createElement('h1');
    const row = document.createElement('div');
    const col41 = document.createElement('div');
    const card1 = document.createElement('div');
    const cardBody1 = document.createElement('div');
    const h51 = document.createElement('h5');
    const span1 = document.createElement('span');
    const col42 = document.createElement('div');
    const card2 = document.createElement('div');
    const cardBody2 = document.createElement('div');
    const h52 = document.createElement('h5');
    const span2 = document.createElement('span');
    const col43 = document.createElement('div');
    const card3 = document.createElement('div');
    const cardBody3 = document.createElement('div');
    const h53 = document.createElement('h5');
    const span3 = document.createElement('span');

    div.classList.add('mt-3','p-2');
    h12.classList.add('text-center','mb-5','text-white-50','pt-3');
    row.classList.add('row','p-2','bg-dark');
    col41.classList.add('col-4','p-3','bg-secondary');
    card1.classList.add('card','mb-4');
    cardBody1.classList.add('card-body');
    h51.classList.add('card-text');
    col42.classList.add('col-4','p-3','bg-secondary');
    card2.classList.add('card','mb-4');
    cardBody2.classList.add('card-body');
    h52.classList.add('card-text');
    col43.classList.add('col-4','p-3','bg-secondary');
    card3.classList.add('card','mb-4');
    cardBody3.classList.add('card-body');
    h53.classList.add('card-text');
    span1.classList.add('text-muted');
    span2.classList.add('text-muted');
    span3.classList.add('text-muted');

    h12.innerHTML = 'Our Beverages';

    span1.innerHTML = '1,5$';
    span2.innerHTML = '1,5$';
    span3.innerHTML = '1,5$';

    h51.innerHTML = 'Tea.';
    h52.innerHTML = 'Coffee.';
    h53.innerHTML = 'Tra Sua.';

    card1.innerHTML = '<img  style="height: 260px;" class="card-img-top rounded" src="../src/images/tea.jpg" alt="Card ige cap">';
    card2.innerHTML = '<img  style="height: 260px;" class="card-img-top rounded img-fluid" src="../src/images/coffee.jpg" alt="Card image cap">';
    card3.innerHTML = '<img style="height: 260px;" class="card-img-top rounded img-fluid" src="../src/images/trasua.jpg" alt="Card image cap">';

    cardBody1.append(h51);
    cardBody1.append(span1);
    card1.append(cardBody1);
    col41.append(card1);

    cardBody2.append(h52);
    cardBody2.append(span2);
    card2.append(cardBody2);
    col42.append(card2);

    cardBody3.append(h53);
    cardBody3.append(span3);
    card3.append(cardBody3);
    col43.append(card3);

    row.append(col41);
    row.append(col42);
    row.append(col43);

    div.append(h12);
    div.append(row);

    main.append(div);
    main.append(container);

    content.append(main);
  }

  function render() {
    food();
    drinks();
  }

  return {
    food,
    drinks,
    render,
  };
};



/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });
const navbar = function () {
  const content = document.getElementById('content');

  function header() {
    const nav = document.createElement('nav');
    const logo = document.createElement('div');
    const linksContainer = document.createElement('div');
    const list = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const item4 = document.createElement('li');

    nav.classList.add('navbar','navbar-expand-lg','navbar-light','backg','text-warning');
    logo.classList.add('container');
    linksContainer.classList.add('collapse','navbar-collapse','pl-5','pr-5');
    list.classList.add('navbar-nav');
    item1.classList.add('nav-item','ml-2');
    item2.classList.add('nav-item','ml-2');
    item3.classList.add('nav-item','ml-2');
    item4.classList.add('nav-item','ml-2');

    logo.innerHTML = '<a class="navbar-brand text-warning font-weight-bolder" href="#">Viet Nha Hang</a>';
    item1.innerHTML = 'Home';
    item2.innerHTML = 'Menu';
    item3.innerHTML = 'About';
    item4.innerHTML = 'Location';

    list.append(item1);
    list.append(item2);
    list.append(item3);
    list.append(item4);

    linksContainer.append(list);

    nav.append(logo);
    nav.append(linksContainer);

    content.append(nav);
  }

  function footer() {
    const footer = document.createElement('footer');
    const div = document.createElement('div');

    footer.classList.add('font-small','blue','bg-warning');
    div.classList.add('text-center','py-3','text-danger');

    div.innerHTML = '© 2020 Copyright: <a href="#"> JaviCorp</a>';

    footer.append(div);
    content.append(footer);
  }

  function render() {
    header();
    footer();
  }

  return {
    header,
    footer,
    render,
  };
};



/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFya2V0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hcmtldDIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVzdGF1cmFudC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yZXN0YXVyYW50X2JnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlbGxpbmcuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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UTtBQUNsQixVQUFVLHdEQUFJO0FBQ2QsY0FBYyx3REFBSTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM09BO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywySEFBeUQ7O0FBRTNGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3Jlc3RhdXJhbnRfYmcuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9tYXJrZXQuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9zZWxsaW5nLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVzdGF1cmFudC5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL21hcmtldDIuanBnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpdGxlLWhlYWRlciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAzMCU7XFxyXFxuXFx0aGVpZ2h0OiAxNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2MywgMC44KTtcXHJcXG5cXHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdGxlZnQ6IDUwJTtcXHJcXG5cXHR0b3A6IDY1JTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogLTE1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZy10b3A6IDE1cHg7XFxyXFxuXFx0Y29sb3I6IHllbGxvdztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRncmlkLWdhcDogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY2FyZHMge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG5cXHRoZWlnaHQ6IDgwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmlvdXNseS1yZWQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR3aWR0aDogMTAwcHg7XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcdGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxLCAwLjQpO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0dG9wOiAzLjUlO1xcclxcblxcdGxlZnQ6IGF1dG87XFxyXFxuXFx0cmlnaHQ6IDglO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogNXB4O1xcclxcblxcdGNvbG9yOiB5ZWxsb3c7XFxyXFxuXFx0fVxcclxcblxcclxcbiAgLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG5cXHRoZWlnaHQ6IDM1MHB4O1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNlbnRlcmVkIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAzMCU7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcdH1cXHJcXG5cXHJcXG4gIC5jZW50ZXJlZCBoMSB7XFxyXFxuXFx0ICBmb250LXdlaWdodDogOTAwO1xcclxcblxcdCAgZm9udC1zaXplOiA2NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcC1sZWZ0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcblxcdGhlaWdodDogMzUwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3AtcmlnaHQge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuXFx0aGVpZ2h0OiAzNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmJvdHRvbS1sZWZ0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcblxcdGhlaWdodDogMzUwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3AtbGVmdCBoMyxcXHJcXG4gIC50b3AtcmlnaHQgaDMsXFxyXFxuICAuYm90dG9tLXJpZ2h0IGgzLFxcclxcbiAgLmJvdHRvbS1sZWZ0IGgzIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEyNXB4O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3R0b20tcmlnaHQge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuXFx0aGVpZ2h0OiAzNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZGUge1xcclxcblxcdCAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrZyB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMDY3YmI5MDJmZDdmZDJlZWNkODNhNTY4MDg1NDA1MC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWI3ZjU1OTUxYjRmMjcwZjM0Y2I1YzhlNDFlODhlZDkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxMTBhM2M4NzRiNmZhNjc5ODUwZjgyMDhlYmYzMmQ0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNTE1NTdjMWNmNzY1M2VlNTFlN2VlMTU1MTczMGM0Yi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTY2YmM3OWRiNDhhZmJlMmJlNmRmMWRlYjc1MDNkY2QuanBnXCI7IiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAnLi9qcy9uYXZiYXIuanMnO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2pzL2Fib3V0LmpzJztcbmltcG9ydCB7IGxvY2F0aW9uIH0gZnJvbSAnLi9qcy9sb2NhdGlvbi5qcyc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9qcy9tZW51LmpzJztcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2pzL2hvbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmxldCBuYXYgPSBuYXZiYXIoKTtcbmxldCBhYm91dFVzID0gYWJvdXQoKTtcbmxldCBsb2MgPSBsb2NhdGlvbigpO1xubGV0IGVhdCA9IG1lbnUoKTtcbmxldCBsYW5kaW5nID0gaG9tZSgpO1xuXG5uYXYuaGVhZGVyKCk7XG5sYW5kaW5nLnJlbmRlcigpO1xuZWF0LnJlbmRlcigpO1xuYWJvdXRVcy5pbmZvKCk7XG5sb2MucmVzdGF1cmFudHMoKTtcbm5hdi5mb290ZXIoKTsiLCJjb25zdCBhYm91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IGp1bWJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAganVtYm8uY2xhc3NMaXN0LmFkZCgnanVtYm90cm9uJywnanVtYm90cm9uLWZsdWlkJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LTRcIik7XHJcbiAgICAgICAgcDEuY2xhc3NMaXN0LmFkZChcImxlYWRcIik7XHJcbiAgICAgICAgcDIuY2xhc3NMaXN0LmFkZChcImxlYWRcIik7XHJcbiAgICAgICAgcDMuY2xhc3NMaXN0LmFkZChcImxlYWRcIik7XHJcblxyXG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIkFib3V0IFVzXCI7XHJcbiAgICAgICAgcDEuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgdml0YWUgbmVxdWUgcnV0cnVtLCBsb2JvcnRpcyBxdWFtIGVnZXQsIG1heGltdXMgdXJuYS4gTWFlY2VuYXMgY29uZ3VlIGZlbGlzIHV0IHRpbmNpZHVudCBmaW5pYnVzLiBEdWlzIHRlbXB1cyBwcmV0aXVtIG1hdXJpcyBhdCB0aW5jaWR1bnQuIE51bGxhbSBzaXQgYW1ldCBxdWFtIHZpdGFlIG9yY2kgZmV1Z2lhdCBjb25zZXF1YXQuIFNlZCBtYXR0aXMgY29uc2VxdWF0IGVyb3MsIHNlZCB2ZXN0aWJ1bHVtIGlwc3VtIGRpZ25pc3NpbSBmYWNpbGlzaXMuIEN1cmFiaXR1ciBleCBmZWxpcywgZGljdHVtIGEgY29tbW9kbyBzZWQsIGVmZmljaXR1ciB2aXRhZSB0ZWxsdXMuIEFlbmVhbiBwdWx2aW5hciB1cm5hIGEgdHVycGlzIHZ1bHB1dGF0ZSBkYXBpYnVzLiBQcm9pbiBpbXBlcmRpZXQgYXQgbGFjdXMgdmVsIGN1cnN1cy4gRXRpYW0gY29udmFsbGlzIGFyY3Ugc2l0IGFtZXQgZGlnbmlzc2ltIGJpYmVuZHVtLiBBbGlxdWFtIGxpZ3VsYSBhdWd1ZSwgbW9sbGlzIHZpdGFlIG9yY2kgbmVjLCB0cmlzdGlxdWUgcGhhcmV0cmEganVzdG8uIE1vcmJpIGFsaXF1ZXQgcHVydXMgdmVsaXQsIHF1aXMgcG9ydGEgZXggdGVtcHVzIHZlbC4gUHJhZXNlbnQgZXVpc21vZCB2YXJpdXMgcG9zdWVyZS4gVml2YW11cyBzYXBpZW4gZGlhbSwgb3JuYXJlIGV0IG9kaW8gbmVjLCBmZXJtZW50dW0gY29tbW9kbyByaXN1cy5cIjtcclxuICAgICAgICBwMi5pbm5lckhUTUwgPSBcIkFsaXF1YW0gYXQgcG9zdWVyZSBtaSwgYSBmZXJtZW50dW0gdXJuYS4gQWVuZWFuIGFjIGp1c3RvIGVnZXQgdG9ydG9yIHZlbmVuYXRpcyBsdWN0dXMuIE5hbSBsdWN0dXMgZWxlbWVudHVtIHRpbmNpZHVudC4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFBoYXNlbGx1cyBldSB0ZW1wb3IgdmVsaXQuIE51bGxhIGFjIHZvbHV0cGF0IG9yY2ksIG5vbiBjb25kaW1lbnR1bSBzYXBpZW4uIE51bmMgaW4gZXJvcyBiaWJlbmR1bSwgcG9zdWVyZSB0dXJwaXMgdmVsLCBzb2xsaWNpdHVkaW4gbGFjdXMuXCI7XHJcbiAgICAgICAgcDMuaW5uZXJIVE1MID0gXCJQaGFzZWxsdXMgbmVjIG9yY2kgbGlndWxhLiBNb3JiaSBjb21tb2RvIGRpYW0gaWQgbWkgY29udmFsbGlzIGVsZWlmZW5kLiBBZW5lYW4gZWdldCB0dXJwaXMgZXUgbG9yZW0gZmV1Z2lhdCBmYWNpbGlzaXMuIFZpdmFtdXMgc2VkIGlwc3VtIGVnZXQgcmlzdXMgdHJpc3RpcXVlIHBsYWNlcmF0IHZlbCBub24gZXJvcy4gRXRpYW0gZWdldCBzZW0gdWxsYW1jb3JwZXIsIHBsYWNlcmF0IGFyY3UgZXQsIHNhZ2l0dGlzIGxlby4gRHVpcyBjb25zZWN0ZXR1ciBwdXJ1cyBxdWlzIGlwc3VtIG1vbGVzdGllIGZpbmlidXMuIFBlbGxlbnRlc3F1ZSBlcmF0IG9kaW8sIHBvc3VlcmUgYXQgZWxlaWZlbmQgZXQsIGRhcGlidXMgc2l0IGFtZXQgb3JjaS4gTWFlY2VuYXMgbW9sbGlzIGR1aSBldSB2ZWhpY3VsYSBsdWN0dXMuIE1hZWNlbmFzIHBvcnRhIGp1c3RvIHZlbCBwdXJ1cyBlbGVpZmVuZCwgYXVjdG9yIGxvYm9ydGlzIGxpYmVybyBlbGVpZmVuZC4gRXRpYW0gZmF1Y2lidXMgcGhhcmV0cmEgdWx0cmljZXMuIENyYXMgYWMgbGVvIGV0IGF1Z3VlIGNvbnZhbGxpcyB0cmlzdGlxdWUuXCI7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHAxKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHAyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHAzKTtcclxuXHJcbiAgICAgICAganVtYm8uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQoanVtYm8pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICBpbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvLFxyXG4gICAgICAgIHJlbmRlcixcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgeyBhYm91dCB9OyIsImNvbnN0IGhvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHRvcEhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJlZCcpO1xyXG5cclxuICAgICAgICBoMS5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gVmlldCBOaGEgSGFuZ1wiO1xyXG5cclxuICAgICAgICBkaXYyLmFwcGVuZChoMSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChkaXYyKTtcclxuICAgICAgICBtYWluLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGFsb2coKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbnN0IHRvcFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25zdCBzZXJpb3VzbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGgzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoMzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaGVhZGVyXCIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRvcExlZnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkcycsJ3RvcC1sZWZ0Jyk7XHJcbiAgICAgICAgdG9wUmlnaHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkcycsJ3RvcC1yaWdodCcpO1xyXG4gICAgICAgIGJvdHRvbUxlZnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkcycsJ2JvdHRvbS1sZWZ0Jyk7XHJcbiAgICAgICAgYm90dG9tUmlnaHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkcycsJ2JvdHRvbS1yaWdodCcpO1xyXG4gICAgICAgIHNlcmlvdXNseS5jbGFzc0xpc3QuYWRkKCdzZXJpb3VzbHktcmVkJyk7XHJcblxyXG4gICAgICAgIGgxLmlubmVySFRNTCA9IFwiQmVzdCBWaWV0bmFtZXNlIEZvb2RcIjtcclxuICAgICAgICBoNC5pbm5lckhUTUwgPSBcIk9mZmVycyFcIjtcclxuICAgICAgICBoMzEuaW5uZXJIVE1MID0gXCJCZXN0IFF1YWxpdHlcIjtcclxuICAgICAgICBoMzIuaW5uZXJIVE1MID0gXCJXZSBhbHdheXMgU21pbGVcIjtcclxuICAgICAgICBoMzMuaW5uZXJIVE1MID0gXCJUcnkgb3VyIExvY2FsIEZvb2RcIjtcclxuICAgICAgICBoMzQuaW5uZXJIVE1MID0gXCJGb29kIGZyb20gTG9jYWwgTWFya2V0c1wiO1xyXG5cclxuICAgICAgICB0aXRsZS5hcHBlbmQoaDEpO1xyXG4gICAgICAgIHNlcmlvdXNseS5hcHBlbmQoaDQpO1xyXG5cclxuICAgICAgICB0b3BMZWZ0LmFwcGVuZChoMzEpO1xyXG4gICAgICAgIHRvcFJpZ2h0LmFwcGVuZChoMzIpO1xyXG4gICAgICAgIHRvcFJpZ2h0LmFwcGVuZChzZXJpb3VzbHkpO1xyXG4gICAgICAgIGJvdHRvbUxlZnQuYXBwZW5kKGgzMyk7XHJcbiAgICAgICAgYm90dG9tUmlnaHQuYXBwZW5kKGgzNCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvcExlZnQpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvcFJpZ2h0KTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChib3R0b21MZWZ0KTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChib3R0b21SaWdodCk7XHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICBtYWluLmFwcGVuZChtYWluQ29udGFpbmVyKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgICAgdG9wSGVhZGVyKCk7XHJcbiAgICAgICAgY2F0YWxvZygpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wSGVhZGVyLFxyXG4gICAgICBjYXRhbG9nLFxyXG4gICAgICByZW5kZXIsXHJcblxyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCB7IGhvbWUgfTsiLCJjb25zdCBsb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiByZXN0YXVyYW50cygpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgICAgICBjb25zdCB0cjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgICAgICBjb25zdCB0cjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBsb2MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgdHIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBjb25zdCBuYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgbG9jMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IHRyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGxvYzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCB0cjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBsb2M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuXHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndy03NScsJ20tYXV0bycsJ3RhYmxlJywndGFibGUtZGFyaycsJ3RhYmxlLXN0cmlwZWQnLCd0YWJsZS1ib3JkZXJlZCcsJ3RhYmxlLWhvdmVyJyk7XHJcbiAgICAgICAgdGhlYWQuY2xhc3NMaXN0LmFkZCgndGhlYWQtbGlnaHQnKTtcclxuICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgxLmlubmVySFRNTCA9IFwiT3VyIFJlc3RhdXJhbnRzXCI7XHJcbiAgICAgICAgaGVhZGVyMS5pbm5lckhUTUwgPSBcIk5hbWVcIjtcclxuICAgICAgICBoZWFkZXIyLmlubmVySFRNTCA9IFwiTG9jYXRpb25cIjtcclxuICAgICAgICBoZWFkZXIzLmlubmVySFRNTCA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgICAgICBuYW1lMS5pbm5lckhUTUwgPSBcIlZpZXQgTmhhIEhhbmdcIjtcclxuICAgICAgICBuYW1lMi5pbm5lckhUTUwgPSBcIlZpZXQgTmhhIEhhbmcgLSBOWVwiO1xyXG4gICAgICAgIG5hbWUzLmlubmVySFRNTCA9IFwiVmlldCBOaGEgSGFuZyAtIEJDTlwiO1xyXG4gICAgICAgIG5hbWU0LmlubmVySFRNTCA9IFwiVmlldCBOaGEgSGFuZyAtIFRva1wiO1xyXG4gICAgICAgIGxvYzEuaW5uZXJIVE1MID0gXCJIYW5vaVwiO1xyXG4gICAgICAgIGxvYzIuaW5uZXJIVE1MID0gXCJCYXJjZWxvbmFcIjtcclxuICAgICAgICBsb2MzLmlubmVySFRNTCA9IFwiQmFuZ2tva1wiO1xyXG4gICAgICAgIGxvYzQuaW5uZXJIVE1MID0gXCJUb2tpb1wiO1xyXG4gICAgICAgIGluZm8xLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XHJcbiAgICAgICAgaW5mbzIuaW5uZXJIVE1MID0gXCJVcm5hIGV0IHBoYXJldHJhIHBoYXJldHJhIG1hc3NhIG1hc3NhLiBBbGlxdWFtIHNlbSBldCB0b3J0b3IgY29uc2VxdWF0IGlkIHBvcnRhLiBBIGRpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldC5cIjtcclxuICAgICAgICBpbmZvMy5pbm5lckhUTUwgPSBcIkVnZXN0YXMgZHVpIGlkIG9ybmFyZSBhcmN1IG9kaW8gdXQgc2VtLiBWZXN0aWJ1bHVtIG1hdHRpcyB1bGxhbWNvcnBlciB2ZWxpdCBzZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50IG9ybmFyZS5cIjtcclxuICAgICAgICBpbmZvNC5pbm5lckhUTUwgPSBcIkNvbW1vZG8gbnVsbGEgZmFjaWxpc2kgbnVsbGFtIHZlaGljdWxhIGlwc3VtIGEgYXJjdSBjdXJzdXMgdml0YWUuIENvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCB1dCBhbGlxdWFtIHB1cnVzIHNpdCBhbWV0IGx1Y3R1cyB2ZW5lbmF0aXMuXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHI1LmFwcGVuZChuYW1lNCk7XHJcbiAgICAgICAgdHI1LmFwcGVuZChsb2M0KTtcclxuICAgICAgICB0cjUuYXBwZW5kKGluZm80KTtcclxuXHJcbiAgICAgICAgdHI0LmFwcGVuZChuYW1lMyk7XHJcbiAgICAgICAgdHI0LmFwcGVuZChsb2MzKTtcclxuICAgICAgICB0cjQuYXBwZW5kKGluZm8zKTtcclxuXHJcbiAgICAgICAgdHIzLmFwcGVuZChuYW1lMik7XHJcbiAgICAgICAgdHIzLmFwcGVuZChsb2MyKTtcclxuICAgICAgICB0cjMuYXBwZW5kKGluZm8yKTtcclxuXHJcbiAgICAgICAgdHIyLmFwcGVuZChuYW1lMSk7XHJcbiAgICAgICAgdHIyLmFwcGVuZChsb2MxKTtcclxuICAgICAgICB0cjIuYXBwZW5kKGluZm8xKTtcclxuXHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyMik7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyMyk7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyNCk7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyNSk7XHJcblxyXG4gICAgICAgIHRyMS5hcHBlbmQoaGVhZGVyMSk7XHJcbiAgICAgICAgdHIxLmFwcGVuZChoZWFkZXIyKTtcclxuICAgICAgICB0cjEuYXBwZW5kKGhlYWRlcjMpO1xyXG5cclxuICAgICAgICB0aGVhZC5hcHBlbmQodHIxKTtcclxuXHJcbiAgICAgICAgdGFibGUuYXBwZW5kKHRoZWFkKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cclxuICAgICAgICBtYWluLmFwcGVuZChoMSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQodGFibGUpO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICAgIHJlc3RhdXJhbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0YXVyYW50cyxcclxuICAgICAgICByZW5kZXIsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IHsgbG9jYXRpb24gfTsiLCJjb25zdCBtZW51ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCdteS01JywnYmctZGFyaycpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICBmdW5jdGlvbiBmb29kKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29sNDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBoMTEuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCdtYi01JywndGV4dC13aGl0ZS01MCcsJ3B0LTMnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JywncC0yJywnYmctZGFyaycpO1xuICAgIGNvbDQxLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTEuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQyLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTIuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQzLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTMuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ0LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ1LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDUuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTUuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU1LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ2LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDYuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTYuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIHNwYW4xLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuMi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjMuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW40LmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuNS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjYuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuXG4gICAgaDExLmlubmVySFRNTCA9ICdPdXIgRGlzaGVzJztcblxuICAgIHNwYW4xLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMi5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjMuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW40LmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuNS5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjYuaW5uZXJIVE1MID0gJzEsNSQnO1xuXG4gICAgaDUxLmlubmVySFRNTCA9ICdQaG8gQm8uJztcbiAgICBoNTIuaW5uZXJIVE1MID0gJ0J1biBDaGEuJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ0J1biBEYXUuJztcbiAgICBoNTQuaW5uZXJIVE1MID0gJ0RpbnN1bS4nO1xuICAgIGg1NS5pbm5lckhUTUwgPSAnTWVhdCBTdGlja3MuJztcbiAgICBoNTYuaW5uZXJIVE1MID0gJ0JhbmggVG9tLic7XG5cbiAgICBjYXJkMS5pbm5lckhUTUwgPSAnPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9waG8uanBnXCIgYWx0PVwiQ2FyZCBpZ2UgY2FwXCI+JztcbiAgICBjYXJkMi5pbm5lckhUTUwgPSAnPGltZyAgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWQgaW1nLWZsdWlkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9idW5jaGEuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuICAgIGNhcmQzLmlubmVySFRNTCA9ICc8aW1nIHN0eWxlPVwiaGVpZ2h0OiAyNjBweDtcIiBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkIGltZy1mbHVpZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvYnVuZGF1LmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkNC5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL2RpbnN1bS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG4gICAgY2FyZDUuaW5uZXJIVE1MID0gJzxpbWcgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiICBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9tZWF0LmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkNi5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL2Jhbmh0b20uanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuXG4gICAgY2FyZEJvZHkxLmFwcGVuZChoNTEpO1xuICAgIGNhcmRCb2R5MS5hcHBlbmQoc3BhbjEpO1xuICAgIGNhcmQxLmFwcGVuZChjYXJkQm9keTEpO1xuICAgIGNvbDQxLmFwcGVuZChjYXJkMSk7XG5cbiAgICBjYXJkQm9keTIuYXBwZW5kKGg1Mik7XG4gICAgY2FyZEJvZHkyLmFwcGVuZChzcGFuMik7XG4gICAgY2FyZDIuYXBwZW5kKGNhcmRCb2R5Mik7XG4gICAgY29sNDIuYXBwZW5kKGNhcmQyKTtcblxuICAgIGNhcmRCb2R5My5hcHBlbmQoaDUzKTtcbiAgICBjYXJkQm9keTMuYXBwZW5kKHNwYW4zKTtcbiAgICBjYXJkMy5hcHBlbmQoY2FyZEJvZHkzKTtcbiAgICBjb2w0My5hcHBlbmQoY2FyZDMpO1xuXG4gICAgY2FyZEJvZHk0LmFwcGVuZChoNTQpO1xuICAgIGNhcmRCb2R5NC5hcHBlbmQoc3BhbjQpO1xuICAgIGNhcmQ0LmFwcGVuZChjYXJkQm9keTQpO1xuICAgIGNvbDQ0LmFwcGVuZChjYXJkNCk7XG5cbiAgICBjYXJkQm9keTUuYXBwZW5kKGg1NSk7XG4gICAgY2FyZEJvZHk1LmFwcGVuZChzcGFuNSk7XG4gICAgY2FyZDUuYXBwZW5kKGNhcmRCb2R5NSk7XG4gICAgY29sNDUuYXBwZW5kKGNhcmQ1KTtcblxuICAgIGNhcmRCb2R5Ni5hcHBlbmQoaDU2KTtcbiAgICBjYXJkQm9keTYuYXBwZW5kKHNwYW42KTtcbiAgICBjYXJkNi5hcHBlbmQoY2FyZEJvZHk2KTtcbiAgICBjb2w0Ni5hcHBlbmQoY2FyZDYpO1xuXG4gICAgcm93LmFwcGVuZChjb2w0MSk7XG4gICAgcm93LmFwcGVuZChjb2w0Mik7XG4gICAgcm93LmFwcGVuZChjb2w0Myk7XG4gICAgcm93LmFwcGVuZChjb2w0NCk7XG4gICAgcm93LmFwcGVuZChjb2w0NSk7XG4gICAgcm93LmFwcGVuZChjb2w0Nik7XG5cbiAgICBkaXYuYXBwZW5kKGgxMSk7XG4gICAgZGl2LmFwcGVuZChyb3cpO1xuXG4gICAgbWFpbi5hcHBlbmQoZGl2KTtcbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICBmdW5jdGlvbiBkcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2w0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtdC0zJywncC0yJyk7XG4gICAgaDEyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywnbWItNScsJ3RleHQtd2hpdGUtNTAnLCdwdC0zJyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycsJ3AtMicsJ2JnLWRhcmsnKTtcbiAgICBjb2w0MS5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3AtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1MS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0Mi5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3AtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1Mi5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0My5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3AtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1My5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBzcGFuMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4zLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcblxuICAgIGgxMi5pbm5lckhUTUwgPSAnT3VyIEJldmVyYWdlcyc7XG5cbiAgICBzcGFuMS5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjIuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW4zLmlubmVySFRNTCA9ICcxLDUkJztcblxuICAgIGg1MS5pbm5lckhUTUwgPSAnVGVhLic7XG4gICAgaDUyLmlubmVySFRNTCA9ICdDb2ZmZWUuJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ1RyYSBTdWEuJztcblxuICAgIGNhcmQxLmlubmVySFRNTCA9ICc8aW1nICBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvdGVhLmpwZ1wiIGFsdD1cIkNhcmQgaWdlIGNhcFwiPic7XG4gICAgY2FyZDIuaW5uZXJIVE1MID0gJzxpbWcgIHN0eWxlPVwiaGVpZ2h0OiAyNjBweDtcIiBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkIGltZy1mbHVpZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvY29mZmVlLmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkMy5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZCBpbWctZmx1aWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL3RyYXN1YS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG5cbiAgICBjYXJkQm9keTEuYXBwZW5kKGg1MSk7XG4gICAgY2FyZEJvZHkxLmFwcGVuZChzcGFuMSk7XG4gICAgY2FyZDEuYXBwZW5kKGNhcmRCb2R5MSk7XG4gICAgY29sNDEuYXBwZW5kKGNhcmQxKTtcblxuICAgIGNhcmRCb2R5Mi5hcHBlbmQoaDUyKTtcbiAgICBjYXJkQm9keTIuYXBwZW5kKHNwYW4yKTtcbiAgICBjYXJkMi5hcHBlbmQoY2FyZEJvZHkyKTtcbiAgICBjb2w0Mi5hcHBlbmQoY2FyZDIpO1xuXG4gICAgY2FyZEJvZHkzLmFwcGVuZChoNTMpO1xuICAgIGNhcmRCb2R5My5hcHBlbmQoc3BhbjMpO1xuICAgIGNhcmQzLmFwcGVuZChjYXJkQm9keTMpO1xuICAgIGNvbDQzLmFwcGVuZChjYXJkMyk7XG5cbiAgICByb3cuYXBwZW5kKGNvbDQxKTtcbiAgICByb3cuYXBwZW5kKGNvbDQyKTtcbiAgICByb3cuYXBwZW5kKGNvbDQzKTtcblxuICAgIGRpdi5hcHBlbmQoaDEyKTtcbiAgICBkaXYuYXBwZW5kKHJvdyk7XG5cbiAgICBtYWluLmFwcGVuZChkaXYpO1xuICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBmb29kKCk7XG4gICAgZHJpbmtzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvb2QsXG4gICAgZHJpbmtzLFxuICAgIHJlbmRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTsiLCJjb25zdCBuYXZiYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJywnbmF2YmFyLWV4cGFuZC1sZycsJ25hdmJhci1saWdodCcsJ2JhY2tnJywndGV4dC13YXJuaW5nJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsJ25hdmJhci1jb2xsYXBzZScsJ3BsLTUnLCdwci01Jyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2Jyk7XG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG4gICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG4gICAgaXRlbTMuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG5cbiAgICBsb2dvLmlubmVySFRNTCA9ICc8YSBjbGFzcz1cIm5hdmJhci1icmFuZCB0ZXh0LXdhcm5pbmcgZm9udC13ZWlnaHQtYm9sZGVyXCIgaHJlZj1cIiNcIj5WaWV0IE5oYSBIYW5nPC9hPic7XG4gICAgaXRlbTEuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGl0ZW0yLmlubmVySFRNTCA9ICdNZW51JztcbiAgICBpdGVtMy5pbm5lckhUTUwgPSAnQWJvdXQnO1xuICAgIGl0ZW00LmlubmVySFRNTCA9ICdMb2NhdGlvbic7XG5cbiAgICBsaXN0LmFwcGVuZChpdGVtMSk7XG4gICAgbGlzdC5hcHBlbmQoaXRlbTIpO1xuICAgIGxpc3QuYXBwZW5kKGl0ZW0zKTtcbiAgICBsaXN0LmFwcGVuZChpdGVtNCk7XG5cbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmQobGlzdCk7XG5cbiAgICBuYXYuYXBwZW5kKGxvZ28pO1xuICAgIG5hdi5hcHBlbmQobGlua3NDb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobmF2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb250LXNtYWxsJywnYmx1ZScsJ2JnLXdhcm5pbmcnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCdweS0zJywndGV4dC1kYW5nZXInKTtcblxuICAgIGRpdi5pbm5lckhUTUwgPSAnwqkgMjAyMCBDb3B5cmlnaHQ6IDxhIGhyZWY9XCIjXCI+IEphdmlDb3JwPC9hPic7XG5cbiAgICBmb290ZXIuYXBwZW5kKGRpdik7XG4gICAgY29udGVudC5hcHBlbmQoZm9vdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBoZWFkZXIoKTtcbiAgICBmb290ZXIoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyLFxuICAgIGZvb3RlcixcbiAgICByZW5kZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBuYXZiYXIgfTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9