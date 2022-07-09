$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('#navBg').addClass('fixed-top bg-nav');
    }
    else {
        $('#navBg').removeClass('fixed-top bg-nav');
    }
});