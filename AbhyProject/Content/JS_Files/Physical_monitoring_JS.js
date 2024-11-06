
const today = new Date();
//const fincalyear = today.getFullYear();

var currentDate = new Date();
var yearaa = currentDate.getFullYear();
var monthaa = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-based
var dayaa = ('0' + currentDate.getDate()).slice(-2);

var formattedDateaa = yearaa + monthaa + dayaa;

/*const fin_fincalyear = get_financial_year(fincalyear);*/
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
const fix_Date = 15;
const month_numbers = Get_month_order(mm);
var fiscalyear = "";
var fincalyear = 0;
const month_no1 = 6;
const month_no2 = 7;
var a_component = 0;
var a_component = 0;
var b_component = 0;
var c_component = 0;
var d_component = 0;
var e_component = 0;
// var f_component = 0;    //abhi282
// var g_component = 0;   //abhi281
// var h_component = 0;  //abhi28
var form = '';
var Officer_type_11 = "";
var Main_Statename = "";


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
    

    //alert(fincalyear);
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

            var slection_options = '<option value="0">Select Type of Support Service </option>';
            $('#Support_Service').html(slection_options);

            var slection_options1 = '<option value="0">Select Brief Description </option>';
            $('#Brif_description_of_good').html(slection_options1);

            var slection_options2 = '<option value="0">Select Type of the Work </option>';
            $('#Type_Of_Work').html(slection_options2);

            var slection_options3 = '<option value="0">Select Name of Support Service </option>';
            $('#Name_Of_Support_Service').html(slection_options3);

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (data == "Admin") {
                $('#Agency_AWP_DropDown').show();
                $('#State_AWP_DropDown').hide();
                $('#Finacial_Month').val('0');
                $('#Finacial_Month1').val('0');
                $('#Finacial_Year').val('0');
                $('#Finacial_Year1').val('0');
                PHP_Agency_Info();
                Officer_type_11 = "NPMU";
            }
            else {
                Officer_type_11 = "State";
                $('#Agency_AWP_DropDown').hide();
                $('#State_AWP_DropDown').show();
                $('#pip_dropdown_state_name').text(data);
                Main_Statename = data;
                $('#Finacial_Month').val('0');
                $('#Finacial_Month1').val('0');
                $('#Finacial_Year').val('0');
                $('#Finacial_Year1').val('0');
                $('#div_form_insert').show();
                PHP_Agency_Info();
                //          AWP_Info();

                PHP_Agency_Name();
                physical_monitoring_report_Info();


            }

        }

    });

}
var awp_physical_year_20_21 = "";
function Brief_Description_of_Good_Dropdown() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Brief_Description_of_Good_Dropdown',

        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var slection_options = '<option value="0">Select Support Service</option>';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].support_name != "") {
                        slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                    }

                }
                $('#Support_Service').html(slection_options);

            }
        }
    });

}
function isForm(check_form) {
    form = check_form;
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
            var slection_options1 = '<option value="0">Select State</option>';
            var slection_options_b = '<option value="0">Select State</option>';

            // abhi1204

            var phpStateArr = [];
            if (form == '') {
                phpStateArr.push("ALL");
            }
            //phpStateArr.push("NPMU");
            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "pip") {
                    phpStateArr.push(data[i].state_name)
                }
            }

            phpStateArr.sort();

            $('#awp_agency_state_name').append('<option >--Select--</option>');
            $('#awp_agency_state_name_1').append('<option >--Select--</option>')
            phpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $('#awp_agency_state_name').html(slection_options);
            $('#awp_agency_state_name_1').html(slection_options);



            ///*akash*/
            //var phpStateArr2 = [];

            //// phpStateArr2.push("ALL");
            ////phpStateArr.push("NPMU");
            //for (var i = 0; i < data.length; i++) {
            //    if (data[i].observation_type == "pip") {
            //        phpStateArr2.push(data[i].state_name)
            //    }
            //}

            //phpStateArr2.sort();


            //$('#awp_agency_state_name_12').append('<option >--Select--</option>')
            //phpStateArr2.forEach((val) => {
            //    slection_options1 += '<option value="' + val + '"> ' + val + ' </option>';

            //});

            //$('#awp_agency_state_name_12').html(slection_options1);




            // abhi1204





        }

    });
}

function PHP_Agency_StateInfo_B() {
    $('#div_form_insert').show();  //new
    $('#divssb').hide();  //new
    $('#divsbdata').hide();   //new

    $('#Support_Item_Procured').prop('disabled', false); //new
    //  $('#Support_Cumulative_Total').prop('disabled', false);  //new
    $('#Support_Remark').prop('disabled', false);  //new

    $('#Finacial_Month').val('0');
    $('#Finacial_Month1').val('0');
    $('#Finacial_Year').val('0');
    $('#Finacial_Year1').val('0');
    var awp_agency_state_name = $('#awp_agency_state_name_1').val();
    if (awp_agency_state_name == 'ALL') {
        $('#div_form_insert').hide();
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
                if (Main_Statename == "ALL") {

                    $('#nodal_agency_name1').text("All States");
                    $('#nodal_agency_name').text("All States");
                }

                $('#Name_Of_Support_Service').val("0");
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Training_Description').val("");
                $('#Training_ItemCode').val("");
                $('#Training_Month').val("0");
                $('#Training_Year').val("0");
                $('#Training_Targeted_Numbers_as_per_AWP').val("");
                //$('#Training_Estimated_Cost').val("");
                $('#Training_Item_Procured').val("");
                $('#Training_Total').val("");
                $('#Traning_Cumulative_Total').val("");
                $('#Training_Remark').val("");

                $('#Type_Of_Work').val("0");
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Work_Description').val("");
                $('#Work_ItemCode').val("");
                $('#Work_Month').val("0");
                $('#Work_Year').val("0");
                $('#Work_Targeted_Numbers_as_per_AWP').val("");
                //$('#Work_Estimated_Cost').val("");
                $('#Work_Item_Procured').val("");
                $('#Work_Total').val("");
                $('#Work_Cumulative_Total').val("");
                $('#Work_Remark').val("");


                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Brif_description_of_good').val("0");
                $('#Goods_Description').val("");
                $('#Goods_ItemCode').val("");
                $('#Goods_Month').val("0");
                $('#Goods_Year').val("0");
                $('#Goods_Targeted_Numbers_as_per_AWP').val("");
                //$('#Goods_Estimated_Cost').val("");
                $('#Goods_Item_Procured').val("");
                $('#Goods_Total').val("");
                $('#Goods_Cumulative_Total').val("");
                $('#Goods_Remark').val("");

                $('#Support_Description').val("");
                $('#Support_Item_code').val("");
                $('#Support_Month').val("0");
                $('#Support_Year').val("0");
                $('#Support_Service').val("0");
                /*$('#Support_Targeted_Numbers_as_per_AWP').val("");*/
                //$('#Support_Estimated_Cost').val("");
                $('#Support_Item_Procured').val("");
                $('#Support_Total').val("");
                $('#Support_Cumulative_Total').val("");
                $('#Support_Remark').val("");
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                //Abhishek2

                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Procurements of Equipments_Description').val("");
                $('#Procurements of Equipments_ItemCode').val("");
                $('#Procurements of Equipments_Month').val("0");
                $('#Procurements of Equipments_Year').val("0");
                $('#Procurements of Equipments_Targeted_Numbers_as_per_AWP').val("");
                //$('#Procurements of Equipments_Estimated_Cost').val("");
                $('#Procurements of Equipments_Item_Procured').val("");
                $('#Procurements of Equipments_Total').val("");
                $('#Procurements of Equipments_Cumulative_Total').val("");
                $('#Procurements of Equipments_Remark').val("");

                $('#serviceselector').val("0");      //abhi282
                $('#serviceselector1').val("0");
                $('#IEC/Awareness_Description').val("");
                $('#IEC/Awareness_ItemCode').val("");
                $('#IEC/Awareness_Month').val("0");
                $('#IEC/Awareness_Year').val("0");
                $('#IEC/Awareness_Targeted_Numbers_as_per_AWP').val("");
                //$('#IEC/Awareness_Estimated_Cost').val("");
                $('#IEC/Awareness_Item_Procured').val("");
                $('#IEC/Awareness_Total').val("");
                $('#IEC/Awareness_Cumulative_Total').val("");
                $('#IEC/Awareness_Remark').val("");

                $('#serviceselector').val("0");  //abhi281
                $('#serviceselector1').val("0");
                $('#Other Key Activities_Description').val("");
                $('#Other Key Activities_ItemCode').val("");
                $('#Other Key Activities_Month').val("0");
                $('#Other Key Activities_Year').val("0");
                $('#Other Key Activities_Targeted_Numbers_as_per_AWP').val("");
                //$('#Other Key Activities_Estimated_Cost').val("");
                $('#Other Key Activities_Procured').val("");
                $('#Other Key Activities_Total').val("");
                $('#Other Key Activities_Cumulative_Total').val("");
                $('#Other Key Activities_Remark').val("");

                $('#serviceselector').val("0");   //abhi28
                $('#serviceselector1').val("0");
                $('#Social Outreach_Description').val("");
                $('#Social Outreach_ItemCode').val("");
                $('#Social Outreach_Month').val("0");
                $('#Social Outreach_Year').val("0");
                $('#Social Outreach_Targeted_Numbers_as_per_AWP').val("");
                //$('#Social Outreach_Estimated_Cost').val("");
                $('#Social Outreach_Procured').val("");
                $('#Social Outreach_Total').val("");
                $('#Social Outreach_Cumulative_Total').val("");
                $('#Social Outreach_Remark').val("");


                if (data.length != 0) {

                    $('#nodal_agency_name1').text(data[0].nodal_agency_name);
                    $('#nodal_agency_name').text(data[0].nodal_agency_name);

                    // AWP_Info();
                    physical_monitoring_report_Info();
                }
                else {

                    if (Main_Statename == "ALL") {

                        $('#nodal_agency_name1').text("All States");
                        $('#nodal_agency_name').text("All States");

                        //AWP_Info();
                        physical_monitoring_report_Info();
                    }
                    if (Main_Statename == "NPMU") {
                        $('#nodal_agency_name1').text("NPMU States");
                        $('#nodal_agency_name').text("NPMU States");

                        //AWP_Info();
                        physical_monitoring_report_Info();
                    }
                }

            }
        });

    } else {

        alert("Please Select Agency");
    }

}

function AWP_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
            awp_physical_year_20_21 = 0;

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            else {

                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {

                        if (data[i].awp_physical_year_20_21 != null && data[i].awp_physical_year_20_21 != "") {
                            awp_physical_year_20_21 += data[i].awp_physical_year_20_21;
                        }
                    }


                }

            }


        }
    });
}

var SupportServiceName = "";

