var Main_Statename = "";


var PIP_Financial_Year = "";

var All_States = [];

var AWP_VS_Release_Expenditure_Financial_Year = "";
var Financial_Monitoring_Year_Wise_Finacial_Year = "";
var Year_Wise_Finacial_Year = "";
var Year_Wise_PhysicalMonitoring_Financial_Year = "";
function DropDownInfo1() {

    Main_Statename = "";
    $('#agency_state_dropdown_list').show();

    $('#Pip_vs_Expenditure_States_Dropdown').show();

    $('#Financial_Monitoring_States_Dropdown').show();

    $('#Physical_Monitoring_States_Dropdown').show();
    PIP_Financial_Year = "";
    AWP_VS_Release_Expenditure_Financial_Year = "";
    Financial_Monitoring_Year_Wise_Finacial_Year = "";
    Year_Wise_Finacial_Year = "";
    Year_Wise_PhysicalMonitoring_Financial_Year = "";
    Main_Statename = "ALL";

    States_Info();

    PIP_Info();
    PIP_VS_Expenditure_Chart_Info();
    AWP_VS_Release_Expenditure_ON_AWP_Info();
    Financial_Monitoring_A_Component_Second_module_Chart_Expenditure();

    Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building();

}

function States_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/PIP_Agency_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            var slection_options = '<option value="0">Select State</option>';

            if (data.length != 0) {
                slection_options += '<option value="ALL">ALL</option>';
                for (var i = 0; i < data.length; i++) {
                    if (data[i].observation_type == "pip") {
                        All_States.push(data[i].state_name);
                        slection_options += '<option value="' + data[i].state_name + '"> ' + data[i].state_name + ' </option>';
                    }

                }

                $('#Agency_State').html(slection_options);


            }
        }

    });
}

function StateWise_Info() {

    var Agency_State = $('#Agency_State').val();
    if (Agency_State != "0") {
        PIP_Financial_Year = "";
        $('#PIP_Financial_Year').val("0")
        Main_Statename = Agency_State;

        PIP_Info();
        PIP_VS_Expenditure_Chart_Info();
        AWP_VS_Release_Expenditure_ON_AWP_Info();
        Financial_Monitoring_A_Component_Second_module_Chart_Expenditure();

        Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building();

    }
    else {
        alert("Please Select StateName");
    }
}



//-------------- First Step Module--------

//---------------- Pip Chart's----
var A1 = 0;
var A2 = 0;
var A3 = 0;
var A4 = 0;
var A5 = 0;
var A6 = 0;

var B1 = 0;
var B2 = 0;
var B3 = 0;
var B4 = 0;
var B5 = 0;

function PIP_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/PIP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            A1 = 0;
            A2 = 0;
            A3 = 0;
            A4 = 0;
            A5 = 0;
            A6 = 0;


            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                        var Activity_Id = data[i].pip_activity_id;
                        var ss1 = Activity_Id.split('.');

                        if (ss1[0] == "A1") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A1 += parseFloat(yearss);
                        }

                        else if (ss1[0] == "A2") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A2 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A3") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A3 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A4") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A4 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A5") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A5 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A6") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A6 += parseFloat(yearss);
                        }

                    }



                }
            }

            var a1 = parseFloat(A1).toFixed(2);
            var a2 = parseFloat(A2).toFixed(2);
            var a3 = parseFloat(A3).toFixed(2);
            var a4 = parseFloat(A4).toFixed(2);
            var a5 = parseFloat(A5).toFixed(2);
            var a6 = parseFloat(A6).toFixed(2);

            A1 = 0;
            A2 = 0;
            A3 = 0;
            A4 = 0;
            A5 = 0;
            A6 = 0;

            A1 = parseFloat(a1);
            A2 = parseFloat(a2);
            A3 = parseFloat(a3);
            A4 = parseFloat(a4);
            A5 = parseFloat(a5);
            A6 = parseFloat(a6);

            var SUM = A1 + A2 + A3 + A4 + A5 + A6;
            $('#pip_A_charts').text(parseFloat(SUM).toFixed(2));
            PIP_B_Info();

        }

    });

}
function PIP_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/PIP_B_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            B1 = 0;
            B2 = 0;
            B3 = 0;
            B4 = 0;
            B5 = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var Activity_Id = data[i].pip_activity_id;

                    var ss = Activity_Id.split('.');

                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                        var Itemcode = data[i].pip_item_code;
                        var ss1 = Activity_Id.split('.');
                        if (ss1[0] == "B1") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B1 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B2") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B2 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B3") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B3 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B4") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B4 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B5") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B5 += parseFloat(yearss);
                        }

                    }

                }
            }

            var a1 = parseFloat(B1).toFixed(2);
            var a2 = parseFloat(B2).toFixed(2);
            var a3 = parseFloat(B3).toFixed(2);
            var a4 = parseFloat(B4).toFixed(2);
            var a5 = parseFloat(B5).toFixed(2);


            B1 = 0;
            B2 = 0;
            B3 = 0;
            B4 = 0;
            B5 = 0;


            B1 = parseFloat(a1);
            B2 = parseFloat(a2);
            B3 = parseFloat(a3);
            B4 = parseFloat(a4);
            B5 = parseFloat(a5);

            var SUM = B1 + B2 + B3 + B4 + B5;
            $('#pip_B_charts').text(parseFloat(SUM).toFixed(2));


            Pip_First_Module_Charts();

        }
    });
}
//---- End PIP Info Charts


//---------------- FInacial Year Wise Info PIP----------------------------

function Year_Wise_PIP_Info() {
    if (Main_Statename != "") {
        PIP_Financial_Year = $('#PIP_Financial_Year').val();
        if (PIP_Financial_Year != "0") {
            PIP_Finacial_Year_Wise_Info();

        }
        else {
            PIP_Financial_Year = "";
            alert("Please Select Financial Year");
        }
    } else {

        alert("Please Select StateName");
    }
}


function PIP_Finacial_Year_Wise_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/PIP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            A1 = 0;
            A2 = 0;
            A3 = 0;
            A4 = 0;
            A5 = 0;
            A6 = 0;


            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                        var Activity_Id = data[i].pip_activity_id;
                        var ss1 = Activity_Id.split('.');

                        if (ss1[0] == "A1") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A1 += parseFloat(yearss);
                        }

                        else if (ss1[0] == "A2") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A2 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A3") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A3 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A4") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A4 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A5") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A5 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "A6") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            A6 += parseFloat(yearss);
                        }

                    }



                }
            }
            var a1 = parseFloat(A1).toFixed(2);
            var a2 = parseFloat(A2).toFixed(2);
            var a3 = parseFloat(A3).toFixed(2);
            var a4 = parseFloat(A4).toFixed(2);
            var a5 = parseFloat(A5).toFixed(2);
            var a6 = parseFloat(A6).toFixed(2);

            A1 = 0;
            A2 = 0;
            A3 = 0;
            A4 = 0;
            A5 = 0;
            A6 = 0;

            A1 = parseFloat(a1);
            A2 = parseFloat(a2);
            A3 = parseFloat(a3);
            A4 = parseFloat(a4);
            A5 = parseFloat(a5);
            A6 = parseFloat(a6);
            var SUM = A1 + A2 + A3 + A4 + A5 + A6;
            $('#pip_A_charts').text(parseFloat(SUM).toFixed(2));
            PIP_Finacial_Year_Wise_B_Info();

        }

    });

}
function PIP_Finacial_Year_Wise_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/PIP_B_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            B1 = 0;
            B2 = 0;
            B3 = 0;
            B4 = 0;
            B5 = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var Activity_Id = data[i].pip_activity_id;

                    var ss = Activity_Id.split('.');

                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                        var Itemcode = data[i].pip_item_code;
                        var ss1 = Activity_Id.split('.');
                        if (ss1[0] == "B1") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B1 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B2") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B2 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B3") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B3 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B4") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B4 += parseFloat(yearss);
                        }
                        else if (ss1[0] == "B5") {
                            var yearss = data[i].pip_estimated_cost_for_five_years;
                            B5 += parseFloat(yearss);
                        }

                    }

                }
            }

            var a1 = parseFloat(B1).toFixed(2);
            var a2 = parseFloat(B2).toFixed(2);
            var a3 = parseFloat(B3).toFixed(2);
            var a4 = parseFloat(B4).toFixed(2);
            var a5 = parseFloat(B5).toFixed(2);


            B1 = 0;
            B2 = 0;
            B3 = 0;
            B4 = 0;
            B5 = 0;


            B1 = parseFloat(a1);
            B2 = parseFloat(a2);
            B3 = parseFloat(a3);
            B4 = parseFloat(a4);
            B5 = parseFloat(a5);


            var SUM = B1 + B2 + B3 + B4 + B5;
            $('#pip_B_charts').text(parseFloat(SUM).toFixed(2));
            Pip_First_Module_Charts();

        }
    });
}
// End----FInacial Year Wise Info PIP----------------------------


//---------------End- Pip First Module Charts Chart-------------------------------


//-------------------------------------PIP_VS_Expenditure Chart-----------------------------------------------------------------------------------------------------



var Pip_2020_2021 = 0;
var Pip_2021_2022 = 0;
var Pip_2022_2023 = 0;
var Pip_2023_2024 = 0;
var Pip_2024_2025 = 0;

var Pip_Expenditure_2020_2021 = 0;
var Pip_Expenditure_2021_2022 = 0;
var Pip_Expenditure_2022_2023 = 0;
var Pip_Expenditure_2023_2024 = 0;
var Pip_Expenditure_2024_2025 = 0;



function PIP_VS_Expenditure_Chart_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/PIP_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {



            Pip_2020_2021 = 0;
            Pip_2021_2022 = 0;
            Pip_2022_2023 = 0;
            Pip_2023_2024 = 0;
            Pip_2024_2025 = 0;

            Pip_Expenditure_2020_2021 = 0;
            Pip_Expenditure_2021_2022 = 0;
            Pip_Expenditure_2022_2023 = 0;
            Pip_Expenditure_2023_2024 = 0;
            Pip_Expenditure_2024_2025 = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    // PIP vs Expenditure chart code

                    if (data[i].pip_financial_year1_20_21 != null && data[i].pip_financial_year1_20_21 != "") {
                        Pip_2020_2021 = Pip_2020_2021 + parseFloat(data[i].pip_financial_year1_20_21);
                    }
                    if (data[i].pip_financial_year2_21_22 != null && data[i].pip_financial_year2_21_22 != "") {
                        Pip_2021_2022 = Pip_2021_2022 + parseFloat(data[i].pip_financial_year2_21_22);
                    }
                    if (data[i].pip_financial_year3_22_23 != null && data[i].pip_financial_year3_22_23 != "") {
                        Pip_2022_2023 = Pip_2022_2023 + parseFloat(data[i].pip_financial_year3_22_23);
                    }
                    if (data[i].pip_financial_year4_23_24 != null && data[i].pip_financial_year4_23_24 != "") {
                        Pip_2023_2024 = Pip_2023_2024 + parseFloat(data[i].pip_financial_year4_23_24);
                    }
                    if (data[i].pip_financial_year5_24_25 != null && data[i].pip_financial_year5_24_25 != "") {
                        Pip_2024_2025 = Pip_2024_2025 + parseFloat(data[i].pip_financial_year5_24_25);
                    }



                }
            }
            PIP_VS_Expenditure_Chart_Info1();

        }

    });

}

