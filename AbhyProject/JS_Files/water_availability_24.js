//auto calculation functionality demend
$(document).ready(function () {
    //this calculates values automatically
    getsprings()
    getRainfall();
    $("#txtsurfacewaterarea, #txtsurfacewaterrainfall, #txtsurfaceTemperature").on("keydown keyup", function () {
        getRainfall();
    });
    $("#txtsurfacewater_rechargefactor, #txt_Net_surface_water_availability,#txt_Net_Ground_water_availability").on("keydown keyup", function () {
        getRainfall();

    });
    $("#txtsprings, #txtspringsarea,#txtspringsdepth").on("keydown keyup", function () {
        getsprings();

    });
});


function getRainfall() {
    var surfacewaterarea = $("#txtsurfacewaterarea").val();
    var surfacewaterrainfall = $("#txtsurfacewaterrainfall").val();
    var surfaceTemperature = $('#txtsurfaceTemperature').val();

    var RechargeFactor = $("#txtsurfacewater_rechargefactor").val();
    var Net_surface_water_availability = $("#txt_Net_surface_water_availability").val();
    var Net_Ground_water_availability = $("#txt_Net_Ground_water_availability").val();

    var result_Evapotranspiration = (parseInt(surfacewaterarea) * parseInt(surfacewaterrainfall)) + parseInt(surfaceTemperature);
    //calculate the Evapotranspiration
    if (!isNaN(result_Evapotranspiration)) {

        document.getElementById('txtsurfaceEvapotranspiration').value = result_Evapotranspiration;

    }

    //calculate the Rainfall based Ground Water Recharge
    var result_avalibility_of_rainfall = parseInt(RechargeFactor) + parseInt(Net_surface_water_availability) + parseInt(Net_Ground_water_availability);
    var totalvalue = parseInt(result_Evapotranspiration) + parseInt(result_avalibility_of_rainfall)
    if (!isNaN(totalvalue)) {

        document.getElementById('txt_Rainfall_based_Ground_Water_Recharge').value = totalvalue;

    }

}
function getsprings() {

    var numberOf_springs = $("#txtsprings").val();
    var Springs_area = $("#txtspringsarea").val();
    var springs_AvgDepath = $('#txtspringsdepth').val();
    //var surfaceTemperature = $('#txtspringsdischarge').val();


    var springsresult = (parseInt(numberOf_springs) * parseInt(Springs_area)) + parseInt(springs_AvgDepath);
    //calculate the Evapotranspiration
    if (!isNaN(springsresult)) {

        document.getElementById('txtspringsdischarge').value = springsresult;

    }
}
var lat = 0;
var long = 0;
var check = 0;
var month_order = '';
$(document).ready(function () {
    getLocation();
    GetGParea();

    //Info();
    $("#AR_DataYear").hide();   //abhi0905
    $("#ER_DataYear").hide();   //abhi0905
    RainfallCalculation();  //abhi0905
    /*Twa_cal();  //abhi0905*/
    $('#txtOthernew').hide();  //abhi0905

});


