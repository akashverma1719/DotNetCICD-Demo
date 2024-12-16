var Main_Statename = "";
var Officer = "";
var Date11 = new Date();
var aa = 0;


var d1 = 0;

$(document).ready(function () {
    Proc_Info();
    SessionInfo1();
    $('#rfp_date_other').hide();


    //$("#completion_date").datepicker({ minDate: 0, dateFormat: 'dd/mm/yy', });

    $("#deadline_date").datepicker({ dateFormat: 'dd/mm/yy', });
    $("#award_date").datepicker({ dateFormat: 'dd/mm/yy', });


    $("#valid_bids").datepicker({ dateFormat: 'dd/mm/yy', });


    $("#final_evaluation_report_date").datepicker({ dateFormat: 'dd/mm/yy', });

    $("#contract_award_date").datepicker({ dateFormat: 'dd/mm/yy', });



    $("#stipulated_date").datepicker({ dateFormat: 'dd/mm/yy', });

    $("#latest_ext_date").datepicker({ dateFormat: 'dd/mm/yy', });

    $("#terminated_date").datepicker({ dateFormat: 'dd/mm/yy', });

    $("#aggreement_sign_date").datepicker({ dateFormat: 'dd/mm/yy', });
    $("#bid_date").datepicker({ dateFormat: 'dd/mm/yy', });

    $('#nomination_rec_date').datepicker({ dateFormat: 'dd/mm/yy' });

    $("#bid_open_date").datepicker({ dateFormat: 'dd/mm/yy', });

    $("#evaluation_report_date").datepicker({ dateFormat: 'dd/mm/yy', });
    $("#bid_evalution_date").datepicker({ dateFormat: 'dd/mm/yy', });

});

var Update_Count = 0;

function SessionInfo1() {

    Main_Statename = "";

    $('#NPMU_DropDown_Selecting_List').hide();
    $('#Agency_AWP_DropDown').hide();
    $('#State_AWP_DropDown').hide();



    $('#workActivity_Other').hide();
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
            else {
                PHP_Agency_Info();
                Proc_DropDown_Info()
                if (data == "Admin") {
                    $('#Agency_AWP_DropDown').show();
                    $('#State_AWP_DropDown').hide();
                    Officer = "Admin";

                    var OPt = '<option value="0">Select PIA</option>';
                    OPt += '<option value = "SPMU" > SPMU</option>';
                    OPt += '<option value="DPMU">DPMU</option>';
                    OPt += '<option value="NPMU">NPMU</option>';
                    OPt += '<option value="Other">Other</option>';
                    $('#rfp_date').html(OPt);

                }
                else {
                    $('#div_form_insert').show();
                    Officer = "State";
                    $('#Agency_AWP_DropDown').hide();
                    $('#State_AWP_DropDown').show();
                    $('#pip_dropdown_state_name').text(data);
                    Main_Statename = data;

                    PHP_Agency_Name();
                    var OPt = '<option value="0">Select PIA</option>';
                    OPt += '<option value = "SPMU" > SPMU</option>';
                    OPt += '<option value="DPMU">DPMU</option>';
                    OPt += '<option value="Other">Other</option>';

                    $('#rfp_date').html(OPt);


                    Proc_report_getdetails();

                }

            }

            var queryString = new Array();
            $(function () {

                if (queryString.length == 0) {
                    if (window.location.search.split('?').length > 1) {
                        var params = window.location.search.split('?')[1].split('&');
                        if (params.length != 0) {

                            var SS = params[0].split('name=');


                            $.ajax({
                                type: 'GET',
                                contentType: 'application/json; chatset=utf-8',
                                url: '/mis_new/Proc_View_getdetails_Info',
                                data: { 'id': SS[1] },
                                dataType: 'JSON',
                                success: function (data) {


                                    $('#div_form_insert').show();
                                    Main_Statename = data[0].state_name;

                                    $('#rfp_date').val(data[0].rfp_date);
                                    if (data[0].rfp_date == "Other") {
                                        $('#rfp_date_other').show();
                                        $('#rfp_date_other').val(data[0].rfp_date_other);
                                    } else if (data[0].rfp_date == "DPMU") {
                                        $('#NPMU_DropDown_Selecting_List').show();
                                        District_List(data[0].district_agency);
                                        $('#district_agency').val(data[0].district_agency);
                                    }
                                    $('#description_service').val(data[0].description_service);
                                    $('#email_office').val(data[0].email_office);
                                    $('#tender_no').val(data[0].tender_no);
                                    $('#estimated_cost').val(data[0].estimated_cost);
                                    $('#bid_date').val(data[0].bid_date);
                                    $('#tender_id').val(data[0].tender_id);
                                    $('#bid_evalution_date').val(data[0].bid_evalution_date);
                                    $('#award_date').val(data[0].award_date);

                                    //$('#completion_date').val(data[0].completion_date);
                                    $('#noof_envelopes').val(data[0].noof_envelopes);
                                    $('#deadline_date').val(data[0].deadline_date);
                                    $('#bid_open_date').val(data[0].bid_open_date);
                                    $('#website_url').val(data[0].website_url);
                                    $('#producrment_selection').val(data[0].producrment_selection);
                                    $('#category_of_procurement').val(data[0].category_of_procurement);


                                    $('#sub_component_id').val(data[0].sub_component_id);
                                    $('#activity_id').val(data[0].activity_id);
                                    $('#item_code').val(data[0].item_code);
                                    $('#component_id').val(data[0].component_id);

                                    $('#name_of_consultant').val(data[0].name_of_consultant);
                                    $('#aggreement_sign_date').val(data[0].aggreement_sign_date);
                                    $('#stipulated_date').val(data[0].stipulated_date);
                                    $('#latest_ext_date').val(data[0].latest_ext_date);
                                    $('#contract_price').val(data[0].contract_price);
                                    $('#expenditure_contract').val(data[0].expenditure_contract);
                                    $('#terminated_date').val(data[0].terminated_date);
                                    $('#proc_remarks').val(data[0].proc_remarks);
                                    $('#valid_bids').val(data[0].valid_bids);
                                    $('#evaluation_report_date').val(data[0].evaluation_report_date);
                                    $('#final_evaluation_report_date').val(data[0].final_evaluation_report_date);
                                    $('#contract_award_date').val(data[0].contract_award_date);
                                    $('#tender_amt').val(data[0].tender_amt);

                                    $("#WorkActivity_Proc_Form").attr("disabled", "true").css('background-color', '#F6F6F6');

                                    $('#WorkActivity_Proc_Form').val(data[0].activity_name);
                                    $('#nomination_ref_no').val(data[0].nomination_ref_no);
                                    $('#nomination_rec_date').val(data[0].nomination_rec_date);
                                    $('#accepted_nomination_amt').val(data[0].accepted_nomination_amt);
                                    Proc_DropDown_Info_set(data[0].activity_name);


                                    // $('#rfp_date_other').hide();
                                    // $('#NPMU_DropDown_Selecting_List').hide();
                                    $('#awp_agency_state_name_1').val(data[0].state_name);
                                    $('#extension_number').val(data[0].extension_number);

                                    $('#nodal_agency_name').text(data[0].agency_name);
                                    Update_Count = data[0].id;

                                }
                            });
                        }


                    }
                }

            });
        }

    });

}


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
            var slection_options_b = '<option value="0">Select State</option>';
            var slection_options1 = '<option value="0">Select State</option>';
            if (data.length != 0) {
                slection_options += '<option value="NPMU">NPMU</option>';
                slection_options_b += '<option value="ALL">ALL</option>';
                slection_options_b += '<option value="NPMU">NPMU</option>';
                for (var i = 0; i < data.length; i++) {
                    if (data[i].observation_type == "pip") {
                        slection_options += '<option value="' + data[i].state_name + '"> ' + data[i].state_name + ' </option>';
                    }
                    if (data[i].observation_type == "awp") {
                        slection_options_b += '<option value="' + data[i].state_name + '"> ' + data[i].state_name + ' </option>';
                    }

                }

                $('#awp_agency_state_name').html(slection_options_b);

                $('#awp_agency_state_name_Report').html(slection_options_b);

                $('#pip_agency_state_name').html(slection_options_b);

                $('#awp_agency_state_name_1').html(slection_options_b);

                var phpStateArr1 = [];

                var slection_options1_ = '<option value="0">Select State</option>';


                for (var i = 0; i < data.length; i++) {
                    if (data[i].observation_type == "pip") {
                        phpStateArr1.push(data[i].state_name)
                    }
                }

                phpStateArr1.sort();
                phpStateArr1.unshift("NPMU");
                phpStateArr1.unshift("ALL");
                $('#awp_agency_state_name_1').append('<option >--Select--</option>')
                $('#awp_agency_state_name_Report').append('<option >--Select--</option>')
                phpStateArr1.forEach((val) => {
                    slection_options1_ += '<option value="' + val + '"> ' + val + ' </option>';

                });

                $('#awp_agency_state_name_Report').html(slection_options1_);
                $('#awp_agency_state_name_1').html(slection_options1_);



                /*akash*/
                //var phpStateArr2 = [];

                //// phpStateArr2.push("ALL");

                //for (var i = 0; i < data.length; i++) {
                //    if (data[i].observation_type == "pip") {
                //        phpStateArr2.push(data[i].state_name)
                //    }
                //}

                //phpStateArr2.sort();
                //phpStateArr2.unshift("NPMU");

                //$('#awp_agency_state_name_12').append('<option >--Select--</option>')
                //phpStateArr2.forEach((val) => {
                //    slection_options1 += '<option value="' + val + '"> ' + val + ' </option>';

                //});

                //$('#awp_agency_state_name_12').html(slection_options1);
            }
        }

    });
}