function PIP_VS_Expenditure_Chart_Info1() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/PIP_B_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {



            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    // PIP vs Expenditure chart code

                    if (data[i].pip_financial_year1_20_21 != null && data[i].pip_financial_year1_20_21 != "") {
                        Pip_2020_2021 = Pip_2020_2021 + parseFloat(data[i].pip_financial_year1_20_21);
                    }
                    if (data[i].pip_financial_year2_21_22 != null && data[i].pip_financial_year2_21_22 != "") {
                        Pip_2021_2022 = Pip_2021_2022 + parseFloat(data[i].pip_financial_year2_21_22);
                    }
                    if (data[i].pip_financial_year3_22_23 != null && data[i].pip_financial_year3_22_23 != "") {
                        Pip_2022_2023 = Pip_2022_2023 + parseFloat(data[i].pip_financial_year3_22_23);
                    }
                    if (data[i].pip_financial_year4_23_24 != null && data[i].pip_financial_year4_23_24 != "") {
                        Pip_2023_2024 = Pip_2023_2024 + parseFloat(data[i].pip_financial_year4_23_24);
                    }
                    if (data[i].pip_financial_year5_24_25 != null && data[i].pip_financial_year5_24_25 != "") {
                        Pip_2024_2025 = Pip_2024_2025 + parseFloat(data[i].pip_financial_year5_24_25);
                    }





                }
            }
            PIP_VS_Expenditure_B_Chart_Info();

        }

    });

}




function PIP_VS_Expenditure_B_Chart_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_A_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            Pip_Expenditure_2020_2021 = 0;
            Pip_Expenditure_2021_2022 = 0;
            Pip_Expenditure_2022_2023 = 0;
            Pip_Expenditure_2023_2024 = 0;
            Pip_Expenditure_2024_2025 = 0;
            if (data.length != 0) {




                for (var i = 0; i < data.length; i++) {
                    var P_20_21 = 0;
                    var P_21_22 = 0;
                    var P_22_23 = 0;
                    var P_23_24 = 0;
                    var P_24_25 = 0;
                    if (Main_Statename == "ALL") {


                        if (data[i].fin_year == "2020-21") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_20_21 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_year == "2021-22") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_21_22 = parseFloat(data[i].expenditure_made);
                            }
                        }

                        if (data[i].fin_year == "2022-23") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_22_23 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_year == "2023-24") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_23_24 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_year == "2024-25") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_24_25 = parseFloat(data[i].expenditure_made);
                            }
                        }


                    }

                    else if (Main_Statename == data[i].state_name) {
                        if (data[i].fin_year == "2020-21") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_20_21 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_year == "2021-22") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_21_22 = parseFloat(data[i].expenditure_made);
                            }
                        }

                        if (data[i].fin_year == "2022-23") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_22_23 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_year == "2023-24") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_23_24 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_year == "2024-25") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                P_24_25 = parseFloat(data[i].expenditure_made);
                            }
                        }
                    }

                    Pip_Expenditure_2020_2021 += P_20_21;
                    Pip_Expenditure_2021_2022 += P_21_22;
                    Pip_Expenditure_2022_2023 += P_22_23;
                    Pip_Expenditure_2023_2024 += P_23_24;
                    Pip_Expenditure_2024_2025 += P_24_25;

                }




            }


            PIP_VS_Expenditure_B_Chart_Info1();

        }
    });
}


function PIP_VS_Expenditure_B_Chart_Info1() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {




            if (data.length != 0) {


                for (var i = 0; i < data.length; i++) {
                    var Ex11 = 0;
                    var Ex12 = 0;
                    var Ex13 = 0;
                    var Ex14 = 0;
                    var Ex15 = 0;
                    if (Main_Statename == "ALL") {

                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex11 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex12 = parseFloat(data[i].expenditure_made);
                            }
                        }

                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex13 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex14 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex15 = parseFloat(data[i].expenditure_made);
                            }
                        }

                    }
                    else if (Main_Statename == data[i].state_name) {
                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex11 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex12 = parseFloat(data[i].expenditure_made);
                            }
                        }

                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex13 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex14 = parseFloat(data[i].expenditure_made);
                            }
                        }
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Ex15 = parseFloat(data[i].expenditure_made);
                            }
                        }
                    }

                    Pip_Expenditure_2020_2021 += Ex11;
                    Pip_Expenditure_2021_2022 += Ex12;
                    Pip_Expenditure_2022_2023 += Ex13;
                    Pip_Expenditure_2023_2024 += Ex14;
                    Pip_Expenditure_2024_2025 += Ex15;
                }





            }




            var Tr = '<tr><th> 2020-2021</th> <td>' + Pip_2020_2021.toFixed(2) + '</td><td>' + Pip_Expenditure_2020_2021.toFixed(2) + '</td></tr>' +
                '<tr><th>2021-2022</th><td>' + Pip_2021_2022.toFixed(2) + '</td><td>' + Pip_Expenditure_2021_2022.toFixed(2) + '</td></tr>' +
                '<tr><th>2022-2023</th><td>' + Pip_2022_2023.toFixed(2) + '</td><td>' + Pip_Expenditure_2022_2023.toFixed(2) + '</td></tr>' +
                '<tr><th>2023-2024</th><td>' + Pip_2023_2024.toFixed(2) + '</td><td>' + Pip_Expenditure_2023_2024.toFixed(2) + '</td></tr>' +
                '<tr><th>2024-2025</th> <td>' + Pip_2024_2025.toFixed(2) + '</td><td>' + Pip_Expenditure_2024_2025.toFixed(2) + '</td></tr>';
            $('#chart_PIP_VS_Expenditure').html('');
            $('#chart_PIP_VS_Expenditure').html(Tr);

            PIP_VS_Expenditure_Chart();

        }
    });
}




//-------------------------------------END-----PIP_VS_Expenditure Chart-----------------------------------------------------------------------------------------------------




//----------------AWP vs Release vs Expenditure  Chart-----------------------------------------------

function AWP_VS_Release_Expenditure_Info() {

    AWP_VS_Release_Expenditure_Financial_Year = $('#AWP_VS_Release_Expenditure_Financial_Year').val();
    Financial_Monitoring_Year_Wise_Finacial_Year = $('#AWP_VS_Release_Expenditure_Financial_Year').val();
    if (AWP_VS_Release_Expenditure_Financial_Year != "0") {

        AWP_VS_Release_Expenditure_ON_AWP_Info();
        Financial_Monitoring_States_Year_Wise_Finacial_Info();

    } else {
        alert("Please Select Finacial Year");
    }

}

function Financial_Monitoring_States_Year_Wise_Finacial_Info() {

    
    if (Main_Statename != "") {
        if (Financial_Monitoring_Year_Wise_Finacial_Year != "0") {
            Financial_Monitoring_A_Component_Second_module_Chart_Finacial_Year();
            Year_Wise_PhysicalMonitoring_Info();
        } else {
            alert("Please Select Finacial Year");
        }
    }
    else {
        alert("Please Select StateName");
    }
}
//------AWP Info---------

var Awp_Total_value = 0;
var Awp_Gujarat_Total = 0;
var Awp_Haryana_Total = 0;
var Awp_Karnayaka_Total = 0;
var Awp_Madhyapradesh_Total = 0;
var Awp_Rajasthan_Total = 0;
var Awp_UttaraPradesh_Total = 0;
var Awp_Maharashtra_Total = 0;


var Awp_Total_Expenditure = 0;
var Awp_Gujarat_Expenditure = 0;
var Awp_Haryana_Expenditure = 0;
var Awp_Karnayaka_Expenditure = 0;
var Awp_Madhyapradesh_Expenditure = 0;
var Awp_Rajasthan_Expenditure = 0;
var Awp_UttaraPradesh_Expenditure = 0;
var Awp_Maharashtra_Expenditure = 0;

var Awp_Total_Release = 0;
var Awp_Gujarat_Release = 0;
var Awp_Haryana_Release = 0;
var Awp_Karnayaka_Release = 0;
var Awp_Madhyapradesh_Release = 0;
var Awp_Rajasthan_Release = 0;
var Awp_UttaraPradesh_Release = 0;
var Awp_Maharashtra_Release = 0;


function AWP_VS_Release_Expenditure_ON_AWP_Info() {

    var Year = AWP_VS_Release_Expenditure_Financial_Year;

    var Finacial_Year = "";
    if (Year == "2020-2021") {
        Finacial_Year = "2020-21";

    }
    if (Year == "2021-2022") {
        Finacial_Year = "2021-22";

    }
    if (Year == "2022-2023") {
        Finacial_Year = "2022-23";

    }
    if (Year == "2023-2024") {
        Finacial_Year = "2023-24";

    }
    if (Year == "2024-2025") {
        Finacial_Year = "2024-25";

    }

    if (Year == "All 5 Years") {
        Finacial_Year = "";

    }
    if (typeof Year === 'undefined') {
        // color is undefined
        Year = "";
        Finacial_Year = "";
    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/AWP_Info',
        data: { 'FIN_Year': Finacial_Year, 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {



            // Annual AWP Vs Release Vs Expenditure

            Awp_Total_value = 0;
            Awp_Gujarat_Total = 0;
            Awp_Haryana_Total = 0;
            Awp_Karnayaka_Total = 0;
            Awp_Madhyapradesh_Total = 0;
            Awp_Rajasthan_Total = 0;
            Awp_UttaraPradesh_Total = 0;
            Awp_Maharashtra_Total = 0;

            if (data.length != 0) {
                var Year = AWP_VS_Release_Expenditure_Financial_Year;
                var Finacial_Year = "";
                if (Year == "2020-2021") {
                    Finacial_Year = "2020-21";

                }
                if (Year == "2021-2022") {
                    Finacial_Year = "2021-22";

                }
                if (Year == "2022-2023") {
                    Finacial_Year = "2022-23";

                }
                if (Year == "2023-2024") {
                    Finacial_Year = "2023-24";

                }
                if (Year == "2024-2025") {
                    Finacial_Year = "2024-25";

                }
                if (Year == "All 5 Years") {
                    Finacial_Year = "";
                }

                for (var i = 0; i < data.length; i++) {
                    var awp_financial_year_20_21 = 0;
                    if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {

                        awp_financial_year_20_21 = parseFloat(data[i].awp_financial_year_20_21);
                    }


                    if (Finacial_Year == "" && Main_Statename == "ALL") {

                        Awp_Total_value += parseFloat(awp_financial_year_20_21);
                        if (data[i].state_name == "Maharashtra") {
                            Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                        }

                        if (data[i].state_name == "Rajasthan") {
                            Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Uttar Pradesh") {
                            Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Gujarat") {
                            Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Haryana") {
                            Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Karnataka") {
                            Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Madhya Pradesh") {
                            Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                        }

                    }

                    else if (Finacial_Year != "" && Main_Statename != "") {
                        if (Main_Statename == "ALL" && data[i].awp_fin_year == Finacial_Year) {

                            Awp_Total_value += parseFloat(awp_financial_year_20_21);
                            if (data[i].state_name == "Maharashtra") {
                                Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                            }

                            if (data[i].state_name == "Rajasthan") {
                                Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Uttar Pradesh") {
                                Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Gujarat") {
                                Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Haryana") {
                                Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Karnataka") {
                                Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                            }


                        }
                        else if (data[i].state_name == Main_Statename && data[i].awp_fin_year == Finacial_Year) {

                            Awp_Total_value += parseFloat(awp_financial_year_20_21);
                            if (data[i].state_name == "Maharashtra") {
                                Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                            }

                            if (data[i].state_name == "Rajasthan") {
                                Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Uttar Pradesh") {
                                Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Gujarat") {
                                Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Haryana") {
                                Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Karnataka") {
                                Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                            }

                        }
                    }

                    else if (data[i].awp_fin_year == Finacial_Year) {

                        Awp_Total_value += parseFloat(awp_financial_year_20_21);
                        if (data[i].state_name == "Maharashtra") {
                            Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                        }

                        if (data[i].state_name == "Rajasthan") {
                            Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Uttar Pradesh") {
                            Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Gujarat") {
                            Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Haryana") {
                            Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Karnataka") {
                            Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Madhya Pradesh") {
                            Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                        }



                    }



                    // END ---Annual AWP Vs Release Vs Expenditure


                }


            }




            AWP_VS_Release_Expenditure_ON_AWP_B_Info();
        }

    });
}

