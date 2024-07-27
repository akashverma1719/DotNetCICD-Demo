var repeat = 0;
var pip_A2_val_a = 0;
var pip_A3_val_a = 0;
var pip_B2_val_b = 0;
var pip_B3_val_b = 0;
var total_A = 0;
var total_B = 0;
var AWP_Total_value_A = 0;
var AWP_Total_value_B = 0;
var Agency_State = "";
var PipStateArr = [];
var IsNppmu = 0;
var Login_type = "";
var Categories = "";
FInalData_nine_chart1 = [];
FInalData_ten_chart1_B = [];

FInalData_nine_chart2 = [];
FInalData_ten_chart2_B = [];

FInalData_nine_chart3 = [];
FInalData_ten_chart3_B = [];

FInalData_eleven_chart = [];
FInalData_eleven_chart_final = [];

FInalData_eleven_chart_final_2 = [];
var first_val_nine_chart = 0;
var first_val_ten_chart_B = 0;

var second_val_nine_chart = 0;
var second_val_ten_chart_B = 0;

var third_val_nine_chart = 0;
var third_val_ten_chart_B = 0;

var third_val_eleven_chart = 0;

var Chart_eleven_second_val = 0;

function PIP_Agency_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/PIP_Agency_Info',
        data: '',
        dataType: 'JSON',
        async: true,
        success: function (data) {
            var slection_options = '<option value="0">Select State</option>';
            var slection_options_b = '<option value="0">Select State</option>';
            //Pip State Binding

            

            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "pip") {
                    PipStateArr.push(data[i].state_name)
                }
            }

            PipStateArr.sort();
            // PipStateArr.unshift("NPMU");
            PipStateArr.unshift("ALL");
            PipStateArr.push("NPMU");
            //PipStateArr.forEach((val) => {
                
            //    slection_options += '<option value="' + val + '"> ' + val + ' </option>';
            //});
            slection_options += '<option value="ALL"> ALL </option>';
            slection_options += '<option value="NPMU"> NPMU </option>';
            var state_value = "";
            for (var i = 0; i < PipStateArr.length; i++) {
                if (PipStateArr[i] == "ALL" || PipStateArr[i] == "NPMU") {
                    console.log(PipStateArr[i]);
                } else {

                    if (PipStateArr[i] == "Gujarat_24") {
                        state_value = "Gujarat";
                    } else if (PipStateArr[i] == "Haryana_6") {
                        state_value = "Haryana";
                    } else if (PipStateArr[i] == "Karnataka_29") {
                        state_value = "Karnataka";
                    } else if (PipStateArr[i] == "Madhya Pradesh_23") {
                        state_value = "Madhya Pradesh";
                    } else if (PipStateArr[i] == "Maharashtra_27") {
                        state_value = "Maharashtra";
                    } else if (PipStateArr[i] == "Rajasthan_8") {
                        state_value = "Rajasthan";
                    } else if (PipStateArr[i] == "Uttar Pradesh_9") {
                        state_value = "Uttar Pradesh";
                    }
                    slection_options += '<option value="' + PipStateArr[i] + '"> ' + state_value + ' </option>';

                }
                
            }
            console.log(slection_options);
            $('#state').html(slection_options);
            $('#state').val('ALL');
            //$('#state option [ALL]').prop('checked', true);
            //$("select#designation_name option[value='" + designation_name + "']").prop('disabled', true);


            ///End pip state binding

            //awp state binding
            var AwpStateArr = [];
            //AwpStateArr.push("ALL");
            //AwpStateArr.push("NPMU");
            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "awp") {
                    AwpStateArr.push(data[i].state_name)
                }
            }
            AwpStateArr.sort();
            AwpStateArr.unshift("NPMU");
            AwpStateArr.unshift("ALL");

            $('#state').append('<option >--Select--</option>')
            //AwpStateArr.forEach((val) => {
            //    slection_options_b += '<option value="' + val + '"> ' + val + ' </option>';

            //});

            var state_value1 = "";
            slection_options_b += '<option value="ALL"> ALL </option>';
            slection_options_b += '<option value="NPMU"> NPMU </option>';
            for (var i = 0; i < AwpStateArr.length; i++) {
                if (AwpStateArr[i] == "ALL" || AwpStateArr[i] == "NPMU") {
                    console.log(AwpStateArr[i]);
                } else {
                    if (AwpStateArr[i] == "Gujarat_24") {
                        state_value1 = "Gujarat";
                    } else if (AwpStateArr[i] == "Haryana_6") {
                        state_value1 = "Haryana";
                    } else if (AwpStateArr[i] == "Karnataka_29") {
                        state_value1 = "Karnataka";
                    } else if (AwpStateArr[i] == "Madhya Pradesh_23") {
                        state_value1 = "Madhya Pradesh";
                    } else if (AwpStateArr[i] == "Maharashtra_27") {
                        state_value1 = "Maharashtra";
                    } else if (AwpStateArr[i] == "Rajasthan_8") {
                        state_value1 = "Rajasthan";
                    } else if (AwpStateArr[i] == "Uttar Pradesh_9") {
                        state_value1 = "Uttar Pradesh";
                    }
                    slection_options_b += '<option value="' + AwpStateArr[i] + '"> ' + state_value1 + ' </option>';
                }
                
            }
            $('#state').html(slection_options_b);
            

            if (Login_type != "") {
                if (Login_type == "Admin") {
                    $('#state').val("0");
                    $('#state').show();
                    $('#state').val('ALL');
                    //$('#state').val(data);
                    // $('#pip_dropdown_state_name').hide();
                }
                else if (Login_type == "Logout") {
                    $('#state').val("ALL");
                }
                else {
                    $('#state').hide();
                    //$('#pip_dropdown_state_name').text(data);
                    $('#state').val(Login_type);
                    //Agency_State = data;
                    //Main_Statename = data;
                }
            }
            //SessionInfo1();

            DropDownVal();

        }
    });

}

