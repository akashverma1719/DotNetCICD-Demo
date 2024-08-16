////const { forEach } = require("core-js/library/js/array");

$(document).ready(function () {
    Get_anyother_data();

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
var count_any = 1;
function addrow_a_part_kharif_anyother() {
    if (count_any == 1) {
        var code = '<tr><td><button id="btn_save_kh' + count_any + '" class="btn btn-primary" onclick="saveKharif_any(\'intervation_pr_kharif' + count_any + '\',\'Other_any_kh_innovative' + count_any + '\',\'ddlcrop_khaif_type1' + count_any + '\',\'ddlcrop_khaif_type2' + count_any + '\',\'ddlcrop_khaif' + count_any + '\',\'otherany_kharif' + count_any + '\',\'area_Kharif' + count_any + '\',\'water_req_khairf' + count_any + '\',\'grnd_water_dem_khairf' + count_any + '\',\'water_save_khairf' + count_any + '\',\'Total_Reduction_in_ground_water_demand_Kharif\',\'kharif_any_type\',\'other_any_kharif\')">Save</button > </td>';
        code += '<td><select id="intervation_pr_kharif' + count_any + '" onchange="other_intervention(\'intervation_pr_kharif' + count_any + '\',' + count_any + ',\'Other_any_kh_innovative' + count_any + '\')"><option value="0">--Select--</option ><option value="Direct Seeding of Rice">Direct Seeding of Rice</option ><option value="Grid connected Solar Pump">Grid connected Solar Pump</option ><option value="Happy seeder/super seeder/Zero Tillage">Happy seeder/super seeder/Zero Tillage</option ><option value="Hydrogel">Hydrogel</option ><option value="Laser Land Leveling">Laser Land Leveling</option ><option value="Mulching">Mulching</option ><option value="Net House">Net House</option ><option value="Poly House">Poly House</option ><option value="Shednet">Shednet</option ><option value="Vermi compost">Vermi compost</option ><option value="Other">Other</option ></select ><input hidden type="text" id="Other_any_kh_innovative' + count_any + '"  class="form-control" "></td>';
        code += '<td><select id="ddlcrop_khaif_type1' + count_any + '" onchange="type2_getany(\'ddlcrop_khaif_type1' + count_any + '\',' + count_any + ',\'ddlcrop_khaif_type2' + count_any + '\',\'ddlcrop_khaif' + count_any + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select id="ddlcrop_khaif_type2' + count_any + '" onchange="DropDown_get_any(\'ddlcrop_khaif_type1' + count_any + '\',\'ddlcrop_khaif_type2' + count_any + '\',\'Kharif\',' + count_any + ',\'ddlcrop_khaif' + count_any + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="kharif_any_type"><select id="ddlcrop_khaif' + count_any + '" onchange="check_combo_any(\'ddlcrop_khaif_type1' + count_any + '\',\'ddlcrop_khaif_type2' + count_any + '\',\'ddlcrop_khaif' + count_any + '\',\'btn_save_kh' + count_any + '\',\'TblData_GRAM_PANCHAYAT_DATABASE_a_show_any\',\'kharif_any_type\',\'other_any_kharif\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="other_any_kharif" style="display:none;"><input type="text" id = "otherany_kharif' + count_any + '" class="form-control alpha"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_Kharif' + count_any + '"  class="form-control decimal" oninput="Kharif_WaterRequire_any(\'area_Kharif\',\'water_req_khairf\',\'grnd_water_dem_khairf\',' + count_any + ',this)"></td>';
        /*code += '<td><input type="text" data-decimal="4" maxlength="10" id = "proposed_area_Kharif' + count_any + '"  class="form-control decimal" oninput="Kharif_WaterRequire_any(\'area_Kharif\',\'water_req_khairf\',\'grnd_water_dem_khairf\',' + count_any + ',this)"></td>';*/
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="water_req_khairf' + count_any + '"  class="form-control decimal" oninput="Kharif_WaterRequire_any(\'area_Kharif\',\'water_req_khairf\',\'grnd_water_dem_khairf\',' + count_any + ',this)"></td>';
        code += '<td><input type="text" data-decimal="4" maxlength="10" id="grnd_water_dem_khairf' + count_any + '"oninput="reduc_calc(\'grnd_water_dem_khairf\',\'water_save_khairf\',\'grnd_water_dem_khairf\',\'Total_Reduction_in_ground_water_demand_Kharif\',' + count_any + ',this)"  class="form-control decimal" readonly></td>';
        code += '<td><input type="text" data-decimal="4" maxlength="10" onpaste="return false" id="water_save_khairf' + count_any + '"oninput="reduc_calc(\'grnd_water_dem_khairf\',\'water_save_khairf\',\'grnd_water_dem_khairf\',\'Total_Reduction_in_ground_water_demand_Kharif\',' + count_any + ',this)"  class="form-control decimal"></td>';


        $('table#TblData_abc_part1_anyother tbody').prepend(code);
        $("#Other_any_kh_innovative" + count_any).hide();
        count_any++;
    } else {
        alert("Please enter the data in all the fields");
    }
}
var count_rabi_any = 1;
function addrow_a_part_rabi_anyother() {
    if (count_rabi_any == 1) {
        var code = '<tr><td><button id="btn_save_rb' + count_rabi_any + '" class="btn btn-primary" onclick="saverabi_any(\'intervation_pr_rabi' + count_rabi_any + '\',\'Other_any_rb_innovative' + count_rabi_any + '\',\'ddlcrop_rabi_type1' + count_rabi_any + '\',\'ddlcrop_rabi_type2' + count_rabi_any + '\',\'ddlcrop_rabi' + count_rabi_any + '\',\'otherany_rabi' + count_rabi_any + '\',\'area_rabi' + count_rabi_any + '\',\'water_req_rabi' + count_rabi_any + '\',\'grnd_water_dem_rabi' + count_rabi_any + '\',\'water_save_rabi' + count_rabi_any + '\',\'Total_Reduction_in_ground_water_demand_Rabi\')">Save</button > </td>';
        code += '<td><select id="intervation_pr_rabi' + count_rabi_any + '" onchange="other_intervention(\'intervation_pr_rabi' + count_rabi_any + '\',' + count_rabi_any + ',\'Other_any_rb_innovative' + count_rabi_any + '\')"><option value="0">--Select--</option ><option value="Direct Seeding of Rice">Direct Seeding of Rice</option ><option value="Grid connected Solar Pump">Grid connected Solar Pump</option ><option value="Happy seeder/super seeder/Zero Tillage">Happy seeder/super seeder/Zero Tillage</option ><option value="Hydrogel">Hydrogel</option ><option value="Laser Land Leveling">Laser Land Leveling</option ><option value="Mulching">Mulching</option ><option value="Net House">Net House</option ><option value="Poly House">Poly House</option ><option value="Shednet">Shednet</option ><option value="Vermi compost">Vermi compost</option ><option value="Other">Other</option ></select ><input hidden type="text" id="Other_any_rb_innovative' + count_rabi_any + '"  class="form-control" "></td>';
        code += '<td><select id="ddlcrop_khaif_type1' + count_rabi_any + '" onchange="type2_getany(\'ddlcrop_khaif_type1' + count_rabi_any + '\',' + count_rabi_any + ',\'ddlcrop_khaif_type2' + count_rabi_any + '\',\'ddlcrop_khaif' + count_rabi_any + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select id="ddlcrop_khaif_type2' + count_rabi_any + '" onchange="DropDown_get_any(\'ddlcrop_khaif_type1' + count_rabi_any + '\',\'ddlcrop_khaif_type2' + count_rabi_any + '\',\'Kharif\',' + count_rabi_any + ',\'ddlcrop_khaif' + count_rabi_any + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="kharif_any_type"><select id="ddlcrop_khaif' + count_rabi_any + '" onchange="check_combo_any(\'ddlcrop_khaif_type1' + count_rabi_any + '\',\'ddlcrop_khaif_type2' + count_rabi_any + '\',\'ddlcrop_khaif' + count_rabi_any + '\',\'btn_save_kh' + count_rabi_any + '\',\'TblData_GRAM_PANCHAYAT_DATABASE_a_show_any\',\'kharif_any_type\',\'other_any_kharif\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="other_any_rabi" style="display:none;"><input type="text" id = "otherany_rabi' + count_rabi_any + '" class="form-control alpha"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_rabi' + count_rabi_any + '" oninput="Kharif_WaterRequire_any(\'area_rabi\',\'water_req_rabi\',\'grnd_water_dem_rabi\',' + count_rabi_any + ',this)"  class="form-control decimal"></td>';
        /*code += '<td><input type="text" data-decimal="4" maxlength="10" id = "proposed_area_rabi' + count_rabi_any + '" oninput="Kharif_WaterRequire_any(\'area_rabi\',\'water_req_rabi\',\'grnd_water_dem_rabi\',' + count_rabi_any + ',this)"  class="form-control decimal"></td>';*/
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="water_req_rabi' + count_rabi_any + '" oninput="Kharif_WaterRequire_any(\'area_rabi\',\'water_req_rabi\',\'grnd_water_dem_rabi\',' + count_rabi_any + ',this)"  class="form-control decimal"></td>';
        code += '<td><input type="text" readonly data-decimal="4" maxlength="10" id="grnd_water_dem_rabi' + count_rabi_any + '"oninput="reduc_calc(\'grnd_water_dem_rabi\',\'water_save_rabi\',\'grnd_water_dem_rabi\',\'Total_Reduction_in_ground_water_demand_Rabi\',' + count_rabi_any + ',this)"  class="form-control decimal"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="water_save_rabi' + count_rabi_any + '"oninput="reduc_calc(\'grnd_water_dem_rabi\',\'water_save_rabi\',\'grnd_water_dem_rabi\',\'Total_Reduction_in_ground_water_demand_Rabi\',' + count_rabi_any + ',this)"  class="form-control decimal"></td>';

        $('table#TblData_abc_part2_anyother tbody').prepend(code);
        $("#Other_any_rb_innovative" + count_rabi_any).hide();
        count_rabi_any++;
    } else {
        alert("Please enter the data in all the fields");
    }
    //count=count+1;
    //alert(count);
}
var count_summer_any = 1;
function addrow_a_part_Summer_anyother() {
    if (count_summer_any == 1) {
        var code = '<tr><td><button id="btn_save_su' + count_summer_any + '" class="btn btn-primary" onclick="savesummer_any(\'intervation_pr_summer' + count_summer_any + '\',\'Other_any_sm_innovative' + count_summer_any + '\',\'ddlcrop_summer_type1' + count_summer_any + '\',\'ddlcrop_summer_type2' + count_summer_any + '\',\'ddlcrop_summer' + count_summer_any + '\',\'otherany_summer' + count_summer_any + '\',\'area_summer' + count_summer_any + '\',\'water_req_summer' + count_summer_any + '\',\'grnd_water_dem_summer' + count_summer_any + '\',\'water_save_summer' + count_summer_any + '\',\'Total_Reduction_in_ground_water_demand_Summer\')">Save</button > </td>';
        code += '<td><select id="intervation_pr_summer' + count_summer_any + '" onchange="other_intervention(\'intervation_pr_summer' + count_summer_any + '\',' + count_summer_any + ',\'Other_any_sm_innovative' + count_summer_any + '\')"><option value="0">--Select--</option ><option value="Direct Seeding of Rice">Direct Seeding of Rice</option ><option value="Grid connected Solar Pump">Grid connected Solar Pump</option ><option value="Happy seeder/super seeder/Zero Tillage">Happy seeder/super seeder/Zero Tillage</option ><option value="Hydrogel">Hydrogel</option ><option value="Laser Land Leveling">Laser Land Leveling</option ><option value="Mulching">Mulching</option ><option value="Net House">Net House</option ><option value="Poly House">Poly House</option ><option value="Shednet">Shednet</option ><option value="Vermi compost">Vermi compost</option ><option value="Other">Other</option ></select ><input hidden type="text" id="Other_any_sm_innovative' + count_summer_any + '"  class="form-control" "></td>';
        code += '<td><select id="ddlcrop_khaif_type1' + count_summer_any + '" onchange="type2_getany(\'ddlcrop_khaif_type1' + count_summer_any + '\',' + count_summer_any + ',\'ddlcrop_khaif_type2' + count_summer_any + '\',\'ddlcrop_khaif' + count_summer_any + '\')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select id="ddlcrop_khaif_type2' + count_summer_any + '" onchange="DropDown_get_any(\'ddlcrop_khaif_type1' + count_summer_any + '\',\'ddlcrop_khaif_type2' + count_summer_any + '\',\'Kharif\',' + count_summer_any + ',\'ddlcrop_khaif' + count_summer_any + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="kharif_any_type"><select id="ddlcrop_khaif' + count_summer_any + '" onchange="check_combo_any(\'ddlcrop_khaif_type1' + count_summer_any + '\',\'ddlcrop_khaif_type2' + count_summer_any + '\',\'ddlcrop_khaif' + count_summer_any + '\',\'btn_save_kh' + count_summer_any + '\',\'TblData_GRAM_PANCHAYAT_DATABASE_a_show_any\',\'kharif_any_type\',\'other_any_kharif\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="other_any_summer" style="display:none;"><input type="text" id = "otherany_summer' + count_summer_any + '" class="form-control alpha"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id = "area_summer' + count_summer_any + '" oninput="Kharif_WaterRequire_any(\'area_summer\',\'water_req_summer\',\'grnd_water_dem_summer\',' + count_summer_any + ',this)"  class="form-control decima"></td>';
        /*code += '<td><input type="text" data-decimal="4" maxlength="10" id = "proposed_area_summer' + count_summer_any + '" oninput="Kharif_WaterRequire_any(\'area_summer\',\'water_req_summer\',\'grnd_water_dem_summer\',' + count_summer_any + ',this)"  class="form-control decima"></td>';*/
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="water_req_summer' + count_summer_any + '" oninput="Kharif_WaterRequire_any(\'area_summer\',\'water_req_summer\',\'grnd_water_dem_summer\',' + count_summer_any + ',this)"  class="form-control decima"></td>';
        code += '<td><input type="text" readonly data-decimal="4" maxlength="10" id="grnd_water_dem_summer' + count_summer_any + '"oninput="reduc_calc(\'grnd_water_dem_summer\',\'water_save_summer\',\'grnd_water_dem_summer\',\'Total_Reduction_in_ground_water_demand_Summer\',' + count_summer_any + ',this)"  class="form-control decima"></td>';
        code += '<td><input type="text" data-decimal="4" onpaste="return false" maxlength="10" id="water_save_summer' + count_summer_any + '"oninput="reduc_calc(\'grnd_water_dem_summer\',\'water_save_summer\',\'grnd_water_dem_summer\',\'Total_Reduction_in_ground_water_demand_Summer\',' + count_summer_any + ',this)"  class="form-control decima"></td>';

        $('table#TblData_abc_part3_anyother tbody').prepend(code);
        $("#Other_any_sm_innovative" + count_summer_any).hide();
        count_summer_any++;
    } else {
        alert("Please enter the data in all the fields");
    }
    //count=count+1;
    //alert(count);
}

function reduc_calc(ground_water_demand, water_Saving, water_req, set, count, e) {

    enforceNumberValidation(e);
    var sum_demand = 0;
    var sum_saving = 0;
    //for (var i = 1; i <= count; i++) {
    var val_ground_water_demand = '#' + ground_water_demand + '' + count + '';
    var water_Saving = '#' + water_Saving + '' + count + '';
    var water_requirement = '#' + water_req + '' + count + '';



    var ground_water_demand1 = $(val_ground_water_demand).val();
    var water_Saving1 = $(water_Saving).val();
    var water_requirement1 = $(water_requirement).val();
    var val_water_Saving = parseFloat((water_requirement1 * water_Saving1) / 100).toFixed(4);

    if (ground_water_demand1 != '' && water_Saving1 != '') {
        sum_demand = parseFloat(sum_demand) + parseFloat(ground_water_demand1);
        sum_saving = parseFloat(sum_saving) + parseFloat(water_Saving1);
    }
    //}
    var val_set = '#' + set + '';
    if (sum_demand != '0' && sum_saving != '0') {
        var tot_reduction = parseFloat((parseFloat(sum_demand) * parseFloat(sum_saving) * 0.01)).toFixed(4);
        $(val_set).text(tot_reduction);
    }
    else {
        $(val_set).text('0');
    }

}
function other_intervention(intervation_pr_kharif, count, other_innovative) {

    var intervation_pr_kharif = '#' + intervation_pr_kharif + '';
    var other_innovative = '#' + other_innovative + '';
    var Val_check = $(intervation_pr_kharif).val();
    if (Val_check == "Other") {
        $(other_innovative).show();
    } else {
        $(other_innovative).hide();
    }
}
function type2_getany(ddlcrop_khaif_type1, count, Bind_ddl, ddlcrop_khaif_type3) {
    debugger;
    var val_crop_category = '#' + ddlcrop_khaif_type1 + '';
    var val_crop_category3 = '#' + ddlcrop_khaif_type3 + '';
    var BindTo = '#' + Bind_ddl + '';
    var Val_check = $(val_crop_category).val();
    $(BindTo).val("0");
    $(val_crop_category3).val("0");

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

function enforceNumberValidation(ele) {

    if ($(ele).data('decimal') != null) {
        // found valid rule for decimal
        var decimal = parseInt($(ele).data('decimal')) || 0;
        var val = $(ele).val();
        if (decimal > 0) {
            var splitVal = val.split('.');
            if (splitVal.length == 2 && splitVal[1].length > decimal) {
                // user entered invalid input
                $(ele).val(splitVal[0] + '.' + splitVal[1].substr(0, decimal));
            }
        } else if (decimal == 0) {
            // do not allow decimal place
            var splitVal = val.split('.');
            if (splitVal.length > 1) {
                // user entered invalid input
                $(ele).val(splitVal[0]); // always trim everything after '.'
            }
        }
    }

    //GapFundingCalSprin();
}
function Kharif_WaterRequire_any(area, gross_water, setVal, count, e) {


    //getreduction_water_spr(gross_water, count)
    enforceNumberValidation(e);
    var sum_area = 0;
    var sum_gross_water = 0;
    var type = 0;
    //for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var valarea = $(val_area).val();
    var valgross_water = $(val_gross_water).val();
    if (valarea == '' || isNaN.valarea || valarea == undefined) {
        valarea = 0;
    }
    if (valgross_water == '' || isNaN.valgross_water || valgross_water == undefined) {
        valgross_water = 0;
    }


    if (valarea != '', valgross_water != '') {
        sum_area = parseFloat(sum_area) + parseFloat(valarea);
        sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
        type = 1;
    }

    //}


    var Sprinkler_Water_Demand = '#' + setVal + '' + count + '';

    if (type == 1) {
        $(Sprinkler_Water_Demand).val(parseFloat((parseFloat(sum_area) * parseFloat(sum_gross_water)) / 1000).toFixed(4));
    }
    else {
        $(Sprinkler_Water_Demand).text('');
    }
}
function DropDown_get_any(dd3,food_for, food_type, count, Bind_ddl) {
    debugger
    var food_for = '#' + food_for + '';
    var BindTo = '#' + Bind_ddl + '';
    var dd3 = '#' + dd3 + '';
    $("dd3").val("0")
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

function saveKharif_any(txt_intervation_pr, Other_any, ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlcrop_khaif, otherany_kharif, area_Kharif, water_req_khairf, grnd_water_dem_khairf, water_save_khairf, Total_Reduction_in_ground_water_demand_Kharif) {

    var val_txt_intervation_pr = '#' + txt_intervation_pr + '';
    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlcrop_khaif + '';
    var val_area_irrigation = '#' + area_Kharif + '';
    var val_gross_water = '#' + water_req_khairf + '';
    var val_water_demand = '#' + grnd_water_dem_khairf + '';
    var val_save_water = '#' + water_save_khairf + '';
    var val_reduction = '#' + Total_Reduction_in_ground_water_demand_Kharif + '';
    var proposed_area = '#' + proposed_area + '';
    var Other = '#' + Other_any + '';


    var Other_any = $(Other).val();
    var otherany_kharif = '#' + otherany_kharif + '';
    var other_check = $(val_crop_name).val();

    if ($(val_txt_intervation_pr).val() == '0') {
        alert("Please Select Other water saving Measures/Innovative measures");
        $(val_txt_intervation_pr).focus();
        return;
    }
    else if ($(val_crop_category).val() == '0') {
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
    } else if ($(val_water_demand).val() == '') {
        alert("Please fill Ground Water Demand");
        $(val_water_demand).focus();
        return;
    }
    else if ($(val_save_water).val() == '') {
        alert("Please fill Water Saving");
        $(val_save_water).focus();
        return;
    }
    else if ($(val_save_water).val() < 1 || $(val_save_water).val() > 100) {
        alert("Please fill Water Saving Value Between 1 to 100");
        $(val_save_water).focus();
        return;
    }
    if ($(val_txt_intervation_pr).val() == 'Other') {
        if (Other_any == "") {
            alert("Please Enter Other Name")
            return;
        }
    }
    //else if ($(proposed_area).val() == '') {
    //    alert("Please fill Ground Water Demand");
    //    $(proposed_area).focus();
    //    return;
    //} else if (parseFloat($(proposed_area).val()) > parseFloat($(val_area_irrigation).val())) {
    //    alert("proposed area is greater than crop area");
    //    return;
    //}


    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(otherany_kharif).val();
    }
    obj.season_type = "kharif"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.proposed_area = $(proposed_area).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).val();
    obj.water_save = $(val_save_water).val();
    obj.reduction = $(val_reduction).text();
    obj.innovative_measures = $(val_txt_intervation_pr).val();
    obj.other_innovative = Other_any;
    var a = JSON.stringify(obj);
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveAnyother",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            count_any = 1;
            Get_anyother_data();
            //$('#SAVE_BTN2').prop('disabled', false)
            Get_anyother_data();
            $('#TblData_GRAM_PANCHAYAT_DATABASE_a_any').html('');
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function saverabi_any(txt_intervation_pr, Other_any, ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlcrop_khaif, otherany_rabi, area_Kharif, water_req_khairf, grnd_water_dem_khairf, water_save_khairf, Total_Reduction_in_ground_water_demand_Kharif) {

    var val_txt_intervation_pr = '#' + txt_intervation_pr + '';
    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlcrop_khaif + '';
    var val_area_irrigation = '#' + area_Kharif + '';
    var proposed_area = '#' + proposed_area + '';
    var val_gross_water = '#' + water_req_khairf + '';
    var val_water_demand = '#' + grnd_water_dem_khairf + '';
    var val_save_water = '#' + water_save_khairf + '';
    var val_reduction = '#' + Total_Reduction_in_ground_water_demand_Kharif + '';
    var Other = '#' + Other_any + '';


    var Other_any = $(Other).val();
    var otherany_rabi = '#' + otherany_rabi + '';
    var other_check = $(val_crop_name).val();

    if ($(val_txt_intervation_pr).val() == '0') {
        alert("Please Select Other water saving Measures/Innovative measures");
        $(val_txt_intervation_pr).focus();
        return;
    }
    else if ($(val_crop_category).val() == '0') {
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
    } else if ($(val_water_demand).val() == '') {
        alert("Please fill Ground Water Demand");
        $(val_water_demand).focus();
        return;
    }
    else if ($(val_save_water).val() == '') {
        alert("Please fill Water Saving");
        $(val_save_water).focus();
        return;
    }
    else if ($(val_save_water).val() < 1 || $(val_save_water).val() > 100) {
        alert("Please fill Water Saving Value Between 1 to 100");
        $(val_save_water).focus();
        return;
    }
    if ($(val_txt_intervation_pr).val() == 'Other') {
        if (Other_any == "") {
            alert("Please Enter Other Name");
            $(Other).focus();
            return;
        }
    }
    //else if ($(proposed_area).val() == '') {
    //    alert("Please fill Ground Water Demand");
    //    $(proposed_area).focus();
    //    return;
    //} else if (parseFloat($(proposed_area).val()) > parseFloat($(val_area_irrigation).val())) {
    //    alert("proposed area is greater than crop area");
    //    return;
    //}


    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(otherany_rabi).val();
    }
    obj.season_type = "rabi"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.proposed_area = $(proposed_area).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).val();
    obj.water_save = $(val_save_water).val();
    obj.reduction = $(val_reduction).text();
    obj.innovative_measures = $(val_txt_intervation_pr).val();
    obj.other_innovative = Other_any;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveAnyother",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            count_rabi_any = 1;
            // Get_anyother_data();
            Get_anyother_data();
            $('#TblData_GRAM_PANCHAYAT_DATABASE_b_any').html('');
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function savesummer_any(txt_intervation_pr, Other_any, ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlcrop_khaif, otherany_summer, area_Kharif, water_req_khairf, grnd_water_dem_khairf, water_save_khairf, Total_Reduction_in_ground_water_demand_Kharif) {

    var val_txt_intervation_pr = '#' + txt_intervation_pr + '';
    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlcrop_khaif + '';
    var val_area_irrigation = '#' + area_Kharif + '';
    var proposed_area = '#' + proposed_area + '';
    var val_gross_water = '#' + water_req_khairf + '';
    var val_water_demand = '#' + grnd_water_dem_khairf + '';
    var val_save_water = '#' + water_save_khairf + '';
    var val_reduction = '#' + Total_Reduction_in_ground_water_demand_Kharif + '';
    var Other = '#' + Other_any + '';


    var Other_any = $(Other).val();
    var otherany_summer = '#' + otherany_summer + '';
    var other_check = $(val_crop_name).val();

    if ($(val_txt_intervation_pr).val() == '0') {
        alert("Please Select Other water saving Measures/Innovative measures");
        $(val_txt_intervation_pr).focus();
        return;
    }
    else if ($(val_crop_category).val() == '0') {
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
    } else if ($(val_water_demand).val() == '') {
        alert("Please fill Ground Water Demand");
        $(val_water_demand).focus();
        return;
    }
    else if ($(val_save_water).val() == '') {
        alert("Please fill Water Saving");
        $(val_save_water).focus();
        return;
    }
    else if ($(val_save_water).val() < 1 || $(val_save_water).val() > 100) {
        alert("Please fill Water Saving Value Between 1 to 100");
        $(val_save_water).focus();
        return;
    }
    if ($(val_txt_intervation_pr).val() == 'Other') {
        if (Other_any == "") {
            alert("Please Enter Other Name");
            $(Other).focus();
            return;
        }
    }
    //else if ($(proposed_area).val() == '') {
    //    alert("Please fill Proposed Area");
    //    $(proposed_area).focus();
    //    return;
    //} else if (parseFloat($(proposed_area).val()) > parseFloat($(val_area_irrigation).val())) {
    //    alert("proposed area is greater than crop area");
    //    return;
    //}


    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(otherany_summer).val();
    }
    obj.season_type = "summer"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.proposed_area = $(proposed_area).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).val();
    obj.water_save = $(val_save_water).val();
    obj.reduction = $(val_reduction).text();
    obj.innovative_measures = $(val_txt_intervation_pr).val();
    obj.other_innovative = Other_any;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveAnyother",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            count_summer_any = 1;
            Get_anyother_data();
            $('#TblData_GRAM_PANCHAYAT_DATABASE_c_any').html('');
        },
        error: function () {
            alert("Error While Saving Data");
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function saveFundingData_anyother() {
    var approx_est_cost = $('#aprx_est_cost_sprinkler_anyother').val();
    var anyother_year = $('#anyother_year').val();
    var anyother_department = $('#anyother_department').val();
    var anyother_scheme = $('#anyother_scheme').val();
    var innovative_measures = $("#innovative_measures").val();
    var area_selected_innovative = $("#area_selected_innovative").val();


    var area_proposed_anyother = $("#area_proposed_anyother").val();
    if (innovative_measures == "0") {
        alert("Please Select Other water saving Measures/Innovative measures");
        $("#innovative_measures").focus();
        return;
    }
    if (area_proposed_anyother == "") {
        alert("Please Enter Area Proposed for Any Other (ha)");
        $("#area_proposed_anyother").focus();
        return;
    }
    if (anyother_year == '0') {
        alert('Please Select financial');
        $('#anyother_year').focus();
        return;
    } else if (anyother_department == '0') {
        alert('Please Select Department Name');
        $('#anyother_department').focus();
        return;
    } else if (anyother_scheme == '0') {
        alert('Please Select Scheme name');
        $('#anyother_scheme').focus();
        return;
    } else if (approx_est_cost == '') {
        alert('Please fill Approximate Estimated Cost (in lakh)');
        $('#aprx_est_cost_sprinkler_anyother').focus();
        return;
    }
    if (anyother_scheme == "Other") {
        if ($("#other_scheme_any").val() == "") {
            alert("Please Enter Other Scheme Name");
            return;
        }
    }
    var obj = {};
    obj.fund_for = "Other Measures"
    obj.area_proposed = area_proposed_anyother;
    obj.total_area_proposed = $('#total_crop_area_anyother').val();
    obj.other_scheme = $("#other_scheme_any").val();
    /*obj.total_area_proposed = $('#total_area_proposed_anyother').val();*/
    obj.financial_year = anyother_year;
    obj.department_name = anyother_department
    obj.scheme_name = anyother_scheme;
    obj.approx_est_cost = $('#aprx_est_cost_sprinkler_anyother').val();
    obj.innovative_measures = innovative_measures;
    obj.area_selected_innovative = area_selected_innovative;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/saveFundingData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Saved") {
                $('#aprx_est_cost_sprinkler_anyother').val("");
                $('#anyother_year').val('0');
                $('#anyother_department').val('0');
                $('#anyother_scheme').val('0');
                $("#other_scheme_any").val("");
                $("#other_scheme_any").hide();
                $("#area_proposed_anyother").val("");
                $("#area_selected_innovative").val("");
                //$('#SAVE_BTN2').prop('disabled', false)
                GetFunding_anyother();
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

var total_area_proposed_other = 0;
var area_proposed_for_fund_other = 0;
function GetFunding_anyother() {
    total_area_proposed_other = 0;
    area_proposed_for_fund_other = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var obj = {};
    obj.fund_for = "Other Measures";
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_fund_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#source_anyother_show').html('');
            if (data.length > 0) {
                var tr = '';


                for (var i = 0; i < data.length; i++) {
                    if (data[i].fund_for == 'Other Measures') {
                        var scheme_name = data[i].scheme_name;
                        var innovative_measures = data[i].innovative_measures;
                        if (scheme_name == "Other") {
                            scheme_name = data[i].scheme_name + " - " + data[i].other_scheme;
                        }

                        tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].total_area_proposed + '</td><td>' + innovative_measures + '</td><td>' + data[i].area_selected_innovative + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].financial_year + '</td><td>' + data[i].department_name + '</td><td>' + scheme_name + '</td><td>' + data[i].approx_est_cost + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_funding(\'' + data[i].id + '\')" >Delete</button ></td></tr>';
                        //$('#possible_funding_sprinkler').val(data[i].possible_funding);
                        //$('#aprx_est_cost_sprinkler').val(data[i].approx_est_cost);
                        //$('#aprx_fund_avail_sprinkler').val(data[i].approx_fund_avail);
                        //$('#gap_fund_sprinkler').val(data[i].gap_funding);
                        a += parseFloat(data[i].approx_est_cost);
                        area_proposed_for_fund_other += parseFloat(data[i].area_proposed);
                    }
                }
                //total_area_proposed_other = parseFloat(data[0].data[i].total_crop_area);
                tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + a.toFixed(4) + '" disabled style="width:100%;"/></td><td></td></tr>'
                $('#source_anyother_show').append(tr);

            }
            DropDownInnovative();
        }
    });
}
function Get_anyother_data() {
    var wat_dem = 0;
    var wat_sav = 0;
    var final_val = 0;
    var total_reduction = 0;

    var srl_dp_kharif = 1;
    var srl_dp_rabi = 1;
    var srl_dp_summer = 1;

    var total_demand_any = 0;

    var total_crop_area = 0;
    var total_area_proposed = 0;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Get_anyother_data",
        dataType: 'JSON',
        success: function (data) {
            $("#TblData_GRAM_PANCHAYAT_DATABASE_a_show_any").html('');
            $("#TblData_GRAM_PANCHAYAT_DATABASE_b_show_any").html('');
            $("#TblData_GRAM_PANCHAYAT_DATABASE_c_show_any").html('');
            if (data.length > 0) {

                for (var i = 0; i < data.length; i++) {
                    var crop_area = parseFloat(data[i].area_irrigation).toFixed(4);
                    total_crop_area += parseFloat(crop_area);
                    var area_proposed = parseFloat(data[i].proposed_area).toFixed(4);;
                    total_area_proposed += parseFloat(area_proposed);
                    if (i == 0) {
                        wat_dem = 0;
                        wat_sav = 0;
                        final_val = 0;
                        total_reduction = 0;
                    }
                    var innovative_measures = '';
                    if (data[i].innovative_measures == "Other") {
                        innovative_measures = data[i].innovative_measures + ' - ' + data[i].other_innovative;
                    } else {
                        innovative_measures = data[i].innovative_measures;
                    }
                    if (data[i].season_type == "kharif") {
                        var tr = '<tr><td>' + srl_dp_kharif + '</td><td>' + innovative_measures + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].water_demand + '</td><td>' + data[i].water_save + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_any(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        wat_dem += parseFloat(data[i].water_demand);
                        wat_sav += parseFloat(data[i].water_save);
                        $("#TblData_GRAM_PANCHAYAT_DATABASE_a_show_any").append(tr);
                        srl_dp_kharif++;
                        total_reduction += parseFloat(data[i].reduction);
                    }

                }
                $('#Total_ground_water_demand_Kharif').text(parseFloat(wat_dem).toFixed(4));
                //final_val = (parseFloat((parseFloat(wat_dem) * parseFloat(wat_sav)) * 0.01).toFixed(4));
                $('#Total_Reduction_in_ground_water_demand_Kharif').text(parseFloat(total_reduction).toFixed(4));
                total_demand_any += total_reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        wat_sav = 0;
                        final_val = 0;
                        total_reduction = 0;
                    }

                    var innovative_measures = '';
                    if (data[i].innovative_measures == "Other") {
                        innovative_measures = data[i].innovative_measures + ' - ' + data[i].other_innovative;
                    } else {
                        innovative_measures = data[i].innovative_measures;
                    }
                    if (data[i].season_type == "rabi") {
                        var tr = '<tr><td>' + srl_dp_rabi + '</td><td>' + innovative_measures + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].water_demand + '</td><td>' + data[i].water_save + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_any(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        wat_dem += parseFloat(data[i].water_demand);
                        wat_sav += parseFloat(data[i].water_save);
                        $("#TblData_GRAM_PANCHAYAT_DATABASE_b_show_any").append(tr);
                        srl_dp_rabi++;
                        total_reduction += parseFloat(data[i].reduction);
                    }
                }
                //final_val = (parseFloat((parseFloat(wat_dem) * parseFloat(wat_sav)) * 0.01).toFixed(4));
                $('#Total_ground_water_demand_rabi').text(parseFloat(wat_dem).toFixed(4));
                $('#Total_Reduction_in_ground_water_demand_Rabi').text(parseFloat(total_reduction).toFixed(4));
                total_demand_any += total_reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        wat_sav = 0;
                        final_val = 0;
                        total_reduction = 0;
                    }
                    var innovative_measures = '';
                    if (data[i].innovative_measures == "Other") {
                        innovative_measures = data[i].innovative_measures + ' - ' + data[i].other_innovative;
                    } else {
                        innovative_measures = data[i].innovative_measures;
                    }
                    if (data[i].season_type == "summer") {
                        var tr = '<tr><td>' + srl_dp_summer + '</td><td>' + innovative_measures + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                        tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].water_demand + '</td><td>' + data[i].water_save + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_any(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        wat_dem += parseFloat(data[i].water_demand);
                        wat_sav += parseFloat(data[i].water_save);
                        $("#TblData_GRAM_PANCHAYAT_DATABASE_c_show_any").append(tr);
                        srl_dp_summer++;
                        total_reduction += parseFloat(data[i].reduction);
                    }
                }
                //final_val = (parseFloat((parseFloat(wat_dem) * parseFloat(wat_sav)) * 0.01).toFixed(4));
                $('#Total_ground_water_demand_summer').text(parseFloat(wat_dem).toFixed(4));
                $('#Total_Reduction_in_ground_water_demand_Summer').text(parseFloat(total_reduction).toFixed(4));
                total_demand_any += total_reduction;
                summ_all_any();
                $('#TotalAnnual_Reduction_Other_measure').text(total_demand_any.toFixed(4));
                $('#total_crop_area_anyother').val(total_crop_area.toFixed(4));
                $('#total_area_proposed_anyother').val(total_area_proposed.toFixed(4));
            }
            GetFunding_anyother();
        }
    });
}

