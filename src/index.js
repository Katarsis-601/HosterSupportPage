import "./style.css";
import navbar_icon from "./assets/Icon_Hamburger.png";
import navbar_icon_close from "./assets/Icon_Closed.png";

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
    navbar_img.src = navbar_icon;
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
    navbar_img.src = navbar_icon_close;
  } else {
    navbarContainer.style.display = "none";
    navbar_img.src = navbar_icon;
  }
}
