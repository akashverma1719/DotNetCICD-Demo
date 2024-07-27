
$(document).ready(function () {
    $(".loader").show();
    $('#wsp_approved_dpmu').hide();
    $('#wsp_reject_status').hide();
    $('#wsp_approved_state').hide();
    $('#wsp_approved_spmu').hide();
    sarpanch_getting();
    get_approved_status();
    GetGParea();
    WaterBalance_Info();

});


function myMap(lat, long) {

    myCenter = new google.maps.LatLng(lat, long);
    var mapOptions = {
        center: myCenter,
        zoom: 10, scrollwheel: false, draggable: false,
        // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
        //title: "The Church",
    });
    marker.setMap(map);
}

function Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/GrampanchayatDetails',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Error") {
                window.location = "/WSP_23_24_updation/WSpGramreport";
            }
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (data.length != 0) {
                var Lat = 0;
                var Long = 0;
                Lat = parseFloat(data[0].latitude);
                Long = parseFloat(data[0].longitude);

            }


        }
    });
}


function get_gp_block_area() {
    $(".loader").show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/Get_gp_block_area',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data.length > 0) {
                Lat = parseFloat(data[0].latitude);
                Long = parseFloat(data[0].longitude);
                myMap(Lat, Long);
            }
            $(".loader").hide();
        }
    });
}

function gpimagesgeting_Location() {
    var state = $('#spnstate').text();
    var dist = $('#spndistrict').text();
    var block = $('#spnblock').text();
    var gram = $('#spngram').text();
    var obj = {};
    obj.state_name = state;
    obj.district_name = dist;
    obj.block_name = block;
    obj.gpname = gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/MapImagesdetails1',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
           
            //alert(data.length);
            $("#loaction_map_geting").html("");
            $("#Drainage_map_geting").html("");
            $("#Aquifer_map_geting").html("");
            $("#Watershed_map_geting").html("");
            var i = 0;
            var tr = '';
            var div1 = '';
            var div2 = '';
            var div3 = '';
            if (data.length != 0) {
                //alert('imagegetting');
                for (var i = 0; i < data.length; i++) {

                    div1 = '<a href="' + encodeURIComponent(data[i].gpimage1) + '"><img  src= "/WSP_23_24_updation/ViewFile?FileName=' + encodeURIComponent(data[i].gpimage1) + '" style="width:100%;height:700px;" /></a>'
                    div2 = '<a href="' + encodeURIComponent(data[i].gpimage2) + '"><img src= "/WSP_23_24_updation/ViewFile?FileName=' + encodeURIComponent(data[i].gpimage2) + '"  style="width:100%;height:700px;" /></a>'
                    div3 = '<a href="' + encodeURIComponent(data[i].gpimage3) + '"><img src= "/WSP_23_24_updation/ViewFile?FileName=' + encodeURIComponent(data[i].gpimage3) + '" style="width:100%;height:700px;" /></a>'
                    //tr += '<tr><td></td></tr > ';
                    //tr += '<tr> <th colspan="4" style="background-color: #ddd; text-align: center;">Location Map</th></tr >';
                    //tr += '<tr><td><label><a href="' + data[i].gpimage1 + '"></a></label></td></tr>';
                    //tr += '<tr><th colspan="4" style="background-color: #ddd; text-align: center;">Watershed Map</th></tr>';
                    //tr += '<tr><td><label><a href="' + data[i].gpimage2 + '"><img src="' + data[i].gpimage2 + '"style="width:100%;height:750px;" /></a></label></td></tr>';
                    //tr += '<tr><th colspan="4" style="background-color: #ddd; text-align: center;">Aquifer Map</th></tr>';
                    //tr += '<tr><td><label><a href="' + data[i].gpimage3 + '"><img src="' + data[i].gpimage3 + '" style="width:100%;height:750px;" /></a></label></td></tr>';

                }
                $('#image_div1').append(div1);
                $('#image_div2').append(div2);
                $('#image_div3').append(div3);

            }
            WaterAvialabilityDetails();
        }

    });
}


function Social_Monitor_Details2() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/Social_Monitor_Details_website',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            $('#SW_Image').hide();
            //$('#agendatr').hide();
            //$('#agendatr1').hide();
            $('#momtr').hide();
            $('#momtr1').hide();
            var tr2 = '';
            var Imge11 = '';
            $('#momtr1').html(tr2);
            $('#SW_Image').html(Imge11);
            if (data != 0) {
                $('#sm_date').text(data.date);
                $('#sm_location').text(data.location);
                $('#numberofattendees').text(data.numberofattendees);
                $('#sm_male').text(data.male);
                $('#sm_female').text(data.female);
                $('#sm_latitude').text(data.latitude);
                $('#sm_longitude').text(data.longitude);

                if (data.minutesofmeeting != null && data.minutesofmeeting != "") {

                    tr2 = '<label id="sm_mom"><a href="' + data.minutesofmeeting + '" class="btn btn-success" target="_blank">Download</a></label>';
                    $('#momtr1').html(tr2);
                    $('#momtr').show();
                    $('#momtr1').show();
                    $('#downloadtr').show();
                }
                else {
                    $('#momtr1').html("");
                    $('#momtr').hide();
                    $('#momtr1').hide();
                    i = 0;
                }
                if (data.image != null && data.image != "") {
                    var SS = 'data:image/png;base64,' + data.image;
                    $('#SW_Image').show();
                    Imge11 = '<div class="col-md-12"><img id = "" src = "' + SS + '" style = "width:100%;height:500px;" /></div>';
                    $('#SW_Image').html(Imge11);
                }



            }
            else {
                $('#downloadtr').hide();
            }
        }

    });
}
//  var Villname = document.getElementById('village').value;
var Villname = "";
var Male = 0;
var Female = 0;
var Others = 0;
function MapImages() {
    var state = $('#spnstate').text();
    var dist = $('#spndistrict').text();
    var block = $('#spnblock').text();
    var gram = $('#spngram').text();
    var obj = {};
    obj.state_name = state;
    obj.district_name = dist;
    obj.block_name = block;
    obj.gpname = gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/MapImagesdetails',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            $('#imgsss').html("");
            if (data != null) {
                var Images_Divs = "";

                var tr1 = '';
                var tr2 = '';
                var tr3 = '';
                var tr4 = '';

                if (data.gpimage1 != null && data.gpimage1 != "") {
                    var SS = 'data:image/png;base64,' + data.gpimage1;
                    tr1 = '<div class="page2el" id="img1_"><div class="col-md-12 image_space_gap31">' +
                        '<div class=" col-md-12 ">' +
                        '<img id="Image1" style="width:100%;height:750px;" src="' + SS + '" class="Imagesss1" /></div></div></div>';

                }
                if (data.gpimage2 != null && data.gpimage2 != "") {
                    var SS = 'data:image/png;base64,' + data.gpimage2;
                    tr2 = '<div class="page2el" id="img2_"><div class="col-md-12 image_space_gap31">' +
                        '<div class=" col-md-12 ">' +
                        '<img id="Image2" style="width:100%;height:750px;" src="' + SS + '" class="Imagesss1" /></div></div></div>';

                }
                if (data.gpimage3 != null && data.gpimage3 != "") {
                    var SS = 'data:image/png;base64,' + data.gpimage3;
                    tr3 = '<div class="page2el" id="img3_"><div class="col-md-12 image_space_gap31">' +
                        '<div class=" col-md-12 ">' +
                        '<img id="Image3" style="width:100%;height:750px;" src="' + SS + '" class="Imagesss1" /></div></div></div>';

                }
                if (data.gpimage4 != null && data.gpimage4 != "") {
                    var SS = 'data:image/png;base64,' + data.gpimage4;
                    tr4 = '<div class="page2el" id="img4_"><div class="col-md-12 image_space_gap31">' +
                        '<div class=" col-md-12 ">' +
                        '<img id="Image4" style="width:100%;height:750px;" src="' + SS + '" class="Imagesss1" /></div></div></div>';

                }

                var tr5 = tr1 + tr2 + tr3 + tr4;
                $('#imgsss').html(tr5);





            }

        }
    });
}

