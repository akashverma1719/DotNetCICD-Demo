var states = "";
var year = "";
var Agency_State = "";
FInalData_seven_to_eleven_Barchart = [];

FInalData_one_to_six_Barchart = [];

FInalData_one_to_six_Barchart_achieve_works = [];

FInalData_one_to_six_Barchart_achieve = [];


FInalData_one_to_six_Barchart_target = [];

$(document).ready(function () {
    year = $('#AWP_Financial_Year').val();
    Agency_State = $('#state').val();
    //PIP_Agency_Info1();

});



function PIP_Agency_Info1() {

    var year = $('#AWP_Financial_Year').val();
    Agency_State = $('#state').val();
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


            //PipStateArr.push("ALL");
            //PipStateArr.push("NPMU");
            //for (var i = 0; i < data.length; i++) {
            //    if (data[i].observation_type == "pip") {
            //        PipStateArr.push(data[i].state_name)
            //    }
            //}

            //PipStateArr.sort();
            //PipStateArr.forEach((val) => {
            //    slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            //});
            //$('#state').html(slection_options);

            ///End pip state binding

            //awp state binding
            var AwpStateArr = [];

            AwpStateArr.push("ALL");
            AwpStateArr.push("NPMU");
            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "awp") {
                    AwpStateArr.push(data[i].state_name)
                }
            }

            AwpStateArr.sort();
            states = AwpStateArr;


            // SessionInfo1();
            DLI_Data();

        }
    });
}
function DLI_Data() {
    var yeardd = $('#AWP_Financial_Year').val();
    Agency_State = $('#state').val();

    if (Agency_State == "0") {
        Agency_State = "ALL";
    }
    else {
        Agency_State = $("#state").val();
    }
    if (yeardd == "0") {
        yeardd = "ALL";
    }
    //else {
    //    year = $("#AWP_Financial_Year").val();
    //}
    //var year = ("#id").val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Dashboard/DLI_Data",
        data: "",
        dataType: 'JSON',
        async: true,
        success: function (data) {
            states;
            var DLI1_Target = 0;
            var DLI1_Achievement = 0;
            var DLI1_Water_Level = 0;
            var DLI1_Water_Quality = 0;
            var DLI1_Water_HGR = 0;
            var DLI2_Target = 0;
            var DLI2_Achievement = 0;
            var DLI3_Target = 0;
            var DLI3_Achievement = 0;
            var DLI4_Target = 0;
            var DLI4_Achievement = 0;
            var DLI5_Target = 0;
            var DLI5_Achievement = 0;
            FInalData_seven_to_eleven_Barchart = [];
            if (Agency_State == "ALL") {
                for (var j = 1; j < states.length; j++) {
                    DLI1_Target = 0;
                    DLI1_Achievement = 0;
                    DLI1_Water_Level = 0;
                    DLI1_Water_Quality = 0;
                    DLI1_Water_HGR = 0;
                    DLI2_Target = 0;
                    DLI2_Achievement = 0;
                    DLI3_Target = 0;
                    DLI3_Achievement = 0;
                    DLI4_Target = 0;
                    DLI4_Achievement = 0;
                    DLI5_Target = 0;
                    DLI5_Achievement = 0;
                    for (var i = 0; i < data.length; i++) {
                        if (yeardd == "ALL") {
                            if (data[i].Type == "DLI1" && data[i].Target != null && data[i].Achievement != null && states[j] == data[i].State) {
                                DLI1_Target = DLI1_Target + parseInt(data[i].Target);
                                DLI1_Achievement = DLI1_Achievement + parseInt(data[i].Achievement);
                                DLI1_Water_Level = DLI1_Water_Level + parseInt(data[i].WaterLevel_Achievement);
                                DLI1_Water_Quality = DLI1_Water_Quality + parseInt(data[i].WaterQuality_Achievement);
                                DLI1_Water_HGR = DLI1_Water_HGR + parseInt(data[i].HGR_Achievement);
                            }
                            else if (data[i].Type == "DLI2" && data[i].Target != null && data[i].Achievement != null && states[j] == data[i].State) {
                                DLI2_Target = DLI2_Target + parseInt(data[i].Target);
                                DLI2_Achievement = DLI2_Achievement + parseInt(data[i].Achievement);
                            }
                            else if (data[i].Type == "DLI3" && data[i].Target != null && data[i].Achievement != null && states[j] == data[i].State) {
                                DLI3_Target = DLI3_Target + parseFloat(data[i].Target);
                                DLI3_Achievement = DLI3_Achievement + parseFloat(data[i].Achievement);
                            }
                            else if (data[i].Type == "DLI4" && data[i].Target != null && data[i].Achievement != null && states[j] == data[i].State) {
                                DLI4_Target = DLI4_Target + parseFloat(data[i].Target);
                                DLI4_Achievement = DLI4_Achievement + parseFloat(data[i].Achievement);
                            }
                            else if (data[i].Type == "DLI5" && data[i].Target != null && data[i].Achievement != null && states[j] == data[i].State) {
                                DLI5_Target = DLI5_Target + parseFloat(data[i].Target);
                                DLI5_Achievement = DLI5_Achievement + parseFloat(data[i].Achievement);
                            }

                        }
                        else {
                            if (data[i].Type == "DLI1" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && states[j] == data[i].State) {
                                DLI1_Target = DLI1_Target + parseInt(data[i].Target);
                                DLI1_Achievement = DLI1_Achievement + parseInt(data[i].Achievement);
                                DLI1_Water_Level = DLI1_Water_Level + parseInt(data[i].WaterLevel_Achievement);
                                DLI1_Water_Quality = DLI1_Water_Quality + parseInt(data[i].WaterQuality_Achievement);
                                DLI1_Water_HGR = DLI1_Water_HGR + parseInt(data[i].HGR_Achievement);
                            }
                            else if (data[i].Type == "DLI2" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && states[j] == data[i].State) {
                                DLI2_Target = DLI2_Target + parseInt(data[i].Target);
                                DLI2_Achievement = DLI2_Achievement + parseInt(data[i].Achievement);
                            }
                            else if (data[i].Type == "DLI3" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && states[j] == data[i].State) {
                                DLI3_Target = DLI3_Target + parseFloat(data[i].Target);
                                DLI3_Achievement = DLI3_Achievement + parseFloat(data[i].Achievement);
                            }
                            else if (data[i].Type == "DLI4" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && states[j] == data[i].State) {
                                DLI4_Target = DLI4_Target + parseFloat(data[i].Target);
                                DLI4_Achievement = DLI4_Achievement + parseFloat(data[i].Achievement);
                            }
                            else if (data[i].Type == "DLI5" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && states[j] == data[i].State) {
                                DLI5_Target = DLI5_Target + parseFloat(data[i].Target);
                                DLI5_Achievement = DLI5_Achievement + parseFloat(data[i].Achievement);
                            }
                        }
                    }
                    var myString = states[j];
                    var parts = myString.split("_");
                    var value = parts[0];
                    FInalData_seven_to_eleven_Barchart.push({
                        state: value,
                        DLI1_Target: DLI1_Target.toFixed(2),
                        DLI1_Achievement: DLI1_Achievement.toFixed(2),
                        DLI1_Water_Level: DLI1_Water_Level.toFixed(2),
                        DLI1_Water_Quality: DLI1_Water_Quality.toFixed(2),
                        DLI1_Water_HGR: DLI1_Water_HGR.toFixed(2),

                        DLI2_Target: DLI2_Target.toFixed(2),
                        DLI2_Achievement: DLI2_Achievement.toFixed(2),

                        DLI3_Target: DLI3_Target.toFixed(2),
                        DLI3_Achievement: DLI3_Achievement.toFixed(2),

                        DLI4_Target: DLI4_Target.toFixed(2),
                        DLI4_Achievement: DLI4_Achievement.toFixed(2),

                        DLI5_Target: DLI5_Target.toFixed(2),
                        DLI5_Achievement: DLI5_Achievement.toFixed(2),
                    });

                }
            }
            else {

                for (var i = 0; i < data.length; i++) {
                    if (yeardd == "ALL") {
                        if (data[i].Type == "DLI1" && data[i].Target != null && data[i].Achievement != null && Agency_State == data[i].State) {
                            DLI1_Target = DLI1_Target + parseInt(data[i].Target);
                            DLI1_Achievement = DLI1_Achievement + parseInt(data[i].Achievement);
                            DLI1_Water_Level = DLI1_Water_Level + parseInt(data[i].WaterLevel_Achievement);
                            DLI1_Water_Quality = DLI1_Water_Quality + parseInt(data[i].WaterQuality_Achievement);
                            DLI1_Water_HGR = DLI1_Water_HGR + parseInt(data[i].HGR_Achievement);
                        }
                        else if (data[i].Type == "DLI2" && data[i].Target != null && data[i].Achievement != null && Agency_State == data[i].State) {
                            DLI2_Target = DLI2_Target + parseInt(data[i].Target);
                            DLI2_Achievement = DLI2_Achievement + parseInt(data[i].Achievement);
                        }
                        else if (data[i].Type == "DLI3" && data[i].Target != null && data[i].Achievement != null && Agency_State == data[i].State) {
                            DLI3_Target = DLI3_Target + parseFloat(data[i].Target);
                            DLI3_Achievement = DLI3_Achievement + parseFloat(data[i].Achievement);
                        }
                        else if (data[i].Type == "DLI4" && data[i].Target != null && data[i].Achievement != null && Agency_State == data[i].State) {
                            DLI4_Target = DLI4_Target + parseFloat(data[i].Target);
                            DLI4_Achievement = DLI4_Achievement + parseFloat(data[i].Achievement);
                        }
                        else if (data[i].Type == "DLI5" && data[i].Target != null && data[i].Achievement != null && Agency_State == data[i].State) {
                            DLI5_Target = DLI5_Target + parseFloat(data[i].Target);
                            DLI5_Achievement = DLI5_Achievement + parseFloat(data[i].Achievement);
                        }

                    }
                    else {
                        if (data[i].Type == "DLI1" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && Agency_State == data[i].State) {
                            DLI1_Target = DLI1_Target + parseInt(data[i].Target);
                            DLI1_Achievement = DLI1_Achievement + parseInt(data[i].Achievement);
                            DLI1_Water_Level = DLI1_Water_Level + parseInt(data[i].WaterLevel_Achievement);
                            DLI1_Water_Quality = DLI1_Water_Quality + parseInt(data[i].WaterQuality_Achievement);
                            DLI1_Water_HGR = DLI1_Water_HGR + parseInt(data[i].HGR_Achievement);
                        }
                        else if (data[i].Type == "DLI2" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && Agency_State == data[i].State) {
                            DLI2_Target = DLI2_Target + parseInt(data[i].Target);
                            DLI2_Achievement = DLI2_Achievement + parseInt(data[i].Achievement);
                        }
                        else if (data[i].Type == "DLI3" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && Agency_State == data[i].State) {
                            DLI3_Target = DLI3_Target + parseFloat(data[i].Target);
                            DLI3_Achievement = DLI3_Achievement + parseFloat(data[i].Achievement);
                        }
                        else if (data[i].Type == "DLI4" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && Agency_State == data[i].State) {
                            DLI4_Target = DLI4_Target + parseFloat(data[i].Target);
                            DLI4_Achievement = DLI4_Achievement + parseFloat(data[i].Achievement);
                        }
                        else if (data[i].Type == "DLI5" && data[i].Target != null && data[i].Achievement != null && data[i].Year == yeardd && Agency_State == data[i].State) {
                            DLI5_Target = DLI5_Target + parseFloat(data[i].Target);
                            DLI5_Achievement = DLI5_Achievement + parseFloat(data[i].Achievement);
                        }
                    }
                }
                var myString = Agency_State;
                var parts = myString.split("_");
                var value = parts[0];
                FInalData_seven_to_eleven_Barchart.push({
                    state: value,
                    DLI1_Target: DLI1_Target.toFixed(2),
                    DLI1_Achievement: DLI1_Achievement.toFixed(2),
                    DLI1_Water_Level: DLI1_Water_Level.toFixed(2),
                    DLI1_Water_Quality: DLI1_Water_Quality.toFixed(2),
                    DLI1_Water_HGR: DLI1_Water_HGR.toFixed(2),

                    DLI2_Target: DLI2_Target.toFixed(2),
                    DLI2_Achievement: DLI2_Achievement.toFixed(2),

                    DLI3_Target: DLI3_Target.toFixed(2),
                    DLI3_Achievement: DLI3_Achievement.toFixed(2),

                    DLI4_Target: DLI4_Target.toFixed(2),
                    DLI4_Achievement: DLI4_Achievement.toFixed(2),

                    DLI5_Target: DLI5_Target.toFixed(2),
                    DLI5_Achievement: DLI5_Achievement.toFixed(2),
                });

            }
            /*seven_bar_chart('seven_bar_char_id_dli1_id', FInalData_seven_to_eleven_Barchart);*/
            seven_bar_chart(FInalData_seven_to_eleven_Barchart);
            eight_bar_chart('eight_bar_char_id_dli2_id', FInalData_seven_to_eleven_Barchart);
            nine_bar_chart_DLI3('nine_bar_char_dli3_id', FInalData_seven_to_eleven_Barchart);
            ten_bar_chart_DLI4('ten_bar_char_dli4_id', FInalData_seven_to_eleven_Barchart);
            eleven_bar_chart_DLI5('eleven_bar_char_dli5_id', FInalData_seven_to_eleven_Barchart);
            
            //   console.log(DLI3_Target);
            physicalmonitoring_Data_info();
        },
        error: function () {
            alert("error in getting data");
        }

    });
}


