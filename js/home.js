/**
 *
 */
$(document).ready(function () {
    $('.head').load('head.html');
});

function login(val) {
    if (val=='xs'){
        $("#before_logging_xs").removeClass("visible-xs-block");
        $("#before_logging_xs").css('display','none');
        $("#after_logging_xs").css('display','');
        $("#after_logging_xs").addClass('visible-xs-block');
    } else if (val=='md'){
        $("#before_logging").css('display','none');
        $("#after_logging").css('display','block');
    }
}