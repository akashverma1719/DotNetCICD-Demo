var pip_agency_state_name = "";
var Statewise_Activity_wise_Year_wise_Expenditure_Report_State = "";
var Statewise_Activity_wise_Year_wise_Expenditure_Activity = "";
var Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year = "";
var State_wise_PIP_vs_Year_wise_Expenditure_States = "";
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State = "";
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode = "";
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year = "";
var Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year = "";
var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States = "";
var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity = "";
$(document).ready(function () {
    SessionInfo();

});
function SessionInfo() {
    $('#agency_state_dropdown_list').hide();
    $('#agency_state_dropdown_list_1').hide();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/State_SessionInfo',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (data == "Admin") {
                $('#agency_state_dropdown_list').show();
                $('#agency_state_dropdown_list_1').hide();
                State_Info();

                Activity_DropDown_Info();
                pip_agency_state_name = "ALL";
                Statewise_Activity_wise_Year_wise_Expenditure_Report_State = "ALL";
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State = "ALL";
                State_wise_PIP_vs_Year_wise_Expenditure_States = "ALL";
                State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States = "ALL";
                PROJECT_IMPLEMENTATION_PLAN();
                ANNUAL_WORK_PLAN();
                AWP_Planned_Component_Wise_Year_Wise();
                Item_codes_Info();
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
                Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
                State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();
                State_wise_PIP_vs_Year_wise_Expenditure_Details();
            }
            else {
                $('#agency_state_dropdown_list').hide();
                $('#agency_state_dropdown_list_1').show();


                $('#State_Name').text(data);
                Activity_DropDown_Info();
                pip_agency_state_name = data;
                Statewise_Activity_wise_Year_wise_Expenditure_Report_State = data;
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State = data;
                State_wise_PIP_vs_Year_wise_Expenditure_States = data;
                State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States = data;
                PROJECT_IMPLEMENTATION_PLAN();
                ANNUAL_WORK_PLAN();
                AWP_Planned_Component_Wise_Year_Wise();
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
                Item_codes_Info();
                Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
                State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();
                State_wise_PIP_vs_Year_wise_Expenditure_Details();
            }
        }

    });
}

function Item_codes_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PIP_Items_Info',
        data: {},
        dataType: 'JSON',
        success: function (data) {


            var slection_options = ' <option value="0"> Select Item  </option>';

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].pip_item_code != "") {
                        slection_options += '<option value="' + data[i].pip_item_code + '"> ' + data[i].pip_item_code + ' </option>';
                    }
                }
            }

            $('#Agency_item_code').html(slection_options);

        }

    });

}
function State_Info() {
    $("#PIP_Info_State").html("");
    const all_states = ["Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9"];

    var ddlst = {};
    var optionhtml = '';

    var StateArray = [];
    StateArray = all_states.sort(function (a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });
    optionhtml += '<option value="ALL">ALL</option>';
    optionhtml += '<option value="NPMU">NPMU</option>';
    for (var i = 0; i < StateArray.length; i++) {
        if (StateArray[i] != null && StateArray[i] != "") {
            optionhtml += '<option value="' + StateArray[i] + '">' + StateArray[i] + '</option>';
        }
    }
    $("#PIP_Info_State").html(optionhtml);

}
function Activity_DropDown_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Proc_DropDown_Info',
        data: {},
        dataType: 'JSON',
        success: function (data) {

            var slection_options = ' <option value="0"> Select Activity Name </option>';

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].activity_name != "") {
                        slection_options += '<option value="' + data[i].activity_name + '"> ' + data[i].activity_name + ' </option>';
                    }
                }
            }
            slection_options += '<option value="Other"> Other </option>';

            $('#Statewise_Activity_wise_Year_wise_Expenditure_Report_Activity').html(slection_options);
            $('#State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity').html(slection_options);

        }
    });
}

//--------- PROJECT IMPLEMENTATION PLAN (PIP) Table
var PIP_Tr = '';
var PIP_Val = 0;
var PIP_tbl_Head = '';

function PROJECT_IMPLEMENTATION_PLAN() {

    PIP_Val = 0;
    $('#myTable01').html("");
    PIP_Tr = '';
    PIP_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan="11" class="text-center">PROJECT IMPLEMENTATION PLAN (PIP)</th>' +
        '</tr><tr class="tableheader1"><th>S.No</th><th>State</th><th>Agency Name</th><th>Activity ID</th><th>Item Code</th>' +
        '<th>Activity Name </th><th>Total (in Crores)</th></tr></thead><tbody class="tablebaody">';
    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_form.length != 0) {

            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {

                if (pip_agency_state_name != "" && pip_agency_state_name != "ALL") {
                    var Total_val = 0;
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == 'NPMU') {
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years != null && Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years);
                        }
                    }
                    if (pip_agency_state_name == Full_Data.obj_abhy_mis_pip_form[i].state_name) {
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year1_20_21 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year1_20_21 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year1_20_21);
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year2_21_22 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year2_21_22 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year2_21_22);
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year3_22_23 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year3_22_23 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year3_22_23);
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year4_23_24 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year4_23_24 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year4_23_24);
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year5_24_25 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year5_24_25 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year5_24_25);
                        }


                        PIP_Val = PIP_Val + 1;
                        PIP_Tr += '<tr><td> ' + PIP_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + Total_val.toFixed(2) + '</td></tr>';
                    }
                }
                else {

                    var Total_val = 0;

                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == 'NPMU') {
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years != null && Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years);
                        }
                    }


                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year1_20_21 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year1_20_21 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year1_20_21);
                    }
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year2_21_22 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year2_21_22 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year2_21_22);
                    }
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year3_22_23 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year3_22_23 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year3_22_23);
                    }
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year4_23_24 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year4_23_24 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year4_23_24);
                    }
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year5_24_25 != null && Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year5_24_25 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_financial_year5_24_25);
                    }


                    PIP_Val = PIP_Val + 1;
                    PIP_Tr += '<tr><td> ' + PIP_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + Total_val.toFixed(2) + '</td></tr>';
                }

            }
        }

        if (Full_Data.obj_abhy_mis_pip_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {

                if (pip_agency_state_name != "" && pip_agency_state_name != "ALL") {

                    if (pip_agency_state_name == Full_Data.obj_abhy_mis_pip_b_form[i].state_name) {
                        var Total_val = 0;

                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year1_20_21 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year1_20_21 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year1_20_21);
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year2_21_22 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year2_21_22 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year2_21_22);
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year3_22_23 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year3_22_23 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year3_22_23);
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year4_23_24 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year4_23_24 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year4_23_24);
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year5_24_25 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year5_24_25 != "") {
                            Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year5_24_25);
                        }

                        PIP_Val = PIP_Val + 1;
                        PIP_Tr += '<tr><td> ' + PIP_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + Total_val.toFixed(2) + '</td></tr>';

                    }
                } else {
                    var Total_val = 0;

                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year1_20_21 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year1_20_21 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year1_20_21);
                    }
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year2_21_22 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year2_21_22 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year2_21_22);
                    }
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year3_22_23 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year3_22_23 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year3_22_23);
                    }
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year4_23_24 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year4_23_24 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year4_23_24);
                    }
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year5_24_25 != null && Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year5_24_25 != "") {
                        Total_val += parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_financial_year5_24_25);
                    }

                    PIP_Val = PIP_Val + 1;
                    PIP_Tr += '<tr><td> ' + PIP_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + Total_val.toFixed(2) + '</td></tr>';
                }

            }
        }
    }
    if (PIP_Tr == '') {
        PIP_Tr = '<tr style="text-align:center;"><td colspan="7">NO Data</td></tr>';
    }
    var Tbl = PIP_tbl_Head + PIP_Tr + "</tbody>";

    $('#myTable01').html(Tbl);
}


function PIP_StateWise_Info() {
    var PIP_Info_State = $('#PIP_Info_State').val();

    if (PIP_Info_State != "0") {
        PIP_Tr = '';
        pip_agency_state_name = PIP_Info_State;
        PIP_Val = 0;
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State = PIP_Info_State;
        Statewise_Activity_wise_Year_wise_Expenditure_Report_State = PIP_Info_State;
        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States = PIP_Info_State;
        State_wise_PIP_vs_Year_wise_Expenditure_States = PIP_Info_State;
        AWP_Planned_Component_Wise_Year_Wise();
        ANNUAL_WORK_PLAN();
        PROJECT_IMPLEMENTATION_PLAN();
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
        Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();
        State_wise_PIP_vs_Year_wise_Expenditure_Details();
    } else {
        alert("Please Select StateName");
    }
}
//---------END  PROJECT IMPLEMENTATION PLAN (PIP) Table

// --------------ANNUAL WORK PLAN (AWP) Table------
var AWP_Fin_Year = "";
var AWP_TBL_Head = '';
var AWP_Info_Tr = '';
var AWP_Info_Tr_Sno = 0;


