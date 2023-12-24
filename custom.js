$(document).ready(function(){
    new  WOW().init();
    $("html").smoothScroll();
   var $grid= $(".main-item").isotope(
   );
    $('.jitem').on('click', 'li', function(){
        var filterValue=$(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    var typed = new Typed(".type", {
        strings: ["I’m looking for the unexpected.I’m looking for things I’ve never seen before."],
          
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
    $('body').materialScrollTop();
    $('.video2').magnificPopup({
        type: "video"
    });


    $('.banner1').ripples({
        dropRadius: 10,
        perturbance: 0.03,
      });
});