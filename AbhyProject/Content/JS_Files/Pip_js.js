var Email = '';
var Access_Auth = '';
var Main_Statename = "";
var Pip_Total_value = 0;
var AWP_Total_value = 0;

var PIP_activity_Array = [];
var PIP_B_activity_Array = [];
var AWP_activity_Array = [];
var AWP_B_activity_Array = [];
var AWP_activity__YearsArray = [];
var AWP_B_activity_YearsArray = [];

function SessionInfo() {
    $('#div_form_insert').hide();
    Main_Statename = "";
    Pip_Total_value = 0;
    AWP_Total_value = 0;
    $('#Agency_Pip_DropDown').hide();
    $('#State_Pip_DropDown').hide();
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
                $('#Agency_Pip_DropDown').show();
                $('#State_Pip_DropDown').hide();
                PIP_WorkActivity_Info();
                PIP_Agency_Info();


            }
            else {
                $('#div_form_insert').show();
                $('#Agency_Pip_DropDown').hide();
                $('#State_Pip_DropDown').show();
                Main_Statename = data;
                PIP_WorkActivity_Info();
                $('#pip_dropdown_state_name').text(data);
                Pip_Agency_Name();
                PIP_Info();
                PIP_B_Info();

                PIP_Agency_Info();
                $("#div_npmu").hide();

            }
        }

    });



}


function Pip_Agency_Name() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Pip_Agency_Name',
        data: { 'state_name': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            $('#nodal_agency_name').text(data[0].nodal_agency_name);
            $('#nodal_agency_name1').text(data[0].nodal_agency_name);
            if (Main_Statename == "ALL") {
                $('#nodal_agency_name').text("ALL State's ");
                $('#nodal_agency_name1').text("ALL State's ");
            }
            if (Main_Statename == "NPMU") {
                $('#nodal_agency_name').text("NPMU (Delhi)");
                $('#nodal_agency_name1').text("NPMU (Delhi)");
            }

        }
    });
}
//PIP Activity  getting

function PIP_WorkActivity_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PIP_WorkActivity_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            $('#pip_b_workactivity').html("");
            $('#pip_workactivity').html("");
            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            var slection_options_b = ' <option value="0"> Select Work and Activity </option>';
            var ddlst = {};
            var ddlst1 = {};
            var DDL_Array1 = [];
            var DDL_Array2 = [];
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].pip_component_id == "A") {

                        if (!ddlst[data[i].pip_work_activity_name]) {
                            DDL_Array1.push(data[i].pip_work_activity_name);
                            ddlst[data[i].pip_work_activity_name] = data[i].pip_work_activity_name;

                        }
                    }
                    if (data[i].pip_component_id == "B") {

                        if (!ddlst1[data[i].pip_work_activity_name]) {
                            DDL_Array2.push(data[i].pip_work_activity_name);
                            ddlst1[data[i].pip_work_activity_name] = data[i].pip_work_activity_name;

                        }

                    }
                }

                //if (Main_Statename != "ALL") {

                //    DDL_Array1 = DDL_Array1.filter(function (val) {
                //        return PIP_activity_Array.indexOf(val) == -1;
                //    });

                //    DDL_Array2 = DDL_Array2.filter(function (val) {
                //        return PIP_B_activity_Array.indexOf(val) == -1;
                //    });
                //}


                if (DDL_Array1.length != 0) {
                    for (var i = 0; i < DDL_Array1.length; i++) {
                        slection_options += '<option value="' + DDL_Array1[i] + '"> ' + DDL_Array1[i] + ' </option>';
                    }
                }

                if (DDL_Array2.length != 0) {
                    for (var i = 0; i < DDL_Array2.length; i++) {
                        slection_options_b += '<option value="' + DDL_Array2[i] + '"> ' + DDL_Array2[i] + ' </option>';
                    }
                }


                $('#pip_b_workactivity').html(slection_options_b);
                $('#pip_workactivity').html(slection_options);
            }

        }

    });
}

function PIP_Agency_Info() {
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



            //Pip State Binding
            var PipStateArr = [];


            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "pip") {
                    PipStateArr.push(data[i].state_name)
                }
            }

            PipStateArr.sort();
            PipStateArr.unshift("NPMU");
            PipStateArr.unshift("ALL");
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


            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "awp") {
                    AwpStateArr.push(data[i].state_name)
                }
            }

            AwpStateArr.sort();
            AwpStateArr.unshift("NPMU");
            AwpStateArr.unshift("ALL");
            $('#awp_agency_state_name').append('<option >--Select--</option>');
            $('#awp_agency_state_name_1').append('<option >--Select--</option>')
            AwpStateArr.forEach((val) => {
                
           
                    slection_options_b += '<option value="' + val + '"> ' + val + ' </option>';
                

            });

            $('#awp_agency_state_name').html(slection_options_b);
            $('#awp_agency_state_name_1').html(slection_options_b);
            //awp state binding end


            //if (data.length != 0) {
            //    for (var i = 0; i < data.length; i++) {
            //        if (data[i].observation_type == "pip") {
            //            slection_options += '<option value="' + data[i].state_name + '"> ' + data[i].state_name + ' </option>';
            //        }
            //        //if (data[i].observation_type == "awp") {
            //        //    slection_options_b += '<option value="' + data[i].state_name + '"> ' + data[i].state_name + ' </option>';
            //        //}
            //    }
            //    $('#awp_agency_state_name').html(slection_options_b);
            //    $('#awp_agency_state_name_1').html(slection_options_b);

            //$('#pip_agency_state_name').html(slection_options);
            //$('#pip_agency_state_name_1').html(slection_options);
            //}
        }

    });
}


// Agency Dropdown Info

function PIP_Agency_StateInfo(email, access_Auth) {
    
    Email = email;
    Access_Auth = access_Auth;
    if (Access_Auth == 'readonly') {
        $('#btnsave').prop("disabled", true);
    }
    //alert(Access_Auth);
    //alert(Email);
    var pip_agency_state_name = $('#pip_agency_state_name').val();

    if (pip_agency_state_name == 'ALL') {
        $('#div_npmu').show();

        $('#div_form_insert').hide();
        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();
        $('#Div_comP_b').show();
      
    }
    else if (pip_agency_state_name == 'NPMU')  //chetan saini
    {
        $('#Div_comP_b').hide();
        $('#div_npmu').show();
        $('#div_form_insert').show();
        $('#div_A1').hide();
        $('#div_A2').hide();
        $('#div_A3').hide();
        $('#div_A4').hide();
        $('#div_A5').hide();
        $('#div_A6').hide();
        $('#div_total_target').hide();
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/Npmu_List',
            dataType: 'JSON',
            success: function (data) {
                console.log(data);

                $("#pip_workactivity").html("");
                var slection_options = ' <option value="0"> Select Work and Activity </option>';
                $('#pip_workactivity').html(slection_options);
                for (var i = 0; i < data.length; i++) {
                    $("#pip_workactivity").append(new Option(data[i].pip_work_activity_name, data[i].pip_work_activity_name));
                }
            }

        });
        $("#pip_physical_year1_20_21").prop('disabled', true);  //akash
        $("#pip_physical_year2_21_22").prop('disabled', true);
        $("#pip_physical_year3_22_23").prop('disabled', true);
        $("#pip_physical_year4_23_24").prop('disabled', true);
        $("#pip_physical_year5_24_25").prop('disabled', true);
        AjaxCall();
    }
    else {
        $('#Div_comP_b').show();
        $('#div_npmu').hide();
        $('#div_form_insert').show();
        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();

        $('#div_total_target').show();
        $("#pip_workactivity").html("");
        $("#pip_physical_year1_20_21").prop('disabled', false); //akash
        $("#pip_physical_year2_21_22").prop('disabled', false);
        $("#pip_physical_year3_22_23").prop('disabled', false);
        $("#pip_physical_year4_23_24").prop('disabled', false);
        $("#pip_physical_year5_24_25").prop('disabled', false);
        PIP_WorkActivity_Info();
    }

    if (pip_agency_state_name != "0") {
        Main_Statename = pip_agency_state_name;
        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);
        $('#StateName').text(Main_Statename);

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/PIP_Agency_StateWise_AgencyInfo',
            data: { 'pip_agency_state_name': pip_agency_state_name },
            dataType: 'JSON',
            success: function (data) {
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {

                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);

                    $('#pip_component_id').val('');
                    $('#pip_activity_id').val('');
                    $('#pip_item_code').val('');
                    $('#pip_total').val('');
                    $('#pip_estimated_cost_for_five_years').val('');
                    $('#pip_workactivity').val('0');
                    $('#pip_physical_year1_20_21').val('');
                    $('#pip_financial_year1_20_21').val('');
                    $('#pip_physical_year2_21_22').val('');
                    $('#pip_financial_year2_21_22').val('');
                    $('#pip_physical_year3_22_23').val('');
                    $('#pip_financial_year3_22_23').val('');
                    $('#pip_physical_year4_23_24').val('');
                    $('#pip_financial_year4_23_24').val('');
                    $('#pip_physical_year5_24_25').val('');
                    $('#pip_financial_year2_21_22').val('');
                    $('#pip_financial_year5_24_25').val('');
                    $('#pip_remarks').val('');
                    $('#pip_b_component_id').val('');
                    $('#pip_b_item_code').val('');
                    $('#pip_b_total').val('');
                    $('#pip_b_estimated_cost_for_five_years').val('');
                    $('#pip_b_workactivity').val('0');
                    $('#pip_b_physical_year1_20_21').val('');
                    $('#pip_b_financial_year1_20_21').val('');
                    $('#pip_b_physical_year2_21_22').val('');
                    $('#pip_b_financial_year2_21_22').val('');
                    $('#pip_b_physical_year3_22_23').val('');
                    $('#pip_b_financial_year3_22_23').val('');
                    $('#pip_b_physical_year4_23_24').val('');
                    $('#pip_b_financial_year4_23_24').val('');
                    $('#pip_b_physical_year5_24_25').val('');
                    $('#pip_b_financial_year2_21_22').val('');
                    $('#pip_b_financial_year5_24_25').val('');
                    $('#pip_b_remarks').val('');
                    $('#pip_b_activity_id').val('');

                    PIP_Info();
                    PIP_B_Info();
                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name').text("All States");
                        $('#nodal_agency_name1').text("All States");

                        $('#pip_component_id').val('');
                        $('#pip_activity_id').val('');
                        $('#pip_item_code').val('');
                        $('#pip_total').val('');
                        $('#pip_estimated_cost_for_five_years').val('');
                        $('#pip_workactivity').val('0');
                        $('#pip_physical_year1_20_21').val('');
                        $('#pip_financial_year1_20_21').val('');
                        $('#pip_physical_year2_21_22').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_physical_year3_22_23').val('');
                        $('#pip_financial_year3_22_23').val('');
                        $('#pip_physical_year4_23_24').val('');
                        $('#pip_financial_year4_23_24').val('');
                        $('#pip_physical_year5_24_25').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_financial_year5_24_25').val('');
                        $('#pip_remarks').val('');
                        $('#pip_b_component_id').val('');
                        $('#pip_b_item_code').val('');
                        $('#pip_b_total').val('');
                        $('#pip_b_estimated_cost_for_five_years').val('');
                        $('#pip_b_workactivity').val('0');
                        $('#pip_b_physical_year1_20_21').val('');
                        $('#pip_b_financial_year1_20_21').val('');
                        $('#pip_b_physical_year2_21_22').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_physical_year3_22_23').val('');
                        $('#pip_b_financial_year3_22_23').val('');
                        $('#pip_b_physical_year4_23_24').val('');
                        $('#pip_b_financial_year4_23_24').val('');
                        $('#pip_b_physical_year5_24_25').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_financial_year5_24_25').val('');
                        $('#pip_b_remarks').val('');
                        $('#pip_b_activity_id').val('');

                        PIP_Info();
                        PIP_B_Info();

                    }

                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name').text("NPMU (Delhi)");
                        $('#nodal_agency_name1').text("NPMU (Delhi)");

                        $('#pip_component_id').val('');
                        $('#pip_activity_id').val('');
                        $('#pip_item_code').val('');
                        $('#pip_total').val('');
                        $('#pip_estimated_cost_for_five_years').val('');
                        $('#pip_workactivity').val('0');
                        $('#pip_physical_year1_20_21').val('');
                        $('#pip_financial_year1_20_21').val('');
                        $('#pip_physical_year2_21_22').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_physical_year3_22_23').val('');
                        $('#pip_financial_year3_22_23').val('');
                        $('#pip_physical_year4_23_24').val('');
                        $('#pip_financial_year4_23_24').val('');
                        $('#pip_physical_year5_24_25').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_financial_year5_24_25').val('');
                        $('#pip_remarks').val('');
                        $('#pip_b_component_id').val('');
                        $('#pip_b_item_code').val('');
                        $('#pip_b_total').val('');
                        $('#pip_b_estimated_cost_for_five_years').val('');
                        $('#pip_b_workactivity').val('0');
                        $('#pip_b_physical_year1_20_21').val('');
                        $('#pip_b_financial_year1_20_21').val('');
                        $('#pip_b_physical_year2_21_22').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_physical_year3_22_23').val('');
                        $('#pip_b_financial_year3_22_23').val('');
                        $('#pip_b_physical_year4_23_24').val('');
                        $('#pip_b_financial_year4_23_24').val('');
                        $('#pip_b_physical_year5_24_25').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_financial_year5_24_25').val('');
                        $('#pip_b_remarks').val('');
                        $('#pip_b_activity_id').val('');

                        PIP_Info();
                        PIP_B_Info();

                    }


                }


            }
        });

    } else {

        $('#btnSubmit').hide();
        $('#btnSubmit1').hide();
        alert("Please Select Agency");
    }
}

