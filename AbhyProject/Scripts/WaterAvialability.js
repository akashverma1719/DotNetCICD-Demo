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
var GPAREA = 0;
function Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterAvailabilty_GPAREA_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WspNew/WspWaterAvailability";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                if (response[0].gp_area != null) {
                    GPAREA = GPAREA + parseFloat(response[0].gp_area);
                }
            }

            Info1();
        }
    });
}


function Info1() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WspNew/WspWaterAvailability";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                if (response[0].gw_rainfall_monsoon != null && response[0].gw_rainfall_monsoon != "") {
                    $('#gw_rainfall_monsoon').val(parseFloat(response[0].gw_rainfall_monsoon).toFixed(2));
                }
                if (response[0].gw_rainfall_nonmonsoon != null && response[0].gw_rainfall_nonmonsoon != "") {
                    $('#gw_rainfall_nonmonsoon').val(parseFloat(response[0].gw_rainfall_nonmonsoon).toFixed(2));
                }
                if (response[0].gw_rainfal_tol_recharge != null && response[0].gw_rainfal_tol_recharge != "") {
                    $('#gw_rainfal_tol_recharge').val(parseFloat(response[0].gw_rainfal_tol_recharge).toFixed(2));
                }

                if (response[0].gw_other_monsoon != null && response[0].gw_other_monsoon != "") {
                    $('#gw_other_monsoon').val(parseFloat(response[0].gw_other_monsoon).toFixed(2));
                }
                if (response[0].gw_other_nonmonsoon != null && response[0].gw_other_nonmonsoon != "") {
                    $('#gw_other_nonmonsoon').val(parseFloat(response[0].gw_other_nonmonsoon).toFixed(2));
                }

                if (response[0].gw_other_tol_recharge != null && response[0].gw_other_tol_recharge != "") {
                    $('#gw_other_tol_recharge').val(parseFloat(response[0].gw_other_tol_recharge).toFixed(2));
                }

                if (response[0].total_gw_available != null && response[0].total_gw_available != "") {

                    $('#total_gw_available').text(parseFloat(response[0].total_gw_available).toFixed(2));
                }

                if (response[0].sw_annual_rainfall != null && response[0].sw_annual_rainfall != "") {

                    $('#sw_annual_rainfall').val(parseFloat(response[0].sw_annual_rainfall).toFixed(2));
                }

                if (response[0].sw_tol_water_avail != null && response[0].sw_tol_water_avail != "") {

                    $('#sw_tol_water_avail').val(parseFloat(response[0].sw_tol_water_avail).toFixed(2));
                }

                if (response[0].sw_evapo != null && response[0].sw_evapo != "") {

                    $('#sw_evapo').val(parseFloat(response[0].sw_evapo).toFixed(2));
                }

                if (response[0].sw_evapo_loses != null && response[0].sw_evapo_loses != "") {

                    $('#sw_evapo_loses').val(parseFloat(response[0].sw_evapo_loses).toFixed(2));
                }

                if (response[0].total_gw_racharge != null && response[0].total_gw_racharge != "") {

                    $('#total_gw_racharge').text(parseFloat(response[0].total_gw_racharge).toFixed(2));
                }

                if (response[0].total_sw_availble != null && response[0].total_sw_availble != "") {

                    $('#total_sw_availble').text(parseFloat(response[0].total_sw_availble).toFixed(2));
                }

                //new columns added

                if (response[0].noof_sw_storage_structures != null && response[0].noof_sw_storage_structures != "") {

                    $('#noof_sw_storage_structures').val(parseFloat(response[0].noof_sw_storage_structures).toFixed(2));
                }

                if (response[0].total_storage_capacity != null && response[0].total_storage_capacity != "") {

                    $('#total_storage_capacity').val(parseFloat(response[0].total_storage_capacity).toFixed(2));
                }
                if (response[0].sw_available_for_use != null && response[0].sw_available_for_use != "") {

                    $('#sw_available_for_use').val(parseFloat(response[0].sw_available_for_use).toFixed(2));
                }
                if (response[0].volume_of_runoff != null && response[0].volume_of_runoff != "") {

                    $('#volume_of_runoff').text(parseFloat(response[0].volume_of_runoff).toFixed(2));
                }


                if (response[0].natural_losses != null && response[0].natural_losses != "") {

                    $('#natural_losses').val(parseFloat(response[0].natural_losses).toFixed(2));
                }

                if (response[0].total_water_avaliable_utiilization != null && response[0].total_water_avaliable_utiilization != "") {

                    $('#total_water_avaliable_utiilization').text(parseFloat(response[0].total_water_avaliable_utiilization).toFixed(2));
                }
                if (response[0].loss_percentage != null && response[0].loss_percentage != "") {

                    $('#loss_percentage').val(parseFloat(response[0].loss_percentage).toFixed(2));
                }
                if (response[0].weighted_avg_runoff != null && response[0].weighted_avg_runoff != "") {

                    $('#weighted_avg_runoff').val(parseFloat(response[0].weighted_avg_runoff).toFixed(2));
                }
                else {
                    $('#weighted_avg_runoff').val("0.30");
                }
                //SurfaceWaterCalculation();

                Call();
            }
            else {
                $('#weighted_avg_runoff').val("0.30");
            }

            SurfaceWaterCalculation();

            total_gw_available1();
            Volume_of_Runoff();

            if (DPMU_Level_Count == 1) {
                DPMU_Submission();
            }
        }
    });

}



