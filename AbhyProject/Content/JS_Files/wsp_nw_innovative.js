$(document).ready(function(){
    Get_innovation_data();
});
var count_IM = 1;
function addrow_a_part_kharif_IM() {

    var code = '<tr><td><button class="btn btn-primary" onclick="Save_fund_IM(\'ddlcrop_int_pr' + count_IM + '\',\'ddlcrop_int_pr_sec' + count_IM + '\',\'ddlcrop_int_pr_th' + count_IM + '\',\'possible_funding_sprinkler_IM' + count_IM + '\',\'aprx_est_cost_sprinkler_IM' + count_IM + '\',\'aprx_fund_avail_sprinkler_IM' + count_IM + '\',\'gap_fund_sprinkler_IM' + count_IM + '\')">Save</button > </td>';
    code += '<td>' + count_IM + '</td>';    
    code += ' <td>  <select id="ddlcrop_int_pr' + count_IM + '" onchange="type1_change_any(\'ddlcrop_int_pr' + count_IM + '\',\'ddlcrop_int_pr_sec' + count_IM + '\')">';
    code += '   <option value = "0" selected> --Select--</option >';

    code += '       <option value="Demand-side interventions/line departments">Demand-side interventions/line departments</option>';
    code += '       <option value="Demand-side interventions/communities">Demand-side interventions/communities/Private Sector/NGO</option>';
    code += '<option value="Supply-side interventions">Supply-side interventions</option>';
    code += '      <option value="Water quality interventions">Water quality interventions</option></select > ';

    code += '<select id="ddlcrop_int_pr_sec' + count_IM + '" onchange="Fetch_dropdown_data_any(\'ddlcrop_int_pr_sec' + count_IM + '\',\'ddlcrop_int_pr_th' + count_IM + '\')" ><option value="0">--Select Crop--</option ></select >';
    code += '<select id="ddlcrop_int_pr_th' + count_IM + '"><option value="0">--Select Crop--</option ></select ></td>';
    code += '<td><input type="text"  id = "possible_funding_sprinkler_IM' + count_IM + '" oninput="enforceNumberValidation(this)" class="form-control alpha"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="aprx_est_cost_sprinkler_IM' + count_IM + '" oninput="minus_set(\'aprx_est_cost_sprinkler_IM' + count_IM + '\',\'aprx_fund_avail_sprinkler_IM' + count_IM + '\',\'gap_fund_sprinkler_IM' + count_IM + '\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="aprx_fund_avail_sprinkler_IM' + count_IM + '" oninput="minus_set(\'aprx_est_cost_sprinkler_IM' + count_IM + '\',\'aprx_fund_avail_sprinkler_IM' + count_IM + '\',\'gap_fund_sprinkler_IM' + count_IM + '\',this)" class="form-control decimal"></td>';
    code += '<td><input type="text" data-decimal="4" maxlength="10" id="gap_fund_sprinkler_IM' + count_IM + '" oninput="enforceNumberValidation(this)" class="form-control decimal" disabled></td></tr >';

    $('table#TblData_abc_part1_IM tbody').prepend(code);
    count_IM++;
}

function minus_set(val_1, val_2, val_Set, e) {
    enforceNumberValidation(e);
    
    var val_a= '#' + val_1 + '';
    var val_b = '#' + val_2 + '';
    var val_set_ = '#' + val_Set + '';
    var aa = $(val_a).val();
    var bb = $(val_b).val();
    if (aa != '' && bb != '') {

        $(val_set_).val(parseFloat(aa) - parseFloat(bb));
    }
    else {
        $(val_set_).val('0');
    }


}


