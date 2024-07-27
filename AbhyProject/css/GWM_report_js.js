var GWL_Info = "";
var GWL_MothWise_Info = [];
$(document).ready(function () {
    GettingInfo();
    Geting_rainfall_pre_post_data_individual_report();
    Getting_table_info_individual_report_only_year();
    Getting_table_pre_and_post_info_individual_report();
    Getting_rainfall_table_individual_report();

});

function GettingInfo() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GroundWaterMonitoring/Gwm_datacollections_report',
        data: '',
        dataType: 'JSON',
        success: function (results) {
            var a = 0;
            var Fulldata = results;


            if (Fulldata != null) {
                var tr = "";
                for (var i = 0; i < Fulldata.length; i++) {

                    if (Fulldata[i] != null) {
                        a += 1;

                        tr += '<tr><td>' + (a) + '</td><td>' + Fulldata[i].site_name + '</td> <td>' + Fulldata[i].statename + '</td> <td>' + Fulldata[i].districtname + '</td> <td>' + Fulldata[i].blockname + '</td><td>' + Fulldata[i].gpname + '</td><td>' + Fulldata[i].welltype + '</td><td>' + Fulldata[i].dept_of_well + '</td><td>' + Fulldata[i].gw_level + '</td><td>' + Fulldata[i].gw_date + '</td><td>' + Fulldata[i].latitude + '</td><td>' + Fulldata[i].longitude + '</td></tr>';

                    }
                }

            }

            if (tr == "") {
                tr += '<tr><td colspan="12" style="text-align:center;">No Data</td></tr>';
            }
            $("#tbldatacolection").html(tr);
        }
    });
}


// Chart And table Year wise 1st one

var YearsInfo = [];

function Getting_table_info_individual_report_only_year() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GroundWaterMonitoring/Gwm_Ground_Water_Monitoring_chart',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            YearsInfo = [];
            GWL_Info = "";
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var tr = '';
            if (response.length != 0) {
                GWL_Info = response;
                for (var i = 0; i < response.length; i++) {
                    var sum_jan_09 = 0, sum_feb_09 = 0, sum_mar_09 = 0, sum_apr_09 = 0, sum_may_09 = 0, sum_jun_09 = 0, sum_july_09 = 0, sum_aug_09 = 0, sum_sep_09 = 0, sum_oct_09 = 0, sum_nov_09 = 0, sum_dec_09 = 0;
                    var sum_jan_10 = 0, sum_feb_10 = 0, sum_mar_10 = 0, sum_apr_10 = 0, sum_may_10 = 0, sum_jun_10 = 0, sum_july_10 = 0, sum_aug_10 = 0, sum_sep_10 = 0, sum_oct_10 = 0, sum_nov_10 = 0, sum_dec_10 = 0;
                    var sum_jan_11 = 0, sum_feb_11 = 0, sum_mar_11 = 0, sum_apr_11 = 0, sum_may_11 = 0, sum_jun_11 = 0, sum_july_11 = 0, sum_aug_11 = 0, sum_sep_11 = 0, sum_oct_11 = 0, sum_nov_11 = 0, sum_dec_11 = 0;
                    var sum_jan_12 = 0, sum_feb_12 = 0, sum_mar_12 = 0, sum_apr_12 = 0, sum_may_12 = 0, sum_jun_12 = 0, sum_july_12 = 0, sum_aug_12 = 0, sum_sep_12 = 0, sum_oct_12 = 0, sum_nov_12 = 0, sum_dec_12 = 0;
                    var sum_jan_13 = 0, sum_feb_13 = 0, sum_mar_13 = 0, sum_apr_13 = 0, sum_may_13 = 0, sum_jun_13 = 0, sum_july_13 = 0, sum_aug_13 = 0, sum_sep_13 = 0, sum_oct_13 = 0, sum_nov_13 = 0, sum_dec_13 = 0;
                    var sum_jan_14 = 0, sum_feb_14 = 0, sum_mar_14 = 0, sum_apr_14 = 0, sum_may_14 = 0, sum_jun_14 = 0, sum_july_14 = 0, sum_aug_14 = 0, sum_sep_14 = 0, sum_oct_14 = 0, sum_nov_14 = 0, sum_dec_14 = 0;
                    var sum_jan_15 = 0, sum_feb_15 = 0, sum_mar_15 = 0, sum_apr_15 = 0, sum_may_15 = 0, sum_jun_15 = 0, sum_july_15 = 0, sum_aug_15 = 0, sum_sep_15 = 0, sum_oct_15 = 0, sum_nov_15 = 0, sum_dec_15 = 0;
                    var sum_jan_16 = 0, sum_feb_16 = 0, sum_mar_16 = 0, sum_apr_16 = 0, sum_may_16 = 0, sum_jun_16 = 0, sum_july_16 = 0, sum_aug_16 = 0, sum_sep_16 = 0, sum_oct_16 = 0, sum_nov_16 = 0, sum_dec_16 = 0;
                    var sum_jan_17 = 0, sum_feb_17 = 0, sum_mar_17 = 0, sum_apr_17 = 0, sum_may_17 = 0, sum_jun_17 = 0, sum_july_17 = 0, sum_aug_17 = 0, sum_sep_17 = 0, sum_oct_17 = 0, sum_nov_17 = 0, sum_dec_17 = 0;
                    var sum_jan_18 = 0, sum_feb_18 = 0, sum_mar_18 = 0, sum_apr_18 = 0, sum_may_18 = 0, sum_jun_18 = 0, sum_july_18 = 0, sum_aug_18 = 0, sum_sep_18 = 0, sum_oct_18 = 0, sum_nov_18 = 0, sum_dec_18 = 0;
                    var sum_jan_19 = 0, sum_feb_19 = 0, sum_mar_19 = 0, sum_apr_19 = 0, sum_may_19 = 0, sum_jun_19 = 0, sum_july_19 = 0, sum_aug_19 = 0, sum_sep_19 = 0, sum_oct_19 = 0, sum_nov_19 = 0, sum_dec_19 = 0;
                    var sum_jan_20 = 0, sum_feb_20 = 0, sum_mar_20 = 0, sum_apr_20 = 0, sum_may_20 = 0, sum_jun_20 = 0, sum_july_20 = 0, sum_aug_20 = 0, sum_sep_20 = 0, sum_oct_20 = 0, sum_nov_20 = 0, sum_dec_20 = 0;
                    var total_2010 = 0, total_2011 = 0, total_2012 = 0, total_2013 = 0, total_2014 = 0, total_2015 = 0, total_2016 = 0, total_2017 = 0, total_2018 = 0, total_2019 = 0, total_2020 = 0;
                    var total_avg = 0, Avg_feb = 0, Avg_mar = 0, Avg_apr = 0, Avg_may = 0, Avg_june = 0, Avg_july = 0, Avg_Aug = 0, Avg_sept = 0, Avg_Nov = 0, Avg_oct = 0, Avg_dec = 0;
                    var alltotall = 0;


                    //2010
                    if (response[i].average_2010 != null && response[i].average_2010 != "") {
                        total_2010 = sum_jan_10 + parseFloat(response[i].average_2010).toFixed(2);
                    }


                    $('#table_id_2010').text(parseFloat(total_2010).toFixed(2));

                    YearsInfo.push(total_2010);
                    //2011
                    if (response[i].average_2011 != null && response[i].average_2011 != "") {
                        total_2011 = total_2011 + parseFloat(response[i].average_2011).toFixed(2);
                    }

                    $('#table_id_2011').text(parseFloat(total_2011).toFixed(2));

                    YearsInfo.push(total_2011);
                    //2012

                    if (response[i].average_2012 != null && response[i].average_2012 != "") {
                        total_2012 = total_2012 + parseFloat(response[i].average_2012).toFixed(2);
                    }

                    $('#table_id_2012').text(parseFloat(total_2012).toFixed(2));

                    YearsInfo.push(total_2012);
                    //2013

                    if (response[i].average_2013 != null && response[i].average_2013 != "") {
                        total_2013 = total_2013 + parseFloat(response[i].average_2013).toFixed(2);
                    }

                    $('#table_id_2013').text(parseFloat(total_2013).toFixed(2));

                    YearsInfo.push(total_2013);

                    //2014
                    if (response[i].average_2014 != null && response[i].average_2014 != "") {
                        total_2014 = total_2014 + parseFloat(response[i].average_2014).toFixed(2);
                    }

                    $('#table_id_2014').text(parseFloat(total_2014).toFixed(2));

                    YearsInfo.push(total_2014);

                    //2015

                    if (response[i].average_2015 != null && response[i].average_2015 != "") {
                        total_2015 = total_2015 + parseFloat(response[i].average_2015).toFixed(2);
                    }
                    $('#table_id_2015').text(parseFloat(total_2015).toFixed(2));


                    YearsInfo.push(total_2015);


                    //2016
                    if (response[i].average_2016 != null && response[i].average_2016 != "") {
                        total_2016 = total_2016 + parseFloat(response[i].average_2016).toFixed(2);
                    }

                    $('#table_id_2016').text(parseFloat(total_2016).toFixed(2));

                    YearsInfo.push(total_2016);
                    //2017
                    if (response[i].average_2017 != null && response[i].average_2017 != "") {
                        total_2017 = total_2017 + parseFloat(response[i].average_2017).toFixed(2);
                    }

                    $('#table_id_2017').text(parseFloat(total_2017).toFixed(2));
                    YearsInfo.push(total_2017);
                    //2018

                    if (response[i].average_2018 != null && response[i].average_2018 != "") {
                        total_2018 = total_2018 + parseFloat(response[i].average_2018).toFixed(2);
                    }

                    $('#table_id_2018').text(parseFloat(total_2018).toFixed(2));
                    YearsInfo.push(total_2018);
                    // 2019

                    if (response[i].average_2019 != null && response[i].average_2019 != "") {
                        total_2019 = total_2019 + parseFloat(response[i].average_2019).toFixed(2);
                    }

                    $('#table_id_2019').text(parseFloat(total_2019).toFixed(2));

                    YearsInfo.push(total_2019);
                    //2020
                    if (response[i].average_2020 != null && response[i].average_2020 != "") {
                        total_2020 = total_2020 + parseFloat(response[i].average_2020).toFixed(2);
                    }

                    total_2020 = parseFloat((sum_jan_20).toFixed(2));

                    $('#table_id_2020').text(parseFloat(total_2020).toFixed(2));

                    YearsInfo.push(total_2020);
                    //Average Total 



                    alltotall = parseFloat(total_2010) + parseFloat(total_2011) + parseFloat(total_2012) + parseFloat(total_2013) + parseFloat(total_2014) + parseFloat(total_2015) + parseFloat(total_2016) + parseFloat(total_2017) + parseFloat(total_2018);
                    total_avg = parseFloat(alltotall / 9).toFixed(2);




                }


                Year_Wise_Months_Info();
                Year_Wise_Months_Info_Rainfall_Info();

            }
            else {
                Year_Wise_Months_Info();
                Year_Wise_Months_Info_Rainfall_Info();
            }
            chart_years_only();
            // Year_Wise_Months_Info();
            // garph calling

        }


    });



}