function StateWise_Info() {
    Agency_State = $('#state').val();
    if (Agency_State != "0") {
    }
    else {
        alert("Please Select StateName");
    }
}
//First,Second Chart
function PIP_Info() {
     
    $('.loader').show();
    if (Agency_State == null) {
        Agency_State = "ALL";
    }
    if (Agency_State == "ALL" || Agency_State == "NPMU") {
        $("#txt_npmu_tile").text("National Program Management Unit (NPMU)");
    }
    else {
        $("#txt_npmu_tile").text("")
    }
 
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/PIP_Info',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {
            Pip_Total_value = 0;
             
            var nodal_agency_name = "";
            var Pip_A1_1 = 0;
            var Pip_A1_2 = 0;
            var Pip_A1_3 = 0;
            var Pip_A2 = 0;
            var Pip_A3 = 0;
            var Pip_A4 = 0;
            var Pip_A5 = 0;
            var Pip_A6 = 0;
            var Pip_26 = 0;
            PIP_activity_Array = [];
            var pip_financial_year1_20_21_total = 0;
            var pip_financial_year1_21_22_total = 0;
            var pip_financial_year1_22_23_total = 0;
            var pip_financial_year1_23_24_total = 0;
            var pip_financial_year1_24_25_total = 0;
            pip_a_component = 0;

            var Total_Estimated_Cost = 0;
            if (data.length != 0) {
                var ddlst = {};


                for (var i = 0; i < data.length; i++) {
                    if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {


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
                            else if (ss1 == "26.02") {
                                var yearss = data[i].pip_estimated_cost_for_five_years;
                                Pip_26 = parseFloat(Pip_26) + parseFloat(yearss);
                            }
                            pip_estimated_cost_for_five_years = data[i].pip_estimated_cost_for_five_years;
                        }


                        var pip_financial_year1_20_21 = "";
                        if (data[i].pip_financial_year1_20_21 != null && data[i].pip_financial_year1_20_21 != "") {
                            pip_financial_year1_20_21_total += parseFloat(data[i].pip_financial_year1_20_21);
                            pip_financial_year1_20_21 = data[i].pip_financial_year1_20_21;
                        }


                        var pip_financial_year2_21_22 = "";
                        if (data[i].pip_financial_year2_21_22 != null && data[i].pip_financial_year2_21_22 != "") {
                            pip_financial_year2_21_22 = data[i].pip_financial_year2_21_22;
                            pip_financial_year1_21_22_total += parseFloat(data[i].pip_financial_year2_21_22);
                        }


                        var pip_financial_year3_22_23 = "";
                        if (data[i].pip_financial_year3_22_23 != null && data[i].pip_financial_year3_22_23 != "") {
                            pip_financial_year3_22_23 = data[i].pip_financial_year3_22_23;
                            pip_financial_year1_22_23_total += parseFloat(data[i].pip_financial_year3_22_23);
                        }

                        var pip_financial_year4_23_24 = "";
                        if (data[i].pip_financial_year4_23_24 != null && data[i].pip_financial_year4_23_24 != "") {
                            pip_financial_year4_23_24 = data[i].pip_financial_year4_23_24;
                            pip_financial_year1_23_24_total += parseFloat(data[i].pip_financial_year4_23_24);
                        }

                        var pip_financial_year5_24_25 = "";
                        if (data[i].pip_financial_year5_24_25 != null && data[i].pip_financial_year5_24_25 != "") {
                            pip_financial_year5_24_25 = data[i].pip_financial_year5_24_25;
                            pip_financial_year1_24_25_total += parseFloat(data[i].pip_financial_year5_24_25);
                        }

                    }
                }
            }
            if (Agency_State == "NPMU" || Agency_State == "ALL") {
                IsNppmu = 1;
            } else {
                IsNppmu = 0;
            }

            var total = Pip_A1_1 + Pip_A1_2 + Pip_A1_3 + Pip_A2 + Pip_A3 + Pip_A4 + Pip_A5 + Pip_A6 + Pip_26;

            pip_A2_val_a = Pip_A2.toFixed(2);
            pip_A3_val_a = Pip_A3.toFixed(2);

            second_pie_chart('second_pie_chart_id', (Pip_A1_1 + Pip_A1_2 + Pip_A1_3).toFixed(2), Pip_A2.toFixed(2), Pip_A3.toFixed(2), Pip_A4.toFixed(2), Pip_A5.toFixed(2), Pip_A6.toFixed(2), Pip_26.toFixed(2), total.toFixed(2), IsNppmu);
            total_A = total.toFixed(2);
            var Pip_Total_value = parseFloat(Pip_Total_value) + parseFloat(total);


            var states = PipStateArr;
            if (AWP_Financial_Year == "ALL") {
                FInalData_nine_chart1 = [];
                if (Agency_State == "ALL") {
                    for (var j = 1; j < states.length; j++) {

                        var first_val_nine_chart = 0;
                        for (var i = 0; i < data.length; i++) {
                            //                        var chckYear_arr_finYear = data[i].awp_fin_year.split('-');
                            if (AWP_Financial_Year == "ALL") {
                                if (data[i].state_name == states[j]) {
                                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                        first_val_nine_chart += parseFloat(data[i].pip_estimated_cost_for_five_years);

                                    }
                                }
                            }
                            else {
                                if (data[i].awp_fin_year == AWP_Financial_Year && data[i].state_name == states[j]) {
                                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                        first_val_nine_chart += parseFloat(data[i].pip_estimated_cost_for_five_years);

                                    }
                                }
                            }
                        }
                        FInalData_nine_chart1.push({
                            category: states[j],
                            first: first_val_nine_chart.toFixed(2),
                        });
                    }
                }
                else {
                    first_val_nine_chart = 0;
                    for (var i = 0; i < data.length; i++) {
                        //var chckYear_arr_finYear = data[i].awp_fin_year.split('-');
                        if (AWP_Financial_Year == "ALL") {
                            if (data[i].state_name == Agency_State) {
                                if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                    first_val_nine_chart += parseFloat(data[i].pip_estimated_cost_for_five_years);

                                }
                            }
                        }
                        else {
                            if (data[i].awp_fin_year == AWP_Financial_Year && data[i].state_name == Agency_State) {
                                if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                    first_val_nine_chart += parseFloat(data[i].pip_estimated_cost_for_five_years);

                                }
                            }
                        }

                    }
                    FInalData_nine_chart1.push({
                        category: Agency_State,
                        first: first_val_nine_chart.toFixed(2),
                    });

                }
            }

            if (AWP_Financial_Year == 'ALL') {
                FInalData_eleven_chart_final_2 = [];
                var chckYear_arr = AWP_Financial_Year;
                var Chart_eleven_second_val_it = 0;
                if (Agency_State == "ALL") {


                    for (var i = 0; i < Categories.length; i++) {
                        Chart_eleven_second_val = 0;
                        Chart_eleven_second_val_it = 0;
                        for (var j = 0; j < data.length; j++) {
                            //var chckYear_arr_finYear = data[j].fin_year;
                            if (chckYear_arr == "ALL") {

                                if (data[j].pip_activity_id == "A1.1" || data[j].pip_activity_id == "A1.2" || data[j].pip_activity_id == "A1.3") {
                                    if (data[j].pip_estimated_cost_for_five_years != null && data[j].pip_estimated_cost_for_five_years != '') {
                                        Chart_eleven_second_val_it += parseFloat(data[j].pip_estimated_cost_for_five_years);
                                    }
                                }
                                else if (Categories[i].activity_id == data[j].pip_activity_id) {

                                    if (data[j].pip_estimated_cost_for_five_years != null && data[j].pip_estimated_cost_for_five_years != '') {
                                        Chart_eleven_second_val += parseFloat(data[j].pip_estimated_cost_for_five_years);
                                    }
                                }

                            }
                        }
                        FInalData_eleven_chart_final_2.push({
                            country: Categories[i].category_of_procurement,
                            Allocation: Chart_eleven_second_val
                            //Expenditure: third_val_eleven_chart.toFixed(2),
                            //Allocation: Chart_eleven_second_val.toFixed(2)
                        });
                    }
                }
                else {

                    Chart_eleven_second_val = 0;
                    Chart_eleven_second_val_it = 0;

                    for (var i = 0; i < Categories.length; i++) {
                        Chart_eleven_second_val = 0;
                        Chart_eleven_second_val_it = 0;
                        for (var j = 0; j < data.length; j++) {
                            //var chckYear_arr_finYear = data[j].fin_year;
                            if (chckYear_arr == "ALL") {

                                if (data[j].pip_activity_id == "A1.1" || data[j].pip_activity_id == "A1.2" || data[j].pip_activity_id == "A1.3" && data[j].state_name == Agency_State) {
                                    if (data[j].pip_estimated_cost_for_five_years != null && data[j].pip_estimated_cost_for_five_years != '') {
                                        Chart_eleven_second_val_it += parseFloat(data[j].pip_estimated_cost_for_five_years);
                                    }
                                }
                                else if (Categories[i].pip_activity_id == data[j].pip_activity_id && data[j].state_name == Agency_State) {

                                    if (data[j].pip_estimated_cost_for_five_years != null && data[j].pip_estimated_cost_for_five_years != '') {
                                        Chart_eleven_second_val += parseFloat(data[j].pip_estimated_cost_for_five_years);
                                    }
                                }

                            }
                        }

                        FInalData_eleven_chart_final_2.push({
                            country: Categories[i].category_of_procurement,
                            Allocation: Chart_eleven_second_val
                            //Expenditure: third_val_eleven_chart.toFixed(2),
                            //Allocation: Chart_eleven_second_val.toFixed(2)
                        });
                    }
                }

                FInalData_eleven_chart_final_2.unshift({
                    country: "A1 Institutional Support",
                    Allocation: Chart_eleven_second_val_it
                    //Expenditure: third_val_eleven_chart.toFixed(2),
                    //Allocation: Chart_eleven_second_val.toFixed(2)
                });

                //console.log(FInalData_eleven_chart_final);
                //console.log(FInalData_eleven_chart_final_2);        
            }


            PIP_B_Info();

        }
    });
}

