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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const about = function about() {
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

    jumbo.classList.add('jumbotron', 'jumbotron-fluid', 'bg-dark');
    jumbo.id = 'jumbo';
    container.classList.add('container', 'bg-secondary', 'p-5');
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

/* harmony default export */ __webpack_exports__["default"] = ({ about });

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const home = function home() {
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
    topLeft.classList.add('main-cards', 'top-left');
    topRight.classList.add('main-cards', 'top-right');
    bottomLeft.classList.add('main-cards', 'bottom-left');
    bottomRight.classList.add('main-cards', 'bottom-right');
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

/* harmony default export */ __webpack_exports__["default"] = ({ home });

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const location = function location() {
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

    div.classList.add('text-white', 'p-5', 'bg-dark', 'pb-5');
    table.classList.add('w-75', 'm-auto', 'table', 'table-dark', 'table-striped', 'table-bordered', 'table-hover');
    thead.classList.add('thead-light');
    h1.classList.add('text-center', 'mb-4');

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

/* harmony default export */ __webpack_exports__["default"] = ({ location });

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = function menu() {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.classList.add('container', 'my-5', 'bg-dark', 'py-5');
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

    h11.classList.add('text-center', 'mb-5', 'text-white-50', 'pt-3');
    row.classList.add('row', 'p-2', 'bg-dark');
    col41.classList.add('col-4', 'pt-4', 'pb-3', 'pr-3', 'pl-4', 'bg-secondary');
    card1.classList.add('card', 'mb-4');
    cardBody1.classList.add('card-body');
    h51.classList.add('card-text');
    col42.classList.add('col-4', 'pt-4', 'pb-3', 'pr-3', 'pl-3', 'bg-secondary');
    card2.classList.add('card', 'mb-4');
    cardBody2.classList.add('card-body');
    h52.classList.add('card-text');
    col43.classList.add('col-4', 'pt-4', 'pb-3', 'pr-4', 'pl-3', 'bg-secondary');
    card3.classList.add('card', 'mb-4');
    cardBody3.classList.add('card-body');
    h53.classList.add('card-text');
    col44.classList.add('col-4', 'pt-4', 'pb-3', 'pr-3', 'pl-4', 'bg-secondary');
    card4.classList.add('card', 'mb-4');
    cardBody4.classList.add('card-body');
    h54.classList.add('card-text');
    col45.classList.add('col-4', 'pt-4', 'pb-3', 'pr-3', 'pl-3', 'bg-secondary');
    card5.classList.add('card', 'mb-4');
    cardBody5.classList.add('card-body');
    h55.classList.add('card-text');
    col46.classList.add('col-4', 'pt-4', 'pb-3', 'pr-4', 'pl-3', 'bg-secondary');
    card6.classList.add('card', 'mb-4');
    cardBody6.classList.add('card-body');
    h56.classList.add('card-text');
    span1.classList.add('text-muted');
    span2.classList.add('text-muted');
    span3.classList.add('text-muted');
    span4.classList.add('text-muted');
    span5.classList.add('text-muted');
    span6.classList.add('text-muted');
    img1.classList.add('card-img-top', 'rounded', 'img-fluid', 'try3');
    img2.classList.add('card-img-top', 'rounded', 'img-fluid', 'try4');
    img3.classList.add('card-img-top', 'rounded', 'img-fluid', 'try5');
    img4.classList.add('card-img-top', 'rounded', 'img-fluid', 'try6');
    img5.classList.add('card-img-top', 'rounded', 'img-fluid', 'try7');
    img6.classList.add('card-img-top', 'rounded', 'img-fluid', 'try8');

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

    div.classList.add('mt-3', 'p-2');
    h12.classList.add('text-center', 'mb-5', 'text-white-50', 'pt-3');
    row.classList.add('row', 'p-2', 'bg-dark');
    col41.classList.add('col-4', 'pt-4', 'pb-3', 'pr-3', 'pl-4', 'bg-secondary');
    card1.classList.add('card', 'mb-4');
    cardBody1.classList.add('card-body');
    h51.classList.add('card-text');
    col42.classList.add('col-4', 'pt-4', 'pb-3', 'pr-3', 'pl-3', 'bg-secondary');
    card2.classList.add('card', 'mb-4');
    cardBody2.classList.add('card-body');
    h52.classList.add('card-text');
    col43.classList.add('col-4', 'pt-4', 'pb-3', 'pr-4', 'pl-3', 'bg-secondary');
    card3.classList.add('card', 'mb-4');
    cardBody3.classList.add('card-body');
    h53.classList.add('card-text');
    span1.classList.add('text-muted');
    span2.classList.add('text-muted');
    span3.classList.add('text-muted');
    img1.classList.add('card-img-top', 'rounded', 'img-fluid', 'try');
    img2.classList.add('card-img-top', 'rounded', 'img-fluid', 'try1');
    img3.classList.add('card-img-top', 'rounded', 'img-fluid', 'try2');

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

/* harmony default export */ __webpack_exports__["default"] = ({ menu });

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

    nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'backg', 'text-warning');
    logo.classList.add('container');
    linksContainer.classList.add('collapse', 'navbar-collapse', 'pl-5', 'pr-5');
    list.classList.add('navbar-nav');
    item1.classList.add('nav-item', 'ml-2', 'pl-4', 'hyperlink');
    item1.id = '0';
    item2.classList.add('nav-item', 'ml-2', 'pl-4', 'hyperlink');
    item2.id = '1';
    item3.classList.add('nav-item', 'ml-2', 'pl-4', 'hyperlink');
    item3.id = '2';
    item4.classList.add('nav-item', 'ml-2', 'pl-4', 'hyperlink');
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

    footer.classList.add('font-small', 'blue', 'bg-warning');
    div.classList.add('text-center', 'py-3', 'text-danger');

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

/* harmony default export */ __webpack_exports__["default"] = ({ navbar });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmFuaHRvbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iZXZlcmFnZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYnVuY2hhLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2J1bmRhdS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb2ZmZWUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZGluc3VtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hcmtldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYXJrZXQyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21lYXQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGhvLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jlc3RhdXJhbnQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVzdGF1cmFudF9iZy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWxsaW5nLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3RlYS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGLHNDQUFzQyxtQkFBTyxDQUFDLDhHQUFzRDtBQUNwRyxvQ0FBb0MsbUJBQU8sQ0FBQyxtRUFBNkI7QUFDekUsb0NBQW9DLG1CQUFPLENBQUMscURBQXNCO0FBQ2xFLG9DQUFvQyxtQkFBTyxDQUFDLHVEQUF1QjtBQUNuRSxvQ0FBb0MsbUJBQU8sQ0FBQyw2REFBMEI7QUFDdEUsb0NBQW9DLG1CQUFPLENBQUMsK0NBQW1CO0FBQy9ELG9DQUFvQyxtQkFBTyxDQUFDLHFEQUFzQjtBQUNsRSxvQ0FBb0MsbUJBQU8sQ0FBQywyREFBeUI7QUFDckUsb0NBQW9DLG1CQUFPLENBQUMsK0NBQW1CO0FBQy9ELG9DQUFvQyxtQkFBTyxDQUFDLHFEQUFzQjtBQUNsRSxvQ0FBb0MsbUJBQU8sQ0FBQyxxREFBc0I7QUFDbEUscUNBQXFDLG1CQUFPLENBQUMscURBQXNCO0FBQ25FLHFDQUFxQyxtQkFBTyxDQUFDLGlEQUFvQjtBQUNqRSxxQ0FBcUMsbUJBQU8sQ0FBQyx1REFBdUI7QUFDcEUscUNBQXFDLG1CQUFPLENBQUMsdURBQXVCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQix5QkFBeUIsaUJBQWlCLG9CQUFvQiw2Q0FBNkMsOEJBQThCLGlCQUFpQixnQkFBZ0IsZUFBZSx3QkFBd0IseUJBQXlCLHdCQUF3QixvQkFBb0IsS0FBSyx5QkFBeUIseUJBQXlCLG9CQUFvQiw0Q0FBNEMseUNBQXlDLG9CQUFvQixLQUFLLHFCQUFxQiwyQ0FBMkMsb0JBQW9CLEtBQUssd0JBQXdCLHlCQUF5QixtQkFBbUIsbUJBQW1CLDhCQUE4QixnREFBZ0QsaUJBQWlCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsb0JBQW9CLEtBQUssMEJBQTBCLGlCQUFpQix5QkFBeUIsd0VBQXdFLG9CQUFvQixrQ0FBa0MsbUNBQW1DLDZCQUE2Qix5QkFBeUIsS0FBSyxtQkFBbUIseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxLQUFLLHNCQUFzQix1QkFBdUIsc0JBQXNCLEtBQUssbUJBQW1CLHdFQUF3RSxvQkFBb0Isa0NBQWtDLG1DQUFtQyw2QkFBNkIsS0FBSyxvQkFBb0Isd0VBQXdFLG9CQUFvQixrQ0FBa0MsbUNBQW1DLDZCQUE2QixLQUFLLHNCQUFzQix3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssY0FBYyx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx3RUFBd0Usb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx5RUFBeUUsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx5RUFBeUUsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssZUFBZSx5RUFBeUUsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssaUZBQWlGLHlCQUF5Qix5QkFBeUIsbUJBQW1CLEtBQUssdUJBQXVCLHlFQUF5RSxvQkFBb0Isa0NBQWtDLG1DQUFtQyw2QkFBNkIsS0FBSyxlQUFlLG9CQUFvQixLQUFLLGdCQUFnQiw0QkFBNEIsS0FBSyxvQkFBb0Isc0JBQXNCLEtBQUssZ0JBQWdCLGtDQUFrQyxLQUFLLG9CQUFvQixrQ0FBa0MsK0JBQStCLEtBQUs7QUFDejlJO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0Y7QUFDTTtBQUNSO0FBQ0E7QUFDTjs7O0FBRzNCLFlBQVkseURBQU07QUFDbEIsZ0JBQWdCLHVEQUFLO0FBQ3JCLFlBQVksNkRBQVE7QUFDcEIsWUFBWSxxREFBSTtBQUNoQixnQkFBZ0IscURBQUk7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLGdFQUFDLFFBQVEsRTs7Ozs7Ozs7Ozs7O0FDMUN4QjtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxnRUFBQyxPQUFPLEU7Ozs7Ozs7Ozs7OztBQ25GdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsZ0VBQUMsV0FBVyxFOzs7Ozs7Ozs7Ozs7QUNuRzNCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLGdFQUFDLE9BQU8sRTs7Ozs7Ozs7Ozs7O0FDaFF2QjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLGdFQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7QUN0RXpCLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsMkhBQXlEOztBQUUzRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9yZXN0YXVyYW50X2JnLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbWFya2V0LmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvc2VsbGluZy5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3Jlc3RhdXJhbnQuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy90ZWEuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9jb2ZmZWUuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9iZXZlcmFnZXMuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9waG8uanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9idW5jaGEuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9idW5kYXUuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvZGluc3VtLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL21lYXQuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvYmFuaHRvbS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9tYXJrZXQyLmpwZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpdGxlLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzLCAwLjgpO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA3MSU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTE1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNhcmRzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG4gIGhlaWdodDogODAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZXJpb3VzbHktcmVkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEsIDAuNCk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiAzLjUlO1xcclxcbiAgbGVmdDogYXV0bztcXHJcXG4gIHJpZ2h0OiA4JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIGgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IDY1cHg7XFxyXFxufVxcclxcblxcclxcbi50b3AtbGVmdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXJpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tbGVmdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHJ5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnkxIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnkyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnkzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnk0IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnk1IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50cnk2IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHJ5NyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyeTgge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50b3AtbGVmdCBoMyxcXHJcXG4udG9wLXJpZ2h0IGgzLFxcclxcbi5ib3R0b20tcmlnaHQgaDMsXFxyXFxuLmJvdHRvbS1sZWZ0IGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1yaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKTtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tnIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmh5cGVybGluayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNqdW1ibyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcclxcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQyNDVmOGEzYjFjMjFjMjIzMmI0ZjAzNjA1OTE5MTBmLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZTQxNTM1NTcwYTY1ZTg3MTZjY2MyYzg4MjliY2IyYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2YyYTMwYmU0NmQ0M2FmNjljM2MwMTIwNjdkZDE1Y2IuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY2ZTIxMjg3MzcyN2MyYjYyMzI2NWY2OGE0ZWFlYmIxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0YmMyMjNhZjc2YjNkNzg2YzhlZmZmMTA5ZjI3ZTEyMC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTk1ZjliMWQwZTBhZTg0NzA4MDNhNmFiMjNhYTE5NWIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU1MmY1NjE2NDQyZGEzZDA4Nzk0NjA3ZDJlNWNjNTNjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1YjdmNTU5NTFiNGYyNzBmMzRjYjVjOGU0MWU4OGVkOS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzZmMTQyZGVhNTY1MzIxYjBmNzBmMjc3ZDJkZThlY2UuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNiOTJlY2ViM2FkZGJlYWFkZmYwNTI1NWZkYjc0ODhiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MTEwYTNjODc0YjZmYTY3OTg1MGY4MjA4ZWJmMzJkNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGNlZTRkOTEwODY1NzBjYTQ2YzdlNzM1NmZjOTIyYWEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk2NmJjNzlkYjQ4YWZiZTJiZTZkZjFkZWI3NTAzZGNkLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiM2FjNzgzMjcwYzcyZDRkZmI0YjVmYzVlY2FhOGVjNy5qcGdcIjsiLCJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tICcuL2pzL25hdmJhcic7XG5pbXBvcnQgeyBhYm91dCB9IGZyb20gJy4vanMvYWJvdXQnO1xuaW1wb3J0IHsgbG9jYXRpb24gfSBmcm9tICcuL2pzL2xvY2F0aW9uJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL2pzL21lbnUnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vanMvaG9tZSc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuXG5jb25zdCBuYXYgPSBuYXZiYXIoKTtcbmNvbnN0IGFib3V0VXMgPSBhYm91dCgpO1xuY29uc3QgbG9jID0gbG9jYXRpb24oKTtcbmNvbnN0IGVhdCA9IG1lbnUoKTtcbmNvbnN0IGxhbmRpbmcgPSBob21lKCk7XG5cbm5hdi5oZWFkZXIoKTtcbmxhbmRpbmcucmVuZGVyKCk7XG5lYXQucmVuZGVyKCk7XG5hYm91dFVzLmluZm8oKTtcbmxvYy5yZXN0YXVyYW50cygpO1xubmF2LmZvb3RlcigpO1xuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKGxpbmspIHtcbiAgc3dpdGNoIChsaW5rKSB7XG4gICAgY2FzZSAnMCc6XG4gICAgICBsYW5kaW5nLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZWF0Lm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgYWJvdXRVcy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGxvYy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzEnOlxuICAgICAgbGFuZGluZy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGVhdC5tYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGFib3V0VXMubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBsb2MubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcyJzpcbiAgICAgIGxhbmRpbmcubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBlYXQubWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBhYm91dFVzLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgbG9jLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMyc6XG4gICAgICBsYW5kaW5nLm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgZWF0Lm1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgYWJvdXRVcy5tYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGxvYy5tYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cbn1cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaHlwZXJsaW5rJykuZm9yRWFjaChsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5hdmlnYXRpb24obGluay5pZCk7XG59KSk7IiwiY29uc3QgYWJvdXQgPSBmdW5jdGlvbiBhYm91dCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgY29uc3QganVtYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAganVtYm8uY2xhc3NMaXN0LmFkZCgnanVtYm90cm9uJywgJ2p1bWJvdHJvbi1mbHVpZCcsICdiZy1kYXJrJyk7XG4gICAganVtYm8uaWQgPSAnanVtYm8nO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnYmctc2Vjb25kYXJ5JywgJ3AtNScpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LTQnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdsZWFkJyk7XG4gICAgcDIuY2xhc3NMaXN0LmFkZCgnbGVhZCcpO1xuICAgIHAzLmNsYXNzTGlzdC5hZGQoJ2xlYWQnKTtcblxuICAgIGhlYWRlci5pbm5lckhUTUwgPSAnQWJvdXQgVXMnO1xuICAgIHAxLmlubmVySFRNTCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgdml0YWUgbmVxdWUgcnV0cnVtLCBsb2JvcnRpcyBxdWFtIGVnZXQsIG1heGltdXMgdXJuYS4gTWFlY2VuYXMgY29uZ3VlIGZlbGlzIHV0IHRpbmNpZHVudCBmaW5pYnVzLiBEdWlzIHRlbXB1cyBwcmV0aXVtIG1hdXJpcyBhdCB0aW5jaWR1bnQuIE51bGxhbSBzaXQgYW1ldCBxdWFtIHZpdGFlIG9yY2kgZmV1Z2lhdCBjb25zZXF1YXQuIFNlZCBtYXR0aXMgY29uc2VxdWF0IGVyb3MsIHNlZCB2ZXN0aWJ1bHVtIGlwc3VtIGRpZ25pc3NpbSBmYWNpbGlzaXMuIEN1cmFiaXR1ciBleCBmZWxpcywgZGljdHVtIGEgY29tbW9kbyBzZWQsIGVmZmljaXR1ciB2aXRhZSB0ZWxsdXMuIEFlbmVhbiBwdWx2aW5hciB1cm5hIGEgdHVycGlzIHZ1bHB1dGF0ZSBkYXBpYnVzLiBQcm9pbiBpbXBlcmRpZXQgYXQgbGFjdXMgdmVsIGN1cnN1cy4gRXRpYW0gY29udmFsbGlzIGFyY3Ugc2l0IGFtZXQgZGlnbmlzc2ltIGJpYmVuZHVtLiBBbGlxdWFtIGxpZ3VsYSBhdWd1ZSwgbW9sbGlzIHZpdGFlIG9yY2kgbmVjLCB0cmlzdGlxdWUgcGhhcmV0cmEganVzdG8uIE1vcmJpIGFsaXF1ZXQgcHVydXMgdmVsaXQsIHF1aXMgcG9ydGEgZXggdGVtcHVzIHZlbC4gUHJhZXNlbnQgZXVpc21vZCB2YXJpdXMgcG9zdWVyZS4gVml2YW11cyBzYXBpZW4gZGlhbSwgb3JuYXJlIGV0IG9kaW8gbmVjLCBmZXJtZW50dW0gY29tbW9kbyByaXN1cy4nO1xuICAgIHAyLmlubmVySFRNTCA9ICdBbGlxdWFtIGF0IHBvc3VlcmUgbWksIGEgZmVybWVudHVtIHVybmEuIEFlbmVhbiBhYyBqdXN0byBlZ2V0IHRvcnRvciB2ZW5lbmF0aXMgbHVjdHVzLiBOYW0gbHVjdHVzIGVsZW1lbnR1bSB0aW5jaWR1bnQuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBQaGFzZWxsdXMgZXUgdGVtcG9yIHZlbGl0LiBOdWxsYSBhYyB2b2x1dHBhdCBvcmNpLCBub24gY29uZGltZW50dW0gc2FwaWVuLiBOdW5jIGluIGVyb3MgYmliZW5kdW0sIHBvc3VlcmUgdHVycGlzIHZlbCwgc29sbGljaXR1ZGluIGxhY3VzLic7XG4gICAgcDMuaW5uZXJIVE1MID0gJ1BoYXNlbGx1cyBuZWMgb3JjaSBsaWd1bGEuIE1vcmJpIGNvbW1vZG8gZGlhbSBpZCBtaSBjb252YWxsaXMgZWxlaWZlbmQuIEFlbmVhbiBlZ2V0IHR1cnBpcyBldSBsb3JlbSBmZXVnaWF0IGZhY2lsaXNpcy4gVml2YW11cyBzZWQgaXBzdW0gZWdldCByaXN1cyB0cmlzdGlxdWUgcGxhY2VyYXQgdmVsIG5vbiBlcm9zLiBFdGlhbSBlZ2V0IHNlbSB1bGxhbWNvcnBlciwgcGxhY2VyYXQgYXJjdSBldCwgc2FnaXR0aXMgbGVvLiBEdWlzIGNvbnNlY3RldHVyIHB1cnVzIHF1aXMgaXBzdW0gbW9sZXN0aWUgZmluaWJ1cy4gUGVsbGVudGVzcXVlIGVyYXQgb2RpbywgcG9zdWVyZSBhdCBlbGVpZmVuZCBldCwgZGFwaWJ1cyBzaXQgYW1ldCBvcmNpLiBNYWVjZW5hcyBtb2xsaXMgZHVpIGV1IHZlaGljdWxhIGx1Y3R1cy4gTWFlY2VuYXMgcG9ydGEganVzdG8gdmVsIHB1cnVzIGVsZWlmZW5kLCBhdWN0b3IgbG9ib3J0aXMgbGliZXJvIGVsZWlmZW5kLiBFdGlhbSBmYXVjaWJ1cyBwaGFyZXRyYSB1bHRyaWNlcy4gQ3JhcyBhYyBsZW8gZXQgYXVndWUgY29udmFsbGlzIHRyaXN0aXF1ZS4nO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocDEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocDIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocDMpO1xuXG4gICAganVtYm8uYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmQoanVtYm8pO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbmZvLFxuICAgIG1haW4sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGFib3V0IH07IiwiY29uc3QgaG9tZSA9IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIGZ1bmN0aW9uIHRvcEhlYWRlcigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpO1xuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnY2VudGVyZWQnKTtcblxuICAgIGgxLmlubmVySFRNTCA9ICdXZWxjb21lIHRvIFZpZXQgTmhhIEhhbmcnO1xuXG4gICAgZGl2Mi5hcHBlbmQoaDEpO1xuICAgIGRpdi5hcHBlbmQoZGl2Mik7XG4gICAgbWFpbi5hcHBlbmQoZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhdGFsb2coKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHRvcFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBzZXJpb3VzbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgYm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtaGVhZGVyJyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgIHRvcExlZnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkcycsICd0b3AtbGVmdCcpO1xuICAgIHRvcFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21haW4tY2FyZHMnLCAndG9wLXJpZ2h0Jyk7XG4gICAgYm90dG9tTGVmdC5jbGFzc0xpc3QuYWRkKCdtYWluLWNhcmRzJywgJ2JvdHRvbS1sZWZ0Jyk7XG4gICAgYm90dG9tUmlnaHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jYXJkcycsICdib3R0b20tcmlnaHQnKTtcbiAgICBzZXJpb3VzbHkuY2xhc3NMaXN0LmFkZCgnc2VyaW91c2x5LXJlZCcpO1xuXG4gICAgaDEuaW5uZXJIVE1MID0gJ0Jlc3QgVmlldG5hbWVzZSBGb29kJztcbiAgICBoNC5pbm5lckhUTUwgPSAnT2ZmZXJzISc7XG4gICAgaDMxLmlubmVySFRNTCA9ICdCZXN0IFF1YWxpdHknO1xuICAgIGgzMi5pbm5lckhUTUwgPSAnV2UgYWx3YXlzIFNtaWxlJztcbiAgICBoMzMuaW5uZXJIVE1MID0gJ1RyeSBvdXIgTG9jYWwgRm9vZCc7XG4gICAgaDM0LmlubmVySFRNTCA9ICdGb29kIGZyb20gTG9jYWwgTWFya2V0cyc7XG5cbiAgICB0aXRsZS5hcHBlbmQoaDEpO1xuICAgIHNlcmlvdXNseS5hcHBlbmQoaDQpO1xuXG4gICAgdG9wTGVmdC5hcHBlbmQoaDMxKTtcbiAgICB0b3BSaWdodC5hcHBlbmQoaDMyKTtcbiAgICB0b3BSaWdodC5hcHBlbmQoc2VyaW91c2x5KTtcbiAgICBib3R0b21MZWZ0LmFwcGVuZChoMzMpO1xuICAgIGJvdHRvbVJpZ2h0LmFwcGVuZChoMzQpO1xuXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BMZWZ0KTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BSaWdodCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYm90dG9tTGVmdCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYm90dG9tUmlnaHQpO1xuXG4gICAgbWFpbi5hcHBlbmQodGl0bGUpO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHRvcEhlYWRlcigpO1xuICAgIGNhdGFsb2coKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wSGVhZGVyLFxuICAgIGNhdGFsb2csXG4gICAgcmVuZGVyLFxuICAgIG1haW4sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGhvbWUgfTsiLCJjb25zdCBsb2NhdGlvbiA9IGZ1bmN0aW9uIGxvY2F0aW9uKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgZnVuY3Rpb24gcmVzdGF1cmFudHMoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgY29uc3QgdHIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgdHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgbG9jMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGxvYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCB0cjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IG5hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBsb2MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdHI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBuYW1lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgbG9jNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdoaXRlJywgJ3AtNScsICdiZy1kYXJrJywgJ3BiLTUnKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd3LTc1JywgJ20tYXV0bycsICd0YWJsZScsICd0YWJsZS1kYXJrJywgJ3RhYmxlLXN0cmlwZWQnLCAndGFibGUtYm9yZGVyZWQnLCAndGFibGUtaG92ZXInKTtcbiAgICB0aGVhZC5jbGFzc0xpc3QuYWRkKCd0aGVhZC1saWdodCcpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywgJ21iLTQnKTtcblxuICAgIGgxLmlubmVySFRNTCA9ICdPdXIgUmVzdGF1cmFudHMnO1xuICAgIGhlYWRlcjEuaW5uZXJIVE1MID0gJ05hbWUnO1xuICAgIGhlYWRlcjIuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcbiAgICBoZWFkZXIzLmlubmVySFRNTCA9ICdJbmZvcm1hdGlvbic7XG4gICAgbmFtZTEuaW5uZXJIVE1MID0gJ1ZpZXQgTmhhIEhhbmcnO1xuICAgIG5hbWUyLmlubmVySFRNTCA9ICdWaWV0IE5oYSBIYW5nIC0gTlknO1xuICAgIG5hbWUzLmlubmVySFRNTCA9ICdWaWV0IE5oYSBIYW5nIC0gQkNOJztcbiAgICBuYW1lNC5pbm5lckhUTUwgPSAnVmlldCBOaGEgSGFuZyAtIFRvayc7XG4gICAgbG9jMS5pbm5lckhUTUwgPSAnSGFub2knO1xuICAgIGxvYzIuaW5uZXJIVE1MID0gJ0JhcmNlbG9uYSc7XG4gICAgbG9jMy5pbm5lckhUTUwgPSAnQmFuZ2tvayc7XG4gICAgbG9jNC5pbm5lckhUTUwgPSAnVG9raW8nO1xuICAgIGluZm8xLmlubmVySFRNTCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuICAgIGluZm8yLmlubmVySFRNTCA9ICdVcm5hIGV0IHBoYXJldHJhIHBoYXJldHJhIG1hc3NhIG1hc3NhLiBBbGlxdWFtIHNlbSBldCB0b3J0b3IgY29uc2VxdWF0IGlkIHBvcnRhLiBBIGRpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldC4nO1xuICAgIGluZm8zLmlubmVySFRNTCA9ICdFZ2VzdGFzIGR1aSBpZCBvcm5hcmUgYXJjdSBvZGlvIHV0IHNlbS4gVmVzdGlidWx1bSBtYXR0aXMgdWxsYW1jb3JwZXIgdmVsaXQgc2VkIHVsbGFtY29ycGVyIG1vcmJpIHRpbmNpZHVudCBvcm5hcmUuJztcbiAgICBpbmZvNC5pbm5lckhUTUwgPSAnQ29tbW9kbyBudWxsYSBmYWNpbGlzaSBudWxsYW0gdmVoaWN1bGEgaXBzdW0gYSBhcmN1IGN1cnN1cyB2aXRhZS4gQ29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHV0IGFsaXF1YW0gcHVydXMgc2l0IGFtZXQgbHVjdHVzIHZlbmVuYXRpcy4nO1xuXG4gICAgdHI1LmFwcGVuZChuYW1lNCk7XG4gICAgdHI1LmFwcGVuZChsb2M0KTtcbiAgICB0cjUuYXBwZW5kKGluZm80KTtcblxuICAgIHRyNC5hcHBlbmQobmFtZTMpO1xuICAgIHRyNC5hcHBlbmQobG9jMyk7XG4gICAgdHI0LmFwcGVuZChpbmZvMyk7XG5cbiAgICB0cjMuYXBwZW5kKG5hbWUyKTtcbiAgICB0cjMuYXBwZW5kKGxvYzIpO1xuICAgIHRyMy5hcHBlbmQoaW5mbzIpO1xuXG4gICAgdHIyLmFwcGVuZChuYW1lMSk7XG4gICAgdHIyLmFwcGVuZChsb2MxKTtcbiAgICB0cjIuYXBwZW5kKGluZm8xKTtcblxuICAgIHRib2R5LmFwcGVuZCh0cjIpO1xuICAgIHRib2R5LmFwcGVuZCh0cjMpO1xuICAgIHRib2R5LmFwcGVuZCh0cjQpO1xuICAgIHRib2R5LmFwcGVuZCh0cjUpO1xuXG4gICAgdHIxLmFwcGVuZChoZWFkZXIxKTtcbiAgICB0cjEuYXBwZW5kKGhlYWRlcjIpO1xuICAgIHRyMS5hcHBlbmQoaGVhZGVyMyk7XG5cbiAgICB0aGVhZC5hcHBlbmQodHIxKTtcblxuICAgIHRhYmxlLmFwcGVuZCh0aGVhZCk7XG4gICAgdGFibGUuYXBwZW5kKHRib2R5KTtcblxuICAgIGRpdi5hcHBlbmQoaDEpO1xuICAgIGRpdi5hcHBlbmQodGFibGUpO1xuXG4gICAgbWFpbi5hcHBlbmQoZGl2KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIHJlc3RhdXJhbnRzLFxuICAgIG1haW4sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGxvY2F0aW9uIH07IiwiY29uc3QgbWVudSA9IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdteS01JywgJ2JnLWRhcmsnLCAncHktNScpO1xuICBjb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ2JnLWRhcmsnKTtcblxuICBmdW5jdGlvbiBmb29kKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29sNDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWc2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBoMTEuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAnbWItNScsICd0ZXh0LXdoaXRlLTUwJywgJ3B0LTMnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JywgJ3AtMicsICdiZy1kYXJrJyk7XG4gICAgY29sNDEuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCAncHQtNCcsICdwYi0zJywgJ3ByLTMnLCAncGwtNCcsICdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkMS5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ21iLTQnKTtcbiAgICBjYXJkQm9keTEuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQyLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywgJ3B0LTQnLCAncGItMycsICdwci0zJywgJ3BsLTMnLCAnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdtYi00Jyk7XG4gICAgY2FyZEJvZHkyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1Mi5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0My5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsICdwdC00JywgJ3BiLTMnLCAncHItNCcsICdwbC0zJywgJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnbWItNCcpO1xuICAgIGNhcmRCb2R5My5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTMuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDQuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCAncHQtNCcsICdwYi0zJywgJ3ByLTMnLCAncGwtNCcsICdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkNC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ21iLTQnKTtcbiAgICBjYXJkQm9keTQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ1LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywgJ3B0LTQnLCAncGItMycsICdwci0zJywgJ3BsLTMnLCAnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDUuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdtYi00Jyk7XG4gICAgY2FyZEJvZHk1LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1NS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0Ni5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsICdwdC00JywgJ3BiLTMnLCAncHItNCcsICdwbC0zJywgJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQ2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnbWItNCcpO1xuICAgIGNhcmRCb2R5Ni5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTYuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgc3BhbjEuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4yLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuMy5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjQuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW41LmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuNi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCAncm91bmRlZCcsICdpbWctZmx1aWQnLCAndHJ5MycpO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWctdG9wJywgJ3JvdW5kZWQnLCAnaW1nLWZsdWlkJywgJ3RyeTQnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsICdyb3VuZGVkJywgJ2ltZy1mbHVpZCcsICd0cnk1Jyk7XG4gICAgaW1nNC5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCAncm91bmRlZCcsICdpbWctZmx1aWQnLCAndHJ5NicpO1xuICAgIGltZzUuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWctdG9wJywgJ3JvdW5kZWQnLCAnaW1nLWZsdWlkJywgJ3RyeTcnKTtcbiAgICBpbWc2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsICdyb3VuZGVkJywgJ2ltZy1mbHVpZCcsICd0cnk4Jyk7XG5cbiAgICBoMTEuaW5uZXJIVE1MID0gJ091ciBEaXNoZXMnO1xuXG4gICAgc3BhbjEuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW4yLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMy5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjQuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW41LmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuNi5pbm5lckhUTUwgPSAnMSw1JCc7XG5cbiAgICBoNTEuaW5uZXJIVE1MID0gJ1BobyBCbyc7XG4gICAgaDUyLmlubmVySFRNTCA9ICdCdW4gQ2hhJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ0J1biBEYXUnO1xuICAgIGg1NC5pbm5lckhUTUwgPSAnRGluc3VtJztcbiAgICBoNTUuaW5uZXJIVE1MID0gJ01lYXQgU3RpY2tzJztcbiAgICBoNTYuaW5uZXJIVE1MID0gJ1NwcmluZyBSb2xscyc7XG5cbiAgICBjYXJkQm9keTEuYXBwZW5kKGg1MSk7XG4gICAgY2FyZEJvZHkxLmFwcGVuZChzcGFuMSk7XG4gICAgY2FyZDEuYXBwZW5kKGltZzEpO1xuICAgIGNhcmQxLmFwcGVuZChjYXJkQm9keTEpO1xuICAgIGNvbDQxLmFwcGVuZChjYXJkMSk7XG5cbiAgICBjYXJkQm9keTIuYXBwZW5kKGg1Mik7XG4gICAgY2FyZEJvZHkyLmFwcGVuZChzcGFuMik7XG4gICAgY2FyZDIuYXBwZW5kKGltZzIpO1xuICAgIGNhcmQyLmFwcGVuZChjYXJkQm9keTIpO1xuICAgIGNvbDQyLmFwcGVuZChjYXJkMik7XG5cbiAgICBjYXJkQm9keTMuYXBwZW5kKGg1Myk7XG4gICAgY2FyZEJvZHkzLmFwcGVuZChzcGFuMyk7XG4gICAgY2FyZDMuYXBwZW5kKGltZzMpO1xuICAgIGNhcmQzLmFwcGVuZChjYXJkQm9keTMpO1xuICAgIGNvbDQzLmFwcGVuZChjYXJkMyk7XG5cbiAgICBjYXJkQm9keTQuYXBwZW5kKGg1NCk7XG4gICAgY2FyZEJvZHk0LmFwcGVuZChzcGFuNCk7XG4gICAgY2FyZDQuYXBwZW5kKGltZzQpO1xuICAgIGNhcmQ0LmFwcGVuZChjYXJkQm9keTQpO1xuICAgIGNvbDQ0LmFwcGVuZChjYXJkNCk7XG5cbiAgICBjYXJkQm9keTUuYXBwZW5kKGg1NSk7XG4gICAgY2FyZEJvZHk1LmFwcGVuZChzcGFuNSk7XG4gICAgY2FyZDUuYXBwZW5kKGltZzUpO1xuICAgIGNhcmQ1LmFwcGVuZChjYXJkQm9keTUpO1xuICAgIGNvbDQ1LmFwcGVuZChjYXJkNSk7XG5cbiAgICBjYXJkQm9keTYuYXBwZW5kKGg1Nik7XG4gICAgY2FyZEJvZHk2LmFwcGVuZChzcGFuNik7XG4gICAgY2FyZDYuYXBwZW5kKGltZzYpO1xuICAgIGNhcmQ2LmFwcGVuZChjYXJkQm9keTYpO1xuICAgIGNvbDQ2LmFwcGVuZChjYXJkNik7XG5cbiAgICByb3cuYXBwZW5kKGNvbDQxKTtcbiAgICByb3cuYXBwZW5kKGNvbDQyKTtcbiAgICByb3cuYXBwZW5kKGNvbDQzKTtcbiAgICByb3cuYXBwZW5kKGNvbDQ0KTtcbiAgICByb3cuYXBwZW5kKGNvbDQ1KTtcbiAgICByb3cuYXBwZW5kKGNvbDQ2KTtcblxuICAgIGRpdi5hcHBlbmQoaDExKTtcbiAgICBkaXYuYXBwZW5kKHJvdyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XG5cbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICBmdW5jdGlvbiBkcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2w0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtdC0zJywgJ3AtMicpO1xuICAgIGgxMi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsICdtYi01JywgJ3RleHQtd2hpdGUtNTAnLCAncHQtMycpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnLCAncC0yJywgJ2JnLWRhcmsnKTtcbiAgICBjb2w0MS5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsICdwdC00JywgJ3BiLTMnLCAncHItMycsICdwbC00JywgJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnbWItNCcpO1xuICAgIGNhcmRCb2R5MS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoNTEuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XG4gICAgY29sNDIuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCAncHQtNCcsICdwYi0zJywgJ3ByLTMnLCAncGwtMycsICdiZy1zZWNvbmRhcnknKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ21iLTQnKTtcbiAgICBjYXJkQm9keTIuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQzLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywgJ3B0LTQnLCAncGItMycsICdwci00JywgJ3BsLTMnLCAnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdtYi00Jyk7XG4gICAgY2FyZEJvZHkzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1My5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBzcGFuMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4zLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsICdyb3VuZGVkJywgJ2ltZy1mbHVpZCcsICd0cnknKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nLXRvcCcsICdyb3VuZGVkJywgJ2ltZy1mbHVpZCcsICd0cnkxJyk7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCAncm91bmRlZCcsICdpbWctZmx1aWQnLCAndHJ5MicpO1xuXG4gICAgaDEyLmlubmVySFRNTCA9ICdPdXIgQmV2ZXJhZ2VzJztcblxuICAgIHNwYW4xLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMi5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjMuaW5uZXJIVE1MID0gJzEsNSQnO1xuXG4gICAgaDUxLmlubmVySFRNTCA9ICdUZWEnO1xuICAgIGg1Mi5pbm5lckhUTUwgPSAnQ29mZmVlJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ0p1aWNlJztcblxuICAgIGNhcmRCb2R5MS5hcHBlbmQoaDUxKTtcbiAgICBjYXJkQm9keTEuYXBwZW5kKHNwYW4xKTtcbiAgICBjYXJkMS5hcHBlbmQoaW1nMSk7XG4gICAgY2FyZDEuYXBwZW5kKGNhcmRCb2R5MSk7XG4gICAgY29sNDEuYXBwZW5kKGNhcmQxKTtcblxuICAgIGNhcmRCb2R5Mi5hcHBlbmQoaDUyKTtcbiAgICBjYXJkQm9keTIuYXBwZW5kKHNwYW4yKTtcbiAgICBjYXJkMi5hcHBlbmQoaW1nMik7XG4gICAgY2FyZDIuYXBwZW5kKGNhcmRCb2R5Mik7XG4gICAgY29sNDIuYXBwZW5kKGNhcmQyKTtcblxuICAgIGNhcmRCb2R5My5hcHBlbmQoaDUzKTtcbiAgICBjYXJkQm9keTMuYXBwZW5kKHNwYW4zKTtcbiAgICBjYXJkMy5hcHBlbmQoaW1nMyk7XG4gICAgY2FyZDMuYXBwZW5kKGNhcmRCb2R5Myk7XG4gICAgY29sNDMuYXBwZW5kKGNhcmQzKTtcblxuICAgIHJvdy5hcHBlbmQoY29sNDEpO1xuICAgIHJvdy5hcHBlbmQoY29sNDIpO1xuICAgIHJvdy5hcHBlbmQoY29sNDMpO1xuXG4gICAgZGl2LmFwcGVuZChoMTIpO1xuICAgIGRpdi5hcHBlbmQocm93KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZm9vZCgpO1xuICAgIGRyaW5rcygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb29kLFxuICAgIGRyaW5rcyxcbiAgICByZW5kZXIsXG4gICAgbWFpbixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgbWVudSB9OyIsImNvbnN0IG5hdmJhciA9IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCAnbmF2YmFyLWV4cGFuZC1sZycsICduYXZiYXItbGlnaHQnLCAnYmFja2cnLCAndGV4dC13YXJuaW5nJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsICduYXZiYXItY29sbGFwc2UnLCAncGwtNScsICdwci01Jyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2Jyk7XG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCAnbWwtMicsICdwbC00JywgJ2h5cGVybGluaycpO1xuICAgIGl0ZW0xLmlkID0gJzAnO1xuICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJywgJ21sLTInLCAncGwtNCcsICdoeXBlcmxpbmsnKTtcbiAgICBpdGVtMi5pZCA9ICcxJztcbiAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScsICdtbC0yJywgJ3BsLTQnLCAnaHlwZXJsaW5rJyk7XG4gICAgaXRlbTMuaWQgPSAnMic7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCAnbWwtMicsICdwbC00JywgJ2h5cGVybGluaycpO1xuICAgIGl0ZW00LmlkID0gJzMnO1xuXG4gICAgbG9nby5pbm5lckhUTUwgPSAnPGEgY2xhc3M9XCJuYXZiYXItYnJhbmQgdGV4dC13YXJuaW5nIGZvbnQtd2VpZ2h0LWJvbGRlclwiIGhyZWY9XCIjXCI+VmlldCBOaGEgSGFuZzwvYT4nO1xuICAgIGl0ZW0xLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBpdGVtMi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgaXRlbTMuaW5uZXJIVE1MID0gJ0Fib3V0JztcbiAgICBpdGVtNC5pbm5lckhUTUwgPSAnTG9jYXRpb24nO1xuXG4gICAgbGlzdC5hcHBlbmQoaXRlbTEpO1xuICAgIGxpc3QuYXBwZW5kKGl0ZW0yKTtcbiAgICBsaXN0LmFwcGVuZChpdGVtMyk7XG4gICAgbGlzdC5hcHBlbmQoaXRlbTQpO1xuXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kKGxpc3QpO1xuXG4gICAgbmF2LmFwcGVuZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kKGxpbmtzQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdik7XG4gIH1cblxuICBmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9udC1zbWFsbCcsICdibHVlJywgJ2JnLXdhcm5pbmcnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCAncHktMycsICd0ZXh0LWRhbmdlcicpO1xuXG4gICAgZGl2LmlubmVySFRNTCA9ICfCqSAyMDIwIENvcHlyaWdodDogPGEgaHJlZj1cIiNcIj4gSmF2aUNvcnA8L2E+JztcblxuICAgIGZvb3Rlci5hcHBlbmQoZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZChmb290ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGhlYWRlcigpO1xuICAgIGZvb3RlcigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXIsXG4gICAgZm9vdGVyLFxuICAgIHJlbmRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgbmF2YmFyIH07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==