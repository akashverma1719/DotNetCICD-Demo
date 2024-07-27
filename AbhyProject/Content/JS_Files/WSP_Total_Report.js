
$(document).ready(function () {
    $(".loader").show();
    $('#wsp_approved_dpmu').hide();
    $('#wsp_reject_status').hide();
    $('#wsp_approved_state').hide();
    $('#wsp_approved_spmu').hide();
    sarpanch_getting();
    get_approved_status();

    //Get_dpmu_declaration();

    //get_gp_block_area();
    GetGParea();
    //MapImages();
    WaterBalance_Info();


    //DemandSideDetails();
    //Social_Monitor_Details2();
    //report_declaration_details();

});


//function get_approved_status() {
//    $(".loader").show();
//    $.ajax({
//        type: 'POST',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/WaterSecurityPlan/get_approved_status",
//        dataType: 'JSON',
//        success: function (data) {
//            
//            $("#declaration_div").hide();
//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";
//            }
//            else if (data == "null") {
//                if (StateOfficer == "Gram Panchyat Nodal Officer") {
//                    $('#wsp_approved_dpmu').show();
//                    $('#remark_div').hide();
//                }
//            }

//            if (StateOfficer == "National Level Nodal Officer" || StateOfficer == "Admin" || StateOfficer == "Block Level Nodal Officer") {
//                $('#wsp_approved_dpmu').hide();
//                $('#wsp_reject_status').hide();
//                $('#wsp_approved_state').hide();
//                $('#wsp_approved_spmu').hide();
//            }
//            else if (StateOfficer == "District Level Nodal Officer") {

//                if (data >= 3) {
//                    $('#wsp_approved_dpmu').hide();
//                    $('#wsp_approved_spmu').show();
//                    $('#wsp_reject_status').show();
//                    $("#declaration_div").show();
//                }

//            }
//            else if (StateOfficer == "Gram Panchyat Nodal Officer") {
//                $('#remark_div').hide();
//                if (data == 1) {
//                    $('#wsp_approved_dpmu').show();
//                    $('#remark_div').hide();
//                    $("#declaration_div").hide();
//                }
//            } else if (StateOfficer == "State Level Nodal Officer") {
//                if (data == 4) {
//                    $('#wsp_reject_status').show();
//                    $('#wsp_approved_state').show();
//                    $("#declaration_div").show();

//                }
//            }
//            if (data >= 3) {
//                $("#declaration_div").show();
//            }

//            GramPanchayatDetails();

//        }
//    });
//}
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
        url: '/WaterSecurityPlan/GrampanchayatDetails',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Error") {
                window.location = "/WaterSecurityPlan/WSpGramreport";
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
        url: '/WaterSecurityPlan/Get_gp_block_area',
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
        url: '/WaterSecurityPlan/MapImagesdetails1',
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

                    div1 = '<a href="' + data[i].gpimage1 + '"><img src="' + data[i].gpimage1 + '"style="width:100%;height:700px;" /></a>'
                    div2 = '<a href="' + data[i].gpimage2 + '"><img src="' + data[i].gpimage2 + '"style="width:100%;height:700px;" /></a>'
                    div3 = '<a href="' + data[i].gpimage3 + '"><img src="' + data[i].gpimage3 + '"style="width:100%;height:700px;" /></a>'
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
        url: '/WaterSecurityPlan/Social_Monitor_Details_website',
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
        url: '/WaterSecurityPlan/MapImagesdetails',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            //if (data == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}
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
        url: '/WaterSecurityPlan/pgwn_Depdetails',
        data: { 'state': State_name, 'dist': District_name, 'block': Block, 'gram': Gname, 'vill': Villname },
        dataType: 'JSON',
        success: function (data) {
            //if (data == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}
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
        url: '/Pgwm/Getting_abhy_wsp_pgwm_committee_member',
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
        url: '/Pgwm/Getting_abhy_wsp_pgwm_committee_meeting',
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

                    tr2 += '<tr><td><label><a href="' + meeting_image + '"><img src="' + meeting_image + '"style="width:100%;height:700px;"/></a></label></td></tr>';

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
        url: '/WaterSecurityPlan/GrampanchayatDetails',
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
            //if (data == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (data.length != 0) {


                $('#gp_id').text(data[0].gp_id);
                if (data[0].block_area != null) {
                    $('#block_area').text(parseFloat(data[0].block_area).toFixed(2));
                }
                if (data[0].gp_area != null) {
                    $('#gp_area').text(parseFloat(data[0].gp_area).toFixed(2));
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
        url: '/WaterSecurityPlan/Water_Domestic_Details',
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
        url: '/WaterSecurityPlan/Get_gp_area',
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
        url: '/WaterSecurityPlan/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            //if (response == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}
            setTimeout(function () {
                $('.loader').hide();
            }, 20000);

            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                if (response[0].annual_rainfall != null && response[0].annual_rainfall != "") {

                    $('#sw_annual_rainfall').text(parseFloat(response[0].annual_rainfall).toFixed(2));
                }

                if (response[0].est_vol_rainfall != null && response[0].est_vol_rainfall != "") {

                    $('#sw_tol_water_avail').text(parseFloat(response[0].est_vol_rainfall).toFixed(2));
                }

                if (response[0].evapo_rate != null && response[0].evapo_rate != "") {

                    $('#sw_evapo').text(parseFloat(response[0].evapo_rate).toFixed(2));
                }

                if (response[0].est_evapo_loss != null && response[0].est_evapo_loss != "") {

                    $('#sw_evapo_loses').text(parseFloat(response[0].est_evapo_loss).toFixed(2));
                }
                if (response[0].est_water_rain != null && response[0].est_water_rain != "") {

                    $('#estimated_wa_from_rainfall').text(parseFloat(response[0].est_water_rain).toFixed(2));
                }
                if (response[0].weigh_run_conf != null && response[0].weigh_run_conf != "") {

                    $('#weighted_average_runoff').text(parseFloat(response[0].weigh_run_conf).toFixed(2));
                }
                if (response[0].rain_runoff != null && response[0].rain_runoff != "") {

                    $('#rainfall_runoff').text(parseFloat(response[0].rain_runoff).toFixed(2));
                }
                if (response[0].rech_monsoon != null && response[0].rech_monsoon != "") {

                    $('#gw_rainfall_monsoon').text(parseFloat(response[0].rech_monsoon).toFixed(2));
                }
                if (response[0].rech_nonmonsoon != null && response[0].rech_nonmonsoon != "") {

                    $('#gw_rainfall_nonmonsoon').text(parseFloat(response[0].rech_nonmonsoon).toFixed(2));
                }
                if (response[0].tot_grd_rech_rain != null && response[0].tot_grd_rech_rain != "") {
                    Total_Water_Available = parseFloat(response[0].tot_grd_rech_rain);
                    $('#gw_rainfal_tol_recharge').text(parseFloat(response[0].tot_grd_rech_rain).toFixed(2));
                    $('#total_rainfall').text(parseFloat(response[0].tot_grd_rech_rain).toFixed(2));
                }
                if (response[0].ground_monsoon != null && response[0].ground_monsoon != "") {

                    $('#gw_other_monsoon').text(parseFloat(response[0].ground_monsoon).toFixed(2));
                }
                if (response[0].ground_nonmonsoon != null && response[0].ground_nonmonsoon != "") {

                    $('#gw_other_nonmonsoon').text(parseFloat(response[0].ground_nonmonsoon).toFixed(2));
                }
                if (response[0].tot_grd_rech_oth != null && response[0].tot_grd_rech_oth != "") {
                    gw_other_tol_recharge = parseFloat(response[0].tot_grd_rech_oth);
                    $('#gw_other_tol_recharge').text(parseFloat(response[0].tot_grd_rech_oth).toFixed(2));
                    $('#total_source').text(parseFloat(response[0].tot_grd_rech_oth).toFixed(2));
                }
                if (response[0].loss_nature != null && response[0].loss_nature != "") {

                    $('#natural_losses').text(parseFloat(response[0].loss_nature).toFixed(2));
                }

                if (response[0].tot_grd_wat_avail != null && response[0].tot_grd_wat_avail != "") {
                    total_gw_available = parseFloat(response[0].tot_grd_wat_avail);
                    $('#total_gw_available').text(parseFloat(response[0].tot_grd_wat_avail).toFixed(2));
                    $('#total_water_avialable').text(parseFloat(response[0].tot_grd_wat_avail).toFixed(2));
                }
                if (response[0].ground_water_with != null && response[0].ground_water_with != "") {

                    $('#ground_water_withdrawal').text(parseFloat(response[0].ground_water_with).toFixed(2));
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
                    $('#total_storage_capacity').text(parseFloat(response[0].total_surface_body).toFixed(2));
                    $('#total_storage_capacity_graph').text(parseFloat(response[0].total_surface_body).toFixed(2));
                }
                if (response[0].loss_if != null && response[0].loss_if != "") {

                    $('#loss_percentage').text(parseFloat(response[0].loss_if).toFixed(2));
                }
                if (response[0].surface_water_avail != null && response[0].surface_water_avail != "") {

                    $('#surface_water_available_store').text(parseFloat(response[0].surface_water_avail).toFixed(2));
                }
                if (response[0].trans_water_out != null && response[0].trans_water_out != "") {

                    $('#transport_water_from_outside').text(parseFloat(response[0].trans_water_out).toFixed(2));
                }
                if (response[0].total_sirface_water != null && response[0].total_sirface_water != "") {
                    total_surface_water_available = parseFloat(response[0].total_sirface_water);
                    $('#total_surface_water_available').text(parseFloat(response[0].total_sirface_water).toFixed(2));
                    $('#total_storage_capacity_graph').text(parseFloat(response[0].total_surface_body).toFixed(2));
                }
                if (response[0].total_avail_water != null && response[0].total_avail_water != "") {
                    total_water_available = parseFloat(response[0].total_avail_water);
                    $('#total_water_available').text(parseFloat(response[0].total_avail_water).toFixed(2));
                    $('#total_available').text(parseFloat(response[0].total_avail_water).toFixed(2));


                }
            }

            WaterAvailabiltyChart();


        }
    });

}

