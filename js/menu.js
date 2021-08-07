$(document).ready(function() {
    (function($) {
        $('#header__icon').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('with--sidebar');
        });

        $('#site-cache').click(function(e) {
            $('body').removeClass('with--sidebar');
        });


    })(jQuery);

    $(".fa-caret-right").click(function() {
        // kiểm tra mũi tên xổ xuống
        if ($(this).hasClass("fa-caret-right")) {
            $(this).removeClass("fa-caret-right").addClass("fa-caret-down");
        } else {
            $(this).removeClass("fa-caret-down").addClass("fa-caret-right");
        }

        // sự kiện menu xổ xuống
        $(this).next("ul").slideToggle();

        // đóng các menu đang xổ khi click menu kế tiếp
        var close_ul = $(this).parent().siblings().find("ul");

        var node = $(this).parent().siblings().find("i");
        if (node.hasClass("fa-caret-down")) {
            console.log("down");
            node.removeClass("fa-caret-down").addClass("fa-caret-right");
        }

        close_ul.slideUp("500");
    })
});

//
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});