function get_approved_status() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25/get_approved_status",
        dataType: 'JSON',
        success: function (data) {


            //status_id = @ViewBag.status_id;
            //alert(status_id)
            if (data > 1) {
                $('input[type=text]').prop("disabled", true)
                $('select').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
                $('.livestock_remove_field').hide();
            }
            if (access_auth == "admin") {
                $('input[type=text]').prop("disabled", false)
                $('select').prop("disabled", false);
                $('input[type=file]').prop("disabled", false)
                $('.btn_disabled').prop("disabled", false);
            } else {
                $('input[type=text]').prop("disabled", true)
                $('select').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
                $('.livestock_remove_field').hide();
            }
        }
    });
}
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
var blockarea = 0;
function GetGParea() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/Get_gp_block_area',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                console.log("/WSP_2024_25/Get_gp_block_area")
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                GPAREA = response[0].gp_area;
                blockarea = response[0].block_area;
            }
            Getwspwater();


        }
    });
}
function Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterAvailabilty_GPAREA_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                console.log("/WSP_2024_25/WaterAvailabilty_GPAREA_Details")
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                if (response != null) {
                    // GPAREA = GPAREA + parseFloat(response[0].gp_area_ham);

                    $('#sw_annual_rainfall').val(response[0].dist_annual_rainfall);

                    /*$('#trans_wat_ogp').val(parseFloat(GPAREA).toFixed(2));*/
                    $('#sw_evapo').val(response[0].evt_mm);


                    var rech_monsoon = (parseFloat(response[0].gwr_rainfall_monsoon) * (parseFloat(GPAREA) / parseFloat(blockarea))).toFixed(2);
                    $('#gw_rainfall_monsoon').val(rech_monsoon);



                    var rech_non_monsoon = (parseFloat(response[0].gwr_rainfall_non_monsoon) * (parseFloat(GPAREA) / parseFloat(blockarea))).toFixed(2);
                    $('#gw_rainfall_nonmonsoon').val(rech_non_monsoon);

                    var rech_oth_monsoon = (parseFloat(response[0].gwr_rainfall_other_src_mansoon) * (parseFloat(GPAREA) / parseFloat(blockarea))).toFixed(2);
                    $('#gw_other_monsoon').val(rech_oth_monsoon);


                    var rech_non_oth_monsoon = (parseFloat(response[0].gwr_rainfall_other_src_non_mansoon) * (parseFloat(GPAREA) / parseFloat(blockarea))).toFixed(2);
                    $('#gw_other_nonmonsoon').val(rech_non_oth_monsoon);



                    var natu_loss = (parseFloat(response[0].loss_natural_discharge) * (parseFloat(GPAREA) / parseFloat(blockarea))).toFixed(2);
                    $('#natural_losses').val(natu_loss);


                    var ground_wat_with = (parseFloat(response[0].gw_withdrawl) * (parseFloat(GPAREA) / parseFloat(blockarea))).toFixed(2);
                    $('#grd_wat_wdl').val(ground_wat_with);

                    $('#txt_category').val(response[0].category);

                    var sw_annual_rainfall = response[0].dist_annual_rainfall;

                    if (sw_annual_rainfall != "" && sw_annual_rainfall != null) {
                        var sw_tol_water_avail = parseFloat(sw_annual_rainfall) * parseFloat(GPAREA) * 0.001;
                        $('#sw_tol_water_avail').val(parseFloat(sw_tol_water_avail).toFixed(2));
                    }
                    else {
                        $('#sw_tol_water_avail').val('0');
                    }
                    var sw_evapo_loses = 0;
                    if (sw_evapo != "") {
                        sw_evapo_loses = parseFloat(response[0].evt_mm) * parseFloat(GPAREA) * 0.001;
                        $('#sw_evapo_loses').val(parseFloat(sw_evapo_loses).toFixed(2));
                    }
                    else {
                        $('#sw_evapo_loses').val(0);
                    }

                    if (sw_tol_water_avail != "" && sw_tol_water_avail != null && sw_evapo_loses != "" && sw_evapo_loses != null) {
                        var total_sw_availble = (parseFloat(sw_tol_water_avail).toFixed(2) - parseFloat(sw_evapo_loses).toFixed(2)).toFixed(2)
                        if (total_sw_availble < 0) {
                            $('#total_sw_availble').text('0');
                        } else {
                            $('#total_sw_availble').text(total_sw_availble);
                        }

                    }
                    else {
                        $('#total_sw_availble').text('0');
                    }

                    var Total_mon = 0;
                    Total_mon = ((parseFloat(rech_monsoon) + parseFloat(rech_non_monsoon)).toFixed(2));
                    $('#gw_rainfal_tol_recharge').val(Total_mon);

                    var Total_mon_other = 0;
                    Total_mon_other = ((parseFloat(rech_oth_monsoon) + parseFloat(rech_non_oth_monsoon)).toFixed(2));
                    $('#gw_other_tol_recharge').val(Total_mon_other);

                    var a = parseFloat(Total_mon) + parseFloat(Total_mon_other) - parseFloat(natu_loss).toFixed(2);

                    if (isNaN(a) == false) {
                        $('#total_gw_available').text(a.toFixed(2));
                    }
                    else {
                        $('#total_gw_available').text('0');
                    }

                }


            }

            //Info1();

        }
    });
}
function check_data() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterAvailabilty_GPAREA_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                console.log("/WSP_2024_25/WaterAvailabilty_GPAREA_Details");
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                if ($('#sw_annual_rainfall').val() != response[0].dist_annual_rainfall) {

                    $('#sw_annual_rainfall').css("font-style", "Italic");
                    $('#sw_annual_rainfall').css("font-weight", "bold");
                    //$("#AR_DataYear").show();

                }

                if ($('#sw_evapo').val() != response[0].evt_mm) {
                    $('#sw_evapo').css("font-style", "Italic");
                    $('#sw_evapo').css("font-weight", "bold");
                    // $("#ER_DataYear").show();
                }

                if ($('#gw_rainfall_monsoon').val() != response[0].gwr_rainfall_monsoon) {
                    $('#gw_rainfall_monsoon').css("font-style", "Italic");
                    $('#gw_rainfall_monsoon').css("font-weight", "bold");
                }

                if ($('#gw_rainfall_nonmonsoon').val() != response[0].gwr_rainfall_non_monsoon) {
                    $('#gw_rainfall_nonmonsoon').css("font-style", "Italic");
                    $('#gw_rainfall_nonmonsoon').css("font-weight", "bold");
                }
                if ($('#gw_other_monsoon').val() != response[0].gwr_rainfall_other_src_mansoon) {
                    $('#gw_other_monsoon').css("font-style", "Italic");
                    $('#gw_other_monsoon').css("font-weight", "bold");
                }
                if ($('#gw_other_nonmonsoon').val() != response[0].gwr_rainfall_other_src_non_mansoon) {
                    $('#gw_other_nonmonsoon').css("font-style", "Italic");
                    $('#gw_other_nonmonsoon').css("font-weight", "bold");
                }
                if ($('#natural_losses').val() != response[0].loss_natural_discharge) {
                    $('#natural_losses').css("font-style", "Italic");
                    $('#natural_losses').css("font-weight", "bold");
                }
                if ($('#grd_wat_wdl').val() != response[0].gw_withdrawl) {
                    $('#grd_wat_wdl').css("font-style", "Italic");
                    $('#grd_wat_wdl').css("font-weight", "bold");
                }

            }
            //Info1();

        }
    });
}
function Getwspwater() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterAvailabiltyInfo_GetData',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                console.log("/WSP_2024_25/WaterAvailabiltyInfo_GetData")
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                $('#sw_annual_rainfall').val(response[0].annual_rainfall);
                $('#sw_tol_water_avail').val(response[0].est_vol_rainfall);
                $('#sw_evapo').val(response[0].evapo_rate);
                $('#sw_evapo_loses').val(response[0].est_evapo_loss);
                $('#total_sw_availble').text(response[0].est_water_rain);
                $('#weighted_avg_runoff').val(response[0].weigh_run_conf);
                $('#utilizable_rainfall_runoff').text(response[0].rain_runoff);
                $('#gw_rainfall_monsoon').val(response[0].rech_monsoon);
                $('#gw_rainfall_nonmonsoon').val(response[0].rech_nonmonsoon);
                $('#gw_rainfal_tol_recharge').val(response[0].tot_grd_rech_rain);
                $('#gw_other_monsoon').val(response[0].ground_monsoon);
                $('#gw_other_nonmonsoon').val(response[0].ground_nonmonsoon);
                $('#gw_other_tol_recharge').val(response[0].tot_grd_rech_oth);
                $('#natural_losses').val(response[0].loss_nature);
                $('#total_gw_available').text(response[0].tot_grd_wat_avail);
                $('#grd_wat_wdl').val(response[0].ground_water_with);
                $('#txt_category').val(response[0].category);
                if (response[0].other_source_name != "" && response[0].other_source_name != null) {
                    $("#other_source_name").val(response[0].other_source_name);
                    $("#Source_Name_div").show();
                }


                $('#total_storage_capacity').val(response[0].total_surface_body);
                $('#loss_percentage').val(response[0].loss_if);

                $('#sw_available_for_use').val(response[0].surface_water_avail);
                $('#trans_wat_ogp').val(response[0].trans_water_out);
                $('#tot_sur_wat_avail').val(response[0].total_sirface_water);

                $('#tot_wat_avail').val(response[0].total_avail_water);

                var avail_storages = response[0].avail_storages.split(',');
                var avail_storages_grd = response[0].avail_storages_grd.split(',');
                var avail_storages_sur = response[0].avail_storages_sur.split(',');

                $("#livestockTable .livestockOtherName").each(function () {
                    var get_textbox_value = $(this).val();
                    if (get_textbox_value != '') {
                        avail_storages += get_textbox_value + ',';
                    }
                });
                $("#livestockTable .livestocknumericvalue").each(function () {
                    var get_textbox_value = $(this).val();
                    if (get_textbox_value != '') {
                        avail_storages_grd += get_textbox_value + ',';
                    }
                });
                $("#livestockTable .livestocknumericvalue1").each(function () {
                    var get_textbox_value = $(this).val();
                    if (get_textbox_value != '') {
                        avail_storages_sur += get_textbox_value + ',';
                    }
                });

                if (response[0].ar_data_year != '0') {
                    $("#AR_DataYear").show();
                    $("#AR_DataYear").val(response[0].ar_data_year);
                }
                if (response[0].er_data_year != '0') {
                    $("#ER_DataYear").show();
                    $("#ER_DataYear").val(response[0].ar_data_year);
                }

                for (var i = 0; i < avail_storages.length; i++) {
                    if (avail_storages[i] == "Ponds" || avail_storages[i] == "Tanks") {
                        var html = '<tr><td id = "hide_livestockName' + i + '">';
                        html += '<select id = "selectNow' + i + '" class="livestockOtherName form-control ddControl" onchange = "select_livestockName(this)" name = "livestockpopulation" required="required">';
                        html += '<option value = "" >Select Water available in storages </option>';
                        html += '<option value="Ponds">Ponds</option>';
                        html += '<option value="Tanks">Tanks</option>';
                        html += '<option value="ot">Others (Pl. Specify)</option>';
                        html += '</select ></td>';
                        //html += '<td id="hide_livestockName2' + i + '"><input id="other" class="livestockOtherName livestockOther form-control alpha" value="' + avail_storages[i] + '" name="livestockpopulation" type=text placeholder="Other input"/></td>';
                        html += '<td><span id=""><input class="livestocknumericvalue form-control decimal" onpaste="return false" value="' + avail_storages_grd[i] + '" maxlength="4" name = "livestocknumericvalue1" type=text placeholder="Enter Surface Water Bodies"  /></span></td>';
                        html += '<td><span id=""><input class="livestocknumericvalue1 form-control decimal" onpaste="return false" value="' + avail_storages_sur[i] + '" maxlength="4" name = "livestocknumericvalue2" type=text placeholder="Enter Storage Capacity"  /></span></td>';
                        html += '<td><a href="" onclick="return Deleteqry(this)" class="livestock_remove_field">Remove</a></td></tr>';
                    } else {
                        var html = '<tr>';
                        html += '<td id="hide_livestockName2' + i + '"><input id="other" class="livestockOtherName livestockOther form-control alpha" value="' + avail_storages[i] + '" name="livestockpopulation" type=text placeholder="Other input"/></td>';
                        html += '<td><span id=""><input class="livestocknumericvalue form-control decimal" onpaste="return false" value="' + avail_storages_grd[i] + '" maxlength="4" name = "livestocknumericvalue1" type=text placeholder="Enter Surface Water Bodies"  /></span></td>';
                        html += '<td><span id=""><input class="livestocknumericvalue1 form-control decimal" onpaste="return false" value="' + avail_storages_sur[i] + '" maxlength="4" name = "livestocknumericvalue2" type=text placeholder="Enter Storage Capacity"  /></span></td>';
                        html += '<td><a href="" onclick="return Deleteqry(this)" class="livestock_remove_field">Remove</a></td></tr>';
                    }

                    $('.Livestocktable > thead > tr').eq(0).after(html);

                    $('#selectNow' + i).val(avail_storages[i]);

                    //  $('#hide_livestockName' + i + '').hide();
                }
                get_approved_status();
                check_data();
            } else {
                Info();
            }


            //Info1();

        }
    });
}
var row = 0;
function Add_row() {


    var html = '<tr><td id = "hide_livestockName">';
    html += '<select id = "selectNow' + row + '" class="livestockOtherName form-control ddControl" onchange = "select_livestockName(this,\'selectNow' + row + '\')" name = "livestockpopulation" required="required">';
    html += '<option value = "0" >Select Water available in storages </option>';
    html += '<option value="Ponds">Ponds</option>';
    html += '<option value="Tanks">Tanks</option>';
    html += '<option value="ot">Others (Pl. Specify)</option>';
    html += '</select ></td>';
    html += '<td id="hide_livestockName2"><input id="other" class="livestockOtherNameot livestockOther form-control alpha" name="livestockpopulation" oninput="check_exist(this)" type=text placeholder="Other input"/></td>';
    html += '<td><span id=""><input class="livestocknumericvalue form-control decimal" onpaste="return false" maxlength="4" name = "livestocknumericvalue1" type=text placeholder="Enter numeric value"  /></span></td>';
    html += '<td><span id=""><input class="livestocknumericvalue1 form-control decimal" onpaste="return false" maxlength="4" name = "livestocknumericvalue2" type=text placeholder="Enter Storage Capacity"  /></span></td>';
    html += '<td><a href="" onclick="return Deleteqry(this)" class="livestock_remove_field">Remove</a></td></tr>';

    $('.Livestocktable > thead > tr').eq(0).after(html);

    $("#hide_livestockName2").hide();
    row++;
}