// abhishek
function Nameofsupport1() {
    $('#Support_Item_Procured').prop('disabled', false); //new
    
    $('#Support_Remark').prop('disabled', false);  //new
    $('#Support_Item_Procured').prop('disabled', false);
    $('#Support_Remark').prop('disabled', false);
    $('#physical_savebtn').prop('disabled', false);

    if ($('#serviceselector').val() == "Training") {
        $('#divssb').hide(); 
        $('#divsbdata').hide(); 
        $('#Support_Item_Procured').prop('disabled', true);
        $('#Support_Remark').prop('disabled', true);
        $('#physical_savebtn').prop('disabled', true);
    }

    else if ($('#serviceselector').val() == "Procurements Of Equipments") {
        $('#divssb').hide(); //abhsihek1
        $('#divsbdata').hide();   //new
    }
    else if ($('#serviceselector').val() == "IEC/Awareness") {
        $('#divssb').hide(); //abhishek1
        $('#divsbdata').hide();  //new
        $('#Support_Item_Procured').prop('disabled', true);
        $('#Support_Remark').prop('disabled', true);
        $('#physical_savebtn').prop('disabled', true);
    }

    else if ($('#serviceselector').val() == "Other Key Activities") {
        $('#divssb').hide(); //abhishek2
        $('#divsbdata').hide();  //new
    }
    else if ($('#serviceselector').val() == "Social Outreach") {
        $('#divssb').hide(); //Abhishek2
        $('#divsbdata').hide();  //new
    }

    else if ($('#serviceselector').val() == "0") {
        $('#divssb').hide();
        $('#divsbdata').hide();  //new
    }

    else if ($('#serviceselector').val() == "Support") {
        $('#divssb').hide();
        $('#divsbdata').hide();   //new
    }

    else if ($('#serviceselector').val() == "Goods") {
        $('#divssb').hide();
        $('#divsbdata').hide();   //new
    }

    else if ($('#serviceselector').val() == "Work") {
        $('#divssb').hide();
        $('#divsbdata').hide();   //new
    }

    $('#Support_Description').val("");
    $('#Goods_Description').val("");
    $('#Work_Description').val("");
    $('#Training_Description').val("");

    $('#Support_Item_code').val("");
    $('#Goods_ItemCode').val("");
    $('#Work_ItemCode').val("");
    $('#Training_ItemCode').val("");
    $('#Support_Year').val("0");
    $('#Support_Targeted_Numbers_as_per_AWP').val("");

    var Tett = $('#serviceselector').val();
    if (Tett == "Support") {
        Tett = "Support Services";
    }
    if (Tett != "0") {
        $('#PH_Dropdown_value').text(Tett);
        if (Tett == "Support Services") {
            Tett = "Support";
        }
        SupportServiceName = Tett;

        NameSelector_Dropdown();
    }
}
var SupportServiceName1 = "";
function Nameofsupport2() {

    $('#Support_Description').val("");
    $('#Goods_Description').val("");
    $('#Work_Description').val("");
    $('#Training_Description').val("");

    $('#Support_Item_code').val("");
    $('#Goods_ItemCode').val("");
    $('#Work_ItemCode').val("");
    $('#Training_ItemCode').val("");

    var Tett = $('#serviceselector1').val();

    if (Tett != "0") {
        $('#PH_Dropdown_value').text(Tett);
        SupportServiceName = Tett;

        NameSelector_Dropdown();

    }
}

//abhishek
function NameSelector_Dropdown() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/NameSelector_Dropdown',
        data: { 'SupportServiceName': SupportServiceName },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var ddlst = {};

            if (SupportServiceName == "Support") {
                var slection_options = '<option value="0">Select Type of Support Service </option>';


                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }

                    }
                    $('#Support_Service').html(slection_options);

                }
            }
            else if (SupportServiceName == "Goods") {
                var slection_options = '<option value="0">Select Brief Description </option>';

                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }

                    }
                    $('#Support_Service').html(slection_options);

                }
            }
            else if (SupportServiceName == "Work") {

                var slection_options = '<option value="0">Select Type of the Work </option>';

                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }

                    }

                    $('#Support_Service').html(slection_options);

                }

            }
            else if (SupportServiceName == "Training") {

                var slection_options = '<option value="0">Select Name of Support Service </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }
                    }

                    $('#Support_Service').html(slection_options);

                }

            }
            //abhishek
            else if (SupportServiceName == "Procurements Of Equipments") {

                var slection_options = '<option value="0">Select Name of Support Service </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }
                    }

                    $('#Support_Service').html(slection_options);

                }

            }


            else if (SupportServiceName == "IEC/Awareness") {
                var slection_options = '<option value="0">Select Type of Support Service </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }

                    }
                    $('#Support_Service').html(slection_options);

                }
            }
            else if (SupportServiceName == "Other Key Activities") {
                var slection_options = '<option value="0">Select Type of Support Service </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }

                    }
                    $('#Support_Service').html(slection_options);

                }
            }
            else if (SupportServiceName == "Social Outreach") {
                var slection_options = '<option value="0">Select Type of Support Service </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].support_name != "") {
                            if (!ddlst[data[i].support_name]) {
                                ddlst[data[i].support_name] = data[i].support_name;
                                slection_options += '<option value="' + data[i].support_name + '"> ' + data[i].support_name + ' </option>';
                            }
                        }

                    }
                    $('#Support_Service').html(slection_options);

                }
            }
        }

    });

}
//abhishek
function get_sub_support() {

    var SupportTypeName = $("#Support_Service").val();
    $.ajax({
        type: 'get',
        contenttype: 'application/json; chatset=utf-8',
        url: '/mis_new/DropDownShowing_Values1',
        data: { 'SupportTypeName': SupportTypeName },
        datatype: 'json',
        success: function (data) {
            var slection_options = '<option value="0">Select Type of Sub Support Service </option>';

            for (var i = 0; i < data.length; i++) {

                slection_options += '<option value="' + data[i].sub_support_type + '"> ' + data[i].sub_support_type + ' </option>';
            }
            $('#Sub_Support_Service').html(slection_options);



        }
    });
}

/*abhi0704*/

function get_sub_support1() {
    var SupportTypeName = $("#Sub_Support_Service").val();
    $.ajax({
        type: 'get',
        contenttype: 'application/json; chatset=utf-8',
        url: '/mis_new/DropDownShowing_Values3',
        data: { 'SupportTypeName': SupportTypeName },
        datatype: 'json',
        success: function (data) {
            var slection_options = '<option value="0">Select Type of Sub Data </option>';

            for (var i = 0; i < data.length; i++) {

                slection_options += '<option value="' + data[i].sub_data + '"> ' + data[i].sub_data + ' </option>';
            }
            $('#Sub_Data').html(slection_options);



        }
    });
}

/*abhi0704*/

function get_sub_support2() {
    var SupportTypeName = $("#Sub_Data").val();
    $.ajax({
        type: 'get',
        contenttype: 'application/json; chatset=utf-8',
        url: '/mis_new/DropDownShowing_Values5',
        data: { 'SupportTypeName': SupportTypeName },
        datatype: 'json',
        success: function (data) {
            var slection_options = '<option value="0">Select Type of Sub Data Year </option>';

            for (var i = 0; i < data.length; i++) {

                slection_options += '<option value="' + data[i].sub_data_year + '"> ' + data[i].sub_data_year + ' </option>';
            }
            $('#Sub_Data_Year').html(slection_options);



        }
    });
}


var SupportTypeName = "";

function Support_Service_onchange() {
    $('#physical_savebtn').show();
    var dd = $("#Support_Service").val();
    if ($('#Support_Service').val() == "Public Awareness/Publicity") {
        $('#Support_Item_Procured').prop('disabled', false);
        //  $('#Support_Cumulative_Total').prop('disabled', false);
        $('#Support_Remark').prop('disabled', false);  //new
        $('#physical_savebtn').hide();
    }
    if ($('#Support_Service').val() == "Workshops at State, District and GP level (Numbers)") {
        $('#Support_Item_Procured').prop('disabled', false);
        //    $('#Support_Cumulative_Total').prop('disabled', false);
        $('#Support_Remark').prop('disabled', false);  //new
    }
    if ($('#Support_Service').val() == "No. of contents developed") {
        $('#Support_Item_Procured').prop('disabled', false);
        //   $('#Support_Cumulative_Total').prop('disabled', false);
        $('#Support_Remark').prop('disabled', false);  //new
    }

    if ($('#Support_Service').val() == 'Percentage (%) of Female participation in the Community meetings') {
        $('.txt_cum').text('Please Fill Value in (%)');
        $('.txt_cum1').text('Value in (%)');
    }
    else {
        $('.txt_cum').text('');
        $('.txt_cum1').text('');
    }
    $("#Support_Month").val("0");
    $("#Support_Year").val("0");
    $("#Support_Cumulative_Total").val("");

    //abhishek1


    //if ($('#Support_Service').val() == "Workshop at State, District and GP level (Numbers)") {
    //    $('#divssb').show();

    //}
    //else {
    //    $('#divssb').hide();
    //}

    //Abhishek2

    if ($('#Support_Service').val() == "Prepration of IEC Plan(Media plan)") {
        $('#divssb').show();

    }
    else if ($('#Support_Service').val() == "Public Awareness/Publicity") {
        $('#divssb').show();
    }
    else if ($('#Support_Service').val() == "Workshops at State, District and GP level (Numbers)") {
        $('#divssb').show();

    }
    else {
        $('#divssb').hide();
    }

    //Abhishek2

    if ($('#Support_Service').val() == "Data Collection (Details of wells)") {
        $('#divssb').show();
    }
    if ($('#Support_Service').val() == "Preparation of WSP") {
        $('#divssb').show();
    }
    if ($('#Support_Service').val() == "Plan for Incentive fund utillization") {
        $('#divssb').show();
    }
    if ($('#Support_Service').val() == "Additional area covered under micro-irrigation(Ha.)") {
        $('#divssb').show();
    }
    if ($('#Support_Service').val() == "Key Activities") {
        $('#divssb').show();
    }


    if (dd != "0") {
        $('#Support_Description').val("");
        $('#Goods_Description').val("");
        $('#Work_Description').val("");
        $('#Training_Description').val("");

        $('#Support_Item_code').val("");
        $('#Goods_ItemCode').val("");
        $('#Work_ItemCode').val("");
        $('#Training_ItemCode').val("");

        //if ($('#Support_Targeted_Numbers_as_per_AWP').val() !== 0)
        //{

        //}

        SupportTypeName = dd;
        DropDownShowing_Values();
        //abhishek
        get_sub_support();
    }
}
//abhishek