var Domestic_Total = 0, domestic_demand_surface_water = 0, domestic_demand_ground_water = 0;
var Irrigated_Total = 0, irri_utili_surface_water = 0, irri_utili_ground_water = 0;
var domestic_demand_surface_water = 0, domestic_demand_surface_water_livestock = 0, irri_utili_surface_water = 0, industry_demand_surface_water = 0, other_demand_surface_water = 0;
var domestic_demand_ground_water = 0, domestic_demand_ground_water_livestock = 0, irri_utili_ground_water = 0, industry_demand_ground_water = 0, other_demand_ground_water = 0;


var Irrigation = 0, Industry = 0, Others = 0, Domestic = 0;
var total_utilization = 0;
function WaterUtilizationDetails() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/WaterutilizationInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WaterSecurityPlan/waterAval_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response.length != 0) {



                if (response[0].uti_surface_water != null && response[0].uti_surface_water != "") {
                    $('#irri_utili_surface_water').text(parseFloat(response[0].uti_surface_water).toFixed(2));
                    wb_sw_utilization = parseFloat(response[0].uti_surface_water).toFixed(2);

                }

                if (response[0].uti_ground_water != null && response[0].uti_ground_water != "") {
                    $('#irri_utili_ground_water').text(parseFloat(response[0].uti_ground_water).toFixed(2));
                    wb_gw_utilization = parseFloat(response[0].uti_ground_water).toFixed(2);
                }

                total_utilization = parseFloat(wb_sw_utilization) + parseFloat(wb_gw_utilization);
                $('#Irrigated_Total').text(total_utilization.toFixed(2));

                $('#Irrigated_surfacewater').text(wb_sw_utilization);
                $('#Irrigated_groundwater').text(wb_gw_utilization);

                Irrigation = total_utilization;
            }
        }
    });
    Info12();
}
var total_industry = 0;
function Info12() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterUtilization/Get_industry_ground_surface',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WaterSecurityPlan/waterAval_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response != 0) {
                var result = response.split(",");
                var Ground = result[1];
                var Surface = result[0];

                $('#industry_demand_surface_water').text(parseFloat(Surface).toFixed(2));


                $('#industry_demand_ground_water').text(parseFloat(Ground).toFixed(2));


                total_industry = parseFloat(Ground) + parseFloat(Surface);
                $('#Industry_Total').text(total_industry.toFixed(2));

                Industry = total_industry;


            }
            Info12_2();
        }
    });

}
function Info12_2() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterUtilization/Get_other_ground_surface',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WaterSecurityPlan/waterAval_report";
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

                Others = total_industry;
                get_domestic();


            }
        }
    });

}
var total_other = 0;
function get_domestic() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_domestic_data",
        dataType: 'JSON',
        success: function (response) {
            if (response.length > 0) {
                var surface = (parseFloat(response[0].water_dem_hum) + parseFloat(response[0].water_dem_liv)).toFixed(2)
                var ground = (parseFloat(response[0].water_deman_hum) + parseFloat(response[0].water_deman_liv)).toFixed(2)
                $("#domestic_demand_surface_water").text(surface);
                $("#domestic_demand_ground_water").text(ground);
                $("#Domestic_Total").text((parseFloat(surface) + parseFloat(ground)).toFixed(2));

                Domestic = (parseFloat(surface) + parseFloat(ground));


                $("#avl_surfacewater").text(surface);
                $("#avl_groundwater").text(ground);

                WaterUtilizationDraftChart();
                sarpanch_getting();

            }
        }
    });
}


var Industry_Total = 0, industry_demand_surface_water = 0, industry_demand_ground_water = 0;

var Other_Total = 0, other_demand_ground_water = 0, other_demand_surface_water = 0;


var wb_sw_avia = 0;
var wb_gw_avia = 0;
var total_avia = 0;
function WaterBalance_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/WaterAvailabiltyInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WaterSecurityPlan/waterAval_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (response.length != 0) {

                if (response[0].total_sirface_water != null && response[0].total_sirface_water != "") {
                    $('#wb_sw_avail').text(parseFloat(response[0].total_sirface_water).toFixed(2));
                    wb_sw_avia = parseFloat(response[0].total_sirface_water).toFixed(2);

                }

                if (response[0].tot_grd_wat_avail != null && response[0].tot_grd_wat_avail != "") {
                    $('#wb_gw_avail').text(parseFloat(response[0].tot_grd_wat_avail).toFixed(2));
                    wb_gw_avia = parseFloat(response[0].tot_grd_wat_avail).toFixed(2);
                }

                total_avia = parseFloat(wb_sw_avia) + parseFloat(wb_gw_avia);
                $('#wb_total_avail').text(total_avia.toFixed(2));

                $('#avl_surfacewater').text(wb_sw_avia);
                $('#avl_groundwater').text(wb_gw_avia);

            }
            WaterBalance_Info1();
        }
    });

}

var wb_sw_utilization = 0;
var wb_gw_utilization = 0;
var total_utilization = 0;
var uti_tot = 0;
function WaterBalance_Info1() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterUtilization/WaterutilizationInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Error") {
                window.location = "/WaterSecurityPlan/waterAval_report";
            }
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            if (data.length != 0) {

                //alert(data);
                const response = data.split(',');
                if (response[0] != "" && response[0]) {
                    $('#wb_sw_utili').text(response[0]);
                }
                if (response[1] != "" && response[1]) {
                    $('#wb_gw_utili').text(response[1]);
                }

                $('#wb_total_utili').text((parseFloat(response[0]) + parseFloat(response[1])).toFixed(2));

                uti_tot = (parseFloat(response[0]) + parseFloat(response[1]));


            }

            total();
        }
    });

}
var a = 0;
var b = 0;
var totaldata = 0;
function total() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/total',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "Error") {
                window.location = "/WaterSecurityPlan/waterAval_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response.length != 0) {

                if (response[0].wb_gw_balance != null && response[0].wb_gw_balance != "") {
                    $('#wb_gw_balance').text(parseFloat(response[0].wb_gw_balance).toFixed(2));
                    a = (parseFloat(response[0].wb_gw_balance).toFixed(2));


                }

                if (response[0].wb_sw_balance != null && response[0].wb_sw_balance != "") {
                    $('#wb_sw_balance').text(parseFloat(response[0].wb_sw_balance).toFixed(2));
                    b = (parseFloat(response[0].wb_sw_balance).toFixed(2));

                }

                totaldata = parseFloat(a) + parseFloat(b);
                $('#wb_total_balance').text(totaldata.toFixed(2));




            }

            total1();
        }
    });

}


