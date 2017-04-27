jQuery(document).ready(function() {
    var carousel_load = jQuery('.video-list-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        ]
    });
    
    var width = jQuery('.video-slide:first').width()*1.5;
    jQuery('.video-slide').hover( function () {
        var prev_slide = jQuery(this).prevAll();
        var next_slide = jQuery(this).nextAll();
        prev_slide.toggleClass('shift-left');
        next_slide.toggleClass('shift-right');
    });
    
    jQuery.when(carousel_load).done( function() {
        jQuery('#video-list-container').css('opacity', '1');
    });
    
    
});

jQuery(window).resize(function() {

});
