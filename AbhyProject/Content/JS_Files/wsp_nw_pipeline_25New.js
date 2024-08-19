$(document).ready(function () {
    Get_Irrigation_PipeLines();
    
});

function Get_Irrigation_PipeLines() {
    $.ajax({
        url: '/WSP_2024_25_update/Fetch_Not_Updated_Irrigation_Data_For_PipeLines',
        method: 'GET',
        datatype: 'JSON',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            if (data.length > 0) {
                val_kharif = 0;
                val_rabi = 0;
                val_summer = 0;
                var kharif_tr = '';
                var rabi_tr = '';
                var summer_tr = '';
                var k = 0;
                var r = 0;
                var s = 0;
                $("#Irrigation_Kharif_Data_pl").html(kharif_tr);
                $("#Irrigation_Rabi_Data_pl").html(rabi_tr);
                $("#Irrigation_Summer_Data_pl").html(summer_tr);
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
                        kharif_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_pl(' + data[i].id + ',\'Kharif\')">Edit</button > </td></tr>';
                    } else if (data[i].season_type == 'rabi') {
                        val_rabi += data[i].water_demand;
                        rabi_tr += '<tr><td>' + (++r) + '</td>';
                        rabi_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        rabi_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        rabi_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        rabi_tr += '<td>' + data[i].area + '</td>';
                        rabi_tr += '<td>' + data[i].gross_water + '</td>';
                        rabi_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_pl(' + data[i].id + ',\'Rabi\')">Edit</button > </td></tr>';
                    } else if (data[i].season_type == 'summer') {
                        val_summer += data[i].water_demand;
                        summer_tr += '<tr><td>' + (++s) + '</td>';
                        summer_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        summer_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        summer_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        summer_tr += '<td>' + data[i].area + '</td>';
                        summer_tr += '<td>' + data[i].gross_water + '</td>';
                        summer_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_pl(' + data[i].id + ',\'Summer\')">Edit</button > </td></tr>';
                    }
                }
                //kharif_tr += '</tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_kharif.toFixed(4) + '</td></tr>'
                //rabi_tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_rabi.toFixed(4) + '</td></tr>'
                //summer_tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_summer.toFixed(4) + '</td></tr>'

                $("#Irrigation_Kharif_Data_pl").append(kharif_tr);
                $("#Irrigation_Rabi_Data_pl").append(rabi_tr);
                $("#Irrigation_Summer_Data_pl").append(summer_tr);
            }
            get_approved_status();
            Get_pipe_data();
        },
        fail: function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        }
    })
}


