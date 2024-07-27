var add_Drip_kharif_count = 0;
var add_Drip_kharif_count1 = 0;
var add_Drip_kharif_count2 = 0;
var add_Drip_kharif_count3 = 0;
var add_Drip_kharif_count4 = 0;
var add_Drip_kharif_count5 = 0;

var add_Drip_rabi_count = 0;
var add_Drip_rabi_count1 = 0;
var add_Drip_rabi_count2 = 0;
var add_Drip_rabi_count3 = 0;
var add_Drip_rabi_count4 = 0;
var add_Drip_rabi_count5 = 0;

var add_Drip_summer_count = 0;
var add_Drip_summer_count1 = 0;
var add_Drip_summer_count2 = 0;
var add_Drip_summer_count3 = 0;
var add_Drip_summer_count4 = 0;
var add_Drip_summer_count5 = 0;

$(document).ready(function () {
    DripInfo();
});

function Drip_Kharif_AddCrop() {

    if (add_Drip_kharif_count1 == 1) {
        $('#Drip_crp1').show();

        var s11 = "drip_kharif_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_irri_area1" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_water_req1" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Drip_crp1').html(ass);
        add_Drip_kharif_count = add_Drip_kharif_count + 1;
        add_Drip_kharif_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("drip_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_area1").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_irri_area1").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_water_req1").disabled = true;


        //}
    }
    else if (add_Drip_kharif_count2 == 2) {
        $('#Drip_crp2').show();

        var s11 = "drip_kharif_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control"  id="drip_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_irri_area2" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_water_req2" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Drip_crp2').html(ass);
        add_Drip_kharif_count = add_Drip_kharif_count + 1;
        add_Drip_kharif_count2 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("drip_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_area2").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_irri_area2").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Drip_kharif_count3 == 3) {
        $('#Drip_crp3').show();


        var s11 = "drip_kharif_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_irri_area3" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_water_req3" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Drip_crp3').html(ass);
        add_Drip_kharif_count = add_Drip_kharif_count + 1;
        add_Drip_kharif_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {



        //    document.getElementById("drip_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_area3").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_irri_area3").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Drip_kharif_count4 == 4) {
        $('#Drip_crp4').show();

        var s11 = "drip_kharif_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_irri_area4" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_water_req4" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Drip_crp4').html(ass);
        add_Drip_kharif_count = add_Drip_kharif_count + 1;
        add_Drip_kharif_count4 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("drip_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_area4").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_irri_area4").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Drip_kharif_count5 == 5) {
        $('#Drip_crp5').show();
        var s11 = "drip_kharif_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_irri_area5" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_kharif_othercrop_water_req5" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Drip_crp5').html(ass);
        $('#Drip_Kharif_AddCrop').hide();
        add_Drip_kharif_count = add_Drip_kharif_count + 1;
        add_Drip_kharif_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("drip_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_area5").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_irri_area5").disabled = true;
        //    document.getElementById("drip_kharif_othercrop_water_req5").disabled = true;
        //}
    }

    if (add_Drip_kharif_count == 5) {
        $('#Drip_Kharif_AddCrop').hide();
    }
}

function Drip_Rabi_AddCrop() {

    if (add_Drip_rabi_count1 == 1) {

        $('#Drip_Rabi_crp1').show();

        var s11 = "drip_rabi_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="drip_rabi_othercrop_area1" onkeyup="Drip_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_irri_area1" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_water_req1" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Drip_Rabi_crp1').html(ass);
        add_Drip_rabi_count = add_Drip_rabi_count + 1;
        add_Drip_rabi_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("drip_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_area1").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_irri_area1").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_water_req1").disabled = true;



        //}
    }
    else if (add_Drip_rabi_count2 == 2) {
        $('#Drip_Rabi_crp2').show();

        var s11 = "drip_rabi_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_irri_area2" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_water_req2" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Drip_Rabi_crp2').html(ass);
        add_Drip_rabi_count = add_Drip_rabi_count + 1;
        add_Drip_rabi_count2 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {



        //    document.getElementById("drip_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_area2").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_irri_area2").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_water_req2").disabled = true;


        //}
    }

    else if (add_Drip_rabi_count3 == 3) {
        $('#Drip_Rabi_crp3').show();

        var s11 = "drip_rabi_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_irri_area3" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_water_req3" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Drip_Rabi_crp3').html(ass);
        add_Drip_rabi_count = add_Drip_rabi_count + 1;
        add_Drip_rabi_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("drip_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_area3").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_irri_area3").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_water_req3").disabled = true;


        //}
    }

    else if (add_Drip_rabi_count4 == 4) {
        $('#Drip_Rabi_crp4').show();

        var s11 = "drip_rabi_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_irri_area4" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_water_req4" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Drip_Rabi_crp4').html(ass);
        add_Drip_rabi_count = add_Drip_rabi_count + 1;
        add_Drip_rabi_count4 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("drip_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_area4").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_irri_area4").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_water_req4").disabled = true;


        //}
    }
    else if (add_Drip_rabi_count5 == 5) {
        $('#Drip_Rabi_crp5').show();
        var s11 = "drip_rabi_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_irri_area5" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_rabi_othercrop_water_req5" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Drip_Rabi_crp5').html(ass);
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("drip_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_area5").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_irri_area5").disabled = true;
        //    document.getElementById("drip_rabi_othercrop_water_req5").disabled = true;

        //}
        $('#Drip_Rabi_AddCrop').hide();
        add_Drip_rabi_count = add_Drip_rabi_count + 1;
        add_Drip_rabi_count5 = 0;

    }

    if (add_Drip_rabi_count == 5) {
        $('#Drip_Rabi_AddCrop').hide();
    }
}


function Drip_Summer_AddCrop() {

    if (add_Drip_summer_count1 == 1) {

        $('#Drip_Summer_crp1').show();

        var ABC = "drip_summer_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Drip_otherpopup(' + ABC + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_irri_area1" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_water_req1" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Drip_Summer_crp1').html(ass);
        add_Drip_summer_count = add_Drip_summer_count + 1;
        add_Drip_summer_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("drip_summer_othercrop_name1").disabled = true;
        //    document.getElementById("drip_summer_othercrop_area1").disabled = true;
        //    document.getElementById("drip_summer_othercrop_irri_area1").disabled = true;
        //    document.getElementById("drip_summer_othercrop_water_req1").disabled = true;


        //}
    }
    else if (add_Drip_summer_count2 == 2) {
        $('#Drip_Summer_crp2').show();

        var s11 = "drip_summer_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_irri_area2" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_water_req2" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Drip_Summer_crp2').html(ass);
        add_Drip_summer_count = add_Drip_summer_count + 1;
        add_Drip_summer_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("drip_summer_othercrop_name2").disabled = true;
        //    document.getElementById("drip_summer_othercrop_area2").disabled = true;
        //    document.getElementById("drip_summer_othercrop_irri_area2").disabled = true;
        //    document.getElementById("drip_summer_othercrop_water_req2").disabled = true;


        //}
    }

    else if (add_Drip_summer_count3 == 3) {
        $('#Drip_Summer_crp3').show();

        var s11 = "drip_summer_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_irri_area3" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_water_req3" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Drip_Summer_crp3').html(ass);
        add_Drip_summer_count = add_Drip_summer_count + 1;
        add_Drip_summer_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("drip_summer_othercrop_name3").disabled = true;
        //    document.getElementById("drip_summer_othercrop_area3").disabled = true;
        //    document.getElementById("drip_summer_othercrop_irri_area3").disabled = true;
        //    document.getElementById("drip_summer_othercrop_water_req3").disabled = true;


        //}
    }

    else if (add_Drip_summer_count4 == 4) {
        $('#Drip_Summer_crp4').show();

        var s11 = "drip_summer_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp4" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_irri_area4" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_water_req4" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Drip_Summer_crp4').html(ass);
        add_Drip_summer_count = add_Drip_summer_count + 1;
        add_Drip_summer_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("drip_summer_othercrop_name4").disabled = true;
        //    document.getElementById("drip_summer_othercrop_area4").disabled = true;
        //    document.getElementById("drip_summer_othercrop_irri_area4").disabled = true;
        //    document.getElementById("drip_summer_othercrop_water_req4").disabled = true;


        //}
    }
    else if (add_Drip_summer_count5 == 5) {
        $('#Drip_Summer_crp5').show();
        var s11 = "drip_summer_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_drip" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" id="drip_summer_othercrop_name5" class="form-control" id="" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_irri_area5" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
            '</li><li><input type="text" id="drip_summer_othercrop_water_req5" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Drip_Summer_crp5').html(ass);

        add_Drip_summer_count = add_Drip_summer_count + 1;
        add_Drip_summer_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("drip_summer_othercrop_name5").disabled = true;
        //    document.getElementById("drip_summer_othercrop_area5").disabled = true;
        //    document.getElementById("drip_summer_othercrop_irri_area5").disabled = true;
        //    document.getElementById("drip_summer_othercrop_water_req5").disabled = true;

        //}
    }
    if (add_Drip_summer_count == 5) {
        $('#Drip_Summer_AddCrop').hide();
    }
}

function DripInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/DripInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            //if (response == "Error") {
            //    window.location = "/WSPHome/WspDemandside";
            //}
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response != "NO") {
                if (response.drip_kharif_othercrop_name1 == null || response.drip_kharif_othercrop_name1 == "") {
                    add_Drip_kharif_count1 = 1;
                }
                else {
                    add_Drip_kharif_count = add_Drip_kharif_count + 1;
                }

                if (response.drip_kharif_othercrop_name2 == null || response.drip_kharif_othercrop_name2 == "") {
                    add_Drip_kharif_count2 = 2;
                }
                else {
                    add_Drip_kharif_count = add_Drip_kharif_count + 1;
                }


                if (response.drip_kharif_othercrop_name3 == null || response.drip_kharif_othercrop_name3 == "") {
                    add_Drip_kharif_count3 = 3;
                } else {
                    add_Drip_kharif_count = add_Drip_kharif_count + 1;
                }


                if (response.drip_kharif_othercrop_name4 == null || response.drip_kharif_othercrop_name4 == "") {
                    add_Drip_kharif_count4 = 4;
                }
                else {
                    add_Drip_kharif_count = add_Drip_kharif_count + 1;
                }


                if (response.drip_kharif_othercrop_name5 == null || response.drip_kharif_othercrop_name5 == "") {
                    add_Drip_kharif_count5 = 5;
                }
                else {
                    add_Drip_kharif_count = add_Drip_kharif_count + 1;
                }

                if (add_Drip_kharif_count == 5) {

                    $('#Drip_Kharif_AddCrop').hide();
                }

                if (response.drip_kharif_othercrop_name1 != null && response.drip_kharif_othercrop_name1 != "null" && response.drip_kharif_othercrop_name1 != "") {

                    var drip_kharif_othercrop_area1 = "";
                    var drip_kharif_othercrop_irri_area1 = "";
                    var drip_kharif_othercrop_water_req1 = "";
                    if (response.drip_kharif_othercrop_area1 != null && response.drip_kharif_othercrop_area1 != "") {
                        drip_kharif_othercrop_area1 = response.drip_kharif_othercrop_area1;
                    }

                    if (response.drip_kharif_othercrop_irri_area1 != null && response.drip_kharif_othercrop_irri_area1 != "") {
                        drip_kharif_othercrop_irri_area1 = response.drip_kharif_othercrop_irri_area1;
                    }

                    if (response.drip_kharif_othercrop_water_req1 != null && response.drip_kharif_othercrop_water_req1 != "") {
                        drip_kharif_othercrop_water_req1 = response.drip_kharif_othercrop_water_req1;
                    }


                    var ABC = "drip_kharif_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_kharif_othercrop_name1 + '<a href="#Filter_drip" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + ABC + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="drip_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.drip_kharif_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_kharif_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_irri_area1" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" value="' + drip_kharif_othercrop_irri_area1 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_water_req1" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal"value="' + drip_kharif_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Drip_crp1').html(ass);
                    $('#drip_kharif_othercrop_name1').hide();

                    $('#Drip_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_area1").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_water_req1").disabled = true;

                    //}
                }

                if (response.drip_kharif_othercrop_name2 != null && response.drip_kharif_othercrop_name2 != "null" && response.drip_kharif_othercrop_name2 != "") {

                    var drip_kharif_othercrop_area2 = "";
                    var drip_kharif_othercrop_irri_area2 = "";
                    var drip_kharif_othercrop_water_req2 = "";
                    if (response.drip_kharif_othercrop_area2 != null && response.drip_kharif_othercrop_area2 != "") {
                        drip_kharif_othercrop_area2 = response.drip_kharif_othercrop_area2;
                    }

                    if (response.drip_kharif_othercrop_irri_area2 != null && response.drip_kharif_othercrop_irri_area2 != "") {
                        drip_kharif_othercrop_irri_area2 = response.drip_kharif_othercrop_irri_area2;
                    }

                    if (response.drip_kharif_othercrop_water_req2 != null && response.drip_kharif_othercrop_water_req2 != "") {
                        drip_kharif_othercrop_water_req2 = response.drip_kharif_othercrop_water_req2;
                    }




                    var s11 = "drip_kharif_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_kharif_othercrop_name2 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.drip_kharif_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_kharif_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_irri_area2" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" value="' + drip_kharif_othercrop_irri_area2 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_water_req2" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal"value="' + drip_kharif_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Drip_crp2').html(ass);
                    $('#drip_kharif_othercrop_name2').hide();
                    $('#Drip_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("drip_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_area2").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_water_req2").disabled = true;


                    //}
                }
                if (response.drip_kharif_othercrop_name3 != null && response.drip_kharif_othercrop_name3 != "null" && response.drip_kharif_othercrop_name3 != "") {

                    var drip_kharif_othercrop_area3 = "";
                    var drip_kharif_othercrop_irri_area3 = "";
                    var drip_kharif_othercrop_water_req3 = "";
                    if (response.drip_kharif_othercrop_area3 != null && response.drip_kharif_othercrop_area3 != "") {
                        drip_kharif_othercrop_area3 = response.drip_kharif_othercrop_area3;
                    }

                    if (response.drip_kharif_othercrop_irri_area3 != null && response.drip_kharif_othercrop_irri_area3 != "") {
                        drip_kharif_othercrop_irri_area3 = response.drip_kharif_othercrop_irri_area3;
                    }

                    if (response.drip_kharif_othercrop_water_req3 != null && response.drip_kharif_othercrop_water_req3 != "") {
                        drip_kharif_othercrop_water_req3 = response.drip_kharif_othercrop_water_req3;
                    }





                    var s11 = "drip_kharif_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_kharif_othercrop_name3 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.drip_kharif_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_kharif_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_irri_area3" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" value="' + drip_kharif_othercrop_irri_area3 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_water_req3" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal"value="' + drip_kharif_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Drip_crp3').html(ass);
                    $('#drip_kharif_othercrop_name3').hide();
                    $('#Drip_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("drip_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_area3").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.drip_kharif_othercrop_name4 != null && response.drip_kharif_othercrop_name4 != "null" && response.drip_kharif_othercrop_name4 != "") {

                    var drip_kharif_othercrop_area4 = "";
                    var drip_kharif_othercrop_irri_area4 = "";
                    var drip_kharif_othercrop_water_req4 = "";
                    if (response.drip_kharif_othercrop_area4 != null && response.drip_kharif_othercrop_area4 != "") {
                        drip_kharif_othercrop_area4 = response.drip_kharif_othercrop_area4;
                    }

                    if (response.drip_kharif_othercrop_irri_area4 != null && response.drip_kharif_othercrop_irri_area4 != "") {
                        drip_kharif_othercrop_irri_area4 = response.drip_kharif_othercrop_irri_area4;
                    }

                    if (response.drip_kharif_othercrop_water_req4 != null && response.drip_kharif_othercrop_water_req4 != "") {
                        drip_kharif_othercrop_water_req4 = response.drip_kharif_othercrop_water_req4;
                    }


                    var s11 = "drip_kharif_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_kharif_othercrop_name4 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.drip_kharif_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_kharif_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_irri_area4" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" value="' + drip_kharif_othercrop_irri_area4 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_water_req4" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal"value="' + drip_kharif_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Drip_crp4').html(ass);
                    $('#drip_kharif_othercrop_name4').hide();
                    $('#Drip_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("drip_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_area4").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_water_req4").disabled = true;

                    //}
                }
                if (response.drip_kharif_othercrop_name5 != null && response.drip_kharif_othercrop_name5 != "null" && response.drip_kharif_othercrop_name5 != "") {

                    var drip_kharif_othercrop_area5 = "";
                    var drip_kharif_othercrop_irri_area5 = "";
                    var drip_kharif_othercrop_water_req5 = "";
                    if (response.drip_kharif_othercrop_area5 != null && response.drip_kharif_othercrop_area5 != "") {
                        drip_kharif_othercrop_area5 = response.drip_kharif_othercrop_area5;
                    }

                    if (response.drip_kharif_othercrop_irri_area5 != null && response.drip_kharif_othercrop_irri_area5 != "") {
                        drip_kharif_othercrop_irri_area5 = response.drip_kharif_othercrop_irri_area5;
                    }

                    if (response.drip_kharif_othercrop_water_req5 != null && response.drip_kharif_othercrop_water_req5 != "") {
                        drip_kharif_othercrop_water_req5 = response.drip_kharif_othercrop_water_req5;
                    }

                    var s11 = "drip_kharif_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_kharif_othercrop_name5 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.drip_kharif_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Kharif_WaterRequire()" id="drip_kharif_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_kharif_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_irri_area5" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal" value="' + drip_kharif_othercrop_irri_area5 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_kharif_othercrop_water_req5" onkeyup="Drip_Kharif_WaterRequire()" class="form-control decimal"value="' + drip_kharif_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Drip_crp5').html(ass);
                    $('#drip_kharif_othercrop_name5').hide();
                    $('#Drip_crp5').show();
                    $('#Drip_Kharif_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("drip_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_area5").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("drip_kharif_othercrop_water_req5").disabled = true;
                    //}
                }



                //rabi
                if (response.drip_rabi_othercrop_name1 == null || response.drip_rabi_othercrop_name1 == "") {
                    add_Drip_rabi_count1 = 1;
                }
                else {
                    add_Drip_rabi_count = add_Drip_rabi_count + 1;
                }
                if (response.drip_rabi_othercrop_name2 == null || response.drip_rabi_othercrop_name2 == "") {
                    add_Drip_rabi_count2 = 2;
                }
                else {
                    add_Drip_rabi_count = add_Drip_rabi_count + 1;
                }

                if (response.drip_rabi_othercrop_name3 == null || response.drip_rabi_othercrop_name3 == "") {
                    add_Drip_rabi_count3 = 3;
                } else {
                    add_Drip_rabi_count = add_Drip_rabi_count + 1;
                }

                if (response.drip_rabi_othercrop_name4 == null || response.drip_rabi_othercrop_name4 == "") {
                    add_Drip_rabi_count4 = 4;
                } else {
                    add_Drip_rabi_count = add_Drip_rabi_count + 1;
                }

                if (response.drip_rabi_othercrop_name5 == null || response.drip_rabi_othercrop_name5 == "") {
                    add_Drip_rabi_count5 = 5;
                }
                else {
                    add_Drip_rabi_count = add_Drip_rabi_count + 1;
                }
                if (add_Drip_rabi_count == 5) {

                    $('#Drip_Rabi_AddCrop').hide();
                }

                if (response.drip_rabi_othercrop_name1 != null && response.drip_rabi_othercrop_name1 != "null" && response.drip_rabi_othercrop_name1 != "") {

                    var drip_rabi_othercrop_area1 = "";
                    var drip_rabi_othercrop_irri_area1 = "";
                    var drip_rabi_othercrop_water_req1 = "";
                    if (response.drip_rabi_othercrop_area1 != null && response.drip_rabi_othercrop_area1 != "") {
                        drip_rabi_othercrop_area1 = response.drip_rabi_othercrop_area1;
                    }

                    if (response.drip_rabi_othercrop_irri_area1 != null && response.drip_rabi_othercrop_irri_area1 != "") {
                        drip_rabi_othercrop_irri_area1 = response.drip_rabi_othercrop_irri_area1;
                    }

                    if (response.drip_rabi_othercrop_water_req1 != null && response.drip_rabi_othercrop_water_req1 != "") {
                        drip_rabi_othercrop_water_req1 = response.drip_rabi_othercrop_water_req1;
                    }





                    var s11 = "drip_rabi_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_rabi_othercrop_name1 + '<a href="#Filter_drip" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="drip_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.drip_rabi_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_rabi_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_irri_area1" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" value="' + drip_rabi_othercrop_irri_area1 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_water_req1" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal"value="' + drip_rabi_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Drip_Rabi_crp1').html(ass);
                    $('#drip_rabi_othercrop_name1').hide();

                    $('#Drip_Rabi_crp1').show();


                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_area1").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_water_req1").disabled = true;

                    //}
                }

                if (response.drip_rabi_othercrop_name2 != null && response.drip_rabi_othercrop_name2 != "null" && response.drip_rabi_othercrop_name2 != "") {

                    var drip_rabi_othercrop_area2 = "";
                    var drip_rabi_othercrop_irri_area2 = "";
                    var drip_rabi_othercrop_water_req2 = "";
                    if (response.drip_rabi_othercrop_area2 != null && response.drip_rabi_othercrop_area2 != "") {
                        drip_rabi_othercrop_area2 = response.drip_rabi_othercrop_area2;
                    }

                    if (response.drip_rabi_othercrop_irri_area2 != null && response.drip_rabi_othercrop_irri_area2 != "") {
                        drip_rabi_othercrop_irri_area2 = response.drip_rabi_othercrop_irri_area2;
                    }

                    if (response.drip_rabi_othercrop_water_req2 != null && response.drip_rabi_othercrop_water_req2 != "") {
                        drip_rabi_othercrop_water_req2 = response.drip_rabi_othercrop_water_req2;
                    }

                    var s11 = "drip_rabi_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_rabi_othercrop_name2 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.drip_rabi_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_rabi_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_irri_area2" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" value="' + drip_rabi_othercrop_irri_area2 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_water_req2" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal"value="' + drip_rabi_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';
                    $('#Drip_Rabi_crp2').show();
                    $('#Drip_Rabi_crp2').html(ass);
                    $('#drip_rabi_othercrop_name2').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("drip_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_area2").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_water_req2").disabled = true;


                    //}
                }
                if (response.drip_rabi_othercrop_name3 != null && response.drip_rabi_othercrop_name3 != "null" && response.drip_rabi_othercrop_name3 != "") {

                    var drip_rabi_othercrop_area3 = "";
                    var drip_rabi_othercrop_irri_area3 = "";
                    var drip_rabi_othercrop_water_req3 = "";
                    if (response.drip_rabi_othercrop_area3 != null && response.drip_rabi_othercrop_area3 != "") {
                        drip_rabi_othercrop_area3 = response.drip_rabi_othercrop_area3;
                    }

                    if (response.drip_rabi_othercrop_irri_area3 != null && response.drip_rabi_othercrop_irri_area3 != "") {
                        drip_rabi_othercrop_irri_area3 = response.drip_rabi_othercrop_irri_area3;
                    }

                    if (response.drip_rabi_othercrop_water_req3 != null && response.drip_rabi_othercrop_water_req3 != "") {
                        drip_rabi_othercrop_water_req3 = response.drip_rabi_othercrop_water_req3;
                    }

                    var s11 = "drip_rabi_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_rabi_othercrop_name3 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.drip_rabi_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_rabi_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_irri_area3" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" value="' + drip_rabi_othercrop_irri_area3 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_water_req3" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal"value="' + drip_rabi_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Drip_Rabi_crp3').show();
                    $('#Drip_Rabi_crp3').html(ass);
                    $('#drip_rabi_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("drip_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_area3").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_water_req3").disabled = true;



                    //}
                }
                if (response.drip_rabi_othercrop_name4 != null && response.drip_rabi_othercrop_name4 != "null" && response.drip_rabi_othercrop_name4 != "") {

                    var drip_rabi_othercrop_area4 = "";
                    var drip_rabi_othercrop_irri_area4 = "";
                    var drip_rabi_othercrop_water_req4 = "";
                    if (response.drip_rabi_othercrop_area4 != null && response.drip_rabi_othercrop_area4 != "") {
                        drip_rabi_othercrop_area4 = response.drip_rabi_othercrop_area4;
                    }

                    if (response.drip_rabi_othercrop_irri_area4 != null && response.drip_rabi_othercrop_irri_area4 != "") {
                        drip_rabi_othercrop_irri_area4 = response.drip_rabi_othercrop_irri_area4;
                    }

                    if (response.drip_rabi_othercrop_water_req4 != null && response.drip_rabi_othercrop_water_req4 != "") {
                        drip_rabi_othercrop_water_req4 = response.drip_rabi_othercrop_water_req4;
                    }

                    var s11 = "drip_rabi_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_rabi_othercrop_name4 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.drip_rabi_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_rabi_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_irri_area4" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" value="' + drip_rabi_othercrop_irri_area4 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_water_req4" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal"value="' + drip_rabi_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Drip_Rabi_crp4').show();

                    $('#Drip_Rabi_crp4').html(ass);
                    $('#drip_rabi_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("drip_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_area4").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.drip_rabi_othercrop_name5 != null && response.drip_rabi_othercrop_name5 != "null" && response.drip_rabi_othercrop_name5 != "") {

                    var drip_rabi_othercrop_area5 = "";
                    var drip_rabi_othercrop_irri_area5 = "";
                    var drip_rabi_othercrop_water_req5 = "";
                    if (response.drip_rabi_othercrop_area5 != null && response.drip_rabi_othercrop_area5 != "") {
                        drip_rabi_othercrop_area5 = response.drip_rabi_othercrop_area5;
                    }

                    if (response.drip_rabi_othercrop_irri_area5 != null && response.drip_rabi_othercrop_irri_area5 != "") {
                        drip_rabi_othercrop_irri_area5 = response.drip_rabi_othercrop_irri_area5;
                    }

                    if (response.drip_rabi_othercrop_water_req5 != null && response.drip_rabi_othercrop_water_req5 != "") {
                        drip_rabi_othercrop_water_req5 = response.drip_rabi_othercrop_water_req5;
                    }




                    var s11 = "drip_rabi_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_rabi_othercrop_name5 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.drip_rabi_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Rabi_WaterRequire()" id="drip_rabi_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_rabi_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_irri_area5" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal" value="' + drip_rabi_othercrop_irri_area5 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_rabi_othercrop_water_req5" onkeyup="Drip_Rabi_WaterRequire()" class="form-control decimal"value="' + drip_rabi_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Drip_Rabi_crp5').show();
                    $('#Drip_Rabi_crp5').html(ass);

                    $('#drip_rabi_othercrop_name5').hide();

                    $('#Drip_Rabi_AddCrop').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_area5").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("drip_rabi_othercrop_water_req5").disabled = true;

                    //}
                }



                //Summer

                if (response.drip_summer_othercrop_name1 == null || response.drip_summer_othercrop_name1 == "") {
                    add_Drip_summer_count1 = 1;
                }
                else {
                    add_Drip_summer_count = add_Drip_summer_count + 1;
                }

                if (response.drip_summer_othercrop_name2 == null || response.drip_summer_othercrop_name2 == "") {
                    add_Drip_summer_count2 = 2;
                }
                else {
                    add_Drip_summer_count = add_Drip_summer_count + 1;
                }
                if (response.drip_summer_othercrop_name3 == null || response.drip_summer_othercrop_name3 == "") {
                    add_Drip_summer_count3 = 3;
                }
                else {
                    add_Drip_summer_count = add_Drip_summer_count + 1;
                }

                if (response.drip_summer_othercrop_name4 == null || response.drip_summer_othercrop_name4 == "") {
                    add_Drip_summer_count4 = 4;
                }
                else {
                    add_Drip_summer_count = add_Drip_summer_count + 1;
                }

                if (response.drip_summer_othercrop_name5 == null || response.drip_summer_othercrop_name5 == "") {
                    add_Drip_summer_count5 = 5;
                }
                else {
                    add_Drip_summer_count = add_Drip_summer_count + 1;
                }
                if (add_Drip_summer_count == 5) {

                    $('#Drip_Summer_AddCrop').hide();
                }

                if (response.drip_summer_othercrop_name1 != null && response.drip_summer_othercrop_name1 != "null" && response.drip_summer_othercrop_name1 != "") {

                    var drip_summer_othercrop_area1 = "";
                    var drip_summer_othercrop_irri_area1 = "";
                    var drip_summer_othercrop_water_req1 = "";
                    if (response.drip_summer_othercrop_area1 != null && response.drip_summer_othercrop_area1 != "") {
                        drip_summer_othercrop_area1 = response.drip_summer_othercrop_area1;
                    }

                    if (response.drip_summer_othercrop_irri_area1 != null && response.drip_summer_othercrop_irri_area1 != "") {
                        drip_summer_othercrop_irri_area1 = response.drip_summer_othercrop_irri_area1;
                    }

                    if (response.drip_summer_othercrop_water_req1 != null && response.drip_summer_othercrop_water_req1 != "") {
                        drip_summer_othercrop_water_req1 = response.drip_summer_othercrop_water_req1;
                    }
                    var s11 = "drip_summer_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_summer_othercrop_name1 + '<a href="#Filter_drip" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="drip_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.drip_summer_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_summer_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_irri_area1" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" value="' + drip_summer_othercrop_irri_area1 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_water_req1" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal"value="' + drip_summer_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Drip_Summer_crp1').html(ass);

                    $('#Drip_Summer_crp1').show();

                    $('#drip_summer_othercrop_name1').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("drip_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_area1").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_water_req1").disabled = true;


                    //}
                }

                if (response.drip_summer_othercrop_name2 != null && response.drip_summer_othercrop_name2 != "null" && response.drip_summer_othercrop_name2 != "") {
                    var drip_summer_othercrop_area2 = "";
                    var drip_summer_othercrop_irri_area2 = "";
                    var drip_summer_othercrop_water_req2 = "";
                    if (response.drip_summer_othercrop_area2 != null && response.drip_summer_othercrop_area2 != "") {
                        drip_summer_othercrop_area2 = response.drip_summer_othercrop_area2;
                    }

                    if (response.drip_summer_othercrop_irri_area2 != null && response.drip_summer_othercrop_irri_area2 != "") {
                        drip_summer_othercrop_irri_area2 = response.drip_summer_othercrop_irri_area2;
                    }

                    if (response.drip_summer_othercrop_water_req2 != null && response.drip_summer_othercrop_water_req2 != "") {
                        drip_summer_othercrop_water_req2 = response.drip_summer_othercrop_water_req2;
                    }
                    var s11 = "drip_summer_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_summer_othercrop_name2 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.drip_summer_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_summer_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_irri_area2" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" value="' + drip_summer_othercrop_irri_area2 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_water_req2" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal"value="' + drip_summer_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Drip_Summer_crp2').html(ass);
                    $('#Drip_Summer_crp2').show();

                    $('#drip_summer_othercrop_name2').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_area2").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_water_req2").disabled = true;


                    //}
                }
                if (response.drip_summer_othercrop_name3 != null && response.drip_summer_othercrop_name3 != "null" && response.drip_summer_othercrop_name3 != "") {
                    var drip_summer_othercrop_area3 = "";
                    var drip_summer_othercrop_irri_area3 = "";
                    var drip_summer_othercrop_water_req3 = "";
                    if (response.drip_summer_othercrop_area3 != null && response.drip_summer_othercrop_area3 != "") {
                        drip_summer_othercrop_area3 = response.drip_summer_othercrop_area3;
                    }

                    if (response.drip_summer_othercrop_irri_area3 != null && response.drip_summer_othercrop_irri_area3 != "") {
                        drip_summer_othercrop_irri_area3 = response.drip_summer_othercrop_irri_area3;
                    }

                    if (response.drip_summer_othercrop_water_req3 != null && response.drip_summer_othercrop_water_req3 != "") {
                        drip_summer_othercrop_water_req3 = response.drip_summer_othercrop_water_req3;
                    }
                    var s11 = "drip_summer_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_summer_othercrop_name3 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.drip_summer_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_summer_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_irri_area3" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" value="' + drip_summer_othercrop_irri_area3 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_water_req3" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal"value="' + drip_summer_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Drip_Summer_crp3').show();

                    $('#Drip_Summer_crp3').html(ass);
                    $('#drip_summer_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_summer_othercrop_name3").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_area3").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.drip_summer_othercrop_name4 != null && response.drip_summer_othercrop_name4 != "null" && response.drip_summer_othercrop_name4 != "") {
                    var drip_summer_othercrop_area4 = "";
                    var drip_summer_othercrop_irri_area4 = "";
                    var drip_summer_othercrop_water_req4 = "";
                    if (response.drip_summer_othercrop_area4 != null && response.drip_summer_othercrop_area4 != "") {
                        drip_summer_othercrop_area4 = response.drip_summer_othercrop_area4;
                    }

                    if (response.drip_summer_othercrop_irri_area4 != null && response.drip_summer_othercrop_irri_area4 != "") {
                        drip_summer_othercrop_irri_area4 = response.drip_summer_othercrop_irri_area4;
                    }

                    if (response.drip_summer_othercrop_water_req4 != null && response.drip_summer_othercrop_water_req4 != "") {
                        drip_summer_othercrop_water_req4 = response.drip_summer_othercrop_water_req4;
                    }
                    var s11 = "drip_summer_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_summer_othercrop_name4 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.drip_summer_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_summer_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_irri_area4" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" value="' + drip_summer_othercrop_irri_area4 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_water_req4" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal"value="' + drip_summer_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Drip_Summer_crp4').show();

                    $('#Drip_Summer_crp4').html(ass);
                    $('#drip_summer_othercrop_name4').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.drip_summer_othercrop_name5 != null && response.drip_summer_othercrop_name5 != "null" && response.drip_summer_othercrop_name5 != "") {

                    var drip_summer_othercrop_area5 = "";
                    var drip_summer_othercrop_irri_area5 = "";
                    var drip_summer_othercrop_water_req5 = "";
                    if (response.drip_summer_othercrop_area5 != null && response.drip_summer_othercrop_area5 != "") {
                        drip_summer_othercrop_area5 = response.drip_summer_othercrop_area5;
                    }

                    if (response.drip_summer_othercrop_irri_area5 != null && response.drip_summer_othercrop_irri_area5 != "") {
                        drip_summer_othercrop_irri_area5 = response.drip_summer_othercrop_irri_area5;
                    }

                    if (response.drip_summer_othercrop_water_req5 != null && response.drip_summer_othercrop_water_req5 != "") {
                        drip_summer_othercrop_water_req5 = response.drip_summer_othercrop_water_req5;
                    }

                    var s11 = "drip_summer_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.drip_summer_othercrop_name5 + '<a href="#Filter_drip" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Drip_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="drip_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.drip_summer_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Drip_Crop_WaterRequire()" id="drip_summer_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + drip_summer_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_irri_area5" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal" value="' + drip_summer_othercrop_irri_area5 + '" placeholder="Area proposed for Drip Irrigation(ha)" title="Area proposed for Drip Irrigation(ha)" />' +
                        '</li><li><input type="text" id="drip_summer_othercrop_water_req5" onkeyup="Drip_Crop_WaterRequire()" class="form-control decimal"value="' + drip_summer_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Drip_Summer_crp5').show();
                    $('#Drip_Summer_crp5').html(ass);
                    $('#drip_summer_othercrop_name5').hide();
                    $('#Drip_Summer_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("drip_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_area5").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("drip_summer_othercrop_water_req5").disabled = true;

                    //}
                }


                $('#drip_summer_horticulture_crop_area').val(response.drip_summer_horticulture_crop_area);
                $('#drip_summer_horticulture_irri_area').val(response.drip_summer_horticulture_irri_area);
                if (response.drip_summer_horticulture_water_req != null && response.drip_summer_horticulture_water_req != "") {
                    $('#drip_summer_horticulture_water_req').val(response.drip_summer_horticulture_water_req);
                }
                else {
                    $('#drip_summer_horticulture_water_req').val(470);
                }
                $('#drip_summer_horticulture_waterdemand').text(response.drip_summer_horticulture_waterdemand);
                $('#drip_summer_horticulture_netwater_waterdemand').text(response.drip_summer_horticulture_netwater_waterdemand);
                $('#drip_summer_horticulture_reduction_gw_demand').text(response.drip_summer_horticulture_reduction_gw_demand);







                $('#drip_approx_estimated_cost').val(response.drip_approx_estimated_cost);
                $('#drip_cost_type').val(response.drip_cost_type);

                $('#drip_kharif_paddy_crop_area').val(response.drip_kharif_paddy_crop_area);
                $('#Drip_kharif_Paddy_FundingSource').val(response.drip_kharif_paddy_fundingsource);
                $('#drip_kharif_paddy_irri_area').val(response.drip_kharif_paddy_irri_area);

                $('#drip_kharif_ragi_crop_area').val(response.drip_kharif_ragi_crop_area);
                $('#Drip_kharif_Ragi_FundingSource').val(response.drip_kharif_ragi_fundingsource);
                $('#drip_kharif_ragi_irri_area').val(response.drip_kharif_ragi_irri_area);

                $('#drip_kharif_groundnut_crop_area').val(response.drip_kharif_groundnut_crop_area);
                $('#Drip_kharif_GroundNut_FundingSource').val(response.drip_kharif_groundnut_fundingsource);
                $('#drip_kharif_groundnut_irri_area').val(response.drip_kharif_groundnut_irri_area);


                $('#drip_kharif_sugarcane_crop_area').val(response.drip_kharif_sugarcane_crop_area);
                $('#Drip_kharif_Sugarcane_FundingSource').val(response.drip_kharif_sugarcane_fundingsource);
                $('#drip_kharif_sugarcane_irri_area').val(response.drip_kharif_sugarcane_irri_area);

                $('#drip_kharif_tomoto_crop_area').val(response.drip_kharif_tomoto_crop_area);
                $('#Drip_kharif_Tomoto_FundingSource').val(response.drip_kharif_tomoto_fundingsource);
                $('#drip_kharif_tomoto_irri_area').val(response.drip_kharif_tomoto_irri_area);

                //$('#drip_kharif_cabbage_crop_area').val(response.drip_kharif_cabbage_crop_area);
                //$('#Drip_kharif_Cabbage_FundingSource').val(response.drip_kharif_cabbage_fundingsource);
                //$('#drip_kharif_cabbage_irri_area').val(response.drip_kharif_cabbage_irri_area);


                //$('#drip_kharif_beans_crop_area').val(response.drip_kharif_beans_crop_area);
                //$('#Drip_kharif_Beans_FundingSource').val(response.drip_kharif_beans_fundingsource);
                //$('#drip_kharif_beans_irri_area').val(response.drip_kharif_beans_irri_area);


                $('#drip_kharif_floriculture_crop_area').val(response.drip_kharif_floriculture_crop_area);
                $('#Drip_kharif_Floriculture_FundingSource').val(response.drip_kharif_floriculture_fundingsource);
                $('#drip_kharif_floriculture_irri_area').val(response.drip_kharif_floriculture_irri_area);


                $('#drip_kharif_sericulture_crop_area').val(response.drip_kharif_sericulture_crop_area);
                $('#Drip_kharif_Sericulture_FundingSource').val(response.drip_kharif_sericulture_fundingsource);
                $('#drip_kharif_sericulture_irri_area').val(response.drip_kharif_sericulture_irri_area);


                //$('#drip_kharif_cucumber_crop_area').val(response.drip_kharif_cucumber_crop_area);
                //$('#Drip_kharif_Cucmber_FundingSource').val(response.drip_kharif_cucumber_fundingsource);
                //$('#drip_kharif_cucumber_irri_area').val(response.drip_kharif_cucumber_irri_area);


                $('#drip_kharif_banana_crop_area').val(response.drip_kharif_banana_crop_area);
                $('#Drip_kharif_Banana_FundingSource').val(response.drip_kharif_banana_fundingsource);
                $('#drip_kharif_banana_irri_area').val(response.drip_kharif_banana_irri_area);


                $('#drip_kharif_fodder_crop_area').val(response.drip_kharif_fodder_crop_area);
                $('#Drip_kharif_Fodder_FundingSource').val(response.drip_kharif_fodder_fundingsource);
                $('#drip_kharif_fodder_irri_area').val(response.drip_kharif_fodder_irri_area);


                $('#drip_kharif_maize_crop_area').val(response.drip_kharif_maize_crop_area);
                $('#Drip_kharif_Maize_FundingSource').val(response.drip_kharif_maize_fundingsource);
                $('#drip_kharif_maize_irri_area').val(response.drip_kharif_maize_irri_area);


                //$('#drip_kharif_potato_crop_area').val(response.drip_kharif_potato_crop_area);
                //$('#Drip_kharif_Potato_FundingSource').val(response.drip_kharif_potato_fundingsource);
                //$('#drip_kharif_potato_irri_area').val(response.drip_kharif_potato_irri_area);


                $('#drip_kharif_chillies_crop_area').val(response.drip_kharif_chillies_crop_area);
                $('#Drip_kharif_Chillies_FundingSource').val(response.drip_kharif_chillies_fundingsource);
                $('#drip_kharif_chillies_irri_area').val(response.drip_kharif_chillies_irri_area);


                $('#drip_kharif_cotton_crop_area').val(response.drip_kharif_cotton_crop_area);
                $('#Drip_kharif_Cotton_FundingSource').val(response.drip_kharif_cotton_fundingsource);
                $('#drip_kharif_cotton_irri_area').val(response.drip_kharif_cotton_irri_area);


                $('#drip_kharif_melon_crop_area').val(response.drip_kharif_melon_crop_area);
                $('#Drip_kharif_Melon_FundingSource').val(response.drip_kharif_melon_fundingsource);
                $('#drip_kharif_melon_irri_area').val(response.drip_kharif_melon_irri_area);

                $('#drip_kharif_citrus_crop_area').val(response.drip_kharif_citrus_crop_area);
                $('#Drip_kharif_Citrus_FundingSource').val(response.drip_kharif_citrus_fundingsource);
                $('#drip_kharif_citrus_irri_area').val(response.drip_kharif_citrus_irri_area);


                //$('#drip_kharif_peanut_crop_area').val(response.drip_kharif_peanut_crop_area);
                //$('#Drip_kharif_Peanut_FundingSource').val(response.drip_kharif_peanut_fundingsource);
                //$('#drip_kharif_peanut_irri_area').val(response.drip_kharif_peanut_irri_area);


                $('#drip_kharif_horticulture_crop_area').val(response.drip_kharif_horticulture_crop_area);
                $('#Drip_kharif_Horticulture_FundingSource').val(response.drip_kharif_horticulture_fundingsource);
                $('#drip_kharif_horticulture_irri_area').val(response.drip_kharif_horticulture_irri_area);


                $('#drip_rabi_sericulture_crop_area').val(response.drip_rabi_sericulture_crop_area);
                $('#Drip_Rabi_Sericulture_FundingSource').val(response.drip_rabi_sericulture_fundingsource);
                $('#drip_rabi_sericulture_irri_area').val(response.drip_rabi_sericulture_irri_area);


                $('#drip_rabi_tomoto_crop_area').val(response.drip_rabi_tomoto_crop_area);
                $('#Drip_Rabi_Tomota_FundingSource').val(response.drip_rabi_tomoto_fundingsource);
                $('#drip_rabi_tomoto_irri_area').val(response.drip_rabi_tomoto_irri_area);


                //$('#drip_rabi_cabbage_crop_area').val(response.drip_rabi_cabbage_crop_area);
                //$('#Drip_Rabi_Cabbage_FundingSource').val(response.drip_rabi_cabbage_fundingsource);
                //$('#drip_rabi_cabbage_irri_area').val(response.drip_rabi_cabbage_irri_area);


                //$('#drip_rabi_beans_crop_area').val(response.drip_rabi_beans_crop_area);
                //$('#Drip_Rabi_Beans_FundingSource').val(response.drip_rabi_beans_fundingsource);
                //$('#drip_rabi_beans_irri_area').val(response.drip_rabi_beans_irri_area);


                $('#drip_rabi_floriculture_crop_area').val(response.drip_rabi_floriculture_crop_area);
                $('#Drip_Rabi_Floriculture_FundingSource').val(response.drip_rabi_floriculture_fundingsource);
                $('#drip_rabi_floriculture_irri_area').val(response.drip_rabi_floriculture_irri_area);


                //$('#drip_rabi_potato_crop_area').val(response.drip_rabi_potato_crop_area);
                //$('#Drip_Rabi_Potato_FundingSource').val(response.drip_rabi_potato_fundingsource);
                //$('#drip_rabi_potato_irri_area').val(response.drip_rabi_potato_irri_area);


                //$('#drip_rabi_cucumber_crop_area').val(response.drip_rabi_cucumber_crop_area);
                //$('#Drip_Rabi_Cucumber_FundingSource').val(response.drip_rabi_cucumber_fundingsource);
                //$('#drip_rabi_cucumber_irri_area').val(response.drip_rabi_cucumber_irri_area);


                $('#drip_rabi_ragi_crop_area').val(response.drip_rabi_ragi_crop_area);
                $('#Drip_Rabi_Ragi_FundingSource').val(response.drip_rabi_ragi_fundingsource);
                $('#drip_rabi_ragi_irri_area').val(response.drip_rabi_ragi_irri_area);


                $('#drip_rabi_sugarcane_crop_area').val(response.drip_rabi_sugarcane_crop_area);
                $('#Drip_Rabi_Sugarcane_FundingSource').val(response.drip_rabi_sugarcane_fundingsource);
                $('#drip_rabi_sugarcane_irri_area').val(response.drip_rabi_sugarcane_irri_area);


                $('#drip_rabi_maize_crop_area').val(response.drip_rabi_maize_crop_area);
                $('#Drip_Rabi_Maize_FundingSource').val(response.drip_rabi_maize_fundingsource);
                $('#drip_rabi_maize_irri_area').val(response.drip_rabi_maize_irri_area);


                $('#drip_rabi_fodder_crop_area').val(response.drip_rabi_fodder_crop_area);
                $('#Drip_Rabi_Fodder_FundingSource').val(response.drip_rabi_fodder_fundingsource);
                $('#drip_rabi_fodder_irri_area').val(response.drip_rabi_fodder_irri_area);


                $('#drip_rabi_paddy_crop_area').val(response.drip_rabi_paddy_crop_area);
                $('#Drip_Rabi_Paddy_FundingSource').val(response.drip_rabi_paddy_fundingsource);
                $('#drip_rabi_paddy_irri_area').val(response.drip_rabi_paddy_irri_area);


                $('#drip_rabi_alfalfa_crop_area').val(response.drip_rabi_alfalfa_crop_area);
                $('#Drip_Rabi_Alfalfa_FundingSource').val(response.drip_rabi_alfalfa_fundingsource);
                $('#drip_rabi_alfalfa_irri_area').val(response.drip_rabi_alfalfa_irri_area);


                //$('#drip_rabi_onion_crop_area').val(response.drip_rabi_onion_crop_area);
                //$('#Drip_Rabi_Onion_FundingSource').val(response.drip_rabi_onion_fundingsource);
                //$('#drip_rabi_onion_irri_area').val(response.drip_rabi_onion_irri_area);


                $('#drip_rabi_horticulture_crop_area').val(response.drip_rabi_horticulture_crop_area);
                $('#Drip_Rabi_Hortculture_FundingSource').val(response.drip_rabi_horticulture_fundingsource);
                $('#drip_rabi_horticulture_irri_area').val(response.drip_rabi_horticulture_irri_area);


                $('#drip_rabi_sunflower_crop_area').val(response.drip_rabi_sunflower_crop_area);
                $('#Drip_Rabi_Sunflower_FundingSource').val(response.drip_rabi_sunflower_fundingsource);
                $('#drip_rabi_sunflower_irri_area').val(response.drip_rabi_sunflower_irri_area);


                $('#drip_summer_sericulture_crop_area').val(response.drip_summer_sericulture_crop_area);
                $('#Drip_summer_Sericulture_FundingSource').val(response.drip_summer_sericulture_fundingsource);
                $('#drip_summer_sericulture_irri_area').val(response.drip_summer_sericulture_irri_area);


                $('#drip_summer_tomoto_crop_area').val(response.drip_summer_tomoto_crop_area);
                $('#Drip_summer_Tomota_FundingSource').val(response.drip_summer_tomoto_fundingsource);
                $('#drip_summer_tomoto_irri_area').val(response.drip_summer_tomoto_irri_area);


                //$('#drip_summer_cabbage_crop_area').val(response.drip_summer_cabbage_crop_area);
                //$('#Drip_summer_Cabbage_FundingSource').val(response.drip_summer_cabbage_fundingsource);
                //$('#drip_summer_cabbage_irri_area').val(response.drip_summer_cabbage_irri_area);


                //$('#drip_summer_beans_crop_area').val(response.drip_summer_beans_crop_area);
                //$('#Drip_summer_Beans_FundingSource').val(response.drip_summer_beans_fundingsource);
                //$('#drip_summer_beans_irri_area').val(response.drip_summer_beans_irri_area);


                $('#drip_summer_floriculture_crop_area').val(response.drip_summer_floriculture_crop_area);
                $('#Drip_summer_Floriculture_FundingSource').val(response.drip_summer_floriculture_fundingsource);
                $('#drip_summer_floriculture_irri_area').val(response.drip_summer_floriculture_irri_area);


                $('#drip_summer_maize_crop_area').val(response.drip_summer_maize_crop_area);
                $('#drip_summer_Maize_FundingSource').val(response.drip_summer_maize_fundingsource);
                $('#drip_summer_maize_irri_area').val(response.drip_summer_maize_irri_area);


                $('#drip_summer_fodder_crop_area').val(response.drip_summer_fodder_crop_area);
                $('#Drip_summer_Fodder_FundingSource').val(response.drip_summer_fodder_fundingsource);
                $('#drip_summer_fodder_irri_area').val(response.drip_summer_fodder_irri_area);


                $('#drip_summer_sugarcane_crop_area').val(response.drip_summer_sugarcane_crop_area);
                $('#Drip_summer_Sugarcane_FundingSource').val(response.drip_summer_sugarcane_fundingsource);
                $('#drip_summer_sugarcane_irri_area').val(response.drip_summer_sugarcane_irri_area);

                $('#TotalAnnual_Drip_Reduction').text(response.drip_annual_reduction_waterdemand);
                //total 
                $('#Drip_Kharif_Water_Demand').text(response.drip_kharif_total_waterdemand);
                $('#drip_kharif_total_drip_waterdemand').text(response.drip_kharif_total_drip_waterdemand);
                $('#drip_kharif_total_reduction_waterdemand').text(response.drip_kharif_total_reduction_waterdemand);

                $('#Drip_Rabi_Water_Demand').text(response.drip_rabi_total_waterdemand);
                $('#drip_rabi_total_rabi_waterdemand').text(response.drip_rabi_total_rabi_waterdemand);
                $('#drip_rabi_total_reduction_waterdemand').text(response.drip_rabi_total_reduction_waterdemand);

                $('#Drip_Crop_water_Demand').text(response.drip_summer_total_waterdemand);
                $('#drip_summer_total_summer_waterdemand').text(response.drip_summer_total_summer_waterdemand);
                $('#drip_summer_total_reduction_waterdemand').text(response.drip_summer_total_reduction_waterdemand);


                //new columns water requirement
                if (response.drip_kharif_paddy_water_req != null && response.drip_kharif_paddy_water_req != "") {
                    $('#drip_kharif_paddy_water_req').val(response.drip_kharif_paddy_water_req);
                }
                else {
                    $('#drip_kharif_paddy_water_req').val(1175);
                }

                if (response.drip_kharif_ragi_water_req != null && response.drip_kharif_ragi_water_req != "") {
                    $('#drip_kharif_ragi_water_req').val(response.drip_kharif_ragi_water_req);
                }
                else {
                    $('#drip_kharif_ragi_water_req').val(550);
                }


                if (response.drip_kharif_groundnut_water_req != null && response.drip_kharif_groundnut_water_req != "") {
                    $('#drip_kharif_groundnut_water_req').val(response.drip_kharif_groundnut_water_req);
                }
                else {
                    $('#drip_kharif_groundnut_water_req').val(525);
                }

                if (response.drip_kharif_sugarcane_water_req != null && response.drip_kharif_sugarcane_water_req != "") {
                    $('#drip_kharif_sugarcane_water_req').val(response.drip_kharif_sugarcane_water_req);
                }
                else {
                    $('#drip_kharif_sugarcane_water_req').val(2000);
                }

                if (response.drip_kharif_tomoto_water_req != null && response.drip_kharif_tomoto_water_req != "") {
                    $('#drip_kharif_tomoto_water_req').val(response.drip_kharif_tomoto_water_req);
                }
                else {
                    $('#drip_kharif_tomoto_water_req').val(500);
                }

                //if (response.drip_kharif_cabbage_water_req != null && response.drip_kharif_cabbage_water_req != "") {
                //    $('#drip_kharif_cabbage_water_req').val(response.drip_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#drip_kharif_cabbage_water_req').val(425);
                //}



                //if (response.drip_kharif_beans_water_req != null && response.drip_kharif_beans_water_req != "") {
                //    $('#drip_kharif_beans_water_req').val(response.drip_kharif_beans_water_req);
                //}
                //else {
                //    $('#drip_kharif_beans_water_req').val(425);
                //}

                if (response.drip_kharif_floriculture_water_req != null && response.drip_kharif_floriculture_water_req != "") {
                    $('#drip_kharif_floriculture_water_req').val(response.drip_kharif_floriculture_water_req);
                }
                else {
                    $('#drip_kharif_floriculture_water_req').val(1200);
                }

                if (response.drip_kharif_sericulture_water_req != null && response.drip_kharif_sericulture_water_req != "") {
                    $('#drip_kharif_sericulture_water_req').val(response.drip_kharif_sericulture_water_req);
                }
                else {
                    $('#drip_kharif_sericulture_water_req').val(1550);
                }

                //if (response.drip_kharif_cucumber_water_req != null && response.drip_kharif_cucumber_water_req != "") {
                //    $('#drip_kharif_cucumber_water_req').val(response.drip_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#drip_kharif_cucumber_water_req').val(400);
                //}


                if (response.drip_kharif_banana_water_req != null && response.drip_kharif_banana_water_req != "") {
                    $('#drip_kharif_banana_water_req').val(response.drip_kharif_banana_water_req);
                }
                else {
                    $('#drip_kharif_banana_water_req').val(1700);
                }


                if (response.drip_kharif_fodder_water_req != null && response.drip_kharif_fodder_water_req != "") {
                    $('#drip_kharif_fodder_water_req').val(response.drip_kharif_fodder_water_req);
                }
                else {
                    $('#drip_kharif_fodder_water_req').val(1400);
                }


                if (response.drip_kharif_maize_water_req != null && response.drip_kharif_maize_water_req != "") {
                    $('#drip_kharif_maize_water_req').val(response.drip_kharif_maize_water_req);
                }
                else {
                    $('#drip_kharif_maize_water_req').val(650);
                }


                //if (response.drip_kharif_potato_water_req != null && response.drip_kharif_potato_water_req != "") {
                //    $('#drip_kharif_potato_water_req').val(response.drip_kharif_potato_water_req);
                //}
                //else {
                //    $('#drip_kharif_potato_water_req').val(600);
                //}


                if (response.drip_kharif_chillies_water_req != null && response.drip_kharif_chillies_water_req != "") {
                    $('#drip_kharif_chillies_water_req').val(response.drip_kharif_chillies_water_req);
                }
                else {
                    $('#drip_kharif_chillies_water_req').val(230);
                }


                if (response.drip_kharif_cotton_water_req != null && response.drip_kharif_cotton_water_req != "") {
                    $('#drip_kharif_cotton_water_req').val(response.drip_kharif_cotton_water_req);
                }
                else {
                    $('#drip_kharif_cotton_water_req').val(1000);
                }
                if (response.drip_kharif_melon_water_req != null && response.drip_kharif_melon_water_req != "") {
                    $('#drip_kharif_melon_water_req').val(response.drip_kharif_melon_water_req);
                }
                else {
                    $('#drip_kharif_melon_water_req').val(500);
                }
                if (response.drip_kharif_citrus_water_req != null && response.drip_kharif_citrus_water_req != "") {
                    $('#drip_kharif_citrus_water_req').val(response.drip_kharif_citrus_water_req);
                }
                else {
                    $('#drip_kharif_citrus_water_req').val(1050);
                }
                //if (response.drip_kharif_peanut_water_req != null && response.drip_kharif_peanut_water_req != "") {
                //    $('#drip_kharif_peanut_water_req').val(response.drip_kharif_peanut_water_req);
                //}
                //else {
                //    $('#drip_kharif_peanut_water_req').val(600);
                //}
                if (response.drip_kharif_horticulture_water_req != null && response.drip_kharif_horticulture_water_req != "") {
                    $('#drip_kharif_horticulture_water_req').val(response.drip_kharif_horticulture_water_req);
                }
                else {
                    $('#drip_kharif_horticulture_water_req').val(470);
                }
                if (response.drip_rabi_sericulture_water_req != null && response.drip_rabi_sericulture_water_req != "") {
                    $('#drip_rabi_sericulture_water_req').val(response.drip_rabi_sericulture_water_req);
                }
                else {
                    $('#drip_rabi_sericulture_water_req').val(1550);
                }
                if (response.drip_rabi_tomoto_water_req != null && response.drip_rabi_tomoto_water_req != "") {
                    $('#drip_rabi_tomoto_water_req').val(response.drip_rabi_tomoto_water_req);
                }
                else {
                    $('#drip_rabi_tomoto_water_req').val(500);
                }
                //if (response.drip_rabi_cabbage_water_req != null && response.drip_rabi_cabbage_water_req != "") {
                //    $('#drip_rabi_cabbage_water_req').val(response.drip_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#drip_rabi_cabbage_water_req').val(425);
                //}
                //if (response.drip_rabi_beans_water_req != null && response.drip_rabi_beans_water_req != "") {
                //    $('#drip_rabi_beans_water_req').val(response.drip_rabi_beans_water_req);
                //}
                //else {
                //    $('#drip_rabi_beans_water_req').val(400);
                //}
                if (response.drip_rabi_floriculture_water_req != null && response.drip_rabi_floriculture_water_req != "") {
                    $('#drip_rabi_floriculture_water_req').val(response.drip_rabi_floriculture_water_req);
                }
                else {
                    $('#drip_rabi_floriculture_water_req').val(1200);
                }
                //if (response.drip_rabi_potato_water_req != null && response.drip_rabi_potato_water_req != "") {
                //    $('#drip_rabi_potato_water_req').val(response.drip_rabi_potato_water_req);
                //}
                //else {
                //    $('#drip_rabi_potato_water_req').val(600);
                //}
                //if (response.drip_rabi_cucumber_water_req != null && response.drip_rabi_cucumber_water_req != "") {
                //    $('#drip_rabi_cucumber_water_req').val(response.drip_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#drip_rabi_cucumber_water_req').val(400);
                //}
                if (response.drip_rabi_ragi_water_req != null && response.drip_rabi_ragi_water_req != "") {
                    $('#drip_rabi_ragi_water_req').val(response.drip_rabi_ragi_water_req);
                }
                else {
                    $('#drip_rabi_ragi_water_req').val(550);
                }
                if (response.drip_rabi_sugarcane_water_req != null && response.drip_rabi_sugarcane_water_req != "") {
                    $('#drip_rabi_sugarcane_water_req').val(response.drip_rabi_sugarcane_water_req);
                }
                else {
                    $('#drip_rabi_sugarcane_water_req').val(2000);
                }
                if (response.drip_rabi_maize_water_req != null && response.drip_rabi_maize_water_req != "") {
                    $('#drip_rabi_maize_water_req').val(response.drip_rabi_maize_water_req);
                }
                else {
                    $('#drip_rabi_maize_water_req').val(650);
                }
                if (response.drip_rabi_fodder_water_req != null && response.drip_rabi_fodder_water_req != "") {
                    $('#drip_rabi_fodder_water_req').val(response.drip_rabi_fodder_water_req);
                }
                else {
                    $('#drip_rabi_fodder_water_req').val(1400);
                }
                if (response.drip_rabi_paddy_water_req != null && response.drip_rabi_paddy_water_req != "") {
                    $('#drip_rabi_paddy_water_req').val(response.drip_rabi_paddy_water_req);
                }
                else {
                    $('#drip_rabi_paddy_water_req').val(1175);
                }
                if (response.drip_rabi_alfalfa_water_req != null && response.drip_rabi_alfalfa_water_req != "") {
                    $('#drip_rabi_alfalfa_water_req').val(response.drip_rabi_alfalfa_water_req);
                }
                else {
                    $('#drip_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.drip_rabi_onion_water_req != null && response.drip_rabi_onion_water_req != "") {
                //    $('#drip_rabi_onion_water_req').val(response.drip_rabi_onion_water_req);
                //}
                //else {
                //    $('#drip_rabi_onion_water_req').val(450);
                //}
                if (response.drip_rabi_horticulture_water_req != null && response.drip_rabi_horticulture_water_req != "") {
                    $('#drip_rabi_horticulture_water_req').val(response.drip_rabi_horticulture_water_req);
                }
                else {
                    $('#drip_rabi_horticulture_water_req').val(470);
                }
                if (response.drip_rabi_sunflower_water_req != null && response.drip_rabi_sunflower_water_req != "") {
                    $('#drip_rabi_sunflower_water_req').val(response.drip_rabi_sunflower_water_req);
                }
                else {
                    $('#drip_rabi_sunflower_water_req').val(800);
                }

                if (response.drip_summer_sericulture_water_req != null && response.drip_summer_sericulture_water_req != "") {
                    $('#drip_summer_sericulture_water_req').val(response.drip_summer_sericulture_water_req);
                }
                else {
                    $('#drip_summer_sericulture_water_req').val(1550);
                }
                if (response.drip_summer_tomoto_water_req != null && response.drip_summer_tomoto_water_req != "") {
                    $('#drip_summer_tomoto_water_req').val(response.drip_summer_tomoto_water_req);
                }
                else {
                    $('#drip_summer_tomoto_water_req').val(500);
                }
                //if (response.drip_summer_cabbage_water_req != null && response.drip_summer_cabbage_water_req != "") {
                //    $('#drip_summer_cabbage_water_req').val(response.drip_summer_cabbage_water_req);
                //}
                //else {
                //    $('#drip_summer_cabbage_water_req').val(425);
                //}
                //if (response.drip_summer_beans_water_req != null && response.drip_summer_beans_water_req != "") {
                //    $('#drip_summer_beans_water_req').val(response.drip_summer_beans_water_req);
                //}
                //else {
                //    $('#drip_summer_beans_water_req').val(400);
                //}
                if (response.drip_summer_floriculture_water_req != null && response.drip_summer_floriculture_water_req != "") {
                    $('#drip_summer_floriculture_water_req').val(response.drip_summer_floriculture_water_req);
                }
                else {
                    $('#drip_summer_floriculture_water_req').val(1200);
                }
                if (response.drip_summer_maize_water_req != null && response.drip_summer_maize_water_req != "") {
                    $('#drip_summer_maize_water_req').val(response.drip_summer_maize_water_req);
                }
                else {
                    $('#drip_summer_maize_water_req').val(650);
                }
                if (response.drip_summer_fodder_water_req != null && response.drip_summer_fodder_water_req != "") {
                    $('#drip_summer_fodder_water_req').val(response.drip_summer_fodder_water_req);
                }
                else {
                    $('#drip_summer_fodder_water_req').val(1400);
                }
                if (response.drip_summer_sugarcane_water_req != null && response.drip_summer_sugarcane_water_req != "") {
                    $('#drip_summer_sugarcane_water_req').val(response.drip_summer_sugarcane_water_req);
                }
                else {
                    $('#drip_summer_sugarcane_water_req').val(2000);
                }



                //other crops

                //$('#drip_kharif_othercrop_name').val(response.drip_kharif_othercrop_name);
                //$('#drip_kharif_othercrop_area').val(response.drip_kharif_othercrop_area);
                //$('#drip_kharif_othercrop_irri_area').val(response.drip_kharif_othercrop_irri_area);
                //$('#drip_kharif_othercrop_water_req').val(response.drip_kharif_othercrop_water_req);
                //$('#drip_kharif_othercrop_waterdemand').text(response.drip_kharif_othercrop_waterdemand);
                //$('#drip_kharif_othercrop_drip_waterdemand').text(response.drip_kharif_othercrop_drip_waterdemand);
                //$('#drip_kharif_othercrop_reduc_gw_demand').text(response.drip_kharif_othercrop_reduc_gw_demand);

                //$('#drip_rabi_othercrop_name').val(response.drip_rabi_othercrop_name);
                //$('#drip_rabi_othercrop_area').val(response.drip_rabi_othercrop_area);
                //$('#drip_rabi_othercrop_irri_area').val(response.drip_rabi_othercrop_irri_area);
                //$('#drip_rabi_othercrop_water_req').val(response.drip_rabi_othercrop_water_req);
                //$('#drip_rabi_othercrop_waterdemand').text(response.drip_rabi_othercrop_waterdemand);
                //$('#drip_rabi_othercrop_drip_waterdemand').text(response.drip_rabi_othercrop_drip_waterdemand);
                //$('#drip_rabi_othercrop_reduc_gw_demand').text(response.drip_rabi_othercrop_reduc_gw_demand);

                //$('#drip_summer_othercrop_name').val(response.drip_summer_othercrop_name);
                //$('#drip_summer_othercrop_area').val(response.drip_summer_othercrop_area);
                //$('#drip_summer_othercrop_irri_area').val(response.drip_summer_othercrop_irri_area);
                //$('#drip_summer_othercrop_water_req').val(response.drip_summer_othercrop_water_req);
                //$('#drip_summer_othyercrop_waterdemand').text(response.drip_summer_othyercrop_waterdemand);
                //$('#drip_summer_othercrop_drip_waterdemand').text(response.drip_summer_othercrop_drip_waterdemand);
                //$('#drip_summer_othercrop_reduc_gw_demand').text(response.drip_summer_othercrop_reduc_gw_demand);



            }
            else {

                add_Drip_kharif_count = 0;
                add_Drip_kharif_count1 = 1;
                add_Drip_kharif_count2 = 2;
                add_Drip_kharif_count3 = 3;
                add_Drip_kharif_count4 = 4;
                add_Drip_kharif_count5 = 5;

                add_Drip_rabi_count = 0;
                add_Drip_rabi_count1 = 1;
                add_Drip_rabi_count2 = 2;
                add_Drip_rabi_count3 = 3;
                add_Drip_rabi_count4 = 4;
                add_Drip_rabi_count5 = 5;

                add_Drip_summer_count = 0;
                add_Drip_summer_count1 = 1;
                add_Drip_summer_count2 = 2;
                add_Drip_summer_count3 = 3;
                add_Drip_summer_count4 = 4;
                add_Drip_summer_count5 = 5;

                $('#drip_summer_horticulture_water_req').val(470);


                //new columns water requirement
                $('#drip_kharif_paddy_water_req').val(1175);
                $('#drip_kharif_ragi_water_req').val(550);
                $('#drip_kharif_groundnut_water_req').val(525);
                $('#drip_kharif_sugarcane_water_req').val(2000);
                $('#drip_kharif_tomoto_water_req').val(500);
                //$('#drip_kharif_cabbage_water_req').val(425);
                //$('#drip_kharif_beans_water_req').val(425);
                $('#drip_kharif_floriculture_water_req').val(1200);
                $('#drip_kharif_sericulture_water_req').val(1550);
                //$('#drip_kharif_cucumber_water_req').val(400);
                $('#drip_kharif_banana_water_req').val(1700);
                $('#drip_kharif_fodder_water_req').val(1400);
                $('#drip_kharif_maize_water_req').val(650);
                //$('#drip_kharif_potato_water_req').val(600);
                $('#drip_kharif_chillies_water_req').val(230);
                $('#drip_kharif_cotton_water_req').val(1000);
                $('#drip_kharif_melon_water_req').val(500);
                $('#drip_kharif_citrus_water_req').val(1050);
                //$('#drip_kharif_peanut_water_req').val(600);
                $('#drip_kharif_horticulture_water_req').val(470);

                $('#drip_rabi_sericulture_water_req').val(1550);
                $('#drip_rabi_tomoto_water_req').val(500);
                //$('#drip_rabi_cabbage_water_req').val(425);
                //$('#drip_rabi_beans_water_req').val(400);
                $('#drip_rabi_floriculture_water_req').val(1200);
                //$('#drip_rabi_potato_water_req').val(600);
                //$('#drip_rabi_cucumber_water_req').val(400);
                $('#drip_rabi_ragi_water_req').val(550);
                $('#drip_rabi_sugarcane_water_req').val(2000);
                $('#drip_rabi_maize_water_req').val(650);
                $('#drip_rabi_fodder_water_req').val(1400);

                $('#drip_rabi_paddy_water_req').val(1175);
                $('#drip_rabi_alfalfa_water_req').val(1200);
                //$('#drip_rabi_onion_water_req').val(450);
                $('#drip_rabi_horticulture_water_req').val(470);
                $('#drip_rabi_sunflower_water_req').val(800);

                $('#drip_summer_sericulture_water_req').val(1550);
                $('#drip_summer_tomoto_water_req').val(500);
                //$('#drip_summer_cabbage_water_req').val(425);
                //$('#drip_summer_beans_water_req').val(400);
                $('#drip_summer_floriculture_water_req').val(1200);
                $('#drip_summer_maize_water_req').val(650);
                $('#drip_summer_fodder_water_req').val(1400);
                $('#drip_summer_sugarcane_water_req').val(2000);



            }

            Drip_Kharif_WaterRequire();
            Drip_Rabi_WaterRequire();
            Drip_Crop_WaterRequire();

        }
    });
}


var drip_kharif_paddy_crop_area = 0;
var drip_kharif_paddy_irri_area = 0;
var drip_kharif_paddy_fundingsource = 0;
var drip_kharif_paddy_waterdemand = 0;
var drip_kharif_paddy_drip_waterdemand = 0;
var drip_kharif_paddy_reduction_gw_demand = 0;


var drip_kharif_ragi_crop_area = 0;
var drip_kharif_ragi_irri_area = 0;
var drip_kharif_ragi_fundingsource = 0;
var drip_kharif_ragi_waterdemand = 0;
var drip_kharif_ragi_drip_waterdemand = 0;
var drip_kharif_ragi_reduction_gw_demand = 0;

var drip_kharif_groundnut_crop_area = 0;
var drip_kharif_groundnut_irri_area = 0;
var drip_kharif_groundnut_fundingsource = 0;
var drip_kharif_groundnut_waterdemand = 0;
var drip_kharif_groundnut_drip_waterdemand = 0;
var drip_kharif_groundnut_reduction_gw_demand = 0;

var drip_kharif_sugarcane_crop_area = 0;
var drip_kharif_sugarcane_irri_area = 0;
var drip_kharif_sugarcane_fundingsource = 0;
var drip_kharif_sugarcane_waterdemand = 0;
var drip_kharif_sugarcane_drip_waterdemand = 0;
var drip_kharif_sugarcane_reduction_gw_demand = 0;

var drip_kharif_tomoto_crop_area = 0;
var drip_kharif_tomoto_irri_area = 0;
var drip_kharif_tomoto_fundingsource = 0;
var drip_kharif_tomoto_waterdemand = 0;
var drip_kharif_tomoto_drip_waterdemand = 0;
var drip_kharif_tomoto_reduction_gw_demand = 0;

//var drip_kharif_cabbage_crop_area = 0;
//var drip_kharif_cabbage_irri_area = 0;
//var drip_kharif_cabbage_fundingsource = 0;
//var drip_kharif_cabbage_waterdemand = 0;
//var drip_kharif_cabbage_drip_waterdemand = 0;
//var drip_kharif_cabbage_reduction_gw_demand = 0;


//var drip_kharif_beans_crop_area = 0;
//var drip_kharif_beans_irri_area = 0;
//var drip_kharif_beans_fundingsource = 0;
//var drip_kharif_beans_waterdemand = 0;
//var drip_kharif_beans_drip_waterdemand = 0;
//var drip_kharif_beans_reduction_gw_demand = 0;


var drip_kharif_floriculture_crop_area = 0;
var drip_kharif_floriculture_irri_area = 0;
var drip_kharif_floriculture_fundingsource = 0;
var drip_kharif_floriculture_waterdemand = 0;
var drip_kharif_floriculture_drip_waterdemand = 0;
var drip_kharif_floriculture_reduction_gw_demand = 0;


var drip_kharif_sericulture_crop_area = 0;
var drip_kharif_sericulture_irri_area = 0;
var drip_kharif_sericulture_fundingsource = 0;
var drip_kharif_sericulture_waterdemand = 0;
var drip_kharif_sericulture_drip_waterdemand = 0;
var drip_kharif_sericulture_reduction_gw_demand = 0;


//var drip_kharif_cucumber_crop_area = 0;
//var drip_kharif_cucumber_irri_area = 0;
//var drip_kharif_cucumber_fundingsource = 0;
//var drip_kharif_cucumber_waterdemand = 0;
//var drip_kharif_cucumber_drip_waterdemand = 0;
//var drip_kharif_cucumber_reduction_gw_demand = 0;


var drip_kharif_banana_crop_area = 0;
var drip_kharif_banana_irri_area = 0;
var drip_kharif_banana_fundingsource = 0;
var drip_kharif_banana_waterdemand = 0;
var drip_kharif_banana_drip_waterdemand = 0;
var drip_kharif_banana_reduction_gw_demand = 0;


var drip_kharif_fodder_crop_area = 0;
var drip_kharif_fodder_irri_area = 0;
var drip_kharif_fodder_fundingsource = 0;
var drip_kharif_fodder_waterdemand = 0;
var drip_kharif_fodder_drip_waterdemand = 0;
var drip_kharif_fodder_reduction_gw_demand = 0;



var drip_kharif_maize_crop_area = 0;
var drip_kharif_maize_irri_area = 0;
var drip_kharif_maize_fundingsource = 0;
var drip_kharif_maize_waterdemand = 0;
var drip_kharif_maize_drip_waterdemand = 0;
var drip_kharif_maize_reduction_gw_demand = 0;


//var drip_kharif_potato_crop_area = 0;
//var drip_kharif_potato_irri_area = 0;
//var drip_kharif_potato_fundingsource = 0;
//var drip_kharif_potato_waterdemand = 0;
//var drip_kharif_potato_drip_waterdemand = 0;
//var drip_kharif_potato_reduction_gw_demand = 0;


var drip_kharif_chillies_crop_area = 0;
var drip_kharif_chillies_irri_area = 0;
var drip_kharif_chillies_fundingsource = 0;
var drip_kharif_chillies_waterdemand = 0;
var drip_kharif_chillies_drip_waterdemand = 0;
var drip_kharif_chillies_reduction_gw_demand = 0;


var drip_kharif_cotton_crop_area = 0;
var drip_kharif_cotton_irri_area = 0;
var drip_kharif_cotton_fundingsource = 0;
var drip_kharif_cotton_waterdemand = 0;
var drip_kharif_cotton_drip_waterdemand = 0;
var drip_kharif_cotton_reduction_gw_demand = 0;


var drip_kharif_melon_crop_area = 0;
var drip_kharif_melon_irri_area = 0;
var drip_kharif_melon_fundingsource = 0;
var drip_kharif_melon_waterdemand = 0;
var drip_kharif_melon_drip_waterdemand = 0;
var drip_kharif_melon_reduction_gw_demand = 0;

var drip_kharif_citrus_crop_area = 0;
var drip_kharif_citrus_fundingsource = 0;
var drip_kharif_citrus_irri_area = 0;
var drip_kharif_citrus_waterdemand = 0;
var drip_kharif_citrus_drip_waterdemand = 0;
var drip_kharif_citrus_reduction_gw_demand = 0;




//var drip_kharif_peanut_crop_area = 0;
//var drip_kharif_peanut_irri_area = 0;
//var drip_kharif_peanut_fundingsource = 0;
//var drip_kharif_peanut_waterdemand = 0;
//var drip_kharif_peanut_drip_waterdemand = 0;
//var drip_kharif_peanut_reduction_gw_demand = 0;


var drip_kharif_horticulture_crop_area = 0;
var drip_kharif_horticulture_irri_area = 0;
var drip_kharif_horticulture_fundingsource = 0;
var drip_kharif_horticulture_waterdemand = 0;
var drip_kharif_horticulture_drip_waterdemand = 0;
var drip_kharif_horticulture_reduction_gw_demand = 0;

//var drip_kharif_othercrop_waterdemand = 0;
//var drip_kharif_othercrop_drip_waterdemand = 0;
//var drip_kharif_othercrop_reduc_gw_demand = 0;





var drip_kharif_total_waterdemand = 0;
var drip_kharif_total_drip_waterdemand = 0;
var drip_kharif_total_reduction_waterdemand = 0;
var Drip_Drip_Total_Water_Demand_for_Kharif_Crops = 0;




var drip_kharif_othercrop_area1 = 0;
var drip_kharif_othercrop_irri_area1 = 0;
var drip_kharif_othercrop_water_req1 = 0;
var drip_kharif_othercrop_waterdemand1 = 0;
var drip_kharif_othercrop_drip_waterdemand1 = 0;
var drip_kharif_othercrop_reduc_gw_demand1 = 0;


var drip_kharif_othercrop_area2 = 0;
var drip_kharif_othercrop_irri_area2 = 0;
var drip_kharif_othercrop_water_req2 = 0;
var drip_kharif_othercrop_waterdemand2 = 0;
var drip_kharif_othercrop_drip_waterdemand2 = 0;
var drip_kharif_othercrop_reduc_gw_demand2 = 0;


var drip_kharif_othercrop_area3 = 0;
var drip_kharif_othercrop_irri_area3 = 0;
var drip_kharif_othercrop_water_req3 = 0;
var drip_kharif_othercrop_waterdemand3 = 0;
var drip_kharif_othercrop_drip_waterdemand3 = 0;
var drip_kharif_othercrop_reduc_gw_demand3 = 0;


var drip_kharif_othercrop_area4 = 0;
var drip_kharif_othercrop_irri_area4 = 0;
var drip_kharif_othercrop_water_req4 = 0;
var drip_kharif_othercrop_waterdemand4 = 0;
var drip_kharif_othercrop_drip_waterdemand4 = 0;
var drip_kharif_othercrop_reduc_gw_demand4 = 0;


var drip_kharif_othercrop_area5 = 0;
var drip_kharif_othercrop_irri_area5 = 0;
var drip_kharif_othercrop_water_req5 = 0;
var drip_kharif_othercrop_waterdemand5 = 0;
var drip_kharif_othercrop_drip_waterdemand5 = 0;
var drip_kharif_othercrop_reduc_gw_demand5 = 0;




function Drip_Kharif_WaterRequire() {

    drip_kharif_paddy_crop_area = 0;
    drip_kharif_paddy_irri_area = 0;
    drip_kharif_paddy_fundingsource = 0;
    drip_kharif_paddy_waterdemand = 0;
    drip_kharif_paddy_drip_waterdemand = 0;
    drip_kharif_paddy_reduction_gw_demand = 0;


    drip_kharif_ragi_crop_area = 0;
    drip_kharif_ragi_irri_area = 0;
    drip_kharif_ragi_fundingsource = 0;
    drip_kharif_ragi_waterdemand = 0;
    drip_kharif_ragi_drip_waterdemand = 0;
    drip_kharif_ragi_reduction_gw_demand = 0;

    drip_kharif_groundnut_crop_area = 0;
    drip_kharif_groundnut_irri_area = 0;
    drip_kharif_groundnut_fundingsource = 0;
    drip_kharif_groundnut_waterdemand = 0;
    drip_kharif_groundnut_drip_waterdemand = 0;
    drip_kharif_groundnut_reduction_gw_demand = 0;

    drip_kharif_sugarcane_crop_area = 0;
    drip_kharif_sugarcane_irri_area = 0;
    drip_kharif_sugarcane_fundingsource = 0;
    drip_kharif_sugarcane_waterdemand = 0;
    drip_kharif_sugarcane_drip_waterdemand = 0;
    drip_kharif_sugarcane_reduction_gw_demand = 0;

    drip_kharif_tomoto_crop_area = 0;
    drip_kharif_tomoto_irri_area = 0;
    drip_kharif_tomoto_fundingsource = 0;
    drip_kharif_tomoto_waterdemand = 0;
    drip_kharif_tomoto_drip_waterdemand = 0;
    drip_kharif_tomoto_reduction_gw_demand = 0;

    //drip_kharif_cabbage_crop_area = 0;
    //drip_kharif_cabbage_irri_area = 0;
    //drip_kharif_cabbage_fundingsource = 0;
    //drip_kharif_cabbage_waterdemand = 0;
    //drip_kharif_cabbage_drip_waterdemand = 0;
    //drip_kharif_cabbage_reduction_gw_demand = 0;


    //drip_kharif_beans_crop_area = 0;
    //drip_kharif_beans_irri_area = 0;
    //drip_kharif_beans_fundingsource = 0;
    //drip_kharif_beans_waterdemand = 0;
    //drip_kharif_beans_drip_waterdemand = 0;
    //drip_kharif_beans_reduction_gw_demand = 0;


    drip_kharif_floriculture_crop_area = 0;
    drip_kharif_floriculture_irri_area = 0;
    drip_kharif_floriculture_fundingsource = 0;
    drip_kharif_floriculture_waterdemand = 0;
    drip_kharif_floriculture_drip_waterdemand = 0;
    drip_kharif_floriculture_reduction_gw_demand = 0;


    drip_kharif_sericulture_crop_area = 0;
    drip_kharif_sericulture_irri_area = 0;
    drip_kharif_sericulture_fundingsource = 0;
    drip_kharif_sericulture_waterdemand = 0;
    drip_kharif_sericulture_drip_waterdemand = 0;
    drip_kharif_sericulture_reduction_gw_demand = 0;


    //drip_kharif_cucumber_crop_area = 0;
    //drip_kharif_cucumber_irri_area = 0;
    //drip_kharif_cucumber_fundingsource = 0;
    //drip_kharif_cucumber_waterdemand = 0;
    //drip_kharif_cucumber_drip_waterdemand = 0;
    //drip_kharif_cucumber_reduction_gw_demand = 0;


    drip_kharif_banana_crop_area = 0;
    drip_kharif_banana_irri_area = 0;
    drip_kharif_banana_fundingsource = 0;
    drip_kharif_banana_waterdemand = 0;
    drip_kharif_banana_drip_waterdemand = 0;
    drip_kharif_banana_reduction_gw_demand = 0;


    drip_kharif_fodder_crop_area = 0;
    drip_kharif_fodder_irri_area = 0;
    drip_kharif_fodder_fundingsource = 0;
    drip_kharif_fodder_waterdemand = 0;
    drip_kharif_fodder_drip_waterdemand = 0;
    drip_kharif_fodder_reduction_gw_demand = 0;



    drip_kharif_maize_crop_area = 0;
    drip_kharif_maize_irri_area = 0;
    drip_kharif_maize_fundingsource = 0;
    drip_kharif_maize_waterdemand = 0;
    drip_kharif_maize_drip_waterdemand = 0;
    drip_kharif_maize_reduction_gw_demand = 0;


    //drip_kharif_potato_crop_area = 0;
    //drip_kharif_potato_irri_area = 0;
    //drip_kharif_potato_fundingsource = 0;
    //drip_kharif_potato_waterdemand = 0;
    //drip_kharif_potato_drip_waterdemand = 0;
    //drip_kharif_potato_reduction_gw_demand = 0;


    drip_kharif_chillies_crop_area = 0;
    drip_kharif_chillies_irri_area = 0;
    drip_kharif_chillies_fundingsource = 0;
    drip_kharif_chillies_waterdemand = 0;
    drip_kharif_chillies_drip_waterdemand = 0;
    drip_kharif_chillies_reduction_gw_demand = 0;


    drip_kharif_cotton_crop_area = 0;
    drip_kharif_cotton_irri_area = 0;
    drip_kharif_cotton_fundingsource = 0;
    drip_kharif_cotton_waterdemand = 0;
    drip_kharif_cotton_drip_waterdemand = 0;
    drip_kharif_cotton_reduction_gw_demand = 0;


    drip_kharif_melon_crop_area = 0;
    drip_kharif_melon_irri_area = 0;
    drip_kharif_melon_fundingsource = 0;
    drip_kharif_melon_waterdemand = 0;
    drip_kharif_melon_drip_waterdemand = 0;
    drip_kharif_melon_reduction_gw_demand = 0;

    drip_kharif_citrus_crop_area = 0;
    drip_kharif_citrus_fundingsource = 0;
    drip_kharif_citrus_irri_area = 0;
    drip_kharif_citrus_waterdemand = 0;
    drip_kharif_citrus_drip_waterdemand = 0;
    drip_kharif_citrus_reduction_gw_demand = 0;




    //drip_kharif_peanut_crop_area = 0;
    //drip_kharif_peanut_irri_area = 0;
    //drip_kharif_peanut_fundingsource = 0;
    //drip_kharif_peanut_waterdemand = 0;
    //drip_kharif_peanut_drip_waterdemand = 0;
    //drip_kharif_peanut_reduction_gw_demand = 0;


    drip_kharif_horticulture_crop_area = 0;
    drip_kharif_horticulture_irri_area = 0;
    drip_kharif_horticulture_fundingsource = 0;
    drip_kharif_horticulture_waterdemand = 0;
    drip_kharif_horticulture_drip_waterdemand = 0;
    drip_kharif_horticulture_reduction_gw_demand = 0;

    //drip_kharif_othercrop_waterdemand = 0;
    //drip_kharif_othercrop_drip_waterdemand = 0;
    //drip_kharif_othercrop_reduc_gw_demand = 0;


    drip_kharif_total_waterdemand = 0;
    drip_kharif_total_drip_waterdemand = 0;
    drip_kharif_total_reduction_waterdemand = 0;

    Drip_Total_Water_Demand_for_Kharif_Crops = 0;


    drip_kharif_othercrop_area1 = 0;
    drip_kharif_othercrop_irri_area1 = 0;
    drip_kharif_othercrop_water_req1 = 0;
    drip_kharif_othercrop_waterdemand1 = 0;
    drip_kharif_othercrop_drip_waterdemand1 = 0;
    drip_kharif_othercrop_reduc_gw_demand1 = 0;


    drip_kharif_othercrop_area2 = 0;
    drip_kharif_othercrop_irri_area2 = 0;
    drip_kharif_othercrop_water_req2 = 0;
    drip_kharif_othercrop_waterdemand2 = 0;
    drip_kharif_othercrop_drip_waterdemand2 = 0;
    drip_kharif_othercrop_reduc_gw_demand2 = 0;


    drip_kharif_othercrop_area3 = 0;
    drip_kharif_othercrop_irri_area3 = 0;
    drip_kharif_othercrop_water_req3 = 0;
    drip_kharif_othercrop_waterdemand3 = 0;
    drip_kharif_othercrop_drip_waterdemand3 = 0;
    drip_kharif_othercrop_reduc_gw_demand3 = 0;


    drip_kharif_othercrop_area4 = 0;
    drip_kharif_othercrop_irri_area4 = 0;
    drip_kharif_othercrop_water_req4 = 0;
    drip_kharif_othercrop_waterdemand4 = 0;
    drip_kharif_othercrop_drip_waterdemand4 = 0;
    drip_kharif_othercrop_reduc_gw_demand4 = 0;


    drip_kharif_othercrop_area5 = 0;
    drip_kharif_othercrop_irri_area5 = 0;
    drip_kharif_othercrop_water_req5 = 0;
    drip_kharif_othercrop_waterdemand5 = 0;
    drip_kharif_othercrop_drip_waterdemand5 = 0;
    drip_kharif_othercrop_reduc_gw_demand5 = 0;
    // Other

    var drip_kharif_othercrop_area1 = $('#drip_kharif_othercrop_area1').val();
    if (typeof drip_kharif_othercrop_area1 == 'undefined') {
        drip_kharif_othercrop_area1 = 0;
    }
    var drip_kharif_othercrop_irri_area1 = $('#drip_kharif_othercrop_irri_area1').val();
    if (typeof drip_kharif_othercrop_irri_area1 == 'undefined') {
        drip_kharif_othercrop_irri_area1 = 0;
    }
    var drip_kharif_othercrop_water_req1 = $('#drip_kharif_othercrop_water_req1').val();
    if (typeof drip_kharif_othercrop_water_req1 == 'undefined') {
        drip_kharif_othercrop_water_req1 = 0;
    }

    if (drip_kharif_othercrop_area1 != "") {

        if (drip_kharif_othercrop_water_req1 != "") {
            drip_kharif_othercrop_waterdemand1 = parseFloat(drip_kharif_othercrop_area1) * parseFloat(drip_kharif_othercrop_water_req1) * 0.001;
        } else {
            drip_kharif_othercrop_waterdemand1 = parseFloat(drip_kharif_othercrop_area1) * 0 * 0.001;
            drip_kharif_othercrop_water_req1 = 0;
        }
        //drip_kharif_othercrop_waterdemand1 = parseFloat(drip_kharif_othercrop_area1) * drip_kharif_othercrop_water_req1 * 0.001;

        if (drip_kharif_othercrop_irri_area1 == "") {
            drip_kharif_othercrop_irri_area1 = 0;
        }
        drip_kharif_othercrop_drip_waterdemand1 = ((parseFloat(drip_kharif_othercrop_area1) - parseFloat(drip_kharif_othercrop_irri_area1)) * parseFloat(drip_kharif_othercrop_water_req1) * 0.001) + (parseFloat(drip_kharif_othercrop_irri_area1) * parseFloat(drip_kharif_othercrop_water_req1) * (1 - 40 / 100) * 0.001);

        drip_kharif_othercrop_reduc_gw_demand1 = drip_kharif_othercrop_waterdemand1 - drip_kharif_othercrop_drip_waterdemand1;
        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_othercrop_waterdemand1 + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_othercrop_drip_waterdemand1;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_othercrop_reduc_gw_demand1;
        //Kharif_Paddy_SavingValue

    }

    var drip_kharif_othercrop_area2 = $('#drip_kharif_othercrop_area2').val();
    if (typeof drip_kharif_othercrop_area2 == 'undefined') {
        drip_kharif_othercrop_area2 = 0;
    }
    var drip_kharif_othercrop_irri_area2 = $('#drip_kharif_othercrop_irri_area2').val();
    if (typeof drip_kharif_othercrop_irri_area2 == 'undefined') {
        drip_kharif_othercrop_irri_area2 = 0;
    }
    var drip_kharif_othercrop_water_req2 = $('#drip_kharif_othercrop_water_req2').val();
    if (typeof drip_kharif_othercrop_water_req2 == 'undefined') {
        drip_kharif_othercrop_water_req2 = 0;
    }
    if (drip_kharif_othercrop_area2 != "") {

        if (drip_kharif_othercrop_water_req2 != "") {
            drip_kharif_othercrop_waterdemand2 = parseFloat(drip_kharif_othercrop_area2) * parseFloat(drip_kharif_othercrop_water_req2) * 0.001;
        } else {
            drip_kharif_othercrop_waterdemand2 = parseFloat(drip_kharif_othercrop_area2) * 0 * 0.001;
            drip_kharif_othercrop_water_req2 = 0;
        }
        //drip_kharif_othercrop_waterdemand2 = parseFloat(drip_kharif_othercrop_area2) * drip_kharif_othercrop_water_req2 * 0.001;

        if (drip_kharif_othercrop_irri_area2 == "") {
            drip_kharif_othercrop_irri_area2 = 0;
        }
        drip_kharif_othercrop_drip_waterdemand2 = ((parseFloat(drip_kharif_othercrop_area2) - parseFloat(drip_kharif_othercrop_irri_area2)) * parseFloat(drip_kharif_othercrop_water_req2) * 0.001) + (parseFloat(drip_kharif_othercrop_irri_area2) * parseFloat(drip_kharif_othercrop_water_req2) * (1 - 40 / 100) * 0.001);

        drip_kharif_othercrop_reduc_gw_demand2 = drip_kharif_othercrop_waterdemand2 - drip_kharif_othercrop_drip_waterdemand2;
        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_othercrop_waterdemand2 + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_othercrop_drip_waterdemand2;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_othercrop_reduc_gw_demand2;
        //Kharif_Paddy_SavingValue

    }

    var drip_kharif_othercrop_area3 = $('#drip_kharif_othercrop_area3').val();
    if (typeof drip_kharif_othercrop_area3 == 'undefined') {
        drip_kharif_othercrop_area3 = 0;
    }
    var drip_kharif_othercrop_irri_area3 = $('#drip_kharif_othercrop_irri_area3').val();
    if (typeof drip_kharif_othercrop_irri_area3 == 'undefined') {
        drip_kharif_othercrop_irri_area3 = 0;
    }
    var drip_kharif_othercrop_water_req3 = $('#drip_kharif_othercrop_water_req3').val();
    if (typeof drip_kharif_othercrop_water_req3 == 'undefined') {
        drip_kharif_othercrop_water_req3 = 0;
    }
    if (drip_kharif_othercrop_area3 != "") {

        if (drip_kharif_othercrop_water_req3 != "") {
            drip_kharif_othercrop_waterdemand3 = parseFloat(drip_kharif_othercrop_area3) * parseFloat(drip_kharif_othercrop_water_req3) * 0.001;
        } else {
            drip_kharif_othercrop_waterdemand3 = parseFloat(drip_kharif_othercrop_area3) * 0 * 0.001;
            drip_kharif_othercrop_water_req3 = 0;
        }
        //drip_kharif_othercrop_waterdemand3 = parseFloat(drip_kharif_othercrop_area3) * drip_kharif_othercrop_water_req3 * 0.001;

        if (drip_kharif_othercrop_irri_area3 == "") {
            drip_kharif_othercrop_irri_area3 = 0;
        }
        drip_kharif_othercrop_drip_waterdemand3 = ((parseFloat(drip_kharif_othercrop_area3) - parseFloat(drip_kharif_othercrop_irri_area3)) * parseFloat(drip_kharif_othercrop_water_req3) * 0.001) + (parseFloat(drip_kharif_othercrop_irri_area3) * parseFloat(drip_kharif_othercrop_water_req3) * (1 - 40 / 100) * 0.001);

        drip_kharif_othercrop_reduc_gw_demand3 = drip_kharif_othercrop_waterdemand3 - drip_kharif_othercrop_drip_waterdemand3;
        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_othercrop_waterdemand3 + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_othercrop_drip_waterdemand3;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_othercrop_reduc_gw_demand3;
        //Kharif_Paddy_SavingValue

    }

    var drip_kharif_othercrop_area4 = $('#drip_kharif_othercrop_area4').val();
    if (typeof drip_kharif_othercrop_area4 == 'undefined') {
        drip_kharif_othercrop_area4 = 0;
    }
    var drip_kharif_othercrop_irri_area4 = $('#drip_kharif_othercrop_irri_area4').val();
    if (typeof drip_kharif_othercrop_irri_area4 == 'undefined') {
        drip_kharif_othercrop_irri_area4 = 0;
    }
    var drip_kharif_othercrop_water_req4 = $('#drip_kharif_othercrop_water_req4').val();
    if (typeof drip_kharif_othercrop_water_req4 == 'undefined') {
        drip_kharif_othercrop_water_req4 = 0;
    }
    if (drip_kharif_othercrop_area4 != "") {

        if (drip_kharif_othercrop_water_req4 != "") {
            drip_kharif_othercrop_waterdemand4 = parseFloat(drip_kharif_othercrop_area4) * parseFloat(drip_kharif_othercrop_water_req4) * 0.001;
        } else {
            drip_kharif_othercrop_waterdemand4 = parseFloat(drip_kharif_othercrop_area4) * 0 * 0.001;
            drip_kharif_othercrop_water_req4 = 0;
        }
        //drip_kharif_othercrop_waterdemand4 = parseFloat(drip_kharif_othercrop_area4) * drip_kharif_othercrop_water_req4 * 0.001;

        if (drip_kharif_othercrop_irri_area4 == "") {
            drip_kharif_othercrop_irri_area4 = 0;
        }
        drip_kharif_othercrop_drip_waterdemand4 = ((parseFloat(drip_kharif_othercrop_area4) - parseFloat(drip_kharif_othercrop_irri_area4)) * parseFloat(drip_kharif_othercrop_water_req4) * 0.001) + (parseFloat(drip_kharif_othercrop_irri_area4) * parseFloat(drip_kharif_othercrop_water_req4) * (1 - 40 / 100) * 0.001);

        drip_kharif_othercrop_reduc_gw_demand4 = drip_kharif_othercrop_waterdemand4 - drip_kharif_othercrop_drip_waterdemand4;
        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_othercrop_waterdemand4 + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_othercrop_drip_waterdemand4;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_othercrop_reduc_gw_demand4;
        //Kharif_Paddy_SavingValue

    }

    var drip_kharif_othercrop_area5 = $('#drip_kharif_othercrop_area5').val();
    if (typeof drip_kharif_othercrop_area5 == 'undefined') {
        drip_kharif_othercrop_area5 = 0;
    }
    var drip_kharif_othercrop_irri_area5 = $('#drip_kharif_othercrop_irri_area5').val();
    if (typeof drip_kharif_othercrop_irri_area5 == 'undefined') {
        drip_kharif_othercrop_irri_area5 = 0;
    }
    var drip_kharif_othercrop_water_req5 = $('#drip_kharif_othercrop_water_req5').val();
    if (typeof drip_kharif_othercrop_water_req5 == 'undefined') {
        drip_kharif_othercrop_water_req5 = 0;
    }
    if (drip_kharif_othercrop_area5 != "") {

        if (drip_kharif_othercrop_water_req5 != "") {
            drip_kharif_othercrop_waterdemand5 = parseFloat(drip_kharif_othercrop_area5) * parseFloat(drip_kharif_othercrop_water_req5) * 0.001;
        } else {
            drip_kharif_othercrop_waterdemand5 = parseFloat(drip_kharif_othercrop_area5) * 0 * 0.001;
            drip_kharif_othercrop_water_req5 = 0;
        }
        //drip_kharif_othercrop_waterdemand5 = parseFloat(drip_kharif_othercrop_area5) * drip_kharif_othercrop_water_req5 * 0.001;

        if (drip_kharif_othercrop_irri_area5 == "") {
            drip_kharif_othercrop_irri_area5 = 0;
        }
        drip_kharif_othercrop_drip_waterdemand5 = ((parseFloat(drip_kharif_othercrop_area5) - parseFloat(drip_kharif_othercrop_irri_area5)) * parseFloat(drip_kharif_othercrop_water_req5) * 0.001) + (parseFloat(drip_kharif_othercrop_irri_area5) * parseFloat(drip_kharif_othercrop_water_req5) * (1 - 50 / 100) * 0.001);

        drip_kharif_othercrop_reduc_gw_demand5 = drip_kharif_othercrop_waterdemand5 - drip_kharif_othercrop_drip_waterdemand5;
        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_othercrop_waterdemand5 + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_othercrop_drip_waterdemand5;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_othercrop_reduc_gw_demand5;
        //Kharif_Paddy_SavingValue

    }




    //Paddy

    var drip_kharif_paddy_crop_area = $('#drip_kharif_paddy_crop_area').val();
    var drip_kharif_paddy_irri_area = $('#drip_kharif_paddy_irri_area').val();
    var drip_kharif_paddy_water_req = $('#drip_kharif_paddy_water_req').val();

    if (drip_kharif_paddy_crop_area != "") {

        if (drip_kharif_paddy_water_req != "") {
            drip_kharif_paddy_waterdemand = parseFloat(drip_kharif_paddy_crop_area) * parseFloat(drip_kharif_paddy_water_req) * 0.001;
        } else {
            drip_kharif_paddy_waterdemand = parseFloat(drip_kharif_paddy_crop_area) * 0 * 0.001;
            drip_kharif_paddy_water_req = 0;
        }
        //drip_kharif_paddy_waterdemand = parseFloat(drip_kharif_paddy_crop_area) * 1175 * 0.001;

        if (drip_kharif_paddy_irri_area == "") {
            drip_kharif_paddy_irri_area = 0;
        }
        drip_kharif_paddy_drip_waterdemand = ((parseFloat(drip_kharif_paddy_crop_area) - parseFloat(drip_kharif_paddy_irri_area)) * parseFloat(drip_kharif_paddy_water_req) * 0.001) + (parseFloat(drip_kharif_paddy_irri_area) * parseFloat(drip_kharif_paddy_water_req) * (1 - 40 / 100) * 0.001);

        drip_kharif_paddy_reduction_gw_demand = drip_kharif_paddy_waterdemand - drip_kharif_paddy_drip_waterdemand;
        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_paddy_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_paddy_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_paddy_reduction_gw_demand;
        //Kharif_Paddy_SavingValue

    }
    //Ragi



    var drip_kharif_ragi_crop_area = $('#drip_kharif_ragi_crop_area').val();
    var drip_kharif_ragi_irri_area = $('#drip_kharif_ragi_irri_area').val();
    var drip_kharif_ragi_water_req = $('#drip_kharif_ragi_water_req').val();
    if (drip_kharif_ragi_crop_area != "") {
        if (drip_kharif_ragi_water_req != "") {
            drip_kharif_ragi_waterdemand = parseFloat(drip_kharif_ragi_crop_area) * parseFloat(drip_kharif_ragi_water_req) * 0.001;
        } else {
            drip_kharif_ragi_waterdemand = parseFloat(drip_kharif_ragi_crop_area) * 0 * 0.001;
            drip_kharif_ragi_water_req = 0;
        }
        // drip_kharif_ragi_waterdemand = parseFloat(drip_kharif_ragi_crop_area) * 550 * 0.001;

        if (drip_kharif_ragi_irri_area == "") {
            drip_kharif_ragi_irri_area = 0;
        }

        drip_kharif_ragi_drip_waterdemand = ((parseFloat(drip_kharif_ragi_crop_area) - parseFloat(drip_kharif_ragi_irri_area)) * parseFloat(drip_kharif_ragi_water_req) * 0.001) + (parseFloat(drip_kharif_ragi_irri_area) * parseFloat(drip_kharif_ragi_water_req) * (1 - 40 / 100) * 0.001);
        drip_kharif_ragi_reduction_gw_demand = drip_kharif_ragi_waterdemand - drip_kharif_ragi_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_ragi_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_ragi_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_ragi_reduction_gw_demand;

    }


    //GroundNut


    var drip_kharif_groundnut_crop_area = $('#drip_kharif_groundnut_crop_area').val();
    var drip_kharif_groundnut_irri_area = $('#drip_kharif_groundnut_irri_area').val();
    var drip_kharif_groundnut_water_req = $('#drip_kharif_groundnut_water_req').val();
    if (drip_kharif_groundnut_crop_area != "") {
        if (drip_kharif_groundnut_water_req != "") {
            drip_kharif_groundnut_waterdemand = parseFloat(drip_kharif_groundnut_crop_area) * parseFloat(drip_kharif_groundnut_water_req) * 0.001;
        } else {
            drip_kharif_groundnut_waterdemand = parseFloat(drip_kharif_groundnut_crop_area) * 0 * 0.001;
            drip_kharif_groundnut_water_req = 0;
        }
        //drip_kharif_groundnut_waterdemand = parseFloat(drip_kharif_groundnut_crop_area) * 525 * 0.001;

        if (drip_kharif_groundnut_irri_area == "") {
            drip_kharif_groundnut_irri_area = 0;
        }
        drip_kharif_groundnut_drip_waterdemand = ((parseFloat(drip_kharif_groundnut_crop_area) - parseFloat(drip_kharif_groundnut_irri_area)) * parseFloat(drip_kharif_groundnut_water_req) * 0.001) + (parseFloat(drip_kharif_groundnut_irri_area) * parseFloat(drip_kharif_groundnut_water_req) * (1 - 40 / 100) * 0.001);
        drip_kharif_groundnut_reduction_gw_demand = drip_kharif_groundnut_waterdemand - drip_kharif_groundnut_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_groundnut_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_groundnut_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_groundnut_reduction_gw_demand;

    }


    //Sugarcane


    var drip_kharif_sugarcane_crop_area = $('#drip_kharif_sugarcane_crop_area').val();
    var drip_kharif_sugarcane_irri_area = $('#drip_kharif_sugarcane_irri_area').val();
    var drip_kharif_sugarcane_water_req = $('#drip_kharif_sugarcane_water_req').val();
    if (drip_kharif_sugarcane_crop_area != "") {
        if (drip_kharif_sugarcane_water_req != "") {
            drip_kharif_sugarcane_waterdemand = parseFloat(drip_kharif_sugarcane_crop_area) * parseFloat(drip_kharif_sugarcane_water_req) * 0.001;
        } else {
            drip_kharif_sugarcane_waterdemand = parseFloat(drip_kharif_sugarcane_crop_area) * 0 * 0.001;
            drip_kharif_sugarcane_water_req = 0;
        }
        // drip_kharif_sugarcane_waterdemand = parseFloat(drip_kharif_sugarcane_crop_area) * 2000 * 0.001;

        if (drip_kharif_sugarcane_irri_area == "") {
            drip_kharif_sugarcane_irri_area = 0;
        }

        drip_kharif_sugarcane_drip_waterdemand = ((parseFloat(drip_kharif_sugarcane_crop_area) - parseFloat(drip_kharif_sugarcane_irri_area) * parseFloat(drip_kharif_sugarcane_water_req) * 0.001) + parseFloat(drip_kharif_sugarcane_irri_area) * parseFloat(drip_kharif_sugarcane_water_req) * (1 - 40 / 100) * 0.001);

        drip_kharif_sugarcane_reduction_gw_demand = drip_kharif_sugarcane_waterdemand - drip_kharif_sugarcane_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_sugarcane_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_sugarcane_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_sugarcane_reduction_gw_demand;

    }


    //Tomato

    var drip_kharif_tomoto_crop_area = $('#drip_kharif_tomoto_crop_area').val();
    var drip_kharif_tomoto_irri_area = $('#drip_kharif_tomoto_irri_area').val();
    var drip_kharif_tomoto_water_req = $('#drip_kharif_tomoto_water_req').val();
    if (drip_kharif_tomoto_crop_area != "") {
        if (drip_kharif_tomoto_water_req != "") {
            drip_kharif_tomoto_waterdemand = parseFloat(drip_kharif_tomoto_crop_area) * parseFloat(drip_kharif_tomoto_water_req) * 0.001;
        } else {
            drip_kharif_tomoto_waterdemand = parseFloat(drip_kharif_tomoto_crop_area) * 0 * 0.001;
            drip_kharif_tomoto_water_req = 0;
        }
        //drip_kharif_tomoto_waterdemand = parseFloat(drip_kharif_tomoto_crop_area) * 600 * 0.001;

        if (drip_kharif_tomoto_irri_area == "") {
            drip_kharif_tomoto_irri_area = 0;
        }
        drip_kharif_tomoto_drip_waterdemand = ((parseFloat(drip_kharif_tomoto_crop_area) - parseFloat(drip_kharif_tomoto_irri_area)) * parseFloat(drip_kharif_tomoto_water_req) * 0.001) + (parseFloat(drip_kharif_tomoto_irri_area) * parseFloat(drip_kharif_tomoto_water_req) * (1 - 40 / 100) * 0.001);
        drip_kharif_tomoto_reduction_gw_demand = drip_kharif_tomoto_waterdemand - drip_kharif_tomoto_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_tomoto_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_tomoto_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_tomoto_reduction_gw_demand;

    }



    //Cabbage

    //var drip_kharif_cabbage_crop_area = $('#drip_kharif_cabbage_crop_area').val();
    //var drip_kharif_cabbage_irri_area = $('#drip_kharif_cabbage_irri_area').val();
    //var drip_kharif_cabbage_water_req = $('#drip_kharif_cabbage_water_req').val();
    //if (drip_kharif_cabbage_crop_area != "") {
    //    if (drip_kharif_cabbage_water_req != "") {
    //        drip_kharif_cabbage_waterdemand = parseFloat(drip_kharif_cabbage_crop_area) * parseFloat(drip_kharif_cabbage_water_req) * 0.001;
    //    } else {
    //        drip_kharif_cabbage_waterdemand = parseFloat(drip_kharif_cabbage_crop_area) * 0 * 0.001;
    //        drip_kharif_cabbage_water_req = 0;
    //    }
    //    //drip_kharif_cabbage_waterdemand = parseFloat(drip_kharif_cabbage_crop_area) * 425 * 0.001;

    //    if (drip_kharif_cabbage_irri_area == "") {
    //        drip_kharif_cabbage_irri_area = 0;
    //    }

    //    drip_kharif_cabbage_drip_waterdemand = ((parseFloat(drip_kharif_cabbage_crop_area) - parseFloat(drip_kharif_cabbage_irri_area)) * parseFloat(drip_kharif_cabbage_water_req) * 0.001) + (parseFloat(drip_kharif_cabbage_irri_area) * parseFloat(drip_kharif_cabbage_water_req) * (1 - 40 / 100) * 0.001);
    //    drip_kharif_cabbage_reduction_gw_demand = parseFloat(drip_kharif_cabbage_waterdemand) - parseFloat(drip_kharif_cabbage_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Kharif_Crops = parseFloat(drip_kharif_cabbage_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Kharif_Crops);
    //    drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand) + parseFloat(drip_kharif_cabbage_drip_waterdemand);
    //    drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_kharif_cabbage_reduction_gw_demand);

    //}




    //Beans

    //var drip_kharif_beans_crop_area = $('#drip_kharif_beans_crop_area').val();
    //var drip_kharif_beans_irri_area = $('#drip_kharif_beans_irri_area').val();
    //var drip_kharif_beans_water_req = $('#drip_kharif_beans_water_req').val();
    //if (drip_kharif_beans_crop_area != "") {
    //    if (drip_kharif_beans_water_req != "") {
    //        drip_kharif_beans_waterdemand = parseFloat(drip_kharif_beans_crop_area) * parseFloat(drip_kharif_beans_water_req) * 0.001;
    //    } else {
    //        drip_kharif_beans_waterdemand = parseFloat(drip_kharif_beans_crop_area) * 0 * 0.001;
    //        drip_kharif_beans_water_req = 0;
    //    }
    //    //drip_kharif_beans_waterdemand = parseFloat(drip_kharif_beans_crop_area) * 425 * 0.001;

    //    if (drip_kharif_beans_irri_area == "") {
    //        drip_kharif_beans_irri_area = 0;
    //    }
    //    drip_kharif_beans_drip_waterdemand = ((parseFloat(drip_kharif_beans_crop_area) - parseFloat(drip_kharif_beans_irri_area) * parseFloat(drip_kharif_beans_water_req) * 0.001) + parseFloat(drip_kharif_beans_irri_area) * parseFloat(drip_kharif_beans_water_req) * (1 - 40 / 100) * 0.001);
    //    drip_kharif_beans_reduction_gw_demand = parseFloat(drip_kharif_beans_waterdemand) - parseFloat(drip_kharif_beans_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Kharif_Crops = parseFloat(drip_kharif_beans_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Kharif_Crops);
    //    drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand) + parseFloat(drip_kharif_beans_drip_waterdemand);
    //    drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_kharif_beans_reduction_gw_demand);

    //}


    //Floriculture

    var drip_kharif_floriculture_crop_area = $('#drip_kharif_floriculture_crop_area').val();
    var drip_kharif_floriculture_irri_area = $('#drip_kharif_floriculture_irri_area').val();
    var drip_kharif_floriculture_water_req = $('#drip_kharif_floriculture_water_req').val();
    if (drip_kharif_floriculture_crop_area != "") {
        if (drip_kharif_floriculture_water_req != "") {
            drip_kharif_floriculture_waterdemand = parseFloat(drip_kharif_floriculture_crop_area) * parseFloat(drip_kharif_floriculture_water_req) * 0.001;
        } else {
            drip_kharif_floriculture_waterdemand = parseFloat(drip_kharif_floriculture_crop_area) * 0 * 0.001;
            drip_kharif_floriculture_water_req = 0;
        }
        // drip_kharif_floriculture_waterdemand = parseFloat(drip_kharif_floriculture_crop_area) * 1200 * 0.001;

        if (drip_kharif_floriculture_irri_area == "") {
            drip_kharif_floriculture_irri_area = 0;
        }
        drip_kharif_floriculture_drip_waterdemand = ((parseFloat(drip_kharif_floriculture_crop_area) - parseFloat(drip_kharif_floriculture_irri_area)) * parseFloat(drip_kharif_floriculture_water_req) * 0.001) + (parseFloat(drip_kharif_floriculture_irri_area) * parseFloat(drip_kharif_floriculture_water_req) * (1 - 40 / 100) * 0.001);
        drip_kharif_floriculture_reduction_gw_demand = drip_kharif_floriculture_waterdemand - drip_kharif_floriculture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_floriculture_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_floriculture_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_floriculture_reduction_gw_demand;

    }




    //Sericulture

    var drip_kharif_sericulture_crop_area = $('#drip_kharif_sericulture_crop_area').val();
    var drip_kharif_sericulture_irri_area = $('#drip_kharif_sericulture_irri_area').val();
    var drip_kharif_sericulture_water_req = $('#drip_kharif_sericulture_water_req').val();
    if (drip_kharif_sericulture_crop_area != "") {
        if (drip_kharif_sericulture_water_req != "") {
            drip_kharif_sericulture_waterdemand = parseFloat(drip_kharif_sericulture_crop_area) * parseFloat(drip_kharif_sericulture_water_req) * 0.001;
        } else {
            drip_kharif_sericulture_waterdemand = parseFloat(drip_kharif_sericulture_crop_area) * 0 * 0.001;
            drip_kharif_sericulture_water_req = 0;
        }
        // drip_kharif_sericulture_waterdemand = parseFloat(drip_kharif_sericulture_crop_area) * 1550 * 0.001;

        if (drip_kharif_sericulture_irri_area == "") {
            drip_kharif_sericulture_irri_area = 0;
        }

        drip_kharif_sericulture_drip_waterdemand = ((parseFloat(drip_kharif_sericulture_crop_area) - parseFloat(drip_kharif_sericulture_irri_area)) * parseFloat(drip_kharif_sericulture_water_req) * 0.001) + (parseFloat(drip_kharif_sericulture_irri_area) * parseFloat(drip_kharif_sericulture_water_req) * (1 - 40 / 100) * 0.001);
        drip_kharif_sericulture_reduction_gw_demand = drip_kharif_sericulture_waterdemand - drip_kharif_sericulture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_sericulture_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_sericulture_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_sericulture_reduction_gw_demand;

    }


    // Cucmber

    //var drip_kharif_cucumber_crop_area = $('#drip_kharif_cucumber_crop_area').val();
    //var drip_kharif_cucumber_irri_area = $('#drip_kharif_cucumber_irri_area').val();
    //var drip_kharif_cucumber_water_req = $('#drip_kharif_cucumber_water_req').val();
    //if (drip_kharif_cucumber_crop_area != "") {
    //    if (drip_kharif_cucumber_water_req != "") {
    //        drip_kharif_cucumber_waterdemand = parseFloat(drip_kharif_cucumber_crop_area) * parseFloat(drip_kharif_cucumber_water_req) * 0.001;
    //    } else {
    //        drip_kharif_cucumber_waterdemand = parseFloat(drip_kharif_cucumber_crop_area) * 0 * 0.001;
    //        drip_kharif_cucumber_water_req = 0;
    //    }
    //    //drip_kharif_cucumber_waterdemand = parseFloat(drip_kharif_cucumber_crop_area) * 400 * 0.001;

    //    if (drip_kharif_cucumber_irri_area == "") {
    //        drip_kharif_cucumber_irri_area = 0;
    //    }

    //    drip_kharif_cucumber_drip_waterdemand = ((parseFloat(drip_kharif_cucumber_crop_area) - parseFloat(drip_kharif_cucumber_irri_area)) * parseFloat(drip_kharif_cucumber_water_req) * 0.001) + (parseFloat(drip_kharif_cucumber_irri_area) * parseFloat(drip_kharif_cucumber_water_req) * (1 - 40 / 100) * 0.001);
    //    drip_kharif_cucumber_reduction_gw_demand = parseFloat(drip_kharif_cucumber_waterdemand) - parseFloat(drip_kharif_cucumber_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Kharif_Crops = parseFloat(drip_kharif_cucumber_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Kharif_Crops);
    //    drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand) + parseFloat(drip_kharif_cucumber_drip_waterdemand);
    //    drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_kharif_cucumber_reduction_gw_demand);

    //}

    //Banana

    var drip_kharif_banana_crop_area = $('#drip_kharif_banana_crop_area').val();
    var drip_kharif_banana_irri_area = $('#drip_kharif_banana_irri_area').val();
    var drip_kharif_banana_water_req = $('#drip_kharif_banana_water_req').val();
    if (drip_kharif_banana_crop_area != "") {
        if (drip_kharif_banana_water_req != "") {
            drip_kharif_banana_waterdemand = parseFloat(drip_kharif_banana_crop_area) * parseFloat(drip_kharif_banana_water_req) * 0.001;
        } else {
            drip_kharif_banana_waterdemand = parseFloat(drip_kharif_banana_crop_area) * 0 * 0.001;
            drip_kharif_banana_water_req = 0;
        }
        //drip_kharif_banana_waterdemand = parseFloat(drip_kharif_banana_crop_area) * 1700 * 0.001;

        if (drip_kharif_banana_irri_area == "") {
            drip_kharif_banana_irri_area = 0;
        }


        drip_kharif_banana_drip_waterdemand = ((parseFloat(drip_kharif_banana_crop_area) - parseFloat(drip_kharif_banana_irri_area)) * parseFloat(drip_kharif_banana_water_req) * 0.001)
            + (parseFloat(drip_kharif_banana_irri_area) * parseFloat(drip_kharif_banana_water_req) * (1 - 40 / 100) * 0.001);

        //drip_kharif_banana_drip_waterdemand = parseFloat(drip_kharif_banana_irri_area) * parseFloat(drip_kharif_banana_water_req) * 0.03 * 0.001;
        drip_kharif_banana_reduction_gw_demand = drip_kharif_banana_waterdemand - drip_kharif_banana_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_banana_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_banana_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_banana_reduction_gw_demand;

    }

    //Fodder

    var drip_kharif_fodder_crop_area = $('#drip_kharif_fodder_crop_area').val();
    var drip_kharif_fodder_irri_area = $('#drip_kharif_fodder_irri_area').val();
    var drip_kharif_fodder_water_req = $('#drip_kharif_fodder_water_req').val();
    if (drip_kharif_fodder_crop_area != "") {
        if (drip_kharif_fodder_water_req != "") {
            drip_kharif_fodder_waterdemand = parseFloat(drip_kharif_fodder_crop_area) * parseFloat(drip_kharif_fodder_water_req) * 0.001;
        } else {
            drip_kharif_fodder_waterdemand = parseFloat(drip_kharif_fodder_crop_area) * 0 * 0.001;
            drip_kharif_fodder_water_req = 0;
        }
        //drip_kharif_fodder_waterdemand = parseFloat(drip_kharif_fodder_crop_area) * 1400 * 0.001;

        if (drip_kharif_fodder_irri_area == "") {
            drip_kharif_fodder_irri_area = 0;
        }

        drip_kharif_fodder_drip_waterdemand = ((parseFloat(drip_kharif_fodder_crop_area) - parseFloat(drip_kharif_fodder_irri_area)) * parseFloat(drip_kharif_fodder_water_req) * 0.001)
            + (parseFloat(drip_kharif_fodder_irri_area) * parseFloat(drip_kharif_fodder_water_req) * (1 - 40 / 100) * 0.001);


        drip_kharif_fodder_reduction_gw_demand = drip_kharif_fodder_waterdemand - drip_kharif_fodder_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_fodder_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_fodder_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_fodder_reduction_gw_demand;

    }


    //Maize

    var drip_kharif_maize_crop_area = $('#drip_kharif_maize_crop_area').val();
    var drip_kharif_maize_irri_area = $('#drip_kharif_maize_irri_area').val();
    var drip_kharif_maize_water_req = $('#drip_kharif_maize_water_req').val();
    if (drip_kharif_maize_crop_area != "") {
        if (drip_kharif_maize_water_req != "") {
            drip_kharif_maize_waterdemand = parseFloat(drip_kharif_maize_crop_area) * parseFloat(drip_kharif_maize_water_req) * 0.001;
        } else {
            drip_kharif_maize_waterdemand = parseFloat(drip_kharif_maize_crop_area) * 0 * 0.001;
            drip_kharif_maize_water_req = 0;
        }


        if (drip_kharif_maize_irri_area == "") {
            drip_kharif_maize_irri_area = 0;
        }

        drip_kharif_maize_drip_waterdemand = ((parseFloat(drip_kharif_maize_crop_area) - parseFloat(drip_kharif_maize_irri_area)) * parseFloat(drip_kharif_maize_water_req) * 0.001)
            + (parseFloat(drip_kharif_maize_irri_area) * parseFloat(drip_kharif_maize_water_req) * (1 - 40 / 100) * 0.001);


        drip_kharif_maize_reduction_gw_demand = drip_kharif_maize_waterdemand - drip_kharif_maize_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_maize_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_maize_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_maize_reduction_gw_demand;

    }

    //Potato

    //var drip_kharif_potato_crop_area = $('#drip_kharif_potato_crop_area').val();
    //var drip_kharif_potato_irri_area = $('#drip_kharif_potato_irri_area').val();
    //var drip_kharif_potato_water_req = $('#drip_kharif_potato_water_req').val();
    //if (drip_kharif_potato_crop_area != "") {
    //    if (drip_kharif_potato_water_req != "") {
    //        drip_kharif_potato_waterdemand = parseFloat(drip_kharif_potato_crop_area) * parseFloat(drip_kharif_potato_water_req) * 0.001;
    //    } else {
    //        drip_kharif_potato_waterdemand = parseFloat(drip_kharif_potato_crop_area) * 0 * 0.001;
    //        drip_kharif_potato_water_req = 0;
    //    }
    //    // drip_kharif_potato_waterdemand = parseFloat(drip_kharif_potato_crop_area) * 600 * 0.001;

    //    if (drip_kharif_potato_irri_area == "") {
    //        drip_kharif_potato_irri_area = 0;
    //    }

    //    drip_kharif_potato_drip_waterdemand = ((parseFloat(drip_kharif_potato_crop_area) - parseFloat(drip_kharif_potato_irri_area)) * parseFloat(drip_kharif_potato_water_req) * 0.001)
    //        + (parseFloat(drip_kharif_potato_irri_area) * parseFloat(drip_kharif_potato_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_kharif_potato_drip_waterdemand = parseFloat(drip_kharif_potato_irri_area) * parseFloat(drip_kharif_potato_water_req) * 0.03 * 0.001;
    //    drip_kharif_potato_reduction_gw_demand = parseFloat(drip_kharif_potato_waterdemand) - parseFloat(drip_kharif_potato_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Kharif_Crops = parseFloat(drip_kharif_potato_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Kharif_Crops);
    //    drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand) + parseFloat(drip_kharif_potato_drip_waterdemand);
    //    drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_kharif_potato_reduction_gw_demand);

    //}

    //Chillies
    var drip_kharif_chillies_crop_area = $('#drip_kharif_chillies_crop_area').val();
    var drip_kharif_chillies_irri_area = $('#drip_kharif_chillies_irri_area').val();
    var drip_kharif_chillies_water_req = $('#drip_kharif_chillies_water_req').val();
    if (drip_kharif_chillies_crop_area != "") {
        if (drip_kharif_chillies_water_req != "") {
            drip_kharif_chillies_waterdemand = parseFloat(drip_kharif_chillies_crop_area) * parseFloat(drip_kharif_chillies_water_req) * 0.001;
        } else {
            drip_kharif_chillies_waterdemand = parseFloat(drip_kharif_chillies_crop_area) * 0 * 0.001;
            drip_kharif_chillies_water_req = 0;
        }
        //drip_kharif_chillies_waterdemand = parseFloat(drip_kharif_chillies_crop_area) * 230 * 0.001;

        if (drip_kharif_chillies_irri_area == "") {
            drip_kharif_chillies_irri_area = 0;
        }

        drip_kharif_chillies_drip_waterdemand = ((parseFloat(drip_kharif_chillies_crop_area) - parseFloat(drip_kharif_chillies_irri_area)) * parseFloat(drip_kharif_chillies_water_req) * 0.001)
            + (parseFloat(drip_kharif_chillies_irri_area) * parseFloat(drip_kharif_chillies_water_req) * (1 - 40 / 100) * 0.001);

        //drip_kharif_chillies_drip_waterdemand = parseFloat(drip_kharif_chillies_irri_area) * parseFloat(drip_kharif_chillies_water_req) * 0.03 * 0.001;
        drip_kharif_chillies_reduction_gw_demand = drip_kharif_chillies_waterdemand - drip_kharif_chillies_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_chillies_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_chillies_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_chillies_reduction_gw_demand;

    }


    //Cotton

    var drip_kharif_cotton_crop_area = $('#drip_kharif_cotton_crop_area').val();
    var drip_kharif_cotton_irri_area = $('#drip_kharif_cotton_irri_area').val();
    var drip_kharif_cotton_water_req = $('#drip_kharif_cotton_water_req').val();
    if (drip_kharif_cotton_crop_area != "") {
        if (drip_kharif_cotton_water_req != "") {
            drip_kharif_cotton_waterdemand = parseFloat(drip_kharif_cotton_crop_area) * parseFloat(drip_kharif_cotton_water_req) * 0.001;
        } else {
            drip_kharif_cotton_waterdemand = parseFloat(drip_kharif_cotton_crop_area) * 0 * 0.001;
            drip_kharif_cotton_water_req = 0;
        }
        //drip_kharif_cotton_waterdemand = parseFloat(drip_kharif_cotton_crop_area) * 1000 * 0.001;

        if (drip_kharif_cotton_irri_area == "") {
            drip_kharif_cotton_irri_area = 0;
        }

        
        drip_kharif_cotton_drip_waterdemand = ((parseFloat(drip_kharif_cotton_crop_area) - parseFloat(drip_kharif_cotton_irri_area)) * parseFloat(drip_kharif_cotton_water_req) * 0.001)
            + (parseFloat(drip_kharif_cotton_irri_area) * parseFloat(drip_kharif_cotton_water_req) * (1 - 40 / 100) * 0.001);

        // drip_kharif_cotton_drip_waterdemand = parseFloat(drip_kharif_cotton_irri_area) * parseFloat(drip_kharif_cotton_water_req) * 0.03 * 0.001;
        drip_kharif_cotton_reduction_gw_demand = drip_kharif_cotton_waterdemand - drip_kharif_cotton_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_cotton_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_cotton_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_cotton_reduction_gw_demand;

    }


    //Melon

    var drip_kharif_melon_crop_area = $('#drip_kharif_melon_crop_area').val();
    var drip_kharif_melon_irri_area = $('#drip_kharif_melon_irri_area').val();
    var drip_kharif_melon_water_req = $('#drip_kharif_melon_water_req').val();
    if (drip_kharif_melon_crop_area != "") {
        if (drip_kharif_melon_water_req != "") {
            drip_kharif_melon_waterdemand = parseFloat(drip_kharif_melon_crop_area) * parseFloat(drip_kharif_melon_water_req) * 0.001;
        } else {
            drip_kharif_melon_waterdemand = parseFloat(drip_kharif_melon_crop_area) * 0 * 0.001;
            drip_kharif_melon_water_req = 0;
        }
        // drip_kharif_melon_waterdemand = parseFloat(drip_kharif_melon_crop_area) * 500 * 0.001;

        if (drip_kharif_melon_irri_area == "") {
            drip_kharif_melon_irri_area = 0;
        }

        drip_kharif_melon_drip_waterdemand = ((parseFloat(drip_kharif_melon_crop_area) - parseFloat(drip_kharif_melon_irri_area)) * parseFloat(drip_kharif_melon_water_req) * 0.001)
            + (parseFloat(drip_kharif_melon_irri_area) * parseFloat(drip_kharif_melon_water_req) * (1 - 40 / 100) * 0.001);

        //drip_kharif_melon_drip_waterdemand = parseFloat(drip_kharif_melon_irri_area) * parseFloat(drip_kharif_melon_water_req) * 0.03 * 0.001;
        drip_kharif_melon_reduction_gw_demand = drip_kharif_melon_waterdemand - drip_kharif_melon_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_melon_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_melon_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_melon_reduction_gw_demand;

    }


    //Citrus

    var drip_kharif_citrus_crop_area = $('#drip_kharif_citrus_crop_area').val();
    var drip_kharif_citrus_irri_area = $('#drip_kharif_citrus_irri_area').val();
    var drip_kharif_citrus_water_req = $('#drip_kharif_citrus_water_req').val();
    if (drip_kharif_citrus_crop_area != "") {
        if (drip_kharif_citrus_water_req != "") {
            drip_kharif_citrus_waterdemand = parseFloat(drip_kharif_citrus_crop_area) * parseFloat(drip_kharif_citrus_water_req) * 0.001;
        } else {
            drip_kharif_citrus_waterdemand = parseFloat(drip_kharif_citrus_crop_area) * 0 * 0.001;
            drip_kharif_citrus_water_req = 0;
        }
        //drip_kharif_citrus_waterdemand = parseFloat(drip_kharif_citrus_crop_area) * 1050 * 0.001;

        if (drip_kharif_citrus_irri_area == "") {
            drip_kharif_citrus_irri_area = 0;
        }

        drip_kharif_citrus_drip_waterdemand = ((parseFloat(drip_kharif_citrus_crop_area) - parseFloat(drip_kharif_citrus_irri_area)) * parseFloat(drip_kharif_citrus_water_req) * 0.001)
            + (parseFloat(drip_kharif_citrus_irri_area) * parseFloat(drip_kharif_citrus_water_req) * (1 - 40 / 100) * 0.001);

        //drip_kharif_citrus_drip_waterdemand = parseFloat(drip_kharif_citrus_irri_area) * parseFloat(drip_kharif_citrus_water_req) * 0.03 * 0.001;
        drip_kharif_citrus_reduction_gw_demand = drip_kharif_citrus_waterdemand - drip_kharif_citrus_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_citrus_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_citrus_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_citrus_reduction_gw_demand;

    }


    // Peanut

    //var drip_kharif_peanut_crop_area = $('#drip_kharif_peanut_crop_area').val();
    //var drip_kharif_peanut_irri_area = $('#drip_kharif_peanut_irri_area').val();
    //var drip_kharif_peanut_water_req = $('#drip_kharif_peanut_water_req').val();
    //if (drip_kharif_peanut_crop_area != "") {
    //    if (drip_kharif_peanut_water_req != "") {
    //        drip_kharif_peanut_waterdemand = parseFloat(drip_kharif_peanut_crop_area) * parseFloat(drip_kharif_peanut_water_req) * 0.001;
    //    } else {
    //        drip_kharif_peanut_waterdemand = parseFloat(drip_kharif_peanut_crop_area) * 0 * 0.001;
    //        drip_kharif_peanut_water_req = 0;
    //    }
    //    // drip_kharif_peanut_waterdemand = parseFloat(drip_kharif_peanut_crop_area) * 600 * 0.001;

    //    if (drip_kharif_peanut_irri_area == "") {
    //        drip_kharif_peanut_irri_area = 0;
    //    }

    //    drip_kharif_peanut_drip_waterdemand = ((parseFloat(drip_kharif_peanut_crop_area) - parseFloat(drip_kharif_peanut_irri_area)) * parseFloat(drip_kharif_peanut_water_req) * 0.001)
    //        + (parseFloat(drip_kharif_peanut_irri_area) * parseFloat(drip_kharif_peanut_water_req) * (1 - 40 / 100) * 0.001);

    //    //drip_kharif_peanut_drip_waterdemand = parseFloat(drip_kharif_peanut_irri_area) * parseFloat(drip_kharif_peanut_water_req) * 0.03 * 0.001;
    //    drip_kharif_peanut_reduction_gw_demand = parseFloat(drip_kharif_peanut_waterdemand) - parseFloat(drip_kharif_peanut_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Kharif_Crops = parseFloat(drip_kharif_peanut_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Kharif_Crops);
    //    drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand) + parseFloat(drip_kharif_peanut_drip_waterdemand);
    //    drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_kharif_peanut_reduction_gw_demand);

    //}


    //Horticulture
    // EE IDD Peytta After Idd's Ki Peytteyy
    var drip_kharif_horticulture_crop_area = $('#drip_kharif_horticulture_crop_area').val();
    var drip_kharif_horticulture_irri_area = $('#drip_kharif_horticulture_irri_area').val();
    var drip_kharif_horticulture_water_req = $('#drip_kharif_horticulture_water_req').val();
    if (drip_kharif_horticulture_crop_area != "") {
        if (drip_kharif_horticulture_water_req != "") {
            drip_kharif_horticulture_waterdemand = parseFloat(drip_kharif_horticulture_crop_area) * parseFloat(drip_kharif_horticulture_water_req) * 0.001;
        } else {
            drip_kharif_horticulture_waterdemand = parseFloat(drip_kharif_horticulture_crop_area) * 0 * 0.001;
            drip_kharif_horticulture_water_req = 0;
        }
        // drip_kharif_horticulture_waterdemand = parseFloat(drip_kharif_horticulture_crop_area) * 470 * 0.001;

        if (drip_kharif_horticulture_irri_area == "") {
            drip_kharif_horticulture_irri_area = 0;
        }

        drip_kharif_horticulture_drip_waterdemand = ((parseFloat(drip_kharif_horticulture_crop_area) - parseFloat(drip_kharif_horticulture_irri_area)) * parseFloat(drip_kharif_horticulture_water_req) * 0.001)
            + (parseFloat(drip_kharif_horticulture_irri_area) * parseFloat(drip_kharif_horticulture_water_req) * (1 - 40 / 100) * 0.001);

        // drip_kharif_horticulture_drip_waterdemand = parseFloat(drip_kharif_horticulture_irri_area) * parseFloat(drip_kharif_horticulture_water_req) * 0.03 * 0.001;
        drip_kharif_horticulture_reduction_gw_demand = drip_kharif_horticulture_waterdemand - drip_kharif_horticulture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Kharif_Crops = drip_kharif_horticulture_waterdemand + Drip_Total_Water_Demand_for_Kharif_Crops;
        drip_kharif_total_drip_waterdemand = drip_kharif_total_drip_waterdemand + drip_kharif_horticulture_drip_waterdemand;
        drip_kharif_total_reduction_waterdemand = drip_kharif_total_reduction_waterdemand + drip_kharif_horticulture_reduction_gw_demand;

    }


    //other crop
    //var drip_kharif_othercrop_area = $('#drip_kharif_othercrop_area').val();
    //var drip_kharif_othercrop_irri_area = $('#drip_kharif_othercrop_irri_area').val();
    //var drip_kharif_othercrop_water_req = $('#drip_kharif_othercrop_water_req').val();
    //if (drip_kharif_othercrop_area != "") {
    //    if (drip_kharif_othercrop_water_req != "") {
    //        drip_kharif_othercrop_waterdemand = parseFloat(drip_kharif_othercrop_area) * parseFloat(drip_kharif_othercrop_water_req) * 0.001;
    //    } else {
    //        drip_kharif_othercrop_waterdemand = parseFloat(drip_kharif_othercrop_area) * 0 * 0.001;
    //        drip_kharif_othercrop_water_req = 0;
    //    }
    //    // drip_kharif_horticulture_waterdemand = parseFloat(drip_kharif_horticulture_crop_area) * 470 * 0.001;

    //    if (drip_kharif_othercrop_irri_area == "") {
    //        drip_kharif_othercrop_irri_area = 0;
    //    }

    //    drip_kharif_othercrop_drip_waterdemand = ((parseFloat(drip_kharif_othercrop_area) - parseFloat(drip_kharif_othercrop_irri_area)) * parseFloat(drip_kharif_othercrop_water_req) * 0.001)
    //        + (parseFloat(drip_kharif_othercrop_irri_area) * parseFloat(drip_kharif_othercrop_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_kharif_othercrop_drip_waterdemand = parseFloat(drip_kharif_othercrop_irri_area) * parseFloat(drip_kharif_othercrop_water_req) * 0.03 * 0.001;
    //    drip_kharif_othercrop_reduc_gw_demand = parseFloat(drip_kharif_othercrop_waterdemand) - parseFloat(drip_kharif_horticulture_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Kharif_Crops = parseFloat(drip_kharif_othercrop_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Kharif_Crops);
    //    drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand) + parseFloat(drip_kharif_othercrop_drip_waterdemand);
    //    drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_kharif_othercrop_reduc_gw_demand);

    //}



    $('#drip_kharif_total_waterdemand').text(Drip_Total_Water_Demand_for_Kharif_Crops.toFixed(2));
    $('#drip_kharif_total_drip_waterdemand').text(drip_kharif_total_drip_waterdemand.toFixed(2));
    $('#drip_kharif_total_reduction_waterdemand').text(drip_kharif_total_reduction_waterdemand.toFixed(2));



    $('#Drip_Kharif_Water_Demand').text(Drip_Total_Water_Demand_for_Kharif_Crops.toFixed(2));

    var TotalAnnual_Drip_Reduction = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_summer_total_reduction_waterdemand);
    $('#TotalAnnual_Drip_Reduction').text(TotalAnnual_Drip_Reduction.toFixed(2));


}

var drip_rabi_sericulture_crop_area = 0;
var drip_rabi_sericulture_irri_area = 0;
var drip_rabi_sericulture_fundingsource = 0;
var drip_rabi_sericulture_waterdemand = 0;
var drip_rabi_sericulture_drip_waterdemand = 0;
var drip_rabi_sericulture_reduction_gw_demand = 0;

var drip_rabi_tomoto_crop_area = 0;
var drip_rabi_tomoto_irri_area = 0;
var drip_rabi_tomoto_fundingsource = 0;
var drip_rabi_tomoto_waterdemand = 0;
var drip_rabi_tomoto_drip_waterdemand = 0;
var drip_rabi_tomoto_reduction_gw_demand = 0;

//var drip_rabi_cabbage_crop_area = 0;
//var drip_rabi_cabbage_irri_area = 0;
//var drip_rabi_cabbage_fundingsource = 0;
//var drip_rabi_cabbage_waterdemand = 0;
//var drip_rabi_cabbage_drip_waterdemand = 0;
//var drip_rabi_cabbage_reduction_gw_demand = 0;

//var drip_rabi_beans_crop_area = 0;
//var drip_rabi_beans_irri_area = 0;
//var drip_rabi_beans_fundingsource = 0;
//var drip_rabi_beans_waterdemand = 0;
//var drip_rabi_beans_drip_waterdemand = 0;
//var drip_rabi_beans_reduction_gw_demand = 0;


var drip_rabi_floriculture_crop_area = 0;
var drip_rabi_floriculture_irri_area = 0;
var drip_rabi_floriculture_fundingsource = 0;
var drip_rabi_floriculture_waterdemand = 0;
var drip_rabi_floriculture_drip_waterdemand = 0;
var drip_rabi_floriculture_reduction_gw_demand = 0;


//var drip_rabi_potato_crop_area = 0;
//var drip_rabi_potato_irri_area = 0;
//var drip_rabi_potato_fundingsource = 0;
//var drip_rabi_potato_waterdemand = 0;
//var drip_rabi_potato_drip_waterdemand = 0;
//var drip_rabi_potato_reduction_gw_demand = 0;

//var drip_rabi_cucumber_crop_area = 0;
//var drip_rabi_cucumber_irri_area = 0;
//var drip_rabi_cucumber_fundingsource = 0;
//var drip_rabi_cucumber_waterdemand = 0;
//var drip_rabi_cucumber_drip_waterdemand = 0;
//var drip_rabi_cucumber_reduction_gw_demand = 0;



var drip_rabi_ragi_crop_area = 0;
var drip_rabi_ragi_irri_area = 0;
var drip_rabi_ragi_fundingsource = 0;
var drip_rabi_ragi_waterdemand = 0;
var drip_rabi_ragi_drip_waterdemand = 0;
var drip_rabi_ragi_reduction_gw_demand = 0;


var drip_rabi_sugarcane_crop_area = 0;
var drip_rabi_sugarcane_irri_area = 0;
var drip_rabi_sugarcane_fundingsource = 0;
var drip_rabi_sugarcane_waterdemand = 0;
var drip_rabi_sugarcane_drip_waterdemand = 0;
var drip_rabi_sugarcane_reduction_gw_demand = 0;



var drip_rabi_maize_crop_area = 0;
var drip_rabi_maize_irri_area = 0;
var drip_rabi_maize_fundingsource = 0;
var drip_rabi_maize_waterdemand = 0;
var drip_rabi_maize_drip_waterdemand = 0;
var drip_rabi_maize_reduction_gw_demand = 0;


var drip_rabi_fodder_crop_area = 0;
var drip_rabi_fodder_irri_area = 0;
var drip_rabi_fodder_fundingsource = 0;
var drip_rabi_fodder_waterdemand = 0;
var drip_rabi_fodder_drip_waterdemand = 0;
var drip_rabi_fodder_reduction_gw_demand = 0;


var drip_rabi_paddy_crop_area = 0;
var drip_rabi_paddy_fundingsource = 0;
var drip_rabi_paddy_irri_area = 0;
var drip_rabi_paddy_waterdemand = 0;
var drip_rabi_paddy_drip_waterdemand = 0;
var drip_rabi_paddy_reduction_gw_demand = 0;


var drip_rabi_alfalfa_crop_area = 0;
var drip_rabi_alfalfa_fundingsource = 0;
var drip_rabi_alfalfa_irri_area = 0;
var drip_rabi_alfalfa_waterdemand = 0;
var drip_rabi_alfalfa_drip_waterdemand = 0;
var drip_rabi_alfalfa_reduction_gw_demand = 0;


//var drip_rabi_onion_crop_area = 0;
//var drip_rabi_onion_irri_area = 0;
//var drip_rabi_onion_fundingsource = 0;
//var drip_rabi_onion_waterdemand = 0;
//var drip_rabi_onion_drip_waterdemand = 0;
//var drip_rabi_onion_reduction_gw_demand = 0;


var drip_rabi_horticulture_crop_area = 0;
var drip_rabi_horticulture_irri_area = 0;
var drip_rabi_horticulture_fundingsource = 0;
var drip_rabi_horticulture_waterdemand = 0;
var drip_rabi_horticulture_drip_waterdemand = 0;
var drip_rabi_horticulture_reduction_gw_demand = 0;


var drip_rabi_sunflower_crop_area = 0;
var drip_rabi_sunflower_irri_area = 0;
var drip_rabi_sunflower_fundingsource = 0;
var drip_rabi_sunflower_waterdemand = 0;
var drip_rabi_sunflower_drip_waterdemand = 0;
var drip_rabi_sunflower_reduction_gw_demand = 0;


//var drip_rabi_othercrop_waterdemand = 0;
//var drip_rabi_othercrop_drip_waterdemand = 0;
//var drip_rabi_othercrop_reduc_gw_demand = 0;


var Drip_Total_Water_Demand_for_Rabi_Crops = 0;




var drip_rabi_othercrop_area1 = 0;
var drip_rabi_othercrop_irri_area1 = 0;
var drip_rabi_othercrop_water_req1 = 0;
var drip_rabi_othercrop_waterdemand1 = 0;
var drip_rabi_othercrop_drip_waterdemand1 = 0;
var drip_rabi_othercrop_reduc_gw_demand1 = 0;


var drip_rabi_othercrop_area2 = 0;
var drip_rabi_othercrop_irri_area2 = 0;
var drip_rabi_othercrop_water_req2 = 0;
var drip_rabi_othercrop_waterdemand2 = 0;
var drip_rabi_othercrop_drip_waterdemand2 = 0;
var drip_rabi_othercrop_reduc_gw_demand2 = 0;


var drip_rabi_othercrop_area3 = 0;
var drip_rabi_othercrop_irri_area3 = 0;
var drip_rabi_othercrop_water_req3 = 0;
var drip_rabi_othercrop_waterdemand3 = 0;
var drip_rabi_othercrop_drip_waterdemand3 = 0;
var drip_rabi_othercrop_reduc_gw_demand3 = 0;


var drip_rabi_othercrop_area4 = 0;
var drip_rabi_othercrop_irri_area4 = 0;
var drip_rabi_othercrop_water_req4 = 0;
var drip_rabi_othercrop_waterdemand4 = 0;
var drip_rabi_othercrop_drip_waterdemand4 = 0;
var drip_rabi_othercrop_reduc_gw_demand4 = 0;


var drip_rabi_othercrop_area5 = 0;
var drip_rabi_othercrop_irri_area5 = 0;
var drip_rabi_othercrop_water_req5 = 0;
var drip_rabi_othercrop_waterdemand5 = 0;
var drip_rabi_othercrop_drip_waterdemand5 = 0;
var drip_rabi_othercrop_reduc_gw_demand5 = 0;

function Drip_Rabi_WaterRequire() {

    drip_rabi_sericulture_crop_area = 0;
    drip_rabi_sericulture_irri_area = 0;
    drip_rabi_sericulture_fundingsource = 0;
    drip_rabi_sericulture_waterdemand = 0;
    drip_rabi_sericulture_drip_waterdemand = 0;
    drip_rabi_sericulture_reduction_gw_demand = 0;

    drip_rabi_tomoto_crop_area = 0;
    drip_rabi_tomoto_irri_area = 0;
    drip_rabi_tomoto_fundingsource = 0;
    drip_rabi_tomoto_waterdemand = 0;
    drip_rabi_tomoto_drip_waterdemand = 0;
    drip_rabi_tomoto_reduction_gw_demand = 0;

    //drip_rabi_cabbage_crop_area = 0;
    //drip_rabi_cabbage_irri_area = 0;
    //drip_rabi_cabbage_fundingsource = 0;
    //drip_rabi_cabbage_waterdemand = 0;
    //drip_rabi_cabbage_drip_waterdemand = 0;
    //drip_rabi_cabbage_reduction_gw_demand = 0;

    //drip_rabi_beans_crop_area = 0;
    //drip_rabi_beans_irri_area = 0;
    //drip_rabi_beans_fundingsource = 0;
    //drip_rabi_beans_waterdemand = 0;
    //drip_rabi_beans_drip_waterdemand = 0;
    //drip_rabi_beans_reduction_gw_demand = 0;


    drip_rabi_floriculture_crop_area = 0;
    drip_rabi_floriculture_irri_area = 0;
    drip_rabi_floriculture_fundingsource = 0;
    drip_rabi_floriculture_waterdemand = 0;
    drip_rabi_floriculture_drip_waterdemand = 0;
    drip_rabi_floriculture_reduction_gw_demand = 0;


    //drip_rabi_potato_crop_area = 0;
    //drip_rabi_potato_irri_area = 0;
    //drip_rabi_potato_fundingsource = 0;
    //drip_rabi_potato_waterdemand = 0;
    //drip_rabi_potato_drip_waterdemand = 0;
    //drip_rabi_potato_reduction_gw_demand = 0;

    //drip_rabi_cucumber_crop_area = 0;
    //drip_rabi_cucumber_irri_area = 0;
    //drip_rabi_cucumber_fundingsource = 0;
    //drip_rabi_cucumber_waterdemand = 0;
    //drip_rabi_cucumber_drip_waterdemand = 0;
    //drip_rabi_cucumber_reduction_gw_demand = 0;



    drip_rabi_ragi_crop_area = 0;
    drip_rabi_ragi_irri_area = 0;
    drip_rabi_ragi_fundingsource = 0;
    drip_rabi_ragi_waterdemand = 0;
    drip_rabi_ragi_drip_waterdemand = 0;
    drip_rabi_ragi_reduction_gw_demand = 0;


    drip_rabi_sugarcane_crop_area = 0;
    drip_rabi_sugarcane_irri_area = 0;
    drip_rabi_sugarcane_fundingsource = 0;
    drip_rabi_sugarcane_waterdemand = 0;
    drip_rabi_sugarcane_drip_waterdemand = 0;
    drip_rabi_sugarcane_reduction_gw_demand = 0;



    drip_rabi_maize_crop_area = 0;
    drip_rabi_maize_irri_area = 0;
    drip_rabi_maize_fundingsource = 0;
    drip_rabi_maize_waterdemand = 0;
    drip_rabi_maize_drip_waterdemand = 0;
    drip_rabi_maize_reduction_gw_demand = 0;


    drip_rabi_fodder_crop_area = 0;
    drip_rabi_fodder_irri_area = 0;
    drip_rabi_fodder_fundingsource = 0;
    drip_rabi_fodder_waterdemand = 0;
    drip_rabi_fodder_drip_waterdemand = 0;
    drip_rabi_fodder_reduction_gw_demand = 0;


    drip_rabi_paddy_crop_area = 0;
    drip_rabi_paddy_fundingsource = 0;
    drip_rabi_paddy_irri_area = 0;
    drip_rabi_paddy_waterdemand = 0;
    drip_rabi_paddy_drip_waterdemand = 0;
    drip_rabi_paddy_reduction_gw_demand = 0;


    drip_rabi_alfalfa_crop_area = 0;
    drip_rabi_alfalfa_fundingsource = 0;
    drip_rabi_alfalfa_irri_area = 0;
    drip_rabi_alfalfa_waterdemand = 0;
    drip_rabi_alfalfa_drip_waterdemand = 0;
    drip_rabi_alfalfa_reduction_gw_demand = 0;


    //drip_rabi_onion_crop_area = 0;
    //drip_rabi_onion_irri_area = 0;
    //drip_rabi_onion_fundingsource = 0;
    //drip_rabi_onion_waterdemand = 0;
    //drip_rabi_onion_drip_waterdemand = 0;
    //drip_rabi_onion_reduction_gw_demand = 0;


    drip_rabi_horticulture_crop_area = 0;
    drip_rabi_horticulture_irri_area = 0;
    drip_rabi_horticulture_fundingsource = 0;
    drip_rabi_horticulture_waterdemand = 0;
    drip_rabi_horticulture_drip_waterdemand = 0;
    drip_rabi_horticulture_reduction_gw_demand = 0;


    drip_rabi_sunflower_crop_area = 0;
    drip_rabi_sunflower_irri_area = 0;
    drip_rabi_sunflower_fundingsource = 0;
    drip_rabi_sunflower_waterdemand = 0;
    drip_rabi_sunflower_drip_waterdemand = 0;
    drip_rabi_sunflower_reduction_gw_demand = 0;


    //drip_rabi_othercrop_waterdemand = 0;
    //drip_rabi_othercrop_drip_waterdemand = 0;
    //drip_rabi_othercrop_reduc_gw_demand = 0;


    drip_rabi_total_waterdemand = 0;
    drip_rabi_total_rabi_waterdemand = 0;
    drip_rabi_total_reduction_waterdemand = 0;

    Drip_Total_Water_Demand_for_Rabi_Crops = 0;



    drip_rabi_othercrop_area1 = 0;
    drip_rabi_othercrop_irri_area1 = 0;
    drip_rabi_othercrop_water_req1 = 0;
    drip_rabi_othercrop_waterdemand1 = 0;
    drip_rabi_othercrop_drip_waterdemand1 = 0;
    drip_rabi_othercrop_reduc_gw_demand1 = 0;


    drip_rabi_othercrop_area2 = 0;
    drip_rabi_othercrop_irri_area2 = 0;
    drip_rabi_othercrop_water_req2 = 0;
    drip_rabi_othercrop_waterdemand2 = 0;
    drip_rabi_othercrop_drip_waterdemand2 = 0;
    drip_rabi_othercrop_reduc_gw_demand2 = 0;


    drip_rabi_othercrop_area3 = 0;
    drip_rabi_othercrop_irri_area3 = 0;
    drip_rabi_othercrop_water_req3 = 0;
    drip_rabi_othercrop_waterdemand3 = 0;
    drip_rabi_othercrop_drip_waterdemand3 = 0;
    drip_rabi_othercrop_reduc_gw_demand3 = 0;


    drip_rabi_othercrop_area4 = 0;
    drip_rabi_othercrop_irri_area4 = 0;
    drip_rabi_othercrop_water_req4 = 0;
    drip_rabi_othercrop_waterdemand4 = 0;
    drip_rabi_othercrop_drip_waterdemand4 = 0;
    drip_rabi_othercrop_reduc_gw_demand4 = 0;


    drip_rabi_othercrop_area5 = 0;
    drip_rabi_othercrop_irri_area5 = 0;
    drip_rabi_othercrop_water_req5 = 0;
    drip_rabi_othercrop_waterdemand5 = 0;
    drip_rabi_othercrop_drip_waterdemand5 = 0;
    drip_rabi_othercrop_reduc_gw_demand5 = 0;


    //Other

    var drip_rabi_othercrop_area1 = $('#drip_rabi_othercrop_area1').val();
    if (typeof drip_rabi_othercrop_area1 == 'undefined') {
        drip_rabi_othercrop_area1 = 0;
    }
    var drip_rabi_othercrop_irri_area1 = $('#drip_rabi_othercrop_irri_area1').val();
    if (typeof drip_rabi_othercrop_irri_area1 == 'undefined') {
        drip_rabi_othercrop_irri_area1 = 0;
    }
    var drip_rabi_othercrop_water_req1 = $('#drip_rabi_othercrop_water_req1').val();
    if (typeof drip_rabi_othercrop_water_req1 == 'undefined') {
        drip_rabi_othercrop_water_req1 = 0;
    }
    if (drip_rabi_othercrop_area1 != "") {
        if (drip_rabi_othercrop_water_req1 != "") {
            drip_rabi_othercrop_waterdemand1 = parseFloat(drip_rabi_othercrop_area1) * parseFloat(drip_rabi_othercrop_water_req1) * 0.001;
        } else {
            drip_rabi_othercrop_waterdemand1 = parseFloat(drip_rabi_othercrop_area1) * 0 * 0.001;
            drip_rabi_othercrop_water_req1 = 0;
        }
        //drip_rabi_othercrop_waterdemand1 = parseFloat(drip_rabi_othercrop_area1) * drip_rabi_othercrop_water_req1 * 0.001;

        if (drip_rabi_othercrop_irri_area1 == "") {
            drip_rabi_othercrop_irri_area1 = 0;
        }

        drip_rabi_othercrop_drip_waterdemand1 = ((parseFloat(drip_rabi_othercrop_area1) - parseFloat(drip_rabi_othercrop_irri_area1)) * parseFloat(drip_rabi_othercrop_water_req1) * 0.001)
            + (parseFloat(drip_rabi_othercrop_irri_area1) * parseFloat(drip_rabi_othercrop_water_req1) * (1 - 40 / 100) * 0.001);

        //drip_rabi_othercrop_drip_waterdemand1 = parseFloat(drip_rabi_othercrop_irri_area1) * parseFloat(drip_rabi_othercrop_water_req1) * 0.03 * 0.001;
        drip_rabi_othercrop_reduc_gw_demand1 = drip_rabi_othercrop_waterdemand1 - drip_rabi_othercrop_drip_waterdemand1;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_othercrop_waterdemand1 + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_othercrop_drip_waterdemand1;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_othercrop_reduc_gw_demand1;

    }

    var drip_rabi_othercrop_area2 = $('#drip_rabi_othercrop_area2').val();
    if (typeof drip_rabi_othercrop_area2 == 'undefined') {
        drip_rabi_othercrop_area2 = 0;
    }
    var drip_rabi_othercrop_irri_area2 = $('#drip_rabi_othercrop_irri_area2').val();
    if (typeof drip_rabi_othercrop_irri_area2 == 'undefined') {
        drip_rabi_othercrop_irri_area2 = 0;
    }
    var drip_rabi_othercrop_water_req2 = $('#drip_rabi_othercrop_water_req2').val();
    if (typeof drip_rabi_othercrop_water_req2 == 'undefined') {
        drip_rabi_othercrop_water_req2 = 0;
    }
    if (drip_rabi_othercrop_area2 != "") {
        if (drip_rabi_othercrop_water_req2 != "") {
            drip_rabi_othercrop_waterdemand2 = parseFloat(drip_rabi_othercrop_area2) * parseFloat(drip_rabi_othercrop_water_req2) * 0.001;
        } else {
            drip_rabi_othercrop_waterdemand2 = parseFloat(drip_rabi_othercrop_area2) * 0 * 0.001;
            drip_rabi_othercrop_water_req2 = 0;
        }
        //drip_rabi_othercrop_waterdemand2 = parseFloat(drip_rabi_othercrop_area2) * drip_rabi_othercrop_water_req2 * 0.002;

        if (drip_rabi_othercrop_irri_area2 == "") {
            drip_rabi_othercrop_irri_area2 = 0;
        }

        drip_rabi_othercrop_drip_waterdemand2 = ((parseFloat(drip_rabi_othercrop_area2) - parseFloat(drip_rabi_othercrop_irri_area2)) * parseFloat(drip_rabi_othercrop_water_req2) * 0.001)
            + (parseFloat(drip_rabi_othercrop_irri_area2) * parseFloat(drip_rabi_othercrop_water_req2) * (1 - 40 / 100) * 0.001);

        //drip_rabi_othercrop_drip_waterdemand2 = parseFloat(drip_rabi_othercrop_irri_area2) * parseFloat(drip_rabi_othercrop_water_req2) * 0.03 * 0.001;
        drip_rabi_othercrop_reduc_gw_demand2 = drip_rabi_othercrop_waterdemand2 - drip_rabi_othercrop_drip_waterdemand2;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_othercrop_waterdemand2 + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_othercrop_drip_waterdemand2;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_othercrop_reduc_gw_demand2;

    }

    var drip_rabi_othercrop_area3 = $('#drip_rabi_othercrop_area3').val();
    if (typeof drip_rabi_othercrop_area3 == 'undefined') {
        drip_rabi_othercrop_area3 = 0;
    }
    var drip_rabi_othercrop_irri_area3 = $('#drip_rabi_othercrop_irri_area3').val();
    if (typeof drip_rabi_othercrop_irri_area3 == 'undefined') {
        drip_rabi_othercrop_irri_area3 = 0;
    }
    var drip_rabi_othercrop_water_req3 = $('#drip_rabi_othercrop_water_req3').val();
    if (typeof drip_rabi_othercrop_water_req3 == 'undefined') {
        drip_rabi_othercrop_water_req3 = 0;
    }
    if (drip_rabi_othercrop_area3 != "") {
        if (drip_rabi_othercrop_water_req3 != "") {
            drip_rabi_othercrop_waterdemand3 = parseFloat(drip_rabi_othercrop_area3) * parseFloat(drip_rabi_othercrop_water_req3) * 0.001;
        } else {
            drip_rabi_othercrop_waterdemand3 = parseFloat(drip_rabi_othercrop_area3) * 0 * 0.001;
            drip_rabi_othercrop_water_req3 = 0;
        }
        //drip_rabi_othercrop_waterdemand3 = parseFloat(drip_rabi_othercrop_area3) * drip_rabi_othercrop_water_req3 * 0.003;

        if (drip_rabi_othercrop_irri_area3 == "") {
            drip_rabi_othercrop_irri_area3 = 0;
        }

        drip_rabi_othercrop_drip_waterdemand3 = ((parseFloat(drip_rabi_othercrop_area3) - parseFloat(drip_rabi_othercrop_irri_area3)) * parseFloat(drip_rabi_othercrop_water_req3) * 0.001)
            + (parseFloat(drip_rabi_othercrop_irri_area3) * parseFloat(drip_rabi_othercrop_water_req3) * (1 - 40 / 100) * 0.001);

        //drip_rabi_othercrop_drip_waterdemand3 = parseFloat(drip_rabi_othercrop_irri_area3) * parseFloat(drip_rabi_othercrop_water_req3) * 0.03 * 0.001;
        drip_rabi_othercrop_reduc_gw_demand3 = drip_rabi_othercrop_waterdemand3 - drip_rabi_othercrop_drip_waterdemand3;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_othercrop_waterdemand3 + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_othercrop_drip_waterdemand3;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_othercrop_reduc_gw_demand3;

    }

    var drip_rabi_othercrop_area4 = $('#drip_rabi_othercrop_area4').val();
    if (typeof drip_rabi_othercrop_area4 == 'undefined') {
        drip_rabi_othercrop_area4 = 0;
    }
    var drip_rabi_othercrop_irri_area4 = $('#drip_rabi_othercrop_irri_area4').val();
    if (typeof drip_rabi_othercrop_irri_area4 == 'undefined') {
        drip_rabi_othercrop_irri_area4 = 0;
    }
    var drip_rabi_othercrop_water_req4 = $('#drip_rabi_othercrop_water_req4').val();
    if (typeof drip_rabi_othercrop_water_req4 == 'undefined') {
        drip_rabi_othercrop_water_req4 = 0;
    }
    if (drip_rabi_othercrop_area4 != "") {
        if (drip_rabi_othercrop_water_req4 != "") {
            drip_rabi_othercrop_waterdemand4 = parseFloat(drip_rabi_othercrop_area4) * parseFloat(drip_rabi_othercrop_water_req4) * 0.001;
        } else {
            drip_rabi_othercrop_waterdemand4 = parseFloat(drip_rabi_othercrop_area4) * 0 * 0.001;
            drip_rabi_othercrop_water_req4 = 0;
        }
        //drip_rabi_othercrop_waterdemand4 = parseFloat(drip_rabi_othercrop_area4) * drip_rabi_othercrop_water_req4 * 0.001;

        if (drip_rabi_othercrop_irri_area4 == "") {
            drip_rabi_othercrop_irri_area4 = 0;
        }

        drip_rabi_othercrop_drip_waterdemand4 = ((parseFloat(drip_rabi_othercrop_area4) - parseFloat(drip_rabi_othercrop_irri_area4)) * parseFloat(drip_rabi_othercrop_water_req4) * 0.001)
            + (parseFloat(drip_rabi_othercrop_irri_area4) * parseFloat(drip_rabi_othercrop_water_req4) * (1 - 40 / 100) * 0.001);

        //drip_rabi_othercrop_drip_waterdemand4 = parseFloat(drip_rabi_othercrop_irri_area4) * parseFloat(drip_rabi_othercrop_water_req4) * 0.03 * 0.001;
        drip_rabi_othercrop_reduc_gw_demand4 = drip_rabi_othercrop_waterdemand4 - drip_rabi_othercrop_drip_waterdemand4;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_othercrop_waterdemand4 + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_othercrop_drip_waterdemand4;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_othercrop_reduc_gw_demand4;

    }

    var drip_rabi_othercrop_area5 = $('#drip_rabi_othercrop_area5').val();
    if (typeof drip_rabi_othercrop_area5 == 'undefined') {
        drip_rabi_othercrop_area5 = 0;
    }
    var drip_rabi_othercrop_irri_area5 = $('#drip_rabi_othercrop_irri_area5').val();
    if (typeof drip_rabi_othercrop_irri_area5 == 'undefined') {
        drip_rabi_othercrop_irri_area5 = 0;
    }
    var drip_rabi_othercrop_water_req5 = $('#drip_rabi_othercrop_water_req5').val();
    if (typeof drip_rabi_othercrop_water_req5 == 'undefined') {
        drip_rabi_othercrop_water_req5 = 0;
    }
    if (drip_rabi_othercrop_area5 != "") {
        if (drip_rabi_othercrop_water_req5 != "") {
            drip_rabi_othercrop_waterdemand5 = parseFloat(drip_rabi_othercrop_area5) * parseFloat(drip_rabi_othercrop_water_req5) * 0.001;
        } else {
            drip_rabi_othercrop_waterdemand5 = parseFloat(drip_rabi_othercrop_area5) * 0 * 0.001;
            drip_rabi_othercrop_water_req5 = 0;
        }
        //drip_rabi_othercrop_waterdemand5 = parseFloat(drip_rabi_othercrop_area5) * drip_rabi_othercrop_water_req5 * 0.001;

        if (drip_rabi_othercrop_irri_area5 == "") {
            drip_rabi_othercrop_irri_area5 = 0;
        }

        drip_rabi_othercrop_drip_waterdemand5 = ((parseFloat(drip_rabi_othercrop_area5) - parseFloat(drip_rabi_othercrop_irri_area5)) * parseFloat(drip_rabi_othercrop_water_req5) * 0.001)
            + (parseFloat(drip_rabi_othercrop_irri_area5) * parseFloat(drip_rabi_othercrop_water_req5) * (1 - 50 / 100) * 0.001);

        //drip_rabi_othercrop_drip_waterdemand5 = parseFloat(drip_rabi_othercrop_irri_area5) * parseFloat(drip_rabi_othercrop_water_req5) * 0.03 * 0.001;
        drip_rabi_othercrop_reduc_gw_demand5 = drip_rabi_othercrop_waterdemand5 - drip_rabi_othercrop_drip_waterdemand5;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_othercrop_waterdemand5 + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_othercrop_drip_waterdemand5;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_othercrop_reduc_gw_demand5;

    }



    //Sericulture

    var drip_rabi_sericulture_crop_area = $('#drip_rabi_sericulture_crop_area').val();
    var drip_rabi_sericulture_irri_area = $('#drip_rabi_sericulture_irri_area').val();
    var drip_rabi_sericulture_water_req = $('#drip_rabi_sericulture_water_req').val();
    if (drip_rabi_sericulture_crop_area != "") {
        if (drip_rabi_sericulture_water_req != "") {
            drip_rabi_sericulture_waterdemand = parseFloat(drip_rabi_sericulture_crop_area) * parseFloat(drip_rabi_sericulture_water_req) * 0.001;
        } else {
            drip_rabi_sericulture_waterdemand = parseFloat(drip_rabi_sericulture_crop_area) * 0 * 0.001;
            drip_rabi_sericulture_water_req = 0;
        }
        //drip_rabi_sericulture_waterdemand = parseFloat(drip_rabi_sericulture_crop_area) * 1550 * 0.001;

        if (drip_rabi_sericulture_irri_area == "") {
            drip_rabi_sericulture_irri_area = 0;
        }

        drip_rabi_sericulture_drip_waterdemand = ((parseFloat(drip_rabi_sericulture_crop_area) - parseFloat(drip_rabi_sericulture_irri_area)) * parseFloat(drip_rabi_sericulture_water_req) * 0.001)
            + (parseFloat(drip_rabi_sericulture_irri_area) * parseFloat(drip_rabi_sericulture_water_req) * (1 - 40 / 100) * 0.001);

        //drip_rabi_sericulture_drip_waterdemand = parseFloat(drip_rabi_sericulture_irri_area) * parseFloat(drip_rabi_sericulture_water_req) * 0.03 * 0.001;
        drip_rabi_sericulture_reduction_gw_demand = drip_rabi_sericulture_waterdemand - drip_rabi_sericulture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_sericulture_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_sericulture_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_sericulture_reduction_gw_demand;

    }





    //Tomota

    var drip_rabi_tomoto_crop_area = $('#drip_rabi_tomoto_crop_area').val();
    var drip_rabi_tomoto_irri_area = $('#drip_rabi_tomoto_irri_area').val();
    var drip_rabi_tomoto_water_req = $('#drip_rabi_tomoto_water_req').val();
    if (drip_rabi_tomoto_crop_area != "") {
        if (drip_rabi_tomoto_water_req != "") {
            drip_rabi_tomoto_waterdemand = parseFloat(drip_rabi_tomoto_crop_area) * parseFloat(drip_rabi_tomoto_water_req) * 0.001;
        } else {
            drip_rabi_tomoto_waterdemand = parseFloat(drip_rabi_tomoto_crop_area) * 0 * 0.001;
            drip_rabi_tomoto_water_req = 0;
        }
        //drip_rabi_tomoto_waterdemand = parseFloat(drip_rabi_tomoto_crop_area) * 600 * 0.001;

        if (drip_rabi_tomoto_irri_area == "") {
            drip_rabi_tomoto_irri_area = 0;
        }

        drip_rabi_tomoto_drip_waterdemand = ((parseFloat(drip_rabi_tomoto_crop_area) - parseFloat(drip_rabi_tomoto_irri_area)) * parseFloat(drip_rabi_tomoto_water_req) * 0.001)
            + (parseFloat(drip_rabi_tomoto_irri_area) * parseFloat(drip_rabi_tomoto_water_req) * (1 - 40 / 100) * 0.001);

        // drip_rabi_tomoto_drip_waterdemand = parseFloat(drip_rabi_tomoto_irri_area) * parseFloat(drip_rabi_tomoto_water_req) * 0.03 * 0.001;
        drip_rabi_tomoto_reduction_gw_demand = drip_rabi_tomoto_waterdemand - drip_rabi_tomoto_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_tomoto_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_tomoto_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_tomoto_reduction_gw_demand;


    }


    //Cabbage

    //var drip_rabi_cabbage_crop_area = $('#drip_rabi_cabbage_crop_area').val();
    //var drip_rabi_cabbage_irri_area = $('#drip_rabi_cabbage_irri_area').val();
    //var drip_rabi_cabbage_water_req = $('#drip_rabi_cabbage_water_req').val();
    //if (drip_rabi_cabbage_crop_area != "") {
    //    if (drip_rabi_cabbage_water_req != "") {
    //        drip_rabi_cabbage_waterdemand = parseFloat(drip_rabi_cabbage_crop_area) * parseFloat(drip_rabi_cabbage_water_req) * 0.001;
    //    } else {
    //        drip_rabi_cabbage_waterdemand = parseFloat(drip_rabi_cabbage_crop_area) * 0 * 0.001;
    //        drip_rabi_cabbage_water_req = 0;
    //    }
    //    //drip_rabi_cabbage_waterdemand = parseFloat(drip_rabi_cabbage_crop_area) * 425 * 0.001;

    //    if (drip_rabi_cabbage_irri_area == "") {
    //        drip_rabi_cabbage_irri_area = 0;
    //    }

    //    drip_rabi_cabbage_drip_waterdemand = ((parseFloat(drip_rabi_cabbage_crop_area) - parseFloat(drip_rabi_cabbage_irri_area)) * parseFloat(drip_rabi_cabbage_water_req) * 0.001)
    //        + (parseFloat(drip_rabi_cabbage_irri_area) * parseFloat(drip_rabi_cabbage_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_rabi_cabbage_drip_waterdemand = parseFloat(drip_rabi_cabbage_irri_area) * parseFloat(drip_rabi_cabbage_water_req) * 0.03 * 0.001;
    //    drip_rabi_cabbage_reduction_gw_demand = parseFloat(drip_rabi_cabbage_waterdemand) - parseFloat(drip_rabi_cabbage_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Rabi_Crops = parseFloat(drip_rabi_cabbage_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Rabi_Crops);
    //    drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand) + parseFloat(drip_rabi_cabbage_drip_waterdemand);
    //    drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_rabi_cabbage_reduction_gw_demand);


    //}



    //Beans

    //var drip_rabi_beans_crop_area = $('#drip_rabi_beans_crop_area').val();
    //var drip_rabi_beans_irri_area = $('#drip_rabi_beans_irri_area').val();
    //var drip_rabi_beans_water_req = $('#drip_rabi_beans_water_req').val();
    //if (drip_rabi_beans_crop_area != "") {
    //    if (drip_rabi_beans_water_req != "") {
    //        drip_rabi_beans_waterdemand = parseFloat(drip_rabi_beans_crop_area) * parseFloat(drip_rabi_beans_water_req) * 0.001;
    //    } else {
    //        drip_rabi_beans_waterdemand = parseFloat(drip_rabi_beans_crop_area) * 0 * 0.001;
    //        drip_rabi_beans_water_req = 0;
    //    }
    //    // drip_rabi_beans_waterdemand = parseFloat(drip_rabi_beans_crop_area) * 400 * 0.001;

    //    if (drip_rabi_beans_irri_area == "") {
    //        drip_rabi_beans_irri_area = 0;
    //    }

    //    drip_rabi_beans_drip_waterdemand = ((parseFloat(drip_rabi_beans_crop_area) - parseFloat(drip_rabi_beans_irri_area)) * parseFloat(drip_rabi_beans_water_req) * 0.001)
    //        + (parseFloat(drip_rabi_beans_irri_area) * parseFloat(drip_rabi_beans_water_req) * (1 - 40 / 100) * 0.001);

    //    //drip_rabi_beans_drip_waterdemand = parseFloat(drip_rabi_beans_irri_area) * parseFloat(drip_rabi_beans_water_req) * 0.03 * 0.001;
    //    drip_rabi_beans_reduction_gw_demand = parseFloat(drip_rabi_beans_waterdemand) - parseFloat(drip_rabi_beans_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Rabi_Crops = parseFloat(drip_rabi_beans_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Rabi_Crops);
    //    drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand) + parseFloat(drip_rabi_beans_drip_waterdemand);
    //    drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_rabi_beans_reduction_gw_demand);


    //}

    //Floriculture

    var drip_rabi_floriculture_crop_area = $('#drip_rabi_floriculture_crop_area').val();
    var drip_rabi_floriculture_irri_area = $('#drip_rabi_floriculture_irri_area').val();
    var drip_rabi_floriculture_water_req = $('#drip_rabi_floriculture_water_req').val();
    if (drip_rabi_floriculture_crop_area != "") {
        if (drip_rabi_floriculture_water_req != "") {
            drip_rabi_floriculture_waterdemand = parseFloat(drip_rabi_floriculture_crop_area) * parseFloat(drip_rabi_floriculture_water_req) * 0.001;
        } else {
            drip_rabi_floriculture_waterdemand = parseFloat(drip_rabi_floriculture_crop_area) * 0 * 0.001;
            drip_rabi_floriculture_water_req = 0;
        }
        // drip_rabi_floriculture_waterdemand = parseFloat(drip_rabi_floriculture_crop_area) * 1200 * 0.001;

        if (drip_rabi_floriculture_irri_area == "") {
            drip_rabi_floriculture_irri_area = 0;
        }

        drip_rabi_floriculture_drip_waterdemand = ((parseFloat(drip_rabi_floriculture_crop_area) - parseFloat(drip_rabi_floriculture_irri_area)) * parseFloat(drip_rabi_floriculture_water_req) * 0.001)
            + (parseFloat(drip_rabi_floriculture_irri_area) * parseFloat(drip_rabi_floriculture_water_req) * (1 - 40 / 100) * 0.001);

        // drip_rabi_floriculture_drip_waterdemand = parseFloat(drip_rabi_floriculture_irri_area) * parseFloat(drip_rabi_floriculture_water_req) * 0.03 * 0.001;
        drip_rabi_floriculture_reduction_gw_demand = drip_rabi_floriculture_waterdemand - drip_rabi_floriculture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_floriculture_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_floriculture_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_floriculture_reduction_gw_demand;


    }

    //Potato

    //var drip_rabi_potato_crop_area = $('#drip_rabi_potato_crop_area').val();
    //var drip_rabi_potato_irri_area = $('#drip_rabi_potato_irri_area').val();
    //var drip_rabi_potato_water_req = $('#drip_rabi_potato_water_req').val();
    //if (drip_rabi_potato_crop_area != "") {
    //    if (drip_rabi_potato_water_req != "") {
    //        drip_rabi_potato_waterdemand = parseFloat(drip_rabi_potato_crop_area) * parseFloat(drip_rabi_potato_water_req) * 0.001;
    //    } else {
    //        drip_rabi_potato_waterdemand = parseFloat(drip_rabi_potato_crop_area) * 0 * 0.001;
    //        drip_rabi_potato_water_req = 0;
    //    }
    //    //drip_rabi_potato_waterdemand = parseFloat(drip_rabi_potato_crop_area) * 600 * 0.001;

    //    if (drip_rabi_potato_irri_area == "") {
    //        drip_rabi_potato_irri_area = 0;
    //    }

    //    drip_rabi_potato_drip_waterdemand = ((parseFloat(drip_rabi_potato_crop_area) - parseFloat(drip_rabi_potato_irri_area)) * parseFloat(drip_rabi_potato_water_req) * 0.001)
    //        + (parseFloat(drip_rabi_potato_irri_area) * parseFloat(drip_rabi_potato_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_rabi_potato_drip_waterdemand = parseFloat(drip_rabi_potato_irri_area) * parseFloat(drip_rabi_potato_water_req) * 0.03 * 0.001;
    //    drip_rabi_potato_reduction_gw_demand = parseFloat(drip_rabi_potato_waterdemand) - parseFloat(drip_rabi_potato_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Rabi_Crops = parseFloat(drip_rabi_potato_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Rabi_Crops);
    //    drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand) + parseFloat(drip_rabi_potato_drip_waterdemand);
    //    drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_rabi_potato_reduction_gw_demand);


    //}


    //Cucumber

    //var drip_rabi_cucumber_crop_area = $('#drip_rabi_cucumber_crop_area').val();
    //var drip_rabi_cucumber_irri_area = $('#drip_rabi_cucumber_irri_area').val();
    //var drip_rabi_cucumber_water_req = $('#drip_rabi_cucumber_water_req').val();
    //if (drip_rabi_cucumber_crop_area != "") {
    //    if (drip_rabi_cucumber_water_req != "") {
    //        drip_rabi_cucumber_waterdemand = parseFloat(drip_rabi_cucumber_crop_area) * parseFloat(drip_rabi_cucumber_water_req) * 0.001;
    //    } else {
    //        drip_rabi_cucumber_waterdemand = parseFloat(drip_rabi_cucumber_crop_area) * 0 * 0.001;
    //        drip_rabi_cucumber_water_req = 0;
    //    }
    //    // drip_rabi_cucumber_waterdemand = parseFloat(drip_rabi_cucumber_crop_area) * 400 * 0.001;

    //    if (drip_rabi_cucumber_irri_area == "") {
    //        drip_rabi_cucumber_irri_area = 0;
    //    }

    //    drip_rabi_cucumber_drip_waterdemand = ((parseFloat(drip_rabi_cucumber_crop_area) - parseFloat(drip_rabi_cucumber_irri_area)) * parseFloat(drip_rabi_cucumber_water_req) * 0.001)
    //        + (parseFloat(drip_rabi_cucumber_irri_area) * parseFloat(drip_rabi_cucumber_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_rabi_cucumber_drip_waterdemand = parseFloat(drip_rabi_cucumber_irri_area) * parseFloat(drip_rabi_cucumber_water_req) * 0.03 * 0.001;
    //    drip_rabi_cucumber_reduction_gw_demand = parseFloat(drip_rabi_cucumber_waterdemand) - parseFloat(drip_rabi_cucumber_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Rabi_Crops = parseFloat(drip_rabi_cucumber_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Rabi_Crops);
    //    drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand) + parseFloat(drip_rabi_cucumber_drip_waterdemand);
    //    drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_rabi_cucumber_reduction_gw_demand);


    //}


    //Ragi

    var drip_rabi_ragi_crop_area = $('#drip_rabi_ragi_crop_area').val();
    var drip_rabi_ragi_irri_area = $('#drip_rabi_ragi_irri_area').val();
    var drip_rabi_ragi_water_req = $('#drip_rabi_ragi_water_req').val();
    if (drip_rabi_ragi_crop_area != "") {
        if (drip_rabi_ragi_water_req != "") {
            drip_rabi_ragi_waterdemand = parseFloat(drip_rabi_ragi_crop_area) * parseFloat(drip_rabi_ragi_water_req) * 0.001;
        } else {
            drip_rabi_ragi_waterdemand = parseFloat(drip_rabi_ragi_crop_area) * 0 * 0.001;
            drip_rabi_ragi_water_req = 0;
        }
        // drip_rabi_ragi_waterdemand = parseFloat(drip_rabi_ragi_crop_area) * 550 * 0.001;

        if (drip_rabi_ragi_irri_area == "") {
            drip_rabi_ragi_irri_area = 0;
        }

        drip_rabi_ragi_drip_waterdemand = ((parseFloat(drip_rabi_ragi_crop_area) - parseFloat(drip_rabi_ragi_irri_area)) * parseFloat(drip_rabi_ragi_water_req) * 0.001)
            + (parseFloat(drip_rabi_ragi_irri_area) * parseFloat(drip_rabi_ragi_water_req) * (1 - 40 / 100) * 0.001);

        //drip_rabi_ragi_drip_waterdemand = parseFloat(drip_rabi_ragi_irri_area) * parseFloat(drip_rabi_ragi_water_req) * 0.03 * 0.001;
        drip_rabi_ragi_reduction_gw_demand = drip_rabi_ragi_waterdemand - drip_rabi_ragi_reduction_gw_demand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_ragi_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_ragi_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_ragi_reduction_gw_demand;


    }

    //Sugarcane

    var drip_rabi_sugarcane_crop_area = $('#drip_rabi_sugarcane_crop_area').val();
    var drip_rabi_sugarcane_irri_area = $('#drip_rabi_sugarcane_irri_area').val();
    var drip_rabi_sugarcane_water_req = $('#drip_rabi_sugarcane_water_req').val();
    if (drip_rabi_sugarcane_crop_area != "") {
        if (drip_rabi_sugarcane_water_req != "") {
            drip_rabi_sugarcane_waterdemand = parseFloat(drip_rabi_sugarcane_crop_area) * parseFloat(drip_rabi_sugarcane_water_req) * 0.001;
        } else {
            drip_rabi_sugarcane_waterdemand = parseFloat(drip_rabi_sugarcane_crop_area) * 0 * 0.001;
            drip_rabi_sugarcane_water_req = 0;
        }
        //drip_rabi_sugarcane_waterdemand = parseFloat(drip_rabi_sugarcane_crop_area) * 2000 * 0.001;

        if (drip_rabi_sugarcane_irri_area == "") {
            drip_rabi_sugarcane_irri_area = 0;
        }

        drip_rabi_sugarcane_drip_waterdemand = ((parseFloat(drip_rabi_sugarcane_crop_area) - parseFloat(drip_rabi_sugarcane_irri_area)) * parseFloat(drip_rabi_sugarcane_water_req) * 0.001)
            + (parseFloat(drip_rabi_sugarcane_irri_area) * parseFloat(drip_rabi_sugarcane_water_req) * (1 - 40 / 100) * 0.001);

        // drip_rabi_sugarcane_drip_waterdemand = parseFloat(drip_rabi_sugarcane_irri_area) * parseFloat(drip_rabi_sugarcane_water_req) * 0.03 * 0.001;
        drip_rabi_sugarcane_reduction_gw_demand = drip_rabi_sugarcane_waterdemand - drip_rabi_sugarcane_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_sugarcane_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_sugarcane_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_sugarcane_reduction_gw_demand;

    }


    //Maize

    var drip_rabi_maize_crop_area = $('#drip_rabi_maize_crop_area').val();
    var drip_rabi_maize_irri_area = $('#drip_rabi_maize_irri_area').val();
    var drip_rabi_maize_water_req = $('#drip_rabi_maize_water_req').val();
    if (drip_rabi_maize_crop_area != "") {
        if (drip_rabi_maize_water_req != "") {
            drip_rabi_maize_waterdemand = parseFloat(drip_rabi_maize_crop_area) * parseFloat(drip_rabi_maize_water_req) * 0.001;
        } else {
            drip_rabi_maize_waterdemand = parseFloat(drip_rabi_maize_crop_area) * 0 * 0.001;
            drip_rabi_maize_water_req = 0;
        }
        //drip_rabi_maize_waterdemand = parseFloat(drip_rabi_maize_crop_area) * 650 * 0.001;

        if (drip_rabi_maize_irri_area == "") {
            drip_rabi_maize_irri_area = 0;
        }

        drip_rabi_maize_drip_waterdemand = ((parseFloat(drip_rabi_maize_crop_area) - parseFloat(drip_rabi_maize_irri_area)) * parseFloat(drip_rabi_maize_water_req) * 0.001)
            + (parseFloat(drip_rabi_maize_irri_area) * parseFloat(drip_rabi_maize_water_req) * (1 - 40 / 100) * 0.001);

        //drip_rabi_maize_drip_waterdemand = parseFloat(drip_rabi_maize_irri_area) * parseFloat(drip_rabi_maize_water_req) * 0.03 * 0.001;
        drip_rabi_maize_reduction_gw_demand = drip_rabi_maize_waterdemand - drip_rabi_maize_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_maize_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_maize_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_maize_reduction_gw_demand;

    }


    //Fodder

    var drip_rabi_fodder_crop_area = $('#drip_rabi_fodder_crop_area').val();
    var drip_rabi_fodder_irri_area = $('#drip_rabi_fodder_irri_area').val();
    var drip_rabi_fodder_water_req = $('#drip_rabi_fodder_water_req').val();
    if (drip_rabi_fodder_crop_area != "") {
        if (drip_rabi_fodder_water_req != "") {
            drip_rabi_fodder_waterdemand = parseFloat(drip_rabi_fodder_crop_area) * parseFloat(drip_rabi_fodder_water_req) * 0.001;
        } else {
            drip_rabi_fodder_waterdemand = parseFloat(drip_rabi_fodder_crop_area) * 0 * 0.001;
            drip_rabi_fodder_water_req = 0;
        }
        //drip_rabi_fodder_waterdemand = parseFloat(drip_rabi_fodder_crop_area) * 1400 * 0.001;

        if (drip_rabi_fodder_irri_area == "") {
            drip_rabi_fodder_irri_area = 0;
        }

        drip_rabi_fodder_drip_waterdemand = ((parseFloat(drip_rabi_fodder_crop_area) - parseFloat(drip_rabi_fodder_irri_area)) * parseFloat(drip_rabi_fodder_water_req) * 0.001)
            + (parseFloat(drip_rabi_fodder_irri_area) * parseFloat(drip_rabi_fodder_water_req) * (1 - 40 / 100) * 0.001);

        //drip_rabi_fodder_drip_waterdemand = parseFloat(drip_rabi_fodder_irri_area) * parseFloat(drip_rabi_fodder_water_req) * 0.03 * 0.001;
        drip_rabi_fodder_reduction_gw_demand = drip_rabi_fodder_waterdemand - drip_rabi_fodder_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_fodder_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_fodder_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_fodder_reduction_gw_demand;

    }


    //Paddy

    var drip_rabi_paddy_crop_area = $('#drip_rabi_paddy_crop_area').val();
    var drip_rabi_paddy_irri_area = $('#drip_rabi_paddy_irri_area').val();
    var drip_rabi_paddy_water_req = $('#drip_rabi_paddy_water_req').val();
    if (drip_rabi_paddy_crop_area != "") {
        if (drip_rabi_paddy_water_req != "") {
            drip_rabi_paddy_waterdemand = parseFloat(drip_rabi_paddy_crop_area) * parseFloat(drip_rabi_paddy_water_req) * 0.001;
        } else {
            drip_rabi_paddy_waterdemand = parseFloat(drip_rabi_paddy_crop_area) * 0 * 0.001;
            drip_rabi_paddy_water_req = 0;
        }
        // drip_rabi_paddy_waterdemand = parseFloat(drip_rabi_paddy_crop_area) * 1175 * 0.001;

        if (drip_rabi_paddy_irri_area == "") {
            drip_rabi_paddy_irri_area = 0;
        }

        drip_rabi_paddy_drip_waterdemand = ((parseFloat(drip_rabi_paddy_crop_area) - parseFloat(drip_rabi_paddy_irri_area)) * parseFloat(drip_rabi_paddy_water_req) * 0.001)
            + (parseFloat(drip_rabi_paddy_irri_area) * parseFloat(drip_rabi_paddy_water_req) * (1 - 40 / 100) * 0.001);

        //drip_rabi_paddy_drip_waterdemand = parseFloat(drip_rabi_paddy_irri_area) * parseFloat(drip_rabi_paddy_water_req) * 0.03 * 0.001;
        drip_rabi_paddy_reduction_gw_demand = drip_rabi_paddy_waterdemand - drip_rabi_paddy_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_paddy_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_paddy_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_paddy_reduction_gw_demand;

    }



    //Alfalfa

    var drip_rabi_alfalfa_crop_area = $('#drip_rabi_alfalfa_crop_area').val();
    var drip_rabi_alfalfa_irri_area = $('#drip_rabi_alfalfa_irri_area').val();
    var drip_rabi_alfalfa_water_req = $('#drip_rabi_alfalfa_water_req').val();
    if (drip_rabi_alfalfa_crop_area != "") {
        if (drip_rabi_alfalfa_water_req != "") {
            drip_rabi_alfalfa_waterdemand = parseFloat(drip_rabi_alfalfa_crop_area) * parseFloat(drip_rabi_alfalfa_water_req) * 0.001;
        } else {
            drip_rabi_alfalfa_waterdemand = parseFloat(drip_rabi_alfalfa_crop_area) * 0 * 0.001;
            drip_rabi_alfalfa_water_req = 0;
        }
        //drip_rabi_alfalfa_waterdemand = parseFloat(drip_rabi_alfalfa_crop_area) * 1200 * 0.001;

        if (drip_rabi_alfalfa_irri_area == "") {
            drip_rabi_alfalfa_irri_area = 0;
        }

        drip_rabi_alfalfa_drip_waterdemand = ((parseFloat(drip_rabi_alfalfa_crop_area) - parseFloat(drip_rabi_alfalfa_irri_area)) * parseFloat(drip_rabi_alfalfa_water_req) * 0.001)
            + (parseFloat(drip_rabi_alfalfa_irri_area) * parseFloat(drip_rabi_alfalfa_water_req) * (1 - 40 / 100) * 0.001);

        // drip_rabi_alfalfa_drip_waterdemand = parseFloat(drip_rabi_alfalfa_irri_area) * parseFloat(drip_rabi_alfalfa_water_req) * 0.03 * 0.001;
        drip_rabi_alfalfa_reduction_gw_demand = drip_rabi_alfalfa_waterdemand - drip_rabi_alfalfa_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_alfalfa_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_alfalfa_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_alfalfa_reduction_gw_demand;

    }



    //Onion

    //var drip_rabi_onion_crop_area = $('#drip_rabi_onion_crop_area').val();
    //var drip_rabi_onion_irri_area = $('#drip_rabi_onion_irri_area').val();
    //var drip_rabi_onion_water_req = $('#drip_rabi_onion_water_req').val();
    //if (drip_rabi_onion_crop_area != "") {
    //    if (drip_rabi_onion_water_req != "") {
    //        drip_rabi_onion_waterdemand = parseFloat(drip_rabi_onion_crop_area) * parseFloat(drip_rabi_onion_water_req) * 0.001;
    //    } else {
    //        drip_rabi_onion_waterdemand = parseFloat(drip_rabi_onion_crop_area) * 0 * 0.001;
    //        drip_rabi_onion_water_req = 0;
    //    }
    //    //drip_rabi_onion_waterdemand = parseFloat(drip_rabi_onion_crop_area) * 450 * 0.001;

    //    if (drip_rabi_onion_irri_area == "") {
    //        drip_rabi_onion_irri_area = 0;
    //    }

    //    drip_rabi_onion_drip_waterdemand = ((parseFloat(drip_rabi_onion_crop_area) - parseFloat(drip_rabi_onion_irri_area)) * parseFloat(drip_rabi_onion_water_req) * 0.001)
    //        + (parseFloat(drip_rabi_onion_irri_area) * parseFloat(drip_rabi_onion_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_rabi_onion_drip_waterdemand = parseFloat(drip_rabi_onion_irri_area) * parseFloat(drip_rabi_onion_water_req) * 0.03 * 0.001;
    //    drip_rabi_onion_reduction_gw_demand = parseFloat(drip_rabi_onion_waterdemand) - parseFloat(drip_rabi_onion_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Rabi_Crops = parseFloat(drip_rabi_onion_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Rabi_Crops);
    //    drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand) + parseFloat(drip_rabi_onion_drip_waterdemand);
    //    drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_rabi_onion_reduction_gw_demand);

    //}



    //Hortculture

    var drip_rabi_horticulture_crop_area = $('#drip_rabi_horticulture_crop_area').val();
    var drip_rabi_horticulture_irri_area = $('#drip_rabi_horticulture_irri_area').val();
    var drip_rabi_horticulture_water_req = $('#drip_rabi_horticulture_water_req').val();
    if (drip_rabi_horticulture_crop_area != "") {
        if (drip_rabi_horticulture_water_req != "") {
            drip_rabi_horticulture_waterdemand = parseFloat(drip_rabi_horticulture_crop_area) * parseFloat(drip_rabi_horticulture_water_req) * 0.001;
        } else {
            drip_rabi_horticulture_waterdemand = parseFloat(drip_rabi_horticulture_crop_area) * 0 * 0.001;
            drip_rabi_horticulture_water_req = 0;
        }
        // drip_rabi_horticulture_waterdemand = parseFloat(drip_rabi_horticulture_crop_area) * 470 * 0.001;

        if (drip_rabi_horticulture_irri_area == "") {
            drip_rabi_horticulture_irri_area = 0;
        }

        drip_rabi_horticulture_drip_waterdemand = ((parseFloat(drip_rabi_horticulture_crop_area) - parseFloat(drip_rabi_horticulture_irri_area)) * parseFloat(drip_rabi_horticulture_water_req) * 0.001)
            + (parseFloat(drip_rabi_horticulture_irri_area) * parseFloat(drip_rabi_horticulture_water_req) * (1 - 40 / 100) * 0.001);

        // drip_rabi_horticulture_drip_waterdemand = parseFloat(drip_rabi_horticulture_irri_area) * parseFloat(drip_rabi_horticulture_water_req) * 0.03 * 0.001;
        drip_rabi_horticulture_reduction_gw_demand = drip_rabi_horticulture_waterdemand - drip_rabi_horticulture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_horticulture_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_horticulture_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_horticulture_reduction_gw_demand;

    }


    //Sunflower

    var drip_rabi_sunflower_crop_area = $('#drip_rabi_sunflower_crop_area').val();
    var drip_rabi_sunflower_irri_area = $('#drip_rabi_sunflower_irri_area').val();
    var drip_rabi_sunflower_water_req = $('#drip_rabi_sunflower_water_req').val();
    if (drip_rabi_sunflower_crop_area != "") {
        if (drip_rabi_sunflower_water_req != "") {
            drip_rabi_sunflower_waterdemand = parseFloat(drip_rabi_sunflower_crop_area) * parseFloat(drip_rabi_sunflower_water_req) * 0.001;
        } else {
            drip_rabi_sunflower_waterdemand = parseFloat(drip_rabi_sunflower_crop_area) * 0 * 0.001;
            drip_rabi_sunflower_water_req = 0;
        }

        // drip_rabi_sunflower_waterdemand = parseFloat(drip_rabi_sunflower_crop_area) * 800 * 0.001;

        if (drip_rabi_sunflower_irri_area == "") {
            drip_rabi_sunflower_irri_area = 0;
        }

        drip_rabi_sunflower_drip_waterdemand = ((parseFloat(drip_rabi_sunflower_crop_area) - parseFloat(drip_rabi_sunflower_irri_area)) * parseFloat(drip_rabi_sunflower_water_req) * 0.001)
            + (parseFloat(drip_rabi_sunflower_irri_area) * parseFloat(drip_rabi_sunflower_water_req) * (1 - 40 / 100) * 0.001);

        //drip_rabi_sunflower_drip_waterdemand = parseFloat(drip_rabi_sunflower_irri_area) * parseFloat(drip_rabi_sunflower_water_req) * 0.03 * 0.001;
        drip_rabi_sunflower_reduction_gw_demand = drip_rabi_sunflower_waterdemand - drip_rabi_sunflower_drip_waterdemand;

        Drip_Total_Water_Demand_for_Rabi_Crops = drip_rabi_sunflower_waterdemand + Drip_Total_Water_Demand_for_Rabi_Crops;
        drip_rabi_total_rabi_waterdemand = drip_rabi_total_rabi_waterdemand + drip_rabi_sunflower_drip_waterdemand;
        drip_rabi_total_reduction_waterdemand = drip_rabi_total_reduction_waterdemand + drip_rabi_sunflower_reduction_gw_demand;

    }

    //other crop

    //var drip_rabi_othercrop_area = $('#drip_rabi_othercrop_area').val();
    //var drip_rabi_othercrop_irri_area = $('#drip_rabi_othercrop_irri_area').val();
    //var drip_rabi_othercrop_water_req = $('#drip_rabi_othercrop_water_req').val();
    //if (drip_rabi_othercrop_area != "") {
    //    if (drip_rabi_othercrop_water_req != "") {
    //        drip_rabi_othercrop_waterdemand = parseFloat(drip_rabi_othercrop_area) * parseFloat(drip_rabi_othercrop_water_req) * 0.001;
    //    } else {
    //        drip_rabi_othercrop_waterdemand = parseFloat(drip_rabi_othercrop_area) * 0 * 0.001;
    //        drip_rabi_othercrop_water_req = 0;
    //    }

    //    // drip_rabi_sunflower_waterdemand = parseFloat(drip_rabi_sunflower_crop_area) * 800 * 0.001;

    //    if (drip_rabi_othercrop_irri_area == "") {
    //        drip_rabi_othercrop_irri_area = 0;
    //    }

    //    drip_rabi_othercrop_drip_waterdemand = ((parseFloat(drip_rabi_othercrop_area) - parseFloat(drip_rabi_othercrop_irri_area)) * parseFloat(drip_rabi_othercrop_water_req) * 0.001)
    //        + (parseFloat(drip_rabi_othercrop_irri_area) * parseFloat(drip_rabi_othercrop_water_req) * (1 - 40 / 100) * 0.001);

    //    //drip_rabi_othercrop_drip_waterdemand = parseFloat(drip_rabi_othercrop_irri_area) * parseFloat(drip_rabi_othercrop_water_req) * 0.03 * 0.001;
    //    drip_rabi_othercrop_reduc_gw_demand = parseFloat(drip_rabi_othercrop_waterdemand) - parseFloat(drip_rabi_othercrop_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Rabi_Crops = parseFloat(drip_rabi_othercrop_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Rabi_Crops);
    //    drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand) + parseFloat(drip_rabi_othercrop_drip_waterdemand);
    //    drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_rabi_othercrop_reduc_gw_demand);

    //}




    $('#Drip_Rabi_Water_Demand').text(Drip_Total_Water_Demand_for_Rabi_Crops.toFixed(2));
    $('#drip_rabi_total_waterdemand').text(Drip_Total_Water_Demand_for_Rabi_Crops.toFixed(2));

    $('#drip_rabi_total_rabi_waterdemand').text(drip_rabi_total_rabi_waterdemand.toFixed(2));
    $('#drip_rabi_total_reduction_waterdemand').text(drip_rabi_total_reduction_waterdemand.toFixed(2));

    var TotalAnnual_Drip_Reduction = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_summer_total_reduction_waterdemand);
    $('#TotalAnnual_Drip_Reduction').text(TotalAnnual_Drip_Reduction.toFixed(2));

}

var drip_rabi_sunflower_crop_area = 0;
var drip_rabi_sunflower_irri_area = 0;
var drip_rabi_sunflower_fundingsource = 0;
var drip_rabi_sunflower_waterdemand = 0;
var drip_rabi_sunflower_drip_waterdemand = 0;
var drip_rabi_sunflower_reduction_gw_demand = 0;

var drip_rabi_total_waterdemand = 0;
var drip_rabi_total_rabi_waterdemand = 0;
var drip_rabi_total_reduction_waterdemand = 0;

var drip_summer_sericulture_crop_area = 0;
var drip_summer_sericulture_irri_area = 0;
var drip_summer_sericulture_fundingsource = 0;
var drip_summer_sericulture_waterdemand = 0;
var drip_summer_sericulture_drip_waterdemand = 0;
var drip_summer_sericulture_reduction_gw_demand = 0;


var drip_summer_tomoto_crop_area = 0;
var drip_summer_tomoto_irri_area = 0;
var drip_summer_tomoto_fundingsource = 0;
var drip_summer_tomoto_waterdemand = 0;
var drip_summer_tomoto_drip_waterdemand = 0;
var drip_summer_tomoto_reduction_gw_demand = 0;

//var drip_summer_cabbage_crop_area = 0;
//var drip_summer_cabbage_irri_area = 0;
//var drip_summer_cabbage_fundingsource = 0;
//var drip_summer_cabbage_waterdemand = 0;
//var drip_summer_cabbage_drip_waterdemand = 0;
//var drip_summer_cabbage_reduction_gw_demand = 0;


//var drip_summer_beans_crop_area = 0;
//var drip_summer_beans_irri_area = 0;
//var drip_summer_beans_fundingsource = 0;
//var drip_summer_beans_waterdemand = 0;
//var drip_summer_beans_drip_waterdemand = 0;
//var drip_summer_beans_reduction_gw_demand = 0;



var drip_summer_floriculture_crop_area = 0;
var drip_summer_floriculture_irri_area = 0;
var drip_summer_floriculture_fundingsource = 0;
var drip_summer_floriculture_waterdemand = 0;
var drip_summer_floriculture_drip_waterdemand = 0;
var drip_summer_floriculture_reduction_gw_demand = 0;

var drip_summer_maize_crop_area = 0;
var drip_summer_maize_irri_area = 0;
var drip_summer_maize_fundingsource = 0;
var drip_summer_maize_waterdemand = 0;
var drip_summer_maize_drip_waterdemand = 0;
var drip_summer_maize_reduction_gw_demand = 0;



var drip_summer_fodder_crop_area = 0;
var drip_summer_fodder_irri_area = 0;
var drip_summer_fodder_fundingsource = 0;
var drip_summer_fodder_waterdemand = 0;
var drip_summer_fodder_drip_waterdemand = 0;
var drip_summer_fodder_reduction_gw_demand = 0;


var drip_summer_sugarcane_crop_area = 0;
var drip_summer_sugarcane_irri_area = 0;
var drip_summer_sugarcane_fundingsource = 0;
var drip_summer_sugarcane_waterdemand = 0;
var drip_summer_sugarcane_drip_waterdemand = 0;
var drip_summer_sugarcane_reduction_gw_demand = 0;

var drip_summer_total_waterdemand = 0;
var drip_summer_total_summer_waterdemand = 0;
var drip_summer_total_reduction_waterdemand = 0;
var drip_annual_reduction_waterdemand = 0;


//var drip_summer_othyercrop_waterdemand = 0;
//var drip_summer_othercrop_drip_waterdemand = 0;
//var drip_summer_othercrop_reduc_gw_demand = 0;

var Drip_Total_Water_Demand_for_Summer_Crops = 0;



var drip_summer_horticulture_waterdemand = 0;
var drip_summer_horticulture_netwater_waterdemand = 0;
var drip_summer_horticulture_reduction_gw_demand = 0;



var drip_summer_othercrop_area1 = 0;
var drip_summer_othercrop_irri_area1 = 0;
var drip_summer_othercrop_water_req1 = 0;
var drip_summer_othercrop_waterdemand1 = 0;
var drip_summer_othercrop_drip_waterdemand1 = 0;
var drip_summer_othercrop_reduc_gw_demand1 = 0;


var drip_summer_othercrop_area2 = 0;
var drip_summer_othercrop_irri_area2 = 0;
var drip_summer_othercrop_water_req2 = 0;
var drip_summer_othercrop_waterdemand2 = 0;
var drip_summer_othercrop_drip_waterdemand2 = 0;
var drip_summer_othercrop_reduc_gw_demand2 = 0;


var drip_summer_othercrop_area3 = 0;
var drip_summer_othercrop_irri_area3 = 0;
var drip_summer_othercrop_water_req3 = 0;
var drip_summer_othercrop_waterdemand3 = 0;
var drip_summer_othercrop_drip_waterdemand3 = 0;
var drip_summer_othercrop_reduc_gw_demand3 = 0;


var drip_summer_othercrop_area4 = 0;
var drip_summer_othercrop_irri_area4 = 0;
var drip_summer_othercrop_water_req4 = 0;
var drip_summer_othercrop_waterdemand4 = 0;
var drip_summer_othercrop_drip_waterdemand4 = 0;
var drip_summer_othercrop_reduc_gw_demand4 = 0;


var drip_summer_othercrop_area5 = 0;
var drip_summer_othercrop_irri_area5 = 0;
var drip_summer_othercrop_water_req5 = 0;
var drip_summer_othercrop_waterdemand5 = 0;
var drip_summer_othercrop_drip_waterdemand5 = 0;
var drip_summer_othercrop_reduc_gw_demand5 = 0;
function Drip_Crop_WaterRequire() {

    drip_summer_sericulture_crop_area = 0;
    drip_summer_sericulture_irri_area = 0;
    drip_summer_sericulture_fundingsource = 0;
    drip_summer_sericulture_waterdemand = 0;
    drip_summer_sericulture_drip_waterdemand = 0;
    drip_summer_sericulture_reduction_gw_demand = 0;


    drip_summer_tomoto_crop_area = 0;
    drip_summer_tomoto_irri_area = 0;
    drip_summer_tomoto_fundingsource = 0;
    drip_summer_tomoto_waterdemand = 0;
    drip_summer_tomoto_drip_waterdemand = 0;
    drip_summer_tomoto_reduction_gw_demand = 0;

    //drip_summer_cabbage_crop_area = 0;
    //drip_summer_cabbage_irri_area = 0;
    //drip_summer_cabbage_fundingsource = 0;
    //drip_summer_cabbage_waterdemand = 0;
    //drip_summer_cabbage_drip_waterdemand = 0;
    //drip_summer_cabbage_reduction_gw_demand = 0;


    //drip_summer_beans_crop_area = 0;
    //drip_summer_beans_irri_area = 0;
    //drip_summer_beans_fundingsource = 0;
    //drip_summer_beans_waterdemand = 0;
    //drip_summer_beans_drip_waterdemand = 0;
    //drip_summer_beans_reduction_gw_demand = 0;



    drip_summer_floriculture_crop_area = 0;
    drip_summer_floriculture_irri_area = 0;
    drip_summer_floriculture_fundingsource = 0;
    drip_summer_floriculture_waterdemand = 0;
    drip_summer_floriculture_drip_waterdemand = 0;
    drip_summer_floriculture_reduction_gw_demand = 0;

    drip_summer_maize_crop_area = 0;
    drip_summer_maize_irri_area = 0;
    drip_summer_maize_fundingsource = 0;
    drip_summer_maize_waterdemand = 0;
    drip_summer_maize_drip_waterdemand = 0;
    drip_summer_maize_reduction_gw_demand = 0;



    drip_summer_fodder_crop_area = 0;
    drip_summer_fodder_irri_area = 0;
    drip_summer_fodder_fundingsource = 0;
    drip_summer_fodder_waterdemand = 0;
    drip_summer_fodder_drip_waterdemand = 0;
    drip_summer_fodder_reduction_gw_demand = 0;


    drip_summer_sugarcane_crop_area = 0;
    drip_summer_sugarcane_irri_area = 0;
    drip_summer_sugarcane_fundingsource = 0;
    drip_summer_sugarcane_waterdemand = 0;
    drip_summer_sugarcane_drip_waterdemand = 0;
    drip_summer_sugarcane_reduction_gw_demand = 0;

    drip_summer_total_waterdemand = 0;
    drip_summer_total_summer_waterdemand = 0;
    drip_summer_total_reduction_waterdemand = 0;
    drip_annual_reduction_waterdemand = 0;




    drip_summer_othercrop_area1 = 0;
    drip_summer_othercrop_irri_area1 = 0;
    drip_summer_othercrop_water_req1 = 0;
    drip_summer_othercrop_waterdemand1 = 0;
    drip_summer_othercrop_drip_waterdemand1 = 0;
    drip_summer_othercrop_reduc_gw_demand1 = 0;


    drip_summer_othercrop_area2 = 0;
    drip_summer_othercrop_irri_area2 = 0;
    drip_summer_othercrop_water_req2 = 0;
    drip_summer_othercrop_waterdemand2 = 0;
    drip_summer_othercrop_drip_waterdemand2 = 0;
    drip_summer_othercrop_reduc_gw_demand2 = 0;


    drip_summer_othercrop_area3 = 0;
    drip_summer_othercrop_irri_area3 = 0;
    drip_summer_othercrop_water_req3 = 0;
    drip_summer_othercrop_waterdemand3 = 0;
    drip_summer_othercrop_drip_waterdemand3 = 0;
    drip_summer_othercrop_reduc_gw_demand3 = 0;


    drip_summer_othercrop_area4 = 0;
    drip_summer_othercrop_irri_area4 = 0;
    drip_summer_othercrop_water_req4 = 0;
    drip_summer_othercrop_waterdemand4 = 0;
    drip_summer_othercrop_drip_waterdemand4 = 0;
    drip_summer_othercrop_reduc_gw_demand4 = 0;


    drip_summer_othercrop_area5 = 0;
    drip_summer_othercrop_irri_area5 = 0;
    drip_summer_othercrop_water_req5 = 0;
    drip_summer_othercrop_waterdemand5 = 0;
    drip_summer_othercrop_drip_waterdemand5 = 0;
    drip_summer_othercrop_reduc_gw_demand5 = 0;

    //drip_summer_othyercrop_waterdemand = 0;
    //drip_summer_othercrop_drip_waterdemand = 0;
    //drip_summer_othercrop_reduc_gw_demand = 0;

    Drip_Total_Water_Demand_for_Summer_Crops = 0;

    drip_summer_horticulture_waterdemand = 0;
    drip_summer_horticulture_netwater_waterdemand = 0;
    drip_summer_horticulture_reduction_gw_demand = 0;

    // Other

    var drip_summer_othercrop_area1 = $('#drip_summer_othercrop_area1').val();
    if (typeof drip_summer_othercrop_area1 == 'undefined') {
        drip_summer_othercrop_area1 = 0;
    }
    var drip_summer_othercrop_irri_area1 = $('#drip_summer_othercrop_irri_area1').val();
    if (typeof drip_summer_othercrop_irri_area1 == 'undefined') {
        drip_summer_othercrop_irri_area1 = 0;
    }
    var drip_summer_othercrop_water_req1 = $('#drip_summer_othercrop_water_req1').val();
    if (typeof drip_summer_othercrop_water_req1 == 'undefined') {
        drip_summer_othercrop_water_req1 = 0;
    }
    if (drip_summer_othercrop_area1 != "") {
        if (drip_summer_othercrop_water_req1 != "") {
            drip_summer_othercrop_waterdemand1 = parseFloat(drip_summer_othercrop_area1) * parseFloat(drip_summer_othercrop_water_req1) * 0.001;
        } else {
            drip_summer_othercrop_waterdemand1 = parseFloat(drip_summer_othercrop_area1) * 0 * 0.001;
            drip_summer_othercrop_water_req1 = 0;
        }
        // drip_summer_othercrop_waterdemand1 = parseFloat(drip_summer_othercrop_area1) * 1550 * 0.001;

        if (drip_summer_othercrop_irri_area1 == "") {
            drip_summer_othercrop_irri_area1 = 0;
        }

        drip_summer_othercrop_drip_waterdemand1 = ((parseFloat(drip_summer_othercrop_area1) - parseFloat(drip_summer_othercrop_irri_area1)) * parseFloat(drip_summer_othercrop_water_req1) * 0.001)
            + (parseFloat(drip_summer_othercrop_irri_area1) * parseFloat(drip_summer_othercrop_water_req1) * (1 - 40 / 100) * 0.001);

        //drip_summer_othercrop_drip_waterdemand1 = parseFloat(drip_summer_othercrop_irri_area1) * parseFloat(drip_summer_othercrop_water_req1) * 0.03 * 0.001;
        drip_summer_othercrop_reduc_gw_demand1 = drip_summer_othercrop_waterdemand1 - drip_summer_othercrop_drip_waterdemand1;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_othercrop_waterdemand1 + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_othercrop_drip_waterdemand1;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_othercrop_reduc_gw_demand1;

    }

    var drip_summer_othercrop_area2 = $('#drip_summer_othercrop_area2').val();
    if (typeof drip_summer_othercrop_area2 == 'undefined') {
        drip_summer_othercrop_area2 = 0;
    }
    var drip_summer_othercrop_irri_area2 = $('#drip_summer_othercrop_irri_area2').val();
    if (typeof drip_summer_othercrop_irri_area2 == 'undefined') {
        drip_summer_othercrop_irri_area2 = 0;
    }
    var drip_summer_othercrop_water_req2 = $('#drip_summer_othercrop_water_req2').val();
    if (typeof drip_summer_othercrop_water_req2 == 'undefined') {
        drip_summer_othercrop_water_req2 = 0;
    }
    if (drip_summer_othercrop_area2 != "") {
        if (drip_summer_othercrop_water_req2 != "") {
            drip_summer_othercrop_waterdemand2 = parseFloat(drip_summer_othercrop_area2) * parseFloat(drip_summer_othercrop_water_req2) * 0.001;
        } else {
            drip_summer_othercrop_waterdemand2 = parseFloat(drip_summer_othercrop_area2) * 0 * 0.001;
            drip_summer_othercrop_water_req2 = 0;
        }
        // drip_summer_othercrop_waterdemand2 = parseFloat(drip_summer_othercrop_area2) * 2550 * 0.001;

        if (drip_summer_othercrop_irri_area2 == "") {
            drip_summer_othercrop_irri_area2 = 0;
        }

        drip_summer_othercrop_drip_waterdemand2 = ((parseFloat(drip_summer_othercrop_area2) - parseFloat(drip_summer_othercrop_irri_area2)) * parseFloat(drip_summer_othercrop_water_req2) * 0.001)
            + (parseFloat(drip_summer_othercrop_irri_area2) * parseFloat(drip_summer_othercrop_water_req2) * (1 - 40 / 100) * 0.001);

        //drip_summer_othercrop_drip_waterdemand2 = parseFloat(drip_summer_othercrop_irri_area2) * parseFloat(drip_summer_othercrop_water_req2) * 0.03 * 0.001;
        drip_summer_othercrop_reduc_gw_demand2 = drip_summer_othercrop_waterdemand2 - drip_summer_othercrop_drip_waterdemand2;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_othercrop_waterdemand2 + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_othercrop_drip_waterdemand2;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_othercrop_reduc_gw_demand2;

    }


    var drip_summer_othercrop_area3 = $('#drip_summer_othercrop_area3').val();
    if (typeof drip_summer_othercrop_area3 == 'undefined') {
        drip_summer_othercrop_area3 = 0;
    }
    var drip_summer_othercrop_irri_area3 = $('#drip_summer_othercrop_irri_area3').val();
    if (typeof drip_summer_othercrop_irri_area3 == 'undefined') {
        drip_summer_othercrop_irri_area3 = 0;
    }
    var drip_summer_othercrop_water_req3 = $('#drip_summer_othercrop_water_req3').val();
    if (typeof drip_summer_othercrop_water_req3 == 'undefined') {
        drip_summer_othercrop_water_req3 = 0;
    }
    if (drip_summer_othercrop_area3 != "") {
        if (drip_summer_othercrop_water_req3 != "") {
            drip_summer_othercrop_waterdemand3 = parseFloat(drip_summer_othercrop_area3) * parseFloat(drip_summer_othercrop_water_req3) * 0.001;
        } else {
            drip_summer_othercrop_waterdemand3 = parseFloat(drip_summer_othercrop_area3) * 0 * 0.001;
            drip_summer_othercrop_water_req3 = 0;
        }
        // drip_summer_othercrop_waterdemand3 = parseFloat(drip_summer_othercrop_area3) * 3550 * 0.001;

        if (drip_summer_othercrop_irri_area3 == "") {
            drip_summer_othercrop_irri_area3 = 0;
        }

        drip_summer_othercrop_drip_waterdemand3 = ((parseFloat(drip_summer_othercrop_area3) - parseFloat(drip_summer_othercrop_irri_area3)) * parseFloat(drip_summer_othercrop_water_req3) * 0.001)
            + (parseFloat(drip_summer_othercrop_irri_area3) * parseFloat(drip_summer_othercrop_water_req3) * (1 - 40 / 100) * 0.001);

        //drip_summer_othercrop_drip_waterdemand3 = parseFloat(drip_summer_othercrop_irri_area3) * parseFloat(drip_summer_othercrop_water_req3) * 0.03 * 0.001;
        drip_summer_othercrop_reduc_gw_demand3 = drip_summer_othercrop_waterdemand3 - drip_summer_othercrop_drip_waterdemand3;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_othercrop_waterdemand3 + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_othercrop_drip_waterdemand3;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_othercrop_reduc_gw_demand3;

    }

    var drip_summer_othercrop_area4 = $('#drip_summer_othercrop_area4').val();
    if (typeof drip_summer_othercrop_area4 == 'undefined') {
        drip_summer_othercrop_area4 = 0;
    }
    var drip_summer_othercrop_irri_area4 = $('#drip_summer_othercrop_irri_area4').val();
    if (typeof drip_summer_othercrop_irri_area4 == 'undefined') {
        drip_summer_othercrop_irri_area4 = 0;
    }
    var drip_summer_othercrop_water_req4 = $('#drip_summer_othercrop_water_req4').val();
    if (typeof drip_summer_othercrop_water_req4 == 'undefined') {
        drip_summer_othercrop_water_req4 = 0;
    }
    if (drip_summer_othercrop_area4 != "") {
        if (drip_summer_othercrop_water_req4 != "") {
            drip_summer_othercrop_waterdemand4 = parseFloat(drip_summer_othercrop_area4) * parseFloat(drip_summer_othercrop_water_req4) * 0.001;
        } else {
            drip_summer_othercrop_waterdemand4 = parseFloat(drip_summer_othercrop_area4) * 0 * 0.001;
            drip_summer_othercrop_water_req4 = 0;
        }
        // drip_summer_othercrop_waterdemand4 = parseFloat(drip_summer_othercrop_area4) * 4550 * 0.001;

        if (drip_summer_othercrop_irri_area4 == "") {
            drip_summer_othercrop_irri_area4 = 0;
        }

        drip_summer_othercrop_drip_waterdemand4 = ((parseFloat(drip_summer_othercrop_area4) - parseFloat(drip_summer_othercrop_irri_area4)) * parseFloat(drip_summer_othercrop_water_req4) * 0.001)
            + (parseFloat(drip_summer_othercrop_irri_area4) * parseFloat(drip_summer_othercrop_water_req4) * (1 - 40 / 100) * 0.001);

        //drip_summer_othercrop_drip_waterdemand4 = parseFloat(drip_summer_othercrop_irri_area4) * parseFloat(drip_summer_othercrop_water_req4) * 0.04 * 0.001;
        drip_summer_othercrop_reduc_gw_demand4 = drip_summer_othercrop_waterdemand4 - drip_summer_othercrop_drip_waterdemand4;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_othercrop_waterdemand4 + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_othercrop_drip_waterdemand4;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_othercrop_reduc_gw_demand4;

    }


    var drip_summer_othercrop_area5 = $('#drip_summer_othercrop_area5').val();
    if (typeof drip_summer_othercrop_area5 == 'undefined') {
        drip_summer_othercrop_area5 = 0;
    }
    var drip_summer_othercrop_irri_area5 = $('#drip_summer_othercrop_irri_area5').val();
    if (typeof drip_summer_othercrop_irri_area5 == 'undefined') {
        drip_summer_othercrop_irri_area5 = 0;
    }
    var drip_summer_othercrop_water_req5 = $('#drip_summer_othercrop_water_req5').val();
    if (typeof drip_summer_othercrop_water_req5 == 'undefined') {
        drip_summer_othercrop_water_req5 = 0;
    }
    if (drip_summer_othercrop_area5 != "") {
        if (drip_summer_othercrop_water_req5 != "") {
            drip_summer_othercrop_waterdemand5 = parseFloat(drip_summer_othercrop_area5) * parseFloat(drip_summer_othercrop_water_req5) * 0.001;
        } else {
            drip_summer_othercrop_waterdemand5 = parseFloat(drip_summer_othercrop_area5) * 0 * 0.001;
            drip_summer_othercrop_water_req5 = 0;
        }
        // drip_summer_othercrop_waterdemand5 = parseFloat(drip_summer_othercrop_area5) * 5550 * 0.001;

        if (drip_summer_othercrop_irri_area5 == "") {
            drip_summer_othercrop_irri_area5 = 0;
        }

        drip_summer_othercrop_drip_waterdemand5 = ((parseFloat(drip_summer_othercrop_area5) - parseFloat(drip_summer_othercrop_irri_area5)) * parseFloat(drip_summer_othercrop_water_req5) * 0.001)
            + (parseFloat(drip_summer_othercrop_irri_area5) * parseFloat(drip_summer_othercrop_water_req5) * (1 - 50 / 100) * 0.001);

        //drip_summer_othercrop_drip_waterdemand5 = parseFloat(drip_summer_othercrop_irri_area5) * parseFloat(drip_summer_othercrop_water_req5) * 0.05 * 0.001;
        drip_summer_othercrop_reduc_gw_demand5 = drip_summer_othercrop_waterdemand5 - drip_summer_othercrop_drip_waterdemand5;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_othercrop_waterdemand5 + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_othercrop_drip_waterdemand5;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_othercrop_reduc_gw_demand5;

    }


    //Horticulture

    var drip_summer_horticulture_crop_area = $('#drip_summer_horticulture_crop_area').val();
    var drip_summer_horticulture_irri_area = $('#drip_summer_horticulture_irri_area').val();
    var drip_summer_horticulture_water_req = $('#drip_summer_horticulture_water_req').val();
    if (drip_summer_horticulture_crop_area != "") {
        if (drip_summer_horticulture_water_req != "") {
            drip_summer_horticulture_waterdemand = parseFloat(drip_summer_horticulture_crop_area) * parseFloat(drip_summer_horticulture_water_req) * 0.001;
        } else {
            drip_summer_horticulture_waterdemand = parseFloat(drip_summer_horticulture_crop_area) * 0 * 0.001;
            drip_summer_horticulture_water_req = 0;
        }
        // drip_summer_horticulture_waterdemand = parseFloat(drip_summer_horticulture_crop_area) * 1550 * 0.001;

        if (drip_summer_horticulture_irri_area == "") {
            drip_summer_horticulture_irri_area = 0;
        }

        drip_summer_horticulture_netwater_waterdemand = ((parseFloat(drip_summer_horticulture_crop_area) - parseFloat(drip_summer_horticulture_irri_area)) * parseFloat(drip_summer_horticulture_water_req) * 0.001)
            + (parseFloat(drip_summer_horticulture_irri_area) * parseFloat(drip_summer_horticulture_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_horticulture_netwater_waterdemand = parseFloat(drip_summer_horticulture_irri_area) * parseFloat(drip_summer_horticulture_water_req) * 0.03 * 0.001;
        drip_summer_horticulture_reduction_gw_demand = drip_summer_horticulture_waterdemand - drip_summer_horticulture_netwater_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_horticulture_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_horticulture_netwater_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_horticulture_reduction_gw_demand;

    }


    //Sericulture
    var drip_summer_sericulture_crop_area = $('#drip_summer_sericulture_crop_area').val();
    var drip_summer_sericulture_irri_area = $('#drip_summer_sericulture_irri_area').val();
    var drip_summer_sericulture_water_req = $('#drip_summer_sericulture_water_req').val();
    if (drip_summer_sericulture_crop_area != "") {
        if (drip_summer_sericulture_water_req != "") {
            drip_summer_sericulture_waterdemand = parseFloat(drip_summer_sericulture_crop_area) * parseFloat(drip_summer_sericulture_water_req) * 0.001;
        } else {
            drip_summer_sericulture_waterdemand = parseFloat(drip_summer_sericulture_crop_area) * 0 * 0.001;
            drip_summer_sericulture_water_req = 0;
        }
        // drip_summer_sericulture_waterdemand = parseFloat(drip_summer_sericulture_crop_area) * 1550 * 0.001;

        if (drip_summer_sericulture_irri_area == "") {
            drip_summer_sericulture_irri_area = 0;
        }

        drip_summer_sericulture_drip_waterdemand = ((parseFloat(drip_summer_sericulture_crop_area) - parseFloat(drip_summer_sericulture_irri_area)) * parseFloat(drip_summer_sericulture_water_req) * 0.001)
            + (parseFloat(drip_summer_sericulture_irri_area) * parseFloat(drip_summer_sericulture_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_sericulture_drip_waterdemand = parseFloat(drip_summer_sericulture_irri_area) * parseFloat(drip_summer_sericulture_water_req) * 0.03 * 0.001;
        drip_summer_sericulture_reduction_gw_demand = drip_summer_sericulture_waterdemand - drip_summer_sericulture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_sericulture_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_sericulture_drip_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_sericulture_reduction_gw_demand;

    }


    //Tomota

    var drip_summer_tomoto_crop_area = $('#drip_summer_tomoto_crop_area').val();
    var drip_summer_tomoto_irri_area = $('#drip_summer_tomoto_irri_area').val();
    var drip_summer_tomoto_water_req = $('#drip_summer_tomoto_water_req').val();
    if (drip_summer_tomoto_crop_area != "") {
        if (drip_summer_tomoto_water_req != "") {
            drip_summer_tomoto_waterdemand = parseFloat(drip_summer_tomoto_crop_area) * parseFloat(drip_summer_tomoto_water_req) * 0.001;
        } else {
            drip_summer_tomoto_waterdemand = parseFloat(drip_summer_tomoto_crop_area) * 0 * 0.001;
            drip_summer_tomoto_water_req = 0;
        }
        // drip_summer_tomoto_waterdemand = parseFloat(drip_summer_tomoto_crop_area) * 600 * 0.001;

        if (drip_summer_tomoto_irri_area == "") {
            drip_summer_tomoto_irri_area = 0;
        }

        drip_summer_tomoto_drip_waterdemand = ((parseFloat(drip_summer_tomoto_crop_area) - parseFloat(drip_summer_tomoto_irri_area)) * parseFloat(drip_summer_tomoto_water_req) * 0.001)
            + (parseFloat(drip_summer_tomoto_irri_area) * parseFloat(drip_summer_tomoto_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_tomoto_drip_waterdemand = parseFloat(drip_summer_tomoto_irri_area) * parseFloat(drip_summer_tomoto_water_req) * 0.03 * 0.001;
        drip_summer_tomoto_reduction_gw_demand = drip_summer_tomoto_waterdemand - drip_summer_tomoto_drip_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_tomoto_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_tomoto_drip_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_tomoto_reduction_gw_demand;

    }


    //Cabbage

    //var drip_summer_cabbage_crop_area = $('#drip_summer_cabbage_crop_area').val();
    //var drip_summer_cabbage_irri_area = $('#drip_summer_tomoto_irri_area').val();
    //var drip_summer_cabbage_water_req = $('#drip_summer_cabbage_water_req').val();
    //if (drip_summer_cabbage_crop_area != "") {
    //    if (drip_summer_cabbage_water_req != "") {
    //        drip_summer_cabbage_waterdemand = parseFloat(drip_summer_cabbage_crop_area) * parseFloat(drip_summer_cabbage_water_req) * 0.001;
    //    } else {
    //        drip_summer_cabbage_waterdemand = parseFloat(drip_summer_cabbage_crop_area) * 0 * 0.001;
    //        drip_summer_cabbage_water_req = 0;
    //    }
    //    //drip_summer_cabbage_waterdemand = parseFloat(drip_summer_cabbage_crop_area) * 425 * 0.001;

    //    if (drip_summer_cabbage_irri_area == "") {
    //        drip_summer_cabbage_irri_area = 0;
    //    }

    //    drip_summer_cabbage_drip_waterdemand = ((parseFloat(drip_summer_cabbage_crop_area) - parseFloat(drip_summer_cabbage_irri_area)) * parseFloat(drip_summer_cabbage_water_req) * 0.001)
    //        + (parseFloat(drip_summer_cabbage_irri_area) * parseFloat(drip_summer_cabbage_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_summer_cabbage_drip_waterdemand = parseFloat(drip_summer_cabbage_irri_area) * parseFloat(drip_summer_cabbage_water_req) * 0.03 * 0.001;
    //    drip_summer_cabbage_reduction_gw_demand = parseFloat(drip_summer_cabbage_waterdemand) - parseFloat(drip_summer_cabbage_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Summer_Crops = parseFloat(drip_summer_cabbage_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Summer_Crops);
    //    drip_summer_total_summer_waterdemand = parseFloat(drip_summer_total_summer_waterdemand) + parseFloat(drip_summer_cabbage_drip_waterdemand);
    //    drip_summer_total_reduction_waterdemand = parseFloat(drip_summer_total_reduction_waterdemand) + parseFloat(drip_summer_cabbage_reduction_gw_demand);

    //}

    //Beans

    //var drip_summer_beans_crop_area = $('#drip_summer_beans_crop_area').val();
    //var drip_summer_beans_irri_area = $('#drip_summer_beans_irri_area').val();
    //var drip_summer_beans_water_req = $('#drip_summer_beans_water_req').val();
    //if (drip_summer_beans_crop_area != "") {
    //    if (drip_summer_beans_water_req != "") {
    //        drip_summer_beans_waterdemand = parseFloat(drip_summer_beans_crop_area) * parseFloat(drip_summer_beans_water_req) * 0.001;
    //    } else {
    //        drip_summer_beans_waterdemand = parseFloat(drip_summer_beans_crop_area) * 0 * 0.001;
    //        drip_summer_beans_water_req = 0;
    //    }
    //    // drip_summer_beans_waterdemand = parseFloat(drip_summer_beans_crop_area) * 400 * 0.001;

    //    if (drip_summer_beans_irri_area == "") {
    //        drip_summer_beans_irri_area = 0;
    //    }

    //    drip_summer_beans_drip_waterdemand = ((parseFloat(drip_summer_beans_crop_area) - parseFloat(drip_summer_beans_irri_area)) * parseFloat(drip_summer_beans_water_req) * 0.001)
    //        + (parseFloat(drip_summer_beans_irri_area) * parseFloat(drip_summer_beans_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_summer_beans_drip_waterdemand = parseFloat(drip_summer_beans_irri_area) * parseFloat(drip_summer_beans_water_req) * 0.03 * 0.001;
    //    drip_summer_beans_reduction_gw_demand = parseFloat(drip_summer_beans_waterdemand) - parseFloat(drip_summer_beans_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Summer_Crops = parseFloat(drip_summer_beans_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Summer_Crops);
    //    drip_summer_total_summer_waterdemand = parseFloat(drip_summer_total_summer_waterdemand) + parseFloat(drip_summer_beans_drip_waterdemand);
    //    drip_summer_total_reduction_waterdemand = parseFloat(drip_summer_total_reduction_waterdemand) + parseFloat(drip_summer_beans_reduction_gw_demand);

    //}

    //Floriculture

    var drip_summer_floriculture_crop_area = $('#drip_summer_floriculture_crop_area').val();
    var drip_summer_floriculture_irri_area = $('#drip_summer_floriculture_irri_area').val();
    var drip_summer_floriculture_water_req = $('#drip_summer_floriculture_water_req').val();
    if (drip_summer_floriculture_crop_area != "") {
        if (drip_summer_floriculture_water_req != "") {
            drip_summer_floriculture_waterdemand = parseFloat(drip_summer_floriculture_crop_area) * parseFloat(drip_summer_floriculture_water_req) * 0.001;
        } else {
            drip_summer_floriculture_waterdemand = parseFloat(drip_summer_floriculture_crop_area) * 0 * 0.001;
            drip_summer_floriculture_water_req = 0;
        }
        //drip_summer_floriculture_waterdemand = parseFloat(drip_summer_floriculture_crop_area) * 1200 * 0.001;

        if (drip_summer_floriculture_irri_area == "") {
            drip_summer_floriculture_irri_area = 0;
        }

        drip_summer_floriculture_drip_waterdemand = ((parseFloat(drip_summer_floriculture_crop_area) - parseFloat(drip_summer_floriculture_irri_area)) * parseFloat(drip_summer_floriculture_water_req) * 0.001)
            + (parseFloat(drip_summer_floriculture_irri_area) * parseFloat(drip_summer_floriculture_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_floriculture_drip_waterdemand = parseFloat(drip_summer_floriculture_irri_area) * parseFloat(drip_summer_floriculture_water_req) * 0.03 * 0.001;
        drip_summer_floriculture_reduction_gw_demand = drip_summer_floriculture_waterdemand - drip_summer_floriculture_drip_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_floriculture_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_floriculture_drip_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_floriculture_reduction_gw_demand;

    }


    //Maize

    var drip_summer_maize_crop_area = $('#drip_summer_maize_crop_area').val();
    var drip_summer_maize_irri_area = $('#drip_summer_maize_irri_area').val();
    var drip_summer_maize_water_req = $('#drip_summer_maize_water_req').val();
    if (drip_summer_maize_crop_area != "") {
        if (drip_summer_maize_water_req != "") {
            drip_summer_maize_waterdemand = parseFloat(drip_summer_maize_crop_area) * parseFloat(drip_summer_maize_water_req) * 0.001;
        } else {
            drip_summer_maize_waterdemand = parseFloat(drip_summer_maize_crop_area) * 0 * 0.001;
            drip_summer_maize_water_req = 0;
        }
        //drip_summer_maize_waterdemand = parseFloat(drip_summer_maize_crop_area) * 650 * 0.001;

        if (drip_summer_maize_irri_area == "") {
            drip_summer_maize_irri_area = 0;
        }

        drip_summer_maize_drip_waterdemand = ((parseFloat(drip_summer_maize_crop_area) - parseFloat(drip_summer_maize_irri_area)) * parseFloat(drip_summer_maize_water_req) * 0.001)
            + (parseFloat(drip_summer_maize_irri_area) * parseFloat(drip_summer_maize_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_maize_drip_waterdemand = parseFloat(drip_summer_maize_irri_area) * parseFloat(drip_summer_maize_water_req) * 0.03 * 0.001;
        drip_summer_maize_reduction_gw_demand = drip_summer_maize_waterdemand - drip_summer_maize_drip_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_maize_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_maize_drip_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_maize_reduction_gw_demand;

    }


    //Fodder

    var drip_summer_fodder_crop_area = $('#drip_summer_fodder_crop_area').val();
    var drip_summer_fodder_irri_area = $('#drip_summer_fodder_irri_area').val();
    var drip_summer_fodder_water_req = $('#drip_summer_fodder_water_req').val();
    if (drip_summer_fodder_crop_area != "") {
        if (drip_summer_fodder_water_req != "") {
            drip_summer_fodder_waterdemand = parseFloat(drip_summer_fodder_crop_area) * parseFloat(drip_summer_fodder_water_req) * 0.001;
        } else {
            drip_summer_fodder_waterdemand = parseFloat(drip_summer_fodder_crop_area) * 0 * 0.001;
            drip_summer_fodder_water_req = 0;
        }
        //drip_summer_fodder_waterdemand = parseFloat(drip_summer_fodder_crop_area) * 1400 * 0.001;

        if (drip_summer_fodder_irri_area == "") {
            drip_summer_fodder_irri_area = 0;
        }

        drip_summer_fodder_drip_waterdemand = ((parseFloat(drip_summer_fodder_crop_area) - parseFloat(drip_summer_fodder_irri_area)) * parseFloat(drip_summer_fodder_water_req) * 0.001)
            + (parseFloat(drip_summer_fodder_irri_area) * parseFloat(drip_summer_fodder_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_fodder_drip_waterdemand = parseFloat(drip_summer_fodder_irri_area) * parseFloat(drip_summer_fodder_water_req) * 0.03 * 0.001;
        drip_summer_fodder_reduction_gw_demand = drip_summer_fodder_waterdemand - drip_summer_fodder_drip_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_fodder_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_fodder_drip_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_fodder_reduction_gw_demand;

    }



    //Sugarcane

    var drip_summer_sugarcane_crop_area = $('#drip_summer_sugarcane_crop_area').val();
    var drip_summer_sugarcane_irri_area = $('#drip_summer_sugarcane_irri_area').val();
    var drip_summer_sugarcane_water_req = $('#drip_summer_sugarcane_water_req').val();
    if (drip_summer_sugarcane_crop_area != "") {
        if (drip_summer_sugarcane_water_req != "") {
            drip_summer_sugarcane_waterdemand = parseFloat(drip_summer_sugarcane_crop_area) * parseFloat(drip_summer_sugarcane_water_req) * 0.001;
        } else {
            drip_summer_sugarcane_waterdemand = parseFloat(drip_summer_sugarcane_crop_area) * 0 * 0.001;
            drip_summer_sugarcane_water_req = 0;
        }
        // drip_summer_sugarcane_waterdemand = parseFloat(drip_summer_sugarcane_crop_area) * 2000 * 0.001;

        if (drip_summer_sugarcane_irri_area == "") {
            drip_summer_sugarcane_irri_area = 0;
        }

        drip_summer_sugarcane_drip_waterdemand = ((parseFloat(drip_summer_sugarcane_crop_area) - parseFloat(drip_summer_sugarcane_irri_area)) * parseFloat(drip_summer_sugarcane_water_req) * 0.001)
            + (parseFloat(drip_summer_sugarcane_irri_area) * parseFloat(drip_summer_sugarcane_water_req) * (1 - 40 / 100) * 0.001);

        //drip_summer_sugarcane_drip_waterdemand = parseFloat(drip_summer_sugarcane_irri_area) * parseFloat(drip_summer_sugarcane_water_req) * 0.03 * 0.001;
        drip_summer_sugarcane_reduction_gw_demand = drip_summer_sugarcane_waterdemand - drip_summer_sugarcane_drip_waterdemand;

        Drip_Total_Water_Demand_for_Summer_Crops = drip_summer_sugarcane_waterdemand + Drip_Total_Water_Demand_for_Summer_Crops;
        drip_summer_total_summer_waterdemand = drip_summer_total_summer_waterdemand + drip_summer_sugarcane_drip_waterdemand;
        drip_summer_total_reduction_waterdemand = drip_summer_total_reduction_waterdemand + drip_summer_sugarcane_reduction_gw_demand;

    }



    //other crop

    //var drip_summer_othercrop_area = $('#drip_summer_othercrop_area').val();
    //var drip_summer_othercrop_irri_area = $('#drip_summer_othercrop_irri_area').val();
    //var drip_summer_othercrop_water_req = $('#drip_summer_othercrop_water_req').val();
    //if (drip_summer_othercrop_area != "") {
    //    if (drip_summer_othercrop_water_req != "") {
    //        drip_summer_othyercrop_waterdemand = parseFloat(drip_summer_othercrop_area) * parseFloat(drip_summer_othercrop_water_req) * 0.001;
    //    } else {
    //        drip_summer_othyercrop_waterdemand = parseFloat(drip_summer_othercrop_area) * 0 * 0.001;
    //        drip_summer_othercrop_water_req = 0;
    //    }
    //    // drip_summer_sugarcane_waterdemand = parseFloat(drip_summer_sugarcane_crop_area) * 2000 * 0.001;

    //    if (drip_summer_othercrop_irri_area == "") {
    //        drip_summer_othercrop_irri_area = 0;
    //    }

    //    drip_summer_othercrop_drip_waterdemand = ((parseFloat(drip_summer_othercrop_area) - parseFloat(drip_summer_othercrop_irri_area)) * parseFloat(drip_summer_othercrop_water_req) * 0.001)
    //        + (parseFloat(drip_summer_othercrop_irri_area) * parseFloat(drip_summer_othercrop_water_req) * (1 - 40 / 100) * 0.001);

    //    // drip_summer_othercrop_drip_waterdemand = parseFloat(drip_summer_othercrop_irri_area) * parseFloat(drip_summer_othercrop_water_req) * 0.03 * 0.001;
    //    drip_summer_othercrop_reduc_gw_demand = parseFloat(drip_summer_othyercrop_waterdemand) - parseFloat(drip_summer_othercrop_drip_waterdemand);

    //    Drip_Total_Water_Demand_for_Summer_Crops = parseFloat(drip_summer_othyercrop_waterdemand) + parseFloat(Drip_Total_Water_Demand_for_Summer_Crops);
    //    drip_summer_total_summer_waterdemand = parseFloat(drip_summer_total_summer_waterdemand) + parseFloat(drip_summer_othercrop_drip_waterdemand);
    //    drip_summer_total_reduction_waterdemand = parseFloat(drip_summer_total_reduction_waterdemand) + parseFloat(drip_summer_othercrop_reduc_gw_demand);

    //}


    $('#drip_summer_total_waterdemand').text(Drip_Total_Water_Demand_for_Summer_Crops.toFixed(2));
    $('#drip_summer_total_summer_waterdemand').text(drip_summer_total_summer_waterdemand.toFixed(2));

    $('#Drip_Crop_water_Demand').text(Drip_Total_Water_Demand_for_Summer_Crops.toFixed(2));
    $('#drip_summer_total_reduction_waterdemand').text(drip_summer_total_reduction_waterdemand.toFixed(2));


    var TotalAnnual_Drip_Reduction = parseFloat(drip_kharif_total_reduction_waterdemand) + parseFloat(drip_rabi_total_reduction_waterdemand) + parseFloat(drip_summer_total_reduction_waterdemand);
    $('#TotalAnnual_Drip_Reduction').text(TotalAnnual_Drip_Reduction.toFixed(2));
}




function drip_savedata() {
    Drip_Kharif_WaterRequire();
    Drip_Rabi_WaterRequire();
    Drip_Crop_WaterRequire();
    $('#SAVE_BTN2').prop('disabled', true);

    var obj = {};





    obj.drip_approx_estimated_cost = $('#drip_approx_estimated_cost').val();
    obj.drip_cost_type = $('#drip_cost_type').val();

    //paddy
    obj.drip_kharif_paddy_crop_area = $('#drip_kharif_paddy_crop_area').val();
    obj.drip_kharif_paddy_fundingsource = $('#Drip_kharif_Paddy_FundingSource').val();
    obj.drip_kharif_paddy_irri_area = $('#drip_kharif_paddy_irri_area').val();
    obj.drip_kharif_paddy_waterdemand = parseFloat(drip_kharif_paddy_waterdemand).toFixed(2);
    obj.drip_kharif_paddy_drip_waterdemand = parseFloat(drip_kharif_paddy_drip_waterdemand).toFixed(2);
    obj.drip_kharif_paddy_reduction_gw_demand = parseFloat(drip_kharif_paddy_reduction_gw_demand).toFixed(2);

    //Ragi
    obj.drip_kharif_ragi_crop_area = $('#drip_kharif_ragi_crop_area').val();
    obj.drip_kharif_ragi_fundingsource = $('#Drip_kharif_Ragi_FundingSource').val();
    obj.drip_kharif_ragi_irri_area = $('#drip_kharif_ragi_irri_area').val();
    obj.drip_kharif_ragi_waterdemand = parseFloat(drip_kharif_ragi_waterdemand).toFixed(2);
    obj.drip_kharif_ragi_drip_waterdemand = parseFloat(drip_kharif_ragi_drip_waterdemand).toFixed(2);
    obj.drip_kharif_ragi_reduction_gw_demand = parseFloat(drip_kharif_ragi_reduction_gw_demand).toFixed(2);

    //groundnut
    obj.drip_kharif_groundnut_crop_area = $('#drip_kharif_groundnut_crop_area').val();
    obj.drip_kharif_groundnut_fundingsource = $('#Drip_kharif_GroundNut_FundingSource').val();

    obj.drip_kharif_groundnut_irri_area = $('#drip_kharif_groundnut_irri_area').val();
    obj.drip_kharif_groundnut_waterdemand = parseFloat(drip_kharif_groundnut_waterdemand).toFixed(2);
    obj.drip_kharif_groundnut_drip_waterdemand = parseFloat(drip_kharif_groundnut_drip_waterdemand).toFixed(2);
    obj.drip_kharif_groundnut_reduction_gw_demand = parseFloat(drip_kharif_groundnut_reduction_gw_demand).toFixed(2);


    //sugarcane
    obj.drip_kharif_sugarcane_crop_area = $('#drip_kharif_sugarcane_crop_area').val();
    obj.drip_kharif_sugarcane_fundingsource = $('#Drip_kharif_Sugarcane_FundingSource').val();

    obj.drip_kharif_sugarcane_irri_area = $('#drip_kharif_sugarcane_irri_area').val();
    obj.drip_kharif_sugarcane_waterdemand = parseFloat(drip_kharif_sugarcane_waterdemand).toFixed(2);
    obj.drip_kharif_sugarcane_drip_waterdemand = parseFloat(drip_kharif_sugarcane_drip_waterdemand).toFixed(2);
    obj.drip_kharif_sugarcane_reduction_gw_demand = parseFloat(drip_kharif_sugarcane_reduction_gw_demand).toFixed(2);

    //Tomoto


    obj.drip_kharif_tomoto_crop_area = $('#drip_kharif_tomoto_crop_area').val();
    obj.drip_kharif_tomoto_fundingsource = $('#Drip_kharif_Tomoto_FundingSource').val();

    obj.drip_kharif_tomoto_irri_area = $('#drip_kharif_tomoto_irri_area').val();
    obj.drip_kharif_tomoto_waterdemand = parseFloat(drip_kharif_tomoto_waterdemand).toFixed(2);
    obj.drip_kharif_tomoto_drip_waterdemand = parseFloat(drip_kharif_tomoto_drip_waterdemand).toFixed(2);
    obj.drip_kharif_tomoto_reduction_gw_demand = parseFloat(drip_kharif_tomoto_reduction_gw_demand).toFixed(2);

    //Cabbage

    //obj.drip_kharif_cabbage_crop_area = $('#drip_kharif_cabbage_crop_area').val();
    //obj.drip_kharif_cabbage_fundingsource = $('#Drip_kharif_Cabbage_FundingSource').val();

    //obj.drip_kharif_cabbage_irri_area = $('#drip_kharif_cabbage_irri_area').val();
    //obj.drip_kharif_cabbage_waterdemand = parseFloat(drip_kharif_cabbage_waterdemand).toFixed(2);
    //obj.drip_kharif_cabbage_drip_waterdemand = parseFloat(drip_kharif_cabbage_drip_waterdemand).toFixed(2);
    //obj.drip_kharif_cabbage_reduction_gw_demand = parseFloat(drip_kharif_cabbage_reduction_gw_demand).toFixed(2);

    //Beans

    //obj.drip_kharif_beans_crop_area = $('#drip_kharif_beans_crop_area').val();
    //obj.drip_kharif_beans_fundingsource = $('#Drip_kharif_Beans_FundingSource').val();

    //obj.drip_kharif_beans_irri_area = $('#drip_kharif_beans_irri_area').val();
    //obj.drip_kharif_beans_waterdemand = parseFloat(drip_kharif_beans_waterdemand).toFixed(2);
    //obj.drip_kharif_beans_drip_waterdemand = parseFloat(drip_kharif_beans_drip_waterdemand).toFixed(2);
    //obj.drip_kharif_beans_reduction_gw_demand = parseFloat(drip_kharif_beans_reduction_gw_demand).toFixed(2);

    //floriculture
    obj.drip_kharif_floriculture_crop_area = $('#drip_kharif_floriculture_crop_area').val();
    obj.drip_kharif_floriculture_fundingsource = $('#Drip_kharif_Floriculture_FundingSource').val();

    obj.drip_kharif_floriculture_irri_area = $('#drip_kharif_floriculture_irri_area').val();
    obj.drip_kharif_floriculture_waterdemand = parseFloat(drip_kharif_floriculture_waterdemand).toFixed(2);
    obj.drip_kharif_floriculture_drip_waterdemand = parseFloat(drip_kharif_floriculture_drip_waterdemand).toFixed(2);
    obj.drip_kharif_floriculture_reduction_gw_demand = parseFloat(drip_kharif_floriculture_reduction_gw_demand).toFixed(2);

    //sericulture

    obj.drip_kharif_sericulture_crop_area = $('#drip_kharif_sericulture_crop_area').val();
    obj.drip_kharif_sericulture_fundingsource = $('#Drip_kharif_Sericulture_FundingSource').val();

    obj.drip_kharif_sericulture_irri_area = $('#drip_kharif_sericulture_irri_area').val();
    obj.drip_kharif_sericulture_waterdemand = parseFloat(drip_kharif_sericulture_waterdemand).toFixed(2);
    obj.drip_kharif_sericulture_drip_waterdemand = parseFloat(drip_kharif_sericulture_drip_waterdemand).toFixed(2);
    obj.drip_kharif_sericulture_reduction_gw_demand = parseFloat(drip_kharif_sericulture_reduction_gw_demand).toFixed(2);

    //Cucumber

    //obj.drip_kharif_cucumber_crop_area = $('#drip_kharif_cucumber_crop_area').val();
    //obj.drip_kharif_cucumber_fundingsource = $('#Drip_kharif_Cucmber_FundingSource').val();

    //obj.drip_kharif_cucumber_irri_area = $('#drip_kharif_cucumber_irri_area').val();
    //obj.drip_kharif_cucumber_waterdemand = parseFloat(drip_kharif_cucumber_waterdemand).toFixed(2);
    //obj.drip_kharif_cucumber_drip_waterdemand = parseFloat(drip_kharif_cucumber_drip_waterdemand).toFixed(2);
    //obj.drip_kharif_cucumber_reduction_gw_demand = parseFloat(drip_kharif_cucumber_reduction_gw_demand).toFixed(2);

    //banana

    obj.drip_kharif_banana_crop_area = $('#drip_kharif_banana_crop_area').val();
    obj.drip_kharif_banana_fundingsource = $('#Drip_kharif_Banana_FundingSource').val();

    obj.drip_kharif_banana_irri_area = $('#drip_kharif_banana_irri_area').val();
    obj.drip_kharif_banana_waterdemand = parseFloat(drip_kharif_banana_waterdemand).toFixed(2);
    obj.drip_kharif_banana_drip_waterdemand = parseFloat(drip_kharif_banana_drip_waterdemand).toFixed(2);
    obj.drip_kharif_banana_reduction_gw_demand = parseFloat(drip_kharif_banana_reduction_gw_demand).toFixed(2);

    //fodder

    obj.drip_kharif_fodder_crop_area = $('#drip_kharif_fodder_crop_area').val();
    obj.drip_kharif_fodder_fundingsource = $('#Drip_kharif_Fodder_FundingSource').val();

    obj.drip_kharif_fodder_irri_area = $('#drip_kharif_fodder_irri_area').val();
    obj.drip_kharif_fodder_waterdemand = parseFloat(drip_kharif_fodder_waterdemand).toFixed(2);
    obj.drip_kharif_fodder_drip_waterdemand = parseFloat(drip_kharif_fodder_drip_waterdemand).toFixed(2);
    obj.drip_kharif_fodder_reduction_gw_demand = parseFloat(drip_kharif_fodder_reduction_gw_demand).toFixed(2);

    //Maize

    obj.drip_kharif_maize_crop_area = $('#drip_kharif_maize_crop_area').val();
    obj.drip_kharif_maize_fundingsource = $('#Drip_kharif_Maize_FundingSource').val();

    obj.drip_kharif_maize_irri_area = $('#drip_kharif_maize_irri_area').val();
    obj.drip_kharif_maize_waterdemand = parseFloat(drip_kharif_maize_waterdemand).toFixed(2);
    obj.drip_kharif_maize_drip_waterdemand = parseFloat(drip_kharif_maize_drip_waterdemand).toFixed(2);
    obj.drip_kharif_maize_reduction_gw_demand = parseFloat(drip_kharif_maize_reduction_gw_demand).toFixed(2);

    //potato

    //obj.drip_kharif_potato_crop_area = $('#drip_kharif_potato_crop_area').val();
    //obj.drip_kharif_potato_fundingsource = $('#Drip_kharif_Potato_FundingSource').val();

    //obj.drip_kharif_potato_irri_area = $('#drip_kharif_potato_irri_area').val();
    //obj.drip_kharif_potato_waterdemand = parseFloat(drip_kharif_potato_waterdemand).toFixed(2);
    //obj.drip_kharif_potato_drip_waterdemand = parseFloat(drip_kharif_potato_drip_waterdemand).toFixed(2);
    //obj.drip_kharif_potato_reduction_gw_demand = parseFloat(drip_kharif_potato_reduction_gw_demand).toFixed(2);

    //chillies

    obj.drip_kharif_chillies_crop_area = $('#drip_kharif_chillies_crop_area').val();
    obj.drip_kharif_chillies_fundingsource = $('#Drip_kharif_Chillies_FundingSource').val();

    obj.drip_kharif_chillies_irri_area = $('#drip_kharif_chillies_irri_area').val();
    obj.drip_kharif_chillies_waterdemand = parseFloat(drip_kharif_chillies_waterdemand).toFixed(2);
    obj.drip_kharif_chillies_drip_waterdemand = parseFloat(drip_kharif_chillies_drip_waterdemand).toFixed(2);
    obj.drip_kharif_chillies_reduction_gw_demand = parseFloat(drip_kharif_chillies_reduction_gw_demand).toFixed(2);

    //cotton

    obj.drip_kharif_cotton_crop_area = $('#drip_kharif_cotton_crop_area').val();
    obj.drip_kharif_cotton_fundingsource = $('#Drip_kharif_Cotton_FundingSource').val();
    obj.drip_kharif_cotton_irri_area = $('#drip_kharif_cotton_irri_area').val();
    obj.drip_kharif_cotton_waterdemand = parseFloat(drip_kharif_cotton_waterdemand).toFixed(2);
    obj.drip_kharif_cotton_drip_waterdemand = parseFloat(drip_kharif_cotton_drip_waterdemand).toFixed(2);
    obj.drip_kharif_cotton_reduction_gw_demand = parseFloat(drip_kharif_cotton_reduction_gw_demand).toFixed(2);

    //melon


    obj.drip_kharif_melon_crop_area = $('#drip_kharif_melon_crop_area').val();
    obj.drip_kharif_melon_fundingsource = $('#Drip_kharif_Melon_FundingSource').val();

    obj.drip_kharif_melon_irri_area = $('#drip_kharif_melon_irri_area').val();
    obj.drip_kharif_melon_waterdemand = parseFloat(drip_kharif_melon_waterdemand).toFixed(2);
    obj.drip_kharif_melon_drip_waterdemand = parseFloat(drip_kharif_melon_drip_waterdemand).toFixed(2);
    obj.drip_kharif_melon_reduction_gw_demand = parseFloat(drip_kharif_melon_reduction_gw_demand).toFixed(2);

    //citrus
    obj.drip_kharif_citrus_crop_area = $('#drip_kharif_citrus_crop_area').val();
    obj.drip_kharif_citrus_fundingsource = $('#Drip_kharif_Citrus_FundingSource').val();

    obj.drip_kharif_citrus_irri_area = $('#drip_kharif_citrus_irri_area').val();
    obj.drip_kharif_citrus_waterdemand = parseFloat(drip_kharif_citrus_waterdemand).toFixed(2);
    obj.drip_kharif_citrus_drip_waterdemand = parseFloat(drip_kharif_citrus_drip_waterdemand).toFixed(2);
    obj.drip_kharif_citrus_reduction_gw_demand = parseFloat(drip_kharif_citrus_reduction_gw_demand).toFixed(2);

    //peanut

    //obj.drip_kharif_peanut_crop_area = $('#drip_kharif_peanut_crop_area').val();
    //obj.drip_kharif_peanut_fundingsource = $('#Drip_kharif_Peanut_FundingSource').val();

    //obj.drip_kharif_peanut_irri_area = $('#drip_kharif_peanut_irri_area').val();
    //obj.drip_kharif_peanut_waterdemand = parseFloat(drip_kharif_peanut_waterdemand).toFixed(2);
    //obj.drip_kharif_peanut_drip_waterdemand = parseFloat(drip_kharif_peanut_drip_waterdemand).toFixed(2);
    //obj.drip_kharif_peanut_reduction_gw_demand = parseFloat(drip_kharif_peanut_reduction_gw_demand).toFixed(2);


    //horticulture

    obj.drip_kharif_horticulture_crop_area = $('#drip_kharif_horticulture_crop_area').val();
    obj.drip_kharif_horticulture_fundingsource = $('#Drip_kharif_Horticulture_FundingSource').val();

    obj.drip_kharif_horticulture_irri_area = $('#drip_kharif_horticulture_irri_area').val();
    obj.drip_kharif_horticulture_waterdemand = parseFloat(drip_kharif_horticulture_waterdemand).toFixed(2);
    obj.drip_kharif_horticulture_drip_waterdemand = parseFloat(drip_kharif_horticulture_drip_waterdemand).toFixed(2);
    obj.drip_kharif_horticulture_reduction_gw_demand = parseFloat(drip_kharif_horticulture_reduction_gw_demand).toFixed(2);


    //karif crops total
    var Drip_Kharif_Water_Demand = $('#Drip_Kharif_Water_Demand').text();
    obj.drip_kharif_total_waterdemand = parseFloat(Drip_Kharif_Water_Demand).toFixed(2);
    var drip_kharif_total_drip_waterdemand = $('#drip_kharif_total_drip_waterdemand').text();
    obj.drip_kharif_total_drip_waterdemand = parseFloat(drip_kharif_total_drip_waterdemand).toFixed(2);
    var drip_kharif_total_reduction_waterdemand = $('#drip_kharif_total_reduction_waterdemand').text();
    obj.drip_kharif_total_reduction_waterdemand = parseFloat(drip_kharif_total_reduction_waterdemand).toFixed(2);

    //rabi sericulture

    obj.drip_rabi_sericulture_crop_area = $('#drip_rabi_sericulture_crop_area').val();
    obj.drip_rabi_sericulture_fundingsource = $('#Drip_Rabi_Sericulture_FundingSource').val();

    obj.drip_rabi_sericulture_irri_area = $('#drip_rabi_sericulture_irri_area').val();
    obj.drip_rabi_sericulture_waterdemand = parseFloat(drip_rabi_sericulture_waterdemand).toFixed(2);
    obj.drip_rabi_sericulture_drip_waterdemand = parseFloat(drip_rabi_sericulture_drip_waterdemand).toFixed(2);
    obj.drip_rabi_sericulture_reduction_gw_demand = parseFloat(drip_rabi_sericulture_reduction_gw_demand).toFixed(2);

    //rabi tomoto

    obj.drip_rabi_tomoto_crop_area = $('#drip_rabi_tomoto_crop_area').val();
    obj.drip_rabi_tomoto_fundingsource = $('#Drip_Rabi_Tomota_FundingSource').val();

    obj.drip_rabi_tomoto_irri_area = $('#drip_rabi_tomoto_irri_area').val();
    obj.drip_rabi_tomoto_waterdemand = parseFloat(drip_rabi_tomoto_waterdemand).toFixed(2);
    obj.drip_rabi_tomoto_drip_waterdemand = parseFloat(drip_rabi_tomoto_drip_waterdemand).toFixed(2);
    obj.drip_rabi_tomoto_reduction_gw_demand = parseFloat(drip_rabi_tomoto_reduction_gw_demand).toFixed(2);

    //rabi cabbage

    //obj.drip_rabi_cabbage_crop_area = $('#drip_rabi_cabbage_crop_area').val();
    //obj.drip_rabi_cabbage_fundingsource = $('#Drip_Rabi_Cabbage_FundingSource').val();

    //obj.drip_rabi_cabbage_irri_area = $('#drip_rabi_cabbage_irri_area').val();
    //obj.drip_rabi_cabbage_waterdemand = parseFloat(drip_rabi_cabbage_waterdemand).toFixed(2);
    //obj.drip_rabi_cabbage_drip_waterdemand = parseFloat(drip_rabi_cabbage_drip_waterdemand).toFixed(2);
    //obj.drip_rabi_cabbage_reduction_gw_demand = parseFloat(drip_rabi_cabbage_reduction_gw_demand).toFixed(2);

    //rabi beans

    //obj.drip_rabi_beans_crop_area = $('#drip_rabi_beans_crop_area').val();
    //obj.drip_rabi_beans_fundingsource = $('#Drip_Rabi_Beans_FundingSource').val();

    //obj.drip_rabi_beans_irri_area = $('#drip_rabi_beans_irri_area').val();
    //obj.drip_rabi_beans_waterdemand = parseFloat(drip_rabi_beans_waterdemand).toFixed(2);
    //obj.drip_rabi_beans_drip_waterdemand = parseFloat(drip_rabi_beans_drip_waterdemand).toFixed(2);
    //obj.drip_rabi_beans_reduction_gw_demand = parseFloat(drip_rabi_beans_reduction_gw_demand).toFixed(2);

    //rabi floriculture

    obj.drip_rabi_floriculture_crop_area = $('#drip_rabi_floriculture_crop_area').val();
    obj.drip_rabi_floriculture_fundingsource = $('#Drip_Rabi_Floriculture_FundingSource').val();

    obj.drip_rabi_floriculture_irri_area = $('#drip_rabi_floriculture_irri_area').val();
    obj.drip_rabi_floriculture_waterdemand = parseFloat(drip_rabi_floriculture_waterdemand).toFixed(2);
    obj.drip_rabi_floriculture_drip_waterdemand = parseFloat(drip_rabi_floriculture_drip_waterdemand).toFixed(2);
    obj.drip_rabi_floriculture_reduction_gw_demand = parseFloat(drip_rabi_floriculture_reduction_gw_demand).toFixed(2);

    //rabi potato

    //obj.drip_rabi_potato_crop_area = $('#drip_rabi_potato_crop_area').val();
    //obj.drip_rabi_potato_fundingsource = $('#Drip_Rabi_Potato_FundingSource').val();

    //obj.drip_rabi_potato_irri_area = $('#drip_rabi_potato_irri_area').val();
    //obj.drip_rabi_potato_waterdemand = parseFloat(drip_rabi_potato_waterdemand).toFixed(2);
    //obj.drip_rabi_potato_drip_waterdemand = parseFloat(drip_rabi_potato_drip_waterdemand).toFixed(2);
    //obj.drip_rabi_potato_reduction_gw_demand = parseFloat(drip_rabi_potato_reduction_gw_demand).toFixed(2);

    //rabi cucumber

    //obj.drip_rabi_cucumber_crop_area = $('#drip_rabi_cucumber_crop_area').val();
    //obj.drip_rabi_cucumber_fundingsource = $('#Drip_Rabi_Cucumber_FundingSource').val();

    //obj.drip_rabi_cucumber_irri_area = $('#drip_rabi_cucumber_irri_area').val();
    //obj.drip_rabi_cucumber_waterdemand = parseFloat(drip_rabi_cucumber_waterdemand).toFixed(2);
    //obj.drip_rabi_cucumber_drip_waterdemand = parseFloat(drip_rabi_cucumber_drip_waterdemand).toFixed(2);
    //obj.drip_rabi_cucumber_reduction_gw_demand = parseFloat(drip_rabi_cucumber_reduction_gw_demand).toFixed(2);

    //rabi ragi

    obj.drip_rabi_ragi_crop_area = $('#drip_rabi_ragi_crop_area').val();
    obj.drip_rabi_ragi_fundingsource = $('#Drip_Rabi_Ragi_FundingSource').val();

    obj.drip_rabi_ragi_irri_area = $('#drip_rabi_ragi_irri_area').val();
    obj.drip_rabi_ragi_waterdemand = parseFloat(drip_rabi_ragi_waterdemand).toFixed(2);
    obj.drip_rabi_ragi_drip_waterdemand = parseFloat(drip_rabi_ragi_drip_waterdemand).toFixed(2);
    obj.drip_rabi_ragi_reduction_gw_demand = parseFloat(drip_rabi_ragi_reduction_gw_demand).toFixed(2);

    //rabi sugarcane

    obj.drip_rabi_sugarcane_crop_area = $('#drip_rabi_sugarcane_crop_area').val();
    obj.drip_rabi_sugarcane_fundingsource = $('#Drip_Rabi_Sugarcane_FundingSource').val();

    obj.drip_rabi_sugarcane_irri_area = $('#drip_rabi_sugarcane_irri_area').val();
    obj.drip_rabi_sugarcane_waterdemand = parseFloat(drip_rabi_sugarcane_waterdemand).toFixed(2);
    obj.drip_rabi_sugarcane_drip_waterdemand = parseFloat(drip_rabi_sugarcane_drip_waterdemand).toFixed(2);
    obj.drip_rabi_sugarcane_reduction_gw_demand = parseFloat(drip_rabi_sugarcane_reduction_gw_demand).toFixed(2);


    //Rabi Maize
    obj.drip_rabi_maize_crop_area = $('#drip_rabi_maize_crop_area').val();
    obj.drip_rabi_maize_fundingsource = $('#Drip_Rabi_Maize_FundingSource').val();

    obj.drip_rabi_maize_irri_area = $('#drip_rabi_maize_irri_area').val();
    obj.drip_rabi_maize_waterdemand = parseFloat(drip_rabi_maize_waterdemand).toFixed(2);
    obj.drip_rabi_maize_drip_waterdemand = parseFloat(drip_rabi_maize_drip_waterdemand).toFixed(2);
    obj.drip_rabi_maize_reduction_gw_demand = parseFloat(drip_rabi_maize_reduction_gw_demand).toFixed(2);

    //rabi fodder

    obj.drip_rabi_fodder_crop_area = $('#drip_rabi_fodder_crop_area').val();
    obj.drip_rabi_fodder_fundingsource = $('#Drip_Rabi_Fodder_FundingSource').val();

    obj.drip_rabi_fodder_irri_area = $('#drip_rabi_fodder_irri_area').val();
    obj.drip_rabi_fodder_waterdemand = parseFloat(drip_rabi_fodder_waterdemand).toFixed(2);
    obj.drip_rabi_fodder_drip_waterdemand = parseFloat(drip_rabi_fodder_drip_waterdemand).toFixed(2);
    obj.drip_rabi_fodder_reduction_gw_demand = parseFloat(drip_rabi_fodder_reduction_gw_demand).toFixed(2);

    //rabi paddy

    obj.drip_rabi_paddy_crop_area = $('#drip_rabi_paddy_crop_area').val();
    obj.drip_rabi_paddy_fundingsource = $('#Drip_Rabi_Paddy_FundingSource').val();

    obj.drip_rabi_paddy_irri_area = $('#drip_rabi_paddy_irri_area').val();
    obj.drip_rabi_paddy_waterdemand = parseFloat(drip_rabi_paddy_waterdemand).toFixed(2);
    obj.drip_rabi_paddy_drip_waterdemand = parseFloat(drip_rabi_paddy_drip_waterdemand).toFixed(2);
    obj.drip_rabi_paddy_reduction_gw_demand = parseFloat(drip_rabi_paddy_reduction_gw_demand).toFixed(2);

    //rabi alfalfa

    obj.drip_rabi_alfalfa_crop_area = $('#drip_rabi_alfalfa_crop_area').val();
    obj.drip_rabi_alfalfa_fundingsource = $('#Drip_Rabi_Alfalfa_FundingSource').val();

    obj.drip_rabi_alfalfa_irri_area = $('#drip_rabi_alfalfa_irri_area').val();
    obj.drip_rabi_alfalfa_waterdemand = parseFloat(drip_rabi_alfalfa_waterdemand).toFixed(2);
    obj.drip_rabi_alfalfa_drip_waterdemand = parseFloat(drip_rabi_alfalfa_drip_waterdemand).toFixed(2);
    obj.drip_rabi_alfalfa_reduction_gw_demand = parseFloat(drip_rabi_alfalfa_reduction_gw_demand).toFixed(2);

    // rabi onion

    //obj.drip_rabi_onion_crop_area = $('#drip_rabi_onion_crop_area').val();
    //obj.drip_rabi_onion_fundingsource = $('#Drip_Rabi_Onion_FundingSource').val();

    //obj.drip_rabi_onion_irri_area = $('#drip_rabi_onion_irri_area').val();
    //obj.drip_rabi_onion_waterdemand = parseFloat(drip_rabi_onion_waterdemand).toFixed(2);
    //obj.drip_rabi_onion_drip_waterdemand = parseFloat(drip_rabi_onion_drip_waterdemand).toFixed(2);
    //obj.drip_rabi_onion_reduction_gw_demand = parseFloat(drip_rabi_onion_reduction_gw_demand).toFixed(2);

    //rabi horticulture

    obj.drip_rabi_horticulture_crop_area = $('#drip_rabi_horticulture_crop_area').val();
    obj.drip_rabi_horticulture_fundingsource = $('#Drip_Rabi_Hortculture_FundingSource').val();

    obj.drip_rabi_horticulture_irri_area = $('#drip_rabi_horticulture_irri_area').val();
    obj.drip_rabi_horticulture_waterdemand = parseFloat(drip_rabi_horticulture_waterdemand).toFixed(2);
    obj.drip_rabi_horticulture_drip_waterdemand = parseFloat(drip_rabi_horticulture_drip_waterdemand).toFixed(2);
    obj.drip_rabi_horticulture_reduction_gw_demand = parseFloat(drip_rabi_horticulture_reduction_gw_demand).toFixed(2);

    //rabi sunflower
    obj.drip_rabi_sunflower_crop_area = $('#drip_rabi_sunflower_crop_area').val();
    obj.drip_rabi_sunflower_fundingsource = $('#Drip_Rabi_Sunflower_FundingSource').val();

    obj.drip_rabi_sunflower_irri_area = $('#drip_rabi_sunflower_irri_area').val();
    obj.drip_rabi_sunflower_waterdemand = parseFloat(drip_rabi_sunflower_waterdemand).toFixed(2);
    obj.drip_rabi_sunflower_drip_waterdemand = parseFloat(drip_rabi_sunflower_drip_waterdemand).toFixed(2);
    obj.drip_rabi_sunflower_reduction_gw_demand = parseFloat(drip_rabi_sunflower_reduction_gw_demand).toFixed(2);


    //rabi crops total
    var Drip_Rabi_Water_Demand = $('#Drip_Rabi_Water_Demand').text();
    obj.drip_rabi_total_waterdemand = parseFloat(Drip_Rabi_Water_Demand).toFixed(2);
    var drip_rabi_total_rabi_waterdemand = $('#drip_rabi_total_rabi_waterdemand').text();
    obj.drip_rabi_total_rabi_waterdemand = parseFloat(drip_rabi_total_rabi_waterdemand).toFixed(2);
    var drip_rabi_total_reduction_waterdemand = $('#drip_rabi_total_reduction_waterdemand').text();
    obj.drip_rabi_total_reduction_waterdemand = parseFloat(drip_rabi_total_reduction_waterdemand).toFixed(2);


    //summer sericulture

    obj.drip_summer_sericulture_crop_area = $('#drip_summer_sericulture_crop_area').val();
    obj.drip_summer_sericulture_fundingsource = $('#Drip_summer_Sericulture_FundingSource').val();

    obj.drip_summer_sericulture_irri_area = $('#drip_summer_sericulture_irri_area').val();
    obj.drip_summer_sericulture_waterdemand = parseFloat(drip_summer_sericulture_waterdemand).toFixed(2);
    obj.drip_summer_sericulture_drip_waterdemand = parseFloat(drip_summer_sericulture_drip_waterdemand).toFixed(2);
    obj.drip_summer_sericulture_reduction_gw_demand = parseFloat(drip_summer_sericulture_reduction_gw_demand).toFixed(2);

    //summer tomoto

    obj.drip_summer_tomoto_crop_area = $('#drip_summer_tomoto_crop_area').val();
    obj.drip_summer_tomoto_fundingsource = $('#Drip_summer_Tomota_FundingSource').val();

    obj.drip_summer_tomoto_irri_area = $('#drip_summer_tomoto_irri_area').val();
    obj.drip_summer_tomoto_waterdemand = parseFloat(drip_summer_tomoto_waterdemand).toFixed(2);
    obj.drip_summer_tomoto_drip_waterdemand = parseFloat(drip_summer_tomoto_drip_waterdemand).toFixed(2);
    obj.drip_summer_tomoto_reduction_gw_demand = parseFloat(drip_summer_tomoto_reduction_gw_demand).toFixed(2);

    //sumer cabbage

    //obj.drip_summer_cabbage_crop_area = $('#drip_summer_cabbage_crop_area').val();
    //obj.drip_summer_cabbage_fundingsource = $('#Drip_summer_Cabbage_FundingSource').val();

    //obj.drip_summer_cabbage_irri_area = $('#drip_summer_cabbage_irri_area').val();
    //obj.drip_summer_cabbage_waterdemand = parseFloat(drip_summer_cabbage_waterdemand).toFixed(2);
    //obj.drip_summer_cabbage_drip_waterdemand = parseFloat(drip_summer_cabbage_drip_waterdemand).toFixed(2);
    //obj.drip_summer_cabbage_reduction_gw_demand = parseFloat(drip_summer_cabbage_reduction_gw_demand).toFixed(2);

    //summer beans

    //obj.drip_summer_beans_crop_area = $('#drip_summer_beans_crop_area').val();
    //obj.drip_summer_beans_fundingsource = $('#Drip_summer_Beans_FundingSource').val();

    //obj.drip_summer_beans_irri_area = $('#drip_summer_beans_irri_area').val();
    //obj.drip_summer_beans_waterdemand = parseFloat(drip_summer_beans_waterdemand).toFixed(2);
    //obj.drip_summer_beans_drip_waterdemand = parseFloat(drip_summer_beans_drip_waterdemand).toFixed(2);
    //obj.drip_summer_beans_reduction_gw_demand = parseFloat(drip_summer_beans_reduction_gw_demand).toFixed(2);

    //summer floriculture

    obj.drip_summer_floriculture_crop_area = $('#drip_summer_floriculture_crop_area').val();
    obj.drip_summer_floriculture_fundingsource = $('#Drip_summer_Floriculture_FundingSource').val();

    obj.drip_summer_floriculture_irri_area = $('#drip_summer_floriculture_irri_area').val();
    obj.drip_summer_floriculture_waterdemand = parseFloat(drip_summer_floriculture_waterdemand).toFixed(2);
    obj.drip_summer_floriculture_drip_waterdemand = parseFloat(drip_summer_floriculture_drip_waterdemand).toFixed(2);
    obj.drip_summer_floriculture_reduction_gw_demand = parseFloat(drip_summer_floriculture_reduction_gw_demand).toFixed(2);

    //summer maize
    obj.drip_summer_maize_crop_area = $('#drip_summer_maize_crop_area').val();
    obj.drip_summer_maize_fundingsource = $('#Drip_summer_Maize_FundingSource').val();

    obj.drip_summer_maize_irri_area = $('#drip_summer_maize_irri_area').val();
    obj.drip_summer_maize_waterdemand = parseFloat(drip_summer_maize_waterdemand).toFixed(2);
    obj.drip_summer_maize_drip_waterdemand = parseFloat(drip_summer_maize_drip_waterdemand).toFixed(2);
    obj.drip_summer_maize_reduction_gw_demand = parseFloat(drip_summer_maize_drip_waterdemand).toFixed(2);

    //summer fodder
    obj.drip_summer_fodder_crop_area = $('#drip_summer_fodder_crop_area').val();
    obj.drip_summer_fodder_fundingsource = $('#Drip_summer_Fodder_FundingSource').val();

    obj.drip_summer_fodder_irri_area = $('#drip_summer_fodder_irri_area').val();
    obj.drip_summer_fodder_waterdemand = parseFloat(drip_summer_fodder_waterdemand).toFixed(2);
    obj.drip_summer_fodder_drip_waterdemand = parseFloat(drip_summer_fodder_drip_waterdemand).toFixed(2);
    obj.drip_summer_fodder_reduction_gw_demand = parseFloat(drip_summer_fodder_reduction_gw_demand).toFixed(2);

    //summer sugarcane

    obj.drip_summer_sugarcane_crop_area = $('#drip_summer_sugarcane_crop_area').val();
    obj.drip_summer_sugarcane_fundingsource = $('#Drip_summer_Sugarcane_FundingSource').val();

    obj.drip_summer_sugarcane_irri_area = $('#drip_summer_sugarcane_irri_area').val();
    obj.drip_summer_sugarcane_waterdemand = parseFloat(drip_summer_sugarcane_waterdemand).toFixed(2);
    obj.drip_summer_sugarcane_drip_waterdemand = parseFloat(drip_summer_sugarcane_drip_waterdemand).toFixed(2);
    obj.drip_summer_sugarcane_reduction_gw_demand = parseFloat(drip_summer_sugarcane_reduction_gw_demand).toFixed(2);

    //horticulture

    obj.drip_summer_horticulture_crop_area = $('#drip_summer_horticulture_crop_area').val();
    obj.drip_summer_horticulture_irri_area = $('#drip_summer_horticulture_irri_area').val();
    obj.drip_summer_horticulture_water_req = $('#drip_summer_horticulture_water_req').val();
    obj.drip_summer_horticulture_waterdemand = parseFloat(drip_summer_horticulture_waterdemand).toFixed(2);
    obj.drip_summer_horticulture_netwater_waterdemand = parseFloat(drip_summer_horticulture_netwater_waterdemand).toFixed(2);
    obj.drip_summer_horticulture_reduction_gw_demand = parseFloat(drip_summer_horticulture_reduction_gw_demand).toFixed(2);



    //total
    //summer crops total
    var Drip_Crop_water_Demand = $('#Drip_Crop_water_Demand').text();
    obj.drip_summer_total_waterdemand = parseFloat(Drip_Crop_water_Demand).toFixed(2);
    var drip_summer_total_summer_waterdemand = $('#drip_summer_total_summer_waterdemand').text();
    obj.drip_summer_total_summer_waterdemand = parseFloat(drip_summer_total_summer_waterdemand).toFixed(2);
    var drip_summer_total_reduction_waterdemand = $('#drip_summer_total_reduction_waterdemand').text();
    obj.drip_summer_total_reduction_waterdemand = parseFloat(drip_summer_total_reduction_waterdemand).toFixed(2);





    //annual total of reduction water demand
    var TotalAnnual_Drip_Reduction = $('#TotalAnnual_Drip_Reduction').text();
    obj.drip_annual_reduction_waterdemand = parseFloat(TotalAnnual_Drip_Reduction).toFixed(2);

    obj.latitude = lat.toString();
    obj.longitude = long.toString();


    //new columns water requirement
    obj.drip_kharif_paddy_water_req = $('#drip_kharif_paddy_water_req').val();
    obj.drip_kharif_ragi_water_req = $('#drip_kharif_ragi_water_req').val();
    obj.drip_kharif_groundnut_water_req = $('#drip_kharif_groundnut_water_req').val();
    obj.drip_kharif_sugarcane_water_req = $('#drip_kharif_sugarcane_water_req').val();
    obj.drip_kharif_tomoto_water_req = $('#drip_kharif_tomoto_water_req').val();
    // obj.drip_kharif_cabbage_water_req = $('#drip_kharif_cabbage_water_req').val();
    // obj.drip_kharif_beans_water_req = $('#drip_kharif_beans_water_req').val();
    obj.drip_kharif_floriculture_water_req = $('#drip_kharif_floriculture_water_req').val();
    obj.drip_kharif_sericulture_water_req = $('#drip_kharif_sericulture_water_req').val();
    // obj.drip_kharif_cucumber_water_req = $('#drip_kharif_cucumber_water_req').val();
    obj.drip_kharif_banana_water_req = $('#drip_kharif_banana_water_req').val();
    obj.drip_kharif_fodder_water_req = $('#drip_kharif_fodder_water_req').val();
    obj.drip_kharif_maize_water_req = $('#drip_kharif_maize_water_req').val();
    //obj.drip_kharif_potato_water_req = $('#drip_kharif_potato_water_req').val();
    obj.drip_kharif_chillies_water_req = $('#drip_kharif_chillies_water_req').val();
    obj.drip_kharif_cotton_water_req = $('#drip_kharif_cotton_water_req').val();
    obj.drip_kharif_melon_water_req = $('#drip_kharif_melon_water_req').val();
    obj.drip_kharif_citrus_water_req = $('#drip_kharif_citrus_water_req').val();
    // obj.drip_kharif_peanut_water_req = $('#drip_kharif_peanut_water_req').val();
    obj.drip_kharif_horticulture_water_req = $('#drip_kharif_horticulture_water_req').val();
    obj.drip_summer_sugarcane_irri_area = $('#drip_summer_sugarcane_irri_area').val();

    obj.drip_rabi_sericulture_water_req = $('#drip_rabi_sericulture_water_req').val();
    obj.drip_rabi_tomoto_water_req = $('#drip_rabi_tomoto_water_req').val();
    //  obj.drip_rabi_cabbage_water_req = $('#drip_rabi_cabbage_water_req').val();
    //  obj.drip_rabi_beans_water_req = $('#drip_rabi_beans_water_req').val();
    obj.drip_rabi_floriculture_water_req = $('#drip_rabi_floriculture_water_req').val();
    // obj.drip_rabi_potato_water_req = $('#drip_rabi_potato_water_req').val();
    //  obj.drip_rabi_cucumber_water_req = $('#drip_rabi_cucumber_water_req').val();
    obj.drip_rabi_ragi_water_req = $('#drip_rabi_ragi_water_req').val();
    obj.drip_rabi_sugarcane_water_req = $('#drip_rabi_sugarcane_water_req').val();
    obj.drip_rabi_maize_water_req = $('#drip_rabi_maize_water_req').val();
    obj.drip_rabi_fodder_water_req = $('#drip_rabi_fodder_water_req').val();
    obj.drip_rabi_paddy_water_req = $('#drip_rabi_paddy_water_req').val();
    obj.drip_rabi_alfalfa_water_req = $('#drip_rabi_alfalfa_water_req').val();
    // obj.drip_rabi_onion_water_req = $('#drip_rabi_onion_water_req').val();
    obj.drip_rabi_horticulture_water_req = $('#drip_rabi_horticulture_water_req').val();
    obj.drip_rabi_sunflower_water_req = $('#drip_rabi_sunflower_water_req').val();

    obj.drip_summer_sericulture_water_req = $('#drip_summer_sericulture_water_req').val();
    obj.drip_summer_tomoto_water_req = $('#drip_summer_tomoto_water_req').val();
    // obj.drip_summer_cabbage_water_req = $('#drip_summer_cabbage_water_req').val();
    // obj.drip_summer_beans_water_req = $('#drip_summer_beans_water_req').val();
    obj.drip_summer_floriculture_water_req = $('#drip_summer_floriculture_water_req').val();
    obj.drip_summer_maize_water_req = $('#drip_summer_maize_water_req').val();
    obj.drip_summer_fodder_water_req = $('#drip_summer_fodder_water_req').val();
    obj.drip_summer_sugarcane_water_req = $('#drip_summer_sugarcane_water_req').val();

    obj.drip_other_funding_source = $('#other_Drip_kharif_Paddy_FundingSource').val();

    //add crops

    obj.drip_kharif_othercrop_name1 = $('#drip_kharif_othercrop_name1').val();
    obj.drip_kharif_othercrop_area1 = $('#drip_kharif_othercrop_area1').val();
    obj.drip_kharif_othercrop_irri_area1 = $('#drip_kharif_othercrop_irri_area1').val();
    obj.drip_kharif_othercrop_water_req1 = $('#drip_kharif_othercrop_water_req1').val();
    obj.drip_kharif_othercrop_waterdemand1 = $('#drip_kharif_othercrop_waterdemand1').val();
    obj.drip_kharif_othercrop_drip_waterdemand1 = $('#drip_kharif_othercrop_drip_waterdemand1').val();
    obj.drip_kharif_othercrop_reduc_gw_demand1 = $('#drip_kharif_othercrop_reduc_gw_demand1').val();

    obj.drip_kharif_othercrop_name2 = $('#drip_kharif_othercrop_name2').val();
    obj.drip_kharif_othercrop_area2 = $('#drip_kharif_othercrop_area2').val();
    obj.drip_kharif_othercrop_irri_area2 = $('#drip_kharif_othercrop_irri_area2').val();
    obj.drip_kharif_othercrop_water_req2 = $('#drip_kharif_othercrop_water_req2').val();
    obj.drip_kharif_othercrop_waterdemand2 = $('#drip_kharif_othercrop_waterdemand2').val();
    obj.drip_kharif_othercrop_drip_waterdemand2 = $('#drip_kharif_othercrop_drip_waterdemand2').val();
    obj.drip_kharif_othercrop_reduc_gw_demand2 = $('#drip_kharif_othercrop_reduc_gw_demand2').val();

    obj.drip_kharif_othercrop_name3 = $('#drip_kharif_othercrop_name3').val();
    obj.drip_kharif_othercrop_area3 = $('#drip_kharif_othercrop_area3').val();
    obj.drip_kharif_othercrop_irri_area3 = $('#drip_kharif_othercrop_irri_area3').val();
    obj.drip_kharif_othercrop_water_req3 = $('#drip_kharif_othercrop_water_req3').val();
    obj.drip_kharif_othercrop_waterdemand3 = $('#drip_kharif_othercrop_waterdemand3').val();
    obj.drip_kharif_othercrop_drip_waterdemand3 = $('#drip_kharif_othercrop_drip_waterdemand3').val();
    obj.drip_kharif_othercrop_reduc_gw_demand3 = $('#drip_kharif_othercrop_reduc_gw_demand3').val();

    obj.drip_kharif_othercrop_name4 = $('#drip_kharif_othercrop_name4').val();
    obj.drip_kharif_othercrop_area4 = $('#drip_kharif_othercrop_area4').val();
    obj.drip_kharif_othercrop_irri_area4 = $('#drip_kharif_othercrop_irri_area4').val();
    obj.drip_kharif_othercrop_water_req4 = $('#drip_kharif_othercrop_water_req4').val();
    obj.drip_kharif_othercrop_waterdemand4 = $('#drip_kharif_othercrop_waterdemand4').val();
    obj.drip_kharif_othercrop_drip_waterdemand4 = $('#drip_kharif_othercrop_drip_waterdemand4').val();
    obj.drip_kharif_othercrop_reduc_gw_demand4 = $('#drip_kharif_othercrop_reduc_gw_demand4').val();

    obj.drip_kharif_othercrop_name5 = $('#drip_kharif_othercrop_name5').val();
    obj.drip_kharif_othercrop_area5 = $('#drip_kharif_othercrop_area5').val();
    obj.drip_kharif_othercrop_irri_area5 = $('#drip_kharif_othercrop_irri_area5').val();
    obj.drip_kharif_othercrop_water_req5 = $('#drip_kharif_othercrop_water_req5').val();
    obj.drip_kharif_othercrop_waterdemand5 = $('#drip_kharif_othercrop_waterdemand5').val();
    obj.drip_kharif_othercrop_drip_waterdemand5 = $('#drip_kharif_othercrop_drip_waterdemand5').val();
    obj.drip_kharif_othercrop_reduc_gw_demand5 = $('#drip_kharif_othercrop_reduc_gw_demand5').val();

    //summer rabi
    obj.drip_rabi_othercrop_name1 = $('#drip_rabi_othercrop_name1').val();
    obj.drip_rabi_othercrop_area1 = $('#drip_rabi_othercrop_area1').val();
    obj.drip_rabi_othercrop_irri_area1 = $('#drip_rabi_othercrop_irri_area1').val();
    obj.drip_rabi_othercrop_water_req1 = $('#drip_rabi_othercrop_water_req1').val();
    obj.drip_rabi_othercrop_waterdemand1 = $('#drip_rabi_othercrop_waterdemand1').val();
    obj.drip_rabi_othercrop_drip_waterdemand1 = $('#drip_rabi_othercrop_drip_waterdemand1').val();
    obj.drip_rabi_othercrop_reduc_gw_demand1 = $('#drip_rabi_othercrop_reduc_gw_demand1').val();

    obj.drip_rabi_othercrop_name2 = $('#drip_rabi_othercrop_name2').val();
    obj.drip_rabi_othercrop_area2 = $('#drip_rabi_othercrop_area2').val();
    obj.drip_rabi_othercrop_irri_area2 = $('#drip_rabi_othercrop_irri_area2').val();
    obj.drip_rabi_othercrop_water_req2 = $('#drip_rabi_othercrop_water_req2').val();
    obj.drip_rabi_othercrop_waterdemand2 = $('#drip_rabi_othercrop_waterdemand2').val();
    obj.drip_rabi_othercrop_drip_waterdemand2 = $('#drip_rabi_othercrop_drip_waterdemand2').val();
    obj.drip_rabi_othercrop_reduc_gw_demand2 = $('#drip_rabi_othercrop_reduc_gw_demand2').val();

    obj.drip_rabi_othercrop_name3 = $('#drip_rabi_othercrop_name3').val();
    obj.drip_rabi_othercrop_area3 = $('#drip_rabi_othercrop_area3').val();
    obj.drip_rabi_othercrop_irri_area3 = $('#drip_rabi_othercrop_irri_area3').val();
    obj.drip_rabi_othercrop_water_req3 = $('#drip_rabi_othercrop_water_req3').val();
    obj.drip_rabi_othercrop_waterdemand3 = $('#drip_rabi_othercrop_waterdemand3').val();
    obj.drip_rabi_othercrop_drip_waterdemand3 = $('#drip_rabi_othercrop_drip_waterdemand3').val();
    obj.drip_rabi_othercrop_reduc_gw_demand3 = $('#drip_rabi_othercrop_reduc_gw_demand3').val();

    obj.drip_rabi_othercrop_name4 = $('#drip_rabi_othercrop_name4').val();
    obj.drip_rabi_othercrop_area4 = $('#drip_rabi_othercrop_area4').val();
    obj.drip_rabi_othercrop_irri_area4 = $('#drip_rabi_othercrop_irri_area4').val();
    obj.drip_rabi_othercrop_water_req4 = $('#drip_rabi_othercrop_water_req4').val();
    obj.drip_rabi_othercrop_waterdemand4 = $('#drip_rabi_othercrop_waterdemand4').val();
    obj.drip_rabi_othercrop_drip_waterdemand4 = $('#drip_rabi_othercrop_drip_waterdemand4').val();
    obj.drip_rabi_othercrop_reduc_gw_demand4 = $('#drip_rabi_othercrop_reduc_gw_demand4').val();

    obj.drip_rabi_othercrop_name5 = $('#drip_rabi_othercrop_name5').val();
    obj.drip_rabi_othercrop_area5 = $('#drip_rabi_othercrop_area5').val();
    obj.drip_rabi_othercrop_irri_area5 = $('#drip_rabi_othercrop_irri_area5').val();
    obj.drip_rabi_othercrop_water_req5 = $('#drip_rabi_othercrop_water_req5').val();
    obj.drip_rabi_othercrop_waterdemand5 = $('#drip_rabi_othercrop_waterdemand5').val();
    obj.drip_rabi_othercrop_drip_waterdemand5 = $('#drip_rabi_othercrop_drip_waterdemand5').val();
    obj.drip_rabi_othercrop_reduc_gw_demand5 = $('#drip_rabi_othercrop_reduc_gw_demand5').val();

    //summer
    obj.drip_summer_othercrop_name1 = $('#drip_summer_othercrop_name1').val();
    obj.drip_summer_othercrop_area1 = $('#drip_summer_othercrop_area1').val();
    obj.drip_summer_othercrop_irri_area1 = $('#drip_summer_othercrop_irri_area1').val();
    obj.drip_summer_othercrop_water_req1 = $('#drip_summer_othercrop_water_req1').val();
    obj.drip_summer_othercrop_waterdemand1 = $('#drip_summer_othercrop_waterdemand1').val();
    obj.drip_summer_othercrop_drip_waterdemand1 = $('#drip_summer_othercrop_drip_waterdemand1').val();
    obj.drip_summer_othercrop_reduc_gw_demand1 = $('#drip_summer_othercrop_reduc_gw_demand1').val();

    obj.drip_summer_othercrop_name2 = $('#drip_summer_othercrop_name2').val();
    obj.drip_summer_othercrop_area2 = $('#drip_summer_othercrop_area2').val();
    obj.drip_summer_othercrop_irri_area2 = $('#drip_summer_othercrop_irri_area2').val();
    obj.drip_summer_othercrop_water_req2 = $('#drip_summer_othercrop_water_req2').val();
    obj.drip_summer_othercrop_waterdemand2 = $('#drip_summer_othercrop_waterdemand2').val();
    obj.drip_summer_othercrop_drip_waterdemand2 = $('#drip_summer_othercrop_drip_waterdemand2').val();
    obj.drip_summer_othercrop_reduc_gw_demand2 = $('#drip_summer_othercrop_reduc_gw_demand2').val();

    obj.drip_summer_othercrop_name3 = $('#drip_summer_othercrop_name3').val();
    obj.drip_summer_othercrop_area3 = $('#drip_summer_othercrop_area3').val();
    obj.drip_summer_othercrop_irri_area3 = $('#drip_summer_othercrop_irri_area3').val();
    obj.drip_summer_othercrop_water_req3 = $('#drip_summer_othercrop_water_req3').val();
    obj.drip_summer_othercrop_waterdemand3 = $('#drip_summer_othercrop_waterdemand3').val();
    obj.drip_summer_othercrop_drip_waterdemand3 = $('#drip_summer_othercrop_drip_waterdemand3').val();
    obj.drip_summer_othercrop_reduc_gw_demand3 = $('#drip_summer_othercrop_reduc_gw_demand3').val();

    obj.drip_summer_othercrop_name4 = $('#drip_summer_othercrop_name4').val();
    obj.drip_summer_othercrop_area4 = $('#drip_summer_othercrop_area4').val();
    obj.drip_summer_othercrop_irri_area4 = $('#drip_summer_othercrop_irri_area4').val();
    obj.drip_summer_othercrop_water_req4 = $('#drip_summer_othercrop_water_req4').val();
    obj.drip_summer_othercrop_waterdemand4 = $('#drip_summer_othercrop_waterdemand4').val();
    obj.drip_summer_othercrop_drip_waterdemand4 = $('#drip_summer_othercrop_drip_waterdemand4').val();
    obj.drip_summer_othercrop_reduc_gw_demand4 = $('#drip_summer_othercrop_reduc_gw_demand4').val();

    obj.drip_summer_othercrop_name5 = $('#drip_summer_othercrop_name5').val();
    obj.drip_summer_othercrop_area5 = $('#drip_summer_othercrop_area5').val();
    obj.drip_summer_othercrop_irri_area5 = $('#drip_summer_othercrop_irri_area5').val();
    obj.drip_summer_othercrop_water_req5 = $('#drip_summer_othercrop_water_req5').val();
    obj.drip_summer_othercrop_waterdemand5 = $('#drip_summer_othercrop_waterdemand5').val();
    obj.drip_summer_othercrop_drip_waterdemand5 = $('#drip_summer_othercrop_drip_waterdemand5').val();
    obj.drip_summer_othercrop_reduc_gw_demand5 = $('#drip_summer_othercrop_reduc_gw_demand5').val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSPHome/DripSavedData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Saved Successfully" && response != "Logout" && response != "valid_negitive") {
                window.location = "/Error/DefaultError";
            }
            $('#SAVE_BTN2').prop('disabled', false);

        }
    });
}





function DripKharifPopup(SS) {
    Drip_Kharif_WaterRequire();
    Drip_Rabi_WaterRequire();
    Drip_Crop_WaterRequire();

    // Kharif
    if (SS == "drip_kharif_paddy_crop_area") {

        $('#Drip_Individual_Name').text("Paddy");

        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_paddy_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_paddy_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_paddy_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_ragi_crop_area") {
        $('#Drip_Individual_Name').text("Ragi");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_ragi_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_ragi_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_ragi_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_groundnut_crop_area") {
        $('#Drip_Individual_Name').text("Groundnut");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_groundnut_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_groundnut_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(drip_kharif_groundnut_reduction_gw_demand);

    }
    else if (SS == "drip_kharif_sugarcane_crop_area") {
        $('#Drip_Individual_Name').text("Sugarcane");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_sugarcane_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_sugarcane_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_sugarcane_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_tomoto_crop_area") {
        $('#Drip_Individual_Name').text("Veletables");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_tomoto_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_tomoto_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_tomoto_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "drip_kharif_cabbage_crop_area") {
    //    $('#Drip_Individual_Name').text("Cabbage");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_cabbage_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_cabbage_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_cabbage_reduction_gw_demand).toFixed(2));

    //}

    //else if (SS == "drip_kharif_beans_crop_area") {
    //    $('#Drip_Individual_Name').text("Beans");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_beans_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_beans_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_beans_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_kharif_floriculture_crop_area") {
        $('#Drip_Individual_Name').text("Floriculture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_floriculture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_floriculture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_floriculture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_sericulture_crop_area") {
        $('#Drip_Individual_Name').text("Sericulture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_sericulture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_sericulture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_sericulture_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "drip_kharif_cucumber_crop_area") {
    //    $('#Drip_Individual_Name').text("Cucumber");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_cucumber_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_cucumber_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_cucumber_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_kharif_banana_crop_area") {
        $('#Drip_Individual_Name').text("Banana");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_banana_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_banana_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_banana_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_fodder_crop_area") {
        $('#Drip_Individual_Name').text("Fodder");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_fodder_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_fodder_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_fodder_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "drip_kharif_maize_crop_area") {
        $('#Drip_Individual_Name').text("Maize");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_maize_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_maize_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_maize_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "drip_kharif_potato_crop_area") {
    //    $('#Drip_Individual_Name').text("Potato");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_potato_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_potato_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_potato_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_kharif_chillies_crop_area") {
        $('#Drip_Individual_Name').text("Chillies");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_chillies_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_chillies_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_chillies_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_cotton_crop_area") {
        $('#Drip_Individual_Name').text("Cotton");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_cotton_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_cotton_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_cotton_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_melon_crop_area") {
        $('#Drip_Individual_Name').text("Melon");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_melon_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_melon_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_melon_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_citrus_crop_area") {
        $('#Drip_Individual_Name').text("Citrus");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_citrus_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_citrus_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_citrus_reduction_gw_demand).toFixed(2));

    }



    //else if (SS == "drip_kharif_peanut_crop_area") {
    //    $('#Drip_Individual_Name').text("Peanut");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_peanut_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_peanut_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_peanut_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_kharif_horticulture_crop_area") {
        $('#Drip_Individual_Name').text("Horticulture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_horticulture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_horticulture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_horticulture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_kharif_othercrop_area") {
        var CropName = $('#drip_kharif_othercrop_name').val();
        $('#Drip_Individual_Name').text(CropName);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_othercrop_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_othercrop_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_othercrop_reduc_gw_demand).toFixed(2));

    }

    //Rabbi

    else if (SS == "drip_rabi_sericulture_crop_area") {
        $('#Drip_Individual_Name').text("Sericulture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_sericulture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_sericulture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_sericulture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_tomoto_crop_area") {
        $('#Drip_Individual_Name').text("Veletables");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_tomoto_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_tomoto_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_tomoto_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "drip_rabi_cabbage_crop_area") {
    //    $('#Drip_Individual_Name').text("Cabbage");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_cabbage_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_cabbage_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_cabbage_reduction_gw_demand).toFixed(2));

    //}
    //else if (SS == "drip_rabi_beans_crop_area") {
    //    $('#Drip_Individual_Name').text("Beans");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_beans_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_beans_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_beans_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_rabi_floriculture_crop_area") {
        $('#Drip_Individual_Name').text("Floriculture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_floriculture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_floriculture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_floriculture_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "drip_rabi_potato_crop_area") {
    //    $('#Drip_Individual_Name').text("Potato");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_potato_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_potato_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_potato_reduction_gw_demand).toFixed(2));

    //}
    //else if (SS == "drip_rabi_cucumber_crop_area") {
    //    $('#Drip_Individual_Name').text("Cucumber");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_cucumber_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_cucumber_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_cucumber_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_rabi_ragi_crop_area") {
        $('#Drip_Individual_Name').text("Ragi");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_ragi_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_ragi_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_ragi_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_sugarcane_crop_area") {
        $('#Drip_Individual_Name').text("Sugarcane");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_sugarcane_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_sugarcane_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_sugarcane_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_maize_crop_area") {
        $('#Drip_Individual_Name').text("Maize");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_maize_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_maize_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_maize_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_fodder_crop_area") {
        $('#Drip_Individual_Name').text("Fodder");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_fodder_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_fodder_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_fodder_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_paddy_crop_area") {
        $('#Drip_Individual_Name').text("Paddy");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_paddy_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_paddy_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_paddy_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_alfalfa_crop_area") {
        $('#Drip_Individual_Name').text("Alfalfa");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_alfalfa_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_alfalfa_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_alfalfa_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "drip_rabi_onion_crop_area") {
    //    $('#Drip_Individual_Name').text("Onion");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_onion_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_onion_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_onion_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_rabi_horticulture_crop_area") {
        $('#Drip_Individual_Name').text("Horticulture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_horticulture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_horticulture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_horticulture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_rabi_sunflower_crop_area") {
        $('#Drip_Individual_Name').text("Sunflower");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_sunflower_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_sunflower_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_sunflower_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "drip_rabi_othercrop_area") {
        var CropName = $('#drip_rabi_othercrop_name').val();
        $('#Drip_Individual_Name').text(CropName);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_othercrop_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_othercrop_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_othercrop_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "drip_summer_horticulture_crop_area") {
        $('#Drip_Individual_Name').text("Horticulture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_horticulture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_horticulture_netwater_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_horticulture_reduction_gw_demand).toFixed(2));

    }



    else if (SS == "drip_summer_sericulture_crop_area") {
        $('#Drip_Individual_Name').text("Sericulture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_sericulture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_sericulture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_sericulture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_summer_tomoto_crop_area") {
        $('#Drip_Individual_Name').text("Veletables");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_tomoto_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_tomoto_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_tomoto_reduction_gw_demand).toFixed(2));
    }
    //else if (SS == "drip_summer_cabbage_crop_area") {
    //    $('#Drip_Individual_Name').text("Cabbage");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_cabbage_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_cabbage_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_cabbage_reduction_gw_demand).toFixed(2));

    //}
    //else if (SS == "drip_summer_beans_crop_area") {
    //    $('#Drip_Individual_Name').text("Beans");
    //    $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_beans_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_beans_drip_waterdemand).toFixed(2));
    //    $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_beans_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "drip_summer_floriculture_crop_area") {
        $('#Drip_Individual_Name').text("Floriculture");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_floriculture_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_floriculture_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_floriculture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_summer_maize_crop_area") {
        $('#Drip_Individual_Name').text("Maize");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_maize_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_maize_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_maize_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_summer_fodder_crop_area") {
        $('#Drip_Individual_Name').text("Fodder");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_fodder_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_fodder_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_fodder_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "drip_summer_sugarcane_crop_area") {
        $('#Drip_Individual_Name').text("Sugarcane");
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_sugarcane_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_sugarcane_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_sugarcane_reduction_gw_demand).toFixed(2));

    }


    else if (SS == "drip_summer_othercrop_area") {
        var CropName = $('#drip_summer_othercrop_name').val();
        $('#Drip_Individual_Name').text(CropName);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_othyercrop_waterdemand).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_othercrop_drip_waterdemand).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_othercrop_reduc_gw_demand).toFixed(2));

    }


}




function Drip_otherpopup(ss) {


    Drip_Kharif_WaterRequire();
    Drip_Rabi_WaterRequire();
    Drip_Crop_WaterRequire();

    if (ss == "drip_kharif_othercrop_area1") {
        var Name = $('#drip_kharif_othercrop_name1').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_othercrop_waterdemand1).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_othercrop_drip_waterdemand1).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss == "drip_kharif_othercrop_area2") {
        var Name = $('#drip_kharif_othercrop_name2').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_othercrop_waterdemand2).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_othercrop_drip_waterdemand2).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss == "drip_kharif_othercrop_area3") {
        var Name = $('#drip_kharif_othercrop_name3').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_othercrop_waterdemand3).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_othercrop_drip_waterdemand3).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss == "drip_kharif_othercrop_area4") {
        var Name = $('#drip_kharif_othercrop_name4').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_othercrop_waterdemand4).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_othercrop_drip_waterdemand4).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss == "drip_kharif_othercrop_area5") {
        var Name = $('#drip_kharif_othercrop_name5').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_kharif_othercrop_waterdemand5).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_kharif_othercrop_drip_waterdemand5).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_kharif_othercrop_reduc_gw_demand5).toFixed(2));
    }

    if (ss == "drip_rabi_othercrop_area1") {

        var Name = $('#drip_rabi_othercrop_name1').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_othercrop_waterdemand1).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_othercrop_drip_waterdemand1).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss == "drip_rabi_othercrop_area2") {

        var Name = $('#drip_rabi_othercrop_name2').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_othercrop_waterdemand2).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_othercrop_drip_waterdemand2).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss == "drip_rabi_othercrop_area3") {

        var Name = $('#drip_rabi_othercrop_name3').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_othercrop_waterdemand3).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_othercrop_drip_waterdemand3).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss == "drip_rabi_othercrop_area4") {

        var Name = $('#drip_rabi_othercrop_name4').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_othercrop_waterdemand4).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_othercrop_drip_waterdemand4).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss == "drip_rabi_othercrop_area5") {

        var Name = $('#drip_rabi_othercrop_name5').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_rabi_othercrop_waterdemand5).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_rabi_othercrop_drip_waterdemand5).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_rabi_othercrop_reduc_gw_demand5).toFixed(2));
    }


    if (ss == "drip_summer_othercrop_area1") {
        var Name = $('#drip_summer_othercrop_name1').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_othercrop_waterdemand1).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_othercrop_drip_waterdemand1).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss == "drip_summer_othercrop_area2") {
        var Name = $('#drip_summer_othercrop_name2').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_othercrop_waterdemand2).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_othercrop_drip_waterdemand2).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss == "drip_summer_othercrop_area3") {
        var Name = $('#drip_summer_othercrop_name3').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_othercrop_waterdemand3).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_othercrop_drip_waterdemand3).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss == "drip_summer_othercrop_area4") {
        var Name = $('#drip_summer_othercrop_name4').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_othercrop_waterdemand4).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_othercrop_drip_waterdemand4).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss == "drip_summer_othercrop_area5") {
        var Name = $('#drip_summer_othercrop_name5').val();
        $('#Drip_Individual_Name').text(Name);
        $('#Drip_IndividualWaterDemand').text(parseFloat(drip_summer_othercrop_waterdemand5).toFixed(2));
        $('#Drip_Individual_Drip_Water_Demand').text(parseFloat(drip_summer_othercrop_drip_waterdemand5).toFixed(2));
        $('#Drip_Individual_Reduction_in_GW_demand').text(parseFloat(drip_summer_othercrop_reduc_gw_demand5).toFixed(2));
    }

}
