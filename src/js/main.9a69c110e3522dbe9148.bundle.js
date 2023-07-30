"use strict";
(self["webpackChunkhostersupportpage"] = self["webpackChunkhostersupportpage"] || []).push([[179],{

/***/ 745:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/assets/Icon_Hamburger.png
const Icon_Hamburger_namespaceObject = __webpack_require__.p + "src/images/c835a48763566f9530e5..png";
;// CONCATENATED MODULE: ./src/assets/Icon_Closed.png
const Icon_Closed_namespaceObject = __webpack_require__.p + "src/images/3868a91b39205acf2a9f..png";
;// CONCATENATED MODULE: ./src/index.js




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
    navbar_img.src = Icon_Hamburger_namespaceObject;
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
    navbar_img.src = Icon_Closed_namespaceObject;
  } else {
    navbarContainer.style.display = "none";
    navbar_img.src = Icon_Hamburger_namespaceObject;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(745));
/******/ }
]);