pre_graph_rainfall = [];
post_graph_rainfall = [];
function Geting_rainfall_pre_post_data_individual_report() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GroundWaterMonitoring/Gwm_Ground_Water_Monitoring_rainfall',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {

                var pree_10 = 0, post1_10 = 0, pree_11 = 0, post1_11 = 0, pree_12 = 0, post1_12 = 0, pree_13 = 0, post1_13 = 0, pree_14 = 0, post1_14 = 0, pree_15 = 0, post1_15 = 0;
                var pree_16 = 0, post1_16 = 0, pree_17 = 0, post1_17 = 0, pree_18 = 0, post1_18 = 0, pree_19 = 0, post1_19 = 0, pree_20 = 0, post1_20 = 0;
                var total_preepost1_2010 = 0, total_preepost1_2011 = 0, total_preepost1_2012 = 0, total_preepost1_2013 = 0, total_preepost1_2014 = 0, total_preepost1_2015 = 0;
                var total_preepost1_2016 = 0, total_preepost1_2017 = 0, total_preepost1_2018 = 0, total_preepost1_2019 = 0, total_preepost1_2020 = 0;

                for (var i = 0; i < response.length; i++) {
                    //2010
                    if (response[i].premonsoon_2010 != null && response[i].premonsoon_2010 != "") {
                        pree_10 = pree_10 + parseFloat(response[i].premonsoon_2010).toFixed(2);
                    }

                    if (response[i].postmonsoon_2010 != null && response[i].postmonsoon_2010 != "") {
                        post1_10 = post1_10 + parseFloat(response[i].postmonsoon_2010).toFixed(2);
                    }


                    pre_graph_rainfall.push(pree_10);
                    post_graph_rainfall.push(post1_10);

                    //2011

                    if (response[i].premonsoon_2011 != null && response[i].premonsoon_2011 != "") {
                        pree_11 = pree_11 + parseFloat(response[i].premonsoon_2011).toFixed(2);
                    }

                    if (response[i].postmonsoon_2011 != null && response[i].postmonsoon_2011 != "") {
                        post1_11 = post1_11 + parseFloat(response[i].postmonsoon_2011).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_11);
                    post_graph_rainfall.push(post1_11);
                    //2012

                    if (response[i].premonsoon_2012 != null && response[i].premonsoon_2012 != "") {
                        pree_12 = pree_12 + parseFloat(response[i].premonsoon_2012).toFixed(2);
                    }

                    if (response[i].postmonsoon_2012 != null && response[i].postmonsoon_2012 != "") {
                        post1_12 = post1_12 + parseFloat(response[i].postmonsoon_2012).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_12);
                    post_graph_rainfall.push(post1_12);
                    //2013

                    if (response[i].premonsoon_2013 != null && response[i].premonsoon_2013 != "") {
                        pree_13 = pree_13 + parseFloat(response[i].premonsoon_2013).toFixed(2);
                    }

                    if (response[i].postmonsoon_2013 != null && response[i].postmonsoon_2013 != "") {
                        post1_13 = post1_13 + parseFloat(response[i].postmonsoon_2013).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_13);
                    post_graph_rainfall.push(post1_13);

                    //2014

                    if (response[i].premonsoon_2014 != null && response[i].premonsoon_2014 != "") {
                        pree_14 = pree_14 + parseFloat(response[i].premonsoon_2014).toFixed(2);
                    }

                    if (response[i].postmonsoon_2014 != null && response[i].postmonsoon_2014 != "") {
                        post1_14 = post1_14 + parseFloat(response[i].postmonsoon_2014).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_14);
                    post_graph_rainfall.push(post1_14);

                    //2015

                    if (response[i].premonsoon_2015 != null && response[i].premonsoon_2015 != "") {
                        pree_15 = pree_15 + parseFloat(response[i].premonsoon_2015).toFixed(2);
                    }

                    if (response[i].postmonsoon_2015 != null && response[i].postmonsoon_2015 != "") {
                        post1_15 = post1_15 + parseFloat(response[i].postmonsoon_2015).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_15);
                    post_graph_rainfall.push(post1_15);

                    //2016

                    if (response[i].premonsoon_2016 != null && response[i].premonsoon_2016 != "") {
                        pree_16 = pree_16 + parseFloat(response[i].premonsoon_2016).toFixed(2);
                    }

                    if (response[i].postmonsoon_2016 != null && response[i].postmonsoon_2016 != "") {
                        post1_16 = post1_16 + parseFloat(response[i].postmonsoon_2016).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_16);
                    post_graph_rainfall.push(post1_16);

                    //2017

                    if (response[i].premonsoon_2017 != null && response[i].premonsoon_2017 != "") {
                        pree_17 = pree_17 + parseFloat(response[i].premonsoon_2017).toFixed(2);
                    }

                    if (response[i].postmonsoon_2017 != null && response[i].postmonsoon_2017 != "") {
                        post1_17 = post1_17 + parseFloat(response[i].postmonsoon_2017).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_17);
                    post_graph_rainfall.push(post1_17);

                    //2018

                    if (response[i].premonsoon_2018 != null && response[i].premonsoon_2018 != "") {
                        pree_18 = pree_18 + parseFloat(response[i].premonsoon_2018).toFixed(2);
                    }

                    if (response[i].postmonsoon_2018 != null && response[i].postmonsoon_2018 != "") {
                        post1_18 = post1_18 + parseFloat(response[i].postmonsoon_2018).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_18);
                    post_graph_rainfall.push(post1_18);

                    //2019

                    if (response[i].premonsoon_2019 != null && response[i].premonsoon_2019 != "") {
                        pree_19 = pree_19 + parseFloat(response[i].premonsoon_2019).toFixed(2);
                    }

                    if (response[i].postmonsoon_2019 != null && response[i].postmonsoon_2019 != "") {
                        post1_19 = post1_19 + parseFloat(response[i].postmonsoon_2019).toFixed(2);
                    }

                    pre_graph_rainfall.push(pree_19);
                    post_graph_rainfall.push(post1_19);
                }
            }

            else {

                //alert("No Data for this State,District,Block and Gram panychayat")
            }
        }
    });
}

