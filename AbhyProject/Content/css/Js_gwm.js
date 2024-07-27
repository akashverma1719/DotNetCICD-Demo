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
var YearsInfo = [];

$(document).ready(function () {

    DropDownInfo();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GroundWaterMonitoring/GroundWaterLevelsInfo",
        data: "{ }",
        dataType: 'JSON',
        success: function (results) {

            //YearsInfo.length = 0;
           // YearsInfo = [];
            locations = results;
            
            for (var i = 0; i < locations.length; i++) {

               
                 sum_jan_09 = 0, sum_feb_09 = 0, sum_mar_09 = 0, sum_apr_09 = 0, sum_may_09 = 0, sum_jun_09 = 0, sum_july_09 = 0, sum_aug_09 = 0, sum_sep_09 = 0, sum_oct_09 = 0, sum_nov_09 = 0, sum_dec_09 = 0;
                 sum_jan_10 = 0, sum_feb_10 = 0, sum_mar_10 = 0, sum_apr_10 = 0, sum_may_10 = 0, sum_jun_10 = 0, sum_july_10 = 0, sum_aug_10 = 0, sum_sep_10 = 0, sum_oct_10 = 0, sum_nov_10 = 0, sum_dec_10 = 0;
                 sum_jan_11 = 0, sum_feb_11 = 0, sum_mar_11 = 0, sum_apr_11 = 0, sum_may_11 = 0, sum_jun_11 = 0, sum_july_11 = 0, sum_aug_11 = 0, sum_sep_11 = 0, sum_oct_11 = 0, sum_nov_11 = 0, sum_dec_11 = 0;
                 sum_jan_12 = 0, sum_feb_12 = 0, sum_mar_12 = 0, sum_apr_12 = 0, sum_may_12 = 0, sum_jun_12 = 0, sum_july_12 = 0, sum_aug_12 = 0, sum_sep_12 = 0, sum_oct_12 = 0, sum_nov_12 = 0, sum_dec_12 = 0;
                 sum_jan_13 = 0, sum_feb_13 = 0, sum_mar_13 = 0, sum_apr_13 = 0, sum_may_13 = 0, sum_jun_13 = 0, sum_july_13 = 0, sum_aug_13 = 0, sum_sep_13 = 0, sum_oct_13 = 0, sum_nov_13 = 0, sum_dec_13 = 0;
                 sum_jan_14 = 0, sum_feb_14 = 0, sum_mar_14 = 0, sum_apr_14 = 0, sum_may_14 = 0, sum_jun_14 = 0, sum_july_14 = 0, sum_aug_14 = 0, sum_sep_14 = 0, sum_oct_14 = 0, sum_nov_14 = 0, sum_dec_14 = 0;
                 sum_jan_15 = 0, sum_feb_15 = 0, sum_mar_15 = 0, sum_apr_15 = 0, sum_may_15 = 0, sum_jun_15 = 0, sum_july_15 = 0, sum_aug_15 = 0, sum_sep_15 = 0, sum_oct_15 = 0, sum_nov_15 = 0, sum_dec_15 = 0;
                 sum_jan_16 = 0, sum_feb_16 = 0, sum_mar_16 = 0, sum_apr_16 = 0, sum_may_16 = 0, sum_jun_16 = 0, sum_july_16 = 0, sum_aug_16 = 0, sum_sep_16 = 0, sum_oct_16 = 0, sum_nov_16 = 0, sum_dec_16 = 0;
                 sum_jan_17 = 0, sum_feb_17 = 0, sum_mar_17 = 0, sum_apr_17 = 0, sum_may_17 = 0, sum_jun_17 = 0, sum_july_17 = 0, sum_aug_17 = 0, sum_sep_17 = 0, sum_oct_17 = 0, sum_nov_17 = 0, sum_dec_17 = 0;
                 sum_jan_18 = 0, sum_feb_18 = 0, sum_mar_18 = 0, sum_apr_18 = 0, sum_may_18 = 0, sum_jun_18 = 0, sum_july_18 = 0, sum_aug_18 = 0, sum_sep_18 = 0, sum_oct_18 = 0, sum_nov_18 = 0, sum_dec_18 = 0;
                 sum_jan_19 = 0, sum_feb_19 = 0, sum_mar_19 = 0, sum_apr_19 = 0, sum_may_19 = 0, sum_jun_19 = 0, sum_july_19 = 0, sum_aug_19 = 0, sum_sep_19 = 0, sum_oct_19 = 0, sum_nov_19 = 0, sum_dec_19 = 0;
                 sum_jan_20 = 0, sum_feb_20 = 0, sum_mar_20 = 0, sum_apr_20 = 0, sum_may_20 = 0, sum_jun_20 = 0, sum_july_20 = 0, sum_aug_20 = 0, sum_sep_20 = 0, sum_oct_20 = 0, sum_nov_20 = 0, sum_dec_20 = 0;
                 total_2010 = 0, total_2011 = 0, total_2012 = 0, total_2013 = 0, total_2014 = 0, total_2015 = 0, total_2016 = 0, total_2017 = 0, total_2018 = 0, total_2019 = 0, total_2020 = 0;
                 total_avg = 0, Avg_feb = 0, Avg_mar = 0, Avg_apr = 0, Avg_may = 0, Avg_june = 0, Avg_july = 0, Avg_Aug = 0, Avg_sept = 0, Avg_Nov = 0, Avg_oct = 0, Avg_dec = 0;

              

              
                //2010
                if (locations[i].jan_2010 != null && locations[i].jan_2010 != "") {
                    sum_jan_10 = sum_jan_10 + parseFloat(locations[i].jan_2010);
                }
                if (locations[i].feb_2010 != null && locations[i].feb_2010 != "") {
                    sum_feb_10 = sum_feb_10 + parseFloat(locations[i].feb_2010)
                }
                if (locations[i].mar_2010 != null && locations[i].mar_2010 != "") {
                    sum_mar_10 = sum_mar_10 + parseFloat(locations[i].mar_2010)
                }
                if (locations[i].apr_2010 != null && locations[i].apr_2010 != "") {
                    sum_apr_10 = sum_apr_10 + parseFloat(locations[i].apr_2010)
                }
                if (locations[i].may_2010 != null && locations[i].may_2010 != "") {
                    sum_may_10 = sum_may_10 + parseFloat(locations[i].may_2010)
                }
                if (locations[i].jun_2010 != null && locations[i].jun_2010 != "") {
                    sum_jun_10 = sum_jun_10 + parseFloat(locations[i].jun_2010)
                }
                if (locations[i].jul_2010 != null && locations[i].jul_2010 != "") {
                    sum_july_10 = sum_july_10 + parseFloat(locations[i].jul_2010)
                }
                if (locations[i].aug_2010 != null && locations[i].aug_2010 != "") {
                    sum_aug_10 = sum_aug_10 + parseFloat(locations[i].aug_2010)
                }
                if (locations[i].sep_2010 != null && locations[i].sep_2010 != "") {
                    sum_sep_10 = sum_sep_10 + parseFloat(locations[i].sep_2010)
                }
                if (locations[i].oct_2010 != null && locations[i].oct_2010 != "") {
                    sum_oct_10 = sum_oct_10 + parseFloat(locations[i].oct_2010)
                }
                if (locations[i].nov_2010 != null && locations[i].nov_2010 != "") {
                    sum_nov_10 = sum_nov_10 + parseFloat(locations[i].nov_2010)
                }
                if (locations[i].dec_2010 != null && locations[i].dec_2010 != "") {
                    sum_dec_10 = sum_dec_10 + parseFloat(locations[i].dec_2010)
                }

                total_2010 = parseFloat((sum_jan_10 + sum_feb_10 + sum_mar_10 + sum_apr_10 + sum_may_10 + sum_jun_10 + sum_july_10 + sum_aug_10 + sum_sep_10 + sum_oct_10 + sum_nov_10 + sum_dec_10).toFixed(2));
                $('#table_id_2010').text(parseFloat(total_2010).toFixed(2));
               // YearsInfo.push(total_2010);
                //2011
                if (locations[i].jan_2011 != null && locations[i].jan_2011 != "") {
                    sum_jan_11 = sum_jan_11 + parseFloat(locations[i].jan_2011)
                }
                if (locations[i].feb_2011 != null && locations[i].feb_2011 != "") {
                    sum_feb_11 = sum_feb_11 + parseFloat(locations[i].feb_2011)
                }
                if (locations[i].mar_2011 != null && locations[i].mar_2011 != "") {
                    sum_mar_11 = sum_mar_11 + parseFloat(locations[i].mar_2011)
                }
                if (locations[i].apr_2011 != null && locations[i].apr_2011 != "") {
                    sum_apr_11 = sum_apr_11 + parseFloat(locations[i].apr_2011)
                }
                if (locations[i].may_2011 != null && locations[i].may_2011 != "") {
                    sum_may_11 = sum_may_11 + parseFloat(locations[i].may_2011)
                }
                if (locations[i].jun_2011 != null && locations[i].jun_2011 != "") {
                    sum_jun_11 = sum_jun_11 + parseFloat(locations[i].jun_2011)
                }
                if (locations[i].jul_2011 != null && locations[i].jul_2011 != "") {
                    sum_july_11 = sum_july_11 + parseFloat(locations[i].jul_2011)
                }
                if (locations[i].aug_2011 != null && locations[i].aug_2011 != "") {
                    sum_aug_11 = sum_aug_11 + parseFloat(locations[i].aug_2011)
                }
                if (locations[i].sep_2011 != null && locations[i].sep_2011 != "") {
                    sum_sep_11 = sum_sep_11 + parseFloat(locations[i].sep_2011)
                }
                if (locations[i].oct_2011 != null && locations[i].oct_2011 != "") {
                    sum_oct_11 = sum_oct_11 + parseFloat(locations[i].oct_2011)
                }
                if (locations[i].nov_2011 != null && locations[i].nov_2011 != "") {
                    sum_nov_11 = sum_nov_11 + parseFloat(locations[i].nov_2011)
                }
                if (locations[i].dec_2011 != null && locations[i].dec_2011 != "") {
                    sum_dec_11 = sum_dec_11 + parseFloat(locations[i].dec_2011)
                }

                total_2011 = parseFloat((sum_jan_11 + sum_feb_11 + sum_mar_11 + sum_apr_11 + sum_may_11 + sum_jun_11 + sum_july_11 + sum_aug_11 + sum_sep_11 + sum_oct_11 + sum_nov_11 + sum_dec_11).toFixed(2));
                $('#table_id_2011').text(parseFloat(total_2011).toFixed(2));
                //YearsInfo.push(total_2011);
                //2012

                if (locations[i].jan_2012 != null && locations[i].jan_2012 != "") {
                    sum_jan_12 = sum_jan_12 + parseFloat(locations[i].jan_2012)
                }
                if (locations[i].feb_2012 != null && locations[i].feb_2012 != "") {
                    sum_feb_12 = sum_feb_12 + parseFloat(locations[i].feb_2012)
                }
                if (locations[i].mar_2012 != null && locations[i].mar_2012 != "") {
                    sum_mar_12 = sum_mar_12 + parseFloat(locations[i].mar_2012)
                }
                if (locations[i].apr_2012 != null && locations[i].apr_2012 != "") {
                    sum_apr_12 = sum_apr_12 + parseFloat(locations[i].apr_2012)
                }
                if (locations[i].may_2012 != null && locations[i].may_2012 != "") {
                    sum_may_12 = sum_may_12 + parseFloat(locations[i].may_2012)
                }
                if (locations[i].jun_2012 != null && locations[i].jun_2012 != "") {
                    sum_jun_12 = sum_jun_12 + parseFloat(locations[i].jun_2012)
                }
                if (locations[i].jul_2012 != null && locations[i].jul_2012 != "") {
                    sum_july_12 = sum_july_12 + parseFloat(locations[i].jul_2012)
                }
                if (locations[i].aug_2012 != null && locations[i].aug_2012 != "") {
                    sum_aug_12 = sum_aug_12 + parseFloat(locations[i].aug_2012)
                }
                if (locations[i].sep_2012 != null && locations[i].sep_2012 != "") {
                    sum_sep_12 = sum_sep_12 + parseFloat(locations[i].sep_2012)
                }
                if (locations[i].oct_2012 != null && locations[i].oct_2012 != "") {
                    sum_oct_12 = sum_oct_12 + parseFloat(locations[i].oct_2012)
                }
                if (locations[i].nov_2012 != null && locations[i].nov_2012 != "") {
                    sum_nov_12 = sum_nov_12 + parseFloat(locations[i].nov_2012)
                }
                if (locations[i].dec_2012 != null && locations[i].dec_2012 != "") {
                    sum_dec_12 = sum_dec_12 + parseFloat(locations[i].dec_2012)
                }

                total_2012 = parseFloat((sum_jan_12 + sum_feb_12 + sum_mar_12 + sum_apr_12 + sum_may_12 + sum_jun_12 + sum_july_12 + sum_aug_12 + sum_sep_12 + sum_oct_12 + sum_nov_12 + sum_dec_12).toFixed(2));
                $('#table_id_2012').text(parseFloat(total_2012).toFixed(2));
                //YearsInfo.push(total_2012);
                //2013

                if (locations[i].jan_2013 != null && locations[i].jan_2013 != "") {
                    sum_jan_13 = sum_jan_13 + parseFloat(locations[i].jan_2013)
                }
                if (locations[i].feb_2013 != null && locations[i].feb_2013 != "") {
                    sum_feb_13 = sum_feb_13 + parseFloat(locations[i].feb_2013)
                }
                if (locations[i].mar_2013 != null && locations[i].mar_2013 != "") {
                    sum_mar_13 = sum_mar_13 + parseFloat(locations[i].mar_2013)
                }
                if (locations[i].apr_2013 != null && locations[i].apr_2013 != "") {
                    sum_apr_13 = sum_apr_13 + parseFloat(locations[i].apr_2013)
                }
                if (locations[i].may_2013 != null && locations[i].may_2013 != "") {
                    sum_may_13 = sum_may_13 + parseFloat(locations[i].may_2013)
                }
                if (locations[i].jun_2013 != null && locations[i].jun_2013 != "") {
                    sum_jun_13 = sum_jun_13 + parseFloat(locations[i].jun_2013)
                }
                if (locations[i].jul_2013 != null && locations[i].jul_2013 != "") {
                    sum_july_13 = sum_july_13 + parseFloat(locations[i].jul_2013)
                }
                if (locations[i].aug_2013 != null && locations[i].aug_2013 != "") {
                    sum_aug_13 = sum_aug_13 + parseFloat(locations[i].aug_2013)
                }
                if (locations[i].sep_2013 != null && locations[i].sep_2013 != "") {
                    sum_sep_13 = sum_sep_13 + parseFloat(locations[i].sep_2013)
                }
                if (locations[i].oct_2013 != null && locations[i].oct_2013 != "") {
                    sum_oct_13 = sum_oct_13 + parseFloat(locations[i].oct_2013)
                }
                if (locations[i].nov_2013 != null && locations[i].nov_2013 != "") {
                    sum_nov_13 = sum_nov_13 + parseFloat(locations[i].nov_2013)
                }
                if (locations[i].dec_2013 != null && locations[i].dec_2013 != "") {
                    sum_dec_13 = sum_dec_13 + parseFloat(locations[i].dec_2013)
                }

                total_2013 = parseFloat((sum_jan_13 + sum_feb_13 + sum_mar_13 + sum_apr_13 + sum_may_13 + sum_jun_13 + sum_july_13 + sum_aug_13 + sum_sep_13 + sum_oct_13 + sum_nov_13 + sum_dec_13).toFixed(2));
                $('#table_id_2013').text(parseFloat(total_2013).toFixed(2));
               // YearsInfo.push(total_2013);

                //2014
                if (locations[i].jan_2014 != null && locations[i].jan_2014 != "") {
                    sum_jan_14 = sum_jan_14 + parseFloat(locations[i].jan_2014)
                }
                if (locations[i].feb_2014 != null && locations[i].feb_2014 != "") {
                    sum_feb_14 = sum_feb_14 + parseFloat(locations[i].feb_2014)
                }
                if (locations[i].mar_2014 != null && locations[i].mar_2014 != "") {
                    sum_mar_14 = sum_mar_14 + parseFloat(locations[i].mar_2014)
                }
                if (locations[i].apr_2014 != null && locations[i].apr_2014 != "") {
                    sum_apr_14 = sum_apr_14 + parseFloat(locations[i].apr_2014)
                }
                if (locations[i].may_2014 != null && locations[i].may_2014 != "") {
                    sum_may_14 = sum_may_14 + parseFloat(locations[i].may_2014)
                }
                if (locations[i].jun_2014 != null && locations[i].jun_2014 != "") {
                    sum_jun_14 = sum_jun_14 + parseFloat(locations[i].jun_2014)
                }
                if (locations[i].jul_2014 != null && locations[i].jul_2014 != "") {
                    sum_july_14 = sum_july_14 + parseFloat(locations[i].jul_2014)
                }
                if (locations[i].aug_2014 != null && locations[i].aug_2014 != "") {
                    sum_aug_14 = sum_aug_14 + parseFloat(locations[i].aug_2014)
                }
                if (locations[i].sep_2014 != null && locations[i].sep_2014 != "") {
                    sum_sep_14 = sum_sep_14 + parseFloat(locations[i].sep_2014)
                }
                if (locations[i].oct_2014 != null && locations[i].oct_2014 != "") {
                    sum_oct_14 = sum_oct_14 + parseFloat(locations[i].oct_2014)
                }
                if (locations[i].nov_2014 != null && locations[i].nov_2014 != "") {
                    sum_nov_14 = sum_nov_14 + parseFloat(locations[i].nov_2014)
                }
                if (locations[i].dec_2014 != null && locations[i].dec_2014 != "") {
                    sum_dec_14 = sum_dec_14 + parseFloat(locations[i].dec_2014)
                }

                total_2014 = parseFloat((sum_jan_14 + sum_feb_14 + sum_mar_14 + sum_apr_14 + sum_may_14 + sum_jun_14 + sum_july_14 + sum_aug_14 + sum_sep_14 + sum_oct_14 + sum_nov_14 + sum_dec_14).toFixed(2));
                $('#table_id_2014').text(parseFloat(total_2014).toFixed(2));
               // YearsInfo.push(total_2014);
                //2015
                if (locations[i].jan_2015 != null && locations[i].jan_2015 != "") {
                    sum_jan_15 = sum_jan_15 + parseFloat(locations[i].jan_2015)
                }
                if (locations[i].feb_2015 != null && locations[i].feb_2015 != "") {
                    sum_feb_15 = sum_feb_15 + parseFloat(locations[i].feb_2015)
                }
                if (locations[i].mar_2015 != null && locations[i].mar_2015 != "") {
                    sum_mar_15 = sum_mar_15 + parseFloat(locations[i].mar_2015)
                }
                if (locations[i].apr_2015 != null && locations[i].apr_2015 != "") {
                    sum_apr_15 = sum_apr_15 + parseFloat(locations[i].apr_2015)
                }
                if (locations[i].may_2015 != null && locations[i].may_2015 != "") {
                    sum_may_15 = sum_may_15 + parseFloat(locations[i].may_2015)
                }
                if (locations[i].jun_2015 != null && locations[i].jun_2015 != "") {
                    sum_jun_15 = sum_jun_15 + parseFloat(locations[i].jun_2015)
                }
                if (locations[i].jul_2015 != null && locations[i].jul_2015 != "") {
                    sum_july_15 = sum_july_15 + parseFloat(locations[i].jul_2015)
                }
                if (locations[i].aug_2015 != null && locations[i].aug_2015 != "") {
                    sum_aug_15 = sum_aug_15 + parseFloat(locations[i].aug_2015)
                }
                if (locations[i].sep_2015 != null && locations[i].sep_2015 != "") {
                    sum_sep_15 = sum_sep_15 + parseFloat(locations[i].sep_2015)
                }
                if (locations[i].oct_2015 != null && locations[i].oct_2015 != "") {
                    sum_oct_15 = sum_oct_15 + parseFloat(locations[i].oct_2015)
                }
                if (locations[i].nov_2015 != null && locations[i].nov_2015 != "") {
                    sum_nov_15 = sum_nov_15 + parseFloat(locations[i].nov_2015)
                }
                if (locations[i].dec_2015 != null && locations[i].dec_2015 != "") {
                    sum_dec_15 = sum_dec_15 + parseFloat(locations[i].dec_2015)
                }

                total_2015 = parseFloat((sum_jan_15 + sum_feb_15 + sum_mar_15 + sum_apr_15 + sum_may_15 + sum_jun_15 + sum_july_15 + sum_aug_15 + sum_sep_15 + sum_oct_15 + sum_nov_15 + sum_dec_15).toFixed(2));
                $('#table_id_2015').text(parseFloat(total_2015).toFixed(2));
              //  YearsInfo.push(total_2015);
                //2016
                if (locations[i].jan_2016 != null && locations[i].jan_2016 != "") {
                    sum_jan_16 = sum_jan_16 + parseFloat(locations[i].jan_2016)
                }
                if (locations[i].feb_2016 != null && locations[i].feb_2016 != "") {
                    sum_feb_16 = sum_feb_16 + parseFloat(locations[i].feb_2016)
                }
                if (locations[i].mar_2016 != null && locations[i].mar_2016 != "") {
                    sum_mar_16 = sum_mar_16 + parseFloat(locations[i].mar_2016)
                }
                if (locations[i].apr_2016 != null && locations[i].apr_2016 != "") {
                    sum_apr_16 = sum_apr_16 + parseFloat(locations[i].apr_2016)
                }
                if (locations[i].may_2016 != null && locations[i].may_2016 != "") {
                    sum_may_16 = sum_may_16 + parseFloat(locations[i].may_2016)
                }
                if (locations[i].jun_2016 != null && locations[i].jun_2016 != "") {
                    sum_jun_16 = sum_jun_16 + parseFloat(locations[i].jun_2016)
                }
                if (locations[i].jul_2016 != null && locations[i].jul_2016 != "") {
                    sum_july_16 = sum_july_16 + parseFloat(locations[i].jul_2016)
                }
                if (locations[i].aug_2016 != null && locations[i].aug_2016 != "") {
                    sum_aug_16 = sum_aug_16 + parseFloat(locations[i].aug_2016)
                }
                if (locations[i].sep_2016 != null && locations[i].sep_2016 != "") {
                    sum_sep_16 = sum_sep_16 + parseFloat(locations[i].sep_2016)
                }
                if (locations[i].oct_2016 != null && locations[i].oct_2016 != "") {
                    sum_oct_16 = sum_oct_16 + parseFloat(locations[i].oct_2016)
                }
                if (locations[i].nov_2016 != null && locations[i].nov_2016 != "") {
                    sum_nov_16 = sum_nov_16 + parseFloat(locations[i].nov_2016)
                }
                if (locations[i].dec_2016 != null && locations[i].dec_2016 != "") {
                    sum_dec_16 = sum_dec_16 + parseFloat(locations[i].dec_2016)
                }

                total_2016 = parseFloat((sum_jan_16 + sum_feb_16 + sum_mar_16 + sum_apr_16 + sum_may_16 + sum_jun_16 + sum_july_16 + sum_aug_16 + sum_sep_16 + sum_oct_16 + sum_nov_16 + sum_dec_16).toFixed(2));
                $('#table_id_2016').text(parseFloat(total_2016).toFixed(2));
                //YearsInfo.push(total_2016);
                //2017
                if (locations[i].jan_2017 != null && locations[i].jan_2017 != "") {
                    sum_jan_17 = sum_jan_17 + parseFloat(locations[i].jan_2017)
                }
                if (locations[i].feb_2017 != null && locations[i].feb_2017 != "") {
                    sum_feb_17 = sum_feb_17 + parseFloat(locations[i].feb_2017)
                }
                if (locations[i].mar_2017 != null && locations[i].mar_2017 != "") {
                    sum_mar_17 = sum_mar_17 + parseFloat(locations[i].mar_2017)
                }
                if (locations[i].apr_2017 != null && locations[i].apr_2017 != "") {
                    sum_apr_17 = sum_apr_17 + parseFloat(locations[i].apr_2017)
                }
                if (locations[i].may_2017 != null && locations[i].may_2017 != "") {
                    sum_may_17 = sum_may_17 + parseFloat(locations[i].may_2017)
                }
                if (locations[i].jun_2017 != null && locations[i].jun_2017 != "") {
                    sum_jun_17 = sum_jun_17 + parseFloat(locations[i].jun_2017)
                }
                if (locations[i].jul_2017 != null && locations[i].jul_2017 != "") {
                    sum_july_17 = sum_july_17 + parseFloat(locations[i].jul_2017)
                }
                if (locations[i].aug_2017 != null && locations[i].aug_2017 != "") {
                    sum_aug_17 = sum_aug_17 + parseFloat(locations[i].aug_2017)
                }
                if (locations[i].sep_2017 != null && locations[i].sep_2017 != "") {
                    sum_sep_17 = sum_sep_17 + parseFloat(locations[i].sep_2017)
                }
                if (locations[i].oct_2017 != null && locations[i].oct_2017 != "") {
                    sum_oct_17 = sum_oct_17 + parseFloat(locations[i].oct_2017)
                }
                if (locations[i].nov_2017 != null && locations[i].nov_2017 != "") {
                    sum_nov_17 = sum_nov_17 + parseFloat(locations[i].nov_2017)
                }
                if (locations[i].dec_2017 != null && locations[i].dec_2017 != "") {
                    sum_dec_17 = sum_dec_17 + parseFloat(locations[i].dec_2017)
                }

                total_2017 = parseFloat((sum_jan_17 + sum_feb_17 + sum_mar_17 + sum_apr_17 + sum_may_17 + sum_jun_17 + sum_july_17 + sum_aug_17 + sum_sep_17 + sum_oct_17 + sum_nov_17 + sum_dec_17).toFixed(2));
                $('#table_id_2017').text(parseFloat(total_2017).toFixed(2));
               // YearsInfo.push(total_2017);
                //2018

                if (locations[i].jan_2018 != null && locations[i].jan_2018 != "") {
                    sum_jan_18 = sum_jan_18 + parseFloat(locations[i].jan_2018)
                }
                if (locations[i].feb_2018 != null && locations[i].feb_2018 != "") {
                    sum_feb_18 = sum_feb_18 + parseFloat(locations[i].feb_2018)
                }
                if (locations[i].mar_2018 != null && locations[i].mar_2018 != "") {
                    sum_mar_18 = sum_mar_18 + parseFloat(locations[i].mar_2018)
                }
                if (locations[i].apr_2018 != null && locations[i].apr_2018 != "") {
                    sum_apr_18 = sum_apr_18 + parseFloat(locations[i].apr_2018)
                }
                if (locations[i].may_2018 != null && locations[i].may_2018 != "") {
                    sum_may_18 = sum_may_18 + parseFloat(locations[i].may_2018)
                }
                if (locations[i].jun_2018 != null && locations[i].jun_2018 != "") {
                    sum_jun_18 = sum_jun_18 + parseFloat(locations[i].jun_2018)
                }
                if (locations[i].jul_2018 != null && locations[i].jul_2018 != "") {
                    sum_july_18 = sum_july_18 + parseFloat(locations[i].jul_2018)
                }
                if (locations[i].aug_2018 != null && locations[i].aug_2018 != "") {
                    sum_aug_18 = sum_aug_18 + parseFloat(locations[i].aug_2018)
                }
                if (locations[i].sep_2018 != null && locations[i].sep_2018 != "") {
                    sum_sep_18 = sum_sep_18 + parseFloat(locations[i].sep_2018)
                }
                if (locations[i].oct_2018 != null && locations[i].oct_2018 != "") {
                    sum_oct_18 = sum_oct_18 + parseFloat(locations[i].oct_2018)
                }
                if (locations[i].nov_2018 != null && locations[i].nov_2018 != "") {
                    sum_nov_18 = sum_nov_18 + parseFloat(locations[i].nov_2018)
                }
                if (locations[i].dec_2018 != null && locations[i].dec_2018 != "") {
                    sum_dec_18 = sum_dec_18 + parseFloat(locations[i].dec_2018)
                }

                total_2018 = parseFloat((sum_jan_18 + sum_feb_18 + sum_mar_18 + sum_apr_18 + sum_may_18 + sum_jun_18 + sum_july_18 + sum_aug_18 + sum_sep_18 + sum_oct_18 + sum_nov_18 + sum_dec_18).toFixed(2));
                $('#table_id_2018').text(parseFloat(total_2018).toFixed(2));
               // YearsInfo.push(total_2018);
                // 2019
                if (locations[i].jan_2019 != null && locations[i].jan_2019 != "") {
                    sum_jan_19 = sum_jan_19 + parseFloat(locations[i].jan_2019)
                }
                if (locations[i].feb_2019 != null && locations[i].feb_2019 != "") {
                    sum_feb_19 = sum_feb_19 + parseFloat(locations[i].feb_2019)
                }
                if (locations[i].mar_2019 != null && locations[i].mar_2019 != "") {
                    sum_mar_19 = sum_mar_19 + parseFloat(locations[i].mar_2019)
                }
                if (locations[i].apr_2019 != null && locations[i].apr_2019 != "") {
                    sum_apr_19 = sum_apr_19 + parseFloat(locations[i].apr_2019)
                }
                if (locations[i].may_2019 != null && locations[i].may_2019 != "") {
                    sum_may_19 = sum_may_19 + parseFloat(locations[i].may_2019)
                }
                if (locations[i].jun_2019 != null && locations[i].jun_2019 != "") {
                    sum_jun_19 = sum_jun_19 + parseFloat(locations[i].jun_2019)
                }
                if (locations[i].jul_2019 != null && locations[i].jul_2019 != "") {
                    sum_july_19 = sum_july_19 + parseFloat(locations[i].jul_2019)
                }
                if (locations[i].aug_2019 != null && locations[i].aug_2019 != "") {
                    sum_aug_19 = sum_aug_19 + parseFloat(locations[i].aug_2019)
                }
                if (locations[i].sep_2019 != null && locations[i].sep_2019 != "") {
                    sum_sep_19 = sum_sep_19 + parseFloat(locations[i].sep_2019)
                }
                if (locations[i].oct_2019 != null && locations[i].oct_2019 != "") {
                    sum_oct_19 = sum_oct_19 + parseFloat(locations[i].oct_2019)
                }
                if (locations[i].nov_2019 != null && locations[i].nov_2019 != "") {
                    sum_nov_19 = sum_nov_19 + parseFloat(locations[i].nov_2019)
                }
                if (locations[i].dec_2019 != null && locations[i].dec_2019 != "") {
                    sum_dec_19 = sum_dec_19 + parseFloat(locations[i].dec_2019)
                }

                total_2019 = parseFloat((sum_jan_19 + sum_feb_19 + sum_mar_19 + sum_apr_19 + sum_may_19 + sum_jun_19 + sum_july_19 + sum_aug_19 + sum_sep_19 + sum_oct_19 + sum_nov_19 + sum_dec_19).toFixed(2));
                $('#table_id_2019').text(parseFloat(total_2019).toFixed(2));
               // YearsInfo.push(total_2019);
                //2020
                if (locations[i].jan_2020 != null && locations[i].jan_2020 != "") {
                    sum_jan_20 = sum_jan_20 + parseFloat(locations[i].jan_2020)
                }
                total_2020 = parseFloat((sum_jan_20).toFixed(2));
                $('#table_id_2020').text(parseFloat(total_2020).toFixed(2));
               // YearsInfo.push(total_2020);



            }
           

            console.log("Count" + locations.length);

            // Setup the different icons and shadows
            var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';

            var icons = [
                iconURLPrefix + 'red-dot.png',
                iconURLPrefix + 'green-dot.png',
                iconURLPrefix + 'blue-dot.png',
                iconURLPrefix + 'orange-dot.png',
                iconURLPrefix + 'purple-dot.png',

                iconURLPrefix + 'yellow-dot.png'
            ]
            // var iconsLength = icons.length;
            for (var i = 0; i < 1; i++) {
                if (locations.length != 0) {
                    var map = new google.maps.Map(document.getElementById('map'), {


                        center: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        zoom: 8,
                        dragged: true
                        //mapTypeControl: false,
                        //streetViewControl: false,
                        //panControl: false,
                        //zoomControlOptions: {
                        //    position: google.maps.ControlPosition.LEFT_BOTTOM
                        //}
                    });
                }
            }

            var minZoomLevel = 4;

            // Bounds for North America
            var strictBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(25.236952, 55.175180),
                new google.maps.LatLng(5.261717, 80.072156));

            // Listen for the dragend event
            //google.maps.event.addListener(map, 'dragend', function () {
            //    if (strictBounds.contains(map.getCenter())) return;

            //    // We're out of bounds - Move the map back within the bounds

            //    var c = map.getCenter(),
            //        x = c.lng(),
            //        y = c.lat(),
            //        maxX = strictBounds.getNorthEast().lng(),
            //        maxY = strictBounds.getNorthEast().lat(),
            //        minX = strictBounds.getSouthWest().lng(),
            //        minY = strictBounds.getSouthWest().lat();

            //    if (x < minX) x = minX;
            //    if (x > maxX) x = maxX;
            //    if (y < minY) y = minY;
            //    if (y > maxY) y = maxY;

            //    map.setCenter(new google.maps.LatLng(y, x));
            //});

            // Limit the zoom level
            google.maps.event.addListener(map, 'zoom_changed', function () {
                if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
            });


            var infowindow = new google.maps.InfoWindow({
                maxWidth: 500
            });

            var markers = new Array();

            var iconCounter = 0;
            function getIconFromDepth(source_type) {
                if (source_type == "CGWB") {
                    return iconURLPrefix + 'red-dot.png'
                }
                if (source_type == "SGWB") {
                    return iconURLPrefix + 'blue-dot.png'
                }
                //if (depth >= 100) {
                //    return iconURLPrefix + 'red-dot.png'
                //}
                //if (depth >= 0 && depth <= 20) {
                //    return iconURLPrefix + 'green-dot.png'
                //}
                //if (depth > 20 && depth <= 40) {
                //    return iconURLPrefix + 'yellow-dot.png'
                //}

                //if (depth > 40 && depth <= 60) {
                //    return iconURLPrefix + 'purple-dot.png'
                //}
                //if (depth > 60 && depth <= 80) {
                //    return iconURLPrefix + 'blue-dot.png'
                //}

                //if (depth > 80 && depth <= 100) {
                //    return iconURLPrefix + 'orange-dot.png'
                //}
            }
           
            // Add the markers and infowindows to the map
            for (var i = 0; i < locations.length; i++) {
                var icon = getIconFromDepth(locations[i].source_type)
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),

                    map: map,
                    icon: icon
                });

                markers.push(marker);

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent("<div  class='tbl-responsive' style='overflow-x:scroll;overflow-y:hidden;'>" +
                            "<table id='TblData' class='table map_popup_table table-bordered table-responsive table-__web-inspector-hide-shortcut__'>" +
                            "<thead>" +
                            "<tr class='info'>" +
                            "<th colspan='130' class='text-center'>Ground Water Level (m bgl)</th>" +
                            "</tr>" +
                            "<tr class='info'>" +
                            "<th rowspan='2'>Site name</th>" +
                            "<th rowspan='2'>State</th>" +
                            "<th rowspan='2'>District</th>" +
                            "<th rowspan='2'>Block</th>" +
                            "<th rowspan='2'>Depth</th>" +

                            "<th colspan='12' class='text-center'>2010</th>" +
                            "<th colspan='12' class='text-center'>2011</th>" +
                            "<th colspan='12' class='text-center'>2012</th>" +
                            "<th colspan='12' class='text-center'>2013</th>" +
                            "<th colspan='12' class='text-center'>2014</th>" +
                            "<th colspan='12' class='text-center'>2015</th>" +
                            "<th colspan='12' class='text-center'>2016</th>" +
                            "<th colspan='12' class='text-center'>2017</th>" +
                            "<th colspan='12' class='text-center'>2018</th>" +
                            "<th colspan='12' class='text-center'>2019</th>" +
                            "<th colspan='' class='text-center'>2020</th>" +
                           

                            "</tr>" +
                            "<tr>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>april</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>april</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>apr</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                            "<th>Feb</th>" +
                            "<th>mar</th>" +
                            "<th>april</th>" +
                            "<th>may</th>" +
                            "<th>jun</th>" +
                            "<th>july</th>" +
                            "<th>Aug</th>" +
                            "<th>Sept</th>" +
                            "<th>Oct</th>" +
                            "<th>Nov</th>" +
                            "<th>Dec</th>" +

                            "<th>Jan</th>" +
                          
                            


                            "</tr>" +
                            "</thead>" +
                            "<tbody >" +

                            "<tr>" +
                            "<td>" + locations[i].site_name + "</td>" +
                            "<td>" + locations[i].state_name + "</td>" +

                            "<td>" + locations[i].district_name + " </td>" +
                            "<td>" + locations[i].block + "</td>" +

                            "<td>" + locations[i].depth + "</td>" +
                            "<td>" + sum_jan_10 + "</td>" +
                            "<td>" + sum_feb_10 + "</td>" +
                            "<td>" + sum_mar_10 + "</td>" +
                            "<td>" + sum_apr_10 + "</td>" +
                            "<td>" + sum_may_10 + "</td>" +
                            "<td>" + sum_may_10 + "</td>" +
                            "<td>" + sum_july_10 + "</td>" +
                            "<td>" + sum_aug_10 + "</td>" +
                            "<td>" + sum_sep_10 + "</td>" +
                            "<td>" + sum_oct_10 + "</td>" +
                            "<td>" + sum_nov_10 + "</td>" +
                            "<td>" + sum_dec_10 + "</td>" +

                            "<td>" + sum_jan_11 + "</td>" +
                            "<td>" + sum_feb_11 + "</td>" +
                            "<td>" + sum_mar_11 + "</td>" +
                            "<td>" + sum_apr_11 + "</td>" +
                            "<td>" + sum_may_11 + "</td>" +
                            "<td>" + sum_may_11 + "</td>" +
                            "<td>" + sum_july_11 + "</td>" +
                            "<td>" + sum_aug_11 + "</td>" +
                            "<td>" + sum_sep_11 + "</td>" +
                            "<td>" + sum_oct_11 + "</td>" +
                            "<td>" + sum_nov_11 + "</td>" +
                            "<td>" + sum_dec_11 + "</td>" +

                            "<td>" + sum_jan_12 + "</td>" +
                            "<td>" + sum_feb_12 + "</td>" +
                            "<td>" + sum_mar_12 + "</td>" +
                            "<td>" + sum_apr_12 + "</td>" +
                            "<td>" + sum_may_12 + "</td>" +
                            "<td>" + sum_may_12 + "</td>" +
                            "<td>" + sum_july_12 + "</td>" +
                            "<td>" + sum_aug_12 + "</td>" +
                            "<td>" + sum_sep_12 + "</td>" +
                            "<td>" + sum_oct_12 + "</td>" +
                            "<td>" + sum_nov_12 + "</td>" +
                            "<td>" + sum_dec_12 + "</td>" +

                            "<td>" + sum_jan_13 + "</td>" +
                            "<td>" + sum_feb_13 + "</td>" +
                            "<td>" + sum_mar_13 + "</td>" +
                            "<td>" + sum_apr_13 + "</td>" +
                            "<td>" + sum_may_13 + "</td>" +
                            "<td>" + sum_may_13 + "</td>" +
                            "<td>" + sum_july_13 + "</td>" +
                            "<td>" + sum_aug_13 + "</td>" +
                            "<td>" + sum_sep_13 + "</td>" +
                            "<td>" + sum_oct_13 + "</td>" +
                            "<td>" + sum_nov_13 + "</td>" +
                            "<td>" + sum_dec_13 + "</td>" +


                            "<td>" + sum_jan_14 + "</td>" +
                            "<td>" + sum_feb_14 + "</td>" +
                            "<td>" + sum_mar_14 + "</td>" +
                            "<td>" + sum_apr_14 + "</td>" +
                            "<td>" + sum_may_14 + "</td>" +
                            "<td>" + sum_may_14 + "</td>" +
                            "<td>" + sum_july_14 + "</td>" +
                            "<td>" + sum_aug_14 + "</td>" +
                            "<td>" + sum_sep_14 + "</td>" +
                            "<td>" + sum_oct_14 + "</td>" +
                            "<td>" + sum_nov_14 + "</td>" +
                            "<td>" + sum_dec_14 + "</td>" +

                            "<td>" + sum_jan_15 + "</td>" +
                            "<td>" + sum_feb_15 + "</td>" +
                            "<td>" + sum_mar_15 + "</td>" +
                            "<td>" + sum_apr_15 + "</td>" +
                            "<td>" + sum_may_15 + "</td>" +
                            "<td>" + sum_may_15 + "</td>" +
                            "<td>" + sum_july_15 + "</td>" +
                            "<td>" + sum_aug_15 + "</td>" +
                            "<td>" + sum_sep_15 + "</td>" +
                            "<td>" + sum_oct_15 + "</td>" +
                            "<td>" + sum_nov_15 + "</td>" +
                            "<td>" + sum_dec_15 + "</td>" +

                            "<td>" + sum_jan_16 + "</td>" +
                            "<td>" + sum_feb_16 + "</td>" +
                            "<td>" + sum_mar_16 + "</td>" +
                            "<td>" + sum_apr_16 + "</td>" +
                            "<td>" + sum_may_16 + "</td>" +
                            "<td>" + sum_may_16 + "</td>" +
                            "<td>" + sum_july_16 + "</td>" +
                            "<td>" + sum_aug_16 + "</td>" +
                            "<td>" + sum_sep_16 + "</td>" +
                            "<td>" + sum_oct_16 + "</td>" +
                            "<td>" + sum_nov_16 + "</td>" +
                            "<td>" + sum_dec_16 + "</td>" +

                            "<td>" + sum_jan_17 + "</td>" +
                            "<td>" + sum_feb_17 + "</td>" +
                            "<td>" + sum_mar_17 + "</td>" +
                            "<td>" + sum_apr_17 + "</td>" +
                            "<td>" + sum_may_17 + "</td>" +
                            "<td>" + sum_may_17 + "</td>" +
                            "<td>" + sum_july_17 + "</td>" +
                            "<td>" + sum_aug_17 + "</td>" +
                            "<td>" + sum_sep_17 + "</td>" +
                            "<td>" + sum_oct_17 + "</td>" +
                            "<td>" + sum_nov_17 + "</td>" +
                            "<td>" + sum_dec_17 + "</td>" +

                            "<td>" + sum_jan_18 + "</td>" +
                            "<td>" + sum_feb_18 + "</td>" +
                            "<td>" + sum_mar_18 + "</td>" +
                            "<td>" + sum_apr_18 + "</td>" +
                            "<td>" + sum_may_18 + "</td>" +
                            "<td>" + sum_may_18 + "</td>" +
                            "<td>" + sum_july_18 + "</td>" +
                            "<td>" + sum_aug_18 + "</td>" +
                            "<td>" + sum_sep_18 + "</td>" +
                            "<td>" + sum_oct_18 + "</td>" +
                            "<td>" + sum_nov_18 + "</td>" +
                            "<td>" + sum_dec_18 + "</td>" +

                            "<td>" + sum_jan_19 + "</td>" +
                            "<td>" + sum_feb_19 + "</td>" +
                            "<td>" + sum_mar_19 + "</td>" +
                            "<td>" + sum_apr_19 + "</td>" +
                            "<td>" + sum_may_19 + "</td>" +
                            "<td>" + sum_may_19 + "</td>" +
                            "<td>" + sum_july_19 + "</td>" +
                            "<td>" + sum_aug_19 + "</td>" +
                            "<td>" + sum_sep_19 + "</td>" +
                            "<td>" + sum_oct_19 + "</td>" +
                            "<td>" + sum_nov_19 + "</td>" +
                            "<td>" + sum_dec_19 + "</td>" +

                            "<td>" + sum_jan_20 + "</td>" +


                            "</tr>" +


                            "</tbody>" +
                            "</table>" +
                            "</div>");
                        infowindow.open(map, marker);
                    }
                })(marker, i));


                //iconCounter++;
                //// We only have a limited number of possible icon colors, so we may have to restart the counter
                //if (iconCounter >= iconsLength) {
                //    iconCounter = 0;
                //}
            }
            $('#mapLegend').show();
            /* Adding Map Legends */
            var legend = document.getElementById('mapLegend');
            div = document.createElement('div');
           
            div.innerHTML = '<span><img src="../Content/Agriculture_icons/2_dark_red.png"> CGWB</span>';
            legend.appendChild(div);
            var div = document.createElement('div');
            div.innerHTML = '<span><img src="../Content/Agriculture_icons/1_dark_blue.png">SGWB</span>';
            legend.appendChild(div);
            /* Push Legend to Right Top */
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);

            function autoCenter() {
                //  Create a new viewpoint bound
                var bounds = new google.maps.LatLngBounds();
                //  Go through each...
                for (var i = 0; i < markers.length; i++) {
                    bounds.extend(markers[i].center);
                    bounds.center = "India";
                    //bounds.center("India");
                }
                //  Fit these bounds to the map
                map.fitBounds(bounds);
            }
            autoCenter();

        }
    });
    MapView();

});