function PGDATA() {


    var State_name = $('#spnstate').text();
    var District_name = $('#spndistrict').text();
    var Block = $('#spnblock').text();
    var Gname = $('#spngram').text();
    //  var Villname = document.getElementById('village').value;
    var Villname = "";

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/pgwn_Depdetails',
        data: { 'state': State_name, 'dist': District_name, 'block': Block, 'gram': Gname, 'vill': Villname },
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }


            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].gender == "Male") {
                        Male = Male + 1;

                    }
                    else if (data[i].gender == "Female") {
                        Female = Female + 1;
                    } else {
                        Others = Others + 1;
                        Others = parseInt(Others);
                    }
                    tr += '<tr> <td>' + (i + 1) + '</td><td>' + data[i].countname + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td><td> ' + data[i].department + '</td><td></td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="6"style="text-align:center!important;">No Data</td></tr>';
            }
            if (tr == "") {
                tr += '<tr><td colspan="6"style="text-align:center!important;">No Data</td></tr>';
            }

            $("#tbldata").html(tr);
            PGWCHART();
        }
    });

}
function sarpanch_getting() {
    $(".loader").show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/Getting_abhy_wsp_pgwm_committee_member',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            abhy_socialmgt_pgwm_meeting_Info();
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].member_name + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_no + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE_summary').html(tr);
            }
            else {
                $('#TblData_GRAM_PANCHAYAT_DATABASE_summary').html(tr);
            }
            aaa = 1;



        }
    });
}
function abhy_socialmgt_pgwm_meeting_Info() {
    $(".loader").show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/Getting_abhy_wsp_pgwm_committee_meeting',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }

            //alert(data[2].meeting_gp_name)
            var tr2 = '';
            var tr = '';
            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {
                    var mom_doc = "";
                    if (data[i].mom_doc != null) {
                        mom_doc = data[i].mom_doc;
                    }
                    var meeting_image = "";
                    if (data[i].meeting_image != null) {
                        meeting_image = data[i].meeting_image;
                    }

                    var meeting_resolution = "";
                    if (data[i].meeting_resolution != null) {
                        meeting_resolution = data[i].meeting_resolution;
                    }
                    var attendance_sheet = "";
                    if (data[i].attendance_sheet != null) {
                        attendance_sheet = data[i].attendance_sheet;
                    }
                    //<td><a href="' + mom_doc + '" download="">MOM(Minutes of Meeting).pdf</a></td>     <td><a href="' + meeting_image + '" download="">Photograph.jpg</a></td> <td><a href="' + meeting_resolution + '" download="">Resolution.pdf</a></td></td > <td><a href="' + attendance_sheet + '">Attendance Sheet.pdf</a></td>
                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td style="white-space:pre;">' + data[i].meeting_date + '</td><td>' + data[i].meeting_gp_name + '</td><td>' + data[i].meeting_village + '</td> <td>' + data[i].meeting_location + '</td> <td>' + data[i].male_attendees + '</td><td>' + data[i].female_attendees + '</td><td>' + data[i].transgender_attendees + '</td> <td>' + data[i].total_attendees + '</td> </tr>';

                    tr2 += '<tr><td><label><a href="' + meeting_image + '"><img src="' + encodeURIComponent(meeting_image) + '"style="width:100%;height:700px;"/></a></label></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info_summary').html(tr);

            }
            else {
                $('#training_gp_Info_summary').html(tr);
                $('#pdf_container_photo').html(tr2);
            }
            //LoadPdfFromUrl(mom_doc, meeting_resolution, attendance_sheet);
            //WaterBalance_Info();

            /*LoadPdfFromUrl2(meeting_resolution);*/
        }
    });
}

function GramPanchayatDetails() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/GrampanchayatDetails',
        data: '',
        dataType: 'JSON',
        success: function (data) {


            var State_name = $('#spnstate').text();
            var District_name = $('#spndistrict').text();
            var Block = $('#spnblock').text();
            var Gname = $('#spngram').text();
            $('#state_name').text(State_name);
            $('#district_name').text(District_name);
            $('#block_name').text(Block);
            $('#gram_panchayat_name').text(Gname);
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (data.length != 0) {
                $('#gp_id').text(data[0].gp_id);
                if (data[0].block_area != null) {
                    $('#block_area').text(parseFloat(data[0].block_area).toFixed(4));
                }
                if (data[0].gp_area != null) {
                    $('#gp_area').text(parseFloat(data[0].gp_area).toFixed(4));
                }
                $('#watershed_code').text(data[0].watershed_code);

                $('#watershed_name').text(data[0].watershed_name);
                $('#watershed_area_block').text(data[0].watershed_area_block);
                $('#sub_basin_code').text(data[0].sub_basin_code);
                $('#sub_basin_name').text(data[0].sub_basin_name);
                $('#basin_name').text(data[0].basin_name);
                $('#basin_code').text(data[0].basin_code);
            }
            gpimagesgeting_Location();
        }
    });
}

function LiveStock_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/Water_Domestic_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {
                $('#domestic_people_count').text(response[0].domestic_people_count);
                $('#domestic_livestock_count').text(response[0].domestic_livestock_count);
            }
        }
    });
}