function Sub_Support_Service_onchange() {
    $("#Support_Month").val("0");
    $("#Support_Year").val("0");
    $("#Support_Cumulative_Total").val("");
    var dd = $("#Sub_Support_Service").val();

    /*abhi704*/
    if (dd == "No. of IEC material displayed") {
        $('#divssb_sb').show();
    } else {
        $('#divssb_sb').hide();
    }

    if ($('#Sub_Support_Service').val() == "Whether Monitoring of existing Piezometer (Key wells)being done") {
        $('#divsbdata').show();
    }
    else {
        $('#divsbdata').hide();
    }

    //Abhishek2
    if ($('#Sub_Support_Service').val() == "No" || $('#Sub_Support_Service').val() == "Yes") {
        //$('#Support_Estimated_Cost').prop('disabled', true);
        $('#Support_Item_Procured').prop('disabled', true);
        $('#Support_Cumulative_Total').prop('disabled', true);
        $('#Support_Remark').prop('disabled', true);  //new
        $('#Support_Targeted_Numbers_as_per_AWP').prop('disabled', true);  //new
    }

    //if ($('#Sub_Support_Service').val() == "Yes") {
    //    //$('#Support_Estimated_Cost').prop('disabled', true);
    //    $('#Support_Item_Procured').prop('disabled', false);
    //    $('#Support_Cumulative_Total').prop('disabled', true);
    //    $('#Support_Remark').prop('disabled', false);  //new  //abhi1606
    //    $('#Support_Targeted_Numbers_as_per_AWP').prop('disabled', true);  //new
    //}



    if (dd != "0") {

        $('#Support_Description').val("");
        $('#Goods_Description').val("");
        $('#SubWork_Description').val("");
        $('#Training_Description').val("");


        $('#Support_Item_code').val("");
        $('#Goods_ItemCode').val("");
        $('#Work_ItemCode').val("");
        $('#Training_ItemCode').val("");


        SupportTypeName = dd;
        get_sub_support1();
        DropDownShowing_Values1();
        DropDownShowing_Values2();
    }
}
/*abhi0704*/

function Sub_Data_onchange() {

    var dd = $("#Sub_Data").val();

    if ($('#Sub_Data').val() == "Yes") {
        $('#divsdyear').show();
    }
    else {
        $('#divsdyear').hide();
    }

    if ($('#Sub_Data').val() == "No") {
        //$('#Support_Estimated_Cost').prop('disabled', true);
        $('#Support_Item_Procured').prop('disabled', true);
        $('#Support_Cumulative_Total').prop('disabled', true);
        $('#Support_Remark').prop('disabled', true);  //new
        $('#Support_Targeted_Numbers_as_per_AWP').prop('disabled', true);
    }
    /*abhi0704*/
    else {
        //$('#Support_Estimated_Cost').prop('disabled', false);
        $('#Support_Item_Procured').prop('disabled', false);
        // $('#Support_Cumulative_Total').prop('disabled', false);
        $('#Support_Remark').prop('disabled', false);  //new
        $('#Support_Targeted_Numbers_as_per_AWP').prop('disabled', false);
    }

    if (dd != "0") {

        $('#Support_Description').val("");
        $('#Goods_Description').val("");
        $('#SubWork_Description').val("");
        $('#Training_Description').val("");


        $('#Support_Item_code').val("");
        $('#Goods_ItemCode').val("");
        $('#Work_ItemCode').val("");
        $('#Training_ItemCode').val("");


        SupportTypeName = dd;
        get_sub_support2();
        DropDownShowing_Values3();
        DropDownShowing_Values4();
    }

}

/*abhi0704*/

//function Sub_Data_Year_onchange() {

//    var dd = $("#Sub_Data_Year").val();

//    //if ($('#Sub_Data').val() == "No") {
//    //    $('#Support_Estimated_Cost').prop('disabled', true);
//    //    $('#Support_Item_Procured').prop('disabled', true);
//    //    $('#Support_Cumulative_Total').prop('disabled', true);
//    //    $('#Support_Remark').prop('disabled', true);  //new
//    //    $('#Support_Targeted_Numbers_as_per_AWP').prop('disabled', true);
//    //}

//    if (dd != "0") {

//        $('#Support_Description').val("");
//        $('#Goods_Description').val("");
//        $('#SubWork_Description').val("");
//        $('#Training_Description').val("");


//        $('#Support_Item_code').val("");
//        $('#Goods_ItemCode').val("");
//        $('#Work_ItemCode').val("");
//        $('#Training_ItemCode').val("");


//        SupportTypeName = dd;
//        DropDownShowing_Values5();
//        DropDownShowing_Values6();
//    }

//}



function Brif_description_of_good_onchange() {

    $('#Support_Description').val("");
    $('#Goods_Description').val("");
    $('#Work_Description').val("");
    $('#Training_Description').val("");

    $('#Support_Item_code').val("");
    $('#Goods_ItemCode').val("");
    $('#Work_ItemCode').val("");
    $('#Training_ItemCode').val("");

    var dd = $("#Brif_description_of_good").val();
    if (dd != "0") {

        SupportTypeName = dd;
        DropDownShowing_Values();
    }
}
function Type_Of_Work_onchange() {
    $('#Support_Description').val("");
    $('#Goods_Description').val("");
    $('#Work_Description').val("");
    $('#Training_Description').val("");

    $('#Support_Item_code').val("");
    $('#Goods_ItemCode').val("");
    $('#Work_ItemCode').val("");
    $('#Training_ItemCode').val("");

    var dd = $("#Type_Of_Work").val();
    if (dd != "0") {

        SupportTypeName = dd;
        DropDownShowing_Values();
    }
}

function Name_Of_Support_Service_onchange() {

    $('#Support_Description').val("");
    $('#Goods_Description').val("");
    $('#Work_Description').val("");
    $('#Training_Description').val("");
    $('#IEC/Awareness_Description').val("");

    $('#Support_Item_code').val("");
    $('#Goods_ItemCode').val("");
    $('#Work_ItemCode').val("");
    $('#Training_ItemCode').val("");
    $('#IEC/Awareness_ItemCode').val("");

    var dd = $("#Name_Of_Support_Service").val();
    if (dd != "0") {

        SupportTypeName = dd;
        DropDownShowing_Values();
    }
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


function validate_month(Email) {
    //var yyy = '';
    //if (fincalyear == "2022") {
    //    yyy = "2022-23";
    //} else if (fincalyear == "2023") {
    //    yyy = "2023-24";
    //} else if (fincalyear == "2024") {
    //    yyy = "2024-25";
    //}
    var select_month = $('#Support_Month').val();
    var select_month_num = Get_Month_Number(select_month)
    var select_Year = $("#Support_Year").val();

    
    if (select_month_num == mm && select_Year == fiscalyear) {
        $('#physical_savebtn').prop('disabled', false);
    } else if (dd <= fix_Date && select_month_num == mm - 1 && select_Year == fiscalyear) {
        $('#physical_savebtn').prop('disabled', false);
    } else {
        $('#physical_savebtn').prop('disabled', true);
        if (select_Year == "2023-24" && select_month_num == "3") {
            if ("20240416" <= formattedDateaa) {
                $('#physical_savebtn').prop('disabled', true);

            }
            else {
                $('#physical_savebtn').prop('disabled', false);

            }

        }
    }

    if (mm == 1) {
        mn = 13;
        if (dd <= fix_Date && select_month_num == mn - 1 && select_Year == fiscalyear) {
            $('#physical_savebtn').prop('disabled', false);
        }
    }
    if (Email == 'vinodk02@gmail.com') {
        $('#physical_savebtn').prop('disabled', false);
    } else if (Access_Auth == 'readonly') {
        $('#physical_savebtn').prop('disabled', true);
    }
    if (Email == 'no-access' && select_Year == '2023-24' && (select_month == 'September' || select_month == 'October')){
        $('#physical_savebtn').prop('disabled', false);
        if (select_Year == "2023-24" && select_month_num == "3") {
            if ("20240406" <= formattedDateaa) {
                $('#physical_savebtn').prop('disabled', true);

            }
            else {
                $('#physical_savebtn').prop('disabled', false);

            }

        }
    }
    if (select_Year == "2024-25" && select_month_num == "3") {

        $('#physical_savebtn').prop('disabled', true);
    }
}
/*abhi1204*/

function Support_Year_onchange(Email) {
    validate_month(Email);
    $('#Support_Targeted_Numbers_as_per_AWP').val("");   //abhi0605

    var year = $("#Support_Year").val();
    //if (year == '2020-21' || year == '2021-22') {
    //    if (Email != 'vinodk02@gmail.com') {
    //        $('#physical_savebtn').prop('disabled', true);
    //    } else {
    //        $('#physical_savebtn').prop('disabled', false);
    //    }
    //} else {
    //    $('#physical_savebtn').prop('disabled', false);
    //}

    var state = $("#awp_agency_state_name_1").val();
    if (state == '0') {
        state = $("#pip_dropdown_state_name").text();
    }
    var ItemCode = $("#Support_Item_code").val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/DropDownShowing_Year',
        data: { 'Datayear': year, 'Datastate': state, 'AwpItemCode': ItemCode },
        dataType: 'JSON',
        success: function (data) {

            console.log(data);
            $('#Support_Targeted_Numbers_as_per_AWP').val(data);    //abhi1606

        },
        error: function () {
            //alert('Select right year');

        }
    });

    get_cumalative_last();
}
var Cum_val = 0;
var Cum_count = 0;
var sum_cumulative = 0;
function get_cumalative_last() {
    var sub_support_type = $('#Sub_Support_Service').val();

    var year = $("#Support_Year").val();
    if (year == '0') {
        alert('Please select Year');
        return;
    }
    var state = $("#awp_agency_state_name_1").val();
    if (state == '0') {
        state = $("#pip_dropdown_state_name").text();
    }
    var ItemCode = $("#Support_Item_code").val();
    var month = $("#Support_Month").val();
    if (month == '0') {
        alert('Please select Month');
        return;
    }
    if ($('#material_type').val() != "0") {
        var material_type = $('#material_type').val();
    } else {
        var material_type = "";
    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/FetchCummulative',
        data: { 'Datayear': year, 'Datastate': state, 'AwpItemCode': ItemCode, 'month': month, 'sub_support_type': sub_support_type, 'material_type': material_type },
        dataType: 'JSON',
        success: function (data) {
            
            const data1 = data.split(',')
            if (data1[1] != null) {
                Cum_count = parseInt(data1[1]) + 1;
            }
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            } else {
                $('#Support_Cumulative_Total').val(parseFloat(data1[2]));
                Cum_val = parseFloat(data1[2]);
            }
            if (data1[2] != null) {
                sum_cumulative = data1[2];
            }


            //if ($("#Support_Item_code").val() == "A4.1.03.04") {
            //    const data1 = data.split(',')
            //    Cum_count = parseInt(data1[1]) + 1;
            //    if (data1[0] == 'null') {
            //        $('#Support_Cumulative_Total').val(data1[0]);
            //        Cum_val = data1[0];
            //    }
            //    else {
            //        $('#Support_Cumulative_Total').val(data1[0]);    //abhi1606
            //        Cum_val = data1[0];
            //    }
            //} else {
            //    if (data == 'null') {
            //        $('#Support_Cumulative_Total').val(data);
            //        Cum_val = data;
            //    }
            //    else {
            //        $('#Support_Cumulative_Total').val(data);    //abhi1606
            //        Cum_val = data;
            //    }
            //}

        },
        error: function () {
            alert('Select right year');

        }
    });

}



