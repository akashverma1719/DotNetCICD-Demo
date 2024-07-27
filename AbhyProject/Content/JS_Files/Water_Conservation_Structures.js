
$(document).ready(function () {

    Funding_Source_Info1();

});
var wc_filepath = "";

function Download_WC_File_Info() {
    if (wc_filepath != "") {
        window.location = wc_filepath;
    } else {
        alert("No Files");
    }
}
var FullData = "";
function Funding_Source_Info1() {
    $.ajax({
        type: "GET",
        url: "/WSPHome/AR_WC_Structures",
        contentType: "application/json;charset=utf-8",
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WSPHome/Wspsuppyside";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            $("#ar_type_structure").empty();
            $("#wc_type_structure").empty();
            var optionhtml = "<option value='0'>--Select Type of WC Structure--</option>";
            var optionhtml1 = "<option value='0'>--Select Type of AR Structure--</option>";
            if (response.length != 0) {
                allstate = [];
                FullData = response;
                var ddlSourse = {};
                for (var i = 0; i < response.length; i++) {
                    if (response[i].ar_wc_types != null && response[i].ar_wc_types != "") {
                        if (!ddlSourse[response[i].ar_wc_types]) {
                            optionhtml += '<option value="' + response[i].ar_wc_types + '">' + response[i].ar_wc_types + '</option>';
                            optionhtml1 += '<option value="' + response[i].ar_wc_types + '">' + response[i].ar_wc_types + '</option>';
                            allstate.push(response[i].ar_wc_types);
                            ddlSourse[response[i].ar_wc_types] = response[i].ar_wc_types;

                        }
                    }
                }

                optionhtml += "<option value='Other'>Other</option>";
                optionhtml1 += "<option value='Other'>Other</option>";

                $("#ar_type_structure").append(optionhtml1);
                $("#wc_type_structure").append(optionhtml);

            }
            GettingMethod();
        }

    });
}

