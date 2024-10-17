var Financial_allo_total_A = 0;
var Financial_release_total_A = 0;
var Financial_exped_total_A = 0;
var Financial_allo_total_B = 0;
var Financial_release_total_B = 0;
var Financial_exped_total_B = 0;
am4core.useTheme(am4themes_animated);
function first_pie_chart(first_pie_chart, compA, compB) {
    var chart = am4core.create(first_pie_chart, am4charts.PieChart);
    var compA1 = compA;
    var compB1 = compB;
    var total = (parseFloat(compA1) + parseFloat(compB1)).toFixed(2);
    chart.data = [{
        "component": "Component A",
        "component_value": compA1,
        "color": am4core.color("#016BE1")
    }, {
        "component": "Component B",
        "component_value": compB1,
        "color": am4core.color("#E0762E")
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "component";
    pieSeries.dataFields.value = "component_value";

    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.title = "" + total + " (Cr.)";
    label.text = "[bold] {title} [/] \n Total Amount";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 12;

    chart.logo.disabled = true;
    chart.radius = am4core.percent(90);
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "{category} : {component_value}";
    chart.legend.fontSize = 12;

    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

    // chart.legend.width = 380;
    chart.legend.labels.template.maxWidth = 300;
    chart.legend.labels.template.truncate = true;
    chart.legend.itemContainers.template.paddingTop = 0;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    chart.legend.valueLabels.template.disabled = true;
}

// Second Pie Chart
function second_pie_chart(second_pie_chart, A1, A2, A3, A4, A5, A6, Npmu, total, isNpmu) {
    var chart = am4core.create(second_pie_chart, am4charts.PieChart);
    if (Agency_State != 'NPMU') {
        if (isNpmu == 1) {
            chart.data = [{
                "component": "A1: Institutional Support",
                "component_value": A1
            },
            {
                "component": "A2 : Equipment",
                "component_value": A2
            },
            {
                "component": "A3: Works",
                "component_value": A3
            },
            {
                "component": "A4 :IEC",
                "component_value": A4
            },
            {
                "component": "A5 : Training",
                "component_value": A5
            },
            {
                "component": "A6 :Lab and Data center",
                "component_value": A6
            },
            {
                "component": "NPMU",
                "component_value": Npmu
            }];
        }
        else {
            chart.data = [{
                "component": "A1: Institutional Support",
                "component_value": A1
            },
            {
                "component": "A2 : Equipment",
                "component_value": A2
            },
            {
                "component": "A3: Works",
                "component_value": A3
            },
            {
                "component": "A4 :IEC",
                "component_value": A4
            },
            {
                "component": "A5 : Training",
                "component_value": A5
            },
            {
                "component": "A6 :Lab and Data center",
                "component_value": A6
            }];
        }
    }
    else {
        chart.data = [
            {
                "component": "NPMU",
                "component_value": Npmu
            }];
    }



    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "component";
    pieSeries.dataFields.value = "component_value";
    pieSeries.labels.template.wrap = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    pieSeries.colors.list = [

        new am4core.color('#66BFBF'),
        new am4core.color('#F637EC'),
        new am4core.color('#B2A4FF'),
        new am4core.color('#3330E4'),
        new am4core.color('#FBB454'),
        new am4core.color('#FAEA48'),
        new am4core.color('#808080'),
    ]

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.title = "" + total + " (Cr.)";
    label.text = "[bold] {title} [/] \n Total Amount";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 11;

    chart.logo.disabled = true;
    chart.radius = am4core.percent(90);
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "{category} : {component_value}";
    chart.legend.fontSize = 12;
    //chart.legend.width = 200;
    chart.legend.labels.template.maxWidth = 300;
    chart.legend.labels.template.truncate = false;
    chart.legend.itemContainers.template.paddingTop = 0;
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 8;
    markerTemplate.height = 8;
    chart.legend.valueLabels.template.disabled = true;
}

// Thired Pie chart
function thired_pie_chart(thired_pie_chart, B1, B2, B3, B4, B5, total_b,) {
    var chart = am4core.create(thired_pie_chart, am4charts.PieChart);

    chart.data = [{
        "component": "DLI-1",
        "component_value": B1,
        "color": am4core.color("#92C746")
    },
    {
        "component": "DLI-2",
        "component_value": B2,
        "color": am4core.color("#FBDA6C")
    },
    {
        "component": "DLI-3",
        "component_value": B3,
        "color": am4core.color("#FFBA32")
    },
    {
        "component": "DLI-4",
        "component_value": B4,
        "color": am4core.color("#E0762E")
    },
    {
        "component": "DLI-5",
        "component_value": B5,
        "color": am4core.color("#3BA510")
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "component";
    pieSeries.dataFields.value = "component_value";

    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.title = "" + total_b + " (Cr.)";
    label.text = "[bold] {title} [/] \n Total Amount";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 12;

    chart.logo.disabled = true;
    chart.radius = am4core.percent(90);
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "{category} : {component_value}";
    chart.legend.fontSize = 12;
    // chart.legend.width = 380;
    chart.legend.labels.template.maxWidth = 300;
    chart.legend.labels.template.truncate = true;
    chart.legend.itemContainers.template.paddingTop = 0;
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    chart.legend.valueLabels.template.disabled = true;
}

// fourth Pie Chart
function fourth_pie_chart(fourth_pie_chart, compA, compB) {
    var chart = am4core.create(fourth_pie_chart, am4charts.PieChart);
    var compA1 = compA;
    var compB1 = compB;
    var total = (parseFloat(compA1) + parseFloat(compB1)).toFixed(2);
    chart.data = [{
        "component": "Component A",
        "component_value": compA1,
        "color": am4core.color("#016BE1")
    }, {
        "component": "Component B",
        "component_value": compB1,
        "color": am4core.color("#E0762E")
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "component";
    pieSeries.dataFields.value = "component_value";

    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.title = "" + total + " (Cr.)";
    label.text = "[bold] {title} [/] \n Total Amount";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 12;

    chart.logo.disabled = true;
    chart.radius = am4core.percent(90);
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "{category} : {component_value}";
    chart.legend.fontSize = 12;

    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

    // chart.legend.width = 380;
    chart.legend.labels.template.maxWidth = 300;
    chart.legend.labels.template.truncate = true;
    chart.legend.itemContainers.template.paddingTop = 0;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    chart.legend.valueLabels.template.disabled = true;
}

// fifth Pie Chart
function fifth_pie_chart(fifth_pie_chart, A1, A2, A3, A4, A5, A6, Npmu, total, IsNppmu) {
    var chart = am4core.create(fifth_pie_chart, am4charts.PieChart);
    if (Agency_State != 'NPMU') {
        if (IsNppmu == 1) {
            chart.data = [{
                "component": "A1: Institutional Support",
                "component_value": A1
            },
            {
                "component": "A2 : Equipment",
                "component_value": A2
            },
            {
                "component": "A3: Works",
                "component_value": A3
            },
            {
                "component": "A4 :IEC",
                "component_value": A4
            },
            {
                "component": "A5 : Training",
                "component_value": A5
            },
            {
                "component": "A6 : Lab and Data center",
                "component_value": A6
            },
            {
                "component": "NPMU",
                "component_value": Npmu
            }];
        }
        else {
            chart.data = [{
                "component": "A1: Institutional Support",
                "component_value": A1
            },
            {
                "component": "A2 : Equipment",
                "component_value": A2
            },
            {
                "component": "A3: Works",
                "component_value": A3
            },
            {
                "component": "A4 :IEC",
                "component_value": A4
            },
            {
                "component": "A5 : Training",
                "component_value": A5
            },
            {
                "component": "A6 : Lab and Data center",
                "component_value": A6
            }];
        }
    }
    else {
        chart.data = [
            {
                "component": "NPMU",
                "component_value": Npmu
            }];
    }
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "component";
    pieSeries.dataFields.value = "component_value";
    pieSeries.labels.template.wrap = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.colors.list = [
        new am4core.color('#66BFBF'),
        new am4core.color('#F637EC'),
        new am4core.color('#B2A4FF'),
        new am4core.color('#3330E4'),
        new am4core.color('#FBB454'),
        new am4core.color('#FAEA48'),
        new am4core.color('#808080'),
    ]

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.title = "" + total + " (Cr.)";
    label.text = "[bold] {title} [/] \n Total Amount";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 11;

    chart.logo.disabled = true;
    chart.radius = am4core.percent(90);
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "{category} : {component_value}";
    chart.legend.fontSize = 12;
    //chart.legend.width = 200;
    chart.legend.labels.template.maxWidth = 300;
    chart.legend.labels.template.truncate = false;
    chart.legend.itemContainers.template.paddingTop = 0;
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;


    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 8;
    markerTemplate.height = 8;
    chart.legend.valueLabels.template.disabled = true;

}


// Sixth Pie chart
function sixth_pie_chart(sixth_pie_chart, B1, B2, B3, B4, B5, total_b) {
    var chart = am4core.create(sixth_pie_chart, am4charts.PieChart);

    chart.data = [{
        "component": "DLI-1",
        "component_value": B1,
        "color": am4core.color("#92C746")
    },
    {
        "component": "DLI-2",
        "component_value": B2,
        "color": am4core.color("#FBDA6C")
    },
    {
        "component": "DLI-3",
        "component_value": B3,
        "color": am4core.color("#FFBA32")
    },
    {
        "component": "DLI-4",
        "component_value": B4,
        "color": am4core.color("#E0762E")
    },
    {
        "component": "DLI-5",
        "component_value": B5,
        "color": am4core.color("#3BA510")
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "component";
    pieSeries.dataFields.value = "component_value";

    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";

    var label = chart.seriesContainer.createChild(am4core.Label);
    label.title = "" + total_b + " (Cr.)";
    label.text = "[bold] {title} [/] \n Total Amount";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 12;

    chart.logo.disabled = true;
    chart.radius = am4core.percent(90);
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.labels.template.text = "{category} : {component_value}";
    chart.legend.fontSize = 12;
    // chart.legend.width = 380;
    chart.legend.labels.template.maxWidth = 300;
    chart.legend.labels.template.truncate = true;
    chart.legend.itemContainers.template.paddingTop = 0;
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    chart.legend.valueLabels.template.disabled = true;
}

function first_bar_chart(first_bar_chart, FInalData_achive, FInalData) {
    debugger;
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        var ValCheck = parseFloat(FInalData[i].DigitalWater_Target)
        if (ValCheck > max)
            max = FInalData[i].DigitalWater_Target;
    }
    for (i = 0; i < FInalData_achive.length; i++) {
        var ValCheck = parseFloat(FInalData_achive[i].DigitalWater_Achievement)
        if (ValCheck > max)
            max = FInalData_achive[i].DigitalWater_Achievement;
    }
    max = parseFloat(max) + 500;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(first_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 11;
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.labelFontSize = 11;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //  bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];
    //if (FInalData_achive.length == 0) {
    //    for (var i = 0; i < FInalData.length; i++) {
    //        FInalData_achive.push({
    //           State: FInalData[i].state,
    //            DigitalWater_Achievement: 0,
    //        })
    //    }
    //}
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].DigitalWater_Target,
                second: FInalData_achive[i].DigitalWater_Achievement,
                third: 0,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    //chart.data = [
    //    {
    //        category: 'Gujarat',
    //        first: 230.27,
    //        second: 4.12,
    //        third: 0.71
    //    },
    //    {
    //        category: 'Haryana',
    //        first: 207.17,
    //        second: 4.9,
    //        third: 6.13
    //    },
    //    {
    //        category: 'Karnataka',
    //        first: 171,
    //        second: 12.2,
    //        third: 0.96
    //    },
    //    {
    //        category: 'Maharashtra',
    //        first: 185.6,
    //        second: 35.2,
    //        third: 0.22
    //    },
    //    {
    //        category: 'MP',
    //        first: 89.77,
    //        second: 1.48,
    //        third: 1.44
    //    },
    //    {
    //        category: 'Rajasthan',
    //        first: 180.02,
    //        second: 4.05,
    //        third: 0.65
    //    },
    //    {
    //        category: 'UP',
    //        first: 107.30,
    //        second: 2.33,
    //        third: 3.11
    //    },
    //    {
    //        category: 'Total',
    //        first: 1172.62,
    //        second: 34,
    //        third: 13.19
    //    }
    //]


    createSeries('first', 'Target');
    createSeries('second', 'Achievement');
    //createSeries('third', 'Expenditure');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Second bar chart
function second_bar_chart(second_bar_chart, FInalData_achive, FInalData) {

    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        var ValCheck = parseFloat(FInalData[i].DigitalAnalog_Target)
        if (ValCheck > max)
            max = FInalData[i].DigitalAnalog_Target;
    }

    max = parseFloat(max) + 500;

    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(second_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 11;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;
        bullet.label.fill = am4core.color('#000000');

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].DigitalAnalog_Target,
                second: FInalData_achive[i].DigitalAnalog_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;


    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);
        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Third bar chart
function third_bar_chart(third_bar_chart, FInalData_achive, FInalData) {
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        var ValCheck = parseFloat(FInalData[i].WaterFlow_Target)
        if (ValCheck > max)
            max = FInalData[i].WaterFlow_Target;
    }
    max = parseFloat(max) + 500;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(third_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        // bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].WaterFlow_Target,
                second: FInalData_achive[i].WaterFlow_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function third_bar_chart_rain(third_bar_chart_rain, FInalData_achive, FInalData) {
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        var ValCheck = parseFloat(FInalData[i].Rain_Target)
        if (ValCheck > max)
            max = FInalData[i].Rain_Target;
    }
    max = parseFloat(max) + 500;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(third_bar_chart_rain, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";

    let label = chart.chartContainer.createChild(am4core.Label);
    if (Agency_State == "ALL") {
        label.text = "(Karnataka- Data Integration Through Convergence)";
    }
    else if (Agency_State == "Karnataka") {
        label.text = "(Karnataka - Data Integration Through Convergence)";
    }
    else {
        label.text = "";
    }


    label.fill = '#ff4a4a';

    //label.align = "center";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category.formatNumber('#.00')}: {valueY}";

        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //  bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].Rain_Target,
                second: FInalData_achive[i].Rain_Achievement,
            });
        }
        //if (FInalData[i].state == 'Karnataka') {

        //    FInalData[i].state = 'Karnataka*'
        //    FInalData_All.push({
        //        category: FInalData[i].state,
        //        first: FInalData[i].Rain_Target,
        //        second: FInalData_achive[i].Rain_Achievement,
        //    });
        //    FInalData[i].state = 'Karnataka'
        //}
        //else {
        //    FInalData_All.push({
        //        category: FInalData[i].state,
        //        first: FInalData[i].Rain_Target,
        //        second: FInalData_achive[i].Rain_Achievement,
        //    });
        //}
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Fourth bar chart
function fourth_bar_chart(fourth_bar_chart, FInalData_achive, FInalData) {
    var max = 0;

    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].WaterQuality_Target)
        if (ValCheck > max)
            max = FInalData[i].WaterQuality_Target;
    }
    max = parseFloat(max) + 500;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(fourth_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    let label = chart.chartContainer.createChild(am4core.Label);
    if (Agency_State == "ALL") {
        label.text = "(Maharashtra & Uttar Pradesh- Data Integration Through Convergence)";
    }
    else if (Agency_State == "Maharashtra") {
        label.text = "(Maharashtra - Data Integration Through Convergence)";
    }
    else if (Agency_State == "Uttar Pradesh") {
        label.text = "(Uttar Pradesh- Data Integration Through Convergence)";
    }
    else {
        label.text = "";
    }
    label.fill = '#ff4a4a';
    //xAxis.title.text = "(*Data Integration Through Convergence)";
    //xAxis.title.fill = '#ff4a4a';


    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category.formatNumber('#.00')}: {valueY}";

        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        // bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].WaterQuality_Target,
                second: FInalData_achive[i].WaterQuality_Achievement,
            });
        }
        //if (FInalData[i].state == 'Maharashtra') {
        //    FInalData[i].state = 'Maharashtra*'
        //    FInalData_All.push({
        //        category: FInalData[i].state,
        //        first: FInalData[i].WaterQuality_Target,
        //        second: FInalData_achive[i].WaterQuality_Achievement,
        //    });
        //    FInalData[i].state = 'Maharashtra'
        //}    
        //if (FInalData[i].state == 'Uttar Pradesh') {
        //    FInalData[i].state = 'Uttar Pradesh*'
        //    FInalData_All.push({
        //        category: FInalData[i].state,
        //        first: FInalData[i].WaterQuality_Target,
        //        second: FInalData_achive[i].WaterQuality_Achievement,
        //    });
        //    FInalData[i].state = 'Uttar Pradesh'
        //}    
        //else
        //{
        //    FInalData_All.push({
        //        category: FInalData[i].state,
        //        first: FInalData[i].WaterQuality_Target,
        //        second: FInalData_achive[i].WaterQuality_Achievement,
        //    });
        //}
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Fivth bar chart
function fivth_bar_chart(fivth_bar_chart, FInalData_achive, FInalData) {

    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        var ValCheck = parseFloat(FInalData[i].Work_Target)

        if (ValCheck > max) {

            max = FInalData[i].Work_Target;
        }
    }

    max = parseFloat(max) + 500;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(fivth_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];

    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].Work_Target,
                second: FInalData_achive[i].Work_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Sixth bar chart
