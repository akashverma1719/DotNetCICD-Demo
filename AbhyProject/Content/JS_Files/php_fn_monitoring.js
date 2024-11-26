
const today = new Date();
//const fincalyear = today.getFullYear();

/*const fin_fincalyear = get_financial_year(fincalyear);*/
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

var currentDate = new Date();
var yearaa = currentDate.getFullYear();
var monthaa = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-based
var dayaa = ('0' + currentDate.getDate()).slice(-2);

var formattedDateaa = yearaa + monthaa + dayaa;


const fix_Date = 15;
const month_numbers = Get_month_order(mm)

var fiscalyear = "";
var fincalyear = 0;
const month_no1 = 6;
const month_no2 = 7;
var a_component = 0;
var b_component = 0;
var Main_Statename = "";
var Comonent_A_Sum = 0;
var Comonent_B_Sum = 0;
var form = '';


function getCurrentFinancialYear() {

    var today = new Date();
    if ((today.getMonth() + 1) <= 3) {
        fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()
    } else {
        fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
    }
    if (fiscalyear == "2020-2021") {
        fincalyear = 2020;
    } else if (fiscalyear == "2021-2022") {
        fincalyear = 2021;
    } else if (fiscalyear == "2022-2023") {
        fincalyear = 2022;
    } else if (fiscalyear == "2023-2024") {
        fincalyear = 2023;
    } else if (fiscalyear == "2024-2025") {
        fincalyear = 2024;
    }


    if (fiscalyear == "2020-2021") {
        fiscalyear = "2020-21";
    } else if (fiscalyear == "2021-2022") {
        fiscalyear = "2021-22";
    } else if (fiscalyear == "2022-2023") {
        fiscalyear = "2022-23";
    } else if (fiscalyear == "2023-2024") {
        fiscalyear = "2023-24";
    } else if (fiscalyear == "2024-2025") {
        fiscalyear = "2024-25";
    }
}

function SessionInfo1() {

    Main_Statename = "";
    $('#Agency_AWP_DropDown').hide();
    $('#State_AWP_DropDown').hide();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/State_SessionInfo',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            Main_Statename = "ALL";
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (data == "Admin") {
                $('#Agency_AWP_DropDown').show();
                $('#State_AWP_DropDown').hide();
                PHP_Agency_Info();
                //PHP_FN_A_Form_Tbl
            }
            else {
                $('#div_form_insert').show();
                $('#Agency_AWP_DropDown').hide();
                $('#State_AWP_DropDown').show();
                $('#pip_dropdown_state_name').text(data);
                Main_Statename = data;

                PHP_Agency_Info();
                PHP_Agency_Name();
                PHP_DropDown_Info();
                PHP_FN_Info();
                PHP_FN_Info_B_Form();
                $("#div_npmu").hide();
                // Total_Dli_Amt();
            }


            PHP_FN_A_Table_Info();
            PHP_FN_B_Table_Info();
        }

    });

}

function isForm(check_form) {
    form = check_form;
}
var Expenditure_Made_Value = 0;
var Expenditure_Made_B_Value = 0;

function PHP_Agency_Name() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Agency_Name',
        data: { 'state_name': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            $('#nodal_agency_name').text(data[0].nodal_agency_name);
            $('#nodal_agency_name1').text(data[0].nodal_agency_name);
            if (Main_Statename == "ALL") {
                $('#nodal_agency_name').text("All State's");
                $('#nodal_agency_name1').text("All State's");
            }
            if (Main_Statename == "NPMU") {
                $('#nodal_agency_name').text("NPMU State's");
                $('#nodal_agency_name1').text("NPMU State's");
            }
        }
    });
}
function PHP_Agency_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PIP_Agency_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }


            var slection_options = '<option value="0">Select State</option>';
            var slection_options_b_report = '<option value="0">Select State</option>';
            //var allselectionoptions = '<option value="0">Select State</option>';

            slection_options += '<option value="ALL">ALL</option>';
            //awp_agency_state_name_1  slection_options_b += '<option value="ALL">ALL</option>';
            slection_options += '<option value="NPMU">NPMU</option>';
            slection_options_b_report += '<option value="ALL">ALL</option>';
            slection_options_b_report += '<option value="NPMU">NPMU</option>';

            slection_options_b = '<option value="0">Select State</option>';
            if (form == '') {
                slection_options_b += '<option value="ALL">ALL</option>';
            }
            slection_options_b += '<option value="NPMU">NPMU</option>';


            //Pip State Binding
            var PipStateArr = [];

            //    PipStateArr.push("ALL");
            PipStateArr.push("NPMU");
            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "pip") {
                    PipStateArr.push(data[i].state_name)
                }
            }

            PipStateArr.sort();

            $('#pip_agency_state_name').append('<option >--Select--</option>');
            $('#pip_agency_state_name_1').append('<option >--Select--</option>')
            PipStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $('#pip_agency_state_name').html(slection_options);
            $('#pip_agency_state_name_1').html(slection_options);

            ///End pip state binding

            //awp state binding
            var AwpStateArr = [];

            //  AwpStateArr.push("ALL");
            //  AwpStateArr.push("NPMU");
            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "awp") {
                    AwpStateArr.push(data[i].state_name)
                }
            }

            AwpStateArr.sort();
            $('#awp_agency_state_name').append('<option >--Select--</option>');
            $('#awp_agency_state_name_1').append('<option >--Select--</option>');

            AwpStateArr.forEach((val) => {
                slection_options_b_report += '<option value="' + val + '"> ' + val + ' </option>';

            });

            $('#awp_agency_state_name_report').append('<option >--Select--</option>')   //for report (ALL not included)
            AwpStateArr.forEach((val) => {
                slection_options_b += '<option value="' + val + '"> ' + val + ' </option>';

            });

            $('#awp_agency_state_name').html(slection_options_b);
            $('#awp_agency_state_name_1').html(slection_options_b);
            $('#awp_agency_state_name_report').html(slection_options_b_report);
            //  $('#awp_agency_state_name_1').prepend(allselectionoptions);
            //$('#awp_agency_state_name_report').prepend(allselectionoptions);
            //awp state binding end

        }

    });
}
function Activea() {

    $('#home').show();
    $('#home').addClass("tab-pane fade in active");
    $('#menu1').hide();
}

function Activeb() {


    $('#home').hide();
    $('#menu1').show();
    $('#menu1').addClass("tab-pane fade in active");
}

