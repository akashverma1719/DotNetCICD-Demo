
var lat = 0;
var long = 0;
var ar_filepath = "";
var FullData = "";
function Funding_Source_Info() {
    getLocation();
    $.ajax({
        type: "GET",
        url: "/WSPHome/SupplaySide_Funding_Source",
        //url: "/WSPHome/SupplaySide_Funding_Source",
        contentType: "application/json;charset=utf-8",
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WSPHome/Wspsuppyside";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            $("#wc_possible_funding_source").empty();
            $("#ar_possible_funding_source").empty();
            $("#other_possible_funding_source").empty();

            var optionhtml = "<option value='0'>--Select Possible Funding Source--</option>";
            if (response.length != 0) {
                allstate = [];
                FullData = response;
                var ddlSourse = {};
                for (var i = 0; i < response.length; i++) {
                    if (response[i].funding_soursename != null && response[i].funding_soursename != "") {
                        if (!ddlSourse[response[i].funding_soursename]) {
                            optionhtml += '<option value="' + response[i].funding_soursename + '">' + response[i].funding_soursename + '</option>';
                            allstate.push(response[i].funding_soursename);
                            ddlSourse[response[i].funding_soursename] = response[i].funding_soursename;

                        }
                    }
                }
                $("#wc_possible_funding_source").append(optionhtml);

                $("#ar_possible_funding_source").append(optionhtml);
                $("#other_possible_funding_source").append(optionhtml);

            }


        }

    });
}

function GettingMethod() {
    AR_StructureInfo();
    WC_StructureInfo();
    other_Intervention_Details();
}

function Download_Ar_File() {

    if (ar_filepath != "") {
        window.location = ar_filepath;
    } else {
        alert("No Files");
    }
}

