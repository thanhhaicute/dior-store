$(document).ready(function () {
    $('.nav_ul li').click(function () {
        $('.nav_ul li').removeClass('active');
        $(this).addClass('active');
    });
    return false;
})