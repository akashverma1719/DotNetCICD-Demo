
var Filepath = "";

function other_Intervention_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/other_Intervention_Details1',
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

                //
                //document.getElementById("other_type_structure").value = data[i].other_structure;
                //// document.getElementById("other_unit").value = data[i].unit;
                //if (data[i].storage_capacity != "" && data[i].storage_capacity != "") {

                //    document.getElementById("other_storage_capacity").value = parseFloat(data[i].storage_capacity).toFixed(2);
                //}
                //if (data[i].no_of_filling_kharif != "" && data[i].no_of_filling_kharif != "") {

                //    document.getElementById("other_noof_filling_kharif").value = parseFloat(data[i].no_of_filling_kharif).toFixed(2);
                //}
                //if (data[i].no_of_filling_rabi != "" && data[i].no_of_filling_rabi != "") {

                //    document.getElementById("other_noof_filling_rabi").value = parseFloat(data[i].no_of_filling_rabi).toFixed(2);
                //}
                //if (data[i].recharge != "" && data[i].recharge != "") {

                //    document.getElementById("other_recharge").value = parseFloat(data[i].recharge).toFixed(2);
                //}
                //if (data[i].gw_recharge_kharif != "" && data[i].gw_recharge_kharif != "") {

                //    document.getElementById("other_gw_recharge_kharif").value = parseFloat(data[i].gw_recharge_kharif).toFixed(2);
                //}
                //if (data[i].gw_recharge_rabi != "" && data[i].gw_recharge_rabi != "") {

                //    document.getElementById("other_gw_recharge_rabi").value = parseFloat(data[i].gw_recharge_rabi).toFixed(2);
                //}
                //if (data[i].gw_recharge_annual != "" && data[i].gw_recharge_annual != "") {

                //    document.getElementById("other_gw_recharge_anuual").value = parseFloat(data[i].gw_recharge_annual).toFixed(2);
                //}
                //document.getElementById("other_possible_funding_source").value = data[i].possible_funding_source;
                //if (data[i].latitude != null && data[i].latitude != "") {
                //    $('#other_lat').val(parseFloat(data[i].latitude));
                //}

                //if (data[i].longitude != null && data[i].longitude != "") {
                //    $('#other_long').val(parseFloat(data[i].longitude));
                //}


                //anyother_approx_estimated_cost
                
                for (var j = 0; j < data.length; j++) {
                    if (data[j].anyother_filepath != null && data[j].anyother_filepath != "") {
                        Filepath = data[j].anyother_filepath;
                    }

                    var anyother_approx_estimated_cost = '';
                    if (data[j].anyother_approx_estimated_cost != null && data[j].anyother_approx_estimated_cost != "") {
                        anyother_approx_estimated_cost = data[j].anyother_approx_estimated_cost;
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
                    var totals_0;
                    totals_0 = parseFloat(data[j].gw_recharge_kharif) + parseFloat(data[j].gw_recharge_rabi);



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

                    var other_structure = "";
                    if (data[j].other_structure != null && data[j].other_structure != "") {
                        other_structure = data[j].other_structure;
                    }

                    var storage_capacity = "";
                    if (data[j].storage_capacity != null && data[j].storage_capacity != "") {
                        storage_capacity = data[j].storage_capacity;
                    }

                    var no_of_filling_kharif = "";
                    if (data[j].no_of_filling_kharif != null && data[j].no_of_filling_kharif != "") {
                        no_of_filling_kharif = data[j].no_of_filling_kharif;
                    }

                    var no_of_filling_rabi = "";
                    if (data[j].no_of_filling_rabi != null && data[j].no_of_filling_rabi != "") {
                        no_of_filling_rabi = data[j].no_of_filling_rabi;
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


                    var other_department_name = "";
                    if (data[j].other_department_name != null && data[j].other_department_name != "") {
                        other_department_name = data[j].other_department_name;
                    }

                    var any_year = "";
                    if (data[j].any_year != null && data[j].any_year != "") {
                        any_year = data[j].any_year;
                    }
                    
                    if (possible_funding_source != "Others") {
                        tr += '<tr id="trAO' + j + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                            '<td>' + (j + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="village_name' + j + '" value="' + village_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="lat' + j + '" value="' + latitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="long' + j + '" value="' + longitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_structure' + j + '" value="' + other_structure + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="storage_cap' + j + '" value="' + storage_capacity + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="no_of_filling_kharif1' + j + '" value="' + no_of_filling_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="no_of_filling_rabi1' + j + '" value="' + no_of_filling_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="recharge1' + j + '" value="' + recharge + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_kharif1' + j + '" value="' + gw_recharge_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_rabi1' + j + '" value="' + gw_recharge_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_annual1' + j + '" value="' + totals_0 + '" /> </td >' +

                            '<td class="tdborder"><input type="text" class="form-control" id="any_year' + j + '" value="' + any_year + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_department_name' + j + '" value="' + other_department_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="possible_funding_source1' + j + '" value="' + possible_funding_source + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="anyother_approx_estimated_cost' + j + '" value="' + anyother_approx_estimated_cost + '" /> </td >' +

                            '<td><button type="button" class="btn btn-primary" onclick="update1234(' + data[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelAO(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hideAO_' + j + '"><td>' + (j + 1) + '</td><td>' + village_name + '</td><td>' + latitude + '</td><td>' + longitude + '</td>' +
                            '<td>' + other_structure + '</td><td>' + storage_capacity + '</td><td>' + no_of_filling_kharif + '</td> <td>' + no_of_filling_rabi + '</td> <td>' + recharge + '</td>' +
                            '<td>' + gw_recharge_kharif + '</td><td>' + gw_recharge_rabi + '</td><td>' + totals_0 + '</td><td>' + any_year + '</td><td>' + other_department_name + '</td><td>' + possible_funding_source + '</td><td>' + anyother_approx_estimated_cost + '</td>' +
                            '<td> <button class="btn btn-primary disable_btn"  onclick=editrowAO(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" onclick="delete1234(' + data[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }

                    else {
                        tr += '<tr id="trAO' + j + '" class="donarclass database_trainer_row " role="row" style="display:none">' +

                            '<td>' + (j + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="village_name' + j + '" value="' + data[j].village_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="lat' + j + '" value="' + data[j].latitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="long' + j + '" value="' + data[j].longitude + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_structure' + j + '" value="' + data[j].other_structure + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="storage_cap' + j + '" value="' + data[j].storage_capacity + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="no_of_filling_kharif1' + j + '" value="' + data[j].no_of_filling_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="no_of_filling_rabi1' + j + '" value="' + data[j].no_of_filling_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="recharge1' + j + '" value="' + data[j].recharge + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_kharif1' + j + '" value="' + data[j].gw_recharge_kharif + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_rabi1' + j + '" value="' + data[j].gw_recharge_rabi + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="gw_recharge_annual1' + j + '" value="' + totals_0 + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="any_year' + j + '" value="' + any_year + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_department_name' + j + '" value="' + other_department_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="other_funding_source1' + j + '" value="' + other_funding_source + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="anyother_approx_estimated_cost' + j + '" value="' + anyother_approx_estimated_cost + '" /> </td >' +

                            '<td><button type="button"  class="btn btn-primary" onclick="update1234(' + data[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelAO(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +

                            '<tr role="row"  id="hideAO_' + j + '"><td>' + (j + 1) + '</td><td>' + data[j].village_name + '</td><td>' + data[j].latitude + '</td><td>' + data[j].longitude + '</td>' +
                            '<td>' + data[j].other_structure + '</td><td>' + data[j].storage_capacity + '</td><td>' + data[j].no_of_filling_kharif + '</td> <td>' + data[j].no_of_filling_rabi + '</td> <td>' + data[j].recharge + '</td>' +
                            '<td>' + data[j].gw_recharge_kharif + '</td><td>' + data[j].gw_recharge_rabi + '</td><td>' + totals_0 + '</td><td>' + any_year + '</td><td>' + other_department_name + '</td><td>' + other_funding_source + '</td><td>' + anyother_approx_estimated_cost + '</td>' +
                            '<td> <button class="btn btn-primary disable_btn"  onclick=editrowAO(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" onclick="delete1234(' + data[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }
                }
                if (tr == "") {
                    tr = '<tr style="text-align:center;"><td colspan="16" style="text-align:center;"></td></tr>';
                }

                $('#AO_tbl_info').html(tr);
            }
            if (tr == "") {
                tr = '<tr style="text-align:center;"><td colspan="18" style="text-align:center;">No Data</td></tr>';
            }
            $('#AO_tbl_info').html(tr);
            $('.disable_btn').prop("disabled", true);
            if (Auth == "Testing" || Auth == "WSP-Testing") { $('.disable_btn').prop("disabled", false); }
        }
    });
}

$("#other_storage_capacity,#other_noof_filling_kharif,#other_noof_filling_rabi,#other_recharge").on("keydown keyup", function () {

    

    var other_storage_capacity = $('#other_storage_capacity').val();
    if (other_storage_capacity == "") {
        other_storage_capacity = 0;
    }
    var other_noof_filling_kharif = $('#other_noof_filling_kharif').val();
    if (other_noof_filling_kharif == "") {
        other_noof_filling_kharif = 0;
    }
    var other_noof_filling_rabi = $('#other_noof_filling_rabi').val();
    if (other_noof_filling_rabi == "") {
        other_noof_filling_rabi = 0;
    }
    var other_recharge = $('#other_recharge').val();
    if (other_recharge == "") {
        other_recharge = 0;
    }



    var other_gw_recharge_kharif = parseFloat(other_storage_capacity) * parseFloat(other_noof_filling_kharif) * parseFloat(other_recharge) * 0.01;
    $('#other_gw_recharge_kharif').val(other_gw_recharge_kharif.toFixed(4));

    var other_gw_recharge_rabi = parseFloat(other_storage_capacity) * parseFloat(other_noof_filling_rabi) * parseFloat(other_recharge) * 0.01;
    $('#other_gw_recharge_rabi').val(other_gw_recharge_rabi.toFixed(4));


    var other_gw_recharge_anuual = parseFloat(other_gw_recharge_kharif) + parseFloat(other_gw_recharge_rabi);
    $('#other_gw_recharge_anuual').val(other_gw_recharge_anuual.toFixed(4));


});

function SaveOther_Info() {
    $('#SAVE_BTN').prop('disabled', true);

    var S = 0;
    var any_year = $("#any_year").val();
    if (any_year == "0") {
        $('#other_Error').text("Please Select Financial Year (Claim)");
        $('#SAVE_BTN').prop('disabled', false);
        S = 1;
        return;
    }
    var other_lat = $("#other_lat").val();
    var other_long = $("#other_long").val();
    if (other_lat == "") {
        S = 1;
        $('#other_Error').text("Please Enter Latitude");
        $('#SAVE_BTN').prop('disabled', false);
    }
    if (other_long == "") {
        S = 1;
        $('#other_Error').text("Please Enter Longitude");
        $('#SAVE_BTN').prop('disabled', false);
    }

    var other_village = $('#other_village').val();
    if (other_village == "") {
        S = 1;
        $('#other_Error').text("Please Enter Your Village Name");
        $('#SAVE_BTN').prop('disabled', false);

    }
    var other_type_structure = $('#other_type_structure').val();
    if (other_type_structure == "0") {
        S = 1;
        $('#other_Error').text("Please Select Other Structure");
        $('#SAVE_BTN').prop('disabled', false);
    }
    //var other_unit = $('#other_unit').val();
    //if (other_unit == "0") {
    //    S = 1;
    //    $('#other_Error').text("Please Enter Unit");
    //}

    var other_storage_capacity = $('#other_storage_capacity').val();
    if (other_storage_capacity == "") {
        S = 1;
        $('#other_Error').text("Please Enter Storage Capacity (Ha.m)");
        $('#SAVE_BTN').prop('disabled', false);
    }

    var other_noof_filling_kharif = $('#other_noof_filling_kharif').val();
    if (other_noof_filling_kharif == "") {
        S = 1;
        $('#other_Error').text("Please Enter No. of Fillings (Kharif)");
        $('#SAVE_BTN').prop('disabled', false);
    }
    var other_noof_filling_rabi = $('#other_noof_filling_rabi').val();
    if (other_noof_filling_rabi == "") {
        S = 1;
        $('#other_Error').text("Please Enter No. of Fillings (Rabi)");
        $('#SAVE_BTN').prop('disabled', false);
    }

    var other_recharge = $('#other_recharge').val();
    if (other_recharge == "") {
        S = 1;
        $('#other_Error').text("Please Enter Recharge %");
        $('#SAVE_BTN').prop('disabled', false);
    }
    var other_gw_recharge_kharif = $('#other_gw_recharge_kharif').val();

    var other_gw_recharge_rabi = $('#other_gw_recharge_rabi').val();
    var other_gw_recharge_anuual = $('#other_gw_recharge_anuual').val();
    var other_possible_funding_source = $('#other_possible_funding_source').val();
    if (other_possible_funding_source == "0") {
        S = 1;
        $('#other_Error').text("Please Enter Possible Funding source");
        $('#SAVE_BTN').prop('disabled', false);
    }
    var other_other_possible_funding_source = $('#other_other_possible_funding_source').val();




    var anyother_approx_estimated_cost = $('#anyother_approx_estimated_cost').val();
    if (anyother_approx_estimated_cost == "") {
        S = 1;
        $('#anyother_approx_estimated_cost').text("Please Enter Anyother Approx Estimated Cost");
        $('#SAVE_BTN').prop('disabled', false);
    }

    var anyother_cost_type = $('#anyother_cost_type').val();
    if (anyother_cost_type == "0") {
        S = 1;
        $('#anyother_cost_type').text("Please Enter Anyother Cost Type");
        $('#SAVE_BTN').prop('disabled', false);
    }
    var other_department_name = $('#other_department_name').val();

    if (other_department_name == "Other") {
        other_department_name = $("#other_department").val();
        if (other_department_name == "") {
            alert("Please fill department name");
            $('#SAVE_BTN').prop('disabled', false);
            S = 1;
            return;
        }
    } else {
        other_department_name = $('#other_department_name').val();
    }

    var obj = {};
    if (S == 0) {
        var Lat = $('#other_lat').val();
        var Long = $('#other_long').val();
        $.ajax({
            url: "/WSPHome/other_Intervention_Info",
            type: "POST",
            data: function () {
                var data = new FormData();
                data.append("other_other_possible_funding_source", other_other_possible_funding_source);
                data.append("other_village", other_village);
                data.append("other_type_structure", other_type_structure);

                data.append("other_storage_capacity", other_storage_capacity);
                data.append("other_noof_filling_kharif", other_noof_filling_kharif);
                data.append("other_noof_filling_rabi", other_noof_filling_rabi);


                data.append("other_recharge", other_recharge);
                data.append("other_gw_recharge_kharif", other_gw_recharge_kharif);
                data.append("other_gw_recharge_rabi", other_gw_recharge_rabi);

                data.append("other_gw_recharge_anuual", other_gw_recharge_anuual);
                data.append("other_possible_funding_source", other_possible_funding_source);
                data.append("latitude", Lat);

                data.append("longitude", Long);
                data.append("anyother_approx_estimated_cost", anyother_approx_estimated_cost);
                data.append("anyother_cost_type", anyother_cost_type);
                data.append("other_department_name", other_department_name);
                data.append("any_year", any_year);
                //data.append("files", jQuery("#any_other_inventrix_file_upload").get(0).files[0]);
                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                $('#other_Error').text(response);
                setTimeout(function () {
                    $('#other_Error').fadeOut('fast');
                }, 10000);

                if (response != "Saved Succuessfully" && response != "Recharge  Value in  Characters" && response != "Number of Fillings (Rabi)  Value in  Characters" && response != "Number of Fillings (Kharif)  Value in  Characters" && response != "Storage Capacity (Ha.m)  Value in  Characters" && response != "Your Entered Approximate Estimated Cost is Negitive Value" && response != "Your Upload file has Double Extention, Please Upload proper file" && response != "Your Upload file has Not valid File, Please Upload proper file" && response != "Logout") {
                    window.location = "/Error/DefaultError";

                }
                $('#SAVE_BTN').prop('disabled', false);
                other_Intervention_Details();
                var element = document.getElementById('other_other_possible_funding_source');
                var elementSelect = document.getElementById('other_possible_funding_source');
                element.style.display = 'none';
                elementSelect.style.display = 'block';
                $('#other_type_structure').val("");
                $('#other_storage_capacity').val("");
                $('#other_noof_filling_kharif').val("");
                $('#other_noof_filling_rabi').val("");
                $('#other_recharge').val("");
                $('#other_gw_recharge_kharif').val("");
                $('#other_gw_recharge_rabi').val("");
                $('#other_gw_recharge_anuual').val("");
                $('#other_possible_funding_source').val("0");
                $('#anyother_cost_type').val("0");
                $('#other_other_possible_funding_source').val("");
                $("#other_department_name").val("0");
                $("#other_department").val("");
                $("#other_lat").val("");
                $("#other_long").val("");
                $("#anyother_approx_estimated_cost").val("");
                $("#other_department").hide();
                $("#other_department_name").show();
                $("#any_year").val("0");
                // $('#any_other_inventrix_file_upload').val("");
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }
}

function Download_Anyother_Info() {
    if (Filepath != "") {

        window.location = Filepath;
    }
    else {
        alert("No Files");
    }
}
// delete , edi and update AR table script
function cancelAO(j) {
    $('#hideAO_' + j).show();
    $('#trAO' + j).hide();
}
function editrowAO(j) {

    $('#trAO' + j).show();
    $('#hideAO_' + j).hide();
}

function update1234(DID, j) {
    
    var obj = {};
    obj.village_name = $('#village_name' + j).val();
    obj.latitude = $('#lat' + j).val();
    obj.longitude = $('#long' + j).val();
    obj.other_structure = $('#other_structure' + j).val();
    obj.storage_capacity = $('#storage_cap' + j).val();

    obj.no_of_filling_kharif = $('#no_of_filling_kharif1' + j).val();
    obj.no_of_filling_rabi = $('#no_of_filling_rabi1' + j).val();

    obj.recharge = $('#recharge1' + j).val();
    obj.gw_recharge_kharif = $('#gw_recharge_kharif1' + j).val();
    obj.gw_recharge_rabi = $('#gw_recharge_rabi1' + j).val();
    obj.gw_recharge_annual = $('#gw_recharge_annual1' + j).val();

    obj.anyother_approx_estimated_cost = $('#anyother_approx_estimated_cost' + j).val();
    obj.possible_funding_source = $('#possible_funding_source1' + j).val();
    obj.other_funding_source = $('#other_funding_source1' + j).val();
    obj.other_department_name = $('#other_department_name' + j).val();
    obj.any_year = $("#any_year" + j).val();
    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/WSPHome/UpdateAO',

        data: "{'AO_Structure_Details2': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            $("#AO_error_alert").text(response);
            setTimeout(function () {
                $('#AO_error_alert').fadeOut('fast');
            }, 10000);
            if (response != "Updated Successfully" && response != "Not Updated") {
                window.location = "/Error/DefaultError";
            }
            other_Intervention_Details();
        }
    });
}

function delete1234(id) {
    
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
                    url: '/WSPHome/DeleteAO',

                    data: "{'AO_Structure_Details2': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        $("#AO_error_alert").text(response);
                        setTimeout(function () {
                            $('#AO_error_alert').fadeOut('fast');
                        }, 10000);
                        if (response != "Deleted Successfully" && response != "Not Deleted") {
                            window.location = "/Error/DefaultError";

                        }
                        other_Intervention_Details();
                    }
                });
            } else {

            }
        });

}