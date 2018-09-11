$(window).bind("load resize scroll",function(e) {
    var y = $(window).scrollTop();

    $(".parallax-bg-img").filter(function() {
        return $(this).offset().top < (y + $(window).height()) &&
               $(this).offset().top + $(this).height() > y;
    }).css('background-position', '0px ' + parseInt(-y / 6) + 'px');
});