function Sum_cumm(e) {
    
    var val_cumm = Cum_val;
    var val_achi = document.getElementById("Support_Item_Procured").value;
    var val_sum = 0;
    if (val_achi != "") {
        val_sum = parseFloat(val_cumm) + parseFloat(val_achi);
    } else {
        val_sum = parseFloat(val_cumm) + 0;
    }
    
    var dd = $("#Support_Service").val();
    if (dd == "Percentage (%) of Female participation in the Community meetings") {
        if (val_achi < 0 || val_achi > 100) {
            alert('Input Value should be Between 0 - 100');
            return;
        }
        var sum = parseFloat(sum_cumulative) + parseFloat(val_achi);
        var val_avg = sum / Cum_count;
        $('#Support_Cumulative_Total').val(val_avg.toFixed(2));
    } else {
        $('#Support_Cumulative_Total').val(val_sum);
    }



}

var Cum_val2 = 0;
function get_cumalative_last2(rowNo) {
    var sub_support_type = $('#Sub_Support_Service').val();
    var year = $("#Support_support_year" + rowNo).val();
    if (year == '0') {
        alert('Please select Year');
        return;
    }
    var state = $("#Support_state_name" + rowNo).val();
    if (state == '0') {
        state = $("#pip_dropdown_state_name").text();
    }
    var ItemCode = $("#Support_support_item_code" + rowNo).val();
    var month = $("#Support_support_month" + rowNo).val();
    if (month == '0') {
        alert('Please select Month');
        return;
    }
    if ($('#material_type').val() != "0") {
        var material_type = $('#material_type').val();
    } else {
        var material_type = "";
    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/FetchCummulative',
        data: { 'Datayear': year, 'Datastate': state, 'AwpItemCode': ItemCode, 'month': month, 'sub_support_type': sub_support_type, 'material_type': material_type },
        dataType: 'JSON',
        success: function (data) {

            const data1 = data.split(',')
            if (data1[1] != null) {
                Cum_count = parseInt(data1[1]) + 1;
            }
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            } else {
                $('#Support_support_cumulative_total').val(parseFloat(data1[2]));
                Cum_val2 = parseFloat(data1[2]);
            }
            if (data1[2] != null) {
                sum_cumulative = data1[2];
            }


            //if ($("#Support_Item_code").val() == "A4.1.03.04") {
            //    const data1 = data.split(',')
            //    Cum_count = parseInt(data1[1]) + 1;
            //    if (data1[0] == 'null') {
            //        $('#Support_Cumulative_Total').val(data1[0]);
            //        Cum_val = data1[0];
            //    }
            //    else {
            //        $('#Support_Cumulative_Total').val(data1[0]);    //abhi1606
            //        Cum_val = data1[0];
            //    }
            //} else {
            //    if (data == 'null') {
            //        $('#Support_Cumulative_Total').val(data);
            //        Cum_val = data;
            //    }
            //    else {
            //        $('#Support_Cumulative_Total').val(data);    //abhi1606
            //        Cum_val = data;
            //    }
            //}

        },
        error: function () {
            alert('Select right year');

        }
    });

}
function Sum_cumm2(e, rowNo) {
    get_cumalative_last2(rowNo);
    var val_cumm = Cum_val2;
    var val_achi = document.getElementById("Support_support_item_procured" + rowNo).value;
    var val_sum = 0;
    if (val_achi != "") {
        val_sum = parseFloat(val_cumm) + parseFloat(val_achi);
    } else {
        val_sum = parseFloat(val_cumm) + 0;
    }

    var dd = $("#Support_support_name").val();
    if (dd == "Percentage (%) of Female participation in the Community meetings") {
        if (val_achi < 0 || val_achi > 100) {
            alert('Input Value should be Between 0 - 100');
            return;
        }
        var sum = parseFloat(sum_cumulative) + parseFloat(val_achi);
        var val_avg = sum / Cum_count;
        $('#Support_support_cumulative_total' + rowNo).val(val_avg.toFixed(2));
    } else {
        $('#Support_support_cumulative_total' + rowNo).val(val_sum);
    }



}






function DropDownShowing_Values() {
    //abhishek
    //if (SupportTypeName == "NPMU")
    //{
    //    DropDownShowing_Values1();
    //}
    //else
    //{
    var ItemCode = '';
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/DropDownShowing_Values',
        data: { 'SupportTypeName': SupportTypeName },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (data.length != 0) {

                if (data[0].support_description != null) {
                    $('#Support_Description').val(data[0].support_description);
                    $('#Goods_Description').val(data[0].support_description);
                    $('#Work_Description').val(data[0].support_description);
                    $('#Training_Description').val(data[0].support_description);
                    //$('#IEC/Awareness_Description').val(data[0].support_description);    

                }

                if (data[0].item_code != null) {
                    ItemCode = data[0].item_code;
                    $('#Support_Item_code').val(data[0].item_code);
                    $('#Goods_ItemCode').val(data[0].item_code);
                    $('#Work_ItemCode').val(data[0].item_code);
                    $('#Training_ItemCode').val(data[0].item_code);
                    //$('#IEC/Awareness_ItemCode').val(data[0].item_code);      

                    //    Targeted_Number_AWP(data[0].item_code);

                }



            }
            //$('#Support_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

            //$('#Goods_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

            //$('#Work_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

            //$('#Training_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

        }
    });
    //}

}

//abhishek sharma

function DropDownShowing_Values1() {

    if (SupportTypeName != "0") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/DropDownShowing_Values1',
            data: { 'SupportTypeName': SupportTypeName },
            dataType: 'JSON',
            success: function (data) {

                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {

                    if (data[0].support_description != null) {
                        $('#Support_Description').val(data[0].support_description);
                        $('#Goods_Description').val(data[0].support_description);
                        $('#Work_Description').val(data[0].support_description);
                        $('#Training_Description').val(data[0].support_description);
                        //$('#IEC/Awareness_Description').val(data[0].support_description);    

                    }

                    if (data[0].item_code != null) {
                        ItemCode = data[0].item_code;
                        $('#Support_Item_code').val(data[0].item_code);
                        $('#Goods_ItemCode').val(data[0].item_code);
                        $('#Work_ItemCode').val(data[0].item_code);
                        $('#Training_ItemCode').val(data[0].item_code);
                        //$('#IEC/Awareness_ItemCode').val(data[0].item_code);      

                        // Targeted_Number_AWP(data[0].item_code);

                    }

                }
                //$('#Support_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

                //$('#Goods_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);


                //$('#Work_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

                //$('#Training_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

            }
        });

    }
}

//abhki29

function DropDownShowing_Values2() {

    if (SupportTypeName != "0") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/DropDownShowing_Values2',
            data: { 'SupportTypeName': SupportTypeName },
            dataType: 'JSON',
            success: function (data) {

                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                if (data.length != 0) {

                    if (data[0].support_description != null) {
                        $('#Support_Description').val(data[0].support_description);
                        $('#Goods_Description').val(data[0].support_description);
                        $('#Work_Description').val(data[0].support_description);
                        $('#Training_Description').val(data[0].support_description);
                        //$('#IEC/Awareness_Description').val(data[0].support_description);    

                    }

                    if (data[0].item_code != null) {
                        ItemCode = data[0].item_code;
                        $('#Support_Item_code').val(data[0].item_code);
                        $('#Goods_ItemCode').val(data[0].item_code);
                        $('#Work_ItemCode').val(data[0].item_code);
                        $('#Training_ItemCode').val(data[0].item_code);
                        //$('#IEC/Awareness_ItemCode').val(data[0].item_code);      

                        //  Targeted_Number_AWP(data[0].item_code);

                    }

                }
                //$('#Support_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

                //$('#Goods_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);


                //$('#Work_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

                //$('#Training_Targeted_Numbers_as_per_AWP').val(awp_physical_year_20_21);

            }
        });

    }
}


function Targeted_Number_AWP(ss) {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            if (data.length != 0) {
                for (var I = 0; I < data.length; I++) {
                    if (data[I].awp_item_code == ss) {
                        $('#Support_Targeted_Numbers_as_per_AWP').val(data[I].awp_total);
                        //$('#Support_Estimated_Cost').val(data[I].awp_estimated_cost_for_five_years);

                        $('#Goods_Targeted_Numbers_as_per_AWP').val(data[I].awp_total);
                        //$('#Goods_Estimated_Cost').val(data[I].awp_estimated_cost_for_five_years);

                        $('#Work_Targeted_Numbers_as_per_AWP').val(data[I].awp_total);
                        //$('#Work_Estimated_Cost').val(data[I].awp_estimated_cost_for_five_years);

                        $('#Training_Targeted_Numbers_as_per_AWP').val(data[I].awp_total);
                        //$('#Training_Estimated_Cost').val(data[I].awp_estimated_cost_for_five_years);

                        //new
                        $('#IEC/Awareness_Targeted_Numbers_as_per_AWP').val(data[I].awp_total);
                        //$('#IEC/Awareness_Estimated_Cost').val(data[I].awp_estimated_cost_for_five_years);

                    }
                }
            }
        }
    });

}
//abhishek
// abhi0704
function Save_Support_Service() {

    $('#divssb').hide();
    var i = 0;
    var Support_Item_code = $('#Support_Item_code').val()
    var sup_month = $('#Support_Month').val();
    var sup_year = $('#Support_Year').val();
    var supp_service = "0";
    var montly_Achievement = $('#Support_Item_Procured').val();
    var cumulative_Achievement = $('#Support_Cumulative_Total').val();
    if (Support_Item_code == "A4.1.03.04") {
        if (montly_Achievement > 100 || montly_Achievement < 0) {
            i = 1;
            alert('Input Value should be Between 0 - 100');
        }
    }

    if (montly_Achievement == "" && montly_Achievement == null) {
        montly_Achievement = 0;
    }
    if (cumulative_Achievement == "" && cumulative_Achievement == null) {
        cumulative_Achievement = 0;
    }
    if (Officer_type_11 == "NPMU") {
        supp_service = $('#serviceselector').val();
    } else {
        supp_service = $('#serviceselector1').val()
    }

    var supp_type = $('#Support_Service').val();

    if (Main_Statename == "") {
        i = 1;
        alert("Please Select State");
    }
    else if (montly_Achievement == "" && Support_Item_code != 'A4.1.01') {
        i = 1;
        alert("Please Fill Monthly Achievement");
    }
    else if (cumulative_Achievement == "" && Support_Item_code != 'A4.1.01') {
        i = 1;
        alert("Please Fill Cumulative Achievement");
    }
    else if (supp_service == "0") {
        i = 1;
        alert("Please Select Support Service Name");
    }
    else if (supp_type == "0") {
        i = 1;
        alert("Please Select Support Service Type");
    }
    else if (sup_month == "0") {
        i = 1;
        alert("Please Select Support Month");
    }
    else if (sup_year == "0") {
        i = 1;
        alert("Please Select Support Year");
    }

    if (i == 0) {

        var obj = {};
        obj.state_name = Main_Statename;
        obj.agency_name = $('#nodal_agency_name1').text();
        obj.support_type = supp_service;
        obj.support_name = $('#Support_Service').val();
        //abhishek
        if ($('#Sub_Support_Service').val() != "0") {

            obj.sub_support_type = $('#Sub_Support_Service').val()
        }
        else {

            obj.sub_support_type = "";
        }

        if ($('#material_type').val() != "0") {
            obj.material_type = $('#material_type').val();
        } else {
            obj.material_type = "";
        }

        /*abhi0704*/
        if ($('#Sub_Data').val() != "0") {

            obj.sub_data = $('#Sub_Data').val()
        }
        else {

            obj.sub_data = "";
        }
        /*abhi0704*/
        if ($('#Sub_Data_Year').val() != "0") {

            obj.sub_data_year = $('#Sub_Data_Year').val()
        }
        else {

            obj.sub_data_year = "";
        }



        obj.support_description = $('#Support_Description').val();

        obj.support_item_code = $('#Support_Item_code').val();
        obj.support_month = $('#Support_Month').val();

        obj.support_year = $('#Support_Year').val();
        obj.support_targeted_number = $('#Support_Targeted_Numbers_as_per_AWP').val();
        //obj.support_estimated_cost = $('#Support_Estimated_Cost').val();
        obj.support_item_procured = montly_Achievement;
        obj.support_total = "";
        obj.support_cumulative_total = cumulative_Achievement;
        obj.support_remark = $('#Support_Remark').val();
        //abhishek
        //obj.sub_support_type = $('#Sub_Support_Service').val();

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_Physcical_Monitoring_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                alert(response);
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#Support_Description').val("");
                $('#Support_Item_code').val("");
                $('#Support_Month').val("0");
                $('#Support_Year').val("0");
                $('#Support_Service').val("0");
                /* $('#Support_Targeted_Numbers_as_per_AWP').val("");*/
                //$('#Support_Estimated_Cost').val("");
                $('#Support_Item_Procured').val("");
                $('#Support_Total').val("");
                $('#Support_Cumulative_Total').val("");
                $('#Support_Remark').val("");
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                //abhishek
                $('#sub_support_type').val("");
                $('#sub_data').val("");              /*abhi0704*/
                $('#sub_data_year').val("");              /*abhi0704*/
                SessionInfo1();
                window.location.reload();
            },
            error: function (err) {
                alert('no')
                console.log(err);
            }
        });

    }
}