function PIP_Agency_StateInfo_B() {

    var pip_agency_state_name = $('#pip_agency_state_name_1').val();
    if (pip_agency_state_name != "0") {
        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);
        Main_Statename = pip_agency_state_name;
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/PIP_Agency_StateWise_AgencyInfo',
            data: { 'pip_agency_state_name': pip_agency_state_name },
            dataType: 'JSON',
            success: function (data) {
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {

                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);

                    $('#pip_component_id').val('');
                    $('#pip_activity_id').val('');
                    $('#pip_item_code').val('');
                    $('#pip_total').val('');
                    $('#pip_estimated_cost_for_five_years').val('');
                    $('#pip_workactivity').val('0');
                    $('#pip_physical_year1_20_21').val('');
                    $('#pip_financial_year1_20_21').val('');
                    $('#pip_physical_year2_21_22').val('');
                    $('#pip_financial_year2_21_22').val('');
                    $('#pip_physical_year3_22_23').val('');
                    $('#pip_financial_year3_22_23').val('');
                    $('#pip_physical_year4_23_24').val('');
                    $('#pip_financial_year4_23_24').val('');
                    $('#pip_physical_year5_24_25').val('');
                    $('#pip_financial_year2_21_22').val('');
                    $('#pip_financial_year5_24_25').val('');
                    $('#pip_remarks').val('');
                    $('#pip_b_component_id').val('');
                    $('#pip_b_item_code').val('');
                    $('#pip_b_total').val('');
                    $('#pip_b_estimated_cost_for_five_years').val('');
                    $('#pip_b_workactivity').val('0');
                    $('#pip_b_physical_year1_20_21').val('');
                    $('#pip_b_financial_year1_20_21').val('');
                    $('#pip_b_physical_year2_21_22').val('');
                    $('#pip_b_financial_year2_21_22').val('');
                    $('#pip_b_physical_year3_22_23').val('');
                    $('#pip_b_financial_year3_22_23').val('');
                    $('#pip_b_physical_year4_23_24').val('');
                    $('#pip_b_financial_year4_23_24').val('');
                    $('#pip_b_physical_year5_24_25').val('');
                    $('#pip_b_financial_year2_21_22').val('');
                    $('#pip_b_financial_year5_24_25').val('');
                    $('#pip_b_remarks').val('');
                    $('#pip_b_activity_id').val('');

                    PIP_Info();
                    PIP_B_Info();
                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name').text("All States");
                        $('#nodal_agency_name1').text("All States");

                        $('#pip_component_id').val('');
                        $('#pip_activity_id').val('');
                        $('#pip_item_code').val('');
                        $('#pip_total').val('');
                        $('#pip_estimated_cost_for_five_years').val('');
                        $('#pip_workactivity').val('0');
                        $('#pip_physical_year1_20_21').val('');
                        $('#pip_financial_year1_20_21').val('');
                        $('#pip_physical_year2_21_22').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_physical_year3_22_23').val('');
                        $('#pip_financial_year3_22_23').val('');
                        $('#pip_physical_year4_23_24').val('');
                        $('#pip_financial_year4_23_24').val('');
                        $('#pip_physical_year5_24_25').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_financial_year5_24_25').val('');
                        $('#pip_remarks').val('');
                        $('#pip_b_component_id').val('');
                        $('#pip_b_item_code').val('');
                        $('#pip_b_total').val('');
                        $('#pip_b_estimated_cost_for_five_years').val('');
                        $('#pip_b_workactivity').val('0');
                        $('#pip_b_physical_year1_20_21').val('');
                        $('#pip_b_financial_year1_20_21').val('');
                        $('#pip_b_physical_year2_21_22').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_physical_year3_22_23').val('');
                        $('#pip_b_financial_year3_22_23').val('');
                        $('#pip_b_physical_year4_23_24').val('');
                        $('#pip_b_financial_year4_23_24').val('');
                        $('#pip_b_physical_year5_24_25').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_financial_year5_24_25').val('');
                        $('#pip_b_remarks').val('');
                        $('#pip_b_activity_id').val('');

                        PIP_Info();
                        PIP_B_Info();

                    }

                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name').text("All States");
                        $('#nodal_agency_name1').text("All States");

                        $('#pip_component_id').val('');
                        $('#pip_activity_id').val('');
                        $('#pip_item_code').val('');
                        $('#pip_total').val('');
                        $('#pip_estimated_cost_for_five_years').val('');
                        $('#pip_workactivity').val('0');
                        $('#pip_physical_year1_20_21').val('');
                        $('#pip_financial_year1_20_21').val('');
                        $('#pip_physical_year2_21_22').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_physical_year3_22_23').val('');
                        $('#pip_financial_year3_22_23').val('');
                        $('#pip_physical_year4_23_24').val('');
                        $('#pip_financial_year4_23_24').val('');
                        $('#pip_physical_year5_24_25').val('');
                        $('#pip_financial_year2_21_22').val('');
                        $('#pip_financial_year5_24_25').val('');
                        $('#pip_remarks').val('');
                        $('#pip_b_component_id').val('');
                        $('#pip_b_item_code').val('');
                        $('#pip_b_total').val('');
                        $('#pip_b_estimated_cost_for_five_years').val('');
                        $('#pip_b_workactivity').val('0');
                        $('#pip_b_physical_year1_20_21').val('');
                        $('#pip_b_financial_year1_20_21').val('');
                        $('#pip_b_physical_year2_21_22').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_physical_year3_22_23').val('');
                        $('#pip_b_financial_year3_22_23').val('');
                        $('#pip_b_physical_year4_23_24').val('');
                        $('#pip_b_financial_year4_23_24').val('');
                        $('#pip_b_physical_year5_24_25').val('');
                        $('#pip_b_financial_year2_21_22').val('');
                        $('#pip_b_financial_year5_24_25').val('');
                        $('#pip_b_remarks').val('');
                        $('#pip_b_activity_id').val('');

                        PIP_Info();
                        PIP_B_Info();

                    }
                }

            }
        });

    } else {

        $('#btnSubmit1').hide();
        alert("Please Select Agency");
    }
}

// PIP Retriving Data
/*Akash*/
var pip_a_component = 0;
var pip_b_component = 0;

function PIP_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PIP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            Pip_Total_value = 0;
            $("#btnSubmit").show();

            var nodal_agency_name = "";
            var Pip_A1_1 = 0;
            var Pip_A1_2 = 0;
            var Pip_A1_3 = 0;
            var Pip_A2 = 0;
            var Pip_A3 = 0;
            var Pip_A4 = 0;
            var Pip_A5 = 0;
            var Pip_A6 = 0;
            var Pip_26 = 0;   //akash

            PIP_activity_Array = [];
            var pip_financial_year1_20_21_total = 0;
            var pip_financial_year1_21_22_total = 0;
            var pip_financial_year1_22_23_total = 0;
            var pip_financial_year1_23_24_total = 0;
            var pip_financial_year1_24_25_total = 0;
            pip_a_component = 0;
            var tr = '';
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {
                var Total_Estimated_Cost = 0;
                if (data.length != 0) {
                    var ddlst = {};


                    for (var i = 0; i < data.length; i++) {
                        if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {


                            pip_a_component += 1;
                            if (!ddlst[data[i].pip_workactivity]) {
                                PIP_activity_Array.push(data[i].pip_workactivity);
                                ddlst[data[i].pip_workactivity] = data[i].pip_workactivity;

                            }

                            var pip_uid = "";
                            if (data[i].pip_uid != null && data[i].pip_uid != "") {
                                pip_uid = data[i].pip_uid;
                            }
                            var pip_item_code = "";
                            if (data[i].pip_item_code != null) {

                                pip_item_code = data[i].pip_item_code;
                            }

                            var pip_workactivity = "";
                            if (data[i].pip_workactivity != null) {
                                pip_workactivity = data[i].pip_workactivity;
                            }
                            var pip_total = "";
                            if (data[i].pip_total != null) {
                                pip_total = data[i].pip_total;
                            }
                            var pip_estimated_cost_for_five_years = "";
                            if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                var Itemcode = data[i].pip_item_code;
                                var ss1 = data[i].pip_activity_id;
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].pip_estimated_cost_for_five_years);
                                if (ss1 == "A1.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A1_1 = parseFloat(Pip_A1_1) + parseFloat(yearss);
                                }
                                else if (ss1 == "A1.2") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A1_2 = parseFloat(Pip_A1_2) + parseFloat(yearss);
                                }
                                else if (ss1 == "A1.3") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A1_3 = parseFloat(Pip_A1_3) + parseFloat(yearss);
                                }
                                else if (ss1 == "A2.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A2 = parseFloat(Pip_A2) + parseFloat(yearss);
                                }
                                else if (ss1 == "A3.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A3 = parseFloat(Pip_A3) + parseFloat(yearss);
                                }
                                else if (ss1 == "A4.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A4 = parseFloat(Pip_A4) + parseFloat(yearss);
                                }
                                else if (ss1 == "A5.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A5 = parseFloat(Pip_A5) + parseFloat(yearss);
                                }
                                else if (ss1 == "A6.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_A6 = parseFloat(Pip_A6) + parseFloat(yearss);
                                }
                               /*akash*/   else if (ss1 == "26.02") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_26 = parseFloat(Pip_26) + parseFloat(yearss);
                                }
                                pip_estimated_cost_for_five_years = data[i].pip_estimated_cost_for_five_years;
                            }

                            var pip_physical_year1_20_21 = "";
                            if (data[i].pip_physical_year1_20_21 != null && data[i].pip_physical_year1_20_21 != "") {
                                pip_physical_year1_20_21 = data[i].pip_physical_year1_20_21;
                            }

                            var pip_financial_year1_20_21 = "";
                            if (data[i].pip_financial_year1_20_21 != null && data[i].pip_financial_year1_20_21 != "") {
                                pip_financial_year1_20_21_total += parseFloat(data[i].pip_financial_year1_20_21);
                                pip_financial_year1_20_21 = data[i].pip_financial_year1_20_21;
                            }

                            var pip_physical_year2_21_22 = "";
                            if (data[i].pip_physical_year2_21_22 != null && data[i].pip_physical_year2_21_22 != "") {
                                pip_physical_year2_21_22 = data[i].pip_physical_year2_21_22;
                            }

                            var pip_financial_year2_21_22 = "";
                            if (data[i].pip_financial_year2_21_22 != null && data[i].pip_financial_year2_21_22 != "") {
                                pip_financial_year2_21_22 = data[i].pip_financial_year2_21_22;
                                pip_financial_year1_21_22_total += parseFloat(data[i].pip_financial_year2_21_22);
                            }

                            var pip_physical_year3_22_23 = "";
                            if (data[i].pip_physical_year3_22_23 != null && data[i].pip_physical_year3_22_23 != "") {
                                pip_physical_year3_22_23 = data[i].pip_physical_year3_22_23;
                            }


                            var pip_financial_year3_22_23 = "";
                            if (data[i].pip_financial_year3_22_23 != null && data[i].pip_financial_year3_22_23 != "") {
                                pip_financial_year3_22_23 = data[i].pip_financial_year3_22_23;
                                pip_financial_year1_22_23_total += parseFloat(data[i].pip_financial_year3_22_23);
                            }

                            var pip_physical_year4_23_24 = "";
                            if (data[i].pip_physical_year4_23_24 != null && data[i].pip_physical_year4_23_24 != "") {
                                pip_physical_year4_23_24 = data[i].pip_physical_year4_23_24;
                            }
                            var pip_financial_year4_23_24 = "";
                            if (data[i].pip_financial_year4_23_24 != null && data[i].pip_financial_year4_23_24 != "") {
                                pip_financial_year4_23_24 = data[i].pip_financial_year4_23_24;
                                pip_financial_year1_23_24_total += parseFloat(data[i].pip_financial_year4_23_24);
                            }

                            var pip_physical_year5_24_25 = "";
                            if (data[i].pip_physical_year5_24_25 != null && data[i].pip_physical_year5_24_25 != "") {
                                pip_physical_year5_24_25 = data[i].pip_physical_year5_24_25;
                            }

                            var pip_financial_year5_24_25 = "";
                            if (data[i].pip_financial_year5_24_25 != null && data[i].pip_financial_year5_24_25 != "") {
                                pip_financial_year5_24_25 = data[i].pip_financial_year5_24_25;
                                pip_financial_year1_24_25_total += parseFloat(data[i].pip_financial_year5_24_25);
                            }

                            var pip_remarks = "";
                            if (data[i].pip_remarks != null) {
                                pip_remarks = data[i].pip_remarks;
                            }
                            var pip_activity_id = "";
                            if (data[i].pip_activity_id != null) {
                                pip_activity_id = data[i].pip_activity_id;
                            }


                            var pipcomponent = "";
                            if (data[i].pipcomponent != null) {
                                pipcomponent = data[i].pipcomponent;
                            }
                            
                            if (data[i].state_name != 'NPMU') {
                                tr += '<tr id="trAO' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_state' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +                                    

                                    '<td class="tdborder"><input type="text" class="form-control" id="pipcomponent' + i + '" value="' + pipcomponent + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_activity_id' + i + '" value="' + pip_activity_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_item_code' + i + '" value="' + pip_item_code + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_workactivity' + i + '" value="' + pip_workactivity + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_total' + i + '" value="' + pip_total + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_estimated_cost_for_five_years' + i + '" value="' + pip_estimated_cost_for_five_years + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year1_20_21' + i + '" value="' + pip_physical_year1_20_21 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year1_20_21' + i + '" value="' + pip_financial_year1_20_21 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year2_21_22' + i + '" value="' + pip_physical_year2_21_22 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year2_21_22' + i + '" value="' + pip_financial_year2_21_22 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year3_22_23' + i + '" value="' + pip_physical_year3_22_23 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year3_22_23' + i + '" value="' + pip_financial_year3_22_23 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year4_23_24' + i + '" value="' + pip_physical_year4_23_24 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year4_23_24' + i + '" value="' + pip_financial_year4_23_24 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year5_24_25' + i + '" value="' + pip_physical_year5_24_25 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year5_24_25' + i + '" value="' + pip_financial_year5_24_25 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_remarks' + i + '" value="' + pip_remarks + '" /> </td >' +

                                    '<td><button type="button" class="btn btn-primary disable_awp_btn" onclick="updatecomp_A(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                    '<tr  role="row"  id="hideAO_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td>' + pipcomponent + '</td>' +
                                    '<td>' + pip_activity_id + '</td><td>' + pip_item_code + '</td>  <td>' + pip_workactivity + '</td><td>' + pip_total + '</td><td>' + pip_estimated_cost_for_five_years + '</td>' +
                                    '<td>' + pip_physical_year1_20_21 + '</td><td>' + pip_financial_year1_20_21 + '</td>' +
                                    '<td>' + pip_physical_year2_21_22 + '</td> <td>' + pip_financial_year2_21_22 + '</td> <td>' + pip_physical_year3_22_23 + '</td>' +
                                    '<td>' + pip_financial_year3_22_23 + '</td><td>' + pip_physical_year4_23_24 + '</td> <td>' + pip_financial_year4_23_24 + '</td>' +
                                    '<td>' + pip_physical_year5_24_25 + '</td> <td>' + pip_financial_year5_24_25 + '</td><td>' + pip_remarks + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="deletecomp_A(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            }
                            else {

                                tr += '<tr id="trAO' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                    '<td>' + (i + 1) + '</td>' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_state' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +                                    

                                    '<td class="tdborder"><input type="text" class="form-control" id="pipcomponent' + i + '" value="' + pipcomponent + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_activity_id' + i + '" value="' + pip_activity_id + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_item_code' + i + '" value="' + pip_item_code + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_workactivity' + i + '" value="' + pip_workactivity + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_total' + i + '" value="' + pip_total + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_estimated_cost_for_five_years' + i + '" value="' + pip_estimated_cost_for_five_years + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year1_20_21' + i + '" value="' + pip_physical_year1_20_21 + '" readonly/> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year1_20_21' + i + '" value="' + pip_financial_year1_20_21 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year2_21_22' + i + '" value="' + pip_physical_year2_21_22 + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year2_21_22' + i + '" value="' + pip_financial_year2_21_22 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year3_22_23' + i + '" value="' + pip_physical_year3_22_23 + '"  readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year3_22_23' + i + '" value="' + pip_financial_year3_22_23 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year4_23_24' + i + '" value="' + pip_physical_year4_23_24 + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year4_23_24' + i + '" value="' + pip_financial_year4_23_24 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year5_24_25' + i + '" value="' + pip_physical_year5_24_25 + '" readonly /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year5_24_25' + i + '" value="' + pip_financial_year5_24_25 + '" /> </td >' +
                                    '<td class="tdborder"><input type="text" class="form-control" id="pip_remarks' + i + '" value="' + pip_remarks + '" /> </td >' +

                                    '<td><button type="button" class="btn btn-primary disable_awp_btn" onclick="updatecomp_A(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +

                                    '<tr  role="row"  id="hideAO_' + i + '"> <td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td>' + pipcomponent + '</td>' +
                                    '<td>' + pip_activity_id + '</td><td>' + pip_item_code + '</td>  <td>' + pip_workactivity + '</td><td>' + pip_total + '</td><td>' + pip_estimated_cost_for_five_years + '</td>' +
                                    '<td>' + pip_physical_year1_20_21 + '</td><td>' + pip_financial_year1_20_21 + '</td>' +
                                    '<td>' + pip_physical_year2_21_22 + '</td> <td>' + pip_financial_year2_21_22 + '</td> <td>' + pip_physical_year3_22_23 + '</td>' +
                                    '<td>' + pip_financial_year3_22_23 + '</td><td>' + pip_physical_year4_23_24 + '</td> <td>' + pip_financial_year4_23_24 + '</td>' +
                                    '<td>' + pip_physical_year5_24_25 + '</td> <td>' + pip_financial_year5_24_25 + '</td><td>' + pip_remarks + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="deletecomp_A(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            }
                        }
                    }
                    tr += '<tr><td></td><td></td><td></td><td colspan="4"> TOTAL OF COMPONENT A </td><td></td><td>' + Total_Estimated_Cost.toFixed(2) + '</td>' +
                        '<td></td><td>' + pip_financial_year1_20_21_total.toFixed(2) + '</td>' +
                        '<td></td> <td>' + pip_financial_year1_21_22_total.toFixed(2) + '</td> <td></td>' +
                        '<td>' + pip_financial_year1_22_23_total.toFixed(2) + '</td><td></td> <td>' + pip_financial_year1_23_24_total.toFixed(2) + '</td>' +
                        '<td></td> <td>' + pip_financial_year1_24_25_total.toFixed(2) + '</td><td></td><td></td></tr>';
                }




                $('#tbody_PIP_Data').html(tr);

            }

            if (tr == '') {
                tr = '<tr  colspan="22" style="text-align:center;"><td colspan="22">No Data</td></tr>';
                $('#tbody_PIP_Data').html(tr);
            }
            if (Email == 'kirannayyar95@gmail.com') {
                $('.disable_awp_btn').prop('disabled', false);
            }

            $('#pip_A1_1').text(Pip_A1_1.toFixed(2));
            $('#pip_A1_2').text(Pip_A1_2.toFixed(2));
            $('#pip_A1_3').text(Pip_A1_3.toFixed(2));
            $('#pip_A2').text(Pip_A2.toFixed(2));
            $('#pip_A3').text(Pip_A3.toFixed(2));
            $('#pip_A4').text(Pip_A4.toFixed(2));
            $('#pip_A5').text(Pip_A5.toFixed(2));
            $('#pip_A6').text(Pip_A6.toFixed(2));
            $('#pip_26').text(Pip_26.toFixed(2));   //akash

            var total = Pip_A1_1 + Pip_A1_2 + Pip_A1_3 + Pip_A2 + Pip_A3 + Pip_A4 + Pip_A5 + Pip_A6 + Pip_26;   //akash
            $('#Pip_A_Total_Value').text(total.toFixed(2) + " Cr.");
            // $('#Pip_B_total').text(total.toFixed(2));
            Pip_Total_value = parseFloat(Pip_Total_value) + parseFloat(total);
            $('#Pip_Total_value').text(Pip_Total_value.toFixed(2));
            // $('#Pip_Total_value1').text(Pip_Total_value.toFixed(2) + " Cr.");

        }
    });
}

