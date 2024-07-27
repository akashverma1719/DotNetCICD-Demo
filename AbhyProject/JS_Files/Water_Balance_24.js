var lat = 0;
var long = 0;
$(document).ready(function () {
    getLocation();
    Info();

});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    lat = position.coords.latitude;
    long = position.coords.longitude;
}

var wb_sw_utili = 0, wb_gw_utili = 0;
var Domestic_Total = 0, domestic_demand_surface_water = 0, domestic_demand_ground_water = 0;
var Irrigated_Total = 0, irri_utili_surface_water = 0, irri_utili_ground_water = 0;

function Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/Water_Domestic_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                /* window.location = "/WSP_2024_25/Water_Draft_report";*/
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }


            if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    if (response[i].domestic_demand_surface_water_total_value != null && response[i].domestic_demand_surface_water_total_value != "") {
                        domestic_demand_surface_water += parseFloat(response[i].domestic_demand_surface_water_total_value);

                    }
                    if (response[i].domestic_demand_ground_water_total_value != null && response[i].domestic_demand_ground_water_total_value != "") {
                        domestic_demand_ground_water += parseFloat(response[i].domestic_demand_ground_water_total_value);

                    }

                }



                Domestic_Total = parseFloat(domestic_demand_surface_water) + parseFloat(domestic_demand_ground_water);



            }

            Info1();

        }
    });
}

function Info1() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterDraftInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                /*window.location = "/WSP_2024_25/Water_Draft_report";*/
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }


            if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    if (response[i].irri_utili_surface_water != null && response[i].irri_utili_surface_water != "") {
                        irri_utili_surface_water += parseFloat(response[i].irri_utili_surface_water);

                    }

                    if (response[i].irri_utili_ground_water != null && response[i].irri_utili_ground_water != "") {
                        irri_utili_ground_water += parseFloat(response[i].irri_utili_ground_water);

                    }
                }



                Irrigated_Total = irri_utili_surface_water + irri_utili_ground_water;

                wb_sw_utili = parseFloat(domestic_demand_ground_water) + irri_utili_surface_water;

                /* $('#wb_sw_utili').val(wb_sw_utili.toFixed(2));*/
            }

            Industry_Info();

        }
    });

}


var Industry_Total = 0, industry_demand_surface_water = 0, industry_demand_ground_water = 0;

function Industry_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterIndustry_Info_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {


            if (response == "Error") {
                window.location = "/WspNew/WspDraft";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                for (var j = 0; j < response.length; j++) {


                    if (response[j].industry_demand_surface_water != null && response[j].industry_demand_surface_water != "") {
                        industry_demand_surface_water += parseFloat(response[j].industry_demand_surface_water);
                    }
                    if (response[j].industry_demand_ground_water != null && response[j].industry_demand_ground_water != "") {
                        industry_demand_ground_water += parseFloat(response[j].industry_demand_ground_water);
                    }

                }
            }


            Other_Usage_Info();
        }
    });
}
var Other_Total = 0, other_demand_ground_water = 0, other_demand_surface_water = 0;


function Other_Usage_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterOther_Usage_Info_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                /* window.location = "/WspNew/WspDraft";*/
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var tr = '';


            if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {

                    if (response[i].other_demand_ground_water != null && response[i].other_demand_ground_water != "") {
                        other_demand_ground_water += parseFloat(response[i].other_demand_ground_water);
                    }
                    if (response[i].other_demand_surface_water != null && response[i].other_demand_surface_water != "") {
                        other_demand_surface_water += parseFloat(response[i].other_demand_surface_water);
                    }

                }
            }



            var domestic_demand_ground_water1 = parseFloat(domestic_demand_ground_water);
            var domestic_demand_surface_water1 = parseFloat(domestic_demand_surface_water);
            var Total_Domestic = domestic_demand_ground_water1 + domestic_demand_surface_water1;

            Industry_Total = industry_demand_surface_water + industry_demand_ground_water;



            Other_Total = other_demand_ground_water + other_demand_surface_water;

            wb_gw_utili = parseFloat(domestic_demand_surface_water) + parseFloat(irri_utili_ground_water) + parseFloat(industry_demand_ground_water) + parseFloat(other_demand_ground_water);

            //$('#wb_gw_utili').val(wb_gw_utili.toFixed(2));
            //var wb_total_utili = parseFloat(wb_sw_utili) + parseFloat(wb_gw_utili);
            //$('#wb_total_utili').val(wb_total_utili.toFixed(2));
            Info11();

        }
    });
}


