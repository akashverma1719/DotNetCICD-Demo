const c = require("../../Scripts/all_scripts/export-data");

var Main_Statename = "";
var Idd = 0;
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


            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else if (data == "Admin") {
                $('#Agency_AWP_DropDown').show();
                $('#State_AWP_DropDown').hide();
                PHP_Agency_Info();


            }
            else {
                $('#Agency_AWP_DropDown').hide();
                $('#State_AWP_DropDown').show();
                $('#pip_dropdown_state_name').text(data);
                Main_Statename = data;
                PHP_Agency_Info();
                PHP_Agency_Name();
                Get_Fund_Form_Info();
                $('#div_form_insert').show();

            }

            var queryString = new Array();
            $(function () {

                if (queryString.length == 0) {
                    if (window.location.search.split('?').length > 1) {
                        var params = window.location.search.split('?')[1].split('&');
                        if (params.length != 0) {

                            var SS = params[0].split('name=');
                            Idd = SS[1];

                            $.ajax({
                                type: 'GET',
                                contentType: 'application/json; chatset=utf-8',
                                url: '/mis_new/Edit_get_fund',
                                data: { 'id': SS[1] },
                                dataType: 'JSON',
                                success: function (data) {

                                    $('#div_form_insert').show();
                                    Main_Statename = data[0].state_name;

                                    $('#awp_agency_state_name_1').val(Main_Statename);

                                    $('#fund_year').val(data[0].fund_year);
                                    $('#fund_tranche_no').val(data[0].fund_tranche_no);
                                    $('#fund_file_no').val(data[0].fund_file_no);
                                    $('#fund_sanction_date').val(data[0].fund_sanction_date);
                                    $('#fund_certificate_submited').val(data[0].fund_certificate_submited);
                                    $('#fund_certificate_submited_date').val(data[0].fund_certificate_submited_date);
                                    $('#grant_in_aid_general_a').val(data[0].grant_in_aid_general_a);
                                    $('#grant_in_aid_dli_general_a').val(data[0].grant_in_aid_dli_general_a);

                                    $('#fund_grant_aid_general_a').val(data[0].fund_grant_aid_general_a);
                                    $('#fund_grant_aid_capital_a').val(data[0].fund_grant_aid_capital_a);
                                    $('#fund_grant_aid_general_b').val(data[0].fund_grant_aid_general_b);
                                    $('#fund_general_aid_b_value').val(data[0].fund_general_aid_b_value);
                                    $('#fund_grant_aid_capital_b_total').val(data[0].fund_grant_aid_capital_b_total);
                                    $('#fund_grant_aid_a_total').val(data[0].fund_grant_aid_a_total);
                                    $('#fund_total_sum_a_b').val(data[0].fund_total_sum_a_b);
                                    $('#fund_cumalative_amt').val(data[0].fund_cumalative_amt);
                                    $('#fund_timeline').val(data[0].fund_timeline);
                                    PHP_Agency_Name();

                                    Update_Count = data[0].id;
                                    CHeck_NPMU();
                                }
                            });
                        }


                    }
                }

            });

        }

    });

}

var Expenditure_Made_Value = 0;

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
            var slection_options_b = '<option value="0">Select State</option>';
            var slection_options_b1 = '<option value="0">Select State</option>';



            //Pip State Binding
            var PipStateArr = [];

            PipStateArr.push("ALL");
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

            /*akash*/
            //var AwpStateArr1 = [];

            ////PipStateArr1.push("ALL");

            //for (var i = 0; i < data.length; i++) {
            //    if (data[i].observation_type == "awp") {
            //        AwpStateArr1.push(data[i].state_name)
            //    }
            //}

            //AwpStateArr1.sort();
            //AwpStateArr1.unshift("NPMU");

            //$('#awp_agency_state_name_12').append('<option >--Select--</option>')
            //AwpStateArr1.forEach((val) => {
            //    slection_options_b1 += '<option value="' + val + '"> ' + val + ' </option>';

            //});

            //$('#awp_agency_state_name_12').html(slection_options_b1);
        }


    });
}

function PHP_Agency_StateInfo_B() {

    CHeck_NPMU();

    var awp_agency_state_name = $('#awp_agency_state_name_1').val();

    if (awp_agency_state_name == 'ALL') {
        $('#div_form_insert').hide();

    }
    else {
        $('#div_form_insert').show();
    }

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
                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);
                    //PHP_FN_Info();
                    //PHP_FN_Info_B_Form();
                    //PHP_FN_A_Table_Info();
                    //PHP_DropDown_Info();
                    //PHP_FN_B_Table_Info();

                    $('#fund_year').val("0");
                    $('#fund_tranche_no').val("");
                    $('#fund_file_no').val("");
                    $('#fund_sanction_date').val("");

                    $('#fund_certificate_submited').val("0");
                    $('#fund_certificate_submited_date').val("");
                    $('#fund_grant_aid_general_a').val("0");
                    $('#fund_grant_aid_capital_a').val("0");
                    $('#fund_grant_aid_a_total').val("0");
                    $('#fund_grant_aid_general_b').val("0");
                    $('#fund_general_aid_b_value').val("");
                    $('#fund_grant_aid_capital_b').val("0");
                    $('#fund_capital_aid_b_value').val("");
                    $('#fund_grant_aid_capital_b_total').val("");
                    $('#fund_cumalative_amt').val("");
                    $('#fund_total_sum_a_b').val("");
                    $('#fund_timeline').val("");

                }
                if (Main_Statename == "ALL") {
                    $('#nodal_agency_name').text("All States");
                    $('#nodal_agency_name1').text("All States");
                }
                if (Main_Statename == "NPMU") {
                    $('#nodal_agency_name').text("NPMU (Delhi)");
                    $('#nodal_agency_name1').text("NPMU (Delhi)");
                }
                Get_Fund_Form_Info();
            }
        });

    } else {

        alert("Please Select Agency");
    }
}