function PIP_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PIP_B_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            var nodal_agency_name = "";
            var Pip_B1 = 0;
            var Pip_B2 = 0;
            var Pip_B3 = 0;
            var Pip_B4 = 0;
            var Pip_B5 = 0;
            PIP_B_activity_Array = [];
            var pip_financial_year1_20_21_total = 0;
            var pip_financial_year1_21_22_total = 0;
            var pip_financial_year1_22_23_total = 0;
            var pip_financial_year1_23_24_total = 0;
            var pip_financial_year1_24_25_total = 0;
            pip_b_component = 0;
            var tr = '';
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {
                var Total_Estimated_Cost_year = 0;
                if (data.length != 0) {
                    var ddlst = {};
                    for (var i = 0; i < data.length; i++) {

                        if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {
                            pip_b_component += 1;

                            if (!ddlst[data[i].pip_workactivity]) {
                                PIP_B_activity_Array.push(data[i].pip_workactivity);
                                ddlst[data[i].pip_workactivity] = data[i].pip_workactivity;

                            }
                            var pip_uid = "";
                            if (data[i].pip_uid != null) {
                                pip_uid = data[i].pip_uid;
                            }
                            var pip_item_code = "";
                            if (data[i].pip_item_code != null) {
                                pip_item_code = data[i].pip_item_code;
                            }
                            var pip_workactivity = "";
                            if (data[i].pip_workactivity != null) {
                                pip_workactivity = data[i].pip_workactivity;
                            }
                            var pip_total = "";
                            if (data[i].pip_total != null) {
                                pip_total = data[i].pip_total;
                            }

                            var pip_estimated_cost_for_five_years = "";
                            if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                var Itemcode = data[i].pip_item_code;
                                Total_Estimated_Cost_year = Total_Estimated_Cost_year + parseFloat(data[i].pip_estimated_cost_for_five_years);
                                var ss1 = data[i].pip_activity_id;
                                if (ss1 == "B1.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_B1 += parseFloat(yearss);
                                }
                                else if (ss1 == "B2.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_B2 += parseFloat(yearss);
                                }
                                else if (ss1 == "B3.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_B3 += parseFloat(yearss);
                                }
                                else if (ss1 == "B3.12") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_B3 += parseFloat(yearss);
                                }
                                else if (ss1 == "B4.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_B4 += parseFloat(yearss);
                                }
                                else if (ss1 == "B5.1") {
                                    var yearss = data[i].pip_estimated_cost_for_five_years;
                                    Pip_B5 += parseFloat(yearss);
                                }
                                pip_estimated_cost_for_five_years = data[i].pip_estimated_cost_for_five_years;
                            }
                            var pip_physical_year1_20_21 = "";
                            if (data[i].pip_physical_year1_20_21 != null && data[i].pip_physical_year1_20_21 != "") {
                                pip_physical_year1_20_21 = data[i].pip_physical_year1_20_21;
                            }
                            var pip_financial_year1_20_21 = "";
                            if (data[i].pip_financial_year1_20_21 != null && data[i].pip_financial_year1_20_21 != "") {
                                pip_financial_year1_20_21_total += parseFloat(data[i].pip_financial_year1_20_21);
                                pip_financial_year1_20_21 = data[i].pip_financial_year1_20_21;
                            }

                            var pip_physical_year2_21_22 = "";
                            if (data[i].pip_physical_year2_21_22 != null && data[i].pip_physical_year2_21_22 != "") {
                                pip_physical_year2_21_22 = data[i].pip_physical_year2_21_22;
                            }

                            var pip_financial_year2_21_22 = "";
                            if (data[i].pip_financial_year2_21_22 != null && data[i].pip_financial_year2_21_22 != "") {
                                pip_financial_year2_21_22 = data[i].pip_financial_year2_21_22;
                                pip_financial_year1_21_22_total += parseFloat(data[i].pip_financial_year2_21_22);
                            }

                            var pip_physical_year3_22_23 = "";
                            if (data[i].pip_physical_year3_22_23 != null && data[i].pip_physical_year3_22_23 != "") {
                                pip_physical_year3_22_23 = data[i].pip_physical_year3_22_23;
                            }


                            var pip_financial_year3_22_23 = "";
                            if (data[i].pip_financial_year3_22_23 != null && data[i].pip_financial_year3_22_23 != "") {
                                pip_financial_year3_22_23 = data[i].pip_financial_year3_22_23;
                                pip_financial_year1_22_23_total += parseFloat(data[i].pip_financial_year3_22_23);
                            }

                            var pip_physical_year4_23_24 = "";
                            if (data[i].pip_physical_year4_23_24 != null && data[i].pip_physical_year4_23_24 != "") {
                                pip_physical_year4_23_24 = data[i].pip_physical_year4_23_24;
                            }
                            var pip_financial_year4_23_24 = "";
                            if (data[i].pip_financial_year4_23_24 != null && data[i].pip_financial_year4_23_24 != "") {
                                pip_financial_year4_23_24 = data[i].pip_financial_year4_23_24;
                                pip_financial_year1_23_24_total += parseFloat(data[i].pip_financial_year4_23_24);
                            }

                            var pip_physical_year5_24_25 = "";
                            if (data[i].pip_physical_year5_24_25 != null && data[i].pip_physical_year5_24_25 != "") {
                                pip_physical_year5_24_25 = data[i].pip_physical_year5_24_25;
                            }

                            var pip_financial_year5_24_25 = "";
                            if (data[i].pip_financial_year5_24_25 != null && data[i].pip_financial_year5_24_25 != "") {
                                pip_financial_year5_24_25 = data[i].pip_financial_year5_24_25;
                                pip_financial_year1_24_25_total += parseFloat(data[i].pip_financial_year5_24_25);
                            }

                            var pipcomponent = "";
                            if (data[i].pipcomponent != null) {
                                pipcomponent = data[i].pipcomponent;
                            }

                            var pip_remarks = "";
                            if (data[i].pip_remarks != null) {
                                pip_remarks = data[i].pip_remarks;
                            }
                            var pip_activity_id = "";
                            if (data[i].pip_activity_id != null) {
                                pip_activity_id = data[i].pip_activity_id;
                            }
                            /*Akash*/
                            

                            tr += '<tr id="trBO1' + i + '" class="donarclass database_trainer_row " role="row" style="display:none">' +
                                '<td>' + (i + 1) + '</td>' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /> </td >' +
                                
                                '<td class="tdborder"><input type="text" class="form-control" id="pipcomponent1_b' + i + '" value="' + pipcomponent + '" readonly /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_activity_id1_b' + i + '" value="' + pip_activity_id + '" readonly /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_item_code1_b' + i + '" value="' + pip_item_code + '" readonly /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_workactivity1_b' + i + '" value="' + pip_workactivity + '" readonly /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_total1_b' + i + '" value="' + pip_total + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_estimated_cost_for_five_years1_b' + i + '" value="' + pip_estimated_cost_for_five_years + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year1_20_211_b' + i + '" value="' + pip_physical_year1_20_21 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year1_20_211_b' + i + '" value="' + pip_financial_year1_20_21 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year2_21_221_b' + i + '" value="' + pip_physical_year2_21_22 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year2_21_221_b' + i + '" value="' + pip_financial_year2_21_22 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year3_22_231_b' + i + '" value="' + pip_physical_year3_22_23 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year3_22_231_b' + i + '" value="' + pip_financial_year3_22_23 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year4_23_241_b' + i + '" value="' + pip_physical_year4_23_24 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year4_23_241_b' + i + '" value="' + pip_financial_year4_23_24 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_physical_year5_24_251_b' + i + '" value="' + pip_physical_year5_24_25 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_financial_year5_24_251_b' + i + '" value="' + pip_financial_year5_24_25 + '" /> </td >' +
                                '<td class="tdborder"><input type="text" class="form-control" id="pip_remarks1_b' + i + '" value="' + pip_remarks + '" /> </td >' +

                                '<td><button type="button" class="btn btn-primary disable_awp_btn" onclick="updatecomp_B(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_B(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +


                                '<tr role="row"  id="hide_b' + i + '"><td>' + (i + 1) + '</td><td> ' + data[i].state_name + '</td><td>' + pipcomponent + '</td>' +
                                '<td>' + pip_activity_id + '</td><td>' + pip_item_code + '</td>  <td>' + pip_workactivity + '</td><td>' + pip_total + '</td><td>' + pip_estimated_cost_for_five_years + '</td>' +
                                '<td>' + pip_physical_year1_20_21 + '</td><td>' + pip_financial_year1_20_21 + '</td>' +
                                '<td>' + pip_physical_year2_21_22 + '</td> <td>' + pip_financial_year2_21_22 + '</td> <td>' + pip_physical_year3_22_23 + '</td>' +
                                '<td>' + pip_financial_year3_22_23 + '</td><td>' + pip_physical_year4_23_24 + '</td> <td>' + pip_financial_year4_23_24 + '</td>' +
                                '<td>' + pip_physical_year5_24_25 + '</td> <td>' + pip_financial_year5_24_25 + '</td><td>' + pip_remarks + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_B(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="deletecomp_B(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';

                        }

                    }
                    tr += '<tr><td></td><td></td><td></td><td colspan="4"> TOTAL OF COMPONENT B </td><td></td><td>' + Total_Estimated_Cost_year.toFixed(2) + '</td>' +
                        '<td></td><td>' + pip_financial_year1_20_21_total.toFixed(2) + '</td>' +
                        '<td></td> <td>' + pip_financial_year1_21_22_total.toFixed(2) + '</td> <td></td>' +
                        '<td>' + pip_financial_year1_22_23_total.toFixed(2) + '</td><td></td> <td>' + pip_financial_year1_23_24_total.toFixed(2) + '</td>' +
                        '<td></td> <td>' + pip_financial_year1_24_25_total.toFixed(2) + '</td><td></td><td></td></tr>';
                }

                $('#tbody_PIP_B_Data').html(tr);
            }

            if (tr == '') {
                tr = '<tr  colspan="22" style="text-align:center;"><td colspan="22">No Data</td></tr>';
                $('#tbody_PIP_B_Data').html(tr);
            }
            if (Email == 'kirannayyar95@gmail.com') {
                $('.disable_awp_btn').prop('disabled', false);
            }
            $('#pip_B1').text(Pip_B1.toFixed(2));
            $('#pip_B2').text(Pip_B2.toFixed(2));
            $('#pip_B3').text(Pip_B3.toFixed(2));
            $('#pip_B4').text(Pip_B4.toFixed(2));
            $('#pip_B5').text(Pip_B5.toFixed(2));
            var total = Pip_B1 + Pip_B2 + Pip_B3 + Pip_B4 + Pip_B5;
            $('#Pip_B_total').text(total.toFixed(2) + " Cr.");
            Pip_Total_value = parseFloat(Pip_Total_value) + parseFloat(total);
            $('#Pip_Total_value').text(Pip_Total_value.toFixed(2));
            $('#Pip_Total_value1').text(Pip_Total_value.toFixed(2) + " Cr.");

        }
    });
}





function PIP_Activity_Name_Info() {
    $('#pip_item_code').val('');
    var pip_workactivity = $('#pip_workactivity').val();

    if (pip_workactivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/PIP_Activity_Name_Info',
            data: { 'pip_workactivity': pip_workactivity },
            dataType: 'JSON',
            success: function (data) {
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#pip_activity_id').val(data[0].pip_activity_id);
                    $('#pip_item_code').val(data[0].pip_item_code);
                    $('#pip_component_id').val(data[0].pip_component_id);
                }
            }
        });
    }
    else {
        $('#pip_activity_id').val('');
        $('#pip_item_code').val('');
        $('#pip_component_id').val('');
        alert("Please Select Work and Activity");
    }
}


function PIP_B_Activity_Name_Info() {
    $('#pip_b_item_code').val('');
    var pip_b_workactivity = $('#pip_b_workactivity').val();
    if (pip_b_workactivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/PIP_Activity_Name_Info',
            data: { 'pip_workactivity': pip_b_workactivity },
            dataType: 'JSON',
            success: function (data) {
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#pip_b_activity_id').val(data[0].pip_activity_id);
                    $('#pip_b_item_code').val(data[0].pip_item_code);
                    $('#pip_b_component_id').val(data[0].pip_component_id);

                }
            }
        });
    }
    else {
        alert("Please Select Work and Activity");
    }
}
//PIP Data Save

