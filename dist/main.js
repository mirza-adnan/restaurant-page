/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.querySelector(\"#content\");\r\n\r\nfunction createHeader() {\r\nconst header = document.createElement(\"header\");\r\n\r\n  function createLogo() {\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.innerHTML = \"POUTINE<br>ROUTINE\";\r\n    return h2;\r\n  }\r\n\r\n  function createNav() {\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-links\";\r\n    ul.appendChild(homeBtn());\r\n    ul.appendChild(menuBtn());\r\n    ul.appendChild(aboutBtn());\r\n    nav.appendChild(ul);\r\n    return nav;\r\n  }\r\n\r\n  function homeBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\", \"active\");\r\n    li.textContent = \"Home\";\r\n    return li\r\n  }\r\n\r\n  function menuBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"Menu\";\r\n    return li\r\n  }\r\n\r\n  function aboutBtn() {\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"nav-link\");\r\n    li.textContent = \"About\";\r\n    return li\r\n  }\r\n\r\n  header.appendChild(createLogo());\r\n  header.appendChild(createNav());\r\n  return header;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  const p = document.createElement(\"p\");\r\n  p.innerHTML = \"Copyright &#169; 2021 <a href=''>Mirza Adnan\";\r\n  footer.appendChild(p);\r\n  return footer;\r\n}\r\n\r\ncontent.appendChild(createHeader());\r\ncontent.appendChild(createFooter());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;