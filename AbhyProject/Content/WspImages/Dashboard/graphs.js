$(function () {
    Highcharts.chart('apepdcl', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Length of proposed UG cable in Km'
        },
        xAxis: {
            categories: [
                'April',
                ' May',
                'June',
                'July'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Length (KM)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} km</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            },
			series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },
        series: [{
            name: 'Region Recharge',
            data: [33.06, 35.91, 30.33, 10.92]

        }, {
            name: 'Region Draft',
            data: [82.87, 76.77, 40.44, 72.67]

        }, {
            name: 'Region Balance',
            data: [160.07, 130.04, 54.82, 84.82]

        }]
    });
	
	
	Highcharts.chart('mdr', {
        chart: {
            type: 'column'
        },
        title: {
            text: ' '
        },
        xAxis: {
            categories: [
                'Srikakulam',
                'Vizianagaram',
                'Visakhapatnam',
                'East Godavari'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ' '
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            },
			series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },
        series: [{
            name: 'No of works',
            data: [5, 4, 3, 5]

        }, {
            name: 'Length of road',
            data: [46.285, 46.8, 35.727, 71]

        }, {
            name: 'Est cast( Rs.in Cr)',
            data: [55.1, 49.7, 42.5, 93.1]

        }]
    });
	
	// Build the chart
       Highcharts.chart('pred', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ' '
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                    name: 'Non<br>Responsive<br>Bids',
                    y: 13
                },{
                    name: 'Multiple Bids <br>received works<br>and Multiple<br>Covers received',
                    y: 55
                }, {
                    name: 'Multiple Bids<br> received but <br>Single Cover<br> Submitted',
                    y: 7
                }, {
                    name: 'Single Bids<br>Received',
                    y: 25
                }]
        }]
    });
});