function Save_PIP_Form_Info() {
    var pip_workactivity = $('#pip_workactivity').val();
    var pip_agency_state_name = $('#pip_agency_state_name').val();
    var i = 0;
    var pip_physical_year1_20_21 = $('#pip_physical_year1_20_21').val();
    var pip_financial_year1_20_21 = $('#pip_financial_year1_20_21').val();
    var pip_physical_year2_21_22 = $('#pip_physical_year2_21_22').val();
    var pip_financial_year2_21_22 = $('#pip_financial_year2_21_22').val();
    var pip_physical_year3_22_23 = $('#pip_physical_year3_22_23').val();
    var pip_financial_year3_22_23 = $('#pip_financial_year3_22_23').val();
    var pip_physical_year4_23_24 = $('#pip_physical_year4_23_24').val();
    var pip_financial_year4_23_24 = $('#pip_financial_year4_23_24').val();
    var pip_physical_year5_24_25 = $('#pip_physical_year5_24_25').val();
    var pip_financial_year5_24_25 = $('#pip_financial_year5_24_25').val()

    if (pip_physical_year1_20_21 == "") {
        pip_physical_year1_20_21 = 0;
    }
    if (pip_financial_year1_20_21 == "") {
        pip_financial_year1_20_21 = 0;
    }
    if (pip_physical_year2_21_22 == "") {
        pip_physical_year2_21_22 = 0;
    }
    if (pip_financial_year2_21_22 == "") {
        pip_financial_year2_21_22 = 0;
    }
    if (pip_physical_year3_22_23 == "") {
        pip_physical_year3_22_23 = 0;
    }
    if (pip_financial_year3_22_23 == "") {
        pip_financial_year3_22_23 = 0;
    }
    if (pip_physical_year4_23_24 == "") {
        pip_physical_year4_23_24 = 0;
    }
    if (pip_financial_year4_23_24 == "") {
        pip_financial_year4_23_24 = 0;
    }
    if (pip_physical_year5_24_25 == "") {
        pip_physical_year5_24_25 = 0;
    }
    if (pip_financial_year5_24_25 == "") {
        pip_financial_year5_24_25 = 0;
    }

    if (Main_Statename == "") {
        i = 1;
        alert("Please Select StateName");
    }
    else if (pip_workactivity == "0") {
        i = 1;
        // alert("Please Select Work and Activity");
    }
    if ($('#pip_agency_state_name').val() != 'NPMU') {
        var pip_total = $('#pip_total').val();
        if (pip_total == '') {
            alert('Please Fill Total Target');
            return;
        }
    }
    var total_cost = $('#pip_estimated_cost_for_five_years').val();
    if (total_cost == '') {
        alert('Please Fill Estimated cost for 5 years');
        return;
    }

    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.pip_item_code = $('#pip_item_code').val();
        obj.pip_total = $('#pip_total').val();
        obj.pip_estimated_cost_for_five_years = $('#pip_estimated_cost_for_five_years').val();
        obj.pip_workactivity = $('#pip_workactivity').val();
        obj.pip_physical_year1_20_21 = pip_physical_year1_20_21;
        obj.pip_financial_year1_20_21 = pip_financial_year1_20_21;
        obj.pip_physical_year2_21_22 = pip_physical_year2_21_22;
        obj.pip_financial_year2_21_22 = pip_financial_year2_21_22;
        obj.pip_physical_year3_22_23 = pip_physical_year3_22_23;
        obj.pip_financial_year3_22_23 = pip_financial_year3_22_23;
        obj.pip_physical_year4_23_24 = pip_physical_year4_23_24;
        obj.pip_financial_year4_23_24 = pip_financial_year4_23_24;
        obj.pip_physical_year5_24_25 = pip_physical_year5_24_25;
        obj.pip_financial_year5_24_25 = pip_financial_year5_24_25;

        obj.pip_remarks = $('#pip_remarks').val();
        obj.pipcomponent = $('#pip_component_id').val();
        obj.pip_agency_name = $('#nodal_agency_name').text();
        obj.pip_agency_officer_name = Main_Statename;
        obj.pip_activity_id = $('#pip_activity_id').val();


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_PIP_Form_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Main_Statename = "";
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                $('#pip_agency_state_name').val('0');
                $('#pip_component_id').val('');
                $('#pip_activity_id').val('');
                $('#pip_item_code').val('');
                $('#pip_total').val('');
                $('#pip_estimated_cost_for_five_years').val('');
                $('#pip_workactivity').val('0');
                $('#pip_physical_year1_20_21').val('');
                $('#pip_financial_year1_20_21').val('');
                $('#pip_physical_year2_21_22').val('');
                $('#pip_financial_year2_21_22').val('');
                $('#pip_physical_year3_22_23').val('');
                $('#pip_financial_year3_22_23').val('');
                $('#pip_physical_year4_23_24').val('');
                $('#pip_financial_year4_23_24').val('');
                $('#pip_physical_year5_24_25').val('');
                $('#pip_financial_year2_21_22').val('');
                $('#pip_financial_year5_24_25').val('');
                $('#pip_remarks').val('');
                SessionInfo();
                Pip_Total_value = 0;
                PIP_Info();
                PIP_B_Info();

            }

        });
    }
}

/*Akash*/

function Addtextboxvalues() {

    var pip_f21 = $('#pip_financial_year1_20_21').val();
    var pip_f22 = $('#pip_financial_year2_21_22').val();
    var pip_f23 = $('#pip_financial_year3_22_23').val();
    var pip_f24 = $('#pip_financial_year4_23_24').val();
    var pip_f25 = $('#pip_financial_year5_24_25').val();

    if (pip_f21 == "") {
        pip_f21 = 0;
    }
    if (pip_f22 == "") {
        pip_f22 = 0;
    }
    if (pip_f23 == "") {
        pip_f23 = 0;
    }
    if (pip_f24 == "") {
        pip_f24 = 0;
    }
    if (pip_f25 == "") {
        pip_f25 = 0;
    }
    var total = parseFloat(pip_f21) + parseFloat(pip_f22) + parseFloat(pip_f23) + parseFloat(pip_f24) + parseFloat(pip_f25);
    var camp = parseInt($('#pip_estimated_cost_for_five_years').val())
    if (parseFloat(camp) >= parseFloat(total)) {
        $('#btnsave').attr('disabled', false);
        //Save_PIP_B_Form_Info();
    }
    else {
        $('#btnsave').attr('disabled', true);
    }
}

function Addtextboxvalues1() {

    var pip_f211 = $('#pip_b_financial_year1_20_21').val();
    var pip_f222 = $('#pip_b_financial_year2_21_22').val();
    var pip_f233 = $('#pip_b_financial_year3_22_23').val();
    var pip_f244 = $('#pip_b_financial_year4_23_24').val();
    var pip_f255 = $('#pip_b_financial_year5_24_25').val();
    if (pip_f211 == "") {
        pip_f211 = 0;
    }
    if (pip_f222 == "") {
        pip_f222 = 0;
    }
    if (pip_f233 == "") {
        pip_f233 = 0;
    }
    if (pip_f244 == "") {
        pip_f244 = 0;
    }
    if (pip_f255 == "") {
        pip_f255 = 0;
    }
    var total1 = parseFloat(pip_f211) + parseFloat(pip_f222) + parseFloat(pip_f233) + parseFloat(pip_f244) + parseFloat(pip_f255);
    var camp1 = parseInt($('#pip_b_estimated_cost_for_five_years').val())
    // alert(total1);
    // alert(camp1);
    if (parseFloat(camp1) >= parseFloat(total1)) {
        $('#btnsave1').attr('disabled', false);
       // Save_PIP_Form_Info();
    }
    else {
        $('#btnsave1').attr('disabled', true);
    }
}
/*akash end code*/

function Save_PIP_B_Form_Info() {
    var i = 0;
    var pip_workactivity = $('#pip_b_workactivity').val();
    if (Main_Statename == "") {
        i = 1;
        alert("Please Select StateName");
    }
    else if (pip_workactivity == "0") {
        i = 1;
        // alert("Please Select Work and Activity");
    }

    if ($('#pip_agency_state_name').val() != 'NPMU') {
        var pip_total = $('#pip_b_total').val();
        if (pip_total == '') {
            alert('Please Fill Total Target');
            return;
        }
    }
    var total_cost = $('#pip_b_estimated_cost_for_five_years').val();
    if (total_cost == '') {
        alert('Please Fill Estimated cost for 5 years');
        return;
    }



    if (i == 0) {

        var obj = {};
        obj.state_name = Main_Statename;
        obj.pipcomponent = $('#pip_b_component_id').val();
        obj.pip_item_code = $('#pip_b_item_code').val();
        obj.pip_total = $('#pip_b_total').val();
        obj.pip_estimated_cost_for_five_years = $('#pip_b_estimated_cost_for_five_years').val();
        obj.pip_workactivity = $('#pip_b_workactivity').val();
        obj.pip_physical_year1_20_21 = $('#pip_b_physical_year1_20_21').val();
        obj.pip_financial_year1_20_21 = $('#pip_b_financial_year1_20_21').val();
        obj.pip_physical_year2_21_22 = $('#pip_b_physical_year2_21_22').val();
        obj.pip_financial_year2_21_22 = $('#pip_b_financial_year2_21_22').val();
        obj.pip_physical_year3_22_23 = $('#pip_b_physical_year3_22_23').val();
        obj.pip_financial_year3_22_23 = $('#pip_b_financial_year3_22_23').val();
        obj.pip_physical_year4_23_24 = $('#pip_b_physical_year4_23_24').val();
        obj.pip_financial_year4_23_24 = $('#pip_b_financial_year4_23_24').val();
        obj.pip_physical_year5_24_25 = $('#pip_b_physical_year5_24_25').val();
        obj.pip_financial_year5_24_25 = $('#pip_b_financial_year5_24_25').val();

        obj.pip_remarks = $('#pip_b_remarks').val();
        obj.pip_agency_name = $('#nodal_agency_name').text();
        obj.pip_agency_officer_name = Main_Statename;
        obj.pip_activity_id = $('#pip_b_activity_id').val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_PIP_B_Form_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Main_Statename = "";
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                $('#pip_agency_state_name').val('0');
                $('#pip_b_component_id').val('');
                $('#pip_b_item_code').val('');
                $('#pip_b_total').val('');
                $('#pip_b_estimated_cost_for_five_years').val('');
                $('#pip_b_workactivity').val('0');
                $('#pip_b_physical_year1_20_21').val('');
                $('#pip_b_financial_year1_20_21').val('');
                $('#pip_b_physical_year2_21_22').val('');
                $('#pip_b_financial_year2_21_22').val('');
                $('#pip_b_physical_year3_22_23').val('');
                $('#pip_b_financial_year3_22_23').val('');
                $('#pip_b_physical_year4_23_24').val('');
                $('#pip_b_financial_year4_23_24').val('');
                $('#pip_b_physical_year5_24_25').val('');
                $('#pip_b_financial_year2_21_22').val('');
                $('#pip_b_financial_year5_24_25').val('');
                $('#pip_b_remarks').val('');
                $('#pip_b_activity_id').val('');
                SessionInfo();
                Pip_Total_value = 0;
                PIP_Info();
                PIP_B_Info();

            }

        });
    }


}

// PIP EDIT and DELETE A Component
function cancelcomp_A(i) {
    $('#hideAO_' + i).show();
    $('#trAO' + i).hide();
}
function editrowcomp_A(i) {

    $('#trAO' + i).show();
    $('#hideAO_' + i).hide();
}
function updatecomp_A(DID, i) {

    var pip_physical_year1_20_21 = $('#pip_physical_year1_20_21' + i).val();
    var pip_financial_year1_20_21 = $('#pip_financial_year1_20_21' + i).val();
    var pip_physical_year2_21_22 = $('#pip_physical_year2_21_22' + i).val();
    var pip_financial_year2_21_22 = $('#pip_financial_year2_21_22' + i).val();
    var pip_physical_year3_22_23 = $('#pip_physical_year3_22_23' + i).val();
    var pip_financial_year3_22_23 = $('#pip_financial_year3_22_23' + i).val();
    var pip_physical_year4_23_24 = $('#pip_physical_year4_23_24' + i).val();
    var pip_financial_year4_23_24 = $('#pip_financial_year4_23_24' + i).val();
    var pip_physical_year5_24_25 = $('#pip_physical_year5_24_25' + i).val();
    var pip_financial_year5_24_25 = $('#pip_financial_year5_24_25' + i).val();
    

    if (pip_physical_year1_20_21 == "") {
        pip_physical_year1_20_21 = 0;
    }
    if (pip_financial_year1_20_21 == "") {
        pip_financial_year1_20_21 = 0;
    }
    if (pip_physical_year2_21_22 == "") {
        pip_physical_year2_21_22 = 0;
    }
    if (pip_financial_year2_21_22 == "") {
        pip_financial_year2_21_22 = 0;
    }
    if (pip_physical_year3_22_23 == "") {
        pip_physical_year3_22_23 = 0;
    }
    if (pip_financial_year3_22_23 == "") {
        pip_financial_year3_22_23 = 0;
    }
    if (pip_physical_year4_23_24 == "") {
        pip_physical_year4_23_24 = 0;
    }
    if (pip_financial_year4_23_24 == "") {
        pip_financial_year4_23_24 = 0;
    }
    if (pip_physical_year5_24_25 == "") {
        pip_physical_year5_24_25 = 0;
    }
    if (pip_financial_year5_24_25 == "") {
        pip_financial_year5_24_25 = 0;
    }


    var obj = {};
    obj.pip_uid = $('#pip_uid' + i).val();
    obj.pipcomponent = $('#pipcomponent' + i).val();
    obj.state_name = $('#pip_state' + i).val();
    obj.pip_activity_id = $('#pip_activity_id' + i).val();
    obj.pip_item_code = $('#pip_item_code' + i).val();
    obj.pip_workactivity = $('#pip_workactivity' + i).val();
    obj.pip_total = $('#pip_total' + i).val();
    obj.pip_estimated_cost_for_five_years = $('#pip_estimated_cost_for_five_years' + i).val();
    obj.pip_physical_year1_20_21 = pip_physical_year1_20_21;
    obj.pip_financial_year1_20_21 = pip_financial_year1_20_21;
    obj.pip_physical_year2_21_22 = pip_physical_year2_21_22;
    obj.pip_financial_year2_21_22 = pip_financial_year2_21_22;
    obj.pip_physical_year3_22_23 = pip_physical_year3_22_23;
    obj.pip_financial_year3_22_23 = pip_financial_year3_22_23;
    obj.pip_physical_year4_23_24 = pip_physical_year4_23_24;
    obj.pip_financial_year4_23_24 = pip_financial_year4_23_24;
    obj.pip_physical_year5_24_25 = pip_physical_year5_24_25;
    obj.pip_financial_year5_24_25 = pip_financial_year5_24_25;

    obj.pip_remarks = $('#pip_remarks' + i).val();
    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/updatecomp_A_pip',

        data: "{'comp_A_pip_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Pip_Total_value = 0;
            PIP_Info();
            PIP_B_Info();



        }
    });
}

function deletecomp_A(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/deletecomp_A_pip',

        data: "{'comp_A_pip_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Pip_Total_value = 0;
            PIP_Info();
            PIP_B_Info();



        }
    });
}

//PIP Edit and Delete B component

function cancelcomp_B(i) {
    $('#hide_b' + i).show();
    $('#trBO1' + i).hide();
}
function editrowcomp_B(i) {


    $('#trBO1' + i).show();
    $('#hide_b' + i).hide();

}
function updatecomp_B(DID, i) {

    var obj = {};
    obj.pip_uid = $('#pip_uid1_b' + i).val();
    obj.state_name = $('#pip_statename1_b' + i).val();
    obj.pipcomponent = $('#pipcomponent1_b' + i).val();
    obj.pip_activity_id = $('#pip_activity_id1_b' + i).val();
    obj.pip_item_code = $('#pip_item_code1_b' + i).val();
    obj.pip_workactivity = $('#pip_workactivity1_b' + i).val();
    obj.pip_total = $('#pip_total1_b' + i).val();
    obj.pip_estimated_cost_for_five_years = $('#pip_estimated_cost_for_five_years1_b' + i).val();
    obj.pip_physical_year1_20_21 = $('#pip_physical_year1_20_211_b' + i).val();
    obj.pip_financial_year1_20_21 = $('#pip_financial_year1_20_211_b' + i).val();
    obj.pip_physical_year2_21_22 = $('#pip_physical_year2_21_221_b' + i).val();
    obj.pip_financial_year2_21_22 = $('#pip_financial_year2_21_221_b' + i).val();
    obj.pip_physical_year3_22_23 = $('#pip_physical_year3_22_231_b' + i).val();
    obj.pip_financial_year3_22_23 = $('#pip_financial_year3_22_231_b' + i).val();
    obj.pip_physical_year4_23_24 = $('#pip_physical_year4_23_241_b' + i).val();
    obj.pip_financial_year4_23_24 = $('#pip_financial_year4_23_241_b' + i).val();
    obj.pip_physical_year5_24_25 = $('#pip_physical_year5_24_251_b' + i).val();
    obj.pip_financial_year5_24_25 = $('#pip_financial_year5_24_251_b' + i).val();
    obj.pip_financial_year5_24_25 = $('#pip_financial_year5_24_251_b' + i).val();
    obj.pip_remarks = $('#pip_remarks1_b' + i).val();
    obj.id = DID;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/updatecomp_B_pip',

        data: "{'comp_B_pip_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Pip_Total_value = 0;
            PIP_Info();
            PIP_B_Info();


        }
    });
}

