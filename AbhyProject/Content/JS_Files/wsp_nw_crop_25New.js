$(document).ready(function () {
    fetch_Crop();

    GetFunding_crop();

});

//function get_approved_status() {
//    $.ajax({
//        type: 'POST',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/Wsp_new/get_approved_status",
//        dataType: 'JSON',
//        success: function (data) {
//            
//            if (StateOfficer != "Gram Panchyat Nodal Officer") {
//                $('input[type=text]').prop("disabled", true)
//                $('select').prop("disabled", true);
//                $('input[type=file]').prop("disabled", true)
//                $('.btn_disabled').prop("disabled", true);
//            }

//            if (data > 1) {
//                $('input[type=text]').prop("disabled", true)
//                $('select').prop("disabled", true);
//                $('input[type=file]').prop("disabled", true)
//                $('.btn_disabled').prop("disabled", true);
//            }
//        }
//    });
//}
var val_kharif = 0;
var val_rabi = 0;
var val_summer = 0;
var uti_id = 0;
function fetch_Crop() {
    var total_crop_area = 0;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Fetch_Irrigation_kharif",
        dataType: 'JSON',
        success: function (data) {
            if (data.length > 0) {
                $('#total_water_dem').text(data[0].total_water_dem);
                $('#txgrdwater').val(data[0].per_ground_water);
                $('#txsurwater').text(data[0].per_surface_water);
                $('#uti_ground_water_kharif').val(data[0].uti_ground_water);
                $('#uti_surface_water_kharif').val(data[0].uti_surface_water);

                $('#kharif_Table').html('');
                $('#rabi_Table').html('');
                $('#summer_Table').html('');
                $('#TblData_GRAM_PANCHAYAT_DATABASE_a_crop_or').html('');
                $('#TblData_GRAM_PANCHAYAT_DATABASE_b_crop_or').html('');
                $('#TblData_GRAM_PANCHAYAT_DATABASE_c_crop_or').html('');

                val_kharif = 0;
                val_rabi = 0;
                val_summer = 0;
                var j = 0;
                var k = 0;
                var l = 0;
                var code = '';
                for (var i = 0; i < data.length; i++) {
                    var crop_area = parseFloat(data[i].area).toFixed(4);
                    total_crop_area += parseFloat(crop_area);
                    if (i == 0) {
                        code = '';
                    }
                    if (data[i].season_type == 'kharif') {
                        var sum_area = parseFloat(data[i].area);
                        var sum_waterReq = parseFloat(data[i].gross_water);
                        val_kharif += data[i].water_demand;


                        code += '<tr><td>' + ++j + '</td>';
                        code += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        code += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        code += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        code += '<td>' + data[i].area + '</td>';
                        code += '<td>' + data[i].gross_water + '</td>';
                        code += '<td> ' + data[i].water_demand.toFixed(4) + '</td>';
                        code += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary" onclick="set_change(' + data[i].id + ')">Change Crop</button > </td></tr>';
                    }
                }
                code += '</tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_kharif.toFixed(4) + '</td></tr>'
                $('#Crop_Diversion_Kharif_Water_demand').text(val_kharif.toFixed(4));
                $('#TblData_GRAM_PANCHAYAT_DATABASE_a_crop_or').append(code);
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        code = '';
                    }
                    if (data[i].season_type == 'rabi') {
                        var sum_area = parseFloat(data[i].area);
                        var sum_waterReq = parseFloat(data[i].gross_water);
                        val_rabi += data[i].water_demand;
                        code = '<tr><td>' + ++k + '</td>';
                        code += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        code += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        code += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        code += '<td>' + data[i].area + '</td>';
                        code += '<td>' + data[i].gross_water + '</td>';
                        code += '<td>' + data[i].water_demand.toFixed(4) + ' </td>';
                        code += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary" onclick="set_change(' + data[i].id + ')">Change Crop</button > </td></tr>';
                        $('#TblData_GRAM_PANCHAYAT_DATABASE_b_crop_or').append(code);
                    }
                }
                code = '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_rabi.toFixed(4) + '</td></tr>'
                $('#Crop_Diversion_Rabi_Water_demand').text(val_rabi.toFixed(4));
                $('#TblData_GRAM_PANCHAYAT_DATABASE_b_crop_or').append(code);
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        code = '';
                    }
                    if (data[i].season_type == 'summer') {

                        var sum_area = parseFloat(data[i].area);
                        var sum_waterReq = parseFloat(data[i].gross_water);
                        val_summer += data[i].water_demand;
                        var code = '<tr><td>' + ++l + '</td>';
                        code += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        code += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        code += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        code += '<td>' + data[i].area + '</td>';
                        code += '<td>' + data[i].gross_water + '</td>';
                        code += '<td>' + data[i].water_demand.toFixed(4) + ' </td>';
                        code += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary" onclick="set_change(' + data[i].id + ')">Change Crop</button > </td></tr>';
                        $('#TblData_GRAM_PANCHAYAT_DATABASE_c_crop_or').append(code);
                    }
                }
                code = '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_summer.toFixed(4) + '</td></tr>'
                $('#Crop_Diversion_Summer_Crop_Water_demand').text(val_summer.toFixed(4));
                $('#TblData_GRAM_PANCHAYAT_DATABASE_c_crop_or').append(code);
                //$('#irri_kharif_waterdemand').text(val_kharif.toFixed(4));
                //$('#irri_rabi_waterdemand').text(val_rabi.toFixed(4));
                //$('#irri_summer_waterdemand').text(val_summer.toFixed(4));
                $('#total_crop_area_crop').val(total_crop_area.toFixed(4));
            }
            get_approved_status();
            Get_crop_data_changed();
        }
    });
}
function set_change(id) {
    var obj = {};
    uti_id = id;
    obj.id = id;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Fetch_Irrigation_kharif_id",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data.length > 0) {
                if (data[0].season_type == "kharif") {
                    $('#txt_category').val(data[0].crop_category);
                    $('#txt_type').val(data[0].crop_type);
                    $('#txt_name').val(data[0].crop_name);
                    $('#txt_area').val(data[0].area);
                    $('#txt_w_req').val(data[0].gross_water);
                }
                else if (data[0].season_type == "rabi") {
                    $('#txt_category_rabi').val(data[0].crop_category);
                    $('#txt_type_rabi').val(data[0].crop_type);
                    $('#txt_name_rabi').val(data[0].crop_name);
                    $('#txt_area_rabi').val(data[0].area);
                    $('#txt_w_req_rabi').val(data[0].gross_water);
                }
                else if (data[0].season_type == "summer") {
                    $('#txt_category_summer').val(data[0].crop_category);
                    $('#txt_type_summer').val(data[0].crop_type);
                    $('#txt_name_summer').val(data[0].crop_name);
                    $('#txt_area_summer').val(data[0].area);
                    $('#txt_w_req_summer').val(data[0].gross_water);
                }
            }
        }
    });

}
var count_cr_crop = 1;
function addrow_a_part_kharif_crop() {
    if (count_cr_crop == 1) {
        var code = '<tr><td><button id="btn_save_kh' + count_cr_crop + '" class="btn btn-primary" onclick="saveKharif_sp_crop(\'ddlcrop_khaif_type1' + count_cr_crop + '\',\'ddlcrop_khaif_type2' + count_cr_crop + '\',\'ddlcrop_khaif' + count_cr_crop + '\',\'area_Kharif' + count_cr_crop + '\',\'gross_khairf' + count_cr_crop + '\',\'Crop_Diversion_Kharif_Water_demand\',\'Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1\',\'Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1\')">Save</button > </td>';
        //code += '<td>' + count_cr_crop + '</td>';
        code += '<td><select id="ddlcrop_khaif_type1' + count_cr_crop + '" onchange="type2_getcp(\'ddlcrop_khaif_type1' + count_cr_crop + '\',' + count_cr_crop + ',\'ddlcrop_khaif_type2' + count_cr_crop + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select id="ddlcrop_khaif_type2' + count_cr_crop + '" onchange="DropDown_getcrop(\'ddlcrop_khaif_type2' + count_cr_crop + '\',\'Kharif\',' + count_cr_crop + ',\'ddlcrop_khaif' + count_cr_crop + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td><select id="ddlcrop_khaif' + count_cr_crop + '" onchange="check_combo_sp(\'ddlcrop_khaif_type1' + count_cr_crop + '\',\'ddlcrop_khaif_type2' + count_cr_crop + '\',\'ddlcrop_khaif' + count_cr_crop + '\',\'btn_save_kh' + count_cr_crop + '\',\'TblData_GRAM_PANCHAYAT_DATABASE_a_crop_or\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_Kharif' + count_cr_crop + '" oninput="Kharif_WaterRequire_crop(\'area_Kharif\',\'gross_khairf\',\'Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1\',' + count_cr_crop + ',\'kharif\',event,this)" class="form-control decimal"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="gross_khairf' + count_cr_crop + '" oninput="Kharif_WaterRequire_crop(\'area_Kharif\',\'gross_khairf\',\'Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1\',' + count_cr_crop + ',\'kharif\',event,this)" class="form-control decimal"></td></tr>';
        /*code += '<td><input type="numbdata-decimal="4" maxlength="10"er" id="area_pr_kharif' + count_cr_crop + '" oninput="khairfNetWater_crop(\'area_Kharif\',\'gross_khairf\',\'area_pr_kharif\',\'sprinkler_kharif_total_sprinkler_waterdemand\',' + count_cr_crop + ',\'sprinkler_kharif_total_reduction_waterdemand\',\'Sprinkler_Water_Demand\')" class="form-control"></td></tr >';*/

        $('table#TblData_abc_part1_crop tbody').prepend(code);
        count_cr_crop++;
    } else {
        alert("Please enter the data in all the fields");
    }
}

var count_rabi_cr_crop = 1;
function addrow_a_part_rabi_crop() {
    if (count_rabi_cr_crop == 1) {
        var code = '<tr><td><button id="btn_save_rb' + count_rabi_cr_crop + '" class="btn btn-primary" onclick="saverabi_sp_crop(\'ddlcrop_rabi_type1' + count_rabi_cr_crop + '\',\'ddlcrop_rabi_type2' + count_rabi_cr_crop + '\',\'ddlcrop_rabi' + count_rabi_cr_crop + '\',\'area_rabi' + count_rabi_cr_crop + '\',\'gross_rabi' + count_rabi_cr_crop + '\',\'Crop_Diversion_Rabi_Water_demand\',\'Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1\',\'Total_Saving_Through_Crop_Diversion_irrigation_Rabi11\')">Save</button > </td>';
        //code += '<td>' + count_rabi_cr_crop + '</td>';
        code += '<td><select id="ddlcrop_rabi_type1' + count_rabi_cr_crop + '" onchange="type2_getcp(\'ddlcrop_rabi_type1' + count_rabi_cr_crop + '\',' + count_rabi_cr_crop + ',\'ddlcrop_rabi_type2' + count_rabi_cr_crop + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select id="ddlcrop_rabi_type2' + count_rabi_cr_crop + '" onchange="DropDown_getcrop(\'ddlcrop_rabi_type2' + count_rabi_cr_crop + '\',\'Kharif\',' + count_rabi_cr_crop + ',\'ddlcrop_rabi' + count_rabi_cr_crop + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td><select id="ddlcrop_rabi' + count_rabi_cr_crop + '" onchange="check_combo_sp(\'ddlcrop_rabi_type1' + count_rabi_cr_crop + '\',\'ddlcrop_rabi_type2' + count_rabi_cr_crop + '\',\'ddlcrop_rabi' + count_rabi_cr_crop + '\',\'btn_save_rb' + count_rabi_cr_crop + '\',\'TblData_GRAM_PANCHAYAT_DATABASE_b_crop_or\')" ><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_rabi' + count_rabi_cr_crop + '" oninput="Kharif_WaterRequire_crop(\'area_rabi\',\'gross_rabi\',\'Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1\',' + count_rabi_cr_crop + ',\'rabi\',event,this)" class="form-control decimal"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="gross_rabi' + count_rabi_cr_crop + '" oninput="Kharif_WaterRequire_crop(\'area_rabi\',\'gross_rabi\',\'Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1\',' + count_rabi_cr_crop + ',\'rabi\',event,this)" class="form-control decimal"></td></tr>';
        /*code += '<td><input type="numbdata-decimal="4" maxlength="10"er" id="area_pr_rabi' + count_rabi_cr_crop + '" oninput="khairfNetWater_crop(\'area_rabi\',\'gross_rabi\',\'area_pr_rabi\',\'sprinkler_rabi_total_rabi_waterdemand\',' + count_rabi_cr_crop + ',\'sprinkler_rabi_total_reduction_waterdemand\',\'Sprinkler_RabiWater_Demand\')" class="form-control"></td></tr >';*/

        $('table#TblData_abc_part2_crop tbody').prepend(code);
        count_rabi_cr_crop++;
    } else {
        alert("Please enter the data in all the fields")
    }
    //count=count+1;
    //alert(count);
}
var count_summer_cr_crop = 1;
function addrow_a_part_Summer_crop() {
    if (count_summer_cr_crop == 1) {
        var code = '<tr><td><button id="btn_save_rb' + count_summer_cr_crop + '" class="btn btn-primary" onclick="savesummer_sp_crop(\'ddlcrop_summer_type1' + count_summer_cr_crop + '\',\'ddlcrop_summer_type2' + count_summer_cr_crop + '\',\'ddlcrop_summer' + count_summer_cr_crop + '\',\'area_summer' + count_summer_cr_crop + '\',\'gross_summer' + count_summer_cr_crop + '\',\'Crop_Diversion_Summer_Crop_Water_demand\',\'Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1\',\'Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1\')">Save</button > </td>';
        //code += '<td>' + count_summer_cr_crop + '</td>';
        code += '<td><select id="ddlcrop_summer_type1' + count_summer_cr_crop + '" onchange="type2_getcp(\'ddlcrop_summer_type1' + count_summer_cr_crop + '\',' + count_summer_cr_crop + ',\'ddlcrop_summer_type2' + count_summer_cr_crop + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select id="ddlcrop_summer_type2' + count_summer_cr_crop + '" onchange="DropDown_getcrop(\'ddlcrop_summer_type2' + count_summer_cr_crop + '\',\'Summer\',' + count_summer_cr_crop + ',\'ddlcrop_summer' + count_summer_cr_crop + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td><select id="ddlcrop_summer' + count_summer_cr_crop + '" onchange="check_combo_sp(\'ddlcrop_summer_type2' + count_summer_cr_crop + '\',\'ddlcrop_summer_type2' + count_summer_cr_crop + '\',\'ddlcrop_summer' + count_summer_cr_crop + '\',\'btn_save_rb' + count_summer_cr_crop + '\',\'TblData_GRAM_PANCHAYAT_DATABASE_c_crop_or\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_summer' + count_summer_cr_crop + '" oninput="Kharif_WaterRequire_crop(\'area_summer\',\'gross_summer\',\'Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1\',' + count_summer_cr_crop + ',\'summer\',event,this)" class="form-control decimal"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="gross_summer' + count_summer_cr_crop + '" oninput="Kharif_WaterRequire_crop(\'area_summer\',\'gross_summer\',\'Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1\',' + count_summer_cr_crop + ',\'summer\',event,this)" class="form-control decimal"></td></tr>';
        /*code += '<td><input type="numbdata-decimal="4" maxlength="10"er" id="area_pr_summer' + count_summer_cr_crop + '" oninput="khairfNetWater_crop(\'area_summer\',\'gross_summer\',\'area_pr_summer\',\'sprinkler_summer_total_summer_waterdemand\',' + count_summer_cr_crop + ',\'sprinkler_summer_total_reduction_waterdemand\',\'Summer_Crops_Water_Demand\')" class="form-control"></td></tr >';*/

        $('table#TblData_abc_part3_crop tbody').prepend(code);
        count_summer_cr_crop++;
    } else {
        alert("Please enter the data in all the fields");
    }
    //count=count+1;
    //alert(count);
}

function type2_getcp(ddlcrop_khaif_type1, count, Bind_ddl) {

    var val_crop_category = '#' + ddlcrop_khaif_type1 + '';
    var BindTo = '#' + Bind_ddl + '';
    var Val_check = $(val_crop_category).val();

    if (Val_check != '0') {
        if (Val_check == 'General Crops') {
            var AwpStateArr = [];
            AwpStateArr.push("Cereal");
            AwpStateArr.push("Fibre");
            AwpStateArr.push("Forage");
            AwpStateArr.push("Millet");
            AwpStateArr.push("Narcotic");
            AwpStateArr.push("Oilseed");
            AwpStateArr.push("Pulse");
            AwpStateArr.push("Sugar");
            var idd = BindTo;
            var slection_options = '';
            slection_options += '<option value="0">--Select Type2-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
            });

            $(idd).html(slection_options);
        }

        if (Val_check == 'Horticulture Crops') {
            var idd = BindTo;
            var AwpStateArr = [];
            AwpStateArr.push("Vegetables");
            AwpStateArr.push("Fruits");
            AwpStateArr.push("Spices");
            AwpStateArr.push("Aromatic and Medicinal Plants");
            AwpStateArr.push("Plantation Crops");
            AwpStateArr.push("Flowers");
            slection_options += '<option value="0">--Select Type2-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
        if (Val_check == 'Forestry') {
            var idd = BindTo;
            var AwpStateArr = [];
            AwpStateArr.push("Forestry Plants");

            slection_options += '<option value="0">--Select Type2-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
            });
            $(idd).html(slection_options);
        }
    }
}

