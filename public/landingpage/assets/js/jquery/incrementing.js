jQuery(function () {
    jQuery(".select_box_outer").click(function () {
        $(this).parent().find('input[type=radio]', this).prop("checked", true);
    });

    jQuery(".visibleAddressDiv").click(function () {
        if (!$('.addressBody1').is(':visible')) {
            $(this).parent().parent().parent().find('.addressBody1').css('display', 'block');
        } else {
            $(this).parent().parent().parent().find('.addressBody1').css('display', 'none');
        }
        if (!$('.addressBody2').is(':visible')) {
            $(this).parent().parent().parent().find('.addressBody2').css('display', 'block');
        } else {
            $(this).parent().parent().parent().find('.addressBody2').css('display', 'none');
        }
    });

    jQuery(".visibleTime").click(function () {
        if (!$('.timeBody1').is(':visible')) {
            $(this).parent().parent().find('.timeBody1').css('display', 'block');
        } else {
            $(this).parent().parent().find('.timeBody1').css('display', 'none');
        }

        if (!$('.timeBody2').is(':visible')) {
            $(this).parent().parent().find('.timeBody2').css('display', 'block');
        } else {
            $(this).parent().parent().find('.timeBody2').css('display', 'none');
        }
    });

    jQuery(".btn-number").click(function () {

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type === 'minus') {
                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) === input.attr('min')) {
                    $(this).attr('disabled', true);
                }
            } else if (type === 'plus') {
                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) === input.attr('max')) {
                    $(this).attr('disabled', true);
                }
            }
        } else {
            input.val(0);
        }
    });

    jQuery(".new_address").click(function () {
        var seloptions_province = $("select#province option:selected").val();
        var seloptions_district = $("select#district option:selected").val();
        var seloptions_city = $("select#city option:selected").val();
        var seloptions_address = $("textarea#address").val();

        if (seloptions_province === '0') {
            // $('form').submit(false);
            $("#error_province").css("display", "block");
        } else {
            $("#error_province").css("display", "none");
        }
        if (seloptions_district === '0') {
            // $('form').submit(false);
            $("#error_district").css("display", "block");
        } else {
            $("#error_district").css("display", "none");
        }

        if (seloptions_city === '0') {
            // $('form').submit(false);
            $("#error_city").css("display", "block");
        } else {
            $("#error_city").css("display", "none");
        }

        if (seloptions_address === '') {
            // $('form').submit(false);
            $("#error_address").css("display", "block");
        } else {
            $("#error_address").css("display", "none");
        }

        if (seloptions_address !== '' && seloptions_district !== '0') {
            $('form').submit();
            // window.location.reload();
        } else {
            event.preventDefault();
        }

    });

    jQuery(".order_address").click(function () {
        // var radio_time = $('input[name=time_id]:checked').val();
        // var radio_address = $('input[name=address_id]:checked').val();
        var radio_address = '';
        var radio_time = '';

        if ($('input#radio_time').is(':checked')) {
            radio_time = '1';
        } else {
            radio_time = '0';
        }

        if ($('input#radio_address').is(':checked')) {
            radio_address = '1';
        } else {
            radio_address = '0';
        }

        if (radio_time === '0') {
            $("#error_time").css("display", "block");
        } else {
            $("#error_time").css("display", "none");
        }

        if (radio_address === '0') {
            $("#error_address").css("display", "block");
        } else {
            $("#error_address").css("display", "none");
        }

        if (radio_time !== '0' && radio_address !== '0') {
            $('form').submit();
        } else {
            event.preventDefault();
        }

    });

    jQuery(".sonati").css('display', 'block');
    jQuery(".taftoon").css('display', 'none');
    jQuery(".fantezi").css('display', 'none');

    jQuery(".asiluxsonati").click(function () {
        $(".sonati").css('display', 'block');
        $(".taftoon").css('display', 'none');
        $(".fantezi").css('display', 'none');
    });

    jQuery(".asiluxtaftoon").click(function () {
        $(".sonati").css('display', 'none');
        $(".taftoon").css('display', 'block');
        $(".fantezi").css('display', 'none');
    });

    jQuery(".asiluxfantezi").click(function () {
        $(".sonati").css('display', 'none');
        $(".taftoon").css('display', 'none');
        $(".fantezi").css('display', 'block');
    });

});

