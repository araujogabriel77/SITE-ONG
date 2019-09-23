var height = $('.navbar').height();
//jQuery


// MENU MOBILE

$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.nav').toggleClass('active');
    })
});
// ADICINANDO BACKGROUND AO NAV AO DESCER A TELA
$(window).on('scroll', function () {
    if ($(window).scrollTop() > height - 20) {
        $('.nav-container').addClass('nav-color');
        $('.nav-container').addClass('navbar-fixed');
        $('.brand').addClass('brand-padd');
        $('.nav').removeClass('active');
    } else {
        $('.nav-container').removeClass('nav-color');
        $('.nav-container').removeClass('navbar-fixed');
        $('.brand').removeClass('brand-padd');
    }
});

$('.navbar a, .buttons a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 25
        }, 800);
    }
});