function check_exist() {
    var check_already = 0;
    $("#livestockTable .livestockOtherNameot").each(function () {
        var get_textbox_value_check = $(this).val();

        $("#livestockTable .livestockOtherName").each(function () {
            var get_textbox_value = $(this).val();
            if (get_textbox_value_check.toUpperCase() == get_textbox_value.toUpperCase()) {
                alert('' + get_textbox_value_check + ' Already Saved');
                check_already = 1;
                return;
            }

        });

    });
    if (check_already == 1) {
        $(".livestocknumericvalue").prop('disabled', true);
        $(".livestocknumericvalue1").prop('disabled', true);
    }
    else {
        $(".livestocknumericvalue").prop('disabled', false);
        $(".livestocknumericvalue1").prop('disabled', false);
    }
}

function select_livestockName(livestockOtherName, check_id) {

    selectedValueLs = livestockOtherName.value;
    if (selectedValueLs == "ot") {

        $("#hide_livestockName2").show();
        $('#hide_livestockName').hide();
    }
    Check_combo(selectedValueLs, check_id);
}

$("#livestockTable").on('input', '.livestocknumericvalue', function () {

    var text_1 = [];
    var text_2 = [];
    $("#livestockTable .livestocknumericvalue").each(function () {
        var get_textbox_value = $(this).val();
        if ($.isNumeric(get_textbox_value)) {
            text_1.push(get_textbox_value);
        }
    });
    // $("#noof_sw_bod").val(calculated_total_sum);


    $("#livestockTable .livestocknumericvalue1").each(function () {

        var get_textbox_value = $(this).val();
        if ($.isNumeric(get_textbox_value)) {
            text_2.push(get_textbox_value);
        }
    });
    var final_val = 0;
    if (text_1.length == text_2.length) {
        for (var i = 0; i < text_1.length; i++) {
            var a = parseFloat(text_1[i]);
            var b = parseFloat(text_2[i]);
            final_val += parseFloat(b);
        }
    }

    $("#total_storage_capacity").val(final_val);
});
$("#livestockTable").on('input', '.livestocknumericvalue1', function () {

    var text_1 = [];
    var text_2 = [];
    $("#livestockTable .livestocknumericvalue").each(function () {
        var get_textbox_value = $(this).val();
        if ($.isNumeric(get_textbox_value)) {
            text_1.push(get_textbox_value);
        }
    });
    // $("#noof_sw_bod").val(calculated_total_sum);


    $("#livestockTable .livestocknumericvalue1").each(function () {

        var get_textbox_value = $(this).val();
        if ($.isNumeric(get_textbox_value)) {
            text_2.push(get_textbox_value);
        }
    });
    var final_val = 0;
    if (text_1.length == text_2.length) {
        for (var i = 0; i < text_1.length; i++) {
            var a = parseFloat(text_1[i]);
            var b = parseFloat(text_2[i]);
            final_val += parseFloat(b);

        }
    }

    $("#total_storage_capacity").val(final_val);
    Twa_cal();
});
function Check_combo(ddl1, check_id) {

    var check_repeat = 0;
    var dis = '#' + check_id;

    $("#livestockTable .livestockOtherName").each(function () {

        var get_textbox_value = $(this).val();
        if (get_textbox_value == ddl1) {
            check_repeat++;

        }
        if (check_repeat > 1) {
            alert('Please Select Diffrent Value');
            $(dis).val('0');
            return false;
        }

    });
}
function Deleteqry(_this) {

    $(_this).closest('tr').remove();
    $("#loss_percentage").val("");
    $("#sw_available_for_use").val("");
    return false;
}
/*abhi0905*/
//function Info1() {
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Wsp_new/WaterAvailabiltyInfo_Details',
//        data: '',
//        dataType: 'JSON',
//        success: function (response) {
//             
//            if (response == "Error") {
//                window.location = "/WspNew/WspWaterAvailability";
//            }
//            if (response == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";
//            }
//            if (response.length != 0) {

