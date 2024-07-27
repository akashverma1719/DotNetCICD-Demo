$(document).ready(function () {
    $(".btn1").click(function () {
        $('.financial_section').show();
        $('.physical_section').hide();
        $(".btn1").addClass("tab-active");
        $(".btn2").removeClass("tab-active");
    });
    $(".btn2").click(function () {
        $('.physical_section').show();
        $('.financial_section').hide();
        $(".btn2").addClass("tab-active");
        $(".btn1").removeClass("tab-active");
    });
});