function PHP_Agency_StateInfo_B_Report() {
    $('#NPMU_DropDown_Selecting_List').hide();
    $('#WorkActivity_Proc_Form').show();
    $('#workActivity_Other').hide();


    var awp_agency_state_name = $('#awp_agency_state_name_Report').val();
    if (awp_agency_state_name != "0") {

        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);
        Main_Statename = awp_agency_state_name;
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Agency_StateWise_AgencyInfo',
            data: { 'awp_agency_state_name': awp_agency_state_name },
            dataType: 'JSON',
            success: function (data) {

                if (data == "Logout") {
                    window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                    $('#component_id').val("");
                    $('#sub_component_id').val("");
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");
                    $('#rfp_date').attr('readonly', false);
                    $('#rfp_date').val("0");
                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    //  $('#completion_date').val("");

                    $('#nodal_agency_name').val("");
                    //PHP_FN_Info();
                    //PHP_FN_Info_B_Form();
                    //PHP_FN_A_Table_Info();
                    //PHP_DropDown_Info();
                    //PHP_FN_B_Table_Info();
                    // Proc_DropDown_Info();
                    Proc_DropDown_Info();
                    Proc_report_getdetails();
                }

                if (Main_Statename == "ALL") {
                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#nodal_agency_name1').text('');
                    $('#nodal_agency_name').text('');
                    $('#component_id').val("");
                    $('#sub_component_id').val("");
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");
                    $('#rfp_date').attr('readonly', false);
                    $('#rfp_date').val("0");

                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    // $('#completion_date').val("");
                    $('#nodal_agency_name1').text("All State's");
                    $('#nodal_agency_name').text("All State's");

                    Proc_DropDown_Info();
                    Proc_report_getdetails();
                }
                if (Main_Statename == "NPMU") {
                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#nodal_agency_name1').text('NPMU (Delhi)');
                    $('#nodal_agency_name').text('NPMU (Delhi)');
                    $('#component_id').val("");
                    $('#sub_component_id').val("");
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");
                    $('#rfp_date').val("NPMU");
                    $('#rfp_date').attr('readonly', true);
                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    // $('#completion_date').val("");



                    Proc_DropDown_Info();
                    Proc_report_getdetails();
                }
            }
        });

    } else {

        alert("Please Select Agency");
    }
}

function PHP_Agency_StateInfo_B() {
    $('#NPMU_DropDown_Selecting_List').hide();
    $('#WorkActivity_Proc_Form').show();
    $('#workActivity_Other').hide();


    var awp_agency_state_name = $('#awp_agency_state_name_1').val();

    if (awp_agency_state_name == 'ALL') {
        $('#div_form_insert').hide();

    }
    else if (awp_agency_state_name == 'NPMU') {
        $('#div_form_insert').show();
    }
    else {
        $('#div_form_insert').show();
    }

    if (awp_agency_state_name != "0") {

        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);
        Main_Statename = awp_agency_state_name;
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Agency_StateWise_AgencyInfo',
            data: { 'awp_agency_state_name': awp_agency_state_name },
            dataType: 'JSON',
            success: function (data) {
                if (data == "Logout") {
                    window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                    $('#component_id').val("");
                    $('#sub_component_id').val("");
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");
                    $('#rfp_date').attr('readonly', false);

                    $('#rfp_date').html('');
                    var OPt = '<option value="0">Select PIA</option>';
                    OPt += '<option value = "SPMU" > SPMU</option>';
                    OPt += '<option value="DPMU">DPMU</option>';
                    OPt += '<option value="Other">Other</option>';

                    $('#rfp_date').html(OPt);

                    $('#rfp_date').val("0");
                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    // $('#completion_date').val("");

                    $('#nodal_agency_name').val("");
                    //PHP_FN_Info();
                    //PHP_FN_Info_B_Form();
                    //PHP_FN_A_Table_Info();
                    //PHP_DropDown_Info();
                    //PHP_FN_B_Table_Info();
                    // Proc_DropDown_Info();
                    Proc_DropDown_Info();
                    Proc_report_getdetails();
                }

                if (Main_Statename == "ALL") {
                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#nodal_agency_name1').text("All State's");
                    $('#nodal_agency_name').text("All State's");
                    $('#component_id').val("");
                    $('#sub_component_id').val("");
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");


                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    //  $('#completion_date').val("");

                    $('#nodal_agency_name').val("");
                    $('#rfp_date').html('');
                    var OPt = '<option value="0">Select PIA</option>';
                    OPt += '<option value = "SPMU" > SPMU</option>';
                    OPt += '<option value="DPMU">DPMU</option>';
                    OPt += '<option value="NPMU">NPMU</option>';
                    OPt += '<option value="Other">Other</option>';
                    $('#rfp_date').html(OPt);

                    Proc_DropDown_Info();
                    Proc_report_getdetails();
                }
                if (Main_Statename == "NPMU") {
                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#nodal_agency_name1').text('NPMU (Delhi)');
                    $('#nodal_agency_name').text('NPMU (Delhi)');
                    $('#component_id').val("");
                    $('#sub_component_id').val("");
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");
                    $('#rfp_date').html('');
                    var OPt = '<option value="NPMU">NPMU</option>';
                    $('#rfp_date').html(OPt);
                    $('#rfp_date').attr('readonly', true);
                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    // $('#completion_date').val("");

                    $('#nodal_agency_name').val("");

                    NPMU_List();
                    //Proc_DropDown_Info();
                    Proc_report_getdetails();
                }
            }
        });

    } else {

        alert("Please Select Agency");
    }
}


function NPMU_List() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Npmu_List',
        dataType: 'JSON',
        success: function (data) {
            $("#WorkActivity_Proc_Form").html("");
            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            $('#WorkActivity_Proc_Form').html(slection_options);
            for (var i = 0; i < data.length; i++) {
                $("#WorkActivity_Proc_Form").append(new Option(data[i].pip_work_activity_name, data[i].pip_work_activity_name));

            }
        }

    });
}
function NPMU_List_set(set_val) {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Npmu_List',
        dataType: 'JSON',
        success: function (data) {
            $("#WorkActivity_Proc_Form").html("");
            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            $('#WorkActivity_Proc_Form').html(slection_options);
            for (var i = 0; i < data.length; i++) {
                $("#WorkActivity_Proc_Form").append(new Option(data[i].pip_work_activity_name, data[i].pip_work_activity_name));

            }
            $("#WorkActivity_Proc_Form").val(set_val);
        }

    });
}

function Proc_DropDown_Info() {
    $('#NPMU_DropDown_Selecting_List').hide();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Proc_DropDown_Info',
        data: {},
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
            slection_options += '<option value="Other"> Other </option>';

            $('#WorkActivity_Proc_Form').html(slection_options);



        }
    });
}
function Proc_DropDown_Info_set(set_value) {
    $('#NPMU_DropDown_Selecting_List').hide();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Proc_DropDown_Info',
        data: {},
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
            slection_options += '<option value="Other"> Other </option>';

            $('#WorkActivity_Proc_Form').html(slection_options);
            $('#WorkActivity_Proc_Form').val(set_value);

            select_producrment_selection();
        }
    });
}

