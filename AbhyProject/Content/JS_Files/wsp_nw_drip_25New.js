$(document).ready(function () {
    Get_Irrigation_Drip()
});


function Get_Irrigation_Drip() {
    $.ajax({
        url: '/WSP_2024_25_update/Fetch_Not_Updated_Irrigation_Data_For_Drip',
        method: 'GET',
        datatype: 'JSON',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            if (data.length > 0) {
                val_kharif = 0;
                val_rabi = 0;
                val_summer = 0;
                debugger;
                var kharif_tr = '';
                var rabi_tr = '';
                var summer_tr = '';
                var k = 0;
                var r = 0;
                var s = 0;
                $("#Irrigation_Kharif_Data_dp").html(kharif_tr);
                $("#Irrigation_Rabi_Data_dp").html(rabi_tr);
                $("#Irrigation_Summer_Data_dp").html(summer_tr);
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        code = '';
                    }
                    if (data[i].season_type == 'kharif') {
                        val_kharif += data[i].water_demand;
                        kharif_tr += '<tr><td>' + (++k) + '</td>';
                        kharif_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        kharif_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        kharif_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        kharif_tr += '<td>' + data[i].area + '</td>';
                        kharif_tr += '<td>' + data[i].gross_water + '</td>';
                        kharif_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_dp(' + data[i].id + ',\'Kharif\')">Edit</button > </td></tr>';
                    } else if (data[i].season_type == 'rabi') {
                        val_rabi += data[i].water_demand;
                        rabi_tr += '<tr><td>' + (++r) + '</td>';
                        rabi_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        rabi_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        rabi_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        rabi_tr += '<td>' + data[i].area + '</td>';
                        rabi_tr += '<td>' + data[i].gross_water + '</td>';
                        rabi_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_dp(' + data[i].id + ',\'Rabi\')">Edit</button > </td></tr>';
                    } else if (data[i].season_type == 'summer') {
                        val_summer += data[i].water_demand;
                        summer_tr += '<tr><td>' + (++s) + '</td>';
                        summer_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        summer_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        summer_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        summer_tr += '<td>' + data[i].area + '</td>';
                        summer_tr += '<td>' + data[i].gross_water + '</td>';
                        summer_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_dp(' + data[i].id + ',\'Summer\')">Edit</button > </td></tr>';
                    }
                }
                //kharif_tr += '</tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_kharif.toFixed(4) + '</td></tr>'
                //rabi_tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_rabi.toFixed(4) + '</td></tr>'
                //summer_tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_summer.toFixed(4) + '</td></tr>'

                $("#Irrigation_Kharif_Data_dp").append(kharif_tr);
                $("#Irrigation_Rabi_Data_dp").append(rabi_tr);
                $("#Irrigation_Summer_Data_dp").append(summer_tr);
            }
            Get_drip_data();
        },
        fail: function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        }
    })
}

function Open_Modal_And_Get_Data_ById_dp(id, Season) {
    debugger;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_Data_From_Irrigation_ById",
        data: '{ data: ' + JSON.stringify(id) + '}',
        dataType: 'JSON',
        success: function (data) {
            debugger;
            var type = "Drip";
            if (data.length != 0) {
                var red = 40;
                $("#crop_category").val(data.crop_category);
                $("#crop_type").val(data.crop_type);
                $("#crop_name").val(data.crop_name);
                $("#area_irrigation").val(data.area);
                $("#gross_water").val(data.gross_water);
                var reduction = parseFloat(data.gross_water) * 40 / 100;
                var Total_Water_Demand = parseFloat(data.area) * parseFloat(data.gross_water) / 1000;
                $("#reduction").val(reduction.toFixed(4));
                $("#tot_water_demand").val(Total_Water_Demand.toFixed(4))
                $("#title_sp").text(type + " (" + Season + ")");
                $("#cat").text(type);
                $("#season").text(Season);
                $("#percent").text("40% :");
                $("#IrriId").text(id);
                $("#type").text(type);
                $("#modalDialogScrollable_gp").modal("show");
            } else {
                console.log(data);
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });

}

