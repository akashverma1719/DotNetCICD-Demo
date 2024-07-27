
$(document).ready(function () {

    Getting_water_budget_info();
    Getting_water_budget_info_LiveStock();
});

var Draft_Irrigation_DailyPumping_Hours = 0, Tube_Wells_Borehole_Functioning_All_round_the_year = 0, Draft_Irrigation_Total_NoOf_Pumping_Days = 0, Draft_Irrigation_Avg_Pumping_Rate = 0, Total_Population_of_Village = 0;
var Draft_Industry_GW_In_Take = 0, Draft_Industry_Tot_Noof_Production_Days = 0, Surface_water_Invoke = 0;
var Irrigation_GroundWater_Draft = 0;
var Total_Drop_for_Irrigation = 0;
var Total_number_of_industries = 0, Industry_Water_Draft_Value = 0;
var SW_Value = 0;
function Getting_water_budget_info() {

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/Getting_Data_WaterAvailability',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response.length != 0) {


                for (var i = 0; i < response.length; i++) {
                    //Irrigation Values Sum
                    Draft_Irrigation_DailyPumping_Hours += parseFloat(response[i].Draft_Irrigation_DailyPumping_Hours);
                    Tube_Wells_Borehole_Functioning_All_round_the_year += parseFloat(response[i].Tube_Wells_Borehole_Functioning_All_round_the_year);
                    Draft_Irrigation_Total_NoOf_Pumping_Days += parseFloat(response[i].Draft_Irrigation_Total_NoOf_Pumping_Days);
                    Draft_Irrigation_Avg_Pumping_Rate += parseFloat(response[i].Draft_Irrigation_Avg_Pumping_Rate);
                    //End
                    //Doestic Values Sum
                    Total_Population_of_Village += parseFloat(response[i].Total_Population_of_Village);
                    //End
                    Draft_Industry_GW_In_Take += parseFloat(response[i].Draft_Industry_GW_In_Take);
                    Draft_Industry_Tot_Noof_Production_Days += parseFloat(response[i].Draft_Industry_Tot_Noof_Production_Days);

                }
                //Irrigation Values Bind Textboxs
                $("#data_daily_pumping_hours").val(Draft_Irrigation_DailyPumping_Hours);
                $("#data_Total_no_of_wells").val(Tube_Wells_Borehole_Functioning_All_round_the_year);
                $("#data_total_no_of_pumping_days").val(Draft_Irrigation_Total_NoOf_Pumping_Days);
                $("#data_avg_pumping_rate").val(Draft_Irrigation_Avg_Pumping_Rate);

                WaterUtilization_Irrigation_Calculation();
                //End
                //Doestic Values Bind Textboxs
                $("#data_Total_population").val(Total_Population_of_Village);
                //End
                //Industry Values Bind Textboxs

                $("#data_Ground_water_intake").val(Draft_Industry_GW_In_Take);
                $("#data_Total_number_of_production_days").val(Draft_Industry_Tot_Noof_Production_Days);
                //End

                Totatal_Industry_Draft_Cal();

            }
        }
    });
}

function WaterUtilization_Irrigation_Calculation() {
    Irrigation_GroundWater_Draft = (Draft_Irrigation_DailyPumping_Hours * Draft_Irrigation_Total_NoOf_Pumping_Days * Draft_Irrigation_Avg_Pumping_Rate * Tube_Wells_Borehole_Functioning_All_round_the_year);
    if (isNaN(Irrigation_GroundWater_Draft)) {
        Irrigation_GroundWater_Draft = 0;
    }
    $("#data_Ground_water_draft").val(Irrigation_GroundWater_Draft);
    SW_Value = $("#data_Surface_water_availability").val();
    Total_Drop_for_Irrigation = (0.7 * parseFloat(Irrigation_GroundWater_Draft)) + (0.3 * parseFloat(SW_Value));
    if (isNaN(Total_Drop_for_Irrigation)) {
        Total_Drop_for_Irrigation = 0;
    }
    $("#data_Total_draft_for_irrigation").val(Total_Drop_for_Irrigation);
}


$("#data_daily_pumping_hours, #data_Total_no_of_wells,#data_total_no_of_pumping_days,#data_avg_pumping_rate").on("keydown keyup", function () {
    D1();
});
function D1() {
    Draft_Irrigation_DailyPumping_Hours = $("#data_daily_pumping_hours").val();
    Tube_Wells_BoreholeDraft_Irrigation_Total_NoOf_Pumping_Days = $("#data_total_no_of_pumping_days").val();
    Draft_Irrigation_Avg_Pumping_Rate = $("#data_avg_pumping_rate").val();

    WaterUtilization_Irrigation_Calculation();
}
_Functioning_All_round_the_year = $("#data_Total_no_of_wells").val();

$("#data_Surface_water_availability").on("keydown keyup", function () {

    D2();

});

function D2() {
    SW_Value = $("#data_Surface_water_availability").val();
    Total_Drop_for_Irrigation = (0.7 * parseFloat(Irrigation_GroundWater_Draft)) + (0.3 * parseFloat(SW_Value));
    if (isNaN(Total_Drop_for_Irrigation)) {
        Total_Drop_for_Irrigation = 0;
    }
    $("#data_Total_draft_for_irrigation").val(Total_Drop_for_Irrigation);
}