function PHP_Agency_StateInfo_B() {

    var awp_agency_state_name = $('#awp_agency_state_name_1').val();

    if (awp_agency_state_name == 'ALL')
    //chetan saini now
    {
        $('#A_sub_component_id').val("");       //01june clearing data before inserting new data
        $('#A_component_id').val("");
        $('#A_activity_id').val("");
        $('#A_item_code').val("");
        $('#A_component_budget_head').val("");
        $('#A_expenditure_code').val("");

        $('#div_npmu').show();
        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();
        $('#Div_comP_b_b').show();
        $('#div_form_insert').hide();
        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);
        $('#A_Method_of_Selection').prop('disabled', false);  //akash

        $('#div_npmu').hide();
        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();
        $('#Div_comP_b_b').show();
        $('#div_form_insert').show();

        Main_Statename = awp_agency_state_name;
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Agency_StateWise_AgencyInfo',
            data: { 'awp_agency_state_name': awp_agency_state_name },
            dataType: 'JSON',
            success: function (data) {
                $('#Finacial_Year').val("0");
                $('#Finacial_Month').val("0");
                $('#Finacial_Year1').val("0");
                $('#Finacial_Month1').val("0");
                $('#fin_month').val("0");
                $('#fin_year').val("0");
                $('#A_cumulative_sum').val("");
                $('#WorkActivity_A_Form').val("0");
                //    $('#A_Category_of_Procurement').val("0");
                $('#A_sub_component_id').val("");
                $('#A_component_id').val("");
                $('#A_activity_id').val("");
                $('#A_item_code').val("");
                $('#A_component_budget_head').val("");
                $('#A_expenditure_code').val("");
                //$('#A_Physical').val("");

                $('#A_Financial').val("");

                $('#A_Method_of_Selection').val("0");

                $('#A_Expenditure_Made').val("");
                $('#A_Cumulative_Expenditure').val("");

                $('#WorkActivity_B_Form').val("0");

                $('#B_component_id').val("");

                $('#B_component_budget_head').val("");
                $('#B_expenditure_code').val("");
                $('#B_Expenditure_Made').val("");
                $('#B_Cumulative_Expenditure').val("");
                $('#fin_b_month').val("0");
                $('#fin_b_year').val("0");
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                //4190

                PHP_FN_Info();

                PHP_FN_Info_B_Form();
                PHP_DropDown_Info();

                PHP_FN_A_Table_Info();

                PHP_FN_B_Table_Info();


                if (data.length != 0) {
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);

                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name1').text("All States");
                        $('#nodal_agency_name').text("All States");
                        $('#A_Method_of_Selection').prop('disabled', false);  //akash

                    }
                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name1').text("NPMU (Delhi)");
                        $('#nodal_agency_name').text("NPMU (Delhi)");
                        //$('#A_Method_of_Selection').prop('disabled', true); //akash

                    }

                    if (Main_Statename != "NPMU")  //akash
                    {
                        //$('#A_Method_of_Selection').prop('disabled', false);
                    }

                }

            }
        });
    }
    else if (awp_agency_state_name == 'NPMU')  //chetan saini now
    {
        $('#home').show();
        $('#home').addClass("tab-pane fade in active");
        $('#menu1').hide();
        $('#A_sub_component_id').val("");       //01june clearing data before inserting new data
        $('#A_component_id').val("");
        $('#A_activity_id').val("");
        $('#A_item_code').val("");
        $('#A_component_budget_head').val("");
        $('#A_expenditure_code').val("");
        $('#div_npmu').show();
        $('#div_A1').hide();
        $('#div_A2').hide();
        $('#div_A3').hide();
        $('#div_A4').hide();
        $('#div_A5').hide();
        $('#div_A6').hide();
        $('#Div_comP_b_b').hide();
        $('#div_form_insert').show();
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/Npmu_List',
            dataType: 'JSON',
            success: function (data) {

                $("#WorkActivity_A_Form").html("");
                var slection_options = ' <option value="0"> Select Work and Activity </option>';
                $('#WorkActivity_A_Form').html(slection_options);
                for (var i = 0; i < data.length; i++) {
                    $("#WorkActivity_A_Form").append(new Option(data[i].pip_work_activity_name, data[i].pip_work_activity_name));
                }
            }
        });
        Main_Statename = awp_agency_state_name;
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Agency_StateWise_AgencyInfo',
            data: { 'awp_agency_state_name': awp_agency_state_name },
            dataType: 'JSON',
            success: function (data) {
                $('#Finacial_Year').val("0");
                $('#Finacial_Month').val("0");
                $('#Finacial_Year1').val("0");
                $('#Finacial_Month1').val("0");
                $('#fin_month').val("0");
                $('#fin_year').val("0");
                $('#A_cumulative_sum').val("");
                $('#WorkActivity_A_Form').val("0");
                //    $('#A_Category_of_Procurement').val("0");
                $('#A_sub_component_id').val("");
                $('#A_component_id').val("");
                $('#A_activity_id').val("");
                $('#A_item_code').val("");
                $('#A_component_budget_head').val("");
                $('#A_expenditure_code').val("");
                //$('#A_Physical').val("");

                $('#A_Financial').val("");

                $('#A_Method_of_Selection').val("0");

                $('#A_Expenditure_Made').val("");
                $('#A_Cumulative_Expenditure').val("");

                $('#WorkActivity_B_Form').val("0");

                $('#B_component_id').val("");

                $('#B_component_budget_head').val("");
                $('#B_expenditure_code').val("");
                $('#B_Expenditure_Made').val("");
                $('#B_Cumulative_Expenditure').val("");
                $('#fin_b_month').val("0");
                $('#fin_b_year').val("0");
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }

                PHP_FN_Info();
                PHP_FN_Info_B_Form();
                PHP_DropDown_Info();
                PHP_FN_A_Table_Info();
                PHP_FN_B_Table_Info();

                if (data.length != 0) {
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name1').text("All States");
                        $('#nodal_agency_name').text("All States");
                        $('#A_Method_of_Selection').prop('disabled', false);  //akash
                    }
                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name1').text("NPMU (Delhi)");
                        $('#nodal_agency_name').text("NPMU (Delhi)");
                        //$('#A_Method_of_Selection').prop('disabled', true); //akash
                    }
                    if (Main_Statename != "NPMU")  //akash
                    {
                        //$('#A_Method_of_Selection').prop('disabled', false);
                    }
                }
            }
        });
        PHP_FN_Info();
    }
    else if (awp_agency_state_name != "0") {
        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);
        $('#A_Method_of_Selection').prop('disabled', false);  //akash

        $('#div_npmu').hide();
        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();
        $('#Div_comP_b_b').show();
        $('#div_form_insert').show();

        Main_Statename = awp_agency_state_name;
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Agency_StateWise_AgencyInfo',
            data: { 'awp_agency_state_name': awp_agency_state_name },
            dataType: 'JSON',
            success: function (data) {
                $('#Finacial_Year').val("0");
                $('#Finacial_Month').val("0");
                $('#Finacial_Year1').val("0");
                $('#Finacial_Month1').val("0");
                $('#fin_month').val("0");
                $('#fin_year').val("0");
                $('#A_cumulative_sum').val("");
                $('#WorkActivity_A_Form').val("0");
                //    $('#A_Category_of_Procurement').val("0");
                $('#A_sub_component_id').val("");
                $('#A_component_id').val("");
                $('#A_activity_id').val("");
                $('#A_item_code').val("");
                $('#A_component_budget_head').val("");
                $('#A_expenditure_code').val("");
                //$('#A_Physical').val("");

                $('#A_Financial').val("");

                $('#A_Method_of_Selection').val("0");

                $('#A_Expenditure_Made').val("");
                $('#A_Cumulative_Expenditure').val("");

                $('#WorkActivity_B_Form').val("0");

                $('#B_component_id').val("");

                $('#B_component_budget_head').val("");
                $('#B_expenditure_code').val("");
                $('#B_Expenditure_Made').val("");
                $('#B_Cumulative_Expenditure').val("");
                $('#fin_b_month').val("0");
                $('#fin_b_year').val("0");
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                //4190

                PHP_FN_Info();

                PHP_FN_Info_B_Form();
                PHP_DropDown_Info();

                PHP_FN_A_Table_Info();

                PHP_FN_B_Table_Info();


                if (data.length != 0) {
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);

                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name1').text("All States");
                        $('#nodal_agency_name').text("All States");
                        $('#A_Method_of_Selection').prop('disabled', false);  //akash

                    }
                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name1').text("NPMU (Delhi)");
                        $('#nodal_agency_name').text("NPMU (Delhi)");
                        //$('#A_Method_of_Selection').prop('disabled', true); //akash

                    }

                    if (Main_Statename != "NPMU")  //akash
                    {
                        //$('#A_Method_of_Selection').prop('disabled', false);
                    }

                }

            }
        });

    }
    else if (awp_agency_state_name == "0") {
        alert("Please Select Agency");
    }
}


function Expenditure_Sum() {

    $('#A_Cumulative_Expenditure').val("");
    var txtFirstNumberValue = document.getElementById('A_Expenditure_Made').value;
    var txtSecondNumberValue = Expenditure_Made_Value;
    if (txtFirstNumberValue == "") {
        txtFirstNumberValue = 0;
        $('#A_Cumulative_Expenditure').val("");
    }
    if (txtSecondNumberValue == "") {
        txtSecondNumberValue = 0;
    }

    var result = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue);
    if (!isNaN(result)) {
        document.getElementById('A_Cumulative_Expenditure').value = result;
    }
    if (txtFirstNumberValue == "") {
        txtFirstNumberValue = 0;
        $('#A_Cumulative_Expenditure').val("");
    }
}


/*Akash*/
function PHP_FN_A_Table_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/php_and_fn_Info_A_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            a_component = 0;

            $('#PHP_FN_A_Form_Tbl').html("");
            $('#tbl_excel').html("");
            var tr = '';
            
            Expenditure_Made_Value = 0;
            var IEC_Count = 0;
            var Work_Count = 0;
            var Training_Count = 0;
            var POE_Count = 0;
            var LAD_Count = 0;
            var NPMU_Count = 0;
            var IS_CB_1 = 0;
            var IS_CB_2 = 0;
            var IS_CB_3 = 0;

            $('#pip_A4').text("0");
            $('#pip_A3').text("0");
            $('#pip_A6').text("0");
            $('#pip_A2').text("0");
            $('#pip_26').text("0");
            $('#pip_A1_1').text("0");
            $('#pip_A1_2').text("0");
            $('#pip_A1_3').text("0");
            $('#pip_A5').text("0");

            Comonent_A_Sum = 0;
            //Comonent_A_Sum_test = 0;
            //var Component_A = 0;

            var Sum_1 = 0;
            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {
                        var expenditure_made = 0;
                        a_component += 1;
                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                            Expenditure_Made_Value += parseFloat(data[i].expenditure_made);
                            var SS = parseFloat(data[i].expenditure_made).toFixed(6);
                            expenditure_made = parseFloat(SS);
                            comulative_mode_val = parseFloat(SS);
                            Sum_1 += parseFloat(SS);
                        }
                        var comulative_mode_val = 0;
                        if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {

                            if (data[i].activity_id == "A4.1") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    IEC_Count += SS;
                                    Comonent_A_Sum += SS;
                                }


                            }
                            if (data[i].activity_id == "A2.1") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    POE_Count += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }


                            //if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                            //    var SS = parseFloat(data[i].expenditure_made);
                            //    Comonent_A_Sum += SS;

                            //}


                            if (data[i].activity_id == "A3.1") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Work_Count += SS;
                                    Comonent_A_Sum += SS;

                                }
                            }
                            if (data[i].activity_id == "A5.1") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Training_Count += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }
                            if (data[i].activity_id == "A6.1") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    LAD_Count += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }
                            if (data[i].activity_id == "26.02") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    NPMU_Count += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }
                            if (data[i].activity_id == "A1.1") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    IS_CB_1 += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }
                            if (data[i].activity_id == "A1.2") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    IS_CB_2 += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }
                            if (data[i].activity_id == "A1.3") {
                                if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    IS_CB_3 += SS;
                                    Comonent_A_Sum += SS;
                                }
                            }
                        }

                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Component_A = data[i].cumulative_expenditure;
                        }
                      
                        if ("20241126" == formattedDateaa) {
                            if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in') {
                                if (data[i].fyyear == "2024") {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';


                                }
                                else {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"disabled><i class="fa fa-trash"></i></button></td></tr>';


                                }
                            }
                        }
                        else {
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" readonly  /> </td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" readonly /> </td >' +
                                    //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                    '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                    '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                    '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                    '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';



                            }
                            else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" readonly  /> </td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" readonly /> </td >' +
                                    //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                    '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                    '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                    '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                    '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';


                            }
                            else {
                                tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                    //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                    '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                    '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                    '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                    '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"disabled><i class="fa fa-trash"></i></button></td></tr>';


                            }
                        }

                    }

                }


            }
            $('#pip_A4').text(IEC_Count.toFixed(2));
            $('#pip_A3').text(Work_Count.toFixed(2));
            $('#pip_A6').text(LAD_Count.toFixed(2));
            $('#pip_A2').text(POE_Count.toFixed(2));
            $('#pip_26').text(NPMU_Count.toFixed(2));
            $('#pip_A1_1').text(IS_CB_1.toFixed(2));
            $('#pip_A1_2').text(IS_CB_2.toFixed(2));
            $('#pip_A1_3').text(IS_CB_3.toFixed(2));
            $('#pip_A5').text(Training_Count.toFixed(2));
            // var Component_A = Service_Count + Goods_Count + Work_Count + Training_Count;
            //alert(Comonent_A_Sum_test);
            $('#Component_A').text(parseFloat(Comonent_A_Sum).toFixed(2) + " Cr.");
            if (tr == '') {
                tr = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
                tr_excel = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
            }

            $('#PHP_FN_A_Form_Tbl').html(tr);
         
            //if (Email == 'wbataljal@gmail.com') {
            //    $('.disable_ph_btn').prop('disabled', true);
            //}
            if (Email == 'kirannayyar95@gmail.com' || Email == 'groundwater.atalbhujal@gmail.com') {
                $('.disable_ph_btn').prop('disabled', false);
            } else if (Access_Auth == 'readonly') {
                $('.disable_ph_btn').prop('disabled', true);
            }
           

        }
    });
}

