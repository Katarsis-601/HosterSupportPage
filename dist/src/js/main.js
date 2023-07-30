/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let answerContent = document.querySelector(".answer-content");
let backBtn = document.getElementsByClassName("reaction-back")[0];
let cardContent = document.querySelector("article .container .content");

let navbarBtn = document.getElementsByClassName("navbar-btn")[0];
let navbarContainer = document.getElementsByClassName("navbar-container")[0];
let navbar_img = document.getElementsByClassName("navbar-img")[0];

let nav_status = false;

document.querySelectorAll("p.text-card").forEach((data) => {
  data.addEventListener("click", () => {
    answerContent.style.display = "flex";
    cardContent.style.display = "none";
  });
});
backBtn.addEventListener("click", () => {
  answerContent.style.display = "none";
  cardContent.style.display = "grid";
});
window.addEventListener("resize", () => {
  if (window.innerWidth <= 500) {
    navbarContainer.style.display = "none";
    nav_status = false;
    navbar_img.src = "./assets/Icon_Hamburger.png";
    navbarBtn.addEventListener("click", navbarHandler);
  } else {
    navbarContainer.style.display = "block";
    nav_status = false;
  }
});

if (window.innerWidth <= 500) {
  navbarBtn.addEventListener("click", navbarHandler);
}

function navbarHandler(ev) {
  nav_status = !nav_status;

  if (nav_status) {
    navbarContainer.style.display = "flex";
    navbar_img.src = "./assets/Icon_Closed.png";
  } else {
    navbarContainer.style.display = "none";
    navbar_img.src = "./assets/Icon_Hamburger.png";
  }
}

})();

/******/ })()
;