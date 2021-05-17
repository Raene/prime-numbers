// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.scroll-animations .animate__animated').each(function() {
        if (isElementInViewport(this) === true) {
          $(this).addClass('animate__fadeInUp');
        }
      });
      $('.fadeRight-animations .animate__animated').each(function() {
        if (isElementInViewport(this) === true) {
          $(this).addClass('animate__fadeInLeft');
        }
      });
      $('.fadeLeft-animations .animate__animated').each(function() {
        if (isElementInViewport(this) === true) {
          $(this).addClass('animate__fadeInRight');
        }
      });
      $('.flipInY-animations .animate__animated').each(function() {
        if (isElementInViewport(this) === true) {
          $(this).addClass('animate__flipInY');
          $(this).css("opacity", 1);
        }
      });
    });
  });