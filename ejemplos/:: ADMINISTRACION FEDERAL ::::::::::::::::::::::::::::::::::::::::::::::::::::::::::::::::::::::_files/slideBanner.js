function slideSwitch() {
    var $active = $('#slideshowBanners DIV.active');

    if ( $active.length == 0 ) $active = $('#slideshowBanners DIV:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshowBanners DIV:first');

    // uncomment below to pull the divs randomly
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});