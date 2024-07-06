function redirectToBooking() {
  window.location.href = "https://fisioteam.square.site/s/appointments";
}
function redirectToGift() {
  window.location.href = "https://fisioteam.square.site/s/gift-cards";
}
document.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-below, .slide-in-left-script,  .slide-in-right-script"
  );

  elements.forEach(function (element) {
    var position = element.getBoundingClientRect();

    // Verifica si el elemento está visible en la ventana del navegador
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("active");
    }
  });
});
