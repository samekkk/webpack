import { home_page } from "./home.js";
import { menu_page } from "./menu.js";
import { about_page } from "./about.js";
import { clearContent } from "./clear.js";

function initial_page() {
  home_page();
}

function handleButtonClick(event) {
  const action = event.target.getAttribute("data-action");

  switch (action) {
    case "home":
      document.getElementsByTagName("body")[0].style.height = "100vh";
      clearContent();

      home_page();

      break;

    case "menu":
      document.getElementsByTagName("body")[0].style.height = "auto";
      clearContent();

      menu_page();
      break;

    case "about":
      document.getElementsByTagName("body")[0].style.height = "100vh";
      clearContent();

      about_page();
      break;
  }
}

// Add event listener to all buttons with the class 'btn'
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

export default initial_page;
