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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hostersupportpage/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nlet answerContent = document.querySelector(\".answer-content\");\nlet backBtn = document.getElementsByClassName(\"reaction-back\")[0];\nlet cardContent = document.querySelector(\"article .container .content\");\n\nlet navbarBtn = document.getElementsByClassName(\"navbar-btn\")[0];\nlet navbarContainer = document.getElementsByClassName(\"navbar-container\")[0];\nlet navbar_img = document.getElementsByClassName(\"navbar-img\")[0];\n\nlet nav_status = false;\n\ndocument.querySelectorAll(\"p.text-card\").forEach((data) => {\n  data.addEventListener(\"click\", () => {\n    answerContent.style.display = \"flex\";\n    cardContent.style.display = \"none\";\n  });\n});\nbackBtn.addEventListener(\"click\", () => {\n  answerContent.style.display = \"none\";\n  cardContent.style.display = \"grid\";\n});\nwindow.addEventListener(\"resize\", () => {\n  if (window.innerWidth <= 500) {\n    navbarContainer.style.display = \"none\";\n    nav_status = false;\n    navbar_img.src = \"./assets/Icon_Hamburger.png\";\n    navbarBtn.addEventListener(\"click\", navbarHandler);\n  } else {\n    navbarContainer.style.display = \"block\";\n    nav_status = false;\n  }\n});\n\nif (window.innerWidth <= 500) {\n  navbarBtn.addEventListener(\"click\", navbarHandler);\n}\n\nfunction navbarHandler(ev) {\n  nav_status = !nav_status;\n\n  if (nav_status) {\n    navbarContainer.style.display = \"flex\";\n    navbar_img.src = \"./assets/Icon_Closed.png\";\n  } else {\n    navbarContainer.style.display = \"none\";\n    navbar_img.src = \"./assets/Icon_Hamburger.png\";\n  }\n}\n\n\n//# sourceURL=webpack://hostersupportpage/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;