$(document).ready(function() {
    $('.form-control').change(function() {
        var hey = $('.val-check-1').val();
        console.log(hey);
        var empty = false;
        $('.form-control').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('.button-sbmit').attr('disabled', 'disabled');
        } else {
            $('.button-sbmit').removeAttr('disabled');
        }
    });
});
    

    