function sixth_bar_chart_gp(sixth_bar_chart_gp, FInalData_achieve, FInalData_target) {
    var max = 0;
    for (i = 0; i < FInalData_target.length; i++) {
        ValCheck = parseFloat(FInalData_target[i].Training_Target_gp)
        if (ValCheck > max)
            max = FInalData_target[i].Training_Target_gp;
    }
    for (i = 0; i < FInalData_achieve.length; i++) {
        ValCheck = parseFloat(FInalData_achieve[i].Training_Achievement_gp)
        if (ValCheck > max)
            max = FInalData_achieve[i].Training_Achievement_gp;
    }
    max = parseFloat(max) + 2000;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(sixth_bar_chart_gp, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    //let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "In Numbers";

    //valueAxis.title.fontWeight = 800;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        //series.columns.template.tooltipText = "aa";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = -180;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData_achieve.length; i++) {
        if (FInalData_achieve[i].state != "NPMU") {
            FInalData_All.push({
                category: FInalData_achieve[i].state,
                first: FInalData_target[i].Training_Target_gp,
                second: FInalData_achieve[i].Training_Achievement_gp,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;


    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function sixth_bar_chart_block(sixth_bar_chart_bl, FInalData_achieve, FInalData_target) {

    var max = 0;
    for (i = 0; i < FInalData_target.length; i++) {
        ValCheck = parseFloat(FInalData_target[i].Training_Target_bl)
        if (ValCheck > max)
            max = FInalData_target[i].Training_Target_bl;
    }
    for (i = 0; i < FInalData_achieve.length; i++) {
        ValCheck = parseFloat(FInalData_achieve[i].Training_Achievement_bl)
        if (ValCheck > max)
            max = FInalData_achieve[i].Training_Achievement_bl;
    }
    max = parseFloat(max) + 50;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(sixth_bar_chart_bl, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    //let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "In Numbers";

    //valueAxis.title.fontWeight = 800;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        //series.columns.template.tooltipText = "aa";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = -180;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData_achieve.length; i++) {
        if (FInalData_achieve[i].state != "NPMU") {
            FInalData_All.push({
                category: FInalData_achieve[i].state,
                first: FInalData_target[i].Training_Target_bl,
                second: FInalData_achieve[i].Training_Achievement_bl,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;


    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function sixth_bar_chart_dis(sixth_bar_chart_dis, FInalData_achieve, FInalData_target) {

    var max = 0;
    for (i = 0; i < FInalData_target.length; i++) {
        ValCheck = parseFloat(FInalData_target[i].Training_Target_dis)
        if (ValCheck > max)
            max = FInalData_target[i].Training_Target_dis;
    }
    for (i = 0; i < FInalData_achieve.length; i++) {
        ValCheck = parseFloat(FInalData_achieve[i].Training_Achievement_dis)
        if (ValCheck > max)
            max = FInalData_achieve[i].Training_Achievement_dis;
    }
    max = parseFloat(max) + 10;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(sixth_bar_chart_dis, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    //let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "In Numbers";

    //valueAxis.title.fontWeight = 800;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        //series.columns.template.tooltipText = "aa";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = -180;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData_achieve.length; i++) {
        if (FInalData_achieve[i].state != "NPMU") {
            FInalData_All.push({
                category: FInalData_achieve[i].state,
                first: FInalData_target[i].Training_Target_dis,
                second: FInalData_achieve[i].Training_Achievement_dis,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;


    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function sixth_bar_chart_state(sixth_bar_chart_st, FInalData_achieve, FInalData_target) {

    var max = 0;
    for (i = 0; i < FInalData_target.length; i++) {
        ValCheck = parseFloat(FInalData_target[i].Training_Target_state)
        if (ValCheck > max)
            max = FInalData_target[i].Training_Target_state;
    }
    for (i = 0; i < FInalData_achieve.length; i++) {
        ValCheck = parseFloat(FInalData_achieve[i].Training_Achievement_state)
        if (ValCheck > max)
            max = FInalData_achieve[i].Training_Achievement_state;
    }
    max = parseFloat(max) + 10;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(sixth_bar_chart_st, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    //let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "In Numbers";

    //valueAxis.title.fontWeight = 800;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        //series.columns.template.tooltipText = "aa";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = -180;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData_achieve.length; i++) {
        if (FInalData_achieve[i].state != "NPMU") {
            FInalData_All.push({
                category: FInalData_achieve[i].state,
                first: FInalData_target[i].Training_Target_state,
                second: FInalData_achieve[i].Training_Achievement_state,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;


    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function seven_bar_chart(FInalData) {

    if (FInalData.length == 1) {


        var first_G = 0;
        var second_G = 0;
        var third_G = 0;
        var fourth_G = 0;
        var fifth_G = 0;

        var first_H = 0;
        var second_H = 0;
        var third_H = 0;
        var fourth_H = 0;
        var fifth_H = 0;

        var first_K = 0;
        var second_K = 0;
        var third_K = 0;
        var fourth_K = 0;
        var fifth_K = 0;

        var first_MP = 0;
        var second_MP = 0;
        var third_MP = 0;
        var fourth_MP = 0;
        var fifth_MP = 0;

        var first_MH = 0;
        var second_MH = 0;
        var third_MH = 0;
        var fourth_MH = 0;
        var fifth_MH = 0;

        var first_K = 0;
        var second_K = 0;
        var third_K = 0;
        var fourth_K = 0;
        var fifth_K = 0;

        var first_K = 0;
        var second_K = 0;
        var third_K = 0;
        var fourth_K = 0;
        var fifth_K = 0;

        var first_R = 0;
        var second_R = 0;
        var third_R = 0;
        var fourth_R = 0;
        var fifth_R = 0;

        var first_UP = 0;
        var second_UP = 0;
        var third_UP = 0;
        var fourth_UP = 0;
        var fifth_UP = 0;

        var first_G_new = 0;
        var second_G_new = 0;
        var third_G_new = 0;
        var fourth_G_new = 0;
        var fifth_G_new = 0;

        let myArray = [];
        for (var i = 0; i < FInalData.length; i++) {
            let newValue = FInalData[i].state;
            myArray.push(newValue);
            if (FInalData[i].state == 'Gujarat') {

                first_G = parseFloat(FInalData[i].DLI1_Target);
                second_G = parseFloat(FInalData[i].DLI1_Achievement);
                third_G = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_G = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_G = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_G;
                second_G_new = second_G;
                third_G_new = third_G;
                fourth_G_new = fourth_G;
                fifth_G_new = fifth_G;

                first_H = "";
                second_H = "";
                third_H = "";
                fourth_H = "";
                fifth_H = "";

                first_K = "";
                second_K = "";
                third_K = "";
                fourth_K = "";
                fifth_K = "";

                first_MP = "";
                second_MP = "";
                third_MP = "";
                fourth_MP = "";
                fifth_MP = "";

                first_MH = "";
                second_MH = "";
                third_MH = "";
                fourth_MH = "";
                fifth_MH = "";


                first_R = "";
                second_R = "";
                third_R = "";
                fourth_R = "";
                fifth_R = "";

                first_UP = "";
                second_UP = "";
                third_UP = "";
                fourth_UP = "";
                fifth_UP = "";
            }
            else if (FInalData[i].state == 'Haryana') {

                /*category: FInalData[i].state,*/
                first_H = parseFloat(FInalData[i].DLI1_Target);
                second_H = parseFloat(FInalData[i].DLI1_Achievement);
                third_H = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_H = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_H = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_H;
                second_G_new = second_H;
                third_G_new = third_H;
                fourth_G_new = fourth_H;
                fifth_G_new = fifth_H;

                first_G = "";
                second_G = "";
                third_G = "";
                fourth_G = "";
                fifth_G = "";

                first_K = "";
                second_K = "";
                third_K = "";
                fourth_K = "";
                fifth_K = "";

                first_MP = "";
                second_MP = "";
                third_MP = "";
                fourth_MP = "";
                fifth_MP = "";

                first_MH = "";
                second_MH = "";
                third_MH = "";
                fourth_MH = "";
                fifth_MH = "";

                first_R = "";
                second_R = "";
                third_R = "";
                fourth_R = "";
                fifth_R = "";

                first_UP = "";
                second_UP = "";
                third_UP = "";
                fourth_UP = "";
                fifth_UP = "";
            }
            else if (FInalData[i].state == 'Karnataka') {

                /*category: FInalData[i].state,*/
                first_K = parseFloat(FInalData[i].DLI1_Target);
                second_K = parseFloat(FInalData[i].DLI1_Achievement);
                third_K = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_K = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_K = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_K;
                second_G_new = second_K;
                third_G_new = third_K;
                fourth_G_new = fourth_K;
                fifth_G_new = fifth_K;

                first_G = "";
                second_G = "";
                third_G = "";
                fourth_G = "";
                fifth_G = "";

                first_H = "";
                second_H = "";
                third_H = "";
                fourth_H = "";
                fifth_H = "";

                first_MP = "";
                second_MP = "";
                third_MP = "";
                fourth_MP = "";
                fifth_MP = "";

                first_MH = "";
                second_MH = "";
                third_MH = "";
                fourth_MH = "";
                fifth_MH = "";

                first_R = "";
                second_R = "";
                third_R = "";
                fourth_R = "";
                fifth_R = "";

                first_UP = "";
                second_UP = "";
                third_UP = "";
                fourth_UP = "";
                fifth_UP = "";
            }
            else if (FInalData[i].state == 'Madhya Pradesh') {

                /*category: FInalData[i].state,*/
                first_MP = parseFloat(FInalData[i].DLI1_Target);
                second_MP = parseFloat(FInalData[i].DLI1_Achievement);
                third_MP = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_MP = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_MP = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_MP;
                second_G_new = second_MP;
                third_G_new = third_MP;
                fourth_G_new = fourth_MP;
                fifth_G_new = fifth_MP;

                first_G = "";
                second_G = "";
                third_G = "";
                fourth_G = "";
                fifth_G = "";

                first_H = "";
                second_H = "";
                third_H = "";
                fourth_H = "";
                fifth_H = "";

                first_K = "";
                second_K = "";
                third_K = "";
                fourth_K = "";
                fifth_K = "";

                first_MH = "";
                second_MH = "";
                third_MH = "";
                fourth_MH = "";
                fifth_MH = "";

                first_R = "";
                second_R = "";
                third_R = "";
                fourth_R = "";
                fifth_R = "";

                first_UP = "";
                second_UP = "";
                third_UP = "";
                fourth_UP = "";
                fifth_UP = "";
            }
            else if (FInalData[i].state == 'Maharashtra') {

                /*category: FInalData[i].state,*/
                first_MH = parseFloat(FInalData[i].DLI1_Target);
                second_MH = parseFloat(FInalData[i].DLI1_Achievement);
                third_MH = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_MH = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_MH = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_MH;
                second_G_new = second_MH;
                third_G_new = third_MH;
                fourth_G_new = fourth_MH;
                fifth_G_new = fifth_MH;

                first_G = "";
                second_G = "";
                third_G = "";
                fourth_G = "";
                fifth_G = "";

                first_H = "";
                second_H = "";
                third_H = "";
                fourth_H = "";
                fifth_H = "";

                first_K = "";
                second_K = "";
                third_K = "";
                fourth_K = "";
                fifth_K = "";

                first_MP = "";
                second_MP = "";
                third_MP = "";
                fourth_MP = "";
                fifth_MP = "";


                first_R = "";
                second_R = "";
                third_R = "";
                fourth_R = "";
                fifth_R = "";

                first_UP = "";
                second_UP = "";
                third_UP = "";
                fourth_UP = "";
                fifth_UP = "";
            }
            else if (FInalData[i].state == 'Rajasthan') {

                /*category: FInalData[i].state,*/
                first_R = parseFloat(FInalData[i].DLI1_Target);
                second_R = parseFloat(FInalData[i].DLI1_Achievement);
                third_R = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_R = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_R = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_R;
                second_G_new = second_R;
                third_G_new = third_R;
                fourth_G_new = fourth_R;
                fifth_G_new = fifth_R;

                first_G = "";
                second_G = "";
                third_G = "";
                fourth_G = "";
                fifth_G = "";

                first_H = "";
                second_H = "";
                third_H = "";
                fourth_H = "";
                fifth_H = "";

                first_K = "";
                second_K = "";
                third_K = "";
                fourth_K = "";
                fifth_K = "";

                first_MP = "";
                second_MP = "";
                third_MP = "";
                fourth_MP = "";
                fifth_MP = "";

                first_MH = "";
                second_MH = "";
                third_MH = "";
                fourth_MH = "";
                fifth_MH = "";

                first_UP = "";
                second_UP = "";
                third_UP = "";
                fourth_UP = "";
                fifth_UP = "";
            }
            else if (FInalData[i].state == 'Uttar Pradesh') {

                /*category: FInalData[i].state,*/
                first_UP = parseFloat(FInalData[i].DLI1_Target);
                second_UP = parseFloat(FInalData[i].DLI1_Achievement);
                third_UP = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_UP = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_UP = parseFloat(FInalData[i].DLI1_Water_HGR);

                first_G_new = first_UP;
                second_G_new = second_UP;
                third_G_new = third_UP;
                fourth_G_new = fourth_UP;
                fifth_G_new = fifth_UP;

                first_G = "";
                second_G = "";
                third_G = "";
                fourth_G = "";
                fifth_G = "";

                first_H = "";
                second_H = "";
                third_H = "";
                fourth_H = "";
                fifth_H = "";

                first_K = "";
                second_K = "";
                third_K = "";
                fourth_K = "";
                fifth_K = "";

                first_MP = "";
                second_MP = "";
                third_MP = "";
                fourth_MP = "";
                fifth_MP = "";

                first_MH = "";
                second_MH = "";
                third_MH = "";
                fourth_MH = "";
                fifth_MH = "";

                first_R = "";
                second_R = "";
                third_R = "";
                fourth_R = "";
                fifth_R = "";

            }
        }

        if (first_G == 0 && second_G == 0 && third_G == 0 && fourth_G == 0 && fifth_G == 0 &&
            first_H == 0 && second_H == 0 && third_H == 0 && fourth_H == 0 && fifth_H == 0 &&
            first_K == 0 && second_K == 0 && third_K == 0 && fourth_K == 0 && fifth_K == 0 &&
            first_MP == 0 && second_MP == 0 && third_MP == 0 && fourth_MP == 0 && fifth_MP == 0 &&
            first_MH == 0 && second_MH == 0 && third_MH == 0 && fourth_MH == 0 && fifth_MH == 0 &&
            first_R == 0 && second_R == 0 && third_R == 0 && fourth_R == 0 && fifth_R == 0 &&
            first_UP == 0 && second_UP == 0 && third_UP == 0 && fourth_UP == 0 && fifth_UP == 0
        ) {
            $("#div_dli1_graph").hide();
        } else {
            $("#div_dli1_graph").show();
        }
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: '',
                align: 'left'
            },
            exporting: { enabled: false },
            credits: { enabled: false },
            xAxis: {
                categories: myArray
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },

                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray',
                        textOutline: 'none'
                    }
                }
            },
            legend: {

                align: 'center',
                x: 70,
                verticalAlign: 'top',
                y: -17,
                floating: false,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                //borderColor: '#CCC',
                //borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: `<b style="font-size:18px;margin-bottom:20px;">{series.name}  {point.x}</b><br/><br/>`,
                pointFormat:
                    `<b style="font-size:16px;">{point.custom.extraInformation}</b><b style="font-size:16px;">{point.y}</b><br/><br/>Total: <b>{point.stackTotal}</b><br>`
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    },

                }
            },

            series: [{

                name: 'Target',
                data: [first_G_new],
                stack: 'Europe',
                color: '#016be1',
            }, {
                showInLegend: false,
                name: '',
                data: [],
                stack: 'Europe',

            }, {
                showInLegend: true,
                name: 'HGR Achievement',
                data: [{
                    y: fifth_G_new,
                    color: '#a548a1',
                    custom: {
                        extraInformation: '',
                    }
                }],
                stack: 'North America',
                color: '#a548a1',
            }, {
                showInLegend: true,
                name: 'Water Quality Achievement',
                data: [{
                    y: fourth_G_new,
                    color: '#FCB206',
                    custom: {
                        extraInformation: '',
                    }
                }],
                stack: 'North America',
                color: '#FCB206',
            },

            {
                name: 'Water level Achievement',
                data: [{
                    y: third_G_new,
                    color: '#FFFF00',
                    custom: {
                        extraInformation: '',
                    }
                }],
                stack: 'North America',
                color: '#FFFF00',
                showInLegend: true,
            }


            ]
        });
    }
    else {


        var first_G = 0;
        var second_G = 0;
        var third_G = 0;
        var fourth_G = 0;
        var fifth_G = 0;

        var first_H = 0;
        var second_H = 0;
        var third_H = 0;
        var fourth_H = 0;
        var fifth_H = 0;

        var first_K = 0;
        var second_K = 0;
        var third_K = 0;
        var fourth_K = 0;
        var fifth_K = 0;

        var first_MP = 0;
        var second_MP = 0;
        var third_MP = 0;
        var fourth_MP = 0;
        var fifth_MP = 0;

        var first_MH = 0;
        var second_MH = 0;
        var third_MH = 0;
        var fourth_MH = 0;
        var fifth_MH = 0;

        var first_K = 0;
        var second_K = 0;
        var third_K = 0;
        var fourth_K = 0;
        var fifth_K = 0;

        var first_K = 0;
        var second_K = 0;
        var third_K = 0;
        var fourth_K = 0;
        var fifth_K = 0;

        var first_R = 0;
        var second_R = 0;
        var third_R = 0;
        var fourth_R = 0;
        var fifth_R = 0;

        var first_UP = 0;
        var second_UP = 0;
        var third_UP = 0;
        var fourth_UP = 0;
        var fifth_UP = 0;

        for (var i = 0; i < FInalData.length; i++) {
            if (FInalData[i].state == 'Gujarat') {
                /*category: FInalData[i].state,*/
                first_G = parseFloat(FInalData[i].DLI1_Target);
                second_G = parseFloat(FInalData[i].DLI1_Achievement);
                third_G = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_G = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_G = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
            else if (FInalData[i].state == 'Haryana') {
                /*category: FInalData[i].state,*/
                first_H = parseFloat(FInalData[i].DLI1_Target);
                second_H = parseFloat(FInalData[i].DLI1_Achievement);
                third_H = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_H = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_H = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
            else if (FInalData[i].state == 'Karnataka') {
                /*category: FInalData[i].state,*/
                first_K = parseFloat(FInalData[i].DLI1_Target);
                second_K = parseFloat(FInalData[i].DLI1_Achievement);
                third_K = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_K = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_K = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
            else if (FInalData[i].state == 'Madhya Pradesh') {
                /*category: FInalData[i].state,*/
                first_MP = parseFloat(FInalData[i].DLI1_Target);
                second_MP = parseFloat(FInalData[i].DLI1_Achievement);
                third_MP = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_MP = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_MP = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
            else if (FInalData[i].state == 'Maharashtra') {
                /*category: FInalData[i].state,*/
                first_MH = parseFloat(FInalData[i].DLI1_Target);
                second_MH = parseFloat(FInalData[i].DLI1_Achievement);
                third_MH = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_MH = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_MH = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
            else if (FInalData[i].state == 'Rajasthan') {
                /*category: FInalData[i].state,*/
                first_R = parseFloat(FInalData[i].DLI1_Target);
                second_R = parseFloat(FInalData[i].DLI1_Achievement);
                third_R = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_R = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_R = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
            else if (FInalData[i].state == 'Uttar Pradesh') {
                /*category: FInalData[i].state,*/
                first_UP = parseFloat(FInalData[i].DLI1_Target);
                second_UP = parseFloat(FInalData[i].DLI1_Achievement);
                third_UP = parseFloat(FInalData[i].DLI1_Water_Level);
                fourth_UP = parseFloat(FInalData[i].DLI1_Water_Quality);
                fifth_UP = parseFloat(FInalData[i].DLI1_Water_HGR);
            }
        }

        if (first_G == 0 && second_G == 0 && third_G == 0 && fourth_G == 0 && fifth_G == 0 &&
            first_H == 0 && second_H == 0 && third_H == 0 && fourth_H == 0 && fifth_H == 0 &&
            first_K == 0 && second_K == 0 && third_K == 0 && fourth_K == 0 && fifth_K == 0 &&
            first_MP == 0 && second_MP == 0 && third_MP == 0 && fourth_MP == 0 && fifth_MP == 0 &&
            first_MH == 0 && second_MH == 0 && third_MH == 0 && fourth_MH == 0 && fifth_MH == 0 &&
            first_R == 0 && second_R == 0 && third_R == 0 && fourth_R == 0 && fifth_R == 0 &&
            first_UP == 0 && second_UP == 0 && third_UP == 0 && fourth_UP == 0 && fifth_UP == 0
        ) {
            $("#div_dli1_graph").hide();
        } else {
            $("#div_dli1_graph").show();
        }

        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: '',
                align: 'left'
            },
            exporting: { enabled: false },
            credits: { enabled: false },
            xAxis: {
                categories: ['Gujarat', 'Haryana', 'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'gray',
                        textOutline: 'none'
                    }
                }
            },
            legend: {
                align: 'center',
                x: 70,
                verticalAlign: 'top',
                y: -17,
                floating: false,
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                shadow: false
            },
            tooltip: {
                useHTML: true,
                formatter: function () {
                    let thisPoint = this.point,
                        allSeries = this.series.chart.series,
                        thisIndex = thisPoint.index,
                        stateName = this.x,
                        returnString = '';

                    if (this.series.name === 'Target') {
                        returnString = '<b style="color: #ffffff; font-weight: bold;">Target</b><br/><br/>';
                        /*returnString += '<span style="color:#ffffff;">' + stateName + ' : ' + this.point.stackTotal + '</span><br/><br/>';*/
                    } else {
                        returnString = '<b style="color: #000; font-weight: bold;">Achievements</b><br/><br/>';
                        returnString += '<span style="color:#000; font-weight: bold;">' + stateName + ' : ' + this.point.stackTotal + '</span><br/>';
                    }

                    let textColor = '';

                    // Customized achievement names mapping
                    const achievementAbbreviations = {
                        'HGR Achievement': 'HGR',
                        'Water Quality Achievement': 'Water Quality',
                        'Water level Achievement': 'Water Level',
                        // Add more mappings as needed
                    };

                    // Determine text color based on series name
                    allSeries.forEach(function (ser) {
                        if (ser.options.stack === thisPoint.series.options.stack) {
                            const point = ser.points[thisIndex];
                            if (point && point.y !== null) {
                                let achievementName = ser.name; // By default, use the series name
                                if (achievementAbbreviations.hasOwnProperty(ser.name)) {
                                    achievementName = achievementAbbreviations[ser.name]; // Use abbreviated name if defined in the mapping
                                }
                                if (ser.name === 'HGR Achievement') {
                                    textColor = '#880015'; // Red color for HGR Achievement
                                } else if (ser.name === 'Water Quality Achievement') {
                                    textColor = '#dfff00'; // Yellow color for Water Quality and Water level Achievement
                                } else if (ser.name === 'Water level Achievement') {
                                    textColor = '#fff200'; // Yellow color for Water Quality and Water level Achievement
                                }
                                else {
                                    textColor = (ser.name === 'Target') ? '#ffffff' : '#000000'; // White text for 'Target', Black text for others
                                }
                                // Display abbreviated achievement name with bold styling
                                returnString += '<span style="color:' + textColor + '; font-weight: bold;">' + (ser.name === 'Target' ? stateName : achievementName) + ': ' + point.y + '</span><br/>';
                            }
                        }
                    });

                    // Add inline style for tooltip content
                    return '<div style="padding: 8px; border-radius: 4px;">' + returnString + '</div>';
                }
            },


            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    },
                    states: {
                        hover: {
                            enabled: true
                        }
                    },
                    point: {
                        events: {
                            mouseOver: function () {
                                const chart = this.series.chart;
                                let bgColor = (this.series.name === 'Target') ? '#016be1' : '#FCB206';

                                if (chart.tooltip.label) {
                                    chart.tooltip.label.attr({
                                        fill: bgColor
                                    });
                                }
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Target',
                data: [first_G, first_H, first_K, first_MP, first_MH, first_R, first_UP],
                stack: 'Target',
                color: '#016be1'
            }, {
                showInLegend: true,
                name: 'HGR Achievement',
                data: [{
                    y: fifth_G,
                    color: '#a548a1',
                    custom: { extraInformation: '' }
                }, fifth_H, fifth_K, fifth_MP, fifth_MH, fifth_R, fifth_UP],
                stack: 'Achievement',
                color: '#a548a1'
            }, {
                showInLegend: true,
                name: 'Water Quality Achievement',
                data: [{
                    y: fourth_G,
                    color: '#dfff00 ',
                    custom: { extraInformation: '' }
                }, fourth_H, fourth_K, fourth_MP, fourth_MH, fourth_R, fourth_UP],
                stack: 'Achievement',
                color: '#dfff00'
            }, {
                name: 'Water level Achievement',
                data: [{
                    y: third_G,
                    color: '#FFFF00',
                    custom: { extraInformation: '' }
                }, third_H, third_K, third_MP, third_MH, third_R, third_UP],
                stack: 'Achievement',
                color: '#FFFF00',
                showInLegend: true
            }]
        });

    }
}

function hoverAction(thisPoint, state) {
    const allSeries = thisPoint.series.chart.series,
        thisIndex = thisPoint.index;

    allSeries.forEach(function (ser) {
        if (ser.options.stack === thisPoint.series.options.stack && thisPoint.series !== ser && ser.points[thisIndex]) {
            ser.points[thisIndex].setState(state);
        }
    });
}
//// Seven bar chart
//function seven_bar_chart(seven_bar_chart_dli1, FInalData) {
//   
//   for (i = 0; i < FInalData.length; i++) {
//        ValCheck = parseFloat(FInalData[i].DLI1_Target)
//        if (ValCheck > max)
//            max = FInalData[i].DLI1_Target;
//    }

//    for (i = 0; i < FInalData.length; i++) {
//        ValCheck = parseFloat(FInalData[i].DLI1_Achievement)
//        if (ValCheck > max)
//            max = FInalData[i].DLI1_Achievement;
//    }

//    max = parseFloat(max) + 100;
//    am4core.useTheme(am4themes_animated);
//    var chart = am4core.create(seven_bar_chart_dli1, am4charts.XYChart)
//    chart.colors.step = 2;

//    chart.logo.disabled = true;

//    chart.legend = new am4charts.Legend()
//    chart.legend.position = 'top'
//    chart.legend.paddingBottom = 20;
//    chart.legend.useDefaultMarker = true;
//    chart.legend.fontSize = 12;
//    let marker = chart.legend.markers.template.children.getIndex(0);
//    marker.cornerRadius(12, 12, 12, 12);
//    marker.s var max = 0;
//    trokeWidth = 1;
//    marker.strokeOpacity = 1;
//    marker.stroke = am4core.color("#ccc");
//    let markerTemplate = chart.legend.markers.template;
//    markerTemplate.width = 10;
//    markerTemplate.height = 10;

//    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
//    xAxis.dataFields.category = 'category'
//    xAxis.renderer.cellStartLocation = 0.1
//    xAxis.renderer.cellEndLocation = 0.9
//    xAxis.renderer.grid.template.location = 0;
//    xAxis.renderer.fontSize = 12;
//    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//    valueAxis.title.text = "In Numbers";

//    valueAxis.title.fontWeight = 800;
//     xAxis.renderer.labels.template.rotation = -45;

//    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
//    yAxis.min = 0;
//    yAxis.max = max;
//    yAxis.renderer.fontSize = 12;
//    yAxis.title.text = "In Numbers";
//    function createSeries(value, name) {
//        var series = chart.series.push(new am4charts.ColumnSeries())
//        series.dataFields.valueY = value
//        series.dataFields.categoryX = 'category'
//        series.name = name
//        series.fontSize = 12;
//        series.events.on("hidden", arrangeColumns);
//        series.events.on("shown", arrangeColumns);

//        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
//        series.columns.template.tooltipText = "aa";
//        var bullet = series.bullets.push(new am4charts.LabelBullet())
//        bullet.interactionsEnabled = false
//        bullet.label.rotation = -180;
//        bullet.label.truncate = false;
//        bullet.dy = -10;
//        bullet.label.text = '{valueY}';
//        bullet.label.fontSize = 11;

//        bullet.label.fill = am4core.color('#000000')

//        return series;
//    }
//    chart.colors.list = [
//        am4core.color("#016BE1"),
//        am4core.color("#73DC67"),
//        am4core.color("#FCB206")
//    ];

//    var FInalData_All = [];
//    for (var i = 0; i < FInalData.length; i++) {
//        if (FInalData[i].state != 'NPMU') {
//            FInalData_All.push({
//                category: FInalData[i].state,
//                first: FInalData[i].DLI1_Target,
//                second: FInalData[i].DLI1_Achievement,
//                third: FInalData[i].DLI1_Water_Level,
//                fourth: FInalData[i].DLI1_Water_Quality,
//                fifth: FInalData[i].DLI1_Water_HGR,
//            });
//        }
//    }
//    var data = FInalData_All;
//    chart.data = data;


//    createSeries('first', 'Target');
//    createSeries('second', 'Total Achievement');
//    createSeries('third', 'Water Level Achievement');
//    createSeries('fourth', 'Water Quality Achievement');
//    createSeries('fifth', 'Hydrogeological Reports Achievement');

//    function arrangeColumns() {

//        var series = chart.series.getIndex(0);

//        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
//        if (series.dataItems.length > 1) {
//            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
//            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
//            var delta = ((x1 - x0) / chart.series.length) * w;
//            if (am4core.isNumber(delta)) {
//                var middle = chart.series.length / 2;

//                var newIndex = 0;
//                chart.series.each(function (series) {
//                    if (!series.isHidden && !series.isHiding) {
//                        series.dummyData = newIndex;
//                        newIndex++;
//                    }
//                    else {
//                        series.dummyData = chart.series.indexOf(series);
//                    }
//                })
//                var visibleCount = newIndex;
//                var newMiddle = visibleCount / 2;

//                chart.series.each(function (series) {
//                    var trueIndex = chart.series.indexOf(series);
//                    var newIndex = series.dummyData;

//                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

//                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
//                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
//                })
//            }
//        }
//    }
//}

//function seven_bar_chart(seven_bar_chart_dli1, finaldata) {
//    var max = 0;
//    for (i = 0; i < finaldata.length; i++) {
//        var valcheck = parseFloat(finaldata[i].dli1_target)
//        if (valcheck > max)
//            max = finaldata[i].dli1_target;
//    }

//    for (i = 0; i < finaldata.length; i++) {
//        var valcheck = parseFloat(finaldata[i].dli1_achievement)
//        if (valcheck > max)
//            max = finaldata[i].dli1_achievement;
//    }

//    max = parsefloat(max) + 100;
//    am4core.usetheme(am4themes_animated);
//    var chart = am4core.create(seven_bar_chart_dli1, am4charts.xychart)
//    chart.colors.step = 2;

//    chart.logo.disabled = true;

//    chart.legend = new am4charts.legend()
//    chart.legend.position = 'top'
//    chart.legend.paddingbottom = 20;
//    chart.legend.usedefaultmarker = true;
//    chart.legend.fontsize = 12;
//    let marker = chart.legend.markers.template.children.getindex(0);
//    marker.cornerradius(12, 12, 12, 12);
//    marker.strokewidth = 1;
//    marker.strokeopacity = 1;
//    marker.stroke = am4core.color("#ccc");
//    let markertemplate = chart.legend.markers.template;
//    markertemplate.width = 10;
//    markertemplate.height = 10;

//    var xaxis = chart.xaxes.push(new am4charts.categoryaxis())
//    xaxis.datafields.category = 'category'
//    xaxis.renderer.cellstartlocation = 0.1
//    xaxis.renderer.cellendlocation = 0.9
//    xaxis.renderer.grid.template.location = 0;
//    xaxis.renderer.fontsize = 12;
//    //let valueaxis = chart.yaxes.push(new am4charts.valueaxis());
//    //valueaxis.title.text = "in numbers";

//    //valueaxis.title.fontweight = 800;
//    // xaxis.renderer.labels.template.rotation = -45;

//    var yaxis = chart.yaxes.push(new am4charts.valueaxis());
//    yaxis.min = 0;
//    yaxis.max = max;
//    yaxis.renderer.fontsize = 12;
//    yaxis.title.text = "in numbers";
//    function createseries(value, name) {
//        var series = chart.series.push(new am4charts.columnseries())
//        series.datafields.valuey = value
//        series.datafields.categoryx = 'category'
//        series.name = name
//        series.fontsize = 12;
//        series.events.on("hidden", arrangecolumns);
//        series.events.on("shown", arrangecolumns);

//        series.columns.template.tooltiptext = "[bold]{name}[/]\n[font-size:14px]{category}: {valuey}";
//        //series.columns.template.tooltiptext = "aa";
//        var bullet = series.bullets.push(new am4charts.labelbullet())
//        bullet.interactionsenabled = false
//        //bullet.label.rotation = -180;
//        bullet.label.truncate = false;
//        bullet.dy = -10;
//        bullet.label.text = '{valuey}';
//        bullet.label.fontsize = 11;

//        bullet.label.fill = am4core.color('#000000')

//        return series;
//    }
//    chart.colors.list = [
//        am4core.color("#016be1"),
//        am4core.color("#73dc67"),
//        am4core.color("#fcb206")
//    ];

//    var finaldata_all = [];
//    for (var i = 0; i < finaldata.length; i++) {
//        if (finaldata[i].state != 'npmu') {
//            finaldata_all.push({
//                category: finaldata[i].state,
//                first: finaldata[i].dli1_target,
//                second: finaldata[i].dli1_achievement,
//                third: finaldata[i].dli1_water_level,
//                fourth: finaldata[i].dli1_water_quality,
//                fifth: finaldata[i].dli1_water_hgr,
//            });
//        }
//    }
//    var data = finaldata_all;
//    chart.data = data;


//    createseries('first', 'target');
//    createseries('second', 'achievement');
//    createseries('third', 'water level');
//    createseries('fourth', 'water quality');
//    createseries('fifth', 'hydrogeological reports');

//    function arrangecolumns() {

//        var series = chart.series.getindex(0);

//        var w = 1 - xaxis.renderer.cellstartlocation - (1 - xaxis.renderer.cellendlocation);
//        if (series.dataitems.length > 1) {
//            var x0 = xaxis.getx(series.dataitems.getindex(0), "categoryx");
//            var x1 = xaxis.getx(series.dataitems.getindex(1), "categoryx");
//            var delta = ((x1 - x0) / chart.series.length) * w;
//            if (am4core.isnumber(delta)) {
//                var middle = chart.series.length / 2;

//                var newindex = 0;
//                chart.series.each(function (series) {
//                    if (!series.ishidden && !series.ishiding) {
//                        series.dummydata = newindex;
//                        newindex++;
//                    }
//                    else {
//                        series.dummydata = chart.series.indexof(series);
//                    }
//                })
//                var visiblecount = newindex;
//                var newmiddle = visiblecount / 2;

//                chart.series.each(function (series) {
//                    var trueindex = chart.series.indexof(series);
//                    var newindex = series.dummydata;

//                    var dx = (newindex - trueindex + middle - newmiddle) * delta

//                    series.animate({ property: "dx", to: dx }, series.interpolationduration, series.interpolationeasing);
//                    series.bulletscontainer.animate({ property: "dx", to: dx }, series.interpolationduration, series.interpolationeasing);
//                })
//            }
//        }
//    }
//}

// Eight bar chart
function eight_bar_chart(eight_bar_chart_dli2, FInalData) {
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI2_Target);
        if (ValCheck > max)
            max = FInalData[i].DLI2_Target;
    }
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI2_Achievement)
        if (ValCheck > max)
            max = FInalData[i].DLI2_Achievement;
    }
    max = parseFloat(max) + 50;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(eight_bar_chart_dli2, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45; 
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Numbers";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].DLI2_Target,
                second: FInalData[i].DLI2_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function nine_bar_chart_DLI3(nine_bar_chart_dli3, FInalData) {
    var Target = 0;
    var Achievement = 0;
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI3_Achievement);
        ValCheckTarget = parseFloat(FInalData[i].DLI3_Target);
        if (ValCheck > Achievement) {
            Achievement = parseFloat(FInalData[i].DLI3_Achievement);
        }
        if (ValCheckTarget > Target) {
            Target = parseFloat(FInalData[i].DLI3_Target);
        }
    }
    if (Target > Achievement) {
        max = parseFloat(Target) + 50;
    } else {
        max = parseFloat(Achievement) + 50;
    }

    max = parseFloat(max) + 50;

    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(nine_bar_chart_dli3, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Cr.";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].DLI3_Target,
                second: FInalData[i].DLI3_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
function ten_bar_chart_DLI4(ten_bar_chart_dli4, FInalData) {
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI4_Target)
        if (ValCheck > max)
            max = FInalData[i].DLI4_Target;
    }
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI4_Achievement)
        if (ValCheck > max)
            max = FInalData[i].DLI4_Achievement;
    }
    max = parseFloat(max) + 50;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(ten_bar_chart_dli4, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());

    yAxis.renderer.fontSize = 12;
    yAxis.renderer.minGridDistance = 50;
    yAxis.title.text = "Area in Ha";
    yAxis.min = 0;
    yAxis.max = max;
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].DLI4_Target,
                second: FInalData[i].DLI4_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}

function eleven_bar_chart_DLI5(eleven_bar_chart_DLI5, FInalData) {
    var max = 0;
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI5_Target)
        if (ValCheck > max)
            max = FInalData[i].DLI5_Target;
    }
    for (i = 0; i < FInalData.length; i++) {
        ValCheck = parseFloat(FInalData[i].DLI5_Achievement)
        if (ValCheck > max)
            max = FInalData[i].DLI5_Achievement;
    }
    max = parseFloat(max) + 50;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(eleven_bar_chart_DLI5, am4charts.XYChart)
    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 12;
    // xAxis.renderer.labels.template.rotation = -45;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());

    yAxis.renderer.fontSize = 12;
    yAxis.renderer.minGridDistance = 50;
    yAxis.title.text = "Numbers";
    yAxis.min = 0;
    yAxis.max = max;
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.fontSize = 12;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];
    var FInalData_All = [];
    for (var i = 0; i < FInalData.length; i++) {
        if (FInalData[i].state != 'NPMU') {
            FInalData_All.push({
                category: FInalData[i].state,
                first: FInalData[i].DLI5_Target,
                second: FInalData[i].DLI5_Achievement,
            });
        }
    }
    var data = FInalData_All;
    chart.data = data;
    createSeries('first', 'Target');
    createSeries('second', 'Achievement');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}

// Nine bar chart
function nine_bar_chart(nine_bar_chart, FInalData1, FInalData2, FInalData3) {

    //FInalData1.sort();
    //FInalData2.sort();
    //FInalData3.sort();1125
    var max = 0;
    for (i = 0; i < FInalData1.length; i++) {
        ValCheck = parseFloat(FInalData1[i].first);
        if (ValCheck > max)
            max = FInalData1[i].first;
        //if (FInalData1[i].category == 'NPMU') {
        //    FInalData1.splice(i, 1);
        //}
    }
    for (i = 0; i < FInalData2.length; i++) {
        ValCheck = parseFloat(FInalData2[i].second);
        if (ValCheck > max)
            max = FInalData2[i].second;
        //if (FInalData2[i].category == 'NPMU') {
        //    FInalData2.splice(i, 1);
        //}
    }
    for (i = 0; i < FInalData3.length; i++) {
        ValCheck = parseFloat(FInalData3[i].third);
        if (ValCheck > max)
            max = FInalData3[i].third;
        //if (FInalData3[i].category == 'NPMU') {
        //    FInalData3.splice(i, 1);
        //}
    }
    max = parseFloat(max) + 50;


    Financial_allo_total_A = 0;
    Financial_release_total_A = 0;
    Financial_exped_total_A = 0;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(nine_bar_chart, am4charts.XYChart);

    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;

    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.renderer.minGridDistance = 30;
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 11;
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Cr.";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.labelFontSize = 11;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        // bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.dy = -10;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData = [];
    for (var i = 0; i < FInalData1.length; i++) {
        //if (FInalData1[i].category != "NPMU") {

        FInalData.push({
            category: FInalData1[i].category,
            first: FInalData1[i].first,
            second: FInalData3[i].third,
            third: FInalData2[i].second
        });
        Financial_allo_total_A += parseFloat(FInalData1[i].first);
        Financial_release_total_A += parseFloat(FInalData2[i].second);
        Financial_exped_total_A += parseFloat(FInalData3[i].third);
        //}
    }

    if (AWP_Financial_Year != "ALL") {
        $("#txtTotalallocation_A").text("Total Allocated Amount (AWP):  " + Financial_allo_total_A.toFixed(2));
    }
    else {
        $("#txtTotalallocation_A").text("Total Allocated Amount:  " + Financial_allo_total_A.toFixed(2));
    }
    $("#txtTotalRelease_A").text("Total Release:  " + Financial_exped_total_A.toFixed(2));
    $("#txtTotalexpenditure_A").text("Total Expenditure:  " + Financial_release_total_A.toFixed(2));
    var data = FInalData;
    chart.data = data;

    createSeries('first', 'Allocated Amount');
    createSeries('second', 'Release Amount');
    createSeries('third', 'Expenditure');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Ten bar Chart
function ten_bar_chart(ten_bar_chart, FInalData1, FInalData2, FInalData3) {
    var max = 0;
    for (i = 0; i < FInalData1.length; i++) {
        ValCheck = parseFloat(FInalData1[i].first);
        if (ValCheck > max)
            max = FInalData1[i].first;
        if (FInalData1[i].category == 'NPMU') {
            FInalData1.splice(i, 1);
        }
    }

    for (i = 0; i < FInalData2.length; i++) {
        ValCheck = parseFloat(FInalData2[i].second);
        if (ValCheck > max)
            max = FInalData2[i].second;
        if (FInalData2[i].category == 'NPMU') {
            FInalData2.splice(i, 1);
        }
    }

    for (i = 0; i < FInalData3.length; i++) {
        ValCheck = parseFloat(FInalData3[i].third);
        if (ValCheck > max)
            max = FInalData3[i].third;
        if (FInalData3[i].category == 'NPMU') {
            FInalData3.splice(i, 1);
        }
    }
    max = parseFloat(max) + 50;

    Financial_allo_total_B = 0;
    Financial_release_total_B = 0;
    Financial_exped_total_B = 0;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(ten_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 11;
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Cr.";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.labelFontSize = 11;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        //bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.label.dy = -30;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        am4core.color("#FCB206")
    ];

    var FInalData = [];
    for (var i = 0; i < FInalData1.length; i++) {
        if (FInalData1[i].category != "NPMU") {
            FInalData.push({
                category: FInalData1[i].category,
                first: FInalData1[i].first,
                second: FInalData3[i].third,
                third: FInalData2[i].second
            });
            Financial_allo_total_B += parseFloat(FInalData1[i].first);
            Financial_release_total_B += parseFloat(FInalData2[i].second);
            Financial_exped_total_B += parseFloat(FInalData3[i].third);
        }
    }
    //alert(Financial_allo_total);   
    if (AWP_Financial_Year != "ALL") {
        $("#txtTotalallocation_B").text("Total Allocated Amount (AWP):  " + Financial_allo_total_B.toFixed(2));
    }
    else {
        $("#txtTotalallocation_B").text("Total Allocated Amount: " + Financial_allo_total_B.toFixed(2));
    }
    $("#txtTotalRelease_B").text("Total Release:  " + Financial_exped_total_B.toFixed(2));
    $("#txtTotalexpenditure_B").text("Total Expenditure:  " + Financial_release_total_B.toFixed(2));
    var data = FInalData;
    chart.data = data;
    //chart.data = [
    //    {
    //        category: 'Gujarat',
    //        first: 230.27,
    //        second: 4.12,
    //        third: 0.71
    //    },
    //    {
    //        category: 'Haryana',
    //        first: 207.17,
    //        second: 4.9,
    //        third: 6.13
    //    },
    //    {
    //        category: 'Karnataka',
    //        first: 171,
    //        second: 12.2,
    //        third: 0.96
    //    },
    //    {
    //        category: 'Maharashtra',
    //        first: 185.6,
    //        second: 35.2,
    //        third: 0.22
    //    },
    //    {
    //        category: 'MP',
    //        first: 89.77,
    //        second: 1.48,
    //        third: 1.44
    //    },
    //    {
    //        category: 'Rajasthan',
    //        first: 180.02,
    //        second: 4.05,
    //        third: 0.65
    //    },
    //    {
    //        category: 'UP',
    //        first: 107.30,
    //        second: 2.33,
    //        third: 3.11
    //    },
    //    {
    //        category: 'Total',
    //        first: 1172.62,
    //        second: 34,
    //        third: 13.19
    //    }
    //]


    createSeries('first', 'Allocated Amount');
    createSeries('second', 'Release Amount');
    createSeries('third', 'Expenditure');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
// Eleven bar chart
function eleven_bar_chart(eleven_bar_chart, FinalData, FinalData2) {

    var max = 0;
    for (var i = 0; i < FinalData.length; i++) {
        ValCheck = parseFloat(FinalData[i].Expenditure);
        if (ValCheck > max)
            max = FinalData[i].Expenditure;
    }

    for (var i = 0; i < FinalData2.length; i++) {
        ValCheck = parseFloat(FinalData2[i].Allocation);
        if (ValCheck > max)
            max = FinalData2[i].Allocation;
    }

    max = parseFloat(max) + 50;

    var Financial_allo_total = 0;
    var Financial_exped_total = 0;
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(eleven_bar_chart, am4charts.XYChart)
    chart.colors.step = 2;

    chart.colors.step = 2;

    chart.logo.disabled = true;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20;
    chart.legend.useDefaultMarker = true;
    chart.legend.fontSize = 12;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 1;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.fontSize = 11;
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = max;
    yAxis.renderer.fontSize = 12;
    yAxis.title.text = "In Cr.";
    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name
        series.labelFontSize = 11;
        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{category}: {valueY}";
        var bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        // bullet.label.rotation = 270;
        bullet.label.truncate = false;
        bullet.label.dy = -30;
        bullet.label.text = '{valueY}';
        bullet.label.fontSize = 11;

        bullet.label.fill = am4core.color('#000000')

        return series;
    }
    chart.colors.list = [
        am4core.color("#016BE1"),
        am4core.color("#73DC67"),
        //am4core.color("#FCB206")
    ];



    var FInalData = [];
    if (Agency_State == "NPMU" || Agency_State == "ALL") {
        for (var i = 0; i < FinalData.length; i++) {
            if (FinalData[i].country == '26') {
                FinalData[i].country = 'NPMU';
                FInalData.push({
                    category: FinalData[i].country,
                    Expenditure: FinalData[i].Expenditure,
                    Allocation: FinalData2[i].Allocation,
                });
                FinalData[i].country = '26';
            }
            else {
                FInalData.push({
                    category: FinalData[i].country,
                    Expenditure: FinalData[i].Expenditure,
                    Allocation: FinalData2[i].Allocation,
                });
            }
            Financial_allo_total += parseFloat(FinalData2[i].Allocation);
            Financial_exped_total += parseFloat(FinalData[i].Expenditure);

        }
    }
    else {
        for (var i = 0; i < FinalData.length; i++) {
            if (FinalData[i].country != '26') {
                FInalData.push({
                    category: FinalData[i].country,
                    Expenditure: FinalData[i].Expenditure,
                    Allocation: FinalData2[i].Allocation,
                });

                Financial_allo_total += parseFloat(FinalData2[i].Allocation);
                Financial_exped_total += parseFloat(FinalData[i].Expenditure);
            }
        }
    }


    if (AWP_Financial_Year != "ALL") {
        $("#txtTotalallocation_eleven").text("Total Allocated Amount to States (AWP):  " + Financial_allo_total.toFixed(2));
    }
    else {
        $("#txtTotalallocation_eleven").text("Total Allocated Amount:  " + Financial_allo_total.toFixed(2));
    }
    $("#txtTotalexp_eleven").text("Total Expenditure:  " + Financial_exped_total.toFixed(2));
    var data = FInalData;
    chart.data = data;


    createSeries('Allocation', 'Allocation Amount');
    createSeries('Expenditure', 'Expenditure Amount');
    //createSeries('third', 'Expenditure');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
}
//first_pie_chart('first_pie_chart_id', "");
//second_pie_chart('second_pie_chart_id');
//thired_pie_chart('thired_pie_chart_id');
//fourth_pie_chart('fourth_pie_chart_id');
//fifth_pie_chart('fifth_pie_chart_id');
//sixth_pie_chart('sixth_pie_chart_id');

//first_bar_chart('first_bar_char_id');
//second_bar_chart('second_bar_char_id');
//third_bar_chart('third_bar_char_id');
//fourth_bar_chart('fourth_bar_char_id');
//fivth_bar_chart('fivth_bar_char_id');
//sixth_bar_chart('sixth_bar_char_id');
//seven_bar_chart('seven_bar_char_id_dli1_id');
//eight_bar_chart('eight_bar_char_id_dli2_id');
//nine_bar_chart_DLI3('nine_bar_char_dli3_id');
//ten_bar_chart_DLI4('ten_bar_char_dli4_id');
//nine_bar_chart('nine_bar_char_id');
//ten_bar_chart('ten_bar_char_id');
//eleven_bar_chart('eleven_bar_char_id');