var total_water_b = 0;
function total1() {

    total_water_b = totaldata;
    BalanceCharts();
    $(".loader").hide();
    //PGDATA();
}





//var Ground_Water = 0, Surface_Water = 0, total_b = 0;
var Ground_Water = [];
var Surface_Water = [];
function WaterBudgetDeatils() {
    $(".loader").show();
    BalanceCharts();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterSecurityPlan/WaterBudgetInfo_Details',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            if (response == "Error") {
                window.location = "/WaterSecurityPlan/WaterBudget_report";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }

            var demand_gw = 0;
            var demand_sw = 0;
            if (response.length != 0) {

                if (response[0].human_p_pop != "" && response[0].human_p_pop != null) {
                    $('#human_p_pop').text(parseFloat(response[0].human_p_pop).toFixed(2));

                }
                if (response[0].human_a_pop != "" && response[0].human_a_pop != null) {
                    $('#human_a_pop').text(parseFloat(response[0].human_a_pop).toFixed(2));
                }
                if (response[0].human_no_of_year != "" && response[0].human_no_of_year != null) {
                    $('#human_no_of_year').text(parseFloat(response[0].human_no_of_year).toFixed(2));
                }

                if (response[0].human_pre_pop != "" && response[0].human_pre_pop != null) {
                    $('#human_pro_pop').text(parseFloat(response[0].human_pre_pop).toFixed(2));
                }
                if (response[0].human_per_capita != "" && response[0].human_per_capita != null) {
                    $('#human_per_capita').text(parseFloat(response[0].human_per_capita).toFixed(2));
                }
                if (response[0].human_pro_water_req != "" && response[0].human_pro_water_req != null) {
                    $('#human_pro_water_req').text(parseFloat(response[0].human_pro_water_req).toFixed(2));
                }
                if (response[0].live_p_pop != "" && response[0].live_p_pop != null) {
                    $('#live_p_pop').text(parseFloat(response[0].live_p_pop).toFixed(2));
                }
                if (response[0].live_a_pop != "" && response[0].live_a_pop != null) {
                    $('#live_a_pop').text(parseFloat(response[0].live_a_pop).toFixed(2));
                }
                if (response[0].live_no_of_year != "" && response[0].live_no_of_year != null) {
                    $('#live_no_of_year').text(parseFloat(response[0].live_no_of_year).toFixed(2));
                }
                if (response[0].live_pro_pop != "" && response[0].live_pro_pop != null) {
                    $('#live_pro_pop').text(parseFloat(response[0].live_pro_pop).toFixed(2));
                }
                if (response[0].live_pre_capita != "" && response[0].live_pre_capita != null) {
                    $('#live_pre_capita').text(parseFloat(response[0].live_pre_capita).toFixed(2));
                }
                if (response[0].live_pro_water_req != "" && response[0].live_pro_water_req != null) {
                    $('#live_pro_water_req').text(parseFloat(response[0].live_pro_water_req).toFixed(2));

                }

                if (response[0].total_pro_water_req != "" && response[0].total_pro_water_req != null) {
                    $('#total_pro_water_req').text(parseFloat(response[0].total_pro_water_req).toFixed(2));

                }
                if (response[0].proposed_share_gw != "" && response[0].proposed_share_gw != null) {
                    $('#proposed_share_gw').text(parseFloat(response[0].proposed_share_gw).toFixed(2));
                }
                if (response[0].proposed_share_sw != "" && response[0].proposed_share_sw != null) {
                    $('#proposed_share_sw').text(parseFloat(response[0].proposed_share_sw).toFixed(2));

                }

                if (response[0].demand_gw != "" && response[0].demand_gw != null) {
                    $('#demand_gw').text(parseFloat(response[0].demand_gw).toFixed(2));
                    demand_gw = parseFloat(response[0].demand_gw).toFixed(2);
                }
                if (response[0].demand_sw != "" && response[0].demand_sw != null) {
                    $('#demand_sw').text(parseFloat(response[0].demand_sw).toFixed(2));
                    demand_sw = parseFloat(response[0].demand_sw).toFixed(2);
                }
                if (response[0].surface_water != "" && response[0].surface_water != null) {
                    $('#surface_water').text(parseFloat(response[0].surface_water).toFixed(2));
                    surface_water = parseFloat(response[0].surface_water);

                }
                if (response[0].total_wt_available != "" && response[0].total_wt_available != null) {
                    $('#total_water').text(parseFloat(response[0].total_wt_available).toFixed(2));
                    total_water = parseFloat(response[0].total_wt_available);

                }

                if (response[0].ground_water != "" && response[0].ground_water != null) {
                    $('#ground_water').text(parseFloat(response[0].ground_water).toFixed(2));
                    ground_water = parseFloat(response[0].ground_water);
                }
                Ground_Water.push(parseFloat(demand_gw));
                Ground_Water.push(parseFloat(demand_sw));

                Surface_Water.push(parseFloat(ground_water));
                Surface_Water.push(parseFloat(surface_water));

                BudgetCharts();

            }
            WaterUtilizationDetails();

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
//function DemandSideDetails() {
//    Sprinkler_Info();
//}



////var Deamand_Side_TotalReduction = 0;
////var DemandSide_Approx_mate_Cost_Total = 0;
////var supply_side_approx_cost_total = 0;

////function Sprinkler_Info() {
////    $.ajax({
////        type: 'GET',
////        contentType: 'application/json; chatset=utf-8',
////        url: '/WSPHome/Sprinkler_Info1',
////        data: '',
////        dataType: 'JSON',
////        success: function (data) {
////            if (data == "Error") {
////                window.location = "/WSPHome/WSPDemansidereports";
////            }
////            if (data == "Logout") {
////                  window.location = "/Home/LogOut";
////            }
////            if (data.length != 0) {

////                if (data.sprinkler_approx_estimated_cost != "" && data.sprinkler_approx_estimated_cost != null) {
////                    //$('#sprinkler_approx_cost').text(data.sprinkler_approx_estimated_cost);
////                    DemandSide_Approx_mate_Cost_Total += parseFloat(data.sprinkler_approx_estimated_cost);
////                    if (data.sprinkler_cost_type != "0" && data.sprinkler_cost_type != "" && data.sprinkler_cost_type != null) {
////                        var ss1 = data.sprinkler_approx_estimated_cost + " " + data.sprinkler_cost_type;
////                        $('#sprinkler_approx_cost_type').text(ss1);
////                    }
////                }



////                var swd_total = 0;
////                var Sprinkeler_Kharif = 0;
////                if (data.sprinkler_kharif_total_sprinkler_waterdemand != null && data.sprinkler_kharif_total_sprinkler_waterdemand != "") {
////                    Sprinkeler_Kharif = parseFloat(data.sprinkler_kharif_total_sprinkler_waterdemand);
////                }


////                var Sprinkeler_Rabi = 0;
////                if (data.sprinkler_rabi_total_rabi_waterdemand != null && data.sprinkler_rabi_total_rabi_waterdemand != "") {
////                    Sprinkeler_Rabi = parseFloat(data.sprinkler_rabi_total_rabi_waterdemand);
////                }

////                var Sprinkeler_Summer = 0;
////                if (data.sprinkler_summer_total_summer_waterdemand != null && data.sprinkler_summer_total_summer_waterdemand != "") {
////                    Sprinkeler_Summer = parseFloat(data.sprinkler_summer_total_summer_waterdemand);
////                }
////                var swd_total_WaterDemand = 0;


////                var Sprinkeler_Kharif_WaterDemand = 0;
////                if (data.sprinkler_kharif_total_waterdemand != null && data.sprinkler_kharif_total_waterdemand != "") {
////                    Sprinkeler_Kharif_WaterDemand = parseFloat(data.sprinkler_kharif_total_waterdemand);
////                }

////                var Sprinkeler_Rabi_WaterDemand = 0;
////                if (data.sprinkler_rabi_total_waterdemand != null && data.sprinkler_rabi_total_waterdemand != "") {
////                    Sprinkeler_Rabi_WaterDemand = parseFloat(data.sprinkler_rabi_total_waterdemand);
////                }

