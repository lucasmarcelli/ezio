$(function() {
  $('a[href*="#"]:not([href="#"]):not(".show-more"):not(".carousel-control")').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 850);
        return false;
      }
    }
  });
});