// chart and table premoonson and postmoonsoon
pre_graph = [];
post_graph = [];
function Getting_table_pre_and_post_info_individual_report() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GroundWaterMonitoring/Gwm_Ground_Water_Monitoring_chart',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var tr = '';
            if (response.length != 0) {
                GWL_Info = response;
                for (var i = 0; i < response.length; i++) {


                    var sum_apr_10 = 0, sum_may_10 = 0, sum_spet_10 = 0, sum_oct_10 = 0;
                    var sum_apr_11 = 0, sum_may_11 = 0, sum_spet_11 = 0, sum_oct_11 = 0;
                    var sum_apr_12 = 0, sum_may_12 = 0, sum_spet_12 = 0, sum_oct_12 = 0;
                    var sum_apr_13 = 0, sum_may_13 = 0, sum_spet_13 = 0, sum_oct_13 = 0;
                    var sum_apr_14 = 0, sum_may_14 = 0, sum_spet_14 = 0, sum_oct_14 = 0;
                    var sum_apr_15 = 0, sum_may_15 = 0, sum_spet_15 = 0, sum_oct_15 = 0;
                    var sum_apr_16 = 0, sum_may_16 = 0, sum_spet_16 = 0, sum_oct_16 = 0;
                    var sum_apr_17 = 0, sum_may_17 = 0, sum_spet_17 = 0, sum_oct_17 = 0;
                    var sum_apr_18 = 0, sum_may_18 = 0, sum_spet_18 = 0, sum_oct_18 = 0;
                    var sum_apr_19 = 0, sum_may_19 = 0, sum_spet_19 = 0, sum_oct_19 = 0;
                    var sum_apr_20 = 0, sum_may_20 = 0, sum_spet_20 = 0, sum_oct_20 = 0;

                    var pre_10 = 0, post_10 = 0, pre_11 = 0, post_11 = 0, pre_12 = 0, post_12 = 0, pre_13 = 0, post_13 = 0, pre_14 = 0, post_14 = 0, pre_15 = 0, post_15 = 0;
                    var pre_16 = 0, post_16 = 0, pre_17 = 0, post_17 = 0, pre_18 = 0, post_18 = 0, pre_19 = 0, post_19 = 0, pre_20 = 0, post_20 = 0;
                    var total_prepost_2010 = 0, total_prepost_2011 = 0, total_prepost_2012 = 0, total_prepost_2013 = 0, total_prepost_2014 = 0, total_prepost_2015 = 0;
                    var total_prepost_2016 = 0, total_prepost_2017 = 0, total_prepost_2018 = 0, total_prepost_2019 = 0, total_prepost_2020 = 0;


                    //2010
                    if (response[i].premonson_2010 != null && response[i].premonson_2010 != "") {
                        pre_10 = pre_10 + parseFloat(response[i].premonson_2010).toFixed(2);
                    }

                    if (response[i].postmonson_2010 != null && response[i].postmonson_2010 != "") {
                        post_10 = post_10 + parseFloat(response[i].postmonson_2010).toFixed(2);
                    }

                    total_prepost_2010 = parseFloat(pre_10 + post_10).toFixed(2);
                    pre_graph.push(pre_10);
                    post_graph.push(post_10);

                    //2011

                    if (response[i].premonson_2011 != null && response[i].premonson_2011 != "") {
                        pre_11 = pre_11 + parseFloat(response[i].premonson_2011).toFixed(2);
                    }

                    if (response[i].postmonson_2011 != null && response[i].postmonson_2011 != "") {
                        post_11 = post_11 + parseFloat(response[i].postmonson_2011).toFixed(2);
                    }

                    total_prepost_2011 = parseFloat(pre_11 + post_11).toFixed(2);
                    pre_graph.push(pre_11);
                    post_graph.push(post_11);
                    //2012
                    if (response[i].premonson_2012 != null && response[i].premonson_2012 != "") {
                        pre_12 = pre_12 + parseFloat(response[i].premonson_2012).toFixed(2);
                    }

                    if (response[i].postmonson_2012 != null && response[i].postmonson_2012 != "") {
                        post_12 = post_12 + parseFloat(response[i].postmonson_2012).toFixed(2);
                    }

                    total_prepost_2012 = parseFloat(pre_12 + post_12).toFixed(2);
                    pre_graph.push(pre_12);
                    post_graph.push(post_12);
                    //2013
                    if (response[i].premonson_2013 != null && response[i].premonson_2013 != "") {
                        pre_13 = pre_13 + parseFloat(response[i].premonson_2013).toFixed(2);
                    }

                    if (response[i].postmonson_2013 != null && response[i].postmonson_2013 != "") {
                        post_13 = post_13 + parseFloat(response[i].postmonson_2013).toFixed(2);
                    }

                    total_prepost_2013 = parseFloat(pre_13 + post_13).toFixed(2);
                    pre_graph.push(pre_13);
                    post_graph.push(post_13);
                    //2014
                    if (response[i].premonson_2014 != null && response[i].premonson_2014 != "") {
                        pre_14 = pre_14 + parseFloat(response[i].premonson_2014).toFixed(2);
                    }

                    if (response[i].postmonson_2014 != null && response[i].postmonson_2014 != "") {
                        post_14 = post_14 + parseFloat(response[i].postmonson_2014).toFixed(2);
                    }

                    total_prepost_2014 = parseFloat(pre_14 + post_14).toFixed(2);
                    pre_graph.push(pre_14);
                    post_graph.push(post_14);
                    //2015
                    if (response[i].premonson_2015 != null && response[i].premonson_2015 != "") {
                        pre_15 = pre_15 + parseFloat(response[i].premonson_2015).toFixed(2);
                    }

                    if (response[i].postmonson_2015 != null && response[i].postmonson_2015 != "") {
                        post_15 = post_15 + parseFloat(response[i].postmonson_2015).toFixed(2);
                    }

                    total_prepost_2015 = parseFloat(pre_15 + post_15).toFixed(2);
                    pre_graph.push(pre_15);
                    post_graph.push(post_15);
                    //2016
                    if (response[i].premonson_2016 != null && response[i].premonson_2016 != "") {
                        pre_16 = pre_16 + parseFloat(response[i].premonson_2016).toFixed(2);
                    }

                    if (response[i].postmonson_2016 != null && response[i].postmonson_2016 != "") {
                        post_16 = post_16 + parseFloat(response[i].postmonson_2016).toFixed(2);
                    }

                    total_prepost_2016 = parseFloat(pre_16 + post_16).toFixed(2);
                    pre_graph.push(pre_16);
                    post_graph.push(post_16);
                    //2017
                    if (response[i].premonson_2017 != null && response[i].premonson_2017 != "") {
                        pre_17 = pre_17 + parseFloat(response[i].premonson_2017).toFixed(2);
                    }

                    if (response[i].postmonson_2017 != null && response[i].postmonson_2017 != "") {
                        post_17 = post_17 + parseFloat(response[i].postmonson_2017).toFixed(2);
                    }

                    total_prepost_2017 = parseFloat(pre_17 + post_17).toFixed(2);
                    pre_graph.push(pre_17);
                    post_graph.push(post_17);
                    //2018
                    if (response[i].premonson_2018 != null && response[i].premonson_2018 != "") {
                        pre_18 = pre_18 + parseFloat(response[i].premonson_2018).toFixed(2);
                    }

                    if (response[i].postmonson_2018 != null && response[i].postmonson_2018 != "") {
                        post_18 = post_18 + parseFloat(response[i].postmonson_2018).toFixed(2);
                    }

                    total_prepost_2018 = parseFloat(pre_18 + post_18).toFixed(2);
                    pre_graph.push(pre_18);
                    post_graph.push(post_18);
                    // 2019

                    if (response[i].premonson_2019 != null && response[i].premonson_2019 != "") {
                        pre_19 = pre_19 + parseFloat(response[i].premonson_2019).toFixed(2);
                    }

                    if (response[i].postmonson_2019 != null && response[i].postmonson_2019 != "") {
                        post_19 = post_19 + parseFloat(response[i].postmonson_2019).toFixed(2);
                    }

                    total_prepost_2019 = parseFloat(pre_19 + post_19).toFixed(2);
                    pre_graph.push(pre_19);
                    post_graph.push(post_19);
                    //2020
                    if (response[i].premonson_2020 != null && response[i].premonson_2020 != "") {
                        pre_20 = pre_20 + parseFloat(response[i].premonson_2020).toFixed(2);
                    }

                    if (response[i].postmonson_2020 != null && response[i].postmonson_2020 != "") {
                        post_20 = post_20 + parseFloat(response[i].postmonson_2020).toFixed(2);
                    }

                    total_prepost_2020 = parseFloat(pre_20 + post_20).toFixed(2);
                    pre_graph.push(pre_20);
                    post_graph.push(post_20);
                    //Average Total 
                    total_avg_prepost = parseFloat(((parseFloat(total_prepost_2010) + parseFloat(total_prepost_2011) + parseFloat(total_prepost_2012) + parseFloat(total_prepost_2013) + parseFloat(total_prepost_2014) + parseFloat(total_prepost_2015) + parseFloat(total_prepost_2016) + parseFloat(total_prepost_2017) + parseFloat(total_prepost_2018)) / 9).toFixed(2));



                }



            }
            else {
                alert("No Data")
            }


            // garph calling
            chart_pre_post();
        }


    });

}