function WorkActivity_Proc_Form_Dropdown() {
    var WorkActivity = $('#WorkActivity_Proc_Form').val();

    if (WorkActivity == "Other") {

        $('#WorkActivity_Proc_Form').hide();
        $('#workActivity_Other').show();
        document.getElementById('component_id').readOnly = false;
        document.getElementById('sub_component_id').readOnly = false;
        document.getElementById('activity_id').readOnly = false;
        document.getElementById('item_code').readOnly = false;
        $('#component_id').val('');
        $('#sub_component_id').val('');
        $('#activity_id').val('');
        $('#item_code').val('');
        Proc_Info();
        //Proc_Info_state();


    } else {

        if (WorkActivity != "0") {
            $('#WorkActivity_Proc_Form').show();
            $('#workActivity_Other').hide();
            document.getElementById('component_id').readOnly = true;
            document.getElementById('sub_component_id').readOnly = true;
            document.getElementById('activity_id').readOnly = true;
            document.getElementById('item_code').readOnly = true;
            $('#component_id').val('');
            $('#sub_component_id').val('');
            $('#activity_id').val('');
            $('#item_code').val('');
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/mis_new/WorkActivity_A_Form_Dropdown_Info',
                data: { 'WorkActivity': WorkActivity },
                dataType: 'JSON',
                success: function (data) {
                    if (data.length != 0) {

                        $('#component_id').val(data[0].component_id);
                        $('#sub_component_id').val(data[0].sub_component_id);
                        $('#activity_id').val(data[0].activity_id);
                        $('#item_code').val(data[0].item_code);


                    }
                    Proc_Info();
                    //Proc_Info_state();

                }
            });
        }
        else {
            alert("Please Select Work and Activity");
        }
    }
}
function Save_A_Form_Info() {

    if (Update_Count != 0) {

        var i = 0;
        var proc_sel = "";
        var selected = $('#producrment_selection').val();
        if (selected == "Others, Pl. Specify") {
            proc_sel = $('#other_input').val();
        } else {
            proc_sel = $('#producrment_selection').val();
        }

        var nomination_ref_no = $('#nomination_ref_no').val();
        var nomination_rec_date = $('#nomination_rec_date').val();
        var category_proc = $('#category_of_procurement').val();
        var WorkActivity = $('#WorkActivity_Proc_Form').val();
        var extension_number = $('#extension_number').val();
        var rfp_date = $('#rfp_date').val();
        var rfp_date_other = $('#rfp_date_other').val();
        var description_service = $('#description_service').val();
        var email_office = $('#email_office').val();
        var tender_no = $('#tender_no').val();
        var estimated_cost = $('#estimated_cost').val();
        var bid_date = $('#bid_date').val();
        var tender_id = $('#tender_id').val();
        var bid_evalution_date = $('#bid_evalution_date').val();
        var award_date = $('#award_date').val();
        // var completion_date = $('#completion_date').val();
        var noof_envelopes = $('#noof_envelopes').val();
        var deadline_date = $('#deadline_date').val();
        var bid_open_date = $('#bid_open_date').val();
        var website_url = $('#website_url').val();
        var accepted_nomination_amt = $('#accepted_nomination_amt').val();

        if (selected == 'Nomination Based') {
            if (noof_envelopes == "0") {
                noof_envelopes = "";
            }
        } else {
            if (tender_no == "") {
                if (selected != "Procurement Through Govt. Agency/Direct Contracting") {
                    i = 1;
                    alert("Please Enter Tender Ref. No");
                    return;
                }

            } else if (bid_date == "") {
                i = 1;
                alert("Please Enter Date of publication of Tender Notice");
                return;
            }
            else if (estimated_cost == "") {
                i = 1;
                alert("Please Enter Estimated Cost (in INR)");
                return;
            }
            else if (website_url == "") {
                i = 1;
                alert("Please Enter E-Procurement Website URL");
                return;
            }
            else if (tender_id == "") {
                i = 1;
                alert("Please Enter Tender Id generated by e-procurement portal");
                return;
            } else if (bid_evalution_date == "") {
                i = 1;
                alert("Please Enter Date of start of sale/download of Bid document");
                return;
            }
            else if (award_date == "") {
                i = 1;
                alert("Please Enter Date of end of sale/download of Bid document");
                return;
            } else if (noof_envelopes == "0") {
                i = 1;
                alert("Please Select Number of envelopes");
                return;
            } else if (deadline_date == "") {
                i = 1;
                alert("Please Enter Last date of submission of bid");
                return;
            }
            else if (bid_open_date == "") {
                i = 1;
                alert("Please Enter Bid opening date");
                return;
            } else if (email_office == "") {
                i = 1;
                alert("Please Enter Email address of concerned Office");
                return;
            }
        }



        if (Main_Statename == "") {
            i = 1;
            alert('Please Select StateName');
        }
        else if (WorkActivity == "0") {
            i = 1;
            alert("Please Select Work and Activity");
        }
        else if (proc_sel == "0") {
            i = 1;
            alert("Please Select Method of Selection/ Procurement (PP)");
        }
        else if (category_proc == "0") {
            i = 1;
            alert("Please Select Category of Procurement (As categorised in PP)");
        }
        else if (description_service == "") {
            i = 1;
            alert("Please Select Description of Service/Goods/Work)");
        }
        else if (rfp_date == "0") {
            i = 1;
            alert("Please Select Office doing Procurement");
        }







        //else if (completion_date == "") {
        //    i = 1;
        //    alert("Please Enter Date of pre-bid meeting");
        //}





        var bids_received = $('#bids_received').val();

        if (i == 0) {
            var obj = {};
            obj.state_name = Main_Statename;
            obj.id = Update_Count;
            obj.component_id = $('#component_id').val();
            obj.sub_component_id = $('#sub_component_id').val();
            obj.activity_id = $('#activity_id').val();
            obj.item_code = $('#item_code').val();
            obj.activity_name = $('#WorkActivity_Proc_Form').val();
            obj.agency_name = $('#nodal_agency_name1').text();
            obj.producrment_selection = proc_sel;
            /*obj.producrment_selection = $('#producrment_selection').val();*/
            obj.category_of_procurement = $('#category_of_procurement').val();
            obj.estimated_cost = $('#estimated_cost').val();
            obj.rfp_date = $('#rfp_date').val();
            obj.tender_no = $('#tender_no').val();
            obj.bid_date = $('#bid_date').val();
            obj.bid_evalution_date = $('#bid_evalution_date').val();
            obj.award_date = $('#award_date').val();
            // obj.completion_date = $('#completion_date').val();
            obj.rfp_date_other = $('#rfp_date_other').val();
            //new columns

            obj.description_service = document.getElementById('description_service').value;
            obj.email_office = $('#email_office').val();
            obj.tender_id = $('#tender_id').val();
            obj.noof_envelopes = noof_envelopes;
            obj.bid_open_date = $('#bid_open_date').val();
            obj.website_url = $('#website_url').val();
            obj.filename = $('#filename').val();
            obj.filepath = $('#filepath').val();
            obj.deadline_date = $('#deadline_date').val();
            obj.valid_bids = $('#valid_bids').val();
            obj.evaluation_report_date = $('#evaluation_report_date').val();
            obj.final_evaluation_report_date = $('#final_evaluation_report_date').val();
            obj.contract_award_date = $('#contract_award_date').val();
            obj.tender_amt = $('#tender_amt').val();
            obj.name_of_consultant = $('#name_of_consultant').val();
            obj.aggreement_sign_date = $('#aggreement_sign_date').val();
            obj.stipulated_date = $('#stipulated_date').val();
            //add new column 
            obj.nomination_ref_no = nomination_ref_no;
            obj.nomination_rec_date = nomination_rec_date;
            obj.accepted_nomination_amt = accepted_nomination_amt;

            if (extension_number == "0.0") {
                obj.extension_number = "0";
            } else if (extension_number == "0") {
                obj.extension_number = "";
            }
            else {
                obj.extension_number = $('#extension_number').val();
            }

            obj.latest_ext_date = $('#latest_ext_date').val();
            obj.contract_price = $('#contract_price').val();
            obj.expenditure_contract = $('#expenditure_contract').val();
            obj.terminated_date = $('#terminated_date').val();
            obj.proc_remarks = $('#proc_remarks').val();
            obj.workactivity_other = $('#workActivity_Other').val();
            obj.district_agency = $('#district_agency').val();
            obj.bids_received = $('#bids_received').val();

            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/mis_new/Update_Proc_Form_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",

                dataType: 'JSON',
                success: function (response) {

                    var files = $("#filename").get(0).files;

                    if (files.length != 0) {

                        proc_milestone_upload_image_update(Update_Count);
                        $('#filename').val("");

                    } else {
                        $('#filename').val("");

                        alert(response);
                    }
                    window.location = "/mis_new/Procurement_milestone_report";

                }

            });
        }
    }
    else {

        var i = 0;
        var proc_sel = "";
        var selected = $('#producrment_selection').val();
        if (selected == "Others, Pl. Specify") {
            proc_sel = $('#other_input').val();
        } else {
            proc_sel = $('#producrment_selection').val();
        }
        var category_proc = $('#category_of_procurement').val();
        var WorkActivity = $('#WorkActivity_Proc_Form').val();
        var extension_number = $('#extension_number').val();
        var rfp_date = $('#rfp_date').val();
        var description_service = $('#description_service').val();
        var email_office = $('#email_office').val();
        var tender_no = $('#tender_no').val();
        var estimated_cost = $('#estimated_cost').val();
        var bid_date = $('#bid_date').val();
        var tender_id = $('#tender_id').val();
        var bid_evalution_date = $('#bid_evalution_date').val();
        var award_date = $('#award_date').val();
        // var completion_date = $('#completion_date').val();
        var noof_envelopes = $('#noof_envelopes').val();
        var deadline_date = $('#deadline_date').val();
        var bid_open_date = $('#bid_open_date').val();
        var website_url = $('#website_url').val();
        var rfp_date_other = $('#rfp_date_other').val();
        var nomination_ref_no = $('#nomination_ref_no').val();
        var nomination_rec_date = $('#nomination_rec_date').val();
        var accepted_nomination_amt = $('#accepted_nomination_amt').val();

        if (selected == 'Nomination Based') {
            if (noof_envelopes == "0") {
                noof_envelopes = "";
            }
        } else {
            if (tender_no == "") {
                if (selected != "Procurement Through Govt. Agency/Direct Contracting") {
                    i = 1;
                    alert("Please Enter Tender Ref. No");
                    return;
                }
            } else if (bid_date == "") {
                i = 1;
                alert("Please Enter Date of publication of Tender Notice");
                return;
            }
            else if (estimated_cost == "") {
                i = 1;
                alert("Please Enter Estimated Cost (in INR)");
                return;
            }
            else if (website_url == "") {
                i = 1;
                alert("Please Enter E-Procurement Website URL");
                return;
            } else if (tender_id == "") {
                i = 1;
                alert("Please Enter Tender Id generated by e-procurement portal");
                return;
            }
            else if (bid_evalution_date == "") {
                i = 1;
                alert("Please Enter Date of start of sale/download of Bid document");
                return;
            }
            else if (award_date == "") {
                i = 1;
                alert("Please Enter Date of end of sale/download of Bid document");
                return;
            }
            //else if (completion_date == "") {
            //    i = 1;
            //    alert("Please Enter Date of pre-bid meeting");
            //}
            else if (noof_envelopes == "0") {
                i = 1;
                alert("Please Select Number of envelopes");
                return;
            }
            else if (deadline_date == "") {
                i = 1;
                alert("Please Enter Last date of submission of bid");
                return;
            }
            else if (bid_open_date == "") {
                i = 1;
                alert("Please Enter Bid opening date");
                return;
            } else if (email_office == "") {
                i = 1;
                alert("Please Enter Email address of concerned Office");
                return;
            }
        }


        if (Main_Statename == "") {
            i = 1;
            alert('Please Select StateName');
        }
        else if (WorkActivity == "0") {
            i = 1;
            alert("Please Select Work and Activity");
        }
        else if (proc_sel == "0") {
            i = 1;
            alert("Please Select Method of Selection/ Procurement (PP)");
        }
        else if (category_proc == "0") {
            i = 1;
            alert("Please Select Category of Procurement (As categorised in PP)");
        }
        else if (description_service == "") {
            i = 1;
            alert("Please Select Description of Service/Goods/Work)");
        }
        else if (rfp_date == "0") {
            i = 1;
            alert("Please Select Office doing Procurement");
        }






        var bids_received = $('#bids_received').val();


        if (i == 0) {
            var obj = {};
            obj.state_name = Main_Statename;
            obj.component_id = $('#component_id').val();
            obj.sub_component_id = $('#sub_component_id').val();
            obj.activity_id = $('#activity_id').val();
            obj.item_code = $('#item_code').val();
            obj.activity_name = $('#WorkActivity_Proc_Form').val();
            obj.agency_name = $('#nodal_agency_name1').text();
            obj.producrment_selection = proc_sel;
            /*obj.producrment_selection = proc_sel$('#producrment_selection').val();*/
            obj.category_of_procurement = $('#category_of_procurement').val();
            obj.estimated_cost = $('#estimated_cost').val();
            obj.rfp_date = $('#rfp_date').val();
            obj.tender_no = $('#tender_no').val();
            obj.bid_date = $('#bid_date').val();
            obj.bid_evalution_date = $('#bid_evalution_date').val();
            obj.award_date = $('#award_date').val();
            // obj.completion_date = $('#completion_date').val();
            obj.rfp_date_other = rfp_date_other;
            //new columns

            obj.description_service = document.getElementById('description_service').value;
            obj.email_office = $('#email_office').val();
            obj.tender_id = $('#tender_id').val();
            obj.noof_envelopes = noof_envelopes;
            obj.bid_open_date = $('#bid_open_date').val();
            obj.website_url = $('#website_url').val();
            //obj.filename = $('#filename').val();
            //obj.filepath = $('#filepath').val();
            obj.deadline_date = $('#deadline_date').val();
            obj.valid_bids = $('#valid_bids').val();
            obj.evaluation_report_date = $('#evaluation_report_date').val();
            obj.final_evaluation_report_date = $('#final_evaluation_report_date').val();
            obj.contract_award_date = $('#contract_award_date').val();
            obj.tender_amt = $('#tender_amt').val();
            obj.name_of_consultant = $('#name_of_consultant').val();
            obj.aggreement_sign_date = $('#aggreement_sign_date').val();
            obj.stipulated_date = $('#stipulated_date').val();
            if (extension_number == "0.0") {
                obj.extension_number = "0";
            } else if (extension_number == "0") {
                obj.extension_number = "";
            }
            else {
                obj.extension_number = $('#extension_number').val();
            }

            obj.latest_ext_date = $('#latest_ext_date').val();
            obj.contract_price = $('#contract_price').val();
            obj.expenditure_contract = $('#expenditure_contract').val();
            obj.terminated_date = $('#terminated_date').val();
            obj.proc_remarks = $('#proc_remarks').val();
            obj.workactivity_other = $('#workActivity_Other').val();
            obj.rfp_date_other = $('#rfp_date_other').val();
            obj.district_agency = $('#district_agency').val();
            obj.nomination_rec_date = nomination_rec_date;
            obj.nomination_ref_no = nomination_ref_no;
            obj.accepted_nomination_amt = accepted_nomination_amt;

            obj.bids_received = $('#bids_received').val();
            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/mis_new/Save_Proc_Form_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",

                dataType: 'JSON',
                success: function (response) {
                    $('#WorkActivity_Proc_Form').show();
                    $('#workActivity_Other').hide();
                    if (response == "SessionTimeOut") {
                        window.location = "/Home/LogOut";
                    }
                    $('#nodal_agency_name1').text('');
                    $('#nodal_agency_name').text('');

                    $('#awp_agency_state_name_1').val('0');
                    $('#component_id').val("");
                    $('#sub_component_id').val("");

                    $('#producrment_selection').val('0');
                    $('#category_of_procurement').val('0');
                    $('#activity_id').val("");
                    $('#WorkActivity_Proc_Form').val("0");
                    $('#item_code').val("");
                    $('#producrment_selection').val("0");
                    $('#category_of_procurement').val("0");
                    $('#estimated_cost').val("");
                    $('#rfp_date').val("0");
                    $('#rfp_date_other').val("");
                    $('#tender_no').val("");
                    $('#bid_date').val("");

                    $('#bid_evalution_date').val("");

                    $('#award_date').val("");

                    // $('#completion_date').val("");

                    $('#nodal_agency_name').val("");

                    //new columns
                    $('#workActivity_Other').val("");
                    $('#district_agency').val("0");
                    $('#description_service').val("");
                    $('#email_office').val("");
                    $('#tender_id').val("");
                    $('#noof_envelopes').val("0");
                    $('#bid_open_date').val("");
                    $('#website_url').val("");
                    //$('#').val();
                    $('#valid_bids').val("");
                    $('#evaluation_report_date').val("");
                    $('#final_evaluation_report_date').val("");
                    $('#contract_award_date').val("");
                    $('#tender_amt').val("");
                    $('#name_of_consultant').val("");
                    $('#aggreement_sign_date').val("");
                    $('#stipulated_date').val("");
                    $('#extension_number').val("0");
                    $('#latest_ext_date').val("");
                    $('#contract_price').val("");
                    $('#expenditure_contract').val("");
                    $('#terminated_date').val("");
                    $('#proc_remarks').val("");
                    $('#deadline_date').val("");

                    var files = $("#filename").get(0).files;

                    if (files.length != 0) {
                        proc_milestone_upload_image();
                        $('#filename').val("");

                    } else {
                        $('#filename').val("");

                        alert(response);
                    }
                    Main_Statename = "";
                    SessionInfo1();


                }

            });
        }
    }
}
function Proc_Info() {
    var WorkActivity = $('#WorkActivity_Proc_Form').val();
    if (WorkActivity != "0") {
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
                $('#producrment_selection').html(slection_options);

            }
        });
    }
    else {
        alert("Please Select Work Activity");
    }
}
//function Proc_Info_state() {
//    var WorkActivity = $('#WorkActivity_Proc_Form').val();
//    var state_name = $('#awp_agency_state_name_1').val();
//    if (WorkActivity != "0") {
//        $.ajax({
//            type: 'GET',
//            contentType: 'application/json; chatset=utf-8',
//            url: '/mis_new/Proc_Activity_Info_state',
//            data: { 'State': state_name },
//            dataType: 'JSON',
//            success: function (data) {