function Save_Goods_Info() {

    var i = 0;
    var g_month = $('#Goods_Month').val();
    var g_year = $('#Goods_Year').val();
    var goods_service = "0";
    if (Officer_type_11 == "NPMU") {
        goods_service = $('#serviceselector').val();
    } else {
        goods_service = $('#serviceselector1').val()
    }
    var goods_type = $('#Brif_description_of_good').val();
    if (Main_Statename == "") {
        i = 1;
        alert("Please Select State");
    }
    else if (goods_service == "0") {
        i = 1;
        alert("Please Select Goods Service Name");
    }
    else if (goods_type == "0") {
        i = 1;
        alert("Please Select Brief Description of Goods");
    }
    else if (g_month == "0") {
        i = 1;
        alert("Please Select Goods Month");
    }
    else if (g_year == "0") {
        i = 1;
        alert("Please Select Goods Year");
    }
    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.agency_name = $('#nodal_agency_name1').text();
        obj.support_type = SupportServiceName;
        obj.support_name = SupportTypeName;
        obj.support_description = $('#Goods_Description').val();
        obj.support_item_code = $('#Goods_ItemCode').val();
        obj.support_month = $('#Goods_Month').val();
        obj.support_year = $('#Goods_Year').val();
        obj.support_targeted_number = $('#Goods_Targeted_Numbers_as_per_AWP').val();
        //obj.support_estimated_cost = $('#Goods_Estimated_Cost').val();
        obj.support_item_procured = $('#Goods_Item_Procured').val();
        obj.support_total = $('#Goods_Total').val();
        obj.support_cumulative_total = $('#Goods_Cumulative_Total').val();
        obj.support_remark = $('#Goods_Remark').val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_Physcical_Monitoring_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {

                alert(response);
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Brif_description_of_good').val("0");
                $('#Goods_Description').val("");
                $('#Goods_ItemCode').val("");
                $('#Goods_Month').val("0");
                $('#Goods_Year').val("0");
                $('#Goods_Targeted_Numbers_as_per_AWP').val("");
                //$('#Goods_Estimated_Cost').val("");
                $('#Goods_Item_Procured').val("");
                $('#Goods_Total').val("");
                $('#Goods_Cumulative_Total').val("");
                $('#Goods_Remark').val("");
                SessionInfo1();
            }
        });

    }
}

function Save_Work_Info() {
    var i = 0;
    var w_month = $('#Work_Month').val();
    var w_year = $('#Work_Year').val();
    var work_service = "0";
    if (Officer_type_11 == "NPMU") {
        work_service = $('#serviceselector').val();
    } else {
        work_service = $('#serviceselector1').val()
    }
    var work_type = $('#Type_Of_Work').val();

    if (Main_Statename == "") {
        i = 1;
        alert("Please Select State");
    }
    else if (work_service == "0") {
        i = 1;
        alert("Please Select Work Service Name");
    }
    else if (work_type == "0") {
        i = 1;
        alert("Please Select Work Service Type");
    }
    else if (w_month == "0") {
        i = 1;
        alert("Please Select Work Month");
    }
    else if (w_year == "0") {
        i = 1;
        alert("Please Select Work Year");
    }

    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.agency_name = $('#nodal_agency_name1').text();
        obj.support_type = SupportServiceName;
        obj.support_name = SupportTypeName;
        obj.support_description = $('#Work_Description').val();
        obj.support_item_code = $('#Work_ItemCode').val();
        obj.support_month = $('#Work_Month').val();
        obj.support_year = $('#Work_Year').val();
        obj.support_targeted_number = $('#Work_Targeted_Numbers_as_per_AWP').val();
        //obj.support_estimated_cost = $('#Work_Estimated_Cost').val();
        obj.support_item_procured = $('#Work_Item_Procured').val();
        obj.support_total = $('#Work_Total').val();
        obj.support_cumulative_total = $('#Work_Cumulative_Total').val();
        obj.support_remark = $('#Work_Remark').val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_Physcical_Monitoring_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {

                alert(response);
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#Type_Of_Work').val("0");
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Work_Description').val("");
                $('#Work_ItemCode').val("");
                $('#Work_Month').val("0");
                $('#Work_Year').val("0");
                $('#Work_Targeted_Numbers_as_per_AWP').val("");
                //$('#Work_Estimated_Cost').val("");
                $('#Work_Item_Procured').val("");
                $('#Work_Total').val("");
                $('#Work_Cumulative_Total').val("");
                $('#Work_Remark').val("");
                SessionInfo1();
            }
        });

    }
}


function Save_Training_Info() {

    var i = 0;
    var Training_Month = $('#Traning_Month').val();
    var Training_Year = $('#Traning_Year').val();
    // var statname = $('#Training_Year').val();
    var Training_service = "0";
    if (Officer_type_11 == "NPMU") {
        Training_service = $('#serviceselector').val();
    } else {
        Training_service = $('#serviceselector1').val()
    }
    var Training_type = $('#Name_Of_Support_Service').val();

    if (Main_Statename == "") {
        i = 1;
        alert("Please Select State");
    }
    else if (Training_service == "0") {
        i = 1;
        alert("Please Select Training Service Name");
    }
    else if (Training_type == "0") {
        i = 1;
        alert("Please Select Training Service Type");
    }
    else if (Training_Month == "0") {
        i = 1;
        alert("Please Select Training Month");
    }
    else if (Training_Year == "0") {
        i = 1;
        alert("Please Select Training Year");
    }
    else if (SupportServiceName == "Support") {
        var SS = $('#Support').val();
        if (SS == "0") {
            i = 1;
            alert("Please Select Type of Support Service ");
        }

    }
    else if (SupportServiceName == "Goods") {
        var SS = $('#Brif_description_of_good').val();
        if (SS == "0") {
            i = 1;
            alert("Please Select Brief Description");
        }
    }
    else if (SupportServiceName == "Work") {
        var SS = $('#Type_Of_Work').val();
        if (SS == "0") {
            i = 1;
            alert("Please Select Type of the Work");
        }

    }
    else if (SupportServiceName == "Training") {
        var SS = $('#Name_Of_Support_Service').val();
        if (SS == "0") {
            i = 1;
            alert("Please Select Name of Support Service ");
        }

    }
    else if (Support_Month == "0") {
        i = 1;
        alert("Please Select Support_Month");
    }
    else if (Support_Year == "0") {
        i = 1;
        alert("Please Select Support_Year");
    }

    if (i == 0) {
        var obj = {};
        obj.state_name = Main_Statename;
        obj.agency_name = $('#nodal_agency_name1').text();
        obj.support_type = SupportServiceName;
        obj.support_name = SupportTypeName;
        obj.support_description = $('#Training_Description').val();
        obj.support_item_code = $('#Training_ItemCode').val();
        obj.support_month = $('#Training_Month').val();
        obj.support_year = $('#Training_Year').val();
        obj.support_targeted_number = $('#Training_Targeted_Numbers_as_per_AWP').val();
        //obj.support_estimated_cost = $('#Training_Estimated_Cost').val();
        obj.support_item_procured = $('#Training_Item_Procured').val();
        obj.support_total = $('#Training_Total').val();
        obj.support_cumulative_total = $('#Traning_Cumulative_Total').val();
        obj.support_remark = $('#Training_Remark').val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_Physcical_Monitoring_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {

                alert(response);
                $('#nodal_agency_name').text('');
                $('#nodal_agency_name1').text('');
                Main_Statename = "";
                $('#awp_agency_state_name_1').val('0');
                $('#Name_Of_Support_Service').val("0");
                $('#serviceselector').val("0");
                $('#serviceselector1').val("0");
                $('#Training_Description').val("");
                $('#Training_ItemCode').val("");
                $('#Training_Month').val("0");
                $('#Training_Year').val("0");
                $('#Training_Targeted_Numbers_as_per_AWP').val("");
                //$('#Training_Estimated_Cost').val("");
                $('#Training_Item_Procured').val("");
                $('#Training_Total').val("");
                $('#Traning_Cumulative_Total').val("");
                $('#Training_Remark').val("");
                SessionInfo1();
            }
        });

    }
}

//Save_Physcical_Monitoring


//report table

