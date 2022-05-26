let navIcon = document.getElementById("nav-icon");
let navSidebar = document.getElementById("sidebar");
let closeIcon = document.getElementById("close-icon");
navIcon.addEventListener("click", function () {
  navSidebar.classList.add("show-sidebar");
});

closeIcon.addEventListener("click", function () {
  navSidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