function physicalmonitoring_Data_info() {

    var yearaa = $('#AWP_Financial_Year').val();
    Agency_State = $('#state').val();

    if (Agency_State == "0") {
        Agency_State = "ALL";
    }
    else {
        Agency_State = $("#state").val();
    }
    if (yearaa == "0") {
        yearaa = "ALL";
    }

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/Dashboard/physicalmonitoring_Data",
        data: "",
        dataType: 'JSON',

        async: true,
        success: function (data) {

            states;

            var Work_Achievement = 0;
            var WaterFlow_Achievement = 0;
            var WaterQuality_Achievement = 0;
            var DigitalWater_Achievement = 0;
            var DigitalAnalog_Achievement = 0;
            var Rain_Achievement = 0;
            var Training_Achievement_state = 0;
            var Training_Achievement_dis = 0;
            var Training_Achievement_bl = 0;
            var Training_Achievement_gp = 0;

            FInalData_one_to_six_Barchart = [];
            FInalData_one_to_six_Barchart_achieve = [];
            FInalData_one_to_six_Barchart_target = [];
            FInalData_one_to_six_Barchart_achieve_works = [];

            if (Agency_State == "ALL") {
                for (var j = 1; j < states.length; j++) {
                    Work_Achievement = 0;
                    WaterFlow_Achievement = 0;
                    WaterQuality_Achievement = 0;
                    DigitalWater_Achievement = 0;
                    DigitalAnalog_Achievement = 0;
                    Rain_Achievement = 0;
                    Training_Achievement_state = 0;
                    Training_Achievement_state = 0;

                    Training_Achievement_dis = 0;

                    Training_Achievement_bl = 0;

                    Training_Target_gp = 0;
                    Training_Achievement_gp = 0;

                    for (var i = 0; i < data.length; i++) {
                        if (yearaa == "ALL") {

                            if ((data[i].support_item_code == "A3.1.01") && data[i].support_item_procured != null && states[j] == data[i].state_name) {
                                Work_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.4" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                WaterFlow_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.5" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                WaterQuality_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.1" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                DigitalWater_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.2" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                DigitalAnalog_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.3" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                Rain_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.04" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                Training_Achievement_gp += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.01" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                Training_Achievement_state += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.02" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                Training_Achievement_dis += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.03" && data[i].support_item_procured != null && states[j] == data[i].state_name) {

                                Training_Achievement_bl += parseInt(data[i].support_item_procured);
                            }

                        }
                        else {
                            if ((data[i].support_item_code == "A3.1.01") && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                Work_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.4" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                WaterFlow_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.5" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                WaterQuality_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.1" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                DigitalWater_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.2" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                DigitalAnalog_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A2.1.3" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                Rain_Achievement += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.04" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                Training_Achievement_gp += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.01" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                Training_Achievement_state += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.02" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                Training_Achievement_dis += parseInt(data[i].support_item_procured);
                            }
                            else if (data[i].support_item_code == "A5.1.03" && data[i].support_item_procured != null && data[i].support_year == yearaa && states[j] == data[i].state_name) {

                                Training_Achievement_bl += parseInt(data[i].support_item_procured);
                            }
                        }
                    }

                    var myString = states[j];
                    var parts = myString.split("_");
                    var value = parts[0];
                    FInalData_one_to_six_Barchart_achieve_works.push({
                        state: value,
                        Work_Achievement: Work_Achievement.toFixed(2),
                        WaterFlow_Achievement: WaterFlow_Achievement.toFixed(2),
                        WaterQuality_Achievement: WaterQuality_Achievement.toFixed(2),
                        DigitalWater_Achievement: DigitalWater_Achievement.toFixed(2),
                        DigitalAnalog_Achievement: DigitalAnalog_Achievement.toFixed(2),
                        Rain_Achievement: Rain_Achievement.toFixed(2),
                    });
                    FInalData_one_to_six_Barchart_achieve.push({
                        state: value,
                        Training_Achievement_state: Training_Achievement_state.toFixed(2),
                        Training_Achievement_dis: Training_Achievement_dis.toFixed(2),
                        Training_Achievement_bl: Training_Achievement_bl.toFixed(2),
                        Training_Achievement_gp: Training_Achievement_gp.toFixed(2),
                    });
                    console.log(FInalData_one_to_six_Barchart_achieve_works);
                }
            }
            else {

                for (var i = 0; i < data.length; i++) {
                    if (yearaa == "ALL") {

                        if ((data[i].support_item_code == "A3.1.01") && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            Work_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.4" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            WaterFlow_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.5" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            WaterQuality_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.1" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            DigitalWater_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.2" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            DigitalAnalog_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.3" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            Rain_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.04" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            Training_Achievement_gp += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.01" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            Training_Achievement_state += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.02" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            Training_Achievement_dis += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.03" && data[i].support_item_procured != null && Agency_State == data[i].state_name) {

                            Training_Achievement_bl += parseInt(data[i].support_item_procured);
                        }

                    }
                    else {
                        if ((data[i].support_item_code == "A3.1.01") && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            Work_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.4" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            WaterFlow_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.5" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            WaterQuality_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.1" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            DigitalWater_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.2" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            DigitalAnalog_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A2.1.3" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            Rain_Achievement += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.04" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            Training_Achievement_gp += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.01" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            Training_Achievement_state += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.02" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            Training_Achievement_dis += parseInt(data[i].support_item_procured);
                        }
                        else if (data[i].support_item_code == "A5.1.03" && data[i].support_item_procured != null && data[i].support_year == yearaa && Agency_State == data[i].state_name) {

                            Training_Achievement_bl += parseInt(data[i].support_item_procured);
                        }
                    }
                }
                var myString = Agency_State;
                var parts = myString.split("_");
                var value = parts[0];

                FInalData_one_to_six_Barchart_achieve_works.push({
                    state: value,
                    Work_Achievement: Work_Achievement.toFixed(2),
                    WaterFlow_Achievement: WaterFlow_Achievement.toFixed(2),
                    WaterQuality_Achievement: WaterQuality_Achievement.toFixed(2),
                    DigitalWater_Achievement: DigitalWater_Achievement.toFixed(2),
                    DigitalAnalog_Achievement: DigitalAnalog_Achievement.toFixed(2),
                    Rain_Achievement: Rain_Achievement.toFixed(2),
                });

                FInalData_one_to_six_Barchart_achieve.push({
                    state: value,
                    Training_Achievement_state: Training_Achievement_state.toFixed(2),
                    Training_Achievement_dis: Training_Achievement_dis.toFixed(2),
                    Training_Achievement_bl: Training_Achievement_bl.toFixed(2),
                    Training_Achievement_gp: Training_Achievement_gp.toFixed(2),
                });
                console.log(FInalData_one_to_six_Barchart_achieve_works);
            }

            var yearda = $('#AWP_Financial_Year').val();
            if (yearda == 'ALL') {
                Awp_for_target_all();
            }
            else {
                Awp_for_target_year();
            }
            //first_bar_chart('first_bar_char_id', FInalData_one_to_six_Barchart_achieve_works);
            //second_bar_chart('second_bar_char_id', FInalData_one_to_six_Barchart);
            //third_bar_chart('third_bar_char_id', FInalData_one_to_six_Barchart);
            //third_bar_chart_rain('third_bar_char_rain_id', FInalData_one_to_six_Barchart);
            //fourth_bar_chart('fourth_bar_char_id', FInalData_one_to_six_Barchart);
            //fivth_bar_chart('fivth_bar_char_id', FInalData_one_to_six_Barchart);
            //sixth_bar_chart('sixth_bar_char_id', FInalData_one_to_six_Barchart);
            //$('.loader').hide();
            //   console.log(DLI3_Target);
        },
        error: function () {
            alert("error in getting data");
        }

    });


}