function DropDown_getcrop(food_for, food_type, count, Bind_ddl) {

    var food_for = '#' + food_for + '';
    var BindTo = '#' + Bind_ddl + '';

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_dropdown_data",
        dataType: 'JSON',
        data: { food_for: $(food_for).val(), food_type: food_type },
        success: function (data) {
            var AwpStateArr = [];
            for (var i = 0; i < data.length; i++) {
                AwpStateArr.push(data[i].food_name);
            }
            var idd = BindTo;
            var slection_options = '';
            slection_options += '<option value="0">--Select Crop-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
    });
}



function Kharif_WaterRequire_crop(area, gross_water, setVal, count, season_type, e, e1) {

    enforceNumberValidation(e1);

    if (season_type != undefined) {
        var val_area = '#' + area + '' + count + '';
        //var Data = e.target.value;
        var Data = parseFloat($(val_area).val());
        check_area(Data, season_type, gross_water, area, count)
    }
    //var txt_area = $('#txt_area').val();
    var sum_area = 0;
    var sum_gross_water = 0;
    var type = 0;
    //for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var valarea = $(val_area).val();
    var valgross_water = $(val_gross_water).val();
    //if (parseFloat($(val_area).val()) > parseFloat(txt_area)) {
    //    alert("Please fill Proper Data");
    //    $(val_area).val('');
    //}
    if (valarea != '', valgross_water != '') {
        sum_area = parseFloat(sum_area) + parseFloat(valarea);
        sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
        type = 1;
    }

    //}
    //check_area();

    var val_set = '#' + setVal + '';

    if (type == 1) {
        $(val_set).text(parseFloat((parseFloat(sum_area) * parseFloat(sum_gross_water)) / 1000).toFixed(4));
        reduction_calc();
    }
    else {
        $(val_set).text('');
    }
}

