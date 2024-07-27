

var wb_sw_utili = 0, wb_gw_utili = 0;
var wb_sw_avail = 0, wb_gw_avail = 0;
function WaterAvailabilty_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            if (response == "Error") {
                window.location = "/Wsp_new/WSPHOME";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {
                var total_gw_available = 0;
                var total_sw_availble = 0;
                var waterutilization_value = 0;
                if (response[0].total_gw_available != null && response[0].total_gw_available != "") {
                    total_gw_available = parseFloat(response[0].total_gw_available);

                }
                if (response[0].total_sw_availble != null && response[0].total_sw_availble != "") {

                    total_sw_availble = parseFloat(response[0].total_sw_availble);
                }
                if (response[0].total_water_avaliable_utiilization != null && response[0].total_water_avaliable_utiilization != "") {

                    waterutilization_value = parseFloat(response[0].total_water_avaliable_utiilization);
                }
                var Sum = total_gw_available + total_sw_availble;
                $('#WaterAvailabilty').text(waterutilization_value.toFixed(2))


                if (response[0].total_sw_availble != null && response[0].total_sw_availble != "") {
                    wb_sw_avail = response[0].total_sw_availble;

                }

                if (response[0].total_gw_available != null && response[0].total_gw_available != "") {
                    wb_gw_avail = response[0].total_gw_available;
                }


            }
            WaterUtilization();

        }

    });

}

function WaterUtilization() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterDraftInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/Wsp_new/WSPHOME";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var domestic_demand_ground_water = 0;
            var domestic_demand_surface_water = 0;
            var irri_utili_surface_water = 0;
            var irri_utili_ground_water = 0;
            var industry_demand_surface_water = 0;
            var industry_demand_ground_water = 0;
            var other_demand_surface_water = 0;
            var other_demand_ground_water = 0;
            if (response.length != 0) {

                if (response[0].domestic_demand_ground_water != null && response[0].domestic_demand_ground_water != "") {
                    domestic_demand_ground_water = parseFloat(response[0].domestic_demand_ground_water);
                }

                if (response[0].domestic_demand_surface_water != null && response[0].domestic_demand_surface_water != "") {
                    domestic_demand_surface_water = parseFloat(response[0].domestic_demand_surface_water);
                }
                if (response[0].irri_utili_surface_water != null && response[0].irri_utili_surface_water != "") {
                    irri_utili_surface_water = parseFloat(response[0].irri_utili_surface_water);
                }
                if (response[0].irri_utili_ground_water != null && response[0].irri_utili_ground_water != "") {
                    irri_utili_ground_water = parseFloat(response[0].irri_utili_ground_water);
                }
                if (response[0].industry_demand_surface_water != null && response[0].industry_demand_surface_water != "") {
                    industry_demand_surface_water = parseFloat(response[0].industry_demand_surface_water);
                }

                if (response[0].industry_demand_ground_water != null && response[0].industry_demand_ground_water != "") {
                    industry_demand_ground_water = parseFloat(response[0].industry_demand_ground_water);
                }
                if (response[0].other_demand_surface_water != null && response[0].other_demand_surface_water != "") {
                    other_demand_surface_water = parseFloat(response[0].other_demand_surface_water);
                }
                if (response[0].other_demand_ground_water != null && response[0].other_demand_ground_water != "") {
                    other_demand_ground_water = parseFloat(response[0].other_demand_ground_water);
                }

                var Sum = domestic_demand_ground_water + domestic_demand_surface_water + irri_utili_surface_water + irri_utili_ground_water + industry_demand_surface_water + industry_demand_ground_water + other_demand_surface_water + other_demand_ground_water;

                $('#WaterUtilization').text(parseFloat(Sum).toFixed(2));

                var domestic_demand_surface_water = 0, domestic_demand_surface_water_livestock = 0, irri_utili_surface_water = 0, industry_demand_surface_water = 0, other_demand_surface_water = 0;
                if (response[0].domestic_demand_surface_water != null && response[0].domestic_demand_surface_water != "") {
                    domestic_demand_surface_water = parseFloat(response[0].domestic_demand_surface_water);

                }
                if (response[0].domestic_demand_surface_water_livestock != null && response[0].domestic_demand_surface_water_livestock != "") {
                    domestic_demand_surface_water_livestock = parseFloat(response[0].domestic_demand_surface_water_livestock);

                }

                if (response[0].irri_utili_surface_water != null && response[0].irri_utili_surface_water != "") {
                    irri_utili_surface_water = parseFloat(response[0].irri_utili_surface_water);

                }

                if (response[0].industry_demand_surface_water != null && response[0].industry_demand_surface_water != "") {
                    industry_demand_surface_water = parseFloat(response[0].industry_demand_surface_water);

                }

                if (response[0].other_demand_surface_water != null && response[0].other_demand_surface_water != "") {
                    other_demand_surface_water = parseFloat(response[0].other_demand_surface_water);

                }

                wb_sw_utili = other_demand_surface_water + industry_demand_surface_water + irri_utili_surface_water + domestic_demand_surface_water_livestock + domestic_demand_surface_water;
                $('#wb_sw_utili').text(wb_sw_utili.toFixed(2));
                //Ground Water
                var domestic_demand_ground_water = 0, domestic_demand_ground_water_livestock = 0, irri_utili_ground_water = 0, industry_demand_ground_water = 0, other_demand_ground_water = 0;

                if (response[0].domestic_demand_ground_water != null && response[0].domestic_demand_ground_water != "") {
                    domestic_demand_ground_water = parseFloat(response[0].domestic_demand_ground_water);

                }
                if (response[0].domestic_demand_ground_water_livestock != null && response[0].domestic_demand_ground_water_livestock != "") {
                    domestic_demand_ground_water_livestock = parseFloat(response[0].domestic_demand_ground_water_livestock);

                }

                if (response[0].irri_utili_ground_water != null && response[0].irri_utili_ground_water != "") {
                    irri_utili_ground_water = parseFloat(response[0].irri_utili_ground_water);

                }

                if (response[0].industry_demand_ground_water != null && response[0].industry_demand_ground_water != "") {
                    industry_demand_ground_water = parseFloat(response[0].industry_demand_ground_water);

                }

                if (response[0].other_demand_ground_water != null && response[0].other_demand_ground_water != "") {
                    other_demand_ground_water = parseFloat(response[0].other_demand_ground_water);

                }

                wb_gw_utili = other_demand_ground_water + industry_demand_ground_water + irri_utili_ground_water + domestic_demand_ground_water_livestock + domestic_demand_ground_water;


            }
            var uti_value = parseFloat(wb_gw_utili).toFixed(2);
            $('#WaterUtilization').text(uti_value);
            BalanceDetails();

        }
    });

}

function BalanceDetails() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterBalanceInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/Wsp_new/WSPHOME";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var wb_total_balance = 0;
            if (response.length != 0) {
                //wb_total_balance
                wb_total_balance = response[0].wb_total_balance;

            }
            $('#WaterBalance').text(wb_total_balance);
            WaterBudget();
        }
    });
}



function WaterBudget() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterBudgetInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/Wsp_new/WSPHOME";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var wb_irri_agri_total = 0;
            if (response.length != 0) {
                wb_irri_agri_total = response[0].wb_irri_agri_total;
            }
            $('#WaterBudget').text(wb_irri_agri_total);
        }
    });
}