//                var slection_options = ' <option value="0">Select Method of Selection/ Procurement</option>';
//                var slection_options_Category = '<option value="0">Select Category of Procurement</option>';

//                if (data.length != 0) {
//                    for (var i = 0; i < data.length; i++) {
//                        if (data[i].category_type == "producrment_selection") {
//                            slection_options += '<option value="' + data[i].category_name + '"> ' + data[i].category_name + ' </option>';
//                        }

//                        if (data[i].category_type == "category_of_procurement") {
//                            slection_options_Category += '<option value="' + data[i].category_name + '"> ' + data[i].category_name + ' </option>';
//                        }
//                    }
//                }
//                $('#category_of_procurement').html(slection_options_Category);
//                $('#producrment_selection').html(slection_options);

//            }
//        });
//    }
//    else {
//        alert("Please Select Work Activity");
//    }
//}

var Supportted_tr = '';
var Goods_tr = '';
var Works_tr = '';
var Training_tr = '';
var Admin_Head = '';
var State_Head = '';
function Proc_report_getdetails() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Proc_report_getdetails_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {



            var tr = '';
            Admin_Head = '';
            State_Head = '';
            Supportted_tr = '';
            Goods_tr = '';
            Works_tr = '';
            Training_tr = '';
            var Support_Count = 0;
            var Goods_Count = 0;
            var work_Count = 0;
            var training_Count = 0;

            Admin_Head = '<thead> <tr class="info text-center"><th colspan="43" class="text-center"><span class="text-uppercase">Procurement Milestone</span></th>' +
                '</tr><tr class="info"><th>S.No</th><th>State Name</th><th>District Agency</th><th>Implementing Agency</th><th>Work/ Activities </th><th>Component  ID</th>' +
                '<th>Sub-Component ID</th> <th>Activity ID</th><th>Item Code</th><th>Method of Selection/Procurement (PP)</th>' +
                '<th>Category of Procurement (As categorised in PP)</th><th>Description of Service/Goods/Work</th>' +
                '<th>Office doing Procurement</th><th>Email address of concerned Office</th>' +
                '<th>Tender Ref. No.</th><th>Estimated Cost (in INR)</th><th>Date of publication of Tender Notice</th>' +
                '<th>Tender Id</th><th>Date of start of sale/download of Bid document</th><th>Date of end of sale/download of Bid document</th>' +
                '<th>Number of envelopes</th><th>Last date of submission of bid</th><th>Bid opening date</th>' +
                '<th>e-procurement Website URL</th><th>Uploaded documents</th><th>Bids valid upto</th><th>No. of Bids Received:</th>' +
                '<th>Date of submission of Technical Evaluation Report, if applicable</th><th>Date of submission of Final Evaluation Report</th><th>Date of Award of Contract / LOA</th>' +
                '<th>Accepted Tender Amount (Contract Price) (INR)</th><th>Name of Consultant/Service Provider/Supplier/Contractor</th>' +
                '<th>Date of signing of contract agreement</th><th>Stipulated date of completion</th>' +
                '<th>Completion date extension number</th><th>Latest extended date of completion+G164:G199</th>' +
                '<th>Revised Contract Price (INR)</th><th>Expenditure incurred under the contract (INR)</th>' +
                '<th>If terminated, date of termination of contract</th> <th>Reference No. of Nomination Received</th><th>Date of Receiving Nomination</th><th>Accepted Nomination Amount (Contract Price) (INR)</th> <th>Remarks</th><th>Edit</th><th>Delete</th></tr></thead><tbody id="">';

            State_Head = '<thead> <tr class="info text-center"><th colspan="43" class="text-center"><span class="text-uppercase">Procurement Milestone</span></th>' +
                '</tr><tr class="info"><th>S.No</th><th>State Name</th><th>District Agency</th><th>Implementing Agency</th><th>Work/ Activities </th><th>Component  ID</th>' +
                '<th>Sub-Component ID</th> <th>Activity ID</th><th>Item Code</th><th>Method of Selection/Procurement (PP)</th>' +
                '<th>Category of Procurement (As categorised in PP)</th><th>Description of Service/Goods/Work</th>' +
                '<th>Office doing Procurement</th><th>Email address of concerned Office</th>' +
                '<th>Tender Ref. No.</th><th>Estimated Cost (in INR)</th><th>Date of publication of Tender Notice</th>' +
                '<th>Tender Id</th><th>Date of start of sale/download of Bid document</th><th>Date of end of sale/download of Bid document</th>' +
                '<th>Number of envelopes</th><th>Last date of submission of bid</th><th>Bid opening date</th>' +
                '<th>e-procurement Website URL</th><th>Uploaded documents</th><th>Bids valid upto</th><th>No. of Bids Received:</th>' +
                '<th>Date of submission of Technical Evaluation Report, if applicable</th><th>Date of submission of Final Evaluation Report</th><th>Date of Award of Contract / LOA</th>' +
                '<th>Accepted Tender Amount (Contract Price) (INR)</th><th>Name of Consultant/Service Provider/Supplier/Contractor</th>' +
                '<th>Date of signing of contract agreement</th><th>Stipulated date of completion</th>' +
                '<th>Completion date extension number</th><th>Latest extended date of completion+G164:G199</th>' +
                '<th>Revised Contract Price (INR)</th><th>Expenditure incurred under the contract (INR)</th>' +
                '<th>If terminated, date of termination of contract</th><th>Reference No. of Nomination Received</th><th>Date of Receiving Nomination</th><th>Accepted Nomination Amount (Contract Price) (INR)</th><th>Remarks</th><th>Edit</th><th>Delete</th></tr></thead><tbody id="">';

            if (data.length != 0) {
                var z = 0;
                var z1 = 0;
                var z2 = 0;
                var z3 = 0;
                for (var i = 0; i < data.length; i++) {

                    var workactivity_other = data[i].workactivity_other;

                    var district_agency = "";

                    if (data[i].district_agency != null) {
                        district_agency = data[i].district_agency;
                    }

                    var activity_name = data[i].activity_name;
                    var Work_Activity_name = "";
                    if (activity_name == "Other") {
                        Work_Activity_name = workactivity_other;
                    }
                    else {
                        Work_Activity_name = activity_name;
                    }


                    var evaluation_report_date = "";
                    if (data[i].evaluation_report_date != null) {
                        evaluation_report_date = data[i].evaluation_report_date;
                    }
                    var final_evaluation_report_date = "";
                    if (data[i].final_evaluation_report_date != null) {
                        final_evaluation_report_date = data[i].final_evaluation_report_date;
                    }


                    var contract_award_date = "";
                    if (data[i].contract_award_date != null) {
                        contract_award_date = data[i].contract_award_date;
                    }

                    var tender_amt = "";
                    if (data[i].tender_amt != null) {
                        tender_amt = data[i].tender_amt;
                    }
                    var accepted_nomination_amt = "";
                    if (data[i].accepted_nomination_amt != null) {
                        accepted_nomination_amt = data[i].accepted_nomination_amt;
                    }

                    var name_of_consultant = "";
                    if (data[i].name_of_consultant != null) {
                        name_of_consultant = data[i].name_of_consultant;
                    }
                    var aggreement_sign_date = "";
                    if (data[i].aggreement_sign_date != null) {
                        aggreement_sign_date = data[i].aggreement_sign_date;
                    }

                    var stipulated_date = "";
                    if (data[i].stipulated_date != null) {
                        stipulated_date = data[i].stipulated_date;
                    }
                    var extension_number = "";
                    if (data[i].extension_number != null) {
                        extension_number = data[i].extension_number;
                    }

                    var latest_ext_date = "";
                    if (data[i].latest_ext_date != null) {
                        latest_ext_date = data[i].latest_ext_date;
                    }
                    var contract_price = "";
                    if (data[i].contract_price != null) {
                        contract_price = data[i].contract_price;
                    }
                    var expenditure_contract = "";
                    if (data[i].expenditure_contract != null) {
                        expenditure_contract = data[i].expenditure_contract;
                    }

                    var terminated_date = "";
                    if (data[i].terminated_date != null) {
                        terminated_date = data[i].terminated_date;
                    }
                    var proc_remarks = "";
                    if (data[i].proc_remarks != null) {
                        proc_remarks = data[i].proc_remarks;
                    }

                    var bids_received = "";
                    if (data[i].bids_received != null) {
                        bids_received = data[i].bids_received;
                    }

                    var Office_doing_Procurement = "";
                    var Office_doing_Procurement_column = "";
                    if (data[i].rfp_date != null) {

                        if (data[i].rfp_date != null && data[i].rfp_date != '') {

                            Office_doing_Procurement = data[i].rfp_date;
                        }
                        var District_Agency = "";
                        if (data[i].district_agency != null && data[i].district_agency != '') {

                            District_Agency = data[i].district_agency;
                        }
                        if (Office_doing_Procurement == "DPMU") {
                            Office_doing_Procurement_column = Office_doing_Procurement + '(' + District_Agency + ')';
                        }
                        else {
                            Office_doing_Procurement_column = Office_doing_Procurement;
                        }

                    }

                    debugger;
                    if (Main_Statename == "ALL") {
                        if (Officer == "Admin") {
                            if (Main_Statename == "ALL") {
                                $('#Count_Rows_SGWT').show();
                                if (data[i].category_of_procurement == "Support Service") {
                                    if (data[i].producrment_selection == "Nomination Based") {
                                        if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Works") {
                                    if (data[i].producrment_selection == "Nomination Based") {
                                        if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                    }

                                }


                                if (data[i].category_of_procurement == "Support Service") {
                                    z = z + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }

                                    Supportted_tr += '<tr id="Support_TR1' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +
                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';

                                    // $('#Support_UL').html(Li);

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    z1 = z1 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Goods_tr += '<tr id="Good_TR1' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +
                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';
                                    // $('#Support_UL').html(Li);
                                }
                                if (data[i].category_of_procurement == "Works") {
                                    z2 = z2 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Works_tr += '<tr id="Work_TR1' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +


                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';
                                    //$('#Support_UL').html(Li);
                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    z3 = z3 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Training_tr += '<tr id="Training_TR1' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +

                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';
                                    // $('#Support_UL').html(Li);
                                }
                            }
                            else {
                                $('#Count_Rows_SGWT').show();
                                z = z + 1;
                                var Li = '';
                                var filename = data[i].filename;
                                var filepath = data[i].filepath;
                                if (filename == null) {
                                    filename = "";
                                }
                                else {

                                    var fs = filename.split(',');
                                    var fs_path = filepath.split(',');
                                    var filepath = data[i].filepath;
                                    if (fs.length != 0) {
                                        var Z11 = 0;
                                        for (var j = 0; j < fs.length; j++) {

                                            if (fs[j] != "") {
                                                Z11 = Z11 + 1;
                                                var del = data[i].id + "," + j;
                                                Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                            }
                                        }
                                    }
                                }

                                Supportted_tr += '<tr id="Support_TR1' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                    '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                    '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                    '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                    '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                    '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                    '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +
                                    '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';

                            }


                        }

                        else if (Officer == "State") {
                            if (Main_Statename == "ALL") {
                                $('#Count_Rows_SGWT').show();

                                if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                        else {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Support_Count = Support_Count + Ss;
                                        }

                                    }

                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                        else {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }

                                    }

                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                        else {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            work_Count = work_Count + Ss;
                                        }

                                    }

                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                        else {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            training_Count = training_Count + Ss;
                                        }

                                    }

                                }


                                if (data[i].category_of_procurement == "Support Service") {
                                    z = z + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Supportted_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '"target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td >' +
                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    z1 = z1 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '"target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td> ' +


                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Good(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';



                                }
                                if (data[i].category_of_procurement == "Works") {
                                    z2 = z2 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Works_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td> ' +


                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Work(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';

                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    z3 = z3 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td> ' +

                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Training(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';






                                }
                            }
                            else {
                                $('#Count_Rows_SGWT').hide();
                                z = z + 1;
                                var Li = '';
                                var filename = data[i].filename;
                                var filepath = data[i].filepath;
                                if (filename == null) {
                                    filename = "";
                                } else {
                                    var fs = filename.split(',');
                                    var fs_path = filepath.split(',');
                                    if (fs.length != 0) {
                                        var Z11 = 0;
                                        for (var j = 0; j < fs.length; j++) {

                                            if (fs[j] != "") {
                                                Z11 = Z11 + 1;
                                                var del = data[i].id + "," + j;
                                                Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                            }
                                        }
                                    }
                                }
                                Supportted_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                    '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                    '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                    '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '"target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                    '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                    '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                    '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td >' +
                                    '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';

                            }


                        }
                    }
                    else {


                        if (Officer == "Admin") {
                            if (Main_Statename != "ALL") {
                                $('#Count_Rows_SGWT').show();

                                if (data[i].category_of_procurement == "Support Service") {
                                    if (data[i].producrment_selection == "Nomination Based") {
                                        if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Works") {
                                    if (data[i].producrment_selection == "Nomination Based") {
                                        if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                    }

                                }



                                if (data[i].category_of_procurement == "Support Service") {
                                    z = z + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }

                                    Supportted_tr += '<tr id="Support_TR1' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +
                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';

                                    // $('#Support_UL').html(Li);

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    z1 = z1 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Goods_tr += '<tr id="Good_TR1' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +
                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';
                                    // $('#Support_UL').html(Li);
                                }
                                if (data[i].category_of_procurement == "Works") {
                                    z2 = z2 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Works_tr += '<tr id="Work_TR1' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +


                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';
                                    //$('#Support_UL').html(Li);
                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    z3 = z3 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Training_tr += '<tr id="Training_TR1' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +

                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';
                                    // $('#Support_UL').html(Li);
                                }
                            }
                            else {
                                $('#Count_Rows_SGWT').show();
                                z = z + 1;
                                var Li = '';
                                var filename = data[i].filename;
                                var filepath = data[i].filepath;
                                if (filename == null) {
                                    filename = "";
                                }
                                else {

                                    var fs = filename.split(',');
                                    var fs_path = filepath.split(',');
                                    var filepath = data[i].filepath;
                                    if (fs.length != 0) {
                                        var Z11 = 0;
                                        for (var j = 0; j < fs.length; j++) {

                                            if (fs[j] != "") {
                                                Z11 = Z11 + 1;
                                                var del = data[i].id + "," + j;
                                                Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                            }
                                        }
                                    }
                                }

                                Supportted_tr += '<tr id="Support_TR1' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                    '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                    '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                    '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul id="Support_UL">' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                    '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                    '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                    '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td>' +
                                    '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';

                            }


                        }

                        else if (Officer == "State") {
                            if (Main_Statename != "ALL") {
                                $('#Count_Rows_SGWT').show();
                                if (data[i].category_of_procurement == "Support Service") {
                                    if (data[i].producrment_selection == "Nomination Based") {
                                        if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Support_Count = Support_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            Goods_Count = Goods_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Works") {
                                    if (data[i].producrment_selection == "Nomination Based") {
                                        if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            work_Count = work_Count + Ss;
                                        }
                                    }

                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    if (data[i].accepted_nomination_amt != null && data[i].accepted_nomination_amt != "") {
                                        if (data[i].producrment_selection == "Nomination Based") {
                                            var Ss = parseFloat(data[i].accepted_nomination_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                    }
                                    else {
                                        if (data[i].tender_amt != null && data[i].tender_amt != "") {
                                            var Ss = parseFloat(data[i].tender_amt);
                                            training_Count = training_Count + Ss;
                                        }
                                    }

                                }

                                if (data[i].category_of_procurement == "Support Service") {
                                    z = z + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Supportted_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '"target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td >' +
                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';

                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    z1 = z1 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '"target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td> ' +


                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Good(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';



                                }
                                if (data[i].category_of_procurement == "Works") {
                                    z2 = z2 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Works_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td> ' +


                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Work(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';


                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    z3 = z3 + 1;
                                    var Li = '';
                                    var filename = data[i].filename;
                                    var filepath = data[i].filepath;
                                    if (filename == null) {
                                        filename = "";
                                    } else {
                                        var fs = filename.split(',');
                                        var fs_path = filepath.split(',');
                                        if (fs.length != 0) {
                                            var Z11 = 0;
                                            for (var j = 0; j < fs.length; j++) {

                                                if (fs[j] != "") {
                                                    Z11 = Z11 + 1;
                                                    var del = data[i].id + "," + j;
                                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                                }
                                            }
                                        }
                                    }
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                        '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                        '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                        '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                        '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '" target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                        '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                        '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                        '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td>' + proc_remarks + '</td> ' +

                                        '<td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Training(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';




                                }
                            }
                            else {
                                $('#Count_Rows_SGWT').hide();
                                z = z + 1;
                                var Li = '';
                                var filename = data[i].filename;
                                var filepath = data[i].filepath;
                                if (filename == null) {
                                    filename = "";
                                } else {
                                    var fs = filename.split(',');
                                    var fs_path = filepath.split(',');
                                    if (fs.length != 0) {
                                        var Z11 = 0;
                                        for (var j = 0; j < fs.length; j++) {

                                            if (fs[j] != "") {
                                                Z11 = Z11 + 1;
                                                var del = data[i].id + "," + j;
                                                Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                            }
                                        }
                                    }
                                }
                                Supportted_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + district_agency + '</td><td>' + data[i].agency_name + '</td><td>' + Work_Activity_name + '</td><td>' + data[i].component_id + '</td><td>' + data[i].sub_component_id + '</td>' +
                                    '<td>' + data[i].activity_id + '</td><td>' + data[i].item_code + '</td><td>' + data[i].producrment_selection + '</td>' +
                                    '<td>' + data[i].category_of_procurement + '</td><td>' + data[i].description_service + '</td><td>' + Office_doing_Procurement_column + '</td><td>' + data[i].email_office + '</td><td>' + data[i].tender_no + '</td>' +
                                    '<td>' + data[i].estimated_cost + '</td ><td>' + data[i].bid_date + '</td><td>' + data[i].tender_id + '</td><td>' + data[i].bid_evalution_date + '</td><td>' + data[i].award_date + '</td>' +
                                    '<td>' + data[i].noof_envelopes + '</td><td>' + data[i].deadline_date + '</td><td>' + data[i].bid_open_date + '</td><td><a href="http://' + data[i].website_url + '"target="_blank">' + data[i].website_url + '</a></td><td><ul>' + Li + '</ul></td><td>' + data[i].valid_bids + '</td><td>' + bids_received + '</td><td>' + evaluation_report_date + '</td><td>' + final_evaluation_report_date + '</td>' +
                                    '<td>' + contract_award_date + '</td ><td>' + tender_amt + '</td><td>' + name_of_consultant + '</td><td>' + aggreement_sign_date + '</td><td>' + stipulated_date + '</td>' +
                                    '<td>' + extension_number + '</td ><td>' + latest_ext_date + '</td><td>' + contract_price + '</td><td>' + expenditure_contract + '</td><td>' + terminated_date + '</td>' +
                                    '<td>' + proc_remarks + '</td >' +
                                    '<td>' + data[i].nomination_ref_no + '</td><td>' + data[i].nomination_rec_date + '</td><td>' + accepted_nomination_amt + '</td><td><button class="btn btn-primary disable_prm_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_prm_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td><input type="text" class="form-control" id="Support_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="Support_district_agency' + i + '" value="' + district_agency + '"/></td><td><input type="text" class="form-control" id="Support_agency_name' + i + '" value="' + data[i].agency_name + '"/></td><td><input type="text" class="form-control" id="Support_activity_name' + i + '" value="' + Work_Activity_name + '"/></td><td><input type="text" class="form-control" id="Support_component_id' + i + '" value="' + data[i].component_id + '"/></td><td><input type="text" class="form-control" id="Support_sub_component_id' + i + '" value="' + data[i].sub_component_id + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_activity_id' + i + '" value="' + data[i].activity_id + '"/></td><td><input type="text" class="form-control" id="Support_item_code' + i + '" value="' + data[i].item_code + '"/></td><td><input type="text" class="form-control" id="Support_producrment_selection' + i + '" value="' + data[i].producrment_selection + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_category_of_procurement' + i + '" value="' + data[i].category_of_procurement + '"/></td><td><input type="text" class="form-control" id="Support_description_service' + i + '" value="' + data[i].description_service + '"/></td><td><input type="text" class="form-control" id="Support_rfp_date' + i + '" value="' + data[i].rfp_date + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_email_office' + i + '" value="' + data[i].email_office + '"/></td><td><input type="text" class="form-control" id="Support_tender_no' + i + '" value="' + data[i].tender_no + '"/></td><td><input type="text" class="form-control" id="nomination_ref_no' + i + '" value="' + data[i].nomination_ref_no + '"/></td><td><input type="text" class="form-control" id="Support_estimated_cost' + i + '" value="' + data[i].estimated_cost + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_bid_date' + i + '" value="' + data[i].bid_date + '"/></td><td><input type="text" class="form-control" id="nomination_rec_date' + i + '" value="' + data[i].nomination_rec_date + '"/></td><td><input type="text" class="form-control" id="Suport_tender_id' + i + '" value="' + data[i].tender_id + '"/></td><td><input type="text" class="form-control" id="Support_bid_evalution_date' + i + '" value="' + data[i].bid_evalution_date + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_award_date' + i + '" value="' + data[i].award_date + '"/></td><td><input type="text" class="form-control" id="Support_noof_envelopes' + i + '" value="' + data[i].noof_envelopes + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_deadline_date' + i + '" value="' + data[i].deadline_date + '"/></td><td><input type="text" class="form-control" id="Support_bid_open_date' + i + '" value="' + data[i].bid_open_date + '"/></td><td><input type="text" class="form-control" id="Support_website_url' + i + '" value="' + data[i].website_url + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_filename' + i + '" value="' + Li + '"/></td><td><input type="text" class="form-control" id="Support_valid_bids' + i + '" value="' + data[i].valid_bids + '"/></td><td><input type="text" class="form-control" id="Support_bids_received' + i + '" value="' + bids_received + '"/></td><td><input type="text" class="form-control" id="Support_evaluation_report_date' + i + '" value="' + evaluation_report_date + '"/></td><td><input type="text" class="form-control" id="Support_final_evaluation_report_date' + i + '" value="' + final_evaluation_report_date + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_contract_award_date' + i + '" value="' + contract_award_date + '"/></td><td><input type="text" class="form-control" id="Support_tender_amt' + i + '" value="' + tender_amt + '"/></td><td><input type="text" class="form-control" id="accepted_nomination_amt' + i + '" value="' + accepted_nomination_amt + '"/></td><td><input type="text" class="form-control" id="Support_name_of_consultant' + i + '" value="' + name_of_consultant + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_aggreement_sign_date' + i + '" value="' + aggreement_sign_date + '"/></td><td><input type="text" class="form-control" id="Support_stipulated_date' + i + '" value="' + stipulated_date + '"/></td><td><input type="text" class="form-control" id="Support_extension_number' + i + '" value="' + extension_number + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_latest_ext_date' + i + '" value="' + latest_ext_date + '"/></td><td><input type="text" class="form-control" id="Support_contract_price' + i + '" value="' + contract_price + '"/></td><td><input type="text" class="form-control" id="Support_expenditure_contract' + i + '" value="' + expenditure_contract + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_terminated_date' + i + '" value="' + terminated_date + '"/></td><td><input type="text" class="form-control" id="Support_proc_remarks' + i + '" value="' + proc_remarks + '"/></td><td><button type="button" class="btn btn-primary disable_prm_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td></tr>';


                            }


                        }

                    }

                }
            }

            //if (Main_Statename != "ALL") {
            //    $('#Count_Rows_SGWT').show();
            //} else {
            //    $('#Count_Rows_SGWT').hide();
            //}


            $('#Support_Count').text(Support_Count.toFixed(2));
            $('#Goods_Count').text(Goods_Count.toFixed(2));
            $('#work_Count').text(work_Count.toFixed(2));
            $('#training_Count').text(training_Count.toFixed(2));

            if (Support_Count != '0') {
                $('#Support_l').text("(in INR)");
            }
            else {
                $('#Support_l').text("");
            }
            if (Goods_Count != '0') {
                $('#Goods_l').text("(in INR)");
            }
            else {
                $('#Goods_l').text("");
            }
            if (work_Count != '0') {
                $('#work_l').text("(in INR)");
            }
            else {
                $('#work_l').text("");
            }
            if (training_Count != '0') {
                $('#training_l').text("(in INR)");
            }
            else {
                $('#training_l').text("");
            }


            if (tr == '') {
                tr = '<tr colspan="43"><td colspan="43" style="text-align: center;">No Data</td></tr>';
            }
            Service_Tr_function();
            //Goods_Tr_function();
            //Work_Tr_function();
            //Training_Tr_Function();

            //  $('#proc_milestone_report').html(Supportted_tr);

        }
    });

}


