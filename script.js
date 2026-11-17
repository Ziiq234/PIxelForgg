"use strict";

// SELECT the elements JavaScript needs from the current document.
const filterButtons = document.querySelectorAll(".tab");
const menuItems = document.querySelectorAll(".card");
const filterFeedback = document.querySelector("#filter-feedback");

// DECIDE which items match and UPDATE their hidden property.
function filterMenu(category) {
  let visibleCount = 0;

  menuItems.forEach((item) => {
    const shouldShow =
      category === "all" || item.dataset.category === category;

    item.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  // UPDATE the live feedback so the result is clear without counting cards.
  filterFeedback.textContent =
    `Showing ${visibleCount} game${visibleCount === 1 ? "" : "s"}.`;
}

// Keep the active style and accessibility state same.
function updateActiveButton(selectedButton) {
  filterButtons.forEach((button) => {
    const isSelected = button === selectedButton;

    button.classList.toggle("active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

// LISTEN for a click on every filter button.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    updateActiveButton(button);
    filterMenu(category);
  });
});