////                var Sprinkeler_Summer_WaterDemand = 0;
////                if (data.sprinkler_summer_total_waterdemand != null && data.sprinkler_summer_total_waterdemand != "") {
////                    Sprinkeler_Summer_WaterDemand = parseFloat(data.sprinkler_summer_total_waterdemand);
////                }
////                if (Sprinkeler_Kharif_WaterDemand != null && Sprinkeler_Kharif_WaterDemand != "") {
////                    swd_total_WaterDemand = Sprinkeler_Kharif_WaterDemand + swd_total_WaterDemand;
////                    $('#sprinkler_kharif').text(parseFloat(swd_total_WaterDemand).toFixed(2));
////                }
////                else {
////                    $('#sprinkler_kharif').text(0);
////                }


////                if (data.sprinkler_kharif_paddy_fundingsource != "" && data.sprinkler_kharif_paddy_fundingsource != null) {
////                    if (data.sprinkler_kharif_paddy_fundingsource == "Others") {
////                        $('#sprinkler_FundingSource').text(data.sprinkler_other_funding_source);
////                    }
////                    else {
////                        $('#sprinkler_FundingSource').text(data.sprinkler_kharif_paddy_fundingsource);
////                    }

////                }


////                if (Sprinkeler_Rabi_WaterDemand != null && Sprinkeler_Rabi_WaterDemand != "") {
////                    swd_total_WaterDemand = Sprinkeler_Rabi_WaterDemand + swd_total_WaterDemand;
////                    $('#sprinkler_rabi').text(parseFloat(Sprinkeler_Rabi_WaterDemand).toFixed(2));
////                }
////                else {

////                    $('#sprinkler_rabi').text(0);
////                }
////                if (Sprinkeler_Summer_WaterDemand != null && Sprinkeler_Summer_WaterDemand != "") {
////                    swd_total_WaterDemand = Sprinkeler_Summer_WaterDemand + swd_total_WaterDemand;

////                    $('#sprinkler_summer').text(parseFloat(Sprinkeler_Summer_WaterDemand).toFixed(2));

////                }
////                else {

////                    $('#sprinkler_summer').text(0);
////                }

////                if (Sprinkeler_Kharif != null && Sprinkeler_Kharif != "") {
////                    swd_total = Sprinkeler_Kharif + swd_total;

////                }




////                if (Sprinkeler_Rabi != null && Sprinkeler_Rabi != "") {
////                    swd_total = Sprinkeler_Rabi + swd_total;

////                }


////                if (Sprinkeler_Summer != null && Sprinkeler_Summer != "") {
////                    swd_total = Sprinkeler_Summer + swd_total;


////                }


////                $('#sprinkler_TotalDemand').text(swd_total.toFixed(2));

////                $('#sprinkler_TotalStandardDemand').text(swd_total_WaterDemand.toFixed(2));
////                var sprinkler_TotalReduction = swd_total_WaterDemand - swd_total;

////                $('#sprinkler_TotalReduction').text(sprinkler_TotalReduction.toFixed(2));

////                // DemandSide_KharifArray.push(Sprinkeler_Kharif);
////                DemandSide_KharifArray.push(swd_total_WaterDemand);
////                //   DemandSide_RabiArray.push(Sprinkeler_Rabi);
////                DemandSide_RabiArray.push(swd_total);
////                //   DemandSide_SummerArray.push(Sprinkeler_Summer);
////                DemandSide_SummerArray.push(sprinkler_TotalReduction);


////            }
////            else {
////                // DemandSide_KharifArray.push(Sprinkeler_Kharif);
////                DemandSide_KharifArray.push(0);
////                //   DemandSide_RabiArray.push(Sprinkeler_Rabi);
////                DemandSide_RabiArray.push(0);
////                //   DemandSide_SummerArray.push(Sprinkeler_Summer);
////                DemandSide_SummerArray.push(0);
////            }
////            Drip_Info();

////        }
////    });
////}

////function Drip_Info() {

////    $.ajax({
////        type: 'GET',
////        contentType: 'application/json; chatset=utf-8',
////        url: '/WSPHome/Drip_Info',
////        data: '',
////        dataType: 'JSON',
////        success: function (data) {

////            if (data == "Error") {
////                window.location = "/WSPHome/WSPDemansidereports";
////            }
////            if (data == "Logout") {
////                  window.location = "/Home/LogOut";
////            }
////            if (data.length != 0) {


////                if (data.drip_approx_estimated_cost != "" && data.drip_approx_estimated_cost != null) {
////                    // $('#drip_approx_cost').text(data.drip_approx_estimated_cost);
////                    DemandSide_Approx_mate_Cost_Total += parseFloat(data.drip_approx_estimated_cost);
////                    if (data.drip_cost_type != "0" && data.drip_cost_type != "" && data.drip_cost_type != null) {
////                        var ss1 = data.drip_approx_estimated_cost + " " + data.drip_cost_type;
////                        $('#drip_approx_cost_type').text(ss1);
////                    }
////                }




////                if (data.drip_kharif_paddy_fundingsource != null && data.drip_kharif_paddy_fundingsource != "") {
////                    if (data.drip_kharif_paddy_fundingsource == "Others") {
////                        $('#drip_FundingSource').text(data.drip_other_funding_source);
////                    } else {
////                        $('#drip_FundingSource').text(data.drip_kharif_paddy_fundingsource);
////                    }
////                }



////                var drip_total = 0;
////                var drip_total_WaterDemand = 0;
////                var drip_Kharif = 0;
////                if (data.drip_kharif_total_drip_waterdemand != null && data.drip_kharif_total_drip_waterdemand != "") {
////                    drip_Kharif = parseFloat(data.drip_kharif_total_drip_waterdemand);
////                }


////                var drip_Rabi = 0;
////                if (data.drip_rabi_total_rabi_waterdemand != null && data.drip_rabi_total_rabi_waterdemand != "") {
////                    drip_Rabi = parseFloat(data.drip_rabi_total_rabi_waterdemand);
////                }

////                var drip_Summer = 0;
////                if (data.drip_summer_total_summer_waterdemand != null && data.drip_summer_total_summer_waterdemand != "") {
////                    drip_Summer = parseFloat(data.drip_summer_total_summer_waterdemand);
////                }

////                var drip_Kharif_WaterDemand = 0;
////                if (data.drip_kharif_total_waterdemand != null && data.drip_kharif_total_waterdemand != "") {
////                    drip_Kharif_WaterDemand = parseFloat(data.drip_kharif_total_waterdemand);
////                }
////                var drip_Rabi_WaterDemand = parseFloat(data.drip_rabi_total_waterdemand);
////                var drip_Summer_WaterDemand = parseFloat(data.drip_summer_total_waterdemand);


////                if (drip_Kharif_WaterDemand != null && drip_Kharif_WaterDemand != "") {
////                    drip_total_WaterDemand = drip_Kharif_WaterDemand + drip_total_WaterDemand;
////                    $('#drip_kharif').text(parseFloat(drip_Kharif_WaterDemand).toFixed(2));

////                }
////                else {
////                    drip_Kharif_WaterDemand = 0;
////                    $('#drip_kharif').text(0);
////                }
////                if (drip_Rabi_WaterDemand != null && drip_Rabi_WaterDemand != "") {
////                    drip_total_WaterDemand = drip_Rabi_WaterDemand + drip_total_WaterDemand;
////                    $('#drip_rabi').text(parseFloat(drip_Rabi_WaterDemand).toFixed(2));

////                }

////                else {
////                    drip_Rabi_WaterDemand = 0;
////                    $('#drip_rabi').text(0);
////                }
////                if (drip_Summer_WaterDemand != null && drip_Summer_WaterDemand != "") {
////                    drip_total_WaterDemand = drip_Summer_WaterDemand + drip_total_WaterDemand;

////                    $('#drip_summer').text(parseFloat(drip_Summer_WaterDemand).toFixed(2));

////                }
////                else {
////                    drip_Summer_WaterDemand = 0;
////                    $('#drip_summer').text(0);
////                }

////                if (drip_Kharif != null && drip_Kharif != "") {
////                    drip_total = drip_total + drip_Kharif;

////                }
////                if (drip_Rabi != null && drip_Rabi != "") {
////                    drip_total = drip_total + drip_Rabi;