//function Cal_Input_Area_Proposed() {
//    debugger;
//    var area_irrigation = parseFloat($("#area_irrigation").val());
//    var gross_water = parseFloat($("#gross_water").val());
//    var area_proposed = parseFloat($("#area_proposed").val());
//    var reduction = parseFloat($("#reduction").val());
//    if (area_proposed != 0) {
//        net_water_demand = (((area_irrigation - area_proposed) * gross_water * 0.001) + (area_proposed * (gross_water - reduction) * 0.001)).toFixed(4);
//    }
//    $("#net_water_demand").val(net_water_demand);
//    var tot_water_demand = parseFloat($("#tot_water_demand").val());
//    red_in_demand = tot_water_demand - parseFloat(net_water_demand);
//    $("#red_in_demand").val(red_in_demand.toFixed(4));
//}
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
var count_drip = 1;
function addrow_a_part_kharif_drip() {

    var code = '<tr><td><button id="btn_save_kh' + count_drip + '" class="btn btn-primary" onclick="saveKharif_drip(\'ddlcrop_khaif_type1' + count_drip + '\',\'ddlcrop_khaif_type2' + count_drip + '\',\'ddlcrop_khaif' + count_drip + '\',\'otherdrip_kharif' + count_drip + '\',\'area_Kharif' + count_drip + '\',\'gross_khairf' + count_drip + '\',\'area_pr_kharif' + count_drip + '\',\'reduce_kharif' + count_drip + '\',\'Drip_Kharif_Water_Demand\',\'drip_kharif_total_drip_waterdemand\',\'drip_kharif_total_reduction_waterdemand\')">Save</button > </td>';
    //code += '<td>' + count_drip + '</td>';
    code += '<td><select id="ddlcrop_khaif_type1' + count_drip + '" onchange="type2_getdp(\'ddlcrop_khaif_type1' + count_drip + '\',' + count_drip + ',\'ddlcrop_khaif_type2' + count_drip + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
    code += '<td><select id="ddlcrop_khaif_type2' + count_drip + '" onchange="DropDown_getdp(\'ddlcrop_khaif_type2' + count_drip + '\',\'Kharif\',' + count_drip + ',\'ddlcrop_khaif' + count_drip + '\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="kharif_drip_type"><select id="ddlcrop_khaif' + count_drip + '" onchange="check_combo_dp(\'ddlcrop_khaif_type1' + count_drip + '\',\'ddlcrop_khaif_type2' + count_drip + '\',\'ddlcrop_khaif' + count_drip + '\',\'btn_save_kh' + count_drip + '\',\'TblData_abc_part1_show_drip\',\'kharif_drip_type\',\'other_drip_kharif\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="other_drip_kharif" style="display:none;"><input type="text" id = "otherdrip_kharif' + count_drip + '" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_Kharif' + count_drip + '" oninput="Kharif_WaterRequire_drip(\'area_Kharif\',\'gross_khairf\',\'Drip_Kharif_Water_Demand\',' + count_drip + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="gross_khairf' + count_drip + '" oninput="Kharif_WaterRequire_drip(\'area_Kharif\',\'gross_khairf\',\'Drip_Kharif_Water_Demand\',' + count_drip + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="area_pr_kharif' + count_drip + '" oninput="khairfNetWater_drip(\'area_Kharif\',\'gross_khairf\',\'area_pr_kharif\',\'drip_kharif_total_drip_waterdemand\',' + count_drip + ',\'drip_kharif_total_reduction_waterdemand\',\'Drip_Kharif_Water_Demand\',\'reduce_kharif\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="reduce_kharif' + count_drip + '" class="form-control decimal" readonly></td></tr>';

    $('table#TblData_abc_part1_drip tbody').prepend(code);
    count_drip++;
}
var count_rabi_drip = 1;
function addrow_a_part_rabi_drip() {
    var code = '<tr><td><button id="btn_save_dr' + count_rabi_drip + '" class="btn btn-primary" onclick="saverabi_drip(\'ddlcrop_rabi_type1' + count_rabi_drip + '\',\'ddlcrop_rabi_type2' + count_rabi_drip + '\',\'ddlcrop_rabi' + count_rabi_drip + '\',\'otherdrip_rabi' + count_rabi_drip + '\',\'area_rabi' + count_rabi_drip + '\',\'gross_rabi' + count_rabi_drip + '\',\'area_pr_rabi' + count_rabi_drip + '\',\'reduce_rabi' + count_rabi_drip + '\',\'Drip_Rabi_Water_Demand\',\'drip_rabi_total_rabi_waterdemand\',\'drip_rabi_total_reduction_waterdemand\')">Save</button > </td>';
    //code += '<td>' + count_rabi_drip + '</td>';
    code += '<td><select id="ddlcrop_rabi_type1' + count_rabi_drip + '" onchange="type2_getdp(\'ddlcrop_rabi_type1' + count_rabi_drip + '\',' + count_rabi_drip + ',\'ddlcrop_rabi_type2' + count_rabi_drip + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
    code += '<td><select id="ddlcrop_rabi_type2' + count_rabi_drip + '" onchange="DropDown_getdp(\'ddlcrop_rabi_type2' + count_rabi_drip + '\',\'Kharif\',' + count_rabi_drip + ',\'ddlcrop_rabi' + count_rabi_drip + '\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="rabi_drip_type"><select id="ddlcrop_rabi' + count_rabi_drip + '" onchange="check_combo_dp(\'ddlcrop_rabi_type1' + count_rabi_drip + '\',\'ddlcrop_rabi_type2' + count_rabi_drip + '\',\'ddlcrop_rabi' + count_rabi_drip + '\',\'btn_save_dr' + count_rabi_drip + '\',\'TblData_abc_part2_show_drip\',\'rabi_drip_type\',\'other_drip_rabi\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="other_drip_rabi" style="display:none;"><input type="text" id = "otherdrip_rabi' + count_rabi_drip + '" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_rabi' + count_rabi_drip + '" oninput="Kharif_WaterRequire_drip(\'area_rabi\',\'gross_rabi\',\'Drip_Rabi_Water_Demand\',' + count_rabi_drip + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="gross_rabi' + count_rabi_drip + '" oninput="Kharif_WaterRequire_drip(\'area_rabi\',\'gross_rabi\',\'Drip_Rabi_Water_Demand\',' + count_rabi_drip + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="area_pr_rabi' + count_rabi_drip + '" oninput="khairfNetWater_drip(\'area_rabi\',\'gross_rabi\',\'area_pr_rabi\',\'drip_rabi_total_rabi_waterdemand\',' + count_rabi_drip + ',\'drip_rabi_total_reduction_waterdemand\',\'Drip_Rabi_Water_Demand\',\'reduce_rabi\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="reduce_rabi' + count_rabi_drip + '" class="form-control decimal" readonly></td></tr>';
    $('table#TblData_abc_part2_drip tbody').prepend(code);
    count_rabi_drip++;
    //count=count+1;
    //alert(count);
}
var count_summer_drip = 1;
function addrow_a_part_Summer_drip() {

    var code = '<tr><td><button id="btn_save_sum' + count_summer_drip + '" class="btn btn-primary" onclick="savesummer_drip(\'ddlcrop_summer_type1' + count_summer_drip + '\',\'ddlcrop_summer_type2' + count_summer_drip + '\',\'ddlcrop_summer' + count_summer_drip + '\',\'otherdrip_summer' + count_summer_drip + '\',\'area_summer' + count_summer_drip + '\',\'gross_summer' + count_summer_drip + '\',\'area_pr_summer' + count_summer_drip + '\',\'reduce_summer' + count_summer_drip + '\',\'Drip_Crop_water_Demand\',\'drip_summer_total_summer_waterdemand\',\'drip_summer_total_reduction_waterdemand\')">Save</button > </td>';
    //code += '<td>' + count_summer_drip + '</td>';
    code += '<td><select id="ddlcrop_summer_type1' + count_summer_drip + '" onchange="type2_getdp(\'ddlcrop_summer_type1' + count_summer_drip + '\',' + count_summer_drip + ',\'ddlcrop_summer_type2' + count_summer_drip + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
    code += '<td><select id="ddlcrop_summer_type2' + count_summer_drip + '" onchange="DropDown_getdp(\'ddlcrop_summer_type2' + count_summer_drip + '\',\'Summer\',' + count_summer_drip + ',\'ddlcrop_summer' + count_summer_drip + '\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="summer_drip_type"><select id="ddlcrop_summer' + count_summer_drip + '" onchange="check_combo_dp(\'ddlcrop_summer_type1' + count_sp + '\',\'ddlcrop_summer_type2' + count_sp + '\',\'ddlcrop_summer' + count_summer_drip + '\',\'btn_save_sum' + count_summer_drip + '\',\'TblData_abc_part3_show_drip\',\'summer_drip_type\',\'other_drip_summer\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="other_drip_summer" style="display:none;"><input type="text" id = "otherdrip_summer' + count_summer_drip + '" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_summer' + count_summer_drip + '" oninput="Kharif_WaterRequire_drip(\'area_summer\',\'gross_summer\',\'Drip_Crop_water_Demand\',' + count_summer_drip + ',this)" class="form-control"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="gross_summer' + count_summer_drip + '" oninput="Kharif_WaterRequire_drip(\'area_summer\',\'gross_summer\',\'Drip_Crop_water_Demand\',' + count_summer_drip + ',this)" class="form-control"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="area_pr_summer' + count_summer_drip + '" oninput="khairfNetWater_drip(\'area_summer\',\'gross_summer\',\'area_pr_summer\',\'drip_summer_total_summer_waterdemand\',' + count_summer_drip + ',\'drip_summer_total_reduction_waterdemand\',\'Drip_Crop_water_Demand\',\'reduce_summer\',this)" class="form-control"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="reduce_summer' + count_summer_drip + '" class="form-control decimal" readonly></td></tr>';
    $('table#TblData_abc_part3_drip tbody').prepend(code);
    count_summer_drip++;
    //count=count+1;
    //alert(count);
}
function check_combo_dp(ddl1, ddl2, ddl3, btn, checktbl, td1, td2) {
    var check_k = 0;
    var check_r = 0;
    var check_s = 0;
    var button_ = '#' + btn;
    var td_hide = '#' + td1;
    var td_show = '#' + td2;

    first_check = '#' + ddl1;
    second_check = '#' + ddl2;
    third_check = '#' + ddl3;
    var selected = $(third_check).val();
    var category = '#' + checktbl + "  .crop_category";
    var type = '#' + checktbl + "  .crop_type";
    var name = '#' + checktbl + "  .crop_name";

    if (selected != 'Others') {
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

        if (check_k == 1 && check_r == 1 && check_s == 1) {

            alert('Data Already Inserted If you want to add ,please delete first');
            $(button_).prop('disabled', true);
            //btn.hide();
            return;
        }
        else {
            $(button_).prop('disabled', false);
        }
    } else {
        $(button_).prop('disabled', false);
        $(td_hide).hide();
        $(td_show).show();
    }
}

function getreduction_drip(value, value1) {

    for (var i = 1; i <= value1; i++) {
        var val_gross_drip = '#' + value + '' + i + '';
        var gross_drip = $(val_gross_drip).val();
        if (gross_drip == '' || isNaN.gross_drip || gross_drip == undefined || isNaN(gross_drip)) {
            gross_drip = 0;
        }

        var reduction_in_demand = parseFloat(gross_drip * 40 / 100).toFixed(4);
        if (value == "gross_khairf") {
            $("#reduce_kharif" + '' + i).val(reduction_in_demand);
        } else if (value == "gross_rabi") {
            $("#reduce_rabi" + '' + i).val(reduction_in_demand);
        } else if (value == "gross_summer") {
            $("#reduce_summer" + '' + i).val(reduction_in_demand);
        }
    }
}

function Kharif_WaterRequire_drip(area, gross_water, setVal, count, e) {
    getreduction_drip(gross_water, count)

    enforceNumberValidation(e);
    var sum_area = 0;
    var sum_gross_water = 0;
    var type = 0;
    //for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var valarea = $(val_area).val();
    var valgross_water = $(val_gross_water).val();
    if (valarea == '' || isNaN.valarea || valarea == undefined || isNaN(valarea)) {
        valarea = 0;
    }
    if (valgross_water == '' || isNaN.valgross_water || valgross_water == undefined || isNaN(valgross_water)) {
        valgross_water = 0;
    }
    if (valarea != '', valgross_water != '') {
        sum_area = parseFloat(sum_area) + parseFloat(valarea);
        sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
        type = 1;
    }

    // }


    var val_set = '#' + setVal + '';

    if (type == 1) {
        $(val_set).text(parseFloat((parseFloat(sum_area) * parseFloat(sum_gross_water)) / 1000).toFixed(4));
    }
    else {
        $(val_set).text('');
    }
}

function khairfNetWater_drip(area, gross_water, areaPr, setVal, count, lastSet, minusOne, reduction_in_demand, e) {
    enforceNumberValidation(e);

    var sum_area = 0;
    var sum_gross_water = 0;
    var sum_areapr = 0;
    var type = 0;

    //for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_areapr = '#' + areaPr + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var red_demand = '#' + reduction_in_demand + '' + count + '';


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

    var reduction_in_demand = $(red_demand).val();
    if (parseFloat(valareapr) > parseFloat(valarea)) {
        alert("Area Proposed Crop should be less than crop area");
        $(val_areapr).val('');
    }

    if (valarea != '', valareapr != '', valgross_water != '') {
        sum_area = parseFloat(sum_area) + parseFloat(valarea);
        sum_areapr = parseFloat(sum_areapr) + parseFloat(valareapr);
        sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
        type = 1;
    }

    //}
    var Net_water = '#' + setVal + '';
    var val_lastset = '#' + lastSet + '';

    var val_mins = '#' + minusOne + '';

    var per = 40;
    if (type == 1) {
        var val_minus = 100 - per;
        var percentage = sum_gross_water * val_minus / 100;

        $(Net_water).text(parseFloat((((sum_area - sum_areapr) * sum_gross_water * 0.001) + (sum_areapr * (valgross_water - reduction_in_demand) * .001)).toFixed(4)));

        $(val_lastset).text(parseFloat((parseFloat($(val_mins).text()) - parseFloat($(Net_water).text()))).toFixed(4));
    }
    else {
        $(val_lastset).text('');
    }


}


function type2_getdp(ddlcrop_khaif_type1, count, Bind_ddl) {

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

function DropDown_getdp(food_for, food_type, count, Bind_ddl) {

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

function saveKharif_drip(ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlcrop_khaif, otherdrip_kharif, area_Kharif, gross_khairf, area_pr_kharif, reduction_kharif, water_demand, net_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlcrop_khaif + '';
    var val_area_irrigation = '#' + area_Kharif + '';
    var val_gross_water = '#' + gross_khairf + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_kharif + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var reduction_in_demand = '#' + reduction_kharif + '';
    var otherdrip_kharif = '#' + otherdrip_kharif + '';
    var other_check = $(val_crop_name).val();

    if ($(val_crop_category).val() == '0') {
        alert("Please select Crop Category");
        $(val_crop_category).focus();
        return;
    } else if ($(val_crop_type).val() == '0') {
        alert("Please select Crop Type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == '0') {
        alert("Please select Crop Name");
        $(val_crop_name).focus();
        return;
    } else if ($(val_area_irrigation).val() == '') {
        alert("Please fill Crop Area (ha)");
        $(val_area_irrigation).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("Please fill Gross Water Requirement (mm)");
        $(val_gross_water).focus();
        return;
    } else if ($(val_area_proposed).val() == '') {
        alert("Please fill Area Proposed (ha)");
        $(val_area_proposed).focus();
        return;
    } else if (parseFloat($(val_area_proposed).val()) > parseFloat($(val_area_irrigation).val())) {
        alert("proposed area is greater than crop area");
        return;
    }




    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(otherdrip_kharif).val();
    }
    obj.season_type = "kharif"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).text();
    obj.area_proposed = $(val_area_proposed).val();
    obj.reduction = val_reduction;
    obj.net_water_demand = $(val_net_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.reduction_in_demand = $(reduction_in_demand).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveDrip",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            if (response == "Successfully Saved") {
                $("#TblData_GRAM_PANCHAYAT_DATABASE_a_drip").html('');
                Get_drip_data();
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function saverabi_drip(ddlcrop_rabi_type, ddlcrop_rabi_type2, ddlcrop_rabi, otherdrip_rabi, area_rabi, gross_rabi, area_pr_rabi, reduction_rabi, water_demand, net_water_demand, reduction_gw) {
    var val_crop_category = '#' + ddlcrop_rabi_type + '';
    var val_crop_type = '#' + ddlcrop_rabi_type2 + '';
    var val_crop_name = '#' + ddlcrop_rabi + '';
    var val_area_irrigation = '#' + area_rabi + '';
    var val_gross_water = '#' + gross_rabi + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_rabi + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var reduction_in_demand = '#' + reduction_rabi + '';

    var otherdrip_rabi = '#' + otherdrip_rabi + '';
    var other_check = $(val_crop_name).val();

    if ($(val_crop_category).val() == '0') {
        alert("Please select Crop Category");
        $(val_crop_category).focus();
        return;
    } else if ($(val_crop_type).val() == '0') {
        alert("Please select Crop Type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == '0') {
        alert("Please select Crop Name");
        $(val_crop_name).focus();
        return;
    } else if ($(val_area_irrigation).val() == '') {
        alert("Please fill Crop Area (ha)");
        $(val_area_irrigation).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("Please fill Gross Water Requirement (mm)");
        $(val_gross_water).focus();
        return;
    } else if ($(val_area_proposed).val() == '') {
        alert("Please fill Area Proposed (ha)");
        $(val_area_proposed).focus();
        return;
    } else if (parseFloat($(val_area_proposed).val()) > parseFloat($(val_area_irrigation).val())) {
        alert("proposed area is greater than crop area");
        return;
    }




    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(otherdrip_rabi).val();
    }
    obj.season_type = "rabi"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).text();
    obj.area_proposed = $(val_area_proposed).val();
    obj.reduction = val_reduction;
    obj.net_water_demand = $(val_net_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.reduction_in_demand = $(reduction_in_demand).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveDrip",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            if (response == "Successfully Saved") {
                Get_drip_data();
                $("#TblData_GRAM_PANCHAYAT_DATABASE_b_drip").html('');
            }

        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function savesummer_drip(ddlcrop_summer_type, ddlcrop_summer_type2, ddlcrop_summer, otherdrip_summer, area_summer, gross_summer, area_pr_summer, reduction_summer, water_demand, net_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_summer_type + '';
    var val_crop_type = '#' + ddlcrop_summer_type2 + '';
    var val_crop_name = '#' + ddlcrop_summer + '';
    var val_area_irrigation = '#' + area_summer + '';
    var val_gross_water = '#' + gross_summer + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_summer + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var reduction_in_demand = '#' + reduction_summer + '';


    var otherdrip_summer = '#' + otherdrip_summer + '';
    var other_check = $(val_crop_name).val();

    if ($(val_crop_category).val() == '0') {
        alert("Please select Crop Category");
        $(val_crop_category).focus();
        return;
    } else if ($(val_crop_type).val() == '0') {
        alert("Please select Crop Type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == '0') {
        alert("Please select Crop Name");
        $(val_crop_name).focus();
        return;
    } else if ($(val_area_irrigation).val() == '') {
        alert("Please fill Crop Area (ha)");
        $(val_area_irrigation).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("Please fill Gross Water Requirement (mm)");
        $(val_gross_water).focus();
        return;
    } else if ($(val_area_proposed).val() == '') {
        alert("Please fill Area Proposed (ha)");
        $(val_area_proposed).focus();
        return;
    } else if (parseFloat($(val_area_proposed).val()) > parseFloat($(val_area_irrigation).val())) {
        alert("proposed area is greater than crop area");
        return;
    }


    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(otherdrip_summer).val();
    }
    obj.season_type = "summer"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).text();
    obj.area_proposed = $(val_area_proposed).val();
    obj.reduction = val_reduction;
    obj.net_water_demand = $(val_net_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.reduction_in_demand = $(reduction_in_demand).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveDrip",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            if (response == "Successfully Saved") {
                Get_drip_data();
                $("#TblData_GRAM_PANCHAYAT_DATABASE_c_drip").html('');
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function saveFundingData_drip() {
    var approx_est_cost = $('#aprx_est_cost_sprinkler_drip').val();
    var drip_year = $('#drip_year').val();
    var drip_department = $('#drip_department').val();
    var drip_scheme = $('#drip_scheme').val();

    var area_proposed_drip = $("#area_proposed_drip").val();

    if (area_proposed_drip == "") {
        alert("Please Enter Area Proposed for Drip (ha)");
        $("#area_proposed_drip").focus();
        return;
    }
    else if (drip_year == '0') {
        alert('Please Select financial');
        $('#drip_year').focus();
        return;
    } else if (drip_department == '0') {
        alert('Please Select Department Name');
        $('#drip_department').focus();
        return;
    } else if (drip_scheme == '0') {
        alert('Please Select Scheme name');
        $('#drip_scheme').focus();
        return;
    } else if (approx_est_cost == '') {
        alert('Please fill Approximate Estimated Cost (in lakh)');
        $('#aprx_est_cost_sprinkler_drip').focus();
        return;
    }
    if (drip_scheme == "Other") {
        if ($("#other_scheme_dp").val() == "") {
            alert("Please Enter Other Scheme Name");
            return;
        }
    }

    var obj = {};
    obj.fund_for = "Drip"
    obj.area_proposed = area_proposed_drip;
    obj.total_crop_area = $('#total_crop_area_drip').val();
    obj.total_area_proposed = $('#total_area_proposed_drip').val();
    obj.other_scheme = $("#other_scheme_dp").val();
    obj.financial_year = drip_year;
    obj.department_name = drip_department
    obj.scheme_name = drip_scheme;
    obj.approx_est_cost = $('#aprx_est_cost_sprinkler_drip').val();


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveFundingData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            $('#drip_year').val("0");
            $('#drip_department').val("0");
            $('#drip_scheme').val("0");
            $("#other_scheme_dp").val("");
            $("#other_scheme_dp").hide();
            $('#aprx_est_cost_sprinkler_drip').val("");
            $("#area_proposed_drip").val("");
            GetFunding_drip();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

var total_area_proposed_drip = 0;
var area_proposed_for_fund_drip = 0;
function GetFunding_drip() {
    total_area_proposed_drip = 0;
    area_proposed_for_fund_drip = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var obj = {};
    obj.fund_for = "Drip";
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_fund_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#source_drip_show').html('');
            if (data.length > 0) {
                var tr = '';

                for (var i = 0; i < data.length; i++) {


                    if (data[i].fund_for == 'Drip') {
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

                        //total_area_proposed_drip = parseFloat(data[0].total_area_proposed);
                        area_proposed_for_fund_drip += parseFloat(data[i].area_proposed);
                    }
                }
                tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + a.toFixed(4) + '" disabled style="width:100%;"/></td><td></td></tr>'
                $('#source_drip_show').append(tr);
                get_approved_status()
            }
        }
    });
}
function Get_drip_data() {
    var srl_dp_kharif = 1;
    var srl_dp_rabi = 1;
    var srl_dp_summer = 1;

    var wat_dem = 0;
    var net_wat_dem = 0;
    var reduction = 0;
    var total_demand_dp = 0;
    var total_crop_area = 0;
    var total_area_proposed = 0;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_drip_data",
        dataType: 'JSON',
        success: function (data) {
            kharif_sp_drip

            $("#kharif_sp_drip").html('');
            $("#rabi_sp_drip").html('');
            $("#summer_sp_drip").html('');
            if (data.length > 0) {

                for (var i = 0; i < data.length; i++) {
                    var crop_area = parseFloat(data[i].area_irrigation).toFixed(4);
                    total_crop_area += parseFloat(crop_area);
                    var area_proposed = parseFloat(data[i].area_proposed);
                    total_area_proposed += parseFloat(area_proposed);
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "kharif") {

                        var tr = '<tr><td>' + srl_dp_kharif + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_drip(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);

                        $('#Drip_Kharif_Water_Demand').text(wat_dem.toFixed(4));
                        $('#drip_kharif_total_drip_waterdemand').text((!isNaN(parseFloat(net_wat_dem.toFixed(4)))) ? net_wat_dem.toFixed(4):0);
                        $('#drip_kharif_total_reduction_waterdemand').text(reduction.toFixed(4));
                        $("#kharif_sp_drip").append(tr);
                        srl_dp_kharif++;
                    }
                }
                total_demand_dp += reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "rabi") {
                        var tr = '<tr><td>' + srl_dp_rabi + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_drip(\'' + data[i].id + '\')" >Delete</button > </td></tr>';

                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);



                        $('#Drip_Rabi_Water_Demand').text(wat_dem.toFixed(4));
                        $('#drip_rabi_total_rabi_waterdemand').text(net_wat_dem.toFixed(4));
                        $('#drip_rabi_total_reduction_waterdemand').text(reduction.toFixed(4));

                        $("#rabi_sp_drip").append(tr);
                        srl_dp_rabi++;
                    }
                }
                total_demand_dp += reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "summer") {

                        var tr = '<tr><td>' + srl_dp_summer + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_drip(\'' + data[i].id + '\')" >Delete</button > </td></tr>';

                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);



                        $('#Drip_Crop_water_Demand').text(wat_dem.toFixed(4));
                        $('#drip_summer_total_summer_waterdemand').text(net_wat_dem.toFixed(4));
                        $('#drip_summer_total_reduction_waterdemand').text(reduction.toFixed(4));
                        $("#summer_sp_drip").append(tr);
                        srl_dp_summer++;
                    }
                }
                total_demand_dp += reduction;
                $("#TotalAnnual_Drip_Reduction").text(total_demand_dp.toFixed(4));
                $('#total_crop_area_drip').val(total_crop_area.toFixed(4));
                $('#total_area_proposed_drip').val(total_area_proposed.toFixed(4));
            }
            GetFunding_drip();
        }
    });
}
function Delete_data_drip(idd) {
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
                    url: "/WSP_2024_25_update/Delete_data_drip",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        alert(response);
                        //$('#SAVE_BTN2').prop('disabled', false)
                        Get_Irrigation_Drip()
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
//function Get_drip_data() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/WSP_2024_25_update/Get_drip_data",
//        dataType: 'JSON',
//        success: function (data) {



//            if (data.length > 0) {
//                for (var i = 0; i < data.length; i++) {
//                    if (data[i].season_type == "kharif") {
//                        var kharif_code = '';
//                        kharif_code = '<tr><td><button class="btn btn-primary" onclick="saveKharif(\'ddlcrop_khaif_type1' + count_drip + '\',\'ddlcrop_khaif_type2' + count_drip + '\',\'ddlcrop_khaif' + count_drip + '\',\'area_Kharif' + count_drip + '\',\'gross_khairf' + count_drip + '\',\'area_pr_kharif' + count_drip + '\',\'Sprinkler_Water_Demand\',\'sprinkler_kharif_total_sprinkler_waterdemand\',\'sprinkler_kharif_total_reduction_waterdemand\')">Save</button > </td>';
//                        kharif_code += '<td>' + (parseInt(i) + 1) + '</td>';
//                        if (data[i].crop_category == "Major Crops") {
//                            kharif_code += '<td><select id="ddlcrop_khaif_type1' + count_drip + '" onchange="type2_get(\'ddlcrop_khaif_type1' + count_drip + '\',' + count_drip + ',\'ddlcrop_khaif_type2' + count_drip + '\')"><option value="0">--Select Crop--</option ><option value="Major Crops" selected>Major Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ></select ></td>';
//                        }

//                        else {
//                            kharif_code += '<td><select id="ddlcrop_khaif_type1' + count_drip + '" onchange="type2_get(\'ddlcrop_khaif_type1' + count_drip + '\',' + count_drip + ',\'ddlcrop_khaif_type2' + count_drip + '\')"><option value="0">--Select Crop--</option ><option value="Major Crops">Major Crops</option ><option value="Horticulture Crops" selected>Horticulture Crops</option ></select ></td>';
//                        }

//                        type2_get('ddlcrop_khaif_type1' + count_drip + '', ' + count_drip + ', 'ddlcrop_khaif_type2' + count_drip + '');
//                        kharif_code += '<td><select id="ddlcrop_khaif_type2' + count_drip + '" onchange="DropDown_get(\'ddlcrop_khaif_type2' + count_drip + '\',\'Kharif\',' + count_drip + ',\'ddlcrop_khaif' + count_drip + '\')"><option value="0">--Select Crop--</option ></select ></td>';
//                        kharif_code += '<td><select id="ddlcrop_khaif' + count_drip + '"><option value="0">--Select Crop--</option ></select ></td>';
//                        kharif_code += '<td><input type="number" id = "area_Kharif' + count_drip + '" oninput="Kharif_WaterRequire(\'area_Kharif\',\'gross_khairf\',\'Sprinkler_Water_Demand\',' + count_drip + ')" value="' + data[i].area_irrigation + '" class="form-control"></td>';
//                        kharif_code += '<td><input type="number" id="gross_khairf' + count_drip + '" oninput="Kharif_WaterRequire(\'area_Kharif\',\'gross_khairf\',\'Sprinkler_Water_Demand\',' + count_drip + ')" value="' + data[i].water_demand + '" class="form-control"></td>';
//                        kharif_code += '<td><input type="number" id="area_pr_kharif' + count_drip + '" oninput="khairfNetWater_drip(\'area_Kharif\',\'gross_khairf\',\'area_pr_kharif\',\'sprinkler_kharif_total_sprinkler_waterdemand\',' + count_drip + ',\'sprinkler_kharif_total_reduction_waterdemand\',\'Sprinkler_Water_Demand\')" value="' + data[i].area_proposed + '" class="form-control"></td></tr >';

//                        $('table#TblData_abc_part1_drip tbody').prepend(kharif_code);
//                        if (data[i].crop_category == 'Major Crops') {
//                            var AwpStateArr = [];
//                            AwpStateArr.push("Major Food Crops");
//                            var idd = '#ddlcrop_khaif_type2' + count_drip;
//                            var slection_options = '';
//                            slection_options += '<option value="0">--Select Type2-- </option>';
//                            AwpStateArr.forEach((val) => {
//                                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
//                            });

//                            $('#ddlcrop_khaif_type2' + count_drip).html(slection_options);
//                        }

//                        if (data[i].crop_category == 'Horticulture Crops') {
//                            var idd = '#ddlcrop_khaif_type2' + count_drip;
//                            var AwpStateArr = [];
//                            AwpStateArr.push("Vegetables");
//                            AwpStateArr.push("Fruits");
//                            AwpStateArr.push("Spices");
//                            AwpStateArr.push("Aromatic and Medicinal Plants");
//                            AwpStateArr.push("Plantation Crops");
//                            AwpStateArr.push("Flowers");
//                            var slection_options = '';
//                            slection_options += '<option value="0">--Select Type2-- </option>';
//                            AwpStateArr.forEach((val) => {
//                                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

//                            });
//                            $('#ddlcrop_khaif_type2' + count_drip).html(slection_options);
//                        }
//                        $('#ddlcrop_khaif_type2' + count_drip).val(data[i].crop_type);
//                        DropDown_get_Alldrip(data[i].crop_type, 'Kharif', 'ddlcrop_khaif' + count_drip, data[i].crop_name);
//                        count_drip++;

//                    }
//                    if (data[i].season_type == "rabi") {
//                        var rabi_code = '';
//                        rabi_code = '<tr><td><button class="btn btn-primary" onclick="saverabi(\'ddlcrop_rabi_type1' + count_rabi_drip + '\',\'ddlcrop_rabi_type2' + count_rabi_drip + '\',\'ddlcrop_rabi' + count_rabi_drip + '\',\'area_rabi' + count_rabi_drip + '\',\'gross_rabi' + count_rabi_drip + '\',\'area_pr_rabi' + count_rabi_drip + '\',\'Sprinkler_RabiWater_Demand\',\'sprinkler_rabi_total_rabi_waterdemand\',\'sprinkler_rabi_total_reduction_waterdemand\')">Save</button > </td>';
//                        rabi_code += '<td>' + count_rabi_drip + '</td>';
//                        if (data[i].crop_category == "Major Crops") {
//                            rabi_code += '<td><select id="ddlcrop_rabi_type1' + count_rabi_drip + '" onchange="type2_get(\'ddlcrop_rabi_type1' + count_rabi_drip + '\',' + count_rabi_drip + ',\'ddlcrop_rabi_type2' + count_rabi_drip + '\')"><option value="0">--Select Crop--</option ><option value="Major Crops" selected>Major Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ></select ></td>';
//                        }
//                        else {
//                            rabi_code += '<td><select id="ddlcrop_rabi_type1' + count_rabi_drip + '" onchange="type2_get(\'ddlcrop_rabi_type1' + count_rabi_drip + '\',' + count_rabi_drip + ',\'ddlcrop_rabi_type2' + count_rabi_drip + '\')"><option value="0">--Select Crop--</option ><option value="Major Crops" selected>Major Crops</option ><option value="Horticulture Crops" selected>Horticulture Crops</option ></select ></td>';
//                        }


//                        rabi_code += '<td><select id="ddlcrop_rabi_type2' + count_rabi_drip + '" onchange="DropDown_get(\'ddlcrop_rabi_type2' + count_rabi_drip + '\',\'Kharif\',' + count_rabi_drip + ',\'ddlcrop_rabi' + count_rabi_drip + '\')"><option value="0">--Select Crop--</option ></select ></td>';
//                        rabi_code += '<td><select id="ddlcrop_rabi' + count_rabi_drip + '"><option value="0">--Select Crop--</option ></select ></td>';
//                        rabi_code += '<td><input type="number" id = "area_rabi' + count_rabi_drip + '" oninput="Kharif_WaterRequire(\'area_rabi\',\'gross_rabi\',\'Sprinkler_RabiWater_Demand\',' + count_rabi_drip + ')" value="' + data[i].area_irrigation + '"  class="form-control"></td>';
//                        rabi_code += '<td><input type="number" id="gross_rabi' + count_rabi_drip + '" oninput="Kharif_WaterRequire(\'area_rabi\',\'gross_rabi\',\'Sprinkler_RabiWater_Demand\',' + count_rabi_drip + ')" value="' + data[i].water_demand + '" class="form-control"></td>';
//                        rabi_code += '<td><input type="number" id="area_pr_rabi' + count_rabi_drip + '" oninput="khairfNetWater(\'area_rabi\',\'gross_rabi\',\'area_pr_rabi\',\'sprinkler_rabi_total_rabi_waterdemand\',' + count_rabi_drip + ',\'sprinkler_rabi_total_reduction_waterdemand\',\'Sprinkler_RabiWater_Demand\')" value="' + data[i].area_proposed + '" class="form-control"></td></tr >';
//                        $('table#TblData_abc_part2_drip tbody').prepend(rabi_code);

//                        if (data[i].crop_category == 'Major Crops') {
//                            var AwpStateArr = [];
//                            AwpStateArr.push("Major Food Crops");
//                            var idd = '#ddlcrop_rabi_type2' + count_rabi_drip;
//                            var slection_options = '';
//                            slection_options += '<option value="0">--Select Type2-- </option>';
//                            AwpStateArr.forEach((val) => {
//                                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
//                            });

//                            $('#ddlcrop_rabi_type2' + count_rabi_drip).html(slection_options);
//                        }

//                        if (data[i].crop_category == 'Horticulture Crops') {
//                            var idd = '#ddlcrop_rabi_type2' + count_rabi_drip;
//                            var AwpStateArr = [];
//                            AwpStateArr.push("Vegetables");
//                            AwpStateArr.push("Fruits");
//                            AwpStateArr.push("Spices");
//                            AwpStateArr.push("Aromatic and Medicinal Plants");
//                            AwpStateArr.push("Plantation Crops");
//                            AwpStateArr.push("Flowers");
//                            var slection_options = '';
//                            slection_options += '<option value="0">--Select Type2-- </option>';
//                            AwpStateArr.forEach((val) => {
//                                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

//                            });
//                            $('#ddlcrop_rabi_type2' + count_rabi_drip).html(slection_options);
//                        }
//                        $('#ddlcrop_rabi_type2' + count_rabi_drip).val(data[i].crop_type);
//                        DropDown_get_Alldrip(data[i].crop_type, 'Rabi', 'ddlcrop_rabi' + count_rabi_drip, data[i].crop_name);
//                        count_rabi_drip++;

//                    }
//                    if (data[i].season_type == "summer") {
//                        var summer_code = '';
//                        summer_code = '<tr><td><button class="btn btn-primary" onclick="savesummer(\'ddlcrop_summer_type1' + count_summer_drip + '\',\'ddlcrop_summer_type2' + count_summer_drip + '\',\'ddlcrop_summer' + count_summer_drip + '\',\'area_summer' + count_summer_drip + '\',\'gross_summer' + count_summer_drip + '\',\'area_pr_summer' + count_summer_drip + '\',\'Summer_Crops_Water_Demand\',\'sprinkler_summer_total_summer_waterdemand\',\'sprinkler_summer_total_reduction_waterdemand\')">Save</button > </td>';
//                        summer_code += '<td>' + count_summer_drip + '</td>';
//                        if (data[i].crop_category == "Major Crops") {
//                            summer_code += '<td><select id="ddlcrop_summer_type1' + count_summer_drip + '" onchange="type2_get(\'ddlcrop_summer_type1' + count_summer_drip + '\',' + count_summer_drip + ',\'ddlcrop_summer_type2' + count_summer_drip + '\')"><option value="0">--Select Crop--</option ><option value="Major Crops" selected>Major Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ></select ></td>';
//                        }
//                        else {
//                            summer_code += '<td><select id="ddlcrop_summer_type1' + count_summer_drip + '" onchange="type2_get(\'ddlcrop_summer_type1' + count_summer_drip + '\',' + count_summer_drip + ',\'ddlcrop_summer_type2' + count_summer_drip + '\')"><option value="0">--Select Crop--</option ><option value="Major Crops">Major Crops</option ><option value="Horticulture Crops" selecteds>Horticulture Crops</option ></select ></td>';
//                        }
//                        summer_code += '<td><select id="ddlcrop_summer_type2' + count_summer_drip + '" onchange="DropDown_get(\'ddlcrop_summer_type2' + count_summer_drip + '\',\'Summer\',' + count_summer_drip + ',\'ddlcrop_summer' + count_summer_drip + '\')"><option value="0">--Select Crop--</option ></select ></td>';
//                        summer_code += '<td><select id="ddlcrop_summer' + count_summer_drip + '"><option value="0">--Select Crop--</option ></select ></td>';
//                        summer_code += '<td><input type="number" id = "area_summer' + count_summer_drip + '" oninput="Kharif_WaterRequire(\'area_summer\',\'gross_summer\',\'Summer_Crops_Water_Demand\',' + count_summer_drip + ')" value="' + data[i].area_irrigation + '" class="form-control"></td>';
//                        summer_code += '<td><input type="number" id="gross_summer' + count_summer_drip + '" oninput="Kharif_WaterRequire(\'area_summer\',\'gross_summer\',\'Summer_Crops_Water_Demand\',' + count_summer_drip + ')"  value="' + data[i].water_demand + '" class="form-control"></td>';
//                        summer_code += '<td><input type="number" id="area_pr_summer' + count_summer_drip + '" oninput="khairfNetWater_drip(\'area_summer\',\'gross_summer\',\'area_pr_summer\',\'sprinkler_summer_total_summer_waterdemand\',' + count_summer_drip + ',\'sprinkler_summer_total_reduction_waterdemand\',\'Summer_Crops_Water_Demand\')" value="' + data[i].area_proposed + '" class="form-control"></td></tr >';


//                        $('table#TblData_abc_part3_drip tbody').prepend(summer_code);
//                        if (data[i].crop_category == 'Major Crops') {
//                            var AwpStateArr = [];
//                            AwpStateArr.push("Major Food Crops");
//                            var idd = '#ddlcrop_summer_type2' + count_summer_drip;
//                            var slection_options = '';
//                            slection_options += '<option value="0">--Select Type2-- </option>';
//                            AwpStateArr.forEach((val) => {
//                                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
//                            });

//                            $('#ddlcrop_summer_type2' + count_summer_drip).html(slection_options);
//                        }

//                        if (data[i].crop_category == 'Horticulture Crops') {
//                            var idd = '#ddlcrop_summer_type2' + count_summer_drip;
//                            var AwpStateArr = [];
//                            AwpStateArr.push("Vegetables");
//                            AwpStateArr.push("Fruits");
//                            AwpStateArr.push("Spices");
//                            AwpStateArr.push("Aromatic and Medicinal Plants");
//                            AwpStateArr.push("Plantation Crops");
//                            AwpStateArr.push("Flowers");
//                            var slection_options = '';
//                            slection_options += '<option value="0">--Select Type2-- </option>';
//                            AwpStateArr.forEach((val) => {
//                                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

//                            });
//                            $('#ddlcrop_summer_type2' + count_summer_drip).html(slection_options);
//                        }
//                        $('#ddlcrop_summer_type2' + count_summer_drip).val(data[i].crop_type);
//                        DropDown_get_Alldrip(data[i].crop_type, 'Summer', 'ddlcrop_summer' + count_summer_drip, data[i].crop_name);
//                        count_summer_drip++;

//                    }
//                }


//            }
//            GetFunding_drip();
//        }
//    });
//}

function DropDown_get_Alldrip(food_for, food_type, ddl_bind, val_for_set) {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_dropdown_data",
        dataType: 'JSON',
        data: { food_for: food_for, food_type: food_type },
        success: function (data) {

            var AwpStateArr = [];
            for (var i = 0; i < data.length; i++) {
                AwpStateArr.push(data[i].food_name);
            }
            var idd = '#' + ddl_bind + '';
            var slection_options = '';
            slection_options += '<option value="0">--Select Crop-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
            $(idd).val(val_for_set);
        }
    });
}


function Check_Area_Proposed_drip() {

    var area_proposed_drip = parseFloat($('#area_proposed_drip').val());
    var total_area_proposed_drip = parseFloat($('#total_area_proposed_drip').val());
    var total_area_proposed_fund = area_proposed_drip + area_proposed_for_fund_drip;
    if (total_area_proposed_fund > total_area_proposed_drip) {
        alert('Area Proposed for Drip (ha) through above Possible Funding Source Should be less than Total Area Proposed for Drip (ha)');
        $('#area_proposed_drip').val("");
    }
}
// Funding Calculation
function GapFundingCalDrip() {
    var aprx_est_cost_sprinkler = $("#aprx_est_cost_sprinkler_drip").val();
    var aprx_fund_avail_sprinkler = $("#aprx_fund_avail_sprinkler_drip").val();

    var gap_fund_sprinkler = aprx_est_cost_sprinkler - aprx_fund_avail_sprinkler;
    $("#gap_fund_sprinkle_drip").val(gap_fund_sprinkler);
}