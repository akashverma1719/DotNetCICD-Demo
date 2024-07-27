var lat = 0;
var long = 0;

$(document).ready(function () {
    Funding_Source_Info();
    PipeLineInfo();
    $('#Sprinkler_crp1').hide();
    $('#Sprinkler_crp2').hide();
    $('#Sprinkler_crp3').hide();
    $('#Sprinkler_crp4').hide();
    $('#Sprinkler_crp5').hide();


    $('#Sprinkler_Rabi_crp1').hide();
    $('#Sprinkler_Rabi_crp2').hide();
    $('#Sprinkler_Rabi_crp3').hide();
    $('#Sprinkler_Rabi_crp4').hide();
    $('#Sprinkler_Rabi_crp5').hide();


    $('#Sprinkler_Summer_crp1').hide();
    $('#Sprinkler_Summer_crp2').hide();
    $('#Sprinkler_Summer_crp3').hide();
    $('#Sprinkler_Summer_crp4').hide();
    $('#Sprinkler_Summer_crp5').hide();


    $('#Pipeline_crp1').hide();
    $('#Pipeline_crp2').hide();
    $('#Pipeline_crp3').hide();
    $('#Pipeline_crp4').hide();
    $('#Pipeline_crp5').hide();


    $('#Pipeline_Rabi_crp1').hide();
    $('#Pipeline_Rabi_crp2').hide();
    $('#Pipeline_Rabi_crp3').hide();
    $('#Pipeline_Rabi_crp4').hide();
    $('#Pipeline_Rabi_crp5').hide();


    $('#Pipeline_Summer_crp1').hide();
    $('#Pipeline_Summer_crp2').hide();
    $('#Pipeline_Summer_crp3').hide();
    $('#Pipeline_Summer_crp4').hide();
    $('#Pipeline_Summer_crp5').hide();

    $('#Reduction_crp1').hide();
    $('#Reduction_crp2').hide();
    $('#Reduction_crp3').hide();
    $('#Reduction_crp4').hide();
    $('#Reduction_crp5').hide();


    $('#Reduction_Rabi_crp1').hide();
    $('#Reduction_Rabi_crp2').hide();
    $('#Reduction_Rabi_crp3').hide();
    $('#Reduction_Rabi_crp4').hide();
    $('#Reduction_Rabi_crp5').hide();


    $('#Reduction_Summer_crp1').hide();
    $('#Reduction_Summer_crp2').hide();
    $('#Reduction_Summer_crp3').hide();
    $('#Reduction_Summer_crp4').hide();
    $('#Reduction_Summer_crp5').hide();

    $('#Drip_crp1').hide();
    $('#Drip_crp2').hide();
    $('#Drip_crp3').hide();
    $('#Drip_crp4').hide();
    $('#Drip_crp5').hide();


    $('#Drip_Rabi_crp1').hide();
    $('#Drip_Rabi_crp2').hide();
    $('#Drip_Rabi_crp3').hide();
    $('#Drip_Rabi_crp4').hide();
    $('#Drip_Rabi_crp5').hide();


    $('#Drip_Summer_crp1').hide();
    $('#Drip_Summer_crp2').hide();
    $('#Drip_Summer_crp3').hide();
    $('#Drip_Summer_crp4').hide();
    $('#Drip_Summer_crp5').hide();

    $('#Other_crp1').hide();
    $('#Other_crp2').hide();
    $('#Other_crp3').hide();
    $('#Other_crp4').hide();
    $('#Other_crp5').hide();


    $('#Other_Rabi_crp1').hide();
    $('#Other_Rabi_crp2').hide();
    $('#Other_Rabi_crp3').hide();
    $('#Other_Rabi_crp4').hide();
    $('#Other_Rabi_crp5').hide();


    $('#Other_Summer_crp1').hide();
    $('#Other_Summer_crp2').hide();
    $('#Other_Summer_crp3').hide();
    $('#Other_Summer_crp4').hide();
    $('#Other_Summer_crp5').hide();
    getLocation();

    SprinklerInfo();


    ReductionInfo();
    Other_MeasureInfo();
    Crop_Diversification_Info();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

var addcropcount = 0;
var addcropcount1 = 0;
var addcropcount2 = 0;
var addcropcount3 = 0;
var addcropcount4 = 0;
var addcropcount5 = 0;

var add_Sprinkler_Rabicount = 0;
var add_Sprinkler_Rabicount1 = 0;
var add_Sprinkler_Rabicount2 = 0;
var add_Sprinkler_Rabicount3 = 0;
var add_Sprinkler_Rabicount4 = 0;
var add_Sprinkler_Rabicount5 = 0;

var add_Sprinkler_Summercount = 0;
var add_Sprinkler_Summercount1 = 0;
var add_Sprinkler_Summercount2 = 0;
var add_Sprinkler_Summercount3 = 0;
var add_Sprinkler_Summercount4 = 0;
var add_Sprinkler_Summercount5 = 0;

function Sprinkler_Kharif_AddCrop() {

    if (addcropcount1 == 1) {
        $('#Sprinkler_crp1').show();

        var s11 = "sprinkler_kharif_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area1" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" onkeyup="Kharif_WaterRequire()" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area1" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req1" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Sprinkler_crp1').html(ass);
        addcropcount = addcropcount + 1;
        addcropcount1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_area1").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_irri_area1").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_water_req1").disabled = true;

        //}
    }
    else if (addcropcount2 == 2) {
        $('#Sprinkler_crp2').show();

        var s11 = "sprinkler_kharif_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2"  onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name2"  placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area2" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area2" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req2" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Sprinkler_crp2').html(ass);
        addcropcount = addcropcount + 1;
        addcropcount2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_area2").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_irri_area2").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_water_req2").disabled = true;

        //}
    }

    else if (addcropcount3 == 3) {
        $('#Sprinkler_crp3').show();


        var s11 = "sprinkler_kharif_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area3" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area3" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req3" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Sprinkler_crp3').html(ass);
        addcropcount = addcropcount + 1;
        addcropcount3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_area3").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_irri_area3").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_water_req3").disabled = true;

        //}
    }

    else if (addcropcount4 == 4) {
        $('#Sprinkler_crp4').show();

        var s11 = "sprinkler_kharif_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area4" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area4" class="form-control decimal" onkeyup="Kharif_WaterRequire()" onkeyup="Kharif_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req4" class="form-control decimal" onkeyup="Kharif_WaterRequire()" onkeyup="Kharif_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Sprinkler_crp4').html(ass);
        addcropcount = addcropcount + 1;
        addcropcount4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_area4").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_irri_area4").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_water_req4").disabled = true;

        //}
    }
    else if (addcropcount5 == 5) {
        $('#Sprinkler_crp5').show();
        var s11 = "sprinkler_kharif_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area5" onkeyup="Kharif_WaterRequire()" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area5" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req5" class="form-control decimal" onkeyup="Kharif_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Sprinkler_crp5').html(ass);
        addcropcount5 = 0;
        addcropcount = addcropcount + 1;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_area5").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_irri_area5").disabled = true;
        //    document.getElementById("sprinkler_kharif_othercrop_water_req5").disabled = true;

        //}
    }
    if (addcropcount == 5) {
        $('#spnaddcrop').hide();
    }
}

function Sprinkler_Rabi_AddCrop() {

    if (add_Sprinkler_Rabicount1 == 1) {

        $('#Sprinkler_Rabi_crp1').show();

        var s11 = "sprinkler_rabi_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Sprinkler_otherpopup(' + s11 + ')" ></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control"  id="sprinkler_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area1" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area1" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req1" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Sprinkler_Rabi_crp1').html(ass);
        add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
        add_Sprinkler_Rabicount1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_area1").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_irri_area1").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_water_req1").disabled = true;

        //}
    }
    else if (add_Sprinkler_Rabicount2 == 2) {
        $('#Sprinkler_Rabi_crp2').show();

        var s11 = "sprinkler_rabi_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area2" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area2" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req2" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Sprinkler_Rabi_crp2').html(ass);
        add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
        add_Sprinkler_Rabicount2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_area2").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_irri_area2").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Sprinkler_Rabicount3 == 3) {
        $('#Sprinkler_Rabi_crp3').show();

        var s11 = "sprinkler_rabi_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area3" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area3" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req3" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Sprinkler_Rabi_crp3').html(ass);
        add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
        add_Sprinkler_Rabicount3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_area3").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_irri_area3").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Sprinkler_Rabicount4 == 4) {
        $('#Sprinkler_Rabi_crp4').show();

        var s11 = "sprinkler_rabi_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area4" placeholder="Crop Area(ha)" onkeyup="Rabi_WaterRequire()" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area4" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req4" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Sprinkler_Rabi_crp4').html(ass);
        add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
        add_Sprinkler_Rabicount4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_area4").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_irri_area4").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Sprinkler_Rabicount5 == 5) {
        $('#Sprinkler_Rabi_crp5').show();
        var s11 = "sprinkler_rabi_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area5" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area5" class="form-control decimal"onkeyup="Rabi_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req5" class="form-control decimal" onkeyup="Rabi_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Sprinkler_Rabi_crp5').html(ass);

        $('#spnadd_Rabi_crop').hide();
        add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
        add_Sprinkler_Rabicount5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_area5").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_irri_area5").disabled = true;
        //    document.getElementById("sprinkler_rabi_othercrop_water_req5").disabled = true;

        //}
    }
    if (add_Sprinkler_Rabicount == 5) {
        $('#spnadd_Rabi_crop').hide();

    }
}


function Sprinkler_Summer_AddCrop() {

    if (add_Sprinkler_Summercount1 == 1) {

        $('#Sprinkler_Summer_crp1').show();

        var s11 = "sprinkler_summer_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area1" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)"  title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area1" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req1" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Sprinkler_Summer_crp1').html(ass);
        add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
        add_Sprinkler_Summercount1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_summer_othercrop_name1").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_area1").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_irri_area1").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_water_req1").disabled = true;

        //}
    }
    else if (add_Sprinkler_Summercount2 == 2) {
        $('#Sprinkler_Summer_crp2').show();

        var s11 = "sprinkler_summer_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area2" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area2" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req2" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Sprinkler_Summer_crp2').html(ass);
        add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
        add_Sprinkler_Summercount2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_summer_othercrop_name2").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_area2").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_irri_area2").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_water_req2").disabled = true;

        //}

    }

    else if (add_Sprinkler_Summercount3 == 3) {
        $('#Sprinkler_Summer_crp3').show();

        var s11 = "sprinkler_summer_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area3" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area3" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req3" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Sprinkler_Summer_crp3').html(ass);
        add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
        add_Sprinkler_Summercount3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_summer_othercrop_name3").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_area3").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_irri_area3").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Sprinkler_Summercount4 == 4) {
        $('#Sprinkler_Summer_crp4').show();

        var s11 = "sprinkler_summer_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp4" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area4" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area4" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req4" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Sprinkler_Summer_crp4').html(ass);
        add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
        add_Sprinkler_Summercount4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_summer_othercrop_name4").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_area4").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_irri_area4").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Sprinkler_Summercount5 == 5) {
        $('#Sprinkler_Summer_crp5').show();
        var s11 = "sprinkler_summer_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" id="sprinkler_summer_othercrop_name5" class="form-control" id="" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area5" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area5"class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
            '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req5" class="form-control decimal" onkeyup="Crop_WaterRequire()" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Sprinkler_Summer_crp5').html(ass);

        add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
        add_Sprinkler_Summercount5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("sprinkler_summer_othercrop_name5").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_area5").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_irri_area5").disabled = true;
        //    document.getElementById("sprinkler_summer_othercrop_water_req5").disabled = true;

        //}
    }
    if (add_Sprinkler_Summercount == 5) {
        $('#spnadd_summer_crop').hide();
    }
}

function SprinklerInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/SprinklerInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {


            addcropcount = 0;
            addcropcount1 = 0;
            addcropcount2 = 0;
            addcropcount3 = 0;
            addcropcount4 = 0;
            addcropcount5 = 0;

            add_Sprinkler_Rabicount = 0;
            add_Sprinkler_Rabicount1 = 0;
            add_Sprinkler_Rabicount2 = 0;
            add_Sprinkler_Rabicount3 = 0;
            add_Sprinkler_Rabicount4 = 0;
            add_Sprinkler_Rabicount5 = 0;

            add_Sprinkler_Summercount = 0;
            add_Sprinkler_Summercount1 = 0;
            add_Sprinkler_Summercount2 = 0;
            add_Sprinkler_Summercount3 = 0;
            add_Sprinkler_Summercount4 = 0;
            add_Sprinkler_Summercount5 = 0;

            if (response == "Error") {
                window.location = "/WSPHome/WspDemandside";
            }
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response != "NO") {

                if (response.sprinkler_kharif_othercrop_name1 == null || response.sprinkler_kharif_othercrop_name1 == "") {
                    addcropcount1 = 1;
                }
                else {
                    addcropcount = addcropcount + 1;
                }
                if (response.sprinkler_kharif_othercrop_name2 == null || response.sprinkler_kharif_othercrop_name2 == "") {
                    addcropcount2 = 2;

                }
                else {
                    addcropcount = addcropcount + 1;
                }


                if (response.sprinkler_kharif_othercrop_name3 == null || response.sprinkler_kharif_othercrop_name3 == "") {
                    addcropcount3 = 3;
                }
                else {
                    addcropcount = addcropcount + 1;
                }

                if (response.sprinkler_kharif_othercrop_name4 == null || response.sprinkler_kharif_othercrop_name4 == "") {
                    addcropcount4 = 4;

                }
                else {
                    addcropcount = addcropcount + 1;
                }

                if (response.sprinkler_kharif_othercrop_name5 == null || response.sprinkler_kharif_othercrop_name5 == "") {
                    addcropcount5 = 5;

                }
                else {
                    addcropcount = addcropcount + 1;
                }

                if (addcropcount == 5) {
                    $('#spnaddcrop').hide();
                }
                if (response.sprinkler_kharif_othercrop_name1 != null && response.sprinkler_kharif_othercrop_name1 != "null" && response.sprinkler_kharif_othercrop_name1 != "") {

                    var sprinkler_kharif_othercrop_area1 = "";
                    var sprinkler_kharif_othercrop_irri_area1 = "";
                    var sprinkler_kharif_othercrop_water_req1 = "";
                    if (response.sprinkler_kharif_othercrop_area1 != null && response.sprinkler_kharif_othercrop_area1 != "") {
                        sprinkler_kharif_othercrop_area1 = response.sprinkler_kharif_othercrop_area1;
                    }
                    if (response.sprinkler_kharif_othercrop_irri_area1 != null && response.sprinkler_kharif_othercrop_irri_area1 != "") {
                        sprinkler_kharif_othercrop_irri_area1 = response.sprinkler_kharif_othercrop_irri_area1;
                    }
                    if (response.sprinkler_kharif_othercrop_water_req1 != null && response.sprinkler_kharif_othercrop_water_req1 != "") {
                        sprinkler_kharif_othercrop_water_req1 = response.sprinkler_kharif_othercrop_water_req1;
                    }

                    var s11 = "sprinkler_kharif_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_kharif_othercrop_name1 + '<a href="#Filter" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="KharifPopUp(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_kharif_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area1" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_kharif_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area1" onkeyup="Kharif_WaterRequire()" class="form-control decimal" value="' + sprinkler_kharif_othercrop_irri_area1 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req1" onkeyup="Kharif_WaterRequire()" class="form-control decimal"value="' + sprinkler_kharif_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';
                    $('#Sprinkler_crp1').show();
                    $('#Sprinkler_crp1').html(ass);
                    $('#sprinkler_kharif_othercrop_name1').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("sprinkler_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_area1").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_water_req1").disabled = true;


                    //}

                }

                if (response.sprinkler_kharif_othercrop_name2 != null && response.sprinkler_kharif_othercrop_name2 != "null" && response.sprinkler_kharif_othercrop_name2 != "") {

                    var sprinkler_kharif_othercrop_area2 = "";
                    var sprinkler_kharif_othercrop_irri_area2 = "";
                    var sprinkler_kharif_othercrop_water_req2 = "";
                    if (response.sprinkler_kharif_othercrop_area2 != null && response.sprinkler_kharif_othercrop_area2 != "") {
                        sprinkler_kharif_othercrop_area2 = response.sprinkler_kharif_othercrop_area2;
                    }
                    if (response.sprinkler_kharif_othercrop_irri_area2 != null && response.sprinkler_kharif_othercrop_irri_area2 != "") {
                        sprinkler_kharif_othercrop_irri_area2 = response.sprinkler_kharif_othercrop_irri_area2;
                    }
                    if (response.sprinkler_kharif_othercrop_water_req2 != null && response.sprinkler_kharif_othercrop_water_req2 != "") {
                        sprinkler_kharif_othercrop_water_req2 = response.sprinkler_kharif_othercrop_water_req2;
                    }

                    var s11 = "sprinkler_kharif_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_kharif_othercrop_name2 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="KharifPopUp(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_kharif_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area2" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_kharif_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area2" class="form-control decimal" onkeyup="Kharif_WaterRequire()" value="' + sprinkler_kharif_othercrop_irri_area2 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req2" class="form-control decimal"onkeyup="Kharif_WaterRequire()" value="' + sprinkler_kharif_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';
                    $('#Sprinkler_crp2').show();
                    $('#Sprinkler_crp2').html(ass);
                    $('#sprinkler_kharif_othercrop_name2').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_area2").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_water_req2").disabled = true;

                    //}

                }
                if (response.sprinkler_kharif_othercrop_name3 != null && response.sprinkler_kharif_othercrop_name3 != "null" && response.sprinkler_kharif_othercrop_name3 != "") {

                    var sprinkler_kharif_othercrop_area3 = "";
                    var sprinkler_kharif_othercrop_irri_area3 = "";
                    var sprinkler_kharif_othercrop_water_req3 = "";
                    if (response.sprinkler_kharif_othercrop_area3 != null && response.sprinkler_kharif_othercrop_area3 != "") {
                        sprinkler_kharif_othercrop_area3 = response.sprinkler_kharif_othercrop_area3;
                    }
                    if (response.sprinkler_kharif_othercrop_irri_area3 != null && response.sprinkler_kharif_othercrop_irri_area3 != "") {
                        sprinkler_kharif_othercrop_irri_area3 = response.sprinkler_kharif_othercrop_irri_area3;
                    }
                    if (response.sprinkler_kharif_othercrop_water_req3 != null && response.sprinkler_kharif_othercrop_water_req3 != "") {
                        sprinkler_kharif_othercrop_water_req3 = response.sprinkler_kharif_othercrop_water_req3;
                    }


                    var s11 = "sprinkler_kharif_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_kharif_othercrop_name3 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="KharifPopUp(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_kharif_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area3" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_kharif_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area3" class="form-control decimal" onkeyup="Kharif_WaterRequire()" value="' + sprinkler_kharif_othercrop_irri_area3 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req3" class="form-control decimal" onkeyup="Kharif_WaterRequire()" value="' + sprinkler_kharif_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Sprinkler_crp3').show();
                    $('#Sprinkler_crp3').html(ass);
                    $('#sprinkler_kharif_othercrop_name3').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_area3").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_water_req3").disabled = true;

                    //}

                }
                if (response.sprinkler_kharif_othercrop_name4 != null && response.sprinkler_kharif_othercrop_name4 != "null" && response.sprinkler_kharif_othercrop_name4 != "") {


                    var sprinkler_kharif_othercrop_area4 = "";
                    var sprinkler_kharif_othercrop_irri_area4 = "";
                    var sprinkler_kharif_othercrop_water_req4 = "";
                    if (response.sprinkler_kharif_othercrop_area4 != null && response.sprinkler_kharif_othercrop_area4 != "") {
                        sprinkler_kharif_othercrop_area4 = response.sprinkler_kharif_othercrop_area4;
                    }
                    if (response.sprinkler_kharif_othercrop_irri_area4 != null && response.sprinkler_kharif_othercrop_irri_area4 != "") {
                        sprinkler_kharif_othercrop_irri_area4 = response.sprinkler_kharif_othercrop_irri_area4;
                    }
                    if (response.sprinkler_kharif_othercrop_water_req4 != null && response.sprinkler_kharif_othercrop_water_req4 != "") {
                        sprinkler_kharif_othercrop_water_req4 = response.sprinkler_kharif_othercrop_water_req4;
                    }

                    var s11 = "sprinkler_kharif_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_kharif_othercrop_name4 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="KharifPopUp(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_kharif_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area4" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_kharif_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area4" onkeyup="Kharif_WaterRequire()" class="form-control decimal" value="' + sprinkler_kharif_othercrop_irri_area4 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req4" onkeyup="Kharif_WaterRequire()" class="form-control decimal"value="' + sprinkler_kharif_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Sprinkler_crp4').show();
                    $('#Sprinkler_crp4').html(ass);
                    $('#sprinkler_kharif_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_area4").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_water_req4").disabled = true;

                    //}

                }
                if (response.sprinkler_kharif_othercrop_name5 != null && response.sprinkler_kharif_othercrop_name5 != "null" && response.sprinkler_kharif_othercrop_name5 != "") {

                    var sprinkler_kharif_othercrop_area5 = "";
                    var sprinkler_kharif_othercrop_irri_area5 = "";
                    var sprinkler_kharif_othercrop_water_req5 = "";
                    if (response.sprinkler_kharif_othercrop_area5 != null && response.sprinkler_kharif_othercrop_area5 != "") {
                        sprinkler_kharif_othercrop_area5 = response.sprinkler_kharif_othercrop_area5;
                    }
                    if (response.sprinkler_kharif_othercrop_irri_area5 != null && response.sprinkler_kharif_othercrop_irri_area5 != "") {
                        sprinkler_kharif_othercrop_irri_area5 = response.sprinkler_kharif_othercrop_irri_area5;
                    }
                    if (response.sprinkler_kharif_othercrop_water_req5 != null && response.sprinkler_kharif_othercrop_water_req5 != "") {
                        sprinkler_kharif_othercrop_water_req5 = response.sprinkler_kharif_othercrop_water_req5;
                    }


                    var s11 = "sprinkler_kharif_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_kharif_othercrop_name5 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="KharifPopUp(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_kharif_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_kharif_othercrop_area5" onkeyup="Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_kharif_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_irri_area5" onkeyup="Kharif_WaterRequire()" class="form-control decimal" value="' + sprinkler_kharif_othercrop_irri_area5 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_kharif_othercrop_water_req5" onkeyup="Kharif_WaterRequire()" class="form-control decimal"value="' + sprinkler_kharif_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Sprinkler_crp5').show();
                    $('#Sprinkler_crp5').html(ass);
                    $('#sprinkler_kharif_othercrop_name5').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("sprinkler_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_area5").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("sprinkler_kharif_othercrop_water_req5").disabled = true;
                    //}
                }



                //rabi
                if (response.sprinkler_rabi_othercrop_name1 == null || response.sprinkler_rabi_othercrop_name1 == "") {
                    add_Sprinkler_Rabicount1 = 1;

                }
                else {
                    add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
                }

                if (response.sprinkler_rabi_othercrop_name2 == null || response.sprinkler_rabi_othercrop_name2 == "") {
                    add_Sprinkler_Rabicount2 = 2;

                }
                else {
                    add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
                }

                if (response.sprinkler_rabi_othercrop_name3 == null || response.sprinkler_rabi_othercrop_name3 == "") {
                    add_Sprinkler_Rabicount3 = 3;

                }
                else {
                    add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
                }

                if (response.sprinkler_rabi_othercrop_name4 == null || response.sprinkler_rabi_othercrop_name4 == "") {
                    add_Sprinkler_Rabicount4 = 4;

                }
                else {
                    add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
                }

                if (response.sprinkler_rabi_othercrop_name5 == null || response.sprinkler_rabi_othercrop_name5 == "") {
                    add_Sprinkler_Rabicount5 = 5;

                }
                else {
                    add_Sprinkler_Rabicount = add_Sprinkler_Rabicount + 1;
                }

                if (add_Sprinkler_Rabicount == 5) {
                    $('#spnadd_Rabi_crop').hide();
                }

                if (response.sprinkler_rabi_othercrop_name1 != null && response.sprinkler_rabi_othercrop_name1 != "null" && response.sprinkler_rabi_othercrop_name1 != "") {

                    var sprinkler_rabi_othercrop_area1 = "";
                    var sprinkler_rabi_othercrop_irri_area1 = "";
                    var sprinkler_rabi_othercrop_water_req1 = "";
                    if (response.sprinkler_rabi_othercrop_area1 != null && response.sprinkler_rabi_othercrop_area1 != "") {
                        sprinkler_rabi_othercrop_area1 = response.sprinkler_rabi_othercrop_area1;
                    }
                    if (response.sprinkler_rabi_othercrop_irri_area1 != null && response.sprinkler_rabi_othercrop_irri_area1 != "") {
                        sprinkler_rabi_othercrop_irri_area1 = response.sprinkler_rabi_othercrop_irri_area1;
                    }
                    if (response.sprinkler_rabi_othercrop_water_req1 != null && response.sprinkler_rabi_othercrop_water_req1 != "") {
                        sprinkler_rabi_othercrop_water_req1 = response.sprinkler_rabi_othercrop_water_req1;
                    }


                    var s11 = "sprinkler_rabi_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_rabi_othercrop_name1 + '<a href="#Filter" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_rabi_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area1" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_irri_area1 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req1" class="form-control decimal"onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';
                    $('#Sprinkler_Rabi_crp1').show();
                    $('#Sprinkler_Rabi_crp1').html(ass);
                    $('#sprinkler_rabi_othercrop_name1').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("sprinkler_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_area1").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_water_req1").disabled = true;

                    //}

                }

                if (response.sprinkler_rabi_othercrop_name2 != null && response.sprinkler_rabi_othercrop_name2 != "null" && response.sprinkler_rabi_othercrop_name2 != "") {

                    var sprinkler_rabi_othercrop_area2 = "";
                    var sprinkler_rabi_othercrop_irri_area2 = "";
                    var sprinkler_rabi_othercrop_water_req2 = "";
                    if (response.sprinkler_rabi_othercrop_area2 != null && response.sprinkler_rabi_othercrop_area2 != "") {
                        sprinkler_rabi_othercrop_area2 = response.sprinkler_rabi_othercrop_area2;
                    }
                    if (response.sprinkler_rabi_othercrop_irri_area2 != null && response.sprinkler_rabi_othercrop_irri_area2 != "") {
                        sprinkler_rabi_othercrop_irri_area2 = response.sprinkler_rabi_othercrop_irri_area2;
                    }
                    if (response.sprinkler_rabi_othercrop_water_req2 != null && response.sprinkler_rabi_othercrop_water_req2 != "") {
                        sprinkler_rabi_othercrop_water_req2 = response.sprinkler_rabi_othercrop_water_req2;
                    }


                    var s11 = "sprinkler_rabi_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_rabi_othercrop_name2 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_rabi_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area2" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_rabi_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area2" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_irri_area2 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req2" class="form-control decimal"onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';
                    $('#Sprinkler_Rabi_crp2').show();
                    $('#Sprinkler_Rabi_crp2').html(ass);
                    $('#sprinkler_rabi_othercrop_name2').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_area2").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_water_req2").disabled = true;


                    //}

                }
                if (response.sprinkler_rabi_othercrop_name3 != null && response.sprinkler_rabi_othercrop_name3 != "null" && response.sprinkler_rabi_othercrop_name3 != "") {

                    var sprinkler_rabi_othercrop_area3 = "";
                    var sprinkler_rabi_othercrop_irri_area3 = "";
                    var sprinkler_rabi_othercrop_water_req3 = "";
                    if (response.sprinkler_rabi_othercrop_area3 != null && response.sprinkler_rabi_othercrop_area3 != "") {
                        sprinkler_rabi_othercrop_area3 = response.sprinkler_rabi_othercrop_area3;
                    }
                    if (response.sprinkler_rabi_othercrop_irri_area3 != null && response.sprinkler_rabi_othercrop_irri_area3 != "") {
                        sprinkler_rabi_othercrop_irri_area3 = response.sprinkler_rabi_othercrop_irri_area3;
                    }
                    if (response.sprinkler_rabi_othercrop_water_req3 != null && response.sprinkler_rabi_othercrop_water_req3 != "") {
                        sprinkler_rabi_othercrop_water_req3 = response.sprinkler_rabi_othercrop_water_req3;
                    }

                    var s11 = "sprinkler_rabi_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_rabi_othercrop_name3 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_rabi_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area3" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_rabi_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area3" class="form-control decimal"onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_irri_area3 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req3" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Sprinkler_Rabi_crp3').show();
                    $('#Sprinkler_Rabi_crp3').html(ass);
                    $('#sprinkler_rabi_othercrop_name3').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_area3").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_water_req3").disabled = true;

                    //}

                }
                if (response.sprinkler_rabi_othercrop_name4 != null && response.sprinkler_rabi_othercrop_name4 != "null" && response.sprinkler_rabi_othercrop_name4 != "") {

                    var sprinkler_rabi_othercrop_area4 = "";
                    var sprinkler_rabi_othercrop_irri_area4 = "";
                    var sprinkler_rabi_othercrop_water_req4 = "";
                    if (response.sprinkler_rabi_othercrop_area4 != null && response.sprinkler_rabi_othercrop_area4 != "") {
                        sprinkler_rabi_othercrop_area4 = response.sprinkler_rabi_othercrop_area4;
                    }
                    if (response.sprinkler_rabi_othercrop_irri_area4 != null && response.sprinkler_rabi_othercrop_irri_area4 != "") {
                        sprinkler_rabi_othercrop_irri_area4 = response.sprinkler_rabi_othercrop_irri_area4;
                    }
                    if (response.sprinkler_rabi_othercrop_water_req4 != null && response.sprinkler_rabi_othercrop_water_req4 != "") {
                        sprinkler_rabi_othercrop_water_req4 = response.sprinkler_rabi_othercrop_water_req4;
                    }


                    var s11 = "sprinkler_rabi_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_rabi_othercrop_name4 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_rabi_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area4" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_rabi_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area4" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_irri_area4 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req4" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Sprinkler_Rabi_crp4').show();

                    $('#Sprinkler_Rabi_crp4').html(ass);
                    $('#sprinkler_rabi_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_area4").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_water_req4").disabled = true;

                    //}
                }
                if (response.sprinkler_rabi_othercrop_name5 != null && response.sprinkler_rabi_othercrop_name5 != "null" && response.sprinkler_rabi_othercrop_name5 != "") {

                    var sprinkler_rabi_othercrop_area5 = "";
                    var sprinkler_rabi_othercrop_irri_area5 = "";
                    var sprinkler_rabi_othercrop_water_req5 = "";
                    if (response.sprinkler_rabi_othercrop_area5 != null && response.sprinkler_rabi_othercrop_area5 != "") {
                        sprinkler_rabi_othercrop_area5 = response.sprinkler_rabi_othercrop_area5;
                    }
                    if (response.sprinkler_rabi_othercrop_irri_area5 != null && response.sprinkler_rabi_othercrop_irri_area5 != "") {
                        sprinkler_rabi_othercrop_irri_area5 = response.sprinkler_rabi_othercrop_irri_area5;
                    }
                    if (response.sprinkler_rabi_othercrop_water_req5 != null && response.sprinkler_rabi_othercrop_water_req5 != "") {
                        sprinkler_rabi_othercrop_water_req5 = response.sprinkler_rabi_othercrop_water_req5;
                    }

                    var s11 = "sprinkler_rabi_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_rabi_othercrop_name5 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_rabi_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_rabi_othercrop_area5" onkeyup="Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_rabi_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_irri_area5" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_irri_area5 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_rabi_othercrop_water_req5" class="form-control decimal" onkeyup="Rabi_WaterRequire()" value="' + sprinkler_rabi_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Sprinkler_Rabi_crp5').show();
                    $('#Sprinkler_Rabi_crp5').html(ass);

                    $('#sprinkler_rabi_othercrop_name5').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_area5").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("sprinkler_rabi_othercrop_water_req5").disabled = true;
                    //}

                }




                //Summer

                if (response.sprinkler_summer_othercrop_name1 == null || response.sprinkler_summer_othercrop_name1 == "") {
                    add_Sprinkler_Summercount1 = 1;

                }
                else {
                    add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
                }
                if (response.sprinkler_summer_othercrop_name2 == null || response.sprinkler_summer_othercrop_name2 == "") {
                    add_Sprinkler_Summercount2 = 2;

                }
                else {
                    add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
                }
                if (response.sprinkler_summer_othercrop_name3 == null || response.sprinkler_summer_othercrop_name3 == "") {
                    add_Sprinkler_Summercount3 = 3;

                }
                else {
                    add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
                }

                if (response.sprinkler_summer_othercrop_name4 == null || response.sprinkler_summer_othercrop_name4 == "") {
                    add_Sprinkler_Summercount4 = 4;

                } else {
                    add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
                }

                if (response.sprinkler_summer_othercrop_name5 == null || response.sprinkler_summer_othercrop_name5 == "") {
                    add_Sprinkler_Summercount5 = 5;

                }
                else {
                    add_Sprinkler_Summercount = add_Sprinkler_Summercount + 1;
                }

                if (add_Sprinkler_Summercount == 5) {

                    $('#spnadd_summer_crop').hide();
                }

                if (response.sprinkler_summer_othercrop_name1 != null && response.sprinkler_summer_othercrop_name1 != "null" && response.sprinkler_summer_othercrop_name1 != "") {

                    var sprinkler_summer_othercrop_area1 = "";
                    var sprinkler_summer_othercrop_irri_area1 = "";
                    var sprinkler_summer_othercrop_water_req1 = "";
                    if (response.sprinkler_summer_othercrop_area1 != null && response.sprinkler_summer_othercrop_area1 != "") {
                        sprinkler_summer_othercrop_area1 = response.sprinkler_summer_othercrop_area1;
                    }
                    if (response.sprinkler_summer_othercrop_irri_area1 != null && response.sprinkler_summer_othercrop_irri_area1 != "") {
                        sprinkler_summer_othercrop_irri_area1 = response.sprinkler_summer_othercrop_irri_area1;
                    }
                    if (response.sprinkler_summer_othercrop_water_req1 != null && response.sprinkler_summer_othercrop_water_req1 != "") {
                        sprinkler_summer_othercrop_water_req1 = response.sprinkler_summer_othercrop_water_req1;
                    }


                    var s11 = "sprinkler_summer_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_summer_othercrop_name1 + '<a href="#Filter" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_summer_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area1" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_summer_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area1" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_irri_area1 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req1" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Sprinkler_Summer_crp1').html(ass);
                    $('#Sprinkler_Summer_crp1').show();
                    $('#sprinkler_summer_othercrop_name1').hide();


                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_area1").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_water_req1").disabled = true;



                    //}
                }

                if (response.sprinkler_summer_othercrop_name2 != null && response.sprinkler_summer_othercrop_name2 != "null" && response.sprinkler_summer_othercrop_name2 != "") {

                    var sprinkler_summer_othercrop_area2 = "";
                    var sprinkler_summer_othercrop_irri_area2 = "";
                    var sprinkler_summer_othercrop_water_req2 = "";
                    if (response.sprinkler_summer_othercrop_area2 != null && response.sprinkler_summer_othercrop_area2 != "") {
                        sprinkler_summer_othercrop_area2 = response.sprinkler_summer_othercrop_area2;
                    }
                    if (response.sprinkler_summer_othercrop_irri_area2 != null && response.sprinkler_summer_othercrop_irri_area2 != "") {
                        sprinkler_summer_othercrop_irri_area2 = response.sprinkler_summer_othercrop_irri_area2;
                    }
                    if (response.sprinkler_summer_othercrop_water_req2 != null && response.sprinkler_summer_othercrop_water_req2 != "") {
                        sprinkler_summer_othercrop_water_req2 = response.sprinkler_summer_othercrop_water_req2;
                    }

                    var s11 = "sprinkler_summer_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_summer_othercrop_name2 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_summer_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area2" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_summer_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area2" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_irri_area2 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req2" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Sprinkler_Summer_crp2').html(ass);
                    $('#Sprinkler_Summer_crp2').show();
                    $('#sprinkler_summer_othercrop_name2').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("sprinkler_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_area2").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_water_req2").disabled = true;


                    //}
                }
                if (response.sprinkler_summer_othercrop_name3 != null && response.sprinkler_summer_othercrop_name3 != "null" && response.sprinkler_summer_othercrop_name3 != "") {

                    var sprinkler_summer_othercrop_area3 = "";
                    var sprinkler_summer_othercrop_irri_area3 = "";
                    var sprinkler_summer_othercrop_water_req3 = "";
                    if (response.sprinkler_summer_othercrop_area3 != null && response.sprinkler_summer_othercrop_area3 != "") {
                        sprinkler_summer_othercrop_area3 = response.sprinkler_summer_othercrop_area3;
                    }
                    if (response.sprinkler_summer_othercrop_irri_area3 != null && response.sprinkler_summer_othercrop_irri_area3 != "") {
                        sprinkler_summer_othercrop_irri_area3 = response.sprinkler_summer_othercrop_irri_area3;
                    }
                    if (response.sprinkler_summer_othercrop_water_req3 != null && response.sprinkler_summer_othercrop_water_req3 != "") {
                        sprinkler_summer_othercrop_water_req3 = response.sprinkler_summer_othercrop_water_req3;
                    }

                    var s11 = "sprinkler_summer_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_summer_othercrop_name3 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_summer_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area3" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_summer_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area3" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_irri_area3 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req3" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Sprinkler_Summer_crp3').show();

                    $('#Sprinkler_Summer_crp3').html(ass);
                    $('#sprinkler_summer_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {



                    //    document.getElementById("sprinkler_summer_othercrop_name3").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_area3").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_water_req3").disabled = true;



                    //}
                }
                if (response.sprinkler_summer_othercrop_name4 != null && response.sprinkler_summer_othercrop_name4 != "null" && response.sprinkler_summer_othercrop_name4 != "") {

                    var sprinkler_summer_othercrop_area4 = "";
                    var sprinkler_summer_othercrop_irri_area4 = "";
                    var sprinkler_summer_othercrop_water_req4 = "";
                    if (response.sprinkler_summer_othercrop_area4 != null && response.sprinkler_summer_othercrop_area4 != "") {
                        sprinkler_summer_othercrop_area4 = response.sprinkler_summer_othercrop_area4;
                    }
                    if (response.sprinkler_summer_othercrop_irri_area4 != null && response.sprinkler_summer_othercrop_irri_area4 != "") {
                        sprinkler_summer_othercrop_irri_area4 = response.sprinkler_summer_othercrop_irri_area4;
                    }
                    if (response.sprinkler_summer_othercrop_water_req4 != null && response.sprinkler_summer_othercrop_water_req4 != "") {
                        sprinkler_summer_othercrop_water_req4 = response.sprinkler_summer_othercrop_water_req4;
                    }

                    var s11 = "sprinkler_summer_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_summer_othercrop_name4 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_summer_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area4" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_summer_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area4" class="form-control decimal"  onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_irri_area4 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req4" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Sprinkler_Summer_crp4').show();

                    $('#Sprinkler_Summer_crp4').html(ass);
                    $('#sprinkler_summer_othercrop_name4').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("sprinkler_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.sprinkler_summer_othercrop_name5 != null && response.sprinkler_summer_othercrop_name5 != "null" && response.sprinkler_summer_othercrop_name5 != "") {

                    var sprinkler_summer_othercrop_area5 = "";
                    var sprinkler_summer_othercrop_irri_area5 = "";
                    var sprinkler_summer_othercrop_water_req5 = "";
                    if (response.sprinkler_summer_othercrop_area5 != null && response.sprinkler_summer_othercrop_area5 != "") {
                        sprinkler_summer_othercrop_area5 = response.sprinkler_summer_othercrop_area5;
                    }
                    if (response.sprinkler_summer_othercrop_irri_area5 != null && response.sprinkler_summer_othercrop_irri_area5 != "") {
                        sprinkler_summer_othercrop_irri_area5 = response.sprinkler_summer_othercrop_irri_area5;
                    }
                    if (response.sprinkler_summer_othercrop_water_req5 != null && response.sprinkler_summer_othercrop_water_req5 != "") {
                        sprinkler_summer_othercrop_water_req5 = response.sprinkler_summer_othercrop_water_req5;
                    }


                    var s11 = "sprinkler_summer_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.sprinkler_summer_othercrop_name5 + '<a href="#Filter" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Sprinkler_otherpopup(' + s11 + ')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="sprinkler_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.sprinkler_summer_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" id="sprinkler_summer_othercrop_area5" onkeyup="Crop_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + sprinkler_summer_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_irri_area5" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_irri_area5 + '" placeholder="Area proposed for Sprinkler Irrigation(ha)" title="Area proposed for Sprinkler Irrigation(ha)" />' +
                        '</li><li><input type="text" id="sprinkler_summer_othercrop_water_req5" class="form-control decimal" onkeyup="Crop_WaterRequire()" value="' + sprinkler_summer_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Sprinkler_Summer_crp5').show();
                    $('#Sprinkler_Summer_crp5').html(ass);
                    $('#sprinkler_summer_othercrop_name5').hide();
                    $('#spnadd_summer_crop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("sprinkler_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_area5").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("sprinkler_summer_othercrop_water_req5").disabled = true;

                    //}
                }





                //total
                
                if (response.sprinkler_approx_estimated_cost != "" && response.sprinkler_approx_estimated_cost != null) {
                    $('#sprinkler_approx_estimated_cost').val(response.sprinkler_approx_estimated_cost);
                }
                if (response.sprinkler_cost_type != "" && response.sprinkler_cost_type != null) {
                    $('#sprinkler_cost_type').val(response.sprinkler_cost_type);
                }


                //summer total
                $('#Summer_Crops_Water_Demand').text(response.sprinkler_summer_total_waterdemand);
                $('#sprinkler_summer_total_summer_waterdemand').text(response.sprinkler_summer_total_summer_waterdemand);
                $('#sprinkler_summer_total_reduction_waterdemand').text(response.sprinkler_summer_total_reduction_waterdemand);

                //rabi total
                $('#Sprinkler_RabiWater_Demand').text(response.sprinkler_rabi_total_waterdemand);
                $('#sprinkler_rabi_total_rabi_waterdemand').text(response.sprinkler_rabi_total_rabi_waterdemand);
                $('#sprinkler_rabi_total_reduction_waterdemand').text(response.sprinkler_rabi_total_reduction_waterdemand);


                $('#Sprinkler_Water_Demand').text(response.sprinkler_kharif_total_waterdemand);
                $('#sprinkler_kharif_total_sprinkler_waterdemand').text(response.sprinkler_kharif_total_sprinkler_waterdemand);
                $('#sprinkler_kharif_total_reduction_waterdemand').text(response.sprinkler_kharif_total_reduction_waterdemand);




                $('#Paddy_Kharif_Value').val(response.sprinkler_kharif_paddy_crop_area);
                $('#Sprinkler_kharif_Paddy_FundingSource').val(response.sprinkler_kharif_paddy_fundingsource);
                $('#sprinkler_kharif_paddy_irri_area').val(response.sprinkler_kharif_paddy_irri_area);

                $('#Ragi_Kharif_Value').val(response.sprinkler_kharif_ragi_crop_area);
                $('#Sprinkler_kharif_Ragi_FundingSource').val(response.sprinkler_kharif_ragi_fundingsource);
                $('#sprinkler_kharif_ragi_irri_area').val(response.sprinkler_kharif_ragi_irri_area);

                $('#GroundNut_Kharif_Value').val(response.sprinkler_kharif_groundnut_crop_area);
                $('#Sprinkler_kharif_GroundNut_FundingSource').val(response.sprinkler_kharif_groundnut_fundingsource);
                $('#sprinkler_kharif_groundnut_irri_area').val(response.sprinkler_kharif_groundnut_irri_area);


                $('#Sugarcane_Kharif_Value').val(response.sprinkler_kharif_sugarcane_crop_area);
                $('#Sprinkler_kharif_Sugarcane_FundingSource').val(response.sprinkler_kharif_sugarcane_fundingsource);
                $('#sprinkler_kharif_sugarcane_irri_area').val(response.sprinkler_kharif_sugarcane_irri_area);

                $('#Tomato_Kharif_Value').val(response.sprinkler_kharif_tomoto_crop_area);
                $('#Sprinkler_kharif_Tomoto_FundingSource').val(response.sprinkler_kharif_tomoto_fundingsource);
                $('#sprinkler_kharif_tomoto_irri_area').val(response.sprinkler_kharif_tomoto_irri_area);

                //$('#Cabbage_Kharif_Value').val(response.sprinkler_kharif_cabbage_crop_area);
                //$('#Sprinkler_kharif_Cabbage_FundingSource').val(response.sprinkler_kharif_cabbage_fundingsource);
                //$('#sprinkler_kharif_cabbage_irri_area').val(response.sprinkler_kharif_cabbage_irri_area);


                //$('#Beans_Kharif_Value').val(response.sprinkler_kharif_beans_crop_area);
                //$('#Sprinkler_kharif_Beans_FundingSource').val(response.sprinkler_kharif_beans_fundingsource);
                //$('#sprinkler_kharif_beans_irri_area').val(response.sprinkler_kharif_beans_irri_area);


                $('#Floriculture_Kharif_Value').val(response.sprinkler_kharif_floriculture_crop_area);
                $('#Sprinkler_kharif_Floriculture_FundingSource').val(response.sprinkler_kharif_floriculture_fundingsource);
                $('#sprinkler_kharif_floriculture_irri_area').val(response.sprinkler_kharif_floriculture_irri_area);


                $('#Sericulture_Kharif_Value').val(response.sprinkler_kharif_sericulture_crop_area);
                $('#Sprinkler_kharif_Sericulture_FundingSource').val(response.sprinkler_kharif_sericulture_fundingsource);
                $('#sprinkler_kharif_sericulture_irri_area').val(response.sprinkler_kharif_sericulture_irri_area);


                //$('#Cucmber_Kharif_Value').val(response.sprinkler_kharif_cucumber_crop_area);
                //$('#Sprinkler_kharif_Cucmber_FundingSource').val(response.sprinkler_kharif_cucumber_fundingsource);
                //$('#sprinkler_kharif_cucumber_irri_area').val(response.sprinkler_kharif_cucumber_irri_area);


                $('#Banana_Kharif_Value').val(response.sprinkler_kharif_banana_crop_area);
                $('#Sprinkler_kharif_Banana_FundingSource').val(response.sprinkler_kharif_banana_fundingsource);
                $('#sprinkler_kharif_banana_irri_area').val(response.sprinkler_kharif_banana_irri_area);


                $('#Fodder_Kharif_Value').val(response.sprinkler_kharif_fodder_crop_area);
                $('#Sprinkler_kharif_Fodder_FundingSource').val(response.sprinkler_kharif_fodder_fundingsource);
                $('#sprinkler_kharif_fodder_irri_area').val(response.sprinkler_kharif_fodder_irri_area);


                $('#Maize_Kharif_Value').val(response.sprinkler_kharif_maize_crop_area);
                $('#Sprinkler_kharif_Maize_FundingSource').val(response.sprinkler_kharif_maize_fundingsource);
                $('#sprinkler_kharif_maize_irri_area').val(response.sprinkler_kharif_maize_irri_area);


                $('#Potato_Kharif_Value').val(response.sprinkler_kharif_potato_crop_area);
                $('#Sprinkler_kharif_Potato_FundingSource').val(response.sprinkler_kharif_potato_fundingsource);
                $('#sprinkler_kharif_potato_irri_area').val(response.sprinkler_kharif_potato_irri_area);


                $('#Chillies_Kharif_Value').val(response.sprinkler_kharif_chillies_crop_area);
                $('#Sprinkler_kharif_Chillies_FundingSource').val(response.sprinkler_kharif_chillies_fundingsource);
                $('#sprinkler_kharif_chillies_irri_area').val(response.sprinkler_kharif_chillies_irri_area);


                $('#Cotton_Kharif_Value').val(response.sprinkler_kharif_cotton_crop_area);
                $('#Sprinkler_kharif_Cotton_FundingSource').val(response.sprinkler_kharif_cotton_fundingsource);
                $('#sprinkler_kharif_cotton_irri_area').val(response.sprinkler_kharif_cotton_irri_area);


                $('#Melon_Kharif_Value').val(response.sprinkler_kharif_melon_crop_area);
                $('#Sprinkler_kharif_Melon_FundingSource').val(response.sprinkler_kharif_melon_fundingsource);
                $('#sprinkler_kharif_melon_irri_area').val(response.sprinkler_kharif_melon_irri_area);

                $('#Citrus_Kharif_Value').val(response.sprinkler_kharif_citrus_crop_area);
                $('#Sprinkler_kharif_Citrus_FundingSource').val(response.sprinkler_kharif_citrus_fundingsource);
                $('#sprinkler_kharif_citrus_irri_area').val(response.sprinkler_kharif_citrus_irri_area);


                //$('#Peanut_Kharif_Value').val(response.sprinkler_kharif_peanut_crop_area);
                //$('#Sprinkler_kharif_Peanut_FundingSource').val(response.sprinkler_kharif_peanut_fundingsource);
                //$('#sprinkler_kharif_peanut_irri_area').val(response.sprinkler_kharif_peanut_irri_area);


                $('#Horticulture_Kharif_Value').val(response.sprinkler_kharif_horticulture_crop_area);
                $('#Sprinkler_kharif_Horticulture_FundingSource').val(response.sprinkler_kharif_horticulture_fundingsource);
                $('#sprinkler_kharif_horticulture_irri_area').val(response.sprinkler_kharif_horticulture_irri_area);


                $('#Sericulture_Rabi_Value').val(response.sprinkler_rabi_sericulture_crop_area);
                $('#Sprinkler_Rabi_Sericulture_FundingSource').val(response.sprinkler_rabi_sericulture_fundingsource);
                $('#sprinkler_rabi_sericulture_irri_area').val(response.sprinkler_rabi_sericulture_irri_area);


                $('#Tomota_Rabi_Value').val(response.sprinkler_rabi_tomoto_crop_area);
                $('#Sprinkler_Rabi_Tomota_FundingSource').val(response.sprinkler_rabi_tomoto_fundingsource);
                $('#sprinkler_rabi_tomoto_irri_area').val(response.sprinkler_rabi_tomoto_irri_area);


                //$('#Cabbage_Rabi_Value').val(response.sprinkler_rabi_cabbage_crop_area);
                //$('#Sprinkler_Rabi_Cabbage_FundingSource').val(response.sprinkler_rabi_cabbage_fundingsource);
                //$('#sprinkler_rabi_cabbage_irri_area').val(response.sprinkler_rabi_cabbage_irri_area);


                //$('#Beans_Rabi_Value').val(response.sprinkler_rabi_beans_crop_area);
                //$('#Sprinkler_Rabi_Beans_FundingSource').val(response.sprinkler_rabi_beans_fundingsource);
                //$('#sprinkler_rabi_beans_irri_area').val(response.sprinkler_rabi_beans_irri_area);


                $('#Floriculture_Rabi_Value').val(response.sprinkler_rabi_floriculture_crop_area);
                $('#Sprinkler_Rabi_Floriculture_FundingSource').val(response.sprinkler_rabi_floriculture_fundingsource);
                $('#sprinkler_rabi_floriculture_irri_area').val(response.sprinkler_rabi_floriculture_irri_area);


                //$('#Potato_Rabi_Value').val(response.sprinkler_rabi_potato_crop_area);
                //$('#Sprinkler_Rabi_Potato_FundingSource').val(response.sprinkler_rabi_potato_fundingsource);
                //$('#sprinkler_rabi_potato_irri_area').val(response.sprinkler_rabi_potato_irri_area);


                //$('#Cucumber_Rabi_Value').val(response.sprinkler_rabi_cucumber_crop_area);
                //$('#Sprinkler_Rabi_Cucumber_FundingSource').val(response.sprinkler_rabi_cucumber_fundingsource);
                //$('#sprinkler_rabi_cucumber_irri_area').val(response.sprinkler_rabi_cucumber_irri_area);


                $('#Ragi_Rabi_Value').val(response.sprinkler_rabi_ragi_crop_area);
                $('#Sprinkler_Rabi_Ragi_FundingSource').val(response.sprinkler_rabi_ragi_fundingsource);
                $('#sprinkler_rabi_ragi_irri_area').val(response.sprinkler_rabi_ragi_irri_area);


                $('#Sugarcane_Rabi_Value').val(response.sprinkler_rabi_sugarcane_crop_area);
                $('#Sprinkler_Rabi_Sugarcane_FundingSource').val(response.sprinkler_rabi_sugarcane_fundingsource);
                $('#sprinkler_rabi_sugarcane_irri_area').val(response.sprinkler_rabi_sugarcane_irri_area);


                $('#Maize_Rabi_Value').val(response.sprinkler_rabi_maize_crop_area);
                $('#Sprinkler_Rabi_Maize_FundingSource').val(response.sprinkler_rabi_maize_fundingsource);
                $('#sprinkler_rabi_maize_irri_area').val(response.sprinkler_rabi_maize_irri_area);


                $('#Fodder_Rabi_Value').val(response.sprinkler_rabi_fodder_crop_area);
                $('#Sprinkler_Rabi_Fodder_FundingSource').val(response.sprinkler_rabi_fodder_fundingsource);
                $('#sprinkler_rabi_fodder_irri_area').val(response.sprinkler_rabi_fodder_irri_area);


                $('#Paddy_Rabi_Value').val(response.sprinkler_rabi_paddy_crop_area);
                $('#Sprinkler_Rabi_Paddy_FundingSource').val(response.sprinkler_rabi_paddy_fundingsource);
                $('#sprinkler_rabi_paddy_irri_area').val(response.sprinkler_rabi_paddy_irri_area);


                $('#Alfalfa_Rabi_Value').val(response.sprinkler_rabi_alfalfa_crop_area);
                $('#Sprinkler_Rabi_Alfalfa_FundingSource').val(response.sprinkler_rabi_alfalfa_fundingsource);
                $('#sprinkler_rabi_alfalfa_irri_area').val(response.sprinkler_rabi_alfalfa_irri_area);


                //$('#Onion_Rabi_Value').val(response.sprinkler_rabi_onion_crop_area);
                //$('#Sprinkler_Rabi_Onion_FundingSource').val(response.sprinkler_rabi_onion_fundingsource);
                //$('#sprinkler_rabi_onion_irri_area').val(response.sprinkler_rabi_onion_irri_area);


                $('#Hortculture_Rabi_Value').val(response.sprinkler_rabi_horticulture_crop_area);
                $('#Sprinkler_Rabi_Hortculture_FundingSource').val(response.sprinkler_rabi_horticulture_fundingsource);
                $('#sprinkler_rabi_horticulture_irri_area').val(response.sprinkler_rabi_horticulture_irri_area);


                $('#Sunflower_Rabi_Value').val(response.sprinkler_rabi_sunflower_crop_area);
                $('#Sprinkler_Rabi_Sunflower_FundingSource').val(response.sprinkler_rabi_sunflower_fundingsource);
                $('#sprinkler_rabi_sunflower_irri_area').val(response.sprinkler_rabi_sunflower_irri_area);


                $('#Sericulture_Crop_Value').val(response.sprinkler_summer_sericulture_crop_area);
                $('#Sprinkler_summer_Sericulture_FundingSource').val(response.sprinkler_summer_sericulture_fundingsource);
                $('#sprinkler_summer_sericulture_irri_area').val(response.sprinkler_summer_sericulture_irri_area);


                $('#Tomota_Crop_Value').val(response.sprinkler_summer_tomoto_crop_area);
                $('#Sprinkler_summer_Tomota_FundingSource').val(response.sprinkler_summer_tomoto_fundingsource);
                $('#sprinkler_summer_tomoto_irri_area').val(response.sprinkler_summer_tomoto_irri_area);


                //$('#Cabbage_Crop_Value').val(response.sprinkler_summer_cabbage_crop_area);
                //$('#Sprinkler_summer_Cabbage_FundingSource').val(response.sprinkler_summer_cabbage_fundingsource);
                //$('#sprinkler_summer_cabbage_irri_area').val(response.sprinkler_summer_cabbage_irri_area);


                //$('#Beans_Crop_Value').val(response.sprinkler_summer_beans_crop_area);
                //$('#Sprinkler_summer_Beans_FundingSource').val(response.sprinkler_summer_beans_fundingsource);
                //$('#sprinkler_summer_beans_irri_area').val(response.sprinkler_summer_beans_irri_area);


                $('#Floriculture_Crop_Value').val(response.sprinkler_summer_floriculture_crop_area);
                $('#Sprinkler_summer_Floriculture_FundingSource').val(response.sprinkler_summer_floriculture_fundingsource);
                $('#sprinkler_summer_floriculture_irri_area').val(response.sprinkler_summer_floriculture_irri_area);


                $('#Maize_Crop_Value').val(response.sprinkler_summer_maize_crop_area);
                $('#Sprinkler_summer_Maize_FundingSource').val(response.sprinkler_summer_maize_fundingsource);
                $('#sprinkler_summer_maize_irri_area').val(response.sprinkler_summer_maize_irri_area);


                $('#Fodder_Crop_Value').val(response.sprinkler_summer_fodder_crop_area);
                $('#Sprinkler_summer_Fodder_FundingSource').val(response.sprinkler_summer_fodder_fundingsource);
                $('#sprinkler_summer_fodder_irri_area').val(response.sprinkler_summer_fodder_irri_area);


                $('#Sugarcane_Crop_Value').val(response.sprinkler_summer_sugarcane_crop_area);
                $('#Sprinkler_summer_Sugarcane_FundingSource').val(response.sprinkler_summer_sugarcane_fundingsource);
                $('#sprinkler_summer_sugarcane_irri_area').val(response.sprinkler_summer_sugarcane_irri_area);

                $('#sprinkler_summer_horticulture_crop_area').val(response.sprinkler_summer_horticulture_crop_area);
                $('#sprinkler_summer_horticulture_irri_area').val(response.sprinkler_summer_horticulture_irri_area);
                // $('#sprinkler_summer_horticulture_water_req').val(response.sprinkler_summer_horticulture_water_req);
                if (response.sprinkler_summer_horticulture_water_req != null && response.sprinkler_summer_horticulture_water_req != "") {
                    $('#sprinkler_summer_horticulture_water_req').val(response.sprinkler_summer_horticulture_water_req);
                }
                else {
                    $('#sprinkler_summer_horticulture_water_req').val(470);
                }

                //anual total
                $('#TotalAnnual_sprinkler_Reduction').text(response.sprinkler_annual_reduction_waterdemand);


                //new columns water requirement
                if (response.sprinkler_kharif_paddy_water_req != null && response.sprinkler_kharif_paddy_water_req != "") {
                    $('#sprinkler_kharif_paddy_water_req').val(response.sprinkler_kharif_paddy_water_req);
                }
                else {
                    $('#sprinkler_kharif_paddy_water_req').val(1175);
                }

                if (response.sprinkler_kharif_ragi_water_req != null && response.sprinkler_kharif_ragi_water_req != "") {
                    $('#sprinkler_kharif_ragi_water_req').val(response.sprinkler_kharif_ragi_water_req);
                }
                else {
                    $('#sprinkler_kharif_ragi_water_req').val(550);
                }


                if (response.sprinkler_kharif_groundnut_water_req != null && response.sprinkler_kharif_groundnut_water_req != "") {
                    $('#sprinkler_kharif_groundnut_water_req').val(response.sprinkler_kharif_groundnut_water_req);
                }
                else {
                    $('#sprinkler_kharif_groundnut_water_req').val(525);
                }

                if (response.sprinkler_kharif_sugarcane_water_req != null && response.sprinkler_kharif_sugarcane_water_req != "") {
                    $('#sprinkler_kharif_sugarcane_water_req').val(response.sprinkler_kharif_sugarcane_water_req);
                }
                else {
                    $('#sprinkler_kharif_sugarcane_water_req').val(2000);
                }

                if (response.sprinkler_kharif_tomoto_water_req != null && response.sprinkler_kharif_tomoto_water_req != "") {
                    $('#sprinkler_kharif_tomoto_water_req').val(response.sprinkler_kharif_tomoto_water_req);
                }
                else {
                    $('#sprinkler_kharif_tomoto_water_req').val(500);
                }

                //if (response.sprinkler_kharif_cabbage_water_req != null && response.sprinkler_kharif_cabbage_water_req != "") {
                //    $('#sprinkler_kharif_cabbage_water_req').val(response.sprinkler_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#sprinkler_kharif_cabbage_water_req').val(425);
                //}



                //if (response.sprinkler_kharif_beans_water_req != null && response.sprinkler_kharif_beans_water_req != "") {
                //    $('#sprinkler_kharif_beans_water_req').val(response.sprinkler_kharif_beans_water_req);
                //}
                //else {
                //    $('#sprinkler_kharif_beans_water_req').val(425);
                //}

                if (response.sprinkler_kharif_floriculture_water_req != null && response.sprinkler_kharif_floriculture_water_req != "") {
                    $('#sprinkler_kharif_floriculture_water_req').val(response.sprinkler_kharif_floriculture_water_req);
                }
                else {
                    $('#sprinkler_kharif_floriculture_water_req').val(1200);
                }

                if (response.sprinkler_kharif_sericulture_water_req != null && response.sprinkler_kharif_sericulture_water_req != "") {
                    $('#sprinkler_kharif_sericulture_water_req').val(response.sprinkler_kharif_sericulture_water_req);
                }
                else {
                    $('#sprinkler_kharif_sericulture_water_req').val(1550);
                }

                //if (response.sprinkler_kharif_cucumber_water_req != null && response.sprinkler_kharif_cucumber_water_req != "") {
                //    $('#sprinkler_kharif_cucumber_water_req').val(response.sprinkler_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#sprinkler_kharif_cucumber_water_req').val(400);
                //}


                if (response.sprinkler_kharif_banana_water_req != null && response.sprinkler_kharif_banana_water_req != "") {
                    $('#sprinkler_kharif_banana_water_req').val(response.sprinkler_kharif_banana_water_req);
                }
                else {
                    $('#sprinkler_kharif_banana_water_req').val(1700);
                }


                if (response.sprinkler_kharif_fodder_water_req != null && response.sprinkler_kharif_fodder_water_req != "") {
                    $('#sprinkler_kharif_fodder_water_req').val(response.sprinkler_kharif_fodder_water_req);
                }
                else {
                    $('#sprinkler_kharif_fodder_water_req').val(1400);
                }


                if (response.sprinkler_kharif_maize_water_req != null && response.sprinkler_kharif_maize_water_req != "") {
                    $('#sprinkler_kharif_maize_water_req').val(response.sprinkler_kharif_maize_water_req);
                }
                else {
                    $('#sprinkler_kharif_maize_water_req').val(650);
                }


                //if (response.sprinkler_kharif_potato_water_req != null && response.sprinkler_kharif_potato_water_req != "") {
                //    $('#sprinkler_kharif_potato_water_req').val(response.sprinkler_kharif_potato_water_req);
                //}
                //else {
                //    $('#sprinkler_kharif_potato_water_req').val(600);
                //}


                if (response.sprinkler_kharif_chillies_water_req != null && response.sprinkler_kharif_chillies_water_req != "") {
                    $('#sprinkler_kharif_chillies_water_req').val(response.sprinkler_kharif_chillies_water_req);
                }
                else {
                    $('#sprinkler_kharif_chillies_water_req').val(230);
                }


                if (response.sprinkler_kharif_cotton_water_req != null && response.sprinkler_kharif_cotton_water_req != "") {
                    $('#sprinkler_kharif_cotton_water_req').val(response.sprinkler_kharif_cotton_water_req);
                }
                else {
                    $('#sprinkler_kharif_cotton_water_req').val(1000);
                }
                if (response.sprinkler_kharif_melon_water_req != null && response.sprinkler_kharif_melon_water_req != "") {
                    $('#sprinkler_kharif_melon_water_req').val(response.sprinkler_kharif_melon_water_req);
                }
                else {
                    $('#sprinkler_kharif_melon_water_req').val(500);
                }
                if (response.sprinkler_kharif_citrus_water_req != null && response.sprinkler_kharif_citrus_water_req != "") {
                    $('#sprinkler_kharif_citrus_water_req').val(response.sprinkler_kharif_citrus_water_req);
                }
                else {
                    $('#sprinkler_kharif_citrus_water_req').val(1050);
                }
                //if (response.sprinkler_kharif_peanut_water_req != null && response.sprinkler_kharif_peanut_water_req != "") {
                //    $('#sprinkler_kharif_peanut_water_req').val(response.sprinkler_kharif_peanut_water_req);
                //}
                //else {
                //    $('#sprinkler_kharif_peanut_water_req').val(600);
                //}
                if (response.sprinkler_kharif_horticulture_water_req != null && response.sprinkler_kharif_horticulture_water_req != "") {
                    $('#sprinkler_kharif_horticulture_water_req').val(response.sprinkler_kharif_horticulture_water_req);
                }
                else {
                    $('#sprinkler_kharif_horticulture_water_req').val(470);
                }
                if (response.sprinkler_rabi_sericulture_water_req != null && response.sprinkler_rabi_sericulture_water_req != "") {
                    $('#sprinkler_rabi_sericulture_water_req').val(response.sprinkler_rabi_sericulture_water_req);
                }
                else {
                    $('#sprinkler_rabi_sericulture_water_req').val(1550);
                }
                if (response.sprinkler_rabi_tomoto_water_req != null && response.sprinkler_rabi_tomoto_water_req != "") {
                    $('#sprinkler_rabi_tomoto_water_req').val(response.sprinkler_rabi_tomoto_water_req);
                }
                else {
                    $('#sprinkler_rabi_tomoto_water_req').val(500);
                }
                //if (response.sprinkler_rabi_cabbage_water_req != null && response.sprinkler_rabi_cabbage_water_req != "") {
                //    $('#sprinkler_rabi_cabbage_water_req').val(response.sprinkler_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#sprinkler_rabi_cabbage_water_req').val(425);
                //}
                //if (response.sprinkler_rabi_beans_water_req != null && response.sprinkler_rabi_beans_water_req != "") {
                //    $('#sprinkler_rabi_beans_water_req').val(response.sprinkler_rabi_beans_water_req);
                //}
                //else {
                //    $('#sprinkler_rabi_beans_water_req').val(400);
                //}
                if (response.sprinkler_rabi_floriculture_water_req != null && response.sprinkler_rabi_floriculture_water_req != "") {
                    $('#sprinkler_rabi_floriculture_water_req').val(response.sprinkler_rabi_floriculture_water_req);
                }
                else {
                    $('#sprinkler_rabi_floriculture_water_req').val(1200);
                }
                //if (response.sprinkler_rabi_potato_water_req != null && response.sprinkler_rabi_potato_water_req != "") {
                //    $('#sprinkler_rabi_potato_water_req').val(response.sprinkler_rabi_potato_water_req);
                //}
                //else {
                //    $('#sprinkler_rabi_potato_water_req').val(600);
                //}
                //if (response.sprinkler_rabi_cucumber_water_req != null && response.sprinkler_rabi_cucumber_water_req != "") {
                //    $('#sprinkler_rabi_cucumber_water_req').val(response.sprinkler_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#sprinkler_rabi_cucumber_water_req').val(400);
                //}
                if (response.sprinkler_rabi_ragi_water_req != null && response.sprinkler_rabi_ragi_water_req != "") {
                    $('#sprinkler_rabi_ragi_water_req').val(response.sprinkler_rabi_ragi_water_req);
                }
                else {
                    $('#sprinkler_rabi_ragi_water_req').val(550);
                }
                if (response.sprinkler_rabi_sugarcane_water_req != null && response.sprinkler_rabi_sugarcane_water_req != "") {
                    $('#sprinkler_rabi_sugarcane_water_req').val(response.sprinkler_rabi_sugarcane_water_req);
                }
                else {
                    $('#sprinkler_rabi_sugarcane_water_req').val(2000);
                }
                if (response.sprinkler_rabi_maize_water_req != null && response.sprinkler_rabi_maize_water_req != "") {
                    $('#sprinkler_rabi_maize_water_req').val(response.sprinkler_rabi_maize_water_req);
                }
                else {
                    $('#sprinkler_rabi_maize_water_req').val(650);
                }
                if (response.sprinkler_rabi_fodder_water_req != null && response.sprinkler_rabi_fodder_water_req != "") {
                    $('#sprinkler_rabi_fodder_water_req').val(response.sprinkler_rabi_fodder_water_req);
                }
                else {
                    $('#sprinkler_rabi_fodder_water_req').val(1400);
                }
                if (response.sprinkler_rabi_paddy_water_req != null && response.sprinkler_rabi_paddy_water_req != "") {
                    $('#sprinkler_rabi_paddy_water_req').val(response.sprinkler_rabi_paddy_water_req);
                }
                else {
                    $('#sprinkler_rabi_paddy_water_req').val(1175);
                }
                if (response.sprinkler_rabi_alfalfa_water_req != null && response.sprinkler_rabi_alfalfa_water_req != "") {
                    $('#sprinkler_rabi_alfalfa_water_req').val(response.sprinkler_rabi_alfalfa_water_req);
                }
                else {
                    $('#sprinkler_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.sprinkler_rabi_onion_water_req != null && response.sprinkler_rabi_onion_water_req != "") {
                //    $('#sprinkler_rabi_onion_water_req').val(response.sprinkler_rabi_onion_water_req);
                //}
                //else {
                //    $('#sprinkler_rabi_onion_water_req').val(450);
                //}
                if (response.sprinkler_rabi_horticulture_water_req != null && response.sprinkler_rabi_horticulture_water_req != "") {
                    $('#sprinkler_rabi_horticulture_water_req').val(response.sprinkler_rabi_horticulture_water_req);
                }
                else {
                    $('#sprinkler_rabi_horticulture_water_req').val(470);
                }
                if (response.sprinkler_rabi_sunflower_water_req != null && response.sprinkler_rabi_sunflower_water_req != "") {
                    $('#sprinkler_rabi_sunflower_water_req').val(response.sprinkler_rabi_sunflower_water_req);
                }
                else {
                    $('#sprinkler_rabi_sunflower_water_req').val(800);
                }

                if (response.sprinkler_summer_sericulture_water_req != null && response.sprinkler_summer_sericulture_water_req != "") {
                    $('#sprinkler_summer_sericulture_water_req').val(response.sprinkler_summer_sericulture_water_req);
                }
                else {
                    $('#sprinkler_summer_sericulture_water_req').val(1550);
                }
                if (response.sprinkler_summer_tomoto_water_req != null && response.sprinkler_summer_tomoto_water_req != "") {
                    $('#sprinkler_summer_tomoto_water_req').val(response.sprinkler_summer_tomoto_water_req);
                }
                else {
                    $('#sprinkler_summer_tomoto_water_req').val(500);
                }
                //if (response.sprinkler_summer_cabbage_water_req != null && response.sprinkler_summer_cabbage_water_req != "") {
                //    $('#sprinkler_summer_cabbage_water_req').val(response.sprinkler_summer_cabbage_water_req);
                //}
                //else {
                //    $('#sprinkler_summer_cabbage_water_req').val(425);
                //}
                //if (response.sprinkler_summer_beans_water_req != null && response.sprinkler_summer_beans_water_req != "") {
                //    $('#sprinkler_summer_beans_water_req').val(response.sprinkler_summer_beans_water_req);
                //}
                //else {
                //    $('#sprinkler_summer_beans_water_req').val(400);
                //}
                if (response.sprinkler_summer_floriculture_water_req != null && response.sprinkler_summer_floriculture_water_req != "") {
                    $('#sprinkler_summer_floriculture_water_req').val(response.sprinkler_summer_floriculture_water_req);
                }
                else {
                    $('#sprinkler_summer_floriculture_water_req').val(1200);
                }
                if (response.sprinkler_summer_maize_water_req != null && response.sprinkler_summer_maize_water_req != "") {
                    $('#sprinkler_summer_maize_water_req').val(response.sprinkler_summer_maize_water_req);
                }
                else {
                    $('#sprinkler_summer_maize_water_req').val(650);
                }
                if (response.sprinkler_summer_fodder_water_req != null && response.sprinkler_summer_fodder_water_req != "") {
                    $('#sprinkler_summer_fodder_water_req').val(response.sprinkler_summer_fodder_water_req);
                }
                else {
                    $('#sprinkler_summer_fodder_water_req').val(1400);
                }
                if (response.sprinkler_summer_sugarcane_water_req != null && response.sprinkler_summer_sugarcane_water_req != "") {
                    $('#sprinkler_summer_sugarcane_water_req').val(response.sprinkler_summer_sugarcane_water_req);
                }
                else {
                    $('#sprinkler_summer_sugarcane_water_req').val(2000);
                }



                //other crops
                //$('#sprinkler_kharif_othercrop_name').val(response.sprinkler_kharif_othercrop_name);
                //$('#sprinkler_kharif_othercrop_area').val(response.sprinkler_kharif_othercrop_area);
                //$('#sprinkler_kharif_othercrop_irri_area').val(response.sprinkler_kharif_othercrop_irri_area);
                //$('#sprinkler_kharif_othercrop_water_req').val(response.sprinkler_kharif_othercrop_water_req);
                //$('#sprinkler_kharif_othyercrop_waterdemand').text(response.sprinkler_kharif_othyercrop_waterdemand);
                //$('#sprinkler_kharif_othercrop_sprinkler_waterdemand').text(response.sprinkler_kharif_othercrop_sprinkler_waterdemand);
                //$('#sprinkler_kharif_othercrop_reduc_gw_demand').text(response.sprinkler_kharif_othercrop_reduc_gw_demand);

                //$('#sprinkler_rabi_othercrop_name').val(response.sprinkler_rabi_othercrop_name);
                //$('#sprinkler_rabi_othercrop_area').val(response.sprinkler_rabi_othercrop_area);
                //$('#sprinkler_rabi_othercrop_irri_area').val(response.sprinkler_rabi_othercrop_irri_area);
                //$('#sprinkler_rabi_othercrop_water_req').val(response.sprinkler_rabi_othercrop_water_req);
                //$('#sprinkler_rabi_othyercrop_waterdemand').text(response.sprinkler_rabi_othyercrop_waterdemand);
                //$('#sprinkler_rabi_othercrop_sprinkler_waterdemand').text(response.sprinkler_rabi_othercrop_sprinkler_waterdemand);
                //$('#sprinkler_rabi_othercrop_reduc_gw_demand').text(response.sprinkler_rabi_othercrop_reduc_gw_demand);

                //$('#sprinkler_summer_othercrop_name').val(response.sprinkler_summer_othercrop_name);
                //$('#sprinkler_summer_othercrop_area').val(response.sprinkler_summer_othercrop_area);
                //$('#sprinkler_summer_othercrop_irri_area').val(response.sprinkler_summer_othercrop_irri_area);
                //$('#sprinkler_summer_othercrop_water_req').val(response.sprinkler_summer_othercrop_water_req);
                //$('#sprinkler_summer_othyercrop_waterdemand').text(response.sprinkler_summer_othyercrop_waterdemand);
                //$('#sprinkler_summer_othercrop_sprinkler_waterdemand').text(response.sprinkler_summer_othercrop_sprinkler_waterdemand);
                //$('#sprinkler_summer_othercrop_reduc_gw_demand').text(response.sprinkler_summer_othercrop_reduc_gw_demand);


            }

            else {

                addcropcount = 0;
                addcropcount1 = 1;
                addcropcount2 = 2;
                addcropcount3 = 3;
                addcropcount4 = 4;
                addcropcount5 = 5;

                add_Sprinkler_Rabicount = 0;
                add_Sprinkler_Rabicount1 = 1;
                add_Sprinkler_Rabicount2 = 2;
                add_Sprinkler_Rabicount3 = 3;
                add_Sprinkler_Rabicount4 = 4;
                add_Sprinkler_Rabicount5 = 5;

                add_Sprinkler_Summercount = 0;
                add_Sprinkler_Summercount1 = 1;
                add_Sprinkler_Summercount2 = 2;
                add_Sprinkler_Summercount3 = 3;
                add_Sprinkler_Summercount4 = 4;
                add_Sprinkler_Summercount5 = 5;
                //new columns water requirement
                $('#sprinkler_kharif_paddy_water_req').val(1175);
                $('#sprinkler_kharif_ragi_water_req').val(550);
                $('#sprinkler_kharif_groundnut_water_req').val(525);
                $('#sprinkler_kharif_sugarcane_water_req').val(2000);
                $('#sprinkler_kharif_tomoto_water_req').val(500);
                // $('#sprinkler_kharif_cabbage_water_req').val(425);
                // $('#sprinkler_kharif_beans_water_req').val(425);
                $('#sprinkler_kharif_floriculture_water_req').val(1200);
                $('#sprinkler_kharif_sericulture_water_req').val(1550);
                //$('#sprinkler_kharif_cucumber_water_req').val(400);
                $('#sprinkler_kharif_banana_water_req').val(1700);
                $('#sprinkler_kharif_fodder_water_req').val(1400);
                $('#sprinkler_kharif_maize_water_req').val(650);
                // $('#sprinkler_kharif_potato_water_req').val(600);
                $('#sprinkler_kharif_chillies_water_req').val(230);
                $('#sprinkler_kharif_cotton_water_req').val(1000);
                $('#sprinkler_kharif_melon_water_req').val(500);
                $('#sprinkler_kharif_citrus_water_req').val(1050);
                // $('#sprinkler_kharif_peanut_water_req').val(600);
                $('#sprinkler_kharif_horticulture_water_req').val(470);

                $('#sprinkler_rabi_sericulture_water_req').val(1550);
                $('#sprinkler_rabi_tomoto_water_req').val(500);
                // $('#sprinkler_rabi_cabbage_water_req').val(425);
                // $('#sprinkler_rabi_beans_water_req').val(400);
                $('#sprinkler_rabi_floriculture_water_req').val(1200);
                //$('#sprinkler_rabi_potato_water_req').val(600);
                // $('#sprinkler_rabi_cucumber_water_req').val(400);
                $('#sprinkler_rabi_ragi_water_req').val(550);
                $('#sprinkler_rabi_sugarcane_water_req').val(2000);
                $('#sprinkler_rabi_maize_water_req').val(650);
                $('#sprinkler_rabi_fodder_water_req').val(1400);

                $('#sprinkler_rabi_paddy_water_req').val(1175);
                $('#sprinkler_rabi_alfalfa_water_req').val(1200);
                // $('#sprinkler_rabi_onion_water_req').val(450);
                $('#sprinkler_rabi_horticulture_water_req').val(470);
                $('#sprinkler_rabi_sunflower_water_req').val(800);

                $('#sprinkler_summer_sericulture_water_req').val(1550);
                $('#sprinkler_summer_tomoto_water_req').val(500);
                // $('#sprinkler_summer_cabbage_water_req').val(425);
                //$('#sprinkler_summer_beans_water_req').val(400);
                $('#sprinkler_summer_floriculture_water_req').val(1200);
                $('#sprinkler_summer_maize_water_req').val(650);
                $('#sprinkler_summer_fodder_water_req').val(1400);
                $('#sprinkler_summer_sugarcane_water_req').val(2000);

                $('#sprinkler_summer_horticulture_water_req').val(470);


            }

            Kharif_WaterRequire();
            Rabi_WaterRequire();
            Crop_WaterRequire();

        }
    });
}


var sprinkler_kharif_paddy_waterdemand = 0;
var sprinkler_kharif_paddy_sprinkler_waterdemand = 0;
var sprinkler_kharif_paddy_reduction_gw_demand = 0;

var sprinkler_kharif_ragi_waterdemand = 0;
var sprinkler_kharif_ragi_sprinkler_waterdemand = 0;
var sprinkler_kharif_ragi_reduction_gw_demand = 0;

var sprinkler_kharif_groundnut_waterdemand = 0;
var sprinkler_kharif_groundnut_sprinkler_waterdemand = 0;
var sprinkler_kharif_groundnut_reduction_gw_demand = 0;

var sprinkler_kharif_sugarcane_waterdemand = 0;
var sprinkler_kharif_sugarcane_sprinkler_waterdemand = 0;
var sprinkler_kharif_sugarcane_reduction_gw_demand = 0;

var sprinkler_kharif_tomoto_waterdemand = 0;
var sprinkler_kharif_tomoto_sprinkler_waterdemand = 0;
var sprinkler_kharif_tomoto_reduction_gw_demand = 0;

//var sprinkler_kharif_cabbage_waterdemand = 0;
//var sprinkler_kharif_cabbage_sprinkler_waterdemand = 0;
//var sprinkler_kharif_cabbage_reduction_gw_demand = 0;

//var sprinkler_kharif_beans_waterdemand = 0;
//var sprinkler_kharif_beans_sprinkler_waterdemand = 0;
//var sprinkler_kharif_beans_reduction_gw_demand = 0;

var sprinkler_kharif_floriculture_waterdemand = 0;
var sprinkler_kharif_floriculture_sprinkler_waterdemand = 0;
var sprinkler_kharif_floriculture_reduction_gw_demand = 0;

var sprinkler_kharif_sericulture_waterdemand = 0;
var sprinkler_kharif_sericulture_sprinkler_waterdemand = 0;
var sprinkler_kharif_sericulture_reduction_gw_demand = 0;

//var sprinkler_kharif_cucumber_waterdemand = 0;
//var sprinkler_kharif_cucumber_sprinkler_waterdemand = 0;
//var sprinkler_kharif_cucumber_reduction_gw_demand = 0;

var sprinkler_kharif_banana_waterdemand = 0;
var sprinkler_kharif_banana_sprinkler_waterdemand = 0;
var sprinkler_kharif_banana_reduction_gw_demand = 0;

var sprinkler_kharif_fodder_waterdemand = 0;
var sprinkler_kharif_fodder_sprinkler_waterdemand = 0;
var sprinkler_kharif_fodder_reduction_gw_demand = 0;

var sprinkler_kharif_maize_waterdemand = 0;
var sprinkler_kharif_maize_sprinkler_waterdemand = 0;
var sprinkler_kharif_maize_reduction_gw_demand = 0;

//var sprinkler_kharif_potato_waterdemand = 0;
//var sprinkler_kharif_potato_sprinkler_waterdemand = 0;
//var sprinkler_kharif_potato_reduction_gw_demand = 0;

var sprinkler_kharif_chillies_waterdemand = 0;
var sprinkler_kharif_chillies_sprinkler_waterdemand = 0;
var sprinkler_kharif_chillies_reduction_gw_demand = 0;

var sprinkler_kharif_cotton_waterdemand = 0;
var sprinkler_kharif_cotton_sprinkler_waterdemand = 0;
var sprinkler_kharif_cotton_reduction_gw_demand = 0;

var sprinkler_kharif_melon_waterdemand = 0;
var sprinkler_kharif_melon_sprinkler_waterdemand = 0;
var sprinkler_kharif_melon_reduction_gw_demand = 0;

var sprinkler_kharif_citrus_waterdemand = 0;
var sprinkler_kharif_citrus_sprinkler_waterdemand = 0;
var sprinkler_kharif_citrus_reduction_gw_demand = 0;

//var sprinkler_kharif_peanut_waterdemand = 0;
//var sprinkler_kharif_peanut_sprinkler_waterdemand = 0;
//var sprinkler_kharif_peanut_reduction_gw_demand = 0;

var sprinkler_kharif_horticulture_waterdemand = 0;
var sprinkler_kharif_horticulture_sprinkler_waterdemand = 0;
var sprinkler_kharif_horticulture_reduction_gw_demand = 0;

//var sprinkler_kharif_othercrop_waterdemand = 0;
//var sprinkler_kharif_othyercrop_waterdemand = 0;
//var sprinkler_kharif_othercrop_reduc_gw_demand = 0;

var Total_Water_Demand_for_Kharif_Crops = 0;
var sprinkler_kharif_total_sprinkler_waterdemand = 0;
var sprinkler_kharif_total_reduction_waterdemand = 0;

//latest 
var sprinkler_kharif_othercrop_waterdemand1 = 0;
var sprinkler_kharif_othercrop_sprinkler_waterdemand1 = 0;
var sprinkler_kharif_othercrop_reduc_gw_demand1 = 0;

var sprinkler_kharif_othercrop_waterdemand2 = 0;
var sprinkler_kharif_othercrop_sprinkler_waterdemand2 = 0;
var sprinkler_kharif_othercrop_reduc_gw_demand2 = 0;

var sprinkler_kharif_othercrop_waterdemand3 = 0;
var sprinkler_kharif_othercrop_sprinkler_waterdemand3 = 0;
var sprinkler_kharif_othercrop_reduc_gw_demand3 = 0;

var sprinkler_kharif_othercrop_waterdemand4 = 0;
var sprinkler_kharif_othercrop_sprinkler_waterdemand4 = 0;
var sprinkler_kharif_othercrop_reduc_gw_demand4 = 0;

var sprinkler_kharif_othercrop_waterdemand5 = 0;
var sprinkler_kharif_othercrop_sprinkler_waterdemand5 = 0;
var sprinkler_kharif_othercrop_reduc_gw_demand5 = 0;

function Kharif_WaterRequire() {
    //Paddy

    Total_Water_Demand_for_Kharif_Crops = 0;
    sprinkler_kharif_total_sprinkler_waterdemand = 0;
    sprinkler_kharif_total_reduction_waterdemand = 0;
    sprinkler_kharif_paddy_waterdemand = 0;
    sprinkler_kharif_paddy_sprinkler_waterdemand = 0;
    sprinkler_kharif_paddy_reduction_gw_demand = 0;

    sprinkler_kharif_ragi_waterdemand = 0;
    sprinkler_kharif_ragi_sprinkler_waterdemand = 0;
    sprinkler_kharif_ragi_reduction_gw_demand = 0;

    sprinkler_kharif_groundnut_waterdemand = 0;
    sprinkler_kharif_groundnut_sprinkler_waterdemand = 0;
    sprinkler_kharif_groundnut_reduction_gw_demand = 0;

    sprinkler_kharif_sugarcane_waterdemand = 0;
    sprinkler_kharif_sugarcane_sprinkler_waterdemand = 0;
    sprinkler_kharif_sugarcane_reduction_gw_demand = 0;

    sprinkler_kharif_tomoto_waterdemand = 0;
    sprinkler_kharif_tomoto_sprinkler_waterdemand = 0;
    sprinkler_kharif_tomoto_reduction_gw_demand = 0;

    // sprinkler_kharif_cabbage_waterdemand = 0;
    // sprinkler_kharif_cabbage_sprinkler_waterdemand = 0;
    // sprinkler_kharif_cabbage_reduction_gw_demand = 0;

    // sprinkler_kharif_beans_waterdemand = 0;
    // sprinkler_kharif_beans_sprinkler_waterdemand = 0;
    // sprinkler_kharif_beans_reduction_gw_demand = 0;

    sprinkler_kharif_floriculture_waterdemand = 0;
    sprinkler_kharif_floriculture_sprinkler_waterdemand = 0;
    sprinkler_kharif_floriculture_reduction_gw_demand = 0;

    sprinkler_kharif_sericulture_waterdemand = 0;
    sprinkler_kharif_sericulture_sprinkler_waterdemand = 0;
    sprinkler_kharif_sericulture_reduction_gw_demand = 0;

    //sprinkler_kharif_cucumber_waterdemand = 0;
    //sprinkler_kharif_cucumber_sprinkler_waterdemand = 0;
    //sprinkler_kharif_cucumber_reduction_gw_demand = 0;

    sprinkler_kharif_banana_waterdemand = 0;
    sprinkler_kharif_banana_sprinkler_waterdemand = 0;
    sprinkler_kharif_banana_reduction_gw_demand = 0;

    sprinkler_kharif_fodder_waterdemand = 0;
    sprinkler_kharif_fodder_sprinkler_waterdemand = 0;
    sprinkler_kharif_fodder_reduction_gw_demand = 0;

    sprinkler_kharif_maize_waterdemand = 0;
    sprinkler_kharif_maize_sprinkler_waterdemand = 0;
    sprinkler_kharif_maize_reduction_gw_demand = 0;

    //sprinkler_kharif_potato_waterdemand = 0;
    //sprinkler_kharif_potato_sprinkler_waterdemand = 0;
    //sprinkler_kharif_potato_reduction_gw_demand = 0;

    sprinkler_kharif_chillies_waterdemand = 0;
    sprinkler_kharif_chillies_sprinkler_waterdemand = 0;
    sprinkler_kharif_chillies_reduction_gw_demand = 0;

    sprinkler_kharif_cotton_waterdemand = 0;
    sprinkler_kharif_cotton_sprinkler_waterdemand = 0;
    sprinkler_kharif_cotton_reduction_gw_demand = 0;

    sprinkler_kharif_melon_waterdemand = 0;
    sprinkler_kharif_melon_sprinkler_waterdemand = 0;
    sprinkler_kharif_melon_reduction_gw_demand = 0;

    sprinkler_kharif_citrus_waterdemand = 0;
    sprinkler_kharif_citrus_sprinkler_waterdemand = 0;
    sprinkler_kharif_citrus_reduction_gw_demand = 0;

    //sprinkler_kharif_peanut_waterdemand = 0;
    //sprinkler_kharif_peanut_sprinkler_waterdemand = 0;
    //sprinkler_kharif_peanut_reduction_gw_demand = 0;

    sprinkler_kharif_horticulture_waterdemand = 0;
    sprinkler_kharif_horticulture_sprinkler_waterdemand = 0;
    sprinkler_kharif_horticulture_reduction_gw_demand = 0;

    //sprinkler_kharif_othercrop_waterdemand = 0;
    //sprinkler_kharif_othyercrop_waterdemand = 0;
    //sprinkler_kharif_othercrop_reduc_gw_demand = 0;
    //Paddy


    //Latest Code

    sprinkler_kharif_othercrop_waterdemand1 = 0;
    sprinkler_kharif_othercrop_sprinkler_waterdemand1 = 0;
    sprinkler_kharif_othercrop_reduc_gw_demand1 = 0;

    sprinkler_kharif_othercrop_waterdemand2 = 0;
    sprinkler_kharif_othercrop_sprinkler_waterdemand2 = 0;
    sprinkler_kharif_othercrop_reduc_gw_demand2 = 0;

    sprinkler_kharif_othercrop_waterdemand3 = 0;
    sprinkler_kharif_othercrop_sprinkler_waterdemand3 = 0;
    sprinkler_kharif_othercrop_reduc_gw_demand3 = 0;

    sprinkler_kharif_othercrop_waterdemand4 = 0;
    sprinkler_kharif_othercrop_sprinkler_waterdemand4 = 0;
    sprinkler_kharif_othercrop_reduc_gw_demand4 = 0;

    sprinkler_kharif_othercrop_waterdemand5 = 0;
    sprinkler_kharif_othercrop_sprinkler_waterdemand5 = 0;
    sprinkler_kharif_othercrop_reduc_gw_demand5 = 0;


    var sprinkler_kharif_othercrop_area1 = $('#sprinkler_kharif_othercrop_area1').val();
    if (typeof sprinkler_kharif_othercrop_area1 == 'undefined') {
        sprinkler_kharif_othercrop_area1 = 0;
    }
    var sprinkler_kharif_othercrop_irri_area1 = $('#sprinkler_kharif_othercrop_irri_area1').val();
    if (typeof sprinkler_kharif_othercrop_irri_area1 == 'undefined') {
        sprinkler_kharif_othercrop_irri_area1 = 0;
    }
    var sprinkler_kharif_othercrop_water_req1 = $('#sprinkler_kharif_othercrop_water_req1').val();
    if (typeof sprinkler_kharif_othercrop_water_req1 == 'undefined') {
        sprinkler_kharif_othercrop_water_req1 = 0;
    }
    
    if (sprinkler_kharif_othercrop_area1 != "") {

        if (sprinkler_kharif_othercrop_water_req1 != "") {
            sprinkler_kharif_othercrop_waterdemand1 = parseFloat(sprinkler_kharif_othercrop_area1) * parseFloat(sprinkler_kharif_othercrop_water_req1) * 0.001;
        } else {
            sprinkler_kharif_othercrop_waterdemand1 = parseFloat(sprinkler_kharif_othercrop_area1) * 0 * 0.001;
            sprinkler_kharif_othercrop_water_req1 = 0;
        }


        if (sprinkler_kharif_othercrop_irri_area1 == "") {
            sprinkler_kharif_othercrop_irri_area1 = 0;
        }
        sprinkler_kharif_othercrop_sprinkler_waterdemand1 = ((parseFloat(sprinkler_kharif_othercrop_area1) - parseFloat(sprinkler_kharif_othercrop_irri_area1)) * parseFloat(sprinkler_kharif_othercrop_water_req1) * 0.001) + (parseFloat(sprinkler_kharif_othercrop_irri_area1) * parseFloat(sprinkler_kharif_othercrop_water_req1) * (1 - 30 / 100) * 0.001);

        // sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_kharif_othercrop_reduc_gw_demand1 = sprinkler_kharif_othercrop_waterdemand1 - sprinkler_kharif_othercrop_sprinkler_waterdemand1;
        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_othercrop_waterdemand1 + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_othercrop_sprinkler_waterdemand1;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_othercrop_reduc_gw_demand1;
        //Kharif_Paddy_SavingValue

    }




    

    var sprinkler_kharif_othercrop_area2 = $('#sprinkler_kharif_othercrop_area2').val();
    if (typeof sprinkler_kharif_othercrop_area2 == 'undefined') {
        sprinkler_kharif_othercrop_area2 = 0;
    }
    var sprinkler_kharif_othercrop_irri_area2 = $('#sprinkler_kharif_othercrop_irri_area2').val();
    if (typeof sprinkler_kharif_othercrop_irri_area2 == 'undefined') {
        sprinkler_kharif_othercrop_irri_area2 = 0;
    }
    var sprinkler_kharif_othercrop_water_req2 = $('#sprinkler_kharif_othercrop_water_req2').val();
    if (typeof sprinkler_kharif_othercrop_water_req2 == 'undefined') {
        sprinkler_kharif_othercrop_water_req2 = 0;
    }

    if (sprinkler_kharif_othercrop_area2 != "") {

        if (sprinkler_kharif_othercrop_water_req2 != "") {
            sprinkler_kharif_othercrop_waterdemand2 = parseFloat(sprinkler_kharif_othercrop_area2) * parseFloat(sprinkler_kharif_othercrop_water_req2) * 0.001;
        } else {
            sprinkler_kharif_othercrop_waterdemand2 = parseFloat(sprinkler_kharif_othercrop_area2) * 0 * 0.001;
            sprinkler_kharif_othercrop_water_req2 = 0;
        }
        if (sprinkler_kharif_othercrop_irri_area2 == "") {
            sprinkler_kharif_othercrop_irri_area2 = 0;
        }
        sprinkler_kharif_othercrop_sprinkler_waterdemand2 = ((parseFloat(sprinkler_kharif_othercrop_area2) - parseFloat(sprinkler_kharif_othercrop_irri_area2)) * parseFloat(sprinkler_kharif_othercrop_water_req2) * 0.001) + (parseFloat(sprinkler_kharif_othercrop_irri_area2) * parseFloat(sprinkler_kharif_othercrop_water_req2) * (1 - 30 / 100) * 0.001);

        // sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_kharif_othercrop_reduc_gw_demand2 = sprinkler_kharif_othercrop_waterdemand2 - sprinkler_kharif_othercrop_sprinkler_waterdemand2;
        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_othercrop_waterdemand2 + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_othercrop_sprinkler_waterdemand2;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_othercrop_reduc_gw_demand2;
        //Kharif_Paddy_SavingValue

    }



    var sprinkler_kharif_othercrop_area3 = $('#sprinkler_kharif_othercrop_area3').val();
    if (typeof sprinkler_kharif_othercrop_area3 == 'undefined') {
        sprinkler_kharif_othercrop_area3 = 0;
    }
    var sprinkler_kharif_othercrop_irri_area3 = $('#sprinkler_kharif_othercrop_irri_area3').val();
    if (typeof sprinkler_kharif_othercrop_irri_area3 == 'undefined') {
        sprinkler_kharif_othercrop_irri_area3 = 0;
    }
    var sprinkler_kharif_othercrop_water_req3 = $('#sprinkler_kharif_othercrop_water_req3').val();
    if (typeof sprinkler_kharif_othercrop_water_req3 == 'undefined') {
        sprinkler_kharif_othercrop_water_req3 = 0;
    }
    if (sprinkler_kharif_othercrop_area3 != "") {

        if (sprinkler_kharif_othercrop_water_req3 != "") {
            sprinkler_kharif_othercrop_waterdemand3 = parseFloat(sprinkler_kharif_othercrop_area3) * parseFloat(sprinkler_kharif_othercrop_water_req3) * 0.001;
        } else {
            sprinkler_kharif_othercrop_waterdemand3 = parseFloat(sprinkler_kharif_othercrop_area3) * 0 * 0.001;
            sprinkler_kharif_othercrop_water_req3 = 0;
        }
        if (sprinkler_kharif_othercrop_irri_area3 == "") {
            sprinkler_kharif_othercrop_irri_area3 = 0;
        }
        sprinkler_kharif_othercrop_sprinkler_waterdemand3 = ((parseFloat(sprinkler_kharif_othercrop_area3) - parseFloat(sprinkler_kharif_othercrop_irri_area3)) * parseFloat(sprinkler_kharif_othercrop_water_req3) * 0.001) + (parseFloat(sprinkler_kharif_othercrop_irri_area3) * parseFloat(sprinkler_kharif_othercrop_water_req3) * (1 - 30 / 100) * 0.001);

        // sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_kharif_othercrop_reduc_gw_demand3 = sprinkler_kharif_othercrop_waterdemand3 - sprinkler_kharif_othercrop_sprinkler_waterdemand3;
        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_othercrop_waterdemand3 + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_othercrop_sprinkler_waterdemand3;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_othercrop_reduc_gw_demand3;
        //Kharif_Paddy_SavingValue

    }

    var sprinkler_kharif_othercrop_area4 = $('#sprinkler_kharif_othercrop_area4').val();
    if (typeof sprinkler_kharif_othercrop_area4 == 'undefined') {
        sprinkler_kharif_othercrop_area4 = 0;
    }
    var sprinkler_kharif_othercrop_irri_area4 = $('#sprinkler_kharif_othercrop_irri_area4').val();
    if (typeof sprinkler_kharif_othercrop_irri_area4 == 'undefined') {
        sprinkler_kharif_othercrop_irri_area4 = 0;
    }
    var sprinkler_kharif_othercrop_water_req4 = $('#sprinkler_kharif_othercrop_water_req4').val();
    if (typeof sprinkler_kharif_othercrop_water_req4 == 'undefined') {
        sprinkler_kharif_othercrop_water_req4 = 0;
    }
    if (sprinkler_kharif_othercrop_area4 != "") {

        if (sprinkler_kharif_othercrop_water_req4 != "") {
            sprinkler_kharif_othercrop_waterdemand4 = parseFloat(sprinkler_kharif_othercrop_area4) * parseFloat(sprinkler_kharif_othercrop_water_req4) * 0.001;
        } else {
            sprinkler_kharif_othercrop_waterdemand4 = parseFloat(sprinkler_kharif_othercrop_area4) * 0 * 0.001;
            sprinkler_kharif_othercrop_water_req4 = 0;
        }
        if (sprinkler_kharif_othercrop_irri_area4 == "") {
            sprinkler_kharif_othercrop_irri_area4 = 0;
        }
        sprinkler_kharif_othercrop_sprinkler_waterdemand4 = ((parseFloat(sprinkler_kharif_othercrop_area4) - parseFloat(sprinkler_kharif_othercrop_irri_area4)) * parseFloat(sprinkler_kharif_othercrop_water_req4) * 0.001) + (parseFloat(sprinkler_kharif_othercrop_irri_area4) * parseFloat(sprinkler_kharif_othercrop_water_req4) * (1 - 40 / 100) * 0.001);

        // sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 40 / 100) * 0.001);
        sprinkler_kharif_othercrop_reduc_gw_demand4 = sprinkler_kharif_othercrop_waterdemand4 - sprinkler_kharif_othercrop_sprinkler_waterdemand4;
        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_othercrop_waterdemand4 + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_othercrop_sprinkler_waterdemand4;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_othercrop_reduc_gw_demand4;
        //Kharif_Paddy_SavingValue

    }

    var sprinkler_kharif_othercrop_area5 = $('#sprinkler_kharif_othercrop_area5').val();
    if (typeof sprinkler_kharif_othercrop_area5 == 'undefined') {
        sprinkler_kharif_othercrop_area5 = 0;
    }
    var sprinkler_kharif_othercrop_irri_area5 = $('#sprinkler_kharif_othercrop_irri_area5').val();
    if (typeof sprinkler_kharif_othercrop_irri_area5 == 'undefined') {
        sprinkler_kharif_othercrop_irri_area5 = 0;
    }
    var sprinkler_kharif_othercrop_water_req5 = $('#sprinkler_kharif_othercrop_water_req5').val();
    if (typeof sprinkler_kharif_othercrop_water_req5 == 'undefined') {
        sprinkler_kharif_othercrop_water_req5 = 0;
    }
    if (sprinkler_kharif_othercrop_area5 != "") {

        if (sprinkler_kharif_othercrop_water_req5 != "") {
            sprinkler_kharif_othercrop_waterdemand5 = parseFloat(sprinkler_kharif_othercrop_area5) * parseFloat(sprinkler_kharif_othercrop_water_req5) * 0.001;
        } else {
            sprinkler_kharif_othercrop_waterdemand5 = parseFloat(sprinkler_kharif_othercrop_area5) * 0 * 0.001;
            sprinkler_kharif_othercrop_water_req5 = 0;
        }
        if (sprinkler_kharif_othercrop_irri_area5 == "") {
            sprinkler_kharif_othercrop_irri_area5 = 0;
        }
        sprinkler_kharif_othercrop_sprinkler_waterdemand5 = ((parseFloat(sprinkler_kharif_othercrop_area5) - parseFloat(sprinkler_kharif_othercrop_irri_area5)) * parseFloat(sprinkler_kharif_othercrop_water_req5) * 0.001) + (parseFloat(sprinkler_kharif_othercrop_irri_area5) * parseFloat(sprinkler_kharif_othercrop_water_req5) * (1 - 50 / 100) * 0.001);

        // sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 50 / 100) * 0.001);
        sprinkler_kharif_othercrop_reduc_gw_demand5 = sprinkler_kharif_othercrop_waterdemand5 - sprinkler_kharif_othercrop_sprinkler_waterdemand5;
        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_othercrop_waterdemand5 + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_othercrop_sprinkler_waterdemand5;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_othercrop_reduc_gw_demand5;
        //Kharif_Paddy_SavingValue

    }


    //Kharif

    var Kharif_Paddy_UserValue = $('#Paddy_Kharif_Value').val();
    if (typeof Kharif_Paddy_UserValue == 'undefined') {
        Kharif_Paddy_UserValue = 0;
    }
    var sprinkler_kharif_paddy_irri_area = $('#sprinkler_kharif_paddy_irri_area').val();
    if (typeof sprinkler_kharif_paddy_irri_area == 'undefined') {
        sprinkler_kharif_paddy_irri_area = 0;
    }
    var sprinkler_kharif_paddy_water_req = $('#sprinkler_kharif_paddy_water_req').val();
    if (typeof sprinkler_kharif_paddy_water_req == 'undefined') {
        sprinkler_kharif_paddy_water_req = 0;
    }
    if (Kharif_Paddy_UserValue != "") {

        if (sprinkler_kharif_paddy_water_req != "") {
            sprinkler_kharif_paddy_waterdemand = parseFloat(Kharif_Paddy_UserValue) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001;
        } else {
            sprinkler_kharif_paddy_waterdemand = parseFloat(Kharif_Paddy_UserValue) * 0 * 0.001;
            sprinkler_kharif_paddy_water_req = 0;
        }


        if (sprinkler_kharif_paddy_irri_area == "") {
            sprinkler_kharif_paddy_irri_area = 0;
        }
        sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 30 / 100) * 0.001);

        // sprinkler_kharif_paddy_sprinkler_waterdemand = ((parseFloat(Kharif_Paddy_UserValue) - parseFloat(sprinkler_kharif_paddy_irri_area)) * parseFloat(sprinkler_kharif_paddy_water_req) * 0.001) + (parseFloat(sprinkler_kharif_paddy_irri_area) * parseFloat(sprinkler_kharif_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_kharif_paddy_reduction_gw_demand = sprinkler_kharif_paddy_waterdemand - sprinkler_kharif_paddy_sprinkler_waterdemand;
        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_paddy_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_paddy_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_paddy_reduction_gw_demand;
        //Kharif_Paddy_SavingValue

    }
    //Ragi



    var Ragi_Kharif_Value = $('#Ragi_Kharif_Value').val();
    var sprinkler_kharif_ragi_irri_area = $('#sprinkler_kharif_ragi_irri_area').val();
    var sprinkler_kharif_ragi_water_req = $('#sprinkler_kharif_ragi_water_req').val();

    if (Ragi_Kharif_Value != "") {

        if (sprinkler_kharif_ragi_water_req != "") {
            sprinkler_kharif_ragi_waterdemand = parseFloat(Ragi_Kharif_Value) * parseFloat(sprinkler_kharif_ragi_water_req) * 0.001;
        } else {
            sprinkler_kharif_ragi_waterdemand = parseFloat(Ragi_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_ragi_water_req = 0;
        }




        if (sprinkler_kharif_ragi_irri_area == "") {
            sprinkler_kharif_ragi_irri_area = 0;
        }

        sprinkler_kharif_ragi_sprinkler_waterdemand = ((parseFloat(Ragi_Kharif_Value) - parseFloat(sprinkler_kharif_ragi_irri_area)) * parseFloat(sprinkler_kharif_ragi_water_req) * 0.001) + (parseFloat(sprinkler_kharif_ragi_irri_area) * parseFloat(sprinkler_kharif_ragi_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_kharif_ragi_reduction_gw_demand = sprinkler_kharif_ragi_waterdemand - sprinkler_kharif_ragi_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_ragi_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_ragi_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_ragi_reduction_gw_demand;

    }


    //GroundNut


    var GroundNut_Kharif_Value = $('#GroundNut_Kharif_Value').val();
    var sprinkler_kharif_groundnut_irri_area = $('#sprinkler_kharif_groundnut_irri_area').val();
    var sprinkler_kharif_groundnut_water_req = $('#sprinkler_kharif_groundnut_water_req').val();
    if (GroundNut_Kharif_Value != "") {

        if (sprinkler_kharif_groundnut_water_req != "") {
            sprinkler_kharif_groundnut_waterdemand = parseFloat(GroundNut_Kharif_Value) * parseFloat(sprinkler_kharif_groundnut_water_req) * 0.001;
        } else {
            sprinkler_kharif_groundnut_waterdemand = parseFloat(GroundNut_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_groundnut_water_req = 0;
        }




        if (sprinkler_kharif_groundnut_irri_area == "") {
            sprinkler_kharif_groundnut_irri_area = 0;
        }

        sprinkler_kharif_groundnut_sprinkler_waterdemand = ((parseFloat(GroundNut_Kharif_Value) - parseFloat(sprinkler_kharif_groundnut_irri_area)) * parseFloat(sprinkler_kharif_groundnut_water_req) * 0.001) + (parseFloat(sprinkler_kharif_groundnut_irri_area) * parseFloat(sprinkler_kharif_groundnut_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_kharif_groundnut_reduction_gw_demand = sprinkler_kharif_groundnut_waterdemand - sprinkler_kharif_groundnut_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_groundnut_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_groundnut_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_groundnut_reduction_gw_demand;

    }


    //Sugarcane


    var Sugarcane_Kharif_Value = $('#Sugarcane_Kharif_Value').val();
    var sprinkler_kharif_sugarcane_irri_area = $('#sprinkler_kharif_sugarcane_irri_area').val();
    var sprinkler_kharif_sugarcane_water_req = $('#sprinkler_kharif_sugarcane_water_req').val();
    if (Sugarcane_Kharif_Value != "") {

        if (sprinkler_kharif_sugarcane_water_req != "") {
            sprinkler_kharif_sugarcane_waterdemand = parseFloat(Sugarcane_Kharif_Value) * parseFloat(sprinkler_kharif_sugarcane_water_req) * 0.001;
        } else {
            sprinkler_kharif_sugarcane_waterdemand = parseFloat(Sugarcane_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_sugarcane_water_req = 0;
        };

        if (sprinkler_kharif_sugarcane_irri_area == "") {
            sprinkler_kharif_sugarcane_irri_area = 0;
        }
        sprinkler_kharif_sugarcane_sprinkler_waterdemand = ((parseFloat(Sugarcane_Kharif_Value) - parseFloat(sprinkler_kharif_sugarcane_irri_area)) * parseFloat(sprinkler_kharif_sugarcane_water_req) * 0.001) + (parseFloat(sprinkler_kharif_sugarcane_irri_area) * parseFloat(sprinkler_kharif_sugarcane_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_kharif_sugarcane_reduction_gw_demand = sprinkler_kharif_sugarcane_waterdemand - sprinkler_kharif_sugarcane_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_sugarcane_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_sugarcane_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_sugarcane_reduction_gw_demand;

    }


    //Tomato

    var Tomato_Kharif_Value = $('#Tomato_Kharif_Value').val();
    var sprinkler_kharif_tomoto_irri_area = $('#sprinkler_kharif_tomoto_irri_area').val();
    var sprinkler_kharif_tomoto_water_req = $('#sprinkler_kharif_tomoto_water_req').val();
    if (Tomato_Kharif_Value != "") {

        if (sprinkler_kharif_tomoto_water_req != "") {
            sprinkler_kharif_tomoto_waterdemand = parseFloat(Tomato_Kharif_Value) * parseFloat(sprinkler_kharif_tomoto_water_req) * 0.001;
        } else {
            sprinkler_kharif_tomoto_waterdemand = parseFloat(Tomato_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_tomoto_water_req = 0;
        };

        if (sprinkler_kharif_tomoto_irri_area == "") {
            sprinkler_kharif_tomoto_irri_area = 0;
        }
        sprinkler_kharif_tomoto_sprinkler_waterdemand = ((parseFloat(Tomato_Kharif_Value) - parseFloat(sprinkler_kharif_tomoto_irri_area)) * parseFloat(sprinkler_kharif_tomoto_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_tomoto_irri_area) * parseFloat(sprinkler_kharif_tomoto_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_kharif_tomoto_reduction_gw_demand = sprinkler_kharif_tomoto_waterdemand - sprinkler_kharif_tomoto_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_tomoto_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_tomoto_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_tomoto_reduction_gw_demand;

    }



    //Cabbage

    //var Cabbage_Kharif_Value = $('#Cabbage_Kharif_Value').val();
    //var sprinkler_kharif_cabbage_irri_area = $('#sprinkler_kharif_cabbage_irri_area').val();
    //var sprinkler_kharif_cabbage_water_req = $('#sprinkler_kharif_cabbage_water_req').val();
    //if (Cabbage_Kharif_Value != "") {

    //    if (sprinkler_kharif_cabbage_water_req != "") {
    //        sprinkler_kharif_cabbage_waterdemand = parseFloat(Cabbage_Kharif_Value) * parseFloat(sprinkler_kharif_cabbage_water_req) * 0.001;
    //    } else {
    //        sprinkler_kharif_cabbage_waterdemand = parseFloat(Cabbage_Kharif_Value) * 0 * 0.001;
    //        sprinkler_kharif_cabbage_water_req = 0;
    //    };

    //    if (sprinkler_kharif_cabbage_irri_area == "") {
    //        sprinkler_kharif_cabbage_irri_area = 0;
    //    }
    //    sprinkler_kharif_cabbage_sprinkler_waterdemand = ((parseFloat(Cabbage_Kharif_Value) - parseFloat(sprinkler_kharif_cabbage_irri_area)) * parseFloat(sprinkler_kharif_cabbage_water_req) * 0.001) + (parseFloat(sprinkler_kharif_cabbage_irri_area) * parseFloat(sprinkler_kharif_cabbage_water_req) * (1 - 30 / 100) * 0.001);

    //    sprinkler_kharif_cabbage_reduction_gw_demand = parseFloat(sprinkler_kharif_cabbage_waterdemand).toFixed(2) - parseFloat(sprinkler_kharif_cabbage_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Kharif_Crops = parseFloat(sprinkler_kharif_cabbage_waterdemand) + parseFloat(Total_Water_Demand_for_Kharif_Crops);
    //    sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand) + parseFloat(sprinkler_kharif_cabbage_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand) + parseFloat(sprinkler_kharif_cabbage_reduction_gw_demand);

    //}




    //Beans

    //var Beans_Kharif_Value = $('#Beans_Kharif_Value').val();
    //var sprinkler_kharif_beans_irri_area = $('#sprinkler_kharif_beans_irri_area').val();
    //var sprinkler_kharif_beans_water_req = $('#sprinkler_kharif_beans_water_req').val();
    //if (Beans_Kharif_Value != "") {
    //    if (sprinkler_kharif_beans_water_req != "") {
    //        sprinkler_kharif_beans_waterdemand = parseFloat(Beans_Kharif_Value) * parseFloat(sprinkler_kharif_beans_water_req) * 0.001;
    //    } else {
    //        sprinkler_kharif_beans_waterdemand = parseFloat(Beans_Kharif_Value) * 0 * 0.001;
    //        sprinkler_kharif_beans_water_req = 0;
    //    };

    //    if (sprinkler_kharif_beans_irri_area == "") {
    //        sprinkler_kharif_beans_irri_area = 0;
    //    }
    //    sprinkler_kharif_beans_sprinkler_waterdemand = ((parseFloat(Beans_Kharif_Value) - parseFloat(sprinkler_kharif_beans_irri_area)) * parseFloat(sprinkler_kharif_beans_water_req) * 0.001) + (parseFloat(sprinkler_kharif_beans_irri_area) * parseFloat(sprinkler_kharif_beans_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_kharif_beans_reduction_gw_demand = parseFloat(sprinkler_kharif_beans_waterdemand).toFixed(2) - parseFloat(sprinkler_kharif_beans_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Kharif_Crops = parseFloat(sprinkler_kharif_beans_waterdemand) + parseFloat(Total_Water_Demand_for_Kharif_Crops);
    //    sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand) + parseFloat(sprinkler_kharif_beans_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand) + parseFloat(sprinkler_kharif_beans_reduction_gw_demand);

    //}


    //Floriculture

    var Floriculture_Kharif_Value = $('#Floriculture_Kharif_Value').val();
    var sprinkler_kharif_floriculture_irri_area = $('#sprinkler_kharif_floriculture_irri_area').val();
    var sprinkler_kharif_floriculture_water_req = $('#sprinkler_kharif_floriculture_water_req').val();
    if (Floriculture_Kharif_Value != "") {

        if (sprinkler_kharif_floriculture_water_req != "") {
            sprinkler_kharif_floriculture_waterdemand = parseFloat(Floriculture_Kharif_Value) * parseFloat(sprinkler_kharif_floriculture_water_req) * 0.001;
        } else {
            sprinkler_kharif_floriculture_waterdemand = parseFloat(Floriculture_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_floriculture_water_req = 0;
        };

        if (sprinkler_kharif_floriculture_irri_area == "") {
            sprinkler_kharif_floriculture_irri_area = 0;
        }

        sprinkler_kharif_floriculture_sprinkler_waterdemand = ((parseFloat(Floriculture_Kharif_Value) - parseFloat(sprinkler_kharif_floriculture_irri_area)) * parseFloat(sprinkler_kharif_floriculture_water_req) * 0.001) + (parseFloat(sprinkler_kharif_floriculture_irri_area) * parseFloat(sprinkler_kharif_floriculture_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_kharif_floriculture_reduction_gw_demand = sprinkler_kharif_floriculture_waterdemand - sprinkler_kharif_floriculture_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_floriculture_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_floriculture_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_floriculture_reduction_gw_demand;

    }




    //Sericulture

    var Sericulture_Kharif_Value = $('#Sericulture_Kharif_Value').val();
    var sprinkler_kharif_sericulture_irri_area = $('#sprinkler_kharif_sericulture_irri_area').val();
    var sprinkler_kharif_sericulture_water_req = $('#sprinkler_kharif_sericulture_water_req').val();
    if (Sericulture_Kharif_Value != "") {

        if (sprinkler_kharif_sericulture_water_req != "") {
            sprinkler_kharif_sericulture_waterdemand = parseFloat(Sericulture_Kharif_Value) * parseFloat(sprinkler_kharif_sericulture_water_req) * 0.001;
        } else {
            sprinkler_kharif_sericulture_waterdemand = parseFloat(Sericulture_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_sericulture_water_req
        };

        if (sprinkler_kharif_sericulture_irri_area == "") {
            sprinkler_kharif_sericulture_irri_area = 0;
        }

        sprinkler_kharif_sericulture_sprinkler_waterdemand = ((parseFloat(Sericulture_Kharif_Value) - parseFloat(sprinkler_kharif_sericulture_irri_area)) * parseFloat(sprinkler_kharif_sericulture_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_sericulture_irri_area) * parseFloat(sprinkler_kharif_sericulture_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_kharif_sericulture_reduction_gw_demand = sprinkler_kharif_sericulture_waterdemand - sprinkler_kharif_sericulture_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_sericulture_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_sericulture_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_sericulture_reduction_gw_demand;

    }


    // Cucmber

    //var Cucmber_Kharif_Value = $('#Cucmber_Kharif_Value').val();
    //var sprinkler_kharif_cucumber_irri_area = $('#sprinkler_kharif_cucumber_irri_area').val();
    //var sprinkler_kharif_cucumber_water_req = $('#sprinkler_kharif_cucumber_water_req').val();
    //if (Cucmber_Kharif_Value != "") {

    //    if (sprinkler_kharif_cucumber_water_req != "") {
    //        sprinkler_kharif_cucumber_waterdemand = parseFloat(Cucmber_Kharif_Value) * parseFloat(sprinkler_kharif_cucumber_water_req) * 0.001;
    //    } else {
    //        sprinkler_kharif_cucumber_waterdemand = parseFloat(Cucmber_Kharif_Value) * 0 * 0.001;
    //        sprinkler_kharif_cucumber_water_req = 0;
    //    };

    //    if (sprinkler_kharif_cucumber_irri_area == "") {
    //        sprinkler_kharif_cucumber_irri_area = 0;
    //    }

    //    sprinkler_kharif_cucumber_sprinkler_waterdemand = ((parseFloat(Cucmber_Kharif_Value) - parseFloat(sprinkler_kharif_cucumber_irri_area)) * parseFloat(sprinkler_kharif_cucumber_water_req) * 0.001)
    //        + (parseFloat(sprinkler_kharif_cucumber_irri_area) * parseFloat(sprinkler_kharif_cucumber_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_kharif_cucumber_reduction_gw_demand = parseFloat(sprinkler_kharif_cucumber_waterdemand).toFixed(2) - parseFloat(sprinkler_kharif_cucumber_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Kharif_Crops = parseFloat(sprinkler_kharif_cucumber_waterdemand) + parseFloat(Total_Water_Demand_for_Kharif_Crops);
    //    sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand) + parseFloat(sprinkler_kharif_cucumber_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand) + parseFloat(sprinkler_kharif_cucumber_reduction_gw_demand);

    //}

    //Banana

    var Banana_Kharif_Value = $('#Banana_Kharif_Value').val();
    var sprinkler_kharif_banana_irri_area = $('#sprinkler_kharif_banana_irri_area').val();
    var sprinkler_kharif_banana_water_req = $('#sprinkler_kharif_banana_water_req').val();
    if (Banana_Kharif_Value != "") {

        if (sprinkler_kharif_banana_water_req != "") {
            sprinkler_kharif_banana_waterdemand = parseFloat(Banana_Kharif_Value) * parseFloat(sprinkler_kharif_banana_water_req) * 0.001;
        } else {
            sprinkler_kharif_banana_waterdemand = parseFloat(Banana_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_banana_water_req = 0;
        };

        if (sprinkler_kharif_banana_irri_area == "") {
            sprinkler_kharif_banana_irri_area = 0;
        }

        sprinkler_kharif_banana_sprinkler_waterdemand = ((parseFloat(Banana_Kharif_Value) - parseFloat(sprinkler_kharif_banana_irri_area)) * parseFloat(sprinkler_kharif_banana_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_banana_irri_area) * parseFloat(sprinkler_kharif_banana_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_kharif_banana_sprinkler_waterdemand = parseFloat(sprinkler_kharif_banana_irri_area) * parseFloat(sprinkler_kharif_banana_water_req) * 0.03 * 0.001;
        sprinkler_kharif_banana_reduction_gw_demand = sprinkler_kharif_banana_waterdemand - sprinkler_kharif_banana_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_banana_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_banana_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_banana_reduction_gw_demand;

    }

    //Fodder

    var Fodder_Kharif_Value = $('#Fodder_Kharif_Value').val();
    var sprinkler_kharif_fodder_irri_area = $('#sprinkler_kharif_fodder_irri_area').val();
    var sprinkler_kharif_fodder_water_req = $('#sprinkler_kharif_fodder_water_req').val();
    if (Fodder_Kharif_Value != "") {
        if (sprinkler_kharif_fodder_water_req != "") {
            sprinkler_kharif_fodder_waterdemand = parseFloat(Fodder_Kharif_Value) * parseFloat(sprinkler_kharif_fodder_water_req) * 0.001;
        } else {
            sprinkler_kharif_fodder_waterdemand = parseFloat(Fodder_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_fodder_water_req = 0;
        };

        if (sprinkler_kharif_fodder_irri_area == "") {
            sprinkler_kharif_fodder_irri_area = 0;
        }

        sprinkler_kharif_fodder_sprinkler_waterdemand = ((parseFloat(Fodder_Kharif_Value) - parseFloat(sprinkler_kharif_fodder_irri_area)) * parseFloat(sprinkler_kharif_fodder_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_fodder_irri_area) * parseFloat(sprinkler_kharif_fodder_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_kharif_fodder_reduction_gw_demand = sprinkler_kharif_fodder_waterdemand - sprinkler_kharif_fodder_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_fodder_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_fodder_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_fodder_reduction_gw_demand;

    }


    //Maize

    var Maize_Kharif_Value = $('#Maize_Kharif_Value').val();
    var sprinkler_kharif_maize_irri_area = $('#sprinkler_kharif_maize_irri_area').val();
    var sprinkler_kharif_maize_water_req = $('#sprinkler_kharif_maize_water_req').val();
    if (Maize_Kharif_Value != "") {
        if (sprinkler_kharif_maize_water_req != "") {
            sprinkler_kharif_maize_waterdemand = parseFloat(Maize_Kharif_Value) * parseFloat(sprinkler_kharif_maize_water_req) * 0.001;
        } else {
            sprinkler_kharif_maize_waterdemand = parseFloat(Maize_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_maize_water_req = 0;
        };

        if (sprinkler_kharif_maize_irri_area == "") {
            sprinkler_kharif_maize_irri_area = 0;
        }

        sprinkler_kharif_maize_sprinkler_waterdemand = ((parseFloat(Maize_Kharif_Value) - parseFloat(sprinkler_kharif_maize_irri_area)) * parseFloat(sprinkler_kharif_maize_water_req) * 0.001) + parseFloat(sprinkler_kharif_maize_irri_area) * parseFloat(sprinkler_kharif_maize_water_req) * (1 - 30 / 100) * 0.001;

        sprinkler_kharif_maize_reduction_gw_demand = sprinkler_kharif_maize_waterdemand - sprinkler_kharif_maize_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_maize_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_maize_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_maize_reduction_gw_demand;

    }

    //Potato

    //var Potato_Kharif_Value = $('#Potato_Kharif_Value').val();
    //var sprinkler_kharif_potato_irri_area = $('#sprinkler_kharif_potato_irri_area').val();
    //var sprinkler_kharif_potato_water_req = $('#sprinkler_kharif_potato_water_req').val();
    //if (Potato_Kharif_Value != "") {

    //    if (sprinkler_kharif_potato_water_req != "") {
    //        sprinkler_kharif_potato_waterdemand = parseFloat(Potato_Kharif_Value) * parseFloat(sprinkler_kharif_potato_water_req) * 0.001;
    //    } else {
    //        sprinkler_kharif_potato_waterdemand = parseFloat(Potato_Kharif_Value) * 0 * 0.001;
    //        sprinkler_kharif_potato_water_req = 0;
    //    };

    //    if (sprinkler_kharif_potato_irri_area == "") {
    //        sprinkler_kharif_potato_irri_area = 0;
    //    }

    //    sprinkler_kharif_potato_sprinkler_waterdemand = ((parseFloat(Potato_Kharif_Value) - parseFloat(sprinkler_kharif_potato_irri_area)) * parseFloat(sprinkler_kharif_potato_water_req) * 0.001)
    //        + (parseFloat(sprinkler_kharif_potato_irri_area) * parseFloat(sprinkler_kharif_potato_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_kharif_potato_reduction_gw_demand = parseFloat(sprinkler_kharif_potato_waterdemand).toFixed(2) - parseFloat(sprinkler_kharif_potato_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Kharif_Crops = parseFloat(sprinkler_kharif_potato_waterdemand) + parseFloat(Total_Water_Demand_for_Kharif_Crops);
    //    sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand) + parseFloat(sprinkler_kharif_potato_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand) + parseFloat(sprinkler_kharif_potato_reduction_gw_demand);

    //}

    //Chillies
    var Chillies_Kharif_Value = $('#Chillies_Kharif_Value').val();
    var sprinkler_kharif_chillies_irri_area = $('#sprinkler_kharif_chillies_irri_area').val();
    var sprinkler_kharif_chillies_water_req = $('#sprinkler_kharif_chillies_water_req').val();
    if (Chillies_Kharif_Value != "") {

        if (sprinkler_kharif_chillies_water_req != "") {
            sprinkler_kharif_chillies_waterdemand = parseFloat(Chillies_Kharif_Value) * parseFloat(sprinkler_kharif_chillies_water_req) * 0.001;
        } else {
            sprinkler_kharif_chillies_waterdemand = parseFloat(Chillies_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_chillies_water_req = 0;
        };

        if (sprinkler_kharif_chillies_irri_area == "") {
            sprinkler_kharif_chillies_irri_area = 0;
        }

        sprinkler_kharif_chillies_sprinkler_waterdemand = ((parseFloat(Chillies_Kharif_Value) - parseFloat(sprinkler_kharif_chillies_irri_area)) * parseFloat(sprinkler_kharif_chillies_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_chillies_irri_area) * parseFloat(sprinkler_kharif_chillies_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_kharif_chillies_reduction_gw_demand = sprinkler_kharif_chillies_waterdemand - sprinkler_kharif_chillies_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_chillies_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_chillies_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_chillies_reduction_gw_demand;

    }


    //Cotton

    var Cotton_Kharif_Value = $('#Cotton_Kharif_Value').val();
    var sprinkler_kharif_cotton_irri_area = $('#sprinkler_kharif_cotton_irri_area').val();
    var sprinkler_kharif_cotton_water_req = $('#sprinkler_kharif_cotton_water_req').val();
    if (Cotton_Kharif_Value != "") {

        if (sprinkler_kharif_cotton_water_req != "") {
            sprinkler_kharif_cotton_waterdemand = parseFloat(Cotton_Kharif_Value) * parseFloat(sprinkler_kharif_cotton_water_req) * 0.001;
        } else {
            sprinkler_kharif_cotton_waterdemand = parseFloat(Cotton_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_cotton_water_req = 0;
        };

        if (sprinkler_kharif_cotton_irri_area == "") {
            sprinkler_kharif_cotton_irri_area = 0;
        }

        sprinkler_kharif_cotton_sprinkler_waterdemand = ((parseFloat(Cotton_Kharif_Value) - parseFloat(sprinkler_kharif_cotton_irri_area)) * parseFloat(sprinkler_kharif_cotton_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_cotton_irri_area) * parseFloat(sprinkler_kharif_cotton_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_kharif_cotton_reduction_gw_demand = sprinkler_kharif_cotton_waterdemand - sprinkler_kharif_cotton_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_cotton_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_cotton_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_cotton_reduction_gw_demand;

    }


    //Melon

    var Melon_Kharif_Value = $('#Melon_Kharif_Value').val();
    var sprinkler_kharif_melon_irri_area = $('#sprinkler_kharif_melon_irri_area').val();
    var sprinkler_kharif_melon_water_req = $('#sprinkler_kharif_melon_water_req').val();
    if (Melon_Kharif_Value != "") {

        if (sprinkler_kharif_melon_water_req != "") {
            sprinkler_kharif_melon_waterdemand = parseFloat(Melon_Kharif_Value) * parseFloat(sprinkler_kharif_melon_water_req) * 0.001;
        } else {
            sprinkler_kharif_melon_waterdemand = parseFloat(Melon_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_melon_water_req = 0;
        };

        if (sprinkler_kharif_melon_irri_area == "") {
            sprinkler_kharif_melon_irri_area = 0;
        }

        sprinkler_kharif_melon_sprinkler_waterdemand = ((parseFloat(Melon_Kharif_Value) - parseFloat(sprinkler_kharif_melon_irri_area)) * parseFloat(sprinkler_kharif_melon_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_melon_irri_area) * parseFloat(sprinkler_kharif_melon_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_kharif_melon_reduction_gw_demand = sprinkler_kharif_melon_waterdemand - sprinkler_kharif_melon_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_melon_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_melon_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_melon_reduction_gw_demand;

    }


    //Citrus

    var Citrus_Kharif_Value = $('#Citrus_Kharif_Value').val();
    var sprinkler_kharif_citrus_irri_area = $('#sprinkler_kharif_citrus_irri_area').val();
    var sprinkler_kharif_citrus_water_req = $('#sprinkler_kharif_citrus_water_req').val();
    if (Citrus_Kharif_Value != "") {

        if (sprinkler_kharif_citrus_water_req != "") {
            sprinkler_kharif_citrus_waterdemand = parseFloat(Citrus_Kharif_Value) * parseFloat(sprinkler_kharif_citrus_water_req) * 0.001;
        } else {
            sprinkler_kharif_citrus_waterdemand = parseFloat(Citrus_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_citrus_water_req = 0;
        };

        if (sprinkler_kharif_citrus_irri_area == "") {
            sprinkler_kharif_citrus_irri_area = 0;
        }

        sprinkler_kharif_citrus_sprinkler_waterdemand = ((parseFloat(Citrus_Kharif_Value) - parseFloat(sprinkler_kharif_citrus_irri_area)) * parseFloat(sprinkler_kharif_citrus_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_citrus_irri_area) * parseFloat(sprinkler_kharif_citrus_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_kharif_citrus_reduction_gw_demand = sprinkler_kharif_citrus_waterdemand - sprinkler_kharif_citrus_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_citrus_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_citrus_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_citrus_reduction_gw_demand;

    }


    // Peanut

    //var Peanut_Kharif_Value = $('#Peanut_Kharif_Value').val();
    //var sprinkler_kharif_peanut_irri_area = $('#sprinkler_kharif_peanut_irri_area').val();
    //var sprinkler_kharif_peanut_water_req = $('#sprinkler_kharif_peanut_water_req').val();
    //if (Peanut_Kharif_Value != "") {

    //    if (sprinkler_kharif_peanut_water_req != "") {
    //        sprinkler_kharif_peanut_waterdemand = parseFloat(Peanut_Kharif_Value) * parseFloat(sprinkler_kharif_peanut_water_req) * 0.001;
    //    } else {
    //        sprinkler_kharif_peanut_waterdemand = parseFloat(Peanut_Kharif_Value) * 0 * 0.001;
    //        sprinkler_kharif_peanut_water_req = 0;
    //    };

    //    if (sprinkler_kharif_peanut_irri_area == "") {
    //        sprinkler_kharif_peanut_irri_area = 0;
    //    }

    //    sprinkler_kharif_peanut_sprinkler_waterdemand = ((parseFloat(Peanut_Kharif_Value) - parseFloat(sprinkler_kharif_peanut_irri_area)) * parseFloat(sprinkler_kharif_peanut_water_req) * 0.001)
    //        + (parseFloat(sprinkler_kharif_peanut_irri_area) * parseFloat(sprinkler_kharif_peanut_water_req) * (1 - 30 / 100) * 0.001);

    //    sprinkler_kharif_peanut_reduction_gw_demand = parseFloat(sprinkler_kharif_peanut_waterdemand).toFixed(2) - parseFloat(sprinkler_kharif_peanut_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Kharif_Crops = parseFloat(sprinkler_kharif_peanut_waterdemand) + parseFloat(Total_Water_Demand_for_Kharif_Crops);
    //    sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand) + parseFloat(sprinkler_kharif_peanut_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand) + parseFloat(sprinkler_kharif_peanut_reduction_gw_demand);

    //}


    //Horticulture

    var Horticulture_Kharif_Value = $('#Horticulture_Kharif_Value').val();
    var sprinkler_kharif_horticulture_irri_area = $('#sprinkler_kharif_horticulture_irri_area').val();
    var sprinkler_kharif_horticulture_water_req = $('#sprinkler_kharif_horticulture_water_req').val();
    if (Horticulture_Kharif_Value != "") {

        if (sprinkler_kharif_horticulture_water_req != "") {
            sprinkler_kharif_horticulture_waterdemand = parseFloat(Horticulture_Kharif_Value) * parseFloat(sprinkler_kharif_horticulture_water_req) * 0.001;
        } else {
            sprinkler_kharif_horticulture_waterdemand = parseFloat(Horticulture_Kharif_Value) * 0 * 0.001;
            sprinkler_kharif_horticulture_water_req = 0;
        };

        if (sprinkler_kharif_horticulture_irri_area == "") {
            sprinkler_kharif_horticulture_irri_area = 0;
        }

        sprinkler_kharif_horticulture_sprinkler_waterdemand = ((parseFloat(Horticulture_Kharif_Value) - parseFloat(sprinkler_kharif_horticulture_irri_area)) * parseFloat(sprinkler_kharif_horticulture_water_req) * 0.001)
            + (parseFloat(sprinkler_kharif_horticulture_irri_area) * parseFloat(sprinkler_kharif_horticulture_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_kharif_horticulture_reduction_gw_demand = sprinkler_kharif_horticulture_waterdemand - sprinkler_kharif_horticulture_sprinkler_waterdemand;

        Total_Water_Demand_for_Kharif_Crops = sprinkler_kharif_horticulture_waterdemand + Total_Water_Demand_for_Kharif_Crops;
        sprinkler_kharif_total_sprinkler_waterdemand = sprinkler_kharif_total_sprinkler_waterdemand + sprinkler_kharif_horticulture_sprinkler_waterdemand;
        sprinkler_kharif_total_reduction_waterdemand = sprinkler_kharif_total_reduction_waterdemand + sprinkler_kharif_horticulture_reduction_gw_demand;

    }




    //var sprinkler_kharif_othercrop_area = $('#sprinkler_kharif_othercrop_area').val();
    //var sprinkler_kharif_othercrop_irri_area = $('#sprinkler_kharif_othercrop_irri_area').val();
    //var sprinkler_kharif_othercrop_water_req = $('#sprinkler_kharif_othercrop_water_req').val();
    //if (sprinkler_kharif_othercrop_area != "") {

    //    if (sprinkler_kharif_othercrop_water_req != "") {
    //        sprinkler_kharif_othercrop_waterdemand = parseFloat(sprinkler_kharif_othercrop_area) * parseFloat(sprinkler_kharif_othercrop_water_req) * 0.001;
    //    } else {
    //        sprinkler_kharif_othercrop_waterdemand = parseFloat(sprinkler_kharif_othercrop_area) * 0 * 0.001;
    //        sprinkler_kharif_othercrop_water_req = 0;
    //    };

    //    if (sprinkler_kharif_othercrop_irri_area == "") {
    //        sprinkler_kharif_othercrop_irri_area = 0;
    //    }
    //    sprinkler_kharif_othercrop_sprinkler_waterdemand = ((parseFloat(sprinkler_kharif_othercrop_area) - parseFloat(sprinkler_kharif_othercrop_irri_area)) * parseFloat(sprinkler_kharif_othercrop_water_req) * 0.001)
    //        + (parseFloat(sprinkler_kharif_othercrop_irri_area) * parseFloat(sprinkler_kharif_othercrop_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_kharif_othercrop_reduc_gw_demand = parseFloat(sprinkler_kharif_othercrop_waterdemand).toFixed(2) - parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Kharif_Crops = parseFloat(sprinkler_kharif_othercrop_waterdemand) + parseFloat(Total_Water_Demand_for_Kharif_Crops);
    //    sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand) + parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand) + parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand);

    //}

    

    $('#sprinkler_kharif_total_waterdemand').text(parseFloat(Total_Water_Demand_for_Kharif_Crops).toFixed(2));
    $('#sprinkler_kharif_total_sprinkler_waterdemand').text(parseFloat(sprinkler_kharif_total_sprinkler_waterdemand).toFixed(2));
    $('#sprinkler_kharif_total_reduction_waterdemand').text(parseFloat(sprinkler_kharif_total_reduction_waterdemand).toFixed(2));



    $('#Sprinkler_Water_Demand').text(Total_Water_Demand_for_Kharif_Crops.toFixed(2));


    var sprinkler_kharif_total_reduction_waterdemand1 = $('#sprinkler_kharif_total_reduction_waterdemand').text();
    if (sprinkler_kharif_total_reduction_waterdemand1 != "" && sprinkler_kharif_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_kharif_total_reduction_waterdemand1 = "0";
    }

    var sprinkler_rabi_total_reduction_waterdemand1 = $('#sprinkler_rabi_total_reduction_waterdemand').text();
    if (sprinkler_rabi_total_reduction_waterdemand1 != "" && sprinkler_rabi_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_rabi_total_reduction_waterdemand1 = "0";
    }

    var sprinkler_summer_total_reduction_waterdemand1 = $('#sprinkler_summer_total_reduction_waterdemand').text();
    if (sprinkler_summer_total_reduction_waterdemand1 != "" && sprinkler_summer_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_summer_total_reduction_waterdemand1 = "0";
    }

    
    var TotalAnnual_sprinkler_Reduction = parseFloat(sprinkler_kharif_total_reduction_waterdemand1) + parseFloat(sprinkler_rabi_total_reduction_waterdemand1) + parseFloat(sprinkler_summer_total_reduction_waterdemand1);
    $('#TotalAnnual_sprinkler_Reduction').text(TotalAnnual_sprinkler_Reduction.toFixed(2));
}


function KharifPopUp(SS) {

    Kharif_WaterRequire();



    if (SS == "sprinkler_kharif_paddy_crop_area") {

        $('#SprinklerName').text("Paddy");

        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_paddy_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_paddy_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_paddy_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_ragi_crop_area") {
        $('#SprinklerName').text("Ragi");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_ragi_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_ragi_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_ragi_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_groundnut_crop_area") {
        $('#SprinklerName').text("Groundnut");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_groundnut_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_groundnut_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_groundnut_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_sugarcane_crop_area") {
        $('#SprinklerName').text("Sugarcane");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_sugarcane_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_sugarcane_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_sugarcane_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_tomoto_crop_area") {
        $('#SprinklerName').text("Tomoto");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_tomoto_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_tomoto_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_tomoto_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "sprinkler_kharif_floriculture_crop_area") {
        $('#SprinklerName').text("Floriculture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_floriculture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_floriculture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_floriculture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_sericulture_crop_area") {
        $('#SprinklerName').text("Sericulture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_sericulture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_sericulture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_sericulture_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "sprinkler_kharif_banana_crop_area") {
        $('#SprinklerName').text("Banana");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_banana_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_banana_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_banana_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_fodder_crop_area") {
        $('#SprinklerName').text("Fodder");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_fodder_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_fodder_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_fodder_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "sprinkler_kharif_maize_crop_area") {
        $('#SprinklerName').text("Maize");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_maize_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_maize_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_maize_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "sprinkler_kharif_chillies_crop_area") {
        $('#SprinklerName').text("Chillies");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_chillies_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_chillies_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_chillies_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_cotton_crop_area") {
        $('#SprinklerName').text("Cotton");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_cotton_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_cotton_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_cotton_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_melon_crop_area") {
        $('#SprinklerName').text("Melon");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_melon_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_melon_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_melon_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_kharif_citrus_crop_area") {
        $('#SprinklerName').text("Citrus");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_citrus_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_citrus_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_citrus_reduction_gw_demand).toFixed(2));

    }



    //else if (SS == "sprinkler_kharif_peanut_crop_area") {
    //    $('#SprinklerName').text("Peanut");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_peanut_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_peanut_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_peanut_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "sprinkler_kharif_horticulture_crop_area") {
        $('#SprinklerName').text("Horticulture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_horticulture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_horticulture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_horticulture_reduction_gw_demand).toFixed(2));

    }

    //else if (SS == "sprinkler_kharif_othercrop_area") {

    //    var CropName = $('#sprinkler_kharif_othercrop_name').val();
    //    $('#SprinklerName').text(CropName);
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_othercrop_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand).toFixed(2));

    //}

    else {
        $('#Individual_WaterDemand').text(0);
        $('#Individual_SprinklerWaterDemand').text(0);
        $('#Individual_ReductionGWdemand').text(0);

    }

}



var sprinkler_rabi_sericulture_waterdemand = 0;
var sprinkler_rabi_sericulture_sprinkler_waterdemand = 0;
var sprinkler_rabi_sericulture_reduction_gw_demand = 0;

var sprinkler_rabi_tomoto_waterdemand = 0;
var sprinkler_rabi_tomoto_sprinkler_waterdemand = 0;
var sprinkler_rabi_tomoto_reduction_gw_demand = 0;

//var sprinkler_rabi_cabbage_waterdemand = 0;
//var sprinkler_rabi_cabbage_sprinkler_waterdemand = 0;
//var sprinkler_rabi_cabbage_reduction_gw_demand = 0;

//var sprinkler_rabi_beans_waterdemand = 0;
//var sprinkler_rabi_beans_sprinkler_waterdemand = 0;
//var sprinkler_rabi_beans_reduction_gw_demand = 0;

var sprinkler_rabi_floriculture_waterdemand = 0;
var sprinkler_rabi_floriculture_sprinkler_waterdemand = 0;
var sprinkler_rabi_floriculture_reduction_gw_demand = 0;

//var sprinkler_rabi_potato_waterdemand = 0;
//var sprinkler_rabi_potato_sprinkler_waterdemand = 0;
//var sprinkler_rabi_potato_reduction_gw_demand = 0;

//var sprinkler_rabi_cucumber_waterdemand = 0;
//var sprinkler_rabi_cucumber_sprinkler_waterdemand = 0;
//var sprinkler_rabi_cucumber_reduction_gw_demand = 0;

var sprinkler_rabi_ragi_waterdemand = 0;
var sprinkler_rabi_ragi_sprinkler_waterdemand = 0;
var sprinkler_rabi_ragi_reduction_gw_demand = 0;

var sprinkler_rabi_sugarcane_waterdemand = 0;
var sprinkler_rabi_sugarcane_sprinkler_waterdemand = 0;
var sprinkler_rabi_sugarcane_reduction_gw_demand = 0;

var sprinkler_rabi_maize_waterdemand = 0;
var sprinkler_rabi_maize_sprinkler_waterdemand = 0;
var sprinkler_rabi_maize_reduction_gw_demand = 0;

var sprinkler_rabi_fodder_waterdemand = 0;
var sprinkler_rabi_fodder_sprinkler_waterdemand = 0;
var sprinkler_rabi_fodder_reduction_gw_demand = 0;

var sprinkler_rabi_paddy_waterdemand = 0;
var sprinkler_rabi_paddy_sprinkler_waterdemand = 0;
var sprinkler_rabi_paddy_reduction_gw_demand = 0;

var sprinkler_rabi_alfalfa_waterdemand = 0;
var sprinkler_rabi_alfalfa_sprinkler_waterdemand = 0;
var sprinkler_rabi_alfalfa_reduction_gw_demand = 0;

//var sprinkler_rabi_onion_waterdemand = 0;
//var sprinkler_rabi_onion_sprinkler_waterdemand = 0;
//var sprinkler_rabi_onion_reduction_gw_demand = 0;

var sprinkler_rabi_horticulture_waterdemand = 0;
var sprinkler_rabi_horticulture_sprinkler_waterdemand = 0;
var sprinkler_rabi_horticulture_reduction_gw_demand = 0;

var sprinkler_rabi_sunflower_waterdemand = 0;
var sprinkler_rabi_sunflower_sprinkler_waterdemand = 0;
var sprinkler_rabi_sunflower_reduction_gw_demand = 0;

var sprinkler_rabi_othyercrop_waterdemand = 0;
var sprinkler_rabi_othercrop_sprinkler_waterdemand = 0;
var sprinkler_rabi_othercrop_reduc_gw_demand = 0;

var Total_Water_Demand_for_Rabi_Crops = 0;
var sprinkler_rabi_total_rabi_waterdemand = 0;
var sprinkler_rabi_total_reduction_waterdemand = 0;

var sprinkler_rabi_othercrop_waterdemand1 = 0;
var sprinkler_rabi_othercrop_sprinkler_waterdemand1 = 0;
var sprinkler_rabi_othercrop_reduc_gw_demand1 = 0;

var sprinkler_rabi_othercrop_waterdemand2 = 0;
var sprinkler_rabi_othercrop_sprinkler_waterdemand2 = 0;
var sprinkler_rabi_othercrop_reduc_gw_demand2 = 0;

var sprinkler_rabi_othercrop_waterdemand3 = 0;
var sprinkler_rabi_othercrop_sprinkler_waterdemand3 = 0;
var sprinkler_rabi_othercrop_reduc_gw_demand3 = 0;

var sprinkler_rabi_othercrop_waterdemand4 = 0;
var sprinkler_rabi_othercrop_sprinkler_waterdemand4 = 0;
var sprinkler_rabi_othercrop_reduc_gw_demand4 = 0;

var sprinkler_rabi_othercrop_waterdemand5 = 0;
var sprinkler_rabi_othercrop_sprinkler_waterdemand5 = 0;
var sprinkler_rabi_othercrop_reduc_gw_demand5 = 0;

function Rabi_WaterRequire() {


    Total_Water_Demand_for_Rabi_Crops = 0;
    sprinkler_rabi_total_rabi_waterdemand = 0;
    sprinkler_rabi_total_reduction_waterdemand = 0;
    sprinkler_rabi_sericulture_waterdemand = 0;
    sprinkler_rabi_sericulture_sprinkler_waterdemand = 0;
    sprinkler_rabi_sericulture_reduction_gw_demand = 0;

    sprinkler_rabi_tomoto_waterdemand = 0;
    sprinkler_rabi_tomoto_sprinkler_waterdemand = 0;
    sprinkler_rabi_tomoto_reduction_gw_demand = 0;

    //sprinkler_rabi_cabbage_waterdemand = 0;
    //sprinkler_rabi_cabbage_sprinkler_waterdemand = 0;
    //sprinkler_rabi_cabbage_reduction_gw_demand = 0;

    //sprinkler_rabi_beans_waterdemand = 0;
    //sprinkler_rabi_beans_sprinkler_waterdemand = 0;
    //sprinkler_rabi_beans_reduction_gw_demand = 0;

    sprinkler_rabi_floriculture_waterdemand = 0;
    sprinkler_rabi_floriculture_sprinkler_waterdemand = 0;
    sprinkler_rabi_floriculture_reduction_gw_demand = 0;

    //sprinkler_rabi_potato_waterdemand = 0;
    //sprinkler_rabi_potato_sprinkler_waterdemand = 0;
    //sprinkler_rabi_potato_reduction_gw_demand = 0;

    //sprinkler_rabi_cucumber_waterdemand = 0;
    //sprinkler_rabi_cucumber_sprinkler_waterdemand = 0;
    //sprinkler_rabi_cucumber_reduction_gw_demand = 0;

    sprinkler_rabi_ragi_waterdemand = 0;
    sprinkler_rabi_ragi_sprinkler_waterdemand = 0;
    sprinkler_rabi_ragi_reduction_gw_demand = 0;

    sprinkler_rabi_sugarcane_waterdemand = 0;
    sprinkler_rabi_sugarcane_sprinkler_waterdemand = 0;
    sprinkler_rabi_sugarcane_reduction_gw_demand = 0;

    sprinkler_rabi_maize_waterdemand = 0;
    sprinkler_rabi_maize_sprinkler_waterdemand = 0;
    sprinkler_rabi_maize_reduction_gw_demand = 0;

    sprinkler_rabi_fodder_waterdemand = 0;
    sprinkler_rabi_fodder_sprinkler_waterdemand = 0;
    sprinkler_rabi_fodder_reduction_gw_demand = 0;

    sprinkler_rabi_paddy_waterdemand = 0;
    sprinkler_rabi_paddy_sprinkler_waterdemand = 0;
    sprinkler_rabi_paddy_reduction_gw_demand = 0;

    sprinkler_rabi_alfalfa_waterdemand = 0;
    sprinkler_rabi_alfalfa_sprinkler_waterdemand = 0;
    sprinkler_rabi_alfalfa_reduction_gw_demand = 0;

    //sprinkler_rabi_onion_waterdemand = 0;
    //sprinkler_rabi_onion_sprinkler_waterdemand = 0;
    //sprinkler_rabi_onion_reduction_gw_demand = 0;

    sprinkler_rabi_horticulture_waterdemand = 0;
    sprinkler_rabi_horticulture_sprinkler_waterdemand = 0;
    sprinkler_rabi_horticulture_reduction_gw_demand = 0;

    sprinkler_rabi_sunflower_waterdemand = 0;
    sprinkler_rabi_sunflower_sprinkler_waterdemand = 0;
    sprinkler_rabi_sunflower_reduction_gw_demand = 0;


    //Latest Code

    sprinkler_rabi_othercrop_waterdemand1 = 0;
    sprinkler_rabi_othercrop_sprinkler_waterdemand1 = 0;
    sprinkler_rabi_othercrop_reduc_gw_demand1 = 0;

    sprinkler_rabi_othercrop_waterdemand2 = 0;
    sprinkler_rabi_othercrop_sprinkler_waterdemand2 = 0;
    sprinkler_rabi_othercrop_reduc_gw_demand2 = 0;

    sprinkler_rabi_othercrop_waterdemand3 = 0;
    sprinkler_rabi_othercrop_sprinkler_waterdemand3 = 0;
    sprinkler_rabi_othercrop_reduc_gw_demand3 = 0;

    sprinkler_rabi_othercrop_waterdemand4 = 0;
    sprinkler_rabi_othercrop_sprinkler_waterdemand4 = 0;
    sprinkler_rabi_othercrop_reduc_gw_demand4 = 0;

    sprinkler_rabi_othercrop_waterdemand5 = 0;
    sprinkler_rabi_othercrop_sprinkler_waterdemand5 = 0;
    sprinkler_rabi_othercrop_reduc_gw_demand5 = 0;



    var sprinkler_rabi_othercrop_area1 = $('#sprinkler_rabi_othercrop_area1').val();
    if (typeof sprinkler_rabi_othercrop_area1 == 'undefined') {
        sprinkler_rabi_othercrop_area1 = 0;
    }
    var sprinkler_rabi_othercrop_irri_area1 = $('#sprinkler_rabi_othercrop_irri_area1').val();
    if (typeof sprinkler_rabi_othercrop_irri_area1 == 'undefined') {
        sprinkler_rabi_othercrop_irri_area1 = 0;
    }
    var sprinkler_rabi_othercrop_water_req1 = $('#sprinkler_rabi_othercrop_water_req1').val();
    if (typeof sprinkler_rabi_othercrop_water_req1 == 'undefined') {
        sprinkler_rabi_othercrop_water_req1 = 0;
    }

    if (sprinkler_rabi_othercrop_area1 != "") {

        if (sprinkler_rabi_othercrop_water_req1 != "") {
            sprinkler_rabi_othercrop_waterdemand1 = parseFloat(sprinkler_rabi_othercrop_area1) * parseFloat(sprinkler_rabi_othercrop_water_req1) * 0.001;
        } else {
            sprinkler_rabi_othercrop_waterdemand1 = parseFloat(sprinkler_rabi_othercrop_area1) * 0 * 0.001;
            sprinkler_rabi_othercrop_water_req1 = 0;
        }


        if (sprinkler_rabi_othercrop_irri_area1 == "") {
            sprinkler_rabi_othercrop_irri_area1 = 0;
        }
        sprinkler_rabi_othercrop_sprinkler_waterdemand1 = ((parseFloat(sprinkler_rabi_othercrop_area1) - parseFloat(sprinkler_rabi_othercrop_irri_area1)) * parseFloat(sprinkler_rabi_othercrop_water_req1) * 0.001) + (parseFloat(sprinkler_rabi_othercrop_irri_area1) * parseFloat(sprinkler_rabi_othercrop_water_req1) * (1 - 30 / 100) * 0.001);

        // sprinkler_rabi_paddy_sprinkler_waterdemand = ((parseFloat(rabi_Paddy_UserValue) - parseFloat(sprinkler_rabi_paddy_irri_area)) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001) + (parseFloat(sprinkler_rabi_paddy_irri_area) * parseFloat(sprinkler_rabi_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_rabi_othercrop_reduc_gw_demand1 = sprinkler_rabi_othercrop_waterdemand1 - sprinkler_rabi_othercrop_sprinkler_waterdemand1;
        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_othercrop_waterdemand1 + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_othercrop_sprinkler_waterdemand1;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_othercrop_reduc_gw_demand1;
        //rabi_Paddy_SavingValue

    }






    var sprinkler_rabi_othercrop_area2 = $('#sprinkler_rabi_othercrop_area2').val();
    if (typeof sprinkler_rabi_othercrop_area2 == 'undefined') {
        sprinkler_rabi_othercrop_area2 = 0;
    }
    var sprinkler_rabi_othercrop_irri_area2 = $('#sprinkler_rabi_othercrop_irri_area2').val();
    if (typeof sprinkler_rabi_othercrop_irri_area2 == 'undefined') {
        sprinkler_rabi_othercrop_irri_area2 = 0;
    }
    var sprinkler_rabi_othercrop_water_req2 = $('#sprinkler_rabi_othercrop_water_req2').val();
    if (typeof sprinkler_rabi_othercrop_water_req2 == 'undefined') {
        sprinkler_rabi_othercrop_water_req2 = 0;
    }

    if (sprinkler_rabi_othercrop_area2 != "") {

        if (sprinkler_rabi_othercrop_water_req2 != "") {
            sprinkler_rabi_othercrop_waterdemand2 = parseFloat(sprinkler_rabi_othercrop_area2) * parseFloat(sprinkler_rabi_othercrop_water_req2) * 0.001;
        } else {
            sprinkler_rabi_othercrop_waterdemand2 = parseFloat(sprinkler_rabi_othercrop_area2) * 0 * 0.001;
            sprinkler_rabi_othercrop_water_req2 = 0;
        }
        if (sprinkler_rabi_othercrop_irri_area2 == "") {
            sprinkler_rabi_othercrop_irri_area2 = 0;
        }
        sprinkler_rabi_othercrop_sprinkler_waterdemand2 = ((parseFloat(sprinkler_rabi_othercrop_area2) - parseFloat(sprinkler_rabi_othercrop_irri_area2)) * parseFloat(sprinkler_rabi_othercrop_water_req2) * 0.001) + (parseFloat(sprinkler_rabi_othercrop_irri_area2) * parseFloat(sprinkler_rabi_othercrop_water_req2) * (1 - 30 / 100) * 0.001);

        // sprinkler_rabi_paddy_sprinkler_waterdemand = ((parseFloat(rabi_Paddy_UserValue) - parseFloat(sprinkler_rabi_paddy_irri_area)) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001) + (parseFloat(sprinkler_rabi_paddy_irri_area) * parseFloat(sprinkler_rabi_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_rabi_othercrop_reduc_gw_demand2 = sprinkler_rabi_othercrop_waterdemand2 - sprinkler_rabi_othercrop_sprinkler_waterdemand2;
        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_othercrop_waterdemand2 + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_othercrop_sprinkler_waterdemand2;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_othercrop_reduc_gw_demand2;
        //rabi_Paddy_SavingValue

    }

    var sprinkler_rabi_othercrop_area3 = $('#sprinkler_rabi_othercrop_area3').val();
    if (typeof sprinkler_rabi_othercrop_area3 == 'undefined') {
        sprinkler_rabi_othercrop_area3 = 0;
    }
    var sprinkler_rabi_othercrop_irri_area3 = $('#sprinkler_rabi_othercrop_irri_area3').val();
    if (typeof sprinkler_rabi_othercrop_irri_area3 == 'undefined') {
        sprinkler_rabi_othercrop_irri_area3 = 0;
    }
    var sprinkler_rabi_othercrop_water_req3 = $('#sprinkler_rabi_othercrop_water_req3').val();
    if (typeof sprinkler_rabi_othercrop_water_req3 == 'undefined') {
        sprinkler_rabi_othercrop_water_req3 = 0;
    }

    if (sprinkler_rabi_othercrop_area3 != "") {

        if (sprinkler_rabi_othercrop_water_req3 != "") {
            sprinkler_rabi_othercrop_waterdemand3 = parseFloat(sprinkler_rabi_othercrop_area3) * parseFloat(sprinkler_rabi_othercrop_water_req3) * 0.001;
        } else {
            sprinkler_rabi_othercrop_waterdemand3 = parseFloat(sprinkler_rabi_othercrop_area3) * 0 * 0.001;
            sprinkler_rabi_othercrop_water_req3 = 0;
        }
        if (sprinkler_rabi_othercrop_irri_area3 == "") {
            sprinkler_rabi_othercrop_irri_area3 = 0;
        }
        sprinkler_rabi_othercrop_sprinkler_waterdemand3 = ((parseFloat(sprinkler_rabi_othercrop_area3) - parseFloat(sprinkler_rabi_othercrop_irri_area3)) * parseFloat(sprinkler_rabi_othercrop_water_req3) * 0.001) + (parseFloat(sprinkler_rabi_othercrop_irri_area3) * parseFloat(sprinkler_rabi_othercrop_water_req3) * (1 - 30 / 100) * 0.001);

        // sprinkler_rabi_paddy_sprinkler_waterdemand = ((parseFloat(rabi_Paddy_UserValue) - parseFloat(sprinkler_rabi_paddy_irri_area)) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001) + (parseFloat(sprinkler_rabi_paddy_irri_area) * parseFloat(sprinkler_rabi_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_rabi_othercrop_reduc_gw_demand3 = sprinkler_rabi_othercrop_waterdemand3 - sprinkler_rabi_othercrop_sprinkler_waterdemand3;
        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_othercrop_waterdemand3 + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_othercrop_sprinkler_waterdemand3;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_othercrop_reduc_gw_demand3;
        //rabi_Paddy_SavingValue

    }

    var sprinkler_rabi_othercrop_area4 = $('#sprinkler_rabi_othercrop_area4').val();
    if (typeof sprinkler_rabi_othercrop_area4 == 'undefined') {
        sprinkler_rabi_othercrop_area4 = 0;
    }
    var sprinkler_rabi_othercrop_irri_area4 = $('#sprinkler_rabi_othercrop_irri_area4').val();
    if (typeof sprinkler_rabi_othercrop_irri_area4 == 'undefined') {
        sprinkler_rabi_othercrop_irri_area4 = 0;
    }
    var sprinkler_rabi_othercrop_water_req4 = $('#sprinkler_rabi_othercrop_water_req4').val();
    if (typeof sprinkler_rabi_othercrop_water_req4 == 'undefined') {
        sprinkler_rabi_othercrop_water_req4 = 0;
    }

    if (sprinkler_rabi_othercrop_area4 != "") {

        if (sprinkler_rabi_othercrop_water_req4 != "") {
            sprinkler_rabi_othercrop_waterdemand4 = parseFloat(sprinkler_rabi_othercrop_area4) * parseFloat(sprinkler_rabi_othercrop_water_req4) * 0.001;
        } else {
            sprinkler_rabi_othercrop_waterdemand4 = parseFloat(sprinkler_rabi_othercrop_area4) * 0 * 0.001;
            sprinkler_rabi_othercrop_water_req4 = 0;
        }
        if (sprinkler_rabi_othercrop_irri_area4 == "") {
            sprinkler_rabi_othercrop_irri_area4 = 0;
        }
        sprinkler_rabi_othercrop_sprinkler_waterdemand4 = ((parseFloat(sprinkler_rabi_othercrop_area4) - parseFloat(sprinkler_rabi_othercrop_irri_area4)) * parseFloat(sprinkler_rabi_othercrop_water_req4) * 0.001) + (parseFloat(sprinkler_rabi_othercrop_irri_area4) * parseFloat(sprinkler_rabi_othercrop_water_req4) * (1 - 40 / 100) * 0.001);

        // sprinkler_rabi_paddy_sprinkler_waterdemand = ((parseFloat(rabi_Paddy_UserValue) - parseFloat(sprinkler_rabi_paddy_irri_area)) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001) + (parseFloat(sprinkler_rabi_paddy_irri_area) * parseFloat(sprinkler_rabi_paddy_water_req) * (1 - 40 / 100) * 0.001);
        sprinkler_rabi_othercrop_reduc_gw_demand4 = sprinkler_rabi_othercrop_waterdemand4 - sprinkler_rabi_othercrop_sprinkler_waterdemand4;
        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_othercrop_waterdemand4 + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_othercrop_sprinkler_waterdemand4;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_othercrop_reduc_gw_demand4;
        //rabi_Paddy_SavingValue

    }

    var sprinkler_rabi_othercrop_area5 = $('#sprinkler_rabi_othercrop_area5').val();

    if (typeof sprinkler_rabi_othercrop_area5 == 'undefined') {
        sprinkler_rabi_othercrop_area5 = 0;
    }
    var sprinkler_rabi_othercrop_irri_area5 = $('#sprinkler_rabi_othercrop_irri_area5').val();

    if (typeof sprinkler_rabi_othercrop_irri_area5 == 'undefined') {
        sprinkler_rabi_othercrop_irri_area5 = 0;
    }
    var sprinkler_rabi_othercrop_water_req5 = $('#sprinkler_rabi_othercrop_water_req5').val();

    if (typeof sprinkler_rabi_othercrop_water_req5 == 'undefined') {
        sprinkler_rabi_othercrop_water_req5 = 0;
    }

    if (sprinkler_rabi_othercrop_area5 != "") {

        if (sprinkler_rabi_othercrop_water_req5 != "") {
            sprinkler_rabi_othercrop_waterdemand5 = parseFloat(sprinkler_rabi_othercrop_area5) * parseFloat(sprinkler_rabi_othercrop_water_req5) * 0.001;
        } else {
            sprinkler_rabi_othercrop_waterdemand5 = parseFloat(sprinkler_rabi_othercrop_area5) * 0 * 0.001;
            sprinkler_rabi_othercrop_water_req5 = 0;
        }
        if (sprinkler_rabi_othercrop_irri_area5 == "") {
            sprinkler_rabi_othercrop_irri_area5 = 0;
        }
        sprinkler_rabi_othercrop_sprinkler_waterdemand5 = ((parseFloat(sprinkler_rabi_othercrop_area5) - parseFloat(sprinkler_rabi_othercrop_irri_area5)) * parseFloat(sprinkler_rabi_othercrop_water_req5) * 0.001) + (parseFloat(sprinkler_rabi_othercrop_irri_area5) * parseFloat(sprinkler_rabi_othercrop_water_req5) * (1 - 50 / 100) * 0.001);

        // sprinkler_rabi_paddy_sprinkler_waterdemand = ((parseFloat(rabi_Paddy_UserValue) - parseFloat(sprinkler_rabi_paddy_irri_area)) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001) + (parseFloat(sprinkler_rabi_paddy_irri_area) * parseFloat(sprinkler_rabi_paddy_water_req) * (1 - 50 / 100) * 0.001);
        sprinkler_rabi_othercrop_reduc_gw_demand5 = sprinkler_rabi_othercrop_waterdemand5 - sprinkler_rabi_othercrop_sprinkler_waterdemand5;
        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_othercrop_waterdemand5 + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_othercrop_sprinkler_waterdemand5;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_othercrop_reduc_gw_demand5;
        //rabi_Paddy_SavingValue

    }







    //Sericulture

    var Sericulture_Rabi_Value = $('#Sericulture_Rabi_Value').val();
    var sprinkler_rabi_sericulture_irri_area = $('#sprinkler_rabi_sericulture_irri_area').val();
    var sprinkler_rabi_sericulture_water_req = $('#sprinkler_rabi_sericulture_water_req').val();
    if (Sericulture_Rabi_Value != "") {

        if (sprinkler_rabi_sericulture_water_req != "") {
            sprinkler_rabi_sericulture_waterdemand = parseFloat(Sericulture_Rabi_Value) * parseFloat(sprinkler_rabi_sericulture_water_req) * 0.001;
        } else {
            sprinkler_rabi_sericulture_waterdemand = parseFloat(Sericulture_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_sericulture_water_req = 0;
        };

        if (sprinkler_rabi_sericulture_irri_area == "") {
            sprinkler_rabi_sericulture_irri_area = 0;
        }

        sprinkler_rabi_sericulture_sprinkler_waterdemand = ((parseFloat(Sericulture_Rabi_Value) - parseFloat(sprinkler_rabi_sericulture_irri_area)) * parseFloat(sprinkler_rabi_sericulture_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_sericulture_irri_area) * parseFloat(sprinkler_rabi_sericulture_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_rabi_sericulture_reduction_gw_demand = sprinkler_rabi_sericulture_waterdemand - sprinkler_rabi_sericulture_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_sericulture_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_sericulture_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_sericulture_reduction_gw_demand;

    }



    //Tomota

    var Tomota_Rabi_Value = $('#Tomota_Rabi_Value').val();
    var sprinkler_rabi_tomoto_irri_area = $('#sprinkler_rabi_tomoto_irri_area').val();
    var sprinkler_rabi_tomoto_water_req = $('#sprinkler_rabi_tomoto_water_req').val();
    if (Tomota_Rabi_Value != "") {

        if (sprinkler_rabi_tomoto_water_req != "") {
            sprinkler_rabi_tomoto_waterdemand = parseFloat(Tomota_Rabi_Value) * parseFloat(sprinkler_rabi_tomoto_water_req) * 0.001;
        } else {
            sprinkler_rabi_tomoto_waterdemand = parseFloat(Tomota_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_tomoto_water_req = 0;
        };

        if (sprinkler_rabi_tomoto_irri_area == "") {
            sprinkler_rabi_tomoto_irri_area = 0;
        }

        sprinkler_rabi_tomoto_sprinkler_waterdemand = ((parseFloat(Tomota_Rabi_Value) - parseFloat(sprinkler_rabi_tomoto_irri_area)) * parseFloat(sprinkler_rabi_tomoto_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_tomoto_irri_area) * parseFloat(sprinkler_rabi_tomoto_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_rabi_tomoto_reduction_gw_demand = sprinkler_rabi_tomoto_waterdemand - sprinkler_rabi_tomoto_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_tomoto_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_tomoto_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_tomoto_reduction_gw_demand;


    }


    //Cabbage

    //var Cabbage_Rabi_Value = $('#Cabbage_Rabi_Value').val();
    //var sprinkler_rabi_cabbage_irri_area = $('#sprinkler_rabi_cabbage_irri_area').val();
    //var sprinkler_rabi_cabbage_water_req = $('#sprinkler_rabi_cabbage_water_req').val();
    //if (Cabbage_Rabi_Value != "") {

    //    if (sprinkler_rabi_cabbage_water_req != "") {
    //        sprinkler_rabi_cabbage_waterdemand = parseFloat(Cabbage_Rabi_Value) * parseFloat(sprinkler_rabi_cabbage_water_req) * 0.001;
    //    } else {
    //        sprinkler_rabi_cabbage_waterdemand = parseFloat(Cabbage_Rabi_Value) * 0 * 0.001;
    //        sprinkler_rabi_cabbage_water_req = 0;
    //    };

    //    if (sprinkler_rabi_cabbage_irri_area == "") {
    //        sprinkler_rabi_cabbage_irri_area = 0;
    //    }

    //    sprinkler_rabi_cabbage_sprinkler_waterdemand = ((parseFloat(Cabbage_Rabi_Value) - parseFloat(sprinkler_rabi_cabbage_irri_area)) * parseFloat(sprinkler_rabi_cabbage_water_req) * 0.001)
    //        + (parseFloat(sprinkler_rabi_cabbage_irri_area) * parseFloat(sprinkler_rabi_cabbage_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_rabi_cabbage_reduction_gw_demand = parseFloat(sprinkler_rabi_cabbage_waterdemand).toFixed(2) - parseFloat(sprinkler_rabi_cabbage_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Rabi_Crops = parseFloat(sprinkler_rabi_cabbage_waterdemand) + parseFloat(Total_Water_Demand_for_Rabi_Crops);
    //    sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand) + parseFloat(sprinkler_rabi_cabbage_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand) + parseFloat(sprinkler_rabi_cabbage_reduction_gw_demand);


    //}



    //Beans

    //var Beans_Rabi_Value = $('#Beans_Rabi_Value').val();
    //var sprinkler_rabi_beans_irri_area = $('#sprinkler_rabi_beans_irri_area').val();
    //var sprinkler_rabi_beans_water_req = $('#sprinkler_rabi_beans_water_req').val();
    //if (Beans_Rabi_Value != "") {

    //    if (sprinkler_rabi_beans_water_req != "") {
    //        sprinkler_rabi_beans_waterdemand = parseFloat(Beans_Rabi_Value) * parseFloat(sprinkler_rabi_beans_water_req) * 0.001;
    //    } else {
    //        sprinkler_rabi_beans_waterdemand = parseFloat(Beans_Rabi_Value) * 0 * 0.001;
    //        sprinkler_rabi_beans_water_req = 0;
    //    };

    //    if (sprinkler_rabi_beans_irri_area == "") {
    //        sprinkler_rabi_beans_irri_area = 0;
    //    }

    //    sprinkler_rabi_beans_sprinkler_waterdemand = ((parseFloat(Beans_Rabi_Value) - parseFloat(sprinkler_rabi_beans_irri_area)) * parseFloat(sprinkler_rabi_beans_water_req) * 0.001)
    //        + (parseFloat(sprinkler_rabi_beans_irri_area) * parseFloat(sprinkler_rabi_beans_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_rabi_beans_reduction_gw_demand = parseFloat(sprinkler_rabi_beans_waterdemand).toFixed(2) - parseFloat(sprinkler_rabi_beans_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Rabi_Crops = parseFloat(sprinkler_rabi_beans_waterdemand) + parseFloat(Total_Water_Demand_for_Rabi_Crops);
    //    sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand) + parseFloat(sprinkler_rabi_beans_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand) + parseFloat(sprinkler_rabi_beans_reduction_gw_demand);


    //}

    //Floriculture

    var Floriculture_Rabi_Value = $('#Floriculture_Rabi_Value').val();
    var sprinkler_rabi_floriculture_irri_area = $('#sprinkler_rabi_floriculture_irri_area').val();
    var sprinkler_rabi_floriculture_water_req = $('#sprinkler_rabi_floriculture_water_req').val();
    if (Floriculture_Rabi_Value != "") {
        if (sprinkler_rabi_floriculture_water_req != "") {
            sprinkler_rabi_floriculture_waterdemand = parseFloat(Floriculture_Rabi_Value) * parseFloat(sprinkler_rabi_floriculture_water_req) * 0.001;
        } else {
            sprinkler_rabi_floriculture_waterdemand = parseFloat(Floriculture_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_floriculture_water_req = 0;
        };

        if (sprinkler_rabi_floriculture_irri_area == "") {
            sprinkler_rabi_floriculture_irri_area = 0;
        }
        sprinkler_rabi_floriculture_sprinkler_waterdemand = ((parseFloat(Floriculture_Rabi_Value) - parseFloat(sprinkler_rabi_floriculture_irri_area)) * parseFloat(sprinkler_rabi_floriculture_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_floriculture_irri_area) * parseFloat(sprinkler_rabi_floriculture_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_rabi_floriculture_reduction_gw_demand = sprinkler_rabi_floriculture_waterdemand - sprinkler_rabi_floriculture_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_floriculture_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_floriculture_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_floriculture_reduction_gw_demand;


    }

    //Potato

    //var Potato_Rabi_Value = $('#Potato_Rabi_Value').val();
    //var sprinkler_rabi_potato_irri_area = $('#sprinkler_rabi_potato_irri_area').val();
    //var sprinkler_rabi_potato_water_req = $('#sprinkler_rabi_potato_water_req').val();
    //if (Potato_Rabi_Value != "") {
    //    if (sprinkler_rabi_potato_water_req != "") {
    //        sprinkler_rabi_potato_waterdemand = parseFloat(Potato_Rabi_Value) * parseFloat(sprinkler_rabi_potato_water_req) * 0.001;
    //    } else {
    //        sprinkler_rabi_potato_waterdemand = parseFloat(Potato_Rabi_Value) * 0 * 0.001;
    //        sprinkler_rabi_potato_water_req = 0;
    //    };

    //    if (sprinkler_rabi_potato_irri_area == "") {
    //        sprinkler_rabi_potato_irri_area = 0;
    //    }

    //    sprinkler_rabi_potato_sprinkler_waterdemand = ((parseFloat(Potato_Rabi_Value) - parseFloat(sprinkler_rabi_potato_irri_area)) * parseFloat(sprinkler_rabi_potato_water_req) * 0.001)
    //        + (parseFloat(sprinkler_rabi_potato_irri_area) * parseFloat(sprinkler_rabi_potato_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_rabi_potato_reduction_gw_demand = parseFloat(sprinkler_rabi_potato_waterdemand).toFixed(2) - parseFloat(sprinkler_rabi_potato_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Rabi_Crops = parseFloat(sprinkler_rabi_potato_waterdemand) + parseFloat(Total_Water_Demand_for_Rabi_Crops);
    //    sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand) + parseFloat(sprinkler_rabi_potato_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand) + parseFloat(sprinkler_rabi_potato_reduction_gw_demand);


    //}


    //Cucumber

    //var Cucumber_Rabi_Value = $('#Cucumber_Rabi_Value').val();
    //var sprinkler_rabi_cucumber_irri_area = $('#sprinkler_rabi_cucumber_irri_area').val();
    //var sprinkler_rabi_cucumber_water_req = $('#sprinkler_rabi_cucumber_water_req').val();
    //if (Cucumber_Rabi_Value != "") {

    //    if (sprinkler_rabi_cucumber_water_req != "") {
    //        sprinkler_rabi_cucumber_waterdemand = parseFloat(Cucumber_Rabi_Value) * parseFloat(sprinkler_rabi_cucumber_water_req) * 0.001;
    //    } else {
    //        sprinkler_rabi_cucumber_waterdemand = parseFloat(Cucumber_Rabi_Value) * 0 * 0.001;
    //        sprinkler_rabi_cucumber_water_req = 0;
    //    };

    //    if (sprinkler_rabi_cucumber_irri_area == "") {
    //        sprinkler_rabi_cucumber_irri_area = 0;
    //    }

    //    sprinkler_rabi_cucumber_sprinkler_waterdemand = ((parseFloat(Cucumber_Rabi_Value) - parseFloat(sprinkler_rabi_cucumber_irri_area)) * parseFloat(sprinkler_rabi_cucumber_water_req) * 0.001)
    //        + (parseFloat(sprinkler_rabi_cucumber_irri_area) * parseFloat(sprinkler_rabi_cucumber_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_rabi_cucumber_reduction_gw_demand = parseFloat(sprinkler_rabi_cucumber_waterdemand).toFixed(2) - parseFloat(sprinkler_rabi_cucumber_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Rabi_Crops = parseFloat(sprinkler_rabi_cucumber_waterdemand) + parseFloat(Total_Water_Demand_for_Rabi_Crops);
    //    sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand) + parseFloat(sprinkler_rabi_cucumber_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand) + parseFloat(sprinkler_rabi_cucumber_reduction_gw_demand);


    //}


    //Ragi

    var Ragi_Rabi_Value = $('#Ragi_Rabi_Value').val();
    var sprinkler_rabi_ragi_irri_area = $('#sprinkler_rabi_ragi_irri_area').val();
    var sprinkler_rabi_ragi_water_req = $('#sprinkler_rabi_ragi_water_req').val();
    if (Ragi_Rabi_Value != "") {

        if (sprinkler_rabi_ragi_water_req != "") {
            sprinkler_rabi_ragi_waterdemand = parseFloat(Ragi_Rabi_Value) * parseFloat(sprinkler_rabi_ragi_water_req) * 0.001;
        } else {
            sprinkler_rabi_ragi_waterdemand = parseFloat(Ragi_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_ragi_water_req = 0;
        };

        if (sprinkler_rabi_ragi_irri_area == "") {
            sprinkler_rabi_ragi_irri_area = 0;
        }

        sprinkler_rabi_ragi_sprinkler_waterdemand = ((parseFloat(Ragi_Rabi_Value) - parseFloat(sprinkler_rabi_ragi_irri_area)) * parseFloat(sprinkler_rabi_ragi_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_ragi_irri_area) * parseFloat(sprinkler_rabi_ragi_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_rabi_ragi_reduction_gw_demand = sprinkler_rabi_ragi_waterdemand - sprinkler_rabi_ragi_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_ragi_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_ragi_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_ragi_reduction_gw_demand;


    }

    //Sugarcane

    var Sugarcane_Rabi_Value = $('#Sugarcane_Rabi_Value').val();
    var sprinkler_rabi_sugarcane_irri_area = $('#sprinkler_rabi_sugarcane_irri_area').val();
    var sprinkler_rabi_sugarcane_water_req = $('#sprinkler_rabi_sugarcane_water_req').val();
    if (Sugarcane_Rabi_Value != "") {
        if (sprinkler_rabi_sugarcane_water_req != "") {
            sprinkler_rabi_sugarcane_waterdemand = parseFloat(Sugarcane_Rabi_Value) * parseFloat(sprinkler_rabi_sugarcane_water_req) * 0.001;
        } else {
            sprinkler_rabi_sugarcane_waterdemand = parseFloat(Sugarcane_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_sugarcane_water_req = 0;
        };

        if (sprinkler_rabi_sugarcane_irri_area == "") {
            sprinkler_rabi_sugarcane_irri_area = 0;
        }

        sprinkler_rabi_sugarcane_sprinkler_waterdemand = ((parseFloat(Sugarcane_Rabi_Value) - parseFloat(sprinkler_rabi_sugarcane_irri_area)) * parseFloat(sprinkler_rabi_sugarcane_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_sugarcane_irri_area) * parseFloat(sprinkler_rabi_sugarcane_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_rabi_sugarcane_reduction_gw_demand = sprinkler_rabi_sugarcane_waterdemand - sprinkler_rabi_sugarcane_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_sugarcane_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_sugarcane_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_sugarcane_reduction_gw_demand;

    }


    //Maize

    var Maize_Rabi_Value = $('#Maize_Rabi_Value').val();
    var sprinkler_rabi_maize_irri_area = $('#sprinkler_rabi_maize_irri_area').val();
    var sprinkler_rabi_maize_water_req = $('#sprinkler_rabi_maize_water_req').val();
    if (Maize_Rabi_Value != "") {
        if (sprinkler_rabi_maize_water_req != "") {
            sprinkler_rabi_maize_waterdemand = parseFloat(Maize_Rabi_Value) * parseFloat(sprinkler_rabi_maize_water_req) * 0.001;
        } else {
            sprinkler_rabi_maize_waterdemand = parseFloat(Maize_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_maize_water_req = 0;
        };

        if (sprinkler_rabi_maize_irri_area == "") {
            sprinkler_rabi_maize_irri_area = 0;
        }

        sprinkler_rabi_maize_sprinkler_waterdemand = ((parseFloat(Maize_Rabi_Value) - parseFloat(sprinkler_rabi_maize_irri_area)) * parseFloat(sprinkler_rabi_maize_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_maize_irri_area) * parseFloat(sprinkler_rabi_maize_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_rabi_maize_reduction_gw_demand = sprinkler_rabi_maize_waterdemand - sprinkler_rabi_maize_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_maize_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_maize_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_maize_reduction_gw_demand;

    }


    //Fodder

    var Fodder_Rabi_Value = $('#Fodder_Rabi_Value').val();
    var sprinkler_rabi_fodder_irri_area = $('#sprinkler_rabi_fodder_irri_area').val();
    var sprinkler_rabi_fodder_water_req = $('#sprinkler_rabi_fodder_water_req').val();

    if (Fodder_Rabi_Value != "") {

        if (sprinkler_rabi_fodder_water_req != "") {
            sprinkler_rabi_fodder_waterdemand = parseFloat(Fodder_Rabi_Value) * parseFloat(sprinkler_rabi_fodder_water_req) * 0.001;
        } else {
            sprinkler_rabi_fodder_waterdemand = parseFloat(Fodder_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_fodder_water_req = 0;
        };

        if (sprinkler_rabi_fodder_irri_area == "") {
            sprinkler_rabi_fodder_irri_area = 0;
        }

        sprinkler_rabi_fodder_sprinkler_waterdemand = ((parseFloat(Fodder_Rabi_Value) - parseFloat(sprinkler_rabi_fodder_irri_area)) * parseFloat(sprinkler_rabi_fodder_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_fodder_irri_area) * parseFloat(sprinkler_rabi_fodder_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_rabi_fodder_reduction_gw_demand = sprinkler_rabi_fodder_waterdemand - sprinkler_rabi_fodder_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_fodder_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_fodder_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_fodder_reduction_gw_demand;

    }


    //Paddy

    var Paddy_Rabi_Value = $('#Paddy_Rabi_Value').val();
    var sprinkler_rabi_paddy_irri_area = $('#sprinkler_rabi_paddy_irri_area').val();
    var sprinkler_rabi_paddy_water_req = $('#sprinkler_rabi_paddy_water_req').val();
    if (Paddy_Rabi_Value != "") {
        if (sprinkler_rabi_paddy_water_req != "") {
            sprinkler_rabi_paddy_waterdemand = parseFloat(Paddy_Rabi_Value) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001;
        } else {
            sprinkler_rabi_paddy_waterdemand = parseFloat(Paddy_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_paddy_water_req = 0;
        };

        if (sprinkler_rabi_paddy_irri_area == "") {
            sprinkler_rabi_paddy_irri_area = 0;
        }

        sprinkler_rabi_paddy_sprinkler_waterdemand = ((parseFloat(Paddy_Rabi_Value) - parseFloat(sprinkler_rabi_paddy_irri_area)) * parseFloat(sprinkler_rabi_paddy_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_paddy_irri_area) * parseFloat(sprinkler_rabi_paddy_water_req) * (1 - 30 / 100) * 0.001);




        sprinkler_rabi_paddy_reduction_gw_demand = sprinkler_rabi_paddy_waterdemand - sprinkler_rabi_paddy_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_paddy_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_paddy_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_paddy_reduction_gw_demand;

    }



    //Alfalfa

    var Alfalfa_Rabi_Value = $('#Alfalfa_Rabi_Value').val();
    var sprinkler_rabi_alfalfa_irri_area = $('#sprinkler_rabi_alfalfa_irri_area').val();
    var sprinkler_rabi_alfalfa_water_req = $('#sprinkler_rabi_alfalfa_water_req').val();
    if (Alfalfa_Rabi_Value != "") {
        if (sprinkler_rabi_alfalfa_water_req != "") {
            sprinkler_rabi_alfalfa_waterdemand = parseFloat(Alfalfa_Rabi_Value) * parseFloat(sprinkler_rabi_alfalfa_water_req) * 0.001;
        } else {
            sprinkler_rabi_alfalfa_waterdemand = parseFloat(Alfalfa_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_alfalfa_water_req = 0;
        };

        if (sprinkler_rabi_alfalfa_irri_area == "") {
            sprinkler_rabi_alfalfa_irri_area = 0;
        }

        sprinkler_rabi_alfalfa_sprinkler_waterdemand = ((parseFloat(Alfalfa_Rabi_Value) - parseFloat(sprinkler_rabi_alfalfa_irri_area)) * parseFloat(sprinkler_rabi_alfalfa_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_alfalfa_irri_area) * parseFloat(sprinkler_rabi_alfalfa_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_rabi_alfalfa_reduction_gw_demand = sprinkler_rabi_alfalfa_waterdemand - sprinkler_rabi_alfalfa_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_alfalfa_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_alfalfa_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_alfalfa_reduction_gw_demand;

    }



    //Onion

    //var Onion_Rabi_Value = $('#Onion_Rabi_Value').val();
    //var sprinkler_rabi_onion_irri_area = $('#sprinkler_rabi_onion_irri_area').val();
    //var sprinkler_rabi_onion_water_req = $('#sprinkler_rabi_onion_water_req').val();
    //if (Onion_Rabi_Value != "") {
    //    if (sprinkler_rabi_onion_water_req != "") {
    //        sprinkler_rabi_onion_waterdemand = parseFloat(Onion_Rabi_Value) * parseFloat(sprinkler_rabi_onion_water_req) * 0.001;
    //    } else {
    //        sprinkler_rabi_onion_waterdemand = parseFloat(Onion_Rabi_Value) * 0 * 0.001;
    //        sprinkler_rabi_onion_water_req = 0;
    //    };

    //    if (sprinkler_rabi_onion_irri_area == "") {
    //        sprinkler_rabi_onion_irri_area = 0;
    //    }


    //    sprinkler_rabi_onion_sprinkler_waterdemand = ((parseFloat(Onion_Rabi_Value) - parseFloat(sprinkler_rabi_onion_irri_area)) * parseFloat(sprinkler_rabi_onion_water_req) * 0.001)
    //        + (parseFloat(sprinkler_rabi_onion_irri_area) * parseFloat(sprinkler_rabi_onion_water_req) * (1 - 30 / 100) * 0.001);



    //    sprinkler_rabi_onion_reduction_gw_demand = parseFloat(sprinkler_rabi_onion_waterdemand).toFixed(2) - parseFloat(sprinkler_rabi_onion_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Rabi_Crops = parseFloat(sprinkler_rabi_onion_waterdemand) + parseFloat(Total_Water_Demand_for_Rabi_Crops);
    //    sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand) + parseFloat(sprinkler_rabi_onion_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand) + parseFloat(sprinkler_rabi_onion_reduction_gw_demand);

    //}



    //Hortculture

    var Hortculture_Rabi_Value = $('#Hortculture_Rabi_Value').val();
    var sprinkler_rabi_horticulture_irri_area = $('#sprinkler_rabi_horticulture_irri_area').val();
    var sprinkler_rabi_horticulture_water_req = $('#sprinkler_rabi_horticulture_water_req').val();
    if (Hortculture_Rabi_Value != "") {

        if (sprinkler_rabi_horticulture_water_req != "") {
            sprinkler_rabi_horticulture_waterdemand = parseFloat(Hortculture_Rabi_Value) * parseFloat(sprinkler_rabi_horticulture_water_req) * 0.001;
        } else {
            sprinkler_rabi_horticulture_waterdemand = parseFloat(Hortculture_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_horticulture_water_req = 0;
        };

        if (sprinkler_rabi_horticulture_irri_area == "") {
            sprinkler_rabi_horticulture_irri_area = 0;
        }

        sprinkler_rabi_horticulture_sprinkler_waterdemand = ((parseFloat(Hortculture_Rabi_Value) - parseFloat(sprinkler_rabi_horticulture_irri_area)) * parseFloat(sprinkler_rabi_horticulture_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_horticulture_irri_area) * parseFloat(sprinkler_rabi_horticulture_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_rabi_horticulture_reduction_gw_demand = sprinkler_rabi_horticulture_waterdemand - sprinkler_rabi_horticulture_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_horticulture_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_horticulture_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_horticulture_reduction_gw_demand;

    }


    //Sunflower

    var Sunflower_Rabi_Value = $('#Sunflower_Rabi_Value').val();
    var sprinkler_rabi_sunflower_irri_area = $('#sprinkler_rabi_sunflower_irri_area').val();
    var sprinkler_rabi_sunflower_water_req = $('#sprinkler_rabi_sunflower_water_req').val();
    if (Sunflower_Rabi_Value != "") {
        if (sprinkler_rabi_sunflower_water_req != "") {
            sprinkler_rabi_sunflower_waterdemand = parseFloat(Sunflower_Rabi_Value) * parseFloat(sprinkler_rabi_sunflower_water_req) * 0.001;
        } else {
            sprinkler_rabi_sunflower_waterdemand = parseFloat(Sunflower_Rabi_Value) * 0 * 0.001;
            sprinkler_rabi_sunflower_water_req = 0;
        };

        if (sprinkler_rabi_sunflower_irri_area == "") {
            sprinkler_rabi_sunflower_irri_area = 0;
        }

        sprinkler_rabi_sunflower_sprinkler_waterdemand = ((parseFloat(Sunflower_Rabi_Value) - parseFloat(sprinkler_rabi_sunflower_irri_area)) * parseFloat(sprinkler_rabi_sunflower_water_req) * 0.001)
            + (parseFloat(sprinkler_rabi_sunflower_irri_area) * parseFloat(sprinkler_rabi_sunflower_water_req) * (1 - 30 / 100) * 0.001);

        sprinkler_rabi_sunflower_reduction_gw_demand = sprinkler_rabi_sunflower_waterdemand - sprinkler_rabi_sunflower_sprinkler_waterdemand;

        Total_Water_Demand_for_Rabi_Crops = sprinkler_rabi_sunflower_waterdemand + Total_Water_Demand_for_Rabi_Crops;
        sprinkler_rabi_total_rabi_waterdemand = sprinkler_rabi_total_rabi_waterdemand + sprinkler_rabi_sunflower_sprinkler_waterdemand;
        sprinkler_rabi_total_reduction_waterdemand = sprinkler_rabi_total_reduction_waterdemand + sprinkler_rabi_sunflower_reduction_gw_demand;

    }

    //sprinkler_rabi_othyercrop_waterdemand = 0;
    //sprinkler_rabi_othercrop_sprinkler_waterdemand = 0;
    //sprinkler_rabi_othercrop_reduc_gw_demand = 0;

    //var sprinkler_rabi_othercrop_area = $('#sprinkler_rabi_othercrop_area').val();
    //var sprinkler_rabi_othercrop_irri_area = $('#sprinkler_rabi_othercrop_irri_area').val();
    //var sprinkler_rabi_othercrop_water_req = $('#sprinkler_rabi_othercrop_water_req').val();
    //if (sprinkler_rabi_othercrop_area != "") {
    //    if (sprinkler_rabi_othercrop_water_req != "") {
    //        sprinkler_rabi_othyercrop_waterdemand = parseFloat(sprinkler_rabi_othercrop_area) * parseFloat(sprinkler_rabi_othercrop_water_req) * 0.001;
    //    } else {
    //        sprinkler_rabi_othyercrop_waterdemand = parseFloat(sprinkler_rabi_othercrop_area) * 0 * 0.001;
    //        sprinkler_rabi_othercrop_water_req = 0;
    //    };

    //    if (sprinkler_rabi_othercrop_irri_area == "") {
    //        sprinkler_rabi_othercrop_irri_area = 0;
    //    }

    //    sprinkler_rabi_othercrop_sprinkler_waterdemand = ((parseFloat(sprinkler_rabi_othercrop_area) - parseFloat(sprinkler_rabi_othercrop_irri_area)) * parseFloat(sprinkler_rabi_othercrop_water_req) * 0.001)
    //        + (parseFloat(sprinkler_rabi_othercrop_irri_area) * parseFloat(sprinkler_rabi_othercrop_water_req) * (1 - 30 / 100) * 0.001);

    //    sprinkler_rabi_othercrop_reduc_gw_demand = parseFloat(sprinkler_rabi_othyercrop_waterdemand).toFixed(2) - parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Rabi_Crops = parseFloat(sprinkler_rabi_othyercrop_waterdemand) + parseFloat(Total_Water_Demand_for_Rabi_Crops);
    //    sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand) + parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand) + parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand);

    //}


    $('#Sprinkler_RabiWater_Demand').text(parseFloat(Total_Water_Demand_for_Rabi_Crops).toFixed(2));
    $('#sprinkler_rabi_total_waterdemand').text(parseFloat(Total_Water_Demand_for_Rabi_Crops).toFixed(2));

    $('#sprinkler_rabi_total_rabi_waterdemand').text(parseFloat(sprinkler_rabi_total_rabi_waterdemand).toFixed(2));
    $('#sprinkler_rabi_total_reduction_waterdemand').text(parseFloat(sprinkler_rabi_total_reduction_waterdemand).toFixed(2));


    var sprinkler_kharif_total_reduction_waterdemand1 = $('#sprinkler_kharif_total_reduction_waterdemand').text();
    if (sprinkler_kharif_total_reduction_waterdemand1 != "" && sprinkler_kharif_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_kharif_total_reduction_waterdemand1 = "0";
    }

    var sprinkler_rabi_total_reduction_waterdemand1 = $('#sprinkler_rabi_total_reduction_waterdemand').text();
    if (sprinkler_rabi_total_reduction_waterdemand1 != "" && sprinkler_rabi_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_rabi_total_reduction_waterdemand1 = "0";
    }

    var sprinkler_summer_total_reduction_waterdemand1 = $('#sprinkler_summer_total_reduction_waterdemand').text();
    if (sprinkler_summer_total_reduction_waterdemand1 != "" && sprinkler_summer_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_summer_total_reduction_waterdemand1 = "0";
    }

    
    var TotalAnnual_sprinkler_Reduction = parseFloat(sprinkler_kharif_total_reduction_waterdemand1) + parseFloat(sprinkler_rabi_total_reduction_waterdemand1) + parseFloat(sprinkler_summer_total_reduction_waterdemand1);
    $('#TotalAnnual_sprinkler_Reduction').text(TotalAnnual_sprinkler_Reduction.toFixed(2));
}


function RabiPopUp(SS) {

    Rabi_WaterRequire();
    if (SS == "sprinkler_rabi_sericulture_crop_area") {
        $('#SprinklerName').text("Sericulture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_sericulture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_sericulture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_sericulture_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "sprinkler_rabi_tomoto_crop_area") {
        $('#SprinklerName').text("Tomoto");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_tomoto_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_tomoto_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_tomoto_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "sprinkler_rabi_cabbage_crop_area") {
    //    $('#SprinklerName').text("Cabbage");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_cabbage_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_cabbage_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_cabbage_reduction_gw_demand).toFixed(2));

    //}
    //else if (SS == "sprinkler_rabi_beans_crop_area") {
    //    $('#SprinklerName').text("Beans");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_beans_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_beans_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_beans_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "sprinkler_rabi_floriculture_crop_area") {
        $('#SprinklerName').text("Floriculture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_floriculture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_floriculture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_floriculture_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "sprinkler_rabi_potato_crop_area") {
    //    $('#SprinklerName').text("Potato");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_potato_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_potato_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_potato_reduction_gw_demand).toFixed(2));

    //}
    //else if (SS == "sprinkler_rabi_cucumber_crop_area") {
    //    $('#SprinklerName').text("Cucumber");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_cucumber_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_cucumber_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_cucumber_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "sprinkler_rabi_ragi_crop_area") {
        $('#SprinklerName').text("Ragi");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_ragi_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_ragi_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_ragi_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_rabi_sugarcane_crop_area") {
        $('#SprinklerName').text("Sugarcane");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_sugarcane_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_sugarcane_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_sugarcane_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_rabi_maize_crop_area") {
        $('#SprinklerName').text("Maize");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_maize_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_maize_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_maize_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_rabi_fodder_crop_area") {
        $('#SprinklerName').text("Fodder");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_fodder_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_fodder_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_fodder_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_rabi_paddy_crop_area") {
        $('#SprinklerName').text("Paddy");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_paddy_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_paddy_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_paddy_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_rabi_alfalfa_crop_area") {
        $('#SprinklerName').text("Alfalfa");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_alfalfa_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_alfalfa_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_alfalfa_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "sprinkler_rabi_onion_crop_area") {
    //    $('#SprinklerName').text("Onion");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_onion_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_onion_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_onion_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "sprinkler_rabi_horticulture_crop_area") {
        $('#SprinklerName').text("Horticulture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_horticulture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_horticulture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_horticulture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_rabi_sunflower_crop_area") {
        $('#SprinklerName').text("Sunflower");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_sunflower_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_sunflower_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_sunflower_reduction_gw_demand).toFixed(2));

    }
    //else if (SS == "sprinkler_rabi_othercrop_area") {
    //    var CropName = $('#sprinkler_rabi_othercrop_name').val();
    //    $('#SprinklerName').text(CropName);
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_othyercrop_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand).toFixed(2));

    //}


    else {
        $('#Individual_WaterDemand').text(0);
        $('#Individual_SprinklerWaterDemand').text(0);
        $('#Individual_ReductionGWdemand').text(0);

    }
}



var sprinkler_summer_sericulture_waterdemand = 0;
var sprinkler_summer_sericulture_sprinkler_waterdemand = 0;
var sprinkler_summer_sericulture_reduction_gw_demand = 0;

//var sprinkler_summer_tomoto_waterdemand = 0;
//var sprinkler_summer_tomoto_sprinkler_waterdemand = 0;
//var sprinkler_summer_tomoto_reduction_gw_demand = 0;

//var sprinkler_summer_cabbage_waterdemand = 0;
//var sprinkler_summer_cabbage_sprinkler_waterdemand = 0;
//var sprinkler_summer_cabbage_reduction_gw_demand = 0;

//var sprinkler_summer_beans_waterdemand = 0;
//var sprinkler_summer_beans_sprinkler_waterdemand = 0;
//var sprinkler_summer_beans_reduction_gw_demand = 0;

var sprinkler_summer_floriculture_waterdemand = 0;
var sprinkler_summer_floriculture_sprinkler_waterdemand = 0;
var sprinkler_summer_floriculture_reduction_gw_demand = 0;

var sprinkler_summer_maize_waterdemand = 0;
var sprinkler_summer_maize_sprinkler_waterdemand = 0;
var sprinkler_summer_maize_reduction_gw_demand = 0;

var sprinkler_summer_fodder_waterdemand = 0;
var sprinkler_summer_fodder_sprinkler_waterdemand = 0;
var sprinkler_summer_fodder_reduction_gw_demand = 0;

var sprinkler_summer_sugarcane_waterdemand = 0;
var sprinkler_summer_sugarcane_sprinkler_waterdemand = 0;
var sprinkler_summer_sugarcane_reduction_gw_demand = 0;

//var sprinkler_summer_othyercrop_waterdemand = 0;
//var sprinkler_summer_othercrop_sprinkler_waterdemand = 0;
//var sprinkler_summer_othercrop_reduc_gw_demand = 0;

var Total_Water_Demand_for_Summer_Crops = 0;
var sprinkler_summer_total_reduction_waterdemand = 0;
var sprinkler_summer_total_summer_waterdemand = 0;


var sprinkler_summer_othercrop_waterdemand1 = 0;
var sprinkler_summer_othercrop_sprinkler_waterdemand1 = 0;
var sprinkler_summer_othercrop_reduc_gw_demand1 = 0;

var sprinkler_summer_othercrop_waterdemand2 = 0;
var sprinkler_summer_othercrop_sprinkler_waterdemand2 = 0;
var sprinkler_summer_othercrop_reduc_gw_demand2 = 0;

var sprinkler_summer_othercrop_waterdemand3 = 0;
var sprinkler_summer_othercrop_sprinkler_waterdemand3 = 0;
var sprinkler_summer_othercrop_reduc_gw_demand3 = 0;

var sprinkler_summer_othercrop_waterdemand4 = 0;
var sprinkler_summer_othercrop_sprinkler_waterdemand4 = 0;
var sprinkler_summer_othercrop_reduc_gw_demand4 = 0;

var sprinkler_summer_othercrop_waterdemand5 = 0;
var sprinkler_summer_othercrop_sprinkler_waterdemand5 = 0;
var sprinkler_summer_othercrop_reduc_gw_demand5 = 0;


var sprinkler_summer_horticulture_waterdemand = 0;
var sprinkler_summer_horticulture_netwater_waterdemand = 0;
var sprinkler_summer_horticulture_reduction_gw_demand = 0;
function Crop_WaterRequire() {



    Total_Water_Demand_for_Summer_Crops = 0;
    sprinkler_summer_total_reduction_waterdemand = 0;
    sprinkler_summer_total_summer_waterdemand = 0;
    sprinkler_summer_sericulture_waterdemand = 0;
    sprinkler_summer_sericulture_sprinkler_waterdemand = 0;
    sprinkler_summer_sericulture_reduction_gw_demand = 0;

    sprinkler_summer_tomoto_waterdemand = 0;
    sprinkler_summer_tomoto_sprinkler_waterdemand = 0;
    sprinkler_summer_tomoto_reduction_gw_demand = 0;

    //sprinkler_summer_cabbage_waterdemand = 0;
    //sprinkler_summer_cabbage_sprinkler_waterdemand = 0;
    //sprinkler_summer_cabbage_reduction_gw_demand = 0;

    //sprinkler_summer_beans_waterdemand = 0;
    //sprinkler_summer_beans_sprinkler_waterdemand = 0;
    //sprinkler_summer_beans_reduction_gw_demand = 0;

    sprinkler_summer_floriculture_waterdemand = 0;
    sprinkler_summer_floriculture_sprinkler_waterdemand = 0;
    sprinkler_summer_floriculture_reduction_gw_demand = 0;

    sprinkler_summer_maize_waterdemand = 0;
    sprinkler_summer_maize_sprinkler_waterdemand = 0;
    sprinkler_summer_maize_reduction_gw_demand = 0;

    sprinkler_summer_fodder_waterdemand = 0;
    sprinkler_summer_fodder_sprinkler_waterdemand = 0;
    sprinkler_summer_fodder_reduction_gw_demand = 0;

    sprinkler_summer_sugarcane_waterdemand = 0;
    sprinkler_summer_sugarcane_sprinkler_waterdemand = 0;
    sprinkler_summer_sugarcane_reduction_gw_demand = 0;


    //Latest Code

    sprinkler_summer_othercrop_waterdemand1 = 0;
    sprinkler_summer_othercrop_sprinkler_waterdemand1 = 0;
    sprinkler_summer_othercrop_reduc_gw_demand1 = 0;

    sprinkler_summer_othercrop_waterdemand2 = 0;
    sprinkler_summer_othercrop_sprinkler_waterdemand2 = 0;
    sprinkler_summer_othercrop_reduc_gw_demand2 = 0;

    sprinkler_summer_othercrop_waterdemand3 = 0;
    sprinkler_summer_othercrop_sprinkler_waterdemand3 = 0;
    sprinkler_summer_othercrop_reduc_gw_demand3 = 0;

    sprinkler_summer_othercrop_waterdemand4 = 0;
    sprinkler_summer_othercrop_sprinkler_waterdemand4 = 0;
    sprinkler_summer_othercrop_reduc_gw_demand4 = 0;

    sprinkler_summer_othercrop_waterdemand5 = 0;
    sprinkler_summer_othercrop_sprinkler_waterdemand5 = 0;
    sprinkler_summer_othercrop_reduc_gw_demand5 = 0;


    sprinkler_summer_horticulture_waterdemand = 0;
    sprinkler_summer_horticulture_netwater_waterdemand = 0;
    sprinkler_summer_horticulture_reduction_gw_demand = 0;

    var sprinkler_summer_horticulture_crop_area = $('#sprinkler_summer_horticulture_crop_area').val();
    var sprinkler_summer_horticulture_irri_area = $('#sprinkler_summer_horticulture_irri_area').val();
    var sprinkler_summer_horticulture_water_req = $('#sprinkler_summer_horticulture_water_req').val();

    if (sprinkler_summer_horticulture_crop_area != "") {

        if (sprinkler_summer_horticulture_water_req != "") {
            sprinkler_summer_horticulture_waterdemand = parseFloat(sprinkler_summer_horticulture_crop_area) * parseFloat(sprinkler_summer_horticulture_water_req) * 0.001;
        } else {
            sprinkler_summer_horticulture_waterdemand = parseFloat(sprinkler_summer_horticulture_crop_area) * 0 * 0.001;
            sprinkler_summer_horticulture_water_req = 0;
        }


        if (sprinkler_summer_horticulture_irri_area == "") {
            sprinkler_summer_horticulture_irri_area = 0;
        }
        sprinkler_summer_horticulture_netwater_waterdemand = ((parseFloat(sprinkler_summer_horticulture_crop_area) - parseFloat(sprinkler_summer_horticulture_irri_area)) * parseFloat(sprinkler_summer_horticulture_water_req) * 0.001) + (parseFloat(sprinkler_summer_horticulture_irri_area) * parseFloat(sprinkler_summer_horticulture_water_req) * (1 - 30 / 100) * 0.001);

        // sprinkler_summer_paddy_sprinkler_waterdemand = ((parseFloat(summer_Paddy_UserValue) - parseFloat(sprinkler_summer_paddy_irri_area)) * parseFloat(sprinkler_summer_paddy_water_req) * 0.001) + (parseFloat(sprinkler_summer_paddy_irri_area) * parseFloat(sprinkler_summer_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_summer_horticulture_reduction_gw_demand = sprinkler_summer_horticulture_waterdemand - sprinkler_summer_horticulture_netwater_waterdemand;
        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_horticulture_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_horticulture_netwater_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_horticulture_reduction_gw_demand;
        //summer_Paddy_SavingValue

    }





    var sprinkler_summer_othercrop_area1 = $('#sprinkler_summer_othercrop_area1').val();
    if (typeof sprinkler_summer_othercrop_area1 == 'undefined') {
        sprinkler_summer_othercrop_area1 = 0;
    }
    var sprinkler_summer_othercrop_irri_area1 = $('#sprinkler_summer_othercrop_irri_area1').val();
    if (typeof sprinkler_summer_othercrop_irri_area1 == 'undefined') {
        sprinkler_summer_othercrop_irri_area1 = 0;
    }
    var sprinkler_summer_othercrop_water_req1 = $('#sprinkler_summer_othercrop_water_req1').val();
    if (typeof sprinkler_summer_othercrop_water_req1 == 'undefined') {
        sprinkler_summer_othercrop_water_req1 = 0;
    }

    if (sprinkler_summer_othercrop_area1 != "") {

        if (sprinkler_summer_othercrop_water_req1 != "") {
            sprinkler_summer_othercrop_waterdemand1 = parseFloat(sprinkler_summer_othercrop_area1) * parseFloat(sprinkler_summer_othercrop_water_req1) * 0.001;
        } else {
            sprinkler_summer_othercrop_waterdemand1 = parseFloat(sprinkler_summer_othercrop_area1) * 0 * 0.001;
            sprinkler_summer_othercrop_water_req1 = 0;
        }


        if (sprinkler_summer_othercrop_irri_area1 == "") {
            sprinkler_summer_othercrop_irri_area1 = 0;
        }
        sprinkler_summer_othercrop_sprinkler_waterdemand1 = ((parseFloat(sprinkler_summer_othercrop_area1) - parseFloat(sprinkler_summer_othercrop_irri_area1)) * parseFloat(sprinkler_summer_othercrop_water_req1) * 0.001) + (parseFloat(sprinkler_summer_othercrop_irri_area1) * parseFloat(sprinkler_summer_othercrop_water_req1) * (1 - 30 / 100) * 0.001);

        // sprinkler_summer_paddy_sprinkler_waterdemand = ((parseFloat(summer_Paddy_UserValue) - parseFloat(sprinkler_summer_paddy_irri_area)) * parseFloat(sprinkler_summer_paddy_water_req) * 0.001) + (parseFloat(sprinkler_summer_paddy_irri_area) * parseFloat(sprinkler_summer_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_summer_othercrop_reduc_gw_demand1 = sprinkler_summer_othercrop_waterdemand1 - sprinkler_summer_othercrop_sprinkler_waterdemand1;
        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_othercrop_waterdemand1 + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_othercrop_sprinkler_waterdemand1;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_othercrop_reduc_gw_demand1;
        //summer_Paddy_SavingValue

    }

    var sprinkler_summer_othercrop_area2 = $('#sprinkler_summer_othercrop_area2').val();
    if (typeof sprinkler_summer_othercrop_area2 == 'undefined') {
        sprinkler_summer_othercrop_area2 = 0;
    }
    var sprinkler_summer_othercrop_irri_area2 = $('#sprinkler_summer_othercrop_irri_area2').val();
    if (typeof sprinkler_summer_othercrop_irri_area2 == 'undefined') {
        sprinkler_summer_othercrop_irri_area2 = 0;
    }
    var sprinkler_summer_othercrop_water_req2 = $('#sprinkler_summer_othercrop_water_req2').val();
    if (typeof sprinkler_summer_othercrop_water_req2 == 'undefined') {
        sprinkler_summer_othercrop_water_req2 = 0;
    }

    if (sprinkler_summer_othercrop_area2 != "") {

        if (sprinkler_summer_othercrop_water_req2 != "") {
            sprinkler_summer_othercrop_waterdemand2 = parseFloat(sprinkler_summer_othercrop_area2) * parseFloat(sprinkler_summer_othercrop_water_req2) * 0.001;
        } else {
            sprinkler_summer_othercrop_waterdemand2 = parseFloat(sprinkler_summer_othercrop_area2) * 0 * 0.001;
            sprinkler_summer_othercrop_water_req2 = 0;
        }
        if (sprinkler_summer_othercrop_irri_area2 == "") {
            sprinkler_summer_othercrop_irri_area2 = 0;
        }
        sprinkler_summer_othercrop_sprinkler_waterdemand2 = ((parseFloat(sprinkler_summer_othercrop_area2) - parseFloat(sprinkler_summer_othercrop_irri_area2)) * parseFloat(sprinkler_summer_othercrop_water_req2) * 0.001) + (parseFloat(sprinkler_summer_othercrop_irri_area2) * parseFloat(sprinkler_summer_othercrop_water_req2) * (1 - 30 / 100) * 0.001);

        // sprinkler_summer_paddy_sprinkler_waterdemand = ((parseFloat(summer_Paddy_UserValue) - parseFloat(sprinkler_summer_paddy_irri_area)) * parseFloat(sprinkler_summer_paddy_water_req) * 0.001) + (parseFloat(sprinkler_summer_paddy_irri_area) * parseFloat(sprinkler_summer_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_summer_othercrop_reduc_gw_demand2 = sprinkler_summer_othercrop_waterdemand2 - sprinkler_summer_othercrop_sprinkler_waterdemand2;
        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_othercrop_waterdemand2 + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_othercrop_sprinkler_waterdemand2;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_othercrop_reduc_gw_demand2;
        //summer_Paddy_SavingValue

    }



    var sprinkler_summer_othercrop_area3 = $('#sprinkler_summer_othercrop_area3').val();
    if (typeof sprinkler_summer_othercrop_area3 == 'undefined') {
        sprinkler_summer_othercrop_area3 = 0;
    }
    var sprinkler_summer_othercrop_irri_area3 = $('#sprinkler_summer_othercrop_irri_area3').val();
    if (typeof sprinkler_summer_othercrop_irri_area3 == 'undefined') {
        sprinkler_summer_othercrop_irri_area3 = 0;
    }
    var sprinkler_summer_othercrop_water_req3 = $('#sprinkler_summer_othercrop_water_req3').val();
    if (typeof sprinkler_summer_othercrop_water_req3 == 'undefined') {
        sprinkler_summer_othercrop_water_req3 = 0;
    }

    if (sprinkler_summer_othercrop_area3 != "") {

        if (sprinkler_summer_othercrop_water_req3 != "") {
            sprinkler_summer_othercrop_waterdemand3 = parseFloat(sprinkler_summer_othercrop_area3) * parseFloat(sprinkler_summer_othercrop_water_req3) * 0.001;
        } else {
            sprinkler_summer_othercrop_waterdemand3 = parseFloat(sprinkler_summer_othercrop_area3) * 0 * 0.001;
            sprinkler_summer_othercrop_water_req3 = 0;
        }
        if (sprinkler_summer_othercrop_irri_area3 == "") {
            sprinkler_summer_othercrop_irri_area3 = 0;
        }
        sprinkler_summer_othercrop_sprinkler_waterdemand3 = ((parseFloat(sprinkler_summer_othercrop_area3) - parseFloat(sprinkler_summer_othercrop_irri_area3)) * parseFloat(sprinkler_summer_othercrop_water_req3) * 0.001) + (parseFloat(sprinkler_summer_othercrop_irri_area3) * parseFloat(sprinkler_summer_othercrop_water_req3) * (1 - 30 / 100) * 0.001);

        // sprinkler_summer_paddy_sprinkler_waterdemand = ((parseFloat(summer_Paddy_UserValue) - parseFloat(sprinkler_summer_paddy_irri_area)) * parseFloat(sprinkler_summer_paddy_water_req) * 0.001) + (parseFloat(sprinkler_summer_paddy_irri_area) * parseFloat(sprinkler_summer_paddy_water_req) * (1 - 30 / 100) * 0.001);
        sprinkler_summer_othercrop_reduc_gw_demand3 = sprinkler_summer_othercrop_waterdemand3 - sprinkler_summer_othercrop_sprinkler_waterdemand3;
        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_othercrop_waterdemand3 + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_othercrop_sprinkler_waterdemand3;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_othercrop_reduc_gw_demand3;
        //summer_Paddy_SavingValue

    }

    var sprinkler_summer_othercrop_area4 = $('#sprinkler_summer_othercrop_area4').val();
    if (typeof sprinkler_summer_othercrop_area4 == 'undefined') {
        sprinkler_summer_othercrop_area4 = 0;
    }
    var sprinkler_summer_othercrop_irri_area4 = $('#sprinkler_summer_othercrop_irri_area4').val();
    if (typeof sprinkler_summer_othercrop_irri_area4 == 'undefined') {
        sprinkler_summer_othercrop_irri_area4 = 0;
    }
    var sprinkler_summer_othercrop_water_req4 = $('#sprinkler_summer_othercrop_water_req4').val();
    if (typeof sprinkler_summer_othercrop_water_req4 == 'undefined') {
        sprinkler_summer_othercrop_water_req4 = 0;
    }

    if (sprinkler_summer_othercrop_area4 != "") {

        if (sprinkler_summer_othercrop_water_req4 != "") {
            sprinkler_summer_othercrop_waterdemand4 = parseFloat(sprinkler_summer_othercrop_area4) * parseFloat(sprinkler_summer_othercrop_water_req4) * 0.001;
        } else {
            sprinkler_summer_othercrop_waterdemand4 = parseFloat(sprinkler_summer_othercrop_area4) * 0 * 0.001;
            sprinkler_summer_othercrop_water_req4 = 0;
        }
        if (sprinkler_summer_othercrop_irri_area4 == "") {
            sprinkler_summer_othercrop_irri_area4 = 0;
        }
        sprinkler_summer_othercrop_sprinkler_waterdemand4 = ((parseFloat(sprinkler_summer_othercrop_area4) - parseFloat(sprinkler_summer_othercrop_irri_area4)) * parseFloat(sprinkler_summer_othercrop_water_req4) * 0.001) + (parseFloat(sprinkler_summer_othercrop_irri_area4) * parseFloat(sprinkler_summer_othercrop_water_req4) * (1 - 40 / 100) * 0.001);

        // sprinkler_summer_paddy_sprinkler_waterdemand = ((parseFloat(summer_Paddy_UserValue) - parseFloat(sprinkler_summer_paddy_irri_area)) * parseFloat(sprinkler_summer_paddy_water_req) * 0.001) + (parseFloat(sprinkler_summer_paddy_irri_area) * parseFloat(sprinkler_summer_paddy_water_req) * (1 - 40 / 100) * 0.001);
        sprinkler_summer_othercrop_reduc_gw_demand4 = sprinkler_summer_othercrop_waterdemand4 - sprinkler_summer_othercrop_sprinkler_waterdemand4;
        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_othercrop_waterdemand4 + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_othercrop_sprinkler_waterdemand4;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_othercrop_reduc_gw_demand4;
        //summer_Paddy_SavingValue

    }

    var sprinkler_summer_othercrop_area5 = $('#sprinkler_summer_othercrop_area5').val();
    if (typeof sprinkler_summer_othercrop_area5 == 'undefined') {
        sprinkler_summer_othercrop_area5 = 0;
    }
    var sprinkler_summer_othercrop_irri_area5 = $('#sprinkler_summer_othercrop_irri_area5').val();
    if (typeof sprinkler_summer_othercrop_irri_area5 == 'undefined') {
        sprinkler_summer_othercrop_irri_area5 = 0;
    }
    var sprinkler_summer_othercrop_water_req5 = $('#sprinkler_summer_othercrop_water_req5').val();
    if (typeof sprinkler_summer_othercrop_water_req5 == 'undefined') {
        sprinkler_summer_othercrop_water_req5 = 0;
    }

    if (sprinkler_summer_othercrop_area5 != "") {

        if (sprinkler_summer_othercrop_water_req5 != "") {
            sprinkler_summer_othercrop_waterdemand5 = parseFloat(sprinkler_summer_othercrop_area5) * parseFloat(sprinkler_summer_othercrop_water_req5) * 0.001;
        } else {
            sprinkler_summer_othercrop_waterdemand5 = parseFloat(sprinkler_summer_othercrop_area5) * 0 * 0.001;
            sprinkler_summer_othercrop_water_req5 = 0;
        }
        if (sprinkler_summer_othercrop_irri_area5 == "") {
            sprinkler_summer_othercrop_irri_area5 = 0;
        }
        sprinkler_summer_othercrop_sprinkler_waterdemand5 = ((parseFloat(sprinkler_summer_othercrop_area5) - parseFloat(sprinkler_summer_othercrop_irri_area5)) * parseFloat(sprinkler_summer_othercrop_water_req5) * 0.001) + (parseFloat(sprinkler_summer_othercrop_irri_area5) * parseFloat(sprinkler_summer_othercrop_water_req5) * (1 - 50 / 100) * 0.001);

        // sprinkler_summer_paddy_sprinkler_waterdemand = ((parseFloat(summer_Paddy_UserValue) - parseFloat(sprinkler_summer_paddy_irri_area)) * parseFloat(sprinkler_summer_paddy_water_req) * 0.001) + (parseFloat(sprinkler_summer_paddy_irri_area) * parseFloat(sprinkler_summer_paddy_water_req) * (1 - 50 / 100) * 0.001);
        sprinkler_summer_othercrop_reduc_gw_demand5 = sprinkler_summer_othercrop_waterdemand5 - sprinkler_summer_othercrop_sprinkler_waterdemand5;
        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_othercrop_waterdemand5 + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_othercrop_sprinkler_waterdemand5;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_othercrop_reduc_gw_demand5;
        //summer_Paddy_SavingValue

    }


    //Sericulture

    var Sericulture_Crop_Value = $('#Sericulture_Crop_Value').val();
    var sprinkler_summer_sericulture_irri_area = $('#sprinkler_summer_sericulture_irri_area').val();
    var sprinkler_summer_sericulture_water_req = $('#sprinkler_summer_sericulture_water_req').val();
    if (Sericulture_Crop_Value != "") {

        if (sprinkler_summer_sericulture_water_req != "") {
            sprinkler_summer_sericulture_waterdemand = parseFloat(Sericulture_Crop_Value) * parseFloat(sprinkler_summer_sericulture_water_req) * 0.001;
        } else {
            sprinkler_summer_sericulture_waterdemand = parseFloat(Sericulture_Crop_Value) * 0 * 0.001;
            sprinkler_summer_sericulture_water_req = 0;
        };


        if (sprinkler_summer_sericulture_irri_area == "") {
            sprinkler_summer_sericulture_irri_area = 0;
        }


        sprinkler_summer_sericulture_sprinkler_waterdemand = ((parseFloat(Sericulture_Crop_Value) - parseFloat(sprinkler_summer_sericulture_irri_area)) * parseFloat(sprinkler_summer_sericulture_water_req) * 0.001)
            + (parseFloat(sprinkler_summer_sericulture_irri_area) * parseFloat(sprinkler_summer_sericulture_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_summer_sericulture_reduction_gw_demand = sprinkler_summer_sericulture_waterdemand - sprinkler_summer_sericulture_sprinkler_waterdemand;

        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_sericulture_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_sericulture_sprinkler_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_sericulture_reduction_gw_demand;

    }


    //Tomota

    var Tomota_Crop_Value = $('#Tomota_Crop_Value').val();
    var sprinkler_summer_tomoto_irri_area = $('#sprinkler_summer_tomoto_irri_area').val();
    var sprinkler_summer_tomoto_water_req = $('#sprinkler_summer_tomoto_water_req').val();
    if (Tomota_Crop_Value != "") {
        if (sprinkler_summer_tomoto_water_req != "") {
            sprinkler_summer_tomoto_waterdemand = parseFloat(Tomota_Crop_Value) * parseFloat(sprinkler_summer_tomoto_water_req) * 0.001;
        } else {
            sprinkler_summer_tomoto_waterdemand = parseFloat(Tomota_Crop_Value) * 0 * 0.001;
            sprinkler_summer_tomoto_water_req = 0;
        };



        if (sprinkler_summer_tomoto_irri_area == "") {
            sprinkler_summer_tomoto_irri_area = 0;
        }


        sprinkler_summer_tomoto_sprinkler_waterdemand = ((parseFloat(Tomota_Crop_Value) - parseFloat(sprinkler_summer_tomoto_irri_area)) * parseFloat(sprinkler_summer_tomoto_water_req) * 0.001)
            + (parseFloat(sprinkler_summer_tomoto_irri_area) * parseFloat(sprinkler_summer_tomoto_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_summer_tomoto_reduction_gw_demand = sprinkler_summer_tomoto_waterdemand - sprinkler_summer_tomoto_sprinkler_waterdemand;

        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_tomoto_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_tomoto_sprinkler_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_tomoto_reduction_gw_demand;

    }


    //Cabbage

    //var Cabbage_Crop_Value = $('#Cabbage_Crop_Value').val();
    //var sprinkler_summer_cabbage_irri_area = $('#sprinkler_summer_cabbage_irri_area').val();
    //var sprinkler_summer_cabbage_water_req = $('#sprinkler_summer_cabbage_water_req').val();
    //if (Cabbage_Crop_Value != "") {
    //    if (sprinkler_summer_cabbage_water_req != "") {
    //        sprinkler_summer_cabbage_waterdemand = parseFloat(Cabbage_Crop_Value) * parseFloat(sprinkler_summer_cabbage_water_req) * 0.001;
    //    } else {
    //        sprinkler_summer_cabbage_waterdemand = parseFloat(Cabbage_Crop_Value) * 0 * 0.001;
    //        sprinkler_summer_cabbage_waterdemand = 0;
    //    };


    //    if (sprinkler_summer_cabbage_irri_area == "") {
    //        sprinkler_summer_cabbage_irri_area = 0;
    //    }


    //    sprinkler_summer_cabbage_sprinkler_waterdemand = ((parseFloat(Cabbage_Crop_Value) - parseFloat(sprinkler_summer_cabbage_irri_area)) * parseFloat(sprinkler_summer_cabbage_water_req) * 0.001)
    //        + (parseFloat(sprinkler_summer_cabbage_irri_area) * parseFloat(sprinkler_summer_cabbage_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_summer_cabbage_reduction_gw_demand = parseFloat(sprinkler_summer_cabbage_waterdemand).toFixed(2) - parseFloat(sprinkler_summer_cabbage_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Summer_Crops = parseFloat(sprinkler_summer_cabbage_waterdemand) + parseFloat(Total_Water_Demand_for_Summer_Crops);
    //    sprinkler_summer_total_summer_waterdemand = parseFloat(sprinkler_summer_total_summer_waterdemand) + parseFloat(sprinkler_summer_cabbage_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_summer_total_reduction_waterdemand = parseFloat(sprinkler_summer_total_reduction_waterdemand) + parseFloat(sprinkler_summer_cabbage_reduction_gw_demand);

    //}

    //Beans

    //var Beans_Crop_Value = $('#Beans_Crop_Value').val();
    //var sprinkler_summer_beans_irri_area = $('#sprinkler_summer_beans_irri_area').val();
    //var sprinkler_summer_beans_water_req = $('#sprinkler_summer_beans_water_req').val();
    //if (Beans_Crop_Value != "") {

    //    if (sprinkler_summer_beans_water_req != "") {
    //        sprinkler_summer_beans_waterdemand = parseFloat(Beans_Crop_Value) * parseFloat(sprinkler_summer_beans_water_req) * 0.001;
    //    } else {
    //        sprinkler_summer_beans_waterdemand = parseFloat(Beans_Crop_Value) * 0 * 0.001;
    //        sprinkler_summer_beans_water_req = 0;
    //    };
    //    // sprinkler_summer_beans_waterdemand = parseFloat(Beans_Crop_Value) * 400 * 0.001;

    //    if (sprinkler_summer_beans_irri_area == "") {
    //        sprinkler_summer_beans_irri_area = 0;
    //    }


    //    sprinkler_summer_beans_sprinkler_waterdemand = ((parseFloat(Beans_Crop_Value) - parseFloat(sprinkler_summer_beans_irri_area)) * parseFloat(sprinkler_summer_beans_water_req) * 0.001)
    //        + (parseFloat(sprinkler_summer_beans_irri_area) * parseFloat(sprinkler_summer_beans_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_summer_beans_reduction_gw_demand = parseFloat(sprinkler_summer_beans_waterdemand).toFixed(2) - parseFloat(sprinkler_summer_beans_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Summer_Crops = parseFloat(sprinkler_summer_beans_waterdemand) + parseFloat(Total_Water_Demand_for_Summer_Crops);
    //    sprinkler_summer_total_summer_waterdemand = parseFloat(sprinkler_summer_total_summer_waterdemand) + parseFloat(sprinkler_summer_beans_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_summer_total_reduction_waterdemand = parseFloat(sprinkler_summer_total_reduction_waterdemand) + parseFloat(sprinkler_summer_beans_reduction_gw_demand);

    //}

    //Floriculture

    var Floriculture_Crop_Value = $('#Floriculture_Crop_Value').val();
    var sprinkler_summer_floriculture_irri_area = $('#sprinkler_summer_floriculture_irri_area').val();
    var sprinkler_summer_floriculture_water_req = $('#sprinkler_summer_floriculture_water_req').val();
    if (Floriculture_Crop_Value != "") {
        if (sprinkler_summer_floriculture_water_req != "") {
            sprinkler_summer_floriculture_waterdemand = parseFloat(Floriculture_Crop_Value) * parseFloat(sprinkler_summer_floriculture_water_req) * 0.001;
        } else {
            sprinkler_summer_floriculture_waterdemand = parseFloat(Floriculture_Crop_Value) * 0 * 0.001;
            sprinkler_summer_floriculture_water_req = 0;
        };
        //sprinkler_summer_floriculture_waterdemand = parseFloat(Floriculture_Crop_Value) * 1200 * 0.001;

        if (sprinkler_summer_floriculture_irri_area == "") {
            sprinkler_summer_floriculture_irri_area = 0;
        }


        sprinkler_summer_floriculture_sprinkler_waterdemand = ((parseFloat(Floriculture_Crop_Value) - parseFloat(sprinkler_summer_floriculture_irri_area)) * parseFloat(sprinkler_summer_floriculture_water_req) * 0.001)
            + (parseFloat(sprinkler_summer_floriculture_irri_area) * parseFloat(sprinkler_summer_floriculture_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_summer_floriculture_reduction_gw_demand = sprinkler_summer_floriculture_waterdemand - sprinkler_summer_floriculture_sprinkler_waterdemand;

        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_floriculture_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_floriculture_sprinkler_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_floriculture_reduction_gw_demand;

    }


    //Maize

    var Maize_Crop_Value = $('#Maize_Crop_Value').val();
    var sprinkler_summer_maize_irri_area = $('#sprinkler_summer_maize_irri_area').val();
    var sprinkler_summer_maize_water_req = $('#sprinkler_summer_maize_water_req').val();
    if (Maize_Crop_Value != "") {
        if (sprinkler_summer_maize_water_req != "") {
            sprinkler_summer_maize_waterdemand = parseFloat(Maize_Crop_Value) * parseFloat(sprinkler_summer_maize_water_req) * 0.001;
        } else {
            sprinkler_summer_maize_waterdemand = parseFloat(Maize_Crop_Value) * 0 * 0.001;
            sprinkler_summer_maize_water_req = 0;
        };


        if (sprinkler_summer_maize_irri_area == "") {
            sprinkler_summer_maize_irri_area = 0;
        }


        sprinkler_summer_maize_sprinkler_waterdemand = ((parseFloat(Maize_Crop_Value) - parseFloat(sprinkler_summer_maize_irri_area)) * parseFloat(sprinkler_summer_maize_water_req) * 0.001)
            + (parseFloat(sprinkler_summer_maize_irri_area) * parseFloat(sprinkler_summer_maize_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_summer_maize_reduction_gw_demand = sprinkler_summer_maize_waterdemand - sprinkler_summer_maize_sprinkler_waterdemand;

        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_maize_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_maize_sprinkler_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_maize_reduction_gw_demand;

    }


    //Fodder

    var Fodder_Crop_Value = $('#Fodder_Crop_Value').val();
    var sprinkler_summer_fodder_irri_area = $('#sprinkler_summer_fodder_irri_area').val();
    var sprinkler_summer_fodder_water_req = $('#sprinkler_summer_fodder_water_req').val();
    if (Fodder_Crop_Value != "") {
        if (sprinkler_summer_fodder_water_req != "") {
            sprinkler_summer_fodder_waterdemand = parseFloat(Fodder_Crop_Value) * parseFloat(sprinkler_summer_fodder_water_req) * 0.001;
        } else {
            sprinkler_summer_fodder_waterdemand = parseFloat(Fodder_Crop_Value) * 0 * 0.001;
            sprinkler_summer_fodder_water_req = 0;
        };



        if (sprinkler_summer_fodder_irri_area == "") {
            sprinkler_summer_fodder_irri_area = 0;
        }

        sprinkler_summer_fodder_sprinkler_waterdemand = ((parseFloat(Fodder_Crop_Value) - parseFloat(sprinkler_summer_fodder_irri_area)) * parseFloat(sprinkler_summer_fodder_water_req) * 0.001)
            + (parseFloat(sprinkler_summer_fodder_irri_area) * parseFloat(sprinkler_summer_fodder_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_summer_fodder_reduction_gw_demand = sprinkler_summer_fodder_waterdemand - sprinkler_summer_fodder_sprinkler_waterdemand;

        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_fodder_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_fodder_sprinkler_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_fodder_reduction_gw_demand;

    }



    //Sugarcane

    var Sugarcane_Crop_Value = $('#Sugarcane_Crop_Value').val();
    var sprinkler_summer_sugarcane_irri_area = $('#sprinkler_summer_sugarcane_irri_area').val();
    var sprinkler_summer_sugarcane_water_req = $('#sprinkler_summer_sugarcane_water_req').val();
    if (Sugarcane_Crop_Value != "") {
        if (sprinkler_summer_sugarcane_water_req != "") {
            sprinkler_summer_sugarcane_waterdemand = parseFloat(Sugarcane_Crop_Value) * parseFloat(sprinkler_summer_sugarcane_water_req) * 0.001;
        } else {
            sprinkler_summer_sugarcane_waterdemand = parseFloat(Sugarcane_Crop_Value) * 0 * 0.001;
            sprinkler_summer_sugarcane_water_req = 0;
        };

        if (sprinkler_summer_sugarcane_irri_area == "") {
            sprinkler_summer_sugarcane_irri_area = 0;
        }


        sprinkler_summer_sugarcane_sprinkler_waterdemand = ((parseFloat(Sugarcane_Crop_Value) - parseFloat(sprinkler_summer_sugarcane_irri_area)) * parseFloat(sprinkler_summer_sugarcane_water_req) * 0.001)
            + (parseFloat(sprinkler_summer_sugarcane_irri_area) * parseFloat(sprinkler_summer_sugarcane_water_req) * (1 - 30 / 100) * 0.001);


        sprinkler_summer_sugarcane_reduction_gw_demand = sprinkler_summer_sugarcane_waterdemand - sprinkler_summer_sugarcane_sprinkler_waterdemand;

        Total_Water_Demand_for_Summer_Crops = sprinkler_summer_sugarcane_waterdemand + Total_Water_Demand_for_Summer_Crops;
        sprinkler_summer_total_summer_waterdemand = sprinkler_summer_total_summer_waterdemand + sprinkler_summer_sugarcane_sprinkler_waterdemand;
        sprinkler_summer_total_reduction_waterdemand = sprinkler_summer_total_reduction_waterdemand + sprinkler_summer_sugarcane_reduction_gw_demand;

    }

    sprinkler_summer_othyercrop_waterdemand = 0;
    sprinkler_summer_othercrop_sprinkler_waterdemand = 0;
    sprinkler_summer_othercrop_reduc_gw_demand = 0;

    //other crop
    //var sprinkler_summer_othercrop_area = $('#sprinkler_summer_othercrop_area').val();
    //var sprinkler_summer_othercrop_irri_area = $('#sprinkler_summer_othercrop_irri_area').val();
    //var sprinkler_summer_othercrop_water_req = $('#sprinkler_summer_othercrop_water_req').val();
    //if (sprinkler_summer_othercrop_area != "") {
    //    if (sprinkler_summer_othercrop_water_req != "") {
    //        sprinkler_summer_othyercrop_waterdemand = parseFloat(sprinkler_summer_othercrop_area) * parseFloat(sprinkler_summer_othercrop_water_req) * 0.001;
    //    } else {
    //        sprinkler_summer_othyercrop_waterdemand = parseFloat(sprinkler_summer_othercrop_area) * 0 * 0.001;
    //        sprinkler_summer_othercrop_water_req = 0;
    //    };

    //    if (sprinkler_summer_othercrop_irri_area == "") {
    //        sprinkler_summer_othercrop_irri_area = 0;
    //    }

    //    sprinkler_summer_othercrop_sprinkler_waterdemand = ((parseFloat(sprinkler_summer_othercrop_area) - parseFloat(sprinkler_summer_othercrop_irri_area)) * parseFloat(sprinkler_summer_othercrop_water_req) * 0.001)
    //        + (parseFloat(sprinkler_summer_othercrop_irri_area) * parseFloat(sprinkler_summer_othercrop_water_req) * (1 - 30 / 100) * 0.001);


    //    sprinkler_summer_othercrop_reduc_gw_demand = parseFloat(sprinkler_summer_othyercrop_waterdemand).toFixed(2) - parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand).toFixed(2);

    //    Total_Water_Demand_for_Summer_Crops = parseFloat(sprinkler_summer_othyercrop_waterdemand) + parseFloat(Total_Water_Demand_for_Summer_Crops);
    //    sprinkler_summer_total_summer_waterdemand = parseFloat(sprinkler_summer_total_summer_waterdemand) + parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand).toFixed(2);
    //    sprinkler_summer_total_reduction_waterdemand = parseFloat(sprinkler_summer_total_reduction_waterdemand) + parseFloat(sprinkler_summer_othercrop_reduc_gw_demand);

    //}

    $('#sprinkler_summer_total_waterdemand').text(parseFloat(Total_Water_Demand_for_Summer_Crops).toFixed(2));
    $('#sprinkler_summer_total_summer_waterdemand').text(parseFloat(sprinkler_summer_total_summer_waterdemand).toFixed(2));

    $('#Summer_Crops_Water_Demand').text(parseFloat(Total_Water_Demand_for_Summer_Crops).toFixed(2));
    $('#sprinkler_summer_total_reduction_waterdemand').text(parseFloat(sprinkler_summer_total_reduction_waterdemand).toFixed(2));


    var sprinkler_kharif_total_reduction_waterdemand1 = $('#sprinkler_kharif_total_reduction_waterdemand').text();
    if (sprinkler_kharif_total_reduction_waterdemand1 != "" && sprinkler_kharif_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_kharif_total_reduction_waterdemand1 = "0";
    }

    var sprinkler_rabi_total_reduction_waterdemand1 = $('#sprinkler_rabi_total_reduction_waterdemand').text();
    if (sprinkler_rabi_total_reduction_waterdemand1 != "" && sprinkler_rabi_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_rabi_total_reduction_waterdemand1 = "0";
    }

    var sprinkler_summer_total_reduction_waterdemand1 = $('#sprinkler_summer_total_reduction_waterdemand').text();
    if (sprinkler_summer_total_reduction_waterdemand1 != "" && sprinkler_summer_total_reduction_waterdemand1 != null) {

    } else {
        sprinkler_summer_total_reduction_waterdemand1 = "0";
    }

    

    var TotalAnnual_sprinkler_Reduction = parseFloat(sprinkler_kharif_total_reduction_waterdemand1) + parseFloat(sprinkler_rabi_total_reduction_waterdemand1) + parseFloat(sprinkler_summer_total_reduction_waterdemand1);
    $('#TotalAnnual_sprinkler_Reduction').text(TotalAnnual_sprinkler_Reduction.toFixed(2));
}


function SummerPopUp(SS) {

    Crop_WaterRequire();

    if (SS == "sprinkler_summer_sericulture_crop_area") {
        $('#SprinklerName').text("Sericulture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_sericulture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_sericulture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_sericulture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_summer_tomoto_crop_area") {
        $('#SprinklerName').text("Tomoto");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_tomoto_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_tomoto_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_tomoto_reduction_gw_demand).toFixed(2));
    }
    //else if (SS == "sprinkler_summer_cabbage_crop_area") {
    //    $('#SprinklerName').text("Cabbage");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_cabbage_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_cabbage_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_cabbage_reduction_gw_demand).toFixed(2));

    //}
    //else if (SS == "sprinkler_summer_beans_crop_area") {
    //    $('#SprinklerName').text("Beans");
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_beans_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_beans_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_beans_reduction_gw_demand).toFixed(2));

    //}
    else if (SS == "sprinkler_summer_floriculture_crop_area") {
        $('#SprinklerName').text("Floriculture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_floriculture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_floriculture_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_floriculture_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_summer_maize_crop_area") {
        $('#SprinklerName').text("Maize");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_maize_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_maize_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_maize_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_summer_fodder_crop_area") {
        $('#SprinklerName').text("Fodder");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_fodder_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_fodder_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_fodder_reduction_gw_demand).toFixed(2));

    }
    else if (SS == "sprinkler_summer_sugarcane_crop_area") {
        $('#SprinklerName').text("Sugarcane");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_sugarcane_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_sugarcane_sprinkler_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_sugarcane_reduction_gw_demand).toFixed(2));

    }


    else if (SS == "sprinkler_summer_horticulture_crop_area") {
        $('#SprinklerName').text("Horticulture");
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_horticulture_waterdemand).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_horticulture_netwater_waterdemand).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_horticulture_reduction_gw_demand).toFixed(2));

    }


    //else if (SS == "sprinkler_summer_othercrop_area") {
    //    var CropName = $('#sprinkler_summer_othercrop_name').val();
    //    $('#SprinklerName').text(CropName);
    //    $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_othyercrop_waterdemand).toFixed(2));
    //    $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand).toFixed(2));
    //    $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_othercrop_reduc_gw_demand).toFixed(2));

    //}

    else {
        $('#Individual_WaterDemand').text(0);
        $('#Individual_SprinklerWaterDemand').text(0);
        $('#Individual_ReductionGWdemand').text(0);

    }



}


function SaveSprinklerInfo() {
    $('#SAVE_BTN1').prop('disabled', true);
    Kharif_WaterRequire();
    Rabi_WaterRequire();
    Crop_WaterRequire();

    var obj = {};
    
    obj.sprinkler_approx_estimated_cost = $('#sprinkler_approx_estimated_cost').val();
    obj.sprinkler_cost_type = $('#sprinkler_cost_type').val();

    //paddy
    obj.sprinkler_kharif_paddy_crop_area = $('#Paddy_Kharif_Value').val();
    obj.sprinkler_kharif_paddy_fundingsource = $('#Sprinkler_kharif_Paddy_FundingSource').val();
    obj.sprinkler_kharif_paddy_irri_area = $('#sprinkler_kharif_paddy_irri_area').val();
    obj.sprinkler_kharif_paddy_waterdemand = sprinkler_kharif_paddy_waterdemand.toString();
    obj.sprinkler_kharif_paddy_sprinkler_waterdemand = parseFloat(sprinkler_kharif_paddy_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_paddy_reduction_gw_demand = parseFloat(sprinkler_kharif_paddy_reduction_gw_demand).toFixed(2);

    //Ragi
    obj.sprinkler_kharif_ragi_crop_area = $('#Ragi_Kharif_Value').val();
    obj.sprinkler_kharif_ragi_fundingsource = $('#Sprinkler_kharif_Ragi_FundingSource').val();
    obj.sprinkler_kharif_ragi_irri_area = $('#sprinkler_kharif_ragi_irri_area').val();
    obj.sprinkler_kharif_ragi_waterdemand = parseFloat(sprinkler_kharif_ragi_waterdemand).toFixed(2);
    obj.sprinkler_kharif_ragi_sprinkler_waterdemand = parseFloat(sprinkler_kharif_ragi_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_ragi_reduction_gw_demand = parseFloat(sprinkler_kharif_ragi_reduction_gw_demand).toFixed(2);

    //groundnut
    obj.sprinkler_kharif_groundnut_crop_area = $('#GroundNut_Kharif_Value').val();
    obj.sprinkler_kharif_groundnut_fundingsource = $('#Sprinkler_kharif_GroundNut_FundingSource').val();

    obj.sprinkler_kharif_groundnut_irri_area = $('#sprinkler_kharif_groundnut_irri_area').val();
    obj.sprinkler_kharif_groundnut_waterdemand = parseFloat(sprinkler_kharif_groundnut_waterdemand).toFixed(2);
    obj.sprinkler_kharif_groundnut_sprinkler_waterdemand = parseFloat(sprinkler_kharif_groundnut_sprinkler_waterdemand).toFixed(2);


    obj.sprinkler_kharif_groundnut_reduction_gw_demand = parseFloat(sprinkler_kharif_groundnut_reduction_gw_demand).toFixed(2);


    //sugarcane
    obj.sprinkler_kharif_sugarcane_crop_area = $('#Sugarcane_Kharif_Value').val();
    obj.sprinkler_kharif_sugarcane_fundingsource = $('#Sprinkler_kharif_Sugarcane_FundingSource').val();

    obj.sprinkler_kharif_sugarcane_irri_area = $('#sprinkler_kharif_sugarcane_irri_area').val();
    obj.sprinkler_kharif_sugarcane_waterdemand = parseFloat(sprinkler_kharif_sugarcane_waterdemand).toFixed(2);
    obj.sprinkler_kharif_sugarcane_sprinkler_waterdemand = parseFloat(sprinkler_kharif_sugarcane_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_sugarcane_reduction_gw_demand = parseFloat(sprinkler_kharif_sugarcane_reduction_gw_demand).toFixed(2);

    //Tomoto


    obj.sprinkler_kharif_tomoto_crop_area = $('#Tomato_Kharif_Value').val();
    obj.sprinkler_kharif_tomoto_fundingsource = $('#Sprinkler_kharif_Tomoto_FundingSource').val();

    obj.sprinkler_kharif_tomoto_irri_area = $('#sprinkler_kharif_tomoto_irri_area').val();
    obj.sprinkler_kharif_tomoto_waterdemand = parseFloat(sprinkler_kharif_tomoto_waterdemand).toFixed(2);
    obj.sprinkler_kharif_tomoto_sprinkler_waterdemand = parseFloat(sprinkler_kharif_tomoto_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_tomoto_reduction_gw_demand = parseFloat(sprinkler_kharif_tomoto_reduction_gw_demand).toFixed(2);

    //Cabbage

    //obj.sprinkler_kharif_cabbage_crop_area = $('#Cabbage_Kharif_Value').val();
    //obj.sprinkler_kharif_cabbage_fundingsource = $('#Sprinkler_kharif_Cabbage_FundingSource').val();

    //obj.sprinkler_kharif_cabbage_irri_area = $('#sprinkler_kharif_cabbage_irri_area').val();
    //obj.sprinkler_kharif_cabbage_waterdemand = parseFloat(sprinkler_kharif_cabbage_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_cabbage_sprinkler_waterdemand = parseFloat(sprinkler_kharif_cabbage_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_cabbage_reduction_gw_demand = parseFloat(sprinkler_kharif_cabbage_reduction_gw_demand).toFixed(2);

    //Beans
    //mohaa
    //obj.sprinkler_kharif_beans_crop_area = $('#Beans_Kharif_Value').val();
    //obj.sprinkler_kharif_beans_fundingsource = $('#Sprinkler_kharif_Beans_FundingSource').val();

    //obj.sprinkler_kharif_beans_irri_area = $('#sprinkler_kharif_beans_irri_area').val();
    //obj.sprinkler_kharif_beans_waterdemand = parseFloat(sprinkler_kharif_beans_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_beans_sprinkler_waterdemand = parseFloat(sprinkler_kharif_beans_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_beans_reduction_gw_demand = parseFloat(sprinkler_kharif_beans_reduction_gw_demand).toFixed(2);

    //floriculture
    obj.sprinkler_kharif_floriculture_crop_area = $('#Floriculture_Kharif_Value').val();
    obj.sprinkler_kharif_floriculture_fundingsource = $('#Sprinkler_kharif_Floriculture_FundingSource').val();

    obj.sprinkler_kharif_floriculture_irri_area = $('#sprinkler_kharif_floriculture_irri_area').val();
    obj.sprinkler_kharif_floriculture_waterdemand = parseFloat(sprinkler_kharif_floriculture_waterdemand).toFixed(2);
    obj.sprinkler_kharif_floriculture_sprinkler_waterdemand = parseFloat(sprinkler_kharif_floriculture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_floriculture_reduction_gw_demand = parseFloat(sprinkler_kharif_floriculture_reduction_gw_demand).toFixed(2);

    //sericulture

    obj.sprinkler_kharif_sericulture_crop_area = $('#Sericulture_Kharif_Value').val();
    obj.sprinkler_kharif_sericulture_fundingsource = $('#Sprinkler_kharif_Sericulture_FundingSource').val();

    obj.sprinkler_kharif_sericulture_irri_area = $('#sprinkler_kharif_sericulture_irri_area').val();
    obj.sprinkler_kharif_sericulture_waterdemand = parseFloat(sprinkler_kharif_sericulture_waterdemand).toFixed(2);
    obj.sprinkler_kharif_sericulture_sprinkler_waterdemand = parseFloat(sprinkler_kharif_sericulture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_sericulture_reduction_gw_demand = parseFloat(sprinkler_kharif_sericulture_reduction_gw_demand).toFixed(2);

    //Cucumber

    //obj.sprinkler_kharif_cucumber_crop_area = $('#Cucmber_Kharif_Value').val();
    //obj.sprinkler_kharif_cucumber_fundingsource = $('#Sprinkler_kharif_Cucmber_FundingSource').val();

    //obj.sprinkler_kharif_cucumber_irri_area = $('#sprinkler_kharif_cucumber_irri_area').val();
    //obj.sprinkler_kharif_cucumber_waterdemand = parseFloat(sprinkler_kharif_cucumber_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_cucumber_sprinkler_waterdemand = parseFloat(sprinkler_kharif_cucumber_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_cucumber_reduction_gw_demand = parseFloat(sprinkler_kharif_cucumber_reduction_gw_demand).toFixed(2);

    //banana

    obj.sprinkler_kharif_banana_crop_area = $('#Banana_Kharif_Value').val();
    obj.sprinkler_kharif_banana_fundingsource = $('#Sprinkler_kharif_Banana_FundingSource').val();

    obj.sprinkler_kharif_banana_irri_area = $('#sprinkler_kharif_banana_irri_area').val();
    obj.sprinkler_kharif_banana_waterdemand = parseFloat(sprinkler_kharif_banana_waterdemand).toFixed(2);
    obj.sprinkler_kharif_banana_sprinkler_waterdemand = parseFloat(sprinkler_kharif_banana_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_banana_reduction_gw_demand = parseFloat(sprinkler_kharif_banana_reduction_gw_demand).toFixed(2);

    //fodder

    obj.sprinkler_kharif_fodder_crop_area = $('#Fodder_Kharif_Value').val();
    obj.sprinkler_kharif_fodder_fundingsource = $('#Sprinkler_kharif_Fodder_FundingSource').val();

    obj.sprinkler_kharif_fodder_irri_area = $('#sprinkler_kharif_fodder_irri_area').val();
    obj.sprinkler_kharif_fodder_waterdemand = parseFloat(sprinkler_kharif_fodder_waterdemand).toFixed(2);
    obj.sprinkler_kharif_fodder_sprinkler_waterdemand = parseFloat(sprinkler_kharif_fodder_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_fodder_reduction_gw_demand = parseFloat(sprinkler_kharif_fodder_reduction_gw_demand).toFixed(2);

    //Maize

    obj.sprinkler_kharif_maize_crop_area = $('#Maize_Kharif_Value').val();
    obj.sprinkler_kharif_maize_fundingsource = $('#Sprinkler_kharif_Maize_FundingSource').val();

    obj.sprinkler_kharif_maize_irri_area = $('#sprinkler_kharif_maize_irri_area').val();
    obj.sprinkler_kharif_maize_waterdemand = parseFloat(sprinkler_kharif_maize_waterdemand).toFixed(2);
    obj.sprinkler_kharif_maize_sprinkler_waterdemand = parseFloat(sprinkler_kharif_maize_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_maize_reduction_gw_demand = parseFloat(sprinkler_kharif_maize_reduction_gw_demand).toFixed(2);

    //potato

    //obj.sprinkler_kharif_potato_crop_area = $('#Potato_Kharif_Value').val();
    //obj.sprinkler_kharif_potato_fundingsource = $('#Sprinkler_kharif_Potato_FundingSource').val();

    //obj.sprinkler_kharif_potato_irri_area = $('#sprinkler_kharif_potato_irri_area').val();
    //obj.sprinkler_kharif_potato_waterdemand = parseFloat(sprinkler_kharif_potato_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_potato_sprinkler_waterdemand = parseFloat(sprinkler_kharif_potato_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_potato_reduction_gw_demand = parseFloat(sprinkler_kharif_potato_reduction_gw_demand).toFixed(2);

    //chillies

    obj.sprinkler_kharif_chillies_crop_area = $('#Chillies_Kharif_Value').val();
    obj.sprinkler_kharif_chillies_fundingsource = $('#Sprinkler_kharif_Chillies_FundingSource').val();

    obj.sprinkler_kharif_chillies_irri_area = $('#sprinkler_kharif_chillies_irri_area').val();
    obj.sprinkler_kharif_chillies_waterdemand = parseFloat(sprinkler_kharif_chillies_waterdemand).toFixed(2);
    obj.sprinkler_kharif_chillies_sprinkler_waterdemand = parseFloat(sprinkler_kharif_chillies_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_chillies_reduction_gw_demand = parseFloat(sprinkler_kharif_chillies_reduction_gw_demand).toFixed(2);

    //cotton

    obj.sprinkler_kharif_cotton_crop_area = $('#Cotton_Kharif_Value').val();
    obj.sprinkler_kharif_cotton_fundingsource = $('#Sprinkler_kharif_Cotton_FundingSource').val();
    obj.sprinkler_kharif_cotton_irri_area = $('#sprinkler_kharif_cotton_irri_area').val();
    obj.sprinkler_kharif_cotton_waterdemand = parseFloat(sprinkler_kharif_cotton_waterdemand).toFixed(2);
    obj.sprinkler_kharif_cotton_sprinkler_waterdemand = parseFloat(sprinkler_kharif_cotton_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_cotton_reduction_gw_demand = parseFloat(sprinkler_kharif_cotton_reduction_gw_demand).toFixed(2);

    //melon


    obj.sprinkler_kharif_melon_crop_area = $('#Melon_Kharif_Value').val();
    obj.sprinkler_kharif_melon_fundingsource = $('#Sprinkler_kharif_Melon_FundingSource').val();

    obj.sprinkler_kharif_melon_irri_area = $('#sprinkler_kharif_melon_irri_area').val();
    obj.sprinkler_kharif_melon_waterdemand = parseFloat(sprinkler_kharif_melon_waterdemand).toFixed(2);
    obj.sprinkler_kharif_melon_sprinkler_waterdemand = parseFloat(sprinkler_kharif_melon_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_melon_reduction_gw_demand = parseFloat(sprinkler_kharif_melon_reduction_gw_demand).toFixed(2);

    //citrus
    obj.sprinkler_kharif_citrus_crop_area = $('#Citrus_Kharif_Value').val();
    obj.sprinkler_kharif_citrus_fundingsource = $('#Sprinkler_kharif_Citrus_FundingSource').val();

    obj.sprinkler_kharif_citrus_irri_area = $('#sprinkler_kharif_citrus_irri_area').val();
    obj.sprinkler_kharif_citrus_waterdemand = parseFloat(sprinkler_kharif_citrus_waterdemand).toFixed(2);
    obj.sprinkler_kharif_citrus_sprinkler_waterdemand = parseFloat(sprinkler_kharif_citrus_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_citrus_reduction_gw_demand = parseFloat(sprinkler_kharif_citrus_reduction_gw_demand).toFixed(2);

    //peanut

    //obj.sprinkler_kharif_peanut_crop_area = $('#Peanut_Kharif_Value').val();
    //obj.sprinkler_kharif_peanut_fundingsource = $('#Sprinkler_kharif_Peanut_FundingSource').val();

    //obj.sprinkler_kharif_peanut_irri_area = $('#sprinkler_kharif_peanut_irri_area').val();
    //obj.sprinkler_kharif_peanut_waterdemand = parseFloat(sprinkler_kharif_peanut _waterdemand).toFixed(2);
    //obj.sprinkler_kharif_peanut_sprinkler_waterdemand = parseFloat(sprinkler_kharif_peanut_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_kharif_peanut_reduction_gw_demand = parseFloat(sprinkler_kharif_peanut_reduction_gw_demand).toFixed(2);


    //horticulture

    obj.sprinkler_kharif_horticulture_crop_area = $('#Horticulture_Kharif_Value').val();
    obj.sprinkler_kharif_horticulture_fundingsource = $('#Sprinkler_kharif_Horticulture_FundingSource').val();

    obj.sprinkler_kharif_horticulture_irri_area = $('#sprinkler_kharif_horticulture_irri_area').val();
    obj.sprinkler_kharif_horticulture_waterdemand = parseFloat(sprinkler_kharif_horticulture_waterdemand).toFixed(2);
    obj.sprinkler_kharif_horticulture_sprinkler_waterdemand = parseFloat(sprinkler_kharif_horticulture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_kharif_horticulture_reduction_gw_demand = parseFloat(sprinkler_kharif_horticulture_reduction_gw_demand).toFixed(2);

    //total
    //karif crops total
    var Sprinkler_Water_Demand = $('#Sprinkler_Water_Demand').text();
    obj.sprinkler_kharif_total_waterdemand = parseFloat(Sprinkler_Water_Demand).toFixed(2);

    var sprinkler_kharif_total_sprinkler_waterdemand = $('#sprinkler_kharif_total_sprinkler_waterdemand').text();
    obj.sprinkler_kharif_total_sprinkler_waterdemand = parseFloat(sprinkler_kharif_total_sprinkler_waterdemand).toFixed(2);

    var sprinkler_kharif_total_reduction_waterdemand = $('#sprinkler_kharif_total_reduction_waterdemand').text();
    obj.sprinkler_kharif_total_reduction_waterdemand = parseFloat(sprinkler_kharif_total_reduction_waterdemand).toFixed(2);

    //rabi sericulture

    obj.sprinkler_rabi_sericulture_crop_area = $('#Sericulture_Rabi_Value').val();
    obj.sprinkler_rabi_sericulture_fundingsource = $('#Sprinkler_Rabi_Sericulture_FundingSource').val();

    obj.sprinkler_rabi_sericulture_irri_area = $('#sprinkler_rabi_sericulture_irri_area').val();
    obj.sprinkler_rabi_sericulture_waterdemand = parseFloat(sprinkler_rabi_sericulture_waterdemand).toFixed(2);
    obj.sprinkler_rabi_sericulture_sprinkler_waterdemand = parseFloat(sprinkler_rabi_sericulture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_sericulture_reduction_gw_demand = parseFloat(sprinkler_rabi_sericulture_reduction_gw_demand).toFixed(2);

    //rabi tomoto

    obj.sprinkler_rabi_tomoto_crop_area = $('#Tomota_Rabi_Value').val();
    obj.sprinkler_rabi_tomoto_fundingsource = $('#Sprinkler_Rabi_Tomota_FundingSource').val();

    obj.sprinkler_rabi_tomoto_irri_area = $('#sprinkler_rabi_tomoto_irri_area').val();
    obj.sprinkler_rabi_tomoto_waterdemand = parseFloat(sprinkler_rabi_tomoto_waterdemand).toFixed(2);
    obj.sprinkler_rabi_tomoto_sprinkler_waterdemand = parseFloat(sprinkler_rabi_tomoto_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_tomoto_reduction_gw_demand = parseFloat(sprinkler_rabi_tomoto_reduction_gw_demand).toFixed(2);

    //rabi cabbage

    //obj.sprinkler_rabi_cabbage_crop_area = $('#Cabbage_Rabi_Value').val();
    //obj.sprinkler_rabi_cabbage_fundingsource = $('#Sprinkler_Rabi_Cabbage_FundingSource').val();

    //obj.sprinkler_rabi_cabbage_irri_area = $('#sprinkler_rabi_cabbage_irri_area').val();
    //obj.sprinkler_rabi_cabbage_waterdemand = parseFloat(sprinkler_rabi_cabbage_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_cabbage_sprinkler_waterdemand = parseFloat(sprinkler_rabi_cabbage_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_cabbage_reduction_gw_demand = parseFloat(sprinkler_rabi_cabbage_reduction_gw_demand).toFixed(2);

    //rabi beans

    //obj.sprinkler_rabi_beans_crop_area = $('#Beans_Rabi_Value').val();
    //obj.sprinkler_rabi_beans_fundingsource = $('#Sprinkler_Rabi_Beans_FundingSource').val();

    //obj.sprinkler_rabi_beans_irri_area = $('#sprinkler_rabi_beans_irri_area').val();
    //obj.sprinkler_rabi_beans_waterdemand = parseFloat(sprinkler_rabi_beans_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_beans_sprinkler_waterdemand = parseFloat(sprinkler_rabi_beans_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_beans_reduction_gw_demand = parseFloat(sprinkler_rabi_beans_reduction_gw_demand).toFixed(2);

    //rabi floriculture

    obj.sprinkler_rabi_floriculture_crop_area = $('#Floriculture_Rabi_Value').val();
    obj.sprinkler_rabi_floriculture_fundingsource = $('#Sprinkler_Rabi_Floriculture_FundingSource').val();

    obj.sprinkler_rabi_floriculture_irri_area = $('#sprinkler_rabi_floriculture_irri_area').val();
    obj.sprinkler_rabi_floriculture_waterdemand = parseFloat(sprinkler_rabi_floriculture_waterdemand).toFixed(2);
    obj.sprinkler_rabi_floriculture_sprinkler_waterdemand = parseFloat(sprinkler_rabi_floriculture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_floriculture_reduction_gw_demand = parseFloat(sprinkler_rabi_floriculture_reduction_gw_demand).toFixed(2);

    //rabi potato

    //obj.sprinkler_rabi_potato_crop_area = $('#Potato_Rabi_Value').val();
    //obj.sprinkler_rabi_potato_fundingsource = $('#Sprinkler_Rabi_Potato_FundingSource').val();

    //obj.sprinkler_rabi_potato_irri_area = $('#sprinkler_rabi_potato_irri_area').val();
    //obj.sprinkler_rabi_potato_waterdemand = parseFloat(sprinkler_rabi_potato_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_potato_sprinkler_waterdemand = parseFloat(sprinkler_rabi_potato_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_potato_reduction_gw_demand = parseFloat(sprinkler_rabi_potato_reduction_gw_demand).toFixed(2);

    //rabi cucumber

    //obj.sprinkler_rabi_cucumber_crop_area = $('#Cucumber_Rabi_Value').val();
    //obj.sprinkler_rabi_cucumber_fundingsource = $('#Sprinkler_Rabi_Cucumber_FundingSource').val();

    //obj.sprinkler_rabi_cucumber_irri_area = $('#sprinkler_rabi_cucumber_irri_area').val();
    //obj.sprinkler_rabi_cucumber_waterdemand = parseFloat(sprinkler_rabi_cucumber_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_cucumber_sprinkler_waterdemand = parseFloat(sprinkler_rabi_cucumber_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_cucumber_reduction_gw_demand = parseFloat(sprinkler_rabi_cucumber_reduction_gw_demand).toFixed(2);

    //rabi ragi

    obj.sprinkler_rabi_ragi_crop_area = $('#Ragi_Rabi_Value').val();
    obj.sprinkler_rabi_ragi_fundingsource = $('#Sprinkler_Rabi_Ragi_FundingSource').val();

    obj.sprinkler_rabi_ragi_irri_area = $('#sprinkler_rabi_ragi_irri_area').val();
    obj.sprinkler_rabi_ragi_waterdemand = parseFloat(sprinkler_rabi_ragi_waterdemand).toFixed(2);
    obj.sprinkler_rabi_ragi_sprinkler_waterdemand = parseFloat(sprinkler_rabi_ragi_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_ragi_reduction_gw_demand = parseFloat(sprinkler_rabi_ragi_reduction_gw_demand).toFixed(2);

    //rabi sugarcane

    obj.sprinkler_rabi_sugarcane_crop_area = $('#Sugarcane_Rabi_Value').val();
    obj.sprinkler_rabi_sugarcane_fundingsource = $('#Sprinkler_Rabi_Sugarcane_FundingSource').val();

    obj.sprinkler_rabi_sugarcane_irri_area = $('#sprinkler_rabi_sugarcane_irri_area').val();
    obj.sprinkler_rabi_sugarcane_waterdemand = parseFloat(sprinkler_rabi_sugarcane_waterdemand).toFixed(2);
    obj.sprinkler_rabi_sugarcane_sprinkler_waterdemand = parseFloat(sprinkler_rabi_sugarcane_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_sugarcane_reduction_gw_demand = parseFloat(sprinkler_rabi_sugarcane_reduction_gw_demand).toFixed(2);


    //Rabi Maize
    obj.sprinkler_rabi_maize_crop_area = $('#Maize_Rabi_Value').val();
    obj.sprinkler_rabi_maize_fundingsource = $('#Sprinkler_Rabi_Maize_FundingSource').val();

    obj.sprinkler_rabi_maize_irri_area = $('#sprinkler_rabi_maize_irri_area').val();
    obj.sprinkler_rabi_maize_waterdemand = parseFloat(sprinkler_rabi_maize_waterdemand).toFixed(2);
    obj.sprinkler_rabi_maize_sprinkler_waterdemand = parseFloat(sprinkler_rabi_maize_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_maize_reduction_gw_demand = parseFloat(sprinkler_rabi_maize_reduction_gw_demand).toFixed(2);

    //rabi fodder

    obj.sprinkler_rabi_fodder_crop_area = $('#Fodder_Rabi_Value').val();
    obj.sprinkler_rabi_fodder_fundingsource = $('#Sprinkler_Rabi_Fodder_FundingSource').val();

    obj.sprinkler_rabi_fodder_irri_area = $('#sprinkler_rabi_fodder_irri_area').val();
    obj.sprinkler_rabi_fodder_waterdemand = parseFloat(sprinkler_rabi_fodder_waterdemand).toFixed(2);
    obj.sprinkler_rabi_fodder_sprinkler_waterdemand = parseFloat(sprinkler_rabi_fodder_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_fodder_reduction_gw_demand = parseFloat(sprinkler_rabi_fodder_reduction_gw_demand).toFixed(2);

    //rabi paddy

    obj.sprinkler_rabi_paddy_crop_area = $('#Paddy_Rabi_Value').val();
    obj.sprinkler_rabi_paddy_fundingsource = $('#Sprinkler_Rabi_Paddy_FundingSource').val();

    obj.sprinkler_rabi_paddy_irri_area = $('#sprinkler_rabi_paddy_irri_area').val();
    obj.sprinkler_rabi_paddy_waterdemand = parseFloat(sprinkler_rabi_paddy_waterdemand).toFixed(2);
    obj.sprinkler_rabi_paddy_sprinkler_waterdemand = parseFloat(sprinkler_rabi_paddy_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_paddy_reduction_gw_demand = parseFloat(sprinkler_rabi_paddy_reduction_gw_demand).toFixed(2);

    //rabi alfalfa

    obj.sprinkler_rabi_alfalfa_crop_area = $('#Alfalfa_Rabi_Value').val();
    obj.sprinkler_rabi_alfalfa_fundingsource = $('#Sprinkler_Rabi_Alfalfa_FundingSource').val();

    obj.sprinkler_rabi_alfalfa_irri_area = $('#sprinkler_rabi_alfalfa_irri_area').val();
    obj.sprinkler_rabi_alfalfa_waterdemand = parseFloat(sprinkler_rabi_alfalfa_waterdemand).toFixed(2);
    obj.sprinkler_rabi_alfalfa_sprinkler_waterdemand = parseFloat(sprinkler_rabi_alfalfa_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_alfalfa_reduction_gw_demand = parseFloat(sprinkler_rabi_alfalfa_reduction_gw_demand).toFixed(2);

    // rabi onion

    //obj.sprinkler_rabi_onion_crop_area = $('#Onion_Rabi_Value').val();
    //obj.sprinkler_rabi_onion_fundingsource = $('#Sprinkler_Rabi_Onion_FundingSource').val();

    //obj.sprinkler_rabi_onion_irri_area = $('#sprinkler_rabi_onion_irri_area').val();
    //obj.sprinkler_rabi_onion_waterdemand = parseFloat(sprinkler_rabi_onion_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_onion_sprinkler_waterdemand = parseFloat(sprinkler_rabi_onion_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_rabi_onion_reduction_gw_demand = parseFloat(sprinkler_rabi_onion_reduction_gw_demand).toFixed(2);

    //rabi horticulture

    obj.sprinkler_rabi_horticulture_crop_area = $('#Hortculture_Rabi_Value').val();
    obj.sprinkler_rabi_horticulture_fundingsource = $('#Sprinkler_Rabi_Hortculture_FundingSource').val();

    obj.sprinkler_rabi_horticulture_irri_area = $('#sprinkler_rabi_horticulture_irri_area').val();
    obj.sprinkler_rabi_horticulture_waterdemand = parseFloat(sprinkler_rabi_horticulture_waterdemand).toFixed(2);
    obj.sprinkler_rabi_horticulture_sprinkler_waterdemand = parseFloat(sprinkler_rabi_horticulture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_horticulture_reduction_gw_demand = parseFloat(sprinkler_rabi_horticulture_reduction_gw_demand).toFixed(2);

    //rabi sunflower
    obj.sprinkler_rabi_sunflower_crop_area = $('#Sunflower_Rabi_Value').val();
    obj.sprinkler_rabi_sunflower_fundingsource = $('#Sprinkler_Rabi_Sunflower_FundingSource').val();

    obj.sprinkler_rabi_sunflower_irri_area = $('#sprinkler_rabi_sunflower_irri_area').val();
    obj.sprinkler_rabi_sunflower_waterdemand = parseFloat(sprinkler_rabi_sunflower_waterdemand).toFixed(2);
    obj.sprinkler_rabi_sunflower_sprinkler_waterdemand = parseFloat(sprinkler_rabi_sunflower_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_rabi_sunflower_reduction_gw_demand = parseFloat(sprinkler_rabi_sunflower_reduction_gw_demand).toFixed(2);

    //rabi crops total
    var Sprinkler_RabiWater_Demand = $('#Sprinkler_RabiWater_Demand').text();
    obj.sprinkler_rabi_total_waterdemand = parseFloat(Sprinkler_RabiWater_Demand).toFixed(2);

    var sprinkler_rabi_total_rabi_waterdemand = $('#sprinkler_rabi_total_rabi_waterdemand').text();
    obj.sprinkler_rabi_total_rabi_waterdemand = parseFloat(sprinkler_rabi_total_rabi_waterdemand).toFixed(2);

    var sprinkler_rabi_total_reduction_waterdemand = $('#sprinkler_rabi_total_reduction_waterdemand').text();
    obj.sprinkler_rabi_total_reduction_waterdemand = parseFloat(sprinkler_rabi_total_reduction_waterdemand).toFixed(2);


    //summer sericulture

    obj.sprinkler_summer_sericulture_crop_area = $('#Sericulture_Crop_Value').val();
    obj.sprinkler_summer_sericulture_fundingsource = $('#Sprinkler_summer_Sericulture_FundingSource').val();

    obj.sprinkler_summer_sericulture_irri_area = $('#sprinkler_summer_sericulture_irri_area').val();
    obj.sprinkler_summer_sericulture_waterdemand = parseFloat(sprinkler_summer_sericulture_waterdemand).toFixed(2);
    obj.sprinkler_summer_sericulture_sprinkler_waterdemand = parseFloat(sprinkler_summer_sericulture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_summer_sericulture_reduction_gw_demand = parseFloat(sprinkler_summer_sericulture_reduction_gw_demand).toFixed(2);

    //summer tomoto

    obj.sprinkler_summer_tomoto_crop_area = $('#Tomota_Crop_Value').val();
    obj.sprinkler_summer_tomoto_fundingsource = $('#Sprinkler_summer_Tomota_FundingSource').val();

    obj.sprinkler_summer_tomoto_irri_area = $('#sprinkler_summer_tomoto_irri_area').val();
    obj.sprinkler_summer_tomoto_waterdemand = parseFloat(sprinkler_summer_tomoto_waterdemand).toFixed(2);
    obj.sprinkler_summer_tomoto_sprinkler_waterdemand = parseFloat(sprinkler_summer_tomoto_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_summer_tomoto_reduction_gw_demand = parseFloat(sprinkler_summer_tomoto_reduction_gw_demand).toFixed(2);

    //sumer cabbage

    //obj.sprinkler_summer_cabbage_crop_area = $('#Cabbage_Crop_Value').val();
    //obj.sprinkler_summer_cabbage_fundingsource = $('#Sprinkler_summer_Cabbage_FundingSource').val();

    //obj.sprinkler_summer_cabbage_irri_area = $('#sprinkler_summer_cabbage_irri_area').val();
    //obj.sprinkler_summer_cabbage_waterdemand = parseFloat(sprinkler_summer_cabbage_waterdemand).toFixed(2);
    //obj.sprinkler_summer_cabbage_sprinkler_waterdemand = parseFloat(sprinkler_summer_cabbage_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_summer_cabbage_reduction_gw_demand = parseFloat(sprinkler_summer_cabbage_reduction_gw_demand).toFixed(2);

    //summer beans

    //obj.sprinkler_summer_beans_crop_area = $('#Beans_Crop_Value').val();
    //obj.sprinkler_summer_beans_fundingsource = $('#Sprinkler_summer_Beans_FundingSource').val();

    //obj.sprinkler_summer_beans_irri_area = $('#sprinkler_summer_beans_irri_area').val();
    //obj.sprinkler_summer_beans_waterdemand = parseFloat(sprinkler_summer_beans_waterdemand).toFixed(2);
    //obj.sprinkler_summer_beans_sprinkler_waterdemand = parseFloat(sprinkler_summer_beans_sprinkler_waterdemand).toFixed(2);
    //obj.sprinkler_summer_beans_reduction_gw_demand = parseFloat(sprinkler_summer_beans_reduction_gw_demand).toFixed(2);

    //summer floriculture

    obj.sprinkler_summer_floriculture_crop_area = $('#Floriculture_Crop_Value').val();
    obj.sprinkler_summer_floriculture_fundingsource = $('#Sprinkler_summer_Floriculture_FundingSource').val();

    obj.sprinkler_summer_floriculture_irri_area = $('#sprinkler_summer_floriculture_irri_area').val();
    obj.sprinkler_summer_floriculture_waterdemand = parseFloat(sprinkler_summer_floriculture_waterdemand).toFixed(2);
    obj.sprinkler_summer_floriculture_sprinkler_waterdemand = parseFloat(sprinkler_summer_floriculture_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_summer_floriculture_reduction_gw_demand = parseFloat(sprinkler_summer_floriculture_reduction_gw_demand).toFixed(2);

    //summer maize
    obj.sprinkler_summer_maize_crop_area = $('#Maize_Crop_Value').val();
    obj.sprinkler_summer_maize_fundingsource = $('#Sprinkler_summer_Maize_FundingSource').val();

    obj.sprinkler_summer_maize_irri_area = $('#sprinkler_summer_maize_irri_area').val();
    obj.sprinkler_summer_maize_waterdemand = parseFloat(sprinkler_summer_maize_waterdemand).toFixed(2);
    obj.sprinkler_summer_maize_sprinkler_waterdemand = parseFloat(sprinkler_summer_maize_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_summer_maize_reduction_gw_demand = parseFloat(sprinkler_summer_maize_sprinkler_waterdemand).toFixed(2);

    //summer fodder
    obj.sprinkler_summer_fodder_crop_area = $('#Fodder_Crop_Value').val();
    obj.sprinkler_summer_fodder_fundingsource = $('#Sprinkler_summer_Fodder_FundingSource').val();

    obj.sprinkler_summer_fodder_irri_area = $('#sprinkler_summer_fodder_irri_area').val();
    obj.sprinkler_summer_fodder_waterdemand = parseFloat(sprinkler_summer_fodder_waterdemand).toFixed(2);
    obj.sprinkler_summer_fodder_sprinkler_waterdemand = parseFloat(sprinkler_summer_fodder_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_summer_fodder_reduction_gw_demand = parseFloat(sprinkler_summer_fodder_reduction_gw_demand).toFixed(2);

    //summer sugarcane

    obj.sprinkler_summer_sugarcane_crop_area = $('#Sugarcane_Crop_Value').val();
    obj.sprinkler_summer_sugarcane_fundingsource = $('#Sprinkler_summer_Sugarcane_FundingSource').val();

    obj.sprinkler_summer_sugarcane_irri_area = $('#sprinkler_summer_sugarcane_irri_area').val();
    obj.sprinkler_summer_sugarcane_waterdemand = parseFloat(sprinkler_summer_sugarcane_waterdemand).toFixed(2);
    obj.sprinkler_summer_sugarcane_sprinkler_waterdemand = parseFloat(sprinkler_summer_sugarcane_sprinkler_waterdemand).toFixed(2);
    obj.sprinkler_summer_sugarcane_reduction_gw_demand = parseFloat(sprinkler_summer_sugarcane_reduction_gw_demand).toFixed(2);


    //summer crops total
    var Summer_Crops_Water_Demand = $('#Summer_Crops_Water_Demand').text();
    obj.sprinkler_summer_total_waterdemand = parseFloat(Summer_Crops_Water_Demand).toFixed(2);

    var sprinkler_summer_total_summer_waterdemand = $('#sprinkler_summer_total_summer_waterdemand').text();
    obj.sprinkler_summer_total_summer_waterdemand = parseFloat(sprinkler_summer_total_summer_waterdemand).toFixed(2);

    var sprinkler_summer_total_reduction_waterdemand = $('#sprinkler_summer_total_reduction_waterdemand').text();
    obj.sprinkler_summer_total_reduction_waterdemand = parseFloat(sprinkler_summer_total_reduction_waterdemand).toFixed(2);

    //annual total of reduction water demand
    var TotalAnnual_sprinkler_Reduction = $('#TotalAnnual_sprinkler_Reduction').text();
    obj.sprinkler_annual_reduction_waterdemand = parseFloat(TotalAnnual_sprinkler_Reduction).toFixed(2);

    obj.latitude = lat.toString();
    obj.longitude = long.toString();

    //new columns water requirement
    obj.sprinkler_kharif_paddy_water_req = $('#sprinkler_kharif_paddy_water_req').val();
    obj.sprinkler_kharif_ragi_water_req = $('#sprinkler_kharif_ragi_water_req').val();
    obj.sprinkler_kharif_groundnut_water_req = $('#sprinkler_kharif_groundnut_water_req').val();
    obj.sprinkler_kharif_sugarcane_water_req = $('#sprinkler_kharif_sugarcane_water_req').val();
    obj.sprinkler_kharif_tomoto_water_req = $('#sprinkler_kharif_tomoto_water_req').val();
    //  obj.sprinkler_kharif_cabbage_water_req = $('#sprinkler_kharif_cabbage_water_req').val();
    //  obj.sprinkler_kharif_beans_water_req = $('#sprinkler_kharif_beans_water_req').val();
    obj.sprinkler_kharif_floriculture_water_req = $('#sprinkler_kharif_floriculture_water_req').val();
    obj.sprinkler_kharif_sericulture_water_req = $('#sprinkler_kharif_sericulture_water_req').val();
    //  obj.sprinkler_kharif_cucumber_water_req = $('#sprinkler_kharif_cucumber_water_req').val();
    obj.sprinkler_kharif_banana_water_req = $('#sprinkler_kharif_banana_water_req').val();
    obj.sprinkler_kharif_fodder_water_req = $('#sprinkler_kharif_fodder_water_req').val();
    obj.sprinkler_kharif_maize_water_req = $('#sprinkler_kharif_maize_water_req').val();
    //   obj.sprinkler_kharif_potato_water_req = $('#sprinkler_kharif_potato_water_req').val();
    obj.sprinkler_kharif_chillies_water_req = $('#sprinkler_kharif_chillies_water_req').val();
    obj.sprinkler_kharif_cotton_water_req = $('#sprinkler_kharif_cotton_water_req').val();
    obj.sprinkler_kharif_melon_water_req = $('#sprinkler_kharif_melon_water_req').val();
    obj.sprinkler_kharif_citrus_water_req = $('#sprinkler_kharif_citrus_water_req').val();
    //    obj.sprinkler_kharif_peanut_water_req = $('#sprinkler_kharif_peanut_water_req').val();
    obj.sprinkler_kharif_horticulture_water_req = $('#sprinkler_kharif_horticulture_water_req').val();
    obj.sprinkler_summer_sugarcane_irri_area = $('#sprinkler_summer_sugarcane_irri_area').val();

    obj.sprinkler_rabi_sericulture_water_req = $('#sprinkler_rabi_sericulture_water_req').val();
    obj.sprinkler_rabi_tomoto_water_req = $('#sprinkler_rabi_tomoto_water_req').val();
    // obj.sprinkler_rabi_cabbage_water_req = $('#sprinkler_rabi_cabbage_water_req').val();
    // obj.sprinkler_rabi_beans_water_req = $('#sprinkler_rabi_beans_water_req').val();//moh
    obj.sprinkler_rabi_floriculture_water_req = $('#sprinkler_rabi_floriculture_water_req').val();
    // obj.sprinkler_rabi_potato_water_req = $('#sprinkler_rabi_potato_water_req').val();
    // obj.sprinkler_rabi_cucumber_water_req = $('#sprinkler_rabi_cucumber_water_req').val();
    obj.sprinkler_rabi_ragi_water_req = $('#sprinkler_rabi_ragi_water_req').val();
    obj.sprinkler_rabi_sugarcane_water_req = $('#sprinkler_rabi_sugarcane_water_req').val();
    obj.sprinkler_rabi_maize_water_req = $('#sprinkler_rabi_maize_water_req').val();
    obj.sprinkler_rabi_fodder_water_req = $('#sprinkler_rabi_fodder_water_req').val();
    obj.sprinkler_rabi_paddy_water_req = $('#sprinkler_rabi_paddy_water_req').val();
    obj.sprinkler_rabi_alfalfa_water_req = $('#sprinkler_rabi_alfalfa_water_req').val();
    // obj.sprinkler_rabi_onion_water_req = $('#sprinkler_rabi_onion_water_req').val();
    obj.sprinkler_rabi_horticulture_water_req = $('#sprinkler_rabi_horticulture_water_req').val();
    obj.sprinkler_rabi_sunflower_water_req = $('#sprinkler_rabi_sunflower_water_req').val();

    obj.sprinkler_summer_sericulture_water_req = $('#sprinkler_summer_sericulture_water_req').val();
    obj.sprinkler_summer_tomoto_water_req = $('#sprinkler_summer_tomoto_water_req').val();
    // obj.sprinkler_summer_cabbage_water_req = $('#sprinkler_summer_cabbage_water_req').val();
    // obj.sprinkler_summer_beans_water_req = $('#sprinkler_summer_beans_water_req').val();
    obj.sprinkler_summer_floriculture_water_req = $('#sprinkler_summer_floriculture_water_req').val();
    obj.sprinkler_summer_maize_water_req = $('#sprinkler_summer_maize_water_req').val();
    obj.sprinkler_summer_fodder_water_req = $('#sprinkler_summer_fodder_water_req').val();
    obj.sprinkler_summer_sugarcane_water_req = $('#sprinkler_summer_sugarcane_water_req').val();



    obj.sprinkler_other_funding_source = $('#other_Sprinkler_kharif_Paddy_FundingSource').val();
    //other crops kharif
    //obj.sprinkler_kharif_othercrop_name = $('#sprinkler_kharif_othercrop_name').val();
    //obj.sprinkler_kharif_othercrop_area = $('#sprinkler_kharif_othercrop_area').val();
    //obj.sprinkler_kharif_othercrop_irri_area = $('#sprinkler_kharif_othercrop_irri_area').val();
    //obj.sprinkler_kharif_othercrop_water_req = $('#sprinkler_kharif_othercrop_water_req').val();

    //obj.sprinkler_kharif_othyercrop_waterdemand = $('#sprinkler_kharif_othyercrop_waterdemand').text();
    //obj.sprinkler_kharif_othercrop_sprinkler_waterdemand = $('#sprinkler_kharif_othercrop_sprinkler_waterdemand').text();
    //obj.sprinkler_kharif_othercrop_reduc_gw_demand = $('#sprinkler_kharif_othercrop_reduc_gw_demand').text();

    ////rabi other crops
    //obj.sprinkler_rabi_othercrop_name = $('#sprinkler_rabi_othercrop_name').val();
    //obj.sprinkler_rabi_othercrop_area = $('#sprinkler_rabi_othercrop_area').val();
    //obj.sprinkler_rabi_othercrop_irri_area = $('#sprinkler_rabi_othercrop_irri_area').val();
    //obj.sprinkler_rabi_othercrop_water_req = $('#sprinkler_rabi_othercrop_water_req').val();

    //obj.sprinkler_rabi_othyercrop_waterdemand = $('#sprinkler_rabi_othyercrop_waterdemand').text();
    //obj.sprinkler_rabi_othercrop_sprinkler_waterdemand = $('#sprinkler_rabi_othercrop_sprinkler_waterdemand').text();
    //obj.sprinkler_rabi_othercrop_reduc_gw_demand = $('#sprinkler_rabi_othercrop_reduc_gw_demand').text();

    ////summer other crops
    //obj.sprinkler_summer_othercrop_name = $('#sprinkler_summer_othercrop_name').val();
    //obj.sprinkler_summer_othercrop_area = $('#sprinkler_summer_othercrop_area').val();
    //obj.sprinkler_summer_othercrop_irri_area = $('#sprinkler_summer_othercrop_irri_area').val();
    //obj.sprinkler_summer_othercrop_water_req = $('#sprinkler_summer_othercrop_water_req').val();

    //obj.sprinkler_summer_othyercrop_waterdemand = $('#sprinkler_summer_othyercrop_waterdemand').text();
    //obj.sprinkler_summer_othercrop_sprinkler_waterdemand = $('#sprinkler_summer_othercrop_sprinkler_waterdemand').text();
    //obj.sprinkler_summer_othercrop_reduc_gw_demand = $('#sprinkler_summer_othercrop_reduc_gw_demand').text();


    //Latest code
    obj.sprinkler_kharif_othercrop_name1 = $('#sprinkler_kharif_othercrop_name1').val();
    obj.sprinkler_kharif_othercrop_area1 = $('#sprinkler_kharif_othercrop_area1').val();
    obj.sprinkler_kharif_othercrop_irri_area1 = $('#sprinkler_kharif_othercrop_irri_area1').val();
    obj.sprinkler_kharif_othercrop_water_req1 = $('#sprinkler_kharif_othercrop_water_req1').val();
    // obj.sprinkler_kharif_othercrop_waterdemand1 = $('#sprinkler_kharif_othercrop_waterdemand1').val();

    obj.sprinkler_kharif_othercrop_waterdemand1 = sprinkler_kharif_othercrop_waterdemand1;
    obj.sprinkler_kharif_othercrop_sprinkler_waterdemand1 = sprinkler_kharif_othercrop_sprinkler_waterdemand1;
    obj.sprinkler_kharif_othercrop_reduc_gw_demand1 = sprinkler_kharif_othercrop_reduc_gw_demand1;

    obj.sprinkler_kharif_othercrop_name2 = $('#sprinkler_kharif_othercrop_name2').val();
    obj.sprinkler_kharif_othercrop_area2 = $('#sprinkler_kharif_othercrop_area2').val();
    obj.sprinkler_kharif_othercrop_irri_area2 = $('#sprinkler_kharif_othercrop_irri_area2').val();
    obj.sprinkler_kharif_othercrop_water_req2 = $('#sprinkler_kharif_othercrop_water_req2').val();
    // obj.sprinkler_kharif_othercrop_waterdemand2 = $('#sprinkler_kharif_othercrop_waterdemand2').val();

    obj.sprinkler_kharif_othercrop_waterdemand2 = sprinkler_kharif_othercrop_waterdemand2;
    obj.sprinkler_kharif_othercrop_sprinkler_waterdemand2 = sprinkler_kharif_othercrop_sprinkler_waterdemand2;
    obj.sprinkler_kharif_othercrop_reduc_gw_demand2 = sprinkler_kharif_othercrop_reduc_gw_demand2;

    obj.sprinkler_kharif_othercrop_name3 = $('#sprinkler_kharif_othercrop_name3').val();
    obj.sprinkler_kharif_othercrop_area3 = $('#sprinkler_kharif_othercrop_area3').val();
    obj.sprinkler_kharif_othercrop_irri_area3 = $('#sprinkler_kharif_othercrop_irri_area3').val();
    obj.sprinkler_kharif_othercrop_water_req3 = $('#sprinkler_kharif_othercrop_water_req3').val();
    // obj.sprinkler_kharif_othercrop_waterdemand3 = $('#sprinkler_kharif_othercrop_waterdemand3').val();

    obj.sprinkler_kharif_othercrop_waterdemand3 = sprinkler_kharif_othercrop_waterdemand3;
    obj.sprinkler_kharif_othercrop_sprinkler_waterdemand3 = sprinkler_kharif_othercrop_sprinkler_waterdemand3;
    obj.sprinkler_kharif_othercrop_reduc_gw_demand3 = sprinkler_kharif_othercrop_reduc_gw_demand3;

    obj.sprinkler_kharif_othercrop_name4 = $('#sprinkler_kharif_othercrop_name4').val();
    obj.sprinkler_kharif_othercrop_area4 = $('#sprinkler_kharif_othercrop_area4').val();
    obj.sprinkler_kharif_othercrop_irri_area4 = $('#sprinkler_kharif_othercrop_irri_area4').val();
    obj.sprinkler_kharif_othercrop_water_req4 = $('#sprinkler_kharif_othercrop_water_req4').val();
    //obj.sprinkler_kharif_othercrop_waterdemand4 = $('#sprinkler_kharif_othercrop_waterdemand4').val();

    obj.sprinkler_kharif_othercrop_waterdemand4 = sprinkler_kharif_othercrop_waterdemand4;
    obj.sprinkler_kharif_othercrop_sprinkler_waterdemand4 = sprinkler_kharif_othercrop_sprinkler_waterdemand4;
    obj.sprinkler_kharif_othercrop_reduc_gw_demand4 = sprinkler_kharif_othercrop_reduc_gw_demand4;

    obj.sprinkler_kharif_othercrop_name5 = $('#sprinkler_kharif_othercrop_name5').val();
    obj.sprinkler_kharif_othercrop_area5 = $('#sprinkler_kharif_othercrop_area5').val();
    obj.sprinkler_kharif_othercrop_irri_area5 = $('#sprinkler_kharif_othercrop_irri_area5').val();
    obj.sprinkler_kharif_othercrop_water_req5 = $('#sprinkler_kharif_othercrop_water_req5').val();
    // obj.sprinkler_kharif_othercrop_waterdemand5 = $('#sprinkler_kharif_othercrop_waterdemand5').val();

    obj.sprinkler_kharif_othercrop_waterdemand5 = sprinkler_kharif_othercrop_waterdemand5;
    obj.sprinkler_kharif_othercrop_sprinkler_waterdemand5 = sprinkler_kharif_othercrop_sprinkler_waterdemand5;
    obj.sprinkler_kharif_othercrop_reduc_gw_demand5 = sprinkler_kharif_othercrop_reduc_gw_demand5;

    //rabi
    obj.sprinkler_rabi_othercrop_name1 = $('#sprinkler_rabi_othercrop_name1').val();
    obj.sprinkler_rabi_othercrop_area1 = $('#sprinkler_rabi_othercrop_area1').val();
    obj.sprinkler_rabi_othercrop_irri_area1 = $('#sprinkler_rabi_othercrop_irri_area1').val();
    obj.sprinkler_rabi_othercrop_water_req1 = $('#sprinkler_rabi_othercrop_water_req1').val();
    // obj.sprinkler_rabi_othercrop_waterdemand1 = $('#sprinkler_rabi_othercrop_waterdemand1').val();

    obj.sprinkler_rabi_othercrop_waterdemand1 = sprinkler_rabi_othercrop_waterdemand1;
    obj.sprinkler_rabi_othercrop_sprinkler_waterdemand1 = sprinkler_rabi_othercrop_sprinkler_waterdemand1;
    obj.sprinkler_rabi_othercrop_reduc_gw_demand1 = sprinkler_rabi_othercrop_reduc_gw_demand1;

    obj.sprinkler_rabi_othercrop_name2 = $('#sprinkler_rabi_othercrop_name2').val();
    obj.sprinkler_rabi_othercrop_area2 = $('#sprinkler_rabi_othercrop_area2').val();
    obj.sprinkler_rabi_othercrop_irri_area2 = $('#sprinkler_rabi_othercrop_irri_area2').val();
    obj.sprinkler_rabi_othercrop_water_req2 = $('#sprinkler_rabi_othercrop_water_req2').val();
    // obj.sprinkler_rabi_othercrop_waterdemand2 = $('#sprinkler_rabi_othercrop_waterdemand2').val();

    obj.sprinkler_rabi_othercrop_waterdemand2 = sprinkler_rabi_othercrop_waterdemand2;
    obj.sprinkler_rabi_othercrop_sprinkler_waterdemand2 = sprinkler_rabi_othercrop_sprinkler_waterdemand2;
    obj.sprinkler_rabi_othercrop_reduc_gw_demand2 = sprinkler_rabi_othercrop_reduc_gw_demand2;

    obj.sprinkler_rabi_othercrop_name3 = $('#sprinkler_rabi_othercrop_name3').val();
    obj.sprinkler_rabi_othercrop_area3 = $('#sprinkler_rabi_othercrop_area3').val();
    obj.sprinkler_rabi_othercrop_irri_area3 = $('#sprinkler_rabi_othercrop_irri_area3').val();
    obj.sprinkler_rabi_othercrop_water_req3 = $('#sprinkler_rabi_othercrop_water_req3').val();
    // obj.sprinkler_rabi_othercrop_waterdemand3 = $('#sprinkler_rabi_othercrop_waterdemand3').val();

    obj.sprinkler_rabi_othercrop_waterdemand3 = sprinkler_rabi_othercrop_waterdemand3;
    obj.sprinkler_rabi_othercrop_sprinkler_waterdemand3 = sprinkler_rabi_othercrop_sprinkler_waterdemand3;
    obj.sprinkler_rabi_othercrop_reduc_gw_demand3 = sprinkler_rabi_othercrop_reduc_gw_demand3;

    obj.sprinkler_rabi_othercrop_name4 = $('#sprinkler_rabi_othercrop_name4').val();
    obj.sprinkler_rabi_othercrop_area4 = $('#sprinkler_rabi_othercrop_area4').val();
    obj.sprinkler_rabi_othercrop_irri_area4 = $('#sprinkler_rabi_othercrop_irri_area4').val();
    obj.sprinkler_rabi_othercrop_water_req4 = $('#sprinkler_rabi_othercrop_water_req4').val();
    // obj.sprinkler_rabi_othercrop_waterdemand4 = $('#sprinkler_rabi_othercrop_waterdemand4').val();

    obj.sprinkler_rabi_othercrop_waterdemand4 = sprinkler_rabi_othercrop_waterdemand4;
    obj.sprinkler_rabi_othercrop_sprinkler_waterdemand4 = sprinkler_rabi_othercrop_sprinkler_waterdemand4;
    obj.sprinkler_rabi_othercrop_reduc_gw_demand4 = sprinkler_rabi_othercrop_reduc_gw_demand4;

    obj.sprinkler_rabi_othercrop_name5 = $('#sprinkler_rabi_othercrop_name5').val();
    obj.sprinkler_rabi_othercrop_area5 = $('#sprinkler_rabi_othercrop_area5').val();
    obj.sprinkler_rabi_othercrop_irri_area5 = $('#sprinkler_rabi_othercrop_irri_area5').val();
    obj.sprinkler_rabi_othercrop_water_req5 = $('#sprinkler_rabi_othercrop_water_req5').val();
    // obj.sprinkler_rabi_othercrop_waterdemand5 = $('#sprinkler_rabi_othercrop_waterdemand5').val();

    obj.sprinkler_rabi_othercrop_waterdemand5 = sprinkler_rabi_othercrop_waterdemand5;
    obj.sprinkler_rabi_othercrop_sprinkler_waterdemand5 = sprinkler_rabi_othercrop_sprinkler_waterdemand5;
    obj.sprinkler_rabi_othercrop_reduc_gw_demand5 = sprinkler_rabi_othercrop_reduc_gw_demand5;

    //summer
    obj.sprinkler_summer_othercrop_name1 = $('#sprinkler_summer_othercrop_name1').val();
    obj.sprinkler_summer_othercrop_area1 = $('#sprinkler_summer_othercrop_area1').val();
    obj.sprinkler_summer_othercrop_irri_area1 = $('#sprinkler_summer_othercrop_irri_area1').val();
    obj.sprinkler_summer_othercrop_water_req1 = $('#sprinkler_summer_othercrop_water_req1').val();
    // obj.sprinkler_summer_othercrop_waterdemand1 = $('#sprinkler_summer_othercrop_waterdemand1').val();

    obj.sprinkler_summer_othercrop_waterdemand1 = sprinkler_summer_othercrop_waterdemand1;
    obj.sprinkler_summer_othercrop_sprinkler_waterdemand1 = sprinkler_summer_othercrop_sprinkler_waterdemand1;
    obj.sprinkler_summer_othercrop_reduc_gw_demand1 = sprinkler_summer_othercrop_reduc_gw_demand1;

    obj.sprinkler_summer_othercrop_name2 = $('#sprinkler_summer_othercrop_name2').val();
    obj.sprinkler_summer_othercrop_area2 = $('#sprinkler_summer_othercrop_area2').val();
    obj.sprinkler_summer_othercrop_irri_area2 = $('#sprinkler_summer_othercrop_irri_area2').val();
    obj.sprinkler_summer_othercrop_water_req2 = $('#sprinkler_summer_othercrop_water_req2').val();
    // obj.sprinkler_summer_othercrop_waterdemand2 = $('#sprinkler_summer_othercrop_waterdemand2').val();

    obj.sprinkler_summer_othercrop_waterdemand2 = sprinkler_summer_othercrop_waterdemand2;
    obj.sprinkler_summer_othercrop_sprinkler_waterdemand2 = sprinkler_summer_othercrop_sprinkler_waterdemand2;
    obj.sprinkler_summer_othercrop_reduc_gw_demand2 = sprinkler_summer_othercrop_reduc_gw_demand2;

    obj.sprinkler_summer_othercrop_name3 = $('#sprinkler_summer_othercrop_name3').val();
    obj.sprinkler_summer_othercrop_area3 = $('#sprinkler_summer_othercrop_area3').val();
    obj.sprinkler_summer_othercrop_irri_area3 = $('#sprinkler_summer_othercrop_irri_area3').val();
    obj.sprinkler_summer_othercrop_water_req3 = $('#sprinkler_summer_othercrop_water_req3').val();
    // obj.sprinkler_summer_othercrop_waterdemand3 = $('#sprinkler_summer_othercrop_waterdemand3').val();

    obj.sprinkler_summer_othercrop_waterdemand3 = sprinkler_summer_othercrop_waterdemand3;
    obj.sprinkler_summer_othercrop_sprinkler_waterdemand3 = sprinkler_summer_othercrop_sprinkler_waterdemand3;
    obj.sprinkler_summer_othercrop_reduc_gw_demand3 = sprinkler_summer_othercrop_reduc_gw_demand3;

    obj.sprinkler_summer_othercrop_name4 = $('#sprinkler_summer_othercrop_name4').val();
    obj.sprinkler_summer_othercrop_area4 = $('#sprinkler_summer_othercrop_area4').val();
    obj.sprinkler_summer_othercrop_irri_area4 = $('#sprinkler_summer_othercrop_irri_area4').val();
    obj.sprinkler_summer_othercrop_water_req4 = $('#sprinkler_summer_othercrop_water_req4').val();
    // obj.sprinkler_summer_othercrop_waterdemand4 = $('#sprinkler_summer_othercrop_waterdemand4').val();

    obj.sprinkler_summer_othercrop_waterdemand4 = sprinkler_summer_othercrop_waterdemand4;
    obj.sprinkler_summer_othercrop_sprinkler_waterdemand4 = sprinkler_summer_othercrop_sprinkler_waterdemand4;
    obj.sprinkler_summer_othercrop_reduc_gw_demand4 = sprinkler_summer_othercrop_reduc_gw_demand4;

    obj.sprinkler_summer_othercrop_name5 = $('#sprinkler_summer_othercrop_name5').val();
    obj.sprinkler_summer_othercrop_area5 = $('#sprinkler_summer_othercrop_area5').val();
    obj.sprinkler_summer_othercrop_irri_area5 = $('#sprinkler_summer_othercrop_irri_area5').val();
    obj.sprinkler_summer_othercrop_water_req5 = $('#sprinkler_summer_othercrop_water_req5').val();
    // obj.sprinkler_summer_othercrop_waterdemand5 = $('#sprinkler_summer_othercrop_waterdemand5').val();

    obj.sprinkler_summer_othercrop_waterdemand5 = sprinkler_summer_othercrop_waterdemand5;
    obj.sprinkler_summer_othercrop_sprinkler_waterdemand5 = sprinkler_summer_othercrop_sprinkler_waterdemand5;
    obj.sprinkler_summer_othercrop_reduc_gw_demand5 = sprinkler_summer_othercrop_reduc_gw_demand5;


    obj.sprinkler_summer_horticulture_crop_area = $('#sprinkler_summer_horticulture_crop_area').val();
    obj.sprinkler_summer_horticulture_irri_area = $('#sprinkler_summer_horticulture_irri_area').val();
    obj.sprinkler_summer_horticulture_water_req = $('#sprinkler_summer_horticulture_water_req').val();

    obj.sprinkler_summer_horticulture_waterdemand = sprinkler_summer_horticulture_waterdemand;
    obj.sprinkler_summer_horticulture_netwater_waterdemand = sprinkler_summer_horticulture_netwater_waterdemand;
    obj.sprinkler_summer_horticulture_reduction_gw_demand = sprinkler_summer_horticulture_reduction_gw_demand;


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WspNew/sprinkler_SavedInfo",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            $('#SAVE_BTN1').prop('disabled', false);
            if (response != "Saved Successfully" && response != "Logout" && response != "valid_negitive") {
                window.location = "/Error/DefaultError";
            }

        }
    });
}



function Sprinkler_otherpopup(ss) {


    Kharif_WaterRequire();
    Rabi_WaterRequire();
    Crop_WaterRequire();

    if (ss.id == "sprinkler_kharif_othercrop_area1") {
        var Name = $('#sprinkler_kharif_othercrop_name1').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_othercrop_waterdemand1).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand1).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss.id == "sprinkler_kharif_othercrop_area2") {
        var Name = $('#sprinkler_kharif_othercrop_name2').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_othercrop_waterdemand2).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand2).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss.id == "sprinkler_kharif_othercrop_area3") {
        var Name = $('#sprinkler_kharif_othercrop_name3').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_othercrop_waterdemand3).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand3).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss.id == "sprinkler_kharif_othercrop_area4") {
        var Name = $('#sprinkler_kharif_othercrop_name4').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_othercrop_waterdemand4).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand4).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss.id == "sprinkler_kharif_othercrop_area5") {
        var Name = $('#sprinkler_kharif_othercrop_name5').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_kharif_othercrop_waterdemand5).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_kharif_othercrop_sprinkler_waterdemand5).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_kharif_othercrop_reduc_gw_demand5).toFixed(2));
    }

    if (ss.id == "sprinkler_rabi_othercrop_area1") {

        var Name = $('#sprinkler_rabi_othercrop_name1').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_othercrop_waterdemand1).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand1).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss.id == "sprinkler_rabi_othercrop_area2") {

        var Name = $('#sprinkler_rabi_othercrop_name2').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_othercrop_waterdemand2).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand2).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss.id == "sprinkler_rabi_othercrop_area3") {

        var Name = $('#sprinkler_rabi_othercrop_name3').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_othercrop_waterdemand3).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand3).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss.id == "sprinkler_rabi_othercrop_area4") {

        var Name = $('#sprinkler_rabi_othercrop_name4').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_othercrop_waterdemand4).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand4).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss.id == "sprinkler_rabi_othercrop_area5") {

        var Name = $('#sprinkler_rabi_othercrop_name5').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_rabi_othercrop_waterdemand5).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_rabi_othercrop_sprinkler_waterdemand5).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_rabi_othercrop_reduc_gw_demand5).toFixed(2));
    }


    if (ss.id == "sprinkler_summer_othercrop_area1") {
        var Name = $('#sprinkler_summer_othercrop_name1').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_othercrop_waterdemand1).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand1).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss.id == "sprinkler_summer_othercrop_area2") {
        var Name = $('#sprinkler_summer_othercrop_name2').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_othercrop_waterdemand2).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand2).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss.id == "sprinkler_summer_othercrop_area3") {
        var Name = $('#sprinkler_summer_othercrop_name3').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_othercrop_waterdemand3).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand3).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss.id == "sprinkler_summer_othercrop_area4") {
        var Name = $('#sprinkler_summer_othercrop_name4').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_othercrop_waterdemand4).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand4).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss.id == "sprinkler_summer_othercrop_area5") {
        var Name = $('#sprinkler_summer_othercrop_name5').val();
        $('#SprinklerName').text(Name);
        $('#Individual_WaterDemand').text(parseFloat(sprinkler_summer_othercrop_waterdemand5).toFixed(2));
        $('#Individual_SprinklerWaterDemand').text(parseFloat(sprinkler_summer_othercrop_sprinkler_waterdemand5).toFixed(2));
        $('#Individual_ReductionGWdemand').text(parseFloat(sprinkler_summer_othercrop_reduc_gw_demand5).toFixed(2));
    }

}