//Edit Delete Functionality

function cancelcomp_A_Support(i) {
    $('#Hide_Support_TR' + i).hide();
    $('#Support_TR' + i).show();
}
function editrowcomp_A_Support(i) {

    var url = "/mis_new/Procurement_milestone?name=" + encodeURIComponent(i);
    window.location.href = url;
    //$('#Support_TR' + i).hide();
    //$('#Hide_Support_TR' + i).show();
}


function cancelcomp_A_Good(i) {
    $('#Hide_Good_TR' + i).hide();
    $('#Good_TR' + i).show();
}
function editrowcomp_A_Good(i) {

    var url = "/mis_new/Procurement_milestone?name=" + encodeURIComponent(i);
    window.location.href = url;


    //$('#Good_TR' + i).hide();
    //$('#Hide_Good_TR' + i).show();
}


function cancelcomp_A_Work(i) {
    $('#Hide_Work_TR' + i).hide();
    $('#Work_TR' + i).show();
}
function editrowcomp_A_Work(i) {

    var url = "/mis_new/Procurement_milestone?name=" + encodeURIComponent(i);
    window.location.href = url;
    //$('#Work_TR' + i).hide();
    //$('#Hide_Work_TR' + i).show();
}

function cancelcomp_A_Training(i) {
    $('#Hide_Training_TR' + i).hide();
    $('#Training_TR' + i).show();
}
function editrowcomp_A_Training(i) {

    var url = "/mis_new/Procurement_milestone?name=" + encodeURIComponent(i);
    window.location.href = url;
    //$('#Training_TR' + i).hide();
    //$('#Hide_Training_TR' + i).show();
}