/*var GroundWater = 0, SurfaceWater = 0, Total_Water_Available = 0, volume_Of_RunOff_value = 0, Utilizable_Rainfall_Runoff1 = 0;*/
var gw_other_tol_recharge = 0, total_gw_available = 0, total_storage_capacity = 0, Total_Water_Available = 0, total_surface_water_available = 0, total_water_available = 0;
var Total_Availability = 0, Total_Utilization = 0, Total_Balance = 0;
var wb_sw_utili = 0, wb_gw_utili = 0;
var wb_sw_avail = 0, wb_gw_avail = 0;
var Blance_GroundWater = [];
var Blance_SurfaceWater = [];
var Blance_Total = [];
var GPAREA = 0;
var blockarea = 0;
function GetGParea() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/Get_gp_area',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                window.location = "/WspNew/WspWaterAvailability";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {
                GPAREA = response[0].gp_area;
                blockarea = response[0].block_area;
            }

            //Info1();

        }
    });
}
function WaterAvialabilityDetails() {
    $(".loader").show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            setTimeout(function () {
                $('.loader').hide();
            }, 20000);

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                if (response[0].annual_rainfall != null && response[0].annual_rainfall != "") {

                    $('#sw_annual_rainfall').text(parseFloat(response[0].annual_rainfall).toFixed(4));
                }

                if (response[0].est_vol_rainfall != null && response[0].est_vol_rainfall != "") {

                    $('#sw_tol_water_avail').text(parseFloat(response[0].est_vol_rainfall).toFixed(4));
                }

                if (response[0].evapo_rate != null && response[0].evapo_rate != "") {

                    $('#sw_evapo').text(parseFloat(response[0].evapo_rate).toFixed(4));
                }

                if (response[0].est_evapo_loss != null && response[0].est_evapo_loss != "") {

                    $('#sw_evapo_loses').text(parseFloat(response[0].est_evapo_loss).toFixed(4));
                }
                if (response[0].est_water_rain != null && response[0].est_water_rain != "") {

                    $('#estimated_wa_from_rainfall').text(parseFloat(response[0].est_water_rain).toFixed(4));
                }
                if (response[0].weigh_run_conf != null && response[0].weigh_run_conf != "") {

                    $('#weighted_average_runoff').text(parseFloat(response[0].weigh_run_conf).toFixed(4));
                }
                if (response[0].rain_runoff != null && response[0].rain_runoff != "") {

                    $('#rainfall_runoff').text(parseFloat(response[0].rain_runoff).toFixed(4));
                }
                if (response[0].rech_monsoon != null && response[0].rech_monsoon != "") {

                    $('#gw_rainfall_monsoon').text(parseFloat(response[0].rech_monsoon).toFixed(4));
                }
                if (response[0].rech_nonmonsoon != null && response[0].rech_nonmonsoon != "") {

                    $('#gw_rainfall_nonmonsoon').text(parseFloat(response[0].rech_nonmonsoon).toFixed(4));
                }
                if (response[0].tot_grd_rech_rain != null && response[0].tot_grd_rech_rain != "") {
                    Total_Water_Available = parseFloat(response[0].tot_grd_rech_rain);
                    $('#gw_rainfal_tol_recharge').text(parseFloat(response[0].tot_grd_rech_rain).toFixed(4));
                    $('#total_rainfall').text(parseFloat(response[0].tot_grd_rech_rain).toFixed(4));
                }
                if (response[0].ground_monsoon != null && response[0].ground_monsoon != "") {

                    $('#gw_other_monsoon').text(parseFloat(response[0].ground_monsoon).toFixed(4));
                }
                if (response[0].ground_nonmonsoon != null && response[0].ground_nonmonsoon != "") {

                    $('#gw_other_nonmonsoon').text(parseFloat(response[0].ground_nonmonsoon).toFixed(4));
                }
                if (response[0].tot_grd_rech_oth != null && response[0].tot_grd_rech_oth != "") {
                    gw_other_tol_recharge = parseFloat(response[0].tot_grd_rech_oth);
                    $('#gw_other_tol_recharge').text(parseFloat(response[0].tot_grd_rech_oth).toFixed(4));
                    $('#total_source').text(parseFloat(response[0].tot_grd_rech_oth).toFixed(4));
                }
                if (response[0].loss_nature != null && response[0].loss_nature != "") {

                    $('#natural_losses').text(parseFloat(response[0].loss_nature).toFixed(4));
                }

                if (response[0].tot_grd_wat_avail != null && response[0].tot_grd_wat_avail != "") {
                    total_gw_available = parseFloat(response[0].tot_grd_wat_avail);
                    $('#total_gw_available').text(parseFloat(response[0].tot_grd_wat_avail).toFixed(4));
                    $('#total_water_avialable').text(parseFloat(response[0].tot_grd_wat_avail).toFixed(4));
                }
                if (response[0].ground_water_with != null && response[0].ground_water_with != "") {

                    $('#ground_water_withdrawal').text(parseFloat(response[0].ground_water_with).toFixed(4));
                }
                //if (response[0].category != null && response[0].category != "") {

                //    $('#categorization').text(response[0].category);
                //}

                var val_split = response[0].avail_storages.split(',');
                var val_split2 = response[0].avail_storages_grd.split(',');
                var val_split3 = response[0].avail_storages_sur.split(',');
                var tr = '';
                for (var k = 0; k < val_split.length; k++) {
                    tr += '<tr><td>' + val_split[k] + '</td><td>' + val_split2[k] + '</td><td>' + val_split3[k] + '</td></tr>';
                }
                var newrow = $(tr);
                $('#rowid_ap').after(newrow);


                if (response[0].total_surface_body != null && response[0].total_surface_body != "") {
                    total_storage_capacity = parseFloat(response[0].total_surface_body);
                    $('#total_storage_capacity').text(parseFloat(response[0].total_surface_body).toFixed(4));
                    $('#total_storage_capacity_graph').text(parseFloat(response[0].total_surface_body).toFixed(4));
                }
                if (response[0].loss_if != null && response[0].loss_if != "") {

                    $('#loss_percentage').text(parseFloat(response[0].loss_if).toFixed(4));
                }
                if (response[0].surface_water_avail != null && response[0].surface_water_avail != "") {

                    $('#surface_water_available_store').text(parseFloat(response[0].surface_water_avail).toFixed(4));
                }
                if (response[0].trans_water_out != null && response[0].trans_water_out != "") {

                    $('#transport_water_from_outside').text(parseFloat(response[0].trans_water_out).toFixed(4));
                }
                if (response[0].total_sirface_water != null && response[0].total_sirface_water != "") {
                    total_surface_water_available = parseFloat(response[0].total_sirface_water);
                    $('#total_surface_water_available').text(parseFloat(response[0].total_sirface_water).toFixed(4));
                    $('#total_storage_capacity_graph').text(parseFloat(response[0].total_surface_body).toFixed(4));
                }
                if (response[0].total_avail_water != null && response[0].total_avail_water != "") {
                    total_water_available = parseFloat(response[0].total_avail_water);
                    $('#total_water_available').text(parseFloat(response[0].total_avail_water).toFixed(4));
                    $('#total_available').text(parseFloat(response[0].total_avail_water).toFixed(4));


                }
            }

            WaterAvailabiltyChart();


        }
    });

}