// PIP EDIT and DELETE
function cancelcomp_A_php_fn(i) {
    $('#hidephp_fn_' + i).show();
    $('#trphp_fn' + i).hide();
}
function editrowcomp_A_php_fn(i) {
    $('#trphp_fn' + i).show();
    $('#hidephp_fn_' + i).hide();
}
function updatecomp_A_php_fn(DID, i) {

    var financial_awp = $('#financial_awp' + i).val();
    var expenditure_code = $('#expenditure_code' + i).val();
    var expenditure_made = $('#expenditure_made' + i).val();
    var cumulative_expenditure = $('#cumulative_expenditure' + i).val();

    if (financial_awp == "" || financial_awp == null) {
        financial_awp = 0;
    }
    if (expenditure_code == "" || expenditure_code == null) {
        expenditure_code = 0;
    }
    if (expenditure_made == "" || expenditure_made == null) {
        expenditure_made = 0;
    }
    if (cumulative_expenditure == "" || cumulative_expenditure == null) {
        cumulative_expenditure = 0;
    }

    var obj = {};
    obj.state_name = $('#fin_statename' + i).val();
    obj.component_id = $('#component_id' + i).val();
    obj.sub_component_id = $('#sub_component_id' + i).val();
    obj.activity_id = $('#activity_id' + i).val();
    obj.item_code = $('#item_code' + i).val();

    obj.activity_name = $('#activity_name' + i).val();
    obj.financial_awp = financial_awp;
    obj.producrment_selection = $('#producrment_selection' + i).val();
    // obj.financial_awp = $('#financial_awp1' + i).val();
    obj.category_of_procurement = $('#category_of_procurement' + i).val();

    obj.component_budget_head = $('#component_budget_head' + i).val();
    obj.expenditure_code = expenditure_code;
    obj.expenditure_made = expenditure_made;
    obj.cumulative_expenditure = cumulative_expenditure;
    obj.fin_year = $('#fin_year' + i).val();
    obj.fin_month = $('#fin_month' + i).val();
    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/updatecomp_A_php_fn',

        data: "{'comp_A_php_fn_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            PHP_FN_A_Table_Info();
        }
    });
}

function deletecomp_A_php_fn(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/deletecomp_A_php_fn',

        data: "{'comp_A_php_fn_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            PHP_FN_A_Table_Info();
        }
    });
}



function PHP_FN_Info() {        //prateek

    var State = "";
    if (Main_Statename == "ALL") {
        State = "NPMU";
    } else {
        State = Main_Statename;
    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Proc_Activity_Info',
        data: {},
        dataType: 'JSON',
        success: function (data) {

            var slection_options = ' <option value="0">Select Method of Selection/ Procurement</option>';
            var slection_options_Category = '<option value="0">Select Category of Procurement</option>';

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].category_type == "producrment_selection") {
                        slection_options += '<option value="' + data[i].category_name + '"> ' + data[i].category_name + ' </option>';
                    }

                    if (data[i].category_type == "category_of_procurement") {
                        slection_options_Category += '<option value="' + data[i].category_name + '"> ' + data[i].category_name + ' </option>';
                    }
                }
            }

            $('#category_of_procurement').html(slection_options_Category);
            $('#A_Method_of_Selection').html(slection_options);

        }
    });
}



function PHP_DropDown_Info() { //here 

    var State = "";
    if (Main_Statename == "NPMU") {
        State = "NPMU";
    } else {
        State = Main_Statename;
    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PHP_DropDown_Info',
        data: { 'StateName': State },
        dataType: 'JSON',
        success: function (data) {


            var slection_options = ' <option value="0"> Select Work and Activity </option>';

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].activity_name != "") {
                        slection_options += '<option value="' + data[i].activity_name + '"> ' + data[i].activity_name + ' </option>';
                    }
                }
            }
            $('#WorkActivity_A_Form').html(slection_options);

        }
    });
}
var A_Form_WorkActivityName = "";
//function WorkActivity_A_Form_Dropdown() { //prateekdropdown

//    var WorkActivity = $('#WorkActivity_A_Form').val();
//    $('#fin_year').val('0');
//    $('#A_Financial').val('');
//    if (WorkActivity != "0") {
//        A_Form_WorkActivityName = WorkActivity;
//        $.ajax({
//            type: 'GET',
//            contentType: 'application/json; chatset=utf-8',
//            url: '/mis_new/WorkActivity_A_Form_Dropdown_Info',
//            data: { 'WorkActivity': WorkActivity },
//            dataType: 'JSON',
//            success: function (data) {




//                PHP_FN_Info();
//                if (data.length != 0) {
//                    for (var i = 0; i < data.length; i++) {

//                        if (Main_Statename != "ALL") {
//                            if (data[i].state_name == Main_Statename) {
//                                $('#A_component_id').val(data[i].component_id);
//                                $('#A_sub_component_id').val(data[i].sub_component_id);
//                                $('#A_activity_id').val(data[i].activity_id);
//                                $('#A_item_code').val(data[i].item_code);
//                                $('#A_component_budget_head').val(data[i].component_budget_head);
//                                $('#A_expenditure_code').val(data[i].expenditure_code);

//                            }
//                        }

//                        else {
//                            $('#A_component_id').val(data[i].component_id);
//                            $('#A_sub_component_id').val(data[i].sub_component_id);
//                            $('#A_activity_id').val(data[i].activity_id);
//                            $('#A_item_code').val(data[i].item_code);
//                            $('#A_component_budget_head').val(data[i].component_budget_head);
//                            $('#A_expenditure_code').val(data[i].expenditure_code);

//                        }

//                        //alert(data[2].category);
//                        $("#Category_of_Procurement").val(data[i].category);

//                    }



//                }
//                else {
//                    $('#A_component_id').val('');
//                    $('#A_sub_component_id').val('');
//                    $('#A_activity_id').val('');
//                    $('#A_item_code').val('');
//                    $('#A_component_budget_head').val('');
//                    $('#A_expenditure_code').val('');

//                }

//                //Financial_values_Info_Awp();



//            }
//        });
//    }
//    else {
//        alert("Please Select Work and Activity");
//    }
//}