function Update_Support(Id, rowNo) {
    // alert(Id);

    var obj = {};
    obj.id = Id;
    obj.state_name = $('#Support_statename' + rowNo).val();
    obj.agency_name = $('#Support_agency_name' + rowNo).val();
    obj.activity_name = $('#Support_activity_name' + rowNo).val();
    obj.component_id = $('#Support_component_id' + rowNo).val();
    obj.sub_component_id = $('#Support_sub_component_id' + rowNo).val();
    obj.activity_id = $('#Support_activity_id' + rowNo).val();
    obj.item_code = $('#Support_item_code' + rowNo).val();
    obj.producrment_selection = $('#Support_producrment_selection' + rowNo).val();
    obj.category_of_procurement = $('#Support_category_of_procurement' + rowNo).val();
    obj.description_service = $('#Support_description_service' + rowNo).val();
    obj.rfp_date = $('#Support_rfp_date' + rowNo).val();
    obj.email_office = $('#Support_email_office' + rowNo).val();
    obj.tender_no = $('#Support_tender_no' + rowNo).val();
    obj.estimated_cost = $('#Support_estimated_cost' + rowNo).val();
    obj.bid_date = $('#Support_bid_date' + rowNo).val();
    obj.tender_id = $('#Suport_tender_id' + rowNo).val();
    obj.bid_evalution_date = $('#Support_bid_evalution_date' + rowNo).val();
    obj.award_date = $('#Support_award_date' + rowNo).val();
    //obj.completion_date = $('#Support_completion_date' + rowNo).val();
    obj.noof_envelopes = $('#Support_noof_envelopes' + rowNo).val();
    obj.deadline_date = $('#Support_deadline_date' + rowNo).val();
    obj.bid_open_date = $('#Support_bid_open_date' + rowNo).val();
    obj.website_url = $('#Support_website_url' + rowNo).val();
    //obj.filename = $('#Support_filename' + rowNo).val();
    obj.valid_bids = $('#Support_valid_bids' + rowNo).val();
    obj.contract_award_date = $('#Support_contract_award_date' + rowNo).val();
    obj.tender_amt = $('#Support_tender_amt' + rowNo).val();
    obj.name_of_consultant = $('#Support_name_of_consultant' + rowNo).val();
    obj.aggreement_sign_date = $('#Support_aggreement_sign_date' + rowNo).val();
    obj.stipulated_date = $('#Support_stipulated_date' + rowNo).val();
    obj.extension_number = $('#Support_extension_number' + rowNo).val();
    obj.latest_ext_date = $('#Support_latest_ext_date' + rowNo).val();
    obj.contract_price = $('#Support_contract_price' + rowNo).val();
    obj.expenditure_contract = $('#Support_expenditure_contract' + rowNo).val();
    obj.terminated_date = $('#Support_terminated_date' + rowNo).val();
    obj.proc_remarks = $('#Support_proc_remarks' + rowNo).val();

    obj.evaluation_report_date = $('#Support_evaluation_report_date' + rowNo).val();
    obj.final_evaluation_report_date = $('#Support_final_evaluation_report_date' + rowNo).val();
    obj.bids_received = $('#Support_bids_received' + rowNo).val();
    obj.district_agency = $('#Support_district_agency' + rowNo).val();


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Update_Procurement_Milestone_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Proc_report_getdetails();
        }

    });
}