function ANNUAL_WORK_PLAN() {

    $('#myTable02').html("");
    AWP_TBL_Head = '';
    AWP_Info_Tr = '';
    AWP_Info_Tr_Sno = 0;

    AWP_TBL_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan="11" class="text-center">ANNUAL WORK PLAN (AWP) <span>Selecting year</span></th></tr>' +
        '<tr class="tableheader1"><th>S.No</th><th>State</th><th>Agency Name</th><th>Item Code</th><th>Activity Name </th>' +
        '<th>QTY (Physical)</th><th>Total (in Crores)</th><th>Exp Method</th><th>Status</th><th>Agency Remarks</th></tr>' +
        '</thead><tbody class="tablebaody">';


    if (Full_Data != null) {
        if (Full_Data.obj_abhy_mis_awp_form.length != 0) {

            for (var i = 0; i < Full_Data.obj_abhy_mis_awp_form.length; i++) {

                if (Full_Data.obj_abhy_mis_awp_form[i].state_name != "null" && Full_Data.obj_abhy_mis_awp_form[i].state_name != "undefined" && Full_Data.obj_abhy_mis_awp_form[i].state_name != null && Full_Data.obj_abhy_mis_awp_form[i].state_name != "") {

                    if (AWP_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {

                        var awp_total = 0;
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != "") {
                            awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21);
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                        }
                        var awp_total_physcical = 0;
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != "") {
                            awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21);
                            if (isNaN(awp_total_physcical)) {
                                awp_total_physcical = 0;
                            }
                        }

                        AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                        AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                            '<td></td></tr>';

                    }
                    else if (AWP_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "") {

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_form[i].state_name) {
                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != "") {
                                awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21);
                                if (isNaN(awp_total)) {
                                    awp_total = 0;
                                }
                            }
                            var awp_total_physcical = 0;
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != "") {
                                awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21);
                                if (isNaN(awp_total_physcical)) {
                                    awp_total_physcical = 0;
                                }
                            }

                            AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                            AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_item_code + '</td>' +
                                '<td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                                '<td></td></tr>';
                        }
                    }
                    else {

                        if (AWP_Fin_Year != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_fin_year == AWP_Fin_Year) {
                                var awp_total = 0;
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != "") {
                                    awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21);
                                    if (isNaN(awp_total)) {
                                        awp_total = 0;
                                    }
                                }
                                var awp_total_physcical = 0;
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != "") {
                                    awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21);
                                    if (isNaN(awp_total_physcical)) {
                                        awp_total_physcical = 0;
                                    }
                                }

                                AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                                AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_item_code + '</td>' +
                                    '<td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                                    '<td></td></tr>';
                            }

                        } else {
                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_form[i].state_name && Full_Data.obj_abhy_mis_awp_form[i].awp_fin_year == AWP_Fin_Year) {
                                var awp_total = 0;
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21 != "") {
                                    awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_financial_year_20_21);
                                    if (isNaN(awp_total)) {
                                        awp_total = 0;
                                    }
                                }
                                var awp_total_physcical = 0;
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21 != "") {
                                    awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_form[i].awp_physical_year_20_21);
                                    if (isNaN(awp_total_physcical)) {
                                        awp_total_physcical = 0;
                                    }
                                }

                                AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                                AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_item_code + '</td>' +
                                    '<td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                                    '<td></td></tr>';
                            }

                        }

                    }

                }
            }
        }

        if (Full_Data.obj_abhy_mis_awp_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_awp_b_form.length; i++) {

                if (Full_Data.obj_abhy_mis_awp_b_form[i].state_name != "null" && Full_Data.obj_abhy_mis_awp_b_form[i].state_name != "undefined" && Full_Data.obj_abhy_mis_awp_b_form[i].state_name != null && Full_Data.obj_abhy_mis_awp_b_form[i].state_name != "") {

                    if (AWP_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {
                        var awp_total = 0;
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != "") {
                            awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21);
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                        }
                        var awp_total_physcical = 0;
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != "") {

                            awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21);
                            if (isNaN(awp_total_physcical)) {
                                awp_total_physcical = 0;
                            }

                        }
                        AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                        AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                            '<td></td></tr>';
                    }
                    else if (AWP_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "") {

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_b_form[i].state_name) {
                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != "") {
                                awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21);
                                if (isNaN(awp_total)) {
                                    awp_total = 0;
                                }
                            }
                            var awp_total_physcical = 0;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != "") {
                                awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21);
                                if (isNaN(awp_total_physcical)) {
                                    awp_total_physcical = 0;
                                }
                            }
                            AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                            AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_item_code + '</td>' +
                                '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                                '<td></td></tr>';
                        }
                    }
                    else {
                        if (AWP_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {
                            if (AWP_Fin_Year == Full_Data.obj_abhy_mis_awp_b_form[i].awp_fin_year) {
                                var awp_total = 0;
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != "") {
                                    awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21);
                                    if (isNaN(awp_total)) {
                                        awp_total = 0;
                                    }
                                }
                                var awp_total_physcical = 0;
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != "") {
                                    awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21);
                                    if (isNaN(awp_total_physcical)) {
                                        awp_total_physcical = 0;
                                    }
                                }
                                AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                                AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_item_code + '</td>' +
                                    '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                                    '<td></td></tr>';
                            }

                        }
                        else {
                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_b_form[i].state_name && AWP_Fin_Year == Full_Data.obj_abhy_mis_awp_b_form[i].awp_fin_year) {
                                var awp_total = 0;
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21 != "") {
                                    awp_total = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_financial_year_20_21);
                                    if (isNaN(awp_total)) {
                                        awp_total = 0;
                                    }
                                }
                                var awp_total_physcical = 0;
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21 != "") {
                                    awp_total_physcical = parseFloat(Full_Data.obj_abhy_mis_awp_b_form[i].awp_physical_year_20_21);
                                    if (isNaN(awp_total_physcical)) {
                                        awp_total_physcical = 0;
                                    }
                                }
                                AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                                AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_item_code + '</td>' +
                                    '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                                    '<td></td></tr>';
                            }

                        }
                    }
                }



            }

        }
        if (AWP_Info_Tr == '') {
            AWP_Info_Tr = '<tr style="text-align:center;"><td colspan="10">NO Data</td></tr>';
        }

        var Tbl = AWP_TBL_Head + AWP_Info_Tr + "</tbody>";
        $('#myTable02').html(Tbl);

    }
}


function AWP_Year_Wise_Info() {
    var AWP_Financial_Year = $('#AWP_Financial_Year').val();
    if (AWP_Financial_Year != "0") {
        AWP_Fin_Year = AWP_Financial_Year;
        AWP_Info_Tr_Sno = 0;
        ANNUAL_WORK_PLAN();


    } else {
        alert("Please Select Financial Year");
    }
}
// ---------END-----ANNUAL WORK PLAN (AWP) Table------

// ---AWP Planned Component Wise Year Wise Table------------


var AWP_Planned_Fin_Year = "";
var AWP__Planned_TBL_Head = '';
var AWP__Planned_Info_Tr = '';
var AWP_Info__Planned_Tr_Sno = 0;


function AWP_Planned_Component_Wise_Year_Wise() {

    $('#myTable03').html("");
    AWP__Planned_TBL_Head = '';
    AWP__Planned_Info_Tr = '';
    AWP_Info__Planned_Tr_Sno = 0;

    AWP__Planned_TBL_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan="11" class="text-center">AWP Planned Component Wise Year Wise <span>Selecting year</span></th>' +
        '</tr><tr class="tableheader1"><th colspan="11" class="text-right">(INR in Crores)</th></tr><tr class="tableheader1">' +
        '<th>S.No</th><th>State</th><th>Agency Name</th><th>Support Services</th><th>Goods</th><th>Works</th><th>Training/IEC/OE</th><th>QTY(Physical)</th><th>Total</th>' +
        '</tr> </thead><tbody>';
    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_awp_form.length != 0) {

            for (var i = 0; i < Full_Data.obj_abhy_mis_awp_form.length; i++) {
                if (Full_Data.obj_abhy_mis_awp_form[i].state_name != "null" && Full_Data.obj_abhy_mis_awp_form[i].state_name != "undefined" && Full_Data.obj_abhy_mis_awp_form[i].state_name != null && Full_Data.obj_abhy_mis_awp_form[i].state_name != "") {

                    if (AWP_Planned_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {

                        var awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                        if (isNaN(awp_total)) {
                            awp_total = 0;
                        }
                        if (awp_total != null && awp_total != "null" && awp_total != "") {

                        } else {
                            awp_total = "";
                        }
                        AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Support Service") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                        }
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Goods") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                        }
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Works") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                '<td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                        }
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Training/ IEC/OE") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td?</tr>';
                        }

                    }
                    else if (AWP_Planned_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "") {

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_form[i].state_name) {
                            var awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total != null && awp_total != "null" && awp_total != "") {

                            } else {
                                awp_total = "";
                            }
                            AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Support Service") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                    '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Goods") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                    '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Works") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Training/ IEC/OE") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td?</tr>';
                            }
                        }
                    }
                    else {

                        if (AWP_Planned_Fin_Year != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_fin_year == AWP_Planned_Fin_Year) {
                                var awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                                if (isNaN(awp_total)) {
                                    awp_total = 0;
                                }
                                if (awp_total != null && awp_total != "null" && awp_total != "") {

                                } else {
                                    awp_total = "";
                                }
                                AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Support Service") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                        '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Goods") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                        '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Works") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Training/ IEC/OE") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td?</tr>';
                                }
                            }

                        }
                        else {
                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_form[i].state_name && Full_Data.obj_abhy_mis_awp_form[i].awp_fin_year == AWP_Planned_Fin_Year) {
                                var awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                                if (isNaN(awp_total)) {
                                    awp_total = 0;
                                }
                                if (awp_total != null && awp_total != "null" && awp_total != "") {

                                } else {
                                    awp_total = "";
                                }
                                AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Support Service") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                        '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Goods") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td>' +
                                        '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Works") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_form[i].awp_category == "Training/ IEC/OE") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td?</tr>';
                                }
                            }

                        }
                    }
                }

            }
        }

        if (Full_Data.obj_abhy_mis_awp_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_awp_b_form.length; i++) {

                if (Full_Data.obj_abhy_mis_awp_b_form[i].state_name != "null" && Full_Data.obj_abhy_mis_awp_b_form[i].state_name != "undefined" && Full_Data.obj_abhy_mis_awp_b_form[i].state_name != null && Full_Data.obj_abhy_mis_awp_b_form[i].state_name != "") {

                    if (AWP_Planned_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {
                        var awp_total = Full_Data.obj_abhy_mis_awp_b_form[i].awp_total;
                        if (isNaN(awp_total)) {
                            awp_total = 0;
                        }
                        if (awp_total != null && awp_total != "null" && awp_total != "") {

                        } else {
                            awp_total = "";
                        }
                        AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Support Service") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td>' +
                                '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                        }
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Goods") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                        }
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Works") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                '<td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                        }
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Training/ IEC/OE") {
                            AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td></tr>';
                        }
                    }
                    else if (AWP_Planned_Fin_Year == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "") {

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_b_form[i].state_name) {
                            var awp_total = Full_Data.obj_abhy_mis_awp_b_form[i].awp_total;
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total != null && awp_total != "null" && awp_total != "") {

                            } else {
                                awp_total = "";
                            }
                            AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Support Service") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td>' +
                                    '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Goods") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Works") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Training/ IEC/OE") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td></tr>';
                            }
                        }
                    }
                    else {
                        if (AWP_Planned_Fin_Year != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" || State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "") {
                            if (AWP_Planned_Fin_Year == Full_Data.obj_abhy_mis_awp_b_form[i].awp_fin_year) {
                                var awp_total = Full_Data.obj_abhy_mis_awp_b_form[i].awp_total;
                                if (isNaN(awp_total)) {
                                    awp_total = 0;
                                }
                                if (isNaN(awp_total)) {
                                    awp_total = 0;
                                }
                                if (awp_total != null && awp_total != "null" && awp_total != "") {

                                } else {
                                    awp_total = "";
                                }
                                AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Support Service") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td>' +
                                        '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Goods") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Works") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                                }
                                if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Training/ IEC/OE") {
                                    AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                        '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td></tr>';
                                }
                            }
                        } else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_awp_b_form[i].state_name && AWP_Planned_Fin_Year == Full_Data.obj_abhy_mis_awp_b_form[i].awp_fin_year) {
                            var awp_total = Full_Data.obj_abhy_mis_awp_b_form[i].awp_total;
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total != null && awp_total != "null" && awp_total != "") {

                            } else {
                                awp_total = "";
                            }
                            AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Support Service") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td>' +
                                    '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Goods") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Works") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                            }
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_category == "Training/ IEC/OE") {
                                AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].state_name + '</td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_agency_name + '</td><td></td>' +
                                    '<td></td><td></td><td>' + Full_Data.obj_abhy_mis_awp_b_form[i].awp_category + '</td><td>' + awp_total + '</td><td></td></tr>';
                            }

                        }
                    }
                }



            }

        }
        if (AWP__Planned_Info_Tr == '') {
            AWP__Planned_Info_Tr = '<tr style="text-align:center;"><td colspan="9">NO Data</td></tr>';
        }

        var Tbl = AWP__Planned_TBL_Head + AWP__Planned_Info_Tr + "</tbody>";
        $('#myTable03').html(Tbl);

    }
}