function khairfNetWater_crop(area, gross_water, areaPr, setVal, count, lastSet, minusOne) {

    var sum_area = 0;
    var sum_gross_water = 0;
    var sum_areapr = 0;
    var type = 0;

    for (var i = 1; i <= count; i++) {
        var val_area = '#' + area + '' + i + '';
        var val_areapr = '#' + areaPr + '' + i + '';
        var val_gross_water = '#' + gross_water + '' + i + '';

        var valarea = $(val_area).val();
        var valareapr = $(val_areapr).val();
        var valgross_water = $(val_gross_water).val();
        //if (valarea == '' || isNaN.valarea || valarea == undefined || isNaN(valarea)) {
        //    valarea = 0;
        //}
        //if (valgross_water == '' || isNaN.valgross_water || valgross_water == undefined || isNaN(val_gross)) {
        //    valgross_water = 0;
        //}
        //if (valareapr == '' || isNaN.valareapr || valareapr == undefined || isNaN(valareapr)) {
        //    valareapr = 0;
        //}
        if (valarea != '', valareapr != '', valgross_water != '') {
            sum_area = parseFloat(sum_area) + parseFloat(valarea);
            sum_areapr = parseFloat(sum_areapr) + parseFloat(valareapr);
            sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
            type = 1;
        }

    }
    var Net_water = '#' + setVal + '';
    var val_lastset = '#' + lastSet + '';

    var val_mins = '#' + minusOne + '';

    var per = 20;
    if (type == 1) {
        var val_minus = 100 - per;
        var percentage = sum_gross_water * val_minus / 100;

        $(Net_water).text(parseFloat((((sum_area - sum_areapr) * sum_gross_water * 0.001) + (sum_areapr * (sum_gross_water * percentage / 100) * .001)).toFixed(4)));

        $(val_lastset).text(parseFloat((parseFloat($(val_mins).text()) - parseFloat($(Net_water).text()))).toFixed(4));
    }
    else {
        $(val_lastset).text('');
    }


}
function check_combo_sp(ddl1, ddl2, ddl3, btn, checktbl) {
    var check_k = 0;
    var check_r = 0;
    var check_s = 0;
    var button_ = '#' + btn;


    first_check = '#' + ddl1;
    second_check = '#' + ddl2;
    third_check = '#' + ddl3;
    var category = '#' + checktbl + "  .crop_category";
    var type = '#' + checktbl + "  .crop_type";
    var name = '#' + checktbl + "  .crop_name";
    $(category).each(function () {

        var get_textbox_value = $(this).text();
        if (get_textbox_value == $(first_check).val()) {
            check_k = 1;
            return false;
        }
        else {
            check_k = 0;
        }

    });
    if (check_k == 1) {
        $(type).each(function () {
            var a = $(second_check).val();
            var get_textbox_value = $(this).text();
            if (get_textbox_value == $(second_check).val()) {
                check_r = 1;
                return false;
            }
            else {
                check_r = 0;
            }
        });
    }
    if (check_r == 1) {
        $(name).each(function () {

            var get_textbox_value = $(this).text();
            if (get_textbox_value == $(third_check).val()) {
                check_s = 1;
                return false;
            } else {
                check_s = 0;
            }

        });
    }

    //if (check_k == 1 && check_r == 1 && check_s == 1) {

    //    alert('Data Already Inserted If you want to add ,please delete first');
    //    $(button_).prop('disabled', true);
    //    //btn.hide();
    //    return;
    //}
    //else {
    //    $(button_).prop('disabled', false);
    //}
}

