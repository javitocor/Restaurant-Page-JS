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





let nav = Object(_js_navbar_js__WEBPACK_IMPORTED_MODULE_0__["navbar"])();
let aboutUs = Object(_js_about_js__WEBPACK_IMPORTED_MODULE_1__["about"])();
let loc = Object(_js_location_js__WEBPACK_IMPORTED_MODULE_2__["location"])();
let eat = Object(_js_menu_js__WEBPACK_IMPORTED_MODULE_3__["menu"])();

nav.header();
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
        content.append(jumbo);

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

        content.append(h1);
        content.append(table);

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

    container.append(div);
    content.append(container);
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

    container.append(div);
    content.append(container);
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

    nav.classList.add('navbar','navbar-expand-lg','navbar-light','bg-light');
    logo.classList.add('container');
    linksContainer.classList.add('collapse','navbar-collapse','pl-5','pr-5');
    list.classList.add('navbar-nav');
    item1.classList.add('nav-item','ml-2');
    item2.classList.add('nav-item','ml-2');
    item3.classList.add('nav-item','ml-2');
    item4.classList.add('nav-item','ml-2');

    logo.innerHTML = '<a class="navbar-brand" href="#">Viet Nha Hang</a>';
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

    footer.classList.add('font-small','blue');
    div.classList.add('text-center','py-3');

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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDRjtBQUNNO0FBQ1I7O0FBRXBDLFVBQVUsNERBQU07QUFDaEIsY0FBYywwREFBSztBQUNuQixVQUFVLGdFQUFRO0FBQ2xCLFVBQVUsd0RBQUk7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRCxrREFBa0Q7QUFDbEQsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gJy4vanMvbmF2YmFyLmpzJztcbmltcG9ydCB7IGFib3V0IH0gZnJvbSAnLi9qcy9hYm91dC5qcyc7XG5pbXBvcnQgeyBsb2NhdGlvbiB9IGZyb20gJy4vanMvbG9jYXRpb24uanMnO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vanMvbWVudS5qcyc7XG5cbmxldCBuYXYgPSBuYXZiYXIoKTtcbmxldCBhYm91dFVzID0gYWJvdXQoKTtcbmxldCBsb2MgPSBsb2NhdGlvbigpO1xubGV0IGVhdCA9IG1lbnUoKTtcblxubmF2LmhlYWRlcigpO1xuZWF0LnJlbmRlcigpO1xuYWJvdXRVcy5pbmZvKCk7XG5sb2MucmVzdGF1cmFudHMoKTtcbm5hdi5mb290ZXIoKTsiLCJjb25zdCBhYm91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IGp1bWJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAganVtYm8uY2xhc3NMaXN0LmFkZCgnanVtYm90cm9uJywnanVtYm90cm9uLWZsdWlkJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LTRcIik7XHJcbiAgICAgICAgcDEuY2xhc3NMaXN0LmFkZChcImxlYWRcIik7XHJcbiAgICAgICAgcDIuY2xhc3NMaXN0LmFkZChcImxlYWRcIik7XHJcbiAgICAgICAgcDMuY2xhc3NMaXN0LmFkZChcImxlYWRcIik7XHJcblxyXG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIkFib3V0IFVzXCI7XHJcbiAgICAgICAgcDEuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgdml0YWUgbmVxdWUgcnV0cnVtLCBsb2JvcnRpcyBxdWFtIGVnZXQsIG1heGltdXMgdXJuYS4gTWFlY2VuYXMgY29uZ3VlIGZlbGlzIHV0IHRpbmNpZHVudCBmaW5pYnVzLiBEdWlzIHRlbXB1cyBwcmV0aXVtIG1hdXJpcyBhdCB0aW5jaWR1bnQuIE51bGxhbSBzaXQgYW1ldCBxdWFtIHZpdGFlIG9yY2kgZmV1Z2lhdCBjb25zZXF1YXQuIFNlZCBtYXR0aXMgY29uc2VxdWF0IGVyb3MsIHNlZCB2ZXN0aWJ1bHVtIGlwc3VtIGRpZ25pc3NpbSBmYWNpbGlzaXMuIEN1cmFiaXR1ciBleCBmZWxpcywgZGljdHVtIGEgY29tbW9kbyBzZWQsIGVmZmljaXR1ciB2aXRhZSB0ZWxsdXMuIEFlbmVhbiBwdWx2aW5hciB1cm5hIGEgdHVycGlzIHZ1bHB1dGF0ZSBkYXBpYnVzLiBQcm9pbiBpbXBlcmRpZXQgYXQgbGFjdXMgdmVsIGN1cnN1cy4gRXRpYW0gY29udmFsbGlzIGFyY3Ugc2l0IGFtZXQgZGlnbmlzc2ltIGJpYmVuZHVtLiBBbGlxdWFtIGxpZ3VsYSBhdWd1ZSwgbW9sbGlzIHZpdGFlIG9yY2kgbmVjLCB0cmlzdGlxdWUgcGhhcmV0cmEganVzdG8uIE1vcmJpIGFsaXF1ZXQgcHVydXMgdmVsaXQsIHF1aXMgcG9ydGEgZXggdGVtcHVzIHZlbC4gUHJhZXNlbnQgZXVpc21vZCB2YXJpdXMgcG9zdWVyZS4gVml2YW11cyBzYXBpZW4gZGlhbSwgb3JuYXJlIGV0IG9kaW8gbmVjLCBmZXJtZW50dW0gY29tbW9kbyByaXN1cy5cIjtcclxuICAgICAgICBwMi5pbm5lckhUTUwgPSBcIkFsaXF1YW0gYXQgcG9zdWVyZSBtaSwgYSBmZXJtZW50dW0gdXJuYS4gQWVuZWFuIGFjIGp1c3RvIGVnZXQgdG9ydG9yIHZlbmVuYXRpcyBsdWN0dXMuIE5hbSBsdWN0dXMgZWxlbWVudHVtIHRpbmNpZHVudC4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFBoYXNlbGx1cyBldSB0ZW1wb3IgdmVsaXQuIE51bGxhIGFjIHZvbHV0cGF0IG9yY2ksIG5vbiBjb25kaW1lbnR1bSBzYXBpZW4uIE51bmMgaW4gZXJvcyBiaWJlbmR1bSwgcG9zdWVyZSB0dXJwaXMgdmVsLCBzb2xsaWNpdHVkaW4gbGFjdXMuXCI7XHJcbiAgICAgICAgcDMuaW5uZXJIVE1MID0gXCJQaGFzZWxsdXMgbmVjIG9yY2kgbGlndWxhLiBNb3JiaSBjb21tb2RvIGRpYW0gaWQgbWkgY29udmFsbGlzIGVsZWlmZW5kLiBBZW5lYW4gZWdldCB0dXJwaXMgZXUgbG9yZW0gZmV1Z2lhdCBmYWNpbGlzaXMuIFZpdmFtdXMgc2VkIGlwc3VtIGVnZXQgcmlzdXMgdHJpc3RpcXVlIHBsYWNlcmF0IHZlbCBub24gZXJvcy4gRXRpYW0gZWdldCBzZW0gdWxsYW1jb3JwZXIsIHBsYWNlcmF0IGFyY3UgZXQsIHNhZ2l0dGlzIGxlby4gRHVpcyBjb25zZWN0ZXR1ciBwdXJ1cyBxdWlzIGlwc3VtIG1vbGVzdGllIGZpbmlidXMuIFBlbGxlbnRlc3F1ZSBlcmF0IG9kaW8sIHBvc3VlcmUgYXQgZWxlaWZlbmQgZXQsIGRhcGlidXMgc2l0IGFtZXQgb3JjaS4gTWFlY2VuYXMgbW9sbGlzIGR1aSBldSB2ZWhpY3VsYSBsdWN0dXMuIE1hZWNlbmFzIHBvcnRhIGp1c3RvIHZlbCBwdXJ1cyBlbGVpZmVuZCwgYXVjdG9yIGxvYm9ydGlzIGxpYmVybyBlbGVpZmVuZC4gRXRpYW0gZmF1Y2lidXMgcGhhcmV0cmEgdWx0cmljZXMuIENyYXMgYWMgbGVvIGV0IGF1Z3VlIGNvbnZhbGxpcyB0cmlzdGlxdWUuXCI7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHAxKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHAyKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHAzKTtcclxuXHJcbiAgICAgICAganVtYm8uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoanVtYm8pO1xyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICBpbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvLFxyXG4gICAgICAgIHJlbmRlcixcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgeyBhYm91dCB9OyIsImNvbnN0IGxvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHJlc3RhdXJhbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgICAgIGNvbnN0IHRyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgICAgIGNvbnN0IHRyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGxvYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCB0cjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBsb2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgdHI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBjb25zdCBuYW1lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgbG9jMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgaW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IHRyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGxvYzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG5cclxuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd3LTc1JywnbS1hdXRvJywndGFibGUnLCd0YWJsZS1kYXJrJywndGFibGUtc3RyaXBlZCcsJ3RhYmxlLWJvcmRlcmVkJywndGFibGUtaG92ZXInKTtcclxuICAgICAgICB0aGVhZC5jbGFzc0xpc3QuYWRkKCd0aGVhZC1saWdodCcpO1xyXG4gICAgICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDEuaW5uZXJIVE1MID0gXCJPdXIgUmVzdGF1cmFudHNcIjtcclxuICAgICAgICBoZWFkZXIxLmlubmVySFRNTCA9IFwiTmFtZVwiO1xyXG4gICAgICAgIGhlYWRlcjIuaW5uZXJIVE1MID0gXCJMb2NhdGlvblwiO1xyXG4gICAgICAgIGhlYWRlcjMuaW5uZXJIVE1MID0gXCJJbmZvcm1hdGlvblwiO1xyXG4gICAgICAgIG5hbWUxLmlubmVySFRNTCA9IFwiVmlldCBOaGEgSGFuZ1wiO1xyXG4gICAgICAgIG5hbWUyLmlubmVySFRNTCA9IFwiVmlldCBOaGEgSGFuZyAtIE5ZXCI7XHJcbiAgICAgICAgbmFtZTMuaW5uZXJIVE1MID0gXCJWaWV0IE5oYSBIYW5nIC0gQkNOXCI7XHJcbiAgICAgICAgbmFtZTQuaW5uZXJIVE1MID0gXCJWaWV0IE5oYSBIYW5nIC0gVG9rXCI7XHJcbiAgICAgICAgbG9jMS5pbm5lckhUTUwgPSBcIkhhbm9pXCI7XHJcbiAgICAgICAgbG9jMi5pbm5lckhUTUwgPSBcIkJhcmNlbG9uYVwiO1xyXG4gICAgICAgIGxvYzMuaW5uZXJIVE1MID0gXCJCYW5na29rXCI7XHJcbiAgICAgICAgbG9jNC5pbm5lckhUTUwgPSBcIlRva2lvXCI7XHJcbiAgICAgICAgaW5mbzEuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcclxuICAgICAgICBpbmZvMi5pbm5lckhUTUwgPSBcIlVybmEgZXQgcGhhcmV0cmEgcGhhcmV0cmEgbWFzc2EgbWFzc2EuIEFsaXF1YW0gc2VtIGV0IHRvcnRvciBjb25zZXF1YXQgaWQgcG9ydGEuIEEgZGlhbSBtYWVjZW5hcyBzZWQgZW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWV0LlwiO1xyXG4gICAgICAgIGluZm8zLmlubmVySFRNTCA9IFwiRWdlc3RhcyBkdWkgaWQgb3JuYXJlIGFyY3Ugb2RpbyB1dCBzZW0uIFZlc3RpYnVsdW0gbWF0dGlzIHVsbGFtY29ycGVyIHZlbGl0IHNlZCB1bGxhbWNvcnBlciBtb3JiaSB0aW5jaWR1bnQgb3JuYXJlLlwiO1xyXG4gICAgICAgIGluZm80LmlubmVySFRNTCA9IFwiQ29tbW9kbyBudWxsYSBmYWNpbGlzaSBudWxsYW0gdmVoaWN1bGEgaXBzdW0gYSBhcmN1IGN1cnN1cyB2aXRhZS4gQ29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHV0IGFsaXF1YW0gcHVydXMgc2l0IGFtZXQgbHVjdHVzIHZlbmVuYXRpcy5cIjtcclxuICAgICAgICBcclxuICAgICAgICB0cjUuYXBwZW5kKG5hbWU0KTtcclxuICAgICAgICB0cjUuYXBwZW5kKGxvYzQpO1xyXG4gICAgICAgIHRyNS5hcHBlbmQoaW5mbzQpO1xyXG5cclxuICAgICAgICB0cjQuYXBwZW5kKG5hbWUzKTtcclxuICAgICAgICB0cjQuYXBwZW5kKGxvYzMpO1xyXG4gICAgICAgIHRyNC5hcHBlbmQoaW5mbzMpO1xyXG5cclxuICAgICAgICB0cjMuYXBwZW5kKG5hbWUyKTtcclxuICAgICAgICB0cjMuYXBwZW5kKGxvYzIpO1xyXG4gICAgICAgIHRyMy5hcHBlbmQoaW5mbzIpO1xyXG5cclxuICAgICAgICB0cjIuYXBwZW5kKG5hbWUxKTtcclxuICAgICAgICB0cjIuYXBwZW5kKGxvYzEpO1xyXG4gICAgICAgIHRyMi5hcHBlbmQoaW5mbzEpO1xyXG5cclxuICAgICAgICB0Ym9keS5hcHBlbmQodHIyKTtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHIzKTtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHI0KTtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHI1KTtcclxuXHJcbiAgICAgICAgdHIxLmFwcGVuZChoZWFkZXIxKTtcclxuICAgICAgICB0cjEuYXBwZW5kKGhlYWRlcjIpO1xyXG4gICAgICAgIHRyMS5hcHBlbmQoaGVhZGVyMyk7XHJcblxyXG4gICAgICAgIHRoZWFkLmFwcGVuZCh0cjEpO1xyXG5cclxuICAgICAgICB0YWJsZS5hcHBlbmQodGhlYWQpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGgxKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZCh0YWJsZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICByZXN0YXVyYW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdGF1cmFudHMsXHJcbiAgICAgICAgcmVuZGVyLFxyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCB7IGxvY2F0aW9uIH07IiwiY29uc3QgbWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywnbXktNScsJ2JnLWRhcmsnKTtcblxuICBmdW5jdGlvbiBmb29kKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29sNDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY29sNDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRCb2R5NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGg1NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3Qgc3BhbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBoMTEuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCdtYi01JywndGV4dC13aGl0ZS01MCcsJ3B0LTMnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JywncC0yJywnYmctZGFyaycpO1xuICAgIGNvbDQxLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTEuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQyLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTIuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQzLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTMuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDUzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ0LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ1LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDUuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTUuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU1LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIGNvbDQ2LmNsYXNzTGlzdC5hZGQoJ2NvbC00JywncC0zJywnYmctc2Vjb25kYXJ5Jyk7XG4gICAgY2FyZDYuY2xhc3NMaXN0LmFkZCgnY2FyZCcsJ21iLTQnKTtcbiAgICBjYXJkQm9keTYuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaDU2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIHNwYW4xLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuMi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjMuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW40LmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzcGFuNS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjYuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuXG4gICAgaDExLmlubmVySFRNTCA9ICdPdXIgRGlzaGVzJztcblxuICAgIHNwYW4xLmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuMi5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjMuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW40LmlubmVySFRNTCA9ICcxLDUkJztcbiAgICBzcGFuNS5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjYuaW5uZXJIVE1MID0gJzEsNSQnO1xuXG4gICAgaDUxLmlubmVySFRNTCA9ICdQaG8gQm8uJztcbiAgICBoNTIuaW5uZXJIVE1MID0gJ0J1biBDaGEuJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ0J1biBEYXUuJztcbiAgICBoNTQuaW5uZXJIVE1MID0gJ0RpbnN1bS4nO1xuICAgIGg1NS5pbm5lckhUTUwgPSAnTWVhdCBTdGlja3MuJztcbiAgICBoNTYuaW5uZXJIVE1MID0gJ0JhbmggVG9tLic7XG5cbiAgICBjYXJkMS5pbm5lckhUTUwgPSAnPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9waG8uanBnXCIgYWx0PVwiQ2FyZCBpZ2UgY2FwXCI+JztcbiAgICBjYXJkMi5pbm5lckhUTUwgPSAnPGltZyAgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWQgaW1nLWZsdWlkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9idW5jaGEuanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuICAgIGNhcmQzLmlubmVySFRNTCA9ICc8aW1nIHN0eWxlPVwiaGVpZ2h0OiAyNjBweDtcIiBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkIGltZy1mbHVpZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvYnVuZGF1LmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkNC5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL2RpbnN1bS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG4gICAgY2FyZDUuaW5uZXJIVE1MID0gJzxpbWcgc3R5bGU9XCJoZWlnaHQ6IDI2MHB4O1wiICBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9tZWF0LmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkNi5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgIGNsYXNzPVwiY2FyZC1pbWctdG9wIHJvdW5kZWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL2Jhbmh0b20uanBnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj4nO1xuXG4gICAgY2FyZEJvZHkxLmFwcGVuZChoNTEpO1xuICAgIGNhcmRCb2R5MS5hcHBlbmQoc3BhbjEpO1xuICAgIGNhcmQxLmFwcGVuZChjYXJkQm9keTEpO1xuICAgIGNvbDQxLmFwcGVuZChjYXJkMSk7XG5cbiAgICBjYXJkQm9keTIuYXBwZW5kKGg1Mik7XG4gICAgY2FyZEJvZHkyLmFwcGVuZChzcGFuMik7XG4gICAgY2FyZDIuYXBwZW5kKGNhcmRCb2R5Mik7XG4gICAgY29sNDIuYXBwZW5kKGNhcmQyKTtcblxuICAgIGNhcmRCb2R5My5hcHBlbmQoaDUzKTtcbiAgICBjYXJkQm9keTMuYXBwZW5kKHNwYW4zKTtcbiAgICBjYXJkMy5hcHBlbmQoY2FyZEJvZHkzKTtcbiAgICBjb2w0My5hcHBlbmQoY2FyZDMpO1xuXG4gICAgY2FyZEJvZHk0LmFwcGVuZChoNTQpO1xuICAgIGNhcmRCb2R5NC5hcHBlbmQoc3BhbjQpO1xuICAgIGNhcmQ0LmFwcGVuZChjYXJkQm9keTQpO1xuICAgIGNvbDQ0LmFwcGVuZChjYXJkNCk7XG5cbiAgICBjYXJkQm9keTUuYXBwZW5kKGg1NSk7XG4gICAgY2FyZEJvZHk1LmFwcGVuZChzcGFuNSk7XG4gICAgY2FyZDUuYXBwZW5kKGNhcmRCb2R5NSk7XG4gICAgY29sNDUuYXBwZW5kKGNhcmQ1KTtcblxuICAgIGNhcmRCb2R5Ni5hcHBlbmQoaDU2KTtcbiAgICBjYXJkQm9keTYuYXBwZW5kKHNwYW42KTtcbiAgICBjYXJkNi5hcHBlbmQoY2FyZEJvZHk2KTtcbiAgICBjb2w0Ni5hcHBlbmQoY2FyZDYpO1xuXG4gICAgcm93LmFwcGVuZChjb2w0MSk7XG4gICAgcm93LmFwcGVuZChjb2w0Mik7XG4gICAgcm93LmFwcGVuZChjb2w0Myk7XG4gICAgcm93LmFwcGVuZChjb2w0NCk7XG4gICAgcm93LmFwcGVuZChjb2w0NSk7XG4gICAgcm93LmFwcGVuZChjb2w0Nik7XG5cbiAgICBkaXYuYXBwZW5kKGgxMSk7XG4gICAgZGl2LmFwcGVuZChyb3cpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBkcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2w0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjb2w0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZEJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtdC0zJywncC0yJyk7XG4gICAgaDEyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY2VudGVyJywnbWItNScsJ3RleHQtd2hpdGUtNTAnLCdwdC0zJyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycsJ3AtMicsJ2JnLWRhcmsnKTtcbiAgICBjb2w0MS5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3AtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkxLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1MS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0Mi5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3AtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1Mi5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBjb2w0My5jbGFzc0xpc3QuYWRkKCdjb2wtNCcsJ3AtMycsJ2JnLXNlY29uZGFyeScpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCdtYi00Jyk7XG4gICAgY2FyZEJvZHkzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIGg1My5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBzcGFuMS5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJyk7XG4gICAgc3BhbjIuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNwYW4zLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcblxuICAgIGgxMi5pbm5lckhUTUwgPSAnT3VyIEJldmVyYWdlcyc7XG5cbiAgICBzcGFuMS5pbm5lckhUTUwgPSAnMSw1JCc7XG4gICAgc3BhbjIuaW5uZXJIVE1MID0gJzEsNSQnO1xuICAgIHNwYW4zLmlubmVySFRNTCA9ICcxLDUkJztcblxuICAgIGg1MS5pbm5lckhUTUwgPSAnVGVhLic7XG4gICAgaDUyLmlubmVySFRNTCA9ICdDb2ZmZWUuJztcbiAgICBoNTMuaW5uZXJIVE1MID0gJ1RyYSBTdWEuJztcblxuICAgIGNhcmQxLmlubmVySFRNTCA9ICc8aW1nICBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvdGVhLmpwZ1wiIGFsdD1cIkNhcmQgaWdlIGNhcFwiPic7XG4gICAgY2FyZDIuaW5uZXJIVE1MID0gJzxpbWcgIHN0eWxlPVwiaGVpZ2h0OiAyNjBweDtcIiBjbGFzcz1cImNhcmQtaW1nLXRvcCByb3VuZGVkIGltZy1mbHVpZFwiIHNyYz1cIi4uL3NyYy9pbWFnZXMvY29mZmVlLmpwZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+JztcbiAgICBjYXJkMy5pbm5lckhUTUwgPSAnPGltZyBzdHlsZT1cImhlaWdodDogMjYwcHg7XCIgY2xhc3M9XCJjYXJkLWltZy10b3Agcm91bmRlZCBpbWctZmx1aWRcIiBzcmM9XCIuLi9zcmMvaW1hZ2VzL3RyYXN1YS5qcGdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPic7XG5cbiAgICBjYXJkQm9keTEuYXBwZW5kKGg1MSk7XG4gICAgY2FyZEJvZHkxLmFwcGVuZChzcGFuMSk7XG4gICAgY2FyZDEuYXBwZW5kKGNhcmRCb2R5MSk7XG4gICAgY29sNDEuYXBwZW5kKGNhcmQxKTtcblxuICAgIGNhcmRCb2R5Mi5hcHBlbmQoaDUyKTtcbiAgICBjYXJkQm9keTIuYXBwZW5kKHNwYW4yKTtcbiAgICBjYXJkMi5hcHBlbmQoY2FyZEJvZHkyKTtcbiAgICBjb2w0Mi5hcHBlbmQoY2FyZDIpO1xuXG4gICAgY2FyZEJvZHkzLmFwcGVuZChoNTMpO1xuICAgIGNhcmRCb2R5My5hcHBlbmQoc3BhbjMpO1xuICAgIGNhcmQzLmFwcGVuZChjYXJkQm9keTMpO1xuICAgIGNvbDQzLmFwcGVuZChjYXJkMyk7XG5cbiAgICByb3cuYXBwZW5kKGNvbDQxKTtcbiAgICByb3cuYXBwZW5kKGNvbDQyKTtcbiAgICByb3cuYXBwZW5kKGNvbDQzKTtcblxuICAgIGRpdi5hcHBlbmQoaDEyKTtcbiAgICBkaXYuYXBwZW5kKHJvdyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgY29udGVudC5hcHBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBmb29kKCk7XG4gICAgZHJpbmtzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvb2QsXG4gICAgZHJpbmtzLFxuICAgIHJlbmRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTsiLCJjb25zdCBuYXZiYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJywnbmF2YmFyLWV4cGFuZC1sZycsJ25hdmJhci1saWdodCcsJ2JnLWxpZ2h0Jyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScsJ25hdmJhci1jb2xsYXBzZScsJ3BsLTUnLCdwci01Jyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2Jyk7XG4gICAgaXRlbTEuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG4gICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG4gICAgaXRlbTMuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nLCdtbC0yJyk7XG5cbiAgICBsb2dvLmlubmVySFRNTCA9ICc8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+VmlldCBOaGEgSGFuZzwvYT4nO1xuICAgIGl0ZW0xLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBpdGVtMi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgaXRlbTMuaW5uZXJIVE1MID0gJ0Fib3V0JztcbiAgICBpdGVtNC5pbm5lckhUTUwgPSAnTG9jYXRpb24nO1xuXG4gICAgbGlzdC5hcHBlbmQoaXRlbTEpO1xuICAgIGxpc3QuYXBwZW5kKGl0ZW0yKTtcbiAgICBsaXN0LmFwcGVuZChpdGVtMyk7XG4gICAgbGlzdC5hcHBlbmQoaXRlbTQpO1xuXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kKGxpc3QpO1xuXG4gICAgbmF2LmFwcGVuZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kKGxpbmtzQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdik7XG4gIH1cblxuICBmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9udC1zbWFsbCcsJ2JsdWUnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInLCdweS0zJyk7XG5cbiAgICBkaXYuaW5uZXJIVE1MID0gJ8KpIDIwMjAgQ29weXJpZ2h0OiA8YSBocmVmPVwiI1wiPiBKYXZpQ29ycDwvYT4nO1xuXG4gICAgZm9vdGVyLmFwcGVuZChkaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaGVhZGVyKCk7XG4gICAgZm9vdGVyKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlYWRlcixcbiAgICBmb290ZXIsXG4gICAgcmVuZGVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgbmF2YmFyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==