function WorkActivity_A_Form_Dropdown() { //01june

    var WorkActivity = $('#WorkActivity_A_Form').val();
    var state_name = $('#awp_agency_state_name_1').val();

    $('#fin_year').val('0');
    $('#A_Financial').val('');
    if (WorkActivity != "0") {
        A_Form_WorkActivityName = WorkActivity;
        if (state_name != "NPMU") {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/WorkActivity_A_Form_Dropdown_Info',
                data: { 'WorkActivity': WorkActivity },
                dataType: 'JSON',
                success: function (data) {


                    PHP_FN_Info();
                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {

                            if (Main_Statename != "ALL") {
                                if (data[i].state_name == Main_Statename) {
                                    $('#A_component_id').val(data[i].component_id);
                                    $('#A_sub_component_id').val(data[i].sub_component_id);
                                    $('#A_activity_id').val(data[i].activity_id);
                                    $('#A_item_code').val(data[i].item_code);
                                    $('#A_component_budget_head').val(data[i].component_budget_head);
                                    $('#A_expenditure_code').val(data[i].expenditure_code);

                                }
                            }

                            else {

                                $('#A_component_id').val(data[i].component_id);
                                $('#A_sub_component_id').val(data[i].sub_component_id);
                                $('#A_activity_id').val(data[i].activity_id);
                                $('#A_item_code').val(data[i].item_code);
                                $('#A_component_budget_head').val(data[i].component_budget_head);
                                $('#A_expenditure_code').val(data[i].expenditure_code);

                            }

                            //alert(data[2].category);
                            $("#category_of_procurement").val(data[i].category);

                        }



                    }
                    else {
                        $('#A_component_id').val('');
                        $('#A_sub_component_id').val('');
                        $('#A_activity_id').val('');
                        $('#A_item_code').val('');
                        $('#A_component_budget_head').val('');
                        $('#A_expenditure_code').val('');

                    }

                    //Financial_values_Info_Awp();



                }
            });

        }
        else {

            //if npmu 
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/Npmu_List_Show',
                data: { 'WorkActivity': WorkActivity },
                dataType: 'JSON',
                success: function (data) {

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {


                            $('#A_component_id').val(data[i].pip_component_id);
                            $('#A_sub_component_id').val(data[i].pip_sub_component_id);
                            $('#A_activity_id').val(data[i].pip_activity_id);
                            $('#A_item_code').val(data[i].pip_item_code);
                            $("#category_of_procurement").val('');
                            //$('#A_component_budget_head').val(data[i].component_budget_head);
                            //$('#A_expenditure_code').val(data[i].expenditure_code);



                        }
                    }

                }
            });
        }

    } else {
        alert("Please Select Work and Activity");
    }
}


var Fin_Year = "";

function Financial_values_Info_Awp() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            var fin_year = $('#fin_year').val();
            $('#A_Financial').val('');
            var ss = $('#WorkActivity_A_Form').val();
            if (fin_year != "0") {
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].awp_workactivity == ss && data[i].awp_fin_year == fin_year) {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                $('#A_Financial').val(data[i].awp_financial_year_20_21);
                            }
                        }
                    }
                }
                else {
                    $('#A_Financial').val('');
                }
            } else {
                alert("Please Select Year");
            }
            Fin_Year = "";


        }
    });


}


function Get_Month_Number(month) {

    var month_num = 0;
    switch (month) {
        case "April":
            month_num = 4;
            break;
        case "May":
            month_num = 5;
            break;
        case "June":
            month_num = 6;
            break;
        case "July":
            month_num = 7;
            break;
        case "August":
            month_num = 8;
            break;
        case "September":
            month_num = 9;
            break;
        case "October":
            month_num = 10;
            break;
        case "November":
            month_num = 11;
            break;
        case "December":
            month_num = 12;
            break;
        case "January":
            month_num = 1;
            break;
        case "February":
            month_num = 2;
            break;
        case "March":
            month_num = 3;
            break;
    }
    return month_num;
}
function FinYear_Awp(Email) {

    Fin_Year = $("#fin_year").val();
    validate_month(Email)
    if (Fin_Year != "0") {
        Financial_values_Info_Awp();
    } else {
        Fin_Year = "";
    }

}

function validate_month(Email) {
  
    var select_month = $('#fin_month').val();
    var select_month_num = Get_Month_Number(select_month)
    var select_Year = $("#fin_year").val();

    $('#a_form_save').prop('disabled', false);
    if (select_month_num == mm && select_Year == fiscalyear) {
        $('#a_form_save').prop('disabled', false);
    }
    else if (dd <= fix_Date && select_month_num == mm - 1 && select_Year == fiscalyear) {
        $('#a_form_save').prop('disabled', false);
    }
    else {
        $('#a_form_save').prop('disabled', true);
        if (select_Year == "2023-24" && select_month_num == "3") {
            if ("20240416" <= formattedDateaa) {
                $('#a_form_save').prop('disabled', true);
             
            }
            else {
                $('#a_form_save').prop('disabled', false);
                
            }

        }
        
        

        

    }
    if (mm == 1) {
        mn = 13;
        if (dd <= fix_Date && select_month_num == mn - 1 && select_Year == fiscalyear) {
            $('#a_form_save').prop('disabled', false);
        }
    }
    if (Email == 'kirannayyar95@gmail.com'|| Email == 'groundwater.atalbhujal@gmail.com') {
        $('#a_form_save').prop('disabled', false);
    }
    if ("20241126" == formattedDateaa) {
        if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in') {
            if (select_Year == "2024-25") {
                if (select_month_num != 0 && select_month_num != 12 ) {
                    $('#a_form_save').prop('disabled', false);
                }
                else {
                    $('#a_form_save').prop('disabled', true);
                }
            }
            else {
                $('#a_form_save').prop('disabled', true);
            }

        }
    }
    if (Access_Auth == 'readonly') {
        $('#a_form_save').prop('disabled', true);
        if (select_Year == "2023-24" && select_month_num == "3") {
            if ("20240406" <= formattedDateaa) {
                $('#a_form_save').prop('disabled', true);

            }
            else {
                $('#a_form_save').prop('disabled', false);

            }

        }
       
    }
    if (Email == 'no-access' && select_Year == '2023-24' && (select_month == 'September' || select_month == 'October')) {
        $('#a_form_save').prop('disabled', false);
    }
    if (select_Year == "2024-25" && select_month_num == "3") {

        $('#a_form_save').prop('disabled', true);
    }
}

function Save_A_Form_Info(State, StateOfficer) {

    var i = 0;
    var fin_year = $("#fin_year").val();
    var fin_month = $("#fin_month").val();
    var WorkActivity = $('#WorkActivity_A_Form').val();

    var A_Category_of_Procurement = $('#Category_of_Procurement').val();




    var A_Method_of_Selection = $('#A_Method_of_Selection').val();
    var Category_of_proc = $('#category_of_procurement').val();

    if (Main_Statename == "" || Main_Statename == undefined || Main_Statename == "0" || Main_Statename == null) {
        i = 1;
        alert("Please Select StateName");
    }
    else if (WorkActivity == "0" || WorkActivity == null) {
        i = 1;
        alert("Please Select Work and Activity");
    }
    else if (Category_of_proc == "0" || Category_of_proc == null) {
        i = 1;
        alert("Please Select Category of Procurement");
    }

    else if (fin_year == "0") {
        i = 1;
        alert("Please Select Financial Year");
    } else if (fin_month == "0") {
        i = 1;
        alert("Please Select Financial Month");
    }
    else if (A_Category_of_Procurement == "0") {
        i = 1;
        alert("Please Select Category of Procurement (As categorised in PP)");
    }
    //else if (A_Method_of_Selection == "0") {
    //    i = 1;
    //    alert("Please Select Method of Selection/ Procurement (PP)");
    //}

    if (i == 0) {
        var obj = {};
        if (StateOfficer == "State Level Nodal Officer") {
            obj.state_name = State;
        } else {
            obj.state_name = $('#awp_agency_state_name_1').val();
        }

        obj.activity_name = $('#WorkActivity_A_Form').val();
        obj.fin_agency_name = Main_Statename;
        obj.fin_officer_name = $('#nodal_agency_name').text();
        obj.sub_component_id = $('#A_sub_component_id').val();
        obj.component_id = $('#A_component_id').val();
        obj.activity_id = $('#A_activity_id').val();
        obj.item_code = $('#A_item_code').val();
        obj.component_budget_head = $('#A_component_budget_head').val();
        obj.expenditure_code = $('#A_expenditure_code').val();
        //obj.physical_awp  = $('#A_Physical').val();

        obj.financial_awp = $('#A_Financial').val();

        obj.producrment_selection = $('#A_Method_of_Selection').val();
        obj.category_of_procurement = $('#category_of_procurement').val();
        obj.expenditure_made = $('#A_Expenditure_Made').val();

        obj.cumulative_expenditure = $('#A_Cumulative_Expenditure').val();
        obj.cumulative_sum = $('#A_cumulative_sum').val();
        obj.fin_month = $('#fin_month').val();
        obj.fin_year = $('#fin_year').val();

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_PHP_FN_A_Form_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#fin_month').val("0");
                $('#fin_year').val("0");
                $('#A_cumulative_sum').val("");
                $('#WorkActivity_A_Form').val("0");
                //      $('#A_Category_of_Procurement').val("0");
                $('#A_sub_component_id').val("");
                $('#A_component_id').val("");
                $('#A_activity_id').val("");
                $('#A_item_code').val("");
                $('#A_component_budget_head').val("");
                $('#A_expenditure_code').val("");
                //$('#A_Physical').val("");

                $('#A_Financial').val("");

                $('#A_Method_of_Selection').val("0");

                $('#A_Expenditure_Made').val("");

                $('#A_Cumulative_Expenditure').val("");
                $('#Category_of_Procurement').val("");
                SessionInfo1();
                PHP_FN_A_Table_Info();
                PHP_FN_Info();

            }

        });
    }
}

//B Form





