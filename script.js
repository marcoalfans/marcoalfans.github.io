const chk = document.getElementById("chk");
const html = document.querySelector("html");

chk.addEventListener("click", function () {
  //check color theme saat ini, lalu ubah
  if (html.dataset.colorMode === "dark") {
    html.dataset.colorMode = "light";
  } else {
    html.dataset.colorMode = "dark";
  }
});

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
