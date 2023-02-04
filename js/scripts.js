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

// Modal Setup
var modal = document.getElementById("modal");

var modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

// global handler
document.addEventListener("click", function (e) {
  if (e.target.className.indexOf("modal-image") !== -1) {
    var img = e.target;
    var modalImg = document.getElementById("modal-content");
    var captionText = document.getElementById("modal-caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
});
