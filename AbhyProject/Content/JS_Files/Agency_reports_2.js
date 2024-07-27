var pip_agency_state_name = "";
var Statewise_Activity_wise_Year_wise_Expenditure_Report_State = "";
var Statewise_Activity_wise_Year_wise_Expenditure_Activity = "";
var Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year = "";
var State_wise_PIP_vs_Year_wise_Expenditure_States = "";
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State = "";
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode = "";
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year = "";

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
                Pip_A_Details();
                AWP_A_Info();
                AWP_A_Planned_Info();
                State_wise_PIP_vs_Year_wise_Expenditure_Details();
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
                Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
                Item_codes_Info();
                State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();
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
                Pip_A_Details();
                AWP_A_Info();
                AWP_A_Planned_Info();
                State_wise_PIP_vs_Year_wise_Expenditure_Details();
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
                Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
                Item_codes_Info();
                State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();

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
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Home/Sign_Up_DropdownInfo",
        data: "{ }",
        dataType: 'JSON',
        success: function (response) {

            if (response.length != 0) {
                var all_states = [];

                Jsondata = response;
                var ddlst = {};
                var optionhtml = '';
                //var optionState = '<option value="0"> Select State</option>';
                for (var i = 0; i < response.length; i++) {

                    if (!ddlst[response[i].state_name]) {
                        all_states.push(response[i].state_name);
                        ddlst[response[i].state_name] = response[i].state_name;
                        //  $("#spnstate").append(optionState);
                    }
                }

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
                $("#PIP_Info_State").append(optionhtml);

            }

        }
    });
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
function Pip_A_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/PIP_Info',
        data: { 'StateName': pip_agency_state_name },
        dataType: 'JSON',
        success: function (response) {
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            PIP_Val = 0;
            PIP_Tr = '';
            PIP_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan="11" class="text-center">PROJECT IMPLEMENTATION PLAN (PIP)</th>' +
                '</tr><tr class="tableheader1"><th>S.No</th><th>State</th><th>Agency Name</th><th>Activity ID</th><th>Item Code</th>' +
                '<th>Activity Name </th><th>Total (in Crores)</th></tr></thead><tbody class="tablebaody">';

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {

                    var Total_val = 0;

                    if (response[i].pip_financial_year1_20_21 != null && response[i].pip_financial_year1_20_21 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year1_20_21);
                    }
                    if (response[i].pip_financial_year2_21_22 != null && response[i].pip_financial_year2_21_22 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year2_21_22);
                    }
                    if (response[i].pip_financial_year3_22_23 != null && response[i].pip_financial_year3_22_23 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year3_22_23);
                    }
                    if (response[i].pip_financial_year4_23_24 != null && response[i].pip_financial_year4_23_24 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year4_23_24);
                    }
                    if (response[i].pip_financial_year5_24_25 != null && response[i].pip_financial_year5_24_25 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year5_24_25);
                    }


                    PIP_Val = PIP_Val + 1;
                    PIP_Tr += '<tr><td> ' + PIP_Val + '</td><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_agency_name + '</td><td>' + response[i].pip_activity_id + '</td><td>' + response[i].pip_item_code + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + Total_val + '</td></tr>';
                }

            }

            Pip_B_Details();
        }
    });
}

function Pip_B_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/PIP_B_Info',
        data: { 'StateName': pip_agency_state_name },
        dataType: 'JSON',
        success: function (response) {

            $('#pip_alert_data').hide();

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    var Total_val = 0;

                    if (response[i].pip_financial_year1_20_21 != null && response[i].pip_financial_year1_20_21 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year1_20_21);
                    }
                    if (response[i].pip_financial_year2_21_22 != null && response[i].pip_financial_year2_21_22 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year2_21_22);
                    }
                    if (response[i].pip_financial_year3_22_23 != null && response[i].pip_financial_year3_22_23 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year3_22_23);
                    }
                    if (response[i].pip_financial_year4_23_24 != null && response[i].pip_financial_year4_23_24 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year4_23_24);
                    }
                    if (response[i].pip_financial_year5_24_25 != null && response[i].pip_financial_year5_24_25 != "") {
                        Total_val += parseFloat(response[i].pip_financial_year5_24_25);
                    }

                    PIP_Val = PIP_Val + 1;
                    PIP_Tr += '<tr><td> ' + PIP_Val + '</td><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_agency_name + '</td><td>' + response[i].pip_activity_id + '</td><td>' + response[i].pip_item_code + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + Total_val + '</td></tr>';
                }

            }
            if (PIP_Tr == '') {
                PIP_Tr = '<tr style="text-align:center;"><td colspan="7">NO Data</td></tr>';
            }
            var Tbl = PIP_tbl_Head + PIP_Tr + "</tbody>";

            $('#myTable01').html(Tbl);
        }
    });
}

function PIP_StateWise_Info() {
    var PIP_Info_State = $('#PIP_Info_State').val();

    if (PIP_Info_State != "0") {
        PIP_Tr = '';
        pip_agency_state_name = PIP_Info_State;
        PIP_Val = 0;
        Pip_A_Details();
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State = PIP_Info_State;
        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
        Statewise_Activity_wise_Year_wise_Expenditure_Report_State = PIP_Info_State;
        Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States = PIP_Info_State;
        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();

        State_wise_PIP_vs_Year_wise_Expenditure_States = PIP_Info_State;
        State_wise_PIP_vs_Year_wise_Expenditure_Details();
        AWP_A_Info();
        AWP_A_Planned_Info();
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
function AWP_A_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/AWP_Info',
        data: { 'FIN_Year': AWP_Fin_Year, 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State },
        dataType: 'JSON',
        success: function (response) {

            AWP_TBL_Head = '';
            AWP_Info_Tr = '';
            AWP_Info_Tr_Sno = 0;

            AWP_TBL_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan="11" class="text-center">ANNUAL WORK PLAN (AWP) <span>Selecting year</span></th></tr>' +
                '<tr class="tableheader1"><th>S.No</th><th>State</th><th>Agency Name</th><th>Item Code</th><th>Activity Name </th>' +
                '<th>QTY (Physical)</th><th>Total (in Crores)</th><th>Exp Method</th><th>Status</th><th>Agency Remarks</th></tr>' +
                '</thead><tbody class="tablebaody">';
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    var awp_total = 0;
                    if (response[i].awp_financial_year_20_21 != null && response[i].awp_financial_year_20_21 != "") {
                        awp_total = parseFloat(response[i].awp_financial_year_20_21);
                    }
                    var awp_total_physcical = 0;
                    if (response[i].awp_physical_year_20_21 != null && response[i].awp_physical_year_20_21 != "") {
                        awp_total_physcical = parseFloat(response[i].awp_physical_year_20_21);
                    }

                    AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                    AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td>' + response[i].awp_item_code + '</td>' +
                        '<td>' + response[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                        '<td></td></tr>';
                }
            }
            AWP_B_Info();
        }
    });
}

