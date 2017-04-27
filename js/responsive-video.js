jQuery(document).ready( function() {
    jQuery('iframe').wrap('<div class="videoWrapper"></div>');
    
    jQuery('object').wrap('<div class="videoWrapper"></div>');
    
    jQuery('video').wrap('<div class="videoWrapper"></div>');
    
    jQuery('embed').wrap('<div class="videoWrapper"></div>');
});