function AWP_VS_Release_Expenditure_ON_AWP_B_Info() {
    var Year = AWP_VS_Release_Expenditure_Financial_Year;
    var Finacial_Year = "";
    if (Year == "2020-2021") {
        Finacial_Year = "2020-21";

    }
    if (Year == "2021-2022") {
        Finacial_Year = "2021-22";

    }
    if (Year == "2022-2023") {
        Finacial_Year = "2022-23";

    }
    if (Year == "2023-2024") {
        Finacial_Year = "2023-24";

    }
    if (Year == "2024-2025") {
        Finacial_Year = "2024-25";

    }
    if (Year == "All 5 Years") {
        Finacial_Year = "";

    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/AWP_B_Info',
        data: { 'FIN_Year': Finacial_Year, 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            if (data.length != 0) {
                var Year = AWP_VS_Release_Expenditure_Financial_Year;

                var Finacial_Year = "";
                if (Year == "2020-2021") {
                    Finacial_Year = "2020-21";

                }
                if (Year == "2021-2022") {
                    Finacial_Year = "2021-22";

                }
                if (Year == "2022-2023") {
                    Finacial_Year = "2022-23";

                }
                if (Year == "2023-2024") {
                    Finacial_Year = "2023-24";

                }
                if (Year == "2024-2025") {
                    Finacial_Year = "2024-25";

                }
                if (Year == "All 5 Years") {
                    Finacial_Year = "";
                }
                for (var i = 0; i < data.length; i++) {


                    var awp_financial_year_20_21 = 0;
                    if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {

                        awp_financial_year_20_21 = parseFloat(data[i].awp_financial_year_20_21);
                    }



                    if (Finacial_Year == "" && Main_Statename != "") {
                        if (Main_Statename == "ALL") {



                            Awp_Total_value += parseFloat(awp_financial_year_20_21);
                            if (data[i].state_name == "Maharashtra") {
                                Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                            }

                            if (data[i].state_name == "Rajasthan") {
                                Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Uttar Pradesh") {
                                Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Gujarat") {
                                Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Haryana") {
                                Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Karnataka") {
                                Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                            }

                        }
                        else if (data[i].state_name == Main_Statename) {

                            Awp_Total_value += parseFloat(awp_financial_year_20_21);
                            if (data[i].state_name == "Maharashtra") {
                                Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                            }

                            if (data[i].state_name == "Rajasthan") {
                                Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Uttar Pradesh") {
                                Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Gujarat") {
                                Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Haryana") {
                                Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Karnataka") {
                                Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                            }

                        }
                    }
                    else if (Finacial_Year != "" && Main_Statename != "") {
                        if (Main_Statename == "ALL" && data[i].awp_fin_year == Finacial_Year) {

                            Awp_Total_value += parseFloat(awp_financial_year_20_21);
                            if (data[i].state_name == "Maharashtra") {
                                Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                            }

                            if (data[i].state_name == "Rajasthan") {
                                Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Uttar Pradesh") {
                                Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Gujarat") {
                                Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Haryana") {
                                Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Karnataka") {
                                Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                            }


                        }
                        else if (data[i].state_name == Main_Statename && data[i].awp_fin_year == Finacial_Year) {

                            Awp_Total_value += parseFloat(awp_financial_year_20_21);
                            if (data[i].state_name == "Maharashtra") {
                                Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                            }

                            if (data[i].state_name == "Rajasthan") {
                                Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Uttar Pradesh") {
                                Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Gujarat") {
                                Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Haryana") {
                                Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Karnataka") {
                                Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                            }

                        }
                    }
                    else if (data[i].awp_fin_year == Finacial_Year) {

                        Awp_Total_value = parseFloat(awp_financial_year_20_21);
                        if (data[i].state_name == "Maharashtra") {
                            Awp_Maharashtra_Total += parseFloat(awp_financial_year_20_21);

                        }

                        if (data[i].state_name == "Rajasthan") {
                            Awp_Rajasthan_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Uttar Pradesh") {
                            Awp_UttaraPradesh_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Gujarat") {
                            Awp_Gujarat_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Haryana") {
                            Awp_Haryana_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Karnataka") {
                            Awp_Karnayaka_Total += parseFloat(awp_financial_year_20_21);

                        }
                        if (data[i].state_name == "Madhya Pradesh") {
                            Awp_Madhyapradesh_Total += parseFloat(awp_financial_year_20_21);

                        }



                    }


                    // END ---Annual AWP Vs Release Vs Expenditure


                }




            }


            AWP_VS_Release_Expenditure_ON_Financial_Monitoring_A_Component_Table_Info();

        }
    });
}

//----- AWP End-----------------------
//-----------------Financial Monitoring --------------

function AWP_VS_Release_Expenditure_ON_Financial_Monitoring_A_Component_Table_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_A_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            Awp_Total_Expenditure = 0;
            Awp_Gujarat_Expenditure = 0;
            Awp_Haryana_Expenditure = 0;
            Awp_Karnayaka_Expenditure = 0;
            Awp_Madhyapradesh_Expenditure = 0;
            Awp_Rajasthan_Expenditure = 0;
            Awp_UttaraPradesh_Expenditure = 0;
            Awp_Maharashtra_Expenditure = 0;




            var Year = AWP_VS_Release_Expenditure_Financial_Year;
            if (Year == "All 5 Years") {
                AWP_VS_Release_Expenditure_Financial_Year = "";
            }
            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    var Awp_Total_Expenditure1 = 0;
                    var Awp_Gujarat_Expenditure1 = 0;
                    var Awp_Haryana_Expenditure1 = 0;
                    var Awp_Karnayaka_Expenditure1 = 0;
                    var Awp_Madhyapradesh_Expenditure1 = 0;
                    var Awp_Rajasthan_Expenditure1 = 0;
                    var Awp_UttaraPradesh_Expenditure1 = 0;
                    var Awp_Maharashtra_Expenditure1 = 0;
                    // Annual AWP Vs Release Vs Expenditure


                    if (Main_Statename != "" && AWP_VS_Release_Expenditure_Financial_Year == "") {
                        if (Main_Statename == "ALL") {

                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                if (data[i].state_name == "Maharashtra") {
                                    Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Rajasthan") {
                                    Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Uttar Pradesh") {
                                    Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Gujarat") {
                                    Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Haryana") {
                                    Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Karnataka") {
                                    Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Madhya Pradesh") {
                                    Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                            }

                        }
                        else if (data[i].state_name == Main_Statename) {

                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                if (data[i].state_name == "Maharashtra") {
                                    Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Rajasthan") {
                                    Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Uttar Pradesh") {
                                    Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Gujarat") {
                                    Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Haryana") {
                                    Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Karnataka") {
                                    Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Madhya Pradesh") {
                                    Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                            }

                        }
                    }
                    else if (Main_Statename != "" && AWP_VS_Release_Expenditure_Financial_Year != "") {
                        if (Main_Statename == "ALL" && AWP_VS_Release_Expenditure_Financial_Year != "") {
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2020-2021") {

                                if (data[i].fin_year == "2020-21") {


                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }


                            if (AWP_VS_Release_Expenditure_Financial_Year == "2021-2022") {

                                if (data[i].fin_year == "2021-22") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }


                            if (AWP_VS_Release_Expenditure_Financial_Year == "2022-2023") {

                                if (data[i].fin_year == "2022-23") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }

                            if (AWP_VS_Release_Expenditure_Financial_Year == "2023-2024") {

                                if (data[i].fin_year == "2023-24") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }


                            if (AWP_VS_Release_Expenditure_Financial_Year == "2024-2025") {

                                if (data[i].fin_year == "2024-25") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }

                        }
                        else if (data[i].state_name == Main_Statename) {

                            if (AWP_VS_Release_Expenditure_Financial_Year == "2020-2021") {

                                if (data[i].fin_year == "2020-21") {


                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }


                            if (AWP_VS_Release_Expenditure_Financial_Year == "2021-2022") {

                                if (data[i].fin_year == "2021-22") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }


                            if (AWP_VS_Release_Expenditure_Financial_Year == "2022-2023") {

                                if (data[i].fin_year == "2022-23") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }

                            if (AWP_VS_Release_Expenditure_Financial_Year == "2023-2024") {

                                if (data[i].fin_year == "2023-24") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }


                            if (AWP_VS_Release_Expenditure_Financial_Year == "2024-2025") {

                                if (data[i].fin_year == "2024-25") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }

                                }

                            }

                        }
                    }

                    else if (AWP_VS_Release_Expenditure_Financial_Year != "") {

                        if (AWP_VS_Release_Expenditure_Financial_Year == "2020-2021") {

                            if (data[i].fin_year == "2020-21") {


                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }

                            }

                        }


                        if (AWP_VS_Release_Expenditure_Financial_Year == "2021-2022") {

                            if (data[i].fin_year == "2021-22") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }

                            }

                        }


                        if (AWP_VS_Release_Expenditure_Financial_Year == "2022-2023") {

                            if (data[i].fin_year == "2022-23") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }

                            }

                        }

                        if (AWP_VS_Release_Expenditure_Financial_Year == "2023-2024") {

                            if (data[i].fin_year == "2023-24") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }

                            }

                        }


                        if (AWP_VS_Release_Expenditure_Financial_Year == "2024-2025") {

                            if (data[i].fin_year == "2024-25") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }

                            }

                        }

                    }





                    // END ---Annual AWP Vs Release Vs Expenditure
                    Awp_Total_Expenditure += Awp_Total_Expenditure1;
                    Awp_Gujarat_Expenditure += Awp_Gujarat_Expenditure1;
                    Awp_Haryana_Expenditure += Awp_Haryana_Expenditure1;
                    Awp_Karnayaka_Expenditure += Awp_Karnayaka_Expenditure1;
                    Awp_Madhyapradesh_Expenditure += Awp_Madhyapradesh_Expenditure1;
                    Awp_Rajasthan_Expenditure += Awp_Rajasthan_Expenditure1;
                    Awp_UttaraPradesh_Expenditure += Awp_UttaraPradesh_Expenditure1;
                    Awp_Maharashtra_Expenditure += Awp_Maharashtra_Expenditure1;





                }

            }

            AWP_VS_Release_Expenditure_ON_Financial_Monitoring_B_Component_Table_Info();
        }
    });
}



