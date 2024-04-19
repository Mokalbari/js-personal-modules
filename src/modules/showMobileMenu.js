const showMobileMenu = (button, menu) => {
  const toggleMenu = () => menu.classList.toggle("show-mobile-menu");
  button.addEventListener("click", event => {
    event.stopPropagation();
    toggleMenu();
  });

  const closeMobileMenu = event => {
    if (
      !menu.contains(event.target) &&
      menu.classList.contains("show-mobile-menu")
    ) {
      menu.classList.remove("show-mobile-menu");
    }
  };

  // Attach this handler correctly with the event passed to the closeMobileMenu function.
  document.documentElement.addEventListener("click", closeMobileMenu);
};

export default showMobileMenu;
