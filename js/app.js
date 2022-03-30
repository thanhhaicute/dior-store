$(document).ready(function () {
    $('.nav_ul li').click(function () {
        $('.nav_ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('.btn_cart').click(function () {
        $('.cart').hide();
        $('.payment').css('display', "grid");

    });
    $('.return').click(function () {
        $('.payment').hide();
        $('.cart').css('display', "grid");

    });
    return false;
})