function SaveSurfaceWater_info() {
    
    $('#SAVE_BTN').prop('disabled', true);
    var latitude = lat;
    var longitude = long;

    var gw_rainfall_monsoon = $('#gw_rainfall_monsoon').val();
    var gw_rainfall_nonmonsoon = $('#gw_rainfall_nonmonsoon').val();
    var gw_rainfal_tol_recharge = $('#gw_rainfal_tol_recharge').val();

    var gw_other_monsoon = $('#gw_other_monsoon').val();
    var gw_other_nonmonsoon = $('#gw_other_nonmonsoon').val();
    var gw_other_tol_recharge = $('#gw_other_tol_recharge').val();
    var total_gw_available = $('#total_gw_available').text();

    var sw_annual_rainfall = $('#sw_annual_rainfall').val();
    var sw_tol_water_avail = $('#sw_tol_water_avail').val();
    var sw_evapo = $('#sw_evapo').val();
    var sw_evapo_loses = $('#sw_evapo_loses').val();
    // var  total_gw_racharge = $('#total_gw_racharge').text();
    var total_sw_availble = $('#total_sw_availble').text();

    //new columns 
    var noof_sw_storage_structures = $('#noof_sw_storage_structures').val();
    var total_storage_capacity = $('#total_storage_capacity').val();
    var sw_available_for_use = $('#sw_available_for_use').val();
    var volume_of_runoff = $('#volume_of_runoff').text();

    var natural_losses = $('#natural_losses').val();
    var loss_percentage = $('#loss_percentage').val();
    var total_water_avaliable_utiilization = $('#total_water_avaliable_utiilization').text();

    var utilizable_rainfall_runoff = $('#utilizable_rainfall_runoff').text();
    var weighted_avg_runoff = $('#weighted_avg_runoff').val();


    $.ajax({
        url: "/Wsp_new/WaterAvailabiltyInfo__InsertData",
        type: "POST",
        data: function () {
            var data = new FormData();
            data.append("gw_rainfall_monsoon", gw_rainfall_monsoon);
            data.append("latitude", lat);
            data.append("longitude", long);
            data.append("gw_rainfall_nonmonsoon", gw_rainfall_nonmonsoon);
            data.append("gw_rainfal_tol_recharge", gw_rainfal_tol_recharge);
            data.append("gw_other_monsoon", gw_other_monsoon);
            data.append("gw_other_nonmonsoon", gw_other_nonmonsoon);
            data.append("gw_other_tol_recharge", gw_other_tol_recharge);
            data.append("total_gw_available", total_gw_available);
            data.append("sw_annual_rainfall", sw_annual_rainfall);
            data.append("sw_tol_water_avail", sw_tol_water_avail);
            data.append("sw_evapo", sw_evapo);
            data.append("sw_evapo_loses", sw_evapo_loses);
            //data.append("total_gw_racharge", total_gw_racharge);
            data.append("total_sw_availble", total_sw_availble);
            //new columns
            data.append("noof_sw_storage_structures", noof_sw_storage_structures);
            data.append("total_storage_capacity", total_storage_capacity);
            data.append("sw_available_for_use", sw_available_for_use);
            data.append("volume_of_runoff", volume_of_runoff);
            //new Colums
            data.append("natural_losses", natural_losses);
            data.append("loss_percentage", loss_percentage);
            data.append("total_water_avaliable_utiilization", total_water_avaliable_utiilization);
            data.append("utilizable_rainfall_runoff", utilizable_rainfall_runoff);
            data.append("weighted_avg_runoff", weighted_avg_runoff);
            
            return data;
        }(),
        contentType: false,
        processData: false,
        success: function (response) {
            
            $('#ERRor1').text(response);
            if (response != "Successfully Saved" && response != "Please Enter Weighted Average Runoff Coefficient") {
                window.location = "/Error/DefaultError";
            }
            $('#SAVE_BTN').prop('disabled', false);
        },
        error: function (jqXHR, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });


    //$.ajax({
    //    type: 'POST',
    //    contentType: 'application/json; chatset=utf-8',
    //    url: "/Wsp_new/WaterAvailabiltyInfo__InsertData",
    //    data: "{'Data': '" + JSON.stringify(obj) + "'}",
    //    dataType: 'JSON',
    //    success: function (response) {
    //        //alert(response);
    //        $('#ERRor1').text(response);
    //    }
    //});



}
var total_gw_available = 0;
function total_gw_available1() {
    total_gw_available = 0;
    var gw_rainfal_tol_recharge = $('#gw_rainfal_tol_recharge').val();
    var gw_other_tol_recharge = $('#gw_other_tol_recharge').val();
    var natural_losses = $('#natural_losses').val();
    if (gw_rainfal_tol_recharge == "") {
        gw_rainfal_tol_recharge = 0;
    }
    if (gw_other_tol_recharge == "") {
        gw_other_tol_recharge = 0;
    }
    if (natural_losses == "") {
        natural_losses = 0;
    }
    //mohan
    var gw_rainfal_tol_recharge1 = parseFloat(gw_rainfal_tol_recharge);
    var gw_other_tol_recharge1 = parseFloat(gw_other_tol_recharge);
    var natural_losses1 = parseFloat(natural_losses);

    var total = ((gw_rainfal_tol_recharge1 + gw_other_tol_recharge1) - (natural_losses1));
    $('#total_gw_available').text(parseFloat(total).toFixed(2));


}

$("#gw_rainfall_monsoon,#gw_rainfall_nonmonsoon,#natural_losses").on("keydown keyup", function () {
    S1();
});

function S1() {
    var gw_rainfall_monsoon = 0;
    var gw_rainfall_nonmonsoon = 0;
    gw_rainfall_monsoon = $("#gw_rainfall_monsoon").val();
    if (gw_rainfall_monsoon == "") {
        gw_rainfall_monsoon = 0;
    }
    gw_rainfall_nonmonsoon = $("#gw_rainfall_nonmonsoon").val();
    if (gw_rainfall_nonmonsoon == "") {
        gw_rainfall_nonmonsoon = 0;
    }
    //mohan
    var total = parseFloat(gw_rainfall_nonmonsoon) + parseFloat(gw_rainfall_monsoon);
    $('#gw_rainfal_tol_recharge').val(parseFloat(total).toFixed(2));

    total_gw_available1();
}
$("#gw_other_monsoon,#gw_other_nonmonsoon,#natural_losses").on("keydown keyup", function () {
    S2();

});

function S2() {

    var gw_other_monsoon = 0;
    var gw_other_nonmonsoon = 0;
    gw_other_monsoon = $("#gw_other_monsoon").val();
    if (gw_other_monsoon == "") {
        gw_other_monsoon = 0;
    }
    gw_other_nonmonsoon = $("#gw_other_nonmonsoon").val();
    if (gw_other_nonmonsoon == "") {
        gw_other_nonmonsoon = 0;
    }

    var total = parseFloat(gw_other_monsoon) + parseFloat(gw_other_nonmonsoon);
    $('#gw_other_tol_recharge').val(parseFloat(total).toFixed(2));
    total_gw_available1();
}


$("#sw_annual_rainfall,#sw_evapo").on("keydown keyup", function () {


    SurfaceWaterCalculation();

});

function SurfaceWaterCalculation() {

    
    var gw_rainfal_tol_recharge = 0;
    var gw_other_tol_recharge = 0;

    var gw_rainfall_monsoon = $('#gw_rainfall_monsoon').val();
    var gw_rainfall_nonmonsoon = $('#gw_rainfall_nonmonsoon').val();

    if (gw_rainfall_monsoon != "" && gw_rainfall_nonmonsoon != "") {
        gw_rainfal_tol_recharge = parseFloat(gw_rainfall_monsoon) + parseFloat(gw_rainfall_nonmonsoon);
        $('#gw_rainfal_tol_recharge').val(gw_rainfal_tol_recharge.toFixed(2));
    }


    var gw_other_monsoon = $('#gw_other_monsoon').val();
    var gw_other_nonmonsoon = $('#gw_other_nonmonsoon').val();

    if (gw_other_monsoon != "" && gw_other_nonmonsoon != "") {
        gw_other_tol_recharge = parseFloat(gw_other_monsoon) + parseFloat(gw_other_nonmonsoon);
        $('#gw_other_tol_recharge').val(gw_other_tol_recharge.toFixed(2));
    }
    //mohan 111
    var natural_losses = $('#natural_losses').val();
    if (natural_losses == "") {
        natural_losses = 0;
    }
    var total_gw_available = 0;

    if (gw_rainfal_tol_recharge != "" && gw_other_tol_recharge != "" && natural_losses != "") {
        total_gw_available = parseFloat(gw_rainfal_tol_recharge) + parseFloat(gw_other_tol_recharge) - parseFloat(natural_losses);
        $('#total_gw_available').text(total_gw_available.toFixed(2));
    }

    //total_gw_available

    var sw_annual_rainfall = $("#sw_annual_rainfall").val();
    var sw_evapo = $("#sw_evapo").val();
    var sw_tol_water_avail = 0;

    if (sw_annual_rainfall != "") {
        sw_tol_water_avail = parseFloat(sw_annual_rainfall) * parseFloat(GPAREA) * 0.001;
        $('#sw_tol_water_avail').val(parseFloat(sw_tol_water_avail).toFixed(2));
    }
    else {
        $('#sw_tol_water_avail').val(0);
    }
    var sw_evapo_loses = 0;
    if (sw_evapo != "") {
        sw_evapo_loses = parseFloat(sw_evapo) * parseFloat(GPAREA) * 0.001;
        $('#sw_evapo_loses').val(parseFloat(sw_evapo_loses).toFixed(2));
    }
    else {
        $('#sw_evapo_loses').val(0);
    }


    total_gw_available = $('#total_gw_available').text();
    if (total_gw_available == "") {
        total_gw_available = 0;
    }
    var sw_evapo_loses = 0;
    var total_sw_availble = 0;


    $('#total_gw_racharge').text(total_gw_available);
    sw_evapo_loses = $('#sw_evapo_loses').val();
    if (sw_evapo_loses == "") {
        sw_evapo_loses = 0;
    }
    var twa = $('#sw_tol_water_avail').val();
    if (twa != "") {
        twa = 0;
    }
    
    total_sw_availble = parseFloat(sw_tol_water_avail.toFixed(2)) - (parseFloat(sw_evapo_loses));
    $('#total_sw_availble').text(parseFloat(total_sw_availble).toFixed(2));

}


$("#noof_sw_storage_structures,#total_storage_capacity,#loss_percentage,#sw_annual_rainfall,#sw_evapo,#gw_rainfall_monsoon,#gw_rainfall_nonmonsoon,#gw_other_monsoon,#natural_losses").on("keydown keyup", function () {


    Volume_of_Runoff();

});

function Volume_of_Runoff() {



    var noof_sw_storage_structures = $('#noof_sw_storage_structures').val();
    if (noof_sw_storage_structures == "") {
        noof_sw_storage_structures = 0;
    }

    var total_storage_capacity = $('#total_storage_capacity').val();
    if (total_storage_capacity == "") {
        total_storage_capacity = 0;

    }
    var Losses_if_any = $('#loss_percentage').val();
    if (Losses_if_any == "") {
        Losses_if_any = 0;

    }
    var Surface_Water_Available = parseFloat(total_storage_capacity) - (parseFloat(total_storage_capacity) * parseFloat(Losses_if_any) / 100);
    $('#sw_available_for_use').val(Surface_Water_Available.toFixed(2));
    var sw_available_for_use = $('#sw_available_for_use').val();
    if (sw_available_for_use == "") {
        ss
        sw_available_for_use = 0;
    }
    var total_Wter_Availabilty = $('#total_sw_availble').text();
    var total_GroundWater_Availabilty = $('#total_gw_available').text();
    if (total_Wter_Availabilty == "") {
        total_Wter_Availabilty = 0;
    }

    if (total_GroundWater_Availabilty == "") {
        total_GroundWater_Availabilty = 0;
    }
    var Total_Water_Available_for_Utilization = parseFloat(total_GroundWater_Availabilty) + parseFloat(sw_available_for_use);
    $('#total_water_avaliable_utiilization').text(parseFloat(Total_Water_Available_for_Utilization).toFixed(2));

    //mohan 123333

    var Value_RunOff = parseFloat(total_Wter_Availabilty) - parseFloat(Total_Water_Available_for_Utilization);



    $('#volume_of_runoff').text(parseFloat(Value_RunOff).toFixed(2));

    var weighted_avg_runoff = $('#weighted_avg_runoff').val();
    if (weighted_avg_runoff == "") {
        weighted_avg_runoff = 0.30;
    }
    var utilizable_rainfall_runoff = parseFloat(Value_RunOff) * parseFloat(weighted_avg_runoff);

    //  $('#Utilizable_Rainfall_Runof_').text(parseFloat(Utilizable_Rainfall_Runof).toFixed(2));
    document.getElementById("utilizable_rainfall_runoff").innerHTML = parseFloat(utilizable_rainfall_runoff).toFixed(2);


}







function Call() {
    //total_gw_available

    var sw_annual_rainfall = $("#sw_annual_rainfall").val();
    var sw_evapo = $("#sw_evapo").val();
    var sw_tol_water_avail = 0;

    if (sw_annual_rainfall != "") {
        sw_tol_water_avail = parseFloat(sw_annual_rainfall) * parseFloat(GPAREA) * 0.001;
        $('#sw_tol_water_avail').val(parseFloat(sw_tol_water_avail).toFixed(2));
    }
    else {
        $('#sw_tol_water_avail').val(0);
    }


    var sw_evapo_loses = 0;
    if (sw_evapo != "") {
        sw_evapo_loses = parseFloat(sw_evapo) * parseFloat(GPAREA) * 0.001;
        $('#sw_evapo_loses').val(parseFloat(sw_evapo_loses).toFixed(2));
    }
    else {
        $('#sw_evapo_loses').val(0);
    }

    var gw_rainfall_monsoon = 0;
    var gw_rainfall_nonmonsoon = 0;
    gw_rainfall_monsoon = $("#gw_rainfall_monsoon").val();
    if (gw_rainfall_monsoon == "") {
        gw_rainfall_monsoon = 0;
    }
    gw_rainfall_nonmonsoon = $("#gw_rainfall_nonmonsoon").val();
    if (gw_rainfall_nonmonsoon == "") {
        gw_rainfall_nonmonsoon = 0;
    }

    var total = parseFloat(gw_rainfall_nonmonsoon) + parseFloat(gw_rainfall_monsoon);
    $('#gw_rainfal_tol_recharge').val(parseFloat(total).toFixed(2));


    var gw_other_monsoon = 0;
    var gw_other_nonmonsoon = 0;
    gw_other_monsoon = $("#gw_other_monsoon").val();
    if (gw_other_monsoon == "") {
        gw_other_monsoon = 0;
    }
    gw_other_nonmonsoon = $("#gw_other_nonmonsoon").val();
    if (gw_other_nonmonsoon == "") {
        gw_other_nonmonsoon = 0;
    }

    var total = parseFloat(gw_other_monsoon) + parseFloat(gw_other_nonmonsoon);
    $('#gw_other_tol_recharge').val(parseFloat(total).toFixed(2));
    Volume_of_Runoff();

}