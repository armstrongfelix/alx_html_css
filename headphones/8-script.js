document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu");
  const nav = document.querySelector("header nav");

  // Create a class for toggling
  menuIcon.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
    menuIcon.classList.toggle("active");
  });

  // Optional: Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !menuIcon.contains(e.target) &&
      !nav.contains(e.target) &&
      nav.classList.contains("nav-open")
    ) {
      nav.classList.remove("nav-open");
      menuIcon.classList.remove("active");
    }
  });
});