function check_area(e, season_type, gross_water, area, count) {

    var txt_w_req = '';
    var crop_name = '';
    var check_val = '';
    var gross_water = '#' + gross_water + count + '';
    var gross_water_value = parseFloat($(gross_water).val());
    if (isNaN(gross_water_value)) {
        gross_water_value = 0;
    }
    var area = '#' + area + '' + count + '';
    if (season_type == "kharif") {
        check_val = $('#txt_area').val();
        crop_name = $("#txt_name").val();
        txt_w_req = parseFloat($("#txt_w_req").val());
        if (parseFloat(check_val) < e) {
            alert('Please Fill Area below existing area');
            $(area).val("");
            return;
        } else if (gross_water_value >= txt_w_req) {
            alert('Please Fill Changed Water Requirement below Original Water Requirement');
            $(gross_water).val("");
            return;
        }
    }
    if (season_type == "rabi") {
        crop_name = $("#txt_name_rabi").val();
        check_val = $('#txt_area_rabi').val();
        txt_w_req = parseFloat($("#txt_w_req_rabi").val());
        if (parseFloat(check_val) < e) {
            alert('Please Fill Area below existing area');
            $(area).val("");
            return;
        }
        else if (gross_water_value >= txt_w_req) {
            alert('Please Fill Changed Water Requirement below Original Water Requirement');
            $(gross_water).val("");
            return;
        }
    }
    if (season_type == "summer") {
        crop_name = $("#txt_name_summer").val();
        txt_w_req = parseFloat($("#txt_w_req_summer").val());
        check_val = $('#txt_area_summer').val();
        if (parseFloat(check_val) < e) {
            alert('Please Fill Area below existing area');
            $(area).val("");
            return;
        }
        else if (gross_water_value >= txt_w_req) {
            alert('Please Fill Changed Water Requirement below Original Water Requirement');
            $(gross_water).val("");
            return;
        }
    }
    var obj = {};
    obj.season_type = season_type;
    obj.original_crop_name = crop_name;
    obj.area_ch = e;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/ChackChangedCropArea",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            if (response != 0) {
                if (parseFloat(check_val) < response) {
                    alert('Please Fill Area below existing area');
                    $(area).val("");
                    return;
                }
            }
        }
    })
}

