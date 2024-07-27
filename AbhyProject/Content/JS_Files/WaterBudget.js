var lat = 0;
var long = 0;
$(document).ready(function () {
    getLocation();
    Availability_Info();
    Info();


});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    lat = position.coords.latitude;
    long = position.coords.longitude;
}

var SW_waterAvailability = 0;
var GW_WaterAvailbility = 0;

function Availability_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {


            if (response == "Error") {
                window.location = "/Wsp_new/waterAval_report";
            }
            $('#WaterAvailabilty').text("0");
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                if (response[0].total_gw_available != null && response[0].total_gw_available != "") {
                    GW_WaterAvailbility = parseFloat(response[0].total_gw_available).toFixed(2);
                }
                if (response[0].sw_available_for_use != null && response[0].sw_available_for_use != "") {
                    SW_waterAvailability = parseFloat(response[0].sw_available_for_use).toFixed(2);
                }
            }
        }
    });

}

var Final_papulation = 0;
function Domestic_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/Water_Domestic_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response[0].domestic_people_water_requirement != null && response[0].domestic_people_water_requirement != "") {

                $('#wb_drinking_percapita_req').val(parseFloat(response[0].domestic_people_water_requirement).toFixed(2));
            }
            Final_papulation = response[0].domestic_people_count;
            Info11();

        }

    });

}
function Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterBudgetInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            //if (response == "Error") {
            //    window.location = "/WSPHome/WaterBudget";
            //}
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                // $('#wb_drinking_population').val(response[0].wb_drinking_population);
                $('#wb_drinking_project_pop').val(response[0].wb_drinking_project_pop);
                //if (response[0].wb_drinking_percapita_req != null && response[0].wb_drinking_percapita_req != "") {

                //    $('#wb_drinking_percapita_req').val(parseFloat(response[0].wb_drinking_percapita_req).toFixed(2));
                //}
                $('#wb_drinking_alloc_req').val(response[0].wb_drinking_alloc_req);
                $('#wb_drinking_from_sw').val(response[0].wb_drinking_from_sw);
                $('#wb_drinking_from_gw').val(response[0].wb_drinking_from_gw);
                $('#wb_drinking_total').val(response[0].wb_drinking_total);
                if (response[0].population_growth_rate != null && response[0].population_growth_rate != "") {
                    $('#papulation_growth_rate').val(response[0].population_growth_rate);
                }
                else {
                    $('#papulation_growth_rate').val("1.32");
                }


            }
            else {
                $('#papulation_growth_rate').val("1.32");
            }

            Domestic_Details();

        }
    });
}

function Info11() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_new/WaterDraftInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            $('#wb_drinking_population').val("");


            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
           
            $('#wb_drinking_population').val(Final_papulation);

            ABC();
        }
    });
}

function SaveInfo() {
    var obj = {};
    obj.latitude = lat;
    obj.longitude = long;

    obj.wb_drinking_population = $('#wb_drinking_population').val();
    obj.wb_drinking_project_pop = $('#wb_drinking_project_pop').val();
    obj.wb_drinking_percapita_req = $('#wb_drinking_percapita_req').val();
    obj.wb_drinking_alloc_req = $('#wb_drinking_alloc_req').val();
    obj.wb_drinking_from_sw = $('#wb_drinking_from_sw').val();
    obj.wb_drinking_from_gw = $('#wb_drinking_from_gw').val();
    obj.wb_drinking_total = $('#wb_drinking_total').val();
    obj.wb_irri_agri_sw = $('#wb_irri_agri_sw').val();
    obj.wb_irri_agri_gw = $('#wb_irri_agri_gw').val();
    obj.wb_irri_agri_total = $('#wb_irri_agri_total').val();
    obj.population_growth_rate = $('#papulation_growth_rate').val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Wsp_new/WaterBudgetInfo__InsertData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            //alert(response);
            $('#ERRor1').text(response);
            if (response != "Successfully Saved") {
                window.location = "/Error/DefaultError";
            }
        }
    });
}




$("#wb_drinking_population,#wb_drinking_percapita_req,#papulation_growth_rate").on("keydown keyup", function () {

    ABC();

});

function ABC() {


    var papulation_growth_rate = $('#papulation_growth_rate').val();

    var wb_drinking_project_pop = 0;
    var wb_drinking_population = $('#wb_drinking_population').val();
    if (wb_drinking_population != "" && papulation_growth_rate != "") {
        wb_drinking_project_pop = parseFloat(wb_drinking_population) * parseFloat(papulation_growth_rate);
        $('#wb_drinking_project_pop').val(wb_drinking_project_pop.toFixed(2));
    } else if (wb_drinking_population != "") {
        wb_drinking_project_pop = parseFloat(wb_drinking_population) * 1.32;
        $('#wb_drinking_project_pop').val(wb_drinking_project_pop.toFixed(2));
    }

    var wb_drinking_percapita_req = $('#wb_drinking_percapita_req').val();
    var t_value = 0;

    var wb_drinking_project_pop1 = wb_drinking_project_pop.toFixed(2);

    if (wb_drinking_percapita_req != "") {

        t_value = wb_drinking_percapita_req;


        var wb_drinking_alloc_req = parseFloat(wb_drinking_project_pop1) * parseFloat(t_value) * 365 * 0.0000001;
        $('#wb_drinking_alloc_req').val(wb_drinking_alloc_req.toFixed(2));

        var wb_drinking_from_sw = parseFloat(wb_drinking_alloc_req) * 0.3;
        $('#wb_drinking_from_sw').val(wb_drinking_from_sw.toFixed(2));


        var wb_drinking_from_gw = parseFloat(wb_drinking_alloc_req) * 0.7;
        $('#wb_drinking_from_gw').val(wb_drinking_from_gw.toFixed(2));

        var wb_drinking_from_sw1 = wb_drinking_from_sw.toFixed(2);
        var wb_drinking_from_gw1 = wb_drinking_from_gw.toFixed(2);

        var wb_drinking_total = parseFloat(wb_drinking_from_sw1) + parseFloat(wb_drinking_from_gw1);
        $('#wb_drinking_total').val(wb_drinking_total.toFixed(2));

        var wb_irri_agri_sw = SW_waterAvailability - wb_drinking_from_sw;



        var wb_irri_agri_gw = parseFloat(GW_WaterAvailbility) - wb_drinking_from_gw;



        //var wb_irri_agri_sw1 = wb_irri_agri_sw.toFixed(2);
        //var wb_irri_agri_gw1 = wb_irri_agri_gw.toFixed(2);

        var wb_irri_agri_total = parseFloat(wb_irri_agri_sw) + parseFloat(wb_irri_agri_gw);
        $('#wb_irri_agri_sw').val(wb_irri_agri_sw.toFixed(2));
        $('#wb_irri_agri_gw').val(wb_irri_agri_gw.toFixed(2));
        $('#wb_irri_agri_total').val(wb_irri_agri_total.toFixed(2));

    }

}