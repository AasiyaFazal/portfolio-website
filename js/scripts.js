function menuToggle() {
  var checkbox = document.getElementById("checkBox");
  checkbox.checked = null;
}

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header-home").addClass(" active-bg");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header-home").removeClass("active-bg");
    }
  });
});
