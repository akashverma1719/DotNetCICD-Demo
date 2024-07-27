

var lat = 0;
var long = 0;

var present_pop = 0;
var present_pop_live = 0;
$(document).ready(function () {
    Info();
    //GetYearFromGPDCI();
    
});
function findval() {
    
    var annual_pop = parseFloat($('#human_a_pop').val());
    if (annual_pop > 100) {
        alert("please enter less than 100");
        $('#human_a_pop').val("");
        $('#human_pro_pop').val("");
        $('#human_pro_water_req').val("");
        return;
    }
    if (annual_pop != "") {
        const human_year = 2022;
        const n = 2050 - human_year;
        var AllPercent = present_pop;
        var GrowthRate = annual_pop / 100;
        const result = present_pop * Math.pow(1 + GrowthRate, n);
        //for (var i = 0; i < n; i++) {
        //    var percent = parseFloat(AllPercent * (1 + annual_pop) / 100);
        //    AllPercent += percent;
        //}
        /*var p_human_population = present_pop * Math.pow(1 + annual_pop,n).toFixed(0);*/
        var HumanProjectedPop = Math.round(result);
        $('#human_pro_pop').val(HumanProjectedPop);
        var human_per_capita = parseFloat($("#human_per_capita").val());
        var wr_human = (HumanProjectedPop * human_per_capita * 365 * 1 / 10000000).toFixed(4);
        $('#human_pro_water_req').val(wr_human);

        tot_hum_live();
    }
    
}

/*Livestock*/
function findval_live() {
    
    var ap_growth_rate = parseFloat($('#live_a_pop').val());
    if (ap_growth_rate > 100) {
        alert("please enter less than 100");
        $('#live_a_pop').val("");
        $('#live_pro_pop').val("");
        $('#live_pro_water_req').val("");
        return;
    }
    if (ap_growth_rate != "") {
        
        const livestock_year = 2022;
        const n = 2050 - livestock_year;
        
        var GrowthRate = ap_growth_rate / 100;
        const result = present_pop_live * Math.pow(1 + GrowthRate, n);
        //for (var i = 0; i < n; i++) {
        //    var percent = parseFloat(p_human_population_live * (1 + ap_growth_rate) / 100);
        //    p_human_population_live += percent;
        //}
        /*var p_human_population_live = (present_pop_live * (1 + ap_growth_rate) * n).toFixed(0);*/
        var LiveStockProjectedPop = Math.round(result);
        $('#live_pro_pop').val(LiveStockProjectedPop);

        var ap_capital_req = parseFloat($("#live_per_capita").val());
        var p_water_req = (LiveStockProjectedPop * (ap_capital_req * 365 * 1 / 10000000)).toFixed(4);
        $('#live_pro_water_req').val(p_water_req);

        tot_hum_live();
    }
    
}

function GetDataFromWaterutilization() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/GetDataFromWaterutilization',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Error") {
                //window.location = "/Wsp_new/waterAval_report";
            }
            if (data[0].daily_water_req != "" && data[0].daily_water_req) {
                $('#human_per_capita').val(data[0].daily_water_req);
            }
            if (data[0].avg_water_req != "" && data[0].avg_water_req) {
                $('#live_per_capita').val(data[0].avg_water_req);
            }

        }
    });

}


//function GetYearFromGPDCI() {
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/WaterSecurityPlan/GetDataFromGPDCI',
//        data: '',
//        dataType: 'JSON',
//        success: function (data) {
//            
//            //if (data == "Error") {
//            //    window.location = "/Wsp_new/waterAval_report";
//            //}

//            const response = data.split(',');

//            if (response[2] != '') {
//                $('#human_year').text(response[2]);
//            }
//            if (response[3] != '') {
//                $('#livestock_year').text(response[3]);
//            }

//            // findval();
//            //findval_live();
//        }
//    });

//}

function GetDataFromGPDCI() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/GetDataFromGPDCI',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Error") {
                //window.location = "/Wsp_new/waterAval_report";
            }

            const response = data.split(',');
            if (response[1] != "" && response[1]) {
                $('#human_p_pop').val(response[1]);
                present_pop = parseFloat(response[1]);
            }
            if (response[0] != "" && response[0]) {
                $('#live_p_pop').val(response[0]);
                present_pop_live = parseFloat(response[0]);
            }
            var year = 0;
            if (response[2] == "2022-23") {
                year = 2022;
            } else if (response[2] == "2023-24") {
                year = 2023;
            }
            if (response[2] != '') {
                $('#human_year').text(year);
            }
            if (response[3] != '') {
                $('#livestock_year').text(year);
            }
            
            


            var year_Set1 = 2050 - year;
            var year_Set2 = 2050 - year;
            $('#human_no_of_year').val(year_Set1);
            $('#live_no_of_year').val(year_Set2);
            findval();
            findval_live();
        }
    });

}