function Open_Modal_And_Get_Data_ById_pl(id, Season) {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_Data_From_Irrigation_ById",
        data: '{ data: ' + JSON.stringify(id) + '}',
        dataType: 'JSON',
        success: function (data) {
            var type = "Pipelines";
            if (data.length != 0) {
                $("#crop_category").val(data.crop_category);
                $("#crop_type").val(data.crop_type);
                $("#crop_name").val(data.crop_name);
                $("#area_irrigation").val(data.area);
                $("#gross_water").val(data.gross_water);
                var reduction = parseFloat(data.gross_water) * 20 / 100;
                var Total_Water_Demand = parseFloat(data.area) * parseFloat(data.gross_water) / 1000;
                $("#reduction").val(reduction.toFixed(4));
                $("#tot_water_demand").val(Total_Water_Demand.toFixed(4))
                $("#title_sp").text(type + " (" + Season + ")");
                $("#cat").text(type);
                $("#season").text(Season);
                $("#percent").text("20% :");
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


var count_pipe = 1;
function addrow_a_part_kharif_pipe() {

    var code = '<tr><td><button id="btn_save_kh' + count_pipe + '" class="btn btn-primary" onclick="saveKharif_pipe(\'ddlcrop_khaif_type1' + count_pipe + '\',\'ddlcrop_khaif_type2' + count_pipe + '\',\'ddlpipe_khaif' + count_pipe + '\',\'otherpipe_kharif' + count_pipe + '\',\'area_Kharif' + count_pipe + '\',\'gross_khairf' + count_pipe + '\',\'area_pr_kharif' + count_pipe + '\',\'reduction_kharif' + count_pipe + '\',\'Pipeline_Kharif_Water_demand\',\'pipeline_kharif_total_pipeline_waterdemand\',\'pipeline_kharif_total_reduction_waterdemand\')">Save</button > </td>';
    //code += '<td>' + count_pipe + '</td>';
    code += '<td><select id="ddlcrop_khaif_type1' + count_pipe + '" onchange="type2_getpl(\'ddlcrop_khaif_type1' + count_pipe + '\',' + count_pipe + ',\'ddlcrop_khaif_type2' + count_pipe + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
    code += '<td><select id="ddlcrop_khaif_type2' + count_pipe + '" onchange="DropDown_getpipe(\'ddlcrop_khaif_type2' + count_pipe + '\',\'Kharif\',' + count_pipe + ',\'ddlpipe_khaif' + count_pipe + '\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="kharif_pipe_type"><select id="ddlpipe_khaif' + count_pipe + '" onchange="check_combo_pipe(\'ddlcrop_khaif_type1' + count_pipe + '\',\'ddlcrop_khaif_type2' + count_pipe + '\',\'ddlcrop_khaif' + count_pipe + '\',\'btn_save_kh' + count_sp + '\',\'TblData_abc_part1_show_pipe\',\'kharif_pipe_type\',\'other_pipe_kharif\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="other_pipe_kharif" style="display:none;"><input type="text" id = "otherpipe_kharif' + count_pipe + '" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id = "area_Kharif' + count_pipe + '" oninput="Kharif_WaterRequire_pipe(\'area_Kharif\',\'gross_khairf\',\'Pipeline_Kharif_Water_demand\',' + count_pipe + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id="gross_khairf' + count_pipe + '" oninput="Kharif_WaterRequire_pipe(\'area_Kharif\',\'gross_khairf\',\'Pipeline_Kharif_Water_demand\',' + count_pipe + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id="area_pr_kharif' + count_pipe + '" oninput="khairfNetWater_pipe(\'area_Kharif\',\'gross_khairf\',\'area_pr_kharif\',\'pipeline_kharif_total_pipeline_waterdemand\',' + count_pipe + ',\'pipeline_kharif_total_reduction_waterdemand\',\'Pipeline_Kharif_Water_demand\',\'reduction_kharif\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="reduction_kharif' + count_pipe + '" class="form-control decimal" readonly></td></tr>';
    $('table#TblData_abc_part1_pipe tbody').prepend(code);
    count_pipe++;
}
var count_rabi_pipe = 1;
function addrow_a_part_rabi_pipe() {
    var code = '<tr><td><button id="btn_save_rb' + count_rabi_pipe + '" class="btn btn-primary" onclick="saverabi_pipe(\'ddlcrop_rabi_type1' + count_rabi_pipe + '\',\'ddlcrop_rabi_type2' + count_rabi_pipe + '\',\'ddlcrop_rabi' + count_rabi_pipe + '\',\'otherpipe_rabi' + count_rabi_pipe + '\',\'area_rabi' + count_rabi_pipe + '\',\'gross_rabi' + count_rabi_pipe + '\',\'area_pr_rabi' + count_rabi_pipe + '\',\'reduction_rabi' + count_rabi_pipe + '\',\'Pipeline_Rabi_Water_demand\',\'pipeline_rabi_total_rabi_waterdemand\',\'pipeline_rabi_total_reduction_waterdemand\')">Save</button > </td>';
    //code += '<td>' + count_rabi_pipe + '</td>';
    code += '<td><select id="ddlcrop_rabi_type1' + count_rabi_pipe + '" onchange="type2_getpl(\'ddlcrop_rabi_type1' + count_rabi_pipe + '\',' + count_rabi_pipe + ',\'ddlcrop_rabi_type2' + count_rabi_pipe + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
    code += '<td><select id="ddlcrop_rabi_type2' + count_rabi_pipe + '" onchange="DropDown_getpipe(\'ddlcrop_rabi_type2' + count_rabi_pipe + '\',\'Kharif\',' + count_rabi_pipe + ',\'ddlcrop_rabi' + count_rabi_pipe + '\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="rabi_pipe_type"><select id="ddlcrop_rabi' + count_rabi_pipe + '" onchange="check_combo_pipe(\'ddlcrop_rabi_type1' + count_rabi_pipe + '\',\'ddlcrop_rabi_type2' + count_rabi_pipe + '\',\'ddlcrop_rabi' + count_rabi_pipe + '\',\'btn_save_rb' + count_rabi_pipe + '\',\'TblData_abc_part2_show_pipe\',\'rabi_pipe_type\',\'other_pipe_rabi\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="other_pipe_rabi" style="display:none;"><input type="text" id = "otherpipe_rabi' + count_rabi_pipe + '" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id = "area_rabi' + count_rabi_pipe + '" oninput="Kharif_WaterRequire_pipe(\'area_rabi\',\'gross_rabi\',\'Pipeline_Rabi_Water_demand\',' + count_rabi_pipe + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id="gross_rabi' + count_rabi_pipe + '" oninput="Kharif_WaterRequire_pipe(\'area_rabi\',\'gross_rabi\',\'Pipeline_Rabi_Water_demand\',' + count_rabi_pipe + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id="area_pr_rabi' + count_rabi_pipe + '" oninput="khairfNetWater_pipe(\'area_rabi\',\'gross_rabi\',\'area_pr_rabi\',\'pipeline_rabi_total_rabi_waterdemand\',' + count_rabi_pipe + ',\'pipeline_rabi_total_reduction_waterdemand\',\'Pipeline_Rabi_Water_demand\',\'reduction_rabi\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="reduction_rabi' + count_rabi_pipe + '" class="form-control decimal" readonly></td></tr>';
    $('table#TblData_abc_part2_pipe tbody').prepend(code);
    count_rabi_pipe++;
    //count=count+1;
    //alert(count);
}
var count_summer_pipe = 1;
function addrow_a_part_Summer_pipe() {

    var code = '<tr><td><button id="btn_save_sum' + count_summer_pipe + '" class="btn btn-primary" onclick="savesummer_pipe(\'ddlcrop_summer_type1' + count_summer_pipe + '\',\'ddlcrop_summer_type2' + count_summer_pipe + '\',\'ddlcrop_summer' + count_summer_pipe + '\',\'otherpipe_summer' + count_summer_pipe + '\',\'area_summer' + count_summer_pipe + '\',\'gross_summer' + count_summer_pipe + '\',\'area_pr_summer' + count_summer_pipe + '\',\'reduction_Summer' + count_summer_pipe + '\',\'Pipeline_SummerCrop_Water_demand\',\'pipeline_summer_total_summer_waterdemand\',\'pipeline_summer_total_reduction_waterdemand\')">Save</button > </td>';
    //code += '<td>' + count_summer_pipe + '</td>';
    code += '<td><select id="ddlcrop_summer_type1' + count_summer_pipe + '" onchange="type2_getpl(\'ddlcrop_summer_type1' + count_summer_pipe + '\',' + count_summer_pipe + ',\'ddlcrop_summer_type2' + count_summer_pipe + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
    code += '<td><select id="ddlcrop_summer_type2' + count_summer_pipe + '" onchange="DropDown_getpipe(\'ddlcrop_summer_type2' + count_summer_pipe + '\',\'Summer\',' + count_summer_pipe + ',\'ddlcrop_summer' + count_summer_pipe + '\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="summer_pipe_type"><select id="ddlcrop_summer' + count_summer_pipe + '"  onchange="check_combo_pipe(\'ddlcrop_summer_type1' + count_summer_pipe + '\',\'ddlcrop_summer_type2' + count_summer_pipe + '\',\'ddlcrop_summer' + count_summer_pipe + '\',\'btn_save_sum' + count_summer_pipe + '\',\'TblData_abc_part3_show_pipe\',\'summer_pipe_type\',\'other_pipe_summer\')"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td id="other_pipe_summer" style="display:none;"><input type="text" id = "otherpipe_summer' + count_summer_pipe + '" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id = "area_summer' + count_summer_pipe + '" oninput="Kharif_WaterRequire_pipe(\'area_summer\',\'gross_summer\',\'Pipeline_SummerCrop_Water_demand\',' + count_summer_pipe + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id="gross_summer' + count_summer_pipe + '" oninput="Kharif_WaterRequire_pipe(\'area_summer\',\'gross_summer\',\'Pipeline_SummerCrop_Water_demand\',' + count_summer_pipe + ',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" onpaste="return false" onpaste="return false" maxlength="10" id="area_pr_summer' + count_summer_pipe + '" oninput="khairfNetWater_pipe(\'area_summer\',\'gross_summer\',\'area_pr_summer\',\'pipeline_summer_total_summer_waterdemand\',' + count_summer_pipe + ',\'pipeline_summer_total_reduction_waterdemand\',\'Pipeline_SummerCrop_Water_demand\',\'reduction_Summer\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="reduction_Summer' + count_summer_pipe + '" class="form-control decimal" readonly></td></tr>';
    $('table#TblData_abc_part3_pipe tbody').prepend(code);
    count_summer++;
    //count=count+1;
    //alert(count);
}
function check_combo_pipe(ddl1, ddl2, ddl3, btn, checktbl, td1, td2) {
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


function getreduction_water_pipe(value, value1) {

    for (var i = 1; i <= value1; i++) {
        var val_gross_water = '#' + value + '' + i + '';
        var gross_water = parseFloat($(val_gross_water).val());
        if (gross_water == '' || isNaN.gross_water || gross_water == undefined || isNaN(gross_water)) {
            gross_water = 0;
        }
        var reduction_in_demand = (gross_water * 20 / 100).toFixed(4);
        if (value == "gross_khairf") {
            $("#reduction_kharif" + '' + i).val(reduction_in_demand);
        } else if (value == "gross_rabi") {
            $("#reduction_rabi" + '' + i).val(reduction_in_demand);
        } else if (value == "gross_summer") {
            $("#reduction_Summer" + '' + i).val(reduction_in_demand);
        }
    }
}

function Kharif_WaterRequire_pipe(area, gross_water, setVal, count, e) {
    getreduction_water_pipe(gross_water, count)
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

    //}


    var val_set = '#' + setVal + '';

    if (type == 1) {
        $(val_set).text(parseFloat((parseFloat(sum_area) * parseFloat(sum_gross_water)) / 1000).toFixed(4));
    }
    else {
        $(val_set).text('');
    }
}

function khairfNetWater_pipe(area, gross_water, areaPr, setVal, count, lastSet, minusOne, reduction_kharif) {

    var sum_area = 0;
    var sum_gross_water = 0;
    var sum_areapr = 0;
    var type = 0;

    //for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_areapr = '#' + areaPr + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var red_kharif = '#' + reduction_kharif + '' + count + '';

    var valarea = $(val_area).val();
    var valareapr = $(val_areapr).val();
    var valgross_water = $(val_gross_water).val();
    var reduction_kharif = $(red_kharif).val();

    if (parseFloat(valareapr) > parseFloat(valarea)) {
        alert("Area Proposed Crop should be less than crop area");
        $(val_areapr).val('');
    }

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

    //}
    var Net_water = '#' + setVal + '';
    var val_lastset = '#' + lastSet + '';

    var val_mins = '#' + minusOne + '';

    var per = 20;
    if (type == 1) {
        var val_minus = 100 - per;
        var percentage = sum_gross_water * val_minus / 100;

        $(Net_water).text(parseFloat((((sum_area - sum_areapr) * sum_gross_water * 0.001) + (sum_areapr * (valgross_water - reduction_kharif) * .001)).toFixed(4)));

        $(val_lastset).text(parseFloat((parseFloat($(val_mins).text()) - parseFloat($(Net_water).text()))).toFixed(4));
    }
    else {
        $(val_lastset).text('');
    }


}

function type2_getpl(ddlcrop_khaif_type1, count, Bind_ddl) {

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

function DropDown_getpipe(food_for, food_type, count, Bind_ddl) {

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

function saveKharif_pipe(ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlpipe_khaif, otherpipe_kharif, area_Kharif, gross_khairf, area_pr_kharif, reduction_kharif, water_demand, net_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlpipe_khaif + '';
    var val_area_irrigation = '#' + area_Kharif + '';
    var val_gross_water = '#' + gross_khairf + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_kharif + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var reduction_kharif = '#' + reduction_kharif + '';

    var otherpipe_kharif = '#' + otherpipe_kharif + '';
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
        obj.crop_name = $(otherpipe_kharif).val();
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
    obj.reduction_in_demand = $(reduction_kharif).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/savePipeline",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Successfully Saved") {
                $('#TblData_GRAM_PANCHAYAT_DATABASE_a_pipe').html("");
                Get_pipe_data();
            }
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function saverabi_pipe(ddlcrop_rabi_type, ddlcrop_rabi_type2, ddlcrop_rabi, otherpipe_rabi, area_rabi, gross_rabi, area_pr_rabi, reduction_rabi, water_demand, net_water_demand, reduction_gw) {

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
    var reduction_rabi = '#' + reduction_rabi + '';
    var otherpipe_rabi = '#' + otherpipe_rabi + '';
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
        obj.crop_name = $(otherpipe_rabi).val();
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
    obj.reduction_in_demand = $(reduction_rabi).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/savePipeline",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            if (response == "Successfully Saved") {
                $('#TblData_GRAM_PANCHAYAT_DATABASE_b_pipe').html("");
                Get_pipe_data();
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function savesummer_pipe(ddlcrop_summer_type, ddlcrop_summer_type2, ddlcrop_summer, otherpipe_summer, area_summer, gross_summer, area_pr_summer, reduction_summer, water_demand, net_water_demand, reduction_gw) {
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
    var reduction_summer = '#' + reduction_summer + '';

    var otherpipe_summer = '#' + otherpipe_summer + '';
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
        obj.crop_name = $(otherpipe_summer).val();
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
    obj.reduction_in_demand = $(reduction_summer).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/savePipeline",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            if (response == "Successfully Saved") {
                Get_pipe_data();
                $('#TblData_GRAM_PANCHAYAT_DATABASE_c_pipe').html("");
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function saveFundingData_pipe() {

    var approx_est_cost = $('#aprx_est_cost_sprinkler_pipe').val();
    var pipe_year = $('#pipe_year').val();
    var pipe_department = $('#pipe_department').val();
    var pipe_scheme = $('#pipe_scheme').val();



    var area_proposed_pipe = $("#area_proposed_pipe").val();

    if (area_proposed_pipe == "") {
        alert("Please Enter Area Proposed for Pipelines (ha)");
        $("#area_proposed_pipe").focus();
        return;
    }
    else if (pipe_year == '0') {
        alert('Please Select financial');
        $('#pipe_year').focus();
        return;
    } else if (pipe_department == '0') {
        alert('Please Select Department Name');
        $('#pipe_department').focus();
        return;
    } else if (pipe_scheme == '0') {
        alert('Please Select Scheme name');
        $('#pipe_scheme').focus();
        return;
    }
    else if (approx_est_cost == '') {
        alert('Please fill Approximate Estimated Cost (in lakh)');
        $('#aprx_est_cost_sprinkler_pipe').focus();
        return;
    }
    if (pipe_scheme == "Other") {
        if ($("#other_scheme_pl").val() == "") {
            alert("Please Enter Other Scheme Name");
            return;
        }
    }

    var obj = {};
    obj.fund_for = "UG Pipelines";
    obj.area_proposed = area_proposed_pipe;
    obj.total_crop_area = $('#total_crop_area_pipe').val();
    obj.total_area_proposed = $('#total_area_proposed_pipe').val();
    obj.other_scheme = $("#other_scheme_pl").val();
    obj.financial_year = pipe_year;
    obj.department_name = pipe_department
    obj.scheme_name = pipe_scheme;
    obj.approx_est_cost = $('#aprx_est_cost_sprinkler_pipe').val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveFundingData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            $('#pipe_year').val('0');
            $('#pipe_department').val('0');
            $('#pipe_scheme').val('0');
            $('#aprx_est_cost_sprinkler_pipe').val("");
            $("#other_scheme_pl").val("");
            $("#other_scheme_pl").hide();
            $("#area_proposed_pipe").val("");
            GetFunding_pipe();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

var total_area_proposed_pipeline = 0;
var area_proposed_for_fund_pipeline = 0;
function GetFunding_pipe() {
    total_area_proposed_pipeline = 0;
    area_proposed_for_fund_pipeline = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var obj = {};
    obj.fund_for = "UG Pipelines";
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_fund_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            $('#source_pipe_show').html('');
            if (data.length > 0) {
                var tr = '';


                for (var i = 0; i < data.length; i++) {
                    if (data[i].fund_for == 'UG Pipelines') {
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

                        //total_area_proposed_pipeline = parseFloat(data[0].total_area_proposed);
                        area_proposed_for_fund_pipeline += parseFloat(data[i].area_proposed);
                    }
                }
                tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + a.toFixed(4) + '" disabled style="width:100%;"/></td><td></td></tr>'
                $('#source_pipe_show').append(tr);
                get_approved_status();
            }
        }
    });
}
function Get_pipe_data() {

    var srl_pipe_kharif = 1;
    var srl_pipe_rabi = 1;
    var srl_pipe_summer = 1;

    var wat_dem = 0;
    var net_wat_dem = 0;
    var reduction = 0;
    var total_demand_pipe = 0;
    var total_crop_area = 0;
    var total_area_proposed = 0;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_pipeline_data",
        dataType: 'JSON',
        success: function (data) {
            $("#kharif_sp_pipe").html('');
            $("#rabi_sp_pipe").html('');
            $("#summer_sp_pipe").html('');

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

                        var tr = '<tr><td>' + srl_pipe_kharif + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '<td><button class="btn btn-danger btn_disabled" onclick="Delete_data_pipe(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);

                        $('#Pipeline_Kharif_Water_demand').text(wat_dem);
                        $('#pipeline_kharif_total_pipeline_waterdemand').text(net_wat_dem);
                        $('#pipeline_kharif_total_reduction_waterdemand').text(reduction);
                        $("#kharif_sp_pipe").append(tr);
                        srl_pipe_kharif++;
                    }
                }
                total_demand_pipe += reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "rabi") {
                        var tr = '<tr><td>' + srl_pipe_rabi + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '<td><button class="btn btn-danger btn_disabled" onclick="Delete_data_pipe(\'' + data[i].id + '\')" >Delete</button > </td></tr>';

                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);



                        $('#Pipeline_Rabi_Water_demand').text(wat_dem);
                        $('#pipeline_rabi_total_rabi_waterdemand').text(net_wat_dem);
                        $('#pipeline_rabi_total_reduction_waterdemand').text(reduction);

                        $("#rabi_sp_pipe").append(tr);
                        srl_pipe_rabi++;
                    }
                }
                total_demand_pipe += reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "summer") {

                        var tr = '<tr><td>' + srl_pipe_summer + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '<td><button class="btn btn-danger btn_disabled" onclick="Delete_data_pipe(\'' + data[i].id + '\')" >Delete</button > </td></tr>';

                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);



                        $('#Pipeline_SummerCrop_Water_demand').text(wat_dem);
                        $('#pipeline_summer_total_summer_waterdemand').text(net_wat_dem);
                        $('#pipeline_summer_total_reduction_waterdemand').text(reduction);
                        $("#summer_sp_pipe").append(tr);
                        srl_pipe_summer++;
                    }
                }
                total_demand_pipe += reduction;
                $("#TotalAnnual_Pipeline_Reduction").text(total_demand_pipe.toFixed(4));
                $('#total_crop_area_pipe').val(total_crop_area.toFixed(4));
                $('#total_area_proposed_pipe').val(total_area_proposed.toFixed(4));
            }
            get_approved_status();
            GetFunding_pipe();
        }
    });
}


