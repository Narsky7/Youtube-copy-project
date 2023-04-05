const hamburgerMenu = document.querySelector(".hamburger-menu");
const smallBar = document.querySelector(".sidebar-closed");
const bigBar = document.querySelector(".sidebar-active");
const categoriesBar = document.querySelector(".categories-bar");
const categories = document.querySelectorAll(".category");
const section1 = document.querySelector(".section-fixed");
const section2 = document.querySelector(".section2-fixed");
const footer = document.querySelector(".footer");

hamburgerMenu.addEventListener("click", () => {
  smallBar.classList.toggle("sidebar-closed-truly");
  bigBar.classList.toggle("sidebar-active-truly");
  categoriesBar.classList.toggle("category-fixed");
  section1.classList.toggle("section-1-opened");
  section2.classList.toggle("section-2-opened");
  footer.classList.toggle("footer-fixed");
});

function changeBcgColor(event) {
  event.preventDefault();
  const clickedElement = event.target;

  categoryElements.forEach((categoryElement) => {
    categoryElement.classList.remove("selected-category");
  });

  clickedElement.classList.toggle("selected-category");
}

const categoryElements = document.querySelectorAll(".category");

categoryElements.forEach((categoryElement) => {
  categoryElement.addEventListener("click", changeBcgColor);
});

const userIcon = document.querySelector(".account-icon");
const popup = document.querySelector(".pop-up");

userIcon.addEventListener("click", () => {
  popup.classList.toggle("pop-up-active");
});