function AWP__Planned_Financial_Year() {
    var AWP__Planned_Financial_Year = $('#AWP__Planned_Financial_Year').val();

    if (AWP__Planned_Financial_Year != "0") {
        AWP_Planned_Fin_Year = AWP__Planned_Financial_Year;
        AWP_Info__Planned_Tr_Sno = 0;
        AWP_Planned_Component_Wise_Year_Wise();

    } else {
        alert("Please Select Financial Year");
    }
}


// ----------- END--------AWP Planned Component Wise Year Wise Table------------



//-----------State wise - PIP Item Wise Year Wise Expenditure Report Table--




var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr = '';
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = 0;
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_tbl_Head = '';



var Total_Expenditure = 0;
var pip_financial_year1_20_21 = 0;
var pip_financial_year1_21_22 = 0;
var pip_financial_year1_22_23 = 0;
var pip_financial_year1_23_24 = 0;
var pip_financial_year1_24_25 = 0;
function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details() {
    Total_Expenditure = 0;
    pip_financial_year1_20_21 = 0;
    pip_financial_year1_21_22 = 0;
    pip_financial_year1_22_23 = 0;
    pip_financial_year1_23_24 = 0;
    pip_financial_year1_24_25 = 0;
    $('#pip_state_wise_alert_data').hide();
    $('#myTable04').html("");
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = 0;
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr = '';
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1">' +
        '<th colspan = "13" class="text-center" > State wise - PIP Item Wise Year Wise Expenditure Report</th> </tr>' +
        '<tr class="tableheader1"><th rowspan="2">S.No</th><th rowspan="2">State</th><th rowspan="2">Item Code</th><th rowspan="2">Item Name</th><th rowspan="2">QTY (Physical)</th>' +
        '<th rowspan="2">PIP Amount</th><th colspan="5" class="text-center">Expenditures</th><th rowspan="2">Total Expenditures</th>' +
        '</tr><tr class="tableheader1"> <th>FY 2020-2021</th><th>FY 2021-2022</th><th>FY 2022-2023</th><th>FY 2023-2024</th><th>FY 2024-2025</th>' +
        '</tr></thead><tbody class="tablebaody">';

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_form.length != 0) {

            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;
                    var pip_physical_QTY = 0;
                    var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {
                    } else {
                        pip_total = "";
                    }

                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                    }
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                    if (Total_Expenditure == 0) {
                        Total_Expenditure = "";
                    } else {
                        Total_Expenditure = Total_Expenditure.toFixed(2)
                    }

                    if (pip_financial_year1_20_21 == 0) {
                        pip_financial_year1_20_21 = "";
                    } else {
                        pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                    }
                    if (pip_financial_year1_21_22 == 0) {
                        pip_financial_year1_21_22 = "";
                    } else {
                        pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                    }
                    if (pip_financial_year1_22_23 == 0) {
                        pip_financial_year1_22_23 = "";
                    } else {
                        pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                    }
                    if (pip_financial_year1_23_24 == 0) {
                        pip_financial_year1_23_24 = "";
                    } else {
                        pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                    }
                    if (pip_financial_year1_24_25 == 0) {
                        pip_financial_year1_24_25 = "";
                    } else {
                        pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                    }

                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = 0;
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = 0;
                    }
                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = 0;
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = 0;
                    }
                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = 0;
                    }
                    if (Total_Expenditure == "") {
                        Total_Expenditure = 0;
                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;
                        var pip_physical_QTY = 0;
                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {
                        } else {
                            pip_total = "";
                        }

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;
                    var pip_physical_QTY = 0;
                    var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {
                    } else {
                        pip_total = "";
                    }

                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                    }
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                    if (Total_Expenditure == 0) {
                        Total_Expenditure = "";
                    } else {
                        Total_Expenditure = Total_Expenditure.toFixed(2)
                    }

                    if (pip_financial_year1_20_21 == 0) {
                        pip_financial_year1_20_21 = "";
                    } else {
                        pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                    }
                    if (pip_financial_year1_21_22 == 0) {
                        pip_financial_year1_21_22 = "";
                    } else {
                        pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                    }
                    if (pip_financial_year1_22_23 == 0) {
                        pip_financial_year1_22_23 = "";
                    } else {
                        pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                    }
                    if (pip_financial_year1_23_24 == 0) {
                        pip_financial_year1_23_24 = "";
                    } else {
                        pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                    }
                    if (pip_financial_year1_24_25 == 0) {
                        pip_financial_year1_24_25 = "";
                    } else {
                        pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                    }

                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = 0;
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = 0;
                    }
                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = 0;
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = 0;
                    }
                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = 0;
                    }
                    if (Total_Expenditure == "") {
                        Total_Expenditure = 0;
                    }
                }



            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;
                        var pip_physical_QTY = 0;
                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {
                        } else {
                            pip_total = "";
                        }

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;


                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }

                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }


                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State && Full_Data.obj_abhy_mis_pip_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;


                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }


                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }


                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';


                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }

                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        var pip_physical_QTY = 0;


                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }

                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }



                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {

                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State && Full_Data.obj_abhy_mis_pip_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {



                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;


                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }


                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }
            }
        }
    }
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_B_Details();

}

function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_B_Details() {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_b_form.length != 0) {

            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                    var pip_physical_QTY = 0;


                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                    }


                    var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }

                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                    if (Total_Expenditure == 0) {
                        Total_Expenditure = "";
                    } else {
                        Total_Expenditure = Total_Expenditure.toFixed(2)
                    }

                    if (pip_financial_year1_20_21 == 0) {
                        pip_financial_year1_20_21 = "";
                    } else {
                        pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                    }
                    if (pip_financial_year1_21_22 == 0) {
                        pip_financial_year1_21_22 = "";
                    } else {
                        pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                    }
                    if (pip_financial_year1_22_23 == 0) {
                        pip_financial_year1_22_23 = "";
                    } else {
                        pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                    }
                    if (pip_financial_year1_23_24 == 0) {
                        pip_financial_year1_23_24 = "";
                    } else {
                        pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                    }
                    if (pip_financial_year1_24_25 == 0) {
                        pip_financial_year1_24_25 = "";
                    } else {
                        pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                    }

                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = 0;
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = 0;
                    }
                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = 0;
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = 0;
                    }
                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = 0;
                    }
                    if (Total_Expenditure == "") {
                        Total_Expenditure = 0;
                    }

                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;


                    var pip_physical_QTY = 0;
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                    }
                    var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                    if (Total_Expenditure == 0) {
                        Total_Expenditure = "";
                    } else {
                        Total_Expenditure = Total_Expenditure.toFixed(2)
                    }

                    if (pip_financial_year1_20_21 == 0) {
                        pip_financial_year1_20_21 = "";
                    } else {
                        pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                    }
                    if (pip_financial_year1_21_22 == 0) {
                        pip_financial_year1_21_22 = "";
                    } else {
                        pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                    }
                    if (pip_financial_year1_22_23 == 0) {
                        pip_financial_year1_22_23 = "";
                    } else {
                        pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                    }
                    if (pip_financial_year1_23_24 == 0) {
                        pip_financial_year1_23_24 = "";
                    } else {
                        pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                    }
                    if (pip_financial_year1_24_25 == 0) {
                        pip_financial_year1_24_25 = "";
                    } else {
                        pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                    }
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = 0;
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = 0;
                    }
                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = 0;
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = 0;
                    }
                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = 0;
                    }
                    if (Total_Expenditure == "") {
                        Total_Expenditure = 0;
                    }
                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;


                        var pip_physical_QTY = 0;
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }

                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;


                        var pip_physical_QTY = 0;
                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {



                            if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                                pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                            }

                        }
                        else {

                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2020-21") {

                                if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                                    pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                                }
                            }
                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2021-22") {

                                if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                                    pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                                }
                            }
                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2022-23") {

                                if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                                    pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                                }
                            }

                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2023-24") {

                                if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                                    pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                                }

                            }
                            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2024-25") {

                                if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                                    pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                                }
                            }

                        }

                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State && Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;


                        var pip_physical_QTY = 0;
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;


                        var pip_physical_QTY = 0;
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);

                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }

                    }
                }
            }

            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {

                for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State && Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (Total_Expenditure == 0) {
                            Total_Expenditure = "";
                        } else {
                            Total_Expenditure = Total_Expenditure.toFixed(2)
                        }

                        if (pip_financial_year1_20_21 == 0) {
                            pip_financial_year1_20_21 = "";
                        } else {
                            pip_financial_year1_20_21 = pip_financial_year1_20_21.toFixed(2)
                        }
                        if (pip_financial_year1_21_22 == 0) {
                            pip_financial_year1_21_22 = "";
                        } else {
                            pip_financial_year1_21_22 = pip_financial_year1_21_22.toFixed(2)
                        }
                        if (pip_financial_year1_22_23 == 0) {
                            pip_financial_year1_22_23 = "";
                        } else {
                            pip_financial_year1_22_23 = pip_financial_year1_22_23.toFixed(2)
                        }
                        if (pip_financial_year1_23_24 == 0) {
                            pip_financial_year1_23_24 = "";
                        } else {
                            pip_financial_year1_23_24 = pip_financial_year1_23_24.toFixed(2)
                        }
                        if (pip_financial_year1_24_25 == 0) {
                            pip_financial_year1_24_25 = "";
                        } else {
                            pip_financial_year1_24_25 = pip_financial_year1_24_25.toFixed(2)
                        }


                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = 0;
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = 0;
                        }
                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = 0;
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = 0;
                        }
                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = 0;
                        }
                        if (Total_Expenditure == "") {
                            Total_Expenditure = 0;
                        }
                    }
                }
            }
        }
    }


    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr == '') {
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr = '<tr style="text-align:center;"><td colspan="13">NO Data</td></tr>';
    }
    var Tbl = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_tbl_Head + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr + "</tbody>";

    $('#myTable04').html(Tbl);


}

