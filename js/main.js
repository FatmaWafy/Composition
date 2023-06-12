const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("click", function () {
  if (navbar.style.display == "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