$('li.leftbtnnext > button.btnprocess1').click(function () {

    $('ul#myTabs.nav-pills.nav-justified > li').siblings('li').removeClass('active');
    var fine = $(this).closest("div[role=tabpanel]").attr("id");
    $('ul#myTabs.nav-pills.nav-justified > li > a[data-target="#' + fine + '"]').parent('li').next("li").addClass('active');
    //$('ul#myTabs.nav-pills.nav-justified > li.active').next('li').addClass('active');
    //$('ul#myTabs.nav-pills.nav-justified > li.active').siblings('li').removeClass('active');
    $('#' + fine + '').tab('show');
    $('ul#myTabs.nav-pills.nav-justified > li > a[data-target="#' + fine + '"]').parent('li').next('li').find('a').trigger('click');
});

$("ul#myTabs > li > a").on("show.bs.tab", function () {

    $('ul.tabs_menu > li:first-child').trigger('click');
});


// toll tip


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function () {
    $('[data-toggle="tooltip1"]').tooltip();
});


$('#btnDrftGo').click(function () {
    $('ul#myTabs.nav-pills.nav-justified > li').siblings('li').removeClass('active');
    var fine = $(this).closest("div[role=tabpanel]").attr("id");
    $('ul#myTabs.nav-pills.nav-justified > li > a[data-target="#' + fine + '"]').parent('li').next("li").addClass('active');
    $('#' + fine + '').tab('show');
    $('ul#myTabs.nav-pills.nav-justified > li > a[data-target="#' + fine + '"]').parent('li').next('li').find('a').trigger('click');
});