function WC_StructureInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/WC_Structure_Infoture_Details1',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            //if (data == "Error") {
            //    window.location = "/WSPHome/Wspsuppyside";
            //}
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var tr = '';
            if (data.length != 0) {
                var i = data.length - 1;

                //$("#wc_type_structure").val(data[i].type_wc_structure);
                //if (data[i].storage_capacity != null && data[i].storage_capacity != "") {
                //    $('#wc_storage_capacity').val(parseFloat(data[i].storage_capacity).toFixed(2));
                //}
                //if (data[i].effective_storage_available_use != null && data[i].effective_storage_available_use != "") {
                //    $('#wc_effective_storage').val(parseFloat(data[i].effective_storage_available_use).toFixed(2));
                //}
                //if (data[i].kharif_no_of_fillings != null && data[i].kharif_no_of_fillings != "") {
                //    $('#wc_noof_filling_kharif').val(parseFloat(data[i].kharif_no_of_fillings).toFixed(2));
                //}
                //if (data[i].Rabi_no_of_filllings != null && data[i].Rabi_no_of_filllings != "") {
                //    $('#wc_noof_filling_rabi').val(parseFloat(data[i].Rabi_no_of_filllings).toFixed(2));
                //}
                //if (data[i].recharge != null && data[i].recharge != "") {
                //    $('#wc_recharge').val(parseFloat(data[i].recharge).toFixed(2));
                //}
                //if (data[i].gw_recharge_kharif != null && data[i].gw_recharge_kharif != "") {
                //    $('#wc_gw_recharge_kharif').val(parseFloat(data[i].gw_recharge_kharif).toFixed(2));
                //}
                //if (data[i].gw_recharge_rabi != null && data[i].gw_recharge_rabi != "") {
                //    $('#wc_gw_recharge_rabi').val(parseFloat(data[i].gw_recharge_rabi).toFixed(2));
                //}
                //if (data[i].gw_recharge_annual != null && data[i].gw_recharge_annual != "") {
                //    $('#wc_gw_recharge_anuual').val(parseFloat(data[i].gw_recharge_annual).toFixed(2));
                //}

                //if (data[i].total_gw_saved != null && data[i].total_gw_saved != "") {
                //    $('#wc_gw_total_saved').val(parseFloat(data[i].total_gw_saved).toFixed(2));
                //}

                //document.getElementById("wc_possible_funding_source").value = data[i].possiable_funding_source;
                //$('#wc_lat').val(data[i].latitude);
                //$('#wc_long').val(data[i].longitude);

                //if (data[i].latitude != null && data[i].latitude != "") {
                //    $('#wc_lat').val(parseFloat(data[i].latitude));
                //}

                //if (data[i].longitude != null && data[i].longitude != "") {
                //    $('#wc_long').val(parseFloat(data[i].longitude));
                //}


                for (var j = 0; j < data.length; j++) {
                    if (data[j].wc_filepath != null && data[j].wc_filepath != "") {
                        wc_filepath = data[j].wc_filepath;
                    }

                    var total_gw_saved = '';
                    if (data[j].total_gw_saved != null && data[j].total_gw_saved != "") {
                        total_gw_saved = data[j].total_gw_saved;
                    }

                    var wc_approx_estimated_cost = '';
                    if (data[j].wc_approx_estimated_cost != null && data[j].wc_approx_estimated_cost != "") {
                        wc_approx_estimated_cost = data[j].wc_approx_estimated_cost;
                    }

                    var possiable_funding_source = '';
                    if (data[j].possiable_funding_source != null && data[j].possiable_funding_source != "") {
                        possiable_funding_source = data[j].possiable_funding_source;
                    }

                    var other_funding_source = '';
                    if (data[j].other_funding_source != null && data[j].other_funding_source != "") {
                        other_funding_source = data[j].other_funding_source;
                    }



                    var village_name = "";
                    if (data[j].village_name != null && data[j].village_name != "") {
                        village_name = data[j].village_name;
                    }


                    var latitude = "";
                    if (data[j].latitude != null && data[j].latitude != "") {
                        latitude = data[j].latitude;
                    }

                    var longitude = "";
                    if (data[j].longitude != null && data[j].longitude != "") {
                        longitude = data[j].longitude;
                    }

                    var type_wc_structure = "";
                    if (data[j].type_wc_structure != null && data[j].type_wc_structure != "") {
                        type_wc_structure = data[j].type_wc_structure;
                    }

                    var storage_capacity = "";
                    if (data[j].storage_capacity != null && data[j].storage_capacity != "") {
                        storage_capacity = data[j].storage_capacity;
                    }

                    var effective_storage_available_use = "";
                    if (data[j].effective_storage_available_use != null && data[j].effective_storage_available_use != "") {
                        effective_storage_available_use = data[j].effective_storage_available_use;
                    }

                    var kharif_no_of_fillings = "";
                    if (data[j].kharif_no_of_fillings != null && data[j].kharif_no_of_fillings != "") {
                        kharif_no_of_fillings = data[j].kharif_no_of_fillings;
                    }


                    var Rabi_no_of_filllings = "";
                    if (data[j].Rabi_no_of_filllings != null && data[j].Rabi_no_of_filllings != "") {
                        Rabi_no_of_filllings = data[j].Rabi_no_of_filllings;
                    }

                    var recharge = "";
                    if (data[j].recharge != null && data[j].recharge != "") {
                        recharge = data[j].recharge;
                    }

                    var gw_recharge_kharif = "";
                    if (data[j].gw_recharge_kharif != null && data[j].gw_recharge_kharif != "") {
                        gw_recharge_kharif = data[j].gw_recharge_kharif;
                    }

                    var gw_recharge_rabi = "";
                    if (data[j].gw_recharge_rabi != null && data[j].gw_recharge_rabi != "") {
                        gw_recharge_rabi = data[j].gw_recharge_rabi;
                    }

                    var gw_recharge_annual = "";
                    if (data[j].gw_recharge_annual != null && data[j].gw_recharge_annual != "") {
                        gw_recharge_annual = data[j].gw_recharge_annual;
                    }
                    var wc_department_name = "";
                    if (data[j].wc_department_name != null && data[j].wc_department_name != "") {
                        wc_department_name = data[j].wc_department_name;
                    }
                    var wc_year = "";

                    if (data[j].wc_year != null && data[j].wc_year != "") {
                        wc_year = data[j].wc_year;
                    }

                    if (possiable_funding_source != "Others") {
                        //wc_approx_estimated_cost

                        tr += '<tr id="trWC' + j + '" class="donarclass database_trainer_row " role="row" style="display:none">' +

                            '<td>' + (j + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="village_name' + j + '" value="' + village_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="latitude' + j + '" value="' + latitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="longitude' + j + '" value="' + longitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="type_wc_structure' + j + '" value="' + type_wc_structure + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_storage_capacity' + j + '" value="' + storage_capacity + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="effective_storage_available_use' + j + '" value="' + effective_storage_available_use + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_kharif_no_of_fillings' + j + '" value="' + kharif_no_of_fillings + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_Rabi_no_of_filllings' + j + '" value="' + Rabi_no_of_filllings + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_recharge' + j + '" value="' + recharge + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_gw_recharge_kharif' + j + '" value="' + gw_recharge_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_gw_recharge_rabi' + j + '" value="' + gw_recharge_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_gw_recharge_annual' + j + '" value="' + gw_recharge_annual + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="total_gw_saved' + j + '" value="' + total_gw_saved + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_year' + j + '" value="' + wc_year + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_department_name' + j + '" value="' + wc_department_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_possiable_funding_source' + j + '" value="' + possiable_funding_source + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_approx_estimated_cost' + j + '" value="' + wc_approx_estimated_cost + '" /> </td >' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updateWC(' + data[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelWC(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hideWC_' + j + '"><td>' + (j + 1) + '</td><td>' + village_name + '</td><td>' + latitude + '</td><td>' + longitude + '</td>' +
                            '<td>' + type_wc_structure + '</td><td>' + storage_capacity + '</td><td>' + effective_storage_available_use + '</td> <td>' + kharif_no_of_fillings + '</td> <td>' + Rabi_no_of_filllings + '</td>' +
                            '<td>' + recharge + '</td><td>' + gw_recharge_kharif + '</td><td>' + gw_recharge_rabi + '</td><td>' + gw_recharge_annual + '</td> <td>' + total_gw_saved + '</td><td>' + wc_year + '</td><td>' + wc_department_name + '</td><td>' + possiable_funding_source + '</td><td>' + wc_approx_estimated_cost + '</td>' +
                            '<td> <button class="btn btn-primary disable_btn"  onclick=editrowWC(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" onclick="deleteWC(' + data[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }
                    else {
                        tr += '<tr id="trWC' + j + '" class="donarclass database_trainer_row " role="row" style="display:none">' +

                            '<td>' + (j + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="village_name' + j + '" value="' + village_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="latitude' + j + '" value="' + latitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="longitude' + j + '" value="' + longitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="type_wc_structure' + j + '" value="' + type_wc_structure + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_storage_capacity' + j + '" value="' + storage_capacity + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="effective_storage_available_use' + j + '" value="' + effective_storage_available_use + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_kharif_no_of_fillings' + j + '" value="' + kharif_no_of_fillings + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_Rabi_no_of_filllings' + j + '" value="' + Rabi_no_of_filllings + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_recharge' + j + '" value="' + recharge + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_gw_recharge_kharif' + j + '" value="' + gw_recharge_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_gw_recharge_rabi' + j + '" value="' + gw_recharge_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_gw_recharge_annual' + j + '" value="' + gw_recharge_annual + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="total_gw_saved' + j + '" value="' + total_gw_saved + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_year' + j + '" value="' + wc_year + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_department_name' + j + '" value="' + wc_department_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_funding_source' + j + '" value="' + other_funding_source + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="wc_approx_estimated_cost' + j + '" value="' + wc_approx_estimated_cost + '" /> </td >' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updateWC(' + data[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelWC(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hideWC_' + j + '"><td>' + (j + 1) + '</td><td>' + village_name + '</td><td>' + latitude + '</td><td>' + longitude + '</td>' +
                            '<td>' + type_wc_structure + '</td><td>' + storage_capacity + '</td><td>' + effective_storage_available_use + '</td> <td>' + kharif_no_of_fillings + '</td> <td>' + data[j].Rabi_no_of_filllings + '</td>' +
                            '<td>' + recharge + '</td><td>' + gw_recharge_kharif + '</td><td>' + gw_recharge_rabi + '</td><td>' + gw_recharge_annual + '</td> <td>' + total_gw_saved + '</td><td>' + wc_year + '</td><td>' + wc_department_name + '</td><td>' + other_funding_source + '</td><td>' + wc_approx_estimated_cost + '</td>' +
                            '<td> <button class="btn btn-primary disable_btn"  onclick=editrowWC(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" onclick="deleteWC(' + data[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }

                }

            }





            if (tr == "") {
                tr = '<tr style="text-align:center;"><td colspan="18" style="text-align:center;">No Data</td></tr>';
            }
            $('#WC_tbl_info').html(tr);
            $('.disable_btn').prop("disabled", true);
            if (Auth == "Testing" || Auth == "WSP-Testing") { $('.disable_btn').prop("disabled", false); }
        }
    });
}
$("#wc_storage_capacity,#wc_noof_filling_kharif,#wc_noof_filling_rabi,#wc_recharge").on("keydown keyup", function () {

    var wc_storage_capacity = $('#wc_storage_capacity').val();
    var wc_noof_filling_kharif = $('#wc_noof_filling_kharif').val();
    var wc_noof_filling_rabi = $('#wc_noof_filling_rabi').val();
    var wc_reacharge = $('#wc_recharge').val();


    var wc_effective_storage = 0;

    var wc_gw_recharge_kharif = 0, wc_gw_recharge_rabi = 0, wc_gw_recharge_anuual = 0, wc_gw_total_saved = 0;

    if (wc_storage_capacity != "") {

        wc_effective_storage = parseFloat(wc_storage_capacity) * 0.6;
        $('#wc_effective_storage').val(wc_effective_storage.toFixed(4));
    }
    else {
        $('#wc_effective_storage').val("0");
    }
    if (wc_noof_filling_kharif != "" && wc_effective_storage != "" && wc_reacharge != "") {

        wc_gw_recharge_kharif = parseFloat(wc_effective_storage) * parseFloat(wc_noof_filling_kharif) * parseFloat(wc_reacharge) * 0.01;
        $('#wc_gw_recharge_kharif').val(wc_gw_recharge_kharif.toFixed(4));
    }
    else {
        $('#wc_gw_recharge_kharif').val("0");
    }

    if (wc_noof_filling_rabi != "" && wc_effective_storage != "" && wc_reacharge != "") {

        wc_gw_recharge_rabi = parseFloat(wc_effective_storage) * parseFloat(wc_noof_filling_rabi) * parseFloat(wc_reacharge) * 0.01;
        $('#wc_gw_recharge_rabi').val(wc_gw_recharge_rabi.toFixed(4));
    }
    else {
        $('#wc_gw_recharge_rabi').val("0");
    }
    if (wc_gw_recharge_kharif != "" || wc_gw_recharge_rabi != "") {

        wc_gw_recharge_anuual = parseFloat(wc_gw_recharge_kharif) + parseFloat(wc_gw_recharge_rabi);
        $('#wc_gw_recharge_anuual').val(wc_gw_recharge_anuual.toFixed(4));
    }
    else {
        $('#wc_gw_recharge_anuual').val("0");
    }
    if (wc_gw_recharge_anuual != "" && wc_effective_storage != "") {

        wc_gw_total_saved = parseFloat(wc_gw_recharge_anuual) + parseFloat(wc_effective_storage);
        $('#wc_gw_total_saved').val(wc_gw_total_saved.toFixed(4));
    }
    else {
        $('#wc_gw_total_saved').val("0");
    }
});


function SaveWC_Info() {
    
    $('#SAVE_BTN1').prop('disabled', true);

    var S = 0;
    var wc_year = $("#wc_year").val();
    if (wc_year == "0") {
        $('#wc_Error').text("Please Select Financial Year (Claim)");
        $('#SAVE_BTN1').prop('disabled', false);
        S = 1;
        return;
    }

    var wc_lat = $("#wc_lat").val();
    var wc_long = $("#wc_long").val();
    if (wc_lat == "") {
        S = 1;
        $('#wc_Error').text("Please Enter Latitude");
        $('#SAVE_BTN1').prop('disabled', false);
    }
    if (wc_long == "") {
        S = 1;
        $('#wc_Error').text("Please Enter Longitude");
        $('#SAVE_BTN1').prop('disabled', false);
    }
    var wc_village = $('#wc_village').val();
    if (wc_village == "") {
        S = 1;
        $('#wc_Error').text("Please Enter Your Village Name");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    var wc_type_structure = $('#wc_type_structure').val();

    if (wc_type_structure == 'Other') {
        wc_type_structure = $("#other_wc_type_structure").val();
    }

    if (wc_type_structure == "0" || wc_type_structure == "") {
        S = 1;
        $('#wc_Error').text("Please Select Type of AR Structure");
        $('#SAVE_BTN1').prop('disabled', false);

    }

    
    //var wc_other_structure = $('#wc_other_structure').val();
    //if (wc_other_structure == "") {
    //    S = 1;
    //    $('#wc_Error').text("Please Enter Other WC Structure");
    //}

    var wc_storage_capacity = $('#wc_storage_capacity').val();
    if (wc_storage_capacity == "") {
        S = 1;
        $('#wc_Error').text("Please Enter Storage Capacity (Ha.m)");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    var wc_effective_storage = $('#wc_effective_storage').val();
    var wc_gw_total_saved = $('#wc_gw_total_saved').val();
    //if (wc_effective_storage == "") {
    //    S = 1;
    //    $('#wc_Error').text("Please Enter Effective Storage (Ha.m)");
    //}
    var wc_noof_filling_kharif = $('#wc_noof_filling_kharif').val();
    if (wc_noof_filling_kharif == "") {
        S = 1;
        $('#wc_Error').text("Please Enter No. of Fillings (Kharif)");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    var wc_noof_filling_rabi = $('#wc_noof_filling_rabi').val();
    if (wc_noof_filling_rabi == "") {
        S = 1;
        $('#wc_Error').text("Please Enter No. of Fillings (Rabi)");
        $('#SAVE_BTN1').prop('disabled', false);

    }

    var wc_recharge = $('#wc_recharge').val();
    if (wc_recharge == "") {
        S = 1;
        $('#wc_Error').text("Please Enter Recharge %");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    var wc_gw_recharge_kharif = $('#wc_gw_recharge_kharif').val();

    var wc_gw_recharge_rabi = $('#wc_gw_recharge_rabi').val();
    var wc_gw_recharge_anuual = $('#wc_gw_recharge_anuual').val();
    var wc_possible_funding_source = $('#wc_possible_funding_source').val();
    if (wc_possible_funding_source == "0") {
        S = 1;
        $('#wc_Error').text("Please Enter Possible Funding source");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    //var wc_other_funding_source = $('#wc_other_funding_source').val();
    //if (wc_other_funding_source == "") {
    //    S = 1;
    //    $('#wc_Error').text("Please Enter Other Funding Source");
    //}
    var other_wc_possible_funding_source = $('#other_wc_possible_funding_source').val();



    var wc_approx_estimated_cost = $('#wc_approx_estimated_cost').val();
    if (wc_approx_estimated_cost == "") {
        S = 1;
        $('#wc_Error').text("Please Enter WC ApproxEstimated Cost");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    var wc_cost_type = $('#wc_cost_type').val();
    if (wc_cost_type == "0") {
        S = 1;
        $('#wc_Error').text("Please Enter WC CostType");
        $('#SAVE_BTN1').prop('disabled', false);

    }
    var wc_department_name = $('#wc_department_name').val();
    if (wc_department_name == "Other") {
        wc_department_name = $("#wc_department").val();
        if (wc_department_name == "") {
            alert("Please fill department name");
            $('#SAVE_BTN1').prop('disabled', false);
            S = 1;
            return;
        }
    } else {
        wc_department_name = $('#wc_department_name').val();
    }
    var obj = {};
    if (S == 0) {

        Funding_Source_Info1();
        var Lat = $('#wc_lat').val();
        var Long = $('#wc_long').val();
        $.ajax({
            url: "/WSPHome/WC_Structure_Infoture_Info",
            type: "POST",
            data: function () {
                var data = new FormData();
                data.append("other_wc_possible_funding_source", other_wc_possible_funding_source);
                data.append("wc_village", wc_village);
                data.append("wc_type_structure", wc_type_structure);

                data.append("wc_storage_capacity", wc_storage_capacity);
                data.append("wc_effective_storage", wc_effective_storage);
                data.append("wc_noof_filling_kharif", wc_noof_filling_kharif);


                data.append("wc_noof_filling_rabi", wc_noof_filling_rabi);
                data.append("wc_recharge", wc_recharge);
                data.append("wc_gw_recharge_kharif", wc_gw_recharge_kharif);

                data.append("wc_gw_recharge_rabi", wc_gw_recharge_rabi);
                data.append("wc_gw_recharge_anuual", wc_gw_recharge_anuual);
                data.append("wc_gw_total_saved", wc_gw_total_saved);

                data.append("wc_possible_funding_source", wc_possible_funding_source);
                data.append("latitude", Lat);
                data.append("longitude", Long);

                data.append("wc_approx_estimated_cost", wc_approx_estimated_cost);
                data.append("wc_cost_type", wc_cost_type);
                data.append("wc_department_name", wc_department_name);
                data.append("wc_year", wc_year);
                //data.append("files", jQuery("#wc_file_upload").get(0).files[0]);
                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {
                $('#wc_Error').text(response);
                setTimeout(function () {
                    $('#wc_Error').fadeOut('fast');
                }, 10000);

                if (response != 'Saved Succuessfully' && response != 'Storage Capacity (Ha.m) Value in  Characters' && response != 'Recharge % Value in  Characters' && response != 'Number of Fillings (Rabi) Value in  Characters' && response != 'Number of Fillings (Kharif) Value in  Characters' && response != 'GW Recharge (Ha.m) Rabi Value in  Characters' && response != 'GW Recharge (Ha.m) Kharif Value in  Characters' && response != 'GW Recharge (Ha.m) Annual Value in  Characters' && response != 'Your Entered Approximate Estimated Cost is Negitive Value' && response != 'Your Upload file has Not valid File, Please Upload proper file' && response != 'Your Upload file has Double Extention, Please Upload proper file') {

                    window.location = "/Error/DefaultError";
                }
                $('#SAVE_BTN1').prop('disabled', false);

                var element = document.getElementById('other_wc_possible_funding_source');
                var elementSelect = document.getElementById('wc_possible_funding_source');
                element.style.display = 'none';
                elementSelect.style.display = 'block';
                $('#wc_type_structure').val("0");
                $('#wc_storage_capacity').val("");

                $('#wc_effective_storage').val("");
                $('#wc_gw_total_saved').val("");

                $('#wc_noof_filling_kharif').val("");

                $('#wc_noof_filling_rabi').val("");
                $('#wc_recharge').val("");

                $('#wc_gw_recharge_kharif').val("");

                $('#wc_gw_recharge_rabi').val("");
                $('#wc_gw_recharge_anuual').val("");
                $('#wc_possible_funding_source').val("0");

                $('#other_wc_possible_funding_source').val("");




                $('#wc_approx_estimated_cost').val("");
                $('#wc_cost_type').val("0");
                $("#wc_department_name").val("0")
                $("#wc_department").val("");
                $("#wc_village").val("");
                $("#wc_lat").val("");
                $("#wc_long").val("");
                $("#wc_year").val("0");
                WC_StructureInfo();
                //$('#wc_file_upload').val("");

            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }
}
// delete , edi and update WC table script
function cancelWC(j) {
    $('#hideWC_' + j).show();
    $('#trWC' + j).hide();
}
function editrowWC(j) {

    $('#trWC' + j).show();
    $('#hideWC_' + j).hide();


}

function updateWC(DID, j) {
    
    var obj = {};
    obj.village_name = $('#village_name' + j).val();
    obj.latitude = $('#latitude' + j).val();

    obj.longitude = $('#longitude' + j).val();
    obj.type_wc_structure = $('#type_wc_structure' + j).val();
    obj.storage_capacity = $('#wc_storage_capacity' + j).val();
    obj.effective_storage_available_use = $('#effective_storage_available_use' + j).val();
    obj.kharif_no_of_fillings = $('#wc_kharif_no_of_fillings' + j).val();
    obj.Rabi_no_of_filllings = $('#wc_Rabi_no_of_filllings' + j).val();

    obj.recharge = $('#wc_recharge' + j).val();
    obj.gw_recharge_kharif = $('#wc_gw_recharge_kharif' + j).val();
    obj.gw_recharge_rabi = $('#wc_gw_recharge_rabi' + j).val();
    obj.gw_recharge_annual = $('#wc_gw_recharge_annual' + j).val();
    obj.total_gw_saved = $('#total_gw_saved' + j).val();
    obj.possiable_funding_source = $('#wc_possiable_funding_source' + j).val();
    obj.other_funding_source = $('#other_funding_source' + j).val();
    obj.wc_approx_estimated_cost = $('#wc_approx_estimated_cost' + j).val();
    obj.wc_department_name = $('#wc_department_name' + j).val();
    obj.wc_year = $("#wc_year" + j).val();
    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/WSPHome/UpdateWC',

        data: "{'WC_Structure_Details2': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            $("#WC_error_alert").text(response);
            setTimeout(function () {
                $('#WC_error_alert').fadeOut('fast');
            }, 10000);
            if (response != 'Updated Successfully' && response != 'Not Updated') {
                window.location = "/Error/DefaultError";
            }
            WC_StructureInfo();
        }
    });
}


function deleteWC(id) {
    
    swal({
        title: "Are you sure to delete the entered data? After that, it will not retrieve.",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var obj = {};
                obj.id = id;
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: '/WSPHome/DeleteWC',

                    data: "{'WC_Structure_Details2': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        $("#WC_error_alert").text(response);
                        setTimeout(function () {
                            $('#WC_error_alert').fadeOut('fast');
                        }, 10000);
                        if (response != 'Deleted Successfully' && response != 'Not Deleted') {
                            window.location = "/Error/DefaultError";
                        }
                        WC_StructureInfo();
                    }
                });
            } else {

            }
        });
    
}