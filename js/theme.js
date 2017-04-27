jQuery(document).ready(function() {
    jQuery("nav#mobile .menuArrow").click(function () {
        jQuery(this).parent().parent().addClass('slideNavLeft');
        jQuery(this).prev('.sub-menu').fadeIn();
        jQuery(this).parent().css('position', 'static');
    });

    jQuery("nav#mobile .closeSubMenu").click(function () {
        jQuery(this).parent().parent().parent().removeClass('slideNavLeft');
        jQuery(this).parent().fadeOut();
        jQuery(this).parent().parent().css('position', 'relative');
    });
    jQuery(window).scroll( function() {
       if(jQuery(window).scrollTop() > 50) {
           jQuery('#header').addClass('header-background');
       } else {
           jQuery('#header').removeClass('header-background');
       }
    });
    
    jQuery('#sub-category-select').change( function() {
        var set_link = jQuery(this).find(':selected').val();
        if(set_link != "") {
            window.location.href = set_link;
        }
    }); 
                                          
                                          
});