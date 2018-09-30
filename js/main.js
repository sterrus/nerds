var open = document.querySelector(".contacts__button");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__header-close");
var login = popup.querySelector("[name=name]");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup__show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup__show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("popup__show")) {
      popup.classList.remove("popup__show");
    }
  }
});