function deletecomp_B(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/deletecomp_B_pip',

        data: "{'comp_B_pip_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            Pip_Total_value = 0;
            PIP_Info();
            PIP_B_Info();



        }
    });
}


//AWP Activity
var Awp_A_Form_FYear_matched = 0;

function AWP_SessionInfo() {
    
    $('#div_form_insert').hide();
    Main_Statename = "";
    $('#AWP_Total_value').text('0');
    $('#AWP_Total_value1').text('0');

    $('#AWP_A_Value_Total').text('0');

    $('#Awp_B_total').text('0');
    AWP_Total_value = 0;
    $('#Agency_AWP_DropDown').hide();
    $('#State_AWP_DropDown').hide();
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
                $('#Agency_AWP_DropDown').show();
                $('#State_AWP_DropDown').hide();

                PIP_Agency_Info();
            }
            else {
                $('#div_form_insert').show();
                $('#Agency_AWP_DropDown').hide();
                $('#State_AWP_DropDown').show();
                Main_Statename = data;

                $('#pip_dropdown_state_name').text(data);
                AWP_Agency_Name();




            }
        }

    });

}
function AWP_Agency_Name() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Agency_Name',
        data: { 'state_name': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            $('#nodal_agency_name').text(data[0].nodal_agency_name);
            $('#nodal_agency_name1').text(data[0].nodal_agency_name);
            AWP_Info();

        }
    });
}
function AWP_WorkActivity_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_WorkActivity_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            $('#awp_b_workactivity').html("");
            $('#awp_workactivity').html("");

            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            var slection_options1 = ' <option value="0"> Select Work and Activity </option>';
            var ddlst = {};
            var ddlst1 = {};
            var DDL_Array1 = [];
            var DDL_Array2 = [];
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].awp_component_id == "A") {

                        if (!ddlst[data[i].awp_work_activity_name]) {
                            DDL_Array1.push(data[i].awp_work_activity_name);
                            ddlst[data[i].awp_work_activity_name] = data[i].awp_work_activity_name;

                        }
                    }
                    if (data[i].awp_component_id == "B") {

                        if (!ddlst1[data[i].awp_work_activity_name]) {
                            DDL_Array2.push(data[i].awp_work_activity_name);
                            ddlst1[data[i].awp_work_activity_name] = data[i].awp_work_activity_name;

                        }

                    }

                }

                //DDL_Array1 = DDL_Array1.filter(function (val) {
                //    return AWP_activity_Array.indexOf(val) == -1;
                //});

                //DDL_Array2 = DDL_Array2.filter(function (val) {
                //    return AWP_B_activity_Array.indexOf(val) == -1;
                //});

                if (DDL_Array1.length != 0) {
                    for (var i = 0; i < DDL_Array1.length; i++) {
                        slection_options += '<option value="' + DDL_Array1[i] + '"> ' + DDL_Array1[i] + ' </option>';
                    }
                }

                if (DDL_Array2.length != 0) {
                    for (var i = 0; i < DDL_Array2.length; i++) {
                        slection_options1 += '<option value="' + DDL_Array2[i] + '"> ' + DDL_Array2[i] + ' </option>';
                    }
                }
                $('#awp_b_workactivity').html(slection_options1);
                $('#awp_workactivity').html(slection_options);
            }
            $("#awp_physical_year_20_21").prop("disabled", false);
        }

    });
}

function AWP_Activity_Name_Info() {
    $('#awp_item_code').val('');
    var awp_workactivity = $('#awp_workactivity').val();
    if (awp_workactivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Activity_Name_Info',
            data: { 'awp_workactivity': awp_workactivity },
            dataType: 'JSON',
            success: function (data) {

                $('#awp_fin_b__year').val('0');

                $('#awp_fin_year').val('0');
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#awp_component').val(data[0].awp_component_id);
                    $('#awp_activity_id').val(data[0].awp_activity_id);
                    $('#awp_item_code').val(data[0].awp_item_code);

                }
            }
        });
    }
    else {
        alert("Please Select Work and Activity");
    }
}
function AWP_B_Activity_Name_Info() {
    $('#awp_b_item_code').val('');
    $('#awp_fin_b__year').val('0');

    $('#awp_fin_year').val('0');
    var awp_b_workactivity = $('#awp_b_workactivity').val();
    if (awp_b_workactivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Activity_Name_Info',
            data: { 'awp_workactivity': awp_b_workactivity },
            dataType: 'JSON',
            success: function (data) {
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#awp_b_component').val(data[0].awp_component_id);
                    $('#awp_b_activity_id').val(data[0].awp_activity_id);
                    $('#awp_b_item_code').val(data[0].awp_item_code);
                }
            }
        });
    }
    else {
        alert("Please Select Work and Activity");
    }
}

// Agency Dropdown Info

function AWP_Agency_StateInfo() {

    var awp_agency_state_name = $('#awp_agency_state_name').val();
    if (awp_agency_state_name != "0") {
        Main_Statename = awp_agency_state_name;
        $('#GstateName1').text(Main_Statename);
        $('#Gstate').text(Main_Statename);

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
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);

                    $('#awp_workactivity').val("0");
                    $('#awp_b_workactivity').val("0");
                    $('#awp_component').val("");
                    $('#awp_category').val("");
                    $('#awp_b_component').val("");
                    $('#awp_activity_id').val("");
                    $('#awp_b_activity_id').val("");
                    $('#awp_item_code').val("");
                    $('#awp_b_item_code').val("");
                    $('#awp_workactivity').val("0");
                    $('#awp_b_workactivity').val("0");
                    $('#awp_component').val("");
                    $('#awp_b_component').val("");
                    $('#awp_activity_id').val("");
                    $('#awp_b_activity_id').val("");
                    $('#awp_item_code').val("");
                    $('#awp_b_item_code').val("");
                    AWP_Info();

                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name').text("All State's");
                        $('#nodal_agency_name1').text("All State's");

                        $('#awp_workactivity').val("0");
                        $('#awp_b_workactivity').val("0");
                        $('#awp_component').val("");
                        $('#awp_category').val("");
                        $('#awp_b_component').val("");
                        $('#awp_activity_id').val("");
                        $('#awp_b_activity_id').val("");
                        $('#awp_item_code').val("");
                        $('#awp_b_item_code').val("");
                        $('#awp_workactivity').val("0");
                        $('#awp_b_workactivity').val("0");
                        $('#awp_component').val("");
                        $('#awp_b_component').val("");
                        $('#awp_activity_id').val("");
                        $('#awp_b_activity_id').val("");
                        $('#awp_item_code').val("");
                        $('#awp_b_item_code').val("");
                        AWP_Info();
                    }
                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name').text("NPMU (Delhi)");
                        $('#nodal_agency_name1').text("NPMU (Delhi)");

                        $('#awp_workactivity').val("0");
                        $('#awp_b_workactivity').val("0");
                        $('#awp_component').val("");
                        $('#awp_category').val("");
                        $('#awp_b_component').val("");
                        $('#awp_activity_id').val("");
                        $('#awp_b_activity_id').val("");
                        $('#awp_item_code').val("");
                        $('#awp_b_item_code').val("");
                        $('#awp_workactivity').val("0");
                        $('#awp_b_workactivity').val("0");
                        $('#awp_component').val("");
                        $('#awp_b_component').val("");
                        $('#awp_activity_id').val("");
                        $('#awp_b_activity_id').val("");
                        $('#awp_item_code').val("");
                        $('#awp_b_item_code').val("");
                        AWP_Info();
                    }

                }

            }
        });

    } else {

        alert("Please Select Agency");
    }
}


function AWP_Agency_StateInfo_B() {
    
    //Email = email;
    //Access_Auth = access_Auth;

    //prateekfunction
    var awp_agency_state_name = $('#awp_agency_state_name_1').val();
    //alert(awp_agency_state_name);
    if (awp_agency_state_name == null) {
        awp_agency_state_name = $('#awp_agency_state_name_').val();
    }
    if (awp_agency_state_name == 'ALL') {
        $('#Div_comP_b_b').show();
        $('#div_npmu').show();
        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();
        $('#div_form_insert').hide();
    }
    else if (awp_agency_state_name == "NPMU") {
        $('#Div_comP_b_b').hide();
        $('#div_npmu').show();
        $('#div_A1').hide();
        $('#div_A2').hide();
        $('#div_A3').hide();
        $('#div_A4').hide();
        $('#div_A5').hide();
        $('#div_A6').hide();
        $('#div_form_insert').show();
        AjaxCall();
    } else {
        $('#Div_comP_b_b').show();
        $('#div_npmu').hide();

        $('#div_A1').show();
        $('#div_A2').show();
        $('#div_A3').show();
        $('#div_A4').show();
        $('#div_A5').show();
        $('#div_A6').show();
        $('#div_form_insert').show();
        $("#awp_workactivity").html("");
        AWP_WorkActivity_Info();
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
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                }
                else {
                    if (Main_Statename == "ALL") {
                        $('#nodal_agency_name1').text("All States");
                        $('#nodal_agency_name').text("All States");
                    }
                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name1').text("NPMU (Delhi)");
                        $('#nodal_agency_name').text("NPMU (Delhi)");
                    }
                }
                //    $('#awp_workactivity').val("0");
                //    $('#awp_b_workactivity').val("0");
                //    $('#awp_component').val("");
                //    $('#awp_b_component').val("");
                //    $('#awp_activity_id').val("");
                //    $('#awp_b_activity_id').val("");
                //    $('#awp_item_code').val("");
                //    $('#awp_b_item_code').val("");
                //    AWP_Info();

                //}
                //else {
                //    if (Main_Statename == "ALL") {
                //        $('#nodal_agency_name1').text("All States");
                //        $('#nodal_agency_name').text("All States");
                //        $('#awp_workactivity').val("0");
                //        $('#awp_b_workactivity').val("0");
                //        $('#awp_component').val("");
                //        $('#awp_b_component').val("");
                //        $('#awp_activity_id').val("");
                //        $('#awp_b_activity_id').val("");
                //        $('#awp_item_code').val("");
                //        $('#awp_b_item_code').val("");
                //        AWP_Info();
                //    }
                //    if (Main_Statename == "NPMU") {
                //        $('#nodal_agency_name1').text("NPMU State");
                //        $('#nodal_agency_name').text("NPMU State");
                //        $('#awp_workactivity').val("0");
                //        $('#awp_b_workactivity').val("0");
                //        $('#awp_component').val("");
                //        $('#awp_b_component').val("");
                //        $('#awp_activity_id').val("");
                //        $('#awp_b_activity_id').val("");
                //        $('#awp_item_code').val("");
                //        $('#awp_b_item_code').val("");
                //        AWP_Info();
                //    }
                //}
            }
        });
        
        Year_Wise_PIP_Info();

    } else {

        alert("Please Select Agency");
    }
}

function AjaxCall() {  //prateek ajaxcall
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/IsNpmuThere',
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
            $("#awp_workactivity").html("");
            $("#pip_workactivity").html("");
            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            $("#awp_workactivity").html(slection_options);
            $("#pip_workactivity").html(slection_options);
            for (var i = 0; i < data.length; i++) {
                $("#awp_workactivity").append(new Option(data[i].awp_work_activity_name, data[i].awp_work_activity_name));
                $("#pip_workactivity").append(new Option(data[i].awp_work_activity_name, data[i].awp_work_activity_name));
            }
            $("#awp_physical_year_20_21").prop("disabled", true);
        }
    });
}
function AWP_Activity_Name_Info() { //prateek function

    $('#awp_item_code').val('');

    var awp_workactivity = $('#awp_workactivity').val();
    if (awp_workactivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/AWP_Activity_Name_Info',
            data: { 'awp_workactivity': awp_workactivity },
            dataType: 'JSON',
            success: function (data) {

                $('#awp_fin_b__year').val('0');

                $('#awp_fin_year').val('0');
                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {
                    $('#awp_component').val(data[0].awp_component_id);
                    $('#awp_activity_id').val(data[0].awp_activity_id);
                    $('#awp_item_code').val(data[0].awp_item_code);
                    $('#awp_category').val(data[0].awp_category);
                }
            }
        });
    }
    else {
        alert("Please Select Work and Activity");
    }
}
var AWP_Financial_Year = "";


function Enter_val() { //4190

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Fetch',
        dataType: 'JSON',
        success: function (data) {

            $("#awp_total").val('');
            $("#awp_estimated_cost_for_five_years").val('');
            var staten = $("#awp_agency_state_name_1").val();
            var itemCode = $("#awp_item_code").val();
            var finYear = $("#PIP_Financial_Year").val();
            for (var i = 0; i < data.length; i++) {
                if (data[i].state_name == staten && data[i].pip_item_code == itemCode) {
                    //alert(data[i].pip_total);
                    $("#awp_total").val(data[i].pip_total);
                    $("#awp_estimated_cost_for_five_years").val(data[i].pip_estimated_cost_for_five_years);
                }

            }

        }

    });

}



function Year_Wise_PIP_Info() {//prateek
    
    var year = $('#PIP_Financial_Year').val();
    if (year == '2020-21' || year == '2021-22') {
        $('#SAVE_BTN').prop('disabled', true);
    } else {
        $('#SAVE_BTN').prop('disabled', false);
    }
    
    
    var awp_agency_state_name = $('#awp_agency_state_name_1').val();

    if (Main_Statename != "") {


        if (AWP_Financial_Year != "0") {

            AWP_FINYEAR_Info();

            if (awp_agency_state_name == "NPMU") {
                AjaxCall();
            } else {
                $("#awp_workactivity").html("");
                AWP_WorkActivity_Info();
            }

            AWP_Financial_Year = $('#PIP_Financial_Year').val();

        }

        else {
            AWP_Financial_Year = "";
            alert("Please Select Financial Year");
        }

    } else {

        alert("Please Select StateName");
    }

    if (awp_agency_state_name == "NPMU") {
        AjaxCall();
    } else {
        $("#awp_workactivity").html("");
        AWP_WorkActivity_Info();
    }


}

