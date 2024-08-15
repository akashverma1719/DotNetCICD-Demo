var total_domestic = 0, total_irr = 0, total_ind = 0, other_total = 0;
$(document).ready(function () {
    Info1();


});
var wb_sw_utilization = 0;
var wb_gw_utilization = 0;
var total_utilization = 0;
function Info1() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25_update/WaterutilizationInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                /*window.location = "/WSP_2024_25_update/Water_Aval_report";*/
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response.length != 0) {



                if (response[0].uti_surface_water != null && response[0].uti_surface_water != "") {
                    $('#irri_utili_surface_water').text(parseFloat(response[0].uti_surface_water).toFixed(4));
                    wb_sw_utilization = parseFloat(response[0].uti_surface_water).toFixed(4);

                }

                if (response[0].uti_ground_water != null && response[0].uti_ground_water != "") {
                    $('#irri_utili_ground_water').text(parseFloat(response[0].uti_ground_water).toFixed(4));
                    wb_gw_utilization = parseFloat(response[0].uti_ground_water).toFixed(4);
                }

                total_utilization = parseFloat(wb_sw_utilization) + parseFloat(wb_gw_utilization);
                $('#Irrigated_Total').text(total_utilization.toFixed(4));

                $('#Irrigated_surfacewater').text(wb_sw_utilization);
                $('#Irrigated_groundwater').text(wb_gw_utilization);

                total_irr = total_utilization;
                Info12();

            }
        }
    });

}

var wb_sw_industry = 0, wb_gw_industry = 0;
var total_industry = 0;
function Info12() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25_update/Get_industry_ground_surface',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                /*window.location = "/WSP_2024_25_update/Water_Aval_report";*/
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response != 0) {
                var result = response.split(",");
                var Ground = result[1];
                var Surface = result[0];

                $('#industry_demand_surface_water').text(parseFloat(Surface).toFixed(4));


                $('#industry_demand_ground_water').text(parseFloat(Ground).toFixed(4));


                total_industry = parseFloat(Ground) + parseFloat(Surface);
                $('#Industry_Total').text(total_industry.toFixed(4));

                total_ind = total_industry;


            }
            Info12_2();
        }
    });

}
function Info12_2() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25_update/Get_other_ground_surface',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                /* window.location = "/WSP_2024_25_update/water_Aval_report";*/
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response != 0) {

                var result = response.split(",");
                var Ground = result[1];
                var Surface = result[0];

                $('#other_demand_surface_water').text(parseFloat(Surface).toFixed(4));


                $('#other_demand_ground_water').text(parseFloat(Ground).toFixed(4));


                total_industry = parseFloat(Ground) + parseFloat(Surface);
                $('#Other_Total').text(total_industry.toFixed(4));

                other_total = total_industry;
                get_domestic();

            }
        }
    });

}
var wb_sw_other = 0, wb_gw_other = 0;
var total_other = 0;

function get_domestic() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/Fetch_domestic_data",
        dataType: 'JSON',
        success: function (response) {

            if (response.length > 0) {
                var surface = (parseFloat(response[0].water_dem_hum) + parseFloat(response[0].water_dem_liv)).toFixed(4);
                var ground = (parseFloat(response[0].water_deman_hum) + parseFloat(response[0].water_deman_liv)).toFixed(4);
                $("#domestic_demand_surface_water").text(surface);
                $("#domestic_demand_ground_water").text(ground);
                $("#Domestic_Total").text((parseFloat(surface) + parseFloat(ground)).toFixed(4));

                total_domestic = (parseFloat(surface) + parseFloat(ground));


                $("#avl_surfacewater").text(surface);
                $("#avl_groundwater").text(ground);

                Charts();
            }

        }

    });
}

function Charts() {

    Highcharts.chart('container_Water_utilization', {
        chart: {
            type: 'column'
        },
        title: {
            text: ' Water Demand (ha m)'
        },

        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: '(ha m)'
            }

        },
        colors: [
            '#A0D468',
            '#ED5565',
            '#5D9CEC',
            '#EE82EE'

        ],
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.4f}',
                    crop: false,
                    overflow: 'none'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.4f}</b><br />'
        },

        series: [
            {
                name: " Water Demand (ha m)",
                colorByPoint: true,
                data: [
                    {
                        name: "Total Drinking / <br> Domestic (ha m)",
                        y: total_domestic,

                    },
                    {
                        name: "Total Irrigated Agriculture (ha m)",
                        y: total_irr,

                    },
                    {
                        name: "Total Industrial Use (ha m)",
                        y: total_ind,

                    },
                    {
                        name: "Total Other Uses (if any) (ha m)",
                        y: other_total,

                    }
                ]
            }
        ],

    });


}