function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info(State, WorkActivity) {

    Total_Expenditure = 0;
    pip_financial_year1_20_21 = 0;
    pip_financial_year1_21_22 = 0;
    pip_financial_year1_22_23 = 0;
    pip_financial_year1_23_24 = 0;
    pip_financial_year1_24_25 = 0;

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_insertdata.length != 0) {

            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                    }


                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                        }

                    }


                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {

                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                    }

                }


            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                        }

                    }


                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                        }

                    }


                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State && Full_Data.obj_abhy_financialprogress_insertdata[i].item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                        }

                    }

                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {
                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {

                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                    }

                }


            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State && Full_Data.obj_abhy_financialprogress_insertdata[i].item_code == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode) {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);


                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                        }

                    }


                }
            }
        }
    }

}


function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_b_insertdata.length != 0) {

            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {


                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {

                    if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }
                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                    if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }

                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                    if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }

                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State == "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {


                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                    if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }

                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }

                        }

                    }
                }

            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                    if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }

                        }

                    }
                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode == "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {

                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                    if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }

                }
            }
            else if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State != "ALL" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "" && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "") {


                for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {

                    if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name == State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State) {

                        if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name && State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }

                        }

                    }
                }
            }
        }
    }




}



function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode_dropdown() {
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode = $('#Agency_item_code').val();
    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "0") {

        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
    } else {
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode = "";
        alert("Please Select Item Code");
    }
}

function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_ReportYear_Wise_Info() {
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year = $('#State_wise_PIP_Item_Wise_Year_Wise_Expenditure_ReportYear_Financial_Year').val();
    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "0") {

        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
    } else {
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year = "";
        alert("Please Select Financial Year");
    }
}

//-------------END State wise - PIP Item Wise Year Wise Expenditure Report Table---




//-----------Statewise - Activity wise Year wise Expenditure Report Table----------



var Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr = '';
var Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = 0;
var Statewise_Activity_wise_Year_wise_Expenditure_Report_tbl_Head = '';


var SAWYE_Total_Expenditure = 0;
var SAWYE_pip_financial_year1_20_21 = 0;
var SAWYE_pip_financial_year1_21_22 = 0;
var SAWYE_pip_financial_year1_22_23 = 0;
var SAWYE_pip_financial_year1_23_24 = 0;
var SAWYE_pip_financial_year1_24_25 = 0;

function Statewise_Activity_wise_Year_wise_Expenditure_Report_Details() {

    SAWYE_Total_Expenditure = 0;
    SAWYE_pip_financial_year1_20_21 = 0;
    SAWYE_pip_financial_year1_21_22 = 0;
    SAWYE_pip_financial_year1_22_23 = 0;
    SAWYE_pip_financial_year1_23_24 = 0;
    SAWYE_pip_financial_year1_24_25 = 0;

    $('#activity_state_wise_alert_data').hide();
    $('#myTable05').html("");
    Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = 0;
    Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr = '';
    Statewise_Activity_wise_Year_wise_Expenditure_Report_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan ="12" class="text-center"> Statewise - Activity wise Year wise Expenditure Report</th>' +
        '</tr><tr class="tableheader1"><th rowspan="2">S.No</th><th rowspan="2">State</th><th rowspan="2">Item Code</th>' +
        '<th rowspan="2">Activity Name</th><th rowspan="2">QTY (Physical)</th><th rowspan="2">PIP Amount</th><th colspan="5" class="text-center">Expenditures</th> <th rowspan="2">Total Expenditures</th>' +
        '</tr><tr class="tableheader1"><th>FY 2020-2021</th><th>FY 2021-2022</th> <th>FY 2022-2023</th><th>FY 2023-2024</th><th>FY 2024-2025</th></tr></thead><tbody class="tablebaody">';
    
    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_form.length != 0) {


            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {


                if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "") {
                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                    var pip_physical_QTY = 0;

                    var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                    }

                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                    if (SAWYE_Total_Expenditure == 0) {
                        SAWYE_Total_Expenditure = "";
                    } else {
                        SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                    }

                    if (SAWYE_pip_financial_year1_20_21 == 0) {
                        SAWYE_pip_financial_year1_20_21 = "";
                    } else {
                        SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_21_22 == 0) {
                        SAWYE_pip_financial_year1_21_22 = "";
                    } else {
                        SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_22_23 == 0) {
                        SAWYE_pip_financial_year1_22_23 = "";
                    } else {
                        SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_23_24 == 0) {
                        SAWYE_pip_financial_year1_23_24 = "";
                    } else {
                        SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_24_25 == 0) {
                        SAWYE_pip_financial_year1_24_25 = "";
                    } else {
                        SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                    }

                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td>' + SAWYE_pip_financial_year1_21_22 + '</td>' +
                        '<td>' + SAWYE_pip_financial_year1_22_23 + '</td><td>' + SAWYE_pip_financial_year1_23_24 + '</td><td>' + SAWYE_pip_financial_year1_24_25 + '</td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                    SAWYE_Total_Expenditure = 0;
                    SAWYE_pip_financial_year1_20_21 = 0;
                    SAWYE_pip_financial_year1_21_22 = 0;
                    SAWYE_pip_financial_year1_22_23 = 0;
                    SAWYE_pip_financial_year1_23_24 = 0;
                    SAWYE_pip_financial_year1_24_25 = 0;


                }
                else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "") {

                    if (Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;

                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (SAWYE_Total_Expenditure == 0) {
                            SAWYE_Total_Expenditure = "";
                        } else {
                            SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                        }

                        if (SAWYE_pip_financial_year1_20_21 == 0) {
                            SAWYE_pip_financial_year1_20_21 = "";
                        } else {
                            SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_21_22 == 0) {
                            SAWYE_pip_financial_year1_21_22 = "";
                        } else {
                            SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_22_23 == 0) {
                            SAWYE_pip_financial_year1_22_23 = "";
                        } else {
                            SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_23_24 == 0) {
                            SAWYE_pip_financial_year1_23_24 = "";
                        } else {
                            SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_24_25 == 0) {
                            SAWYE_pip_financial_year1_24_25 = "";
                        } else {
                            SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td>' + SAWYE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + SAWYE_pip_financial_year1_22_23 + '</td><td>' + SAWYE_pip_financial_year1_23_24 + '</td><td>' + SAWYE_pip_financial_year1_24_25 + '</td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';
                        SAWYE_Total_Expenditure = 0;
                        SAWYE_pip_financial_year1_20_21 = 0;
                        SAWYE_pip_financial_year1_21_22 = 0;
                        SAWYE_pip_financial_year1_22_23 = 0;
                        SAWYE_pip_financial_year1_23_24 = 0;
                        SAWYE_pip_financial_year1_24_25 = 0;

                    }
                }
                else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "") {
                    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_pip_form[i].state_name) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;

                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (SAWYE_Total_Expenditure == 0) {
                            SAWYE_Total_Expenditure = "";
                        } else {
                            SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                        }

                        if (SAWYE_pip_financial_year1_20_21 == 0) {
                            SAWYE_pip_financial_year1_20_21 = "";
                        } else {
                            SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_21_22 == 0) {
                            SAWYE_pip_financial_year1_21_22 = "";
                        } else {
                            SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_22_23 == 0) {
                            SAWYE_pip_financial_year1_22_23 = "";
                        } else {
                            SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_23_24 == 0) {
                            SAWYE_pip_financial_year1_23_24 = "";
                        } else {
                            SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_24_25 == 0) {
                            SAWYE_pip_financial_year1_24_25 = "";
                        } else {
                            SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td>' + SAWYE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + SAWYE_pip_financial_year1_22_23 + '</td><td>' + SAWYE_pip_financial_year1_23_24 + '</td><td>' + SAWYE_pip_financial_year1_24_25 + '</td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                        SAWYE_Total_Expenditure = 0;
                        SAWYE_pip_financial_year1_20_21 = 0;
                        SAWYE_pip_financial_year1_21_22 = 0;
                        SAWYE_pip_financial_year1_22_23 = 0;
                        SAWYE_pip_financial_year1_23_24 = 0;
                        SAWYE_pip_financial_year1_24_25 = 0;

                    }

                }
                else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "") {
                    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_pip_form[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        var pip_physical_QTY = 0;

                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);
                        if (SAWYE_Total_Expenditure == 0) {
                            SAWYE_Total_Expenditure = "";
                        } else {
                            SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                        }

                        if (SAWYE_pip_financial_year1_20_21 == 0) {
                            SAWYE_pip_financial_year1_20_21 = "";
                        } else {
                            SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_21_22 == 0) {
                            SAWYE_pip_financial_year1_21_22 = "";
                        } else {
                            SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_22_23 == 0) {
                            SAWYE_pip_financial_year1_22_23 = "";
                        } else {
                            SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_23_24 == 0) {
                            SAWYE_pip_financial_year1_23_24 = "";
                        } else {
                            SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_24_25 == 0) {
                            SAWYE_pip_financial_year1_24_25 = "";
                        } else {
                            SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td>' + SAWYE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + SAWYE_pip_financial_year1_22_23 + '</td><td>' + SAWYE_pip_financial_year1_23_24 + '</td><td>' + SAWYE_pip_financial_year1_24_25 + '</td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                        SAWYE_Total_Expenditure = 0;
                        SAWYE_pip_financial_year1_20_21 = 0;
                        SAWYE_pip_financial_year1_21_22 = 0;
                        SAWYE_pip_financial_year1_22_23 = 0;
                        SAWYE_pip_financial_year1_23_24 = 0;
                        SAWYE_pip_financial_year1_24_25 = 0;

                    }
                }

            }

        }
    }

    Statewise_Activity_wise_Year_wise_Expenditure_Report_B_Details();


}