function AWP_VS_Release_Expenditure_ON_Financial_Monitoring_B_Component_Table_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            var Year = AWP_VS_Release_Expenditure_Financial_Year;
            if (Year == "All 5 Years") {
                AWP_VS_Release_Expenditure_Financial_Year = "";
            }

            if (data.length != 0) {




                for (var i = 0; i < data.length; i++) {
                    // Annual AWP Vs Release Vs Expenditure

                    var Awp_Total_Expenditure1 = 0;
                    var Awp_Gujarat_Expenditure1 = 0;
                    var Awp_Haryana_Expenditure1 = 0;
                    var Awp_Karnayaka_Expenditure1 = 0;
                    var Awp_Madhyapradesh_Expenditure1 = 0;
                    var Awp_Rajasthan_Expenditure1 = 0;
                    var Awp_UttaraPradesh_Expenditure1 = 0;
                    var Awp_Maharashtra_Expenditure1 = 0;

                    if (Main_Statename != "" && AWP_VS_Release_Expenditure_Financial_Year == "") {
                        if (Main_Statename == "ALL") {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                if (data[i].state_name == "Maharashtra") {
                                    Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Rajasthan") {
                                    Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Uttar Pradesh") {
                                    Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Gujarat") {
                                    Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Haryana") {
                                    Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Karnataka") {
                                    Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Madhya Pradesh") {
                                    Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                            }

                        }
                        else if (Main_Statename == data[i].state_name) {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                if (data[i].state_name == "Maharashtra") {
                                    Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Rajasthan") {
                                    Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Uttar Pradesh") {
                                    Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Gujarat") {
                                    Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Haryana") {
                                    Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Karnataka") {
                                    Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                                if (data[i].state_name == "Madhya Pradesh") {
                                    Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                }
                            }
                        }

                    }

                    else if (Main_Statename != "" && AWP_VS_Release_Expenditure_Financial_Year != "") {
                        if (Main_Statename == "ALL") {
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2020-2021") {
                                if (data[i].fin_b_year == "2020-21") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2021-2022") {
                                if (data[i].fin_b_year == "2021-22") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2022-2023") {
                                if (data[i].fin_b_year == "2022-23") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2023-2024") {
                                if (data[i].fin_b_year == "2023-24") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2024-2025") {
                                if (data[i].fin_b_year == "2024-25") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }

                        }
                        else if (Main_Statename == data[i].state_name) {
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2020-2021") {
                                if (data[i].fin_b_year == "2020-21") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2021-2022") {
                                if (data[i].fin_b_year == "2021-22") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2022-2023") {
                                if (data[i].fin_b_year == "2022-23") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2023-2024") {
                                if (data[i].fin_b_year == "2023-24") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }
                            if (AWP_VS_Release_Expenditure_Financial_Year == "2024-2025") {
                                if (data[i].fin_b_year == "2024-25") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        if (data[i].state_name == "Maharashtra") {
                                            Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Rajasthan") {
                                            Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Uttar Pradesh") {
                                            Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Gujarat") {
                                            Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Haryana") {
                                            Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Karnataka") {
                                            Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                        if (data[i].state_name == "Madhya Pradesh") {
                                            Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                        }
                                    }
                                }
                            }

                        }

                    }
                    else if (AWP_VS_Release_Expenditure_Financial_Year != "") {
                        if (AWP_VS_Release_Expenditure_Financial_Year == "2020-2021") {
                            if (data[i].fin_b_year == "2020-21") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }
                            }
                        }
                        if (AWP_VS_Release_Expenditure_Financial_Year == "2021-2022") {
                            if (data[i].fin_b_year == "2021-22") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }
                            }
                        }
                        if (AWP_VS_Release_Expenditure_Financial_Year == "2022-2023") {
                            if (data[i].fin_b_year == "2022-23") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }
                            }
                        }
                        if (AWP_VS_Release_Expenditure_Financial_Year == "2023-2024") {
                            if (data[i].fin_b_year == "2023-24") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }
                            }
                        }
                        if (AWP_VS_Release_Expenditure_Financial_Year == "2024-2025") {
                            if (data[i].fin_b_year == "2024-25") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    Awp_Total_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    if (data[i].state_name == "Maharashtra") {
                                        Awp_Maharashtra_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Rajasthan") {
                                        Awp_Rajasthan_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Uttar Pradesh") {
                                        Awp_UttaraPradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Gujarat") {
                                        Awp_Gujarat_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Haryana") {
                                        Awp_Haryana_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Karnataka") {
                                        Awp_Karnayaka_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                    if (data[i].state_name == "Madhya Pradesh") {
                                        Awp_Madhyapradesh_Expenditure1 = parseFloat(data[i].expenditure_made);

                                    }
                                }
                            }
                        }

                    }



                    Awp_Total_Expenditure += Awp_Total_Expenditure1;
                    Awp_Gujarat_Expenditure += Awp_Gujarat_Expenditure1;
                    Awp_Haryana_Expenditure += Awp_Haryana_Expenditure1;
                    Awp_Karnayaka_Expenditure += Awp_Karnayaka_Expenditure1;
                    Awp_Madhyapradesh_Expenditure += Awp_Madhyapradesh_Expenditure1;
                    Awp_Rajasthan_Expenditure += Awp_Rajasthan_Expenditure1;
                    Awp_UttaraPradesh_Expenditure += Awp_UttaraPradesh_Expenditure1;
                    Awp_Maharashtra_Expenditure += Awp_Maharashtra_Expenditure1;
                    // END ---Annual AWP Vs Release Vs Expenditure
                }


            }
            AWP_VS_Release_Expenditure_ON_Get_Fund_Release_Info();

        }
    });
}


//---------END--------Financial Monitoring End