function Awp_for_target_all() {
    
    var yearbb = $('#AWP_Financial_Year').val();
    Agency_State = $('#state').val();

    if (Agency_State == "0") {
        Agency_State = "ALL";
    }
    else {
        Agency_State = $("#state").val();
    }
    if (yearbb == "0") {
        yearbb = "ALL";
    }

    //var year = ("#id").val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/PIP_Info',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {
            
            states;
            var Work_Target = 0;
            var WaterFlow_Target = 0;
            var WaterQuality_Target = 0;
            var DigitalWater_Target = 0;
            var DigitalAnalog_Target = 0;
            var Rain_Target = 0;
            var Training_Target_state = 0;
            var Training_Target_dis = 0;
            var Training_Target_bl = 0;
            var Training_Target_gp = 0;
            FInalData_one_to_six_Barchart = [];
            FInalData_one_to_six_Barchart_target = [];
            if (data.length > 0) {

                if (Agency_State == "ALL") {

                    for (var j = 1; j < states.length; j++) {
                        Work_Target = 0;
                        WaterFlow_Target = 0;
                        WaterQuality_Target = 0;
                        DigitalWater_Target = 0;
                        DigitalAnalog_Target = 0;
                        Rain_Target = 0;
                        Training_Target_state = 0;
                        Training_Target_dis = 0;
                        Training_Target_bl = 0;
                        Training_Target_gp = 0;


                        for (var i = 0; i < data.length; i++) {
                            if (yearbb == "ALL") {
                                if (data[i].pip_item_code == "A3.1.01" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    Work_Target = Work_Target += parseInt(data[i].pip_total);
                                }
                                else if (data[i].pip_item_code == "A2.1.4" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    WaterFlow_Target = WaterFlow_Target + parseInt(data[i].pip_total);
                                }
                                else if (data[i].pip_item_code == "A2.1.5" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    WaterQuality_Target = WaterQuality_Target + parseInt(data[i].pip_total);

                                }
                                else if (data[i].pip_item_code == "A2.1.1" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    DigitalWater_Target = DigitalWater_Target + parseInt(data[i].pip_total);

                                }
                                else if (data[i].pip_item_code == "A2.1.2" && data[i].pip_total != null && states[j] == data[i].state_name) {

                                    DigitalAnalog_Target = DigitalAnalog_Target + parseInt(data[i].pip_total);

                                }
                                else if (data[i].pip_item_code == "A2.1.3" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    Rain_Target = Rain_Target + parseInt(data[i].pip_total);

                                }

                                else if (data[i].pip_item_code == "A5.1.04" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    Training_Target_gp += parseInt(data[i].pip_total);
                                }

                                else if (data[i].pip_item_code == "A5.1.01" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    Training_Target_state += parseInt(data[i].pip_total);
                                }

                                else if (data[i].pip_item_code == "A5.1.02" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    Training_Target_dis += parseInt(data[i].pip_total);
                                }

                                else if (data[i].pip_item_code == "A5.1.03" && data[i].pip_total != null && states[j] == data[i].state_name) {
                                    Training_Target_bl += parseInt(data[i].pip_total);
                                }

                            }
                        }
                        var myString = states[j];
                        var parts = myString.split("_");
                        var value = parts[0];

                        FInalData_one_to_six_Barchart.push({
                            state: value,
                            Work_Target: Work_Target.toFixed(2),
                            WaterFlow_Target: WaterFlow_Target.toFixed(2),
                            WaterQuality_Target: WaterQuality_Target.toFixed(2),
                            DigitalWater_Target: DigitalWater_Target.toFixed(2),
                            DigitalAnalog_Target: DigitalAnalog_Target.toFixed(2),
                            Rain_Target: Rain_Target.toFixed(2),
                        });
                        FInalData_one_to_six_Barchart_target.push({
                            state: value,
                            Training_Target_state: Training_Target_state.toFixed(2),
                            Training_Target_dis: Training_Target_dis.toFixed(2),
                            Training_Target_bl: Training_Target_bl.toFixed(2),
                            Training_Target_gp: Training_Target_gp.toFixed(2),
                        });
                    }
                }
                else {
                    Work_Target = 0;
                    WaterFlow_Target = 0;
                    WaterQuality_Target = 0;
                    DigitalWater_Target = 0;
                    DigitalAnalog_Target = 0;
                    Rain_Target = 0;
                    Training_Target_state = 0;
                    Training_Target_dis = 0;
                    Training_Target_bl = 0;
                    Training_Target_gp = 0;


                    for (var i = 0; i < data.length; i++) {

                        if (yearbb == "ALL") {

                            if (data[i].pip_item_code == "A3.1.01" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                Work_Target = Work_Target += parseInt(data[i].pip_total);
                            }

                            else if (data[i].pip_item_code == "A2.1.4" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                WaterFlow_Target = WaterFlow_Target + parseInt(data[i].pip_total);

                            }
                            else if (data[i].pip_item_code == "A2.1.5" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                WaterQuality_Target = WaterQuality_Target + parseInt(data[i].pip_total);

                            }
                            else if (data[i].pip_item_code == "A2.1.1" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                DigitalWater_Target = DigitalWater_Target + parseInt(data[i].pip_total);

                            }

                            else if (data[i].pip_item_code == "A2.1.2" && data[i].pip_total != null && Agency_State == data[i].state_name) {

                                DigitalAnalog_Target = DigitalAnalog_Target + parseInt(data[i].pip_total);

                            }
                            else if (data[i].pip_item_code == "A2.1.3" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                Rain_Target = Rain_Target + parseInt(data[i].pip_total);

                            }
                            else if (data[i].pip_item_code == "A5.1.04" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                Training_Target_gp = Training_Target_gp + parseInt(data[i].pip_total);
                            }

                            else if (data[i].pip_item_code == "A5.1.01" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                Training_Target_state = Training_Target_state + parseInt(data[i].pip_total);
                            }

                            else if (data[i].pip_item_code == "A5.1.02" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                Training_Target_dis = Training_Target_dis + parseInt(data[i].pip_total);
                            }

                            else if (data[i].pip_item_code == "A5.1.03" && data[i].pip_total != null && Agency_State == data[i].state_name) {
                                Training_Target_bl = Training_Target_bl + parseInt(data[i].pip_total);
                            }

                        }
                    }
                    var myString = Agency_State;
                    var parts = myString.split("_");
                    var value = parts[0];
                    FInalData_one_to_six_Barchart.push({
                        state: value,
                        Work_Target: Work_Target.toFixed(2),
                        WaterFlow_Target: WaterFlow_Target.toFixed(2),
                        WaterQuality_Target: WaterQuality_Target.toFixed(2),
                        DigitalWater_Target: DigitalWater_Target.toFixed(2),
                        DigitalAnalog_Target: DigitalAnalog_Target.toFixed(2),
                        Rain_Target: Rain_Target.toFixed(2),
                        Training_Target_state: Training_Target_state.toFixed(2),
                        Training_Target_dis: Training_Target_dis.toFixed(2),
                        Training_Target_bl: Training_Target_bl.toFixed(2),
                        Training_Target_gp: Training_Target_gp.toFixed(2),
                    });
                    FInalData_one_to_six_Barchart_target.push({
                        state: value,
                        Training_Target_state: Training_Target_state.toFixed(2),
                        Training_Target_dis: Training_Target_dis.toFixed(2),
                        Training_Target_bl: Training_Target_bl.toFixed(2),
                        Training_Target_gp: Training_Target_gp.toFixed(2),
                    });


                }

                first_bar_chart('first_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                second_bar_chart('second_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                third_bar_chart('third_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                third_bar_chart_rain('third_bar_char_rain_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                fourth_bar_chart('fourth_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                fivth_bar_chart('fivth_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                sixth_bar_chart_gp('sixth_bar_char_gp_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
                sixth_bar_chart_block('sixth_bar_char_bl_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
                sixth_bar_chart_dis('sixth_bar_char_dis_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
                sixth_bar_chart_state('sixth_bar_char_st_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
            }
            $('.loader').hide();
            //   console.log(DLI3_Target);

        },
        error: function () {
            alert("error in getting data");
        }

    });
}

function Awp_for_target_year() {

    var yearcc = $('#AWP_Financial_Year').val();
    Agency_State = $('#state').val();

    if (Agency_State == "0") {
        Agency_State = "ALL";
    }
    else {
        Agency_State = $("#state").val();
    }
    if (yearcc == "0") {
        yearcc = "ALL";
    }

    //var year = ("#id").val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dashboard/AWP_Info_All',
        data: { 'StateName': Agency_State },
        dataType: 'JSON',
        async: true,
        success: function (data) {
            
            states;
            var Work_Target = 0;
            var WaterFlow_Target = 0;
            var WaterQuality_Target = 0;
            var DigitalWater_Target = 0;
            var DigitalAnalog_Target = 0;
            var Rain_Target = 0;
            var Training_Target_state = 0;
            var Training_Target_dis = 0;
            var Training_Target_bl = 0;
            var Training_Target_gp = 0;
            var Latest_year_Work_Target = 0;
            var Latest_year_WaterFlow_Target = 0;
            var Latest_year_WaterQuality_Target = 0;
            var Latest_year_DigitalWater_Target = 0;
            var Latest_year_Rain_Target = 0;
            var Latest_year_final_Work_Target = 0;
            var Latest_year_final_WaterFlow_Target = 0;
            var Latest_year_final_WaterQuality_Target = 0;
            var Latest_year_final_DigitalWater_Target = 0;
            var Latest_year_DigitalAnalog_Target = 0;
            var Latest_year_final_DigitalAnalog_Target = 0;
            var Latest_year_final_Rain_Target = 0;
            FInalData_one_to_six_Barchart = [];
            FInalData_one_to_six_Barchart_target = [];
            if (data.length > 0) {

                if (Agency_State == "ALL") {

                    for (var j = 1; j < states.length; j++) {
                        Work_Target = 0;
                        WaterFlow_Target = 0;
                        WaterQuality_Target = 0;
                        DigitalWater_Target = 0;
                        DigitalAnalog_Target = 0;
                        Rain_Target = 0;
                        Training_Target_state = 0;
                        Training_Target_dis = 0;
                        Training_Target_bl = 0;
                        Training_Target_gp = 0;

                        if (yearcc == "ALL") {
                            Latest_year_final = 0;
                            Latest_year_final_Work_Target = 0;
                            Latest_year_final_WaterFlow_Target = 0;
                            Latest_year_final_WaterQuality_Target = 0;
                            Latest_year_final_DigitalWater_Target = 0;
                            Latest_year_final_DigitalAnalog_Target = 0;
                            Latest_year_final_Rain_Target = 0;
                            Latest_year_Work_Target = 0;
                            Latest_year_WaterFlow_Target = 0;
                            Latest_year_WaterQuality_Target = 0;
                            Latest_year_DigitalWater_Target = 0;
                            Latest_year_DigitalAnalog_Target = 0;
                            Latest_year_Rain_Target = 0;

                            for (var i = 0; i < data.length; i++) {
                                if (states[j] == data[i].state_name) {
                                    var TestYear = data[i].awp_fin_year.split('-');
                                    if (data[i].awp_item_code == "A3.1.01") {
                                        if (Latest_year_Work_Target <= parseInt(TestYear[0])) {
                                            Latest_year_Work_Target = parseInt(TestYear[0]);
                                            Latest_year_final_Work_Target = data[i].awp_fin_year;
                                        }
                                    }
                                    else if (data[i].awp_item_code == "A2.1.4") {
                                        if (Latest_year_WaterFlow_Target <= parseInt(TestYear[0])) {
                                            Latest_year_WaterFlow_Target = parseInt(TestYear[0]);
                                            Latest_year_final_WaterFlow_Target = data[i].awp_fin_year;
                                        }
                                    }
                                    else if (data[i].awp_item_code == "A2.1.5") {
                                        if (Latest_year_WaterQuality_Target <= parseInt(TestYear[0])) {
                                            Latest_year_WaterQuality_Target = parseInt(TestYear[0]);
                                            Latest_year_final_WaterQuality_Target = data[i].awp_fin_year;
                                        }
                                    }
                                    else if (data[i].awp_item_code == "A2.1.1") {
                                        if (Latest_year_DigitalWater_Target <= parseInt(TestYear[0])) {
                                            Latest_year_DigitalWater_Target = parseInt(TestYear[0]);
                                            Latest_year_final_DigitalWater_Target = data[i].awp_fin_year;
                                        }
                                    }
                                    else if (data[i].awp_item_code == "A2.1.2") {
                                        if (Latest_year_DigitalAnalog_Target <= parseInt(TestYear[0])) {
                                            Latest_year_DigitalAnalog_Target = parseInt(TestYear[0]);
                                            Latest_year_final_DigitalAnalog_Target = data[i].awp_fin_year;
                                        }
                                    }
                                    else if (data[i].awp_item_code == "A2.1.3") {
                                        if (Latest_year_Rain_Target <= parseInt(TestYear[0])) {
                                            Latest_year_Rain_Target = parseInt(TestYear[0]);
                                            Latest_year_final_Rain_Target = data[i].awp_fin_year;
                                        }
                                    }
                                }
                            }
                        }

                        for (var i = 0; i < data.length; i++) {
                            if (yearcc == "ALL") {
                                if (data[i].awp_item_code == "A3.1.01" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name && data[i].awp_fin_year == Latest_year_final_Work_Target) {
                                    Work_Target = Work_Target += parseInt(data[i].awp_physical_year_20_21);
                                }
                                else if (data[i].awp_item_code == "A2.1.4" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name && data[i].awp_fin_year == Latest_year_final_WaterFlow_Target) {
                                    WaterFlow_Target = WaterFlow_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.5" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name && data[i].awp_fin_year == Latest_year_final_WaterQuality_Target) {
                                    WaterQuality_Target = WaterQuality_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.1" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name && data[i].awp_fin_year == Latest_year_final_DigitalWater_Target) {
                                    DigitalWater_Target = DigitalWater_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.2" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name && data[i].awp_fin_year == Latest_year_final_DigitalAnalog_Target) {

                                    DigitalAnalog_Target = DigitalAnalog_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.3" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name && data[i].awp_fin_year == Latest_year_final_Rain_Target) {
                                    Rain_Target = Rain_Target + parseInt(data[i].awp_physical_year_20_21);

                                }

                                else if (data[i].awp_item_code == "A5.1.04" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name) {
                                    Training_Target_gp += parseInt(data[i].awp_physical_year_20_21);
                                }

                                else if (data[i].awp_item_code == "A5.1.01" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name) {
                                    Training_Target_state += parseInt(data[i].awp_physical_year_20_21);
                                }

                                else if (data[i].awp_item_code == "A5.1.02" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name) {
                                    Training_Target_dis += parseInt(data[i].awp_physical_year_20_21);
                                }

                                else if (data[i].awp_item_code == "A5.1.03" && data[i].awp_physical_year_20_21 != null && states[j] == data[i].state_name) {
                                    Training_Target_bl += parseInt(data[i].awp_physical_year_20_21);
                                }

                            }
                            else {
                                if (data[i].awp_item_code == "A3.1.01" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    Work_Target = Work_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.4" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    WaterFlow_Target = WaterFlow_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.5" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    WaterQuality_Target = WaterQuality_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.1" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    DigitalWater_Target = DigitalWater_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.2" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    DigitalAnalog_Target = DigitalAnalog_Target + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A2.1.3" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    Rain_Target = Rain_Target + parseInt(data[i].awp_physical_year_20_21);
                                }
                                else if (data[i].awp_item_code == "A5.1.04" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    Training_Target_gp += parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A5.1.01" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    Training_Target_state += Training_Target_state + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A5.1.02" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    Training_Target_dis += Training_Target_dis + parseInt(data[i].awp_physical_year_20_21);

                                }
                                else if (data[i].awp_item_code == "A5.1.03" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && states[j] == data[i].state_name) {
                                    Training_Target_bl += Training_Target_bl + parseInt(data[i].awp_physical_year_20_21);

                                }

                            }
                        }
                        var myString = states[j];
                        var parts = myString.split("_");
                        var value = parts[0];
                        FInalData_one_to_six_Barchart.push({
                            state: value,
                            Work_Target: Work_Target.toFixed(2),
                            WaterFlow_Target: WaterFlow_Target.toFixed(2),
                            WaterQuality_Target: WaterQuality_Target.toFixed(2),
                            DigitalWater_Target: DigitalWater_Target.toFixed(2),
                            DigitalAnalog_Target: DigitalAnalog_Target.toFixed(2),
                            Rain_Target: Rain_Target.toFixed(2),
                        });
                        FInalData_one_to_six_Barchart_target.push({
                            state: value,
                            Training_Target_state: Training_Target_state.toFixed(2),
                            Training_Target_dis: Training_Target_dis.toFixed(2),
                            Training_Target_bl: Training_Target_bl.toFixed(2),
                            Training_Target_gp: Training_Target_gp.toFixed(2),
                        });
                    }
                }
                else {
                    Work_Target = 0;
                    WaterFlow_Target = 0;
                    WaterQuality_Target = 0;
                    DigitalWater_Target = 0;
                    DigitalAnalog_Target = 0;
                    Rain_Target = 0;
                    Training_Target_state = 0;
                    Training_Target_dis = 0;
                    Training_Target_bl = 0;
                    Training_Target_gp = 0;
                    if (yearcc == "ALL") {
                        Latest_year_final = 0;
                        Latest_year_final_Work_Target = 0;
                        Latest_year_final_WaterFlow_Target = 0;
                        Latest_year_final_WaterQuality_Target = 0;
                        Latest_year_final_DigitalWater_Target = 0;
                        Latest_year_final_DigitalAnalog_Target = 0;
                        Latest_year_final_Rain_Target = 0;
                        Latest_year_Work_Target = 0;
                        Latest_year_WaterFlow_Target = 0;
                        Latest_year_WaterQuality_Target = 0;
                        Latest_year_DigitalWater_Target = 0;
                        Latest_year_DigitalAnalog_Target = 0;
                        Latest_year_final_DigitalAnalog_Target = 0;
                        Latest_year_Rain_Target = 0;

                        for (var i = 0; i < data.length; i++) {
                            if (Agency_State == data[i].state_name) {
                                var TestYear = data[i].awp_fin_year.split('-');
                                if (data[i].awp_item_code == "A3.1.01") {
                                    if (Latest_year_Work_Target <= parseInt(TestYear[0])) {
                                        Latest_year_Work_Target = parseInt(TestYear[0]);
                                        Latest_year_final_Work_Target = data[i].awp_fin_year;
                                    }
                                }
                                else if (data[i].awp_item_code == "A2.1.4") {
                                    if (Latest_year_WaterFlow_Target <= parseInt(TestYear[0])) {
                                        Latest_year_WaterFlow_Target = parseInt(TestYear[0]);
                                        Latest_year_final_WaterFlow_Target = data[i].awp_fin_year;
                                    }
                                }
                                else if (data[i].awp_item_code == "A2.1.5") {
                                    if (Latest_year_WaterQuality_Target <= parseInt(TestYear[0])) {
                                        Latest_year_WaterQuality_Target = parseInt(TestYear[0]);
                                        Latest_year_final_WaterQuality_Target = data[i].awp_fin_year;
                                    }
                                }
                                else if (data[i].awp_item_code == "A2.1.1") {
                                    if (Latest_year_DigitalWater_Target <= parseInt(TestYear[0])) {
                                        Latest_year_DigitalWater_Target = parseInt(TestYear[0]);
                                        Latest_year_final_DigitalWater_Target = data[i].awp_fin_year;
                                    }
                                }
                                else if (data[i].awp_item_code == "A2.1.2") {
                                    if (Latest_year_DigitalAnalog_Target <= parseInt(TestYear[0])) {
                                        Latest_year_DigitalAnalog_Target = parseInt(TestYear[0]);
                                        Latest_year_final_DigitalAnalog_Target = data[i].awp_fin_year;
                                    }
                                }
                                else if (data[i].awp_item_code == "A2.1.3") {
                                    if (Latest_year_Rain_Target <= parseInt(TestYear[0])) {
                                        Latest_year_Rain_Target = parseInt(TestYear[0]);
                                        Latest_year_final_Rain_Target = data[i].awp_fin_year;
                                    }
                                }
                            }
                        }
                    }


                    for (var i = 0; i < data.length; i++) {

                        if (yearcc == "ALL") {

                            if (data[i].awp_item_code == "A3.1.01" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name && data[i].awp_fin_year == Latest_year_final_Work_Target) {
                                Work_Target = Work_Target += parseInt(data[i].awp_physical_year_20_21);
                            }

                            else if (data[i].awp_item_code == "A2.1.4" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name && data[i].awp_fin_year == Latest_year_final_WaterFlow_Target) {
                                WaterFlow_Target = WaterFlow_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.5" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name && data[i].awp_fin_year == Latest_year_final_WaterQuality_Target) {
                                WaterQuality_Target = WaterQuality_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.1" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name && data[i].awp_fin_year == Latest_year_final_DigitalWater_Target) {
                                DigitalWater_Target = DigitalWater_Target + parseInt(data[i].awp_physical_year_20_21);

                            }

                            else if (data[i].awp_item_code == "A2.1.2" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name && data[i].awp_fin_year == Latest_year_final_DigitalAnalog_Target) {

                                DigitalAnalog_Target = DigitalAnalog_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.3" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name && data[i].awp_fin_year == Latest_year_final_Rain_Target) {
                                Rain_Target = Rain_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A5.1.04" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name) {
                                Training_Target_gp = Training_Target_gp + parseInt(data[i].awp_physical_year_20_21);
                            }

                            else if (data[i].awp_item_code == "A5.1.01" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name) {
                                Training_Target_state = Training_Target_state + parseInt(data[i].awp_physical_year_20_21);
                            }

                            else if (data[i].awp_item_code == "A5.1.02" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name) {
                                Training_Target_dis = Training_Target_dis + parseInt(data[i].awp_physical_year_20_21);
                            }

                            else if (data[i].awp_item_code == "A5.1.03" && data[i].awp_physical_year_20_21 != null && Agency_State == data[i].state_name) {
                                Training_Target_bl = Training_Target_bl + parseInt(data[i].awp_physical_year_20_21);
                            }

                        }
                        else {
                            if (data[i].awp_item_code == "A3.1.01" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                Work_Target = Work_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.4" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                WaterFlow_Target = WaterFlow_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.5" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                WaterQuality_Target = WaterQuality_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.1" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                DigitalWater_Target = DigitalWater_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.2" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                DigitalAnalog_Target = DigitalAnalog_Target + parseInt(data[i].awp_physical_year_20_21);

                            }
                            else if (data[i].awp_item_code == "A2.1.3" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                Rain_Target = Rain_Target + parseInt(data[i].awp_physical_year_20_21);
                            }
                            else if (data[i].awp_item_code == "A5.1.04" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                Training_Target_gp = Training_Target_gp + parseInt(data[i].awp_physical_year_20_21);
                            }
                            else if (data[i].awp_item_code == "A5.1.01" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                Training_Target_state = Training_Target_state + parseInt(data[i].awp_physical_year_20_21);
                            }
                            else if (data[i].awp_item_code == "A5.1.02" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                Training_Target_dis = Training_Target_dis + parseInt(data[i].awp_physical_year_20_21);
                            }
                            else if (data[i].awp_item_code == "A5.1.03" && data[i].awp_physical_year_20_21 != null && data[i].awp_fin_year == yearcc && Agency_State == data[i].state_name) {
                                Training_Target_bl = Training_Target_bl + parseInt(data[i].awp_physical_year_20_21);
                            }
                        }
                    }
                    var myString = Agency_State;
                    var parts = myString.split("_");
                    var value = parts[0];
                    FInalData_one_to_six_Barchart.push({
                        state: value,
                        //state: Agency_State,
                        Work_Target: Work_Target.toFixed(2),
                        WaterFlow_Target: WaterFlow_Target.toFixed(2),
                        WaterQuality_Target: WaterQuality_Target.toFixed(2),
                        DigitalWater_Target: DigitalWater_Target.toFixed(2),
                        DigitalAnalog_Target: DigitalAnalog_Target.toFixed(2),
                        Rain_Target: Rain_Target.toFixed(2),
                        Training_Target_state: Training_Target_state.toFixed(2),
                        Training_Target_dis: Training_Target_dis.toFixed(2),
                        Training_Target_bl: Training_Target_bl.toFixed(2),
                        Training_Target_gp: Training_Target_gp.toFixed(2),
                    });
                    FInalData_one_to_six_Barchart_target.push({
                        state: value,
                        //state: Agency_State,
                        Training_Target_state: Training_Target_state.toFixed(2),
                        Training_Target_dis: Training_Target_dis.toFixed(2),
                        Training_Target_bl: Training_Target_bl.toFixed(2),
                        Training_Target_gp: Training_Target_gp.toFixed(2),
                    });


                }
                first_bar_chart('first_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                second_bar_chart('second_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                third_bar_chart('third_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                third_bar_chart_rain('third_bar_char_rain_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                fourth_bar_chart('fourth_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                fivth_bar_chart('fivth_bar_char_id', FInalData_one_to_six_Barchart_achieve_works, FInalData_one_to_six_Barchart);
                sixth_bar_chart_gp('sixth_bar_char_gp_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
                sixth_bar_chart_block('sixth_bar_char_bl_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
                sixth_bar_chart_dis('sixth_bar_char_dis_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
                sixth_bar_chart_state('sixth_bar_char_st_id', FInalData_one_to_six_Barchart_achieve, FInalData_one_to_six_Barchart_target);
            }
            $('.loader').hide();
            //   console.log(DLI3_Target);

        },
        error: function () {
            alert("error in getting data");
        }

    });
}