function Statewise_Activity_wise_Year_wise_Expenditure_Report_B_Details() {


    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {

                if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "") {
                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                    var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                    var pip_physical_QTY = 0;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                    }
                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);

                    if (SAWYE_Total_Expenditure == 0) {
                        SAWYE_Total_Expenditure = "";
                    } else {
                        SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                    }

                    if (SAWYE_pip_financial_year1_20_21 == 0) {
                        SAWYE_pip_financial_year1_20_21 = "";
                    } else {
                        SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_21_22 == 0) {
                        SAWYE_pip_financial_year1_21_22 = "";
                    } else {
                        SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_22_23 == 0) {
                        SAWYE_pip_financial_year1_22_23 = "";
                    } else {
                        SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_23_24 == 0) {
                        SAWYE_pip_financial_year1_23_24 = "";
                    } else {
                        SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                    }
                    if (SAWYE_pip_financial_year1_24_25 == 0) {
                        SAWYE_pip_financial_year1_24_25 = "";
                    } else {
                        SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                    }

                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td></td>' +
                        '<td></td><td></td><td></td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                    SAWYE_Total_Expenditure = 0;
                    SAWYE_pip_financial_year1_20_21 = 0;
                    SAWYE_pip_financial_year1_21_22 = 0;
                    SAWYE_pip_financial_year1_22_23 = 0;
                    SAWYE_pip_financial_year1_23_24 = 0;
                    SAWYE_pip_financial_year1_24_25 = 0;


                }
                else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "") {

                    if (Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        var pip_physical_QTY = 0;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);

                        if (SAWYE_Total_Expenditure == 0) {
                            SAWYE_Total_Expenditure = "";
                        } else {
                            SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                        }

                        if (SAWYE_pip_financial_year1_20_21 == 0) {
                            SAWYE_pip_financial_year1_20_21 = "";
                        } else {
                            SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_21_22 == 0) {
                            SAWYE_pip_financial_year1_21_22 = "";
                        } else {
                            SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_22_23 == 0) {
                            SAWYE_pip_financial_year1_22_23 = "";
                        } else {
                            SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_23_24 == 0) {
                            SAWYE_pip_financial_year1_23_24 = "";
                        } else {
                            SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_24_25 == 0) {
                            SAWYE_pip_financial_year1_24_25 = "";
                        } else {
                            SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td></td>' +
                            '<td></td><td></td><td></td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                        SAWYE_Total_Expenditure = 0;
                        SAWYE_pip_financial_year1_20_21 = 0;
                        SAWYE_pip_financial_year1_21_22 = 0;
                        SAWYE_pip_financial_year1_22_23 = 0;
                        SAWYE_pip_financial_year1_23_24 = 0;
                        SAWYE_pip_financial_year1_24_25 = 0;


                    }
                }
                else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "") {
                    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_pip_b_form[i].state_name) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        var pip_physical_QTY = 0;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (SAWYE_Total_Expenditure == 0) {
                            SAWYE_Total_Expenditure = "";
                        } else {
                            SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                        }

                        if (SAWYE_pip_financial_year1_20_21 == 0) {
                            SAWYE_pip_financial_year1_20_21 = "";
                        } else {
                            SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_21_22 == 0) {
                            SAWYE_pip_financial_year1_21_22 = "";
                        } else {
                            SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_22_23 == 0) {
                            SAWYE_pip_financial_year1_22_23 = "";
                        } else {
                            SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_23_24 == 0) {
                            SAWYE_pip_financial_year1_23_24 = "";
                        } else {
                            SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_24_25 == 0) {
                            SAWYE_pip_financial_year1_24_25 = "";
                        } else {
                            SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td></td>' +
                            '<td></td><td></td><td></td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                        SAWYE_Total_Expenditure = 0;
                        SAWYE_pip_financial_year1_20_21 = 0;
                        SAWYE_pip_financial_year1_21_22 = 0;
                        SAWYE_pip_financial_year1_22_23 = 0;
                        SAWYE_pip_financial_year1_23_24 = 0;
                        SAWYE_pip_financial_year1_24_25 = 0;

                    }
                }
                else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "") {
                    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_mis_pip_b_form[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        var pip_physical_QTY = 0;
                        if (pip_total != null && pip_total != "") {

                        } else {
                            pip_total = "";
                        }
                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (SAWYE_Total_Expenditure == 0) {
                            SAWYE_Total_Expenditure = "";
                        } else {
                            SAWYE_Total_Expenditure = SAWYE_Total_Expenditure.toFixed(2)
                        }

                        if (SAWYE_pip_financial_year1_20_21 == 0) {
                            SAWYE_pip_financial_year1_20_21 = "";
                        } else {
                            SAWYE_pip_financial_year1_20_21 = SAWYE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_21_22 == 0) {
                            SAWYE_pip_financial_year1_21_22 = "";
                        } else {
                            SAWYE_pip_financial_year1_21_22 = SAWYE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_22_23 == 0) {
                            SAWYE_pip_financial_year1_22_23 = "";
                        } else {
                            SAWYE_pip_financial_year1_22_23 = SAWYE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_23_24 == 0) {
                            SAWYE_pip_financial_year1_23_24 = "";
                        } else {
                            SAWYE_pip_financial_year1_23_24 = SAWYE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SAWYE_pip_financial_year1_24_25 == 0) {
                            SAWYE_pip_financial_year1_24_25 = "";
                        } else {
                            SAWYE_pip_financial_year1_24_25 = SAWYE_pip_financial_year1_24_25.toFixed(2)
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + SAWYE_pip_financial_year1_20_21 + '</td><td></td>' +
                            '<td></td><td></td><td></td><td>' + SAWYE_Total_Expenditure + '</td></tr> ';

                        SAWYE_Total_Expenditure = 0;
                        SAWYE_pip_financial_year1_20_21 = 0;
                        SAWYE_pip_financial_year1_21_22 = 0;
                        SAWYE_pip_financial_year1_22_23 = 0;
                        SAWYE_pip_financial_year1_23_24 = 0;
                        SAWYE_pip_financial_year1_24_25 = 0;

                    }

                }
            }
        }
    }


    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr == '') {
        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr = '<tr style="text-align:center;"><td colspan="12">NO Data</td></tr>';
    }
    var Tbl = Statewise_Activity_wise_Year_wise_Expenditure_Report_tbl_Head + Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr + "</tbody>";

    $('#myTable05').html(Tbl);
}

function Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_insertdata.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                if (State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {


                    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "") {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);



                    }
                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);



                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);


                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year != "") {

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);


                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);


                        }
                    }


                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);


                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year) {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);


                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity);

                        }
                    }
                }
            }
        }
    }



}

function Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_b_insertdata.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                if (State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                    if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == "") {


                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }


                    }
                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {


                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {


                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {


                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name) {


                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {


                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity == "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year) {


                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                    else if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State != "ALL" && Statewise_Activity_wise_Year_wise_Expenditure_Activity != "" && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year != "") {
                        if (Statewise_Activity_wise_Year_wise_Expenditure_Report_State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year == Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year && Statewise_Activity_wise_Year_wise_Expenditure_Activity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    SAWYE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SAWYE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }

                }
            }
        }
    }
}




function Statewise_Activity_wise_Year_wise_Expenditure_Activity_Report() {
    Statewise_Activity_wise_Year_wise_Expenditure_Activity = $('#Statewise_Activity_wise_Year_wise_Expenditure_Report_Activity').val();
    if (Statewise_Activity_wise_Year_wise_Expenditure_Activity != "0") {

        Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
    } else {
        Statewise_Activity_wise_Year_wise_Expenditure_Activity = "";
        alert("Please Select Work Activity");
    }
}

function Statewise_Activity_wise_Year_wise_Expenditure_Financial_Year_Info() {

    Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year = $('#Statewise_Activity_wise_Year_wise_Expenditure_Financial_Year').val();
    if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year != "0") {
        Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year = Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year;
        Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
    } else {
        Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year = "";
        Statewise_Activity_wise_Year_wise_Expenditure_fin_b_year = Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year;
        alert("Please Select Financial Year");
    }
}



//---------END--Statewise - Activity wise Year wise Expenditure Report Table----------











//-----------State wise Agencywise Wise PIP vs Release vs AWP vs Expenditure Report Table----------



var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr = '';
var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = 0;
var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_tbl_Head = '';