var wb_sw_avia = 0;
var wb_gw_avia = 0;
var total_avia = 0;
function WaterBalance_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WSP_23_24_updation/waterAval_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response.length != 0) {

                if (response[0].total_sirface_water != null && response[0].total_sirface_water != "") {
                    $('#wb_sw_avail').text(parseFloat(response[0].total_sirface_water).toFixed(4));
                    wb_sw_avia = parseFloat(response[0].total_sirface_water).toFixed(4);

                }

                if (response[0].tot_grd_wat_avail != null && response[0].tot_grd_wat_avail != "") {
                    $('#wb_gw_avail').text(parseFloat(response[0].tot_grd_wat_avail).toFixed(4));
                    wb_gw_avia = parseFloat(response[0].tot_grd_wat_avail).toFixed(4);
                }

                total_avia = parseFloat(wb_sw_avia) + parseFloat(wb_gw_avia);
                $('#wb_total_avail').text(total_avia.toFixed(4));

                $('#avl_surfacewater').text(wb_sw_avia);
                $('#avl_groundwater').text(wb_gw_avia);

            }
            WaterBalance_Info1();
        }
    });

}
var total_avia = 0;
var uti_tot = 0;
var total_water_b = 0;
function WaterBalance_Info1() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/WaterBalanceData',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                //window.location = "/WspNew/WspBalance";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response.length != 0) {
                $('#wb_sw_avail').text(response.wb_sw_avail.toFixed(4));
                $('#wb_gw_avail').text(response.wb_gw_avail.toFixed(4));
                $('#wb_total_avail').text(response.wb_total_avail.toFixed(4));
                $('#wb_gw_utili').text(response.wb_gw_utili.toFixed(4));
                $('#wb_sw_utili').text(response.wb_sw_utili.toFixed(4));
                $('#wb_total_utili').text(response.wb_total_utili.toFixed(4));
                $('#wb_gw_balance').text(response.wb_gw_balance.toFixed(4));
                $('#wb_sw_balance').text(response.wb_sw_balance.toFixed(4));
                $('#wb_total_balance').text(response.wb_total_balance.toFixed(4));
                total_avia = response.wb_total_avail.toFixed(4);
                uti_tot = response.wb_total_utili.toFixed(4);
                total_water_b = response.wb_total_balance.toFixed(4);
                $(".loader").hide();
            }
            BalanceCharts();
        }
    });
}



//var Ground_Water = 0, Surface_Water = 0, total_b = 0;
var Ground_Water = [];
var Surface_Water = [];
function WaterBudgetDeatils() {
    
    $(".loader").show();
    
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/WaterBudgetInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WSP_23_24_updation/WaterBudget_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            var demand_gw = 0;
            var demand_sw = 0;
            if (response.length != 0) {

                if (response[0].human_p_pop != "" && response[0].human_p_pop != null) {
                    $('#human_p_pop').text(parseFloat(response[0].human_p_pop).toFixed(4));

                }
                if (response[0].human_a_pop != "" && response[0].human_a_pop != null) {
                    $('#human_a_pop').text(parseFloat(response[0].human_a_pop).toFixed(4));
                }
                if (response[0].human_no_of_year != "" && response[0].human_no_of_year != null) {
                    $('#human_no_of_year').text(parseFloat(response[0].human_no_of_year).toFixed(4));
                }

                if (response[0].human_pre_pop != "" && response[0].human_pre_pop != null) {
                    $('#human_pro_pop').text(parseFloat(response[0].human_pre_pop).toFixed(4));
                }
                if (response[0].human_per_capita != "" && response[0].human_per_capita != null) {
                    $('#human_per_capita').text(parseFloat(response[0].human_per_capita).toFixed(4));
                }
                if (response[0].human_pro_water_req != "" && response[0].human_pro_water_req != null) {
                    $('#human_pro_water_req').text(parseFloat(response[0].human_pro_water_req).toFixed(4));
                }
                if (response[0].live_p_pop != "" && response[0].live_p_pop != null) {
                    $('#live_p_pop').text(parseFloat(response[0].live_p_pop).toFixed(4));
                }
                if (response[0].live_a_pop != "" && response[0].live_a_pop != null) {
                    $('#live_a_pop').text(parseFloat(response[0].live_a_pop).toFixed(4));
                }
                if (response[0].live_no_of_year != "" && response[0].live_no_of_year != null) {
                    $('#live_no_of_year').text(parseFloat(response[0].live_no_of_year).toFixed(4));
                }
                if (response[0].live_pro_pop != "" && response[0].live_pro_pop != null) {
                    $('#live_pro_pop').text(parseFloat(response[0].live_pro_pop).toFixed(4));
                }
                if (response[0].live_pre_capita != "" && response[0].live_pre_capita != null) {
                    $('#live_pre_capita').text(parseFloat(response[0].live_pre_capita).toFixed(4));
                }
                if (response[0].live_pro_water_req != "" && response[0].live_pro_water_req != null) {
                    $('#live_pro_water_req').text(parseFloat(response[0].live_pro_water_req).toFixed(4));

                }

                if (response[0].total_pro_water_req != "" && response[0].total_pro_water_req != null) {
                    $('#total_pro_water_req').text(parseFloat(response[0].total_pro_water_req).toFixed(4));

                }
                if (response[0].proposed_share_gw != "" && response[0].proposed_share_gw != null) {
                    $('#proposed_share_gw').text(parseFloat(response[0].proposed_share_gw).toFixed(4));
                }
                if (response[0].proposed_share_sw != "" && response[0].proposed_share_sw != null) {
                    $('#proposed_share_sw').text(parseFloat(response[0].proposed_share_sw).toFixed(4));

                }

                if (response[0].demand_gw != "" && response[0].demand_gw != null) {
                    $('#demand_gw').text(parseFloat(response[0].demand_gw).toFixed(4));
                    demand_gw = parseFloat(response[0].demand_gw).toFixed(4);
                }
                if (response[0].demand_sw != "" && response[0].demand_sw != null) {
                    $('#demand_sw').text(parseFloat(response[0].demand_sw).toFixed(4));
                    demand_sw = parseFloat(response[0].demand_sw).toFixed(4);
                }
                if (response[0].surface_water != "" && response[0].surface_water != null) {
                    $('#surface_water').text(parseFloat(response[0].surface_water).toFixed(4));
                    surface_water = parseFloat(response[0].surface_water);

                }
                if (response[0].total_wt_available != "" && response[0].total_wt_available != null) {
                    $('#total_water').text(parseFloat(response[0].total_wt_available).toFixed(4));
                    total_water = parseFloat(response[0].total_wt_available);

                }

                if (response[0].ground_water != "" && response[0].ground_water != null) {
                    $('#ground_water').text(parseFloat(response[0].ground_water).toFixed(4));
                    ground_water = parseFloat(response[0].ground_water);
                }
                Ground_Water.push(parseFloat(demand_gw));
                Ground_Water.push(parseFloat(demand_sw));

                Surface_Water.push(parseFloat(ground_water));
                Surface_Water.push(parseFloat(surface_water));

                BudgetCharts();

            }
            //WaterUtilizationDetails();

        }

    });

}




//DemandSide and Suppaly side Reports
var AR_Kharif = 0, AR_Rabi = 0, AR_Annual = 0;
var WC_Kharif = 0, WC_Rabi = 0, WC_Annual = 0;
var AOI_Kharif = 0, AOI_Rabi = 0, AOI_Annual = 0;
var KharifArray = [];
var RabiArray = [];
var AOIArray = [];
var DemandSide_KharifArray = [];
var DemandSide_RabiArray = [];
var DemandSide_SummerArray = [];

