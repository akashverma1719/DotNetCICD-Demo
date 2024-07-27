var Htate = "";
var water_Level = "";
var water_Quality = "";

$(document).ready(function () {
    // water_Level = "all";
    // Htate = "all";
    // water_Quality = "all";

    //StateWise_Info11();
    //WaterLevel_Info();
    //WaterQuality_Info();
});


function StateWise_Info() {
    $('#Info_alert').hide();
    Htate = $('#Htate').val();
    if (Htate != "0") {
        StateWise_Info11();
    }
    else {
        alert("Please Select StateName");
    }


}
function StateWise_Info11() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Contact/Hydrogeological_reports_Info',
        data: { 'StateName': Htate },
        dataType: 'JSON',
        success: function (data) {
            
            var Info_Tbl = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    Info_Tbl += '<tr><td><span class="fa fa-download"></span> <a href="' + data[i].filepath + '" download="">' + data[i].filename + '</a></td></tr>';
                }
                $('#Info_Tbl').html(Info_Tbl);
            }
            if (Info_Tbl == '') {

                Info_Tbl = '<tr><td class="text-center">No Files</td></tr>'

            }
            $('#Info_Tbl').html(Info_Tbl);


        }
    });
}

function StateWise_water_level_Info() {
    $('#Info_alert_Wl').hide();
    water_Level = $('#water_level').val();
    if (water_Level != "0") {
        WaterLevel_Info();
    }
    else {
        alert("Please Select StateName");
    }


}

function WaterLevel_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Contact/Water_Level_Info',
        data: { 'StateName': water_Level },
        dataType: 'JSON',
        success: function (data) {
            var Info_Tbl = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    Info_Tbl += '<tr><td><span class="fa fa-download"></span> <a href="' + data[i].filepath + '" download="">' + data[i].filename + '</a></td></tr>';
                }
                $('#waterlevel_tbl').html(Info_Tbl);
            }
            if (Info_Tbl == '') {

                Info_Tbl = '<tr><td class="text-center">No Files</td></tr>'

            }
            $('#waterlevel_tbl').html(Info_Tbl);


        }
    });
}

function StateWise_water_qulaity_Info() {
    $('#Info_alert_Wq').hide();
    water_Quality = $('#water_qulaity').val();
    if (water_Quality != "0") {
        WaterQuality_Info();
    }
    else {
        alert("Please Select StateName");
    }


}

function WaterQuality_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Contact/WaterQuality_Info',
        data: { 'StateName': water_Quality },
        dataType: 'JSON',
        success: function (data) {
            var Info_Tbl = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    Info_Tbl += '<tr><td><span class="fa fa-download"></span> <a href="' + data[i].filepath + '" download="">' + data[i].filename + '</a></td></tr>';
                }
                $('#waterquality_tbl').html(Info_Tbl);
            }
            if (Info_Tbl == '') {

                Info_Tbl = '<tr><td class="text-center">No Files</td></tr>'

            }
            $('#waterquality_tbl').html(Info_Tbl);


        }
    });
}