var PRAE_Total_Expenditure = 0;
var PRAE_AWP_Total = 0;
var PRAE_pip_financial_year1_20_21 = 0;
var PRAE_pip_financial_year1_21_22 = 0;
var PRAE_pip_financial_year1_22_23 = 0;
var PRAE_pip_financial_year1_23_24 = 0;
var PRAE_pip_financial_year1_24_25 = 0;

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details() {

    $('#pip_awp_agency_alert_data').hide();
    $('#myTable06').html("");
    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = 0;
    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr = '';
    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;">' +
        '<tr class="tableheader1"><th colspan="13" class="text-center">State wise Agencywise Wise PIP vs Release vs AWP vs Expenditure</th>' +
        '</tr><tr class="tableheader1"><th colspan="13" class="text-right">(In Crore)</th></tr><tr class="tableheader1">' +
        '<th rowspan="2">S.No</th><th rowspan="2">State</th> <th rowspan="2">Activity Name</th><th rowspan="2">QTY (Physical)</th><th rowspan="2">PIP Amount</th><th colspan="6" class="text-center">Release</th>' +
        '<th rowspan="2">AWP Amount_Year wise</th><th rowspan="2">Cumulative Expenditure</th></tr><tr class="tableheader1">' +
        '<th> 2020-2021</th><th>2021-2022</th><th>2022-2023</th><th>2023-2024</th><th>2024-2025</th> <th>Cumulative Release</th></tr>' +
        '</thead><tbody class="tablebaody">';
    PRAE_AWP_Total = 0;
    PRAE_Total_Expenditure = 0;
    PRAE_pip_financial_year1_20_21 = 0;
    PRAE_pip_financial_year1_21_22 = 0;
    PRAE_pip_financial_year1_22_23 = 0;
    PRAE_pip_financial_year1_23_24 = 0;
    PRAE_pip_financial_year1_24_25 = 0;

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {

                if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                    var pip_physical_QTY = 0;

                    var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {

                    } else {
                        pip_total = "";
                    }


                    var pip_physical_QTY = 0;

                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                    }

                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                    if (PRAE_AWP_Total == 0) {
                        PRAE_AWP_Total = "";
                    }

                    if (PRAE_Total_Expenditure == 0) {
                        PRAE_Total_Expenditure = "";
                    } else {
                        PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                    }

                    if (PRAE_pip_financial_year1_20_21 == 0) {
                        PRAE_pip_financial_year1_20_21 = "";
                    } else {
                        PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_21_22 == 0) {
                        PRAE_pip_financial_year1_21_22 = "";
                    } else {
                        PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_22_23 == 0) {
                        PRAE_pip_financial_year1_22_23 = "";
                    } else {
                        PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_23_24 == 0) {
                        PRAE_pip_financial_year1_23_24 = "";
                    } else {
                        PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_24_25 == 0) {
                        PRAE_pip_financial_year1_24_25 = "";
                    } else {
                        PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                    }

                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                        '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';
                    PRAE_AWP_Total = 0;
                    PRAE_Total_Expenditure = 0;
                    PRAE_pip_financial_year1_20_21 = 0;
                    PRAE_pip_financial_year1_21_22 = 0;
                    PRAE_pip_financial_year1_22_23 = 0;
                    PRAE_pip_financial_year1_23_24 = 0;
                    PRAE_pip_financial_year1_24_25 = 0;

                }
                else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                    if (Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                        var pip_physical_QTY = 0;

                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }


                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (PRAE_AWP_Total == 0) {
                            PRAE_AWP_Total = "";
                        }

                        if (PRAE_Total_Expenditure == 0) {
                            PRAE_Total_Expenditure = "";
                        } else {
                            PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                        }

                        if (PRAE_pip_financial_year1_20_21 == 0) {
                            PRAE_pip_financial_year1_20_21 = "";
                        } else {
                            PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_21_22 == 0) {
                            PRAE_pip_financial_year1_21_22 = "";
                        } else {
                            PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_22_23 == 0) {
                            PRAE_pip_financial_year1_22_23 = "";
                        } else {
                            PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_23_24 == 0) {
                            PRAE_pip_financial_year1_23_24 = "";
                        } else {
                            PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_24_25 == 0) {
                            PRAE_pip_financial_year1_24_25 = "";
                        } else {
                            PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';

                        PRAE_AWP_Total = 0;
                        PRAE_Total_Expenditure = 0;
                        PRAE_pip_financial_year1_20_21 = 0;
                        PRAE_pip_financial_year1_21_22 = 0;
                        PRAE_pip_financial_year1_22_23 = 0;
                        PRAE_pip_financial_year1_23_24 = 0;
                        PRAE_pip_financial_year1_24_25 = 0;

                    }
                }
                else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;


                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }


                        var pip_physical_QTY = 0;

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (PRAE_AWP_Total == 0) {
                            PRAE_AWP_Total = "";
                        }

                        if (PRAE_Total_Expenditure == 0) {
                            PRAE_Total_Expenditure = "";
                        } else {
                            PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                        }

                        if (PRAE_pip_financial_year1_20_21 == 0) {
                            PRAE_pip_financial_year1_20_21 = "";
                        } else {
                            PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_21_22 == 0) {
                            PRAE_pip_financial_year1_21_22 = "";
                        } else {
                            PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_22_23 == 0) {
                            PRAE_pip_financial_year1_22_23 = "";
                        } else {
                            PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_23_24 == 0) {
                            PRAE_pip_financial_year1_23_24 = "";
                        } else {
                            PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_24_25 == 0) {
                            PRAE_pip_financial_year1_24_25 = "";
                        } else {
                            PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';
                        PRAE_AWP_Total = 0;
                        PRAE_Total_Expenditure = 0;
                        PRAE_pip_financial_year1_20_21 = 0;
                        PRAE_pip_financial_year1_21_22 = 0;
                        PRAE_pip_financial_year1_22_23 = 0;
                        PRAE_pip_financial_year1_23_24 = 0;
                        PRAE_pip_financial_year1_24_25 = 0;

                    }
                }
                else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                    if (Full_Data.obj_abhy_mis_pip_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States && Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;


                        var pip_total = Full_Data.obj_abhy_mis_pip_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }


                        var pip_physical_QTY = 0;

                        if (Full_Data.obj_abhy_mis_pip_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_form[i].pip_total);
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (PRAE_AWP_Total == 0) {
                            PRAE_AWP_Total = "";
                        }

                        if (PRAE_Total_Expenditure == 0) {
                            PRAE_Total_Expenditure = "";
                        } else {
                            PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                        }

                        if (PRAE_pip_financial_year1_20_21 == 0) {
                            PRAE_pip_financial_year1_20_21 = "";
                        } else {
                            PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_21_22 == 0) {
                            PRAE_pip_financial_year1_21_22 = "";
                        } else {
                            PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_22_23 == 0) {
                            PRAE_pip_financial_year1_22_23 = "";
                        } else {
                            PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_23_24 == 0) {
                            PRAE_pip_financial_year1_23_24 = "";
                        } else {
                            PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_24_25 == 0) {
                            PRAE_pip_financial_year1_24_25 = "";
                        } else {
                            PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';
                        PRAE_AWP_Total = 0;
                        PRAE_Total_Expenditure = 0;
                        PRAE_pip_financial_year1_20_21 = 0;
                        PRAE_pip_financial_year1_21_22 = 0;
                        PRAE_pip_financial_year1_22_23 = 0;
                        PRAE_pip_financial_year1_23_24 = 0;
                        PRAE_pip_financial_year1_24_25 = 0;

                    }
                }
            }
        }
    }
    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_B_Details();

}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_B_Details() {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {

                if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;



                    var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {

                    } else {
                        pip_total = "";
                    }

                    var pip_physical_QTY = 0;

                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                        pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                    }

                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);

                    if (PRAE_AWP_Total == 0) {
                        PRAE_AWP_Total = "";
                    }

                    if (PRAE_Total_Expenditure == 0) {
                        PRAE_Total_Expenditure = "";
                    } else {
                        PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                    }

                    if (PRAE_pip_financial_year1_20_21 == 0) {
                        PRAE_pip_financial_year1_20_21 = "";
                    } else {
                        PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_21_22 == 0) {
                        PRAE_pip_financial_year1_21_22 = "";
                    } else {
                        PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_22_23 == 0) {
                        PRAE_pip_financial_year1_22_23 = "";
                    } else {
                        PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_23_24 == 0) {
                        PRAE_pip_financial_year1_23_24 = "";
                    } else {
                        PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                    }
                    if (PRAE_pip_financial_year1_24_25 == 0) {
                        PRAE_pip_financial_year1_24_25 = "";
                    } else {
                        PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                    }
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                        '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';

                    PRAE_AWP_Total = 0;
                    PRAE_Total_Expenditure = 0;
                    PRAE_pip_financial_year1_20_21 = 0;
                    PRAE_pip_financial_year1_21_22 = 0;
                    PRAE_pip_financial_year1_22_23 = 0;
                    PRAE_pip_financial_year1_23_24 = 0;
                    PRAE_pip_financial_year1_24_25 = 0;

                }
                else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;



                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }

                        var pip_physical_QTY = 0;

                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }


                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (PRAE_AWP_Total == 0) {
                            PRAE_AWP_Total = "";
                        }

                        if (PRAE_Total_Expenditure == 0) {
                            PRAE_Total_Expenditure = "";
                        } else {
                            PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                        }

                        if (PRAE_pip_financial_year1_20_21 == 0) {
                            PRAE_pip_financial_year1_20_21 = "";
                        } else {
                            PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_21_22 == 0) {
                            PRAE_pip_financial_year1_21_22 = "";
                        } else {
                            PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_22_23 == 0) {
                            PRAE_pip_financial_year1_22_23 = "";
                        } else {
                            PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_23_24 == 0) {
                            PRAE_pip_financial_year1_23_24 = "";
                        } else {
                            PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_24_25 == 0) {
                            PRAE_pip_financial_year1_24_25 = "";
                        } else {
                            PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';

                        PRAE_AWP_Total = 0;
                        PRAE_Total_Expenditure = 0;
                        PRAE_pip_financial_year1_20_21 = 0;
                        PRAE_pip_financial_year1_21_22 = 0;
                        PRAE_pip_financial_year1_22_23 = 0;
                        PRAE_pip_financial_year1_23_24 = 0;
                        PRAE_pip_financial_year1_24_25 = 0;
                    }
                }
                else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;


                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }


                        var pip_physical_QTY = 0;

                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (PRAE_AWP_Total == 0) {
                            PRAE_AWP_Total = "";
                        }

                        if (PRAE_Total_Expenditure == 0) {
                            PRAE_Total_Expenditure = "";
                        } else {
                            PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                        }

                        if (PRAE_pip_financial_year1_20_21 == 0) {
                            PRAE_pip_financial_year1_20_21 = "";
                        } else {
                            PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_21_22 == 0) {
                            PRAE_pip_financial_year1_21_22 = "";
                        } else {
                            PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_22_23 == 0) {
                            PRAE_pip_financial_year1_22_23 = "";
                        } else {
                            PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_23_24 == 0) {
                            PRAE_pip_financial_year1_23_24 = "";
                        } else {
                            PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_24_25 == 0) {
                            PRAE_pip_financial_year1_24_25 = "";
                        } else {
                            PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';

                        PRAE_AWP_Total = 0;
                        PRAE_Total_Expenditure = 0;
                        PRAE_pip_financial_year1_20_21 = 0;
                        PRAE_pip_financial_year1_21_22 = 0;
                        PRAE_pip_financial_year1_22_23 = 0;
                        PRAE_pip_financial_year1_23_24 = 0;
                        PRAE_pip_financial_year1_24_25 = 0;
                    }
                }
                else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                    if (Full_Data.obj_abhy_mis_pip_b_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States && Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;



                        var pip_total = Full_Data.obj_abhy_mis_pip_b_form[i].pip_estimated_cost_for_five_years;
                        if (pip_total != null && pip_total != "" && pip_total != "null") {

                        } else {
                            pip_total = "";
                        }

                        var pip_physical_QTY = 0;

                        if (Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != "" && Full_Data.obj_abhy_mis_pip_b_form[i].pip_total != null) {

                            pip_physical_QTY = parseFloat(Full_Data.obj_abhy_mis_pip_b_form[i].pip_total);
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);
                        if (PRAE_AWP_Total == 0) {
                            PRAE_AWP_Total = "";
                        }

                        if (PRAE_Total_Expenditure == 0) {
                            PRAE_Total_Expenditure = "";
                        } else {
                            PRAE_Total_Expenditure = PRAE_Total_Expenditure.toFixed(2)
                        }

                        if (PRAE_pip_financial_year1_20_21 == 0) {
                            PRAE_pip_financial_year1_20_21 = "";
                        } else {
                            PRAE_pip_financial_year1_20_21 = PRAE_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_21_22 == 0) {
                            PRAE_pip_financial_year1_21_22 = "";
                        } else {
                            PRAE_pip_financial_year1_21_22 = PRAE_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_22_23 == 0) {
                            PRAE_pip_financial_year1_22_23 = "";
                        } else {
                            PRAE_pip_financial_year1_22_23 = PRAE_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_23_24 == 0) {
                            PRAE_pip_financial_year1_23_24 = "";
                        } else {
                            PRAE_pip_financial_year1_23_24 = PRAE_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (PRAE_pip_financial_year1_24_25 == 0) {
                            PRAE_pip_financial_year1_24_25 = "";
                        } else {
                            PRAE_pip_financial_year1_24_25 = PRAE_pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + PRAE_pip_financial_year1_20_21 + '</td><td>' + PRAE_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + PRAE_pip_financial_year1_22_23 + '</td><td>' + PRAE_pip_financial_year1_23_24 + '</td><td>' + PRAE_pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + PRAE_AWP_Total + '</td><td>' + PRAE_Total_Expenditure + '</td></tr> ';

                        PRAE_AWP_Total = 0;
                        PRAE_Total_Expenditure = 0;
                        PRAE_pip_financial_year1_20_21 = 0;
                        PRAE_pip_financial_year1_21_22 = 0;
                        PRAE_pip_financial_year1_22_23 = 0;
                        PRAE_pip_financial_year1_23_24 = 0;
                        PRAE_pip_financial_year1_24_25 = 0;
                    }
                }
            }
        }
    }

    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr == "") {
        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr = '<tr style="text-align:center;"><td colspan="17">No Data</td></tr>';
    }
    $('#myTable06').html('');
    var TDD = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_tbl_Head + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr + '</tbody>';
    $('#myTable06').html(TDD);

}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_awp_form.length != 0) {

            for (var i = 0; i < Full_Data.obj_abhy_mis_awp_form.length; i++) {

                if (State == Full_Data.obj_abhy_mis_awp_form[i].state_name && WorkActivity == Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity) {

                    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {

                        var awp_total = 0;
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "null") {
                            awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                        }
                        if (isNaN(awp_total)) {
                            awp_total = 0;
                        }
                        if (awp_total == null) {
                            awp_total = 0;
                            PRAE_AWP_Total += parseFloat(awp_total);
                        } else {
                            PRAE_AWP_Total += parseFloat(awp_total);
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info(State, WorkActivity);


                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "null") {
                                awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            }
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total == null) {
                                awp_total = 0;
                                PRAE_AWP_Total += parseFloat(awp_total);
                            } else {
                                PRAE_AWP_Total += parseFloat(awp_total);
                            }
                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info(State, WorkActivity);

                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                        if (Full_Data.obj_abhy_mis_awp_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States) {

                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "null") {
                                awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            }
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total == null) {
                                awp_total = 0;
                                PRAE_AWP_Total += parseFloat(awp_total);
                            } else {
                                PRAE_AWP_Total += parseFloat(awp_total);
                            }
                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info(State, WorkActivity);

                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_mis_awp_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States && Full_Data.obj_abhy_mis_awp_form[i].awp_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_form[i].awp_total != "null") {
                                awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            }
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total == null) {
                                awp_total = 0;
                                PRAE_AWP_Total += parseFloat(awp_total);
                            } else {
                                PRAE_AWP_Total += parseFloat(awp_total);
                            }
                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info(State, WorkActivity);

                        }
                    }
                }
            }
        }
    }




}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_awp_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_awp_b_form.length; i++) {

                if (Full_Data.obj_abhy_mis_awp_b_form[i].state_name == State && WorkActivity == Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity) {

                    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {

                        var awp_total = 0;
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "null") {
                            awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                        }
                        if (isNaN(awp_total)) {
                            awp_total = 0;
                        }
                        if (awp_total == null) {
                            awp_total = 0;
                            PRAE_AWP_Total += parseFloat(awp_total);
                        } else {
                            PRAE_AWP_Total += parseFloat(awp_total);
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(State, WorkActivity);


                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "null") {
                                awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            }
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total == null) {
                                awp_total = 0;
                                PRAE_AWP_Total += parseFloat(awp_total);
                            } else {
                                PRAE_AWP_Total += parseFloat(awp_total);
                            }
                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(State, WorkActivity);


                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States) {
                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "null") {
                                awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            }
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total == null) {
                                awp_total = 0;
                                PRAE_AWP_Total += parseFloat(awp_total);
                            } else {
                                PRAE_AWP_Total += parseFloat(awp_total);
                            }
                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(State, WorkActivity);


                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_mis_awp_b_form[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States && Full_Data.obj_abhy_mis_awp_b_form[i].awp_workactivity == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            var awp_total = 0;
                            if (Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != null && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "" && Full_Data.obj_abhy_mis_awp_b_form[i].awp_total != "null") {
                                awp_total = Full_Data.obj_abhy_mis_awp_form[i].awp_total;
                            }
                            if (isNaN(awp_total)) {
                                awp_total = 0;
                            }
                            if (awp_total == null) {
                                awp_total = 0;
                                PRAE_AWP_Total += parseFloat(awp_total);
                            } else {
                                PRAE_AWP_Total += parseFloat(awp_total);
                            }
                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(State, WorkActivity);

                        }
                    }
                }
            }
        }
    }



}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_insertdata.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                if (State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name) {

                    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info(State, WorkActivity);
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }

                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info(State, WorkActivity);

                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }

                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info(State, WorkActivity);

                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States && Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }

                            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info(State, WorkActivity);

                        }
                    }
                }
            }
        }
    }



}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info(State, WorkActivity) {

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_b_insertdata.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {

                if (State == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name && WorkActivity == Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name) {

                    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }


                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States == "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity == "") {
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }
                    else if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States != "ALL" && State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "") {
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States && Full_Data.obj_abhy_financialprogress_b_insertdata[i].activity_name == State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {

                                    PRAE_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    PRAE_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }

                        }
                    }
                }
            }
        }
    }


}