function AR_StructureInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/AR_Structure_Details1',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var AR_cost = 0;
            var AR_Type = "";
            if (data.length != 0) {

                var ar_total = 0;

                for (var i = 0; i < data.length; i++) {

                    if (data[i].ar_approx_estimated_cost != null && data[i].ar_approx_estimated_cost != "") {
                        AR_cost += parseFloat(data[i].ar_approx_estimated_cost);
                        if (data[i].ar_cost_type != null && data.ar_cost_type != "" && data.ar_cost_type != "null") {
                            AR_Type = data[i].ar_cost_type;
                        }

                    }



                    var zz = data.length - 1;
                    if (data[i].possible_funding_source != "" && data[i].possible_funding_source != null && data[i].possible_funding_source != "null") {
                        if (data[i].possible_funding_source == "Others") {
                            $('#AR_PossibleFundingSource').text(data[i].other_funding_source);
                        }
                        else {
                            $('#AR_PossibleFundingSource').text(data[i].possible_funding_source);
                        }
                    }
                    var ar_k1 = 0;
                    var ar_r1 = 0;
                    if (data[i].gw_recharge_kharif != "" && data[i].gw_recharge_kharif != null) {
                        ar_k1 = parseFloat(data[i].gw_recharge_kharif);
                        AR_Kharif += parseFloat(data[i].gw_recharge_kharif);

                    }
                    if (data[i].gw_recharge_rabi != "" && data[i].gw_recharge_rabi != null) {
                        AR_Rabi += parseFloat(data[i].gw_recharge_rabi);
                        ar_r1 = parseFloat(data[i].gw_recharge_rabi);
                    }

                    AR_Annual += parseFloat(ar_k1) + parseFloat(ar_r1);
                }
                if (AR_cost != 0) {
                    var ss1 = AR_cost.toFixed(4) + " " + AR_Type;
                    $('#ar_approx_cost_type').text(ss1);
                }
                $('#ar_kharif').text(parseFloat(AR_Kharif).toFixed(4));
                $('#ar_rabi').text(parseFloat(AR_Rabi).toFixed(4));
                $('#ar_annual').text(parseFloat(AR_Annual).toFixed(4));
                KharifArray.push(parseFloat(AR_Kharif));
                RabiArray.push(parseFloat(AR_Rabi));
                AOIArray.push(parseFloat(AR_Annual));
            }
            else {
                AR_Kharif = 0;
                AR_Rabi = 0;
                AR_Annual = 0;
                ar_total = AR_Kharif + AR_Rabi + AR_Annual;
                var S1 = parseFloat(ar_total).toFixed(4);
                $('#ar_total').text(S1);
                $('#ar_kharif').text(0);
                $('#ar_rabi').text(0);
                $('#ar_annual').text(0);

                KharifArray.push(0);
                RabiArray.push(0);
                AOIArray.push(0);
            }
            WC_StructureInfo();

        }
    });
}

function WC_StructureInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/WC_Structure_Infoture_Details1',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var WC_cost = 0;
            var WC_Type = "";
            if (data.length != 0) {

                WC_Kharif = 0;
                WC_Rabi = 0;
                WC_Annual = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].wc_approx_estimated_cost != null && data[i].wc_approx_estimated_cost != "") {
                        WC_cost += parseFloat(data[i].wc_approx_estimated_cost);
                        if (data[i].wc_cost_type != null && data[i].wc_cost_type != "" && data[i].wc_cost_type != "null") {
                            WC_Type = data[i].wc_cost_type;
                        }


                    }



                    var wc_total = 0;

                    if (data[i].possiable_funding_source != "" && data[i].possiable_funding_source != null && data[i].possiable_funding_source != "null") {
                        if (data[i].possiable_funding_source == "Others") {
                            $('#WC_PossibleFundingSource').text(data[i].other_funding_source);
                        }
                        else {
                            $('#WC_PossibleFundingSource').text(data[i].possiable_funding_source);
                        }
                    }

                    if (data[i].gw_recharge_kharif != "" && data[i].gw_recharge_kharif != null) {
                        WC_Kharif = parseFloat(data[i].gw_recharge_kharif) + parseFloat(WC_Kharif);
                    }

                    if (data[i].gw_recharge_rabi != "" && data[i].gw_recharge_rabi != null) {
                        WC_Rabi = parseFloat(data[i].gw_recharge_rabi) + parseFloat(WC_Rabi);
                    }

                    if (data[i].gw_recharge_annual != "" && data[i].gw_recharge_annual != null) {
                        WC_Annual = parseFloat(data[i].gw_recharge_annual) + parseFloat(WC_Annual);
                    }
                }
                if (WC_cost != 0) {
                    var ss1 = WC_cost.toFixed(4) + "  " + WC_Type;
                    $('#wc_approx_cost_type').text(ss1);

                }
                wc_total = WC_Kharif + WC_Rabi + WC_Annual;
                var S1 = parseFloat(wc_total).toFixed(4);
                $('#wc_total').text(S1);
                $('#wc_kharif').text(WC_Kharif.toFixed(4));
                $('#wc_rabi').text(WC_Rabi.toFixed(4));
                $('#wc_annual').text(WC_Annual.toFixed(4));
                KharifArray.push(parseFloat(WC_Kharif));
                RabiArray.push(parseFloat(WC_Rabi));
                AOIArray.push(parseFloat(WC_Annual));

            }
            else {
                WC_Kharif = 0;
                WC_Rabi = 0;
                WC_Annual = 0;
                wc_total = WC_Kharif + WC_Rabi + WC_Annual;
                var S1 = parseFloat(wc_total).toFixed(4);
                $('#wc_total').text(S1);
                $('#wc_kharif').text(0);
                $('#wc_rabi').text(0);
                $('#wc_annual').text(0);
                KharifArray.push(0);
                RabiArray.push(0);
                AOIArray.push(0);
            }
            other_Intervention_Details();
        }
    });
}


