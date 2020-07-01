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
exports.push([module.i, ".title-header {\r\n\tposition: absolute;\r\n\twidth: 30%;\r\n\theight: 150px;\r\n\tbackground-color: rgb(63, 63, 63, 0.8);\r\n\tborder: 4px solid white;\r\n\tz-index: 1;\r\n\tleft: 50%;\r\n\ttop: 71%;\r\n\tmargin-left: -15%;\r\n\ttext-align: center;\r\n\tpadding-top: 15px;\r\n\tcolor: yellow;\r\n\t}\r\n\r\n  .main-container {\r\n\tposition: relative;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgrid-template-rows: repeat(2, 1fr);\r\n\tgrid-gap: 2px;\r\n  }\r\n\r\n  .main-cards {\r\n\tbackground-color: rgb(100, 100, 100);\r\n\theight: 800px;\r\n  }\r\n\r\n  .seriously-red {\r\n\tposition: absolute;\r\n\twidth: 100px;\r\n\theight: 50px;\r\n\tborder: 4px solid white;\r\n\tbackground-color: rgb(161, 161, 161, 0.4);\r\n\tz-index: 1;\r\n\ttop: 3.5%;\r\n\tleft: auto;\r\n\tright: 8%;\r\n\ttext-align: center;\r\n\tpadding-top: 5px;\r\n\tcolor: yellow;\r\n\t}\r\n\r\n  .title-container {\r\n\tcolor: red;\r\n\ttext-align: center;\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tmargin-bottom: 5px;\r\n  }\r\n\r\n  .centered {\r\n\tposition: absolute;\r\n\ttop: 30%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\t}\r\n\r\n  .centered h1 {\r\n\t  font-weight: 900;\r\n\t  font-size: 65px;\r\n  }\r\n\r\n  .top-left {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n  }\r\n\r\n  .top-right {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n  }\r\n\r\n  .bottom-left {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n  }\r\n\r\n  .top-left h3,\r\n  .top-right h3,\r\n  .bottom-right h3,\r\n  .bottom-left h3 {\r\n\ttext-align: center;\r\n\tpadding-top: 125px;\r\n\tcolor: white;\r\n  }\r\n\r\n  .bottom-right {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n\theight: 350px;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\r\n  }\r\n\r\n  .hide {\r\n\t  display: none;\r\n  }\r\n\r\n  .backg {\r\n\t  background-color: red;\r\n  }\r\n\r\n  .hyperlink {\r\n\t  cursor: pointer;\r\n  }\r\n\r\n  .hyperlink:hover {\r\n\t  font-size: 20px;\r\n  }\r\n\r\n  #jumbo {\r\n\t  margin-bottom: 0 !important;\r\n  }\r\n\r\n  #container {\r\n\t  margin-bottom: 0 !important;\r\n\t  margin-top: 0 !important;\r\n  }", ""]);
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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "552f5616442da3d08794607d2e5cc53c.jpg");

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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dcee4d91086570ca46c7e7356fc922aa.jpg");

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

function navigation(link) {
    switch(link) {
        case '0':
            landing.main.classList.remove('hide');
            eat.main.classList.add('hide');
            aboutUs.main.classList.add('hide');
            loc.main.classList.add('hide');
            break;
        case '1':
            landing.main.classList.add('hide');
            eat.main.classList.remove('hide');
            aboutUs.main.classList.add('hide');
            loc.main.classList.add('hide');
            break;
        case '2':
            landing.main.classList.add('hide');
            eat.main.classList.add('hide');
            aboutUs.main.classList.remove('hide');
            loc.main.classList.add('hide');
            break;
        case '3':
            landing.main.classList.add('hide');
            eat.main.classList.add('hide');
            aboutUs.main.classList.add('hide');
            loc.main.classList.remove('hide');
            break;
    }
}



