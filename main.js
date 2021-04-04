/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nfunction createAboutSection() {\r\n  const div = document.createElement(\"div\");\r\n  div.className = \"about\";\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"About us\";\r\n  const paragraph1 = document.createElement(\"p\");\r\n  paragraph1.textContent = \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maxime reiciendis nam atque rem inventore distinctio minus temporibus deserunt iusto voluptatibus. Tempora atque ipsam eius et tempore vitae nisi eaque.\";\r\n  \r\n  const paragraph2 = document.createElement(\"p\");\r\n  paragraph2.textContent = \"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatum officia, ipsum voluptatem exercitationem molestias ex aut sint dignissimos accusantium.\";\r\n\r\n  const paragraph3 = document.createElement(\"p\");\r\n  paragraph3.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident sapiente rem nemo quas labore officia necessitatibus eligendi tempora placeat nulla, mollitia tempore obcaecati reiciendis quae minima odio quam reprehenderit.\";\r\n  div.appendChild(h1);\r\n  div.appendChild(paragraph1);\r\n  div.appendChild(paragraph2);\r\n  div.appendChild(paragraph3);\r\n  return div\r\n}\r\n\r\nfunction loadAbout() {\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.resetMain)();\r\n  const main = document.querySelector(\"main\");\r\n  main.className = \"main-about\";\r\n  main.appendChild(createAboutSection());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\nfunction createHome() {\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"Poutine Routine\";\r\n  const p = document.createElement(\"p\");\r\n  p.textContent = \"The Only Routine You Need\";\r\n  const button = document.createElement(\"button\");\r\n  button.className = \"order-button\";\r\n  button.textContent = \"Order Now\";\r\n  button.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.default);\r\n  return [h1, p, button];\r\n}\r\n\r\nfunction loadHome() {\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.resetMain)();\r\n  const main = document.querySelector(\"main\");\r\n  main.className = \"main-home\";\r\n  main.appendChild(createHome()[0]);\r\n  main.appendChild(createHome()[1]);\r\n  main.appendChild(createHome()[2]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetMain\": () => (/* binding */ resetMain)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction createHeader() {\r\nconst header = document.createElement(\"header\");\r\n\r\n  function createLogo() {\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.innerHTML = \"POUTINE<br>ROUTINE\";\r\n    return h2;\r\n  }\r\n\r\n  function createNav() {\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-links\";\r\n    ul.appendChild(homeBtn());\r\n    ul.appendChild(menuBtn());\r\n    ul.appendChild(aboutBtn());\r\n    nav.appendChild(ul);\r\n    return nav;\r\n  }\r\n\r\n  function homeBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"Home\";\r\n    li.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__.default);\r\n    return li;\r\n  }\r\n\r\n  function menuBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"Menu\";\r\n    li.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.default);\r\n    return li;\r\n  }\r\n\r\n  function aboutBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"About\";\r\n    li.addEventListener(\"click\", _about_js__WEBPACK_IMPORTED_MODULE_2__.default);\r\n    return li;\r\n  }\r\n\r\n  header.appendChild(createLogo());\r\n  header.appendChild(createNav());\r\n  return header;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  const p = document.createElement(\"p\");\r\n  p.innerHTML = \"Copyright &#169; 2021 <a href='https://github.com/mizzadnan' target='_blank'>Mirza Adnan</a>\";\r\n  footer.appendChild(p);\r\n  return footer;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  return main;\r\n}\r\n\r\nfunction resetMain() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n}\r\n\r\n\r\n\r\ncontent.appendChild(createHeader());\r\ncontent.appendChild(createMain());\r\ncontent.appendChild(createFooter());\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nfunction createItem(image, name, price) {\r\n  const item = document.createElement(\"div\");\r\n  item.className = \"menu-item\";\r\n  const img = document.createElement(\"img\");\r\n  img.src = `img/${image}.jpg`;\r\n  const foodName = document.createElement(\"h3\");\r\n  foodName.textContent = name;\r\n  const foodPrice = document.createElement(\"h3\");\r\n  foodPrice.textContent = price;\r\n  item.appendChild(img);\r\n  item.appendChild(foodName);\r\n  item.appendChild(foodPrice);\r\n  return item\r\n}\r\n\r\nfunction createGridContainer() {\r\n  const grid = document.createElement(\"div\");\r\n  grid.className = \"grid-container\";\r\n  const items = [\"crispychicken\", \"gyrochicken\", \"gyrochicken\", \"crispychicken\", \"crispychicken\", \"gyrochicken\"];\r\n  for (let i=0; i<items.length; i++) {\r\n    if (items[i] == \"crispychicken\") {\r\n      grid.appendChild(createItem(items[i], \"Crispy Chicken and Bacon Poutine\", \"4.99$\"));\r\n    } else if (items[i] == \"gyrochicken\") {\r\n      grid.appendChild(createItem(items[i], \"Gyro Chicken Poutine\", \"4.99$\"));\r\n    }\r\n  }\r\n  return grid\r\n}\r\n\r\nfunction createMenu() {\r\n  const menu = document.createElement(\"div\");\r\n  menu.className = \"wrapper\";\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"Menu\"\r\n  menu.appendChild(h1);\r\n  menu.appendChild(createGridContainer());\r\n  return menu;\r\n}\r\n\r\nfunction loadMenu() {\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.resetMain)();\r\n  const main = document.querySelector(\"main\");\r\n  main.className = \"main-menu\";\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;