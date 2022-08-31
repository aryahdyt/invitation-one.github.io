


$(document).on('click', function(){
  // document.getElementById("my_audio").play();
});

$(document).on('click', '.btn-open', function () {
  console.log('cliked');
  document.getElementById("my_audio").play();

  const landing = document.querySelector('.main-content');
  landing.classList.remove('is-hidden');
  landing.classList.add('animate__animated', 'animate__zoomIn');

  // landing.addEventListener('animationend', () => {
    const init = document.querySelector('.initial-view');
    init.style.setProperty('--animate-duration', '.5s');
    init.classList.add('animate__animated', 'animate__zoomOut');
  });
// });

// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  // scrollFunction();
};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("toTop").style.display = "block";
//   } else {
//     document.getElementById("toTop").style.display = "none";
//   }
// }

// Preloader
// $(document).ready(function($) {
//   $(".preloader-wrapper").fadeOut();
//   $("body").removeClass("preloader-site");

// });
// $(window).load(function() {
//   var Body = $("body");
//   Body.addClass("preloader-site");
// });
