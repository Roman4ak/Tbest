$(document).ready(function () {
    if ($(window).width() > 992) {
        $('body').on('mouseover', 'header .main_header_info', function () {
            $('body').addClass('menu_open');
        });
        $('body').on('mouseleave', 'header .main_header_info', function () {
            $('body').removeClass('menu_open');
        });
    } else {
        $('body').on('click', function (e) {
            if ($(e.target).is('header .main_header_info') || $('header .main_header_info').has(e.target).length > 0) {} else {
                if ($(e.target).is('header .sub_menu') || $('header .sub_menu').has(e.target).length > 0) {} else {
                    $('header .sub_menu').removeClass('active');
                    $('body').removeClass('menu_open');
                }
            }

        });

        $("header .main_header_info").click(function (e) {
            e.preventDefault();
            $(this).find('.sub_menu').addClass("active");
            $('body').addClass('menu_open');
        });


    }

    $("header .burger").click(function () {
        $(this).toggleClass("active");
        $("header .header_info").toggleClass("active");
    });

    const swiper = new Swiper('.impressions_info .swiper-container', {
        speed: 900,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.impressions_info .left_arrow',
            prevEl: '.impressions_info .right_arrow',
        },
    });

    $('.faq_answer_title').click(function(event) {
		if($('.faq_answer_list').hasClass('one')){
			$('.faq_answer_title').not($(this)).removeClass('active');
			$('.faq_answer_text').not($(this).next()).slideUp(300);
		}
        $(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});
});