


let is_play = false;

$(document).on('click', '.btn-open', function () {
  // console.log('cliked');
  play_music();

  document.getElementById('btnMusic').classList.remove('is-hidden');
  document.getElementById('toTop').classList.remove('is-hidden');

  const landing = document.querySelector('.main-content');
  landing.classList.remove('is-hidden');
  landing.classList.add('animate__animated', 'animate__zoomIn');

  // landing.addEventListener('animationend', () => {
    const init = document.querySelector('.initial-view');
    init.style.setProperty('--animate-duration', '.5s');
    init.classList.add('animate__animated', 'animate__zoomOut', 'is-hidden');
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

$(document).on('click', '#btnMusic', function(){
  console.log(is_play);
  if (is_play) {
    pause_music();
    $(this).find('.icon').removeClass('fa-music').addClass('fa-pause');
  } else {
    play_music();
    $(this).find('.icon').removeClass('fa-pause').addClass('fa-music');
  }
});

function play_music(){
  document.getElementById("my_audio").play();
  is_play = true;
}

function pause_music(){
  document.getElementById("my_audio").pause();
  is_play = false;
}

$(document).on('click','#toTop',function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > (window.outerHeight + (window.outerHeight/2))) {
    document.getElementById("toTop").style.display = "flex";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
// $(document).ready(function($) {
//   $(".preloader-wrapper").fadeOut();
//   $("body").removeClass("preloader-site");

// });
// $(window).load(function() {
//   var Body = $("body");
//   Body.addClass("preloader-site");
// });