//                if (response[0].gw_rainfall_monsoon != null && response[0].gw_rainfall_monsoon != "") {
//                    $('#gw_rainfall_monsoon').val(parseFloat(response[0].gw_rainfall_monsoon).toFixed(2));
//                }
//                if (response[0].gw_rainfall_nonmonsoon != null && response[0].gw_rainfall_nonmonsoon != "") {
//                    $('#gw_rainfall_nonmonsoon').val(parseFloat(response[0].gw_rainfall_nonmonsoon).toFixed(2));
//                }
//                if (response[0].gw_rainfal_tol_recharge != null && response[0].gw_rainfal_tol_recharge != "") {
//                    $('#gw_rainfal_tol_recharge').val(parseFloat(response[0].gw_rainfal_tol_recharge).toFixed(2));
//                }

//                if (response[0].gw_other_monsoon != null && response[0].gw_other_monsoon != "") {
//                    $('#gw_other_monsoon').val(parseFloat(response[0].gw_other_monsoon).toFixed(2));
//                }
//                if (response[0].gw_other_nonmonsoon != null && response[0].gw_other_nonmonsoon != "") {
//                    $('#gw_other_nonmonsoon').val(parseFloat(response[0].gw_other_nonmonsoon).toFixed(2));
//                }

//                if (response[0].gw_other_tol_recharge != null && response[0].gw_other_tol_recharge != "") {
//                    $('#gw_other_tol_recharge').val(parseFloat(response[0].gw_other_tol_recharge).toFixed(2));
//                }

//                if (response[0].total_gw_available != null && response[0].total_gw_available != "") {

//                    $('#total_gw_available').text(parseFloat(response[0].total_gw_available).toFixed(2));
//                }

//                if (response[0].sw_annual_rainfall != null && response[0].sw_annual_rainfall != "") {

//                    $('#sw_annual_rainfall').val(parseFloat(response[0].sw_annual_rainfall).toFixed(2));
//                }

//                if (response[0].sw_tol_water_avail != null && response[0].sw_tol_water_avail != "") {

//                    $('#sw_tol_water_avail').val(parseFloat(response[0].sw_tol_water_avail).toFixed(2));
//                }
//                if (response[0].categori != null && response[0].categori != "") {      //abhi0905

//                    $('#categori').val(response[0].categori);
//                }
//                if (response[0].noof_wb_st_cap != null && response[0].noof_wb_st_cap != "") {      //abhi0905

//                    $('#noof_wb_st_cap').val(response[0].noof_wb_st_cap);
//                }
//                if (response[0].txtOthernew != null && response[0].txtOthernew != "") {      //abhi0905
//                    $('#txtOthernew').show();
//                    $('#txtOthernew').val(response[0].txtOthernew);
//                }
//                if (response[0].noof_sw_bod != null && response[0].noof_sw_bod != "") {      //abhi0905