function Save_fund_IM(ddlcrop_int_pr, ddlcrop_int_pr_sec, ddlcrop_int_pr_th, possible_funding_sprinkler_IM, aprx_est_cost_sprinkler_IM, aprx_fund_avail_sprinkler_IM, gap_fund_sprinkler_IM) {
    
    var ddlcrop_int_pr_val = '#' + ddlcrop_int_pr + '';
    var ddlcrop_int_pr_secv = '#' + ddlcrop_int_pr_sec + '';
    var ddlcrop_int_pr_th_val = '#' + ddlcrop_int_pr_th + '';
    var possible_funding_sprinkler_im_val = '#' + possible_funding_sprinkler_IM + '';
    var aprx_est_cost_sprinkler_im_val = '#' + aprx_est_cost_sprinkler_IM + '';
    var aprx_fund_avail_sprinkler_im_val = '#' + aprx_fund_avail_sprinkler_IM + '';
    var gap_fund_sprinkler_im_val = '#' + gap_fund_sprinkler_IM + '';


    var obj = {};
    obj.ddlcrop_int_pr = $(ddlcrop_int_pr_val).val();
    obj.ddlcrop_int_pr_sec = $(ddlcrop_int_pr_secv).val();
    obj.ddlcrop_int_pr_th = $(ddlcrop_int_pr_th_val).val();
    obj.possible_funding_sprinkler_im = $(possible_funding_sprinkler_im_val).val();
    obj.aprx_est_cost_sprinkler_im = $(aprx_est_cost_sprinkler_im_val).val();
    obj.aprx_fund_avail_sprinkler_im = $(aprx_fund_avail_sprinkler_im_val).val();
    obj.gap_fund_sprinkler_im = $(gap_fund_sprinkler_im_val).val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/wspDemandSide/saveInnovation",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Get_innovation_data();
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            $('#TblData_GRAM_PANCHAYAT_DATABASE_IM').html('');
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}


function Get_innovation_data() {
    var b = 0;
    var c = 0;
    var d = 0;
    var srl_Im = 1;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/wspDemandSide/Get_innovation_data",
        dataType: 'JSON',
        success: function (data) {
            $('#TblData_GRAM_PANCHAYAT_DATABASE_IM_show').html('');
            var code = '';
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {


                     code+= '<tr><td>' + srl_Im + '</td><td>' + data[i].ddlcrop_int_pr + '</td><td>' + data[i].ddlcrop_int_pr_sec + '</td><td>' + data[i].ddlcrop_int_pr_th + '</td><td>' + data[i].possible_funding_sprinkler_im + '</td>';
                    code += '<td>' + data[i].aprx_est_cost_sprinkler_im + '</td><td>' + data[i].aprx_fund_avail_sprinkler_im + '</td><td>' + data[i].gap_fund_sprinkler_im + '</td><td><button class="btn btn-primary" onclick="Delete_data_IN(\'' + data[i].id + '\')" >Delete</button > </td></tr>'

                  
                    srl_Im++;
                    b += parseFloat(data[i].aprx_est_cost_sprinkler_im);
                    c += parseFloat(data[i].aprx_fund_avail_sprinkler_im);
                    d += parseFloat(data[i].gap_fund_sprinkler_im);
                }
                code += '<tr><td>Total</td><td></td><td></td><td></td> <td></td><td><input type="text" value="' + b.toFixed(4) + '" disabled style="width:100%;"/></td><td><input type="text" value="' + c.toFixed(4) + '" disabled style="width:100%;"/></td><td><input type="text" value="' + d.toFixed(4) + '" disabled style="width:100%;"/></td></tr>'                
                $('table#TblData_abc_part1_IM_show tbody').append(code);
            }
        }
    });
}