var SW_waterAvailability = 0;
var GW_WaterAvailbility = 0;

function Availability_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                //window.location = "/Wsp_new/waterAval_report";
            }
            $('#WaterAvailabilty').text("0");
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                if (response[0].tot_grd_wat_avail != null && response[0].tot_grd_wat_avail != "") {
                    GW_WaterAvailbility += parseFloat(response[0].tot_grd_wat_avail);
                }
                if (response[0].total_sirface_water != null && response[0].total_sirface_water != "") {
                    SW_waterAvailability += parseFloat(response[0].total_sirface_water);
                }

                pwr_ground();
            }


        }
    });

}
/*human*/
var Final_papulation = 0;


function tot_hum_live() {
    
    var wr_human = $('#human_pro_water_req').val();
    var p_water_req = $('#live_pro_water_req').val();
    if (p_water_req == "") {
        p_water_req = 0;
    }
    if (wr_human != "") {
        var wb_total_live_human = parseFloat(wr_human) + parseFloat(p_water_req);
        $('#total_pro_water_req').val(parseFloat(wb_total_live_human).toFixed(4));
    }
    pwr_ground();
}

function pwr_ground() {
    checkLength();

    var propose_share_gw = $('#gw_proposed_share').val();


    var nsw = 100;
    var total_propose_sw = nsw - propose_share_gw;
    $('#sw_proposed_share').val(total_propose_sw);

    var total_gw = $('#total_pro_water_req').val();
    var propose_share_gw = $('#gw_proposed_share').val();;
    var total_demand_gw = total_gw * propose_share_gw / nsw;
    $('#gw_demand').val(parseFloat(total_demand_gw).toFixed(4));

    var wb_total_live_human = $('#total_pro_water_req').val();
    var total_propose_sw = $('#sw_proposed_share').val();
    var total_demand_sw = wb_total_live_human * total_propose_sw / nsw;
    $('#sw_demand').val(total_demand_sw.toFixed(4));

    var gw_demand = $('#gw_demand').val();
    var sw_demand = $('#sw_demand').val();
    //var total_gw = GW_WaterAvailbility - total_demand_gw;
    //$('#ground_water').val(total_gw.toFixed(4));

    //var total_sw = SW_waterAvailability - total_demand_sw;
    //$('#surface_water').val(total_sw.toFixed(4));
    Getwspwater(gw_demand, sw_demand)
}
function Getwspwater(gw_demand, sw_demand) {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/WaterAvailabiltyInfo_GetData',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                //window.location = "/WspNew/WspWaterAvailability";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {


                var total_surface_water = (response[0].total_sirface_water);
                var tot_grd_wat_avail = (response[0].tot_grd_wat_avail);

                var total_gw_water = tot_grd_wat_avail - gw_demand;
                var total_sw_water = total_surface_water - sw_demand;
                
                $('#ground_water').val(parseFloat(total_gw_water).toFixed(4));
                $('#surface_water').val(parseFloat(total_sw_water).toFixed(4));
                var ground_water = $('#ground_water').val();
                var surface_water = $('#surface_water').val();

                var total_water = parseFloat(ground_water) + parseFloat(surface_water);

                $('#total_water').val(parseFloat(total_water).toFixed(4));

            }

            //Info1();

        }
    });
}

var total_gw = 0;
var propose_share_gw = 0;
var total_demand_gw = 0;
var total_gw = 0;
var propose_share_gw = 0;

function Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/WaterBudgetInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            if (response == "Error") {
                //window.location = "/WSPHome/WaterBudget";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                /*Human*/

                var annual_pop = $('#human_a_pop').text();
                //var n = 2050;
                //var present_year = year_GPDCI;
                //var total_year = n - present_year;
                /*$('#human_no_of_year').val(total_year);*/
                //$('#human_p_pop').val(response[0].human_p_pop);
                //present_pop = parseInt(response[0].human_p_pop);
                //$('#human_no_of_year').val(response[0].human_no_of_year)
                var human_a_pop = (response[0].human_a_pop);;
                $('#human_a_pop').val(human_a_pop);

                //var p_human_population = present_pop * (1 + annual_pop) * n;
                $('#human_pro_pop').val(response[0].human_pre_pop);

                //$('#human_per_capita').val(response[0].human_per_capita);

                //var wr_human = p_human_population * 55 * 365 * 1 / 10000000;
                $('#human_pro_water_req').val(response[0].human_pro_water_req);



                ///*LiveStock*/
                //var ap_growth_rate = $('#live_a_pop').val();
                //var total_year_live = n - present_year;
                //$('#live_no_of_year').val(total_year_live);
                //$('#live_p_pop').val(response[0].live_p_pop);
                //present_pop_live = parseInt(response[0].live_p_pop);
                var live_a_pop = (response[0].live_a_pop);;
                $('#live_a_pop').val(live_a_pop);
                //$('#live_no_of_year').val(response[0].live_no_of_year);

                //var p_human_population_live = present_pop_live * (1 + ap_growth_rate) * n;
                $('#live_pro_pop').val(response[0].live_pro_pop);
                /*var ap_capital_req = 10;*/
                //$('#live_per_capita').val(response[0].live_pre_capita);
                //var p_water_req = p_human_population_live * (ap_capital_req * 365 * 1 / 10000000);
                $('#live_pro_water_req').val(response[0].live_pro_water_req);

                /*Water_requirement*/
                //var wb_total_live_human = wr_human + p_water_req;
                $('#total_pro_water_req').val(response[0].total_pro_water_req);

                var proposed_share_gw = (response[0].proposed_share_gw);
                $('#gw_proposed_share').val(proposed_share_gw);

                var propose_share_gw = $('#gw_proposed_share').val();
                //var nsw = 100;
                //var total_propose_sw = nsw - propose_share_gw;
                //$('#sw_proposed_share').val(response[0].proposed_share_sw);

                //var total_demand_gw = wb_total_live_human * propose_share_gw / nsw;
                //$('#gw_demand').val(response[0].demand_gw);

                //var total_demand_sw = wb_total_live_human * total_propose_sw / nsw;
                //$('#sw_demand').val(response[0].demand_sw);

                /*Water available for future irrigation*/

                //var surface_water = (response[0].surface_water);
                //$('#surface_water').val(surface_water);

                //var ground_water = (response[0].ground_water);
                //$('#ground_water').val(ground_water);

                

            } 
            Availability_Info();
            //Infoutili();
            Infoyear();
            GetDataFromGPDCI();
            GetDataFromWaterutilization();
            Gpdci_set();
        }
        
    });
}

var avrg_water_req = 0;

//function Infoutili() {
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Wsp_new/Water_Domestic_Details',
//        data: '',
//        dataType: 'JSON',
//        success: function (response) {

//            if (response == "Error") {
//                window.location = "/WSPHome/WaterBudget";
//            }
//            if (response == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";
//            }
//            if (response.length != 0) {

//                if (response[0].total_pop_human != null && response[0].total_pop_human != "") {
//                    present_pop += parseFloat(response[0].total_pop_human);
//                }
//                if (response[0].total_pop_livestock != null && response[0].total_pop_livestock != "") {
//                    present_pop_live += parseFloat(response[0].total_pop_livestock);
//                }
//                if (response[0].avg_water_req != null && response[0].avg_water_req != "") {
//                    avrg_water_req += parseFloat(response[0].avg_water_req);
//                }

//                $('#human_p_pop').val(present_pop);

//                $('#live_p_pop').val(present_pop_live);

//                $('#live_per_capita').val(avrg_water_req);
//                Gpdci_set();
//            }

//            Info();
//        }
//    });
//}
//function Gpdci_set() {
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Wsp_new/GPDCI_Details',
//        data: '',
//        dataType: 'JSON',
//        success: function (response) {

//            if (response == "Error") {
//                window.location = "/WSPHome/WaterBudget";
//            }
//            if (response == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";
//            }

//            if (response.length != 0) {
//                var year_Set = 0;
//                if (response[0].source_year != null && response[0].source_year != "") {
//                    year_Set = 2050 - (parseInt(response[0].source_year));
//                }


//                $('#human_no_of_year').val(year_Set);
//                $('#live_no_of_year').val(year_Set);


//            }

//            Info();
//        }
//    });
//}


var year_GPDCI = 0;

function Infoyear() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/baseline_gpdata',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                //window.location = "/WSPHome/WaterBudget";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                if (response[0].source_year != null && response[0].source_year != "") {
                    year_GPDCI += parseFloat(response[0].source_year);
                }

            }


        }
    });
}