//First,Third Chart
function PIP_B_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/PIP_B_Info',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        success: function (data) {

            var Pip_B1 = 0;
            var Pip_B2 = 0;
            var Pip_B3 = 0;
            var Pip_B4 = 0;
            var Pip_B5 = 0;
            PIP_B_activity_Array = [];
            pip_b_component = 0;
            Pip_Total_value = 0;
            var Total_Estimated_Cost_year = 0;
            if (data.length != 0) {
                var ddlst = {};
                for (var i = 0; i < data.length; i++) {

                    if (data[i].state_name != "null" && data[i].state_name != "undefined" && data[i].state_name != null && data[i].state_name != "") {
                        pip_b_component += 1;



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

                    }
                }
            }
            var total = Pip_B1 + Pip_B2 + Pip_B3 + Pip_B4 + Pip_B5;
            Pip_B1 = Math.round(Pip_B1);
            Pip_B2 = Math.round(Pip_B2);
            Pip_B3 = Math.round(Pip_B3);
            Pip_B4 = Math.round(Pip_B4);
            Pip_B5 = Math.round(Pip_B5);
            //$('#Pip_B_total').text(total.toFixed(2));
            Pip_Total_value = parseFloat(Pip_Total_value) + parseFloat(total);
            total_B = Pip_Total_value.toFixed(2);
            //$('#Pip_Total_value').text(Pip_Total_value.toFixed(2));
            //$('#Pip_Total_value1').text(Pip_Total_value.toFixed(2));
            pip_B2_val_b = Pip_B2.toFixed(2);
            pip_B3_val_b = Pip_B3.toFixed(2);
            first_pie_chart('first_pie_chart_id', total_A, total_B);
            thired_pie_chart('thired_pie_chart_id', Pip_B1.toFixed(2), Pip_B2.toFixed(2), Pip_B3.toFixed(2), Pip_B4.toFixed(2), Pip_B5.toFixed(2), total_B, IsNppmu);

            
            if (AWP_Financial_Year == "ALL") {
                FInalData_ten_chart1_B = [];
                if (Agency_State == "ALL") {
                    
                    for (var j = 1; j < states.length; j++) {

                        first_val_ten_chart_B = 0;
                        for (var i = 0; i < data.length; i++) {
                            //var chckYear_arr_finYear = data[i].awp_fin_year.split('-');
                            if (AWP_Financial_Year == "ALL") {
                                if (data[i].state_name == states[j]) {
                                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                        first_val_ten_chart_B += parseFloat(data[i].pip_estimated_cost_for_five_years);
                                    }
                                }
                            }
                            else {
                                if (data[i].awp_fin_year == AWP_Financial_Year && data[i].state_name == states[j]) {
                                    if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                        first_val_ten_chart_B += parseFloat(data[i].pip_estimated_cost_for_five_years);
                                    }
                                }
                            }
                        }
                        
                        FInalData_ten_chart1_B.push({
                            category: states[j],
                            first: first_val_ten_chart_B.toFixed(2),
                        });
                    }
                }
                else {
                    first_val_ten_chart_B = 0;
                    for (var i = 0; i < data.length; i++) {
                        //var chckYear_arr_finYear = data[i].awp_fin_year;
                        if (AWP_Financial_Year == "ALL") {
                            if (data[i].state_name == Agency_State) {
                                if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                    first_val_ten_chart_B += parseFloat(data[i].pip_estimated_cost_for_five_years);
                                }
                            }
                        }
                        else {
                            if (data[i].awp_fin_year == AWP_Financial_Year && data[i].state_name == Agency_State) {
                                if (data[i].pip_estimated_cost_for_five_years != null && data[i].pip_estimated_cost_for_five_years != "") {
                                    first_val_ten_chart_B += parseFloat(data[i].pip_estimated_cost_for_five_years);
                                }
                            }
                        }

                    }
                    
                    FInalData_ten_chart1_B.push({
                        category: Agency_State,
                        first: first_val_ten_chart_B.toFixed(2),
                    });

                }
            }

            AWP_Info();
        }
    });
}