function other_Intervention_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/other_Intervention_Details1',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var AOI_cost = 0;
            var AOI_Type = "";
            if (data.length != 0) {
                var any_total = 0;

                for (var i = 0; i < data.length; i++) {
                    if (data[i].anyother_approx_estimated_cost != null && data[i].anyother_approx_estimated_cost != "") {
                        AOI_cost += parseFloat(data[i].anyother_approx_estimated_cost);
                        if (data[i].anyother_cost_type != null && data[i].anyother_cost_type != "" && data[i].anyother_cost_type != "null") {
                            AOI_Type = data[i].anyother_cost_type;
                        }


                    }


                    if (data[i].possible_funding_source != "" && data[i].possible_funding_source != null && data[i].possible_funding_source != "null") {
                        if (data[i].possible_funding_source == "Others") {
                            $('#Other_PossibleFundingSource').text(data[i].other_funding_source);
                        }
                        else {
                            $('#Other_PossibleFundingSource').text(data[i].possible_funding_source);
                        }

                    }

                    var aoi_r1 = 0;
                    var aoi_k1 = 0;

                    if (data[i].gw_recharge_kharif != "" && data[i].gw_recharge_kharif != null) {
                        AOI_Kharif += parseFloat(data[i].gw_recharge_kharif);
                        aoi_k1 = parseFloat(data[i].gw_recharge_kharif);
                    }

                    if (data[i].gw_recharge_rabi != "" && data[i].gw_recharge_rabi != null) {
                        AOI_Rabi += parseFloat(data[i].gw_recharge_rabi);
                        aoi_r1 = parseFloat(data[i].gw_recharge_rabi);
                    }

                    AOI_Annual += parseFloat(aoi_k1) + parseFloat(aoi_r1);



                }

                if (AOI_cost != 0) {
                    var ss1 = AOI_cost.toFixed(4) + " " + AOI_Type;
                    $('#aoi_approx_cost_type').text(ss1);
                }
                $('#aoi_kharif').text(parseFloat(AOI_Kharif).toFixed(4));
                $('#aoi_rabi').text(parseFloat(AOI_Rabi).toFixed(4));
                $('#aoi_annual').text(parseFloat(AOI_Annual).toFixed(4));

                KharifArray.push(parseFloat(AOI_Kharif));
                RabiArray.push(parseFloat(AOI_Rabi));
                AOIArray.push(parseFloat(AOI_Annual));
                any_total = AOI_Kharif + AOI_Rabi + AOI_Annual;
                var S1 = parseFloat(any_total).toFixed(4);
                $('#any_total').text(S1);
            }
            else {
                $('#aoi_kharif').text(0);
                $('#aoi_rabi').text(0);
                $('#aoi_annual').text(0);

                AOI_Kharif = 0;
                AOI_Rabi = 0;
                AOI_Annual = 0;
                KharifArray.push(0);
                RabiArray.push(0);
                AOIArray.push(0);
                any_total = AOI_Kharif + AOI_Rabi + AOI_Annual;
                var S1 = parseFloat(any_total).toFixed(4);
                $('#any_total').text(S1);
            }
            Supply_SideReport();
            supply_side_approx_cost_total_fn();
        }
    });
}
function supply_side_approx_cost_total_fn() {
    var ar_approx_cost_val = $('#ar_approx_cost_type').text()
    var wc_approx_cost_val = $('#wc_approx_cost_type').text()
    var aoi_approx_cost_val = $('#aoi_approx_cost_type').text()
    if (ar_approx_cost_val != "" && ar_approx_cost_val != null) {

    } else {
        ar_approx_cost_val = "0";
    }
    if (wc_approx_cost_val != "" && wc_approx_cost_val != null) {

    } else {
        wc_approx_cost_val = "0";
    }
    if (aoi_approx_cost_val != "" && aoi_approx_cost_val != null) {

    } else {
        aoi_approx_cost_val = "0";
    }
    var supply_side_approx_cost_total = parseFloat(ar_approx_cost_val) + parseFloat(wc_approx_cost_val) + parseFloat(aoi_approx_cost_val);
    if (supply_side_approx_cost_total != 0) {
        var SSS = supply_side_approx_cost_total.toFixed(4) + " Lakhs";
        $('#supply_side_approx_cost_total').text(SSS);
    } else {
        $('#supply_side_approx_cost_total').text(supply_side_approx_cost_total);
    }
}

function report_declaration_details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',

        url: '/WspNew/report_declaration_details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {
                if (response[0].gpname != null && response[0].gpname != "") {
                    $('#gpname').text(response[0].gpname);
                }
                if (response[0].block_area != null && response[0].block_area != "") {
                    $('#block_area1').text(response[0].block_area);
                }
                if (response[0].gp_area != null && response[0].gp_area != "") {
                    $('#gp_area1').text(response[0].gp_area);
                }
                if (response[0].annual_rainfall != null && response[0].annual_rainfall != "") {
                    $('#annual_rainfall').text(response[0].annual_rainfall);
                }

                if (response[0].evapo != null && response[0].evapo != "") {
                    $('#evapo').text(response[0].evapo);
                }
                if (response[0].surface_water_bodies != null && response[0].surface_water_bodies != "") {
                    $('#surface_water_bodies').text(response[0].surface_water_bodies);
                }

                if (response[0].human_population != null && response[0].human_population != "") {
                    $('#human_population').text(response[0].human_population);
                }

                if (response[0].livestock_population != null && response[0].livestock_population != "") {

                    $('#livestock_population').text(response[0].livestock_population);
                }

                if (response[0].from_surface_water != null && response[0].from_surface_water != "") {

                    $('#from_surface_water').text(response[0].from_surface_water);
                }

                if (response[0].from_ground_water != null && response[0].from_ground_water != "") {

                    $('#from_ground_water').text(response[0].from_ground_water);
                }

                if (response[0].water_req_various_crops != null && response[0].water_req_various_crops != "") {

                    $('#water_req_various_crops').text(response[0].water_req_various_crops);
                }


                else {
                    $('#block_area').text("");
                    $('#gp_area').text("");
                    $('#annual_rainfall').text("");

                    $('#evapo').text("");
                    $('#surface_water_bodies').text("");
                    $('#human_population').text("");
                    $('#livestock_population').text("");

                    $('#from_surface_water').text("");
                    $('#from_ground_water').text("");
                    $('#water_req_various_crops').text("");
                }





            }
        }
    });

}



function Get_dpmu_declaration() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/DpmuDeclaration/Get_dpmu_declaration',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            $("#pdf_container").empty();
            if (data == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            if (data[0] != null && data[0] != 0 && data[0] != "") {
                var url = data[0].dpmu_declaration;
                LoadPdfFromUrl_dpmu(url);
            }
        }
    });
}