function AR_StructureInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/AR_Structure_Details1',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Error") {
                window.location = "/WSPHome/Wspsuppyside";
            }
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var tr = '';
            
            if (data.length != 0) {
                //$("#ar_type_structure").val(data.type_ar_structure);

                var i = data.length - 1;

                //document.getElementById("ar_type_structure").value = data[i].type_ar_structure;

                //if (data[i].storage_capacity != null && data[i].storage_capacity != "") {
                //    document.getElementById("ar_storage_capacity").value = parseFloat(data[i].storage_capacity).toFixed(2);
                //}

                //if (data[i].kharif_no_of_filling != null && data[i].kharif_no_of_filling != "") {
                //    document.getElementById("ar_noof_filling_kharif").value = parseFloat(data[i].kharif_no_of_filling).toFixed(2);
                //}
                //if (data[i].rabi_no_of_filling != null && data[i].rabi_no_of_filling != "") {
                //    document.getElementById("ar_noof_filling_rabi").value = parseFloat(data[i].rabi_no_of_filling).toFixed(2);
                //}
                //if (data[i].recharge != null && data[i].recharge != "") {
                //    document.getElementById("ar_recharge").value = parseFloat(data[i].recharge).toFixed(2);
                //}

                //if (data[i].gw_recharge_kharif != null && data[i].gw_recharge_kharif != "") {
                //    document.getElementById("ar_gw_recharge_kharif").value = parseFloat(data[i].gw_recharge_kharif).toFixed(2);
                //}
                //if (data[i].gw_recharge_rabi != null && data[i].gw_recharge_rabi != "") {
                //    document.getElementById("ar_gw_recharge_rabi").value = parseFloat(data[i].gw_recharge_rabi).toFixed(2);
                //}
                //if (data[i].gw_recharge_annual != null && data[i].gw_recharge_annual != "") {
                //    document.getElementById("ar_gw_recharge_anuual").value = parseFloat(data[i].gw_recharge_annual).toFixed(2);
                //}

                //document.getElementById("ar_possible_funding_source").value = data[i].possible_funding_source;
                //$('#ar_lat').val(data[i].latitude);
                //$('#ar_long').val(data[i].longitude);

                //if (data[i].latitude != null && data[i].latitude != "") {
                //    $('#ar_lat').val(parseFloat(data[i].latitude));
                //}

                //if (data[i].longitude != null && data[i].longitude != "") {
                //    $('#ar_long').val(parseFloat(data[i].longitude));
                //}

                
                for (var j = 0; j < data.length; j++) {
                    
                    if (data[j].ar_filepath != null && data[j].ar_filepath != "") {
                        ar_filepath = data[j].ar_filepath;
                    }

                    var abc12 = parseFloat(data[j].gw_recharge_kharif) + parseFloat(data[j].gw_recharge_rabi);

                    var ar_approx_estimated_cost = '';
                    if (data[j].ar_approx_estimated_cost != null && data[j].ar_approx_estimated_cost != "") {
                        ar_approx_estimated_cost = data[j].ar_approx_estimated_cost;
                    }

                    var possible_funding_source = '';
                    if (data[j].possible_funding_source != null && data[j].possible_funding_source != "") {
                        possible_funding_source = data[j].possible_funding_source;
                    }

                    var other_funding_source = '';
                    if (data[j].other_funding_source != null && data[j].other_funding_source != "") {
                        other_funding_source = data[j].other_funding_source;
                    }
                    //possible_funding_source
                    //other_funding_source
                    var village_name = "";
                    if (data[j].village_name != null && data[j].village_name != "") {
                        village_name = data[j].village_name;
                    }

                    var longitude = "";
                    if (data[j].longitude != null && data[j].longitude != "") {
                        longitude = data[j].longitude;
                    }

                    var latitude = "";
                    if (data[j].latitude != null && data[j].latitude != "") {
                        latitude = data[j].latitude;
                    }

                    var type_ar_structure = "";
                    if (data[j].type_ar_structure != null && data[j].type_ar_structure != "") {
                        type_ar_structure = data[j].type_ar_structure;
                    }

                    var storage_capacity = "";
                    if (data[j].storage_capacity != null && data[j].storage_capacity != "") {
                        storage_capacity = data[j].storage_capacity;
                    }

                    var kharif_no_of_filling = "";
                    if (data[j].kharif_no_of_filling != null && data[j].kharif_no_of_filling != "") {
                        kharif_no_of_filling = data[j].kharif_no_of_filling;
                    }


                    var rabi_no_of_filling = "";
                    if (data[j].rabi_no_of_filling != null && data[j].rabi_no_of_filling != "") {
                        rabi_no_of_filling = data[j].rabi_no_of_filling;
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
                    var ar_department_name = "";
                    if (data[j].ar_department_name != null && data[j].ar_department_name != "") {
                        ar_department_name = data[j].ar_department_name;
                    }
                    var sp_year = "";
                    if (data[j].sp_year != null && data[j].sp_year != "") {
                        sp_year = data[j].sp_year;
                    }

                    if (possible_funding_source != "Others") {

                        //ar_approx_estimated_cost

                        tr += '<tr id="trAR' + j + '" class="donarclass database_trainer_row " role="row" style="display:none">' +

                            '<td>' + (j + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="village_name' + j + '" value="' + village_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="latitude' + j + '" value="' + latitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="longitude' + j + '" value="' + longitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="type_ar_structure' + j + '" value="' + type_ar_structure + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="storage_capacity' + j + '" value="' + storage_capacity + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="kharif_no_of_filling' + j + '" value="' + kharif_no_of_filling + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="rabi_no_of_filling' + j + '" value="' + rabi_no_of_filling + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="recharge' + j + '" value="' + recharge + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_kharif' + j + '" value="' + gw_recharge_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_rabi' + j + '" value="' + gw_recharge_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_annual' + j + '" value="' + gw_recharge_annual + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="sp_year' + j + '" value="' + sp_year + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="ar_department_name' + j + '" value="' + ar_department_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="possible_funding_source' + j + '" value="' + possible_funding_source + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="ar_approx_estimated_cost' + j + '" value="' + ar_approx_estimated_cost + '" /> </td >' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updateAR(' + data[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelAR(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hideAR_' + j + '"><td>' + (j + 1) + '</td><td>' + village_name + '</td><td>' + latitude + '</td><td>' + longitude + '</td>' +
                            '<td>' + type_ar_structure + '</td><td>' + storage_capacity + '</td><td>' + kharif_no_of_filling + '</td> <td>' + rabi_no_of_filling + '</td> <td>' + recharge + '</td>' +
                            '<td>' + gw_recharge_kharif + '</td><td>' + gw_recharge_rabi + '</td><td>' + gw_recharge_annual + '</td><td>' + sp_year + '</td><td>' + ar_department_name + '</td><td>' + possible_funding_source + '</td><td>' + ar_approx_estimated_cost + '</td>' +
                            '<td > <button class="btn btn-primary disable_btn"  onclick=editrow(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" onclick="deleteAR(' + data[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';
                    }
                    else {
                        tr += '<tr id="trAR' + j + '" class="donarclass database_trainer_row " role="row" style="display:none">' +

                            '<td>' + (j + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="village_name' + j + '" value="' + village_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="latitude' + j + '" value="' + latitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="longitude' + j + '" value="' + longitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="type_ar_structure' + j + '" value="' + type_ar_structure + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="storage_capacity' + j + '" value="' + storage_capacity + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="kharif_no_of_filling' + j + '" value="' + kharif_no_of_filling + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="rabi_no_of_filling' + j + '" value="' + rabi_no_of_filling + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="recharge' + j + '" value="' + recharge + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_kharif' + j + '" value="' + gw_recharge_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_rabi' + j + '" value="' + gw_recharge_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_annual' + j + '" value="' + abc12 + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="sp_year' + j + '" value="' + sp_year + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="ar_department_name' + j + '" value="' + ar_department_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_funding_source' + j + '" value="' + other_funding_source + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="ar_approx_estimated_cost' + j + '" value="' + ar_approx_estimated_cost + '" /> </td >' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updateAR(' + data[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelAR(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hideAR_' + j + '"><td>' + (j + 1) + '</td><td>' + village_name + '</td><td>' + latitude + '</td><td>' + longitude + '</td>' +
                            '<td>' + type_ar_structure + '</td><td>' + storage_capacity + '</td><td>' + kharif_no_of_filling + '</td> <td>' + rabi_no_of_filling + '</td> <td>' + recharge + '</td>' +
                            '<td>' + gw_recharge_kharif + '</td><td>' + gw_recharge_rabi + '</td><td>' + gw_recharge_annual + '</td><td>' + sp_year + '</td><td>' + ar_department_name + '</td><td>' + other_funding_source + '</td><td>' + ar_approx_estimated_cost + '</td>' +
                            '<td> <button class="btn btn-primary disable_btn"  onclick=editrow(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn"  onclick="deleteAR(' + data[j].id + ')"><i class="fa fa-trash"></i></button></td></tr>';

                    }
                }



            }

            if (tr == "") {
                tr = '<tr style="text-align:center;"><td colspan="16" style="text-align:center;">No Data</td></tr>';
            }
            $('#Ar_tbl_info').html(tr);
            $('.disable_btn').prop("disabled", true);
            if (Auth == "Testing" || Auth == "WSP-Testing") { $('.disable_btn').prop("disabled", false); }
        }
    });
}
// delete , edi and update AR table script
function cancelAR(j) {
    $('#hideAR_' + j).show();
    $('#trAR' + j).hide();
}
function editrow(j) {
    $('#trAR' + j).show();
    $('#hideAR_' + j).hide();
}

function updateAR(DID, j) {
    var obj = {};
    obj.village_name = $('#village_name' + j).val();
    obj.latitude = $('#latitude' + j).val();
    obj.longitude = $('#longitude' + j).val();
    obj.type_ar_structure = $('#type_ar_structure' + j).val();
    obj.storage_capacity = $('#storage_capacity' + j).val();
    obj.kharif_no_of_filling = $('#kharif_no_of_filling' + j).val();
    obj.rabi_no_of_filling = $('#rabi_no_of_filling' + j).val();
    obj.recharge = $('#recharge' + j).val();
    obj.gw_recharge_kharif = $('#gw_recharge_kharif' + j).val();
    obj.gw_recharge_rabi = $('#gw_recharge_rabi' + j).val();
    obj.gw_recharge_annual = $('#gw_recharge_annual' + j).val();
    obj.possible_funding_source = $('#possible_funding_source' + j).val();
    obj.other_funding_source = $('#other_funding_source' + j).val();
    obj.ar_approx_estimated_cost = $('#ar_approx_estimated_cost' + j).val();
    obj.ar_department_name = $('#ar_department_name' + j).val();
    obj.sp_year = $("#sp_year" + j).val();
    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/WSPHome/UpdateAR',

        data: "{'AR_Structure_Details2': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            $("#AR_error_alert").text(response);
            setTimeout(function () {
                $('#AR_error_alert').fadeOut('fast');
            }, 10000);
            if (response != "Updated Successfully" && response != "Not Updated") {

                window.location = "/Error/DefaultError";
            }
            AR_StructureInfo();
        }
    });
}

function deleteAR(id) {
    
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
                    url: '/WSPHome/DeleteAR',

                    data: "{'AR_Structure_Details2': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        $("#AR_error_alert").text(response);
                        setTimeout(function () {
                            $('#AR_error_alert').fadeOut('fast');
                        }, 10000);
                        if (response != "Deleted Successfully" && response != "Not Deleted") {

                            window.location = "/Error/DefaultError";
                        }
                        AR_StructureInfo();
                    }
                });
            } else {

            }
        });
    
}