function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_StateWise__Activity() {
    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity = $('#State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity').val();
    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "0") {

        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();
    } else {
        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity = "";
        alert("Please Select Work Activity");
    }
}





//---------END--State wise Agencywise Wise PIP vs Release vs AWP vs Expenditure Report Table----------




//----- State wise PIP vs Year wise Expenditure  Table--------------------

var State_wise_PIP_vs_Year_wise_Expenditure_Tr = '';
var State_wise_PIP_vs_Year_wise_Expenditure_Val = 0;
var State_wise_PIP_vs_Year_wise_Expenditure_tbl_Head = '';

var SWPY_Total_Expenditure = 0;
var SWPY_pip_financial_year1_20_21 = 0;
var SWPY_pip_financial_year1_21_22 = 0;
var SWPY_pip_financial_year1_22_23 = 0;
var SWPY_pip_financial_year1_23_24 = 0;
var SWPY_pip_financial_year1_24_25 = 0;
function State_wise_PIP_vs_Year_wise_Expenditure_Details() {

    $('#State_wise_pip_vs_Year_wise_alert_data').hide();
    $('#myTable07').html("");
    State_wise_PIP_vs_Year_wise_Expenditure_Val = 0;
    State_wise_PIP_vs_Year_wise_Expenditure_Tr = '';
    State_wise_PIP_vs_Year_wise_Expenditure_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"> <tr class="tableheader1">' +
        '<th colspan = "13" class="text-center" > State wise PIP vs Year wise Expenditure</th></tr><tr class="tableheader1"><th>S.No</th><th>State</th><th>Agency Name</th>' +
        '<th>Activity Id</th><th>Item Code</th><th>Activity Name </th><th>Total (in Crore (PIP))</th> <th>Expenditure 2020-21</th><th>Expenditure 2021-22</th>' +
        '<th>Expenditure 2022-23</th><th>Expenditure 2023-24</th><th>Expenditure 2024-25</th><th>Total Expenditure</th></tr></thead><tbody class="tablebaody">';

    SWPY_Total_Expenditure = 0;
    SWPY_pip_financial_year1_20_21 = 0;
    SWPY_pip_financial_year1_21_22 = 0;
    SWPY_pip_financial_year1_22_23 = 0;
    SWPY_pip_financial_year1_23_24 = 0;
    SWPY_pip_financial_year1_24_25 = 0;

    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_form.length; i++) {

                if (State_wise_PIP_vs_Year_wise_Expenditure_States == "ALL") {
                    State_wise_PIP_vs_Year_wise_Expenditure_Val = State_wise_PIP_vs_Year_wise_Expenditure_Val + 1;
                    State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                    if (SWPY_Total_Expenditure == 0) {
                        SWPY_Total_Expenditure = "";
                    } else {
                        SWPY_Total_Expenditure = SWPY_Total_Expenditure.toFixed(2)
                    }

                    if (SWPY_pip_financial_year1_20_21 == 0) {
                        SWPY_pip_financial_year1_20_21 = "";
                    } else {
                        SWPY_pip_financial_year1_20_21 = SWPY_pip_financial_year1_20_21.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_21_22 == 0) {
                        SWPY_pip_financial_year1_21_22 = "";
                    } else {
                        SWPY_pip_financial_year1_21_22 = SWPY_pip_financial_year1_21_22.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_22_23 == 0) {
                        SWPY_pip_financial_year1_22_23 = "";
                    } else {
                        SWPY_pip_financial_year1_22_23 = SWPY_pip_financial_year1_22_23.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_23_24 == 0) {
                        SWPY_pip_financial_year1_23_24 = "";
                    } else {
                        SWPY_pip_financial_year1_23_24 = SWPY_pip_financial_year1_23_24.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_24_25 == 0) {
                        SWPY_pip_financial_year1_24_25 = "";
                    } else {
                        SWPY_pip_financial_year1_24_25 = SWPY_pip_financial_year1_24_25.toFixed(2)
                    }

                    State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + State_wise_PIP_vs_Year_wise_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + SWPY_Total_Expenditure + '</td><td>' + SWPY_pip_financial_year1_20_21 + '</td><td>' + SWPY_pip_financial_year1_21_22 + '</td>' +
                        '<td>' + SWPY_pip_financial_year1_22_23 + '</td><td>' + SWPY_pip_financial_year1_23_24 + '</td><td>' + SWPY_pip_financial_year1_24_25 + '</td><td>' + SWPY_Total_Expenditure + '</td></tr > ';
                    SWPY_Total_Expenditure = 0;
                    SWPY_pip_financial_year1_20_21 = 0;
                    SWPY_pip_financial_year1_21_22 = 0;
                    SWPY_pip_financial_year1_22_23 = 0;
                    SWPY_pip_financial_year1_23_24 = 0;
                    SWPY_pip_financial_year1_24_25 = 0;

                }
                else if (State_wise_PIP_vs_Year_wise_Expenditure_States != "ALL") {
                    if (State_wise_PIP_vs_Year_wise_Expenditure_States == Full_Data.obj_abhy_mis_pip_form[i].state_name) {
                        State_wise_PIP_vs_Year_wise_Expenditure_Val = State_wise_PIP_vs_Year_wise_Expenditure_Val + 1;
                        State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info(Full_Data.obj_abhy_mis_pip_form[i].state_name, Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity);

                        if (SWPY_Total_Expenditure == 0) {
                            SWPY_Total_Expenditure = "";
                        } else {
                            SWPY_Total_Expenditure = SWPY_Total_Expenditure.toFixed(2)
                        }

                        if (SWPY_pip_financial_year1_20_21 == 0) {
                            SWPY_pip_financial_year1_20_21 = "";
                        } else {
                            SWPY_pip_financial_year1_20_21 = SWPY_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_21_22 == 0) {
                            SWPY_pip_financial_year1_21_22 = "";
                        } else {
                            SWPY_pip_financial_year1_21_22 = SWPY_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_22_23 == 0) {
                            SWPY_pip_financial_year1_22_23 = "";
                        } else {
                            SWPY_pip_financial_year1_22_23 = SWPY_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_23_24 == 0) {
                            SWPY_pip_financial_year1_23_24 = "";
                        } else {
                            SWPY_pip_financial_year1_23_24 = SWPY_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_24_25 == 0) {
                            SWPY_pip_financial_year1_24_25 = "";
                        } else {
                            SWPY_pip_financial_year1_24_25 = SWPY_pip_financial_year1_24_25.toFixed(2)
                        }


                        State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + State_wise_PIP_vs_Year_wise_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_form[i].pip_workactivity + '</td><td>' + SWPY_Total_Expenditure + '</td><td>' + SWPY_pip_financial_year1_20_21 + '</td><td>' + SWPY_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + SWPY_pip_financial_year1_22_23 + '</td><td>' + SWPY_pip_financial_year1_23_24 + '</td><td>' + SWPY_pip_financial_year1_24_25 + '</td><td>' + SWPY_Total_Expenditure + '</td></tr > ';
                        SWPY_Total_Expenditure = 0;
                        SWPY_pip_financial_year1_20_21 = 0;
                        SWPY_pip_financial_year1_21_22 = 0;
                        SWPY_pip_financial_year1_22_23 = 0;
                        SWPY_pip_financial_year1_23_24 = 0;
                        SWPY_pip_financial_year1_24_25 = 0;
                    }
                }
            }
        }
    }


    State_wise_PIP_vs_Year_wise_Expenditure_B_Details();

}