//                    $('#noof_sw_bod').val(response[0].noof_sw_bod);
//                }

//                if (response[0].noof_sw_stcap != null && response[0].noof_sw_stcap != "") {      //abhi0905   

//                    $('#noof_sw_stcap').val(response[0].noof_sw_stcap);
//                }

//                if (response[0].tot_sur_wat_avail != null && response[0].tot_sur_wat_avail != "") {      //abhi0905  

//                    $('#tot_sur_wat_avail').val(response[0].tot_sur_wat_avail);
//                }

//                if (response[0].tot_wat_avail != null && response[0].tot_wat_avail != "") {      //abhi0905

//                    $('#tot_wat_avail').val(response[0].tot_wat_avail);
//                }

//                if (response[0].sw_evapo != null && response[0].sw_evapo != "") {

//                    $('#sw_evapo').val(parseFloat(response[0].sw_evapo).toFixed(2));
//                }

//                if (response[0].sw_evapo_loses != null && response[0].sw_evapo_loses != "") {

//                    $('#sw_evapo_loses').val(parseFloat(response[0].sw_evapo_loses).toFixed(2));
//                }

//                if (response[0].total_gw_racharge != null && response[0].total_gw_racharge != "") {

//                    $('#total_gw_racharge').text(parseFloat(response[0].total_gw_racharge).toFixed(2));
//                }

//                if (response[0].total_sw_availble != null && response[0].total_sw_availble != "") {

//                    $('#total_sw_availble').text(parseFloat(response[0].total_sw_availble).toFixed(2));
//                }

//                //new columns added

//                if (response[0].noof_sw_storage_structures != null && response[0].noof_sw_storage_structures != "") {

//                    $('#noof_sw_storage_structures').val(parseFloat(response[0].noof_sw_storage_structures).toFixed(2));
//                }

//                if (response[0].total_storage_capacity != null && response[0].total_storage_capacity != "") {

//                    $('#total_storage_capacity').val(parseFloat(response[0].total_storage_capacity).toFixed(2));
//                }
//                if (response[0].sw_available_for_use != null && response[0].sw_available_for_use != "") {

//                    $('#sw_available_for_use').val(parseFloat(response[0].sw_available_for_use).toFixed(2));
//                }
//                if (response[0].volume_of_runoff != null && response[0].volume_of_runoff != "") {

//                    $('#volume_of_runoff').text(parseFloat(response[0].volume_of_runoff).toFixed(2));
//                }


//                if (response[0].natural_losses != null && response[0].natural_losses != "") {

//                    $('#natural_losses').val(parseFloat(response[0].natural_losses).toFixed(2));
//                }
//                if (response[0].trans_wat_ogp != null && response[0].trans_wat_ogp != "") {

//                    $('#trans_wat_ogp').val(parseFloat(response[0].trans_wat_ogp).toFixed(2));
//                }

//                if (response[0].grd_wat_wdl != null && response[0].grd_wat_wdl != "") {

//                    $('#grd_wat_wdl').val(response[0].grd_wat_wdl);     //abhi0905
//                }

//                if (response[0].tot_wat_available != null && response[0].tot_wat_available != "") {

//                    $('#tot_wat_available').val(parseFloat(response[0].tot_wat_available).toFixed(2));
//                }

//                if (response[0].total_water_avaliable_utiilization != null && response[0].total_water_avaliable_utiilization != "") {

//                    $('#total_water_avaliable_utiilization').text(parseFloat(response[0].total_water_avaliable_utiilization).toFixed(2));
//                }

//                if (response[0].utilizable_rainfall_runoff != null && response[0].utilizable_rainfall_runoff != "") {

//                    $('#utilizable_rainfall_runoff').text(parseFloat(response[0].utilizable_rainfall_runoff).toFixed(2));
//                }

//                if (response[0].weighted_avg_runoff != null && response[0].weighted_avg_runoff != "") {

//                    $('#weighted_avg_runoff').val(parseFloat(response[0].weighted_avg_runoff).toFixed(2));

//                }
//                else {
//                    $('#weighted_avg_runoff').val("0.30");
//                }

//                //SurfaceWaterCalculation();

//                Call();
//            }
//            else {
//                $('#weighted_avg_runoff').val("0.30");
//            }
//            if (response[0].loss_percentage != null && response[0].loss_percentage != "") {

//                /*$('#loss_percentage').val(parseFloat((response[0].loss_percentage).change()).toFixed(2));*/
//            }

//            SurfaceWaterCalculation();

//            total_gw_available1();
//            Volume_of_Runoff();
//            RainfallCalculation();   //abhi0905
//            Twa_cal();  //abhi0905


//            //if (DPMU_Level_Count == 1) {
//            //    DPMU_Submission();
//            //}
//        }
//    });

//}


//abhi0905 latest

//function SaveSurfaceWater_info() {
//     
//    $('#SAVE_BTN').prop('disabled', true);

//    var sw_annual_rainfall = $('#sw_annual_rainfall').val();
//    var sw_tol_water_avail = $('#sw_tol_water_avail').val();
//    var sw_evapo = $('#sw_evapo').val();
//    var sw_evapo_loses = $('#sw_evapo_loses').val();
//    var total_sw_availble = $('#total_sw_availble').text();
//    var weighted_avg_runoff = $('#weighted_avg_runoff').val();
//    var utilizable_rainfall_runoff = $('#utilizable_rainfall_runoff').text();

//    var gw_rainfall_monsoon = $('#gw_rainfall_monsoon').val();
//    var gw_rainfall_nonmonsoon = $('#gw_rainfall_nonmonsoon').val();
//    var gw_rainfal_tol_recharge = $('#gw_rainfal_tol_recharge').val();

//    var gw_other_monsoon = $('#gw_other_monsoon').val();
//    var gw_other_nonmonsoon = $('#gw_other_nonmonsoon').val();
//    var gw_other_tol_recharge = $('#gw_other_tol_recharge').val();

//    var natural_losses = $('#natural_losses').val();
//    var total_gw_available = $('#total_gw_available').text();