function AWP_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/AWP_B_Info',
        data: { 'FIN_Year': AWP_Fin_Year, 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State },
        dataType: 'JSON',
        success: function (response) {
            $('#pip_alert_data').hide();

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    var awp_total = 0;
                    if (response[i].awp_financial_year_20_21 != null && response[i].awp_financial_year_20_21 != "") {
                        awp_total = parseFloat(response[i].awp_financial_year_20_21);
                    }
                    var awp_total_physcical = 0;
                    if (response[i].awp_physical_year_20_21 != null && response[i].awp_physical_year_20_21 != "") {
                        awp_total_physcical = parseFloat(response[i].awp_physical_year_20_21);
                    }
                    AWP_Info_Tr_Sno = AWP_Info_Tr_Sno + 1;
                    AWP_Info_Tr += '<tr><td> ' + AWP_Info_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td>' + response[i].awp_item_code + '</td>' +
                        '<td>' + response[i].awp_workactivity + '</td><td>' + awp_total_physcical + '</td><td>' + awp_total + '</td><td></td><td></td>' +
                        '<td></td></tr>';
                }
            }
            if (AWP_Info_Tr == '') {
                AWP_Info_Tr = '<tr style="text-align:center;"><td colspan="10">NO Data</td></tr>';
            }

            var Tbl = AWP_TBL_Head + AWP_Info_Tr + "</tbody>";
            $('#myTable02').html(Tbl);
        }
    });
}


function AWP_Year_Wise_Info() {
    var AWP_Financial_Year = $('#AWP_Financial_Year').val();
    if (AWP_Financial_Year != "0") {
        AWP_Fin_Year = AWP_Financial_Year;
        AWP_Info_Tr_Sno = 0;
        AWP_A_Info();


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

function AWP_A_Planned_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/AWP_Info',
        data: { 'FIN_Year': AWP_Planned_Fin_Year, 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State },
        dataType: 'JSON',
        success: function (response) {


            AWP__Planned_TBL_Head = '';
            AWP__Planned_Info_Tr = '';
            AWP_Info__Planned_Tr_Sno = 0;

            AWP__Planned_TBL_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan="11" class="text-center">AWP Planned Component Wise Year Wise <span>Selecting year</span></th>' +
                '</tr><tr class="tableheader1"><th colspan="11" class="text-right">(INR in Crores)</th></tr><tr class="tableheader1">' +
                '<th>S.No</th><th>State</th><th>Agency Name</th><th>Support Services</th><th>Goods</th><th>Works</th><th>Training/IEC/OE</th><th>QTY(Physical)</th><th>Total</th>' +
                '</tr> </thead><tbody>';
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    var awp_total = response[i].awp_total;
                    if (awp_total != null && awp_total != "null" && awp_total != "") {

                    } else {
                        awp_total = "";
                    }
                    AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                    if (response[i].awp_category == "Support Service") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td>' + response[i].awp_category + '</td>' +
                            '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                    }
                    if (response[i].awp_category == "Goods") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td></td><td>' + response[i].awp_category + '</td>' +
                            '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                    }
                    if (response[i].awp_category == "Works") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td></td>' +
                            '<td></td><td>' + response[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                    }
                    if (response[i].awp_category == "Training/ IEC/OE") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td></td>' +
                            '<td></td><td></td><td>' + response[i].awp_category + '</td><td>' + awp_total + '</td><td></td?</tr>';
                    }

                }
            }
            AWP_B__Planned_Info();
        }
    });
}

function AWP_B__Planned_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/AWP_B_Info',
        data: { 'FIN_Year': AWP_Planned_Fin_Year, 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State },
        dataType: 'JSON',
        success: function (response) {
            $('#AWP_Planned_alert_data').hide();
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    var awp_total = response[i].awp_total;
                    if (awp_total != null && awp_total != "null" && awp_total != "") {

                    } else {
                        awp_total = "";
                    }
                    AWP_Info__Planned_Tr_Sno = AWP_Info__Planned_Tr_Sno + 1;
                    if (response[i].awp_category == "Support Service") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td>' + response[i].awp_category + '</td>' +
                            '<td></td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                    }
                    if (response[i].awp_category == "Goods") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td></td>' +
                            '<td>' + response[i].awp_category + '</td><td></td><td></td><td>' + awp_total + '</td><td></td></tr>';
                    }
                    if (response[i].awp_category == "Works") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td></td>' +
                            '<td></td><td>' + response[i].awp_category + '</td><td></td><td>' + awp_total + '</td><td></td></tr>';
                    }
                    if (response[i].awp_category == "Training/ IEC/OE") {
                        AWP__Planned_Info_Tr += '<tr><td> ' + AWP_Info__Planned_Tr_Sno + '</td><td>' + response[i].state_name + '</td><td>' + response[i].awp_agency_name + '</td><td></td>' +
                            '<td></td><td></td><td>' + response[i].awp_category + '</td><td>' + awp_total + '</td><td></td></tr>';
                    }
                }
            }
            if (AWP__Planned_Info_Tr == '') {
                AWP__Planned_Info_Tr = '<tr style="text-align:center;"><td colspan="9">NO Data</td></tr>';
            }

            var Tbl = AWP__Planned_TBL_Head + AWP__Planned_Info_Tr + "</tbody>";
            $('#myTable03').html(Tbl);
        }
    });
}