//End delete , edi and update AR table script

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    //x.innerHTML = "Latitude: " + position.coords.latitude +
    //    "<br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    //$('#ar_lat').val(lat.toFixed(2));
    //$('#ar_long').val(long.toFixed(2));
    //$('#wc_lat').val(lat.toFixed(2));
    //$('#wc_long').val(long.toFixed(2));
    //$('#other_lat').val(lat.toFixed(2));
    //$('#other_long').val(long.toFixed(2));
}


var ar_reacharge = 0, ar_gw_recharge_kharif = 0, ar_gw_recharge_rabi = 0, ar_gw_recharge_anuual = 0, ar_noof_filling_kharif = 0, ar_noof_filling_rabi = 0, ar_storage_capacity = 0;

$("#ar_recharge,#ar_storage_capacity,#ar_noof_filling_kharif,#ar_noof_filling_rabi").on("keydown keyup", function () {
    Cal();


});

function Cal() {
    
    ar_storage_capacity = $('#ar_storage_capacity').val();
    ar_noof_filling_kharif = $('#ar_noof_filling_kharif').val();
    ar_noof_filling_rabi = $('#ar_noof_filling_rabi').val();

    ar_reacharge = $('#ar_recharge').val();

    //var ar_gw_recharge_kharif = 0, ar_gw_recharge_rabi = 0;
    if (ar_storage_capacity != "" && ar_noof_filling_kharif != "" && ar_reacharge != "") {

        ar_gw_recharge_kharif = parseFloat(ar_storage_capacity) * parseFloat(ar_noof_filling_kharif) * parseFloat(ar_reacharge) * 0.01;
        $('#ar_gw_recharge_kharif').val(ar_gw_recharge_kharif.toFixed(4));
    }
    else {
        $('#ar_gw_recharge_kharif').val("0");
    }
    if (ar_storage_capacity != "" && ar_noof_filling_rabi != "" && ar_reacharge != "") {

        ar_gw_recharge_rabi = parseFloat(ar_storage_capacity) * parseFloat(ar_noof_filling_rabi) * parseFloat(ar_reacharge) * 0.01;
        $('#ar_gw_recharge_rabi').val(ar_gw_recharge_rabi.toFixed(4));
    } else {
        $('#ar_gw_recharge_rabi').val("0");
    }

    if (ar_gw_recharge_kharif != 0 || ar_gw_recharge_rabi != 0 && ar_reacharge != "") {
        var SS = ar_gw_recharge_kharif + ar_gw_recharge_rabi;
        $('#ar_gw_recharge_anuual').val(SS.toFixed(4));
    } else {
        $('#ar_gw_recharge_anuual').val("0");
    }


}

