var add_Pipeline_kharif_count = 0;
var add_Pipeline_kharif_count1 = 0;
var add_Pipeline_kharif_count2 = 0;
var add_Pipeline_kharif_count3 = 0;
var add_Pipeline_kharif_count4 = 0;
var add_Pipeline_kharif_count5 = 0;


var add_Pipeline_rabi_count = 0;
var add_Pipeline_rabi_count1 = 0;
var add_Pipeline_rabi_count2 = 0;
var add_Pipeline_rabi_count3 = 0;
var add_Pipeline_rabi_count4 = 0;
var add_Pipeline_rabi_count5 = 0;


var add_Pipeline_summer_count = 0;
var add_Pipeline_summer_count1 = 0;
var add_Pipeline_summer_count2 = 0;
var add_Pipeline_summer_count3 = 0;
var add_Pipeline_summer_count4 = 0;
var add_Pipeline_summer_count5 = 0;

function Pipeline_Kharif_AddCrop() {

    if (add_Pipeline_kharif_count1 == 1) {
        $('#Pipeline_crp1').show();

        var s11 = "pipeline_kharif_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control"  id="pipeline_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area1" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req1" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Pipeline_crp1').html(ass);
        add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
        add_Pipeline_kharif_count1 = 0;


        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("pipeline_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_area1").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_irri_area1").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_water_req1").disabled = true;

        //}
    }
    else if (add_Pipeline_kharif_count2 == 2) {
        $('#Pipeline_crp2').show();

        var s11 = "pipeline_kharif_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area2" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req2" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Pipeline_crp2').html(ass);
        add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
        add_Pipeline_kharif_count2 = 0;


        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_area2").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_irri_area2").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Pipeline_kharif_count3 == 3) {
        $('#Pipeline_crp3').show();


        var s11 = "pipeline_kharif_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff"  id="sp3" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control" id="pipeline_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area3" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req3" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Pipeline_crp3').html(ass);
        add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
        add_Pipeline_kharif_count3 = 0;


        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_area3").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_irri_area3").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Pipeline_kharif_count4 == 4) {
        $('#Pipeline_crp4').show();

        var s11 = "pipeline_kharif_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text"  class="form-control" id="pipeline_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area4" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req4" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Pipeline_crp4').html(ass);
        add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
        add_Pipeline_kharif_count4 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_area4").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_irri_area4").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Pipeline_kharif_count5 == 5) {
        $('#Pipeline_crp5').show();
        var s11 = "pipeline_kharif_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text"  class="form-control" id="pipeline_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area5" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req5" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Pipeline_crp5').html(ass);
        $('#Pipeline_Kharif_AddCrop').hide();
        add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
        add_Pipeline_kharif_count5 = 0;


        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_area5").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_irri_area5").disabled = true;
        //    document.getElementById("pipeline_kharif_othercrop_water_req5").disabled = true;
        //}
    }
    if (add_Pipeline_kharif_count == 5) {
        $('#Pipeline_Kharif_AddCrop').hide();
    }
}

function Pipeline_Rabi_AddCrop() {


    if (add_Pipeline_rabi_count1 == 1) {

        $('#Pipeline_Rabi_crp1').show();

        var s11 = "pipeline_rabi_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area1" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req1" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Pipeline_Rabi_crp1').html(ass);
        add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
        add_Pipeline_rabi_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("pipeline_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_area1").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_irri_area1").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_water_req1").disabled = true;


        //}
    }
    else if (add_Pipeline_rabi_count2 == 2) {
        $('#Pipeline_Rabi_crp2').show();

        var s11 = "pipeline_rabi_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area2" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req2" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Pipeline_Rabi_crp2').html(ass);
        add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
        add_Pipeline_rabi_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_area2").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_irri_area2").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_water_req2").disabled = true;


        //}
    }

    else if (add_Pipeline_rabi_count3 == 3) {
        $('#Pipeline_Rabi_crp3').show();

        var s11 = "pipeline_rabi_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area3" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req3"onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Pipeline_Rabi_crp3').html(ass);
        add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
        add_Pipeline_rabi_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_area3").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_irri_area3").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_water_req3").disabled = true;


        //}
    }

    else if (add_Pipeline_rabi_count4 == 4) {
        $('#Pipeline_Rabi_crp4').show();

        var s11 = "pipeline_rabi_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area4" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req4" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Pipeline_Rabi_crp4').html(ass);
        add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
        add_Pipeline_rabi_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_area4").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_irri_area4").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_water_req4").disabled = true;


        //}
    }
    else if (add_Pipeline_rabi_count5 == 5) {
        $('#Pipeline_Rabi_crp5').show();
        var s11 = "pipeline_rabi_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area5" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req5" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Pipeline_Rabi_crp5').html(ass);

        $('#Pipeline_Rabi_AddCrop').hide();
        add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;

        add_Pipeline_rabi_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_area5").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_irri_area5").disabled = true;
        //    document.getElementById("pipeline_rabi_othercrop_water_req5").disabled = true;

        //}
    }

    if (add_Pipeline_rabi_count == 5) {
        $('#Pipeline_Rabi_AddCrop').hide();
    }
}


function Pipeline_Summer_AddCrop() {

    if (add_Pipeline_summer_count1 == 1) {

        $('#Pipeline_Summer_crp1').show();

        var s11 = "pipeline_summer_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area1" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_water_req1" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Pipeline_Summer_crp1').html(ass);
        add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
        add_Pipeline_summer_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("pipeline_summer_othercrop_name1").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_area1").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_irri_area1").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_water_req1").disabled = true;


        //}
    }
    else if (add_Pipeline_summer_count2 == 2) {
        $('#Pipeline_Summer_crp2').show();

        var s11 = "pipeline_summer_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp2" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area2" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_water_req2"onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Pipeline_Summer_crp2').html(ass);
        add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
        add_Pipeline_summer_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_summer_othercrop_name2").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_area2").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_irri_area2").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Pipeline_summer_count3 == 3) {
        $('#Pipeline_Summer_crp3').show();

        var s11 = "pipeline_summer_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp3" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()"  id="pipeline_summer_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area3" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_water_req3" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Pipeline_Summer_crp3').html(ass);
        add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
        add_Pipeline_summer_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_summer_othercrop_name3").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_area3").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_irri_area3").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Pipeline_summer_count4 == 4) {
        $('#Pipeline_Summer_crp4').show();

        var s11 = "pipeline_summer_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp4" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area4" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_water_req4" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Pipeline_Summer_crp4').html(ass);
        add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
        add_Pipeline_summer_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_summer_othercrop_name4").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_area4").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_irri_area4").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_water_req4").disabled = true;


        //}
    }
    else if (add_Pipeline_summer_count5 == 5) {
        $('#Pipeline_Summer_crp5').show();
        var s11 = "pipeline_summer_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_underline" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" id="pipeline_summer_othercrop_name5" class="form-control" id="" placeholder="Crop Name" title="Crop Name" />' +
            '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area5" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
            '</li><li><input type="text" id="pipeline_summer_othercrop_water_req5" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Pipeline_Summer_crp5').html(ass);
        $('#Pipeline_Summer_AddCrop').hide();
        add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
        add_Pipeline_summer_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("pipeline_summer_othercrop_name5").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_area5").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_irri_area5").disabled = true;
        //    document.getElementById("pipeline_summer_othercrop_water_req5").disabled = true;

        //}
    }

    if (add_Pipeline_summer_count == 5) {
        $('#Pipeline_Summer_AddCrop').hide();
    }
}


function PipeLineInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/PipeLineInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {


            //if (response == "Error") {
            //    window.location = "/WSPHome/WspDemandside";
            //}
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (response != "NO") {

                if (response.pipeline_kharif_othercrop_name1 == null || response.pipeline_kharif_othercrop_name1 == "") {
                    add_Pipeline_kharif_count1 = 1;
                }
                else {
                    add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
                }

                if (response.pipeline_kharif_othercrop_name2 == null || response.pipeline_kharif_othercrop_name2 == "") {
                    add_Pipeline_kharif_count2 = 2;
                }
                else {
                    add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
                }

                if (response.pipeline_kharif_othercrop_name3 == null || response.pipeline_kharif_othercrop_name3 == "") {
                    add_Pipeline_kharif_count3 = 3;
                }
                else {
                    add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
                }

                if (response.pipeline_kharif_othercrop_name4 == null || response.pipeline_kharif_othercrop_name4 == "") {
                    add_Pipeline_kharif_count4 = 4;
                }
                else {
                    add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;

                }
                if (response.pipeline_kharif_othercrop_name5 == null || response.pipeline_kharif_othercrop_name5 == "") {
                    add_Pipeline_kharif_count5 = 5;
                }
                else {
                    add_Pipeline_kharif_count = add_Pipeline_kharif_count + 1;
                }
                if (add_Pipeline_kharif_count == 5) {

                    $('#Pipeline_Kharif_AddCrop').hide();
                }

                if (response.pipeline_kharif_othercrop_name1 != null && response.pipeline_kharif_othercrop_name1 != "null" && response.pipeline_kharif_othercrop_name1 != "") {
                    var pipeline_kharif_othercrop_area1 = "";
                    var pipeline_kharif_othercrop_irri_area1 = "";
                    var pipeline_kharif_othercrop_water_req1 = "";
                    if (response.pipeline_kharif_othercrop_area1 != null && response.pipeline_kharif_othercrop_area1 != "") {
                        pipeline_kharif_othercrop_area1 = response.pipeline_kharif_othercrop_area1;
                    }
                    if (response.pipeline_kharif_othercrop_irri_area1 != null && response.pipeline_kharif_othercrop_irri_area1 != "") {
                        pipeline_kharif_othercrop_irri_area1 = response.pipeline_kharif_othercrop_irri_area1;
                    }
                    if (response.pipeline_kharif_othercrop_water_req1 != null && response.pipeline_kharif_othercrop_water_req1 != "") {
                        pipeline_kharif_othercrop_water_req1 = response.pipeline_kharif_othercrop_water_req1;
                    }
                    var s11 = "pipeline_kharif_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_kharif_othercrop_name1 + '<a href="#Filter_underline" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="pipeline_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_kharif_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_kharif_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area1" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" value="' + pipeline_kharif_othercrop_irri_area1 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req1" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal"value="' + pipeline_kharif_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Pipeline_crp1').html(ass);
                    $('#pipeline_kharif_othercrop_name1').hide();

                    $('#Pipeline_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("pipeline_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_area1").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_water_req1").disabled = true;

                    //}

                }

                if (response.pipeline_kharif_othercrop_name2 != null && response.pipeline_kharif_othercrop_name2 != "null" && response.pipeline_kharif_othercrop_name2 != "") {
                    var pipeline_kharif_othercrop_area2 = "";
                    var pipeline_kharif_othercrop_irri_area2 = "";
                    var pipeline_kharif_othercrop_water_req2 = "";
                    if (response.pipeline_kharif_othercrop_area2 != null && response.pipeline_kharif_othercrop_area2 != "") {
                        pipeline_kharif_othercrop_area2 = response.pipeline_kharif_othercrop_area2;
                    }
                    if (response.pipeline_kharif_othercrop_irri_area2 != null && response.pipeline_kharif_othercrop_irri_area2 != "") {
                        pipeline_kharif_othercrop_irri_area2 = response.pipeline_kharif_othercrop_irri_area2;
                    }
                    if (response.pipeline_kharif_othercrop_water_req2 != null && response.pipeline_kharif_othercrop_water_req2 != "") {
                        pipeline_kharif_othercrop_water_req2 = response.pipeline_kharif_othercrop_water_req2;
                    }

                    var s11 = "pipeline_kharif_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_kharif_othercrop_name2 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_kharif_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_kharif_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area2" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" value="' + pipeline_kharif_othercrop_irri_area2 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req2" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal"value="' + pipeline_kharif_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Pipeline_crp2').html(ass);
                    $('#pipeline_kharif_othercrop_name2').hide();
                    $('#Pipeline_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_area2").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_water_req2").disabled = true;

                    //}
                }
                if (response.pipeline_kharif_othercrop_name3 != null && response.pipeline_kharif_othercrop_name3 != "null" && response.pipeline_kharif_othercrop_name3 != "") {
                    var pipeline_kharif_othercrop_area3 = "";
                    var pipeline_kharif_othercrop_irri_area3 = "";
                    var pipeline_kharif_othercrop_water_req3 = "";
                    if (response.pipeline_kharif_othercrop_area3 != null && response.pipeline_kharif_othercrop_area3 != "") {
                        pipeline_kharif_othercrop_area3 = response.pipeline_kharif_othercrop_area3;
                    }
                    if (response.pipeline_kharif_othercrop_irri_area3 != null && response.pipeline_kharif_othercrop_irri_area3 != "") {
                        pipeline_kharif_othercrop_irri_area3 = response.pipeline_kharif_othercrop_irri_area3;
                    }
                    if (response.pipeline_kharif_othercrop_water_req3 != null && response.pipeline_kharif_othercrop_water_req3 != "") {
                        pipeline_kharif_othercrop_water_req3 = response.pipeline_kharif_othercrop_water_req3;
                    }
                    var s11 = "pipeline_kharif_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_kharif_othercrop_name3 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_kharif_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_kharif_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area3" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" value="' + pipeline_kharif_othercrop_irri_area3 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req3" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal"value="' + pipeline_kharif_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Pipeline_crp3').html(ass);
                    $('#pipeline_kharif_othercrop_name3').hide();
                    $('#Pipeline_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_area3").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.pipeline_kharif_othercrop_name4 != null && response.pipeline_kharif_othercrop_name4 != "null" && response.pipeline_kharif_othercrop_name4 != "") {

                    var pipeline_kharif_othercrop_area4 = "";
                    var pipeline_kharif_othercrop_irri_area4 = "";
                    var pipeline_kharif_othercrop_water_req4 = "";
                    if (response.pipeline_kharif_othercrop_area4 != null && response.pipeline_kharif_othercrop_area4 != "") {
                        pipeline_kharif_othercrop_area4 = response.pipeline_kharif_othercrop_area4;
                    }
                    if (response.pipeline_kharif_othercrop_irri_area4 != null && response.pipeline_kharif_othercrop_irri_area4 != "") {
                        pipeline_kharif_othercrop_irri_area4 = response.pipeline_kharif_othercrop_irri_area4;
                    }
                    if (response.pipeline_kharif_othercrop_water_req4 != null && response.pipeline_kharif_othercrop_water_req4 != "") {
                        pipeline_kharif_othercrop_water_req4 = response.pipeline_kharif_othercrop_water_req4;
                    }
                    var s11 = "pipeline_kharif_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_kharif_othercrop_name4 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_kharif_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_kharif_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area4" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" value="' + pipeline_kharif_othercrop_irri_area4 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req4" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal"value="' + pipeline_kharif_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Pipeline_crp4').html(ass);
                    $('#pipeline_kharif_othercrop_name4').hide();
                    $('#Pipeline_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_area4").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_water_req4").disabled = true;

                    //}
                }
                if (response.pipeline_kharif_othercrop_name5 != null && response.pipeline_kharif_othercrop_name5 != "null" && response.pipeline_kharif_othercrop_name5 != "") {

                    var pipeline_kharif_othercrop_area5 = "";
                    var pipeline_kharif_othercrop_irri_area5 = "";
                    var pipeline_kharif_othercrop_water_req5 = "";
                    if (response.pipeline_kharif_othercrop_area5 != null && response.pipeline_kharif_othercrop_area5 != "") {
                        pipeline_kharif_othercrop_area5 = response.pipeline_kharif_othercrop_area5;
                    }
                    if (response.pipeline_kharif_othercrop_irri_area5 != null && response.pipeline_kharif_othercrop_irri_area5 != "") {
                        pipeline_kharif_othercrop_irri_area5 = response.pipeline_kharif_othercrop_irri_area5;
                    }
                    if (response.pipeline_kharif_othercrop_water_req5 != null && response.pipeline_kharif_othercrop_water_req5 != "") {
                        pipeline_kharif_othercrop_water_req5 = response.pipeline_kharif_othercrop_water_req5;
                    }

                    var s11 = "pipeline_kharif_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_kharif_othercrop_name5 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_kharif_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Kharif_WaterRequire()" id="pipeline_kharif_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_kharif_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_irri_area5" onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal" value="' + pipeline_kharif_othercrop_irri_area5 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_kharif_othercrop_water_req5"  onkeyup="Pipeline_Kharif_WaterRequire()" class="form-control decimal"value="' + pipeline_kharif_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Pipeline_crp5').html(ass);
                    $('#pipeline_kharif_othercrop_name5').hide();
                    $('#Pipeline_crp5').show();
                    $('#Pipeline_Kharif_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_area5").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("pipeline_kharif_othercrop_water_req5").disabled = true;
                    //}
                }



                //rabi
                if (response.pipeline_rabi_othercrop_name1 == null || response.pipeline_rabi_othercrop_name1 == "") {
                    add_Pipeline_rabi_count1 = 1;
                }
                else {
                    add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
                }

                if (response.pipeline_rabi_othercrop_name2 == null || response.pipeline_rabi_othercrop_name2 == "") {
                    add_Pipeline_rabi_count2 = 2;
                }
                else {
                    add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
                }

                if (response.pipeline_rabi_othercrop_name3 == null || response.pipeline_rabi_othercrop_name3 == "") {
                    add_Pipeline_rabi_count3 = 3;
                }
                else {
                    add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
                }

                if (response.pipeline_rabi_othercrop_name4 == null || response.pipeline_rabi_othercrop_name4 == "") {
                    add_Pipeline_rabi_count4 = 4;
                }
                else {
                    add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
                }

                if (response.pipeline_rabi_othercrop_name5 == null || response.pipeline_rabi_othercrop_name5 == "") {
                    add_Pipeline_rabi_count5 = 5;
                }
                else {

                    add_Pipeline_rabi_count = add_Pipeline_rabi_count + 1;
                }

                if (add_Pipeline_rabi_count == 5) {

                    $('#Pipeline_Rabi_AddCrop').hide();
                }

                if (response.pipeline_rabi_othercrop_name1 != null && response.pipeline_rabi_othercrop_name1 != "null" && response.pipeline_rabi_othercrop_name1 != "") {
                    var pipeline_rabi_othercrop_area1 = "";
                    var pipeline_rabi_othercrop_irri_area1 = "";
                    var pipeline_rabi_othercrop_water_req1 = "";
                    if (response.pipeline_rabi_othercrop_area1 != null && response.pipeline_rabi_othercrop_area1 != "") {
                        pipeline_rabi_othercrop_area1 = response.pipeline_rabi_othercrop_area1;
                    }
                    if (response.pipeline_rabi_othercrop_irri_area1 != null && response.pipeline_rabi_othercrop_irri_area1 != "") {
                        pipeline_rabi_othercrop_irri_area1 = response.pipeline_rabi_othercrop_irri_area1;
                    }
                    if (response.pipeline_rabi_othercrop_water_req1 != null && response.pipeline_rabi_othercrop_water_req1 != "") {
                        pipeline_rabi_othercrop_water_req1 = response.pipeline_rabi_othercrop_water_req1;
                    }

                    var s11 = "pipeline_rabi_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_rabi_othercrop_name1 + '<a href="#Filter_underline" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="pipeline_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_rabi_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_rabi_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area1" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" value="' + pipeline_rabi_othercrop_irri_area1 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req1" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal"value="' + pipeline_rabi_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Pipeline_Rabi_crp1').html(ass);
                    $('#pipeline_rabi_othercrop_name1').hide();

                    $('#Pipeline_Rabi_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("pipeline_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_area1").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_water_req1").disabled = true;

                    //}
                }

                if (response.pipeline_rabi_othercrop_name2 != null && response.pipeline_rabi_othercrop_name2 != "null" && response.pipeline_rabi_othercrop_name2 != "") {

                    var pipeline_rabi_othercrop_area2 = "";
                    var pipeline_rabi_othercrop_irri_area2 = "";
                    var pipeline_rabi_othercrop_water_req2 = "";
                    if (response.pipeline_rabi_othercrop_area2 != null && response.pipeline_rabi_othercrop_area2 != "") {
                        pipeline_rabi_othercrop_area2 = response.pipeline_rabi_othercrop_area2;
                    }
                    if (response.pipeline_rabi_othercrop_irri_area2 != null && response.pipeline_rabi_othercrop_irri_area2 != "") {
                        pipeline_rabi_othercrop_irri_area2 = response.pipeline_rabi_othercrop_irri_area2;
                    }
                    if (response.pipeline_rabi_othercrop_water_req2 != null && response.pipeline_rabi_othercrop_water_req2 != "") {
                        pipeline_rabi_othercrop_water_req2 = response.pipeline_rabi_othercrop_water_req2;
                    }

                    var s11 = "pipeline_rabi_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_rabi_othercrop_name2 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_rabi_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_rabi_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area2" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" value="' + pipeline_rabi_othercrop_irri_area2 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req2" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal"value="' + pipeline_rabi_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';
                    $('#Pipeline_Rabi_crp2').show();
                    $('#Pipeline_Rabi_crp2').html(ass);
                    $('#pipeline_rabi_othercrop_name2').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_area2").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_water_req2").disabled = true;

                    //}

                }
                if (response.pipeline_rabi_othercrop_name3 != null && response.pipeline_rabi_othercrop_name3 != "null" && response.pipeline_rabi_othercrop_name3 != "") {
                    var pipeline_rabi_othercrop_area3 = "";
                    var pipeline_rabi_othercrop_irri_area3 = "";
                    var pipeline_rabi_othercrop_water_req3 = "";
                    if (response.pipeline_rabi_othercrop_area3 != null && response.pipeline_rabi_othercrop_area3 != "") {
                        pipeline_rabi_othercrop_area3 = response.pipeline_rabi_othercrop_area3;
                    }
                    if (response.pipeline_rabi_othercrop_irri_area3 != null && response.pipeline_rabi_othercrop_irri_area3 != "") {
                        pipeline_rabi_othercrop_irri_area3 = response.pipeline_rabi_othercrop_irri_area3;
                    }
                    if (response.pipeline_rabi_othercrop_water_req3 != null && response.pipeline_rabi_othercrop_water_req3 != "") {
                        pipeline_rabi_othercrop_water_req3 = response.pipeline_rabi_othercrop_water_req3;
                    }
                    var s11 = "pipeline_rabi_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_rabi_othercrop_name3 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_rabi_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_rabi_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area3" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" value="' + pipeline_rabi_othercrop_irri_area3 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req3" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal"value="' + pipeline_rabi_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Pipeline_Rabi_crp3').show();
                    $('#Pipeline_Rabi_crp3').html(ass);
                    $('#pipeline_rabi_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_area3").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.pipeline_rabi_othercrop_name4 != null && response.pipeline_rabi_othercrop_name4 != "null" && response.pipeline_rabi_othercrop_name4 != "") {

                    var pipeline_rabi_othercrop_area4 = "";
                    var pipeline_rabi_othercrop_irri_area4 = "";
                    var pipeline_rabi_othercrop_water_req4 = "";
                    if (response.pipeline_rabi_othercrop_area4 != null && response.pipeline_rabi_othercrop_area4 != "") {
                        pipeline_rabi_othercrop_area4 = response.pipeline_rabi_othercrop_area4;
                    }
                    if (response.pipeline_rabi_othercrop_irri_area4 != null && response.pipeline_rabi_othercrop_irri_area4 != "") {
                        pipeline_rabi_othercrop_irri_area4 = response.pipeline_rabi_othercrop_irri_area4;
                    }
                    if (response.pipeline_rabi_othercrop_water_req4 != null && response.pipeline_rabi_othercrop_water_req4 != "") {
                        pipeline_rabi_othercrop_water_req4 = response.pipeline_rabi_othercrop_water_req4;
                    }
                    var s11 = "pipeline_rabi_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_rabi_othercrop_name4 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_rabi_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_rabi_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area4" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" value="' + pipeline_rabi_othercrop_irri_area4 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req4" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal"value="' + pipeline_rabi_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Pipeline_Rabi_crp4').show();

                    $('#Pipeline_Rabi_crp4').html(ass);
                    $('#pipeline_rabi_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_area4").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.pipeline_rabi_othercrop_name5 != null && response.pipeline_rabi_othercrop_name5 != "null" && response.pipeline_rabi_othercrop_name5 != "") {
                    var pipeline_rabi_othercrop_area5 = "";
                    var pipeline_rabi_othercrop_irri_area5 = "";
                    var pipeline_rabi_othercrop_water_req5 = "";
                    if (response.pipeline_rabi_othercrop_area5 != null && response.pipeline_rabi_othercrop_area5 != "") {
                        pipeline_rabi_othercrop_area5 = response.pipeline_rabi_othercrop_area5;
                    }
                    if (response.pipeline_rabi_othercrop_irri_area5 != null && response.pipeline_rabi_othercrop_irri_area5 != "") {
                        pipeline_rabi_othercrop_irri_area5 = response.pipeline_rabi_othercrop_irri_area5;
                    }
                    if (response.pipeline_rabi_othercrop_water_req5 != null && response.pipeline_rabi_othercrop_water_req5 != "") {
                        pipeline_rabi_othercrop_water_req5 = response.pipeline_rabi_othercrop_water_req5;
                    }
                    var s11 = "pipeline_rabi_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_rabi_othercrop_name5 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_rabi_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Rabi_WaterRequire()" id="pipeline_rabi_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_rabi_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_irri_area5" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal" value="' + pipeline_rabi_othercrop_irri_area5 + '" placeholder="Area proposed for Underground Pipelines Irrigation(ha)" title="Area proposed for Underground Pipelines Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_rabi_othercrop_water_req5" onkeyup="Pipeline_Rabi_WaterRequire()" class="form-control decimal"value="' + pipeline_rabi_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Pipeline_Rabi_crp5').show();
                    $('#Pipeline_Rabi_crp5').html(ass);

                    $('#pipeline_rabi_othercrop_name5').hide();

                    $('#Pipeline_Rabi_AddCrop').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_area5").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("pipeline_rabi_othercrop_water_req5").disabled = true;

                    //}
                }



                //Summer

                if (response.pipeline_summer_othercrop_name1 == null || response.pipeline_summer_othercrop_name1 == "") {
                    add_Pipeline_summer_count1 = 1;
                }
                else {
                    add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
                }

                if (response.pipeline_summer_othercrop_name2 == null || response.pipeline_summer_othercrop_name2 == "") {
                    add_Pipeline_summer_count2 = 2;
                }
                else {
                    add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
                }

                if (response.pipeline_summer_othercrop_name3 == null || response.pipeline_summer_othercrop_name3 == "") {
                    add_Pipeline_summer_count3 = 3;
                }
                else {
                    add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
                }

                if (response.pipeline_summer_othercrop_name4 == null || response.pipeline_summer_othercrop_name4 == "") {
                    add_Pipeline_summer_count4 = 4;
                }
                else {

                    add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
                }

                if (response.pipeline_summer_othercrop_name5 == null || response.pipeline_summer_othercrop_name5 == "") {
                    add_Pipeline_summer_count5 = 5;
                } else {
                    add_Pipeline_summer_count = add_Pipeline_summer_count + 1;
                }
                if (add_Pipeline_summer_count == 5) {

                    $('#Pipeline_Summer_AddCrop').hide();
                }

                if (response.pipeline_summer_othercrop_name1 != null && response.pipeline_summer_othercrop_name1 != "null" && response.pipeline_summer_othercrop_name1 != "") {
                    var pipeline_summer_othercrop_area1 = "";
                    var pipeline_summer_othercrop_irri_area1 = "";
                    var pipeline_summer_othercrop_water_req1 = "";
                    if (response.pipeline_summer_othercrop_area1 != null && response.pipeline_summer_othercrop_area1 != "") {
                        pipeline_summer_othercrop_area1 = response.pipeline_summer_othercrop_area1;
                    }
                    if (response.pipeline_summer_othercrop_irri_area1 != null && response.pipeline_summer_othercrop_irri_area1 != "") {
                        pipeline_summer_othercrop_irri_area1 = response.pipeline_summer_othercrop_irri_area1;
                    }
                    if (response.pipeline_summer_othercrop_water_req1 != null && response.pipeline_summer_othercrop_water_req1 != "") {
                        pipeline_summer_othercrop_water_req1 = response.pipeline_summer_othercrop_water_req1;
                    }

                    var s11 = "pipeline_summer_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_summer_othercrop_name1 + '<a href="#Filter_underline" data-toggle="modal" style="float: right;" data-whatever="md_Clr1" class="comp_layout comp_blue text-center" style="float: right;">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control decimal" id="pipeline_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_summer_othercrop_name1 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area1" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_summer_othercrop_area1 + '" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area1" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" value="' + pipeline_summer_othercrop_irri_area1 + '" placeholder="Area proposed for Pipeline Irrigation(ha)" title="Area proposed for Pipeline Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_water_req1" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal"value="' + pipeline_summer_othercrop_water_req1 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Pipeline_Summer_crp1').html(ass);

                    $('#Pipeline_Summer_crp1').show();

                    $('#pipeline_summer_othercrop_name1').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("pipeline_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_area1").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_irri_area1").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_water_req1").disabled = true;

                    //}
                }

                if (response.pipeline_summer_othercrop_name2 != null && response.pipeline_summer_othercrop_name2 != "null" && response.pipeline_summer_othercrop_name2 != "") {

                    var pipeline_summer_othercrop_area2 = "";
                    var pipeline_summer_othercrop_irri_area2 = "";
                    var pipeline_summer_othercrop_water_req2 = "";
                    if (response.pipeline_summer_othercrop_area2 != null && response.pipeline_summer_othercrop_area2 != "") {
                        pipeline_summer_othercrop_area2 = response.pipeline_summer_othercrop_area2;
                    }
                    if (response.pipeline_summer_othercrop_irri_area2 != null && response.pipeline_summer_othercrop_irri_area2 != "") {
                        pipeline_summer_othercrop_irri_area2 = response.pipeline_summer_othercrop_irri_area2;
                    }
                    if (response.pipeline_summer_othercrop_water_req2 != null && response.pipeline_summer_othercrop_water_req2 != "") {
                        pipeline_summer_othercrop_water_req2 = response.pipeline_summer_othercrop_water_req2;
                    }





                    var s11 = "pipeline_summer_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_summer_othercrop_name2 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_summer_othercrop_name2 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area2" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_summer_othercrop_area2 + '" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area2" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" value="' + pipeline_summer_othercrop_irri_area2 + '" placeholder="Area proposed for Pipeline Irrigation(ha)" title="Area proposed for Pipeline Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_water_req2" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal"value="' + pipeline_summer_othercrop_water_req2 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Pipeline_Summer_crp2').html(ass);
                    $('#Pipeline_Summer_crp2').show();

                    $('#pipeline_summer_othercrop_name2').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_area2").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_irri_area2").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_water_req2").disabled = true;

                    //}
                }
                if (response.pipeline_summer_othercrop_name3 != null && response.pipeline_summer_othercrop_name3 != "null" && response.pipeline_summer_othercrop_name3 != "") {

                    var pipeline_summer_othercrop_area3 = "";
                    var pipeline_summer_othercrop_irri_area3 = "";
                    var pipeline_summer_othercrop_water_req3 = "";
                    if (response.pipeline_summer_othercrop_area3 != null && response.pipeline_summer_othercrop_area3 != "") {
                        pipeline_summer_othercrop_area3 = response.pipeline_summer_othercrop_area3;
                    }
                    if (response.pipeline_summer_othercrop_irri_area3 != null && response.pipeline_summer_othercrop_irri_area3 != "") {
                        pipeline_summer_othercrop_irri_area3 = response.pipeline_summer_othercrop_irri_area3;
                    }
                    if (response.pipeline_summer_othercrop_water_req3 != null && response.pipeline_summer_othercrop_water_req3 != "") {
                        pipeline_summer_othercrop_water_req3 = response.pipeline_summer_othercrop_water_req3;
                    }
                    var s11 = "pipeline_summer_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_summer_othercrop_name3 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_summer_othercrop_name3 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area3" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_summer_othercrop_area3 + '" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area3" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" value="' + pipeline_summer_othercrop_irri_area3 + '" placeholder="Area proposed for Pipeline Irrigation(ha)" title="Area proposed for Pipeline Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_water_req3" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal"value="' + pipeline_summer_othercrop_water_req3 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Pipeline_Summer_crp3').show();

                    $('#Pipeline_Summer_crp3').html(ass);
                    $('#pipeline_summer_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_summer_othercrop_name3").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_area3").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_irri_area3").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.pipeline_summer_othercrop_name4 != null && response.pipeline_summer_othercrop_name4 != "null" && response.pipeline_summer_othercrop_name4 != "") {

                    var pipeline_summer_othercrop_area4 = "";
                    var pipeline_summer_othercrop_irri_area4 = "";
                    var pipeline_summer_othercrop_water_req4 = "";
                    if (response.pipeline_summer_othercrop_area4 != null && response.pipeline_summer_othercrop_area4 != "") {
                        pipeline_summer_othercrop_area4 = response.pipeline_summer_othercrop_area4;
                    }
                    if (response.pipeline_summer_othercrop_irri_area4 != null && response.pipeline_summer_othercrop_irri_area4 != "") {
                        pipeline_summer_othercrop_irri_area4 = response.pipeline_summer_othercrop_irri_area4;
                    }
                    if (response.pipeline_summer_othercrop_water_req4 != null && response.pipeline_summer_othercrop_water_req4 != "") {
                        pipeline_summer_othercrop_water_req4 = response.pipeline_summer_othercrop_water_req4;
                    }
                    var s11 = "pipeline_summer_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_summer_othercrop_name4 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_summer_othercrop_name4 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area4" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_summer_othercrop_area4 + '" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area4" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" value="' + pipeline_summer_othercrop_irri_area4 + '" placeholder="Area proposed for Pipeline Irrigation(ha)" title="Area proposed for Pipeline Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_water_req4" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal"value="' + pipeline_summer_othercrop_water_req4 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Pipeline_Summer_crp4').show();

                    $('#Pipeline_Summer_crp4').html(ass);
                    $('#pipeline_summer_othercrop_name4').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_irri_area4").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_water_req4").disabled = true;



                    //}
                }
                if (response.pipeline_summer_othercrop_name5 != null && response.pipeline_summer_othercrop_name5 != "null" && response.pipeline_summer_othercrop_name5 != "") {
                    var pipeline_summer_othercrop_area5 = "";
                    var pipeline_summer_othercrop_irri_area5 = "";
                    var pipeline_summer_othercrop_water_req5 = "";
                    if (response.pipeline_summer_othercrop_area5 != null && response.pipeline_summer_othercrop_area5 != "") {
                        pipeline_summer_othercrop_area5 = response.pipeline_summer_othercrop_area5;
                    }
                    if (response.pipeline_summer_othercrop_irri_area5 != null && response.pipeline_summer_othercrop_irri_area5 != "") {
                        pipeline_summer_othercrop_irri_area5 = response.pipeline_summer_othercrop_irri_area5;
                    }
                    if (response.pipeline_summer_othercrop_water_req5 != null && response.pipeline_summer_othercrop_water_req5 != "") {
                        pipeline_summer_othercrop_water_req5 = response.pipeline_summer_othercrop_water_req5;
                    }
                    var s11 = "pipeline_summer_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.pipeline_summer_othercrop_name5 + '<a href="#Filter_underline" style="float: right;" data-toggle="modal" data-whatever="md_Clr1" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" onclick="Pipeline_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="pipeline_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.pipeline_summer_othercrop_name5 + '" hidden/>' +
                        '</li> <li><input type="text" class="form-control decimal" onkeyup="Pipeline_Crop_WaterRequire()" id="pipeline_summer_othercrop_area5" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + pipeline_summer_othercrop_area5 + '" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_irri_area5" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal" value="' + pipeline_summer_othercrop_irri_area5 + '" placeholder="Area proposed for Pipeline Irrigation(ha)" title="Area proposed for Pipeline Irrigation(ha)" />' +
                        '</li><li><input type="text" id="pipeline_summer_othercrop_water_req5" onkeyup="Pipeline_Crop_WaterRequire()" class="form-control decimal"value="' + pipeline_summer_othercrop_water_req5 + '"  placeholder="Water Requirement (mm)" title="Water Requirement (mm)" /></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Pipeline_Summer_crp5').show();
                    $('#Pipeline_Summer_crp5').html(ass);
                    $('#pipeline_summer_othercrop_name5').hide();
                    $('#Pipeline_Summer_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("pipeline_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_area5").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_irri_area5").disabled = true;
                    //    document.getElementById("pipeline_summer_othercrop_water_req5").disabled = true;

                    //}
                }



                $('#pipeline_summer_horticulture_crop_area').val(response.pipeline_summer_horticulture_crop_area);
                $('#pipeline_summer_horticulture_irri_area').val(response.pipeline_summer_horticulture_irri_area);
                //$('#pipeline_summer_horticulture_water_req').val(response.pipeline_summer_horticulture_water_req);
                if (response.pipeline_summer_horticulture_water_req != null && response.pipeline_summer_horticulture_water_req != "") {
                    $('#pipeline_summer_horticulture_water_req').val(response.pipeline_summer_horticulture_water_req);
                }
                else {
                    $('#pipeline_summer_horticulture_water_req').val(470);
                }
                $('#pipeline_summer_horticulture_waterdemand').text(response.pipeline_summer_horticulture_waterdemand);
                $('#pipeline_summer_horticulture_netwater_waterdemand').text(response.pipeline_summer_horticulture_netwater_waterdemand);
                $('#pipeline_summer_horticulture_reduction_gw_demand').text(response.pipeline_summer_horticulture_reduction_gw_demand);




                $('#pipeline_approx_estimated_cost').val(response.pipeline_approx_estimated_cost);
                $('#pipeline_cost_type').val(response.pipeline_cost_type);

                $('#pipeline_kharif_paddy_crop_area').val(response.pipeline_kharif_paddy_crop_area);
                $('#Pipelines_kharif_Paddy_FundingSource').val(response.pipeline_kharif_paddy_fundingsource);
                $('#pipeline_kharif_paddy_irri_area').val(response.pipeline_kharif_paddy_irri_area);

                $('#pipeline_kharif_ragi_crop_area').val(response.pipeline_kharif_ragi_crop_area);
                $('#Pipelines_kharif_Ragi_FundingSource').val(response.pipeline_kharif_ragi_fundingsource);
                $('#pipeline_kharif_ragi_irri_area').val(response.pipeline_kharif_ragi_irri_area);

                $('#pipeline_kharif_groundnut_crop_area').val(response.pipeline_kharif_groundnut_crop_area);
                $('#pipeline_kharif_groundnut_fundingsource').val(response.pipeline_kharif_groundnut_fundingsource);
                $('#pipeline_kharif_groundnut_irri_area').val(response.pipeline_kharif_groundnut_irri_area);


                $('#pipeline_kharif_sugarcane_crop_area').val(response.pipeline_kharif_sugarcane_crop_area);
                $('#Pipelines_kharif_Sugarcane_FundingSource').val(response.pipeline_kharif_sugarcane_fundingsource);
                $('#pipeline_kharif_sugarcane_irri_area').val(response.pipeline_kharif_sugarcane_irri_area);

                
                $('#pipeline_kharif_tomoto_crop_area').val(response.pipeline_kharif_tomoto_crop_area);
                $('#Pipelines_kharif_Tomoto_FundingSource').val(response.pipeline_kharif_tomoto_fundingsource);
                $('#pipeline_kharif_tomoto_irri_area').val(response.pipeline_kharif_tomoto_irri_area);

                //$('#pipeline_kharif_cabbage_crop_area').val(response.pipeline_kharif_cabbage_crop_area);
                //$('#Pipelines_kharif_Cabbage_FundingSource').val(response.pipeline_kharif_cabbage_fundingsource);
                //$('#pipeline_kharif_cabbage_irri_area').val(response.pipeline_kharif_cabbage_irri_area);


                $('#pipeline_kharif_beans_crop_area').val(response.pipeline_kharif_beans_crop_area);
                $('#Pipelines_kharif_Beans_FundingSource').val(response.pipeline_kharif_beans_fundingsource);
                $('#pipeline_kharif_beans_irri_area').val(response.pipeline_kharif_beans_irri_area);


                $('#pipeline_kharif_floriculture_crop_area').val(response.pipeline_kharif_floriculture_crop_area);
                $('#Pipelines_kharif_Floriculture_FundingSource').val(response.pipeline_kharif_floriculture_fundingsource);
                $('#pipeline_kharif_floriculture_irri_area').val(response.pipeline_kharif_floriculture_irri_area);


                $('#pipeline_kharif_sericulture_crop_area').val(response.pipeline_kharif_sericulture_crop_area);
                $('#Pipelines_kharif_Sericulture_FundingSource').val(response.pipeline_kharif_sericulture_fundingsource);
                $('#pipeline_kharif_sericulture_irri_area').val(response.pipeline_kharif_sericulture_irri_area);


                //$('#pipeline_kharif_cucumber_crop_area').val(response.pipeline_kharif_cucumber_crop_area);
                //$('#Pipelines_kharif_Cucmber_FundingSource').val(response.pipeline_kharif_cucumber_fundingsource);
                //$('#pipeline_kharif_cucumber_irri_area').val(response.pipeline_kharif_cucumber_irri_area);


                $('#pipeline_kharif_banana_crop_area').val(response.pipeline_kharif_banana_crop_area);
                $('#Pipelines_kharif_Banana_FundingSource').val(response.pipeline_kharif_banana_fundingsource);
                $('#pipeline_kharif_banana_irri_area').val(response.pipeline_kharif_banana_irri_area);


                $('#pipeline_kharif_fodder_crop_area').val(response.pipeline_kharif_fodder_crop_area);
                $('#Pipelines_kharif_Fodder_FundingSource').val(response.pipeline_kharif_fodder_fundingsource);
                $('#pipeline_kharif_fodder_irri_area').val(response.pipeline_kharif_fodder_irri_area);


                $('#pipeline_kharif_maize_crop_area').val(response.pipeline_kharif_maize_crop_area);
                $('#Pipelines_kharif_Maize_FundingSource').val(response.pipeline_kharif_maize_fundingsource);
                $('#pipeline_kharif_maize_irri_area').val(response.pipeline_kharif_maize_irri_area);


                //$('#pipeline_kharif_potato_crop_area').val(response.pipeline_kharif_potato_crop_area);
                //$('#Pipelines_kharif_Potato_FundingSource').val(response.pipeline_kharif_potato_fundingsource);
                //$('#pipeline_kharif_potato_irri_area').val(response.pipeline_kharif_potato_irri_area);


                $('#pipeline_kharif_chillies_crop_area').val(response.pipeline_kharif_chillies_crop_area);
                $('#Pipelines_kharif_Chillies_FundingSource').val(response.pipeline_kharif_chillies_fundingsource);
                $('#pipeline_kharif_chillies_irri_area').val(response.pipeline_kharif_chillies_irri_area);


                $('#pipeline_kharif_cotton_crop_area').val(response.pipeline_kharif_cotton_crop_area);
                $('#Pipelines_kharif_Cotton_FundingSource').val(response.pipeline_kharif_cotton_fundingsource);
                $('#pipeline_kharif_cotton_irri_area').val(response.pipeline_kharif_cotton_irri_area);


                $('#pipeline_kharif_melon_crop_area').val(response.pipeline_kharif_melon_crop_area);
                $('#Pipelines_kharif_Melon_FundingSource').val(response.pipeline_kharif_melon_fundingsource);
                $('#pipeline_kharif_melon_irri_area').val(response.pipeline_kharif_melon_irri_area);

                $('#pipeline_kharif_citrus_crop_area').val(response.pipeline_kharif_citrus_crop_area);
                $('#Pipelines_kharif_Citrus_FundingSource').val(response.pipeline_kharif_citrus_fundingsource);
                $('#pipeline_kharif_citrus_irri_area').val(response.pipeline_kharif_citrus_irri_area);


                //$('#pipeline_kharif_peanut_crop_area').val(response.pipeline_kharif_peanut_crop_area);
                //$('#Pipelines_kharif_Peanut_FundingSource').val(response.pipeline_kharif_peanut_fundingsource);
                //$('#pipeline_kharif_peanut_irri_area').val(response.pipeline_kharif_peanut_irri_area);


                $('#pipeline_kharif_horticulture_crop_area').val(response.pipeline_kharif_horticulture_crop_area);
                $('#Pipelines_kharif_Horticulture_FundingSource').val(response.pipeline_kharif_horticulture_fundingsource);
                $('#pipeline_kharif_horticulture_irri_area').val(response.pipeline_kharif_horticulture_irri_area);


                $('#pipeline_rabi_sericulture_crop_area').val(response.pipeline_rabi_sericulture_crop_area);
                $('#Pipelines_Rabi_Sericulture_FundingSource').val(response.pipeline_rabi_sericulture_fundingsource);
                $('#pipeline_rabi_sericulture_irri_area').val(response.pipeline_rabi_sericulture_irri_area);


                $('#pipeline_rabi_tomoto_crop_area').val(response.pipeline_rabi_tomoto_crop_area);
                $('#Pipelines_Rabi_Tomota_FundingSource').val(response.pipeline_rabi_tomoto_fundingsource);
                $('#pipeline_rabi_tomoto_irri_area').val(response.pipeline_rabi_tomoto_irri_area);


                //$('#pipeline_rabi_cabbage_crop_area').val(response.pipeline_rabi_cabbage_crop_area);
                //$('#Pipelines_Rabi_Cabbage_FundingSource').val(response.pipeline_rabi_cabbage_fundingsource);
                //$('#pipeline_rabi_cabbage_irri_area').val(response.pipeline_rabi_cabbage_irri_area);


                //$('#pipeline_rabi_beans_crop_area').val(response.pipeline_rabi_beans_crop_area);
                //$('#Pipelines_Rabi_Beans_FundingSource').val(response.pipeline_rabi_beans_fundingsource);
                //$('#pipeline_rabi_beans_irri_area').val(response.pipeline_rabi_beans_irri_area);


                $('#pipeline_rabi_floriculture_crop_area').val(response.pipeline_rabi_floriculture_crop_area);
                $('#Pipelines_Rabi_Floriculture_FundingSource').val(response.pipeline_rabi_floriculture_fundingsource);
                $('#pipeline_rabi_floriculture_irri_area').val(response.pipeline_rabi_floriculture_irri_area);


                //$('#pipeline_rabi_potato_crop_area').val(response.pipeline_rabi_potato_crop_area);
                //$('#Pipelines_Rabi_Potato_FundingSource').val(response.pipeline_rabi_potato_fundingsource);
                //$('#pipeline_rabi_potato_irri_area').val(response.pipeline_rabi_potato_irri_area);


                //$('#pipeline_rabi_cucumber_crop_area').val(response.pipeline_rabi_cucumber_crop_area);
                //$('#Pipelines_Rabi_Cucumber_FundingSource').val(response.pipeline_rabi_cucumber_fundingsource);
                //$('#pipeline_rabi_cucumber_irri_area').val(response.pipeline_rabi_cucumber_irri_area);


                $('#pipeline_rabi_ragi_crop_area').val(response.pipeline_rabi_ragi_crop_area);
                $('#Pipelines_Rabi_Ragi_FundingSource').val(response.pipeline_rabi_ragi_fundingsource);
                $('#pipeline_rabi_ragi_irri_area').val(response.pipeline_rabi_ragi_irri_area);


                $('#pipeline_rabi_sugarcane_crop_area').val(response.pipeline_rabi_sugarcane_crop_area);
                $('#Pipelines_Rabi_Sugarcane_FundingSource').val(response.pipeline_rabi_sugarcane_fundingsource);
                $('#pipeline_rabi_sugarcane_irri_area').val(response.pipeline_rabi_sugarcane_irri_area);


                $('#pipeline_rabi_maize_crop_area').val(response.pipeline_rabi_maize_crop_area);
                $('#Pipelines_Rabi_Maize_FundingSource').val(response.pipeline_rabi_maize_fundingsource);
                $('#pipeline_rabi_maize_irri_area').val(response.pipeline_rabi_maize_irri_area);


                $('#pipeline_rabi_fodder_crop_area').val(response.pipeline_rabi_fodder_crop_area);
                $('#Pipelines_Rabi_Fodder_FundingSource').val(response.pipeline_rabi_fodder_fundingsource);
                $('#pipeline_rabi_fodder_irri_area').val(response.pipeline_rabi_fodder_irri_area);


                $('#pipeline_rabi_paddy_crop_area').val(response.pipeline_rabi_paddy_crop_area);
                $('#Pipelines_Rabi_Paddy_FundingSource').val(response.pipeline_rabi_paddy_fundingsource);
                $('#pipeline_rabi_paddy_irri_area').val(response.pipeline_rabi_paddy_irri_area);


                $('#pipeline_rabi_alfalfa_crop_area').val(response.pipeline_rabi_alfalfa_crop_area);
                $('#Pipelines_Rabi_Alfalfa_FundingSource').val(response.pipeline_rabi_alfalfa_fundingsource);
                $('#pipeline_rabi_alfalfa_irri_area').val(response.pipeline_rabi_alfalfa_irri_area);


                //$('#pipeline_rabi_onion_crop_area').val(response.pipeline_rabi_onion_crop_area);
                //$('#Pipelines_Rabi_Onion_FundingSource').val(response.pipeline_rabi_onion_fundingsource);
                //$('#pipeline_rabi_onion_irri_area').val(response.pipeline_rabi_onion_irri_area);


                $('#pipeline_rabi_horticulture_crop_area').val(response.pipeline_rabi_horticulture_crop_area);
                $('#Pipelines_Rabi_Hortculture_FundingSource').val(response.pipeline_rabi_horticulture_fundingsource);
                $('#pipeline_rabi_horticulture_irri_area').val(response.pipeline_rabi_horticulture_irri_area);


                $('#pipeline_rabi_sunflower_crop_area').val(response.pipeline_rabi_sunflower_crop_area);
                $('#Pipelines_Rabi_Sunflower_FundingSource').val(response.pipeline_rabi_sunflower_fundingsource);
                $('#pipeline_rabi_sunflower_irri_area').val(response.pipeline_rabi_sunflower_irri_area);


                $('#pipeline_summer_sericulture_crop_area').val(response.pipeline_summer_sericulture_crop_area);
                $('#Pipelines_summer_Sericulture_FundingSource').val(response.pipeline_summer_sericulture_fundingsource);
                $('#pipeline_summer_sericulture_irri_area').val(response.pipeline_summer_sericulture_irri_area);


                $('#pipeline_summer_tomoto_crop_area').val(response.pipeline_summer_tomoto_crop_area);
                $('#Pipelines_summer_Tomota_FundingSource').val(response.pipeline_summer_tomoto_fundingsource);
                $('#pipeline_summer_tomoto_irri_area').val(response.pipeline_summer_tomoto_irri_area);


                //$('#pipeline_summer_cabbage_crop_area').val(response.pipeline_summer_cabbage_crop_area);
                //$('#Pipelines_summer_Cabbage_FundingSource').val(response.pipeline_summer_cabbage_fundingsource);
                //$('#pipeline_summer_cabbage_irri_area').val(response.pipeline_summer_cabbage_irri_area);


                //$('#pipeline_summer_beans_crop_area').val(response.pipeline_summer_beans_crop_area);
                //$('#Pipelines_summer_Beans_FundingSource').val(response.pipeline_summer_beans_fundingsource);
                //$('#pipeline_summer_beans_irri_area').val(response.pipeline_summer_beans_irri_area);


                $('#pipeline_summer_floriculture_crop_area').val(response.pipeline_summer_floriculture_crop_area);
                $('#Pipelines_summer_Floriculture_FundingSource').val(response.pipeline_summer_floriculture_fundingsource);
                $('#pipeline_summer_floriculture_irri_area').val(response.pipeline_summer_floriculture_irri_area);


                $('#pipeline_summer_maize_crop_area').val(response.pipeline_summer_maize_crop_area);
                $('#Pipelines_summer_Maize_FundingSource').val(response.pipeline_summer_maize_fundingsource);
                $('#pipeline_summer_maize_irri_area').val(response.pipeline_summer_maize_irri_area);


                $('#pipeline_summer_fodder_crop_area').val(response.pipeline_summer_fodder_crop_area);
                $('#Pipelines_summer_Fodder_FundingSource').val(response.pipeline_summer_fodder_fundingsource);
                $('#pipeline_summer_fodder_irri_area').val(response.pipeline_summer_fodder_irri_area);


                $('#pipeline_summer_sugarcane_crop_area').val(response.pipeline_summer_sugarcane_crop_area);
                $('#Pipelines_summer_Sugarcane_FundingSource').val(response.pipeline_summer_sugarcane_fundingsource);
                $('#pipeline_summer_sugarcane_irri_area').val(response.pipeline_summer_sugarcane_irri_area);

                //annual total
                $('#TotalAnnual_Pipeline_Reduction').text(response.pipeline_annual_reduction_waterdemand);

                //total
                $('#Pipeline_Kharif_Water_demand').text(response.pipeline_kharif_total_waterdemand);
                $('#pipeline_kharif_total_pipeline_waterdemand').text(response.pipeline_kharif_total_pipeline_waterdemand);
                $('#pipeline_kharif_total_reduction_waterdemand').text(response.pipeline_kharif_total_reduction_waterdemand);

                $('#Pipeline_Rabi_Water_demand').text(response.pipeline_rabi_total_waterdemand);
                $('#pipeline_rabi_total_rabi_waterdemand').text(response.pipeline_rabi_total_rabi_waterdemand);
                $('#pipeline_rabi_total_reduction_waterdemand').text(response.pipeline_rabi_total_reduction_waterdemand);
                
                $('#Pipeline_SummerCrop_Water_demand').text(response.pipeline_summer_total_waterdemand);
                $('#pipeline_summer_total_summer_waterdemand').text(response.pipeline_summer_total_summer_waterdemand);
                $('#pipeline_summer_total_reduction_waterdemand').text(response.pipeline_summer_total_reduction_waterdemand);


                //new columns water requirement
                if (response.pipeline_kharif_paddy_water_req != null && response.pipeline_kharif_paddy_water_req != "") {
                    $('#pipeline_kharif_paddy_water_req').val(response.pipeline_kharif_paddy_water_req);
                }
                else {
                    $('#pipeline_kharif_paddy_water_req').val(1175);
                }

                if (response.pipeline_kharif_ragi_water_req != null && response.pipeline_kharif_ragi_water_req != "") {
                    $('#pipeline_kharif_ragi_water_req').val(response.pipeline_kharif_ragi_water_req);

                }
                else {
                    $('#pipeline_kharif_ragi_water_req').val(550);
                }


                if (response.pipeline_kharif_groundnut_water_req != null && response.pipeline_kharif_groundnut_water_req != "") {
                    $('#pipeline_kharif_groundnut_water_req').val(response.pipeline_kharif_groundnut_water_req);
                }
                else {
                    $('#pipeline_kharif_groundnut_water_req').val(525);
                }

                if (response.pipeline_kharif_sugarcane_water_req != null && response.pipeline_kharif_sugarcane_water_req != "") {
                    $('#pipeline_kharif_sugarcane_water_req').val(response.pipeline_kharif_sugarcane_water_req);
                }
                else {
                    $('#pipeline_kharif_sugarcane_water_req').val(2000);
                }

                if (response.pipeline_kharif_tomoto_water_req != null && response.pipeline_kharif_tomoto_water_req != "") {
                    $('#pipeline_kharif_tomoto_water_req').val(response.pipeline_kharif_tomoto_water_req);
                }
                else {
                    $('#pipeline_kharif_tomoto_water_req').val(500);
                }

                //if (response.pipeline_kharif_cabbage_water_req != null && response.pipeline_kharif_cabbage_water_req != "") {
                //    $('#pipeline_kharif_cabbage_water_req').val(response.pipeline_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#pipeline_kharif_cabbage_water_req').val(425);
                //}



                //if (response.pipeline_kharif_beans_water_req != null && response.pipeline_kharif_beans_water_req != "") {
                //    $('#pipeline_kharif_beans_water_req').val(response.pipeline_kharif_beans_water_req);
                //}
                //else {
                //    $('#pipeline_kharif_beans_water_req').val(425);
                //}

                if (response.pipeline_kharif_floriculture_water_req != null && response.pipeline_kharif_floriculture_water_req != "") {
                    $('#pipeline_kharif_floriculture_water_req').val(response.pipeline_kharif_floriculture_water_req);
                }
                else {
                    $('#pipeline_kharif_floriculture_water_req').val(1200);
                }

                if (response.pipeline_kharif_sericulture_water_req != null && response.pipeline_kharif_sericulture_water_req != "") {
                    $('#pipeline_kharif_sericulture_water_req').val(response.pipeline_kharif_sericulture_water_req);
                }
                else {
                    $('#pipeline_kharif_sericulture_water_req').val(1550);
                }

                //if (response.pipeline_kharif_cucumber_water_req != null && response.pipeline_kharif_cucumber_water_req != "") {
                //    $('#pipeline_kharif_cucumber_water_req').val(response.pipeline_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#pipeline_kharif_cucumber_water_req').val(400);
                //}


                if (response.pipeline_kharif_banana_water_req != null && response.pipeline_kharif_banana_water_req != "") {
                    $('#pipeline_kharif_banana_water_req').val(response.pipeline_kharif_banana_water_req);
                }
                else {
                    $('#pipeline_kharif_banana_water_req').val(1700);
                }


                if (response.pipeline_kharif_fodder_water_req != null && response.pipeline_kharif_fodder_water_req != "") {
                    $('#pipeline_kharif_fodder_water_req').val(response.pipeline_kharif_fodder_water_req);
                }
                else {
                    $('#pipeline_kharif_fodder_water_req').val(1400);
                }


                if (response.pipeline_kharif_maize_water_req != null && response.pipeline_kharif_maize_water_req != "") {
                    $('#pipeline_kharif_maize_water_req').val(response.pipeline_kharif_maize_water_req);
                }
                else {
                    $('#pipeline_kharif_maize_water_req').val(650);
                }


                //if (response.pipeline_kharif_potato_water_req != null && response.pipeline_kharif_potato_water_req != "") {
                //    $('#pipeline_kharif_potato_water_req').val(response.pipeline_kharif_potato_water_req);
                //}
                //else {
                //    $('#pipeline_kharif_potato_water_req').val(600);
                //}


                if (response.pipeline_kharif_chillies_water_req != null && response.pipeline_kharif_chillies_water_req != "") {
                    $('#pipeline_kharif_chillies_water_req').val(response.pipeline_kharif_chillies_water_req);
                }
                else {
                    $('#pipeline_kharif_chillies_water_req').val(230);
                }


                if (response.pipeline_kharif_cotton_water_req != null && response.pipeline_kharif_cotton_water_req != "") {
                    $('#pipeline_kharif_cotton_water_req').val(response.pipeline_kharif_cotton_water_req);
                }
                else {
                    $('#pipeline_kharif_cotton_water_req').val(1000);
                }
                if (response.pipeline_kharif_melon_water_req != null && response.pipeline_kharif_melon_water_req != "") {
                    $('#pipeline_kharif_melon_water_req').val(response.pipeline_kharif_melon_water_req);
                }
                else {
                    $('#pipeline_kharif_melon_water_req').val(500);
                }
                if (response.pipeline_kharif_citrus_water_req != null && response.pipeline_kharif_citrus_water_req != "") {
                    $('#pipeline_kharif_citrus_water_req').val(response.pipeline_kharif_citrus_water_req);
                }
                else {
                    $('#pipeline_kharif_citrus_water_req').val(1050);
                }
                //if (response.pipeline_kharif_peanut_water_req != null && response.pipeline_kharif_peanut_water_req != "") {
                //    $('#pipeline_kharif_peanut_water_req').val(response.pipeline_kharif_peanut_water_req);
                //}
                //else {
                //    $('#pipeline_kharif_peanut_water_req').val(600);
                //}
                if (response.pipeline_kharif_horticulture_water_req != null && response.pipeline_kharif_horticulture_water_req != "") {
                    $('#pipeline_kharif_horticulture_water_req').val(response.pipeline_kharif_horticulture_water_req);
                }
                else {
                    $('#pipeline_kharif_horticulture_water_req').val(470);
                }
                if (response.pipeline_rabi_sericulture_water_req != null && response.pipeline_rabi_sericulture_water_req != "") {
                    $('#pipeline_rabi_sericulture_water_req').val(response.pipeline_rabi_sericulture_water_req);
                }
                else {
                    $('#pipeline_rabi_sericulture_water_req').val(1550);
                }
                if (response.pipeline_rabi_tomoto_water_req != null && response.pipeline_rabi_tomoto_water_req != "") {
                    $('#pipeline_rabi_tomoto_water_req').val(response.pipeline_rabi_tomoto_water_req);
                }
                else {
                    $('#pipeline_rabi_tomoto_water_req').val(500);
                }
                //if (response.pipeline_rabi_cabbage_water_req != null && response.pipeline_rabi_cabbage_water_req != "") {
                //    $('#pipeline_rabi_cabbage_water_req').val(response.pipeline_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#pipeline_rabi_cabbage_water_req').val(425);
                //}
                //if (response.pipeline_rabi_beans_water_req != null && response.pipeline_rabi_beans_water_req != "") {
                //    $('#pipeline_rabi_beans_water_req').val(response.pipeline_rabi_beans_water_req);
                //}
                //else {
                //    $('#pipeline_rabi_beans_water_req').val(400);
                //}
                if (response.pipeline_rabi_floriculture_water_req != null && response.pipeline_rabi_floriculture_water_req != "") {
                    $('#pipeline_rabi_floriculture_water_req').val(response.pipeline_rabi_floriculture_water_req);
                }
                else {
                    $('#pipeline_rabi_floriculture_water_req').val(1200);
                }
                //if (response.pipeline_rabi_potato_water_req != null && response.pipeline_rabi_potato_water_req != "") {
                //    $('#pipeline_rabi_potato_water_req').val(response.pipeline_rabi_potato_water_req);
                //}
                //else {
                //    $('#pipeline_rabi_potato_water_req').val(600);
                //}
                //if (response.pipeline_rabi_cucumber_water_req != null && response.pipeline_rabi_cucumber_water_req != "") {
                //    $('#pipeline_rabi_cucumber_water_req').val(response.pipeline_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#pipeline_rabi_cucumber_water_req').val(400);
                //}
                if (response.pipeline_rabi_ragi_water_req != null && response.pipeline_rabi_ragi_water_req != "") {
                    $('#pipeline_rabi_ragi_water_req').val(response.pipeline_rabi_ragi_water_req);
                }
                else {
                    $('#pipeline_rabi_ragi_water_req').val(550);
                }
                if (response.pipeline_rabi_sugarcane_water_req != null && response.pipeline_rabi_sugarcane_water_req != "") {
                    $('#pipeline_rabi_sugarcane_water_req').val(response.pipeline_rabi_sugarcane_water_req);
                }
                else {
                    $('#pipeline_rabi_sugarcane_water_req').val(2000);
                }
                if (response.pipeline_rabi_maize_water_req != null && response.pipeline_rabi_maize_water_req != "") {
                    $('#pipeline_rabi_maize_water_req').val(response.pipeline_rabi_maize_water_req);
                }
                else {
                    $('#pipeline_rabi_maize_water_req').val(650);
                }
                if (response.pipeline_rabi_fodder_water_req != null && response.pipeline_rabi_fodder_water_req != "") {
                    $('#pipeline_rabi_fodder_water_req').val(response.pipeline_rabi_fodder_water_req);
                }
                else {
                    $('#pipeline_rabi_fodder_water_req').val(1400);
                }
                if (response.pipeline_rabi_paddy_water_req != null && response.pipeline_rabi_paddy_water_req != "") {
                    $('#pipeline_rabi_paddy_water_req').val(response.pipeline_rabi_paddy_water_req);
                }
                else {
                    $('#pipeline_rabi_paddy_water_req').val(1175);
                }
                if (response.pipeline_rabi_alfalfa_water_req != null && response.pipeline_rabi_alfalfa_water_req != "") {
                    $('#pipeline_rabi_alfalfa_water_req').val(response.pipeline_rabi_alfalfa_water_req);
                }
                else {
                    $('#pipeline_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.pipeline_rabi_onion_water_req != null && response.pipeline_rabi_onion_water_req != "") {
                //    $('#pipeline_rabi_onion_water_req').val(response.pipeline_rabi_onion_water_req);
                //}
                //else {
                //    $('#pipeline_rabi_onion_water_req').val(450);
                //}
                if (response.pipeline_rabi_horticulture_water_req != null && response.pipeline_rabi_horticulture_water_req != "") {
                    $('#pipeline_rabi_horticulture_water_req').val(response.pipeline_rabi_horticulture_water_req);
                }
                else {
                    $('#pipeline_rabi_horticulture_water_req').val(470);
                }
                if (response.pipeline_rabi_sunflower_water_req != null && response.pipeline_rabi_sunflower_water_req != "") {
                    $('#pipeline_rabi_sunflower_water_req').val(response.pipeline_rabi_sunflower_water_req);
                }
                else {
                    $('#pipeline_rabi_sunflower_water_req').val(800);
                }

                if (response.pipeline_summer_sericulture_water_req != null && response.pipeline_summer_sericulture_water_req != "") {
                    $('#pipeline_summer_sericulture_water_req').val(response.pipeline_summer_sericulture_water_req);
                }
                else {
                    $('#pipeline_summer_sericulture_water_req').val(1550);
                }
                if (response.pipeline_summer_tomoto_water_req != null && response.pipeline_summer_tomoto_water_req != "") {
                    $('#pipeline_summer_tomoto_water_req').val(response.pipeline_summer_tomoto_water_req);
                }
                else {
                    $('#pipeline_summer_tomoto_water_req').val(500);
                }
                //if (response.pipeline_summer_cabbage_water_req != null && response.pipeline_summer_cabbage_water_req != "") {
                //    $('#pipeline_summer_cabbage_water_req').val(response.pipeline_summer_cabbage_water_req);
                //}
                //else {
                //    $('#pipeline_summer_cabbage_water_req').val(425);
                //}
                //if (response.pipeline_summer_beans_water_req != null && response.pipeline_summer_beans_water_req != "") {
                //    $('#pipeline_summer_beans_water_req').val(response.pipeline_summer_beans_water_req);
                //}
                //else {
                //    $('#pipeline_summer_beans_water_req').val(400);
                //}
                if (response.pipeline_summer_floriculture_water_req != null && response.pipeline_summer_floriculture_water_req != "") {
                    $('#pipeline_summer_floriculture_water_req').val(response.pipeline_summer_floriculture_water_req);
                }
                else {
                    $('#pipeline_summer_floriculture_water_req').val(1200);
                }
                if (response.pipeline_summer_maize_water_req != null && response.pipeline_summer_maize_water_req != "") {
                    $('#pipeline_summer_maize_water_req').val(response.pipeline_summer_maize_water_req);
                }
                else {
                    $('#pipeline_summer_maize_water_req').val(650);
                }
                if (response.pipeline_summer_fodder_water_req != null && response.pipeline_summer_fodder_water_req != "") {
                    $('#pipeline_summer_fodder_water_req').val(response.pipeline_summer_fodder_water_req);
                }
                else {
                    $('#pipeline_summer_fodder_water_req').val(1400);
                }
                if (response.pipeline_summer_sugarcane_water_req != null && response.pipeline_summer_sugarcane_water_req != "") {
                    $('#pipeline_summer_sugarcane_water_req').val(response.pipeline_summer_sugarcane_water_req);
                }
                else {
                    $('#pipeline_summer_sugarcane_water_req').val(2000);
                }




                ////other crops
                //$('#pipeline_kharif_othercrop_name').val(response.pipeline_kharif_othercrop_name);
                //$('#pipeline_kharif_othercrop_area').val(response.pipeline_kharif_othercrop_area);
                //$('#pipeline_kharif_othercrop_irri_area').val(response.pipeline_kharif_othercrop_irri_area);
                //$('#pipeline_kharif_othercrop_water_req').val(response.pipeline_kharif_othercrop_water_req);
                //$('#pipeline_kharif_othercrop_waterdemand').text(response.pipeline_kharif_othercrop_waterdemand);
                //$('#pipeline_kharif_othercrop_pipeline_waterdemand').text(response.pipeline_kharif_othercrop_pipeline_waterdemand);
                //$('#pipeline_kharif_othercrop_reduc_gw_demand').text(response.pipeline_kharif_othercrop_reduc_gw_demand);

                //$('#pipeline_rabi_othercrop_name').val(response.pipeline_rabi_othercrop_name);
                //$('#pipeline_rabi_othercrop_area').val(response.pipeline_rabi_othercrop_area);
                //$('#pipeline_rabi_othercrop_irri_area').val(response.pipeline_rabi_othercrop_irri_area);
                //$('#pipeline_rabi_othercrop_water_req').val(response.pipeline_rabi_othercrop_water_req);
                //$('#pipeline_rabi_othercrop_waterdemand').text(response.pipeline_rabi_othercrop_waterdemand);
                //$('#pipeline_rabi_othercrop_pipeline_waterdemand').text(response.pipeline_rabi_othercrop_pipeline_waterdemand);
                //$('#pipeline_rabi_othercrop_reduc_gw_demand').text(response.pipeline_rabi_othercrop_reduc_gw_demand);

                //$('#pipeline_summer_othercrop_name').val(response.pipeline_summer_othercrop_name);
                //$('#pipeline_summer_othercrop_area').val(response.pipeline_summer_othercrop_area);
                //$('#pipeline_summer_othercrop_irri_area').val(response.pipeline_summer_othercrop_irri_area);
                //$('#pipeline_summer_othercrop_water_req').val(response.pipeline_summer_othercrop_water_req);
                //$('#pipeline_summer_othercrop_waterdemand').text(response.pipeline_summer_othercrop_waterdemand);
                //$('#pipeline_summer_othercrop_pipeline_waterdemand').text(response.pipeline_summer_othercrop_pipeline_waterdemand);
                //$('#pipeline_summer_othercrop_reduc_gw_demand').text(response.pipeline_summer_othercrop_reduc_gw_demand);
                Pipeline_Kharif_WaterRequire();
                Pipeline_Rabi_WaterRequire();
                Pipeline_Crop_WaterRequire();
            }
            else {

                add_Pipeline_kharif_count = 0;
                add_Pipeline_kharif_count1 = 1;
                add_Pipeline_kharif_count2 = 2;
                add_Pipeline_kharif_count3 = 3;
                add_Pipeline_kharif_count4 = 4;
                add_Pipeline_kharif_count5 = 5;


                add_Pipeline_rabi_count = 0;
                add_Pipeline_rabi_count1 = 1;
                add_Pipeline_rabi_count2 = 2;
                add_Pipeline_rabi_count3 = 3;
                add_Pipeline_rabi_count4 = 4;
                add_Pipeline_rabi_count5 = 5;


                add_Pipeline_summer_count = 0;
                add_Pipeline_summer_count1 = 1;
                add_Pipeline_summer_count2 = 2;
                add_Pipeline_summer_count3 = 3;
                add_Pipeline_summer_count4 = 4;
                add_Pipeline_summer_count5 = 5;

                $('#pipeline_summer_horticulture_water_req').val(470);

                //new columns water requirement
                $('#pipeline_kharif_paddy_water_req').val(1175);
                $('#pipeline_kharif_ragi_water_req').val(550);
                $('#pipeline_kharif_groundnut_water_req').val(525);
                $('#pipeline_kharif_sugarcane_water_req').val(2000);
                $('#pipeline_kharif_tomoto_water_req').val(500);
                //$('#pipeline_kharif_cabbage_water_req').val(425);
                //$('#pipeline_kharif_beans_water_req').val(425);
                $('#pipeline_kharif_floriculture_water_req').val(1200);
                $('#pipeline_kharif_sericulture_water_req').val(1550);
                // $('#pipeline_kharif_cucumber_water_req').val(400);
                $('#pipeline_kharif_banana_water_req').val(1700);
                $('#pipeline_kharif_fodder_water_req').val(1400);
                $('#pipeline_kharif_maize_water_req').val(650);
                // $('#pipeline_kharif_potato_water_req').val(600);
                $('#pipeline_kharif_chillies_water_req').val(230);
                $('#pipeline_kharif_cotton_water_req').val(1000);
                $('#pipeline_kharif_melon_water_req').val(500);
                $('#pipeline_kharif_citrus_water_req').val(1050);
                //$('#pipeline_kharif_peanut_water_req').val(600);
                $('#pipeline_kharif_horticulture_water_req').val(470);

                $('#pipeline_rabi_sericulture_water_req').val(1550);
                $('#pipeline_rabi_tomoto_water_req').val(500);
                // $('#pipeline_rabi_cabbage_water_req').val(425);
                // $('#pipeline_rabi_beans_water_req').val(400);
                $('#pipeline_rabi_floriculture_water_req').val(1200);
                // $('#pipeline_rabi_potato_water_req').val(600);
                // $('#pipeline_rabi_cucumber_water_req').val(400);
                $('#pipeline_rabi_ragi_water_req').val(550);
                $('#pipeline_rabi_sugarcane_water_req').val(2000);
                $('#pipeline_rabi_maize_water_req').val(650);
                $('#pipeline_rabi_fodder_water_req').val(1400);

                $('#pipeline_rabi_paddy_water_req').val(1175);
                $('#pipeline_rabi_alfalfa_water_req').val(1200);
                // $('#pipeline_rabi_onion_water_req').val(450);
                $('#pipeline_rabi_horticulture_water_req').val(470);
                $('#pipeline_rabi_sunflower_water_req').val(800);

                $('#pipeline_summer_sericulture_water_req').val(1550);
                $('#pipeline_summer_tomoto_water_req').val(500);
                // $('#pipeline_summer_cabbage_water_req').val(425);
                // $('#pipeline_summer_beans_water_req').val(400);
                $('#pipeline_summer_floriculture_water_req').val(1200);
                $('#pipeline_summer_maize_water_req').val(650);
                $('#pipeline_summer_fodder_water_req').val(1400);
                $('#pipeline_summer_sugarcane_water_req').val(2000);



            }

            Pipeline_Kharif_WaterRequire();
            Pipeline_Rabi_WaterRequire();
            Pipeline_Crop_WaterRequire();
        }
    });
}


var pipeline_kharif_paddy_crop_area = 0;
var pipeline_kharif_paddy_irri_area = 0;
var pipeline_kharif_paddy_fundingsource = 0;
var pipeline_kharif_paddy_waterdemand = 0;
var pipeline_kharif_paddy_pipeline_waterdemand = 0;
var pipeline_kharif_paddy_reduction_water_demand = 0;


var pipeline_kharif_ragi_crop_area = 0;
var pipeline_kharif_ragi_irri_area = 0;
var pipeline_kharif_ragi_fundingsource = 0;
var pipeline_kharif_ragi_waterdemand = 0;
var pipeline_kharif_ragi_pipeline_waterdemand = 0;
var pipeline_kharif_ragi_reduction_water_demand = 0;

var pipeline_kharif_groundnut_crop_area = 0;
var pipeline_kharif_groundnut_irri_area = 0;
var pipeline_kharif_groundnut_fundingsource = 0;
var pipeline_kharif_groundnut_waterdemand = 0;
var pipeline_kharif_groundnut_pipeline_waterdemand = 0;
var pipeline_kharif_groundnut_reduction_water_demand = 0;

var pipeline_kharif_sugarcane_crop_area = 0;
var pipeline_kharif_sugarcane_irri_area = 0;
var pipeline_kharif_sugarcane_fundingsource = 0;
var pipeline_kharif_sugarcane_waterdemand = 0;
var pipeline_kharif_sugarcane_pipeline_waterdemand = 0;
var pipeline_kharif_sugarcane_reduction_water_demand = 0;

var pipeline_kharif_tomoto_crop_area = 0;
var pipeline_kharif_tomoto_irri_area = 0;
var pipeline_kharif_tomoto_fundingsource = 0;
var pipeline_kharif_tomoto_waterdemand = 0;
var pipeline_kharif_tomoto_pipeline_waterdemand = 0;
var pipeline_kharif_tomoto_reduction_water_demand = 0;

//var pipeline_kharif_cabbage_crop_area = 0;
//var pipeline_kharif_cabbage_irri_area = 0;
//var pipeline_kharif_cabbage_fundingsource = 0;
//var pipeline_kharif_cabbage_waterdemand = 0;
//var pipeline_kharif_cabbage_pipeline_waterdemand = 0;
//var pipeline_kharif_cabbage_reduction_water_demand = 0;


//var pipeline_kharif_beans_crop_area = 0;
//var pipeline_kharif_beans_irri_area = 0;
//var pipeline_kharif_beans_fundingsource = 0;
//var pipeline_kharif_beans_waterdemand = 0;
//var pipeline_kharif_beans_pipeline_waterdemand = 0;
//var pipeline_kharif_beans_reduction_water_demand = 0;


var pipeline_kharif_floriculture_crop_area = 0;
var pipeline_kharif_floriculture_irri_area = 0;
var pipeline_kharif_floriculture_fundingsource = 0;
var pipeline_kharif_floriculture_waterdemand = 0;
var pipeline_kharif_floriculture_pipeline_waterdemand = 0;
var pipeline_kharif_floriculture_reduction_water_demand = 0;


var pipeline_kharif_sericulture_crop_area = 0;
var pipeline_kharif_sericulture_irri_area = 0;
var pipeline_kharif_sericulture_fundingsource = 0;
var pipeline_kharif_sericulture_waterdemand = 0;
var pipeline_kharif_sericulture_pipeline_waterdemand = 0;
var pipeline_kharif_sericulture_reduction_water_demand = 0;


//var pipeline_kharif_cucumber_crop_area = 0;
//var pipeline_kharif_cucumber_irri_area = 0;
//var pipeline_kharif_cucumber_fundingsource = 0;
//var pipeline_kharif_cucumber_waterdemand = 0;
//var pipeline_kharif_cucumber_pipeline_waterdemand = 0;
//var pipeline_kharif_cucumber_reduction_water_demand = 0;


var pipeline_kharif_banana_crop_area = 0;
var pipeline_kharif_banana_irri_area = 0;
var pipeline_kharif_banana_fundingsource = 0;
var pipeline_kharif_banana_waterdemand = 0;
var pipeline_kharif_banana_pipeline_waterdemand = 0;
var pipeline_kharif_banana_reduction_water_demand = 0;


var pipeline_kharif_fodder_crop_area = 0;
var pipeline_kharif_fodder_irri_area = 0;
var pipeline_kharif_fodder_fundingsource = 0;
var pipeline_kharif_fodder_waterdemand = 0;
var pipeline_kharif_fodder_pipeline_waterdemand = 0;
var pipeline_kharif_fodder_reduction_water_demand = 0;



var pipeline_kharif_maize_crop_area = 0;
var pipeline_kharif_maize_irri_area = 0;
var pipeline_kharif_maize_fundingsource = 0;
var pipeline_kharif_maize_waterdemand = 0;
var pipeline_kharif_maize_pipeline_waterdemand = 0;
var pipeline_kharif_maize_reduction_water_demand = 0;


//var pipeline_kharif_potato_crop_area = 0;
//var pipeline_kharif_potato_irri_area = 0;
//var pipeline_kharif_potato_fundingsource = 0;
//var pipeline_kharif_potato_waterdemand = 0;
//var pipeline_kharif_potato_pipeline_waterdemand = 0;
//var pipeline_kharif_potato_reduction_water_demand = 0;


var pipeline_kharif_chillies_crop_area = 0;
var pipeline_kharif_chillies_irri_area = 0;
var pipeline_kharif_chillies_fundingsource = 0;
var pipeline_kharif_chillies_waterdemand = 0;
var pipeline_kharif_chillies_pipeline_waterdemand = 0;
var pipeline_kharif_chillies_reduction_water_demand = 0;


var pipeline_kharif_cotton_crop_area = 0;
var pipeline_kharif_cotton_irri_area = 0;
var pipeline_kharif_cotton_fundingsource = 0;
var pipeline_kharif_cotton_waterdemand = 0;
var pipeline_kharif_cotton_pipeline_waterdemand = 0;
var pipeline_kharif_cotton_reduction_water_demand = 0;


var pipeline_kharif_melon_crop_area = 0;
var pipeline_kharif_melon_irri_area = 0;
var pipeline_kharif_melon_fundingsource = 0;
var pipeline_kharif_melon_waterdemand = 0;
var pipeline_kharif_melon_pipeline_waterdemand = 0;
var pipeline_kharif_melon_reduction_water_demand = 0;

var pipeline_kharif_citrus_crop_area = 0;
var pipeline_kharif_citrus_fundingsource = 0;
var pipeline_kharif_citrus_irri_area = 0;
var pipeline_kharif_citrus_waterdemand = 0;
var pipeline_kharif_citrus_pipeline_waterdemand = 0;
var pipeline_kharif_citrus_reduction_water_demand = 0;

//var pipeline_kharif_peanut_crop_area = 0;
//var pipeline_kharif_peanut_irri_area = 0;
//var pipeline_kharif_peanut_fundingsource = 0;
//var pipeline_kharif_peanut_waterdemand = 0;
//var pipeline_kharif_peanut_pipeline_waterdemand = 0;
//var pipeline_kharif_peanut_reduction_water_demand = 0;


var pipeline_kharif_horticulture_crop_area = 0;
var pipeline_kharif_horticulture_irri_area = 0;
var pipeline_kharif_horticulture_fundingsource = 0;
var pipeline_kharif_horticulture_waterdemand = 0;
var pipeline_kharif_horticulture_pipeline_waterdemand = 0;
var pipeline_kharif_horticulture_reduction_water_demand = 0;


var pipeline_kharif_othercrop_waterdemand = 0;
var pipeline_kharif_othercrop_pipeline_waterdemand = 0;
var pipeline_kharif_othercrop_reduc_gw_demand = 0;


var pipeline_kharif_total_waterdemand = 0;
var pipeline_kharif_total_pipeline_waterdemand = 0;
var pipeline_kharif_total_reduction_waterdemand = 0;
var pipeline_pipeline_Total_Water_Demand_for_Kharif_Crops = 0;



var pipeline_kharif_othercrop_area1 = 0;
var pipeline_kharif_othercrop_irri_area1 = 0;
var pipeline_kharif_othercrop_water_req1 = 0;
var pipeline_kharif_othercrop_waterdemand1 = 0;
var pipeline_kharif_othercrop_pipeline_waterdemand1 = 0;
var pipeline_kharif_othercrop_reduc_gw_demand1 = 0;


var pipeline_kharif_othercrop_area2 = 0;
var pipeline_kharif_othercrop_irri_area2 = 0;
var pipeline_kharif_othercrop_water_req2 = 0;
var pipeline_kharif_othercrop_waterdemand2 = 0;
var pipeline_kharif_othercrop_pipeline_waterdemand2 = 0;
var pipeline_kharif_othercrop_reduc_gw_demand2 = 0;


var pipeline_kharif_othercrop_area3 = 0;
var pipeline_kharif_othercrop_irri_area3 = 0;
var pipeline_kharif_othercrop_water_req3 = 0;
var pipeline_kharif_othercrop_waterdemand3 = 0;
var pipeline_kharif_othercrop_pipeline_waterdemand3 = 0;
var pipeline_kharif_othercrop_reduc_gw_demand3 = 0;


var pipeline_kharif_othercrop_area4 = 0;
var pipeline_kharif_othercrop_irri_area4 = 0;
var pipeline_kharif_othercrop_water_req4 = 0;
var pipeline_kharif_othercrop_waterdemand4 = 0;
var pipeline_kharif_othercrop_pipeline_waterdemand4 = 0;
var pipeline_kharif_othercrop_reduc_gw_demand4 = 0;


var pipeline_kharif_othercrop_area5 = 0;
var pipeline_kharif_othercrop_irri_area5 = 0;
var pipeline_kharif_othercrop_water_req5 = 0;
var pipeline_kharif_othercrop_waterdemand5 = 0;
var pipeline_kharif_othercrop_pipeline_waterdemand5 = 0;
var pipeline_kharif_othercrop_reduc_gw_demand5 = 0;

function Pipeline_Kharif_WaterRequire() {

    pipeline_kharif_paddy_crop_area = 0;
    pipeline_kharif_paddy_irri_area = 0;
    pipeline_kharif_paddy_fundingsource = 0;
    pipeline_kharif_paddy_waterdemand = 0;
    pipeline_kharif_paddy_pipeline_waterdemand = 0;
    pipeline_kharif_paddy_reduction_water_demand = 0;


    pipeline_kharif_ragi_crop_area = 0;
    pipeline_kharif_ragi_irri_area = 0;
    pipeline_kharif_ragi_fundingsource = 0;
    pipeline_kharif_ragi_waterdemand = 0;
    pipeline_kharif_ragi_pipeline_waterdemand = 0;
    pipeline_kharif_ragi_reduction_water_demand = 0;

    pipeline_kharif_groundnut_crop_area = 0;
    pipeline_kharif_groundnut_irri_area = 0;
    pipeline_kharif_groundnut_fundingsource = 0;
    pipeline_kharif_groundnut_waterdemand = 0;
    pipeline_kharif_groundnut_pipeline_waterdemand = 0;
    pipeline_kharif_groundnut_reduction_water_demand = 0;

    pipeline_kharif_sugarcane_crop_area = 0;
    pipeline_kharif_sugarcane_irri_area = 0;
    pipeline_kharif_sugarcane_fundingsource = 0;
    pipeline_kharif_sugarcane_waterdemand = 0;
    pipeline_kharif_sugarcane_pipeline_waterdemand = 0;
    pipeline_kharif_sugarcane_reduction_water_demand = 0;

    pipeline_kharif_tomoto_crop_area = 0;
    pipeline_kharif_tomoto_irri_area = 0;
    pipeline_kharif_tomoto_fundingsource = 0;
    pipeline_kharif_tomoto_waterdemand = 0;
    pipeline_kharif_tomoto_pipeline_waterdemand = 0;
    pipeline_kharif_tomoto_reduction_water_demand = 0;

    //pipeline_kharif_cabbage_crop_area = 0;
    //pipeline_kharif_cabbage_irri_area = 0;
    //pipeline_kharif_cabbage_fundingsource = 0;
    //pipeline_kharif_cabbage_waterdemand = 0;
    //pipeline_kharif_cabbage_pipeline_waterdemand = 0;
    //pipeline_kharif_cabbage_reduction_water_demand = 0;


    //pipeline_kharif_beans_crop_area = 0;
    //pipeline_kharif_beans_irri_area = 0;
    //pipeline_kharif_beans_fundingsource = 0;
    //pipeline_kharif_beans_waterdemand = 0;
    //pipeline_kharif_beans_pipeline_waterdemand = 0;
    //pipeline_kharif_beans_reduction_water_demand = 0;


    pipeline_kharif_floriculture_crop_area = 0;
    pipeline_kharif_floriculture_irri_area = 0;
    pipeline_kharif_floriculture_fundingsource = 0;
    pipeline_kharif_floriculture_waterdemand = 0;
    pipeline_kharif_floriculture_pipeline_waterdemand = 0;
    pipeline_kharif_floriculture_reduction_water_demand = 0;


    pipeline_kharif_sericulture_crop_area = 0;
    pipeline_kharif_sericulture_irri_area = 0;
    pipeline_kharif_sericulture_fundingsource = 0;
    pipeline_kharif_sericulture_waterdemand = 0;
    pipeline_kharif_sericulture_pipeline_waterdemand = 0;
    pipeline_kharif_sericulture_reduction_water_demand = 0;


    //pipeline_kharif_cucumber_crop_area = 0;
    //pipeline_kharif_cucumber_irri_area = 0;
    //pipeline_kharif_cucumber_fundingsource = 0;
    //pipeline_kharif_cucumber_waterdemand = 0;
    //pipeline_kharif_cucumber_pipeline_waterdemand = 0;
    //pipeline_kharif_cucumber_reduction_water_demand = 0;


    pipeline_kharif_banana_crop_area = 0;
    pipeline_kharif_banana_irri_area = 0;
    pipeline_kharif_banana_fundingsource = 0;
    pipeline_kharif_banana_waterdemand = 0;
    pipeline_kharif_banana_pipeline_waterdemand = 0;
    pipeline_kharif_banana_reduction_water_demand = 0;


    pipeline_kharif_fodder_crop_area = 0;
    pipeline_kharif_fodder_irri_area = 0;
    pipeline_kharif_fodder_fundingsource = 0;
    pipeline_kharif_fodder_waterdemand = 0;
    pipeline_kharif_fodder_pipeline_waterdemand = 0;
    pipeline_kharif_fodder_reduction_water_demand = 0;



    pipeline_kharif_maize_crop_area = 0;
    pipeline_kharif_maize_irri_area = 0;
    pipeline_kharif_maize_fundingsource = 0;
    pipeline_kharif_maize_waterdemand = 0;
    pipeline_kharif_maize_pipeline_waterdemand = 0;
    pipeline_kharif_maize_reduction_water_demand = 0;


    //pipeline_kharif_potato_crop_area = 0;
    //pipeline_kharif_potato_irri_area = 0;
    //pipeline_kharif_potato_fundingsource = 0;
    //pipeline_kharif_potato_waterdemand = 0;
    //pipeline_kharif_potato_pipeline_waterdemand = 0;
    //pipeline_kharif_potato_reduction_water_demand = 0;


    pipeline_kharif_chillies_crop_area = 0;
    pipeline_kharif_chillies_irri_area = 0;
    pipeline_kharif_chillies_fundingsource = 0;
    pipeline_kharif_chillies_waterdemand = 0;
    pipeline_kharif_chillies_pipeline_waterdemand = 0;
    pipeline_kharif_chillies_reduction_water_demand = 0;


    pipeline_kharif_cotton_crop_area = 0;
    pipeline_kharif_cotton_irri_area = 0;
    pipeline_kharif_cotton_fundingsource = 0;
    pipeline_kharif_cotton_waterdemand = 0;
    pipeline_kharif_cotton_pipeline_waterdemand = 0;
    pipeline_kharif_cotton_reduction_water_demand = 0;


    pipeline_kharif_melon_crop_area = 0;
    pipeline_kharif_melon_irri_area = 0;
    pipeline_kharif_melon_fundingsource = 0;
    pipeline_kharif_melon_waterdemand = 0;
    pipeline_kharif_melon_pipeline_waterdemand = 0;
    pipeline_kharif_melon_reduction_water_demand = 0;

    pipeline_kharif_citrus_crop_area = 0;
    pipeline_kharif_citrus_fundingsource = 0;
    pipeline_kharif_citrus_irri_area = 0;
    pipeline_kharif_citrus_waterdemand = 0;
    pipeline_kharif_citrus_pipeline_waterdemand = 0;
    pipeline_kharif_citrus_reduction_water_demand = 0;




    //pipeline_kharif_peanut_crop_area = 0;
    //pipeline_kharif_peanut_irri_area = 0;
    //pipeline_kharif_peanut_fundingsource = 0;
    //pipeline_kharif_peanut_waterdemand = 0;
    //pipeline_kharif_peanut_pipeline_waterdemand = 0;
    //pipeline_kharif_peanut_reduction_water_demand = 0;


    pipeline_kharif_horticulture_crop_area = 0;
    pipeline_kharif_horticulture_irri_area = 0;
    pipeline_kharif_horticulture_fundingsource = 0;
    pipeline_kharif_horticulture_waterdemand = 0;
    pipeline_kharif_horticulture_pipeline_waterdemand = 0;
    pipeline_kharif_horticulture_reduction_water_demand = 0;

    pipeline_kharif_total_waterdemand = 0;
    pipeline_kharif_total_pipeline_waterdemand = 0;
    pipeline_kharif_total_reduction_waterdemand = 0;

    pipeline_Total_Water_Demand_for_Kharif_Crops = 0;



    pipeline_kharif_othercrop_area1 = 0;
    pipeline_kharif_othercrop_irri_area1 = 0;
    pipeline_kharif_othercrop_water_req1 = 0;
    pipeline_kharif_othercrop_waterdemand1 = 0;
    pipeline_kharif_othercrop_pipeline_waterdemand1 = 0;
    pipeline_kharif_othercrop_reduc_gw_demand1 = 0;


    pipeline_kharif_othercrop_area2 = 0;
    pipeline_kharif_othercrop_irri_area2 = 0;
    pipeline_kharif_othercrop_water_req2 = 0;
    pipeline_kharif_othercrop_waterdemand2 = 0;
    pipeline_kharif_othercrop_pipeline_waterdemand2 = 0;
    pipeline_kharif_othercrop_reduc_gw_demand2 = 0;


    pipeline_kharif_othercrop_area3 = 0;
    pipeline_kharif_othercrop_irri_area3 = 0;
    pipeline_kharif_othercrop_water_req3 = 0;
    pipeline_kharif_othercrop_waterdemand3 = 0;
    pipeline_kharif_othercrop_pipeline_waterdemand3 = 0;
    pipeline_kharif_othercrop_reduc_gw_demand3 = 0;


    pipeline_kharif_othercrop_area4 = 0;
    pipeline_kharif_othercrop_irri_area4 = 0;
    pipeline_kharif_othercrop_water_req4 = 0;
    pipeline_kharif_othercrop_waterdemand4 = 0;
    pipeline_kharif_othercrop_pipeline_waterdemand4 = 0;
    pipeline_kharif_othercrop_reduc_gw_demand4 = 0;


    pipeline_kharif_othercrop_area5 = 0;
    pipeline_kharif_othercrop_irri_area5 = 0;
    pipeline_kharif_othercrop_water_req5 = 0;
    pipeline_kharif_othercrop_waterdemand5 = 0;
    pipeline_kharif_othercrop_pipeline_waterdemand5 = 0;
    pipeline_kharif_othercrop_reduc_gw_demand5 = 0;


    //Other

    var pipeline_kharif_othercrop_area1 = $('#pipeline_kharif_othercrop_area1').val();
    if (typeof pipeline_kharif_othercrop_area1 == 'undefined') {
        pipeline_kharif_othercrop_area1 = 0;
    }
    var pipeline_kharif_othercrop_irri_area1 = $('#pipeline_kharif_othercrop_irri_area1').val();
    if (typeof pipeline_kharif_othercrop_irri_area1 == 'undefined') {
        pipeline_kharif_othercrop_irri_area1 = 0;
    }
    var pipeline_kharif_othercrop_water_req1 = $('#pipeline_kharif_othercrop_water_req1').val();
    if (typeof pipeline_kharif_othercrop_water_req1 == 'undefined') {
        pipeline_kharif_othercrop_water_req1 = 0;
    }

    if (pipeline_kharif_othercrop_area1 != "") {

        if (pipeline_kharif_othercrop_water_req1 != "") {
            pipeline_kharif_othercrop_waterdemand1 = parseFloat(pipeline_kharif_othercrop_area1) * parseFloat(pipeline_kharif_othercrop_water_req1) * 0.001;
        } else {
            pipeline_kharif_othercrop_waterdemand1 = parseFloat(pipeline_kharif_othercrop_area1) * 0 * 0.001;
            pipeline_kharif_othercrop_water_req1 = 0;
        }


        if (pipeline_kharif_othercrop_irri_area1 == "") {
            pipeline_kharif_othercrop_irri_area1 = 0;
        }
        pipeline_kharif_othercrop_pipeline_waterdemand1 = ((parseFloat(pipeline_kharif_othercrop_area1) - parseFloat(pipeline_kharif_othercrop_irri_area1)) * parseFloat(pipeline_kharif_othercrop_water_req1) * 0.001)
            + (parseFloat(pipeline_kharif_othercrop_irri_area1) * parseFloat(pipeline_kharif_othercrop_water_req1) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_othercrop_reduc_gw_demand1 = pipeline_kharif_othercrop_waterdemand1 - pipeline_kharif_othercrop_pipeline_waterdemand1;
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_othercrop_waterdemand1 + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_othercrop_pipeline_waterdemand1;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_othercrop_reduc_gw_demand1;
        //Kharif_Paddy_SavingValue

    }


    var pipeline_kharif_othercrop_area2 = $('#pipeline_kharif_othercrop_area2').val();
    if (typeof pipeline_kharif_othercrop_area2 == 'undefined') {
        pipeline_kharif_othercrop_area2 = 0;
    }
    var pipeline_kharif_othercrop_irri_area2 = $('#pipeline_kharif_othercrop_irri_area2').val();
    if (typeof pipeline_kharif_othercrop_irri_area2 == 'undefined') {
        pipeline_kharif_othercrop_irri_area2 = 0;
    }
    var pipeline_kharif_othercrop_water_req2 = $('#pipeline_kharif_othercrop_water_req2').val();
    if (typeof pipeline_kharif_othercrop_water_req2 == 'undefined') {
        pipeline_kharif_othercrop_water_req2 = 0;
    }

    if (pipeline_kharif_othercrop_area2 != "") {

        if (pipeline_kharif_othercrop_water_req2 != "") {
            pipeline_kharif_othercrop_waterdemand2 = parseFloat(pipeline_kharif_othercrop_area2) * parseFloat(pipeline_kharif_othercrop_water_req2) * 0.001;
        } else {
            pipeline_kharif_othercrop_waterdemand2 = parseFloat(pipeline_kharif_othercrop_area2) * 0 * 0.001;
            pipeline_kharif_othercrop_water_req2 = 0;
        }


        if (pipeline_kharif_othercrop_irri_area2 == "") {
            pipeline_kharif_othercrop_irri_area2 = 0;
        }
        pipeline_kharif_othercrop_pipeline_waterdemand2 = ((parseFloat(pipeline_kharif_othercrop_area2) - parseFloat(pipeline_kharif_othercrop_irri_area2)) * parseFloat(pipeline_kharif_othercrop_water_req2) * 0.001)
            + (parseFloat(pipeline_kharif_othercrop_irri_area2) * parseFloat(pipeline_kharif_othercrop_water_req2) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_othercrop_reduc_gw_demand2 = pipeline_kharif_othercrop_waterdemand2 - pipeline_kharif_othercrop_pipeline_waterdemand2;
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_othercrop_waterdemand2 + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_othercrop_pipeline_waterdemand2;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_othercrop_reduc_gw_demand2;
        //Kharif_Paddy_SavingValue

    }
    var pipeline_kharif_othercrop_area3 = $('#pipeline_kharif_othercrop_area3').val();
    if (typeof pipeline_kharif_othercrop_area3 == 'undefined') {
        pipeline_kharif_othercrop_area3 = 0;
    }
    var pipeline_kharif_othercrop_irri_area3 = $('#pipeline_kharif_othercrop_irri_area3').val();
    if (typeof pipeline_kharif_othercrop_irri_area3 == 'undefined') {
        pipeline_kharif_othercrop_irri_area3 = 0;
    }
    var pipeline_kharif_othercrop_water_req3 = $('#pipeline_kharif_othercrop_water_req3').val();
    if (typeof pipeline_kharif_othercrop_water_req3 == 'undefined') {
        pipeline_kharif_othercrop_water_req3 = 0;
    }

    if (pipeline_kharif_othercrop_area3 != "") {

        if (pipeline_kharif_othercrop_water_req3 != "") {
            pipeline_kharif_othercrop_waterdemand3 = parseFloat(pipeline_kharif_othercrop_area3) * parseFloat(pipeline_kharif_othercrop_water_req3) * 0.001;
        } else {
            pipeline_kharif_othercrop_waterdemand3 = parseFloat(pipeline_kharif_othercrop_area3) * 0 * 0.001;
            pipeline_kharif_othercrop_water_req3 = 0;
        }


        if (pipeline_kharif_othercrop_irri_area3 == "") {
            pipeline_kharif_othercrop_irri_area3 = 0;
        }
        pipeline_kharif_othercrop_pipeline_waterdemand3 = ((parseFloat(pipeline_kharif_othercrop_area3) - parseFloat(pipeline_kharif_othercrop_irri_area3)) * parseFloat(pipeline_kharif_othercrop_water_req3) * 0.001)
            + (parseFloat(pipeline_kharif_othercrop_irri_area3) * parseFloat(pipeline_kharif_othercrop_water_req3) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_othercrop_reduc_gw_demand3 = pipeline_kharif_othercrop_waterdemand3 - pipeline_kharif_othercrop_pipeline_waterdemand3;
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_othercrop_waterdemand3 + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_othercrop_pipeline_waterdemand3;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_othercrop_reduc_gw_demand3;
        //Kharif_Paddy_SavingValue

    }

    var pipeline_kharif_othercrop_area4 = $('#pipeline_kharif_othercrop_area4').val();
    if (typeof pipeline_kharif_othercrop_area4 == 'undefined') {
        pipeline_kharif_othercrop_area4 = 0;
    }
    var pipeline_kharif_othercrop_irri_area4 = $('#pipeline_kharif_othercrop_irri_area4').val();
    if (typeof pipeline_kharif_othercrop_irri_area4 == 'undefined') {
        pipeline_kharif_othercrop_irri_area4 = 0;
    }
    var pipeline_kharif_othercrop_water_req4 = $('#pipeline_kharif_othercrop_water_req4').val();
    if (typeof pipeline_kharif_othercrop_water_req4 == 'undefined') {
        pipeline_kharif_othercrop_water_req4 = 0;
    }

    if (pipeline_kharif_othercrop_area4 != "") {

        if (pipeline_kharif_othercrop_water_req4 != "") {
            pipeline_kharif_othercrop_waterdemand4 = parseFloat(pipeline_kharif_othercrop_area4) * parseFloat(pipeline_kharif_othercrop_water_req4) * 0.001;
        } else {
            pipeline_kharif_othercrop_waterdemand4 = parseFloat(pipeline_kharif_othercrop_area4) * 0 * 0.001;
            pipeline_kharif_othercrop_water_req4 = 0;
        }


        if (pipeline_kharif_othercrop_irri_area4 == "") {
            pipeline_kharif_othercrop_irri_area4 = 0;
        }
        pipeline_kharif_othercrop_pipeline_waterdemand4 = ((parseFloat(pipeline_kharif_othercrop_area4) - parseFloat(pipeline_kharif_othercrop_irri_area4)) * parseFloat(pipeline_kharif_othercrop_water_req4) * 0.001)
            + (parseFloat(pipeline_kharif_othercrop_irri_area4) * parseFloat(pipeline_kharif_othercrop_water_req4) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_othercrop_reduc_gw_demand4 = pipeline_kharif_othercrop_waterdemand4 - pipeline_kharif_othercrop_pipeline_waterdemand4;
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_othercrop_waterdemand4 + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_othercrop_pipeline_waterdemand4;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_othercrop_reduc_gw_demand4;
        //Kharif_Paddy_SavingValue

    }

    var pipeline_kharif_othercrop_area5 = $('#pipeline_kharif_othercrop_area5').val();
    if (typeof pipeline_kharif_othercrop_area5 == 'undefined') {
        pipeline_kharif_othercrop_area5 = 0;
    }
    var pipeline_kharif_othercrop_irri_area5 = $('#pipeline_kharif_othercrop_irri_area5').val();
    if (typeof pipeline_kharif_othercrop_irri_area5 == 'undefined') {
        pipeline_kharif_othercrop_irri_area5 = 0;
    }
    var pipeline_kharif_othercrop_water_req5 = $('#pipeline_kharif_othercrop_water_req5').val();
    if (typeof pipeline_kharif_othercrop_water_req5 == 'undefined') {
        pipeline_kharif_othercrop_water_req5 = 0;
    }

    if (pipeline_kharif_othercrop_area5 != "") {

        if (pipeline_kharif_othercrop_water_req5 != "") {
            pipeline_kharif_othercrop_waterdemand5 = parseFloat(pipeline_kharif_othercrop_area5) * parseFloat(pipeline_kharif_othercrop_water_req5) * 0.001;
        } else {
            pipeline_kharif_othercrop_waterdemand5 = parseFloat(pipeline_kharif_othercrop_area5) * 0 * 0.001;
            pipeline_kharif_othercrop_water_req5 = 0;
        }


        if (pipeline_kharif_othercrop_irri_area5 == "") {
            pipeline_kharif_othercrop_irri_area5 = 0;
        }
        pipeline_kharif_othercrop_pipeline_waterdemand5 = ((parseFloat(pipeline_kharif_othercrop_area5) - parseFloat(pipeline_kharif_othercrop_irri_area5)) * parseFloat(pipeline_kharif_othercrop_water_req5) * 0.001)
            + (parseFloat(pipeline_kharif_othercrop_irri_area5) * parseFloat(pipeline_kharif_othercrop_water_req5) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_othercrop_reduc_gw_demand5 = pipeline_kharif_othercrop_waterdemand5 - pipeline_kharif_othercrop_pipeline_waterdemand5;
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_othercrop_waterdemand5 + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_othercrop_pipeline_waterdemand5;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_othercrop_reduc_gw_demand5;
        //Kharif_Paddy_SavingValue

    }



    //Paddy

    var pipeline_kharif_paddy_crop_area = $('#pipeline_kharif_paddy_crop_area').val();
    var pipeline_kharif_paddy_irri_area = $('#pipeline_kharif_paddy_irri_area').val();
    var pipeline_kharif_paddy_water_req = $('#pipeline_kharif_paddy_water_req').val();

    if (pipeline_kharif_paddy_crop_area != "") {

        if (pipeline_kharif_paddy_water_req != "") {
            pipeline_kharif_paddy_waterdemand = parseFloat(pipeline_kharif_paddy_crop_area) * parseFloat(pipeline_kharif_paddy_water_req) * 0.001;
        } else {
            pipeline_kharif_paddy_waterdemand = parseFloat(pipeline_kharif_paddy_crop_area) * 0 * 0.001;
            pipeline_kharif_paddy_water_req = 0;
        }
        //pipeline_kharif_paddy_waterdemand = parseFloat(pipeline_kharif_paddy_crop_area) * 1175 * 0.001;

        if (pipeline_kharif_paddy_irri_area == "") {
            pipeline_kharif_paddy_irri_area = 0;
        }
        pipeline_kharif_paddy_pipeline_waterdemand = ((parseFloat(pipeline_kharif_paddy_crop_area) - parseFloat(pipeline_kharif_paddy_irri_area)) * parseFloat(pipeline_kharif_paddy_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_paddy_irri_area) * parseFloat(pipeline_kharif_paddy_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_paddy_reduction_water_demand = pipeline_kharif_paddy_waterdemand - pipeline_kharif_paddy_pipeline_waterdemand;
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_paddy_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_paddy_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_paddy_reduction_water_demand;
        //Kharif_Paddy_SavingValue

    }
    //Ragi



    var pipeline_kharif_ragi_crop_area = $('#pipeline_kharif_ragi_crop_area').val();
    var pipeline_kharif_ragi_irri_area = $('#pipeline_kharif_ragi_irri_area').val();
    var pipeline_kharif_ragi_water_req = $('#pipeline_kharif_ragi_water_req').val();
    if (pipeline_kharif_ragi_crop_area != "") {
        if (pipeline_kharif_ragi_water_req != "") {
            pipeline_kharif_ragi_waterdemand = parseFloat(pipeline_kharif_ragi_crop_area) * parseFloat(pipeline_kharif_ragi_water_req) * 0.001;
        } else {
            pipeline_kharif_ragi_waterdemand = parseFloat(pipeline_kharif_ragi_crop_area) * 0 * 0.001;
            pipeline_kharif_ragi_water_req = 0;
        }

        //pipeline_kharif_ragi_waterdemand = parseFloat(pipeline_kharif_ragi_crop_area) * 550 * 0.001;

        if (pipeline_kharif_ragi_irri_area == "") {
            pipeline_kharif_ragi_irri_area = 0;
        }
        pipeline_kharif_ragi_pipeline_waterdemand = ((parseFloat(pipeline_kharif_ragi_crop_area) - parseFloat(pipeline_kharif_ragi_irri_area)) * parseFloat(pipeline_kharif_ragi_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_ragi_irri_area) * parseFloat(pipeline_kharif_ragi_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_ragi_reduction_water_demand = pipeline_kharif_ragi_waterdemand - pipeline_kharif_ragi_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_ragi_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_ragi_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_ragi_reduction_water_demand;

    }


    //GroundNut


    var pipeline_kharif_groundnut_crop_area = $('#pipeline_kharif_groundnut_crop_area').val();
    var pipeline_kharif_groundnut_irri_area = $('#pipeline_kharif_groundnut_irri_area').val();
    var pipeline_kharif_groundnut_water_req = $('#pipeline_kharif_groundnut_water_req').val();
    if (pipeline_kharif_groundnut_crop_area != "") {
        if (pipeline_kharif_groundnut_water_req != "") {
            pipeline_kharif_groundnut_waterdemand = parseFloat(pipeline_kharif_groundnut_crop_area) * parseFloat(pipeline_kharif_groundnut_water_req) * 0.001;
        } else {
            pipeline_kharif_groundnut_waterdemand = parseFloat(pipeline_kharif_groundnut_crop_area) * 0 * 0.001;
            pipeline_kharif_groundnut_water_req = 0;
        }

        //pipeline_kharif_groundnut_waterdemand = parseFloat(pipeline_kharif_groundnut_crop_area) * 525 * 0.001;

        if (pipeline_kharif_groundnut_irri_area == "") {
            pipeline_kharif_groundnut_irri_area = 0;
        }
        pipeline_kharif_groundnut_pipeline_waterdemand = ((parseFloat(pipeline_kharif_groundnut_crop_area) - parseFloat(pipeline_kharif_groundnut_irri_area)) * parseFloat(pipeline_kharif_groundnut_water_req) * 0.001) + (parseFloat(pipeline_kharif_groundnut_irri_area) * parseFloat(pipeline_kharif_groundnut_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_groundnut_reduction_water_demand = pipeline_kharif_groundnut_waterdemand - pipeline_kharif_groundnut_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_groundnut_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_groundnut_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_groundnut_reduction_water_demand;

    }


    //Sugarcane


    var pipeline_kharif_sugarcane_crop_area = $('#pipeline_kharif_sugarcane_crop_area').val();
    var pipeline_kharif_sugarcane_irri_area = $('#pipeline_kharif_sugarcane_irri_area').val();
    var pipeline_kharif_sugarcane_water_req = $('#pipeline_kharif_sugarcane_water_req').val();
    if (pipeline_kharif_sugarcane_crop_area != "") {
        if (pipeline_kharif_sugarcane_water_req != "") {
            pipeline_kharif_sugarcane_waterdemand = parseFloat(pipeline_kharif_sugarcane_crop_area) * parseFloat(pipeline_kharif_sugarcane_water_req) * 0.001;
        } else {
            pipeline_kharif_sugarcane_waterdemand = parseFloat(pipeline_kharif_sugarcane_crop_area) * 0 * 0.001;
            pipeline_kharif_sugarcane_water_req = 0;
        }
        //pipeline_kharif_sugarcane_waterdemand = parseFloat(pipeline_kharif_sugarcane_crop_area) * 2000 * 0.001;

        if (pipeline_kharif_sugarcane_irri_area == "") {
            pipeline_kharif_sugarcane_irri_area = 0;
        }
        pipeline_kharif_sugarcane_pipeline_waterdemand = ((parseFloat(pipeline_kharif_sugarcane_crop_area) - parseFloat(pipeline_kharif_sugarcane_irri_area)) * parseFloat(pipeline_kharif_sugarcane_water_req) * 0.001) + (parseFloat(pipeline_kharif_sugarcane_irri_area) * parseFloat(pipeline_kharif_sugarcane_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_sugarcane_reduction_water_demand = pipeline_kharif_sugarcane_waterdemand - pipeline_kharif_sugarcane_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_sugarcane_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_sugarcane_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_sugarcane_reduction_water_demand;

    }


    //Tomato

    var pipeline_kharif_tomoto_crop_area = $('#pipeline_kharif_tomoto_crop_area').val();
    var pipeline_kharif_tomoto_irri_area = $('#pipeline_kharif_tomoto_irri_area').val();
    var pipeline_kharif_tomoto_water_req = $('#pipeline_kharif_tomoto_water_req').val();
    if (pipeline_kharif_tomoto_crop_area != "") {
        if (pipeline_kharif_tomoto_water_req != "") {
            pipeline_kharif_tomoto_waterdemand = parseFloat(pipeline_kharif_tomoto_crop_area) * parseFloat(pipeline_kharif_tomoto_water_req) * 0.001;
        } else {
            pipeline_kharif_tomoto_waterdemand = parseFloat(pipeline_kharif_tomoto_crop_area) * 0 * 0.001;
            pipeline_kharif_tomoto_water_req = 0;
        }
        // pipeline_kharif_tomoto_waterdemand = parseFloat(pipeline_kharif_tomoto_crop_area) * 600 * 0.001;

        if (pipeline_kharif_tomoto_irri_area == "") {
            pipeline_kharif_tomoto_irri_area = 0;
        }

        pipeline_kharif_tomoto_pipeline_waterdemand = ((parseFloat(pipeline_kharif_tomoto_crop_area) - parseFloat(pipeline_kharif_tomoto_irri_area)) * parseFloat(pipeline_kharif_tomoto_water_req) * 0.001) + (parseFloat(pipeline_kharif_tomoto_irri_area) * parseFloat(pipeline_kharif_tomoto_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_tomoto_reduction_water_demand = pipeline_kharif_tomoto_waterdemand - pipeline_kharif_tomoto_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_tomoto_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_tomoto_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_tomoto_reduction_water_demand;

    }



    //Cabbage

    //var pipeline_kharif_cabbage_crop_area = $('#pipeline_kharif_cabbage_crop_area').val();
    //var pipeline_kharif_cabbage_irri_area = $('#pipeline_kharif_cabbage_irri_area').val();
    //var pipeline_kharif_cabbage_water_req = $('#pipeline_kharif_cabbage_water_req').val();
    //if (pipeline_kharif_cabbage_crop_area != "") {
    //    if (pipeline_kharif_cabbage_water_req != "") {
    //        pipeline_kharif_cabbage_waterdemand = parseFloat(pipeline_kharif_cabbage_crop_area) * parseFloat(pipeline_kharif_cabbage_water_req) * 0.001;
    //    } else {
    //        pipeline_kharif_cabbage_waterdemand = parseFloat(pipeline_kharif_cabbage_crop_area) * 0 * 0.001;
    //        pipeline_kharif_cabbage_water_req = 0;
    //    }
    //    //pipeline_kharif_cabbage_waterdemand = parseFloat(pipeline_kharif_cabbage_crop_area) * 425 * 0.001;

    //    if (pipeline_kharif_cabbage_irri_area == "") {
    //        pipeline_kharif_cabbage_irri_area = 0;
    //    }
    //    pipeline_kharif_cabbage_pipeline_waterdemand = ((parseFloat(pipeline_kharif_cabbage_crop_area) - parseFloat(pipeline_kharif_cabbage_irri_area)) * parseFloat(pipeline_kharif_cabbage_water_req) * 0.001) + (parseFloat(pipeline_kharif_cabbage_irri_area) * parseFloat(pipeline_kharif_cabbage_water_req) * (1 - 20 / 100) * 0.001);
    //    pipeline_kharif_cabbage_reduction_water_demand = parseFloat(pipeline_kharif_cabbage_waterdemand) - parseFloat(pipeline_kharif_cabbage_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Kharif_Crops = parseFloat(pipeline_kharif_cabbage_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Kharif_Crops);
    //    pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand) + parseFloat(pipeline_kharif_cabbage_pipeline_waterdemand);
    //    pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_kharif_cabbage_reduction_water_demand);

    //}




    //Beans

    //var pipeline_kharif_beans_crop_area = $('#pipeline_kharif_beans_crop_area').val();
    //var pipeline_kharif_beans_irri_area = $('#pipeline_kharif_beans_irri_area').val();
    //var pipeline_kharif_beans_water_req = $('#pipeline_kharif_beans_water_req').val();
    //if (pipeline_kharif_beans_crop_area != "") {
    //    if (pipeline_kharif_beans_water_req != "") {
    //        pipeline_kharif_beans_waterdemand = parseFloat(pipeline_kharif_beans_crop_area) * parseFloat(pipeline_kharif_beans_water_req) * 0.001;
    //    } else {
    //        pipeline_kharif_beans_waterdemand = parseFloat(pipeline_kharif_beans_crop_area) * 0 * 0.001;
    //        pipeline_kharif_beans_water_req = 0;
    //    }
    //    //pipeline_kharif_beans_waterdemand = parseFloat(pipeline_kharif_beans_crop_area) * 425 * 0.001;

    //    if (pipeline_kharif_beans_irri_area == "") {
    //        pipeline_kharif_beans_irri_area = 0;
    //    }
    //    pipeline_kharif_beans_pipeline_waterdemand = ((parseFloat(pipeline_kharif_beans_crop_area) - parseFloat(pipeline_kharif_beans_irri_area)) * parseFloat(pipeline_kharif_beans_water_req) * 0.001) + (parseFloat(pipeline_kharif_beans_irri_area) * parseFloat(pipeline_kharif_beans_water_req) * (1 - 20 / 100) * 0.001);
    //    pipeline_kharif_beans_reduction_water_demand = parseFloat(pipeline_kharif_beans_waterdemand) - parseFloat(pipeline_kharif_beans_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Kharif_Crops = parseFloat(pipeline_kharif_beans_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Kharif_Crops);
    //    pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand) + parseFloat(pipeline_kharif_beans_pipeline_waterdemand);
    //    pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_kharif_beans_reduction_water_demand);

    //}


    //Floriculture

    var pipeline_kharif_floriculture_crop_area = $('#pipeline_kharif_floriculture_crop_area').val();
    var pipeline_kharif_floriculture_irri_area = $('#pipeline_kharif_floriculture_irri_area').val();
    var pipeline_kharif_floriculture_water_req = $('#pipeline_kharif_floriculture_water_req').val();
    if (pipeline_kharif_floriculture_crop_area != "") {
        if (pipeline_kharif_floriculture_water_req != "") {
            pipeline_kharif_floriculture_waterdemand = parseFloat(pipeline_kharif_floriculture_crop_area) * parseFloat(pipeline_kharif_floriculture_water_req) * 0.001;
        } else {
            pipeline_kharif_floriculture_waterdemand = parseFloat(pipeline_kharif_floriculture_crop_area) * 0 * 0.001;
            pipeline_kharif_floriculture_water_req = 0;
        }
        pipeline_kharif_floriculture_waterdemand = parseFloat(pipeline_kharif_floriculture_crop_area) * 1200 * 0.001;

        if (pipeline_kharif_floriculture_irri_area == "") {
            pipeline_kharif_floriculture_irri_area = 0;
        }
        pipeline_kharif_floriculture_pipeline_waterdemand = ((parseFloat(pipeline_kharif_floriculture_crop_area) - parseFloat(pipeline_kharif_floriculture_irri_area)) * parseFloat(pipeline_kharif_floriculture_water_req) * 0.001) + (parseFloat(pipeline_kharif_floriculture_irri_area) * parseFloat(pipeline_kharif_floriculture_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_floriculture_reduction_water_demand = pipeline_kharif_floriculture_waterdemand - pipeline_kharif_floriculture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_floriculture_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_floriculture_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_floriculture_reduction_water_demand;

    }




    //Sericulture

    var pipeline_kharif_sericulture_crop_area = $('#pipeline_kharif_sericulture_crop_area').val();
    var pipeline_kharif_sericulture_irri_area = $('#pipeline_kharif_sericulture_irri_area').val();
    var pipeline_kharif_sericulture_water_req = $('#pipeline_kharif_sericulture_water_req').val();
    if (pipeline_kharif_sericulture_crop_area != "") {
        if (pipeline_kharif_sericulture_water_req != "") {
            pipeline_kharif_sericulture_waterdemand = parseFloat(pipeline_kharif_sericulture_crop_area) * parseFloat(pipeline_kharif_sericulture_water_req) * 0.001;
        } else {
            pipeline_kharif_sericulture_waterdemand = parseFloat(pipeline_kharif_sericulture_crop_area) * 0 * 0.001;
            pipeline_kharif_sericulture_water_req = 0;
        }
        pipeline_kharif_sericulture_waterdemand = parseFloat(pipeline_kharif_sericulture_crop_area) * 1550 * 0.001;

        if (pipeline_kharif_sericulture_irri_area == "") {
            pipeline_kharif_sericulture_irri_area = 0;
        }

        pipeline_kharif_sericulture_pipeline_waterdemand = ((parseFloat(pipeline_kharif_sericulture_crop_area) - parseFloat(pipeline_kharif_sericulture_irri_area)) * parseFloat(pipeline_kharif_sericulture_water_req) * 0.001) + (parseFloat(pipeline_kharif_sericulture_irri_area) * parseFloat(pipeline_kharif_sericulture_water_req) * (1 - 20 / 100) * 0.001);
        pipeline_kharif_sericulture_reduction_water_demand = pipeline_kharif_sericulture_waterdemand - pipeline_kharif_sericulture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_sericulture_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_sericulture_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_sericulture_reduction_water_demand;

    }


    // Cucmber

    //var pipeline_kharif_cucumber_crop_area = $('#pipeline_kharif_cucumber_crop_area').val();
    //var pipeline_kharif_cucumber_irri_area = $('#pipeline_kharif_cucumber_irri_area').val();
    //var pipeline_kharif_cucumber_water_req = $('#pipeline_kharif_cucumber_water_req').val();
    //if (pipeline_kharif_cucumber_crop_area != "") {
    //    if (pipeline_kharif_cucumber_water_req != "") {
    //        pipeline_kharif_cucumber_waterdemand = parseFloat(pipeline_kharif_cucumber_crop_area) * parseFloat(pipeline_kharif_cucumber_water_req) * 0.001;
    //    } else {
    //        pipeline_kharif_cucumber_waterdemand = parseFloat(pipeline_kharif_cucumber_crop_area) * 0 * 0.001;
    //        pipeline_kharif_cucumber_water_req = 0;
    //    }
    //    // pipeline_kharif_cucumber_waterdemand = parseFloat(pipeline_kharif_cucumber_crop_area) * 400 * 0.001;

    //    if (pipeline_kharif_cucumber_irri_area == "") {
    //        pipeline_kharif_cucumber_irri_area = 0;
    //    }

    //    pipeline_kharif_cucumber_pipeline_waterdemand = ((parseFloat(pipeline_kharif_cucumber_crop_area) - parseFloat(pipeline_kharif_cucumber_irri_area)) * parseFloat(pipeline_kharif_cucumber_water_req) * 0.001)
    //        + (parseFloat(pipeline_kharif_cucumber_irri_area) * parseFloat(pipeline_kharif_cucumber_water_req) * (1 - 20 / 100) * 0.001);

    //    // pipeline_kharif_cucumber_pipeline_waterdemand = parseFloat(pipeline_kharif_cucumber_irri_area) * 400 * 0.03 * 0.001;
    //    pipeline_kharif_cucumber_reduction_water_demand = parseFloat(pipeline_kharif_cucumber_waterdemand) - parseFloat(pipeline_kharif_cucumber_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Kharif_Crops = parseFloat(pipeline_kharif_cucumber_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Kharif_Crops);
    //    pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand) + parseFloat(pipeline_kharif_cucumber_pipeline_waterdemand);
    //    pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_kharif_cucumber_reduction_water_demand);

    //}

    //Banana

    var pipeline_kharif_banana_crop_area = $('#pipeline_kharif_banana_crop_area').val();
    var pipeline_kharif_banana_irri_area = $('#pipeline_kharif_banana_irri_area').val();
    var pipeline_kharif_banana_water_req = $('#pipeline_kharif_banana_water_req').val();
    if (pipeline_kharif_banana_crop_area != "") {
        if (pipeline_kharif_banana_water_req != "") {
            pipeline_kharif_banana_waterdemand = parseFloat(pipeline_kharif_banana_crop_area) * parseFloat(pipeline_kharif_banana_water_req) * 0.001;
        } else {
            pipeline_kharif_banana_waterdemand = parseFloat(pipeline_kharif_banana_crop_area) * 0 * 0.001;
            pipeline_kharif_banana_water_req = 0;
        }
        // pipeline_kharif_banana_waterdemand = parseFloat(pipeline_kharif_banana_crop_area) * 1700 * 0.001;

        if (pipeline_kharif_banana_irri_area == "") {
            pipeline_kharif_banana_irri_area = 0;
        }

        pipeline_kharif_banana_pipeline_waterdemand = ((parseFloat(pipeline_kharif_banana_crop_area) - parseFloat(pipeline_kharif_banana_irri_area)) * parseFloat(pipeline_kharif_banana_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_banana_irri_area) * parseFloat(pipeline_kharif_banana_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_kharif_banana_pipeline_waterdemand = parseFloat(pipeline_kharif_banana_irri_area) * parseFloat(pipeline_kharif_banana_water_req) * 0.03 * 0.001;
        pipeline_kharif_banana_reduction_water_demand = pipeline_kharif_banana_waterdemand - pipeline_kharif_banana_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_banana_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_banana_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_banana_reduction_water_demand;

    }

    //Fodder

    var pipeline_kharif_fodder_crop_area = $('#pipeline_kharif_fodder_crop_area').val();
    var pipeline_kharif_fodder_irri_area = $('#pipeline_kharif_fodder_irri_area').val();
    var pipeline_kharif_fodder_water_req = $('#pipeline_kharif_fodder_water_req').val();
    if (pipeline_kharif_fodder_crop_area != "") {
        if (pipeline_kharif_fodder_water_req != "") {
            pipeline_kharif_fodder_waterdemand = parseFloat(pipeline_kharif_fodder_crop_area) * parseFloat(pipeline_kharif_fodder_water_req) * 0.001;
        } else {
            pipeline_kharif_fodder_waterdemand = parseFloat(pipeline_kharif_fodder_crop_area) * 0 * 0.001;
            pipeline_kharif_fodder_water_req = 0;
        }
        // pipeline_kharif_fodder_waterdemand = parseFloat(pipeline_kharif_fodder_crop_area) * 1400 * 0.001;

        if (pipeline_kharif_fodder_irri_area == "") {
            pipeline_kharif_fodder_irri_area = 0;
        }

        pipeline_kharif_fodder_pipeline_waterdemand = ((parseFloat(pipeline_kharif_fodder_crop_area) - parseFloat(pipeline_kharif_fodder_irri_area)) * parseFloat(pipeline_kharif_fodder_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_fodder_irri_area) * parseFloat(pipeline_kharif_fodder_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_kharif_fodder_pipeline_waterdemand = parseFloat(pipeline_kharif_fodder_irri_area) * parseFloat(pipeline_kharif_fodder_water_req) * 0.03 * 0.001;
        pipeline_kharif_fodder_reduction_water_demand = pipeline_kharif_fodder_waterdemand - pipeline_kharif_fodder_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_fodder_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_fodder_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_fodder_reduction_water_demand;

    }


    //Maize

    var pipeline_kharif_maize_crop_area = $('#pipeline_kharif_maize_crop_area').val();
    var pipeline_kharif_maize_irri_area = $('#pipeline_kharif_maize_irri_area').val();
    var pipeline_kharif_maize_water_req = $('#pipeline_kharif_maize_water_req').val();
    
    if (pipeline_kharif_maize_crop_area != "") {
        if (pipeline_kharif_maize_water_req != "") {
            pipeline_kharif_maize_waterdemand = parseFloat(pipeline_kharif_maize_crop_area) * parseFloat(pipeline_kharif_maize_water_req) * 0.001;
        } else {
            pipeline_kharif_maize_waterdemand = parseFloat(pipeline_kharif_maize_water_req) * 0 * 0.001;
            pipeline_kharif_maize_water_req = 0;
        }
        // pipeline_kharif_maize_waterdemand = parseFloat(pipeline_kharif_maize_crop_area) * 650 * 0.001;

        if (pipeline_kharif_maize_irri_area == "") {
            pipeline_kharif_maize_irri_area = 0;
        }

        pipeline_kharif_maize_pipeline_waterdemand = ((parseFloat(pipeline_kharif_maize_crop_area) - parseFloat(pipeline_kharif_maize_irri_area)) * parseFloat(pipeline_kharif_maize_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_maize_irri_area) * parseFloat(pipeline_kharif_maize_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_kharif_maize_pipeline_waterdemand = parseFloat(pipeline_kharif_maize_irri_area) * parseFloat(pipeline_kharif_maize_water_req) * 0.03 * 0.001;
        pipeline_kharif_maize_reduction_water_demand = pipeline_kharif_maize_waterdemand - pipeline_kharif_maize_pipeline_waterdemand;

        
        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_maize_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_maize_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_maize_reduction_water_demand;

    }

    //Potato

    //var pipeline_kharif_potato_crop_area = $('#pipeline_kharif_potato_crop_area').val();
    //var pipeline_kharif_potato_irri_area = $('#pipeline_kharif_potato_irri_area').val();
    //var pipeline_kharif_potato_water_req = $('#pipeline_kharif_potato_water_req').val();
    //if (pipeline_kharif_potato_crop_area != "") {
    //    if (pipeline_kharif_potato_water_req != "") {
    //        pipeline_kharif_potato_waterdemand = parseFloat(pipeline_kharif_potato_crop_area) * parseFloat(pipeline_kharif_potato_water_req) * 0.001;
    //    } else {
    //        pipeline_kharif_potato_waterdemand = parseFloat(pipeline_kharif_potato_crop_area) * 0 * 0.001;
    //        pipeline_kharif_potato_water_req = 0;
    //    }
    //    // pipeline_kharif_potato_waterdemand = parseFloat(pipeline_kharif_potato_crop_area) * 600 * 0.001;

    //    if (pipeline_kharif_potato_irri_area == "") {
    //        pipeline_kharif_potato_irri_area = 0;
    //    }

    //    pipeline_kharif_potato_pipeline_waterdemand = ((parseFloat(pipeline_kharif_potato_crop_area) - parseFloat(pipeline_kharif_potato_irri_area)) * parseFloat(pipeline_kharif_potato_water_req) * 0.001)
    //        + (parseFloat(pipeline_kharif_potato_irri_area) * parseFloat(pipeline_kharif_potato_water_req) * (1 - 20 / 100) * 0.001);

    //    //pipeline_kharif_potato_pipeline_waterdemand = parseFloat(pipeline_kharif_potato_irri_area) * parseFloat(pipeline_kharif_potato_water_req) * 0.03 * 0.001;
    //    pipeline_kharif_potato_reduction_water_demand = parseFloat(pipeline_kharif_potato_waterdemand) - parseFloat(pipeline_kharif_potato_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Kharif_Crops = parseFloat(pipeline_kharif_potato_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Kharif_Crops);
    //    pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand) + parseFloat(pipeline_kharif_potato_pipeline_waterdemand);
    //    pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_kharif_potato_reduction_water_demand);

    //}

    //Chillies
    var pipeline_kharif_chillies_crop_area = $('#pipeline_kharif_chillies_crop_area').val();
    var pipeline_kharif_chillies_irri_area = $('#pipeline_kharif_chillies_irri_area').val();
    var pipeline_kharif_chillies_water_req = $('#pipeline_kharif_chillies_water_req').val();
    if (pipeline_kharif_chillies_crop_area != "") {
        if (pipeline_kharif_chillies_water_req != "") {
            pipeline_kharif_chillies_waterdemand = parseFloat(pipeline_kharif_chillies_crop_area) * parseFloat(pipeline_kharif_chillies_water_req) * 0.001;
        } else {
            pipeline_kharif_chillies_waterdemand = parseFloat(pipeline_kharif_chillies_crop_area) * 0 * 0.001;
            pipeline_kharif_chillies_water_req = 0;
        }
        //pipeline_kharif_chillies_waterdemand = parseFloat(pipeline_kharif_chillies_crop_area) * 230 * 0.001;

        if (pipeline_kharif_chillies_irri_area == "") {
            pipeline_kharif_chillies_irri_area = 0;
        }

        pipeline_kharif_chillies_pipeline_waterdemand = ((parseFloat(pipeline_kharif_chillies_crop_area) - parseFloat(pipeline_kharif_chillies_irri_area)) * parseFloat(pipeline_kharif_chillies_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_chillies_irri_area) * parseFloat(pipeline_kharif_chillies_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_kharif_chillies_pipeline_waterdemand = parseFloat(pipeline_kharif_chillies_irri_area) * parseFloat(pipeline_kharif_chillies_water_req) * 0.03 * 0.001;
        pipeline_kharif_chillies_reduction_water_demand = pipeline_kharif_chillies_waterdemand - pipeline_kharif_chillies_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_chillies_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_chillies_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_chillies_reduction_water_demand;

    }


    //Cotton

    var pipeline_kharif_cotton_crop_area = $('#pipeline_kharif_cotton_crop_area').val();
    var pipeline_kharif_cotton_irri_area = $('#pipeline_kharif_cotton_irri_area').val();
    var pipeline_kharif_cotton_water_req = $('#pipeline_kharif_cotton_water_req').val();
    if (pipeline_kharif_cotton_crop_area != "") {
        if (pipeline_kharif_cotton_water_req != "") {
            pipeline_kharif_cotton_waterdemand = parseFloat(pipeline_kharif_cotton_crop_area) * parseFloat(pipeline_kharif_cotton_water_req) * 0.001;
        } else {
            pipeline_kharif_cotton_waterdemand = parseFloat(pipeline_kharif_cotton_crop_area) * 0 * 0.001;
            pipeline_kharif_cotton_water_req = 0;
        }
        // pipeline_kharif_cotton_waterdemand = parseFloat(pipeline_kharif_cotton_crop_area) * 1000 * 0.001;

        if (pipeline_kharif_cotton_irri_area == "") {
            pipeline_kharif_cotton_irri_area = 0;
        }

        pipeline_kharif_cotton_pipeline_waterdemand = ((parseFloat(pipeline_kharif_cotton_crop_area) - parseFloat(pipeline_kharif_cotton_irri_area)) * parseFloat(pipeline_kharif_cotton_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_cotton_irri_area) * parseFloat(pipeline_kharif_cotton_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_kharif_cotton_pipeline_waterdemand = parseFloat(pipeline_kharif_cotton_irri_area) * parseFloat(pipeline_kharif_cotton_water_req) * 0.03 * 0.001;
        pipeline_kharif_cotton_reduction_water_demand = pipeline_kharif_cotton_waterdemand - pipeline_kharif_cotton_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_cotton_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_cotton_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_cotton_reduction_water_demand;

    }


    //Melon

    var pipeline_kharif_melon_crop_area = $('#pipeline_kharif_melon_crop_area').val();
    var pipeline_kharif_melon_irri_area = $('#pipeline_kharif_melon_irri_area').val();
    var pipeline_kharif_melon_water_req = $('#pipeline_kharif_melon_water_req').val();
    if (pipeline_kharif_melon_crop_area != "") {
        if (pipeline_kharif_melon_water_req != "") {
            pipeline_kharif_melon_waterdemand = parseFloat(pipeline_kharif_melon_crop_area) * parseFloat(pipeline_kharif_melon_water_req) * 0.001;
        } else {
            pipeline_kharif_melon_waterdemand = parseFloat(pipeline_kharif_melon_crop_area) * 0 * 0.001;
            pipeline_kharif_melon_water_req = 0;
        }


        //pipeline_kharif_melon_waterdemand = parseFloat(pipeline_kharif_melon_crop_area) * 500 * 0.001;

        if (pipeline_kharif_melon_irri_area == "") {
            pipeline_kharif_melon_irri_area = 0;
        }

        pipeline_kharif_melon_pipeline_waterdemand = ((parseFloat(pipeline_kharif_melon_crop_area) - parseFloat(pipeline_kharif_melon_irri_area)) * parseFloat(pipeline_kharif_melon_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_melon_irri_area) * parseFloat(pipeline_kharif_melon_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_kharif_melon_pipeline_waterdemand = parseFloat(pipeline_kharif_melon_irri_area) * parseFloat(pipeline_kharif_melon_water_req) * 0.03 * 0.001;
        pipeline_kharif_melon_reduction_water_demand = pipeline_kharif_melon_waterdemand - pipeline_kharif_melon_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_melon_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_melon_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_melon_reduction_water_demand;

    }


    //Citrus

    var pipeline_kharif_citrus_crop_area = $('#pipeline_kharif_citrus_crop_area').val();
    var pipeline_kharif_citrus_irri_area = $('#pipeline_kharif_citrus_irri_area').val();
    var pipeline_kharif_citrus_water_req = $('#pipeline_kharif_citrus_water_req').val();
    if (pipeline_kharif_citrus_crop_area != "") {
        if (pipeline_kharif_citrus_water_req != "") {
            pipeline_kharif_citrus_waterdemand = parseFloat(pipeline_kharif_citrus_crop_area) * parseFloat(pipeline_kharif_citrus_water_req) * 0.001;
        } else {
            pipeline_kharif_citrus_waterdemand = parseFloat(pipeline_kharif_citrus_crop_area) * 0 * 0.001;
            pipeline_kharif_citrus_water_req = 0;
        }
        //pipeline_kharif_citrus_waterdemand = parseFloat(pipeline_kharif_citrus_crop_area) * 1050 * 0.001;

        if (pipeline_kharif_citrus_irri_area == "") {
            pipeline_kharif_citrus_irri_area = 0;
        }

        pipeline_kharif_citrus_pipeline_waterdemand = ((parseFloat(pipeline_kharif_citrus_crop_area) - parseFloat(pipeline_kharif_citrus_irri_area)) * parseFloat(pipeline_kharif_citrus_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_citrus_irri_area) * parseFloat(pipeline_kharif_citrus_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_kharif_citrus_pipeline_waterdemand = parseFloat(pipeline_kharif_citrus_irri_area) * parseFloat(pipeline_kharif_citrus_water_req) * 0.03 * 0.001;
        pipeline_kharif_citrus_reduction_water_demand = pipeline_kharif_citrus_waterdemand - pipeline_kharif_citrus_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_citrus_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_citrus_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_citrus_reduction_water_demand;

    }


    // Peanut

    //var pipeline_kharif_peanut_crop_area = $('#pipeline_kharif_peanut_crop_area').val();
    //var pipeline_kharif_peanut_irri_area = $('#pipeline_kharif_peanut_irri_area').val();
    //var pipeline_kharif_peanut_water_req = $('#pipeline_kharif_peanut_water_req').val();
    //if (pipeline_kharif_peanut_crop_area != "") {
    //    if (pipeline_kharif_peanut_water_req != "") {
    //        pipeline_kharif_peanut_waterdemand = parseFloat(pipeline_kharif_peanut_crop_area) * parseFloat(pipeline_kharif_peanut_water_req) * 0.001;
    //    } else {
    //        pipeline_kharif_peanut_waterdemand = parseFloat(pipeline_kharif_peanut_crop_area) * 0 * 0.001;
    //        pipeline_kharif_peanut_water_req = 0;
    //    }
    //    // pipeline_kharif_peanut_waterdemand = parseFloat(pipeline_kharif_peanut_crop_area) * 600 * 0.001;

    //    if (pipeline_kharif_peanut_irri_area == "") {
    //        pipeline_kharif_peanut_irri_area = 0;
    //    }

    //    pipeline_kharif_peanut_pipeline_waterdemand = ((parseFloat(pipeline_kharif_peanut_crop_area) - parseFloat(pipeline_kharif_peanut_irri_area)) * parseFloat(pipeline_kharif_peanut_water_req) * 0.001)
    //        + (parseFloat(pipeline_kharif_peanut_irri_area) * parseFloat(pipeline_kharif_peanut_water_req) * (1 - 20 / 100) * 0.001);

    //    // pipeline_kharif_peanut_pipeline_waterdemand = parseFloat(pipeline_kharif_peanut_irri_area) * parseFloat(pipeline_kharif_peanut_water_req) * 0.03 * 0.001;
    //    pipeline_kharif_peanut_reduction_water_demand = parseFloat(pipeline_kharif_peanut_waterdemand) - parseFloat(pipeline_kharif_peanut_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Kharif_Crops = parseFloat(pipeline_kharif_peanut_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Kharif_Crops);
    //    pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand) + parseFloat(pipeline_kharif_peanut_pipeline_waterdemand);
    //    pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_kharif_peanut_reduction_water_demand);

    //}


    //Horticulture

    var pipeline_kharif_horticulture_crop_area = $('#pipeline_kharif_horticulture_crop_area').val();
    var pipeline_kharif_horticulture_irri_area = $('#pipeline_kharif_horticulture_irri_area').val();
    var pipeline_kharif_horticulture_water_req = $('#pipeline_kharif_horticulture_water_req').val();
    if (pipeline_kharif_horticulture_crop_area != "") {
        if (pipeline_kharif_horticulture_water_req != "") {
            pipeline_kharif_horticulture_waterdemand = parseFloat(pipeline_kharif_horticulture_crop_area) * parseFloat(pipeline_kharif_horticulture_water_req) * 0.001;
        } else {
            pipeline_kharif_horticulture_waterdemand = parseFloat(pipeline_kharif_horticulture_crop_area) * 0 * 0.001;
            pipeline_kharif_horticulture_water_req = 0;
        }
        //pipeline_kharif_horticulture_waterdemand = parseFloat(pipeline_kharif_horticulture_crop_area) * 470 * 0.001;

        if (pipeline_kharif_horticulture_irri_area == "") {
            pipeline_kharif_horticulture_irri_area = 0;
        }

        pipeline_kharif_horticulture_pipeline_waterdemand = ((parseFloat(pipeline_kharif_horticulture_crop_area) - parseFloat(pipeline_kharif_horticulture_irri_area)) * parseFloat(pipeline_kharif_horticulture_water_req) * 0.001)
            + (parseFloat(pipeline_kharif_horticulture_irri_area) * parseFloat(pipeline_kharif_horticulture_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_kharif_horticulture_pipeline_waterdemand = parseFloat(pipeline_kharif_horticulture_irri_area) * parseFloat(pipeline_kharif_horticulture_water_req) * 0.03 * 0.001;
        pipeline_kharif_horticulture_reduction_water_demand = pipeline_kharif_horticulture_waterdemand - pipeline_kharif_horticulture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Kharif_Crops = pipeline_kharif_horticulture_waterdemand + pipeline_Total_Water_Demand_for_Kharif_Crops;
        pipeline_kharif_total_pipeline_waterdemand = pipeline_kharif_total_pipeline_waterdemand + pipeline_kharif_horticulture_pipeline_waterdemand;
        pipeline_kharif_total_reduction_waterdemand = pipeline_kharif_total_reduction_waterdemand + pipeline_kharif_horticulture_reduction_water_demand;

    }
    pipeline_kharif_othercrop_waterdemand = 0;
    pipeline_kharif_othercrop_pipeline_waterdemand = 0;
    pipeline_kharif_othercrop_reduc_gw_demand = 0;



    //var pipeline_kharif_othercrop_area = $('#pipeline_kharif_othercrop_area').val();
    //var pipeline_kharif_othercrop_irri_area = $('#pipeline_kharif_othercrop_irri_area').val();
    //var pipeline_kharif_othercrop_water_req = $('#pipeline_kharif_othercrop_water_req').val();
    //if (pipeline_kharif_othercrop_area != "") {
    //    if (pipeline_kharif_othercrop_irri_area != "") {
    //        pipeline_kharif_othercrop_waterdemand = parseFloat(pipeline_kharif_othercrop_area) * parseFloat(pipeline_kharif_othercrop_irri_area) * 0.001;
    //    } else {
    //        pipeline_kharif_horticulture_waterdemand = parseFloat(pipeline_kharif_othercrop_area) * 0 * 0.001;
    //        pipeline_kharif_horticulture_water_req = 0;
    //    }
    //    //pipeline_kharif_horticulture_waterdemand = parseFloat(pipeline_kharif_horticulture_crop_area) * 470 * 0.001;

    //    if (pipeline_kharif_othercrop_irri_area == "") {
    //        pipeline_kharif_othercrop_irri_area = 0;
    //    }
    //    pipeline_kharif_othercrop_pipeline_waterdemand = ((parseFloat(pipeline_kharif_othercrop_area) - parseFloat(pipeline_kharif_othercrop_irri_area)) * parseFloat(pipeline_kharif_othercrop_irri_area) * 0.001)
    //        + (parseFloat(pipeline_kharif_othercrop_irri_area) * parseFloat(pipeline_kharif_othercrop_irri_area) * (1 - 20 / 100) * 0.001);

    //    //pipeline_kharif_othercrop_pipeline_waterdemand = parseFloat(pipeline_kharif_othercrop_irri_area) * parseFloat(pipeline_kharif_othercrop_water_req) * 0.03 * 0.001;
    //    pipeline_kharif_othercrop_reduc_gw_demand = parseFloat(pipeline_kharif_othercrop_waterdemand) - parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Kharif_Crops = parseFloat(pipeline_kharif_othercrop_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Kharif_Crops);
    //    pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand) + parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand);
    //    pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_kharif_othercrop_reduc_gw_demand);

    //}

    $('#pipeline_kharif_total_waterdemand').text(pipeline_Total_Water_Demand_for_Kharif_Crops.toFixed(2));
    $('#pipeline_kharif_total_pipeline_waterdemand').text(pipeline_kharif_total_pipeline_waterdemand.toFixed(2));
    $('#pipeline_kharif_total_reduction_waterdemand').text(pipeline_kharif_total_reduction_waterdemand.toFixed(2));



    $('#Pipeline_Kharif_Water_demand').text(pipeline_Total_Water_Demand_for_Kharif_Crops.toFixed(2));

    var TotalAnnual_Pipeline_Reduction = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_summer_total_reduction_waterdemand);
    $('#TotalAnnual_Pipeline_Reduction').text(TotalAnnual_Pipeline_Reduction.toFixed(2));
}

var pipeline_rabi_sericulture_crop_area = 0;
var pipeline_rabi_sericulture_irri_area = 0;
var pipeline_rabi_sericulture_fundingsource = 0;
var pipeline_rabi_sericulture_waterdemand = 0;
var pipeline_rabi_sericulture_pipeline_waterdemand = 0;
var pipeline_rabi_sericulture_reduction_water_demand = 0;

var pipeline_rabi_tomoto_crop_area = 0;
var pipeline_rabi_tomoto_irri_area = 0;
var pipeline_rabi_tomoto_fundingsource = 0;
var pipeline_rabi_tomoto_waterdemand = 0;
var pipeline_rabi_tomoto_pipeline_waterdemand = 0;
var pipeline_rabi_tomoto_reduction_water_demand = 0;

//var pipeline_rabi_cabbage_crop_area = 0;
//var pipeline_rabi_cabbage_irri_area = 0;
//var pipeline_rabi_cabbage_fundingsource = 0;
//var pipeline_rabi_cabbage_waterdemand = 0;
//var pipeline_rabi_cabbage_pipeline_waterdemand = 0;
//var pipeline_rabi_cabbage_reduction_water_demand = 0;

//var pipeline_rabi_beans_crop_area = 0;
//var pipeline_rabi_beans_irri_area = 0;
//var pipeline_rabi_beans_fundingsource = 0;
//var pipeline_rabi_beans_waterdemand = 0;
//var pipeline_rabi_beans_pipeline_waterdemand = 0;
//var pipeline_rabi_beans_reduction_water_demand = 0;


var pipeline_rabi_floriculture_crop_area = 0;
var pipeline_rabi_floriculture_irri_area = 0;
var pipeline_rabi_floriculture_fundingsource = 0;
var pipeline_rabi_floriculture_waterdemand = 0;
var pipeline_rabi_floriculture_pipeline_waterdemand = 0;
var pipeline_rabi_floriculture_reduction_water_demand = 0;


//var pipeline_rabi_potato_crop_area = 0;
//var pipeline_rabi_potato_irri_area = 0;
//var pipeline_rabi_potato_fundingsource = 0;
//var pipeline_rabi_potato_waterdemand = 0;
//var pipeline_rabi_potato_pipeline_waterdemand = 0;
//var pipeline_rabi_potato_reduction_water_demand = 0;

//var pipeline_rabi_cucumber_crop_area = 0;
//var pipeline_rabi_cucumber_irri_area = 0;
//var pipeline_rabi_cucumber_fundingsource = 0;
//var pipeline_rabi_cucumber_waterdemand = 0;
//var pipeline_rabi_cucumber_pipeline_waterdemand = 0;
//var pipeline_rabi_cucumber_reduction_water_demand = 0;



var pipeline_rabi_ragi_crop_area = 0;
var pipeline_rabi_ragi_irri_area = 0;
var pipeline_rabi_ragi_fundingsource = 0;
var pipeline_rabi_ragi_waterdemand = 0;
var pipeline_rabi_ragi_pipeline_waterdemand = 0;
var pipeline_rabi_ragi_reduction_water_demand = 0;


var pipeline_rabi_sugarcane_crop_area = 0;
var pipeline_rabi_sugarcane_irri_area = 0;
var pipeline_rabi_sugarcane_fundingsource = 0;
var pipeline_rabi_sugarcane_waterdemand = 0;
var pipeline_rabi_sugarcane_pipeline_waterdemand = 0;
var pipeline_rabi_sugarcane_reduction_water_demand = 0;



var pipeline_rabi_maize_crop_area = 0;
var pipeline_rabi_maize_irri_area = 0;
var pipeline_rabi_maize_fundingsource = 0;
var pipeline_rabi_maize_waterdemand = 0;
var pipeline_rabi_maize_pipeline_waterdemand = 0;
var pipeline_rabi_maize_reduction_water_demand = 0;


var pipeline_rabi_fodder_crop_area = 0;
var pipeline_rabi_fodder_irri_area = 0;
var pipeline_rabi_fodder_fundingsource = 0;
var pipeline_rabi_fodder_waterdemand = 0;
var pipeline_rabi_fodder_pipeline_waterdemand = 0;
var pipeline_rabi_fodder_reduction_water_demand = 0;


var pipeline_rabi_paddy_crop_area = 0;
var pipeline_rabi_paddy_fundingsource = 0;
var pipeline_rabi_paddy_irri_area = 0;
var pipeline_rabi_paddy_waterdemand = 0;
var pipeline_rabi_paddy_pipeline_waterdemand = 0;
var pipeline_rabi_paddy_reduction_water_demand = 0;


var pipeline_rabi_alfalfa_crop_area = 0;
var pipeline_rabi_alfalfa_fundingsource = 0;
var pipeline_rabi_alfalfa_irri_area = 0;
var pipeline_rabi_alfalfa_waterdemand = 0;
var pipeline_rabi_alfalfa_pipeline_waterdemand = 0;
var pipeline_rabi_alfalfa_reduction_water_demand = 0;


//var pipeline_rabi_onion_crop_area = 0;
//var pipeline_rabi_onion_irri_area = 0;
//var pipeline_rabi_onion_fundingsource = 0;
//var pipeline_rabi_onion_waterdemand = 0;
//var pipeline_rabi_onion_pipeline_waterdemand = 0;
//var pipeline_rabi_onion_reduction_water_demand = 0;


var pipeline_rabi_horticulture_crop_area = 0;
var pipeline_rabi_horticulture_irri_area = 0;
var pipeline_rabi_horticulture_fundingsource = 0;
var pipeline_rabi_horticulture_waterdemand = 0;
var pipeline_rabi_horticulture_pipeline_waterdemand = 0;
var pipeline_rabi_horticulture_reduction_water_demand = 0;


var pipeline_rabi_sunflower_crop_area = 0;
var pipeline_rabi_sunflower_irri_area = 0;
var pipeline_rabi_sunflower_fundingsource = 0;
var pipeline_rabi_sunflower_waterdemand = 0;
var pipeline_rabi_sunflower_pipeline_waterdemand = 0;
var pipeline_rabi_sunflower_reduction_water_demand = 0;


var pipeline_rabi_total_waterdemand = 0;
var pipeline_rabi_total_rabi_waterdemand = 0;
var pipeline_rabi_total_reduction_waterdemand = 0;

var pipeline_Total_Water_Demand_for_Rabi_Crops = 0;

var pipeline_rabi_othercrop_waterdemand = 0;
var pipeline_rabi_othercrop_pipeline_waterdemand = 0;
var pipeline_rabi_othercrop_reduc_gw_demand = 0;



var pipeline_rabi_othercrop_area1 = 0;
var pipeline_rabi_othercrop_irri_area1 = 0;
var pipeline_rabi_othercrop_water_req1 = 0;
var pipeline_rabi_othercrop_waterdemand1 = 0;
var pipeline_rabi_othercrop_pipeline_waterdemand1 = 0;
var pipeline_rabi_othercrop_reduc_gw_demand1 = 0;


var pipeline_rabi_othercrop_area2 = 0;
var pipeline_rabi_othercrop_irri_area2 = 0;
var pipeline_rabi_othercrop_water_req2 = 0;
var pipeline_rabi_othercrop_waterdemand2 = 0;
var pipeline_rabi_othercrop_pipeline_waterdemand2 = 0;
var pipeline_rabi_othercrop_reduc_gw_demand2 = 0;


var pipeline_rabi_othercrop_area3 = 0;
var pipeline_rabi_othercrop_irri_area3 = 0;
var pipeline_rabi_othercrop_water_req3 = 0;
var pipeline_rabi_othercrop_waterdemand3 = 0;
var pipeline_rabi_othercrop_pipeline_waterdemand3 = 0;
var pipeline_rabi_othercrop_reduc_gw_demand3 = 0;


var pipeline_rabi_othercrop_area4 = 0;
var pipeline_rabi_othercrop_irri_area4 = 0;
var pipeline_rabi_othercrop_water_req4 = 0;
var pipeline_rabi_othercrop_waterdemand4 = 0;
var pipeline_rabi_othercrop_pipeline_waterdemand4 = 0;
var pipeline_rabi_othercrop_reduc_gw_demand4 = 0;


var pipeline_rabi_othercrop_area5 = 0;
var pipeline_rabi_othercrop_irri_area5 = 0;
var pipeline_rabi_othercrop_water_req5 = 0;
var pipeline_rabi_othercrop_waterdemand5 = 0;
var pipeline_rabi_othercrop_pipeline_waterdemand5 = 0;
var pipeline_rabi_othercrop_reduc_gw_demand5 = 0;


function Pipeline_Rabi_WaterRequire() {

    pipeline_rabi_sericulture_crop_area = 0;
    pipeline_rabi_sericulture_irri_area = 0;
    pipeline_rabi_sericulture_fundingsource = 0;
    pipeline_rabi_sericulture_waterdemand = 0;
    pipeline_rabi_sericulture_pipeline_waterdemand = 0;
    pipeline_rabi_sericulture_reduction_water_demand = 0;

    pipeline_rabi_tomoto_crop_area = 0;
    pipeline_rabi_tomoto_irri_area = 0;
    pipeline_rabi_tomoto_fundingsource = 0;
    pipeline_rabi_tomoto_waterdemand = 0;
    pipeline_rabi_tomoto_pipeline_waterdemand = 0;
    pipeline_rabi_tomoto_reduction_water_demand = 0;

    //pipeline_rabi_cabbage_crop_area = 0;
    //pipeline_rabi_cabbage_irri_area = 0;
    //pipeline_rabi_cabbage_fundingsource = 0;
    //pipeline_rabi_cabbage_waterdemand = 0;
    //pipeline_rabi_cabbage_pipeline_waterdemand = 0;
    //pipeline_rabi_cabbage_reduction_water_demand = 0;

    //pipeline_rabi_beans_crop_area = 0;
    //pipeline_rabi_beans_irri_area = 0;
    //pipeline_rabi_beans_fundingsource = 0;
    //pipeline_rabi_beans_waterdemand = 0;
    //pipeline_rabi_beans_pipeline_waterdemand = 0;
    //pipeline_rabi_beans_reduction_water_demand = 0;


    pipeline_rabi_floriculture_crop_area = 0;
    pipeline_rabi_floriculture_irri_area = 0;
    pipeline_rabi_floriculture_fundingsource = 0;
    pipeline_rabi_floriculture_waterdemand = 0;
    pipeline_rabi_floriculture_pipeline_waterdemand = 0;
    pipeline_rabi_floriculture_reduction_water_demand = 0;


    //pipeline_rabi_potato_crop_area = 0;
    //pipeline_rabi_potato_irri_area = 0;
    //pipeline_rabi_potato_fundingsource = 0;
    //pipeline_rabi_potato_waterdemand = 0;
    //pipeline_rabi_potato_pipeline_waterdemand = 0;
    //pipeline_rabi_potato_reduction_water_demand = 0;

    //pipeline_rabi_cucumber_crop_area = 0;
    //pipeline_rabi_cucumber_irri_area = 0;
    //pipeline_rabi_cucumber_fundingsource = 0;
    //pipeline_rabi_cucumber_waterdemand = 0;
    //pipeline_rabi_cucumber_pipeline_waterdemand = 0;
    //pipeline_rabi_cucumber_reduction_water_demand = 0;



    pipeline_rabi_ragi_crop_area = 0;
    pipeline_rabi_ragi_irri_area = 0;
    pipeline_rabi_ragi_fundingsource = 0;
    pipeline_rabi_ragi_waterdemand = 0;
    pipeline_rabi_ragi_pipeline_waterdemand = 0;
    pipeline_rabi_ragi_reduction_water_demand = 0;


    pipeline_rabi_sugarcane_crop_area = 0;
    pipeline_rabi_sugarcane_irri_area = 0;
    pipeline_rabi_sugarcane_fundingsource = 0;
    pipeline_rabi_sugarcane_waterdemand = 0;
    pipeline_rabi_sugarcane_pipeline_waterdemand = 0;
    pipeline_rabi_sugarcane_reduction_water_demand = 0;



    pipeline_rabi_maize_crop_area = 0;
    pipeline_rabi_maize_irri_area = 0;
    pipeline_rabi_maize_fundingsource = 0;
    pipeline_rabi_maize_waterdemand = 0;
    pipeline_rabi_maize_pipeline_waterdemand = 0;
    pipeline_rabi_maize_reduction_water_demand = 0;


    pipeline_rabi_fodder_crop_area = 0;
    pipeline_rabi_fodder_irri_area = 0;
    pipeline_rabi_fodder_fundingsource = 0;
    pipeline_rabi_fodder_waterdemand = 0;
    pipeline_rabi_fodder_pipeline_waterdemand = 0;
    pipeline_rabi_fodder_reduction_water_demand = 0;


    pipeline_rabi_paddy_crop_area = 0;
    pipeline_rabi_paddy_fundingsource = 0;
    pipeline_rabi_paddy_irri_area = 0;
    pipeline_rabi_paddy_waterdemand = 0;
    pipeline_rabi_paddy_pipeline_waterdemand = 0;
    pipeline_rabi_paddy_reduction_water_demand = 0;


    pipeline_rabi_alfalfa_crop_area = 0;
    pipeline_rabi_alfalfa_fundingsource = 0;
    pipeline_rabi_alfalfa_irri_area = 0;
    pipeline_rabi_alfalfa_waterdemand = 0;
    pipeline_rabi_alfalfa_pipeline_waterdemand = 0;
    pipeline_rabi_alfalfa_reduction_water_demand = 0;


    //pipeline_rabi_onion_crop_area = 0;
    //pipeline_rabi_onion_irri_area = 0;
    //pipeline_rabi_onion_fundingsource = 0;
    //pipeline_rabi_onion_waterdemand = 0;
    //pipeline_rabi_onion_pipeline_waterdemand = 0;
    //pipeline_rabi_onion_reduction_water_demand = 0;


    pipeline_rabi_horticulture_crop_area = 0;
    pipeline_rabi_horticulture_irri_area = 0;
    pipeline_rabi_horticulture_fundingsource = 0;
    pipeline_rabi_horticulture_waterdemand = 0;
    pipeline_rabi_horticulture_pipeline_waterdemand = 0;
    pipeline_rabi_horticulture_reduction_water_demand = 0;


    pipeline_rabi_sunflower_crop_area = 0;
    pipeline_rabi_sunflower_irri_area = 0;
    pipeline_rabi_sunflower_fundingsource = 0;
    pipeline_rabi_sunflower_waterdemand = 0;
    pipeline_rabi_sunflower_pipeline_waterdemand = 0;
    pipeline_rabi_sunflower_reduction_water_demand = 0;

    pipeline_rabi_total_waterdemand = 0;
    pipeline_rabi_total_rabi_waterdemand = 0;
    pipeline_rabi_total_reduction_waterdemand = 0;

    pipeline_Total_Water_Demand_for_Rabi_Crops = 0;


    pipeline_rabi_othercrop_area1 = 0;
    pipeline_rabi_othercrop_irri_area1 = 0;
    pipeline_rabi_othercrop_water_req1 = 0;
    pipeline_rabi_othercrop_waterdemand1 = 0;
    pipeline_rabi_othercrop_pipeline_waterdemand1 = 0;
    pipeline_rabi_othercrop_reduc_gw_demand1 = 0;


    pipeline_rabi_othercrop_area2 = 0;
    pipeline_rabi_othercrop_irri_area2 = 0;
    pipeline_rabi_othercrop_water_req2 = 0;
    pipeline_rabi_othercrop_waterdemand2 = 0;
    pipeline_rabi_othercrop_pipeline_waterdemand2 = 0;
    pipeline_rabi_othercrop_reduc_gw_demand2 = 0;


    pipeline_rabi_othercrop_area3 = 0;
    pipeline_rabi_othercrop_irri_area3 = 0;
    pipeline_rabi_othercrop_water_req3 = 0;
    pipeline_rabi_othercrop_waterdemand3 = 0;
    pipeline_rabi_othercrop_pipeline_waterdemand3 = 0;
    pipeline_rabi_othercrop_reduc_gw_demand3 = 0;


    pipeline_rabi_othercrop_area4 = 0;
    pipeline_rabi_othercrop_irri_area4 = 0;
    pipeline_rabi_othercrop_water_req4 = 0;
    pipeline_rabi_othercrop_waterdemand4 = 0;
    pipeline_rabi_othercrop_pipeline_waterdemand4 = 0;
    pipeline_rabi_othercrop_reduc_gw_demand4 = 0;


    pipeline_rabi_othercrop_area5 = 0;
    pipeline_rabi_othercrop_irri_area5 = 0;
    pipeline_rabi_othercrop_water_req5 = 0;
    pipeline_rabi_othercrop_waterdemand5 = 0;
    pipeline_rabi_othercrop_pipeline_waterdemand5 = 0;
    pipeline_rabi_othercrop_reduc_gw_demand5 = 0;


    //Other

    var pipeline_rabi_othercrop_area1 = $('#pipeline_rabi_othercrop_area1').val();
    if (typeof pipeline_rabi_othercrop_area1 == 'undefined') {
        pipeline_rabi_othercrop_area1 = 0;
    }
    var pipeline_rabi_othercrop_irri_area1 = $('#pipeline_rabi_othercrop_irri_area1').val();
    if (typeof pipeline_rabi_othercrop_irri_area1 == 'undefined') {
        pipeline_rabi_othercrop_irri_area1 = 0;
    }
    var pipeline_rabi_othercrop_water_req1 = $('#pipeline_rabi_othercrop_water_req1').val();
    if (typeof pipeline_rabi_othercrop_water_req1 == 'undefined') {
        pipeline_rabi_othercrop_water_req1 = 0;
    }
    if (pipeline_rabi_othercrop_area1 != "") {
        if (pipeline_rabi_othercrop_water_req1 != "") {
            pipeline_rabi_othercrop_waterdemand1 = parseFloat(pipeline_rabi_othercrop_area1) * parseFloat(pipeline_rabi_othercrop_water_req1) * 0.001;
        } else {
            pipeline_rabi_othercrop_waterdemand1 = parseFloat(pipeline_rabi_othercrop_area1) * 0 * 0.001;
            pipeline_rabi_othercrop_water_req1 = 0;
        }

        if (pipeline_rabi_othercrop_irri_area1 == "") {
            pipeline_rabi_othercrop_irri_area1 = 0;
        }
        pipeline_rabi_othercrop_pipeline_waterdemand1 = ((parseFloat(pipeline_rabi_othercrop_area1) - parseFloat(pipeline_rabi_othercrop_irri_area1)) * parseFloat(pipeline_rabi_othercrop_water_req1) * 0.001)
            + (parseFloat(pipeline_rabi_othercrop_irri_area1) * parseFloat(pipeline_rabi_othercrop_water_req1) * (1 - 20 / 100) * 0.001);

        pipeline_rabi_othercrop_reduc_gw_demand1 = pipeline_rabi_othercrop_waterdemand1 - pipeline_rabi_othercrop_pipeline_waterdemand1;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_othercrop_waterdemand1 + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_othercrop_pipeline_waterdemand1;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_othercrop_reduc_gw_demand1;

    }

    var pipeline_rabi_othercrop_area2 = $('#pipeline_rabi_othercrop_area2').val();
    if (typeof pipeline_rabi_othercrop_area2 == 'undefined') {
        pipeline_rabi_othercrop_area2 = 0;
    }
    var pipeline_rabi_othercrop_irri_area2 = $('#pipeline_rabi_othercrop_irri_area2').val();
    if (typeof pipeline_rabi_othercrop_irri_area2 == 'undefined') {
        pipeline_rabi_othercrop_irri_area2 = 0;
    }
    var pipeline_rabi_othercrop_water_req2 = $('#pipeline_rabi_othercrop_water_req2').val();
    if (typeof pipeline_rabi_othercrop_water_req2 == 'undefined') {
        pipeline_rabi_othercrop_water_req2 = 0;
    }
    if (pipeline_rabi_othercrop_area2 != "") {
        if (pipeline_rabi_othercrop_water_req2 != "") {
            pipeline_rabi_othercrop_waterdemand2 = parseFloat(pipeline_rabi_othercrop_area2) * parseFloat(pipeline_rabi_othercrop_water_req2) * 0.001;
        } else {
            pipeline_rabi_othercrop_waterdemand2 = parseFloat(pipeline_rabi_othercrop_area2) * 0 * 0.001;
            pipeline_rabi_othercrop_water_req2 = 0;
        }

        if (pipeline_rabi_othercrop_irri_area2 == "") {
            pipeline_rabi_othercrop_irri_area2 = 0;
        }
        pipeline_rabi_othercrop_pipeline_waterdemand2 = ((parseFloat(pipeline_rabi_othercrop_area2) - parseFloat(pipeline_rabi_othercrop_irri_area2)) * parseFloat(pipeline_rabi_othercrop_water_req2) * 0.001)
            + (parseFloat(pipeline_rabi_othercrop_irri_area2) * parseFloat(pipeline_rabi_othercrop_water_req2) * (1 - 20 / 100) * 0.001);

        pipeline_rabi_othercrop_reduc_gw_demand2 = pipeline_rabi_othercrop_waterdemand2 - pipeline_rabi_othercrop_pipeline_waterdemand2;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_othercrop_waterdemand2 + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_othercrop_pipeline_waterdemand2;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_othercrop_reduc_gw_demand2;

    }

    var pipeline_rabi_othercrop_area3 = $('#pipeline_rabi_othercrop_area3').val();
    if (typeof pipeline_rabi_othercrop_area3 == 'undefined') {
        pipeline_rabi_othercrop_area3 = 0;
    }
    var pipeline_rabi_othercrop_irri_area3 = $('#pipeline_rabi_othercrop_irri_area3').val();
    if (typeof pipeline_rabi_othercrop_irri_area3 == 'undefined') {
        pipeline_rabi_othercrop_irri_area3 = 0;
    }
    var pipeline_rabi_othercrop_water_req3 = $('#pipeline_rabi_othercrop_water_req3').val();
    if (typeof pipeline_rabi_othercrop_water_req3 == 'undefined') {
        pipeline_rabi_othercrop_water_req3 = 0;
    }
    if (pipeline_rabi_othercrop_area3 != "") {
        if (pipeline_rabi_othercrop_water_req3 != "") {
            pipeline_rabi_othercrop_waterdemand3 = parseFloat(pipeline_rabi_othercrop_area3) * parseFloat(pipeline_rabi_othercrop_water_req3) * 0.001;
        } else {
            pipeline_rabi_othercrop_waterdemand3 = parseFloat(pipeline_rabi_othercrop_area3) * 0 * 0.001;
            pipeline_rabi_othercrop_water_req3 = 0;
        }

        if (pipeline_rabi_othercrop_irri_area3 == "") {
            pipeline_rabi_othercrop_irri_area3 = 0;
        }
        pipeline_rabi_othercrop_pipeline_waterdemand3 = ((parseFloat(pipeline_rabi_othercrop_area3) - parseFloat(pipeline_rabi_othercrop_irri_area3)) * parseFloat(pipeline_rabi_othercrop_water_req3) * 0.001)
            + (parseFloat(pipeline_rabi_othercrop_irri_area3) * parseFloat(pipeline_rabi_othercrop_water_req3) * (1 - 20 / 100) * 0.001);

        pipeline_rabi_othercrop_reduc_gw_demand3 = pipeline_rabi_othercrop_waterdemand3 - pipeline_rabi_othercrop_pipeline_waterdemand3;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_othercrop_waterdemand3 + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_othercrop_pipeline_waterdemand3;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_othercrop_reduc_gw_demand3;

    }

    var pipeline_rabi_othercrop_area4 = $('#pipeline_rabi_othercrop_area4').val();
    if (typeof pipeline_rabi_othercrop_area4 == 'undefined') {
        pipeline_rabi_othercrop_area4 = 0;
    }
    var pipeline_rabi_othercrop_irri_area4 = $('#pipeline_rabi_othercrop_irri_area4').val();
    if (typeof pipeline_rabi_othercrop_irri_area4 == 'undefined') {
        pipeline_rabi_othercrop_irri_area4 = 0;
    }
    var pipeline_rabi_othercrop_water_req4 = $('#pipeline_rabi_othercrop_water_req4').val();
    if (typeof pipeline_rabi_othercrop_water_req4 == 'undefined') {
        pipeline_rabi_othercrop_water_req4 = 0;
    }
    if (pipeline_rabi_othercrop_area4 != "") {
        if (pipeline_rabi_othercrop_water_req4 != "") {
            pipeline_rabi_othercrop_waterdemand4 = parseFloat(pipeline_rabi_othercrop_area4) * parseFloat(pipeline_rabi_othercrop_water_req4) * 0.001;
        } else {
            pipeline_rabi_othercrop_waterdemand4 = parseFloat(pipeline_rabi_othercrop_area4) * 0 * 0.001;
            pipeline_rabi_othercrop_water_req4 = 0;
        }

        if (pipeline_rabi_othercrop_irri_area4 == "") {
            pipeline_rabi_othercrop_irri_area4 = 0;
        }
        pipeline_rabi_othercrop_pipeline_waterdemand4 = ((parseFloat(pipeline_rabi_othercrop_area4) - parseFloat(pipeline_rabi_othercrop_irri_area4)) * parseFloat(pipeline_rabi_othercrop_water_req4) * 0.001)
            + (parseFloat(pipeline_rabi_othercrop_irri_area4) * parseFloat(pipeline_rabi_othercrop_water_req4) * (1 - 20 / 100) * 0.001);

        pipeline_rabi_othercrop_reduc_gw_demand4 = pipeline_rabi_othercrop_waterdemand4 - pipeline_rabi_othercrop_pipeline_waterdemand4;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_othercrop_waterdemand4 + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_othercrop_pipeline_waterdemand4;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_othercrop_reduc_gw_demand4;

    }
    var pipeline_rabi_othercrop_area5 = $('#pipeline_rabi_othercrop_area5').val();
    if (typeof pipeline_rabi_othercrop_area5 == 'undefined') {
        pipeline_rabi_othercrop_area5 = 0;
    }
    var pipeline_rabi_othercrop_irri_area5 = $('#pipeline_rabi_othercrop_irri_area5').val();
    if (typeof pipeline_rabi_othercrop_irri_area5 == 'undefined') {
        pipeline_rabi_othercrop_irri_area5 = 0;
    }
    var pipeline_rabi_othercrop_water_req5 = $('#pipeline_rabi_othercrop_water_req5').val();
    if (typeof pipeline_rabi_othercrop_water_req5 == 'undefined') {
        pipeline_rabi_othercrop_water_req5 = 0;
    }
    if (pipeline_rabi_othercrop_area5 != "") {
        if (pipeline_rabi_othercrop_water_req5 != "") {
            pipeline_rabi_othercrop_waterdemand5 = parseFloat(pipeline_rabi_othercrop_area5) * parseFloat(pipeline_rabi_othercrop_water_req5) * 0.001;
        } else {
            pipeline_rabi_othercrop_waterdemand5 = parseFloat(pipeline_rabi_othercrop_area5) * 0 * 0.001;
            pipeline_rabi_othercrop_water_req5 = 0;
        }

        if (pipeline_rabi_othercrop_irri_area5 == "") {
            pipeline_rabi_othercrop_irri_area5 = 0;
        }
        pipeline_rabi_othercrop_pipeline_waterdemand5 = ((parseFloat(pipeline_rabi_othercrop_area5) - parseFloat(pipeline_rabi_othercrop_irri_area5)) * parseFloat(pipeline_rabi_othercrop_water_req5) * 0.001)
            + (parseFloat(pipeline_rabi_othercrop_irri_area5) * parseFloat(pipeline_rabi_othercrop_water_req5) * (1 - 20 / 100) * 0.001);

        pipeline_rabi_othercrop_reduc_gw_demand5 = pipeline_rabi_othercrop_waterdemand5 - pipeline_rabi_othercrop_pipeline_waterdemand5;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_othercrop_waterdemand5 + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_othercrop_pipeline_waterdemand5;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_othercrop_reduc_gw_demand5;

    }



    //Sericulture

    var pipeline_rabi_sericulture_crop_area = $('#pipeline_rabi_sericulture_crop_area').val();
    var pipeline_rabi_sericulture_irri_area = $('#pipeline_rabi_sericulture_irri_area').val();
    var pipeline_rabi_sericulture_water_req = $('#pipeline_rabi_sericulture_water_req').val();
    if (pipeline_rabi_sericulture_crop_area != "") {
        if (pipeline_rabi_sericulture_water_req != "") {
            pipeline_rabi_sericulture_waterdemand = parseFloat(pipeline_rabi_sericulture_crop_area) * parseFloat(pipeline_rabi_sericulture_water_req) * 0.001;
        } else {
            pipeline_rabi_sericulture_waterdemand = parseFloat(pipeline_rabi_sericulture_crop_area) * 0 * 0.001;
            pipeline_rabi_sericulture_water_req = 0;
        }
        //pipeline_rabi_sericulture_waterdemand = parseFloat(pipeline_rabi_sericulture_crop_area) * 1550 * 0.001;

        if (pipeline_rabi_sericulture_irri_area == "") {
            pipeline_rabi_sericulture_irri_area = 0;
        }
        pipeline_rabi_sericulture_pipeline_waterdemand = ((parseFloat(pipeline_rabi_sericulture_crop_area) - parseFloat(pipeline_rabi_sericulture_irri_area)) * parseFloat(pipeline_rabi_sericulture_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_sericulture_irri_area) * parseFloat(pipeline_rabi_sericulture_water_req) * (1 - 20 / 100) * 0.001);

        //  pipeline_rabi_sericulture_pipeline_waterdemand = parseFloat(pipeline_rabi_sericulture_irri_area) * parseFloat(pipeline_rabi_sericulture_water_req) * 0.03 * 0.001;
        pipeline_rabi_sericulture_reduction_water_demand = pipeline_rabi_sericulture_waterdemand - pipeline_rabi_sericulture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_sericulture_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_sericulture_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_sericulture_reduction_water_demand;

    }



    //Tomota

    var pipeline_rabi_tomoto_crop_area = $('#pipeline_rabi_tomoto_crop_area').val();
    var pipeline_rabi_tomoto_irri_area = $('#pipeline_rabi_tomoto_irri_area').val();
    var pipeline_rabi_tomoto_water_req = $('#pipeline_rabi_tomoto_water_req').val();
    if (pipeline_rabi_tomoto_crop_area != "") {
        if (pipeline_rabi_tomoto_water_req != "") {
            pipeline_rabi_tomoto_waterdemand = parseFloat(pipeline_rabi_tomoto_crop_area) * parseFloat(pipeline_rabi_tomoto_water_req) * 0.001;
        } else {
            pipeline_rabi_tomoto_waterdemand = parseFloat(pipeline_rabi_tomoto_crop_area) * 0 * 0.001;
            pipeline_rabi_tomoto_water_req = 0;
        }

        //pipeline_rabi_tomoto_waterdemand = parseFloat(pipeline_rabi_tomoto_crop_area) * 600 * 0.001;

        if (pipeline_rabi_tomoto_irri_area == "") {
            pipeline_rabi_tomoto_irri_area = 0;
        }
        pipeline_rabi_tomoto_pipeline_waterdemand = ((parseFloat(pipeline_rabi_tomoto_crop_area) - parseFloat(pipeline_rabi_tomoto_irri_area)) * parseFloat(pipeline_rabi_tomoto_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_tomoto_irri_area) * parseFloat(pipeline_rabi_tomoto_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_tomoto_pipeline_waterdemand = parseFloat(pipeline_rabi_tomoto_irri_area) * parseFloat(pipeline_rabi_tomoto_water_req) * 0.03 * 0.001;
        pipeline_rabi_tomoto_reduction_water_demand = pipeline_rabi_tomoto_waterdemand - pipeline_rabi_tomoto_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_tomoto_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_tomoto_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_tomoto_reduction_water_demand;


    }


    //Cabbage

    //var pipeline_rabi_cabbage_crop_area = $('#pipeline_rabi_cabbage_crop_area').val();
    //var pipeline_rabi_cabbage_irri_area = $('#pipeline_rabi_cabbage_irri_area').val();
    //var pipeline_rabi_cabbage_water_req = $('#pipeline_rabi_cabbage_water_req').val();
    //if (pipeline_rabi_cabbage_crop_area != "") {
    //    if (pipeline_rabi_cabbage_water_req != "") {
    //        pipeline_rabi_cabbage_waterdemand = parseFloat(pipeline_rabi_cabbage_crop_area) * parseFloat(pipeline_rabi_cabbage_water_req) * 0.001;
    //    } else {
    //        pipeline_rabi_cabbage_waterdemand = parseFloat(pipeline_rabi_cabbage_crop_area) * 0 * 0.001;
    //        pipeline_rabi_cabbage_water_req = 0;
    //    }
    //    //pipeline_rabi_cabbage_waterdemand = parseFloat(pipeline_rabi_cabbage_crop_area) * 425 * 0.001;

    //    if (pipeline_rabi_cabbage_irri_area == "") {
    //        pipeline_rabi_cabbage_irri_area = 0;
    //    }
    //    pipeline_rabi_cabbage_pipeline_waterdemand = ((parseFloat(pipeline_rabi_cabbage_crop_area) - parseFloat(pipeline_rabi_cabbage_irri_area)) * parseFloat(pipeline_rabi_cabbage_water_req) * 0.001)
    //        + (parseFloat(pipeline_rabi_cabbage_irri_area) * parseFloat(pipeline_rabi_cabbage_water_req) * (1 - 20 / 100) * 0.001);

    //    //pipeline_rabi_cabbage_pipeline_waterdemand = parseFloat(pipeline_rabi_cabbage_irri_area) * parseFloat(pipeline_rabi_cabbage_water_req) * 0.03 * 0.001;
    //    pipeline_rabi_cabbage_reduction_water_demand = parseFloat(pipeline_rabi_cabbage_waterdemand) - parseFloat(pipeline_rabi_cabbage_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Rabi_Crops = parseFloat(pipeline_rabi_cabbage_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops);
    //    pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand) + parseFloat(pipeline_rabi_cabbage_pipeline_waterdemand);
    //    pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_rabi_cabbage_reduction_water_demand);


    //}



    //Beans

    //var pipeline_rabi_beans_crop_area = $('#pipeline_rabi_beans_crop_area').val();
    //var pipeline_rabi_beans_irri_area = $('#pipeline_rabi_beans_irri_area').val();
    //var pipeline_rabi_beans_water_req = $('#pipeline_rabi_beans_water_req').val();
    //if (pipeline_rabi_beans_crop_area != "") {
    //    if (pipeline_rabi_beans_water_req != "") {
    //        pipeline_rabi_beans_waterdemand = parseFloat(pipeline_rabi_beans_crop_area) * parseFloat(pipeline_rabi_beans_water_req) * 0.001;
    //    } else {
    //        pipeline_rabi_beans_waterdemand = parseFloat(pipeline_rabi_beans_crop_area) * 0 * 0.001;
    //        pipeline_rabi_beans_water_req = 0;
    //    }
    //    //pipeline_rabi_beans_waterdemand = parseFloat(pipeline_rabi_beans_crop_area) * 400 * 0.001;

    //    if (pipeline_rabi_beans_irri_area == "") {
    //        pipeline_rabi_beans_irri_area = 0;
    //    }
    //    pipeline_rabi_beans_pipeline_waterdemand = ((parseFloat(pipeline_rabi_beans_crop_area) - parseFloat(pipeline_rabi_beans_irri_area)) * parseFloat(pipeline_rabi_beans_water_req) * 0.001)
    //        + (parseFloat(pipeline_rabi_beans_irri_area) * parseFloat(pipeline_rabi_beans_water_req) * (1 - 20 / 100) * 0.001);

    //    // pipeline_rabi_beans_pipeline_waterdemand = parseFloat(pipeline_rabi_beans_irri_area) * parseFloat(pipeline_rabi_beans_water_req) * 0.03 * 0.001;
    //    pipeline_rabi_beans_reduction_water_demand = parseFloat(pipeline_rabi_beans_waterdemand) - parseFloat(pipeline_rabi_beans_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Rabi_Crops = parseFloat(pipeline_rabi_beans_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops);
    //    pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand) + parseFloat(pipeline_rabi_beans_pipeline_waterdemand);
    //    pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_rabi_beans_reduction_water_demand);


    //}

    //Floriculture

    var pipeline_rabi_floriculture_crop_area = $('#pipeline_rabi_floriculture_crop_area').val();
    var pipeline_rabi_floriculture_irri_area = $('#pipeline_rabi_floriculture_irri_area').val();
    var pipeline_rabi_floriculture_water_req = $('#pipeline_rabi_floriculture_water_req').val();
    if (pipeline_rabi_floriculture_crop_area != "") {
        if (pipeline_rabi_floriculture_water_req != "") {
            pipeline_rabi_floriculture_waterdemand = parseFloat(pipeline_rabi_floriculture_crop_area) * parseFloat(pipeline_rabi_floriculture_water_req) * 0.001;
        } else {
            pipeline_rabi_floriculture_waterdemand = parseFloat(pipeline_rabi_floriculture_crop_area) * 0 * 0.001;
            pipeline_rabi_floriculture_water_req = 0;
        }
        //pipeline_rabi_floriculture_waterdemand = parseFloat(pipeline_rabi_floriculture_crop_area) * 1200 * 0.001;

        if (pipeline_rabi_floriculture_irri_area == "") {
            pipeline_rabi_floriculture_irri_area = 0;
        }
        pipeline_rabi_floriculture_pipeline_waterdemand = ((parseFloat(pipeline_rabi_floriculture_crop_area) - parseFloat(pipeline_rabi_floriculture_irri_area)) * parseFloat(pipeline_rabi_floriculture_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_floriculture_irri_area) * parseFloat(pipeline_rabi_floriculture_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_floriculture_pipeline_waterdemand = parseFloat(pipeline_rabi_floriculture_irri_area) * parseFloat(pipeline_rabi_floriculture_water_req) * 0.03 * 0.001;
        pipeline_rabi_floriculture_reduction_water_demand = pipeline_rabi_floriculture_waterdemand - pipeline_rabi_floriculture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_floriculture_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_floriculture_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_floriculture_reduction_water_demand;


    }

    //Potato

    //var pipeline_rabi_potato_crop_area = $('#pipeline_rabi_potato_crop_area').val();
    //var pipeline_rabi_potato_irri_area = $('#pipeline_rabi_potato_irri_area').val();
    //var pipeline_rabi_potato_water_req = $('#pipeline_rabi_potato_water_req').val();
    //if (pipeline_rabi_potato_crop_area != "") {
    //    if (pipeline_rabi_potato_water_req != "") {
    //        pipeline_rabi_potato_waterdemand = parseFloat(pipeline_rabi_potato_crop_area) * parseFloat(pipeline_rabi_potato_water_req) * 0.001;
    //    } else {
    //        pipeline_rabi_potato_waterdemand = parseFloat(pipeline_rabi_potato_crop_area) * 0 * 0.001;
    //        pipeline_rabi_potato_water_req = 0;
    //    }
    //    //pipeline_rabi_potato_waterdemand = parseFloat(pipeline_rabi_potato_crop_area) * 600 * 0.001;

    //    if (pipeline_rabi_potato_irri_area == "") {
    //        pipeline_rabi_potato_irri_area = 0;
    //    }
    //    pipeline_rabi_potato_pipeline_waterdemand = ((parseFloat(pipeline_rabi_potato_crop_area) - parseFloat(pipeline_rabi_potato_irri_area)) * parseFloat(pipeline_rabi_potato_water_req) * 0.001)
    //        + (parseFloat(pipeline_rabi_potato_irri_area) * parseFloat(pipeline_rabi_potato_water_req) * (1 - 20 / 100) * 0.001);

    //    // pipeline_rabi_potato_pipeline_waterdemand = parseFloat(pipeline_rabi_potato_irri_area) * parseFloat(pipeline_rabi_potato_water_req) * 0.03 * 0.001;
    //    pipeline_rabi_potato_reduction_water_demand = parseFloat(pipeline_rabi_potato_waterdemand) - parseFloat(pipeline_rabi_potato_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Rabi_Crops = parseFloat(pipeline_rabi_potato_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops);
    //    pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand) + parseFloat(pipeline_rabi_potato_pipeline_waterdemand);
    //    pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_rabi_potato_reduction_water_demand);


    //}


    //Cucumber

    //var pipeline_rabi_cucumber_crop_area = $('#pipeline_rabi_cucumber_crop_area').val();
    //var pipeline_rabi_cucumber_irri_area = $('#pipeline_rabi_cucumber_irri_area').val();
    //var pipeline_rabi_cucumber_water_req = $('#pipeline_rabi_cucumber_water_req').val();
    //if (pipeline_rabi_cucumber_crop_area != "") {
    //    if (pipeline_rabi_cucumber_water_req != "") {
    //        pipeline_rabi_cucumber_waterdemand = parseFloat(pipeline_rabi_cucumber_crop_area) * parseFloat(pipeline_rabi_cucumber_water_req) * 0.001;
    //    } else {
    //        pipeline_rabi_cucumber_waterdemand = parseFloat(pipeline_rabi_cucumber_crop_area) * 0 * 0.001;
    //        pipeline_rabi_cucumber_water_req = 0;
    //    }
    //    pipeline_rabi_cucumber_waterdemand = parseFloat(pipeline_rabi_cucumber_crop_area) * 400 * 0.001;

    //    if (pipeline_rabi_cucumber_irri_area == "") {
    //        pipeline_rabi_cucumber_irri_area = 0;
    //    }
    //    pipeline_rabi_cucumber_pipeline_waterdemand = ((parseFloat(pipeline_rabi_cucumber_crop_area) - parseFloat(pipeline_rabi_cucumber_irri_area)) * parseFloat(pipeline_rabi_cucumber_water_req) * 0.001)
    //        + (parseFloat(pipeline_rabi_cucumber_irri_area) * parseFloat(pipeline_rabi_cucumber_water_req) * (1 - 20 / 100) * 0.001);

    //    //pipeline_rabi_cucumber_pipeline_waterdemand = parseFloat(pipeline_rabi_cucumber_irri_area) * parseFloat(pipeline_rabi_cucumber_water_req) * 0.03 * 0.001;
    //    pipeline_rabi_cucumber_reduction_water_demand = parseFloat(pipeline_rabi_cucumber_waterdemand) - parseFloat(pipeline_rabi_cucumber_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Rabi_Crops = parseFloat(pipeline_rabi_cucumber_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops);
    //    pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand) + parseFloat(pipeline_rabi_cucumber_pipeline_waterdemand);
    //    pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_rabi_cucumber_reduction_water_demand);


    //}


    //Ragi

    var pipeline_rabi_ragi_crop_area = $('#pipeline_rabi_ragi_crop_area').val();
    var pipeline_rabi_ragi_irri_area = $('#pipeline_rabi_ragi_irri_area').val();
    var pipeline_rabi_ragi_water_req = $('#pipeline_rabi_ragi_water_req').val();
    if (pipeline_rabi_ragi_crop_area != "") {
        if (pipeline_rabi_ragi_water_req != "") {
            pipeline_rabi_ragi_waterdemand = parseFloat(pipeline_rabi_ragi_crop_area) * parseFloat(pipeline_rabi_ragi_water_req) * 0.001;
        } else {
            pipeline_rabi_ragi_waterdemand = parseFloat(pipeline_rabi_ragi_crop_area) * 0 * 0.001;
            pipeline_rabi_ragi_water_req = 0;
        }
        //pipeline_rabi_ragi_waterdemand = parseFloat(pipeline_rabi_ragi_crop_area) * 550 * 0.001;

        if (pipeline_rabi_ragi_irri_area == "") {
            pipeline_rabi_ragi_irri_area = 0;
        }
        pipeline_rabi_ragi_pipeline_waterdemand = ((parseFloat(pipeline_rabi_ragi_crop_area) - parseFloat(pipeline_rabi_ragi_irri_area)) * parseFloat(pipeline_rabi_ragi_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_ragi_irri_area) * parseFloat(pipeline_rabi_ragi_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_ragi_pipeline_waterdemand = parseFloat(pipeline_rabi_ragi_irri_area) * parseFloat(pipeline_rabi_ragi_water_req) * 0.03 * 0.001;
        pipeline_rabi_ragi_reduction_water_demand = pipeline_rabi_ragi_waterdemand - pipeline_rabi_ragi_reduction_water_demand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_ragi_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_ragi_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_ragi_reduction_water_demand;


    }

    //Sugarcane

    var pipeline_rabi_sugarcane_crop_area = $('#pipeline_rabi_sugarcane_crop_area').val();
    var pipeline_rabi_sugarcane_irri_area = $('#pipeline_rabi_sugarcane_irri_area').val();
    var pipeline_rabi_sugarcane_water_req = $('#pipeline_rabi_sugarcane_water_req').val();
    if (pipeline_rabi_sugarcane_crop_area != "") {
        if (pipeline_rabi_sugarcane_water_req != "") {
            pipeline_rabi_sugarcane_waterdemand = parseFloat(pipeline_rabi_sugarcane_crop_area) * parseFloat(pipeline_rabi_sugarcane_water_req) * 0.001;
        } else {
            pipeline_rabi_sugarcane_waterdemand = parseFloat(pipeline_rabi_sugarcane_crop_area) * 0 * 0.001;
            pipeline_rabi_sugarcane_water_req = 0;
        }
        // pipeline_rabi_sugarcane_waterdemand = parseFloat(pipeline_rabi_sugarcane_crop_area) * 2000 * 0.001;

        if (pipeline_rabi_sugarcane_irri_area == "") {
            pipeline_rabi_sugarcane_irri_area = 0;
        }
        pipeline_rabi_sugarcane_pipeline_waterdemand = ((parseFloat(pipeline_rabi_sugarcane_crop_area) - parseFloat(pipeline_rabi_sugarcane_irri_area)) * parseFloat(pipeline_rabi_sugarcane_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_sugarcane_irri_area) * parseFloat(pipeline_rabi_sugarcane_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_rabi_sugarcane_pipeline_waterdemand = parseFloat(pipeline_rabi_sugarcane_irri_area) * parseFloat(pipeline_rabi_sugarcane_water_req) * 0.03 * 0.001;
        pipeline_rabi_sugarcane_reduction_water_demand = pipeline_rabi_sugarcane_waterdemand - pipeline_rabi_sugarcane_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_sugarcane_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_sugarcane_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_sugarcane_reduction_water_demand;

    }


    //Maize

    var pipeline_rabi_maize_crop_area = $('#pipeline_rabi_maize_crop_area').val();
    var pipeline_rabi_maize_irri_area = $('#pipeline_rabi_maize_irri_area').val();
    var pipeline_rabi_maize_water_req = $('#pipeline_rabi_maize_water_req').val();
    if (pipeline_rabi_maize_crop_area != "") {
        if (pipeline_rabi_maize_water_req != "") {
            pipeline_rabi_maize_waterdemand = parseFloat(pipeline_rabi_maize_crop_area) * parseFloat(pipeline_rabi_maize_water_req) * 0.001;
        } else {
            pipeline_rabi_maize_waterdemand = parseFloat(pipeline_rabi_maize_crop_area) * 0 * 0.001;
            pipeline_rabi_maize_water_req = 0;
        }
        //pipeline_rabi_maize_waterdemand = parseFloat(pipeline_rabi_maize_crop_area) * 650 * 0.001;

        if (pipeline_rabi_maize_irri_area == "") {
            pipeline_rabi_maize_irri_area = 0;
        }
        pipeline_rabi_maize_pipeline_waterdemand = ((parseFloat(pipeline_rabi_maize_crop_area) - parseFloat(pipeline_rabi_maize_irri_area)) * parseFloat(pipeline_rabi_maize_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_maize_irri_area) * parseFloat(pipeline_rabi_maize_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_rabi_maize_pipeline_waterdemand = parseFloat(pipeline_rabi_maize_irri_area) * parseFloat(pipeline_rabi_maize_water_req) * 0.03 * 0.001;
        pipeline_rabi_maize_reduction_water_demand = pipeline_rabi_maize_waterdemand - pipeline_rabi_maize_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_maize_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_maize_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_maize_reduction_water_demand;

    }


    //Fodder

    var pipeline_rabi_fodder_crop_area = $('#pipeline_rabi_fodder_crop_area').val();
    var pipeline_rabi_fodder_irri_area = $('#pipeline_rabi_fodder_irri_area').val();
    var pipeline_rabi_fodder_water_req = $('#pipeline_rabi_fodder_water_req').val();
    if (pipeline_rabi_fodder_crop_area != "") {
        if (pipeline_rabi_fodder_water_req != "") {
            pipeline_rabi_fodder_waterdemand = parseFloat(pipeline_rabi_fodder_crop_area) * parseFloat(pipeline_rabi_fodder_water_req) * 0.001;
        } else {
            pipeline_rabi_fodder_waterdemand = parseFloat(pipeline_rabi_fodder_crop_area) * 0 * 0.001;
            pipeline_rabi_fodder_water_req = 0;
        }
        //pipeline_rabi_fodder_waterdemand = parseFloat(pipeline_rabi_fodder_crop_area) * 1400 * 0.001;

        if (pipeline_rabi_fodder_irri_area == "") {
            pipeline_rabi_fodder_irri_area = 0;
        }
        pipeline_rabi_fodder_pipeline_waterdemand = ((parseFloat(pipeline_rabi_fodder_crop_area) - parseFloat(pipeline_rabi_fodder_irri_area)) * parseFloat(pipeline_rabi_fodder_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_fodder_irri_area) * parseFloat(pipeline_rabi_fodder_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_fodder_pipeline_waterdemand = parseFloat(pipeline_rabi_fodder_irri_area) * parseFloat(pipeline_rabi_fodder_water_req) * 0.03 * 0.001;
        pipeline_rabi_fodder_reduction_water_demand = pipeline_rabi_fodder_waterdemand - pipeline_rabi_fodder_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_fodder_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_fodder_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_fodder_reduction_water_demand;

    }


    //Paddy

    var pipeline_rabi_paddy_crop_area = $('#pipeline_rabi_paddy_crop_area').val();
    var pipeline_rabi_paddy_irri_area = $('#pipeline_rabi_paddy_irri_area').val();
    var pipeline_rabi_paddy_water_req = $('#pipeline_rabi_paddy_water_req').val();
    if (pipeline_rabi_paddy_crop_area != "") {
        if (pipeline_rabi_paddy_water_req != "") {
            pipeline_rabi_paddy_waterdemand = parseFloat(pipeline_rabi_paddy_crop_area) * parseFloat(pipeline_rabi_paddy_water_req) * 0.001;
        } else {
            pipeline_rabi_paddy_waterdemand = parseFloat(pipeline_rabi_paddy_crop_area) * 0 * 0.001;
            pipeline_rabi_paddy_water_req = 0;
        }

        //pipeline_rabi_paddy_waterdemand = parseFloat(pipeline_rabi_paddy_crop_area) * 1175 * 0.001;

        if (pipeline_rabi_paddy_irri_area == "") {
            pipeline_rabi_paddy_irri_area = 0;
        }
        pipeline_rabi_paddy_pipeline_waterdemand = ((parseFloat(pipeline_rabi_paddy_crop_area) - parseFloat(pipeline_rabi_paddy_irri_area)) * parseFloat(pipeline_rabi_paddy_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_paddy_irri_area) * parseFloat(pipeline_rabi_paddy_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_paddy_pipeline_waterdemand = parseFloat(pipeline_rabi_paddy_irri_area) * parseFloat(pipeline_rabi_paddy_water_req) * 0.03 * 0.001;
        pipeline_rabi_paddy_reduction_water_demand = pipeline_rabi_paddy_waterdemand - pipeline_rabi_paddy_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_paddy_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_paddy_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_paddy_reduction_water_demand;

    }



    //Alfalfa

    var pipeline_rabi_alfalfa_crop_area = $('#pipeline_rabi_alfalfa_crop_area').val();
    var pipeline_rabi_alfalfa_irri_area = $('#pipeline_rabi_alfalfa_irri_area').val();
    var pipeline_rabi_alfalfa_water_req = $('#pipeline_rabi_alfalfa_water_req').val();
    if (pipeline_rabi_alfalfa_crop_area != "") {
        if (pipeline_rabi_alfalfa_water_req != "") {
            pipeline_rabi_alfalfa_waterdemand = parseFloat(pipeline_rabi_alfalfa_crop_area) * parseFloat(pipeline_rabi_alfalfa_water_req) * 0.001;
        } else {
            pipeline_rabi_alfalfa_waterdemand = parseFloat(pipeline_rabi_alfalfa_crop_area) * 0 * 0.001;
            pipeline_rabi_alfalfa_water_req = 0;
        }

        // pipeline_rabi_alfalfa_waterdemand = parseFloat(pipeline_rabi_alfalfa_crop_area) * 1200 * 0.001;

        if (pipeline_rabi_alfalfa_irri_area == "") {
            pipeline_rabi_alfalfa_irri_area = 0;
        }
        pipeline_rabi_alfalfa_pipeline_waterdemand = ((parseFloat(pipeline_rabi_alfalfa_crop_area) - parseFloat(pipeline_rabi_alfalfa_irri_area)) * parseFloat(pipeline_rabi_alfalfa_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_alfalfa_irri_area) * parseFloat(pipeline_rabi_alfalfa_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_alfalfa_pipeline_waterdemand = parseFloat(pipeline_rabi_alfalfa_irri_area) * parseFloat(pipeline_rabi_alfalfa_water_req) * 0.03 * 0.001;
        pipeline_rabi_alfalfa_reduction_water_demand = pipeline_rabi_alfalfa_waterdemand - pipeline_rabi_alfalfa_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_alfalfa_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_alfalfa_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_alfalfa_reduction_water_demand;

    }



    //Onion

    //var pipeline_rabi_onion_crop_area = $('#pipeline_rabi_onion_crop_area').val();
    //var pipeline_rabi_onion_irri_area = $('#pipeline_rabi_onion_irri_area').val();
    //var pipeline_rabi_onion_water_req = $('#pipeline_rabi_onion_water_req').val();
    //if (pipeline_rabi_onion_crop_area != "") {
    //    if (pipeline_rabi_onion_water_req != "") {
    //        pipeline_rabi_onion_waterdemand = parseFloat(pipeline_rabi_onion_crop_area) * parseFloat(pipeline_rabi_onion_water_req) * 0.001;
    //    } else {
    //        pipeline_rabi_onion_waterdemand = parseFloat(pipeline_rabi_onion_crop_area) * 0 * 0.001;
    //        pipeline_rabi_onion_water_req = 0;
    //    }
    //    // pipeline_rabi_onion_waterdemand = parseFloat(pipeline_rabi_onion_crop_area) * 450 * 0.001;

    //    if (pipeline_rabi_onion_irri_area == "") {
    //        pipeline_rabi_onion_irri_area = 0;
    //    }
    //    pipeline_rabi_onion_pipeline_waterdemand = ((parseFloat(pipeline_rabi_onion_crop_area) - parseFloat(pipeline_rabi_onion_irri_area)) * parseFloat(pipeline_rabi_onion_water_req) * 0.001)
    //        + (parseFloat(pipeline_rabi_onion_irri_area) * parseFloat(pipeline_rabi_onion_water_req) * (1 - 20 / 100) * 0.001);

    //    //pipeline_rabi_onion_pipeline_waterdemand = parseFloat(pipeline_rabi_onion_irri_area) * parseFloat(pipeline_rabi_onion_water_req) * 0.03 * 0.001;
    //    pipeline_rabi_onion_reduction_water_demand = parseFloat(pipeline_rabi_onion_waterdemand) - parseFloat(pipeline_rabi_onion_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Rabi_Crops = parseFloat(pipeline_rabi_onion_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops);
    //    pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand) + parseFloat(pipeline_rabi_onion_pipeline_waterdemand);
    //    pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_rabi_onion_reduction_water_demand);

    //}



    //Hortculture

    var pipeline_rabi_horticulture_crop_area = $('#pipeline_rabi_horticulture_crop_area').val();
    var pipeline_rabi_horticulture_irri_area = $('#pipeline_rabi_horticulture_irri_area').val();
    var pipeline_rabi_horticulture_water_req = $('#pipeline_rabi_horticulture_water_req').val();
    if (pipeline_rabi_horticulture_crop_area != "") {
        if (pipeline_rabi_horticulture_water_req != "") {
            pipeline_rabi_horticulture_waterdemand = parseFloat(pipeline_rabi_horticulture_crop_area) * parseFloat(pipeline_rabi_horticulture_water_req) * 0.001;
        } else {
            pipeline_rabi_horticulture_waterdemand = parseFloat(pipeline_rabi_horticulture_crop_area) * 0 * 0.001;
            pipeline_rabi_horticulture_water_req = 0;
        }
        //pipeline_rabi_horticulture_waterdemand = parseFloat(pipeline_rabi_horticulture_crop_area) * 470 * 0.001;

        if (pipeline_rabi_horticulture_irri_area == "") {
            pipeline_rabi_horticulture_irri_area = 0;
        }
        pipeline_rabi_horticulture_pipeline_waterdemand = ((parseFloat(pipeline_rabi_horticulture_crop_area) - parseFloat(pipeline_rabi_horticulture_irri_area)) * parseFloat(pipeline_rabi_horticulture_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_horticulture_irri_area) * parseFloat(pipeline_rabi_horticulture_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_horticulture_pipeline_waterdemand = parseFloat(pipeline_rabi_horticulture_irri_area) * parseFloat(pipeline_rabi_horticulture_water_req) * 0.03 * 0.001;
        pipeline_rabi_horticulture_reduction_water_demand = pipeline_rabi_horticulture_waterdemand - pipeline_rabi_horticulture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_horticulture_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_horticulture_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_horticulture_reduction_water_demand;

    }


    //Sunflower

    var pipeline_rabi_sunflower_crop_area = $('#pipeline_rabi_sunflower_crop_area').val();
    var pipeline_rabi_sunflower_irri_area = $('#pipeline_rabi_sunflower_irri_area').val();
    var pipeline_rabi_sunflower_water_req = $('#pipeline_rabi_sunflower_water_req').val();
    if (pipeline_rabi_sunflower_crop_area != "") {
        if (pipeline_rabi_sunflower_water_req != "") {
            pipeline_rabi_sunflower_waterdemand = parseFloat(pipeline_rabi_sunflower_crop_area) * parseFloat(pipeline_rabi_sunflower_water_req) * 0.001;
        } else {
            pipeline_rabi_sunflower_waterdemand = parseFloat(pipeline_rabi_sunflower_crop_area) * 0 * 0.001;
            pipeline_rabi_sunflower_water_req = 0;
        }
        // pipeline_rabi_sunflower_waterdemand = parseFloat(pipeline_rabi_sunflower_crop_area) * 800 * 0.001;

        if (pipeline_rabi_sunflower_irri_area == "") {
            pipeline_rabi_sunflower_irri_area = 0;
        }
        pipeline_rabi_sunflower_pipeline_waterdemand = ((parseFloat(pipeline_rabi_sunflower_crop_area) - parseFloat(pipeline_rabi_sunflower_irri_area)) * parseFloat(pipeline_rabi_sunflower_water_req) * 0.001)
            + (parseFloat(pipeline_rabi_sunflower_irri_area) * parseFloat(pipeline_rabi_sunflower_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_rabi_sunflower_pipeline_waterdemand = parseFloat(pipeline_rabi_sunflower_irri_area) * parseFloat(pipeline_rabi_sunflower_water_req) * 0.03 * 0.001;
        pipeline_rabi_sunflower_reduction_water_demand = pipeline_rabi_sunflower_waterdemand - pipeline_rabi_sunflower_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Rabi_Crops = pipeline_rabi_sunflower_waterdemand + pipeline_Total_Water_Demand_for_Rabi_Crops;
        pipeline_rabi_total_rabi_waterdemand = pipeline_rabi_total_rabi_waterdemand + pipeline_rabi_sunflower_pipeline_waterdemand;
        pipeline_rabi_total_reduction_waterdemand = pipeline_rabi_total_reduction_waterdemand + pipeline_rabi_sunflower_reduction_water_demand;

    }

    //pipeline_rabi_othercrop_waterdemand = 0;
    //pipeline_rabi_othercrop_pipeline_waterdemand = 0;
    //pipeline_rabi_othercrop_reduc_gw_demand = 0;

    //var pipeline_rabi_othercrop_area = $('#pipeline_rabi_othercrop_area').val();
    //var pipeline_rabi_othercrop_irri_area = $('#pipeline_rabi_othercrop_irri_area').val();
    //var pipeline_rabi_othercrop_water_req = $('#pipeline_rabi_othercrop_water_req').val();
    //if (pipeline_rabi_othercrop_area != "") {
    //    if (pipeline_rabi_othercrop_water_req != "") {
    //        pipeline_rabi_othercrop_waterdemand = parseFloat(pipeline_rabi_othercrop_area) * parseFloat(pipeline_rabi_othercrop_water_req) * 0.001;
    //    } else {
    //        pipeline_rabi_sunflower_waterdemand = parseFloat(pipeline_rabi_othercrop_area) * 0 * 0.001;
    //        pipeline_rabi_othercrop_water_req = 0;
    //    }
    //    // pipeline_rabi_sunflower_waterdemand = parseFloat(pipeline_rabi_othercrop_area) * 800 * 0.001;

    //    if (pipeline_rabi_othercrop_irri_area == "") {
    //        pipeline_rabi_othercrop_irri_area = 0;
    //    }
    //    pipeline_rabi_othercrop_pipeline_waterdemand = ((parseFloat(pipeline_rabi_othercrop_area) - parseFloat(pipeline_rabi_othercrop_irri_area)) * parseFloat(pipeline_rabi_othercrop_water_req) * 0.001)
    //        + (parseFloat(pipeline_rabi_othercrop_irri_area) * parseFloat(pipeline_rabi_othercrop_water_req) * (1 - 20 / 100) * 0.001);

    //    // pipeline_rabi_othercrop_pipeline_waterdemand = parseFloat(pipeline_rabi_othercrop_irri_area) * parseFloat(pipeline_rabi_othercrop_water_req) * 0.03 * 0.001;
    //    pipeline_rabi_othercrop_reduc_gw_demand = parseFloat(pipeline_rabi_othercrop_waterdemand) - parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Rabi_Crops = parseFloat(pipeline_rabi_othercrop_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops);
    //    pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand) + parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand);
    //    pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_rabi_othercrop_reduc_gw_demand);

    //}

    $('#Pipeline_Rabi_Water_demand').text(parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops).toFixed(2));
    $('#pipeline_rabi_total_waterdemand').text(parseFloat(pipeline_Total_Water_Demand_for_Rabi_Crops).toFixed(2));

    $('#pipeline_rabi_total_rabi_waterdemand').text(parseFloat(pipeline_rabi_total_rabi_waterdemand).toFixed(2));
    $('#pipeline_rabi_total_reduction_waterdemand').text(parseFloat(pipeline_rabi_total_reduction_waterdemand).toFixed(2));


    var TotalAnnual_Pipeline_Reduction = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_summer_total_reduction_waterdemand);
    $('#TotalAnnual_Pipeline_Reduction').text(TotalAnnual_Pipeline_Reduction.toFixed(2));
}



var pipeline_summer_sericulture_crop_area = 0;
var pipeline_summer_sericulture_irri_area = 0;
var pipeline_summer_sericulture_fundingsource = 0;
var pipeline_summer_sericulture_waterdemand = 0;
var pipeline_summer_sericulture_pipeline_waterdemand = 0;
var pipeline_summer_sericulture_reduction_water_demand = 0;


var pipeline_summer_tomoto_crop_area = 0;
var pipeline_summer_tomoto_irri_area = 0;
var pipeline_summer_tomoto_fundingsource = 0;
var pipeline_summer_tomoto_waterdemand = 0;
var pipeline_summer_tomoto_pipeline_waterdemand = 0;
var pipeline_summer_tomoto_reduction_water_demand = 0;

//var pipeline_summer_cabbage_crop_area = 0;
//var pipeline_summer_cabbage_irri_area = 0;
//var pipeline_summer_cabbage_fundingsource = 0;
//var pipeline_summer_cabbage_waterdemand = 0;
//var pipeline_summer_cabbage_pipeline_waterdemand = 0;
//var pipeline_summer_cabbage_reduction_water_demand = 0;


//var pipeline_summer_beans_crop_area = 0;
//var pipeline_summer_beans_irri_area = 0;
//var pipeline_summer_beans_fundingsource = 0;
//var pipeline_summer_beans_waterdemand = 0;
//var pipeline_summer_beans_pipeline_waterdemand = 0;
//var pipeline_summer_beans_reduction_water_demand = 0;



var pipeline_summer_floriculture_crop_area = 0;
var pipeline_summer_floriculture_irri_area = 0;
var pipeline_summer_floriculture_fundingsource = 0;
var pipeline_summer_floriculture_waterdemand = 0;
var pipeline_summer_floriculture_pipeline_waterdemand = 0;
var pipeline_summer_floriculture_reduction_water_demand = 0;

var pipeline_summer_maize_crop_area = 0;
var pipeline_summer_maize_irri_area = 0;
var pipeline_summer_maize_fundingsource = 0;
var pipeline_summer_maize_waterdemand = 0;
var pipeline_summer_maize_pipeline_waterdemand = 0;
var pipeline_summer_maize_reduction_water_demand = 0;



var pipeline_summer_fodder_crop_area = 0;
var pipeline_summer_fodder_irri_area = 0;
var pipeline_summer_fodder_fundingsource = 0;
var pipeline_summer_fodder_waterdemand = 0;
var pipeline_summer_fodder_pipeline_waterdemand = 0;
var pipeline_summer_fodder_reduction_water_demand = 0;


var pipeline_summer_sugarcane_crop_area = 0;
var pipeline_summer_sugarcane_irri_area = 0;
var pipeline_summer_sugarcane_fundingsource = 0;
var pipeline_summer_sugarcane_waterdemand = 0;
var pipeline_summer_sugarcane_pipeline_waterdemand = 0;
var pipeline_summer_sugarcane_reduction_water_demand = 0;

var pipeline_summer_total_waterdemand = 0;
var pipeline_summer_total_summer_waterdemand = 0;
var pipeline_summer_total_reduction_waterdemand = 0;
var pipeline_annual_reduction_waterdemand = 0;


var pipeline_summer_othercrop_waterdemand = 0;
var pipeline_summer_othercrop_pipeline_waterdemand = 0;
var pipeline_summer_othercrop_reduc_gw_demand = 0;


var pipeline_Total_Water_Demand_for_Summer_Crops = 0;


var pipeline_summer_horticulture_waterdemand = 0;
var pipeline_summer_horticulture_netwater_waterdemand = 0;
var pipeline_summer_horticulture_reduction_gw_demand = 0;


var pipeline_summer_othercrop_area1 = 0;
var pipeline_summer_othercrop_irri_area1 = 0;
var pipeline_summer_othercrop_water_req1 = 0;
var pipeline_summer_othercrop_waterdemand1 = 0;
var pipeline_summer_othercrop_pipeline_waterdemand1 = 0;
var pipeline_summer_othercrop_reduc_gw_demand1 = 0;


var pipeline_summer_othercrop_area2 = 0;
var pipeline_summer_othercrop_irri_area2 = 0;
var pipeline_summer_othercrop_water_req2 = 0;
var pipeline_summer_othercrop_waterdemand2 = 0;
var pipeline_summer_othercrop_pipeline_waterdemand2 = 0;
var pipeline_summer_othercrop_reduc_gw_demand2 = 0;


var pipeline_summer_othercrop_area3 = 0;
var pipeline_summer_othercrop_irri_area3 = 0;
var pipeline_summer_othercrop_water_req3 = 0;
var pipeline_summer_othercrop_waterdemand3 = 0;
var pipeline_summer_othercrop_pipeline_waterdemand3 = 0;
var pipeline_summer_othercrop_reduc_gw_demand3 = 0;


var pipeline_summer_othercrop_area4 = 0;
var pipeline_summer_othercrop_irri_area4 = 0;
var pipeline_summer_othercrop_water_req4 = 0;
var pipeline_summer_othercrop_waterdemand4 = 0;
var pipeline_summer_othercrop_pipeline_waterdemand4 = 0;
var pipeline_summer_othercrop_reduc_gw_demand4 = 0;


var pipeline_summer_othercrop_area5 = 0;
var pipeline_summer_othercrop_irri_area5 = 0;
var pipeline_summer_othercrop_water_req5 = 0;
var pipeline_summer_othercrop_waterdemand5 = 0;
var pipeline_summer_othercrop_pipeline_waterdemand5 = 0;
var pipeline_summer_othercrop_reduc_gw_demand5 = 0;
function Pipeline_Crop_WaterRequire() {

    pipeline_summer_sericulture_crop_area = 0;
    pipeline_summer_sericulture_irri_area = 0;
    pipeline_summer_sericulture_fundingsource = 0;
    pipeline_summer_sericulture_waterdemand = 0;
    pipeline_summer_sericulture_pipeline_waterdemand = 0;
    pipeline_summer_sericulture_reduction_water_demand = 0;


    pipeline_summer_tomoto_crop_area = 0;
    pipeline_summer_tomoto_irri_area = 0;
    pipeline_summer_tomoto_fundingsource = 0;
    pipeline_summer_tomoto_waterdemand = 0;
    pipeline_summer_tomoto_pipeline_waterdemand = 0;
    pipeline_summer_tomoto_reduction_water_demand = 0;

    //pipeline_summer_cabbage_crop_area = 0;
    //pipeline_summer_cabbage_irri_area = 0;
    //pipeline_summer_cabbage_fundingsource = 0;
    //pipeline_summer_cabbage_waterdemand = 0;
    //pipeline_summer_cabbage_pipeline_waterdemand = 0;
    //pipeline_summer_cabbage_reduction_water_demand = 0;


    //pipeline_summer_beans_crop_area = 0;
    //pipeline_summer_beans_irri_area = 0;
    //pipeline_summer_beans_fundingsource = 0;
    //pipeline_summer_beans_waterdemand = 0;
    //pipeline_summer_beans_pipeline_waterdemand = 0;
    //pipeline_summer_beans_reduction_water_demand = 0;



    pipeline_summer_floriculture_crop_area = 0;
    pipeline_summer_floriculture_irri_area = 0;
    pipeline_summer_floriculture_fundingsource = 0;
    pipeline_summer_floriculture_waterdemand = 0;
    pipeline_summer_floriculture_pipeline_waterdemand = 0;
    pipeline_summer_floriculture_reduction_water_demand = 0;

    pipeline_summer_maize_crop_area = 0;
    pipeline_summer_maize_irri_area = 0;
    pipeline_summer_maize_fundingsource = 0;
    pipeline_summer_maize_waterdemand = 0;
    pipeline_summer_maize_pipeline_waterdemand = 0;
    pipeline_summer_maize_reduction_water_demand = 0;



    pipeline_summer_fodder_crop_area = 0;
    pipeline_summer_fodder_irri_area = 0;
    pipeline_summer_fodder_fundingsource = 0;
    pipeline_summer_fodder_waterdemand = 0;
    pipeline_summer_fodder_pipeline_waterdemand = 0;
    pipeline_summer_fodder_reduction_water_demand = 0;


    pipeline_summer_sugarcane_crop_area = 0;
    pipeline_summer_sugarcane_irri_area = 0;
    pipeline_summer_sugarcane_fundingsource = 0;
    pipeline_summer_sugarcane_waterdemand = 0;
    pipeline_summer_sugarcane_pipeline_waterdemand = 0;
    pipeline_summer_sugarcane_reduction_water_demand = 0;

    pipeline_summer_total_waterdemand = 0;
    pipeline_summer_total_summer_waterdemand = 0;
    pipeline_summer_total_reduction_waterdemand = 0;
    pipeline_annual_reduction_waterdemand = 0;

    pipeline_summer_horticulture_waterdemand = 0;
    pipeline_summer_horticulture_netwater_waterdemand = 0;
    pipeline_summer_horticulture_reduction_gw_demand = 0;



    pipeline_Total_Water_Demand_for_Summer_Crops = 0;
    pipeline_summer_total_summer_waterdemand = 0;
    pipeline_summer_total_reduction_waterdemand = 0;



    pipeline_summer_othercrop_area1 = 0;
    pipeline_summer_othercrop_irri_area1 = 0;
    pipeline_summer_othercrop_water_req1 = 0;
    pipeline_summer_othercrop_waterdemand1 = 0;
    pipeline_summer_othercrop_pipeline_waterdemand1 = 0;
    pipeline_summer_othercrop_reduc_gw_demand1 = 0;


    pipeline_summer_othercrop_area2 = 0;
    pipeline_summer_othercrop_irri_area2 = 0;
    pipeline_summer_othercrop_water_req2 = 0;
    pipeline_summer_othercrop_waterdemand2 = 0;
    pipeline_summer_othercrop_pipeline_waterdemand2 = 0;
    pipeline_summer_othercrop_reduc_gw_demand2 = 0;


    pipeline_summer_othercrop_area3 = 0;
    pipeline_summer_othercrop_irri_area3 = 0;
    pipeline_summer_othercrop_water_req3 = 0;
    pipeline_summer_othercrop_waterdemand3 = 0;
    pipeline_summer_othercrop_pipeline_waterdemand3 = 0;
    pipeline_summer_othercrop_reduc_gw_demand3 = 0;


    pipeline_summer_othercrop_area4 = 0;
    pipeline_summer_othercrop_irri_area4 = 0;
    pipeline_summer_othercrop_water_req4 = 0;
    pipeline_summer_othercrop_waterdemand4 = 0;
    pipeline_summer_othercrop_pipeline_waterdemand4 = 0;
    pipeline_summer_othercrop_reduc_gw_demand4 = 0;


    pipeline_summer_othercrop_area5 = 0;
    pipeline_summer_othercrop_irri_area5 = 0;
    pipeline_summer_othercrop_water_req5 = 0;
    pipeline_summer_othercrop_waterdemand5 = 0;
    pipeline_summer_othercrop_pipeline_waterdemand5 = 0;
    pipeline_summer_othercrop_reduc_gw_demand5 = 0;


    //Other

    var pipeline_summer_othercrop_area1 = $('#pipeline_summer_othercrop_area1').val();
    if (typeof pipeline_summer_othercrop_area1 == 'undefined') {
        pipeline_summer_othercrop_area1 = 0;
    }
    var pipeline_summer_othercrop_irri_area1 = $('#pipeline_summer_othercrop_irri_area1').val();
    if (typeof pipeline_summer_othercrop_irri_area1 == 'undefined') {
        pipeline_summer_othercrop_irri_area1 = 0;
    }
    var pipeline_summer_othercrop_water_req1 = $('#pipeline_summer_othercrop_water_req1').val();
    if (typeof pipeline_summer_othercrop_water_req1 == 'undefined') {
        pipeline_summer_othercrop_water_req1 = 0;
    }

    

    if (pipeline_summer_othercrop_area1 != "") {
        if (pipeline_summer_othercrop_water_req1 != "") {
            pipeline_summer_othercrop_waterdemand1 = parseFloat(pipeline_summer_othercrop_area1) * parseFloat(pipeline_summer_othercrop_water_req1) * 0.001;
        } else {
            pipeline_summer_othercrop_waterdemand1 = parseFloat(pipeline_summer_othercrop_area1) * 0 * 0.001;
            pipeline_summer_othercrop_water_req1 = 0;
        }

        if (pipeline_summer_othercrop_irri_area1 == "") {
            pipeline_summer_othercrop_irri_area1 = 0;
        }
        pipeline_summer_othercrop_pipeline_waterdemand1 = ((parseFloat(pipeline_summer_othercrop_area1) - parseFloat(pipeline_summer_othercrop_irri_area1)) * parseFloat(pipeline_summer_othercrop_water_req1) * 0.001)
            + (parseFloat(pipeline_summer_othercrop_irri_area1) * parseFloat(pipeline_summer_othercrop_water_req1) * (1 - 20 / 100) * 0.001);

        pipeline_summer_othercrop_reduc_gw_demand1 = pipeline_summer_othercrop_waterdemand1 - pipeline_summer_othercrop_pipeline_waterdemand1;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_othercrop_waterdemand1 + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_othercrop_pipeline_waterdemand1;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_othercrop_reduc_gw_demand1;

    }

    var pipeline_summer_othercrop_area2 = $('#pipeline_summer_othercrop_area2').val();
    if (typeof pipeline_summer_othercrop_area2 == 'undefined') {
        pipeline_summer_othercrop_area2 = 0;
    }
    var pipeline_summer_othercrop_irri_area2 = $('#pipeline_summer_othercrop_irri_area2').val();
    if (typeof pipeline_summer_othercrop_irri_area2 == 'undefined') {
        pipeline_summer_othercrop_irri_area2 = 0;
    }
    var pipeline_summer_othercrop_water_req2 = $('#pipeline_summer_othercrop_water_req2').val();
    if (typeof pipeline_summer_othercrop_water_req2 == 'undefined') {
        pipeline_summer_othercrop_water_req2 = 0;
    }

    if (pipeline_summer_othercrop_area2 != "") {
        if (pipeline_summer_othercrop_water_req2 != "") {
            pipeline_summer_othercrop_waterdemand2 = parseFloat(pipeline_summer_othercrop_area2) * parseFloat(pipeline_summer_othercrop_water_req2) * 0.001;
        } else {
            pipeline_summer_othercrop_waterdemand2 = parseFloat(pipeline_summer_othercrop_area2) * 0 * 0.001;
            pipeline_summer_othercrop_water_req2 = 0;
        }

        if (pipeline_summer_othercrop_irri_area2 == "") {
            pipeline_summer_othercrop_irri_area2 = 0;
        }
        pipeline_summer_othercrop_pipeline_waterdemand2 = ((parseFloat(pipeline_summer_othercrop_area2) - parseFloat(pipeline_summer_othercrop_irri_area2)) * parseFloat(pipeline_summer_othercrop_water_req2) * 0.001)
            + (parseFloat(pipeline_summer_othercrop_irri_area2) * parseFloat(pipeline_summer_othercrop_water_req2) * (1 - 20 / 100) * 0.001);

        pipeline_summer_othercrop_reduc_gw_demand2 = pipeline_summer_othercrop_waterdemand2 - pipeline_summer_othercrop_pipeline_waterdemand2;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_othercrop_waterdemand2 + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_othercrop_pipeline_waterdemand2;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_othercrop_reduc_gw_demand2;

    }
    var pipeline_summer_othercrop_area3 = $('#pipeline_summer_othercrop_area3').val();
    if (typeof pipeline_summer_othercrop_area3 == 'undefined') {
        pipeline_summer_othercrop_area3 = 0;
    }
    var pipeline_summer_othercrop_irri_area3 = $('#pipeline_summer_othercrop_irri_area3').val();
    if (typeof pipeline_summer_othercrop_irri_area3 == 'undefined') {
        pipeline_summer_othercrop_irri_area3 = 0;
    }
    var pipeline_summer_othercrop_water_req3 = $('#pipeline_summer_othercrop_water_req3').val();
    if (typeof pipeline_summer_othercrop_water_req3 == 'undefined') {
        pipeline_summer_othercrop_water_req3 = 0;
    }
    if (pipeline_summer_othercrop_area3 != "") {
        if (pipeline_summer_othercrop_water_req3 != "") {
            pipeline_summer_othercrop_waterdemand3 = parseFloat(pipeline_summer_othercrop_area3) * parseFloat(pipeline_summer_othercrop_water_req3) * 0.001;
        } else {
            pipeline_summer_othercrop_waterdemand3 = parseFloat(pipeline_summer_othercrop_area3) * 0 * 0.001;
            pipeline_summer_othercrop_water_req3 = 0;
        }

        if (pipeline_summer_othercrop_irri_area3 == "") {
            pipeline_summer_othercrop_irri_area3 = 0;
        }
        pipeline_summer_othercrop_pipeline_waterdemand3 = ((parseFloat(pipeline_summer_othercrop_area3) - parseFloat(pipeline_summer_othercrop_irri_area3)) * parseFloat(pipeline_summer_othercrop_water_req3) * 0.001)
            + (parseFloat(pipeline_summer_othercrop_irri_area3) * parseFloat(pipeline_summer_othercrop_water_req3) * (1 - 20 / 100) * 0.001);

        pipeline_summer_othercrop_reduc_gw_demand3 = pipeline_summer_othercrop_waterdemand3 - pipeline_summer_othercrop_pipeline_waterdemand3;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_othercrop_waterdemand3 + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_othercrop_pipeline_waterdemand3;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_othercrop_reduc_gw_demand3;

    }

    var pipeline_summer_othercrop_area4 = $('#pipeline_summer_othercrop_area4').val();
    if (typeof pipeline_summer_othercrop_area4 == 'undefined') {
        pipeline_summer_othercrop_area4 = 0;
    }
    var pipeline_summer_othercrop_irri_area4 = $('#pipeline_summer_othercrop_irri_area4').val();
    if (typeof pipeline_summer_othercrop_irri_area4 == 'undefined') {
        pipeline_summer_othercrop_irri_area4 = 0;
    }
    var pipeline_summer_othercrop_water_req4 = $('#pipeline_summer_othercrop_water_req4').val();
    if (typeof pipeline_summer_othercrop_water_req4 == 'undefined') {
        pipeline_summer_othercrop_water_req4 = 0;
    }
    if (pipeline_summer_othercrop_area4 != "") {
        if (pipeline_summer_othercrop_water_req4 != "") {
            pipeline_summer_othercrop_waterdemand4 = parseFloat(pipeline_summer_othercrop_area4) * parseFloat(pipeline_summer_othercrop_water_req4) * 0.001;
        } else {
            pipeline_summer_othercrop_waterdemand4 = parseFloat(pipeline_summer_othercrop_area4) * 0 * 0.001;
            pipeline_summer_othercrop_water_req4 = 0;
        }

        if (pipeline_summer_othercrop_irri_area4 == "") {
            pipeline_summer_othercrop_irri_area4 = 0;
        }
        pipeline_summer_othercrop_pipeline_waterdemand4 = ((parseFloat(pipeline_summer_othercrop_area4) - parseFloat(pipeline_summer_othercrop_irri_area4)) * parseFloat(pipeline_summer_othercrop_water_req4) * 0.001)
            + (parseFloat(pipeline_summer_othercrop_irri_area4) * parseFloat(pipeline_summer_othercrop_water_req4) * (1 - 20 / 100) * 0.001);

        pipeline_summer_othercrop_reduc_gw_demand4 = pipeline_summer_othercrop_waterdemand4 - pipeline_summer_othercrop_pipeline_waterdemand4;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_othercrop_waterdemand4 + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_othercrop_pipeline_waterdemand4;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_othercrop_reduc_gw_demand4;

    }

    var pipeline_summer_othercrop_area5 = $('#pipeline_summer_othercrop_area5').val();
    if (typeof pipeline_summer_othercrop_area5 == 'undefined') {
        pipeline_summer_othercrop_area5 = 0;
    }
    var pipeline_summer_othercrop_irri_area5 = $('#pipeline_summer_othercrop_irri_area5').val();
    if (typeof pipeline_summer_othercrop_irri_area5 == 'undefined') {
        pipeline_summer_othercrop_irri_area5 = 0;
    }
    var pipeline_summer_othercrop_water_req5 = $('#pipeline_summer_othercrop_water_req5').val();
    if (typeof pipeline_summer_othercrop_water_req5 == 'undefined') {
        pipeline_summer_othercrop_water_req5 = 0;
    }
    if (pipeline_summer_othercrop_area5 != "") {
        if (pipeline_summer_othercrop_water_req5 != "") {
            pipeline_summer_othercrop_waterdemand5 = parseFloat(pipeline_summer_othercrop_area5) * parseFloat(pipeline_summer_othercrop_water_req5) * 0.001;
        } else {
            pipeline_summer_othercrop_waterdemand5 = parseFloat(pipeline_summer_othercrop_area5) * 0 * 0.001;
            pipeline_summer_othercrop_water_req5 = 0;
        }

        if (pipeline_summer_othercrop_irri_area5 == "") {
            pipeline_summer_othercrop_irri_area5 = 0;
        }
        pipeline_summer_othercrop_pipeline_waterdemand5 = ((parseFloat(pipeline_summer_othercrop_area5) - parseFloat(pipeline_summer_othercrop_irri_area5)) * parseFloat(pipeline_summer_othercrop_water_req5) * 0.001)
            + (parseFloat(pipeline_summer_othercrop_irri_area5) * parseFloat(pipeline_summer_othercrop_water_req5) * (1 - 20 / 100) * 0.001);

        pipeline_summer_othercrop_reduc_gw_demand5 = pipeline_summer_othercrop_waterdemand5 - pipeline_summer_othercrop_pipeline_waterdemand5;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_othercrop_waterdemand5 + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_othercrop_pipeline_waterdemand5;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_othercrop_reduc_gw_demand5;

    }




    //Horticulture

    var pipeline_summer_horticulture_crop_area = $('#pipeline_summer_horticulture_crop_area').val();
    var pipeline_summer_horticulture_irri_area = $('#pipeline_summer_horticulture_irri_area').val();
    var pipeline_summer_horticulture_water_req = $('#pipeline_summer_horticulture_water_req').val();
    if (pipeline_summer_horticulture_crop_area != "") {
        if (pipeline_summer_horticulture_water_req != "") {
            pipeline_summer_horticulture_waterdemand = parseFloat(pipeline_summer_horticulture_crop_area) * parseFloat(pipeline_summer_horticulture_water_req) * 0.001;
        } else {
            pipeline_summer_horticulture_waterdemand = parseFloat(pipeline_summer_horticulture_crop_area) * 0 * 0.001;
            pipeline_summer_horticulture_water_req = 0;
        }
        // pipeline_summer_horticulture_waterdemand = parseFloat(pipeline_summer_horticulture_crop_area) * 1550 * 0.001;

        if (pipeline_summer_horticulture_irri_area == "") {
            pipeline_summer_horticulture_irri_area = 0;
        }
        pipeline_summer_horticulture_netwater_waterdemand = ((parseFloat(pipeline_summer_horticulture_crop_area) - parseFloat(pipeline_summer_horticulture_irri_area)) * parseFloat(pipeline_summer_horticulture_water_req) * 0.001)
            + (parseFloat(pipeline_summer_horticulture_irri_area) * parseFloat(pipeline_summer_horticulture_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_summer_horticulture_netwater_waterdemand = parseFloat(pipeline_summer_horticulture_irri_area) * parseFloat(pipeline_summer_horticulture_water_req) * 0.03 * 0.001;
        pipeline_summer_horticulture_reduction_gw_demand = pipeline_summer_horticulture_waterdemand - pipeline_summer_horticulture_netwater_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_horticulture_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_horticulture_netwater_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_horticulture_reduction_gw_demand;

    }




    //sericulture
    var pipeline_summer_sericulture_crop_area = $('#pipeline_summer_sericulture_crop_area').val();
    var pipeline_summer_sericulture_irri_area = $('#pipeline_summer_sericulture_irri_area').val();
    var pipeline_summer_sericulture_water_req = $('#pipeline_summer_sericulture_water_req').val();
    if (pipeline_summer_sericulture_crop_area != "") {
        if (pipeline_summer_sericulture_water_req != "") {
            pipeline_summer_sericulture_waterdemand = parseFloat(pipeline_summer_sericulture_crop_area) * parseFloat(pipeline_summer_sericulture_water_req) * 0.001;
        } else {
            pipeline_summer_sericulture_waterdemand = parseFloat(pipeline_summer_sericulture_crop_area) * 0 * 0.001;
            pipeline_summer_sericulture_water_req = 0;
        }
        // pipeline_summer_sericulture_waterdemand = parseFloat(pipeline_summer_sericulture_crop_area) * 1550 * 0.001;

        if (pipeline_summer_sericulture_irri_area == "") {
            pipeline_summer_sericulture_irri_area = 0;
        }
        pipeline_summer_sericulture_pipeline_waterdemand = ((parseFloat(pipeline_summer_sericulture_crop_area) - parseFloat(pipeline_summer_sericulture_irri_area)) * parseFloat(pipeline_summer_sericulture_water_req) * 0.001)
            + (parseFloat(pipeline_summer_sericulture_irri_area) * parseFloat(pipeline_summer_sericulture_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_summer_sericulture_pipeline_waterdemand = parseFloat(pipeline_summer_sericulture_irri_area) * parseFloat(pipeline_summer_sericulture_water_req) * 0.03 * 0.001;
        pipeline_summer_sericulture_reduction_water_demand = pipeline_summer_sericulture_waterdemand - pipeline_summer_sericulture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_sericulture_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_sericulture_pipeline_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_sericulture_reduction_water_demand;

    }


    //Tomota

    var pipeline_summer_tomoto_crop_area = $('#pipeline_summer_tomoto_crop_area').val();
    var pipeline_summer_tomoto_irri_area = $('#pipeline_summer_tomoto_irri_area').val();
    var pipeline_summer_tomoto_water_req = $('#pipeline_summer_tomoto_water_req').val();
    if (pipeline_summer_tomoto_crop_area != "") {
        if (pipeline_summer_tomoto_water_req != "") {
            pipeline_summer_tomoto_waterdemand = parseFloat(pipeline_summer_tomoto_crop_area) * parseFloat(pipeline_summer_tomoto_water_req) * 0.001;
        } else {
            pipeline_summer_tomoto_waterdemand = parseFloat(pipeline_summer_tomoto_crop_area) * 0 * 0.001;
            pipeline_summer_tomoto_water_req = 0;
        }
        //pipeline_summer_tomoto_waterdemand = parseFloat(pipeline_summer_tomoto_crop_area) * 600 * 0.001;

        if (pipeline_summer_tomoto_irri_area == "") {
            pipeline_summer_tomoto_irri_area = 0;
        }
        pipeline_summer_tomoto_pipeline_waterdemand = ((parseFloat(pipeline_summer_tomoto_crop_area) - parseFloat(pipeline_summer_tomoto_irri_area)) * parseFloat(pipeline_summer_tomoto_water_req) * 0.001)
            + (parseFloat(pipeline_summer_tomoto_irri_area) * parseFloat(pipeline_summer_tomoto_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_summer_tomoto_pipeline_waterdemand = parseFloat(pipeline_summer_tomoto_irri_area) * parseFloat(pipeline_summer_tomoto_water_req) * 0.03 * 0.001;
        pipeline_summer_tomoto_reduction_water_demand = pipeline_summer_tomoto_waterdemand - pipeline_summer_tomoto_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_tomoto_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_tomoto_pipeline_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_tomoto_reduction_water_demand;

    }


    //Cabbage

    //var pipeline_summer_cabbage_crop_area = $('#pipeline_summer_cabbage_crop_area').val();
    //var pipeline_summer_cabbage_irri_area = $('#pipeline_summer_tomoto_irri_area').val();
    //var pipeline_summer_cabbage_water_req = $('#pipeline_summer_cabbage_water_req').val();
    //if (pipeline_summer_cabbage_crop_area != "") {
    //    if (pipeline_summer_cabbage_water_req != "") {
    //        pipeline_summer_cabbage_waterdemand = parseFloat(pipeline_summer_cabbage_crop_area) * parseFloat(pipeline_summer_cabbage_water_req) * 0.001;
    //    } else {
    //        pipeline_summer_cabbage_waterdemand = parseFloat(pipeline_summer_cabbage_crop_area) * 0 * 0.001;
    //        pipeline_summer_cabbage_water_req = 0;
    //    }
    //    //pipeline_summer_cabbage_waterdemand = parseFloat(pipeline_summer_cabbage_crop_area) * 425 * 0.001;

    //    if (pipeline_summer_cabbage_irri_area == "") {
    //        pipeline_summer_cabbage_irri_area = 0;
    //    }
    //    pipeline_summer_cabbage_pipeline_waterdemand = ((parseFloat(pipeline_summer_cabbage_crop_area) - parseFloat(pipeline_summer_cabbage_irri_area)) * parseFloat(pipeline_summer_cabbage_water_req) * 0.001)
    //        + (parseFloat(pipeline_summer_cabbage_irri_area) * parseFloat(pipeline_summer_cabbage_water_req) * (1 - 20 / 100) * 0.001);

    //    //pipeline_summer_cabbage_pipeline_waterdemand = parseFloat(pipeline_summer_cabbage_irri_area) * parseFloat(pipeline_summer_cabbage_water_req) * 0.03 * 0.001;
    //    pipeline_summer_cabbage_reduction_water_demand = parseFloat(pipeline_summer_cabbage_waterdemand) - parseFloat(pipeline_summer_cabbage_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Summer_Crops = parseFloat(pipeline_summer_cabbage_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Summer_Crops);
    //    pipeline_summer_total_summer_waterdemand = parseFloat(pipeline_summer_total_summer_waterdemand) + parseFloat(pipeline_summer_cabbage_pipeline_waterdemand);
    //    pipeline_summer_total_reduction_waterdemand = parseFloat(pipeline_summer_total_reduction_waterdemand) + parseFloat(pipeline_summer_cabbage_reduction_water_demand);

    //}

    //Beans

    //var pipeline_summer_beans_crop_area = $('#pipeline_summer_beans_crop_area').val();
    //var pipeline_summer_beans_irri_area = $('#pipeline_summer_beans_irri_area').val();
    //var pipeline_summer_beans_water_req = $('#pipeline_summer_beans_water_req').val();
    //if (pipeline_summer_beans_crop_area != "") {
    //    if (pipeline_summer_beans_water_req != "") {
    //        pipeline_summer_beans_waterdemand = parseFloat(pipeline_summer_beans_crop_area) * parseFloat(pipeline_summer_beans_water_req) * 0.001;
    //    } else {
    //        pipeline_summer_beans_waterdemand = parseFloat(pipeline_summer_beans_crop_area) * 0 * 0.001;
    //        pipeline_summer_beans_water_req = 0;
    //    }
    //    // pipeline_summer_beans_waterdemand = parseFloat(pipeline_summer_beans_crop_area) * 400 * 0.001;

    //    if (pipeline_summer_beans_irri_area == "") {
    //        pipeline_summer_beans_irri_area = 0;
    //    }
    //    pipeline_summer_beans_pipeline_waterdemand = ((parseFloat(pipeline_summer_beans_crop_area) - parseFloat(pipeline_summer_beans_irri_area)) * parseFloat(pipeline_summer_beans_water_req) * 0.001)
    //        + (parseFloat(pipeline_summer_beans_irri_area) * parseFloat(pipeline_summer_beans_water_req) * (1 - 20 / 100) * 0.001);

    //    //pipeline_summer_beans_pipeline_waterdemand = parseFloat(pipeline_summer_beans_irri_area) * parseFloat(pipeline_summer_beans_water_req) * 0.03 * 0.001;
    //    pipeline_summer_beans_reduction_water_demand = parseFloat(pipeline_summer_beans_waterdemand) - parseFloat(pipeline_summer_beans_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Summer_Crops = parseFloat(pipeline_summer_beans_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Summer_Crops);
    //    pipeline_summer_total_summer_waterdemand = parseFloat(pipeline_summer_total_summer_waterdemand) + parseFloat(pipeline_summer_beans_pipeline_waterdemand);
    //    pipeline_summer_total_reduction_waterdemand = parseFloat(pipeline_summer_total_reduction_waterdemand) + parseFloat(pipeline_summer_beans_reduction_water_demand);

    //}

    //Floriculture

    var pipeline_summer_floriculture_crop_area = $('#pipeline_summer_floriculture_crop_area').val();
    var pipeline_summer_floriculture_irri_area = $('#pipeline_summer_floriculture_irri_area').val();
    var pipeline_summer_floriculture_water_req = $('#pipeline_summer_floriculture_water_req').val();
    if (pipeline_summer_floriculture_crop_area != "") {
        if (pipeline_summer_floriculture_water_req != "") {
            pipeline_summer_floriculture_waterdemand = parseFloat(pipeline_summer_floriculture_crop_area) * parseFloat(pipeline_summer_floriculture_water_req) * 0.001;
        } else {
            pipeline_summer_floriculture_waterdemand = parseFloat(pipeline_summer_floriculture_crop_area) * 0 * 0.001;
            pipeline_summer_floriculture_water_req = 0;
        }
        // pipeline_summer_floriculture_waterdemand = parseFloat(pipeline_summer_floriculture_crop_area) * 1200 * 0.001;

        if (pipeline_summer_floriculture_irri_area == "") {
            pipeline_summer_floriculture_irri_area = 0;
        }
        pipeline_summer_floriculture_pipeline_waterdemand = ((parseFloat(pipeline_summer_floriculture_crop_area) - parseFloat(pipeline_summer_floriculture_irri_area)) * parseFloat(pipeline_summer_floriculture_water_req) * 0.001)
            + (parseFloat(pipeline_summer_floriculture_irri_area) * parseFloat(pipeline_summer_floriculture_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_summer_floriculture_pipeline_waterdemand = parseFloat(pipeline_summer_floriculture_irri_area) * parseFloat(pipeline_summer_floriculture_water_req) * 0.03 * 0.001;
        pipeline_summer_floriculture_reduction_water_demand = pipeline_summer_floriculture_waterdemand - pipeline_summer_floriculture_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_floriculture_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_floriculture_pipeline_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_floriculture_reduction_water_demand;

    }


    //Maize

    var pipeline_summer_maize_crop_area = $('#pipeline_summer_maize_crop_area').val();
    var pipeline_summer_maize_irri_area = $('#pipeline_summer_maize_irri_area').val();
    var pipeline_summer_maize_water_req = $('#pipeline_summer_maize_water_req').val();
    if (pipeline_summer_maize_crop_area != "") {
        if (pipeline_summer_maize_water_req != "") {
            pipeline_summer_maize_waterdemand = parseFloat(pipeline_summer_maize_crop_area) * parseFloat(pipeline_summer_maize_water_req) * 0.001;
        } else {
            pipeline_summer_maize_waterdemand = parseFloat(pipeline_summer_maize_crop_area) * 0 * 0.001;
            pipeline_summer_maize_water_req = 0;
        }
        // pipeline_summer_maize_waterdemand = parseFloat(pipeline_summer_maize_crop_area) * 650 * 0.001;

        if (pipeline_summer_maize_irri_area == "") {
            pipeline_summer_maize_irri_area = 0;
        }
        pipeline_summer_maize_pipeline_waterdemand = ((parseFloat(pipeline_summer_maize_crop_area) - parseFloat(pipeline_summer_maize_irri_area)) * parseFloat(pipeline_summer_maize_water_req) * 0.001)
            + (parseFloat(pipeline_summer_maize_irri_area) * parseFloat(pipeline_summer_maize_water_req) * (1 - 20 / 100) * 0.001);

        //  pipeline_summer_maize_pipeline_waterdemand = parseFloat(pipeline_summer_maize_irri_area) * parseFloat(pipeline_summer_maize_water_req) * 0.03 * 0.001;
        pipeline_summer_maize_reduction_water_demand = pipeline_summer_maize_waterdemand - pipeline_summer_maize_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_maize_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_maize_pipeline_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_maize_reduction_water_demand;

    }


    //Fodder

    var pipeline_summer_fodder_crop_area = $('#pipeline_summer_fodder_crop_area').val();
    var pipeline_summer_fodder_irri_area = $('#pipeline_summer_fodder_irri_area').val();
    var pipeline_summer_fodder_water_req = $('#pipeline_summer_fodder_water_req').val();
    if (pipeline_summer_fodder_crop_area != "") {
        if (pipeline_summer_fodder_water_req != "") {
            pipeline_summer_fodder_waterdemand = parseFloat(pipeline_summer_fodder_crop_area) * parseFloat(pipeline_summer_fodder_water_req) * 0.001;
        } else {
            pipeline_summer_fodder_waterdemand = parseFloat(pipeline_summer_fodder_crop_area) * 0 * 0.001;
            pipeline_summer_fodder_water_req = 0;
        }
        pipeline_summer_fodder_waterdemand = parseFloat(pipeline_summer_fodder_crop_area) * 1400 * 0.001;

        if (pipeline_summer_fodder_irri_area == "") {
            pipeline_summer_fodder_irri_area = 0;
        }
        pipeline_summer_fodder_pipeline_waterdemand = ((parseFloat(pipeline_summer_fodder_crop_area) - parseFloat(pipeline_summer_fodder_irri_area)) * parseFloat(pipeline_summer_fodder_water_req) * 0.001)
            + (parseFloat(pipeline_summer_fodder_irri_area) * parseFloat(pipeline_summer_fodder_water_req) * (1 - 20 / 100) * 0.001);

        // pipeline_summer_fodder_pipeline_waterdemand = parseFloat(pipeline_summer_fodder_irri_area) * parseFloat(pipeline_summer_fodder_water_req) * 0.03 * 0.001;
        pipeline_summer_fodder_reduction_water_demand = pipeline_summer_fodder_waterdemand - pipeline_summer_fodder_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_fodder_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_fodder_pipeline_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_fodder_reduction_water_demand;

    }



    //Sugarcane

    var pipeline_summer_sugarcane_crop_area = $('#pipeline_summer_sugarcane_crop_area').val();
    var pipeline_summer_sugarcane_irri_area = $('#pipeline_summer_sugarcane_irri_area').val();
    var pipeline_summer_sugarcane_water_req = $('#pipeline_summer_sugarcane_water_req').val();
    if (pipeline_summer_sugarcane_crop_area != "") {
        if (pipeline_summer_sugarcane_water_req != "") {
            pipeline_summer_sugarcane_waterdemand = parseFloat(pipeline_summer_sugarcane_crop_area) * parseFloat(pipeline_summer_sugarcane_water_req) * 0.001;
        } else {
            pipeline_summer_sugarcane_waterdemand = parseFloat(pipeline_summer_sugarcane_crop_area) * 0 * 0.001;
            pipeline_summer_sugarcane_water_req = 0;
        }
        //pipeline_summer_sugarcane_waterdemand = parseFloat(pipeline_summer_sugarcane_crop_area) * 2000 * 0.001;

        if (pipeline_summer_sugarcane_irri_area == "") {
            pipeline_summer_sugarcane_irri_area = 0;
        }
        pipeline_summer_sugarcane_pipeline_waterdemand = ((parseFloat(pipeline_summer_sugarcane_crop_area) - parseFloat(pipeline_summer_sugarcane_irri_area)) * parseFloat(pipeline_summer_sugarcane_water_req) * 0.001)
            + (parseFloat(pipeline_summer_sugarcane_irri_area) * parseFloat(pipeline_summer_sugarcane_water_req) * (1 - 20 / 100) * 0.001);

        //pipeline_summer_sugarcane_pipeline_waterdemand = parseFloat(pipeline_summer_sugarcane_irri_area) * parseFloat(pipeline_summer_sugarcane_water_req) * 0.03 * 0.001;
        pipeline_summer_sugarcane_reduction_water_demand = pipeline_summer_sugarcane_waterdemand - pipeline_summer_sugarcane_pipeline_waterdemand;

        pipeline_Total_Water_Demand_for_Summer_Crops = pipeline_summer_sugarcane_waterdemand + pipeline_Total_Water_Demand_for_Summer_Crops;
        pipeline_summer_total_summer_waterdemand = pipeline_summer_total_summer_waterdemand + pipeline_summer_sugarcane_pipeline_waterdemand;
        pipeline_summer_total_reduction_waterdemand = pipeline_summer_total_reduction_waterdemand + pipeline_summer_sugarcane_reduction_water_demand;

    }


    //pipeline_summer_othercrop_waterdemand = 0;
    //pipeline_summer_othercrop_pipeline_waterdemand = 0;
    //pipeline_summer_othercrop_reduc_gw_demand = 0;


    //var pipeline_summer_othercrop_area = $('#pipeline_summer_othercrop_area').val();
    //var pipeline_summer_othercrop_irri_area = $('#pipeline_summer_othercrop_irri_area').val();
    //var pipeline_summer_othercrop_water_req = $('#pipeline_summer_othercrop_water_req').val();
    //if (pipeline_summer_othercrop_area != "") {
    //    if (pipeline_summer_othercrop_water_req != "") {
    //        pipeline_summer_othercrop_waterdemand = parseFloat(pipeline_summer_othercrop_area) * parseFloat(pipeline_summer_othercrop_water_req) * 0.001;
    //    } else {
    //        pipeline_summer_sugarcane_waterdemand = parseFloat(pipeline_summer_othercrop_area) * 0 * 0.001;
    //        pipeline_summer_sugarcane_water_req = 0;
    //    }
    //    //pipeline_summer_sugarcane_waterdemand = parseFloat(pipeline_summer_othercrop_area) * 2000 * 0.001;

    //    if (pipeline_summer_othercrop_irri_area == "") {
    //        pipeline_summer_othercrop_irri_area = 0;
    //    }
    //    pipeline_summer_othercrop_pipeline_waterdemand = ((parseFloat(pipeline_summer_othercrop_area) - parseFloat(pipeline_summer_othercrop_irri_area)) * parseFloat(pipeline_summer_othercrop_water_req) * 0.001)
    //        + (parseFloat(pipeline_summer_othercrop_irri_area) * parseFloat(pipeline_summer_othercrop_water_req) * (1 - 20 / 100) * 0.001);

    //    // pipeline_summer_othercrop_pipeline_waterdemand = parseFloat(pipeline_summer_othercrop_irri_area) * parseFloat(pipeline_summer_othercrop_water_req) * 0.03 * 0.001;
    //    pipeline_summer_othercrop_reduc_gw_demand = parseFloat(pipeline_summer_othercrop_waterdemand) - parseFloat(pipeline_summer_sugarcane_pipeline_waterdemand);

    //    pipeline_Total_Water_Demand_for_Summer_Crops = parseFloat(pipeline_summer_othercrop_waterdemand) + parseFloat(pipeline_Total_Water_Demand_for_Summer_Crops);
    //    pipeline_summer_total_summer_waterdemand = parseFloat(pipeline_summer_total_summer_waterdemand) + parseFloat(pipeline_summer_othercrop_pipeline_waterdemand);
    //    pipeline_summer_total_reduction_waterdemand = parseFloat(pipeline_summer_total_reduction_waterdemand) + parseFloat(pipeline_summer_othercrop_reduc_gw_demand);

    //}



    $('#pipeline_summer_total_waterdemand').text(pipeline_Total_Water_Demand_for_Summer_Crops.toFixed(2));
    $('#pipeline_summer_total_summer_waterdemand').text(pipeline_summer_total_summer_waterdemand.toFixed(2));

    $('#Pipeline_SummerCrop_Water_demand').text(pipeline_Total_Water_Demand_for_Summer_Crops.toFixed(2));
    $('#pipeline_summer_total_reduction_waterdemand').text(pipeline_summer_total_reduction_waterdemand.toFixed(2));

    var TotalAnnual_Pipeline_Reduction = parseFloat(pipeline_kharif_total_reduction_waterdemand) + parseFloat(pipeline_rabi_total_reduction_waterdemand) + parseFloat(pipeline_summer_total_reduction_waterdemand);
    $('#TotalAnnual_Pipeline_Reduction').text(TotalAnnual_Pipeline_Reduction.toFixed(2));

}




function pipeline_savedata() {
    Pipeline_Kharif_WaterRequire();
    Pipeline_Rabi_WaterRequire();
    Pipeline_Crop_WaterRequire();
    $('#SAVE_BTN3').prop('disabled', true);

    var obj = {};
    obj.pipeline_approx_estimated_cost = $('#pipeline_approx_estimated_cost').val();
    obj.pipeline_cost_type = $('#pipeline_cost_type').val();

    //paddy
    obj.pipeline_kharif_paddy_crop_area = $('#pipeline_kharif_paddy_crop_area').val();
    obj.pipeline_kharif_paddy_fundingsource = $('#Pipelines_kharif_Paddy_FundingSource').val();
    obj.pipeline_kharif_paddy_irri_area = $('#pipeline_kharif_paddy_irri_area').val();
    obj.pipeline_kharif_paddy_waterdemand = parseFloat(pipeline_kharif_paddy_waterdemand).toFixed(2);
    obj.pipeline_kharif_paddy_pipeline_waterdemand = parseFloat(pipeline_kharif_paddy_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_paddy_reduction_water_demand = parseFloat(pipeline_kharif_paddy_reduction_water_demand).toFixed(2);

    //Ragi
    obj.pipeline_kharif_ragi_crop_area = $('#pipeline_kharif_ragi_crop_area').val();
    obj.pipeline_kharif_ragi_fundingsource = $('#Pipelines_kharif_Ragi_FundingSource').val();
    obj.pipeline_kharif_ragi_irri_area = $('#pipeline_kharif_ragi_irri_area').val();
    obj.pipeline_kharif_ragi_waterdemand = parseFloat(pipeline_kharif_ragi_waterdemand).toFixed(2);
    obj.pipeline_kharif_ragi_pipeline_waterdemand = parseFloat(pipeline_kharif_ragi_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_ragi_reduction_water_demand = parseFloat(pipeline_kharif_ragi_reduction_water_demand).toFixed(2);

    //groundnut
    obj.pipeline_kharif_groundnut_crop_area = $('#pipeline_kharif_groundnut_crop_area').val();
    obj.pipeline_kharif_groundnut_fundingsource = $('#pipeline_kharif_groundnut_fundingsource').val();

    obj.pipeline_kharif_groundnut_irri_area = $('#pipeline_kharif_groundnut_irri_area').val();
    obj.pipeline_kharif_groundnut_waterdemand = parseFloat(pipeline_kharif_groundnut_waterdemand).toFixed(2);
    obj.pipeline_kharif_groundnut_pipeline_waterdemand = parseFloat(pipeline_kharif_groundnut_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_groundnut_reduction_water_demand = parseFloat(pipeline_kharif_groundnut_reduction_water_demand).toFixed(2);


    //sugarcane
    obj.pipeline_kharif_sugarcane_crop_area = $('#pipeline_kharif_sugarcane_crop_area').val();
    obj.pipeline_kharif_sugarcane_fundingsource = $('#pipelines_kharif_Sugarcane_FundingSource').val();

    obj.pipeline_kharif_sugarcane_irri_area = $('#pipeline_kharif_sugarcane_irri_area').val();
    obj.pipeline_kharif_sugarcane_waterdemand = parseFloat(pipeline_kharif_sugarcane_waterdemand).toFixed(2);
    obj.pipeline_kharif_sugarcane_pipeline_waterdemand = parseFloat(pipeline_kharif_sugarcane_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_sugarcane_reduction_water_demand = parseFloat(pipeline_kharif_sugarcane_reduction_water_demand).toFixed(2);

    //Tomoto


    obj.pipeline_kharif_tomoto_crop_area = $('#pipeline_kharif_tomoto_crop_area').val();
    obj.pipeline_kharif_tomoto_fundingsource = $('#Pipelines_kharif_Tomoto_FundingSource').val();

    obj.pipeline_kharif_tomoto_irri_area = $('#pipeline_kharif_tomoto_irri_area').val();
    obj.pipeline_kharif_tomoto_waterdemand = parseFloat(pipeline_kharif_tomoto_waterdemand).toFixed(2);
    obj.pipeline_kharif_tomoto_pipeline_waterdemand = parseFloat(pipeline_kharif_tomoto_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_tomoto_reduction_water_demand = parseFloat(pipeline_kharif_tomoto_reduction_water_demand).toFixed(2);

    //Cabbage

    //obj.pipeline_kharif_cabbage_crop_area = $('#pipeline_kharif_cabbage_crop_area').val();
    //obj.pipeline_kharif_cabbage_fundingsource = $('#Pipelines_kharif_Cabbage_FundingSource').val();

    //obj.pipeline_kharif_cabbage_irri_area = $('#pipeline_kharif_cabbage_irri_area').val();
    //obj.pipeline_kharif_cabbage_waterdemand = parseFloat(pipeline_kharif_cabbage_waterdemand).toFixed(2);
    //obj.pipeline_kharif_cabbage_pipeline_waterdemand = parseFloat(pipeline_kharif_cabbage_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_kharif_cabbage_reduction_water_demand = parseFloat(pipeline_kharif_cabbage_reduction_water_demand).toFixed(2);

    //Beans

    //obj.pipeline_kharif_beans_crop_area = $('#pipeline_kharif_beans_crop_area').val();
    //obj.pipeline_kharif_beans_fundingsource = $('#Pipelines_kharif_Beans_FundingSource').val();

    //obj.pipeline_kharif_beans_irri_area = $('#pipeline_kharif_beans_irri_area').val();
    //obj.pipeline_kharif_beans_waterdemand = parseFloat(pipeline_kharif_beans_waterdemand).toFixed(2);
    //obj.pipeline_kharif_beans_pipeline_waterdemand = parseFloat(pipeline_kharif_beans_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_kharif_beans_reduction_water_demand = parseFloat(pipeline_kharif_beans_reduction_water_demand).toFixed(2);

    //floriculture
    obj.pipeline_kharif_floriculture_crop_area = $('#pipeline_kharif_floriculture_crop_area').val();
    obj.pipeline_kharif_floriculture_fundingsource = $('#Pipelines_kharif_Floriculture_FundingSource').val();

    obj.pipeline_kharif_floriculture_irri_area = $('#pipeline_kharif_floriculture_irri_area').val();
    obj.pipeline_kharif_floriculture_waterdemand = parseFloat(pipeline_kharif_floriculture_waterdemand).toFixed(2);
    obj.pipeline_kharif_floriculture_pipeline_waterdemand = parseFloat(pipeline_kharif_floriculture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_floriculture_reduction_water_demand = parseFloat(pipeline_kharif_floriculture_reduction_water_demand).toFixed(2);

    //sericulture

    obj.pipeline_kharif_sericulture_crop_area = $('#pipeline_kharif_sericulture_crop_area').val();
    obj.pipeline_kharif_sericulture_fundingsource = $('#Pipelines_kharif_Sericulture_FundingSource').val();

    obj.pipeline_kharif_sericulture_irri_area = $('#pipeline_kharif_sericulture_irri_area').val();
    obj.pipeline_kharif_sericulture_waterdemand = parseFloat(pipeline_kharif_sericulture_waterdemand).toFixed(2);
    obj.pipeline_kharif_sericulture_pipeline_waterdemand = parseFloat(pipeline_kharif_sericulture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_sericulture_reduction_water_demand = parseFloat(pipeline_kharif_sericulture_reduction_water_demand).toFixed(2);

    //Cucumber

    //obj.pipeline_kharif_cucumber_crop_area = $('#pipeline_kharif_cucumber_crop_area').val();
    //obj.pipeline_kharif_cucumber_fundingsource = $('#Pipelines_kharif_Cucmber_FundingSource').val();

    //obj.pipeline_kharif_cucumber_irri_area = $('#pipeline_kharif_cucumber_irri_area').val();
    //obj.pipeline_kharif_cucumber_waterdemand = parseFloat(pipeline_kharif_cucumber_waterdemand).toFixed(2);
    //obj.pipeline_kharif_cucumber_pipeline_waterdemand = parseFloat(pipeline_kharif_cucumber_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_kharif_cucumber_reduction_water_demand = parseFloat(pipeline_kharif_cucumber_reduction_water_demand).toFixed(2);

    //banana

    obj.pipeline_kharif_banana_crop_area = $('#pipeline_kharif_banana_crop_area').val();
    obj.pipeline_kharif_banana_fundingsource = $('#Pipelines_kharif_Banana_FundingSource').val();

    obj.pipeline_kharif_banana_irri_area = $('#pipeline_kharif_banana_irri_area').val();
    obj.pipeline_kharif_banana_waterdemand = parseFloat(pipeline_kharif_banana_waterdemand).toFixed(2);
    obj.pipeline_kharif_banana_pipeline_waterdemand = parseFloat(pipeline_kharif_banana_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_banana_reduction_water_demand = parseFloat(pipeline_kharif_banana_reduction_water_demand).toFixed(2);

    //fodder

    obj.pipeline_kharif_fodder_crop_area = $('#pipeline_kharif_fodder_crop_area').val();
    obj.pipeline_kharif_fodder_fundingsource = $('#Pipelines_kharif_Fodder_FundingSource').val();

    obj.pipeline_kharif_fodder_irri_area = $('#pipeline_kharif_fodder_irri_area').val();
    obj.pipeline_kharif_fodder_waterdemand = parseFloat(pipeline_kharif_fodder_waterdemand).toFixed(2);
    obj.pipeline_kharif_fodder_pipeline_waterdemand = parseFloat(pipeline_kharif_fodder_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_fodder_reduction_water_demand = parseFloat(pipeline_kharif_fodder_reduction_water_demand).toFixed(2);

    //Maize

    obj.pipeline_kharif_maize_crop_area = $('#pipeline_kharif_maize_crop_area').val();
    obj.pipeline_kharif_maize_fundingsource = $('#Pipelines_kharif_Maize_FundingSource').val();

    obj.pipeline_kharif_maize_irri_area = $('#pipeline_kharif_maize_irri_area').val();
    obj.pipeline_kharif_maize_waterdemand = parseFloat(pipeline_kharif_maize_waterdemand).toFixed(2);
    obj.pipeline_kharif_maize_pipeline_waterdemand = parseFloat(pipeline_kharif_maize_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_maize_reduction_water_demand = parseFloat(pipeline_kharif_maize_reduction_water_demand).toFixed(2);

    //potato

    //obj.pipeline_kharif_potato_crop_area = $('#pipeline_kharif_potato_crop_area').val();
    //obj.pipeline_kharif_potato_fundingsource = $('#Pipelines_kharif_Potato_FundingSource').val();

    //obj.pipeline_kharif_potato_irri_area = $('#pipeline_kharif_potato_irri_area').val();
    //obj.pipeline_kharif_potato_waterdemand = parseFloat(pipeline_kharif_potato_waterdemand).toFixed(2);
    //obj.pipeline_kharif_potato_pipeline_waterdemand = parseFloat(pipeline_kharif_potato_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_kharif_potato_reduction_water_demand = parseFloat(pipeline_kharif_potato_reduction_water_demand).toFixed(2);

    //chillies

    obj.pipeline_kharif_chillies_crop_area = $('#pipeline_kharif_chillies_crop_area').val();
    obj.pipeline_kharif_chillies_fundingsource = $('#Pipelines_kharif_Chillies_FundingSource').val();

    obj.pipeline_kharif_chillies_irri_area = $('#pipeline_kharif_chillies_irri_area').val();
    obj.pipeline_kharif_chillies_waterdemand = parseFloat(pipeline_kharif_chillies_waterdemand).toFixed(2);
    obj.pipeline_kharif_chillies_pipeline_waterdemand = parseFloat(pipeline_kharif_chillies_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_chillies_reduction_water_demand = parseFloat(pipeline_kharif_chillies_reduction_water_demand).toFixed(2);

    //cotton

    obj.pipeline_kharif_cotton_crop_area = $('#pipeline_kharif_cotton_crop_area').val();
    obj.pipeline_kharif_cotton_fundingsource = $('#Pipelines_kharif_Cotton_FundingSource').val();
    obj.pipeline_kharif_cotton_irri_area = $('#pipeline_kharif_cotton_irri_area').val();
    obj.pipeline_kharif_cotton_waterdemand = parseFloat(pipeline_kharif_cotton_waterdemand).toFixed(2);
    obj.pipeline_kharif_cotton_pipeline_waterdemand = parseFloat(pipeline_kharif_cotton_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_cotton_reduction_water_demand = parseFloat(pipeline_kharif_cotton_reduction_water_demand).toFixed(2);

    //melon


    obj.pipeline_kharif_melon_crop_area = $('#pipeline_kharif_melon_crop_area').val();
    obj.pipeline_kharif_melon_fundingsource = $('#Pipelines_kharif_Melon_FundingSource').val();

    obj.pipeline_kharif_melon_irri_area = $('#pipeline_kharif_melon_irri_area').val();
    obj.pipeline_kharif_melon_waterdemand = parseFloat(pipeline_kharif_melon_waterdemand).toFixed(2);
    obj.pipeline_kharif_melon_pipeline_waterdemand = parseFloat(pipeline_kharif_melon_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_melon_reduction_water_demand = parseFloat(pipeline_kharif_melon_reduction_water_demand).toFixed(2);

    //citrus
    obj.pipeline_kharif_citrus_crop_area = $('#pipeline_kharif_citrus_crop_area').val();
    obj.pipeline_kharif_citrus_fundingsource = $('#Pipelines_kharif_Citrus_FundingSource').val();

    obj.pipeline_kharif_citrus_irri_area = $('#pipeline_kharif_citrus_irri_area').val();
    obj.pipeline_kharif_citrus_waterdemand = parseFloat(pipeline_kharif_citrus_waterdemand).toFixed(2);
    obj.pipeline_kharif_citrus_pipeline_waterdemand = parseFloat(pipeline_kharif_citrus_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_citrus_reduction_water_demand = parseFloat(pipeline_kharif_citrus_reduction_water_demand).toFixed(2);

    //peanut

    //obj.pipeline_kharif_peanut_crop_area = $('#pipeline_kharif_peanut_crop_area').val();
    //obj.pipeline_kharif_peanut_fundingsource = $('#Pipelines_kharif_Peanut_FundingSource').val();

    //obj.pipeline_kharif_peanut_irri_area = $('#pipeline_kharif_peanut_irri_area').val();
    //obj.pipeline_kharif_peanut_waterdemand = parseFloat(pipeline_kharif_peanut_waterdemand).toFixed(2);
    //obj.pipeline_kharif_peanut_pipeline_waterdemand = parseFloat(pipeline_kharif_peanut_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_kharif_peanut_reduction_water_demand = parseFloat(pipeline_kharif_peanut_reduction_water_demand).toFixed(2);


    //horticulture

    obj.pipeline_kharif_horticulture_crop_area = $('#pipeline_kharif_horticulture_crop_area').val();
    obj.pipeline_kharif_horticulture_fundingsource = $('#Pipelines_kharif_Horticulture_FundingSource').val();

    obj.pipeline_kharif_horticulture_irri_area = $('#pipeline_kharif_horticulture_irri_area').val();
    obj.pipeline_kharif_horticulture_waterdemand = parseFloat(pipeline_kharif_horticulture_waterdemand).toFixed(2);
    obj.pipeline_kharif_horticulture_pipeline_waterdemand = parseFloat(pipeline_kharif_horticulture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_kharif_horticulture_reduction_water_demand = parseFloat(pipeline_kharif_horticulture_reduction_water_demand).toFixed(2);


    //karif crops total
    var Pipeline_Kharif_Water_demand = $('#Pipeline_Kharif_Water_demand').text();
    obj.pipeline_kharif_total_waterdemand = parseFloat(Pipeline_Kharif_Water_demand).toFixed(2);
    var pipeline_kharif_total_pipeline_waterdemand = $('#pipeline_kharif_total_pipeline_waterdemand').text();
    obj.pipeline_kharif_total_pipeline_waterdemand = parseFloat(pipeline_kharif_total_pipeline_waterdemand).toFixed(2);
    var pipeline_kharif_total_reduction_waterdemand = $('#pipeline_kharif_total_reduction_waterdemand').text();
    obj.pipeline_kharif_total_reduction_waterdemand = parseFloat(pipeline_kharif_total_reduction_waterdemand).toFixed(2);

    //rabi sericulture

    obj.pipeline_rabi_sericulture_crop_area = $('#pipeline_rabi_sericulture_crop_area').val();
    obj.pipeline_rabi_sericulture_fundingsource = $('#Pipelines_Rabi_Sericulture_FundingSource').val();

    obj.pipeline_rabi_sericulture_irri_area = $('#pipeline_rabi_sericulture_irri_area').val();
    obj.pipeline_rabi_sericulture_waterdemand = parseFloat(pipeline_rabi_sericulture_waterdemand).toFixed(2);
    obj.pipeline_rabi_sericulture_pipeline_waterdemand = parseFloat(pipeline_rabi_sericulture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_sericulture_reduction_water_demand = parseFloat(pipeline_rabi_sericulture_reduction_water_demand).toFixed(2);

    //rabi tomoto

    obj.pipeline_rabi_tomoto_crop_area = $('#pipeline_rabi_tomoto_crop_area').val();
    obj.pipeline_rabi_tomoto_fundingsource = $('#Pipelines_Rabi_Tomota_FundingSource').val();

    obj.pipeline_rabi_tomoto_irri_area = $('#pipeline_rabi_tomoto_irri_area').val();
    obj.pipeline_rabi_tomoto_waterdemand = parseFloat(pipeline_rabi_tomoto_waterdemand).toFixed(2);
    obj.pipeline_rabi_tomoto_pipeline_waterdemand = parseFloat(pipeline_rabi_tomoto_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_tomoto_reduction_water_demand = parseFloat(pipeline_rabi_tomoto_reduction_water_demand).toFixed(2);

    //rabi cabbage

    //obj.pipeline_rabi_cabbage_crop_area = $('#pipeline_rabi_cabbage_crop_area').val();
    //obj.pipeline_rabi_cabbage_fundingsource = $('#Pipelines_Rabi_Cabbage_FundingSource').val();

    //obj.pipeline_rabi_cabbage_irri_area = $('#pipeline_rabi_cabbage_irri_area').val();
    //obj.pipeline_rabi_cabbage_waterdemand = parseFloat(pipeline_rabi_cabbage_waterdemand).toFixed(2);
    //obj.pipeline_rabi_cabbage_pipeline_waterdemand = parseFloat(pipeline_rabi_cabbage_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_rabi_cabbage_reduction_water_demand = parseFloat(pipeline_rabi_cabbage_reduction_water_demand).toFixed(2);

    //rabi beans

    //obj.pipeline_rabi_beans_crop_area = $('#pipeline_rabi_beans_crop_area').val();
    //obj.pipeline_rabi_beans_fundingsource = $('#Pipelines_Rabi_Beans_FundingSource').val();

    //obj.pipeline_rabi_beans_irri_area = $('#pipeline_rabi_beans_irri_area').val();
    //obj.pipeline_rabi_beans_waterdemand = parseFloat(pipeline_rabi_beans_waterdemand).toFixed(2);
    //obj.pipeline_rabi_beans_pipeline_waterdemand = parseFloat(pipeline_rabi_beans_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_rabi_beans_reduction_water_demand = parseFloat(pipeline_rabi_beans_reduction_water_demand).toFixed(2);

    //rabi floriculture

    obj.pipeline_rabi_floriculture_crop_area = $('#pipeline_rabi_floriculture_crop_area').val();
    obj.pipeline_rabi_floriculture_fundingsource = $('#Pipelines_Rabi_Floriculture_FundingSource').val();

    obj.pipeline_rabi_floriculture_irri_area = $('#pipeline_rabi_floriculture_irri_area').val();
    obj.pipeline_rabi_floriculture_waterdemand = parseFloat(pipeline_rabi_floriculture_waterdemand).toFixed(2);
    obj.pipeline_rabi_floriculture_pipeline_waterdemand = parseFloat(pipeline_rabi_floriculture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_floriculture_reduction_water_demand = parseFloat(pipeline_rabi_floriculture_reduction_water_demand).toFixed(2);

    //rabi potato

    //obj.pipeline_rabi_potato_crop_area = $('#pipeline_rabi_potato_crop_area').val();
    //obj.pipeline_rabi_potato_fundingsource = $('#Pipelines_Rabi_Potato_FundingSource').val();

    //obj.pipeline_rabi_potato_irri_area = $('#pipeline_rabi_potato_irri_area').val();
    //obj.pipeline_rabi_potato_waterdemand = parseFloat(pipeline_rabi_potato_waterdemand).toFixed(2);
    //obj.pipeline_rabi_potato_pipeline_waterdemand = parseFloat(pipeline_rabi_potato_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_rabi_potato_reduction_water_demand = parseFloat(pipeline_rabi_potato_reduction_water_demand).toFixed(2);

    //rabi cucumber

    //obj.pipeline_rabi_cucumber_crop_area = $('#pipeline_rabi_cucumber_crop_area').val();
    //obj.pipeline_rabi_cucumber_fundingsource = $('#Pipelines_Rabi_Cucumber_FundingSource').val();

    //obj.pipeline_rabi_cucumber_irri_area = $('#pipeline_rabi_cucumber_irri_area').val();
    //obj.pipeline_rabi_cucumber_waterdemand = parseFloat(pipeline_rabi_cucumber_waterdemand).toFixed(2);
    //obj.pipeline_rabi_cucumber_pipeline_waterdemand = parseFloat(pipeline_rabi_cucumber_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_rabi_cucumber_reduction_water_demand = parseFloat(pipeline_rabi_cucumber_reduction_water_demand).toFixed(2);

    //rabi ragi

    obj.pipeline_rabi_ragi_crop_area = $('#pipeline_rabi_ragi_crop_area').val();
    obj.pipeline_rabi_ragi_fundingsource = $('#Pipelines_Rabi_Ragi_FundingSource').val();

    obj.pipeline_rabi_ragi_irri_area = $('#pipeline_rabi_ragi_irri_area').val();
    obj.pipeline_rabi_ragi_waterdemand = parseFloat(pipeline_rabi_ragi_waterdemand).toFixed(2);
    obj.pipeline_rabi_ragi_pipeline_waterdemand = parseFloat(pipeline_rabi_ragi_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_ragi_reduction_water_demand = parseFloat(pipeline_rabi_ragi_reduction_water_demand).toFixed(2);

    //rabi sugarcane

    obj.pipeline_rabi_sugarcane_crop_area = $('#pipeline_rabi_sugarcane_crop_area').val();
    obj.pipeline_rabi_sugarcane_fundingsource = $('#Pipelines_Rabi_Sugarcane_FundingSource').val();

    obj.pipeline_rabi_sugarcane_irri_area = $('#pipeline_rabi_sugarcane_irri_area').val();
    obj.pipeline_rabi_sugarcane_waterdemand = parseFloat(pipeline_rabi_sugarcane_waterdemand).toFixed(2);
    obj.pipeline_rabi_sugarcane_pipeline_waterdemand = parseFloat(pipeline_rabi_sugarcane_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_sugarcane_reduction_water_demand = parseFloat(pipeline_rabi_sugarcane_reduction_water_demand).toFixed(2);


    //Rabi Maize
    obj.pipeline_rabi_maize_crop_area = $('#pipeline_rabi_maize_crop_area').val();
    obj.pipeline_rabi_maize_fundingsource = $('#Pipelines_Rabi_Maize_FundingSource').val();

    obj.pipeline_rabi_maize_irri_area = $('#pipeline_rabi_maize_irri_area').val();
    obj.pipeline_rabi_maize_waterdemand = parseFloat(pipeline_rabi_maize_waterdemand).toFixed(2);
    obj.pipeline_rabi_maize_pipeline_waterdemand = parseFloat(pipeline_rabi_maize_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_maize_reduction_water_demand = parseFloat(pipeline_rabi_maize_reduction_water_demand).toFixed(2);

    //rabi fodder

    obj.pipeline_rabi_fodder_crop_area = $('#pipeline_rabi_fodder_crop_area').val();
    obj.pipeline_rabi_fodder_fundingsource = $('#Pipelines_Rabi_Fodder_FundingSource').val();

    obj.pipeline_rabi_fodder_irri_area = $('#pipeline_rabi_fodder_irri_area').val();
    obj.pipeline_rabi_fodder_waterdemand = parseFloat(pipeline_rabi_fodder_waterdemand).toFixed(2);
    obj.pipeline_rabi_fodder_pipeline_waterdemand = parseFloat(pipeline_rabi_fodder_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_fodder_reduction_water_demand = parseFloat(pipeline_rabi_fodder_reduction_water_demand).toFixed(2);

    //rabi paddy

    obj.pipeline_rabi_paddy_crop_area = $('#pipeline_rabi_paddy_crop_area').val();
    obj.pipeline_rabi_paddy_fundingsource = $('#Pipelines_Rabi_Paddy_FundingSource').val();

    obj.pipeline_rabi_paddy_irri_area = $('#pipeline_rabi_paddy_irri_area').val();
    obj.pipeline_rabi_paddy_waterdemand = parseFloat(pipeline_rabi_paddy_waterdemand).toFixed(2);
    obj.pipeline_rabi_paddy_pipeline_waterdemand = parseFloat(pipeline_rabi_paddy_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_paddy_reduction_water_demand = parseFloat(pipeline_rabi_paddy_reduction_water_demand).toFixed(2);

    //rabi alfalfa

    obj.pipeline_rabi_alfalfa_crop_area = $('#pipeline_rabi_alfalfa_crop_area').val();
    obj.pipeline_rabi_alfalfa_fundingsource = $('#Pipelines_Rabi_Alfalfa_FundingSource').val();

    obj.pipeline_rabi_alfalfa_irri_area = $('#pipeline_rabi_alfalfa_irri_area').val();
    obj.pipeline_rabi_alfalfa_waterdemand = parseFloat(pipeline_rabi_alfalfa_waterdemand).toFixed(2);
    obj.pipeline_rabi_alfalfa_pipeline_waterdemand = parseFloat(pipeline_rabi_alfalfa_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_alfalfa_reduction_water_demand = parseFloat(pipeline_rabi_alfalfa_reduction_water_demand).toFixed(2);

    // rabi onion

    //obj.pipeline_rabi_onion_crop_area = $('#pipeline_rabi_onion_crop_area').val();
    //obj.pipeline_rabi_onion_fundingsource = $('#Pipelines_Rabi_Onion_FundingSource').val();

    //obj.pipeline_rabi_onion_irri_area = $('#pipeline_rabi_onion_irri_area').val();
    //obj.pipeline_rabi_onion_waterdemand = parseFloat(pipeline_rabi_onion_waterdemand).toFixed(2);
    //obj.pipeline_rabi_onion_pipeline_waterdemand = parseFloat(pipeline_rabi_onion_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_rabi_onion_reduction_water_demand = parseFloat(pipeline_rabi_onion_reduction_water_demand).toFixed(2);

    //rabi horticulture

    obj.pipeline_rabi_horticulture_crop_area = $('#pipeline_rabi_horticulture_crop_area').val();
    obj.pipeline_rabi_horticulture_fundingsource = $('#Pipelines_Rabi_Hortculture_FundingSource').val();

    obj.pipeline_rabi_horticulture_irri_area = $('#pipeline_rabi_horticulture_irri_area').val();
    obj.pipeline_rabi_horticulture_waterdemand = parseFloat(pipeline_rabi_horticulture_waterdemand).toFixed(2);
    obj.pipeline_rabi_horticulture_pipeline_waterdemand = parseFloat(pipeline_rabi_horticulture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_horticulture_reduction_water_demand = parseFloat(pipeline_rabi_horticulture_reduction_water_demand).toFixed(2);

    //rabi sunflower
    obj.pipeline_rabi_sunflower_crop_area = $('#pipeline_rabi_sunflower_crop_area').val();
    obj.pipeline_rabi_sunflower_fundingsource = $('#Pipelines_Rabi_Sunflower_FundingSource').val();

    obj.pipeline_rabi_sunflower_irri_area = $('#pipeline_rabi_sunflower_irri_area').val();
    obj.pipeline_rabi_sunflower_waterdemand = parseFloat(pipeline_rabi_sunflower_waterdemand).toFixed(2);
    obj.pipeline_rabi_sunflower_pipeline_waterdemand = parseFloat(pipeline_rabi_sunflower_pipeline_waterdemand).toFixed(2);
    obj.pipeline_rabi_sunflower_reduction_water_demand = parseFloat(pipeline_rabi_sunflower_reduction_water_demand).toFixed(2);


    //rabi crops total
    var Pipeline_Rabi_Water_demand = $('Pipeline_Rabi_Water_demand').text();
    obj.pipeline_rabi_total_waterdemand = parseFloat(Pipeline_Rabi_Water_demand).toFixed(2);
    var pipeline_rabi_total_rabi_waterdemand = $('pipeline_rabi_total_rabi_waterdemand').text();
    obj.pipeline_rabi_total_rabi_waterdemand = parseFloat(pipeline_rabi_total_rabi_waterdemand).toFixed(2);
    var pipeline_rabi_total_reduction_waterdemand = $('pipeline_rabi_total_reduction_waterdemand').text();
    obj.pipeline_rabi_total_reduction_waterdemand = parseFloat(pipeline_rabi_total_reduction_waterdemand).toFixed(2);


    //summer sericulture

    obj.pipeline_summer_sericulture_crop_area = $('#pipeline_summer_sericulture_crop_area').val();
    obj.pipeline_summer_sericulture_fundingsource = $('#Pipelines_summer_Sericulture_FundingSource').val();

    obj.pipeline_summer_sericulture_irri_area = $('#pipeline_summer_sericulture_irri_area').val();
    obj.pipeline_summer_sericulture_waterdemand = parseFloat(pipeline_summer_sericulture_waterdemand).toFixed(2);
    obj.pipeline_summer_sericulture_pipeline_waterdemand = parseFloat(pipeline_summer_sericulture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_summer_sericulture_reduction_water_demand = parseFloat(pipeline_summer_sericulture_reduction_water_demand).toFixed(2);

    //summer tomoto

    obj.pipeline_summer_tomoto_crop_area = $('#pipeline_summer_tomoto_crop_area').val();
    obj.pipeline_summer_tomoto_fundingsource = $('#Pipelines_summer_Tomota_FundingSource').val();

    obj.pipeline_summer_tomoto_irri_area = $('#pipeline_summer_tomoto_irri_area').val();
    obj.pipeline_summer_tomoto_waterdemand = parseFloat(pipeline_summer_tomoto_waterdemand).toFixed(2);
    obj.pipeline_summer_tomoto_pipeline_waterdemand = parseFloat(pipeline_summer_tomoto_pipeline_waterdemand).toFixed(2);
    obj.pipeline_summer_tomoto_reduction_water_demand = parseFloat(pipeline_summer_tomoto_reduction_water_demand).toFixed(2);

    //sumer cabbage

    //obj.pipeline_summer_cabbage_crop_area = $('#pipeline_summer_cabbage_crop_area').val();
    //obj.pipeline_summer_cabbage_fundingsource = $('#Pipelines_summer_Cabbage_FundingSource').val();

    //obj.pipeline_summer_cabbage_irri_area = $('#pipeline_summer_cabbage_irri_area').val();
    //obj.pipeline_summer_cabbage_waterdemand = parseFloat(pipeline_summer_cabbage_waterdemand).toFixed(2);
    //obj.pipeline_summer_cabbage_pipeline_waterdemand = parseFloat(pipeline_summer_cabbage_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_summer_cabbage_reduction_water_demand = parseFloat(pipeline_summer_cabbage_reduction_water_demand).toFixed(2);

    //summer beans

    //obj.pipeline_summer_beans_crop_area = $('#pipeline_summer_beans_crop_area').val();
    //obj.pipeline_summer_beans_fundingsource = $('#Pipelines_summer_Beans_FundingSource').val();

    //obj.pipeline_summer_beans_irri_area = $('#pipeline_summer_beans_irri_area').val();
    //obj.pipeline_summer_beans_waterdemand = parseFloat(pipeline_summer_beans_waterdemand).toFixed(2);
    //obj.pipeline_summer_beans_pipeline_waterdemand = parseFloat(pipeline_summer_beans_pipeline_waterdemand).toFixed(2);
    //obj.pipeline_summer_beans_reduction_water_demand = parseFloat(pipeline_summer_beans_reduction_water_demand).toFixed(2);

    //summer floriculture

    obj.pipeline_summer_floriculture_crop_area = $('#pipeline_summer_floriculture_crop_area').val();
    obj.pipeline_summer_floriculture_fundingsource = $('#Pipelines_summer_Floriculture_FundingSource').val();

    obj.pipeline_summer_floriculture_irri_area = $('#pipeline_summer_floriculture_irri_area').val();
    obj.pipeline_summer_floriculture_waterdemand = parseFloat(pipeline_summer_floriculture_waterdemand).toFixed(2);
    obj.pipeline_summer_floriculture_pipeline_waterdemand = parseFloat(pipeline_summer_floriculture_pipeline_waterdemand).toFixed(2);
    obj.pipeline_summer_floriculture_reduction_water_demand = parseFloat(pipeline_summer_floriculture_reduction_water_demand).toFixed(2);

    //summer maize
    obj.pipeline_summer_maize_crop_area = $('#pipeline_summer_maize_crop_area').val();
    obj.pipeline_summer_maize_fundingsource = $('#Pipelines_summer_Maize_FundingSource').val();

    obj.pipeline_summer_maize_irri_area = $('#pipeline_summer_maize_irri_area').val();
    obj.pipeline_summer_maize_waterdemand = parseFloat(pipeline_summer_maize_waterdemand).toFixed(2);
    obj.pipeline_summer_maize_pipeline_waterdemand = parseFloat(pipeline_summer_maize_pipeline_waterdemand).toFixed(2);
    obj.pipeline_summer_maize_reduction_water_demand = parseFloat(pipeline_summer_maize_pipeline_waterdemand).toFixed(2);

    //summer fodder
    obj.pipeline_summer_fodder_crop_area = $('#pipeline_summer_fodder_crop_area').val();
    obj.pipeline_summer_fodder_fundingsource = $('#Pipelines_summer_Fodder_FundingSource').val();

    obj.pipeline_summer_fodder_irri_area = $('#pipeline_summer_fodder_irri_area').val();
    obj.pipeline_summer_fodder_waterdemand = parseFloat(pipeline_summer_fodder_waterdemand).toFixed(2);
    obj.pipeline_summer_fodder_pipeline_waterdemand = parseFloat(pipeline_summer_fodder_pipeline_waterdemand).toFixed(2);
    obj.pipeline_summer_fodder_reduction_water_demand = parseFloat(pipeline_summer_fodder_reduction_water_demand).toFixed(2);

    //summer sugarcane

    obj.pipeline_summer_sugarcane_crop_area = $('#pipeline_summer_sugarcane_crop_area').val();
    obj.pipeline_summer_sugarcane_fundingsource = $('#Pipelines_summer_Sugarcane_FundingSource').val();

    obj.pipeline_summer_sugarcane_irri_area = $('#pipeline_summer_sugarcane_irri_area').val();
    obj.pipeline_summer_sugarcane_waterdemand = parseFloat(pipeline_summer_sugarcane_waterdemand).toFixed(2);
    obj.pipeline_summer_sugarcane_pipeline_waterdemand = parseFloat(pipeline_summer_sugarcane_pipeline_waterdemand).toFixed(2);
    obj.pipeline_summer_sugarcane_reduction_water_demand = parseFloat(pipeline_summer_sugarcane_reduction_water_demand).toFixed(2);

    //total
    //summer crops total
    var Pipeline_SummerCrop_Water_demand = $('#Pipeline_SummerCrop_Water_demand').text();
    obj.pipeline_summer_total_waterdemand = parseFloat(Pipeline_SummerCrop_Water_demand).toFixed(2);
    var pipeline_summer_total_summer_waterdemand = $('#pipeline_summer_total_summer_waterdemand').text();
    obj.pipeline_summer_total_summer_waterdemand = parseFloat(pipeline_summer_total_summer_waterdemand).toFixed(2);
    var pipeline_summer_total_reduction_waterdemand = $('#pipeline_summer_total_reduction_waterdemand').text();
    obj.pipeline_summer_total_reduction_waterdemand = parseFloat(pipeline_summer_total_reduction_waterdemand).toFixed(2);

    //annual total
    var TotalAnnual_Pipeline_Reduction = $('#TotalAnnual_Pipeline_Reduction').text();
    obj.pipeline_annual_reduction_waterdemand = parseFloat(TotalAnnual_Pipeline_Reduction).toFixed(2);


    obj.latitude = lat.toString();
    obj.longitude = long.toString();

    //new columns water requirement
    obj.pipeline_kharif_paddy_water_req = $('#pipeline_kharif_paddy_water_req').val();
    obj.pipeline_kharif_ragi_water_req = $('#pipeline_kharif_ragi_water_req').val();
    obj.pipeline_kharif_groundnut_water_req = $('#pipeline_kharif_groundnut_water_req').val();
    obj.pipeline_kharif_sugarcane_water_req = $('#pipeline_kharif_sugarcane_water_req').val();
    obj.pipeline_kharif_tomoto_water_req = $('#pipeline_kharif_tomoto_water_req').val();
    // obj.pipeline_kharif_cabbage_water_req = $('#pipeline_kharif_cabbage_water_req').val();
    // obj.pipeline_kharif_beans_water_req = $('#pipeline_kharif_beans_water_req').val();
    obj.pipeline_kharif_floriculture_water_req = $('#pipeline_kharif_floriculture_water_req').val();
    obj.pipeline_kharif_sericulture_water_req = $('#pipeline_kharif_sericulture_water_req').val();
    // obj.pipeline_kharif_cucumber_water_req = $('#pipeline_kharif_cucumber_water_req').val();
    obj.pipeline_kharif_banana_water_req = $('#pipeline_kharif_banana_water_req').val();
    obj.pipeline_kharif_fodder_water_req = $('#pipeline_kharif_fodder_water_req').val();
    obj.pipeline_kharif_maize_water_req = $('#pipeline_kharif_maize_water_req').val();
    // obj.pipeline_kharif_potato_water_req = $('#pipeline_kharif_potato_water_req').val();
    obj.pipeline_kharif_chillies_water_req = $('#pipeline_kharif_chillies_water_req').val();
    obj.pipeline_kharif_cotton_water_req = $('#pipeline_kharif_cotton_water_req').val();
    obj.pipeline_kharif_melon_water_req = $('#pipeline_kharif_melon_water_req').val();
    obj.pipeline_kharif_citrus_water_req = $('#pipeline_kharif_citrus_water_req').val();
    //  obj.pipeline_kharif_peanut_water_req = $('#pipeline_kharif_peanut_water_req').val();
    obj.pipeline_kharif_horticulture_water_req = $('#pipeline_kharif_horticulture_water_req').val();
    obj.pipeline_summer_sugarcane_irri_area = $('#pipeline_summer_sugarcane_irri_area').val();

    obj.pipeline_rabi_sericulture_water_req = $('#pipeline_rabi_sericulture_water_req').val();
    obj.pipeline_rabi_tomoto_water_req = $('#pipeline_rabi_tomoto_water_req').val();
    // obj.pipeline_rabi_cabbage_water_req = $('#pipeline_rabi_cabbage_water_req').val();
    // obj.pipeline_rabi_beans_water_req = $('#pipeline_rabi_beans_water_req').val();
    obj.pipeline_rabi_floriculture_water_req = $('#pipeline_rabi_floriculture_water_req').val();
    // obj.pipeline_rabi_potato_water_req = $('#pipeline_rabi_potato_water_req').val();
    // obj.pipeline_rabi_cucumber_water_req = $('#pipeline_rabi_cucumber_water_req').val();
    obj.pipeline_rabi_ragi_water_req = $('#pipeline_rabi_ragi_water_req').val();
    obj.pipeline_rabi_sugarcane_water_req = $('#pipeline_rabi_sugarcane_water_req').val();
    obj.pipeline_rabi_maize_water_req = $('#pipeline_rabi_maize_water_req').val();
    obj.pipeline_rabi_fodder_water_req = $('#pipeline_rabi_fodder_water_req').val();
    obj.pipeline_rabi_paddy_water_req = $('#pipeline_rabi_paddy_water_req').val();
    obj.pipeline_rabi_alfalfa_water_req = $('#pipeline_rabi_alfalfa_water_req').val();
    // obj.pipeline_rabi_onion_water_req = $('#pipeline_rabi_onion_water_req').val();
    obj.pipeline_rabi_horticulture_water_req = $('#pipeline_rabi_horticulture_water_req').val();
    obj.pipeline_rabi_sunflower_water_req = $('#pipeline_rabi_sunflower_water_req').val();

    obj.pipeline_summer_sericulture_water_req = $('#pipeline_summer_sericulture_water_req').val();
    obj.pipeline_summer_tomoto_water_req = $('#pipeline_summer_tomoto_water_req').val();
    // obj.pipeline_summer_cabbage_water_req = $('#pipeline_summer_cabbage_water_req').val();
    // obj.pipeline_summer_beans_water_req = $('#pipeline_summer_beans_water_req').val();
    obj.pipeline_summer_floriculture_water_req = $('#pipeline_summer_floriculture_water_req').val();
    obj.pipeline_summer_maize_water_req = $('#pipeline_summer_maize_water_req').val();
    obj.pipeline_summer_fodder_water_req = $('#pipeline_summer_fodder_water_req').val();
    obj.pipeline_summer_sugarcane_water_req = $('#pipeline_summer_sugarcane_water_req').val();

    obj.pipeline_kharif_total_waterdemand = $('#Pipeline_Kharif_Water_demand').text();
    obj.pipeline_kharif_total_pipeline_waterdemand = $('#pipeline_kharif_total_pipeline_waterdemand').text();
    obj.pipeline_kharif_total_reduction_waterdemand = $('#pipeline_kharif_total_reduction_waterdemand').text();

    obj.pipeline_rabi_total_waterdemand = $('#Pipeline_Rabi_Water_demand').text();
    obj.pipeline_rabi_total_rabi_waterdemand = $('#pipeline_rabi_total_rabi_waterdemand').text();
    obj.pipeline_rabi_total_reduction_waterdemand = $('#pipeline_rabi_total_reduction_waterdemand').text();

    obj.pipeline_summer_total_waterdemand = $('#Pipeline_SummerCrop_Water_demand').text();
    obj.pipeline_summer_total_summer_waterdemand = $('#pipeline_summer_total_summer_waterdemand').text();
    obj.pipeline_summer_total_reduction_waterdemand = $('#pipeline_summer_total_reduction_waterdemand').text();

    obj.pipeline_other_funding_source = $('#other_Pipelines_kharif_Paddy_FundingSource').val();


    //horticulture
    obj.pipeline_summer_horticulture_crop_area = $('#pipeline_summer_horticulture_crop_area').val();
    obj.pipeline_summer_horticulture_irri_area = $('#pipeline_summer_horticulture_irri_area').val();
    obj.pipeline_summer_horticulture_water_req = $('#pipeline_summer_horticulture_water_req').val();

    obj.pipeline_summer_horticulture_waterdemand = $('#pipeline_summer_horticulture_waterdemand').text();
    obj.pipeline_summer_horticulture_netwater_waterdemand = $('#pipeline_summer_horticulture_netwater_waterdemand').text();
    obj.pipeline_summer_horticulture_reduction_gw_demand = $('#pipeline_summer_horticulture_reduction_gw_demand').text();

    //add crops
    obj.pipeline_kharif_othercrop_name1 = $('#pipeline_kharif_othercrop_name1').val();
    obj.pipeline_kharif_othercrop_area1 = $('#pipeline_kharif_othercrop_area1').val();
    obj.pipeline_kharif_othercrop_irri_area1 = $('#pipeline_kharif_othercrop_irri_area1').val();
    obj.pipeline_kharif_othercrop_water_req1 = $('#pipeline_kharif_othercrop_water_req1').val();
    obj.pipeline_kharif_othercrop_waterdemand1 = $('#pipeline_kharif_othercrop_waterdemand1').val();
    obj.pipeline_kharif_othercrop_pipeline_waterdemand1 = $('#pipeline_kharif_othercrop_pipeline_waterdemand1').val();
    obj.pipeline_kharif_othercrop_reduc_gw_demand1 = $('#pipeline_kharif_othercrop_reduc_gw_demand1').val();

    obj.pipeline_kharif_othercrop_name2 = $('#pipeline_kharif_othercrop_name2').val();
    obj.pipeline_kharif_othercrop_area2 = $('#pipeline_kharif_othercrop_area2').val();
    obj.pipeline_kharif_othercrop_irri_area2 = $('#pipeline_kharif_othercrop_irri_area2').val();
    obj.pipeline_kharif_othercrop_water_req2 = $('#pipeline_kharif_othercrop_water_req2').val();
    obj.pipeline_kharif_othercrop_waterdemand2 = $('#pipeline_kharif_othercrop_waterdemand2').val();
    obj.pipeline_kharif_othercrop_pipeline_waterdemand2 = $('#pipeline_kharif_othercrop_pipeline_waterdemand2').val();
    obj.pipeline_kharif_othercrop_reduc_gw_demand2 = $('#pipeline_kharif_othercrop_reduc_gw_demand2').val();

    obj.pipeline_kharif_othercrop_name3 = $('#pipeline_kharif_othercrop_name3').val();
    obj.pipeline_kharif_othercrop_area3 = $('#pipeline_kharif_othercrop_area3').val();
    obj.pipeline_kharif_othercrop_irri_area3 = $('#pipeline_kharif_othercrop_irri_area3').val();
    obj.pipeline_kharif_othercrop_water_req3 = $('#pipeline_kharif_othercrop_water_req3').val();
    obj.pipeline_kharif_othercrop_waterdemand3 = $('#pipeline_kharif_othercrop_waterdemand3').val();
    obj.pipeline_kharif_othercrop_pipeline_waterdemand3 = $('#pipeline_kharif_othercrop_pipeline_waterdemand3').val();
    obj.pipeline_kharif_othercrop_reduc_gw_demand3 = $('#pipeline_kharif_othercrop_reduc_gw_demand3').val();

    obj.pipeline_kharif_othercrop_name4 = $('#pipeline_kharif_othercrop_name4').val();
    obj.pipeline_kharif_othercrop_area4 = $('#pipeline_kharif_othercrop_area4').val();
    obj.pipeline_kharif_othercrop_irri_area4 = $('#pipeline_kharif_othercrop_irri_area4').val();
    obj.pipeline_kharif_othercrop_water_req4 = $('#pipeline_kharif_othercrop_water_req4').val();
    obj.pipeline_kharif_othercrop_waterdemand4 = $('#pipeline_kharif_othercrop_waterdemand4').val();
    obj.pipeline_kharif_othercrop_pipeline_waterdemand4 = $('#pipeline_kharif_othercrop_pipeline_waterdemand4').val();
    obj.pipeline_kharif_othercrop_reduc_gw_demand4 = $('#pipeline_kharif_othercrop_reduc_gw_demand4').val();

    obj.pipeline_kharif_othercrop_name5 = $('#pipeline_kharif_othercrop_name5').val();
    obj.pipeline_kharif_othercrop_area5 = $('#pipeline_kharif_othercrop_area5').val();
    obj.pipeline_kharif_othercrop_irri_area5 = $('#pipeline_kharif_othercrop_irri_area5').val();
    obj.pipeline_kharif_othercrop_water_req5 = $('#pipeline_kharif_othercrop_water_req5').val();
    obj.pipeline_kharif_othercrop_waterdemand5 = $('#pipeline_kharif_othercrop_waterdemand5').val();
    obj.pipeline_kharif_othercrop_pipeline_waterdemand5 = $('#pipeline_kharif_othercrop_pipeline_waterdemand5').val();
    obj.pipeline_kharif_othercrop_reduc_gw_demand5 = $('#pipeline_kharif_othercrop_reduc_gw_demand5').val();

    obj.pipeline_rabi_othercrop_name1 = $('#pipeline_rabi_othercrop_name1').val();
    obj.pipeline_rabi_othercrop_area1 = $('#pipeline_rabi_othercrop_area1').val();
    obj.pipeline_rabi_othercrop_irri_area1 = $('#pipeline_rabi_othercrop_irri_area1').val();
    obj.pipeline_rabi_othercrop_water_req1 = $('#pipeline_rabi_othercrop_water_req1').val();
    obj.pipeline_rabi_othercrop_waterdemand1 = $('#pipeline_rabi_othercrop_waterdemand1').val();
    obj.pipeline_rabi_othercrop_pipeline_waterdemand1 = $('#pipeline_rabi_othercrop_pipeline_waterdemand1').val();
    obj.pipeline_rabi_othercrop_reduc_gw_demand1 = $('#pipeline_rabi_othercrop_reduc_gw_demand1').val();

    obj.pipeline_rabi_othercrop_name2 = $('#pipeline_rabi_othercrop_name2').val();
    obj.pipeline_rabi_othercrop_area2 = $('#pipeline_rabi_othercrop_area2').val();
    obj.pipeline_rabi_othercrop_irri_area2 = $('#pipeline_rabi_othercrop_irri_area2').val();
    obj.pipeline_rabi_othercrop_water_req2 = $('#pipeline_rabi_othercrop_water_req2').val();
    obj.pipeline_rabi_othercrop_waterdemand2 = $('#pipeline_rabi_othercrop_waterdemand2').val();
    obj.pipeline_rabi_othercrop_pipeline_waterdemand2 = $('#pipeline_rabi_othercrop_pipeline_waterdemand2').val();
    obj.pipeline_rabi_othercrop_reduc_gw_demand2 = $('#pipeline_rabi_othercrop_reduc_gw_demand2').val();

    obj.pipeline_rabi_othercrop_name3 = $('#pipeline_rabi_othercrop_name3').val();
    obj.pipeline_rabi_othercrop_area3 = $('#pipeline_rabi_othercrop_area3').val();
    obj.pipeline_rabi_othercrop_irri_area3 = $('#pipeline_rabi_othercrop_irri_area3').val();
    obj.pipeline_rabi_othercrop_water_req3 = $('#pipeline_rabi_othercrop_water_req3').val();
    obj.pipeline_rabi_othercrop_waterdemand3 = $('#pipeline_rabi_othercrop_waterdemand3').val();
    obj.pipeline_rabi_othercrop_pipeline_waterdemand3 = $('#pipeline_rabi_othercrop_pipeline_waterdemand3').val();
    obj.pipeline_rabi_othercrop_reduc_gw_demand3 = $('#pipeline_rabi_othercrop_reduc_gw_demand3').val();

    obj.pipeline_rabi_othercrop_name4 = $('#pipeline_rabi_othercrop_name4').val();
    obj.pipeline_rabi_othercrop_area4 = $('#pipeline_rabi_othercrop_area4').val();
    obj.pipeline_rabi_othercrop_irri_area4 = $('#pipeline_rabi_othercrop_irri_area4').val();
    obj.pipeline_rabi_othercrop_water_req4 = $('#pipeline_rabi_othercrop_water_req4').val();
    obj.pipeline_rabi_othercrop_waterdemand4 = $('#pipeline_rabi_othercrop_waterdemand4').val();
    obj.pipeline_rabi_othercrop_pipeline_waterdemand4 = $('#pipeline_rabi_othercrop_pipeline_waterdemand4').val();
    obj.pipeline_rabi_othercrop_reduc_gw_demand4 = $('#pipeline_rabi_othercrop_reduc_gw_demand4').val();

    obj.pipeline_rabi_othercrop_name5 = $('#pipeline_rabi_othercrop_name5').val();
    obj.pipeline_rabi_othercrop_area5 = $('#pipeline_rabi_othercrop_area5').val();
    obj.pipeline_rabi_othercrop_irri_area5 = $('#pipeline_rabi_othercrop_irri_area5').val();
    obj.pipeline_rabi_othercrop_water_req5 = $('#pipeline_rabi_othercrop_water_req5').val();
    obj.pipeline_rabi_othercrop_waterdemand5 = $('#pipeline_rabi_othercrop_waterdemand5').val();
    obj.pipeline_rabi_othercrop_pipeline_waterdemand5 = $('#pipeline_rabi_othercrop_pipeline_waterdemand5').val();
    obj.pipeline_rabi_othercrop_reduc_gw_demand5 = $('#pipeline_rabi_othercrop_reduc_gw_demand5').val();

    obj.pipeline_summer_othercrop_name1 = $('#pipeline_summer_othercrop_name1').val();
    obj.pipeline_summer_othercrop_area1 = $('#pipeline_summer_othercrop_area1').val();
    obj.pipeline_summer_othercrop_irri_area1 = $('#pipeline_summer_othercrop_irri_area1').val();
    obj.pipeline_summer_othercrop_water_req1 = $('#pipeline_summer_othercrop_water_req1').val();
    obj.pipeline_summer_othercrop_waterdemand1 = $('#pipeline_summer_othercrop_waterdemand1').val();
    obj.pipeline_summer_othercrop_pipeline_waterdemand1 = $('#pipeline_summer_othercrop_pipeline_waterdemand1').val();
    obj.pipeline_summer_othercrop_reduc_gw_demand1 = $('#pipeline_summer_othercrop_reduc_gw_demand1').val();

    obj.pipeline_summer_othercrop_name2 = $('#pipeline_summer_othercrop_name2').val();
    obj.pipeline_summer_othercrop_area2 = $('#pipeline_summer_othercrop_area2').val();
    obj.pipeline_summer_othercrop_irri_area2 = $('#pipeline_summer_othercrop_irri_area2').val();
    obj.pipeline_summer_othercrop_water_req2 = $('#pipeline_summer_othercrop_water_req2').val();
    obj.pipeline_summer_othercrop_waterdemand2 = $('#pipeline_summer_othercrop_waterdemand2').val();
    obj.pipeline_summer_othercrop_pipeline_waterdemand2 = $('#pipeline_summer_othercrop_pipeline_waterdemand2').val();
    obj.pipeline_summer_othercrop_reduc_gw_demand2 = $('#pipeline_summer_othercrop_reduc_gw_demand2').val();

    obj.pipeline_summer_othercrop_name3 = $('#pipeline_summer_othercrop_name3').val();
    obj.pipeline_summer_othercrop_area3 = $('#pipeline_summer_othercrop_area3').val();
    obj.pipeline_summer_othercrop_irri_area3 = $('#pipeline_summer_othercrop_irri_area3').val();
    obj.pipeline_summer_othercrop_water_req3 = $('#pipeline_summer_othercrop_water_req3').val();
    obj.pipeline_summer_othercrop_waterdemand3 = $('#pipeline_summer_othercrop_waterdemand3').val();
    obj.pipeline_summer_othercrop_pipeline_waterdemand3 = $('#pipeline_summer_othercrop_pipeline_waterdemand3').val();
    obj.pipeline_summer_othercrop_reduc_gw_demand3 = $('#pipeline_summer_othercrop_reduc_gw_demand3').val();

    obj.pipeline_summer_othercrop_name4 = $('#pipeline_summer_othercrop_name4').val();
    obj.pipeline_summer_othercrop_area4 = $('#pipeline_summer_othercrop_area4').val();
    obj.pipeline_summer_othercrop_irri_area4 = $('#pipeline_summer_othercrop_irri_area4').val();
    obj.pipeline_summer_othercrop_water_req4 = $('#pipeline_summer_othercrop_water_req4').val();
    obj.pipeline_summer_othercrop_waterdemand4 = $('#pipeline_summer_othercrop_waterdemand4').val();
    obj.pipeline_summer_othercrop_pipeline_waterdemand4 = $('#pipeline_summer_othercrop_pipeline_waterdemand4').val();
    obj.pipeline_summer_othercrop_reduc_gw_demand4 = $('#pipeline_summer_othercrop_reduc_gw_demand4').val();

    obj.pipeline_summer_othercrop_name5 = $('#pipeline_summer_othercrop_name5').val();
    obj.pipeline_summer_othercrop_area5 = $('#pipeline_summer_othercrop_area5').val();
    obj.pipeline_summer_othercrop_irri_area5 = $('#pipeline_summer_othercrop_irri_area5').val();
    obj.pipeline_summer_othercrop_water_req5 = $('#pipeline_summer_othercrop_water_req5').val();
    obj.pipeline_summer_othercrop_waterdemand5 = $('#pipeline_summer_othercrop_waterdemand5').val();
    obj.pipeline_summer_othercrop_pipeline_waterdemand5 = $('#pipeline_summer_othercrop_pipeline_waterdemand5').val();
    obj.pipeline_summer_othercrop_reduc_gw_demand5 = $('#pipeline_summer_othercrop_reduc_gw_demand5').val();


    ////crops  others
    //obj.pipeline_kharif_othercrop_name = $('#pipeline_kharif_othercrop_name').val();
    //obj.pipeline_kharif_othercrop_area = $('#pipeline_kharif_othercrop_area').val();
    //obj.pipeline_kharif_othercrop_irri_area = $('#pipeline_kharif_othercrop_irri_area').val();
    //obj.pipeline_kharif_othercrop_water_req = $('#pipeline_kharif_othercrop_water_req').val();
    //obj.pipeline_kharif_othercrop_waterdemand = $('#pipeline_kharif_othercrop_waterdemand').text();
    //obj.pipeline_kharif_othercrop_pipeline_waterdemand = $('#pipeline_kharif_othercrop_pipeline_waterdemand').text();
    //obj.pipeline_kharif_othercrop_reduc_gw_demand = $('#pipeline_kharif_othercrop_reduc_gw_demand').text();


    //obj.pipeline_rabi_othercrop_name = $('#pipeline_rabi_othercrop_name').val();
    //obj.pipeline_rabi_othercrop_area = $('#pipeline_rabi_othercrop_area').val();
    //obj.pipeline_rabi_othercrop_irri_area = $('#pipeline_rabi_othercrop_irri_area').val();
    //obj.pipeline_rabi_othercrop_water_req = $('#pipeline_rabi_othercrop_water_req').val();
    //obj.pipeline_rabi_othercrop_waterdemand = $('#pipeline_rabi_othercrop_waterdemand').text();
    //obj.pipeline_rabi_othercrop_pipeline_waterdemand = $('#pipeline_rabi_othercrop_pipeline_waterdemand').text();
    //obj.pipeline_rabi_othercrop_reduc_gw_demand = $('#pipeline_rabi_othercrop_reduc_gw_demand').text();

    //obj.pipeline_summer_othercrop_name = $('#pipeline_summer_othercrop_name').val();
    //obj.pipeline_summer_othercrop_area = $('#pipeline_summer_othercrop_area').val();
    //obj.pipeline_summer_othercrop_irri_area = $('#pipeline_summer_othercrop_irri_area').val();
    //obj.pipeline_summer_othercrop_water_req = $('#pipeline_summer_othercrop_water_req').val();
    //obj.pipeline_summer_othercrop_waterdemand = $('#pipeline_summer_othercrop_waterdemand').text();
    //obj.pipeline_summer_othercrop_pipeline_waterdemand = $('#pipeline_summer_othercrop_pipeline_waterdemand').text();
    //obj.pipeline_summer_othercrop_reduc_gw_demand = $('#pipeline_summer_othercrop_reduc_gw_demand').text();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSPHome/PipelineSavedData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Saved Successfully" && response != "Logout" && response != "valid_negitive") {
                window.location = "/Error/DefaultError";
            }  
            $('#SAVE_BTN3').prop('disabled', false);

            //$('#ar_Error').text(response);

            //Draft_Report();
            //Availabilty_Report();
        }
    });

}



function PipelinePopUp(SS) {
    Pipeline_Kharif_WaterRequire();
    Pipeline_Rabi_WaterRequire();
    Pipeline_Crop_WaterRequire();

    // Kharif
    if (SS == "pipeline_kharif_paddy_crop_area") {

        $('#pipeline_Individual_Name').text("Paddy");

        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_paddy_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_paddy_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_paddy_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_ragi_crop_area") {
        $('#pipeline_Individual_Name').text("Ragi");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_ragi_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_ragi_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_ragi_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_groundnut_crop_area") {
        $('#pipeline_Individual_Name').text("Groundnut");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_groundnut_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_groundnut_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_groundnut_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_sugarcane_crop_area") {
        $('#pipeline_Individual_Name').text("Sugarcane");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_sugarcane_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_sugarcane_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_sugarcane_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_tomoto_crop_area") {
        $('#pipeline_Individual_Name').text("Veletables");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_tomoto_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_tomoto_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_tomoto_reduction_water_demand).toFixed(2));

    }
    //else if (SS == "pipeline_kharif_cabbage_crop_area") {
    //    $('#pipeline_Individual_Name').text("Cabbage");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_cabbage_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_cabbage_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_cabbage_reduction_water_demand).toFixed(2));

    //}

    //else if (SS == "pipeline_kharif_beans_crop_area") {
    //    $('#pipeline_Individual_Name').text("Beans");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_beans_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_beans_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_beans_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_kharif_floriculture_crop_area") {
        $('#pipeline_Individual_Name').text("Floriculture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_floriculture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_floriculture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_floriculture_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_sericulture_crop_area") {
        $('#pipeline_Individual_Name').text("Sericulture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_sericulture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_sericulture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_sericulture_reduction_water_demand).toFixed(2));

    }
    //else if (SS == "pipeline_kharif_cucumber_crop_area") {
    //    $('#pipeline_Individual_Name').text("Cucumber");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_cucumber_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_cucumber_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_cucumber_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_kharif_banana_crop_area") {
        $('#pipeline_Individual_Name').text("Banana");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_banana_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_banana_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_banana_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_fodder_crop_area") {
        $('#pipeline_Individual_Name').text("Fodder");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_fodder_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_fodder_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_fodder_reduction_water_demand).toFixed(2));

    }

    else if (SS == "pipeline_kharif_maize_crop_area") {
        $('#pipeline_Individual_Name').text("Maize");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_maize_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_maize_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_maize_reduction_water_demand).toFixed(2));

    }
    //else if (SS == "pipeline_kharif_potato_crop_area") {
    //    $('#pipeline_Individual_Name').text("Potato");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_potato_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_potato_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_potato_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_kharif_chillies_crop_area") {
        $('#pipeline_Individual_Name').text("Chillies");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_chillies_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_chillies_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_chillies_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_cotton_crop_area") {
        $('#pipeline_Individual_Name').text("Cotton");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_cotton_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_cotton_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_cotton_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_melon_crop_area") {
        $('#pipeline_Individual_Name').text("Melon");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_melon_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_melon_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_melon_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_kharif_citrus_crop_area") {
        $('#pipeline_Individual_Name').text("Citrus");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_citrus_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_citrus_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_citrus_reduction_water_demand).toFixed(2));

    }



    //else if (SS == "pipeline_kharif_peanut_crop_area") {
    //    $('#pipeline_Individual_Name').text("Peanut");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_peanut_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_peanut_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_peanut_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_kharif_horticulture_crop_area") {
        $('#pipeline_Individual_Name').text("Horticulture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_horticulture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_horticulture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_horticulture_reduction_water_demand).toFixed(2));

    }

    else if (SS == "pipeline_kharif_othercrop_area") {
        var CropName = $('#pipeline_kharif_othercrop_name').val();
        $('#pipeline_Individual_Name').text(CropName);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_othercrop_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_othercrop_reduc_gw_demand).toFixed(2));

    }
    //Rabbi

    else if (SS == "pipeline_rabi_sericulture_crop_area") {
        $('#pipeline_Individual_Name').text("Sericulture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_sericulture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_sericulture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_sericulture_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_tomoto_crop_area") {
        $('#pipeline_Individual_Name').text("Veletables");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_tomoto_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_tomoto_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_tomoto_reduction_water_demand).toFixed(2));

    }
    //else if (SS == "pipeline_rabi_cabbage_crop_area") {
    //    $('#pipeline_Individual_Name').text("Cabbage");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_cabbage_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_cabbage_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_cabbage_reduction_water_demand).toFixed(2));

    //}
    //else if (SS == "pipeline_rabi_beans_crop_area") {
    //    $('#pipeline_Individual_Name').text("Beans");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_beans_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_beans_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_beans_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_rabi_floriculture_crop_area") {
        $('#pipeline_Individual_Name').text("Floriculture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_floriculture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_floriculture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_floriculture_reduction_water_demand).toFixed(2));

    }
    //else if (SS == "pipeline_rabi_potato_crop_area") {
    //    $('#pipeline_Individual_Name').text("Potato");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_potato_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_potato_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_potato_reduction_water_demand).toFixed(2));

    //}
    //else if (SS == "pipeline_rabi_cucumber_crop_area") {
    //    $('#pipeline_Individual_Name').text("Cucumber");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_cucumber_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_cucumber_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_cucumber_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_rabi_ragi_crop_area") {
        $('#pipeline_Individual_Name').text("Ragi");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_ragi_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_ragi_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_ragi_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_sugarcane_crop_area") {
        $('#pipeline_Individual_Name').text("Sugarcane");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_sugarcane_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_sugarcane_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_sugarcane_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_maize_crop_area") {
        $('#pipeline_Individual_Name').text("Maize");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_maize_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_maize_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_maize_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_fodder_crop_area") {
        $('#pipeline_Individual_Name').text("Fodder");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_fodder_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_fodder_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_fodder_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_paddy_crop_area") {
        $('#pipeline_Individual_Name').text("Paddy");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_paddy_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_paddy_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_paddy_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_alfalfa_crop_area") {
        $('#pipeline_Individual_Name').text("Alfalfa");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_alfalfa_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_alfalfa_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_alfalfa_reduction_water_demand).toFixed(2));

    }
    //else if (SS == "pipeline_rabi_onion_crop_area") {
    //    $('#pipeline_Individual_Name').text("Onion");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_onion_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_onion_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_onion_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_rabi_horticulture_crop_area") {
        $('#pipeline_Individual_Name').text("Horticulture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_horticulture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_horticulture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_horticulture_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_rabi_sunflower_crop_area") {
        $('#pipeline_Individual_Name').text("Sunflower");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_sunflower_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_sunflower_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_sunflower_reduction_water_demand).toFixed(2));

    }

    else if (SS == "pipeline_rabi_othercrop_area") {
        var CropName = $('#pipeline_rabi_othercrop_name').val();
        $('#pipeline_Individual_Name').text(CropName);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_othercrop_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_othercrop_reduc_gw_demand).toFixed(2));

    }

    else if (SS == "pipeline_summer_horticulture_crop_area") {
        $('#pipeline_Individual_Name').text("Horticulture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_horticulture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_horticulture_netwater_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_horticulture_reduction_gw_demand).toFixed(2));

    }

    else if (SS == "pipeline_summer_sericulture_crop_area") {
        $('#pipeline_Individual_Name').text("Sericulture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_sericulture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_sericulture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_sericulture_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_summer_tomoto_crop_area") {
        $('#pipeline_Individual_Name').text("Veletables");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_tomoto_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_tomoto_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_tomoto_reduction_water_demand).toFixed(2));
    }
    //else if (SS == "pipeline_summer_cabbage_crop_area") {
    //    $('#pipeline_Individual_Name').text("Cabbage");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_cabbage_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_cabbage_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_cabbage_reduction_water_demand).toFixed(2));

    //}
    //else if (SS == "pipeline_summer_beans_crop_area") {
    //    $('#pipeline_Individual_Name').text("Beans");
    //    $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_beans_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_beans_pipeline_waterdemand).toFixed(2));
    //    $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_beans_reduction_water_demand).toFixed(2));

    //}
    else if (SS == "pipeline_summer_floriculture_crop_area") {
        $('#pipeline_Individual_Name').text("Floriculture");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_floriculture_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_floriculture_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_floriculture_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_summer_maize_crop_area") {
        $('#pipeline_Individual_Name').text("Maize");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_maize_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_maize_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_maize_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_summer_fodder_crop_area") {
        $('#pipeline_Individual_Name').text("Fodder");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_fodder_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_fodder_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_fodder_reduction_water_demand).toFixed(2));

    }
    else if (SS == "pipeline_summer_sugarcane_crop_area") {
        $('#pipeline_Individual_Name').text("Sugarcane");
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_sugarcane_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_sugarcane_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_sugarcane_reduction_water_demand).toFixed(2));

    }

    else if (SS == "pipeline_summer_othercrop_area") {
        var CropName = $('#pipeline_summer_othercrop_name').val();
        $('#pipeline_Individual_Name').text(CropName);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_othercrop_waterdemand).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_othercrop_pipeline_waterdemand).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_othercrop_reduc_gw_demand).toFixed(2));

    }



}


function Pipeline_otherpopup(ss) {


    Pipeline_Kharif_WaterRequire();
    Pipeline_Rabi_WaterRequire();
    Pipeline_Crop_WaterRequire();

    if (ss == "pipeline_kharif_othercrop_area1") {
        var Name = $('#pipeline_kharif_othercrop_name1').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_othercrop_waterdemand1).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand1).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss == "pipeline_kharif_othercrop_area2") {
        var Name = $('#pipeline_kharif_othercrop_name2').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_othercrop_waterdemand2).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand2).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss == "pipeline_kharif_othercrop_area3") {
        var Name = $('#pipeline_kharif_othercrop_name3').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_othercrop_waterdemand3).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand3).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss == "pipeline_kharif_othercrop_area4") {
        var Name = $('#pipeline_kharif_othercrop_name4').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_othercrop_waterdemand4).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand4).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss == "pipeline_kharif_othercrop_area5") {
        var Name = $('#pipeline_kharif_othercrop_name5').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_kharif_othercrop_waterdemand5).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_kharif_othercrop_pipeline_waterdemand5).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_kharif_othercrop_reduc_gw_demand5).toFixed(2));
    }

    if (ss == "pipeline_rabi_othercrop_area1") {

        var Name = $('#pipeline_rabi_othercrop_name1').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_othercrop_waterdemand1).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand1).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss == "pipeline_rabi_othercrop_area2") {

        var Name = $('#pipeline_rabi_othercrop_name2').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_othercrop_waterdemand2).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand2).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss == "pipeline_rabi_othercrop_area3") {

        var Name = $('#pipeline_rabi_othercrop_name3').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_othercrop_waterdemand3).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand3).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss == "pipeline_rabi_othercrop_area4") {

        var Name = $('#pipeline_rabi_othercrop_name4').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_othercrop_waterdemand4).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand4).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss == "pipeline_rabi_othercrop_area5") {

        var Name = $('#pipeline_rabi_othercrop_name5').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_rabi_othercrop_waterdemand5).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_rabi_othercrop_pipeline_waterdemand5).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_rabi_othercrop_reduc_gw_demand5).toFixed(2));
    }


    if (ss == "pipeline_summer_othercrop_area1") {
        var Name = $('#pipeline_summer_othercrop_name1').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_othercrop_waterdemand1).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_othercrop_pipeline_waterdemand1).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_othercrop_reduc_gw_demand1).toFixed(2));
    }
    else if (ss == "pipeline_summer_othercrop_area2") {
        var Name = $('#pipeline_summer_othercrop_name2').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_othercrop_waterdemand2).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_othercrop_pipeline_waterdemand2).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_othercrop_reduc_gw_demand2).toFixed(2));
    }
    else if (ss == "pipeline_summer_othercrop_area3") {
        var Name = $('#pipeline_summer_othercrop_name3').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_othercrop_waterdemand3).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_othercrop_pipeline_waterdemand3).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_othercrop_reduc_gw_demand3).toFixed(2));
    }
    else if (ss == "pipeline_summer_othercrop_area4") {
        var Name = $('#pipeline_summer_othercrop_name4').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_othercrop_waterdemand4).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_othercrop_pipeline_waterdemand4).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_othercrop_reduc_gw_demand4).toFixed(2));
    }
    else if (ss == "pipeline_summer_othercrop_area5") {
        var Name = $('#pipeline_summer_othercrop_name5').val();
        $('#pipeline_Individual_Name').text(Name);
        $('#pipeline_IndividualWaterDemand').text(parseFloat(pipeline_summer_othercrop_waterdemand5).toFixed(2));
        $('#pipeline_Individual_pipeline_Water_Demand').text(parseFloat(pipeline_summer_othercrop_pipeline_waterdemand5).toFixed(2));
        $('#pipeline_Individual_Reduction_in_GW_demand').text(parseFloat(pipeline_summer_othercrop_reduc_gw_demand5).toFixed(2));
    }

}