function AWP__Planned_Financial_Year() {
    var AWP__Planned_Financial_Year = $('#AWP__Planned_Financial_Year').val();

    if (AWP__Planned_Financial_Year != "0") {
        AWP_Planned_Fin_Year = AWP__Planned_Financial_Year;
        AWP_Info__Planned_Tr_Sno = 0;
        AWP_A_Planned_Info();

    } else {
        alert("Please Select Financial Year");
    }
}


// ----------- END--------AWP Planned Component Wise Year Wise Table------------


//----- State wise PIP vs Year wise Expenditure  Table--------------------

var State_wise_PIP_vs_Year_wise_Expenditure_Tr = '';
var State_wise_PIP_vs_Year_wise_Expenditure_Val = 0;
var State_wise_PIP_vs_Year_wise_Expenditure_tbl_Head = '';
function State_wise_PIP_vs_Year_wise_Expenditure_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/PIP_Info',
        data: { 'StateName': State_wise_PIP_vs_Year_wise_Expenditure_States },
        dataType: 'JSON',
        success: function (response) {
            $('#State_wise_pip_vs_Year_wise_alert_data').hide();
            $('#myTable07').html("");
            State_wise_PIP_vs_Year_wise_Expenditure_Val = 0;
            State_wise_PIP_vs_Year_wise_Expenditure_Tr = '';
            State_wise_PIP_vs_Year_wise_Expenditure_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"> <tr class="tableheader1">' +
                '<th colspan = "12" class="text-center" > State wise PIP vs Year wise Expenditure</th></tr><tr class="tableheader1"><th>S.No</th><th>State</th><th>Agency Name</th>' +
                '<th>Item Code</th><th>Activity Name </th><th>Total (in Crore (PIP))</th> <th>Expenditure 2020-21</th><th>Expenditure 2021-22</th>' +
                '<th>Expenditure 2022-23</th><th>Expenditure 2023-24</th><th>Expenditure 2024-25</th><th>Total Expenditure</th></tr></thead><tbody class="tablebaody">';

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    State_wise_PIP_vs_Year_wise_Expenditure_Val = State_wise_PIP_vs_Year_wise_Expenditure_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year2_21_22 = "";
                    var pip_financial_year3_22_23 = "";
                    var pip_financial_year4_23_24 = "";
                    var pip_financial_year5_24_25 = "";

                    if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                        pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                    }
                    if (response[i].pip_financial_year2_21_22 != "" && response[i].pip_financial_year2_21_22 != null) {
                        pip_financial_year2_21_22 = parseFloat(response[i].pip_financial_year2_21_22);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year2_21_22);
                    }
                    if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                        pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                    }
                    if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                        pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                    }
                    if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                        pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                    }


                    State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_agency_name + '</td><td>' + response[i].pip_activity_id + '</td><td>' + response[i].pip_item_code + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + Total_Expenditure + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr > ';
                }

            }

            State_wise_PIP_vs_Year_wise_Expenditure_B_Details();
        }
    });
}

function State_wise_PIP_vs_Year_wise_Expenditure_B_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/PIP_B_Info',
        data: { 'StateName': State_wise_PIP_vs_Year_wise_Expenditure_States },
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    State_wise_PIP_vs_Year_wise_Expenditure_Val = State_wise_PIP_vs_Year_wise_Expenditure_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";

                    if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                        pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                    }
                    if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                        pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                    }
                    if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                        pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                    }
                    if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                        pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                    }
                    if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                        pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                    }


                    State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_agency_name + '</td><td>' + response[i].pip_activity_id + '</td><td>' + response[i].pip_item_code + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + Total_Expenditure + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr > ';
                }

            }

            State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info();
        }
    });
}

function State_wise_PIP_vs_Year_wise_Expenditure_Finacial_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/php_and_fn_Info_A_Form',
        data: { 'StateName': State_wise_PIP_vs_Year_wise_Expenditure_States },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    if (data[i].fin_year == "2020-21") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex11 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2021-22") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex12 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                        }
                    }

                    if (data[i].fin_year == "2022-23") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex13 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2023-24") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex4 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2024-25") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex5 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                        }
                    }
                    var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;

                    State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + data[i].state_name + '</td>' +
                        '<td>' + data[i].fin_agency_name + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                        '<td>' + data[i].activity_name + '</td><td>' + data[i].cumulative_sum + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr > ';

                }

            }



            State_wise_PIP_vs_Year_wise_Expenditure_Finacial_B_Info();

        }
    });
}
function State_wise_PIP_vs_Year_wise_Expenditure_Finacial_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/php_and_fn_Info_B_Form',
        data: { 'StateName': State_wise_PIP_vs_Year_wise_Expenditure_States },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }


            if (data.length != 0) {
                for (Z = 0; Z < data.length; Z++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    for (var i = 0; i < data.length; i++) {

                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex11 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex12 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                            }
                        }

                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex13 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex14 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex15 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                            }
                        }

                        var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;

                        State_wise_PIP_vs_Year_wise_Expenditure_Tr += '<tr><td>' + data[i].state_name + '</td>' +
                            '<td>' + data[i].fin_b_agency_name + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                            '<td>' + data[i].activity_name + '</td><td>' + data[i].fin_b_cumulative_sum + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr > ';

                    }



                }
            }

            if (State_wise_PIP_vs_Year_wise_Expenditure_Tr == '') {
                State_wise_PIP_vs_Year_wise_Expenditure_Tr = '<tr style="text-align:center;"><td colspan="12">NO Data</td></tr>';
            }
            var Tbl = State_wise_PIP_vs_Year_wise_Expenditure_tbl_Head + State_wise_PIP_vs_Year_wise_Expenditure_Tr + "</tbody>";

            $('#myTable07').html(Tbl);

        }
    });
}