function B_Expenditure_Sum() {

    var B_Expenditure_Made = $('#B_Expenditure_Made').val();
    if (B_Expenditure_Made == "") {

        B_Expenditure_Made = 0;
    }

    var Sum = Expenditure_Made_B_Value + parseFloat(B_Expenditure_Made);
    $('#B_Cumulative_Expenditure').val(Sum.toFixed(2));
}

/*Akash*/
function PHP_FN_B_Table_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/php_and_fn_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            b_component = 0;
            var tr = '';
            $('#PHP_FN_B_Form_Tbl').html("");
            var Prof_non_con_Count = 0;
            var Equips_count = 0;
            var Works = 0;
            var Activities = 0;
            var Training = 0;
            var total_amt = 0;
            var Component_B = 0;
            Comonent_B_Sum = 0;
            Expenditure_Made_B_Value = 0;
            var Sum_1 = 0;
            console.table(data);
            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {

                        var expenditure_made = 0;
                        b_component += 1;
                        var Expenditure_Made_val = 0;
                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                            expenditure_made = parseFloat(data[i].expenditure_made).toFixed(2);
                            Expenditure_Made_B_Value += expenditure_made;
                            Expenditure_Made_val = parseFloat(expenditure_made);
                            Sum_1 += parseFloat(expenditure_made);

                        }
                        if (data[i].dli_amt != null && data[i].dli_amt != "") {
                            var dli_amount = parseFloat(data[i].dli_amt);
                            total_amt = total_amt + dli_amount;

                        }

                        if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                            Component_B = data[i].cumulative_expenditure;
                        }


                        if (data[i].component_budget_head != null && data[i].component_budget_head != "") {


                            if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Prof_non_con_Count = Prof_non_con_Count + SS;
                                    Comonent_B_Sum += SS;
                                    alert(Prof_non_con_Count)
                                }

                            }
                            else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Prof_non_con_Count = Prof_non_con_Count + SS;
                                    Comonent_B_Sum += SS;
                                }

                            }
                            else if (data[i].component_budget_head == "Grant in Aid General/Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Prof_non_con_Count = Prof_non_con_Count + SS;
                                    Comonent_B_Sum += SS;
                                }

                            }
                            else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Prof_non_con_Count = Prof_non_con_Count + SS;
                                    Comonent_B_Sum += SS;

                                }

                            }


                            if (data[i].component_budget_head == "Grant in Aid General/Equipment & System") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Equips_count = Equips_count + SS;
                                    Comonent_B_Sum += SS;
                                }

                            }

                            if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Works = Works + SS;
                                    Comonent_B_Sum += SS;
                                }

                            }

                            if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Activities = Activities + SS;
                                    Comonent_B_Sum += SS;
                                }

                            }

                            if (data[i].component_budget_head == "Grant in Aid General/Training") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Training += SS;
                                    Comonent_B_Sum += SS;
                                }

                            }

                        }
                      
                        if ("20241126" == formattedDateaa) {
                            if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in') {
                                if (data[i].fin_b_year == "2024-25") {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" /> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary " onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger " onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                else {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" /> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                }
                            }
                        }
                        else {
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" /> </td >' +

                                    '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                    '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                    '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                    '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';
                            }
                            else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" /> </td >' +

                                    '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                    '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                    '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                    '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                            }
                            else {
                                tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" /> </td >' +

                                    '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                    '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                    '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                    '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            }
                        }

                    }

                }
            }



            $('#total_amt_recieved').val(total_amt.toFixed(2));
            $('#Prof_non_con_Count').text(parseFloat(Prof_non_con_Count).toFixed(2));
            $('#Equips_count').text(parseFloat(Equips_count).toFixed(2));
            $('#Works_B_Count').text(parseFloat(Works).toFixed(2));
            $('#Activities_B_Count').text(parseFloat(Activities).toFixed(2));
            $('#Training_B_Count').text(parseFloat(Training).toFixed(2));
            //var Component_B = Prof_non_con_Count + Equips_count + Works + Activities + Training;
            
            //var Component_B = parseFloat(parseFloat(Prof_non_con_Count).toFixed(2)) + parseFloat(parseFloat(Equips_count).toFixed(2)) + parseFloat(parseFloat(Works).toFixed(2))
            //    + parseFloat(parseFloat(Activities).toFixed(2)) + parseFloat(parseFloat(Training).toFixed(2));
            //$('#Component_B').text(parseFloat(Component_B).toFixed(2) + " Cr.");
            $('#Component_B').text(parseFloat(Comonent_B_Sum).toFixed(2) + " Cr.");

            // $('#total_amt_recieved').val(total_amt);
            if (tr == '') {
                tr = '<tr colspan="15"><td colspan="15" style="text-align: center;">No Data</td></tr>';
            }

            $('#PHP_FN_B_Form_Tbl').html(tr);
            //if (Email == 'wbataljal@gmail.com') {
            //    $('.disable_ph_btn').prop('disabled', true);
            //}
            if (Email == 'kirannayyar95@gmail.com' || Email == 'groundwater.atalbhujal@gmail.com') {
                $('.disable_ph_btn').prop('disabled', false);
            } else if (Access_Auth == 'readonly') {
                $('.disable_ph_btn').prop('disabled', true);
            }
        }
    });
}


//PIP Edit and Delete B component

function cancelcomp_B(i) {
    $('#hideAO1_' + i).show();
    $('#trAO1' + i).hide();
}
function editrowcomp_B(i) {

    $('#trAO1' + i).show();
    $('#hideAO1_' + i).hide();
}
function PHP_FN_Info_B_Form() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/php_and_fn_Activity_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].activity_name != "") {
                        slection_options += '<option value="' + data[i].activity_name + '"> ' + data[i].activity_name + ' </option>';
                    }
                }
            }
            $('#WorkActivity_B_Form').html(slection_options);

        }
    });
}


function WorkActivity_B_Form_Dropdown() {
    var WorkActivity = $('#WorkActivity_B_Form').val();

    if (WorkActivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/WorkActivity_B_Form_Dropdown_Info',
            data: { 'WorkActivity': WorkActivity },
            dataType: 'JSON',
            success: function (data) {

                if (data.length != 0) {

                    for (var i = 0; i < data.length; i++) {
                        if (Main_Statename != "ALL") {
                            if (data[i].state_name == Main_Statename) {
                                $('#B_component_id').val(data[i].component_id);
                                $('#B_component_budget_head').val(data[i].component_budget_head);
                                $('#B_expenditure_code').val(data[i].expenditure_code);
                                $('#B_Expenditure_Made').val(data[i].expenditure_made);
                                $('#B_Cumulative_Expenditure').val(data[i].cumulative_expenditure);
                            }
                        }
                        else {
                            if (data[i].component_id != null) {
                                $('#B_component_id').val(data[i].component_id);
                            }
                            $('#B_component_budget_head').val(data[i].component_budget_head);
                            $('#B_expenditure_code').val(data[i].expenditure_code);
                            $('#B_Expenditure_Made').val(data[i].expenditure_made);
                            $('#B_Cumulative_Expenditure').val(data[i].cumulative_expenditure);
                        }
                    }
                }
                else {
                    $('#B_component_id').val('');

                    $('#B_component_budget_head').val('');
                    $('#B_expenditure_code').val('');
                    $('#B_Expenditure_Made').val('');
                    $('#B_Cumulative_Expenditure').val('');
                }

            }
        });
    }
    else {
        alert("Please Select Work and Activity");
    }
}

function Save_B_Form_Info() {

    var i = 0;
    var WorkActivity = $('#WorkActivity_B_Form').val();
    var fin_month = $('#fin_b_month').val();
    var fin_year = $('#fin_b_year').val();
    /*var dli_sel = $('#dli_selection').val();*/


    if (Main_Statename == "" || Main_Statename == undefined || Main_Statename == "0" || Main_Statename == null) {
        i = 1;
        alert("Please Select StateName");
    }
    else if (fin_year == "0") {
        i = 1;
        alert("Please Select Year");
    }
    else if (WorkActivity == "0") {
        i = 1;
        alert("Pleae Select Work Activity");
    }

    else if (fin_month == "0") {
        i = 1;
        alert("Please Select Month");
    }
    //else if (dli_sel == "0") {
    //    i = 1;
    //    alert("Please Select DLI");
    //}



    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.activity_name = $('#WorkActivity_B_Form').val();
        obj.fin_b_month = $('#fin_b_month').val();
        obj.fin_b_year = $('#fin_b_year').val();
        obj.component_id = $('#B_component_id').val();
        obj.fin_b_agency_name = Main_Statename;
        obj.fin_b_officer_name = $('#nodal_agency_name').text();
        obj.component_budget_head = $('#B_component_budget_head').val();
        obj.expenditure_code = $('#B_expenditure_code').val();
        obj.expenditure_made = $('#B_Expenditure_Made').val();
        obj.cumulative_expenditure = $('#B_Cumulative_Expenditure').val();

        /*obj.dli_selection = $('#dli_selection').val();*/
        //obj.dli_amt = $('#dli_amt').val();
        obj.total_amt_recieved = $('#total_amt_recieved').val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_PHP_FN_B_Form_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }

                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#WorkActivity_B_Form').val("0");

                $('#B_component_id').val("");

                $('#B_component_budget_head').val("");
                $('#B_expenditure_code').val("");
                $('#B_Expenditure_Made').val("");
                $('#B_Cumulative_Expenditure').val("");
                $('#fin_b_month').val("0");
                $('#fin_b_year').val("0");
                //$('#dli_selection').val("0");
                //$('#dli_amt').val("");
                $('#total_amt_recieved').val("");
                SessionInfo1();
                PHP_FN_Info_B_Form();
                PHP_FN_B_Table_Info();
            }

        });
    }


}