function physical_monitoring_report_Info() {    //abhi1606

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/physical_monitoring_report_Info',
        data: { 'StateName': Main_Statename, },
        dataType: 'JSON',
        success: function (data) {
            
            a_component = 0;
            b_component = 0;
            c_component = 0;
            d_component = 0;
            e_component = 0;  //Abhishek2
            f_component = 0;   //abhi282
            g_component = 0;   //abhi281
            h_component = 0;  //abhi28

            var tr = '';
            var Support_tr = '';
            var Goods_tr = '';
            var Work_tr = '';
            var Training_tr = '';
            var Procurements_Of_Equipments_tr = ''; //Abhishek2
            var IEC_Awareness_tr = '';          //abhi282
            var Other_Key_Activities_tr = '';  //abhi281
            var Social_Outreach_tr = '';  //abhi28

            var Support_Count = 0;
            var Goods_Count = 0;
            var Work_Count = 0;
            var Training_Count = 0;
            var Procurement_Of_Equipments_Count = 0; //Abhishek2
            var IEC_Awareness_Count = 0;       //abhi282
            var Other_Key_Activities_Count = 0;  //abhi281
            var Social_Outreach_Count = 0;    //abhi28


            if (data.length != 0) {

                var z = 0;
                var z1 = 0;
                var z2 = 0;
                var z3 = 0;
                var z4 = 0;    //Abhishek2
                var z5 = 0;        //abhi282
                var z6 = 0;         //abhi281
                var z7 = 0;        //abhi28
                
                for (var i = 0; i < data.length; i++) {
                    a_component += 1;
                    b_component += 1;
                    c_component += 1;
                    d_component += 1;
                    e_component += 1;    //Abhishek2
                    f_component += 1;    //abhi282
                    g_component += 1;   //abhi281
                    h_component += 1;    //abhi28
                    var support_cumulative_total = "";
                    if (data[i].support_type == "Support") {
                        z = z + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Support_Count += comunity_sum;

                            support_cumulative_total = comunity_sum;
                        }

                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')"> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        }
                    }
                    else if (data[i].support_type == "Goods") {
                        z1 = z1 + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Goods_Count += comunity_sum;
                        }

                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                            Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        }

                    }
                    else if (data[i].support_type == "Work") {
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Work_Count += comunity_sum;
                        }
                        z2 = z2 + 1;
                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                            Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                    }
                    else if (data[i].support_type == "Training") {

                        z3 = z3 + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Training_Count += comunity_sum;

                        }                            //Abhishek2
                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                            Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '"  value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                    }
                    //Abhishek2

                    else if (data[i].support_type == "Procurements Of Equipments") {

                        z4 = z4 + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Procurement_Of_Equipments_Count += comunity_sum;


                        }
                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {


                            Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                    }

                    //abhi282

                    else if (data[i].support_type == "IEC/Awareness") {
                        z5 = z5 + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            IEC_Awareness_Count += comunity_sum;

                        }
                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                            IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td><td>' + data[i].material_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td><td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {

                            IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                    }
                    //abhi281

                    else if (data[i].support_type == "Other Key Activities") {
                        z6 = z6 + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Other_Key_Activities_Count += comunity_sum;

                        }
                        
                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                            Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                    }
                    //abhi28

                    else if (data[i].support_type == "Social Outreach") {
                        z7 = z7 + 1;
                        if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                            var comunity_sum = parseFloat(data[i].support_item_procured);
                            Social_Outreach_Count += comunity_sum;
                        }
                        if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                            Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                            Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                            Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        } else {
                            Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                '<td>' + data[i].support_item_procured + '</td>' +
                                '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        }

                    }

                }
            }

            $('#Support_Count').text(Support_Count.toFixed(2));
            $('#Goods_Count').text(Goods_Count.toFixed(2));
            $('#Work_Count').text(Work_Count.toFixed(2));
            $('#Training_Count').text(Training_Count.toFixed(2));
            $('#Procurements_Of_Equipments_Count').text(Procurement_Of_Equipments_Count.toFixed(2)); //Abhishek2  //1805
            $('#IEC_Awareness_Count').text(IEC_Awareness_Count.toFixed(2));                  //abhi282
            $('#Other_Key_Activities_Count').text(Other_Key_Activities_Count.toFixed(2));    //abhi281
            $('#Social_Outreach_Count').text(Social_Outreach_Count.toFixed(2));          //abhi28



            if (Support_tr == '') {
                Support_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Goods_tr == '') {
                Goods_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Work_tr == '') {
                Work_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Training_tr == '') {
                Training_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            //Abhishek2  //1805
            if (Procurements_Of_Equipments_tr == '') {
                Procurements_Of_Equipments_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi282

            if (IEC_Awareness_tr == '') {
                IEC_Awareness_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi281
            if (Other_Key_Activities_tr == '') {
                Other_Key_Activities_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi28
            if (Social_Outreach_tr == '') {
                Social_Outreach_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            $('#support_report').html(Support_tr);
            $('#goods_report').html(Goods_tr);
            $('#work_report').html(Work_tr);
            $('#training_report').html(Training_tr);
            $('#procurements_of_Equipments_report').html(Procurements_Of_Equipments_tr); //1805
            $('#iEC_awareness_report').html(IEC_Awareness_tr);                  //abhi282
            $('#other_key_activities_report').html(Other_Key_Activities_tr);    //abhi281
            $('#social_outreach_report').html(Social_Outreach_tr);             //abhi28
            if (Email == 'vinodk02@gmail.com') {
                $('.disable_ph_btn').prop('disabled', false);
            } else if (Access_Auth == 'readonly') {
                $('.disable_ph_btn').prop('disabled', true);
            }
            //else {
            //    $('.disable_ph_btn').prop('disabled', true);
            //}
            //if (Email == 'wbataljal@gmail.com') {
            //    $('.disable_ph_btn').prop('disabled', true);
            //}

        }
    });
}
//Edit Delete Functionality


function cancelcomp_A_Support(i) {
    $('#Hide_Support_TR' + i).hide();
    $('#Support_TR' + i).show();
}
function editrowcomp_A_Support(i) {

    $('#Support_TR' + i).hide();
    $('#Hide_Support_TR' + i).show();
}


function cancelcomp_A_Good(i) {
    $('#Hide_Good_TR' + i).hide();
    $('#Good_TR' + i).show();
}
function editrowcomp_A_Good(i) {

    $('#Good_TR' + i).hide();
    $('#Hide_Good_TR' + i).show();
}


function cancelcomp_A_Work(i) {
    $('#Hide_Work_TR' + i).hide();
    $('#Work_TR' + i).show();
}
function editrowcomp_A_Work(i) {

    $('#Work_TR' + i).hide();
    $('#Hide_Work_TR' + i).show();
}

function cancelcomp_A_Training(i) {
    $('#Hide_Training_TR' + i).hide();
    $('#Training_TR' + i).show();
}
function editrowcomp_A_Training(i) {

    $('#Training_TR' + i).hide();
    $('#Hide_Training_TR' + i).show();
}

//Abhishek2

function cancelcomp_A_Procurements_Of_Equipments(i) {   //1805
    $('#Hide_Procurements_Of_Equipments_TR' + i).hide();
    $('#Procurements_Of_Equipments_TR' + i).show();
}
function editrowcomp_A_Procurements_Of_Equipments(i) {

    $('#Procurements_Of_Equipments_TR' + i).hide();
    $('#Hide_Procurements_Of_Equipments_TR' + i).show();
}

//abhi282
function cancelcomp_A_IEC_Awareness(i) {
    $('#Hide_IEC_Awareness_TR' + i).hide();
    $('#IEC_Awareness_TR' + i).show();
}
function editrowcomp_A_IEC_Awareness(i) {

    $('#IEC_Awareness_TR' + i).hide();
    $('#Hide_IEC_Awareness_TR' + i).show();
}
//abhi281
function cancelcomp_A_Other_Key_Activities(i) {
    $('#Hide_Other_Key_Activities_TR' + i).hide();
    $('#Other_Key_Activities_TR' + i).show();
}
function editrowcomp_A_Other_Key_Activities(i) {

    $('#Other_Key_Activities_TR' + i).hide();
    $('#Hide_Other_Key_Activities_TR' + i).show();
}

//abhi28
function cancelcomp_A_Social_Outreach(i) {
    $('#Hide_Social_Outreach_TR' + i).hide();
    $('#Social_Outreach_TR' + i).show();
}
function editrowcomp_A_Social_Outreach(i) {

    $('#Social_Outreach_TR' + i).hide();
    $('#Hide_Social_Outreach_TR' + i).show();
}


function Update_Support(Id, rowNo) {
    // alert(Id);

    var Support_support_item_procured = $('#Support_support_item_procured' + rowNo).val();
    var Support_support_targeted_number = $('#Support_support_targeted_number' + rowNo).val();
    var Support_support_cumulative_total = $('#Support_support_cumulative_total' + rowNo).val();

    if (Support_support_item_procured == '' || Support_support_item_procured == null) {
        Support_support_item_procured = 0;
    }
    if (Support_support_targeted_number == '' || Support_support_targeted_number == null) {
        Support_support_targeted_number = 0;
    }
    if (Support_support_cumulative_total == '' || Support_support_cumulative_total == null) {
        Support_support_cumulative_total = 0;
    }

    var obj = {};
    obj.id = Id;
    obj.support_name = $('#Support_support_name' + rowNo).val();
    obj.state_name = $('#Support_state_name' + rowNo).val();
    obj.support_description = $('#Support_support_description' + rowNo).val();
    obj.support_item_code = $('#Support_support_item_code' + rowNo).val();
    obj.material_type = $('#material_type' + rowNo).val();
    obj.support_targeted_number = Support_support_targeted_number;
    //obj.support_estimated_cost = $('#Support_support_estimated_cost' + rowNo).val();
    obj.support_item_procured = Support_support_item_procured;
    obj.support_total = $('#Support_support_total' + rowNo).val();
    obj.support_cumulative_total = Support_support_cumulative_total;
    obj.support_remark = $('#Support_support_remark' + rowNo).val();
    obj.support_year = $('#Support_support_year' + rowNo).val();
    obj.support_month = $('#Support_support_month' + rowNo).val();
    obj.sub_support_type = $('#Support_sub_support_type' + rowNo).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Update_Physcical_Monitoring_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            physical_monitoring_report_Info();
        }

    });
}

function Delete_Support(Id) {
    var obj = {};
    obj.id = Id;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/mis_new/Delete_Physcical_Monitoring_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            physical_monitoring_report_Info();
        }

    });
}

// Month Dropdown
var Fin_Year = "";
var Fin_Month = "";

function Financial_Month_Admin() {
    var Finacial_Month1 = $('#Finacial_Month1').val();

    if (Main_Statename != "") {
        if (Finacial_Month1 != "0") {
            Fin_Month = Finacial_Month1;
            Financial_Month_Data();
        }
        else {
            Fin_Month = "";
            alert("Select Month");
        }
    }
    else {
        alert("Select StateName");
    }
}
function Financial_Month_State() {
    var Finacial_Month = $('#Finacial_Month').val();

    if (Main_Statename != "") {
        if (Finacial_Month != "0") {
            Fin_Month = Finacial_Month;
            Financial_Month_Data();
        } else {
            Fin_Month = "";
            alert("Select Month");
        }
    }
    else {
        alert("Select StateName");
    }
}