function State_wise_PIP_vs_Year_wise_Expenditure_B_Details() {


    if (Full_Data != null) {

        if (Full_Data.obj_abhy_mis_pip_b_form.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_mis_pip_b_form.length; i++) {

                if (State_wise_PIP_vs_Year_wise_Expenditure_States == "ALL") {
                    State_wise_PIP_vs_Year_wise_Expenditure_Val = State_wise_PIP_vs_Year_wise_Expenditure_Val + 1;
                    State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);

                    if (SWPY_Total_Expenditure == 0) {
                        SWPY_Total_Expenditure = "";
                    } else {
                        SWPY_Total_Expenditure = SWPY_Total_Expenditure.toFixed(2)
                    }

                    if (SWPY_pip_financial_year1_20_21 == 0) {
                        SWPY_pip_financial_year1_20_21 = "";
                    } else {
                        SWPY_pip_financial_year1_20_21 = SWPY_pip_financial_year1_20_21.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_21_22 == 0) {
                        SWPY_pip_financial_year1_21_22 = "";
                    } else {
                        SWPY_pip_financial_year1_21_22 = SWPY_pip_financial_year1_21_22.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_22_23 == 0) {
                        SWPY_pip_financial_year1_22_23 = "";
                    } else {
                        SWPY_pip_financial_year1_22_23 = SWPY_pip_financial_year1_22_23.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_23_24 == 0) {
                        SWPY_pip_financial_year1_23_24 = "";
                    } else {
                        SWPY_pip_financial_year1_23_24 = SWPY_pip_financial_year1_23_24.toFixed(2)
                    }
                    if (SWPY_pip_financial_year1_24_25 == 0) {
                        SWPY_pip_financial_year1_24_25 = "";
                    } else {
                        SWPY_pip_financial_year1_24_25 = SWPY_pip_financial_year1_24_25.toFixed(2)
                    }

                    State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + State_wise_PIP_vs_Year_wise_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                        '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + SWPY_Total_Expenditure + '</td><td>' + SWPY_pip_financial_year1_20_21 + '</td><td>' + SWPY_pip_financial_year1_21_22 + '</td>' +
                        '<td>' + SWPY_pip_financial_year1_22_23 + '</td><td>' + SWPY_pip_financial_year1_23_24 + '</td><td>' + SWPY_pip_financial_year1_24_25 + '</td><td>' + SWPY_Total_Expenditure + '</td></tr > ';
                    SWPY_Total_Expenditure = 0;
                    SWPY_pip_financial_year1_20_21 = 0;
                    SWPY_pip_financial_year1_21_22 = 0;
                    SWPY_pip_financial_year1_22_23 = 0;
                    SWPY_pip_financial_year1_23_24 = 0;
                    SWPY_pip_financial_year1_24_25 = 0;

                }
                else if (State_wise_PIP_vs_Year_wise_Expenditure_States != "ALL") {
                    if (State_wise_PIP_vs_Year_wise_Expenditure_States == Full_Data.obj_abhy_mis_pip_b_form[i].state_name) {
                        State_wise_PIP_vs_Year_wise_Expenditure_Val = State_wise_PIP_vs_Year_wise_Expenditure_Val + 1;

                        State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info(Full_Data.obj_abhy_mis_pip_b_form[i].state_name, Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity);

                        if (SWPY_Total_Expenditure == 0) {
                            SWPY_Total_Expenditure = "";
                        } else {
                            SWPY_Total_Expenditure = SWPY_Total_Expenditure.toFixed(2)
                        }

                        if (SWPY_pip_financial_year1_20_21 == 0) {
                            SWPY_pip_financial_year1_20_21 = "";
                        } else {
                            SWPY_pip_financial_year1_20_21 = SWPY_pip_financial_year1_20_21.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_21_22 == 0) {
                            SWPY_pip_financial_year1_21_22 = "";
                        } else {
                            SWPY_pip_financial_year1_21_22 = SWPY_pip_financial_year1_21_22.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_22_23 == 0) {
                            SWPY_pip_financial_year1_22_23 = "";
                        } else {
                            SWPY_pip_financial_year1_22_23 = SWPY_pip_financial_year1_22_23.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_23_24 == 0) {
                            SWPY_pip_financial_year1_23_24 = "";
                        } else {
                            SWPY_pip_financial_year1_23_24 = SWPY_pip_financial_year1_23_24.toFixed(2)
                        }
                        if (SWPY_pip_financial_year1_24_25 == 0) {
                            SWPY_pip_financial_year1_24_25 = "";
                        } else {
                            SWPY_pip_financial_year1_24_25 = SWPY_pip_financial_year1_24_25.toFixed(2)
                        }

                        State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + State_wise_PIP_vs_Year_wise_Expenditure_Val + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].state_name + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_agency_name + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_activity_id + '</td><td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_item_code + '</td>' +
                            '<td>' + Full_Data.obj_abhy_mis_pip_b_form[i].pip_workactivity + '</td><td>' + SWPY_Total_Expenditure + '</td><td>' + SWPY_pip_financial_year1_20_21 + '</td><td>' + SWPY_pip_financial_year1_21_22 + '</td>' +
                            '<td>' + SWPY_pip_financial_year1_22_23 + '</td><td>' + SWPY_pip_financial_year1_23_24 + '</td><td>' + SWPY_pip_financial_year1_24_25 + '</td><td>' + SWPY_Total_Expenditure + '</td></tr > ';


                        SWPY_Total_Expenditure = 0;
                        SWPY_pip_financial_year1_20_21 = 0;
                        SWPY_pip_financial_year1_21_22 = 0;
                        SWPY_pip_financial_year1_22_23 = 0;
                        SWPY_pip_financial_year1_23_24 = 0;
                        SWPY_pip_financial_year1_24_25 = 0;
                    }
                }


                if (State_wise_PIP_vs_Year_wise_Expenditure_Tr == '') {
                    State_wise_PIP_vs_Year_wise_Expenditure_Tr = '<tr style="text-align:center;"><td colspan="12">NO Data</td></tr>';
                }
                var Tbl = State_wise_PIP_vs_Year_wise_Expenditure_tbl_Head + State_wise_PIP_vs_Year_wise_Expenditure_Tr + "</tbody>";

                $('#myTable07').html(Tbl);
            }
        }
    }



}

function State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info(State, WorkActivity) {


    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_insertdata.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_financialprogress_insertdata.length; i++) {
                if (Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name == WorkActivity && State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name) {


                    if (State_wise_PIP_vs_Year_wise_Expenditure_States == "ALL") {

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }
                    else if (State_wise_PIP_vs_Year_wise_Expenditure_States != "ALL") {
                        if (State_wise_PIP_vs_Year_wise_Expenditure_States == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name) {
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {

                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_insertdata[i].fin_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_insertdata[i].cumulative_expenditure);

                                }
                            }

                        }
                    }
                }
            }
        }
    }



}
function State_wise_PIP_vs_Year_wise_Expenditure_Finacial_B_Info(State, WorkActivity) {


    if (Full_Data != null) {

        if (Full_Data.obj_abhy_financialprogress_b_insertdata.length != 0) {
            for (var i = 0; i < Full_Data.obj_abhy_financialprogress_b_insertdata.length; i++) {
                if (Full_Data.obj_abhy_financialprogress_insertdata[i].activity_name == WorkActivity && State == Full_Data.obj_abhy_financialprogress_insertdata[i].state_name) {

                    if (State_wise_PIP_vs_Year_wise_Expenditure_States == "ALL") {

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }
                        if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                SWPY_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                            }
                        }

                    }
                    else if (State_wise_PIP_vs_Year_wise_Expenditure_States != "ALL") {
                        if (State_wise_PIP_vs_Year_wise_Expenditure_States == Full_Data.obj_abhy_financialprogress_b_insertdata[i].state_name) {

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2020-21") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_20_21 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2021-22") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_21_22 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }

                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2022-23") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_22_23 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2023-24") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_23_24 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }
                            if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].fin_b_year == "2024-25") {
                                if (Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != null && Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure != "") {
                                    SWPY_Total_Expenditure += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);
                                    SWPY_pip_financial_year1_24_25 += parseFloat(Full_Data.obj_abhy_financialprogress_b_insertdata[i].cumulative_expenditure);

                                }
                            }

                        }
                    }

                }
            }
        }
    }





}



//-----END--State wise PIP vs Year wise Expenditure  Table--------------------