//rain fall  data Gwm_Ground_Water_Monitoring_rainfall
var rain_graph = [];
function Getting_rainfall_table_individual_report() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GroundWaterMonitoring/Gwm_Ground_Water_Monitoring_rainfall',
        data: '',
        dataType: 'JSON',
        success: function (results) {
            rain_graph = [];
            var a = 0;
            var Fulldata = results;
            
            var tr = "";
            if (Fulldata != null) {

                for (var i = 0; i < Fulldata.length; i++) {

                    a += 1;

                    var actual_2010 = 0, actual_2011 = 0, actual_2012 = 0, actual_2013 = 0, actual_2014 = 0, actual_2015 = 0;
                    var actual_2016 = 0, actual_2017 = 0, actual_2018 = 0, actual_2019 = 0, actual_2020 = 0;
                    //2010
                    if (Fulldata[i].actual__mm__2010 != null && Fulldata[i].actual__mm__2010 != "") {
                        actual_2010 = actual_2010 + parseFloat(Fulldata[i].actual__mm__2010).toFixed(2);
                    }
                    rain_graph.push(actual_2010);
                    //2011
                    if (Fulldata[i].actual__mm__2011 != null && Fulldata[i].actual__mm__2011 != "") {
                        actual_2011 = actual_2011 + parseFloat(Fulldata[i].actual__mm__2011).toFixed(2);
                    }
                    rain_graph.push(actual_2011);
                    //2012
                    if (Fulldata[i].actual__mm__2012 != null && Fulldata[i].actual__mm__2012 != "") {
                        actual_2012 = actual_2012 + parseFloat(Fulldata[i].actual__mm__2012).toFixed(2);
                    }
                    rain_graph.push(actual_2012);
                    //2013
                    if (Fulldata[i].actual__mm__2013 != null && Fulldata[i].actual__mm__2013 != "") {
                        actual_2013 = actual_2013 + parseFloat(Fulldata[i].actual__mm__2013).toFixed(2);
                    }
                    rain_graph.push(actual_2013);
                    //2014
                    if (Fulldata[i].actual__mm__2014 != null && Fulldata[i].actual__mm__2014 != "") {
                        actual_2014 = actual_2014 + parseFloat(Fulldata[i].actual__mm__2014).toFixed(2);
                    }
                    rain_graph.push(actual_2014);
                    //2015
                    if (Fulldata[i].actual__mm__2015 != null && Fulldata[i].actual__mm__2015 != "") {
                        actual_2015 = actual_2015 + parseFloat(Fulldata[i].actual__mm__2015).toFixed(2);
                    }
                    rain_graph.push(actual_2015);
                    //2016
                    if (Fulldata[i].actual__mm__2016 != null && Fulldata[i].actual__mm__2016 != "") {
                        actual_2016 = actual_2016 + parseFloat(Fulldata[i].actual__mm__2016).toFixed(2);
                    }
                    rain_graph.push(actual_2016);
                    //2017
                    if (Fulldata[i].actual__mm__2017 != null && Fulldata[i].actual__mm__2017 != "") {
                        actual_2017 = actual_2017 + parseFloat(Fulldata[i].actual__mm__2017).toFixed(2);
                    }
                    rain_graph.push(actual_2017);
                    //2018
                    if (Fulldata[i].actual__mm__2018 != null && Fulldata[i].actual__mm__2018 != "") {
                        actual_2018 = actual_2018 + parseFloat(Fulldata[i].actual__mm__2018).toFixed(2);
                    }
                    rain_graph.push(actual_2018);
                    //2019
                    if (Fulldata[i].actual__mm__2019 != null && Fulldata[i].actual__mm__2019 != "") {
                        actual_2019 = actual_2019 + parseFloat(Fulldata[i].actual__mm__2019).toFixed(2);
                    }
                    rain_graph.push(actual_2019);
                    //2020
                    if (Fulldata[i].actual__mm__2020 != null && Fulldata[i].actual__mm__2020 != "") {
                        actual_2020 = actual_2020 + parseFloat(Fulldata[i].actual__mm__2020).toFixed(2);
                    }
                    rain_graph.push(actual_2020);
                    


                }



            }

            else {
                alert("")
            }


        }
    });
}