function Delete_data_IN(idd) {
    var obj = {};
    obj.IDD = idd;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/wspDemandSide/Delete_data_IN",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            Get_innovation_data();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
//function Get_innovation_data() {
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/wspDemandSide/Get_innovation_data",
//        dataType: 'JSON',
//        success: function (data) {

//            if (data.length > 0) {
//                for (var i = 0; i < data.length; i++) {
//                    var code = '<tr><td><button class="btn btn-primary" onclick="Save_fund_IM(\'ddlcrop_int_pr' + count_IM + '\',\'ddlcrop_int_pr_sec' + count_IM + '\',\'ddlcrop_int_pr_th' + count_IM + '\',\'possible_funding_sprinkler_IM' + count_IM + '\',\'aprx_est_cost_sprinkler_IM' + count_IM + '\',\'aprx_fund_avail_sprinkler_IM' + count_IM + '\',\'gap_fund_sprinkler_IM' + count_IM + '\')">Save</button > </td>';
//                    code += '<td>' + (parseInt(i) + 1)+ '</td>';
//                    code += ' <td>  <select id="ddlcrop_int_pr' + count_IM + '" onchange="type1_change_any(\'ddlcrop_int_pr' + count_IM + '\',\'ddlcrop_int_pr_sec' + count_IM + '\')">';
//                    code += '   <option value = "0" selected> --Select--</option >';
//                    code += '<option value="Supply-side interventions">Supply-side interventions</option>';
//                    code += '       <option value="Demand-side interventions/line departments">Demand-side interventions/line departments</option>';
//                    code += '       <option value="Demand-side interventions/communities">Demand-side interventions/communities</option>';
//                    code += '      <option value="Water quality interventions">Water quality interventions</option></select > ';

//                    code += '<select id="ddlcrop_int_pr_sec' + count_IM + '" onchange="Fetch_dropdown_data_any(\'ddlcrop_int_pr_sec' + count_IM + '\',\'ddlcrop_int_pr_th' + count_IM + '\')" ><option value="0">--Select Crop--</option ></select >';
//                    code += '<select id="ddlcrop_int_pr_th' + count_IM + '"><option value="0">--Select Crop--</option ></select ></td>';
//                    code += '<td><input type="number" id = "possible_funding_sprinkler_IM' + count_IM + '"value="' + data[i].possible_funding_sprinkler_im + '"  oninput="Kharif_WaterRequire_drip(\'area_Kharif\',\'gross_khairf\',\'Pipeline_Kharif_Water_demand\',' + count_IM + ')"  class="form-control"></td>';
//                    code += '<td><input type="number" id="aprx_est_cost_sprinkler_IM' + count_IM + '"value="' + data[i].aprx_est_cost_sprinkler_im + '"  oninput="Kharif_WaterRequire_drip(\'area_Kharif\',\'gross_khairf\',\'Pipeline_Kharif_Water_demand\',' + count_IM + ')" class="form-control"></td>';
//                    code += '<td><input type="number" id="aprx_fund_avail_sprinkler_IM' + count_IM + '"value="' + data[i].aprx_fund_avail_sprinkler_im + '" oninput="Kharif_WaterRequire_drip(\'area_Kharif\',\'gross_khairf\',\'area_pr_kharif\',\'pipeline_kharif_total_pipeline_waterdemand\',' + count_IM + ',\'pipeline_kharif_total_reduction_waterdemand\',\'Pipeline_Kharif_Water_demand\')" class="form-control"></td>';
//                    code += '<td><input type="number" id="gap_fund_sprinkler_IM' + count_IM + '"value="' + data[i].gap_fund_sprinkler_im + '" oninput="khairfNetWater_INO(\'area_Kharif\',\'gross_khairf\',\'area_pr_kharif\',\'pipeline_kharif_total_pipeline_waterdemand\',' + count_IM + ',\'pipeline_kharif_total_reduction_waterdemand\',\'Pipeline_Kharif_Water_demand\')" class="form-control"></td></tr >';

//                    $('table#TblData_abc_part1_IM tbody').prepend(code);
//                }
//            }
//        }
//    });
//}


function type1_change_any(Getfrm,Bind) { 
    var option = '';
    var Bind1 = '#' + Bind;
    $(Bind1).html('');
    $(Bind1).prop('disabled', false);
    var data = '';

    var_chk_frm = '#' + Getfrm;


    var data_check = $(var_chk_frm).val();
    if (data_check != '0') {
        data = data_check;
    }
    //if (data == "") {
    //    $(var_chk_frm).prop('disabled', true);
    //    $("#ddlcrop3D_any").html('');
    //}

    if (data == "Supply-side interventions") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Water harvesting and artificial recharge">Water harvesting and artificial recharge</option>';
        option += '<option value="Surface water harvesting">Surface water harvesting</option>';
    }

    if (data == "Demand-side interventions/line departments") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Improved irrigation technologies">Improved irrigation technologies</option>';
        option += '<option value="Managing energy-irrigation nexus">Managing energy-irrigation nexus</option>';
        option += '<option value="Other DM interventions">Other DM interventions</option>';
    }
    if (data == "Demand-side interventions/communities") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Water-efficient technologies at community level">Water-efficient technologies at community level</option>';
        option += '<option value="Crop management and diversification">Crop management and diversification</option>';
        option += '<option value="Mainstreaming of Participatory Groundwater Management">Mainstreaming of Participatory Groundwater Management</option>';
    }
    if (data == "Water quality interventions") {
        option = ' <option value="0"> --select--  </option>';
        //option += '<option value="Improved groundwater quality">Improved groundwater quality</option>';
        //option += '<option value="Community-level groundwater quality monitoring">Community-level groundwater quality monitoring</option>';

    }

    $(Bind1).append(option);

}
function Fetch_dropdown_data_any(Getfrm, Bind) {
    
    var Bind1 = '#' + Bind;
    var getfrm = '#' + Getfrm;

    $(Bind1).prop('disabled', false);
    var option = '';
    $(Bind1).html('');
    var data = '';

    var data_check = $(getfrm).val();
    if (data_check != '0') {
        data = $(getfrm).val();
    }

    if (data == "") {
        $(Bind1).prop('disabled', true);
    }
    if (data == "Water harvesting and artificial recharge") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Water harvesting structures: Check dams">Water harvesting structures: Check dams</option>';
        option += '<option value="Percolation tanks and desilting tanks">Percolation tanks and desilting tanks</option>';
        option += '<option value="Recharge shafts/wells/trenches/bunds">Recharge shafts/wells/trenches/bunds</option>';
    }

    if (data == "Surface water harvesting") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Rooftop water harvesting structures">Rooftop water harvesting structures</option>';
        option += '<option value="Storm water harvesting structures">Storm water harvesting structures</option>';
        option += '<option value="Village water bodies and ponds (community)">Village water bodies and ponds (community)</option>';
        option += '<option value="Farm ponds/farm ditches (Private)">Farm ponds/farm ditches (Private)</option>';
    }
    if (data == "Managing energy-irrigation nexus") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Feeder separation">Feeder separation</option>';
        option += '<option value="Intelligent rationing of farm power supply">Intelligent rationing of farm power supply</option>';
        option += '<option value="Electricity metering">Electricity metering</option>';
        option += '<option value="Grid-connected solar pumps">Grid-connected solar pumps</option>';
    }
    if (data == "Other DM interventions") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Recycling and reuse of wastewater">Recycling and reuse of wastewater</option>';
        option += '<option value="Groundwater metering in target areas and/or for target users">Groundwater metering in target areas and/or for target users</option>';
        option += '<option value="Groundwater regulation in target areas and/or for target users">Groundwater regulation in target areas and/or for target users</option>';
        option += '<option value="Water quota licenses">Water quota licenses</option>';
    }
    if (data == "Water-efficient technologies at community level") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Land levelling">Land levelling</option>';
        option += '<option value="Mulching, vermi compost, and other field soil water conservation">Mulching, vermi compost, and other field soil water conservation</option>';
        option += '<option value="Climate-smart practices such as agro-forestry">Climate-smart practices such as agro-forestry</option>';

    }
    if (data == "Crop management and diversification") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Cultivation of low water-intensive crops">Cultivation of low water-intensive crops</option>';
        option += '<option value="Crop cultivation practices, for example, delayed sowing of monsoon paddy, alternate wetting and drying.">Crop cultivation practices, for example, delayed sowing of monsoon paddy, alternate wetting and drying.</option>';

    }
    if (data == "Mainstreaming of Participatory Groundwater Management") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Farmer field schools (FFS5)/IEC">Farmer field schools (FFS5)/IEC</option>';
        option += '<option value="User monitoring of groundwater data for water budgets">User monitoring of groundwater data for water budgets</option>';
        option += '<option value="Community self-governance and regulation (for example, water quotas)">Community self-governance and regulation (for example, water quotas)</option>';
        option += '<option value="Well spacing/community wells">Well spacing/community wells</option>';

    }

    if (data == "Water quality interventions") {
        option = ' <option value="0"> --select--  </option>';
        option += '<option value="Improved groundwater quality">Improved groundwater quality</option>';
        option += '<option value="Community-level groundwater quality monitoring">Community-level groundwater quality monitoring</option>';

    }


    $(Bind1).append(option);

}