//Fifth CHart,1st Bar chart
function AWP_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/AWP_Info_All',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
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

                    if (AWP_Financial_Year == "ALL") {
                        //mohann
                        var awp_financial_year_20_21 = 0;
                        if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {

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
                    }
                    else if (AWP_Financial_Year == data[i].awp_fin_year) {

                        //mohann
                        var awp_financial_year_20_21 = 0;
                        if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {

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
                    }
                }
            }

            var chckYear_arr = AWP_Financial_Year;

            var states = PipStateArr;

            if (Agency_State == '0') {
                Agency_State = 'ALL';
            }
            if (AWP_Financial_Year != "ALL") {
                FInalData_nine_chart1 = [];
                if (Agency_State == "ALL") {
                    for (var j = 1; j < states.length; j++) {

                        var first_val_nine_chart = 0;
                        for (var i = 0; i < data.length; i++) {
                            //                        var chckYear_arr_finYear = data[i].awp_fin_year.split('-');
                            if (chckYear_arr == "ALL") {
                                if (data[i].state_name == states[j]) {
                                    if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                        first_val_nine_chart += parseFloat(data[i].awp_financial_year_20_21);

                                    }
                                }
                            }
                            else {
                                if (data[i].awp_fin_year == chckYear_arr && data[i].state_name == states[j]) {
                                    if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                        first_val_nine_chart += parseFloat(data[i].awp_financial_year_20_21);

                                    }
                                }
                            }
                        }
                        FInalData_nine_chart1.push({
                            category: states[j],
                            first: first_val_nine_chart.toFixed(2),
                        });
                    }
                }
                else {
                    first_val_nine_chart = 0;
                    for (var i = 0; i < data.length; i++) {
                        //var chckYear_arr_finYear = data[i].awp_fin_year.split('-');
                        if (chckYear_arr == "ALL") {
                            if (data[i].state_name == Agency_State) {
                                if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                    first_val_nine_chart += parseFloat(data[i].awp_financial_year_20_21);

                                }
                            }
                        }
                        else {
                            if (data[i].awp_fin_year == chckYear_arr && data[i].state_name == Agency_State) {
                                if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                    first_val_nine_chart += parseFloat(data[i].awp_financial_year_20_21);

                                }
                            }
                        }

                    }
                    FInalData_nine_chart1.push({
                        category: Agency_State,
                        first: first_val_nine_chart.toFixed(2),
                    });

                }
            }

            if (Agency_State == "NPMU" || Agency_State == "ALL") {
                IsNppmu = 1;
            } else {
                IsNppmu = 0;
            }
            //var c_year = new Date().getFullYear();

            var total = Awp_A1_1 + Awp_A1_2 + Awp_A1_3 + Awp_A2 + Awp_A3 + Awp_A4 + Awp_A5 + Awp_A6 + Awp_T6;

            if (AWP_Financial_Year == "ALL") {
                Awp_A2 = parseFloat(pip_A2_val_a);
                Awp_A3 = parseFloat(pip_A3_val_a);
                total = 0;
                var total = (parseFloat(Awp_A1_1) + parseFloat(Awp_A1_2) + parseFloat(Awp_A1_3) + parseFloat(Awp_A2) + parseFloat(Awp_A3) + parseFloat(Awp_A4) + parseFloat(Awp_A5) + parseFloat(Awp_A6) + parseFloat(Awp_T6));
                var A1_total = (parseFloat(Awp_A1_1) + parseFloat(Awp_A1_2) + parseFloat(Awp_A1_3));
                fifth_pie_chart('fifth_pie_chart_id', A1_total.toFixed(2), Awp_A2.toFixed(2), Awp_A3.toFixed(2), Awp_A4.toFixed(2), Awp_A5.toFixed(2), Awp_A6.toFixed(2), Awp_T6.toFixed(2), total.toFixed(2), IsNppmu);
            }
            else {
                fifth_pie_chart('fifth_pie_chart_id', (Awp_A1_1 + Awp_A1_2 + Awp_A1_3).toFixed(2), Awp_A2.toFixed(2), Awp_A3.toFixed(2), Awp_A4.toFixed(2), Awp_A5.toFixed(2), Awp_A6.toFixed(2), Awp_T6.toFixed(2), total.toFixed(2), IsNppmu);
            }
            AWP_Total_value_A = total.toFixed(2);

            AWP_B_Info();
        }
    });
}

