


//Highcharts.chart('container', {
//    chart: {
//        type: 'column'
//    },
//    title: {
//        text: '',
//        align: 'left'
//    },
//    exporting: { enabled: false },
//    credits: { enabled: false },
//    xAxis: {
//        categories: ['Gujarat', 'Haryana', 'karnataka', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh']
//    },
//    yAxis: {
//        min: 0,
//        title: {
//            text: ''
//        },

//        stackLabels: {
//            enabled: true,
//            style: {
//                fontWeight: 'bold',
//                color: ( // theme
//                    Highcharts.defaultOptions.title.style &&
//                    Highcharts.defaultOptions.title.style.color
//                ) || 'gray',
//                textOutline: 'none'
//            }
//        }
//    },
//    legend: {

//        align: 'center',
//        x: 70,
//        verticalAlign: 'top',
//        y: 10,
//        floating: true,
//        backgroundColor:
//            Highcharts.defaultOptions.legend.backgroundColor || 'white',
//        // borderColor: '#CCC',
//        //borderWidth: 1,
//        shadow: false
//    },
//    tooltip: {
//        headerFormat: `<b style="font-size:18px;margin-bottom:20px;">{series.name}  {point.x}</b><br/><br/>`,
//        pointFormat:
//            `<b style="font-size:16px;">{point.custom.extraInformation}</b>  <b style="font-size:16px;">{point.y}</b><br/><br/>Total: <b>{point.stackTotal}</b><br>`
//    },

//    plotOptions: {
//        column: {
//            stacking: 'normal',
//            dataLabels: {
//                enabled: false
//            },

//        }
//    },

//    series: [{

//        name: 'Achievement',
//        data: [148, 133, 124, 149, 90, 120, 60],
//        stack: 'Europe',
//        color: '#016be1',
//    }, {
//        showInLegend: false,
//        name: '',
//        data: [0, 0, 0, 0, 0, 0, 0],
//        stack: 'Europe',

//    }, {
//        name: 'Target',
//        data: [{
//            y: 77,
//            color: '#860114',
//            custom: {
//                extraInformation: 'Water level',
//            }
//        }, 122, 95, 100, 120, 90, 70],
//        stack: 'North America',
//        color: '#fdb207',
//        showInLegend: true,
//    }, {
//        showInLegend: true,
//        name: 'HGR',
//        data: [{
//            y: 77,
//            color: '#ed1b24',
//            custom: {
//                extraInformation: 'HGR',
//            }
//        }, 0, 0, 0, 0, 0, 0],
//        stack: 'North America',
//        color: '#ed1b24',
//    },
//    {
//        showInLegend: true,
//        name: 'Water Quality',
//        data: [{
//            y: 77,
//            color: '#a548a1',
//            custom: {
//                extraInformation: 'Water Quality',
//            }
//        }, 0, 0, 0, 0, 0, 0],
//        stack: 'North America',
//        color: '#a548a1',
//    }

//    ]
//});