// ---------------- Release monitoring-----
function AWP_VS_Release_Expenditure_ON_Get_Fund_Release_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/Get_Fund_Form_Info',
        data: { 'FIN_Year': AWP_VS_Release_Expenditure_Financial_Year, 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            Awp_Total_Release = 0;
            Awp_Gujarat_Release = 0;
            Awp_Haryana_Release = 0;
            Awp_Karnayaka_Release = 0;
            Awp_Madhyapradesh_Release = 0;
            Awp_Rajasthan_Release = 0;
            Awp_UttaraPradesh_Release = 0;
            Awp_Maharashtra_Release = 0;
            if (data.length != 0) {


                for (var i = 0; i < data.length; i++) {
                    var Awp_Total_Release1 = 0;
                    var Awp_Gujarat_Release1 = 0;
                    var Awp_Haryana_Release1 = 0;
                    var Awp_Karnayaka_Release1 = 0;
                    var Awp_Madhyapradesh_Release1 = 0;
                    var Awp_Rajasthan_Release1 = 0;
                    var Awp_UttaraPradesh_Release1 = 0;
                    var Awp_Maharashtra_Release1 = 0;



                    if (Main_Statename == "ALL" && AWP_VS_Release_Expenditure_Financial_Year == "") {

                        if (data[i].state_name == "Maharashtra") {
                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                Awp_Maharashtra_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_Maharashtra_Release1;
                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                Awp_Maharashtra_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_Maharashtra_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                Awp_Maharashtra_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_Maharashtra_Release1;
                            }

                        }
                        if (data[i].state_name == "Rajasthan") {
                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                Awp_Rajasthan_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_Rajasthan_Release1;

                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                Awp_Rajasthan_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_Rajasthan_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                Awp_Rajasthan_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_Rajasthan_Release1;
                            }

                        }
                        if (data[i].state_name == "Uttar Pradesh") {

                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                            }

                        }
                        if (data[i].state_name == "Gujarat") {
                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                Awp_Gujarat_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_Gujarat_Release1;
                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                Awp_Gujarat_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_Gujarat_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                Awp_Gujarat_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_Gujarat_Release1;
                            }

                        }
                        if (data[i].state_name == "Haryana") {
                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                Awp_Haryana_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_Haryana_Release1;
                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                Awp_Haryana_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_Haryana_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                Awp_Haryana_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_Haryana_Release1;
                            }

                        }
                        if (data[i].state_name == "Karnataka") {
                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                Awp_Karnayaka_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_Karnayaka_Release1;
                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                Awp_Karnayaka_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_Karnayaka_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                Awp_Karnayaka_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_Karnayaka_Release1;
                            }

                        }
                        if (data[i].state_name == "Madhya Pradesh") {
                            if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                            }
                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                            }
                            if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                            }

                        }


                    }
                    else if (Main_Statename != "ALL" && AWP_VS_Release_Expenditure_Financial_Year != "") {
                        if (data[i].fund_year == AWP_VS_Release_Expenditure_Financial_Year) {
                            if (data[i].state_name != null && data[i].state_name != "") {


                                if (data[i].state_name == "Maharashtra" && Main_Statename == data[i].state_name) {
                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                        Awp_Maharashtra_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_Maharashtra_Release1;
                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                        Awp_Maharashtra_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_Maharashtra_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                        Awp_Maharashtra_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_Maharashtra_Release1;
                                    }

                                }
                                if (data[i].state_name == "Rajasthan" && Main_Statename == data[i].state_name) {
                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                        Awp_Rajasthan_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_Rajasthan_Release1;

                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                        Awp_Rajasthan_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_Rajasthan_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                        Awp_Rajasthan_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_Rajasthan_Release1;
                                    }

                                }
                                if (data[i].state_name == "Uttar Pradesh" && Main_Statename == data[i].state_name) {

                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                        Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                        Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                        Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                                    }

                                }
                                if (data[i].state_name == "Gujarat" && Main_Statename == data[i].state_name) {
                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                        Awp_Gujarat_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_Gujarat_Release1;
                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                        Awp_Gujarat_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_Gujarat_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                        Awp_Gujarat_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_Gujarat_Release1;
                                    }

                                }
                                if (data[i].state_name == "Haryana" && Main_Statename == data[i].state_name) {
                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                        Awp_Haryana_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_Haryana_Release1;
                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                        Awp_Haryana_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_Haryana_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                        Awp_Haryana_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_Haryana_Release1;
                                    }

                                }
                                if (data[i].state_name == "Karnataka" && Main_Statename == data[i].state_name) {
                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                        Awp_Karnayaka_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_Karnayaka_Release1;
                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                        Awp_Karnayaka_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_Karnayaka_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                        Awp_Karnayaka_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_Karnayaka_Release1;
                                    }

                                }
                                if (data[i].state_name == "Madhya Pradesh" && Main_Statename == data[i].state_name) {
                                    if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                        Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                        Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                                    }
                                    if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                        Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                        Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                                    }
                                    if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                        Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                        Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                                    }

                                }


                            }
                        }
                    }
                    else if (Main_Statename == "ALL" && AWP_VS_Release_Expenditure_Financial_Year != "") {
                        if (data[i].fund_year == AWP_VS_Release_Expenditure_Financial_Year) {

                            if (data[i].state_name == "Maharashtra") {
                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                    Awp_Maharashtra_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_Maharashtra_Release1;
                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Awp_Maharashtra_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_Maharashtra_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                    Awp_Maharashtra_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_Maharashtra_Release1;
                                }

                            }
                            if (data[i].state_name == "Rajasthan") {
                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                    Awp_Rajasthan_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_Rajasthan_Release1;

                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                    Awp_Rajasthan_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_Rajasthan_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                    Awp_Rajasthan_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_Rajasthan_Release1;
                                }

                            }
                            if (data[i].state_name == "Uttar Pradesh") {

                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                    Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                    Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                    Awp_UttaraPradesh_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_UttaraPradesh_Release1;
                                }

                            }
                            if (data[i].state_name == "Gujarat") {
                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                    Awp_Gujarat_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_Gujarat_Release1;
                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                    Awp_Gujarat_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_Gujarat_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                    Awp_Gujarat_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_Gujarat_Release1;
                                }

                            }
                            if (data[i].state_name == "Haryana") {
                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                    Awp_Haryana_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_Haryana_Release1;
                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                    Awp_Haryana_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_Haryana_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                    Awp_Haryana_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_Haryana_Release1;
                                }

                            }
                            if (data[i].state_name == "Karnataka") {
                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                    Awp_Karnayaka_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_Karnayaka_Release1;
                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                    Awp_Karnayaka_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_Karnayaka_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                    Awp_Karnayaka_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_Karnayaka_Release1;
                                }

                            }
                            if (data[i].state_name == "Madhya Pradesh") {
                                if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {

                                    Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_grant_aid_a_total);
                                    Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                                }
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {

                                    Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_general_aid_b_value);
                                    Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                                }
                                if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {

                                    Awp_Madhyapradesh_Release1 += parseFloat(data[i].fund_capital_aid_b_value);
                                    Awp_Total_Release1 += Awp_Madhyapradesh_Release1;
                                }

                            }

                        }
                    }



                    var Total = Awp_Gujarat_Release1 + Awp_Haryana_Release1 + Awp_Karnayaka_Release1 + Awp_Madhyapradesh_Release1 + Awp_Rajasthan_Release1 + Awp_UttaraPradesh_Release1 + Awp_Maharashtra_Release1;
                    Awp_Total_Release += Total;
                    Awp_Gujarat_Release += Awp_Gujarat_Release1;
                    Awp_Haryana_Release += Awp_Haryana_Release1;
                    Awp_Karnayaka_Release += Awp_Karnayaka_Release1;
                    Awp_Madhyapradesh_Release += Awp_Madhyapradesh_Release1;
                    Awp_Rajasthan_Release += Awp_Rajasthan_Release1;
                    Awp_UttaraPradesh_Release += Awp_UttaraPradesh_Release1;
                    Awp_Maharashtra_Release += Awp_Maharashtra_Release1;

                }



            }


            var Tr = '<tr><th> Total</th><td>' + Awp_Total_value.toFixed(2) + '</td><td>' + Awp_Total_Release.toFixed(2) + '</td><td>' + Awp_Total_Expenditure.toFixed(2) + '</td></tr><tr><th> Gujarat</th><td>' + Awp_Gujarat_Total.toFixed(2) + '</td><td>' + Awp_Gujarat_Release.toFixed(2) + '</td><td>' + Awp_Gujarat_Expenditure.toFixed(2) + '</td></tr><tr><th>Haryana</th><td>' + Awp_Haryana_Total.toFixed(2) + '</td>' +
                '<td>' + Awp_Haryana_Release.toFixed(2) + '</td><td>' + Awp_Haryana_Expenditure + '</td></tr><tr><th>Karnataka</th><td>' + Awp_Karnayaka_Total.toFixed(2) + '</td><td>' + Awp_Karnayaka_Release.toFixed(2) + '</td><td>' + Awp_Karnayaka_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Maharashtra</th><td>' + Awp_Maharashtra_Total.toFixed(2) + '</td><td>' + Awp_Maharashtra_Release.toFixed(2) + '</td><td>' + Awp_Maharashtra_Expenditure.toFixed(2) + '</td></tr><tr><th>MP</th><td>' + Awp_Madhyapradesh_Total.toFixed(2) + '</td>' +
                '<td>' + Awp_Madhyapradesh_Release.toFixed(2) + '</td><td>' + Awp_Madhyapradesh_Expenditure.toFixed(2) + '</td></tr><tr><th>Rajashthan</th><td>' + Awp_Rajasthan_Total.toFixed(2) + '</td><td>' + Awp_Rajasthan_Release.toFixed(2) + '</td><td>' + Awp_Rajasthan_Expenditure.toFixed(2) + '</td></tr>' +
                '<th>UP</th><td>' + Awp_UttaraPradesh_Total.toFixed(2) + '</td><td>' + Awp_UttaraPradesh_Release.toFixed(2) + '</td><td>' + Awp_UttaraPradesh_Expenditure.toFixed(2) + '</td></tr>';
            $('#AWP_vs_Release_vs_Expenditure').html(Tr);



            AWP_vs_Release_vs_Expenditure_Chart();


        }
    });
}
// -----------END----- Release monitoring-----

//----------END------AWP vs Release vs Expenditure  Chart------------------------------------------



// -----------------------Financial Progress Monitoring   Charts-----------------------


//-----------------Financial Monitoring --------------

var Support_Financial_Total = 0;
var Goods_Financial_Total = 0;
var Work_Financial_Total = 0;
var Training_Financial_Total = 0;

var Support_Financial_Target = 0;
var Goods_Financial_Target = 0;
var Work_Financial_Target = 0;
var Training_Financial_Target = 0;

var Support_Financial_Expenditure = 0;
var Goods_Financial_Expenditure = 0;
var Work_Financial_Expenditure = 0;
var Training_Financial_Expenditure = 0;


function Financial_Monitoring_A_Component_Second_module_Chart_Expenditure() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/php_and_fn_Info_A_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {



            Support_Financial_Total = 0;
            Goods_Financial_Total = 0;
            Work_Financial_Total = 0;
            Training_Financial_Total = 0;



            Support_Financial_Expenditure = 0;
            Goods_Financial_Expenditure = 0;
            Work_Financial_Expenditure = 0;
            Training_Financial_Expenditure = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    if (Main_Statename == "ALL") {
                        if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                            if (data[i].category_of_procurement == "Support Service") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Support_Financial_Expenditure += SS;

                                }
                            }
                            if (data[i].category_of_procurement == "Goods") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Goods_Financial_Expenditure += SS;

                                }
                            }
                            if (data[i].category_of_procurement == "Works") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Work_Financial_Expenditure += SS;

                                }
                            }
                            if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Training_Financial_Expenditure += SS;

                                }
                            }

                        }
                    }
                    else {
                        if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                            if (data[i].category_of_procurement == "Support Service") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Support_Financial_Expenditure += SS;

                                }
                            }
                            if (data[i].category_of_procurement == "Goods") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Goods_Financial_Expenditure += SS;

                                }
                            }
                            if (data[i].category_of_procurement == "Works") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Work_Financial_Expenditure += SS;

                                }
                            }
                            if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Training_Financial_Expenditure += SS;

                                }
                            }

                        }
                    }





                }
            }

            Financial_Monitoring_A_Component_Second_module_Chart();
        }
    });
}

function Financial_Monitoring_A_Component_Second_module_Chart() {

    var year = '';
    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2020-2021") {
        year = "2020-21";
    }
    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2021-2022") {
        year = "2021-22";
    }
    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2022-2023") {
        year = "2022-23";

    }
    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2023-2024") {
        year = "2023-24";

    }
    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2024-2025") {
        year = "2024-25";

    }

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/AWP_Info',
        data: { 'StateName': Main_Statename, 'FIN_Year': year },
        dataType: 'JSON',
        success: function (data) {



            Support_Financial_Total = 0;
            Goods_Financial_Total = 0;
            Work_Financial_Total = 0;
            Training_Financial_Total = 0;

            Support_Financial_Target = 0;
            Goods_Financial_Target = 0;
            Work_Financial_Target = 0;
            Training_Financial_Target = 0;




            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {


                    if (data[i].awp_category != null && data[i].awp_category != "0") {
                        if (data[i].awp_category == "Support Service") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                var SS = parseFloat(data[i].awp_financial_year_20_21);
                                Support_Financial_Target += SS;

                            }
                        }
                        if (data[i].awp_category == "Goods") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                var SS = parseFloat(data[i].awp_financial_year_20_21);
                                Goods_Financial_Target += SS;

                            }
                        }
                        if (data[i].awp_category == "Works") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                var SS = parseFloat(data[i].awp_financial_year_20_21);
                                Work_Financial_Target += SS;

                            }
                        }
                        if (data[i].awp_category == "Training/ IEC/OE") {
                            if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                var SS = parseFloat(data[i].awp_financial_year_20_21);
                                Training_Financial_Target += SS;

                            }
                        }

                    }

                    Support_Financial_Total = Support_Financial_Target + Support_Financial_Expenditure;
                    Goods_Financial_Total = Goods_Financial_Target + Goods_Financial_Expenditure;
                    Work_Financial_Total = Work_Financial_Target + Work_Financial_Expenditure;
                    Training_Financial_Total = Training_Financial_Target + Training_Financial_Expenditure;


                }
            }


            $('#Financial_Progress_Monitoring_Component_A_Institutional_strengthening_Capacity_Building').html("");
            if (Financial_Monitoring_Year_Wise_Finacial_Year == "") {

                var Tr = '<tr><th>Support</th><td>' + Support_Financial_Target.toFixed(2) + '</td><td>' + Support_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                    '<tr><th>Goods</th><td>' + Goods_Financial_Target.toFixed(2) + '</td><td>' + Goods_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                    '<tr><th>Works</th><td>' + Work_Financial_Target.toFixed(2) + '</td><td>' + Work_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                    '<tr><th>Training</th><td>' + Training_Financial_Target.toFixed(2) + '</td><td>' + Training_Financial_Expenditure.toFixed(2) + '</td></tr>';
                $('#Financial_Progress_Monitoring_Component_A_Institutional_strengthening_Capacity_Building').html(Tr);

                Financial_Monitoring_B_Component_Second_module_Chart();
            }



        }
    });
}


