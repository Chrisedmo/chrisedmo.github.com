var isMobile;

// Identify if visitor on mobile with lame sniffing to remove parallaxing title
if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
) {
    isMobile = true;
}

$(document).ready(function() {

    // Global vars
    var $imgBanner = $('.blog-post.intro.image');
    var $bTitle = $('.intro.image h1');
    var $artSubtitle = $('header.main section .fixed p');
    var $artTime = $('header.main section .fixed time');
    var $nav = $('header.main nav');
    var windowScroll;


    // Identify if visitor has a large enough viewport for parallaxing title
    function isLargeViewport() {
        if ($nav.css('position') == "relative") {
            return false;
        } else {
            return true;
        }
    }

    // If large viewport and not mobile, parallax the title
    if (!isMobile) {
        $(window).scroll(function() {
            if (isLargeViewport()) {
                slidingTitle();
            }
        });
    }

    // Window gets large enough, need to recalc all parallaxing title values
    $(window).resize(function() {
        if (isLargeViewport()) {
            slidingTitle();
        }
    });

    // Functional parallaxing calculations
    function slidingTitle() {
        //Get scroll position of window
        windowScroll = $(this).scrollTop();

        //fade and blur the header iamge
        $imgBanner.css({
            // 'margin-top': -(windowScroll / 1) + "px",
            'opacity': 1 - (windowScroll / 350)
        });

        //Slowly parallax the background of .art-header
        $bTitle.css({
            // 'margin-top': +(-windowScroll / 1) + "px"
            '-webkit-transform': "translateY(" + (-windowScroll / 1) + "px)",
            // '-webkit-filter': "blur(" + (windowScroll / 60) + "px)"
        });

        //Fade the .nav out
        $nav.css({
            'opacity': 1 - (windowScroll / 100)
        });
    }

    // Link to top of page without changing URL
    $('.back-to-top a').click(function(e) {
        e.preventDefault();
        $(window).scrollTop(0);
    })

});