//    var grd_wat_wdl = $('#grd_wat_wdl').val();
//    var categori = $('#categori').val();

//    var noof_wb_st_cap = $('#noof_wb_st_cap').val();
//    var txtOthernew = $('#txtOthernew').val();

//    if (noof_wb_st_cap !== "Others(Pl. specify)") {      //check
//        noof_wb_st_cap = $('#noof_wb_st_cap').val();
//        txtOthernew = $('#txtOthernew').val();
//    }
//    else {
//        noof_wb_st_cap = $('#noof_wb_st_cap').val();
//    }
//    var noof_sw_bod = $('#noof_sw_bod').val();
//    var noof_sw_stcap = $('#noof_sw_stcap').val();

//    var total_storage_capacity = $('#total_storage_capacity').val();
//    var loss_percentage = $('#loss_percentage').val();

//    var sw_available_for_use = $('#sw_available_for_use').val();
//    var trans_wat_ogp = $('#trans_wat_ogp').val();
//    var tot_sur_wat_avail = $('#tot_sur_wat_avail').val();

//    var tot_wat_avail = $('#tot_wat_avail').val();


//    var formdata = new FormData();

//    formdata.append("sw_annual_rainfall", sw_annual_rainfall);
//    formdata.append("sw_tol_water_avail", sw_tol_water_avail);
//    formdata.append("sw_evapo", sw_evapo);
//    formdata.append("sw_evapo_loses", sw_evapo_loses);
//    formdata.append("total_sw_availble", total_sw_availble);
//    formdata.append("weighted_avg_runoff", weighted_avg_runoff);
//    formdata.append("utilizable_rainfall_runoff", utilizable_rainfall_runoff);

//    formdata.append("gw_rainfall_monsoon", gw_rainfall_monsoon);
//    formdata.append("gw_rainfall_nonmonsoon", gw_rainfall_nonmonsoon);
//    formdata.append("gw_rainfal_tol_recharge", gw_rainfal_tol_recharge);

//    formdata.append("gw_other_monsoon", gw_other_monsoon);
//    formdata.append("gw_other_nonmonsoon", gw_other_nonmonsoon);
//    formdata.append("gw_other_tol_recharge", gw_other_tol_recharge);

//    formdata.append("natural_losses", natural_losses);
//    formdata.append("total_gw_available", total_gw_available);

//    formdata.append("grd_wat_wdl", grd_wat_wdl);
//    formdata.append("categori", categori);

//    formdata.append("noof_wb_st_cap", noof_wb_st_cap);
//    formdata.append("txtOthernew", txtOthernew);

//    formdata.append("noof_sw_bod", noof_sw_bod);
//    formdata.append("noof_sw_stcap", noof_sw_stcap);

//    formdata.append("total_storage_capacity", total_storage_capacity);
//    formdata.append("loss_percentage", loss_percentage);

//    formdata.append("sw_available_for_use", sw_available_for_use);
//    formdata.append("trans_wat_ogp", trans_wat_ogp);

//    formdata.append("tot_sur_wat_avail", tot_sur_wat_avail);
//    formdata.append("tot_wat_avail", tot_wat_avail);

//    $.ajax({
//        url: '/Wsp_new/WaterAvailabiltyInfo_InsertData',
//        data: formdata,
//        type: 'POST',
//        contentType: false,
//        processData: false,
//        success: function (response) {

//        //    alert(response);
//        //    if (response == "SessionTimeOut") {
//        //        window.location = "/WspNew/WSP_GWM_HOME";
//        //    }
//        //},
//        //error: function () {
//        //    alert('Data Insert Failed');
//        //}

//            $('#ERRor1').text(response);
//            if (response != "Successfully Saved" && response != "Please Enter Weighted Average Runoff Coefficient") {
//                window.location = "/Error/DefaultError";
//            }
//            $('#SAVE_BTN').prop('disabled', false);
//        },
//        error: function (jqXHR, textStatus, errorMessage) {
//            console.log(errorMessage);
//        }
//    });
//}