var wb_sw_avail = 0, wb_gw_avail = 0;
function Info11() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                //window.location = "/WspNew/WspBalance";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {

                    if (response[i].total_sirface_water != null && response[i].total_sirface_water != "") {
                        wb_sw_avail += parseFloat(response[i].total_sirface_water);

                    }

                    if (response[i].tot_grd_wat_avail != null && response[i].tot_grd_wat_avail != "") {

                        wb_gw_avail += parseFloat(response[i].tot_grd_wat_avail);
                    }

                }
                var wb_total_avail = wb_sw_avail + wb_gw_avail;
                $('#wb_sw_avail').val(wb_sw_avail.toFixed(2));
                $('#wb_gw_avail').val(wb_gw_avail.toFixed(2));
                $('#wb_total_avail').val(wb_total_avail.toFixed(2));
            }
            Info12();
            Cal();
        }
    });

}

var wb_sw_utilization = 0, wb_gw_utilization = 0;
function Info12() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterUtilization/WaterutilizationInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Error") {
                //window.location = "/WspNew/WspBalance";
            }
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (data.length != 0) {

                //alert(data);
                const response = data.split(',');
                if (response[0] != "" && response[0]) {
                    $('#wb_sw_utili').val(response[0]);
                }
                if (response[1] != "" && response[1]) {
                    $('#wb_gw_utili').val(response[1]);
                }

                $('#wb_total_utili').val((parseFloat(response[0]) + parseFloat(response[1])).toFixed(2));
            }

            Cal();
        }
    });

}

function Cal() {

    var WA_SW = $('#wb_sw_avail').val();
    var WB_SW = $('#wb_sw_utili').val();
    if (WA_SW != "" && WA_SW != null) {

    } else {
        WA_SW = "0";
    }
    if (WB_SW != "" && WB_SW != null) {

    } else {
        WB_SW = "0";
    }
    var wb_sw_balance = parseFloat(WA_SW) - parseFloat(WB_SW);

    if (wb_sw_balance != 0) {
        $('#wb_sw_balance').val(wb_sw_balance.toFixed(2));
    }
    else {
        $('#wb_sw_balance').val(0);
    }

    var WA_GW = $('#wb_gw_avail').val();
    var WB_GW = $('#wb_gw_utili').val();
    if (WA_GW != "" && WA_GW != null) {

    } else {
        WA_GW = "0";
    }
    if (WB_GW != "" && WB_GW != null) {

    } else {
        WB_GW = "0";
    }

    var wb_gw_balance = parseFloat(WA_GW) - parseFloat(WB_GW);
    if (wb_gw_balance != 0) {
        $('#wb_gw_balance').val(wb_gw_balance.toFixed(2));
    }
    else {
        $('#wb_gw_balance').val(0);
    }


    var WA_Total = $('#wb_sw_balance').val();
    var WB_Total = $('#wb_gw_balance').val();

    if (WA_Total != "" && WA_Total != null) {

    } else {
        WA_Total = "0";
    }
    if (WB_Total != "" && WB_Total != null) {

    } else {
        WB_Total = "0";
    }


    var wb_total_balance = parseFloat(WA_Total) + parseFloat(WB_Total);
    $('#wb_total_balance').val(wb_total_balance.toFixed(2));

}

function SaveInfo() {

    $('#SAVE_BTN').prop('disabled', true);
    var obj = {};
    obj.latitude = lat;
    obj.longitude = long;

    var wb_sw_avail = $('#wb_sw_avail').val();
    obj.wb_sw_avail = wb_sw_avail;

    var wb_gw_avail = $('#wb_gw_avail').val();
    obj.wb_gw_avail = wb_gw_avail;

    var wb_sw_utili = $('#wb_sw_utili').val();
    obj.wb_sw_utili = wb_sw_utili;

    var wb_total_avail = $('#wb_total_avail').val();
    obj.wb_total_avail = wb_total_avail;

    var wb_gw_utili = $('#wb_gw_utili').val();
    obj.wb_gw_utili = wb_gw_utili;

    var wb_total_utili = $('#wb_total_utili').val();
    obj.wb_total_utili = wb_total_utili;


    var wb_sw_balance = $('#wb_sw_balance').val();
    obj.wb_sw_balance = wb_sw_balance;


    var wb_gw_balance = $('#wb_gw_balance').val();
    obj.wb_gw_balance = wb_gw_balance;

    var wb_total_balance = $('#wb_total_balance').val();
    obj.wb_total_balance = wb_total_balance;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25/WaterBalanceInfo__InsertData_new",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            //alert(response);

            $('#SAVE_BTN').prop('disabled', false);
            document.getElementById('ERRor1').innerHTML = response;
            $('#ERRor1').css('display', 'block');
            $('#ERRor1').fadeIn(5000, function () {

            });
            $('#ERRor1').fadeOut(5000, function () {

            });
            alert(response);
        }
    });
}