function Year_Wise_Months_Info() {

    GWL_MothWise_Info = [];
    
    if (GWL_Info.length != 0) {


        for (var i = 0; i < GWL_Info.length; i++) {

            var sum_jan = 0, sum_feb = 0, sum_mar = 0, sum_apr = 0, sum_may = 0, sum_jun = 0, sum_july = 0, sum_aug = 0, sum_sep = 0, sum_oct = 0, sum_nov = 0, sum_dec = 0;
            var Total_Avg = 0;
            var Count_Value = 0;
            if (Selected_Year == "2010") {
                if (GWL_Info[i].jan_2010 != null && GWL_Info[i].jan_2010 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2010);
                }
                if (GWL_Info[i].feb_2010 != null && GWL_Info[i].feb_2010 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2010);
                }
                if (GWL_Info[i].mar_2010 != null && GWL_Info[i].mar_2010 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2010);
                }
                if (GWL_Info[i].apr_2010 != null && GWL_Info[i].apr_2010 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2010);
                }
                if (GWL_Info[i].may_2010 != null && GWL_Info[i].may_2010 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2010)
                }
                if (GWL_Info[i].jun_2010 != null && GWL_Info[i].jun_2010 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2010)
                }
                if (GWL_Info[i].jul_2010 != null && GWL_Info[i].jul_2010 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2010)
                }
                if (GWL_Info[i].aug_2010 != null && GWL_Info[i].aug_2010 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2010)
                }
                if (GWL_Info[i].sep_2010 != null && GWL_Info[i].sep_2010 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2010)
                }
                if (GWL_Info[i].oct_2010 != null && GWL_Info[i].oct_2010 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2010)
                }
                if (GWL_Info[i].nov_2010 != null && GWL_Info[i].nov_2010 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2010)
                }
                if (GWL_Info[i].dec_2010 != null && GWL_Info[i].dec_2010 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2010)
                }

            }
            else if (Selected_Year == "2011") {
                if (GWL_Info[i].jan_2011 != null && GWL_Info[i].jan_2011 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2011)
                }
                if (GWL_Info[i].feb_2011 != null && GWL_Info[i].feb_2011 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2011)
                }
                if (GWL_Info[i].mar_2011 != null && GWL_Info[i].mar_2011 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2011)
                }
                if (GWL_Info[i].apr_2011 != null && GWL_Info[i].apr_2011 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2011)
                }
                if (GWL_Info[i].may_2011 != null && GWL_Info[i].may_2011 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2011)
                }
                if (GWL_Info[i].jun_2011 != null && GWL_Info[i].jun_2011 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2011)
                }
                if (GWL_Info[i].jul_2011 != null && GWL_Info[i].jul_2011 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2011)
                }
                if (GWL_Info[i].aug_2011 != null && GWL_Info[i].aug_2011 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2011)
                }
                if (GWL_Info[i].sep_2011 != null && GWL_Info[i].sep_2011 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2011)
                }
                if (GWL_Info[i].oct_2011 != null && GWL_Info[i].oct_2011 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2011)
                }
                if (GWL_Info[i].nov_2011 != null && GWL_Info[i].nov_2011 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2011)
                }
                if (GWL_Info[i].dec_2011 != null && GWL_Info[i].dec_2011 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2011)
                }

            }
            else if (Selected_Year == "2012") {
                if (GWL_Info[i].jan_2012 != null && GWL_Info[i].jan_2012 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2012)
                }
                if (GWL_Info[i].feb_2012 != null && GWL_Info[i].feb_2012 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2012)
                }
                if (GWL_Info[i].mar_2012 != null && GWL_Info[i].mar_2012 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2012)
                }
                if (GWL_Info[i].apr_2012 != null && GWL_Info[i].apr_2012 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2012)
                }
                if (GWL_Info[i].may_2012 != null && GWL_Info[i].may_2012 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2012)
                }
                if (GWL_Info[i].jun_2012 != null && GWL_Info[i].jun_2012 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2012)
                }
                if (GWL_Info[i].jul_2012 != null && GWL_Info[i].jul_2012 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2012)
                }
                if (GWL_Info[i].aug_2012 != null && GWL_Info[i].aug_2012 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2012)
                }
                if (GWL_Info[i].sep_2012 != null && GWL_Info[i].sep_2012 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2012)
                }
                if (GWL_Info[i].oct_2012 != null && GWL_Info[i].oct_2012 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2012)
                }
                if (GWL_Info[i].nov_2012 != null && GWL_Info[i].nov_2012 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2012)
                }
                if (GWL_Info[i].dec_2012 != null && GWL_Info[i].dec_2012 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2012)
                }

            }
            else if (Selected_Year == "2013") {
                if (GWL_Info[i].jan_2013 != null && GWL_Info[i].jan_2013 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2013)
                }
                if (GWL_Info[i].feb_2013 != null && GWL_Info[i].feb_2013 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2013)
                }
                if (GWL_Info[i].mar_2013 != null && GWL_Info[i].mar_2013 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2013)
                }
                if (GWL_Info[i].apr_2013 != null && GWL_Info[i].apr_2013 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2013)
                }
                if (GWL_Info[i].may_2013 != null && GWL_Info[i].may_2013 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2013)
                }
                if (GWL_Info[i].jun_2013 != null && GWL_Info[i].jun_2013 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2013)
                }
                if (GWL_Info[i].jul_2013 != null && GWL_Info[i].jul_2013 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2013)
                }
                if (GWL_Info[i].aug_2013 != null && GWL_Info[i].aug_2013 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2013)
                }
                if (GWL_Info[i].sep_2013 != null && GWL_Info[i].sep_2013 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2013)
                }
                if (GWL_Info[i].oct_2013 != null && GWL_Info[i].oct_2013 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2013)
                }
                if (GWL_Info[i].nov_2013 != null && GWL_Info[i].nov_2013 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2013)
                }
                if (GWL_Info[i].dec_2013 != null && GWL_Info[i].dec_2013 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2013)
                }

            }
            else if (Selected_Year == "2014") {
                if (GWL_Info[i].jan_2014 != null && GWL_Info[i].jan_2014 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2014)
                }
                if (GWL_Info[i].feb_2014 != null && GWL_Info[i].feb_2014 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2014)
                }
                if (GWL_Info[i].mar_2014 != null && GWL_Info[i].mar_2014 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2014)
                }
                if (GWL_Info[i].apr_2014 != null && GWL_Info[i].apr_2014 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2014)
                }
                if (GWL_Info[i].may_2014 != null && GWL_Info[i].may_2014 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2014)
                }
                if (GWL_Info[i].jun_2014 != null && GWL_Info[i].jun_2014 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2014)
                }
                if (GWL_Info[i].jul_2014 != null && GWL_Info[i].jul_2014 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2014)
                }
                if (GWL_Info[i].aug_2014 != null && GWL_Info[i].aug_2014 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2014)
                }
                if (GWL_Info[i].sep_2014 != null && GWL_Info[i].sep_2014 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2014)
                }
                if (GWL_Info[i].oct_2014 != null && GWL_Info[i].oct_2014 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2014)
                }
                if (GWL_Info[i].nov_2014 != null && GWL_Info[i].nov_2014 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2014)
                }
                if (GWL_Info[i].dec_2014 != null && GWL_Info[i].dec_2014 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2014)
                }

            }
            else if (Selected_Year == "2015") {
                if (GWL_Info[i].jan_2015 != null && GWL_Info[i].jan_2015 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2015)
                }
                if (GWL_Info[i].feb_2015 != null && GWL_Info[i].feb_2015 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2015)
                }
                if (GWL_Info[i].mar_2015 != null && GWL_Info[i].mar_2015 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2015)
                }
                if (GWL_Info[i].apr_2015 != null && GWL_Info[i].apr_2015 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2015)
                }
                if (GWL_Info[i].may_2015 != null && GWL_Info[i].may_2015 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2015)
                }
                if (GWL_Info[i].jun_2015 != null && GWL_Info[i].jun_2015 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2015)
                }
                if (GWL_Info[i].jul_2015 != null && GWL_Info[i].jul_2015 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2015)
                }
                if (GWL_Info[i].aug_2015 != null && GWL_Info[i].aug_2015 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2015)
                }
                if (GWL_Info[i].sep_2015 != null && GWL_Info[i].sep_2015 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2015)
                }
                if (GWL_Info[i].oct_2015 != null && GWL_Info[i].oct_2015 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2015)
                }
                if (GWL_Info[i].nov_2015 != null && GWL_Info[i].nov_2015 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2015)
                }
                if (GWL_Info[i].dec_2015 != null && GWL_Info[i].dec_2015 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2015)
                }

            }
            else if (Selected_Year == "2016") {
                if (GWL_Info[i].jan_2016 != null && GWL_Info[i].jan_2016 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2016)
                }
                if (GWL_Info[i].feb_2016 != null && GWL_Info[i].feb_2016 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2016)
                }
                if (GWL_Info[i].mar_2016 != null && GWL_Info[i].mar_2016 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2016)
                }
                if (GWL_Info[i].apr_2016 != null && GWL_Info[i].apr_2016 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2016)
                }
                if (GWL_Info[i].may_2016 != null && GWL_Info[i].may_2016 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2016)
                }
                if (GWL_Info[i].jun_2016 != null && GWL_Info[i].jun_2016 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2016)
                }
                if (GWL_Info[i].jul_2016 != null && GWL_Info[i].jul_2016 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2016)
                }
                if (GWL_Info[i].aug_2016 != null && GWL_Info[i].aug_2016 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2016)
                }
                if (GWL_Info[i].sep_2016 != null && GWL_Info[i].sep_2016 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2016)
                }
                if (GWL_Info[i].oct_2016 != null && GWL_Info[i].oct_2016 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2016)
                }
                if (GWL_Info[i].nov_2016 != null && GWL_Info[i].nov_2016 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2016)
                }
                if (GWL_Info[i].dec_2016 != null && GWL_Info[i].dec_2016 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2016)
                }

            }
            else if (Selected_Year == "2017") {
                if (GWL_Info[i].jan_2017 != null && GWL_Info[i].jan_2017 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2017)
                }
                if (GWL_Info[i].feb_2017 != null && GWL_Info[i].feb_2017 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2017)
                }
                if (GWL_Info[i].mar_2017 != null && GWL_Info[i].mar_2017 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2017)
                }
                if (GWL_Info[i].apr_2017 != null && GWL_Info[i].apr_2017 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2017)
                }
                if (GWL_Info[i].may_2017 != null && GWL_Info[i].may_2017 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2017)
                }
                if (GWL_Info[i].jun_2017 != null && GWL_Info[i].jun_2017 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2017)
                }
                if (GWL_Info[i].jul_2017 != null && GWL_Info[i].jul_2017 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2017)
                }
                if (GWL_Info[i].aug_2017 != null && GWL_Info[i].aug_2017 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2017)
                }
                if (GWL_Info[i].sep_2017 != null && GWL_Info[i].sep_2017 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2017)
                }
                if (GWL_Info[i].oct_2017 != null && GWL_Info[i].oct_2017 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2017)
                }
                if (GWL_Info[i].nov_2017 != null && GWL_Info[i].nov_2017 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2017)
                }
                if (GWL_Info[i].dec_2017 != null && GWL_Info[i].dec_2017 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2017)
                }

            }
            else if (Selected_Year == "2018") {
                if (GWL_Info[i].jan_2018 != null && GWL_Info[i].jan_2018 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2018)
                }
                if (GWL_Info[i].feb_2018 != null && GWL_Info[i].feb_2018 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2018)
                }
                if (GWL_Info[i].mar_2018 != null && GWL_Info[i].mar_2018 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2018)
                }
                if (GWL_Info[i].apr_2018 != null && GWL_Info[i].apr_2018 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2018)
                }
                if (GWL_Info[i].may_2018 != null && GWL_Info[i].may_2018 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2018)
                }
                if (GWL_Info[i].jun_2018 != null && GWL_Info[i].jun_2018 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2018)
                }
                if (GWL_Info[i].jul_2018 != null && GWL_Info[i].jul_2018 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2018)
                }
                if (GWL_Info[i].aug_2018 != null && GWL_Info[i].aug_2018 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2018)
                }
                if (GWL_Info[i].sep_2018 != null && GWL_Info[i].sep_2018 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2018)
                }
                if (GWL_Info[i].oct_2018 != null && GWL_Info[i].oct_2018 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2018)
                }
                if (GWL_Info[i].nov_2018 != null && GWL_Info[i].nov_2018 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2018)
                }
                if (GWL_Info[i].dec_2018 != null && GWL_Info[i].dec_2018 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2018)
                }

            }
            else if (Selected_Year == "2019") {
                if (GWL_Info[i].jan_2019 != null && GWL_Info[i].jan_2019 != "") {
                    Count_Value += 1; sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2019)
                }
                if (GWL_Info[i].feb_2019 != null && GWL_Info[i].feb_2019 != "") {
                    Count_Value += 1; sum_feb = sum_feb + parseFloat(GWL_Info[i].feb_2019)
                }
                if (GWL_Info[i].mar_2019 != null && GWL_Info[i].mar_2019 != "") {
                    Count_Value += 1; sum_mar = sum_mar + parseFloat(GWL_Info[i].mar_2019)
                }
                if (GWL_Info[i].apr_2019 != null && GWL_Info[i].apr_2019 != "") {
                    Count_Value += 1; sum_apr = sum_apr + parseFloat(GWL_Info[i].apr_2019)
                }
                if (GWL_Info[i].may_2019 != null && GWL_Info[i].may_2019 != "") {
                    Count_Value += 1; sum_may = sum_may + parseFloat(GWL_Info[i].may_2019)
                }
                if (GWL_Info[i].jun_2019 != null && GWL_Info[i].jun_2019 != "") {
                    Count_Value += 1; sum_jun = sum_jun + parseFloat(GWL_Info[i].jun_2019)
                }
                if (GWL_Info[i].jul_2019 != null && GWL_Info[i].jul_2019 != "") {
                    Count_Value += 1; sum_july = sum_july + parseFloat(GWL_Info[i].jul_2019)
                }
                if (GWL_Info[i].aug_2019 != null && GWL_Info[i].aug_2019 != "") {
                    Count_Value += 1; sum_aug = sum_aug + parseFloat(GWL_Info[i].aug_2019)
                }
                if (GWL_Info[i].sep_2019 != null && GWL_Info[i].sep_2019 != "") {
                    Count_Value += 1; sum_sep = sum_sep + parseFloat(GWL_Info[i].sep_2019)
                }
                if (GWL_Info[i].oct_2019 != null && GWL_Info[i].oct_2019 != "") {
                    Count_Value += 1; sum_oct = sum_oct + parseFloat(GWL_Info[i].oct_2019)
                }
                if (GWL_Info[i].nov_2019 != null && GWL_Info[i].nov_2019 != "") {
                    Count_Value += 1; sum_nov = sum_nov + parseFloat(GWL_Info[i].nov_2019)
                }
                if (GWL_Info[i].dec_2019 != null && GWL_Info[i].dec_2019 != "") {
                    Count_Value += 1; sum_dec = sum_dec + parseFloat(GWL_Info[i].dec_2019)
                }

            }
            else if (Selected_Year == "2020") {
                if (GWL_Info[i].jan_2020 != null && GWL_Info[i].jan_2020 != "") {
                    Count_Value += 1;
                    sum_jan = sum_jan + parseFloat(GWL_Info[i].jan_2020)
                }
            }
            if (GWL_MothWise_Info.length == 0) {
                GWL_MothWise_Info.push(sum_jan);
                GWL_MothWise_Info.push(sum_feb);
                GWL_MothWise_Info.push(sum_mar);
                GWL_MothWise_Info.push(sum_apr);
                GWL_MothWise_Info.push(sum_may);
                GWL_MothWise_Info.push(sum_jun);
                GWL_MothWise_Info.push(sum_july);
                GWL_MothWise_Info.push(sum_aug);
                GWL_MothWise_Info.push(sum_sep);
                GWL_MothWise_Info.push(sum_oct);
                GWL_MothWise_Info.push(sum_nov);
                GWL_MothWise_Info.push(sum_dec);
            }


        }


    }

}