function SaveSurfaceWater_info() {      //save data


    var weighted_avg_runoff = $('#weighted_avg_runoff').val();
    var loss_percentage = $('#loss_percentage').val();
    var trans_wat_ogp = $('#trans_wat_ogp').val();
    var other_source_name = $("#other_source_name").val();

    //if (AR_DataYear != ER_DataYear) {
    //    alert('Annual Rainfall(mm) year and Evapotranspiration(mm) year should be same');
    //    $('#AR_DataYear').focus();
    //    return;
    //}

    if (weighted_avg_runoff == "0") {
        alert("Select Weighted Average Runoff Coefficient value");
        $('#weighted_avg_runoff').focus();
        return;
    }
    //else if (loss_percentage == "") {
    //    alert("Please Select Percentage");
    //    $('#loss_percentage').focus();
    //    return;
    //}
    //else if (trans_wat_ogp == "") {
    //    alert("Please Enter the Value");
    //    $('#trans_wat_ogp').focus();
    //    return;
    //}


    var obj = {};

    obj.annual_rainfall = $('#sw_annual_rainfall').val();
    obj.est_vol_rainfall = $('#sw_tol_water_avail').val();
    obj.evapo_rate = $('#sw_evapo').val();
    obj.est_evapo_loss = $('#sw_evapo_loses').val();
    obj.est_water_rain = $('#total_sw_availble').text();
    obj.weigh_run_conf = $('#weighted_avg_runoff').val();

    obj.rain_runoff = $('#utilizable_rainfall_runoff').text();

    obj.rech_monsoon = $('#gw_rainfall_monsoon').val();
    obj.rech_nonmonsoon = $('#gw_rainfall_nonmonsoon').val();
    obj.tot_grd_rech_rain = $('#gw_rainfal_tol_recharge').val();

    obj.ground_monsoon = $('#gw_other_monsoon').val();
    obj.ground_nonmonsoon = $('#gw_other_nonmonsoon').val();
    obj.tot_grd_rech_oth = $('#gw_other_tol_recharge').val();

    obj.loss_nature = $('#natural_losses').val();
    obj.tot_grd_wat_avail = $('#total_gw_available').text();

    obj.ground_water_with = $('#grd_wat_wdl').val();
    obj.category = $('#txt_category').val();

    var avail_storages = '';
    var avail_storages_grd = '';
    var avail_storages_sur = '';

    var LiveStocknumericControl = document.getElementsByName("livestockpopulation");

    for (var i = 0; i < LiveStocknumericControl.length; i++) {
        var n = LiveStocknumericControl[i].value;
        if (n == "" && n != "ot") {
            avail_storages += n;
        }
        else if (n != "ot") {
            avail_storages += n + ',';
        }
    }

    var LiveStocknameControl = document.getElementsByName("livestocknumericvalue1");
    for (var i = 0; i < LiveStocknameControl.length; i++) {
        var k = LiveStocknameControl[i].value;
        if (k == "") {
            avail_storages_grd += k;
        }
        else {
            avail_storages_grd += k + ',';
        }
    }

    var LiveStocknameControl = document.getElementsByName("livestocknumericvalue2");

    for (var i = 0; i < LiveStocknameControl.length; i++) {
        var j = LiveStocknameControl[i].value;
        if (j == "") {
            avail_storages_sur += j;
        }
        else {
            avail_storages_sur += j + ',';
        }
    }

    var check_already = 0;
    $("#livestockTable .livestockOtherNameot").each(function () {
        var get_textbox_value_check = $(this).val();

        $("#livestockTable .livestockOtherName").each(function () {
            var get_textbox_value = $(this).val();
            if (get_textbox_value_check.toUpperCase() == get_textbox_value.toUpperCase()) {
                alert('' + get_textbox_value_check + ' Already Saved');
                check_already = 1;
                return;
            }

        });

    });
    if (check_already == 1) {
        $('#SAVE_BTN').prop('disabled', false);
        return;
    }

    avail_storages = avail_storages.trimEnd();

    if (avail_storages == '') {
        alert('Please select water available storages,if no storage is available please fill value zero');
        $('#SAVE_BTN').prop('disabled', false);
        return;
    }
    if (avail_storages_grd == '') {
        alert('Please select water available storages,if no storage is available please fill value zero');
        $('#SAVE_BTN').prop('disabled', false); return;
    }
    if (avail_storages_sur == '') {
        alert('Please select water available storages,if no storage is available please fill value zero');
        $('#SAVE_BTN').prop('disabled', false);
        return;
    }
    var a = avail_storages.split(',');
    var b = avail_storages_grd.split(',');
    var c = avail_storages_sur.split(',');
    if (a.length != b.length) {
        alert('Please select water available storages,if no storage is available please fill value zero');
        $('#SAVE_BTN').prop('disabled', false); return;
        return;

    }
    if (a.length != c.length) {
        alert('Please select water available storages,if no storage is available please fill value zero');
        $('#SAVE_BTN').prop('disabled', false); return;
        return;
    }


    obj.avail_storages = avail_storages;
    obj.avail_storages_grd = avail_storages_grd;
    obj.avail_storages_sur = avail_storages_sur;
    obj.other_source_name = other_source_name;
    obj.total_surface_body = $('#total_storage_capacity').val();
    obj.loss_if = $('#loss_percentage').val();

    obj.surface_water_avail = $('#sw_available_for_use').val();
    obj.trans_water_out = $('#trans_wat_ogp').val();
    obj.total_sirface_water = $('#tot_sur_wat_avail').val();

    obj.total_avail_water = $('#tot_wat_avail').val();

    $('#SAVE_BTN').prop('disabled', true);
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25/WaterAvailabiltyInfo_InsertData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Please Change Evapotranspiration (mm) value") {
                $('#sw_evapo').focus();
            } else if (response == "Please Change Annual Rainfall (mm) value") {
                $('#sw_annual_rainfall').focus();
            } else if (response == "Please Enter Other Source Name") {
                $("#other_source_name").focus();
            }
            else {
                location.reload();
            }



        },

        error: function () {
            alert("errror Save_data");
        }

    });

    $('#SAVE_BTN').prop('disabled', false);
}


function Get_month_order(month_num) {

    if (month_num == "April") {
        month_order = 1;
    }
    if (month_num == "May") {
        month_order = 2;
    }
    if (month_num == "June") {
        month_order = 3;
    }
    if (month_num == "July") {
        month_order = 4;
    }
    if (month_num == "August") {
        month_order = 5;
    }
    if (month_num == "September") {
        month_order = 6;
    }
    if (month_num == "October") {
        month_order = 7;
    }
    if (month_num == "November") {
        month_order = 8;
    }
    if (month_num == "December") {
        month_order = 9;
    }
    if (month_num == "January") {
        month_order = 10;
    }
    if (month_num == "February") {
        month_order = 11;
    }
    if (month_num == "March") {
        month_order = 12;
    }

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

    Twa_cal();
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


/*abhi0905*/

$("#total_sw_availble , #weighted_avg_runoff").on("keydown keyup", function () {

    RainfallCalculation();
});

function RainfallCalculation() {
    var total_sw_availble = $("#total_sw_availble").text();
    var weighted_avg_runoff = $("#weighted_avg_runoff").val();
    var utilizable_rainfall_runoff = 0;

    if (total_sw_availble != "") {
        if (total_sw_availble != '' && weighted_avg_runoff != '') {
            utilizable_rainfall_runoff = parseFloat(total_sw_availble) * parseFloat(weighted_avg_runoff);

            if (utilizable_rainfall_runoff < 0) {
                $('#utilizable_rainfall_runoff').text(0);
            } else {
                $('#utilizable_rainfall_runoff').text(parseFloat(utilizable_rainfall_runoff).toFixed(2));
            }

        }
        else {
            $('#utilizable_rainfall_runoff').text('0');
        }
    }

}




//abhi0905  // Not in use

function Twa_cal() {


    var total_storage_capacity = $('#total_storage_capacity').val();
    if (total_storage_capacity == "") {
        total_storage_capacity = 0;

    }
    var Losses_if_any = $('#loss_percentage').val();
    if (Losses_if_any == "") {
        Losses_if_any = 0;

    }
    var Surface_Water_Available = ((total_storage_capacity) * (Losses_if_any) / 100);

    $('#sw_available_for_use').val(Surface_Water_Available.toFixed(2));

    var sw_available_for_use = $('#sw_available_for_use').val();       //abhi0905
    if (sw_available_for_use == "") {
        sw_available_for_use = 0;

    }
    var trans_wat_ogp = $('#trans_wat_ogp').val();
    if (trans_wat_ogp == "") {
        trans_wat_ogp = 0;

    }
    var tot_sur_wat_avail = parseFloat(sw_available_for_use) + parseFloat(trans_wat_ogp);
    $('#tot_sur_wat_avail').val(parseFloat(tot_sur_wat_avail).toFixed(2));

    var total_gw_available = $('#total_gw_available').text();       //abhi0905

    if (total_gw_available == "") {
        total_gw_available = 0;

    }
    var tot_sur_wat_avail = $('#tot_sur_wat_avail').val();
    if (tot_sur_wat_avail == "") {
        tot_sur_wat_avail = 0;

    }
    var tot_wat_avail = parseFloat(total_gw_available) + parseFloat(tot_sur_wat_avail);

    $('#tot_wat_avail').val(parseFloat(tot_wat_avail).toFixed(2));


    //var sw_available_for_use = $('#sw_available_for_use').val();
    //if (sw_available_for_use == "") {

    //    sw_available_for_use = 0;
    //}
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

    //new
    var Value_RunOff = parseFloat(total_Wter_Availabilty) - parseFloat(Total_Water_Available_for_Utilization);

    $('#volume_of_runoff').text(parseFloat(Value_RunOff).toFixed(2));

}


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
    if (total_sw_availble < 0) {
        $('#total_sw_availble').text(0);
    } else {
        $('#total_sw_availble').text(parseFloat(total_sw_availble).toFixed(2));
    }
    RainfallCalculation();

}


