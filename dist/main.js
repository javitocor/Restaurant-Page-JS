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
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/tea.jpg */ "./src/images/tea.jpg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../images/coffee.jpg */ "./src/images/coffee.jpg");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../images/beverages.jpg */ "./src/images/beverages.jpg");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../images/pho.jpg */ "./src/images/pho.jpg");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../images/buncha.jpg */ "./src/images/buncha.jpg");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../images/bundau.jpg */ "./src/images/bundau.jpg");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../images/dinsum.jpg */ "./src/images/dinsum.jpg");
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../images/meat.jpg */ "./src/images/meat.jpg");
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../images/banhtom.jpg */ "./src/images/banhtom.jpg");
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../images/market2.jpg */ "./src/images/market2.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
// Module
exports.push([module.i, ".title-header {\r\n  position: absolute;\r\n  width: 30%;\r\n  height: 150px;\r\n  background-color: rgb(63, 63, 63, 0.8);\r\n  border: 4px solid white;\r\n  z-index: 1;\r\n  left: 50%;\r\n  top: 71%;\r\n  margin-left: -15%;\r\n  text-align: center;\r\n  padding-top: 15px;\r\n  color: yellow;\r\n}\r\n\r\n.main-container {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-gap: 2px;\r\n}\r\n\r\n.main-cards {\r\n  background-color: rgb(100, 100, 100);\r\n  height: 800px;\r\n}\r\n\r\n.seriously-red {\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 50px;\r\n  border: 4px solid white;\r\n  background-color: rgb(161, 161, 161, 0.4);\r\n  z-index: 1;\r\n  top: 3.5%;\r\n  left: auto;\r\n  right: 8%;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  color: yellow;\r\n}\r\n\r\n.title-container {\r\n  color: red;\r\n  text-align: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 350px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.centered {\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.centered h1 {\r\n  font-weight: 900;\r\n  font-size: 65px;\r\n}\r\n\r\n.top-left {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  height: 350px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.top-right {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  height: 350px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.bottom-left {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  height: 350px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try1 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try2 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try3 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try4 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try5 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try6 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try7 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.try8 {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\r\n  height: 260px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.top-left h3,\r\n.top-right h3,\r\n.bottom-right h3,\r\n.bottom-left h3 {\r\n  text-align: center;\r\n  padding-top: 125px;\r\n  color: white;\r\n}\r\n\r\n.bottom-right {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\r\n  height: 350px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.backg {\r\n  background-color: red;\r\n}\r\n\r\n.hyperlink {\r\n  cursor: pointer;\r\n}\r\n\r\n#jumbo {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n#container {\r\n  margin-bottom: 0 !important;\r\n  margin-top: 0 !important;\r\n}\r\n", ""]);
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

/***/ "./src/images/banhtom.jpg":
/*!********************************!*\
  !*** ./src/images/banhtom.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4245f8a3b1c21c2232b4f0360591910f.jpg");

/***/ }),

/***/ "./src/images/beverages.jpg":
/*!**********************************!*\
  !*** ./src/images/beverages.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ce41535570a65e8716ccc2c8829bcb2c.jpg");

/***/ }),

/***/ "./src/images/buncha.jpg":
/*!*******************************!*\
  !*** ./src/images/buncha.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cf2a30be46d43af69c3c012067dd15cb.jpg");

/***/ }),

/***/ "./src/images/bundau.jpg":
/*!*******************************!*\
  !*** ./src/images/bundau.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "66e212873727c2b623265f68a4eaebb1.jpg");

/***/ }),

/***/ "./src/images/coffee.jpg":
/*!*******************************!*\
  !*** ./src/images/coffee.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4bc223af76b3d786c8efff109f27e120.jpg");

/***/ }),

/***/ "./src/images/dinsum.jpg":
/*!*******************************!*\
  !*** ./src/images/dinsum.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "595f9b1d0e0ae8470803a6ab23aa195b.jpg");

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

/***/ "./src/images/meat.jpg":
/*!*****************************!*\
  !*** ./src/images/meat.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "36f142dea565321b0f70f277d2de8ece.jpg");

/***/ }),

/***/ "./src/images/pho.jpg":
/*!****************************!*\
  !*** ./src/images/pho.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b92eceb3addbeaadff05255fdb7488b.jpg");

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

/***/ "./src/images/tea.jpg":
/*!****************************!*\
  !*** ./src/images/tea.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b3ac783270c72d4dfb4b5fc5ecaa8ec7.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navbar */ "./src/js/navbar.js");
/* harmony import */ var _js_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/about */ "./src/js/about.js");
/* harmony import */ var _js_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/location */ "./src/js/location.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/home */ "./src/js/home.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_5__);








const nav = Object(_js_navbar__WEBPACK_IMPORTED_MODULE_0__["navbar"])();
const aboutUs = Object(_js_about__WEBPACK_IMPORTED_MODULE_1__["about"])();
const loc = Object(_js_location__WEBPACK_IMPORTED_MODULE_2__["location"])();
const eat = Object(_js_menu__WEBPACK_IMPORTED_MODULE_3__["menu"])();
const landing = Object(_js_home__WEBPACK_IMPORTED_MODULE_4__["home"])();

nav.header();
landing.render();
eat.render();
aboutUs.info();
loc.restaurants();
nav.footer();

function navigation(link) {
  switch (link) {
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
    default:
  }
}