var Finacial_Year = "";
var Finacial_Month = "";


function Financial_year() {
    if (Main_Statename != "" && Main_Statename != "0") {
        Finacial_Year = $('#Finacial_Year').val();
        Financial_Progress_Monitoring_Component_A_Report_Year();
        Financial_Progress_Monitoring_Component_B_Report_Year();

    }
    else {
        alert("Please Select Agency Name");
    }
}
function Financial_year1() {

    if (Main_Statename != "" && Main_Statename != "0") {
        Finacial_Year = $('#Finacial_Year1').val();
        Financial_Progress_Monitoring_Component_A_Report_Year();
        Financial_Progress_Monitoring_Component_B_Report_Year();

        if (Finacial_Year == "ALL") {     /*abhi0206*/
            PHP_FN_B_Table_Info();
            PHP_FN_A_Table_Info();
        }

    }
    else {
        alert("Please Select Agency Name");
    }
}

function Financial_Progress_Monitoring_Component_A_Report_Year() {

    if (Main_Statename != "" && Main_Statename != "0") {
        if (Finacial_Year != "0" && Finacial_Year != "") {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/Financial_Progress_Monitoring_Component_A_Report_Year',
                data: { 'Year': Finacial_Year, 'StateName': Main_Statename },
                dataType: 'JSON',
                success: function (data) {

                    var Finacial_Month1 = $('#Finacial_Month1').val();

                    var tr = '';
                    
                    Expenditure_Made_Value = 0;
                    var IEC_Count = 0;
                    var Work_Count = 0;
                    var Training_Count = 0;
                    var POE_Count = 0;
                    var LAD_Count = 0;
                    var NPMU_Count = 0;
                    var IS_CB_1 = 0;
                    var IS_CB_2 = 0;
                    var IS_CB_3 = 0;
                    var Sum_1 = 0;
                    $('#pip_A4').text("0");
                    $('#pip_A3').text("0");
                    $('#pip_A6').text("0");
                    $('#pip_A2').text("0");
                    $('#pip_26').text("0");
                    $('#pip_A1_1').text("0");
                    $('#pip_A1_2').text("0");
                    $('#pip_A1_3').text("0");
                    $('#pip_A5').text("0");

                    Comonent_A_Sum = 0;

                    var count = 0;
                    if (data.length != 0) {

                        for (var i = 0; i < data.length; i++) {

                            if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {
                                var expenditure_made = 0;
                                a_component += 1;
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Expenditure_Made_Value += parseFloat(data[i].expenditure_made);
                                    var SS = parseFloat(data[i].expenditure_made).toFixed(6);
                                    expenditure_made = parseFloat(SS);
                                    comulative_mode_val = parseFloat(SS);
                                    Sum_1 += parseFloat(SS);
                                }
                                var comulative_mode_val = 0;
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {

                                    if (data[i].activity_id == "A4.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IEC_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }


                                    }
                                    if (data[i].activity_id == "A2.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            POE_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }


                                    //if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    //    var SS = parseFloat(data[i].expenditure_made);
                                    //    Comonent_A_Sum += SS;

                                    //}


                                    if (data[i].activity_id == "A3.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Count += SS;
                                            Comonent_A_Sum += SS;

                                        }
                                    }
                                    if (data[i].activity_id == "A5.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A6.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            LAD_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "26.02") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            NPMU_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A1.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IS_CB_1 += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A1.2") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IS_CB_2 += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A1.3") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IS_CB_3 += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                }

                                if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                    Component_A = data[i].cumulative_expenditure;
                                }
                                //Ehtasham

                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';


                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';

                                   

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                   
                                }
                                else {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';

                                   

                                }


                            }

                        }


                    }

                    $('#pip_A4').text(IEC_Count.toFixed(2));
                    $('#pip_A3').text(Work_Count.toFixed(2));
                    $('#pip_A6').text(LAD_Count.toFixed(2));
                    $('#pip_A2').text(POE_Count.toFixed(2));
                    $('#pip_26').text(NPMU_Count.toFixed(2));
                    $('#pip_A1_1').text(IS_CB_1.toFixed(2));
                    $('#pip_A1_2').text(IS_CB_2.toFixed(2));
                    $('#pip_A1_3').text(IS_CB_3.toFixed(2));
                    $('#pip_A5').text(Training_Count.toFixed(2));
                    // var Component_A = Service_Count + Goods_Count + Work_Count + Training_Count;
                    //alert(Comonent_A_Sum_test);
                    $('#Component_A').text(parseFloat(Comonent_A_Sum).toFixed(2) + " Cr.");
                    if (tr == '') {
                        tr = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
                        tr_excel = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
                    }

                    $('#PHP_FN_A_Form_Tbl').html(tr);
                  
                    if (Email == 'kirannayyar95@gmail.com' || Email == 'groundwater.atalbhujal@gmail.com') {
                        $('.disable_ph_btn').prop('disabled', false);
                    } else if (Access_Auth == 'readonly') {
                        $('.disable_ph_btn').prop('disabled', true);
                    }
                    if ("20241126" == formattedDateaa) {
                        if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' && Finacial_Year == '2024-25') {
                            $('.disable_ph_btn').prop('disabled', false);
                        }
                    }
                    //if (Email == 'abhy.maharashtra@gmail.com' && Finacial_Year == '2023-24') {
                    //    $('.disable_ph_btn').prop('disabled', false);
                    //}
                }

            });
        }
        else {
            alert("Please Select Financial Year");
        }
    }
    else {
        alert("Please Select StateName");
    }
}

function Financial_Progress_Monitoring_Component_B_Report_Year() {

    if (Main_Statename != "" && Main_Statename != "0") {
        if (Finacial_Year != "0" && Finacial_Year != "") {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/Financial_Progress_Monitoring_Component_B_Report_Year',
                data: { 'Year': Finacial_Year, 'StateName': Main_Statename },
                dataType: 'JSON',
                success: function (data) {
                    var tr = '';

                    var Prof_non_con_Count = 0;
                    var Equips_count = 0;
                    var Works = 0;
                    var Activities = 0;
                    var Training = 0;
                    var total_amt = 0;
                    var Component_B = 0;
                    Comonent_B_Sum = 0;
                    var count = 0;
                    Expenditure_Made_B_Value = 0;
                    $('#total_amt_recieved').val("0");
                    $('#Prof_non_con_Count').text("0");
                    $('#Equips_count').text("0");
                    $('#Works_B_Count').text("0");
                    $('#Activities_B_Count').text("0");
                    $('#Training_B_Count').text("0");
                    // var Component_B = Prof_non_con_Count + Equips_count + Works + Activities + Training;
                    $('#Component_B').text("0");
                    var Sum_1 = 0;
                    if (data.length != 0) {

                        for (var i = 0; i < data.length; i++) {

                            if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {

                                var expenditure_made = 0;
                                b_component += 1;
                                var Expenditure_Made_val = 0;
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    expenditure_made = parseFloat(data[i].expenditure_made).toFixed(2);
                                    Expenditure_Made_B_Value += expenditure_made;
                                    Expenditure_Made_val = parseFloat(expenditure_made);
                                    Sum_1 += parseFloat(expenditure_made);

                                }
                                if (data[i].dli_amt != null && data[i].dli_amt != "") {
                                    var dli_amount = parseFloat(data[i].dli_amt);
                                    total_amt = total_amt + dli_amount;

                                }

                                if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                    Component_B = data[i].cumulative_expenditure;
                                }


                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {


                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                            alert(Prof_non_con_Count)
                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;

                                        }

                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Equips_count = Equips_count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Works = Works + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Activities = Activities + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training += SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '"readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '"readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '"readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                }

                                else {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statenameb' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_yearb' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_monthb' + i + '" disabled value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_idb' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_nameb' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_headb' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_codeb' + i + '" disabled value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_madeb' + i + '" value="' + Expenditure_Made_val + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditureb' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + Expenditure_Made_val + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')"disabled><i class="fa fa-trash"></i></button></td></tr>';

                                }





                                //tr += '<tr><td> ' + (i + 1) + '</td><td>' + data[i].component_id + '</td>' +
                                //    '<td>' + data[i].activity_name + '</td>' +
                                //    '<td>' + data[i].component_budget_head + '</td>' +
                                //    '<td>' + data[i].expenditure_code + '</td><td>' + data[i].expenditure_made + '</td><td>' + data[i].cumulative_expenditure + '</td></tr>';
                            }

                        }
                    }
                    if (tr == '') {
                        tr = '<tr colspan="20"><td colspan="20" style="text-align: center;">No Data</td></tr>';
                    }
                    $('#total_amt_recieved').val(total_amt.toFixed(2));
                    $('#Prof_non_con_Count').text(parseFloat(Prof_non_con_Count).toFixed(2));
                    $('#Equips_count').text(parseFloat(Equips_count).toFixed(2));
                    $('#Works_B_Count').text(parseFloat(Works).toFixed(2));
                    $('#Activities_B_Count').text(parseFloat(Activities).toFixed(2));
                    $('#Training_B_Count').text(parseFloat(Training).toFixed(2));
                    // var Component_B = Prof_non_con_Count + Equips_count + Works + Activities + Training;
                    
                    //var Component_B = parseFloat(parseFloat(Prof_non_con_Count).toFixed(2)) + parseFloat(parseFloat(Equips_count).toFixed(2)) + parseFloat(parseFloat(Works).toFixed(2))
                    //    + parseFloat(parseFloat(Activities).toFixed(2)) + parseFloat(parseFloat(Training).toFixed(2));
                    //$('#Component_B').text(parseFloat(Component_B).toFixed(2) + " Cr.");
                    $('#Component_B').text(parseFloat(Comonent_B_Sum).toFixed(2) + " Cr.");
                    $('#PHP_FN_B_Form_Tbl').html(tr);
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_ph_btn').prop('disabled', true);
                    }
                    if ("20241126" == formattedDateaa) {
                        if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' && Finacial_Year == '2024-25') {
                            $('.disable_ph_btn').prop('disabled', false);
                        }
                    }
                    //if (Email == 'abhy.maharashtra@gmail.com' && Finacial_Year == '2023-24') {
                    //    $('.disable_ph_btn').prop('disabled', false);
                    //}
                }

            });
        }
        else {
            alert("Please Select Financial Year");
        }
    }
    else {
        alert("Please Select StateName");
    }
}