////                }
////                if (drip_Summer != null && drip_Summer != "") {
////                    drip_total = drip_total + drip_Summer;

////                }

////                $('#drip_TotalStandardDemand').text(parseFloat(drip_total_WaterDemand).toFixed(2));

////                $('#drip_TotalWaterdDemand').text(parseFloat(drip_total).toFixed(2));
////                var drip_TotalReduction = parseFloat(drip_total_WaterDemand) - parseFloat(drip_total);
////                $('#drip_TotalReduction').text(drip_TotalReduction.toFixed(2));

////                DemandSide_KharifArray.push(drip_total_WaterDemand);
////                DemandSide_RabiArray.push(drip_total);
////                DemandSide_SummerArray.push(drip_TotalReduction);
////            }
////            else {
////                DemandSide_KharifArray.push(0);
////                DemandSide_RabiArray.push(0);
////                DemandSide_SummerArray.push(0);
////            }
////            PipeLine_Info();

////        }
////    });
////}

////function PipeLine_Info() {

////    $.ajax({
////        type: 'GET',
////        contentType: 'application/json; chatset=utf-8',
////        url: '/WSPHome/PipeLine_Info',
////        data: '',
////        dataType: 'JSON',
////        success: function (data) {

////            if (data == "Error") {
////                window.location = "/WSPHome/WSPDemansidereports";
////            }
////            if (data == "Logout") {
////                  window.location = "/Home/LogOut";
////            }
////            if (data.length != 0) {

////                if (data.pipeline_approx_estimated_cost != "" && data.pipeline_approx_estimated_cost != null) {
////                    // $('#pipeline_approx_cost').text(data.pipeline_approx_estimated_cost);
////                    DemandSide_Approx_mate_Cost_Total += parseFloat(data.pipeline_approx_estimated_cost);
////                    if (data.pipeline_cost_type != "0" && data.pipeline_cost_type != "" && data.pipeline_cost_type != null) {
////                        var ss1 = data.pipeline_approx_estimated_cost + " " + data.pipeline_cost_type;
////                        $('#pipeline_approx_cost_type').text(ss1);
////                    }
////                }




////                if (data.pipeline_kharif_paddy_fundingsource != null && data.pipeline_kharif_paddy_fundingsource != "") {
////                    if (data.pipeline_kharif_paddy_fundingsource == "Others") {
////                        $('#pipeline_FundingSource').text(data.pipeline_other_funding_source);
////                    }
////                    else {
////                        $('#pipeline_FundingSource').text(data.pipeline_kharif_paddy_fundingsource);
////                    }
////                }


////                var pipeline_total = 0;
////                var pipeline_total_WaterDemand = 0;
////                var pipeline_kharif = 0;
////                if (data.pipeline_kharif_total_pipeline_waterdemand != null && data.pipeline_kharif_total_pipeline_waterdemand != "") {
////                    pipeline_kharif = parseFloat(data.pipeline_kharif_total_pipeline_waterdemand);

////                }
////                var pipeline_rabi = 0;
////                if (data.pipeline_rabi_total_rabi_waterdemand != null && data.pipeline_rabi_total_rabi_waterdemand != "") {
////                    pipeline_rabi = parseFloat(data.pipeline_rabi_total_rabi_waterdemand);

////                }


////                var pipeline_summer = 0;
////                if (data.pipeline_summer_total_summer_waterdemand != null && data.pipeline_summer_total_summer_waterdemand != "") {
////                    pipeline_summer = parseFloat(data.pipeline_summer_total_summer_waterdemand);

////                }


////                var pipeline_kharif_waterDemand = 0;
////                if (data.pipeline_kharif_total_waterdemand != null && data.pipeline_kharif_total_waterdemand != "") {
////                    pipeline_kharif_waterDemand = parseFloat(data.pipeline_kharif_total_waterdemand);

////                }
////                var pipeline_rabi_waterDemand = 0;
////                if (data.pipeline_rabi_total_waterdemand != null && data.pipeline_rabi_total_waterdemand != "") {
////                    pipeline_rabi_waterDemand = parseFloat(data.pipeline_rabi_total_waterdemand);

////                }


////                var pipeline_summer_waterDemand = 0;
////                if (data.pipeline_summer_total_waterdemand != null && data.pipeline_summer_total_waterdemand != "") {
////                    pipeline_summer_waterDemand = parseFloat(data.pipeline_summer_total_waterdemand);

////                }



////                if (pipeline_kharif_waterDemand != null && pipeline_kharif_waterDemand != "") {
////                    pipeline_total_WaterDemand = pipeline_total_WaterDemand + pipeline_kharif_waterDemand;

////                    $('#pipeline_kharif').text(parseFloat(pipeline_kharif_waterDemand).toFixed(2));
////                }
////                else {
////                    pipeline_kharif_waterDemand = 0;
////                    $('#pipeline_kharif').text(pipeline_kharif_waterDemand);
////                }

////                if (pipeline_rabi_waterDemand != null && pipeline_rabi_waterDemand != "") {
////                    pipeline_total_WaterDemand = pipeline_total_WaterDemand + pipeline_rabi_waterDemand;

////                    $('#pipeline_rabi').text(parseFloat(pipeline_rabi_waterDemand).toFixed(2));
////                }
////                else {
////                    pipeline_rabi_waterDemand = 0;
////                    $('#pipeline_rabi').text(pipeline_rabi_waterDemand);
////                }

////                if (pipeline_summer_waterDemand != null && pipeline_summer_waterDemand != "") {
////                    pipeline_total_WaterDemand = pipeline_total_WaterDemand + pipeline_summer_waterDemand;
////                    $('#pipeline_summer').text(parseFloat(pipeline_summer_waterDemand).toFixed(2));
////                }
////                else {
////                    pipeline_summer_waterDemand = 0;
////                    $('#pipeline_summer').text(pipeline_summer_waterDemand);
////                }


////                if (pipeline_kharif != null && pipeline_kharif != "") {
////                    pipeline_total = pipeline_total + pipeline_kharif;

////                }



////                if (pipeline_rabi != null && pipeline_rabi != "") {
////                    pipeline_total = pipeline_total + pipeline_rabi;
////                }

////                if (pipeline_summer != null && pipeline_summer != "") {
////                    pipeline_total = pipeline_total + pipeline_summer;

////                }

////                $('#pipeline_TotalStandardDemand').text(pipeline_total_WaterDemand.toFixed(2));
////                $('#pipeline_TotalWaterDemand').text(pipeline_total.toFixed(2));

////                var pipeline_TotalReduction = pipeline_total_WaterDemand - pipeline_total;
////                $('#pipeline_TotalReduction').text(pipeline_TotalReduction.toFixed(2));

////                DemandSide_KharifArray.push(pipeline_total_WaterDemand);
////                DemandSide_RabiArray.push(pipeline_total);
////                DemandSide_SummerArray.push(pipeline_TotalReduction);

////            }
////            else {
////                DemandSide_KharifArray.push(0);
////                DemandSide_RabiArray.push(0);
////                DemandSide_SummerArray.push(0);
////            }
////            Crop_Info();

////        }
////    });
////}

////function Crop_Info() {

////    $.ajax({
////        type: 'GET',
////        contentType: 'application/json; chatset=utf-8',
////        url: '/WSPHome/Crop_Info',
////        data: '',
////        dataType: 'JSON',
////        success: function (data) {

////            if (data == "Error") {
////                window.location = "/WSPHome/WSPDemansidereports";
////            }
////            if (data == "Logout") {
////                  window.location = "/Home/LogOut";
////            }
////            if (data.length != 0) {


////                if (data.crop_approx_estimated_cost != "" && data.crop_approx_estimated_cost != null) {
////                    // $('#crop_approx_cost').text(data.crop_approx_estimated_cost);
////                    DemandSide_Approx_mate_Cost_Total += parseFloat(data.crop_approx_estimated_cost);
////                    if (data.crop_cost_type != "0" && data.crop_cost_type != "" && data.crop_cost_type != null) {
////                        var ss1 = data.crop_approx_estimated_cost + " " + data.crop_cost_type;
////                        $('#crop_approx_cost_type').text(ss1);
////                    }
////                }



////                var crop_total_WaterDemand = 0;
////                var crop_total_Standard = 0;