function Delete_data_pipe(idd) {
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
                    url: "/WSP_2024_25_update/Delete_data_pipe",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        alert(response);
                        //$('#SAVE_BTN2').prop('disabled', false)
                        Get_Irrigation_PipeLines();
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

function DropDown_get_Allpipe(food_for, food_type, ddl_bind, val_for_set) {

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


function Check_Area_Proposed_pipelines() {

    var total_area_proposed_pipeline = parseFloat($('#total_area_proposed_pipe').val());
    var area_proposed_pipelines = parseFloat($('#area_proposed_pipe').val());
    var total_area_proposed_fund = area_proposed_pipelines + area_proposed_for_fund_pipeline;
    if (total_area_proposed_fund > total_area_proposed_pipeline) {
        alert('Area Proposed for Pipelines (ha) through above Possible Funding Source Should be less than Total Area Proposed for Pipelines (ha)');
        $('#area_proposed_pipe').val("");
    }
}
// Funding Calculation
function GapFundingCalPipe() {
    var aprx_est_cost_sprinkler = $("#aprx_est_cost_sprinkler_pipe").val();
    var aprx_fund_avail_sprinkler = $("#aprx_fund_avail_sprinkler_pipe").val();

    var gap_fund_sprinkler = aprx_est_cost_sprinkler - aprx_fund_avail_sprinkler;
    $("#gap_fund_sprinkle_pipe").val(gap_fund_sprinkler);
}