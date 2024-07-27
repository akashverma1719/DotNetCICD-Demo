$(document).ready(function () {
    Get_sprinkler_data();

});
function Get_sprinkler_data() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/wsp_WaterAvailability/GetDefaultData",
        dataType: 'JSON',
        success: function (data) {

            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $('#trans_wat_ogp').val(data[i].gp_area_ham);
                    $('#sw_evapo').val(data[i].evt_mm);
                }
            }
        }
    });
}