$('#btngotobalance').click(function () {
    $('ul#myTabs.nav-pills.nav-justified > li').siblings('li').removeClass('active');
    var fine = $(this).closest("div[role=tabpanel]").attr("id");
    $('ul#myTabs.nav-pills.nav-justified > li > a[data-target="#' + fine + '"]').parent('li').next("li").addClass('active');
    $('#' + fine + '').tab('show');
    $('ul#myTabs.nav-pills.nav-justified > li > a[data-target="#' + fine + '"]').parent('li').next('li').find('a').trigger('click');
});
$('#m1').click(function (e) {
    $('.subtab2').removeClass('active');
    $('.subtab3').removeClass('active');
    $('.subtab4').removeClass('active');
    $('.subtab5').removeClass('active');
    $('.subtab6').removeClass('active');
    $('.subtab7').removeClass('active');
    $('.subtab1').addClass('active');
    $('div.tabfirst div.active').removeClass('active');
    $('#menu-11').addClass('active in');
    $('li#Surface-water div').removeClass('active');
    $('li#Surface-water div.subtab1').addClass('active');
});
$('#m2').click(function (e) {
    $('.subtab00000').removeClass('active');
    $('.subtab13').removeClass('active');
    $('.subtab14').removeClass('active');
    $('.subtab15').removeClass('active');
    $('.subtab16').removeClass('active');
    $('.subtab17').removeClass('active');
    $('.subtab11').addClass('active');
    $('div.tabsecond div.active').removeClass('active');
    $('#menu-1').addClass('active in');
    $('li#indoor-water div').removeClass('active');
    $('li#indoor-water div.subtab11').addClass('active now');
});
$('#m3').click(function (e) {
    $('.subtab22').removeClass('active');
    $('.subtab23').removeClass('active');
    $('.subtab24').removeClass('active');
    $('.subtab21').addClass('active');
    $('div.tabthrid div.active').removeClass('active');
    $('#menu-8').addClass('active in');
    $('li#outdoor-water div').removeClass('active');
    $('li#outdoor-water  div.subtab21').addClass('active now');
});