function Financial_Month() {

    if (Main_Statename != "" && Main_Statename != "0") {
        Finacial_Month = $('#Finacial_Month').val();
        Financial_Progress_Monitoring_Component_A_Report_Month();
        Financial_Progress_Monitoring_Component_B_Report_Month();
    }
    else {
        alert("Please Select Agency Name");
    }
}

function Financial_Month1() {

    if (Main_Statename != "" && Main_Statename != "0") {
        Finacial_Month = $('#Finacial_Month1').val();
        Financial_Progress_Monitoring_Component_A_Report_Month();
        Financial_Progress_Monitoring_Component_B_Report_Month();
    }
    else {
        alert("Please Select Agency Name");
    }
}

function Financial_Progress_Monitoring_Component_A_Report_Month() {
    
    if (Main_Statename != "" && Main_Statename != "0") {

        if (Finacial_Month != "0" && Finacial_Month != "") {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/Financial_Progress_Monitoring_Component_A_Report_Month',
                data: { 'Month': Finacial_Month, 'Statename': Main_Statename, 'Year': Finacial_Year },
                dataType: 'JSON',
                success: function (data) {

                    var Finacial_Month1 = $('#Finacial_Month1').val();

                    var tr = '';
                    
                    Expenditure_Made_Value = 0;
                    var IEC_Count = 0;
                    var Work_Count = 0;
                    var Training_Count = 0;
                    var POE_Count = 0;
                    var LAD_Count = 0;
                    var NPMU_Count = 0;
                    var IS_CB_1 = 0;
                    var IS_CB_2 = 0;
                    var IS_CB_3 = 0;
                    var Sum_1 = 0;
                    $('#pip_A4').text("0");
                    $('#pip_A3').text("0");
                    $('#pip_A6').text("0");
                    $('#pip_A2').text("0");
                    $('#pip_26').text("0");
                    $('#pip_A1_1').text("0");
                    $('#pip_A1_2').text("0");
                    $('#pip_A1_3').text("0");
                    $('#pip_A5').text("0");

                    Comonent_A_Sum = 0;

                    var count = 0;
                    if (data.length != 0) {

                        for (var i = 0; i < data.length; i++) {

                            if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {
                                var expenditure_made = 0;
                                a_component += 1;
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Expenditure_Made_Value += parseFloat(data[i].expenditure_made);
                                    var SS = parseFloat(data[i].expenditure_made).toFixed(6);
                                    expenditure_made = parseFloat(SS);
                                    comulative_mode_val = parseFloat(SS);
                                    Sum_1 += parseFloat(SS);
                                }
                                var comulative_mode_val = 0;
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {

                                    if (data[i].activity_id == "A4.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IEC_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }


                                    }
                                    if (data[i].activity_id == "A2.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            POE_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }


                                    //if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    //    var SS = parseFloat(data[i].expenditure_made);
                                    //    Comonent_A_Sum += SS;

                                    //}


                                    if (data[i].activity_id == "A3.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Count += SS;
                                            Comonent_A_Sum += SS;

                                        }
                                    }
                                    if (data[i].activity_id == "A5.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A6.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            LAD_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "26.02") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            NPMU_Count += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A1.1") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IS_CB_1 += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A1.2") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IS_CB_2 += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                    if (data[i].activity_id == "A1.3") {
                                        if (data[i].expenditure_made != "NULL" && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            IS_CB_3 += SS;
                                            Comonent_A_Sum += SS;
                                        }
                                    }
                                }

                                if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                    Component_A = data[i].cumulative_expenditure;
                                }
                                //Ehtasham

                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';

                                   

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';

                                   


                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';


                                }

                                else {
                                    tr += '<tr id="trphp_fn' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (i + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_statename' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_month' + i + '" value="' + data[i].fin_month + '" disabled  /> </td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_year' + i + '" value="' + data[i].fin_year + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="sub_component_id' + i + '" value="' + data[i].sub_component_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_id' + i + '" value="' + data[i].activity_id + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="item_code' + i + '" value="' + data[i].item_code + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="financial_awp' + i + '" readonly value="' + data[i].financial_awp + '"  /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="producrment_selection' + i + '" value="' + data[i].producrment_selection + '" disabled /> </td >' +
                                        //'<td class="tdborder"><input type="text" class="form-control" id="financial_awp1' + i + '" value="' + data[i].financial_awp + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '" disabled /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(6) + '" /> </td >' +
                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_A_php_fn(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_php_fn(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                                        '<tr  role="row"  id="hidephp_fn_' + i + '"><td> ' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].fin_month + '</td><td>' + data[i].fin_year + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td><td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td>' +
                                        '<td>' + data[i].activity_name + '</td><td>' + data[i].financial_awp + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '</td><td>' + data[i].category_of_procurement + '</td><td>' + data[i].component_budget_head + '</td>' +
                                        '<td>' + data[i].expenditure_code + '</td><td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(6) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_php_fn(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_A_php_fn(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';

                                   

                                }


                            }

                        }


                    }

                    $('#pip_A4').text(IEC_Count.toFixed(2));
                    $('#pip_A3').text(Work_Count.toFixed(2));
                    $('#pip_A6').text(LAD_Count.toFixed(2));
                    $('#pip_A2').text(POE_Count.toFixed(2));
                    $('#pip_26').text(NPMU_Count.toFixed(2));
                    $('#pip_A1_1').text(IS_CB_1.toFixed(2));
                    $('#pip_A1_2').text(IS_CB_2.toFixed(2));
                    $('#pip_A1_3').text(IS_CB_3.toFixed(2));
                    $('#pip_A5').text(Training_Count.toFixed(2));
                    // var Component_A = Service_Count + Goods_Count + Work_Count + Training_Count;
                    //alert(Comonent_A_Sum_test);
                    $('#Component_A').text(parseFloat(Comonent_A_Sum).toFixed(2) + " Cr.");
                    if (tr == '') {
                        tr = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
                        tr_excel = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
                    }

                    $('#PHP_FN_A_Form_Tbl').html(tr);
                  
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_ph_btn').prop('disabled', true);
                    }
                    if (Email == 'kirannayyar95@gmail.com' || Email == 'wbataljal@gmail.com' || Email == 'groundwater.atalbhujal@gmail.com') {
                        $('.disable_ph_btn').prop('disabled', false);
                    } else if (Access_Auth == 'readonly') {
                        $('.disable_ph_btn').prop('disabled', true);
                    }
                    if ("20241126" == formattedDateaa) {
                        if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' && Finacial_Year == '2024-25' && Finacial_Month != "0") {
                            $('.disable_ph_btn').prop('disabled', false);
                        }
                    }
                    //if (Email == 'abhy.maharashtra@gmail.com' && Finacial_Year == '2023-24' && Finacial_Month != "0") {
                    //    $('.disable_ph_btn').prop('disabled', false);
                    //}



                    
                }

            });
        }
        else {
            alert("Please Select Financial Month");
        }
    }
    else {
        alert("Please Select StateName");
    }
}