function saveKharif_sp_crop(ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlcrop_khaif, area_Kharif, gross_khairf, original_water_demand, change_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlcrop_khaif + '';
    var val_area = '#' + area_Kharif + '';
    var val_gross_water = '#' + gross_khairf + '';
    var val_net_water_demand = '#' + change_water_demand + '';
    var val_original_water_demand = '#' + original_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var original_name = $("#txt_name").val();
    var original_area = $("#txt_area").val();
    var obj = {};
    obj.season_type = "kharif"
    obj.original_crop_name = original_name;
    obj.original_area = original_area;
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.crop_name = $(val_crop_name).val();
    obj.area = $(val_area).val();
    obj.water_req = $(val_gross_water).val();
    obj.change_water_demand = $(val_net_water_demand).text();
    obj.original_wt_dmd = $(val_original_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.uti_id = uti_id;
    if (uti_id == 0) {
        alert('Please Select a orignal crop first');
        return;
    } else if ($(val_crop_category).val() == 0) {
        alert("please select crop category");
        $(val_crop_category).focus()
        return;
    } else if ($(val_crop_type).val() == 0) {
        alert("please select crop type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == 0) {
        alert("please select crop name");
        $(val_crop_name).focus()
        return;
    } else if ($(val_area).val() == '') {
        alert("please enter area under crop shifted (ha)");
        $(val_area).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("please enter water requirement (mm)");
        $(val_gross_water).focus();
        return;
    }

    var check_val = $('#txt_area').val();
    var current_val = $(val_area).val();
    if (parseFloat(check_val) < parseFloat(current_val)) {
        alert('Please Fill Area below existing area');
        return;
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveCropChanged",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            count_cr_crop = 1;
            Get_crop_data_changed();
            $("#TblData_GRAM_PANCHAYAT_DATABASE_a_crop_ch_nw").html('');

        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}



function saverabi_sp_crop(ddlcrop_rabi_type, ddlcrop_rabi_type2, ddlcrop_rabi, area_rabi, gross_rabi, original_water_demand, change_water_demand, reduction_gw) {


    var val_crop_category = '#' + ddlcrop_rabi_type + '';
    var val_crop_type = '#' + ddlcrop_rabi_type2 + '';
    var val_crop_name = '#' + ddlcrop_rabi + '';
    var val_area = '#' + area_rabi + '';
    var val_gross_water = '#' + gross_rabi + '';
    var val_net_water_demand = '#' + change_water_demand + '';
    var val_original_water_demand = '#' + original_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var original_name = $("#txt_name_rabi").val();
    var original_area = $("#txt_area_rabi").val();

    var obj = {};
    obj.season_type = "rabi"
    obj.original_crop_name = original_name;
    obj.original_area = original_area;
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.crop_name = $(val_crop_name).val();
    obj.area = $(val_area).val();
    obj.water_req = $(val_gross_water).val();
    obj.change_water_demand = $(val_net_water_demand).text();
    obj.original_wt_dmd = $(val_original_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.uti_id = uti_id;
    if (uti_id == 0) {
        alert('Please Select a orignal crop first');
        return;
    } else if ($(val_crop_category).val() == 0) {
        alert("please select crop category");
        $(val_crop_category).focus()
        return;
    } else if ($(val_crop_type).val() == 0) {
        alert("please select crop type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == 0) {
        alert("please select crop name");
        $(val_crop_name).focus()
        return;
    } else if ($(val_area).val() == '') {
        alert("please enter area under crop shifted (ha)");
        $(val_area).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("please enter water requirement (mm)");
        $(val_gross_water).focus();
        return;
    }
    var check_val = $('#txt_area_rabi').val();
    var current_val = $(val_area).val();
    if (parseFloat(check_val) < parseFloat(current_val)) {
        alert('Please Fill Area below existing area');
        return;
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveCropChanged",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            count_rabi_cr_crop = 1;
            Get_crop_data_changed();
            //$('#SAVE_BTN2').prop('disabled', false)
            $("#TblData_GRAM_PANCHAYAT_DATABASE_b_crop_ch_nw").html('');

            Get_sprinkler_data();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
function savesummer_sp_crop(ddlcrop_summer_type, ddlcrop_summer_type2, ddlcrop_summer, area_summer, gross_summer, original_water_demand, change_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_summer_type + '';
    var val_crop_type = '#' + ddlcrop_summer_type2 + '';
    var val_crop_name = '#' + ddlcrop_summer + '';
    var val_area = '#' + area_summer + '';
    var val_gross_water = '#' + gross_summer + '';
    var val_net_water_demand = '#' + change_water_demand + '';
    var val_original_water_demand = '#' + original_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var original_name = $("#txt_name_summer").val();
    var original_area = $("#txt_area_summer").val();

    var obj = {};
    obj.season_type = "summer"
    obj.original_crop_name = original_name;
    obj.original_area = original_area;
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.crop_name = $(val_crop_name).val();
    obj.area = $(val_area).val();
    obj.water_req = $(val_gross_water).val();
    obj.change_water_demand = $(val_net_water_demand).text();
    obj.original_wt_dmd = $(val_original_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.uti_id = uti_id;
    if (uti_id == 0) {
        alert('Please Select a orignal crop first');
        return;
    } else if ($(val_crop_category).val() == 0) {
        alert("please select crop category");
        $(val_crop_category).focus()
        return;
    } else if ($(val_crop_type).val() == 0) {
        alert("please select crop type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == 0) {
        alert("please select crop name");
        $(val_crop_name).focus()
        return;
    } else if ($(val_area).val() == '') {
        alert("please enter area under crop shifted (ha)");
        $(val_area).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("please enter water requirement (mm)");
        $(val_gross_water).focus();
        return;
    }
    var check_val = $('#txt_area_summer').val();
    var current_val = $(val_area).val();
    if (parseFloat(check_val) < parseFloat(current_val)) {
        alert('Please Fill Area below existing area');
        return;
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveCropChanged",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //Get_sprinkler_data();
            //$('#SAVE_BTN2').prop('disabled', false)
            count_summer_cr_crop = 1;
            Get_crop_data_changed();
            $("#TblData_GRAM_PANCHAYAT_DATABASE_c_crop_ch_nw").html('');
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function Get_crop_data_changed() {
    var srl_crop_kharif = 1;
    var srl_crop_rabi = 1;
    var srl_crop_summer = 1;

    var area1 = 0;
    var water_re1 = 0;
    var final_val = 0;
    var total_area_proposed = 0;
    //var total_demand_crop = 0;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_ch_Crop_data",
        dataType: 'JSON',
        success: function (data) {

            $("#TblData_GRAM_PANCHAYAT_DATABASE_a_crop_ch").html('');
            $("#TblData_GRAM_PANCHAYAT_DATABASE_b_crop_ch").html('');
            $("#TblData_GRAM_PANCHAYAT_DATABASE_c_crop_ch").html('');
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var area_proposed = parseFloat(data[i].area_ch);
                    total_area_proposed += parseFloat(area_proposed);
                    if (i == 0) {
                        TotalChangeWaterDemand = 0;
                        water_re1 = 0;
                    }
                    if (data[i].season_type == "kharif") {

                        var tr = '<tr><td>' + srl_crop_kharif + '</td><td>' + data[i].original_crop_name + '</td><td>' + data[i].original_area + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_ch + '</td><td>' + data[i].water_req + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_crop(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        TotalChangeWaterDemand += parseFloat(data[i].change_water_demand);
                        water_re1 += parseFloat(data[i].water_req);

                        $("#TblData_GRAM_PANCHAYAT_DATABASE_a_crop_ch").append(tr);
                        srl_crop_kharif++;
                    }
                }

                //final_val = (parseFloat((parseFloat(area1) * parseFloat(water_re1)) / 1000).toFixed(4));
                $('#Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1').text(TotalChangeWaterDemand);

                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        TotalChangeWaterDemand = 0;
                        water_re1 = 0;
                    }
                    if (data[i].season_type == "rabi") {
                        var tr = '<tr><td>' + srl_crop_rabi + '</td><td>' + data[i].original_crop_name + '</td><td>' + data[i].original_area + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_ch + '</td><td>' + data[i].water_req + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_crop(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        TotalChangeWaterDemand += parseFloat(data[i].change_water_demand);
                        water_re1 += parseFloat(data[i].water_req);

                        $("#TblData_GRAM_PANCHAYAT_DATABASE_b_crop_ch").append(tr);
                        srl_crop_rabi++;
                    }
                }
                //final_val = (parseFloat((parseFloat(area1) * parseFloat(water_re1)) / 1000).toFixed(4));
                $('#Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1').text(TotalChangeWaterDemand);
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        TotalChangeWaterDemand = 0;
                        water_re1 = 0;
                    }
                    if (data[i].season_type == "summer") {

                        var tr = '<tr><td>' + srl_crop_summer + '</td><td>' + data[i].original_crop_name + '</td><td>' + data[i].original_area + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_ch + '</td><td>' + data[i].water_req + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_crop(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        TotalChangeWaterDemand += parseFloat(data[i].change_water_demand);
                        water_re1 += parseFloat(data[i].water_req);

                        $("#TblData_GRAM_PANCHAYAT_DATABASE_c_crop_ch").append(tr);
                        srl_crop_summer++;
                    }
                }
                //final_val = (parseFloat((parseFloat(area1) * parseFloat(water_re1)) / 1000).toFixed(4));
                $('#Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1').text(TotalChangeWaterDemand);
                $('#total_area_proposed_crop').val(total_area_proposed.toFixed(4));
                reduction_calc();
            } else {
                $('#Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1').text(0.0)
                $('#Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1').text(0.0);
                $('#Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1').text(0.0);
                get_approved_status();
                reduction_calc();

            }
        }
    });
}



function Delete_data_crop(idd) {
    var obj = {};
    obj.IDD = idd;
    swal({
        title: "Are you sure to delete the entry?",
        text: "If you delete an entry, the funding source data entered will be automatically deleted. Which you will have to fill out again.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; chatset=utf-8',
                    url: "/WSP_2024_25_update/Delete_data_crop",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        alert(response);
                        //$('#SAVE_BTN2').prop('disabled', false)
                        //Get_crop_data_changed();
                        fetch_Crop();
                    },
                    error: function () {
                        alert("Error While Saving Data")
                        // $('#SAVE_BTN2').prop('disabled', false)
                    }
                });
            } else {

            }
        });

}
function saveFundingData_crop() {

    var approx_est_cost = $('#aprx_est_cost_sprinkler_crop').val();
    var crop_year = $('#crop_year').val();
    var crop_department = $('#crop_department').val();
    var crop_scheme = $('#crop_scheme').val();



    var area_proposed_crop = $("#area_proposed_crop").val();

    if (area_proposed_crop == "") {
        alert("Please Enter Area Proposed for Crop (ha)");
        $("#area_proposed_crop").focus();
        return;
    }
    else if (crop_year == '0') {
        alert('Please Select financial');
        $('#crop_year').focus();
        return;
    } else if (crop_department == '0') {
        alert('Please Select Department Name');
        $('#crop_department').focus();
        return;
    } else if (crop_scheme == '0') {
        alert('Please Select Scheme name');
        $('#crop_scheme').focus();
        return;
    }
    else if (approx_est_cost == '') {
        alert('Please fill Approximate Estimated Cost (in lakh)');
        $('#aprx_est_cost_sprinkler_crop').focus();
        return;
    }
    if (crop_scheme == "Other") {
        if ($("#other_scheme_cp").val() == "") {
            alert("Please Enter Other Scheme Name");
            return;
        }
    }
    var obj = {};
    obj.fund_for = "Crop Diversification"
    obj.area_proposed = area_proposed_crop;
    obj.total_crop_area = $('#total_crop_area_crop').val();
    obj.total_area_proposed = $('#total_area_proposed_crop').val();
    obj.other_scheme = $("#other_scheme_cp").val();
    obj.financial_year = crop_year;
    obj.department_name = crop_department
    obj.scheme_name = crop_scheme;
    obj.approx_est_cost = $('#aprx_est_cost_sprinkler_crop').val();


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveFundingData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            $('#aprx_est_cost_sprinkler_crop').val("");
            $('#crop_year').val('0');
            $('#crop_department').val('0');
            $('#crop_scheme').val('0');
            $("#other_scheme_cp").val("");
            $("#other_scheme_cp").hide();
            $("#area_proposed_crop").val("");
            //$('#SAVE_BTN2').prop('disabled', false)
            GetFunding_crop();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
var total_area_proposed_crop = 0;
var area_proposed_for_fund_crop = 0;
function GetFunding_crop() {
    total_area_proposed_crop = 0;
    area_proposed_for_fund_crop = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var obj = {};
    obj.fund_for = "Crop Diversification";
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_fund_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#source_crop_show').html('');
            if (data.length > 0) {
                var tr = '';


                for (var i = 0; i < data.length; i++) {
                    if (data[i].fund_for == 'Crop Diversification') {
                        var scheme_name = data[i].scheme_name;
                        if (scheme_name == "Other") {
                            scheme_name = data[i].scheme_name + " - " + data[i].other_scheme;
                        }
                        tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].financial_year + '</td><td>' + data[i].department_name + '</td><td>' + scheme_name + '</td><td>' + data[i].approx_est_cost + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_funding(\'' + data[i].id + '\')" >Delete</button ></td></tr>';
                        //$('#possible_funding_sprinkler').val(data[i].possible_funding);
                        //$('#aprx_est_cost_sprinkler').val(data[i].approx_est_cost);
                        //$('#aprx_fund_avail_sprinkler').val(data[i].approx_fund_avail);
                        //$('#gap_fund_sprinkler').val(data[i].gap_funding);
                        a += parseFloat(data[i].approx_est_cost);

                        //total_area_proposed_crop = parseFloat(data[0].total_area_proposed);
                        area_proposed_for_fund_crop += parseFloat(data[i].area_proposed);
                    }
                }
                tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + a.toFixed(4) + '" disabled style="width:100%;"/></td><td></td></tr>'
                $('#source_crop_show').append(tr);
                get_approved_status();
            }
        }
    });

}
function Check_Area_Proposed_crop() {

    var area_proposed_sprinkler = parseFloat($('#area_proposed_crop').val());
    var total_area_proposed_crop = parseFloat($('#total_area_proposed_crop').val());
    var total_area_proposed_fund = area_proposed_sprinkler + area_proposed_for_fund_crop;
    if (total_area_proposed_fund > total_area_proposed_crop) {
        alert('Area Proposed for Crop Diversification (ha) through above Possible Funding Source Should be less than Total Area Proposed for Sprinkler (ha)');
        $('#area_proposed_crop').val("");
    }
}
function reduction_calc() {
    var khrif_o = $('#Crop_Diversion_Kharif_Water_demand').text();
    var khrif_c = $('#Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1').text();
    if (khrif_o != '' && khrif_c != '') {
        $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text((parseFloat(khrif_o) - parseFloat(khrif_c)).toFixed(4));
    }

    var rabi_o = $('#Crop_Diversion_Rabi_Water_demand').text();
    var rabi_c = $('#Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1').text();
    if (rabi_o != '' && rabi_c != '') {
        $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text((parseFloat(rabi_o) - parseFloat(rabi_c)).toFixed(4));
    }

    var summer_o = $('#Crop_Diversion_Summer_Crop_Water_demand').text();
    var summer_c = $('#Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1').text();
    if (summer_o != '' && summer_c != '') {
        $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text((parseFloat(summer_o) - parseFloat(summer_c)).toFixed(4));
        var a = parseFloat($('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text());
        var b = parseFloat($('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text());
        var c = parseFloat($('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text());
        $('#TotalAnnual_Crop_Diversion_Reduction').text((a + b + c).toFixed(4));
    }


}