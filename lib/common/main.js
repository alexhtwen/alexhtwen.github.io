/* jshint esversion: 8 */

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    function updateScrollingView() {
        const scrollValue = $(window).scrollTop();
        if (scrollValue > 100) {
            $('#indexNav').addClass('affix');
            $('#mainNav').addClass('affix');
            $('#mainPic>.jumbotron').addClass('affix');
        } else {
            $('#indexNav').removeClass('affix');
            $('#mainNav').removeClass('affix');
            $('#mainPic>.jumbotron').removeClass('affix');
        }
    }
    updateScrollingView();

    $(window).on('scroll', () => {
        updateScrollingView();
    });

    $(".nav-button").click(function () {
        $(this).toggleClass('active');
        $('.navbar-list').toggleClass('active');
        $('.navbar-default').toggleClass('active');
    });


    $(".navbar-list a").click(function () {
        $(".nav-button").removeClass('active');
        $('.navbar-list').removeClass('active');
        $('.navbar-default').removeClass('active');
    });

    // 縮放或滑動時取消以下個件active的類別
    $(window).bind('scroll resize', function () {
        $(".nav-button").removeClass('active');
        $('.navbar-list').removeClass('active');
        $('.navbar-default').removeClass('active');
    });

    new WOW().init();
});