function Financial_Progress_Monitoring_Component_B_Report_Month() {
    if (Main_Statename != "" && Main_Statename != "0") {
        if (Finacial_Month != "0" && Finacial_Month != "") {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/Financial_Progress_Monitoring_Component_B_Report_Month',
                data: { 'Month': Finacial_Month, 'Statename': Main_Statename, 'Year': Finacial_Year },
                dataType: 'JSON',
                success: function (data) {
                    var tr = '';
                    var Prof_non_con_Count = 0;
                    var Equips_count = 0;
                    var Works = 0;
                    var Activities = 0;
                    var Training = 0;
                    var total_amt = 0;
                    var Component_B = 0;
                    Comonent_B_Sum = 0;
                    Expenditure_Made_B_Value = 0;
                    $('#total_amt_recieved').val("0");
                    $('#Prof_non_con_Count').text("0");
                    $('#Equips_count').text("0");
                    $('#Works_B_Count').text("0");
                    $('#Activities_B_Count').text("0");
                    $('#Training_B_Count').text("0");
                    // var Component_B = Prof_non_con_Count + Equips_count + Works + Activities + Training;
                    $('#Component_B').text(parseFloat(Comonent_B_Sum).toFixed(2));
                    var Sum_1 = 0;
                    var count = 0;
                    if (data.length != 0) {
                        var Finacial_Year1 = $('#Finacial_Year1').val();
                        if (Finacial_Year1 == "0") {
                            Fin_Year = "";
                        } else {
                            Fin_Year = Finacial_Year1;
                        }

                        for (var i = 0; i < data.length; i++) {
                            var expenditure_made = 0;
                            if (Fin_Year == "") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    expenditure_made = parseFloat(data[i].expenditure_made).toFixed(2);
                                    Expenditure_Made_B_Value += expenditure_made;
                                    Sum_1 += parseFloat(expenditure_made);
                                }
                                if (data[i].dli_amt != null && data[i].dli_amt != "") {
                                    var dli_amount = parseFloat(data[i].dli_amt);
                                    total_amt = total_amt + dli_amount;

                                }

                                if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                    Component_B = data[i].cumulative_expenditure;
                                }


                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {


                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Prof_non_con_Count = Prof_non_con_Count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Equips_count = Equips_count + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Works = Works + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Activities = Activities + SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training += SS;
                                            Comonent_B_Sum += SS;
                                        }

                                    }

                                }
                                count = count + 1;
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (count + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                }
                                else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (count + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                }

                                else {
                                    tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                        '<td>' + (count + 1) + '</td>' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                        '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                        '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                        '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                        '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                        '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                }
                            }
                            else {

                                if (Fin_Year == data[i].fin_b_year) {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        expenditure_made = parseFloat(data[i].expenditure_made).toFixed(2);
                                        Expenditure_Made_B_Value += expenditure_made;
                                        Sum_1 += parseFloat(expenditure_made);

                                    }
                                    if (data[i].dli_amt != null && data[i].dli_amt != "") {
                                        var dli_amount = parseFloat(data[i].dli_amt);
                                        total_amt = total_amt + dli_amount;

                                    }

                                    if (data[i].cumulative_expenditure != null && data[i].cumulative_expenditure != "") {
                                        Component_B = data[i].cumulative_expenditure;
                                    }


                                    if (data[i].component_budget_head != null && data[i].component_budget_head != "") {


                                        if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Prof_non_con_Count = Prof_non_con_Count + SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }
                                        else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Prof_non_con_Count = Prof_non_con_Count + SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }
                                        else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Prof_non_con_Count = Prof_non_con_Count + SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }
                                        else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Prof_non_con_Count = Prof_non_con_Count + SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }


                                        if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Equips_count = Equips_count + SS;
                                                Comonent_B_Sum += SS;

                                            }

                                        }

                                        if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Works = Works + SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }

                                        if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Activities = Activities + SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }

                                        if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                                var SS = parseFloat(data[i].expenditure_made);
                                                Training += SS;
                                                Comonent_B_Sum += SS;
                                            }

                                        }

                                    }

                                    if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                        tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                            '<td>' + (count + 1) + '</td>' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                            '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                            '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                            '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                            '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                    }
                                    else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                        tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                            '<td>' + (count + 1) + '</td>' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                            '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                            '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                            '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                            '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                    } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                        tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                            '<td>' + (count + 1) + '</td>' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                            '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                            '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                            '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                            '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td></tr>';

                                    }

                                    else {
                                        tr += '<tr id="trAO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                            '<td>' + (count + 1) + '</td>' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_statename' + i + '" value="' + data[i].state_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_year' + i + '" value="' + data[i].fin_b_year + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="fin_b_month' + i + '" value="' + data[i].fin_b_month + '" readonly/> </td >' +

                                            '<td class="tdborder"><input type="text" class="form-control" id="component_id' + i + '" value="' + data[i].component_id + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="activity_name' + i + '" value="' + data[i].activity_name + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="component_budget_head' + i + '" value="' + data[i].component_budget_head + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_code' + i + '" readonly value="' + data[i].expenditure_code + '" readonly/> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="expenditure_made' + i + '" value="' + expenditure_made + '" /> </td >' +
                                            '<td class="tdborder"><input type="text" class="form-control" id="cumulative_expenditure' + i + '" readonly value="' + Sum_1.toFixed(2) + '" /> </td >' +

                                            '<td><button type="button" class="btn btn-primary" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                            '<tr  role="row"  id="hideAO1_' + i + '"> <td>' + (count + 1) + '</td><td> ' + data[i].state_name + '</td><td> ' + data[i].fin_b_year + '</td><td> ' + data[i].fin_b_month + '</td><td> ' + data[i].component_id + '</td><td>' + data[i].activity_name + '</td>' +
                                            '<td>' + data[i].component_budget_head + '</td><td>' + data[i].expenditure_code + '</td>  <td>' + expenditure_made + '</td><td>' + Sum_1.toFixed(2) + '</td><td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_B(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_ph_btn" onclick="deletecomp_B(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                    }

                                }
                            }


                        }
                    }
                    if (tr == '') {
                        tr = '<tr colspan="19"><td colspan="19" style="text-align: center;">No Data</td></tr>';
                    }
                    $('#total_amt_recieved').val(total_amt.toFixed(2));
                    $('#Prof_non_con_Count').text(parseFloat(Prof_non_con_Count).toFixed(2));
                    $('#Equips_count').text(parseFloat(Equips_count).toFixed(2));
                    $('#Works_B_Count').text(parseFloat(Works).toFixed(2));
                    $('#Activities_B_Count').text(parseFloat(Activities).toFixed(2));
                    $('#Training_B_Count').text(parseFloat(Training).toFixed(2));
                    // var Component_B = Prof_non_con_Count + Equips_count + Works + Activities + Training;
                    //var Component_B = parseFloat(parseFloat(Prof_non_con_Count).toFixed(2)) + parseFloat(parseFloat(Equips_count).toFixed(2)) + parseFloat(parseFloat(Works).toFixed(2))
                    //    + parseFloat(parseFloat(Activities).toFixed(2)) + parseFloat(parseFloat(Training).toFixed(2));
                    //$('#Component_B').text(parseFloat(Component_B).toFixed(2) + " Cr.");
                    $('#Component_B').text(parseFloat(Comonent_B_Sum).toFixed(2));
                    $('#PHP_FN_B_Form_Tbl').html(tr);
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_ph_btn').prop('disabled', true);
                    }
                    if (Email == 'kirannayyar95@gmail.com' || Email == 'wbataljal@gmail.com' || Email == 'groundwater.atalbhujal@gmail.com') {
                        $('.disable_ph_btn').prop('disabled', false);
                    } else if (Access_Auth == 'readonly') {
                        $('.disable_ph_btn').prop('disabled', true);
                    }
                    if ("20241126" == formattedDateaa) {
                        if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' && Finacial_Year == '2024-25' && Finacial_Month != "0") {
                            $('.disable_ph_btn').prop('disabled', false);
                        }
                    }
                    //if (Email == 'abhy.maharashtra@gmail.com' && Finacial_Year == '2023-24' && Finacial_Month != "0") {
                    //    $('.disable_ph_btn').prop('disabled', false);
                    //}

                   
                }

            });
        }
        else {
            alert("Please Select Financial Month");
        }
    }
    else {
        alert("Please Select StateName");
    }
}



function updatecomp_B(DID, i) {

    var obj = {};
    obj.component_id = $('#component_idb' + i).val();
    obj.activity_name = $('#activity_nameb' + i).val();
    obj.component_budget_head = $('#component_budget_headb' + i).val();
    obj.expenditure_code = $('#expenditure_codeb' + i).val();
    obj.expenditure_made = $('#expenditure_madeb' + i).val();
    obj.cumulative_expenditure = $('#cumulative_expenditureb' + i).val();
    obj.fin_b_year = $('#fin_b_yearb' + i).val();
    obj.state_name = $('#fin_b_statenameb' + i).val();
    obj.fin_b_month = $('#fin_b_monthb' + i).val();

    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/updatecomp_B_php_fn',

        data: "{'comp_B_php_fn_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);

            PHP_FN_B_Table_Info();
        }
    });
}

function deletecomp_B(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/deletecomp_B_php_fn',

        data: "{'comp_B_php_fn_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            PHP_FN_B_Table_Info();
        }
    });
}



function Get_month_order(month_num) {

    if (month_num == 4) {
        month_order = 1;
    }
    if (month_num == 5) {
        month_order = 2;
    }
    if (month_num == 6) {
        month_order = 3;
    }
    if (month_num == 7) {
        month_order = 4;
    }
    if (month_num == 8) {
        month_order = 5;
    }
    if (month_num == 9) {
        month_order = 6;
    }
    if (month_num == 10) {
        month_order = 7;
    }
    if (month_num == 11) {
        month_order = 8;
    }
    if (month_num == 12) {
        month_order = 9;
    }
    if (month_num == 01) {
        month_order = 10;
    }
    if (month_num == 02) {
        month_order = 11;
    }
    if (month_num == 03) {
        month_order = 12;
    }
    return month_order;
}