document.querySelectorAll(".hyperlink").forEach(link => link.addEventListener("click", function () {
    navigation(link.id);
}));

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

        jumbo.classList.add('jumbotron','jumbotron-fluid','bg-dark');
        jumbo.id = 'jumbo';
        container.classList.add("container",'bg-secondary','p-5');
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

    return {
        info,
        main,
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
        main,
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
        const div = document.createElement('div');
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

        div.classList.add('text-white','p-5','bg-dark','pb-5');
        table.classList.add('w-75','m-auto','table','table-dark','table-striped','table-bordered','table-hover');
        thead.classList.add('thead-light');
        h1.classList.add('text-center','mb-4');
        
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

        div.append(h1);
        div.append(table);

        main.append(div);

        content.append(main);

    }


    return {
        restaurants,
        main, 
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
  container.classList.add('container','my-5','bg-dark','py-5');
  container.id = "container";
  const main = document.createElement('main');
  main.classList.add('hide','bg-dark');

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
    col41.classList.add('col-4','pt-4','pb-3','pr-3','pl-4','bg-secondary');
    card1.classList.add('card','mb-4');
    cardBody1.classList.add('card-body');
    h51.classList.add('card-text');
    col42.classList.add('col-4','pt-4','pb-3','pr-3','pl-3','bg-secondary');
    card2.classList.add('card','mb-4');
    cardBody2.classList.add('card-body');
    h52.classList.add('card-text');
    col43.classList.add('col-4','pt-4','pb-3','pr-4','pl-3','bg-secondary');
    card3.classList.add('card','mb-4');
    cardBody3.classList.add('card-body');
    h53.classList.add('card-text');
    col44.classList.add('col-4','pt-4','pb-3','pr-3','pl-4','bg-secondary');
    card4.classList.add('card','mb-4');
    cardBody4.classList.add('card-body');
    h54.classList.add('card-text');
    col45.classList.add('col-4','pt-4','pb-3','pr-3','pl-3','bg-secondary');
    card5.classList.add('card','mb-4');
    cardBody5.classList.add('card-body');
    h55.classList.add('card-text');
    col46.classList.add('col-4','pt-4','pb-3','pr-4','pl-3','bg-secondary');
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

    h51.innerHTML = 'Pho Bo';
    h52.innerHTML = 'Bun Cha';
    h53.innerHTML = 'Bun Dau';
    h54.innerHTML = 'Dinsum';
    h55.innerHTML = 'Meat Sticks';
    h56.innerHTML = 'Spring Rolls';

    card1.innerHTML = '<img style="height: 260px;" class="card-img-top rounded" src="../src/images/pho.jpg" alt="Card ige cap">';
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

    container.append(div);

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
    col41.classList.add('col-4','pt-4','pb-3','pr-3','pl-4','bg-secondary');
    card1.classList.add('card','mb-4');
    cardBody1.classList.add('card-body');
    h51.classList.add('card-text');
    col42.classList.add('col-4','pt-4','pb-3','pr-3','pl-3','bg-secondary');
    card2.classList.add('card','mb-4');
    cardBody2.classList.add('card-body');
    h52.classList.add('card-text');
    col43.classList.add('col-4','pt-4','pb-3','pr-4','pl-3','bg-secondary');
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

    h51.innerHTML = 'Tea';
    h52.innerHTML = 'Coffee';
    h53.innerHTML = 'Juice';

    card1.innerHTML = '<img  style="height: 260px;" class="card-img-top rounded" src="../src/images/tea.jpg" alt="Card ige cap">';
    card2.innerHTML = '<img  style="height: 260px;" class="card-img-top rounded img-fluid" src="../src/images/coffee.jpg" alt="Card image cap">';
    card3.innerHTML = '<img style="height: 260px;" class="card-img-top rounded img-fluid" src="../src/images/beverages.jpg" alt="Card image cap">';

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

    container.append(div);
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
    main,
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
    item1.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item1.id = "0";
    item2.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item2.id = "1";
    item3.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item3.id = "2";
    item4.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item4.id = "3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFya2V0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hcmtldDIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVzdGF1cmFudC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yZXN0YXVyYW50X2JnLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlbGxpbmcuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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QTtBQUF3QztBQUNGO0FBQ007QUFDUjtBQUNBO0FBQ1Q7OztBQUczQixVQUFVLDREQUFNO0FBQ2hCLGNBQWMsMERBQUs7QUFDbkIsVUFBVSxnRUFBUTtBQUNsQixVQUFVLHdEQUFJO0FBQ2QsY0FBYyx3REFBSTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRTs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRCxrREFBa0Q7QUFDbEQsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOU9BO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDJIQUF5RDs7QUFFM0Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVzdGF1cmFudF9iZy5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL21hcmtldC5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3NlbGxpbmcuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9yZXN0YXVyYW50LmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbWFya2V0Mi5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGUtaGVhZGVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6IDMwJTtcXHJcXG5cXHRoZWlnaHQ6IDE1MHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzLCAwLjgpO1xcclxcblxcdGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0bGVmdDogNTAlO1xcclxcblxcdHRvcDogNzElO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAtMTUlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMTVweDtcXHJcXG5cXHRjb2xvcjogeWVsbG93O1xcclxcblxcdH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdGdyaWQtZ2FwOiAycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jYXJkcyB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcclxcblxcdGhlaWdodDogODAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaW91c2x5LXJlZCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAxMDBweDtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFx0Ym9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEsIDAuNCk7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHR0b3A6IDMuNSU7XFxyXFxuXFx0bGVmdDogYXV0bztcXHJcXG5cXHRyaWdodDogOCU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuXFx0Y29sb3I6IHllbGxvdztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuICAudGl0bGUtY29udGFpbmVyIHtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcblxcdGhlaWdodDogMzUwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VudGVyZWQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDMwJTtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0fVxcclxcblxcclxcbiAgLmNlbnRlcmVkIGgxIHtcXHJcXG5cXHQgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuXFx0ICBmb250LXNpemU6IDY1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wLWxlZnQge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuXFx0aGVpZ2h0OiAzNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcC1yaWdodCB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG5cXHRoZWlnaHQ6IDM1MHB4O1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm90dG9tLWxlZnQge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuXFx0aGVpZ2h0OiAzNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcC1sZWZ0IGgzLFxcclxcbiAgLnRvcC1yaWdodCBoMyxcXHJcXG4gIC5ib3R0b20tcmlnaHQgaDMsXFxyXFxuICAuYm90dG9tLWxlZnQgaDMge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMTI1cHg7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvdHRvbS1yaWdodCB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG5cXHRoZWlnaHQ6IDM1MHB4O1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZSB7XFxyXFxuXFx0ICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2tnIHtcXHJcXG5cXHQgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oeXBlcmxpbmsge1xcclxcblxcdCAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmh5cGVybGluazpob3ZlciB7XFxyXFxuXFx0ICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjanVtYm8ge1xcclxcblxcdCAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhaW5lciB7XFxyXFxuXFx0ICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxuXFx0ICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxuICB9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NTJmNTYxNjQ0MmRhM2QwODc5NDYwN2QyZTVjYzUzYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWI3ZjU1OTUxYjRmMjcwZjM0Y2I1YzhlNDFlODhlZDkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxMTBhM2M4NzRiNmZhNjc5ODUwZjgyMDhlYmYzMmQ0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkY2VlNGQ5MTA4NjU3MGNhNDZjN2U3MzU2ZmM5MjJhYS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTY2YmM3OWRiNDhhZmJlMmJlNmRmMWRlYjc1MDNkY2QuanBnXCI7IiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAnLi9qcy9uYXZiYXIuanMnO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2pzL2Fib3V0LmpzJztcbmltcG9ydCB7IGxvY2F0aW9uIH0gZnJvbSAnLi9qcy9sb2NhdGlvbi5qcyc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9qcy9tZW51LmpzJztcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2pzL2hvbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cblxubGV0IG5hdiA9IG5hdmJhcigpO1xubGV0IGFib3V0VXMgPSBhYm91dCgpO1xubGV0IGxvYyA9IGxvY2F0aW9uKCk7XG5sZXQgZWF0ID0gbWVudSgpO1xubGV0IGxhbmRpbmcgPSBob21lKCk7XG5cbm5hdi5oZWFkZXIoKTtcbmxhbmRpbmcucmVuZGVyKCk7XG5lYXQucmVuZGVyKCk7XG5hYm91dFVzLmluZm8oKTtcbmxvYy5yZXN0YXVyYW50cygpO1xubmF2LmZvb3RlcigpO1xuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKGxpbmspIHtcbiAgICBzd2l0Y2gobGluaykge1xuICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIGxhbmRpbmcubWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBlYXQubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBhYm91dFVzLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbG9jLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgbGFuZGluZy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGVhdC5tYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGFib3V0VXMubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBsb2MubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICBsYW5kaW5nLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgZWF0Lm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgYWJvdXRVcy5tYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGxvYy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgIGxhbmRpbmcubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBlYXQubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBhYm91dFVzLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbG9jLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oeXBlcmxpbmtcIikuZm9yRWFjaChsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZpZ2F0aW9uKGxpbmsuaWQpO1xufSkpOyIsImNvbnN0IGFib3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluZm8oKSB7XHJcbiAgICAgICAgY29uc3QganVtYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBqdW1iby5jbGFzc0xpc3QuYWRkKCdqdW1ib3Ryb24nLCdqdW1ib3Ryb24tZmx1aWQnLCdiZy1kYXJrJyk7XHJcbiAgICAgICAganVtYm8uaWQgPSAnanVtYm8nO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIsJ2JnLXNlY29uZGFyeScsJ3AtNScpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS00XCIpO1xyXG4gICAgICAgIHAxLmNsYXNzTGlzdC5hZGQoXCJsZWFkXCIpO1xyXG4gICAgICAgIHAyLmNsYXNzTGlzdC5hZGQoXCJsZWFkXCIpO1xyXG4gICAgICAgIHAzLmNsYXNzTGlzdC5hZGQoXCJsZWFkXCIpO1xyXG5cclxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJBYm91dCBVc1wiO1xyXG4gICAgICAgIHAxLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIHZpdGFlIG5lcXVlIHJ1dHJ1bSwgbG9ib3J0aXMgcXVhbSBlZ2V0LCBtYXhpbXVzIHVybmEuIE1hZWNlbmFzIGNvbmd1ZSBmZWxpcyB1dCB0aW5jaWR1bnQgZmluaWJ1cy4gRHVpcyB0ZW1wdXMgcHJldGl1bSBtYXVyaXMgYXQgdGluY2lkdW50LiBOdWxsYW0gc2l0IGFtZXQgcXVhbSB2aXRhZSBvcmNpIGZldWdpYXQgY29uc2VxdWF0LiBTZWQgbWF0dGlzIGNvbnNlcXVhdCBlcm9zLCBzZWQgdmVzdGlidWx1bSBpcHN1bSBkaWduaXNzaW0gZmFjaWxpc2lzLiBDdXJhYml0dXIgZXggZmVsaXMsIGRpY3R1bSBhIGNvbW1vZG8gc2VkLCBlZmZpY2l0dXIgdml0YWUgdGVsbHVzLiBBZW5lYW4gcHVsdmluYXIgdXJuYSBhIHR1cnBpcyB2dWxwdXRhdGUgZGFwaWJ1cy4gUHJvaW4gaW1wZXJkaWV0IGF0IGxhY3VzIHZlbCBjdXJzdXMuIEV0aWFtIGNvbnZhbGxpcyBhcmN1IHNpdCBhbWV0IGRpZ25pc3NpbSBiaWJlbmR1bS4gQWxpcXVhbSBsaWd1bGEgYXVndWUsIG1vbGxpcyB2aXRhZSBvcmNpIG5lYywgdHJpc3RpcXVlIHBoYXJldHJhIGp1c3RvLiBNb3JiaSBhbGlxdWV0IHB1cnVzIHZlbGl0LCBxdWlzIHBvcnRhIGV4IHRlbXB1cyB2ZWwuIFByYWVzZW50IGV1aXNtb2QgdmFyaXVzIHBvc3VlcmUuIFZpdmFtdXMgc2FwaWVuIGRpYW0sIG9ybmFyZSBldCBvZGlvIG5lYywgZmVybWVudHVtIGNvbW1vZG8gcmlzdXMuXCI7XHJcbiAgICAgICAgcDIuaW5uZXJIVE1MID0gXCJBbGlxdWFtIGF0IHBvc3VlcmUgbWksIGEgZmVybWVudHVtIHVybmEuIEFlbmVhbiBhYyBqdXN0byBlZ2V0IHRvcnRvciB2ZW5lbmF0aXMgbHVjdHVzLiBOYW0gbHVjdHVzIGVsZW1lbnR1bSB0aW5jaWR1bnQuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBQaGFzZWxsdXMgZXUgdGVtcG9yIHZlbGl0LiBOdWxsYSBhYyB2b2x1dHBhdCBvcmNpLCBub24gY29uZGltZW50dW0gc2FwaWVuLiBOdW5jIGluIGVyb3MgYmliZW5kdW0sIHBvc3VlcmUgdHVycGlzIHZlbCwgc29sbGljaXR1ZGluIGxhY3VzLlwiO1xyXG4gICAgICAgIHAzLmlubmVySFRNTCA9IFwiUGhhc2VsbHVzIG5lYyBvcmNpIGxpZ3VsYS4gTW9yYmkgY29tbW9kbyBkaWFtIGlkIG1pIGNvbnZhbGxpcyBlbGVpZmVuZC4gQWVuZWFuIGVnZXQgdHVycGlzIGV1IGxvcmVtIGZldWdpYXQgZmFjaWxpc2lzLiBWaXZhbXVzIHNlZCBpcHN1bSBlZ2V0IHJpc3VzIHRyaXN0aXF1ZSBwbGFjZXJhdCB2ZWwgbm9uIGVyb3MuIEV0aWFtIGVnZXQgc2VtIHVsbGFtY29ycGVyLCBwbGFjZXJhdCBhcmN1IGV0LCBzYWdpdHRpcyBsZW8uIER1aXMgY29uc2VjdGV0dXIgcHVydXMgcXVpcyBpcHN1bSBtb2xlc3RpZSBmaW5pYnVzLiBQZWxsZW50ZXNxdWUgZXJhdCBvZGlvLCBwb3N1ZXJlIGF0IGVsZWlmZW5kIGV0LCBkYXBpYnVzIHNpdCBhbWV0IG9yY2kuIE1hZWNlbmFzIG1vbGxpcyBkdWkgZXUgdmVoaWN1bGEgbHVjdHVzLiBNYWVjZW5hcyBwb3J0YSBqdXN0byB2ZWwgcHVydXMgZWxlaWZlbmQsIGF1Y3RvciBsb2JvcnRpcyBsaWJlcm8gZWxlaWZlbmQuIEV0aWFtIGZhdWNpYnVzIHBoYXJldHJhIHVsdHJpY2VzLiBDcmFzIGFjIGxlbyBldCBhdWd1ZSBjb252YWxsaXMgdHJpc3RpcXVlLlwiO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwMSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwMik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwMyk7XHJcblxyXG4gICAgICAgIGp1bWJvLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGp1bWJvKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvLFxyXG4gICAgICAgIG1haW4sXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IHsgYWJvdXQgfTsiLCJjb25zdCBob21lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB0b3BIZWFkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnY2VudGVyZWQnKTtcclxuXHJcbiAgICAgICAgaDEuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIFZpZXQgTmhhIEhhbmdcIjtcclxuXHJcbiAgICAgICAgZGl2Mi5hcHBlbmQoaDEpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoZGl2Mik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQoZGl2KTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYXRhbG9nKCkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0b3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25zdCB0b3BSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGgzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uc3Qgc2VyaW91c2x5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoMzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaDM0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLWhlYWRlclwiKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0b3BMZWZ0LmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZHMnLCd0b3AtbGVmdCcpO1xyXG4gICAgICAgIHRvcFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZHMnLCd0b3AtcmlnaHQnKTtcclxuICAgICAgICBib3R0b21MZWZ0LmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZHMnLCdib3R0b20tbGVmdCcpO1xyXG4gICAgICAgIGJvdHRvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZHMnLCdib3R0b20tcmlnaHQnKTtcclxuICAgICAgICBzZXJpb3VzbHkuY2xhc3NMaXN0LmFkZCgnc2VyaW91c2x5LXJlZCcpO1xyXG5cclxuICAgICAgICBoMS5pbm5lckhUTUwgPSBcIkJlc3QgVmlldG5hbWVzZSBGb29kXCI7XHJcbiAgICAgICAgaDQuaW5uZXJIVE1MID0gXCJPZmZlcnMhXCI7XHJcbiAgICAgICAgaDMxLmlubmVySFRNTCA9IFwiQmVzdCBRdWFsaXR5XCI7XHJcbiAgICAgICAgaDMyLmlubmVySFRNTCA9IFwiV2UgYWx3YXlzIFNtaWxlXCI7XHJcbiAgICAgICAgaDMzLmlubmVySFRNTCA9IFwiVHJ5IG91ciBMb2NhbCBGb29kXCI7XHJcbiAgICAgICAgaDM0LmlubmVySFRNTCA9IFwiRm9vZCBmcm9tIExvY2FsIE1hcmtldHNcIjtcclxuXHJcbiAgICAgICAgdGl0bGUuYXBwZW5kKGgxKTtcclxuICAgICAgICBzZXJpb3VzbHkuYXBwZW5kKGg0KTtcclxuXHJcbiAgICAgICAgdG9wTGVmdC5hcHBlbmQoaDMxKTtcclxuICAgICAgICB0b3BSaWdodC5hcHBlbmQoaDMyKTtcclxuICAgICAgICB0b3BSaWdodC5hcHBlbmQoc2VyaW91c2x5KTtcclxuICAgICAgICBib3R0b21MZWZ0LmFwcGVuZChoMzMpO1xyXG4gICAgICAgIGJvdHRvbVJpZ2h0LmFwcGVuZChoMzQpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BMZWZ0KTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BSaWdodCk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYm90dG9tTGVmdCk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYm90dG9tUmlnaHQpO1xyXG5cclxuICAgICAgICBtYWluLmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQobWFpbkNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICAgIHRvcEhlYWRlcigpO1xyXG4gICAgICAgIGNhdGFsb2coKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcEhlYWRlcixcclxuICAgICAgY2F0YWxvZyxcclxuICAgICAgcmVuZGVyLFxyXG4gICAgICAgIG1haW4sXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IHsgaG9tZSB9OyIsImNvbnN0IGxvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHJlc3RhdXJhbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgICAgIGNvbnN0IHRyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgICAgIGNvbnN0IHRyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGxvYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCB0cjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBsb2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgdHI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBjb25zdCBuYW1lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgbG9jMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgaW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IHRyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGxvYzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdoaXRlJywncC01JywnYmctZGFyaycsJ3BiLTUnKTtcclxuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd3LTc1JywnbS1hdXRvJywndGFibGUnLCd0YWJsZS1kYXJrJywndGFibGUtc3RyaXBlZCcsJ3RhYmxlLWJvcmRlcmVkJywndGFibGUtaG92ZXInKTtcclxuICAgICAgICB0aGVhZC5jbGFzc0xpc3QuYWRkKCd0aGVhZC1saWdodCcpO1xyXG4gICAgICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywnbWItNCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgxLmlubmVySFRNTCA9IFwiT3VyIFJlc3RhdXJhbnRzXCI7XHJcbiAgICAgICAgaGVhZGVyMS5pbm5lckhUTUwgPSBcIk5hbWVcIjtcclxuICAgICAgICBoZWFkZXIyLmlubmVySFRNTCA9IFwiTG9jYXRpb25cIjtcclxuICAgICAgICBoZWFkZXIzLmlubmVySFRNTCA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgICAgICBuYW1lMS5pbm5lckhUTUwgPSBcIlZpZXQgTmhhIEhhbmdcIjtcclxuICAgICAgICBuYW1lMi5pbm5lckhUTUwgPSBcIlZpZXQgTmhhIEhhbmcgLSBOWVwiO1xyXG4gICAgICAgIG5hbWUzLmlubmVySFRNTCA9IFwiVmlldCBOaGEgSGFuZyAtIEJDTlwiO1xyXG4gICAgICAgIG5hbWU0LmlubmVySFRNTCA9IFwiVmlldCBOaGEgSGFuZyAtIFRva1wiO1xyXG4gICAgICAgIGxvYzEuaW5uZXJIVE1MID0gXCJIYW5vaVwiO1xyXG4gICAgICAgIGxvYzIuaW5uZXJIVE1MID0gXCJCYXJjZWxvbmFcIjtcclxuICAgICAgICBsb2MzLmlubmVySFRNTCA9IFwiQmFuZ2tva1wiO1xyXG4gICAgICAgIGxvYzQuaW5uZXJIVE1MID0gXCJUb2tpb1wiO1xyXG4gICAgICAgIGluZm8xLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XHJcbiAgICAgICAgaW5mbzIuaW5uZXJIVE1MID0gXCJVcm5hIGV0IHBoYXJldHJhIHBoYXJldHJhIG1hc3NhIG1hc3NhLiBBbGlxdWFtIHNlbSBldCB0b3J0b3IgY29uc2VxdWF0IGlkIHBvcnRhLiBBIGRpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldC5cIjtcclxuICAgICAgICBpbmZvMy5pbm5lckhUTUwgPSBcIkVnZXN0YXMgZHVpIGlkIG9ybmFyZSBhcmN1IG9kaW8gdXQgc2VtLiBWZXN0aWJ1bHVtIG1hdHRpcyB1bGxhbWNvcnBlciB2ZWxpdCBzZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50IG9ybmFyZS5cIjtcclxuICAgICAgICBpbmZvNC5pbm5lckhUTUwgPSBcIkNvbW1vZG8gbnVsbGEgZmFjaWxpc2kgbnVsbGFtIHZlaGljdWxhIGlwc3VtIGEgYXJjdSBjdXJzdXMgdml0YWUuIENvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCB1dCBhbGlxdWFtIHB1cnVzIHNpdCBhbWV0IGx1Y3R1cyB2ZW5lbmF0aXMuXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHI1LmFwcGVuZChuYW1lNCk7XHJcbiAgICAgICAgdHI1LmFwcGVuZChsb2M0KTtcclxuICAgICAgICB0cjUuYXBwZW5kKGluZm80KTtcclxuXHJcbiAgICAgICAgdHI0LmFwcGVuZChuYW1lMyk7XHJcbiAgICAgICAgdHI0LmFwcGVuZChsb2MzKTtcclxuICAgICAgICB0cjQuYXBwZW5kKGluZm8zKTtcclxuXHJcbiAgICAgICAgdHIzLmFwcGVuZChuYW1lMik7XHJcbiAgICAgICAgdHIzLmFwcGVuZChsb2MyKTtcclxuICAgICAgICB0cjMuYXBwZW5kKGluZm8yKTtcclxuXHJcbiAgICAgICAgdHIyLmFwcGVuZChuYW1lMSk7XHJcbiAgICAgICAgdHIyLmFwcGVuZChsb2MxKTtcclxuICAgICAgICB0cjIuYXBwZW5kKGluZm8xKTtcclxuXHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyMik7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyMyk7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyNCk7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyNSk7XHJcblxyXG4gICAgICAgIHRyMS5hcHBlbmQoaGVhZGVyMSk7XHJcbiAgICAgICAgdHIxLmFwcGVuZChoZWFkZXIyKTtcclxuICAgICAgICB0cjEuYXBwZW5kKGhlYWRlcjMpO1xyXG5cclxuICAgICAgICB0aGVhZC5hcHBlbmQodHIxKTtcclxuXHJcbiAgICAgICAgdGFibGUuYXBwZW5kKHRoZWFkKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kKGgxKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRhYmxlKTtcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmQoZGl2KTtcclxuXHJcbiAgICAgICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RhdXJhbnRzLFxyXG4gICAgICAgIG1haW4sIFxyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCB7IGxvY2F0aW9uIH07IiwiY29uc3QgbWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywnbXktNScsJ2JnLWRhcmsnLCdweS01Jyk7XG4gIGNvbnRhaW5lci5pZCA9IFwiY29udGFpbmVyXCI7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScsJ2JnLWRhcmsnKTtcblxuICBmdW5jdGlvbiBmb29kKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29sNDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBoMTEuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCdtYi01JywndGV4dC13aGl0ZS01MCcsJ3B0LTMnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JywncC0yJywnYmctZGFyaycpO1xuICAgIGNvbDQxLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncHQtNCcsJ3BiLTMnLCdwci0zJywncGwtNCcsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1MS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0Mi5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3B0LTQnLCdwYi0zJywncHItMycsJ3BsLTMnLCdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKCdjYXJkJywnbWItNCcpO1xuICAgIGNhcmRCb2R5Mi5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTIuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDMuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCdwdC00JywncGItMycsJ3ByLTQnLCdwbC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTMuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ0LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncHQtNCcsJ3BiLTMnLCdwci0zJywncGwtNCcsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQ0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHk0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1NC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0NS5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3B0LTQnLCdwYi0zJywncHItMycsJ3BsLTMnLCdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkNS5jbGFzc0xpc3QuYWRkKCdjYXJkJywnbWItNCcpO1xuICAgIGNhcmRCb2R5NS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTUuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDYuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCdwdC00JywncGItMycsJ3ByLTQnLCdwbC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDYuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTYuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIHNwYW4xLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuMi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjMuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW40LmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuNS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjYuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuXG4gICAgaDExLmlubmVySFRNTCA9ICdPdXIgRGlzaGVzJztcblxuICAgIHNwYW4xLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMi5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjMuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW40LmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuNS5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjYuaW5uZXJIVE1MID0gJzEsNSQnO1xuXG4gICAgaDUxLmlubmVySFRNTCA9ICdQaG8gQm8nO1xuICAgIGg1Mi5pbm5lckhUTUwgPSAnQnVuIENoYSc7XG4gICAgaDUzLmlubmVySFRNTCA9ICdCdW4gRGF1JztcbiAgICBoNTQuaW5uZXJIVE1MID0gJ0RpbnN1bSc7XG4gICAgaDU1LmlubmVySFRNTCA9ICdNZWF0IFN0aWNrcyc7XG4gICAgaDU2LmlubmVySFRNTCA9ICdTcHJpbmcgUm9sbHMnO1xuXG4gICAgY2FyZDEuaW5uZXJIVE1MID0gJzxpbWcgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL3Boby5qcGdcIiBhbHQ9XCJDYXJkIGlnZSBjYXBcIj4nO1xuICAgIGNhcmQyLmlubmVySFRNTCA9ICc8aW1nICBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZCBpbWctZmx1aWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL2J1bmNoYS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG4gICAgY2FyZDMuaW5uZXJIVE1MID0gJzxpbWcgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWQgaW1nLWZsdWlkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9idW5kYXUuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuICAgIGNhcmQ0LmlubmVySFRNTCA9ICc8aW1nIHN0eWxlPVwiaGVpZ2h0OiAyNjBweDtcIiAgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvZGluc3VtLmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkNS5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL21lYXQuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuICAgIGNhcmQ2LmlubmVySFRNTCA9ICc8aW1nIHN0eWxlPVwiaGVpZ2h0OiAyNjBweDtcIiAgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvYmFuaHRvbS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG5cbiAgICBjYXJkQm9keTEuYXBwZW5kKGg1MSk7XG4gICAgY2FyZEJvZHkxLmFwcGVuZChzcGFuMSk7XG4gICAgY2FyZDEuYXBwZW5kKGNhcmRCb2R5MSk7XG4gICAgY29sNDEuYXBwZW5kKGNhcmQxKTtcblxuICAgIGNhcmRCb2R5Mi5hcHBlbmQoaDUyKTtcbiAgICBjYXJkQm9keTIuYXBwZW5kKHNwYW4yKTtcbiAgICBjYXJkMi5hcHBlbmQoY2FyZEJvZHkyKTtcbiAgICBjb2w0Mi5hcHBlbmQoY2FyZDIpO1xuXG4gICAgY2FyZEJvZHkzLmFwcGVuZChoNTMpO1xuICAgIGNhcmRCb2R5My5hcHBlbmQoc3BhbjMpO1xuICAgIGNhcmQzLmFwcGVuZChjYXJkQm9keTMpO1xuICAgIGNvbDQzLmFwcGVuZChjYXJkMyk7XG5cbiAgICBjYXJkQm9keTQuYXBwZW5kKGg1NCk7XG4gICAgY2FyZEJvZHk0LmFwcGVuZChzcGFuNCk7XG4gICAgY2FyZDQuYXBwZW5kKGNhcmRCb2R5NCk7XG4gICAgY29sNDQuYXBwZW5kKGNhcmQ0KTtcblxuICAgIGNhcmRCb2R5NS5hcHBlbmQoaDU1KTtcbiAgICBjYXJkQm9keTUuYXBwZW5kKHNwYW41KTtcbiAgICBjYXJkNS5hcHBlbmQoY2FyZEJvZHk1KTtcbiAgICBjb2w0NS5hcHBlbmQoY2FyZDUpO1xuXG4gICAgY2FyZEJvZHk2LmFwcGVuZChoNTYpO1xuICAgIGNhcmRCb2R5Ni5hcHBlbmQoc3BhbjYpO1xuICAgIGNhcmQ2LmFwcGVuZChjYXJkQm9keTYpO1xuICAgIGNvbDQ2LmFwcGVuZChjYXJkNik7XG5cbiAgICByb3cuYXBwZW5kKGNvbDQxKTtcbiAgICByb3cuYXBwZW5kKGNvbDQyKTtcbiAgICByb3cuYXBwZW5kKGNvbDQzKTtcbiAgICByb3cuYXBwZW5kKGNvbDQ0KTtcbiAgICByb3cuYXBwZW5kKGNvbDQ1KTtcbiAgICByb3cuYXBwZW5kKGNvbDQ2KTtcblxuICAgIGRpdi5hcHBlbmQoaDExKTtcbiAgICBkaXYuYXBwZW5kKHJvdyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XG5cbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICBmdW5jdGlvbiBkcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2w0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtdC0zJywncC0yJyk7XG4gICAgaDEyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywnbWItNScsJ3RleHQtd2hpdGUtNTAnLCdwdC0zJyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycsJ3AtMicsJ2JnLWRhcmsnKTtcbiAgICBjb2w0MS5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3B0LTQnLCdwYi0zJywncHItMycsJ3BsLTQnLCdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkMS5jbGFzc0xpc3QuYWRkKCdjYXJkJywnbWItNCcpO1xuICAgIGNhcmRCb2R5MS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTEuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDIuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCdwdC00JywncGItMycsJ3ByLTMnLCdwbC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTIuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQzLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncHQtNCcsJ3BiLTMnLCdwci00JywncGwtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1My5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBzcGFuMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4zLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcblxuICAgIGgxMi5pbm5lckhUTUwgPSAnT3VyIEJldmVyYWdlcyc7XG5cbiAgICBzcGFuMS5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjIuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW4zLmlubmVySFRNTCA9ICcxLDUkJztcblxuICAgIGg1MS5pbm5lckhUTUwgPSAnVGVhJztcbiAgICBoNTIuaW5uZXJIVE1MID0gJ0NvZmZlZSc7XG4gICAgaDUzLmlubmVySFRNTCA9ICdKdWljZSc7XG5cbiAgICBjYXJkMS5pbm5lckhUTUwgPSAnPGltZyAgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL3RlYS5qcGdcIiBhbHQ9XCJDYXJkIGlnZSBjYXBcIj4nO1xuICAgIGNhcmQyLmlubmVySFRNTCA9ICc8aW1nICBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZCBpbWctZmx1aWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL2NvZmZlZS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG4gICAgY2FyZDMuaW5uZXJIVE1MID0gJzxpbWcgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWQgaW1nLWZsdWlkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9iZXZlcmFnZXMuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuXG4gICAgY2FyZEJvZHkxLmFwcGVuZChoNTEpO1xuICAgIGNhcmRCb2R5MS5hcHBlbmQoc3BhbjEpO1xuICAgIGNhcmQxLmFwcGVuZChjYXJkQm9keTEpO1xuICAgIGNvbDQxLmFwcGVuZChjYXJkMSk7XG5cbiAgICBjYXJkQm9keTIuYXBwZW5kKGg1Mik7XG4gICAgY2FyZEJvZHkyLmFwcGVuZChzcGFuMik7XG4gICAgY2FyZDIuYXBwZW5kKGNhcmRCb2R5Mik7XG4gICAgY29sNDIuYXBwZW5kKGNhcmQyKTtcblxuICAgIGNhcmRCb2R5My5hcHBlbmQoaDUzKTtcbiAgICBjYXJkQm9keTMuYXBwZW5kKHNwYW4zKTtcbiAgICBjYXJkMy5hcHBlbmQoY2FyZEJvZHkzKTtcbiAgICBjb2w0My5hcHBlbmQoY2FyZDMpO1xuXG4gICAgcm93LmFwcGVuZChjb2w0MSk7XG4gICAgcm93LmFwcGVuZChjb2w0Mik7XG4gICAgcm93LmFwcGVuZChjb2w0Myk7XG5cbiAgICBkaXYuYXBwZW5kKGgxMik7XG4gICAgZGl2LmFwcGVuZChyb3cpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBmb29kKCk7XG4gICAgZHJpbmtzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvb2QsXG4gICAgZHJpbmtzLFxuICAgIHJlbmRlcixcbiAgICBtYWluLFxuICB9O1xufTtcblxuZXhwb3J0IHsgbWVudSB9OyIsImNvbnN0IG5hdmJhciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCduYXZiYXItZXhwYW5kLWxnJywnbmF2YmFyLWxpZ2h0JywnYmFja2cnLCd0ZXh0LXdhcm5pbmcnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGxpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJywnbmF2YmFyLWNvbGxhcHNlJywncGwtNScsJ3ByLTUnKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhci1uYXYnKTtcbiAgICBpdGVtMS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScsJ21sLTInLCdwbC00JywnaHlwZXJsaW5rJyk7XG4gICAgaXRlbTEuaWQgPSBcIjBcIjtcbiAgICBpdGVtMi5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScsJ21sLTInLCdwbC00JywnaHlwZXJsaW5rJyk7XG4gICAgaXRlbTIuaWQgPSBcIjFcIjtcbiAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScsJ21sLTInLCdwbC00JywnaHlwZXJsaW5rJyk7XG4gICAgaXRlbTMuaWQgPSBcIjJcIjtcbiAgICBpdGVtNC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScsJ21sLTInLCdwbC00JywnaHlwZXJsaW5rJyk7XG4gICAgaXRlbTQuaWQgPSBcIjNcIjtcblxuICAgIGxvZ28uaW5uZXJIVE1MID0gJzxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIHRleHQtd2FybmluZyBmb250LXdlaWdodC1ib2xkZXJcIiBocmVmPVwiI1wiPlZpZXQgTmhhIEhhbmc8L2E+JztcbiAgICBpdGVtMS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgaXRlbTIuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGl0ZW0zLmlubmVySFRNTCA9ICdBYm91dCc7XG4gICAgaXRlbTQuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcblxuICAgIGxpc3QuYXBwZW5kKGl0ZW0xKTtcbiAgICBsaXN0LmFwcGVuZChpdGVtMik7XG4gICAgbGlzdC5hcHBlbmQoaXRlbTMpO1xuICAgIGxpc3QuYXBwZW5kKGl0ZW00KTtcblxuICAgIGxpbmtzQ29udGFpbmVyLmFwcGVuZChsaXN0KTtcblxuICAgIG5hdi5hcHBlbmQobG9nbyk7XG4gICAgbmF2LmFwcGVuZChsaW5rc0NvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZChuYXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtc21hbGwnLCdibHVlJywnYmctd2FybmluZycpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsJ3B5LTMnLCd0ZXh0LWRhbmdlcicpO1xuXG4gICAgZGl2LmlubmVySFRNTCA9ICfCqSAyMDIwIENvcHlyaWdodDogPGEgaHJlZj1cIiNcIj4gSmF2aUNvcnA8L2E+JztcblxuICAgIGZvb3Rlci5hcHBlbmQoZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZChmb290ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGhlYWRlcigpO1xuICAgIGZvb3RlcigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXIsXG4gICAgZm9vdGVyLFxuICAgIHJlbmRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG5hdmJhciB9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=