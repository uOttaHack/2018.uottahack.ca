//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > $('.navbar-nav').outerHeight()) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.navbar-nav').outerHeight()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//FAQ accordion JS
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

//MailChimp JS Function for the subscribe button
function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L){
        L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"0d17aed384fbbc8c0739e835b","lid":"8e7cdd5f11"}) })
    document.cookie = "MCEvilPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};

document.getElementById("open-popup").onclick = function() {
    showMailingPopUp()
};
