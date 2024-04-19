import "./index.scss";
import showDropdownMenu from "./modules/showDropdownMenu";
import showMobileMenu from "./modules/showMobileMenu";

const dropItems = {
  buttons: document.querySelectorAll(".dropdown__btn"),
  menus: document.querySelectorAll(".dropdown__content"),
  bx: document.querySelector(".bx"),
  mobileMenu: document.querySelector(".mobile__content")
};

document.addEventListener("DOMContentLoaded", () => {
  showDropdownMenu(dropItems.buttons, dropItems.menus);
  showMobileMenu(dropItems.bx, dropItems.mobileMenu);
});