//Fourth and Sixth chart,1st Bar chart
function AWP_B_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/AWP_B_Info_All',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
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

            var Comulative_Sum = 0;
            var Total_Estimated_Cost = 0;
            var ddlst = {};
            var ddlst_year = {};
            if (data.length != 0) {


                for (var i = 0; i < data.length; i++) {
                    if (AWP_Financial_Year == "ALL") {

                        var awp_financial_year_20_21 = 0;
                        if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {


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

                    }
                    else if (AWP_Financial_Year == data[i].awp_fin_year) {

                        var awp_financial_year_20_21 = 0;
                        if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {

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
                    }
                }
            }


            var chckYear_arr = AWP_Financial_Year;

            var states = PipStateArr;

            if (AWP_Financial_Year != "ALL") {
                FInalData_ten_chart1_B = [];
                if (Agency_State == "ALL") {
                    
                    for (var j = 1; j < states.length; j++) {
                        
                        first_val_ten_chart_B = 0;
                        for (var i = 0; i < data.length; i++) {
                            //var chckYear_arr_finYear = data[i].awp_fin_year.split('-');
                            if (chckYear_arr == "ALL") {
                                if (data[i].state_name == states[j]) {
                                    if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                        first_val_ten_chart_B += parseFloat(data[i].awp_financial_year_20_21);
                                    }
                                }
                            }
                            else {
                                if (data[i].awp_fin_year == chckYear_arr && data[i].state_name == states[j]) {
                                    if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                        first_val_ten_chart_B += parseFloat(data[i].awp_financial_year_20_21);
                                    }
                                }
                            }
                        }
                        
                        FInalData_ten_chart1_B.push({
                            category: states[j],
                            first: first_val_ten_chart_B.toFixed(2),
                        });
                    }
                }
                else {
                    first_val_ten_chart_B = 0;
                    for (var i = 0; i < data.length; i++) {
                        //var chckYear_arr_finYear = data[i].awp_fin_year;
                        if (chckYear_arr == "ALL") {
                            if (data[i].state_name == Agency_State) {
                                if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                    first_val_ten_chart_B += parseFloat(data[i].awp_financial_year_20_21);
                                }
                            }
                        }
                        else {
                            if (data[i].awp_fin_year == chckYear_arr && data[i].state_name == Agency_State) {
                                if (data[i].awp_financial_year_20_21 != null && data[i].awp_financial_year_20_21 != "") {
                                    first_val_ten_chart_B += parseFloat(data[i].awp_financial_year_20_21);
                                }
                            }
                        }

                    }
                    
                    FInalData_ten_chart1_B.push({
                        category: Agency_State,
                        first: first_val_ten_chart_B.toFixed(2),
                    });

                }
            }


            var total = Awp_B1 + Awp_B2 + Awp_B3 + Awp_B4 + Awp_B5;


            if (AWP_Financial_Year == "ALL") {
                Awp_B2 = parseFloat(pip_B2_val_b);
                Awp_B3 = parseFloat(pip_B3_val_b);
                total = 0;
                var total = parseFloat(Awp_B1) + parseFloat(Awp_B2) + parseFloat(Awp_B3) + parseFloat(Awp_B4) + parseFloat(Awp_B5);
                sixth_pie_chart('sixth_pie_chart_id', Awp_B1.toFixed(2), Awp_B2.toFixed(2), Awp_B3.toFixed(2), Awp_B4.toFixed(2), Awp_B5.toFixed(2), total.toFixed(2));
                AWP_Total_value_B = parseFloat(total).toFixed(2);
            }
            else {
                sixth_pie_chart('sixth_pie_chart_id', Awp_B1.toFixed(2), Awp_B2.toFixed(2), Awp_B3.toFixed(2), Awp_B4.toFixed(2), Awp_B5.toFixed(2), total.toFixed(2));
                AWP_Total_value_B = parseFloat(total).toFixed(2);
            }


            fourth_pie_chart('fourth_pie_chart_id', AWP_Total_value_A, AWP_Total_value_B);

            php_and_fn_Info_A_Form();
        }
    });
}



function AjaxCall() {  //prateek ajaxcall

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/IsNpmuThere',
        dataType: 'JSON',
        async: true,
        success: function (data) {

            $("#awp_workactivity").html("");
            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            $("#awp_workactivity").html(slection_options);
            for (var i = 0; i < data.length; i++) {
                $("#awp_workactivity").append(new Option(data[i].awp_work_activity_name, data[i].awp_work_activity_name));
            }
            $("#awp_physical_year_20_21").prop("disabled", true);
        }
    });
}

function php_and_fn_Info_A_Form() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_A_Form',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {
            var states = PipStateArr;
            var second_val_nine_chart = 0;
            var chckYear_arr = AWP_Financial_Year;
            FInalData_nine_chart2 = [];

            if (Agency_State == "ALL") {
                for (var j = 1; j < states.length; j++) {
                    second_val_nine_chart = 0;
                    for (var i = 0; i < data.length; i++) {
                        if (chckYear_arr == "ALL") {
                            if (data[i].state_name == states[j]) {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    second_val_nine_chart += parseFloat(data[i].expenditure_made);
                                }
                            }
                        }
                        else {
                            if (data[i].state_name == states[j] && data[i].fin_year == chckYear_arr) {

                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    second_val_nine_chart += parseFloat(data[i].expenditure_made);
                                }
                            }
                        }
                    }
                    FInalData_nine_chart2.push({
                        category: states[j],
                        second: second_val_nine_chart.toFixed(2),
                    });
                }
            }
            else {
                second_val_nine_chart = 0;
                for (var i = 0; i < data.length; i++) {
                    if (chckYear_arr == "ALL") {
                        if (data[i].state_name == Agency_State) {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                second_val_nine_chart += parseFloat(data[i].expenditure_made);
                            }
                        }
                    }
                    else {

                        if (data[i].fin_year == chckYear_arr && data[i].state_name == Agency_State) {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                second_val_nine_chart += parseFloat(data[i].expenditure_made);
                            }
                        }
                    }
                }
                FInalData_nine_chart2.push({
                    category: Agency_State,
                    second: second_val_nine_chart.toFixed(2),
                });
            }

            PHP_FN_B_Table_Info();

        }
    });
}

function PHP_FN_B_Table_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_B_Form',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {
             
            var states = PipStateArr;
            second_val_ten_chart_B = 0;
            var chckYear_arr = AWP_Financial_Year;
            FInalData_ten_chart2_B = [];
            if (Agency_State == "ALL") {
                for (var j = 1; j < states.length; j++) {
                    second_val_ten_chart_B = 0;
                    for (var i = 0; i < data.length; i++) {

                        if (chckYear_arr == "ALL") {
                            if (data[i].state_name == states[j]) {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    second_val_ten_chart_B += parseFloat(data[i].expenditure_made);
                                }
                            }
                        }
                        else {
                            if (data[i].state_name == states[j] && data[i].fin_b_year == chckYear_arr) {
                                if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                    second_val_ten_chart_B += parseFloat(data[i].expenditure_made);
                                }
                            }
                        }
                    }
                    FInalData_ten_chart2_B.push({
                        category: states[j],
                        second: second_val_ten_chart_B.toFixed(2),
                    });
                }
            }
            else {

                for (var i = 0; i < data.length; i++) {

                    if (chckYear_arr == "ALL") {
                        if (data[i].state_name == Agency_State) {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                second_val_ten_chart_B += parseFloat(data[i].expenditure_made);
                            }
                        }
                    }
                    else {
                        if (data[i].fin_b_year == chckYear_arr && data[i].state_name == Agency_State) {
                            if (data[i].expenditure_made != null && data[i].expenditure_made != "") {
                                second_val_ten_chart_B += parseFloat(data[i].expenditure_made);
                            }
                        }
                    }
                }
                FInalData_ten_chart2_B.push({
                    category: Agency_State,
                    second: second_val_ten_chart_B.toFixed(2),
                });
            }

            ReleaseMonitoring();
        }
    });
}