//-----END--State wise PIP vs Year wise Expenditure  Table--------------------


//-----------State wise - PIP Item Wise Year Wise Expenditure Report Table--




var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr = '';
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = 0;
var State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_tbl_Head = '';
function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_PIP_vs_Year_wise_Expenditure_PIP_Info',
        data: { 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State, 'ItemCode': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode },
        dataType: 'JSON',
        success: function (response) {

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

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";

                    var pip_physical_QTY = 0;


                    var pip_total = response[i].pip_total;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {

                    } else {
                        pip_total = "";
                    }
                    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {
                        if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                            pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                        }
                        if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                            pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                        }
                        if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                            pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                        }
                        if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                            pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                        }
                        if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                            pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                        }


                        if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                        }
                        if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                        }
                        if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                        }
                        if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                        }
                        if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                        }

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                            '<td>' + response[i].pip_item_code + '</td>' +
                            '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    } else {

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2020-21") {

                            if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                                pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                            }
                            if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td></td>' +
                                '<td></td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2021-22") {

                            if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                                pip_financial_year1_21_22 = response[i].pip_financial_year1_21_22;
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                            }

                            if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                            }

                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td>' + pip_financial_year1_21_22 + '</td>' +
                                '<td></td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';
                        }


                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2022-23") {

                            if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                                pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                            }

                            if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td>' + pip_financial_year1_22_23 + '</td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';
                        }

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2023-24") {

                            if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                                pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                            }
                            if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td></td><td>' + pip_financial_year1_23_24 + '</td><td></td><td>' + Total_Expenditure + '</td></tr> ';
                        }

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2024-25") {

                            if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                                pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                            }
                            if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                            }
                            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td></td><td></td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                    }
                }

            }

            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_B_Details();
        }
    });
}

function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_B_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_PIP_vs_Year_wise_Expenditure_PIP_B_Info',
        data: { 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State, 'ItemCode': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode },
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";

                    var pip_physical_QTY = 0;
                    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "") {

                        if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21) {
                            pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                        }
                        if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22) {
                            pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                        }
                        if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23) {
                            pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                        }
                        if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24) {
                            pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                        }
                        if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25) {
                            pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                        }

                        if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                        }
                        if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                        }
                        if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                        }
                        if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                        }
                        if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                        }

                    }
                    else {

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2020-21") {
                            if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                                pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                            }
                            if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                            }
                        }
                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2021-22") {
                            if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                                pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                            }
                            if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                            }
                        }
                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2022-23") {
                            if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                                pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                            }
                            if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                            }
                        }

                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2023-24") {
                            if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                                pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                            }
                            if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                            }

                        }
                        if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year == "2024-25") {
                            if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                                pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                            }
                            if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                            }
                        }

                    }

                    var pip_total = response[i].pip_total;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }

                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_item_code + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';
                }

            }

            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info();
        }
    });
}

function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_PIP_vs_Year_wise_Expenditure_php_and_fn_Info_A_Form',
        data: { 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State, 'ItemCode': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode, 'Fin_Year': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year },

        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";

                    if (data[i].fin_year == "2020-21") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex11 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2021-22") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex12 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                        }
                    }

                    if (data[i].fin_year == "2022-23") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex13 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2023-24") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex4 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2024-25") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex5 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                        }
                    }
                    var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;


                    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + data[i].state_name + '</td>' +
                        '<td>' + data[i].item_code + '</td>' +
                        '<td>' + data[i].activity_name + '</td><td></td><td>' + data[i].cumulative_sum + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                }

            }



            State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info();

        }
    });
}


function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Finacial_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_PIP_vs_Year_wise_Expenditure_php_and_fn_Info_B_Form',
        data: { 'StateName': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_State, 'ItemCode': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode, 'Fin_Year': State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }


            if (data.length != 0) {
                for (Z = 0; Z < data.length; Z++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    for (var i = 0; i < data.length; i++) {
                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + 1;

                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex11 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex12 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                            }
                        }

                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex13 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex14 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex15 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                            }
                        }

                        var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;
                        var cumulative_sum = data[i].cumulative_sum;

                        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr += '<tr><td>' + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Val + '</td><td>' + data[i].state_name + '</td>' +
                            '<td>' + data[i].item_code + '</td>' +
                            '<td>' + data[i].activity_name + '</td><td></td><td>' + data[i].fin_b_cumulative_sum + '</td><td></td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    }
                }
            }

            if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr == '') {
                State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr = '<tr style="text-align:center;"><td colspan="13">NO Data</td></tr>';
            }
            var Tbl = State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_tbl_Head + State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Tr + "</tbody>";

            $('#myTable04').html(Tbl);

        }
    });
}



function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode_dropdown() {
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode = $('#Agency_item_code').val();
    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_ItemCode != "0") {

        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
    } else {
        alert("Please Select Item Code");
    }
}

function State_wise_PIP_Item_Wise_Year_Wise_Expenditure_ReportYear_Wise_Info() {
    State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year = $('#State_wise_PIP_Item_Wise_Year_Wise_Expenditure_ReportYear_Financial_Year').val();
    if (State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Financial_Year != "0") {

        State_wise_PIP_Item_Wise_Year_Wise_Expenditure_Report_Details();
    } else {
        alert("Please Select Financial Year");
    }
}

//-------------END State wise - PIP Item Wise Year Wise Expenditure Report Table---




//-----------Statewise - Activity wise Year wise Expenditure Report Table----------



var Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr = '';
var Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = 0;
var Statewise_Activity_wise_Year_wise_Expenditure_Report_tbl_Head = '';
function Statewise_Activity_wise_Year_wise_Expenditure_Report_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/Statewise_Activity_wise_Year_wise_Expenditure_PIP_Info',
        data: { 'StateName': Statewise_Activity_wise_Year_wise_Expenditure_Report_State, 'Activity': Statewise_Activity_wise_Year_wise_Expenditure_Activity },
        dataType: 'JSON',
        success: function (response) {
            $('#activity_state_wise_alert_data').hide();
            $('#myTable05').html("");
            Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = 0;
            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr = '';
            Statewise_Activity_wise_Year_wise_Expenditure_Report_tbl_Head = '<thead style="color: #fff;background-color: #337ab7;"><tr class="tableheader1"><th colspan ="12" class="text-center"> Statewise - Activity wise Year wise Expenditure Report</th>' +
                '</tr><tr class="tableheader1"><th rowspan="2">S.No</th><th rowspan="2">State</th><th rowspan="2">Item Code</th>' +
                '<th rowspan="2">Activity Name</th><th rowspan="2">QTY (Physical)</th><th rowspan="2">PIP Amount</th><th colspan="5" class="text-center">Expenditures</th> <th rowspan="2">Total Expenditures</th>' +
                '</tr><tr class="tableheader1"><th>FY 2020-2021</th><th>FY 2021-2022</th> <th>FY 2022-2023</th><th>FY 2023-2024</th><th>FY 2024-2025</th></tr></thead><tbody class="tablebaody">';

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    var pip_physical_QTY = 0;

                    var pip_total = response[i].pip_total;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }


                    if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "") {


                        if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                            pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                        }
                        if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                            pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                        }
                        if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                            pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                        }
                        if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                            pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                        }
                        if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                            pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                        }

                        if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                        }
                        if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                        }
                        if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                        }
                        if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                        }
                        if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                        }

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                            '<td>' + response[i].pip_item_code + '</td>' +
                            '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    }
                    else {

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2020-21") {
                            if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                                pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                            }

                            if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td></td>' +
                                '<td></td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2021-22") {
                            if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                                pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                            }

                            if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                            }
                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td>' + pip_financial_year1_21_22 + '</td>' +
                                '<td></td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2022-23") {

                            if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                            }
                            if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                                pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td>' + pip_financial_year1_22_23 + '</td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2023-24") {
                            if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                                pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                            }
                            if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                            }
                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td></td><td>' + pip_financial_year1_23_24 + '</td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2024-25") {

                            if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                                pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                            }

                            if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td></td><td></td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        }


                    }

                }
            }

            Statewise_Activity_wise_Year_wise_Expenditure_Report_B_Details();
        }
    });
}

function Statewise_Activity_wise_Year_wise_Expenditure_Report_B_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/Statewise_Activity_wise_Year_wise_Expenditure_PIP_B_Info',
        data: { 'StateName': Statewise_Activity_wise_Year_wise_Expenditure_Report_State, 'Activity': Statewise_Activity_wise_Year_wise_Expenditure_Activity },
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    var pip_total = response[i].pip_total;
                    var pip_physical_QTY = 0;
                    if (pip_total != null && pip_total != "") {

                    } else {
                        pip_total = "";
                    }

                    if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "") {
                        if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                            pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                        }
                        if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                            pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                        }
                        if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                            pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                        }
                        if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                            pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                        }
                        if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                            pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                            Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                        }


                        if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                        }
                        if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                        }
                        if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                        }
                        if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                        }
                        if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                            pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                        }


                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                            '<td>' + response[i].pip_item_code + '</td>' +
                            '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    }
                    else {

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2020-21") {
                            if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                                pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                            }

                            if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                            }


                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td></td>' +
                                '<td></td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2021-22") {

                            if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                                pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                            }

                            if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td>' + pip_financial_year1_21_22 + '</td>' +
                                '<td></td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2022-23") {

                            if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                                pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                            }

                            if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                            }

                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td>' + pip_financial_year1_22_23 + '</td><td></td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }


                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2023-24") {

                            if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                                pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                            }


                            if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                            }
                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td></td><td>' + pip_financial_year1_23_24 + '</td><td></td><td>' + Total_Expenditure + '</td></tr> ';

                        }

                        if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year == "2024-25") {

                            if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                                pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                                Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                            }

                            if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                                pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                            }


                            Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + response[i].state_name + '</td>' +
                                '<td>' + response[i].pip_item_code + '</td>' +
                                '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td></td><td></td>' +
                                '<td></td><td></td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                        }



                    }

                }

            }

            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info();
        }
    });
}

function Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/Statewise_Activity_wise_Year_wise_Expenditure_php_and_fn_Info_A_Form',
        data: { 'StateName': Statewise_Activity_wise_Year_wise_Expenditure_Report_State, 'Activity': Statewise_Activity_wise_Year_wise_Expenditure_Activity, 'Fin_Year': Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    if (data[i].fin_year == "2020-21") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex11 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2021-22") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex12 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                        }
                    }

                    if (data[i].fin_year == "2022-23") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex13 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2023-24") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex4 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2024-25") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex5 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                        }
                    }
                    var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;

                    Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + data[i].state_name + '</td>' +
                        '<td>' + data[i].item_code + '</td>' +
                        '<td>' + data[i].activity_name + '</td><td></td><td>' + data[i].cumulative_sum + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                }

            }



            Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info();

        }
    });
}

