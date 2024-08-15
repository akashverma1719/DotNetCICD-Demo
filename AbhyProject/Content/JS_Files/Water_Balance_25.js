

function Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25_update/WaterBalanceData',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                //window.location = "/WspNew/WspBalance";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            
            if (response.length != 0) {
                $('#wb_sw_avail').val(response.wb_sw_avail.toFixed(4));
                $('#wb_gw_avail').val(response.wb_gw_avail.toFixed(4));
                $('#wb_total_avail').val(response.wb_total_avail.toFixed(4));
                $('#wb_gw_utili').val(response.wb_gw_utili.toFixed(4));
                $('#wb_sw_utili').val(response.wb_sw_utili.toFixed(4));
                $('#wb_total_utili').val(response.wb_total_utili.toFixed(4));
                $('#wb_gw_balance').val(response.wb_gw_balance.toFixed(4));
                $('#wb_sw_balance').val(response.wb_sw_balance.toFixed(4));
                $('#wb_total_balance').val(response.wb_total_balance.toFixed(4));
                $(".loader").hide();
            }
            $(".loader").hide();
        }
    });
}