//$("#noof_sw_storage_structures,#total_storage_capacity,#loss_percentage,#sw_annual_rainfall,#sw_evapo,#gw_rainfall_monsoon,#gw_rainfall_nonmonsoon,#gw_other_monsoon,#natural_losses").on("keydown keyup", function () {


//    Volume_of_Runoff();

//});

function Volume_of_Runoff() {



    var noof_sw_storage_structures = $('#noof_sw_storage_structures').val();
    if (noof_sw_storage_structures == "") {
        noof_sw_storage_structures = 0;
    }

    //var total_storage_capacity = $('#total_storage_capacity').val();
    //if (total_storage_capacity == "") {
    //    total_storage_capacity = 0;

    //}
    //var Losses_if_any = $('#loss_percentage').text();
    //if (Losses_if_any == "") {
    //    Losses_if_any = 0;

    //}
    //var Surface_Water_Available = parseFloat(total_storage_capacity) - (parseFloat(total_storage_capacity) * parseFloat(Losses_if_any) / 100); 
    //$('#sw_available_for_use').val(Surface_Water_Available.toFixed(2));

    //var sw_available_for_use = $('#sw_available_for_use').val();
    //if (sw_available_for_use == "") {

    //    sw_available_for_use = 0;
    //}
    //var total_Wter_Availabilty = $('#total_sw_availble').text();
    //var total_GroundWater_Availabilty = $('#total_gw_available').text();
    //if (total_Wter_Availabilty == "") {
    //    total_Wter_Availabilty = 0;
    //}

    //if (total_GroundWater_Availabilty == "") {
    //    total_GroundWater_Availabilty = 0;
    //}
    //var Total_Water_Available_for_Utilization = parseFloat(total_GroundWater_Availabilty) + parseFloat(sw_available_for_use);
    //$('#total_water_avaliable_utiilization').text(parseFloat(Total_Water_Available_for_Utilization).toFixed(2));

    //mohan 123333

    //var Value_RunOff = parseFloat(total_Wter_Availabilty) - parseFloat(Total_Water_Available_for_Utilization);

    //$('#volume_of_runoff').text(parseFloat(Value_RunOff).toFixed(2));

    var Value_RunOff = $('#volume_of_runoff').val();
    var weighted_avg_runoff = $('#weighted_avg_runoff').val();
    if (weighted_avg_runoff == "") {
        weighted_avg_runoff = 0.30;
    }
    var utilizable_rainfall_runoff = parseFloat(Value_RunOff) * parseFloat(weighted_avg_runoff);

    /*$('#Utilizable_Rainfall_Runof_').text(parseFloat(Utilizable_Rainfall_Runof).toFixed(2));*/
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

//abhi0905

//var AR_Year = "";
//function AR_DataYear_onchange() {

//    $('#sw_annual_rainfall').val("");

//    var ARY = $("#AR_DataYear").val();

//    if (ARY != "0") {

//        AR_Year = ARY;

//        DropDownShowing_Year_Values();
//    }
//}

//function DropDownShowing_Year_Values() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Wsp_new/DropDownShowing_Year_Values',
//        data: { 'AR_Year': AR_Year },
//        dataType: 'JSON',
//        success: function (data) {
//            alert(data.length);

//            $('#sw_annual_rainfall').val(data.sw_annual_rainfall);

//        }
//    });
//}

//abhi0905

$('#sw_annual_rainfall').on("input", () => {
    $('#sw_annual_rainfall').css("font-style", "Italic");
    $('#sw_annual_rainfall').css("font-weight", "bold");
    $("#AR_DataYear").show();
});

$('#sw_annual_rainfall').on("input", () => {
    $('#sw_tol_water_avail').css("font-style", "Italic");
    $('#sw_tol_water_avail').css("font-weight", "bold");

})

$('#sw_evapo').on("input", () => {
    $('#sw_evapo').css("font-style", "Italic");
    $('#sw_evapo').css("font-weight", "bold");
    $("#ER_DataYear").show();
});

$('#sw_evapo').on("input", () => {
    $('#sw_evapo_loses').css("font-style", "Italic");
    $('#sw_evapo_loses').css("font-weight", "bold");

})

//abhi0905

$("#noof_wb_st_cap").change(function () {
    var bn = $('option:selected', this).text();
    if (bn == "Others(Pl. specify)") {
        $("#txtOthernew").show();

    }
    else {
        $("#txtOthernew").val("");
        $("#txtOthernew").hide();
    }
});