function Delete_data_any(idd) {
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
                    url: "/WSP_2024_25_update/Delete_data_any",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        alert(response);
                        //$('#SAVE_BTN2').prop('disabled', false)
                        Get_anyother_data();
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


function DropDown_get_Allany(food_for, food_type, ddl_bind, val_for_set) {

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


function Chack_Area_Proposed_any() {

    var total_area_proposed_other1 = parseFloat($('#total_crop_area_anyother').val()).toFixed(2);
    var area_proposed_sprinkler = parseFloat($('#area_proposed_anyother').val()).toFixed(2);
    var total_area_proposed_fund = parseFloat(area_proposed_sprinkler + area_proposed_for_fund_other).toFixed(2);
    var area_selected_innovative = parseFloat($("#area_selected_innovative").val()).toFixed(2);
    if (parseFloat(area_proposed_sprinkler) > parseFloat(area_selected_innovative)) {
        
        alert('Area Proposed for Any Other (ha) through above Possible Funding Source Should be less than Total Area Proposed for Selected Innovative measures (ha)');
        $('#area_proposed_anyother').val("");
        return false;
    }
    if (parseFloat(total_area_proposed_fund) > parseFloat(total_area_proposed_other1)) {
        
        alert('Area Proposed for Any Other (ha) through above Possible Funding Source Should be less than Total Area Proposed for Any Other (ha)');
        $('#area_proposed_anyother').val("");
        return false;
    }



}

function check_combo_any(ddl1, ddl2, ddl3, btn, checktbl, td1, td2) {

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

        //if (check_k == 1 && check_r == 1 && check_s == 1) {

        //    alert('Data Already Inserted If you want to add ,please delete first');
        //    $(button_).prop('disabled', true);
        //    //btn.hide();
        //    return;
        //}
        //else {
        //    $(button_).prop('disabled', false);
        //}
    } else {
        $(button_).prop('disabled', false);
        $(td_hide).hide();
        $(td_show).show();
    }
}

function summ_all_any() {

    var final = 0;
    var a = parseFloat($('#Total_Reduction_in_ground_water_demand_Kharif').text());
    var b = parseFloat($('#Total_Reduction_in_ground_water_demand_Rabi').text());
    var c = parseFloat($('#Total_Reduction_in_ground_water_demand_Summer').text());
    if (a != '') { final += a }
    if (b != '') { final += b }
    if (c != '') { final += c }
    $('#TotalAnnual_Reduction_Other_measure').text(final.toFixed(4));

}


function DropDownInnovative() {


    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/FetchDropDownInnovative",
        dataType: 'JSON',
        success: function (data) {

            var Arr = [];
            var ArrData = [];
            for (var i = 0; i < data.length; i++) {
                Arr.push(data[i].innovative_measures);
            }
            ArrData = removewithfilter(Arr)
            var slection_options = '';
            slection_options += '<option value="0">--Select Innovative measures-- </option>';
            ArrData.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });

            $(innovative_measures).html(slection_options);
            get_approved_status();
        }
    });
}

function removewithfilter(arr) {

    let outputArray = arr.filter(function (v, i, self) {

        // It returns the index of the first
        // instance of each value
        return i == self.indexOf(v);
    });

    return outputArray;
}