function Financial_Month_Data() {    //abhi1606

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/physical_monitoring_report_Info',
        data: { 'StateName': Main_Statename, 'Year': Fin_Year, 'Month': Fin_Month },
        dataType: 'JSON',
        success: function (data) {
            a_component = 0;
            b_component = 0;
            c_component = 0;
            d_component = 0;
            e_component = 0;    //Abhishek2
            f_component = 0;           //abhi282
            g_component = 0;               //abhi281
            h_component = 0;              //abhi28

            var tr = '';
            var Support_tr = '';
            var Goods_tr = '';
            var Work_tr = '';
            var Training_tr = '';
            var Procurements_Of_Equipments_tr = '';  //Abhishek2
            var IEC_Awareness_tr = '';                  //abhi282
            var Other_Key_Activities_tr = '';       //abhi281
            var Social_Outreach_tr = '';               //abhi28

            var Support_Count = 0;
            var Goods_Count = 0;
            var Work_Count = 0;
            var Training_Count = 0;
            var Procurement_Of_Equipments_Count = 0;  //Abhishek2
            var IEC_Awareness_Count = 0;              //abhi282
            var Other_Key_Activities_Count = 0;     //abhi281
            var Social_Outreach_Count = 0;          //abhi28

            if (data.length != 0) {
                var z = 0;
                var z1 = 0;
                var z2 = 0;
                var z3 = 0;
                var z4 = 0;   //Abhishek2
                var z5 = 0;   //abhi282
                var z6 = 0;    //abhi281
                var z7 = 0;     //abhi28


                for (var i = 0; i < data.length; i++) {

                    var support_cumulative_total = "";

                    if (Fin_Year == "") {
                        if (data[i].support_month == Fin_Month) {

                            if (data[i].support_type == "Support") {
                                z = z + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Support_Count += comunity_sum;

                                    support_cumulative_total = comunity_sum;
                                }

                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')"> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }


                            }
                            else if (data[i].support_type == "Goods") {
                                z1 = z1 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Goods_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }
                            else if (data[i].support_type == "Work") {
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Work_Count += comunity_sum;
                                }
                                z2 = z2 + 1;
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            else if (data[i].support_type == "Training") {

                                z3 = z3 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Training_Count += comunity_sum;

                                }                            //Abhishek2
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //Abhishek2

                            else if (data[i].support_type == "Procurements Of Equipments") {

                                z4 = z4 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Procurement_Of_Equipments_Count += comunity_sum;


                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {


                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }

                            //abhi282

                            else if (data[i].support_type == "IEC/Awareness") {
                                z5 = z5 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    IEC_Awareness_Count += comunity_sum;

                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td><td>' + data[i].material_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" disabled class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }

                            }
                            //abhi281

                            else if (data[i].support_type == "Other Key Activities") {
                                z6 = z6 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Other_Key_Activities_Count += comunity_sum;

                                }
                                
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //abhi28

                            else if (data[i].support_type == "Social Outreach") {
                                z7 = z7 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Social_Outreach_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }

                        }
                    }
                    else {
                        if (data[i].support_month == Fin_Month) {

                        if (data[i].support_type == "Support") {
                            z = z + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Support_Count += comunity_sum;

                                support_cumulative_total = comunity_sum;
                            }

                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')"> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            }


                        }
                        else if (data[i].support_type == "Goods") {
                            z1 = z1 + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Goods_Count += comunity_sum;
                            }
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }

                        }
                        else if (data[i].support_type == "Work") {
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Work_Count += comunity_sum;
                            }
                            z2 = z2 + 1;
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }

                        }
                        else if (data[i].support_type == "Training") {

                            z3 = z3 + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Training_Count += comunity_sum;

                            }                            //Abhishek2
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')"  disabled > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }

                        }
                        //Abhishek2

                        else if (data[i].support_type == "Procurements Of Equipments") {

                            z4 = z4 + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Procurement_Of_Equipments_Count += comunity_sum;


                            }
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {


                                Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }

                        }

                        //abhi282

                        else if (data[i].support_type == "IEC/Awareness") {
                            z5 = z5 + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                IEC_Awareness_Count += comunity_sum;

                            }
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" disabled class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {

                                IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" disabled class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" disabled class="form-control" id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" disabled class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" disabled class="form-control" id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            }

                        }
                        //abhi281

                        else if (data[i].support_type == "Other Key Activities") {
                            z6 = z6 + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Other_Key_Activities_Count += comunity_sum;

                            }
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }

                        }
                        //abhi28

                        else if (data[i].support_type == "Social Outreach") {
                            z7 = z7 + 1;
                            if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                var comunity_sum = parseFloat(data[i].support_item_procured);
                                Social_Outreach_Count += comunity_sum;
                            }
                            if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            } else {
                                Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                    '<td>' + data[i].support_item_procured + '</td>' +
                                    '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                    '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                    '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                    '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                    '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }



                        }

                        }

                    }
                }
            }


            $('#Support_Count').text(Support_Count.toFixed(2));
            $('#Goods_Count').text(Goods_Count.toFixed(2));
            $('#Work_Count').text(Work_Count.toFixed(2));
            $('#Training_Count').text(Training_Count.toFixed(2));

            $('#Procurements_Of_Equipments_Count').text(Procurement_Of_Equipments_Count.toFixed(2));     //Abhishek2
            $('#IEC_Awareness_Count').text(IEC_Awareness_Count.toFixed(2));               //abhi282
            $('#Other_Key_Activities_Count').text(Other_Key_Activities_Count.toFixed(2));    //abhi281
            $('#Social_Outreach_Count').text(Social_Outreach_Count.toFixed(2));           //abhi28

            if (Support_tr == '') {
                Support_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Goods_tr == '') {
                Goods_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Work_tr == '') {
                Work_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Training_tr == '') {
                Training_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //Abhishek2

            if (Procurements_Of_Equipments_tr == '') {
                Procurements_Of_Equipments_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            // abhi282
            if (IEC_Awareness_tr == '') {
                IEC_Awareness_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi281
            if (Other_Key_Activities_tr == '') {
                Other_Key_Activities_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi28
            if (Social_Outreach_tr == '') {
                Social_Outreach_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            $('#support_report').html(Support_tr);
            $('#goods_report').html(Goods_tr);
            $('#work_report').html(Work_tr);
            $('#training_report').html(Training_tr);
            $('#procurements_of_Equipments_report').html(Procurements_Of_Equipments_tr);
            $('#iEC_awareness_report').html(IEC_Awareness_tr);                 //abhi282
            $('#other_key_activities_report').html(Other_Key_Activities_tr);    //abhi281
            $('#social_outreach_report').html(Social_Outreach_tr);     //abhi28
            if (Email == 'vinodk02@gmail.com') {
                $('.disable_ph_btn').prop('disabled', false);
            } else {
                $('.disable_ph_btn').prop('disabled', true);
            }
            if (Email == 'wbataljal@gmail.com') {
                $('.disable_ph_btn').prop('disabled', true);
            } else if (Access_Auth == 'readonly') {
                $('.disable_ph_btn').prop('disabled', true);
            }
            //if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' && Fin_Year == '2023-24' && Fin_Month != "0") {
            //    $('.disable_ph_btn').prop('disabled', false);
            //}
            //if (Email == 'abhy.maharashtra@gmail.com' && Fin_Year == '2023-24' && Fin_Month != "0") {
            //    $('.disable_ph_btn').prop('disabled', false);
            //}
        }
    });
}


function Financial_year_Admin() {
    var Finacial_Year1 = $('#Finacial_Year1').val();

    if (Main_Statename != "") {
        if (Finacial_Year1 != "0") {
            Fin_Year = Finacial_Year1;
            Financial_year_Data();
        }
        else {
            Fin_Year = "";
            alert("Select Year");
        }
    }
    else {
        alert("Select StateName");
    }
}
function Financial_year_State() {
    var Finacial_Year = $('#Finacial_Year').val();

    if (Main_Statename != "") {
        if (Finacial_Year != "0") {
            Fin_Year = Finacial_Year;
            Financial_year_Data();
        }
        else {
            Fin_Year = "";
            alert("Select Year");
        }
    }
    else {
        alert("Select StateName");
    }
}
//Abhishek23

function Financial_year_Data() {    //abhi1606      //abhi0206

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/physical_monitoring_report_Info',
        data: { 'StateName': Main_Statename, 'Year': Fin_Year },
        dataType: 'JSON',
        success: function (data) {

            a_component = 0;
            b_component = 0;
            c_component = 0;
            d_component = 0;
            e_component = 0;
            f_component = 0;     //abhi282
            g_component = 0;    //abhi281
            h_component = 0;   //abhi28

            var tr = '';
            var Support_tr = '';
            var Goods_tr = '';
            var Work_tr = '';
            var Training_tr = '';     //  abhi1605
            var Procurements_Of_Equipments_tr = '';
            var IEC_Awareness_tr = '';               //abhi282
            var Other_Key_Activities_tr = '';         //abhi281
            var Social_Outreach_tr = '';           //abhi28

            var Support_Count = 0;
            var Goods_Count = 0;
            var Work_Count = 0;
            var Training_Count = 0;
            var Procurement_Of_Equipments_Count = 0;
            var IEC_Awareness_Count = 0;                 //abhi282
            var Other_Key_Activities_Count = 0;        //abhi281
            var Social_Outreach_Count = 0;              //abhi28

            if (data.length != 0) {
                var z = 0;
                var z1 = 0;
                var z2 = 0;
                var z3 = 0;
                var z4 = 0;
                var z5 = 0;          //abhi282
                var z6 = 0;             //abhi281
                var z7 = 0;         //abhi28

                for (var i = 0; i < data.length; i++) {
                    a_component += 1;
                    b_component += 1;
                    c_component += 1;
                    d_component += 1;
                    e_component += 1;
                    f_component += 1;        //abhi282
                    g_component += 1;        //abhi281
                    h_component += 1;            //abhi28

                    var support_cumulative_total = "";
                    if (Fin_Month == "") {

                        if (Fin_Year == "ALL") {
                            $('#Finacial_Month1').prop('disabled', true);
                            $('#Finacial_Month1').val('0');
                            if (data[i].support_type == "Support") {
                                z = z + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Support_Count += comunity_sum;

                                    support_cumulative_total = comunity_sum;
                                }

                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')"> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }


                            }
                            else if (data[i].support_type == "Goods") {
                                z1 = z1 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Goods_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }
                            else if (data[i].support_type == "Work") {
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Work_Count += comunity_sum;
                                }
                                z2 = z2 + 1;
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            else if (data[i].support_type == "Training") {

                                z3 = z3 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Training_Count += comunity_sum;

                                }                            //Abhishek2
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //Abhishek2

                            else if (data[i].support_type == "Procurements Of Equipments") {

                                z4 = z4 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Procurement_Of_Equipments_Count += comunity_sum;


                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {


                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }

                            //abhi282

                            else if (data[i].support_type == "IEC/Awareness") {
                                z5 = z5 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    IEC_Awareness_Count += comunity_sum;

                                }
                                
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }

                            }
                            //abhi281

                            else if (data[i].support_type == "Other Key Activities") {
                                z6 = z6 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Other_Key_Activities_Count += comunity_sum;

                                }
                                
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //abhi28

                            else if (data[i].support_type == "Social Outreach") {
                                z7 = z7 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Social_Outreach_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }
                        }
                        
                        if (data[i].support_year == Fin_Year) {
                            $('#Finacial_Month1').prop('disabled', false);
                            if (data[i].support_type == "Support") {
                                z = z + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Support_Count += comunity_sum;

                                    support_cumulative_total = comunity_sum;
                                }

                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')"> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }


                            }
                            else if (data[i].support_type == "Goods") {
                                z1 = z1 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Goods_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }
                            else if (data[i].support_type == "Work") {
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Work_Count += comunity_sum;
                                }
                                z2 = z2 + 1;
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '"  value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            else if (data[i].support_type == "Training") {

                                z3 = z3 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Training_Count += comunity_sum;

                                }                            //Abhishek2
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //Abhishek2

                            else if (data[i].support_type == "Procurements Of Equipments") {

                                z4 = z4 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Procurement_Of_Equipments_Count += comunity_sum;


                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {


                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }

                            //abhi282

                            else if (data[i].support_type == "IEC/Awareness") {
                                z5 = z5 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    IEC_Awareness_Count += comunity_sum;

                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }

                            }
                            //abhi281

                            else if (data[i].support_type == "Other Key Activities") {
                                z6 = z6 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Other_Key_Activities_Count += comunity_sum;

                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //abhi28

                            else if (data[i].support_type == "Social Outreach") {
                                z7 = z7 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Social_Outreach_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }

                        }
                    }
                    else {

                        if (data[i].support_month == Fin_Month && data[i].support_year == Fin_Year) {
                            if (data[i].support_type == "Support") {
                                z = z + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Support_Count += comunity_sum;

                                    support_cumulative_total = comunity_sum;
                                }

                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')"> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }


                            }
                            else if (data[i].support_type == "Goods") {
                                z1 = z1 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Goods_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Goods_tr += '<tr id="Good_TR' + i + '"><td> ' + z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Good(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Good_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Good(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }
                            else if (data[i].support_type == "Work") {
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Work_Count += comunity_sum;
                                }
                                z2 = z2 + 1;
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Work_tr += '<tr id="Work_TR' + i + '"><td> ' + z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Work(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Work_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Work(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            else if (data[i].support_type == "Training") {

                                z3 = z3 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Training_Count += comunity_sum;

                                }                            //Abhishek2
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Training_tr += '<tr id="Training_TR' + i + '"><td> ' + z3 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Training(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Training_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Training(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //Abhishek2

                            else if (data[i].support_type == "Procurements Of Equipments") {

                                z4 = z4 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Procurement_Of_Equipments_Count += comunity_sum;


                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {


                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Procurements_Of_Equipments_tr += '<tr id="Procurements_Of_Equipments_TR' + i + '"><td> ' + z4 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Procurements_Of_Equipments(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Procurements_Of_Equipments_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Procurements_Of_Equipments(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }

                            //abhi282

                            else if (data[i].support_type == "IEC/Awareness") {
                                z5 = z5 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    IEC_Awareness_Count += comunity_sum;

                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {

                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" disabled class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" disabled class="form-control" id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    IEC_Awareness_tr += '<tr id="IEC_Awareness_TR' + i + '"><td> ' + z5 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].material_type + '</td> <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_IEC_Awareness(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_IEC_Awareness_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" disabled id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td> <td><input type="text" class="form-control" disabled id="material_type' + i + '" value="' + data[i].material_type + '"/></td> <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_IEC_Awareness(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                }

                            }
                            //abhi281

                            else if (data[i].support_type == "Other Key Activities") {
                                z6 = z6 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Other_Key_Activities_Count += comunity_sum;

                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Other_Key_Activities_tr += '<tr id="Other_Key_Activities_TR' + i + '"><td> ' + z6 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td>  <td>' + data[i].sub_support_type + '</td> <td>' + data[i].sub_data + '</td>  <td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Other_Key_Activities(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Other_Key_Activities_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td> <td><input type="text" class="form-control" id="Support_sub_support_type' + i + '" value="' + data[i].sub_support_type + '"/></td>  <td><input type="text" class="form-control" id="Support_sub_data' + i + '" value="' + data[i].sub_data + '"/></td>   <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Other_Key_Activities(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }

                            }
                            //abhi28

                            else if (data[i].support_type == "Social Outreach") {
                                z7 = z7 + 1;
                                if (data[i].support_item_procured != null && data[i].support_item_procured != "") {
                                    var comunity_sum = parseFloat(data[i].support_item_procured);
                                    Social_Outreach_Count += comunity_sum;
                                }
                                if (data[i].month_number == month_numbers && data[i].fyyear == fincalyear) {

                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if (dd <= fix_Date && data[i].month_number == month_numbers - 1 && data[i].fyyear == fincalyear) {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else if ((data[i].month_number == month_no1 || data[i].month_number == month_no2 || data[i].month_number == month_numbers) && Email == 'no-access' && data[i].fyyear == fincalyear) {
                                    Support_tr += '<tr id="Support_TR' + i + '"><td> ' + z + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn disable_ph_btn" onclick="editrowcomp_A_Support(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Support_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '" /></td > <td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '" /></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '" /></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                } else {
                                    Social_Outreach_tr += '<tr id="Social_Outreach_TR' + i + '"><td> ' + z7 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].support_year + '</td><td>' + data[i].support_month + '</td><td>' + data[i].support_name + '</td><td>' + data[i].support_description + '</td><td>' + data[i].support_item_code + '</td><td>' + data[i].support_targeted_number + '</td>' +
                                        '<td>' + data[i].support_item_procured + '</td>' +
                                        '<td>' + data[i].support_cumulative_total + '</td><td>' + data[i].support_remark + '</td>' +
                                        '<td><button class="btn btn-primary disable_ph_btn" onclick="editrowcomp_A_Social_Outreach(' + i + ')" disabled> <i class="fa fa-edit"></i></button ></td ><td><button class=" btn btn-danger disable_ph_btn" onclick="Delete_Support(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td></tr> ' +

                                        '<tr id="Hide_Social_Outreach_TR' + i + '" style="display:none;"><td> ' + z + '</td><td> <input type="text" class="form-control" id="Support_state_name' + i + '" disabled value="' + data[i].state_name + '" /></td><td> <input type="text" class="form-control" id="Support_support_year' + i + '" disabled value="' + data[i].support_year + '" /></td> <td><input type="text" class="form-control" id="Support_support_month' + i + '" value="' + data[i].support_month + '" disabled /></td><td><input type="text" class="form-control" id="Support_support_name' + i + '" disabled value="' + data[i].support_name + '"/></td><td><input type="text" class="form-control" id="Support_support_description' + i + '" value="' + data[i].support_description + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_item_code' + i + '" disabled value="' + data[i].support_item_code + '"/></td><td><input type="text" class="form-control" id="Support_support_targeted_number' + i + '" disabled value="' + data[i].support_targeted_number + '"/></td>' +
                                        '<td><input type="text" class="form-control decimal" id="Support_support_item_procured' + i + '" onkeypress="return /[0-9-.]/i.test(event.key)" onpaste="return false" maxlength="6" oninput="Sum_cumm2(' + data[i].event + ',' + i + ')" value="' + data[i].support_item_procured + '"/></td>' +
                                        '<td><input type="text" class="form-control" id="Support_support_cumulative_total' + i + '" value="' + data[i].support_cumulative_total + '" disabled/></td><td><input type="text" class="form-control" id="Support_support_remark' + i + '" value="' + data[i].support_remark + '"/></td><td><button type="button" class="btn btn-primary disable_ph_btn" onclick="Update_Support(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class=" btn btn-danger disable_ph_btn " type="button" onclick="cancelcomp_A_Social_Outreach(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                }

                            }

                        }

                    }
                }
            }


            $('#Support_Count').text(Support_Count.toFixed(2));
            $('#Goods_Count').text(Goods_Count.toFixed(2));
            $('#Work_Count').text(Work_Count.toFixed(2));
            $('#Training_Count').text(Training_Count.toFixed(2));

            $('#Procurements_Of_Equipments_Count').text(parseFloat(Procurement_Of_Equipments_Count).toFixed(2));  //Abhishek23
            $('#IEC_Awareness_Count').text(IEC_Awareness_Count.toFixed(2));                  //abhi282
            $('#Other_Key_Activities_Count').text(Other_Key_Activities_Count.toFixed(2));    //abhi281
            $('#Social_Outreach_Count').text(Social_Outreach_Count.toFixed(2));             //abhi28


            if (Support_tr == '') {
                Support_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Goods_tr == '') {
                Goods_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Work_tr == '') {
                Work_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            if (Training_tr == '') {
                Training_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }
            //Abhishek23
            if (Procurements_Of_Equipments_tr == '') {
                Procurements_Of_Equipments_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi282
            if (IEC_Awareness_tr == '') {
                IEC_Awareness_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi281
            if (Other_Key_Activities_tr == '') {
                Other_Key_Activities_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }

            //abhi28
            if (Social_Outreach_tr == '') {
                Social_Outreach_tr = '<tr colspan="12"><td colspan="12" style="text-align: center;">No Data</td></tr>';
            }


            $('#support_report').html(Support_tr);
            $('#goods_report').html(Goods_tr);
            $('#work_report').html(Work_tr);
            $('#training_report').html(Training_tr);
            $('#procurements_of_Equipments_report').html(Procurements_Of_Equipments_tr);//Abhishek23
            $('#iEC_awareness_report').html(IEC_Awareness_tr);                          //abhi282
            $('#other_key_activities_report').html(Other_Key_Activities_tr);            //abhi281
            $('#social_outreach_report').html(Social_Outreach_tr);                   //abhi28
            if (Email == 'vinodk02@gmail.com') {
                $('.disable_ph_btn').prop('disabled', false);
            } else if (Access_Auth == 'readonly') {
                $('.disable_ph_btn').prop('disabled', true);
            }

            //if (Email == 'shiknt.dhanoriya.wrd@mp.gov.in' && Fin_Year == '2023-24') {
            //    $('.disable_ph_btn').prop('disabled', false);
            //}
            //if (Email == 'abhy.maharashtra@gmail.com' && Fin_Year == '2023-24') {
            //    $('.disable_ph_btn').prop('disabled', false);
            //}
            //else {
            //    $('.disable_ph_btn').prop('disabled', true);
            //}
            //if (Email == 'wbataljal@gmail.com') {
            //    $('.disable_ph_btn').prop('disabled', true);
            //}
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

//function get_financial_year(year) {
//    
//    switch (year) {
//        case 2022:
//            year = "2022-23";
//            return year;
//            break;
//        case 2023:
//            year = "2023-24";
//            return year;
//            break;
//        case 2024:
//            year = "2024-25";
//            return year;
//            break;
//    }
//}