var Release_DLI1_Total = 0;
var Release_DLI2_Total = 0;
var Release_DLI3_Total = 0;
var Release_DLI4_Total = 0;
var Release_DLI5_Total = 0;


var Expenditure_DLI1_Total = 0;
var Expenditure_DLI2_Total = 0;
var Expenditure_DLI3_Total = 0;
var Expenditure_DLI4_Total = 0;
var Expenditure_DLI5_Total = 0;

function Financial_Monitoring_B_Component_Second_module_Chart() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/php_and_fn_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            



            Expenditure_DLI1_Total = 0;
            Expenditure_DLI2_Total = 0;
            Expenditure_DLI3_Total = 0;
            Expenditure_DLI4_Total = 0;
            Expenditure_DLI5_Total = 0;


            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                        if (Main_Statename == "ALL") {

                            if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }
                            else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }
                            else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }
                            else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }

                            if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI2_Total += SS;
                                }
                            }

                            if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI3_Total += SS;
                                }
                            }

                            if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI4_Total += SS;
                                }
                            }
                            if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI5_Total += SS;
                                }
                            }


                        }
                        else {
                            if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }
                            else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }
                            else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }
                            else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI1_Total += SS;

                                }

                            }

                            if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI2_Total += SS;
                                }
                            }

                            if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI3_Total += SS;
                                }
                            }

                            if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI4_Total += SS;
                                }
                            }
                            if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    var SS = parseFloat(data[i].expenditure_made);
                                    Expenditure_DLI5_Total += SS;
                                }
                            }


                        }



                    }

                }
            }
            $('#Financial_Progress_Monitoring_of_Component_B_Incentive_B').html("");

            var Tr = '<tr><th>DLI1</th><td>' + Expenditure_DLI1_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI2</th><td>' + Expenditure_DLI2_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI3</th><td>' + Expenditure_DLI3_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI4</th><td>' + Expenditure_DLI4_Total.toFixed(2) + '</td></tr>' +
                '<tr> <th>DLI5</th><td>' + Expenditure_DLI5_Total.toFixed(2) + '</td></tr>';

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive').html(Tr);

            Financial_Monitoring_B_Component_Second_module_Chart_Release();

        }
    });
}

function Financial_Monitoring_B_Component_Second_module_Chart_Release() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/Get_Fund_Form_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            Release_DLI1_Total = 0;
            Release_DLI2_Total = 0;
            Release_DLI3_Total = 0;
            Release_DLI4_Total = 0;
            Release_DLI5_Total = 0;
            $('#Financial_Progress_Monitoring_of_Component_B_Incentive').html("");
            if (data.length != 0) {


                for (var i = 0; i < data.length; i++) {


                    if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                        if (data[i].fund_grant_aid_general_b == "DLI1") {

                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                            }

                        }
                        if (data[i].fund_grant_aid_general_b == "DLI2") {

                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                            }

                        }
                        if (data[i].fund_grant_aid_general_b == "DLI3") {

                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                            }

                        }
                        if (data[i].fund_grant_aid_general_b == "DLI4") {

                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                            }

                        }
                        if (data[i].fund_grant_aid_general_b == "DLI5") {

                            if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                            }

                        }

                    }

                }
            }


            var Tr1 = '<tr><th>DLI1</th><td>' + Release_DLI1_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI2</th><td>' + Release_DLI2_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI3</th><td>' + Release_DLI3_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI4</th><td>' + Release_DLI4_Total.toFixed(2) + '</td></tr>' +
                '<tr> <th>DLI5</th><td>' + Release_DLI5_Total.toFixed(2) + '</td></tr>';

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive_B').html(Tr1);


            Financial_Monitoring_Charts();


        }
    });
}



//------------------ Financial Monitoring ON Financial Year Dropdown 




function Financial_Monitoring_A_Component_Second_module_Chart_Finacial_Year() {
    Financial_Monitoring_A_Component_Second_module_Chart();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/php_and_fn_Info_A_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {



            Support_Financial_Total = 0;
            Goods_Financial_Total = 0;
            Work_Financial_Total = 0;
            Training_Financial_Total = 0;



            Support_Financial_Expenditure = 0;
            Goods_Financial_Expenditure = 0;
            Work_Financial_Expenditure = 0;
            Training_Financial_Expenditure = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {


                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "All 5 Years") {

                        if (Main_Statename == "ALL") {
                            if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                if (data[i].category_of_procurement == "Support Service") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Support_Financial_Expenditure += SS;

                                    }
                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Goods_Financial_Expenditure += SS;

                                    }
                                }
                                if (data[i].category_of_procurement == "Works") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Work_Financial_Expenditure += SS;

                                    }
                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Training_Financial_Expenditure += SS;

                                    }
                                }

                            }
                        } else {
                            if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                if (data[i].category_of_procurement == "Support Service") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Support_Financial_Expenditure += SS;

                                    }
                                }
                                if (data[i].category_of_procurement == "Goods") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Goods_Financial_Expenditure += SS;

                                    }
                                }
                                if (data[i].category_of_procurement == "Works") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Work_Financial_Expenditure += SS;

                                    }
                                }
                                if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Training_Financial_Expenditure += SS;

                                    }
                                }

                            }
                        }




                    }

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2020-2021") {
                        if (data[i].fin_year == "2020-21") {

                            if (Main_Statename == "ALL") {

                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            } else {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            }




                        }
                    }

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2021-2022") {
                        if (data[i].fin_year == "2021-22") {

                            if (Main_Statename == "ALL") {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            } else {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            }



                        }
                    }


                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2022-2023") {
                        if (data[i].fin_year == "2022-23") {

                            if (Main_Statename == "ALL") {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            } else {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expediture_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            }



                        }
                    }


                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2023-2024") {
                        if (data[i].fin_year == "2023-24") {

                            if (Main_Statename == "ALL") {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            } else {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            }


                        }
                    }

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2024-2025") {
                        if (data[i].fin_year == "2024-25") {

                            if (Main_Statename == "ALL") {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            } else {
                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }
                            }

                        }
                    }


                    Support_Financial_Total = Support_Financial_Target + Support_Financial_Expenditure;
                    Goods_Financial_Total = Goods_Financial_Target + Goods_Financial_Expenditure;
                    Work_Financial_Total = Work_Financial_Target + Work_Financial_Expenditure;
                    Training_Financial_Total = Training_Financial_Target + Training_Financial_Expenditure;


                }
            }
            $('#Financial_Progress_Monitoring_Component_A_Institutional_strengthening_Capacity_Building').html("");
            var Tr = '<tr><th>Support</th><td>' + Support_Financial_Target.toFixed(2) + '</td><td>' + Support_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Goods</th><td>' + Goods_Financial_Target.toFixed(2) + '</td><td>' + Goods_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Works</th><td>' + Work_Financial_Target.toFixed(2) + '</td><td>' + Work_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Training</th><td>' + Training_Financial_Target.toFixed(2) + '</td><td>' + Training_Financial_Expenditure.toFixed(2) + '</td></tr>';
            $('#Financial_Progress_Monitoring_Component_A_Institutional_strengthening_Capacity_Building').html(Tr);

            Financial_Monitoring_B_Component_Second_module_Chart_Finacial_Year();
        }
    });
}

function Financial_Monitoring_B_Component_Second_module_Chart_Finacial_Year() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/php_and_fn_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            Release_DLI1_Total = 0;
            Release_DLI2_Total = 0;
            Release_DLI3_Total = 0;
            Release_DLI4_Total = 0;
            Release_DLI5_Total = 0;

            Expenditure_DLI1_Total = 0;
            Expenditure_DLI2_Total = 0;
            Expenditure_DLI3_Total = 0;
            Expenditure_DLI4_Total = 0;
            Expenditure_DLI5_Total = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "All 5 Years") {

                        if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                            if (Main_Statename == "ALL") {

                                if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }
                                else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }
                                else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }
                                else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }

                                if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI2_Total += SS;
                                    }
                                }

                                if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI3_Total += SS;
                                    }
                                }

                                if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI4_Total += SS;
                                    }
                                }
                                if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI5_Total += SS;
                                    }
                                }

                            }
                            else {

                                if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }
                                else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }
                                else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }
                                else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI1_Total += SS;

                                    }

                                }

                                if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI2_Total += SS;
                                    }
                                }

                                if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI3_Total += SS;
                                    }
                                }

                                if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI4_Total += SS;
                                    }
                                }
                                if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                    if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                        var SS = parseFloat(data[i].expenditure_made);
                                        Expenditure_DLI5_Total += SS;
                                    }
                                }


                            }



                        }

                    }



                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2020-2021") {
                        if (data[i].fin_b_year == "2020-21") {
                            if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                if (Main_Statename == "ALL") {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }
                                else {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }



                            }

                        }

                    }


                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2021-2022") {
                        if (data[i].fin_b_year == "2021-22") {
                            if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                if (Main_Statename == "ALL") {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }
                                else {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }



                            }

                        }

                    }

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2022-2023") {
                        if (data[i].fin_b_year == "2022-23") {
                            if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                if (Main_Statename == "ALL") {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }
                                else {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }




                            }

                        }

                    }

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2023-2024") {
                        if (data[i].fin_b_year == "2023-24") {
                            if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                if (Main_Statename == "ALL") {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }
                                else {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }



                            }

                        }

                    }

                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "2024-2025") {
                        if (data[i].fin_b_year == "2024-25") {
                            if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                if (Main_Statename == "ALL") {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }
                                else {
                                    if (data[i].component_budget_head == "Grant in Aid General/Professional Consulting Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }
                                    else if (data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total += SS;

                                        }

                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total += SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total += SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total += SS;
                                        }
                                    }

                                }




                            }

                        }

                    }




                }
            }
            Financial_Monitoring_B_Component_Second_module_Chart_Release_Finacial_Year();

        }
    });
}