function Statewise_Activity_wise_Year_wise_Expenditure_Report_Finacial_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/Statewise_Activity_wise_Year_wise_Expenditure_php_and_fn_Info_B_Form',
        data: { 'StateName': Statewise_Activity_wise_Year_wise_Expenditure_Report_State, 'Activity': Statewise_Activity_wise_Year_wise_Expenditure_Activity, 'Fin_Year': Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }


            if (data.length != 0) {
                for (Z = 0; Z < data.length; Z++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    for (var i = 0; i < data.length; i++) {
                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Val = Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + 1;

                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex11 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex12 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                            }
                        }

                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex13 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex14 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex15 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                            }
                        }

                        var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;

                        Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr += '<tr><td>' + Statewise_Activity_wise_Year_wise_Expenditure_Report_Val + '</td><td>' + data[i].state_name + '</td>' +
                            '<td>' + data[i].item_code + '</td>' +
                            '<td>' + data[i].activity_name + '</td><td></td><td>' + data[i].fin_b_cumulative_sum + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    }



                }
            }

            if (Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr == '') {
                Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr = '<tr style="text-align:center;"><td colspan="12">NO Data</td></tr>';
            }
            var Tbl = Statewise_Activity_wise_Year_wise_Expenditure_Report_tbl_Head + Statewise_Activity_wise_Year_wise_Expenditure_Report_Tr + "</tbody>";

            $('#myTable05').html(Tbl);

        }
    });
}

function Statewise_Activity_wise_Year_wise_Expenditure_Activity_Report() {
    Statewise_Activity_wise_Year_wise_Expenditure_Activity = $('#Statewise_Activity_wise_Year_wise_Expenditure_Report_Activity').val();
    if (Statewise_Activity_wise_Year_wise_Expenditure_Activity != "0") {

        Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
    } else {
        alert("Please Select Work Activity");
    }
}

function Statewise_Activity_wise_Year_wise_Expenditure_Financial_Year_Info() {

    Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year = $('#Statewise_Activity_wise_Year_wise_Expenditure_Financial_Year').val();
    if (Statewise_Activity_wise_Year_wise_Expenditure_Fin_Year != "0") {

        Statewise_Activity_wise_Year_wise_Expenditure_Report_Details();
    } else {
        alert("Please Select Financial Year");
    }
}



//---------END--Statewise - Activity wise Year wise Expenditure Report Table----------







//-----------State wise Agencywise Wise PIP vs Release vs AWP vs Expenditure Report Table----------



var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr = '';
var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = 0;
var State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_tbl_Head = '';
function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_PIP_Info',
        data: { 'StateName': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States, 'Activity': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity },
        dataType: 'JSON',
        success: function (response) {
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

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;
                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    var pip_physical_QTY = 0;

                    var pip_total = response[i].pip_total;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {

                    } else {
                        pip_total = "";
                    }

                    if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                        pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                    }
                    if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                        pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                    }
                    if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                        pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                    }
                    if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                        pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                    }
                    if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                        pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                    }
                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = "0";
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = "0";
                    }

                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = "0";
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = "0";
                    }

                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = "0";
                    }
                    var Sum = parseFloat(pip_financial_year1_20_21) + parseFloat(pip_financial_year1_21_22) + parseFloat(pip_financial_year1_22_23) + parseFloat(pip_financial_year1_23_24) + parseFloat(pip_financial_year1_24_25);
                    if (pip_financial_year1_20_21 == "0") {
                        pip_financial_year1_20_21 = "";
                    }
                    if (pip_financial_year1_21_22 == "0") {
                        pip_financial_year1_21_22 = "";
                    }

                    if (pip_financial_year1_22_23 == "0") {
                        pip_financial_year1_22_23 = "";
                    }
                    if (pip_financial_year1_23_24 == "0") {
                        pip_financial_year1_23_24 = "";
                    }

                    if (pip_financial_year1_24_25 == "0") {
                        pip_financial_year1_24_25 = "";
                    }

                    var pip_physical_QTY = 0;

                    if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                    }
                    if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                    }
                    if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                    }
                    if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                    }
                    if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                    }


                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + Sum + '</td><td>' + Total_Expenditure + '</td></tr> ';


                }


            }


            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_B_Details();
        }
    });
}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_B_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_PIP_B_Info',
        data: { 'StateName': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States, 'Activity': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity },
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (response.length != 0) {

                for (var i = 0; i < response.length; i++) {
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                    var Total_Expenditure = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";

                    var pip_total = response[i].pip_total;
                    if (pip_total != null && pip_total != "" && pip_total != "null") {

                    } else {
                        pip_total = "";
                    }
                    if (response[i].pip_financial_year1_20_21 != "" && response[i].pip_financial_year1_20_21 != null) {
                        pip_financial_year1_20_21 = parseFloat(response[i].pip_financial_year1_20_21);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_20_21);
                    }
                    if (response[i].pip_financial_year1_21_22 != "" && response[i].pip_financial_year1_21_22 != null) {
                        pip_financial_year1_21_22 = parseFloat(response[i].pip_financial_year1_21_22);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_21_22);
                    }
                    if (response[i].pip_financial_year1_22_23 != "" && response[i].pip_financial_year1_22_23 != null) {
                        pip_financial_year1_22_23 = parseFloat(response[i].pip_financial_year1_22_23);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_22_23);
                    }
                    if (response[i].pip_financial_year1_23_24 != "" && response[i].pip_financial_year1_23_24 != null) {
                        pip_financial_year1_23_24 = parseFloat(response[i].pip_financial_year1_23_24);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_23_24);
                    }
                    if (response[i].pip_financial_year1_24_25 != "" && response[i].pip_financial_year1_24_25 != null) {
                        pip_financial_year1_24_25 = parseFloat(response[i].pip_financial_year1_24_25);
                        Total_Expenditure += parseFloat(response[i].pip_financial_year1_24_25);
                    }
                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = "0";
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = "0";
                    }

                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = "0";
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = "0";
                    }

                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = "0";
                    }

                    var Sum = parseFloat(pip_financial_year1_20_21) + parseFloat(pip_financial_year1_21_22) + parseFloat(pip_financial_year1_22_23) + parseFloat(pip_financial_year1_23_24) + parseFloat(pip_financial_year1_24_25);
                    if (pip_financial_year1_20_21 == "0") {
                        pip_financial_year1_20_21 = "";
                    }
                    if (pip_financial_year1_21_22 == "0") {
                        pip_financial_year1_21_22 = "";
                    }

                    if (pip_financial_year1_22_23 == "0") {
                        pip_financial_year1_22_23 = "";
                    }
                    if (pip_financial_year1_23_24 == "0") {
                        pip_financial_year1_23_24 = "";
                    }

                    if (pip_financial_year1_24_25 == "0") {
                        pip_financial_year1_24_25 = "";
                    }

                    var pip_physical_QTY = 0;

                    if (response[i].pip_physical_year1_20_21 != "" && response[i].pip_physical_year1_20_21 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_20_21);
                    }
                    if (response[i].pip_physical_year1_21_22 != "" && response[i].pip_physical_year1_21_22 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_21_22);
                    }
                    if (response[i].pip_physical_year1_22_23 != "" && response[i].pip_physical_year1_22_23 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_22_23);
                    }
                    if (response[i].pip_physical_year1_23_24 != "" && response[i].pip_physical_year1_23_24 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_23_24);
                    }
                    if (response[i].pip_physical_year1_24_25 != "" && response[i].pip_physical_year1_24_25 != null) {

                        pip_physical_QTY += parseFloat(response[i].pip_physical_year1_24_25);
                    }


                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + response[i].state_name + '</td>' +
                        '<td>' + response[i].pip_workactivity + '</td><td>' + pip_physical_QTY + '</td><td>' + pip_total + '</td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + Sum + '</td><td>' + Total_Expenditure + '</td></tr> ';

                }

            }

            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info();
        }
    });
}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_php_and_fn_Info_A_Form',
        data: { 'StateName': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States, 'Activity': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    if (data[i].fin_year == "2020-21") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex11 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2021-22") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex12 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                        }
                    }

                    if (data[i].fin_year == "2022-23") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex13 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2023-24") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex4 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                        }
                    }
                    if (data[i].fin_year == "2024-25") {
                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Ex5 = parseFloat(data[i].cumulative_expenditure);
                            pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                        }
                    }
                    var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;
                    if (pip_financial_year1_20_21 == "") {
                        pip_financial_year1_20_21 = "0";
                    }
                    if (pip_financial_year1_21_22 == "") {
                        pip_financial_year1_21_22 = "0";
                    }

                    if (pip_financial_year1_22_23 == "") {
                        pip_financial_year1_22_23 = "0";
                    }
                    if (pip_financial_year1_23_24 == "") {
                        pip_financial_year1_23_24 = "0";
                    }

                    if (pip_financial_year1_24_25 == "") {
                        pip_financial_year1_24_25 = "0";
                    }

                    var Sum = parseFloat(pip_financial_year1_20_21) + parseFloat(pip_financial_year1_21_22) + parseFloat(pip_financial_year1_22_23) + parseFloat(pip_financial_year1_23_24) + parseFloat(pip_financial_year1_24_25);
                    if (pip_financial_year1_20_21 == "0") {
                        pip_financial_year1_20_21 = "";
                    }
                    if (pip_financial_year1_21_22 == "0") {
                        pip_financial_year1_21_22 = "";
                    }

                    if (pip_financial_year1_22_23 == "0") {
                        pip_financial_year1_22_23 = "";
                    }
                    if (pip_financial_year1_23_24 == "0") {
                        pip_financial_year1_23_24 = "";
                    }

                    if (pip_financial_year1_24_25 == "0") {
                        pip_financial_year1_24_25 = "";
                    }
                    var pip_total = data[i].pip_total;
                    if (pip_total == null) {
                        pip_total = "";
                    }
                    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + data[i].state_name + '</td>' +
                        '<td>' + data[i].pip_workactivity + '</td><td>' + pip_total + '</td><td></td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                        '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + Sum + '</td><td>' + Total_Expenditure + '</td></tr> ';

                }

            }



            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info();

        }
    });
}