// AWP Retriving Data
/*Akash*/
var awp_a_component = 0;
var awp_b_component = 0;
function AWP_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            
            awp_a_component = 0;
            AWP_Total_value = 0;
            var Awp_A1_1 = 0;
            var Awp_A1_2 = 0;
            var Awp_A1_3 = 0;
            var Awp_A2 = 0;
            var Awp_A3 = 0;
            var Awp_A4 = 0;
            var Awp_A5 = 0;
            var Awp_A6 = 0;
            var Awp_T6 = 0;
            AWP_activity_Array = [];
            AWP_activity__YearsArray = [];
            var awp_financial_year_20_21_total = 0;

            var tr = '';
            var AgencyName = "";
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {
                
                var Financial_20_21_sum = 0;
                var Financial_21_22_sum = 0;
                var Financial_22_23_sum = 0;
                var Financial_23_24_sum = 0;
                var Financial_24_25_sum = 0;
                var Financial_25_26_sum = 0;
                var Comulative_Sum = 0;
                var Total_Estimated_Cost = 0;
                var ddlst = {};
                var ddlst_year = {};
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {

                        if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {

                            awp_a_component += 1;

                            if (!ddlst[data[i].awp_workactivity]) {
                                AWP_activity_Array.push(data[i].awp_workactivity);
                                ddlst[data[i].awp_workactivity] = data[i].awp_workactivity;

                            }

                            if (!ddlst_year[data[i].awp_fin_year]) {
                                AWP_activity__YearsArray.push(data[i].awp_fin_year);
                                ddlst_year[data[i].awp_fin_year] = data[i].awp_fin_year;

                            }

                            var awp_item_code = "";
                            if (data[i].awp_item_code != null) {
                                awp_item_code = data[i].awp_item_code;
                            }
                            var awp_uid = "";
                            if (data[i].awp_uid != null) {
                                awp_uid = data[i].awp_uid;
                            }
                            var awp_workactivity = "";
                            if (data[i].awp_workactivity != null) {
                                awp_workactivity = data[i].awp_workactivity;
                            }
                            var awp_total = "";
                            if (data[i].awp_total != null) {
                                awp_total = data[i].awp_total;
                            }

                            //mohann

                            var awp_estimated_cost_for_five_years = "";
                            if (data[i].awp_estimated_cost_for_five_years != null && data[i].awp_estimated_cost_for_five_years != "") {
                                var ItemCode = data[i].awp_item_code;
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].awp_estimated_cost_for_five_years);
                                var sss1 = data[i].awp_activity_id;
                                if (sss1 == "A1.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A1_1 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A1.2") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A1_2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A1.3") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A1_3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A2.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A3.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A4.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A4 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A5.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A5 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A6.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_A6 += parseFloat(Yearss);
                                }
                                else if (sss1 == "26.02") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years; //prateek
                                    Awp_T6 += parseFloat(Yearss);
                                    //alert(Awp_T6);
                                }

                                awp_estimated_cost_for_five_years = data[i].awp_estimated_cost_for_five_years;
                            }

                            var awp_physical_year_20_21 = 0;
                            if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                                awp_physical_year_20_21 = data[i].awp_physical_year_20_21;
                            }
                            var awp_financial_year_20_21 = 0;
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                awp_financial_year_20_21_total += parseFloat(data[i].awp_financial_year_20_21);
                                awp_financial_year_20_21 = data[i].awp_financial_year_20_21;
                            }


                            var awp_activity_id = "";
                            if (data[i].awp_activity_id != null) {
                                awp_activity_id = data[i].awp_activity_id;
                            }
                            var awpcomponent = "";
                            if (data[i].awpcomponent != null) {
                                awpcomponent = data[i].awpcomponent;
                            }

                            var Category_Name = "";
                            if (data[i].awp_category != null) {
                                Category_Name = data[i].awp_category;
                            }

                            if (data[i].awp_fin_year != null && data[i].awp_fin_year != "0") {
                                if (data[i].awp_fin_year == "2020-21") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_20_21_sum = Financial_20_21_sum + fin_sum;

                                    
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit" disabled></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }

                                }
                                if (data[i].awp_fin_year == "2021-22") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_21_22_sum = Financial_21_22_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '"/></td>' +
                                        '</td><td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2022-23") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_22_23_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn " onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2023-24") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_23_24_sum = Financial_23_24_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn " onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2024-25") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_24_25_sum = Financial_24_25_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn " onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2025-26") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_25_26_sum = Financial_25_26_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td><button class="btn btn-primary disable_awp_btn " onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '"/></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }


                            }

                        }
                    }
                    tr += '<tr><td></td><td></td><td></td><td></td><td colspan="3">TOTAL OF COMPONENT A</td>' +
                        '<td></td><td colspan="">' + Total_Estimated_Cost.toFixed(2) + '</td><td colspan="2" style="text-align: end;">' + Financial_20_21_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_21_22_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_22_23_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_23_24_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_24_25_sum.toFixed(2) + '</td><td colspan="2"  style="text-align: end;">' + Financial_25_26_sum.toFixed(2) + '</td><td></td></tr>';
                    
                    $('#tbody_AWP_Data').html(tr);
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', true);
                    } else if (Email == 'kirannayyar95@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', false);
                    }
                    if (Access_Auth == 'readonly') {
                        $('.disable_awp_btn').prop('disabled', true);
                    }
                    //if (Email == 'vinodk02@gmail.com') {
                    //    $('.disable_awp_btn').prop('disabled', false);
                    //} 
                    //else {
                    //    $('.disable_awp_btn').prop('disabled', true);
                    //}
                }

            }




            if (tr == '') {
                tr = '<tr  colspan="23" style="text-align:center;"><td colspan="23">No Data</td></tr>';
                $('#tbody_AWP_Data').html(tr);
            }

            $('#Awp_A1_1').text(Awp_A1_1.toFixed(2));
            $('#Awp_A1_2').text(Awp_A1_2.toFixed(2));
            $('#Awp_A1_3').text(Awp_A1_3.toFixed(2));
            $('#Awp_A2').text(Awp_A2.toFixed(2));
            $('#Awp_A3').text(Awp_A3.toFixed(2));
            $('#Awp_A4').text(Awp_A4.toFixed(2));
            $('#Awp_A5').text(Awp_A5.toFixed(2));
            $('#Awp_A6').text(Awp_A6.toFixed(2));
            $('#Awp_T6').text(Awp_T6.toFixed(2));
            var total = Awp_A1_1 + Awp_A1_2 + Awp_A1_3 + Awp_A2 + Awp_A3 + Awp_A4 + Awp_A5 + Awp_A6 + Awp_T6;
            $('#AWP_A_Value_Total').text(total.toFixed(2) + " Cr.");
            AWP_Total_value = 0;

            AWP_Total_value = total.toFixed(2);
            AWP_B_Info();

        }
    });
}


function AWP_B_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_B_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            
            awp_b_component = 0;
            var Awp_B1 = 0;
            var Awp_B2 = 0;
            var Awp_B3 = 0;
            var Awp_B4 = 0;
            var Awp_B5 = 0;
            var awp_financial_year_20_21_total = 0;
            AWP_B_activity_Array = [];
            AWP_B_activity_YearsArray = [];
            var tr = '';
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            else {
                var Financial_20_21_sum = 0;
                var Financial_21_22_sum = 0;
                var Financial_22_23_sum = 0;
                var Financial_23_24_sum = 0;
                var Financial_24_25_sum = 0;
                var Comulative_Sum = 0;
                var Total_Estimated_Cost = 0;
                var ddlst = {};
                var ddlst_year = {};
                if (data.length != 0) {


                    for (var i = 0; i < data.length; i++) {
                        if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {

                            awp_b_component += 1;
                            if (!ddlst[data[i].awp_workactivity]) {
                                AWP_B_activity_Array.push(data[i].awp_workactivity);
                                ddlst[data[i].awp_workactivity] = data[i].awp_workactivity;

                            }
                            if (!ddlst_year[data[i].awp_fin_year]) {
                                AWP_B_activity_YearsArray.push(data[i].awp_fin_year);
                                ddlst_year[data[i].awp_fin_year] = data[i].awp_fin_year;

                            }

                            var awp_item_code = "";
                            if (data[i].awp_item_code != null) {
                                awp_item_code = data[i].awp_item_code;
                            }
                            var awp_uid = "";
                            if (data[i].awp_uid != null) {
                                awp_uid = data[i].awp_uid;
                            }
                            var awp_workactivity = "";
                            if (data[i].awp_workactivity != null) {
                                awp_workactivity = data[i].awp_workactivity;
                            }
                            var awp_total = "";
                            if (data[i].awp_total != null) {
                                awp_total = data[i].awp_total;
                            }
                            var awp_estimated_cost_for_five_years = "";
                            if (data[i].awp_estimated_cost_for_five_years != null && data[i].awp_estimated_cost_for_five_years != "") {
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].awp_estimated_cost_for_five_years);
                                var ItemCode = data[i].awp_item_code;
                                var sss1 = data[i].awp_activity_id;
                                if (sss1 == "B1.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_B1 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B2.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_B2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B3.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_B3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B4.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_B4 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B5.1") {
                                    var Yearss = data[i].awp_estimated_cost_for_five_years;
                                    Awp_B5 += parseFloat(Yearss);
                                }

                                awp_estimated_cost_for_five_years = data[i].awp_estimated_cost_for_five_years;
                            }

                            var awp_physical_year_20_21 = 0;
                            if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                                awp_physical_year_20_21 = parseFloat(data[i].awp_physical_year_20_21);
                            }
                            var awp_financial_year_20_21 = 0;
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                awp_financial_year_20_21_total += parseFloat(data[i].awp_financial_year_20_21);
                                awp_financial_year_20_21 = parseFloat(data[i].awp_financial_year_20_21);
                            }
                            var awp_activity_id = "";
                            if (data[i].awp_activity_id != null) {
                                awp_activity_id = data[i].awp_activity_id;
                            }
                            var awpcomponent = "";
                            if (data[i].awpcomponent != null) {
                                awpcomponent = data[i].awpcomponent;
                            }
                            
                            if (data[i].awp_fin_year != null && data[i].awp_fin_year != "0") {
                                if (data[i].awp_fin_year == "2020-21") {

                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_20_21_sum = Financial_20_21_sum + fin_sum;
                                    
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '</td><td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }


                                }
                                if (data[i].awp_fin_year == "2021-22") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_21_22_sum = Financial_21_22_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly/></td>' +
                                        '</td><td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2022-23") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_22_23_sum = Financial_22_23_sum + fin_sum;

                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                       '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2023-24") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_23_24_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '</td><td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2024-25") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_24_25_sum = Financial_24_25_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                       '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }


                            }


                        }
                    }
                    tr += '<tr><td></td><td></td><td></td><td colspan="3">TOTAL OF COMPONENT B</td><td></td>' +
                        '<td></td><td colspan="">' + Total_Estimated_Cost.toFixed(2) + '</td><td colspan="2" style="text-align: end;">' + Financial_20_21_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_21_22_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_22_23_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_23_24_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_24_25_sum.toFixed(2) + '</td></tr>';

                    $('#tbody_AWP_B_Data').html(tr);
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', true);
                    } else if (Email == 'kirannayyar95@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', false);
                    }
                    if (Access_Auth == 'readonly') {
                        $('.disable_awp_btn').prop('disabled', true);
                    }
                }

            }

            if (tr == '') {
                tr = '<tr  colspan="24" style="text-align:center;"><td colspan="24">No Data</td></tr>';
                $('#tbody_AWP_B_Data').html(tr);
            }



            $('#Awp_B1').text(Awp_B1.toFixed(2));
            $('#Awp_B2').text(Awp_B2.toFixed(2));
            $('#Awp_B3').text(Awp_B3.toFixed(2));
            $('#Awp_B4').text(Awp_B4.toFixed(2));
            $('#Awp_B5').text(Awp_B5.toFixed(2));
            var total = Awp_B1 + Awp_B2 + Awp_B3 + Awp_B4 + Awp_B5;


            var Ab1 = parseFloat(AWP_Total_value).toFixed(2);
            var Ab2 = parseFloat(total);
            var A = Ab1.toFixed(2);

            var B = Ab2.toFixed(2);

            var C11 = parseFloat(A) + parseFloat(B);
            $('#Awp_B_total').text(total.toFixed(2) + " Cr.");
            $('#AWP_Total_value').text(C11.toFixed(2) + " Cr.");
            $('#AWP_Total_value1').text(C11.toFixed(2) + " Cr.");



            AWP_WorkActivity_Info();
        }
    });
}

//PIP Data Save

function Save_AWP_Form_Info() {

    var i = 0;
    var awp_fin_year = $("#awp_fin_year").val();
    var awp_workactivity = $('#awp_workactivity').val();
    var awp_total = $('#awp_total').val();
    var awp_estimated_cost_for_five_years = $('#awp_estimated_cost_for_five_years').val();
    var awp_physical_year_20_21 = $('#awp_physical_year_20_21').val();
    var awp_financial_year_20_21 = $('#awp_financial_year_20_21').val();

    if (awp_total == ""){
        awp_total = 0;
    }
    if (awp_estimated_cost_for_five_years == "") {
        awp_estimated_cost_for_five_years = 0;
    }
    if (awp_physical_year_20_21 == "") {
        awp_physical_year_20_21 = 0;
    }
    if (awp_financial_year_20_21 == "") {
        awp_financial_year_20_21 = 0;
    }

    if (Main_Statename == "") {
        i = 1;
        alert("Please Select StateName");
    }
    else if (awp_workactivity == "0") {
        i = 1;
        alert("Please Select Work and Activity");
    } else if (awp_fin_year == "0") {
        i = 1;
        alert("Please Select Financial Year");
    } else if (Awp_A_Form_FYear_matched == 1) {
        i = 1;
        alert("Already this Financial Year Data Inserted on DataBase");
    }



    if (i == 0) {

        var obj = {};
        obj.state_name = Main_Statename;
        obj.awpcomponent = $('#awp_component').val();
        obj.awp_fin_year = $('#awp_fin_year').val();
        obj.awp_estimated_cost_for_five_years = awp_estimated_cost_for_five_years;
        obj.awp_workactivity = $('#awp_workactivity').val();
        obj.awp_item_code = $('#awp_item_code').val();
        obj.awp_total = awp_total;
        obj.awp_physical_year_20_21 = awp_physical_year_20_21;
        obj.awp_financial_year_20_21 = awp_financial_year_20_21;
        obj.awp_agency_name = $('#nodal_agency_name').text();
        obj.awp_agency_officer_name = Main_Statename;
        obj.awp_activity_id = $('#awp_activity_id').val();
        //obj.awp_month = $('#awp_month').val();
        //obj.awp_cumulative = $('#awp_cumulative').val();
        obj.awp_month = "4";
        obj.awp_cumulative = "a";
        obj.awp_category = $('#awp_category').val();

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_AWP_Form_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                $('#awp_category').val('');
                $('#nodal_agency_name1').text('');
                $('#nodal_agency_name').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#awp_component').val("");
                $('#awp_activity_id').val("");
                $('#awp_estimated_cost_for_five_years').val("");
                $('#awp_workactivity').val("0");
                $('#awp_item_code').val("");
                $('#awp_total').val("");
                $('#awp_physical_year_20_21').val("");
                $('#awp_financial_year_20_21').val("");
                $('#awp_fin_year').val("0");
                $('#awp_month').val("");
                $('#awp_cumulative').val("");
                AWP_SessionInfo();
                AWP_Total_value = 0;

            }

        });
    }


}


function Save_AWP_B_Form_Info() {

    var i = 0;
    var awp_fin_b_year = $("#awp_fin_b__year").val();
    var awp_b_workactivity = $('#awp_b_workactivity').val();

    if (Main_Statename == "") {
        i = 1;
        alert("Please Select StateName");
    }
    else if (awp_b_workactivity == "0") {
        i = 1;
        alert("Please Select Work and Activity");
    } else if (awp_fin_b_year == "0") {
        i = 1;
        alert("Please Select Financial Year");
    }
    else if (Awp_A_Form_FYear_matched == 1) {
        i = 1;
        alert("Already this Financial Year Data Inserted on DataBase");
    }

    var awp_workactivity = $('#awp_b_workactivity').val();
    if (awp_workactivity != "0") {

        if (i == 0) {
            var obj = {};
            obj.state_name = Main_Statename;
            obj.awpcomponent = $('#awp_b_component').val();
            obj.awp_estimated_cost_for_five_years = $('#awp_b_estimated_cost_for_five_years').val();
            obj.awp_workactivity = $('#awp_b_workactivity').val();
            obj.awp_item_code = $('#awp_b_item_code').val();
            obj.awp_total = $('#awp_b_total').val();
            obj.awp_physical_year_20_21 = $('#awp_b_physical_year_20_21').val();
            obj.awp_financial_year_20_21 = $('#awp_b_financial_year_20_21').val();
            obj.awp_agency_name = $('#nodal_agency_name').text();
            obj.awp_agency_officer_name = Main_Statename;
            obj.awp_activity_id = $('#awp_b_activity_id').val();
            obj.awp_fin_year = $('#awp_fin_b__year').val();
            obj.awp_month = $('#awp_b_month').val();
            obj.awp_cumulative = $('#awp_b_cumulative').val();
            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/mis_new/Save_AWP_B_Form_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",

                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    $('#nodal_agency_name1').text('');
                    $('#nodal_agency_name').text('');
                    Main_Statename = "";
                    $('#awp_agency_state_name_1').val('0');
                    $('#awp_b_month').val("");
                    $('#awp_b_cumulative').val("");
                    $('#awp_b_component').val("");
                    $('#awp_b_activity_id').val("");
                    $('#awp_b_estimated_cost_for_five_years').val("");
                    $('#awp_b_workactivity').val("0");
                    $('#awp_b_item_code').val("");
                    $('#awp_b_total').val("");
                    $('#awp_b_physical_year_20_21').val("");
                    $('#awp_b_financial_year_20_21').val("");
                    $('#awp_fin_b__year').val("0");
                    AWP_SessionInfo();
                    AWP_Total_value = 0;

                }

            });
        }

    }


}

