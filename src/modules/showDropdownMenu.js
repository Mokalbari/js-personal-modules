// This function add an event listener on a button list / menu list.
// For each, it will toggle a class called "show"
// Make sure to have the same nodelist length of buttons and menus.

// The html should be structured something like this:
// <button class="dropdown__button">Dropdown button</button>
// <div class="dropdown__menu">
//  // The links
// </div>

const showDropdownMenu = (buttons, menus) => {
  const toggleShowClass = menu => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      menus.forEach(menu => toggleShowClass(menu)); // Remove first all other class
      menus[index].classList.toggle("show"); // Directly toggle here for clarity
    });
  });

  if (!window.dropdownInit) {
    document.documentElement.addEventListener("click", () => {
      menus.forEach(menu => {
        toggleShowClass(menu); // Only hide if shown
      });
    });
    window.dropdownInit = true;
  }
};

export default showDropdownMenu;