function WaterLevelWSP() {
    $('.loader').show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_23_24_updation/GetMisWaterLevelWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            $('.loader').hide();
            var Tbodyhtml = '';
            var j = 0;
            var Tr_h = 0;
            var div_ch = 0;
            var wl1 = false;
            var wl2 = false;
            var wl3 = false;
            var wl4 = false;
            var wl5 = false;
            var wl6 = false;
            var wl7 = false;
            var wl8 = false;
            var wl9 = false;
            var wl10 = false;
            var wl11 = false;
            var wl12 = false;
            var wl13 = false;
            var wl14 = false;
            var wl15 = false;
            var wl16 = false;
            var wl17 = false;
            var wl18 = false;
            var wl19 = false;
            var wl20 = false;
            var wl20 = false;
            var wl21 = false;
            var wl22 = false;
            var wl23 = false;
            var wl24 = false;
            var wl25 = false;
            var wl26 = false;
            var wl27 = false;
            var wl28 = false;
            var wl29 = false;
            var wl30 = false;
            var wl31 = false;
            var wl32 = false;
            var default_div_block = 0;
            var height = 550;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterLevel').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {
                    $('.loader').hide();
                    //Default block 
                    var default_div = "WaterLevel";
                    if (default_div_block == 0) {
                        var dfd_block = default_div;
                    } else {
                        var dfd_block = default_div + default_div_block;
                    }
                    if ($('#' + dfd_block).height() > height) {
                        //activate new active block 
                        if (default_div_block == 0) {
                            height = 600;
                            default_div_block = 1;
                            var wl1 = true;
                            Tbodyhtml = "";
                        } else {
                            default_div_block += 1;
                            Tbodyhtml = "";
                            if (default_div_block == 1) {
                                var wl1 = true;
                            } else if (default_div_block == 2) {
                                var wl2 = true;
                            } else if (default_div_block == 3) {
                                var wl3 = true;
                            } else if (default_div_block == 4) {
                                var wl4 = true;
                            } else if (default_div_block == 5) {
                                var wl5 = true;
                            } else if (default_div_block == 6) {
                                var wl6 = true;
                            } else if (default_div_block == 7) {
                                var wl7 = true;
                            } else if (default_div_block == 8) {
                                var wl8 = true;
                            } else if (default_div_block == 9) {
                                var wl9 = true;
                            } else if (default_div_block == 10) {
                                var wl10 = true;
                            } else if (default_div_block == 11) {
                                var wl11 = true;
                            } else if (default_div_block == 12) {
                                var wl12 = true;
                            } else if (default_div_block == 13) {
                                var wl13 = true;
                            } else if (default_div_block == 14) {
                                var wl14 = true;
                            } else if (default_div_block == 15) {
                                var wl15 = true;
                            } else if (default_div_block == 16) {
                                var wl16 = true;
                            } else if (default_div_block == 17) {
                                var wl17 = true;
                            } else if (default_div_block == 18) {
                                var wl18 = true;
                            } else if (default_div_block == 19) {
                                var wl19 = true;
                            } else if (default_div_block == 20) {
                                var wl20 = true;
                            } else if (default_div_block == 21) {
                                var wl21 = true;
                            } else if (default_div_block == 22) {
                                var wl22 = true;
                            } else if (default_div_block == 23) {
                                var wl23 = true;
                            } else if (default_div_block == 24) {
                                var wl24 = true;
                            } else if (default_div_block == 25) {
                                var wl25 = true;
                            } else if (default_div_block == 26) {
                                var wl26 = true;
                            } else if (default_div_block == 27) {
                                var wl27 = true;
                            } else if (default_div_block == 28) {
                                var wl28 = true;
                            } else if (default_div_block == 29) {
                                var wl29 = true;
                            } else if (default_div_block == 30) {
                                var wl30 = true;
                            } else if (default_div_block == 31) {
                                var wl31 = true;
                            } else if (default_div_block == 32) {
                                var wl32 = true;
                            }
                        }

                        dfd_block = default_div + default_div_block;

                        $('#' + dfd_block).html(Tbodyhtml);
                        $("#wl" + default_div_block).css("display", "block");
                        $("#waterpagetbl_wl" + default_div_block).css("display", "block");
                    } //end if 

                    var sno = data[i].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml += '<tr class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml += '<td id="vill">' + data[i].sitename + '</td>';
                    Tbodyhtml += '<td id="location">' + data[i].locationdetails + '</td>';
                    Tbodyhtml += '<td id="latitude">' + data[i].latitude + '</td>';
                    Tbodyhtml += '<td id="longtude">' + data[i].longitude + '</td>';
                    Tbodyhtml += '<td id="date" style="width: 126px;">' + data[i].datetime.substring(0, 10) + '</td>';
                    Tbodyhtml += '<td id="Wellid">' + data[i].wellid.substring(data[i].wellid.length - 10) + '</td>';
                    Tbodyhtml += '<td id="typeofwell">' + data[i].typeofwell + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].other_well_type + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].source_Ownership + '</td>';
                    Tbodyhtml += '<td id="email">' + data[i].source_Ownership_type + '</td>';
                    Tbodyhtml += '<td id="PreMonsoon2019">' + data[i].Diameter_of_Well + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].welldepth + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].Height_of_Measuring_Point + '</td>';
                    Tbodyhtml += '<td id="date">' + data[i].gwl_reading + '</td>';
                    Tbodyhtml += '<td id="date" class="date_break">' + data[i].gwl_date + '</td></tr>';
                    $('#' + dfd_block).html(Tbodyhtml);

                }
                if (wl1 == false) {
                    $("#wl1").remove();
                    $("#waterpagetbl_wl1").remove();
                }
                if (wl2 == false) {
                    $("#wl2").remove();
                    $("#waterpagetbl_wl2").remove();
                }
                if (wl3 == false) {
                    $("#wl3").remove();
                    $("#waterpagetbl_wl3").remove();
                }
                if (wl4 == false) {
                    $("#wl4").remove();
                    $("#waterpagetbl_wl4").remove();
                }
                if (wl5 == false) {
                    $("#wl5").remove();
                    $("#waterpagetbl_wl5").remove();
                }
                if (wl6 == false) {
                    $("#wl6").remove();
                    $("#waterpagetbl_wl6").remove();
                }
                if (wl7 == false) {
                    $("#wl7").remove();
                    $("#waterpagetbl_wl7").remove();
                }
                if (wl7 == false) {
                    $("#wl7").remove();
                    $("#waterpagetbl_wl5").remove();
                }
                if (wl8 == false) {
                    $("#wl8").remove();
                    $("#waterpagetbl_wl8").remove();
                }
                if (wl9 == false) {
                    $("#wl9").remove();
                    $("#waterpagetbl_wl9").remove();
                }
                if (wl10 == false) {
                    $("#wl10").remove();
                    $("#waterpagetbl_wl10").remove();
                }
                if (wl11 == false) {
                    $("#wl11").remove();
                    $("#waterpagetbl_wl11").remove();
                }
                if (wl12 == false) {
                    $("#wl12").remove();
                    $("#waterpagetbl_wl12").remove();
                }
                if (wl13 == false) {
                    $("#wl13").remove();
                    $("#waterpagetbl_wl13").remove();
                }
                if (wl14 == false) {
                    $("#wl14").remove();
                    $("#waterpagetbl_wl14").remove();
                }
                if (wl15 == false) {
                    $("#wl15").remove();
                    $("#waterpagetbl_wl15").remove();
                }
                if (wl16 == false) {
                    $("#wl16").remove();
                    $("#waterpagetbl_wl16").remove();
                }
                if (wl17 == false) {
                    $("#wl17").remove();
                    $("#waterpagetbl_wl17").remove();
                }
                if (wl18 == false) {
                    $("#wl18").remove();
                    $("#waterpagetbl_wl18").remove();
                }
                if (wl19 == false) {
                    $("#wl19").remove();
                    $("#waterpagetbl_wl19").remove();
                }
                if (wl20 == false) {
                    $("#wl20").remove();
                    $("#waterpagetbl_wl20").remove();
                }
                if (wl21 == false) {
                    $("#wl21").remove();
                    $("#waterpagetbl_wl21").remove();
                }
                if (wl22 == false) {
                    $("#wl22").remove();
                    $("#waterpagetbl_wl22").remove();
                }
                if (wl23 == false) {
                    $("#wl23").remove();
                    $("#waterpagetbl_wl23").remove();
                }
                if (wl24 == false) {
                    $("#wl24").remove();
                    $("#waterpagetbl_wl24").remove();
                }
                if (wl25 == false) {
                    $("#wl25").remove();
                    $("#waterpagetbl_wl25").remove();
                }
                if (wl26 == false) {
                    $("#wl26").remove();
                    $("#waterpagetbl_wl26").remove();
                }
                if (wl27 == false) {
                    $("#wl27").remove();
                    $("#waterpagetbl_wl27").remove();
                }
                if (wl28 == false) {
                    $("#wl28").remove();
                    $("#waterpagetbl_wl28").remove();
                }
                if (wl29 == false) {
                    $("#wl29").remove();
                    $("#waterpagetbl_wl29").remove();
                }
                if (wl30 == false) {
                    $("#wl30").remove();
                    $("#waterpagetbl_wl30").remove();
                }
                if (wl31 == false) {
                    $("#wl31").remove();
                    $("#waterpagetbl_wl31").remove();
                }
                if (wl32 == false) {
                    $("#wl32").remove();
                    $("#waterpagetbl_wl32").remove();
                }
            }
            WaterQualityWSP();
        }
    });
}


