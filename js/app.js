var mainnav = document.querySelector(".main-nav");
var mainnavopenclose = document.querySelector(".main-nav__open-close");
var mainnavlogo = document.querySelector(".main-nav__logo");
mainnav.classList.add("main-nav--closed");

mainnavopenclose.addEventListener("click", function(event) {
  if (mainnav.classList.contains("main-nav--closed")) {
    event.preventDefault();
    mainnav.classList.remove("main-nav--closed");
    mainnav.classList.add("main-nav--opened");
  }
  else if (mainnav.classList.contains("main-nav--opened")) {
    event.preventDefault();
    mainnav.classList.remove("main-nav--opened");
    mainnav.classList.add("main-nav--closed");
  }
});