var GWL_Info_Rainfall_Monthly = "";
var GWL_Rainfall_MothWise_Info = [];
function Year_Wise_Months_Info_Rainfall_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GroundWaterMonitoring/Gwm_Ground_Water_Monitoring_Monthly_rainfall',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response.length != 0) {

                GWL_Info_Rainfall_Monthly = response;
                Year_Wise_Months_Info_Rainfall();
            }
            else {
                GWL_Info_Rainfall_Monthly = "";
                Year_Wise_Months_Info_Rainfall();
            }
        }
    });
}

function Year_Wise_Months_Info_Rainfall() {
    
    var tr = '';
    if (GWL_Info_Rainfall_Monthly.length != 0) {

        for (var i = 0; i < GWL_Info_Rainfall_Monthly.length; i++) {
            var sum_jan = 0, sum_feb = 0, sum_mar = 0, sum_apr = 0, sum_may = 0, sum_jun = 0, sum_july = 0, sum_aug = 0, sum_sep = 0, sum_oct = 0, sum_nov = 0, sum_dec = 0;



            if (Selected_Year == "2010") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan10 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan10);
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb10 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb10);
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar10 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar10);
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr10 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr10);
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may10 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun10 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul10 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug10 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep10 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct10 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov10 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov10)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec10 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec10 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec10)
                }

            }

            else if (Selected_Year == "2011") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan11 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb11 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar11 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr11 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may11 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun11 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul11 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug11 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep11 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct11 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov11 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov11)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec11 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec11 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec11)
                }

            }
            else if (Selected_Year == "2012") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan12 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb12 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar12 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr12 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may12 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun12 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul12 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug12 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep12 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct12 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov12 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov12)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec12 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec12 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec12)
                }

            }
            else if (Selected_Year == "2013") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan13 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb13 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar13 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr13 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may13 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun13 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul13 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug13 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep13 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct13 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov13 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov13)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec13 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec13 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec13)
                }

            }
            else if (Selected_Year == "2014") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan14 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb14 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar14 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr14 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may14 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun14 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul14 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug14 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep14 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct14 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov14 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov14)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec14 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec14 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec14)
                }

            }
            else if (Selected_Year == "2015") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan15 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb15 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar15 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr15 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may15 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun15 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul15 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug15 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep15 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct15 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov15 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov15)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec15 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec15 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec15)
                }

            }
            else if (Selected_Year == "2016") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan16 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb16 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar16 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr16 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may16 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun16 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul16 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug16 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep16 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct16 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov16 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov16)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec16 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec16 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec16)
                }

            }
            else if (Selected_Year == "2017") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan17 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb17 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar17 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr17 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may17 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun17 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul17 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug17 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep17 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct17 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov17 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov17)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec17 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec17 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec17)
                }

            }
            else if (Selected_Year == "2018") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan18 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb18 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar18 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr18 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may18 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun18 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul18 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug18 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep18 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct18 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov18 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov18)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec18 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec18 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec18)
                }

            }
            else if (Selected_Year == "2019") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan19 != "") {
                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__feb19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__feb19 != "") {
                    sum_feb = sum_feb + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__feb19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__mar19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__mar19 != "") {
                    sum_mar = sum_mar + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__mar19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__apr19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__apr19 != "") {
                    sum_apr = sum_apr + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__apr19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__may19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__may19 != "") {
                    sum_may = sum_may + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__may19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jun19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jun19 != "") {
                    sum_jun = sum_jun + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jun19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jul19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jul19 != "") {
                    sum_july = sum_july + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jul19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__aug19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__aug19 != "") {
                    sum_aug = sum_aug + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__aug19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__sep19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__sep19 != "") {
                    sum_sep = sum_sep + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__sep19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__oct19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__oct19 != "") {
                    sum_oct = sum_oct + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__oct19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__nov19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__nov19 != "") {
                    sum_nov = sum_nov + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__nov19)
                }
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__dec19 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__dec19 != "") {
                    sum_dec = sum_dec + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__dec19)
                }

            }
            else if (Selected_Year == "2020") {
                if (GWL_Info_Rainfall_Monthly[i].actual__mm__jan20 != null && GWL_Info_Rainfall_Monthly[i].actual__mm__jan20 != "") {

                    sum_jan = sum_jan + parseFloat(GWL_Info_Rainfall_Monthly[i].actual__mm__jan20)
                }
            }
            GWL_Rainfall_MothWise_Info = [];
            if (GWL_Rainfall_MothWise_Info.length == 0) {
                GWL_Rainfall_MothWise_Info.push(sum_jan);
                GWL_Rainfall_MothWise_Info.push(sum_feb);
                GWL_Rainfall_MothWise_Info.push(sum_mar);
                GWL_Rainfall_MothWise_Info.push(sum_apr);
                GWL_Rainfall_MothWise_Info.push(sum_may);
                GWL_Rainfall_MothWise_Info.push(sum_jun);
                GWL_Rainfall_MothWise_Info.push(sum_july);
                GWL_Rainfall_MothWise_Info.push(sum_aug);
                GWL_Rainfall_MothWise_Info.push(sum_sep);
                GWL_Rainfall_MothWise_Info.push(sum_oct);
                GWL_Rainfall_MothWise_Info.push(sum_nov);
                GWL_Rainfall_MothWise_Info.push(sum_dec);
            }
            GWL_Deviation_Chart2();
        }


    }
    else {
        GWL_Rainfall_MothWise_Info = [];
        GWL_Deviation_Chart2();


    }



}