function WaterQualityWSP() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        //url: '/WSP_23_24_updation/WaterQualityWSP',
        url: '/WSP_23_24_updation/GetMISWaterQualityWSP',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            var Tbodyhtml = '';
            var Tbodyhtml1 = '';
            var wqm1 = false;
            var wqm2 = false;
            var wqm3 = false;
            var wqd1 = false;
            var wqd2 = false;
            var wqd3 = false;
            var default_div_block = 0;
            var default_div_block1 = 0;
            var height = 550;
            var j = 0;
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="16"><td colspan="16" style="text-align: center;">No Data</td></tr>';
                $('#WaterQualityMeta').html(Tbodyhtml);
                $('#WaterQualityData').html(Tbodyhtml);
                $('.loader').hide();
            } else {
                for (var i = 0; i < data.length; i++) {
                    var default_div = "WaterQualityMeta";
                    if (default_div_block == 0) {
                        var dfd_block = default_div;
                    } else {
                        var dfd_block = default_div + default_div_block;
                    }
                    if ($('#' + dfd_block).height() > height) {
                        //activate new active block 
                        if (default_div_block == 0) {
                            default_div_block = 1;
                            height = 600;
                            var wqm1 = true;
                            Tbodyhtml = "";
                        } else {
                            default_div_block += 1;
                            Tbodyhtml = "";
                            if (default_div_block == 1) {
                                var wqm1 = true;
                            } else if (default_div_block == 2) {
                                var wqm2 = true;
                            } else if (default_div_block == 3) {
                                var wqm3 = true;
                            }
                        }

                        dfd_block = default_div + default_div_block;

                        $('#' + dfd_block).html(Tbodyhtml);
                        $("#wqm" + default_div_block).css("display", "block");
                        $("#waterpagetbl_wqm" + default_div_block).css("display", "block");
                    } //end if 



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
                    Tbodyhtml += '<td id="location" style="text-align: left;">' + data[i].Well_ID + '</td></tr>';
                    $('#' + dfd_block).html(Tbodyhtml);
                }


                for (var j = 0; j < data.length; j++) {

                    var default_div = "WaterQualityData";
                    if (default_div_block1 == 0) {
                        var dfd_block = default_div;
                    } else {
                        var dfd_block = default_div + default_div_block1;
                    }
                    if ($('#' + dfd_block).height() > 600) {
                        //activate new active block 
                        if (default_div_block1 == 0) {
                            default_div_block1 = 1;
                            var wqd1 = true;
                            Tbodyhtml1 = "";
                        } else {
                            default_div_block1 += 1;
                            Tbodyhtml1 = "";
                            if (default_div_block1 == 1) {
                                var wqd1 = true;
                            } else if (default_div_block1 == 2) {
                                var wqd2 = true;
                            } else if (default_div_block1 == 3) {
                                var wqd3 = true;
                            }
                        }

                        dfd_block = default_div + default_div_block1;

                        $('#' + dfd_block).html(Tbodyhtml1);
                        $("#wqd" + default_div_block).css("display", "block");
                        $("#waterpagetbl_wqd" + default_div_block).css("display", "block");
                    } //end if 



                    var sno = data[j].sno;
                    if (sno == 0) {
                        sno = "";
                    }
                    Tbodyhtml1 += '<class="gram_water_level_table"><td id="srNo">' + sno + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Well_ID + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Well_Depth + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Aquifer + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].pH + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].EC + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].TDS + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].TH + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Calcium + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Magnesium + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Sodium + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Potassium + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Carbonate + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Bicarbonate + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Sulphate + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Chloride + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Fluoride + '</td>';
                    Tbodyhtml1 += '<td id="location">' + data[j].Nitrate + '</td></tr>';
                    $('#' + dfd_block).html(Tbodyhtml1);

                }

            }
            if (wqm1 == false) {
                $("#wqm1").remove();
                $("#waterpagetbl_wqm1").remove();
            }
            if (wqm2 == false) {
                $("#wqm2").remove();
                $("#waterpagetbl_wqm2").remove();
            }
            if (wqm3 == false) {
                $("#wqm3").remove();
                $("#waterpagetbl_wqm3").remove();
            }
            if (wqd1 == false) {
                $("#wqd1").remove();
                $("#waterpagetbl_wqd1").remove();
            }
            if (wqd2 == false) {
                $("#wqd2").remove();
                $("#waterpagetbl_wqd2").remove();
            }
            if (wqd3 == false) {
                $("#wqd3").remove();
                $("#waterpagetbl_wqd3").remove();
            }
            Get_Image_WaterLevel()
        }
    });
}

// PDF generate js start
function ReportPdf() {
    // Get the div element
    $(".loader").show();
    $("#Data1").width(1100);
    $("tr:nth-child(5n)").css("page-break-after", "always");
    $("thead").css("display", "table-header-group");
    var element = document.getElementById('Data1');
    var w = screen.width;
    var h = screen.height;
    var opt = {
        filename: 'WaterSecurityPlan.pdf',
        image: { type: 'jpeg', quality: 1.0, w, h },
        html2canvas: { dpi: 96, letterRendering: true },
        pagebreak: { avoid: '#container_Water_Availability, avoid-all', after: '.page2el, #page_break' },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).toPdf().save();
    $(".loader").hide();
    $("#Data1").width();
    $('#Data1').addClass('background_after_download');
    $('#Data1').addClass('table-condensed');
    $('div.image_space_gap31').addClass('image_space_gap_3');
    $(".highcharts-credits").css("display", "none");
    $('div#btnExport').addClass('hideDownload');
    $('div#wsp_approved').addClass('hideDownload');
    $('div#remarks_div').addClass('hideDownload');

    $('div#btnExport1').addClass('hideDownload');

    setTimeout(function () {
        $('#Data1').removeClass('background_after_download');
        $('div.image_space_gap_31').removeClass('image_space_gap_3');
        $('div#btnExport').removeClass('hideDownload');
        $('div#wsp_approved').removeClass('hideDownload');
        $('div#remarks_div').removeClass('hideDownload');
        $('div#btnExport1').removeClass('hideDownload');
    }, 2000);
}


// PDF generate js end