////                if (data.changed_kharif_paddy_fundingsource != null && data.changed_kharif_paddy_fundingsource != "") {
////                    if (data.changed_kharif_paddy_fundingsource == "Others") {
////                        $('#crop_FundingSource').text(data.crop_other_funding_source);
////                    } else {
////                        $('#crop_FundingSource').text(data.changed_kharif_paddy_fundingsource);
////                    }
////                }





////                var crop_kharif_Standard = 0;
////                if (data.changed_kharif_total_gw_reduc_waterdemand != null && data.changed_kharif_total_gw_reduc_waterdemand != "") {
////                    crop_kharif_Standard = parseFloat(data.changed_kharif_total_gw_reduc_waterdemand);
////                }


////                var crop_rabi_Standard = 0;
////                if (data.changed_rabi_total_gw_reduc_waterdemand != null && data.changed_rabi_total_gw_reduc_waterdemand != "") {
////                    crop_rabi_Standard = parseFloat(data.changed_rabi_total_gw_reduc_waterdemand);
////                }

////                var crop_summer_Standard = 0;
////                if (data.changed_summer_total_gw_reduc_waterdemand != null && data.changed_summer_total_gw_reduc_waterdemand != "") {
////                    crop_summer_Standard = parseFloat(data.changed_summer_total_gw_reduc_waterdemand);
////                }

////                if (crop_kharif_Standard != null && crop_kharif_Standard != "") {
////                    crop_total_Standard = crop_total_Standard + crop_kharif_Standard;
////                    $('#crop_kharif').text(parseFloat(crop_kharif_Standard));

////                }
////                else {
////                    $('#crop_kharif').text(0);
////                }
////                if (crop_rabi_Standard != null) {
////                    crop_total_Standard = crop_total_Standard + crop_rabi_Standard;
////                    $('#crop_rabi').text(parseFloat(crop_rabi_Standard));

////                }
////                else {
////                    $('#crop_rabi').text(0);
////                }

////                if (crop_summer_Standard != null) {
////                    crop_total_Standard = crop_total_Standard + crop_summer_Standard;
////                    $('#crop_summer').text(parseFloat(crop_summer_Standard));

////                }
////                else {
////                    $('#crop_summer').text(0);
////                }


////                var crop_kharif = 0;
////                if (data.original_kharif_total_waterdemand != null && data.original_kharif_total_waterdemand != "") {
////                    crop_kharif = parseFloat(data.original_kharif_total_waterdemand);
////                }
////                var crop_rabi = 0;
////                if (data.original_rabi_total_waterdemand != null && data.original_rabi_total_waterdemand != "") {
////                    crop_rabi = parseFloat(data.original_rabi_total_waterdemand);
////                }

////                var crop_summer = 0;
////                if (data.original_summer_total_waterdemand != null && data.original_summer_total_waterdemand != "") {
////                    crop_summer = parseFloat(data.original_summer_total_waterdemand);
////                }


////                if (crop_kharif != null && crop_kharif != "") {
////                    crop_total_WaterDemand = crop_total_WaterDemand + crop_kharif;

////                }
////                if (crop_rabi != null && crop_rabi != "") {
////                    crop_total_WaterDemand = crop_total_WaterDemand + crop_rabi;

////                }

////                if (crop_summer != null && crop_summer != "") {
////                    crop_total_WaterDemand = crop_total_WaterDemand + crop_summer;

////                }
////                //crop_total_Standard

////                $('#crop_total_Standard').text(crop_total_WaterDemand.toFixed(2));
////                $('#crop_TotalDemand').text(crop_total_Standard.toFixed(2));
////                var crop_TotalReduction = crop_total_WaterDemand - crop_total_Standard;
////                $('#crop_TotalReduction').text(crop_total_Standard.toFixed(2));
////                DemandSide_KharifArray.push(crop_total_WaterDemand);
////                DemandSide_RabiArray.push(crop_total_Standard);
////                DemandSide_SummerArray.push(crop_TotalReduction);
////            }
////            else {
////                DemandSide_KharifArray.push(0);
////                DemandSide_RabiArray.push(0);
////                DemandSide_SummerArray.push(0);
////            }

////            Reduction_Info();

////        }
////    });
////}

////function Other_Info() {

////    $.ajax({
////        type: 'GET',
////        contentType: 'application/json; chatset=utf-8',
////        url: '/WSPHome/Other_Info',
////        data: '',
////        dataType: 'JSON',
////        success: function (data) {
////            if (data == "Error") {
////                window.location = "/WSPHome/WSPDemansidereports";
////            }
////            if (data == "Logout") {
////                  window.location = "/Home/LogOut";
////            }

////            if (data.length != 0) {

////                if (data.other_approx_estimated_cost != "" && data.other_approx_estimated_cost != null) {
////                    // $('#other_approx_cost').text(data.other_approx_estimated_cost);
////                    DemandSide_Approx_mate_Cost_Total += parseFloat(data.other_approx_estimated_cost);
////                    if (data.other_cost_type != "0" && data.other_cost_type != "" && data.other_cost_type != null) {
////                        var ss1 = data.other_approx_estimated_cost + " " + data.other_cost_type;
////                        $('#other_approx_cost_type').text(ss1);
////                    }
////                }



////                if (data.other_kharif_paddy_fundingsource != null && data.other_kharif_paddy_fundingsource != "") {
////                    if (data.other_kharif_paddy_fundingsource == "Others") {
////                        $('#other_FundingSource').text(data.other_funding_source);
////                    }
////                    else {
////                        $('#other_FundingSource').text(data.other_kharif_paddy_fundingsource);
////                    }
////                }



////                var other_total = 0;
////                var other_kharif_Standard = 0;
////                if (data.other_kharif_total_kharifcrop_waterdemand != null && data.other_kharif_total_kharifcrop_waterdemand != "") {
////                    other_kharif_Standard = parseFloat(data.other_kharif_total_kharifcrop_waterdemand);
////                }

////                var other_rabi_Standard = 0;
////                if (data.other_rabi_total_rabicrop_waterdemand != null && data.other_rabi_total_rabicrop_waterdemand != "") {
////                    other_rabi_Standard = parseFloat(data.other_rabi_total_rabicrop_waterdemand);
////                }

////                var other_summer_Standard = 0;
////                if (data.other_summer_total_summercrop_waterdemand != null && data.other_summer_total_summercrop_waterdemand != "") {
////                    other_summer_Standard = parseFloat(data.other_summer_total_summercrop_waterdemand);
////                }

////                var other_total_WaterDemand = 0;

////                var other_kharif_WaterDemand = 0;
////                if (data.other_kharif_total_reduc_gw_demand != null && data.other_kharif_total_reduc_gw_demand != "") {
////                    other_kharif_WaterDemand = parseFloat(data.other_kharif_total_reduc_gw_demand);
////                }

////                var other_rabi_WaterDemand = 0;
////                if (data.other_rabi_total_reduc_gw_demand != null && data.other_rabi_total_reduc_gw_demand != "") {
////                    other_rabi_WaterDemand = parseFloat(data.other_rabi_total_reduc_gw_demand);
////                }

////                var other_summer_WaterDemand = 0;
////                if (data.other_summer_total_reduc_gw_demand != null && data.other_summer_total_reduc_gw_demand != "") {
////                    other_summer_WaterDemand = parseFloat(data.other_summer_total_reduc_gw_demand);
////                }


////                if (other_kharif_WaterDemand != null && other_kharif_WaterDemand != "") {
////                    other_total_WaterDemand = other_kharif_WaterDemand + other_kharif_Standard;

////                }
////                if (other_rabi_WaterDemand != null && other_rabi_WaterDemand != "") {
////                    other_total_WaterDemand = other_total_WaterDemand + other_rabi_WaterDemand;

////                }

////                if (other_summer_WaterDemand != null && other_summer_WaterDemand != "") {
////                    other_total_WaterDemand = other_total_WaterDemand + other_summer_WaterDemand;

////                }






////                if (other_kharif_Standard != null && other_kharif_Standard != "") {
////                    other_total = other_total + other_kharif_Standard;
////                    $('#other_kharif').text(parseFloat(other_kharif_Standard));
////                }
////                else {
////                    $('#other_kharif').text(0);
////                }



////                if (other_rabi_Standard != null && other_rabi_Standard != "") {
////                    other_total = other_total + other_rabi_Standard;
////                    $('#other_rabi').text(parseFloat(other_rabi_Standard));
////                }
////                else {
////                    $('#other_rabi').text(0);
////                }