function Delete_Support(Id) {
    var obj = {};
    obj.id = Id;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Delete_Procurement_Milestone_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Proc_report_getdetails();
        }

    });
}



function Service_Tr_function() {

    $('#proc_milestone_report').html("");
    if (Supportted_tr == '') {
        Supportted_tr = '<tr colspan="43"><td colspan="43" style="text-align: center;">No Data</td></tr>';
    }
    if (Officer == "Admin") {

        var Tabla = Admin_Head + Supportted_tr + '</tbody>';

        $('#proc_milestone_report').html(Tabla);
    } else if (Officer == "State") {
        var Tabla = State_Head + Supportted_tr + '</tbody>';
        $('#proc_milestone_report').html(Tabla);
    }

    if (Email == 'wbataljal@gmail.com' || Email == 'ataljalmisreadonly@gmail.com') {
        $('.disable_prm_btn').prop('disabled', true);
    }
    //if (Email == 'ankitsaxena.hid@govcontractor.in' || Email == 'abhy.maharashtra@gmail.com' || Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'karnatakaabhyproc@gmail.com' || Email == 'sud.abhy.raj@gmail.com' || Email == 'grdlucknow@gmail.com' || Email == 'dhaval2.login@gmail.com' ) {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}
    if (StateOfficer == 'State Level Nodal Officer') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else if (Email == 'pranavman11@gmail.com') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else {
        $('.disable_prm_btn').prop('disabled', true);
    }
}

function Goods_Tr_function() {
    $('#proc_milestone_report').html("");
    if (Goods_tr == '') {
        Goods_tr = '<tr colspan="43"><td colspan="43" style="text-align: center;">No Data</td></tr>';
    }

    if (Officer == "Admin") {

        var Tabla = Admin_Head + Goods_tr + '</tbody>';

        $('#proc_milestone_report').html(Tabla);
    } else if (Officer == "State") {
        var Tabla = State_Head + Goods_tr + '</tbody>';
        $('#proc_milestone_report').html(Tabla);
    }

    if (Email == 'wbataljal@gmail.com' || Email == 'ataljalmisreadonly@gmail.com') {
        $('.disable_prm_btn').prop('disabled', true);
    }
    //if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'abhy.maharashtra@gmail.com') {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}

    //if (Email == 'ankitsaxena.hid@govcontractor.in' || Email == 'abhy.maharashtra@gmail.com' || Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'karnatakaabhyproc@gmail.com' || Email == 'sud.abhy.raj@gmail.com' || Email == 'grdlucknow@gmail.com' || Email == 'dhaval2.login@gmail.com') {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}

    if (StateOfficer == 'State Level Nodal Officer') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else if (Email == 'pranavman11@gmail.com') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else {
        $('.disable_prm_btn').prop('disabled', true);
    }
}

function Work_Tr_function() {

    $('#proc_milestone_report').html("");
    if (Works_tr == '') {
        Works_tr = '<tr colspan="43"><td colspan="43" style="text-align: center;">No Data</td></tr>';
    }
    if (Officer == "Admin") {
        var Tabla = Admin_Head + Works_tr + '</tbody>';

        $('#proc_milestone_report').html(Tabla);
    }
    else if (Officer == "State") {
        var Tabla = State_Head + Works_tr + '</tbody>';
        $('#proc_milestone_report').html(Tabla);
    }

    if (Email == 'wbataljal@gmail.com' || Email == 'ataljalmisreadonly@gmail.com') {
        $('.disable_prm_btn').prop('disabled', true);
    }
    //if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'abhy.maharashtra@gmail.com') {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}

    //if (Email == 'ankitsaxena.hid@govcontractor.in' || Email == 'abhy.maharashtra@gmail.com' || Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'karnatakaabhyproc@gmail.com' || Email == 'sud.abhy.raj@gmail.com' || Email == 'grdlucknow@gmail.com' || Email == 'dhaval2.login@gmail.com') {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}

    if (StateOfficer == 'State Level Nodal Officer') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else if (Email == 'pranavman11@gmail.com') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else {
        $('.disable_prm_btn').prop('disabled', true);
    }
}