function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Finacial_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_php_and_fn_Info_B_Form',
        data: { 'StateName': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States, 'Activity': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (data.length != 0) {
                for (Z = 0; Z < data.length; Z++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    for (var i = 0; i < data.length; i++) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex11 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_20_21 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex12 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_21_22 = data[i].cumulative_expenditure;
                            }
                        }

                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex13 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_22_23 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex14 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_23_24 = data[i].cumulative_expenditure;
                            }
                        }
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                Ex15 = parseFloat(data[i].cumulative_expenditure);
                                pip_financial_year1_24_25 = data[i].cumulative_expenditure;
                            }
                        }

                        var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = "0";
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = "0";
                        }

                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = "0";
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = "0";
                        }

                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = "0";
                        }
                        var Sum = parseFloat(pip_financial_year1_20_21) + parseFloat(pip_financial_year1_21_22) + parseFloat(pip_financial_year1_22_23) + parseFloat(pip_financial_year1_23_24) + parseFloat(pip_financial_year1_24_25);

                        if (pip_financial_year1_20_21 == "0") {
                            pip_financial_year1_20_21 = "";
                        }
                        if (pip_financial_year1_21_22 == "0") {
                            pip_financial_year1_21_22 = "";
                        }

                        if (pip_financial_year1_22_23 == "0") {
                            pip_financial_year1_22_23 = "";
                        }
                        if (pip_financial_year1_23_24 == "0") {
                            pip_financial_year1_23_24 = "";
                        }

                        if (pip_financial_year1_24_25 == "0") {
                            pip_financial_year1_24_25 = "";
                        }
                        var pip_total = data[i].pip_total;
                        if (pip_total == null) {
                            pip_total = "";
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + data[i].state_name + '</td>' +
                            '<td>' + data[i].pip_workactivity + '</td><td>' + pip_total + '</td><td></td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + Sum + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    }



                }
            }

            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info();

        }
    });
}