////                if (other_summer_Standard != null && other_summer_Standard != "") {
////                    other_total = other_total + other_summer_Standard;
////                    $('#other_summer').text(parseFloat(other_summer_Standard));
////                }
////                else {
////                    $('#other_summer').text(0);
////                }

////                $('#other_TotalStandardDemand').text(other_total.toFixed(2));
////                $('#other_TotalWaterDemand').text(other_total_WaterDemand.toFixed(2));

////                var other_TotalReduction = other_total - other_total_WaterDemand;
////                $('#other_TotalReduction').text(other_TotalReduction.toFixed(2));

////                DemandSide_KharifArray.push(other_total);
////                DemandSide_RabiArray.push(other_total_WaterDemand);
////                DemandSide_SummerArray.push(other_TotalReduction);

////            }
////            else {
////                DemandSide_KharifArray.push(0);
////                DemandSide_RabiArray.push(0);
////                DemandSide_SummerArray.push(0);
////            }
////            C2();
////            var SSS = DemandSide_Approx_mate_Cost_Total.toFixed(2) + " Lakhs";
////            $('#DemandSide_Approx_mate_Cost_Total').text(SSS);
////            AR_StructureInfo();

////        }
////    });
////}
////function Reduction_Info() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/WSPHome/Reduction_Info',
//        data: '',
//        dataType: 'JSON',
//        success: function (data) {
//            if (data == "Error") {
//                window.location = "/WSPHome/WSPDemansidereports";
//            }
//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";
//            }

//            if (data.length != 0) {

//                if (data.reduction_approx_estimated_cost != "" && data.reduction_approx_estimated_cost != null) {
//                    //$('#reduction_approx_cost').text(data.reduction_approx_estimated_cost);
//                    DemandSide_Approx_mate_Cost_Total += parseFloat(data.reduction_approx_estimated_cost);
//                    if (data.reduction_cost_type != "0" && data.reduction_cost_type != "" && data.reduction_cost_type != null) {
//                        var ss1 = data.reduction_approx_estimated_cost + " " + data.reduction_cost_type;
//                        ; $('#reduction_approx_cost_type').text(ss1);
//                    }
//                }



//                if (data.reduction_kharif_paddy_fundingsource != null && data.reduction_kharif_paddy_fundingsource != "") {
//                    if (data.reduction_kharif_paddy_fundingsource == "Others") {
//                        $('#reduction_FundingSource').text(data.reduction_other_funding_source);
//                    } else {
//                        $('#reduction_FundingSource').text(data.reduction_kharif_paddy_fundingsource);
//                    }
//                }

//                var reduction_total = 0;
//                var reduction_kharif = 0;
//                if (data.reduction_kharif_total_kharifcrop_waterdemand != null && data.reduction_kharif_total_kharifcrop_waterdemand != "") {
//                    reduction_kharif = parseFloat(data.reduction_kharif_total_kharifcrop_waterdemand);
//                }

//                var reduction_rabi = 0;
//                if (data.reduction_rabi_total_rabicrop_waterdemand != null && data.reduction_rabi_total_rabicrop_waterdemand != "") {
//                    reduction_rabi = parseFloat(data.reduction_rabi_total_rabicrop_waterdemand);
//                }

//                var reduction_summer = 0;
//                if (data.reduction_summer_total_summercrop_waterdemand != null && data.reduction_summer_total_summercrop_waterdemand != "") {
//                    reduction_summer = parseFloat(data.reduction_summer_total_summercrop_waterdemand);
//                }

//                var reduction_total_WaterDemand = 0;

//                var reduction_kharif_WaterDemand = 0;
//                if (data.reduction_kharif_total_reduc_gw_demand != null && data.reduction_kharif_total_reduc_gw_demand != "") {
//                    reduction_kharif_WaterDemand = parseFloat(data.reduction_kharif_total_reduc_gw_demand);
//                }

//                var reduction_rabi_WaterDemand = 0;
//                if (data.reduction_rabi_total_reduc_gw_demand != null && data.reduction_rabi_total_reduc_gw_demand != "") {
//                    reduction_rabi_WaterDemand = parseFloat(data.reduction_rabi_total_reduc_gw_demand);
//                }

//                var reduction_summer_WaterDemand = 0;
//                if (data.reduction_summer_total_reduc_gw_demand != null && data.reduction_summer_total_reduc_gw_demand != "") {
//                    reduction_summer_WaterDemand = parseFloat(data.reduction_summer_total_reduc_gw_demand);
//                }


//                if (reduction_kharif_WaterDemand != null && reduction_kharif_WaterDemand != "") {
//                    reduction_total_WaterDemand = reduction_total_WaterDemand + reduction_kharif_WaterDemand;

//                }

//                if (reduction_rabi_WaterDemand != null && reduction_rabi_WaterDemand != "") {
//                    reduction_total_WaterDemand = reduction_total_WaterDemand + reduction_rabi_WaterDemand;

//                }

//                if (reduction_summer_WaterDemand != null && reduction_summer_WaterDemand != "") {
//                    reduction_total_WaterDemand = reduction_total_WaterDemand + reduction_summer_WaterDemand;

//                }



//                if (reduction_kharif != null && reduction_kharif != "") {
//                    reduction_total = reduction_total + reduction_kharif;
//                    $('#reduction_kharif').text(parseFloat(reduction_kharif));
//                }
//                else {
//                    $('#reduction_kharif').text(0);
//                }

//                if (reduction_rabi != null && reduction_rabi != "") {
//                    reduction_total = reduction_total + reduction_rabi;
//                    $('#reduction_rabi').text(parseFloat(reduction_rabi));
//                }
//                else {
//                    $('#reduction_rabi').text(0);
//                }

//                if (reduction_summer != null && reduction_summer != "") {
//                    reduction_total = reduction_total + reduction_summer;
//                    $('#reduction_summer').text(parseFloat(reduction_summer));
//                }
//                else {
//                    $('#reduction_summer').text(0);
//                }
//                $('#reduction_TotalStandardDemand').text(reduction_total.toFixed(2));
//                $('#reduction_TotalWaterDemand').text(reduction_total_WaterDemand.toFixed(2));
//                var reduction_TotalReduction = reduction_total - reduction_total_WaterDemand;
//                $('#reduction_TotalReduction').text(reduction_TotalReduction.toFixed(2));

//                DemandSide_KharifArray.push(reduction_total);
//                DemandSide_RabiArray.push(reduction_total_WaterDemand);
//                DemandSide_SummerArray.push(reduction_TotalReduction);

//            }
//            else {
//                DemandSide_KharifArray.push(0);
//                DemandSide_RabiArray.push(0);
//                DemandSide_SummerArray.push(0);
//            }
//            Other_Info();
//        }
//    });
//}