function Training_Tr_Function() {

    $('#proc_milestone_report').html("");
    if (Training_tr == '') {
        Training_tr = '<tr colspan="43"><td colspan="43" style="text-align: center;">No Data</td></tr>';
    }
    if (Officer == "Admin") {
        var Tabla = Admin_Head + Training_tr + '</tbody>';

        $('#proc_milestone_report').html(Tabla);
    }
    else if (Officer == "State") {
        var Tabla = State_Head + Training_tr + '</tbody>';
        $('#proc_milestone_report').html(Tabla);
    }

    if (Email == 'wbataljal@gmail.com' || Email == 'ataljalmisreadonly@gmail.com') {
        $('.disable_prm_btn').prop('disabled', true);
    }

    //if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'abhy.maharashtra@gmail.com') {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}

    //if (Email == 'ankitsaxena.hid@govcontractor.in' || Email == 'abhy.maharashtra@gmail.com' || Email == 'shiknt.dhanoriya.wrd@mp.gov.in' || Email == 'karnatakaabhyproc@gmail.com' || Email == 'sud.abhy.raj@gmail.com' || Email == 'grdlucknow@gmail.com' || Email == 'dhaval2.login@gmail.com') {
    //    $('.disable_prm_btn').prop('disabled', false);
    //}
    //else {
    //    $('.disable_prm_btn').prop('disabled', true);
    //}   

    if (StateOfficer == 'State Level Nodal Officer') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else if (Email == 'pranavman11@gmail.com') {
        $('.disable_prm_btn').prop('disabled', false);
    }
    else {
        $('.disable_prm_btn').prop('disabled', true);
    }
}





//procurement milestone upload image
var upload_count = "";
var formdata = new FormData();
var Images_Li = '';
var II = 0;

function Multiple_Images_Upload() {
    $('#File_uploads_Images').html('');

    II = II + 1;

    var fileInput = document.getElementById('filename');
    var FileName = fileInput.files[0].name;
    Images_Li += '<li>' + II + '.' + FileName + '</li>';
    //Iterating through each files selected in fileInput  
    for (i = 0; i < fileInput.files.length; i++) {

        var sfilename = fileInput.files[i].name;
        formdata.append(sfilename, fileInput.files[i]);

    }

    $('#File_uploads_Images').html(Images_Li);
}

function proc_milestone_upload_image() {

    var i = 0;
    if (Main_Statename != "") {

        if (i == 0) {


            formdata.append('State', Main_Statename);

            $.ajax({
                url: '/mis_new/Upload_proc_milestone_image',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();
                    $('#filename').val("");
                    id = "";
                    alert(result);
                    upload_count = "";
                    if (result == "SessionTimeOut") {
                        window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                    //  Save_Proc_Form_Info();

                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

function proc_milestone_upload_image_update(idddd) {
    var aa = Update_Count;
    var i = 0;
    if (Main_Statename != "") {

        if (i == 0) {


            formdata.append('id', idddd);

            $.ajax({
                url: '/mis_new/Upload_proc_milestone_image_update',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();
                    $('#filename').val("");
                    id = "";
                    alert(result);
                    upload_count = "";
                    if (result == "SessionTimeOut") {
                        window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                    //  Save_Proc_Form_Info();

                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

function Office_Procument_Chnage() {
    var rfp_date = $('#rfp_date').val();
    $('#NPMU_DropDown_Selecting_List').hide();
    if (Main_Statename != "" && Main_Statename != "0") {
        if (rfp_date != "0") {
            if (rfp_date == "DPMU") {

                $('#NPMU_DropDown_Selecting_List').show();
                $('#Agency_NPMU_Dropdown').text('Data  Loading...');
                District_List();
                $('#rfp_date_other').hide();


            } else if (rfp_date == "Other") {
                $('#rfp_date_other').show();

            }
            else {
                $('#rfp_date_other').hide();
                $('#NPMU_DropDown_Selecting_List').hide();
            }

        } else {
            $('#rfp_date_other').hide();
            alert("Please Select Office doing Procurement");
        }
    } else {

        alert("Please Select StateName");
        $('#rfp_date').val("0");
    }

}

function District_List(str) {

    $("#district_agency").html('');
    if (Main_Statename == "") {
        alert("Please Select State");
    }
    else {


        $('#Agency_NPMU_Dropdown').text('Data is Loading...');
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Home/Sign_Up_DropdownInfo",
            data: "{ }",
            dataType: 'JSON',
            success: function (response) {


                var all_states = [];
                var ddlst = {};
                var optionhtml = '<option value="0"> Select District</option>';
                //var optionState = '<option value="0"> Select State</option>';
                for (var i = 0; i < response.length; i++) {
                    if (response[i].state_name == Main_Statename) {

                        if (!ddlst[response[i].district_name]) {
                            all_states.push(response[i].district_name);
                            ddlst[response[i].district_name] = response[i].district_name;
                            //  $("#spnstate").append(optionState);
                        }
                    }
                }
                var StateArray = [];
                StateArray = all_states.sort(function (a, b) {
                    if (a < b) return -1;
                    else if (a > b) return 1;
                    return 0;
                });
                for (var i = 0; i < StateArray.length; i++) {
                    if (StateArray[i] != null && StateArray[i] != "") {
                        optionhtml += '<option value="' + StateArray[i] + '">' + StateArray[i] + '</option>';
                    }
                }
                $("#district_agency").html(optionhtml);
                if (str != null && str != "") {
                    $("#district_agency").val(str);
                }
                $('#Agency_NPMU_Dropdown').text('');
            }
        });
    }
}

function Extention_Number_dropdown() {

    var extension_number = $('#extension_number').val();
    if (extension_number != "0") {

        if (extension_number == "0.0") {
            var latest_ext_date = $('#latest_ext_date').val();
            $('#stipulated_date').val(latest_ext_date);
        }

    } else {
        alert("Please Select Completion date extension number");
    }

}
function file_delete(id, path) {

    $.ajax({
        type: "Post",
        url: "/mis_new/Delete_PMF",
        contentType: "application/json;charset=utf-8",
        data: "{'id':'" + id + "','path':'" + path + "'}",
        dataType: "json",
        success: function (results) {
            alert(results);
            Proc_report_getdetails();
        }

    });

}


function Save_incentive_fund() {


    var i = 0;
    var state_name = Main_Statename;
    var work_sel = "";
    var WorkActivity = $('#WorkActivity_Proc_Form').val();
    if (WorkActivity == "Other") {
        ofd_sel1 = "Other";
        ofd_sel11 = " - ";
        work_sel1 = $('#workActivity_Other').val();
        work_sel = ofd_sel1 + ofd_sel11 + work_sel1;

    } else {
        work_sel = $('#WorkActivity_Proc_Form').val();
    }
    var component_id = $('#component_id').val();
    var sub_component_id = $('#sub_component_id').val();
    var activity_id = $('#activity_id').val();
    var item_code = $('#item_code').val();
    var proc_sel = "";
    var selected = $('#producrment_selection').val();
    if (selected == "Others, Pl. Specify") {
        ofd_sel1 = "Other";
        ofd_sel11 = " - ";
        proc_sel1 = $('#producrment_selection_other').val();
        proc_sel = ofd_sel1 + ofd_sel11 + proc_sel1;
    } else {
        proc_sel = $('#producrment_selection').val();
    }
    var category_of_procurement = $('#category_of_procurement').val();
    var ofd_sel = "";
    var ofd = $('#rfp_date').val();
    if (ofd == "Other") {
        ofd_sel1 = "Other";
        ofd_sel11 = " - ";
        ofd_sel2 = $('#rfp_date_other').val();
        ofd_sel = ofd_sel1 + ofd_sel11 + ofd_sel2;

    } else {
        ofd_sel = $('#rfp_date').val();
    }

    var name_of_consultant = $('#email_office').val();
    var contractprice = $('#tender_no').val();
    var totalpayment = $('#tender_id').val();
    var complaints = $('#website_url').val();
    var remarks = $('#proc_remarks').val();
    var bid_date = $('#bid_date').val();
    var nomination_rec_date = $('#nomination_rec_date').val();



    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.activity_name = work_sel;
        obj.component_id = $('#component_id').val();
        obj.sub_component_id = $('#sub_component_id').val();
        obj.activity_id = $('#activity_id').val();
        obj.item_code = $('#item_code').val();
        obj.producrment_selection = proc_sel;
        obj.category_of_procurement = $('#category_of_procurement').val();
        obj.ofd = ofd_sel;
        obj.nameofconsultant = $('#email_office').val();
        obj.contractprice = $('#tender_no').val();
        obj.totalpayment = $('#tender_id').val();
        obj.complaints = $('#website_url').val();
        obj.remarks = $('#proc_remarks').val();
        obj.dateofsingning = $('#bid_date').val();
        obj.dateofcompletion = $('#nomination_rec_date').val();



        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_incentive_fund",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                else if (response == "Successfully Saved")
                    alert(response);
                $('#WorkActivity_Proc_Form').val('0');
                $('#component_id').val("");
                $('#sub_component_id').val("");
                $('#activity_id').val("");
                $('#item_code').val("");
                $('#producrment_selection').val('0');
                $('#category_of_procurement').val('0');
                $('#rfp_date').val('0');
                $('#rfp_date_other').val("");
                $('#email_office').val("");
                $('#tender_no').val("");
                $('#tender_id').val("");
                $('#website_url').val("");
                $('#proc_remarks').val("");
                $('#rfp_date_other').hide();
                $('#workActivity_Other').hide();
                $('#rfp_date_other').val("");
                $('#workActivity_Other').val("");
                $('#bid_date').val("");
                $('#nomination_rec_date').val("");
            }

        });
    }
}