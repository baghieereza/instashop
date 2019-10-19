jQuery(document).ready(function ($) {

    var primary_color = 'd7a24f';

    //Function to convert rgb format to a hex color
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }

    $('.primary-color .box').click(function () {

        var thiscolor = $(this).css('background-color');

        primary_color = rgb2hex(thiscolor);
        primary_color = primary_color.replace("#", "");

        var linkcss = 'http://effortthemes.com/wp/meson/wp-content/themes/meson/';

        $('link[rel*=jquery]').remove();

        $('head').append('<link rel="stylesheet jquery" href="' + linkcss + 'css/color.php?main_color=' + primary_color + '" type="text/css" />');

        return false;

    });


    if ($.cookie('boxed') == "yes") {

        $("body").addClass("boxed");

    }


    if ($.cookie('boxed') == "no") {

        $("body").removeClass("boxed");

    }

});


jQuery(document).ready(function ($) {

    $("#boxed").click(function (e) {

        e.preventDefault();

        $('body').addClass("boxed");

        $.cookie('boxed', 'yes', {expires: 7, path: '/'});

        return false;

    });

    $("#full").click(function (e) {

        e.preventDefault();

        $('.page-wrapper').removeClass("boxed");

        $.cookie('boxed', 'no', {expires: 7, path: '/'});

        return false;

    });

});


jQuery(document).ready(function ($) {

    $(".switcher .fa-cog").click(function (e) {

        e.preventDefault();

        $(".switcher").toggleClass("active");

    });

});