// Edit Delete



function cancelcomp_A_Support(i) {
    $('#Hide_AWP1_TR' + i).hide();
    $('#AWP1_TR' + i).show();
}
function editrowcomp_A_Good(i) {

    $('#AWP1_TR' + i).hide();
    $('#Hide_AWP1_TR' + i).show();
}


function Delete_AWP1(Id) {


    var obj = {};
    obj.id = Id;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Delete_AWP_Form_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            AWP_Total_value = 0;
            AWP_Info();
            AWP_B_Info();

        }

    });
}

function Update_AWP1(Id, RowNo) {

    var awp_total = $('#awp_total' + RowNo).val();
    var awp_estimated_cost_for_five_years = $('#awp_estimated_cost_for_five_years' + RowNo).val()
    var awp_physical_year_20_21 = $('#awp_physical_year_20_21' + RowNo).val();
    var awp_financial_year_20_21 = $('#awp_financial_year_20_21' + RowNo).val();
    if (awp_total == "") {
        awp_total = 0;
    }
    if (awp_estimated_cost_for_five_years == "") {
        awp_estimated_cost_for_five_years = 0;
    }
    if (awp_physical_year_20_21 == "") {
        awp_physical_year_20_21 = 0;
    }
    if (awp_financial_year_20_21 == "") {
        awp_financial_year_20_21 = 0;
    }

    var obj = {};
    obj.id = Id;
    obj.state_name = $('#awp_statename' + RowNo).val();
    obj.awp_item_code = $('#awp_item_code' + RowNo).val();
    obj.awp_uid = $('#awp_uid' + RowNo).val();
    obj.awpcomponent = $('#awp_component' + RowNo).val();
    obj.awp_activity_id = $('#awp_activity_id' + RowNo).val();
    obj.awp_workactivity = $('#awp_workactivity' + RowNo).val();
    obj.awp_total = awp_total;

    obj.awp_fin_year = $('#awp_fin_year' + RowNo).val();
    obj.awp_estimated_cost_for_five_years = awp_estimated_cost_for_five_years;
    obj.awp_category = $('#awp_category' + RowNo).val();


    obj.awp_physical_year_20_21 = awp_physical_year_20_21;
    obj.awp_financial_year_20_21 = awp_financial_year_20_21;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Update_AWP_Form_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            AWP_Total_value = 0;
            AWP_Info();
            AWP_B_Info();
            Year_Wise_PIP_Info();

        }

    });
}


// Edit Delete AWP-B Form


function cancelcomp_A_Support2(i) {
    $('#Hide_AWP2_TR' + i).hide();
    $('#AWP2_TR' + i).show();
}
function editrowcomp_A_Good2(i) {

    $('#AWP2_TR' + i).hide();
    $('#Hide_AWP2_TR' + i).show();
}


function Delete_AWP2(Id) {


    var obj = {};
    obj.id = Id;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Delete_AWP_B_Form_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            AWP_Total_value = 0;

            AWP_Info();
            AWP_B_Info();

        }

    });
}
/*Akash*/
function Update_AWP2(Id, RowNo) {
    
    var obj = {};
    obj.id = Id;
    obj.state_name = $('#awp_statename1_b' + RowNo).val();
    obj.awp_item_code = $('#awp_item_code1_b' + RowNo).val();
    obj.awp_uid = $('#awp_uid1_b' + RowNo).val();
    obj.awpcomponent = $('#awpcomponent1_b' + RowNo).val();
    obj.awp_activity_id = $('#awp_activity_id1_b' + RowNo).val();
    obj.awp_workactivity = $('#awp_workactivity1_b' + RowNo).val();
    obj.awp_total = $('#awp_total1_b' + RowNo).val();
    /*obj.awp_fin_year = $('#awp_fin_year1').val();*/
    obj.awp_estimated_cost_for_five_years = $('#awp_estimated_cost_for_five_years1_b' + RowNo).val();
    obj.awp_physical_year_20_21 = $('#awp_physical_year_20_211_b' + RowNo).val();
    obj.awp_financial_year_20_21 = $('#awp_financial_year_20_211_b' + RowNo).val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Update_AWP_B__Form_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            AWP_Total_value = 0;
            AWP_Info();
            AWP_B_Info();

        }

    });
}


function AwP_A_Financial_Year() {

    var awp_fin_year = $('#awp_fin_year').val();
    if (awp_fin_year == '2020-21' || awp_fin_year == '2021-22') {
        $('#SAVE_BTN').prop('disabled', true);
    } else {
        $('#SAVE_BTN').prop('disabled', false);
    }
    Awp_A_Form_FYear_matched = 0;
    if (awp_fin_year != "0") {
        var awp_workactivity = $('#awp_workactivity').val();

        if (awp_workactivity != "0") {
            var Awp_matched = 0;
            if (AWP_activity_Array.length != 0) {

                for (var i = 0; i < AWP_activity_Array.length; i++) {
                    if (AWP_activity_Array[i] == awp_workactivity) {
                        Awp_matched = 1;
                    }
                }

            }

            if (Awp_matched == 1) {
                if (AWP_activity__YearsArray.length != 0) {

                    for (var i = 0; i < AWP_activity__YearsArray.length; i++) {
                        if (AWP_activity__YearsArray[i] == awp_fin_year) {
                            Awp_A_Form_FYear_matched = 1;
                            alert("Already this Financial Year Data Inserted on DataBase");
                        }
                    }
                }
            }
        }
        else {
            alert("Please Select Work Activity");
        }

    }
    else {
        alert("Please Select Financial Year");
    }

}

function AwP_B_Financial_Year() {
    var awp_fin_year = $('#awp_fin_b__year').val();
    Awp_A_Form_FYear_matched = 0;
    if (awp_fin_year != "0") {
        var awp_workactivity = $('#awp_b_workactivity').val();

        if (awp_workactivity != "0") {
            var Awp_matched = 0;
            if (AWP_B_activity_Array.length != 0) {

                for (var i = 0; i < AWP_B_activity_Array.length; i++) {
                    if (AWP_B_activity_Array[i] == awp_workactivity) {
                        Awp_matched = 1;
                    }
                }

            }

            if (Awp_matched == 1) {
                if (AWP_B_activity_YearsArray.length != 0) {

                    for (var i = 0; i < AWP_B_activity_YearsArray.length; i++) {
                        if (AWP_B_activity_YearsArray[i] == awp_fin_year) {
                            Awp_A_Form_FYear_matched = 1;
                            alert("Already this Financial Year Data Inserted on DataBase");
                        }
                    }
                }
            }
        }
        else {
            alert("Please Select Work Activity");
        }

    }
    else {
        alert("Please Select Financial Year");
    }
}


//financial year dropdown in AWp form

var AWP_Financial_Year = "";

function Year_Wise_PIP_Info() {
    //prateek
    var year = $('#PIP_Financial_Year').val();
    if (year == "2020-21" || year == "2021-22") {
        $('#SAVE_BTN').prop('disabled', true);
    } else {
        $('#SAVE_BTN').prop('disabled', false);
    }
    if (Access_Auth == 'readonly') {
        $('#SAVE_BTN').prop("disabled", true);
    }
    if (Main_Statename != "") {
        AWP_Financial_Year = $('#PIP_Financial_Year').val();
        //alert(AWP_Financial_Year);
        if (AWP_Financial_Year == "0") {
            AWP_Financial_Year = "ALL";
            AWP_FINYEAR_Info();
        }
        else {
            AWP_FINYEAR_Info();
        }
    } else {

        alert("Please Select StateName");
    }
}


function Year_Wise_AWP_Info() {
    
   
    if (Main_Statename != "") {
        AWP_Financial_Year = $('#AWP_Financial_Year').val();
        if (AWP_Financial_Year == "0") {
            AWP_Financial_Year = "ALL";
            
        }
        //else {
        //    AWP_Financial_Year = "";
        //    alert("Please Select Financial Year");
        //}
        AWP_FINYEAR_Info();
    } else {

        alert("Please Select StateName");
    }
}


// AWP Retriving Data
/*Akash*/
function AWP_FINYEAR_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            
            AWP_Total_value = 0;
            var Awp_A1_1 = 0;
            var Awp_A1_2 = 0;
            var Awp_A1_3 = 0;
            var Awp_A2 = 0;
            var Awp_A3 = 0;
            var Awp_A4 = 0;
            var Awp_A5 = 0;
            var Awp_A6 = 0;
            var Awp_T6 = 0;
            AWP_activity_Array = [];
            AWP_activity__YearsArray = [];
            var awp_financial_year_20_21_total = 0;

            var tr = '';
            var AgencyName = "";
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {

                var Financial_20_21_sum = 0;
                var Financial_21_22_sum = 0;
                var Financial_22_23_sum = 0;
                var Financial_23_24_sum = 0;
                var Financial_24_25_sum = 0;
                var Financial_25_26_sum = 0;
                var Comulative_Sum = 0;
                var Total_Estimated_Cost = 0;
                var ddlst = {};
                var ddlst_year = {};
                if (data.length != 0) {
                    awp_a_component = 0;
                    for (var i = 0; i < data.length; i++) {

                        if (AWP_Financial_Year == "ALL") {


                            if (!ddlst[data[i].awp_workactivity]) {
                                AWP_activity_Array.push(data[i].awp_workactivity);
                                ddlst[data[i].awp_workactivity] = data[i].awp_workactivity;

                            }

                            if (!ddlst_year[data[i].awp_fin_year]) {
                                AWP_activity__YearsArray.push(data[i].awp_fin_year);
                                ddlst_year[data[i].awp_fin_year] = data[i].awp_fin_year;

                            }

                            var awp_item_code = "";
                            if (data[i].awp_item_code != null) {
                                awp_item_code = data[i].awp_item_code;
                            }
                            var awp_uid = "";
                            if (data[i].awp_uid != null) {
                                awp_uid = data[i].awp_uid;
                            }
                            var awp_workactivity = "";
                            if (data[i].awp_workactivity != null) {
                                awp_workactivity = data[i].awp_workactivity;
                            }
                            var awp_total = "";
                            if (data[i].awp_total != null) {
                                awp_total = data[i].awp_total;
                            }

                            var Category_Name = "";
                            if (data[i].awp_category != null) {
                                Category_Name = data[i].awp_category;
                            }

                            //mohann

                            var awp_estimated_cost_for_five_years = "";
                            if (data[i].awp_estimated_cost_for_five_years != null && data[i].awp_estimated_cost_for_five_years != "") {
                                var ItemCode = data[i].awp_item_code;
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].awp_estimated_cost_for_five_years);

                                awp_estimated_cost_for_five_years = data[i].awp_estimated_cost_for_five_years;
                            }

                            var awp_physical_year_20_21 = 0;
                            if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                                awp_physical_year_20_21 = data[i].awp_physical_year_20_21;
                            }
                            var awp_financial_year_20_21 = 0;
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                awp_financial_year_20_21_total += parseFloat(data[i].awp_financial_year_20_21);
                                awp_financial_year_20_21 = data[i].awp_financial_year_20_21;

                                var sss1 = data[i].awp_activity_id;
                                if (sss1 == "A1.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A1_1 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A1.2") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A1_2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A1.3") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A1_3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A2.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A3.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A4.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A4 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A5.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A5 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A6.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A6 += parseFloat(Yearss);
                                }
                                else if (sss1 == "26.02") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_T6 += parseFloat(Yearss);
                                }

                            }


                            var awp_activity_id = "";
                            if (data[i].awp_activity_id != null) {
                                awp_activity_id = data[i].awp_activity_id;
                            }
                            var awpcomponent = "";
                            if (data[i].awpcomponent != null) {
                                awpcomponent = data[i].awpcomponent;
                            }


                            if (data[i].awp_fin_year != null && data[i].awp_fin_year != "0") {

                                if (data[i].awp_fin_year == "2020-21") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_20_21_sum = Financial_20_21_sum + fin_sum;


                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }

                                }

                                if (data[i].awp_fin_year == "2021-22") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);

                                    Financial_21_22_sum = parseFloat(awp_financial_year_20_21) + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2022-23") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_22_23_sum = parseFloat(Financial_22_23_sum) + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                      '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '"/></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2023-24") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_23_24_sum = parseFloat(Financial_23_24_sum) + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly/></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2024-25") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_24_25_sum = parseFloat(Financial_24_25_sum) + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '"/></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2025-26") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_25_26_sum = parseFloat(Financial_25_26_sum) + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '"/></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }


                            }


                        }
                        else if (AWP_Financial_Year == data[i].awp_fin_year) {
                            if (!ddlst[data[i].awp_workactivity]) {
                                AWP_activity_Array.push(data[i].awp_workactivity);
                                ddlst[data[i].awp_workactivity] = data[i].awp_workactivity;

                            }

                            if (!ddlst_year[data[i].awp_fin_year]) {
                                AWP_activity__YearsArray.push(data[i].awp_fin_year);
                                ddlst_year[data[i].awp_fin_year] = data[i].awp_fin_year;

                            }

                            var awp_item_code = "";
                            if (data[i].awp_item_code != null) {
                                awp_item_code = data[i].awp_item_code;
                            }
                            var awp_uid = "";
                            if (data[i].awp_uid != null) {
                                awp_uid = data[i].awp_uid;
                            }
                            var awp_workactivity = "";
                            if (data[i].awp_workactivity != null) {
                                awp_workactivity = data[i].awp_workactivity;
                            }
                            var awp_total = "";
                            if (data[i].awp_total != null) {
                                awp_total = data[i].awp_total;
                            }

                            //mohann

                            var awp_estimated_cost_for_five_years = "";
                            if (data[i].awp_estimated_cost_for_five_years != null && data[i].awp_estimated_cost_for_five_years != "") {
                                var ItemCode = data[i].awp_item_code;
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].awp_estimated_cost_for_five_years);

                                awp_estimated_cost_for_five_years = data[i].awp_estimated_cost_for_five_years;
                            }

                            var awp_physical_year_20_21 = 0;
                            if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                                awp_physical_year_20_21 = data[i].awp_physical_year_20_21;
                            }
                            var awp_financial_year_20_21 = 0;
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                awp_financial_year_20_21_total += parseFloat(data[i].awp_financial_year_20_21);
                                awp_financial_year_20_21 = data[i].awp_financial_year_20_21;

                                var sss1 = data[i].awp_activity_id;
                                if (sss1 == "A1.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A1_1 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A1.2") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A1_2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A1.3") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A1_3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A2.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A3.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A4.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A4 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A5.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A5 += parseFloat(Yearss);
                                }
                                else if (sss1 == "A6.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_A6 += parseFloat(Yearss);
                                }

                                else if (sss1 == "26.02") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_T6 += parseFloat(Yearss);
                                }

                            }


                            var awp_activity_id = "";
                            if (data[i].awp_activity_id != null) {
                                awp_activity_id = data[i].awp_activity_id;
                            }
                            var awpcomponent = "";
                            if (data[i].awpcomponent != null) {
                                awpcomponent = data[i].awpcomponent;
                            }

                            var Category_Name = "";
                            if (data[i].awp_category != null) {
                                Category_Name = data[i].awp_category;
                            }

                            if (data[i].awp_fin_year != null && data[i].awp_fin_year != "0") {
                                if (data[i].awp_fin_year == "2020-21") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_20_21_sum = Financial_20_21_sum + fin_sum;


                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit" ></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }

                                }
                                if (data[i].awp_fin_year == "2021-22") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_21_22_sum = Financial_21_22_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2022-23") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_22_23_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2023-24") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_23_24_sum = Financial_23_24_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2024-25") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_24_25_sum = Financial_24_25_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                      '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2025-26") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_25_26_sum = Financial_25_26_sum + fin_sum;
                                    tr += '<tr id="AWP1_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + Category_Name + '</td><td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td><button class="btn btn-primary disable_awp_btn disable_awp_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn disable_awp_btn" onclick="Delete_AWP1(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +
                                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awp_category' + i + '" value="' + Category_Name + '" readonly /></td><td><input type="text" class="form-control" id="awpcomponent' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_21' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_21' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }


                            }

                        }
                        awp_a_component += 1;


                    }
                    tr += '<tr><td></td><td></td><td colspan="5">TOTAL OF COMPONENT A</td>' +
                        '<td></td><td colspan="">' + Total_Estimated_Cost.toFixed(2) + '</td><td colspan="2" style="text-align: end;">' + Financial_20_21_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_21_22_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_22_23_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_23_24_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_24_25_sum.toFixed(2) + '</td><td colspan="2"  style="text-align: end;">' + Financial_25_26_sum.toFixed(2) + '</td></tr>';

                    $('#tbody_AWP_Data').html(tr);
                    
                    if (Access_Auth == 'readonly') {
                        $('.disable_awp_btn').prop('disabled', true);
                    }
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', true);
                    } else if (Email == 'kirannayyar95@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', false);
                    }
                    
                    /*Email = '@Session["Email"]';*/
                    //if (Email == 'vinodk02@gmail.com') {
                    //    $('.disable_awp_btn').prop('disabled', false);
                    //} else {
                    //    $('.disable_awp_btn').prop('disabled', true);
                    //}
                }

            }



            if (tr == '') {
                tr = '<tr  colspan="22" style="text-align:center;"><td colspan="22">No Data</td></tr>';
                $('#tbody_AWP_Data').html(tr);
            }

            $('#Awp_A1_1').text(Awp_A1_1.toFixed(2));
            $('#Awp_A1_2').text(Awp_A1_2.toFixed(2));
            $('#Awp_A1_3').text(Awp_A1_3.toFixed(2));
            $('#Awp_A2').text(Awp_A2.toFixed(2));
            $('#Awp_A3').text(Awp_A3.toFixed(2));
            $('#Awp_A4').text(Awp_A4.toFixed(2));
            $('#Awp_A5').text(Awp_A5.toFixed(2));
            $('#Awp_A6').text(Awp_A6.toFixed(2));
            $('#Awp_T6').text(Awp_T6.toFixed(2));

            var total = Awp_A1_1 + Awp_A1_2 + Awp_A1_3 + Awp_A2 + Awp_A3 + Awp_A4 + Awp_A5 + Awp_A6 + Awp_T6;
            $('#AWP_A_Value_Total').text(total.toFixed(2) + " Cr.");
            AWP_Total_value = 0;

            AWP_Total_value = total.toFixed(2);
            AWP_B_FINYEAR_Info();

        }
    });
}