function CHeck_NPMU() {
    var awp_agency_state_name = $('#awp_agency_state_name_1').val();
    if (awp_agency_state_name == 'NPMU') {
        $('#fund_tranche_no').prop('disabled', true);
        $('#fund_file_no').prop('disabled', true);
        $('#fund_sanction_date').prop('disabled', true);
        $('#fund_certificate_submited').prop('disabled', true);
        $('#grant_in_aid_general_a').prop('disabled', true);
        $('#fund_grant_aid_general_a').prop('disabled', true);
        $('#fund_grant_aid_capital_a').prop('disabled', true);
        $('#fund_grant_aid_general_b').prop('disabled', true);
        $('#fund_general_aid_b_value').prop('disabled', true);
        $('.compA').hide();
        $('.compNpmu').show();
        $('#div_b').hide();
    }
    else {
        $('#fund_tranche_no').prop('disabled', false);
        $('#fund_file_no').prop('disabled', false);
        $('#fund_sanction_date').prop('disabled', false);
        $('#fund_certificate_submited').prop('disabled', false);
        $('#grant_in_aid_general_a').prop('disabled', false);
        $('#fund_grant_aid_general_a').prop('disabled', false);
        $('#fund_grant_aid_capital_a').prop('disabled', false);
        //$('#fund_grant_aid_general_b').prop('disabled', false);
        $('#fund_general_aid_b_value').prop('disabled', false);
        $('.compA').show();
        $('.compNpmu').hide();
        $('#div_b').show();
    }
    if (awp_agency_state_name == 'ALL') {
        $('.compA').show();
        $('.compNpmu').show();
        $('#div_b').show();
    }
}

var Total_Sum_AB = 0;

function Grant_A_Sum() {

    var fund_grant_aid_general_a = $('#fund_grant_aid_general_a').val();
    var fund_grant_aid_capital_a = $('#fund_grant_aid_capital_a').val();

    if (fund_grant_aid_general_a == "") {
        fund_grant_aid_general_a = "0";
    }
    if (fund_grant_aid_capital_a == "") {
        fund_grant_aid_capital_a == "0";
    }
    var Sum_A = parseFloat(fund_grant_aid_general_a) + + parseFloat(fund_grant_aid_capital_a);

    $('#fund_grant_aid_a_total').val(Sum_A);
    Final_Sum();
}
function Grant_B_Sum() {

    var fund_general_aid_b_value = $('#fund_general_aid_b_value').val();
    var fund_capital_aid_b_value = $('#fund_capital_aid_b_value').val();

    if (fund_general_aid_b_value == "") {
        fund_general_aid_b_value = "0";
    }
    if (fund_capital_aid_b_value == "") {
        fund_capital_aid_b_value = "0";
    }
    var Sum_B = parseFloat(fund_general_aid_b_value) + parseFloat(fund_capital_aid_b_value);

    $('#fund_grant_aid_capital_b_total').val(Sum_B);
    Final_Sum();
}

function Final_Sum() {
    var Sum_A = $('#fund_grant_aid_a_total').val();
    if (Sum_A == "") {
        Sum_A = 0;
    }
    var Sum_B = $('#fund_grant_aid_capital_b_total').val();
    if (Sum_B == "") {
        Sum_B = 0;
    }

    var Total = parseFloat(Sum_A) + parseFloat(Sum_B);

    $('#fund_total_sum_a_b').val(Total);

}

function Grant_In_Aid()   //chetan
{
    $.ajax({
        type: 'get',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Grant_In_Aid',
        dataType: 'JSON',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                var option = "<option value=" + data[i].name + ">" + data[i].name + "</option>";
                $("#grant_in_aid_general_a").append(option);
            }
            $("#grant_in_aid_dli_general_a").prop('disabled', true);
        },
        error: function (err) {
            alert("error");
        }
    });

}

function Grant_In_Aid_btn()  //chetan
{
    var data = $("#grant_in_aid_general_a").val();
    if (data == "GIA(General-Incentive)") {
        $("#grant_in_aid_dli_general_a").attr("disabled", false);
    }
    else {
        $("#grant_in_aid_dli_general_a").attr("disabled", true);
    }

}