function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_A_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_Info',
        data: { 'StateName': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States, 'Activity': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity },
        dataType: 'JSON',
        success: function (data) {


            if (data.length != 0) {
                for (Z = 0; Z < data.length; Z++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    for (var i = 0; i < data.length; i++) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                        if (data[i].awp_fin_year == "2020-21") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex11 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_20_21 = data[i].awp_financial_year_20_21;
                            }
                        }
                        if (data[i].awp_fin_year == "2021-22") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex12 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_21_22 = data[i].awp_financial_year_20_21;
                            }
                        }

                        if (data[i].awp_fin_year == "2022-23") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex13 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_22_23 = data[i].awp_financial_year_20_21;
                            }
                        }
                        if (data[i].awp_fin_year == "2023-24") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex14 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_23_24 = data[i].awp_financial_year_20_21;
                            }
                        }
                        if (data[i].awp_fin_year == "2024-25") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex15 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_24_25 = data[i].awp_financial_year_20_21;
                            }
                        }

                        var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = "0";
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = "0";
                        }

                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = "0";
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = "0";
                        }

                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = "0";
                        }
                        var Sum = parseFloat(pip_financial_year1_20_21) + parseFloat(pip_financial_year1_21_22) + parseFloat(pip_financial_year1_22_23) + parseFloat(pip_financial_year1_23_24) + parseFloat(pip_financial_year1_24_25);

                        if (pip_financial_year1_20_21 == "0") {
                            pip_financial_year1_20_21 = "";
                        }
                        if (pip_financial_year1_21_22 == "0") {
                            pip_financial_year1_21_22 = "";
                        }

                        if (pip_financial_year1_22_23 == "0") {
                            pip_financial_year1_22_23 = "";
                        }
                        if (pip_financial_year1_23_24 == "0") {
                            pip_financial_year1_23_24 = "";
                        }

                        if (pip_financial_year1_24_25 == "0") {
                            pip_financial_year1_24_25 = "";
                        }
                        var awp_total = data[i].awp_total;
                        if (awp_total == null) {
                            awp_total = "";
                        }
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + data[i].state_name + '</td>' +
                            '<td>' + data[i].awp_workactivity + '</td><td>' + awp_total + '</td><td></td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + Sum + '</td><td>' + Total_Expenditure + '</td></tr> ';

                    }



                }
            }


            State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info();
        }
    });
}




function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_ExpenditureAWP_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_B_Info',
        data: { 'StateName': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_States, 'Activity': State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity },
        dataType: 'JSON',
        success: function (data) {

            if (data.length != 0) {
                for (Z = 0; Z < data.length; Z++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    var pip_financial_year1_20_21 = "";
                    var pip_financial_year1_21_22 = "";
                    var pip_financial_year1_22_23 = "";
                    var pip_financial_year1_23_24 = "";
                    var pip_financial_year1_24_25 = "";
                    for (var i = 0; i < data.length; i++) {
                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val = State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + 1;

                        if (data[i].awp_fin_year == "2020-21") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex11 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_20_21 = data[i].awp_financial_year_20_21;
                            }
                        }
                        if (data[i].awp_fin_year == "2021-22") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex12 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_21_22 = data[i].awp_financial_year_20_21;
                            }
                        }

                        if (data[i].awp_fin_year == "2022-23") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex13 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_22_23 = data[i].awp_financial_year_20_21;
                            }
                        }
                        if (data[i].awp_fin_year == "2023-24") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex14 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_23_24 = data[i].awp_financial_year_20_21;
                            }
                        }
                        if (data[i].awp_fin_year == "2024-25") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                Ex15 = parseFloat(data[i].awp_financial_year_20_21);
                                pip_financial_year1_24_25 = data[i].awp_financial_year_20_21;
                            }
                        }

                        var Total_Expenditure = Ex11 + Ex12 + Ex13 + Ex14 + Ex15;
                        if (pip_financial_year1_20_21 == "") {
                            pip_financial_year1_20_21 = "0";
                        }
                        if (pip_financial_year1_21_22 == "") {
                            pip_financial_year1_21_22 = "0";
                        }

                        if (pip_financial_year1_22_23 == "") {
                            pip_financial_year1_22_23 = "0";
                        }
                        if (pip_financial_year1_23_24 == "") {
                            pip_financial_year1_23_24 = "0";
                        }

                        if (pip_financial_year1_24_25 == "") {
                            pip_financial_year1_24_25 = "0";
                        }
                        var Sum = parseFloat(pip_financial_year1_20_21) + parseFloat(pip_financial_year1_21_22) + parseFloat(pip_financial_year1_22_23) + parseFloat(pip_financial_year1_23_24) + parseFloat(pip_financial_year1_24_25);

                        if (pip_financial_year1_20_21 == "0") {
                            pip_financial_year1_20_21 = "";
                        }
                        if (pip_financial_year1_21_22 == "0") {
                            pip_financial_year1_21_22 = "";
                        }

                        if (pip_financial_year1_22_23 == "0") {
                            pip_financial_year1_22_23 = "";
                        }
                        if (pip_financial_year1_23_24 == "0") {
                            pip_financial_year1_23_24 = "";
                        }

                        if (pip_financial_year1_24_25 == "0") {
                            pip_financial_year1_24_25 = "";
                        }
                        var awp_total = data[i].awp_total;
                        if (awp_total == null) {
                            awp_total = "";
                        }

                        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Tr += '<tr><td>' + State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Val + '</td><td>' + data[i].state_name + '</td>' +
                            '<td>' + data[i].awp_workactivity + '</td><td>' + awp_total + '</td><td></td><td>' + pip_financial_year1_20_21 + '</td><td>' + pip_financial_year1_21_22 + '</td>' +
                            '<td>' + pip_financial_year1_22_23 + '</td><td>' + pip_financial_year1_23_24 + '</td><td>' + pip_financial_year1_24_25 + '</td><td>Comulative Relese</td><td>' + Sum + '</td><td>' + Total_Expenditure + '</td></tr> ';

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
    });
}




function State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_StateWise__Activity() {
    State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity = $('#State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity').val();
    if (State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Activity != "0") {

        State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_Report_Details();
    } else {
        alert("Please Select Work Activity");
    }
}




//---------END--State wise Agencywise Wise PIP vs Release vs AWP vs Expenditure Report Table----------