$('body').on('keypress', ".decimal", function (event) {
    if (event.which === 8 || event.keyCode === 39)
        return true;

    else if ((event.which !== 46 || $(this).val().indexOf('.') !== -1) && (event.which < 48 || event.which > 57))
        event.preventDefault();

});
$('body').on('keypress', ".alpha", function (e) {
    var key = e.keyCode;
    //if (key === 32 || key === 46) {
    if (key === 32) {
        return true;
    }
    else if (key <= 64 || key >= 123) {
        e.preventDefault();
    }
    else {
        if (96 >= key && key > 90) {
            e.preventDefault();
        }
    }
});
// start header and footer nav bar changes script

$('#indoor-water.progress-group .progress-node').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#indoor-water.progress-group .progress-node').removeClass('active');
    $('#Commentary [id^="menu-"][class*="-info"]').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});

$('#outdoor-water.progress-group .progress-node').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#outdoor-water.progress-group .progress-node').removeClass('active');
    $('#Videos [id^="menu-"][class*="-info"]').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});

$('#Surface-water.progress-group .progress-node').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('#outdoor-water.progress-group .progress-node').removeClass('active');
    $('#music [id^="menu-"][class*="-info"]').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});


$('ul#rainfall_menu li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul#rainfall_menu li').removeClass('active');
    $('#Commentary [id^="menu-"][class*="-info"]').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});
