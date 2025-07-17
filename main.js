const btnToggleMenu = document.querySelector(".navbar-toggle");
const navbar = document.querySelector("#navbar");


document.addEventListener("click", (e) => {
  const contain = e.target.classList.contains("navbar-toggle");
  
  if (contain) {
    navbar.classList.add("toggle-active");
    btnToggleMenu.setAttribute("aria-expanded", "true");
  } else if (e.target.classList.contains("navbar-container")) {
    navbar.classList.remove("toggle-active");
    btnToggleMenu.setAttribute("aria-expanded", "false");
  }
});