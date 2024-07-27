function WaterLevelWSP() {
    $('.loader').show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterLevelWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {


            var Tbodyhtml = '';
            var j = 0;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterLevel').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {

                    var sno = data[i].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml += '<tr class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml += '<td id="vill">' + data[i].sitename + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].locationdetails + '</td>';
                    Tbodyhtml += '<td id="latitude">' + data[i].latitude + '</td>';
                    Tbodyhtml += '<td id="longtude">' + data[i].longitude + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].datetime + '</td>';
                    Tbodyhtml += '<td id="Wellid">' + data[i].wellid + '</td>';
                    Tbodyhtml += '<td id="typeofwell">' + data[i].typeofwell + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].other_well_type + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].source_Ownership + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].source_Ownership_type + '</td>';
                    Tbodyhtml += '<td id="PreMonsoon2019">' + data[i].Diameter_of_Well + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].welldepth + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].Height_of_Measuring_Point + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].gwl_reading + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].gwl_date + '</td></tr>';
                }
                //for (var i = 0; i < data.length; i++) {

                //    Tbodyhtml += '<tr><td id="srNo">' + (++j) + '</td>';
                //    Tbodyhtml += '<td id="vill">' + data[i].sitename + '</td>';
                //    Tbodyhtml += '<td id="location">' + data[i].locationdetails + '</td>';
                //    Tbodyhtml += '<td id="latitude">' + data[i].latitude + '</td>';
                //    Tbodyhtml += '<td id="longtude">' + data[i].longitude + '</td>';
                //    Tbodyhtml += '<td id="date">' + data[i].datetime + '</td>';
                //    Tbodyhtml += '<td id="Wellid">' + data[i].wellid + '</td>';
                //    Tbodyhtml += '<td id="typeofwell">' + data[i].typeofwell + '</td>';
                //    Tbodyhtml += '<td id="email">' + data[i].other_well_type + '</td>';
                //    Tbodyhtml += '<td id="email">' + data[i].source_Ownership + '</td>';
                //    Tbodyhtml += '<td id="email">' + data[i].source_Ownership_type + '</td>';
                //    Tbodyhtml += '<td id="PreMonsoon2019">' + data[i].Diameter_of_Well + '</td>';
                //    Tbodyhtml += '<td id="date">' + data[i].welldepth + '</td>';
                //    Tbodyhtml += '<td id="date">' + data[i].Height_of_Measuring_Point + '</td></tr>';
                //}
                $('#WaterLevel').html(Tbodyhtml);
            }
            WaterQualityWSP();
        }
    });
}