var QC = 110, QP = 55, QB = 110, QS = 7;
var cowscattle = 0, buffaloes = 0, sheeps_and_goats = 0;
var Total_Water_Reqirement_For_Human_and_LiveStock = 0;
function Getting_water_budget_info_LiveStock() {

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/Getting_Data_LiveStock',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    cowscattle += parseFloat(response[i].cows);
                    buffaloes += parseFloat(response[i].buffaloes);
                    sheeps_and_goats += parseFloat(response[i].sheeps_and_goats);
                }
                $("#data_Total_number_of_cattle").val(cowscattle);
                $("#data_Total_number_of_buffalos").val(buffaloes);
                $("#data_Total_number_of_goats_sheeps").val(sheeps_and_goats);
                $("#data_Per_Capita_Demand_for_Population").val(QP);
                $("#data_Per_Capita_Demand_for_Cattle").val(QC);
                $("#data_Per_Capita_Demand_for_Buffalos").val(QB);
                $("#data_Per_Capita_Demand_for_Goats_and_Sheep").val(QS);

                Total_Water_Reqirement_For_Human_and_LiveStock_Cal();

            }
        }
    });
}


function Total_Water_Reqirement_For_Human_and_LiveStock_Cal() {
    Total_Water_Reqirement_For_Human_and_LiveStock = (parseFloat(Total_Population_of_Village) * parseFloat(QP)) + (parseFloat(cowscattle) * parseFloat(QC)) + (parseFloat(buffaloes) * parseFloat(QB)) + (parseFloat(sheeps_and_goats) * parseFloat(QS));
    if (isNaN(Total_Water_Reqirement_For_Human_and_LiveStock)) {
        Total_Water_Reqirement_For_Human_and_LiveStock = 0;
    }
    $("#data_Total_water_requirement_for_human_and_livestock").val(Total_Water_Reqirement_For_Human_and_LiveStock);
}



$("#data_Total_population,#data_Total_number_of_cattle, #data_Total_number_of_buffalos,#data_Total_number_of_goats_sheeps,#data_Per_Capita_Demand_for_Population,#data_Per_Capita_Demand_for_Cattle,#data_Per_Capita_Demand_for_Buffalos,#data_Per_Capita_Demand_for_Goats_and_Sheep").on("keydown keyup", function () {
    D3();
});

function D3() {
    Total_Population_of_Village = $("#data_Total_population").val();
    cowscattle = $("#data_Total_number_of_cattle").val();
    buffaloes = $("#data_Total_number_of_buffalos").val();
    sheeps_and_goats = $("#data_Total_number_of_goats_sheeps").val();

    QP = $("#data_Per_Capita_Demand_for_Population").val();
    QC = $("#data_Per_Capita_Demand_for_Cattle").val();
    QB = $("#data_Per_Capita_Demand_for_Buffalos").val();
    QS = $("#data_Per_Capita_Demand_for_Goats_and_Sheep").val();
    Total_Water_Reqirement_For_Human_and_LiveStock_Cal();
}

function Totatal_Industry_Draft_Cal() {

    Industry_Water_Draft_Value = (parseFloat(Surface_water_Invoke) + parseFloat(Draft_Industry_GW_In_Take)) * parseFloat(Draft_Industry_Tot_Noof_Production_Days) * parseFloat(Total_number_of_industries);
    if (isNaN(Industry_Water_Draft_Value)) {
        Industry_Water_Draft_Value = 0;
    }
    $("#data_Industry_Water_Draft").val(Industry_Water_Draft_Value);
}


$("#data_Surface_water_intake,#data_Ground_water_intake, #data_Total_number_of_production_days,#data_Total_number_of_industries").on("keydown keyup", function () {
    D4();
});

function D4() {
    Surface_water_Invoke = $("#data_Surface_water_intake").val();
    Draft_Industry_GW_In_Take = $("#data_Ground_water_intake").val();
    Draft_Industry_Tot_Noof_Production_Days = $("#data_Total_number_of_production_days").val();
    Total_number_of_industries = $("#data_Total_number_of_industries").val();
    Totatal_Industry_Draft_Cal();
}


function Draft_Report() {

    var Sprinkler_Water_Demand = $('#Sprinkler_Water_Demand').text();
    var Sprinkler_RabiWater_Demand = $('#Sprinkler_RabiWater_Demand').text();
    var Summer_Crops_Water_Demand = $('#Summer_Crops_Water_Demand').text();
    if (Sprinkler_Water_Demand == "") {
        Sprinkler_Water_Demand = 0;
    }
    if (Sprinkler_RabiWater_Demand == "") {
        Sprinkler_RabiWater_Demand = 0;
    }
    if (Summer_Crops_Water_Demand == "") {
        Summer_Crops_Water_Demand = 0;
    }
    var Total_Irrigation = parseFloat(Sprinkler_Water_Demand) + parseFloat(Sprinkler_RabiWater_Demand) + parseFloat(Summer_Crops_Water_Demand);
    var Total_Domestic = Total_Water_Reqirement_For_Human_and_LiveStock;

    var Total_Industry = Industry_Water_Draft_Value;
    var EF = $('#data_Environmental_Flow').val();
    var Total_Environmental_Flow = EF;
    var Total_Water_Draft = parseFloat(Total_Irrigation) + parseFloat(Total_Domestic) + parseFloat(Total_Industry) + parseFloat(Total_Environmental_Flow);


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WspNew/GrounddWater_Draft_Reports_Data",
        data: "{'Total_Water_Draft':'" + Total_Water_Draft + "','Total_Irrigation':'" + Total_Irrigation + "','Total_Domestic':'" + Total_Domestic + "','Total_Industry':'" + Total_Industry + "','Total_Environmental_Flow':'" + Total_Environmental_Flow + "'}",
        dataType: 'JSON',
        success: function (response) {
            window.location = "/Wsp_new/WaterDraft_report";
            //  window.open = "~/Wsp_new/WaterDraft_report";
        }
    });

}