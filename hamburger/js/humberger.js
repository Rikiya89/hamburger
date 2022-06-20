'use strict';
{
    $(function () {
        $('.menu-trigger').on('click', function () {
            // $('.menu-trigger').toggleClass('active');
            $(this).toggleClass('active');
            $('#global-nav').toggleClass('active');
        });
        $('#global-nav a').on('click', function () {
            $('.menu-trigger').removeClass('active');
            $('#global-nav').removeClass('active');
        });
    })
}