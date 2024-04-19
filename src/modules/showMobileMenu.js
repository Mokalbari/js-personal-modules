const showMobileMenu = (button, menu) => {
  const toggleMenu = () => menu.classList.toggle("show-mobile-menu");
  const toggleShowClass = () => {
    if (menu.classList.contains("show-mobile-menu")) {
      menu.classList.remove("show-mobile-menu");
    }
  };

  button.addEventListener("click", event => {
    event.stopPropagation();
    toggleMenu();
  });
  document.documentElement.addEventListener("click", () => {
    toggleShowClass();
  });
};

export default showMobileMenu;
