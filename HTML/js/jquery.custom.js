jQuery(document).ready(function($) {

  /* Activate the Flexslider. */
  $('.widget-gallery').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    directionNav: false
  });

  /* Mobile Menu. Props to Adi Purdila - @adipurdila */
  $('#page-nav ul:first-child').clone().appendTo('.mobile-menu-container');

  $('.mobile-menu-toggle').click(function(event){
    event.preventDefault();
    $('.mobile-menu-container').slideToggle();
  });

});