function ReleaseMonitoring() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/Get_Fund_Form_Info_All',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        success: function (data) {
            
            
            var states = PipStateArr;
            third_val_nine_chart = 0;
            third_val_ten_chart_B = 0;
            var chckYear_arr = AWP_Financial_Year;
            FInalData_nine_chart3 = [];
            FInalData_ten_chart3_B = [];
            var fund_general_aid_b_value_total = 0;
            if (Agency_State == "ALL") {
               
                for (var j = 1; j < states.length; j++) {
                    third_val_nine_chart = 0;
                    third_val_ten_chart_B = 0;
                    for (var i = 0; i < data.length; i++) {
                        //var chckYear_arr_finYear = data[i].fund_year.split('-');

                        if (chckYear_arr == "ALL") {
                            if (data[i].state_name == states[j]) {
                                //new                  
                                if (states[j] != 'NPMU') {
                                    if (data[i].grant_in_aid_general_a != 'GIA(General-Incentive)') {
                                        if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                                            var Total = parseFloat(data[i].fund_grant_aid_general_a);
                                            third_val_nine_chart += Total;
                                        }
                                    }
                                    if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a != "" && data[i].fund_grant_aid_capital_a != "NULL") {
                                        var Total2 = parseFloat(data[i].fund_grant_aid_capital_a);
                                        third_val_nine_chart += Total2;
                                    }
                                }
                                else {
                                    if (data[i].fund_cumalative_amt != null && data[i].fund_cumalative_amt != "") {
                                        third_val_nine_chart += parseFloat(data[i].fund_cumalative_amt);
                                    }
                                }

                                if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                    third_val_ten_chart_B += parseFloat(data[i].fund_grant_aid_general_a);
                                }
                                if (data[i].fund_general_aid_b_value != '' && data[i].fund_general_aid_b_value != null) {
                                    third_val_ten_chart_B += parseFloat(data[i].fund_general_aid_b_value);
                                }
                            }
                        }
                        else {
                            if (data[i].fund_year == chckYear_arr) {
                                if (states[j] != 'NPMU') {
                                    if (data[i].grant_in_aid_general_a != 'GIA(General-Incentive)' && data[i].state_name == states[j]) {
                                        if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                                            var Total = parseFloat(data[i].fund_grant_aid_general_a);
                                            third_val_nine_chart += Total;
                                        }
                                    }
                                    if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a != "" && data[i].state_name == states[j]) {
                                        var Total2 = parseFloat(data[i].fund_grant_aid_capital_a);
                                        third_val_nine_chart += Total2;
                                    }
                                }
                                    else {
                                        if (data[i].fund_cumalative_amt != null && data[i].fund_cumalative_amt != "" && data[i].state_name == states[j]) {
                                            third_val_nine_chart += parseFloat(data[i].fund_cumalative_amt);
                                            
                                        }
                                    }
                                    if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)' && data[i].state_name == states[j]) {
                                        third_val_ten_chart_B += parseFloat(data[i].fund_grant_aid_general_a);
                                        
                                    }
                                    if (data[i].fund_general_aid_b_value != '' && data[i].fund_general_aid_b_value != null && data[i].state_name == states[j]) {
                                        third_val_ten_chart_B += parseFloat(data[i].fund_general_aid_b_value);
                                       
                                    }
                                
                            }
                        }
                    }
                    FInalData_nine_chart3.push({
                        category: states[j],
                        third: third_val_nine_chart.toFixed(2),
                    });
                    FInalData_ten_chart3_B.push({
                        category: states[j],
                        third: third_val_ten_chart_B.toFixed(2),
                    });
                }
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    if (chckYear_arr == "ALL") {
                        if (data[i].state_name == Agency_State) {
                            //new                  
                            if (Agency_State != 'NPMU') {
                                if (data[i].grant_in_aid_general_a != 'GIA(General-Incentive)') {
                                    if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL") {
                                        var Total = parseFloat(data[i].fund_grant_aid_general_a);
                                        third_val_nine_chart += Total;
                                    }
                                }
                                if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a != "" && data[i].fund_grant_aid_capital_a != "NULL") {
                                    var Total2 = parseFloat(data[i].fund_grant_aid_capital_a);
                                    third_val_nine_chart += Total2;

                                }
                            }
                            else {
                                if (data[i].fund_cumalative_amt != null && data[i].fund_cumalative_amt != "") {
                                    third_val_nine_chart += parseFloat(data[i].fund_cumalative_amt);
                                    
                                }
                            }

                            if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)') {
                                third_val_ten_chart_B += parseFloat(data[i].fund_grant_aid_general_a);
                                
                            }
                            if (data[i].fund_general_aid_b_value != '' && data[i].fund_general_aid_b_value != null) {
                                third_val_ten_chart_B += parseFloat(data[i].fund_general_aid_b_value);
                                
                            }
                        }
                    }
                    else {
                        if (data[i].fund_year == chckYear_arr) {
                            if (Agency_State != "NPMU") {
                                if (data[i].grant_in_aid_general_a != 'GIA(General-Incentive)' && data[i].state_name == Agency_State) {
                                    if (data[i].fund_grant_aid_general_a != null && data[i].fund_grant_aid_general_a != "" && data[i].fund_grant_aid_general_a != "NULL" && data[i].state_name == Agency_State) {
                                        var Total = parseFloat(data[i].fund_grant_aid_general_a);
                                        third_val_nine_chart += Total;
                                    }
                                }
                                if (data[i].fund_grant_aid_capital_a != null && data[i].fund_grant_aid_capital_a != "" && data[i].fund_grant_aid_capital_a != "NULL" && data[i].state_name == Agency_State) {
                                    var Total2 = parseFloat(data[i].fund_grant_aid_capital_a);
                                    third_val_nine_chart += Total2;

                                }
                            }
                            else {
                                if (data[i].fund_cumalative_amt != null && data[i].fund_cumalative_amt != "" && data[i].state_name == Agency_State) {
                                    third_val_nine_chart += parseFloat(data[i].fund_cumalative_amt);
                                    
                                }
                            }

                            if (data[i].grant_in_aid_general_a == 'GIA(General-Incentive)' && data[i].state_name == Agency_State) {
                                third_val_ten_chart_B += parseFloat(data[i].fund_grant_aid_general_a);
                                
                            }
                            if (data[i].fund_general_aid_b_value != '' && data[i].fund_general_aid_b_value != null && data[i].state_name == Agency_State) {
                                third_val_ten_chart_B += parseFloat(data[i].fund_general_aid_b_value);
                                
                            }
                        }
                    }
                }
                FInalData_nine_chart3.push({
                    category: Agency_State,
                    third: third_val_nine_chart.toFixed(2),
                });
                FInalData_ten_chart3_B.push({
                    category: Agency_State,
                    third: third_val_ten_chart_B.toFixed(2),
                });
            }
            
            nine_bar_chart('nine_bar_char_id', FInalData_nine_chart1, FInalData_nine_chart2, FInalData_nine_chart3);
            ten_bar_chart('ten_bar_char_id', FInalData_ten_chart1_B, FInalData_ten_chart2_B, FInalData_ten_chart3_B);

            
            GetCategoryList();
        }
    });

}