document.querySelectorAll('.hyperlink').forEach(link => link.addEventListener('click', () => {
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
/* eslint-disable func-names */
/* eslint-disable comma-spacing */
/* eslint-disable import/prefer-default-export */
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
    container.classList.add('container','bg-secondary','p-5');
    header.classList.add('display-4');
    p1.classList.add('lead');
    p2.classList.add('lead');
    p3.classList.add('lead');

    header.innerHTML = 'About Us';
    p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque rutrum, lobortis quam eget, maximus urna. Maecenas congue felis ut tincidunt finibus. Duis tempus pretium mauris at tincidunt. Nullam sit amet quam vitae orci feugiat consequat. Sed mattis consequat eros, sed vestibulum ipsum dignissim facilisis. Curabitur ex felis, dictum a commodo sed, efficitur vitae tellus. Aenean pulvinar urna a turpis vulputate dapibus. Proin imperdiet at lacus vel cursus. Etiam convallis arcu sit amet dignissim bibendum. Aliquam ligula augue, mollis vitae orci nec, tristique pharetra justo. Morbi aliquet purus velit, quis porta ex tempus vel. Praesent euismod varius posuere. Vivamus sapien diam, ornare et odio nec, fermentum commodo risus.';
    p2.innerHTML = 'Aliquam at posuere mi, a fermentum urna. Aenean ac justo eget tortor venenatis luctus. Nam luctus elementum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eu tempor velit. Nulla ac volutpat orci, non condimentum sapien. Nunc in eros bibendum, posuere turpis vel, sollicitudin lacus.';
    p3.innerHTML = 'Phasellus nec orci ligula. Morbi commodo diam id mi convallis eleifend. Aenean eget turpis eu lorem feugiat facilisis. Vivamus sed ipsum eget risus tristique placerat vel non eros. Etiam eget sem ullamcorper, placerat arcu et, sagittis leo. Duis consectetur purus quis ipsum molestie finibus. Pellentesque erat odio, posuere at eleifend et, dapibus sit amet orci. Maecenas mollis dui eu vehicula luctus. Maecenas porta justo vel purus eleifend, auctor lobortis libero eleifend. Etiam faucibus pharetra ultrices. Cras ac leo et augue convallis tristique.';

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
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-spacing */
/* eslint-disable func-names */
const home = function () {
  const content = document.getElementById('content');
  const main = document.createElement('main');

  function topHeader() {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const h1 = document.createElement('h1');

    div.classList.add('title-container');
    div2.classList.add('centered');

    h1.innerHTML = 'Welcome to Viet Nha Hang';

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

    title.classList.add('title-header');
    mainContainer.classList.add('main-container');
    topLeft.classList.add('main-cards','top-left');
    topRight.classList.add('main-cards','top-right');
    bottomLeft.classList.add('main-cards','bottom-left');
    bottomRight.classList.add('main-cards','bottom-right');
    seriously.classList.add('seriously-red');

    h1.innerHTML = 'Best Vietnamese Food';
    h4.innerHTML = 'Offers!';
    h31.innerHTML = 'Best Quality';
    h32.innerHTML = 'We always Smile';
    h33.innerHTML = 'Try our Local Food';
    h34.innerHTML = 'Food from Local Markets';

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
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-spacing */
/* eslint-disable func-names */
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

    h1.innerHTML = 'Our Restaurants';
    header1.innerHTML = 'Name';
    header2.innerHTML = 'Location';
    header3.innerHTML = 'Information';
    name1.innerHTML = 'Viet Nha Hang';
    name2.innerHTML = 'Viet Nha Hang - NY';
    name3.innerHTML = 'Viet Nha Hang - BCN';
    name4.innerHTML = 'Viet Nha Hang - Tok';
    loc1.innerHTML = 'Hanoi';
    loc2.innerHTML = 'Barcelona';
    loc3.innerHTML = 'Bangkok';
    loc4.innerHTML = 'Tokio';
    info1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    info2.innerHTML = 'Urna et pharetra pharetra massa massa. Aliquam sem et tortor consequat id porta. A diam maecenas sed enim ut sem viverra aliquet.';
    info3.innerHTML = 'Egestas dui id ornare arcu odio ut sem. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.';
    info4.innerHTML = 'Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.';

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
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable comma-spacing */
const menu = function () {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.classList.add('container','my-5','bg-dark','py-5');
  container.id = 'container';
  const main = document.createElement('main');
  main.classList.add('hide', 'bg-dark');

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
    const img1 = document.createElement('div');
    const img2 = document.createElement('div');
    const img3 = document.createElement('div');
    const img4 = document.createElement('div');
    const img5 = document.createElement('div');
    const img6 = document.createElement('div');

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
    img1.classList.add('card-img-top','rounded','img-fluid','try3');
    img2.classList.add('card-img-top','rounded','img-fluid','try4');
    img3.classList.add('card-img-top','rounded','img-fluid','try5');
    img4.classList.add('card-img-top','rounded','img-fluid','try6');
    img5.classList.add('card-img-top','rounded','img-fluid','try7');
    img6.classList.add('card-img-top','rounded','img-fluid','try8');

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

    cardBody1.append(h51);
    cardBody1.append(span1);
    card1.append(img1);
    card1.append(cardBody1);
    col41.append(card1);

    cardBody2.append(h52);
    cardBody2.append(span2);
    card2.append(img2);
    card2.append(cardBody2);
    col42.append(card2);

    cardBody3.append(h53);
    cardBody3.append(span3);
    card3.append(img3);
    card3.append(cardBody3);
    col43.append(card3);

    cardBody4.append(h54);
    cardBody4.append(span4);
    card4.append(img4);
    card4.append(cardBody4);
    col44.append(card4);

    cardBody5.append(h55);
    cardBody5.append(span5);
    card5.append(img5);
    card5.append(cardBody5);
    col45.append(card5);

    cardBody6.append(h56);
    cardBody6.append(span6);
    card6.append(img6);
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
    const img1 = document.createElement('div');
    const img2 = document.createElement('div');
    const img3 = document.createElement('div');

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
    img1.classList.add('card-img-top','rounded','img-fluid','try');
    img2.classList.add('card-img-top','rounded','img-fluid','try1');
    img3.classList.add('card-img-top','rounded','img-fluid','try2');

    h12.innerHTML = 'Our Beverages';

    span1.innerHTML = '1,5$';
    span2.innerHTML = '1,5$';
    span3.innerHTML = '1,5$';

    h51.innerHTML = 'Tea';
    h52.innerHTML = 'Coffee';
    h53.innerHTML = 'Juice';

    cardBody1.append(h51);
    cardBody1.append(span1);
    card1.append(img1);
    card1.append(cardBody1);
    col41.append(card1);

    cardBody2.append(h52);
    cardBody2.append(span2);
    card2.append(img2);
    card2.append(cardBody2);
    col42.append(card2);

    cardBody3.append(h53);
    cardBody3.append(span3);
    card3.append(img3);
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
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-spacing */
const navbar = function navbar() {
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
    item1.id = '0';
    item2.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item2.id = '1';
    item3.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item3.id = '2';
    item4.classList.add('nav-item','ml-2','pl-4','hyperlink');
    item4.id = '3';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmFuaHRvbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iZXZlcmFnZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYnVuY2hhLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2J1bmRhdS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb2ZmZWUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZGluc3VtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hcmtldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYXJrZXQyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21lYXQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGhvLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jlc3RhdXJhbnQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVzdGF1cmFudF9iZy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWxsaW5nLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3RlYS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGLHNDQUFzQyxtQkFBTyxDQUFDLDhHQUFzRDtBQUNwRyxvQ0FBb0MsbUJBQU8sQ0FBQyxtRUFBNkI7QUFDekUsb0NBQW9DLG1CQUFPLENBQUMscURBQXNCO0FBQ2xFLG9DQUFvQyxtQkFBTyxDQUFDLHVEQUF1QjtBQUNuRSxvQ0FBb0MsbUJBQU8sQ0FBQyw2REFBMEI7QUFDdEUsb0NBQW9DLG1CQUFPLENBQUMsK0NBQW1CO0FBQy9ELG9DQUFvQyxtQkFBTyxDQUFDLHFEQUFzQjtBQUNsRSxvQ0FBb0MsbUJBQU8sQ0FBQywyREFBeUI7QUFDckUsb0NBQW9DLG1CQUFPLENBQUMsK0NBQW1CO0FBQy9ELG9DQUFvQyxtQkFBTyxDQUFDLHFEQUFzQjtBQUNsRSxvQ0FBb0MsbUJBQU8sQ0FBQyxxREFBc0I7QUFDbEUscUNBQXFDLG1CQUFPLENBQUMscURBQXNCO0FBQ25FLHFDQUFxQyxtQkFBTyxDQUFDLGlEQUFvQjtBQUNqRSxxQ0FBcUMsbUJBQU8sQ0FBQyx1REFBdUI7QUFDcEUscUNBQXFDLG1CQUFPLENBQUMsdURBQXVCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQix5QkFBeUIsaUJBQWlCLG9CQUFvQiw2Q0FBNkMsOEJBQThCLGlCQUFpQixnQkFBZ0IsZUFBZSx3QkFBd0IseUJBQXlCLHdCQUF3QixvQkFBb0IsS0FBSyx5QkFBeUIseUJBQXlCLG9CQUFvQiw0Q0FBNEMseUNBQXlDLG9CQUFvQixLQUFLLHFCQUFxQiwyQ0FBMkMsb0JBQW9CLEtBQUssd0JBQXdCLHlCQUF5QixtQkFBbUIsbUJBQW1CLDhCQUE4QixnREFBZ0QsaUJBQWlCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsb0JBQW9CLEtBQUssMEJBQTBCLGlCQUFpQix5QkFBeUIsd0VBQXdFLG9CQUFvQixrQ0FBa0MsbUNBQW1DLDZCQUE2Qix5QkFBeUIsS0FBSyxtQkFBbUIseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxLQUFLLHNCQUFzQix1QkFBdUIsc0JBQXNCLEtBQUssbUJBQW1CLHdFQUF3RSxvQkFBb0Isa0NBQWtDLG1DQUFtQyw2QkFBNkIsS0FBSyxvQkFBb0Isd0VBQXdFLG9CQUFvQixrQ0FBa0MsbUNBQW1DLDZCQUE2QixLQUFLLHNCQUFzQix3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssY0FBYyx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx5RUFBeUUsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx5RUFBeUUsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx5RUFBeUUsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssaUZBQWlGLHlCQUF5Qix5QkFBeUIsbUJBQW1CLEtBQUssdUJBQXVCLHlFQUF5RSxvQkFBb0Isa0NBQWtDLG1DQUFtQyw2QkFBNkIsS0FBSyxlQUFlLG9CQUFvQixLQUFLLGdCQUFnQiw0QkFBNEIsS0FBSyxvQkFBb0Isc0JBQXNCLEtBQUssZ0JBQWdCLGtDQUFrQyxLQUFLLG9CQUFvQixrQ0FBa0MsK0JBQStCLEtBQUs7QUFDejlJO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0Y7QUFDTTtBQUNSO0FBQ0E7QUFDTjs7O0FBRzNCLFlBQVkseURBQU07QUFDbEIsZ0JBQWdCLHVEQUFLO0FBQ3JCLFlBQVksNkRBQVE7QUFDcEIsWUFBWSxxREFBSTtBQUNoQixnQkFBZ0IscURBQUk7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDalFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywySEFBeUQ7O0FBRTNGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3Jlc3RhdXJhbnRfYmcuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9tYXJrZXQuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9zZWxsaW5nLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVzdGF1cmFudC5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3RlYS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2NvZmZlZS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2JldmVyYWdlcy5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3Boby5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2J1bmNoYS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2J1bmRhdS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9kaW5zdW0uanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbWVhdC5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9iYW5odG9tLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL21hcmtldDIuanBnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGUtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMsIDAuOCk7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDcxJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC1nYXA6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY2FyZHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcclxcbiAgaGVpZ2h0OiA4MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmlvdXNseS1yZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSwgMC40KTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDMuNSU7XFxyXFxuICBsZWZ0OiBhdXRvO1xcclxcbiAgcmlnaHQ6IDglO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXJlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQgaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50b3AtcmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1sZWZ0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTEge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTMge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTYge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnk3IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHJ5OCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0IGgzLFxcclxcbi50b3AtcmlnaHQgaDMsXFxyXFxuLmJvdHRvbS1yaWdodCBoMyxcXHJcXG4uYm90dG9tLWxlZnQgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXJpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uaHlwZXJsaW5rIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2p1bWJvIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDI0NWY4YTNiMWMyMWMyMjMyYjRmMDM2MDU5MTkxMGYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNlNDE1MzU1NzBhNjVlODcxNmNjYzJjODgyOWJjYjJjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZjJhMzBiZTQ2ZDQzYWY2OWMzYzAxMjA2N2RkMTVjYi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjZlMjEyODczNzI3YzJiNjIzMjY1ZjY4YTRlYWViYjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRiYzIyM2FmNzZiM2Q3ODZjOGVmZmYxMDlmMjdlMTIwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1OTVmOWIxZDBlMGFlODQ3MDgwM2E2YWIyM2FhMTk1Yi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTUyZjU2MTY0NDJkYTNkMDg3OTQ2MDdkMmU1Y2M1M2MuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjViN2Y1NTk1MWI0ZjI3MGYzNGNiNWM4ZTQxZTg4ZWQ5LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNmYxNDJkZWE1NjUzMjFiMGY3MGYyNzdkMmRlOGVjZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2I5MmVjZWIzYWRkYmVhYWRmZjA1MjU1ZmRiNzQ4OGIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxMTBhM2M4NzRiNmZhNjc5ODUwZjgyMDhlYmYzMmQ0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkY2VlNGQ5MTA4NjU3MGNhNDZjN2U3MzU2ZmM5MjJhYS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTY2YmM3OWRiNDhhZmJlMmJlNmRmMWRlYjc1MDNkY2QuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzYWM3ODMyNzBjNzJkNGRmYjRiNWZjNWVjYWE4ZWM3LmpwZ1wiOyIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gJy4vanMvbmF2YmFyJztcbmltcG9ydCB7IGFib3V0IH0gZnJvbSAnLi9qcy9hYm91dCc7XG5pbXBvcnQgeyBsb2NhdGlvbiB9IGZyb20gJy4vanMvbG9jYXRpb24nO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vanMvbWVudSc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9qcy9ob21lJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IG5hdiA9IG5hdmJhcigpO1xuY29uc3QgYWJvdXRVcyA9IGFib3V0KCk7XG5jb25zdCBsb2MgPSBsb2NhdGlvbigpO1xuY29uc3QgZWF0ID0gbWVudSgpO1xuY29uc3QgbGFuZGluZyA9IGhvbWUoKTtcblxubmF2LmhlYWRlcigpO1xubGFuZGluZy5yZW5kZXIoKTtcbmVhdC5yZW5kZXIoKTtcbmFib3V0VXMuaW5mbygpO1xubG9jLnJlc3RhdXJhbnRzKCk7XG5uYXYuZm9vdGVyKCk7XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb24obGluaykge1xuICBzd2l0Y2ggKGxpbmspIHtcbiAgICBjYXNlICcwJzpcbiAgICAgIGxhbmRpbmcubWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlYXQubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBhYm91dFVzLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgbG9jLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMSc6XG4gICAgICBsYW5kaW5nLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgZWF0Lm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgYWJvdXRVcy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGxvYy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzInOlxuICAgICAgbGFuZGluZy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGVhdC5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGFib3V0VXMubWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBsb2MubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICczJzpcbiAgICAgIGxhbmRpbmcubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBlYXQubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBhYm91dFVzLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgbG9jLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxufVxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oeXBlcmxpbmsnKS5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbmF2aWdhdGlvbihsaW5rLmlkKTtcbn0pKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1zcGFjaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5jb25zdCBhYm91dCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgY29uc3QganVtYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAganVtYm8uY2xhc3NMaXN0LmFkZCgnanVtYm90cm9uJywnanVtYm90cm9uLWZsdWlkJywnYmctZGFyaycpO1xuICAgIGp1bWJvLmlkID0gJ2p1bWJvJztcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywnYmctc2Vjb25kYXJ5JywncC01Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktNCcpO1xuICAgIHAxLmNsYXNzTGlzdC5hZGQoJ2xlYWQnKTtcbiAgICBwMi5jbGFzc0xpc3QuYWRkKCdsZWFkJyk7XG4gICAgcDMuY2xhc3NMaXN0LmFkZCgnbGVhZCcpO1xuXG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdBYm91dCBVcyc7XG4gICAgcDEuaW5uZXJIVE1MID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyB2aXRhZSBuZXF1ZSBydXRydW0sIGxvYm9ydGlzIHF1YW0gZWdldCwgbWF4aW11cyB1cm5hLiBNYWVjZW5hcyBjb25ndWUgZmVsaXMgdXQgdGluY2lkdW50IGZpbmlidXMuIER1aXMgdGVtcHVzIHByZXRpdW0gbWF1cmlzIGF0IHRpbmNpZHVudC4gTnVsbGFtIHNpdCBhbWV0IHF1YW0gdml0YWUgb3JjaSBmZXVnaWF0IGNvbnNlcXVhdC4gU2VkIG1hdHRpcyBjb25zZXF1YXQgZXJvcywgc2VkIHZlc3RpYnVsdW0gaXBzdW0gZGlnbmlzc2ltIGZhY2lsaXNpcy4gQ3VyYWJpdHVyIGV4IGZlbGlzLCBkaWN0dW0gYSBjb21tb2RvIHNlZCwgZWZmaWNpdHVyIHZpdGFlIHRlbGx1cy4gQWVuZWFuIHB1bHZpbmFyIHVybmEgYSB0dXJwaXMgdnVscHV0YXRlIGRhcGlidXMuIFByb2luIGltcGVyZGlldCBhdCBsYWN1cyB2ZWwgY3Vyc3VzLiBFdGlhbSBjb252YWxsaXMgYXJjdSBzaXQgYW1ldCBkaWduaXNzaW0gYmliZW5kdW0uIEFsaXF1YW0gbGlndWxhIGF1Z3VlLCBtb2xsaXMgdml0YWUgb3JjaSBuZWMsIHRyaXN0aXF1ZSBwaGFyZXRyYSBqdXN0by4gTW9yYmkgYWxpcXVldCBwdXJ1cyB2ZWxpdCwgcXVpcyBwb3J0YSBleCB0ZW1wdXMgdmVsLiBQcmFlc2VudCBldWlzbW9kIHZhcml1cyBwb3N1ZXJlLiBWaXZhbXVzIHNhcGllbiBkaWFtLCBvcm5hcmUgZXQgb2RpbyBuZWMsIGZlcm1lbnR1bSBjb21tb2RvIHJpc3VzLic7XG4gICAgcDIuaW5uZXJIVE1MID0gJ0FsaXF1YW0gYXQgcG9zdWVyZSBtaSwgYSBmZXJtZW50dW0gdXJuYS4gQWVuZWFuIGFjIGp1c3RvIGVnZXQgdG9ydG9yIHZlbmVuYXRpcyBsdWN0dXMuIE5hbSBsdWN0dXMgZWxlbWVudHVtIHRpbmNpZHVudC4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFBoYXNlbGx1cyBldSB0ZW1wb3IgdmVsaXQuIE51bGxhIGFjIHZvbHV0cGF0IG9yY2ksIG5vbiBjb25kaW1lbnR1bSBzYXBpZW4uIE51bmMgaW4gZXJvcyBiaWJlbmR1bSwgcG9zdWVyZSB0dXJwaXMgdmVsLCBzb2xsaWNpdHVkaW4gbGFjdXMuJztcbiAgICBwMy5pbm5lckhUTUwgPSAnUGhhc2VsbHVzIG5lYyBvcmNpIGxpZ3VsYS4gTW9yYmkgY29tbW9kbyBkaWFtIGlkIG1pIGNvbnZhbGxpcyBlbGVpZmVuZC4gQWVuZWFuIGVnZXQgdHVycGlzIGV1IGxvcmVtIGZldWdpYXQgZmFjaWxpc2lzLiBWaXZhbXVzIHNlZCBpcHN1bSBlZ2V0IHJpc3VzIHRyaXN0aXF1ZSBwbGFjZXJhdCB2ZWwgbm9uIGVyb3MuIEV0aWFtIGVnZXQgc2VtIHVsbGFtY29ycGVyLCBwbGFjZXJhdCBhcmN1IGV0LCBzYWdpdHRpcyBsZW8uIER1aXMgY29uc2VjdGV0dXIgcHVydXMgcXVpcyBpcHN1bSBtb2xlc3RpZSBmaW5pYnVzLiBQZWxsZW50ZXNxdWUgZXJhdCBvZGlvLCBwb3N1ZXJlIGF0IGVsZWlmZW5kIGV0LCBkYXBpYnVzIHNpdCBhbWV0IG9yY2kuIE1hZWNlbmFzIG1vbGxpcyBkdWkgZXUgdmVoaWN1bGEgbHVjdHVzLiBNYWVjZW5hcyBwb3J0YSBqdXN0byB2ZWwgcHVydXMgZWxlaWZlbmQsIGF1Y3RvciBsb2JvcnRpcyBsaWJlcm8gZWxlaWZlbmQuIEV0aWFtIGZhdWNpYnVzIHBoYXJldHJhIHVsdHJpY2VzLiBDcmFzIGFjIGxlbyBldCBhdWd1ZSBjb252YWxsaXMgdHJpc3RpcXVlLic7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZChwMSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwMik7XG4gICAgY29udGFpbmVyLmFwcGVuZChwMyk7XG5cbiAgICBqdW1iby5hcHBlbmQoY29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZChqdW1ibyk7XG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluZm8sXG4gICAgbWFpbixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGFib3V0IH07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtc3BhY2luZyAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuY29uc3QgaG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgZnVuY3Rpb24gdG9wSGVhZGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJlZCcpO1xuXG4gICAgaDEuaW5uZXJIVE1MID0gJ1dlbGNvbWUgdG8gVmlldCBOaGEgSGFuZyc7XG5cbiAgICBkaXYyLmFwcGVuZChoMSk7XG4gICAgZGl2LmFwcGVuZChkaXYyKTtcbiAgICBtYWluLmFwcGVuZChkaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2F0YWxvZygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgdG9wUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHNlcmlvdXNseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBib3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgzNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1oZWFkZXInKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgdG9wTGVmdC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmRzJywndG9wLWxlZnQnKTtcbiAgICB0b3BSaWdodC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmRzJywndG9wLXJpZ2h0Jyk7XG4gICAgYm90dG9tTGVmdC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmRzJywnYm90dG9tLWxlZnQnKTtcbiAgICBib3R0b21SaWdodC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmRzJywnYm90dG9tLXJpZ2h0Jyk7XG4gICAgc2VyaW91c2x5LmNsYXNzTGlzdC5hZGQoJ3NlcmlvdXNseS1yZWQnKTtcblxuICAgIGgxLmlubmVySFRNTCA9ICdCZXN0IFZpZXRuYW1lc2UgRm9vZCc7XG4gICAgaDQuaW5uZXJIVE1MID0gJ09mZmVycyEnO1xuICAgIGgzMS5pbm5lckhUTUwgPSAnQmVzdCBRdWFsaXR5JztcbiAgICBoMzIuaW5uZXJIVE1MID0gJ1dlIGFsd2F5cyBTbWlsZSc7XG4gICAgaDMzLmlubmVySFRNTCA9ICdUcnkgb3VyIExvY2FsIEZvb2QnO1xuICAgIGgzNC5pbm5lckhUTUwgPSAnRm9vZCBmcm9tIExvY2FsIE1hcmtldHMnO1xuXG4gICAgdGl0bGUuYXBwZW5kKGgxKTtcbiAgICBzZXJpb3VzbHkuYXBwZW5kKGg0KTtcblxuICAgIHRvcExlZnQuYXBwZW5kKGgzMSk7XG4gICAgdG9wUmlnaHQuYXBwZW5kKGgzMik7XG4gICAgdG9wUmlnaHQuYXBwZW5kKHNlcmlvdXNseSk7XG4gICAgYm90dG9tTGVmdC5hcHBlbmQoaDMzKTtcbiAgICBib3R0b21SaWdodC5hcHBlbmQoaDM0KTtcblxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9wTGVmdCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9wUmlnaHQpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGJvdHRvbUxlZnQpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGJvdHRvbVJpZ2h0KTtcblxuICAgIG1haW4uYXBwZW5kKHRpdGxlKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB0b3BIZWFkZXIoKTtcbiAgICBjYXRhbG9nKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcEhlYWRlcixcbiAgICBjYXRhbG9nLFxuICAgIHJlbmRlcixcbiAgICBtYWluLFxuICB9O1xufTtcblxuZXhwb3J0IHsgaG9tZSB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLXNwYWNpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbmNvbnN0IGxvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgZnVuY3Rpb24gcmVzdGF1cmFudHMoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgY29uc3QgdHIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgdHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgbG9jMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGxvYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCB0cjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG5hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBsb2MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdHI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBuYW1lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgbG9jNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdoaXRlJywncC01JywnYmctZGFyaycsJ3BiLTUnKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd3LTc1JywnbS1hdXRvJywndGFibGUnLCd0YWJsZS1kYXJrJywndGFibGUtc3RyaXBlZCcsJ3RhYmxlLWJvcmRlcmVkJywndGFibGUtaG92ZXInKTtcbiAgICB0aGVhZC5jbGFzc0xpc3QuYWRkKCd0aGVhZC1saWdodCcpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywnbWItNCcpO1xuXG4gICAgaDEuaW5uZXJIVE1MID0gJ091ciBSZXN0YXVyYW50cyc7XG4gICAgaGVhZGVyMS5pbm5lckhUTUwgPSAnTmFtZSc7XG4gICAgaGVhZGVyMi5pbm5lckhUTUwgPSAnTG9jYXRpb24nO1xuICAgIGhlYWRlcjMuaW5uZXJIVE1MID0gJ0luZm9ybWF0aW9uJztcbiAgICBuYW1lMS5pbm5lckhUTUwgPSAnVmlldCBOaGEgSGFuZyc7XG4gICAgbmFtZTIuaW5uZXJIVE1MID0gJ1ZpZXQgTmhhIEhhbmcgLSBOWSc7XG4gICAgbmFtZTMuaW5uZXJIVE1MID0gJ1ZpZXQgTmhhIEhhbmcgLSBCQ04nO1xuICAgIG5hbWU0LmlubmVySFRNTCA9ICdWaWV0IE5oYSBIYW5nIC0gVG9rJztcbiAgICBsb2MxLmlubmVySFRNTCA9ICdIYW5vaSc7XG4gICAgbG9jMi5pbm5lckhUTUwgPSAnQmFyY2Vsb25hJztcbiAgICBsb2MzLmlubmVySFRNTCA9ICdCYW5na29rJztcbiAgICBsb2M0LmlubmVySFRNTCA9ICdUb2tpbyc7XG4gICAgaW5mbzEuaW5uZXJIVE1MID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLic7XG4gICAgaW5mbzIuaW5uZXJIVE1MID0gJ1VybmEgZXQgcGhhcmV0cmEgcGhhcmV0cmEgbWFzc2EgbWFzc2EuIEFsaXF1YW0gc2VtIGV0IHRvcnRvciBjb25zZXF1YXQgaWQgcG9ydGEuIEEgZGlhbSBtYWVjZW5hcyBzZWQgZW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWV0Lic7XG4gICAgaW5mbzMuaW5uZXJIVE1MID0gJ0VnZXN0YXMgZHVpIGlkIG9ybmFyZSBhcmN1IG9kaW8gdXQgc2VtLiBWZXN0aWJ1bHVtIG1hdHRpcyB1bGxhbWNvcnBlciB2ZWxpdCBzZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50IG9ybmFyZS4nO1xuICAgIGluZm80LmlubmVySFRNTCA9ICdDb21tb2RvIG51bGxhIGZhY2lsaXNpIG51bGxhbSB2ZWhpY3VsYSBpcHN1bSBhIGFyY3UgY3Vyc3VzIHZpdGFlLiBDb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgdXQgYWxpcXVhbSBwdXJ1cyBzaXQgYW1ldCBsdWN0dXMgdmVuZW5hdGlzLic7XG5cbiAgICB0cjUuYXBwZW5kKG5hbWU0KTtcbiAgICB0cjUuYXBwZW5kKGxvYzQpO1xuICAgIHRyNS5hcHBlbmQoaW5mbzQpO1xuXG4gICAgdHI0LmFwcGVuZChuYW1lMyk7XG4gICAgdHI0LmFwcGVuZChsb2MzKTtcbiAgICB0cjQuYXBwZW5kKGluZm8zKTtcblxuICAgIHRyMy5hcHBlbmQobmFtZTIpO1xuICAgIHRyMy5hcHBlbmQobG9jMik7XG4gICAgdHIzLmFwcGVuZChpbmZvMik7XG5cbiAgICB0cjIuYXBwZW5kKG5hbWUxKTtcbiAgICB0cjIuYXBwZW5kKGxvYzEpO1xuICAgIHRyMi5hcHBlbmQoaW5mbzEpO1xuXG4gICAgdGJvZHkuYXBwZW5kKHRyMik7XG4gICAgdGJvZHkuYXBwZW5kKHRyMyk7XG4gICAgdGJvZHkuYXBwZW5kKHRyNCk7XG4gICAgdGJvZHkuYXBwZW5kKHRyNSk7XG5cbiAgICB0cjEuYXBwZW5kKGhlYWRlcjEpO1xuICAgIHRyMS5hcHBlbmQoaGVhZGVyMik7XG4gICAgdHIxLmFwcGVuZChoZWFkZXIzKTtcblxuICAgIHRoZWFkLmFwcGVuZCh0cjEpO1xuXG4gICAgdGFibGUuYXBwZW5kKHRoZWFkKTtcbiAgICB0YWJsZS5hcHBlbmQodGJvZHkpO1xuXG4gICAgZGl2LmFwcGVuZChoMSk7XG4gICAgZGl2LmFwcGVuZCh0YWJsZSk7XG5cbiAgICBtYWluLmFwcGVuZChkaXYpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgcmVzdGF1cmFudHMsXG4gICAgbWFpbixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGxvY2F0aW9uIH07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtc3BhY2luZyAqL1xuY29uc3QgbWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywnbXktNScsJ2JnLWRhcmsnLCdweS01Jyk7XG4gIGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnLCAnYmctZGFyaycpO1xuXG4gIGZ1bmN0aW9uIGZvb2QoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2w0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGgxMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsJ21iLTUnLCd0ZXh0LXdoaXRlLTUwJywncHQtMycpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnLCdwLTInLCdiZy1kYXJrJyk7XG4gICAgY29sNDEuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCdwdC00JywncGItMycsJ3ByLTMnLCdwbC00JywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTEuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQyLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncHQtNCcsJ3BiLTMnLCdwci0zJywncGwtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1Mi5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0My5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3B0LTQnLCdwYi0zJywncHItNCcsJ3BsLTMnLCdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKCdjYXJkJywnbWItNCcpO1xuICAgIGNhcmRCb2R5My5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTMuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDQuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCdwdC00JywncGItMycsJ3ByLTMnLCdwbC00JywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ1LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncHQtNCcsJ3BiLTMnLCdwci0zJywncGwtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHk1LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1NS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0Ni5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3B0LTQnLCdwYi0zJywncHItNCcsJ3BsLTMnLCdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkNi5jbGFzc0xpc3QuYWRkKCdjYXJkJywnbWItNCcpO1xuICAgIGNhcmRCb2R5Ni5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTYuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgc3BhbjEuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4yLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuMy5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjQuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW41LmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuNi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCdyb3VuZGVkJywnaW1nLWZsdWlkJywndHJ5MycpO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWctdG9wJywncm91bmRlZCcsJ2ltZy1mbHVpZCcsJ3RyeTQnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsJ3JvdW5kZWQnLCdpbWctZmx1aWQnLCd0cnk1Jyk7XG4gICAgaW1nNC5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCdyb3VuZGVkJywnaW1nLWZsdWlkJywndHJ5NicpO1xuICAgIGltZzUuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWctdG9wJywncm91bmRlZCcsJ2ltZy1mbHVpZCcsJ3RyeTcnKTtcbiAgICBpbWc2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsJ3JvdW5kZWQnLCdpbWctZmx1aWQnLCd0cnk4Jyk7XG5cbiAgICBoMTEuaW5uZXJIVE1MID0gJ091ciBEaXNoZXMnO1xuXG4gICAgc3BhbjEuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW4yLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMy5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjQuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW41LmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuNi5pbm5lckhUTUwgPSAnMSw1JCc7XG5cbiAgICBoNTEuaW5uZXJIVE1MID0gJ1BobyBCbyc7XG4gICAgaDUyLmlubmVySFRNTCA9ICdCdW4gQ2hhJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ0J1biBEYXUnO1xuICAgIGg1NC5pbm5lckhUTUwgPSAnRGluc3VtJztcbiAgICBoNTUuaW5uZXJIVE1MID0gJ01lYXQgU3RpY2tzJztcbiAgICBoNTYuaW5uZXJIVE1MID0gJ1NwcmluZyBSb2xscyc7XG5cbiAgICBjYXJkQm9keTEuYXBwZW5kKGg1MSk7XG4gICAgY2FyZEJvZHkxLmFwcGVuZChzcGFuMSk7XG4gICAgY2FyZDEuYXBwZW5kKGltZzEpO1xuICAgIGNhcmQxLmFwcGVuZChjYXJkQm9keTEpO1xuICAgIGNvbDQxLmFwcGVuZChjYXJkMSk7XG5cbiAgICBjYXJkQm9keTIuYXBwZW5kKGg1Mik7XG4gICAgY2FyZEJvZHkyLmFwcGVuZChzcGFuMik7XG4gICAgY2FyZDIuYXBwZW5kKGltZzIpO1xuICAgIGNhcmQyLmFwcGVuZChjYXJkQm9keTIpO1xuICAgIGNvbDQyLmFwcGVuZChjYXJkMik7XG5cbiAgICBjYXJkQm9keTMuYXBwZW5kKGg1Myk7XG4gICAgY2FyZEJvZHkzLmFwcGVuZChzcGFuMyk7XG4gICAgY2FyZDMuYXBwZW5kKGltZzMpO1xuICAgIGNhcmQzLmFwcGVuZChjYXJkQm9keTMpO1xuICAgIGNvbDQzLmFwcGVuZChjYXJkMyk7XG5cbiAgICBjYXJkQm9keTQuYXBwZW5kKGg1NCk7XG4gICAgY2FyZEJvZHk0LmFwcGVuZChzcGFuNCk7XG4gICAgY2FyZDQuYXBwZW5kKGltZzQpO1xuICAgIGNhcmQ0LmFwcGVuZChjYXJkQm9keTQpO1xuICAgIGNvbDQ0LmFwcGVuZChjYXJkNCk7XG5cbiAgICBjYXJkQm9keTUuYXBwZW5kKGg1NSk7XG4gICAgY2FyZEJvZHk1LmFwcGVuZChzcGFuNSk7XG4gICAgY2FyZDUuYXBwZW5kKGltZzUpO1xuICAgIGNhcmQ1LmFwcGVuZChjYXJkQm9keTUpO1xuICAgIGNvbDQ1LmFwcGVuZChjYXJkNSk7XG5cbiAgICBjYXJkQm9keTYuYXBwZW5kKGg1Nik7XG4gICAgY2FyZEJvZHk2LmFwcGVuZChzcGFuNik7XG4gICAgY2FyZDYuYXBwZW5kKGltZzYpO1xuICAgIGNhcmQ2LmFwcGVuZChjYXJkQm9keTYpO1xuICAgIGNvbDQ2LmFwcGVuZChjYXJkNik7XG5cbiAgICByb3cuYXBwZW5kKGNvbDQxKTtcbiAgICByb3cuYXBwZW5kKGNvbDQyKTtcbiAgICByb3cuYXBwZW5kKGNvbDQzKTtcbiAgICByb3cuYXBwZW5kKGNvbDQ0KTtcbiAgICByb3cuYXBwZW5kKGNvbDQ1KTtcbiAgICByb3cuYXBwZW5kKGNvbDQ2KTtcblxuICAgIGRpdi5hcHBlbmQoaDExKTtcbiAgICBkaXYuYXBwZW5kKHJvdyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XG5cbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICBmdW5jdGlvbiBkcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2w0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtdC0zJywncC0yJyk7XG4gICAgaDEyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywnbWItNScsJ3RleHQtd2hpdGUtNTAnLCdwdC0zJyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycsJ3AtMicsJ2JnLWRhcmsnKTtcbiAgICBjb2w0MS5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3B0LTQnLCdwYi0zJywncHItMycsJ3BsLTQnLCdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkMS5jbGFzc0xpc3QuYWRkKCdjYXJkJywnbWItNCcpO1xuICAgIGNhcmRCb2R5MS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTEuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDIuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCdwdC00JywncGItMycsJ3ByLTMnLCdwbC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTIuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQzLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncHQtNCcsJ3BiLTMnLCdwci00JywncGwtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1My5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBzcGFuMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4zLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsJ3JvdW5kZWQnLCdpbWctZmx1aWQnLCd0cnknKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsJ3JvdW5kZWQnLCdpbWctZmx1aWQnLCd0cnkxJyk7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCdyb3VuZGVkJywnaW1nLWZsdWlkJywndHJ5MicpO1xuXG4gICAgaDEyLmlubmVySFRNTCA9ICdPdXIgQmV2ZXJhZ2VzJztcblxuICAgIHNwYW4xLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMi5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjMuaW5uZXJIVE1MID0gJzEsNSQnO1xuXG4gICAgaDUxLmlubmVySFRNTCA9ICdUZWEnO1xuICAgIGg1Mi5pbm5lckhUTUwgPSAnQ29mZmVlJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ0p1aWNlJztcblxuICAgIGNhcmRCb2R5MS5hcHBlbmQoaDUxKTtcbiAgICBjYXJkQm9keTEuYXBwZW5kKHNwYW4xKTtcbiAgICBjYXJkMS5hcHBlbmQoaW1nMSk7XG4gICAgY2FyZDEuYXBwZW5kKGNhcmRCb2R5MSk7XG4gICAgY29sNDEuYXBwZW5kKGNhcmQxKTtcblxuICAgIGNhcmRCb2R5Mi5hcHBlbmQoaDUyKTtcbiAgICBjYXJkQm9keTIuYXBwZW5kKHNwYW4yKTtcbiAgICBjYXJkMi5hcHBlbmQoaW1nMik7XG4gICAgY2FyZDIuYXBwZW5kKGNhcmRCb2R5Mik7XG4gICAgY29sNDIuYXBwZW5kKGNhcmQyKTtcblxuICAgIGNhcmRCb2R5My5hcHBlbmQoaDUzKTtcbiAgICBjYXJkQm9keTMuYXBwZW5kKHNwYW4zKTtcbiAgICBjYXJkMy5hcHBlbmQoaW1nMyk7XG4gICAgY2FyZDMuYXBwZW5kKGNhcmRCb2R5Myk7XG4gICAgY29sNDMuYXBwZW5kKGNhcmQzKTtcblxuICAgIHJvdy5hcHBlbmQoY29sNDEpO1xuICAgIHJvdy5hcHBlbmQoY29sNDIpO1xuICAgIHJvdy5hcHBlbmQoY29sNDMpO1xuXG4gICAgZGl2LmFwcGVuZChoMTIpO1xuICAgIGRpdi5hcHBlbmQocm93KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZm9vZCgpO1xuICAgIGRyaW5rcygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb29kLFxuICAgIGRyaW5rcyxcbiAgICByZW5kZXIsXG4gICAgbWFpbixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1zcGFjaW5nICovXG5jb25zdCBuYXZiYXIgPSBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJywnbmF2YmFyLWV4cGFuZC1sZycsJ25hdmJhci1saWdodCcsJ2JhY2tnJywndGV4dC13YXJuaW5nJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsJ25hdmJhci1jb2xsYXBzZScsJ3BsLTUnLCdwci01Jyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2Jyk7XG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJywncGwtNCcsJ2h5cGVybGluaycpO1xuICAgIGl0ZW0xLmlkID0gJzAnO1xuICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJywnbWwtMicsJ3BsLTQnLCdoeXBlcmxpbmsnKTtcbiAgICBpdGVtMi5pZCA9ICcxJztcbiAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScsJ21sLTInLCdwbC00JywnaHlwZXJsaW5rJyk7XG4gICAgaXRlbTMuaWQgPSAnMic7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJywncGwtNCcsJ2h5cGVybGluaycpO1xuICAgIGl0ZW00LmlkID0gJzMnO1xuXG4gICAgbG9nby5pbm5lckhUTUwgPSAnPGEgY2xhc3M9XCJuYXZiYXItYnJhbmQgdGV4dC13YXJuaW5nIGZvbnQtd2VpZ2h0LWJvbGRlclwiIGhyZWY9XCIjXCI+VmlldCBOaGEgSGFuZzwvYT4nO1xuICAgIGl0ZW0xLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBpdGVtMi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgaXRlbTMuaW5uZXJIVE1MID0gJ0Fib3V0JztcbiAgICBpdGVtNC5pbm5lckhUTUwgPSAnTG9jYXRpb24nO1xuXG4gICAgbGlzdC5hcHBlbmQoaXRlbTEpO1xuICAgIGxpc3QuYXBwZW5kKGl0ZW0yKTtcbiAgICBsaXN0LmFwcGVuZChpdGVtMyk7XG4gICAgbGlzdC5hcHBlbmQoaXRlbTQpO1xuXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kKGxpc3QpO1xuXG4gICAgbmF2LmFwcGVuZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kKGxpbmtzQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdik7XG4gIH1cblxuICBmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9udC1zbWFsbCcsJ2JsdWUnLCdiZy13YXJuaW5nJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywncHktMycsJ3RleHQtZGFuZ2VyJyk7XG5cbiAgICBkaXYuaW5uZXJIVE1MID0gJ8KpIDIwMjAgQ29weXJpZ2h0OiA8YSBocmVmPVwiI1wiPiBKYXZpQ29ycDwvYT4nO1xuXG4gICAgZm9vdGVyLmFwcGVuZChkaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaGVhZGVyKCk7XG4gICAgZm9vdGVyKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlYWRlcixcbiAgICBmb290ZXIsXG4gICAgcmVuZGVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgbmF2YmFyIH07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==