function Save_Fund_Form_Info() {
    var i = 0;
    var fund_year = $('#fund_year').val();      //Financial Year:
    var fund_cert_sub = $('#fund_certificate_submited').val();  //utilization certificate
    var fund_grant_aid_a_total = $('#fund_grant_aid_a_total').val(); //Grant in Aid(General)(EAP Component)
    var fund_grant_aid_general_b = $('#fund_grant_aid_general_b').val(); //Grant in Aid(General)(EAP Component) 
    var fund_grant_aid_capital_b = $('#fund_grant_aid_capital_b').val();  //Total(EAP Component):
    if (Main_Statename == "" || Main_Statename == "0") {
        i = 1;
        alert("Please Select State Name");
    }
    //var agency = $('#nodal_agency_name1').text();
    if (Main_Statename != 'NPMU') {
        if (Main_Statename == "" || Main_Statename == "0") {
            i = 1;
            alert("Please Select State Name");
        }
        else if (fund_year == "0") {
            i = 1;
            alert("Please Select Financial Year");
        } else if (fund_cert_sub == "0") {
            i = 1;
            alert("Please Select fund certificate submited");
        } else if (fund_grant_aid_general_b == "0") {
            i = 1;
            alert("Please Select Grant Aid General b Component");
        } else if (fund_grant_aid_capital_b == "0") {
            i = 1;
            alert("Please Select Grant Aid Capital b Component");
        }
    }


    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.agency_name = $('#nodal_agency_name1').text();
        obj.fund_total_allocated = $('#AWP_Total_value1').text();
        obj.fund_year = $('#fund_year').val(); //Financial Year:
        obj.fund_tranche_no = $('#fund_tranche_no').val();  //Tranche No
        obj.fund_file_no = $('#fund_file_no').val();         //File No/ Sanction Letter No
        obj.fund_sanction_date = $('#fund_sanction_date').val();  //Date of Sanction:
        obj.fund_certificate_submited = $('#fund_certificate_submited').val(); //Utilization Certificate submitted(Yes / No):
        obj.fund_certificate_submited_date = $('#fund_certificate_submited_date').val(); //If Yes, Date of submission of UC:
        obj.fund_grant_aid_general_a = $('#fund_grant_aid_general_a').val(); //Grant in Aid (General)(Program Component)(Crore):
        obj.fund_grant_aid_capital_a = $('#fund_grant_aid_capital_a').val(); //Grant in Aid (Capital)(Program Component)(Crore)
        obj.grant_in_aid_general_a = $("#grant_in_aid_general_a").val(); //Grant in Aid(General)(Program Component) //new coloumn
        obj.fund_grant_aid_a_total = $('#fund_grant_aid_a_total').val(); // Total(Program Component):
        obj.fund_grant_aid_general_b = $('#fund_grant_aid_general_b').val(); //Grant in Aid (General)(EAP Component) :
        obj.fund_general_aid_b_value = $('#fund_general_aid_b_value').val(); //Value of Grant in Aid (General)(EAP Component)(Crore) :
        obj.fund_grant_aid_capital_b = $('#fund_grant_aid_capital_b').val();
        obj.grant_in_aid_dli_general_a = $("#grant_in_aid_dli_general_a").val(); //DLI //new coloumn
        obj.fund_capital_aid_b_value = $('#fund_capital_aid_b_value').val();
        obj.fund_grant_aid_capital_b_total = $('#fund_grant_aid_capital_b_total').val(); // Total(EAP Component):
        obj.fund_cumalative_amt = $('#fund_cumalative_amt').val(); //Cumulative amount released (Crore):
        obj.fund_total_sum_a_b = $('#fund_total_sum_a_b').val(); //Total(Program Component + EAP Component)
        obj.fund_timeline = $('#fund_timeline').val(); // Remarks:

        var queryString = new Array();
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                if (params.length != 0) {

                    var SS = params[0].split('name=');
                    Idd = SS[1];
                }
                else {
                    Idd = 0;
                }
            }
            else {
                Idd = 0;
            }
        }
        obj.id = Idd;

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_Fund_Release_Form_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Total_Sum_AB = 0;
                //$('#nodal_agency_name1').text("");
                $('#nodal_agency_name1').text('');
                $('#nodal_agency_name').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#AWP_Total_value1').text("");
                $('#AWP_Total_value11').text("");
                $('#fund_year').val("0");
                $('#fund_tranche_no').val("");
                $('#fund_file_no').val("");
                $('#fund_sanction_date').val("");
                fund_certificate_submited
                $('#fund_certificate_submited').val("0");
                $('#fund_certificate_submited_date').val("");
                $('#fund_grant_aid_general_a').val("0");
                $('#fund_grant_aid_capital_a').val("0");
                $('#fund_grant_aid_a_total').val("0");
                $('#fund_grant_aid_general_b').val("0");
                $('#fund_general_aid_b_value').val("");
                $('#fund_grant_aid_capital_b').val("0");
                $('#fund_capital_aid_b_value').val("");
                $('#fund_grant_aid_capital_b_total').val("");
                $('#fund_cumalative_amt').val("");
                $('#fund_total_sum_a_b').val("");
                $('#fund_timeline').val("");
                SessionInfo1();
                window.location.reload();
            }
        });


    }
}


