const showDropdownMenu = () => {
  const dropdownContainer = document.querySelector(".container__dropdown");
  // Handle showing the dropdown
  dropdownContainer.addEventListener("mouseover", event => {
    if (event.target.className.includes("dropdown__btn")) {
      const dropdownContent = event.target.nextElementSibling;
      dropdownContent.classList.add("dropdown__on");
    }
  });

  // Handle hiding the dropdown
  dropdownContainer.addEventListener("mouseout", event => {
    if (
      event.target.className.includes("dropdown__btn") &&
      !event.target.className.includes("dropdown__content")
    ) {
      const dropdownContent = event.target.nextElementSibling;
      dropdownContent.classList.remove("dropdown__on");
    }
  });
};

export default showDropdownMenu;
// mettre un event listener sur le container
// s'il y a un hover sur un élément, capturer l'événement
//
