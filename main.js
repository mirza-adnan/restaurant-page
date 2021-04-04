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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nfunction createHome() {\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"Poutine Routine\";\r\n  const p = document.createElement(\"p\");\r\n  p.textContent = \"The Only Routine You Need\";\r\n  return [h1, p];\r\n}\r\n\r\nfunction loadHome() {\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.resetMain)();\r\n  const main = document.querySelector(\"main\");\r\n  main.className = \"main-home\";\r\n  main.appendChild(createHome()[0]);\r\n  main.appendChild(createHome()[1]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetMain\": () => (/* binding */ resetMain)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction createHeader() {\r\nconst header = document.createElement(\"header\");\r\n\r\n  function createLogo() {\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.innerHTML = \"POUTINE<br>ROUTINE\";\r\n    return h2;\r\n  }\r\n\r\n  function createNav() {\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-links\";\r\n    ul.appendChild(homeBtn());\r\n    ul.appendChild(menuBtn());\r\n    ul.appendChild(aboutBtn());\r\n    nav.appendChild(ul);\r\n    return nav;\r\n  }\r\n\r\n  function homeBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\", \"active\");\r\n    li.textContent = \"Home\";\r\n    return li\r\n  }\r\n\r\n  function menuBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"Menu\";\r\n    return li\r\n  }\r\n\r\n  function aboutBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"About\";\r\n    return li\r\n  }\r\n\r\n  header.appendChild(createLogo());\r\n  header.appendChild(createNav());\r\n  return header;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  const p = document.createElement(\"p\");\r\n  p.innerHTML = \"Copyright &#169; 2021 <a href=''>Mirza Adnan\";\r\n  footer.appendChild(p);\r\n  return footer;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  return main;\r\n}\r\n\r\nfunction resetMain() {\r\n  document.querySelector(\"main\").textContent = \"\";\r\n}\r\n\r\n\r\n\r\ncontent.appendChild(createHeader());\r\ncontent.appendChild(createMain());\r\ncontent.appendChild(createFooter());\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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