// testing codes
function Get_Fund_Form_Info() {
    Grant_Aid_Gen_Sum = 0;
    Grant_Aid_Cap_Sum = 0;
    component_A_Sum = 0;
    Total_second = 0;
    Total_third = 0;
    component_B_total = 0;
    Total_Allocated_Sum = 0;
    Total_Allocated_Sum = 0;
    var year = $('#ddl_fy_year').val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Get_Fund_Form_Info',
        data: { 'StateName': Main_Statename, 'Year': year },
        dataType: 'JSON',
        success: function (data) {


            var fund_grant_aid_a_total = 0;
            var fund_grant_aid_capital_a = 0;
            var fund_general_aid_b_value_total = 0;
            var fund_capital_aid_b_value_total = 0;
            var fund_aid_grant_b_variable_dli1 = 0;
            var fund_aid_grant_a_variable_dli1 = 0;
            var fund_aid_grant_b_variable_dli111 = 0;
            var tr = '';
            // var grant_in_aid_general_sum = 0;
            var AgencyName = "";
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {

                var TotalComulative_Value = 0;
                var Total_first = 0;
                var Total_second = 0;
                var Total_third = 0;
                var Comulative_Final_Total = 0;

                var Grant_Aid_Gen_Sum = 0;
                var Grant_Aid_Cap_Sum = 0;
                var component_B_total = 0;
                var Total_Allocated_Sum = 0;
                var Npmu_Tile = 0;
                $('#AWP_Total_value1').text('');
                $('#AWP_Total_value11').text('');
                $('#gia_dli_sum').text('0.00');
                var Grant_Aid_INS_Sum = 0;
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {

                        if (data[i].state_name == 'NPMU') {
                            Total_Allocated_Sum += parseFloat(data[i].fund_cumalative_amt);
                            if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].fund_year + '</td><td>' + data[i].state_name + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            } else {
                                tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].fund_year + '</td><td>' + data[i].state_name + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                            }
                            
                            Npmu_Tile += parseFloat(data[i].fund_cumalative_amt);
                            component_A_Sum += parseFloat(data[i].fund_cumalative_amt);
                        }
                        else {
                            var fund_grant_aid_general_a = 0;
                            if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "") {
                                fund_grant_aid_a_total += parseFloat(data[i].fund_grant_aid_general_a);
                                fund_grant_aid_general_a = data[i].fund_grant_aid_general_a;
                            }


                            var fund_general_aid_b_value = 0;
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                fund_general_aid_b_value_total += parseFloat(data[i].fund_general_aid_b_value);
                                fund_general_aid_b_value = data[i].fund_general_aid_b_value;
                            }
                            var fund_capital_aid_b_value = 0;
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                fund_capital_aid_b_value_total += parseFloat(data[i].fund_capital_aid_b_value);
                                fund_capital_aid_b_value = data[i].fund_capital_aid_b_value;
                            }
                            var fund_tranche_no = "";
                            if (data[i].fund_tranche_no != null && data[i].fund_tranche_no != "") {
                                fund_tranche_no = data[i].fund_tranche_no;
                            }
                            var fund_file_no = "";
                            if (data[i].fund_file_no != null && data[i].fund_file_no != "" && data[i].fund_file_no != "NULL") {
                                fund_file_no = data[i].fund_file_no;
                            }
                            var fund_sanction_date = "";
                            if (data[i].fund_sanction_date != null && data[i].fund_sanction_date != "" && data[i].fund_sanction_date != "NULL") {
                                fund_sanction_date = data[i].fund_sanction_date;
                            }
                            var fund_certificate_submited_date = "";
                            if (data[i].fund_certificate_submited_date != null && data[i].fund_certificate_submited_date != "" && data[i].fund_certificate_submited_date != "NULL") {
                                fund_certificate_submited_date = data[i].fund_certificate_submited_date;
                            }
                            var fund_grant_aid_general_a = "0";
                            if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                                fund_grant_aid_general_a = data[i].fund_grant_aid_general_a;
                            }

                            var Dli_1_total = 0;
                            var Dli_2_total = 0;
                            var first1 = "";
                            var Second = "";
                            var third = "";

                            var First = '';

                            if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
             /*akash*/   First = '<tr> <td>' + (i + 1) + '</td><td>' + data[i].fund_year + ' </td>' +
                                    '<td>' + data[i].state_name + '</td><td>' + data[i].agency_name + '</td><td>' + fund_tranche_no + '</td><td>' + fund_file_no + '</td><td>' + fund_sanction_date + '</td>' +
                                    '<td>' + data[i].fund_certificate_submited + '</td><td>' + fund_certificate_submited_date + '</td><td></td>';/*<td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_grant_aid_capital_a +  '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';*/
                                Grant_Aid_INS_Sum += parseFloat(data[i].fund_grant_aid_general_a);
                            }
                            else {
                            /*akash*/   First = '<tr> <td>' + (i + 1) + '</td><td>' + data[i].fund_year + ' </td>' +
                                    '<td>' + data[i].state_name + '</td><td>' + data[i].agency_name + '</td><td>' + fund_tranche_no + '</td><td>' + fund_file_no + '</td><td>' + fund_sanction_date + '</td>' +
                                    '<td>' + data[i].fund_certificate_submited + '</td><td>' + fund_certificate_submited_date + '</td><td>' + fund_grant_aid_general_a + '</td>';/*<td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_grant_aid_capital_a +  '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';*/
                                if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                                    var Total = parseFloat(data[i].fund_grant_aid_general_a);
                                    Grant_Aid_Gen_Sum += Total;

                                }
                            }
                            // Grant_Aid_Gen_Sum

                            if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a != "" && data[i].fund_grant_aid_capital_a != "NULL") {
                                var Total2 = parseFloat(data[i].fund_grant_aid_capital_a);
                                Grant_Aid_Cap_Sum += Total2;

                            }



                            /*Akash*/
                            //First dli section
                            var fund_capital = 0;

                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "0") {

                                if (data[i].fund_grant_aid_capital_a == "" && data[i].fund_grant_aid_capital_a == 0) {

                                }

                                if (data[i].grant_in_aid_dli_general_a == "DLI1") {
                                    var Total1 = Total;
                                    fund_capital = data[i].fund_grant_aid_capital_a;
                                    var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                    var Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                    fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                    if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                        first1 = '<td>' + data[i].fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                    }
                                    else {
                                        first1 = '<td>' + data[i].fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                    }

                                }


                                else if (data[i].grant_in_aid_dli_general_a == "DLI2") {
                                    var Total1 = Total;
                                    fund_capital = data[i].fund_grant_aid_capital_a;
                                    var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                    Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                    fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                    if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                        first1 = '<td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                    }
                                    else {
                                        first1 = '<td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                    }

                                }


                                else if (data[i].grant_in_aid_dli_general_a == "DLI3") {
                                    var Total1 = Total;
                                    fund_capital = data[i].fund_grant_aid_capital_a;
                                    var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                    Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                    fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                    if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                        first1 = '<td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                    }
                                    else {
                                        first1 = '<td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                    }

                                }


                                else if (data[i].grant_in_aid_dli_general_a == "DLI4") {
                                    var Total1 = Total;
                                    fund_capital = data[i].fund_grant_aid_capital_a;
                                    var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                    Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                    fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                    if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                        first1 = '<td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                    }
                                    else {
                                        first1 = '<td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                    }

                                }


                                else if (data[i].grant_in_aid_dli_general_a == "DLI5") {
                                    var Total1 = Total;
                                    fund_capital = data[i].fund_grant_aid_capital_a;
                                    var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                    Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                    fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                    if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                        first1 = '<td><td></td></td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                    }
                                    else {
                                        first1 = '<td><td></td></td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                    }

                                }
                                else {
                                    first1 = '<td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_grant_aid_capital_a + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                }


                                var Total1 = (Dli_2_total + parseFloat(fund_capital));
                                console.log(Total1);

                                Total_first += Total1;

                                // Grant_Aid_Cap_Sum += parseFloat(fund_capital);
                            }
                            else {
                                first1 = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
                            }


                            //Akash

                            //Second Dli section
                            if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "0") {

                                if (data[i].fund_grant_aid_general_b == "DLI1") {

                                    var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                    Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                    Second = '<td>' + fund_general_aid_b_value + '</td><td></td><td></td><td></td><td></td><td>' + Dli_1_total + '</td>';

                                }




                                if (data[i].fund_grant_aid_general_b == "DLI2") {
                                    var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                    Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                    Second = '<td></td><td>' + fund_general_aid_b_value + '</td><td></td><td></td><td></td><td>' + Dli_1_total + '</td>';

                                }
                                if (data[i].fund_grant_aid_general_b == "DLI3") {
                                    var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                    Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                    Second = '<td></td><td></td><td>' + fund_general_aid_b_value + '</td><td></td><td></td><td>' + Dli_1_total + '</td>';

                                }
                                if (data[i].fund_grant_aid_general_b == "DLI4") {
                                    var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                    Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                    Second = '<td></td><td></td><td></td><td>' + fund_general_aid_b_value + '</td><td></td><td>' + Dli_1_total + '</td>';

                                }
                                if (data[i].fund_grant_aid_general_b == "DLI5") {
                                    var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                    Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                    Second = '<td></td><td></td><td></td><td></td><td>' + fund_general_aid_b_value + '</td><td>' + Dli_1_total + '</td>';

                                }


                                Total_second = Total_second + Dli_1_total;





                            }
                            else {
                                Second = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
                            }



                            var Total11 = (Dli_2_total + parseFloat(fund_capital));
                            var Total_second1 = Dli_1_total;

                            var totalDLi = Total11 + Total_second1;
                            //console.log(totalDLi);
                            /*Akash*/



                            var third_Total = 0;
                            // Second Dli'
                            var fund_timeline = "0";
                            if (data[i].fund_timeline != null && data[i].fund_timeline != "" && data[i].fund_timeline != "NULL") {
                                fund_timeline = data[i].fund_timeline;
                            }

                            if (data[i].fund_grant_aid_capital_b != null && data[i].fund_grant_aid_capital_b != "0") { //prateek

                                if (data[i].fund_grant_aid_capital_b == "DLI1") {

                                    var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                    Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                    third_Total = Dli_2_total;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                    Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                    if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                        third = '<td><td></td></td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                    } else {
                                        third = '<td><td></td></td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                    }
                                    

                                }

                                if (data[i].fund_grant_aid_capital_b == "DLI2") {
                                    var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                    Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                    third_Total = Dli_2_total;
                                    Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                    if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                        third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                    } else {
                                        third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                    }
                                    

                                }
                                if (data[i].fund_grant_aid_capital_b == "DLI3") {
                                    var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                    Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;

                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                    third_Total = Dli_2_total;
                                    Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                    if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                        third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                    } else {
                                        third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                    }
                                    

                                }
                                if (data[i].fund_grant_aid_capital_b == "DLI4") {
                                    var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);

                                    Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                    third_Total = Dli_2_total;
                                    Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                    if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                        third = '<td></td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                    } else {
                                        third = '<td></td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                    }
                                    

                                }
                                if (data[i].fund_grant_aid_capital_b == "DLI5") {
                                    var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                    Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                    fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                    third_Total = Dli_2_total;
                                    Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                    if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                        third = '<td></td><td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                    } else {
                                        third = '<td></td><td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                    }
                                    

                                }
                                if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                    third = '<td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                } else {
                                    third = '<td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                



                            }
                            //here add a line of code
                            if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                third = '<td>' + fund_timeline + '</td><td>' + parseFloat(data[i].fund_total_sum_a_b).toFixed(2) + '</td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            } else {
                                third = '<td>' + fund_timeline + '</td><td>' + parseFloat(data[i].fund_total_sum_a_b).toFixed(2) + '</td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                            }
                            

                            
                            Total_third = third_Total;
                            TotalComulative_Value = Total_first + Total_second;

                            component_A_Sum = Grant_Aid_Gen_Sum + Grant_Aid_Cap_Sum + Npmu_Tile;
                            component_B_total = Total_second + Total_third + Grant_Aid_INS_Sum;
                            
                            //Total_Allocated_Sum = Total_first + component_B_total;
                            Total_Allocated_Sum = component_A_Sum + component_B_total;



                            tr += First + first1 + Second + third;
                        }

                    }


                    //tr += '<tr><td></td><td></td><td></td><td></td><td></td><td colspan="4">TOTAL OF Fund Release</td>' +
                    //    '<td>' + Grant_Aid_Gen_Sum.toFixed(2) + '</td><td></td><td></td><td></td><td></td><td></td><td>' + Grant_Aid_Cap_Sum.toFixed(2) + '</td><td>' + Total_first.toFixed(2) + '</td><td></td><td></td> <td></td> <td></td> <td></td> <td>' + Total_second.toFixed(2) + '</td> <td></td> <td></td><td>' + TotalComulative_Value.toFixed(2) + '</td><td></td></tr>';

                    $('#tbody_Fund_Data').html(tr);
                    $('#gia_dli_sum').text(Grant_Aid_INS_Sum.toFixed());
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_fr_btn').prop('disabled', true);
                    } else if (Access_Auth == 'readonly') {
                        $('.disable_fr_btn').prop('disabled', true);
                    }
                }

            }

            if (tr == '') {
                tr = '<tr  colspan="25" style="text-align:center;"><td colspan="25">No Data</td></tr>';
                $('#tbody_Fund_Data').html(tr);
            }

            $('#grant_in_aid_general_sum').text(Grant_Aid_Gen_Sum.toFixed(2));
            $('#grant_in_aid_capital_sum').text(Grant_Aid_Cap_Sum.toFixed(2));
            $('#component_A_Sum').text(component_A_Sum.toFixed(2));
            $('#grant_in_aid_general_sum_b').text(Total_second.toFixed(2));
            $('#grant_in_aid_capital_sum_b').text(Total_third.toFixed(2));
            $('#component_B_Sum').text(component_B_total.toFixed(2));
            $('#AWP_Total_value1').text(Total_Allocated_Sum.toFixed(2));

            $('#AWP_Total_value11').text(Total_Allocated_Sum.toFixed(2));
            $('#npmuSum').text(Npmu_Tile);
            // document.getElementById('AWP_Total_value1').innerHTML = Total_Allocated_Sum.toFixed(2);

        }
    });
}
function Select_yearwise() {
    
    Grant_Aid_Gen_Sum = 0;
    Grant_Aid_Cap_Sum = 0;
    component_A_Sum = 0;
    Total_second = 0;
    Total_third = 0;
    component_B_total = 0;
    Total_Allocated_Sum = 0;
    Total_Allocated_Sum = 0;
    var year = $('#ddl_fy_year').val();

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Get_Fund_Form_Info',
        data: { 'StateName': Main_Statename, 'Year': year },
        dataType: 'JSON',
        success: function (data) {

            
            var fund_grant_aid_a_total = 0;
            var fund_grant_aid_capital_a = 0;
            var fund_general_aid_b_value_total = 0;
            var fund_capital_aid_b_value_total = 0;
            var fund_aid_grant_b_variable_dli1 = 0;
            var fund_aid_grant_a_variable_dli1 = 0;
            var fund_aid_grant_b_variable_dli111 = 0;
            var tr = '';
            // var grant_in_aid_general_sum = 0;
            var AgencyName = "";
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {

                var TotalComulative_Value = 0;
                var Total_first = 0;
                var Total_second = 0;
                var Total_third = 0;
                var Comulative_Final_Total = 0;
                var Npmu_Tile = 0;
                var Grant_Aid_Gen_Sum = 0;
                var Grant_Aid_Cap_Sum = 0;
                var component_B_total = 0;
                var Total_Allocated_Sum = 0;
                $('#AWP_Total_value1').text('');
                $('#AWP_Total_value11').text('');
                $('#gia_dli_sum').text('0.00');
                var Grant_Aid_INS_Sum = 0;
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].state_name == 'NPMU') {
                            //Total_Allocated_Sum += parseFloat(data[i].fund_cumalative_amt);
                            //if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                            //    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].fund_year + '</td><td>' + data[i].state_name + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            //} else {
                            //    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].fund_year + '</td><td>' + data[i].state_name + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                            //}

                            Npmu_Tile += parseFloat(data[i].fund_cumalative_amt);
                            //component_A_Sum += parseFloat(data[i].fund_cumalative_amt);
                        }
                        //else {
                        //    var fund_grant_aid_general_a = 0;
                        //    if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "") {
                        //        fund_grant_aid_a_total += parseFloat(data[i].fund_grant_aid_general_a);
                        //        fund_grant_aid_general_a = data[i].fund_grant_aid_general_a;
                        //    }
                        //}
                        var fund_grant_aid_general_a = 0;
                        if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "") {
                            fund_grant_aid_a_total += parseFloat(data[i].fund_grant_aid_general_a);
                            fund_grant_aid_general_a = data[i].fund_grant_aid_general_a;
                        }


                        var fund_general_aid_b_value = 0;
                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                            fund_general_aid_b_value_total += parseFloat(data[i].fund_general_aid_b_value);
                            fund_general_aid_b_value = data[i].fund_general_aid_b_value;
                        }
                        var fund_capital_aid_b_value = 0;
                        if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                            fund_capital_aid_b_value_total += parseFloat(data[i].fund_capital_aid_b_value);
                            fund_capital_aid_b_value = data[i].fund_capital_aid_b_value;
                        }
                        var fund_tranche_no = "";
                        if (data[i].fund_tranche_no != null && data[i].fund_tranche_no != "") {
                            fund_tranche_no = data[i].fund_tranche_no;
                        }
                        var fund_file_no = "";
                        if (data[i].fund_file_no != null && data[i].fund_file_no != "" && data[i].fund_file_no != "NULL") {
                            fund_file_no = data[i].fund_file_no;
                        }
                        var fund_sanction_date = "";
                        if (data[i].fund_sanction_date != null && data[i].fund_sanction_date != "" && data[i].fund_sanction_date != "NULL") {
                            fund_sanction_date = data[i].fund_sanction_date;
                        }
                        var fund_certificate_submited_date = "";
                        if (data[i].fund_certificate_submited_date != null && data[i].fund_certificate_submited_date != "" && data[i].fund_certificate_submited_date != "NULL") {
                            fund_certificate_submited_date = data[i].fund_certificate_submited_date;
                        }
                        var fund_grant_aid_general_a = "0";
                        if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                            fund_grant_aid_general_a = data[i].fund_grant_aid_general_a;
                        }

                        var Dli_1_total = 0;
                        var Dli_2_total = 0;
                        var first1 = "";
                        var Second = "";
                        var third = "";

                        var First = '';

                        if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
             /*akash*/   First = '<tr> <td>' + (i + 1) + '</td><td>' + data[i].fund_year + ' </td>' +
                                '<td>' + data[i].state_name + '</td><td>' + data[i].agency_name + '</td><td>' + fund_tranche_no + '</td><td>' + fund_file_no + '</td><td>' + fund_sanction_date + '</td>' +
                                '<td>' + data[i].fund_certificate_submited + '</td><td>' + fund_certificate_submited_date + '</td><td></td>';/*<td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_grant_aid_capital_a +  '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';*/
                            Grant_Aid_INS_Sum += parseFloat(data[i].fund_grant_aid_general_a);
                        }
                        else {
                            /*akash*/   First = '<tr> <td>' + (i + 1) + '</td><td>' + data[i].fund_year + ' </td>' +
                                '<td>' + data[i].state_name + '</td><td>' + data[i].agency_name + '</td><td>' + fund_tranche_no + '</td><td>' + fund_file_no + '</td><td>' + fund_sanction_date + '</td>' +
                                '<td>' + data[i].fund_certificate_submited + '</td><td>' + fund_certificate_submited_date + '</td><td>' + fund_grant_aid_general_a + '</td>';/*<td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_grant_aid_capital_a +  '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';*/
                            if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                                var Total = parseFloat(data[i].fund_grant_aid_general_a);
                                Grant_Aid_Gen_Sum += Total;

                            }
                        }
                        // Grant_Aid_Gen_Sum

                        if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a != "" && data[i].fund_grant_aid_capital_a != "NULL") {
                            var Total2 = parseFloat(data[i].fund_grant_aid_capital_a);
                            Grant_Aid_Cap_Sum += Total2;

                        }


                        //if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a == "0") {
                        //    var Total = parseFloat(data[i].fund_grant_aid_capital_a);
                        //    var fund_capital = data[i].fund_grant_aid_capital_a;
                        //    var Grant_Aid_Cap_Sum = fund_capital + Total;
                        //    console.log(Grant_Aid_Cap_Sum);



                        //}


                        //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                        //    var Total = parseFloat(data[i].fund_grant_aid_a_total);
                        //    var Total1 = Total + Dli_2_total;
                        //    Total_first = Total_first + Total + Total1 - Grant_Aid_Cap_Sum;


                        //}

                        /*Akash*/
                        //First dli section
                        var fund_capital = 0;

                        if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "0") {

                            if (data[i].fund_grant_aid_capital_a == "" && data[i].fund_grant_aid_capital_a == 0) {

                            }

                            if (data[i].grant_in_aid_dli_general_a == "DLI1") {
                                var Total1 = Total;
                                fund_capital = data[i].fund_grant_aid_capital_a;
                                var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                var Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                    first1 = '<td>' + data[i].fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                }
                                else {
                                    first1 = '<td>' + data[i].fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                }

                            }


                            else if (data[i].grant_in_aid_dli_general_a == "DLI2") {
                                var Total1 = Total;
                                fund_capital = data[i].fund_grant_aid_capital_a;
                                var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                    first1 = '<td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                }
                                else {
                                    first1 = '<td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                }

                            }


                            else if (data[i].grant_in_aid_dli_general_a == "DLI3") {
                                var Total1 = Total;
                                fund_capital = data[i].fund_grant_aid_capital_a;
                                var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                    first1 = '<td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                }
                                else {
                                    first1 = '<td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                }

                            }


                            else if (data[i].grant_in_aid_dli_general_a == "DLI4") {
                                var Total1 = Total;
                                fund_capital = data[i].fund_grant_aid_capital_a;
                                var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                    first1 = '<td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                }
                                else {
                                    first1 = '<td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td></td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                }

                            }


                            else if (data[i].grant_in_aid_dli_general_a == "DLI5") {
                                var Total1 = Total;
                                fund_capital = data[i].fund_grant_aid_capital_a;
                                var fund_aid_grant_a_variable = parseFloat(fund_grant_aid_general_a);
                                Dli_2_total = Dli_2_total + fund_aid_grant_a_variable + Total1;
                                fund_aid_grant_a_variable_dli1 = fund_aid_grant_a_variable_dli1 + fund_aid_grant_a_variable;
                                if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                    first1 = '<td><td></td></td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td>' + fund_capital + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                                }
                                else {
                                    first1 = '<td><td></td></td><td></td><td></td><td>' + fund_grant_aid_general_a + '</td><td>' + fund_capital + '</td><td>' + (Dli_2_total + parseFloat(fund_capital)).toFixed(2) + '</td>';
                                }

                            }
                            else {
                                first1 = '<td></td><td></td><td></td><td></td><td></td><td>' + data[i].fund_grant_aid_capital_a + '</td><td>' + data[i].fund_grant_aid_a_total + '</td>';
                            }


                            var Total1 = (Dli_2_total + parseFloat(fund_capital));
                            console.log(Total1);

                            Total_first += Total1;

                            // Grant_Aid_Cap_Sum += parseFloat(fund_capital);
                        }
                        else {
                            first1 = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
                        }


                        //Akash

                        //Second Dli section
                        if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "0") {

                            if (data[i].fund_grant_aid_general_b == "DLI1") {

                                var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                Second = '<td>' + fund_general_aid_b_value + '</td><td></td><td></td><td></td><td></td><td>' + Dli_1_total + '</td>';

                            }




                            if (data[i].fund_grant_aid_general_b == "DLI2") {
                                var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                Second = '<td></td><td>' + fund_general_aid_b_value + '</td><td></td><td></td><td></td><td>' + Dli_1_total + '</td>';

                            }
                            if (data[i].fund_grant_aid_general_b == "DLI3") {
                                var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                Second = '<td></td><td></td><td>' + fund_general_aid_b_value + '</td><td></td><td></td><td>' + Dli_1_total + '</td>';

                            }
                            if (data[i].fund_grant_aid_general_b == "DLI4") {
                                var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                Second = '<td></td><td></td><td></td><td>' + fund_general_aid_b_value + '</td><td></td><td>' + Dli_1_total + '</td>';

                            }
                            if (data[i].fund_grant_aid_general_b == "DLI5") {
                                var fund_aid_grant_b_variable = parseFloat(fund_general_aid_b_value);
                                Dli_1_total = Dli_1_total + fund_aid_grant_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_aid_grant_b_variable;
                                Second = '<td></td><td></td><td></td><td></td><td>' + fund_general_aid_b_value + '</td><td>' + Dli_1_total + '</td>';

                            }


                            Total_second = Total_second + Dli_1_total;





                        }
                        else {
                            Second = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
                        }



                        var Total11 = (Dli_2_total + parseFloat(fund_capital));
                        var Total_second1 = Dli_1_total;

                        var totalDLi = Total11 + Total_second1;
                        //console.log(totalDLi);
                        /*Akash*/


                        
                        var third_Total = 0;
                        // Second Dli'
                        var fund_timeline = "0";
                        if (data[i].fund_timeline != null && data[i].fund_timeline != "" && data[i].fund_timeline != "NULL") {
                            fund_timeline = data[i].fund_timeline;
                        }

                        if (data[i].fund_grant_aid_capital_b != null && data[i].fund_grant_aid_capital_b != "0") { //prateek

                            if (data[i].fund_grant_aid_capital_b == "DLI1") {

                                var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                third_Total = Dli_2_total;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                    third = '<td><td></td></td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                } else {
                                    third = '<td><td></td></td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                

                            }

                            if (data[i].fund_grant_aid_capital_b == "DLI2") {
                                var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                third_Total = Dli_2_total;
                                Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                if (data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') {
                                    third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                } else {
                                    third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                

                            }
                            if (data[i].fund_grant_aid_capital_b == "DLI3") {
                                var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;

                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                third_Total = Dli_2_total;
                                Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                    third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                } else {
                                    third = '<td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td<td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td>><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                

                            }
                            if (data[i].fund_grant_aid_capital_b == "DLI4") {
                                var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);

                                Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                third_Total = Dli_2_total;
                                Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                    third = '<td></td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                } else {
                                    third = '<td></td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                

                            }
                            if (data[i].fund_grant_aid_capital_b == "DLI5") {
                                var fund_capital_aid_b_variable = parseFloat(fund_capital_aid_b_value);
                                Dli_2_total = Dli_2_total + fund_capital_aid_b_variable;
                                fund_aid_grant_b_variable_dli1 = fund_aid_grant_b_variable_dli1 + fund_capital_aid_b_variable;
                                third_Total = Dli_2_total;
                                Comulative_Final_Total = Comulative_Final_Total + third_Total;
                                if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                    third = '<td></td><td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                                } else {
                                    third = '<td></td><td><td></td><td></td><td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                }
                                

                            }
                            if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                                third = '<td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                            } else {
                                third = '<td></td><td>' + data[i].fund_capital_aid_b_value + '</td><td>' + third_Total.toFixed(2) + '</td><td>' + fund_timeline + '</td><td>' + totalDLi.toFixed(2) + '</td><td>' + totalDLi.toFixed(2) + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                            }
                            



                        }
                        //here add a line of code
                        if ((data[i].fund_year == '2020-21' || data[i].fund_year == '2021-22') && Email != 'kirannayyar95@gmail.com') {
                            third = '<td>' + fund_timeline + '</td><td>' + parseFloat(data[i].fund_total_sum_a_b).toFixed(2) + '</td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" disabled> <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr>';
                        } else {
                            third = '<td>' + fund_timeline + '</td><td>' + parseFloat(data[i].fund_total_sum_a_b).toFixed(2) + '</td><td>' + data[i].fund_cumalative_amt + '</td><td><button class="btn btn-primary disable_fr_btn" onclick="editrowcomp_A_Support(' + data[i].id + ')" > <i class="fa fa-edit"></i></button ></td><td><button class="btn btn-danger disable_fr_btn" onclick="deletecomp_release(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr>';
                        }
                        

                        
                        Total_third = third_Total;
                        TotalComulative_Value = Total_first + Total_second;

                            component_A_Sum = Grant_Aid_Gen_Sum + Grant_Aid_Cap_Sum + Npmu_Tile;
                        component_B_total = Total_second + Total_third + Grant_Aid_INS_Sum;

                        
                        //Total_Allocated_Sum = Total_first + component_B_total;
                        Total_Allocated_Sum = component_A_Sum + component_B_total;



                        tr += First + first1 + Second + third;

                    }


                    //tr += '<tr><td></td><td></td><td></td><td></td><td></td><td colspan="4">TOTAL OF Fund Release</td>' +
                    //    '<td>' + Grant_Aid_Gen_Sum.toFixed(2) + '</td><td></td><td></td><td></td><td></td><td></td><td>' + Grant_Aid_Cap_Sum.toFixed(2) + '</td><td>' + Total_first.toFixed(2) + '</td><td></td><td></td> <td></td> <td></td> <td></td> <td>' + Total_second.toFixed(2) + '</td> <td></td> <td></td><td>' + TotalComulative_Value.toFixed(2) + '</td><td></td></tr>';

                    $('#tbody_Fund_Data').html(tr);
                    $('#gia_dli_sum').text(Grant_Aid_INS_Sum.toFixed());
                    if (Email == 'wbataljal@gmail.com') {
                        $('.disable_fr_btn').prop('disabled', true);
                    } else if (Access_Auth == 'readonly') {
                        $('.disable_fr_btn').prop('disabled', true);
                    }
                }

            }

            if (tr == '') {
                tr = '<tr  colspan="25" style="text-align:center;"><td colspan="25">No Data</td></tr>';
                $('#tbody_Fund_Data').html(tr);
            }
            $('#grant_in_aid_general_sum').text(Grant_Aid_Gen_Sum.toFixed(2));
            $('#grant_in_aid_capital_sum').text(Grant_Aid_Cap_Sum.toFixed(2));
            $('#component_A_Sum').text(component_A_Sum.toFixed(2));
            $('#grant_in_aid_general_sum_b').text(Total_second.toFixed(2));
            $('#grant_in_aid_capital_sum_b').text(Total_third.toFixed(2));
            $('#component_B_Sum').text(component_B_total.toFixed(2));
            $('#AWP_Total_value1').text(Total_Allocated_Sum.toFixed(2));
            $('#npmuSum').text(Npmu_Tile);
            $('#AWP_Total_value11').text(Total_Allocated_Sum.toFixed(2));
            // document.getElementById('AWP_Total_value1').innerHTML = Total_Allocated_Sum.toFixed(2);

        }
    });
}
function editrowcomp_A_Support(i) {
    var url = "/mis_new/Fund_release_Monitoring?name=" + encodeURIComponent(i);
    window.location.href = url;
    //$('#Support_TR' + i).hide();
    //$('#Hide_Support_TR' + i).show();
}

function deletecomp_release(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/mis_new/deletecomp_release',

        data: "{'comp_A_pip_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);

            Get_Fund_Form_Info();


        }
    });
}