function Financial_Monitoring_B_Component_Second_module_Chart_Release_Finacial_Year() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/Get_Fund_Form_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive').html("");
            if (data.length != 0) {

                var Year = Financial_Monitoring_Year_Wise_Finacial_Year;
                var C_Year = "";


                for (var i = 0; i < data.length; i++) {


                    if (Financial_Monitoring_Year_Wise_Finacial_Year == "All 5 Years") {
                        if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                            if (data[i].fund_grant_aid_general_b == "DLI1") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI1_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI1_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI2") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI2_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI2_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }

                            if (data[i].fund_grant_aid_general_b == "DLI3") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI3_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI3_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI4") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI4_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI4_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI5") {
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI5_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }

                        }
                    }


                    else if (data[i].fund_year == Financial_Monitoring_Year_Wise_Finacial_Year) {
                        if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                            if (data[i].fund_grant_aid_general_b == "DLI1") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI1_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI1_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI2") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI2_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI2_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI3") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI3_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI3_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI4") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI4_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI4_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }
                            if (data[i].fund_grant_aid_general_b == "DLI5") {
                                //if (data[i].fund_grant_aid_a_total != null && data[i].fund_grant_aid_a_total != "") {
                                //    Release_DLI5_Total += parseFloat(data[i].fund_grant_aid_a_total);
                                //}
                                if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                    Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                }
                                //if (data[i].fund_capital_aid_b_value != null && data[i].fund_capital_aid_b_value != "") {
                                //    Release_DLI5_Total += parseFloat(data[i].fund_capital_aid_b_value);
                                //}
                            }

                        }
                    }

                }
            }

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive_B').html("");

            var Tr = '<tr><th>DLI1</th><td>' + Expenditure_DLI1_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI2</th><td>' + Expenditure_DLI2_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI3</th><td>' + Expenditure_DLI3_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI4</th><td>' + Expenditure_DLI4_Total.toFixed(2) + '</td></tr>' +
                '<tr> <th>DLI5</th><td>' + Expenditure_DLI5_Total.toFixed(2) + '</td></tr>';

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive').html(Tr);


            var Tr1 = '<tr><th>DLI1</th><td>' + Release_DLI1_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI2</th><td>' + Release_DLI2_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI3</th><td>' + Release_DLI3_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI4</th><td>' + Release_DLI4_Total.toFixed(2) + '</td></tr>' +
                '<tr> <th>DLI5</th><td>' + Release_DLI5_Total.toFixed(2) + '</td></tr>';

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive_B').html(Tr1);


            Financial_Monitoring_Charts();


        }
    });
}




//----------------- End  Financial Monitoring ON Financial Year Dropdown 



// -----------------------Financial Progress Monitoring   Charts-----------------------



//---------END--------Financial Monitoring End



function Year_Wise_Finacial_Info() {

    if (Main_Statename != "") {
        Year_Wise_Finacial_Year = $('#Year_Wise_Finacial_Year').val();
        if (Year_Wise_Finacial_Year != "0") {

            Financial_Monitoring_A_Component_Second_module_YearWiseChart();
        } else {
            alert("Please Select Finacial Year");
        }

    } else {
        alert("Please Select StateName");
    }

}

function Financial_Monitoring_A_Component_Second_module_YearWiseChart() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/php_and_fn_Info_A_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {


            Support_Financial_Total = 0;
            Goods_Financial_Total = 0;
            Work_Financial_Total = 0;
            Training_Financial_Total = 0;

            Support_Financial_Expenditure = 0;
            Goods_Financial_Expenditure = 0;
            Work_Financial_Expenditure = 0;
            Training_Financial_Expenditure = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (Year_Wise_Finacial_Year != "") {


                        if (Year_Wise_Finacial_Year == "2020-2021") {
                            if (data[i].fin_year == "2020-21") {


                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }


                            }
                        }
                        if (Year_Wise_Finacial_Year == "2021-2022") {
                            if (data[i].fin_year == "2021-22") {

                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }


                            }
                        }
                        if (Year_Wise_Finacial_Year == "2022-2023") {
                            if (data[i].fin_year == "2022-23") {

                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }


                            }
                        }
                        if (Year_Wise_Finacial_Year == "2023-2024") {
                            if (data[i].fin_year == "2023-24") {

                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }



                            }
                        }
                        if (Year_Wise_Finacial_Year == "2024-2025") {
                            if (data[i].fin_year == "2024-25") {

                                if (data[i].category_of_procurement != null && data[i].category_of_procurement != "0") {
                                    if (data[i].category_of_procurement == "Support Service") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Support_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Goods") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Goods_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Works") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Work_Financial_Expenditure += SS;

                                        }
                                    }
                                    if (data[i].category_of_procurement == "Training/ IEC/OE") {
                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Training_Financial_Expenditure += SS;

                                        }
                                    }

                                }



                            }
                        }






                    }
                    Support_Financial_Total = Support_Financial_Target + Support_Financial_Expenditure;
                    Goods_Financial_Total = Goods_Financial_Target + Goods_Financial_Expenditure;
                    Work_Financial_Total = Work_Financial_Target + Work_Financial_Expenditure;
                    Training_Financial_Total = Training_Financial_Target + Training_Financial_Expenditure;


                }
            }

            $('#Financial_Progress_Monitoring_Component_A_Institutional_strengthening_Capacity_Building').html("");
            var Tr = '<tr><th>Support</th><td>' + Support_Financial_Target.toFixed(2) + '</td><td>' + Support_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Goods</th><td>' + Goods_Financial_Target.toFixed(2) + '</td><td>' + Goods_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Works</th><td>' + Work_Financial_Target.toFixed(2) + '</td><td>' + Work_Financial_Expenditure.toFixed(2) + '</td></tr>' +
                '<tr><th>Training</th><td>' + Training_Financial_Target.toFixed(2) + '</td><td>' + Training_Financial_Expenditure.toFixed(2) + '</td></tr>';
            $('#Financial_Progress_Monitoring_Component_A_Institutional_strengthening_Capacity_Building').html(Tr);

            Financial_Monitoring_B_Component_Second_module_YearWiseChart();
        }
    });
}

function Financial_Monitoring_B_Component_Second_module_YearWiseChart() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/php_and_fn_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            Release_DLI1_Total = 0;
            Release_DLI2_Total = 0;
            Release_DLI3_Total = 0;
            Release_DLI4_Total = 0;
            Release_DLI5_Total = 0;


            Expenditure_DLI1_Total = 0;
            Expenditure_DLI2_Total = 0;
            Expenditure_DLI3_Total = 0;
            Expenditure_DLI4_Total = 0;
            Expenditure_DLI5_Total = 0;


            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {


                    if (Year_Wise_Finacial_Year != "") {


                        if (Year_Wise_Finacial_Year == "2020-2021") {
                            if (data[i].fin_b_year == "2020-21") {
                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                    if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services" || data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total = Expenditure_DLI1_Total + SS;
                                        }
                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total = Expenditure_DLI2_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total = Expenditure_DLI3_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total = Expenditure_DLI4_Total + SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total = Expenditure_DLI5_Total + SS;
                                        }
                                    }
                                }
                            }
                        }

                        if (Year_Wise_Finacial_Year == "2021-2022") {
                            if (data[i].fin_b_year == "2021-22") {
                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                    if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services" || data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total = Expenditure_DLI1_Total + SS;
                                        }
                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total = Expenditure_DLI2_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total = Expenditure_DLI3_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total = Expenditure_DLI4_Total + SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total = Expenditure_DLI5_Total + SS;
                                        }
                                    }
                                }
                            }
                        }

                        if (Year_Wise_Finacial_Year == "2022-2023") {
                            if (data[i].fin_b_year == "2022-23") {
                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                    if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services" || data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total = Expenditure_DLI1_Total + SS;
                                        }
                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total = Expenditure_DLI2_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total = Expenditure_DLI3_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total = Expenditure_DLI4_Total + SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total = Expenditure_DLI5_Total + SS;
                                        }
                                    }
                                }
                            }
                        }

                        if (Year_Wise_Finacial_Year == "2023-2024") {
                            if (data[i].fin_b_year == "2023-24") {
                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                    if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services" || data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total = Expenditure_DLI1_Total + SS;
                                        }
                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total = Expenditure_DLI2_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total = Expenditure_DLI3_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total = Expenditure_DLI4_Total + SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total = Expenditure_DLI5_Total + SS;
                                        }
                                    }
                                }
                            }
                        }

                        if (Year_Wise_Finacial_Year == "2024-2025") {
                            if (data[i].fin_b_year == "2024-25") {
                                if (data[i].component_budget_head != null && data[i].component_budget_head != "") {

                                    if (data[i].component_budget_head == "Grant in Aid General__Non Consultancy Services" || data[i].component_budget_head == "Gran in Aid General/Professional & Non Consultancy Services") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI1_Total = Expenditure_DLI1_Total + SS;
                                        }
                                    }


                                    if (data[i].component_budget_head == "Grant in Aid General/Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System" || data[i].component_budget_head == "Grant in Aid General__Equipment & System") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI2_Total = Expenditure_DLI2_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/Works") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI3_Total = Expenditure_DLI3_Total + SS;
                                        }
                                    }

                                    if (data[i].component_budget_head == "Grant in Aid General/IEC Activities") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI4_Total = Expenditure_DLI4_Total + SS;
                                        }
                                    }
                                    if (data[i].component_budget_head == "Grant in Aid General__Training") {

                                        if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                            var SS = parseFloat(data[i].expenditure_made);
                                            Expenditure_DLI5_Total = Expenditure_DLI5_Total + SS;
                                        }
                                    }
                                }
                            }
                        }



                    }
                }
            }
            Financial_Monitoring_B_Component_Second_module_YearWiseChart_Release();

        }
    });
}

function Financial_Monitoring_B_Component_Second_module_YearWiseChart_Release() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DashBoard/Get_Fund_Form_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive').html("");
            if (data.length != 0) {


                for (var i = 0; i < data.length; i++) {

                    if (Year_Wise_Finacial_Year != "") {


                        if (Year_Wise_Finacial_Year == "2020-2021") {
                            if (data[i].fin_b_year == "2020-21") {
                                if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                                    if (data[i].fund_grant_aid_general_b == "DLI1") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI2") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI3") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI4") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI5") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }

                                }


                            }
                        }
                        if (Year_Wise_Finacial_Year == "2021-2022") {
                            if (data[i].fin_b_year == "2021-22") {
                                if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                                    if (data[i].fund_grant_aid_general_b == "DLI1") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI2") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI3") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI4") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI5") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }

                                }


                            }
                        }

                        if (Year_Wise_Finacial_Year == "2022-2023") {
                            if (data[i].fin_b_year == "2022-23") {
                                if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                                    if (data[i].fund_grant_aid_general_b == "DLI1") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI2") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI3") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI4") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI5") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }

                                }


                            }
                        }

                        if (Year_Wise_Finacial_Year == "2023-2024") {
                            if (data[i].fin_b_year == "2023-24") {
                                if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                                    if (data[i].fund_grant_aid_general_b == "DLI1") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI2") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI3") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI4") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI5") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }

                                }


                            }
                        }


                        if (Year_Wise_Finacial_Year == "2024-2025") {
                            if (data[i].fin_b_year == "2024-25") {
                                if (data[i].fund_grant_aid_general_b != null && data[i].fund_grant_aid_general_b != "") {

                                    if (data[i].fund_grant_aid_general_b == "DLI1") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI1_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI2") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI2_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI3") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI3_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI4") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI4_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }
                                    if (data[i].fund_grant_aid_general_b == "DLI5") {

                                        if (data[i].fund_general_aid_b_value != null && data[i].fund_general_aid_b_value != "") {
                                            Release_DLI5_Total += parseFloat(data[i].fund_general_aid_b_value);
                                        }

                                    }

                                }


                            }
                        }


                    }
                }
            }

            var Tr = '<tr><th>DLI1</th><td>' + Release_DLI1_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI2</th><td>' + Release_DLI2_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI3</th><td>' + Release_DLI3_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI4</th><td>' + Release_DLI4_Total.toFixed(2) + '</td></tr>' +
                '<tr> <th>DLI5</th><td>' + Release_DLI5_Total.toFixed(2) + '</td></tr>';

            $('#Financial_Progress_Monitoring_of_Component_B_Incentive_B').html(Tr);
            var Tr1 = '<tr><th>DLI1</th><td>' + Expenditure_DLI1_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI2</th><td>' + Expenditure_DLI2_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI3</th><td>' + Expenditure_DLI3_Total.toFixed(2) + '</td></tr>' +
                '<tr><th>DLI4</th><td>' + Expenditure_DLI4_Total.toFixed(2) + '</td></tr>' +
                '<tr> <th>DLI5</th><td>' + Expenditure_DLI5_Total.toFixed(2) + '</td></tr>';
            //
            $('#Financial_Progress_Monitoring_of_Component_B_Incentive').html(Tr1);
            Second_Module_Charts()();


        }
    });
}