function AR_StructureInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSPHome/AR_Structure_Details1',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            //if (data == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}
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
                    var ss1 = AR_cost.toFixed(2) + " " + AR_Type;

                    // $('#ar_approx_cost').text(AR_cost.toFixed(2));
                    $('#ar_approx_cost_type').text(ss1);
                }



                $('#ar_kharif').text(parseFloat(AR_Kharif).toFixed(2));
                $('#ar_rabi').text(parseFloat(AR_Rabi).toFixed(2));
                $('#ar_annual').text(parseFloat(AR_Annual).toFixed(2));


                KharifArray.push(parseFloat(AR_Kharif));
                RabiArray.push(parseFloat(AR_Rabi));
                AOIArray.push(parseFloat(AR_Annual));
            }
            else {
                AR_Kharif = 0;
                AR_Rabi = 0;
                AR_Annual = 0;
                ar_total = AR_Kharif + AR_Rabi + AR_Annual;
                var S1 = parseFloat(ar_total).toFixed(2);
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

            //if (data == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}
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
                    var ss1 = WC_cost.toFixed(2) + "  " + WC_Type;
                    // $('#wc_approx_cost').text(WC_cost.toFixed(2));
                    $('#wc_approx_cost_type').text(ss1);

                }


                wc_total = WC_Kharif + WC_Rabi + WC_Annual;
                var S1 = parseFloat(wc_total).toFixed(2);
                $('#wc_total').text(S1);
                $('#wc_kharif').text(WC_Kharif.toFixed(2));
                $('#wc_rabi').text(WC_Rabi.toFixed(2));
                $('#wc_annual').text(WC_Annual.toFixed(2));
                KharifArray.push(parseFloat(WC_Kharif));
                RabiArray.push(parseFloat(WC_Rabi));
                AOIArray.push(parseFloat(WC_Annual));

            }
            else {
                WC_Kharif = 0;
                WC_Rabi = 0;
                WC_Annual = 0;
                wc_total = WC_Kharif + WC_Rabi + WC_Annual;
                var S1 = parseFloat(wc_total).toFixed(2);
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

            //if (data == "Error") {
            //    window.location = "/WaterSecurityPlan/TotalReportwsp";
            //}
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
                    var ss1 = AOI_cost.toFixed(2) + " " + AOI_Type;
                    // $('#aoi_approx_cost').text(AOI_cost.toFixed(2));

                    $('#aoi_approx_cost_type').text(ss1);

                }


                $('#aoi_kharif').text(parseFloat(AOI_Kharif).toFixed(2));
                $('#aoi_rabi').text(parseFloat(AOI_Rabi).toFixed(2));
                $('#aoi_annual').text(parseFloat(AOI_Annual).toFixed(2));


                KharifArray.push(parseFloat(AOI_Kharif));
                RabiArray.push(parseFloat(AOI_Rabi));
                AOIArray.push(parseFloat(AOI_Annual));
                any_total = AOI_Kharif + AOI_Rabi + AOI_Annual;
                var S1 = parseFloat(any_total).toFixed(2);
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
                var S1 = parseFloat(any_total).toFixed(2);
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
        var SSS = supply_side_approx_cost_total.toFixed(2) + " Lakhs";
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
            //console.log(data[0].dpmu_declaration);
            //const d1 = new Date();
            //var IDD = $(".btn_location").attr("id");
            //var tr1 = "";
            //var tr2 = '';
            //if (data[0].dpmu_declaration != null && data[0].dpmu_declaration != 0 && data[0].dpmu_declaration != "") {
            //    var post_nowDate = new Date(parseInt(data[0].entry_time.substr(6)))
            //    post_curr_date = post_nowDate.getDate();
            //    post_curr_month = post_nowDate.getMonth() + 1;    // months are zero based
            //    post_curr_year = post_nowDate.getFullYear();

            //    var file_name = "DPMU Declaration_" + post_curr_date + "_" + post_curr_month + "_" + post_curr_year;

            //    tr1 = '<label><a href="' + data[0].dpmu_declaration + '" download="" target="_blank" >' + file_name + '</a></label>';
            //    $('#upload_declaration').html(tr1);
            //    $("#btn_declaration_dlt").show();
            //    $("#btn_declaration_dlt").attr("id", data[0].id);
            //} else {
            //    $('#upload_declaration').html(tr1);
            //    $("#" + IDD).hide();
            //}

            if (data[0] != null && data[0] != 0 && data[0] != "") {
                var url = data[0].dpmu_declaration;
                LoadPdfFromUrl_dpmu(url);
            }
            //tr2 += '<tr><td><label><a href="' + data[0].dpmu_declaration + '"><img src="' + page.jpg + '" style="width: 100%;"/></a></label></td></tr>';
            //$('#image_div').append(tr2);
        }
    });
}








function WaterLevelWSP() {
    $('.loader').show();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        //url: '/WaterSecurityPlan/WaterLevelWSP',
        url: '/WaterSecurityPlan/GetMisWaterLevelWSP',
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
                            }else if (default_div_block == 6) {
                                var wl6 = true;
                            }else if (default_div_block == 7) {
                                var wl7 = true;
                            }else if (default_div_block == 8) {
                                var wl8 = true;
                            }else if (default_div_block == 9) {
                                var wl9 = true;
                            }else if (default_div_block == 10) {
                                var wl10 = true;
                            }else if (default_div_block == 11) {
                                var wl11 = true;
                            }else if (default_div_block == 12) {
                                var wl12 = true;
                            }else if (default_div_block == 13) {
                                var wl13 = true;
                            }else if (default_div_block == 14) {
                                var wl14 = true;
                            }else if (default_div_block == 15) {
                                var wl15 = true;
                            }else if (default_div_block == 16) {
                                var wl16 = true;
                            }else if (default_div_block == 17) {
                                var wl17 = true;
                            }else if (default_div_block == 18) {
                                var wl18 = true;
                            }else if (default_div_block == 19) {
                                var wl19 = true;
                            }else if (default_div_block == 20) {
                                var wl20 = true;
                            }else if (default_div_block == 21) {
                                var wl21 = true;
                            }else if (default_div_block == 22) {
                                var wl22 = true;
                            }else if (default_div_block == 23) {
                                var wl23 = true;
                            }else if (default_div_block == 24) {
                                var wl24 = true;
                            }else if (default_div_block == 25) {
                                var wl25 = true;
                            }else if (default_div_block == 26) {
                                var wl26 = true;
                            }else if (default_div_block == 27) {
                                var wl27 = true;
                            }else if (default_div_block == 28) {
                                var wl28 = true;
                            }else if (default_div_block == 29) {
                                var wl29 = true;
                            }else if (default_div_block == 30) {
                                var wl30 = true;
                            }else if (default_div_block == 31) {
                                var wl31 = true;
                            }else if (default_div_block == 32) {
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
        //url: '/WaterSecurityPlan/WaterQualityWSP',
        url: '/WaterSecurityPlan/GetMISWaterQualityWSP',
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
    //$('div.wateravaliablity_space1').addClass('wateravaliablity_space');
    //$('div.waterdrft_space1').addClass('waterdrft_space');
    //$('div.waterdrft_balance1').addClass('waterdrft_balance');
    //$('div.waterdrft_Budgeting_space1').addClass('waterdrft_Budgeting_space');
    //$('div.supplyside_demandside_space1').addClass('supplyside_demandside_space');
    //$('div.pgwmCommiteee_space1').addClass('pgwmCommiteee_space');
    //$('div.pgwm_range1').addClass('pgwm_range');
    //$('div.image_space_gap1').addClass('image_space_gap');
    //$('div.image_space_gap_21').addClass('image_space_gap_2');
    $('div.image_space_gap31').addClass('image_space_gap_3');
    //$('div.pgwm_table_space1').addClass('pgwm_table_space');
    //$('div.main_heading_sm_total1').addClass('main_heading_sm_total');
    //$('div#SW_Image').addClass('sm_image_gap');

    //$('th.demanside_padding_heading').addClass('demanside_padding_heading1');
    $(".highcharts-credits").css("display", "none");

    $('div#btnExport').addClass('hideDownload');
    $('div#wsp_approved').addClass('hideDownload');
    $('div#remarks_div').addClass('hideDownload');

    $('div#btnExport1').addClass('hideDownload');

    setTimeout(function () {
        $('#Data1').removeClass('background_after_download');
        //$('div.wateravaliablity_space1').removeClass('wateravaliablity_space');
        //$('div.waterdrft_space1').removeClass('waterdrft_space');
        //$('div.waterdrft_balance1').removeClass('waterdrft_balance');
        //$('div.waterdrft_Budgeting_space1').removeClass('waterdrft_Budgeting_space');
        //$('div.supplyside_demandside_space1').removeClass('supplyside_demandside_space');
        //$('div.pgwmCommiteee_space1').removeClass('pgwmCommiteee_space');
        //$('div.pgwm_range1').removeClass('pgwm_range');
        //$('div.main_heading_sm_total1').removeClass('main_heading_sm_total');
        //$('div#SW_Image').removeClass('sm_image_gap');
        //$('div.image_space_gap1').removeClass('image_space_gap');
        //$('div.image_space_gap_21').removeClass('image_space_gap_2');
        $('div.image_space_gap_31').removeClass('image_space_gap_3');
        //$('div.pgwm_table_space1').removeClass('pgwm_table_space');
        //$('th.demanside_padding_heading').removeClass('demanside_padding_heading1');
        $('div#btnExport').removeClass('hideDownload');
        $('div#wsp_approved').removeClass('hideDownload');
        $('div#remarks_div').removeClass('hideDownload');
        $('div#btnExport1').removeClass('hideDownload');
    }, 2000);
}


// PDF generate js end

