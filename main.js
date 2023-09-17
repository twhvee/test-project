/* Nav icon */
const navBtn = document.querySelector(".nav-icon-btn");
const navBtn2 = document.querySelector(".header__nav-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top");
const menu3 = document.querySelector(".header__navbar__item3");
const menu4 = document.querySelector(".header__navbar__item4");
const menu5 = document.querySelector(".header__navbar__item5");
const menu6 = document.querySelector(".header__navbar__item6");
const menu7 = document.querySelector(".header__navbar__item7");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

menu3.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

menu4.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

menu5.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

menu6.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

menu7.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};