/*Akash*/
function AWP_B_FINYEAR_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_B_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            var Awp_B1 = 0;
            var Awp_B2 = 0;
            var Awp_B3 = 0;
            var Awp_B4 = 0;
            var Awp_B5 = 0;
            var awp_financial_year_20_21_total = 0;
            AWP_B_activity_Array = [];
            AWP_B_activity_YearsArray = [];
            var tr = '';
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            else {
                var Financial_20_21_sum = 0;
                var Financial_21_22_sum = 0;
                var Financial_22_23_sum = 0;
                var Financial_23_24_sum = 0;
                var Financial_24_25_sum = 0;
                var Comulative_Sum = 0;
                var Total_Estimated_Cost = 0;
                var ddlst = {};
                var ddlst_year = {};
                awp_b_component = 0;
                if (data.length != 0) {
                    awp_b_component += 1;

                    for (var i = 0; i < data.length; i++) {

                        if (AWP_Financial_Year == "ALL") {
                            if (!ddlst[data[i].awp_workactivity]) {
                                AWP_B_activity_Array.push(data[i].awp_workactivity);
                                ddlst[data[i].awp_workactivity] = data[i].awp_workactivity;

                            }
                            if (!ddlst_year[data[i].awp_fin_year]) {
                                AWP_B_activity_YearsArray.push(data[i].awp_fin_year);
                                ddlst_year[data[i].awp_fin_year] = data[i].awp_fin_year;

                            }

                            var awp_item_code = "";
                            if (data[i].awp_item_code != null) {
                                awp_item_code = data[i].awp_item_code;
                            }
                            var awp_uid = "";
                            if (data[i].awp_uid != null) {
                                awp_uid = data[i].awp_uid;
                            }
                            var awp_workactivity = "";
                            if (data[i].awp_workactivity != null) {
                                awp_workactivity = data[i].awp_workactivity;
                            }
                            var awp_total = "";
                            if (data[i].awp_total != null) {
                                awp_total = data[i].awp_total;
                            }
                            var awp_estimated_cost_for_five_years = "";
                            if (data[i].awp_estimated_cost_for_five_years != null && data[i].awp_estimated_cost_for_five_years != "") {
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].awp_estimated_cost_for_five_years);
                                var ItemCode = data[i].awp_item_code;


                                awp_estimated_cost_for_five_years = data[i].awp_estimated_cost_for_five_years;
                            }

                            var awp_physical_year_20_21 = 0;
                            if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                                awp_physical_year_20_21 = parseFloat(data[i].awp_physical_year_20_21);
                            }
                            var awp_financial_year_20_21 = 0;
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                awp_financial_year_20_21_total += parseFloat(data[i].awp_financial_year_20_21);
                                awp_financial_year_20_21 = parseFloat(data[i].awp_financial_year_20_21);


                                var sss1 = data[i].awp_activity_id;
                                if (sss1 == "B1.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B1 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B2.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B3.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B4.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B4 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B5.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B5 += parseFloat(Yearss);
                                }
                            }
                            var awp_activity_id = "";
                            if (data[i].awp_activity_id != null) {
                                awp_activity_id = data[i].awp_activity_id;
                            }
                            var awpcomponent = "";
                            if (data[i].awpcomponent != null) {
                                awpcomponent = data[i].awpcomponent;
                            }

                            if (data[i].awp_fin_year != null && data[i].awp_fin_year != "0") {
                                if (data[i].awp_fin_year == "2020-21") {

                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_20_21_sum = Financial_20_21_sum + fin_sum;

                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                     '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" id="Edit_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')"disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }


                                }
                                if (data[i].awp_fin_year == "2021-22") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_21_22_sum = Financial_21_22_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                       '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><input type="text" class="form-control" id="awp_physical_year_20_211' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2022-23") {

                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_22_23_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                       '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><input type="text" class="form-control" id="awp_physical_year_20_211' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2023-24") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_23_24_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                       '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><input type="text" class="form-control" id="awp_physical_year_20_211' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2024-25") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_24_25_sum = Financial_24_25_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                   '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                    '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly/></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><input type="text" class="form-control" id="awp_physical_year_20_211' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }


                            }

                        } else if (AWP_Financial_Year == data[i].awp_fin_year) {
                            if (!ddlst[data[i].awp_workactivity]) {
                                AWP_B_activity_Array.push(data[i].awp_workactivity);
                                ddlst[data[i].awp_workactivity] = data[i].awp_workactivity;

                            }
                            if (!ddlst_year[data[i].awp_fin_year]) {
                                AWP_B_activity_YearsArray.push(data[i].awp_fin_year);
                                ddlst_year[data[i].awp_fin_year] = data[i].awp_fin_year;

                            }

                            var awp_item_code = "";
                            if (data[i].awp_item_code != null) {
                                awp_item_code = data[i].awp_item_code;
                            }
                            var awp_uid = "";
                            if (data[i].awp_uid != null) {
                                awp_uid = data[i].awp_uid;
                            }
                            var awp_workactivity = "";
                            if (data[i].awp_workactivity != null) {
                                awp_workactivity = data[i].awp_workactivity;
                            }
                            var awp_total = "";
                            if (data[i].awp_total != null) {
                                awp_total = data[i].awp_total;
                            }
                            var awp_estimated_cost_for_five_years = "";
                            if (data[i].awp_estimated_cost_for_five_years != null && data[i].awp_estimated_cost_for_five_years != "") {
                                Total_Estimated_Cost = Total_Estimated_Cost + parseFloat(data[i].awp_estimated_cost_for_five_years);
                                var ItemCode = data[i].awp_item_code;

                                awp_estimated_cost_for_five_years = data[i].awp_estimated_cost_for_five_years;
                            }

                            var awp_physical_year_20_21 = 0;
                            if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                                awp_physical_year_20_21 = parseFloat(data[i].awp_physical_year_20_21);
                            }
                            var awp_financial_year_20_21 = 0;
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                awp_financial_year_20_21_total += parseFloat(data[i].awp_financial_year_20_21);
                                awp_financial_year_20_21 = parseFloat(data[i].awp_financial_year_20_21);

                                var sss1 = data[i].awp_activity_id;
                                if (sss1 == "B1.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B1 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B2.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B2 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B3.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B3 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B4.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B4 += parseFloat(Yearss);
                                }
                                else if (sss1 == "B5.1") {
                                    var Yearss = data[i].awp_financial_year_20_21;
                                    Awp_B5 += parseFloat(Yearss);
                                }
                            }
                            var awp_activity_id = "";
                            if (data[i].awp_activity_id != null) {
                                awp_activity_id = data[i].awp_activity_id;
                            }
                            var awpcomponent = "";
                            if (data[i].awpcomponent != null) {
                                awpcomponent = data[i].awpcomponent;
                            }
                             //asas
                            if (data[i].awp_fin_year != null && data[i].awp_fin_year != "0") {
                                if (data[i].awp_fin_year == "2020-21") {

                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_20_21_sum = Financial_20_21_sum + fin_sum;

                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                      '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly/></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }


                                }
                                if (data[i].awp_fin_year == "2021-22") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_21_22_sum = Financial_21_22_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                    '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                        '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2022-23") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_22_23_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                        '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                     '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2023-24") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_23_24_sum = Financial_22_23_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                      '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td></td><td></td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                     '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><td></td><td></td><td></td><td></td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td></td><td></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }
                                if (data[i].awp_fin_year == "2024-25") {
                                    var fin_sum = parseFloat(awp_financial_year_20_21);
                                    Financial_24_25_sum = Financial_24_25_sum + fin_sum;
                                    tr += '<tr id="AWP2_TR' + i + '"> <td>' + (i + 1) + '</td><td>' + data[i].state_name + ' </td><td>' + awp_item_code + ' </td>' +
                                       '<td>' + awpcomponent + '</td><td>' + awp_activity_id + '</td><td>' + awp_workactivity + '</td><td>' + awp_total + '</td>' +
                                        '<td>' + awp_estimated_cost_for_five_years + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + awp_physical_year_20_21 + '</td><td>' + awp_financial_year_20_21 + '</td><td><button class="btn btn-primary disable_awp_btn" onclick="editrowcomp_A_Good2(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger disable_awp_btn" onclick="Delete_AWP2(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>' +

                                        '<tr id="Hide_AWP2_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="awp_statename1_b' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="awp_item_code1_b' + i + '" value="' + data[i].awp_item_code + '" readonly /></td>' +
                                   '<td><input type="text" class="form-control" id="awpcomponent1_b' + i + '" value="' + data[i].awpcomponent + '" readonly /></td><td><input type="text" class="form-control" id="awp_activity_id1_b' + i + '" value="' + data[i].awp_activity_id + '" readonly /></td><td><input type="text" class="form-control" id="awp_workactivity1_b' + i + '" value="' + data[i].awp_workactivity + '" readonly /></td><td><input type="text" class="form-control" id="awp_total1_b' + i + '" value="' + data[i].awp_total + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="awp_estimated_cost_for_five_years1_b' + i + '" value="' + data[i].awp_estimated_cost_for_five_years + '" readonly/></td><td></td><td></td><td><td></td><td></td><td></td><td></td><td></td><td><input type="text" class="form-control" id="awp_physical_year_20_211_b' + i + '" value="' + data[i].awp_physical_year_20_21 + '"/></td><td><input type="text" class="form-control" id="awp_financial_year_20_211_b' + i + '" value="' + data[i].awp_financial_year_20_21 + '"/></td><td><button type="button" class="btn btn-primary disable_awp_btn" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger disable_awp_btn " type="button" onclick="cancelcomp_A_Support2(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    if (data[i].awp_cumulative != null && data[i].awp_cumulative != "") {
                                        Comulative_Sum = Comulative_Sum + parseFloat(data[i].awp_cumulative);
                                    }
                                }


                            }

                        }



                    }

                    tr += '<tr><td></td><td></td><td colspan="4">TOTAL OF COMPONENT B</td><td></td>' +
                        '<td></td><td colspan="">' + Total_Estimated_Cost.toFixed(2) + '</td><td colspan="2" style="text-align: end;">' + Financial_20_21_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_21_22_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_22_23_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_23_24_sum.toFixed(2) + '</td> <td colspan="2"  style="text-align: end;">' + Financial_24_25_sum.toFixed(2) + '</td></tr>';

                    $('#tbody_AWP_B_Data').html(tr);
                    
                    if (Access_Auth == 'readonly') {
                        $('.disable_awp_btn').prop('disabled', true);
                    }
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', true);
                    } else if (Email == 'kirannayyar95@gmail.com') {
                        $('.disable_awp_btn').prop('disabled', false);
                    }
                }

            }

            if (tr == '') {
                tr = '<tr  colspan="23" style="text-align:center;"><td colspan="23">No Data</td></tr>';
                $('#tbody_AWP_B_Data').html(tr);
            }


            $('#Awp_B1').text(Awp_B1.toFixed(2));
            $('#Awp_B2').text(Awp_B2.toFixed(2));
            $('#Awp_B3').text(Awp_B3.toFixed(2));
            $('#Awp_B4').text(Awp_B4.toFixed(2));
            $('#Awp_B5').text(Awp_B5.toFixed(2));
            var total = Awp_B1 + Awp_B2 + Awp_B3 + Awp_B4 + Awp_B5;

            var Ab1 = parseFloat(AWP_Total_value);
            var Ab2 = parseFloat(total);
            var A = Ab1.toFixed(2);

            var B = Ab2.toFixed(2);

            var C11 = parseFloat(A) + parseFloat(B);
            $('#Awp_B_total').text(total.toFixed(2) + " Cr.");
            $('#AWP_Total_value').text(parseFloat(C11).toFixed(2) + " Cr.");
            $('#AWP_Total_value1').text(parseFloat(C11).toFixed(2) + " Cr.");


            var awp_agency_state_name = $('#awp_agency_state_name_1').val();

            if (awp_agency_state_name == "NPMU") {
                AjaxCall();
            } else {
                $("#awp_workactivity").html("");
                AWP_WorkActivity_Info();
            }

            //    AWP_WorkActivity_Info();
        }
    });
}