// End ------------------------Seond Module----------------------


//---------------------Third Module------------------





//---------------Physical Monitoring ------------------

var Physical_Target_Support_value = 0;
var Physical_Target_Goods_value = 0;
var Physical_Target_Works_value = 0;
var Physical_Target_Training_value = 0;


var Physical_Achieved_Support_value = 0;
var Physical_Achieved_Goods_value = 0;
var Physical_Achieved_Works_value = 0;
var Physical_Achieved_Training_value = 0;

function Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/physical_monitoring_report_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            

            Physical_Target_Support_value = 0;
            Physical_Target_Goods_value = 0;
            Physical_Target_Works_value = 0;
            Physical_Target_Training_value = 0;


            Physical_Achieved_Support_value = 0;
            Physical_Achieved_Goods_value = 0;
            Physical_Achieved_Works_value = 0;
            Physical_Achieved_Training_value = 0;



            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].support_type == "Support") {
                        if (data[i].support_targeted_number != null && data[i].support_targeted_number != "") {
                            Physical_Target_Support_value = Physical_Target_Support_value + parseFloat(data[i].support_targeted_number);
                        }

                        if (data[i].support_cumulative_total != null && data[i].support_cumulative_total != "") {
                            Physical_Achieved_Support_value = Physical_Achieved_Support_value + parseFloat(data[i].support_cumulative_total);
                        }
                    }


                    if (data[i].support_type == "Goods") {
                        if (data[i].support_targeted_number != null && data[i].support_targeted_number != "") {
                            Physical_Target_Goods_value = Physical_Target_Goods_value + parseFloat(data[i].support_targeted_number);
                        }

                        if (data[i].support_cumulative_total != null && data[i].support_cumulative_total != "") {
                            Physical_Achieved_Goods_value = Physical_Achieved_Goods_value + parseFloat(data[i].support_cumulative_total);
                        }
                    }

                    if (data[i].support_type == "Work") {
                        if (data[i].support_targeted_number != null && data[i].support_targeted_number != "") {
                            Physical_Target_Works_value = Physical_Target_Works_value + parseFloat(data[i].support_targeted_number);
                        }

                        if (data[i].support_cumulative_total != null && data[i].support_cumulative_total != "") {
                            Physical_Achieved_Works_value = Physical_Achieved_Works_value + parseFloat(data[i].support_cumulative_total);
                        }
                    }

                    if (data[i].support_type == "Training") {
                        if (data[i].support_targeted_number != null && data[i].support_targeted_number != "") {
                            Physical_Target_Training_value = Physical_Target_Training_value + parseFloat(data[i].support_targeted_number);
                        }

                        if (data[i].support_cumulative_total != null && data[i].support_cumulative_total != "") {
                            Physical_Achieved_Training_value = Physical_Achieved_Training_value + parseFloat(data[i].support_cumulative_total);
                        }
                    }
                }
            }
            $('#Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building').html("");

            var Tr = '<tr><th>SUPPORT SERVICES</th><td>' + Physical_Target_Support_value.toFixed(2) + '</td><td>' + Physical_Achieved_Support_value.toFixed(2) + '</td></tr>' +
                '<tr><th>GOODS</th><td>' + Physical_Target_Goods_value.toFixed(2) + '</td><td>' + Physical_Achieved_Goods_value.toFixed(2) + '</td></tr>' +
                '<tr><th>WORKS</th><td>' + Physical_Target_Works_value.toFixed(2) + '</td><td>' + Physical_Achieved_Works_value.toFixed(2) + '</td></tr>' +
                '<tr><th>TRAINING/IEC/OE</th><td>' + Physical_Target_Training_value.toFixed(2) + '</td><td>' + Physical_Achieved_Training_value.toFixed(2) + '</td></tr>';

            $('#Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building').html(Tr);

            Third_Module_Charts();
        }
    });
}



function Year_Wise_PhysicalMonitoring_Info() {

    Year_Wise_PhysicalMonitoring_Financial_Year = Financial_Monitoring_Year_Wise_Finacial_Year;
    if (Main_Statename != "") {

        if (Year_Wise_PhysicalMonitoring_Financial_Year != "0") {
            if (Year_Wise_PhysicalMonitoring_Financial_Year == "All 5 Years") {
                Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building();
            } else {
                Physical_Monitoring_Year_Wise();
            }
        } else {
            Year_Wise_PhysicalMonitoring_Financial_Year = "";
            alert("Please Select Financial Year");
        }

    } else {

        alert("Please Select StateName");
    }

}



function Physical_Monitoring_Year_Wise() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/physical_monitoring_report_Info',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            Physical_Target_Support_value = 0;
            Physical_Target_Goods_value = 0;
            Physical_Target_Works_value = 0;
            Physical_Target_Training_value = 0;


            Physical_Achieved_Support_value = 0;
            Physical_Achieved_Goods_value = 0;
            Physical_Achieved_Works_value = 0;
            Physical_Achieved_Training_value = 0;
            

            if (data.length != 0) {
                for (var z = 0; z < data.length; z++) {
                    if (data[z].support_year != null && data[z].support_year != "") {
                        if (Year_Wise_PhysicalMonitoring_Financial_Year != "") {

                            if (Year_Wise_PhysicalMonitoring_Financial_Year == "2020-2021") {
                                if (data[z].support_year == "2020-21") {
                                    if (data[z].support_type == "Support") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Support_value = Physical_Target_Support_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Support_value = Physical_Achieved_Support_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }



                                    if (data[z].support_type == "Goods") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Goods_value = Physical_Target_Goods_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Goods_value = Physical_Achieved_Goods_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Work") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Works_value = Physical_Target_Works_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Works_value = Physical_Achieved_Works_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Training") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Training_value = Physical_Target_Training_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Training_value = Physical_Achieved_Training_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                }
                            }

                            if (Year_Wise_PhysicalMonitoring_Financial_Year == "2021-2022") {
                                if (data[z].support_year == "2021-22") {
                                    if (data[z].support_type == "Support") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Support_value = Physical_Target_Support_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Support_value = Physical_Achieved_Support_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }



                                    if (data[z].support_type == "Goods") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Goods_value = Physical_Target_Goods_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Goods_value = Physical_Achieved_Goods_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Work") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Works_value = Physical_Target_Works_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Works_value = Physical_Achieved_Works_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Training") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Training_value = Physical_Target_Training_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Training_value = Physical_Achieved_Training_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                }
                            }

                            if (Year_Wise_PhysicalMonitoring_Financial_Year == "2022-2023") {

                                if (data[z].support_year == "2022-23") {
                                    if (data[z].support_type == "Support") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Support_value = Physical_Target_Support_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Support_value = Physical_Achieved_Support_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }


                                    if (data[z].support_type == "Goods") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Goods_value = Physical_Target_Goods_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Goods_value = Physical_Achieved_Goods_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Work") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Works_value = Physical_Target_Works_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Works_value = Physical_Achieved_Works_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Training") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Training_value = Physical_Target_Training_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Training_value = Physical_Achieved_Training_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                }
                            }

                            if (Year_Wise_PhysicalMonitoring_Financial_Year == "2023-2024") {
                                if (data[z].support_year == "2023-24") {
                                    if (data[z].support_type == "Support") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Support_value = Physical_Target_Support_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Support_value = Physical_Achieved_Support_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }



                                    if (data[z].support_type == "Goods") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Goods_value = Physical_Target_Goods_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Goods_value = Physical_Achieved_Goods_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Work") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Works_value = Physical_Target_Works_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Works_value = Physical_Achieved_Works_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Training") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Training_value = Physical_Target_Training_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Training_value = Physical_Achieved_Training_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                }
                            }


                            if (Year_Wise_PhysicalMonitoring_Financial_Year == "2024-2025") {
                                if (data[z].support_year == "2024-25") {
                                    if (data[z].support_type == "Support") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Support_value = Physical_Target_Support_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Support_value = Physical_Achieved_Support_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }


                                    if (data[z].support_type == "Goods") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Goods_value = Physical_Target_Goods_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Goods_value = Physical_Achieved_Goods_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Work") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Works_value = Physical_Target_Works_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Works_value = Physical_Achieved_Works_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }

                                    if (data[z].support_type == "Training") {
                                        if (data[z].support_targeted_number != null && data[z].support_targeted_number != "") {
                                            Physical_Target_Training_value = Physical_Target_Training_value + parseFloat(data[z].support_targeted_number);
                                        }

                                        if (data[z].support_cumulative_total != null && data[z].support_cumulative_total != "") {
                                            Physical_Achieved_Training_value = Physical_Achieved_Training_value + parseFloat(data[z].support_cumulative_total);
                                        }
                                    }
                                }
                            }

                        }

                    }
                }
            }
            $('#Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building').html("");

            var Tr = '<tr><th>SUPPORT SERVICES</th><td>' + Physical_Target_Support_value.toFixed(2) + '</td><td>' + Physical_Achieved_Support_value.toFixed(2) + '</td></tr>' +
                '<tr><th>GOODS</th><td>' + Physical_Target_Goods_value.toFixed(2) + '</td><td>' + Physical_Achieved_Goods_value.toFixed(2) + '</td></tr>' +
                '<tr><th>WORKS</th><td>' + Physical_Target_Works_value.toFixed(2) + '</td><td>' + Physical_Achieved_Works_value.toFixed(2) + '</td></tr>' +
                '<tr><th>TRAINING/IEC/OE</th><td>' + Physical_Target_Training_value.toFixed(2) + '</td><td>' + Physical_Achieved_Training_value.toFixed(2) + '</td></tr>';

            $('#Physical_Progress_Monitoring_Component_A_Institutional_strengthening_capacity_building').html(Tr);

            Third_Module_Charts();
        }
    });
}

//------------END---Physical Monitoring 


// End Third Module--------------------