function GetCategoryList() {
    //php_and_fn_Info_A_Form();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/Get_Fund_category',
        data: '',
        dataType: 'JSON',
        async: true,
        success: function (data) {
            Categories = "";
            Categories = data;

            Chart_eleven();
        }
    });

}

function Chart_eleven() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/php_and_fn_Info_A_Form',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {

            var chckYear_arr = AWP_Financial_Year;
            FInalData_eleven_chart_final = [];
            if (Agency_State == "ALL") {
                third_val_eleven_chart = 0;
                Chart_eleven_second_val_it = 0;
                for (var i = 0; i < Categories.length; i++) {
                    third_val_eleven_chart = 0;
                    Chart_eleven_second_val_it = 0;


                    for (var j = 0; j < data.length; j++) {
                        if (chckYear_arr == "ALL") {
                            if (data[j].activity_id == "A1.1" || data[j].activity_id == "A1.2" || data[j].activity_id == "A1.3") {
                                if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                    Chart_eleven_second_val_it += parseFloat(data[j].expenditure_made);
                                }
                            }
                            else if (Categories[i].activity_id == data[j].activity_id) {
                                if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                    third_val_eleven_chart += parseFloat(data[j].expenditure_made);
                                }
                            }
                        }
                        else {
                            if (data[j].fin_year == chckYear_arr) {
                                if (data[j].activity_id == "A1.1" || data[j].activity_id == "A1.2" || data[j].activity_id == "A1.3") {

                                    if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                        Chart_eleven_second_val_it += parseFloat(data[j].expenditure_made);
                                    }
                                }

                                else if (chckYear_arr == data[j].fin_year && Categories[i].activity_id == data[j].activity_id) {
                                    if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                        third_val_eleven_chart += parseFloat(data[j].expenditure_made);
                                    }
                                }
                            }
                        }
                    }
                    FInalData_eleven_chart_final.push({
                        country: Categories[i].category_of_procurement,
                        Expenditure: third_val_eleven_chart.toFixed(2),
                        //Expenditure: third_val_eleven_chart.toFixed(2),
                        //Allocation: Chart_eleven_second_val.toFixed(2)
                    });
                }
            }
            else {

                third_val_eleven_chart = 0;
                Chart_eleven_second_val_it = 0;
                for (var i = 0; i < Categories.length; i++) {
                    third_val_eleven_chart = 0;
                    Chart_eleven_second_val_it = 0;
                    for (var j = 0; j < data.length; j++) {
                        if (chckYear_arr == "ALL") {
                            if (data[j].activity_id == "A1.1" || data[j].activity_id == "A1.2" || data[j].activity_id == "A1.3" && data[j].state_name == Agency_State) {
                                if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                    Chart_eleven_second_val_it += parseFloat(data[j].expenditure_made);
                                }
                            }

                            else if (Categories[i].activity_id == data[j].activity_id && data[i].state_name == Agency_State) {

                                if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                    third_val_eleven_chart += parseFloat(data[j].expenditure_made);
                                }
                            }
                        }
                        else {
                            if (data[j].fin_year == chckYear_arr) {
                                if (data[j].activity_id == "A1.1" || data[j].activity_id == "A1.2" || data[j].activity_id == "A1.3" && data[j].state_name == Agency_State) {

                                    if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                        Chart_eleven_second_val_it += parseFloat(data[j].expenditure_made);
                                    }
                                }
                                else if (chckYear_arr == data[j].fin_year && Categories[i].activity_id == data[j].activity_id && data[j].state_name == Agency_State) {
                                    if (data[j].expenditure_made != null && data[j].expenditure_made != '') {
                                        third_val_eleven_chart += parseFloat(data[j].expenditure_made);
                                    }
                                }
                            }
                        }
                    }
                    FInalData_eleven_chart_final.push({
                        country: Categories[i].category_of_procurement,
                        Expenditure: third_val_eleven_chart.toFixed(2),
                        //Expenditure: third_val_eleven_chart.toFixed(2),
                        //Allocation: Chart_eleven_second_val.toFixed(2)
                    });
                }
            }
            FInalData_eleven_chart_final.unshift({
                country: "A1 Institutional Support",
                Expenditure: Chart_eleven_second_val_it.toFixed(2)
                //Expenditure: third_val_eleven_chart.toFixed(2),
                //Allocation: Chart_eleven_second_val.toFixed(2)
            });

            Chart_eleven_val2();

            if (AWP_Financial_Year == 'ALL') {
                eleven_bar_chart('eleven_bar_char_id', FInalData_eleven_chart_final, FInalData_eleven_chart_final_2);
            }
        }
    });
}
function Chart_eleven_val2() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/AWP_Info_All',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {
            
            if (AWP_Financial_Year != 'ALL') {
                FInalData_eleven_chart_final_2 = [];
                var chckYear_arr = AWP_Financial_Year;
                var Chart_eleven_second_val_it = 0;
                if (Agency_State == "ALL") {


                    for (var i = 0; i < Categories.length; i++) {
                        Chart_eleven_second_val = 0;
                        Chart_eleven_second_val_it = 0;
                        for (var j = 0; j < data.length; j++) {
                            //var chckYear_arr_finYear = data[j].fin_year;
                            if (chckYear_arr == "ALL") {

                                if (data[j].awp_activity_id == "A1.1" || data[j].awp_activity_id == "A1.2" || data[j].awp_activity_id == "A1.3") {
                                    if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                        Chart_eleven_second_val_it += parseFloat(data[j].awp_financial_year_20_21);
                                    }
                                }
                                else if (Categories[i].activity_id == data[j].awp_activity_id) {

                                    if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                        Chart_eleven_second_val += parseFloat(data[j].awp_financial_year_20_21);
                                    }
                                }

                            }
                            else {

                                if (chckYear_arr == data[j].awp_fin_year) {
                                    if (data[j].awp_activity_id == "A1.1" || data[j].awp_activity_id == "A1.2" || data[j].awp_activity_id == "A1.3") {
                                        if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                            Chart_eleven_second_val_it += parseFloat(data[j].awp_financial_year_20_21);
                                        }
                                    }
                                    else if (Categories[i].activity_id == data[j].awp_activity_id) {
                                        if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                            Chart_eleven_second_val += parseFloat(data[j].awp_financial_year_20_21);
                                        }
                                    }
                                }
                            }
                        }

                        //pip_A2_val_a
                        //pip_A3_val_a
                        if (chckYear_arr == "ALL") {
                            if (Categories[i].activity_id == 'A2.1' || Categories[i].activity_id == 'A3.1') {
                                if (Categories[i].activity_id == 'A2.1') {
                                    FInalData_eleven_chart_final_2.push({
                                        country: Categories[i].category_of_procurement,
                                        Allocation: parseFloat(pip_A2_val_a)
                                        //Expenditure: third_val_eleven_chart.toFixed(2),
                                        //Allocation: Chart_eleven_second_val.toFixed(2)
                                    });
                                }
                                if (Categories[i].activity_id == 'A3.1') {

                                    FInalData_eleven_chart_final_2.push({
                                        country: Categories[i].category_of_procurement,
                                        Allocation: parseFloat(pip_A3_val_a)
                                        //Expenditure: third_val_eleven_chart.toFixed(2),
                                        //Allocation: Chart_eleven_second_val.toFixed(2)
                                    });
                                }
                            }
                            else {
                                FInalData_eleven_chart_final_2.push({
                                    country: Categories[i].category_of_procurement,
                                    Allocation: Chart_eleven_second_val
                                    //Expenditure: third_val_eleven_chart.toFixed(2),
                                    //Allocation: Chart_eleven_second_val.toFixed(2)
                                });
                            }
                        }
                        else {
                            FInalData_eleven_chart_final_2.push({
                                country: Categories[i].category_of_procurement,
                                Allocation: Chart_eleven_second_val
                                //Expenditure: third_val_eleven_chart.toFixed(2),
                                //Allocation: Chart_eleven_second_val.toFixed(2)
                            });
                        }
                    }
                }
                else {

                    Chart_eleven_second_val = 0;
                    Chart_eleven_second_val_it = 0;

                    for (var i = 0; i < Categories.length; i++) {
                        Chart_eleven_second_val = 0;
                        Chart_eleven_second_val_it = 0;
                        for (var j = 0; j < data.length; j++) {
                            //var chckYear_arr_finYear = data[j].fin_year;
                            if (chckYear_arr == "ALL") {

                                if (data[j].awp_activity_id == "A1.1" || data[j].awp_activity_id == "A1.2" || data[j].awp_activity_id == "A1.3" && data[j].state_name == Agency_State) {
                                    if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                        Chart_eleven_second_val_it += parseFloat(data[j].awp_financial_year_20_21);
                                    }
                                }
                                else if (Categories[i].activity_id == data[j].awp_activity_id && data[j].state_name == Agency_State) {

                                    if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                        Chart_eleven_second_val += parseFloat(data[j].awp_financial_year_20_21);
                                    }
                                }

                            }
                            else {
                                if (chckYear_arr == data[j].awp_fin_year) {
                                    if (data[j].awp_activity_id == "A1.1" || data[j].awp_activity_id == "A1.2" || data[j].awp_activity_id == "A1.3" && data[j].state_name == Agency_State) {

                                        if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                            Chart_eleven_second_val_it += parseFloat(data[j].awp_financial_year_20_21);
                                        }
                                    }
                                    else if (Categories[i].activity_id == data[j].awp_activity_id && data[j].state_name == Agency_State) {

                                        if (data[j].awp_financial_year_20_21 != null && data[j].awp_financial_year_20_21 != '') {
                                            Chart_eleven_second_val += parseFloat(data[j].awp_financial_year_20_21);
                                        }
                                    }
                                }
                            }
                        }

                        if (chckYear_arr == "ALL") {
                            if (Categories[i].activity_id == 'A2.1' || Categories[i].activity_id == 'A3.1') {
                                if (Categories[i].activity_id == 'A2.1') {
                                    FInalData_eleven_chart_final_2.push({
                                        country: Categories[i].category_of_procurement,
                                        Allocation: parseFloat(pip_A2_val_a)
                                        //Expenditure: third_val_eleven_chart.toFixed(2),
                                        //Allocation: Chart_eleven_second_val.toFixed(2)
                                    });
                                }
                                if (Categories[i].activity_id == 'A3.1') {

                                    FInalData_eleven_chart_final_2.push({
                                        country: Categories[i].category_of_procurement,
                                        Allocation: parseFloat(pip_A3_val_a)
                                        //Expenditure: third_val_eleven_chart.toFixed(2),
                                        //Allocation: Chart_eleven_second_val.toFixed(2)
                                    });
                                }
                            }
                            else {
                                FInalData_eleven_chart_final_2.push({
                                    country: Categories[i].category_of_procurement,
                                    Allocation: Chart_eleven_second_val
                                    //Expenditure: third_val_eleven_chart.toFixed(2),
                                    //Allocation: Chart_eleven_second_val.toFixed(2)
                                });
                            }
                        }
                        else {
                            FInalData_eleven_chart_final_2.push({
                                country: Categories[i].category_of_procurement,
                                Allocation: Chart_eleven_second_val
                                //Expenditure: third_val_eleven_chart.toFixed(2),
                                //Allocation: Chart_eleven_second_val.toFixed(2)
                            });
                        }
                    }
                }

                FInalData_eleven_chart_final_2.unshift({
                    country: "A1 Institutional Support",
                    Allocation: Chart_eleven_second_val_it
                    //Expenditure: third_val_eleven_chart.toFixed(2),
                    //Allocation: Chart_eleven_second_val.toFixed(2)
                });

                //console.log(FInalData_eleven_chart_final);
                //console.log(FInalData_eleven_chart_final_2);
                eleven_bar_chart('eleven_bar_char_id', FInalData_eleven_chart_final, FInalData_eleven_chart_final_2);
            }
            
            
        }
    });
}


