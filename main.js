const btnToggleMenu = document.querySelector(".navbar-toggle");
const navbar = document.querySelector("#navbar");

window.addEventListener("DOMContentLoaded", () => main());


function main() {
  document.addEventListener("click", (e) => handlerToggleNavbar(e.target));

  function handlerToggleNavbar(target) {
    if (target.classList.contains("navbar-container")) {
      navbar.classList.remove("toggle-active");
      btnToggleMenu.setAttribute("aria-expanded", "false");
      return;
    }

    if (!target.classList.contains("navbar-toggle")) return

    navbar.classList.add("toggle-active");
    btnToggleMenu.setAttribute("aria-expanded", "true");
  }
}