$('ul#Surface_menu li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul#Surface_menu li').removeClass('active');
    $('#music [id^="menu-"][class*="-info"]').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});

$('ul#Water_draft_menu li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul#Water_draft_menu li').removeClass('active');
    $('.Sider_column > ul.sider_images_sider').removeClass('active');
    $('#Videos [id^="menu-"][class*="-info"]').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
    $("[data-target=" + tab_id + "]").addClass('active');
    //$('ul.tabs li').click(function () {
    //  var tab_id = $(this).attr('data-tab');

    //$('ul.tabs li').removeClass('current');


    //$(this).addClass('current');

    //})
});



$('.btnNext').click(function () {
    $('.tabs_menu > .active').next('.tab-link').trigger('click');
    //$('.tabs_menu > .active').next('div.progress-node').find('div.progress-link').trigger('click');
});

$('.btnPrevious').click(function () {
    $('.tabs_menu > .active').prev('.tab-link').trigger('click');
    // $('.tabs_menu > .active').next('div.progress-node').find('div.progress-link').trigger('click');
});



//$('.tabs_menu > .tab-link').click(function (e) {
//    //get selected href
//    var href = $(this).attr('data-tab');

//    // show tab for all tabs that match href
//    $('.tabs_menu > .tab-link[data-tab="' + href + '"]').tab('show');
//});
$('.gwr_menu.tabs_menu > .tab-link').click(function (e) {

    var href = $(this).attr('data-tab');


    $('.gwr_menu.tabs_menu > .tab-link').removeClass('active');


    //$('.tabs_menu').closest('.tab-link[data-tab="' + href + '"]').addClass('active');
    $('.gwr_menu.tabs_menu > .tab-link[data-tab="' + href + '"]').addClass('active');

    $('.gwr_menu[class*="-info"]').removeClass('active');
    $('.gwr_menu[class*="-info"][id=' + href + '').addClass('active');
});
$('ul[data-tabs="tabs"] > li > [data-toggle="tab"]').click(function (e) {

    var href = $(this).attr('data-target');


    $('ul[data-tabs="tabs"] > li').removeClass('active');


    $('ul[data-tabs="tabs"] > li > [data-toggle="tab"][data-target="' + href + '"]').closest('li').addClass('active');


    $('.tab-pane').removeClass('active in');
    $('.tab-pane' + href).addClass('active in');
});

$('.gwd_menu.tabs_menu > .tab-link').click(function (e) {

    var href = $(this).attr('data-tab');


    $('.gwd_menu.tabs_menu > .tab-link').removeClass('active');


    //$('.tabs_menu').closest('.tab-link[data-tab="' + href + '"]').addClass('active');
    $('.gwd_menu.tabs_menu > .tab-link[data-tab="' + href + '"]').addClass('active');

    $('.gwd_menu[class*="-info"]').removeClass('active');
    $('.gwd_menu[class*="-info"][id=' + href + '').addClass('active');
});

$('.sru_menu.tabs_menu > .tab-link').click(function (e) {

    var href = $(this).attr('data-tab');


    $('.sru_menu.tabs_menu > .tab-link').removeClass('active');


    //$('.tabs_menu').closest('.tab-link[data-tab="' + href + '"]').addClass('active');
    $('.sru_menu.tabs_menu > .tab-link[data-tab="' + href + '"]').addClass('active');

    $('.sru_menu[class*="-info"]').removeClass('active');
    $('.sru_menu[class*="-info"][id=' + href + '').addClass('active');
});
// start header and footer nav bar changes script
var locations = "";



function MapView() {


    // GroundWaterLevelsInfo()

}