//saving  data

function SaveAR_Info() {

    
    $('#SAVE_BTN2').prop('disabled', true);

    var S = 0;
    var sp_year = $("#sp_year").val();
    if (sp_year == "0") {
        $('#ar_Error').text("Please Select Financial Year (Claim)");
        $('#SAVE_BTN2').prop('disabled', false);
        S = 1;
        return;
    }
    var ar_village = $('#ar_village').val();
    if (ar_village == "") {
        S = 1;
        $('#ar_Error').text("Please Enter Your Village Name");
        $('#SAVE_BTN2').prop('disabled', false);

    }
    var ar_lat = $("#ar_lat").val();
    var ar_long = $("#ar_long").val();
    if (ar_lat == "") {
        S = 1;
        $('#ar_Error').text("Please Enter Latitude");
        $('#SAVE_BTN2').prop('disabled', false);
    }
    if (ar_long == "") {
        S = 1;
        $('#ar_Error').text("Please Enter Longitude");
        $('#SAVE_BTN2').prop('disabled', false);
    }


    var ar_type_structure = $('#ar_type_structure').val();
    if (ar_type_structure == 'Other') {
        ar_type_structure = $('#other_ar_type_structure').val();
    }
    if (ar_type_structure == "0" || ar_type_structure == "") {
        S = 1;
        $('#ar_Error').text("Please Select Type of AR Structure");
        $('#SAVE_BTN2').prop('disabled', false);
    }

    if (ar_type_structure == 'Other') {
        ar_type_structure = $('#other_ar_type_structure').val();
    }
    //var ar_other_structure = $('#ar_other_structure').val();
    //if (ar_other_structure == "") {
    //    S = 1;
    //    $('#ar_Error').text("Please Enter Other AR Structure");
    //}

    var ar_storage_capacity = $('#ar_storage_capacity').val();
    if (ar_storage_capacity == "") {
        S = 1;
        $('#ar_Error').text("Please Enter Storage Capacity (Ha.m)");
        $('#SAVE_BTN2').prop('disabled', false);
    }



    var ar_noof_filling_kharif = $('#ar_noof_filling_kharif').val();
    if (ar_noof_filling_kharif == "") {
        S = 1;
        $('#ar_Error').text("Please Enter No. of Fillings (Kharif)");
        $('#SAVE_BTN2').prop('disabled', false);
    }
    var ar_noof_filling_rabi = $('#ar_noof_filling_rabi').val();
    if (ar_noof_filling_rabi == "") {
        S = 1;
        $('#ar_Error').text("Please Enter No. of Fillings (Rabi)");
        $('#SAVE_BTN2').prop('disabled', false);
    }

    var ar_recharge = $('#ar_recharge').val();
    if (ar_recharge == "") {
        S = 1;
        $('#ar_Error').text("Please Enter Recharge %");
        $('#SAVE_BTN2').prop('disabled', false);
    }
    
    var ar_gw_recharge_kharif = $('#ar_gw_recharge_kharif').val();
    var other_ar_possible_funding_source = $('#other_ar_possible_funding_source').val();
    var ar_gw_recharge_rabi = $('#ar_gw_recharge_rabi').val();
    var ar_gw_recharge_anuual = $('#ar_gw_recharge_anuual').val();
    var ar_possible_funding_source = $('#ar_possible_funding_source').val();
    if (ar_possible_funding_source == "0") {
        S = 1;
        $('#ar_Error').text("Please Enter Possible Funding source");
        $('#SAVE_BTN2').prop('disabled', false);
    }
    //var ar_other_funding_source = $('#ar_other_funding_source').val();
    //if (ar_other_funding_source == "") {
    //    S = 1;
    //    $('#ar_Error').text("Please Enter Other Funding Source");
    //}




    var ar_approx_estimated_cost = $('#ar_approx_estimated_cost').val();
    if (ar_approx_estimated_cost == "") {
        S = 1;
        $('#ar_Error').text("Please Enter AR Approx Estimated Cost");
        $('#SAVE_BTN2').prop('disabled', false);
    }

    var ar_cost_type = $('#ar_cost_type').val();
    if (ar_cost_type == "0") {
        S = 1;
        $('#ar_Error').text("Please Enter AR Cost Type");
        $('#SAVE_BTN2').prop('disabled', false);
    }

    var ar_department_name = $("#ar_department_name").val();

    if (ar_department_name == "Other") {
        ar_department_name = $("#ar_department").val();
        
        if (ar_department_name == "") {
            alert("Please fill department name");
            $('#SAVE_BTN2').prop('disabled', false);
            S = 1;
            return;
        }
    } else {
        ar_department_name = $('#ar_department_name').val();
    }

    var obj = {};

    if (S == 0) {
        var Lat = $('#ar_lat').val();
        var Long = $('#ar_long').val();
        $.ajax({
            url: "/WSPHome/AR_Structure_Info",
            type: "POST",
            data: function () {
                var data = new FormData();
                data.append("other_ar_possible_funding_source", other_ar_possible_funding_source);
                data.append("ar_village", ar_village);
                data.append("ar_type_structure", ar_type_structure);
                
                data.append("ar_storage_capacity", ar_storage_capacity);
                data.append("ar_noof_filling_kharif", ar_noof_filling_kharif);
                data.append("ar_noof_filling_rabi", ar_noof_filling_rabi);


                data.append("ar_recharge", ar_recharge);
                data.append("ar_gw_recharge_kharif", ar_gw_recharge_kharif);
                data.append("ar_gw_recharge_rabi", ar_gw_recharge_rabi);

                data.append("ar_gw_recharge_anuual", ar_gw_recharge_anuual);
                data.append("ar_possible_funding_source", ar_possible_funding_source);
                data.append("latitude", Lat);

                data.append("longitude", Long);
                data.append("ar_approx_estimated_cost", ar_approx_estimated_cost);
                data.append("ar_cost_type", ar_cost_type);
                data.append("ar_department_name", ar_department_name);
                data.append("sp_year", sp_year);
                //data.append("files", jQuery("#ar_file_upload").get(0).files[0]);
                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {
                alert(response);
                $('#ar_Error').text(response);
                setTimeout(function () {
                    $('#ar_Error').fadeOut('fast');
                }, 10000);
                if (response != "Saved Succuessfully" && response != "Storage Capacity (Ha.m) Value in  Characters" && response != "Recharge % Value in  Characters" && response != "Number of Fillings (Rabi) Value in  Characters" && response != "Number of Fillings (Kharif) Value in  Characters" && response != "GW Recharge (Ha.m) Rabi Value in  Characters" && response != "GW Recharge (Ha.m) Kharif Value in  Characters" && response != "GW Recharge (Ha.m) Annual Value in  Characters" && response != "Your Entered Approximate Estimated Cost is Negitive Value" && response != "Your Upload file has Not valid File, Please Upload proper file" && response != "Your Upload file has Double Extention, Please Upload proper file") {
                    window.location = "/Error/DefaultError";

                }
                $('#SAVE_BTN2').prop('disabled', false);
                AR_StructureInfo();
                var element = document.getElementById('other_ar_possible_funding_source');
                var elementSelect = document.getElementById('ar_possible_funding_source');
                element.style.display = 'none';
                elementSelect.style.display = 'block';
                $('#ar_type_structure').val("0");

                $('#ar_storage_capacity').val("");

                $('#ar_noof_filling_kharif').val("");

                $('#ar_noof_filling_rabi').val("");
                $("#ar_department_name").val("0");
                $("#ar_department").val("");
                $('#ar_recharge').val("");

                $('#ar_gw_recharge_kharif').val("");
                $('#other_ar_possible_funding_source').val("");
                $('#ar_gw_recharge_rabi').val("");
                $('#ar_gw_recharge_anuual').val("");
                $('#ar_possible_funding_source').val("0");

                $('#ar_approx_estimated_cost').val("");
                $('#ar_cost_type').val("0");
                $("#ar_lat").val("");
                $("#ar_long").val("");
                $("#ar_village").val("");
                $("#sp_year").val("0");
                //$('#ar_file_upload').val("");
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }
}