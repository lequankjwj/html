$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $('#myHeader').addClass('sticky');

    } else {
        $('#myHeader').removeClass('sticky');

    }
});

/*******************************
 * ACCORDION WITH TOGGLE ICONS
 *******************************/
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);



$(function() {
    $('.bt_menu').on('click',
        function(event) {
            event.stopPropagation();
            $('.menu').toggleClass('menuToggle_op');
        });
    $('bt_menu').click(function() {
        $('.menu').removeClass('menuToggle_op');

    });
});



jQuery(document).ready(function() {
    $('.backTop').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.backTop').fadeIn(100)
        } else {
            $('.backTop').fadeOut()
        }
    });
});
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});


const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
    activeImage.src = e.target.src;
}

function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}