function WaterQualityWSP() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterQualityWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {



            var Tbodyhtml = '';
            var j = 0;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterQuality').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {
                    //if (data[i].entry_time == null) {
                    //    curr_date = "";
                    //    curr_month = "";
                    //    curr_year = "";
                    //} else {
                    //    var nowDate = new Date(parseInt(data[i].entry_time.substr(6)))
                    //    curr_date = nowDate.getDate();
                    //    curr_month = nowDate.getMonth() + 1;
                    //    curr_year = nowDate.getFullYear();
                    //}
                    var sno = data[i].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml += '<tr class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml += '<td id="vill">' + data[i].Village + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Site_Name + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Latitude + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Longitude + '</td>';
                    Tbodyhtml += '<td id="wid2">' + data[i].Years + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_Type + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Source + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_ID + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_Depth + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Aquifer + '</td>';
                    //Tbodyhtml += '<td id="location">' + data[i].Formation + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].pH + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].EC + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].TDS + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].TH + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Calcium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Magnesium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Sodium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Potassium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Carbonate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Bicarbonate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Sulphate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Chloride + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Fluoride + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Nitrate + '</td></tr>';
                }
                $('#WaterQuality').html(Tbodyhtml);
            }
        }
    });
}
function MISWaterLevelWSP() {
    $('.loader').show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/GetMisWaterLevelWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {


            var Tbodyhtml = '';
            var j = 0;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterLevel').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {

                    var sno = data[i].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml += '<tr class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml += '<td id="vill">' + data[i].sitename + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].locationdetails + '</td>';
                    Tbodyhtml += '<td id="latitude">' + data[i].latitude + '</td>';
                    Tbodyhtml += '<td id="longtude">' + data[i].longitude + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].datetime + '</td>';
                    Tbodyhtml += '<td id="Wellid">' + data[i].wellid + '</td>';
                    Tbodyhtml += '<td id="typeofwell">' + data[i].typeofwell + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].other_well_type + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].source_Ownership + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].source_Ownership_type + '</td>';
                    Tbodyhtml += '<td id="PreMonsoon2019">' + data[i].Diameter_of_Well + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].welldepth + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].Height_of_Measuring_Point + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].gwl_reading + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].gwl_date + '</td></tr>';
                }
                //for (var i = 0; i < data.length; i++) {

                //    Tbodyhtml += '<tr><td id="srNo">' + (++j) + '</td>';
                //    Tbodyhtml += '<td id="vill">' + data[i].sitename + '</td>';
                //    Tbodyhtml += '<td id="location">' + data[i].locationdetails + '</td>';
                //    Tbodyhtml += '<td id="latitude">' + data[i].latitude + '</td>';
                //    Tbodyhtml += '<td id="longtude">' + data[i].longitude + '</td>';
                //    Tbodyhtml += '<td id="date">' + data[i].datetime + '</td>';
                //    Tbodyhtml += '<td id="Wellid">' + data[i].wellid + '</td>';
                //    Tbodyhtml += '<td id="typeofwell">' + data[i].typeofwell + '</td>';
                //    Tbodyhtml += '<td id="email">' + data[i].other_well_type + '</td>';
                //    Tbodyhtml += '<td id="email">' + data[i].source_Ownership + '</td>';
                //    Tbodyhtml += '<td id="email">' + data[i].source_Ownership_type + '</td>';
                //    Tbodyhtml += '<td id="PreMonsoon2019">' + data[i].Diameter_of_Well + '</td>';
                //    Tbodyhtml += '<td id="date">' + data[i].welldepth + '</td>';
                //    Tbodyhtml += '<td id="date">' + data[i].Height_of_Measuring_Point + '</td></tr>';
                //}
                $('#WaterLevel').html(Tbodyhtml);
            }
            MISWaterQualityWSP();
        }
    });
}


function WaterQualityWSP() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/WaterQualityWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            var Tbodyhtml = '';
            var j = 0;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterQuality').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {
                    var sno = data[i].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml += '<tr class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml += '<td id="vill">' + data[i].Village + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Site_Name + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Latitude + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Longitude + '</td>';
                    Tbodyhtml += '<td id="wid2">' + data[i].Years + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_Type + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Source + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_ID + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_Depth + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Aquifer + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].pH + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].EC + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].TDS + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].TH + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Calcium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Magnesium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Sodium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Potassium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Carbonate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Bicarbonate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Sulphate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Chloride + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Fluoride + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Nitrate + '</td></tr>';
                }
                $('#WaterQuality').html(Tbodyhtml);
            }
        }
    });
}

function MISWaterQualityWSP() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/GetMISWaterQualityWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            var Tbodyhtml = '';
            var j = 0;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterQuality').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {
                    var sno = data[i].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml += '<tr class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml += '<td id="vill">' + data[i].Village + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Site_Name + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Latitude + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Longitude + '</td>';
                    Tbodyhtml += '<td id="wid2">' + data[i].Years + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_Type + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Source + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_ID + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Well_Depth + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Aquifer + '</td>';
                    //Tbodyhtml += '<td id="location">' + data[i].Formation + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].pH + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].EC + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].TDS + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].TH + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Calcium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Magnesium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Sodium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Potassium + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Carbonate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Bicarbonate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Sulphate + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Chloride + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Fluoride + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].Nitrate + '</td></tr>';
                }
                $('#WaterQuality').html(Tbodyhtml);
            }
        }
    });
}

